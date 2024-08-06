"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_search_searchResultsPane_css_js"], {
"./panels/search/searchResultsPane.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  padding: 0;\n  margin: 0;\n  overflow-y: auto;\n}\n\n.tree-outline {\n  padding: 0;\n}\n\n.tree-outline ol {\n  padding: 0;\n}\n\n.tree-outline li {\n  height: 16px;\n}\n\nli.search-result {\n  cursor: pointer;\n  font-size: 12px;\n  margin-top: 8px;\n  padding: 2px 0 2px 4px;\n  word-wrap: normal;\n  white-space: pre;\n}\n\nli.search-result:hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\nli.search-result .search-result-file-name {\n  color: var(--sys-color-on-surface);\n  flex: 1 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\nli.search-result .search-result-matches-count {\n  color: var(--sys-color-token-subtle);\n  margin: 0 8px;\n}\n\nli.search-result.expanded .search-result-matches-count {\n  display: none;\n}\n\nli.show-more-matches {\n  color: var(--sys-color-on-surface);\n  cursor: pointer;\n  margin: 8px 0 0 -4px;\n}\n\nli.show-more-matches:hover {\n  text-decoration: underline;\n}\n\nli.search-match {\n  margin: 2px 0;\n  word-wrap: normal;\n  white-space: pre;\n}\n\nli.search-match.selected:focus-visible {\n  background: var(--sys-color-tonal-container);\n}\n\nli.search-match::before {\n  display: none;\n}\n\nli.search-match .search-match-line-number {\n  color: var(--sys-color-token-subtle);\n  text-align: right;\n  vertical-align: top;\n  word-break: normal;\n  padding: 2px 4px 2px 6px;\n  margin-right: 5px;\n}\n\n.tree-outline .devtools-link {\n  text-decoration: none;\n  display: block;\n  flex: auto;\n}\n\nli.search-match .search-match-content {\n  color: var(--sys-color-on-surface);\n}\n\nol.children.expanded {\n  padding-bottom: 4px;\n}\n\nli.search-match .link-style.search-match-link {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-left: 9px;\n  text-align: left;\n}\n\n.search-result-qualifier {\n  color: var(--sys-color-token-subtle);\n}\n\n.search-result-dash {\n  color: var(--sys-color-surface-variant);\n  margin: 0 4px;\n}\n\n/*# sourceURL=searchResultsPane.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);