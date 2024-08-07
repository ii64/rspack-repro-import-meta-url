"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_serviceWorkerUpdateCycleView_css_js"], {
"./panels/application/serviceWorkerUpdateCycleView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2020 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n.resource-service-worker-update-view {\n  display: block;\n  margin: 6px;\n  color: var(--sys-color-on-surface-subtle);\n  overflow: auto;\n}\n\n.service-worker-update-timing-table {\n  border: 1px solid var(--sys-color-divider);\n  border-spacing: 0;\n  padding-left: 10px;\n  padding-right: 10px;\n  line-height: initial;\n  table-layout: auto;\n  overflow: hidden;\n}\n\n.service-worker-update-timing-row {\n  position: relative;\n  height: 20px;\n  overflow: hidden;\n  min-width: 80px;\n}\n\n.service-worker-update-timing-bar {\n  position: absolute;\n  min-width: 1px;\n  top: 0;\n  bottom: 0;\n}\n\n.service-worker-update-timing-bar-clickable::before {\n  user-select: none;\n  mask-image: var(--image-file-triangle-right);\n  float: left;\n  width: 14px;\n  height: 14px;\n  margin-right: 2px;\n  content: "";\n  position: relative;\n  background-color: var(--icon-default);\n  transition: transform 200ms;\n}\n\n.service-worker-update-timing-bar-clickable {\n  position: relative;\n  left: -12px;\n}\n\n.service-worker-update-timing-bar-clickable:focus-visible {\n  background-color: var(--sys-color-state-focus-highlight);\n}\n\n.service-worker-update-timing-bar-clickable[aria-checked="true"]::before {\n  transform: rotate(90deg);\n}\n\n.service-worker-update-timing-bar-details-collapsed {\n  display: none;\n}\n\n.service-worker-update-timing-bar-details-expanded {\n  display: table-row;\n}\n\n.service-worker-update-timing-bar-details:focus-visible {\n  background-color: var(--sys-color-state-focus-highlight);\n}\n\n.service-worker-update-timing-bar.activate {\n  top: 5px;\n  height: 10px;\n  background-color: var(--sys-color-yellow-bright);\n}\n\n.service-worker-update-timing-bar.wait {\n  top: 5px;\n  height: 10px;\n  background-color: var(--sys-color-purple-bright);\n}\n\n.service-worker-update-timing-bar.install {\n  top: 5px;\n  height: 10px;\n  background-color: var(--sys-color-cyan-bright);\n}\n\n.service-worker-update-timing-table > tr > td {\n  padding: 4px 0;\n  padding-right: 10px;\n}\n\ntable.service-worker-update-timing-table > tr.service-worker-update-timing-table-header > td {\n  border-top: 5px solid transparent;\n  color: var(--sys-color-token-subtle);\n}\n\ntable.service-worker-update-timing-table > tr.service-worker-update-timing-bar-details > td:first-child {\n  padding-left: 12px;\n}\n\ntable.service-worker-update-timing-table > tr.service-worker-update-timeline > td:first-child {\n  padding-left: 12px;\n}\n\n/*# sourceURL=serviceWorkerUpdateCycleView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);