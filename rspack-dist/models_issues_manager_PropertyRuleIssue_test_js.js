"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_issues_manager_PropertyRuleIssue_test_js"], {
"./models/issues_manager/PropertyRuleIssue.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _panels_issues_issues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../panels/issues/issues.js */ "./panels/issues/issues.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockIssuesManager.js */ "./testing/MockIssuesManager.js");
/* harmony import */var _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockIssuesModel.js */ "./testing/MockIssuesModel.js");
/* harmony import */var _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





function createProtocolIssue(propertyRuleIssueDetails) {
    return {
        code: "PropertyRuleIssue" /* Protocol.Audits.InspectorIssueCode.PropertyRuleIssue */ ,
        details: {
            propertyRuleIssueDetails: propertyRuleIssueDetails
        }
    };
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('PropertyRuleIssue', function() {
    var mockModel = new _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesModel([]);
    var mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_2__.MockIssuesManager([]);
    it('can be created for property rules parsing failures', function() {
        var issueDetails = {
            sourceCodeLocation: {
                url: 'http://example.com',
                lineNumber: 2,
                columnNumber: 2
            },
            propertyRuleIssueReason: "InvalidInitialValue" /* Protocol.Audits.PropertyRuleIssueReason.InvalidInitialValue */ ,
            propertyValue: 'invalid'
        };
        var issue = createProtocolIssue(issueDetails);
        var propertyRuleIssues = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRuleIssue.PropertyRuleIssue.fromInspectorIssue(mockModel, issue);
        assert.lengthOf(propertyRuleIssues, 1);
        var propertyRuleIssue = propertyRuleIssues[0];
        assert.strictEqual(propertyRuleIssue.getCategory(), "Other" /* IssuesManager.Issue.IssueCategory.Other */ );
        assert.deepStrictEqual(propertyRuleIssue.sources(), [
            issueDetails.sourceCodeLocation
        ]);
        assert.strictEqual(propertyRuleIssue.getKind(), "PageError" /* IssuesManager.Issue.IssueKind.PageError */ );
        assert.isNotNull(propertyRuleIssue.getDescription());
        assert.strictEqual(propertyRuleIssue.getPropertyName(), 'initial-value');
    });
    it('only aggregates identical issues', function() {
        var issueDetails = [
            {
                sourceCodeLocation: {
                    url: 'http://example.com',
                    lineNumber: 2,
                    columnNumber: 2
                },
                propertyRuleIssueReason: "InvalidInitialValue" /* Protocol.Audits.PropertyRuleIssueReason.InvalidInitialValue */ ,
                propertyValue: 'invalid'
            },
            {
                sourceCodeLocation: {
                    url: 'http://example.com',
                    lineNumber: 2,
                    columnNumber: 2
                },
                propertyRuleIssueReason: "InvalidInitialValue" /* Protocol.Audits.PropertyRuleIssueReason.InvalidInitialValue */ ,
                propertyValue: 'invalid'
            },
            {
                sourceCodeLocation: {
                    url: 'http://example.com',
                    lineNumber: 2,
                    columnNumber: 2
                },
                propertyRuleIssueReason: "InvalidInherits" /* Protocol.Audits.PropertyRuleIssueReason.InvalidInherits */ ,
                propertyValue: 'invalid'
            },
            {
                sourceCodeLocation: {
                    url: 'http://example.com',
                    lineNumber: 3,
                    columnNumber: 2
                },
                propertyRuleIssueReason: "InvalidInitialValue" /* Protocol.Audits.PropertyRuleIssueReason.InvalidInitialValue */ ,
                propertyValue: 'invalid'
            }
        ];
        var issues = issueDetails.map(function(details) {
            return _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRuleIssue.PropertyRuleIssue.fromInspectorIssue(mockModel, createProtocolIssue(details));
        }).flat();
        assert.lengthOf(issues, 4);
        var aggregator = new _panels_issues_issues_js__WEBPACK_IMPORTED_MODULE_0__.IssueAggregator.IssueAggregator(mockManager);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = issues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var issue = _step.value;
                mockManager.dispatchEventToListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */ , {
                    issuesModel: mockModel,
                    issue: issue
                });
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
        var aggregatedIssues = Array.from(aggregator.aggregatedIssues());
        assert.lengthOf(aggregatedIssues, 3);
        // Use shallow comparison. We thus ensure the correct issues are aggregated:
        assert.strictEqual(Array.from(aggregatedIssues[0].sources())[0], issueDetails[0].sourceCodeLocation);
        assert.strictEqual(Array.from(aggregatedIssues[1].sources())[0], issueDetails[2].sourceCodeLocation);
        assert.strictEqual(Array.from(aggregatedIssues[2].sources())[0], issueDetails[3].sourceCodeLocation);
    });
}); //# sourceMappingURL=PropertyRuleIssue.test.js.map


}),
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

}]);