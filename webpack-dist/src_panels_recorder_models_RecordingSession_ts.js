"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_models_RecordingSession_ts"],{

/***/ "./src/panels/recorder/models/RecordingSession.ts":
/*!********************************************************!*\
  !*** ./src/panels/recorder/models/RecordingSession.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   RecordingSession: () => (/* binding */ RecordingSession)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _util_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/util.js */ "./src/panels/recorder/util/util.ts");
/* harmony import */ var _Schema_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Schema.js */ "./src/panels/recorder/models/Schema.ts");
/* harmony import */ var _SchemaUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SchemaUtils.js */ "./src/panels/recorder/models/SchemaUtils.ts");
/* harmony import */ var _SDKUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SDKUtils.js */ "./src/panels/recorder/models/SDKUtils.ts");
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
var _RecordingSession_instances, _a, _RecordingSession_target, _RecordingSession_pageAgent, _RecordingSession_targetAgent, _RecordingSession_networkManager, _RecordingSession_resourceTreeModel, _RecordingSession_targets, _RecordingSession_lastNavigationEntryIdByTarget, _RecordingSession_lastNavigationHistoryByTarget, _RecordingSession_scriptIdentifiers, _RecordingSession_runtimeEventDescriptors, _RecordingSession_childTargetEventDescriptors, _RecordingSession_mutex, _RecordingSession_userFlow, _RecordingSession_stepsPendingNavigationByTargetId, _RecordingSession_started, _RecordingSession_selectorTypesToRecord, _RecordingSession_appendInitialSteps, _RecordingSession_getDocumentTitle, _RecordingSession_appendCurrentNetworkStep, _RecordingSession_updateTimeout, _RecordingSession_updateListeners, _RecordingSession_dispatchRecordingUpdate, _RecordingSession_previousStep_get, _RecordingSession_pressedChangeKeys, _RecordingSession_appendStep, _RecordingSession_handleBeforeUnload, _RecordingSession_replaceUnloadWithNavigation, _RecordingSession_handleStopShortcutBinding, _RecordingSession_receiveBindingCalled, _RecordingSession_handleAddStepBinding, _RecordingSession_getStopShortcuts, _RecordingSession_allowUntrustedEvents_get, _RecordingSession_setUpTarget, _RecordingSession_tearDownTarget, _RecordingSession_addBindings, _RecordingSession_removeBindings, _RecordingSession_injectApplicationScript, _RecordingSession_injectCleanUpScript, _RecordingSession_receiveTargetCreated, _RecordingSession_receiveTargetClosed, _RecordingSession_receiveTargetInfoChanged, _RecordingSession_handleEvent, _RecordingSession_handleTargetCreated, _RecordingSession_handleTargetClosed, _RecordingSession_handlePageNavigation, _RecordingSession_handleTargetInfoChanged, _RecordingSession_waitForDOMContentLoadedWithTimeout;








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
    constructor(target, opts) {
        super();
        _RecordingSession_instances.add(this);
        _RecordingSession_target.set(this, void 0);
        _RecordingSession_pageAgent.set(this, void 0);
        _RecordingSession_targetAgent.set(this, void 0);
        _RecordingSession_networkManager.set(this, void 0);
        _RecordingSession_resourceTreeModel.set(this, void 0);
        _RecordingSession_targets.set(this, new Map());
        _RecordingSession_lastNavigationEntryIdByTarget.set(this, new Map());
        _RecordingSession_lastNavigationHistoryByTarget.set(this, new Map());
        _RecordingSession_scriptIdentifiers.set(this, new Map());
        _RecordingSession_runtimeEventDescriptors.set(this, new Map());
        _RecordingSession_childTargetEventDescriptors.set(this, new Map());
        _RecordingSession_mutex.set(this, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex());
        _RecordingSession_userFlow.set(this, void 0);
        _RecordingSession_stepsPendingNavigationByTargetId.set(this, new Map());
        _RecordingSession_started.set(this, false);
        _RecordingSession_selectorTypesToRecord.set(this, []);
        _RecordingSession_updateTimeout.set(this, void 0);
        _RecordingSession_updateListeners.set(this, []);
        /**
         * Contains keys that are pressed related to a change step.
         */
        _RecordingSession_pressedChangeKeys.set(this, new Set());
        _RecordingSession_setUpTarget.set(this, async (target) => {
            if (target.type() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame) {
                return;
            }
            __classPrivateFieldGet(this, _RecordingSession_targets, "f").set(target.id(), target);
            const a11yModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.AccessibilityModel.AccessibilityModel);
            _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(a11yModel);
            await a11yModel.resumeModel();
            await __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_addBindings).call(this, target);
            await __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_injectApplicationScript).call(this, target);
            const childTargetManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager);
            _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(childTargetManager);
            __classPrivateFieldGet(this, _RecordingSession_childTargetEventDescriptors, "f").set(target, [
                childTargetManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.Events.TargetCreated, __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_receiveTargetCreated).bind(this, target)),
                childTargetManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.Events.TargetDestroyed, __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_receiveTargetClosed).bind(this, target)),
                childTargetManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.Events.TargetInfoChanged, __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_receiveTargetInfoChanged).bind(this, target)),
            ]);
            await Promise.all(childTargetManager.childTargets().map(__classPrivateFieldGet(this, _RecordingSession_setUpTarget, "f")));
        });
        _RecordingSession_tearDownTarget.set(this, async (target) => {
            const descriptors = __classPrivateFieldGet(this, _RecordingSession_childTargetEventDescriptors, "f").get(target);
            if (descriptors) {
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(descriptors);
            }
            await __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_injectCleanUpScript).call(this, target);
            await __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_removeBindings).call(this, target);
        });
        __classPrivateFieldSet(this, _RecordingSession_target, target, "f");
        __classPrivateFieldSet(this, _RecordingSession_pageAgent, target.pageAgent(), "f");
        __classPrivateFieldSet(this, _RecordingSession_targetAgent, target.targetAgent(), "f");
        __classPrivateFieldSet(this, _RecordingSession_networkManager, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.MultitargetNetworkManager.instance(), "f");
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel);
        if (!resourceTreeModel) {
            throw new Error('ResourceTreeModel is missing for the target: ' + target.id());
        }
        __classPrivateFieldSet(this, _RecordingSession_resourceTreeModel, resourceTreeModel, "f");
        __classPrivateFieldSet(this, _RecordingSession_target, target, "f");
        __classPrivateFieldSet(this, _RecordingSession_userFlow, { title: opts.title, selectorAttribute: opts.selectorAttribute, steps: [] }, "f");
        __classPrivateFieldSet(this, _RecordingSession_selectorTypesToRecord, opts.selectorTypesToRecord, "f");
    }
    /**
     * @returns - A deep copy of the session's current user flow.
     */
    cloneUserFlow() {
        return structuredClone(__classPrivateFieldGet(this, _RecordingSession_userFlow, "f"));
    }
    /**
     * Overwrites the session's current user flow with the given one.
     *
     * This method will not dispatch an `recordingupdated` event.
     */
    overwriteUserFlow(flow) {
        __classPrivateFieldSet(this, _RecordingSession_userFlow, structuredClone(flow), "f");
    }
    async start() {
        if (__classPrivateFieldGet(this, _RecordingSession_started, "f")) {
            throw new Error('The session has started');
        }
        __classPrivateFieldSet(this, _RecordingSession_started, true, "f");
        __classPrivateFieldGet(this, _RecordingSession_networkManager, "f").addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.MultitargetNetworkManager.Events.ConditionsChanged, __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_appendCurrentNetworkStep), this);
        await __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_appendInitialSteps).call(this);
        // Focus the target so that events can be captured without additional actions.
        await __classPrivateFieldGet(this, _RecordingSession_pageAgent, "f").invoke_bringToFront();
        await __classPrivateFieldGet(this, _RecordingSession_setUpTarget, "f").call(this, __classPrivateFieldGet(this, _RecordingSession_target, "f"));
    }
    async stop() {
        // Wait for any remaining updates.
        await __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_dispatchRecordingUpdate).call(this);
        // Create a deadlock for the remaining events.
        void __classPrivateFieldGet(this, _RecordingSession_mutex, "f").acquire();
        await Promise.all([...__classPrivateFieldGet(this, _RecordingSession_targets, "f").values()].map(__classPrivateFieldGet(this, _RecordingSession_tearDownTarget, "f")));
        __classPrivateFieldGet(this, _RecordingSession_networkManager, "f").removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.MultitargetNetworkManager.Events.ConditionsChanged, __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_appendCurrentNetworkStep), this);
    }
}
_a = RecordingSession, _RecordingSession_target = new WeakMap(), _RecordingSession_pageAgent = new WeakMap(), _RecordingSession_targetAgent = new WeakMap(), _RecordingSession_networkManager = new WeakMap(), _RecordingSession_resourceTreeModel = new WeakMap(), _RecordingSession_targets = new WeakMap(), _RecordingSession_lastNavigationEntryIdByTarget = new WeakMap(), _RecordingSession_lastNavigationHistoryByTarget = new WeakMap(), _RecordingSession_scriptIdentifiers = new WeakMap(), _RecordingSession_runtimeEventDescriptors = new WeakMap(), _RecordingSession_childTargetEventDescriptors = new WeakMap(), _RecordingSession_mutex = new WeakMap(), _RecordingSession_userFlow = new WeakMap(), _RecordingSession_stepsPendingNavigationByTargetId = new WeakMap(), _RecordingSession_started = new WeakMap(), _RecordingSession_selectorTypesToRecord = new WeakMap(), _RecordingSession_updateTimeout = new WeakMap(), _RecordingSession_updateListeners = new WeakMap(), _RecordingSession_pressedChangeKeys = new WeakMap(), _RecordingSession_setUpTarget = new WeakMap(), _RecordingSession_tearDownTarget = new WeakMap(), _RecordingSession_instances = new WeakSet(), _RecordingSession_appendInitialSteps = async function _RecordingSession_appendInitialSteps() {
    // Quick validation before doing anything.
    const mainFrame = __classPrivateFieldGet(this, _RecordingSession_resourceTreeModel, "f").mainFrame;
    if (!mainFrame) {
        throw new Error('Could not find mainFrame.');
    }
    // Network step.
    if (__classPrivateFieldGet(this, _RecordingSession_networkManager, "f").networkConditions() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.NoThrottlingConditions) {
        __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_appendCurrentNetworkStep).call(this);
    }
    // Viewport step.
    const { cssLayoutViewport } = await __classPrivateFieldGet(this, _RecordingSession_target, "f").pageAgent().invoke_getLayoutMetrics();
    __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_appendStep).call(this, (0,_SchemaUtils_js__WEBPACK_IMPORTED_MODULE_6__.createViewportStep)(cssLayoutViewport));
    // Navigation step.
    const history = await __classPrivateFieldGet(this, _RecordingSession_resourceTreeModel, "f").navigationHistory();
    if (history) {
        const entry = history.entries[history.currentIndex];
        __classPrivateFieldGet(this, _RecordingSession_lastNavigationEntryIdByTarget, "f").set(__classPrivateFieldGet(this, _RecordingSession_target, "f").id(), entry.id);
        __classPrivateFieldGet(this, _RecordingSession_lastNavigationHistoryByTarget, "f").set(__classPrivateFieldGet(this, _RecordingSession_target, "f").id(), history.entries.map(entry => entry.id));
        __classPrivateFieldGet(this, _RecordingSession_userFlow, "f").steps.push({
            type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.StepType.Navigate,
            url: entry.url,
            assertedEvents: [{ type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation, url: entry.url, title: entry.title }],
        });
    }
    else {
        __classPrivateFieldGet(this, _RecordingSession_userFlow, "f").steps.push({
            type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.StepType.Navigate,
            url: mainFrame.url,
            assertedEvents: [
                { type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation, url: mainFrame.url, title: await __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_getDocumentTitle).call(this, __classPrivateFieldGet(this, _RecordingSession_target, "f")) },
            ],
        });
    }
    // Commit
    void __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_dispatchRecordingUpdate).call(this);
}, _RecordingSession_getDocumentTitle = async function _RecordingSession_getDocumentTitle(target) {
    const response = await target.runtimeAgent().invoke_evaluate({ expression: 'document.title' });
    return response.result?.value || '';
}, _RecordingSession_appendCurrentNetworkStep = function _RecordingSession_appendCurrentNetworkStep() {
    const networkConditions = __classPrivateFieldGet(this, _RecordingSession_networkManager, "f").networkConditions();
    __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_appendStep).call(this, (0,_SchemaUtils_js__WEBPACK_IMPORTED_MODULE_6__.createEmulateNetworkConditionsStep)(networkConditions));
}, _RecordingSession_dispatchRecordingUpdate = function _RecordingSession_dispatchRecordingUpdate() {
    if (__classPrivateFieldGet(this, _RecordingSession_updateTimeout, "f")) {
        clearTimeout(__classPrivateFieldGet(this, _RecordingSession_updateTimeout, "f"));
    }
    __classPrivateFieldSet(this, _RecordingSession_updateTimeout, setTimeout(() => {
        // Making a copy to prevent mutations of this.userFlow by event consumers.
        this.dispatchEventToListeners(Events.RecordingUpdated, structuredClone(__classPrivateFieldGet(this, _RecordingSession_userFlow, "f")));
        __classPrivateFieldSet(this, _RecordingSession_updateTimeout, undefined, "f");
        for (const resolve of __classPrivateFieldGet(this, _RecordingSession_updateListeners, "f")) {
            resolve();
        }
        __classPrivateFieldGet(this, _RecordingSession_updateListeners, "f").length = 0;
    }, 100), "f");
    return new Promise(resolve => {
        __classPrivateFieldGet(this, _RecordingSession_updateListeners, "f").push(resolve);
    });
}, _RecordingSession_previousStep_get = function _RecordingSession_previousStep_get() {
    return __classPrivateFieldGet(this, _RecordingSession_userFlow, "f").steps.slice(-1)[0];
}, _RecordingSession_appendStep = function _RecordingSession_appendStep(step) {
    switch (step.type) {
        case 'doubleClick': {
            for (let j = __classPrivateFieldGet(this, _RecordingSession_userFlow, "f").steps.length - 1; j > 0; j--) {
                const previousStep = __classPrivateFieldGet(this, _RecordingSession_userFlow, "f").steps[j];
                if (previousStep.type === 'click') {
                    step.selectors = previousStep.selectors;
                    __classPrivateFieldGet(this, _RecordingSession_userFlow, "f").steps.splice(j, 1);
                    break;
                }
            }
            break;
        }
        case 'change': {
            const previousStep = __classPrivateFieldGet(this, _RecordingSession_instances, "a", _RecordingSession_previousStep_get);
            if (!previousStep) {
                break;
            }
            switch (previousStep.type) {
                // Merging changes.
                case 'change':
                    if (!(0,_SchemaUtils_js__WEBPACK_IMPORTED_MODULE_6__.areSelectorsEqual)(step, previousStep)) {
                        break;
                    }
                    __classPrivateFieldGet(this, _RecordingSession_userFlow, "f").steps[__classPrivateFieldGet(this, _RecordingSession_userFlow, "f").steps.length - 1] = step;
                    void __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_dispatchRecordingUpdate).call(this);
                    return;
                // Ignore key downs resulting in inputs.
                case 'keyDown':
                    __classPrivateFieldGet(this, _RecordingSession_pressedChangeKeys, "f").add(previousStep.key);
                    __classPrivateFieldGet(this, _RecordingSession_userFlow, "f").steps.pop();
                    __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_appendStep).call(this, step);
                    return;
            }
            break;
        }
        case 'keyDown': {
            // This can happen if there are successive keydown's from a repeated key
            // for example.
            if (__classPrivateFieldGet(this, _RecordingSession_pressedChangeKeys, "f").has(step.key)) {
                return;
            }
            break;
        }
        case 'keyUp': {
            // Ignore key ups coming from change inputs.
            if (__classPrivateFieldGet(this, _RecordingSession_pressedChangeKeys, "f").has(step.key)) {
                __classPrivateFieldGet(this, _RecordingSession_pressedChangeKeys, "f").delete(step.key);
                return;
            }
            break;
        }
    }
    __classPrivateFieldGet(this, _RecordingSession_userFlow, "f").steps.push(step);
    void __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_dispatchRecordingUpdate).call(this);
}, _RecordingSession_handleBeforeUnload = function _RecordingSession_handleBeforeUnload(context, sdkTarget) {
    const lastStep = __classPrivateFieldGet(this, _RecordingSession_userFlow, "f").steps[__classPrivateFieldGet(this, _RecordingSession_userFlow, "f").steps.length - 1];
    if (lastStep && !lastStep.assertedEvents?.find(event => event.type === _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation)) {
        const target = context.target || 'main';
        const frameSelector = (context.frame || []).join(',');
        const lastStepTarget = lastStep.target || 'main';
        const lastStepFrameSelector = (('frame' in lastStep ? lastStep.frame : []) || []).join(',');
        if (target === lastStepTarget && frameSelector === lastStepFrameSelector) {
            lastStep.assertedEvents = [{ type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation }];
            __classPrivateFieldGet(this, _RecordingSession_stepsPendingNavigationByTargetId, "f").set(sdkTarget.id(), lastStep);
            void __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_dispatchRecordingUpdate).call(this);
        }
    }
}, _RecordingSession_replaceUnloadWithNavigation = function _RecordingSession_replaceUnloadWithNavigation(target, event) {
    const stepPendingNavigation = __classPrivateFieldGet(this, _RecordingSession_stepsPendingNavigationByTargetId, "f").get(target.id());
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
    void __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_dispatchRecordingUpdate).call(this);
}, _RecordingSession_handleStopShortcutBinding = function _RecordingSession_handleStopShortcutBinding(event) {
    const shortcutLength = Number(event.data.payload);
    // Look for one less step as the last one gets consumed before creating a step
    for (let index = 0; index < shortcutLength - 1; index++) {
        __classPrivateFieldGet(this, _RecordingSession_userFlow, "f").steps.pop();
    }
    this.dispatchEventToListeners(Events.RecordingStopped, structuredClone(__classPrivateFieldGet(this, _RecordingSession_userFlow, "f")));
}, _RecordingSession_receiveBindingCalled = function _RecordingSession_receiveBindingCalled(target, event) {
    switch (event.data.name) {
        case RecorderBinding.stopShortcut:
            __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_handleStopShortcutBinding).call(this, event);
            return;
        case RecorderBinding.addStep:
            __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_handleAddStepBinding).call(this, target, event);
            return;
        default:
            return;
    }
}, _RecordingSession_handleAddStepBinding = function _RecordingSession_handleAddStepBinding(target, event) {
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
        __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_handleBeforeUnload).call(this, context, target);
        return;
    }
    // TODO: type-safe parsing from client steps to internal step format.
    switch (step.type) {
        case 'change': {
            __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_appendStep).call(this, {
                type: 'change',
                value: step.value,
                selectors: step.selectors,
                frame: context.frame.length ? context.frame : undefined,
                target: context.target,
            });
            break;
        }
        case 'doubleClick': {
            __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_appendStep).call(this, {
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
            __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_appendStep).call(this, {
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
            __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_appendStep).call(this, {
                type: 'keyUp',
                key: step.key,
                frame: context.frame.length ? context.frame : undefined,
                target: context.target,
            });
            break;
        }
        case 'keyDown': {
            __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_appendStep).call(this, {
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
}, _RecordingSession_getStopShortcuts = function _RecordingSession_getStopShortcuts() {
    const descriptors = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ShortcutRegistry.ShortcutRegistry.instance()
        .shortcutsForAction('chrome-recorder.start-recording')
        .map(key => key.descriptors.map(press => press.key));
    return createShortcuts(descriptors);
}, _RecordingSession_allowUntrustedEvents_get = function _RecordingSession_allowUntrustedEvents_get() {
    try {
        // This setting is set during the test to work around the fact that Puppeteer cannot
        // send trusted change and input events.
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().settingForTest('untrusted-recorder-events');
        return true;
    }
    catch {
    }
    return false;
}, _RecordingSession_addBindings = async function _RecordingSession_addBindings(target) {
    const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
    _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(runtimeModel);
    __classPrivateFieldGet(this, _RecordingSession_runtimeEventDescriptors, "f").set(target, [runtimeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.Events.BindingCalled, __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_receiveBindingCalled).bind(this, target))]);
    await Promise.all(Object.values(RecorderBinding)
        .map(name => runtimeModel.addBinding({ name, executionContextName: _util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME })));
}, _RecordingSession_removeBindings = async function _RecordingSession_removeBindings(target) {
    await Promise.all(Object.values(RecorderBinding).map(name => target.runtimeAgent().invoke_removeBinding({ name })));
    const descriptors = __classPrivateFieldGet(this, _RecordingSession_runtimeEventDescriptors, "f").get(target);
    if (descriptors) {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(descriptors);
    }
}, _RecordingSession_injectApplicationScript = async function _RecordingSession_injectApplicationScript(target) {
    const injectedScript = await _util_util_js__WEBPACK_IMPORTED_MODULE_4__.InjectedScript.get();
    const script = `
      ${injectedScript};DevToolsRecorder.startRecording({getAccessibleName, getAccessibleRole}, {
        debug: ${_util_util_js__WEBPACK_IMPORTED_MODULE_4__.isDebugBuild},
        allowUntrustedEvents: ${__classPrivateFieldGet(_a, _a, "a", _RecordingSession_allowUntrustedEvents_get)},
        selectorTypesToRecord: ${JSON.stringify(__classPrivateFieldGet(this, _RecordingSession_selectorTypesToRecord, "f"))},
        selectorAttribute: ${__classPrivateFieldGet(this, _RecordingSession_userFlow, "f").selectorAttribute ? formatAsJSLiteral(__classPrivateFieldGet(this, _RecordingSession_userFlow, "f").selectorAttribute) : undefined},
        stopShortcuts: ${JSON.stringify(__classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_getStopShortcuts).call(this))},
      });
    `;
    const [{ identifier }] = await Promise.all([
        target.pageAgent().invoke_addScriptToEvaluateOnNewDocument({ source: script, worldName: _util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME, includeCommandLineAPI: true }),
        (0,_SDKUtils_js__WEBPACK_IMPORTED_MODULE_7__.evaluateInAllFrames)(_util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME, target, script),
    ]);
    __classPrivateFieldGet(this, _RecordingSession_scriptIdentifiers, "f").set(target.id(), identifier);
}, _RecordingSession_injectCleanUpScript = async function _RecordingSession_injectCleanUpScript(target) {
    const scriptId = __classPrivateFieldGet(this, _RecordingSession_scriptIdentifiers, "f").get(target.id());
    if (!scriptId) {
        return;
    }
    await target.pageAgent().invoke_removeScriptToEvaluateOnNewDocument({ identifier: scriptId });
    await evaluateInAllTargets(_util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME, [...__classPrivateFieldGet(this, _RecordingSession_targets, "f").values()], 'DevToolsRecorder.stopRecording()');
}, _RecordingSession_receiveTargetCreated = function _RecordingSession_receiveTargetCreated(target, event) {
    void __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_handleEvent).call(this, { type: 'targetCreated', event, target });
}, _RecordingSession_receiveTargetClosed = function _RecordingSession_receiveTargetClosed(eventTarget, event) {
    // TODO(alexrudenko): target here appears to be the parent target of the target that is closed.
    // Therefore, we need to find the real target via the targets map.
    const childTarget = __classPrivateFieldGet(this, _RecordingSession_targets, "f").get(event.data);
    if (childTarget) {
        void __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_handleEvent).call(this, { type: 'targetClosed', event, target: childTarget });
    }
}, _RecordingSession_receiveTargetInfoChanged = function _RecordingSession_receiveTargetInfoChanged(eventTarget, event) {
    const target = __classPrivateFieldGet(this, _RecordingSession_targets, "f").get(event.data.targetId) || eventTarget;
    void __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_handleEvent).call(this, { type: 'targetInfoChanged', event, target });
}, _RecordingSession_handleEvent = function _RecordingSession_handleEvent(event) {
    return __classPrivateFieldGet(this, _RecordingSession_mutex, "f").run(async () => {
        try {
            if (_util_util_js__WEBPACK_IMPORTED_MODULE_4__.isDebugBuild) {
                console.time(`Processing ${JSON.stringify(event)}`);
            }
            switch (event.type) {
                case 'targetClosed':
                    await __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_handleTargetClosed).call(this, event);
                    break;
                case 'targetCreated':
                    await __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_handleTargetCreated).call(this, event);
                    break;
                case 'targetInfoChanged':
                    await __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_handleTargetInfoChanged).call(this, event);
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
}, _RecordingSession_handleTargetCreated = async function _RecordingSession_handleTargetCreated(event) {
    if (event.event.data.type !== 'page' && event.event.data.type !== 'iframe') {
        return;
    }
    await __classPrivateFieldGet(this, _RecordingSession_targetAgent, "f").invoke_attachToTarget({ targetId: event.event.data.targetId, flatten: true });
    const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().targets().find(t => t.id() === event.event.data.targetId);
    if (!target) {
        throw new Error('Could not find target.');
    }
    // Generally an new target implies all other targets are not waiting for something special in their event buffers, so we flush them here.
    await __classPrivateFieldGet(this, _RecordingSession_setUpTarget, "f").call(this, target);
    // Emitted for e2e tests.
    window.dispatchEvent(new Event('recorderAttachedToTarget'));
}, _RecordingSession_handleTargetClosed = async function _RecordingSession_handleTargetClosed(event) {
    const stepPendingNavigation = __classPrivateFieldGet(this, _RecordingSession_stepsPendingNavigationByTargetId, "f").get(event.target.id());
    if (stepPendingNavigation) {
        delete stepPendingNavigation.assertedEvents;
        __classPrivateFieldGet(this, _RecordingSession_stepsPendingNavigationByTargetId, "f").delete(event.target.id());
    }
    // TODO(alexrudenko): figure out how this works with sections
    // TODO(alexrudenko): Ignore close events as they only matter for popups but cause more trouble than benefits
    // const closeStep: CloseStep = {
    //   type: 'close',
    //   target: getTargetName(event.target),
    // };
    // this.appendStep(closeStep);
}, _RecordingSession_handlePageNavigation = async function _RecordingSession_handlePageNavigation(resourceTreeModel, target) {
    const history = await resourceTreeModel.navigationHistory();
    if (!history) {
        return false;
    }
    const entry = history.entries[history.currentIndex];
    const prevId = __classPrivateFieldGet(this, _RecordingSession_lastNavigationEntryIdByTarget, "f").get(target.id());
    if (prevId === entry.id) {
        return true;
    }
    __classPrivateFieldGet(this, _RecordingSession_lastNavigationEntryIdByTarget, "f").set(target.id(), entry.id);
    const lastHistory = __classPrivateFieldGet(this, _RecordingSession_lastNavigationHistoryByTarget, "f").get(target.id()) || [];
    __classPrivateFieldGet(this, _RecordingSession_lastNavigationHistoryByTarget, "f").set(target.id(), history.entries.map(entry => entry.id));
    if (unrelatedNavigationTypes.has(entry.transitionType) || lastHistory.includes(entry.id)) {
        const stepPendingNavigation = __classPrivateFieldGet(this, _RecordingSession_stepsPendingNavigationByTargetId, "f").get(target.id());
        if (stepPendingNavigation) {
            delete stepPendingNavigation.assertedEvents;
            __classPrivateFieldGet(this, _RecordingSession_stepsPendingNavigationByTargetId, "f").delete(target.id());
        }
        __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_appendStep).call(this, {
            type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.StepType.Navigate,
            url: entry.url,
            assertedEvents: [{ type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation, url: entry.url, title: entry.title }],
        });
    }
    else {
        __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_replaceUnloadWithNavigation).call(this, target, { type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation, url: entry.url, title: entry.title });
    }
    return true;
}, _RecordingSession_handleTargetInfoChanged = async function _RecordingSession_handleTargetInfoChanged(event) {
    if (event.event.data.type !== 'page' && event.event.data.type !== 'iframe') {
        return;
    }
    const target = event.target;
    const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel);
    if (!resourceTreeModel) {
        throw new Error('ResourceTreeModel is missing in handleNavigation');
    }
    if (event.event.data.type === 'iframe') {
        __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_replaceUnloadWithNavigation).call(this, target, { type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation, url: event.event.data.url, title: await __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_getDocumentTitle).call(this, target) });
    }
    else if (event.event.data.type === 'page') {
        if (await __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_handlePageNavigation).call(this, resourceTreeModel, target)) {
            return;
        }
        // Needed for #getDocumentTitle to return something meaningful.
        await __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_waitForDOMContentLoadedWithTimeout).call(this, resourceTreeModel, 500);
        __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_replaceUnloadWithNavigation).call(this, target, { type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation, url: event.event.data.url, title: await __classPrivateFieldGet(this, _RecordingSession_instances, "m", _RecordingSession_getDocumentTitle).call(this, target) });
    }
}, _RecordingSession_waitForDOMContentLoadedWithTimeout = async function _RecordingSession_waitForDOMContentLoadedWithTimeout(resourceTreeModel, timeout) {
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
};
var Events;
(function (Events) {
    Events["RecordingUpdated"] = "recordingupdated";
    Events["RecordingStopped"] = "recordingstopped";
})(Events || (Events = {}));


