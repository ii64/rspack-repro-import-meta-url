"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_security_mainView_css_js"], {
"./panels/security/mainView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.devtools-link {\n  display: inline-block;\n}\n\n.security-main-view {\n  overflow-x: hidden;\n  overflow-y: auto;\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n.security-main-view > div {\n  flex-shrink: 0;\n}\n\n.security-summary-section-title {\n  font-size: 15px;\n  margin: 12px 16px;\n  user-select: text;\n}\n\n.lock-spectrum {\n  margin: 8px 16px;\n  display: flex;\n  align-items: flex-start;\n}\n\n.security-summary .lock-icon {\n  flex: none;\n  width: 16px;\n  height: 16px;\n  margin: 0;\n}\n/* Separate the middle icon from the other two. */\n\n.security-summary .lock-icon-neutral {\n  margin: 0 16px;\n}\n\n.security-summary:not(.security-summary-secure) .lock-icon-secure,\n.security-summary:not(.security-summary-neutral) .lock-icon-neutral,\n.security-summary:not(.security-summary-insecure) .lock-icon-insecure,\n.security-summary:not(.security-summary-insecure-broken) .lock-icon-insecure-broken {\n  color: var(--sys-color-state-disabled);\n}\n\n@media (forced-colors: active) {\n  .security-summary-neutral .lock-icon-neutral {\n    color: Highlight;\n  }\n\n  .security-summary:not(.security-summary-secure) .lock-icon-secure,\n  .security-summary:not(.security-summary-neutral) .lock-icon-neutral,\n  .security-summary:not(.security-summary-insecure) .lock-icon-insecure,\n  .security-summary:not(.security-summary-insecure-broken) .lock-icon-insecure-broken {\n    color: canvastext;\n  }\n}\n\n.triangle-pointer-container {\n  margin: 8px 24px 0;\n  padding: 0;\n}\n\n.triangle-pointer-wrapper {\n  /* Defaults for dynamic properties. */\n  transform: translateX(0);\n  transition: transform 0.3s;\n}\n\n.triangle-pointer {\n  width: 12px;\n  height: 12px;\n  margin-bottom: -6px;\n  margin-left: -6px;\n  transform: rotate(-45deg);\n  border-style: solid;\n  border-width: 1px 1px 0 0;\n  background: var(--sys-color-cdt-base-container);\n  border-color: var(--sys-color-neutral-outline);\n}\n\n.security-summary-secure .triangle-pointer-wrapper {\n  transform: translateX(0);\n}\n\n.security-summary-neutral .triangle-pointer-wrapper {\n  transform: translateX(32px);\n}\n\n.security-summary-insecure .triangle-pointer-wrapper {\n  transform: translateX(64px);\n}\n\n.security-summary-insecure-broken .triangle-pointer-wrapper {\n  transform: translateX(64px);\n}\n\n.security-summary-text {\n  padding: 16px 24px;\n  border-style: solid;\n  border-width: 1px 0;\n  font-size: 15px;\n  background: var(--sys-color-cdt-base-container);\n  border-color: var(--sys-color-neutral-outline);\n  user-select: text;\n}\n\n.security-summary-secure .triangle-pointer,\n.security-summary-secure .security-summary-text,\n.security-explanation-title-secure {\n  color: var(--sys-color-green);\n}\n\n.security-summary-insecure-broken .triangle-pointer,\n.security-summary-insecure-broken .security-summary-text,\n.security-explanation-title-neutral,\n.security-explanation-title-insecure,\n.security-explanation-title-insecure-broken {\n  color: var(--sys-color-error);\n}\n\n.security-explanation-list {\n  padding-bottom: 16px;\n}\n\n.security-explanation-list:empty {\n  border-bottom: none;\n  padding: 0;\n}\n\n.security-explanations-main {\n  margin-top: -5px;\n  background-color: var(--sys-color-cdt-base-container);\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n.security-explanations-extra {\n  background-color: transparent;\n}\n\n.security-explanation {\n  padding: 11px;\n  display: flex;\n  white-space: nowrap;\n  border: none;\n  color: var(--sys-color-token-subtle);\n}\n\n.security-explanation-text {\n  flex: auto;\n  white-space: normal;\n  max-width: 400px;\n}\n\n.origin-button {\n  margin-top: var(--sys-size-4);\n}\n\n.security-explanation .security-property {\n  flex: none;\n  width: 16px;\n  height: 16px;\n  margin-right: 16px;\n}\n\n.security-explanation-title {\n  color: var(--sys-color-token-subtle);\n  margin-top: 1px;\n  margin-bottom: 8px;\n}\n\n.security-mixed-content {\n  margin-top: 8px;\n}\n\n.security-explanation-recommendations {\n  padding-inline-start: 16px;\n}\n\n.security-explanation-recommendations > li {\n  margin-bottom: 4px;\n}\n\n/*# sourceURL=mainView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);