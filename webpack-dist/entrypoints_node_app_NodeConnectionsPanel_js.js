"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_node_app_NodeConnectionsPanel_js"],{

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


/***/ })

}]);