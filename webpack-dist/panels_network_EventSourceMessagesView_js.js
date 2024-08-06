"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_network_EventSourceMessagesView_js"],{

/***/ "./panels/network/EventSourceMessagesView.js":
/*!***************************************************!*\
  !*** ./panels/network/EventSourceMessagesView.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Comparators: () => (/* binding */ Comparators),
/* harmony export */   EventSourceMessageNode: () => (/* binding */ EventSourceMessageNode),
/* harmony export */   EventSourceMessagesView: () => (/* binding */ EventSourceMessagesView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _eventSourceMessagesView_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eventSourceMessagesView.css.js */ "./panels/network/eventSourceMessagesView.css.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     *@description Text in Event Source Messages View of the Network panel
     */
    id: 'Id',
    /**
     *@description Text that refers to some types
     */
    type: 'Type',
    /**
     *@description Text in Event Source Messages View of the Network panel
     */
    data: 'Data',
    /**
     *@description Text that refers to the time
     */
    time: 'Time',
    /**
     *@description Data grid name for Event Source data grids
     */
    eventSource: 'Event Source',
    /**
     *@description A context menu item in the Resource Web Socket Frame View of the Network panel
     */
    copyMessage: 'Copy message',
    /**
     *@description Text to clear everything
     */
    clearAll: 'Clear all',
    /**
     *@description Example for placeholder text
     */
    filterByRegex: 'Filter using regex (example: https?)',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/network/EventSourceMessagesView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class EventSourceMessagesView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox {
    request;
    dataGrid;
    mainToolbar;
    clearAllButton;
    filterTextInput;
    filterRegex;
    messageFilterSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-event-source-message-filter', '');
    constructor(request) {
        super();
        this.element.classList.add('event-source-messages-view');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('event-stream').track({ resize: true })}`);
        this.request = request;
        this.mainToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('');
        this.clearAllButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStrings.clearAll), 'clear');
        this.clearAllButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.clearMessages, this);
        this.mainToolbar.appendToolbarItem(this.clearAllButton);
        const placeholder = i18nString(UIStrings.filterByRegex);
        this.filterTextInput = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarFilter(placeholder, 0.4);
        this.filterTextInput.addEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */, this.updateFilterSetting, this);
        const filter = this.messageFilterSetting.get();
        this.filterRegex = null;
        this.setFilter(filter);
        if (filter) {
            this.filterTextInput.setValue(filter);
        }
        this.mainToolbar.appendToolbarItem(this.filterTextInput);
        this.element.appendChild(this.mainToolbar.element);
        const columns = [
            { id: 'id', title: i18nString(UIStrings.id), sortable: true, weight: 8 },
            { id: 'type', title: i18nString(UIStrings.type), sortable: true, weight: 8 },
            { id: 'data', title: i18nString(UIStrings.data), sortable: false, weight: 88 },
            { id: 'time', title: i18nString(UIStrings.time), sortable: true, weight: 8 },
        ];
        this.dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.SortableDataGrid.SortableDataGrid({
            displayName: i18nString(UIStrings.eventSource),
            columns,
            editCallback: undefined,
            deleteCallback: undefined,
            refreshCallback: undefined,
        });
        this.dataGrid.setStriped(true);
        this.dataGrid.setStickToBottom(true);
        this.dataGrid.setRowContextMenuCallback(this.onRowContextMenu.bind(this));
        this.dataGrid.markColumnAsSortedBy('time', _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.Order.Ascending);
        this.sortItems();
        this.dataGrid.addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */, this.sortItems, this);
        this.dataGrid.setName('event-source-messages-view');
        this.dataGrid.asWidget().show(this.element);
    }
    wasShown() {
        this.refresh();
        this.registerCSSFiles([_eventSourceMessagesView_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]]);
        this.request.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.EventSourceMessageAdded, this.messageAdded, this);
    }
    willHide() {
        this.request.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.EventSourceMessageAdded, this.messageAdded, this);
    }
    messageAdded(event) {
        const message = event.data;
        if (!this.messageFilter(message)) {
            return;
        }
        this.dataGrid.insertChild(new EventSourceMessageNode(message));
    }
    messageFilter(message) {
        return !this.filterRegex || this.filterRegex.test(message.eventName) || this.filterRegex.test(message.eventId) ||
            this.filterRegex.test(message.data);
    }
    clearMessages() {
        clearMessageOffsets.set(this.request, this.request.eventSourceMessages().length);
        this.refresh();
    }
    updateFilterSetting() {
        const text = this.filterTextInput.value();
        this.messageFilterSetting.set(text);
        this.setFilter(text);
        this.refresh();
    }
    setFilter(text) {
        this.filterRegex = null;
        if (text) {
            try {
                this.filterRegex = new RegExp(text, 'i');
            }
            catch (e) {
                // this regex will never match any input
                this.filterRegex = new RegExp('(?!)', 'i');
            }
        }
    }
    sortItems() {
        const sortColumnId = this.dataGrid.sortColumnId();
        if (!sortColumnId) {
            return;
        }
        const comparator = Comparators[sortColumnId];
        if (!comparator) {
            return;
        }
        this.dataGrid.sortNodes(comparator, !this.dataGrid.isSortOrderAscending());
    }
    onRowContextMenu(contextMenu, node) {
        contextMenu.clipboardSection().appendItem(i18nString(UIStrings.copyMessage), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText.bind(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, node.data.data), { jslogContext: 'copy' });
    }
    refresh() {
        this.dataGrid.rootNode().removeChildren();
        let messages = this.request.eventSourceMessages();
        const offset = clearMessageOffsets.get(this.request) || 0;
        messages = messages.slice(offset);
        messages = messages.filter(this.messageFilter.bind(this));
        messages.forEach(message => this.dataGrid.insertChild(new EventSourceMessageNode(message)));
    }
}
class EventSourceMessageNode extends _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.SortableDataGrid.SortableDataGridNode {
    message;
    constructor(message) {
        const time = new Date(message.time * 1000);
        const timeText = ('0' + time.getHours()).substr(-2) + ':' + ('0' + time.getMinutes()).substr(-2) + ':' +
            ('0' + time.getSeconds()).substr(-2) + '.' + ('00' + time.getMilliseconds()).substr(-3);
        const timeNode = document.createElement('div');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextChild(timeNode, timeText);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(timeNode, time.toLocaleString());
        super({ id: message.eventId, type: message.eventName, data: message.data, time: timeNode });
        this.message = message;
    }
}
function eventSourceMessageNodeComparator(fieldGetter, a, b) {
    const aValue = fieldGetter(a.message);
    const bValue = fieldGetter(b.message);
    return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
}
const Comparators = {
    'id': eventSourceMessageNodeComparator.bind(null, message => message.eventId),
    'type': eventSourceMessageNodeComparator.bind(null, message => message.eventName),
    'time': eventSourceMessageNodeComparator.bind(null, message => message.time),
};
const clearMessageOffsets = new WeakMap();
//# sourceMappingURL=EventSourceMessagesView.js.map

/***/ }),

/***/ "./panels/network/eventSourceMessagesView.css.js":
/*!*******************************************************!*\
  !*** ./panels/network/eventSourceMessagesView.css.js ***!
  \*******************************************************/
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
 * Copyright (c) 2014 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.event-source-messages-view .data-grid {
  flex: auto;
  border: none;
}

/*# sourceURL=eventSourceMessagesView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);