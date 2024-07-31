"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_RecorderEvents_ts"],{

/***/ "./src/panels/recorder/RecorderEvents.ts":
/*!***********************************************!*\
  !*** ./src/panels/recorder/RecorderEvents.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecordingStateChangedEvent: () => (/* binding */ RecordingStateChangedEvent),
/* harmony export */   ReplayFinishedEvent: () => (/* binding */ ReplayFinishedEvent)
/* harmony export */ });
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ReplayFinishedEvent extends Event {
    constructor() {
        super(ReplayFinishedEvent.eventName, { bubbles: true, composed: true });
    }
}
Object.defineProperty(ReplayFinishedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'replayfinished'
});
class RecordingStateChangedEvent extends Event {
    constructor(recording) {
        super(RecordingStateChangedEvent.eventName, {
            bubbles: true,
            composed: true,
        });
        Object.defineProperty(this, "recording", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: recording
        });
    }
}
Object.defineProperty(RecordingStateChangedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'recordingstatechanged'
});


/***/ })

}]);