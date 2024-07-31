"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_device_mode_emulation_frame_device_mode_emulation_frame_ts"],{

/***/ "./src/entrypoints/device_mode_emulation_frame/device_mode_emulation_frame.ts":
/*!************************************************************************************!*\
  !*** ./src/entrypoints/device_mode_emulation_frame/device_mode_emulation_frame.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_dom_extension_dom_extension_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/dom_extension/dom_extension.js */ "./src/core/dom_extension/dom_extension.ts");
/* harmony import */ var _Images_Images_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Images/Images.js */ "./src/Images/Images.js");
/* harmony import */ var _Images_Images_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Images_Images_js__WEBPACK_IMPORTED_MODULE_1__);
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


if (window.opener) {
    // @ts-ignore TypeScript doesn't know about `Emulation` on `Window`.
    const app = window.opener.Emulation.AdvancedApp.instance();
    app.deviceModeEmulationFrameLoaded(document);
}


/***/ })

}]);