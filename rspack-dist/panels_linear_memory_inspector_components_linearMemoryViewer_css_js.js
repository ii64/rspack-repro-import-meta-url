"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_components_linearMemoryViewer_css_js"], {
"./panels/linear_memory_inspector/components/linearMemoryViewer.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  flex: auto;\n  display: flex;\n  min-height: 20px;\n}\n\n.view {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  box-sizing: border-box;\n  background: var(--sys-color-cdt-base-container);\n  outline: none;\n}\n\n.row {\n  display: flex;\n  height: 20px;\n  align-items: center;\n}\n\n.cell {\n  text-align: center;\n  border: 1px solid transparent;\n  border-radius: 2px;\n\n  &.focused-area {\n    background-color: var(--sys-color-tonal-container);\n    color: var(--sys-color-on-tonal-container);\n  }\n\n  &.selected {\n    border-color: var(--sys-color-state-focus-ring);\n    color: var(--sys-color-on-tonal-container);\n    background-color: var(--sys-color-state-focus-select);\n  }\n}\n\n.byte-cell {\n  min-width: 21px;\n  color: var(--sys-color-on-surface);\n}\n\n.byte-group-margin {\n  margin-left: var(--byte-group-margin);\n}\n\n.text-cell {\n  min-width: 14px;\n  color: var(--sys-color-on-surface-subtle);\n}\n\n.address {\n  color: var(--sys-color-state-disabled);\n}\n\n.address.selected {\n  font-weight: bold;\n  color: var(--sys-color-on-surface);\n}\n\n.divider {\n  width: 1px;\n  height: inherit;\n  background-color: var(--sys-color-divider);\n  margin: 0 4px;\n}\n\n.highlight-area {\n  background-color: var(--sys-color-surface-variant);\n}\n\n/*# sourceURL=linearMemoryViewer.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);