"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_network_NetworkItemView_js"],{

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

/***/ "./panels/network/NetworkItemView.js":
/*!*******************************************!*\
  !*** ./panels/network/NetworkItemView.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkItemView: () => (/* binding */ NetworkItemView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.js */ "./panels/network/components/components.js");
/* harmony import */ var _EventSourceMessagesView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EventSourceMessagesView.js */ "./panels/network/EventSourceMessagesView.js");
/* harmony import */ var _RequestCookiesView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RequestCookiesView.js */ "./panels/network/RequestCookiesView.js");
/* harmony import */ var _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./RequestInitiatorView.js */ "./panels/network/RequestInitiatorView.js");
/* harmony import */ var _RequestPayloadView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RequestPayloadView.js */ "./panels/network/RequestPayloadView.js");
/* harmony import */ var _RequestPreviewView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RequestPreviewView.js */ "./panels/network/RequestPreviewView.js");
/* harmony import */ var _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RequestResponseView.js */ "./panels/network/RequestResponseView.js");
/* harmony import */ var _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./RequestTimingView.js */ "./panels/network/RequestTimingView.js");
/* harmony import */ var _ResourceWebSocketFrameView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ResourceWebSocketFrameView.js */ "./panels/network/ResourceWebSocketFrameView.js");
/*
 * Copyright (C) 2010 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


















const UIStrings = {
    /**
     *@description Text for network request headers
     */
    headers: 'Headers',
    /**
     *@description Text in Network Item View of the Network panel
     */
    payload: 'Payload',
    /**
     *@description Text in Network Item View of the Network panel
     */
    messages: 'Messages',
    /**
     *@description Text in Network Item View of the Network panel
     */
    websocketMessages: 'WebSocket messages',
    /**
     *@description Text in Network Item View of the Network panel
     */
    eventstream: 'EventStream',
    /**
     *@description Text for previewing items
     */
    preview: 'Preview',
    /**
     *@description Text in Network Item View of the Network panel
     */
    responsePreview: 'Response preview',
    /**
     *@description Icon title in Network Item View of the Network panel
     */
    signedexchangeError: 'SignedExchange error',
    /**
     *@description Title of a tab in the Network panel. A Network response refers to the act of acknowledging a
    network request. Should not be confused with answer.
     */
    response: 'Response',
    /**
     *@description Text in Network Item View of the Network panel
     */
    rawResponseData: 'Raw response data',
    /**
     *@description Text for the initiator of something
     */
    initiator: 'Initiator',
    /**
     * @description Tooltip for initiator view in Network panel. An initiator is a piece of code/entity
     * in the code that initiated/started the network request, i.e. caused the network request. The 'call
     * stack' is the location in the code where the initiation happened.
     */
    requestInitiatorCallStack: 'Request initiator call stack',
    /**
     *@description Title of a tab in Network Item View of the Network panel.
     *The tab displays the duration breakdown of a network request.
     */
    timing: 'Timing',
    /**
     *@description Text in Network Item View of the Network panel
     */
    requestAndResponseTimeline: 'Request and response timeline',
    /**
     *@description Tooltip to explain the warning icon of the Cookies panel
     */
    thirdPartyPhaseout: 'Cookies blocked due to third-party cookie phaseout.',
    /**
     *@description Label of a tab in the network panel. Previously known as 'Trust Tokens'.
     */
    trustTokens: 'Private state tokens',
    /**
     *@description Title of the Private State Token tab in the Network panel. Previously known as 'Trust Token tab'.
     */
    trustTokenOperationDetails: 'Private State Token operation details',
    /**
     *@description Text for web cookies
     */
    cookies: 'Cookies',
    /**
     *@description Text in Network Item View of the Network panel
     */
    requestAndResponseCookies: 'Request and response cookies',
    /**
     *@description Tooltip text explaining that DevTools has overridden the response's headers
     */
    containsOverriddenHeaders: 'This response contains headers which are overridden by DevTools',
    /**
     *@description Tooltip text explaining that DevTools has overridden the response
     */
    responseIsOverridden: 'This response is overridden by DevTools',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/network/NetworkItemView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class NetworkItemView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TabbedPane.TabbedPane {
    requestInternal;
    resourceViewTabSetting;
    headersViewComponent;
    payloadView;
    responseView;
    cookiesView;
    initialTab;
    constructor(request, calculator, initialTab) {
        super();
        this.requestInternal = request;
        this.element.classList.add('network-item-view');
        this.headerElement().setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.toolbar('request-details').track({
            keydown: 'ArrowUp|ArrowLeft|ArrowDown|ArrowRight|Enter|Space',
        })}`);
        const headersTab = "headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */;
        this.resourceViewTabSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('resource-view-tab', "headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */);
        this.headersViewComponent = new _components_components_js__WEBPACK_IMPORTED_MODULE_9__.RequestHeadersView.RequestHeadersView(request);
        this.appendTab(headersTab, i18nString(UIStrings.headers), _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox, this.headersViewComponent), i18nString(UIStrings.headers));
        if (this.requestInternal.hasOverriddenHeaders()) {
            const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
            icon.data =
                { iconName: 'small-status-dot', color: 'var(--sys-color-purple-bright)', width: '16px', height: '16px' };
            icon.title = i18nString(UIStrings.containsOverriddenHeaders);
            this.setTabIcon("headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */, icon);
        }
        this.payloadView = null;
        void this.maybeAppendPayloadPanel();
        this.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TabbedPane.Events.TabSelected, this.tabSelected, this);
        if (request.resourceType() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.WebSocket) {
            const frameView = new _ResourceWebSocketFrameView_js__WEBPACK_IMPORTED_MODULE_17__.ResourceWebSocketFrameView(request);
            this.appendTab("web-socket-frames" /* NetworkForward.UIRequestLocation.UIRequestTabs.WsFrames */, i18nString(UIStrings.messages), frameView, i18nString(UIStrings.websocketMessages));
        }
        else if (request.mimeType === "text/event-stream" /* Platform.MimeType.MimeType.EVENTSTREAM */) {
            this.appendTab("eventSource" /* NetworkForward.UIRequestLocation.UIRequestTabs.EventSource */, i18nString(UIStrings.eventstream), new _EventSourceMessagesView_js__WEBPACK_IMPORTED_MODULE_10__.EventSourceMessagesView(request));
            this.responseView = new _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_15__.RequestResponseView(request);
            this.appendTab("response" /* NetworkForward.UIRequestLocation.UIRequestTabs.Response */, i18nString(UIStrings.response), this.responseView, i18nString(UIStrings.rawResponseData));
        }
        else {
            this.responseView = new _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_15__.RequestResponseView(request);
            const previewView = new _RequestPreviewView_js__WEBPACK_IMPORTED_MODULE_14__.RequestPreviewView(request);
            this.appendTab("preview" /* NetworkForward.UIRequestLocation.UIRequestTabs.Preview */, i18nString(UIStrings.preview), previewView, i18nString(UIStrings.responsePreview));
            const signedExchangeInfo = request.signedExchangeInfo();
            if (signedExchangeInfo && signedExchangeInfo.errors && signedExchangeInfo.errors.length) {
                const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
                icon.data = { iconName: 'cross-circle-filled', color: 'var(--icon-error)', width: '14px', height: '14px' };
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(icon, i18nString(UIStrings.signedexchangeError));
                this.setTabIcon("preview" /* NetworkForward.UIRequestLocation.UIRequestTabs.Preview */, icon);
            }
            this.appendTab("response" /* NetworkForward.UIRequestLocation.UIRequestTabs.Response */, i18nString(UIStrings.response), this.responseView, i18nString(UIStrings.rawResponseData));
            if (this.requestInternal.hasOverriddenContent) {
                const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
                icon.title = i18nString(UIStrings.responseIsOverridden);
                icon.data =
                    { iconName: 'small-status-dot', color: 'var(--sys-color-purple-bright)', width: '16px', height: '16px' };
                this.setTabIcon("response" /* NetworkForward.UIRequestLocation.UIRequestTabs.Response */, icon);
            }
        }
        this.appendTab("initiator" /* NetworkForward.UIRequestLocation.UIRequestTabs.Initiator */, i18nString(UIStrings.initiator), new _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_12__.RequestInitiatorView(request), i18nString(UIStrings.requestInitiatorCallStack));
        this.appendTab("timing" /* NetworkForward.UIRequestLocation.UIRequestTabs.Timing */, i18nString(UIStrings.timing), new _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_16__.RequestTimingView(request, calculator), i18nString(UIStrings.requestAndResponseTimeline));
        if (request.trustTokenParams()) {
            this.appendTab("trust-tokens" /* NetworkForward.UIRequestLocation.UIRequestTabs.TrustTokens */, i18nString(UIStrings.trustTokens), _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox, new _components_components_js__WEBPACK_IMPORTED_MODULE_9__.RequestTrustTokensView.RequestTrustTokensView(request)), i18nString(UIStrings.trustTokenOperationDetails));
        }
        this.cookiesView = null;
        this.initialTab = initialTab || this.resourceViewTabSetting.get();
        // Selecting tabs should not be handled by the super class.
        this.setAutoSelectFirstItemOnShow(false);
    }
    wasShown() {
        super.wasShown();
        this.requestInternal.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.RequestHeadersChanged, this.requestHeadersChanged, this);
        this.requestInternal.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.ResponseHeadersChanged, this.maybeAppendCookiesPanel, this);
        this.requestInternal.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.TrustTokenResultAdded, this.maybeShowErrorIconInTrustTokenTabHeader, this);
        this.maybeAppendCookiesPanel();
        this.maybeShowErrorIconInTrustTokenTabHeader();
        // Only select the initial tab the first time the view is shown after construction.
        // When the view is re-shown (without re-constructing) users or revealers might have changed
        // the selected tab in the mean time. Show the previously selected tab in that
        // case instead, by simply doing nohting.
        if (this.initialTab) {
            this.selectTabInternal(this.initialTab);
            this.initialTab = undefined;
        }
    }
    willHide() {
        this.requestInternal.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.RequestHeadersChanged, this.requestHeadersChanged, this);
        this.requestInternal.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.ResponseHeadersChanged, this.maybeAppendCookiesPanel, this);
        this.requestInternal.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.TrustTokenResultAdded, this.maybeShowErrorIconInTrustTokenTabHeader, this);
    }
    async requestHeadersChanged() {
        this.maybeAppendCookiesPanel();
        void this.maybeAppendPayloadPanel();
    }
    maybeAppendCookiesPanel() {
        const cookiesPresent = this.requestInternal.hasRequestCookies() || this.requestInternal.responseCookies.length > 0;
        console.assert(cookiesPresent || !this.cookiesView, 'Cookies were introduced in headers and then removed!');
        if (cookiesPresent && !this.cookiesView) {
            this.cookiesView = new _RequestCookiesView_js__WEBPACK_IMPORTED_MODULE_11__.RequestCookiesView(this.requestInternal);
            this.appendTab("cookies" /* NetworkForward.UIRequestLocation.UIRequestTabs.Cookies */, i18nString(UIStrings.cookies), this.cookiesView, i18nString(UIStrings.requestAndResponseCookies));
        }
        if (this.requestInternal.hasThirdPartyCookiePhaseoutIssue()) {
            const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
            icon.data = { iconName: 'warning-filled', color: 'var(--icon-warning)', width: '14px', height: '14px' };
            icon.title = i18nString(UIStrings.thirdPartyPhaseout);
            this.setTabIcon("cookies" /* NetworkForward.UIRequestLocation.UIRequestTabs.Cookies */, icon);
        }
    }
    async maybeAppendPayloadPanel() {
        if (this.hasTab('payload')) {
            return;
        }
        if (this.requestInternal.queryParameters || await this.requestInternal.requestFormData()) {
            this.payloadView = new _RequestPayloadView_js__WEBPACK_IMPORTED_MODULE_13__.RequestPayloadView(this.requestInternal);
            this.appendTab("payload" /* NetworkForward.UIRequestLocation.UIRequestTabs.Payload */, i18nString(UIStrings.payload), this.payloadView, i18nString(UIStrings.payload), /* userGesture=*/ void 0, 
            /* isCloseable=*/ void 0, /* isPreviewFeature=*/ void 0, /* index=*/ 1);
        }
    }
    maybeShowErrorIconInTrustTokenTabHeader() {
        const trustTokenResult = this.requestInternal.trustTokenOperationDoneEvent();
        if (trustTokenResult &&
            !_components_components_js__WEBPACK_IMPORTED_MODULE_9__.RequestTrustTokensView.statusConsideredSuccess(trustTokenResult.status)) {
            const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
            icon.data = { iconName: 'cross-circle-filled', color: 'var(--icon-error)', width: '14px', height: '14px' };
            this.setTabIcon("trust-tokens" /* NetworkForward.UIRequestLocation.UIRequestTabs.TrustTokens */, icon);
        }
    }
    selectTabInternal(tabId) {
        if (!this.selectTab(tabId)) {
            // maybeAppendPayloadPanel might cause payload tab to appear asynchronously, so
            // it makes sense to retry on the next tick
            window.setTimeout(() => {
                if (!this.selectTab(tabId)) {
                    this.selectTab("headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */);
                }
            }, 0);
        }
    }
    tabSelected(event) {
        if (!event.data.isUserGesture) {
            return;
        }
        this.resourceViewTabSetting.set(event.data.tabId);
    }
    request() {
        return this.requestInternal;
    }
    async revealResponseBody(position) {
        this.selectTabInternal("response" /* NetworkForward.UIRequestLocation.UIRequestTabs.Response */);
        await this.responseView?.revealPosition(position);
    }
    revealHeader(section, header) {
        this.selectTabInternal("headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */);
        this.headersViewComponent.revealHeader(section, header);
    }
    getHeadersViewComponent() {
        return this.headersViewComponent;
    }
}
//# sourceMappingURL=NetworkItemView.js.map

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