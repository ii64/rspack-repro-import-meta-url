(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_platform_DOMUtilities_test_js_map"],{

/***/ "./core/platform/DOMUtilities.test.js.map":
/*!************************************************!*\
  !*** ./core/platform/DOMUtilities.test.js.map ***!
  \************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"DOMUtilities.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/platform/DOMUtilities.test.ts\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"// Copyright (c) 2022 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {renderElementIntoDOM} from '../../testing/DOMHelpers.js';\\n\\nimport * as Platform from './platform.js';\\n\\ndescribe('DOMUtilities', () => {\\n  describe('deepActiveElement', () => {\\n    it('returns the active element if there is no shadow root', () => {\\n      const btn = document.createElement('button');\\n      btn.innerText = 'Click me!';\\n      renderElementIntoDOM(btn);\\n      btn.focus();\\n      const activeElement = Platform.DOMUtilities.deepActiveElement(document);\\n      assert.strictEqual(activeElement, btn);\\n    });\\n\\n    it('dives through the shadow root and finds the right active element', () => {\\n      class TestComponent extends HTMLElement {\\n        shadow = this.attachShadow({mode: 'open'});\\n        button = document.createElement('button');\\n\\n        connectedCallback(): void {\\n          this.button.innerText = 'Click me from the shadow root!';\\n          this.shadow.appendChild(this.button);\\n          this.button.focus();\\n        }\\n      }\\n      customElements.define('dom-utilities-test-component', TestComponent);\\n\\n      const component = new TestComponent();\\n      renderElementIntoDOM(component);\\n      const activeElement = Platform.DOMUtilities.deepActiveElement(document);\\n      assert.strictEqual(activeElement, component.button);\\n    });\\n  });\\n\\n  describe('getEnclosingShadowRootForNode', () => {\\n    it('returns null if no shadow root is found up the tree', () => {\\n      const parent = document.createElement('div');\\n      const child = document.createElement('p');\\n      parent.appendChild(child);\\n      renderElementIntoDOM(parent);\\n      assert.isNull(Platform.DOMUtilities.getEnclosingShadowRootForNode(child));\\n    });\\n\\n    it('returns the shadow root in the tree', () => {\\n      const div = document.createElement('div');\\n\\n      class TestComponent extends HTMLElement {\\n        readonly #shadow = this.attachShadow({mode: 'open'});\\n\\n        connectedCallback() {\\n          this.#shadow.appendChild(div);\\n        }\\n      }\\n      customElements.define('shadow-root-test', TestComponent);\\n      const component = new TestComponent();\\n      renderElementIntoDOM(component);\\n      assert.strictEqual(Platform.DOMUtilities.getEnclosingShadowRootForNode(div), component.shadowRoot);\\n    });\\n  });\\n});\\n\"]}");

/***/ })

}]);