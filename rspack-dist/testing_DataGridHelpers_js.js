"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_DataGridHelpers_js"], {
"./testing/DataGridHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assertCurrentFocusedCellIs: function() { return assertCurrentFocusedCellIs; },
  assertGridContents: function() { return assertGridContents; },
  assertSelectedRowIs: function() { return assertSelectedRowIs; },
  emulateUserFocusingCellAt: function() { return emulateUserFocusingCellAt; },
  emulateUserKeyboardNavigation: function() { return emulateUserKeyboardNavigation; },
  focusCurrentlyFocusableCell: function() { return focusCurrentlyFocusableCell; },
  getAllRows: function() { return getAllRows; },
  getBodyRowByAriaIndex: function() { return getBodyRowByAriaIndex; },
  getCellByIndexes: function() { return getCellByIndexes; },
  getDataGrid: function() { return getDataGrid; },
  getFocusableCell: function() { return getFocusableCell; },
  getHeaderCellForColumnId: function() { return getHeaderCellForColumnId; },
  getHeaderCells: function() { return getHeaderCells; },
  getValuesForColumn: function() { return getValuesForColumn; },
  getValuesOfAllBodyRows: function() { return getValuesOfAllBodyRows; },
  getValuesOfBodyRowByAriaIndex: function() { return getValuesOfBodyRowByAriaIndex; }
});
/* harmony import */var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMHelpers.js */ "./testing/DOMHelpers.js");
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



var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__.RenderCoordinator.RenderCoordinator.instance();
var getFocusableCell = function(shadowRoot) {
    // We only expect one here, but we qSA so we can assert on only one.
    // Can't use td as it may be a th if the user has focused a column header.
    var tabIndexCells = shadowRoot.querySelectorAll('table [tabindex="0"]');
    assert.lengthOf(tabIndexCells, 1);
    assert.instanceOf(tabIndexCells[0], HTMLTableCellElement);
    return tabIndexCells[0];
};
var getCellByIndexes = function(shadowRoot, indexes) {
    var cell = shadowRoot.querySelector('[data-row-index="'.concat(indexes.row, '"][data-col-index="').concat(indexes.column, '"]'));
    assert.instanceOf(cell, HTMLTableCellElement);
    return cell;
};
var getHeaderCells = function(shadowRoot) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        onlyVisible: false
    };
    var cells = shadowRoot.querySelectorAll('[data-grid-header-cell]');
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(cells, HTMLTableCellElement);
    return Array.from(cells).filter(function(cell) {
        if (!options.onlyVisible) {
            return true;
        }
        return cell.classList.contains('hidden') === false;
    });
};
var getValuesOfBodyRowByAriaIndex = function(shadowRoot, ariaIndex) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        onlyVisible: false
    };
    var row = getBodyRowByAriaIndex(shadowRoot, ariaIndex);
    var cells = row.querySelectorAll('[data-grid-value-cell-for-column]');
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(cells, HTMLTableCellElement);
    return Array.from(cells).filter(function(cell) {
        return !options.onlyVisible || cell.classList.contains('hidden') === false;
    }).map(function(cell) {
        return cell.innerText;
    });
};
var getAllRows = function(shadowRoot) {
    var rows = shadowRoot.querySelectorAll('[aria-rowindex]');
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(rows, HTMLTableRowElement);
    return Array.from(rows);
};
var assertCurrentFocusedCellIs = function(shadowRoot, param) {
    var column = param.column, row = param.row;
    var cell = getFocusableCell(shadowRoot);
    // Convert to strings as attributes are always strings.
    assert.strictEqual(cell.getAttribute('data-row-index'), String(row), 'The row index was not as expected.');
    assert.strictEqual(cell.getAttribute('data-col-index'), String(column), 'The column index was not as expected.');
};
var assertSelectedRowIs = function(shadowRoot, row) {
    var selectedRow = shadowRoot.querySelector('tr.selected');
    assert.instanceOf(selectedRow, HTMLTableRowElement);
    assert.strictEqual(selectedRow.getAttribute('aria-rowindex'), String(row), 'The row index was not as expected.');
};
var getDataGrid = function(gridComponent) {
    var controller = (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(gridComponent, 'devtools-data-grid-controller', _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__.DataGridController.DataGridController);
    return (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(controller, 'devtools-data-grid', _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__.DataGrid.DataGrid);
};
var assertGridContents = function(gridComponent, headerExpected, rowsExpected) {
    var grid = getDataGrid(gridComponent);
    assert.isNotNull(grid.shadowRoot);
    var headerActual = getHeaderCells(grid.shadowRoot).map(function(param) {
        var textContent = param.textContent;
        return textContent.trim();
    });
    assert.deepEqual(headerActual, headerExpected);
    var rowsActual = getValuesOfAllBodyRows(grid.shadowRoot).map(function(row) {
        return row.map(function(cell) {
            return cell.trim();
        });
    });
    assert.deepEqual(rowsActual, rowsExpected);
    return grid;
};
var focusCurrentlyFocusableCell = function(shadowRoot) {
    var cell = getFocusableCell(shadowRoot);
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchFocusEvent)(cell);
};
var emulateUserKeyboardNavigation = function(shadowRoot, key) {
    var table = shadowRoot.querySelector('table');
    assert.instanceOf(table, HTMLTableElement);
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(table, {
        key: key
    });
};
var emulateUserFocusingCellAt = function() {
    var _ref = _async_to_generator(function(shadowRoot, position) {
        var cellToFocus;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cellToFocus = getCellByIndexes(shadowRoot, position);
                    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchFocusEvent)(cellToFocus);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    assertCurrentFocusedCellIs(shadowRoot, position);
                    return [
                        2
                    ];
            }
        });
    });
    return function emulateUserFocusingCellAt(shadowRoot, position) {
        return _ref.apply(this, arguments);
    };
}();
var getValuesOfAllBodyRows = function(shadowRoot) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        onlyVisible: false
    };
    var rows = getAllRows(shadowRoot);
    return rows.map(function(row) {
        // now decide if the row should be included or not
        var rowIsHidden = row.classList.contains('hidden');
        var rowIndex = window.parseInt(row.getAttribute('aria-rowindex') || '-1', 10);
        return {
            rowValues: getValuesOfBodyRowByAriaIndex(shadowRoot, rowIndex, options),
            hidden: options.onlyVisible && rowIsHidden
        };
    }).filter(function(row) {
        return row.hidden === false;
    }).map(function(r) {
        return r.rowValues;
    });
};
var getBodyRowByAriaIndex = function(shadowRoot, rowIndex) {
    var row = shadowRoot.querySelector('[aria-rowindex="'.concat(rowIndex, '"]'));
    assert.instanceOf(row, HTMLTableRowElement);
    return row;
};
var getHeaderCellForColumnId = function(shadowRoot, columnId) {
    var cell = shadowRoot.querySelector('[data-grid-header-cell="'.concat(columnId));
    assert.instanceOf(cell, HTMLTableCellElement);
    return cell;
};
var getValuesForColumn = function(shadowRoot, columnId) {
    var cells = shadowRoot.querySelectorAll("[data-grid-value-cell-for-column=".concat(columnId, "]"));
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(cells, HTMLTableCellElement);
    return Array.from(cells, function(cell) {
        return cell.innerText;
    });
}; //# sourceMappingURL=DataGridHelpers.js.map


}),

}]);