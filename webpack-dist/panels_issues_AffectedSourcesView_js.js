"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_issues_AffectedSourcesView_js"],{

/***/ "./panels/issues/AffectedSourcesView.js":
/*!**********************************************!*\
  !*** ./panels/issues/AffectedSourcesView.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedSourcesView: () => (/* binding */ AffectedSourcesView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const UIStrings = {
    /**
     *@description Singular or Plural label for number of affected sources (consisting of (source) file name + line number) in issue view
     */
    nSources: '{n, plural, =1 {# source} other {# sources}}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedSourcesView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class AffectedSourcesView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__.AffectedResourcesView {
    #appendAffectedSources(affectedSources) {
        let count = 0;
        for (const source of affectedSources) {
            this.#appendAffectedSource(source);
            count++;
        }
        this.updateAffectedResourceCount(count);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nSources, { n: count });
    }
    #appendAffectedSource({ url, lineNumber, columnNumber }) {
        const cellElement = document.createElement('td');
        // TODO(chromium:1072331): Check feasibility of plumping through scriptId for `linkifyScriptLocation`
        //                         to support source maps and formatted scripts.
        const linkifierURLOptions = { columnNumber, lineNumber, tabStop: true, showColumnNumber: false, inlineFrameIndex: 0 };
        // An element created with linkifyURL can subscribe to the events
        // 'click' neither 'keydown' if that key is the 'Enter' key.
        // Also, this element has a context menu, so we should be able to
        // track when the user use the context menu too.
        // TODO(crbug.com/1108503): Add some mechanism to be able to add telemetry to this element.
        const anchorElement = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Linkifier.Linkifier.linkifyURL(url, linkifierURLOptions);
        anchorElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.link('source-location').track({ click: true })}`);
        cellElement.appendChild(anchorElement);
        const rowElement = document.createElement('tr');
        rowElement.classList.add('affected-resource-source');
        rowElement.appendChild(cellElement);
        this.affectedResources.appendChild(rowElement);
    }
    update() {
        this.clear();
        this.#appendAffectedSources(this.issue.sources());
    }
}
//# sourceMappingURL=AffectedSourcesView.js.map

/***/ })

}]);