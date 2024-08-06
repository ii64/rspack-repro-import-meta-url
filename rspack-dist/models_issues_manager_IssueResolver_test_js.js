"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_issues_manager_IssueResolver_test_js"], {
"./models/issues_manager/IssueResolver.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/MockIssuesManager.js */ "./testing/MockIssuesManager.js");
/* harmony import */var _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/StubIssue.js */ "./testing/StubIssue.js");
/* harmony import */var _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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



describe('IssueResolver', function() {
    var issueId1 = 'foo';
    describe('tryGet', function() {
        it('should resolve an existing issue', function() {
            var mockIssue = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_1__.StubIssue.createFromIssueId(issueId1);
            var issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_0__.MockIssuesManager([
                mockIssue
            ]);
            var issueResolver = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssueResolver.IssueResolver(issuesManager);
            var issue = issueResolver.tryGet(issueId1, function() {
                throw new Error('This should not get called');
            });
            assert.isFalse(issuesManager.hasEventListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */ ));
            assert.strictEqual(issue, mockIssue);
        });
        it('should not resolve an unknown issue', function() {
            var issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_0__.MockIssuesManager([]);
            var issueResolver = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssueResolver.IssueResolver(issuesManager);
            var issue = issueResolver.tryGet(issueId1, function() {
                throw new Error('This should not get called');
            });
            assert.isTrue(issuesManager.hasEventListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */ ));
            assert.strictEqual(issue, null);
            issueResolver.clear();
        });
        it('should resolve a previously unknown issue when it becomes available', /*#__PURE__*/ _async_to_generator(function() {
            var mockIssuesManager, issuesManager, issueResolver, waitForCall, mockIssue, issue;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockIssuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_0__.MockIssuesManager([]);
                        issuesManager = mockIssuesManager;
                        issueResolver = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssueResolver.IssueResolver(issuesManager);
                        waitForCall = new Promise(function(resolve) {
                            var issue = issueResolver.tryGet(issueId1, resolve);
                            assert.strictEqual(issue, null);
                        });
                        assert.isTrue(issuesManager.hasEventListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */ ));
                        mockIssue = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_1__.StubIssue.createFromIssueId(issueId1);
                        mockIssuesManager.addIssue(mockIssue);
                        return [
                            4,
                            waitForCall
                        ];
                    case 1:
                        issue = _state.sent();
                        assert.isFalse(issuesManager.hasEventListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */ ));
                        assert.strictEqual(issue, mockIssue);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('waitFor', function() {
        it('should resolve an existing issue', /*#__PURE__*/ _async_to_generator(function() {
            var mockIssue, issuesManager, issueResolver, issue;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockIssue = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_1__.StubIssue.createFromIssueId(issueId1);
                        issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_0__.MockIssuesManager([
                            mockIssue
                        ]);
                        issueResolver = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssueResolver.IssueResolver(issuesManager);
                        return [
                            4,
                            issueResolver.waitFor(issueId1)
                        ];
                    case 1:
                        issue = _state.sent();
                        assert.isFalse(issuesManager.hasEventListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */ ));
                        assert.strictEqual(issue, mockIssue);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should reject the promise after `clear` has been called', /*#__PURE__*/ _async_to_generator(function() {
            var issuesManager, issueResolver, issue, e;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_0__.MockIssuesManager([]);
                        issueResolver = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssueResolver.IssueResolver(issuesManager);
                        issue = issueResolver.waitFor(issueId1);
                        assert.isTrue(issuesManager.hasEventListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */ ));
                        issueResolver.clear();
                        assert.isFalse(issuesManager.hasEventListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */ ));
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            issue
                        ];
                    case 2:
                        _state.sent();
                        return [
                            3,
                            4
                        ];
                    case 3:
                        e = _state.sent();
                        return [
                            2
                        ];
                    case 4:
                        assert.fail('Expected `await issue` to throw.');
                        return [
                            2
                        ];
                }
            });
        }));
        it('should resolve a previously unknown issue when it becomes available', /*#__PURE__*/ _async_to_generator(function() {
            var mockIssuesManager, issuesManager, issueResolver, issuePromise, mockIssue, issue;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockIssuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_0__.MockIssuesManager([]);
                        issuesManager = mockIssuesManager;
                        issueResolver = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssueResolver.IssueResolver(issuesManager);
                        issuePromise = issueResolver.waitFor(issueId1);
                        assert.isTrue(issuesManager.hasEventListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */ ));
                        mockIssue = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_1__.StubIssue.createFromIssueId(issueId1);
                        mockIssuesManager.addIssue(mockIssue);
                        return [
                            4,
                            issuePromise
                        ];
                    case 1:
                        issue = _state.sent();
                        assert.isFalse(issuesManager.hasEventListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */ ));
                        assert.strictEqual(issue, mockIssue);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=IssueResolver.test.js.map


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

}]);