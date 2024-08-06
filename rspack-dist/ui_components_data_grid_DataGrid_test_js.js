"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_data_grid_DataGrid_test_js"], {
"./ui/components/data_grid/DataGrid.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DataGridHelpers.js */ "./testing/DataGridHelpers.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../testing/MutationHelpers.js */ "./testing/MutationHelpers.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _data_grid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data_grid.js */ "./ui/components/data_grid/data_grid.js");
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "<p>foo: ",
        "</p>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}









var coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__.RenderCoordinator.RenderCoordinator.instance();
var createColumns = function() {
    return [
        {
            id: 'city',
            title: 'City',
            sortable: true,
            widthWeighting: 2,
            visible: true,
            hideable: false
        },
        {
            id: 'country',
            title: 'Country',
            sortable: false,
            widthWeighting: 2,
            visible: true,
            hideable: false
        },
        {
            id: 'population',
            title: 'Population',
            sortable: false,
            widthWeighting: 1,
            visible: true,
            hideable: false
        }
    ];
};
var createRows = function() {
    return [
        {
            cells: [
                {
                    columnId: 'city',
                    value: 'London'
                },
                {
                    columnId: 'country',
                    value: 'UK'
                },
                {
                    columnId: 'population',
                    value: '8.98m'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'city',
                    value: 'Munich'
                },
                {
                    columnId: 'country',
                    value: 'Germany'
                },
                {
                    columnId: 'population',
                    value: '1.47m'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'city',
                    value: 'Barcelona'
                },
                {
                    columnId: 'country',
                    value: 'Spain'
                },
                {
                    columnId: 'population',
                    value: '1.62m'
                }
            ]
        }
    ];
};
var columns = createColumns();
var rows = createRows();
var columnsWithNoneSortable = createColumns().map(function(col) {
    col.sortable = false;
    return col;
});
var label = 'Test Data Grid Label';
Object.freeze(columns);
Object.freeze(columnsWithNoneSortable);
Object.freeze(rows);
var renderDataGrid = function(data) {
    var component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGrid.DataGrid();
    component.data = {
        rows: data.rows || [],
        columns: data.columns || [],
        activeSort: data.activeSort || null,
        label: data.label
    };
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
    return component;
};
describe('DataGrid', function() {
    describe('rendering and hiding rows/columns', function() {
        it('renders the right headers and values', /*#__PURE__*/ _async_to_generator(function() {
            var component, headerCells, values, rowValues;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: rows,
                            columns: columns
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        headerCells = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getHeaderCells)(component.shadowRoot);
                        values = Array.from(headerCells, function(cell) {
                            return cell.textContent || '';
                        });
                        assert.deepEqual(values, [
                            'City',
                            'Country',
                            'Population'
                        ]);
                        rowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getValuesOfAllBodyRows)(component.shadowRoot);
                        assert.deepEqual(rowValues, [
                            [
                                'London',
                                'UK',
                                '8.98m'
                            ],
                            [
                                'Munich',
                                'Germany',
                                '1.47m'
                            ],
                            [
                                'Barcelona',
                                'Spain',
                                '1.62m'
                            ]
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('does not render DOM within a cell whose column is hidden', /*#__PURE__*/ _async_to_generator(function() {
            var columnsWithFirstHidden, component, renderedRows, cellsHaveChildren;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        columnsWithFirstHidden = createColumns();
                        columnsWithFirstHidden[0].hideable = true;
                        columnsWithFirstHidden[0].visible = false;
                        component = renderDataGrid({
                            rows: rows,
                            columns: columnsWithFirstHidden
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        renderedRows = Array.from(component.shadowRoot.querySelectorAll('tbody tr:not(.padding-row)'));
                        cellsHaveChildren = renderedRows.map(function(row) {
                            var cells = Array.from(row.querySelectorAll('td'), function(cell) {
                                // Figure out if the cell has any children.
                                return (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stripLitHtmlCommentNodes)(cell.innerHTML).length > 0;
                            });
                            return cells;
                        });
                        assert.deepEqual(cellsHaveChildren, [
                            [
                                false,
                                true,
                                true
                            ],
                            [
                                false,
                                true,
                                true
                            ],
                            [
                                false,
                                true,
                                true
                            ]
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('uses the cell\'s value as its title attribute by default', /*#__PURE__*/ _async_to_generator(function() {
            var component, renderedBodyRows, renderedBodyCells, titleAttributesForCellsByRow;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: rows,
                            columns: columns
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        renderedBodyRows = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getAllRows)(component.shadowRoot);
                        renderedBodyCells = renderedBodyRows.map(function(row) {
                            return Array.from(row.querySelectorAll('td'));
                        });
                        titleAttributesForCellsByRow = renderedBodyCells.map(function(row) {
                            return row.map(function(cell) {
                                return cell.getAttribute('title');
                            });
                        });
                        assert.deepEqual(titleAttributesForCellsByRow, [
                            [
                                'London',
                                'UK',
                                '8.98m'
                            ],
                            [
                                'Munich',
                                'Germany',
                                '1.47m'
                            ],
                            [
                                'Barcelona',
                                'Spain',
                                '1.62m'
                            ]
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('takes a title override and uses that if provided', /*#__PURE__*/ _async_to_generator(function() {
            var rowsWithTitleSpecified, component, renderedBodyRows, renderedBodyCells, titleAttributesForCellsByRow;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        rowsWithTitleSpecified = createRows();
                        rowsWithTitleSpecified[0].cells[0].title = 'EXPLICITLY_PROVIDED_TITLE';
                        component = renderDataGrid({
                            rows: rowsWithTitleSpecified,
                            columns: columns
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        renderedBodyRows = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getAllRows)(component.shadowRoot);
                        renderedBodyCells = renderedBodyRows.map(function(row) {
                            return Array.from(row.querySelectorAll('td'));
                        });
                        titleAttributesForCellsByRow = renderedBodyCells.map(function(row) {
                            return row.map(function(cell) {
                                return cell.getAttribute('title');
                            });
                        });
                        assert.deepEqual(titleAttributesForCellsByRow, [
                            [
                                'EXPLICITLY_PROVIDED_TITLE',
                                'UK',
                                '8.98m'
                            ],
                            [
                                'Munich',
                                'Germany',
                                '1.47m'
                            ],
                            [
                                'Barcelona',
                                'Spain',
                                '1.62m'
                            ]
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('hides columns marked as hidden', /*#__PURE__*/ _async_to_generator(function() {
            var columnsWithCityHidden, component, headerCells, values, rowValues;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        columnsWithCityHidden = createColumns();
                        columnsWithCityHidden[0].visible = false;
                        component = renderDataGrid({
                            rows: rows,
                            columns: columnsWithCityHidden
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        headerCells = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getHeaderCells)(component.shadowRoot, {
                            onlyVisible: true
                        });
                        values = Array.from(headerCells, function(cell) {
                            return cell.textContent || '';
                        });
                        assert.deepEqual(values, [
                            'Country',
                            'Population'
                        ]);
                        rowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getValuesOfAllBodyRows)(component.shadowRoot, {
                            onlyVisible: true
                        });
                        assert.deepEqual(rowValues, [
                            [
                                'UK',
                                '8.98m'
                            ],
                            [
                                'Germany',
                                '1.47m'
                            ],
                            [
                                'Spain',
                                '1.62m'
                            ]
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('hides rows marked as hidden', /*#__PURE__*/ _async_to_generator(function() {
            var rowsWithLondonHidden, component, rowValues;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        rowsWithLondonHidden = createRows();
                        rowsWithLondonHidden[0].hidden = true;
                        component = renderDataGrid({
                            rows: rowsWithLondonHidden,
                            columns: columns
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        rowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getValuesOfAllBodyRows)(component.shadowRoot, {
                            onlyVisible: true
                        });
                        assert.deepEqual(rowValues, [
                            [
                                'Munich',
                                'Germany',
                                '1.47m'
                            ],
                            [
                                'Barcelona',
                                'Spain',
                                '1.62m'
                            ]
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('data-grid renderers', function() {
        it('uses the string renderer by default', /*#__PURE__*/ _async_to_generator(function() {
            var columns, rows, component, cell;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        columns = [
                            {
                                id: 'key',
                                title: 'Key',
                                widthWeighting: 1,
                                visible: true,
                                hideable: false
                            }
                        ];
                        rows = [
                            {
                                cells: [
                                    {
                                        columnId: 'key',
                                        value: 'Hello World'
                                    }
                                ]
                            }
                        ];
                        component = renderDataGrid({
                            columns: columns,
                            rows: rows
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        cell = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getCellByIndexes)(component.shadowRoot, {
                            column: 0,
                            row: 1
                        });
                        assert.deepEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stripLitHtmlCommentNodes)(cell.innerHTML), 'Hello World');
                        return [
                            2
                        ];
                }
            });
        }));
        it('can use the code block renderer to render text in a <code> tag', /*#__PURE__*/ _async_to_generator(function() {
            var columns, rows, component, cell;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        columns = [
                            {
                                id: 'key',
                                title: 'Key',
                                widthWeighting: 1,
                                visible: true,
                                hideable: false
                            }
                        ];
                        rows = [
                            {
                                cells: [
                                    {
                                        columnId: 'key',
                                        value: 'Hello World',
                                        title: 'Hello World',
                                        renderer: _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridRenderers.codeBlockRenderer
                                    }
                                ]
                            }
                        ];
                        component = renderDataGrid({
                            columns: columns,
                            rows: rows
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        cell = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getCellByIndexes)(component.shadowRoot, {
                            column: 0,
                            row: 1
                        });
                        assert.deepEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stripLitHtmlCommentNodes)(cell.innerHTML), '<code>Hello World</code>');
                        return [
                            2
                        ];
                }
            });
        }));
        it('can use the icon renderer for rendering icons', /*#__PURE__*/ _async_to_generator(function() {
            var icon, columns, rows, component, cell;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        icon = new _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon();
                        icon.data = {
                            iconName: 'arrow-down',
                            color: 'var(--icon-request)',
                            width: '16px',
                            height: '16px'
                        };
                        columns = [
                            {
                                id: 'type',
                                title: 'Type',
                                widthWeighting: 1,
                                visible: true,
                                hideable: false
                            }
                        ];
                        rows = [
                            {
                                cells: [
                                    {
                                        columnId: 'type',
                                        value: icon,
                                        title: 'received',
                                        renderer: _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridRenderers.iconRenderer
                                    }
                                ]
                            }
                        ];
                        component = renderDataGrid({
                            columns: columns,
                            rows: rows
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        cell = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getCellByIndexes)(component.shadowRoot, {
                            column: 0,
                            row: 1
                        });
                        assert.deepEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stripLitHtmlCommentNodes)(cell.innerHTML), '<div style="display: flex; justify-content: center;"><devtools-icon role="presentation" name="arrow-down" style="color: var(--icon-request); width: 16px; height: 16px;"></devtools-icon></div>');
                        return [
                            2
                        ];
                }
            });
        }));
        it('accepts any custom renderer', /*#__PURE__*/ _async_to_generator(function() {
            var columns, rows, component, cell;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        columns = [
                            {
                                id: 'key',
                                title: 'Key',
                                widthWeighting: 1,
                                visible: true,
                                hideable: false
                            }
                        ];
                        rows = [
                            {
                                cells: [
                                    {
                                        columnId: 'key',
                                        value: 'Hello World',
                                        title: 'Hello World',
                                        renderer: function(value) {
                                            return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject(), value);
                                        }
                                    }
                                ]
                            }
                        ];
                        component = renderDataGrid({
                            columns: columns,
                            rows: rows
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        cell = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getCellByIndexes)(component.shadowRoot, {
                            column: 0,
                            row: 1
                        });
                        assert.deepEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stripLitHtmlCommentNodes)(cell.innerHTML), '<p>foo: Hello World</p>');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('aria-labels', function() {
        it('it adds aria-label to the table if one is specified', /*#__PURE__*/ _async_to_generator(function() {
            var component, table;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            columns: columns,
                            rows: rows,
                            label: label
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        table = component.shadowRoot.querySelector('table');
                        assert.instanceOf(table, HTMLTableElement);
                        assert.strictEqual(table.getAttribute('aria-label'), label);
                        return [
                            2
                        ];
                }
            });
        }));
        it('it does not add an aria-label to the table if one is not specified', /*#__PURE__*/ _async_to_generator(function() {
            var component, table;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            columns: columns,
                            rows: rows
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        table = component.shadowRoot.querySelector('table');
                        assert.instanceOf(table, HTMLTableElement);
                        assert.strictEqual(table.getAttribute('aria-label'), null);
                        return [
                            2
                        ];
                }
            });
        }));
        it('adds rowcount and colcount to the table', /*#__PURE__*/ _async_to_generator(function() {
            var component, table;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            columns: columns,
                            rows: rows
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        table = component.shadowRoot.querySelector('table');
                        assert.instanceOf(table, HTMLTableElement);
                        assert.strictEqual(table.getAttribute('aria-rowcount'), '3');
                        assert.strictEqual(table.getAttribute('aria-colcount'), '3');
                        return [
                            2
                        ];
                }
            });
        }));
        it('shows the total row and colcount regardless of any hidden rows', /*#__PURE__*/ _async_to_generator(function() {
            var rowsWithLondonHidden, component, table;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        rowsWithLondonHidden = createRows();
                        rowsWithLondonHidden[0].hidden = true;
                        component = renderDataGrid({
                            columns: columns,
                            rows: rowsWithLondonHidden
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        table = component.shadowRoot.querySelector('table');
                        assert.instanceOf(table, HTMLTableElement);
                        assert.strictEqual(table.getAttribute('aria-rowcount'), '3');
                        assert.strictEqual(table.getAttribute('aria-colcount'), '3');
                        return [
                            2
                        ];
                }
            });
        }));
        it('labels a column when it is sortable and does not add a label when it is not', /*#__PURE__*/ _async_to_generator(function() {
            var component, cityHeader, countryHeader;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            columns: columns,
                            rows: rows
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        cityHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getHeaderCellForColumnId)(component.shadowRoot, 'city');
                        countryHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getHeaderCellForColumnId)(component.shadowRoot, 'country');
                        assert.strictEqual(cityHeader.getAttribute('aria-sort'), 'none');
                        assert.strictEqual(countryHeader.getAttribute('aria-sort'), null);
                        return [
                            2
                        ];
                }
            });
        }));
        it('labels a column when it is sorted in ASC order', /*#__PURE__*/ _async_to_generator(function() {
            var component, cityHeader;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            columns: columns,
                            rows: rows,
                            activeSort: {
                                columnId: 'city',
                                direction: "ASC" /* DataGrid.DataGridUtils.SortDirection.ASC */ 
                            }
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        cityHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getHeaderCellForColumnId)(component.shadowRoot, 'city');
                        assert.strictEqual(cityHeader.getAttribute('aria-sort'), 'ascending');
                        return [
                            2
                        ];
                }
            });
        }));
        it('labels a column when it is sorted in DESC order', /*#__PURE__*/ _async_to_generator(function() {
            var component, cityHeader;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            columns: columns,
                            rows: rows,
                            activeSort: {
                                columnId: 'city',
                                direction: "DESC" /* DataGrid.DataGridUtils.SortDirection.DESC */ 
                            }
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        cityHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getHeaderCellForColumnId)(component.shadowRoot, 'city');
                        assert.strictEqual(cityHeader.getAttribute('aria-sort'), 'descending');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithLocale)('navigating with the keyboard', function() {
        it('makes the first body cell focusable by default when no columns are sortable', /*#__PURE__*/ _async_to_generator(function() {
            var component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: rows,
                            columns: columnsWithNoneSortable
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 0,
                            row: 1
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('does not let the user navigate into the columns when no colums are sortable', /*#__PURE__*/ _async_to_generator(function() {
            var component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: rows,
                            columns: columnsWithNoneSortable
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 0,
                            row: 1
                        });
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowUp');
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 0,
                            row: 1
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('focuses the column header by default when it is sortable', /*#__PURE__*/ _async_to_generator(function() {
            var component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: rows,
                            columns: columns
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 0,
                            row: 0
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('lets the user press the right arrow key to navigate right', /*#__PURE__*/ _async_to_generator(function() {
            var component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: rows,
                            columns: columnsWithNoneSortable
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowRight');
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 1,
                            row: 1
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('lets the user press the left arrow key to navigate left', /*#__PURE__*/ _async_to_generator(function() {
            var component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: rows,
                            columns: columnsWithNoneSortable
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        // Find a cell in the 2nd column to click to focus
                        return [
                            4,
                            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserFocusingCellAt)(component.shadowRoot, {
                                column: 1,
                                row: 1
                            })
                        ];
                    case 2:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowLeft');
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 3:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 0,
                            row: 1
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('does not let the user move left if they are at the first visible column', /*#__PURE__*/ _async_to_generator(function() {
            var component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: rows,
                            columns: columnsWithNoneSortable
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 0,
                            row: 1
                        });
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowLeft');
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 0,
                            row: 1
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('lets the user press the down arrow key to navigate down', /*#__PURE__*/ _async_to_generator(function() {
            var component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: rows,
                            columns: columnsWithNoneSortable
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowDown');
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 0,
                            row: 2
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('keeps the user where they are if they are on the last row', /*#__PURE__*/ _async_to_generator(function() {
            var component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: rows,
                            columns: columnsWithNoneSortable
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
                        // Go down to row 2
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowDown');
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        // Go down to row 3 (the last row)
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowDown');
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 3:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 0,
                            row: 3
                        });
                        // Try going down again
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowDown');
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 4:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 0,
                            row: 3
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('lets the user press the up arrow key to navigate up', /*#__PURE__*/ _async_to_generator(function() {
            var component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: rows,
                            columns: columnsWithNoneSortable
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserFocusingCellAt)(component.shadowRoot, {
                                column: 1,
                                row: 2
                            })
                        ];
                    case 2:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowUp');
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 3:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 1,
                            row: 1
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('does not let the user move up into the column row when none are sortable', /*#__PURE__*/ _async_to_generator(function() {
            var component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: rows,
                            columns: columnsWithNoneSortable
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowUp');
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 0,
                            row: 1
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('does let the user move up into the column row when they are sortable', /*#__PURE__*/ _async_to_generator(function() {
            var component, table;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: rows,
                            columns: columns
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        table = component.shadowRoot.querySelector('table');
                        assert.instanceOf(table, HTMLTableElement);
                        return [
                            4,
                            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserFocusingCellAt)(component.shadowRoot, {
                                column: 0,
                                row: 1
                            })
                        ];
                    case 2:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowUp');
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 3:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 0,
                            row: 0
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('correctly skips hidden columns', /*#__PURE__*/ _async_to_generator(function() {
            var columnsWithCountryHidden, component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        columnsWithCountryHidden = createColumns();
                        columnsWithCountryHidden[1].visible = false;
                        component = renderDataGrid({
                            rows: rows,
                            columns: columnsWithCountryHidden
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowRight');
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        // It's column 2 here because column 1 is hidden
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 2,
                            row: 0
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('correctly skips hidden rows when navigating from the column header', /*#__PURE__*/ _async_to_generator(function() {
            var rowsWithLondonHidden, component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        rowsWithLondonHidden = createRows();
                        rowsWithLondonHidden[0].hidden = true;
                        component = renderDataGrid({
                            rows: rowsWithLondonHidden,
                            columns: columns
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 0,
                            row: 0
                        });
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowDown');
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        // It's row 2 here because row 1 is hidden
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 0,
                            row: 2
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('correctly skips hidden rows when navigating from a body row to another', /*#__PURE__*/ _async_to_generator(function() {
            var rowsWithMunichHidden, component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        rowsWithMunichHidden = createRows();
                        rowsWithMunichHidden[1].hidden = true;
                        component = renderDataGrid({
                            rows: rowsWithMunichHidden,
                            columns: columnsWithNoneSortable
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowDown');
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        // It's 3 here because row 2 is hidden
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 0,
                            row: 3
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('correctly marks the first visible row cell as focusable when the first row is hidden', /*#__PURE__*/ _async_to_generator(function() {
            var rowsWithLondonHidden, component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        rowsWithLondonHidden = createRows();
                        rowsWithLondonHidden[0].hidden = true;
                        component = renderDataGrid({
                            rows: rowsWithLondonHidden,
                            columns: columnsWithNoneSortable
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 0,
                            row: 2
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('re-adjusts the focused cell if a re-render puts that cell out of bounds', /*#__PURE__*/ _async_to_generator(function() {
            var component, rowsWithLastRemoved;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: createRows(),
                            columns: columnsWithNoneSortable
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowDown');
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 3:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowDown');
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 4:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 0,
                            row: 3
                        });
                        rowsWithLastRemoved = createRows();
                        rowsWithLastRemoved.splice(2);
                        component.data = {
                            columns: columnsWithNoneSortable,
                            rows: rowsWithLastRemoved,
                            activeSort: null
                        };
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 5:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, {
                            column: 0,
                            row: 2
                        });
                        return [
                            2
                        ];
                }
            });
        }));
    });
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithLocale)('emits an event', function() {
        it('when the user clicks a column header', /*#__PURE__*/ _async_to_generator(function() {
            var component, columnHeaderClickEvent, cityColumn, clickEvent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: rows,
                            columns: columns
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        columnHeaderClickEvent = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getEventPromise)(component, 'columnheaderclick');
                        cityColumn = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getHeaderCellForColumnId)(component.shadowRoot, 'city');
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(cityColumn);
                        return [
                            4,
                            columnHeaderClickEvent
                        ];
                    case 2:
                        clickEvent = _state.sent();
                        assert.deepEqual(clickEvent.data, {
                            column: columns[0],
                            columnIndex: 0
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('when the user "clicks" a column header with the enter key', /*#__PURE__*/ _async_to_generator(function() {
            var component, columnHeaderClickEvent, focusableCell, table, clickEvent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: rows,
                            columns: columns
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        columnHeaderClickEvent = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getEventPromise)(component, 'columnheaderclick');
                        focusableCell = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getFocusableCell)(component.shadowRoot);
                        // Check that the focusable cell is the header cell as it's a table with
                        // sortable columns.
                        assert.strictEqual(focusableCell.getAttribute('data-row-index'), '0');
                        assert.strictEqual(focusableCell.getAttribute('data-col-index'), '0');
                        focusableCell.focus();
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        table = component.shadowRoot.querySelector('table');
                        assert.instanceOf(table, HTMLTableElement);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(table, {
                            key: 'Enter'
                        });
                        return [
                            4,
                            columnHeaderClickEvent
                        ];
                    case 3:
                        clickEvent = _state.sent();
                        assert.deepEqual(clickEvent.data, {
                            column: columns[0],
                            columnIndex: 0
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('when the user focuses a cell', /*#__PURE__*/ _async_to_generator(function() {
            var component, bodyCellFocusedEvent, focusableCell, cellFocusedEvent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: rows,
                            columns: columnsWithNoneSortable
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        bodyCellFocusedEvent = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getEventPromise)(component, 'cellfocused');
                        focusableCell = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getFocusableCell)(component.shadowRoot);
                        focusableCell.focus();
                        return [
                            4,
                            bodyCellFocusedEvent
                        ];
                    case 2:
                        cellFocusedEvent = _state.sent();
                        assert.deepEqual(cellFocusedEvent.data, {
                            cell: rows[0].cells[0],
                            row: rows[0]
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('when the user hovers over a row', /*#__PURE__*/ _async_to_generator(function() {
            var component, rowHoveredEvent, rowLeaveEvent, row, hoverEvent, leaveEvent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: rows,
                            columns: columns
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        rowHoveredEvent = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getEventPromise)(component, 'rowmouseenter');
                        rowLeaveEvent = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getEventPromise)(component, 'rowmouseleave');
                        row = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getBodyRowByAriaIndex)(component.shadowRoot, 1);
                        row.dispatchEvent(new MouseEvent('mouseenter'));
                        return [
                            4,
                            rowHoveredEvent
                        ];
                    case 2:
                        hoverEvent = _state.sent();
                        assert.deepEqual(hoverEvent.data, {
                            row: rows[0]
                        });
                        row.dispatchEvent(new MouseEvent('mouseleave'));
                        return [
                            4,
                            rowLeaveEvent
                        ];
                    case 3:
                        leaveEvent = _state.sent();
                        assert.deepEqual(leaveEvent.data, {
                            row: rows[0]
                        });
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('adding new rows', function() {
        it('only has one DOM mutation to add the new row', /*#__PURE__*/ _async_to_generator(function() {
            var component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: rows,
                            columns: columns
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            (0,_testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_4__.withMutations)([
                                // We expect one <tr> to be added
                                {
                                    target: 'tr',
                                    max: 1
                                }
                            ], component.shadowRoot, function() {
                                var _ref = _async_to_generator(function(shadowRoot) {
                                    var newRow, newRowValues;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                newRow = {
                                                    cells: [
                                                        {
                                                            columnId: 'city',
                                                            value: 'Berlin'
                                                        },
                                                        {
                                                            columnId: 'country',
                                                            value: 'Germany'
                                                        },
                                                        {
                                                            columnId: 'population',
                                                            value: '3.66m'
                                                        }
                                                    ]
                                                };
                                                component.data = {
                                                    columns: columns,
                                                    rows: _to_consumable_array(rows).concat([
                                                        newRow
                                                    ]),
                                                    activeSort: null
                                                };
                                                return [
                                                    4,
                                                    coordinator.done()
                                                ];
                                            case 1:
                                                _state.sent();
                                                newRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getValuesOfBodyRowByAriaIndex)(shadowRoot, 4);
                                                assert.deepEqual(newRowValues, [
                                                    'Berlin',
                                                    'Germany',
                                                    '3.66m'
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
    });
    describe('marking a row as selected', function() {
        it('marks the row as selected when the user clicks on a cell', /*#__PURE__*/ _async_to_generator(function() {
            var component, selectedRow;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = renderDataGrid({
                            rows: rows,
                            columns: columnsWithNoneSortable
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        // Ensure no row is selected before the user clicks
                        selectedRow = component.shadowRoot.querySelector('tr.selected');
                        assert.isNull(selectedRow);
                        // // Focus the very first cell
                        return [
                            4,
                            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserFocusingCellAt)(component.shadowRoot, {
                                column: 0,
                                row: 1
                            })
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 3:
                        _state.sent();
                        // // Ensure the row is updated to be marked as selected
                        selectedRow = component.shadowRoot.querySelector('tbody tr.selected');
                        assert.instanceOf(selectedRow, HTMLTableRowElement);
                        return [
                            2
                        ];
                }
            });
        }));
        it('persists over re-renders when not focused', /*#__PURE__*/ _async_to_generator(function() {
            var rows, component, wrapper;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        rows = createRows();
                        component = renderDataGrid({
                            rows: rows,
                            columns: columnsWithNoneSortable
                        });
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        wrapper = component.shadowRoot.querySelector('.wrapping-container');
                        if (wrapper) {
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchFocusOutEvent)(wrapper);
                        }
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 3:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertSelectedRowIs)(component.shadowRoot, 1);
                        rows.push({
                            cells: [
                                {
                                    columnId: 'city',
                                    value: 'Vienna'
                                },
                                {
                                    columnId: 'country',
                                    value: 'Austria'
                                },
                                {
                                    columnId: 'population',
                                    value: '1.92m'
                                }
                            ]
                        });
                        component.data = {
                            columns: columnsWithNoneSortable,
                            rows: rows,
                            activeSort: null
                        };
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 4:
                        _state.sent();
                        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertSelectedRowIs)(component.shadowRoot, 1);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('DataGrid.DataGridUtils.calculateColumnWidthPercentageFromWeighting', function() {
        var makeColumnsWithWeightings = function() {
            for(var _len = arguments.length, weights = new Array(_len), _key = 0; _key < _len; _key++){
                weights[_key] = arguments[_key];
            }
            return weights.map(function(weight, index) {
                return {
                    id: "column-".concat(index),
                    title: "Column ".concat(index),
                    sortable: false,
                    visible: true,
                    hideable: false,
                    widthWeighting: weight
                };
            });
        };
        it('correctly divides columns based on the weighting', /*#__PURE__*/ _async_to_generator(function() {
            var columns, calculatedWidths;
            return _ts_generator(this, function(_state) {
                columns = makeColumnsWithWeightings(1, 1);
                calculatedWidths = columns.map(function(col) {
                    return _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.calculateColumnWidthPercentageFromWeighting(columns, col.id);
                });
                assert.deepEqual(calculatedWidths, [
                    50,
                    50
                ]);
                return [
                    2
                ];
            });
        }));
        it('correctly divides and rounds when the % are not whole numbers', /*#__PURE__*/ _async_to_generator(function() {
            var columns, calculatedWidths;
            return _ts_generator(this, function(_state) {
                columns = makeColumnsWithWeightings(1, 1, 1);
                calculatedWidths = columns.map(function(col) {
                    return _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.calculateColumnWidthPercentageFromWeighting(columns, col.id);
                });
                assert.deepEqual(calculatedWidths, [
                    33,
                    33,
                    33
                ]);
                return [
                    2
                ];
            });
        }));
        it('does not include hidden columns when calculating weighting', /*#__PURE__*/ _async_to_generator(function() {
            var columns, calculatedWidths;
            return _ts_generator(this, function(_state) {
                columns = makeColumnsWithWeightings(1, 1, 1);
                columns[0].visible = false;
                calculatedWidths = columns.map(function(col) {
                    return _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.calculateColumnWidthPercentageFromWeighting(columns, col.id);
                });
                assert.deepEqual(calculatedWidths, [
                    0,
                    50,
                    50
                ]);
                return [
                    2
                ];
            });
        }));
        it('errors if a column has a weighting of less than 1', /*#__PURE__*/ _async_to_generator(function() {
            var columns;
            return _ts_generator(this, function(_state) {
                columns = makeColumnsWithWeightings(0.5);
                assert.throws(function() {
                    return _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.calculateColumnWidthPercentageFromWeighting(columns, columns[0].id);
                }, 'Error with column column-0: width weightings must be >= 1.');
                return [
                    2
                ];
            });
        }));
    });
    describe('#DataGrid.DataGridUtils.handleArrowKeyNavigation util', function() {
        var makeColumns = function() {
            return [
                {
                    id: 'a',
                    title: 'A',
                    sortable: false,
                    visible: true,
                    hideable: false,
                    widthWeighting: 1
                },
                {
                    id: 'b',
                    title: 'B',
                    sortable: false,
                    visible: true,
                    hideable: false,
                    widthWeighting: 1
                },
                {
                    id: 'c',
                    title: 'C',
                    sortable: false,
                    visible: true,
                    hideable: false,
                    widthWeighting: 1
                }
            ];
        };
        var makeRows = function() {
            return [
                {
                    cells: [
                        {
                            columnId: 'a',
                            value: 'a: row 1'
                        },
                        {
                            columnId: 'b',
                            value: 'b: row 1'
                        },
                        {
                            columnId: 'c',
                            value: 'c: row 1'
                        }
                    ],
                    hidden: false
                },
                {
                    cells: [
                        {
                            columnId: 'a',
                            value: 'a: row 2'
                        },
                        {
                            columnId: 'b',
                            value: 'b: row 2'
                        },
                        {
                            columnId: 'c',
                            value: 'c: row 2'
                        }
                    ],
                    hidden: false
                },
                {
                    cells: [
                        {
                            columnId: 'a',
                            value: 'a: row 3'
                        },
                        {
                            columnId: 'b',
                            value: 'b: row 3'
                        },
                        {
                            columnId: 'c',
                            value: 'c: row 3'
                        }
                    ],
                    hidden: false
                }
            ];
        };
        describe('navigating left', function() {
            it('does not let the user move further left than the first column', /*#__PURE__*/ _async_to_generator(function() {
                var newFocusedCell;
                return _ts_generator(this, function(_state) {
                    newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: "ArrowLeft" /* Platform.KeyboardUtilities.ArrowKey.LEFT */ ,
                        currentFocusedCell: [
                            0,
                            1
                        ],
                        columns: makeColumns(),
                        rows: makeRows()
                    });
                    assert.deepEqual(newFocusedCell, [
                        0,
                        1
                    ]);
                    return [
                        2
                    ];
                });
            }));
            it('does not let the user move left if there are no visible columns to the left', /*#__PURE__*/ _async_to_generator(function() {
                var columnsWithFirstHidden, newFocusedCell;
                return _ts_generator(this, function(_state) {
                    columnsWithFirstHidden = makeColumns();
                    columnsWithFirstHidden[0].visible = false;
                    newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: "ArrowLeft" /* Platform.KeyboardUtilities.ArrowKey.LEFT */ ,
                        currentFocusedCell: [
                            1,
                            1
                        ],
                        columns: columnsWithFirstHidden,
                        rows: makeRows()
                    });
                    assert.deepEqual(newFocusedCell, [
                        1,
                        1
                    ]);
                    return [
                        2
                    ];
                });
            }));
            it('lets the user move left if the column to the left is visible', /*#__PURE__*/ _async_to_generator(function() {
                var newFocusedCell;
                return _ts_generator(this, function(_state) {
                    newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: "ArrowLeft" /* Platform.KeyboardUtilities.ArrowKey.LEFT */ ,
                        currentFocusedCell: [
                            1,
                            1
                        ],
                        columns: makeColumns(),
                        rows: makeRows()
                    });
                    assert.deepEqual(newFocusedCell, [
                        0,
                        1
                    ]);
                    return [
                        2
                    ];
                });
            }));
            it('correctly skips a hidden column to get to the next left visible column', /*#__PURE__*/ _async_to_generator(function() {
                var withSecondColumnHidden, newFocusedCell;
                return _ts_generator(this, function(_state) {
                    withSecondColumnHidden = makeColumns();
                    withSecondColumnHidden[1].visible = false;
                    newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: "ArrowLeft" /* Platform.KeyboardUtilities.ArrowKey.LEFT */ ,
                        currentFocusedCell: [
                            2,
                            1
                        ],
                        columns: withSecondColumnHidden,
                        rows: rows
                    });
                    assert.deepEqual(newFocusedCell, [
                        0,
                        1
                    ]);
                    return [
                        2
                    ];
                });
            }));
        });
        describe('navigating right', function() {
            it('does not let the user move further right than the last column', /*#__PURE__*/ _async_to_generator(function() {
                var newFocusedCell;
                return _ts_generator(this, function(_state) {
                    newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: "ArrowRight" /* Platform.KeyboardUtilities.ArrowKey.RIGHT */ ,
                        currentFocusedCell: [
                            2,
                            1
                        ],
                        columns: makeColumns(),
                        rows: makeRows()
                    });
                    assert.deepEqual(newFocusedCell, [
                        2,
                        1
                    ]);
                    return [
                        2
                    ];
                });
            }));
            it('does not let the user move right if there are no visible columns to the right', /*#__PURE__*/ _async_to_generator(function() {
                var columnsWithLastHidden, newFocusedCell;
                return _ts_generator(this, function(_state) {
                    columnsWithLastHidden = makeColumns();
                    columnsWithLastHidden[2].visible = false;
                    newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: "ArrowRight" /* Platform.KeyboardUtilities.ArrowKey.RIGHT */ ,
                        currentFocusedCell: [
                            1,
                            1
                        ],
                        columns: columnsWithLastHidden,
                        rows: makeRows()
                    });
                    assert.deepEqual(newFocusedCell, [
                        1,
                        1
                    ]);
                    return [
                        2
                    ];
                });
            }));
            it('lets the user move right if the column to the right is visible', /*#__PURE__*/ _async_to_generator(function() {
                var newFocusedCell;
                return _ts_generator(this, function(_state) {
                    newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: "ArrowRight" /* Platform.KeyboardUtilities.ArrowKey.RIGHT */ ,
                        currentFocusedCell: [
                            1,
                            1
                        ],
                        columns: makeColumns(),
                        rows: makeRows()
                    });
                    assert.deepEqual(newFocusedCell, [
                        2,
                        1
                    ]);
                    return [
                        2
                    ];
                });
            }));
            it('correctly skips a hidden column to get to the next right visible column', /*#__PURE__*/ _async_to_generator(function() {
                var withSecondColumnHidden, newFocusedCell;
                return _ts_generator(this, function(_state) {
                    withSecondColumnHidden = makeColumns();
                    withSecondColumnHidden[1].visible = false;
                    newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: "ArrowRight" /* Platform.KeyboardUtilities.ArrowKey.RIGHT */ ,
                        currentFocusedCell: [
                            0,
                            1
                        ],
                        columns: withSecondColumnHidden,
                        rows: rows
                    });
                    assert.deepEqual(newFocusedCell, [
                        2,
                        1
                    ]);
                    return [
                        2
                    ];
                });
            }));
        });
        describe('navigating up', function() {
            it('does not let the user go into the columns row when none are sortable', /*#__PURE__*/ _async_to_generator(function() {
                var newFocusedCell;
                return _ts_generator(this, function(_state) {
                    newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: "ArrowUp" /* Platform.KeyboardUtilities.ArrowKey.UP */ ,
                        currentFocusedCell: [
                            0,
                            1
                        ],
                        columns: makeColumns(),
                        rows: makeRows()
                    });
                    assert.deepEqual(newFocusedCell, [
                        0,
                        1
                    ]);
                    return [
                        2
                    ];
                });
            }));
            describe('when at least one column is sortable', function() {
                var sortableColumns = makeColumns();
                sortableColumns.forEach(function(col) {
                    col.sortable = true;
                });
                it('does let the user go into the columns row', /*#__PURE__*/ _async_to_generator(function() {
                    var newFocusedCell;
                    return _ts_generator(this, function(_state) {
                        newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                            key: "ArrowUp" /* Platform.KeyboardUtilities.ArrowKey.UP */ ,
                            currentFocusedCell: [
                                0,
                                1
                            ],
                            columns: sortableColumns,
                            rows: makeRows()
                        });
                        assert.deepEqual(newFocusedCell, [
                            0,
                            0
                        ]);
                        return [
                            2
                        ];
                    });
                }));
                it('does not let the user go up if they are in the column header', /*#__PURE__*/ _async_to_generator(function() {
                    var newFocusedCell;
                    return _ts_generator(this, function(_state) {
                        newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                            key: "ArrowUp" /* Platform.KeyboardUtilities.ArrowKey.UP */ ,
                            currentFocusedCell: [
                                0,
                                0
                            ],
                            columns: sortableColumns,
                            rows: makeRows()
                        });
                        assert.deepEqual(newFocusedCell, [
                            0,
                            0
                        ]);
                        return [
                            2
                        ];
                    });
                }));
                it('correctly skips a hidden row to navigate into the columns row', /*#__PURE__*/ _async_to_generator(function() {
                    var rowsWithFirstHidden, newFocusedCell;
                    return _ts_generator(this, function(_state) {
                        rowsWithFirstHidden = makeRows();
                        rowsWithFirstHidden[0].hidden = true;
                        newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                            key: "ArrowUp" /* Platform.KeyboardUtilities.ArrowKey.UP */ ,
                            currentFocusedCell: [
                                0,
                                2
                            ],
                            columns: sortableColumns,
                            rows: rowsWithFirstHidden
                        });
                        assert.deepEqual(newFocusedCell, [
                            0,
                            0
                        ]);
                        return [
                            2
                        ];
                    });
                }));
            });
            it('correctly skips a hidden row while navigating through the body rows', /*#__PURE__*/ _async_to_generator(function() {
                var rowsWithSecondHidden, newFocusedCell;
                return _ts_generator(this, function(_state) {
                    rowsWithSecondHidden = makeRows();
                    rowsWithSecondHidden[1].hidden = true;
                    newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: "ArrowUp" /* Platform.KeyboardUtilities.ArrowKey.UP */ ,
                        currentFocusedCell: [
                            0,
                            3
                        ],
                        columns: makeColumns(),
                        rows: rowsWithSecondHidden
                    });
                    assert.deepEqual(newFocusedCell, [
                        0,
                        1
                    ]);
                    return [
                        2
                    ];
                });
            }));
            it('does not let the user move up if no columns are sortable and all rows above are hidden', /*#__PURE__*/ _async_to_generator(function() {
                var rowsWithFirstAndSecondHidden, newFocusedCell;
                return _ts_generator(this, function(_state) {
                    rowsWithFirstAndSecondHidden = makeRows();
                    rowsWithFirstAndSecondHidden[0].hidden = true;
                    rowsWithFirstAndSecondHidden[1].hidden = true;
                    newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: "ArrowUp" /* Platform.KeyboardUtilities.ArrowKey.UP */ ,
                        currentFocusedCell: [
                            0,
                            3
                        ],
                        columns: makeColumns(),
                        rows: rowsWithFirstAndSecondHidden
                    });
                    assert.deepEqual(newFocusedCell, [
                        0,
                        3
                    ]);
                    return [
                        2
                    ];
                });
            }));
        });
        describe('navigating down', function() {
            describe('when at least one column is sortable', function() {
                var sortableColumns = makeColumns();
                sortableColumns.forEach(function(col) {
                    col.sortable = true;
                });
                it('lets the user navigate from the columns into the body', /*#__PURE__*/ _async_to_generator(function() {
                    var newFocusedCell;
                    return _ts_generator(this, function(_state) {
                        newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                            key: "ArrowDown" /* Platform.KeyboardUtilities.ArrowKey.DOWN */ ,
                            currentFocusedCell: [
                                0,
                                0
                            ],
                            columns: sortableColumns,
                            rows: makeRows()
                        });
                        assert.deepEqual(newFocusedCell, [
                            0,
                            1
                        ]);
                        return [
                            2
                        ];
                    });
                }));
                it('correctly skips any hidden body rows to find the first visible one', /*#__PURE__*/ _async_to_generator(function() {
                    var rowsWithFirstHidden, newFocusedCell;
                    return _ts_generator(this, function(_state) {
                        rowsWithFirstHidden = makeRows();
                        rowsWithFirstHidden[0].hidden = true;
                        newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                            key: "ArrowDown" /* Platform.KeyboardUtilities.ArrowKey.DOWN */ ,
                            currentFocusedCell: [
                                0,
                                0
                            ],
                            columns: sortableColumns,
                            rows: rowsWithFirstHidden
                        });
                        assert.deepEqual(newFocusedCell, [
                            0,
                            2
                        ]);
                        return [
                            2
                        ];
                    });
                }));
            });
            it('correctly skips a hidden row while navigating through the body rows', /*#__PURE__*/ _async_to_generator(function() {
                var rowsWithSecondHidden, newFocusedCell;
                return _ts_generator(this, function(_state) {
                    rowsWithSecondHidden = makeRows();
                    rowsWithSecondHidden[1].hidden = true;
                    newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: "ArrowDown" /* Platform.KeyboardUtilities.ArrowKey.DOWN */ ,
                        currentFocusedCell: [
                            0,
                            1
                        ],
                        columns: makeColumns(),
                        rows: rowsWithSecondHidden
                    });
                    assert.deepEqual(newFocusedCell, [
                        0,
                        3
                    ]);
                    return [
                        2
                    ];
                });
            }));
            it('does not let the user move down if all rows below are hidden', /*#__PURE__*/ _async_to_generator(function() {
                var rowsWithFirstAndSecondHidden, newFocusedCell;
                return _ts_generator(this, function(_state) {
                    rowsWithFirstAndSecondHidden = makeRows();
                    rowsWithFirstAndSecondHidden[1].hidden = true;
                    rowsWithFirstAndSecondHidden[2].hidden = true;
                    newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: "ArrowDown" /* Platform.KeyboardUtilities.ArrowKey.DOWN */ ,
                        currentFocusedCell: [
                            0,
                            1
                        ],
                        columns: makeColumns(),
                        rows: rowsWithFirstAndSecondHidden
                    });
                    assert.deepEqual(newFocusedCell, [
                        0,
                        1
                    ]);
                    return [
                        2
                    ];
                });
            }));
            it('leaves the user where they are if no body rows are visible', /*#__PURE__*/ _async_to_generator(function() {
                var rowsAllHidden, sortableColumns, newFocusedCell;
                return _ts_generator(this, function(_state) {
                    rowsAllHidden = makeRows().map(function(row) {
                        row.hidden = true;
                        return row;
                    });
                    sortableColumns = makeColumns().map(function(col) {
                        col.sortable = true;
                        return col;
                    });
                    newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: "ArrowDown" /* Platform.KeyboardUtilities.ArrowKey.DOWN */ ,
                        currentFocusedCell: [
                            0,
                            0
                        ],
                        columns: sortableColumns,
                        rows: rowsAllHidden
                    });
                    assert.deepEqual(newFocusedCell, [
                        0,
                        0
                    ]);
                    return [
                        2
                    ];
                });
            }));
            it('does not let the user move down if they are on the last row', /*#__PURE__*/ _async_to_generator(function() {
                var newFocusedCell;
                return _ts_generator(this, function(_state) {
                    newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: "ArrowDown" /* Platform.KeyboardUtilities.ArrowKey.DOWN */ ,
                        currentFocusedCell: [
                            0,
                            3
                        ],
                        columns: makeColumns(),
                        rows: makeRows()
                    });
                    assert.deepEqual(newFocusedCell, [
                        0,
                        3
                    ]);
                    return [
                        2
                    ];
                });
            }));
        });
    });
    describe('DataGrid.DataGridUtils.getCellTitleFromCellContent', function() {
        it('returns full cell content as title when content is short', /*#__PURE__*/ _async_to_generator(function() {
            var title;
            return _ts_generator(this, function(_state) {
                title = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.getCellTitleFromCellContent('some shortish cell value');
                assert.deepEqual(title, 'some shortish cell value');
                return [
                    2
                ];
            });
        }));
        it('returns truncated cell content as title when content is long', /*#__PURE__*/ _async_to_generator(function() {
            var title;
            return _ts_generator(this, function(_state) {
                title = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.getCellTitleFromCellContent('This cell contains text which is a bit longer');
                assert.deepEqual(title, 'This cell contains t…');
                return [
                    2
                ];
            });
        }));
    });
}); //# sourceMappingURL=DataGrid.test.js.map


}),

}]);