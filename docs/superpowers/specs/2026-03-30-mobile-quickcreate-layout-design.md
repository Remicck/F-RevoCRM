# スマホ版クイック作成フォーム レイアウト改善設計

**日付:** 2026-03-30
**対象ファイル:**
- `assets/react-web-components/src/components/FieldRenderer.tsx`
- `assets/react-web-components/src/components/ui/tiptap/tiptap.tsx`
- `assets/react-web-components/src/components/ui/tiptap/tiptap.css`

---

## 概要

スマートフォン幅（767px以下）のクイック作成フォームにおけるUIを改善する。
PC（768px以上）は現状維持。スマホ全画面でラベル・入力欄を縦積みレイアウトに変更し、
RichTextEditor（Tiptap）のツールバーを横スクロール対応にする。

---

## 要件

| 項目 | 内容 |
|------|------|
| 適用範囲 | スマホ幅（〜767px）のみ。全Tiptap利用箇所に適用 |
| PC表示 | 変更なし |
| ツールバー背景色 | `#ffffff`（白） |
| グラデーション色 | `#e8e8e8`（グレー） |
| ドロップダウン展開方向 | 下展開・全幅 |
| フォントサイズ表示 | グリッド（5列×2行） |

---

## 実装方針

### 1. 全フィールドのスタック化（FieldRenderer.tsx）

Tailwind レスポンシブクラスのみで実装する（JS・isMobileフラグ不要）。

**変更前:**
```tsx
<div className="flex items-start gap-2">
  <span className="w-[110px] text-right flex-shrink-0 text-md text-gray-700">
    {label}
  </span>
  <div className="flex-1 min-w-0">
    {input}
  </div>
</div>
```

**変更後:**
```tsx
<div className="flex flex-col md:flex-row items-start gap-1 md:gap-2">
  <span className="text-left md:w-[110px] md:text-right md:flex-shrink-0 text-md text-gray-700">
    {label}
  </span>
  <div className="w-full md:flex-1 md:min-w-0">
    {input}
  </div>
</div>
```

- `flex-col`: スマホ時は縦積み
- `md:flex-row`: PC時は横並び（現状維持）
- `text-left`: スマホ時はラベルを左寄せ
- `w-full`: スマホ時は入力欄を全幅

---

### 2. isMobile フラグの管理（tiptap.tsx）

既存の `window.innerHeight` + `resize` パターン（CalendarForm、OwnerField等）と同一方式。
リサイズのたびに状態更新が発火してRTEツールバーが再レンダリングされるのを防ぐため、
**150msのデバウンス**を付与する。

```tsx
const [isMobile, setIsMobile] = useState(
  () => typeof window !== 'undefined' && window.innerWidth < 768
)

useEffect(() => {
  let timer: ReturnType<typeof setTimeout>
  const handleResize = () => {
    clearTimeout(timer)
    timer = setTimeout(() => setIsMobile(window.innerWidth < 768), 150)
  }
  window.addEventListener('resize', handleResize)
  return () => {
    clearTimeout(timer)
    window.removeEventListener('resize', handleResize)
  }
}, [])
```

> `typeof window !== 'undefined'` ガードはSSR環境対応のため付与する。

---

### 3. ツールバーの横スクロール化（tiptap.tsx + tiptap.css）

```tsx
<div className={cn('tiptap-toolbar', isMobile && 'tiptap-toolbar--mobile')}>
```

```css
/* tiptap.css 追加 */
.tiptap-toolbar--mobile {
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;  /* iOS慣性スクロール有効化 */
  scrollbar-width: none;
  background: #ffffff;
}
.tiptap-toolbar--mobile::-webkit-scrollbar {
  display: none;
}
```

---

### 4. スクロール誘導グラデーション（tiptap.tsx + tiptap.css）

スクロール位置を `onScroll` で監視し、左右グラデーションを動的切り替えする。

```tsx
const toolbarRef = useRef<HTMLDivElement>(null)
const [showLeftGradient, setShowLeftGradient] = useState(false)
const [showRightGradient, setShowRightGradient] = useState(true)  // 初期値: 右のみ表示

const handleToolbarScroll = () => {
  const el = toolbarRef.current
  if (!el) return
  setShowLeftGradient(el.scrollLeft > 0)
  setShowRightGradient(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
}
```

