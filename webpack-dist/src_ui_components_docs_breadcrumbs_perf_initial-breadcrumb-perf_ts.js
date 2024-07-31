"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_breadcrumbs_perf_initial-breadcrumb-perf_ts"],{

/***/ "./src/ui/components/docs/breadcrumbs_perf/initial-breadcrumb-perf.ts":
/*!****************************************************************************!*\
  !*** ./src/ui/components/docs/breadcrumbs_perf/initial-breadcrumb-perf.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/models/trace/trace.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/panels/timeline/components/components.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const breadcrumbsUI = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/panels/timeline/components/components.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).BreadcrumbsUI();
document.getElementById('container')?.appendChild(breadcrumbsUI);
const traceWindow = {
    min: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/models/trace/trace.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Timing.MicroSeconds(3),
    max: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/models/trace/trace.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Timing.MicroSeconds(9),
    range: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/models/trace/trace.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Timing.MicroSeconds(6),
};
const breadcrumb = {
    window: traceWindow,
    child: null,
};
breadcrumbsUI.data = {
    breadcrumb: breadcrumb,
};


/***/ })

}]);