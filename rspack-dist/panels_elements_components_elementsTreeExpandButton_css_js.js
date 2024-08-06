"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_elementsTreeExpandButton_css_js"], {
"./panels/elements/components/elementsTreeExpandButton.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2022 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n:host(.hidden) {\n  display: none;\n}\n\n.expand-button {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  width: 14px;\n  height: 10px;\n  margin: 0 2px;\n  border: 1px solid var(--override-adorner-border-color, var(--sys-color-tonal-outline));\n  border-radius: 10px;\n  background: var(--override-adorner-background-color, var(--sys-color-cdt-base-container));\n  padding: 0;\n  position: relative;\n\n  &:hover::after,\n  &:active::before {\n    content: "";\n    height: 100%;\n    width: 100%;\n    border-radius: inherit;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  &:hover::after {\n    background-color: var(--sys-color-state-hover-on-subtle);\n  }\n\n  &:active::before {\n    background-color: var(--sys-color-state-ripple-neutral-on-subtle);\n  }\n}\n\n.expand-button devtools-icon {\n  width: 14px;\n  height: 14px;\n  color: var(--sys-color-primary);\n}\n\n/*# sourceURL=elementsTreeExpandButton.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);