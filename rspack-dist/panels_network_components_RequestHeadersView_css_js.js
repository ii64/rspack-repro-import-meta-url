"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_components_RequestHeadersView_css_js"], {
"./panels/network/components/RequestHeadersView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2022 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.header {\n  background-color: var(--sys-color-surface1);\n  border-bottom: 1px solid var(--sys-color-divider);\n  border-top: 1px solid var(--sys-color-divider);\n  line-height: 25px;\n  padding: 0 5px;\n}\n\n.header::marker {\n  font-size: 11px;\n  line-height: 1;\n}\n\n.header:focus {\n  background-color: var(--sys-color-state-header-hover);\n}\n\ndetails[open] .header-count {\n  display: none;\n}\n\ndetails .hide-when-closed {\n  display: none;\n}\n\ndetails[open] .hide-when-closed {\n  display: block;\n}\n\ndetails summary input {\n  vertical-align: middle;\n}\n\n.row {\n  display: flex;\n  line-height: 20px;\n  padding-left: 8px;\n  gap: 12px;\n  user-select: text;\n}\n\ndiv.raw-headers-row {\n  display: block;\n}\n\n.row:first-of-type {\n  margin-top: 2px;\n}\n\n.row:last-child {\n  margin-bottom: 10px;\n}\n\n.header-name {\n  color: var(--sys-color-on-surface);\n  font-weight: 400;\n  width: 30%;\n  min-width: 160px;\n  max-width: 240px;\n  flex-shrink: 0;\n  text-transform: capitalize;\n}\n\n.header-value {\n  word-break: break-all;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.header-name,\n.header-value {\n  &::selection {\n    color: var(--sys-color-on-tonal-container);\n    background-color: var(--sys-color-tonal-container);\n  }\n}\n\n.green-circle::before,\n.red-circle::before,\n.yellow-circle::before {\n  content: "";\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 6px;\n  vertical-align: text-top;\n  margin-right: 2px;\n}\n\n.green-circle::before {\n  background-color: var(--sys-color-green-bright);\n}\n\n.red-circle::before {\n  background-color: var(--sys-color-error-bright);\n}\n\n.yellow-circle::before {\n  background-color: var(--issue-color-yellow);\n}\n\n.status-with-comment {\n  color: var(--sys-color-token-subtle);\n}\n\n.raw-headers {\n  font-family: var(--source-code-font-family);\n  font-size: var(--source-code-font-size);\n  white-space: pre-wrap;\n  word-break: break-all;\n}\n\n.link,\n.devtools-link {\n  color: var(--sys-color-primary);\n  text-decoration: underline;\n  cursor: pointer;\n  outline-offset: 2px;\n}\n\n.inline-icon {\n  vertical-align: middle;\n}\n\n.header-grid-container {\n  display: inline-grid;\n  grid-template-columns: 156px 50px 1fr;\n  grid-gap: 4px;\n  /* Make this fit into the same line as the summary marker */\n  width: calc(100% - 15px);\n}\n\n.header-grid-container div:last-child {\n  text-align: right;\n}\n\n.header .devtools-link {\n  color: var(--sys-color-on-surface);\n}\n\nx-link { /* stylelint-disable-line selector-type-no-unknown */\n  position: relative;\n}\n\nx-link .inline-icon { /* stylelint-disable-line selector-type-no-unknown */\n  padding-right: 3px;\n}\n\n.purple.dot::before {\n  background-color: var(--sys-color-purple-bright);\n  content: var(--image-file-empty);\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  outline: 1px solid var(--icon-gap-toolbar);\n  left: 9px;\n  position: absolute;\n  top: 11px;\n  z-index: 1;\n}\n\nsummary label input[type="checkbox"] {\n  margin-top: 1px;\n}\n\n/*# sourceURL=RequestHeadersView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);