"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_issues_IssuesPane_ts"],{

/***/ "./src/panels/issues/HiddenIssuesRow.ts":
/*!**********************************************!*\
  !*** ./src/panels/issues/HiddenIssuesRow.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HiddenIssuesRow: () => (/* binding */ HiddenIssuesRow)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/adorners/adorners.js */ "./src/ui/components/adorners/adorners.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HiddenIssuesRow_instances, _HiddenIssuesRow_numHiddenAggregatedIssues, _HiddenIssuesRow_appendHeader;




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
    constructor() {
        super(undefined, true);
        _HiddenIssuesRow_instances.add(this);
        _HiddenIssuesRow_numHiddenAggregatedIssues.set(this, void 0);
        __classPrivateFieldSet(this, _HiddenIssuesRow_numHiddenAggregatedIssues, document.createElement('span'), "f");
        this.toggleOnClick = true;
        this.listItemElement.classList.add('issue-category', 'hidden-issues');
        this.childrenListElement.classList.add('hidden-issues-body');
        __classPrivateFieldGet(this, _HiddenIssuesRow_instances, "m", _HiddenIssuesRow_appendHeader).call(this);
    }
    update(count) {
        __classPrivateFieldGet(this, _HiddenIssuesRow_numHiddenAggregatedIssues, "f").textContent = `${count}`;
    }
}
_HiddenIssuesRow_numHiddenAggregatedIssues = new WeakMap(), _HiddenIssuesRow_instances = new WeakSet(), _HiddenIssuesRow_appendHeader = function _HiddenIssuesRow_appendHeader() {
    const unhideAllIssuesBtn = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextButton(i18nString(UIStrings.unhideAll), () => _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.IssuesManager.IssuesManager.instance().unhideAllIssues(), { className: 'unhide-all-issues-button', jslogContext: 'issues.unhide-all-hiddes' });
    const countAdorner = new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_2__.Adorner.Adorner();
    countAdorner.data = {
        name: 'countWrapper',
        content: __classPrivateFieldGet(this, _HiddenIssuesRow_numHiddenAggregatedIssues, "f"),
    };
    countAdorner.classList.add('aggregated-issues-count');
    __classPrivateFieldGet(this, _HiddenIssuesRow_numHiddenAggregatedIssues, "f").textContent = '0';
    const header = document.createElement('div');
    const title = document.createElement('div');
    header.classList.add('header');
    title.classList.add('title');
    title.textContent = i18nString(UIStrings.hiddenIssues);
    header.appendChild(countAdorner);
    header.appendChild(title);
    header.appendChild(unhideAllIssuesBtn);
    this.listItemElement.appendChild(header);
};


/***/ }),

/***/ "./src/panels/issues/IssueKindView.ts":
/*!********************************************!*\
  !*** ./src/panels/issues/IssueKindView.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IssueKindView: () => (/* binding */ IssueKindView),
/* harmony export */   getClassNameFromKind: () => (/* binding */ getClassNameFromKind),
/* harmony export */   getGroupIssuesByKindSetting: () => (/* binding */ getGroupIssuesByKindSetting),
/* harmony export */   issueKindViewSortPriority: () => (/* binding */ issueKindViewSortPriority)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/adorners/adorners.js */ "./src/ui/components/adorners/adorners.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/issue_counter/issue_counter.js */ "./src/ui/components/issue_counter/issue_counter.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/issues/components/components.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _IssueKindView_instances, _IssueKindView_kind, _IssueKindView_issueCount, _IssueKindView_appendHeader;








