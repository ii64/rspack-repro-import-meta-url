"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_profiler_heapProfiler_css_js"], {
"./panels/profiler/heapProfiler.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (C) 2009 Google Inc. All rights reserved.\n * Copyright (C) 2010 Apple Inc. All rights reserved.\n *\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions are\n * met:\n *\n *     * Redistributions of source code must retain the above copyright\n * notice, this list of conditions and the following disclaimer.\n *     * Redistributions in binary form must reproduce the above\n * copyright notice, this list of conditions and the following disclaimer\n * in the documentation and/or other materials provided with the\n * distribution.\n *     * Neither the name of Google Inc. nor the names of its\n * contributors may be used to endorse or promote products derived from\n * this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n.heap-snapshot-view {\n  overflow: hidden;\n}\n\n.heap-snapshot-view .data-grid {\n  border: none;\n  flex: auto;\n}\n\n.heap-snapshot-view .data-grid tr:empty {\n  height: 16px;\n  visibility: hidden;\n}\n\n.heap-snapshot-view .data-grid span.percent-column {\n  width: 35px !important; /* stylelint-disable-line declaration-no-important */\n}\n\n.heap-snapshot-view .object-value-object,\n.object-value-node {\n  display: inline;\n  position: static;\n}\n\n.heap-snapshot-view .object-value-string {\n  white-space: nowrap;\n}\n\n.heap-snapshot-view td.object-column .objects-count {\n  margin-left: 10px;\n  font-size: 11px;\n  color: var(--sys-color-token-subtle);\n}\n\n.heap-snapshot-view tr:not(.selected) .object-value-id {\n  color: var(--sys-color-token-subtle);\n}\n\n.profile-view .heap-tracking-overview {\n  flex: 0 0 80px;\n  height: 80px;\n}\n\n.heap-snapshot-view .retaining-paths-view {\n  overflow: hidden;\n}\n\n.heap-snapshot-view .heap-snapshot-view-resizer {\n  background-color: var(--sys-color-surface1);\n  display: flex;\n  flex: 0 0 21px;\n}\n\n.heap-snapshot-view td.object-column > div > span {\n  margin-right: 6px;\n}\n\n.heap-snapshot-view .heap-snapshot-view-resizer .title {\n  flex: 0 1 auto;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.heap-snapshot-view .heap-snapshot-view-resizer .verticalResizerIcon {\n  background-image: var(--image-file-toolbarResizerVertical);\n  background-repeat: no-repeat;\n  background-position: center;\n  flex: 0 0 28px;\n  margin-left: auto;\n}\n\n.heap-snapshot-view .heap-snapshot-view-resizer .title > span {\n  display: inline-block;\n  padding-top: 3px;\n  vertical-align: middle;\n  margin-left: 4px;\n  margin-right: 8px;\n}\n\n.heap-snapshot-view .heap-snapshot-view-resizer * {\n  pointer-events: none;\n}\n\n.heap-snapshot-view tr:not(.selected) td.object-column span.highlight {\n  background-color: inherit;\n}\n\n.heap-snapshot-view td.object-column span.heap-object-source-link {\n  float: right;\n}\n\n.heap-snapshot-view td.object-column span.heap-object-source-link:empty {\n  animation: fadeInOut 2s infinite;\n}\n\n.heap-snapshot-view td.object-column span.heap-object-source-link:empty::before {\n  content: "\\b7\\b7";\n  font-weight: bold;\n}\n\n@keyframes fadeInOut {\n  0% {\n    transform: rotate(0);\n  }\n\n  50% {\n    transform: rotate(0.5turn);\n  }\n\n  100% {\n    transform: rotate(1turn);\n  }\n}\n\n.heap-object-tag {\n  height: 14px;\n  width: 14px;\n}\n\n.heap-snapshot-view tr:not(.selected) td.object-column span.heap-object-tag,\n.heap-snapshot-view tr:not(.selected) td.object-column span.grayed {\n  color: var(--sys-color-token-subtle);\n}\n\n.heap-snapshot-view tr:not(.selected) .cycled-ancestor-node,\n.heap-snapshot-view tr:not(.selected) .unreachable-ancestor-node {\n  opacity: 60%;\n}\n\n#heap-recording-view .profile-view {\n  top: 80px;\n}\n\n.heap-overview-container {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 80px;\n}\n\n#heap-recording-overview-grid .resources-dividers-label-bar {\n  pointer-events: auto;\n}\n\n.heap-recording-overview-canvas {\n  position: absolute;\n  top: 20px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.heap-snapshot-statistics-view {\n  overflow: auto;\n}\n\n.heap-snapshot-stats-pie-chart {\n  margin: 12px 30px;\n  flex-shrink: 0;\n}\n\n.heap-allocation-stack .stack-frame {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--sys-color-divider);\n  padding: 2px;\n}\n\n.heap-allocation-stack .stack-frame:focus {\n  background-color: var(--sys-color-tonal-container);\n  color: var(--sys-color-on-tonal-container);\n}\n\n.heap-allocation-stack .stack-frame:hover:not(:focus) {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\n.heap-allocation-stack .stack-frame .devtools-link {\n  color: var(--sys-color-primary);\n}\n\n.no-heap-allocation-stack {\n  padding: 5px;\n}\n\n@media (forced-colors: active) {\n  .cycled-ancestor-node {\n    opacity: 100%;\n  }\n\n  .heap-snapshot-view td.object-column .objects-count,\n  .heap-snapshot-view tr:not(.selected) td.object-column span.heap-object-tag,\n  .heap-snapshot-view tr:not(.selected) .object-value-id {\n    color: ButtonText;\n  }\n}\n\n/*# sourceURL=heapProfiler.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);