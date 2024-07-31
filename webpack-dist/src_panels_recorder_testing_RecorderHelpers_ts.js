"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_testing_RecorderHelpers_ts"],{

/***/ "./src/panels/recorder/testing/RecorderHelpers.ts":
/*!********************************************************!*\
  !*** ./src/panels/recorder/testing/RecorderHelpers.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCustomStep: () => (/* binding */ createCustomStep),
/* harmony export */   installMocksForRecordingPlayer: () => (/* binding */ installMocksForRecordingPlayer),
/* harmony export */   installMocksForTargetManager: () => (/* binding */ installMocksForTargetManager)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models.js */ "./src/panels/recorder/models/models.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const createCustomStep = () => ({
    type: _models_models_js__WEBPACK_IMPORTED_MODULE_1__.Schema.StepType.CustomStep,
    name: 'dummy step',
    parameters: {},
});
const installMocksForRecordingPlayer = () => {
    const mock = {
        page: {
            _client: () => ({
                send: sinon.stub().resolves(),
            }),
            frames: () => [{
                    client: { send: sinon.stub().resolves() },
                }],
            evaluate: () => '',
            url() {
                return '';
            },
            bringToFront() {
                return Promise.resolve();
            },
        },
        browser: {
            pages: () => [mock.page],
            disconnect: () => sinon.stub().resolves(),
        },
    };
    sinon.stub(_models_models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.RecordingPlayer, 'connectPuppeteer').resolves(mock);
};
const installMocksForTargetManager = () => {
    const stub = {
        suspendAllTargets: sinon.stub().resolves(),
        resumeAllTargets: sinon.stub().resolves(),
        primaryPageTarget: sinon.stub().returns({
            targetAgent: sinon.stub().returns({}),
        }),
    };
    sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager, 'instance')
        .callsFake(() => stub);
};


/***/ })

}]);