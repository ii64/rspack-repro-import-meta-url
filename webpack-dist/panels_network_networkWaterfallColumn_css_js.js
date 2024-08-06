"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_network_networkWaterfallColumn_css_js"],{

/***/ "./panels/network/networkWaterfallColumn.css.js":
/*!******************************************************!*\
  !*** ./panels/network/networkWaterfallColumn.css.js ***!
  \******************************************************/
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

.network-waterfall-v-scroll {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  margin-top: 31px;
  z-index: 200;
}

.theme-with-dark-background .network-waterfall-v-scroll {
  /**
  * Waterfall scrollbars are implemented as overflowing elements on top of the
  * scrollable content. The actual content is a viewport without scrollbars.
  * When using a dark theme, we should inform Blink that the content is dark,
  * so that the native scrollbars are colored accordingly.
  */
  background: rgb(0 0 0 / 1%);
}

.network-waterfall-v-scroll.small {
  margin-top: 27px;
}

.network-waterfall-v-scroll-content {
  width: 15px;
  pointer-events: none;
}

/*# sourceURL=networkWaterfallColumn.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);