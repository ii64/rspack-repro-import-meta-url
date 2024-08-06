"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_issues_IssuesPane_js"],{

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

/***/ }),

/***/ "./panels/issues/IssueKindView.js":
/*!****************************************!*\
  !*** ./panels/issues/IssueKindView.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IssueKindView: () => (/* binding */ IssueKindView),
/* harmony export */   getClassNameFromKind: () => (/* binding */ getClassNameFromKind),
/* harmony export */   getGroupIssuesByKindSetting: () => (/* binding */ getGroupIssuesByKindSetting),
/* harmony export */   issueKindViewSortPriority: () => (/* binding */ issueKindViewSortPriority)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */ var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/adorners/adorners.js */ "./ui/components/adorners/adorners.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/issue_counter/issue_counter.js */ "./ui/components/issue_counter/issue_counter.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.js */ "./panels/issues/components/components.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








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
    if (a.getKind() === "PageError" /* IssuesManager.Issue.IssueKind.PageError */) {
        return -1;
    }
    if (a.getKind() === "BreakingChange" /* IssuesManager.Issue.IssueKind.BreakingChange */ &&
        b.getKind() === "Improvement" /* IssuesManager.Issue.IssueKind.Improvement */) {
        return -1;
    }
    return 1;
}
function getClassNameFromKind(kind) {
    switch (kind) {
        case "BreakingChange" /* IssuesManager.Issue.IssueKind.BreakingChange */:
            return 'breaking-changes';
        case "Improvement" /* IssuesManager.Issue.IssueKind.Improvement */:
            return 'improvements';
        case "PageError" /* IssuesManager.Issue.IssueKind.PageError */:
            return 'page-errors';
    }
}
class IssueKindView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement {
    #kind;
    #issueCount;
    constructor(kind) {
        super(undefined, true);
        this.#kind = kind;
        this.#issueCount = document.createElement('span');
        this.toggleOnClick = true;
        this.listItemElement.classList.add('issue-kind');
        this.listItemElement.classList.add(getClassNameFromKind(kind));
        this.childrenListElement.classList.add('issue-kind-body');
    }
    getKind() {
        return this.#kind;
    }
    getHideAllCurrentKindString() {
        switch (this.#kind) {
            case "PageError" /* IssuesManager.Issue.IssueKind.PageError */:
                return i18nString(UIStrings.hideAllCurrentPageErrors);
            case "Improvement" /* IssuesManager.Issue.IssueKind.Improvement */:
                return i18nString(UIStrings.hideAllCurrentImprovements);
            case "BreakingChange" /* IssuesManager.Issue.IssueKind.BreakingChange */:
                return i18nString(UIStrings.hideAllCurrentBreakingChanges);
        }
    }
    #appendHeader() {
        const header = document.createElement('div');
        header.classList.add('header');
        const issueKindIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon();
        issueKindIcon.data = _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_5__.IssueCounter.getIssueKindIconData(this.#kind);
        issueKindIcon.classList.add('leading-issue-icon');
        const countAdorner = new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_3__.Adorner.Adorner();
        countAdorner.data = {
            name: 'countWrapper',
            content: this.#issueCount,
        };
        countAdorner.classList.add('aggregated-issues-count');
        this.#issueCount.textContent = '0';
        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.getIssueKindName(this.#kind);
        const hideAvailableIssuesBtn = new _components_components_js__WEBPACK_IMPORTED_MODULE_7__.HideIssuesMenu.HideIssuesMenu();
        hideAvailableIssuesBtn.classList.add('hide-available-issues');
        hideAvailableIssuesBtn.data = {
            menuItemLabel: this.getHideAllCurrentKindString(),
            menuItemAction: () => {
                const setting = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.getHideIssueByCodeSetting();
                const values = setting.get();
                for (const issue of _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssuesManager.instance().issues()) {
                    if (issue.getKind() === this.#kind) {
                        values[issue.code()] = "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */;
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
    }
    onattach() {
        this.#appendHeader();
        this.expand();
    }
    update(count) {
        this.#issueCount.textContent = `${count}`;
    }
}
//# sourceMappingURL=IssueKindView.js.map

/***/ }),

/***/ "./panels/issues/IssuesPane.js":
/*!*************************************!*\
  !*** ./panels/issues/IssuesPane.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IssuesPane: () => (/* binding */ IssuesPane),
/* harmony export */   getGroupIssuesByCategorySetting: () => (/* binding */ getGroupIssuesByCategorySetting)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */ var _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/issue_counter/issue_counter.js */ "./ui/components/issue_counter/issue_counter.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _HiddenIssuesRow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HiddenIssuesRow.js */ "./panels/issues/HiddenIssuesRow.js");
/* harmony import */ var _IssueAggregator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IssueAggregator.js */ "./panels/issues/IssueAggregator.js");
/* harmony import */ var _IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IssueKindView.js */ "./panels/issues/IssueKindView.js");
/* harmony import */ var _issuesPane_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./issuesPane.css.js */ "./panels/issues/issuesPane.css.js");
/* harmony import */ var _issuesTree_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./issuesTree.css.js */ "./panels/issues/issuesTree.css.js");
/* harmony import */ var _IssueView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./IssueView.js */ "./panels/issues/IssueView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.












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
    #category;
    constructor(category) {
        super();
        this.#category = category;
        this.toggleOnClick = true;
        this.listItemElement.classList.add('issue-category');
        this.childrenListElement.classList.add('issue-category-body');
    }
    getCategoryName() {
        switch (this.#category) {
            case "CrossOriginEmbedderPolicy" /* IssuesManager.Issue.IssueCategory.CrossOriginEmbedderPolicy */:
                return i18nString(UIStrings.crossOriginEmbedderPolicy);
            case "MixedContent" /* IssuesManager.Issue.IssueCategory.MixedContent */:
                return i18nString(UIStrings.mixedContent);
            case "Cookie" /* IssuesManager.Issue.IssueCategory.Cookie */:
                return i18nString(UIStrings.samesiteCookie);
            case "HeavyAd" /* IssuesManager.Issue.IssueCategory.HeavyAd */:
                return i18nString(UIStrings.heavyAds);
            case "ContentSecurityPolicy" /* IssuesManager.Issue.IssueCategory.ContentSecurityPolicy */:
                return i18nString(UIStrings.contentSecurityPolicy);
            case "LowTextContrast" /* IssuesManager.Issue.IssueCategory.LowTextContrast */:
                return i18nString(UIStrings.lowTextContrast);
            case "Cors" /* IssuesManager.Issue.IssueCategory.Cors */:
                return i18nString(UIStrings.cors);
            case "AttributionReporting" /* IssuesManager.Issue.IssueCategory.AttributionReporting */:
                return i18nString(UIStrings.attributionReporting);
            case "QuirksMode" /* IssuesManager.Issue.IssueCategory.QuirksMode */:
                return i18nString(UIStrings.quirksMode);
            case "Generic" /* IssuesManager.Issue.IssueCategory.Generic */:
                return i18nString(UIStrings.generic);
            case "Other" /* IssuesManager.Issue.IssueCategory.Other */:
                return i18nString(UIStrings.other);
        }
    }
    onattach() {
        this.#appendHeader();
    }
    #appendHeader() {
        const header = document.createElement('div');
        header.classList.add('header');
        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = this.getCategoryName();
        header.appendChild(title);
        this.listItemElement.appendChild(header);
    }
}
function getGroupIssuesByCategorySetting() {
    return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('group-issues-by-category', false);
}
class IssuesPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox {
    #categoryViews;
    #issueViews;
    #kindViews;
    #showThirdPartyCheckbox;
    #issuesTree;
    #hiddenIssuesRow;
    #noIssuesMessageDiv;
    #issuesManager;
    #aggregator;
    #issueViewUpdatePromise = Promise.resolve();
    constructor() {
        super(true);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.panel('issues')}`);
        this.contentElement.classList.add('issues-pane');
        this.#categoryViews = new Map();
        this.#kindViews = new Map();
        this.#issueViews = new Map();
        this.#showThirdPartyCheckbox = null;
        this.#createToolbars();
        this.#issuesTree = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutlineInShadow();
        this.#issuesTree.setShowSelectionOnKeyboardFocus(true);
        this.#issuesTree.contentElement.classList.add('issues');
        this.contentElement.appendChild(this.#issuesTree.element);
        this.#hiddenIssuesRow = new _HiddenIssuesRow_js__WEBPACK_IMPORTED_MODULE_6__.HiddenIssuesRow();
        this.#issuesTree.appendChild(this.#hiddenIssuesRow);
        this.#noIssuesMessageDiv = document.createElement('div');
        this.#noIssuesMessageDiv.classList.add('issues-pane-no-issues');
        this.contentElement.appendChild(this.#noIssuesMessageDiv);
        this.#issuesManager = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssuesManager.instance();
        this.#aggregator = new _IssueAggregator_js__WEBPACK_IMPORTED_MODULE_7__.IssueAggregator(this.#issuesManager);
        this.#aggregator.addEventListener("AggregatedIssueUpdated" /* IssueAggregatorEvents.AggregatedIssueUpdated */, this.#issueUpdated, this);
        this.#aggregator.addEventListener("FullUpdateRequired" /* IssueAggregatorEvents.FullUpdateRequired */, this.#onFullUpdate, this);
        this.#hiddenIssuesRow.hidden = this.#issuesManager.numberOfHiddenIssues() === 0;
        this.#onFullUpdate();
        this.#issuesManager.addEventListener("IssuesCountUpdated" /* IssuesManager.IssuesManager.Events.IssuesCountUpdated */, this.#updateCounts, this);
    }
    elementsToRestoreScrollPositionsFor() {
        return [this.#issuesTree.element];
    }
    #createToolbars() {
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
            this.#fullUpdate(true);
        });
        const groupByKindSetting = (0,_IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.getGroupIssuesByKindSetting)();
        const groupByKindSettingCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarSettingCheckbox(groupByKindSetting, i18nString(UIStrings.groupDisplayedIssuesUnderKind), i18nString(UIStrings.groupByKind));
        rightToolbar.appendToolbarItem(groupByKindSettingCheckbox);
        groupByKindSetting.addChangeListener(() => {
            this.#fullUpdate(true);
        });
        groupByKindSettingCheckbox.setVisible(true);
        const thirdPartySetting = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.getShowThirdPartyIssuesSetting();
        this.#showThirdPartyCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarSettingCheckbox(thirdPartySetting, i18nString(UIStrings.includeCookieIssuesCausedBy), i18nString(UIStrings.includeThirdpartyCookieIssues));
        rightToolbar.appendToolbarItem(this.#showThirdPartyCheckbox);
        this.setDefaultFocusedElement(this.#showThirdPartyCheckbox.inputElement);
        rightToolbar.appendSeparator();
        const issueCounter = new _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_3__.IssueCounter.IssueCounter();
        issueCounter.data = {
            tooltipCallback: () => {
                const issueEnumeration = _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_3__.IssueCounter.getIssueCountsEnumeration(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssuesManager.instance(), false);
                issueCounter.title = issueEnumeration;
            },
            displayMode: "ShowAlways" /* IssueCounter.IssueCounter.DisplayMode.ShowAlways */,
            issuesManager: _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssuesManager.instance(),
        };
        issueCounter.id = 'console-issues-counter';
        issueCounter.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.counter('issues')}`);
        const issuesToolbarItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarItem(issueCounter);
        rightToolbar.appendToolbarItem(issuesToolbarItem);
        return { toolbarContainer };
    }
    #issueUpdated(event) {
        this.#scheduleIssueViewUpdate(event.data);
    }
    #scheduleIssueViewUpdate(issue) {
        this.#issueViewUpdatePromise = this.#issueViewUpdatePromise.then(() => this.#updateIssueView(issue));
    }
    /** Don't call directly. Use `scheduleIssueViewUpdate` instead. */
    async #updateIssueView(issue) {
        let issueView = this.#issueViews.get(issue.aggregationKey());
        if (!issueView) {
            const description = issue.getDescription();
            if (!description) {
                console.warn('Could not find description for issue code:', issue.code());
                return;
            }
            const markdownDescription = await _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.MarkdownIssueDescription.createIssueDescriptionFromMarkdown(description);
            issueView = new _IssueView_js__WEBPACK_IMPORTED_MODULE_11__.IssueView(issue, markdownDescription);
            this.#issueViews.set(issue.aggregationKey(), issueView);
            const parent = this.#getIssueViewParent(issue);
            this.appendIssueViewToParent(issueView, parent);
        }
        else {
            issueView.setIssue(issue);
            const newParent = this.#getIssueViewParent(issue);
            if (issueView.parent !== newParent &&
                !(newParent instanceof _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutline && issueView.parent === newParent.rootElement())) {
                issueView.parent?.removeChild(issueView);
                this.appendIssueViewToParent(issueView, newParent);
            }
        }
        issueView.update();
        this.#updateCounts();
    }
    appendIssueViewToParent(issueView, parent) {
        parent.appendChild(issueView, (a, b) => {
            if (a instanceof _HiddenIssuesRow_js__WEBPACK_IMPORTED_MODULE_6__.HiddenIssuesRow) {
                return 1;
            }
            if (b instanceof _HiddenIssuesRow_js__WEBPACK_IMPORTED_MODULE_6__.HiddenIssuesRow) {
                return -1;
            }
            if (a instanceof _IssueView_js__WEBPACK_IMPORTED_MODULE_11__.IssueView && b instanceof _IssueView_js__WEBPACK_IMPORTED_MODULE_11__.IssueView) {
                return a.getIssueTitle().localeCompare(b.getIssueTitle());
            }
            console.error('The issues tree should only contain IssueView objects as direct children');
            return 0;
        });
        if (parent instanceof _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement) {
            // This is an aggregated view, so we need to update the label for position and size of the treeItem.
            this.#updateItemPositionAndSize(parent);
        }
    }
    #updateItemPositionAndSize(parent) {
        const childNodes = parent.childrenListNode.children;
        let treeItemCount = 0;
        for (let i = 0; i < childNodes.length; i++) {
            const node = childNodes[i];
            if (node.classList.contains('issue')) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setPositionInSet(node, ++treeItemCount);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setSetSize(node, childNodes.length / 2); // Each issue has 2 nodes (issue + description).
            }
        }
    }
    #getIssueViewParent(issue) {
        if (issue.isHidden()) {
            return this.#hiddenIssuesRow;
        }
        if ((0,_IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.getGroupIssuesByKindSetting)().get()) {
            const kind = issue.getKind();
            const view = this.#kindViews.get(kind);
            if (view) {
                return view;
            }
            const newView = new _IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.IssueKindView(kind);
            this.#issuesTree.appendChild(newView, (a, b) => {
                if (a instanceof _IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.IssueKindView && b instanceof _IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.IssueKindView) {
                    return (0,_IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.issueKindViewSortPriority)(a, b);
                }
                return 0;
            });
            this.#kindViews.set(kind, newView);
            return newView;
        }
        if (getGroupIssuesByCategorySetting().get()) {
            const category = issue.getCategory();
            const view = this.#categoryViews.get(category);
            if (view) {
                return view;
            }
            const newView = new IssueCategoryView(category);
            this.#issuesTree.appendChild(newView, (a, b) => {
                if (a instanceof IssueCategoryView && b instanceof IssueCategoryView) {
                    return a.getCategoryName().localeCompare(b.getCategoryName());
                }
                return 0;
            });
            this.#categoryViews.set(category, newView);
            return newView;
        }
        return this.#issuesTree;
    }
    #clearViews(views, preservedSet) {
        for (const [key, view] of Array.from(views.entries())) {
            if (preservedSet?.has(key)) {
                continue;
            }
            view.parent && view.parent.removeChild(view);
            views.delete(key);
        }
    }
    #onFullUpdate() {
        this.#fullUpdate(false);
    }
    #fullUpdate(force) {
        this.#clearViews(this.#categoryViews, force ? undefined : this.#aggregator.aggregatedIssueCategories());
        this.#clearViews(this.#kindViews, force ? undefined : this.#aggregator.aggregatedIssueKinds());
        this.#clearViews(this.#issueViews, force ? undefined : this.#aggregator.aggregatedIssueCodes());
        if (this.#aggregator) {
            for (const issue of this.#aggregator.aggregatedIssues()) {
                this.#scheduleIssueViewUpdate(issue);
            }
        }
        this.#updateCounts();
    }
    #updateIssueKindViewsCount() {
        for (const view of this.#kindViews.values()) {
            const count = this.#issuesManager.numberOfIssues(view.getKind());
            view.update(count);
        }
    }
    #updateCounts() {
        this.#showIssuesTreeOrNoIssuesDetectedMessage(this.#issuesManager.numberOfIssues(), this.#issuesManager.numberOfHiddenIssues());
        if ((0,_IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.getGroupIssuesByKindSetting)().get()) {
            this.#updateIssueKindViewsCount();
        }
    }
    #showIssuesTreeOrNoIssuesDetectedMessage(issuesCount, hiddenIssueCount) {
        if (issuesCount > 0 || hiddenIssueCount > 0) {
            this.#hiddenIssuesRow.hidden = hiddenIssueCount === 0;
            this.#hiddenIssuesRow.update(hiddenIssueCount);
            this.#issuesTree.element.hidden = false;
            this.#noIssuesMessageDiv.style.display = 'none';
            const firstChild = this.#issuesTree.firstChild();
            if (firstChild) {
                firstChild.select(/* omitFocus= */ true);
                this.setDefaultFocusedElement(firstChild.listItemElement);
            }
        }
        else {
            this.#issuesTree.element.hidden = true;
            if (this.#showThirdPartyCheckbox) {
                this.setDefaultFocusedElement(this.#showThirdPartyCheckbox.inputElement);
            }
            // We alreay know that issesCount is zero here.
            const hasOnlyThirdPartyIssues = this.#issuesManager.numberOfAllStoredIssues() > 0;
            this.#noIssuesMessageDiv.textContent = hasOnlyThirdPartyIssues ?
                i18nString(UIStrings.onlyThirdpartyCookieIssues) :
                i18nString(UIStrings.noIssuesDetectedSoFar);
            this.#noIssuesMessageDiv.style.display = 'flex';
        }
    }
    async reveal(issue) {
        await this.#issueViewUpdatePromise;
        const key = this.#aggregator.keyForIssue(issue);
        const issueView = this.#issueViews.get(key);
        if (issueView) {
            if (issueView.isForHiddenIssue()) {
                this.#hiddenIssuesRow.expand();
                this.#hiddenIssuesRow.reveal();
            }
            if ((0,_IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.getGroupIssuesByKindSetting)().get() && !issueView.isForHiddenIssue()) {
                const kindView = this.#kindViews.get(issueView.getIssueKind());
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
        this.#issuesTree.registerCSSFiles([_issuesTree_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]]);
        this.registerCSSFiles([_issuesPane_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]]);
    }
}
//# sourceMappingURL=IssuesPane.js.map

