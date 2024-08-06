"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_node_app_node_app_js"],{

/***/ "./entrypoints/node_app/NodeConnectionsPanel.js":
/*!******************************************************!*\
  !*** ./entrypoints/node_app/NodeConnectionsPanel.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeConnectionsPanel: () => (/* binding */ NodeConnectionsPanel),
/* harmony export */   NodeConnectionsView: () => (/* binding */ NodeConnectionsView)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _nodeConnectionsPanel_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nodeConnectionsPanel.css.js */ "./entrypoints/node_app/nodeConnectionsPanel.css.js");
// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Text in Node Connections Panel of the Sources panel when debugging a Node.js app
     */
    nodejsDebuggingGuide: 'Node.js debugging guide',
    /**
     *@description Text in Node Connections Panel of the Sources panel when debugging a Node.js app
     *@example {Node.js debugging guide} PH1
     */
    specifyNetworkEndpointAnd: 'Specify network endpoint and DevTools will connect to it automatically. Read {PH1} to learn more.',
    /**
     *@description Placeholder text content in Node Connections Panel of the Sources panel when debugging a Node.js app
     */
    noConnectionsSpecified: 'No connections specified',
    /**
     *@description Text of add network target button in Node Connections Panel of the Sources panel when debugging a Node.js app
     */
    addConnection: 'Add connection',
    /**
     *@description Text in Node Connections Panel of the Sources panel when debugging a Node.js app
     */
    networkAddressEgLocalhost: 'Network address (e.g. localhost:9229)',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('entrypoints/node_app/NodeConnectionsPanel.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class NodeConnectionsPanel extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Panel.Panel {
    #config;
    #networkDiscoveryView;
    constructor() {
        super('node-connection');
        this.contentElement.classList.add('node-panel');
        const container = this.contentElement.createChild('div', 'node-panel-center');
        const image = container.createChild('img', 'node-panel-logo');
        image.src = 'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg';
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHostAPI.Events.DevicesDiscoveryConfigChanged, this.#devicesDiscoveryConfigChanged, this);
        this.contentElement.tabIndex = 0;
        this.setDefaultFocusedElement(this.contentElement);
        // Trigger notification once.
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.setDevicesUpdatesEnabled(false);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.setDevicesUpdatesEnabled(true);
        this.#networkDiscoveryView = new NodeConnectionsView(config => {
            this.#config.networkDiscoveryConfig = config;
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.setDevicesDiscoveryConfig(this.#config);
        });
        this.#networkDiscoveryView.show(container);
    }
    #devicesDiscoveryConfigChanged({ data: config }) {
        this.#config = config;
        this.#networkDiscoveryView.discoveryConfigChanged(this.#config.networkDiscoveryConfig);
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_nodeConnectionsPanel_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]]);
    }
}
class NodeConnectionsView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox {
    #callback;
    #list;
    #editor;
    #networkDiscoveryConfig;
    constructor(callback) {
        super();
        this.#callback = callback;
        this.element.classList.add('network-discovery-view');
        const networkDiscoveryFooter = this.element.createChild('div', 'network-discovery-footer');
        const documentationLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.XLink.XLink.create('https://nodejs.org/en/docs/inspector/', i18nString(UIStrings.nodejsDebuggingGuide), undefined, undefined, 'node-js-debugging');
        networkDiscoveryFooter.appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.specifyNetworkEndpointAnd, { PH1: documentationLink }));
        this.#list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListWidget.ListWidget(this);
        this.#list.element.classList.add('network-discovery-list');
        const placeholder = document.createElement('div');
        placeholder.classList.add('network-discovery-list-empty');
        placeholder.textContent = i18nString(UIStrings.noConnectionsSpecified);
        this.#list.setEmptyPlaceholder(placeholder);
        this.#list.show(this.element);
        this.#editor = null;
        const addButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextButton(i18nString(UIStrings.addConnection), this.#addNetworkTargetButtonClicked.bind(this), { className: 'add-network-target-button', variant: "primary" /* Buttons.Button.Variant.PRIMARY */ });
        this.element.appendChild(addButton);
        this.#networkDiscoveryConfig = [];
        this.element.classList.add('node-frontend');
    }
    #update() {
        const config = this.#networkDiscoveryConfig.map(item => item.address);
        this.#callback.call(null, config);
    }
    #addNetworkTargetButtonClicked() {
        this.#list.addNewItem(this.#networkDiscoveryConfig.length, { address: '', port: '' });
    }
    discoveryConfigChanged(networkDiscoveryConfig) {
        this.#networkDiscoveryConfig = [];
        this.#list.clear();
        for (const address of networkDiscoveryConfig) {
            const item = { address: address, port: '' };
            this.#networkDiscoveryConfig.push(item);
            this.#list.appendItem(item, true);
        }
    }
    renderItem(rule, _editable) {
        const element = document.createElement('div');
        element.classList.add('network-discovery-list-item');
        element.createChild('div', 'network-discovery-value network-discovery-address').textContent = rule.address;
        return element;
    }
    removeItemRequested(rule, index) {
        this.#networkDiscoveryConfig.splice(index, 1);
        this.#list.removeItem(index);
        this.#update();
    }
    commitEdit(rule, editor, isNew) {
        rule.address = editor.control('address').value.trim();
        if (isNew) {
            this.#networkDiscoveryConfig.push(rule);
        }
        this.#update();
    }
    beginEdit(rule) {
        const editor = this.#createEditor();
        editor.control('address').value = rule.address;
        return editor;
    }
    #createEditor() {
        if (this.#editor) {
            return this.#editor;
        }
        const editor = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListWidget.Editor();
        this.#editor = editor;
        const content = editor.contentElement();
        const fields = content.createChild('div', 'network-discovery-edit-row');
        const input = editor.createInput('address', 'text', i18nString(UIStrings.networkAddressEgLocalhost), addressValidator);
        fields.createChild('div', 'network-discovery-value network-discovery-address').appendChild(input);
        return editor;
        function addressValidator(_rule, _index, input) {
            const match = input.value.trim().match(/^([a-zA-Z0-9\.\-_]+):(\d+)$/);
            if (!match) {
                return {
                    valid: false,
                    errorMessage: undefined,
                };
            }
            const port = parseInt(match[2], 10);
            return {
                valid: port <= 65535,
                errorMessage: undefined,
            };
        }
    }
    wasShown() {
        super.wasShown();
        this.#list.registerCSSFiles([_nodeConnectionsPanel_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]]);
    }
}
//# sourceMappingURL=NodeConnectionsPanel.js.map

