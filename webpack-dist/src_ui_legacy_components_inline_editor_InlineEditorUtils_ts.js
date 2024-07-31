"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_inline_editor_InlineEditorUtils_ts"],{

/***/ "./src/ui/legacy/components/inline_editor/InlineEditorUtils.ts":
/*!*********************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/InlineEditorUtils.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValueChangedEvent: () => (/* binding */ ValueChangedEvent)
/* harmony export */ });
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ValueChangedEvent extends Event {
    constructor(value) {
        super(ValueChangedEvent.eventName, {});
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = { value };
    }
}
Object.defineProperty(ValueChangedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'valuechanged'
});


/***/ })

}]);