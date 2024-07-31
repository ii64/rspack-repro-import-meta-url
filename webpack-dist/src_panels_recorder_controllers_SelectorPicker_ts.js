"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_controllers_SelectorPicker_ts"],{

/***/ "./src/panels/recorder/controllers/SelectorPicker.ts":
/*!***********************************************************!*\
  !*** ./src/panels/recorder/controllers/SelectorPicker.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestSelectorAttributeEvent: () => (/* binding */ RequestSelectorAttributeEvent),
/* harmony export */   SelectorPickedEvent: () => (/* binding */ SelectorPickedEvent),
/* harmony export */   SelectorPicker: () => (/* binding */ SelectorPicker)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models.js */ "./src/panels/recorder/models/models.ts");
/* harmony import */ var _util_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/util.js */ "./src/panels/recorder/util/util.ts");
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
var _SelectorPicker_instances, _a, _SelectorPicker_targetManager_get, _SelectorPicker_element, _SelectorPicker_selectorAttribute, _SelectorPicker_activeMutex, _SelectorPicker_targetMutexes, _SelectorPicker_handleBindingCalledEvent, _SelectorPicker_scriptIdentifier, _SelectorPicker_injectApplicationScript, _SelectorPicker_injectCleanupScript, _SelectorPicker_addBindings, _SelectorPicker_removeBindings;