/***/ }),

/***/ "./panels/issues/issuesPane.css.js":
/*!*****************************************!*\
  !*** ./panels/issues/issuesPane.css.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (c) 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.issues-pane {
  overflow: hidden;
}

.issues-pane-no-issues {
  align-items: center;
  background-color: var(--sys-color-cdt-base-container);
  display: flex;
  flex: 1 1 auto;
  font-size: 14px;
  justify-content: center;
  padding: 30px;
}

.issues-toolbar-container {
  display: flex;
  flex: none;
}

.issues-toolbar-container > .toolbar {
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: 1px solid var(--sys-color-divider);
}

.issues-toolbar-left {
  flex: 1 1 auto;
}

.issues-toolbar-right {
  padding-right: 6px;
}

/*# sourceURL=issuesPane.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/issues/issuesTree.css.js":
/*!*****************************************!*\
  !*** ./panels/issues/issuesTree.css.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (c) 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

/* Remove container padding from TreeOutline.
 * Allows issues to touch the edges of the container. */
:host,
.issues {
  padding: 0;
  overflow: auto;
}

.issues {
  --issue-indent: 8px;
}

/* Override whitespace behavior for tree items to allow wrapping */
.issues li {
  white-space: normal;
  align-items: flex-start;
  min-height: var(--sys-size-13);
}

