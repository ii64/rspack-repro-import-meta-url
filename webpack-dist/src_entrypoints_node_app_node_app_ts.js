"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_node_app_node_app_ts"],{

/***/ "./src/entrypoints/node_app/NodeMain.ts":
/*!**********************************************!*\
  !*** ./src/entrypoints/node_app/NodeMain.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeChildTargetManager: () => (/* binding */ NodeChildTargetManager),
/* harmony export */   NodeConnection: () => (/* binding */ NodeConnection),
/* harmony export */   NodeMainImpl: () => (/* binding */ NodeMainImpl)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2018 The Chromium Authors. All rights reserved.
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
var _NodeChildTargetManager_instances, _NodeChildTargetManager_targetManager, _NodeChildTargetManager_parentTarget, _NodeChildTargetManager_targetAgent, _NodeChildTargetManager_childTargets, _NodeChildTargetManager_childConnections, _NodeChildTargetManager_devicesDiscoveryConfigChanged, _NodeConnection_targetAgent, _NodeConnection_sessionId, _NodeConnection_onDisconnect;




const UIStrings = {
    /**
     *@description Text that refers to the main target
     */
    main: 'Main',
    /**
     *@description Text in Node Main of the Sources panel when debugging a Node.js app
     *@example {example.com} PH1
     */
    nodejsS: 'Node.js: {PH1}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('entrypoints/node_app/NodeMain.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
let nodeMainImplInstance;
class NodeMainImpl {
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!nodeMainImplInstance || forceNew) {
            nodeMainImplInstance = new NodeMainImpl();
        }
        return nodeMainImplInstance;
    }
    async run() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.ConnectToNodeJSFromFrontend);
        void _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.Connections.initMainConnection(async () => {
            const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().createTarget('main', i18nString(UIStrings.main), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Browser, null);
            target.setInspectedURL('Node.js');
        }, _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.TargetDetachedDialog.TargetDetachedDialog.webSocketConnectionLost);
    }
}
class NodeChildTargetManager extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SDKModel.SDKModel {
    constructor(parentTarget) {
        super(parentTarget);
        _NodeChildTargetManager_instances.add(this);
        _NodeChildTargetManager_targetManager.set(this, void 0);
        _NodeChildTargetManager_parentTarget.set(this, void 0);
        _NodeChildTargetManager_targetAgent.set(this, void 0);
        _NodeChildTargetManager_childTargets.set(this, void 0);
        _NodeChildTargetManager_childConnections.set(this, void 0);
        __classPrivateFieldSet(this, _NodeChildTargetManager_targetManager, parentTarget.targetManager(), "f");
        __classPrivateFieldSet(this, _NodeChildTargetManager_parentTarget, parentTarget, "f");
        __classPrivateFieldSet(this, _NodeChildTargetManager_targetAgent, parentTarget.targetAgent(), "f");
        __classPrivateFieldSet(this, _NodeChildTargetManager_childTargets, new Map(), "f");
        __classPrivateFieldSet(this, _NodeChildTargetManager_childConnections, new Map(), "f");
        parentTarget.registerTargetDispatcher(this);
        void __classPrivateFieldGet(this, _NodeChildTargetManager_targetAgent, "f").invoke_setDiscoverTargets({ discover: true });
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHostAPI.Events.DevicesDiscoveryConfigChanged, __classPrivateFieldGet(this, _NodeChildTargetManager_instances, "m", _NodeChildTargetManager_devicesDiscoveryConfigChanged), this);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.setDevicesUpdatesEnabled(false);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.setDevicesUpdatesEnabled(true);
    }
    dispose() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.events.removeEventListener(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHostAPI.Events.DevicesDiscoveryConfigChanged, __classPrivateFieldGet(this, _NodeChildTargetManager_instances, "m", _NodeChildTargetManager_devicesDiscoveryConfigChanged), this);
        for (const sessionId of __classPrivateFieldGet(this, _NodeChildTargetManager_childTargets, "f").keys()) {
            this.detachedFromTarget({ sessionId });
        }
    }
    targetCreated({ targetInfo }) {
        if (targetInfo.type === 'node' && !targetInfo.attached) {
            void __classPrivateFieldGet(this, _NodeChildTargetManager_targetAgent, "f").invoke_attachToTarget({ targetId: targetInfo.targetId, flatten: false });
        }
    }
    targetInfoChanged(_event) {
    }
    targetDestroyed(_event) {
    }
    attachedToTarget({ sessionId, targetInfo }) {
        const name = i18nString(UIStrings.nodejsS, { PH1: targetInfo.url });
        const connection = new NodeConnection(__classPrivateFieldGet(this, _NodeChildTargetManager_targetAgent, "f"), sessionId);
        __classPrivateFieldGet(this, _NodeChildTargetManager_childConnections, "f").set(sessionId, connection);
        const target = __classPrivateFieldGet(this, _NodeChildTargetManager_targetManager, "f").createTarget(targetInfo.targetId, name, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Node, __classPrivateFieldGet(this, _NodeChildTargetManager_parentTarget, "f"), undefined, undefined, connection);
        __classPrivateFieldGet(this, _NodeChildTargetManager_childTargets, "f").set(sessionId, target);
        void target.runtimeAgent().invoke_runIfWaitingForDebugger();
    }
    detachedFromTarget({ sessionId }) {
        const childTarget = __classPrivateFieldGet(this, _NodeChildTargetManager_childTargets, "f").get(sessionId);
        if (childTarget) {
            childTarget.dispose('target terminated');
        }
        __classPrivateFieldGet(this, _NodeChildTargetManager_childTargets, "f").delete(sessionId);
        __classPrivateFieldGet(this, _NodeChildTargetManager_childConnections, "f").delete(sessionId);
    }
    receivedMessageFromTarget({ sessionId, message }) {
        const connection = __classPrivateFieldGet(this, _NodeChildTargetManager_childConnections, "f").get(sessionId);
        const onMessage = connection ? connection.onMessage : null;
        if (onMessage) {
            onMessage.call(null, message);
        }
    }
    targetCrashed(_event) {
    }
}
_NodeChildTargetManager_targetManager = new WeakMap(), _NodeChildTargetManager_parentTarget = new WeakMap(), _NodeChildTargetManager_targetAgent = new WeakMap(), _NodeChildTargetManager_childTargets = new WeakMap(), _NodeChildTargetManager_childConnections = new WeakMap(), _NodeChildTargetManager_instances = new WeakSet(), _NodeChildTargetManager_devicesDiscoveryConfigChanged = function _NodeChildTargetManager_devicesDiscoveryConfigChanged({ data: config }) {
    const locations = [];
    for (const address of config.networkDiscoveryConfig) {
        const parts = address.split(':');
        const port = parseInt(parts[1], 10);
        if (parts[0] && port) {
            locations.push({ host: parts[0], port: port });
        }
    }
    void __classPrivateFieldGet(this, _NodeChildTargetManager_targetAgent, "f").invoke_setRemoteLocations({ locations });
};
class NodeConnection {
    constructor(targetAgent, sessionId) {
        _NodeConnection_targetAgent.set(this, void 0);
        _NodeConnection_sessionId.set(this, void 0);
        Object.defineProperty(this, "onMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _NodeConnection_onDisconnect.set(this, void 0);
        __classPrivateFieldSet(this, _NodeConnection_targetAgent, targetAgent, "f");
        __classPrivateFieldSet(this, _NodeConnection_sessionId, sessionId, "f");
        this.onMessage = null;
        __classPrivateFieldSet(this, _NodeConnection_onDisconnect, null, "f");
    }
    setOnMessage(onMessage) {
        this.onMessage = onMessage;
    }
    setOnDisconnect(onDisconnect) {
        __classPrivateFieldSet(this, _NodeConnection_onDisconnect, onDisconnect, "f");
    }
    sendRawMessage(message) {
        void __classPrivateFieldGet(this, _NodeConnection_targetAgent, "f").invoke_sendMessageToTarget({ message, sessionId: __classPrivateFieldGet(this, _NodeConnection_sessionId, "f") });
    }
    async disconnect() {
        if (__classPrivateFieldGet(this, _NodeConnection_onDisconnect, "f")) {
            __classPrivateFieldGet(this, _NodeConnection_onDisconnect, "f").call(null, 'force disconnect');
        }
        __classPrivateFieldSet(this, _NodeConnection_onDisconnect, null, "f");
        this.onMessage = null;
        await __classPrivateFieldGet(this, _NodeConnection_targetAgent, "f").invoke_detachFromTarget({ sessionId: __classPrivateFieldGet(this, _NodeConnection_sessionId, "f") });
    }
}
_NodeConnection_targetAgent = new WeakMap(), _NodeConnection_sessionId = new WeakMap(), _NodeConnection_onDisconnect = new WeakMap();
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SDKModel.SDKModel.register(NodeChildTargetManager, { capabilities: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Capability.Target, autostart: true });


/***/ }),

