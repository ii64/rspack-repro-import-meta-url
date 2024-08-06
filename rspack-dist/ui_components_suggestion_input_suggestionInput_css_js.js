"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_suggestion_input_suggestionInput_css_js"], {
"./ui/components/suggestion_input/suggestionInput.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  box-sizing: border-box;\n  font-size: inherit;\n  margin: 0;\n  padding: 0;\n}\n\n:host {\n  position: relative;\n}\n\ndevtools-editable-content {\n  background: transparent;\n  border: none;\n  color: var(--override-color-recorder-input, var(--sys-color-on-surface));\n  cursor: text;\n  display: inline-block;\n  line-height: 18px;\n  min-height: 18px;\n  min-width: 0.5em;\n  outline: none;\n  overflow-wrap: anywhere;\n}\n\ndevtools-editable-content:hover,\ndevtools-editable-content:focus {\n  box-shadow: 0 0 0 1px var(--sys-color-divider);\n  border-radius: 2px;\n}\n\ndevtools-editable-content[placeholder]:empty::before {\n  content: attr(placeholder);\n  color: var(--sys-color-on-surface);\n  opacity: 50%;\n}\n\ndevtools-editable-content[placeholder]:empty:focus::before {\n  content: "";\n}\n\ndevtools-suggestion-box {\n  position: absolute;\n  display: none;\n}\n\ndevtools-editable-content:focus ~ devtools-suggestion-box {\n  display: block;\n}\n\n.suggestions {\n  background-color: var(--sys-color-cdt-base-container);\n  box-shadow: var(--drop-shadow);\n  min-height: 1em;\n  min-width: 150px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: relative;\n  z-index: 100;\n  max-height: 350px;\n}\n\n.suggestions > li {\n  padding: 1px;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  font-family: var(--source-code-font-family);\n  font-size: var(--source-code-font-size);\n  color: var(--sys-color-on-surface);\n}\n\n.suggestions > li:hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\n.suggestions > li.selected {\n  background-color: var(--sys-color-primary);\n  color: var(--sys-color-cdt-base-container);\n}\n\n.strikethrough {\n  text-decoration: line-through;\n}\n\n/*# sourceURL=suggestionInput.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);