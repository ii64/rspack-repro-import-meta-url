"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_issues_HiddenIssuesRow_js"],{

/***/ "./panels/issues/HiddenIssuesRow.js":
/*!******************************************!*\
  !*** ./panels/issues/HiddenIssuesRow.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HiddenIssuesRow: () => (/* binding */ HiddenIssuesRow)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */ var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/adorners/adorners.js */ "./ui/components/adorners/adorners.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const UIStrings = {
    /**
     * @description Title for the hidden issues row
     */
    hiddenIssues: 'Hidden issues',
    /**
     * @description Label for the button to unhide all hidden issues
     */
    unhideAll: 'Unhide all',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/HiddenIssuesRow.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class HiddenIssuesRow extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.TreeOutline.TreeElement {
    #numHiddenAggregatedIssues;
    constructor() {
        super(undefined, true);
        this.#numHiddenAggregatedIssues = document.createElement('span');
        this.toggleOnClick = true;
        this.listItemElement.classList.add('issue-category', 'hidden-issues');
        this.childrenListElement.classList.add('hidden-issues-body');
        this.#appendHeader();
    }
    #appendHeader() {
        const unhideAllIssuesBtn = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextButton(i18nString(UIStrings.unhideAll), () => _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.IssuesManager.IssuesManager.instance().unhideAllIssues(), { className: 'unhide-all-issues-button', jslogContext: 'issues.unhide-all-hiddes' });
        const countAdorner = new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_2__.Adorner.Adorner();
        countAdorner.data = {
            name: 'countWrapper',
            content: this.#numHiddenAggregatedIssues,
        };
        countAdorner.classList.add('aggregated-issues-count');
        this.#numHiddenAggregatedIssues.textContent = '0';
        const header = document.createElement('div');
        const title = document.createElement('div');
        header.classList.add('header');
        title.classList.add('title');
        title.textContent = i18nString(UIStrings.hiddenIssues);
        header.appendChild(countAdorner);
        header.appendChild(title);
        header.appendChild(unhideAllIssuesBtn);
        this.listItemElement.appendChild(header);
    }
    update(count) {
        this.#numHiddenAggregatedIssues.textContent = `${count}`;
    }
}
//# sourceMappingURL=HiddenIssuesRow.js.map

/***/ })

}]);