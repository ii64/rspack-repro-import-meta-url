"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_security_SecurityPanel_js"], {
"./panels/security/SecurityPanel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OriginGroup: function() { return OriginGroup; },
  SecurityDetailsTable: function() { return SecurityDetailsTable; },
  SecurityMainView: function() { return SecurityMainView; },
  SecurityOriginView: function() { return SecurityOriginView; },
  SecurityPanel: function() { return SecurityPanel; },
  SecurityPanelSidebarTree: function() { return SecurityPanelSidebarTree; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _lockIcon_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lockIcon.css.js */ "./panels/security/lockIcon.css.js");
/* harmony import */var _mainView_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mainView.css.js */ "./panels/security/mainView.css.js");
/* harmony import */var _originView_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./originView.css.js */ "./panels/security/originView.css.js");
/* harmony import */var _SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SecurityModel.js */ "./panels/security/SecurityModel.js");
/* harmony import */var _sidebar_css_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sidebar.css.js */ "./panels/security/sidebar.css.js");
// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}













var UIStrings = {
    /**
     *@description Title text content in Security Panel of the Security panel
     */ overview: 'Overview',
    /**
     *@description Text in Security Panel of the Security panel
     */ mainOrigin: 'Main origin',
    /**
     *@description Text in Security Panel of the Security panel
     */ nonsecureOrigins: 'Non-secure origins',
    /**
     *@description Text in Security Panel of the Security panel
     */ secureOrigins: 'Secure origins',
    /**
     *@description Text in Security Panel of the Security panel
     */ unknownCanceled: 'Unknown / canceled',
    /**
     *@description Text in Security Panel of the Security panel
     */ reloadToViewDetails: 'Reload to view details',
    /**
     *@description New parent title in Security Panel of the Security panel
     */ mainOriginSecure: 'Main origin (secure)',
    /**
     *@description New parent title in Security Panel of the Security panel
     */ mainOriginNonsecure: 'Main origin (non-secure)',
    /**
     *@description Summary div text content in Security Panel of the Security panel
     */ securityOverview: 'Security overview',
    /**
     *@description Text to show something is secure
     */ secure: 'Secure',
    /**
     *@description Sdk console message message level info of level Labels in Console View of the Console panel
     */ info: 'Info',
    /**
     *@description Not secure div text content in Security Panel of the Security panel
     */ notSecure: 'Not secure',
    /**
     *@description Text to view a security certificate
     */ viewCertificate: 'View certificate',
    /**
     *@description Text in Security Panel of the Security panel
     */ notSecureBroken: 'Not secure (broken)',
    /**
     *@description Main summary for page when it has been deemed unsafe by the SafeBrowsing service.
     */ thisPageIsDangerousFlaggedBy: 'This page is dangerous (flagged by Google Safe Browsing).',
    /**
     *@description Summary phrase for a security problem where the site is deemed unsafe by the SafeBrowsing service.
     */ flaggedByGoogleSafeBrowsing: 'Flagged by Google Safe Browsing',
    /**
     *@description Description of a security problem where the site is deemed unsafe by the SafeBrowsing service.
     */ toCheckThisPagesStatusVisit: 'To check this page\'s status, visit g.co/safebrowsingstatus.',
    /**
     *@description Main summary for a non cert error page.
     */ thisIsAnErrorPage: 'This is an error page.',
    /**
     *@description Main summary for where the site is non-secure HTTP.
     */ thisPageIsInsecureUnencrypted: 'This page is insecure (unencrypted HTTP).',
    /**
     *@description Main summary for where the site has a non-cryptographic secure origin.
     */ thisPageHasANonhttpsSecureOrigin: 'This page has a non-HTTPS secure origin.',
    /**
     *@description Message to display in devtools security tab when the page you are on triggered a safety tip.
     */ thisPageIsSuspicious: 'This page is suspicious',
    /**
     *@description Body of message to display in devtools security tab when you are viewing a page that triggered a safety tip.
     */ chromeHasDeterminedThatThisSiteS: 'Chrome has determined that this site could be fake or fraudulent.',
    /**
     *@description Second part of the body of message to display in devtools security tab when you are viewing a page that triggered a safety tip.
     */ ifYouBelieveThisIsShownIn: 'If you believe this is shown in error please visit https://g.co/chrome/lookalike-warnings.',
    /**
     *@description Summary of a warning when the user visits a page that triggered a Safety Tip because the domain looked like another domain.
     */ possibleSpoofingUrl: 'Possible spoofing URL',
    /**
     *@description Body of a warning when the user visits a page that triggered a Safety Tip because the domain looked like another domain.
     *@example {wikipedia.org} PH1
     */ thisSitesHostnameLooksSimilarToP: 'This site\'s hostname looks similar to {PH1}. Attackers sometimes mimic sites by making small, hard-to-see changes to the domain name.',
    /**
     *@description second part of body of a warning when the user visits a page that triggered a Safety Tip because the domain looked like another domain.
     */ ifYouBelieveThisIsShownInErrorSafety: 'If you believe this is shown in error please visit https://g.co/chrome/lookalike-warnings.',
    /**
     *@description Title of the devtools security tab when the page you are on triggered a safety tip.
     */ thisPageIsSuspiciousFlaggedBy: 'This page is suspicious (flagged by Chrome).',
    /**
     *@description Text for a security certificate
     */ certificate: 'Certificate',
    /**
     *@description Summary phrase for a security problem where the site's certificate chain contains a SHA1 signature.
     */ insecureSha: 'insecure (SHA-1)',
    /**
     *@description Description of a security problem where the site's certificate chain contains a SHA1 signature.
     */ theCertificateChainForThisSite: 'The certificate chain for this site contains a certificate signed using SHA-1.',
    /**
     *@description Summary phrase for a security problem where the site's certificate is missing a subjectAltName extension.
     */ subjectAlternativeNameMissing: '`Subject Alternative Name` missing',
    /**
     *@description Description of a security problem where the site's certificate is missing a subjectAltName extension.
     */ theCertificateForThisSiteDoesNot: 'The certificate for this site does not contain a `Subject Alternative Name` extension containing a domain name or IP address.',
    /**
     *@description Summary phrase for a security problem with the site's certificate.
     */ missing: 'missing',
    /**
     *@description Description of a security problem with the site's certificate.
     *@example {net::ERR_CERT_AUTHORITY_INVALID} PH1
     */ thisSiteIsMissingAValidTrusted: 'This site is missing a valid, trusted certificate ({PH1}).',
    /**
     *@description Summary phrase for a site that has a valid server certificate.
     */ validAndTrusted: 'valid and trusted',
    /**
     *@description Description of a site that has a valid server certificate.
     *@example {Let's Encrypt Authority X3} PH1
     */ theConnectionToThisSiteIsUsingA: 'The connection to this site is using a valid, trusted server certificate issued by {PH1}.',
    /**
     *@description Summary phrase for a security state where Private Key Pinning is ignored because the certificate chains to a locally-trusted root.
     */ publickeypinningBypassed: 'Public-Key-Pinning bypassed',
    /**
     *@description Description of a security state where Private Key Pinning is ignored because the certificate chains to a locally-trusted root.
     */ publickeypinningWasBypassedByA: 'Public-Key-Pinning was bypassed by a local root certificate.',
    /**
     *@description Summary phrase for a site with a certificate that is expiring soon.
     */ certificateExpiresSoon: 'Certificate expires soon',
    /**
     *@description Description for a site with a certificate that is expiring soon.
     */ theCertificateForThisSiteExpires: 'The certificate for this site expires in less than 48 hours and needs to be renewed.',
    /**
     *@description Text that refers to the network connection
     */ connection: 'Connection',
    /**
     *@description Summary phrase for a site that uses a modern, secure TLS protocol and cipher.
     */ secureConnectionSettings: 'secure connection settings',
    /**
     *@description Description of a site's TLS settings.
     *@example {TLS 1.2} PH1
     *@example {ECDHE_RSA} PH2
     *@example {AES_128_GCM} PH3
     */ theConnectionToThisSiteIs: 'The connection to this site is encrypted and authenticated using {PH1}, {PH2}, and {PH3}.',
    /**
     *@description A recommendation to the site owner to use a modern TLS protocol
     *@example {TLS 1.0} PH1
     */ sIsObsoleteEnableTlsOrLater: '{PH1} is obsolete. Enable TLS 1.2 or later.',
    /**
     *@description A recommendation to the site owner to use a modern TLS key exchange
     */ rsaKeyExchangeIsObsoleteEnableAn: 'RSA key exchange is obsolete. Enable an ECDHE-based cipher suite.',
    /**
     *@description A recommendation to the site owner to use a modern TLS cipher
     *@example {3DES_EDE_CBC} PH1
     */ sIsObsoleteEnableAnAesgcmbased: '{PH1} is obsolete. Enable an AES-GCM-based cipher suite.',
    /**
     *@description A recommendation to the site owner to use a modern TLS server signature
     */ theServerSignatureUsesShaWhichIs: 'The server signature uses SHA-1, which is obsolete. Enable a SHA-2 signature algorithm instead. (Note this is different from the signature in the certificate.)',
    /**
     *@description Summary phrase for a site that uses an outdated SSL settings (protocol, key exchange, or cipher).
     */ obsoleteConnectionSettings: 'obsolete connection settings',
    /**
     *@description A title of the 'Resources' action category
     */ resources: 'Resources',
    /**
     *@description Summary for page when there is active mixed content
     */ activeMixedContent: 'active mixed content',
    /**
     *@description Description for page when there is active mixed content
     */ youHaveRecentlyAllowedNonsecure: 'You have recently allowed non-secure content (such as scripts or iframes) to run on this site.',
    /**
     *@description Summary for page when there is mixed content
     */ mixedContent: 'mixed content',
    /**
     *@description Description for page when there is mixed content
     */ thisPageIncludesHttpResources: 'This page includes HTTP resources.',
    /**
     *@description Summary for page when there is a non-secure form
     */ nonsecureForm: 'non-secure form',
    /**
     *@description Description for page when there is a non-secure form
     */ thisPageIncludesAFormWithA: 'This page includes a form with a non-secure "action" attribute.',
    /**
     *@description Summary for the page when it contains active content with certificate error
     */ activeContentWithCertificate: 'active content with certificate errors',
    /**
     *@description Description for the page when it contains active content with certificate error
     */ youHaveRecentlyAllowedContent: 'You have recently allowed content loaded with certificate errors (such as scripts or iframes) to run on this site.',
    /**
     *@description Summary for page when there is active content with certificate errors
     */ contentWithCertificateErrors: 'content with certificate errors',
    /**
     *@description Description for page when there is content with certificate errors
     */ thisPageIncludesResourcesThat: 'This page includes resources that were loaded with certificate errors.',
    /**
     *@description Summary for page when all resources are served securely
     */ allServedSecurely: 'all served securely',
    /**
     *@description Description for page when all resources are served securely
     */ allResourcesOnThisPageAreServed: 'All resources on this page are served securely.',
    /**
     *@description Text in Security Panel of the Security panel
     */ blockedMixedContent: 'Blocked mixed content',
    /**
     *@description Text in Security Panel of the Security panel
     */ yourPageRequestedNonsecure: 'Your page requested non-secure resources that were blocked.',
    /**
     *@description Refresh prompt text content in Security Panel of the Security panel
     */ reloadThePageToRecordRequestsFor: 'Reload the page to record requests for HTTP resources.',
    /**
     * @description Link text in the Security Panel. Clicking the link navigates the user to the
     * Network panel. Requests refers to network requests. Each request is a piece of data transmitted
     * from the current user's browser to a remote server.
     */ viewDRequestsInNetworkPanel: '{n, plural, =1 {View # request in Network Panel} other {View # requests in Network Panel}}',
    /**
     *@description Text for the origin of something
     */ origin: 'Origin',
    /**
     *@description Text in Security Panel of the Security panel
     */ viewRequestsInNetworkPanel: 'View requests in Network Panel',
    /**
     *@description Text for security or network protocol
     */ protocol: 'Protocol',
    /**
     *@description Text in the Security panel that refers to how the TLS handshake
     *established encryption keys.
     */ keyExchange: 'Key exchange',
    /**
     *@description Text in Security Panel that refers to how the TLS handshake
     *encrypted data.
     */ cipher: 'Cipher',
    /**
     *@description Text in Security Panel that refers to the signature algorithm
     *used by the server for authenticate in the TLS handshake.
     */ serverSignature: 'Server signature',
    /**
     *@description Text in Security Panel that refers to whether the ClientHello
     *message in the TLS handshake was encrypted.
     */ encryptedClientHello: 'Encrypted ClientHello',
    /**
     *@description Sct div text content in Security Panel of the Security panel
     */ certificateTransparency: 'Certificate Transparency',
    /**
     *@description Text that refers to the subject of a security certificate
     */ subject: 'Subject',
    /**
     *@description Text to show since when an item is valid
     */ validFrom: 'Valid from',
    /**
     *@description Text to indicate the expiry date
     */ validUntil: 'Valid until',
    /**
     *@description Text for the issuer of an item
     */ issuer: 'Issuer',
    /**
     *@description Text in Security Panel of the Security panel
     */ openFullCertificateDetails: 'Open full certificate details',
    /**
     *@description Text in Security Panel of the Security panel
     */ sct: 'SCT',
    /**
     *@description Text in Security Panel of the Security panel
     */ logName: 'Log name',
    /**
     *@description Text in Security Panel of the Security panel
     */ logId: 'Log ID',
    /**
     *@description Text in Security Panel of the Security panel
     */ validationStatus: 'Validation status',
    /**
     *@description Text for the source of something
     */ source: 'Source',
    /**
     * @description Label for a date/time string in the Security panel. It indicates the time at which
     * a security certificate was issued (created by an authority and distributed).
     */ issuedAt: 'Issued at',
    /**
     *@description Text in Security Panel of the Security panel
     */ hashAlgorithm: 'Hash algorithm',
    /**
     *@description Text in Security Panel of the Security panel
     */ signatureAlgorithm: 'Signature algorithm',
    /**
     *@description Text in Security Panel of the Security panel
     */ signatureData: 'Signature data',
    /**
     *@description Toggle scts details link text content in Security Panel of the Security panel
     */ showFullDetails: 'Show full details',
    /**
     *@description Toggle scts details link text content in Security Panel of the Security panel
     */ hideFullDetails: 'Hide full details',
    /**
     *@description Text in Security Panel of the Security panel
     */ thisRequestCompliesWithChromes: 'This request complies with `Chrome`\'s Certificate Transparency policy.',
    /**
     *@description Text in Security Panel of the Security panel
     */ thisRequestDoesNotComplyWith: 'This request does not comply with `Chrome`\'s Certificate Transparency policy.',
    /**
     *@description Text in Security Panel of the Security panel
     */ thisResponseWasLoadedFromCache: 'This response was loaded from cache. Some security details might be missing.',
    /**
     *@description Text in Security Panel of the Security panel
     */ theSecurityDetailsAboveAreFrom: 'The security details above are from the first inspected response.',
    /**
     *@description Main summary for where the site has a non-cryptographic secure origin.
     */ thisOriginIsANonhttpsSecure: 'This origin is a non-HTTPS secure origin.',
    /**
     *@description Text in Security Panel of the Security panel
     */ yourConnectionToThisOriginIsNot: 'Your connection to this origin is not secure.',
    /**
     *@description No info div text content in Security Panel of the Security panel
     */ noSecurityInformation: 'No security information',
    /**
     *@description Text in Security Panel of the Security panel
     */ noSecurityDetailsAreAvailableFor: 'No security details are available for this origin.',
    /**
     *@description San div text content in Security Panel of the Security panel
     */ na: '(n/a)',
    /**
     *@description Text to show less content
     */ showLess: 'Show less',
    /**
     *@description Truncated santoggle text content in Security Panel of the Security panel
     *@example {2} PH1
     */ showMoreSTotal: 'Show more ({PH1} total)',
    /**
     *@description Shown when a field refers to an option that is unknown to the frontend.
     */ unknownField: 'unknown',
    /**
     *@description Shown when a field refers to a TLS feature which was enabled.
     */ enabled: 'enabled'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/security/SecurityPanel.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var securityPanelInstance;
// See https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-signaturescheme
// This contains signature schemes supported by Chrome.
var SignatureSchemeStrings = new Map([
    // The full name for these schemes is RSASSA-PKCS1-v1_5, sometimes
    // "PKCS#1 v1.5", but those are very long, so let "RSA" vs "RSA-PSS"
    // disambiguate.
    [
        0x0201,
        'RSA with SHA-1'
    ],
    [
        0x0401,
        'RSA with SHA-256'
    ],
    [
        0x0501,
        'RSA with SHA-384'
    ],
    [
        0x0601,
        'RSA with SHA-512'
    ],
    // We omit the curve from these names because in TLS 1.2 these code points
    // were not specific to a curve. Saying "P-256" for a server that used a P-384
    // key with SHA-256 in TLS 1.2 would be confusing.
    [
        0x0403,
        'ECDSA with SHA-256'
    ],
    [
        0x0503,
        'ECDSA with SHA-384'
    ],
    [
        0x0804,
        'RSA-PSS with SHA-256'
    ],
    [
        0x0805,
        'RSA-PSS with SHA-384'
    ],
    [
        0x0806,
        'RSA-PSS with SHA-512'
    ]
]);
var LOCK_ICON_NAME = 'lock';
var WARNING_ICON_NAME = 'warning';
var INFO_ICON_NAME = 'info';
function getSecurityStateIconForDetailedView(securityState, className) {
    var iconName;
    switch(securityState){
        case "neutral" /* Protocol.Security.SecurityState.Neutral */ :
        case "insecure" /* Protocol.Security.SecurityState.Insecure */ :
        case "insecure-broken" /* Protocol.Security.SecurityState.InsecureBroken */ :
            iconName = WARNING_ICON_NAME;
            break;
        case "secure" /* Protocol.Security.SecurityState.Secure */ :
            iconName = LOCK_ICON_NAME;
            break;
        case "info" /* Protocol.Security.SecurityState.Info */ :
        case "unknown" /* Protocol.Security.SecurityState.Unknown */ :
            iconName = INFO_ICON_NAME;
            break;
    }
    return _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create(iconName, className);
}
function getSecurityStateIconForOverview(securityState, className) {
    var iconName;
    switch(securityState){
        case "unknown" /* Protocol.Security.SecurityState.Unknown */ :
        case "neutral" /* Protocol.Security.SecurityState.Neutral */ :
            iconName = INFO_ICON_NAME;
            break;
        case "insecure" /* Protocol.Security.SecurityState.Insecure */ :
        case "insecure-broken" /* Protocol.Security.SecurityState.InsecureBroken */ :
            iconName = WARNING_ICON_NAME;
            break;
        case "secure" /* Protocol.Security.SecurityState.Secure */ :
            iconName = LOCK_ICON_NAME;
            break;
        case "info" /* Protocol.Security.SecurityState.Info */ :
            throw new Error("Unexpected security state ".concat(securityState));
    }
    return _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create(iconName, className);
}
var SecurityPanel = /*#__PURE__*/ function(_UI_Panel_PanelWithSidebar) {
    "use strict";
    _inherits(SecurityPanel, _UI_Panel_PanelWithSidebar);
    var _super = _create_super(SecurityPanel);
    function SecurityPanel() {
        _class_call_check(this, SecurityPanel);
        var _this;
        _this = _super.call(this, 'security');
        _define_property(_assert_this_initialized(_this), "mainView", void 0);
        _define_property(_assert_this_initialized(_this), "sidebarMainViewElement", void 0);
        _define_property(_assert_this_initialized(_this), "sidebarTree", void 0);
        _define_property(_assert_this_initialized(_this), "lastResponseReceivedForLoaderId", void 0);
        _define_property(_assert_this_initialized(_this), "origins", void 0);
        _define_property(_assert_this_initialized(_this), "filterRequestCounts", void 0);
        _define_property(_assert_this_initialized(_this), "visibleView", void 0);
        _define_property(_assert_this_initialized(_this), "eventListeners", void 0);
        _define_property(_assert_this_initialized(_this), "securityModel", void 0);
        _this.mainView = new SecurityMainView(_assert_this_initialized(_this));
        var title = document.createElement('span');
        title.classList.add('title');
        title.textContent = i18nString(UIStrings.overview);
        var getIconForSecurityState = function(securityState) {
            return getSecurityStateIconForOverview(securityState, "lock-icon lock-icon-".concat(securityState));
        };
        _this.sidebarMainViewElement = new SecurityPanelSidebarTreeElement({
            title: title,
            onSelect: _this.setVisibleView.bind(_assert_this_initialized(_this), _this.mainView),
            getIconForSecurityState: getIconForSecurityState,
            className: 'security-main-view-sidebar-tree-item'
        });
        _this.sidebarMainViewElement.tooltip = title.textContent;
        _this.sidebarTree = new SecurityPanelSidebarTree(_this.sidebarMainViewElement, _this.showOrigin.bind(_assert_this_initialized(_this)));
        _this.panelSidebarElement().appendChild(_this.sidebarTree.element);
        _this.lastResponseReceivedForLoaderId = new Map();
        _this.origins = new Map();
        _this.filterRequestCounts = new Map();
        _this.visibleView = null;
        _this.eventListeners = [];
        _this.securityModel = null;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeModels(_SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.SecurityModel, _assert_this_initialized(_this), {
            scoped: true
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.PrimaryPageChanged, _this.onPrimaryPageChanged, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(SecurityPanel, [
        {
            key: "updateVisibleSecurityState",
            value: function updateVisibleSecurityState(visibleSecurityState) {
                this.sidebarMainViewElement.setSecurityState(visibleSecurityState.securityState);
                this.mainView.updateVisibleSecurityState(visibleSecurityState);
            }
        },
        {
            key: "onVisibleSecurityStateChanged",
            value: function onVisibleSecurityStateChanged(param) {
                var data = param.data;
                this.updateVisibleSecurityState(data);
            }
        },
        {
            key: "selectAndSwitchToMainView",
            value: function selectAndSwitchToMainView() {
                // The sidebar element will trigger displaying the main view. Rather than making a redundant call to display the main view, we rely on this.
                this.sidebarMainViewElement.select(true);
            }
        },
        {
            key: "showOrigin",
            value: function showOrigin(origin) {
                var originState = this.origins.get(origin);
                if (!originState) {
                    return;
                }
                if (!originState.originView) {
                    originState.originView = new SecurityOriginView(this, origin, originState);
                }
                this.setVisibleView(originState.originView);
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(SecurityPanel.prototype), "wasShown", this).call(this);
                if (!this.visibleView) {
                    this.selectAndSwitchToMainView();
                }
            }
        },
        {
            key: "focus",
            value: function focus() {
                this.sidebarTree.focus();
            }
        },
        {
            key: "setVisibleView",
            value: function setVisibleView(view) {
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
        },
        {
            key: "onResponseReceived",
            value: function onResponseReceived(event) {
                var request = event.data.request;
                if (request.resourceType() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document && request.loaderId) {
                    this.lastResponseReceivedForLoaderId.set(request.loaderId, request);
                }
            }
        },
        {
            key: "processRequest",
            value: function processRequest(request) {
                var origin = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractOrigin(request.url());
                if (!origin) {
                    // We don't handle resources like data: URIs. Most of them don't affect the lock icon.
                    return;
                }
                var securityState = request.securityState();
                if (request.mixedContentType === "blockable" /* Protocol.Security.MixedContentType.Blockable */  || request.mixedContentType === "optionally-blockable" /* Protocol.Security.MixedContentType.OptionallyBlockable */ ) {
                    securityState = "insecure" /* Protocol.Security.SecurityState.Insecure */ ;
                }
                var originState = this.origins.get(origin);
                if (originState) {
                    if ((0,_SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.securityStateCompare)(securityState, originState.securityState) < 0) {
                        originState.securityState = securityState;
                        var securityDetails = request.securityDetails();
                        if (securityDetails) {
                            originState.securityDetails = securityDetails;
                        }
                        this.sidebarTree.updateOrigin(origin, securityState);
                        if (originState.originView) {
                            originState.originView.setSecurityState(securityState);
                        }
                    }
                } else {
                    // This stores the first security details we see for an origin, but we should
                    // eventually store a (deduplicated) list of all the different security
                    // details we have seen. https://crbug.com/503170
                    var newOriginState = {
                        securityState: securityState,
                        securityDetails: request.securityDetails(),
                        loadedFromCache: request.cached(),
                        originView: undefined
                    };
                    this.origins.set(origin, newOriginState);
                    this.sidebarTree.addOrigin(origin, securityState);
                // Don't construct the origin view yet (let it happen lazily).
                }
            }
        },
        {
            key: "onRequestFinished",
            value: function onRequestFinished(event) {
                var request = event.data;
                this.updateFilterRequestCounts(request);
                this.processRequest(request);
            }
        },
        {
            key: "updateFilterRequestCounts",
            value: function updateFilterRequestCounts(request) {
                if (request.mixedContentType === "none" /* Protocol.Security.MixedContentType.None */ ) {
                    return;
                }
                var filterKey = "all" /* NetworkForward.UIFilter.MixedContentFilterValues.All */ ;
                if (request.wasBlocked()) {
                    filterKey = "blocked" /* NetworkForward.UIFilter.MixedContentFilterValues.Blocked */ ;
                } else if (request.mixedContentType === "blockable" /* Protocol.Security.MixedContentType.Blockable */ ) {
                    filterKey = "block-overridden" /* NetworkForward.UIFilter.MixedContentFilterValues.BlockOverridden */ ;
                } else if (request.mixedContentType === "optionally-blockable" /* Protocol.Security.MixedContentType.OptionallyBlockable */ ) {
                    filterKey = "displayed" /* NetworkForward.UIFilter.MixedContentFilterValues.Displayed */ ;
                }
                var currentCount = this.filterRequestCounts.get(filterKey);
                if (!currentCount) {
                    this.filterRequestCounts.set(filterKey, 1);
                } else {
                    this.filterRequestCounts.set(filterKey, currentCount + 1);
                }
                this.mainView.refreshExplanations();
            }
        },
        {
            key: "filterRequestCount",
            value: function filterRequestCount(filterKey) {
                return this.filterRequestCounts.get(filterKey) || 0;
            }
        },
        {
            key: "modelAdded",
            value: function modelAdded(securityModel) {
                if (securityModel.target() !== securityModel.target().outermostTarget()) {
                    return;
                }
                this.securityModel = securityModel;
                var resourceTreeModel = securityModel.resourceTreeModel();
                var networkManager = securityModel.networkManager();
                if (this.eventListeners.length) {
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.eventListeners);
                }
                this.eventListeners = [
                    securityModel.addEventListener(_SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.Events.VisibleSecurityStateChanged, this.onVisibleSecurityStateChanged, this),
                    resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.InterstitialShown, this.onInterstitialShown, this),
                    resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.InterstitialHidden, this.onInterstitialHidden, this),
                    networkManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Events.ResponseReceived, this.onResponseReceived, this),
                    networkManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Events.RequestFinished, this.onRequestFinished, this)
                ];
                if (resourceTreeModel.isInterstitialShowing) {
                    this.onInterstitialShown();
                }
            }
        },
        {
            key: "modelRemoved",
            value: function modelRemoved(securityModel) {
                if (this.securityModel !== securityModel) {
                    return;
                }
                this.securityModel = null;
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.eventListeners);
            }
        },
        {
            key: "onPrimaryPageChanged",
            value: function onPrimaryPageChanged(event) {
                var frame = event.data.frame;
                var request = this.lastResponseReceivedForLoaderId.get(frame.loaderId);
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
                var origin = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractOrigin(request ? request.url() : frame.url);
                this.sidebarTree.setMainOrigin(origin);
                if (request) {
                    this.processRequest(request);
                }
            }
        },
        {
            key: "onInterstitialShown",
            value: function onInterstitialShown() {
                // The panel might have been displaying the origin view on the
                // previously loaded page. When showing an interstitial, switch
                // back to the Overview view.
                this.selectAndSwitchToMainView();
                this.sidebarTree.toggleOriginsList(true);
            }
        },
        {
            key: "onInterstitialHidden",
            value: function onInterstitialHidden() {
                this.sidebarTree.toggleOriginsList(false);
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null
                };
                var forceNew = opts.forceNew;
                if (!securityPanelInstance || forceNew) {
                    securityPanelInstance = new SecurityPanel();
                }
                return securityPanelInstance;
            }
        },
        {
            key: "createCertificateViewerButtonForOrigin",
            value: function createCertificateViewerButtonForOrigin(text, origin) {
                var certificateButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextButton(text, function() {
                    var _ref = _async_to_generator(function(e) {
                        var names;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    e.consume();
                                    return [
                                        4,
                                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.MultitargetNetworkManager.instance().getCertificate(origin)
                                    ];
                                case 1:
                                    names = _state.sent();
                                    if (names.length > 0) {
                                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.showCertificateViewer(names);
                                    }
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return function(e) {
                        return _ref.apply(this, arguments);
                    };
                }(), {
                    className: 'origin-button',
                    jslogContext: 'security.view-certificate-for-origin',
                    title: text
                });
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsButton(certificateButton);
                return certificateButton;
            }
        },
        {
            key: "createCertificateViewerButtonForCert",
            value: function createCertificateViewerButtonForCert(text, names) {
                var certificateButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextButton(text, function(e) {
                    e.consume();
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.showCertificateViewer(names);
                }, {
                    className: 'origin-button',
                    jslogContext: 'security.view-certificate'
                });
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsButton(certificateButton);
                return certificateButton;
            }
        },
        {
            key: "createHighlightedUrl",
            value: function createHighlightedUrl(url, securityState) {
                var schemeSeparator = '://';
                var index = url.indexOf(schemeSeparator);
                // If the separator is not found, just display the text without highlighting.
                if (index === -1) {
                    var text = document.createElement('span');
                    text.textContent = url;
                    return text;
                }
                var highlightedUrl = document.createElement('span');
                highlightedUrl.classList.add('highlighted-url');
                var scheme = url.substr(0, index);
                var content = url.substr(index + schemeSeparator.length);
                highlightedUrl.createChild('span', 'url-scheme-' + securityState).textContent = scheme;
                highlightedUrl.createChild('span', 'url-scheme-separator').textContent = schemeSeparator;
                highlightedUrl.createChild('span').textContent = content;
                return highlightedUrl;
            }
        }
    ]);
    return SecurityPanel;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Panel.PanelWithSidebar);
