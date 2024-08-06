"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_media_MediaModel_js"],{

/***/ "./panels/media/MediaModel.js":
/*!************************************!*\
  !*** ./panels/media/MediaModel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaModel: () => (/* binding */ MediaModel)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class MediaModel extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel {
    enabled;
    agent;
    constructor(target) {
        super(target);
        this.enabled = false;
        this.agent = target.mediaAgent();
        target.registerMediaDispatcher(this);
    }
    async resumeModel() {
        if (!this.enabled) {
            return Promise.resolve();
        }
        await this.agent.invoke_enable();
    }
    ensureEnabled() {
        void this.agent.invoke_enable();
        this.enabled = true;
    }
    playerPropertiesChanged(event) {
        this.dispatchEventToListeners("PlayerPropertiesChanged" /* Events.PlayerPropertiesChanged */, event);
    }
    playerEventsAdded(event) {
        this.dispatchEventToListeners("PlayerEventsAdded" /* Events.PlayerEventsAdded */, event);
    }
    playerMessagesLogged(event) {
        this.dispatchEventToListeners("PlayerMessagesLogged" /* Events.PlayerMessagesLogged */, event);
    }
    playerErrorsRaised(event) {
        this.dispatchEventToListeners("PlayerErrorsRaised" /* Events.PlayerErrorsRaised */, event);
    }
    playersCreated({ players }) {
        this.dispatchEventToListeners("PlayersCreated" /* Events.PlayersCreated */, players);
    }
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel.register(MediaModel, { capabilities: 262144 /* SDK.Target.Capability.Media */, autostart: false });
//# sourceMappingURL=MediaModel.js.map

/***/ })

}]);