"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_media_MediaModel_ts"],{

/***/ "./src/panels/media/MediaModel.ts":
/*!****************************************!*\
  !*** ./src/panels/media/MediaModel.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   MediaModel: () => (/* binding */ MediaModel)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var Events;
(function (Events) {
    Events["PlayerPropertiesChanged"] = "PlayerPropertiesChanged";
    Events["PlayerEventsAdded"] = "PlayerEventsAdded";
    Events["PlayerMessagesLogged"] = "PlayerMessagesLogged";
    Events["PlayerErrorsRaised"] = "PlayerErrorsRaised";
    Events["PlayersCreated"] = "PlayersCreated";
})(Events || (Events = {}));
class MediaModel extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel {
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
        this.dispatchEventToListeners(Events.PlayerPropertiesChanged, event);
    }
    playerEventsAdded(event) {
        this.dispatchEventToListeners(Events.PlayerEventsAdded, event);
    }
    playerMessagesLogged(event) {
        this.dispatchEventToListeners(Events.PlayerMessagesLogged, event);
    }
    playerErrorsRaised(event) {
        this.dispatchEventToListeners(Events.PlayerErrorsRaised, event);
    }
    playersCreated({ players }) {
        this.dispatchEventToListeners(Events.PlayersCreated, players);
    }
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel.register(MediaModel, { capabilities: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Capability.Media, autostart: false });


/***/ })

}]);