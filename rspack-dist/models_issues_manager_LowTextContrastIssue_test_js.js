"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_issues_manager_LowTextContrastIssue_test_js"], {
"./models/issues_manager/LowTextContrastIssue.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _panels_issues_issues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../panels/issues/issues.js */ "./panels/issues/issues.js");
/* harmony import */var _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockIssuesManager.js */ "./testing/MockIssuesManager.js");
/* harmony import */var _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockIssuesModel.js */ "./testing/MockIssuesModel.js");
/* harmony import */var _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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




describe('LowTextContrastIssue', function() {
    it('aggregates multiple issues with duplicates correctly', function() {
        var mockModel = new _testing_MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_2__.MockIssuesModel([]);
        var mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_1__.MockIssuesManager([]);
        var commonDetails = {
            violatingNodeSelector: 'div',
            contrastRatio: 1,
            thresholdAA: 1,
            thresholdAAA: 1,
            fontSize: '14px',
            fontWeight: '500'
        };
        var issueDetails = [
            _object_spread_props(_object_spread({}, commonDetails), {
                violatingNodeId: 1
            }),
            _object_spread_props(_object_spread({}, commonDetails), {
                violatingNodeId: 2
            }),
            _object_spread_props(_object_spread({}, commonDetails), {
                violatingNodeId: 3
            })
        ];
        var issues = issueDetails.map(function(details) {
            return new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.LowTextContrastIssue.LowTextContrastIssue(details, mockModel);
        });
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
        assert.strictEqual(aggregatedIssues.length, 1);
        var lowContrastIssues = Array.from(aggregatedIssues[0].getLowContrastIssues());
        assert.strictEqual(lowContrastIssues.length, 3);
        var violatingNodeIds = [];
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = lowContrastIssues[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var contrastIssue = _step1.value;
                violatingNodeIds.push(contrastIssue.details().violatingNodeId);
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
        violatingNodeIds.sort();
        assert.deepEqual(violatingNodeIds, [
            1,
            2,
            3
        ]);
    });
}); //# sourceMappingURL=LowTextContrastIssue.test.js.map


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