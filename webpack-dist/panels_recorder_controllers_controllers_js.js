"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_controllers_controllers_js"],{

/***/ "./panels/recorder/controllers/SelectorPicker.js":
/*!*******************************************************!*\
  !*** ./panels/recorder/controllers/SelectorPicker.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestSelectorAttributeEvent: () => (/* binding */ RequestSelectorAttributeEvent),
/* harmony export */   SelectorPickedEvent: () => (/* binding */ SelectorPickedEvent),
/* harmony export */   SelectorPicker: () => (/* binding */ SelectorPicker)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */ var _util_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/util.js */ "./panels/recorder/util/util.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const BINDING_NAME = 'captureSelectors';
class SelectorPickedEvent extends Event {
    static eventName = 'selectorpicked';
    data;
    constructor(data) {
        super(SelectorPickedEvent.eventName, { bubbles: true, composed: true });
        this.data = data;
    }
}
class RequestSelectorAttributeEvent extends Event {
    static eventName = 'requestselectorattribute';
    send;
    constructor(send) {
        super(RequestSelectorAttributeEvent.eventName, {
            bubbles: true,
            composed: true,
        });
        this.send = send;
    }
}
class SelectorPicker {
    static get #targetManager() {
        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
    }
    #element;
    #selectorAttribute;
    #activeMutex = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex();
    active = false;
    constructor(element) {
        this.#element = element;
    }
    start = () => {
        return this.#activeMutex.run(async () => {
            if (this.active) {
                return;
            }
            this.active = true;
            this.#selectorAttribute = await new Promise((resolve, reject) => {
                const timeout = setTimeout(reject, 1000);
                this.#element.dispatchEvent(new RequestSelectorAttributeEvent(attribute => {
                    clearTimeout(timeout);
                    resolve(attribute);
                }));
            });
            SelectorPicker.#targetManager.observeTargets(this);
            this.#element.requestUpdate();
        });
    };
    stop = () => {
        return this.#activeMutex.run(async () => {
            if (!this.active) {
                return;
            }
            this.active = false;
            SelectorPicker.#targetManager.unobserveTargets(this);
            SelectorPicker.#targetManager.targets().map(this.targetRemoved.bind(this));
            this.#selectorAttribute = undefined;
            this.#element.requestUpdate();
        });
    };
    toggle = () => {
        if (!this.active) {
            return this.start();
        }
        return this.stop();
    };
    #targetMutexes = new Map();
    targetAdded(target) {
        if (target.type() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame) {
            return;
        }
        let mutex = this.#targetMutexes.get(target);
        if (!mutex) {
            mutex = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex();
            this.#targetMutexes.set(target, mutex);
        }
        void mutex.run(async () => {
            await this.#addBindings(target);
            await this.#injectApplicationScript(target);
        });
    }
    targetRemoved(target) {
        const mutex = this.#targetMutexes.get(target);
        if (!mutex) {
            return;
        }
        void mutex.run(async () => {
            try {
                await this.#injectCleanupScript(target);
                await this.#removeBindings(target);
            }
            catch {
            }
        });
    }
    #handleBindingCalledEvent = (event) => {
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
        this.#element.dispatchEvent(new SelectorPickedEvent({
            ...JSON.parse(event.data.payload),
            ..._models_models_js__WEBPACK_IMPORTED_MODULE_3__.SDKUtils.getTargetFrameContext(contextTarget, frame),
        }));
        void this.stop();
    };
    #scriptIdentifier = new Map();
    async #injectApplicationScript(target) {
        const injectedScript = await _util_util_js__WEBPACK_IMPORTED_MODULE_4__.InjectedScript.get();
        const script = `${injectedScript};DevToolsRecorder.startSelectorPicker({getAccessibleName, getAccessibleRole}, ${JSON.stringify(this.#selectorAttribute ? this.#selectorAttribute : undefined)}, ${_util_util_js__WEBPACK_IMPORTED_MODULE_4__.isDebugBuild})`;
        const [{ identifier }] = await Promise.all([
            target.pageAgent().invoke_addScriptToEvaluateOnNewDocument({
                source: script,
                worldName: _util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME,
                includeCommandLineAPI: true,
            }),
            _models_models_js__WEBPACK_IMPORTED_MODULE_3__.SDKUtils.evaluateInAllFrames(_util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME, target, script),
        ]);
        this.#scriptIdentifier.set(target, identifier);
    }
    async #injectCleanupScript(target) {
        const identifier = this.#scriptIdentifier.get(target);
        _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(identifier);
        this.#scriptIdentifier.delete(target);
        await target.pageAgent().invoke_removeScriptToEvaluateOnNewDocument({ identifier });
        const script = 'DevToolsRecorder.stopSelectorPicker()';
        await _models_models_js__WEBPACK_IMPORTED_MODULE_3__.SDKUtils.evaluateInAllFrames(_util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME, target, script);
    }
    async #addBindings(target) {
        const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
        _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(model);
        model.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.Events.BindingCalled, this.#handleBindingCalledEvent);
        await model.addBinding({
            name: BINDING_NAME,
            executionContextName: _util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME,
        });
    }
    async #removeBindings(target) {
        await target.runtimeAgent().invoke_removeBinding({ name: BINDING_NAME });
        const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
        _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(model);
        model.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.Events.BindingCalled, this.#handleBindingCalledEvent);
    }
}
//# sourceMappingURL=SelectorPicker.js.map

/***/ }),

/***/ "./panels/recorder/controllers/controllers.js":
/*!****************************************************!*\
  !*** ./panels/recorder/controllers/controllers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectorPicker: () => (/* reexport module object */ _SelectorPicker_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _SelectorPicker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectorPicker.js */ "./panels/recorder/controllers/SelectorPicker.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=controllers.js.map

/***/ })

}]);