# PHPUnit テスト

F-RevoCRM の PHP 側テスト一式。フロント（`assets/react-web-components/`）のテストは Vitest なので対象外。

## セットアップ

```bash
composer install
```

PHPUnit は `require-dev` に入っている。`composer.json` の `config.platform.php` で
解決時の PHP を 8.3 に固定しているため、ローカルの PHP が 8.3〜8.5 のどれでも同じ依存が入る。

## 実行

```bash
composer test                                          # Unit（既定。DB 不要）
composer test:integration                              # Integration（テスト用 DB が要る）
./tests/ci/run-integration.sh                          # Integration を DB コンテナごと用意して実行（推奨）
./vendor/bin/phpunit                                   # Unit（phpunit.xml の defaultTestSuite）
./vendor/bin/phpunit --testsuite Unit                  # Unit のみ
./vendor/bin/phpunit tests/Unit/Inventory              # ディレクトリ指定
./vendor/bin/phpunit tests/Unit/Inventory/IndividualTaxTranslationTest.php  # ファイル指定
./vendor/bin/phpunit --filter translateTaxLabels       # メソッド名で絞り込み
```

設定は `phpunit.xml`（bootstrap / testsuite / カバレッジ対象）。
`defaultTestSuite="Unit"` にしているため、引数なしの実行は Unit だけを走らせる。

Unit と Integration を同じプロセスで走らせることはできない。Unit 用のスタブ
（`tests/Support/LanguageHandlerStubs.php` の `Vtiger_Language_Handler` など）と
本体のクラス・関数が衝突するため（本体側は再宣言のガードを持たない）。
Integration は `composer test:integration` で別に実行する。

main 向けの Pull Request では GitHub Actions（`.github/workflows/phpunit.yml`）が両方を実行する。

| ジョブ | 対象 | DB |
|---|---|---|
| `phpunit` | `tests/Unit` | 立てない。`config.template.php` から生成した `config.inc.php`（接続情報はダミー）で実行 |
| `integration` | `tests/Integration` | `tests/ci/run-integration.sh` が E2E と同じ dump を投入した DB コンテナを立てる |

テストの方針（どこから書くか・網羅性をどう担保するか）は [`STRATEGY.md`](STRATEGY.md) を参照。

## ディレクトリ構成

| パス | 役割 |
|---|---|
| `tests/bootstrap.php` | テスト用ブートストラップ。DB 接続先の切り替えと安全装置 |
| `tests/Unit/` | 単体テスト（DB 不要）。本体のディレクトリ構成に合わせて配置する |
| `tests/Integration/` | DB を使うテスト |
| `tests/Support/` | テスト用のスタブ・ヘルパ（テスト本体ではない） |

`tests/Support/` にはテスト対象の代わりに動かすスタブや、テストから起動するスクリプトも置く。
クラス以外をまとめる場合は対象ごとの小文字のサブディレクトリにする（名前空間ではないため）。
例: `tests/Support/cron/` にはスケジューラのテストが実行する `.service` スタブハンドラと、
テスト用DB を指したまま `vtigercron.php` を起動するための入口スクリプトがある。

## ドキュメントモジュールのテスト

`docs/tests/Documents/` の仕様書に対応する。各テストメソッドのメッセージに
仕様書のケースID（`TC-BD-001` など）を入れてあるので、失敗したら仕様書を引ける。

| パス | 対応する仕様書 |
|---|---|
| `tests/Integration/Documents/JapaneseHolidaysTest.php` | TS-01 4.5 祝日の算出 / 4.6 CSV解析 |
| `tests/Integration/Documents/BusinessDayTest.php` | TS-01 4.1〜4.4 営業日・休祝日 |
| `tests/Integration/Documents/DeadlineTest.php` | TS-03 入力期限 |
| `tests/Integration/Documents/DeleteGuardTest.php` | TS-05 電帳法対象の削除禁止 |
| `tests/Integration/Documents/ComplianceOnSaveTest.php` | TS-05 保存時の適合判定 |

結合テストは `Tests\Support\DocumentsTestCase` を継承する。この基底クラスが
F-RevoCRM 本体の読み込み・実行ユーザーの切り替え・テストデータの後始末を引き受ける。

```php
namespace Tests\Integration\Documents;

use Tests\Support\DocumentsTestCase;

require_once dirname(__DIR__, 3) . '/tests/Support/DocumentsTestCase.php';

final class FooTest extends DocumentsTestCase
{
    public function test_TC_XX_001_なにをどう検証するか(): void
    {
        $notesId = $this->createDocument('Foo');
        // ...
    }
}
```

作成したドキュメント・フォルダ・休祝日は接頭辞 `SPECTEST_` を付け、
`tearDown()` でまとめて消す。ドキュメント設定と週休設定はテストごとに退避・復元する。

`tests/bootstrap.php` は `Vtiger_Loader` のオートロードを外すが、結合テストは本体を
まるごと使うため `DocumentsTestCase::setUpBeforeClass()` で登録し直している
（PHPUnit のクラス探索が終わった後なので探索には影響しない）。

`FR_JapaneseHolidays` 自体は DB を使わないが、例外メッセージの組み立てで `vtranslate()` を
呼ぶ。この関数は本体の `includes/runtime/LanguageHandler.php` にあり、実行ユーザーを要求する
（Unit のスタブで代用すると Integration 側と衝突する）。そのため Integration に置いている。

テスト用 DB につながらない場合、`DocumentsTestCase` を継承したテストは理由付きで skip する。
ただし環境変数 `FREVOCRM_REQUIRE_TEST_DB=1` のときは、`tests/bootstrap.php` が
DB に接続できない・初期データが無い状態を起動時に失敗として扱う。CI（`run-integration.sh`）は
これを付けて実行し、DB の用意に失敗したのに全件 skip で緑になるのを防いでいる。

