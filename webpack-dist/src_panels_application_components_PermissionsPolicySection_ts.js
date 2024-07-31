"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_PermissionsPolicySection_ts"],{

/***/ "./src/panels/application/components/PermissionsPolicySection.ts":
/*!***********************************************************************!*\
  !*** ./src/panels/application/components/PermissionsPolicySection.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionsPolicySection: () => (/* binding */ PermissionsPolicySection),
/* harmony export */   renderIconLink: () => (/* binding */ renderIconLink)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../panels/network/forward/forward.js */ "./src/panels/network/forward/forward.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./src/ui/components/report_view/report_view.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './permissionsPolicySection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _PermissionsPolicySection_instances, _PermissionsPolicySection_shadow, _PermissionsPolicySection_permissionsPolicySectionData, _PermissionsPolicySection_toggleShowPermissionsDisallowedDetails, _PermissionsPolicySection_renderAllowed, _PermissionsPolicySection_renderDisallowed, _PermissionsPolicySection_render;












const UIStrings = {
    /**
     *@description Label for a button. When clicked more details (for the content this button refers to) will be shown.
     */
    showDetails: 'Show details',
    /**
     *@description Label for a button. When clicked some details (for the content this button refers to) will be hidden.
     */
    hideDetails: 'Hide details',
    /**
     *@description Label for a list of features which are allowed according to the current Permissions policy
     *(a mechanism that allows developers to enable/disable browser features and APIs (e.g. camera, geolocation, autoplay))
     */
    allowedFeatures: 'Allowed Features',
    /**
     *@description Label for a list of features which are disabled according to the current Permissions policy
     *(a mechanism that allows developers to enable/disable browser features and APIs (e.g. camera, geolocation, autoplay))
     */
    disabledFeatures: 'Disabled Features',
    /**
     *@description Tooltip text for a link to a specific request's headers in the Network panel.
     */
    clickToShowHeader: 'Click to reveal the request whose "`Permissions-Policy`" HTTP header disables this feature.',
    /**
     *@description Tooltip text for a link to a specific iframe in the Elements panel (Iframes can be nested, the link goes
     *  to the outer-most iframe which blocks a certain feature).
     */
    clickToShowIframe: 'Click to reveal the top-most iframe which does not allow this feature in the elements panel.',
    /**
     *@description Text describing that a specific feature is blocked by not being included in the iframe's "allow" attribute.
     */
    disabledByIframe: 'missing in iframe "`allow`" attribute',
    /**
     *@description Text describing that a specific feature is blocked by a Permissions Policy specified in a request header.
     */
    disabledByHeader: 'disabled by "`Permissions-Policy`" header',
    /**
     *@description Text describing that a specific feature is blocked by virtue of being inside a fenced frame tree.
     */
    disabledByFencedFrame: 'disabled inside a `fencedframe`',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/components/PermissionsPolicySection.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__.RenderCoordinator.RenderCoordinator.instance();
function renderIconLink(iconName, title, clickHandler, jsLogContext) {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
  <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
    .iconName=${iconName}
    title=${title}
    .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.ICON}
    .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Size.SMALL}
    @click=${clickHandler}
    jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.action().track({ click: true }).context(jsLogContext)}></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
  `;
    // clang-format on
}
class PermissionsPolicySection extends HTMLElement {
    constructor() {
        super(...arguments);
        _PermissionsPolicySection_instances.add(this);
        _PermissionsPolicySection_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _PermissionsPolicySection_permissionsPolicySectionData.set(this, { policies: [], showDetails: false });
    }
    set data(data) {
        __classPrivateFieldSet(this, _PermissionsPolicySection_permissionsPolicySectionData, data, "f");
        void __classPrivateFieldGet(this, _PermissionsPolicySection_instances, "m", _PermissionsPolicySection_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _PermissionsPolicySection_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './permissionsPolicySection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
}
_PermissionsPolicySection_shadow = new WeakMap(), _PermissionsPolicySection_permissionsPolicySectionData = new WeakMap(), _PermissionsPolicySection_instances = new WeakSet(), _PermissionsPolicySection_toggleShowPermissionsDisallowedDetails = function _PermissionsPolicySection_toggleShowPermissionsDisallowedDetails() {
    __classPrivateFieldGet(this, _PermissionsPolicySection_permissionsPolicySectionData, "f").showDetails = !__classPrivateFieldGet(this, _PermissionsPolicySection_permissionsPolicySectionData, "f").showDetails;
    void __classPrivateFieldGet(this, _PermissionsPolicySection_instances, "m", _PermissionsPolicySection_render).call(this);
}, _PermissionsPolicySection_renderAllowed = function _PermissionsPolicySection_renderAllowed() {
    const allowed = __classPrivateFieldGet(this, _PermissionsPolicySection_permissionsPolicySectionData, "f").policies.filter(p => p.allowed).map(p => p.feature).sort();
    if (!allowed.length) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.allowedFeatures)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName}>
        ${allowed.join(', ')}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName}>
    `;
}, _PermissionsPolicySection_renderDisallowed = async function _PermissionsPolicySection_renderDisallowed() {
    const disallowed = __classPrivateFieldGet(this, _PermissionsPolicySection_permissionsPolicySectionData, "f").policies.filter(p => !p.allowed)
        .sort((a, b) => a.feature.localeCompare(b.feature));
    if (!disallowed.length) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing;
    }
    if (!__classPrivateFieldGet(this, _PermissionsPolicySection_permissionsPolicySectionData, "f").showDetails) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.disabledFeatures)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName}>
          ${disallowed.map(p => p.feature).join(', ')}
          <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
          .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.OUTLINED}
          @click=${() => __classPrivateFieldGet(this, _PermissionsPolicySection_instances, "m", _PermissionsPolicySection_toggleShowPermissionsDisallowedDetails).call(this)}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.action('show-disabled-features-details').track({
            click: true,
        })}>${i18nString(UIStrings.showDetails)}
        </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName}>
      `;
    }
    const frameManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.FrameManager.FrameManager.instance();
    const featureRows = await Promise.all(disallowed.map(async (policy) => {
        const frame = policy.locator ? frameManager.getFrame(policy.locator.frameId) : null;
        const blockReason = policy.locator?.blockReason;
        const linkTargetDOMNode = await (blockReason === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Page.PermissionsPolicyBlockReason.IframeAttribute && frame &&
            frame.getOwnerDOMNodeOrDocument());
        const resource = frame && frame.resourceForURL(frame.url);
        const linkTargetRequest = blockReason === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Page.PermissionsPolicyBlockReason.Header && resource && resource.request;
        const blockReasonText = (() => {
            switch (blockReason) {
                case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Page.PermissionsPolicyBlockReason.IframeAttribute:
                    return i18nString(UIStrings.disabledByIframe);
                case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Page.PermissionsPolicyBlockReason.Header:
                    return i18nString(UIStrings.disabledByHeader);
                case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Page.PermissionsPolicyBlockReason.InFencedFrameTree:
                    return i18nString(UIStrings.disabledByFencedFrame);
                default:
                    return '';
            }
        })();
        const revealHeader = async () => {
            if (!linkTargetRequest) {
                return;
            }
            const headerName = linkTargetRequest.responseHeaderValue('permissions-policy') ? 'permissions-policy' : 'feature-policy';
            const requestLocation = _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_4__.UIRequestLocation.UIRequestLocation.responseHeaderMatch(linkTargetRequest, { name: headerName, value: '' });
            await _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(requestLocation);
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
        <div class="permissions-row">
          <div>
            <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName} class="allowed-icon"
              .data=${{
            color: 'var(--icon-error)',
            iconName: 'cross-circle',
            width: '20px', height: '20px',
        }}>
            </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName}>
          </div>
          <div class="feature-name text-ellipsis">
            ${policy.feature}
          </div>
          <div class="block-reason">${blockReasonText}</div>
          <div>
            ${linkTargetDOMNode ? renderIconLink('code-circle', i18nString(UIStrings.clickToShowIframe), () => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(linkTargetDOMNode), 'reveal-in-elements') :
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing}
            ${linkTargetRequest ? renderIconLink('arrow-up-down-circle', i18nString(UIStrings.clickToShowHeader), revealHeader, 'reveal-in-network') :
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing}
          </div>
        </div>
      `;
        // clang-format on
    }));
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.disabledFeatures)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName} class="policies-list">
        ${featureRows}
        <div class="permissions-row">
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
          .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.OUTLINED}
          @click=${() => __classPrivateFieldGet(this, _PermissionsPolicySection_instances, "m", _PermissionsPolicySection_toggleShowPermissionsDisallowedDetails).call(this)}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.action('hide-disabled-features-details').track({
        click: true,
    })}>${i18nString(UIStrings.hideDetails)}
        </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
        </div>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName}>
    `;
}, _PermissionsPolicySection_render = async function _PermissionsPolicySection_render() {
    await coordinator.write('PermissionsPolicySection render', () => {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionHeader.litTagName}>${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Permissions Policy')}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionHeader.litTagName}>
          ${__classPrivateFieldGet(this, _PermissionsPolicySection_instances, "m", _PermissionsPolicySection_renderAllowed).call(this)}
          ${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.Directives.until(__classPrivateFieldGet(this, _PermissionsPolicySection_instances, "m", _PermissionsPolicySection_renderDisallowed).call(this), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing)}
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionDivider.litTagName}>
        `, __classPrivateFieldGet(this, _PermissionsPolicySection_shadow, "f"), { host: this });
        // clang-format on
    });
};
Object.defineProperty(PermissionsPolicySection, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.literal `devtools-resources-permissions-policy-section`
});
customElements.define('devtools-resources-permissions-policy-section', PermissionsPolicySection);


/***/ })

}]);