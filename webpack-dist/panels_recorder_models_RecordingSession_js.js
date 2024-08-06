"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_models_RecordingSession_js"],{

/***/ "./panels/recorder/models/RecordingSession.js":
/*!****************************************************!*\
  !*** ./panels/recorder/models/RecordingSession.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecordingSession: () => (/* binding */ RecordingSession)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _util_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/util.js */ "./panels/recorder/util/util.js");
/* harmony import */ var _Schema_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Schema.js */ "./panels/recorder/models/Schema.js");
/* harmony import */ var _SchemaUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SchemaUtils.js */ "./panels/recorder/models/SchemaUtils.js");
/* harmony import */ var _SDKUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SDKUtils.js */ "./panels/recorder/models/SDKUtils.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const formatAsJSLiteral = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.formatAsJSLiteral;
const unrelatedNavigationTypes = new Set([
    'typed',
    'address_bar',
    'auto_bookmark',
    'auto_subframe',
    'generated',
    'auto_toplevel',
    'reload',
    'keyword',
    'keyword_generated',
]);
const createShortcuts = (descriptors) => {
    const shortcuts = [];
    for (const shortcut of descriptors) {
        for (const key of shortcut) {
            const shortcutBase = { meta: false, ctrl: false, shift: false, alt: false, keyCode: -1 };
            const { keyCode, modifiers } = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardShortcut.KeyboardShortcut.keyCodeAndModifiersFromKey(key);
            shortcutBase.keyCode = keyCode;
            const modifiersMap = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardShortcut.Modifiers;
            shortcutBase.ctrl = Boolean(modifiers & modifiersMap.Ctrl);
            shortcutBase.meta = Boolean(modifiers & modifiersMap.Meta);
            shortcutBase.shift = Boolean(modifiers & modifiersMap.Shift);
            shortcutBase.shift = Boolean(modifiers & modifiersMap.Alt);
            if (shortcutBase.keyCode !== -1) {
                shortcuts.push(shortcutBase);
            }
        }
    }
    return shortcuts;
};
const evaluateInAllTargets = async (worldName, targets, expression) => {
    await Promise.all(targets.map(target => (0,_SDKUtils_js__WEBPACK_IMPORTED_MODULE_7__.evaluateInAllFrames)(worldName, target, expression)));
};
const RecorderBinding = Object.freeze({
    addStep: 'addStep',
    stopShortcut: 'stopShortcut',
});
class RecordingSession extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    #target;
    #pageAgent;
    #targetAgent;
    #networkManager;
    #resourceTreeModel;
    #targets = new Map();
    #lastNavigationEntryIdByTarget = new Map();
    #lastNavigationHistoryByTarget = new Map();
    #scriptIdentifiers = new Map();
    #runtimeEventDescriptors = new Map();
    #childTargetEventDescriptors = new Map();
    #mutex = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex();
    #userFlow;
    #stepsPendingNavigationByTargetId = new Map();
    #started = false;
    #selectorTypesToRecord = [];
    constructor(target, opts) {
        super();
        this.#target = target;
        this.#pageAgent = target.pageAgent();
        this.#targetAgent = target.targetAgent();
        this.#networkManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.MultitargetNetworkManager.instance();
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel);
        if (!resourceTreeModel) {
            throw new Error('ResourceTreeModel is missing for the target: ' + target.id());
        }
        this.#resourceTreeModel = resourceTreeModel;
        this.#target = target;
        this.#userFlow = { title: opts.title, selectorAttribute: opts.selectorAttribute, steps: [] };
        this.#selectorTypesToRecord = opts.selectorTypesToRecord;
    }
    /**
     * @returns - A deep copy of the session's current user flow.
     */
    cloneUserFlow() {
        return structuredClone(this.#userFlow);
    }
    /**
     * Overwrites the session's current user flow with the given one.
     *
     * This method will not dispatch an `recordingupdated` event.
     */
    overwriteUserFlow(flow) {
        this.#userFlow = structuredClone(flow);
    }
    async start() {
        if (this.#started) {
            throw new Error('The session has started');
        }
        this.#started = true;
        this.#networkManager.addEventListener("ConditionsChanged" /* SDK.NetworkManager.MultitargetNetworkManager.Events.ConditionsChanged */, this.#appendCurrentNetworkStep, this);
        await this.#appendInitialSteps();
        // Focus the target so that events can be captured without additional actions.
        await this.#pageAgent.invoke_bringToFront();
        await this.#setUpTarget(this.#target);
    }
    async stop() {
        // Wait for any remaining updates.
        await this.#dispatchRecordingUpdate();
        // Create a deadlock for the remaining events.
        void this.#mutex.acquire();
        await Promise.all([...this.#targets.values()].map(this.#tearDownTarget));
        this.#networkManager.removeEventListener("ConditionsChanged" /* SDK.NetworkManager.MultitargetNetworkManager.Events.ConditionsChanged */, this.#appendCurrentNetworkStep, this);
    }
    async #appendInitialSteps() {
        // Quick validation before doing anything.
        const mainFrame = this.#resourceTreeModel.mainFrame;
        if (!mainFrame) {
            throw new Error('Could not find mainFrame.');
        }
        // Network step.
        if (this.#networkManager.networkConditions() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.NoThrottlingConditions) {
            this.#appendCurrentNetworkStep();
        }
        // Viewport step.
        const { cssLayoutViewport } = await this.#target.pageAgent().invoke_getLayoutMetrics();
        this.#appendStep((0,_SchemaUtils_js__WEBPACK_IMPORTED_MODULE_6__.createViewportStep)(cssLayoutViewport));
        // Navigation step.
        const history = await this.#resourceTreeModel.navigationHistory();
        if (history) {
            const entry = history.entries[history.currentIndex];
            this.#lastNavigationEntryIdByTarget.set(this.#target.id(), entry.id);
            this.#lastNavigationHistoryByTarget.set(this.#target.id(), history.entries.map(entry => entry.id));
            this.#userFlow.steps.push({
                type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.StepType.Navigate,
                url: entry.url,
                assertedEvents: [{ type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation, url: entry.url, title: entry.title }],
            });
        }
        else {
            this.#userFlow.steps.push({
                type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.StepType.Navigate,
                url: mainFrame.url,
                assertedEvents: [
                    { type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation, url: mainFrame.url, title: await this.#getDocumentTitle(this.#target) },
                ],
            });
        }
        // Commit
        void this.#dispatchRecordingUpdate();
    }
    async #getDocumentTitle(target) {
        const response = await target.runtimeAgent().invoke_evaluate({ expression: 'document.title' });
        return response.result?.value || '';
    }
    #appendCurrentNetworkStep() {
        const networkConditions = this.#networkManager.networkConditions();
        this.#appendStep((0,_SchemaUtils_js__WEBPACK_IMPORTED_MODULE_6__.createEmulateNetworkConditionsStep)(networkConditions));
    }
    #updateTimeout;
    #updateListeners = [];
    #dispatchRecordingUpdate() {
        if (this.#updateTimeout) {
            clearTimeout(this.#updateTimeout);
        }
        this.#updateTimeout = setTimeout(() => {
            // Making a copy to prevent mutations of this.userFlow by event consumers.
            this.dispatchEventToListeners("recordingupdated" /* Events.RecordingUpdated */, structuredClone(this.#userFlow));
            this.#updateTimeout = undefined;
            for (const resolve of this.#updateListeners) {
                resolve();
            }
            this.#updateListeners.length = 0;
        }, 100);
        return new Promise(resolve => {
            this.#updateListeners.push(resolve);
        });
    }
    get #previousStep() {
        return this.#userFlow.steps.slice(-1)[0];
    }
    /**
     * Contains keys that are pressed related to a change step.
     */
    #pressedChangeKeys = new Set();
    /**
     * Shift-reduces a given step into the user flow.
     */
    #appendStep(step) {
        switch (step.type) {
            case 'doubleClick': {
                for (let j = this.#userFlow.steps.length - 1; j > 0; j--) {
                    const previousStep = this.#userFlow.steps[j];
                    if (previousStep.type === 'click') {
                        step.selectors = previousStep.selectors;
                        this.#userFlow.steps.splice(j, 1);
                        break;
                    }
                }
                break;
            }
            case 'change': {
                const previousStep = this.#previousStep;
                if (!previousStep) {
                    break;
                }
                switch (previousStep.type) {
                    // Merging changes.
                    case 'change':
                        if (!(0,_SchemaUtils_js__WEBPACK_IMPORTED_MODULE_6__.areSelectorsEqual)(step, previousStep)) {
                            break;
                        }
                        this.#userFlow.steps[this.#userFlow.steps.length - 1] = step;
                        void this.#dispatchRecordingUpdate();
                        return;
                    // Ignore key downs resulting in inputs.
                    case 'keyDown':
                        this.#pressedChangeKeys.add(previousStep.key);
                        this.#userFlow.steps.pop();
                        this.#appendStep(step);
                        return;
                }
                break;
            }
            case 'keyDown': {
                // This can happen if there are successive keydown's from a repeated key
                // for example.
                if (this.#pressedChangeKeys.has(step.key)) {
                    return;
                }
                break;
            }
            case 'keyUp': {
                // Ignore key ups coming from change inputs.
                if (this.#pressedChangeKeys.has(step.key)) {
                    this.#pressedChangeKeys.delete(step.key);
                    return;
                }
                break;
            }
        }
        this.#userFlow.steps.push(step);
        void this.#dispatchRecordingUpdate();
    }
    #handleBeforeUnload(context, sdkTarget) {
        const lastStep = this.#userFlow.steps[this.#userFlow.steps.length - 1];
        if (lastStep && !lastStep.assertedEvents?.find(event => event.type === _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation)) {
            const target = context.target || 'main';
            const frameSelector = (context.frame || []).join(',');
            const lastStepTarget = lastStep.target || 'main';
            const lastStepFrameSelector = (('frame' in lastStep ? lastStep.frame : []) || []).join(',');
            if (target === lastStepTarget && frameSelector === lastStepFrameSelector) {
                lastStep.assertedEvents = [{ type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation }];
                this.#stepsPendingNavigationByTargetId.set(sdkTarget.id(), lastStep);
                void this.#dispatchRecordingUpdate();
            }
        }
    }
    #replaceUnloadWithNavigation(target, event) {
        const stepPendingNavigation = this.#stepsPendingNavigationByTargetId.get(target.id());
        if (!stepPendingNavigation) {
            return;
        }
        const step = stepPendingNavigation;
        if (!step.assertedEvents) {
            return;
        }
        const navigationEvent = step.assertedEvents.find(event => event.type === _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation);
        if (!navigationEvent || navigationEvent.url) {
            return;
        }
        navigationEvent.url = event.url;
        navigationEvent.title = event.title;
        void this.#dispatchRecordingUpdate();
    }
    #handleStopShortcutBinding(event) {
        const shortcutLength = Number(event.data.payload);
        // Look for one less step as the last one gets consumed before creating a step
        for (let index = 0; index < shortcutLength - 1; index++) {
            this.#userFlow.steps.pop();
        }
        this.dispatchEventToListeners("recordingstopped" /* Events.RecordingStopped */, structuredClone(this.#userFlow));
    }
    #receiveBindingCalled(target, event) {
        switch (event.data.name) {
            case RecorderBinding.stopShortcut:
                this.#handleStopShortcutBinding(event);
                return;
            case RecorderBinding.addStep:
                this.#handleAddStepBinding(target, event);
                return;
            default:
                return;
        }
    }
    #handleAddStepBinding(target, event) {
        const executionContextId = event.data.executionContextId;
        let frameId;
        const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
        if (runtimeModel) {
            for (const context of runtimeModel.executionContexts()) {
                if (context.id === executionContextId) {
                    frameId = context.frameId;
                    break;
                }
            }
        }
        if (!frameId) {
            throw new Error('No execution context found for the binding call + ' + JSON.stringify(event.data));
        }
        const step = JSON.parse(event.data.payload);
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel);
        const frame = resourceTreeModel.frameForId(frameId);
        if (!frame) {
            throw new Error('Could not find frame.');
        }
        const context = (0,_SDKUtils_js__WEBPACK_IMPORTED_MODULE_7__.getTargetFrameContext)(target, frame);
        if (step.type === 'beforeUnload') {
            this.#handleBeforeUnload(context, target);
            return;
        }
        // TODO: type-safe parsing from client steps to internal step format.
        switch (step.type) {
            case 'change': {
                this.#appendStep({
                    type: 'change',
                    value: step.value,
                    selectors: step.selectors,
                    frame: context.frame.length ? context.frame : undefined,
                    target: context.target,
                });
                break;
            }
            case 'doubleClick': {
                this.#appendStep({
                    type: 'doubleClick',
                    target: context.target,
                    selectors: step.selectors,
                    offsetY: step.offsetY,
                    offsetX: step.offsetX,
                    frame: context.frame.length ? context.frame : undefined,
                    deviceType: step.deviceType,
                    button: step.button,
                });
                break;
            }
            case 'click': {
                this.#appendStep({
                    type: 'click',
                    target: context.target,
                    selectors: step.selectors,
                    offsetY: step.offsetY,
                    offsetX: step.offsetX,
                    frame: context.frame.length ? context.frame : undefined,
                    duration: step.duration,
                    deviceType: step.deviceType,
                    button: step.button,
                });
                break;
            }
            case 'keyUp': {
                this.#appendStep({
                    type: 'keyUp',
                    key: step.key,
                    frame: context.frame.length ? context.frame : undefined,
                    target: context.target,
                });
                break;
            }
            case 'keyDown': {
                this.#appendStep({
                    type: 'keyDown',
                    frame: context.frame.length ? context.frame : undefined,
                    target: context.target,
                    key: step.key,
                });
                break;
            }
            default:
                throw new Error('Unhandled client event');
        }
    }
    #getStopShortcuts() {
        const descriptors = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ShortcutRegistry.ShortcutRegistry.instance()
            .shortcutsForAction('chrome-recorder.start-recording')
            .map(key => key.descriptors.map(press => press.key));
        return createShortcuts(descriptors);
    }
    static get #allowUntrustedEvents() {
        try {
            // This setting is set during the test to work around the fact that Puppeteer cannot
            // send trusted change and input events.
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().settingForTest('untrusted-recorder-events');
            return true;
        }
        catch {
        }
        return false;
    }
    #setUpTarget = async (target) => {
        if (target.type() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame) {
            return;
        }
        this.#targets.set(target.id(), target);
        const a11yModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.AccessibilityModel.AccessibilityModel);
        _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(a11yModel);
        await a11yModel.resumeModel();
        await this.#addBindings(target);
        await this.#injectApplicationScript(target);
        const childTargetManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager);
        _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(childTargetManager);
        this.#childTargetEventDescriptors.set(target, [
            childTargetManager.addEventListener("TargetCreated" /* SDK.ChildTargetManager.Events.TargetCreated */, this.#receiveTargetCreated.bind(this, target)),
            childTargetManager.addEventListener("TargetDestroyed" /* SDK.ChildTargetManager.Events.TargetDestroyed */, this.#receiveTargetClosed.bind(this, target)),
            childTargetManager.addEventListener("TargetInfoChanged" /* SDK.ChildTargetManager.Events.TargetInfoChanged */, this.#receiveTargetInfoChanged.bind(this, target)),
        ]);
        await Promise.all(childTargetManager.childTargets().map(this.#setUpTarget));
    };
    #tearDownTarget = async (target) => {
        const descriptors = this.#childTargetEventDescriptors.get(target);
        if (descriptors) {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(descriptors);
        }
        await this.#injectCleanUpScript(target);
        await this.#removeBindings(target);
    };
    async #addBindings(target) {
        const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
        _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(runtimeModel);
        this.#runtimeEventDescriptors.set(target, [runtimeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.Events.BindingCalled, this.#receiveBindingCalled.bind(this, target))]);
        await Promise.all(Object.values(RecorderBinding)
            .map(name => runtimeModel.addBinding({ name, executionContextName: _util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME })));
    }
    async #removeBindings(target) {
        await Promise.all(Object.values(RecorderBinding).map(name => target.runtimeAgent().invoke_removeBinding({ name })));
        const descriptors = this.#runtimeEventDescriptors.get(target);
        if (descriptors) {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(descriptors);
        }
    }
    async #injectApplicationScript(target) {
        const injectedScript = await _util_util_js__WEBPACK_IMPORTED_MODULE_4__.InjectedScript.get();
        const script = `
      ${injectedScript};DevToolsRecorder.startRecording({getAccessibleName, getAccessibleRole}, {
        debug: ${_util_util_js__WEBPACK_IMPORTED_MODULE_4__.isDebugBuild},
        allowUntrustedEvents: ${RecordingSession.#allowUntrustedEvents},
        selectorTypesToRecord: ${JSON.stringify(this.#selectorTypesToRecord)},
        selectorAttribute: ${this.#userFlow.selectorAttribute ? formatAsJSLiteral(this.#userFlow.selectorAttribute) : undefined},
        stopShortcuts: ${JSON.stringify(this.#getStopShortcuts())},
      });
    `;
        const [{ identifier }] = await Promise.all([
            target.pageAgent().invoke_addScriptToEvaluateOnNewDocument({ source: script, worldName: _util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME, includeCommandLineAPI: true }),
            (0,_SDKUtils_js__WEBPACK_IMPORTED_MODULE_7__.evaluateInAllFrames)(_util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME, target, script),
        ]);
        this.#scriptIdentifiers.set(target.id(), identifier);
    }
    async #injectCleanUpScript(target) {
        const scriptId = this.#scriptIdentifiers.get(target.id());
        if (!scriptId) {
            return;
        }
        await target.pageAgent().invoke_removeScriptToEvaluateOnNewDocument({ identifier: scriptId });
        await evaluateInAllTargets(_util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME, [...this.#targets.values()], 'DevToolsRecorder.stopRecording()');
    }
    #receiveTargetCreated(target, event) {
        void this.#handleEvent({ type: 'targetCreated', event, target });
    }
    #receiveTargetClosed(eventTarget, event) {
        // TODO(alexrudenko): target here appears to be the parent target of the target that is closed.
        // Therefore, we need to find the real target via the targets map.
        const childTarget = this.#targets.get(event.data);
        if (childTarget) {
            void this.#handleEvent({ type: 'targetClosed', event, target: childTarget });
        }
    }
    #receiveTargetInfoChanged(eventTarget, event) {
        const target = this.#targets.get(event.data.targetId) || eventTarget;
        void this.#handleEvent({ type: 'targetInfoChanged', event, target });
    }
    #handleEvent(event) {
        return this.#mutex.run(async () => {
            try {
                if (_util_util_js__WEBPACK_IMPORTED_MODULE_4__.isDebugBuild) {
                    console.time(`Processing ${JSON.stringify(event)}`);
                }
                switch (event.type) {
                    case 'targetClosed':
                        await this.#handleTargetClosed(event);
                        break;
                    case 'targetCreated':
                        await this.#handleTargetCreated(event);
                        break;
                    case 'targetInfoChanged':
                        await this.#handleTargetInfoChanged(event);
                        break;
                }
                if (_util_util_js__WEBPACK_IMPORTED_MODULE_4__.isDebugBuild) {
                    console.timeEnd(`Processing ${JSON.stringify(event)}`);
                }
            }
            catch (err) {
                console.error('Error happened while processing recording events: ', err.message, err.stack);
            }
        });
    }
    async #handleTargetCreated(event) {
        if (event.event.data.type !== 'page' && event.event.data.type !== 'iframe') {
            return;
        }
        await this.#targetAgent.invoke_attachToTarget({ targetId: event.event.data.targetId, flatten: true });
        const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().targets().find(t => t.id() === event.event.data.targetId);
        if (!target) {
            throw new Error('Could not find target.');
        }
        // Generally an new target implies all other targets are not waiting for something special in their event buffers, so we flush them here.
        await this.#setUpTarget(target);
        // Emitted for e2e tests.
        window.dispatchEvent(new Event('recorderAttachedToTarget'));
    }
    async #handleTargetClosed(event) {
        const stepPendingNavigation = this.#stepsPendingNavigationByTargetId.get(event.target.id());
        if (stepPendingNavigation) {
            delete stepPendingNavigation.assertedEvents;
            this.#stepsPendingNavigationByTargetId.delete(event.target.id());
        }
        // TODO(alexrudenko): figure out how this works with sections
        // TODO(alexrudenko): Ignore close events as they only matter for popups but cause more trouble than benefits
        // const closeStep: CloseStep = {
        //   type: 'close',
        //   target: getTargetName(event.target),
        // };
        // this.appendStep(closeStep);
    }
    async #handlePageNavigation(resourceTreeModel, target) {
        const history = await resourceTreeModel.navigationHistory();
        if (!history) {
            return false;
        }
        const entry = history.entries[history.currentIndex];
        const prevId = this.#lastNavigationEntryIdByTarget.get(target.id());
        if (prevId === entry.id) {
            return true;
        }
        this.#lastNavigationEntryIdByTarget.set(target.id(), entry.id);
        const lastHistory = this.#lastNavigationHistoryByTarget.get(target.id()) || [];
        this.#lastNavigationHistoryByTarget.set(target.id(), history.entries.map(entry => entry.id));
        if (unrelatedNavigationTypes.has(entry.transitionType) || lastHistory.includes(entry.id)) {
            const stepPendingNavigation = this.#stepsPendingNavigationByTargetId.get(target.id());
            if (stepPendingNavigation) {
                delete stepPendingNavigation.assertedEvents;
                this.#stepsPendingNavigationByTargetId.delete(target.id());
            }
            this.#appendStep({
                type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.StepType.Navigate,
                url: entry.url,
                assertedEvents: [{ type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation, url: entry.url, title: entry.title }],
            });
        }
        else {
            this.#replaceUnloadWithNavigation(target, { type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation, url: entry.url, title: entry.title });
        }
        return true;
    }
    async #handleTargetInfoChanged(event) {
        if (event.event.data.type !== 'page' && event.event.data.type !== 'iframe') {
            return;
        }
        const target = event.target;
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel);
        if (!resourceTreeModel) {
            throw new Error('ResourceTreeModel is missing in handleNavigation');
        }
        if (event.event.data.type === 'iframe') {
            this.#replaceUnloadWithNavigation(target, { type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation, url: event.event.data.url, title: await this.#getDocumentTitle(target) });
        }
        else if (event.event.data.type === 'page') {
            if (await this.#handlePageNavigation(resourceTreeModel, target)) {
                return;
            }
            // Needed for #getDocumentTitle to return something meaningful.
            await this.#waitForDOMContentLoadedWithTimeout(resourceTreeModel, 500);
            this.#replaceUnloadWithNavigation(target, { type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation, url: event.event.data.url, title: await this.#getDocumentTitle(target) });
        }
    }
    async #waitForDOMContentLoadedWithTimeout(resourceTreeModel, timeout) {
        let resolver = () => Promise.resolve();
        const contentLoadedPromise = new Promise(resolve => {
            resolver = resolve;
        });
        const onDomContentLoaded = () => {
            resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.DOMContentLoaded, onDomContentLoaded);
            resolver();
        };
        resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.DOMContentLoaded, onDomContentLoaded);
        await Promise.any([
            contentLoadedPromise,
            new Promise(resolve => setTimeout(() => {
                resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.DOMContentLoaded, onDomContentLoaded);
                resolve();
            }, timeout)),
        ]);
    }
}
//# sourceMappingURL=RecordingSession.js.map

