"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_security_SecurityModel_js"],{

/***/ "./panels/security/SecurityModel.js":
/*!******************************************!*\
  !*** ./panels/security/SecurityModel.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CertificateSecurityState: () => (/* binding */ CertificateSecurityState),
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   PageVisibleSecurityState: () => (/* binding */ PageVisibleSecurityState),
/* harmony export */   SecurityModel: () => (/* binding */ SecurityModel),
/* harmony export */   SecurityStyleExplanation: () => (/* binding */ SecurityStyleExplanation),
/* harmony export */   SummaryMessages: () => (/* binding */ SummaryMessages),
/* harmony export */   securityStateCompare: () => (/* binding */ securityStateCompare)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const UIStrings = {
    /**
     *@description Text in Security Panel of the Security panel
     */
    theSecurityOfThisPageIsUnknown: 'The security of this page is unknown.',
    /**
     *@description Text in Security Panel of the Security panel
     */
    thisPageIsNotSecure: 'This page is not secure.',
    /**
     *@description Text in Security Panel of the Security panel
     */
    thisPageIsSecureValidHttps: 'This page is secure (valid HTTPS).',
    /**
     *@description Text in Security Panel of the Security panel
     */
    thisPageIsNotSecureBrokenHttps: 'This page is not secure (broken HTTPS).',
    /**
     *@description Description of an SSL cipher that contains a separate (bulk) cipher and MAC.
     *@example {AES_256_CBC} PH1
     *@example {HMAC-SHA1} PH2
     */
    cipherWithMAC: '{PH1} with {PH2}',
    /**
     *@description Description of an SSL Key and its Key Exchange Group.
     *@example {ECDHE_RSA} PH1
     *@example {X25519} PH2
     */
    keyExchangeWithGroup: '{PH1} with {PH2}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/security/SecurityModel.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
class SecurityModel extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel {
    dispatcher;
    securityAgent;
    constructor(target) {
        super(target);
        this.dispatcher = new SecurityDispatcher(this);
        this.securityAgent = target.securityAgent();
        target.registerSecurityDispatcher(this.dispatcher);
        void this.securityAgent.invoke_enable();
    }
    resourceTreeModel() {
        return this.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
    }
    networkManager() {
        return this.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.NetworkManager);
    }
}
function securityStateCompare(a, b) {
    const SECURITY_STATE_ORDER = [
        "info" /* Protocol.Security.SecurityState.Info */,
        "insecure-broken" /* Protocol.Security.SecurityState.InsecureBroken */,
        "insecure" /* Protocol.Security.SecurityState.Insecure */,
        "neutral" /* Protocol.Security.SecurityState.Neutral */,
        "secure" /* Protocol.Security.SecurityState.Secure */,
        "unknown" /* Protocol.Security.SecurityState.Unknown */,
    ];
    return SECURITY_STATE_ORDER.indexOf(a) - SECURITY_STATE_ORDER.indexOf(b);
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel.register(SecurityModel, { capabilities: 512 /* SDK.Target.Capability.Security */, autostart: false });
var Events;
(function (Events) {
    Events["VisibleSecurityStateChanged"] = "VisibleSecurityStateChanged";
})(Events || (Events = {}));
const SummaryMessages = {
    ["unknown" /* Protocol.Security.SecurityState.Unknown */]: i18nLazyString(UIStrings.theSecurityOfThisPageIsUnknown),
    ["insecure" /* Protocol.Security.SecurityState.Insecure */]: i18nLazyString(UIStrings.thisPageIsNotSecure),
    ["neutral" /* Protocol.Security.SecurityState.Neutral */]: i18nLazyString(UIStrings.thisPageIsNotSecure),
    ["secure" /* Protocol.Security.SecurityState.Secure */]: i18nLazyString(UIStrings.thisPageIsSecureValidHttps),
    ["insecure-broken" /* Protocol.Security.SecurityState.InsecureBroken */]: i18nLazyString(UIStrings.thisPageIsNotSecureBrokenHttps),
};
class PageVisibleSecurityState {
    securityState;
    certificateSecurityState;
    safetyTipInfo;
    securityStateIssueIds;
    constructor(securityState, certificateSecurityState, safetyTipInfo, securityStateIssueIds) {
        this.securityState = securityState;
        this.certificateSecurityState =
            certificateSecurityState ? new CertificateSecurityState(certificateSecurityState) : null;
        this.safetyTipInfo = safetyTipInfo ? new SafetyTipInfo(safetyTipInfo) : null;
        this.securityStateIssueIds = securityStateIssueIds;
    }
}
class CertificateSecurityState {
    protocol;
    keyExchange;
    keyExchangeGroup;
    cipher;
    mac;
    certificate;
    subjectName;
    issuer;
    validFrom;
    validTo;
    certificateNetworkError;
    certificateHasWeakSignature;
    certificateHasSha1Signature;
    modernSSL;
    obsoleteSslProtocol;
    obsoleteSslKeyExchange;
    obsoleteSslCipher;
    obsoleteSslSignature;
    constructor(certificateSecurityState) {
        this.protocol = certificateSecurityState.protocol;
        this.keyExchange = certificateSecurityState.keyExchange;
        this.keyExchangeGroup = certificateSecurityState.keyExchangeGroup || null;
        this.cipher = certificateSecurityState.cipher;
        this.mac = certificateSecurityState.mac || null;
        this.certificate = certificateSecurityState.certificate;
        this.subjectName = certificateSecurityState.subjectName;
        this.issuer = certificateSecurityState.issuer;
        this.validFrom = certificateSecurityState.validFrom;
        this.validTo = certificateSecurityState.validTo;
        this.certificateNetworkError = certificateSecurityState.certificateNetworkError || null;
        this.certificateHasWeakSignature = certificateSecurityState.certificateHasWeakSignature;
        this.certificateHasSha1Signature = certificateSecurityState.certificateHasSha1Signature;
        this.modernSSL = certificateSecurityState.modernSSL;
        this.obsoleteSslProtocol = certificateSecurityState.obsoleteSslProtocol;
        this.obsoleteSslKeyExchange = certificateSecurityState.obsoleteSslKeyExchange;
        this.obsoleteSslCipher = certificateSecurityState.obsoleteSslCipher;
        this.obsoleteSslSignature = certificateSecurityState.obsoleteSslSignature;
    }
    isCertificateExpiringSoon() {
        const expiryDate = new Date(this.validTo * 1000).getTime();
        return (expiryDate < new Date(Date.now()).setHours(48)) && (expiryDate > Date.now());
    }
    getKeyExchangeName() {
        if (this.keyExchangeGroup) {
            return this.keyExchange ?
                i18nString(UIStrings.keyExchangeWithGroup, { PH1: this.keyExchange, PH2: this.keyExchangeGroup }) :
                this.keyExchangeGroup;
        }
        return this.keyExchange;
    }
    getCipherFullName() {
        return this.mac ? i18nString(UIStrings.cipherWithMAC, { PH1: this.cipher, PH2: this.mac }) : this.cipher;
    }
}
class SafetyTipInfo {
    safetyTipStatus;
    safeUrl;
    constructor(safetyTipInfo) {
        this.safetyTipStatus = safetyTipInfo.safetyTipStatus;
        this.safeUrl = safetyTipInfo.safeUrl || null;
    }
}
class SecurityStyleExplanation {
    securityState;
    title;
    summary;
    description;
    certificate;
    mixedContentType;
    recommendations;
    constructor(securityState, title, summary, description, certificate = [], mixedContentType = "none" /* Protocol.Security.MixedContentType.None */, recommendations = []) {
        this.securityState = securityState;
        this.title = title;
        this.summary = summary;
        this.description = description;
        this.certificate = certificate;
        this.mixedContentType = mixedContentType;
        this.recommendations = recommendations;
    }
}
class SecurityDispatcher {
    model;
    constructor(model) {
        this.model = model;
    }
    securityStateChanged(_event) {
    }
    visibleSecurityStateChanged({ visibleSecurityState }) {
        const pageVisibleSecurityState = new PageVisibleSecurityState(visibleSecurityState.securityState, visibleSecurityState.certificateSecurityState || null, visibleSecurityState.safetyTipInfo || null, visibleSecurityState.securityStateIssueIds);
        this.model.dispatchEventToListeners(Events.VisibleSecurityStateChanged, pageVisibleSecurityState);
    }
    certificateError(_event) {
    }
}
//# sourceMappingURL=SecurityModel.js.map

/***/ })

}]);