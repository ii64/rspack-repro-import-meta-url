"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_cssAngleEditor_css_js"], {
"./ui/legacy/components/inline_editor/cssAngleEditor.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.editor.interacting::before {\n  content: "";\n  position: fixed;\n  inset: 0;\n}\n\n.clock,\n.pointer,\n.center,\n.hand,\n.dial {\n  position: absolute;\n}\n\n.clock {\n  top: 6px;\n  width: 6em;\n  height: 6em;\n  background-color: var(--sys-color-cdt-base-container);\n  border: 0.5em solid var(--sys-color-neutral-outline);\n  border-radius: 9em;\n  box-shadow: var(--drop-shadow), inset 0 0 15px var(--box-shadow-outline-color);\n  transform: translateX(-3em);\n}\n\n.center,\n.hand {\n  box-shadow: 0 0 2px var(--box-shadow-outline-color);\n}\n\n.pointer {\n  margin: auto;\n  top: 0;\n  left: -0.4em;\n  right: 0;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 0.9em 0.9em;\n  border-color: transparent transparent var(--sys-color-neutral-outline) transparent;\n}\n\n.center,\n.hand,\n.dial {\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.center {\n  width: 0.7em;\n  height: 0.7em;\n  border-radius: 10px;\n}\n\n.dial {\n  width: 2px;\n  height: var(--clock-dial-length);\n  background-color: var(--override-dial-color);\n  border-radius: 1px;\n}\n\n.hand {\n  height: 50%;\n  width: 0.3em;\n  background: var(--sys-color-tonal-container);\n}\n\n.hand::before {\n  content: "";\n  display: inline-block;\n  position: absolute;\n  top: -0.6em;\n  left: -0.35em;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 0 5px var(--box-shadow-outline-color);\n}\n\n.hand::before,\n.center {\n  background-color: var(--sys-color-tonal-container);\n}\n\n:host-context(.theme-with-dark-background) .hand::before {\n  box-shadow: 0 0 5px hsl(0deg 0% 0% / 80%);\n}\n\n:host-context(.theme-with-dark-background) .center,\n:host-context(.theme-with-dark-background) .hand {\n  box-shadow: 0 0 2px hsl(0deg 0% 0% / 60%);\n}\n\n:host-context(.theme-with-dark-background) .clock {\n  background-color: hsl(225deg 5% 27%);\n}\n\n/*# sourceURL=cssAngleEditor.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);