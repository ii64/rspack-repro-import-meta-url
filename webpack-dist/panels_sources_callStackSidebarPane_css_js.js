"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_callStackSidebarPane_css_js"],{

/***/ "./panels/sources/callStackSidebarPane.css.js":
/*!****************************************************!*\
  !*** ./panels/sources/callStackSidebarPane.css.js ***!
  \****************************************************/
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

.call-frame-warnings-message {
  text-align: center;
  font-style: italic;
  padding: 4px;
  color: var(--sys-color-on-surface-yellow);
  background-color: var(--sys-color-surface-yellow);
}

.ignore-listed-message {
  padding: 1px;
}

.ignore-listed-message-label {
  color: var(--sys-color-token-subtle);
  align-items: center;
  display: flex;
}

.show-more-message > .link {
  margin-left: 5px;
}

.show-more-message {
  text-align: center;
  font-style: italic;
  padding: 4px;
  border-top: 1px solid var(--sys-color-divider);
}

.call-frame-item {
  padding: 3px 8px 3px 20px;
  position: relative;
  min-height: 18px;
  line-height: 15px;
  display: flex;
  flex-wrap: wrap;
}

.call-frame-title-text {
  text-overflow: ellipsis;
  overflow: hidden;
}

.async-header + .call-frame-item {
  border-top: 0;
}

.call-frame-item:not(.async-header) {
  border-top: 1px solid var(--sys-color-divider);
}

.call-frame-item-title,
.call-frame-location {
  display: flex;
  white-space: nowrap;
}

.async-header .call-frame-item-title {
  font-weight: bold;
  color: var(--sys-color-on-surface);
  background-color: var(--sys-color-cdt-base-container);
  margin-left: -5px;
  padding: 0 5px;
  z-index: 1;
}

.call-frame-item:focus-visible,
.call-frame-item.async-header:focus-visible .call-frame-item-title {
  background-color: var(--sys-color-tonal-container);
}

.ignore-listed-checkbox:focus-visible {
  outline-width: unset;
}

.call-frame-item:not(.async-header):hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.call-frame-location {
  color: var(--sys-color-token-subtle);
  margin-left: auto;
  padding: 0 10px;
}

.async-header::before {
  content: " ";
  width: 100%;
  border-top: 1px solid var(--sys-color-divider);
  margin-top: 8px;
  position: absolute;
  left: 0;
}

.ignore-listed-call-frame {
  opacity: 60%;
  font-style: italic;
}

.selected-call-frame-icon {
  display: none;
  position: absolute;
  top: 3px;
  left: 4px;
}

.call-frame-item.selected .selected-call-frame-icon {
  display: block;
}

.call-frame-warning-icon {
  display: block;
  position: absolute;
  top: 3px;
  right: 4px;
}

@media (forced-colors: active) {
  .call-frame-item:focus-visible,
  .call-frame-item:not(.async-header):hover {
    forced-color-adjust: none;
    background-color: Highlight;
  }

  .call-frame-item:focus-visible *,
  .call-frame-item:not(.async-header):hover * {
    color: HighlightText;
  }
}

/*# sourceURL=callStackSidebarPane.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);