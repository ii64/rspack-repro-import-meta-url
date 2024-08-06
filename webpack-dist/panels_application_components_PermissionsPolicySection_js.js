"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_components_PermissionsPolicySection_js"],{

/***/ "./panels/application/components/PermissionsPolicySection.js":
/*!*******************************************************************!*\
  !*** ./panels/application/components/PermissionsPolicySection.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionsPolicySection: () => (/* binding */ PermissionsPolicySection),
/* harmony export */   renderIconLink: () => (/* binding */ renderIconLink)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _permissionsPolicySection_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./permissionsPolicySection.css.js */ "./panels/application/components/permissionsPolicySection.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











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
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__.RenderCoordinator.RenderCoordinator.instance();
function renderIconLink(iconName, title, clickHandler, jsLogContext) {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
  <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
    .iconName=${iconName}
    title=${title}
    .variant=${"icon" /* Buttons.Button.Variant.ICON */}
    .size=${"SMALL" /* Buttons.Button.Size.SMALL */}
    @click=${clickHandler}
    jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.action().track({ click: true }).context(jsLogContext)}></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>
  `;
    // clang-format on
}
class PermissionsPolicySection extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.literal `devtools-resources-permissions-policy-section`;
    #shadow = this.attachShadow({ mode: 'open' });
    #permissionsPolicySectionData = { policies: [], showDetails: false };
    set data(data) {
        this.#permissionsPolicySectionData = data;
        void this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_permissionsPolicySection_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]];
    }
    #toggleShowPermissionsDisallowedDetails() {
        this.#permissionsPolicySectionData.showDetails = !this.#permissionsPolicySectionData.showDetails;
        void this.#render();
    }
    #renderAllowed() {
        const allowed = this.#permissionsPolicySectionData.policies.filter(p => p.allowed).map(p => p.feature).sort();
        if (!allowed.length) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing;
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.allowedFeatures)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportValue.litTagName}>
        ${allowed.join(', ')}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportValue.litTagName}>
    `;
    }
    async #renderDisallowed() {
        const disallowed = this.#permissionsPolicySectionData.policies.filter(p => !p.allowed)
            .sort((a, b) => a.feature.localeCompare(b.feature));
        if (!disallowed.length) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing;
        }
        if (!this.#permissionsPolicySectionData.showDetails) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.disabledFeatures)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportValue.litTagName}>
          ${disallowed.map(p => p.feature).join(', ')}
          <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
          .variant=${"outlined" /* Buttons.Button.Variant.OUTLINED */}
          @click=${() => this.#toggleShowPermissionsDisallowedDetails()}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.action('show-disabled-features-details').track({
                click: true,
            })}>${i18nString(UIStrings.showDetails)}
        </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportValue.litTagName}>
      `;
        }
        const frameManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.FrameManager.FrameManager.instance();
        const featureRows = await Promise.all(disallowed.map(async (policy) => {
            const frame = policy.locator ? frameManager.getFrame(policy.locator.frameId) : null;
            const blockReason = policy.locator?.blockReason;
            const linkTargetDOMNode = await (blockReason === "IframeAttribute" /* Protocol.Page.PermissionsPolicyBlockReason.IframeAttribute */ && frame &&
                frame.getOwnerDOMNodeOrDocument());
            const resource = frame && frame.resourceForURL(frame.url);
            const linkTargetRequest = blockReason === "Header" /* Protocol.Page.PermissionsPolicyBlockReason.Header */ && resource && resource.request;
            const blockReasonText = (() => {
                switch (blockReason) {
                    case "IframeAttribute" /* Protocol.Page.PermissionsPolicyBlockReason.IframeAttribute */:
                        return i18nString(UIStrings.disabledByIframe);
                    case "Header" /* Protocol.Page.PermissionsPolicyBlockReason.Header */:
                        return i18nString(UIStrings.disabledByHeader);
                    case "InFencedFrameTree" /* Protocol.Page.PermissionsPolicyBlockReason.InFencedFrameTree */:
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
                const requestLocation = _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIRequestLocation.UIRequestLocation.responseHeaderMatch(linkTargetRequest, { name: headerName, value: '' });
                await _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(requestLocation);
            };
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
        <div class="permissions-row">
          <div>
            <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName} class="allowed-icon"
              .data=${{
                color: 'var(--icon-error)',
                iconName: 'cross-circle',
                width: '20px', height: '20px',
            }}>
            </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}>
          </div>
          <div class="feature-name text-ellipsis">
            ${policy.feature}
          </div>
          <div class="block-reason">${blockReasonText}</div>
          <div>
            ${linkTargetDOMNode ? renderIconLink('code-circle', i18nString(UIStrings.clickToShowIframe), () => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(linkTargetDOMNode), 'reveal-in-elements') :
                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing}
            ${linkTargetRequest ? renderIconLink('arrow-up-down-circle', i18nString(UIStrings.clickToShowHeader), revealHeader, 'reveal-in-network') :
                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing}
          </div>
        </div>
      `;
            // clang-format on
        }));
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.disabledFeatures)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportValue.litTagName} class="policies-list">
        ${featureRows}
        <div class="permissions-row">
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
          .variant=${"outlined" /* Buttons.Button.Variant.OUTLINED */}
          @click=${() => this.#toggleShowPermissionsDisallowedDetails()}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.action('hide-disabled-features-details').track({
            click: true,
        })}>${i18nString(UIStrings.hideDetails)}
        </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>
        </div>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportValue.litTagName}>
    `;
    }
    async #render() {
        await coordinator.write('PermissionsPolicySection render', () => {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName}>${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Permissions Policy')}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName}>
          ${this.#renderAllowed()}
          ${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.Directives.until(this.#renderDisallowed(), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing)}
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionDivider.litTagName}>
        `, this.#shadow, { host: this });
            // clang-format on
        });
    }
}
customElements.define('devtools-resources-permissions-policy-section', PermissionsPolicySection);
//# sourceMappingURL=PermissionsPolicySection.js.map

