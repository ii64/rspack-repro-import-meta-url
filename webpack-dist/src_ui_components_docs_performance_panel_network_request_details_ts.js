"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_performance_panel_network_request_details_ts"],{

/***/ "./src/ui/components/docs/performance_panel/network_request_details.ts":
/*!*****************************************************************************!*\
  !*** ./src/ui/components/docs/performance_panel/network_request_details.ts ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panels_timeline_components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../panels/timeline/components/components.js */ "./src/panels/timeline/components/components.ts");
/* harmony import */ var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../panels/timeline/timeline.js */ "./src/panels/timeline/timeline.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.initializeGlobalVars();
await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_5__.ComponentServerSetup.setup();
const detailsLinkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.Linkifier.Linkifier();
/**
 * Render details for a basic network request
 **/
async function renderDetails() {
    const container = document.querySelector('#container');
    if (!container) {
        throw new Error('No container');
    }
    const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(/* mocha context */ null, 'lcp-images.json.gz');
    const networkEvent = traceData.NetworkRequests.byTime[0];
    const maybeTarget = _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_1__.TargetForEvent.targetForEvent(traceData, networkEvent);
    const details = new _panels_timeline_components_components_js__WEBPACK_IMPORTED_MODULE_0__.NetworkRequestDetails.NetworkRequestDetails(detailsLinkifier);
    await details.setData(networkEvent, maybeTarget);
    container.appendChild(details);
}
await renderDetails();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);