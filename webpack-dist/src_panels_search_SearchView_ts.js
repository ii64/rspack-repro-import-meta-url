"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_search_SearchView_ts"],{

/***/ "./src/panels/search/SearchView.ts":
/*!*****************************************!*\
  !*** ./src/panels/search/SearchView.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchView: () => (/* binding */ SearchView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _SearchResultsPane_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SearchResultsPane.js */ "./src/panels/search/SearchResultsPane.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './searchView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2014 The Chromium Authors. All rights reserved.
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
var _SearchView_instances, _SearchView_throttler, _SearchView_pendingSearchResults, _SearchView_addPendingSearchResults;










const UIStrings = {
    /**
     *@description Placeholder text of a search bar
     */
    find: 'Find',
    /**
     *@description Tooltip text on a toggle to enable search by matching case of the input
     */
    enableCaseSensitive: 'Enable case sensitive search',
    /**
     *@description Tooltip text on a toggle to disable search by matching case of the input
     */
    disableCaseSensitive: 'Disable case sensitive search',
    /**
     *@description Tooltip text on a toggle to enable searching with regular expression
     */
    enableRegularExpression: 'Enable regular expressions',
    /**
     *@description Tooltip text on a toggle to disable searching with regular expression
     */
    disableRegularExpression: 'Disable regular expressions',
    /**
     *@description Text to refresh the page
     */
    refresh: 'Refresh',
    /**
     *@description Tooltip text to clear the search input field
     */
    clearInput: 'Clear',
    /**
     *@description Text to clear content
     */
    clear: 'Clear search',
    /**
     *@description Search message element text content in Search View of the Search tab
     */
    indexing: 'Indexing…',
    /**
     *@description Text to indicate the searching is in progress
     */
    searching: 'Searching…',
    /**
     *@description Text in Search View of the Search tab
     */
    indexingInterrupted: 'Indexing interrupted.',
    /**
     *@description Search results message element text content in Search View of the Search tab
     */
    foundMatchingLineInFile: 'Found 1 matching line in 1 file.',
    /**
     *@description Search results message element text content in Search View of the Search tab
     *@example {2} PH1
     */
    foundDMatchingLinesInFile: 'Found {PH1} matching lines in 1 file.',
    /**
     *@description Search results message element text content in Search View of the Search tab
     *@example {2} PH1
     *@example {2} PH2
     */
    foundDMatchingLinesInDFiles: 'Found {PH1} matching lines in {PH2} files.',
    /**
     *@description Search results message element text content in Search View of the Search tab
     */
    noMatchesFound: 'No matches found.',
    /**
     *@description Text in Search View of the Search tab
     */
    searchFinished: 'Search finished.',
    /**
     *@description Text in Search View of the Search tab
     */
    searchInterrupted: 'Search interrupted.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/search/SearchView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
function createSearchToggleButton(iconName, jslogContext) {
    const button = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button();
    button.data = {
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Variant.ICON_TOGGLE,
        size: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Size.SMALL,
        iconName,
        toggledIconName: iconName,
        toggleType: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.ToggleType.PRIMARY,
        toggled: false,
        jslogContext,
    };
    return button;
}
class SearchView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox {
    constructor(settingKey, throttler) {
        super(true);
        _SearchView_instances.add(this);
        Object.defineProperty(this, "focusOnShow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isIndexing", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchMatchesCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchResultsCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nonEmptySearchResultsCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchingView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "notFoundView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchConfig", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pendingSearchConfig", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchResultsPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "progressIndicator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "visiblePane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchPanelElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchResultsElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "search", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "matchCaseButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "regexButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchMessageElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchProgressPlaceholderElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchResultsMessageElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "advancedSearchConfig", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchScope", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // We throttle adding search results, otherwise we trigger DOM layout for each
        // result added.
        _SearchView_throttler.set(this, void 0);
        _SearchView_pendingSearchResults.set(this, []);
        this.setMinimumSize(0, 40);
        this.focusOnShow = false;
        this.isIndexing = false;
        this.searchId = 1;
        this.searchMatchesCount = 0;
        this.searchResultsCount = 0;
        this.nonEmptySearchResultsCount = 0;
        this.searchingView = null;
        this.notFoundView = null;
        this.searchConfig = null;
        this.pendingSearchConfig = null;
        this.searchResultsPane = null;
        this.progressIndicator = null;
        this.visiblePane = null;
        __classPrivateFieldSet(this, _SearchView_throttler, throttler, "f");
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.panel('search').track({ resize: true })}`);
        this.contentElement.classList.add('search-view');
        this.contentElement.addEventListener('keydown', event => {
            this.onKeyDownOnPanel(event);
        });
        this.searchPanelElement = this.contentElement.createChild('div', 'search-drawer-header');
        this.searchResultsElement = this.contentElement.createChild('div');
        this.searchResultsElement.className = 'search-results';
        const searchContainer = document.createElement('div');
        searchContainer.classList.add('search-container');
        const searchElements = searchContainer.createChild('div', 'toolbar-item-search');
        const searchIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('search');
        searchElements.appendChild(searchIcon);
        this.search = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.HistoryInput.HistoryInput.create();
        this.search.addEventListener('keydown', event => {
            this.onKeyDown(event);
        });
        this.search.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.textField().track({ change: true, keydown: 'ArrowUp|ArrowDown|Enter' })}`);
        searchElements.appendChild(this.search);
        this.search.placeholder = i18nString(UIStrings.find);
        this.search.setAttribute('type', 'search');
        this.search.setAttribute('results', '0');
        this.search.setAttribute('size', '100');
        this.search.classList.add('search-toolbar-input');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(this.search, this.search.placeholder);
        const clearInputFieldButton = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button();
        clearInputFieldButton.data = {
            variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Variant.ICON,
            size: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Size.SMALL,
            iconName: 'cross-circle-filled',
            jslogContext: 'clear-input',
            title: i18nString(UIStrings.clearInput),
        };
        clearInputFieldButton.classList.add('clear-button');
        clearInputFieldButton.addEventListener('click', () => {
            this.onSearchInputClear();
        });
        clearInputFieldButton.tabIndex = -1;
        searchElements.appendChild(clearInputFieldButton);
        const regexIconName = 'regular-expression';
        this.regexButton = createSearchToggleButton(regexIconName, regexIconName);
        this.regexButton.addEventListener('click', () => this.regexButtonToggled());
        searchElements.appendChild(this.regexButton);
        const matchCaseIconName = 'match-case';
        this.matchCaseButton = createSearchToggleButton(matchCaseIconName, matchCaseIconName);
        this.matchCaseButton.addEventListener('click', () => this.matchCaseButtonToggled());
        searchElements.appendChild(this.matchCaseButton);
        this.searchPanelElement.appendChild(searchContainer);
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('search-toolbar', this.searchPanelElement);
        toolbar.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toolbar()}`);
        const refreshButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.refresh), 'refresh', undefined, 'search.refresh');
        const clearButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.clear), 'clear', undefined, 'search.clear');
        toolbar.appendToolbarItem(refreshButton);
        toolbar.appendToolbarItem(clearButton);
        refreshButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton.Events.Click, () => this.onAction());
        clearButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton.Events.Click, () => {
            this.resetSearch();
            this.onSearchInputClear();
        });
        const searchStatusBarElement = this.contentElement.createChild('div', 'search-toolbar-summary');
        this.searchMessageElement = searchStatusBarElement.createChild('div', 'search-message');
        this.searchProgressPlaceholderElement = searchStatusBarElement.createChild('div', 'flex-centered');
        this.searchResultsMessageElement = searchStatusBarElement.createChild('div', 'search-message');
        this.advancedSearchConfig = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting(settingKey + '-search-config', new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.SearchConfig.SearchConfig('', true, false).toPlainObject());
        this.load();
        this.searchScope = null;
    }
    regexButtonToggled() {
        this.regexButton.title = this.regexButton.toggled ? i18nString(UIStrings.disableRegularExpression) :
            i18nString(UIStrings.enableRegularExpression);
    }
    matchCaseButtonToggled() {
        this.matchCaseButton.title = this.matchCaseButton.toggled ? i18nString(UIStrings.disableCaseSensitive) :
            i18nString(UIStrings.enableCaseSensitive);
    }
    buildSearchConfig() {
        return new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.SearchConfig.SearchConfig(this.search.value, !this.matchCaseButton.toggled, this.regexButton.toggled);
    }
    toggle(queryCandidate, searchImmediately) {
        this.search.value = queryCandidate;
        if (this.isShowing()) {
            this.focus();
        }
        else {
            this.focusOnShow = true;
        }
        this.initScope();
        if (searchImmediately) {
            this.onAction();
        }
        else {
            this.startIndexing();
        }
    }
    createScope() {
        throw new Error('Not implemented');
    }
    initScope() {
        this.searchScope = this.createScope();
    }
    wasShown() {
        if (this.focusOnShow) {
            this.focus();
            this.focusOnShow = false;
        }
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './searchView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
    onIndexingFinished() {
        if (!this.progressIndicator) {
            return;
        }
        const finished = !this.progressIndicator.isCanceled();
        this.progressIndicator.done();
        this.progressIndicator = null;
        this.isIndexing = false;
        this.searchMessageElement.textContent = finished ? '' : i18nString(UIStrings.indexingInterrupted);
        if (!finished) {
            this.pendingSearchConfig = null;
        }
        if (!this.pendingSearchConfig) {
            return;
        }
        const searchConfig = this.pendingSearchConfig;
        this.pendingSearchConfig = null;
        this.innerStartSearch(searchConfig);
    }
    startIndexing() {
        this.isIndexing = true;
        if (this.progressIndicator) {
            this.progressIndicator.done();
        }
        this.progressIndicator = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ProgressIndicator.ProgressIndicator();
        this.searchMessageElement.textContent = i18nString(UIStrings.indexing);
        this.progressIndicator.show(this.searchProgressPlaceholderElement);
        if (this.searchScope) {
            this.searchScope.performIndexing(new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.ProgressProxy(this.progressIndicator, this.onIndexingFinished.bind(this)));
        }
    }
    onSearchInputClear() {
        this.search.value = '';
        this.save();
        this.focus();
    }
    onSearchResult(searchId, searchResult) {
        if (searchId !== this.searchId || !this.progressIndicator) {
            return;
        }
        if (this.progressIndicator && this.progressIndicator.isCanceled()) {
            this.onIndexingFinished();
            return;
        }
        if (!this.searchResultsPane) {
            this.searchResultsPane = new _SearchResultsPane_js__WEBPACK_IMPORTED_MODULE_8__.SearchResultsPane(this.searchConfig);
            this.showPane(this.searchResultsPane);
        }
        __classPrivateFieldGet(this, _SearchView_pendingSearchResults, "f").push(searchResult);
        void __classPrivateFieldGet(this, _SearchView_throttler, "f").schedule(async () => __classPrivateFieldGet(this, _SearchView_instances, "m", _SearchView_addPendingSearchResults).call(this));
    }
    onSearchFinished(searchId, finished) {
        if (searchId !== this.searchId || !this.progressIndicator) {
            return;
        }
        if (!this.searchResultsPane) {
            this.nothingFound();
        }
        this.searchFinished(finished);
        this.searchConfig = null;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.alert(this.searchMessageElement.textContent + ' ' + this.searchResultsMessageElement.textContent);
    }
    innerStartSearch(searchConfig) {
        this.searchConfig = searchConfig;
        if (this.progressIndicator) {
            this.progressIndicator.done();
        }
        this.progressIndicator = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ProgressIndicator.ProgressIndicator();
        this.searchStarted(this.progressIndicator);
        if (this.searchScope) {
            void this.searchScope.performSearch(searchConfig, this.progressIndicator, this.onSearchResult.bind(this, this.searchId), this.onSearchFinished.bind(this, this.searchId));
        }
    }
    resetSearch() {
        this.stopSearch();
        this.showPane(null);
        this.searchResultsPane = null;
        this.searchMessageElement.textContent = '';
        this.searchResultsMessageElement.textContent = '';
    }
    stopSearch() {
        if (this.progressIndicator && !this.isIndexing) {
            this.progressIndicator.cancel();
        }
        if (this.searchScope) {
            this.searchScope.stopSearch();
        }
        this.searchConfig = null;
    }
    searchStarted(progressIndicator) {
        this.searchMatchesCount = 0;
        this.searchResultsCount = 0;
        this.nonEmptySearchResultsCount = 0;
        if (!this.searchingView) {
            this.searchingView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.EmptyWidget.EmptyWidget(i18nString(UIStrings.searching));
        }
        this.showPane(this.searchingView);
        this.searchMessageElement.textContent = i18nString(UIStrings.searching);
        progressIndicator.show(this.searchProgressPlaceholderElement);
        this.updateSearchResultsMessage();
    }
    updateSearchResultsMessage() {
        if (this.searchMatchesCount && this.searchResultsCount) {
            if (this.searchMatchesCount === 1 && this.nonEmptySearchResultsCount === 1) {
                this.searchResultsMessageElement.textContent = i18nString(UIStrings.foundMatchingLineInFile);
            }
            else if (this.searchMatchesCount > 1 && this.nonEmptySearchResultsCount === 1) {
                this.searchResultsMessageElement.textContent =
                    i18nString(UIStrings.foundDMatchingLinesInFile, { PH1: this.searchMatchesCount });
            }
            else {
                this.searchResultsMessageElement.textContent = i18nString(UIStrings.foundDMatchingLinesInDFiles, { PH1: this.searchMatchesCount, PH2: this.nonEmptySearchResultsCount });
            }
        }
        else {
            this.searchResultsMessageElement.textContent = '';
        }
    }
    showPane(panel) {
        if (this.visiblePane) {
            this.visiblePane.detach();
        }
        if (panel) {
            panel.show(this.searchResultsElement);
        }
        this.visiblePane = panel;
    }
    nothingFound() {
        if (!this.notFoundView) {
            this.notFoundView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.EmptyWidget.EmptyWidget(i18nString(UIStrings.noMatchesFound));
        }
        this.showPane(this.notFoundView);
        this.searchResultsMessageElement.textContent = i18nString(UIStrings.noMatchesFound);
    }
    addSearchResult(searchResult) {
        const matchesCount = searchResult.matchesCount();
        this.searchMatchesCount += matchesCount;
        this.searchResultsCount++;
        if (matchesCount) {
            this.nonEmptySearchResultsCount++;
        }
        this.updateSearchResultsMessage();
    }
    searchFinished(finished) {
        this.searchMessageElement.textContent =
            finished ? i18nString(UIStrings.searchFinished) : i18nString(UIStrings.searchInterrupted);
    }
    focus() {
        this.search.focus();
        this.search.select();
    }
    willHide() {
        this.stopSearch();
    }
    onKeyDown(event) {
        this.save();
        switch (event.keyCode) {
            case _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.KeyboardShortcut.Keys.Enter.code:
                this.onAction();
                break;
        }
    }
    /**
     * Handles keydown event on panel itself for handling expand/collapse all shortcut
     *
     * We use `event.code` instead of `event.key` here to check whether the shortcut is triggered.
     * The reason is, `event.key` is dependent on the modification keys, locale and keyboard layout.
     * Usually it is useful when we care about the character that needs to be printed.
     *
     * However, our aim in here is to assign a shortcut to the physical key combination on the keyboard
     * not on the character that the key combination prints.
     *
     * For example, `Cmd + [` shortcut in global shortcuts map to focusing on previous panel.
     * In Turkish - Q keyboard layout, the key combination that triggers the shortcut prints `ğ`
     * character. Whereas in Turkish - Q Legacy keyboard layout, the shortcut that triggers focusing
     * on previous panel prints `[` character. So, if we use `event.key` and check
     * whether it is `[`, we break the shortcut in Turkish - Q keyboard layout.
     *
     * @param event KeyboardEvent
     */
    onKeyDownOnPanel(event) {
        const isMac = _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.isMac();
        // "Command + Alt + ]" for Mac
        const shouldShowAllForMac = isMac && event.metaKey && !event.ctrlKey && event.altKey && event.code === 'BracketRight';
        // "Ctrl + Shift + }" for other platforms
        const shouldShowAllForOtherPlatforms = !isMac && event.ctrlKey && !event.metaKey && event.shiftKey && event.code === 'BracketRight';
        // "Command + Alt + [" for Mac
        const shouldCollapseAllForMac = isMac && event.metaKey && !event.ctrlKey && event.altKey && event.code === 'BracketLeft';
        // "Command + Alt + {" for other platforms
        const shouldCollapseAllForOtherPlatforms = !isMac && event.ctrlKey && !event.metaKey && event.shiftKey && event.code === 'BracketLeft';
        if (shouldShowAllForMac || shouldShowAllForOtherPlatforms) {
            this.searchResultsPane?.showAllMatches();
            void _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.logKeyDown(event.currentTarget, event, 'show-all-matches');
        }
        else if (shouldCollapseAllForMac || shouldCollapseAllForOtherPlatforms) {
            this.searchResultsPane?.collapseAllResults();
            void _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.logKeyDown(event.currentTarget, event, 'collapse-all-results');
        }
    }
    save() {
        this.advancedSearchConfig.set(this.buildSearchConfig().toPlainObject());
    }
    load() {
        const searchConfig = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.SearchConfig.SearchConfig.fromPlainObject(this.advancedSearchConfig.get());
        this.search.value = searchConfig.query();
        this.matchCaseButton.toggled = !searchConfig.ignoreCase();
        this.matchCaseButtonToggled();
        this.regexButton.toggled = searchConfig.isRegex();
        this.regexButtonToggled();
    }
    onAction() {
        const searchConfig = this.buildSearchConfig();
        if (!searchConfig.query() || !searchConfig.query().length) {
            return;
        }
        this.resetSearch();
        ++this.searchId;
        this.initScope();
        if (!this.isIndexing) {
            this.startIndexing();
        }
        this.pendingSearchConfig = searchConfig;
    }
    get throttlerForTest() {
        return __classPrivateFieldGet(this, _SearchView_throttler, "f");
    }
}
_SearchView_throttler = new WeakMap(), _SearchView_pendingSearchResults = new WeakMap(), _SearchView_instances = new WeakSet(), _SearchView_addPendingSearchResults = function _SearchView_addPendingSearchResults() {
    for (const searchResult of __classPrivateFieldGet(this, _SearchView_pendingSearchResults, "f")) {
        this.addSearchResult(searchResult);
        if (searchResult.matchesCount()) {
            this.searchResultsPane?.addSearchResult(searchResult);
        }
    }
    __classPrivateFieldSet(this, _SearchView_pendingSearchResults, [], "f");
};


/***/ })

}]);