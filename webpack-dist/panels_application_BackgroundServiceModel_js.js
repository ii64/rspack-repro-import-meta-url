"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_BackgroundServiceModel_js"],{

/***/ "./panels/application/BackgroundServiceModel.js":
/*!******************************************************!*\
  !*** ./panels/application/BackgroundServiceModel.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundServiceModel: () => (/* binding */ BackgroundServiceModel),
/* harmony export */   Events: () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class BackgroundServiceModel extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel {
    backgroundServiceAgent;
    events;
    constructor(target) {
        super(target);
        this.backgroundServiceAgent = target.backgroundServiceAgent();
        target.registerBackgroundServiceDispatcher(this);
        this.events = new Map();
    }
    enable(service) {
        this.events.set(service, []);
        void this.backgroundServiceAgent.invoke_startObserving({ service });
    }
    setRecording(shouldRecord, service) {
        void this.backgroundServiceAgent.invoke_setRecording({ shouldRecord, service });
    }
    clearEvents(service) {
        this.events.set(service, []);
        void this.backgroundServiceAgent.invoke_clearEvents({ service });
    }
    getEvents(service) {
        return this.events.get(service) || [];
    }
    recordingStateChanged({ isRecording, service }) {
        this.dispatchEventToListeners(Events.RecordingStateChanged, { isRecording, serviceName: service });
    }
    backgroundServiceEventReceived({ backgroundServiceEvent }) {
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // @ts-expect-error
        this.events.get(backgroundServiceEvent.service).push(backgroundServiceEvent);
        this.dispatchEventToListeners(Events.BackgroundServiceEventReceived, backgroundServiceEvent);
    }
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel.register(BackgroundServiceModel, { capabilities: 1 /* SDK.Target.Capability.Browser */, autostart: false });
var Events;
(function (Events) {
    Events["RecordingStateChanged"] = "RecordingStateChanged";
    Events["BackgroundServiceEventReceived"] = "BackgroundServiceEventReceived";
})(Events || (Events = {}));
//# sourceMappingURL=BackgroundServiceModel.js.map

/***/ })

}]);