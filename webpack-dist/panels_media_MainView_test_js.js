"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_media_MainView_test_js"],{

/***/ "./panels/media/MainView.test.js":
/*!***************************************!*\
  !*** ./panels/media/MainView.test.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _media_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media.js */ "./panels/media/media.js");
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
        model.dispatchEventToListeners("PlayersCreated" /* Media.MediaModel.Events.PlayersCreated */, [PLAYER_ID]);
        const field = [{ name: 'kResolution', value: '{}', data: {}, stack: [], cause: [] }];
        const data = { playerId: PLAYER_ID, properties: field, events: field, messages: field, errors: field };
        model.dispatchEventToListeners(event, ...[data]);
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.strictEqual(expectedCall.called, inScope);
        await _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__.RenderCoordinator.RenderCoordinator.instance().done();
        mainView.detach();
    };
    it('reacts to properties on in scope event', testUiUpdate("PlayerPropertiesChanged" /* Media.MediaModel.Events.PlayerPropertiesChanged */, 'onProperty', true));
    it('does not react to properties on out of scope event', testUiUpdate("PlayerPropertiesChanged" /* Media.MediaModel.Events.PlayerPropertiesChanged */, 'onProperty', false));
    it('reacts to event on in scope event', testUiUpdate("PlayerEventsAdded" /* Media.MediaModel.Events.PlayerEventsAdded */, 'onEvent', true));
    it('does not react to event on out of scope event', testUiUpdate("PlayerEventsAdded" /* Media.MediaModel.Events.PlayerEventsAdded */, 'onEvent', false));
    it('reacts to messages on in scope event', testUiUpdate("PlayerMessagesLogged" /* Media.MediaModel.Events.PlayerMessagesLogged */, 'onMessage', true));
    it('does not react to messages on out of scope event', testUiUpdate("PlayerMessagesLogged" /* Media.MediaModel.Events.PlayerMessagesLogged */, 'onMessage', false));
    it('reacts to error on in scope event', testUiUpdate("PlayerErrorsRaised" /* Media.MediaModel.Events.PlayerErrorsRaised */, 'onError', true));
    it('does not react to error on out of scope event', testUiUpdate("PlayerErrorsRaised" /* Media.MediaModel.Events.PlayerErrorsRaised */, 'onError', false));
});
//# sourceMappingURL=MainView.test.js.map

/***/ }),

/***/ "./panels/media/media.js":
/*!*******************************!*\
  !*** ./panels/media/media.js ***!
  \*******************************/
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
/* harmony import */ var _EventDisplayTable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventDisplayTable.js */ "./panels/media/EventDisplayTable.js");
/* harmony import */ var _MainView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainView.js */ "./panels/media/MainView.js");
/* harmony import */ var _MediaModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaModel.js */ "./panels/media/MediaModel.js");
/* harmony import */ var _PlayerDetailView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayerDetailView.js */ "./panels/media/PlayerDetailView.js");
/* harmony import */ var _PlayerListView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayerListView.js */ "./panels/media/PlayerListView.js");
/* harmony import */ var _PlayerPropertiesView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayerPropertiesView.js */ "./panels/media/PlayerPropertiesView.js");
/* harmony import */ var _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TickingFlameChart.js */ "./panels/media/TickingFlameChart.js");
/* harmony import */ var _TickingFlameChartHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TickingFlameChartHelpers.js */ "./panels/media/TickingFlameChartHelpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

















//# sourceMappingURL=media.js.map

/***/ })

}]);