var SecurityPanelSidebarTree = /*#__PURE__*/ function(_UI_TreeOutline_TreeOutlineInShadow) {
    "use strict";
    _inherits(SecurityPanelSidebarTree, _UI_TreeOutline_TreeOutlineInShadow);
    var _super = _create_super(SecurityPanelSidebarTree);
    function SecurityPanelSidebarTree(mainViewElement, showOriginInPanel) {
        _class_call_check(this, SecurityPanelSidebarTree);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "showOriginInPanel", void 0);
        _define_property(_assert_this_initialized(_this), "mainOrigin", void 0);
        _define_property(_assert_this_initialized(_this), "originGroupTitles", void 0);
        _define_property(_assert_this_initialized(_this), "originGroups", void 0);
        _define_property(_assert_this_initialized(_this), "elementsByOrigin", void 0);
        _define_property(_assert_this_initialized(_this), "mainViewReloadMessage", void 0);
        _this.appendChild(mainViewElement);
        _this.registerCSSFiles([
            _lockIcon_css_js__WEBPACK_IMPORTED_MODULE_8__["default"],
            _sidebar_css_js__WEBPACK_IMPORTED_MODULE_12__["default"]
        ]);
        _this.showOriginInPanel = showOriginInPanel;
        _this.mainOrigin = null;
        _this.originGroupTitles = new Map([
            [
                OriginGroup.MainOrigin,
                i18nString(UIStrings.mainOrigin)
            ],
            [
                OriginGroup.NonSecure,
                i18nString(UIStrings.nonsecureOrigins)
            ],
            [
                OriginGroup.Secure,
                i18nString(UIStrings.secureOrigins)
            ],
            [
                OriginGroup.Unknown,
                i18nString(UIStrings.unknownCanceled)
            ]
        ]);
        _this.originGroups = new Map();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.values(OriginGroup)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var group = _step.value;
                var element = _this.createOriginGroupElement(_this.originGroupTitles.get(group));
                _this.originGroups.set(group, element);
                _this.appendChild(element);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        _this.mainViewReloadMessage = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement(i18nString(UIStrings.reloadToViewDetails));
        _this.mainViewReloadMessage.selectable = false;
        _this.mainViewReloadMessage.listItemElement.classList.add('security-main-view-reload-message');
        var treeElement = _this.originGroups.get(OriginGroup.MainOrigin);
        treeElement.appendChild(_this.mainViewReloadMessage);
        _this.clearOriginGroups();
        _this.elementsByOrigin = new Map();
        return _this;
    }
    _create_class(SecurityPanelSidebarTree, [
        {
            key: "originGroupTitle",
            value: function originGroupTitle(originGroup) {
                return this.originGroupTitles.get(originGroup);
            }
        },
        {
            key: "originGroupElement",
            value: function originGroupElement(originGroup) {
                return this.originGroups.get(originGroup);
            }
        },
        {
            key: "createOriginGroupElement",
            value: function createOriginGroupElement(originGroupTitle) {
                var originGroup = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement(originGroupTitle, true);
                originGroup.selectable = false;
                originGroup.setCollapsible(false);
                originGroup.expand();
                originGroup.listItemElement.classList.add('security-sidebar-origins');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(originGroup.childrenListElement, originGroupTitle);
                return originGroup;
            }
        },
        {
            key: "toggleOriginsList",
            value: function toggleOriginsList(hidden) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.originGroups.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var element = _step.value;
                        element.hidden = hidden;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "addOrigin",
            value: function addOrigin(origin, securityState) {
                this.mainViewReloadMessage.hidden = true;
                var getIconForSecurityState = function(securityState) {
                    return getSecurityStateIconForDetailedView(securityState, "security-property security-property-".concat(securityState));
                };
                var originElement = new SecurityPanelSidebarTreeElement({
                    title: SecurityPanel.createHighlightedUrl(origin, securityState),
                    onSelect: this.showOriginInPanel.bind(this, origin),
                    getIconForSecurityState: getIconForSecurityState,
                    className: 'security-sidebar-tree-item'
                });
                originElement.tooltip = origin;
                this.elementsByOrigin.set(origin, originElement);
                this.updateOrigin(origin, securityState);
            }
        },
        {
            key: "setMainOrigin",
            value: function setMainOrigin(origin) {
                this.mainOrigin = origin;
            }
        },
        {
            key: "updateOrigin",
            value: function updateOrigin(origin, securityState) {
                var originElement = this.elementsByOrigin.get(origin);
                originElement.setSecurityState(securityState);
                var newParent;
                if (origin === this.mainOrigin) {
                    newParent = this.originGroups.get(OriginGroup.MainOrigin);
                    if (securityState === "secure" /* Protocol.Security.SecurityState.Secure */ ) {
                        newParent.title = i18nString(UIStrings.mainOriginSecure);
                    } else {
                        newParent.title = i18nString(UIStrings.mainOriginNonsecure);
                    }
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(newParent.childrenListElement, newParent.title);
                } else {
                    switch(securityState){
                        case "secure" /* Protocol.Security.SecurityState.Secure */ :
                            newParent = this.originGroupElement(OriginGroup.Secure);
                            break;
                        case "unknown" /* Protocol.Security.SecurityState.Unknown */ :
                            newParent = this.originGroupElement(OriginGroup.Unknown);
                            break;
                        default:
                            newParent = this.originGroupElement(OriginGroup.NonSecure);
                            break;
                    }
                }
                var oldParent = originElement.parent;
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
        },
        {
            key: "clearOriginGroups",
            value: function clearOriginGroups() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.originGroups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), originGroup = _step_value[0], originGroupElement = _step_value[1];
                        if (originGroup === OriginGroup.MainOrigin) {
                            for(var i = originGroupElement.childCount() - 1; i > 0; i--){
                                originGroupElement.removeChildAtIndex(i);
                            }
                            originGroupElement.title = this.originGroupTitle(OriginGroup.MainOrigin);
                            originGroupElement.hidden = false;
                            this.mainViewReloadMessage.hidden = false;
                        } else {
                            originGroupElement.removeChildren();
                            originGroupElement.hidden = true;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "clearOrigins",
            value: function clearOrigins() {
                this.clearOriginGroups();
                this.elementsByOrigin.clear();
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {}
        }
    ]);
    return SecurityPanelSidebarTree;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeOutlineInShadow);
var OriginGroup;
(function(OriginGroup) {
    OriginGroup["MainOrigin"] = "MainOrigin";
    OriginGroup["NonSecure"] = "NonSecure";
    OriginGroup["Secure"] = "Secure";
    OriginGroup["Unknown"] = "Unknown";
})(OriginGroup || (OriginGroup = {}));
var _getIconForSecurityState = /*#__PURE__*/ new WeakMap();
var SecurityPanelSidebarTreeElement = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(SecurityPanelSidebarTreeElement, _UI_TreeOutline_TreeElement);
    var _super = _create_super(SecurityPanelSidebarTreeElement);
    function SecurityPanelSidebarTreeElement(options) {
        _class_call_check(this, SecurityPanelSidebarTreeElement);
        var _this;
        _this = _super.call(this, '', false);
        _define_property(_assert_this_initialized(_this), "selectCallback", void 0);
        _define_property(_assert_this_initialized(_this), "securityStateInternal", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _getIconForSecurityState, {
            writable: true,
            value: void 0
        });
        _this.selectCallback = options.onSelect;
        _this.listItemElement.appendChild(options.title);
        _this.listItemElement.classList.add(options.className);
        _class_private_field_set(_assert_this_initialized(_this), _getIconForSecurityState, options.getIconForSecurityState);
        _this.securityStateInternal = null;
        _this.setSecurityState("unknown" /* Protocol.Security.SecurityState.Unknown */ );
        return _this;
    }
    _create_class(SecurityPanelSidebarTreeElement, [
        {
            key: "setSecurityState",
            value: function setSecurityState(newSecurityState) {
                this.securityStateInternal = newSecurityState;
                var icon = _class_private_field_get(this, _getIconForSecurityState).call(this, newSecurityState);
                if (icon) {
                    this.setLeadingIcons([
                        icon
                    ]);
                }
            }
        },
        {
            key: "securityState",
            value: function securityState() {
                return this.securityStateInternal;
            }
        },
        {
            key: "onselect",
            value: function onselect() {
                this.selectCallback();
                return true;
            }
        }
    ]);
    return SecurityPanelSidebarTreeElement;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement);
