"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_OpenedWindowDetailsView_js"],{

/***/ "./panels/application/OpenedWindowDetailsView.js":
/*!*******************************************************!*\
  !*** ./panels/application/OpenedWindowDetailsView.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenedWindowDetailsView: () => (/* binding */ OpenedWindowDetailsView),
/* harmony export */   WorkerDetailsView: () => (/* binding */ WorkerDetailsView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _openedWindowDetailsView_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./openedWindowDetailsView.css.js */ "./panels/application/openedWindowDetailsView.css.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Text in Timeline indicating that input has happened recently
     */
    yes: 'Yes',
    /**
     *@description Text in Timeline indicating that input has not happened recently
     */
    no: 'No',
    /**
     *@description Title for a link to the Elements panel
     */
    clickToRevealInElementsPanel: 'Click to reveal in Elements panel',
    /**
     *@description Name of a network resource type
     */
    document: 'Document',
    /**
     *@description Text for web URLs
     */
    url: 'URL',
    /**
     *@description Title of the 'Security' tool
     */
    security: 'Security',
    /**
     *@description Label for link to Opener Frame in Detail View for Opened Window
     */
    openerFrame: 'Opener Frame',
    /**
     *@description Label in opened window's details view whether window has access to its opener
     */
    accessToOpener: 'Access to opener',
    /**
     *@description Description for the 'Access to Opener' field
     */
    showsWhetherTheOpenedWindowIs: 'Shows whether the opened window is able to access its opener and vice versa',
    /**
     *@description Text in Frames View of the Application panel
     */
    windowWithoutTitle: 'Window without title',
    /**
     *@description Label suffix in the Application Panel Frames section for windows which are already closed
     */
    closed: 'closed',
    /**
     *@description Default name for worker
     */
    worker: 'worker',
    /**
     *@description Text that refers to some types
     */
    type: 'Type',
    /**
     *@description Section header in the Frame Details view
     */
    securityIsolation: 'Security & Isolation',
    /**
     *@description Row title in the Frame Details view
     */
    crossoriginEmbedderPolicy: 'Cross-Origin Embedder Policy',
    /**
     *@description Label for worker type: web worker
     */
    webWorker: 'Web Worker',
    /**
     *@description Text for an unspecified service worker response source
     */
    unknown: 'Unknown',
    /**
     *@description This label specifies the server endpoints to which the server is reporting errors
     *and warnings through the Report-to API. Following this label will be the URL of the server.
     */
    reportingTo: 'reporting to',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/OpenedWindowDetailsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const booleanToYesNo = (b) => b ? i18nString(UIStrings.yes) : i18nString(UIStrings.no);
function linkifyIcon(iconType, title, eventHandler) {
    const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.create(iconType, 'icon-link devtools-link');
    const button = document.createElement('button');
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(button, title);
    button.classList.add('devtools-link', 'link-style', 'text-button');
    button.appendChild(icon);
    button.addEventListener('click', event => {
        event.consume(true);
        void eventHandler();
    });
    return button;
}
async function maybeCreateLinkToElementsPanel(opener) {
    let openerFrame = null;
    if (opener instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeFrame) {
        openerFrame = opener;
    }
    else if (opener) {
        openerFrame = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.FrameManager.FrameManager.instance().getFrame(opener);
    }
    if (!openerFrame) {
        return null;
    }
    const linkTargetDOMNode = await openerFrame.getOwnerDOMNodeOrDocument();
    if (!linkTargetDOMNode) {
        return null;
    }
    const linkElement = linkifyIcon('code-circle', i18nString(UIStrings.clickToRevealInElementsPanel), () => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(linkTargetDOMNode));
    const label = document.createElement('span');
    label.textContent = `<${linkTargetDOMNode.nodeName().toLocaleLowerCase()}>`;
    linkElement.insertBefore(label, linkElement.firstChild);
    linkElement.addEventListener('mouseenter', () => {
        if (openerFrame) {
            void openerFrame.highlight();
        }
    });
    linkElement.addEventListener('mouseleave', () => {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
    });
    return linkElement;
}
class OpenedWindowDetailsView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ThrottledWidget.ThrottledWidget {
    targetInfo;
    isWindowClosed;
    reportView;
    documentSection;
    #urlFieldValue;
    securitySection;
    openerElementField;
    hasDOMAccessValue;
    constructor(targetInfo, isWindowClosed) {
        super();
        this.targetInfo = targetInfo;
        this.isWindowClosed = isWindowClosed;
        this.contentElement.classList.add('frame-details-container');
        // TODO(crbug.com/1156978): Replace UI.ReportView.ReportView with ReportView.ts web component.
        this.reportView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportView(this.buildTitle());
        this.reportView.show(this.contentElement);
        this.reportView.element.classList.add('frame-details-report-container');
        this.documentSection = this.reportView.appendSection(i18nString(UIStrings.document));
        this.#urlFieldValue =
            this.documentSection.appendField(i18nString(UIStrings.url)).createChild('div', 'text-ellipsis');
        this.securitySection = this.reportView.appendSection(i18nString(UIStrings.security));
        this.openerElementField = this.securitySection.appendField(i18nString(UIStrings.openerFrame));
        this.securitySection.setFieldVisible(i18nString(UIStrings.openerFrame), false);
        this.hasDOMAccessValue = this.securitySection.appendField(i18nString(UIStrings.accessToOpener));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(this.hasDOMAccessValue, i18nString(UIStrings.showsWhetherTheOpenedWindowIs));
        this.update();
    }
    async doUpdate() {
        this.reportView.setTitle(this.buildTitle());
        this.#urlFieldValue.textContent = this.targetInfo.url;
        this.#urlFieldValue.title = this.targetInfo.url;
        this.hasDOMAccessValue.textContent = booleanToYesNo(this.targetInfo.canAccessOpener);
        void this.maybeDisplayOpenerFrame();
    }
    async maybeDisplayOpenerFrame() {
        this.openerElementField.removeChildren();
        const linkElement = await maybeCreateLinkToElementsPanel(this.targetInfo.openerFrameId);
        if (linkElement) {
            this.openerElementField.append(linkElement);
            this.securitySection.setFieldVisible(i18nString(UIStrings.openerFrame), true);
            return;
        }
        this.securitySection.setFieldVisible(i18nString(UIStrings.openerFrame), false);
    }
    buildTitle() {
        let title = this.targetInfo.title || i18nString(UIStrings.windowWithoutTitle);
        if (this.isWindowClosed) {
            title += ` (${i18nString(UIStrings.closed)})`;
        }
        return title;
    }
    setIsWindowClosed(isWindowClosed) {
        this.isWindowClosed = isWindowClosed;
    }
    setTargetInfo(targetInfo) {
        this.targetInfo = targetInfo;
    }
    wasShown() {
        super.wasShown();
        this.reportView.registerCSSFiles([_openedWindowDetailsView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]]);
        this.registerCSSFiles([_openedWindowDetailsView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]]);
    }
}
class WorkerDetailsView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ThrottledWidget.ThrottledWidget {
    targetInfo;
    reportView;
    documentSection;
    isolationSection;
    coepPolicy;
    constructor(targetInfo) {
        super();
        this.targetInfo = targetInfo;
        this.contentElement.classList.add('frame-details-container');
        // TODO(crbug.com/1156978): Replace UI.ReportView.ReportView with ReportView.ts web component.
        this.reportView =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportView(this.targetInfo.title || this.targetInfo.url || i18nString(UIStrings.worker));
        this.reportView.show(this.contentElement);
        this.reportView.element.classList.add('frame-details-report-container');
        this.documentSection = this.reportView.appendSection(i18nString(UIStrings.document));
        const URLFieldValue = this.documentSection.appendField(i18nString(UIStrings.url)).createChild('div', 'text-ellipsis');
        URLFieldValue.textContent = this.targetInfo.url;
        URLFieldValue.title = this.targetInfo.url;
        const workerType = this.documentSection.appendField(i18nString(UIStrings.type));
        workerType.textContent = this.workerTypeToString(this.targetInfo.type);
        this.isolationSection = this.reportView.appendSection(i18nString(UIStrings.securityIsolation));
        this.coepPolicy = this.isolationSection.appendField(i18nString(UIStrings.crossoriginEmbedderPolicy));
        this.update();
    }
    workerTypeToString(type) {
        if (type === 'worker') {
            return i18nString(UIStrings.webWorker);
        }
        if (type === 'service_worker') {
            return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Service Worker');
        }
        return i18nString(UIStrings.unknown);
    }
    async updateCoopCoepStatus() {
        const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().targetById(this.targetInfo.targetId);
        if (!target) {
            return;
        }
        const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.NetworkManager);
        const info = model && await model.getSecurityIsolationStatus(null);
        if (!info) {
            return;
        }
        const coepIsEnabled = (value) => value !== "None" /* Protocol.Network.CrossOriginEmbedderPolicyValue.None */;
        this.fillCrossOriginPolicy(this.coepPolicy, coepIsEnabled, info.coep);
    }
    fillCrossOriginPolicy(field, isEnabled, info) {
        if (!info) {
            field.textContent = '';
            return;
        }
        const enabled = isEnabled(info.value);
        field.textContent = enabled ? info.value : info.reportOnlyValue;
        if (!enabled && isEnabled(info.reportOnlyValue)) {
            const reportOnly = document.createElement('span');
            reportOnly.classList.add('inline-comment');
            reportOnly.textContent = 'report-only';
            field.appendChild(reportOnly);
        }
        const endpoint = enabled ? info.reportingEndpoint : info.reportOnlyReportingEndpoint;
        if (endpoint) {
            const reportingEndpointPrefix = field.createChild('span', 'inline-name');
            reportingEndpointPrefix.textContent = i18nString(UIStrings.reportingTo);
            const reportingEndpointName = field.createChild('span');
            reportingEndpointName.textContent = endpoint;
        }
    }
    async doUpdate() {
        await this.updateCoopCoepStatus();
    }
    wasShown() {
        super.wasShown();
        this.reportView.registerCSSFiles([_openedWindowDetailsView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]]);
        this.registerCSSFiles([_openedWindowDetailsView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]]);
    }
}
//# sourceMappingURL=OpenedWindowDetailsView.js.map

