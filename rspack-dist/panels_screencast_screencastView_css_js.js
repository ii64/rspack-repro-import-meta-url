"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_screencast_screencastView_css_js"], {
"./panels/screencast/screencastView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (C) 2013 Google Inc. All rights reserved.\n *\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions are\n * met:\n *\n *     * Redistributions of source code must retain the above copyright\n * notice, this list of conditions and the following disclaimer.\n *     * Redistributions in binary form must reproduce the above\n * copyright notice, this list of conditions and the following disclaimer\n * in the documentation and/or other materials provided with the\n * distribution.\n *     * Neither the name of Google Inc. nor the names of its\n * contributors may be used to endorse or promote products derived from\n * this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n.screencast {\n  overflow: hidden;\n}\n\n.screencast-navigation {\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding-left: 1px;\n  border-bottom: 1px solid var(--sys-color-divider);\n  background-origin: padding-box;\n  background-clip: padding-box;\n}\n\n.screencast-navigation button {\n  border-width: 0;\n  padding: 5px;\n  width: 28px;\n  height: 26px;\n  background: none;\n}\n\n.screencast-navigation button devtools-icon {\n  width: 100%;\n  height: 100%;\n}\n\n.screencast-navigation button[disabled].navigation {\n  opacity: 50%;\n}\n\n.screencast-navigation input {\n  flex: 1;\n  margin: 2px;\n  max-height: 19px;\n}\n\n.screencast-navigation .progress {\n  background-color: var(--sys-color-primary-bright);\n  height: 3px;\n  left: 0;\n  position: absolute;\n  top: 100%;  /* Align with the bottom edge of the parent. */\n  width: 0;\n  z-index: 2;  /* Above .screencast-glasspane. */\n}\n\n.screencast-viewport {\n  display: flex;\n  border: 1px solid var(--sys-color-divider);\n  border-radius: 20px;\n  flex: none;\n  padding: 20px;\n  margin: auto;\n  background-color: var(--sys-color-surface-variant);\n}\n\n.screencast-canvas-container {\n  flex: auto;\n  display: flex;\n  border: 1px solid var(--sys-color-divider);\n  position: relative;\n}\n\n.screencast-canvas-container.touchable {\n  cursor: image-set(var(--image-file-touchCursor) 1x, var(--image-file-touchCursor_2x) 2x), default;\n}\n\n.screencast canvas {\n  flex: auto;\n  position: relative;\n}\n\n.screencast-element-title {\n  position: absolute;\n  z-index: 10;\n}\n\n.screencast-tag-name {\n  color: var(--sys-color-token-tag);\n}\n\n.screencast-attribute {\n  color: var(--sys-color-token-attribute);\n}\n\n.screencast-dimension {\n  /* Keep this in sync with tool_highlight.css (.dimensions) */\n  color: var(--sys-color-outline);\n}\n\n.screencast-glasspane {\n  background-color: var(--color-background-opacity-80);\n  font-size: 30px;\n  z-index: 100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/*# sourceURL=screencastView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);