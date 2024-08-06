"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_issues_manager_Issue_test_js"], {
"./models/issues_manager/Issue.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/StubIssue.js */ "./testing/StubIssue.js");
/* harmony import */var _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('Issue', function() {
    it('should store the code', function() {
        var code = 'anExampleIssueCodeString';
        var issue = new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_0__.StubIssue(code, [], []);
        assert.strictEqual(issue.code(), code);
    });
});
describe('CookieIssue', function() {
    describe('isCausedByThirdParty', function() {
        var isCausedByThirdParty = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.CookieIssue.isCausedByThirdParty;
        var mockResourceTreeFrame = function(domainAndRegistry) {
            return {
                domainAndRegistry: function() {
                    return domainAndRegistry;
                }
            };
        };
        it('returns true when the top frame is not yet available', function() {
            assert.isTrue(isCausedByThirdParty(null, 'https://example.com/index.html'));
        });
        it('returns false when no cookieUrl is available or cookieUrl is invalid', function() {
            var resourceTreeFrame = mockResourceTreeFrame('example.com');
            assert.isFalse(isCausedByThirdParty(resourceTreeFrame, undefined, 'http://www.example.com'));
            assert.isFalse(isCausedByThirdParty(resourceTreeFrame, '~~really an invalid URL', 'http://www.example.com'));
        });
        it('returns true for third-party cookieUrls', function() {
            var resourceTreeFrame = mockResourceTreeFrame('example.com');
            assert.isTrue(isCausedByThirdParty(resourceTreeFrame, 'http://foo.com/index.html'));
            assert.isTrue(isCausedByThirdParty(resourceTreeFrame, 'http://example.com.bar/foo.php'));
            assert.isTrue(isCausedByThirdParty(resourceTreeFrame, 'http://eexample.com/index.html'));
            assert.isTrue(isCausedByThirdParty(resourceTreeFrame, 'http://sub.domain.eexample.com/index.html'));
        });
        it('returns false for first-party cookieUrls', function() {
            var resourceTreeFrame = mockResourceTreeFrame('example.com');
            assert.isFalse(isCausedByThirdParty(resourceTreeFrame, 'http://www.example.com/index.html', 'http://www.example.com'));
            assert.isFalse(isCausedByThirdParty(resourceTreeFrame, 'http://sub.domain.example.com/should-work.php', 'http://www.example.com'));
        });
        it('returns true for first-party cookieUrls in a third-party context', function() {
            var resourceTreeFrame = mockResourceTreeFrame('example.com');
            assert.isTrue(isCausedByThirdParty(resourceTreeFrame, 'http://www.example.com/index.html'));
            assert.isTrue(isCausedByThirdParty(resourceTreeFrame, 'http://sub.domain.example.com/should-work.php'));
        });
    });
}); //# sourceMappingURL=Issue.test.js.map


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