/***/ }),

/***/ "./panels/application/openedWindowDetailsView.css.js":
/*!***********************************************************!*\
  !*** ./panels/application/openedWindowDetailsView.css.js ***!
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
 * Copyright 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.report-content-box {
  overflow: initial;
}

.report-field-name {
  flex: 0 0 200px;
}

.report-field-value {
  user-select: text;
  display: flex;
}

.report-field .inline-name {
  color: var(--sys-color-state-disabled);
  padding-left: 2ex;
  user-select: none;
  white-space: pre-line;
}

.report-field .inline-name::after {
  content: ":\\A0";
}

.report-field .inline-comment {
  color: var(--sys-color-token-subtle);
  padding-left: 1ex;
  white-space: pre-line;
}

.report-field .inline-comment::before {
  content: "(";
}

.report-field .inline-comment::after {
  content: ")";
}

.report-field .inline-span {
  color: var(--sys-color-token-subtle);
  padding-left: 1ex;
  white-space: pre-line;
}

.report-field-value-link {
  display: inline-block;
}

.icon-link.devtools-link {
  background-color: var(--sys-color-primary);
  vertical-align: sub;
}

.frame-details-container {
  overflow: auto;
}

.frame-details-report-container {
  min-width: 550px;
}

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
}

/*# sourceURL=openedWindowDetailsView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);