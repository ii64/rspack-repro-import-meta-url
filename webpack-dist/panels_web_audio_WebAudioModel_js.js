"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_web_audio_WebAudioModel_js"],{

/***/ "./panels/web_audio/WebAudioModel.js":
/*!*******************************************!*\
  !*** ./panels/web_audio/WebAudioModel.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebAudioModel: () => (/* binding */ WebAudioModel)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class WebAudioModel extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel {
    enabled;
    agent;
    constructor(target) {
        super(target);
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
        this.dispatchEventToListeners("ModelReset" /* Events.ModelReset */);
    }
    async suspendModel() {
        this.dispatchEventToListeners("ModelSuspend" /* Events.ModelSuspend */);
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
        this.dispatchEventToListeners("ContextCreated" /* Events.ContextCreated */, context);
    }
    contextWillBeDestroyed({ contextId }) {
        this.dispatchEventToListeners("ContextDestroyed" /* Events.ContextDestroyed */, contextId);
    }
    contextChanged({ context }) {
        this.dispatchEventToListeners("ContextChanged" /* Events.ContextChanged */, context);
    }
    audioListenerCreated({ listener }) {
        this.dispatchEventToListeners("AudioListenerCreated" /* Events.AudioListenerCreated */, listener);
    }
    audioListenerWillBeDestroyed({ listenerId, contextId }) {
        this.dispatchEventToListeners("AudioListenerWillBeDestroyed" /* Events.AudioListenerWillBeDestroyed */, { listenerId, contextId });
    }
    audioNodeCreated({ node }) {
        this.dispatchEventToListeners("AudioNodeCreated" /* Events.AudioNodeCreated */, node);
    }
    audioNodeWillBeDestroyed({ contextId, nodeId }) {
        this.dispatchEventToListeners("AudioNodeWillBeDestroyed" /* Events.AudioNodeWillBeDestroyed */, { contextId, nodeId });
    }
    audioParamCreated({ param }) {
        this.dispatchEventToListeners("AudioParamCreated" /* Events.AudioParamCreated */, param);
    }
    audioParamWillBeDestroyed({ contextId, nodeId, paramId }) {
        this.dispatchEventToListeners("AudioParamWillBeDestroyed" /* Events.AudioParamWillBeDestroyed */, { contextId, nodeId, paramId });
    }
    nodesConnected({ contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex }) {
        this.dispatchEventToListeners("NodesConnected" /* Events.NodesConnected */, { contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex });
    }
    nodesDisconnected({ contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex }) {
        this.dispatchEventToListeners("NodesDisconnected" /* Events.NodesDisconnected */, { contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex });
    }
    nodeParamConnected({ contextId, sourceId, destinationId, sourceOutputIndex }) {
        this.dispatchEventToListeners("NodeParamConnected" /* Events.NodeParamConnected */, { contextId, sourceId, destinationId, sourceOutputIndex });
    }
    nodeParamDisconnected({ contextId, sourceId, destinationId, sourceOutputIndex }) {
        this.dispatchEventToListeners("NodeParamDisconnected" /* Events.NodeParamDisconnected */, { contextId, sourceId, destinationId, sourceOutputIndex });
    }
    async requestRealtimeData(contextId) {
        const realtimeResponse = await this.agent.invoke_getRealtimeData({ contextId });
        return realtimeResponse.realtimeData;
    }
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel.register(WebAudioModel, { capabilities: 2 /* SDK.Target.Capability.DOM */, autostart: false });
//# sourceMappingURL=WebAudioModel.js.map

/***/ })

}]);