/***/ }),

/***/ "./src/panels/recorder/models/SDKUtils.ts":
/*!************************************************!*\
  !*** ./src/panels/recorder/models/SDKUtils.ts ***!
  \************************************************/
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
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
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


/***/ }),

/***/ "./src/panels/recorder/models/Schema.ts":
/*!**********************************************!*\
  !*** ./src/panels/recorder/models/Schema.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssertedEventType: () => (/* reexport safe */ _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.AssertedEventType),
/* harmony export */   SelectorType: () => (/* reexport safe */ _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.SelectorType),
/* harmony export */   StepType: () => (/* reexport safe */ _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.StepType)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./src/third_party/puppeteer-replay/puppeteer-replay.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ }),

/***/ "./src/panels/recorder/models/SchemaUtils.ts":
/*!***************************************************!*\
  !*** ./src/panels/recorder/models/SchemaUtils.ts ***!
  \***************************************************/
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
/* harmony import */ var _Schema_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Schema.js */ "./src/panels/recorder/models/Schema.ts");
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./src/third_party/puppeteer-replay/puppeteer-replay.ts");
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


/***/ }),

/***/ "./src/panels/recorder/util/SharedObject.ts":
/*!**************************************************!*\
  !*** ./src/panels/recorder/util/SharedObject.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedObject: () => (/* binding */ SharedObject)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
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
var _SharedObject_instances, _SharedObject_mutex, _SharedObject_counter, _SharedObject_value, _SharedObject_create, _SharedObject_destroy, _SharedObject_release;

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
    constructor(create, destroy) {
        _SharedObject_instances.add(this);
        _SharedObject_mutex.set(this, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex());
        _SharedObject_counter.set(this, 0);
        _SharedObject_value.set(this, void 0);
        _SharedObject_create.set(this, void 0);
        _SharedObject_destroy.set(this, void 0);
        __classPrivateFieldSet(this, _SharedObject_create, create, "f");
        __classPrivateFieldSet(this, _SharedObject_destroy, destroy, "f");
    }
    /**
     * @returns The shared object and a release function. If the release function
     * throws, you may attempt to call it again (however this probably implies
     * your destroy function is bad).
     */
    async acquire() {
        await __classPrivateFieldGet(this, _SharedObject_mutex, "f").run(async () => {
            var _a;
            if (__classPrivateFieldGet(this, _SharedObject_counter, "f") === 0) {
                __classPrivateFieldSet(this, _SharedObject_value, await __classPrivateFieldGet(this, _SharedObject_create, "f").call(this), "f");
            }
            __classPrivateFieldSet(this, _SharedObject_counter, (_a = __classPrivateFieldGet(this, _SharedObject_counter, "f"), ++_a), "f");
        });
        return [__classPrivateFieldGet(this, _SharedObject_value, "f"), __classPrivateFieldGet(this, _SharedObject_instances, "m", _SharedObject_release).bind(this, { released: false })];
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
}
_SharedObject_mutex = new WeakMap(), _SharedObject_counter = new WeakMap(), _SharedObject_value = new WeakMap(), _SharedObject_create = new WeakMap(), _SharedObject_destroy = new WeakMap(), _SharedObject_instances = new WeakSet(), _SharedObject_release = async function _SharedObject_release(state) {
    if (state.released) {
        throw new Error('Attempted to release object multiple times.');
    }
    try {
        state.released = true;
        await __classPrivateFieldGet(this, _SharedObject_mutex, "f").run(async () => {
            var _a;
            if (__classPrivateFieldGet(this, _SharedObject_counter, "f") === 1) {
                await __classPrivateFieldGet(this, _SharedObject_destroy, "f").call(this, __classPrivateFieldGet(this, _SharedObject_value, "f"));
                __classPrivateFieldSet(this, _SharedObject_value, undefined, "f");
            }
            __classPrivateFieldSet(this, _SharedObject_counter, (_a = __classPrivateFieldGet(this, _SharedObject_counter, "f"), --_a), "f");
        });
    }
    catch (error) {
        state.released = false;
        throw error;
    }
};


