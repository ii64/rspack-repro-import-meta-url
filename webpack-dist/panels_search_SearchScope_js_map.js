(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_search_SearchScope_js_map"],{

/***/ "./panels/search/SearchScope.js.map":
/*!******************************************!*\
  !*** ./panels/search/SearchScope.js.map ***!
  \******************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"SearchScope.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/search/SearchScope.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B\",\"sourcesContent\":[\"// Copyright 2014 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Common from '../../core/common/common.js';\\nimport type * as Workspace from '../../models/workspace/workspace.js';\\n\\nexport interface SearchResult {\\n  label(): string;\\n\\n  description(): string;\\n\\n  matchesCount(): number;\\n\\n  matchLabel(index: number): string;\\n\\n  matchLineContent(index: number): string;\\n\\n  matchRevealable(index: number): Object;\\n\\n  matchColumn(index: number): number|undefined;\\n\\n  matchLength(index: number): number|undefined;\\n}\\n\\nexport interface SearchScope {\\n  performSearch(\\n      searchConfig: Workspace.SearchConfig.SearchConfig, progress: Common.Progress.Progress,\\n      searchResultCallback: (arg0: SearchResult) => void,\\n      searchFinishedCallback: (arg0: boolean) => void): void|Promise<void>;\\n\\n  performIndexing(progress: Common.Progress.Progress): void;\\n\\n  stopSearch(): void;\\n}\\n\"]}");

/***/ })

}]);