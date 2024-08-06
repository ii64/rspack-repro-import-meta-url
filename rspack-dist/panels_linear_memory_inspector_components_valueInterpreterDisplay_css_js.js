"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_components_valueInterpreterDisplay_css_js"], {
"./panels/linear_memory_inspector/components/valueInterpreterDisplay.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  flex: auto;\n  display: flex;\n}\n\n.value-types {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto auto 1fr;\n  gap: 4px 24px;\n  min-height: 24px;\n  overflow: hidden;\n  padding: 2px 12px;\n  align-items: baseline;\n  justify-content: start;\n}\n\n.value-type-cell {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 24px;\n}\n\n.value-type-value-with-link {\n  display: flex;\n  align-items: center;\n}\n\n.value-type-cell-no-mode {\n  grid-column: 1 / 3;\n}\n\n.jump-to-button {\n  display: flex;\n  width: 20px;\n  height: 20px;\n  border: none;\n  padding: 0;\n  outline: none;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n.signed-divider {\n  width: 1px;\n  height: 15px;\n  background-color: var(--sys-color-divider);\n  margin: 0 4px;\n}\n\n.selectable-text {\n  user-select: text;\n}\n\n.selectable-text::selection {\n  background-color: var(--sys-color-tonal-container);\n}\n\n/*# sourceURL=valueInterpreterDisplay.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);