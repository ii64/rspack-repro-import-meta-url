"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_testing_FileManagerHelpers_ts"],{

/***/ "./src/testing/FileManagerHelpers.ts":
/*!*******************************************!*\
  !*** ./src/testing/FileManagerHelpers.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stubFileManager: () => (/* binding */ stubFileManager)
/* harmony export */ });
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function stubFileManager() {
    const fileManager = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__.FileManager.FileManager.instance();
    sinon.stub(fileManager, 'save').callsFake(async (file, _2, _3) => ({ fileSystemPath: file }));
    sinon.stub(fileManager, 'append').callsFake(file => {
        fileManager.dispatchEventToListeners(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__.FileManager.Events.AppendedToURL, file);
    });
    sinon.stub(fileManager, 'close');
    return fileManager;
}


/***/ })

}]);