/* Hide toggle for tree items which cannot be collapsed */
.issues .always-parent::before {
  display: none;
}

.issues li.parent::before {
  margin-top: 10px;
}

.issues .affected-resources li.parent::before {
  margin-top: 3px;
  margin-right: 0;
}

.issue-category,
.issue-kind,
.issue {
  padding: 0 8px;
  padding-left: var(--issue-indent);
  overflow: hidden;
  flex: none;
  transition: background-color 200ms;
  border: 1px solid var(--sys-color-divider);
  border-width: 0 0 1px;
}

.issue-category.hidden-issues.parent.expanded,
.issue-kind.parent.expanded {
  border-width: 0 0 1px;
  background-color: var(--sys-color-surface2);
}

.issue-category + .children .issue,
.issue.expanded {
  background: var(--sys-color-cdt-base-container);
}

.issue.expanded {
  border-width: 0;
}

.issue.selected,
.issue.expanded.selected {
  background-color: var(--sys-color-surface2);

  &:focus {
    background-color: var(--sys-color-tonal-container);
  }
}

.tree-outline li:not(.selected):hover .selection {
  background-color: unset;
}

.tree-outline li.issue:not(.expanded):not(.selected):hover .selection {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.tree-outline li.issue.expanded:not(.selected):hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.unhide-all-issues-button {
  margin: 0;
}

p {
  margin-block-start: 2px;
  margin-block-end: 2px;
}

/* Override selected tree item styles for issues to avoid changing width. */
.tree-outline-disclosure:not(.tree-outline-disclosure-hide-overflow) .tree-outline.hide-selection-when-blurred .issue-category.selected:focus-visible,
.tree-outline-disclosure:not(.tree-outline-disclosure-hide-overflow) .tree-outline.hide-selection-when-blurred .issue-kind.selected:focus-visible,
.tree-outline-disclosure:not(.tree-outline-disclosure-hide-overflow) .tree-outline.hide-selection-when-blurred .issue.selected:focus-visible {
  width: auto;
  padding-right: 8px;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 0;
  cursor: pointer;
  width: 100%;

  & > :not(.unhide-all-issues-button) {
    margin-top: var(--sys-size-2);
  }
}

.header devtools-hide-issues-menu {
  visibility: hidden;
}

.header:hover devtools-hide-issues-menu,
.issue.selected devtools-hide-issues-menu {
  visibility: visible;
}

.title {
  flex: 1;
  font-size: 12px;
  color: var(--sys-color-on-surface);
  font-weight: normal;
  user-select: text;
  padding-top: 2px;
}

.issue.expanded .title {
  font-weight: 450;
}

.body.children {
  border-bottom: 1px solid var(--sys-color-divider);
  padding: 6px 0;
  position: relative;
  padding-left: calc(var(--issue-indent) + 43px);
  padding-bottom: 26px;
  padding-right: 8px;
}

.issue-category + .children,
.issue-kind + .children {
  --issue-indent: 24px;

  padding-left: 0;
}

/* Show a colored border on the left side of opened issues. */
.body::before {
  content: "";
  display: block;
  position: absolute;
  left: calc(var(--issue-indent) + 23px);
  top: 0;
  bottom: 20px;
  width: 2px;
}

.issue-kind-breaking-change.body::before {
  border-left: 2px solid var(--issue-color-yellow);
}

.issue-kind-page-error.body::before {
  border-left: 2px solid var(--issue-color-red);
}

.issue-kind-improvement.body::before {
  border-left: 2px solid var(--issue-color-blue);
}

devtools-icon.leading-issue-icon {
  margin: 1px 0 -1px 7px;
}

.message {
  line-height: 18px;
  font-size: 12px;
  color: var(--sys-color-token-subtle);
  margin-bottom: 4px;
  user-select: text;
}

.message p {
  margin-bottom: 16px;
}

.message li {
  margin-top: 8px;
}

.message code {
  color: var(--sys-color-on-surface);
  padding: 0 2px;
  font-size: 12px;
  user-select: text;
  cursor: text;
  background: var(--sys-color-surface2);
}

.separator::before {
  content: "·";
  padding-left: 1ex;
  padding-right: 1ex;
}

.link {
  font-size: 12px;
  color: var(--sys-color-primary);
}

.link-wrapper {
  margin-top: 15px;
  user-select: text;
}

.affected-resources-label,
.resolutions-label {
  margin-top: 5px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--sys-color-on-surface);
  display: inline-block;
}

