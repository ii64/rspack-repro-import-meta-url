"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_components_StackTrace_test_js"], {
"./panels/application/components/StackTrace.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/expandable_list/expandable_list.js */ "./ui/components/expandable_list/expandable_list.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components.js */ "./panels/application/components/components.js");
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





var makeFrame = function() {
    var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var newFrame = _object_spread({
        resourceTreeModel: function() {
            return {
                target: function() {
                    return {};
                }
            };
        }
    }, overrides);
    return newFrame;
};
function mockBuildStackTraceRows(stackTrace, _target, _linkifier, _tabStops, _updateCallback) {
    return stackTrace.callFrames.map(function(callFrame) {
        return {
            functionName: callFrame.functionName,
            ignoreListHide: callFrame.url.includes('hidden'),
            link: _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.Linkifier.Linkifier.linkifyURL(callFrame.url),
            rowCountHide: false
        };
    });
}
var fakeScriptId = '1';
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('StackTrace', function() {
    it('does not generate rows when there is no data', function() {
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_4__.StackTrace.StackTrace();
        var rows = component.createRowTemplates();
        assert.deepEqual(rows, []);
    });
    it('generates rows from stack trace data', function() {
        var frame = makeFrame({
            getCreationStackTraceData: function() {
                return {
                    creationStackTrace: {
                        callFrames: [
                            {
                                functionName: 'function1',
                                url: 'http://www.example.com/script1.js',
                                lineNumber: 15,
                                columnNumber: 10,
                                scriptId: fakeScriptId
                            },
                            {
                                functionName: 'function2',
                                url: 'http://www.example.com/script2.js',
                                lineNumber: 20,
                                columnNumber: 5,
                                scriptId: fakeScriptId
                            }
                        ]
                    },
                    creationStackTraceTarget: {}
                };
            }
        });
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_4__.StackTrace.StackTrace();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        component.data = {
            frame: frame,
            buildStackTraceRows: mockBuildStackTraceRows
        };
        assert.isNotNull(component.shadowRoot);
        var expandableList = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, 'devtools-expandable-list', _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_2__.ExpandableList.ExpandableList);
        var expandButton = expandableList.shadowRoot.querySelector('button.arrow-icon-button');
        assert.instanceOf(expandButton, HTMLButtonElement);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(expandButton);
        var stackTraceRows = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(expandableList, 'devtools-stack-trace-row', _components_js__WEBPACK_IMPORTED_MODULE_4__.StackTrace.StackTraceRow);
        var stackTraceText = [];
        stackTraceRows.forEach(function(row) {
            assert.isNotNull(row.shadowRoot);
            stackTraceText = stackTraceText.concat((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(row.shadowRoot, '.stack-trace-row'));
        });
        assert.deepEqual(stackTraceText, [
            'function1\xA0@\xA0www.example.com/script1.js',
            'function2\xA0@\xA0www.example.com/script2.js'
        ]);
    });
    it('hides hidden rows behind "show all" button', /*#__PURE__*/ _async_to_generator(function() {
        var frame, component, expandableList, expandButton, stackTraceRows, stackTraceText, stackTraceLinkButton, showAllButton, openedStackTraceRows, openedStackTraceText, newStackTraceLinkButton, showLessButton, reclosedStackTraceRows;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    frame = makeFrame({
                        getCreationStackTraceData: function() {
                            return {
                                creationStackTrace: {
                                    callFrames: [
                                        {
                                            functionName: 'function1',
                                            url: 'http://www.example.com/script.js',
                                            lineNumber: 15,
                                            columnNumber: 10,
                                            scriptId: fakeScriptId
                                        },
                                        {
                                            functionName: 'function2',
                                            url: 'http://www.example.com/hidden.js',
                                            lineNumber: 20,
                                            columnNumber: 5,
                                            scriptId: fakeScriptId
                                        }
                                    ]
                                },
                                creationStackTraceTarget: {}
                            };
                        }
                    });
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_4__.StackTrace.StackTrace();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
                    component.data = {
                        frame: frame,
                        buildStackTraceRows: mockBuildStackTraceRows
                    };
                    assert.isNotNull(component.shadowRoot);
                    expandableList = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, 'devtools-expandable-list', _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_2__.ExpandableList.ExpandableList);
                    expandButton = expandableList.shadowRoot.querySelector('button.arrow-icon-button');
                    assert.instanceOf(expandButton, HTMLButtonElement);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(expandButton);
                    return [
                        4,
                        new Promise(function(resolve) {
                            setTimeout(function() {
                                resolve();
                            }, 1500);
                        })
                    ];
                case 1:
                    _state.sent();
                    stackTraceRows = Array.from(expandableList.shadowRoot.querySelectorAll('[data-stack-trace-row]'));
                    stackTraceText = [];
                    stackTraceRows.forEach(function(row) {
                        assert.isNotNull(row.shadowRoot);
                        stackTraceText = stackTraceText.concat((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(row.shadowRoot, '.stack-trace-row'));
                    });
                    assert.deepEqual(stackTraceText, [
                        'function1\xA0@\xA0www.example.com/script.js',
                        'Show 1 more frame'
                    ]);
                    stackTraceLinkButton = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(expandableList, 'devtools-stack-trace-link-button', _components_js__WEBPACK_IMPORTED_MODULE_4__.StackTrace.StackTraceLinkButton);
                    showAllButton = stackTraceLinkButton.shadowRoot.querySelector('.stack-trace-row button.link');
                    assert.instanceOf(showAllButton, HTMLButtonElement);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(showAllButton);
                    openedStackTraceRows = Array.from(expandableList.shadowRoot.querySelectorAll('[data-stack-trace-row]'));
                    openedStackTraceText = [];
                    openedStackTraceRows.forEach(function(row) {
                        assert.isNotNull(row.shadowRoot);
                        openedStackTraceText = openedStackTraceText.concat((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(row.shadowRoot, '.stack-trace-row'));
                    });
                    assert.deepEqual(openedStackTraceText, [
                        'function1\xA0@\xA0www.example.com/script.js',
                        'function2\xA0@\xA0www.example.com/hidden.js',
                        'Show less'
                    ]);
                    newStackTraceLinkButton = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(expandableList, 'devtools-stack-trace-link-button', _components_js__WEBPACK_IMPORTED_MODULE_4__.StackTrace.StackTraceLinkButton);
                    showLessButton = newStackTraceLinkButton.shadowRoot.querySelector('.stack-trace-row button.link');
                    assert.instanceOf(showLessButton, HTMLButtonElement);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(showLessButton);
                    reclosedStackTraceRows = Array.from(expandableList.shadowRoot.querySelectorAll('[data-stack-trace-row]'));
                    stackTraceText = [];
                    reclosedStackTraceRows.forEach(function(row) {
                        assert.isNotNull(row.shadowRoot);
                        stackTraceText = stackTraceText.concat((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(row.shadowRoot, '.stack-trace-row'));
                    });
                    assert.deepEqual(stackTraceText, [
                        'function1\xA0@\xA0www.example.com/script.js',
                        'Show 1 more frame'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=StackTrace.test.js.map


}),
"./panels/application/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BackForwardCacheView: function() { return /* reexport module object */ _BackForwardCacheView_js__WEBPACK_IMPORTED_MODULE_0__; },
  BounceTrackingMitigationsView: function() { return /* reexport module object */ _BounceTrackingMitigationsView_js__WEBPACK_IMPORTED_MODULE_1__; },
  EndpointsGrid: function() { return /* reexport module object */ _EndpointsGrid_js__WEBPACK_IMPORTED_MODULE_2__; },
  FrameDetailsView: function() { return /* reexport module object */ _FrameDetailsView_js__WEBPACK_IMPORTED_MODULE_3__; },
  InterestGroupAccessGrid: function() { return /* reexport module object */ _InterestGroupAccessGrid_js__WEBPACK_IMPORTED_MODULE_4__; },
  OriginTrialTreeView: function() { return /* reexport module object */ _OriginTrialTreeView_js__WEBPACK_IMPORTED_MODULE_5__; },
  ProtocolHandlersView: function() { return /* reexport module object */ _ProtocolHandlersView_js__WEBPACK_IMPORTED_MODULE_6__; },
  ReportsGrid: function() { return /* reexport module object */ _ReportsGrid_js__WEBPACK_IMPORTED_MODULE_7__; },
  ServiceWorkerRouterView: function() { return /* reexport module object */ _ServiceWorkerRouterView_js__WEBPACK_IMPORTED_MODULE_8__; },
  SharedStorageAccessGrid: function() { return /* reexport module object */ _SharedStorageAccessGrid_js__WEBPACK_IMPORTED_MODULE_9__; },
  SharedStorageMetadataView: function() { return /* reexport module object */ _SharedStorageMetadataView_js__WEBPACK_IMPORTED_MODULE_10__; },
  StackTrace: function() { return /* reexport module object */ _StackTrace_js__WEBPACK_IMPORTED_MODULE_11__; },
  StorageMetadataView: function() { return /* reexport module object */ _StorageMetadataView_js__WEBPACK_IMPORTED_MODULE_12__; },
  TrustTokensView: function() { return /* reexport module object */ _TrustTokensView_js__WEBPACK_IMPORTED_MODULE_13__; }
});
/* harmony import */var _BackForwardCacheView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackForwardCacheView.js */ "./panels/application/components/BackForwardCacheView.js");
/* harmony import */var _BounceTrackingMitigationsView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BounceTrackingMitigationsView.js */ "./panels/application/components/BounceTrackingMitigationsView.js");
/* harmony import */var _EndpointsGrid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EndpointsGrid.js */ "./panels/application/components/EndpointsGrid.js");
/* harmony import */var _FrameDetailsView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FrameDetailsView.js */ "./panels/application/components/FrameDetailsView.js");
/* harmony import */var _InterestGroupAccessGrid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InterestGroupAccessGrid.js */ "./panels/application/components/InterestGroupAccessGrid.js");
/* harmony import */var _OriginTrialTreeView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OriginTrialTreeView.js */ "./panels/application/components/OriginTrialTreeView.js");
/* harmony import */var _ProtocolHandlersView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProtocolHandlersView.js */ "./panels/application/components/ProtocolHandlersView.js");
/* harmony import */var _ReportsGrid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReportsGrid.js */ "./panels/application/components/ReportsGrid.js");
/* harmony import */var _ServiceWorkerRouterView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ServiceWorkerRouterView.js */ "./panels/application/components/ServiceWorkerRouterView.js");
/* harmony import */var _SharedStorageAccessGrid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SharedStorageAccessGrid.js */ "./panels/application/components/SharedStorageAccessGrid.js");
/* harmony import */var _SharedStorageMetadataView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SharedStorageMetadataView.js */ "./panels/application/components/SharedStorageMetadataView.js");
/* harmony import */var _StackTrace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./StackTrace.js */ "./panels/application/components/StackTrace.js");
/* harmony import */var _StorageMetadataView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./StorageMetadataView.js */ "./panels/application/components/StorageMetadataView.js");
/* harmony import */var _TrustTokensView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TrustTokensView.js */ "./panels/application/components/TrustTokensView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.














 //# sourceMappingURL=components.js.map


}),

}]);