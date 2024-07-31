"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_issue_counter_basic_ts"],{

/***/ "./src/ui/components/docs/issue_counter/basic.ts":
/*!*******************************************************!*\
  !*** ./src/ui/components/docs/issue_counter/basic.ts ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
const IssueCounter = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../ui/components/issue_counter/issue_counter.js */ "./src/ui/components/issue_counter/issue_counter.ts"));
function appendComponent(data) {
    const component = new IssueCounter.IssueCounter.IssueCounter();
    component.data = data;
    document.getElementById('container')?.appendChild(component);
}
const mockIssueManager = {
    addEventListener() { },
    removeEventListener() { },
    numberOfIssues() {
        return 1;
    },
};
appendComponent({ issuesManager: mockIssueManager });
appendComponent({ issuesManager: mockIssueManager, clickHandler: () => { } });
appendComponent({ issuesManager: mockIssueManager, clickHandler: () => { }, compact: true });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);