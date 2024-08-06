"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_linear_memory_inspector_components_LinearMemoryHighlightChipList_js"],{

/***/ "./panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.js":
/*!************************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteMemoryHighlightEvent: () => (/* binding */ DeleteMemoryHighlightEvent),
/* harmony export */   JumpToHighlightedMemoryEvent: () => (/* binding */ JumpToHighlightedMemoryEvent),
/* harmony export */   LinearMemoryHighlightChipList: () => (/* binding */ LinearMemoryHighlightChipList)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _linearMemoryHighlightChipList_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./linearMemoryHighlightChipList.css.js */ "./panels/linear_memory_inspector/components/linearMemoryHighlightChipList.css.js");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





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
    static eventName = 'deletememoryhighlight';
    data;
    constructor(highlightInfo) {
        super(DeleteMemoryHighlightEvent.eventName, { bubbles: true, composed: true });
        this.data = highlightInfo;
    }
}
class JumpToHighlightedMemoryEvent extends Event {
    static eventName = 'jumptohighlightedmemory';
    data;
    constructor(address) {
        super(JumpToHighlightedMemoryEvent.eventName);
        this.data = address;
    }
}
class LinearMemoryHighlightChipList extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-linear-memory-highlight-chip-list`;
    #shadow = this.attachShadow({ mode: 'open' });
    #highlightedAreas = [];
    #focusedMemoryHighlight;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_linearMemoryHighlightChipList_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
    }
    set data(data) {
        this.#highlightedAreas = data.highlightInfos;
        this.#focusedMemoryHighlight = data.focusedMemoryHighlight;
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        const chips = [];
        for (const highlightInfo of this.#highlightedAreas) {
            chips.push(this.#createChip(highlightInfo));
        }
        const result = html `
            <div class="highlight-chip-list">
              ${chips}
            </div>
        `;
        render(result, this.#shadow, { host: this });
        // clang-format on
    }
    #createChip(highlightInfo) {
        const expressionName = highlightInfo.name || '<anonymous>';
        const expressionType = highlightInfo.type;
        const isFocused = highlightInfo === this.#focusedMemoryHighlight;
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
            @click=${() => this.#onJumpToHighlightClick(highlightInfo.startAddress)}>
          <span class="source-code">
            <span class="value">${expressionName}</span><span class="separator">: </span><span>${expressionType}</span>
          </span>
        </button>
        <div class="delete-highlight-container">
          <button class="delete-highlight-button" title=${i18nString(UIStrings.deleteHighlight)}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('linear-memory-inspector.delete-highlight').track({ click: true })}
              @click=${() => this.#onDeleteHighlightClick(highlightInfo)}>
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
    }
    #onJumpToHighlightClick(startAddress) {
        this.dispatchEvent(new JumpToHighlightedMemoryEvent(startAddress));
    }
    #onDeleteHighlightClick(highlight) {
        this.dispatchEvent(new DeleteMemoryHighlightEvent(highlight));
    }
}
customElements.define('devtools-linear-memory-highlight-chip-list', LinearMemoryHighlightChipList);
//# sourceMappingURL=LinearMemoryHighlightChipList.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/components/linearMemoryHighlightChipList.css.js":
/*!****************************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/linearMemoryHighlightChipList.css.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.highlight-chip-list {
  min-height: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  background-color: var(--sys-color-cdt-base-container);
  margin: 8px 0;
  gap: 8px;
  row-gap: 6px;
}

.highlight-chip {
  background: var(--sys-color-cdt-base-container);
  border: 1px solid var(--sys-color-divider);
  height: 18px;
  border-radius: 4px;
  flex: 0 0 auto;
  max-width: 250px;
  position: relative;
  padding: 0 6px;
}

.highlight-chip:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.delete-highlight-container {
  display: none;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 4px;
  width: 24px;
  align-items: center;
  justify-content: center;
}

.delete-highlight-button {
  cursor: pointer;
  width: 13px;
  height: 13px;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-highlight-button:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
  border-radius: 50%;
}

.jump-to-highlight-button {
  cursor: pointer;
  padding: 0;
  border: none;
  background: none;
  height: 100%;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
}

.delete-highlight-button devtools-icon {
  width: 13px;
  height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.source-code {
  font-family: var(--source-code-font-family);
  font-size: var(--source-code-font-size);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--sys-color-on-surface);
}

.value {
  color: var(--sys-color-token-tag);
}

.separator {
  white-space: pre;
  flex-shrink: 0;
}

.highlight-chip.focused {
  outline: 2px solid var(--sys-color-state-focus-ring);
  outline-offset: 2px;
}

.highlight-chip:hover > .delete-highlight-container {
  display: flex;
  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */
  background: linear-gradient(90deg, transparent 0%, rgb(241 243 244) 25%); /* stylelint-disable-line plugin/use_theme_colors */
}

.highlight-chip.focused:hover > .delete-highlight-container {
  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */
  background: linear-gradient(90deg, transparent 0%, rgb(231 241 253) 25%); /* stylelint-disable-line plugin/use_theme_colors */
}

:host-context(.theme-with-dark-background) .highlight-chip:hover > .delete-highlight-container {
  display: flex;
  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */
  background: linear-gradient(90deg, transparent 0%, rgb(41 42 45) 25%); /* stylelint-disable-line plugin/use_theme_colors */
}

:host-context(.theme-with-dark-background) .highlight-chip.focused:hover > .delete-highlight-container {
  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */
  background: linear-gradient(90deg, transparent 0%, rgb(48 55 68) 25%); /* stylelint-disable-line plugin/use_theme_colors */
}

/*# sourceURL=linearMemoryHighlightChipList.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);