"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_RecorderController_test_js"],{

/***/ "./panels/recorder/RecorderController.test.js":
/*!****************************************************!*\
  !*** ./panels/recorder/RecorderController.test.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components.js */ "./panels/recorder/components/components.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */ var _recorder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recorder.js */ "./panels/recorder/recorder.js");
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
        const controller = new _recorder_js__WEBPACK_IMPORTED_MODULE_4__.RecorderController.RecorderController();
        controller.setCurrentPageForTesting("RecordingPage" /* RecorderController.Pages.RecordingPage */);
        controller.setCurrentRecordingForTesting(recording);
        controller.connectedCallback();
        await coordinator.done();
        return controller;
    }
    describe('Navigation', () => {
        it('should return back to the previous page on recordingcancelled event', async () => {
            const previousPage = "AllRecordingsPage" /* RecorderController.Pages.AllRecordingsPage */;
            const controller = new _recorder_js__WEBPACK_IMPORTED_MODULE_4__.RecorderController.RecorderController();
            controller.setCurrentPageForTesting(previousPage);
            controller.setCurrentPageForTesting("CreateRecordingPage" /* RecorderController.Pages.CreateRecordingPage */);
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
            await dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddStep(recording.flow.steps[0], "after" /* Components.StepView.AddStepPosition.AFTER */));
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
            await dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddStep(sections[0], "after" /* Components.StepView.AddStepPosition.AFTER */));
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
            await dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddStep(recording.flow.steps[0], "before" /* Components.StepView.AddStepPosition.BEFORE */));
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
            await dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddStep(recording.flow.steps[0], "before" /* Components.StepView.AddStepPosition.BEFORE */));
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
            await controller.handleActions("chrome-recorder.create-recording" /* RecorderActions.CreateRecording */);
            assert.strictEqual(controller.getCurrentPageForTesting(), "CreateRecordingPage" /* RecorderController.Pages.CreateRecordingPage */);
        });
        it('should not execute action while recording', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            controller.setIsRecordingStateForTesting(true);
            await controller.handleActions("chrome-recorder.create-recording" /* RecorderActions.CreateRecording */);
            assert.strictEqual(controller.getCurrentPageForTesting(), "RecordingPage" /* RecorderController.Pages.RecordingPage */);
        });
        it('should not execute action while replaying', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            controller.setRecordingStateForTesting({
                isPlaying: true,
                isPausedOnBreakpoint: false,
            });
            await controller.handleActions("chrome-recorder.create-recording" /* RecorderActions.CreateRecording */);
            assert.strictEqual(controller.getCurrentPageForTesting(), "RecordingPage" /* RecorderController.Pages.RecordingPage */);
        });
    });
    describe('Action is possible', () => {
        it('should return true for create action when not replaying or recording', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            assert.isTrue(controller.isActionPossible("chrome-recorder.create-recording" /* RecorderActions.CreateRecording */));
        });
        it('should return false for create action when recording', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            controller.setRecordingStateForTesting({
                isPlaying: true,
                isPausedOnBreakpoint: false,
            });
            assert.isFalse(controller.isActionPossible("chrome-recorder.create-recording" /* RecorderActions.CreateRecording */));
        });
        it('should return false for create action when replaying', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            controller.setIsRecordingStateForTesting(true);
            assert.isFalse(controller.isActionPossible("chrome-recorder.create-recording" /* RecorderActions.CreateRecording */));
        });
        it('should return correct value for start/stop action', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            assert.isTrue(controller.isActionPossible("chrome-recorder.start-recording" /* RecorderActions.StartRecording */));
            controller.setRecordingStateForTesting({
                isPlaying: true,
                isPausedOnBreakpoint: false,
            });
            assert.isFalse(controller.isActionPossible("chrome-recorder.start-recording" /* RecorderActions.StartRecording */));
        });
        it('should return true for replay action when on the recording page', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            controller.setCurrentPageForTesting("RecordingPage" /* RecorderController.Pages.RecordingPage */);
            assert.isTrue(controller.isActionPossible("chrome-recorder.replay-recording" /* RecorderActions.ReplayRecording */));
        });
        it('should return false for replay action when not on the recording page', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            controller.setCurrentPageForTesting("AllRecordingsPage" /* RecorderController.Pages.AllRecordingsPage */);
            assert.isFalse(controller.isActionPossible("chrome-recorder.replay-recording" /* RecorderActions.ReplayRecording */));
            controller.setCurrentPageForTesting("CreateRecordingPage" /* RecorderController.Pages.CreateRecordingPage */);
            assert.isFalse(controller.isActionPossible("chrome-recorder.replay-recording" /* RecorderActions.ReplayRecording */));
            controller.setCurrentPageForTesting("StartPage" /* RecorderController.Pages.StartPage */);
            assert.isFalse(controller.isActionPossible("chrome-recorder.replay-recording" /* RecorderActions.ReplayRecording */));
            controller.setRecordingStateForTesting({
                isPlaying: true,
                isPausedOnBreakpoint: false,
            });
            controller.setCurrentPageForTesting("RecordingPage" /* RecorderController.Pages.RecordingPage */);
            assert.isFalse(controller.isActionPossible("chrome-recorder.replay-recording" /* RecorderActions.ReplayRecording */));
        });
        it('should true for toggle when on the recording page', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            controller.setCurrentPageForTesting("RecordingPage" /* RecorderController.Pages.RecordingPage */);
            assert.isTrue(controller.isActionPossible("chrome-recorder.toggle-code-view" /* RecorderActions.ToggleCodeView */));
        });
        it('should false for toggle when on the recording page', async () => {
            const recording = makeRecording();
            const controller = await setupController(recording);
            controller.setCurrentPageForTesting("AllRecordingsPage" /* RecorderController.Pages.AllRecordingsPage */);
            assert.isFalse(controller.isActionPossible("chrome-recorder.toggle-code-view" /* RecorderActions.ToggleCodeView */));
            controller.setCurrentPageForTesting("StartPage" /* RecorderController.Pages.StartPage */);
            assert.isFalse(controller.isActionPossible("chrome-recorder.toggle-code-view" /* RecorderActions.ToggleCodeView */));
            controller.setCurrentPageForTesting("AllRecordingsPage" /* RecorderController.Pages.AllRecordingsPage */);
            assert.isFalse(controller.isActionPossible("chrome-recorder.toggle-code-view" /* RecorderActions.ToggleCodeView */));
        });
    });
});
//# sourceMappingURL=RecorderController.test.js.map

