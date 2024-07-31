"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_models_ScreenshotUtils_ts"],{

/***/ "./src/panels/recorder/models/ScreenshotUtils.ts":
/*!*******************************************************!*\
  !*** ./src/panels/recorder/models/ScreenshotUtils.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resizeScreenshot: () => (/* binding */ resizeScreenshot),
/* harmony export */   takeScreenshot: () => (/* binding */ takeScreenshot)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const SCREENSHOT_WIDTH = 160; // px
const SCREENSHOT_MAX_HEIGHT = 240; // px
async function captureScreenshot() {
    const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().primaryPageTarget();
    if (!mainTarget) {
        throw new Error('Could not find main target');
    }
    const { data } = await mainTarget.pageAgent().invoke_captureScreenshot({});
    if (!data) {
        // 1x1 px empty image.
        return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    }
    return ('data:image/png;base64,' + data);
}
async function resizeScreenshot(data) {
    const img = new Image();
    const promise = new Promise(resolve => {
        img.onload = resolve;
    });
    img.src = data;
    await promise;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) {
        throw new Error('Could not create context.');
    }
    const aspectRatio = img.width / img.height;
    canvas.width = SCREENSHOT_WIDTH;
    canvas.height = Math.min(SCREENSHOT_MAX_HEIGHT, SCREENSHOT_WIDTH / aspectRatio);
    const bitmap = await createImageBitmap(img, {
        resizeWidth: SCREENSHOT_WIDTH,
        resizeQuality: 'high',
    });
    context.drawImage(bitmap, 0, 0);
    return canvas.toDataURL('image/png');
}
async function takeScreenshot() {
    const data = await captureScreenshot();
    return await resizeScreenshot(data);
}


/***/ })

}]);