/***/ }),

/***/ "./entrypoints/node_app/NodeMain.js":
/*!******************************************!*\
  !*** ./entrypoints/node_app/NodeMain.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeChildTargetManager: () => (/* binding */ NodeChildTargetManager),
/* harmony export */   NodeConnection: () => (/* binding */ NodeConnection),
/* harmony export */   NodeMainImpl: () => (/* binding */ NodeMainImpl)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




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
    #targetManager;
    #parentTarget;
    #targetAgent;
    #childTargets;
    #childConnections;
    constructor(parentTarget) {
        super(parentTarget);
        this.#targetManager = parentTarget.targetManager();
        this.#parentTarget = parentTarget;
        this.#targetAgent = parentTarget.targetAgent();
        this.#childTargets = new Map();
        this.#childConnections = new Map();
        parentTarget.registerTargetDispatcher(this);
        void this.#targetAgent.invoke_setDiscoverTargets({ discover: true });
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHostAPI.Events.DevicesDiscoveryConfigChanged, this.#devicesDiscoveryConfigChanged, this);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.setDevicesUpdatesEnabled(false);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.setDevicesUpdatesEnabled(true);
    }
    #devicesDiscoveryConfigChanged({ data: config }) {
        const locations = [];
        for (const address of config.networkDiscoveryConfig) {
            const parts = address.split(':');
            const port = parseInt(parts[1], 10);
            if (parts[0] && port) {
                locations.push({ host: parts[0], port: port });
            }
        }
        void this.#targetAgent.invoke_setRemoteLocations({ locations });
    }
    dispose() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.events.removeEventListener(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHostAPI.Events.DevicesDiscoveryConfigChanged, this.#devicesDiscoveryConfigChanged, this);
        for (const sessionId of this.#childTargets.keys()) {
            this.detachedFromTarget({ sessionId });
        }
    }
    targetCreated({ targetInfo }) {
        if (targetInfo.type === 'node' && !targetInfo.attached) {
            void this.#targetAgent.invoke_attachToTarget({ targetId: targetInfo.targetId, flatten: false });
        }
    }
    targetInfoChanged(_event) {
    }
    targetDestroyed(_event) {
    }
    attachedToTarget({ sessionId, targetInfo }) {
        const name = i18nString(UIStrings.nodejsS, { PH1: targetInfo.url });
        const connection = new NodeConnection(this.#targetAgent, sessionId);
        this.#childConnections.set(sessionId, connection);
        const target = this.#targetManager.createTarget(targetInfo.targetId, name, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Node, this.#parentTarget, undefined, undefined, connection);
        this.#childTargets.set(sessionId, target);
        void target.runtimeAgent().invoke_runIfWaitingForDebugger();
    }
    detachedFromTarget({ sessionId }) {
        const childTarget = this.#childTargets.get(sessionId);
        if (childTarget) {
            childTarget.dispose('target terminated');
        }
        this.#childTargets.delete(sessionId);
        this.#childConnections.delete(sessionId);
    }
    receivedMessageFromTarget({ sessionId, message }) {
        const connection = this.#childConnections.get(sessionId);
        const onMessage = connection ? connection.onMessage : null;
        if (onMessage) {
            onMessage.call(null, message);
        }
    }
    targetCrashed(_event) {
    }
}
class NodeConnection {
    #targetAgent;
    #sessionId;
    onMessage;
    #onDisconnect;
    constructor(targetAgent, sessionId) {
        this.#targetAgent = targetAgent;
        this.#sessionId = sessionId;
        this.onMessage = null;
        this.#onDisconnect = null;
    }
    setOnMessage(onMessage) {
        this.onMessage = onMessage;
    }
    setOnDisconnect(onDisconnect) {
        this.#onDisconnect = onDisconnect;
    }
    sendRawMessage(message) {
        void this.#targetAgent.invoke_sendMessageToTarget({ message, sessionId: this.#sessionId });
    }
    async disconnect() {
        if (this.#onDisconnect) {
            this.#onDisconnect.call(null, 'force disconnect');
        }
        this.#onDisconnect = null;
        this.onMessage = null;
        await this.#targetAgent.invoke_detachFromTarget({ sessionId: this.#sessionId });
    }
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SDKModel.SDKModel.register(NodeChildTargetManager, { capabilities: 32 /* SDK.Target.Capability.Target */, autostart: true });
//# sourceMappingURL=NodeMain.js.map

/***/ }),

