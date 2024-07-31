"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_InterestGroupStorageView_test_ts"],{

/***/ "./src/panels/application/InterestGroupStorageView.test.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/application/InterestGroupStorageView.test.ts ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./src/testing/ExpectStubCall.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./application.js */ "./src/panels/application/application.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_5__]);
_application_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






var View = _application_js__WEBPACK_IMPORTED_MODULE_5__.InterestGroupStorageView;
const events = [
    {
        accessTime: 0,
        type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.InterestGroupAccessType.Bid,
        ownerOrigin: 'https://owner1.com',
        name: 'cars',
    },
    {
        accessTime: 10,
        type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.InterestGroupAccessType.Join,
        ownerOrigin: 'https://owner2.com',
        name: 'trucks',
    },
];
class InterestGroupDetailsGetter {
    async getInterestGroupDetails(owner, name) {
        return {
            ownerOrigin: owner,
            name: name,
            expirationTime: 2,
            joiningOrigin: 'https://joiner.com',
            trustedBiddingSignalsKeys: [],
            ads: [],
            adComponents: [],
        };
    }
}
class InterestGroupDetailsGetterFails {
    async getInterestGroupDetails(_owner, _name) {
        return null;
    }
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('InterestGroupStorageView', () => {
    it('records events', () => {
        const view = new View.InterestGroupStorageView(new InterestGroupDetailsGetter());
        events.forEach(event => {
            view.addEvent(event);
        });
        assert.deepEqual(view.getEventsForTesting(), events);
    });
    it('ignores duplicates', () => {
        const view = new View.InterestGroupStorageView(new InterestGroupDetailsGetter());
        events.forEach(event => {
            view.addEvent(event);
        });
        view.addEvent(events[0]);
        assert.deepEqual(view.getEventsForTesting(), events);
    });
    it('initially has placeholder sidebar', () => {
        const view = new View.InterestGroupStorageView(new InterestGroupDetailsGetter());
        assert.notDeepEqual(view.sidebarWidget()?.constructor.name, 'SearchableView');
        assert.isTrue(view.sidebarWidget()?.contentElement.firstChild?.textContent?.includes('Click'));
    });
    // Disabled due to flakiness
    it.skip('[crbug.com/1473557]: updates sidebarWidget upon receiving cellFocusedEvent when InterestGroupGetter succeeds', async function () {
        if (this.timeout() > 0) {
            this.timeout(10000);
        }
        const view = new View.InterestGroupStorageView(new InterestGroupDetailsGetter());
        events.forEach(event => {
            view.addEvent(event);
        });
        const grid = view.getInterestGroupGridForTesting();
        const cells = [
            { columnId: 'event-time', value: 0 },
            { columnId: 'event-type', value: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.InterestGroupAccessType.Join },
            { columnId: 'event-group-owner', value: 'https://owner1.com' },
            { columnId: 'event-group-name', value: 'cars' },
        ];
        const spy = sinon.spy(view, 'setSidebarWidget');
        assert.isTrue(spy.notCalled);
        grid.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridEvents.BodyCellFocusedEvent({ columnId: 'event-time', value: '0' }, { cells }));
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)();
        assert.isTrue(spy.calledOnce);
        assert.deepEqual(view.sidebarWidget()?.constructor.name, 'SearchableView');
    });
    it('Clears sidebarWidget upon receiving cellFocusedEvent on an additionalBid-type events', async function () {
        if (this.timeout() > 0) {
            this.timeout(10000);
        }
        for (const eventType of [_generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.InterestGroupAccessType.AdditionalBid,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.InterestGroupAccessType.AdditionalBidWin,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.InterestGroupAccessType.TopLevelAdditionalBid]) {
            const view = new View.InterestGroupStorageView(new InterestGroupDetailsGetter());
            events.forEach(event => {
                view.addEvent(event);
            });
            const grid = view.getInterestGroupGridForTesting();
            const cells = [
                { columnId: 'event-time', value: 0 },
                { columnId: 'event-type', value: eventType },
                { columnId: 'event-group-owner', value: 'https://owner1.com' },
                { columnId: 'event-group-name', value: 'cars' },
            ];
            const sideBarUpdateDone = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_2__.expectCall)(sinon.stub(view, 'sidebarUpdatedForTesting'));
            const spy = sinon.spy(view, 'setSidebarWidget');
            assert.isTrue(spy.notCalled);
            grid.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridEvents.BodyCellFocusedEvent({ columnId: 'event-time', value: '0' }, { cells }));
            await sideBarUpdateDone;
            assert.isTrue(spy.calledOnce);
            assert.notDeepEqual(view.sidebarWidget()?.constructor.name, 'SearchableView');
            assert.isTrue(view.sidebarWidget()?.contentElement.firstChild?.textContent?.includes('No details'));
        }
    });
    // Disabled due to flakiness
    it.skip('[crbug.com/1473557]: updates sidebarWidget upon receiving cellFocusedEvent when InterestGroupDetailsGetter failsupdates sidebarWidget upon receiving cellFocusedEvent when InterestGroupDetailsGetter fails', async function () {
        if (this.timeout() > 0) {
            this.timeout(10000);
        }
        const view = new View.InterestGroupStorageView(new InterestGroupDetailsGetterFails());
        events.forEach(event => {
            view.addEvent(event);
        });
        const grid = view.getInterestGroupGridForTesting();
        const cells = [
            { columnId: 'event-time', value: 0 },
            { columnId: 'event-type', value: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.InterestGroupAccessType.Join },
            { columnId: 'event-group-owner', value: 'https://owner1.com' },
            { columnId: 'event-group-name', value: 'cars' },
        ];
        const spy = sinon.spy(view, 'setSidebarWidget');
        assert.isTrue(spy.notCalled);
        grid.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridEvents.BodyCellFocusedEvent({ columnId: 'event-time', value: '0' }, { cells }));
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)();
        assert.isTrue(spy.calledOnce);
        assert.notDeepEqual(view.sidebarWidget()?.constructor.name, 'SearchableView');
        assert.isTrue(view.sidebarWidget()?.contentElement.firstChild?.textContent?.includes('No details'));
    });
    // Disabled due to flakiness
    it.skip('[crbug.com/1473557]: clears sidebarWidget upon clearEvents', async function () {
        if (this.timeout() > 0) {
            this.timeout(10000);
        }
        const view = new View.InterestGroupStorageView(new InterestGroupDetailsGetter());
        events.forEach(event => {
            view.addEvent(event);
        });
        const grid = view.getInterestGroupGridForTesting();
        const cells = [
            { columnId: 'event-time', value: 0 },
            { columnId: 'event-type', value: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.InterestGroupAccessType.Join },
            { columnId: 'event-group-owner', value: 'https://owner1.com' },
            { columnId: 'event-group-name', value: 'cars' },
        ];
        const spy = sinon.spy(view, 'setSidebarWidget');
        assert.isTrue(spy.notCalled);
        grid.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridEvents.BodyCellFocusedEvent({ columnId: 'event-time', value: '0' }, { cells }));
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)();
        assert.isTrue(spy.calledOnce);
        assert.deepEqual(view.sidebarWidget()?.constructor.name, 'SearchableView');
        view.clearEvents();
        assert.isTrue(spy.calledTwice);
        assert.notDeepEqual(view.sidebarWidget()?.constructor.name, 'SearchableView');
        assert.isTrue(view.sidebarWidget()?.contentElement.firstChild?.textContent?.includes('Click'));
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/testing/ExpectStubCall.ts":
/*!***************************************!*\
  !*** ./src/testing/ExpectStubCall.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expectCall: () => (/* binding */ expectCall),
/* harmony export */   expectCalled: () => (/* binding */ expectCalled)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCall(stub, options = {}) {
    return new Promise(resolve => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function (...args) {
            if (stub.callCount < (options.callCount ?? 1)) {
                return undefined;
            }
            resolve(args);
            return (options.fakeFn ? options.fakeFn.apply(this, args) : undefined);
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub, options = {}) {
    const remainingCalls = (options.callCount ?? 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, { ...options, callCount: remainingCalls });
}


/***/ })

}]);