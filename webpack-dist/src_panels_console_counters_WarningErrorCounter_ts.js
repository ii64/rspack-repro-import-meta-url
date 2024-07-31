"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_console_counters_WarningErrorCounter_ts"],{

/***/ "./src/panels/console_counters/WarningErrorCounter.ts":
/*!************************************************************!*\
  !*** ./src/panels/console_counters/WarningErrorCounter.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarningErrorCounter: () => (/* binding */ WarningErrorCounter)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/issue_counter/issue_counter.js */ "./src/ui/components/issue_counter/issue_counter.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









const UIStrings = {
    /**
     *@description The console error count in the Warning Error Counter shown in the main toolbar (top-left in DevTools). The error count refers to the number of errors currently present in the JavaScript console.
     */
    sErrors: '{n, plural, =1 {# error} other {# errors}}',
    /**
     *@description The console warning count in the Warning Error Counter shown in the main toolbar (top-left in DevTools). The warning count refers to the number of warnings currently present in the JavaScript console.
     */
    sWarnings: '{n, plural, =1 {# warning} other {# warnings}}',
    /**
     *@description Tooltip shown for a main toolbar button that opens the Console panel
     *@example {2 errors, 1 warning} PH1
     */
    openConsoleToViewS: 'Open Console to view {PH1}',
    /**
     *@description Title for the issues count in the Issues Error Counter shown in the main toolbar (top-left in DevTools). The issues count refers to the number of issues in the issues tab.
     */
    openIssuesToView: '{n, plural, =1 {Open Issues to view # issue:} other {Open Issues to view # issues:}}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/console_counters/WarningErrorCounter.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
let warningErrorCounterInstance;
class WarningErrorCounter {
    constructor() {
        Object.defineProperty(this, "toolbarItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "consoleCounter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "issueCounter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "throttler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "updatingForTest", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        WarningErrorCounter.instanceForTest = this;
        const countersWrapper = document.createElement('div');
        this.toolbarItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarItemWithCompactLayout(countersWrapper);
        this.toolbarItem.setVisible(false);
        this.toolbarItem.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarItemWithCompactLayoutEvents.CompactLayoutUpdated, this.onSetCompactLayout, this);
        this.consoleCounter = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.IconButton.IconButton();
        this.consoleCounter.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.counter('console').track({ click: true })}`);
        countersWrapper.appendChild(this.consoleCounter);
        this.consoleCounter.data = {
            clickHandler: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().show.bind(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance()),
            groups: [
                { iconName: 'cross-circle-filled', iconColor: 'var(--icon-error)', iconHeight: '14px', iconWidth: '14px' },
                { iconName: 'warning-filled', iconColor: 'var(--icon-warning)', iconHeight: '14px', iconWidth: '14px' },
            ],
        };
        const issuesManager = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.IssuesManager.IssuesManager.instance();
        this.issueCounter = new _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_6__.IssueCounter.IssueCounter();
        this.issueCounter.classList.add('main-toolbar');
        this.issueCounter.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.counter('issue').track({ click: true })}`);
        countersWrapper.appendChild(this.issueCounter);
        this.issueCounter.data = {
            clickHandler: () => {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelOpenedFrom(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.IssueOpener.StatusBarIssuesCounter);
                void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ViewManager.ViewManager.instance().showView('issues-pane');
            },
            issuesManager,
            displayMode: _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_6__.IssueCounter.DisplayMode.OnlyMostImportant,
        };
        this.throttler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.ConsoleModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.Events.ConsoleCleared, this.update, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.ConsoleModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.Events.MessageAdded, this.update, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.ConsoleModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.Events.MessageUpdated, this.update, this);
        issuesManager.addEventListener(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.IssuesManager.Events.IssuesCountUpdated, this.update, this);
        this.update();
    }
    onSetCompactLayout(event) {
        this.setCompactLayout(event.data);
    }
    setCompactLayout(enable) {
        this.consoleCounter.data = { ...this.consoleCounter.data, compact: enable };
        this.issueCounter.data = { ...this.issueCounter.data, compact: enable };
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!warningErrorCounterInstance || forceNew) {
            warningErrorCounterInstance = new WarningErrorCounter();
        }
        return warningErrorCounterInstance;
    }
    updatedForTest() {
        // Sniffed in tests.
    }
    update() {
        this.updatingForTest = true;
        void this.throttler.schedule(this.updateThrottled.bind(this));
    }
    get titlesForTesting() {
        const button = this.consoleCounter.shadowRoot?.querySelector('button');
        return button ? button.getAttribute('aria-label') : null;
    }
    async updateThrottled() {
        const errors = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.ConsoleModel.allErrors();
        const warnings = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.ConsoleModel.allWarnings();
        const issuesManager = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.IssuesManager.IssuesManager.instance();
        const issues = issuesManager.numberOfIssues();
        const countToText = (c) => c === 0 ? undefined : `${c}`;
        /* Update consoleCounter items. */
        const errorCountTitle = i18nString(UIStrings.sErrors, { n: errors });
        const warningCountTitle = i18nString(UIStrings.sWarnings, { n: warnings });
        const newConsoleTexts = [countToText(errors), countToText(warnings)];
        let consoleSummary = '';
        if (errors && warnings) {
            consoleSummary = `${errorCountTitle}, ${warningCountTitle}`;
        }
        else if (errors) {
            consoleSummary = errorCountTitle;
        }
        else if (warnings) {
            consoleSummary = warningCountTitle;
        }
        const consoleTitle = i18nString(UIStrings.openConsoleToViewS, { PH1: consoleSummary });
        const previousData = this.consoleCounter.data;
        this.consoleCounter.data = {
            ...previousData,
            groups: previousData.groups.map((g, i) => ({ ...g, text: newConsoleTexts[i] })),
            accessibleName: consoleTitle,
        };
        // TODO(chromium:1167711): Let the component handle the title and ARIA label.
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(this.consoleCounter, consoleTitle);
        this.consoleCounter.classList.toggle('hidden', !(errors || warnings));
        /* Update issuesCounter items. */
        const issueEnumeration = _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_6__.IssueCounter.getIssueCountsEnumeration(issuesManager);
        const issuesTitleLead = i18nString(UIStrings.openIssuesToView, { n: issues });
        const issuesTitle = `${issuesTitleLead} ${issueEnumeration}`;
        // TODO(chromium:1167711): Let the component handle the title and ARIA label.
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(this.issueCounter, issuesTitle);
        this.issueCounter.data = {
            ...this.issueCounter.data,
            accessibleName: issuesTitle,
        };
        this.issueCounter.classList.toggle('hidden', !issues);
        this.toolbarItem.setVisible(Boolean(errors || warnings || issues));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.InspectorView.InspectorView.instance().toolbarItemResized();
        this.updatingForTest = false;
        this.updatedForTest();
        return;
    }
    item() {
        return this.toolbarItem;
    }
}
Object.defineProperty(WarningErrorCounter, "instanceForTest", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: null
});


/***/ })

}]);