/***/ "./entrypoints/node_app/nodeConnectionsPanel.css.js":
/*!**********************************************************!*\
  !*** ./entrypoints/node_app/nodeConnectionsPanel.css.js ***!
  \**********************************************************/
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
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.add-network-target-button {
  margin: 10px 25px;
  align-self: center;
}

.network-discovery-list {
  flex: none;
  max-width: 600px;
  max-height: 202px;
  margin: 20px 0 5px;
}

.network-discovery-list-empty {
  flex: auto;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.network-discovery-list-item {
  padding: 3px 5px;
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
  flex: auto 1 1;
}

.network-discovery-value {
  flex: 3 1 0;
}

.list-item .network-discovery-value {
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
  color: var(--sys-color-on-surface);
  overflow: hidden;
}

.network-discovery-edit-row {
  flex: none;
  display: flex;
  flex-direction: row;
  margin: 6px 5px;
  align-items: center;
}

.network-discovery-edit-row input {
  width: 100%;
  text-align: inherit;
}

.network-discovery-footer {
  margin: 0;
  overflow: hidden;
  max-width: 500px;
  padding: 3px;
}

.network-discovery-footer > * {
  white-space: pre-wrap;
}

.node-panel {
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
}

.network-discovery-view {
  min-width: 400px;
  text-align: left;
}

:host-context(.node-frontend) .network-discovery-list-empty {
  height: 40px;
}

:host-context(.node-frontend) .network-discovery-list-item {
  padding: 3px 15px;
  height: 40px;
}

.node-panel-center {
  max-width: 600px;
  padding-top: 50px;
  text-align: center;
}

.node-panel-logo {
  width: 400px;
  margin-bottom: 50px;
}

:host-context(.node-frontend) .network-discovery-edit-row input {
  height: 30px;
  padding-left: 5px;
}

:host-context(.node-frontend) .network-discovery-edit-row {
  margin: 6px 9px;
}

/*# sourceURL=nodeConnectionsPanel.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./entrypoints/node_app/node_app.js":
/*!******************************************!*\
  !*** ./entrypoints/node_app/node_app.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shell_shell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/shell.js */ "./entrypoints/shell/shell.js");
