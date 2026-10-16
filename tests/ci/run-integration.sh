#!/usr/bin/env bash
#
# PHPUnit の結合テスト (tests/Integration) をローカル / CI 共通で実行するスクリプト。
# DB の用意は E2E (e2e/ci/run-e2e.sh) と同じ仕組みを使う。
#
# 流れ:
#   1. compose の db だけを起動。E2E と同じ完了済みインストール dump を frevocrm_test に初回 init で投入
#   2. DB が dump 投入済みになるまで待機
#   3. config.inc.php を config.template.php から生成 (接続先は 127.0.0.1 の frevocrm_test)
#   4. run_migration.php --all でスキーマを最新化
#   5. tabdata.php / user_privileges_*.php を再生成 (DB とキャッシュの整合)
#   6. composer test:integration (DB に接続できなければ skip ではなく失敗させる)
#
# PHP はコンテナではなく実行ホストのものを使う (E2E と違い Web サーバーが要らないため)。
# 事前に composer install を済ませておくこと。
#
# ローカルで実行する場合:
#   ./tests/ci/run-integration.sh
#   ※dump は db ボリュームが空のときだけ投入される。作り直すには
#     `docker compose -f compose.yaml -f compose.ci.yaml -f compose.integration.yaml down -v`。
#     ボリュームは開発用 (db-store) と分けてある (compose.integration.yaml)。
#   ※ホストの 3306 番を使う。開発用の db コンテナが動いている場合は先に止めること。
#   ※手順 5 は追跡対象の tabdata.php / parent_tabdata.php / user_privileges/*.php を書き換える。
#     終了時に git で元へ戻す (ローカルで差分を残さないため)。
#   ※config.inc.php は内容・パーミッションとも終了時に復元する。
#
# PHPUnit への追加引数はそのまま渡す。
#   例: ./tests/ci/run-integration.sh --filter BusinessDayTest
set -euo pipefail

cd "$(dirname "$0")/../.."   # リポジトリルート

COMPOSE="docker compose -f compose.yaml -f compose.ci.yaml -f compose.integration.yaml ${COMPOSE_EXTRA:-}"
TEST_DB_NAME="frevocrm_test"
TEST_DB_HOST="${FREVOCRM_TEST_DB_HOST:-127.0.0.1}"

# 手順 5 が書き換える追跡ファイル。終了時に git で元へ戻す
GENERATED_TRACKED_FILES=(tabdata.php parent_tabdata.php user_privileges)

# 既存の config.inc.php を退避し、終了時に必ず復元する (e2e/ci/run-e2e.sh と同じ)
CONFIG_BAK=""
CONFIG_MODE=""
if [ -f config.inc.php ]; then
  CONFIG_BAK="$(mktemp)"
  cp config.inc.php "$CONFIG_BAK"
  CONFIG_MODE="$(stat -c '%a' config.inc.php 2>/dev/null || stat -f '%Lp' config.inc.php 2>/dev/null || echo '')"
  echo "==> 既存 config.inc.php を退避 (終了時に復元します)"
fi
cleanup() {
  if [ -n "$CONFIG_BAK" ] && [ -f "$CONFIG_BAK" ]; then
    cp "$CONFIG_BAK" config.inc.php && rm -f "$CONFIG_BAK"
    if [ -n "$CONFIG_MODE" ]; then
      chmod "$CONFIG_MODE" config.inc.php
    fi
    echo "==> config.inc.php を復元しました"
  elif [ -z "${CI:-}" ]; then
    # ローカルで元々無かった場合は、生成したテスト用の設定を残さない
    rm -f config.inc.php
  fi
  git checkout -q -- "${GENERATED_TRACKED_FILES[@]}" 2>/dev/null || true
  git clean -qf -- user_privileges 2>/dev/null || true
}
trap cleanup EXIT

echo "==> db コンテナ起動 (dump は初回 init で ${TEST_DB_NAME} に自動投入)"
$COMPOSE up -d --build db

echo "==> DB の dump 投入待ち"
for i in $(seq 1 90); do
  if $COMPOSE exec -T db mysql -uroot -pdocker "$TEST_DB_NAME" -N -e \
       "SELECT COUNT(*) FROM vtiger_users" >/dev/null 2>&1; then
    echo "   DB ready (dump 投入済み)"; break
  fi
  sleep 2
  if [ "$i" -eq 90 ]; then echo "!! DB が準備できませんでした"; exit 1; fi
done

echo "==> config.inc.php を生成"
sed -e "s#_DBC_SERVER_#${TEST_DB_HOST}#g" \
    -e "s#_DBC_PORT_#3306#g" \
    -e "s#_DBC_USER_#root#g" \
    -e "s#_DBC_PASS_#docker#g" \
    -e "s#_DBC_NAME_#${TEST_DB_NAME}#g" \
    -e "s#_DBC_TYPE_#mysqli#g" \
    -e "s#_DB_STAT_#true#g" \
    -e "s#_SITE_URL_#http://localhost#g" \
    -e "s#_VT_ROOTDIR_#$(pwd)/#g" \
    -e "s#_VT_CACHEDIR_#cache/#g" \
    -e "s#_VT_TMPDIR_#cache/images/#g" \
    -e "s#_VT_UPLOADDIR_#storage/#g" \
    -e "s#_MASTER_CURRENCY_#Japan, Yen#g" \
    -e "s#_VT_CHARSET_#UTF-8#g" \
    -e "s#_VT_DEFAULT_LANGUAGE_#ja_jp#g" \
    -e "s#_VT_APP_UNIQKEY_#0123456789abcdef0123456789abcdef#g" \
    -e "s#_USER_SUPPORT_EMAIL_#support@example.com#g" \
    config.template.php > config.inc.php

mkdir -p cache/images storage logs test/templates_c

echo "==> migration 適用 (スキーマ最新化)"
php setup/migration/run_migration.php --all

echo "==> キャッシュ再生成 (tabdata / user_privileges)"
php setup/scripts/RecreateUserFiles.php

echo "==> PHPUnit (Integration) 実行"
# bootstrap が接続先を _test に強制する。ここでは config.inc.php の DB 名そのものを使わせる。
# FREVOCRM_REQUIRE_TEST_DB=1 で、DB に接続できないときに skip せず失敗させる。
FREVOCRM_TEST_DB_NAME="$TEST_DB_NAME" \
FREVOCRM_REQUIRE_TEST_DB=1 \
  composer test:integration -- "$@"
