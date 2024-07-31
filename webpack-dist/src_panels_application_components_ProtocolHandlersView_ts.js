"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_ProtocolHandlersView_ts"],{

/***/ "./src/panels/application/components/ProtocolHandlersView.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/application/components/ProtocolHandlersView.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtocolHandlersView: () => (/* binding */ ProtocolHandlersView)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./src/ui/components/input/input.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../ui/legacy/inspectorCommon.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './protocolHandlersView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2022 The Chromium Authors. All rights reserved.
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
var _ProtocolHandlersView_instances, _ProtocolHandlersView_shadow, _ProtocolHandlersView_protocolHandlers, _ProtocolHandlersView_manifestLink, _ProtocolHandlersView_selectedProtocolState, _ProtocolHandlersView_queryInputState, _ProtocolHandlersView_update, _ProtocolHandlersView_renderStatusMessage, _ProtocolHandlersView_renderProtocolTest, _ProtocolHandlersView_handleProtocolSelect, _ProtocolHandlersView_handleQueryInputChange, _ProtocolHandlersView_handleTestProtocolClick, _ProtocolHandlersView_render;






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
    constructor() {
        super(...arguments);
        _ProtocolHandlersView_instances.add(this);
        _ProtocolHandlersView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ProtocolHandlersView_protocolHandlers.set(this, []);
        _ProtocolHandlersView_manifestLink.set(this, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.DevToolsPath.EmptyUrlString);
        _ProtocolHandlersView_selectedProtocolState.set(this, '');
        _ProtocolHandlersView_queryInputState.set(this, '');
        _ProtocolHandlersView_handleProtocolSelect.set(this, (evt) => {
            __classPrivateFieldSet(this, _ProtocolHandlersView_selectedProtocolState, evt.target.value, "f");
        });
        _ProtocolHandlersView_handleQueryInputChange.set(this, (evt) => {
            __classPrivateFieldSet(this, _ProtocolHandlersView_queryInputState, evt.target.value, "f");
            __classPrivateFieldGet(this, _ProtocolHandlersView_instances, "m", _ProtocolHandlersView_render).call(this);
        });
        _ProtocolHandlersView_handleTestProtocolClick.set(this, () => {
            const protocolURL = `${__classPrivateFieldGet(this, _ProtocolHandlersView_selectedProtocolState, "f")}://${__classPrivateFieldGet(this, _ProtocolHandlersView_queryInputState, "f")}`;
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(protocolURL);
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.CaptureTestProtocolClicked);
        });
    }
    set data(data) {
        const isNewManifest = __classPrivateFieldGet(this, _ProtocolHandlersView_manifestLink, "f") !== data.manifestLink;
        __classPrivateFieldSet(this, _ProtocolHandlersView_protocolHandlers, data.protocolHandlers, "f");
        __classPrivateFieldSet(this, _ProtocolHandlersView_manifestLink, data.manifestLink, "f");
        if (isNewManifest) {
            __classPrivateFieldGet(this, _ProtocolHandlersView_instances, "m", _ProtocolHandlersView_update).call(this);
        }
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ProtocolHandlersView_shadow, "f").adoptedStyleSheets = [
            Object(function webpackMissingModule() { var e = new Error("Cannot find module './protocolHandlersView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../ui/legacy/inspectorCommon.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_5__.textInputStyles,
        ];
    }
}
_ProtocolHandlersView_shadow = new WeakMap(), _ProtocolHandlersView_protocolHandlers = new WeakMap(), _ProtocolHandlersView_manifestLink = new WeakMap(), _ProtocolHandlersView_selectedProtocolState = new WeakMap(), _ProtocolHandlersView_queryInputState = new WeakMap(), _ProtocolHandlersView_handleProtocolSelect = new WeakMap(), _ProtocolHandlersView_handleQueryInputChange = new WeakMap(), _ProtocolHandlersView_handleTestProtocolClick = new WeakMap(), _ProtocolHandlersView_instances = new WeakSet(), _ProtocolHandlersView_update = function _ProtocolHandlersView_update() {
    __classPrivateFieldSet(this, _ProtocolHandlersView_queryInputState, '', "f");
    __classPrivateFieldSet(this, _ProtocolHandlersView_selectedProtocolState, __classPrivateFieldGet(this, _ProtocolHandlersView_protocolHandlers, "f")[0]?.protocol ?? '', "f");
    __classPrivateFieldGet(this, _ProtocolHandlersView_instances, "m", _ProtocolHandlersView_render).call(this);
}, _ProtocolHandlersView_renderStatusMessage = function _ProtocolHandlersView_renderStatusMessage() {
    const manifestInTextLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.XLink.XLink.create(__classPrivateFieldGet(this, _ProtocolHandlersView_manifestLink, "f"), i18nString(UIStrings.manifest), undefined, undefined, 'manifest');
    const statusString = __classPrivateFieldGet(this, _ProtocolHandlersView_protocolHandlers, "f").length > 0 ? UIStrings.protocolDetected : UIStrings.protocolNotDetected;
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
    <div class="protocol-handlers-row status">
            <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName} class="inline-icon"
                                                name=${__classPrivateFieldGet(this, _ProtocolHandlersView_protocolHandlers, "f").length > 0 ? 'check-circle' : 'info'}>
            </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName}>
            ${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, statusString, {
        PH1: manifestInTextLink,
    })}
    </div>
    `;
    // clang-format on
}, _ProtocolHandlersView_renderProtocolTest = function _ProtocolHandlersView_renderProtocolTest() {
    if (__classPrivateFieldGet(this, _ProtocolHandlersView_protocolHandlers, "f").length === 0) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing;
    }
    const protocolOptions = __classPrivateFieldGet(this, _ProtocolHandlersView_protocolHandlers, "f").filter(p => p.protocol)
        .map(p => _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `<option value=${p.protocol} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.item(p.protocol).track({
        click: true,
    })}>${p.protocol}://</option>`);
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
       <div class="protocol-handlers-row">
        <select class="chrome-select protocol-select" @change=${__classPrivateFieldGet(this, _ProtocolHandlersView_handleProtocolSelect, "f")} aria-label=${i18nString(UIStrings.dropdownLabel)}>
           ${protocolOptions}
        </select>
        <input .value=${__classPrivateFieldGet(this, _ProtocolHandlersView_queryInputState, "f")} class="devtools-text-input" type="text" @change=${__classPrivateFieldGet(this, _ProtocolHandlersView_handleQueryInputChange, "f")} aria-label=${i18nString(UIStrings.textboxLabel)}
        placeholder=${i18nString(UIStrings.textboxPlaceholder)}/>
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button.litTagName} .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Variant.PRIMARY} @click=${__classPrivateFieldGet(this, _ProtocolHandlersView_handleTestProtocolClick, "f")}>
            ${i18nString(UIStrings.testProtocol)}
        </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button.litTagName}>
        </div>
      `;
}, _ProtocolHandlersView_render = function _ProtocolHandlersView_render() {
    const protocolDocLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.XLink.XLink.create(PROTOCOL_DOCUMENT_URL, i18nString(UIStrings.protocolHandlerRegistrations), undefined, undefined, 'learn-more');
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
      ${__classPrivateFieldGet(this, _ProtocolHandlersView_instances, "m", _ProtocolHandlersView_renderStatusMessage).call(this)}
      <div class="protocol-handlers-row">
          ${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.needHelpReadOur, { PH1: protocolDocLink })}
      </div>
      ${__classPrivateFieldGet(this, _ProtocolHandlersView_instances, "m", _ProtocolHandlersView_renderProtocolTest).call(this)}
    `, __classPrivateFieldGet(this, _ProtocolHandlersView_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ProtocolHandlersView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.literal `devtools-protocol-handlers-view`
});
customElements.define('devtools-protocol-handlers-view', ProtocolHandlersView);


/***/ })

}]);