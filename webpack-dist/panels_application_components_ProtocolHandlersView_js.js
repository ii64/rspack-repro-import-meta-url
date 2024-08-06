"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_components_ProtocolHandlersView_js"],{

/***/ "./panels/application/components/ProtocolHandlersView.js":
/*!***************************************************************!*\
  !*** ./panels/application/components/ProtocolHandlersView.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtocolHandlersView: () => (/* binding */ ProtocolHandlersView)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */ var _ui_legacy_inspectorCommon_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/legacy/inspectorCommon.css.js */ "./ui/legacy/inspectorCommon.css.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _protocolHandlersView_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./protocolHandlersView.css.js */ "./panels/application/components/protocolHandlersView.css.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






// inspectorCommonStyles is imported for the chrome-select class that is used for the dropdown
// eslint-disable-next-line rulesdir/es_modules_import





const PROTOCOL_DOCUMENT_URL = 'https://web.dev/url-protocol-handler/';
const UIStrings = {
    /**
     *@description Status message for when protocol handlers are detected in the manifest
     *@example {protocolhandler/manifest.json} PH1
     */
    protocolDetected: 'Found valid protocol handler registration in the {PH1}. With the app installed, test the registered protocols.',
    /**
     *@description Status message for when protocol handlers are not detected in the manifest
     *@example {protocolhandler/manifest.json} PH1
     */
    protocolNotDetected: 'Define protocol handlers in the {PH1} to register your app as a handler for custom protocols when your app is installed.',
    /**
     *@description Text wrapping a link pointing to more information on handling protocol handlers
     *@example {https://example.com/} PH1
     */
    needHelpReadOur: 'Need help? Read {PH1}.',
    /**
     *@description Link text for more information on URL protocol handler registrations for PWAs
     */
    protocolHandlerRegistrations: 'URL protocol handler registration for PWAs',
    /**
     *@description In text hyperlink to the PWA manifest
     */
    manifest: 'manifest',
    /**
     *@description Text for test protocol button
     */
    testProtocol: 'Test protocol',
    /**
     * @description Aria text for screen reader to announce they can select a protocol handler in the dropdown
     */
    dropdownLabel: 'Select protocol handler',
    /**
     * @description Aria text for screen reader to announce they can enter query parameters or endpoints into the textbox
     */
    textboxLabel: 'Query parameter or endpoint for protocol handler',
    /**
     * @description Placeholder for textbox input field, rest of the URL of protocol to test.
     */
    textboxPlaceholder: 'Enter URL',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/components/ProtocolHandlersView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class ProtocolHandlersView extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.literal `devtools-protocol-handlers-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #protocolHandlers = [];
    #manifestLink = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.DevToolsPath.EmptyUrlString;
    #selectedProtocolState = '';
    #queryInputState = '';
    set data(data) {
        const isNewManifest = this.#manifestLink !== data.manifestLink;
        this.#protocolHandlers = data.protocolHandlers;
        this.#manifestLink = data.manifestLink;
        if (isNewManifest) {
            this.#update();
        }
    }
    #update() {
        this.#queryInputState = '';
        this.#selectedProtocolState = this.#protocolHandlers[0]?.protocol ?? '';
        this.#render();
    }
    #renderStatusMessage() {
        const manifestInTextLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.XLink.XLink.create(this.#manifestLink, i18nString(UIStrings.manifest), undefined, undefined, 'manifest');
        const statusString = this.#protocolHandlers.length > 0 ? UIStrings.protocolDetected : UIStrings.protocolNotDetected;
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
    <div class="protocol-handlers-row status">
            <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName} class="inline-icon"
                                                name=${this.#protocolHandlers.length > 0 ? 'check-circle' : 'info'}>
            </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName}>
            ${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, statusString, {
            PH1: manifestInTextLink,
        })}
    </div>
    `;
        // clang-format on
    }
    #renderProtocolTest() {
        if (this.#protocolHandlers.length === 0) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing;
        }
        const protocolOptions = this.#protocolHandlers.filter(p => p.protocol)
            .map(p => _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `<option value=${p.protocol} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.item(p.protocol).track({
            click: true,
        })}>${p.protocol}://</option>`);
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
       <div class="protocol-handlers-row">
        <select class="chrome-select protocol-select" @change=${this.#handleProtocolSelect} aria-label=${i18nString(UIStrings.dropdownLabel)}>
           ${protocolOptions}
        </select>
        <input .value=${this.#queryInputState} class="devtools-text-input" type="text" @change=${this.#handleQueryInputChange} aria-label=${i18nString(UIStrings.textboxLabel)}
        placeholder=${i18nString(UIStrings.textboxPlaceholder)}/>
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button.litTagName} .variant=${"primary" /* Buttons.Button.Variant.PRIMARY */} @click=${this.#handleTestProtocolClick}>
            ${i18nString(UIStrings.testProtocol)}
        </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button.litTagName}>
        </div>
      `;
    }
    #handleProtocolSelect = (evt) => {
        this.#selectedProtocolState = evt.target.value;
    };
    #handleQueryInputChange = (evt) => {
        this.#queryInputState = evt.target.value;
        this.#render();
    };
    #handleTestProtocolClick = () => {
        const protocolURL = `${this.#selectedProtocolState}://${this.#queryInputState}`;
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(protocolURL);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.CaptureTestProtocolClicked);
    };
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [
            _protocolHandlersView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"],
            _ui_legacy_inspectorCommon_css_js__WEBPACK_IMPORTED_MODULE_6__["default"],
            _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_5__.textInputStyles,
        ];
    }
    #render() {
        const protocolDocLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.XLink.XLink.create(PROTOCOL_DOCUMENT_URL, i18nString(UIStrings.protocolHandlerRegistrations), undefined, undefined, 'learn-more');
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
      ${this.#renderStatusMessage()}
      <div class="protocol-handlers-row">
          ${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.needHelpReadOur, { PH1: protocolDocLink })}
      </div>
      ${this.#renderProtocolTest()}
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-protocol-handlers-view', ProtocolHandlersView);
//# sourceMappingURL=ProtocolHandlersView.js.map

/***/ }),

/***/ "./panels/application/components/protocolHandlersView.css.js":
/*!*******************************************************************!*\
  !*** ./panels/application/components/protocolHandlersView.css.js ***!
  \*******************************************************************/
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
 * Copyright (c) 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

.devtools-link:focus-visible {
  outline-width: unset;
}

input.devtools-text-input[type="text"] {
  padding: 3px 6px;
  margin-left: 4px;
  margin-right: 4px;
  width: 250px;
  height: 25px;
}

input.devtools-text-input[type="text"]::placeholder {
  color: var(--sys-color-token-subtle);
}

.protocol-handlers-row {
  margin: 10px 0 2px 18px;
}

.inline-icon {
  margin-inline: 4px;
  width: 16px;
  height: 16px;

  &[name="check-circle"] {
    color: var(--icon-checkmark-green);
  }
}

@media (forced-colors: active) {
  .devtools-link:not(.devtools-link-prevent-click) {
    color: linktext;
  }

  .devtools-link:focus-visible {
    background: Highlight;
    color: HighlightText;
  }
}

/*# sourceURL=protocolHandlersView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);