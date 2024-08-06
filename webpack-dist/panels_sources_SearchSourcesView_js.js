"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_SearchSourcesView_js"],{

/***/ "./panels/search/SearchScope.js":
/*!**************************************!*\
  !*** ./panels/search/SearchScope.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=SearchScope.js.map

/***/ }),

/***/ "./panels/search/search.js":
/*!*********************************!*\
  !*** ./panels/search/search.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchResultsPane: () => (/* reexport module object */ _SearchResultsPane_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   SearchScope: () => (/* reexport module object */ _SearchScope_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   SearchView: () => (/* reexport module object */ _SearchView_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _SearchResultsPane_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchResultsPane.js */ "./panels/search/SearchResultsPane.js");
/* harmony import */ var _SearchScope_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchScope.js */ "./panels/search/SearchScope.js");
/* harmony import */ var _SearchView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchView.js */ "./panels/search/SearchView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




//# sourceMappingURL=search.js.map

/***/ }),

/***/ "./panels/sources/SearchSourcesView.js":
/*!*********************************************!*\
  !*** ./panels/sources/SearchSourcesView.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   Revealer: () => (/* binding */ Revealer),
/* harmony export */   SearchSources: () => (/* binding */ SearchSources),
/* harmony export */   SearchSourcesView: () => (/* binding */ SearchSourcesView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _search_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search.js */ "./panels/search/search.js");
/* harmony import */ var _SourcesSearchScope_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SourcesSearchScope.js */ "./panels/sources/SourcesSearchScope.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




class SearchSources {
    query;
    constructor(query) {
        this.query = query;
    }
}
class SearchSourcesView extends _search_search_js__WEBPACK_IMPORTED_MODULE_2__.SearchView.SearchView {
    constructor() {
        super('sources', new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(/* timeoutMs */ 200));
    }
    createScope() {
        return new _SourcesSearchScope_js__WEBPACK_IMPORTED_MODULE_3__.SourcesSearchScope();
    }
}
class ActionDelegate {
    handleAction(_context, actionId) {
        switch (actionId) {
            case 'sources.search': {
                const selection = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.InspectorView.InspectorView.instance().element.window().getSelection();
                const query = selection ? selection.toString().replace(/\r?\n.*/, '') : '';
                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(new SearchSources(query));
                return true;
            }
        }
        return false;
    }
}
class Revealer {
    async reveal({ query }, omitFocus) {
        const viewManager = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ViewManager.ViewManager.instance();
        await viewManager.showView('sources.search-sources-tab', true, omitFocus);
        const searchSourcesView = viewManager.materializedWidget('sources.search-sources-tab');
        if (searchSourcesView instanceof SearchSourcesView) {
            searchSourcesView.toggle(query);
        }
    }
}
//# sourceMappingURL=SearchSourcesView.js.map

/***/ })

}]);