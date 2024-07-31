"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_TrustTokensView_test_ts"],{

/***/ "./src/panels/application/components/TrustTokensView.test.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/application/components/TrustTokensView.test.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DataGridHelpers.js */ "./src/testing/DataGridHelpers.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components.js */ "./src/panels/application/components/components.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
async function renderTrustTokensView() {
    const component = new _components_js__WEBPACK_IMPORTED_MODULE_6__.TrustTokensView.TrustTokensView();
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
    // The data-grid's renderer is scheduled, so we need to wait until the coordinator
    // is done before we can test against it.
    await coordinator.done({ waitForWork: true });
    return component;
}
function getInternalDataGridShadowRoot(component) {
    const dataGridController = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getElementWithinComponent)(component, 'devtools-data-grid-controller', _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController);
    const dataGrid = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getElementWithinComponent)(dataGridController, 'devtools-data-grid', _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.DataGrid);
    assert.isNotNull(dataGrid.shadowRoot);
    return dataGrid.shadowRoot;
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('TrustTokensView', () => {
    let target;
    beforeEach(() => {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
    });
    it('renders trust token data', async () => {
        sinon.stub(target.storageAgent(), 'invoke_getTrustTokens').resolves({
            tokens: [
                { issuerOrigin: 'foo.com', count: 42 },
                { issuerOrigin: 'bar.org', count: 7 },
            ],
            getError: () => undefined,
        });
        const component = await renderTrustTokensView();
        const dataGridShadowRoot = getInternalDataGridShadowRoot(component);
        const rowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(dataGridShadowRoot);
        assert.deepEqual(rowValues, [
            ['bar.org', '7', ''],
            ['foo.com', '42', ''],
        ]);
    });
    it('does not display issuers with zero stored tokens', async () => {
        sinon.stub(target.storageAgent(), 'invoke_getTrustTokens').resolves({
            tokens: [
                { issuerOrigin: 'no-issuer.org', count: 0 },
                { issuerOrigin: 'foo.com', count: 42 },
            ],
            getError: () => undefined,
        });
        const component = await renderTrustTokensView();
        const dataGridShadowRoot = getInternalDataGridShadowRoot(component);
        const rowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(dataGridShadowRoot);
        assert.deepEqual(rowValues, [['foo.com', '42', '']]);
    });
    it('removes trailing slashes from issuer origins', async () => {
        sinon.stub(target.storageAgent(), 'invoke_getTrustTokens').resolves({
            tokens: [
                { issuerOrigin: 'example.com/', count: 20 },
                { issuerOrigin: 'sub.domain.org/', count: 14 },
            ],
            getError: () => undefined,
        });
        const component = await renderTrustTokensView();
        const dataGridShadowRoot = getInternalDataGridShadowRoot(component);
        const rowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(dataGridShadowRoot);
        assert.deepEqual(rowValues, [
            ['example.com', '20', ''],
            ['sub.domain.org', '14', ''],
        ]);
    });
    it('hides trust token table when there are no trust tokens', async () => {
        sinon.stub(target.storageAgent(), 'invoke_getTrustTokens').resolves({ tokens: [], getError: () => undefined });
        const component = await renderTrustTokensView();
        const nullGridElement = component.shadowRoot.querySelector('devtools-data-grid-controller');
        assert.isNull(nullGridElement);
        const noTrustTokensElement = component.shadowRoot.querySelector('div.no-tt-message');
        assert.instanceOf(noTrustTokensElement, HTMLDivElement);
    });
    it('calls the delete handler with the right issuer when the delete button is clicked in a row', async () => {
        // Create a Promise that resolves with the issuer for which the delete button was clicked.
        sinon.stub(target.storageAgent(), 'invoke_getTrustTokens').resolves({
            tokens: [
                { issuerOrigin: 'bar.org', count: 42 },
                { issuerOrigin: 'foo.com', count: 7 },
            ],
            getError: () => undefined,
        });
        const clearTrustTokens = sinon.stub(target.storageAgent(), 'invoke_clearTrustTokens').resolves();
        const component = await renderTrustTokensView();
        const dataGridShadowRoot = getInternalDataGridShadowRoot(component);
        const deleteCell = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCellByIndexes)(dataGridShadowRoot, { column: 2, row: 1 });
        const deleteButtonComponent = deleteCell.querySelector('devtools-button');
        assert.instanceOf(deleteButtonComponent, HTMLElement);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(deleteButtonComponent);
        assert.isTrue(clearTrustTokens.calledOnceWith({ issuerOrigin: 'bar.org' }));
    });
});


