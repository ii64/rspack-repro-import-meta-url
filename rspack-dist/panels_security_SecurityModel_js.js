"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_security_SecurityModel_js"], {
"./panels/security/SecurityModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CertificateSecurityState: function() { return CertificateSecurityState; },
  Events: function() { return Events; },
  PageVisibleSecurityState: function() { return PageVisibleSecurityState; },
  SecurityModel: function() { return SecurityModel; },
  SecurityStyleExplanation: function() { return SecurityStyleExplanation; },
  SummaryMessages: function() { return SummaryMessages; },
  securityStateCompare: function() { return securityStateCompare; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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


var UIStrings = {
    /**
     *@description Text in Security Panel of the Security panel
     */ theSecurityOfThisPageIsUnknown: 'The security of this page is unknown.',
    /**
     *@description Text in Security Panel of the Security panel
     */ thisPageIsNotSecure: 'This page is not secure.',
    /**
     *@description Text in Security Panel of the Security panel
     */ thisPageIsSecureValidHttps: 'This page is secure (valid HTTPS).',
    /**
     *@description Text in Security Panel of the Security panel
     */ thisPageIsNotSecureBrokenHttps: 'This page is not secure (broken HTTPS).',
    /**
     *@description Description of an SSL cipher that contains a separate (bulk) cipher and MAC.
     *@example {AES_256_CBC} PH1
     *@example {HMAC-SHA1} PH2
     */ cipherWithMAC: '{PH1} with {PH2}',
    /**
     *@description Description of an SSL Key and its Key Exchange Group.
     *@example {ECDHE_RSA} PH1
     *@example {X25519} PH2
     */ keyExchangeWithGroup: '{PH1} with {PH2}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/security/SecurityModel.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
var SecurityModel = /*#__PURE__*/ function(_SDK_SDKModel_SDKModel) {
    "use strict";
    _inherits(SecurityModel, _SDK_SDKModel_SDKModel);
    var _super = _create_super(SecurityModel);
    function SecurityModel(target) {
        _class_call_check(this, SecurityModel);
        var _this;
        _this = _super.call(this, target);
        _define_property(_assert_this_initialized(_this), "dispatcher", void 0);
        _define_property(_assert_this_initialized(_this), "securityAgent", void 0);
        _this.dispatcher = new SecurityDispatcher(_assert_this_initialized(_this));
        _this.securityAgent = target.securityAgent();
        target.registerSecurityDispatcher(_this.dispatcher);
        void _this.securityAgent.invoke_enable();
        return _this;
    }
    _create_class(SecurityModel, [
        {
            key: "resourceTreeModel",
            value: function resourceTreeModel() {
                return this.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
            }
        },
        {
            key: "networkManager",
            value: function networkManager() {
                return this.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.NetworkManager);
            }
        }
    ]);
    return SecurityModel;
}(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel);
function securityStateCompare(a, b) {
    var SECURITY_STATE_ORDER = [
        "info" /* Protocol.Security.SecurityState.Info */ ,
        "insecure-broken" /* Protocol.Security.SecurityState.InsecureBroken */ ,
        "insecure" /* Protocol.Security.SecurityState.Insecure */ ,
        "neutral" /* Protocol.Security.SecurityState.Neutral */ ,
        "secure" /* Protocol.Security.SecurityState.Secure */ ,
        "unknown" /* Protocol.Security.SecurityState.Unknown */ 
    ];
    return SECURITY_STATE_ORDER.indexOf(a) - SECURITY_STATE_ORDER.indexOf(b);
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel.register(SecurityModel, {
    capabilities: 512 /* SDK.Target.Capability.Security */ ,
    autostart: false
});
var Events;
(function(Events) {
    Events["VisibleSecurityStateChanged"] = "VisibleSecurityStateChanged";
})(Events || (Events = {}));
var _obj;
var SummaryMessages = (_obj = {}, _define_property(_obj, "unknown" /* Protocol.Security.SecurityState.Unknown */ , i18nLazyString(UIStrings.theSecurityOfThisPageIsUnknown)), _define_property(_obj, "insecure" /* Protocol.Security.SecurityState.Insecure */ , i18nLazyString(UIStrings.thisPageIsNotSecure)), _define_property(_obj, "neutral" /* Protocol.Security.SecurityState.Neutral */ , i18nLazyString(UIStrings.thisPageIsNotSecure)), _define_property(_obj, "secure" /* Protocol.Security.SecurityState.Secure */ , i18nLazyString(UIStrings.thisPageIsSecureValidHttps)), _define_property(_obj, "insecure-broken" /* Protocol.Security.SecurityState.InsecureBroken */ , i18nLazyString(UIStrings.thisPageIsNotSecureBrokenHttps)), _obj);
var PageVisibleSecurityState = function PageVisibleSecurityState(securityState, certificateSecurityState, safetyTipInfo, securityStateIssueIds) {
    "use strict";
    _class_call_check(this, PageVisibleSecurityState);
    _define_property(this, "securityState", void 0);
    _define_property(this, "certificateSecurityState", void 0);
    _define_property(this, "safetyTipInfo", void 0);
    _define_property(this, "securityStateIssueIds", void 0);
    this.securityState = securityState;
    this.certificateSecurityState = certificateSecurityState ? new CertificateSecurityState(certificateSecurityState) : null;
    this.safetyTipInfo = safetyTipInfo ? new SafetyTipInfo(safetyTipInfo) : null;
    this.securityStateIssueIds = securityStateIssueIds;
};
var CertificateSecurityState = /*#__PURE__*/ function() {
    "use strict";
    function CertificateSecurityState(certificateSecurityState) {
        _class_call_check(this, CertificateSecurityState);
        _define_property(this, "protocol", void 0);
        _define_property(this, "keyExchange", void 0);
        _define_property(this, "keyExchangeGroup", void 0);
        _define_property(this, "cipher", void 0);
        _define_property(this, "mac", void 0);
        _define_property(this, "certificate", void 0);
        _define_property(this, "subjectName", void 0);
        _define_property(this, "issuer", void 0);
        _define_property(this, "validFrom", void 0);
        _define_property(this, "validTo", void 0);
        _define_property(this, "certificateNetworkError", void 0);
        _define_property(this, "certificateHasWeakSignature", void 0);
        _define_property(this, "certificateHasSha1Signature", void 0);
        _define_property(this, "modernSSL", void 0);
        _define_property(this, "obsoleteSslProtocol", void 0);
        _define_property(this, "obsoleteSslKeyExchange", void 0);
        _define_property(this, "obsoleteSslCipher", void 0);
        _define_property(this, "obsoleteSslSignature", void 0);
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
    _create_class(CertificateSecurityState, [
        {
            key: "isCertificateExpiringSoon",
            value: function isCertificateExpiringSoon() {
                var expiryDate = new Date(this.validTo * 1000).getTime();
                return expiryDate < new Date(Date.now()).setHours(48) && expiryDate > Date.now();
            }
        },
        {
            key: "getKeyExchangeName",
            value: function getKeyExchangeName() {
                if (this.keyExchangeGroup) {
                    return this.keyExchange ? i18nString(UIStrings.keyExchangeWithGroup, {
                        PH1: this.keyExchange,
                        PH2: this.keyExchangeGroup
                    }) : this.keyExchangeGroup;
                }
                return this.keyExchange;
            }
        },
        {
            key: "getCipherFullName",
            value: function getCipherFullName() {
                return this.mac ? i18nString(UIStrings.cipherWithMAC, {
                    PH1: this.cipher,
                    PH2: this.mac
                }) : this.cipher;
            }
        }
    ]);
    return CertificateSecurityState;
}();
var SafetyTipInfo = function SafetyTipInfo(safetyTipInfo) {
    "use strict";
    _class_call_check(this, SafetyTipInfo);
    _define_property(this, "safetyTipStatus", void 0);
    _define_property(this, "safeUrl", void 0);
    this.safetyTipStatus = safetyTipInfo.safetyTipStatus;
    this.safeUrl = safetyTipInfo.safeUrl || null;
};
var SecurityStyleExplanation = function SecurityStyleExplanation(securityState, title, summary, description) {
    "use strict";
    var certificate = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], mixedContentType = arguments.length > 5 && arguments[5] !== void 0 /* Protocol.Security.MixedContentType.None */  ? arguments[5] : "none", recommendations = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [];
    _class_call_check(this, SecurityStyleExplanation);
    _define_property(this, "securityState", void 0);
    _define_property(this, "title", void 0);
    _define_property(this, "summary", void 0);
    _define_property(this, "description", void 0);
    _define_property(this, "certificate", void 0);
    _define_property(this, "mixedContentType", void 0);
    _define_property(this, "recommendations", void 0);
    this.securityState = securityState;
    this.title = title;
    this.summary = summary;
    this.description = description;
    this.certificate = certificate;
    this.mixedContentType = mixedContentType;
    this.recommendations = recommendations;
};
var SecurityDispatcher = /*#__PURE__*/ function() {
    "use strict";
    function SecurityDispatcher(model) {
        _class_call_check(this, SecurityDispatcher);
        _define_property(this, "model", void 0);
        this.model = model;
    }
    _create_class(SecurityDispatcher, [
        {
            key: "securityStateChanged",
            value: function securityStateChanged(_event) {}
        },
        {
            key: "visibleSecurityStateChanged",
            value: function visibleSecurityStateChanged(param) {
                var visibleSecurityState = param.visibleSecurityState;
                var pageVisibleSecurityState = new PageVisibleSecurityState(visibleSecurityState.securityState, visibleSecurityState.certificateSecurityState || null, visibleSecurityState.safetyTipInfo || null, visibleSecurityState.securityStateIssueIds);
                this.model.dispatchEventToListeners(Events.VisibleSecurityStateChanged, pageVisibleSecurityState);
            }
        },
        {
            key: "certificateError",
            value: function certificateError(_event) {}
        }
    ]);
    return SecurityDispatcher;
} //# sourceMappingURL=SecurityModel.js.map
();


}),

}]);