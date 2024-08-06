"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_network_NetworkSearchScope_js"],{

/***/ "./panels/network/NetworkSearchScope.js":
/*!**********************************************!*\
  !*** ./panels/network/NetworkSearchScope.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkSearchResult: () => (/* binding */ NetworkSearchResult),
/* harmony export */   NetworkSearchScope: () => (/* binding */ NetworkSearchScope)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const UIStrings = {
    /**
     *@description Text for web URLs
     */
    url: 'URL',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/network/NetworkSearchScope.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class NetworkSearchScope {
    #networkLog;
    constructor(networkLog) {
        this.#networkLog = networkLog;
    }
    performIndexing(progress) {
        queueMicrotask(() => {
            progress.done();
        });
    }
    async performSearch(searchConfig, progress, searchResultCallback, searchFinishedCallback) {
        const promises = [];
        const requests = this.#networkLog.requests().filter(request => searchConfig.filePathMatchesFileQuery(request.url()));
        progress.setTotalWork(requests.length);
        for (const request of requests) {
            const promise = this.searchRequest(searchConfig, request, progress);
            promises.push(promise);
        }
        const resultsWithNull = await Promise.all(promises);
        const results = resultsWithNull.filter(result => result !== null);
        if (progress.isCanceled()) {
            searchFinishedCallback(false);
            return;
        }
        for (const result of results.sort((r1, r2) => r1.label().localeCompare(r2.label()))) {
            if (result.matchesCount() > 0) {
                searchResultCallback(result);
            }
        }
        progress.done();
        searchFinishedCallback(true);
    }
    async searchRequest(searchConfig, request, progress) {
        const bodyMatches = await NetworkSearchScope.#responseBodyMatches(searchConfig, request);
        if (progress.isCanceled()) {
            return null;
        }
        const locations = [];
        if (stringMatchesQuery(request.url())) {
            locations.push(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIRequestLocation.UIRequestLocation.urlMatch(request));
        }
        for (const header of request.requestHeaders()) {
            if (headerMatchesQuery(header)) {
                locations.push(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIRequestLocation.UIRequestLocation.requestHeaderMatch(request, header));
            }
        }
        for (const header of request.responseHeaders) {
            if (headerMatchesQuery(header)) {
                locations.push(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIRequestLocation.UIRequestLocation.responseHeaderMatch(request, header));
            }
        }
        for (const match of bodyMatches) {
            locations.push(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIRequestLocation.UIRequestLocation.bodyMatch(request, match));
        }
        progress.incrementWorked();
        return new NetworkSearchResult(request, locations);
        function headerMatchesQuery(header) {
            return stringMatchesQuery(`${header.name}: ${header.value}`);
        }
        function stringMatchesQuery(string) {
            const flags = searchConfig.ignoreCase() ? 'i' : '';
            const regExps = searchConfig.queries().map(query => new RegExp(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.escapeForRegExp(query), flags));
            let pos = 0;
            for (const regExp of regExps) {
                const match = string.substr(pos).match(regExp);
                if (!match || match.index === undefined) {
                    return false;
                }
                pos += match.index + match[0].length;
            }
            return true;
        }
    }
    static async #responseBodyMatches(searchConfig, request) {
        if (!request.contentType().isTextType()) {
            return [];
        }
        let matches = [];
        for (const query of searchConfig.queries()) {
            const tmpMatches = await request.searchInContent(query, !searchConfig.ignoreCase(), searchConfig.isRegex());
            if (tmpMatches.length === 0) {
                // Mirror file search that all individual queries must produce matches.
                return [];
            }
            matches =
                _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilities.mergeOrdered(matches, tmpMatches, _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.ContentProvider.SearchMatch.comparator);
        }
        return matches;
    }
    stopSearch() {
    }
}
class NetworkSearchResult {
    request;
    locations;
    constructor(request, locations) {
        this.request = request;
        this.locations = locations;
    }
    matchesCount() {
        return this.locations.length;
    }
    label() {
        return this.request.displayName;
    }
    description() {
        const parsedUrl = this.request.parsedURL;
        if (!parsedUrl) {
            return this.request.url();
        }
        return parsedUrl.urlWithoutScheme();
    }
    matchLineContent(index) {
        const location = this.locations[index];
        if (location.isUrlMatch) {
            return this.request.url();
        }
        const header = location?.header?.header;
        if (header) {
            return header.value;
        }
        return location.searchMatch.lineContent;
    }
    matchRevealable(index) {
        return this.locations[index];
    }
    matchLabel(index) {
        const location = this.locations[index];
        if (location.isUrlMatch) {
            return i18nString(UIStrings.url);
        }
        const header = location?.header?.header;
        if (header) {
            return `${header.name}:`;
        }
        return (location.searchMatch.lineNumber + 1).toString();
    }
    matchColumn(index) {
        const location = this.locations[index];
        return location.searchMatch?.columnNumber;
    }
    matchLength(index) {
        const location = this.locations[index];
        return location.searchMatch?.matchLength;
    }
}
//# sourceMappingURL=NetworkSearchScope.js.map

/***/ })

}]);