.link-list {
  list-style-type: none;
  list-style-position: inside;
  padding-inline-start: 0;
}

.resolutions-list {
  list-style-type: none;
  list-style-position: inside;
  padding-inline-start: 0;
}

/* We inherit all the styles from treeoutline, but these are simple text <li>, so we override some styles */
.link-list li::before {
  content: none;
  mask-image: none;
}

.resolutions-list li::before {
  content: "→";
  mask-image: none;
  padding-right: 5px;
  position: relative;
  top: -1px;
}

.resolutions-list li {
  display: list-item;
}

ul > li.plain-enum {
  display: list-item;
}

/* This is a hack because the tree view's CSS overrides list styling in a non-compositional way. This
   can be removed once we've moved to proper components. */
ul > li.plain-enum::before {
  content: "";
  padding: 0;
  margin: 0;
  max-width: 0;
}

.affected-resources-label + .affected-resources {
  padding: 3px 0 0;
  position: relative;
  user-select: text;
}

.affected-resource-label {
  font-size: 12px;
  line-height: 18px;
  color: var(--sys-color-on-surface);
  position: relative;
  cursor: pointer;
}

.affected-resource-cookie {
  font-size: 12px;
  line-height: 18px;
  border: 0;
  border-collapse: collapse;
}

.affected-resource-element {
  font-size: 12px;
  line-height: 18px;
  color: var(--sys-color-primary);
  border: 0;
  border-collapse: collapse;
}

