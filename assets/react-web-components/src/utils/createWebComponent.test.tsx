import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { createWebComponent } from './createWebComponent';
import React from 'react';

const DummyComponent = () => React.createElement('div', { 'data-testid': 'dummy' }, 'test');

describe('createWebComponent - ホスト要素スタイル', () => {
  const TAG_NAME = 'test-web-component-style';

  beforeEach(() => {
    if (!customElements.get(TAG_NAME)) {
      createWebComponent(DummyComponent, TAG_NAME, []);
    }
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('connectedCallback後にdisplayがblockになること', async () => {
    const el = document.createElement(TAG_NAME);
    document.body.appendChild(el);
    await customElements.whenDefined(TAG_NAME);
    expect(el.style.display).toBe('block');
  });

  it('connectedCallback後にwidthが100%になること', async () => {
    const el = document.createElement(TAG_NAME);
    document.body.appendChild(el);
    await customElements.whenDefined(TAG_NAME);
    expect(el.style.width).toBe('100%');
  });

  it('connectedCallback後にmaxWidthが100%になること', async () => {
    const el = document.createElement(TAG_NAME);
    document.body.appendChild(el);
    await customElements.whenDefined(TAG_NAME);
    expect(el.style.maxWidth).toBe('100%');
  });

  it('connectedCallback後にoverflowがhiddenになること', async () => {
    const el = document.createElement(TAG_NAME);
    document.body.appendChild(el);
    await customElements.whenDefined(TAG_NAME);
    expect(el.style.overflow).toBe('hidden');
  });

  it('connectedCallback後にboxSizingがborder-boxになること', async () => {
    const el = document.createElement(TAG_NAME);
    document.body.appendChild(el);
    await customElements.whenDefined(TAG_NAME);
    expect(el.style.boxSizing).toBe('border-box');
  });
});
