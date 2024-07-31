"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_RecorderController_test_ts"],{

/***/ "./src/panels/recorder/RecorderController.test.ts":
/*!********************************************************!*\
  !*** ./src/panels/recorder/RecorderController.test.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/recorder/components/components.ts");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/models.js */ "./src/panels/recorder/models/models.ts");
/* harmony import */ var _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recorder-actions/recorder-actions.js */ "./src/panels/recorder/recorder-actions/recorder-actions.ts");
/* harmony import */ var _recorder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recorder.js */ "./src/panels/recorder/recorder.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* eslint-disable rulesdir/es_modules_import */






const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__.RenderCoordinator.RenderCoordinator.instance();
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('RecorderController', () => {
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupActionRegistry)();
    function makeRecording() {
        const step = {
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_3__.Schema.StepType.Navigate,
            url: 'https://example.com',
        };
        const recording = {
            storageName: 'test',
            flow: { title: 'test', steps: [step] },
        };
        return recording;
    }
    async function setupController(recording) {
        const controller = new _recorder_js__WEBPACK_IMPORTED_MODULE_5__.RecorderController.RecorderController();
        controller.setCurrentPageForTesting(_recorder_js__WEBPACK_IMPORTED_MODULE_5__.RecorderController.Pages.RecordingPage);
        controller.setCurrentRecordingForTesting(recording);
        controller.connectedCallback();
        await coordinator.done();
        return controller;
    }
    describe('Navigation', () => {
        it('should return back to the previous page on recordingcancelled event', async () => {
            const previousPage = _recorder_js__WEBPACK_IMPORTED_MODULE_5__.RecorderController.Pages.AllRecordingsPage;
            const controller = new _recorder_js__WEBPACK_IMPORTED_MODULE_5__.RecorderController.RecorderController();
            controller.setCurrentPageForTesting(previousPage);
            controller.setCurrentPageForTesting(_recorder_js__WEBPACK_IMPORTED_MODULE_5__.RecorderController.Pages.CreateRecordingPage);
            controller.connectedCallback();
            await coordinator.done();
            const createRecordingView = controller.shadowRoot?.querySelector('devtools-create-recording-view');
            assert.ok(createRecordingView);
            createRecordingView?.dispatchEvent(new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.CreateRecordingView.RecordingCancelledEvent());
            assert.strictEqual(controller.getCurrentPageForTesting(), previousPage);
        });
    });
    describe('StepView', () => {
        async function dispatchRecordingViewEvent(controller, event) {
            const recordingView = controller.shadowRoot?.querySelector('devtools-recording-view');
            assert.ok(recordingView);
            recordingView?.dispatchEvent(event);
            await coordinator.done();
        }
        beforeEach(() => {
            _models_models_js__WEBPACK_IMPORTED_MODULE_3__.RecordingStorage.RecordingStorage.instance().clearForTest();
        });
        after(() => {
            _models_models_js__WEBPACK_IMPORTED_MODULE_3__.RecordingStorage.RecordingStorage.instance().clearForTest();
        });
        it('should add a new step after a step', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            await dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddStep(recording.flow.steps[0], _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddStepPosition.AFTER));
            const flow = controller.getUserFlow();
            assert.deepStrictEqual(flow, {
                title: 'test',
                steps: [
                    {
                        type: _models_models_js__WEBPACK_IMPORTED_MODULE_3__.Schema.StepType.Navigate,
                        url: 'https://example.com',
                    },
                    {
                        type: _models_models_js__WEBPACK_IMPORTED_MODULE_3__.Schema.StepType.WaitForElement,
                        selectors: ['body'],
                    },
                ],
            });
        });
        it('should add a new step after a section', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            const sections = controller.getSectionsForTesting();
            if (!sections) {
                throw new Error('Controller is missing sections');
            }
            assert.lengthOf(sections, 1);
            await dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddStep(sections[0], _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddStepPosition.AFTER));
            const flow = controller.getUserFlow();
            assert.deepStrictEqual(flow, {
                title: 'test',
                steps: [
                    {
                        type: _models_models_js__WEBPACK_IMPORTED_MODULE_3__.Schema.StepType.Navigate,
                        url: 'https://example.com',
                    },
                    {
                        type: _models_models_js__WEBPACK_IMPORTED_MODULE_3__.Schema.StepType.WaitForElement,
                        selectors: ['body'],
                    },
                ],
            });
        });
        it('should add a new step before a step', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            await dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddStep(recording.flow.steps[0], _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddStepPosition.BEFORE));
            const flow = controller.getUserFlow();
            assert.deepStrictEqual(flow, {
                title: 'test',
                steps: [
                    {
                        type: _models_models_js__WEBPACK_IMPORTED_MODULE_3__.Schema.StepType.WaitForElement,
                        selectors: ['body'],
                    },
                    {
                        type: _models_models_js__WEBPACK_IMPORTED_MODULE_3__.Schema.StepType.Navigate,
                        url: 'https://example.com',
                    },
                ],
            });
        });
        it('should delete a step', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            await dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.RemoveStep(recording.flow.steps[0]));
            const flow = controller.getUserFlow();
            assert.deepStrictEqual(flow, { title: 'test', steps: [] });
        });
        it('should adding a new step before a step with a breakpoint update the breakpoint indexes correctly', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            const stepIndex = 3;
            await dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddBreakpointEvent(stepIndex));
            assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), [
                stepIndex,
            ]);
            await dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddStep(recording.flow.steps[0], _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddStepPosition.BEFORE));
            // Breakpoint index moves to the next index
            assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), [
                stepIndex + 1,
            ]);
        });
        it('should removing a step before a step with a breakpoint update the breakpoint indexes correctly', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            const stepIndex = 3;
            await dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddBreakpointEvent(stepIndex));
            assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), [
                stepIndex,
            ]);
            await dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.RemoveStep(recording.flow.steps[0]));
            // Breakpoint index moves to the previous index
            assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), [
                stepIndex - 1,
            ]);
        });
        it('should removing a step with a breakpoint remove the breakpoint index as well', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            const stepIndex = 0;
            await dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddBreakpointEvent(stepIndex));
            assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), [
                stepIndex,
            ]);
            await dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.RemoveStep(recording.flow.steps[stepIndex]));
            // Breakpoint index is removed
            assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), []);
        });
        it('should "add breakpoint" event add a breakpoint', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            const stepIndex = 1;
            assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), []);
            await dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddBreakpointEvent(stepIndex));
            assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), [
                stepIndex,
            ]);
        });
        it('should "remove breakpoint" event remove a breakpoint', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            const stepIndex = 1;
            await dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddBreakpointEvent(stepIndex));
            assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), [
                stepIndex,
            ]);
            await dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.RemoveBreakpointEvent(stepIndex));
            assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), []);
        });
    });
    describe('Create new recording action', () => {
        it('should execute action', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            await controller.handleActions(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_4__.RecorderActions.CreateRecording);
            assert.strictEqual(controller.getCurrentPageForTesting(), _recorder_js__WEBPACK_IMPORTED_MODULE_5__.RecorderController.Pages.CreateRecordingPage);
        });
        it('should not execute action while recording', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            controller.setIsRecordingStateForTesting(true);
            await controller.handleActions(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_4__.RecorderActions.CreateRecording);
            assert.strictEqual(controller.getCurrentPageForTesting(), _recorder_js__WEBPACK_IMPORTED_MODULE_5__.RecorderController.Pages.RecordingPage);
        });
        it('should not execute action while replaying', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            controller.setRecordingStateForTesting({
                isPlaying: true,
                isPausedOnBreakpoint: false,
            });
            await controller.handleActions(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_4__.RecorderActions.CreateRecording);
            assert.strictEqual(controller.getCurrentPageForTesting(), _recorder_js__WEBPACK_IMPORTED_MODULE_5__.RecorderController.Pages.RecordingPage);
        });
    });
    describe('Action is possible', () => {
        it('should return true for create action when not replaying or recording', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            assert.isTrue(controller.isActionPossible(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_4__.RecorderActions.CreateRecording));
        });
        it('should return false for create action when recording', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            controller.setRecordingStateForTesting({
                isPlaying: true,
                isPausedOnBreakpoint: false,
            });
            assert.isFalse(controller.isActionPossible(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_4__.RecorderActions.CreateRecording));
        });
        it('should return false for create action when replaying', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            controller.setIsRecordingStateForTesting(true);
            assert.isFalse(controller.isActionPossible(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_4__.RecorderActions.CreateRecording));
        });
        it('should return correct value for start/stop action', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            assert.isTrue(controller.isActionPossible(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_4__.RecorderActions.StartRecording));
            controller.setRecordingStateForTesting({
                isPlaying: true,
                isPausedOnBreakpoint: false,
            });
            assert.isFalse(controller.isActionPossible(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_4__.RecorderActions.StartRecording));
        });
        it('should return true for replay action when on the recording page', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            controller.setCurrentPageForTesting(_recorder_js__WEBPACK_IMPORTED_MODULE_5__.RecorderController.Pages.RecordingPage);
            assert.isTrue(controller.isActionPossible(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_4__.RecorderActions.ReplayRecording));
        });
        it('should return false for replay action when not on the recording page', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            controller.setCurrentPageForTesting(_recorder_js__WEBPACK_IMPORTED_MODULE_5__.RecorderController.Pages.AllRecordingsPage);
            assert.isFalse(controller.isActionPossible(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_4__.RecorderActions.ReplayRecording));
            controller.setCurrentPageForTesting(_recorder_js__WEBPACK_IMPORTED_MODULE_5__.RecorderController.Pages.CreateRecordingPage);
            assert.isFalse(controller.isActionPossible(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_4__.RecorderActions.ReplayRecording));
            controller.setCurrentPageForTesting(_recorder_js__WEBPACK_IMPORTED_MODULE_5__.RecorderController.Pages.StartPage);
            assert.isFalse(controller.isActionPossible(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_4__.RecorderActions.ReplayRecording));
            controller.setRecordingStateForTesting({
                isPlaying: true,
                isPausedOnBreakpoint: false,
            });
            controller.setCurrentPageForTesting(_recorder_js__WEBPACK_IMPORTED_MODULE_5__.RecorderController.Pages.RecordingPage);
            assert.isFalse(controller.isActionPossible(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_4__.RecorderActions.ReplayRecording));
        });
        it('should true for toggle when on the recording page', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            controller.setCurrentPageForTesting(_recorder_js__WEBPACK_IMPORTED_MODULE_5__.RecorderController.Pages.RecordingPage);
            assert.isTrue(controller.isActionPossible(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_4__.RecorderActions.ToggleCodeView));
        });
        it('should false for toggle when on the recording page', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            controller.setCurrentPageForTesting(_recorder_js__WEBPACK_IMPORTED_MODULE_5__.RecorderController.Pages.AllRecordingsPage);
            assert.isFalse(controller.isActionPossible(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_4__.RecorderActions.ToggleCodeView));
            controller.setCurrentPageForTesting(_recorder_js__WEBPACK_IMPORTED_MODULE_5__.RecorderController.Pages.StartPage);
            assert.isFalse(controller.isActionPossible(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_4__.RecorderActions.ToggleCodeView));
            controller.setCurrentPageForTesting(_recorder_js__WEBPACK_IMPORTED_MODULE_5__.RecorderController.Pages.AllRecordingsPage);
            assert.isFalse(controller.isActionPossible(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_4__.RecorderActions.ToggleCodeView));
        });
    });
});