.affected-resource-row {
  font-size: 12px;
  line-height: 18px;
  border: 0;
  border-collapse: collapse;
  vertical-align: top;
}

.affected-resource-mixed-content {
  font-size: 12px;
  line-height: 18px;
  border: 0;
  border-collapse: collapse;
}

.affected-resource-heavy-ad {
  font-size: 12px;
  line-height: 18px;
  border: 0;
  border-collapse: collapse;
}

.affected-resource-request {
  font-size: 12px;
  line-height: 18px;
  border: 0;
  border-collapse: collapse;
}

.affected-resource-source {
  font-size: 12px;
  line-height: 18px;
  color: var(--sys-color-primary);
  border: 0;
  border-collapse: collapse;
}

.affected-resource-list {
  border-spacing: 10px 0;
  margin-left: -12px;
}

.affected-resource-header {
  font-size: 12px;
  color: var(--sys-color-on-surface);
  padding-left: 2px;
}

.code-example {
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
}

.affected-resource-blocked-status {
  color: var(--issue-color-red);
}

.affected-resource-report-only-status {
  color: var(--issue-color-yellow);
}

.affected-resource-cookie-info {
  color: var(--sys-color-token-subtle);
  padding: 2px;
  text-align: right;
}

.affected-resource-cookie-info-header {
  text-align: right;
}

