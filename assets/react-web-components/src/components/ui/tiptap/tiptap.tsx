"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { Extension } from "@tiptap/core";
import Heading from "@tiptap/extension-heading";
import Underline from "@tiptap/extension-underline";
import Color from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import {
  useEditor,
  useEditorState,
  EditorContent,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react";
import type { Editor, NodeViewProps } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";

/* ================================================================
 * カスタム拡張
 * ================================================================ */

/**
 * Highlight拡張をカスタマイズ: <mark> → <span> に変更
 * HTMLPurifierが<mark>タグを除去するため
 */
const SpanHighlight = Highlight.extend({
  renderHTML({ HTMLAttributes }) {
    return ["span", HTMLAttributes, 0];
  },
  parseHTML() {
    return [
      { tag: "mark" },
      {
        tag: "span",
        getAttrs: (element) => {
          const bg = (element as HTMLElement).style.backgroundColor;
          if (!bg) return false;
          return { color: bg };
        },
      },
    ];
  },
  addAttributes() {
    return {
      color: {
        default: null,
        parseHTML: (element) =>
          element.getAttribute("data-color") ||
          element.style.backgroundColor ||
          null,
        renderHTML: (attributes) => {
          if (!attributes.color) return {};
          return {
            "data-color": attributes.color,
            style: `background-color: ${attributes.color}`,
          };
        },
      },
    };
  },
});

/**
 * Table関連をカスタマイズ:
 * - インラインスタイルでborder/padding出力
 * - セル背景色・罫線色をカスタム属性で管理
 */
const DEFAULT_BORDER_COLOR = "#e2e2e2";
const CELL_PADDING = "6px 10px";

const StyledTable = Table.extend({
  renderHTML({ HTMLAttributes }) {
    return [
      "table",
      {
        ...HTMLAttributes,
        style: [
          "border-collapse: collapse",
          "width: 100%",
          HTMLAttributes.style,
        ]
          .filter(Boolean)
          .join("; "),
      },
      ["tbody", 0],
    ];
  },
});

const cellAttributes = {
  backgroundColor: {
    default: null,
    parseHTML: (el: HTMLElement) => el.style.backgroundColor || null,
    renderHTML: () => ({}),
  },
};

function buildCellStyles(
  attrs: Record<string, unknown>,
  isHeader: boolean
): string {
  const parts = [
    `border: 1px solid ${DEFAULT_BORDER_COLOR}`,
    `padding: ${CELL_PADDING}`,
    "vertical-align: top",
  ];
  if (isHeader) {
    parts.push("font-weight: 600");
    parts.push("text-align: left");
  }
  if (attrs.backgroundColor) {
    parts.push(`background-color: ${attrs.backgroundColor}`);
  }
  return parts.join("; ");
}

const StyledTableCell = TableCell.extend({
  addAttributes() {
    return { ...this.parent?.(), ...cellAttributes };
  },
  renderHTML({ node, HTMLAttributes }) {
    const { style: _, ...rest } = HTMLAttributes;
    return [
      "td",
      { ...rest, style: buildCellStyles(node.attrs, false) },
      0,
    ];
  },
});

const StyledTableHeader = TableHeader.extend({
  addAttributes() {
    return { ...this.parent?.(), ...cellAttributes };
  },
  renderHTML({ node, HTMLAttributes }) {
    const { style: _, ...rest } = HTMLAttributes;
    return [
      "th",
      { ...rest, style: buildCellStyles(node.attrs, true) },
      0,
    ];
  },
});

/**
 * FontSize拡張
 */
declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    fontSize: {
      setFontSize: (size: string) => ReturnType;
      unsetFontSize: () => ReturnType;
    };
    indent: {
      indent: () => ReturnType;
      outdent: () => ReturnType;
    };
    cellStyle: {
      setCellBackground: (color: string | null) => ReturnType;
    };
  }
}