const BINDING_NAME = 'captureSelectors';
class SelectorPickedEvent extends Event {
    constructor(data) {
        super(SelectorPickedEvent.eventName, { bubbles: true, composed: true });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
    }
}
Object.defineProperty(SelectorPickedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'selectorpicked'
});
class RequestSelectorAttributeEvent extends Event {
    constructor(send) {
        super(RequestSelectorAttributeEvent.eventName, {
            bubbles: true,
            composed: true,
        });
        Object.defineProperty(this, "send", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.send = send;
    }
}
Object.defineProperty(RequestSelectorAttributeEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'requestselectorattribute'
});
class SelectorPicker {
    constructor(element) {
        _SelectorPicker_instances.add(this);
        _SelectorPicker_element.set(this, void 0);
        _SelectorPicker_selectorAttribute.set(this, void 0);
        _SelectorPicker_activeMutex.set(this, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex());
        Object.defineProperty(this, "active", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "start", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return __classPrivateFieldGet(this, _SelectorPicker_activeMutex, "f").run(async () => {
                    if (this.active) {
                        return;
                    }
                    this.active = true;
                    __classPrivateFieldSet(this, _SelectorPicker_selectorAttribute, await new Promise((resolve, reject) => {
                        const timeout = setTimeout(reject, 1000);
                        __classPrivateFieldGet(this, _SelectorPicker_element, "f").dispatchEvent(new RequestSelectorAttributeEvent(attribute => {
                            clearTimeout(timeout);
                            resolve(attribute);
                        }));
                    }), "f");
                    __classPrivateFieldGet(_a, _a, "a", _SelectorPicker_targetManager_get).observeTargets(this);
                    __classPrivateFieldGet(this, _SelectorPicker_element, "f").requestUpdate();
                });
            }
        });
        Object.defineProperty(this, "stop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return __classPrivateFieldGet(this, _SelectorPicker_activeMutex, "f").run(async () => {
                    if (!this.active) {
                        return;
                    }
                    this.active = false;
                    __classPrivateFieldGet(_a, _a, "a", _SelectorPicker_targetManager_get).unobserveTargets(this);
                    __classPrivateFieldGet(_a, _a, "a", _SelectorPicker_targetManager_get).targets().map(this.targetRemoved.bind(this));
                    __classPrivateFieldSet(this, _SelectorPicker_selectorAttribute, undefined, "f");
                    __classPrivateFieldGet(this, _SelectorPicker_element, "f").requestUpdate();
                });
            }
        });
        Object.defineProperty(this, "toggle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                if (!this.active) {
                    return this.start();
                }
                return this.stop();
            }
        });
        _SelectorPicker_targetMutexes.set(this, new Map());
        _SelectorPicker_handleBindingCalledEvent.set(this, (event) => {
            if (event.data.name !== BINDING_NAME) {
                return;
            }
            const contextId = event.data.executionContextId;
            const frames = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().targets();
            const contextTarget = _models_models_js__WEBPACK_IMPORTED_MODULE_3__.SDKUtils.findTargetByExecutionContext(frames, contextId);
            const frameId = _models_models_js__WEBPACK_IMPORTED_MODULE_3__.SDKUtils.findFrameIdByExecutionContext(frames, contextId);
            if (!contextTarget || !frameId) {
                throw new Error(`No execution context found for the binding call + ${JSON.stringify(event.data)}`);
            }
            const model = contextTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel);
            if (!model) {
                throw new Error(`ResourceTreeModel instance is missing for the target: ${contextTarget.id()}`);
            }
            const frame = model.frameForId(frameId);
            if (!frame) {
                throw new Error('Frame is not found');
            }
            __classPrivateFieldGet(this, _SelectorPicker_element, "f").dispatchEvent(new SelectorPickedEvent({
                ...JSON.parse(event.data.payload),
                ..._models_models_js__WEBPACK_IMPORTED_MODULE_3__.SDKUtils.getTargetFrameContext(contextTarget, frame),
            }));
            void this.stop();
        });
        _SelectorPicker_scriptIdentifier.set(this, new Map());
        __classPrivateFieldSet(this, _SelectorPicker_element, element, "f");
    }
    targetAdded(target) {
        if (target.type() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame) {
            return;
        }
        let mutex = __classPrivateFieldGet(this, _SelectorPicker_targetMutexes, "f").get(target);
        if (!mutex) {
            mutex = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex();
            __classPrivateFieldGet(this, _SelectorPicker_targetMutexes, "f").set(target, mutex);
        }
        void mutex.run(async () => {
            await __classPrivateFieldGet(this, _SelectorPicker_instances, "m", _SelectorPicker_addBindings).call(this, target);
            await __classPrivateFieldGet(this, _SelectorPicker_instances, "m", _SelectorPicker_injectApplicationScript).call(this, target);
        });
    }
    targetRemoved(target) {
        const mutex = __classPrivateFieldGet(this, _SelectorPicker_targetMutexes, "f").get(target);
        if (!mutex) {
            return;
        }
        void mutex.run(async () => {
            try {
                await __classPrivateFieldGet(this, _SelectorPicker_instances, "m", _SelectorPicker_injectCleanupScript).call(this, target);
                await __classPrivateFieldGet(this, _SelectorPicker_instances, "m", _SelectorPicker_removeBindings).call(this, target);
            }
            catch {
            }
        });
    }
}
_a = SelectorPicker, _SelectorPicker_element = new WeakMap(), _SelectorPicker_selectorAttribute = new WeakMap(), _SelectorPicker_activeMutex = new WeakMap(), _SelectorPicker_targetMutexes = new WeakMap(), _SelectorPicker_handleBindingCalledEvent = new WeakMap(), _SelectorPicker_scriptIdentifier = new WeakMap(), _SelectorPicker_instances = new WeakSet(), _SelectorPicker_targetManager_get = function _SelectorPicker_targetManager_get() {
    return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
}, _SelectorPicker_injectApplicationScript = async function _SelectorPicker_injectApplicationScript(target) {
    const injectedScript = await _util_util_js__WEBPACK_IMPORTED_MODULE_4__.InjectedScript.get();
    const script = `${injectedScript};DevToolsRecorder.startSelectorPicker({getAccessibleName, getAccessibleRole}, ${JSON.stringify(__classPrivateFieldGet(this, _SelectorPicker_selectorAttribute, "f") ? __classPrivateFieldGet(this, _SelectorPicker_selectorAttribute, "f") : undefined)}, ${_util_util_js__WEBPACK_IMPORTED_MODULE_4__.isDebugBuild})`;
    const [{ identifier }] = await Promise.all([
        target.pageAgent().invoke_addScriptToEvaluateOnNewDocument({
            source: script,
            worldName: _util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME,
            includeCommandLineAPI: true,
        }),
        _models_models_js__WEBPACK_IMPORTED_MODULE_3__.SDKUtils.evaluateInAllFrames(_util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME, target, script),
    ]);
    __classPrivateFieldGet(this, _SelectorPicker_scriptIdentifier, "f").set(target, identifier);
}, _SelectorPicker_injectCleanupScript = async function _SelectorPicker_injectCleanupScript(target) {
    const identifier = __classPrivateFieldGet(this, _SelectorPicker_scriptIdentifier, "f").get(target);
    _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(identifier);
    __classPrivateFieldGet(this, _SelectorPicker_scriptIdentifier, "f").delete(target);
    await target.pageAgent().invoke_removeScriptToEvaluateOnNewDocument({ identifier });
    const script = 'DevToolsRecorder.stopSelectorPicker()';
    await _models_models_js__WEBPACK_IMPORTED_MODULE_3__.SDKUtils.evaluateInAllFrames(_util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME, target, script);
}, _SelectorPicker_addBindings = async function _SelectorPicker_addBindings(target) {
    const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
    _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(model);
    model.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.Events.BindingCalled, __classPrivateFieldGet(this, _SelectorPicker_handleBindingCalledEvent, "f"));
    await model.addBinding({
        name: BINDING_NAME,
        executionContextName: _util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME,
    });
}, _SelectorPicker_removeBindings = async function _SelectorPicker_removeBindings(target) {
    await target.runtimeAgent().invoke_removeBinding({ name: BINDING_NAME });
    const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
    _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(model);
    model.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.Events.BindingCalled, __classPrivateFieldGet(this, _SelectorPicker_handleBindingCalledEvent, "f"));
};


/***/ })

}]);