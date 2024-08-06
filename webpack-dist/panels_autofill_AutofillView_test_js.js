"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_autofill_AutofillView_test_js"],{

/***/ "./panels/autofill/AutofillView.test.js":
/*!**********************************************!*\
  !*** ./panels/autofill/AutofillView.test.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_autofill_manager_autofill_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/autofill_manager/autofill_manager.js */ "./models/autofill_manager/autofill_manager.js");
/* harmony import */ var _testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/DataGridHelpers.js */ "./testing/DataGridHelpers.js");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _autofill_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./autofill.js */ "./panels/autofill/autofill.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__.RenderCoordinator.RenderCoordinator.instance();
const addressFormFilledEvent = {
    addressUi: {
        addressFields: [
            {
                fields: [
                    { name: 'NAME_FULL', value: 'Crocodile Middle Dundee' },
                ],
            },
            {
                fields: [
                    { name: 'COMPANY_NAME', value: 'Uluru Tours' },
                ],
            },
            {
                fields: [
                    { name: 'ADDRESS_HOME_STREET_ADDRESS', value: 'Outback Road 1' },
                ],
            },
            {
                fields: [
                    { name: 'ADDRESS_HOME_CITY', value: 'Bundaberg' },
                    { name: 'ADDRESS_HOME_STATE', value: 'Queensland' },
                    { name: 'ADDRESS_HOME_ZIP', value: '12345' },
                ],
            },
        ],
    },
    filledFields: [
        {
            htmlType: 'text',
            id: 'input1',
            name: '',
            value: 'Crocodile',
            autofillType: 'First name',
            fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */,
            fieldId: 1,
            frameId: '1',
        },
        {
            htmlType: 'text',
            id: '',
            name: 'input2',
            value: 'Dundee',
            autofillType: 'Last name',
            fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */,
            fieldId: 2,
            frameId: '1',
        },
        {
            htmlType: 'text',
            id: 'input3',
            name: '',
            value: 'Australia',
            autofillType: 'Country',
            fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */,
            fieldId: 3,
            frameId: '1',
        },
        {
            htmlType: 'text',
            id: 'input4',
            name: '',
            value: '12345',
            autofillType: 'Zip code',
            fillingStrategy: "autocompleteAttribute" /* Protocol.Autofill.FillingStrategy.AutocompleteAttribute */,
            fieldId: 4,
            frameId: '1',
        },
    ],
};
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_6__.describeWithMockConnection)('AutofillView', () => {
    let target;
    let autofillModel;
    let showViewStub;
    beforeEach(() => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register('apca', '');
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createTarget)();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(target);
        const maybeAutofillModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.AutofillModel.AutofillModel);
        assert.exists(maybeAutofillModel);
        autofillModel = maybeAutofillModel;
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.enableForTest("autofill-view" /* Root.Runtime.ExperimentName.AUTOFILL_VIEW */);
        showViewStub = sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ViewManager.ViewManager.instance(), 'showView').resolves();
        _models_autofill_manager_autofill_manager_js__WEBPACK_IMPORTED_MODULE_2__.AutofillManager.AutofillManager.instance({ forceNew: true });
    });
    afterEach(() => {
        showViewStub.restore();
    });
    const renderAutofillView = async () => {
        const view = new _autofill_js__WEBPACK_IMPORTED_MODULE_10__.AutofillView.AutofillView();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(view);
        await view.render();
        await coordinator.done();
        return view;
    };
    const assertViewShowsEventData = (view) => {
        const addressSpans = view.shadowRoot.querySelectorAll('.address span');
        const addressText = [...addressSpans].map(div => div.textContent);
        assert.deepStrictEqual(addressText, ['Crocodile', ' Middle ', 'Dundee', 'Uluru ToursOutback Road 1Bundaberg Queensland ', '12345']);
        const expectedHeaders = ['Form field', 'Predicted autofill value', 'Value', 'filledFieldIndex'];
        const expectedRows = [
            ['#input1 (text)', 'First name \nheur', '"Crocodile"', ''],
            ['input2 (text)', 'Last name \nheur', '"Dundee"', ''],
            ['#input3 (text)', 'Country \nheur', '"Australia"', ''],
            ['#input4 (text)', 'Zip code \nattr', '"12345"', ''],
        ];
        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_3__.assertGridContents)(view, expectedHeaders, expectedRows);
    };
    it('renders autofilled address and filled fields and clears content on navigation', async () => {
        const expectedPlaceholder = 'To start debugging autofill, use Chrome\'s autofill menu to fill an address form.';
        const view = await renderAutofillView();
        let placeholderText = view.shadowRoot.querySelector('.placeholder div').textContent.trim();
        assert.strictEqual(placeholderText, expectedPlaceholder);
        autofillModel.addressFormFilled(addressFormFilledEvent);
        await coordinator.done({ waitForWork: true });
        assertViewShowsEventData(view);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_7__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_7__.getMainFrame)(target));
        await coordinator.done();
        placeholderText = view.shadowRoot.querySelector('.placeholder div').textContent.trim();
        assert.strictEqual(placeholderText, expectedPlaceholder);
    });
    it('shows content if the view is created after the event was received', async () => {
        autofillModel.addressFormFilled(addressFormFilledEvent);
        assert.isTrue(showViewStub.calledOnceWithExactly('autofill-view'));
        const view = await renderAutofillView();
        assert.isNotNull(view.shadowRoot);
        assertViewShowsEventData(view);
        await coordinator.done();
    });
    it('auto-open can be turned off/on', async () => {
        const view = await renderAutofillView();
        autofillModel.addressFormFilled(addressFormFilledEvent);
        assert.isTrue(showViewStub.calledOnceWithExactly('autofill-view'));
        showViewStub.reset();
        const checkbox = view.shadowRoot.querySelector('input');
        assert.isNotNull(checkbox);
        assert.isTrue(checkbox.checked);
        checkbox.checked = false;
        let event = new Event('change');
        checkbox.dispatchEvent(event);
        autofillModel.addressFormFilled(addressFormFilledEvent);
        assert.isTrue(showViewStub.notCalled);
        checkbox.checked = true;
        event = new Event('change');
        checkbox.dispatchEvent(event);
        autofillModel.addressFormFilled(addressFormFilledEvent);
        assert.isTrue(showViewStub.calledOnceWithExactly('autofill-view'));
        await coordinator.done();
    });
    it('highlights corresponding grid row when hovering over address span', async () => {
        const monospaceStyles = 'font-family:var(--monospace-font-family);font-size:var(--monospace-font-size);';
        autofillModel.addressFormFilled(addressFormFilledEvent);
        assert.isTrue(showViewStub.calledOnceWithExactly('autofill-view'));
        const view = await renderAutofillView();
        assertViewShowsEventData(view);
        const addressSpans = view.shadowRoot.querySelectorAll('.address span');
        const crocodileSpan = addressSpans[0];
        assert.strictEqual(crocodileSpan.textContent, 'Crocodile');
        assert.isFalse(crocodileSpan.classList.contains('highlighted'));
        const grid = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getDataGrid)(view);
        assert.isNotNull(grid.shadowRoot);
        const firstGridRow = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getBodyRowByAriaIndex)(grid.shadowRoot, 1);
        let styles = firstGridRow.getAttribute('style') || '';
        assert.strictEqual(styles.replace(/\s/g, ''), monospaceStyles);
        crocodileSpan.dispatchEvent(new MouseEvent('mouseenter'));
        await coordinator.done({ waitForWork: true });
        assert.isTrue(crocodileSpan.classList.contains('highlighted'));
        styles = firstGridRow.getAttribute('style') || '';
        assert.strictEqual(styles.replace(/\s/g, ''), monospaceStyles + 'background-color:var(--sys-color-state-hover-on-subtle);');
        crocodileSpan.dispatchEvent(new MouseEvent('mouseleave'));
        await coordinator.done({ waitForWork: true });
        assert.isFalse(crocodileSpan.classList.contains('highlighted'));
        styles = firstGridRow.getAttribute('style') || '';
        assert.strictEqual(styles.replace(/\s/g, ''), monospaceStyles);
    });
    it('highlights corresponding address span and DOM node when hovering over grid row', async () => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.stubNoopSettings)();
        const mockFrame = {
            resourceTreeModel: () => ({
                target: () => target,
            }),
        };
        const getFrameStub = sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager.instance(), 'getFrame').callsFake(frameId => {
            return frameId === addressFormFilledEvent.filledFields[3].frameId ? mockFrame : null;
        });
        autofillModel.addressFormFilled(addressFormFilledEvent);
        assert.isTrue(showViewStub.calledOnceWithExactly('autofill-view'));
        const view = await renderAutofillView();
        assertViewShowsEventData(view);
        const domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
        const overlayModel = domModel?.overlayModel();
        assert.exists(overlayModel);
        const overlaySpy = sinon.spy(overlayModel, 'highlightInOverlay');
        const hideOverlaySpy = sinon.spy(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.OverlayModel, 'hideDOMNodeHighlight');
        const addressSpans = view.shadowRoot.querySelectorAll('.address span');
        const zipCodeSpan = addressSpans[4];
        assert.strictEqual(zipCodeSpan.textContent, '12345');
        assert.isFalse(zipCodeSpan.classList.contains('highlighted'));
        const grid = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getDataGrid)(view);
        assert.isNotNull(grid.shadowRoot);
        const fourthGridRow = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getBodyRowByAriaIndex)(grid.shadowRoot, 4);
        fourthGridRow.dispatchEvent(new MouseEvent('mouseenter'));
        await coordinator.done({ waitForWork: true });
        assert.isTrue(zipCodeSpan.classList.contains('highlighted'));
        assert.isTrue(overlaySpy.calledOnce);
        const deferredNode = overlaySpy.getCall(0).args[0].deferredNode;
        assert.strictEqual(deferredNode.backendNodeId(), 4);
        assert.isTrue(hideOverlaySpy.notCalled);
        fourthGridRow.dispatchEvent(new MouseEvent('mouseleave'));
        await coordinator.done({ waitForWork: true });
        assert.isFalse(zipCodeSpan.classList.contains('highlighted'));
        assert.isTrue(hideOverlaySpy.calledOnce);
        getFrameStub.restore();
    });
});
//# sourceMappingURL=AutofillView.test.js.map

/***/ }),

/***/ "./panels/autofill/autofill.js":
/*!*************************************!*\
  !*** ./panels/autofill/autofill.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofillView: () => (/* reexport module object */ _AutofillView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _AutofillView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutofillView.js */ "./panels/autofill/AutofillView.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=autofill.js.map

/***/ }),

/***/ "./testing/DataGridHelpers.js":
/*!************************************!*\
  !*** ./testing/DataGridHelpers.js ***!
  \************************************/
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
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMHelpers.js */ "./testing/DOMHelpers.js");
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
//# sourceMappingURL=DataGridHelpers.js.map

/***/ })

}]);