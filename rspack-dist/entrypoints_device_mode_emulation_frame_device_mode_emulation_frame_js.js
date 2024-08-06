"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_device_mode_emulation_frame_device_mode_emulation_frame_js"], {
"./entrypoints/device_mode_emulation_frame/device_mode_emulation_frame.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_dom_extension_dom_extension_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/dom_extension/dom_extension.js */ "./core/dom_extension/dom_extension.js");
/* harmony import */var _Images_Images_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Images/Images.js */ "./Images/Images.js");
/* harmony import */var _Images_Images_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Images_Images_js__WEBPACK_IMPORTED_MODULE_1__);
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


if (window.opener) {
    // @ts-ignore TypeScript doesn't know about `Emulation` on `Window`.
    var app = window.opener.Emulation.AdvancedApp.instance();
    app.deviceModeEmulationFrameLoaded(document);
} //# sourceMappingURL=device_mode_emulation_frame.js.map


}),

}]);