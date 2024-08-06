"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_node_app_NodeMain_js"],{

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

/***/ })

}]);