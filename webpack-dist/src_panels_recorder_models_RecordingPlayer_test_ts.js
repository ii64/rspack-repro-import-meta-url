"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_models_RecordingPlayer_test_ts"],{

/***/ "./src/panels/recorder/models/RecordingPlayer.test.ts":
/*!************************************************************!*\
  !*** ./src/panels/recorder/models/RecordingPlayer.test.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../testing/RecorderHelpers.js */ "./src/panels/recorder/testing/RecorderHelpers.ts");
/* harmony import */ var _models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models.js */ "./src/panels/recorder/models/models.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('RecordingPlayer', () => {
    let recordingPlayer;
    beforeEach(() => {
        (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.installMocksForTargetManager)();
        (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.installMocksForRecordingPlayer)();
    });
    afterEach(() => {
        recordingPlayer.disposeForTesting();
    });
    it('should emit `Step` event before executing in every step', async () => {
        recordingPlayer = new _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.RecordingPlayer({
            title: 'test',
            steps: [
                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
            ],
        }, {
            speed: _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.PlayRecordingSpeed.Normal,
            breakpointIndexes: new Set(),
        });
        const stepEventHandlerStub = sinon.stub().callsFake(async ({ data: { resolve } }) => {
            resolve();
        });
        recordingPlayer.addEventListener(_models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.Events.Step, stepEventHandlerStub);
        await recordingPlayer.play();
        assert.isTrue(stepEventHandlerStub.getCalls().length === 3);
    });
    describe('Step by step execution', () => {
        it('should stop execution before executing a step that has a breakpoint', async () => {
            recordingPlayer = new _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.RecordingPlayer({
                title: 'test',
                steps: [
                    (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                    (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                    (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                ],
            }, {
                speed: _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.PlayRecordingSpeed.Normal,
                breakpointIndexes: new Set([1]),
            });
            const stepEventHandlerStub = sinon.stub().callsFake(async ({ data: { resolve } }) => {
                resolve();
            });
            const stopEventPromise = new Promise(resolve => {
                recordingPlayer.addEventListener(_models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.Events.Stop, () => {
                    resolve();
                });
            });
            recordingPlayer.addEventListener(_models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.Events.Step, stepEventHandlerStub);
            void recordingPlayer.play();
            await stopEventPromise;
            assert.strictEqual(stepEventHandlerStub.getCalls().length, 2);
        });
        it('should `stepOver` execute only the next step after breakpoint and stop', async () => {
            recordingPlayer = new _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.RecordingPlayer({
                title: 'test',
                steps: [
                    (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                    (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                    (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                    (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                ],
            }, {
                speed: _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.PlayRecordingSpeed.Normal,
                breakpointIndexes: new Set([1]),
            });
            const stepEventHandlerStub = sinon.stub().callsFake(async ({ data: { resolve } }) => {
                resolve();
            });
            let stopEventPromise = new Promise(resolve => {
                recordingPlayer.addEventListener(_models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.Events.Stop, () => {
                    resolve();
                    stopEventPromise = new Promise(nextResolve => {
                        recordingPlayer.addEventListener(_models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.Events.Stop, () => {
                            nextResolve();
                        }, { once: true });
                    });
                }, { once: true });
            });
            recordingPlayer.addEventListener(_models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.Events.Step, stepEventHandlerStub);
            void recordingPlayer.play();
            await stopEventPromise;
            assert.strictEqual(stepEventHandlerStub.getCalls().length, 2);
            recordingPlayer.stepOver();
            await stopEventPromise;
            assert.strictEqual(stepEventHandlerStub.getCalls().length, 3);
        });
        it('should `continue` execute until the next breakpoint', async () => {
            recordingPlayer = new _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.RecordingPlayer({
                title: 'test',
                steps: [
                    (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                    (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                    (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                    (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                    (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                ],
            }, {
                speed: _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.PlayRecordingSpeed.Normal,
                breakpointIndexes: new Set([1, 3]),
            });
            const stepEventHandlerStub = sinon.stub().callsFake(async ({ data: { resolve } }) => {
                resolve();
            });
            let stopEventPromise = new Promise(resolve => {
                recordingPlayer.addEventListener(_models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.Events.Stop, () => {
                    resolve();
                    stopEventPromise = new Promise(nextResolve => {
                        recordingPlayer.addEventListener(_models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.Events.Stop, () => {
                            nextResolve();
                        }, { once: true });
                    });
                }, { once: true });
            });
            recordingPlayer.addEventListener(_models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.Events.Step, stepEventHandlerStub);
            void recordingPlayer.play();
            await stopEventPromise;
            assert.strictEqual(stepEventHandlerStub.getCalls().length, 2);
            recordingPlayer.continue();
            await stopEventPromise;
            assert.strictEqual(stepEventHandlerStub.getCalls().length, 4);
        });
        it('should `continue` execute until the end if there is no later breakpoints', async () => {
            recordingPlayer = new _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.RecordingPlayer({
                title: 'test',
                steps: [
                    (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                    (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                    (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                    (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                    (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                ],
            }, {
                speed: _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.PlayRecordingSpeed.Normal,
                breakpointIndexes: new Set([1]),
            });
            const stepEventHandlerStub = sinon.stub().callsFake(async ({ data: { resolve } }) => {
                resolve();
            });
            let stopEventPromise = new Promise(resolve => {
                recordingPlayer.addEventListener(_models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.Events.Stop, () => {
                    resolve();
                    stopEventPromise = new Promise(nextResolve => {
                        recordingPlayer.addEventListener(_models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.Events.Stop, () => {
                            nextResolve();
                        }, { once: true });
                    });
                }, { once: true });
            });
            const doneEventPromise = new Promise(resolve => {
                recordingPlayer.addEventListener(_models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.Events.Done, () => {
                    resolve();
                }, { once: true });
            });
            recordingPlayer.addEventListener(_models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.Events.Step, stepEventHandlerStub);
            void recordingPlayer.play();
            await stopEventPromise;
            assert.strictEqual(stepEventHandlerStub.getCalls().length, 2);
            recordingPlayer.continue();
            await doneEventPromise;
            assert.strictEqual(stepEventHandlerStub.getCalls().length, 5);
        });
    });
});


/***/ }),

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