/***/ "./src/entrypoints/node_app/node_app.ts":
/*!**********************************************!*\
  !*** ./src/entrypoints/node_app/node_app.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shell_shell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/shell.js */ "./src/entrypoints/shell/shell.ts");
/* harmony import */ var _panels_mobile_throttling_mobile_throttling_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/mobile_throttling/mobile_throttling-meta.js */ "./src/panels/mobile_throttling/mobile_throttling-meta.ts");
/* harmony import */ var _panels_js_timeline_js_timeline_meta_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/js_timeline/js_timeline-meta.js */ "./src/panels/js_timeline/js_timeline-meta.ts");
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _main_main_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../main/main.js */ "./src/entrypoints/main/main.ts");
/* harmony import */ var _NodeConnectionsPanel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NodeConnectionsPanel.js */ "./src/entrypoints/node_app/NodeConnectionsPanel.ts");
/* harmony import */ var _NodeMain_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NodeMain.js */ "./src/entrypoints/node_app/NodeMain.ts");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








 // eslint-disable-line rulesdir/es_modules_import
 // eslint-disable-line rulesdir/es_modules_import
const UIStrings = {
    /**
     *@description Text that refers to the network connection
     */
    connection: 'Connection',
    /**
     *@description A tag of Node.js Connection Panel that can be searched in the command menu
     */
    node: 'node',
    /**
     *@description Command for showing the Connection tool
     */
    showConnection: 'Show Connection',
    /**
     *@description Title of the 'Node' tool in the Network Navigator View, which is part of the Sources tool
     */
    networkTitle: 'Node',
    /**
     *@description Command for showing the 'Node' tool in the Network Navigator View, which is part of the Sources tool
     */
    showNode: 'Show Node',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_4__.i18n.registerUIStrings('entrypoints/node_app/node_app.ts', UIStrings);
const i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_4__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
let loadedSourcesModule;
async function loadSourcesModule() {
    if (!loadedSourcesModule) {
        loadedSourcesModule = await Promise.all(/*! import() */[__webpack_require__.e("src_ui_legacy_components_color_picker_ContrastDetails_ts"), __webpack_require__.e("src_ui_legacy_components_color_picker_Spectrum_ts"), __webpack_require__.e("src_panels_css_overview_CSSOverviewCompletedView_ts"), __webpack_require__.e("src_panels_css_overview_CSSOverviewModel_ts"), __webpack_require__.e("src_panels_css_overview_CSSOverviewPanel_ts"), __webpack_require__.e("src_ui_legacy_components_inline_editor_AnimationTimingUI_ts"), __webpack_require__.e("src_ui_legacy_components_inline_editor_CSSAngleEditor_ts"), __webpack_require__.e("src_ui_legacy_components_inline_editor_FontEditor_ts"), __webpack_require__.e("src_ui_legacy_components_inline_editor_CSSShadowEditor_ts"), __webpack_require__.e("src_ui_legacy_components_inline_editor_BezierEditor_ts"), __webpack_require__.e("src_ui_legacy_components_inline_editor_SwatchPopoverHelper_ts"), __webpack_require__.e("src_ui_legacy_components_inline_editor_CSSAngle_ts"), __webpack_require__.e("src_ui_legacy_components_inline_editor_inline_editor_ts"), __webpack_require__.e("src_ui_components_diff_view_DiffView_ts"), __webpack_require__.e("src_panels_coverage_CoverageModel_ts"), __webpack_require__.e("src_panels_search_SearchResultsPane_ts"), __webpack_require__.e("src_panels_search_SearchView_ts"), __webpack_require__.e("src_panels_coverage_CoverageListView_ts"), __webpack_require__.e("src_panels_coverage_CoverageDecorationManager_ts"), __webpack_require__.e("src_panels_coverage_CoverageView_ts"), __webpack_require__.e("src_panels_sources_components_BreakpointsViewUtils_ts"), __webpack_require__.e("src_panels_sources_components_BreakpointsView_ts"), __webpack_require__.e("src_panels_sources_components_HeadersView_ts"), __webpack_require__.e("src_panels_sources_SourcesSearchScope_ts"), __webpack_require__.e("src_panels_sources_NavigatorView_ts"), __webpack_require__.e("src_panels_sources_CallStackSidebarPane_ts"), __webpack_require__.e("src_panels_sources_DebuggerPausedMessage_ts"), __webpack_require__.e("src_panels_sources_CSSPlugin_ts"), __webpack_require__.e("src_panels_sources_BreakpointEditDialog_ts"), __webpack_require__.e("src_panels_sources_CoveragePlugin_ts"), __webpack_require__.e("src_panels_sources_SourcesPanel_ts"), __webpack_require__.e("src_panels_sources_FilteredUISourceCodeListProvider_ts"), __webpack_require__.e("src_panels_sources_WatchExpressionsSidebarPane_ts"), __webpack_require__.e("src_panels_sources_SourcesNavigator_ts"), __webpack_require__.e("src_panels_sources_OutlineQuickOpen_ts"), __webpack_require__.e("src_panels_sources_sources_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../panels/sources/sources.js */ "./src/panels/sources/sources.ts"));
    }
    return loadedSourcesModule;
}
_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.registerViewExtension({
    location: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.ViewLocationValues.PANEL,
    id: 'node-connection',
    title: i18nLazyString(UIStrings.connection),
    commandPrompt: i18nLazyString(UIStrings.showConnection),
    order: 0,
    async loadView() {
        return new _NodeConnectionsPanel_js__WEBPACK_IMPORTED_MODULE_8__.NodeConnectionsPanel();
    },
    tags: [i18nLazyString(UIStrings.node)],
});
_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.registerViewExtension({
    location: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.ViewLocationValues.NAVIGATOR_VIEW,
    id: 'navigator-network',
    title: i18nLazyString(UIStrings.networkTitle),
    commandPrompt: i18nLazyString(UIStrings.showNode),
    order: 2,
    persistence: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.ViewPersistence.PERMANENT,
    async loadView() {
        const Sources = await loadSourcesModule();
        return Sources.SourcesNavigator.NetworkNavigatorView.instance();
    },
});
// @ts-ignore Exposed for legacy layout tests
self.runtime = _core_root_root_js__WEBPACK_IMPORTED_MODULE_5__.Runtime.Runtime.instance({ forceNew: true });
_core_common_common_js__WEBPACK_IMPORTED_MODULE_3__.Runnable.registerEarlyInitializationRunnable(_NodeMain_js__WEBPACK_IMPORTED_MODULE_9__.NodeMainImpl.instance);
new _main_main_js__WEBPACK_IMPORTED_MODULE_7__.MainImpl.MainImpl();


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