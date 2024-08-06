"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_components_HeaderSectionRow_css_js"], {
"./panels/network/components/HeaderSectionRow.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2022 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  display: block;\n}\n\n.row {\n  display: flex;\n  line-height: 20px;\n  padding-left: 8px;\n  gap: 12px;\n  user-select: text;\n}\n\n.row.header-editable {\n  font-family: var(--monospace-font-family);\n  font-size: var(--monospace-font-size);\n}\n\n.header-name {\n  color: var(--sys-color-on-surface);\n  font-weight: 400;\n  width: 30%;\n  min-width: 160px;\n  max-width: 240px;\n  flex-shrink: 0;\n  text-transform: capitalize;\n  overflow-wrap: break-word;\n}\n\n.header-name,\n.header-value {\n  &::selection {\n    color: var(--sys-color-on-tonal-container);\n    background-color: var(--sys-color-tonal-container);\n  }\n}\n\n.header-name.pseudo-header {\n  text-transform: none;\n}\n\n.header-editable .header-name {\n  color: var(--sys-color-token-property-special);\n}\n\n.row.header-deleted .header-name {\n  color: var(--sys-color-token-subtle);\n}\n\n.header-value {\n  display: flex;\n  overflow-wrap: anywhere;\n  margin-inline-end: 14px;\n}\n\n.header-badge-text {\n  font-variant: small-caps;\n  font-weight: 500;\n  white-space: pre-wrap;\n  word-break: break-all;\n  text-transform: none;\n}\n\n.header-badge {\n  display: inline;\n  background-color: var(--sys-color-error);\n  color: var(--sys-color-on-error);\n  border-radius: 100vh;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n\n.call-to-action {\n  background-color: var(--sys-color-neutral-container);\n  padding: 8px;\n  border-radius: 5px;\n  margin: 4px;\n}\n\n.call-to-action-body {\n  padding: 6px 0;\n  margin-left: 9.5px;\n  border-left: 2px solid var(--issue-color-yellow);\n  padding-left: 18px;\n  line-height: 20px;\n}\n\n.call-to-action .explanation {\n  font-weight: bold;\n}\n\n.call-to-action code {\n  font-size: 90%;\n}\n\n.call-to-action .example .comment::before {\n  content: " — ";\n}\n\n.link,\n.devtools-link {\n  color: var(--sys-color-primary);\n  text-decoration: underline;\n  cursor: pointer;\n  outline-offset: 2px;\n}\n\n.explanation .link {\n  font-weight: normal;\n}\n\n.inline-icon {\n  vertical-align: middle;\n}\n\n.row-flex-icon {\n  margin: 2px 5px 0;\n}\n\n.header-value code {\n  display: block;\n  white-space: pre-wrap;\n  font-size: 90%;\n  color: var(--sys-color-token-subtle);\n}\n\nx-link .inline-icon { /* stylelint-disable-line selector-type-no-unknown */\n  padding-right: 3px;\n}\n\n.header-highlight {\n  background-color: var(--sys-color-yellow-container);\n}\n\n.header-warning {\n  color: var(--sys-color-error);\n}\n\n.header-overridden {\n  background-color: var(--sys-color-tertiary-container);\n  border-left: 3px solid var(--sys-color-tertiary);\n  padding-left: 5px;\n}\n\n.header-deleted {\n  background-color: var(--sys-color-surface-error);\n  border-left: 3px solid var(--sys-color-error-bright);\n  color: var(--sys-color-token-subtle);\n  text-decoration: line-through;\n}\n\n.header-highlight.header-overridden {\n  background-color: var(--sys-color-yellow-container);\n  border-left: 3px solid var(--sys-color-tertiary);\n  padding-left: 5px;\n}\n\n.inline-button {\n  vertical-align: middle;\n}\n\n.row .inline-button {\n  opacity: 0%;\n  visibility: hidden;\n  transition: opacity 200ms;\n  padding-left: 2px;\n}\n\n.row.header-overridden:focus-within .inline-button,\n.row.header-overridden:hover .inline-button {\n  opacity: 100%;\n  visibility: visible;\n}\n\n.row:hover .inline-button.enable-editing {\n  opacity: 100%;\n  visibility: visible;\n}\n\n.flex-right {\n  margin-left: auto;\n}\n\n.flex-columns {\n  flex-direction: column;\n}\n\n/*# sourceURL=HeaderSectionRow.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);