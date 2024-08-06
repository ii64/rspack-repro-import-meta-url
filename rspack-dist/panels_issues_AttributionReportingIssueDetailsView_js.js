"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_issues_AttributionReportingIssueDetailsView_js"], {
"./panels/issues/AttributionReportingIssueDetailsView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AttributionReportingIssueDetailsView: function() { return AttributionReportingIssueDetailsView; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
     * @description Label for number of rows in the issue details table.
     */ nViolations: '{n, plural, =1 {# violation} other {# violations}}',
    /**
     * @description Noun, label for the column showing the associated HTML element in the issue details table.
     */ element: 'Element',
    /**
     * @description Noun, label for the column showing the invalid header value in the issue details table.
     */ invalidHeaderValue: 'Invalid Header Value',
    /**
     * @description Noun, label for the column showing the associated network request in the issue details table.
     */ request: 'Request',
    /**
     * @description Label for the column showing the invalid URL used in an HTML anchor element ("a link").
     * A origin is (roughly said) the front part of a URL.
     */ untrustworthyOrigin: 'Untrustworthy origin'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/issues/AttributionReportingIssueDetailsView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var _appendDetails = /*#__PURE__*/ new WeakSet(), _appendDetail = /*#__PURE__*/ new WeakSet(), _appendElementOrEmptyCell = /*#__PURE__*/ new WeakSet(), _appendRequestOrEmptyCell = /*#__PURE__*/ new WeakSet();
var AttributionReportingIssueDetailsView = /*#__PURE__*/ function(AffectedResourcesView) {
    "use strict";
    _inherits(AttributionReportingIssueDetailsView, AffectedResourcesView);
    var _super = _create_super(AttributionReportingIssueDetailsView);
    function AttributionReportingIssueDetailsView() {
        _class_call_check(this, AttributionReportingIssueDetailsView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _appendDetails);
        _class_private_method_init(_assert_this_initialized(_this), _appendDetail);
        _class_private_method_init(_assert_this_initialized(_this), _appendElementOrEmptyCell);
        _class_private_method_init(_assert_this_initialized(_this), _appendRequestOrEmptyCell);
        return _this;
    }
    _create_class(AttributionReportingIssueDetailsView, [
        {
            key: "getResourceNameWithCount",
            value: function getResourceNameWithCount(count) {
                return i18nString(UIStrings.nViolations, {
                    n: count
                });
            }
        },
        {
            key: "update",
            value: function update() {
                this.clear();
                var issues = this.issue.getAttributionReportingIssues();
                if (issues.size > 0) {
                    _class_private_method_get(this, _appendDetails, appendDetails).call(this, issues.values().next().value.code(), issues);
                } else {
                    this.updateAffectedResourceCount(0);
                }
            }
        }
    ]);
    return AttributionReportingIssueDetailsView;
} //# sourceMappingURL=AttributionReportingIssueDetailsView.js.map
(_AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__.AffectedResourcesView);
function appendDetails(issueCode, issues) {
    var header = document.createElement('tr');
    switch(issueCode){
        case "AttributionReportingIssue::InvalidRegisterSourceHeader" /* IssuesManager.AttributionReportingIssue.IssueCode.InvalidRegisterSourceHeader */ :
        case "AttributionReportingIssue::InvalidRegisterTriggerHeader" /* IssuesManager.AttributionReportingIssue.IssueCode.InvalidRegisterTriggerHeader */ :
        case "AttributionReportingIssue::InvalidRegisterOsSourceHeader" /* IssuesManager.AttributionReportingIssue.IssueCode.InvalidRegisterOsSourceHeader */ :
        case "AttributionReportingIssue::InvalidRegisterOsTriggerHeader" /* IssuesManager.AttributionReportingIssue.IssueCode.InvalidRegisterOsTriggerHeader */ :
        case "AttributionReportingIssue::OsSourceIgnored" /* IssuesManager.AttributionReportingIssue.IssueCode.OsSourceIgnored */ :
        case "AttributionReportingIssue::OsTriggerIgnored" /* IssuesManager.AttributionReportingIssue.IssueCode.OsTriggerIgnored */ :
        case "AttributionReportingIssue::SourceIgnored" /* IssuesManager.AttributionReportingIssue.IssueCode.SourceIgnored */ :
        case "AttributionReportingIssue::TriggerIgnored" /* IssuesManager.AttributionReportingIssue.IssueCode.TriggerIgnored */ :
            this.appendColumnTitle(header, i18nString(UIStrings.request));
            this.appendColumnTitle(header, i18nString(UIStrings.invalidHeaderValue));
            break;
        case "AttributionReportingIssue::InsecureContext" /* IssuesManager.AttributionReportingIssue.IssueCode.InsecureContext */ :
        case "AttributionReportingIssue::UntrustworthyReportingOrigin" /* IssuesManager.AttributionReportingIssue.IssueCode.UntrustworthyReportingOrigin */ :
            this.appendColumnTitle(header, i18nString(UIStrings.element));
            this.appendColumnTitle(header, i18nString(UIStrings.request));
            this.appendColumnTitle(header, i18nString(UIStrings.untrustworthyOrigin));
            break;
        case "AttributionReportingIssue::PermissionPolicyDisabled" /* IssuesManager.AttributionReportingIssue.IssueCode.PermissionPolicyDisabled */ :
            this.appendColumnTitle(header, i18nString(UIStrings.element));
            this.appendColumnTitle(header, i18nString(UIStrings.request));
            break;
        case "AttributionReportingIssue::SourceAndTriggerHeaders" /* IssuesManager.AttributionReportingIssue.IssueCode.SourceAndTriggerHeaders */ :
        case "AttributionReportingIssue::WebAndOsHeaders" /* IssuesManager.AttributionReportingIssue.IssueCode.WebAndOsHeaders */ :
            this.appendColumnTitle(header, i18nString(UIStrings.request));
            break;
        case "AttributionReportingIssue::NavigationRegistrationWithoutTransientUserActivation" /* IssuesManager.AttributionReportingIssue.IssueCode.NavigationRegistrationWithoutTransientUserActivation */ :
            this.appendColumnTitle(header, i18nString(UIStrings.element));
            break;
    }
    this.affectedResources.appendChild(header);
    var count = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = issues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var issue = _step.value;
            count++;
            void _class_private_method_get(this, _appendDetail, appendDetail).call(this, issueCode, issue);
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
function appendDetail(issueCode, issue) {
    return _appendDetail1.apply(this, arguments);
}
function _appendDetail1() {
    _appendDetail1 = _async_to_generator(function(issueCode, issue) {
        var element, details;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    element = document.createElement('tr');
                    element.classList.add('affected-resource-directive');
                    details = issue.issueDetails;
                    switch(issueCode){
                        case "AttributionReportingIssue::InvalidRegisterSourceHeader" /* IssuesManager.AttributionReportingIssue.IssueCode.InvalidRegisterSourceHeader */ :
                            return [
                                3,
                                1
                            ];
                        case "AttributionReportingIssue::InvalidRegisterTriggerHeader" /* IssuesManager.AttributionReportingIssue.IssueCode.InvalidRegisterTriggerHeader */ :
                            return [
                                3,
                                1
                            ];
                        case "AttributionReportingIssue::InvalidRegisterOsSourceHeader" /* IssuesManager.AttributionReportingIssue.IssueCode.InvalidRegisterOsSourceHeader */ :
                            return [
                                3,
                                1
                            ];
                        case "AttributionReportingIssue::InvalidRegisterOsTriggerHeader" /* IssuesManager.AttributionReportingIssue.IssueCode.InvalidRegisterOsTriggerHeader */ :
                            return [
                                3,
                                1
                            ];
                        case "AttributionReportingIssue::OsSourceIgnored" /* IssuesManager.AttributionReportingIssue.IssueCode.OsSourceIgnored */ :
                            return [
                                3,
                                1
                            ];
                        case "AttributionReportingIssue::OsTriggerIgnored" /* IssuesManager.AttributionReportingIssue.IssueCode.OsTriggerIgnored */ :
                            return [
                                3,
                                1
                            ];
                        case "AttributionReportingIssue::SourceIgnored" /* IssuesManager.AttributionReportingIssue.IssueCode.SourceIgnored */ :
                            return [
                                3,
                                1
                            ];
                        case "AttributionReportingIssue::TriggerIgnored" /* IssuesManager.AttributionReportingIssue.IssueCode.TriggerIgnored */ :
                            return [
                                3,
                                1
                            ];
                        case "AttributionReportingIssue::InsecureContext" /* IssuesManager.AttributionReportingIssue.IssueCode.InsecureContext */ :
                            return [
                                3,
                                2
                            ];
                        case "AttributionReportingIssue::UntrustworthyReportingOrigin" /* IssuesManager.AttributionReportingIssue.IssueCode.UntrustworthyReportingOrigin */ :
                            return [
                                3,
                                2
                            ];
                        case "AttributionReportingIssue::PermissionPolicyDisabled" /* IssuesManager.AttributionReportingIssue.IssueCode.PermissionPolicyDisabled */ :
                            return [
                                3,
                                4
                            ];
                        case "AttributionReportingIssue::SourceAndTriggerHeaders" /* IssuesManager.AttributionReportingIssue.IssueCode.SourceAndTriggerHeaders */ :
                            return [
                                3,
                                6
                            ];
                        case "AttributionReportingIssue::WebAndOsHeaders" /* IssuesManager.AttributionReportingIssue.IssueCode.WebAndOsHeaders */ :
                            return [
                                3,
                                6
                            ];
                        case "AttributionReportingIssue::NavigationRegistrationWithoutTransientUserActivation" /* IssuesManager.AttributionReportingIssue.IssueCode.NavigationRegistrationWithoutTransientUserActivation */ :
                            return [
                                3,
                                7
                            ];
                    }
                    return [
                        3,
                        9
                    ];
                case 1:
                    _class_private_method_get(this, _appendRequestOrEmptyCell, appendRequestOrEmptyCell).call(this, element, details.request);
                    this.appendIssueDetailCell(element, details.invalidParameter || '');
                    return [
                        3,
                        9
                    ];
                case 2:
                    return [
                        4,
                        _class_private_method_get(this, _appendElementOrEmptyCell, appendElementOrEmptyCell).call(this, element, issue)
                    ];
                case 3:
                    _state.sent();
                    _class_private_method_get(this, _appendRequestOrEmptyCell, appendRequestOrEmptyCell).call(this, element, details.request);
                    this.appendIssueDetailCell(element, details.invalidParameter || '');
                    return [
                        3,
                        9
                    ];
                case 4:
                    return [
                        4,
                        _class_private_method_get(this, _appendElementOrEmptyCell, appendElementOrEmptyCell).call(this, element, issue)
                    ];
                case 5:
                    _state.sent();
                    _class_private_method_get(this, _appendRequestOrEmptyCell, appendRequestOrEmptyCell).call(this, element, details.request);
                    return [
                        3,
                        9
                    ];
                case 6:
                    _class_private_method_get(this, _appendRequestOrEmptyCell, appendRequestOrEmptyCell).call(this, element, details.request);
                    return [
                        3,
                        9
                    ];
                case 7:
                    return [
                        4,
                        _class_private_method_get(this, _appendElementOrEmptyCell, appendElementOrEmptyCell).call(this, element, issue)
                    ];
                case 8:
                    _state.sent();
                    return [
                        3,
                        9
                    ];
                case 9:
                    this.affectedResources.appendChild(element);
                    return [
                        2
                    ];
            }
        });
    });
    return _appendDetail1.apply(this, arguments);
}
function appendElementOrEmptyCell(parent, issue) {
    return _appendElementOrEmptyCell1.apply(this, arguments);
}
function _appendElementOrEmptyCell1() {
    _appendElementOrEmptyCell1 = _async_to_generator(function(parent, issue) {
        var details, _issue_model, target, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    details = issue.issueDetails;
                    if (!(details.violatingNodeId !== undefined)) return [
                        3,
                        2
                    ];
                    target = ((_issue_model = issue.model()) === null || _issue_model === void 0 ? void 0 : _issue_model.target()) || null;
                    _ = parent.appendChild;
                    return [
                        4,
                        this.createElementCell({
                            backendNodeId: details.violatingNodeId,
                            target: target,
                            nodeName: 'Attribution source element'
                        }, issue.getCategory())
                    ];
                case 1:
                    _.apply(parent, [
                        _state.sent()
                    ]);
                    return [
                        3,
                        3
                    ];
                case 2:
                    this.appendIssueDetailCell(parent, '');
                    _state.label = 3;
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return _appendElementOrEmptyCell1.apply(this, arguments);
}
function appendRequestOrEmptyCell(parent, request) {
    if (!request) {
        this.appendIssueDetailCell(parent, '');
        return;
    }
    var opts = {
        additionalOnClickAction: function additionalOnClickAction() {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.issuesPanelResourceOpened("AttributionReporting" /* IssuesManager.Issue.IssueCategory.AttributionReporting */ , "Request" /* AffectedItem.Request */ );
        }
    };
    parent.appendChild(this.createRequestCell(request, opts));
}


}),

}]);