const FontSizeExtension = Extension.create({
  name: "fontSize",
  addGlobalAttributes() {
    return [
      {
        types: ["textStyle"],
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element) => element.style.fontSize || null,
            renderHTML: (attributes) => {
              if (!attributes.fontSize) return {};
              return { style: `font-size: ${attributes.fontSize}` };
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setFontSize:
        (size: string) =>
        ({ chain, state }) => {
          if (state.selection.empty) {
            // テキスト未選択時: ゼロ幅スペース（ZWS）をフォントサイズ付きで挿入し
            // ブラウザがカーソルをそのスパン内に描画してカーソル高さを追従させる
            return chain()
              .setMark("textStyle", { fontSize: size })
              .insertContent("\u200B")
              .run();
          }
          return chain().setMark("textStyle", { fontSize: size }).run();
        },
      unsetFontSize:
        () =>
        ({ chain, state }) => {
          if (state.selection.empty) {
            // テキスト未選択時: ZWS を挿入してカーソル高さをデフォルトに追従させる
            return chain()
              .setMark("textStyle", { fontSize: null })
              .removeEmptyTextStyle()
              .insertContent("\u200B")
              .run();
          }
          return chain()
            .setMark("textStyle", { fontSize: null })
            .removeEmptyTextStyle()
            .run();
        },
    };
  },
});

const FONT_SIZES = [
  { label: "10px", value: "10px" },
  { label: "12px", value: "12px" },
  { label: "14px", value: "14px" },
  { label: "16px", value: "16px" },
  { label: "18px", value: "18px" },
  { label: "20px", value: "20px" },
  { label: "24px", value: "24px" },
  { label: "28px", value: "28px" },
  { label: "32px", value: "32px" },
  { label: "36px", value: "36px" },
  { label: "48px", value: "48px" },
];

/**
 * SelectAll拡張
 * Ctrl+A（Windows/Linux）または Cmd+A（macOS）で全選択する。
 * ProseMirror は Mod-a を selectAll に明示的にマッピングしていないため、
 * この拡張で明示的にマッピングする。
 */
const SelectAllExtension = Extension.create({
  name: "selectAll",
  addKeyboardShortcuts() {
    return {
      "Mod-a": () => this.editor.commands.selectAll(),
    };
  },
});

/**
 * CellStyle拡張: セルの背景色・罫線色コマンド
 */
const CellStyleExtension = Extension.create({
  name: "cellStyle",
  addCommands() {
    return {
      setCellBackground:
        (color: string | null) =>
        ({ tr, state, dispatch }) => {
          if (!dispatch) return true;
          const { selection } = state;
          // CellSelectionの場合は選択セルすべてに適用
          if ("$anchorCell" in selection) {
            const sel = selection as unknown as {
              forEachCell: (
                fn: (node: unknown, pos: number) => void
              ) => void;
            };
            sel.forEachCell((_node, pos) => {
              tr.setNodeMarkup(pos, undefined, {
                ...(state.doc.nodeAt(pos)?.attrs || {}),
                backgroundColor: color,
              });
            });
          } else {
            // 単一セル: 現在のセルを探す
            const $pos = state.selection.$from;
            for (let d = $pos.depth; d > 0; d--) {
              const node = $pos.node(d);
              if (
                node.type.name === "tableCell" ||
                node.type.name === "tableHeader"
              ) {
                const pos = $pos.before(d);
                tr.setNodeMarkup(pos, undefined, {
                  ...node.attrs,
                  backgroundColor: color,
                });
                break;
              }
            }
          }
          dispatch(tr);
          return true;
        },
    };
  },
});

/**
 * Indent拡張
 */
const INDENT_STEP = 24;
const MAX_INDENT = 10;

const IndentExtension = Extension.create({
  name: "indent",
  addGlobalAttributes() {
    return [
      {
        types: ["paragraph", "heading", "blockquote"],
        attributes: {
          indent: {
            default: 0,
            parseHTML: (element) => {
              const ml = element.style.marginLeft;
              if (!ml) return 0;
              return Math.round(parseInt(ml, 10) / INDENT_STEP) || 0;
            },
            renderHTML: (attributes) => {
              const level = attributes.indent as number;
              if (!level || level <= 0) return {};
              return { style: `margin-left: ${level * INDENT_STEP}px` };
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      indent:
        () =>
        ({ tr, state, dispatch }) => {
          const { from, to } = state.selection;
          let changed = false;
          state.doc.nodesBetween(from, to, (node, pos) => {
            if (["paragraph", "heading", "blockquote"].includes(node.type.name)) {
              const current = (node.attrs.indent as number) || 0;
              if (current < MAX_INDENT) {
                if (dispatch) {
                  tr.setNodeMarkup(pos, undefined, {
                    ...node.attrs,
                    indent: current + 1,
                  });
                }
                changed = true;
              }
            }
          });
          return changed;
        },
      outdent:
        () =>
        ({ tr, state, dispatch }) => {
          const { from, to } = state.selection;
          let changed = false;
          state.doc.nodesBetween(from, to, (node, pos) => {
            if (["paragraph", "heading", "blockquote"].includes(node.type.name)) {
              const current = (node.attrs.indent as number) || 0;
              if (current > 0) {
                if (dispatch) {
                  tr.setNodeMarkup(pos, undefined, {
                    ...node.attrs,
                    indent: current - 1,
                  });
                }
                changed = true;
              }
            }
          });
          return changed;
        },
    };
  },
});

/**
 * リサイズ可能な画像
 */
const ResizableImageComponent = ({
  node,
  updateAttributes,
  selected,
}: NodeViewProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [resizing, setResizing] = useState(false);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const startX = e.clientX;
      const startWidth = imgRef.current?.offsetWidth || 200;
      setResizing(true);
      const onMouseMove = (ev: MouseEvent) => {
        updateAttributes({ width: Math.max(50, startWidth + ev.clientX - startX) });
      };
      const onMouseUp = () => {
        setResizing(false);
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [updateAttributes]
  );

  const width = node.attrs.width as number | null;
  return (
    <NodeViewWrapper
      as="span"
      className="tiptap-resizable-image-wrapper"
      style={{ display: "inline-block" }}
    >
      <span
        className={`tiptap-resizable-image ${selected ? "selected" : ""} ${resizing ? "resizing" : ""}`}
        style={{
          display: "inline-block",
          position: "relative",
          width: width ? `${width}px` : undefined,
        }}
      >
        <img
          ref={imgRef}
          src={node.attrs.src as string}
          alt={(node.attrs.alt as string) || ""}
          title={(node.attrs.title as string) || undefined}
          style={{ width: "100%", height: "auto", display: "block" }}
          draggable={false}
        />
        {selected && (
          <span
            className="tiptap-resize-handle tiptap-resize-handle-br"
            onMouseDown={handleMouseDown}
          />
        )}
      </span>
    </NodeViewWrapper>
  );
};

const ResizableImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null,
        parseHTML: (element) => {
          const w = element.getAttribute("width") || element.style.width;
          return w ? parseInt(String(w), 10) || null : null;
        },
        renderHTML: (attributes) => {
          if (!attributes.width) return {};
          return {
            width: attributes.width,
            style: `width: ${attributes.width}px`,
          };
        },
      },
    };
  },
  addNodeView() {
    return ReactNodeViewRenderer(ResizableImageComponent);
  },
});