var SecurityMainView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(SecurityMainView, _UI_Widget_VBox);
    var _super = _create_super(SecurityMainView);
    function SecurityMainView(panel) {
        _class_call_check(this, SecurityMainView);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "panel", void 0);
        _define_property(_assert_this_initialized(_this), "summarySection", void 0);
        _define_property(_assert_this_initialized(_this), "securityExplanationsMain", void 0);
        _define_property(_assert_this_initialized(_this), "securityExplanationsExtra", void 0);
        _define_property(_assert_this_initialized(_this), "lockSpectrum", void 0);
        _define_property(_assert_this_initialized(_this), "summaryText", void 0);
        _define_property(_assert_this_initialized(_this), "explanations", void 0);
        _define_property(_assert_this_initialized(_this), "securityState", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('security.main-view')));
        _this.setMinimumSize(200, 100);
        _this.contentElement.classList.add('security-main-view');
        _this.panel = panel;
        _this.summarySection = _this.contentElement.createChild('div', 'security-summary');
        // Info explanations should appear after all others.
        _this.securityExplanationsMain = _this.contentElement.createChild('div', 'security-explanation-list security-explanations-main');
        _this.securityExplanationsExtra = _this.contentElement.createChild('div', 'security-explanation-list security-explanations-extra');
        // Fill the security summary section.
        var summaryDiv = _this.summarySection.createChild('div', 'security-summary-section-title');
        summaryDiv.textContent = i18nString(UIStrings.securityOverview);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsHeading(summaryDiv, 1);
        var lockSpectrum = _this.summarySection.createChild('div', 'lock-spectrum');
        _this.lockSpectrum = new Map([
            [
                "secure" /* Protocol.Security.SecurityState.Secure */ ,
                lockSpectrum.appendChild(getSecurityStateIconForOverview("secure" /* Protocol.Security.SecurityState.Secure */ , 'lock-icon lock-icon-secure'))
            ],
            [
                "neutral" /* Protocol.Security.SecurityState.Neutral */ ,
                lockSpectrum.appendChild(getSecurityStateIconForOverview("neutral" /* Protocol.Security.SecurityState.Neutral */ , 'lock-icon lock-icon-neutral'))
            ],
            [
                "insecure" /* Protocol.Security.SecurityState.Insecure */ ,
                lockSpectrum.appendChild(getSecurityStateIconForOverview("insecure" /* Protocol.Security.SecurityState.Insecure */ , 'lock-icon lock-icon-insecure'))
            ]
        ]);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(_this.getLockSpectrumDiv("secure" /* Protocol.Security.SecurityState.Secure */ ), i18nString(UIStrings.secure));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(_this.getLockSpectrumDiv("neutral" /* Protocol.Security.SecurityState.Neutral */ ), i18nString(UIStrings.info));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(_this.getLockSpectrumDiv("insecure" /* Protocol.Security.SecurityState.Insecure */ ), i18nString(UIStrings.notSecure));
        _this.summarySection.createChild('div', 'triangle-pointer-container').createChild('div', 'triangle-pointer-wrapper').createChild('div', 'triangle-pointer');
        _this.summaryText = _this.summarySection.createChild('div', 'security-summary-text');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsHeading(_this.summaryText, 2);
        _this.explanations = null;
        _this.securityState = null;
        return _this;
    }
    _create_class(SecurityMainView, [
        {
            key: "getLockSpectrumDiv",
            value: function getLockSpectrumDiv(securityState) {
                var element = this.lockSpectrum.get(securityState);
                if (!element) {
                    throw new Error("Invalid argument: ".concat(securityState));
                }
                return element;
            }
        },
        {
            key: "addExplanation",
            value: function addExplanation(parent, explanation) {
                var explanationSection = parent.createChild('div', 'security-explanation');
                explanationSection.classList.add('security-explanation-' + explanation.securityState);
                var icon = getSecurityStateIconForDetailedView(explanation.securityState, 'security-property security-property-' + explanation.securityState);
                explanationSection.appendChild(icon);
                var text = explanationSection.createChild('div', 'security-explanation-text');
                var explanationHeader = text.createChild('div', 'security-explanation-title');
                if (explanation.title) {
                    explanationHeader.createChild('span').textContent = explanation.title + ' - ';
                    explanationHeader.createChild('span', 'security-explanation-title-' + explanation.securityState).textContent = explanation.summary;
                } else {
                    explanationHeader.textContent = explanation.summary;
                }
                text.createChild('div').textContent = explanation.description;
                if (explanation.certificate.length) {
                    text.appendChild(SecurityPanel.createCertificateViewerButtonForCert(i18nString(UIStrings.viewCertificate), explanation.certificate));
                }
                if (explanation.recommendations && explanation.recommendations.length) {
                    var recommendationList = text.createChild('ul', 'security-explanation-recommendations');
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = explanation.recommendations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var recommendation = _step.value;
                            recommendationList.createChild('li').textContent = recommendation;
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
                return text;
            }
        },
        {
            key: "updateVisibleSecurityState",
            value: function updateVisibleSecurityState(visibleSecurityState) {
                // Remove old state.
                // It's safe to call this even when this.securityState is undefined.
                this.summarySection.classList.remove('security-summary-' + this.securityState);
                // Add new state.
                this.securityState = visibleSecurityState.securityState;
                this.summarySection.classList.add('security-summary-' + this.securityState);
                // Update the color and title of the triangle icon in the lock spectrum to
                // match the security state.
                if (this.securityState === "insecure" /* Protocol.Security.SecurityState.Insecure */ ) {
                    this.getLockSpectrumDiv("insecure" /* Protocol.Security.SecurityState.Insecure */ ).classList.add('lock-icon-insecure');
                    this.getLockSpectrumDiv("insecure" /* Protocol.Security.SecurityState.Insecure */ ).classList.remove('lock-icon-insecure-broken');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(this.getLockSpectrumDiv("insecure" /* Protocol.Security.SecurityState.Insecure */ ), i18nString(UIStrings.notSecure));
                } else if (this.securityState === "insecure-broken" /* Protocol.Security.SecurityState.InsecureBroken */ ) {
                    this.getLockSpectrumDiv("insecure" /* Protocol.Security.SecurityState.Insecure */ ).classList.add('lock-icon-insecure-broken');
                    this.getLockSpectrumDiv("insecure" /* Protocol.Security.SecurityState.Insecure */ ).classList.remove('lock-icon-insecure');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(this.getLockSpectrumDiv("insecure" /* Protocol.Security.SecurityState.Insecure */ ), i18nString(UIStrings.notSecureBroken));
                }
                var _this_getSecuritySummaryAndExplanations = this.getSecuritySummaryAndExplanations(visibleSecurityState), summary = _this_getSecuritySummaryAndExplanations.summary, explanations = _this_getSecuritySummaryAndExplanations.explanations;
                // Use override summary if present, otherwise use base explanation
                this.summaryText.textContent = summary || _SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.SummaryMessages[this.securityState]();
                this.explanations = this.orderExplanations(explanations);
                this.refreshExplanations();
            }
        },
        {
            key: "getSecuritySummaryAndExplanations",
            value: function getSecuritySummaryAndExplanations(visibleSecurityState) {
                var securityState = visibleSecurityState.securityState, securityStateIssueIds = visibleSecurityState.securityStateIssueIds;
                var summary;
                var explanations = [];
                summary = this.explainSafetyTipSecurity(visibleSecurityState, summary, explanations);
                if (securityStateIssueIds.includes('malicious-content')) {
                    summary = i18nString(UIStrings.thisPageIsDangerousFlaggedBy);
                    // Always insert SafeBrowsing explanation at the front.
                    explanations.unshift(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.SecurityStyleExplanation("insecure" /* Protocol.Security.SecurityState.Insecure */ , undefined, i18nString(UIStrings.flaggedByGoogleSafeBrowsing), i18nString(UIStrings.toCheckThisPagesStatusVisit)));
                } else if (securityStateIssueIds.includes('is-error-page') && (visibleSecurityState.certificateSecurityState === null || visibleSecurityState.certificateSecurityState.certificateNetworkError === null)) {
                    summary = i18nString(UIStrings.thisIsAnErrorPage);
                    // In the case of a non cert error page, we usually don't have a
                    // certificate, connection, or content that needs to be explained, e.g. in
                    // the case of a net error, so we can early return.
                    return {
                        summary: summary,
                        explanations: explanations
                    };
                } else if (securityState === "insecure-broken" /* Protocol.Security.SecurityState.InsecureBroken */  && securityStateIssueIds.includes('scheme-is-not-cryptographic')) {
                    summary = summary || i18nString(UIStrings.thisPageIsInsecureUnencrypted);
                }
                if (securityStateIssueIds.includes('scheme-is-not-cryptographic')) {
                    if (securityState === "neutral" /* Protocol.Security.SecurityState.Neutral */  && !securityStateIssueIds.includes('insecure-origin')) {
                        summary = i18nString(UIStrings.thisPageHasANonhttpsSecureOrigin);
                    }
                    return {
                        summary: summary,
                        explanations: explanations
                    };
                }
                this.explainCertificateSecurity(visibleSecurityState, explanations);
                this.explainConnectionSecurity(visibleSecurityState, explanations);
                this.explainContentSecurity(visibleSecurityState, explanations);
                return {
                    summary: summary,
                    explanations: explanations
                };
            }
        },
        {
            key: "explainSafetyTipSecurity",
            value: function explainSafetyTipSecurity(visibleSecurityState, summary, explanations) {
                var securityStateIssueIds = visibleSecurityState.securityStateIssueIds, safetyTipInfo = visibleSecurityState.safetyTipInfo;
                var currentExplanations = [];
                if (securityStateIssueIds.includes('bad_reputation')) {
                    var formatedDescription = "".concat(i18nString(UIStrings.chromeHasDeterminedThatThisSiteS), "\n\n").concat(i18nString(UIStrings.ifYouBelieveThisIsShownIn));
                    currentExplanations.push({
                        summary: i18nString(UIStrings.thisPageIsSuspicious),
                        description: formatedDescription
                    });
                } else if (securityStateIssueIds.includes('lookalike') && safetyTipInfo && safetyTipInfo.safeUrl) {
                    var hostname = new URL(safetyTipInfo.safeUrl).hostname;
                    var hostnamePlaceholder = {
                        PH1: hostname
                    };
                    var formatedDescriptionSafety = "".concat(i18nString(UIStrings.thisSitesHostnameLooksSimilarToP, hostnamePlaceholder), "\n\n").concat(i18nString(UIStrings.ifYouBelieveThisIsShownInErrorSafety));
                    currentExplanations.push({
                        summary: i18nString(UIStrings.possibleSpoofingUrl),
                        description: formatedDescriptionSafety
                    });
                }
                if (currentExplanations.length > 0) {
                    // To avoid overwriting SafeBrowsing's title, set the main summary only if
                    // it's empty. The title set here can be overridden by later checks (e.g.
                    // bad HTTP).
                    summary = summary || i18nString(UIStrings.thisPageIsSuspiciousFlaggedBy);
                    explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.SecurityStyleExplanation("insecure" /* Protocol.Security.SecurityState.Insecure */ , undefined, currentExplanations[0].summary, currentExplanations[0].description));
                }
                return summary;
            }
        },
        {
            key: "explainCertificateSecurity",
            value: function explainCertificateSecurity(visibleSecurityState, explanations) {
                var certificateSecurityState = visibleSecurityState.certificateSecurityState, securityStateIssueIds = visibleSecurityState.securityStateIssueIds;
                var title = i18nString(UIStrings.certificate);
                if (certificateSecurityState && certificateSecurityState.certificateHasSha1Signature) {
                    var explanationSummary = i18nString(UIStrings.insecureSha);
                    var description = i18nString(UIStrings.theCertificateChainForThisSite);
                    if (certificateSecurityState.certificateHasWeakSignature) {
                        explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.SecurityStyleExplanation("insecure" /* Protocol.Security.SecurityState.Insecure */ , title, explanationSummary, description, certificateSecurityState.certificate, "none" /* Protocol.Security.MixedContentType.None */ ));
                    } else {
                        explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.SecurityStyleExplanation("neutral" /* Protocol.Security.SecurityState.Neutral */ , title, explanationSummary, description, certificateSecurityState.certificate, "none" /* Protocol.Security.MixedContentType.None */ ));
                    }
                }
                if (certificateSecurityState && securityStateIssueIds.includes('cert-missing-subject-alt-name')) {
                    explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.SecurityStyleExplanation("insecure" /* Protocol.Security.SecurityState.Insecure */ , title, i18nString(UIStrings.subjectAlternativeNameMissing), i18nString(UIStrings.theCertificateForThisSiteDoesNot), certificateSecurityState.certificate, "none" /* Protocol.Security.MixedContentType.None */ ));
                }
                if (certificateSecurityState && certificateSecurityState.certificateNetworkError !== null) {
                    explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.SecurityStyleExplanation("insecure" /* Protocol.Security.SecurityState.Insecure */ , title, i18nString(UIStrings.missing), i18nString(UIStrings.thisSiteIsMissingAValidTrusted, {
                        PH1: certificateSecurityState.certificateNetworkError
                    }), certificateSecurityState.certificate, "none" /* Protocol.Security.MixedContentType.None */ ));
                } else if (certificateSecurityState && !certificateSecurityState.certificateHasSha1Signature) {
                    explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.SecurityStyleExplanation("secure" /* Protocol.Security.SecurityState.Secure */ , title, i18nString(UIStrings.validAndTrusted), i18nString(UIStrings.theConnectionToThisSiteIsUsingA, {
                        PH1: certificateSecurityState.issuer
                    }), certificateSecurityState.certificate, "none" /* Protocol.Security.MixedContentType.None */ ));
                }
                if (securityStateIssueIds.includes('pkp-bypassed')) {
                    explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.SecurityStyleExplanation("info" /* Protocol.Security.SecurityState.Info */ , title, i18nString(UIStrings.publickeypinningBypassed), i18nString(UIStrings.publickeypinningWasBypassedByA)));
                }
                if (certificateSecurityState && certificateSecurityState.isCertificateExpiringSoon()) {
                    explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.SecurityStyleExplanation("info" /* Protocol.Security.SecurityState.Info */ , undefined, i18nString(UIStrings.certificateExpiresSoon), i18nString(UIStrings.theCertificateForThisSiteExpires)));
                }
            }
        },
        {
            key: "explainConnectionSecurity",
            value: function explainConnectionSecurity(visibleSecurityState, explanations) {
                var certificateSecurityState = visibleSecurityState.certificateSecurityState;
                if (!certificateSecurityState) {
                    return;
                }
                var title = i18nString(UIStrings.connection);
                if (certificateSecurityState.modernSSL) {
                    explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.SecurityStyleExplanation("secure" /* Protocol.Security.SecurityState.Secure */ , title, i18nString(UIStrings.secureConnectionSettings), i18nString(UIStrings.theConnectionToThisSiteIs, {
                        PH1: certificateSecurityState.protocol,
                        PH2: certificateSecurityState.getKeyExchangeName(),
                        PH3: certificateSecurityState.getCipherFullName()
                    })));
                    return;
                }
                var recommendations = [];
                if (certificateSecurityState.obsoleteSslProtocol) {
                    recommendations.push(i18nString(UIStrings.sIsObsoleteEnableTlsOrLater, {
                        PH1: certificateSecurityState.protocol
                    }));
                }
                if (certificateSecurityState.obsoleteSslKeyExchange) {
                    recommendations.push(i18nString(UIStrings.rsaKeyExchangeIsObsoleteEnableAn));
                }
                if (certificateSecurityState.obsoleteSslCipher) {
                    recommendations.push(i18nString(UIStrings.sIsObsoleteEnableAnAesgcmbased, {
                        PH1: certificateSecurityState.cipher
                    }));
                }
                if (certificateSecurityState.obsoleteSslSignature) {
                    recommendations.push(i18nString(UIStrings.theServerSignatureUsesShaWhichIs));
                }
                explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.SecurityStyleExplanation("info" /* Protocol.Security.SecurityState.Info */ , title, i18nString(UIStrings.obsoleteConnectionSettings), i18nString(UIStrings.theConnectionToThisSiteIs, {
                    PH1: certificateSecurityState.protocol,
                    PH2: certificateSecurityState.getKeyExchangeName(),
                    PH3: certificateSecurityState.getCipherFullName()
                }), undefined, undefined, recommendations));
            }
        },
        {
            key: "explainContentSecurity",
            value: function explainContentSecurity(visibleSecurityState, explanations) {
                // Add the secure explanation unless there is an issue.
                var addSecureExplanation = true;
                var title = i18nString(UIStrings.resources);
                var securityStateIssueIds = visibleSecurityState.securityStateIssueIds;
                if (securityStateIssueIds.includes('ran-mixed-content')) {
                    addSecureExplanation = false;
                    explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.SecurityStyleExplanation("insecure" /* Protocol.Security.SecurityState.Insecure */ , title, i18nString(UIStrings.activeMixedContent), i18nString(UIStrings.youHaveRecentlyAllowedNonsecure), [], "blockable" /* Protocol.Security.MixedContentType.Blockable */ ));
                }
                if (securityStateIssueIds.includes('displayed-mixed-content')) {
                    addSecureExplanation = false;
                    explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.SecurityStyleExplanation("neutral" /* Protocol.Security.SecurityState.Neutral */ , title, i18nString(UIStrings.mixedContent), i18nString(UIStrings.thisPageIncludesHttpResources), [], "optionally-blockable" /* Protocol.Security.MixedContentType.OptionallyBlockable */ ));
                }
                if (securityStateIssueIds.includes('contained-mixed-form')) {
                    addSecureExplanation = false;
                    explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.SecurityStyleExplanation("neutral" /* Protocol.Security.SecurityState.Neutral */ , title, i18nString(UIStrings.nonsecureForm), i18nString(UIStrings.thisPageIncludesAFormWithA)));
                }
                if (visibleSecurityState.certificateSecurityState === null || visibleSecurityState.certificateSecurityState.certificateNetworkError === null) {
                    if (securityStateIssueIds.includes('ran-content-with-cert-error')) {
                        addSecureExplanation = false;
                        explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.SecurityStyleExplanation("insecure" /* Protocol.Security.SecurityState.Insecure */ , title, i18nString(UIStrings.activeContentWithCertificate), i18nString(UIStrings.youHaveRecentlyAllowedContent)));
                    }
                    if (securityStateIssueIds.includes('displayed-content-with-cert-errors')) {
                        addSecureExplanation = false;
                        explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.SecurityStyleExplanation("neutral" /* Protocol.Security.SecurityState.Neutral */ , title, i18nString(UIStrings.contentWithCertificateErrors), i18nString(UIStrings.thisPageIncludesResourcesThat)));
                    }
                }
                if (addSecureExplanation) {
                    if (!securityStateIssueIds.includes('scheme-is-not-cryptographic')) {
                        explanations.push(new _SecurityModel_js__WEBPACK_IMPORTED_MODULE_11__.SecurityStyleExplanation("secure" /* Protocol.Security.SecurityState.Secure */ , title, i18nString(UIStrings.allServedSecurely), i18nString(UIStrings.allResourcesOnThisPageAreServed)));
                    }
                }
            }
        },
        {
            key: "orderExplanations",
            value: function orderExplanations(explanations) {
                if (explanations.length === 0) {
                    return explanations;
                }
                var securityStateOrder = [
                    "insecure" /* Protocol.Security.SecurityState.Insecure */ ,
                    "neutral" /* Protocol.Security.SecurityState.Neutral */ ,
                    "secure" /* Protocol.Security.SecurityState.Secure */ ,
                    "info" /* Protocol.Security.SecurityState.Info */ 
                ];
                var orderedExplanations = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    var _loop = function() {
                        var securityState = _step.value;
                        var _orderedExplanations;
                        (_orderedExplanations = orderedExplanations).push.apply(_orderedExplanations, _to_consumable_array(explanations.filter(function(explanation) {
                            return explanation.securityState === securityState;
                        })));
                    };
                    for(var _iterator = securityStateOrder[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return orderedExplanations;
            }
        },
        {
            key: "refreshExplanations",
            value: function refreshExplanations() {
                this.securityExplanationsMain.removeChildren();
                this.securityExplanationsExtra.removeChildren();
                if (!this.explanations) {
                    return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.explanations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var explanation = _step.value;
                        if (explanation.securityState === "info" /* Protocol.Security.SecurityState.Info */ ) {
                            this.addExplanation(this.securityExplanationsExtra, explanation);
                        } else {
                            switch(explanation.mixedContentType){
                                case "blockable" /* Protocol.Security.MixedContentType.Blockable */ :
                                    this.addMixedContentExplanation(this.securityExplanationsMain, explanation, "block-overridden" /* NetworkForward.UIFilter.MixedContentFilterValues.BlockOverridden */ );
                                    break;
                                case "optionally-blockable" /* Protocol.Security.MixedContentType.OptionallyBlockable */ :
                                    this.addMixedContentExplanation(this.securityExplanationsMain, explanation, "displayed" /* NetworkForward.UIFilter.MixedContentFilterValues.Displayed */ );
                                    break;
                                default:
                                    this.addExplanation(this.securityExplanationsMain, explanation);
                                    break;
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                if (this.panel.filterRequestCount("blocked" /* NetworkForward.UIFilter.MixedContentFilterValues.Blocked */ ) > 0) {
                    var explanation1 = {
                        securityState: "info" /* Protocol.Security.SecurityState.Info */ ,
                        summary: i18nString(UIStrings.blockedMixedContent),
                        description: i18nString(UIStrings.yourPageRequestedNonsecure),
                        mixedContentType: "blockable" /* Protocol.Security.MixedContentType.Blockable */ ,
                        certificate: [],
                        title: ''
                    };
                    this.addMixedContentExplanation(this.securityExplanationsMain, explanation1, "blocked" /* NetworkForward.UIFilter.MixedContentFilterValues.Blocked */ );
                }
            }
        },
        {
            key: "addMixedContentExplanation",
            value: function addMixedContentExplanation(parent, explanation, filterKey) {
                var element = this.addExplanation(parent, explanation);
                var filterRequestCount = this.panel.filterRequestCount(filterKey);
                if (!filterRequestCount) {
                    // Network instrumentation might not have been enabled for the page
                    // load, so the security panel does not necessarily know a count of
                    // individual mixed requests at this point. Prompt them to refresh
                    // instead of pointing them to the Network panel to get prompted
                    // to refresh.
                    var refreshPrompt = element.createChild('div', 'security-mixed-content');
                    refreshPrompt.textContent = i18nString(UIStrings.reloadThePageToRecordRequestsFor);
                    return;
                }
                var requestsAnchor = element.createChild('button', 'security-mixed-content devtools-link text-button link-style');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsLink(requestsAnchor);
                requestsAnchor.tabIndex = 0;
                requestsAnchor.textContent = i18nString(UIStrings.viewDRequestsInNetworkPanel, {
                    n: filterRequestCount
                });
                requestsAnchor.addEventListener('click', this.showNetworkFilter.bind(this, filterKey));
            }
        },
        {
            key: "showNetworkFilter",
            value: function showNetworkFilter(filterKey, e) {
                e.consume();
                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_4__.UIFilter.UIRequestFilter.filters([
                    {
                        filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_4__.UIFilter.FilterType.MixedContent,
                        filterValue: filterKey
                    }
                ]));
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(SecurityMainView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _lockIcon_css_js__WEBPACK_IMPORTED_MODULE_8__["default"],
                    _mainView_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]
                ]);
            }
        }
    ]);
    return SecurityMainView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox);