```tsx
{/* ツールバーラッパー */}
<div style={{ position: 'relative' }}>
  <div
    ref={toolbarRef}
    onScroll={isMobile ? handleToolbarScroll : undefined}
    className={cn('tiptap-toolbar', isMobile && 'tiptap-toolbar--mobile')}
  >
    {/* ボタン群 */}
  </div>
  {isMobile && showLeftGradient && (
    <div className="tiptap-toolbar-fade tiptap-toolbar-fade--left" />
  )}
  {isMobile && showRightGradient && (
    <div className="tiptap-toolbar-fade tiptap-toolbar-fade--right" />
  )}
</div>
```

```css
/* tiptap.css 追加 */
.tiptap-toolbar-fade {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40px;
  pointer-events: none;
  z-index: 1;
}
.tiptap-toolbar-fade--left {
  left: 0;
  background: linear-gradient(to left, transparent, #e8e8e8);
  border-radius: 6px 0 0 0;
}
.tiptap-toolbar-fade--right {
  right: 0;
  background: linear-gradient(to right, transparent, #e8e8e8);
  border-radius: 0 6px 0 0;
}
```

**グラデーション表示ルール:**

| スクロール状態 | 左グラデーション | 右グラデーション |
|---|---|---|
| 左端（初期） | 非表示 | 表示 |
| 中間 | 表示 | 表示 |
| 右端到達 | 表示 | 非表示 |

---

### 5. ドロップダウンの全幅・下展開（tiptap.tsx）

段落・フォントサイズのドロップダウンをスマホ時にエディタ全幅で下展開する。
ツールバーのラッパー幅を ref で取得して `DropdownMenuContent` に適用する。

```tsx
const toolbarWrapperRef = useRef<HTMLDivElement>(null)
```

```tsx
{/* 段落・フォントサイズ共通 */}
<DropdownMenuContent
  side="bottom"
  align="start"
  avoidCollisions={true}
  collisionPadding={8}
  style={isMobile ? {
    width: toolbarWrapperRef.current?.offsetWidth ?? 'auto',
    maxHeight: '60vh',
    overflowY: 'auto',
  } : undefined}
>
```

**フォントサイズはスマホ時グリッド表示（5列）:**

```tsx
{isMobile ? (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6, padding: 8 }}>
    {FONT_SIZES.map(fs => (
      <DropdownMenuItem key={fs.value} ...>
        {fs.label}
      </DropdownMenuItem>
    ))}
  </div>
) : (
  FONT_SIZES.map(fs => (
    <DropdownMenuItem key={fs.value} ...>
      {fs.label}
    </DropdownMenuItem>
  ))
)}
```

---

## 変更ファイル一覧

| ファイル | 変更内容 |
|---------|---------|
| `assets/react-web-components/src/components/FieldRenderer.tsx` | Tailwindレスポンシブクラスでスタックレイアウト化 |
| `assets/react-web-components/src/components/ui/tiptap/tiptap.tsx` | isMobile state・グラデーション state・toolbarRef・toolbarWrapperRef 追加、ツールバースクロール、ドロップダウン全幅化 |
| `assets/react-web-components/src/components/ui/tiptap/tiptap.css` | `.tiptap-toolbar--mobile`・`.tiptap-toolbar-fade` クラス追加 |

---

## 考慮事項

- **FieldRenderer のスタック化はRTE以外の全フィールドに適用される。** テキスト・ピックリスト・参照フィールド等、全入力タイプでラベルが上部・左寄せになる。
- **グラデーションの初期値:** `showRightGradient` の初期値を `true` にすることで、SSR/ハイドレーション前でも右グラデーションが表示される。ただし実際にスクロールが不要な幅（全ボタンが収まる場合）でも初期表示では右グラデーションが出る。初回レンダリング後に `handleToolbarScroll` を一度実行して補正するか、初期値を `false` にして初回マウント時に判定する方針でも良い。
- **DropdownMenuContent の幅:** `toolbarWrapperRef.current?.offsetWidth` はドロップダウンが開く時点での値を使う。ウィンドウリサイズ後に開いた場合は自動的に最新値が反映される。