/* ================================================================
 * アイコン & UI部品
 * ================================================================ */

import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Heading1,
  Heading2,
  Heading3,
  Pilcrow,
  LucideIcon,
  ChevronDown,
  Type,
  Highlighter,
  RemoveFormatting,
  List,
  ListOrdered,
  Indent,
  Outdent,
  Quote,
  ImagePlus,
  Code,
  TableIcon,
  Plus,
  Minus,
  Trash2,
  Paintbrush,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import "./tiptap.css";

/* ================================================================
 * カラーパレット定数
 * ================================================================ */

const TEXT_COLORS = [
  "#000000", "#1e293b", "#475569", "#6b7280", "#94a3b8", "#d1d5db", "#e5e7eb", "#f3f4f6", "#f9fafb", "#ffffff",
  "#991b1b", "#9a3412", "#92400e", "#854d0e", "#166534", "#115e59", "#1e40af", "#3730a3", "#6b21a8", "#9d174d",
  "#dc2626", "#ea580c", "#d97706", "#ca8a04", "#16a34a", "#0d9488", "#2563eb", "#4f46e5", "#9333ea", "#db2777",
  "#f87171", "#fb923c", "#fbbf24", "#facc15", "#4ade80", "#2dd4bf", "#60a5fa", "#818cf8", "#c084fc", "#f472b6",
  "#fecaca", "#fed7aa", "#fde68a", "#fef08a", "#bbf7d0", "#99f6e4", "#bfdbfe", "#c7d2fe", "#e9d5ff", "#fbcfe8",
];

const HIGHLIGHT_COLORS = [
  "#fef08a", "#d9f99d", "#bbf7d0", "#a5f3fc", "#bfdbfe", "#ddd6fe", "#fbcfe8",
  "#fef9c3", "#ecfccb", "#dcfce7", "#cffafe", "#dbeafe", "#ede9fe", "#fce7f3",
];

/** セル背景色パレット: 薄い色中心 */
const CELL_BG_COLORS = [
  "#ffffff", "#f8fafc", "#f1f5f9", "#e2e8f0",
  "#fef2f2", "#fff7ed", "#fefce8", "#f0fdf4",
  "#ecfeff", "#eff6ff", "#f5f3ff", "#fdf2f8",
  "#fecaca", "#fed7aa", "#fef08a", "#bbf7d0",
  "#a5f3fc", "#bfdbfe", "#ddd6fe", "#fbcfe8",
];


/* ================================================================
 * テーブルバブルメニュー
 * ================================================================ */

interface TableBubbleMenuProps {
  editor: Editor;
}

const TableBubbleMenu = ({ editor }: TableBubbleMenuProps) => {
  return (
    <BubbleMenu
      editor={editor}
      pluginKey="tableBubbleMenu"
      shouldShow={({ editor: e }) => {
        return (
          e.isActive("table") &&
          !e.isActive("image") &&
          (e.isActive("tableCell") || e.isActive("tableHeader"))
        );
      }}
    >
      <div className="tiptap-table-bubble">
        {/* 行操作 */}
        <button
          type="button"
          className="tiptap-bubble-btn"
          title="行を追加（上）"
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().addRowBefore().run();
          }}
        >
          <Plus size={12} />
          <span>行↑</span>
        </button>
        <button
          type="button"
          className="tiptap-bubble-btn"
          title="行を追加（下）"
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().addRowAfter().run();
          }}
        >
          <Plus size={12} />
          <span>行↓</span>
        </button>
        <button
          type="button"
          className="tiptap-bubble-btn"
          title="行を削除"
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().deleteRow().run();
          }}
        >
          <Minus size={12} />
          <span>行</span>
        </button>

        <span className="tiptap-bubble-sep" />

        {/* 列操作 */}
        <button
          type="button"
          className="tiptap-bubble-btn"
          title="列を追加（左）"
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().addColumnBefore().run();
          }}
        >
          <Plus size={12} />
          <span>列←</span>
        </button>
        <button
          type="button"
          className="tiptap-bubble-btn"
          title="列を追加（右）"
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().addColumnAfter().run();
          }}
        >
          <Plus size={12} />
          <span>列→</span>
        </button>
        <button
          type="button"
          className="tiptap-bubble-btn"
          title="列を削除"
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().deleteColumn().run();
          }}
        >
          <Minus size={12} />
          <span>列</span>
        </button>

        <span className="tiptap-bubble-sep" />

        {/* セル背景色 */}
        <CellColorPicker
          icon={<Paintbrush size={12} />}
          title="セル背景色"
          palette={CELL_BG_COLORS}
          columns={4}
          onSelect={(color) => editor.chain().focus().setCellBackground(color).run()}
          onClear={() => editor.chain().focus().setCellBackground(null).run()}
        />

        <span className="tiptap-bubble-sep" />

        {/* テーブル削除 */}
        <button
          type="button"
          className="tiptap-bubble-btn tiptap-bubble-btn-danger"
          title="テーブルを削除"
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().deleteTable().run();
          }}
        >
          <Trash2 size={12} />
        </button>
      </div>
    </BubbleMenu>
  );
};

