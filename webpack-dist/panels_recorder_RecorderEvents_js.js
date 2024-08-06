"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_RecorderEvents_js"],{

/***/ "./panels/recorder/RecorderEvents.js":
/*!*******************************************!*\
  !*** ./panels/recorder/RecorderEvents.js ***!
  \*******************************************/
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
    static eventName = 'replayfinished';
    constructor() {
        super(ReplayFinishedEvent.eventName, { bubbles: true, composed: true });
    }
}
class RecordingStateChangedEvent extends Event {
    recording;
    static eventName = 'recordingstatechanged';
    constructor(recording) {
        super(RecordingStateChangedEvent.eventName, {
            bubbles: true,
            composed: true,
        });
        this.recording = recording;
    }
}
//# sourceMappingURL=RecorderEvents.js.map

/***/ })

}]);