/* harmony import */ var _panels_mobile_throttling_mobile_throttling_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/mobile_throttling/mobile_throttling-meta.js */ "./panels/mobile_throttling/mobile_throttling-meta.js");
/* harmony import */ var _panels_js_timeline_js_timeline_meta_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/js_timeline/js_timeline-meta.js */ "./panels/js_timeline/js_timeline-meta.js");
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _main_main_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../main/main.js */ "./entrypoints/main/main.js");
/* harmony import */ var _NodeConnectionsPanel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NodeConnectionsPanel.js */ "./entrypoints/node_app/NodeConnectionsPanel.js");
/* harmony import */ var _NodeMain_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NodeMain.js */ "./entrypoints/node_app/NodeMain.js");
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
        loadedSourcesModule = await Promise.all(/*! import() */[__webpack_require__.e("ui_legacy_components_color_picker_ContrastDetails_js"), __webpack_require__.e("ui_legacy_components_color_picker_spectrum_css_js"), __webpack_require__.e("ui_legacy_components_color_picker_Spectrum_js"), __webpack_require__.e("panels_css_overview_components_CSSOverviewStartView_js"), __webpack_require__.e("panels_css_overview_CSSOverviewCompletedView_js"), __webpack_require__.e("panels_css_overview_CSSOverviewModel_js"), __webpack_require__.e("panels_css_overview_CSSOverviewPanel_js"), __webpack_require__.e("ui_legacy_components_inline_editor_AnimationTimingUI_js"), __webpack_require__.e("ui_legacy_components_inline_editor_CSSAngleEditor_js"), __webpack_require__.e("ui_legacy_components_inline_editor_FontEditorUnitConverter_js"), __webpack_require__.e("ui_legacy_components_inline_editor_FontEditor_js"), __webpack_require__.e("ui_legacy_components_inline_editor_CSSShadowEditor_js"), __webpack_require__.e("ui_legacy_components_inline_editor_BezierEditor_js"), __webpack_require__.e("ui_legacy_components_inline_editor_SwatchPopoverHelper_js"), __webpack_require__.e("ui_legacy_components_inline_editor_CSSAngle_js"), __webpack_require__.e("ui_legacy_components_inline_editor_inline_editor_js"), __webpack_require__.e("ui_components_diff_view_DiffView_js"), __webpack_require__.e("panels_coverage_CoverageModel_js"), __webpack_require__.e("panels_search_SearchResultsPane_js"), __webpack_require__.e("panels_search_SearchView_js"), __webpack_require__.e("panels_coverage_CoverageListView_js"), __webpack_require__.e("panels_coverage_CoverageView_js"), __webpack_require__.e("panels_sources_components_BreakpointsViewUtils_js"), __webpack_require__.e("panels_sources_components_BreakpointsView_js"), __webpack_require__.e("panels_sources_components_HeadersView_js"), __webpack_require__.e("panels_sources_SourcesSearchScope_js"), __webpack_require__.e("panels_sources_NavigatorView_js"), __webpack_require__.e("panels_sources_CallStackSidebarPane_js"), __webpack_require__.e("panels_sources_DebuggerPausedMessage_js"), __webpack_require__.e("panels_sources_CSSPlugin_js"), __webpack_require__.e("panels_sources_BreakpointEditDialog_js"), __webpack_require__.e("panels_sources_SourcesPanel_js"), __webpack_require__.e("panels_sources_FilteredUISourceCodeListProvider_js"), __webpack_require__.e("panels_sources_WatchExpressionsSidebarPane_js"), __webpack_require__.e("panels_sources_SourcesNavigator_js"), __webpack_require__.e("panels_sources_OutlineQuickOpen_js"), __webpack_require__.e("panels_sources_sources_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../panels/sources/sources.js */ "./panels/sources/sources.js"));
    }
    return loadedSourcesModule;
}
_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.registerViewExtension({
    location: "panel" /* UI.ViewManager.ViewLocationValues.PANEL */,
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
// @ts-ignore Exposed for legacy layout tests
self.runtime = _core_root_root_js__WEBPACK_IMPORTED_MODULE_5__.Runtime.Runtime.instance({ forceNew: true });
_core_common_common_js__WEBPACK_IMPORTED_MODULE_3__.Runnable.registerEarlyInitializationRunnable(_NodeMain_js__WEBPACK_IMPORTED_MODULE_9__.NodeMainImpl.instance);
new _main_main_js__WEBPACK_IMPORTED_MODULE_7__.MainImpl.MainImpl();
//# sourceMappingURL=node_app.js.map

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