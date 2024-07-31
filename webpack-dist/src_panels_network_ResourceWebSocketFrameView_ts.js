"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_network_ResourceWebSocketFrameView_ts"],{

/***/ "./src/panels/network/ResourceWebSocketFrameView.ts":
/*!**********************************************************!*\
  !*** ./src/panels/network/ResourceWebSocketFrameView.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourceWebSocketFrameNode: () => (/* binding */ ResourceWebSocketFrameNode),
/* harmony export */   ResourceWebSocketFrameView: () => (/* binding */ ResourceWebSocketFrameView),
/* harmony export */   opCodeDescriptions: () => (/* binding */ opCodeDescriptions)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./src/ui/legacy/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./src/ui/legacy/components/source_frame/source_frame.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _BinaryResourceView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BinaryResourceView.js */ "./src/panels/network/BinaryResourceView.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './webSocketFrameView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2012 Research In Motion Limited. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */












const UIStrings = {
    /**
     *@description Text in Event Source Messages View of the Network panel
     */
    data: 'Data',
    /**
     *@description Text in Resource Web Socket Frame View of the Network panel
     */
    length: 'Length',
    /**
     *@description Text that refers to the time
     */
    time: 'Time',
    /**
     *@description Data grid name for Web Socket Frame data grids
     */
    webSocketFrame: 'Web Socket Frame',
    /**
     *@description Text to clear everything
     */
    clearAll: 'Clear All',
    /**
     *@description Text to filter result items
     */
    filter: 'Filter',
    /**
     *@description Text in Resource Web Socket Frame View of the Network panel
     */
    selectMessageToBrowseItsContent: 'Select message to browse its content.',
    /**
     *@description Text in Resource Web Socket Frame View of the Network panel
     */
    copyMessageD: 'Copy message...',
    /**
     *@description A context menu item in the Resource Web Socket Frame View of the Network panel
     */
    copyMessage: 'Copy message',
    /**
     *@description Text to clear everything
     */
    clearAllL: 'Clear all',
    /**
     * @description Text in Resource Web Socket Frame View of the Network panel. Displays which Opcode
     * is relevant to a particular operation. 'mask' indicates that the Opcode used a mask, which is a
     * way of modifying a value by overlaying another value on top of it, partially covering/changing
     * it, hence 'masking' it.
     * https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers
     * @example {Localized name of the Opcode} PH1
     * @example {0} PH2
     */
    sOpcodeSMask: '{PH1} (Opcode {PH2}, mask)',
    /**
     * @description Text in Resource Web Socket Frame View of the Network panel. Displays which Opcode
     * is relevant to a particular operation.
     * @example {Localized name of the Opcode} PH1
     * @example {0} PH2
     */
    sOpcodeS: '{PH1} (Opcode {PH2})',
    /**
     *@description Op codes continuation frame of map in Resource Web Socket Frame View of the Network panel
     */
    continuationFrame: 'Continuation Frame',
    /**
     *@description Op codes text frame of map in Resource Web Socket Frame View of the Network panel
     */
    textMessage: 'Text Message',
    /**
     *@description Op codes binary frame of map in Resource Web Socket Frame View of the Network panel
     */
    binaryMessage: 'Binary Message',
    /**
     *@description Op codes continuation frame of map in Resource Web Socket Frame View of the Network panel indicating that the web socket connection has been closed.
     */
    connectionCloseMessage: 'Connection Close Message',
    /**
     *@description Op codes ping frame of map in Resource Web Socket Frame View of the Network panel
     */
    pingMessage: 'Ping Message',
    /**
     *@description Op codes pong frame of map in Resource Web Socket Frame View of the Network panel
     */
    pongMessage: 'Pong Message',
    /**
     *@description Text for everything
     */
    all: 'All',
    /**
     *@description Text in Resource Web Socket Frame View of the Network panel
     */
    send: 'Send',
    /**
     *@description Text in Resource Web Socket Frame View of the Network panel
     */
    receive: 'Receive',
    /**
     *@description Text for something not available
     */
    na: 'N/A',
    /**
     *@description Example for placeholder text
     */
    filterUsingRegex: 'Filter using regex (example: (web)?socket)',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/network/ResourceWebSocketFrameView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
const i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
class ResourceWebSocketFrameView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Widget.VBox {
    constructor(request) {
        super();
        Object.defineProperty(this, "request", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "splitWidget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dataGrid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "timeComparator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "mainToolbar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "clearAllButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "filterTypeCombobox", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "filterType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "filterTextInput", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "filterRegex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "frameEmptyWidget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectedNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "currentSelectedNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "messageFilterSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-web-socket-message-filter', '')
        });
        this.element.classList.add('websocket-frame-view');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.pane('web-socket-messages').track({ resize: true })}`);
        this.request = request;
        this.splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.SplitWidget.SplitWidget(false, true, 'resource-web-socket-frame-split-view-state');
        this.splitWidget.show(this.element);
        const columns = [
            { id: 'data', title: i18nString(UIStrings.data), sortable: false, weight: 88 },
            {
                id: 'length',
                title: i18nString(UIStrings.length),
                sortable: false,
                align: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.DataGrid.Align.Right,
                weight: 5,
            },
            { id: 'time', title: i18nString(UIStrings.time), sortable: true, weight: 7 },
        ];
        this.dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.SortableDataGrid.SortableDataGrid({
            displayName: i18nString(UIStrings.webSocketFrame),
            columns,
            editCallback: undefined,
            deleteCallback: undefined,
            refreshCallback: undefined,
        });
        this.dataGrid.setRowContextMenuCallback(onRowContextMenu.bind(this));
        this.dataGrid.setStickToBottom(true);
        this.dataGrid.setCellClass('websocket-frame-view-td');
        this.timeComparator =
            resourceWebSocketFrameNodeTimeComparator;
        this.dataGrid.sortNodes(this.timeComparator, false);
        this.dataGrid.markColumnAsSortedBy('time', _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.DataGrid.Order.Ascending);
        this.dataGrid.addEventListener(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.DataGrid.Events.SortingChanged, this.sortItems, this);
        this.dataGrid.setName('resource-web-socket-frame-view');
        this.dataGrid.addEventListener(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.DataGrid.Events.SelectedNode, event => {
            void this.onFrameSelected(event);
        }, this);
        this.dataGrid.addEventListener(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.DataGrid.Events.DeselectedNode, this.onFrameDeselected, this);
        this.mainToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Toolbar('');
        this.clearAllButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(i18nString(UIStrings.clearAll), 'clear');
        this.clearAllButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton.Events.Click, this.clearFrames, this);
        this.mainToolbar.appendToolbarItem(this.clearAllButton);
        this.filterTypeCombobox =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarComboBox(this.updateFilterSetting.bind(this), i18nString(UIStrings.filter));
        for (const filterItem of FILTER_TYPES) {
            const option = this.filterTypeCombobox.createOption(filterItem.label(), filterItem.name);
            this.filterTypeCombobox.addOption(option);
        }
        this.mainToolbar.appendToolbarItem(this.filterTypeCombobox);
        this.filterType = null;
        const placeholder = i18nString(UIStrings.filterUsingRegex);
        this.filterTextInput = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarFilter(placeholder, 0.4);
        this.filterTextInput.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarInput.Event.TextChanged, this.updateFilterSetting, this);
        const filter = this.messageFilterSetting.get();
        if (filter) {
            this.filterTextInput.setValue(filter);
        }
        this.filterRegex = null;
        this.mainToolbar.appendToolbarItem(this.filterTextInput);
        const mainContainer = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Widget.VBox();
        mainContainer.element.appendChild(this.mainToolbar.element);
        this.dataGrid.asWidget().show(mainContainer.element);
        mainContainer.setMinimumSize(0, 72);
        this.splitWidget.setMainWidget(mainContainer);
        this.frameEmptyWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.EmptyWidget.EmptyWidget(i18nString(UIStrings.selectMessageToBrowseItsContent));
        this.splitWidget.setSidebarWidget(this.frameEmptyWidget);
        this.selectedNode = null;
        if (filter) {
            this.applyFilter(filter);
        }
        function onRowContextMenu(contextMenu, genericNode) {
            const node = genericNode;
            const binaryView = node.binaryView();
            if (binaryView) {
                binaryView.addCopyToContextMenu(contextMenu, i18nString(UIStrings.copyMessageD));
            }
            else {
                contextMenu.clipboardSection().appendItem(i18nString(UIStrings.copyMessage), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText.bind(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, node.data.data), { jslogContext: 'copy' });
            }
            contextMenu.footerSection().appendItem(i18nString(UIStrings.clearAllL), this.clearFrames.bind(this), { jslogContext: 'clear-all' });
        }
    }
    static opCodeDescription(opCode, mask) {
        const localizedDescription = opCodeDescriptions[opCode] || (() => '');
        if (mask) {
            return i18nString(UIStrings.sOpcodeSMask, { PH1: localizedDescription(), PH2: opCode });
        }
        return i18nString(UIStrings.sOpcodeS, { PH1: localizedDescription(), PH2: opCode });
    }
    wasShown() {
        this.refresh();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './webSocketFrameView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.request.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.Events.WebsocketFrameAdded, this.frameAdded, this);
    }
    willHide() {
        this.request.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.Events.WebsocketFrameAdded, this.frameAdded, this);
    }
    frameAdded(event) {
        const frame = event.data;
        if (!this.frameFilter(frame)) {
            return;
        }
        this.dataGrid.insertChild(new ResourceWebSocketFrameNode(this.request.url(), frame));
    }
    frameFilter(frame) {
        if (this.filterType && frame.type !== this.filterType) {
            return false;
        }
        return !this.filterRegex || this.filterRegex.test(frame.text);
    }
    clearFrames() {
        // TODO(allada): actially remove frames from request.
        clearFrameOffsets.set(this.request, this.request.frames().length);
        this.refresh();
    }
    updateFilterSetting() {
        const text = this.filterTextInput.value();
        this.messageFilterSetting.set(text);
        this.applyFilter(text);
    }
    applyFilter(text) {
        const type = this.filterTypeCombobox.selectedOption().value;
        if (text) {
            try {
                this.filterRegex = new RegExp(text, 'i');
            }
            catch (e) {
                this.filterRegex = new RegExp(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.escapeForRegExp(text), 'i');
            }
        }
        else {
            this.filterRegex = null;
        }
        this.filterType = type === 'all' ? null : type;
        this.refresh();
    }
    async onFrameSelected(event) {
        this.currentSelectedNode = event.data;
        const content = this.currentSelectedNode.dataText();
        const binaryView = this.currentSelectedNode.binaryView();
        if (binaryView) {
            this.splitWidget.setSidebarWidget(binaryView);
            return;
        }
        const jsonView = await _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_7__.JSONView.JSONView.createView(content);
        if (jsonView) {
            this.splitWidget.setSidebarWidget(jsonView);
            return;
        }
        this.splitWidget.setSidebarWidget(new _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_7__.ResourceSourceFrame.ResourceSourceFrame(_models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__.StaticContentProvider.StaticContentProvider.fromString(this.request.url(), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.WebSocket, content), ''));
    }
    onFrameDeselected() {
        this.currentSelectedNode = null;
        this.splitWidget.setSidebarWidget(this.frameEmptyWidget);
    }
    refresh() {
        this.dataGrid.rootNode().removeChildren();
        const url = this.request.url();
        let frames = this.request.frames();
        const offset = clearFrameOffsets.get(this.request) || 0;
        frames = frames.slice(offset);
        frames = frames.filter(this.frameFilter.bind(this));
        frames.forEach(frame => this.dataGrid.insertChild(new ResourceWebSocketFrameNode(url, frame)));
    }
    sortItems() {
        this.dataGrid.sortNodes(this.timeComparator, !this.dataGrid.isSortOrderAscending());
    }
}
var OpCodes;
(function (OpCodes) {
    OpCodes[OpCodes["ContinuationFrame"] = 0] = "ContinuationFrame";
    OpCodes[OpCodes["TextFrame"] = 1] = "TextFrame";
    OpCodes[OpCodes["BinaryFrame"] = 2] = "BinaryFrame";
    OpCodes[OpCodes["ConnectionCloseFrame"] = 8] = "ConnectionCloseFrame";
    OpCodes[OpCodes["PingFrame"] = 9] = "PingFrame";
    OpCodes[OpCodes["PongFrame"] = 10] = "PongFrame";
})(OpCodes || (OpCodes = {}));
const opCodeDescriptions = (function () {
    const map = [];
    map[OpCodes.ContinuationFrame] = i18nLazyString(UIStrings.continuationFrame);
    map[OpCodes.TextFrame] = i18nLazyString(UIStrings.textMessage);
    map[OpCodes.BinaryFrame] = i18nLazyString(UIStrings.binaryMessage);
    map[OpCodes.ConnectionCloseFrame] = i18nLazyString(UIStrings.connectionCloseMessage);
    map[OpCodes.PingFrame] = i18nLazyString(UIStrings.pingMessage);
    map[OpCodes.PongFrame] = i18nLazyString(UIStrings.pongMessage);
    return map;
})();
const FILTER_TYPES = [
    { name: 'all', label: i18nLazyString(UIStrings.all), jslogContext: 'all' },
    { name: 'send', label: i18nLazyString(UIStrings.send), jslogContext: 'send' },
    { name: 'receive', label: i18nLazyString(UIStrings.receive), jslogContext: 'receive' },
];
class ResourceWebSocketFrameNode extends _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.SortableDataGrid.SortableDataGridNode {
    constructor(url, frame) {
        let length = String(frame.text.length);
        const time = new Date(frame.time * 1000);
        const timeText = ('0' + time.getHours()).substr(-2) + ':' + ('0' + time.getMinutes()).substr(-2) + ':' +
            ('0' + time.getSeconds()).substr(-2) + '.' + ('00' + time.getMilliseconds()).substr(-3);
        const timeNode = document.createElement('div');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createTextChild(timeNode, timeText);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Tooltip.Tooltip.install(timeNode, time.toLocaleString());
        let dataText = frame.text;
        let description = ResourceWebSocketFrameView.opCodeDescription(frame.opCode, frame.mask);
        const isTextFrame = frame.opCode === OpCodes.TextFrame;
        if (frame.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.WebSocketFrameType.Error) {
            description = dataText;
            length = i18nString(UIStrings.na);
        }
        else if (isTextFrame) {
            description = dataText;
        }
        else if (frame.opCode === OpCodes.BinaryFrame) {
            length = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.base64ToSize(frame.text));
            description = opCodeDescriptions[frame.opCode]();
        }
        else {
            dataText = description;
        }
        super({ data: description, length: length, time: timeNode });
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "frame", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isTextFrame", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dataTextInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "binaryViewInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.url = url;
        this.frame = frame;
        this.isTextFrame = isTextFrame;
        this.dataTextInternal = dataText;
        this.binaryViewInternal = null;
    }
    createCells(element) {
        element.classList.toggle('websocket-frame-view-row-error', this.frame.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.WebSocketFrameType.Error);
        element.classList.toggle('websocket-frame-view-row-send', this.frame.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.WebSocketFrameType.Send);
        element.classList.toggle('websocket-frame-view-row-receive', this.frame.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.WebSocketFrameType.Receive);
        super.createCells(element);
    }
    nodeSelfHeight() {
        return 21;
    }
    dataText() {
        return this.dataTextInternal;
    }
    opCode() {
        return this.frame.opCode;
    }
    binaryView() {
        if (this.isTextFrame || this.frame.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.WebSocketFrameType.Error) {
            return null;
        }
        if (!this.binaryViewInternal) {
            if (this.dataTextInternal.length > 0) {
                this.binaryViewInternal = new _BinaryResourceView_js__WEBPACK_IMPORTED_MODULE_10__.BinaryResourceView(this.dataTextInternal, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DevToolsPath.EmptyUrlString, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.WebSocket);
            }
        }
        return this.binaryViewInternal;
    }
}
function resourceWebSocketFrameNodeTimeComparator(a, b) {
    return a.frame.time - b.frame.time;
}
const clearFrameOffsets = new WeakMap();


/***/ })

}]);