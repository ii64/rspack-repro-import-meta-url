"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_web_audio_WebAudioModel_ts"],{

/***/ "./src/panels/web_audio/WebAudioModel.ts":
/*!***********************************************!*\
  !*** ./src/panels/web_audio/WebAudioModel.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   WebAudioModel: () => (/* binding */ WebAudioModel)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class WebAudioModel extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel {
    constructor(target) {
        super(target);
        Object.defineProperty(this, "enabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "agent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.enabled = false;
        this.agent = target.webAudioAgent();
        target.registerWebAudioDispatcher(this);
        // TODO(crbug.com/963510): Some OfflineAudioContexts are not uninitialized
        // properly because LifeCycleObserver::ContextDestroyed() is not fired for
        // unknown reasons. This creates inconsistency in AudioGraphTracer
        // and AudioContextSelector in DevTools.
        //
        // To resolve this inconsistency, we flush the leftover from the previous
        // frame when the current page is loaded. This call can be omitted when the
        // bug is fixed.
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.Events.FrameNavigated, this.flushContexts, this);
    }
    flushContexts() {
        this.dispatchEventToListeners(Events.ModelReset);
    }
    async suspendModel() {
        this.dispatchEventToListeners(Events.ModelSuspend);
        await this.agent.invoke_disable();
    }
    async resumeModel() {
        if (!this.enabled) {
            return Promise.resolve();
        }
        await this.agent.invoke_enable();
    }
    ensureEnabled() {
        if (this.enabled) {
            return;
        }
        void this.agent.invoke_enable();
        this.enabled = true;
    }
    contextCreated({ context }) {
        this.dispatchEventToListeners(Events.ContextCreated, context);
    }
    contextWillBeDestroyed({ contextId }) {
        this.dispatchEventToListeners(Events.ContextDestroyed, contextId);
    }
    contextChanged({ context }) {
        this.dispatchEventToListeners(Events.ContextChanged, context);
    }
    audioListenerCreated({ listener }) {
        this.dispatchEventToListeners(Events.AudioListenerCreated, listener);
    }
    audioListenerWillBeDestroyed({ listenerId, contextId }) {
        this.dispatchEventToListeners(Events.AudioListenerWillBeDestroyed, { listenerId, contextId });
    }
    audioNodeCreated({ node }) {
        this.dispatchEventToListeners(Events.AudioNodeCreated, node);
    }
    audioNodeWillBeDestroyed({ contextId, nodeId }) {
        this.dispatchEventToListeners(Events.AudioNodeWillBeDestroyed, { contextId, nodeId });
    }
    audioParamCreated({ param }) {
        this.dispatchEventToListeners(Events.AudioParamCreated, param);
    }
    audioParamWillBeDestroyed({ contextId, nodeId, paramId }) {
        this.dispatchEventToListeners(Events.AudioParamWillBeDestroyed, { contextId, nodeId, paramId });
    }
    nodesConnected({ contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex }) {
        this.dispatchEventToListeners(Events.NodesConnected, { contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex });
    }
    nodesDisconnected({ contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex }) {
        this.dispatchEventToListeners(Events.NodesDisconnected, { contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex });
    }
    nodeParamConnected({ contextId, sourceId, destinationId, sourceOutputIndex }) {
        this.dispatchEventToListeners(Events.NodeParamConnected, { contextId, sourceId, destinationId, sourceOutputIndex });
    }
    nodeParamDisconnected({ contextId, sourceId, destinationId, sourceOutputIndex }) {
        this.dispatchEventToListeners(Events.NodeParamDisconnected, { contextId, sourceId, destinationId, sourceOutputIndex });
    }
    async requestRealtimeData(contextId) {
        const realtimeResponse = await this.agent.invoke_getRealtimeData({ contextId });
        return realtimeResponse.realtimeData;
    }
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel.register(WebAudioModel, { capabilities: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Capability.DOM, autostart: false });
var Events;
(function (Events) {
    Events["ContextCreated"] = "ContextCreated";
    Events["ContextDestroyed"] = "ContextDestroyed";
    Events["ContextChanged"] = "ContextChanged";
    Events["ModelReset"] = "ModelReset";
    Events["ModelSuspend"] = "ModelSuspend";
    Events["AudioListenerCreated"] = "AudioListenerCreated";
    Events["AudioListenerWillBeDestroyed"] = "AudioListenerWillBeDestroyed";
    Events["AudioNodeCreated"] = "AudioNodeCreated";
    Events["AudioNodeWillBeDestroyed"] = "AudioNodeWillBeDestroyed";
    Events["AudioParamCreated"] = "AudioParamCreated";
    Events["AudioParamWillBeDestroyed"] = "AudioParamWillBeDestroyed";
    Events["NodesConnected"] = "NodesConnected";
    Events["NodesDisconnected"] = "NodesDisconnected";
    Events["NodeParamConnected"] = "NodeParamConnected";
    Events["NodeParamDisconnected"] = "NodeParamDisconnected";
})(Events || (Events = {}));


/***/ })

}]);