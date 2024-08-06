"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_srgb_overlay_srgbOverlay_css_js"], {
"./ui/components/srgb_overlay/srgbOverlay.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.gamut-line {\n  /* We want to show 50% white color in all themes since this is drawn over a color rectangle */\n  stroke: color-mix(in sRGB, var(--ref-palette-neutral100) 50%, transparent); /* stylelint-disable-line plugin/use_theme_colors */\n  fill: none;\n}\n\n.label {\n  position: absolute;\n  bottom: 3px;\n  margin-right: 5px;\n  /* We want to show 50% white color in all themes since this is drawn over a color rectangle */\n  color: color-mix(in sRGB, var(--ref-palette-neutral100) 50%, transparent); /* stylelint-disable-line plugin/use_theme_colors */\n}\n\n/*# sourceURL=srgbOverlay.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);