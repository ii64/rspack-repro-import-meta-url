"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_performance_panel_network_request_tooltip_ts"],{

/***/ "./src/ui/components/docs/performance_panel/network_request_tooltip.ts":
/*!*****************************************************************************!*\
  !*** ./src/ui/components/docs/performance_panel/network_request_tooltip.ts ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panels_timeline_components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../panels/timeline/components/components.js */ "./src/panels/timeline/components/components.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.initializeGlobalVars();
await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ComponentServerSetup.setup();
/**
 * Render tooltip for a basic network request
 **/
async function renderTooltips1() {
    const container = document.querySelector('#container1');
    if (!container) {
        throw new Error('No container');
    }
    const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(/* mocha context */ null, 'lcp-images.json.gz');
    const networkEvent = traceData.NetworkRequests.byTime[0];
    const tooltip = new _panels_timeline_components_components_js__WEBPACK_IMPORTED_MODULE_0__.NetworkRequestTooltip.NetworkRequestTooltip();
    tooltip.networkRequest = networkEvent;
    container.appendChild(tooltip);
}
/**
 * Render tooltip for a render-blocking network request
 **/
async function renderTooltips2() {
    const container = document.querySelector('#container2');
    if (!container) {
        throw new Error('No container');
    }
    const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(/* mocha context */ null, 'render-blocking-in-iframe.json.gz');
    const networkEvent = traceData.NetworkRequests.byTime[1];
    const tooltip = new _panels_timeline_components_components_js__WEBPACK_IMPORTED_MODULE_0__.NetworkRequestTooltip.NetworkRequestTooltip();
    tooltip.networkRequest = networkEvent;
    container.appendChild(tooltip);
}
/**
 * Render tooltip for a priority changed network request
 **/
async function renderTooltips3() {
    const container = document.querySelector('#container3');
    if (!container) {
        throw new Error('No container');
    }
    const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(/* mocha context */ null, 'changing-priority.json.gz');
    const networkEvent = traceData.NetworkRequests.byTime.find(request => {
        return request.args.data.url === 'https://via.placeholder.com/3000.jpg';
    });
    if (!networkEvent) {
        throw new Error('The priority change event is not found');
    }
    const tooltip = new _panels_timeline_components_components_js__WEBPACK_IMPORTED_MODULE_0__.NetworkRequestTooltip.NetworkRequestTooltip();
    tooltip.networkRequest = networkEvent;
    container.appendChild(tooltip);
}
await renderTooltips1();
await renderTooltips2();
await renderTooltips3();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);