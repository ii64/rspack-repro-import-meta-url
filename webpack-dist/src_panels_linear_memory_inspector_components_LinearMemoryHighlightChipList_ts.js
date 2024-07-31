"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_linear_memory_inspector_components_LinearMemoryHighlightChipList_ts"],{

/***/ "./src/panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.ts":
/*!****************************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteMemoryHighlightEvent: () => (/* binding */ DeleteMemoryHighlightEvent),
/* harmony export */   JumpToHighlightedMemoryEvent: () => (/* binding */ JumpToHighlightedMemoryEvent),
/* harmony export */   LinearMemoryHighlightChipList: () => (/* binding */ LinearMemoryHighlightChipList)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './linearMemoryHighlightChipList.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
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
var _LinearMemoryHighlightChipList_instances, _LinearMemoryHighlightChipList_shadow, _LinearMemoryHighlightChipList_highlightedAreas, _LinearMemoryHighlightChipList_focusedMemoryHighlight, _LinearMemoryHighlightChipList_render, _LinearMemoryHighlightChipList_createChip, _LinearMemoryHighlightChipList_onJumpToHighlightClick, _LinearMemoryHighlightChipList_onDeleteHighlightClick;





const UIStrings = {
    /**
     *@description Tooltip text that appears when hovering over an inspected variable's button in the Linear Memory Highlight Chip List.
    Clicking the button changes the displayed slice of computer memory in the Linear Memory inspector to contain the inspected variable's bytes.
     */
    jumpToAddress: 'Jump to this memory',
    /**
     *@description Tooltip text that appears when hovering over an inspected variable's delete button in the Linear Memory Highlight Chip List.
     Clicking the delete button stops highlighting the variable's memory in the Linear Memory inspector.
     'Memory' is a slice of bytes in the computer memory.
     */
    deleteHighlight: 'Stop highlighting this memory',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__;
class DeleteMemoryHighlightEvent extends Event {
    constructor(highlightInfo) {
        super(DeleteMemoryHighlightEvent.eventName, { bubbles: true, composed: true });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = highlightInfo;
    }
}
Object.defineProperty(DeleteMemoryHighlightEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'deletememoryhighlight'
});
class JumpToHighlightedMemoryEvent extends Event {
    constructor(address) {
        super(JumpToHighlightedMemoryEvent.eventName);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = address;
    }
}
Object.defineProperty(JumpToHighlightedMemoryEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'jumptohighlightedmemory'
});
class LinearMemoryHighlightChipList extends HTMLElement {
    constructor() {
        super(...arguments);
        _LinearMemoryHighlightChipList_instances.add(this);
        _LinearMemoryHighlightChipList_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _LinearMemoryHighlightChipList_highlightedAreas.set(this, []);
        _LinearMemoryHighlightChipList_focusedMemoryHighlight.set(this, void 0);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _LinearMemoryHighlightChipList_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './linearMemoryHighlightChipList.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _LinearMemoryHighlightChipList_highlightedAreas, data.highlightInfos, "f");
        __classPrivateFieldSet(this, _LinearMemoryHighlightChipList_focusedMemoryHighlight, data.focusedMemoryHighlight, "f");
        __classPrivateFieldGet(this, _LinearMemoryHighlightChipList_instances, "m", _LinearMemoryHighlightChipList_render).call(this);
    }
}
_LinearMemoryHighlightChipList_shadow = new WeakMap(), _LinearMemoryHighlightChipList_highlightedAreas = new WeakMap(), _LinearMemoryHighlightChipList_focusedMemoryHighlight = new WeakMap(), _LinearMemoryHighlightChipList_instances = new WeakSet(), _LinearMemoryHighlightChipList_render = function _LinearMemoryHighlightChipList_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    const chips = [];
    for (const highlightInfo of __classPrivateFieldGet(this, _LinearMemoryHighlightChipList_highlightedAreas, "f")) {
        chips.push(__classPrivateFieldGet(this, _LinearMemoryHighlightChipList_instances, "m", _LinearMemoryHighlightChipList_createChip).call(this, highlightInfo));
    }
    const result = html `
            <div class="highlight-chip-list">
              ${chips}
            </div>
        `;
    render(result, __classPrivateFieldGet(this, _LinearMemoryHighlightChipList_shadow, "f"), { host: this });
    // clang-format on
}, _LinearMemoryHighlightChipList_createChip = function _LinearMemoryHighlightChipList_createChip(highlightInfo) {
    const expressionName = highlightInfo.name || '<anonymous>';
    const expressionType = highlightInfo.type;
    const isFocused = highlightInfo === __classPrivateFieldGet(this, _LinearMemoryHighlightChipList_focusedMemoryHighlight, "f");
    const classMap = {
        focused: isFocused,
        'highlight-chip': true,
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html `
      <div class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.Directives.classMap(classMap)}>
        <button class="jump-to-highlight-button" title=${i18nString(UIStrings.jumpToAddress)}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('linear-memory-inspector.jump-to-highlight').track({ click: true })}
            @click=${() => __classPrivateFieldGet(this, _LinearMemoryHighlightChipList_instances, "m", _LinearMemoryHighlightChipList_onJumpToHighlightClick).call(this, highlightInfo.startAddress)}>
          <span class="source-code">
            <span class="value">${expressionName}</span><span class="separator">: </span><span>${expressionType}</span>
          </span>
        </button>
        <div class="delete-highlight-container">
          <button class="delete-highlight-button" title=${i18nString(UIStrings.deleteHighlight)}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('linear-memory-inspector.delete-highlight').track({ click: true })}
              @click=${() => __classPrivateFieldGet(this, _LinearMemoryHighlightChipList_instances, "m", _LinearMemoryHighlightChipList_onDeleteHighlightClick).call(this, highlightInfo)}>
            <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName} .data=${{
        iconName: 'cross',
        color: 'var(--icon-default-hover)',
        width: '16px',
    }}>
            </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}>
          </button>
        </div>
      </div>
    `;
    // clang-format off
}, _LinearMemoryHighlightChipList_onJumpToHighlightClick = function _LinearMemoryHighlightChipList_onJumpToHighlightClick(startAddress) {
    this.dispatchEvent(new JumpToHighlightedMemoryEvent(startAddress));
}, _LinearMemoryHighlightChipList_onDeleteHighlightClick = function _LinearMemoryHighlightChipList_onDeleteHighlightClick(highlight) {
    this.dispatchEvent(new DeleteMemoryHighlightEvent(highlight));
};
Object.defineProperty(LinearMemoryHighlightChipList, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-linear-memory-highlight-chip-list`
});
customElements.define('devtools-linear-memory-highlight-chip-list', LinearMemoryHighlightChipList);


/***/ })

}]);