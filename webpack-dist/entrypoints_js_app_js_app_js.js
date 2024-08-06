"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_js_app_js_app_js"],{

/***/ "./entrypoints/js_app/js_app.js":
/*!**************************************!*\
  !*** ./entrypoints/js_app/js_app.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsMainImpl: () => (/* binding */ JsMainImpl)
/* harmony export */ });
/* harmony import */ var _shell_shell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/shell.js */ "./entrypoints/shell/shell.js");
/* harmony import */ var _panels_js_timeline_js_timeline_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/js_timeline/js_timeline-meta.js */ "./panels/js_timeline/js_timeline-meta.js");
/* harmony import */ var _panels_mobile_throttling_mobile_throttling_meta_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/mobile_throttling/mobile_throttling-meta.js */ "./panels/mobile_throttling/mobile_throttling-meta.js");
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _main_main_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../main/main.js */ "./entrypoints/main/main.js");
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
        loadedSourcesModule = await Promise.all(/*! import() */[__webpack_require__.e("ui_legacy_components_color_picker_ContrastDetails_js"), __webpack_require__.e("ui_legacy_components_color_picker_spectrum_css_js"), __webpack_require__.e("ui_legacy_components_color_picker_Spectrum_js"), __webpack_require__.e("panels_css_overview_components_CSSOverviewStartView_js"), __webpack_require__.e("panels_css_overview_CSSOverviewCompletedView_js"), __webpack_require__.e("panels_css_overview_CSSOverviewModel_js"), __webpack_require__.e("panels_css_overview_CSSOverviewPanel_js"), __webpack_require__.e("ui_legacy_components_inline_editor_AnimationTimingUI_js"), __webpack_require__.e("ui_legacy_components_inline_editor_CSSAngleEditor_js"), __webpack_require__.e("ui_legacy_components_inline_editor_FontEditorUnitConverter_js"), __webpack_require__.e("ui_legacy_components_inline_editor_FontEditor_js"), __webpack_require__.e("ui_legacy_components_inline_editor_CSSShadowEditor_js"), __webpack_require__.e("ui_legacy_components_inline_editor_BezierEditor_js"), __webpack_require__.e("ui_legacy_components_inline_editor_SwatchPopoverHelper_js"), __webpack_require__.e("ui_legacy_components_inline_editor_CSSAngle_js"), __webpack_require__.e("ui_legacy_components_inline_editor_inline_editor_js"), __webpack_require__.e("ui_components_diff_view_DiffView_js"), __webpack_require__.e("panels_coverage_CoverageModel_js"), __webpack_require__.e("panels_search_SearchResultsPane_js"), __webpack_require__.e("panels_search_SearchView_js"), __webpack_require__.e("panels_coverage_CoverageListView_js"), __webpack_require__.e("panels_coverage_CoverageView_js"), __webpack_require__.e("panels_sources_components_BreakpointsViewUtils_js"), __webpack_require__.e("panels_sources_components_BreakpointsView_js"), __webpack_require__.e("panels_sources_components_HeadersView_js"), __webpack_require__.e("panels_sources_SourcesSearchScope_js"), __webpack_require__.e("panels_sources_NavigatorView_js"), __webpack_require__.e("panels_sources_CallStackSidebarPane_js"), __webpack_require__.e("panels_sources_DebuggerPausedMessage_js"), __webpack_require__.e("panels_sources_CSSPlugin_js"), __webpack_require__.e("panels_sources_BreakpointEditDialog_js"), __webpack_require__.e("panels_sources_SourcesPanel_js"), __webpack_require__.e("panels_sources_FilteredUISourceCodeListProvider_js"), __webpack_require__.e("panels_sources_WatchExpressionsSidebarPane_js"), __webpack_require__.e("panels_sources_SourcesNavigator_js"), __webpack_require__.e("panels_sources_OutlineQuickOpen_js"), __webpack_require__.e("panels_sources_sources_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../panels/sources/sources.js */ "./panels/sources/sources.js"));
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
    location: "navigator-view" /* UI.ViewManager.ViewLocationValues.NAVIGATOR_VIEW */,
    id: 'navigator-network',
    title: i18nLazyString(UIStrings.networkTitle),
    commandPrompt: i18nLazyString(UIStrings.showNode),
    order: 2,
    persistence: "permanent" /* UI.ViewManager.ViewPersistence.PERMANENT */,
    async loadView() {
        const Sources = await loadSourcesModule();
        return Sources.SourcesNavigator.NetworkNavigatorView.instance();
    },
});
_core_common_common_js__WEBPACK_IMPORTED_MODULE_3__.Runnable.registerEarlyInitializationRunnable(JsMainImpl.instance);
new _main_main_js__WEBPACK_IMPORTED_MODULE_9__.MainImpl.MainImpl();
//# sourceMappingURL=js_app.js.map

/***/ }),

/***/ "./panels/js_timeline/js_timeline-meta.js":
/*!************************************************!*\
  !*** ./panels/js_timeline/js_timeline-meta.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
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
        loadedTimelineModule = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../timeline/timeline.js */ "./panels/timeline/timeline.js"));
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
    location: "panel" /* UI.ViewManager.ViewLocationValues.PANEL */,
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
    category: "PERFORMANCE" /* UI.ActionRegistration.ActionCategory.PERFORMANCE */,
    title: i18nLazyString(UIStrings.showRecentTimelineSessions),
    contextTypes() {
        return maybeRetrieveTimelineContextTypes(Timeline => [Timeline.TimelinePanel.TimelinePanel]);
    },
    bindings: [
        {
            platform: "windows,linux" /* UI.ActionRegistration.Platforms.WindowsLinux */,
            shortcut: 'Ctrl+H',
        },
        {
            platform: "mac" /* UI.ActionRegistration.Platforms.Mac */,
            shortcut: 'Meta+Y',
        },
    ],
});
_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.registerActionExtension({
    actionId: 'timeline.toggle-recording',
    category: "PERFORMANCE" /* UI.ActionRegistration.ActionCategory.PERFORMANCE */,
    iconClass: "record-start" /* UI.ActionRegistration.IconClass.START_RECORDING */,
    toggleable: true,
    toggledIconClass: "record-stop" /* UI.ActionRegistration.IconClass.STOP_RECORDING */,
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
            platform: "windows,linux" /* UI.ActionRegistration.Platforms.WindowsLinux */,
            shortcut: 'Ctrl+E',
        },
        {
            platform: "mac" /* UI.ActionRegistration.Platforms.Mac */,
            shortcut: 'Meta+E',
        },
    ],
});
_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.registerActionExtension({
    actionId: 'timeline.record-reload',
    iconClass: "refresh" /* UI.ActionRegistration.IconClass.REFRESH */,
    contextTypes() {
        return maybeRetrieveTimelineContextTypes(Timeline => [Timeline.TimelinePanel.TimelinePanel]);
    },
    category: "PERFORMANCE" /* UI.ActionRegistration.ActionCategory.PERFORMANCE */,
    title: i18nLazyString(UIStrings.recordAndReload),
    async loadActionDelegate() {
        const Timeline = await loadTimelineModule();
        return new Timeline.TimelinePanel.ActionDelegate();
    },
    bindings: [
        {
            platform: "windows,linux" /* UI.ActionRegistration.Platforms.WindowsLinux */,
            shortcut: 'Ctrl+Shift+E',
        },
        {
            platform: "mac" /* UI.ActionRegistration.Platforms.Mac */,
            shortcut: 'Meta+Shift+E',
        },
    ],
});
//# sourceMappingURL=js_timeline-meta.js.map

/***/ })

}]);