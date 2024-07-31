"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_SharedStorageEventsView_test_ts"],{

/***/ "./src/panels/application/SharedStorageEventsView.test.ts":
/*!****************************************************************!*\
  !*** ./src/panels/application/SharedStorageEventsView.test.ts ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application.js */ "./src/panels/application/application.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_4__]);
_application_js__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





var View = _application_js__WEBPACK_IMPORTED_MODULE_4__.SharedStorageEventsView;
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('SharedStorageEventsView', () => {
    const TEST_ORIGIN_A = 'http://a.test';
    const TEST_ORIGIN_B = 'http://b.test';
    const TEST_ORIGIN_C = 'http://c.test';
    const ID_A = 'AA';
    const ID_B = 'BB';
    const EMPTY_ID = '';
    const EVENTS = [
        {
            accessTime: 0,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.SharedStorageAccessType.DocumentAppend,
            mainFrameId: ID_A,
            ownerOrigin: TEST_ORIGIN_A,
            params: { key: 'key0', value: 'value0' },
        },
        {
            accessTime: 10,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.SharedStorageAccessType.WorkletGet,
            mainFrameId: ID_A,
            ownerOrigin: TEST_ORIGIN_A,
            params: { key: 'key0' },
        },
        {
            accessTime: 15,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.SharedStorageAccessType.WorkletLength,
            mainFrameId: ID_A,
            ownerOrigin: TEST_ORIGIN_B,
            params: {},
        },
        {
            accessTime: 20,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.SharedStorageAccessType.DocumentClear,
            mainFrameId: ID_A,
            ownerOrigin: TEST_ORIGIN_B,
            params: {},
        },
        {
            accessTime: 100,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.SharedStorageAccessType.WorkletSet,
            mainFrameId: ID_A,
            ownerOrigin: TEST_ORIGIN_C,
            params: { key: 'key0', value: 'value1', ignoreIfPresent: true },
        },
        {
            accessTime: 150,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.SharedStorageAccessType.WorkletRemainingBudget,
            mainFrameId: ID_A,
            ownerOrigin: TEST_ORIGIN_C,
            params: {},
        },
    ];
    const MULTI_PAGE_EVENTS = [
        {
            accessTime: 0,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.SharedStorageAccessType.DocumentAppend,
            mainFrameId: ID_A,
            ownerOrigin: TEST_ORIGIN_A,
            params: { key: 'key0', value: 'value0' },
        },
        {
            accessTime: 10,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.SharedStorageAccessType.WorkletGet,
            mainFrameId: ID_B,
            ownerOrigin: TEST_ORIGIN_A,
            params: { key: 'key0' },
        },
        {
            accessTime: 15,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.SharedStorageAccessType.WorkletLength,
            mainFrameId: ID_A,
            ownerOrigin: TEST_ORIGIN_B,
            params: {},
        },
        {
            accessTime: 20,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.SharedStorageAccessType.DocumentClear,
            mainFrameId: EMPTY_ID,
            ownerOrigin: TEST_ORIGIN_B,
            params: {},
        },
        {
            accessTime: 100,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.SharedStorageAccessType.WorkletSet,
            mainFrameId: EMPTY_ID,
            ownerOrigin: TEST_ORIGIN_C,
            params: { key: 'key0', value: 'value1', ignoreIfPresent: true },
        },
        {
            accessTime: 150,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.SharedStorageAccessType.WorkletRemainingBudget,
            mainFrameId: ID_B,
            ownerOrigin: TEST_ORIGIN_C,
            params: {},
        },
    ];
    const PAGE_A_EVENTS = [
        {
            accessTime: 0,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.SharedStorageAccessType.DocumentAppend,
            mainFrameId: ID_A,
            ownerOrigin: TEST_ORIGIN_A,
            params: { key: 'key0', value: 'value0' },
        },
        {
            accessTime: 15,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.SharedStorageAccessType.WorkletLength,
            mainFrameId: ID_A,
            ownerOrigin: TEST_ORIGIN_B,
            params: {},
        },
    ];
    it('records events', () => {
        const view = new View.SharedStorageEventsView();
        view.setDefaultIdForTesting(ID_A);
        for (const event of EVENTS) {
            view.addEvent(event);
        }
        assert.deepEqual(view.getEventsForTesting(), EVENTS);
    });
    it('ignores duplicates', () => {
        const view = new View.SharedStorageEventsView();
        view.setDefaultIdForTesting(ID_A);
        for (const event of EVENTS) {
            view.addEvent(event);
        }
        view.addEvent(EVENTS[0]);
        assert.deepEqual(view.getEventsForTesting(), EVENTS);
    });
    it('initially has placeholder sidebar', () => {
        const view = new View.SharedStorageEventsView();
        assert.notDeepEqual(view.sidebarWidget()?.constructor.name, 'SearchableView');
        assert.isTrue(view.sidebarWidget()?.contentElement.firstChild?.textContent?.includes('Click'));
    });
    it('updates sidebarWidget upon receiving cellFocusedEvent', async () => {
        const view = new View.SharedStorageEventsView();
        view.setDefaultIdForTesting(ID_A);
        for (const event of EVENTS) {
            view.addEvent(event);
        }
        const grid = view.getSharedStorageAccessGridForTesting();
        const cells = [
            { columnId: 'event-main-frame-id', value: '' },
            { columnId: 'event-time', value: 0 },
            { columnId: 'event-type', value: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.SharedStorageAccessType.DocumentAppend },
            { columnId: 'event-owner-origin', value: TEST_ORIGIN_A },
            { columnId: 'event-params', value: JSON.stringify({ key: 'key0', value: 'value0' }) },
        ];
        // Use a spy to assert that the sidebar preview pane gets updated when expected.
        const spy = sinon.spy(view, 'setSidebarWidget');
        assert.isTrue(spy.notCalled);
        grid.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGridEvents.BodyCellFocusedEvent({ columnId: 'event-time', value: '0' }, { cells }));
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)();
        assert.isTrue(spy.calledOnce);
        assert.deepEqual(view.sidebarWidget()?.constructor.name, 'SearchableView');
    });
    it('clears sidebarWidget upon clearEvents', async () => {
        const view = new View.SharedStorageEventsView();
        view.setDefaultIdForTesting(ID_A);
        for (const event of EVENTS) {
            view.addEvent(event);
        }
        const grid = view.getSharedStorageAccessGridForTesting();
        const cells = [
            { columnId: 'event-main-frame-id', value: '' },
            { columnId: 'event-time', value: 0 },
            { columnId: 'event-type', value: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.SharedStorageAccessType.DocumentAppend },
            { columnId: 'event-owner-origin', value: TEST_ORIGIN_A },
            { columnId: 'event-params', value: JSON.stringify({ key: 'key0', value: 'value0' }) },
        ];
        // Use a spy to assert that the sidebar preview pane gets updated when expected.
        const spy = sinon.spy(view, 'setSidebarWidget');
        assert.isTrue(spy.notCalled);
        grid.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGridEvents.BodyCellFocusedEvent({ columnId: 'event-time', value: '0' }, { cells }));
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)();
        assert.isTrue(spy.calledOnce);
        assert.deepEqual(view.sidebarWidget()?.constructor.name, 'SearchableView');
        view.clearEvents();
        assert.isTrue(spy.calledTwice);
        assert.notDeepEqual(view.sidebarWidget()?.constructor.name, 'SearchableView');
        assert.isTrue(view.sidebarWidget()?.contentElement.firstChild?.textContent?.includes('Click'));
    });
    it('records events only from the target page', () => {
        const view = new View.SharedStorageEventsView();
        view.setDefaultIdForTesting(ID_A);
        for (const event of MULTI_PAGE_EVENTS) {
            view.addEvent(event);
        }
        assert.deepEqual(view.getEventsForTesting(), PAGE_A_EVENTS);
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);