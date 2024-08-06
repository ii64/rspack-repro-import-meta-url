"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_lighthouse_lighthouse_js"], {
"./panels/lighthouse/LighthouseReporterTypes.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LighthouseReportGenerator: function() { return LighthouseReportGenerator; }
});
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var LighthouseReportGenerator = /*#__PURE__*/ function() {
    "use strict";
    function LighthouseReportGenerator() {
        _class_call_check(this, LighthouseReportGenerator);
    }
    _create_class(LighthouseReportGenerator, [
        {
            key: "generateReportHtml",
            value: function generateReportHtml(_lhr) {
                return '';
            }
        }
    ]);
    return LighthouseReportGenerator;
} //# sourceMappingURL=LighthouseReporterTypes.js.map
();


}),
"./panels/lighthouse/lighthouse.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LighthouseController: function() { return /* reexport module object */ _LighthouseController_js__WEBPACK_IMPORTED_MODULE_1__; },
  LighthousePanel: function() { return /* reexport module object */ _LighthousePanel_js__WEBPACK_IMPORTED_MODULE_2__; },
  LighthouseProtocolService: function() { return /* reexport module object */ _LighthouseProtocolService_js__WEBPACK_IMPORTED_MODULE_3__; },
  LighthouseReportRenderer: function() { return /* reexport module object */ _LighthouseReportRenderer_js__WEBPACK_IMPORTED_MODULE_5__; },
  LighthouseReportSelector: function() { return /* reexport module object */ _LighthouseReportSelector_js__WEBPACK_IMPORTED_MODULE_6__; },
  LighthouseReporterTypes: function() { return /* reexport module object */ _LighthouseReporterTypes_js__WEBPACK_IMPORTED_MODULE_4__; },
  LighthouseStartView: function() { return /* reexport module object */ _LighthouseStartView_js__WEBPACK_IMPORTED_MODULE_7__; },
  LighthouseStatusView: function() { return /* reexport module object */ _LighthouseStatusView_js__WEBPACK_IMPORTED_MODULE_8__; },
  RadioSetting: function() { return /* reexport module object */ _RadioSetting_js__WEBPACK_IMPORTED_MODULE_9__; }
});
/* harmony import */var _third_party_lighthouse_report_assets_report_generator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/lighthouse/report-assets/report-generator.mjs */ "./third_party/lighthouse/report-assets/report-generator.mjs");
/* harmony import */var _LighthouseController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LighthouseController.js */ "./panels/lighthouse/LighthouseController.js");
/* harmony import */var _LighthousePanel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LighthousePanel.js */ "./panels/lighthouse/LighthousePanel.js");
/* harmony import */var _LighthouseProtocolService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LighthouseProtocolService.js */ "./panels/lighthouse/LighthouseProtocolService.js");
/* harmony import */var _LighthouseReporterTypes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LighthouseReporterTypes.js */ "./panels/lighthouse/LighthouseReporterTypes.js");
/* harmony import */var _LighthouseReportRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LighthouseReportRenderer.js */ "./panels/lighthouse/LighthouseReportRenderer.js");
/* harmony import */var _LighthouseReportSelector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LighthouseReportSelector.js */ "./panels/lighthouse/LighthouseReportSelector.js");
/* harmony import */var _LighthouseStartView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LighthouseStartView.js */ "./panels/lighthouse/LighthouseStartView.js");
/* harmony import */var _LighthouseStatusView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LighthouseStatusView.js */ "./panels/lighthouse/LighthouseStatusView.js");
/* harmony import */var _RadioSetting_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RadioSetting.js */ "./panels/lighthouse/RadioSetting.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










 //# sourceMappingURL=lighthouse.js.map


}),

}]);