const UIStrings = {
    /**
     * @description Menu entry for hiding all current Page Errors.
     */
    hideAllCurrentPageErrors: 'Hide all current Page Errors',
    /**
     * @description Menu entry for hiding all current Breaking Changes.
     */
    hideAllCurrentBreakingChanges: 'Hide all current Breaking Changes',
    /**
     * @description Menu entry for hiding all current Page Errors.
     */
    hideAllCurrentImprovements: 'Hide all current Improvements',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/issues/IssueKindView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
function getGroupIssuesByKindSetting() {
    return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('group-issues-by-kind', false);
}
function issueKindViewSortPriority(a, b) {
    if (a.getKind() === b.getKind()) {
        return 0;
    }
    if (a.getKind() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.PageError) {
        return -1;
    }
    if (a.getKind() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.BreakingChange &&
        b.getKind() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.Improvement) {
        return -1;
    }
    return 1;
}
function getClassNameFromKind(kind) {
    switch (kind) {
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.BreakingChange:
            return 'breaking-changes';
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.Improvement:
            return 'improvements';
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.PageError:
            return 'page-errors';
    }
}
class IssueKindView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement {
    constructor(kind) {
        super(undefined, true);
        _IssueKindView_instances.add(this);
        _IssueKindView_kind.set(this, void 0);
        _IssueKindView_issueCount.set(this, void 0);
        __classPrivateFieldSet(this, _IssueKindView_kind, kind, "f");
        __classPrivateFieldSet(this, _IssueKindView_issueCount, document.createElement('span'), "f");
        this.toggleOnClick = true;
        this.listItemElement.classList.add('issue-kind');
        this.listItemElement.classList.add(getClassNameFromKind(kind));
        this.childrenListElement.classList.add('issue-kind-body');
    }
    getKind() {
        return __classPrivateFieldGet(this, _IssueKindView_kind, "f");
    }
    getHideAllCurrentKindString() {
        switch (__classPrivateFieldGet(this, _IssueKindView_kind, "f")) {
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.PageError:
                return i18nString(UIStrings.hideAllCurrentPageErrors);
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.Improvement:
                return i18nString(UIStrings.hideAllCurrentImprovements);
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.BreakingChange:
                return i18nString(UIStrings.hideAllCurrentBreakingChanges);
        }
    }
    onattach() {
        __classPrivateFieldGet(this, _IssueKindView_instances, "m", _IssueKindView_appendHeader).call(this);
        this.expand();
    }
    update(count) {
        __classPrivateFieldGet(this, _IssueKindView_issueCount, "f").textContent = `${count}`;
    }
}
_IssueKindView_kind = new WeakMap(), _IssueKindView_issueCount = new WeakMap(), _IssueKindView_instances = new WeakSet(), _IssueKindView_appendHeader = function _IssueKindView_appendHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    const issueKindIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon();
    issueKindIcon.data = _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_5__.IssueCounter.getIssueKindIconData(__classPrivateFieldGet(this, _IssueKindView_kind, "f"));
    issueKindIcon.classList.add('leading-issue-icon');
    const countAdorner = new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_3__.Adorner.Adorner();
    countAdorner.data = {
        name: 'countWrapper',
        content: __classPrivateFieldGet(this, _IssueKindView_issueCount, "f"),
    };
    countAdorner.classList.add('aggregated-issues-count');
    __classPrivateFieldGet(this, _IssueKindView_issueCount, "f").textContent = '0';
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.getIssueKindName(__classPrivateFieldGet(this, _IssueKindView_kind, "f"));
    const hideAvailableIssuesBtn = new _components_components_js__WEBPACK_IMPORTED_MODULE_7__.HideIssuesMenu.HideIssuesMenu();
    hideAvailableIssuesBtn.classList.add('hide-available-issues');
    hideAvailableIssuesBtn.data = {
        menuItemLabel: this.getHideAllCurrentKindString(),
        menuItemAction: () => {
            const setting = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.getHideIssueByCodeSetting();
            const values = setting.get();
            for (const issue of _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssuesManager.instance().issues()) {
                if (issue.getKind() === __classPrivateFieldGet(this, _IssueKindView_kind, "f")) {
                    values[issue.code()] = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssueStatus.Hidden;
                }
            }
            setting.set(values);
        },
    };
    header.appendChild(issueKindIcon);
    header.appendChild(countAdorner);
    header.appendChild(title);
    header.appendChild(hideAvailableIssuesBtn);
    this.listItemElement.appendChild(header);
};


/***/ }),

/***/ "./src/panels/issues/IssuesPane.ts":
/*!*****************************************!*\
  !*** ./src/panels/issues/IssuesPane.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IssuesPane: () => (/* binding */ IssuesPane),