/***/ }),

/***/ "./panels/recorder/models/SDKUtils.js":
/*!********************************************!*\
  !*** ./panels/recorder/models/SDKUtils.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateInAllFrames: () => (/* binding */ evaluateInAllFrames),
/* harmony export */   findFrameIdByExecutionContext: () => (/* binding */ findFrameIdByExecutionContext),
/* harmony export */   findTargetByExecutionContext: () => (/* binding */ findTargetByExecutionContext),
/* harmony export */   getTargetFrameContext: () => (/* binding */ getTargetFrameContext),
/* harmony export */   getTargetName: () => (/* binding */ getTargetName),
/* harmony export */   isFrameTargetInfo: () => (/* binding */ isFrameTargetInfo)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getTargetName(target) {
    if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().primaryPageTarget() === target) {
        return 'main';
    }
    return target.id() === 'main' ? 'main' : target.inspectedURL();
}
/**
 * Returns the context for an SDK target and frame.
 * The frame is identified by the path in the resource tree model.
 * And the target is identified by `getTargetName`.
 */
function getTargetFrameContext(target, frame) {
    const path = [];
    while (frame) {
        const parentFrame = frame.sameTargetParentFrame();
        if (!parentFrame) {
            break;
        }
        const childFrames = parentFrame.childFrames;
        const index = childFrames.indexOf(frame);
        path.unshift(index);
        frame = parentFrame;
    }
    return { target: getTargetName(target), frame: path };
}
async function evaluateInAllFrames(worldName, target, expression) {
    const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.RuntimeModel);
    const executionContexts = runtimeModel.executionContexts();
    const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel);
    for (const frame of resourceTreeModel.frames()) {
        const executionContext = executionContexts.find(context => context.frameId === frame.id);
        if (!executionContext) {
            continue;
        }
        // Note: it would return previously created world if it exists for the frame.
        const { executionContextId } = await target.pageAgent().invoke_createIsolatedWorld({ frameId: frame.id, worldName });
        await target.runtimeAgent().invoke_evaluate({
            expression,
            includeCommandLineAPI: true,
            contextId: executionContextId,
        });
    }
}
function findTargetByExecutionContext(targets, executionContextId) {
    for (const target of targets) {
        const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.RuntimeModel);
        if (!runtimeModel) {
            continue;
        }
        for (const context of runtimeModel.executionContexts()) {
            if (context.id === executionContextId) {
                return target;
            }
        }
    }
    return;
}
function findFrameIdByExecutionContext(targets, executionContextId) {
    for (const target of targets) {
        const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.RuntimeModel);
        if (!runtimeModel) {
            continue;
        }
        for (const context of runtimeModel.executionContexts()) {
            if (context.id === executionContextId && context.frameId !== undefined) {
                return context.frameId;
            }
        }
    }
    return;
}
const isFrameTargetInfo = (target) => {
    return target.type === 'page' || target.type === 'iframe';
};
//# sourceMappingURL=SDKUtils.js.map