/** バブルメニュー内のカラーピッカー（ポータル不使用・位置ずれ防止） */
interface CellColorPickerProps {
  icon: React.ReactNode;
  title: string;
  palette: string[];
  columns: number;
  onSelect: (color: string) => void;
  onClear: () => void;
}

const CellColorPicker = ({
  icon,
  title,
  palette,
  columns,
  onSelect,
  onClear,
}: CellColorPickerProps) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={wrapRef} style={{ position: "relative" }}>
      <button
        type="button"
        className="tiptap-bubble-btn"
        title={title}
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        {icon}
        <ChevronDown size={8} />
      </button>
      {open && (
        <div
          className="tiptap-cell-color-popup"
          onMouseDown={(e) => e.preventDefault()}
        >
          <div
            className="tiptap-color-grid"
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
          >
            {palette.map((color) => (
              <button
                key={color}
                type="button"
                className="tiptap-color-swatch"
                style={{ backgroundColor: color }}
                title={color}
                onMouseDown={(e) => {
                  e.preventDefault();
                  onSelect(color);
                  setOpen(false);
                }}
              />
            ))}
          </div>
          <button
            type="button"
            className="tiptap-color-clear"
            onMouseDown={(e) => {
              e.preventDefault();
              onClear();
              setOpen(false);
            }}
          >
            <RemoveFormatting size={12} />
            <span>クリア</span>
          </button>
        </div>
      )}
    </div>
  );
};

/* ================================================================
 * HTML整形ユーティリティ
 * ================================================================ */

const VOID_ELEMENTS = new Set([
  "area","base","br","col","embed","hr","img","input",
  "link","meta","param","source","track","wbr",
]);

function formatHtml(html: string): string {
  let result = "";
  let indent = 0;
  const tab = "  ";

  // タグ境界で分割しつつタグとテキストを保持
  const tokens = html.replace(/>\s+</g, "><").split(/(<[^>]+>)/);

  for (const token of tokens) {
    if (!token) continue;

    if (token.startsWith("</")) {
      // 閉じタグ
      indent = Math.max(0, indent - 1);
      result += `${tab.repeat(indent)}${token}\n`;
    } else if (token.startsWith("<")) {
      const tagName = (token.match(/^<(\w+)/)?.[1] || "").toLowerCase();
      const selfClosing = token.endsWith("/>") || VOID_ELEMENTS.has(tagName);
      result += `${tab.repeat(indent)}${token}\n`;
      if (!selfClosing) indent++;
    } else {
      // テキストノード
      const text = token.trim();
      if (text) result += `${tab.repeat(indent)}${text}\n`;
    }
  }
  return result.trimEnd();
}

/* ================================================================
 * メインコンポーネント
 * ================================================================ */

interface TiptapProps {
  value?: string;
  onChange?: (event: { target: { name: string; value: string } }) => void;
  name?: string;
  className?: string;
  colors?: string[];
  isQuickCreate?: boolean;
}

const TiptapInitialValue = "<p></p>";

interface BlockTypeOption {
  label: string;
  value: string;
  icon: LucideIcon;
  onClick: () => void;
}

