"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_InlineEditorUtils_js"],{

/***/ "./ui/legacy/components/inline_editor/InlineEditorUtils.js":
/*!*****************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/InlineEditorUtils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValueChangedEvent: () => (/* binding */ ValueChangedEvent)
/* harmony export */ });
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ValueChangedEvent extends Event {
    static eventName = 'valuechanged';
    data;
    constructor(value) {
        super(ValueChangedEvent.eventName, {});
        this.data = { value };
    }
}
//# sourceMappingURL=InlineEditorUtils.js.map

/***/ })

}]);