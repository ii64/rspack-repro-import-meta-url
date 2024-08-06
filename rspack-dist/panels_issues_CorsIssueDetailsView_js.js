"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_issues_CorsIssueDetailsView_js"], {
"./panels/issues/CorsIssueDetailsView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CorsIssueDetailsView: function() { return CorsIssueDetailsView; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
     *@description Label for number of affected resources indication in issue view
     */ nRequests: '{n, plural, =1 {# request} other {# requests}}',
    /**
     *@description Value for the status column in SharedArrayBuffer issues
     */ warning: 'warning',
    /**
     *@description The kind of resolution for a mixed content issue
     */ blocked: 'blocked',
    /**
     *@description Text for the status column in the item list in the CORS issue details view
     */ status: 'Status',
    /**
     *@description Text for the column showing the associated network request in the item list in the CORS issue details view
     */ request: 'Request',
    /**
     *@description Text for the column showing the resource's address in the item list in the CORS issue details view
     */ resourceAddressSpace: 'Resource Address',
    /**
     *@description Text for the column showing the address of the resource load initiator in the item list in the CORS issue details view
     */ initiatorAddressSpace: 'Initiator Address',
    /**
     *@description Text for the status of the initiator context
     */ secure: 'secure',
    /**
     *@description Text for the status of the initiator context
     */ insecure: 'insecure',
    /**
     *@description Title for a column showing the status of the initiator context. The initiator context is either secure or insecure depending on whether it was loaded via HTTP or HTTPS.
     */ initiatorContext: 'Initiator Context',
    /**
     *@description Title for a column in the affected resources for a CORS issue showing a link to the associated preflight request in case the preflight request caused the issue.
     */ preflightRequestIfProblematic: 'Preflight Request (if problematic)',
    /**
     *@description Title for a column in the affected resources for a CORS issue showing a link to the associated preflight request.
     */ preflightRequest: 'Preflight Request',
    /**
     *@description Title for a column in the affected resources for a CORS issue showing the name of the problematic HTTP response header.
     */ header: 'Header',
    /**
     *@description Title for a column in the affected resources for a CORS issue showing the problem associated with the resource.
     */ problem: 'Problem',
    /**
     *@description Title for a column in the affected resources for a CORS issue showing the value that was invalid and caused the problem if it is available.
     */ invalidValue: 'Invalid Value (if available)',
    /**
     *@description Content for the problem column in the affected resources table for a CORS issue that indicates that a response header was missing.
     */ problemMissingHeader: 'Missing Header',
    /**
     *@description Content for the problem column in the affected resources table for a CORS issue that indicates that a response header contained multiple values.
     */ problemMultipleValues: 'Multiple Values',
    /**
     *@description Content for the problem column in the affected resources table for a CORS issue that indicates that a response header contained an invalid value.
     */ problemInvalidValue: 'Invalid Value',
    /**
     *@description Content for the problem column in the affected resources table for a CORS issue that indicates that the response to the preflight request was a redirect.
     */ preflightDisallowedRedirect: 'Response to preflight was a redirect',
    /**
     *@description Content for the problem column in the affected resources table for a CORS issue that indicates that the HTTP status the preflight request was not successful.
     */ preflightInvalidStatus: 'HTTP status of preflight request didn\'t indicate success',
    /**
     *@description Title for a column in the affected resources for a CORS issue showing the origin that was allowed according to CORS headers.
     */ allowedOrigin: 'Allowed Origin (from header)',
    /**
     *@description Title for a column in the affected resources for a CORS issue showing the value of the Access-Control-Allow-Credentials response header.
     */ allowCredentialsValueFromHeader: '`Access-Control-Allow-Credentials` Header Value',
    /**
     *@description Title for a column in the affected resources for a CORS issue showing the request method that was disallowed.
     */ disallowedRequestMethod: 'Disallowed Request Method',
    /**
     *@description Title for a column in the affected resources for a CORS issue showing the request header that was disallowed.
     */ disallowedRequestHeader: 'Disallowed Request Header',
    /**
     *@description Header for the source location column
     */ sourceLocation: 'Source Location',
    /**
     *@description Header for the column with the URL scheme that is not supported by fetch
     */ unsupportedScheme: 'Unsupported Scheme',
    /**
     *@description A failed network request.
     */ failedRequest: 'Failed Request'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/issues/CorsIssueDetailsView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var _appendStatus = /*#__PURE__*/ new WeakSet(), _appendDetails = /*#__PURE__*/ new WeakSet(), _appendSecureContextCell = /*#__PURE__*/ new WeakSet(), _appendDetail = /*#__PURE__*/ new WeakSet();
var CorsIssueDetailsView = /*#__PURE__*/ function(AffectedResourcesView) {
    "use strict";
    _inherits(CorsIssueDetailsView, AffectedResourcesView);
    var _super = _create_super(CorsIssueDetailsView);
    function CorsIssueDetailsView(parent, issue, jslogContext) {
        _class_call_check(this, CorsIssueDetailsView);
        var _this;
        _this = _super.call(this, parent, issue, jslogContext);
        _class_private_method_init(_assert_this_initialized(_this), _appendStatus);
        _class_private_method_init(_assert_this_initialized(_this), _appendDetails);
        _class_private_method_init(_assert_this_initialized(_this), _appendSecureContextCell);
        _class_private_method_init(_assert_this_initialized(_this), _appendDetail);
        _this.affectedResourcesCountElement.classList.add('cors-issue-affected-resource-label');
        return _this;
    }
    _create_class(CorsIssueDetailsView, [
        {
            key: "getResourceNameWithCount",
            value: function getResourceNameWithCount(count) {
                return i18nString(UIStrings.nRequests, {
                    n: count
                });
            }
        },
        {
            key: "update",
            value: function update() {
                this.clear();
                var issues = this.issue.getCorsIssues();
                if (issues.size > 0) {
                    _class_private_method_get(this, _appendDetails, appendDetails).call(this, issues.values().next().value.code(), issues);
                } else {
                    this.updateAffectedResourceCount(0);
                }
            }
        }
    ], [
        {
            key: "getHeaderFromError",
            value: function getHeaderFromError(corsError) {
                switch(corsError){
                    case "InvalidAllowHeadersPreflightResponse" /* Protocol.Network.CorsError.InvalidAllowHeadersPreflightResponse */ :
                        return 'Access-Control-Allow-Headers';
                    case "InvalidAllowMethodsPreflightResponse" /* Protocol.Network.CorsError.InvalidAllowMethodsPreflightResponse */ :
                    case "MethodDisallowedByPreflightResponse" /* Protocol.Network.CorsError.MethodDisallowedByPreflightResponse */ :
                        return 'Access-Control-Allow-Methods';
                    case "PreflightMissingAllowOriginHeader" /* Protocol.Network.CorsError.PreflightMissingAllowOriginHeader */ :
                    case "PreflightMultipleAllowOriginValues" /* Protocol.Network.CorsError.PreflightMultipleAllowOriginValues */ :
                    case "PreflightInvalidAllowOriginValue" /* Protocol.Network.CorsError.PreflightInvalidAllowOriginValue */ :
                    case "MissingAllowOriginHeader" /* Protocol.Network.CorsError.MissingAllowOriginHeader */ :
                    case "MultipleAllowOriginValues" /* Protocol.Network.CorsError.MultipleAllowOriginValues */ :
                    case "InvalidAllowOriginValue" /* Protocol.Network.CorsError.InvalidAllowOriginValue */ :
                    case "WildcardOriginNotAllowed" /* Protocol.Network.CorsError.WildcardOriginNotAllowed */ :
                    case "PreflightWildcardOriginNotAllowed" /* Protocol.Network.CorsError.PreflightWildcardOriginNotAllowed */ :
                    case "AllowOriginMismatch" /* Protocol.Network.CorsError.AllowOriginMismatch */ :
                    case "PreflightAllowOriginMismatch" /* Protocol.Network.CorsError.PreflightAllowOriginMismatch */ :
                        return 'Access-Control-Allow-Origin';
                    case "InvalidAllowCredentials" /* Protocol.Network.CorsError.InvalidAllowCredentials */ :
                    case "PreflightInvalidAllowCredentials" /* Protocol.Network.CorsError.PreflightInvalidAllowCredentials */ :
                        return 'Access-Control-Allow-Credentials';
                    case "PreflightMissingAllowPrivateNetwork" /* Protocol.Network.CorsError.PreflightMissingAllowPrivateNetwork */ :
                    case "PreflightInvalidAllowPrivateNetwork" /* Protocol.Network.CorsError.PreflightInvalidAllowPrivateNetwork */ :
                        return 'Access-Control-Allow-Private-Network';
                    case "RedirectContainsCredentials" /* Protocol.Network.CorsError.RedirectContainsCredentials */ :
                    case "PreflightDisallowedRedirect" /* Protocol.Network.CorsError.PreflightDisallowedRedirect */ :
                        return 'Location';
                    case "PreflightInvalidStatus" /* Protocol.Network.CorsError.PreflightInvalidStatus */ :
                        return 'Status-Code';
                    case "PreflightMissingPrivateNetworkAccessId" /* Protocol.Network.CorsError.PreflightMissingPrivateNetworkAccessId */ :
                        return 'Private-Network-Access-Id';
                    case "PreflightMissingPrivateNetworkAccessName" /* Protocol.Network.CorsError.PreflightMissingPrivateNetworkAccessName */ :
                        return 'Private-Network-Access-Name';
                }
                return '';
            }
        },
        {
            key: "getProblemFromError",
            value: function getProblemFromError(corsErrorStatus) {
                switch(corsErrorStatus.corsError){
                    case "InvalidAllowHeadersPreflightResponse" /* Protocol.Network.CorsError.InvalidAllowHeadersPreflightResponse */ :
                    case "InvalidAllowMethodsPreflightResponse" /* Protocol.Network.CorsError.InvalidAllowMethodsPreflightResponse */ :
                    case "PreflightInvalidAllowOriginValue" /* Protocol.Network.CorsError.PreflightInvalidAllowOriginValue */ :
                    case "InvalidAllowOriginValue" /* Protocol.Network.CorsError.InvalidAllowOriginValue */ :
                        return i18nString(UIStrings.problemInvalidValue);
                    case "PreflightMultipleAllowOriginValues" /* Protocol.Network.CorsError.PreflightMultipleAllowOriginValues */ :
                    case "MultipleAllowOriginValues" /* Protocol.Network.CorsError.MultipleAllowOriginValues */ :
                        return i18nString(UIStrings.problemMultipleValues);
                    case "MissingAllowOriginHeader" /* Protocol.Network.CorsError.MissingAllowOriginHeader */ :
                    case "PreflightMissingAllowOriginHeader" /* Protocol.Network.CorsError.PreflightMissingAllowOriginHeader */ :
                        return i18nString(UIStrings.problemMissingHeader);
                    case "PreflightInvalidStatus" /* Protocol.Network.CorsError.PreflightInvalidStatus */ :
                        return i18nString(UIStrings.preflightInvalidStatus);
                    case "PreflightDisallowedRedirect" /* Protocol.Network.CorsError.PreflightDisallowedRedirect */ :
                        return i18nString(UIStrings.preflightDisallowedRedirect);
                    case "InvalidResponse" /* Protocol.Network.CorsError.InvalidResponse */ :
                        return i18nString(UIStrings.failedRequest);
                }
                throw new Error('Invalid Argument');
            }
        }
    ]);
    return CorsIssueDetailsView;
} //# sourceMappingURL=CorsIssueDetailsView.js.map
(_AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_5__.AffectedResourcesView);
function appendStatus(element, isWarning) {
    var status = document.createElement('td');
    if (isWarning) {
        status.classList.add('affected-resource-report-only-status');
        status.textContent = i18nString(UIStrings.warning);
    } else {
        status.classList.add('affected-resource-blocked-status');
        status.textContent = i18nString(UIStrings.blocked);
    }
    element.appendChild(status);
}
function appendDetails(issueCode, issues) {
    var header = document.createElement('tr');
    this.appendColumnTitle(header, i18nString(UIStrings.request));
    this.appendColumnTitle(header, i18nString(UIStrings.status));
    switch(issueCode){
        case "CorsIssue::InvalidHeaders" /* IssuesManager.CorsIssue.IssueCode.InvalidHeaderValues */ :
            this.appendColumnTitle(header, i18nString(UIStrings.preflightRequestIfProblematic));
            this.appendColumnTitle(header, i18nString(UIStrings.header));
            this.appendColumnTitle(header, i18nString(UIStrings.problem));
            this.appendColumnTitle(header, i18nString(UIStrings.invalidValue));
            break;
        case "CorsIssue::WildcardOriginWithCredentials" /* IssuesManager.CorsIssue.IssueCode.WildcardOriginNotAllowed */ :
            this.appendColumnTitle(header, i18nString(UIStrings.preflightRequestIfProblematic));
            break;
        case "CorsIssue::PreflightResponseInvalid" /* IssuesManager.CorsIssue.IssueCode.PreflightResponseInvalid */ :
            this.appendColumnTitle(header, i18nString(UIStrings.preflightRequest));
            this.appendColumnTitle(header, i18nString(UIStrings.problem));
            break;
        case "CorsIssue::OriginMismatch" /* IssuesManager.CorsIssue.IssueCode.OriginMismatch */ :
            this.appendColumnTitle(header, i18nString(UIStrings.preflightRequestIfProblematic));
            this.appendColumnTitle(header, i18nString(UIStrings.initiatorContext));
            this.appendColumnTitle(header, i18nString(UIStrings.allowedOrigin));
            break;
        case "CorsIssue::AllowCredentialsRequired" /* IssuesManager.CorsIssue.IssueCode.AllowCredentialsRequired */ :
            this.appendColumnTitle(header, i18nString(UIStrings.preflightRequestIfProblematic));
            this.appendColumnTitle(header, i18nString(UIStrings.allowCredentialsValueFromHeader));
            break;
        case "CorsIssue::InsecurePrivateNetwork" /* IssuesManager.CorsIssue.IssueCode.InsecurePrivateNetwork */ :
            this.appendColumnTitle(header, i18nString(UIStrings.resourceAddressSpace));
            this.appendColumnTitle(header, i18nString(UIStrings.initiatorAddressSpace));
            this.appendColumnTitle(header, i18nString(UIStrings.initiatorContext));
            break;
        case "CorsIssue::PreflightAllowPrivateNetworkError" /* IssuesManager.CorsIssue.IssueCode.PreflightAllowPrivateNetworkError */ :
            this.appendColumnTitle(header, i18nString(UIStrings.preflightRequest));
            this.appendColumnTitle(header, i18nString(UIStrings.invalidValue));
            this.appendColumnTitle(header, i18nString(UIStrings.initiatorAddressSpace));
            this.appendColumnTitle(header, i18nString(UIStrings.initiatorContext));
            break;
        case "CorsIssue::PreflightMissingPrivateNetworkAccessId" /* IssuesManager.CorsIssue.IssueCode.PreflightMissingPrivateNetworkAccessId */ :
        case "CorsIssue::PreflightMissingPrivateNetworkAccessName" /* IssuesManager.CorsIssue.IssueCode.PreflightMissingPrivateNetworkAccessName */ :
            this.appendColumnTitle(header, i18nString(UIStrings.preflightRequest));
            this.appendColumnTitle(header, i18nString(UIStrings.invalidValue));
            this.appendColumnTitle(header, i18nString(UIStrings.resourceAddressSpace));
            this.appendColumnTitle(header, i18nString(UIStrings.initiatorAddressSpace));
            this.appendColumnTitle(header, i18nString(UIStrings.initiatorContext));
            break;
        case "CorsIssue::MethodDisallowedByPreflightResponse" /* IssuesManager.CorsIssue.IssueCode.MethodDisallowedByPreflightResponse */ :
            this.appendColumnTitle(header, i18nString(UIStrings.preflightRequest));
            this.appendColumnTitle(header, i18nString(UIStrings.disallowedRequestMethod));
            break;
        case "CorsIssue::HeaderDisallowedByPreflightResponse" /* IssuesManager.CorsIssue.IssueCode.HeaderDisallowedByPreflightResponse */ :
            this.appendColumnTitle(header, i18nString(UIStrings.preflightRequest));
            this.appendColumnTitle(header, i18nString(UIStrings.disallowedRequestHeader));
            break;
        case "CorsIssue::RedirectContainsCredentials" /* IssuesManager.CorsIssue.IssueCode.RedirectContainsCredentials */ :
            break;
        case "CorsIssue::DisallowedByMode" /* IssuesManager.CorsIssue.IssueCode.DisallowedByMode */ :
            this.appendColumnTitle(header, i18nString(UIStrings.initiatorContext));
            this.appendColumnTitle(header, i18nString(UIStrings.sourceLocation));
            break;
        case "CorsIssue::CorsDisabledScheme" /* IssuesManager.CorsIssue.IssueCode.CorsDisabledScheme */ :
            this.appendColumnTitle(header, i18nString(UIStrings.initiatorContext));
            this.appendColumnTitle(header, i18nString(UIStrings.sourceLocation));
            this.appendColumnTitle(header, i18nString(UIStrings.unsupportedScheme));
            break;
        case "CorsIssue::NoCorsRedirectModeNotFollow" /* IssuesManager.CorsIssue.IssueCode.NoCorsRedirectModeNotFollow */ :
            this.appendColumnTitle(header, i18nString(UIStrings.sourceLocation));
            break;
        default:
            _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertUnhandled(issueCode);
    }
    this.affectedResources.appendChild(header);
    var count = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = issues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var issue = _step.value;
            count++;
            _class_private_method_get(this, _appendDetail, appendDetail).call(this, issueCode, issue);
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
    this.updateAffectedResourceCount(count);
}
function appendSecureContextCell(element, isSecureContext) {
    if (isSecureContext === undefined) {
        this.appendIssueDetailCell(element, '');
        return;
    }
    this.appendIssueDetailCell(element, isSecureContext ? i18nString(UIStrings.secure) : i18nString(UIStrings.insecure));
}
function appendDetail(issueCode, issue) {
    var element = document.createElement('tr');
    element.classList.add('affected-resource-directive');
    var details = issue.details();
    var corsErrorStatus = details.corsErrorStatus;
    var corsError = details.corsErrorStatus.corsError;
    var highlightHeader = {
        section: "Response" /* NetworkForward.UIRequestLocation.UIHeaderSection.Response */ ,
        name: CorsIssueDetailsView.getHeaderFromError(corsError)
    };
    var opts = {
        additionalOnClickAction: function additionalOnClickAction() {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.issuesPanelResourceOpened("Cors" /* IssuesManager.Issue.IssueCategory.Cors */ , "Request" /* AffectedItem.Request */ );
        }
    };
    switch(issueCode){
        case "CorsIssue::InvalidHeaders" /* IssuesManager.CorsIssue.IssueCode.InvalidHeaderValues */ :
            element.appendChild(this.createRequestCell(details.request, opts));
            _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, details.isWarning);
            if (corsError.includes('Preflight')) {
                element.appendChild(this.createRequestCell(details.request, _object_spread_props(_object_spread({}, opts), {
                    linkToPreflight: true,
                    highlightHeader: highlightHeader
                })));
            } else {
                this.appendIssueDetailCell(element, '');
            }
            this.appendIssueDetailCell(element, CorsIssueDetailsView.getHeaderFromError(corsError), 'code-example');
            this.appendIssueDetailCell(element, CorsIssueDetailsView.getProblemFromError(details.corsErrorStatus));
            this.appendIssueDetailCell(element, details.corsErrorStatus.failedParameter, 'code-example');
            break;
        case "CorsIssue::WildcardOriginWithCredentials" /* IssuesManager.CorsIssue.IssueCode.WildcardOriginNotAllowed */ :
            element.appendChild(this.createRequestCell(details.request, opts));
            _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, details.isWarning);
            if (corsError.includes('Preflight')) {
                element.appendChild(this.createRequestCell(details.request, _object_spread_props(_object_spread({}, opts), {
                    linkToPreflight: true,
                    highlightHeader: highlightHeader
                })));
            } else {
                this.appendIssueDetailCell(element, '');
            }
            break;
        case "CorsIssue::PreflightResponseInvalid" /* IssuesManager.CorsIssue.IssueCode.PreflightResponseInvalid */ :
            {
                element.appendChild(this.createRequestCell(details.request, opts));
                _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, details.isWarning);
                var specialHighlightHeader = corsError === "PreflightInvalidStatus" /* Protocol.Network.CorsError.PreflightInvalidStatus */  ? {
                    section: "General" /* NetworkForward.UIRequestLocation.UIHeaderSection.General */ ,
                    name: 'Status-Code'
                } : highlightHeader;
                element.appendChild(this.createRequestCell(details.request, _object_spread_props(_object_spread({}, opts), {
                    linkToPreflight: true,
                    highlightHeader: specialHighlightHeader
                })));
                this.appendIssueDetailCell(element, CorsIssueDetailsView.getProblemFromError(details.corsErrorStatus));
                break;
            }
        case "CorsIssue::OriginMismatch" /* IssuesManager.CorsIssue.IssueCode.OriginMismatch */ :
            element.appendChild(this.createRequestCell(details.request, opts));
            _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, details.isWarning);
            if (corsError.includes('Preflight')) {
                element.appendChild(this.createRequestCell(details.request, _object_spread_props(_object_spread({}, opts), {
                    linkToPreflight: true,
                    highlightHeader: highlightHeader
                })));
            } else {
                this.appendIssueDetailCell(element, '');
            }
            var _details_initiatorOrigin;
            this.appendIssueDetailCell(element, (_details_initiatorOrigin = details.initiatorOrigin) !== null && _details_initiatorOrigin !== void 0 ? _details_initiatorOrigin : '', 'code-example');
            this.appendIssueDetailCell(element, details.corsErrorStatus.failedParameter, 'code-example');
            break;
        case "CorsIssue::AllowCredentialsRequired" /* IssuesManager.CorsIssue.IssueCode.AllowCredentialsRequired */ :
            element.appendChild(this.createRequestCell(details.request, opts));
            _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, details.isWarning);
            if (corsError.includes('Preflight')) {
                element.appendChild(this.createRequestCell(details.request, _object_spread_props(_object_spread({}, opts), {
                    linkToPreflight: true,
                    highlightHeader: highlightHeader
                })));
            } else {
                this.appendIssueDetailCell(element, '');
            }
            this.appendIssueDetailCell(element, details.corsErrorStatus.failedParameter, 'code-example');
            break;
        case "CorsIssue::InsecurePrivateNetwork" /* IssuesManager.CorsIssue.IssueCode.InsecurePrivateNetwork */ :
            var _details_clientSecurityState, _details_clientSecurityState1;
            element.appendChild(this.createRequestCell(details.request, opts));
            _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, details.isWarning);
            var _details_resourceIPAddressSpace;
            this.appendIssueDetailCell(element, (_details_resourceIPAddressSpace = details.resourceIPAddressSpace) !== null && _details_resourceIPAddressSpace !== void 0 ? _details_resourceIPAddressSpace : '');
            var _details_clientSecurityState_initiatorIPAddressSpace;
            this.appendIssueDetailCell(element, (_details_clientSecurityState_initiatorIPAddressSpace = (_details_clientSecurityState = details.clientSecurityState) === null || _details_clientSecurityState === void 0 ? void 0 : _details_clientSecurityState.initiatorIPAddressSpace) !== null && _details_clientSecurityState_initiatorIPAddressSpace !== void 0 ? _details_clientSecurityState_initiatorIPAddressSpace : '');
            _class_private_method_get(this, _appendSecureContextCell, appendSecureContextCell).call(this, element, (_details_clientSecurityState1 = details.clientSecurityState) === null || _details_clientSecurityState1 === void 0 ? void 0 : _details_clientSecurityState1.initiatorIsSecureContext);
            break;
        case "CorsIssue::PreflightAllowPrivateNetworkError" /* IssuesManager.CorsIssue.IssueCode.PreflightAllowPrivateNetworkError */ :
            {
                var _details_clientSecurityState2, _details_clientSecurityState3;
                element.appendChild(this.createRequestCell(details.request, opts));
                _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, details.isWarning);
                element.appendChild(this.createRequestCell(details.request, _object_spread_props(_object_spread({}, opts), {
                    linkToPreflight: true,
                    highlightHeader: highlightHeader
                })));
                this.appendIssueDetailCell(element, details.corsErrorStatus.failedParameter, 'code-example');
                var _details_clientSecurityState_initiatorIPAddressSpace1;
                this.appendIssueDetailCell(element, (_details_clientSecurityState_initiatorIPAddressSpace1 = (_details_clientSecurityState2 = details.clientSecurityState) === null || _details_clientSecurityState2 === void 0 ? void 0 : _details_clientSecurityState2.initiatorIPAddressSpace) !== null && _details_clientSecurityState_initiatorIPAddressSpace1 !== void 0 ? _details_clientSecurityState_initiatorIPAddressSpace1 : '');
                _class_private_method_get(this, _appendSecureContextCell, appendSecureContextCell).call(this, element, (_details_clientSecurityState3 = details.clientSecurityState) === null || _details_clientSecurityState3 === void 0 ? void 0 : _details_clientSecurityState3.initiatorIsSecureContext);
                break;
            }
        case "CorsIssue::MethodDisallowedByPreflightResponse" /* IssuesManager.CorsIssue.IssueCode.MethodDisallowedByPreflightResponse */ :
            element.appendChild(this.createRequestCell(details.request, opts));
            _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, details.isWarning);
            element.appendChild(this.createRequestCell(details.request, _object_spread_props(_object_spread({}, opts), {
                linkToPreflight: true,
                highlightHeader: highlightHeader
            })));
            this.appendIssueDetailCell(element, details.corsErrorStatus.failedParameter, 'code-example');
            break;
        case "CorsIssue::HeaderDisallowedByPreflightResponse" /* IssuesManager.CorsIssue.IssueCode.HeaderDisallowedByPreflightResponse */ :
            element.appendChild(this.createRequestCell(details.request, _object_spread_props(_object_spread({}, opts), {
                highlightHeader: {
                    section: "Request" /* NetworkForward.UIRequestLocation.UIHeaderSection.Request */ ,
                    name: corsErrorStatus.failedParameter
                }
            })));
            _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, details.isWarning);
            element.appendChild(this.createRequestCell(details.request, _object_spread_props(_object_spread({}, opts), {
                linkToPreflight: true,
                highlightHeader: {
                    section: "Response" /* NetworkForward.UIRequestLocation.UIHeaderSection.Response */ ,
                    name: 'Access-Control-Allow-Headers'
                }
            })));
            this.appendIssueDetailCell(element, details.corsErrorStatus.failedParameter, 'code-example');
            break;
        case "CorsIssue::RedirectContainsCredentials" /* IssuesManager.CorsIssue.IssueCode.RedirectContainsCredentials */ :
            element.appendChild(this.createRequestCell(details.request, _object_spread_props(_object_spread({}, opts), {
                highlightHeader: {
                    section: "Response" /* NetworkForward.UIRequestLocation.UIHeaderSection.Response */ ,
                    name: CorsIssueDetailsView.getHeaderFromError(corsError)
                }
            })));
            _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, details.isWarning);
            break;
        case "CorsIssue::DisallowedByMode" /* IssuesManager.CorsIssue.IssueCode.DisallowedByMode */ :
            var _issue_model;
            element.appendChild(this.createRequestCell(details.request, opts));
            _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, details.isWarning);
            var _details_initiatorOrigin1;
            this.appendIssueDetailCell(element, (_details_initiatorOrigin1 = details.initiatorOrigin) !== null && _details_initiatorOrigin1 !== void 0 ? _details_initiatorOrigin1 : '', 'code-example');
            this.appendSourceLocation(element, details.location, (_issue_model = issue.model()) === null || _issue_model === void 0 ? void 0 : _issue_model.getTargetIfNotDisposed());
            break;
        case "CorsIssue::CorsDisabledScheme" /* IssuesManager.CorsIssue.IssueCode.CorsDisabledScheme */ :
            var _issue_model1;
            element.appendChild(this.createRequestCell(details.request, _object_spread_props(_object_spread({}, opts), {
                highlightHeader: {
                    section: "Response" /* NetworkForward.UIRequestLocation.UIHeaderSection.Response */ ,
                    name: CorsIssueDetailsView.getHeaderFromError(corsError)
                }
            })));
            _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, details.isWarning);
            var _details_initiatorOrigin2;
            this.appendIssueDetailCell(element, (_details_initiatorOrigin2 = details.initiatorOrigin) !== null && _details_initiatorOrigin2 !== void 0 ? _details_initiatorOrigin2 : '', 'code-example');
            this.appendSourceLocation(element, details.location, (_issue_model1 = issue.model()) === null || _issue_model1 === void 0 ? void 0 : _issue_model1.getTargetIfNotDisposed());
            var _details_corsErrorStatus_failedParameter;
            this.appendIssueDetailCell(element, (_details_corsErrorStatus_failedParameter = details.corsErrorStatus.failedParameter) !== null && _details_corsErrorStatus_failedParameter !== void 0 ? _details_corsErrorStatus_failedParameter : '', 'code-example');
            break;
        case "CorsIssue::NoCorsRedirectModeNotFollow" /* IssuesManager.CorsIssue.IssueCode.NoCorsRedirectModeNotFollow */ :
            var _issue_model2;
            element.appendChild(this.createRequestCell(details.request, opts));
            _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, details.isWarning);
            this.appendSourceLocation(element, details.location, (_issue_model2 = issue.model()) === null || _issue_model2 === void 0 ? void 0 : _issue_model2.getTargetIfNotDisposed());
            break;
        case "CorsIssue::PreflightMissingPrivateNetworkAccessId" /* IssuesManager.CorsIssue.IssueCode.PreflightMissingPrivateNetworkAccessId */ :
        case "CorsIssue::PreflightMissingPrivateNetworkAccessName" /* IssuesManager.CorsIssue.IssueCode.PreflightMissingPrivateNetworkAccessName */ :
            var _details_clientSecurityState4, _details_clientSecurityState5;
            element.appendChild(this.createRequestCell(details.request, opts));
            _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, details.isWarning);
            element.appendChild(this.createRequestCell(details.request, _object_spread_props(_object_spread({}, opts), {
                linkToPreflight: true,
                highlightHeader: highlightHeader
            })));
            this.appendIssueDetailCell(element, CorsIssueDetailsView.getHeaderFromError(corsError));
            var _details_resourceIPAddressSpace1;
            this.appendIssueDetailCell(element, (_details_resourceIPAddressSpace1 = details.resourceIPAddressSpace) !== null && _details_resourceIPAddressSpace1 !== void 0 ? _details_resourceIPAddressSpace1 : '');
            var _details_clientSecurityState_initiatorIPAddressSpace2;
            this.appendIssueDetailCell(element, (_details_clientSecurityState_initiatorIPAddressSpace2 = (_details_clientSecurityState4 = details.clientSecurityState) === null || _details_clientSecurityState4 === void 0 ? void 0 : _details_clientSecurityState4.initiatorIPAddressSpace) !== null && _details_clientSecurityState_initiatorIPAddressSpace2 !== void 0 ? _details_clientSecurityState_initiatorIPAddressSpace2 : '');
            _class_private_method_get(this, _appendSecureContextCell, appendSecureContextCell).call(this, element, (_details_clientSecurityState5 = details.clientSecurityState) === null || _details_clientSecurityState5 === void 0 ? void 0 : _details_clientSecurityState5.initiatorIsSecureContext);
            break;
        default:
            element.appendChild(this.createRequestCell(details.request, opts));
            _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, details.isWarning);
            _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertUnhandled(issueCode);
            break;
    }
    this.affectedResources.appendChild(element);
}


}),

}]);