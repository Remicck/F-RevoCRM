import React from 'react';
import { createRoot } from 'react-dom/client';

type WebComponentProps = {
  [key: string]: any;
};

export function createWebComponent(
  Component: React.ComponentType<any>,
  tagName: string,
  observedAttributes: string[] = []
) {
  class ReactWebComponent extends HTMLElement {
    private root: ReturnType<typeof createRoot> | null = null;
    private props: WebComponentProps = {};

    static get observedAttributes() {
      return observedAttributes;
    }

    connectedCallback() {
      this.root = createRoot(this);
      this.updateComponent();
    }

    disconnectedCallback() {
      if (this.root) {
        this.root.unmount();
      }
    }

    attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
      try {
        this.props[name] = JSON.parse(newValue);
      } catch {
        this.props[name] = newValue;
      }
      this.updateComponent();
    }

    private updateComponent() {
      if (!this.root) return;
      
      const props = { ...this.props };
      this.root.render(
        <React.StrictMode>
          <Component {...props} />
        </React.StrictMode>
      );
    }
  }

  if (!customElements.get(tagName)) {
    customElements.define(tagName, ReactWebComponent);
  }
} 