"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_lighthouse_LighthouseReporterTypes_js"], {
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

}]);