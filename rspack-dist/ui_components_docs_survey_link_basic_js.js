"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_survey_link_basic_js"], {
"./ui/components/docs/survey_link/basic.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */var _survey_link_survey_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../survey_link/survey_link.js */ "./ui/components/survey_link/survey_link.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var _document_getElementById;




await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.initializeGlobalVars();
var link = new _survey_link_survey_link_js__WEBPACK_IMPORTED_MODULE_3__.SurveyLink.SurveyLink();
(_document_getElementById = document.getElementById('container')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.appendChild(link);
// TODO(petermarshall): The icon doesn't render because importing sub-components cross-module
// is tricky. Add some more interesting examples once it does.
link.data = {
    trigger: 'test trigger',
    promptText: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.UIString.LocalizedEmptyString,
    canShowSurvey: function(trigger, callback) {
        setTimeout(callback.bind(undefined, {
            canShowSurvey: true
        }), 500);
    },
    showSurvey: function(trigger, callback) {
        setTimeout(callback.bind(undefined, {
            surveyShown: true
        }), 1500);
    }
}; //# sourceMappingURL=basic.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),
"./ui/components/survey_link/survey_link.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SurveyLink: function() { return /* reexport module object */ _SurveyLink_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _SurveyLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SurveyLink.js */ "./ui/components/survey_link/SurveyLink.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=survey_link.js.map


}),

}]);