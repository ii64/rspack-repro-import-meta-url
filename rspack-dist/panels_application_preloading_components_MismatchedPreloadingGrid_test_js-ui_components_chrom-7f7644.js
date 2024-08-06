"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_preloading_components_MismatchedPreloadingGrid_test_js-ui_components_chrom-7f7644"], {
"./panels/application/preloading/components/MismatchedPreloadingGrid.test.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/DataGridHelpers.js */ "./testing/DataGridHelpers.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components.js */ "./panels/application/preloading/components/components.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_js__WEBPACK_IMPORTED_MODULE_6__]);
_components_js__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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







var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
var zip2 = function(xs, ys) {
    assert.strictEqual(xs.length, ys.length);
    return Array.from(xs.map(function(_, i) {
        return [
            xs[i],
            ys[i]
        ];
    }));
};
function renderMismatchedPreloadingGrid(data) {
    return _renderMismatchedPreloadingGrid.apply(this, arguments);
}
function _renderMismatchedPreloadingGrid() {
    _renderMismatchedPreloadingGrid = _async_to_generator(function(data) {
        var component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_6__.MismatchedPreloadingGrid.MismatchedPreloadingGrid();
                    component.data = data;
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
                    assert.isNotNull(component.shadowRoot);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        component
                    ];
            }
        });
    });
    return _renderMismatchedPreloadingGrid.apply(this, arguments);
}
function assertDiff(gridComponent, cellIndex, spansExpected) {
    var controller = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(gridComponent, 'devtools-data-grid-controller', _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController);
    var grid = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(controller, 'devtools-data-grid', _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.DataGrid);
    assert.isNotNull(grid.shadowRoot);
    var cell = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getCellByIndexes)(grid.shadowRoot, cellIndex);
    var spans = cell.querySelectorAll('div span');
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = zip2(Array.from(spans), spansExpected)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), got = _step_value[0], expected = _step_value[1];
            assert.strictEqual(got.textContent, expected.textContent);
            assert.include(got.getAttribute('style'), expected.partOfStyle);
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
}
var FG_GREEN = 'color: var(--sys-color-green); text-decoration: line-through';
var FG_RED = 'color: var(--sys-color-error);';
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('MismatchedPreloadingGrid', function() {
    // Disabled due to flakiness
    it.skip('[crbug.com/1473557]: renderes no diff in URL', /*#__PURE__*/ _async_to_generator(function() {
        var data, component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (this.timeout() > 0) {
                        this.timeout(10000);
                    }
                    data = {
                        pageURL: 'https://example.com/prefetched.html',
                        rows: [
                            {
                                url: 'https://example.com/prefetched.html',
                                action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ 
                            }
                        ]
                    };
                    return [
                        4,
                        renderMismatchedPreloadingGrid(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(component, [
                        'URL',
                        'Action',
                        'Status'
                    ], [
                        [
                            'https://example.com/prefetched.html',
                            'Prefetch',
                            'Failure'
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renderes edit diff', /*#__PURE__*/ _async_to_generator(function() {
        var data, component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        pageURL: 'https://example.com/prefetched.html?q=1',
                        rows: [
                            {
                                url: 'https://example.com/prefetched.html?q=2',
                                action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */ 
                            }
                        ]
                    };
                    return [
                        4,
                        renderMismatchedPreloadingGrid(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(component, [
                        'URL',
                        'Action',
                        'Status'
                    ], [
                        [
                            'https://example.com/prefetched.html?q=21',
                            'Prefetch',
                            'Ready'
                        ]
                    ]);
                    assertDiff(component, {
                        row: 1,
                        column: 0
                    }, [
                        {
                            textContent: 'https://example.com/prefetched.html?q=',
                            partOfStyle: ''
                        },
                        {
                            textContent: '2',
                            partOfStyle: FG_RED
                        },
                        {
                            textContent: '1',
                            partOfStyle: FG_GREEN
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renderes add diff', /*#__PURE__*/ _async_to_generator(function() {
        var data, component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        pageURL: 'https://example.com/prefetched.html?q=1',
                        rows: [
                            {
                                url: 'https://example.com/prefetched.html',
                                action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */ 
                            }
                        ]
                    };
                    return [
                        4,
                        renderMismatchedPreloadingGrid(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(component, [
                        'URL',
                        'Action',
                        'Status'
                    ], [
                        [
                            'https://example.com/prefetched.html?q=1',
                            'Prefetch',
                            'Ready'
                        ]
                    ]);
                    assertDiff(component, {
                        row: 1,
                        column: 0
                    }, [
                        {
                            textContent: 'https://example.com/prefetched.html',
                            partOfStyle: ''
                        },
                        {
                            textContent: '?q=1',
                            partOfStyle: FG_GREEN
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renderes delete diff', /*#__PURE__*/ _async_to_generator(function() {
        var data, component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        pageURL: 'https://example.com/prefetched.html',
                        rows: [
                            {
                                url: 'https://example.com/prefetched.html?q=1',
                                action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */ 
                            }
                        ]
                    };
                    return [
                        4,
                        renderMismatchedPreloadingGrid(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(component, [
                        'URL',
                        'Action',
                        'Status'
                    ], [
                        [
                            'https://example.com/prefetched.html?q=1',
                            'Prefetch',
                            'Ready'
                        ]
                    ]);
                    assertDiff(component, {
                        row: 1,
                        column: 0
                    }, [
                        {
                            textContent: 'https://example.com/prefetched.html',
                            partOfStyle: ''
                        },
                        {
                            textContent: '?q=1',
                            partOfStyle: FG_RED
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renderes complex diff', /*#__PURE__*/ _async_to_generator(function() {
        var data, component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        pageURL: 'https://example.com/prefetched.html?q=1',
                        rows: [
                            {
                                url: 'https://example.com/prerendered.html?x=1',
                                action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */ 
                            }
                        ]
                    };
                    return [
                        4,
                        renderMismatchedPreloadingGrid(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(component, [
                        'URL',
                        'Action',
                        'Status'
                    ], [
                        [
                            'https://example.com/prerfendertched.html?xq=1',
                            'Prerender',
                            'Ready'
                        ]
                    ]);
                    assertDiff(component, {
                        row: 1,
                        column: 0
                    }, [
                        {
                            textContent: 'https://example.com/pre',
                            partOfStyle: ''
                        },
                        {
                            textContent: 'r',
                            partOfStyle: FG_RED
                        },
                        {
                            textContent: 'f',
                            partOfStyle: FG_GREEN
                        },
                        {
                            textContent: 'e',
                            partOfStyle: ''
                        },
                        {
                            textContent: 'nder',
                            partOfStyle: FG_RED
                        },
                        {
                            textContent: 'tch',
                            partOfStyle: FG_GREEN
                        },
                        {
                            textContent: 'ed.html?',
                            partOfStyle: ''
                        },
                        {
                            textContent: 'x',
                            partOfStyle: FG_RED
                        },
                        {
                            textContent: 'q',
                            partOfStyle: FG_GREEN
                        },
                        {
                            textContent: '=1',
                            partOfStyle: ''
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=MismatchedPreloadingGrid.test.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./panels/application/preloading/components/components.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MismatchedPreloadingGrid: function() { return /* reexport module object */ _MismatchedPreloadingGrid_js__WEBPACK_IMPORTED_MODULE_0__; },
  PreloadingDetailsReportView: function() { return /* reexport module object */ _PreloadingDetailsReportView_js__WEBPACK_IMPORTED_MODULE_1__; },
  PreloadingDisabledInfobar: function() { return /* reexport module object */ _PreloadingDisabledInfobar_js__WEBPACK_IMPORTED_MODULE_2__; },
  PreloadingGrid: function() { return /* reexport module object */ _PreloadingGrid_js__WEBPACK_IMPORTED_MODULE_3__; },
  PreloadingMismatchedHeadersGrid: function() { return /* reexport module object */ _PreloadingMismatchedHeadersGrid_js__WEBPACK_IMPORTED_MODULE_4__; },
  RuleSetDetailsView: function() { return /* reexport module object */ _RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__; },
  RuleSetGrid: function() { return /* reexport module object */ _RuleSetGrid_js__WEBPACK_IMPORTED_MODULE_6__; },
  UsedPreloadingView: function() { return /* reexport module object */ _UsedPreloadingView_js__WEBPACK_IMPORTED_MODULE_7__; }
});
/* harmony import */var _MismatchedPreloadingGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MismatchedPreloadingGrid.js */ "./panels/application/preloading/components/MismatchedPreloadingGrid.js");
/* harmony import */var _PreloadingDetailsReportView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreloadingDetailsReportView.js */ "./panels/application/preloading/components/PreloadingDetailsReportView.js");
/* harmony import */var _PreloadingDisabledInfobar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreloadingDisabledInfobar.js */ "./panels/application/preloading/components/PreloadingDisabledInfobar.js");
/* harmony import */var _PreloadingGrid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PreloadingGrid.js */ "./panels/application/preloading/components/PreloadingGrid.js");
/* harmony import */var _PreloadingMismatchedHeadersGrid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreloadingMismatchedHeadersGrid.js */ "./panels/application/preloading/components/PreloadingMismatchedHeadersGrid.js");
/* harmony import */var _RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RuleSetDetailsView.js */ "./panels/application/preloading/components/RuleSetDetailsView.js");
/* harmony import */var _RuleSetGrid_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RuleSetGrid.js */ "./panels/application/preloading/components/RuleSetGrid.js");
/* harmony import */var _UsedPreloadingView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UsedPreloadingView.js */ "./panels/application/preloading/components/UsedPreloadingView.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__]);
_RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








 //# sourceMappingURL=components.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./ui/components/chrome_link/chrome_link.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ChromeLink: function() { return /* reexport module object */ _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChromeLink.js */ "./ui/components/chrome_link/ChromeLink.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=chrome_link.js.map


}),
"./ui/components/report_view/report_view.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ReportView: function() { return /* reexport module object */ _ReportView_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _ReportView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportView.js */ "./ui/components/report_view/ReportView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=report_view.js.map


}),

}]);