"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["testing_LanguagePluginHelpers_js"],{

/***/ "./testing/LanguagePluginHelpers.js":
/*!******************************************!*\
  !*** ./testing/LanguagePluginHelpers.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestPlugin: () => (/* binding */ TestPlugin)
/* harmony export */ });
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class TestPlugin {
    constructor(name) {
        this.name = name;
    }
    name;
    handleScript(_script) {
        return false;
    }
    createPageResourceLoadInitiator() {
        const extensionId = 'chrome-extension-id';
        return {
            target: null,
            frameId: null,
            extensionId,
            initiatorUrl: extensionId,
        };
    }
    async evaluate(_expression, _context, _stopId) {
        return null;
    }
    async getProperties(_objectId) {
        return [];
    }
    async releaseObject(_objectId) {
    }
    async addRawModule(_rawModuleId, _symbolsURL, _rawModule) {
        return [];
    }
    async sourceLocationToRawLocation(_sourceLocation) {
        return [];
    }
    async rawLocationToSourceLocation(_rawLocation) {
        return [];
    }
    async getScopeInfo(type) {
        return { type, typeName: type };
    }
    async listVariablesInScope(_rawLocation) {
        return [];
    }
    async removeRawModule(_rawModuleId) {
    }
    async getFunctionInfo(_rawLocation) {
        return { frames: [] };
    }
    async getInlinedFunctionRanges(_rawLocation) {
        return [];
    }
    async getInlinedCalleesRanges(_rawLocation) {
        return [];
    }
    async getMappedLines(_rawModuleId, _sourceFileURL) {
        return undefined;
    }
}
//# sourceMappingURL=LanguagePluginHelpers.js.map

/***/ })

}]);