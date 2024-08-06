"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_breadcrumbs_perf_nested-breadcrumbs-perf_js"], {
"./ui/components/docs/breadcrumbs_perf/nested-breadcrumbs-perf.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/models/trace/trace.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/panels/timeline/components/components.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var _document_getElementById;


var breadcrumbsUI = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/panels/timeline/components/components.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
(_document_getElementById = document.getElementById('container')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.appendChild(breadcrumbsUI);
var traceWindow2 = {
    min: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/models/trace/trace.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(4),
    max: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/models/trace/trace.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(8),
    range: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/models/trace/trace.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(4)
};
var traceWindow = {
    min: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/models/trace/trace.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(3),
    max: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/models/trace/trace.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(9),
    range: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/models/trace/trace.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(6)
};
var breadcrumb2 = {
    window: traceWindow2,
    child: null
};
var breadcrumb = {
    window: traceWindow,
    child: breadcrumb2
};
breadcrumbsUI.data = {
    breadcrumb: breadcrumb
}; //# sourceMappingURL=nested-breadcrumbs-perf.js.map


}),

}]);