import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tiptap from '../tiptap';

// getBoundingClientRect のモック
const mockGetBoundingClientRect = (values: Partial<DOMRect>) => {
  return vi.fn(() => ({
    top: 0, left: 0, bottom: 100, right: 100,
    width: 100, height: 26, x: 0, y: 0,
    toJSON: () => {},
    ...values,
  }));
};

describe('Tiptap フォントサイズドロップダウン (isQuickCreate)', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('isQuickCreate=false のとき maxHeight が設定されない', async () => {
    const user = userEvent.setup();
    render(<Tiptap value="" name="test" isQuickCreate={false} />);

    const trigger = screen.getByText('14px');
    await user.click(trigger);

    const content = document.querySelector('[data-slot="dropdown-menu-content"]');
    expect(content).toBeTruthy();
    expect((content as HTMLElement)?.style.maxHeight).toBe('');
  });

  it('isQuickCreate=true のとき onOpenChange(true) で maxHeight が計算・設定される', async () => {
    const user = userEvent.setup();

    window.innerHeight = 600;
    HTMLElement.prototype.getBoundingClientRect = mockGetBoundingClientRect({ bottom: 200 });
    HTMLElement.prototype.closest = vi.fn(() => null) as typeof HTMLElement.prototype.closest;

    render(<Tiptap value="" name="test" isQuickCreate={true} />);

    const trigger = screen.getByText('14px');
    await user.click(trigger);

    const content = document.querySelector('[data-slot="dropdown-menu-content"]');
    expect(content).toBeTruthy();
    // 600 - 200 - 8 = 392
    expect((content as HTMLElement)?.style.maxHeight).toBe('392px');
  });

  it('isQuickCreate=true のとき onOpenChange(false) で maxHeight がリセットされる', async () => {
    const user = userEvent.setup();

    window.innerHeight = 600;
    HTMLElement.prototype.getBoundingClientRect = mockGetBoundingClientRect({ bottom: 200 });
    HTMLElement.prototype.closest = vi.fn(() => null) as typeof HTMLElement.prototype.closest;

    render(<Tiptap value="" name="test" isQuickCreate={true} />);

    const trigger = screen.getByText('14px');
    await user.click(trigger);
    await user.keyboard('{Escape}');

    // 再度開くと再計算される
    await user.click(trigger);
    const content = document.querySelector('[data-slot="dropdown-menu-content"]');
    expect((content as HTMLElement)?.style.maxHeight).toBe('392px');
  });

  it('availableHeight が 100px 未満のとき FONT_SIZE_DROPDOWN_MIN_HEIGHT（100px）にクランプされる', async () => {
    const user = userEvent.setup();

    window.innerHeight = 600;
    HTMLElement.prototype.getBoundingClientRect = mockGetBoundingClientRect({ bottom: 595 });
    HTMLElement.prototype.closest = vi.fn(() => null) as typeof HTMLElement.prototype.closest;

    render(<Tiptap value="" name="test" isQuickCreate={true} />);

    const trigger = screen.getByText('14px');
    await user.click(trigger);

    const content = document.querySelector('[data-slot="dropdown-menu-content"]');
    expect((content as HTMLElement)?.style.maxHeight).toBe('100px');
  });

  it('スクロールコンテナが見つかる場合はそのbottomを使う', async () => {
    const user = userEvent.setup();

    window.innerHeight = 600;
    HTMLElement.prototype.getBoundingClientRect = mockGetBoundingClientRect({ bottom: 200 });

    const scrollContainer = document.createElement('div');
    scrollContainer.getBoundingClientRect = mockGetBoundingClientRect({ bottom: 400 });
    HTMLElement.prototype.closest = vi.fn(() => scrollContainer) as typeof HTMLElement.prototype.closest;

    render(<Tiptap value="" name="test" isQuickCreate={true} />);

    const trigger = screen.getByText('14px');
    await user.click(trigger);

    const content = document.querySelector('[data-slot="dropdown-menu-content"]');
    // 400 - 200 - 8 = 192
    expect((content as HTMLElement)?.style.maxHeight).toBe('192px');
  });

  it('fontSizeTriggerRef が null のとき（アンマウント済み等）エラーなく早期returnする', () => {
    expect(() => {
      render(<Tiptap value="" name="test" isQuickCreate={true} />);
    }).not.toThrow();
  });
});
