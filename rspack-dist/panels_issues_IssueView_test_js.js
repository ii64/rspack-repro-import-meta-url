"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_issues_IssueView_test_js"], {
"./panels/issues/IssueRevealer.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  IssueRevealer: function() { return IssueRevealer; }
});
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _IssuesPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssuesPane.js */ "./panels/issues/IssuesPane.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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


var IssueRevealer = /*#__PURE__*/ function() {
    "use strict";
    function IssueRevealer() {
        _class_call_check(this, IssueRevealer);
    }
    _create_class(IssueRevealer, [
        {
            key: "reveal",
            value: function reveal(issue) {
                return _async_to_generator(function() {
                    var view, issuesPane;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ViewManager.ViewManager.instance().showView('issues-pane')
                                ];
                            case 1:
                                _state.sent();
                                view = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ViewManager.ViewManager.instance().view('issues-pane');
                                if (!view) return [
                                    3,
                                    5
                                ];
                                return [
                                    4,
                                    view.widget()
                                ];
                            case 2:
                                issuesPane = _state.sent();
                                if (!_instanceof(issuesPane, _IssuesPane_js__WEBPACK_IMPORTED_MODULE_1__.IssuesPane)) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    issuesPane.reveal(issue)
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    3,
                                    5
                                ];
                            case 4:
                                throw new Error('Expected issues pane to be an instance of IssuesPane');
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return IssueRevealer;
} //# sourceMappingURL=IssueRevealer.js.map
();


}),
"./panels/issues/IssueView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/StubIssue.js */ "./testing/StubIssue.js");
/* harmony import */var _testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/UserMetricsHelpers.js */ "./testing/UserMetricsHelpers.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _issues_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./issues.js */ "./panels/issues/issues.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('IssueView', function() {
    it('records metrics when an issue is expanded', function() {
        var aggregationKey = 'key';
        var issue = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_2__.StubIssue.createFromRequestIds([
            'id1',
            'id2'
        ]);
        var aggregatedIssue = new _issues_js__WEBPACK_IMPORTED_MODULE_5__.IssueAggregator.AggregatedIssue('code', aggregationKey);
        aggregatedIssue.addInstance(issue);
        var view = new _issues_js__WEBPACK_IMPORTED_MODULE_5__.IssueView.IssueView(aggregatedIssue, {
            title: 'Mock issue',
            links: [],
            markdown: []
        });
        var treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutline(); // TreeElements need to be part of a TreeOutline to be expandable.
        treeOutline.appendChild(view);
        view.expand();
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_3__.recordedMetricsContain)("DevTools.IssuesPanelIssueExpanded" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.IssuesPanelIssueExpanded */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.IssueExpanded.Other));
        view.clear();
    });
    it('records metrics when a SameSite Cookie issue is expanded', function() {
        var aggregationKey = 'key';
        var issue = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_2__.StubIssue.createCookieIssue('CookieIssue::WarnSameSiteUnspecifiedLaxAllowUnsafe::ReadCookie');
        var aggregatedIssue = new _issues_js__WEBPACK_IMPORTED_MODULE_5__.IssueAggregator.AggregatedIssue('CookieIssue::WarnSameSiteUnspecifiedLaxAllowUnsafe::ReadCookie', aggregationKey);
        aggregatedIssue.addInstance(issue);
        var view = new _issues_js__WEBPACK_IMPORTED_MODULE_5__.IssueView.IssueView(aggregatedIssue, {
            title: 'Mock Cookie Issue',
            links: [],
            markdown: []
        });
        var treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutline(); // TreeElements need to be part of a TreeOutline to be expandable.
        treeOutline.appendChild(view);
        view.expand();
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_3__.recordedMetricsContain)("DevTools.IssuesPanelIssueExpanded" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.IssuesPanelIssueExpanded */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.IssueExpanded.SameSiteCookie));
        assert.isFalse((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_3__.recordedMetricsContain)("DevTools.IssuesPanelIssueExpanded" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.IssuesPanelIssueExpanded */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.IssueExpanded.GenericCookie));
        view.clear();
    });
    it('records metrics when a ThirdPartyPhaseout Cookie issue is expanded', function() {
        var aggregationKey = 'key';
        var issue = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_2__.StubIssue.createCookieIssue('CookieIssue::WarnThirdPartyPhaseout::ReadCookie');
        var aggregatedIssue = new _issues_js__WEBPACK_IMPORTED_MODULE_5__.IssueAggregator.AggregatedIssue('CookieIssue::WarnThirdPartyPhaseout::ReadCookie', aggregationKey);
        aggregatedIssue.addInstance(issue);
        var view = new _issues_js__WEBPACK_IMPORTED_MODULE_5__.IssueView.IssueView(aggregatedIssue, {
            title: 'Mock Cookie Issue',
            links: [],
            markdown: []
        });
        var treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutline(); // TreeElements need to be part of a TreeOutline to be expandable.
        treeOutline.appendChild(view);
        view.expand();
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_3__.recordedMetricsContain)("DevTools.IssuesPanelIssueExpanded" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.IssuesPanelIssueExpanded */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.IssueExpanded.ThirdPartyPhaseoutCookie));
        assert.isFalse((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_3__.recordedMetricsContain)("DevTools.IssuesPanelIssueExpanded" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.IssuesPanelIssueExpanded */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.IssueExpanded.GenericCookie));
        view.clear();
    });
}); //# sourceMappingURL=IssueView.test.js.map


}),
"./panels/issues/issues.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  IssueAggregator: function() { return /* reexport module object */ _IssueAggregator_js__WEBPACK_IMPORTED_MODULE_0__; },
  IssueRevealer: function() { return /* reexport module object */ _IssueRevealer_js__WEBPACK_IMPORTED_MODULE_1__; },
  IssueView: function() { return /* reexport module object */ _IssueView_js__WEBPACK_IMPORTED_MODULE_3__; },
  IssuesPane: function() { return /* reexport module object */ _IssuesPane_js__WEBPACK_IMPORTED_MODULE_2__; }
});
/* harmony import */var _IssueAggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IssueAggregator.js */ "./panels/issues/IssueAggregator.js");
/* harmony import */var _IssueRevealer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueRevealer.js */ "./panels/issues/IssueRevealer.js");
/* harmony import */var _IssuesPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssuesPane.js */ "./panels/issues/IssuesPane.js");
/* harmony import */var _IssueView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueView.js */ "./panels/issues/IssueView.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




 //# sourceMappingURL=issues.js.map


}),
"./testing/StubIssue.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  StubIssue: function() { return StubIssue; },
  ThirdPartyStubIssue: function() { return ThirdPartyStubIssue; },
  mkInspectorCspIssue: function() { return mkInspectorCspIssue; }
});
/* harmony import */var _models_issues_manager_Issue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/issues_manager/Issue.js */ "./models/issues_manager/Issue.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line rulesdir/es_modules_import
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