/***/ }),

/***/ "./src/panels/recorder/RecorderPanel.ts":
/*!**********************************************!*\
  !*** ./src/panels/recorder/RecorderPanel.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   RecorderPanel: () => (/* binding */ RecorderPanel)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _RecorderController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecorderController.js */ "./src/panels/recorder/RecorderController.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RecorderPanel_controller;



let recorderPanelInstance;
class RecorderPanel extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Panel.Panel {
    constructor() {
        super(RecorderPanel.panelName);
        _RecorderPanel_controller.set(this, void 0);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.panel('chrome-recorder').track({ resize: true })}`);
        __classPrivateFieldSet(this, _RecorderPanel_controller, new _RecorderController_js__WEBPACK_IMPORTED_MODULE_2__.RecorderController(), "f");
        this.contentElement.append(__classPrivateFieldGet(this, _RecorderPanel_controller, "f"));
        this.contentElement.style.minWidth = '400px';
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!recorderPanelInstance || forceNew) {
            recorderPanelInstance = new RecorderPanel();
        }
        return recorderPanelInstance;
    }
    wasShown() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Context.Context.instance().setFlavor(RecorderPanel, this);
        // Focus controller so shortcuts become active
        __classPrivateFieldGet(this, _RecorderPanel_controller, "f").focus();
    }
    willHide() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Context.Context.instance().setFlavor(RecorderPanel, null);
    }
    handleActions(actionId) {
        __classPrivateFieldGet(this, _RecorderPanel_controller, "f").handleActions(actionId);
    }
    isActionPossible(actionId) {
        return __classPrivateFieldGet(this, _RecorderPanel_controller, "f").isActionPossible(actionId);
    }
}
_RecorderPanel_controller = new WeakMap();
Object.defineProperty(RecorderPanel, "panelName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'chrome-recorder'
});
class ActionDelegate {
    handleAction(_context, actionId) {
        void (async () => {
            await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ViewManager.ViewManager.instance().showView(RecorderPanel.panelName);
            const view = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ViewManager.ViewManager.instance().view(RecorderPanel.panelName);
            if (view) {
                const widget = (await view.widget());
                widget.handleActions(actionId);
            }
        })();
        return true;
    }
}


/***/ }),

/***/ "./src/panels/recorder/recorder.ts":
/*!*****************************************!*\
  !*** ./src/panels/recorder/recorder.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecorderController: () => (/* reexport module object */ _RecorderController_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   RecorderEvents: () => (/* reexport module object */ _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   RecorderPanel: () => (/* reexport module object */ _RecorderPanel_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _RecorderController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecorderController.js */ "./src/panels/recorder/RecorderController.ts");
/* harmony import */ var _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecorderEvents.js */ "./src/panels/recorder/RecorderEvents.ts");
/* harmony import */ var _RecorderPanel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecorderPanel.js */ "./src/panels/recorder/RecorderPanel.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






/***/ })

}]);