.affected-resource-mixed-content-info {
  color: var(--sys-color-token-subtle);
  padding: 2px;
}

.affected-resource-heavy-ad-info {
  color: var(--sys-color-token-subtle);
  padding: 2px;
}

.affected-resource-heavy-ad-info-frame {
  display: flex;
  align-items: center;
  color: var(--sys-color-token-subtle);
  padding: 2px;
}

.affected-resource-cell {
  color: var(--sys-color-token-subtle);
  padding: 2px;
}

.affected-resource-cell.link {
  color: var(--sys-color-primary);
}

.affected-resource-cell span.icon {
  margin-right: 0.5ex;
  vertical-align: sub;
}

.affected-resources > .parent {
  margin-top: 0;
  padding: 2px 5px 0;
}

.affected-resources > .parent.expanded {
  background: var(--sys-color-cdt-base-container);
}

.affected-resources > .children.expanded {
  background: var(--sys-color-cdt-base-container);
  padding: 6px 0 9px 5px;
}

.aggregated-issues-count {
  padding: 3px 7px 0;
}

.affected-resource-directive-info-header {
  text-align: left;
}

.affected-resource-directive {
  font-size: 12px;
  line-height: 18px;
  border: 0;
  border-collapse: collapse;
}

.affected-resource-directive-info {
  color: var(--sys-color-token-subtle);
  padding: 2px;
  text-align: left;
}

.devtools-link {
  padding-top: 4px;
}

devtools-icon.link-icon {
  vertical-align: sub;
  margin-right: 0.5ch;
}

devtools-icon.elements-panel,
devtools-icon.network-panel {
  margin-right: 0.5ex;
  vertical-align: baseline;
  height: 14px;
}

@media (forced-colors: active) {
  .title {
    color: ButtonText;
  }

  .tree-outline:not(.hide-selection-when-blurred) .selected .header .title,
  .tree-outline.hide-selection-when-blurred .selected:focus-visible .header .title {
    color: HighlightText;
  }
}

/*# sourceURL=issuesTree.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);