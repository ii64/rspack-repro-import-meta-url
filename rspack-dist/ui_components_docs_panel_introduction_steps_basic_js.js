"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_panel_introduction_steps_basic_js"], {
"./ui/components/docs/panel_introduction_steps/basic.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/panel_introduction_steps/panel_introduction_steps.js */ "./ui/components/panel_introduction_steps/panel_introduction_steps.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n<",
        '>\n<span slot="title">Get actionable insights on your website\'s performance</span>\n<span slot="step-1">Record or import a trace into the Performance Insights panel</span>\n<span slot="step-2">Get an overview of your page’s runtime performance</span>\n<span slot="step-3">Identify improvements to your performance via a list of actionable insights</span>\n</',
        ">\n                 "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}




await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
var container = document.getElementById('container');
if (container) {
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html(_templateObject(), _components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_1__.PanelIntroductionSteps.PanelIntroductionSteps.litTagName, _components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_1__.PanelIntroductionSteps.PanelIntroductionSteps.litTagName), container, {
        host: undefined
    });
} //# sourceMappingURL=basic.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),
"./ui/components/panel_introduction_steps/panel_introduction_steps.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PanelIntroductionSteps: function() { return /* reexport module object */ _PanelIntroductionSteps_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _PanelIntroductionSteps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PanelIntroductionSteps.js */ "./ui/components/panel_introduction_steps/PanelIntroductionSteps.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=panel_introduction_steps.js.map



}),

}]);