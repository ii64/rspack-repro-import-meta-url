"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_security_SecurityPanel_ts"],{

/***/ "./src/panels/security/SecurityPanel.ts":
/*!**********************************************!*\
  !*** ./src/panels/security/SecurityPanel.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OriginGroup: () => (/* binding */ OriginGroup),
/* harmony export */   SecurityDetailsTable: () => (/* binding */ SecurityDetailsTable),
/* harmony export */   SecurityMainView: () => (/* binding */ SecurityMainView),
/* harmony export */   SecurityOriginView: () => (/* binding */ SecurityOriginView),
/* harmony export */   SecurityPanel: () => (/* binding */ SecurityPanel),
/* harmony export */   SecurityPanelSidebarTree: () => (/* binding */ SecurityPanelSidebarTree)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./src/panels/network/forward/forward.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './lockIcon.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './mainView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './originView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SecurityModel.js */ "./src/panels/security/SecurityModel.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './sidebar.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2015 The Chromium Authors. All rights reserved.
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
var _SecurityPanelSidebarTreeElement_getIconForSecurityState;














const UIStrings = {
    /**
     *@description Title text content in Security Panel of the Security panel
     */
    overview: 'Overview',
    /**
     *@description Text in Security Panel of the Security panel
     */
    mainOrigin: 'Main origin',
    /**
     *@description Text in Security Panel of the Security panel
     */
    nonsecureOrigins: 'Non-secure origins',
    /**
     *@description Text in Security Panel of the Security panel
     */
    secureOrigins: 'Secure origins',
    /**
     *@description Text in Security Panel of the Security panel
     */
    unknownCanceled: 'Unknown / canceled',
    /**
     *@description Text in Security Panel of the Security panel
     */
    reloadToViewDetails: 'Reload to view details',
    /**
     *@description New parent title in Security Panel of the Security panel
     */
    mainOriginSecure: 'Main origin (secure)',
    /**
     *@description New parent title in Security Panel of the Security panel
     */
    mainOriginNonsecure: 'Main origin (non-secure)',
    /**
     *@description Summary div text content in Security Panel of the Security panel
     */
    securityOverview: 'Security overview',
    /**
     *@description Text to show something is secure
     */
    secure: 'Secure',
    /**
     *@description Sdk console message message level info of level Labels in Console View of the Console panel
     */
    info: 'Info',
    /**
     *@description Not secure div text content in Security Panel of the Security panel
     */
    notSecure: 'Not secure',
    /**
     *@description Text to view a security certificate
     */
    viewCertificate: 'View certificate',
    /**
     *@description Text in Security Panel of the Security panel
     */
    notSecureBroken: 'Not secure (broken)',
    /**
     *@description Main summary for page when it has been deemed unsafe by the SafeBrowsing service.
     */
    thisPageIsDangerousFlaggedBy: 'This page is dangerous (flagged by Google Safe Browsing).',
    /**
     *@description Summary phrase for a security problem where the site is deemed unsafe by the SafeBrowsing service.
     */
    flaggedByGoogleSafeBrowsing: 'Flagged by Google Safe Browsing',
    /**
     *@description Description of a security problem where the site is deemed unsafe by the SafeBrowsing service.
     */
    toCheckThisPagesStatusVisit: 'To check this page\'s status, visit g.co/safebrowsingstatus.',
    /**
     *@description Main summary for a non cert error page.
     */
    thisIsAnErrorPage: 'This is an error page.',
    /**
     *@description Main summary for where the site is non-secure HTTP.
     */
    thisPageIsInsecureUnencrypted: 'This page is insecure (unencrypted HTTP).',
    /**
     *@description Main summary for where the site has a non-cryptographic secure origin.
     */
    thisPageHasANonhttpsSecureOrigin: 'This page has a non-HTTPS secure origin.',
    /**
     *@description Message to display in devtools security tab when the page you are on triggered a safety tip.
     */
    thisPageIsSuspicious: 'This page is suspicious',
    /**
     *@description Body of message to display in devtools security tab when you are viewing a page that triggered a safety tip.
     */
    chromeHasDeterminedThatThisSiteS: 'Chrome has determined that this site could be fake or fraudulent.',
    /**
     *@description Second part of the body of message to display in devtools security tab when you are viewing a page that triggered a safety tip.
     */
    ifYouBelieveThisIsShownIn: 'If you believe this is shown in error please visit https://g.co/chrome/lookalike-warnings.',
    /**
     *@description Summary of a warning when the user visits a page that triggered a Safety Tip because the domain looked like another domain.
     */
    possibleSpoofingUrl: 'Possible spoofing URL',
    /**
     *@description Body of a warning when the user visits a page that triggered a Safety Tip because the domain looked like another domain.
     *@example {wikipedia.org} PH1
     */
    thisSitesHostnameLooksSimilarToP: 'This site\'s hostname looks similar to {PH1}. Attackers sometimes mimic sites by making small, hard-to-see changes to the domain name.',
    /**
     *@description second part of body of a warning when the user visits a page that triggered a Safety Tip because the domain looked like another domain.
     */
    ifYouBelieveThisIsShownInErrorSafety: 'If you believe this is shown in error please visit https://g.co/chrome/lookalike-warnings.',
    /**
     *@description Title of the devtools security tab when the page you are on triggered a safety tip.
     */
    thisPageIsSuspiciousFlaggedBy: 'This page is suspicious (flagged by Chrome).',
    /**
     *@description Text for a security certificate
     */
    certificate: 'Certificate',
    /**
     *@description Summary phrase for a security problem where the site's certificate chain contains a SHA1 signature.
     */
    insecureSha: 'insecure (SHA-1)',
    /**
     *@description Description of a security problem where the site's certificate chain contains a SHA1 signature.
     */
    theCertificateChainForThisSite: 'The certificate chain for this site contains a certificate signed using SHA-1.',
    /**
     *@description Summary phrase for a security problem where the site's certificate is missing a subjectAltName extension.
     */
    subjectAlternativeNameMissing: '`Subject Alternative Name` missing',
    /**
     *@description Description of a security problem where the site's certificate is missing a subjectAltName extension.
     */
    theCertificateForThisSiteDoesNot: 'The certificate for this site does not contain a `Subject Alternative Name` extension containing a domain name or IP address.',
    /**
     *@description Summary phrase for a security problem with the site's certificate.
     */
    missing: 'missing',
    /**
     *@description Description of a security problem with the site's certificate.
     *@example {net::ERR_CERT_AUTHORITY_INVALID} PH1
     */
    thisSiteIsMissingAValidTrusted: 'This site is missing a valid, trusted certificate ({PH1}).',
    /**
     *@description Summary phrase for a site that has a valid server certificate.
     */
    validAndTrusted: 'valid and trusted',
    /**
     *@description Description of a site that has a valid server certificate.
     *@example {Let's Encrypt Authority X3} PH1
     */
    theConnectionToThisSiteIsUsingA: 'The connection to this site is using a valid, trusted server certificate issued by {PH1}.',
    /**
     *@description Summary phrase for a security state where Private Key Pinning is ignored because the certificate chains to a locally-trusted root.
     */
    publickeypinningBypassed: 'Public-Key-Pinning bypassed',
    /**
     *@description Description of a security state where Private Key Pinning is ignored because the certificate chains to a locally-trusted root.
     */
    publickeypinningWasBypassedByA: 'Public-Key-Pinning was bypassed by a local root certificate.',
    /**
     *@description Summary phrase for a site with a certificate that is expiring soon.
     */
    certificateExpiresSoon: 'Certificate expires soon',
    /**
     *@description Description for a site with a certificate that is expiring soon.
     */
    theCertificateForThisSiteExpires: 'The certificate for this site expires in less than 48 hours and needs to be renewed.',
    /**
     *@description Text that refers to the network connection
     */
    connection: 'Connection',
    /**
     *@description Summary phrase for a site that uses a modern, secure TLS protocol and cipher.
     */
    secureConnectionSettings: 'secure connection settings',
    /**
     *@description Description of a site's TLS settings.
     *@example {TLS 1.2} PH1
     *@example {ECDHE_RSA} PH2
     *@example {AES_128_GCM} PH3
     */
    theConnectionToThisSiteIs: 'The connection to this site is encrypted and authenticated using {PH1}, {PH2}, and {PH3}.',
    /**
     *@description A recommendation to the site owner to use a modern TLS protocol
     *@example {TLS 1.0} PH1
     */
    sIsObsoleteEnableTlsOrLater: '{PH1} is obsolete. Enable TLS 1.2 or later.',
    /**
     *@description A recommendation to the site owner to use a modern TLS key exchange
     */
    rsaKeyExchangeIsObsoleteEnableAn: 'RSA key exchange is obsolete. Enable an ECDHE-based cipher suite.',
    /**
     *@description A recommendation to the site owner to use a modern TLS cipher
     *@example {3DES_EDE_CBC} PH1
     */
    sIsObsoleteEnableAnAesgcmbased: '{PH1} is obsolete. Enable an AES-GCM-based cipher suite.',
    /**
     *@description A recommendation to the site owner to use a modern TLS server signature
     */
    theServerSignatureUsesShaWhichIs: 'The server signature uses SHA-1, which is obsolete. Enable a SHA-2 signature algorithm instead. (Note this is different from the signature in the certificate.)',
    /**
     *@description Summary phrase for a site that uses an outdated SSL settings (protocol, key exchange, or cipher).
     */
    obsoleteConnectionSettings: 'obsolete connection settings',
    /**
     *@description A title of the 'Resources' action category
     */
    resources: 'Resources',
    /**
     *@description Summary for page when there is active mixed content
     */
    activeMixedContent: 'active mixed content',
    /**
     *@description Description for page when there is active mixed content
     */
    youHaveRecentlyAllowedNonsecure: 'You have recently allowed non-secure content (such as scripts or iframes) to run on this site.',
    /**
     *@description Summary for page when there is mixed content
     */
    mixedContent: 'mixed content',
    /**
     *@description Description for page when there is mixed content
     */
    thisPageIncludesHttpResources: 'This page includes HTTP resources.',
    /**
     *@description Summary for page when there is a non-secure form
     */
    nonsecureForm: 'non-secure form',
    /**
     *@description Description for page when there is a non-secure form
     */
    thisPageIncludesAFormWithA: 'This page includes a form with a non-secure "action" attribute.',
    /**
     *@description Summary for the page when it contains active content with certificate error
     */
    activeContentWithCertificate: 'active content with certificate errors',
    /**
     *@description Description for the page when it contains active content with certificate error
     */
    youHaveRecentlyAllowedContent: 'You have recently allowed content loaded with certificate errors (such as scripts or iframes) to run on this site.',
    /**
     *@description Summary for page when there is active content with certificate errors
     */
    contentWithCertificateErrors: 'content with certificate errors',
    /**
     *@description Description for page when there is content with certificate errors
     */
    thisPageIncludesResourcesThat: 'This page includes resources that were loaded with certificate errors.',
    /**
     *@description Summary for page when all resources are served securely
     */
    allServedSecurely: 'all served securely',
    /**
     *@description Description for page when all resources are served securely
     */
    allResourcesOnThisPageAreServed: 'All resources on this page are served securely.',
    /**
     *@description Text in Security Panel of the Security panel
     */
    blockedMixedContent: 'Blocked mixed content',
    /**
     *@description Text in Security Panel of the Security panel
     */
    yourPageRequestedNonsecure: 'Your page requested non-secure resources that were blocked.',
    /**
     *@description Refresh prompt text content in Security Panel of the Security panel
     */
    reloadThePageToRecordRequestsFor: 'Reload the page to record requests for HTTP resources.',
    /**
     * @description Link text in the Security Panel. Clicking the link navigates the user to the
     * Network panel. Requests refers to network requests. Each request is a piece of data transmitted
     * from the current user's browser to a remote server.
     */
    viewDRequestsInNetworkPanel: '{n, plural, =1 {View # request in Network Panel} other {View # requests in Network Panel}}',
    /**
     *@description Text for the origin of something
     */
    origin: 'Origin',
    /**
     *@description Text in Security Panel of the Security panel
     */
    viewRequestsInNetworkPanel: 'View requests in Network Panel',
    /**
     *@description Text for security or network protocol
     */
    protocol: 'Protocol',
    /**
     *@description Text in the Security panel that refers to how the TLS handshake
     *established encryption keys.
     */
    keyExchange: 'Key exchange',
    /**
     *@description Text in Security Panel that refers to how the TLS handshake
     *encrypted data.
     */
    cipher: 'Cipher',
    /**
     *@description Text in Security Panel that refers to the signature algorithm
     *used by the server for authenticate in the TLS handshake.
     */
    serverSignature: 'Server signature',
    /**
     *@description Text in Security Panel that refers to whether the ClientHello
     *message in the TLS handshake was encrypted.
     */
    encryptedClientHello: 'Encrypted ClientHello',
    /**
     *@description Sct div text content in Security Panel of the Security panel
     */
    certificateTransparency: 'Certificate Transparency',
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
    /**
     *@description Text in Security Panel of the Security panel
     */
    openFullCertificateDetails: 'Open full certificate details',
    /**
     *@description Text in Security Panel of the Security panel
     */
    sct: 'SCT',
    /**
     *@description Text in Security Panel of the Security panel
     */
    logName: 'Log name',
    /**
     *@description Text in Security Panel of the Security panel
     */
    logId: 'Log ID',
    /**
     *@description Text in Security Panel of the Security panel
     */
    validationStatus: 'Validation status',
    /**
     *@description Text for the source of something
     */
    source: 'Source',
    /**
     * @description Label for a date/time string in the Security panel. It indicates the time at which
     * a security certificate was issued (created by an authority and distributed).
     */
    issuedAt: 'Issued at',
    /**
     *@description Text in Security Panel of the Security panel
     */
    hashAlgorithm: 'Hash algorithm',
    /**
     *@description Text in Security Panel of the Security panel
     */
    signatureAlgorithm: 'Signature algorithm',
    /**
     *@description Text in Security Panel of the Security panel
     */
    signatureData: 'Signature data',
    /**
     *@description Toggle scts details link text content in Security Panel of the Security panel
     */
    showFullDetails: 'Show full details',
    /**
     *@description Toggle scts details link text content in Security Panel of the Security panel
     */
    hideFullDetails: 'Hide full details',
    /**
     *@description Text in Security Panel of the Security panel
     */
    thisRequestCompliesWithChromes: 'This request complies with `Chrome`\'s Certificate Transparency policy.',
    /**
     *@description Text in Security Panel of the Security panel
     */
    thisRequestDoesNotComplyWith: 'This request does not comply with `Chrome`\'s Certificate Transparency policy.',
    /**
     *@description Text in Security Panel of the Security panel
     */
    thisResponseWasLoadedFromCache: 'This response was loaded from cache. Some security details might be missing.',
    /**
     *@description Text in Security Panel of the Security panel
     */
    theSecurityDetailsAboveAreFrom: 'The security details above are from the first inspected response.',
    /**
     *@description Main summary for where the site has a non-cryptographic secure origin.
     */
    thisOriginIsANonhttpsSecure: 'This origin is a non-HTTPS secure origin.',
    /**
     *@description Text in Security Panel of the Security panel
     */
    yourConnectionToThisOriginIsNot: 'Your connection to this origin is not secure.',
    /**
     *@description No info div text content in Security Panel of the Security panel
     */
    noSecurityInformation: 'No security information',
    /**
     *@description Text in Security Panel of the Security panel
     */
    noSecurityDetailsAreAvailableFor: 'No security details are available for this origin.',
    /**
     *@description San div text content in Security Panel of the Security panel
     */
    na: '(n/a)',
    /**
     *@description Text to show less content
     */
    showLess: 'Show less',
    /**
     *@description Truncated santoggle text content in Security Panel of the Security panel
     *@example {2} PH1
     */
    showMoreSTotal: 'Show more ({PH1} total)',
    /**
     *@description Shown when a field refers to an option that is unknown to the frontend.
     */
    unknownField: 'unknown',
    /**
     *@description Shown when a field refers to a TLS feature which was enabled.
     */
    enabled: 'enabled',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/security/SecurityPanel.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
let securityPanelInstance;
// See https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-signaturescheme
// This contains signature schemes supported by Chrome.
const SignatureSchemeStrings = new Map([
    // The full name for these schemes is RSASSA-PKCS1-v1_5, sometimes
    // "PKCS#1 v1.5", but those are very long, so let "RSA" vs "RSA-PSS"
    // disambiguate.
    [0x0201, 'RSA with SHA-1'],
    [0x0401, 'RSA with SHA-256'],
    [0x0501, 'RSA with SHA-384'],
    [0x0601, 'RSA with SHA-512'],
    // We omit the curve from these names because in TLS 1.2 these code points
    // were not specific to a curve. Saying "P-256" for a server that used a P-384
    // key with SHA-256 in TLS 1.2 would be confusing.
    [0x0403, 'ECDSA with SHA-256'],
    [0x0503, 'ECDSA with SHA-384'],
    [0x0804, 'RSA-PSS with SHA-256'],
    [0x0805, 'RSA-PSS with SHA-384'],
    [0x0806, 'RSA-PSS with SHA-512'],
]);
const LOCK_ICON_NAME = 'lock';
const WARNING_ICON_NAME = 'warning';
const INFO_ICON_NAME = 'info';
function getSecurityStateIconForDetailedView(securityState, className) {
    let iconName;
    switch (securityState) {
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Neutral: // fallthrough
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure: // fallthrough
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.InsecureBroken:
            iconName = WARNING_ICON_NAME;
            break;
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Secure:
            iconName = LOCK_ICON_NAME;
            break;
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Info: // fallthrough
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Unknown:
            iconName = INFO_ICON_NAME;
            break;
    }
    return _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.create(iconName, className);
}
function getSecurityStateIconForOverview(securityState, className) {
    let iconName;
    switch (securityState) {
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Unknown: // fallthrough
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Neutral:
            iconName = INFO_ICON_NAME;
            break;
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure: // fallthrough
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.InsecureBroken:
            iconName = WARNING_ICON_NAME;
            break;
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Secure:
            iconName = LOCK_ICON_NAME;
            break;
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Info:
            throw new Error(`Unexpected security state ${securityState}`);
    }
    return _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.create(iconName, className);
}
class SecurityPanel extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Panel.PanelWithSidebar {
    constructor() {
        super('security');
        Object.defineProperty(this, "mainView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sidebarMainViewElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sidebarTree", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lastResponseReceivedForLoaderId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "origins", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "filterRequestCounts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "visibleView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "eventListeners", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "securityModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.mainView = new SecurityMainView(this);
        const title = document.createElement('span');
        title.classList.add('title');
        title.textContent = i18nString(UIStrings.overview);
        const getIconForSecurityState = (securityState) => getSecurityStateIconForOverview(securityState, `lock-icon lock-icon-${securityState}`);
        this.sidebarMainViewElement = new SecurityPanelSidebarTreeElement({
            title,
            onSelect: this.setVisibleView.bind(this, this.mainView),
            getIconForSecurityState,
            className: 'security-main-view-sidebar-tree-item',
        });
        this.sidebarMainViewElement.tooltip = title.textContent;
        this.sidebarTree = new SecurityPanelSidebarTree(this.sidebarMainViewElement, this.showOrigin.bind(this));
        this.panelSidebarElement().appendChild(this.sidebarTree.element);
        this.lastResponseReceivedForLoaderId = new Map();
        this.origins = new Map();
        this.filterRequestCounts = new Map();
        this.visibleView = null;
        this.eventListeners = [];
        this.securityModel = null;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeModels(_SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.SecurityModel, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.PrimaryPageChanged, this.onPrimaryPageChanged, this);
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!securityPanelInstance || forceNew) {
            securityPanelInstance = new SecurityPanel();
        }
        return securityPanelInstance;
    }
    static createCertificateViewerButtonForOrigin(text, origin) {
        const certificateButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createTextButton(text, async (e) => {
            e.consume();
            const names = await _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.MultitargetNetworkManager.instance().getCertificate(origin);
            if (names.length > 0) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.showCertificateViewer(names);
            }
        }, { className: 'origin-button', jslogContext: 'security.view-certificate-for-origin', title: text });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.markAsButton(certificateButton);
        return certificateButton;
    }
    static createCertificateViewerButtonForCert(text, names) {
        const certificateButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createTextButton(text, e => {
            e.consume();
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.showCertificateViewer(names);
        }, { className: 'origin-button', jslogContext: 'security.view-certificate' });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.markAsButton(certificateButton);
        return certificateButton;
    }
    static createHighlightedUrl(url, securityState) {
        const schemeSeparator = '://';
        const index = url.indexOf(schemeSeparator);
        // If the separator is not found, just display the text without highlighting.
        if (index === -1) {
            const text = document.createElement('span');
            text.textContent = url;
            return text;
        }
        const highlightedUrl = document.createElement('span');
        highlightedUrl.classList.add('highlighted-url');
        const scheme = url.substr(0, index);
        const content = url.substr(index + schemeSeparator.length);
        highlightedUrl.createChild('span', 'url-scheme-' + securityState).textContent = scheme;
        highlightedUrl.createChild('span', 'url-scheme-separator').textContent = schemeSeparator;
        highlightedUrl.createChild('span').textContent = content;
        return highlightedUrl;
    }
    updateVisibleSecurityState(visibleSecurityState) {
        this.sidebarMainViewElement.setSecurityState(visibleSecurityState.securityState);
        this.mainView.updateVisibleSecurityState(visibleSecurityState);
    }
    onVisibleSecurityStateChanged({ data }) {
        this.updateVisibleSecurityState(data);
    }
    selectAndSwitchToMainView() {
        // The sidebar element will trigger displaying the main view. Rather than making a redundant call to display the main view, we rely on this.
        this.sidebarMainViewElement.select(true);
    }
    showOrigin(origin) {
        const originState = this.origins.get(origin);
        if (!originState) {
            return;
        }
        if (!originState.originView) {
            originState.originView = new SecurityOriginView(this, origin, originState);
        }
        this.setVisibleView(originState.originView);
    }
    wasShown() {
        super.wasShown();
        if (!this.visibleView) {
            this.selectAndSwitchToMainView();
        }
    }
    focus() {
        this.sidebarTree.focus();
    }
    setVisibleView(view) {
        if (this.visibleView === view) {
            return;
        }
        if (this.visibleView) {
            this.visibleView.detach();
        }
        this.visibleView = view;
        if (view) {
            this.splitWidget().setMainWidget(view);
        }
    }
    onResponseReceived(event) {
        const request = event.data.request;
        if (request.resourceType() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document && request.loaderId) {
            this.lastResponseReceivedForLoaderId.set(request.loaderId, request);
        }
    }
    processRequest(request) {
        const origin = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractOrigin(request.url());
        if (!origin) {
            // We don't handle resources like data: URIs. Most of them don't affect the lock icon.
            return;
        }
        let securityState = request.securityState();
        if (request.mixedContentType === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.MixedContentType.Blockable ||
            request.mixedContentType === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.MixedContentType.OptionallyBlockable) {
            securityState = _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure;
        }
        const originState = this.origins.get(origin);
        if (originState) {
            if ((0,_SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.securityStateCompare)(securityState, originState.securityState) < 0) {
                originState.securityState = securityState;
                const securityDetails = request.securityDetails();
                if (securityDetails) {
                    originState.securityDetails = securityDetails;
                }
                this.sidebarTree.updateOrigin(origin, securityState);
                if (originState.originView) {
                    originState.originView.setSecurityState(securityState);
                }
            }
        }
        else {
            // This stores the first security details we see for an origin, but we should
            // eventually store a (deduplicated) list of all the different security
            // details we have seen. https://crbug.com/503170
            const newOriginState = {
                securityState,
                securityDetails: request.securityDetails(),
                loadedFromCache: request.cached(),
                originView: undefined,
            };
            this.origins.set(origin, newOriginState);
            this.sidebarTree.addOrigin(origin, securityState);
            // Don't construct the origin view yet (let it happen lazily).
        }
    }
    onRequestFinished(event) {
        const request = event.data;
        this.updateFilterRequestCounts(request);
        this.processRequest(request);
    }
    updateFilterRequestCounts(request) {
        if (request.mixedContentType === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.MixedContentType.None) {
            return;
        }
        let filterKey = _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIFilter.MixedContentFilterValues.All;
        if (request.wasBlocked()) {
            filterKey = _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIFilter.MixedContentFilterValues.Blocked;
        }
        else if (request.mixedContentType === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.MixedContentType.Blockable) {
            filterKey = _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIFilter.MixedContentFilterValues.BlockOverridden;
        }
        else if (request.mixedContentType === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.MixedContentType.OptionallyBlockable) {
            filterKey = _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIFilter.MixedContentFilterValues.Displayed;
        }
        const currentCount = this.filterRequestCounts.get(filterKey);
        if (!currentCount) {
            this.filterRequestCounts.set(filterKey, 1);
        }
        else {
            this.filterRequestCounts.set(filterKey, currentCount + 1);
        }
        this.mainView.refreshExplanations();
    }
    filterRequestCount(filterKey) {
        return this.filterRequestCounts.get(filterKey) || 0;
    }
    modelAdded(securityModel) {
        if (securityModel.target() !== securityModel.target().outermostTarget()) {
            return;
        }
        this.securityModel = securityModel;
        const resourceTreeModel = securityModel.resourceTreeModel();
        const networkManager = securityModel.networkManager();
        if (this.eventListeners.length) {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.eventListeners);
        }
        this.eventListeners = [
            securityModel.addEventListener(_SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.Events.VisibleSecurityStateChanged, this.onVisibleSecurityStateChanged, this),
            resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.InterstitialShown, this.onInterstitialShown, this),
            resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.InterstitialHidden, this.onInterstitialHidden, this),
            networkManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Events.ResponseReceived, this.onResponseReceived, this),
            networkManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Events.RequestFinished, this.onRequestFinished, this),
        ];
        if (resourceTreeModel.isInterstitialShowing) {
            this.onInterstitialShown();
        }
    }
    modelRemoved(securityModel) {
        if (this.securityModel !== securityModel) {
            return;
        }
        this.securityModel = null;
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.eventListeners);
    }
    onPrimaryPageChanged(event) {
        const { frame } = event.data;
        const request = this.lastResponseReceivedForLoaderId.get(frame.loaderId);
        this.selectAndSwitchToMainView();
        this.sidebarTree.clearOrigins();
        this.origins.clear();
        this.lastResponseReceivedForLoaderId.clear();
        this.filterRequestCounts.clear();
        // After clearing the filtered request counts, refresh the
        // explanations to reflect the new counts.
        this.mainView.refreshExplanations();
        // If we could not find a matching request (as in the case of clicking
        // through an interstitial, see https://crbug.com/669309), set the origin
        // based upon the url data from the PrimaryPageChanged event itself.
        const origin = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractOrigin(request ? request.url() : frame.url);
        this.sidebarTree.setMainOrigin(origin);
        if (request) {
            this.processRequest(request);
        }
    }
    onInterstitialShown() {
        // The panel might have been displaying the origin view on the
        // previously loaded page. When showing an interstitial, switch
        // back to the Overview view.
        this.selectAndSwitchToMainView();
        this.sidebarTree.toggleOriginsList(true /* hidden */);
    }
    onInterstitialHidden() {
        this.sidebarTree.toggleOriginsList(false /* hidden */);
    }
}
class SecurityPanelSidebarTree extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeOutlineInShadow {
    constructor(mainViewElement, showOriginInPanel) {
        super();
        Object.defineProperty(this, "showOriginInPanel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "mainOrigin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "originGroupTitles", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "originGroups", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "elementsByOrigin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "mainViewReloadMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.appendChild(mainViewElement);
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './lockIcon.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module './sidebar.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.showOriginInPanel = showOriginInPanel;
        this.mainOrigin = null;
        this.originGroupTitles = new Map([
            [OriginGroup.MainOrigin, i18nString(UIStrings.mainOrigin)],
            [OriginGroup.NonSecure, i18nString(UIStrings.nonsecureOrigins)],
            [OriginGroup.Secure, i18nString(UIStrings.secureOrigins)],
            [OriginGroup.Unknown, i18nString(UIStrings.unknownCanceled)],
        ]);
        this.originGroups = new Map();
        for (const group of Object.values(OriginGroup)) {
            const element = this.createOriginGroupElement(this.originGroupTitles.get(group));
            this.originGroups.set(group, element);
            this.appendChild(element);
        }
        this.mainViewReloadMessage = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeElement(i18nString(UIStrings.reloadToViewDetails));
        this.mainViewReloadMessage.selectable = false;
        this.mainViewReloadMessage.listItemElement.classList.add('security-main-view-reload-message');
        const treeElement = this.originGroups.get(OriginGroup.MainOrigin);
        treeElement.appendChild(this.mainViewReloadMessage);
        this.clearOriginGroups();
        this.elementsByOrigin = new Map();
    }
    originGroupTitle(originGroup) {
        return this.originGroupTitles.get(originGroup);
    }
    originGroupElement(originGroup) {
        return this.originGroups.get(originGroup);
    }
    createOriginGroupElement(originGroupTitle) {
        const originGroup = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeElement(originGroupTitle, true);
        originGroup.selectable = false;
        originGroup.setCollapsible(false);
        originGroup.expand();
        originGroup.listItemElement.classList.add('security-sidebar-origins');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.setLabel(originGroup.childrenListElement, originGroupTitle);
        return originGroup;
    }
    toggleOriginsList(hidden) {
        for (const element of this.originGroups.values()) {
            element.hidden = hidden;
        }
    }
    addOrigin(origin, securityState) {
        this.mainViewReloadMessage.hidden = true;
        const getIconForSecurityState = (securityState) => getSecurityStateIconForDetailedView(securityState, `security-property security-property-${securityState}`);
        const originElement = new SecurityPanelSidebarTreeElement({
            title: SecurityPanel.createHighlightedUrl(origin, securityState),
            onSelect: this.showOriginInPanel.bind(this, origin),
            getIconForSecurityState,
            className: 'security-sidebar-tree-item',
        });
        originElement.tooltip = origin;
        this.elementsByOrigin.set(origin, originElement);
        this.updateOrigin(origin, securityState);
    }
    setMainOrigin(origin) {
        this.mainOrigin = origin;
    }
    updateOrigin(origin, securityState) {
        const originElement = this.elementsByOrigin.get(origin);
        originElement.setSecurityState(securityState);
        let newParent;
        if (origin === this.mainOrigin) {
            newParent = this.originGroups.get(OriginGroup.MainOrigin);
            if (securityState === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Secure) {
                newParent.title = i18nString(UIStrings.mainOriginSecure);
            }
            else {
                newParent.title = i18nString(UIStrings.mainOriginNonsecure);
            }
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.setLabel(newParent.childrenListElement, newParent.title);
        }
        else {
            switch (securityState) {
                case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Secure:
                    newParent = this.originGroupElement(OriginGroup.Secure);
                    break;
                case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Unknown:
                    newParent = this.originGroupElement(OriginGroup.Unknown);
                    break;
                default:
                    newParent = this.originGroupElement(OriginGroup.NonSecure);
                    break;
            }
        }
        const oldParent = originElement.parent;
        if (oldParent !== newParent) {
            if (oldParent) {
                oldParent.removeChild(originElement);
                if (oldParent.childCount() === 0) {
                    oldParent.hidden = true;
                }
            }
            newParent.appendChild(originElement);
            newParent.hidden = false;
        }
    }
    clearOriginGroups() {
        for (const [originGroup, originGroupElement] of this.originGroups) {
            if (originGroup === OriginGroup.MainOrigin) {
                for (let i = originGroupElement.childCount() - 1; i > 0; i--) {
                    originGroupElement.removeChildAtIndex(i);
                }
                originGroupElement.title = this.originGroupTitle(OriginGroup.MainOrigin);
                originGroupElement.hidden = false;
                this.mainViewReloadMessage.hidden = false;
            }
            else {
                originGroupElement.removeChildren();
                originGroupElement.hidden = true;
            }
        }
    }
    clearOrigins() {
        this.clearOriginGroups();
        this.elementsByOrigin.clear();
    }
    wasShown() {
    }
}
var OriginGroup;
(function (OriginGroup) {
    OriginGroup["MainOrigin"] = "MainOrigin";
    OriginGroup["NonSecure"] = "NonSecure";
    OriginGroup["Secure"] = "Secure";
    OriginGroup["Unknown"] = "Unknown";
})(OriginGroup || (OriginGroup = {}));
class SecurityPanelSidebarTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeElement {
    constructor(options) {
        super('', false);
        Object.defineProperty(this, "selectCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "securityStateInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _SecurityPanelSidebarTreeElement_getIconForSecurityState.set(this, void 0);
        this.selectCallback = options.onSelect;
        this.listItemElement.appendChild(options.title);
        this.listItemElement.classList.add(options.className);
        __classPrivateFieldSet(this, _SecurityPanelSidebarTreeElement_getIconForSecurityState, options.getIconForSecurityState, "f");
        this.securityStateInternal = null;
        this.setSecurityState(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Unknown);
    }
    setSecurityState(newSecurityState) {
        this.securityStateInternal = newSecurityState;
        const icon = __classPrivateFieldGet(this, _SecurityPanelSidebarTreeElement_getIconForSecurityState, "f").call(this, newSecurityState);
        if (icon) {
            this.setLeadingIcons([icon]);
        }
    }
    securityState() {
        return this.securityStateInternal;
    }
    onselect() {
        this.selectCallback();
        return true;
    }
}
_SecurityPanelSidebarTreeElement_getIconForSecurityState = new WeakMap();
class SecurityMainView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox {
    constructor(panel) {
        super(true);
        Object.defineProperty(this, "panel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "summarySection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "securityExplanationsMain", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "securityExplanationsExtra", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lockSpectrum", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "summaryText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "explanations", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "securityState", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.pane('security.main-view')}`);
        this.setMinimumSize(200, 100);
        this.contentElement.classList.add('security-main-view');
        this.panel = panel;
        this.summarySection = this.contentElement.createChild('div', 'security-summary');
        // Info explanations should appear after all others.
        this.securityExplanationsMain =
            this.contentElement.createChild('div', 'security-explanation-list security-explanations-main');
        this.securityExplanationsExtra =
            this.contentElement.createChild('div', 'security-explanation-list security-explanations-extra');
        // Fill the security summary section.
        const summaryDiv = this.summarySection.createChild('div', 'security-summary-section-title');
        summaryDiv.textContent = i18nString(UIStrings.securityOverview);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.markAsHeading(summaryDiv, 1);
        const lockSpectrum = this.summarySection.createChild('div', 'lock-spectrum');
        this.lockSpectrum = new Map([
            [
                _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Secure,
                lockSpectrum.appendChild(getSecurityStateIconForOverview(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Secure, 'lock-icon lock-icon-secure')),
            ],
            [
                _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Neutral,
                lockSpectrum.appendChild(getSecurityStateIconForOverview(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Neutral, 'lock-icon lock-icon-neutral')),
            ],
            [
                _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure,
                lockSpectrum.appendChild(getSecurityStateIconForOverview(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure, 'lock-icon lock-icon-insecure')),
            ],
        ]);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(this.getLockSpectrumDiv(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Secure), i18nString(UIStrings.secure));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(this.getLockSpectrumDiv(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Neutral), i18nString(UIStrings.info));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(this.getLockSpectrumDiv(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure), i18nString(UIStrings.notSecure));
        this.summarySection.createChild('div', 'triangle-pointer-container')
            .createChild('div', 'triangle-pointer-wrapper')
            .createChild('div', 'triangle-pointer');
        this.summaryText = this.summarySection.createChild('div', 'security-summary-text');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.markAsHeading(this.summaryText, 2);
        this.explanations = null;
        this.securityState = null;
    }
    getLockSpectrumDiv(securityState) {
        const element = this.lockSpectrum.get(securityState);
        if (!element) {
            throw new Error(`Invalid argument: ${securityState}`);
        }
        return element;
    }
    addExplanation(parent, explanation) {
        const explanationSection = parent.createChild('div', 'security-explanation');
        explanationSection.classList.add('security-explanation-' + explanation.securityState);
        const icon = getSecurityStateIconForDetailedView(explanation.securityState, 'security-property security-property-' + explanation.securityState);
        explanationSection.appendChild(icon);
        const text = explanationSection.createChild('div', 'security-explanation-text');
        const explanationHeader = text.createChild('div', 'security-explanation-title');
        if (explanation.title) {
            explanationHeader.createChild('span').textContent = explanation.title + ' - ';
            explanationHeader.createChild('span', 'security-explanation-title-' + explanation.securityState).textContent =
                explanation.summary;
        }
        else {
            explanationHeader.textContent = explanation.summary;
        }
        text.createChild('div').textContent = explanation.description;
        if (explanation.certificate.length) {
            text.appendChild(SecurityPanel.createCertificateViewerButtonForCert(i18nString(UIStrings.viewCertificate), explanation.certificate));
        }
        if (explanation.recommendations && explanation.recommendations.length) {
            const recommendationList = text.createChild('ul', 'security-explanation-recommendations');
            for (const recommendation of explanation.recommendations) {
                recommendationList.createChild('li').textContent = recommendation;
            }
        }
        return text;
    }
    updateVisibleSecurityState(visibleSecurityState) {
        // Remove old state.
        // It's safe to call this even when this.securityState is undefined.
        this.summarySection.classList.remove('security-summary-' + this.securityState);
        // Add new state.
        this.securityState = visibleSecurityState.securityState;
        this.summarySection.classList.add('security-summary-' + this.securityState);
        // Update the color and title of the triangle icon in the lock spectrum to
        // match the security state.
        if (this.securityState === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure) {
            this.getLockSpectrumDiv(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure).classList.add('lock-icon-insecure');
            this.getLockSpectrumDiv(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure).classList.remove('lock-icon-insecure-broken');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(this.getLockSpectrumDiv(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure), i18nString(UIStrings.notSecure));
        }
        else if (this.securityState === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.InsecureBroken) {
            this.getLockSpectrumDiv(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure).classList.add('lock-icon-insecure-broken');
            this.getLockSpectrumDiv(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure).classList.remove('lock-icon-insecure');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(this.getLockSpectrumDiv(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure), i18nString(UIStrings.notSecureBroken));
        }
        const { summary, explanations } = this.getSecuritySummaryAndExplanations(visibleSecurityState);
        // Use override summary if present, otherwise use base explanation
        this.summaryText.textContent = summary || _SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.SummaryMessages[this.securityState]();
        this.explanations = this.orderExplanations(explanations);
        this.refreshExplanations();
    }
    getSecuritySummaryAndExplanations(visibleSecurityState) {
        const { securityState, securityStateIssueIds } = visibleSecurityState;
        let summary;
        const explanations = [];
        summary = this.explainSafetyTipSecurity(visibleSecurityState, summary, explanations);
        if (securityStateIssueIds.includes('malicious-content')) {
            summary = i18nString(UIStrings.thisPageIsDangerousFlaggedBy);
            // Always insert SafeBrowsing explanation at the front.
            explanations.unshift(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.SecurityStyleExplanation(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure, undefined, i18nString(UIStrings.flaggedByGoogleSafeBrowsing), i18nString(UIStrings.toCheckThisPagesStatusVisit)));
        }
        else if (securityStateIssueIds.includes('is-error-page') &&
            (visibleSecurityState.certificateSecurityState === null ||
                visibleSecurityState.certificateSecurityState.certificateNetworkError === null)) {
            summary = i18nString(UIStrings.thisIsAnErrorPage);
            // In the case of a non cert error page, we usually don't have a
            // certificate, connection, or content that needs to be explained, e.g. in
            // the case of a net error, so we can early return.
            return { summary, explanations };
        }
        else if (securityState === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.InsecureBroken &&
            securityStateIssueIds.includes('scheme-is-not-cryptographic')) {
            summary = summary || i18nString(UIStrings.thisPageIsInsecureUnencrypted);
        }
        if (securityStateIssueIds.includes('scheme-is-not-cryptographic')) {
            if (securityState === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Neutral &&
                !securityStateIssueIds.includes('insecure-origin')) {
                summary = i18nString(UIStrings.thisPageHasANonhttpsSecureOrigin);
            }
            return { summary, explanations };
        }
        this.explainCertificateSecurity(visibleSecurityState, explanations);
        this.explainConnectionSecurity(visibleSecurityState, explanations);
        this.explainContentSecurity(visibleSecurityState, explanations);
        return { summary, explanations };
    }
    explainSafetyTipSecurity(visibleSecurityState, summary, explanations) {
        const { securityStateIssueIds, safetyTipInfo } = visibleSecurityState;
        const currentExplanations = [];
        if (securityStateIssueIds.includes('bad_reputation')) {
            const formatedDescription = `${i18nString(UIStrings.chromeHasDeterminedThatThisSiteS)}\n\n${i18nString(UIStrings.ifYouBelieveThisIsShownIn)}`;
            currentExplanations.push({
                summary: i18nString(UIStrings.thisPageIsSuspicious),
                description: formatedDescription,
            });
        }
        else if (securityStateIssueIds.includes('lookalike') && safetyTipInfo && safetyTipInfo.safeUrl) {
            const hostname = new URL(safetyTipInfo.safeUrl).hostname;
            const hostnamePlaceholder = { PH1: hostname };
            const formatedDescriptionSafety = `${i18nString(UIStrings.thisSitesHostnameLooksSimilarToP, hostnamePlaceholder)}\n\n${i18nString(UIStrings.ifYouBelieveThisIsShownInErrorSafety)}`;
            currentExplanations.push({ summary: i18nString(UIStrings.possibleSpoofingUrl), description: formatedDescriptionSafety });
        }
        if (currentExplanations.length > 0) {
            // To avoid overwriting SafeBrowsing's title, set the main summary only if
            // it's empty. The title set here can be overridden by later checks (e.g.
            // bad HTTP).
            summary = summary || i18nString(UIStrings.thisPageIsSuspiciousFlaggedBy);
            explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.SecurityStyleExplanation(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure, undefined, currentExplanations[0].summary, currentExplanations[0].description));
        }
        return summary;
    }
    explainCertificateSecurity(visibleSecurityState, explanations) {
        const { certificateSecurityState, securityStateIssueIds } = visibleSecurityState;
        const title = i18nString(UIStrings.certificate);
        if (certificateSecurityState && certificateSecurityState.certificateHasSha1Signature) {
            const explanationSummary = i18nString(UIStrings.insecureSha);
            const description = i18nString(UIStrings.theCertificateChainForThisSite);
            if (certificateSecurityState.certificateHasWeakSignature) {
                explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.SecurityStyleExplanation(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure, title, explanationSummary, description, certificateSecurityState.certificate, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.MixedContentType.None));
            }
            else {
                explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.SecurityStyleExplanation(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Neutral, title, explanationSummary, description, certificateSecurityState.certificate, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.MixedContentType.None));
            }
        }
        if (certificateSecurityState && securityStateIssueIds.includes('cert-missing-subject-alt-name')) {
            explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.SecurityStyleExplanation(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure, title, i18nString(UIStrings.subjectAlternativeNameMissing), i18nString(UIStrings.theCertificateForThisSiteDoesNot), certificateSecurityState.certificate, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.MixedContentType.None));
        }
        if (certificateSecurityState && certificateSecurityState.certificateNetworkError !== null) {
            explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.SecurityStyleExplanation(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure, title, i18nString(UIStrings.missing), i18nString(UIStrings.thisSiteIsMissingAValidTrusted, { PH1: certificateSecurityState.certificateNetworkError }), certificateSecurityState.certificate, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.MixedContentType.None));
        }
        else if (certificateSecurityState && !certificateSecurityState.certificateHasSha1Signature) {
            explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.SecurityStyleExplanation(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Secure, title, i18nString(UIStrings.validAndTrusted), i18nString(UIStrings.theConnectionToThisSiteIsUsingA, { PH1: certificateSecurityState.issuer }), certificateSecurityState.certificate, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.MixedContentType.None));
        }
        if (securityStateIssueIds.includes('pkp-bypassed')) {
            explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.SecurityStyleExplanation(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Info, title, i18nString(UIStrings.publickeypinningBypassed), i18nString(UIStrings.publickeypinningWasBypassedByA)));
        }
        if (certificateSecurityState && certificateSecurityState.isCertificateExpiringSoon()) {
            explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.SecurityStyleExplanation(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Info, undefined, i18nString(UIStrings.certificateExpiresSoon), i18nString(UIStrings.theCertificateForThisSiteExpires)));
        }
    }
    explainConnectionSecurity(visibleSecurityState, explanations) {
        const certificateSecurityState = visibleSecurityState.certificateSecurityState;
        if (!certificateSecurityState) {
            return;
        }
        const title = i18nString(UIStrings.connection);
        if (certificateSecurityState.modernSSL) {
            explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.SecurityStyleExplanation(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Secure, title, i18nString(UIStrings.secureConnectionSettings), i18nString(UIStrings.theConnectionToThisSiteIs, {
                PH1: certificateSecurityState.protocol,
                PH2: certificateSecurityState.getKeyExchangeName(),
                PH3: certificateSecurityState.getCipherFullName(),
            })));
            return;
        }
        const recommendations = [];
        if (certificateSecurityState.obsoleteSslProtocol) {
            recommendations.push(i18nString(UIStrings.sIsObsoleteEnableTlsOrLater, { PH1: certificateSecurityState.protocol }));
        }
        if (certificateSecurityState.obsoleteSslKeyExchange) {
            recommendations.push(i18nString(UIStrings.rsaKeyExchangeIsObsoleteEnableAn));
        }
        if (certificateSecurityState.obsoleteSslCipher) {
            recommendations.push(i18nString(UIStrings.sIsObsoleteEnableAnAesgcmbased, { PH1: certificateSecurityState.cipher }));
        }
        if (certificateSecurityState.obsoleteSslSignature) {
            recommendations.push(i18nString(UIStrings.theServerSignatureUsesShaWhichIs));
        }
        explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.SecurityStyleExplanation(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Info, title, i18nString(UIStrings.obsoleteConnectionSettings), i18nString(UIStrings.theConnectionToThisSiteIs, {
            PH1: certificateSecurityState.protocol,
            PH2: certificateSecurityState.getKeyExchangeName(),
            PH3: certificateSecurityState.getCipherFullName(),
        }), undefined, undefined, recommendations));
    }
    explainContentSecurity(visibleSecurityState, explanations) {
        // Add the secure explanation unless there is an issue.
        let addSecureExplanation = true;
        const title = i18nString(UIStrings.resources);
        const securityStateIssueIds = visibleSecurityState.securityStateIssueIds;
        if (securityStateIssueIds.includes('ran-mixed-content')) {
            addSecureExplanation = false;
            explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.SecurityStyleExplanation(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure, title, i18nString(UIStrings.activeMixedContent), i18nString(UIStrings.youHaveRecentlyAllowedNonsecure), [], _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.MixedContentType.Blockable));
        }
        if (securityStateIssueIds.includes('displayed-mixed-content')) {
            addSecureExplanation = false;
            explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.SecurityStyleExplanation(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Neutral, title, i18nString(UIStrings.mixedContent), i18nString(UIStrings.thisPageIncludesHttpResources), [], _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.MixedContentType.OptionallyBlockable));
        }
        if (securityStateIssueIds.includes('contained-mixed-form')) {
            addSecureExplanation = false;
            explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.SecurityStyleExplanation(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Neutral, title, i18nString(UIStrings.nonsecureForm), i18nString(UIStrings.thisPageIncludesAFormWithA)));
        }
        if (visibleSecurityState.certificateSecurityState === null ||
            visibleSecurityState.certificateSecurityState.certificateNetworkError === null) {
            if (securityStateIssueIds.includes('ran-content-with-cert-error')) {
                addSecureExplanation = false;
                explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.SecurityStyleExplanation(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure, title, i18nString(UIStrings.activeContentWithCertificate), i18nString(UIStrings.youHaveRecentlyAllowedContent)));
            }
            if (securityStateIssueIds.includes('displayed-content-with-cert-errors')) {
                addSecureExplanation = false;
                explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.SecurityStyleExplanation(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Neutral, title, i18nString(UIStrings.contentWithCertificateErrors), i18nString(UIStrings.thisPageIncludesResourcesThat)));
            }
        }
        if (addSecureExplanation) {
            if (!securityStateIssueIds.includes('scheme-is-not-cryptographic')) {
                explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_10__.SecurityStyleExplanation(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Secure, title, i18nString(UIStrings.allServedSecurely), i18nString(UIStrings.allResourcesOnThisPageAreServed)));
            }
        }
    }
    orderExplanations(explanations) {
        if (explanations.length === 0) {
            return explanations;
        }
        const securityStateOrder = [
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Insecure,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Neutral,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Secure,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Info,
        ];
        const orderedExplanations = [];
        for (const securityState of securityStateOrder) {
            orderedExplanations.push(...explanations.filter(explanation => explanation.securityState === securityState));
        }
        return orderedExplanations;
    }
    refreshExplanations() {
        this.securityExplanationsMain.removeChildren();
        this.securityExplanationsExtra.removeChildren();
        if (!this.explanations) {
            return;
        }
        for (const explanation of this.explanations) {
            if (explanation.securityState === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Info) {
                this.addExplanation(this.securityExplanationsExtra, explanation);
            }
            else {
                switch (explanation.mixedContentType) {
                    case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.MixedContentType.Blockable:
                        this.addMixedContentExplanation(this.securityExplanationsMain, explanation, _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIFilter.MixedContentFilterValues.BlockOverridden);
                        break;
                    case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.MixedContentType.OptionallyBlockable:
                        this.addMixedContentExplanation(this.securityExplanationsMain, explanation, _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIFilter.MixedContentFilterValues.Displayed);
                        break;
                    default:
                        this.addExplanation(this.securityExplanationsMain, explanation);
                        break;
                }
            }
        }
        if (this.panel.filterRequestCount(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIFilter.MixedContentFilterValues.Blocked) > 0) {
            const explanation = {
                securityState: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Info,
                summary: i18nString(UIStrings.blockedMixedContent),
                description: i18nString(UIStrings.yourPageRequestedNonsecure),
                mixedContentType: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.MixedContentType.Blockable,
                certificate: [],
                title: '',
            };
            this.addMixedContentExplanation(this.securityExplanationsMain, explanation, _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIFilter.MixedContentFilterValues.Blocked);
        }
    }
    addMixedContentExplanation(parent, explanation, filterKey) {
        const element = this.addExplanation(parent, explanation);
        const filterRequestCount = this.panel.filterRequestCount(filterKey);
        if (!filterRequestCount) {
            // Network instrumentation might not have been enabled for the page
            // load, so the security panel does not necessarily know a count of
            // individual mixed requests at this point. Prompt them to refresh
            // instead of pointing them to the Network panel to get prompted
            // to refresh.
            const refreshPrompt = element.createChild('div', 'security-mixed-content');
            refreshPrompt.textContent = i18nString(UIStrings.reloadThePageToRecordRequestsFor);
            return;
        }
        const requestsAnchor = element.createChild('button', 'security-mixed-content devtools-link text-button link-style');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.markAsLink(requestsAnchor);
        requestsAnchor.tabIndex = 0;
        requestsAnchor.textContent = i18nString(UIStrings.viewDRequestsInNetworkPanel, { n: filterRequestCount });
        requestsAnchor.addEventListener('click', this.showNetworkFilter.bind(this, filterKey));
    }
    showNetworkFilter(filterKey, e) {
        e.consume();
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIFilter.UIRequestFilter.filters([{ filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIFilter.FilterType.MixedContent, filterValue: filterKey }]));
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './lockIcon.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module './mainView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
class SecurityOriginView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox {
    constructor(panel, origin, originState) {
        super();
        Object.defineProperty(this, "panel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "originLockIcon", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.pane('security.origin-view')}`);
        this.panel = panel;
        this.setMinimumSize(200, 100);
        this.element.classList.add('security-origin-view');
        const titleSection = this.element.createChild('div', 'title-section');
        const titleDiv = titleSection.createChild('div', 'title-section-header');
        titleDiv.textContent = i18nString(UIStrings.origin);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.markAsHeading(titleDiv, 1);
        const originDisplay = titleSection.createChild('div', 'origin-display');
        this.originLockIcon = originDisplay.createChild('span');
        const icon = getSecurityStateIconForDetailedView(originState.securityState, `security-property security-property-${originState.securityState}`);
        this.originLockIcon.appendChild(icon);
        originDisplay.appendChild(SecurityPanel.createHighlightedUrl(origin, originState.securityState));
        const originNetworkDiv = titleSection.createChild('div', 'view-network-button');
        const originNetworkButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createTextButton(i18nString(UIStrings.viewRequestsInNetworkPanel), event => {
            event.consume();
            const parsedURL = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(origin);
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIFilter.UIRequestFilter.filters([
                { filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIFilter.FilterType.Domain, filterValue: parsedURL.host },
                { filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIFilter.FilterType.Scheme, filterValue: parsedURL.scheme },
            ]));
        }, { jslogContext: 'reveal-in-network' });
        originNetworkDiv.appendChild(originNetworkButton);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.markAsLink(originNetworkButton);
        if (originState.securityDetails) {
            const connectionSection = this.element.createChild('div', 'origin-view-section');
            const connectionDiv = connectionSection.createChild('div', 'origin-view-section-title');
            connectionDiv.textContent = i18nString(UIStrings.connection);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.markAsHeading(connectionDiv, 2);
            let table = new SecurityDetailsTable();
            connectionSection.appendChild(table.element());
            table.addRow(i18nString(UIStrings.protocol), originState.securityDetails.protocol);
            // A TLS connection negotiates a cipher suite and, when doing an ephemeral
            // ECDH key exchange, a "named group". In TLS 1.2, the cipher suite is
            // named like TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256. The DevTools protocol
            // tried to decompose this name and calls the "ECDHE_RSA" portion the
            // "keyExchange", because it determined the rough shape of the key
            // exchange portion of the handshake. (A keyExchange of "RSA" meant a very
            // different handshake set.) But ECDHE_RSA was still parameterized by a
            // named group (e.g. X25519), which the DevTools protocol exposes as
            // "keyExchangeGroup".
            //
            // Then, starting TLS 1.3, the cipher suites are named like
            // TLS_AES_128_GCM_SHA256. The handshake shape is implicit in the
            // protocol. keyExchange is empty and we only have keyExchangeGroup.
            //
            // "Key exchange group" isn't common terminology and, in TLS 1.3,
            // something like "X25519" is better labelled as "key exchange" than "key
            // exchange group" anyway. So combine the two fields when displaying in
            // the UI.
            if (originState.securityDetails.keyExchange && originState.securityDetails.keyExchangeGroup) {
                table.addRow(i18nString(UIStrings.keyExchange), originState.securityDetails.keyExchange + ' with ' + originState.securityDetails.keyExchangeGroup);
            }
            else if (originState.securityDetails.keyExchange) {
                table.addRow(i18nString(UIStrings.keyExchange), originState.securityDetails.keyExchange);
            }
            else if (originState.securityDetails.keyExchangeGroup) {
                table.addRow(i18nString(UIStrings.keyExchange), originState.securityDetails.keyExchangeGroup);
            }
            if (originState.securityDetails.serverSignatureAlgorithm) {
                // See https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-signaturescheme
                let sigString = SignatureSchemeStrings.get(originState.securityDetails.serverSignatureAlgorithm);
                sigString ?? (sigString = i18nString(UIStrings.unknownField) + ' (' + originState.securityDetails.serverSignatureAlgorithm + ')');
                table.addRow(i18nString(UIStrings.serverSignature), sigString);
            }
            table.addRow(i18nString(UIStrings.cipher), originState.securityDetails.cipher +
                (originState.securityDetails.mac ? ' with ' + originState.securityDetails.mac : ''));
            if (originState.securityDetails.encryptedClientHello) {
                table.addRow(i18nString(UIStrings.encryptedClientHello), i18nString(UIStrings.enabled));
            }
            // Create the certificate section outside the callback, so that it appears in the right place.
            const certificateSection = this.element.createChild('div', 'origin-view-section');
            const certificateDiv = certificateSection.createChild('div', 'origin-view-section-title');
            certificateDiv.textContent = i18nString(UIStrings.certificate);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.markAsHeading(certificateDiv, 2);
            const sctListLength = originState.securityDetails.signedCertificateTimestampList.length;
            const ctCompliance = originState.securityDetails.certificateTransparencyCompliance;
            let sctSection;
            if (sctListLength || ctCompliance !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Network.CertificateTransparencyCompliance.Unknown) {
                // Create the Certificate Transparency section outside the callback, so that it appears in the right place.
                sctSection = this.element.createChild('div', 'origin-view-section');
                const sctDiv = sctSection.createChild('div', 'origin-view-section-title');
                sctDiv.textContent = i18nString(UIStrings.certificateTransparency);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.markAsHeading(sctDiv, 2);
            }
            const sanDiv = this.createSanDiv(originState.securityDetails.sanList);
            const validFromString = new Date(1000 * originState.securityDetails.validFrom).toUTCString();
            const validUntilString = new Date(1000 * originState.securityDetails.validTo).toUTCString();
            table = new SecurityDetailsTable();
            certificateSection.appendChild(table.element());
            table.addRow(i18nString(UIStrings.subject), originState.securityDetails.subjectName);
            table.addRow(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('SAN'), sanDiv);
            table.addRow(i18nString(UIStrings.validFrom), validFromString);
            table.addRow(i18nString(UIStrings.validUntil), validUntilString);
            table.addRow(i18nString(UIStrings.issuer), originState.securityDetails.issuer);
            table.addRow('', SecurityPanel.createCertificateViewerButtonForOrigin(i18nString(UIStrings.openFullCertificateDetails), origin));
            if (!sctSection) {
                return;
            }
            // Show summary of SCT(s) of Certificate Transparency.
            const sctSummaryTable = new SecurityDetailsTable();
            sctSummaryTable.element().classList.add('sct-summary');
            sctSection.appendChild(sctSummaryTable.element());
            for (let i = 0; i < sctListLength; i++) {
                const sct = originState.securityDetails.signedCertificateTimestampList[i];
                sctSummaryTable.addRow(i18nString(UIStrings.sct), sct.logDescription + ' (' + sct.origin + ', ' + sct.status + ')');
            }
            // Show detailed SCT(s) of Certificate Transparency.
            const sctTableWrapper = sctSection.createChild('div', 'sct-details');
            sctTableWrapper.classList.add('hidden');
            for (let i = 0; i < sctListLength; i++) {
                const sctTable = new SecurityDetailsTable();
                sctTableWrapper.appendChild(sctTable.element());
                const sct = originState.securityDetails.signedCertificateTimestampList[i];
                sctTable.addRow(i18nString(UIStrings.logName), sct.logDescription);
                sctTable.addRow(i18nString(UIStrings.logId), sct.logId.replace(/(.{2})/g, '$1 '));
                sctTable.addRow(i18nString(UIStrings.validationStatus), sct.status);
                sctTable.addRow(i18nString(UIStrings.source), sct.origin);
                sctTable.addRow(i18nString(UIStrings.issuedAt), new Date(sct.timestamp).toUTCString());
                sctTable.addRow(i18nString(UIStrings.hashAlgorithm), sct.hashAlgorithm);
                sctTable.addRow(i18nString(UIStrings.signatureAlgorithm), sct.signatureAlgorithm);
                sctTable.addRow(i18nString(UIStrings.signatureData), sct.signatureData.replace(/(.{2})/g, '$1 '));
            }
            // Add link to toggle between displaying of the summary of the SCT(s) and the detailed SCT(s).
            if (sctListLength) {
                function toggleSctDetailsDisplay() {
                    let buttonText;
                    const isDetailsShown = !sctTableWrapper.classList.contains('hidden');
                    if (isDetailsShown) {
                        buttonText = i18nString(UIStrings.showFullDetails);
                    }
                    else {
                        buttonText = i18nString(UIStrings.hideFullDetails);
                    }
                    toggleSctsDetailsLink.textContent = buttonText;
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.setLabel(toggleSctsDetailsLink, buttonText);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.setExpanded(toggleSctsDetailsLink, !isDetailsShown);
                    sctSummaryTable.element().classList.toggle('hidden');
                    sctTableWrapper.classList.toggle('hidden');
                }
                const toggleSctsDetailsLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createTextButton(i18nString(UIStrings.showFullDetails), toggleSctDetailsDisplay, { className: 'details-toggle', jslogContext: 'security.toggle-scts-details' });
                sctSection.appendChild(toggleSctsDetailsLink);
            }
            switch (ctCompliance) {
                case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Network.CertificateTransparencyCompliance.Compliant:
                    sctSection.createChild('div', 'origin-view-section-notes').textContent =
                        i18nString(UIStrings.thisRequestCompliesWithChromes);
                    break;
                case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Network.CertificateTransparencyCompliance.NotCompliant:
                    sctSection.createChild('div', 'origin-view-section-notes').textContent =
                        i18nString(UIStrings.thisRequestDoesNotComplyWith);
                    break;
                case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Network.CertificateTransparencyCompliance.Unknown:
                    break;
            }
            const noteSection = this.element.createChild('div', 'origin-view-section origin-view-notes');
            if (originState.loadedFromCache) {
                noteSection.createChild('div').textContent = i18nString(UIStrings.thisResponseWasLoadedFromCache);
            }
            noteSection.createChild('div').textContent = i18nString(UIStrings.theSecurityDetailsAboveAreFrom);
        }
        else if (originState.securityState === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Secure) {
            // If the security state is secure but there are no security details,
            // this means that the origin is a non-cryptographic secure origin, e.g.
            // chrome:// or about:.
            const secureSection = this.element.createChild('div', 'origin-view-section');
            const secureDiv = secureSection.createChild('div', 'origin-view-section-title');
            secureDiv.textContent = i18nString(UIStrings.secure);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.markAsHeading(secureDiv, 2);
            secureSection.createChild('div').textContent = i18nString(UIStrings.thisOriginIsANonhttpsSecure);
        }
        else if (originState.securityState !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Security.SecurityState.Unknown) {
            const notSecureSection = this.element.createChild('div', 'origin-view-section');
            const notSecureDiv = notSecureSection.createChild('div', 'origin-view-section-title');
            notSecureDiv.textContent = i18nString(UIStrings.notSecure);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.markAsHeading(notSecureDiv, 2);
            notSecureSection.createChild('div').textContent = i18nString(UIStrings.yourConnectionToThisOriginIsNot);
        }
        else {
            const noInfoSection = this.element.createChild('div', 'origin-view-section');
            const noInfoDiv = noInfoSection.createChild('div', 'origin-view-section-title');
            noInfoDiv.textContent = i18nString(UIStrings.noSecurityInformation);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.markAsHeading(noInfoDiv, 2);
            noInfoSection.createChild('div').textContent = i18nString(UIStrings.noSecurityDetailsAreAvailableFor);
        }
    }
    createSanDiv(sanList) {
        const sanDiv = document.createElement('div');
        if (sanList.length === 0) {
            sanDiv.textContent = i18nString(UIStrings.na);
            sanDiv.classList.add('empty-san');
        }
        else {
            const truncatedNumToShow = 2;
            const listIsTruncated = sanList.length > truncatedNumToShow + 1;
            for (let i = 0; i < sanList.length; i++) {
                const span = sanDiv.createChild('span', 'san-entry');
                span.textContent = sanList[i];
                if (listIsTruncated && i >= truncatedNumToShow) {
                    span.classList.add('truncated-entry');
                }
            }
            if (listIsTruncated) {
                function toggleSANTruncation() {
                    const isTruncated = sanDiv.classList.contains('truncated-san');
                    let buttonText;
                    if (isTruncated) {
                        sanDiv.classList.remove('truncated-san');
                        buttonText = i18nString(UIStrings.showLess);
                    }
                    else {
                        sanDiv.classList.add('truncated-san');
                        buttonText = i18nString(UIStrings.showMoreSTotal, { PH1: sanList.length });
                    }
                    truncatedSANToggle.textContent = buttonText;
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.setLabel(truncatedSANToggle, buttonText);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.setExpanded(truncatedSANToggle, isTruncated);
                }
                const truncatedSANToggle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createTextButton(i18nString(UIStrings.showMoreSTotal, { PH1: sanList.length }), toggleSANTruncation, { jslogContext: 'security.toggle-san-truncation' });
                sanDiv.appendChild(truncatedSANToggle);
                toggleSANTruncation();
            }
        }
        return sanDiv;
    }
    setSecurityState(newSecurityState) {
        this.originLockIcon.removeChildren();
        const icon = getSecurityStateIconForDetailedView(newSecurityState, `security-property security-property-${newSecurityState}`);
        this.originLockIcon.appendChild(icon);
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './originView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module './lockIcon.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
class SecurityDetailsTable {
    constructor() {
        Object.defineProperty(this, "elementInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.elementInternal = document.createElement('table');
        this.elementInternal.classList.add('details-table');
    }
    element() {
        return this.elementInternal;
    }
    addRow(key, value) {
        const row = this.elementInternal.createChild('tr', 'details-table-row');
        row.createChild('td').textContent = key;
        const valueCell = row.createChild('td');
        if (typeof value === 'string') {
            valueCell.textContent = value;
        }
        else {
            valueCell.appendChild(value);
        }
    }
}


/***/ })

}]);