/***/ }),

/***/ "./src/panels/recorder/util/util.ts":
/*!******************************************!*\
  !*** ./src/panels/recorder/util/util.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEVTOOLS_RECORDER_WORLD_NAME: () => (/* binding */ DEVTOOLS_RECORDER_WORLD_NAME),
/* harmony export */   InjectedScript: () => (/* binding */ InjectedScript),
/* harmony export */   SharedObject: () => (/* reexport module object */ _SharedObject_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   isDebugBuild: () => (/* binding */ isDebugBuild)
/* harmony export */ });
/* harmony import */ var _SharedObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedObject.js */ "./src/panels/recorder/util/SharedObject.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _InjectedScript_injectedScript;

// Setting this to `true` enables extra logging for the injected scripts.
const isDebugBuild = false;
const DEVTOOLS_RECORDER_WORLD_NAME = 'devtools_recorder';
class InjectedScript {
    static async get() {
        if (!__classPrivateFieldGet(this, _a, "f", _InjectedScript_injectedScript)) {
            __classPrivateFieldSet(this, _a, (await fetch(new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error("Cannot find module '../injected/injected.generated.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b)))
                .text(), "f", _InjectedScript_injectedScript);
        }
        return __classPrivateFieldGet(this, _a, "f", _InjectedScript_injectedScript);
    }
}
_a = InjectedScript;
_InjectedScript_injectedScript = { value: void 0 };



/***/ })

}]);