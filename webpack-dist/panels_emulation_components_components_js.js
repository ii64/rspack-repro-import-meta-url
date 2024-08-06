"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_emulation_components_components_js"],{

/***/ "./panels/emulation/components/DeviceSizeInputElement.js":
/*!***************************************************************!*\
  !*** ./panels/emulation/components/DeviceSizeInputElement.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SizeInputElement: () => (/* binding */ SizeInputElement)
/* harmony export */ });
/* harmony import */ var _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/emulation/emulation.js */ "./models/emulation/emulation.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




class SizeChangedEvent extends Event {
    size;
    static eventName = 'sizechanged';
    constructor(size) {
        super(SizeChangedEvent.eventName);
        this.size = size;
    }
}
function getInputValue(event) {
    return Number(event.target.value);
}
class SizeInputElement extends HTMLElement {
    #root = this.attachShadow({ mode: 'open' });
    #disabled = false;
    #size = '0';
    #placeholder = '';
    #title;
    #jslogContext;
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `device-mode-emulation-size-input`;
    constructor(title, { jslogContext }) {
        super();
        this.#title = title;
        this.#jslogContext = jslogContext;
    }
    connectedCallback() {
        this.render();
    }
    set disabled(disabled) {
        this.#disabled = disabled;
        this.render();
    }
    set size(size) {
        this.#size = size;
        this.render();
    }
    set placeholder(placeholder) {
        this.#placeholder = placeholder;
        this.render();
    }
    render() {
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(
        // Since the emulation code runs in a different frame, we can't
        // use constructed stylesheets (they are disallowed cross-frame).
        // For now, use an inline style tag and later we can refactor this
        // to use proper constructed stylesheets, when the code runs
        // in the correct frame context.
        // eslint-disable-next-line rulesdir/ban_style_tags_in_lit_html
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `
      <style>
        input {
          /*
           * 4 characters for the maximum size of the value,
           * 2 characters for the width of the step-buttons,
           * 2 pixels padding between the characters and the
           * step-buttons.
           */
          width: calc(4ch + 2ch + 2px);
          max-height: 18px;
          border: var(--sys-color-neutral-outline);
          border-radius: 4px;
          margin: 0 2px;
          text-align: center;
          font-size: inherit;
          font-family: inherit;
        }

        input:disabled {
          user-select: none;
        }

        input:focus::-webkit-input-placeholder {
          color: transparent;
        }
      </style>
      <input type="number"
             max=${_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.DeviceModeModel.MaxDeviceSize}
             min=${_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.DeviceModeModel.MinDeviceSize}
             jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.textField().track({ change: true }).context(this.#jslogContext)}
             maxlength="4"
             title=${this.#title}
             placeholder=${this.#placeholder}
             ?disabled=${this.#disabled}
             .value=${this.#size}
             @change=${this.#fireSizeChange}
             @keydown=${this.#handleModifierKeys} />
    `, this.#root, { host: this });
    }
    #fireSizeChange(event) {
        this.dispatchEvent(new SizeChangedEvent(getInputValue(event)));
    }
    #handleModifierKeys(event) {
        let modifiedValue = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.modifiedFloatNumber(getInputValue(event), event);
        if (modifiedValue === null) {
            return;
        }
        modifiedValue = Math.min(modifiedValue, _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.DeviceModeModel.MaxDeviceSize);
        modifiedValue = Math.max(modifiedValue, _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.DeviceModeModel.MinDeviceSize);
        event.preventDefault();
        event.target.value = String(modifiedValue);
        this.dispatchEvent(new SizeChangedEvent(modifiedValue));
    }
}
customElements.define('device-mode-emulation-size-input', SizeInputElement);
//# sourceMappingURL=DeviceSizeInputElement.js.map

/***/ }),

/***/ "./panels/emulation/components/components.js":
/*!***************************************************!*\
  !*** ./panels/emulation/components/components.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeviceSizeInputElement: () => (/* reexport module object */ _DeviceSizeInputElement_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _DeviceSizeInputElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeviceSizeInputElement.js */ "./panels/emulation/components/DeviceSizeInputElement.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=components.js.map

/***/ })

}]);