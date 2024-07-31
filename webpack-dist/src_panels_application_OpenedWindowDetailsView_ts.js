"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_OpenedWindowDetailsView_ts"],{

/***/ "./src/panels/application/OpenedWindowDetailsView.ts":
/*!***********************************************************!*\
  !*** ./src/panels/application/OpenedWindowDetailsView.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenedWindowDetailsView: () => (/* binding */ OpenedWindowDetailsView),
/* harmony export */   WorkerDetailsView: () => (/* binding */ WorkerDetailsView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './openedWindowDetailsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2020 The Chromium Authors. All rights reserved.
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
var _OpenedWindowDetailsView_urlFieldValue;







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
    const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.create(iconType, 'icon-link devtools-link');
    const button = document.createElement('button');
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(button, title);
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
class OpenedWindowDetailsView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ThrottledWidget.ThrottledWidget {
    constructor(targetInfo, isWindowClosed) {
        super();
        Object.defineProperty(this, "targetInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isWindowClosed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "reportView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "documentSection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _OpenedWindowDetailsView_urlFieldValue.set(this, void 0);
        Object.defineProperty(this, "securitySection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "openerElementField", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hasDOMAccessValue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.targetInfo = targetInfo;
        this.isWindowClosed = isWindowClosed;
        this.contentElement.classList.add('frame-details-container');
        // TODO(crbug.com/1156978): Replace UI.ReportView.ReportView with ReportView.ts web component.
        this.reportView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportView(this.buildTitle());
        this.reportView.show(this.contentElement);
        this.reportView.element.classList.add('frame-details-report-container');
        this.documentSection = this.reportView.appendSection(i18nString(UIStrings.document));
        __classPrivateFieldSet(this, _OpenedWindowDetailsView_urlFieldValue, this.documentSection.appendField(i18nString(UIStrings.url)).createChild('div', 'text-ellipsis'), "f");
        this.securitySection = this.reportView.appendSection(i18nString(UIStrings.security));
        this.openerElementField = this.securitySection.appendField(i18nString(UIStrings.openerFrame));
        this.securitySection.setFieldVisible(i18nString(UIStrings.openerFrame), false);
        this.hasDOMAccessValue = this.securitySection.appendField(i18nString(UIStrings.accessToOpener));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(this.hasDOMAccessValue, i18nString(UIStrings.showsWhetherTheOpenedWindowIs));
        this.update();
    }
    async doUpdate() {
        this.reportView.setTitle(this.buildTitle());
        __classPrivateFieldGet(this, _OpenedWindowDetailsView_urlFieldValue, "f").textContent = this.targetInfo.url;
        __classPrivateFieldGet(this, _OpenedWindowDetailsView_urlFieldValue, "f").title = this.targetInfo.url;
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
        this.reportView.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './openedWindowDetailsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './openedWindowDetailsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
_OpenedWindowDetailsView_urlFieldValue = new WeakMap();
class WorkerDetailsView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ThrottledWidget.ThrottledWidget {
    constructor(targetInfo) {
        super();
        Object.defineProperty(this, "targetInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "reportView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "documentSection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isolationSection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "coepPolicy", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.targetInfo = targetInfo;
        this.contentElement.classList.add('frame-details-container');
        // TODO(crbug.com/1156978): Replace UI.ReportView.ReportView with ReportView.ts web component.
        this.reportView =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportView(this.targetInfo.title || this.targetInfo.url || i18nString(UIStrings.worker));
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
        const coepIsEnabled = (value) => value !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CrossOriginEmbedderPolicyValue.None;
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
        this.reportView.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './openedWindowDetailsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './openedWindowDetailsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}


/***/ })

}]);