const Tiptap = React.forwardRef<HTMLDivElement, TiptapProps>(
  ({ value = "", onChange, name = "", className = "", colors, isQuickCreate }, ref) => {
    const [content, setContent] = useState(value || TiptapInitialValue);
    const [sourceMode, setSourceMode] = useState(false);
    const [sourceHtml, setSourceHtml] = useState("");
    const [fontSizeDropdownMaxHeight, setFontSizeDropdownMaxHeight] = useState<number | undefined>(undefined);
    const fontSizeTriggerRef = useRef<HTMLButtonElement>(null);
    const [isMobile, setIsMobile] = useState(
      () => typeof window !== 'undefined' && window.innerWidth < 768
    );
    const toolbarRef = useRef<HTMLDivElement>(null);
    const toolbarWrapperRef = useRef<HTMLDivElement>(null);
    const [showLeftGradient, setShowLeftGradient] = useState(false);
    const [showRightGradient, setShowRightGradient] = useState(true);
    const textPalette = colors && colors.length > 0 ? colors : TEXT_COLORS;
    const highlightPalette = HIGHLIGHT_COLORS;

    const editor = useEditor({
      extensions: [
        StarterKit,
        Underline,
        Heading.configure({ levels: [1, 2, 3] }),
        TextStyle,
        Color,
        FontSizeExtension,
        SpanHighlight.configure({ multicolor: true }),
        IndentExtension,
        CellStyleExtension,
        SelectAllExtension,
        ResizableImage.configure({ inline: true, allowBase64: true }),
        StyledTable.configure({ resizable: false }),
        TableRow,
        StyledTableHeader,
        StyledTableCell,
      ],
      content: content,
      editorProps: {
        attributes: { class: className },
        handleDrop: (view, event, _slice, moved) => {
          if (!moved && event.dataTransfer?.files?.length) {
            const file = event.dataTransfer.files[0];
            if (file.type.startsWith("image/")) {
              event.preventDefault();
              const reader = new FileReader();
              reader.onload = () => {
                const pos = view.posAtCoords({
                  left: event.clientX,
                  top: event.clientY,
                });
                if (pos && typeof reader.result === "string") {
                  const node = view.state.schema.nodes.image.create({
                    src: reader.result,
                  });
                  view.dispatch(view.state.tr.insert(pos.pos, node));
                }
              };
              reader.readAsDataURL(file);
              return true;
            }
          }
          return false;
        },
        handlePaste: (view, event) => {
          const items = event.clipboardData?.items;
          if (!items) return false;
          for (const item of items) {
            if (item.type.startsWith("image/")) {
              event.preventDefault();
              const file = item.getAsFile();
              if (!file) continue;
              const reader = new FileReader();
              reader.onload = () => {
                if (typeof reader.result === "string") {
                  const node = view.state.schema.nodes.image.create({
                    src: reader.result,
                  });
                  view.dispatch(view.state.tr.replaceSelectionWith(node));
                }
              };
              reader.readAsDataURL(file);
              return true;
            }
          }
          return false;
        },
      },
      onUpdate: ({ editor: e }: { editor: Editor }) => {
        // ZWS（ゼロ幅スペース）を除去してから onChange に渡す
        // ZWS はカーソルサイズ追従のためにフォントサイズ変更時に挿入されるが、
        // 保存コンテンツには含めない
        const html = e.getHTML().replace(/\u200B/g, "");
        const text = e.getText().trim().replace(/\u200B/g, "");
        setContent(e.getHTML()); // DOM は ZWS 付きのまま保持（カーソル描画のため）
        if (onChange) {
          onChange({
            target: { name, value: text === "" ? "" : html },
          });
        }
      },
    });

    // ブロックタイプの型定義
    type BlockType = "paragraph" | "h1" | "h2" | "h3";

    // ツールバーをトランザクション発生時にリアクティブに更新するための状態
    // カーソルのみ（テキスト未選択）状態でのフォントサイズ・スタイル変更をツールバーに反映する
    // また、太字・斜体などの isActive 状態もセレクターに含め、ボタンのアクティブ表示を即座に更新する
    const editorToolbarState = useEditorState({
      editor,
      selector: (ctx) => {
        const e = ctx.editor;
        if (!e) return {
          fontSize: "14px", textColor: "#000000", highlight: "",
          isBold: false, isItalic: false, isUnderline: false, isStrike: false,
          isBulletList: false, isOrderedList: false, isBlockquote: false,
          blockType: "paragraph" as BlockType,
        };
        return {
          // 既存フィールド: フォントサイズ・文字色・ハイライト
          fontSize: (e.getAttributes("textStyle")?.fontSize as string) || "14px",
          textColor: (e.getAttributes("textStyle")?.color as string) || "#000000",
          highlight: (e.getAttributes("highlight")?.color as string) || "",
          // 追加フィールド: 各書式ボタンのアクティブ状態
          isBold:        e.isActive("bold"),
          isItalic:      e.isActive("italic"),
          isUnderline:   e.isActive("underline"),
          isStrike:      e.isActive("strike"),
          isBulletList:  e.isActive("bulletList"),
          isOrderedList: e.isActive("orderedList"),
          isBlockquote:  e.isActive("blockquote"),
          blockType: (
            e.isActive("heading", { level: 1 }) ? "h1"
            : e.isActive("heading", { level: 2 }) ? "h2"
            : e.isActive("heading", { level: 3 }) ? "h3"
            : "paragraph"
          ) as BlockType,
        };
      },
    });

    const handleAction = useCallback(
      (e: React.MouseEvent, action: () => void) => {
        e.preventDefault();
        action();
      },
      []
    );

    useEffect(() => {
      if (editor && value !== editor.getHTML()) {
        editor.commands.setContent(value || TiptapInitialValue);
        setContent(value || TiptapInitialValue);
      }
    }, [editor, value]);

    useEffect(() => {
      if (editor && !editor.getHTML()) {
        editor.commands.setContent(content);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editor]);

    // isMobile: resize リスナー（150ms デバウンス）
    useEffect(() => {
      let timer: ReturnType<typeof setTimeout>;
      const handleResize = () => {
        clearTimeout(timer);
        timer = setTimeout(() => setIsMobile(window.innerWidth < 768), 150);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const blockTypeOptions: BlockTypeOption[] = [
      {
        label: "段落",
        value: "paragraph",
        icon: Pilcrow,
        onClick: () => editor?.chain().focus().setParagraph().run(),
      },
      {
        label: "見出し1",
        value: "h1",
        icon: Heading1,
        onClick: () =>
          editor?.chain().focus().toggleHeading({ level: 1 }).run(),
      },
      {
        label: "見出し2",
        value: "h2",
        icon: Heading2,
        onClick: () =>
          editor?.chain().focus().toggleHeading({ level: 2 }).run(),
      },
      {
        label: "見出し3",
        value: "h3",
        icon: Heading3,
        onClick: () =>
          editor?.chain().focus().toggleHeading({ level: 3 }).run(),
      },
    ];

    const handleImageUpload = useCallback(() => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = () => {
        const file = input.files?.[0];
        if (!file || !editor) return;
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === "string") {
            editor.chain().focus().setImage({ src: reader.result }).run();
          }
        };
        reader.readAsDataURL(file);
      };
      input.click();
    }, [editor]);

    const handleIndent = useCallback(() => {
      if (!editor) return;
      if (editor.isActive("listItem")) {
        editor.chain().focus().sinkListItem("listItem").run();
      } else {
        editor.chain().focus().indent().run();
      }
    }, [editor]);

    const handleOutdent = useCallback(() => {
      if (!editor) return;
      if (editor.isActive("listItem")) {
        editor.chain().focus().liftListItem("listItem").run();
      } else {
        editor.chain().focus().outdent().run();
      }
    }, [editor]);

    // リストトグル時に storedMarks（文字色・ハイライト・フォントサイズ）を保持する
    // toggleBulletList / toggleOrderedList はブロックレベルのトランザクションを発行し
    // ProseMirror の storedMarks をクリアするため、トグル前に値を取得して再適用する。
    // フォントサイズ再適用には setFontSize の代わりに setMark を直接使用する
    // （setFontSize は selection.empty 時に ZWS を挿入する副作用があるため）
    const handleBulletListToggle = useCallback(() => {
      if (!editor) return;
      const preColor     = editor.getAttributes("textStyle")?.color as string | undefined;
      const preFontSize  = editor.getAttributes("textStyle")?.fontSize as string | undefined;
      const preHighlight = editor.getAttributes("highlight")?.color as string | undefined;
      const chain = editor.chain().focus().toggleBulletList();
      if (preColor)     chain.setColor(preColor);
      if (preFontSize)  chain.setMark("textStyle", { fontSize: preFontSize });
      if (preHighlight) chain.setHighlight({ color: preHighlight });
      chain.run();
    }, [editor]);

    const handleOrderedListToggle = useCallback(() => {
      if (!editor) return;
      const preColor     = editor.getAttributes("textStyle")?.color as string | undefined;
      const preFontSize  = editor.getAttributes("textStyle")?.fontSize as string | undefined;
      const preHighlight = editor.getAttributes("highlight")?.color as string | undefined;
      const chain = editor.chain().focus().toggleOrderedList();
      if (preColor)     chain.setColor(preColor);
      if (preFontSize)  chain.setMark("textStyle", { fontSize: preFontSize });
      if (preHighlight) chain.setHighlight({ color: preHighlight });
      chain.run();
    }, [editor]);

    const handleToolbarScroll = useCallback(() => {
      const el = toolbarRef.current;
      if (!el) return;
      setShowLeftGradient(el.scrollLeft > 0);
      setShowRightGradient(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    }, []);

    useEffect(() => {
      handleToolbarScroll();
    }, [handleToolbarScroll]);

    const toggleSourceMode = useCallback(() => {
      if (!editor) return;
      if (!sourceMode) {
        setSourceHtml(formatHtml(editor.getHTML()));
      } else {
        editor.commands.setContent(sourceHtml, { emitUpdate: true });
        setContent(sourceHtml);
        if (onChange) {
          const tmp = document.createElement("div");
          tmp.innerHTML = sourceHtml;
          const text = (tmp.textContent || "").trim();
          onChange({
            target: { name, value: text === "" ? "" : sourceHtml },
          });
        }
      }
      setSourceMode((prev) => !prev);
    }, [editor, sourceMode, sourceHtml, onChange, name]);

    const handleSourceChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const html = e.target.value;
        setSourceHtml(html);
        setContent(html);
        if (onChange) {
          const tmp = document.createElement("div");
          tmp.innerHTML = html;
          const text = (tmp.textContent || "").trim();
          onChange({
            target: { name, value: text === "" ? "" : html },
          });
        }
      },
      [onChange, name]
    );

    const FONT_SIZE_DROPDOWN_MIN_HEIGHT = 100; // 少なくとも2〜3項目を表示するための最低高

    const handleFontSizeOpenChange = (open: boolean) => {
      if (!isQuickCreate) return;
      if (!open) {
        setFontSizeDropdownMaxHeight(undefined);
        return;
      }
      const trigger = fontSizeTriggerRef.current;
      if (!trigger) return;

      const triggerRect = trigger.getBoundingClientRect();
      const scrollContainer = trigger.closest<HTMLElement>('.overflow-y-auto, .overflow-auto');
      const containerBottom = scrollContainer
        ? scrollContainer.getBoundingClientRect().bottom
        : window.innerHeight;

      const MARGIN = 8;
      const availableHeight = containerBottom - triggerRect.bottom - MARGIN;
      setFontSizeDropdownMaxHeight(Math.max(availableHeight, FONT_SIZE_DROPDOWN_MIN_HEIGHT));
    };

    const currentTextColor = editorToolbarState?.textColor ?? "#000000";
    const currentHighlight = editorToolbarState?.highlight ?? "";

    return (
      <div>
        {/* ===== Main Toolbar ===== */}
        <div ref={toolbarWrapperRef} style={{ position: 'relative' }}>
          <div
            ref={toolbarRef}
            onScroll={isMobile ? handleToolbarScroll : undefined}
            className={`tiptap-toolbar${isMobile ? ' tiptap-toolbar--mobile' : ''}`}
          >
          {/* Block type */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="tiptap-block-select"
                onMouseDown={(e) => e.preventDefault()}
              >
                {(() => {
                  const opt = blockTypeOptions.find(
                    (o) => o.value === (editorToolbarState?.blockType ?? "paragraph")
                  );
                  if (!opt) return null;
                  const Icon = opt.icon;
                  return (
                    <>
                      <Icon size={14} />
                      <span>{opt.label}</span>
                      <ChevronDown size={10} />
                    </>
                  );
                })()}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="bottom"
              align="start"
              avoidCollisions={false}
              collisionPadding={8}
              style={isMobile ? {
                width: `${toolbarWrapperRef.current?.offsetWidth ?? 0}px`,
                maxHeight: '60vh',
                overflowY: 'auto',
              } : undefined}
            >
              {blockTypeOptions.map((opt) => (
                <DropdownMenuItem
                  key={opt.value}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={opt.onClick}
                  style={{
                    backgroundColor:
                      (editorToolbarState?.blockType ?? "paragraph") === opt.value
                        ? "var(--muted, #f0f0f0)"
                        : undefined,
                  }}
                >
                  <opt.icon size={14} />
                  <span>{opt.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Font size */}
          <DropdownMenu modal={false} onOpenChange={!isMobile ? handleFontSizeOpenChange : undefined}>
            <DropdownMenuTrigger asChild>
              <button
                ref={fontSizeTriggerRef}
                type="button"
                className="tiptap-block-select"
                style={{ minWidth: "64px" }}
                onMouseDown={(e) => e.preventDefault()}
              >
                <span>
                  {editorToolbarState?.fontSize ?? "14px"}
                </span>
                <ChevronDown size={10} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="bottom"
              align="start"
              avoidCollisions={false}
              collisionPadding={8}
              style={isMobile ? {
                width: `${toolbarWrapperRef.current?.offsetWidth ?? 0}px`,
                maxHeight: '60vh',
                overflowY: 'auto',
              } : (isQuickCreate && fontSizeDropdownMaxHeight !== undefined
                  ? { maxHeight: `${fontSizeDropdownMaxHeight}px` }
                  : undefined)}
              onCloseAutoFocus={(e) => {
                // Radix UI のアクセシビリティ仕様によりフォーカスがトリガーに戻るため、
                // 意図的にエディターへフォーカスを戻す
                e.preventDefault();
                if (editor && !editor.isDestroyed) {
                  editor.view.dom.focus();
                }
              }}
            >
              {isMobile ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 4, padding: 6 }}>
                  {FONT_SIZES.map((fs) => {
                    const cur =
                      (editor?.getAttributes("textStyle")?.fontSize as string) ||
                      "14px";
                    return (
                      <DropdownMenuItem
                        key={fs.value}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() =>
                          fs.value === "14px"
                            ? editor?.chain().focus().unsetFontSize().run()
                            : editor?.chain().focus().setFontSize(fs.value).run()
                        }
                        style={{
                          backgroundColor:
                            cur === fs.value
                              ? "var(--muted, #f0f0f0)"
                              : undefined,
                          justifyContent: 'center',
                          minHeight: '44px',
                          padding: '4px 2px',
                        }}
                      >
                        <span style={{ fontSize: '11px' }}>{fs.label}</span>
                      </DropdownMenuItem>
                    );
                  })}
                </div>
              ) : (
                FONT_SIZES.map((fs) => {
                  const cur =
                    (editor?.getAttributes("textStyle")?.fontSize as string) ||
                    "14px";
                  return (
                    <DropdownMenuItem
                      key={fs.value}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() =>
                        fs.value === "14px"
                          ? editor?.chain().focus().unsetFontSize().run()
                          : editor?.chain().focus().setFontSize(fs.value).run()
                      }
                      style={{
                        backgroundColor:
                          cur === fs.value
                            ? "var(--muted, #f0f0f0)"
                            : undefined,
                      }}
                    >
                      <span style={{ fontSize: fs.value, lineHeight: 1.2 }}>
                        {fs.label}
                      </span>
                    </DropdownMenuItem>
                  );
                })
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="tiptap-separator" />

          {/* Text formatting */}
          <button
            type="button"
            className={`tiptap-btn ${editorToolbarState?.isBold ? "active" : ""}`}
            title="太字"
            onMouseDown={(e) =>
              handleAction(e, () =>
                editor?.chain().focus().toggleBold().run()
              )
            }
          >
            <Bold size={14} />
          </button>
          <button
            type="button"
            className={`tiptap-btn ${editorToolbarState?.isItalic ? "active" : ""}`}
            title="斜体"
            onMouseDown={(e) =>
              handleAction(e, () =>
                editor?.chain().focus().toggleItalic().run()
              )
            }
          >
            <Italic size={14} />
          </button>
          <button
            type="button"
            className={`tiptap-btn ${editorToolbarState?.isUnderline ? "active" : ""}`}
            title="下線"
            onMouseDown={(e) =>
              handleAction(e, () =>
                editor?.chain().focus().toggleUnderline().run()
              )
            }
          >
            <UnderlineIcon size={14} />
          </button>
          <button
            type="button"
            className={`tiptap-btn ${editorToolbarState?.isStrike ? "active" : ""}`}
            title="取り消し線"
            onMouseDown={(e) =>
              handleAction(e, () =>
                editor?.chain().focus().toggleStrike().run()
              )
            }
          >
            <Strikethrough size={14} />
          </button>

          <div className="tiptap-separator" />

          {/* Colors */}
          <ColorPicker
            icon={<Type size={14} />}
            title="文字色"
            currentColor={currentTextColor}
            palette={textPalette}
            columns={10}
            onSelect={(c) => editor?.chain().focus().setColor(c).run()}
            onClear={() => editor?.chain().focus().unsetColor().run()}
          />
          <ColorPicker
            icon={<Highlighter size={14} />}
            title="背景色"
            currentColor={currentHighlight}
            palette={highlightPalette}
            columns={7}
            onSelect={(c) =>
              editor?.chain().focus().toggleHighlight({ color: c }).run()
            }
            onClear={() => editor?.chain().focus().unsetHighlight().run()}
          />

          <div className="tiptap-separator" />

          {/* Lists & indent */}
          <button
            type="button"
            className={`tiptap-btn ${editorToolbarState?.isBulletList ? "active" : ""}`}
            title="箇条書きリスト"
            onMouseDown={(e) => handleAction(e, handleBulletListToggle)}
          >
            <List size={14} />
          </button>
          <button
            type="button"
            className={`tiptap-btn ${editorToolbarState?.isOrderedList ? "active" : ""}`}
            title="番号付きリスト"
            onMouseDown={(e) => handleAction(e, handleOrderedListToggle)}
          >
            <ListOrdered size={14} />
          </button>
          <button
            type="button"
            className="tiptap-btn"
            title="インデントを増やす"
            onMouseDown={(e) => handleAction(e, handleIndent)}
          >
            <Indent size={14} />
          </button>
          <button
            type="button"
            className="tiptap-btn"
            title="インデントを減らす"
            onMouseDown={(e) => handleAction(e, handleOutdent)}
          >
            <Outdent size={14} />
          </button>

          <div className="tiptap-separator" />

          {/* Blockquote */}
          <button
            type="button"
            className={`tiptap-btn ${editorToolbarState?.isBlockquote ? "active" : ""}`}
            title="引用"
            onMouseDown={(e) =>
              handleAction(e, () =>
                editor?.chain().focus().toggleBlockquote().run()
              )
            }
          >
            <Quote size={14} />
          </button>

          {/* Image */}
          <button
            type="button"
            className="tiptap-btn"
            title="画像を挿入"
            onMouseDown={(e) => {
              e.preventDefault();
              handleImageUpload();
            }}
          >
            <ImagePlus size={14} />
          </button>

          {/* Table insert */}
          <button
            type="button"
            className="tiptap-btn"
            title="テーブルを挿入"
            onMouseDown={(e) => {
              e.preventDefault();
              editor
                ?.chain()
                .focus()
                .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                .run();
            }}
          >
            <TableIcon size={14} />
          </button>

          <div className="tiptap-separator" />

          {/* Clear formatting */}
          <button
            type="button"
            className="tiptap-btn"
            title="書式をクリア"
            disabled={sourceMode}
            onMouseDown={(e) =>
              handleAction(e, () =>
                editor?.chain().focus().unsetAllMarks().run()
              )
            }
          >
            <RemoveFormatting size={14} />
          </button>

          <div className="tiptap-separator" />

          {/* Source mode */}
          <button
            type="button"
            className={`tiptap-btn ${sourceMode ? "active" : ""}`}
            title="HTMLソース編集"
            onMouseDown={(e) => {
              e.preventDefault();
              toggleSourceMode();
            }}
          >
            <Code size={14} />
          </button>
          </div>
          {isMobile && showLeftGradient && (
            <div className="tiptap-toolbar-fade tiptap-toolbar-fade--left" />
          )}
          {isMobile && showRightGradient && (
            <div className="tiptap-toolbar-fade tiptap-toolbar-fade--right" />
          )}
        </div>

        {/* ===== Editor / Source ===== */}
        {sourceMode ? (
          <div className="tiptap-source-wrap" ref={ref}>
            <textarea
              className="tiptap-source-editor"
              value={sourceHtml}
              onChange={handleSourceChange}
              spellCheck={false}
            />
          </div>
        ) : (
          <div className="tiptap-editor-content" ref={ref}>
            <EditorContent editor={editor} />
            {editor && <TableBubbleMenu editor={editor} />}
          </div>
        )}
      </div>
    );
  }
);

Tiptap.displayName = "Tiptap";

export default Tiptap;

/* ================================================================
 * Color Picker (メインツールバー用)
 * ================================================================ */

interface ColorPickerProps {
  icon: React.ReactNode;
  title: string;
  currentColor: string;
  palette: string[];
  columns?: number;
  onSelect: (color: string) => void;
  onClear: () => void;
}

const ColorPicker = ({
  icon,
  title,
  currentColor,
  palette,
  columns = 6,
  onSelect,
  onClear,
}: ColorPickerProps) => (
  <DropdownMenu modal={false}>
    <DropdownMenuTrigger asChild>
      <button
        type="button"
        className="tiptap-color-btn"
        title={title}
        onMouseDown={(e) => e.preventDefault()}
      >
        <span style={{ position: "relative", display: "inline-flex" }}>
          {icon}
          {currentColor && (
            <span
              className="tiptap-color-indicator"
              style={{ backgroundColor: currentColor }}
            />
          )}
        </span>
        <ChevronDown size={8} />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      style={{ padding: "8px", width: "auto" }}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div
        className="tiptap-color-grid"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {palette.map((color) => (
          <button
            key={color}
            type="button"
            className={`tiptap-color-swatch ${currentColor === color ? "active" : ""}`}
            style={{ backgroundColor: color }}
            title={color}
            onMouseDown={(e) => {
              e.preventDefault();
              onSelect(color);
            }}
          />
        ))}
      </div>
      <button
        type="button"
        className="tiptap-color-clear"
        onMouseDown={(e) => {
          e.preventDefault();
          onClear();
        }}
      >
        <RemoveFormatting size={12} />
        <span>クリア</span>
      </button>
    </DropdownMenuContent>
  </DropdownMenu>
);
