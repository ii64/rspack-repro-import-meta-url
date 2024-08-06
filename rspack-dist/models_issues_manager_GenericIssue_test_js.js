"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_issues_manager_GenericIssue_test_js"], {
"./models/issues_manager/GenericIssue.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockIssuesModel.js */ "./testing/MockIssuesModel.js");
/* harmony import */var _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('GenericIssue', function() {
    var createProtocolIssueWithoutDetails = function createProtocolIssueWithoutDetails() {
        return {
            code: "GenericIssue" /* Protocol.Audits.InspectorIssueCode.GenericIssue */ ,
            details: {}
        };
    };
    var createProtocolIssueWithDetails = function createProtocolIssueWithDetails(genericIssueDetails) {
        return {
            code: "GenericIssue" /* Protocol.Audits.InspectorIssueCode.GenericIssue */ ,
            details: {
                genericIssueDetails: genericIssueDetails
            }
        };
    };
    var mockModel = new _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_1__.MockIssuesModel([]);
    beforeEach(function() {
        // The component warns if not provided with an issue that has details, but
        // we don't need that noise in the test output.
        sinon.stub(console, 'warn');
    });
    it('adds an incorrect form label use issue with valid details', function() {
        var issueDetails = {
            errorType: "FormLabelForNameError" /* Protocol.Audits.GenericIssueErrorType.FormLabelForNameError */ ,
            frameId: 'main',
            violatingNodeId: 1,
            violatingNodeAttribute: 'attribute'
        };
        var issue = createProtocolIssueWithDetails(issueDetails);
        var genericIssues = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.GenericIssue.GenericIssue.fromInspectorIssue(mockModel, issue);
        assert.strictEqual(genericIssues.length, 1);
        var genericIssue = genericIssues[0];
        assert.strictEqual(genericIssue.getCategory(), "Generic" /* IssuesManager.Issue.IssueCategory.Generic */ );
        assert.strictEqual(genericIssue.primaryKey(), "GenericIssue::FormLabelForNameError-(main)-(1)-(attribute)-(no-request)");
        assert.strictEqual(genericIssue.getKind(), "PageError" /* IssuesManager.Issue.IssueKind.PageError */ );
        assert.isNotNull(genericIssue.getDescription());
    });
    it('adds an incorrect form label use issue without details', function() {
        var inspectorIssueWithoutGenericDetails = createProtocolIssueWithoutDetails();
        var genericIssues = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.GenericIssue.GenericIssue.fromInspectorIssue(mockModel, inspectorIssueWithoutGenericDetails);
        assert.isEmpty(genericIssues);
    });
    it('adds a CORB/ORB issue with valid details', function() {
        var issueDetails = {
            errorType: "ResponseWasBlockedByORB" /* Protocol.Audits.GenericIssueErrorType.ResponseWasBlockedByORB */ ,
            request: {
                requestId: 'blabla'
            }
        };
        var issue = createProtocolIssueWithDetails(issueDetails);
        var genericIssues = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.GenericIssue.GenericIssue.fromInspectorIssue(mockModel, issue);
        assert.strictEqual(genericIssues.length, 1);
        var genericIssue = genericIssues[0];
        assert.strictEqual(genericIssue.getCategory(), "Generic" /* IssuesManager.Issue.IssueCategory.Generic */ );
        assert.strictEqual(genericIssue.primaryKey(), 'GenericIssue::ResponseWasBlockedByORB-(undefined)-(undefined)-(undefined)-(blabla)');
        assert.strictEqual(genericIssue.getKind(), "Improvement" /* IssuesManager.Issue.IssueKind.Improvement */ );
        assert.isNotNull(genericIssue.getDescription());
    });
}); //# sourceMappingURL=GenericIssue.test.js.map


}),
"./testing/MockIssuesModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MockIssuesModel: function() { return MockIssuesModel; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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

var MockIssuesModel = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(MockIssuesModel, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(MockIssuesModel);
    function MockIssuesModel(issues) {
        _class_call_check(this, MockIssuesModel);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "mockIssues", void 0);
        _this.mockIssues = issues;
        return _this;
    }
    _create_class(MockIssuesModel, [
        {
            key: "issues",
            value: function issues() {
                return this.mockIssues;
            }
        },
        {
            key: "target",
            value: function target() {
                return {
                    id: function() {
                        return 'fake-id';
                    }
                };
            }
        }
    ]);
    return MockIssuesModel;
} //# sourceMappingURL=MockIssuesModel.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);


}),

}]);