"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_media_MainView_test_ts"],{

/***/ "./src/panels/media/MainView.test.ts":
/*!*******************************************!*\
  !*** ./src/panels/media/MainView.test.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _media_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media.js */ "./src/panels/media/media.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const PLAYER_ID = 'PLAYER_ID';
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('MediaMainView', () => {
    let target;
    beforeEach(() => {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
    });
    const testUiUpdate = (event, expectedMethod, inScope) => async () => {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
        const downloadStore = new _media_js__WEBPACK_IMPORTED_MODULE_4__.MainView.PlayerDataDownloadManager();
        const expectedCall = sinon.stub(downloadStore, expectedMethod).returns();
        const mainView = new _media_js__WEBPACK_IMPORTED_MODULE_4__.MainView.MainView(downloadStore);
        mainView.markAsRoot();
        mainView.show(document.body);
        const model = target.model(_media_js__WEBPACK_IMPORTED_MODULE_4__.MediaModel.MediaModel);
        assert.exists(model);
        model.dispatchEventToListeners(_media_js__WEBPACK_IMPORTED_MODULE_4__.MediaModel.Events.PlayersCreated, [PLAYER_ID]);
        const field = [{ name: 'kResolution', value: '{}', data: {}, stack: [], cause: [] }];
        const data = { playerId: PLAYER_ID, properties: field, events: field, messages: field, errors: field };
        model.dispatchEventToListeners(event, ...[data]);
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.strictEqual(expectedCall.called, inScope);
        await _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__.RenderCoordinator.RenderCoordinator.instance().done();
        mainView.detach();
    };
    it('reacts to properties on in scope event', testUiUpdate(_media_js__WEBPACK_IMPORTED_MODULE_4__.MediaModel.Events.PlayerPropertiesChanged, 'onProperty', true));
    it('does not react to properties on out of scope event', testUiUpdate(_media_js__WEBPACK_IMPORTED_MODULE_4__.MediaModel.Events.PlayerPropertiesChanged, 'onProperty', false));
    it('reacts to event on in scope event', testUiUpdate(_media_js__WEBPACK_IMPORTED_MODULE_4__.MediaModel.Events.PlayerEventsAdded, 'onEvent', true));
    it('does not react to event on out of scope event', testUiUpdate(_media_js__WEBPACK_IMPORTED_MODULE_4__.MediaModel.Events.PlayerEventsAdded, 'onEvent', false));
    it('reacts to messages on in scope event', testUiUpdate(_media_js__WEBPACK_IMPORTED_MODULE_4__.MediaModel.Events.PlayerMessagesLogged, 'onMessage', true));
    it('does not react to messages on out of scope event', testUiUpdate(_media_js__WEBPACK_IMPORTED_MODULE_4__.MediaModel.Events.PlayerMessagesLogged, 'onMessage', false));
    it('reacts to error on in scope event', testUiUpdate(_media_js__WEBPACK_IMPORTED_MODULE_4__.MediaModel.Events.PlayerErrorsRaised, 'onError', true));
    it('does not react to error on out of scope event', testUiUpdate(_media_js__WEBPACK_IMPORTED_MODULE_4__.MediaModel.Events.PlayerErrorsRaised, 'onError', false));
});


/***/ }),

/***/ "./src/panels/media/media.ts":
/*!***********************************!*\
  !*** ./src/panels/media/media.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainView: () => (/* reexport module object */ _MainView_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   MediaModel: () => (/* reexport module object */ _MediaModel_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   PlayerDetailView: () => (/* reexport module object */ _PlayerDetailView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   PlayerEventsView: () => (/* reexport module object */ _EventDisplayTable_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   PlayerListView: () => (/* reexport module object */ _PlayerListView_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   PlayerPropertiesView: () => (/* reexport module object */ _PlayerPropertiesView_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   TickingFlameChart: () => (/* reexport module object */ _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   TickingFlameChartHelpers: () => (/* reexport module object */ _TickingFlameChartHelpers_js__WEBPACK_IMPORTED_MODULE_7__)
/* harmony export */ });
/* harmony import */ var _EventDisplayTable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventDisplayTable.js */ "./src/panels/media/EventDisplayTable.ts");
/* harmony import */ var _MainView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainView.js */ "./src/panels/media/MainView.ts");
/* harmony import */ var _MediaModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaModel.js */ "./src/panels/media/MediaModel.ts");
/* harmony import */ var _PlayerDetailView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayerDetailView.js */ "./src/panels/media/PlayerDetailView.ts");
/* harmony import */ var _PlayerListView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayerListView.js */ "./src/panels/media/PlayerListView.ts");
/* harmony import */ var _PlayerPropertiesView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayerPropertiesView.js */ "./src/panels/media/PlayerPropertiesView.ts");
/* harmony import */ var _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TickingFlameChart.js */ "./src/panels/media/TickingFlameChart.ts");
/* harmony import */ var _TickingFlameChartHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TickingFlameChartHelpers.js */ "./src/panels/media/TickingFlameChartHelpers.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



















/***/ })

}]);