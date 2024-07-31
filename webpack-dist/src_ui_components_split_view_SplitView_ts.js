"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_split_view_SplitView_ts"],{

/***/ "./src/ui/components/split_view/SplitView.ts":
/*!***************************************************!*\
  !*** ./src/ui/components/split_view/SplitView.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitView: () => (/* binding */ SplitView)
/* harmony export */ });
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _SplitView_shadow, _SplitView_mousePos, _SplitView_mainAxisIdx, _SplitView_mainDimensions, _SplitView_observer, _SplitView_horizontal, _SplitView_onResize, _SplitView_onMouseDown, _SplitView_onMouseUp, _SplitView_onMouseMove, _SplitView_render;


// clean-css does not compile this file correctly. So as a workaround adding styles inline.
const styles = `
  :host {
    --current-main-area-size: 50%;
    --resizer-size: 3px;
    --min-main-area-size: 200px;
    --min-sidebar-size: 150px;
    --main-area-size: calc(max(var(--current-main-area-size), var(--min-main-area-size)));

    height: 100%;
    width: 100%;
    display: block;
    overflow: auto;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    container: sidebar / size; /* stylelint-disable-line property-no-unknown */
  }

  .container {
    --resizer-position: calc(min(var(--main-area-size), calc(100% - var(--min-sidebar-size))));
    --min-container-size: calc(var(--min-sidebar-size) + var(--min-main-area-size) + var(--resizer-size));

    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    position: relative;
    gap: var(--resizer-size);

    min-width: var(--min-container-size);
  }

  #resizer {
    background-color: var(--sys-color-surface1);
    position: absolute;
    user-select: none;

    /* horizontal */
    width: var(--resizer-size);
    cursor: col-resize;
    left: var(--resizer-position);
    bottom: 0;
    top: 0;
  }

  slot {
    overflow: auto;
    display: block;
  }

  slot[name="main"] {

    /* horizontal */
    width: var(--resizer-position);
    min-width: var(--min-main-area-size);
  }

  slot[name="sidebar"] {
    flex: 1 0 0;

    min-width: var(--min-sidebar-size);
  }

  .horizontal .container {
    flex-direction: column;
    min-height: var(--min-container-size);
    min-width: auto;
  }

  .horizontal #resizer {
    width: auto;
    height: var(--resizer-size);
    cursor: row-resize;
    top: var(--resizer-position);
    left: 0;
    right: 0;
  }

  .horizontal slot[name="main"] {
    width: auto;
    min-width: auto;
    height: var(--resizer-position);
    min-height: var(--min-main-area-size);
  }

  .horizontal slot[name="sidebar"] {
    min-width: auto;
    min-height: var(--min-sidebar-size);
  }
`;
const splitViewStyles = new CSSStyleSheet();
splitViewStyles.replaceSync(styles);
class SplitView extends HTMLElement {
    constructor() {
        super(...arguments);
        _SplitView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _SplitView_mousePos.set(this, [0, 0]);
        _SplitView_mainAxisIdx.set(this, 0);
        _SplitView_mainDimensions.set(this, [0, 0]);
        _SplitView_observer.set(this, void 0);
        _SplitView_horizontal.set(this, false);
        _SplitView_onResize.set(this, (rect) => {
            const prevMainAxisIdx = __classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f");
            if (rect.width <= 600 && rect.height >= 600 || __classPrivateFieldGet(this, _SplitView_horizontal, "f")) {
                __classPrivateFieldSet(this, _SplitView_mainAxisIdx, 1, "f");
            }
            else {
                __classPrivateFieldSet(this, _SplitView_mainAxisIdx, 0, "f");
            }
            if (__classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f") !== prevMainAxisIdx) {
                void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _SplitView_render, "f"));
            }
        });
        _SplitView_onMouseDown.set(this, (event) => {
            const main = __classPrivateFieldGet(this, _SplitView_shadow, "f").querySelector('slot[name=main]');
            if (!main) {
                throw new Error('Main slot not found');
            }
            const rect = main.getBoundingClientRect();
            __classPrivateFieldSet(this, _SplitView_mainDimensions, [rect.width, rect.height], "f");
            __classPrivateFieldSet(this, _SplitView_mousePos, [event.clientX, event.clientY], "f");
            window.addEventListener('mousemove', __classPrivateFieldGet(this, _SplitView_onMouseMove, "f"), true);
            window.addEventListener('mouseup', __classPrivateFieldGet(this, _SplitView_onMouseUp, "f"), true);
        });
        _SplitView_onMouseUp.set(this, () => {
            window.removeEventListener('mousemove', __classPrivateFieldGet(this, _SplitView_onMouseMove, "f"), true);
            window.removeEventListener('mouseup', __classPrivateFieldGet(this, _SplitView_onMouseUp, "f"), true);
        });
        _SplitView_onMouseMove.set(this, (event) => {
            const mousePos = [event.clientX, event.clientY];
            const delta = mousePos[__classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f")] - __classPrivateFieldGet(this, _SplitView_mousePos, "f")[__classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f")];
            const rect = this.getBoundingClientRect();
            const containerDimensions = [rect.width, rect.height];
            const length = ((__classPrivateFieldGet(this, _SplitView_mainDimensions, "f")[__classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f")] + delta) * 100) / containerDimensions[__classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f")];
            this.style.setProperty('--current-main-area-size', length + '%');
        });
        _SplitView_render.set(this, () => {
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
        <div class="wrapper ${__classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f") === 1 ? 'horizontal' : ''}">
          <div class="container">
            <slot name="main"></slot>
            <div id="resizer" @mousedown=${__classPrivateFieldGet(this, _SplitView_onMouseDown, "f")}></div>
            <slot name="sidebar"></slot>
          </div>
        </div>
      `, __classPrivateFieldGet(this, _SplitView_shadow, "f"), { host: this });
            // clang-format on
        });
    }
    connectedCallback() {
        this.style.setProperty('--current-main-area-size', '60%');
        __classPrivateFieldGet(this, _SplitView_shadow, "f").adoptedStyleSheets = [splitViewStyles];
        __classPrivateFieldSet(this, _SplitView_observer, new ResizeObserver(entries => __classPrivateFieldGet(this, _SplitView_onResize, "f").call(this, entries[0].contentRect)), "f");
        __classPrivateFieldGet(this, _SplitView_observer, "f").observe(this);
        __classPrivateFieldGet(this, _SplitView_render, "f").call(this);
    }
    get horizontal() {
        return __classPrivateFieldGet(this, _SplitView_horizontal, "f");
    }
    set horizontal(horizontal) {
        __classPrivateFieldSet(this, _SplitView_horizontal, horizontal, "f");
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _SplitView_render, "f"));
    }
}
_SplitView_shadow = new WeakMap(), _SplitView_mousePos = new WeakMap(), _SplitView_mainAxisIdx = new WeakMap(), _SplitView_mainDimensions = new WeakMap(), _SplitView_observer = new WeakMap(), _SplitView_horizontal = new WeakMap(), _SplitView_onResize = new WeakMap(), _SplitView_onMouseDown = new WeakMap(), _SplitView_onMouseUp = new WeakMap(), _SplitView_onMouseMove = new WeakMap(), _SplitView_render = new WeakMap();
Object.defineProperty(SplitView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-split-view`
});
customElements.define('devtools-split-view', SplitView);


/***/ })

}]);