vtiger のコア側（`LanguageHandler` / `VTEntityDelta` / `VTEntityCache` など）が出す
PHP 警告・非推奨の通知が大量に出る。本番では `config.inc.php` の `error_reporting` で抑止されている
既存の状態で、結合テストは本体の保存経路をそのまま通るため避けられない。
そのため `composer test:integration` は `--do-not-fail-on-warning` 付きで実行し、
警告は一覧に表示するが失敗にはしない（Unit は `phpunit.xml` の `failOnWarning` のまま）。

命名は `<対象>Test.php`、namespace は配置に合わせる（例: `tests/Unit/Inventory/` → `namespace Tests\Unit\Inventory;`）。
`composer.json` の `autoload-dev` で `Tests\` → `tests/` を PSR-4 マップしている。

## テスト用 DB

### Docker で用意する（推奨）

```bash
./tests/ci/run-integration.sh                  # DB 起動 → dump 投入 → migration → 結合テスト
./tests/ci/run-integration.sh --filter BusinessDayTest   # PHPUnit の引数はそのまま渡る
```

E2E（`e2e/ci/run-e2e.sh`）と同じ dump（`e2e/fixtures/e2e_dump.sql`）を、`compose.integration.yaml` で
テスト用 DB `frevocrm_test` に投入する。ボリュームは開発用と分けてあり、開発 DB には触れない。
PHP は実行ホストのものを使うため、先に `composer install` を済ませておく。
ホストの 3306 番を使うので、開発用の db コンテナが動いている場合は止めてから実行する。
dump を入れ直したいときは `docker compose -f compose.yaml -f compose.ci.yaml -f compose.integration.yaml down -v`。

### 手動で用意する

`tests/bootstrap.php` は `config.inc.php` を読み込んだ上で接続先 DB を **テスト用 DB に強制**する。

- 既定のテスト DB 名: `config.inc.php` の `db_name` + `_test`
- 環境変数で上書き可: `FREVOCRM_TEST_DB_NAME` / `FREVOCRM_TEST_DB_HOST` / `FREVOCRM_TEST_DB_USERNAME` / `FREVOCRM_TEST_DB_PASSWORD`

安全装置として、DB 名が `_test` で終わらない場合と、実接続先（`SELECT DATABASE()`）が
`_test` で終わらない場合は起動時に中止する。開発 DB を誤って壊さないための仕掛けなので外さないこと。

Unit テストは DB に触らないため、テスト DB が存在しなくても実行できる（接続失敗は無視される）。
`tests/Integration/` にテストを追加する場合は、あらかじめテスト用 DB を作成し
F-RevoCRM のスキーマを投入しておく。

`tests/Integration/Migration/Utf8mb4ConversionTest.php` は接続中の DB 全体を対象にする
マイグレーション（#77）を実際に動かすため、実行するとテスト用 DB の全テーブルが
utf8mb4 に変換される。開発 DB は bootstrap の安全装置で守られているが、
テスト用 DB の文字セットを別の値のまま使いたい場合はこのテストを外すこと。

```bash
mysql -u <user> -p -e "CREATE DATABASE <db_name>_test DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_general_ci"
```

`tests/Integration/Documents/` は初期データ（ユーザー・役割・グループ・フォルダ・
選択リスト）に依存するため、スキーマだけでは動かない。開発DBを丸ごと複製するのが手早い。

```bash
mysqldump -u <user> -p --single-transaction <db_name> | mysql -u <user> -p <db_name>_test
```

## テストの書き方

`tests/bootstrap.php` は `Vtiger_Loader` のオートロードを **意図的に外す**（PHPUnit のクラス探索で
Vtiger 側の require が走って落ちるため）。そのためテスト側で必要なクラスを明示 `require_once` する。

vtiger の継承チェーンやグローバル関数のスタブは `tests/Support/` にまとまっている。

- `VtigerActionTestSupport.php`: Action / Settings 系の継承チェーン、`Vtiger_Request`、`Vtiger_Session`、`csrf_check()` などのスタブ
- `VtigerViewTestStubs.php`: View 系（`Vtiger_View_Controller` 継承）のロードと `vimport()` スタブ
- `LanguageHandlerStubs.php`: `languages/` の言語ファイルを直接読む `Vtiger_Language_Handler` スタブ

```php
namespace Tests\Unit\Foo;

use PHPUnit\Framework\TestCase;

require_once dirname(__DIR__, 3) . '/tests/Support/VtigerActionTestSupport.php';
require_once dirname(__DIR__, 3) . '/modules/Foo/actions/Bar.php';

final class BarTest extends TestCase
{
    public function test_なにをどう検証するか(): void
    {
        // ...
    }
}
```

### 結合テストで本体のクラスをスタブに差し替える場合

PHPUnit は実行前に全テストファイルを読み込むため、ファイルの先頭で `tests/Support/` のスタブを
`require_once` すると、同じプロセスで動く他の結合テストまでスタブを掴んで落ちる
（例: `ModTrackerTestStubs.php` の `Vtiger_Record_Model` を `DocumentsTestCase` 系が掴む）。
本体のクラスと同名のスタブを使う結合テストは、`#[RunTestsInSeparateProcesses]` と
`#[PreserveGlobalState(false)]` を付け、スタブの読み込みを `setUp()` に置く
（`tests/Integration/ModTracker/RecentActivitiesOrderTest.php` を参照）。

`phpunit.xml` は `failOnWarning` / `failOnRisky` / `beStrictAboutOutputDuringTests` を有効にしている。
テスト中の `echo` や未定義メソッドの警告もテスト失敗になる点に注意。
