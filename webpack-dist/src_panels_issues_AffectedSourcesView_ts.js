"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_issues_AffectedSourcesView_ts"],{

/***/ "./src/panels/issues/AffectedSourcesView.ts":
/*!**************************************************!*\
  !*** ./src/panels/issues/AffectedSourcesView.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedSourcesView: () => (/* binding */ AffectedSourcesView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./src/panels/issues/AffectedResourcesView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AffectedSourcesView_instances, _AffectedSourcesView_appendAffectedSources, _AffectedSourcesView_appendAffectedSource;




const UIStrings = {
    /**
     *@description Singular or Plural label for number of affected sources (consisting of (source) file name + line number) in issue view
     */
    nSources: '{n, plural, =1 {# source} other {# sources}}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedSourcesView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class AffectedSourcesView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__.AffectedResourcesView {
    constructor() {
        super(...arguments);
        _AffectedSourcesView_instances.add(this);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nSources, { n: count });
    }
    update() {
        this.clear();
        __classPrivateFieldGet(this, _AffectedSourcesView_instances, "m", _AffectedSourcesView_appendAffectedSources).call(this, this.issue.sources());
    }
}
_AffectedSourcesView_instances = new WeakSet(), _AffectedSourcesView_appendAffectedSources = function _AffectedSourcesView_appendAffectedSources(affectedSources) {
    let count = 0;
    for (const source of affectedSources) {
        __classPrivateFieldGet(this, _AffectedSourcesView_instances, "m", _AffectedSourcesView_appendAffectedSource).call(this, source);
        count++;
    }
    this.updateAffectedResourceCount(count);
}, _AffectedSourcesView_appendAffectedSource = function _AffectedSourcesView_appendAffectedSource({ url, lineNumber, columnNumber }) {
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
};


/***/ })

}]);