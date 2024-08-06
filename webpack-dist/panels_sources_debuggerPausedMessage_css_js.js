"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_debuggerPausedMessage_css_js"],{

/***/ "./panels/sources/debuggerPausedMessage.css.js":
/*!*****************************************************!*\
  !*** ./panels/sources/debuggerPausedMessage.css.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.paused-status {
  margin: 6px;
  padding: 4px 10px;
  border-radius: 10px;
  background-color: var(--sys-color-yellow-container);
  color: var(--sys-color-on-yellow-container);
}

.paused-status.error-reason {
  background-color: var(--sys-color-surface-error);
  color: var(--sys-color-on-surface-error);
}

.status-main {
  padding-left: 18px;
  position: relative;
}

.status-sub:not(:empty) {
  padding-left: 15px;
  padding-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.paused-status.error-reason .status-sub {
  color: var(--sys-color-error);
  line-height: 11px;
  max-height: 27px;
  user-select: text;
}

devtools-icon {
  position: absolute;
  left: -1px;
  top: -1px;
}

/*# sourceURL=debuggerPausedMessage.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);