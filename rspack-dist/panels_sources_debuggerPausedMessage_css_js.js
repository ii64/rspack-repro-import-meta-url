"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_debuggerPausedMessage_css_js"], {
"./panels/sources/debuggerPausedMessage.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.paused-status {\n  margin: 6px;\n  padding: 4px 10px;\n  border-radius: 10px;\n  background-color: var(--sys-color-yellow-container);\n  color: var(--sys-color-on-yellow-container);\n}\n\n.paused-status.error-reason {\n  background-color: var(--sys-color-surface-error);\n  color: var(--sys-color-on-surface-error);\n}\n\n.status-main {\n  padding-left: 18px;\n  position: relative;\n}\n\n.status-sub:not(:empty) {\n  padding-left: 15px;\n  padding-top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.paused-status.error-reason .status-sub {\n  color: var(--sys-color-error);\n  line-height: 11px;\n  max-height: 27px;\n  user-select: text;\n}\n\ndevtools-icon {\n  position: absolute;\n  left: -1px;\n  top: -1px;\n}\n\n/*# sourceURL=debuggerPausedMessage.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);