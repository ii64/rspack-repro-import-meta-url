"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_issues_AffectedDirectivesView_js"], {
"./panels/issues/AffectedDirectivesView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AffectedDirectivesView: function() { return AffectedDirectivesView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.js */ "./panels/issues/components/components.js");
/* harmony import */var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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
     *@description Singular or plural label for number of affected CSP (content security policy,
     * see https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) directives in issue view.
     */ nDirectives: '{n, plural, =1 {# directive} other {# directives}}',
    /**
     *@description Indicates that a CSP error should be treated as a warning
     */ reportonly: 'report-only',
    /**
     *@description The kind of resolution for a mixed content issue
     */ blocked: 'blocked',
    /**
     *@description Tooltip for button linking to the Elements panel
     */ clickToRevealTheViolatingDomNode: 'Click to reveal the violating DOM node in the Elements panel',
    /**
     *@description Header for the section listing affected directives
     */ directiveC: 'Directive',
    /**
     *@description Label for the column in the element list in the CSS overview report
     */ element: 'Element',
    /**
     *@description Header for the source location column
     */ sourceLocation: 'Source location',
    /**
     *@description Text for the status of something
     */ status: 'Status',
    /**
     *@description Text that refers to the resources of the web page
     */ resourceC: 'Resource'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/issues/AffectedDirectivesView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var _appendStatus = /*#__PURE__*/ new WeakSet(), _appendViolatedDirective = /*#__PURE__*/ new WeakSet(), _appendBlockedURL = /*#__PURE__*/ new WeakSet(), _appendBlockedElement = /*#__PURE__*/ new WeakSet(), _appendAffectedContentSecurityPolicyDetails = /*#__PURE__*/ new WeakSet(), _appendAffectedContentSecurityPolicyDetail = /*#__PURE__*/ new WeakSet();
var AffectedDirectivesView = /*#__PURE__*/ function(AffectedResourcesView) {
    "use strict";
    _inherits(AffectedDirectivesView, AffectedResourcesView);
    var _super = _create_super(AffectedDirectivesView);
    function AffectedDirectivesView() {
        _class_call_check(this, AffectedDirectivesView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _appendStatus);
        _class_private_method_init(_assert_this_initialized(_this), _appendViolatedDirective);
        _class_private_method_init(_assert_this_initialized(_this), _appendBlockedURL);
        _class_private_method_init(_assert_this_initialized(_this), _appendBlockedElement);
        _class_private_method_init(_assert_this_initialized(_this), _appendAffectedContentSecurityPolicyDetails);
        _class_private_method_init(_assert_this_initialized(_this), _appendAffectedContentSecurityPolicyDetail);
        return _this;
    }
    _create_class(AffectedDirectivesView, [
        {
            key: "getResourceNameWithCount",
            value: function getResourceNameWithCount(count) {
                return i18nString(UIStrings.nDirectives, {
                    n: count
                });
            }
        },
        {
            key: "update",
            value: function update() {
                this.clear();
                _class_private_method_get(this, _appendAffectedContentSecurityPolicyDetails, appendAffectedContentSecurityPolicyDetails).call(this, this.issue.getCspIssues());
            }
        }
    ]);
    return AffectedDirectivesView;
} //# sourceMappingURL=AffectedDirectivesView.js.map
(_AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_7__.AffectedResourcesView);
function appendStatus(element, isReportOnly) {
    var status = document.createElement('td');
    if (isReportOnly) {
        status.classList.add('affected-resource-report-only-status');
        status.textContent = i18nString(UIStrings.reportonly);
    } else {
        status.classList.add('affected-resource-blocked-status');
        status.textContent = i18nString(UIStrings.blocked);
    }
    element.appendChild(status);
}
function appendViolatedDirective(element, directive) {
    var violatedDirective = document.createElement('td');
    violatedDirective.textContent = directive;
    element.appendChild(violatedDirective);
}
function appendBlockedURL(element, url) {
    var info = document.createElement('td');
    info.classList.add('affected-resource-directive-info');
    info.textContent = url;
    element.appendChild(info);
}
function appendBlockedElement(element, nodeId, model) {
    var _this = this;
    var elementsPanelLinkComponent = new _components_components_js__WEBPACK_IMPORTED_MODULE_6__.ElementsPanelLink.ElementsPanelLink();
    if (nodeId) {
        var violatingNodeId = nodeId;
        elementsPanelLinkComponent.title = i18nString(UIStrings.clickToRevealTheViolatingDomNode);
        var onElementRevealIconClick = function() {
            var target = model.getTargetIfNotDisposed();
            if (target) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelResourceOpened(_this.issue.getCategory(), "Element" /* AffectedItem.Element */ );
                var deferredDOMNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DeferredDOMNode(target, violatingNodeId);
                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(deferredDOMNode);
            }
        };
        var onElementRevealIconMouseEnter = function() {
            var target = model.getTargetIfNotDisposed();
            if (target) {
                var deferredDOMNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DeferredDOMNode(target, violatingNodeId);
                if (deferredDOMNode) {
                    deferredDOMNode.highlight();
                }
            }
        };
        var onElementRevealIconMouseLeave = function() {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        };
        elementsPanelLinkComponent.data = {
            onElementRevealIconClick: onElementRevealIconClick,
            onElementRevealIconMouseEnter: onElementRevealIconMouseEnter,
            onElementRevealIconMouseLeave: onElementRevealIconMouseLeave
        };
    }
    var violatingNode = document.createElement('td');
    violatingNode.classList.add('affected-resource-csp-info-node');
    violatingNode.appendChild(elementsPanelLinkComponent);
    element.appendChild(violatingNode);
}
function appendAffectedContentSecurityPolicyDetails(cspIssues) {
    var header = document.createElement('tr');
    if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.inlineViolationCode) {
        this.appendColumnTitle(header, i18nString(UIStrings.directiveC));
        this.appendColumnTitle(header, i18nString(UIStrings.element));
        this.appendColumnTitle(header, i18nString(UIStrings.sourceLocation));
        this.appendColumnTitle(header, i18nString(UIStrings.status));
    } else if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.urlViolationCode) {
        this.appendColumnTitle(header, i18nString(UIStrings.resourceC), 'affected-resource-directive-info-header');
        this.appendColumnTitle(header, i18nString(UIStrings.status));
        this.appendColumnTitle(header, i18nString(UIStrings.directiveC));
        this.appendColumnTitle(header, i18nString(UIStrings.sourceLocation));
    } else if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.evalViolationCode) {
        this.appendColumnTitle(header, i18nString(UIStrings.sourceLocation));
        this.appendColumnTitle(header, i18nString(UIStrings.directiveC));
        this.appendColumnTitle(header, i18nString(UIStrings.status));
    } else if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.trustedTypesSinkViolationCode) {
        this.appendColumnTitle(header, i18nString(UIStrings.sourceLocation));
        this.appendColumnTitle(header, i18nString(UIStrings.status));
    } else if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.trustedTypesPolicyViolationCode) {
        this.appendColumnTitle(header, i18nString(UIStrings.sourceLocation));
        this.appendColumnTitle(header, i18nString(UIStrings.directiveC));
        this.appendColumnTitle(header, i18nString(UIStrings.status));
    } else {
        this.updateAffectedResourceCount(0);
        return;
    }
    this.affectedResources.appendChild(header);
    var count = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = cspIssues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var cspIssue = _step.value;
            count++;
            _class_private_method_get(this, _appendAffectedContentSecurityPolicyDetail, appendAffectedContentSecurityPolicyDetail).call(this, cspIssue);
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
function appendAffectedContentSecurityPolicyDetail(cspIssue) {
    var _cspIssue_model;
    var element = document.createElement('tr');
    element.classList.add('affected-resource-directive');
    var cspIssueDetails = cspIssue.details();
    var location = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.Issue.toZeroBasedLocation(cspIssueDetails.sourceCodeLocation);
    var model = cspIssue.model();
    var maybeTarget = (_cspIssue_model = cspIssue.model()) === null || _cspIssue_model === void 0 ? void 0 : _cspIssue_model.getTargetIfNotDisposed();
    if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.inlineViolationCode && model) {
        _class_private_method_get(this, _appendViolatedDirective, appendViolatedDirective).call(this, element, cspIssueDetails.violatedDirective);
        _class_private_method_get(this, _appendBlockedElement, appendBlockedElement).call(this, element, cspIssueDetails.violatingNodeId, model);
        this.appendSourceLocation(element, location, maybeTarget);
        _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, cspIssueDetails.isReportOnly);
    } else if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.urlViolationCode) {
        var url = cspIssueDetails.blockedURL ? cspIssueDetails.blockedURL : _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DevToolsPath.EmptyUrlString;
        _class_private_method_get(this, _appendBlockedURL, appendBlockedURL).call(this, element, url);
        _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, cspIssueDetails.isReportOnly);
        _class_private_method_get(this, _appendViolatedDirective, appendViolatedDirective).call(this, element, cspIssueDetails.violatedDirective);
        this.appendSourceLocation(element, location, maybeTarget);
    } else if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.evalViolationCode) {
        this.appendSourceLocation(element, location, maybeTarget);
        _class_private_method_get(this, _appendViolatedDirective, appendViolatedDirective).call(this, element, cspIssueDetails.violatedDirective);
        _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, cspIssueDetails.isReportOnly);
    } else if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.trustedTypesSinkViolationCode) {
        this.appendSourceLocation(element, location, maybeTarget);
        _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, cspIssueDetails.isReportOnly);
    } else if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.trustedTypesPolicyViolationCode) {
        this.appendSourceLocation(element, location, maybeTarget);
        _class_private_method_get(this, _appendViolatedDirective, appendViolatedDirective).call(this, element, cspIssueDetails.violatedDirective);
        _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, cspIssueDetails.isReportOnly);
    } else {
        return;
    }
    this.affectedResources.appendChild(element);
}


}),
"./panels/issues/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ElementsPanelLink: function() { return /* reexport module object */ _ElementsPanelLink_js__WEBPACK_IMPORTED_MODULE_0__; },
  HideIssuesMenu: function() { return /* reexport module object */ _HideIssuesMenu_js__WEBPACK_IMPORTED_MODULE_1__; }
});
/* harmony import */var _ElementsPanelLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementsPanelLink.js */ "./panels/issues/components/ElementsPanelLink.js");
/* harmony import */var _HideIssuesMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HideIssuesMenu.js */ "./panels/issues/components/HideIssuesMenu.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


 //# sourceMappingURL=components.js.map


}),

}]);