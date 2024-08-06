"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_freestyler_components_freestylerChatUi_css_js"],{

/***/ "./panels/freestyler/components/freestylerChatUi.css.js":
/*!**************************************************************!*\
  !*** ./panels/freestyler/components/freestylerChatUi.css.js ***!
  \**************************************************************/
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
 * Copyright 2024 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:host {
  width: 100%;
  height: 100%;
  user-select: text;
  display: flex;
  flex-direction: column;
  background-color: var(--sys-color-cdt-base-container);
}

.chat-ui {
  width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
}

.input-form {
  display: flex;
  flex-direction: column;
  padding: var(--sys-size-8) var(--sys-size-4) 0 var(--sys-size-4);
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
}

.chat-input-container {
  margin: var(--sys-size-3) 0;
  padding: 0 2px;
  border-radius: 4px;
  border: 1px solid var(--sys-color-neutral-outline);
  width: 100%;
  display: flex;
  background-color: var(--sys-color-cdt-base-container);
}

.chat-input {
  border: 0;
  height: var(--sys-size-11);
  padding: 0 6px;
  flex-grow: 1;
  color: var(--sys-color-on-surface);
  background-color: var(--sys-color-cdt-base-container);
}

.chat-input:focus-visible {
  outline: none;
}

.chat-input-container:has(.chat-input:focus-visible) {
  outline: 1px solid var(--sys-color-primary);
}

.chat-input::placeholder {
  color: var(--sys-color-state-disabled);
}

.chat-input-disclaimer {
  text-align: center;
  color: var(--sys-color-on-surface-subtle);
  margin-bottom: var(--sys-size-4);
}

.messages-container {
  margin: var(--sys-size-6) auto 0 auto;
  max-width: 720px;
  padding: 0 var(--sys-size-4);
}

.messages-scroll-container {
  overflow: overlay;
  flex-grow: 1;
}

.chat-message {
  user-select: text;
  cursor: initial;
  width: fit-content;
  padding: 8px var(--sys-size-8);
  font-size: 12px;
  border-radius: var(--sys-size-6);
  word-break: break-word;

  &:not(:first-of-type) {
    margin-top: var(--sys-size-6);
  }

  &.query {
    max-width: 320px;
    color: var(--sys-color-on-surface);
    background: var(--sys-color-surface2);
    margin-left: auto;
  }

  &.answer {
    max-width: 440px;
    color: var(--sys-color-on-surface);
    background: var(--sys-color-surface2);
  }

  & .chat-loading {
    margin: 4px 0;
    padding: 4px 0;
  }

  & .actions {
    display: flex;
    gap: var(--sys-size-8);
    justify-content: space-between;
    align-items: flex-end;
  }
}

.input-header {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
  line-height: 20px;

  & .feedback-icon {
    width: var(--sys-size-8);
    height: var(--sys-size-8);
  }

  & .header-link-container {
    display: inline-flex;
    align-items: center;
    gap: var(--sys-size-2);
  }
}

.link {
  color: var(--text-link);
  text-decoration: underline;
}

.select-an-element-text {
  margin-left: 2px;
}

.empty-state-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 16px;
  opacity: 70%;
}

.action-result {
  margin: 8px 0;
}

.js-code-output {
  margin-top: -8px;
  white-space: pre;
  max-width: 100%;
  overflow: auto;
  scrollbar-width: none;
  padding: 4px 6px;
  background-color: var(--sys-color-surface3);
  color: var(--sys-color-on-surface);
  font-size: 10px;
  font-family: var(--source-code-font-family);
}

.error-step {
  color: var(--sys-color-error);
}

.side-effect-confirmation {
  background: var(--color-background);
  padding: 24px;
  border-radius: var(--sys-size-6);
  margin-bottom: 8px;

  p {
    margin: 0;
    margin-bottom: 12px;
    padding: 0;
  }
}

.side-effect-buttons-container {
  margin-top: 8px;

  devtools-button {
    margin-top: 4px;
  }
}

.consent-view {
  padding: 24px;
  text-wrap: pretty;

  .accept-button {
    margin-top: 8px;
  }

  ul {
    padding: 0 13px;
  }

  h2 {
    font-weight: 500;
  }
}

/*# sourceURL=./components/freestylerChatUi.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);