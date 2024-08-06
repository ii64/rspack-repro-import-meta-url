"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_protocol_monitor_components_components_js"],{

/***/ "./panels/protocol_monitor/components/Toolbar.js":
/*!*******************************************************!*\
  !*** ./panels/protocol_monitor/components/Toolbar.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CopyCommandEvent: () => (/* binding */ CopyCommandEvent),
/* harmony export */   SendCommandEvent: () => (/* binding */ SendCommandEvent),
/* harmony export */   Toolbar: () => (/* binding */ Toolbar)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _toolbar_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar.css.js */ "./panels/protocol_monitor/components/toolbar.css.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const { html, Decorators, LitElement } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__;
const { customElement } = Decorators;
const UIStrings = {
    /**
     * @description The title of a the button that sends a CDP command.
     */
    sendCommandCtrlEnter: 'Send command - Ctrl+Enter',
    /**
     * @description The title of a the button that sends a CDP command.
     */
    sendCommandCmdEnter: 'Send command - ⌘+Enter',
    /**
     * @description he title of a the button that copies a CDP command.
     */
    copyCommand: 'Copy command',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/protocol_monitor/components/Toolbar.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const copyIconUrl = new URL(/* asset import */ __webpack_require__(/*! ../../../Images/copy.svg */ "./Images/copy.svg?a571"), __webpack_require__.b).toString();
const sendIconUrl = new URL(/* asset import */ __webpack_require__(/*! ../../../Images/send.svg */ "./Images/send.svg?44d7"), __webpack_require__.b).toString();
class CopyCommandEvent extends Event {
    static eventName = 'copycommand';
    constructor() {
        super(CopyCommandEvent.eventName, { bubbles: true, composed: true });
    }
}
class SendCommandEvent extends Event {
    static eventName = 'commandsent';
    constructor() {
        super(SendCommandEvent.eventName, { bubbles: true, composed: true });
    }
}
let Toolbar = class Toolbar extends LitElement {
    static styles = [_toolbar_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
    #handleCopy = () => {
        this.dispatchEvent(new CopyCommandEvent());
    };
    #handleSend = () => {
        this.dispatchEvent(new SendCommandEvent());
    };
    render() {
        // clang-format off
        return html `
        <div class="toolbar">
          <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
          title=${i18nString(UIStrings.copyCommand)}
          .size=${"SMALL" /* Buttons.Button.Size.SMALL */}
          .iconUrl=${copyIconUrl}
          .variant=${"toolbar" /* Buttons.Button.Variant.TOOLBAR */}
          @click=${this.#handleCopy}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.action('protocol-monitor.copy-command').track({ click: true })}
        ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
          .size=${"SMALL" /* Buttons.Button.Size.SMALL */}
          title=${_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.Platform.isMac() ? i18nString(UIStrings.sendCommandCmdEnter) : i18nString(UIStrings.sendCommandCtrlEnter)}
          .iconUrl=${sendIconUrl}
          .variant=${"primary_toolbar" /* Buttons.Button.Variant.PRIMARY_TOOLBAR */}
          @click=${this.#handleSend}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.action('protocol-monitor.send-command').track({ click: true })}
        ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
      </div>
    `;
        // clang-format on
    }
};
Toolbar = __decorate([
    customElement('devtools-pm-toolbar')
], Toolbar);

//# sourceMappingURL=Toolbar.js.map

/***/ }),

/***/ "./panels/protocol_monitor/components/components.js":
/*!**********************************************************!*\
  !*** ./panels/protocol_monitor/components/components.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSONEditor: () => (/* reexport module object */ _JSONEditor_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   Toolbar: () => (/* reexport module object */ _Toolbar_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _JSONEditor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JSONEditor.js */ "./panels/protocol_monitor/components/JSONEditor.js");
/* harmony import */ var _Toolbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toolbar.js */ "./panels/protocol_monitor/components/Toolbar.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./panels/protocol_monitor/components/toolbar.css.js":
/*!***********************************************************!*\
  !*** ./panels/protocol_monitor/components/toolbar.css.js ***!
  \***********************************************************/
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
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: inherit;
}

:host {
  display: block;
}

.toolbar {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-left: 5px;
  padding-right: 10px;
  padding-top: 1px;
  height: 27px;
  background-color: var(--sys-color-cdt-base-container);
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid var(--sys-color-divider);
}

.toolbar devtools-button {
  width: 20px;
  height: 20px;
}

/*# sourceURL=toolbar.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);