/***/ }),

/***/ "./panels/recorder/RecorderPanel.js":
/*!******************************************!*\
  !*** ./panels/recorder/RecorderPanel.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   RecorderPanel: () => (/* binding */ RecorderPanel)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _RecorderController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecorderController.js */ "./panels/recorder/RecorderController.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



let recorderPanelInstance;
class RecorderPanel extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Panel.Panel {
    static panelName = 'chrome-recorder';
    #controller;
    constructor() {
        super(RecorderPanel.panelName);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.panel('chrome-recorder').track({ resize: true })}`);
        this.#controller = new _RecorderController_js__WEBPACK_IMPORTED_MODULE_2__.RecorderController();
        this.contentElement.append(this.#controller);
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
        this.#controller.focus();
    }
    willHide() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Context.Context.instance().setFlavor(RecorderPanel, null);
    }
    handleActions(actionId) {
        this.#controller.handleActions(actionId);
    }
    isActionPossible(actionId) {
        return this.#controller.isActionPossible(actionId);
    }
}
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
//# sourceMappingURL=RecorderPanel.js.map

/***/ }),

/***/ "./panels/recorder/recorder.js":
/*!*************************************!*\
  !*** ./panels/recorder/recorder.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecorderController: () => (/* reexport module object */ _RecorderController_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   RecorderEvents: () => (/* reexport module object */ _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   RecorderPanel: () => (/* reexport module object */ _RecorderPanel_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _RecorderController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecorderController.js */ "./panels/recorder/RecorderController.js");
/* harmony import */ var _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecorderEvents.js */ "./panels/recorder/RecorderEvents.js");
/* harmony import */ var _RecorderPanel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecorderPanel.js */ "./panels/recorder/RecorderPanel.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




//# sourceMappingURL=recorder.js.map

/***/ })

}]);