var SecurityOriginView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(SecurityOriginView, _UI_Widget_VBox);
    var _super = _create_super(SecurityOriginView);
    function SecurityOriginView(panel, origin, originState) {
        _class_call_check(this, SecurityOriginView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "panel", void 0);
        _define_property(_assert_this_initialized(_this), "originLockIcon", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('security.origin-view')));
        _this.panel = panel;
        _this.setMinimumSize(200, 100);
        _this.element.classList.add('security-origin-view');
        var titleSection = _this.element.createChild('div', 'title-section');
        var titleDiv = titleSection.createChild('div', 'title-section-header');
        titleDiv.textContent = i18nString(UIStrings.origin);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsHeading(titleDiv, 1);
        var originDisplay = titleSection.createChild('div', 'origin-display');
        _this.originLockIcon = originDisplay.createChild('span');
        var icon = getSecurityStateIconForDetailedView(originState.securityState, "security-property security-property-".concat(originState.securityState));
        _this.originLockIcon.appendChild(icon);
        originDisplay.appendChild(SecurityPanel.createHighlightedUrl(origin, originState.securityState));
        var originNetworkDiv = titleSection.createChild('div', 'view-network-button');
        var originNetworkButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextButton(i18nString(UIStrings.viewRequestsInNetworkPanel), function(event) {
            event.consume();
            var parsedURL = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(origin);
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_4__.UIFilter.UIRequestFilter.filters([
                {
                    filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_4__.UIFilter.FilterType.Domain,
                    filterValue: parsedURL.host
                },
                {
                    filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_4__.UIFilter.FilterType.Scheme,
                    filterValue: parsedURL.scheme
                }
            ]));
        }, {
            jslogContext: 'reveal-in-network'
        });
        originNetworkDiv.appendChild(originNetworkButton);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsLink(originNetworkButton);
        if (originState.securityDetails) {
            var connectionSection = _this.element.createChild('div', 'origin-view-section');
            var connectionDiv = connectionSection.createChild('div', 'origin-view-section-title');
            connectionDiv.textContent = i18nString(UIStrings.connection);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsHeading(connectionDiv, 2);
            var table = new SecurityDetailsTable();
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
            } else if (originState.securityDetails.keyExchange) {
                table.addRow(i18nString(UIStrings.keyExchange), originState.securityDetails.keyExchange);
            } else if (originState.securityDetails.keyExchangeGroup) {
                table.addRow(i18nString(UIStrings.keyExchange), originState.securityDetails.keyExchangeGroup);
            }
            if (originState.securityDetails.serverSignatureAlgorithm) {
                // See https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-signaturescheme
                var sigString = SignatureSchemeStrings.get(originState.securityDetails.serverSignatureAlgorithm);
                sigString !== null && sigString !== void 0 ? sigString : sigString = i18nString(UIStrings.unknownField) + ' (' + originState.securityDetails.serverSignatureAlgorithm + ')';
                table.addRow(i18nString(UIStrings.serverSignature), sigString);
            }
            table.addRow(i18nString(UIStrings.cipher), originState.securityDetails.cipher + (originState.securityDetails.mac ? ' with ' + originState.securityDetails.mac : ''));
            if (originState.securityDetails.encryptedClientHello) {
                table.addRow(i18nString(UIStrings.encryptedClientHello), i18nString(UIStrings.enabled));
            }
            // Create the certificate section outside the callback, so that it appears in the right place.
            var certificateSection = _this.element.createChild('div', 'origin-view-section');
            var certificateDiv = certificateSection.createChild('div', 'origin-view-section-title');
            certificateDiv.textContent = i18nString(UIStrings.certificate);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsHeading(certificateDiv, 2);
            var sctListLength = originState.securityDetails.signedCertificateTimestampList.length;
            var ctCompliance = originState.securityDetails.certificateTransparencyCompliance;
            var sctSection;
            if (sctListLength || ctCompliance !== "unknown" /* Protocol.Network.CertificateTransparencyCompliance.Unknown */ ) {
                // Create the Certificate Transparency section outside the callback, so that it appears in the right place.
                sctSection = _this.element.createChild('div', 'origin-view-section');
                var sctDiv = sctSection.createChild('div', 'origin-view-section-title');
                sctDiv.textContent = i18nString(UIStrings.certificateTransparency);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsHeading(sctDiv, 2);
            }
            var sanDiv = _this.createSanDiv(originState.securityDetails.sanList);
            var validFromString = new Date(1000 * originState.securityDetails.validFrom).toUTCString();
            var validUntilString = new Date(1000 * originState.securityDetails.validTo).toUTCString();
            table = new SecurityDetailsTable();
            certificateSection.appendChild(table.element());
            table.addRow(i18nString(UIStrings.subject), originState.securityDetails.subjectName);
            table.addRow(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('SAN'), sanDiv);
            table.addRow(i18nString(UIStrings.validFrom), validFromString);
            table.addRow(i18nString(UIStrings.validUntil), validUntilString);
            table.addRow(i18nString(UIStrings.issuer), originState.securityDetails.issuer);
            table.addRow('', SecurityPanel.createCertificateViewerButtonForOrigin(i18nString(UIStrings.openFullCertificateDetails), origin));
            if (!sctSection) {
                return _possible_constructor_return(_this);
            }
            // Show summary of SCT(s) of Certificate Transparency.
            var sctSummaryTable = new SecurityDetailsTable();
            sctSummaryTable.element().classList.add('sct-summary');
            sctSection.appendChild(sctSummaryTable.element());
            for(var i = 0; i < sctListLength; i++){
                var sct = originState.securityDetails.signedCertificateTimestampList[i];
                sctSummaryTable.addRow(i18nString(UIStrings.sct), sct.logDescription + ' (' + sct.origin + ', ' + sct.status + ')');
            }
            // Show detailed SCT(s) of Certificate Transparency.
            var sctTableWrapper = sctSection.createChild('div', 'sct-details');
            sctTableWrapper.classList.add('hidden');
            for(var i1 = 0; i1 < sctListLength; i1++){
                var sctTable = new SecurityDetailsTable();
                sctTableWrapper.appendChild(sctTable.element());
                var sct1 = originState.securityDetails.signedCertificateTimestampList[i1];
                sctTable.addRow(i18nString(UIStrings.logName), sct1.logDescription);
                sctTable.addRow(i18nString(UIStrings.logId), sct1.logId.replace(/(.{2})/g, '$1 '));
                sctTable.addRow(i18nString(UIStrings.validationStatus), sct1.status);
                sctTable.addRow(i18nString(UIStrings.source), sct1.origin);
                sctTable.addRow(i18nString(UIStrings.issuedAt), new Date(sct1.timestamp).toUTCString());
                sctTable.addRow(i18nString(UIStrings.hashAlgorithm), sct1.hashAlgorithm);
                sctTable.addRow(i18nString(UIStrings.signatureAlgorithm), sct1.signatureAlgorithm);
                sctTable.addRow(i18nString(UIStrings.signatureData), sct1.signatureData.replace(/(.{2})/g, '$1 '));
            }
            // Add link to toggle between displaying of the summary of the SCT(s) and the detailed SCT(s).
            if (sctListLength) {
                var toggleSctDetailsDisplay = function toggleSctDetailsDisplay() {
                    var buttonText;
                    var isDetailsShown = !sctTableWrapper.classList.contains('hidden');
                    if (isDetailsShown) {
                        buttonText = i18nString(UIStrings.showFullDetails);
                    } else {
                        buttonText = i18nString(UIStrings.hideFullDetails);
                    }
                    toggleSctsDetailsLink.textContent = buttonText;
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(toggleSctsDetailsLink, buttonText);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setExpanded(toggleSctsDetailsLink, !isDetailsShown);
                    sctSummaryTable.element().classList.toggle('hidden');
                    sctTableWrapper.classList.toggle('hidden');
                };
                var toggleSctsDetailsLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextButton(i18nString(UIStrings.showFullDetails), toggleSctDetailsDisplay, {
                    className: 'details-toggle',
                    jslogContext: 'security.toggle-scts-details'
                });
                sctSection.appendChild(toggleSctsDetailsLink);
            }
            switch(ctCompliance){
                case "compliant" /* Protocol.Network.CertificateTransparencyCompliance.Compliant */ :
                    sctSection.createChild('div', 'origin-view-section-notes').textContent = i18nString(UIStrings.thisRequestCompliesWithChromes);
                    break;
                case "not-compliant" /* Protocol.Network.CertificateTransparencyCompliance.NotCompliant */ :
                    sctSection.createChild('div', 'origin-view-section-notes').textContent = i18nString(UIStrings.thisRequestDoesNotComplyWith);
                    break;
                case "unknown" /* Protocol.Network.CertificateTransparencyCompliance.Unknown */ :
                    break;
            }
            var noteSection = _this.element.createChild('div', 'origin-view-section origin-view-notes');
            if (originState.loadedFromCache) {
                noteSection.createChild('div').textContent = i18nString(UIStrings.thisResponseWasLoadedFromCache);
            }
            noteSection.createChild('div').textContent = i18nString(UIStrings.theSecurityDetailsAboveAreFrom);
        } else if (originState.securityState === "secure" /* Protocol.Security.SecurityState.Secure */ ) {
            // If the security state is secure but there are no security details,
            // this means that the origin is a non-cryptographic secure origin, e.g.
            // chrome:// or about:.
            var secureSection = _this.element.createChild('div', 'origin-view-section');
            var secureDiv = secureSection.createChild('div', 'origin-view-section-title');
            secureDiv.textContent = i18nString(UIStrings.secure);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsHeading(secureDiv, 2);
            secureSection.createChild('div').textContent = i18nString(UIStrings.thisOriginIsANonhttpsSecure);
        } else if (originState.securityState !== "unknown" /* Protocol.Security.SecurityState.Unknown */ ) {
            var notSecureSection = _this.element.createChild('div', 'origin-view-section');
            var notSecureDiv = notSecureSection.createChild('div', 'origin-view-section-title');
            notSecureDiv.textContent = i18nString(UIStrings.notSecure);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsHeading(notSecureDiv, 2);
            notSecureSection.createChild('div').textContent = i18nString(UIStrings.yourConnectionToThisOriginIsNot);
        } else {
            var noInfoSection = _this.element.createChild('div', 'origin-view-section');
            var noInfoDiv = noInfoSection.createChild('div', 'origin-view-section-title');
            noInfoDiv.textContent = i18nString(UIStrings.noSecurityInformation);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsHeading(noInfoDiv, 2);
            noInfoSection.createChild('div').textContent = i18nString(UIStrings.noSecurityDetailsAreAvailableFor);
        }
        return _this;
    }
    _create_class(SecurityOriginView, [
        {
            key: "createSanDiv",
            value: function createSanDiv(sanList) {
                var sanDiv = document.createElement('div');
                if (sanList.length === 0) {
                    sanDiv.textContent = i18nString(UIStrings.na);
                    sanDiv.classList.add('empty-san');
                } else {
                    var truncatedNumToShow = 2;
                    var listIsTruncated = sanList.length > truncatedNumToShow + 1;
                    for(var i = 0; i < sanList.length; i++){
                        var span = sanDiv.createChild('span', 'san-entry');
                        span.textContent = sanList[i];
                        if (listIsTruncated && i >= truncatedNumToShow) {
                            span.classList.add('truncated-entry');
                        }
                    }
                    if (listIsTruncated) {
                        var toggleSANTruncation = function toggleSANTruncation() {
                            var isTruncated = sanDiv.classList.contains('truncated-san');
                            var buttonText;
                            if (isTruncated) {
                                sanDiv.classList.remove('truncated-san');
                                buttonText = i18nString(UIStrings.showLess);
                            } else {
                                sanDiv.classList.add('truncated-san');
                                buttonText = i18nString(UIStrings.showMoreSTotal, {
                                    PH1: sanList.length
                                });
                            }
                            truncatedSANToggle.textContent = buttonText;
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(truncatedSANToggle, buttonText);
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setExpanded(truncatedSANToggle, isTruncated);
                        };
                        var truncatedSANToggle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextButton(i18nString(UIStrings.showMoreSTotal, {
                            PH1: sanList.length
                        }), toggleSANTruncation, {
                            jslogContext: 'security.toggle-san-truncation'
                        });
                        sanDiv.appendChild(truncatedSANToggle);
                        toggleSANTruncation();
                    }
                }
                return sanDiv;
            }
        },
        {
            key: "setSecurityState",
            value: function setSecurityState(newSecurityState) {
                this.originLockIcon.removeChildren();
                var icon = getSecurityStateIconForDetailedView(newSecurityState, "security-property security-property-".concat(newSecurityState));
                this.originLockIcon.appendChild(icon);
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(SecurityOriginView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _originView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"],
                    _lockIcon_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]
                ]);
            }
        }
    ]);
    return SecurityOriginView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox);