/***/ }),

/***/ "./panels/application/components/permissionsPolicySection.css.js":
/*!***********************************************************************!*\
  !*** ./panels/application/components/permissionsPolicySection.css.js ***!
  \***********************************************************************/
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
 * Copyright (c) 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  display: contents;
}

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.link,
.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

button.link {
  border: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
}

.policies-list {
  padding-top: 3px;
}

.permissions-row {
  display: flex;
  line-height: 22px;
}

.permissions-row div {
  padding-right: 5px;
}

.feature-name {
  width: 135px;
}

.allowed-icon {
  vertical-align: sub;
}

.block-reason {
  width: 215px;
}

/*# sourceURL=permissionsPolicySection.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/ReportView.js":
/*!*************************************************!*\
  !*** ./ui/components/report_view/ReportView.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Report: () => (/* binding */ Report),
/* harmony export */   ReportKey: () => (/* binding */ ReportKey),
/* harmony export */   ReportSection: () => (/* binding */ ReportSection),
/* harmony export */   ReportSectionDivider: () => (/* binding */ ReportSectionDivider),
/* harmony export */   ReportSectionHeader: () => (/* binding */ ReportSectionHeader),
/* harmony export */   ReportValue: () => (/* binding */ ReportValue)
/* harmony export */ });
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _report_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.css.js */ "./ui/components/report_view/report.css.js");
/* harmony import */ var _reportKey_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reportKey.css.js */ "./ui/components/report_view/reportKey.css.js");
/* harmony import */ var _reportSection_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportSection.css.js */ "./ui/components/report_view/reportSection.css.js");
/* harmony import */ var _reportSectionDivider_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportSectionDivider.css.js */ "./ui/components/report_view/reportSectionDivider.css.js");
/* harmony import */ var _reportSectionHeader_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reportSectionHeader.css.js */ "./ui/components/report_view/reportSectionHeader.css.js");
/* harmony import */ var _reportValue_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportValue.css.js */ "./ui/components/report_view/reportValue.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







