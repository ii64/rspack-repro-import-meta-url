"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_callStackSidebarPane_css_js"], {
"./panels/sources/callStackSidebarPane.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.call-frame-warnings-message {\n  text-align: center;\n  font-style: italic;\n  padding: 4px;\n  color: var(--sys-color-on-surface-yellow);\n  background-color: var(--sys-color-surface-yellow);\n}\n\n.ignore-listed-message {\n  padding: 1px;\n}\n\n.ignore-listed-message-label {\n  color: var(--sys-color-token-subtle);\n  align-items: center;\n  display: flex;\n}\n\n.show-more-message > .link {\n  margin-left: 5px;\n}\n\n.show-more-message {\n  text-align: center;\n  font-style: italic;\n  padding: 4px;\n  border-top: 1px solid var(--sys-color-divider);\n}\n\n.call-frame-item {\n  padding: 3px 8px 3px 20px;\n  position: relative;\n  min-height: 18px;\n  line-height: 15px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.call-frame-title-text {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.async-header + .call-frame-item {\n  border-top: 0;\n}\n\n.call-frame-item:not(.async-header) {\n  border-top: 1px solid var(--sys-color-divider);\n}\n\n.call-frame-item-title,\n.call-frame-location {\n  display: flex;\n  white-space: nowrap;\n}\n\n.async-header .call-frame-item-title {\n  font-weight: bold;\n  color: var(--sys-color-on-surface);\n  background-color: var(--sys-color-cdt-base-container);\n  margin-left: -5px;\n  padding: 0 5px;\n  z-index: 1;\n}\n\n.call-frame-item:focus-visible,\n.call-frame-item.async-header:focus-visible .call-frame-item-title {\n  background-color: var(--sys-color-tonal-container);\n}\n\n.ignore-listed-checkbox:focus-visible {\n  outline-width: unset;\n}\n\n.call-frame-item:not(.async-header):hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\n.call-frame-location {\n  color: var(--sys-color-token-subtle);\n  margin-left: auto;\n  padding: 0 10px;\n}\n\n.async-header::before {\n  content: " ";\n  width: 100%;\n  border-top: 1px solid var(--sys-color-divider);\n  margin-top: 8px;\n  position: absolute;\n  left: 0;\n}\n\n.ignore-listed-call-frame {\n  opacity: 60%;\n  font-style: italic;\n}\n\n.selected-call-frame-icon {\n  display: none;\n  position: absolute;\n  top: 3px;\n  left: 4px;\n}\n\n.call-frame-item.selected .selected-call-frame-icon {\n  display: block;\n}\n\n.call-frame-warning-icon {\n  display: block;\n  position: absolute;\n  top: 3px;\n  right: 4px;\n}\n\n@media (forced-colors: active) {\n  .call-frame-item:focus-visible,\n  .call-frame-item:not(.async-header):hover {\n    forced-color-adjust: none;\n    background-color: Highlight;\n  }\n\n  .call-frame-item:focus-visible *,\n  .call-frame-item:not(.async-header):hover * {\n    color: HighlightText;\n  }\n}\n\n/*# sourceURL=callStackSidebarPane.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);