/* harmony export */   getGroupIssuesByCategorySetting: () => (/* binding */ getGroupIssuesByCategorySetting)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/issue_counter/issue_counter.js */ "./src/ui/components/issue_counter/issue_counter.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _HiddenIssuesRow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HiddenIssuesRow.js */ "./src/panels/issues/HiddenIssuesRow.ts");
/* harmony import */ var _IssueAggregator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IssueAggregator.js */ "./src/panels/issues/IssueAggregator.ts");
/* harmony import */ var _IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IssueKindView.js */ "./src/panels/issues/IssueKindView.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './issuesPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './issuesTree.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _IssueView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./IssueView.js */ "./src/panels/issues/IssueView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _IssueCategoryView_instances, _IssueCategoryView_category, _IssueCategoryView_appendHeader, _IssuesPane_instances, _IssuesPane_categoryViews, _IssuesPane_issueViews, _IssuesPane_kindViews, _IssuesPane_showThirdPartyCheckbox, _IssuesPane_issuesTree, _IssuesPane_hiddenIssuesRow, _IssuesPane_noIssuesMessageDiv, _IssuesPane_issuesManager, _IssuesPane_aggregator, _IssuesPane_issueViewUpdatePromise, _IssuesPane_createToolbars, _IssuesPane_issueUpdated, _IssuesPane_scheduleIssueViewUpdate, _IssuesPane_updateIssueView, _IssuesPane_updateItemPositionAndSize, _IssuesPane_getIssueViewParent, _IssuesPane_clearViews, _IssuesPane_onFullUpdate, _IssuesPane_fullUpdate, _IssuesPane_updateIssueKindViewsCount, _IssuesPane_updateCounts, _IssuesPane_showIssuesTreeOrNoIssuesDetectedMessage;












