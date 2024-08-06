"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_network_webSocketFrameView_css_js"],{

/***/ "./panels/network/webSocketFrameView.css.js":
/*!**************************************************!*\
  !*** ./panels/network/webSocketFrameView.css.js ***!
  \**************************************************/
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
 * Copyright (c) 2014 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.websocket-frame-view {
  user-select: text;
}

.websocket-frame-view .data-grid {
  flex: auto;
  border: none;
}

.websocket-frame-view .data-grid .data {
  background-image: none;
}

.websocket-frame-view-td {
  border-bottom: 1px solid var(--sys-color-divider);
}

.websocket-frame-view .data-grid td,
.websocket-frame-view .data-grid th {
  border-left-color: 1px solid var(--sys-color-divider);
}

.websocket-frame-view-row-send td:first-child::before {
  content: "\\2B06";
  color: var(--sys-color-tertiary);
  padding-right: 4px;
}

.websocket-frame-view-row-receive td:first-child::before {
  content: "\\2B07";
  color: var(--sys-color-error);
  padding-right: 4px;
}

.websocket-frame-view-row-send {
  background-color: color-mix(in sRGB, var(--sys-color-tertiary-container), transparent 50%);
}

.websocket-frame-view-row-error {
  background-color: var(--sys-color-surface-error);
  color: var(--sys-color-on-surface-error);
}

.websocket-frame-view .toolbar {
  border-bottom: 1px solid var(--sys-color-divider);
}

/*# sourceURL=webSocketFrameView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);