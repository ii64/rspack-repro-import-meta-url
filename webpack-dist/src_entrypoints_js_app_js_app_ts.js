"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_js_app_js_app_ts"],{

/***/ "./src/entrypoints/js_app/js_app.ts":
/*!******************************************!*\
  !*** ./src/entrypoints/js_app/js_app.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsMainImpl: () => (/* binding */ JsMainImpl)
/* harmony export */ });
/* harmony import */ var _shell_shell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/shell.js */ "./src/entrypoints/shell/shell.ts");
/* harmony import */ var _panels_js_timeline_js_timeline_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/js_timeline/js_timeline-meta.js */ "./src/panels/js_timeline/js_timeline-meta.ts");
/* harmony import */ var _panels_mobile_throttling_mobile_throttling_meta_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/mobile_throttling/mobile_throttling-meta.js */ "./src/panels/mobile_throttling/mobile_throttling-meta.ts");
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _main_main_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../main/main.js */ "./src/entrypoints/main/main.ts");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










const UIStrings = {
    /**
     *@description Text that refers to the main target.
     */
    main: 'Main',
    /**
     *@description Title of the 'Scripts' tool in the Network Navigator View, which is part of the Sources tool
     */
    networkTitle: 'Scripts',
    /**
     *@description Command for showing the 'Scripts' tool in the Network Navigator View, which is part of the Sources tool
     */
    showNode: 'Show Scripts',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_5__.i18n.registerUIStrings('entrypoints/js_app/js_app.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_5__.i18n.getLocalizedString.bind(undefined, str_);
const i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_5__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
let jsMainImplInstance;
let loadedSourcesModule;
async function loadSourcesModule() {
    if (!loadedSourcesModule) {
        loadedSourcesModule = await Promise.all(/*! import() */[__webpack_require__.e("src_ui_legacy_components_color_picker_ContrastDetails_ts"), __webpack_require__.e("src_ui_legacy_components_color_picker_Spectrum_ts"), __webpack_require__.e("src_panels_css_overview_CSSOverviewCompletedView_ts"), __webpack_require__.e("src_panels_css_overview_CSSOverviewModel_ts"), __webpack_require__.e("src_panels_css_overview_CSSOverviewPanel_ts"), __webpack_require__.e("src_ui_legacy_components_inline_editor_AnimationTimingUI_ts"), __webpack_require__.e("src_ui_legacy_components_inline_editor_CSSAngleEditor_ts"), __webpack_require__.e("src_ui_legacy_components_inline_editor_FontEditor_ts"), __webpack_require__.e("src_ui_legacy_components_inline_editor_CSSShadowEditor_ts"), __webpack_require__.e("src_ui_legacy_components_inline_editor_BezierEditor_ts"), __webpack_require__.e("src_ui_legacy_components_inline_editor_SwatchPopoverHelper_ts"), __webpack_require__.e("src_ui_legacy_components_inline_editor_CSSAngle_ts"), __webpack_require__.e("src_ui_legacy_components_inline_editor_inline_editor_ts"), __webpack_require__.e("src_ui_components_diff_view_DiffView_ts"), __webpack_require__.e("src_panels_coverage_CoverageModel_ts"), __webpack_require__.e("src_panels_search_SearchResultsPane_ts"), __webpack_require__.e("src_panels_search_SearchView_ts"), __webpack_require__.e("src_panels_coverage_CoverageListView_ts"), __webpack_require__.e("src_panels_coverage_CoverageDecorationManager_ts"), __webpack_require__.e("src_panels_coverage_CoverageView_ts"), __webpack_require__.e("src_panels_sources_components_BreakpointsViewUtils_ts"), __webpack_require__.e("src_panels_sources_components_BreakpointsView_ts"), __webpack_require__.e("src_panels_sources_components_HeadersView_ts"), __webpack_require__.e("src_panels_sources_SourcesSearchScope_ts"), __webpack_require__.e("src_panels_sources_NavigatorView_ts"), __webpack_require__.e("src_panels_sources_CallStackSidebarPane_ts"), __webpack_require__.e("src_panels_sources_DebuggerPausedMessage_ts"), __webpack_require__.e("src_panels_sources_CSSPlugin_ts"), __webpack_require__.e("src_panels_sources_BreakpointEditDialog_ts"), __webpack_require__.e("src_panels_sources_CoveragePlugin_ts"), __webpack_require__.e("src_panels_sources_SourcesPanel_ts"), __webpack_require__.e("src_panels_sources_FilteredUISourceCodeListProvider_ts"), __webpack_require__.e("src_panels_sources_WatchExpressionsSidebarPane_ts"), __webpack_require__.e("src_panels_sources_SourcesNavigator_ts"), __webpack_require__.e("src_panels_sources_OutlineQuickOpen_ts"), __webpack_require__.e("src_panels_sources_sources_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../panels/sources/sources.js */ "./src/panels/sources/sources.ts"));
    }
    return loadedSourcesModule;
}
class JsMainImpl {
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!jsMainImplInstance || forceNew) {
            jsMainImplInstance = new JsMainImpl();
        }
        return jsMainImplInstance;
    }
    async run() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_4__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_4__.UserMetrics.Action.ConnectToNodeJSDirectly);
        void _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_6__.Connections.initMainConnection(async () => {
            const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_6__.TargetManager.TargetManager.instance().createTarget('main', i18nString(UIStrings.main), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_6__.Target.Type.Node, null);
            void target.runtimeAgent().invoke_runIfWaitingForDebugger();
        }, _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.TargetDetachedDialog.TargetDetachedDialog.webSocketConnectionLost);
    }
}
_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ViewManager.registerViewExtension({
    location: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ViewManager.ViewLocationValues.NAVIGATOR_VIEW,
    id: 'navigator-network',
    title: i18nLazyString(UIStrings.networkTitle),
    commandPrompt: i18nLazyString(UIStrings.showNode),
    order: 2,
    persistence: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ViewManager.ViewPersistence.PERMANENT,
    async loadView() {
        const Sources = await loadSourcesModule();
        return Sources.SourcesNavigator.NetworkNavigatorView.instance();
    },
});
_core_common_common_js__WEBPACK_IMPORTED_MODULE_3__.Runnable.registerEarlyInitializationRunnable(JsMainImpl.instance);
new _main_main_js__WEBPACK_IMPORTED_MODULE_9__.MainImpl.MainImpl();


/***/ }),

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