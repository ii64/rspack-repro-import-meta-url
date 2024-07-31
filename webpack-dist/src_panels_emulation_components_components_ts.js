"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_emulation_components_components_ts"],{

/***/ "./src/panels/emulation/components/DeviceSizeInputElement.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/emulation/components/DeviceSizeInputElement.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SizeInputElement: () => (/* binding */ SizeInputElement)
/* harmony export */ });
/* harmony import */ var _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/emulation/emulation.js */ "./src/models/emulation/emulation.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SizeInputElement_instances, _SizeInputElement_root, _SizeInputElement_disabled, _SizeInputElement_size, _SizeInputElement_placeholder, _SizeInputElement_title, _SizeInputElement_jslogContext, _SizeInputElement_fireSizeChange, _SizeInputElement_handleModifierKeys;




class SizeChangedEvent extends Event {
    constructor(size) {
        super(SizeChangedEvent.eventName);
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: size
        });
    }
}
Object.defineProperty(SizeChangedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'sizechanged'
});
function getInputValue(event) {
    return Number(event.target.value);
}
class SizeInputElement extends HTMLElement {
    constructor(title, { jslogContext }) {
        super();
        _SizeInputElement_instances.add(this);
        _SizeInputElement_root.set(this, this.attachShadow({ mode: 'open' }));
        _SizeInputElement_disabled.set(this, false);
        _SizeInputElement_size.set(this, '0');
        _SizeInputElement_placeholder.set(this, '');
        _SizeInputElement_title.set(this, void 0);
        _SizeInputElement_jslogContext.set(this, void 0);
        __classPrivateFieldSet(this, _SizeInputElement_title, title, "f");
        __classPrivateFieldSet(this, _SizeInputElement_jslogContext, jslogContext, "f");
    }
    connectedCallback() {
        this.render();
    }
    set disabled(disabled) {
        __classPrivateFieldSet(this, _SizeInputElement_disabled, disabled, "f");
        this.render();
    }
    set size(size) {
        __classPrivateFieldSet(this, _SizeInputElement_size, size, "f");
        this.render();
    }
    set placeholder(placeholder) {
        __classPrivateFieldSet(this, _SizeInputElement_placeholder, placeholder, "f");
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
             jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.textField().track({ change: true }).context(__classPrivateFieldGet(this, _SizeInputElement_jslogContext, "f"))}
             maxlength="4"
             title=${__classPrivateFieldGet(this, _SizeInputElement_title, "f")}
             placeholder=${__classPrivateFieldGet(this, _SizeInputElement_placeholder, "f")}
             ?disabled=${__classPrivateFieldGet(this, _SizeInputElement_disabled, "f")}
             .value=${__classPrivateFieldGet(this, _SizeInputElement_size, "f")}
             @change=${__classPrivateFieldGet(this, _SizeInputElement_instances, "m", _SizeInputElement_fireSizeChange)}
             @keydown=${__classPrivateFieldGet(this, _SizeInputElement_instances, "m", _SizeInputElement_handleModifierKeys)} />
    `, __classPrivateFieldGet(this, _SizeInputElement_root, "f"), { host: this });
    }
}
_SizeInputElement_root = new WeakMap(), _SizeInputElement_disabled = new WeakMap(), _SizeInputElement_size = new WeakMap(), _SizeInputElement_placeholder = new WeakMap(), _SizeInputElement_title = new WeakMap(), _SizeInputElement_jslogContext = new WeakMap(), _SizeInputElement_instances = new WeakSet(), _SizeInputElement_fireSizeChange = function _SizeInputElement_fireSizeChange(event) {
    this.dispatchEvent(new SizeChangedEvent(getInputValue(event)));
}, _SizeInputElement_handleModifierKeys = function _SizeInputElement_handleModifierKeys(event) {
    let modifiedValue = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.modifiedFloatNumber(getInputValue(event), event);
    if (modifiedValue === null) {
        return;
    }
    modifiedValue = Math.min(modifiedValue, _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.DeviceModeModel.MaxDeviceSize);
    modifiedValue = Math.max(modifiedValue, _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.DeviceModeModel.MinDeviceSize);
    event.preventDefault();
    event.target.value = String(modifiedValue);
    this.dispatchEvent(new SizeChangedEvent(modifiedValue));
};
Object.defineProperty(SizeInputElement, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `device-mode-emulation-size-input`
});
customElements.define('device-mode-emulation-size-input', SizeInputElement);


/***/ }),

/***/ "./src/panels/emulation/components/components.ts":
/*!*******************************************************!*\
  !*** ./src/panels/emulation/components/components.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeviceSizeInputElement: () => (/* reexport module object */ _DeviceSizeInputElement_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _DeviceSizeInputElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeviceSizeInputElement.js */ "./src/panels/emulation/components/DeviceSizeInputElement.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);