/***/ }),

/***/ "./src/testing/DataGridHelpers.ts":
/*!****************************************!*\
  !*** ./src/testing/DataGridHelpers.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertCurrentFocusedCellIs: () => (/* binding */ assertCurrentFocusedCellIs),
/* harmony export */   assertGridContents: () => (/* binding */ assertGridContents),
/* harmony export */   assertSelectedRowIs: () => (/* binding */ assertSelectedRowIs),
/* harmony export */   emulateUserFocusingCellAt: () => (/* binding */ emulateUserFocusingCellAt),
/* harmony export */   emulateUserKeyboardNavigation: () => (/* binding */ emulateUserKeyboardNavigation),
/* harmony export */   focusCurrentlyFocusableCell: () => (/* binding */ focusCurrentlyFocusableCell),
/* harmony export */   getAllRows: () => (/* binding */ getAllRows),
/* harmony export */   getBodyRowByAriaIndex: () => (/* binding */ getBodyRowByAriaIndex),
/* harmony export */   getCellByIndexes: () => (/* binding */ getCellByIndexes),
/* harmony export */   getDataGrid: () => (/* binding */ getDataGrid),
/* harmony export */   getFocusableCell: () => (/* binding */ getFocusableCell),
/* harmony export */   getHeaderCellForColumnId: () => (/* binding */ getHeaderCellForColumnId),
/* harmony export */   getHeaderCells: () => (/* binding */ getHeaderCells),
/* harmony export */   getValuesForColumn: () => (/* binding */ getValuesForColumn),
/* harmony export */   getValuesOfAllBodyRows: () => (/* binding */ getValuesOfAllBodyRows),
/* harmony export */   getValuesOfBodyRowByAriaIndex: () => (/* binding */ getValuesOfBodyRowByAriaIndex)
/* harmony export */ });
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__.RenderCoordinator.RenderCoordinator.instance();
const getFocusableCell = (shadowRoot) => {
    // We only expect one here, but we qSA so we can assert on only one.
    // Can't use td as it may be a th if the user has focused a column header.
    const tabIndexCells = shadowRoot.querySelectorAll('table [tabindex="0"]');
    assert.lengthOf(tabIndexCells, 1);
    assert.instanceOf(tabIndexCells[0], HTMLTableCellElement);
    return tabIndexCells[0];
};
const getCellByIndexes = (shadowRoot, indexes) => {
    const cell = shadowRoot.querySelector(`[data-row-index="${indexes.row}"][data-col-index="${indexes.column}"]`);
    assert.instanceOf(cell, HTMLTableCellElement);
    return cell;
};
const getHeaderCells = (shadowRoot, options = {
    onlyVisible: false,
}) => {
    const cells = shadowRoot.querySelectorAll('[data-grid-header-cell]');
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(cells, HTMLTableCellElement);
    return Array.from(cells).filter(cell => {
        if (!options.onlyVisible) {
            return true;
        }
        return cell.classList.contains('hidden') === false;
    });
};
const getValuesOfBodyRowByAriaIndex = (shadowRoot, ariaIndex, options = {
    onlyVisible: false,
}) => {
    const row = getBodyRowByAriaIndex(shadowRoot, ariaIndex);
    const cells = row.querySelectorAll('[data-grid-value-cell-for-column]');
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(cells, HTMLTableCellElement);
    return Array.from(cells)
        .filter(cell => {
        return !options.onlyVisible || cell.classList.contains('hidden') === false;
    })
        .map(cell => {
        return cell.innerText;
    });
};
const getAllRows = (shadowRoot) => {
    const rows = shadowRoot.querySelectorAll('[aria-rowindex]');
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(rows, HTMLTableRowElement);
    return Array.from(rows);
};
const assertCurrentFocusedCellIs = (shadowRoot, { column, row }) => {
    const cell = getFocusableCell(shadowRoot);
    // Convert to strings as attributes are always strings.
    assert.strictEqual(cell.getAttribute('data-row-index'), String(row), 'The row index was not as expected.');
    assert.strictEqual(cell.getAttribute('data-col-index'), String(column), 'The column index was not as expected.');
};
const assertSelectedRowIs = (shadowRoot, row) => {
    const selectedRow = shadowRoot.querySelector('tr.selected');
    assert.instanceOf(selectedRow, HTMLTableRowElement);
    assert.strictEqual(selectedRow.getAttribute('aria-rowindex'), String(row), 'The row index was not as expected.');
};
const getDataGrid = (gridComponent) => {
    const controller = (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(gridComponent, 'devtools-data-grid-controller', _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__.DataGridController.DataGridController);
    return (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(controller, 'devtools-data-grid', _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__.DataGrid.DataGrid);
};
const assertGridContents = (gridComponent, headerExpected, rowsExpected) => {
    const grid = getDataGrid(gridComponent);
    assert.isNotNull(grid.shadowRoot);
    const headerActual = getHeaderCells(grid.shadowRoot).map(({ textContent }) => textContent.trim());
    assert.deepEqual(headerActual, headerExpected);
    const rowsActual = getValuesOfAllBodyRows(grid.shadowRoot).map(row => row.map(cell => cell.trim()));
    assert.deepEqual(rowsActual, rowsExpected);
    return grid;
};
const focusCurrentlyFocusableCell = (shadowRoot) => {
    const cell = getFocusableCell(shadowRoot);
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchFocusEvent)(cell);
};
const emulateUserKeyboardNavigation = (shadowRoot, key) => {
    const table = shadowRoot.querySelector('table');
    assert.instanceOf(table, HTMLTableElement);
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(table, { key });
};
const emulateUserFocusingCellAt = async (shadowRoot, position) => {
    const cellToFocus = getCellByIndexes(shadowRoot, position);
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchFocusEvent)(cellToFocus);
    await coordinator.done();
    assertCurrentFocusedCellIs(shadowRoot, position);
};
const getValuesOfAllBodyRows = (shadowRoot, options = {
    onlyVisible: false,
}) => {
    const rows = getAllRows(shadowRoot);
    return rows
        .map(row => {
        // now decide if the row should be included or not
        const rowIsHidden = row.classList.contains('hidden');
        const rowIndex = window.parseInt(row.getAttribute('aria-rowindex') || '-1', 10);
        return {
            rowValues: getValuesOfBodyRowByAriaIndex(shadowRoot, rowIndex, options),
            hidden: options.onlyVisible && rowIsHidden,
        };
    })
        .filter(row => row.hidden === false)
        .map(r => r.rowValues);
};
const getBodyRowByAriaIndex = (shadowRoot, rowIndex) => {
    const row = shadowRoot.querySelector(`[aria-rowindex="${rowIndex}"]`);
    assert.instanceOf(row, HTMLTableRowElement);
    return row;
};
const getHeaderCellForColumnId = (shadowRoot, columnId) => {
    const cell = shadowRoot.querySelector(`[data-grid-header-cell="${columnId}`);
    assert.instanceOf(cell, HTMLTableCellElement);
    return cell;
};
const getValuesForColumn = (shadowRoot, columnId) => {
    const cells = shadowRoot.querySelectorAll(`[data-grid-value-cell-for-column=${columnId}]`);
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(cells, HTMLTableCellElement);
    return Array.from(cells, cell => cell.innerText);
};


/***/ })

}]);