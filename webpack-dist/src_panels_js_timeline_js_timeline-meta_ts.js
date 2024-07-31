"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_js_timeline_js_timeline-meta_ts"],{

/***/ "./src/panels/js_timeline/js_timeline-meta.ts":
/*!****************************************************!*\
  !*** ./src/panels/js_timeline/js_timeline-meta.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const UIStrings = {
    /**
     *@description Text for the performance of something
     */
    performance: 'Performance',
    /**
     *@description Command for showing the 'Performance' tool
     */
    showPerformance: 'Show Performance',
    /**
     *@description Title of an action in the timeline tool to show history
     */
    showRecentTimelineSessions: 'Show recent timeline sessions',
    /**
     *@description Text to record a series of actions for analysis
     */
    record: 'Record',
    /**
     *@description Text of an item that stops the running task
     */
    stop: 'Stop',
    /**
     *@description Title of an action in the timeline tool to record a reload of the current page
     */
    recordAndReload: 'Record and reload',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/js_timeline/js_timeline-meta.ts', UIStrings);
const i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
let loadedTimelineModule;
async function loadTimelineModule() {
    if (!loadedTimelineModule) {
        loadedTimelineModule = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../timeline/timeline.js */ "./src/panels/timeline/timeline.ts"));
    }
    return loadedTimelineModule;
}
function maybeRetrieveTimelineContextTypes(getClassCallBack) {
    if (loadedTimelineModule === undefined) {
        return [];
    }
    return getClassCallBack(loadedTimelineModule);
}
_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ViewManager.registerViewExtension({
    location: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ViewManager.ViewLocationValues.PANEL,
    id: 'timeline',
    title: i18nLazyString(UIStrings.performance),
    commandPrompt: i18nLazyString(UIStrings.showPerformance),
    order: 66,
    hasToolbar: false,
    isPreviewFeature: true,
    async loadView() {
        const Timeline = await loadTimelineModule();
        return Timeline.TimelinePanel.TimelinePanel.instance({ forceNew: null, isNode: true });
    },
});
_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.registerActionExtension({
    actionId: 'timeline.show-history',
    async loadActionDelegate() {
        const Timeline = await loadTimelineModule();
        return new Timeline.TimelinePanel.ActionDelegate();
    },
    category: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.ActionCategory.PERFORMANCE,
    title: i18nLazyString(UIStrings.showRecentTimelineSessions),
    contextTypes() {
        return maybeRetrieveTimelineContextTypes(Timeline => [Timeline.TimelinePanel.TimelinePanel]);
    },
    bindings: [
        {
            platform: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.Platforms.WindowsLinux,
            shortcut: 'Ctrl+H',
        },
        {
            platform: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.Platforms.Mac,
            shortcut: 'Meta+Y',
        },
    ],
});
_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.registerActionExtension({
    actionId: 'timeline.toggle-recording',
    category: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.ActionCategory.PERFORMANCE,
    iconClass: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.IconClass.START_RECORDING,
    toggleable: true,
    toggledIconClass: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.IconClass.STOP_RECORDING,
    toggleWithRedColor: true,
    contextTypes() {
        return maybeRetrieveTimelineContextTypes(Timeline => [Timeline.TimelinePanel.TimelinePanel]);
    },
    async loadActionDelegate() {
        const Timeline = await loadTimelineModule();
        return new Timeline.TimelinePanel.ActionDelegate();
    },
    options: [
        {
            value: true,
            title: i18nLazyString(UIStrings.record),
        },
        {
            value: false,
            title: i18nLazyString(UIStrings.stop),
        },
    ],
    bindings: [
        {
            platform: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.Platforms.WindowsLinux,
            shortcut: 'Ctrl+E',
        },
        {
            platform: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.Platforms.Mac,
            shortcut: 'Meta+E',
        },
    ],
});
_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.registerActionExtension({
    actionId: 'timeline.record-reload',
    iconClass: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.IconClass.REFRESH,
    contextTypes() {
        return maybeRetrieveTimelineContextTypes(Timeline => [Timeline.TimelinePanel.TimelinePanel]);
    },
    category: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.ActionCategory.PERFORMANCE,
    title: i18nLazyString(UIStrings.recordAndReload),
    async loadActionDelegate() {
        const Timeline = await loadTimelineModule();
        return new Timeline.TimelinePanel.ActionDelegate();
    },
    bindings: [
        {
            platform: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.Platforms.WindowsLinux,
            shortcut: 'Ctrl+Shift+E',
        },
        {
            platform: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.Platforms.Mac,
            shortcut: 'Meta+Shift+E',
        },
    ],
});


/***/ })

}]);