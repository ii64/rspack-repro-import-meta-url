"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_recorder_recording_list_view_basic_js"], {
"./ui/components/docs/recorder_recording_list_view/basic.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/components/helpers/helpers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../panels/recorder/components/components.js */ "./panels/recorder/components/components.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var _document_getElementById;


 // eslint-disable-line rulesdir/es_modules_import
await Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/components/helpers/helpers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.initializeGlobalVars();
var component = new _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.RecordingListView.RecordingListView();
component.recordings = [
    {
        storageName: '1',
        name: 'Title 1'
    },
    {
        storageName: '2',
        name: 'Title 2'
    }
];
(_document_getElementById = document.getElementById('container')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.appendChild(component); //# sourceMappingURL=basic.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),

}]);