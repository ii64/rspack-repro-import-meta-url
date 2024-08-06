"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_data_grid_DataGridController_test_js"], {
"./ui/components/data_grid/DataGridController.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DataGridHelpers.js */ "./testing/DataGridHelpers.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/MutationHelpers.js */ "./testing/MutationHelpers.js");
/* harmony import */var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _data_grid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data_grid.js */ "./ui/components/data_grid/data_grid.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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






var coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__.RenderCoordinator.RenderCoordinator.instance();
var getInternalDataGridShadowRoot = function(component) {
    var shadowRoot = component.shadowRoot.querySelector('devtools-data-grid').shadowRoot;
    assert.isNotNull(shadowRoot);
    return shadowRoot;
};
describe('DataGridController', function() {
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('sorting the columns', function() {
        var columns = [
            {
                id: 'key',
                title: 'Key',
                sortable: true,
                widthWeighting: 1,
                visible: true,
                hideable: false
            }
        ];
        var rows = [
            {
                cells: [
                    {
                        columnId: 'key',
                        value: 'Bravo'
                    }
                ]
            },
            {
                cells: [
                    {
                        columnId: 'key',
                        value: 'Alpha'
                    }
                ]
            },
            {
                cells: [
                    {
                        columnId: 'key',
                        value: 'Charlie'
                    }
                ]
            }
        ];
        var numericRows = [
            {
                cells: [
                    {
                        columnId: 'key',
                        value: 2
                    }
                ]
            },
            {
                cells: [
                    {
                        columnId: 'key',
                        value: 1
                    }
                ]
            },
            {
                cells: [
                    {
                        columnId: 'key',
                        value: 3
                    }
                ]
            }
        ];
        it('lets the user click to sort the column in ASC order', /*#__PURE__*/ _async_to_generator(function() {
            var component, internalDataGridShadow;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
                        component.data = {
                            rows: rows,
                            columns: columns
                        };
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        internalDataGridShadow = getInternalDataGridShadowRoot(component);
                        return [
                            4,
                            (0,_testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_3__.withMutations)([
                                {
                                    // Two text mutations as LitHtml updates the text nodes but does not
                                    // touch the actual DOM nodes.
                                    target: _testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_3__.TEXT_NODE,
                                    max: 2
                                }
                            ], internalDataGridShadow, function() {
                                var _ref = _async_to_generator(function(shadowRoot) {
                                    var keyHeader, cellValues;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                keyHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getHeaderCellForColumnId)(shadowRoot, 'key');
                                                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader);
                                                return [
                                                    4,
                                                    coordinator.done()
                                                ];
                                            case 1:
                                                _state.sent();
                                                cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(shadowRoot, 'key');
                                                assert.deepEqual(cellValues, [
                                                    'Alpha',
                                                    'Bravo',
                                                    'Charlie'
                                                ]);
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                });
                                return function(shadowRoot) {
                                    return _ref.apply(this, arguments);
                                };
                            }())
                        ];
                    case 2:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('supports sorting numeric columns', /*#__PURE__*/ _async_to_generator(function() {
            var component, internalDataGridShadow, keyHeader, cellValues;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
                        component.data = {
                            rows: numericRows,
                            columns: columns
                        };
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        internalDataGridShadow = getInternalDataGridShadowRoot(component);
                        keyHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getHeaderCellForColumnId)(internalDataGridShadow, 'key');
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // ASC order
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
                        assert.deepEqual(cellValues, [
                            '1',
                            '2',
                            '3'
                        ]);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // DESC order
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 3:
                        _state.sent();
                        cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
                        assert.deepEqual(cellValues, [
                            '3',
                            '2',
                            '1'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('can be provided an initial sort which is immediately applied', /*#__PURE__*/ _async_to_generator(function() {
            var component, internalDataGridShadow, cellValues;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
                        component.data = {
                            rows: rows,
                            columns: columns,
                            initialSort: {
                                columnId: 'key',
                                direction: "ASC" /* DataGrid.DataGridUtils.SortDirection.ASC */ 
                            }
                        };
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        internalDataGridShadow = getInternalDataGridShadowRoot(component);
                        cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
                        assert.deepEqual(cellValues, [
                            'Alpha',
                            'Bravo',
                            'Charlie'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('lets the user click to change the sort when it is initially provided', /*#__PURE__*/ _async_to_generator(function() {
            var component, internalDataGridShadow, keyHeader, cellValues;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
                        component.data = {
                            rows: rows,
                            columns: columns,
                            initialSort: {
                                columnId: 'key',
                                direction: "ASC" /* DataGrid.DataGridUtils.SortDirection.ASC */ 
                            }
                        };
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        internalDataGridShadow = getInternalDataGridShadowRoot(component);
                        keyHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getHeaderCellForColumnId)(internalDataGridShadow, 'key');
                        cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
                        assert.deepEqual(cellValues, [
                            'Alpha',
                            'Bravo',
                            'Charlie'
                        ]);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // DESC order
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
                        assert.deepEqual(cellValues, [
                            'Charlie',
                            'Bravo',
                            'Alpha'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('lets the user click twice to sort the column in DESC order', /*#__PURE__*/ _async_to_generator(function() {
            var component, internalDataGridShadow, keyHeader, cellValues;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
                        component.data = {
                            rows: rows,
                            columns: columns
                        };
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        internalDataGridShadow = getInternalDataGridShadowRoot(component);
                        keyHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getHeaderCellForColumnId)(internalDataGridShadow, 'key');
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // ASC order
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
                        assert.deepEqual(cellValues, [
                            'Alpha',
                            'Bravo',
                            'Charlie'
                        ]);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // DESC order
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 3:
                        _state.sent();
                        cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
                        assert.deepEqual(cellValues, [
                            'Charlie',
                            'Bravo',
                            'Alpha'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('resets the sort if the user clicks after setting the sort to DESC', /*#__PURE__*/ _async_to_generator(function() {
            var component, internalDataGridShadow, keyHeader, originalCellValues, cellValues, finalCellValues;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
                        component.data = {
                            rows: rows,
                            columns: columns
                        };
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        internalDataGridShadow = getInternalDataGridShadowRoot(component);
                        keyHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getHeaderCellForColumnId)(internalDataGridShadow, 'key');
                        originalCellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // ASC order
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
                        assert.deepEqual(cellValues, [
                            'Alpha',
                            'Bravo',
                            'Charlie'
                        ]);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // DESC order
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 3:
                        _state.sent();
                        cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
                        assert.deepEqual(cellValues, [
                            'Charlie',
                            'Bravo',
                            'Alpha'
                        ]);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // Now reset!
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 4:
                        _state.sent();
                        finalCellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
                        assert.deepEqual(finalCellValues, originalCellValues);
                        return [
                            2
                        ];
                }
            });
        }));
        it('persists the sort as new data is added and inserts new data into the right place', /*#__PURE__*/ _async_to_generator(function() {
            var component, internalDataGridShadow, keyHeader, cellValues, newRow, newRows;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
                        component.data = {
                            rows: rows,
                            columns: columns
                        };
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        internalDataGridShadow = getInternalDataGridShadowRoot(component);
                        keyHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getHeaderCellForColumnId)(internalDataGridShadow, 'key');
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // ASC order
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
                        // Ensure we are in ASC order
                        assert.deepEqual(cellValues, [
                            'Alpha',
                            'Bravo',
                            'Charlie'
                        ]);
                        newRow = {
                            cells: [
                                {
                                    columnId: 'key',
                                    value: 'Baz'
                                }
                            ]
                        };
                        newRows = _to_consumable_array(rows).concat([
                            newRow
                        ]);
                        component.data = _object_spread_props(_object_spread({}, component.data), {
                            rows: newRows
                        });
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 3:
                        _state.sent();
                        cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
                        assert.deepEqual(cellValues, [
                            'Alpha',
                            'Baz',
                            'Bravo',
                            'Charlie'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('filtering rows', function() {
        var columns = [
            {
                id: 'key',
                title: 'Letter',
                sortable: true,
                widthWeighting: 1,
                visible: true,
                hideable: false
            },
            {
                id: 'value',
                title: 'Phonetic',
                sortable: true,
                widthWeighting: 1,
                visible: true,
                hideable: false
            }
        ];
        var rows = [
            {
                cells: [
                    {
                        columnId: 'key',
                        value: 'Letter A'
                    },
                    {
                        columnId: 'value',
                        value: 'Alpha'
                    }
                ]
            },
            {
                cells: [
                    {
                        columnId: 'key',
                        value: 'Letter B'
                    },
                    {
                        columnId: 'value',
                        value: 'Bravo'
                    }
                ]
            },
            {
                cells: [
                    {
                        columnId: 'key',
                        value: 'Letter C'
                    },
                    {
                        columnId: 'value',
                        value: 'Charlie'
                    }
                ]
            }
        ];
        var createPlainTextFilter = function(text) {
            return {
                text: text,
                key: undefined,
                regex: undefined,
                negative: false
            };
        };
        var createRegexFilter = function(text) {
            return {
                text: undefined,
                key: undefined,
                regex: new RegExp(text, 'i'),
                negative: false
            };
        };
        var createColumnFilter = function(key, text) {
            return {
                text: text,
                key: key,
                regex: undefined,
                negative: false
            };
        };
        it('only shows rows with values that match the filter', /*#__PURE__*/ _async_to_generator(function() {
            var component, internalDataGridShadow, renderedRowValues;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
                        component.data = {
                            rows: rows,
                            columns: columns,
                            filters: [
                                createPlainTextFilter('bravo')
                            ]
                        };
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        internalDataGridShadow = getInternalDataGridShadowRoot(component);
                        renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, {
                            onlyVisible: true
                        });
                        assert.deepEqual(renderedRowValues, [
                            [
                                'Letter B',
                                'Bravo'
                            ]
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('only compares visible columns when matching filter', /*#__PURE__*/ _async_to_generator(function() {
            var component, internalDataGridShadow, renderedRowValues, columnsWithInvisible;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
                        component.data = {
                            rows: rows,
                            columns: columns,
                            filters: [
                                createPlainTextFilter('e')
                            ]
                        };
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        internalDataGridShadow = getInternalDataGridShadowRoot(component);
                        renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, {
                            onlyVisible: true
                        });
                        assert.deepEqual(renderedRowValues, [
                            [
                                'Letter A',
                                'Alpha'
                            ],
                            [
                                'Letter B',
                                'Bravo'
                            ],
                            [
                                'Letter C',
                                'Charlie'
                            ]
                        ]);
                        columnsWithInvisible = structuredClone(columns);
                        columnsWithInvisible[0].visible = false;
                        component.data = _object_spread_props(_object_spread({}, component.data), {
                            columns: columnsWithInvisible
                        });
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, {
                            onlyVisible: true
                        });
                        assert.deepEqual(renderedRowValues, [
                            [
                                'Charlie'
                            ]
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders only visible rows, but maintains proper aria-rowindexes for the rows that are rendered', /*#__PURE__*/ _async_to_generator(function() {
            var component, internalDataGridShadow, renderedRows;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
                        component.data = {
                            rows: rows,
                            columns: columns,
                            filters: [
                                createPlainTextFilter('bravo')
                            ]
                        };
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        internalDataGridShadow = getInternalDataGridShadowRoot(component);
                        renderedRows = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getAllRows)(internalDataGridShadow);
                        assert.deepEqual(renderedRows.map(function(row) {
                            return row.getAttribute('aria-rowindex');
                        }), [
                            '2'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('shows all rows if the filter is then cleared', /*#__PURE__*/ _async_to_generator(function() {
            var component, internalDataGridShadow, renderedRowValues;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
                        component.data = {
                            rows: rows,
                            columns: columns,
                            filters: [
                                createPlainTextFilter('bravo')
                            ]
                        };
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        internalDataGridShadow = getInternalDataGridShadowRoot(component);
                        renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, {
                            onlyVisible: true
                        });
                        assert.lengthOf(renderedRowValues, 1);
                        component.data = _object_spread_props(_object_spread({}, component.data), {
                            filters: []
                        });
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow);
                        assert.lengthOf(renderedRowValues, 3);
                        return [
                            2
                        ];
                }
            });
        }));
        it('supports a regex filter', /*#__PURE__*/ _async_to_generator(function() {
            var component, internalDataGridShadow, renderedRowValues;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
                        component.data = {
                            rows: rows,
                            columns: columns,
                            filters: [
                                createRegexFilter('bravo')
                            ]
                        };
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        internalDataGridShadow = getInternalDataGridShadowRoot(component);
                        renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, {
                            onlyVisible: true
                        });
                        assert.deepEqual(renderedRowValues, [
                            [
                                'Letter B',
                                'Bravo'
                            ]
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('inverts the filter if given a negative filter', /*#__PURE__*/ _async_to_generator(function() {
            var component, filter, internalDataGridShadow, renderedRowValues;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
                        filter = createPlainTextFilter('bravo');
                        filter.negative = true;
                        component.data = {
                            rows: rows,
                            columns: columns,
                            filters: [
                                filter
                            ]
                        };
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        internalDataGridShadow = getInternalDataGridShadowRoot(component);
                        renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, {
                            onlyVisible: true
                        });
                        assert.deepEqual(renderedRowValues, [
                            [
                                'Letter A',
                                'Alpha'
                            ],
                            [
                                'Letter C',
                                'Charlie'
                            ]
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('only shows rows that match all filters when given multiple filters', /*#__PURE__*/ _async_to_generator(function() {
            var component, internalDataGridShadow, renderedRowValues;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
                        // This matches no rows, as no row can match both of these filters
                        component.data = {
                            rows: rows,
                            columns: columns,
                            filters: [
                                createPlainTextFilter('alpha'),
                                createPlainTextFilter('charlie')
                            ]
                        };
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        internalDataGridShadow = getInternalDataGridShadowRoot(component);
                        renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, {
                            onlyVisible: true
                        });
                        assert.deepEqual(renderedRowValues, []);
                        return [
                            2
                        ];
                }
            });
        }));
        it('supports filtering by column key', /*#__PURE__*/ _async_to_generator(function() {
            var component, internalDataGridShadow, renderedRowValues;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
                        // By filtering for values with `e` we expect to only get the "Letter C: Charlie" row as it's the only value field with an `e` in.
                        component.data = {
                            rows: rows,
                            columns: columns,
                            filters: [
                                createColumnFilter('value', 'e')
                            ]
                        };
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        internalDataGridShadow = getInternalDataGridShadowRoot(component);
                        renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, {
                            onlyVisible: true
                        });
                        assert.deepEqual(renderedRowValues, [
                            [
                                'Letter C',
                                'Charlie'
                            ]
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('supports negative filtering by column key', /*#__PURE__*/ _async_to_generator(function() {
            var component, filter, internalDataGridShadow, renderedRowValues;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
                        filter = createColumnFilter('value', 'e');
                        filter.negative = true;
                        component.data = {
                            rows: rows,
                            columns: columns,
                            filters: [
                                filter
                            ]
                        };
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        internalDataGridShadow = getInternalDataGridShadowRoot(component);
                        renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, {
                            onlyVisible: true
                        });
                        assert.deepEqual(renderedRowValues, [
                            [
                                'Letter A',
                                'Alpha'
                            ],
                            [
                                'Letter B',
                                'Bravo'
                            ]
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders only matching rows even after sorting columns', /*#__PURE__*/ _async_to_generator(function() {
            var component, internalDataGridShadow, renderedRowValues, keyHeader;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
                        component.data = {
                            rows: rows,
                            columns: columns,
                            filters: [
                                createPlainTextFilter('h')
                            ]
                        };
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        internalDataGridShadow = getInternalDataGridShadowRoot(component);
                        renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, {
                            onlyVisible: true
                        });
                        assert.deepEqual(renderedRowValues, [
                            [
                                'Letter A',
                                'Alpha'
                            ],
                            [
                                'Letter C',
                                'Charlie'
                            ]
                        ]);
                        keyHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getHeaderCellForColumnId)(internalDataGridShadow, 'key');
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // ASC order
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, {
                            onlyVisible: true
                        });
                        assert.deepEqual(renderedRowValues, [
                            [
                                'Letter A',
                                'Alpha'
                            ],
                            [
                                'Letter C',
                                'Charlie'
                            ]
                        ]);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // DESC order
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 3:
                        _state.sent();
                        renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, {
                            onlyVisible: true
                        });
                        assert.deepEqual(renderedRowValues, [
                            [
                                'Letter C',
                                'Charlie'
                            ],
                            [
                                'Letter A',
                                'Alpha'
                            ]
                        ]);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // reset order
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 4:
                        _state.sent();
                        renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, {
                            onlyVisible: true
                        });
                        assert.deepEqual(renderedRowValues, [
                            [
                                'Letter A',
                                'Alpha'
                            ],
                            [
                                'Letter C',
                                'Charlie'
                            ]
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=DataGridController.test.js.map


}),

}]);