/***/ }),

/***/ "./panels/recorder/models/Schema.js":
/*!******************************************!*\
  !*** ./panels/recorder/models/Schema.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssertedEventType: () => (/* reexport safe */ _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.AssertedEventType),
/* harmony export */   SelectorType: () => (/* reexport safe */ _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.SelectorType),
/* harmony export */   StepType: () => (/* reexport safe */ _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.StepType)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=Schema.js.map

/***/ }),

/***/ "./panels/recorder/models/SchemaUtils.js":
/*!***********************************************!*\
  !*** ./panels/recorder/models/SchemaUtils.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areSelectorsEqual: () => (/* binding */ areSelectorsEqual),
/* harmony export */   createEmulateNetworkConditionsStep: () => (/* binding */ createEmulateNetworkConditionsStep),
/* harmony export */   createViewportStep: () => (/* binding */ createViewportStep),
/* harmony export */   maxTimeout: () => (/* binding */ maxTimeout),
/* harmony export */   minTimeout: () => (/* binding */ minTimeout),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseStep: () => (/* binding */ parseStep)
/* harmony export */ });
/* harmony import */ var _Schema_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Schema.js */ "./panels/recorder/models/Schema.js");
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function createViewportStep(viewport) {
    return {
        type: _Schema_js__WEBPACK_IMPORTED_MODULE_0__.StepType.SetViewport,
        width: viewport.clientWidth,
        height: viewport.clientHeight,
        // TODO read real parameters here
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: false,
    };
}
function createEmulateNetworkConditionsStep(conditions) {
    return { type: _Schema_js__WEBPACK_IMPORTED_MODULE_0__.StepType.EmulateNetworkConditions, ...conditions };
}
function areSelectorsEqual(stepA, stepB) {
    if ('selectors' in stepA && 'selectors' in stepB) {
        return JSON.stringify(stepA.selectors) === JSON.stringify(stepB.selectors);
    }
    return !('selectors' in stepA) && !('selectors' in stepB);
}
const minTimeout = 1;
const maxTimeout = 30000;
const parse = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_1__.parse;
const parseStep = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_1__.parseStep;
//# sourceMappingURL=SchemaUtils.js.map

