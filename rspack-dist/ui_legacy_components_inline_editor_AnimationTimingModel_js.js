"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_AnimationTimingModel_js"], {
"./ui/legacy/components/inline_editor/AnimationTimingModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnimationTimingModel: function() { return AnimationTimingModel; },
  LINEAR_BEZIER: function() { return LINEAR_BEZIER; }
});
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSLinearEasingModel.js */ "./ui/legacy/components/inline_editor/CSSLinearEasingModel.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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


// Provides a unified interface for both linear easing and cubic bezier
// models and handles the parsing for animation-timing texts.
var AnimationTimingModel = /*#__PURE__*/ function() {
    "use strict";
    function AnimationTimingModel() {
        _class_call_check(this, AnimationTimingModel);
    }
    _create_class(AnimationTimingModel, null, [
        {
            key: "parse",
            value: function parse(text) {
                // Try to parse as a CSSLinearEasingModel first.
                // The reason is: `linear` keyword is valid in both
                // models, however we want to treat it as a `CSSLinearEasingModel`
                // for visualizing in animation timing tool.
                var cssLinearEasingModel = _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_1__.CSSLinearEasingModel.parse(text);
                if (cssLinearEasingModel) {
                    return cssLinearEasingModel;
                }
                return _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.CubicBezier.parse(text) || null;
            }
        }
    ]);
    return AnimationTimingModel;
}();
var LINEAR_BEZIER = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.LINEAR_BEZIER; //# sourceMappingURL=AnimationTimingModel.js.map


}),

}]);