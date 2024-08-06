"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_breadcrumbs_perf_initial-breadcrumb-perf_js"], {
"./ui/components/docs/breadcrumbs_perf/initial-breadcrumb-perf.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/models/trace/trace.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/panels/timeline/components/components.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var _document_getElementById;


var breadcrumbsUI = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/panels/timeline/components/components.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
(_document_getElementById = document.getElementById('container')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.appendChild(breadcrumbsUI);
var traceWindow = {
    min: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/models/trace/trace.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(3),
    max: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/models/trace/trace.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(9),
    range: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/models/trace/trace.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(6)
};
var breadcrumb = {
    window: traceWindow,
    child: null
};
breadcrumbsUI.data = {
    breadcrumb: breadcrumb
}; //# sourceMappingURL=initial-breadcrumb-perf.js.map


}),

}]);