/***/ }),

/***/ "./panels/recorder/util/SharedObject.js":
/*!**********************************************!*\
  !*** ./panels/recorder/util/SharedObject.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedObject: () => (/* binding */ SharedObject)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * SharedObject is similar to a C++ shared pointer, i.e. a reference counted
 * object.
 *
 * A object is "created" whenever there are no acquirers and it's then acquired.
 * Subsequent acquirers use the same object. Only until all acquirers release
 * will the object be "destroyed".
 *
 * Using an object after it's destroyed is undefined behavior.
 *
 * The definition of "created" and "destroyed" is dependent on the functions
 * passed into the constructor.
 */
class SharedObject {
    #mutex = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex();
    #counter = 0;
    #value;
    #create;
    #destroy;
    constructor(create, destroy) {
        this.#create = create;
        this.#destroy = destroy;
    }
    /**
     * @returns The shared object and a release function. If the release function
     * throws, you may attempt to call it again (however this probably implies
     * your destroy function is bad).
     */
    async acquire() {
        await this.#mutex.run(async () => {
            if (this.#counter === 0) {
                this.#value = await this.#create();
            }
            ++this.#counter;
        });
        return [this.#value, this.#release.bind(this, { released: false })];
    }
    /**
     * Automatically perform an acquire and release.
     *
     * **If the release fails**, then this will throw and the object will be
     * permanently alive. This is expected to be a fatal error and you should
     * debug your destroy function.
     */
    async run(action) {
        const [value, release] = await this.acquire();
        try {
            const result = await action(value);
            return result;
        }
        finally {
            await release();
        }
    }
    async #release(state) {
        if (state.released) {
            throw new Error('Attempted to release object multiple times.');
        }
        try {
            state.released = true;
            await this.#mutex.run(async () => {
                if (this.#counter === 1) {
                    await this.#destroy(this.#value);
                    this.#value = undefined;
                }
                --this.#counter;
            });
        }
        catch (error) {
            state.released = false;
            throw error;
        }
    }
}
//# sourceMappingURL=SharedObject.js.map

