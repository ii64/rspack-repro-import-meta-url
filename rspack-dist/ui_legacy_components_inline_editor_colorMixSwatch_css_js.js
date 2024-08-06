"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_colorMixSwatch_css_js"], {
"./ui/legacy/components/inline_editor/colorMixSwatch.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2022 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n/* stylelint-disable */\n.swatch-icon {\n  display: inline-grid;\n  inline-size: 15px;\n  grid: [stack] 1fr / [stack] 1fr;\n  margin-left: 1px;\n  margin-right: 2px;\n  color: var(--color);\n}\n\n.swatch {\n  aspect-ratio: 1 / 1;\n  display: inline-block;\n  width: 10px;\n  border-radius: 1e5px;\n  background:\n    linear-gradient(var(--color), var(--color)),\n    var(--image-file-checker);\n  box-shadow: inset 0 0 0 .5px rgb(128 128 128 / 60%);\n  grid-area: stack;\n}\n/* stylelint-enable */\n\n.swatch-right {\n  justify-self: end;\n}\n\n.swatch-mix {\n  box-shadow: none;\n  justify-self: end;\n  mask: radial-gradient(circle at 0% center, rgb(0 0 0) 50%, rgb(0 0 0 / 0%) calc(50% + 0.5px));\n}\n\n/*# sourceURL=colorMixSwatch.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);