var StubIssue = /*#__PURE__*/ function(Issue) {
    "use strict";
    _inherits(StubIssue, Issue);
    var _super = _create_super(StubIssue);
    function StubIssue(code, requestIds, cookieNames) {
        var issueKind = arguments.length > 3 && arguments[3] !== void 0 /* IssueKind.Improvement */  ? arguments[3] : "Improvement";
        _class_call_check(this, StubIssue);
        var _this;
        _this = _super.call(this, code);
        _define_property(_assert_this_initialized(_this), "requestIds", void 0);
        _define_property(_assert_this_initialized(_this), "cookieNames", void 0);
        _define_property(_assert_this_initialized(_this), "issueKind", void 0);
        _define_property(_assert_this_initialized(_this), "locations", []);
        _define_property(_assert_this_initialized(_this), "mockIssueId", void 0);
        _define_property(_assert_this_initialized(_this), "mockIssueCategory", void 0);
        _this.requestIds = requestIds;
        _this.cookieNames = cookieNames;
        _this.issueKind = issueKind;
        return _this;
    }
    _create_class(StubIssue, [
        {
            key: "getDescription",
            value: function getDescription() {
                return {
                    file: '',
                    links: []
                };
            }
        },
        {
            key: "primaryKey",
            value: function primaryKey() {
                return "".concat(this.code(), "-(").concat(this.cookieNames.join(';'), ")-(").concat(this.requestIds.join(';'), ")");
            }
        },
        {
            key: "requests",
            value: function requests() {
                return this.requestIds.map(function(id) {
                    return {
                        requestId: id,
                        url: ''
                    };
                });
            }
        },
        {
            key: "getCategory",
            value: function getCategory() {
                return this.mockIssueCategory ? this.mockIssueCategory : "Other" /* IssueCategory.Other */ ;
            }
        },
        {
            key: "sources",
            value: function sources() {
                return this.locations;
            }
        },
        {
            key: "getKind",
            value: function getKind() {
                return this.issueKind;
            }
        },
        {
            key: "cookies",
            value: function cookies() {
                return this.cookieNames.map(function(name) {
                    return {
                        name: name,
                        domain: '',
                        path: ''
                    };
                });
            }
        },
        {
            key: "getIssueId",
            value: function getIssueId() {
                return this.mockIssueId;
            }
        }
    ], [
        {
            key: "createFromRequestIds",
            value: function createFromRequestIds(requestIds) {
                return new StubIssue('StubIssue', requestIds, []);
            }
        },
        {
            key: "createFromCookieNames",
            value: function createFromCookieNames(cookieNames) {
                return new StubIssue('StubIssue', [], cookieNames);
            }
        },
        {
            key: "createFromIssueKinds",
            value: function createFromIssueKinds(issueKinds) {
                return issueKinds.map(function(k) {
                    return new StubIssue('StubIssue', [], [], k);
                });
            }
        },
        {
            key: "createFromAffectedLocations",
            value: function createFromAffectedLocations(locations) {
                var issue = new StubIssue('StubIssue', [], []);
                issue.locations = locations;
                return issue;
            }
        },
        {
            key: "createFromIssueId",
            value: function createFromIssueId(issueId) {
                var issue = new StubIssue('StubIssue', [], []);
                issue.mockIssueId = issueId;
                return issue;
            }
        },
        {
            key: "createCookieIssue",
            value: function createCookieIssue(code) {
                var issue = new StubIssue(code, [], []);
                issue.mockIssueCategory = "Cookie" /* IssueCategory.Cookie */ ;
                return issue;
            }
        }
    ]);
    return StubIssue;
}(_models_issues_manager_Issue_js__WEBPACK_IMPORTED_MODULE_0__.Issue);
var ThirdPartyStubIssue = /*#__PURE__*/ function(StubIssue) {
    "use strict";
    _inherits(ThirdPartyStubIssue, StubIssue);
    var _super = _create_super(ThirdPartyStubIssue);
    function ThirdPartyStubIssue(code, isThirdParty) {
        _class_call_check(this, ThirdPartyStubIssue);
        var _this;
        _this = _super.call(this, code, [], []);
        _define_property(_assert_this_initialized(_this), "isThirdParty", void 0);
        _this.isThirdParty = isThirdParty;
        return _this;
    }
    _create_class(ThirdPartyStubIssue, [
        {
            key: "isCausedByThirdParty",
            value: function isCausedByThirdParty() {
                return this.isThirdParty;
            }
        }
    ]);
    return ThirdPartyStubIssue;
}(StubIssue);
function mkInspectorCspIssue(blockedURL) {
    return {
        code: "ContentSecurityPolicyIssue" /* Protocol.Audits.InspectorIssueCode.ContentSecurityPolicyIssue */ ,
        details: {
            contentSecurityPolicyIssueDetails: {
                isReportOnly: true,
                violatedDirective: 'testdirective',
                contentSecurityPolicyViolationType: "kURLViolation" /* Protocol.Audits.ContentSecurityPolicyViolationType.KURLViolation */ ,
                blockedURL: blockedURL
            }
        }
    };
} //# sourceMappingURL=StubIssue.js.map


}),
"./testing/UserMetricsHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  recordedMetricsContain: function() { return recordedMetricsContain; },
  resetRecordedMetrics: function() { return resetRecordedMetrics; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/host/host.js */ "./core/host/host.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @returns True, iff a metric event with the provided name and code was recorded. False otherwise.
 */ function recordedMetricsContain(actionName, actionCode) {
    return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.recordedEnumeratedHistograms.some(function(event) {
        return event.actionName === actionName && event.actionCode === actionCode;
    });
}
function resetRecordedMetrics() {
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.recordedEnumeratedHistograms = [];
} //# sourceMappingURL=UserMetricsHelpers.js.map


}),

}]);