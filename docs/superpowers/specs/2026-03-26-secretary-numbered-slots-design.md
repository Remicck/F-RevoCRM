# Secretary ナンバリングスロット機能 設計書

## 概要

secretary skillのGoodnightフロー・Goodmorningフローに番号（スロット）を指定できるようにする。
複数のタスクを同時並行で進める際に、スロットごとに独立したセッションログを保持できるようにする。

## 背景・動機

現在のsecretaryは `latest.md` 1ファイルのみをセッションログとして保存・ロードする。
複数ブランチ・複数タスクを並行して進める場合、切り替えのたびにログが上書きされてしまう。
ナンバリングスロットにより、複数のコンテキストを独立して保存・復元できるようにする。

## ファイル構造

```
/var/www/html/OutputFromClaude/goodnight_log/
├── latest.md                    ← 既存（番号なし、変更なし）
├── latest_1.md                  ← スロット1
├── latest_2.md                  ← スロット2
├── latest_N.md                  ← スロットN
├── decisions.md                 ← 全スロット共通の判断履歴
├── YYYY-MM-DD_HH-MM.md          ← 既存アーカイブ（番号なし）
├── YYYY-MM-DD_HH-MM_1.md        ← スロット1のアーカイブ
├── YYYY-MM-DD_HH-MM_2.md        ← スロット2のアーカイブ
└── YYYY-MM-DD_HH-MM_N.md        ← スロットNのアーカイブ
```

- `decisions.md` はスロット横断で共通（判断履歴はセッション全体で管理）
- アーカイブの保持ポリシー（7日）は番号ありスロットにも適用

## トリガー仕様

| 入力例 | 動作 |
|--------|------|
| `おやすみ` | 既存通り `latest.md` に保存（変更なし） |
| `おやすみ1` | `latest_1.md` に保存。既存の `latest_1.md` があれば `YYYY-MM-DD_HH-MM_1.md` としてアーカイブ |
| `おやすみN` | `latest_N.md` に保存。既存の `latest_N.md` があれば `YYYY-MM-DD_HH-MM_N.md` としてアーカイブ |
| `おはよう` | 既存通り `latest.md` をロード（変更なし） |
| `おはよう1` | `latest_1.md` をロードしてブリーフィング |
| `おはようN` | `latest_N.md` をロードしてブリーフィング |
| `/log list` | 全スロットの一覧を表示 |

### おやすみ系トリガー（番号あり）の追加パターン

以下の形式を検出する（既存トリガーに加えて）:
- `おやすみ[数字]`、`おやすみなさい[数字]`、`goodnight[数字]`、`good night [数字]`
- 数字は1以上の整数

### おはよう系トリガー（番号あり）の追加パターン

以下の形式を検出する（既存トリガーに加えて）:
- `おはよう[数字]`、`おはようございます[数字]`、`goodmorning[数字]`、`good morning [数字]`
- 数字は1以上の整数

## Goodnightフロー（番号あり）の動作

1. スロット番号 N を取得する（入力から数字部分を抽出）
2. `/var/www/html/OutputFromClaude/goodnight_log/latest_N.md` が存在すれば、`YYYY-MM-DD_HH-MM_N.md` としてアーカイブ（コピー）する
3. セッション内容を `latest_N.md` に保存（フォーマットは既存の `latest.md` と同一）
4. アーカイブ保持ポリシー: `YYYY-MM-DD_HH-MM_N.md` 形式のファイルで7日以上経過したものを削除
   - コマンド例: `find /var/www/html/OutputFromClaude/goodnight_log -name "????-??-??_??-??_*.md" -mtime +7 -delete`
5. 「お疲れ様でした。スロットNにセッションログを保存しました。」と伝える

## Goodmorningフロー（番号あり）の動作

1. スロット番号 N を取得する
2. `/var/www/html/OutputFromClaude/goodnight_log/latest_N.md` を読み込む
3. ファイルが存在しない場合: 「スロットNのセッションログが見つかりません。新しいタスクから始めましょう。」と伝える
4. ファイルが存在する場合: 既存のブリーフィング形式で表示（スロット番号を明記）

**ブリーフィング形式（番号あり）:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 おはようございます [スロットN]  YYYY-MM-DD(曜)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【前回の状態】
...（既存と同様）
```

## `/log list` の動作

1. `/var/www/html/OutputFromClaude/goodnight_log/` 内の全ての `latest*.md` ファイルを列挙する
   - `latest.md`（デフォルトスロット）
   - `latest_1.md`, `latest_2.md`, ... （番号ありスロット）
2. 存在するファイルのみ表示（存在しないスロットはスキップ）
3. 各ファイルから以下を抽出して表示:
   - スロット番号（または「デフォルト」）
   - 保存日時（ファイル内の `# SESSION YYYY-MM-DD HH:MM` から取得）
   - ブランチ名（`branch:` フィールド）
   - ブランチ目的（`branch_purpose:` フィールド）
   - NEXT_ACTIONSの先頭1件

**表示フォーマット:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 セッションログ一覧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[デフォルト]  YYYY-MM-DD HH:MM
  ブランチ: <branch名> — <branch_purpose>
  次: <NEXT_ACTIONSの1番>

[スロット1]  YYYY-MM-DD HH:MM
  ブランチ: <branch名> — <branch_purpose>
  次: <NEXT_ACTIONSの1番>

[スロット2]  YYYY-MM-DD HH:MM
  ブランチ: <branch名> — <branch_purpose>
  次: <NEXT_ACTIONSの1番>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## 変更対象

- `/home/adachi/.claude/skills/secretary/SKILL.md` — トリガー検出・フロー定義を追加

## 変更しないもの

- 既存の番号なし `おやすみ` / `おはよう` の動作
- `latest.md` のフォーマット
- `decisions.md` の仕様
- アーカイブ保持ポリシーの期間（7日）