class Report extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report`;
    #shadow = this.attachShadow({ mode: 'open' });
    #reportTitle = '';
    set data({ reportTitle }) {
        this.#reportTitle = reportTitle;
        this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_report_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="content">
        ${this.#reportTitle ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `<div class="report-title">${this.#reportTitle}</div>` : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing}
        <slot></slot>
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportSection extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportSection_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section">
        <slot></slot>
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportSectionHeader extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section-header`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportSectionHeader_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-header">
        <slot></slot>
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportSectionDivider extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-divider`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportSectionDivider_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-divider">
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportKey extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-key`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportKey_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="key"><slot></slot></div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportValue extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-value`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportValue_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="value"><slot></slot></div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-report', Report);
customElements.define('devtools-report-section', ReportSection);
customElements.define('devtools-report-section-header', ReportSectionHeader);
customElements.define('devtools-report-key', ReportKey);
customElements.define('devtools-report-value', ReportValue);
customElements.define('devtools-report-divider', ReportSectionDivider);
//# sourceMappingURL=ReportView.js.map

/***/ }),

/***/ "./ui/components/report_view/report.css.js":
/*!*************************************************!*\
  !*** ./ui/components/report_view/report.css.js ***!
  \*************************************************/
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  display: block;
}

.content {
  background-color: var(--sys-color-cdt-base-container);
  display: grid;
  grid-template-columns: min-content 1fr;
  user-select: text;
}

.report-title {
  padding: 12px 24px;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid var(--sys-color-divider);
  color: var(--sys-color-on-surface);
  background-color: var(--sys-color-cdt-base-container);
  grid-column-start: span 2;
}

/*# sourceURL=report.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportKey.css.js":
/*!****************************************************!*\
  !*** ./ui/components/report_view/reportKey.css.js ***!
  \****************************************************/
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  line-height: 28px;
  margin: 0 0 8px;
}

.key {
  color: var(--sys-color-on-surface-subtle);
  padding: 0 6px;
  text-align: right;
  white-space: pre;
  user-select: none;
}

/*# sourceURL=reportKey.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportSection.css.js":
/*!********************************************************!*\
  !*** ./ui/components/report_view/reportSection.css.js ***!
  \********************************************************/
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  grid-column-start: span 2;
  min-width: min-content;
}

.section {
  padding: 12px;
  margin-left: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: auto;
  overflow-wrap: break-word;
  overflow: hidden;
}

/*# sourceURL=reportSection.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportSectionDivider.css.js":
/*!***************************************************************!*\
  !*** ./ui/components/report_view/reportSectionDivider.css.js ***!
  \***************************************************************/
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  grid-column-start: span 2;
}

.section-divider {
  border-bottom: 1px solid var(--sys-color-divider);
}

/*# sourceURL=reportSectionDivider.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportSectionHeader.css.js":
/*!**************************************************************!*\
  !*** ./ui/components/report_view/reportSectionHeader.css.js ***!
  \**************************************************************/
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  grid-column-start: span 2;
}

.section-header {
  padding: 12px;
  margin-left: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: bold;
  color: var(--sys-color-on-surface);
  user-select: none;
}

/*# sourceURL=reportSectionHeader.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportValue.css.js":
/*!******************************************************!*\
  !*** ./ui/components/report_view/reportValue.css.js ***!
  \******************************************************/
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  line-height: 28px;
  margin: 0 0 8px;
  min-width: 150px;
}

.value {
  color: var(--sys-color-on-surface);
  margin-inline-start: 0;
  padding: 0 6px;
  overflow-wrap: break-word;
}

/*# sourceURL=reportValue.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/report_view.js":
/*!**************************************************!*\
  !*** ./ui/components/report_view/report_view.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportView: () => (/* reexport module object */ _ReportView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ReportView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportView.js */ "./ui/components/report_view/ReportView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=report_view.js.map

/***/ })

}]);