var SecurityDetailsTable = /*#__PURE__*/ function() {
    "use strict";
    function SecurityDetailsTable() {
        _class_call_check(this, SecurityDetailsTable);
        _define_property(this, "elementInternal", void 0);
        this.elementInternal = document.createElement('table');
        this.elementInternal.classList.add('details-table');
    }
    _create_class(SecurityDetailsTable, [
        {
            key: "element",
            value: function element() {
                return this.elementInternal;
            }
        },
        {
            key: "addRow",
            value: function addRow(key, value) {
                var row = this.elementInternal.createChild('tr', 'details-table-row');
                row.createChild('td').textContent = key;
                var valueCell = row.createChild('td');
                if (typeof value === 'string') {
                    valueCell.textContent = value;
                } else {
                    valueCell.appendChild(value);
                }
            }
        }
    ]);
    return SecurityDetailsTable;
} //# sourceMappingURL=SecurityPanel.js.map
();


}),
"./panels/security/lockIcon.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.lock-icon,\n.security-property {\n  height: var(--sys-size-9);\n  width: var(--sys-size-9);\n}\n\n.lock-icon-secure {\n  color: var(--sys-color-green);\n}\n\n.lock-icon-insecure {\n  color: var(--sys-color-error);\n}\n\n.lock-icon-insecure-broken {\n  color: var(--sys-color-error);\n}\n\n.security-property-secure {\n  color: var(--sys-color-green);\n}\n\n.security-property-neutral {\n  color: var(--sys-color-error);\n}\n\n.security-property-insecure {\n  color: var(--sys-color-error);\n}\n\n.security-property-insecure-broken {\n  color: var(--sys-color-error);\n}\n\n.security-property-info {\n  color: var(--sys-color-on-surface-subtle);\n}\n\n.security-property-unknown {\n  color: var(--sys-color-on-surface-subtle);\n}\n\n.url-scheme-secure {\n  color: var(--sys-color-green);\n}\n\n.url-scheme-neutral,\n.url-scheme-insecure,\n.url-scheme-insecure-broken {\n  color: var(--sys-color-error);\n}\n\n/*# sourceURL=lockIcon.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/security/mainView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.devtools-link {\n  display: inline-block;\n}\n\n.security-main-view {\n  overflow-x: hidden;\n  overflow-y: auto;\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n.security-main-view > div {\n  flex-shrink: 0;\n}\n\n.security-summary-section-title {\n  font-size: 15px;\n  margin: 12px 16px;\n  user-select: text;\n}\n\n.lock-spectrum {\n  margin: 8px 16px;\n  display: flex;\n  align-items: flex-start;\n}\n\n.security-summary .lock-icon {\n  flex: none;\n  width: 16px;\n  height: 16px;\n  margin: 0;\n}\n/* Separate the middle icon from the other two. */\n\n.security-summary .lock-icon-neutral {\n  margin: 0 16px;\n}\n\n.security-summary:not(.security-summary-secure) .lock-icon-secure,\n.security-summary:not(.security-summary-neutral) .lock-icon-neutral,\n.security-summary:not(.security-summary-insecure) .lock-icon-insecure,\n.security-summary:not(.security-summary-insecure-broken) .lock-icon-insecure-broken {\n  color: var(--sys-color-state-disabled);\n}\n\n@media (forced-colors: active) {\n  .security-summary-neutral .lock-icon-neutral {\n    color: Highlight;\n  }\n\n  .security-summary:not(.security-summary-secure) .lock-icon-secure,\n  .security-summary:not(.security-summary-neutral) .lock-icon-neutral,\n  .security-summary:not(.security-summary-insecure) .lock-icon-insecure,\n  .security-summary:not(.security-summary-insecure-broken) .lock-icon-insecure-broken {\n    color: canvastext;\n  }\n}\n\n.triangle-pointer-container {\n  margin: 8px 24px 0;\n  padding: 0;\n}\n\n.triangle-pointer-wrapper {\n  /* Defaults for dynamic properties. */\n  transform: translateX(0);\n  transition: transform 0.3s;\n}\n\n.triangle-pointer {\n  width: 12px;\n  height: 12px;\n  margin-bottom: -6px;\n  margin-left: -6px;\n  transform: rotate(-45deg);\n  border-style: solid;\n  border-width: 1px 1px 0 0;\n  background: var(--sys-color-cdt-base-container);\n  border-color: var(--sys-color-neutral-outline);\n}\n\n.security-summary-secure .triangle-pointer-wrapper {\n  transform: translateX(0);\n}\n\n.security-summary-neutral .triangle-pointer-wrapper {\n  transform: translateX(32px);\n}\n\n.security-summary-insecure .triangle-pointer-wrapper {\n  transform: translateX(64px);\n}\n\n.security-summary-insecure-broken .triangle-pointer-wrapper {\n  transform: translateX(64px);\n}\n\n.security-summary-text {\n  padding: 16px 24px;\n  border-style: solid;\n  border-width: 1px 0;\n  font-size: 15px;\n  background: var(--sys-color-cdt-base-container);\n  border-color: var(--sys-color-neutral-outline);\n  user-select: text;\n}\n\n.security-summary-secure .triangle-pointer,\n.security-summary-secure .security-summary-text,\n.security-explanation-title-secure {\n  color: var(--sys-color-green);\n}\n\n.security-summary-insecure-broken .triangle-pointer,\n.security-summary-insecure-broken .security-summary-text,\n.security-explanation-title-neutral,\n.security-explanation-title-insecure,\n.security-explanation-title-insecure-broken {\n  color: var(--sys-color-error);\n}\n\n.security-explanation-list {\n  padding-bottom: 16px;\n}\n\n.security-explanation-list:empty {\n  border-bottom: none;\n  padding: 0;\n}\n\n.security-explanations-main {\n  margin-top: -5px;\n  background-color: var(--sys-color-cdt-base-container);\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n.security-explanations-extra {\n  background-color: transparent;\n}\n\n.security-explanation {\n  padding: 11px;\n  display: flex;\n  white-space: nowrap;\n  border: none;\n  color: var(--sys-color-token-subtle);\n}\n\n.security-explanation-text {\n  flex: auto;\n  white-space: normal;\n  max-width: 400px;\n}\n\n.origin-button {\n  margin-top: var(--sys-size-4);\n}\n\n.security-explanation .security-property {\n  flex: none;\n  width: 16px;\n  height: 16px;\n  margin-right: 16px;\n}\n\n.security-explanation-title {\n  color: var(--sys-color-token-subtle);\n  margin-top: 1px;\n  margin-bottom: 8px;\n}\n\n.security-mixed-content {\n  margin-top: 8px;\n}\n\n.security-explanation-recommendations {\n  padding-inline-start: 16px;\n}\n\n.security-explanation-recommendations > li {\n  margin-bottom: 4px;\n}\n\n/*# sourceURL=mainView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/security/originView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.title-section {\n  padding: 16px 0 24px;\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n.title-section-header {\n  padding-left: 16px;\n  padding-bottom: 10px;\n  font-size: 14px;\n}\n\n.security-origin-view {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  display: block;\n  user-select: text;\n}\n\n.security-origin-view .origin-view-section {\n  border-bottom: 1px solid var(--sys-color-divider);\n  padding: 12px 6px 12px  24px;\n  font-size: 12px;\n}\n\n.origin-view-notes {\n  margin-top: 2px;\n  color: var(--sys-color-token-subtle);\n}\n\n.origin-view-section-notes {\n  margin-top: 6px;\n  color: var(--sys-color-token-subtle);\n}\n\n.security-origin-view .origin-display {\n  font-size: 12px;\n  padding-left: var(--sys-size-8);\n  display: flex;\n  align-items: center;\n}\n\n.title-section > .view-network-button {\n  padding: 6px 0 0 16px;\n}\n\n.security-origin-view .origin-display devtools-icon {\n  width: var(--sys-size-8);\n  height: var(--sys-size-8);\n  margin-right: var(--sys-size-6);\n}\n\n.security-origin-view .origin-view-section-title {\n  margin-top: 4px;\n  margin-bottom: 4px;\n  font-weight: bold;\n}\n\n.security-origin-view .details-table {\n  border-spacing: 0;\n}\n\n.security-origin-view .details-table-row {\n  white-space: nowrap;\n  overflow: hidden;\n  line-height: 22px;\n  vertical-align: top;\n}\n\n.security-origin-view .details-table-row > td {\n  padding: 0;\n}\n\n.security-origin-view .details-table-row > td:first-child {\n  color: var(--sys-color-token-subtle);\n  width: calc(120px + 1em);\n  text-align: right;\n  padding-right: 1em;\n}\n\n.security-origin-view .details-table-row > td:nth-child(2) {\n  white-space: normal;\n}\n\n.security-origin-view .sct-details .details-table .details-table-row:last-child td:last-child {\n  border-bottom: 1px solid var(--sys-color-divider);\n  padding-bottom: 10px;\n}\n\n.security-origin-view .sct-details .details-table:last-child .details-table-row:last-child td:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n\n.security-origin-view .details-toggle {\n  margin-left: 126px;\n}\n\n.security-origin-view .sct-toggle {\n  margin-left: 145px;\n  padding-top: 5px;\n}\n\n.security-origin-view .details-table .empty-san {\n  color: var(--sys-color-state-disabled);\n}\n\n.security-origin-view .details-table .san-entry {\n  display: block;\n}\n\n.security-origin-view .truncated-san .truncated-entry {\n  display: none;\n}\n\n.origin-view-section:last-child {\n  border-bottom: none;\n}\n\n.devtools-link {\n  display: inline-flex;\n}\n\n/*# sourceURL=originView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/security/sidebar.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  overflow-x: auto;\n}\n\n.tree-outline-disclosure {\n  width: 100%;\n}\n\n.tree-outline {\n  padding: 0;\n\n  &:focus-visible {\n    box-shadow: none;\n  }\n}\n\n.tree-outline li {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 2px 5px;\n  overflow: hidden;\n  margin: 2px 0;\n  white-space: nowrap;\n\n  & .leading-icons {\n    margin-right: var(--sys-size-6);\n    flex: none;\n  }\n\n  & .tree-element-title,\n  .highlighted-url,\n  .title {\n    height: inherit;\n    align-content: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n}\n\n.tree-outline ol {\n  padding-left: 0;\n}\n\n.tree-outline li::before {\n  content: none;\n}\n\n.security-main-view-reload-message {\n  color: var(--sys-color-token-subtle);\n}\n\n.tree-outline .security-main-view-sidebar-tree-item,\n.tree-outline .security-sidebar-origins,\n.tree-outline li.security-sidebar-origins + .children > li {\n  height: var(--sys-size-12);\n  padding: 0 var(--sys-size-8) 0 var(--sys-size-7);\n  margin: 0 var(--sys-size-5) 0 0;\n}\n\n.tree-outline .security-main-view-sidebar-tree-item,\n.tree-outline li.security-sidebar-origins + .children > li:not(.security-main-view-reload-message) {\n  border-radius: 0 100px 100px 0;\n  position: relative;\n\n  &.selected {\n    color: var(--app-color-navigation-drawer-label-selected);\n    background-color: var(--app-color-navigation-drawer-background-selected);\n\n    & .lock-icon,\n    .security-property {\n      color: var(--app-color-navigation-drawer-label-selected);\n    }\n\n    & .url-scheme-secure,\n    .url-scheme-neutral,\n    .url-scheme-insecure,\n    .url-scheme-insecure-broken {\n      color: var(--app-color-navigation-drawer-label-selected);\n    }\n  }\n\n  &:active::before {\n    background-color: var(--sys-color-state-ripple-neutral-on-subtle);\n    mask-image: none;\n    content: "";\n    height: 100%;\n    width: 100%;\n    border-radius: inherit;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  &:focus-visible {\n    outline: 2px solid var(--sys-color-state-focus-ring);\n  }\n}\n\n@media (forced-colors: active) {\n  .tree-outline .security-main-view-sidebar-tree-item,\n  .tree-outline li.security-sidebar-origins + .children > li:not(.security-main-view-reload-message) {\n    &.selected {\n      color: HighlightText;\n      background-color: Highlight;\n\n      & .url-scheme-secure,\n      .url-scheme-neutral,\n      .url-scheme-insecure,\n      .url-scheme-insecure-broken {\n        color: HighlightText;\n      }\n    }\n  }\n}\n\n.security-main-view-reload-message,\n.tree-outline li.security-sidebar-origins {\n  margin: var(--sys-size-6) 0 0 0;\n  line-height: var(--sys-size-8);\n\n  &:hover:not(:has(span[is="dt-checkbox"])) .selection {\n    background: transparent;\n  }\n}\n\n/*# sourceURL=sidebar.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);