const UIStrings = {
    /**
     * @description Category title for a group of cross origin embedder policy (COEP) issues
     */
    crossOriginEmbedderPolicy: 'Cross Origin Embedder Policy',
    /**
     * @description Category title for a group of mixed content issues
     */
    mixedContent: 'Mixed Content',
    /**
     * @description Category title for a group of SameSite cookie issues
     */
    samesiteCookie: 'SameSite Cookie',
    /**
     * @description Category title for a group of heavy ads issues
     */
    heavyAds: 'Heavy Ads',
    /**
     * @description Category title for a group of content security policy (CSP) issues
     */
    contentSecurityPolicy: 'Content Security Policy',
    /**
     * @description Text for other types of items
     */
    other: 'Other',
    /**
     * @description Category title for the different 'low text contrast' issues. Low text contrast refers
     *              to the difference between the color of a text and the background color where that text
     *              appears.
     */
    lowTextContrast: 'Low Text Contrast',
    /**
     * @description Category title for the different 'Cross-Origin Resource Sharing' (CORS) issues. CORS
     *              refers to one origin (e.g 'a.com') loading resources from another origin (e.g. 'b.com').
     */
    cors: 'Cross Origin Resource Sharing',
    /**
     * @description Title for a checkbox which toggles grouping by category in the issues tab
     */
    groupDisplayedIssuesUnder: 'Group displayed issues under associated categories',
    /**
     * @description Label for a checkbox which toggles grouping by category in the issues tab
     */
    groupByCategory: 'Group by category',
    /**
     * @description Title for a checkbox which toggles grouping by kind in the issues tab
     */
    groupDisplayedIssuesUnderKind: 'Group displayed issues as Page errors, Breaking changes and Improvements',
    /**
     * @description Label for a checkbox which toggles grouping by kind in the issues tab
     */
    groupByKind: 'Group by kind',
    /**
     * @description Title for a checkbox. Whether the issues tab should include third-party issues or not.
     */
    includeCookieIssuesCausedBy: 'Include cookie Issues caused by third-party sites',
    /**
     * @description Label for a checkbox. Whether the issues tab should include third-party issues or not.
     */
    includeThirdpartyCookieIssues: 'Include third-party cookie issues',
    /**
     * @description Label on the issues tab
     */
    onlyThirdpartyCookieIssues: 'Only third-party cookie issues detected so far',
    /**
     * @description Label in the issues panel
     */
    noIssuesDetectedSoFar: 'No issues detected so far',
    /**
     * @description Category title for the different 'Attribution Reporting API' issues. The
     * Attribution Reporting API is a newly proposed web API (see https://github.com/WICG/conversion-measurement-api).
     */
    attributionReporting: 'Attribution Reporting `API`',
    /**
     * @description Category title for the different 'Quirks Mode' issues. Quirks Mode refers
     *              to the legacy browser modes that displays web content according to outdated
     *              browser behaviors.
     */
    quirksMode: 'Quirks Mode',
    /**
     * @description Category title for the different 'Generic' issues.
     */
    generic: 'Generic',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/issues/IssuesPane.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class IssueCategoryView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement {
    constructor(category) {
        super();
        _IssueCategoryView_instances.add(this);
        _IssueCategoryView_category.set(this, void 0);
        __classPrivateFieldSet(this, _IssueCategoryView_category, category, "f");
        this.toggleOnClick = true;
        this.listItemElement.classList.add('issue-category');
        this.childrenListElement.classList.add('issue-category-body');
    }
    getCategoryName() {
        switch (__classPrivateFieldGet(this, _IssueCategoryView_category, "f")) {
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueCategory.CrossOriginEmbedderPolicy:
                return i18nString(UIStrings.crossOriginEmbedderPolicy);
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueCategory.MixedContent:
                return i18nString(UIStrings.mixedContent);
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueCategory.Cookie:
                return i18nString(UIStrings.samesiteCookie);
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueCategory.HeavyAd:
                return i18nString(UIStrings.heavyAds);
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueCategory.ContentSecurityPolicy:
                return i18nString(UIStrings.contentSecurityPolicy);
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueCategory.LowTextContrast:
                return i18nString(UIStrings.lowTextContrast);
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueCategory.Cors:
                return i18nString(UIStrings.cors);
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueCategory.AttributionReporting:
                return i18nString(UIStrings.attributionReporting);
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueCategory.QuirksMode:
                return i18nString(UIStrings.quirksMode);
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueCategory.Generic:
                return i18nString(UIStrings.generic);
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueCategory.Other:
                return i18nString(UIStrings.other);
        }
    }
    onattach() {
        __classPrivateFieldGet(this, _IssueCategoryView_instances, "m", _IssueCategoryView_appendHeader).call(this);
    }
}
_IssueCategoryView_category = new WeakMap(), _IssueCategoryView_instances = new WeakSet(), _IssueCategoryView_appendHeader = function _IssueCategoryView_appendHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = this.getCategoryName();
    header.appendChild(title);
    this.listItemElement.appendChild(header);
};
function getGroupIssuesByCategorySetting() {
    return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('group-issues-by-category', false);
}
class IssuesPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox {
    constructor() {
        super(true);
        _IssuesPane_instances.add(this);
        _IssuesPane_categoryViews.set(this, void 0);
        _IssuesPane_issueViews.set(this, void 0);
        _IssuesPane_kindViews.set(this, void 0);
        _IssuesPane_showThirdPartyCheckbox.set(this, void 0);
        _IssuesPane_issuesTree.set(this, void 0);
        _IssuesPane_hiddenIssuesRow.set(this, void 0);
        _IssuesPane_noIssuesMessageDiv.set(this, void 0);
        _IssuesPane_issuesManager.set(this, void 0);
        _IssuesPane_aggregator.set(this, void 0);
        _IssuesPane_issueViewUpdatePromise.set(this, Promise.resolve());
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.panel('issues')}`);
        this.contentElement.classList.add('issues-pane');
        __classPrivateFieldSet(this, _IssuesPane_categoryViews, new Map(), "f");
        __classPrivateFieldSet(this, _IssuesPane_kindViews, new Map(), "f");
        __classPrivateFieldSet(this, _IssuesPane_issueViews, new Map(), "f");
        __classPrivateFieldSet(this, _IssuesPane_showThirdPartyCheckbox, null, "f");
        __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_createToolbars).call(this);
        __classPrivateFieldSet(this, _IssuesPane_issuesTree, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutlineInShadow(), "f");
        __classPrivateFieldGet(this, _IssuesPane_issuesTree, "f").setShowSelectionOnKeyboardFocus(true);
        __classPrivateFieldGet(this, _IssuesPane_issuesTree, "f").contentElement.classList.add('issues');
        this.contentElement.appendChild(__classPrivateFieldGet(this, _IssuesPane_issuesTree, "f").element);
        __classPrivateFieldSet(this, _IssuesPane_hiddenIssuesRow, new _HiddenIssuesRow_js__WEBPACK_IMPORTED_MODULE_6__.HiddenIssuesRow(), "f");
        __classPrivateFieldGet(this, _IssuesPane_issuesTree, "f").appendChild(__classPrivateFieldGet(this, _IssuesPane_hiddenIssuesRow, "f"));
        __classPrivateFieldSet(this, _IssuesPane_noIssuesMessageDiv, document.createElement('div'), "f");
        __classPrivateFieldGet(this, _IssuesPane_noIssuesMessageDiv, "f").classList.add('issues-pane-no-issues');
        this.contentElement.appendChild(__classPrivateFieldGet(this, _IssuesPane_noIssuesMessageDiv, "f"));
        __classPrivateFieldSet(this, _IssuesPane_issuesManager, _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssuesManager.instance(), "f");
        __classPrivateFieldSet(this, _IssuesPane_aggregator, new _IssueAggregator_js__WEBPACK_IMPORTED_MODULE_7__.IssueAggregator(__classPrivateFieldGet(this, _IssuesPane_issuesManager, "f")), "f");
        __classPrivateFieldGet(this, _IssuesPane_aggregator, "f").addEventListener(_IssueAggregator_js__WEBPACK_IMPORTED_MODULE_7__.Events.AggregatedIssueUpdated, __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_issueUpdated), this);
        __classPrivateFieldGet(this, _IssuesPane_aggregator, "f").addEventListener(_IssueAggregator_js__WEBPACK_IMPORTED_MODULE_7__.Events.FullUpdateRequired, __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_onFullUpdate), this);
        __classPrivateFieldGet(this, _IssuesPane_hiddenIssuesRow, "f").hidden = __classPrivateFieldGet(this, _IssuesPane_issuesManager, "f").numberOfHiddenIssues() === 0;
        __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_onFullUpdate).call(this);
        __classPrivateFieldGet(this, _IssuesPane_issuesManager, "f").addEventListener(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.Events.IssuesCountUpdated, __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_updateCounts), this);
    }
    elementsToRestoreScrollPositionsFor() {
        return [__classPrivateFieldGet(this, _IssuesPane_issuesTree, "f").element];
    }
    appendIssueViewToParent(issueView, parent) {
        parent.appendChild(issueView, (a, b) => {
            if (a instanceof _HiddenIssuesRow_js__WEBPACK_IMPORTED_MODULE_6__.HiddenIssuesRow) {
                return 1;
            }
            if (b instanceof _HiddenIssuesRow_js__WEBPACK_IMPORTED_MODULE_6__.HiddenIssuesRow) {
                return -1;
            }
            if (a instanceof _IssueView_js__WEBPACK_IMPORTED_MODULE_10__.IssueView && b instanceof _IssueView_js__WEBPACK_IMPORTED_MODULE_10__.IssueView) {
                return a.getIssueTitle().localeCompare(b.getIssueTitle());
            }
            console.error('The issues tree should only contain IssueView objects as direct children');
            return 0;
        });
        if (parent instanceof _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement) {
            // This is an aggregated view, so we need to update the label for position and size of the treeItem.
            __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_updateItemPositionAndSize).call(this, parent);
        }
    }
    async reveal(issue) {
        await __classPrivateFieldGet(this, _IssuesPane_issueViewUpdatePromise, "f");
        const key = __classPrivateFieldGet(this, _IssuesPane_aggregator, "f").keyForIssue(issue);
        const issueView = __classPrivateFieldGet(this, _IssuesPane_issueViews, "f").get(key);
        if (issueView) {
            if (issueView.isForHiddenIssue()) {
                __classPrivateFieldGet(this, _IssuesPane_hiddenIssuesRow, "f").expand();
                __classPrivateFieldGet(this, _IssuesPane_hiddenIssuesRow, "f").reveal();
            }
            if ((0,_IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.getGroupIssuesByKindSetting)().get() && !issueView.isForHiddenIssue()) {
                const kindView = __classPrivateFieldGet(this, _IssuesPane_kindViews, "f").get(issueView.getIssueKind());
                kindView?.expand();
                kindView?.reveal();
            }
            issueView.expand();
            issueView.reveal();
            issueView.select(false, true);
        }
    }
    wasShown() {
        super.wasShown();
        __classPrivateFieldGet(this, _IssuesPane_issuesTree, "f").registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './issuesTree.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './issuesPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
_IssuesPane_categoryViews = new WeakMap(), _IssuesPane_issueViews = new WeakMap(), _IssuesPane_kindViews = new WeakMap(), _IssuesPane_showThirdPartyCheckbox = new WeakMap(), _IssuesPane_issuesTree = new WeakMap(), _IssuesPane_hiddenIssuesRow = new WeakMap(), _IssuesPane_noIssuesMessageDiv = new WeakMap(), _IssuesPane_issuesManager = new WeakMap(), _IssuesPane_aggregator = new WeakMap(), _IssuesPane_issueViewUpdatePromise = new WeakMap(), _IssuesPane_instances = new WeakSet(), _IssuesPane_createToolbars = function _IssuesPane_createToolbars() {
    const toolbarContainer = this.contentElement.createChild('div', 'issues-toolbar-container');
    toolbarContainer.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.toolbar()}`);
    new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Toolbar('issues-toolbar-left', toolbarContainer);
    const rightToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Toolbar('issues-toolbar-right', toolbarContainer);
    const groupByCategorySetting = getGroupIssuesByCategorySetting();
    const groupByCategoryCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarSettingCheckbox(groupByCategorySetting, i18nString(UIStrings.groupDisplayedIssuesUnder), i18nString(UIStrings.groupByCategory));
    // Hide the option to toggle category grouping for now.
    groupByCategoryCheckbox.setVisible(false);
    rightToolbar.appendToolbarItem(groupByCategoryCheckbox);
    groupByCategorySetting.addChangeListener(() => {
        __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_fullUpdate).call(this, true);
    });
    const groupByKindSetting = (0,_IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.getGroupIssuesByKindSetting)();
    const groupByKindSettingCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarSettingCheckbox(groupByKindSetting, i18nString(UIStrings.groupDisplayedIssuesUnderKind), i18nString(UIStrings.groupByKind));
    rightToolbar.appendToolbarItem(groupByKindSettingCheckbox);
    groupByKindSetting.addChangeListener(() => {
        __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_fullUpdate).call(this, true);
    });
    groupByKindSettingCheckbox.setVisible(true);
    const thirdPartySetting = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.getShowThirdPartyIssuesSetting();
    __classPrivateFieldSet(this, _IssuesPane_showThirdPartyCheckbox, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarSettingCheckbox(thirdPartySetting, i18nString(UIStrings.includeCookieIssuesCausedBy), i18nString(UIStrings.includeThirdpartyCookieIssues)), "f");
    rightToolbar.appendToolbarItem(__classPrivateFieldGet(this, _IssuesPane_showThirdPartyCheckbox, "f"));
    this.setDefaultFocusedElement(__classPrivateFieldGet(this, _IssuesPane_showThirdPartyCheckbox, "f").inputElement);
    rightToolbar.appendSeparator();
    const issueCounter = new _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_3__.IssueCounter.IssueCounter();
    issueCounter.data = {
        tooltipCallback: () => {
            const issueEnumeration = _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_3__.IssueCounter.getIssueCountsEnumeration(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssuesManager.instance(), false);
            issueCounter.title = issueEnumeration;
        },
        displayMode: _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_3__.IssueCounter.DisplayMode.ShowAlways,
        issuesManager: _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssuesManager.instance(),
    };
    issueCounter.id = 'console-issues-counter';
    issueCounter.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.counter('issues')}`);
    const issuesToolbarItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarItem(issueCounter);
    rightToolbar.appendToolbarItem(issuesToolbarItem);
    return { toolbarContainer };
}, _IssuesPane_issueUpdated = function _IssuesPane_issueUpdated(event) {
    __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_scheduleIssueViewUpdate).call(this, event.data);
}, _IssuesPane_scheduleIssueViewUpdate = function _IssuesPane_scheduleIssueViewUpdate(issue) {
    __classPrivateFieldSet(this, _IssuesPane_issueViewUpdatePromise, __classPrivateFieldGet(this, _IssuesPane_issueViewUpdatePromise, "f").then(() => __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_updateIssueView).call(this, issue)), "f");
}, _IssuesPane_updateIssueView = 
/** Don't call directly. Use `scheduleIssueViewUpdate` instead. */
async function _IssuesPane_updateIssueView(issue) {
    let issueView = __classPrivateFieldGet(this, _IssuesPane_issueViews, "f").get(issue.aggregationKey());
    if (!issueView) {
        const description = issue.getDescription();
        if (!description) {
            console.warn('Could not find description for issue code:', issue.code());
            return;
        }
        const markdownDescription = await _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.MarkdownIssueDescription.createIssueDescriptionFromMarkdown(description);
        issueView = new _IssueView_js__WEBPACK_IMPORTED_MODULE_10__.IssueView(issue, markdownDescription);
        __classPrivateFieldGet(this, _IssuesPane_issueViews, "f").set(issue.aggregationKey(), issueView);
        const parent = __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_getIssueViewParent).call(this, issue);
        this.appendIssueViewToParent(issueView, parent);
    }
    else {
        issueView.setIssue(issue);
        const newParent = __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_getIssueViewParent).call(this, issue);
        if (issueView.parent !== newParent &&
            !(newParent instanceof _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutline && issueView.parent === newParent.rootElement())) {
            issueView.parent?.removeChild(issueView);
            this.appendIssueViewToParent(issueView, newParent);
        }
    }
    issueView.update();
    __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_updateCounts).call(this);
}, _IssuesPane_updateItemPositionAndSize = function _IssuesPane_updateItemPositionAndSize(parent) {
    const childNodes = parent.childrenListNode.children;
    let treeItemCount = 0;
    for (let i = 0; i < childNodes.length; i++) {
        const node = childNodes[i];
        if (node.classList.contains('issue')) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setPositionInSet(node, ++treeItemCount);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setSetSize(node, childNodes.length / 2); // Each issue has 2 nodes (issue + description).
        }
    }
}, _IssuesPane_getIssueViewParent = function _IssuesPane_getIssueViewParent(issue) {
    if (issue.isHidden()) {
        return __classPrivateFieldGet(this, _IssuesPane_hiddenIssuesRow, "f");
    }
    if ((0,_IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.getGroupIssuesByKindSetting)().get()) {
        const kind = issue.getKind();
        const view = __classPrivateFieldGet(this, _IssuesPane_kindViews, "f").get(kind);
        if (view) {
            return view;
        }
        const newView = new _IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.IssueKindView(kind);
        __classPrivateFieldGet(this, _IssuesPane_issuesTree, "f").appendChild(newView, (a, b) => {
            if (a instanceof _IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.IssueKindView && b instanceof _IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.IssueKindView) {
                return (0,_IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.issueKindViewSortPriority)(a, b);
            }
            return 0;
        });
        __classPrivateFieldGet(this, _IssuesPane_kindViews, "f").set(kind, newView);
        return newView;
    }
    if (getGroupIssuesByCategorySetting().get()) {
        const category = issue.getCategory();
        const view = __classPrivateFieldGet(this, _IssuesPane_categoryViews, "f").get(category);
        if (view) {
            return view;
        }
        const newView = new IssueCategoryView(category);
        __classPrivateFieldGet(this, _IssuesPane_issuesTree, "f").appendChild(newView, (a, b) => {
            if (a instanceof IssueCategoryView && b instanceof IssueCategoryView) {
                return a.getCategoryName().localeCompare(b.getCategoryName());
            }
            return 0;
        });
        __classPrivateFieldGet(this, _IssuesPane_categoryViews, "f").set(category, newView);
        return newView;
    }
    return __classPrivateFieldGet(this, _IssuesPane_issuesTree, "f");
}, _IssuesPane_clearViews = function _IssuesPane_clearViews(views, preservedSet) {
    for (const [key, view] of Array.from(views.entries())) {
        if (preservedSet?.has(key)) {
            continue;
        }
        view.parent && view.parent.removeChild(view);
        views.delete(key);
    }
}, _IssuesPane_onFullUpdate = function _IssuesPane_onFullUpdate() {
    __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_fullUpdate).call(this, false);
}, _IssuesPane_fullUpdate = function _IssuesPane_fullUpdate(force) {
    __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_clearViews).call(this, __classPrivateFieldGet(this, _IssuesPane_categoryViews, "f"), force ? undefined : __classPrivateFieldGet(this, _IssuesPane_aggregator, "f").aggregatedIssueCategories());
    __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_clearViews).call(this, __classPrivateFieldGet(this, _IssuesPane_kindViews, "f"), force ? undefined : __classPrivateFieldGet(this, _IssuesPane_aggregator, "f").aggregatedIssueKinds());
    __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_clearViews).call(this, __classPrivateFieldGet(this, _IssuesPane_issueViews, "f"), force ? undefined : __classPrivateFieldGet(this, _IssuesPane_aggregator, "f").aggregatedIssueCodes());
    if (__classPrivateFieldGet(this, _IssuesPane_aggregator, "f")) {
        for (const issue of __classPrivateFieldGet(this, _IssuesPane_aggregator, "f").aggregatedIssues()) {
            __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_scheduleIssueViewUpdate).call(this, issue);
        }
    }
    __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_updateCounts).call(this);
}, _IssuesPane_updateIssueKindViewsCount = function _IssuesPane_updateIssueKindViewsCount() {
    for (const view of __classPrivateFieldGet(this, _IssuesPane_kindViews, "f").values()) {
        const count = __classPrivateFieldGet(this, _IssuesPane_issuesManager, "f").numberOfIssues(view.getKind());
        view.update(count);
    }
}, _IssuesPane_updateCounts = function _IssuesPane_updateCounts() {
    __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_showIssuesTreeOrNoIssuesDetectedMessage).call(this, __classPrivateFieldGet(this, _IssuesPane_issuesManager, "f").numberOfIssues(), __classPrivateFieldGet(this, _IssuesPane_issuesManager, "f").numberOfHiddenIssues());
    if ((0,_IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.getGroupIssuesByKindSetting)().get()) {
        __classPrivateFieldGet(this, _IssuesPane_instances, "m", _IssuesPane_updateIssueKindViewsCount).call(this);
    }
}, _IssuesPane_showIssuesTreeOrNoIssuesDetectedMessage = function _IssuesPane_showIssuesTreeOrNoIssuesDetectedMessage(issuesCount, hiddenIssueCount) {
    if (issuesCount > 0 || hiddenIssueCount > 0) {
        __classPrivateFieldGet(this, _IssuesPane_hiddenIssuesRow, "f").hidden = hiddenIssueCount === 0;
        __classPrivateFieldGet(this, _IssuesPane_hiddenIssuesRow, "f").update(hiddenIssueCount);
        __classPrivateFieldGet(this, _IssuesPane_issuesTree, "f").element.hidden = false;
        __classPrivateFieldGet(this, _IssuesPane_noIssuesMessageDiv, "f").style.display = 'none';
        const firstChild = __classPrivateFieldGet(this, _IssuesPane_issuesTree, "f").firstChild();
        if (firstChild) {
            firstChild.select(/* omitFocus= */ true);
            this.setDefaultFocusedElement(firstChild.listItemElement);
        }
    }
    else {
        __classPrivateFieldGet(this, _IssuesPane_issuesTree, "f").element.hidden = true;
        if (__classPrivateFieldGet(this, _IssuesPane_showThirdPartyCheckbox, "f")) {
            this.setDefaultFocusedElement(__classPrivateFieldGet(this, _IssuesPane_showThirdPartyCheckbox, "f").inputElement);
        }
        // We alreay know that issesCount is zero here.
        const hasOnlyThirdPartyIssues = __classPrivateFieldGet(this, _IssuesPane_issuesManager, "f").numberOfAllStoredIssues() > 0;
        __classPrivateFieldGet(this, _IssuesPane_noIssuesMessageDiv, "f").textContent = hasOnlyThirdPartyIssues ?
            i18nString(UIStrings.onlyThirdpartyCookieIssues) :
            i18nString(UIStrings.noIssuesDetectedSoFar);
        __classPrivateFieldGet(this, _IssuesPane_noIssuesMessageDiv, "f").style.display = 'flex';
    }
};


/***/ })

}]);