/***/ }),

/***/ "./panels/recorder/util/util.js":
/*!**************************************!*\
  !*** ./panels/recorder/util/util.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEVTOOLS_RECORDER_WORLD_NAME: () => (/* binding */ DEVTOOLS_RECORDER_WORLD_NAME),
/* harmony export */   InjectedScript: () => (/* binding */ InjectedScript),
/* harmony export */   SharedObject: () => (/* reexport module object */ _SharedObject_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   isDebugBuild: () => (/* binding */ isDebugBuild)
/* harmony export */ });
/* harmony import */ var _SharedObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedObject.js */ "./panels/recorder/util/SharedObject.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Setting this to `true` enables extra logging for the injected scripts.
const isDebugBuild = false;
const DEVTOOLS_RECORDER_WORLD_NAME = 'devtools_recorder';
class InjectedScript {
    static #injectedScript;
    static async get() {
        if (!this.#injectedScript) {
            this.#injectedScript = (await fetch(new URL(/* asset import */ __webpack_require__(/*! ../injected/injected.generated.js */ "./panels/recorder/injected/injected.generated.js?ecbe"), __webpack_require__.b)))
                .text();
        }
        return this.#injectedScript;
    }
}

//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./third_party/puppeteer-replay/puppeteer-replay.js":
/*!**********************************************************!*\
  !*** ./third_party/puppeteer-replay/puppeteer-replay.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssertedEventType: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.AssertedEventType),
/* harmony export */   JSONStringifyExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.JSONStringifyExtension),
/* harmony export */   LighthouseRunnerExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.LighthouseRunnerExtension),
/* harmony export */   LighthouseStringifyExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.LighthouseStringifyExtension),
/* harmony export */   PuppeteerReplayStringifyExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerReplayStringifyExtension),
/* harmony export */   PuppeteerRunnerExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerRunnerExtension),
/* harmony export */   PuppeteerRunnerOwningBrowserExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerRunnerOwningBrowserExtension),
/* harmony export */   PuppeteerStringifyExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerStringifyExtension),
/* harmony export */   Runner: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.Runner),
/* harmony export */   RunnerExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.RunnerExtension),
/* harmony export */   Schema: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.Schema),
/* harmony export */   SelectorType: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.SelectorType),
/* harmony export */   StepType: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.StepType),
/* harmony export */   StringifyExtension: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.StringifyExtension),
/* harmony export */   assertAllStepTypesAreHandled: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.assertAllStepTypesAreHandled),
/* harmony export */   createRunner: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.createRunner),
/* harmony export */   formatAsJSLiteral: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.formatAsJSLiteral),
/* harmony export */   formatJSONAsJS: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.formatJSONAsJS),
/* harmony export */   getSelectorType: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.getSelectorType),
/* harmony export */   maxTimeout: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.maxTimeout),
/* harmony export */   minTimeout: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.minTimeout),
/* harmony export */   mouseButtonMap: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.mouseButtonMap),
/* harmony export */   parse: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.parse),
/* harmony export */   parseSourceMap: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap),
/* harmony export */   parseStep: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.parseStep),
/* harmony export */   pointerDeviceTypes: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.pointerDeviceTypes),
/* harmony export */   selectorToPElementSelector: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.selectorToPElementSelector),
/* harmony export */   stringify: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.stringify),
/* harmony export */   stringifyStep: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.stringifyStep),
/* harmony export */   stripSourceMap: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap),
/* harmony export */   typeableInputTypes: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.typeableInputTypes),
/* harmony export */   validTimeout: () => (/* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.validTimeout)
/* harmony export */ });
/* harmony import */ var _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/lib/main.js */ "./third_party/puppeteer-replay/package/lib/main.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=puppeteer-replay.js.map

/***/ }),

/***/ "./panels/recorder/injected/injected.generated.js?ecbe":
/*!********************************************************!*\
  !*** ./panels/recorder/injected/injected.generated.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44652505ecf532b0b8f1.js";

/***/ })

}]);