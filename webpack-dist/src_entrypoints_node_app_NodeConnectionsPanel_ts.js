"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_node_app_NodeConnectionsPanel_ts"],{

/***/ "./src/entrypoints/node_app/NodeConnectionsPanel.ts":
/*!**********************************************************!*\
  !*** ./src/entrypoints/node_app/NodeConnectionsPanel.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeConnectionsPanel: () => (/* binding */ NodeConnectionsPanel),
/* harmony export */   NodeConnectionsView: () => (/* binding */ NodeConnectionsView)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './nodeConnectionsPanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _NodeConnectionsPanel_instances, _NodeConnectionsPanel_config, _NodeConnectionsPanel_networkDiscoveryView, _NodeConnectionsPanel_devicesDiscoveryConfigChanged, _NodeConnectionsView_instances, _NodeConnectionsView_callback, _NodeConnectionsView_list, _NodeConnectionsView_editor, _NodeConnectionsView_networkDiscoveryConfig, _NodeConnectionsView_update, _NodeConnectionsView_addNetworkTargetButtonClicked, _NodeConnectionsView_createEditor;





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
    constructor() {
        super('node-connection');
        _NodeConnectionsPanel_instances.add(this);
        _NodeConnectionsPanel_config.set(this, void 0);
        _NodeConnectionsPanel_networkDiscoveryView.set(this, void 0);
        this.contentElement.classList.add('node-panel');
        const container = this.contentElement.createChild('div', 'node-panel-center');
        const image = container.createChild('img', 'node-panel-logo');
        image.src = 'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg';
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHostAPI.Events.DevicesDiscoveryConfigChanged, __classPrivateFieldGet(this, _NodeConnectionsPanel_instances, "m", _NodeConnectionsPanel_devicesDiscoveryConfigChanged), this);
        this.contentElement.tabIndex = 0;
        this.setDefaultFocusedElement(this.contentElement);
        // Trigger notification once.
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.setDevicesUpdatesEnabled(false);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.setDevicesUpdatesEnabled(true);
        __classPrivateFieldSet(this, _NodeConnectionsPanel_networkDiscoveryView, new NodeConnectionsView(config => {
            __classPrivateFieldGet(this, _NodeConnectionsPanel_config, "f").networkDiscoveryConfig = config;
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.setDevicesDiscoveryConfig(__classPrivateFieldGet(this, _NodeConnectionsPanel_config, "f"));
        }), "f");
        __classPrivateFieldGet(this, _NodeConnectionsPanel_networkDiscoveryView, "f").show(container);
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './nodeConnectionsPanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
_NodeConnectionsPanel_config = new WeakMap(), _NodeConnectionsPanel_networkDiscoveryView = new WeakMap(), _NodeConnectionsPanel_instances = new WeakSet(), _NodeConnectionsPanel_devicesDiscoveryConfigChanged = function _NodeConnectionsPanel_devicesDiscoveryConfigChanged({ data: config }) {
    __classPrivateFieldSet(this, _NodeConnectionsPanel_config, config, "f");
    __classPrivateFieldGet(this, _NodeConnectionsPanel_networkDiscoveryView, "f").discoveryConfigChanged(__classPrivateFieldGet(this, _NodeConnectionsPanel_config, "f").networkDiscoveryConfig);
};
class NodeConnectionsView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox {
    constructor(callback) {
        super();
        _NodeConnectionsView_instances.add(this);
        _NodeConnectionsView_callback.set(this, void 0);
        _NodeConnectionsView_list.set(this, void 0);
        _NodeConnectionsView_editor.set(this, void 0);
        _NodeConnectionsView_networkDiscoveryConfig.set(this, void 0);
        __classPrivateFieldSet(this, _NodeConnectionsView_callback, callback, "f");
        this.element.classList.add('network-discovery-view');
        const networkDiscoveryFooter = this.element.createChild('div', 'network-discovery-footer');
        const documentationLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.XLink.XLink.create('https://nodejs.org/en/docs/inspector/', i18nString(UIStrings.nodejsDebuggingGuide), undefined, undefined, 'node-js-debugging');
        networkDiscoveryFooter.appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.specifyNetworkEndpointAnd, { PH1: documentationLink }));
        __classPrivateFieldSet(this, _NodeConnectionsView_list, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListWidget.ListWidget(this), "f");
        __classPrivateFieldGet(this, _NodeConnectionsView_list, "f").element.classList.add('network-discovery-list');
        const placeholder = document.createElement('div');
        placeholder.classList.add('network-discovery-list-empty');
        placeholder.textContent = i18nString(UIStrings.noConnectionsSpecified);
        __classPrivateFieldGet(this, _NodeConnectionsView_list, "f").setEmptyPlaceholder(placeholder);
        __classPrivateFieldGet(this, _NodeConnectionsView_list, "f").show(this.element);
        __classPrivateFieldSet(this, _NodeConnectionsView_editor, null, "f");
        const addButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextButton(i18nString(UIStrings.addConnection), __classPrivateFieldGet(this, _NodeConnectionsView_instances, "m", _NodeConnectionsView_addNetworkTargetButtonClicked).bind(this), { className: 'add-network-target-button', variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.PRIMARY });
        this.element.appendChild(addButton);
        __classPrivateFieldSet(this, _NodeConnectionsView_networkDiscoveryConfig, [], "f");
        this.element.classList.add('node-frontend');
    }
    discoveryConfigChanged(networkDiscoveryConfig) {
        __classPrivateFieldSet(this, _NodeConnectionsView_networkDiscoveryConfig, [], "f");
        __classPrivateFieldGet(this, _NodeConnectionsView_list, "f").clear();
        for (const address of networkDiscoveryConfig) {
            const item = { address: address, port: '' };
            __classPrivateFieldGet(this, _NodeConnectionsView_networkDiscoveryConfig, "f").push(item);
            __classPrivateFieldGet(this, _NodeConnectionsView_list, "f").appendItem(item, true);
        }
    }
    renderItem(rule, _editable) {
        const element = document.createElement('div');
        element.classList.add('network-discovery-list-item');
        element.createChild('div', 'network-discovery-value network-discovery-address').textContent = rule.address;
        return element;
    }
    removeItemRequested(rule, index) {
        __classPrivateFieldGet(this, _NodeConnectionsView_networkDiscoveryConfig, "f").splice(index, 1);
        __classPrivateFieldGet(this, _NodeConnectionsView_list, "f").removeItem(index);
        __classPrivateFieldGet(this, _NodeConnectionsView_instances, "m", _NodeConnectionsView_update).call(this);
    }
    commitEdit(rule, editor, isNew) {
        rule.address = editor.control('address').value.trim();
        if (isNew) {
            __classPrivateFieldGet(this, _NodeConnectionsView_networkDiscoveryConfig, "f").push(rule);
        }
        __classPrivateFieldGet(this, _NodeConnectionsView_instances, "m", _NodeConnectionsView_update).call(this);
    }
    beginEdit(rule) {
        const editor = __classPrivateFieldGet(this, _NodeConnectionsView_instances, "m", _NodeConnectionsView_createEditor).call(this);
        editor.control('address').value = rule.address;
        return editor;
    }
    wasShown() {
        super.wasShown();
        __classPrivateFieldGet(this, _NodeConnectionsView_list, "f").registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './nodeConnectionsPanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
_NodeConnectionsView_callback = new WeakMap(), _NodeConnectionsView_list = new WeakMap(), _NodeConnectionsView_editor = new WeakMap(), _NodeConnectionsView_networkDiscoveryConfig = new WeakMap(), _NodeConnectionsView_instances = new WeakSet(), _NodeConnectionsView_update = function _NodeConnectionsView_update() {
    const config = __classPrivateFieldGet(this, _NodeConnectionsView_networkDiscoveryConfig, "f").map(item => item.address);
    __classPrivateFieldGet(this, _NodeConnectionsView_callback, "f").call(null, config);
}, _NodeConnectionsView_addNetworkTargetButtonClicked = function _NodeConnectionsView_addNetworkTargetButtonClicked() {
    __classPrivateFieldGet(this, _NodeConnectionsView_list, "f").addNewItem(__classPrivateFieldGet(this, _NodeConnectionsView_networkDiscoveryConfig, "f").length, { address: '', port: '' });
}, _NodeConnectionsView_createEditor = function _NodeConnectionsView_createEditor() {
    if (__classPrivateFieldGet(this, _NodeConnectionsView_editor, "f")) {
        return __classPrivateFieldGet(this, _NodeConnectionsView_editor, "f");
    }
    const editor = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListWidget.Editor();
    __classPrivateFieldSet(this, _NodeConnectionsView_editor, editor, "f");
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
};


/***/ })

}]);