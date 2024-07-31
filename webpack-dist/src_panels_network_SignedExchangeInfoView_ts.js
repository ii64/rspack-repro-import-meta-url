"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_network_SignedExchangeInfoView_ts"],{

/***/ "./src/panels/network/SignedExchangeInfoView.ts":
/*!******************************************************!*\
  !*** ./src/panels/network/SignedExchangeInfoView.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Category: () => (/* binding */ Category),
/* harmony export */   SignedExchangeInfoView: () => (/* binding */ SignedExchangeInfoView)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './signedExchangeInfoTree.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './signedExchangeInfoView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     *@description Text for errors
     */
    errors: 'Errors',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */
    signedHttpExchange: 'Signed HTTP exchange',
    /**
     *@description Text for an option to learn more about something
     */
    learnmore: 'Learn more',
    /**
     *@description Text in Request Headers View of the Network panel
     */
    requestUrl: 'Request URL',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */
    responseCode: 'Response code',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */
    headerIntegrityHash: 'Header integrity hash',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */
    responseHeaders: 'Response headers',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */
    signature: 'Signature',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */
    label: 'Label',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */
    certificateUrl: 'Certificate URL',
    /**
     *@description Text to view a security certificate
     */
    viewCertificate: 'View certificate',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */
    integrity: 'Integrity',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */
    certificateSha: 'Certificate SHA256',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */
    validityUrl: 'Validity URL',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */
    date: 'Date',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */
    expires: 'Expires',
    /**
     *@description Text for a security certificate
     */
    certificate: 'Certificate',
    /**
     *@description Text that refers to the subject of a security certificate
     */
    subject: 'Subject',
    /**
     *@description Text to show since when an item is valid
     */
    validFrom: 'Valid from',
    /**
     *@description Text to indicate the expiry date
     */
    validUntil: 'Valid until',
    /**
     *@description Text for the issuer of an item
     */
    issuer: 'Issuer',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/network/SignedExchangeInfoView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class SignedExchangeInfoView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox {
    constructor(request) {
        super();
        Object.defineProperty(this, "responseHeadersItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        console.assert(request.signedExchangeInfo() !== null);
        const signedExchangeInfo = request.signedExchangeInfo();
        this.element.classList.add('signed-exchange-info-view');
        const root = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.TreeOutline.TreeOutlineInShadow();
        root.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './signedExchangeInfoTree.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        root.element.classList.add('signed-exchange-info-tree');
        root.setFocusable(false);
        root.makeDense();
        root.expandTreeElementsWhenArrowing = true;
        this.element.appendChild(root.element);
        const errorFieldSetMap = new Map();
        if (signedExchangeInfo.errors && signedExchangeInfo.errors.length) {
            const errorMessagesCategory = new Category(root, i18nString(UIStrings.errors));
            for (const error of signedExchangeInfo.errors) {
                const fragment = document.createDocumentFragment();
                const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon();
                icon.data = { iconName: 'cross-circle-filled', color: 'var(--icon-error)', width: '14px', height: '14px' };
                icon.classList.add('prompt-icon');
                fragment.appendChild(icon);
                fragment.createChild('div', 'error-log').textContent = error.message;
                errorMessagesCategory.createLeaf(fragment);
                if (error.errorField) {
                    let errorFieldSet = errorFieldSetMap.get(error.signatureIndex);
                    if (!errorFieldSet) {
                        errorFieldSet = new Set();
                        errorFieldSetMap.set(error.signatureIndex, errorFieldSet);
                    }
                    errorFieldSet.add(error.errorField);
                }
            }
        }
        const titleElement = document.createDocumentFragment();
        titleElement.createChild('div', 'header-name').textContent = i18nString(UIStrings.signedHttpExchange);
        const learnMoreNode = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.XLink.XLink.create('https://github.com/WICG/webpackage', i18nString(UIStrings.learnmore), 'header-toggle', undefined, 'learn-more');
        titleElement.appendChild(learnMoreNode);
        const headerCategory = new Category(root, titleElement);
        if (signedExchangeInfo.header) {
            const header = signedExchangeInfo.header;
            const redirectDestination = request.redirectDestination();
            const requestURLElement = this.formatHeader(i18nString(UIStrings.requestUrl), header.requestUrl);
            if (redirectDestination) {
                const viewRequestLink = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.Linkifier.Linkifier.linkifyRevealable(redirectDestination, 'View request', undefined, undefined, undefined, 'redirect-destination-request');
                viewRequestLink.classList.add('header-toggle');
                requestURLElement.appendChild(viewRequestLink);
            }
            headerCategory.createLeaf(requestURLElement);
            headerCategory.createLeaf(this.formatHeader(i18nString(UIStrings.responseCode), String(header.responseCode)));
            headerCategory.createLeaf(this.formatHeader(i18nString(UIStrings.headerIntegrityHash), header.headerIntegrity));
            this.responseHeadersItem =
                headerCategory.createLeaf(this.formatHeader(i18nString(UIStrings.responseHeaders), ''));
            const responseHeaders = header.responseHeaders;
            for (const name in responseHeaders) {
                const headerTreeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.TreeOutline.TreeElement(this.formatHeader(name, responseHeaders[name]));
                headerTreeElement.selectable = false;
                this.responseHeadersItem.appendChild(headerTreeElement);
            }
            this.responseHeadersItem.expand();
            for (let i = 0; i < header.signatures.length; ++i) {
                const errorFieldSet = errorFieldSetMap.get(i) || new Set();
                const signature = header.signatures[i];
                const signatureCategory = new Category(root, i18nString(UIStrings.signature));
                signatureCategory.createLeaf(this.formatHeader(i18nString(UIStrings.label), signature.label));
                signatureCategory.createLeaf(this.formatHeaderForHexData(i18nString(UIStrings.signature), signature.signature, errorFieldSet.has(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.Network.SignedExchangeErrorField.SignatureSig)));
                if (signature.certUrl) {
                    const certURLElement = this.formatHeader(i18nString(UIStrings.certificateUrl), signature.certUrl, errorFieldSet.has(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.Network.SignedExchangeErrorField.SignatureCertUrl));
                    if (signature.certificates) {
                        const viewCertLink = certURLElement.createChild('span', 'devtools-link header-toggle');
                        viewCertLink.textContent = i18nString(UIStrings.viewCertificate);
                        viewCertLink.addEventListener('click', _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.showCertificateViewer.bind(null, signature.certificates), false);
                    }
                    signatureCategory.createLeaf(certURLElement);
                }
                signatureCategory.createLeaf(this.formatHeader(i18nString(UIStrings.integrity), signature.integrity, errorFieldSet.has(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.Network.SignedExchangeErrorField.SignatureIntegrity)));
                if (signature.certSha256) {
                    signatureCategory.createLeaf(this.formatHeaderForHexData(i18nString(UIStrings.certificateSha), signature.certSha256, errorFieldSet.has(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.Network.SignedExchangeErrorField.SignatureCertSha256)));
                }
                signatureCategory.createLeaf(this.formatHeader(i18nString(UIStrings.validityUrl), signature.validityUrl, errorFieldSet.has(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.Network.SignedExchangeErrorField.SignatureValidityUrl)));
                signatureCategory.createLeaf().title = this.formatHeader(i18nString(UIStrings.date), new Date(1000 * signature.date).toUTCString(), errorFieldSet.has(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.Network.SignedExchangeErrorField.SignatureTimestamps));
                signatureCategory.createLeaf().title = this.formatHeader(i18nString(UIStrings.expires), new Date(1000 * signature.expires).toUTCString(), errorFieldSet.has(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.Network.SignedExchangeErrorField.SignatureTimestamps));
            }
        }
        if (signedExchangeInfo.securityDetails) {
            const securityDetails = signedExchangeInfo.securityDetails;
            const securityCategory = new Category(root, i18nString(UIStrings.certificate));
            securityCategory.createLeaf(this.formatHeader(i18nString(UIStrings.subject), securityDetails.subjectName));
            securityCategory.createLeaf(this.formatHeader(i18nString(UIStrings.validFrom), new Date(1000 * securityDetails.validFrom).toUTCString()));
            securityCategory.createLeaf(this.formatHeader(i18nString(UIStrings.validUntil), new Date(1000 * securityDetails.validTo).toUTCString()));
            securityCategory.createLeaf(this.formatHeader(i18nString(UIStrings.issuer), securityDetails.issuer));
        }
    }
    formatHeader(name, value, highlighted) {
        const fragment = document.createDocumentFragment();
        const nameElement = fragment.createChild('div', 'header-name');
        nameElement.textContent = name + ': ';
        fragment.createChild('span', 'header-separator');
        const valueElement = fragment.createChild('div', 'header-value source-code');
        valueElement.textContent = value;
        if (highlighted) {
            nameElement.classList.add('error-field');
            valueElement.classList.add('error-field');
        }
        return fragment;
    }
    formatHeaderForHexData(name, value, highlighted) {
        const fragment = document.createDocumentFragment();
        const nameElement = fragment.createChild('div', 'header-name');
        nameElement.textContent = name + ': ';
        fragment.createChild('span', 'header-separator');
        const valueElement = fragment.createChild('div', 'header-value source-code hex-data');
        valueElement.textContent = value.replace(/(.{2})/g, '$1 ');
        if (highlighted) {
            nameElement.classList.add('error-field');
            valueElement.classList.add('error-field');
        }
        return fragment;
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './signedExchangeInfoView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
class Category extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.TreeOutline.TreeElement {
    constructor(root, title) {
        super(title, true);
        Object.defineProperty(this, "toggleOnClick", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "expanded", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.selectable = false;
        this.toggleOnClick = true;
        this.expanded = true;
        root.appendChild(this);
    }
    createLeaf(title) {
        const leaf = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.TreeOutline.TreeElement(title);
        leaf.selectable = false;
        this.appendChild(leaf);
        return leaf;
    }
}


/***/ })

}]);