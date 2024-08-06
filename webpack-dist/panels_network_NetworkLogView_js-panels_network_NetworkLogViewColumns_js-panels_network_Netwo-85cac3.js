"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_network_NetworkLogView_js-panels_network_NetworkLogViewColumns_js-panels_network_Netwo-85cac3"],{

/***/ "./panels/network/NetworkFrameGrouper.js":
/*!***********************************************!*\
  !*** ./panels/network/NetworkFrameGrouper.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FrameGroupNode: () => (/* binding */ FrameGroupNode),
/* harmony export */   NetworkFrameGrouper: () => (/* binding */ NetworkFrameGrouper)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NetworkDataGridNode.js */ "./panels/network/NetworkDataGridNode.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





class NetworkFrameGrouper {
    parentView;
    activeGroups;
    constructor(parentView) {
        this.parentView = parentView;
        this.activeGroups = new Map();
    }
    groupNodeForRequest(request) {
        const frame = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel.frameForRequest(request);
        if (!frame || frame.isOutermostFrame()) {
            return null;
        }
        let groupNode = this.activeGroups.get(frame);
        if (groupNode) {
            return groupNode;
        }
        groupNode = new FrameGroupNode(this.parentView, frame);
        this.activeGroups.set(frame, groupNode);
        return groupNode;
    }
    reset() {
        this.activeGroups.clear();
    }
}
class FrameGroupNode extends _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__.NetworkGroupNode {
    frame;
    constructor(parentView, frame) {
        super(parentView);
        this.frame = frame;
    }
    displayName() {
        return new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(this.frame.url).domain() || this.frame.name || '<iframe>';
    }
    renderCell(cell, columnId) {
        super.renderCell(cell, columnId);
        const columnIndex = this.dataGrid.indexOfVisibleColumn(columnId);
        if (columnIndex === 0) {
            const name = this.displayName();
            cell.appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.create('frame', 'network-frame-group-icon'));
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(cell, name);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(cell, name);
            this.setCellAccessibleName(cell.textContent || '', cell, columnId);
        }
    }
}
//# sourceMappingURL=NetworkFrameGrouper.js.map

/***/ }),

/***/ "./panels/network/NetworkLogView.js":
/*!******************************************!*\
  !*** ./panels/network/NetworkLogView.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropDownTypesUI: () => (/* binding */ DropDownTypesUI),
/* harmony export */   HTTPSchemas: () => (/* binding */ HTTPSchemas),
/* harmony export */   MoreFiltersDropDownUI: () => (/* binding */ MoreFiltersDropDownUI),
/* harmony export */   NetworkLogView: () => (/* binding */ NetworkLogView),
/* harmony export */   computeStackTraceText: () => (/* binding */ computeStackTraceText),
/* harmony export */   isRequestFilteredOut: () => (/* binding */ isRequestFilteredOut),
/* harmony export */   overrideFilter: () => (/* binding */ overrideFilter)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_har_har_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/har/har.js */ "./models/har/har.js");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */ var _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../panels/sources/sources.js */ "./panels/sources/sources.js");
/* harmony import */ var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/components/adorners/adorners.js */ "./ui/components/adorners/adorners.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./NetworkDataGridNode.js */ "./panels/network/NetworkDataGridNode.js");
/* harmony import */ var _NetworkFrameGrouper_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./NetworkFrameGrouper.js */ "./panels/network/NetworkFrameGrouper.js");
/* harmony import */ var _networkLogView_css_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./networkLogView.css.js */ "./panels/network/networkLogView.css.js");
/* harmony import */ var _NetworkLogViewColumns_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./NetworkLogViewColumns.js */ "./panels/network/NetworkLogViewColumns.js");
/* harmony import */ var _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./NetworkTimeCalculator.js */ "./panels/network/NetworkTimeCalculator.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2007, 2008 Apple Inc.  All rights reserved.
 * Copyright (C) 2008, 2009 Anthony Ricaud <rik@webkit.org>
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

























const UIStrings = {
    /**
     *@description Text in Network Log View of the Network panel
     */
    invertFilter: 'Invert',
    /**
     *@description Tooltip for the 'invert' checkbox in the Network panel.
     */
    invertsFilter: 'Inverts the search filter',
    /**
     *@description Text for everything
     */
    allStrings: 'All',
    /**
     *@description Text in Network Log View of the Network panel
     */
    hideDataUrls: 'Hide data URLs',
    /**
     *@description Data urlfilter ui element title in Network Log View of the Network panel
     */
    hidesDataAndBlobUrls: 'Hide \'data:\' and \'blob:\' URLs',
    /**
     * @description Label for a filter in the Network panel
     */
    chromeExtensions: 'Hide extension URLs',
    /**
     * @description Tooltip for a filter in the Network panel
     */
    hideChromeExtension: 'Hide \'chrome-extension://\' URLs',
    /**
     *@description Aria accessible name in Network Log View of the Network panel
     */
    requestTypesToInclude: 'Request types to include',
    /**
     * @description Tooltip for the `Request types` dropdown in the Network Panel
     */
    requestTypesTooltip: 'Filter requests by type',
    /**
     * @description Label for the dropdown in the Network Panel
     */
    requestTypes: 'Request types',
    /**
     * @description Dynamic label for the `Request types` dropdown in the Network panel
     * @example {Doc} PH1
     * @example {CSS} PH2
     */
    twoTypesSelected: '{PH1}, {PH2}',
    /**
     * @description: Dynamic label for the `Request types` dropdown in the Network panel
     * @example {Doc} PH1
     * @example {CSS} PH2
     */
    overTwoTypesSelected: '{PH1}, {PH2}...',
    /**
     *@description Label for a checkbox in the Network panel. When checked, only requests with
     *             blocked response cookies are shown.
     */
    hasBlockedCookies: 'Blocked response cookies',
    /**
     *@description Tooltip for a checkbox in the Network panel. The response to a network request may include a
     *             cookie (https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies). Such response cookies can
     *             be malformed or otherwise invalid and the browser may choose to ignore or not accept invalid cookies.
     */
    onlyShowRequestsWithBlockedCookies: 'Show only requests with blocked response cookies',
    /**
     *@description Label for a filter in the Network panel
     */
    blockedRequests: 'Blocked requests',
    /**
     *@description Tooltip for a filter in the Network panel
     */
    onlyShowBlockedRequests: 'Show only blocked requests',
    /**
     *@description Label for a filter in the Network panel
     */
    thirdParty: '3rd-party requests',
    /**
     *@description Tooltip for a filter in the Network panel
     */
    onlyShowThirdPartyRequests: 'Show only requests with origin different from page origin',
    /**
     *@description Text that appears when user drag and drop something (for example, a file) in Network Log View of the Network panel
     */
    dropHarFilesHere: 'Drop HAR files here',
    /**
     *@description Recording text text content in Network Log View of the Network panel
     */
    recordingNetworkActivity: 'Recording network activity…',
    /**
     *@description Text in Network Log View of the Network panel
     *@example {Ctrl + R} PH1
     */
    performARequestOrHitSToRecordThe: 'Perform a request or hit {PH1} to record the reload.',
    /**
     *@description Shown in the Network Log View of the Network panel when the user has not yet
     * recorded any network activity. This is an instruction to the user to start recording in order to
     * show network activity in the current UI.
     *@example {Ctrl + E} PH1
     */
    recordToDisplayNetworkActivity: 'Record network log ({PH1}) to display network activity.',
    /**
     *@description Text that is usually a hyperlink to more documentation
     */
    learnMore: 'Learn more',
    /**
     *@description Text to announce to screen readers that network data is available.
     */
    networkDataAvailable: 'Network Data Available',
    /**
     *@description Text in Network Log View of the Network panel
     *@example {3} PH1
     *@example {5} PH2
     */
    sSRequests: '{PH1} / {PH2} requests',
    /**
     *@description Message in the summary toolbar at the bottom of the Network log that shows the compressed size of the
     * resources transferred during a selected time frame over the compressed size of all resources transferred during
     * the whole network log.
     *@example {5 B} PH1
     *@example {10 B} PH2
     */
    sSTransferred: '{PH1} / {PH2} transferred',
    /**
     *@description Message in a tooltip that shows the compressed size of the resources transferred during a selected
     * time frame over the compressed size of all resources transferred during the whole network log.
     *@example {10} PH1
     *@example {15} PH2
     */
    sBSBTransferredOverNetwork: '{PH1} B / {PH2} B transferred over network',
    /**
     * @description Text in Network Log View of the Network panel. Appears when a particular network
     * resource is selected by the user. Shows how large the selected resource was (PH1) out of the
     * total size (PH2).
     * @example {40MB} PH1
     * @example {50MB} PH2
     */
    sSResources: '{PH1} / {PH2} resources',
    /**
     *@description Text in Network Log View of the Network panel
     *@example {40} PH1
     *@example {50} PH2
     */
    sBSBResourcesLoadedByThePage: '{PH1} B / {PH2} B resources loaded by the page',
    /**
     *@description Text in Network Log View of the Network panel
     *@example {6} PH1
     */
    sRequests: '{PH1} requests',
    /**
     *@description Message in the summary toolbar at the bottom of the Network log that shows the compressed size of
     * all resources transferred over network during a network activity log.
     *@example {4 B} PH1
     */
    sTransferred: '{PH1} transferred',
    /**
     *@description Message in a tooltip that shows the compressed size of all resources transferred over network during
     * a network activity log.
     *@example {4} PH1
     */
    sBTransferredOverNetwork: '{PH1} B transferred over network',
    /**
     *@description Text in Network Log View of the Network panel
     *@example {4} PH1
     */
    sResources: '{PH1} resources',
    /**
     *@description Text in Network Log View of the Network panel
     *@example {10} PH1
     */
    sBResourcesLoadedByThePage: '{PH1} B resources loaded by the page',
    /**
     *@description Text in Network Log View of the Network panel
     *@example {120ms} PH1
     */
    finishS: 'Finish: {PH1}',
    /**
     *@description Text in Network Log View of the Network panel
     *@example {3000ms} PH1
     */
    domcontentloadedS: 'DOMContentLoaded: {PH1}',
    /**
     *@description Text in Network Log View of the Network panel
     *@example {40ms} PH1
     */
    loadS: 'Load: {PH1}',
    /**
     *@description Text for copying
     */
    copy: 'Copy',
    /**
     *@description A context menu command in the Network panel, for copying the URL of the selected request to the clipboard.
     */
    copyURL: 'Copy URL',
    /**
     *@description Text in Network Log View of the Network panel
     */
    copyRequestHeaders: 'Copy request headers',
    /**
     *@description Text in Network Log View of the Network panel
     */
    copyResponseHeaders: 'Copy response headers',
    /**
     *@description Text in Network Log View of the Network panel
     */
    copyResponse: 'Copy response',
    /**
     *@description Text in Network Log View of the Network panel
     */
    copyStacktrace: 'Copy stack trace',
    /**
     * @description A context menu command in the Network panel, for copying to the clipboard.
     * PowerShell refers to the format the data will be copied as.
     */
    copyAsPowershell: 'Copy as `PowerShell`',
    /**
     *@description A context menu command in the Network panel, for copying to the clipboard. 'fetch'
     * refers to the format the data will be copied as, which is compatible with the fetch web API.
     */
    copyAsFetch: 'Copy as `fetch`',
    /**
     * @description Text in Network Log View of the Network panel. An action that copies a command to
     * the developer's clipboard. The command allows the developer to replay this specific network
     * request in Node.js, a desktop application/framework. 'Node.js fetch' is a noun phrase for the
     * type of request that will be copied.
     */
    copyAsNodejsFetch: 'Copy as `fetch` (`Node.js`)',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with cURL (a program, not
     *translatable).
     */
    copyAsCurlCmd: 'Copy as `cURL` (`cmd`)',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with a Bash script.
     */
    copyAsCurlBash: 'Copy as `cURL` (`bash`)',
    /**
     *@description A context menu command in the Network panel, for copying the URLs of all requestes to the clipboard.
     */
    copyAllURLs: 'Copy all URLs',
    /**
     *@description A context menu command in the Network panel, for copying the URLs of all requestes
     (after applying the Network filter) to the clipboard.
     */
    copyAllListedURLs: 'Copy all listed URLs',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with a PowerShell script to
     *represent all network requests.
     */
    copyAllAsPowershell: 'Copy all as `PowerShell`',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with a PowerShell script to
     *represent all network requests (after applying the Network filter).
     */
    copyAllListedAsPowershell: 'Copy all listed as `PowerShell`',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with a 'fetch' command (fetch
     *should not be translated) to represent all network requests.
     */
    copyAllAsFetch: 'Copy all as `fetch`',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with a 'fetch' command (fetch
     *should not be translated) to represent all network requests (after applying the Network filter).
     */
    copyAllListedAsFetch: 'Copy all listed as `fetch`',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with a Node.js 'fetch' command
     *(fetch and Node.js should not be translated) to represent all network requests.
     */
    copyAllAsNodejsFetch: 'Copy all as `fetch` (`Node.js`)',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with a Node.js 'fetch' command
     *(fetch and Node.js should not be translated) to represent all network requests (after applying
     *the Network filter).
     */
    copyAllListedAsNodejsFetch: 'Copy all listed as `fetch` (`Node.js`)',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with cURL (a program, not
     *translatable) to represent all network requests.
     */
    copyAllAsCurlCmd: 'Copy all as `cURL` (`cmd`)',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with cURL (a program, not
     *translatable) to represent all network requests (after applying the Network filter).
     */
    copyAllListedAsCurlCmd: 'Copy all listed as `cURL` (`cmd`)',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with a Bash script to represent
     *all network requests.
     */
    copyAllAsCurlBash: 'Copy all as `cURL` (`bash`)',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with a Bash script to represent
     *all network requests (after applying the Network filter).
     */
    copyAllListedAsCurlBash: 'Copy all listed as `cURL` (`bash`)',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with cURL (a program, not
     *translatable).
     */
    copyAsCurl: 'Copy as `cURL`',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with cURL (a program, not
     *translatable) to represent all network requests.
     */
    copyAllAsCurl: 'Copy all as `cURL`',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with cURL (a program, not
     *translatable) to represent all network requests (after applying the Network filter).
     */
    copyAllListedAsCurl: 'Copy all listed as `cURL`',
    /**
     * @description Text in Network Log View of the Network panel. An action that copies data to the
     * clipboard. It will copy the data in the HAR (not translatable) format. 'all' refers to every
     * network request that is currently shown.
     */
    copyAllAsHar: 'Copy all as `HAR`',
    /**
     * @description Text in Network Log View of the Network panel. An action that copies data to the
     * clipboard. It will copy the data in the HAR (not translatable) format. 'all' refers to every
     * network request that is currently shown (after applying the Network filter).
     */
    copyAllListedAsHar: 'Copy all listed as `HAR`',
    /**
     *@description A context menu item in the Network Log View of the Network panel
     */
    saveAllAsHarWithContent: 'Save all as `HAR` with content',
    /**
     *@description A context menu item in the Network Log View of the Network panel
     */
    clearBrowserCache: 'Clear browser cache',
    /**
     *@description A context menu item in the Network Log View of the Network panel
     */
    clearBrowserCookies: 'Clear browser cookies',
    /**
     *@description A context menu item in the Network Log View of the Network panel
     */
    blockRequestUrl: 'Block request URL',
    /**
     *@description A context menu item in the Network Log View of the Network panel
     *@example {example.com} PH1
     */
    unblockS: 'Unblock {PH1}',
    /**
     *@description A context menu item in the Network Log View of the Network panel
     */
    blockRequestDomain: 'Block request domain',
    /**
     *@description Text to replay an XHR request
     */
    replayXhr: 'Replay XHR',
    /**
     *@description Text in Network Log View of the Network panel
     */
    areYouSureYouWantToClearBrowser: 'Are you sure you want to clear browser cache?',
    /**
     *@description Text in Network Log View of the Network panel
     */
    areYouSureYouWantToClearBrowserCookies: 'Are you sure you want to clear browser cookies?',
    /**
     *@description A context menu item in the Network Log View of the Network panel
     * for creating a header override
     */
    overrideHeaders: 'Override headers',
    /**
     * @description Tooltip for the Show only/Hide requests dropdown of the filterbar
     */
    showOnlyHideRequests: 'Show only/hide requests',
    /**
     * @description Text for the Show only/Hide requests dropdown button of the filterbar
     */
    moreFilters: 'More filters',
    /**
     * @description Text for the Request types dropdown button tooltip
     * @example {Media, Images} PH1
     */
    showOnly: 'Show only {PH1}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/network/NetworkLogView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_14__.RenderCoordinator.RenderCoordinator.instance();
class NetworkLogView extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Widget.VBox) {
    networkInvertFilterSetting;
    networkHideDataURLSetting;
    networkHideChromeExtensions;
    networkShowBlockedCookiesOnlySetting;
    networkOnlyBlockedRequestsSetting;
    networkOnlyThirdPartySetting;
    networkResourceTypeFiltersSetting;
    rawRowHeight;
    progressBarContainer;
    networkLogLargeRowsSetting;
    rowHeightInternal;
    timeCalculatorInternal;
    durationCalculator;
    calculatorInternal;
    columnsInternal;
    staleRequests;
    mainRequestLoadTime;
    mainRequestDOMContentLoadedTime;
    filters;
    timeFilter;
    hoveredNodeInternal;
    recordingHint;
    highlightedNode;
    linkifierInternal;
    recording;
    needsRefresh;
    headerHeightInternal;
    groupLookups;
    activeGroupLookup;
    textFilterUI;
    invertFilterUI;
    dataURLFilterUI;
    moreFiltersDropDownUI;
    onlyBlockedResponseCookiesFilterUI;
    onlyBlockedRequestsUI;
    onlyThirdPartyFilterUI;
    hideChromeExtensionsUI;
    resourceCategoryFilterUI;
    filterParser;
    suggestionBuilder;
    dataGrid;
    summaryToolbarInternal;
    filterBar;
    textFilterSetting;
    constructor(filterBar, progressBarContainer, networkLogLargeRowsSetting) {
        super();
        this.setMinimumSize(50, 64);
        this.element.id = 'network-container';
        this.element.classList.add('no-node-selected');
        this.networkInvertFilterSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-invert-filter', false);
        this.networkHideDataURLSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-hide-data-url', false);
        this.networkHideChromeExtensions =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-hide-chrome-extensions', false);
        this.networkShowBlockedCookiesOnlySetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-show-blocked-cookies-only-setting', false);
        this.networkOnlyBlockedRequestsSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-only-blocked-requests', false);
        this.networkOnlyThirdPartySetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-only-third-party-setting', false);
        this.networkResourceTypeFiltersSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-resource-type-filters', {});
        this.rawRowHeight = 0;
        this.progressBarContainer = progressBarContainer;
        this.networkLogLargeRowsSetting = networkLogLargeRowsSetting;
        this.networkLogLargeRowsSetting.addChangeListener(updateRowHeight.bind(this), this);
        function updateRowHeight() {
            this.rawRowHeight = Boolean(this.networkLogLargeRowsSetting.get()) ? 41 : 21;
            this.rowHeightInternal = this.computeRowHeight();
        }
        this.rawRowHeight = 0;
        this.rowHeightInternal = 0;
        updateRowHeight.call(this);
        this.timeCalculatorInternal = new _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_24__.NetworkTransferTimeCalculator();
        this.durationCalculator = new _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_24__.NetworkTransferDurationCalculator();
        this.calculatorInternal = this.timeCalculatorInternal;
        this.columnsInternal = new _NetworkLogViewColumns_js__WEBPACK_IMPORTED_MODULE_23__.NetworkLogViewColumns(this, this.timeCalculatorInternal, this.durationCalculator, networkLogLargeRowsSetting);
        this.columnsInternal.show(this.element);
        this.staleRequests = new Set();
        this.mainRequestLoadTime = -1;
        this.mainRequestDOMContentLoadedTime = -1;
        this.filters = [];
        this.timeFilter = null;
        this.hoveredNodeInternal = null;
        this.recordingHint = null;
        this.highlightedNode = null;
        this.linkifierInternal = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_17__.Linkifier.Linkifier();
        this.recording = false;
        this.needsRefresh = false;
        this.headerHeightInternal = 0;
        this.groupLookups = new Map();
        this.groupLookups.set('Frame', new _NetworkFrameGrouper_js__WEBPACK_IMPORTED_MODULE_21__.NetworkFrameGrouper(this));
        this.activeGroupLookup = null;
        this.textFilterUI = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.FilterBar.TextFilterUI();
        this.textFilterUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */, this.filterChanged, this);
        filterBar.addFilter(this.textFilterUI);
        this.invertFilterUI = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.FilterBar.CheckboxFilterUI('invert-filter', i18nString(UIStrings.invertFilter), true, this.networkInvertFilterSetting, 'invert-filter');
        this.invertFilterUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */, this.filterChanged.bind(this), this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Tooltip.Tooltip.install(this.invertFilterUI.element(), i18nString(UIStrings.invertsFilter));
        filterBar.addFilter(this.invertFilterUI);
        filterBar.addDivider();
        const filterItems = Object.entries(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceCategories).map(([key, category]) => ({
            name: category.title(),
            label: () => category.shortTitle(),
            title: category.title(),
            jslogContext: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.toKebabCase(key),
        }));
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled("network-panel-filter-bar-redesign" /* Root.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN */)) {
            this.resourceCategoryFilterUI = new DropDownTypesUI(filterItems, this.networkResourceTypeFiltersSetting);
            this.resourceCategoryFilterUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */, this.filterChanged, this);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ARIAUtils.setLabel(this.resourceCategoryFilterUI.element(), i18nString(UIStrings.requestTypesToInclude));
            this.resourceCategoryFilterUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */, this.filterChanged.bind(this), this);
            filterBar.addFilter(this.resourceCategoryFilterUI);
            filterBar.addDivider();
            this.moreFiltersDropDownUI = new MoreFiltersDropDownUI();
            this.moreFiltersDropDownUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */, this.filterChanged, this);
            filterBar.addFilter(this.moreFiltersDropDownUI);
        }
        else {
            this.dataURLFilterUI = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.FilterBar.CheckboxFilterUI('hide-data-url', i18nString(UIStrings.hideDataUrls), true, this.networkHideDataURLSetting, 'hide-data-urls');
            this.dataURLFilterUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */, this.filterChanged.bind(this), this);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Tooltip.Tooltip.install(this.dataURLFilterUI.element(), i18nString(UIStrings.hidesDataAndBlobUrls));
            filterBar.addFilter(this.dataURLFilterUI);
            this.hideChromeExtensionsUI = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.FilterBar.CheckboxFilterUI('chrome-extension', i18nString(UIStrings.chromeExtensions), true, this.networkHideChromeExtensions, 'hide-extension-urls');
            this.hideChromeExtensionsUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */, this.filterChanged.bind(this), this);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Tooltip.Tooltip.install(this.hideChromeExtensionsUI.element(), i18nString(UIStrings.hideChromeExtension));
            filterBar.addFilter(this.hideChromeExtensionsUI);
            this.resourceCategoryFilterUI =
                new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.FilterBar.NamedBitSetFilterUI(filterItems, this.networkResourceTypeFiltersSetting);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ARIAUtils.setLabel(this.resourceCategoryFilterUI.element(), i18nString(UIStrings.requestTypesToInclude));
            this.resourceCategoryFilterUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */, this.filterChanged.bind(this), this);
            filterBar.addFilter(this.resourceCategoryFilterUI);
            this.onlyBlockedResponseCookiesFilterUI = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.FilterBar.CheckboxFilterUI('only-show-blocked-cookies', i18nString(UIStrings.hasBlockedCookies), true, this.networkShowBlockedCookiesOnlySetting, 'only-show-blocked-cookies');
            this.onlyBlockedResponseCookiesFilterUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */, this.filterChanged.bind(this), this);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Tooltip.Tooltip.install(this.onlyBlockedResponseCookiesFilterUI.element(), i18nString(UIStrings.onlyShowRequestsWithBlockedCookies));
            filterBar.addFilter(this.onlyBlockedResponseCookiesFilterUI);
            this.onlyBlockedRequestsUI = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.FilterBar.CheckboxFilterUI('only-show-blocked-requests', i18nString(UIStrings.blockedRequests), true, this.networkOnlyBlockedRequestsSetting, 'only-show-blocked-requests');
            this.onlyBlockedRequestsUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */, this.filterChanged.bind(this), this);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Tooltip.Tooltip.install(this.onlyBlockedRequestsUI.element(), i18nString(UIStrings.onlyShowBlockedRequests));
            filterBar.addFilter(this.onlyBlockedRequestsUI);
            this.onlyThirdPartyFilterUI = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.FilterBar.CheckboxFilterUI('only-show-third-party', i18nString(UIStrings.thirdParty), true, this.networkOnlyThirdPartySetting, 'only-show-third-party');
            this.onlyThirdPartyFilterUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */, this.filterChanged.bind(this), this);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Tooltip.Tooltip.install(this.onlyThirdPartyFilterUI.element(), i18nString(UIStrings.onlyShowThirdPartyRequests));
            filterBar.addFilter(this.onlyThirdPartyFilterUI);
        }
        this.filterParser = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_10__.TextUtils.FilterParser(searchKeys);
        this.suggestionBuilder =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.FilterSuggestionBuilder.FilterSuggestionBuilder(searchKeys, NetworkLogView.sortSearchValues);
        this.resetSuggestionBuilder();
        this.dataGrid = this.columnsInternal.dataGrid();
        this.setupDataGrid();
        this.columnsInternal.sortByCurrentColumn();
        filterBar.filterButton().addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.dataGrid.scheduleUpdate.bind(this.dataGrid, true /* isFromUser */));
        this.summaryToolbarInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Toolbar.Toolbar('network-summary-bar', this.element);
        this.summaryToolbarInternal.element.setAttribute('role', 'status');
        new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.DropTarget.DropTarget(this.element, [_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.DropTarget.Type.File], i18nString(UIStrings.dropHarFilesHere), this.handleDrop.bind(this));
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
            .moduleSetting('network-color-code-resource-types')
            .addChangeListener(this.invalidateAllItems.bind(this, false), this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager, this, { scoped: true });
        _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().addEventListener(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.Events.RequestAdded, this.onRequestUpdated, this);
        _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().addEventListener(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.Events.RequestUpdated, this.onRequestUpdated, this);
        _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().addEventListener(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.Events.RequestRemoved, this.onRequestRemoved, this);
        _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().addEventListener(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.Events.Reset, this.reset, this);
        this.updateGroupByFrame();
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
            .moduleSetting('network.group-by-frame')
            .addChangeListener(() => this.updateGroupByFrame());
        this.filterBar = filterBar;
        this.textFilterSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-text-filter', '');
        if (this.textFilterSetting.get()) {
            this.textFilterUI.setValue(this.textFilterSetting.get());
        }
    }
    getMoreFiltersDropdown() {
        return this.moreFiltersDropDownUI;
    }
    updateGroupByFrame() {
        const value = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network.group-by-frame').get();
        this.setGrouping(value ? 'Frame' : null);
    }
    static sortSearchValues(key, values) {
        if (key === _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Priority) {
            values.sort((a, b) => {
                const aPriority = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_16__.NetworkPriorities.uiLabelToNetworkPriority(a);
                const bPriority = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_16__.NetworkPriorities.uiLabelToNetworkPriority(b);
                return _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_16__.NetworkPriorities.networkPriorityWeight(aPriority) -
                    _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_16__.NetworkPriorities.networkPriorityWeight(bPriority);
            });
        }
        else {
            values.sort();
        }
    }
    static negativeFilter(filter, request) {
        return !filter(request);
    }
    static requestPathFilter(regex, request) {
        if (!regex) {
            return false;
        }
        return regex.test(request.path() + '/' + request.name());
    }
    static subdomains(domain) {
        const result = [domain];
        let indexOfPeriod = domain.indexOf('.');
        while (indexOfPeriod !== -1) {
            result.push('*' + domain.substring(indexOfPeriod));
            indexOfPeriod = domain.indexOf('.', indexOfPeriod + 1);
        }
        return result;
    }
    static createRequestDomainFilter(value) {
        const escapedPattern = value.split('*').map(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.escapeForRegExp).join('.*');
        return NetworkLogView.requestDomainFilter.bind(null, new RegExp('^' + escapedPattern + '$', 'i'));
    }
    static requestDomainFilter(regex, request) {
        return regex.test(request.domain);
    }
    static runningRequestFilter(request) {
        return !request.finished;
    }
    static fromCacheRequestFilter(request) {
        return request.cached();
    }
    static interceptedByServiceWorkerFilter(request) {
        return request.fetchedViaServiceWorker;
    }
    static initiatedByServiceWorkerFilter(request) {
        return request.initiatedByServiceWorker();
    }
    static requestResponseHeaderFilter(value, request) {
        return request.responseHeaderValue(value) !== undefined;
    }
    static requestResponseHeaderSetCookieFilter(value, request) {
        // Multiple Set-Cookie headers in the request are concatenated via space. Only
        // filter via `includes` instead of strict equality.
        return Boolean(request.responseHeaderValue('Set-Cookie')?.includes(value));
    }
    static requestMethodFilter(value, request) {
        return request.requestMethod === value;
    }
    static requestPriorityFilter(value, request) {
        return request.priority() === value;
    }
    static requestMimeTypeFilter(value, request) {
        return request.mimeType === value;
    }
    static requestMixedContentFilter(value, request) {
        if (value === "displayed" /* NetworkForward.UIFilter.MixedContentFilterValues.Displayed */) {
            return request.mixedContentType === "optionally-blockable" /* Protocol.Security.MixedContentType.OptionallyBlockable */;
        }
        if (value === "blocked" /* NetworkForward.UIFilter.MixedContentFilterValues.Blocked */) {
            return request.mixedContentType === "blockable" /* Protocol.Security.MixedContentType.Blockable */ && request.wasBlocked();
        }
        if (value === "block-overridden" /* NetworkForward.UIFilter.MixedContentFilterValues.BlockOverridden */) {
            return request.mixedContentType === "blockable" /* Protocol.Security.MixedContentType.Blockable */ && !request.wasBlocked();
        }
        if (value === "all" /* NetworkForward.UIFilter.MixedContentFilterValues.All */) {
            return request.mixedContentType !== "none" /* Protocol.Security.MixedContentType.None */;
        }
        return false;
    }
    static requestSchemeFilter(value, request) {
        return request.scheme === value;
    }
    static requestCookieDomainFilter(value, request) {
        return request.allCookiesIncludingBlockedOnes().some(cookie => cookie.domain() === value);
    }
    static requestCookieNameFilter(value, request) {
        return request.allCookiesIncludingBlockedOnes().some(cookie => cookie.name() === value);
    }
    static requestCookiePathFilter(value, request) {
        return request.allCookiesIncludingBlockedOnes().some(cookie => cookie.path() === value);
    }
    static requestCookieValueFilter(value, request) {
        return request.allCookiesIncludingBlockedOnes().some(cookie => cookie.value() === value);
    }
    static requestSetCookieDomainFilter(value, request) {
        return request.responseCookies.some(cookie => cookie.domain() === value);
    }
    static requestSetCookieNameFilter(value, request) {
        return request.responseCookies.some(cookie => cookie.name() === value);
    }
    static requestSetCookieValueFilter(value, request) {
        return request.responseCookies.some(cookie => cookie.value() === value);
    }
    static requestSizeLargerThanFilter(value, request) {
        return request.transferSize >= value;
    }
    static statusCodeFilter(value, request) {
        return (String(request.statusCode)) === value;
    }
    static hasOverridesFilter(value, request) {
        if (!value) {
            return false;
        }
        if (value === overrideFilter.no) {
            return request.overrideTypes.length === 0;
        }
        if (value === overrideFilter.yes) {
            return request.overrideTypes.length > 0;
        }
        if (value === overrideFilter.content) {
            return request.overrideTypes.includes('content');
        }
        if (value === overrideFilter.headers) {
            return request.overrideTypes.includes('headers');
        }
        return request.overrideTypes.join(',').includes(value);
    }
    static getHTTPRequestsFilter(request) {
        return request.parsedURL.isValid && (request.scheme in HTTPSchemas);
    }
    static resourceTypeFilter(value, request) {
        return request.resourceType().name() === value;
    }
    static requestUrlFilter(value, request) {
        const regex = new RegExp(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.escapeForRegExp(value), 'i');
        return regex.test(request.url());
    }
    static requestTimeFilter(windowStart, windowEnd, request) {
        if (request.issueTime() > windowEnd) {
            return false;
        }
        if (request.endTime !== -1 && request.endTime < windowStart) {
            return false;
        }
        return true;
    }
    static copyRequestHeaders(request) {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(request.requestHeadersText());
    }
    static copyResponseHeaders(request) {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(request.responseHeadersText);
    }
    static async copyResponse(request) {
        const contentData = await request.requestContentData();
        let content;
        if (_models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_10__.ContentData.ContentData.isError(contentData)) {
            content = '';
        }
        else if (!contentData.isTextContent) {
            content = contentData.asDataUrl() ?? '';
        }
        else {
            content = contentData.text;
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(content);
    }
    handleDrop(dataTransfer) {
        const items = dataTransfer.items;
        if (!items.length) {
            return;
        }
        const file = items[0].getAsFile();
        if (file) {
            void this.onLoadFromFile(file);
        }
    }
    async onLoadFromFile(file) {
        const outputStream = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.StringOutputStream.StringOutputStream();
        const reader = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.FileUtils.ChunkedFileReader(file, /* chunkSize */ 10000000);
        const success = await reader.read(outputStream);
        if (!success) {
            const error = reader.error();
            if (error) {
                this.harLoadFailed(error.message);
            }
            return;
        }
        let harRoot;
        try {
            // HARRoot and JSON.parse might throw.
            harRoot = new _models_har_har_js__WEBPACK_IMPORTED_MODULE_7__.HARFormat.HARRoot(JSON.parse(outputStream.data()));
        }
        catch (e) {
            this.harLoadFailed(e);
            return;
        }
        _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().importRequests(_models_har_har_js__WEBPACK_IMPORTED_MODULE_7__.Importer.Importer.requestsFromHARLog(harRoot.log));
    }
    harLoadFailed(message) {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error('Failed to load HAR file with following error: ' + message);
    }
    setGrouping(groupKey) {
        if (this.activeGroupLookup) {
            this.activeGroupLookup.reset();
        }
        const groupLookup = groupKey ? this.groupLookups.get(groupKey) || null : null;
        this.activeGroupLookup = groupLookup;
        this.invalidateAllItems();
    }
    computeRowHeight() {
        return this.rawRowHeight;
    }
    nodeForRequest(request) {
        return networkRequestToNode.get(request) || null;
    }
    headerHeight() {
        return this.headerHeightInternal;
    }
    setRecording(recording) {
        this.recording = recording;
        this.updateSummaryBar();
    }
    columns() {
        return this.columnsInternal;
    }
    summaryToolbar() {
        return this.summaryToolbarInternal;
    }
    modelAdded(networkManager) {
        // TODO(allada) Remove dependency on networkManager and instead use NetworkLog and PageLoad for needed data.
        const target = networkManager.target();
        if (target.outermostTarget() !== target) {
            return;
        }
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.ResourceTreeModel);
        if (resourceTreeModel) {
            resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.Events.Load, this.loadEventFired, this);
            resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.Events.DOMContentLoaded, this.domContentLoadedEventFired, this);
        }
        for (const request of _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().requests()) {
            if (this.isInScope(request)) {
                this.refreshRequest(request);
            }
        }
    }
    modelRemoved(networkManager) {
        const target = networkManager.target();
        if (target.outermostTarget() !== target) {
            return;
        }
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.ResourceTreeModel);
        if (resourceTreeModel) {
            resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.Events.Load, this.loadEventFired, this);
            resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.Events.DOMContentLoaded, this.domContentLoadedEventFired, this);
        }
        const preserveLog = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network-log.preserve-log').get();
        if (!preserveLog) {
            this.reset();
        }
    }
    linkifier() {
        return this.linkifierInternal;
    }
    setWindow(start, end) {
        if (!start && !end) {
            this.timeFilter = null;
            this.timeCalculatorInternal.setWindow(null);
        }
        else {
            this.timeFilter = NetworkLogView.requestTimeFilter.bind(null, start, end);
            this.timeCalculatorInternal.setWindow(new _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_24__.NetworkTimeBoundary(start, end));
        }
        this.filterRequests();
    }
    resetFocus() {
        this.dataGrid.element.focus();
    }
    resetSuggestionBuilder() {
        this.suggestionBuilder.clear();
        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Is, "running" /* NetworkForward.UIFilter.IsFilterType.Running */);
        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Is, "from-cache" /* NetworkForward.UIFilter.IsFilterType.FromCache */);
        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Is, "service-worker-intercepted" /* NetworkForward.UIFilter.IsFilterType.ServiceWorkerIntercepted */);
        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Is, "service-worker-initiated" /* NetworkForward.UIFilter.IsFilterType.ServiceWorkerInitiated */);
        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.LargerThan, '100');
        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.LargerThan, '10k');
        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.LargerThan, '1M');
        this.textFilterUI.setSuggestionProvider(this.suggestionBuilder.completions.bind(this.suggestionBuilder));
        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.HasOverrides, overrideFilter.yes);
        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.HasOverrides, overrideFilter.no);
        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.HasOverrides, overrideFilter.content);
        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.HasOverrides, overrideFilter.headers);
    }
    filterChanged() {
        this.removeAllNodeHighlights();
        this.parseFilterQuery(this.textFilterUI.value(), this.invertFilterUI.checked());
        this.filterRequests();
        this.textFilterSetting.set(this.textFilterUI.value());
        this.moreFiltersDropDownUI?.updateActiveFiltersCount();
        this.moreFiltersDropDownUI?.updateTooltip();
    }
    async resetFilter() {
        this.textFilterUI.clear();
    }
    showRecordingHint() {
        this.hideRecordingHint();
        this.recordingHint = this.element.createChild('div', 'network-status-pane fill');
        const hintText = this.recordingHint.createChild('div', 'recording-hint');
        if (this.recording) {
            let reloadShortcutNode = null;
            const reloadShortcut = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ShortcutRegistry.ShortcutRegistry.instance().shortcutsForAction('inspector-main.reload')[0];
            if (reloadShortcut) {
                reloadShortcutNode = this.recordingHint.createChild('b');
                reloadShortcutNode.textContent = reloadShortcut.title();
            }
            const recordingText = hintText.createChild('span');
            recordingText.textContent = i18nString(UIStrings.recordingNetworkActivity);
            if (reloadShortcutNode) {
                hintText.createChild('br');
                hintText.appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.performARequestOrHitSToRecordThe, { PH1: reloadShortcutNode }));
            }
        }
        else {
            const recordNode = hintText.createChild('b');
            recordNode.textContent =
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ShortcutRegistry.ShortcutRegistry.instance().shortcutTitleForAction('network.toggle-recording') || '';
            hintText.appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.recordToDisplayNetworkActivity, { PH1: recordNode }));
        }
        hintText.createChild('br');
        hintText.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.XLink.XLink.create('https://developer.chrome.com/docs/devtools/network/?utm_source=devtools&utm_campaign=2019Q1', i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more'));
        this.setHidden(true);
    }
    hideRecordingHint() {
        this.setHidden(false);
        if (this.recordingHint) {
            this.recordingHint.remove();
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ARIAUtils.alert(i18nString(UIStrings.networkDataAvailable));
        this.recordingHint = null;
    }
    setHidden(value) {
        this.columnsInternal.setHidden(value);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ARIAUtils.setHidden(this.summaryToolbarInternal.element, value);
    }
    elementsToRestoreScrollPositionsFor() {
        if (!this.dataGrid) // Not initialized yet.
         {
            return [];
        }
        return [this.dataGrid.scrollContainer];
    }
    columnExtensionResolved() {
        this.invalidateAllItems(true);
    }
    setupDataGrid() {
        this.dataGrid.setRowContextMenuCallback((contextMenu, node) => {
            const request = node.request();
            if (request) {
                this.handleContextMenuForRequest(contextMenu, request);
            }
        });
        this.dataGrid.setStickToBottom(true);
        this.dataGrid.setName('network-log');
        this.dataGrid.setResizeMethod("last" /* DataGrid.DataGrid.ResizeMethod.Last */);
        this.dataGrid.element.classList.add('network-log-grid');
        this.dataGrid.element.addEventListener('mousedown', this.dataGridMouseDown.bind(this), true);
        this.dataGrid.element.addEventListener('mousemove', this.dataGridMouseMove.bind(this), true);
        this.dataGrid.element.addEventListener('mouseleave', () => this.setHoveredNode(null), true);
        this.dataGrid.element.addEventListener('keydown', event => {
            if (event.key === 'ArrowRight' && this.dataGrid.selectedNode) {
                const initiatorLink = this.dataGrid.selectedNode.element().querySelector('button.devtools-link');
                if (initiatorLink) {
                    initiatorLink.focus();
                }
            }
            if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.isEnterOrSpaceKey(event)) {
                this.dispatchEventToListeners("RequestActivated" /* Events.RequestActivated */, { showPanel: true, takeFocus: true });
                event.consume(true);
            }
        });
        this.dataGrid.element.addEventListener('keyup', event => {
            if ((event.key === 'r' || event.key === 'R') && this.dataGrid.selectedNode) {
                const request = this.dataGrid.selectedNode.request();
                if (!request) {
                    return;
                }
                if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager.canReplayRequest(request)) {
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager.replayRequest(request);
                    void _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_19__.logKeyDown(this.dataGrid.selectedNode.element(), event, 'replay-xhr');
                }
            }
        });
        this.dataGrid.element.addEventListener('focus', this.onDataGridFocus.bind(this), true);
        this.dataGrid.element.addEventListener('blur', this.onDataGridBlur.bind(this), true);
        return this.dataGrid;
    }
    dataGridMouseMove(event) {
        const mouseEvent = event;
        const node = (this.dataGrid.dataGridNodeFromNode(mouseEvent.target));
        const highlightInitiatorChain = mouseEvent.shiftKey;
        this.setHoveredNode(node, highlightInitiatorChain);
    }
    hoveredNode() {
        return this.hoveredNodeInternal;
    }
    setHoveredNode(node, highlightInitiatorChain) {
        if (this.hoveredNodeInternal) {
            this.hoveredNodeInternal.setHovered(false, false);
        }
        this.hoveredNodeInternal = node;
        if (this.hoveredNodeInternal) {
            this.hoveredNodeInternal.setHovered(true, Boolean(highlightInitiatorChain));
        }
    }
    dataGridMouseDown(event) {
        const mouseEvent = event;
        if (!this.dataGrid.selectedNode && mouseEvent.button) {
            mouseEvent.consume();
        }
    }
    updateSummaryBar() {
        this.hideRecordingHint();
        let transferSize = 0;
        let resourceSize = 0;
        let selectedNodeNumber = 0;
        let selectedTransferSize = 0;
        let selectedResourceSize = 0;
        let baseTime = -1;
        let maxTime = -1;
        let nodeCount = 0;
        for (const request of _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().requests()) {
            const node = networkRequestToNode.get(request);
            if (!node) {
                continue;
            }
            nodeCount++;
            const requestTransferSize = request.transferSize;
            transferSize += requestTransferSize;
            const requestResourceSize = request.resourceSize;
            resourceSize += requestResourceSize;
            if (!filteredNetworkRequests.has(node)) {
                selectedNodeNumber++;
                selectedTransferSize += requestTransferSize;
                selectedResourceSize += requestResourceSize;
            }
            const networkManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager.forRequest(request);
            // TODO(allada) inspectedURL should be stored in PageLoad used instead of target so HAR requests can have an
            // inspected url.
            if (networkManager && request.url() === networkManager.target().inspectedURL() &&
                request.resourceType() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document &&
                networkManager.target().parentTarget()?.type() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Type.Frame) {
                // If the primary main frame's document was fetched from the prefetch cache,
                // we should use the issueTime (i.e. when the navigation request was about to start)
                // instead of startTime, which is when the prefetch network request started
                // (which is typically well before the navigation starts).
                baseTime = request.fromPrefetchCache() ? request.issueTime() : request.startTime;
            }
            if (request.endTime > maxTime) {
                maxTime = request.endTime;
            }
        }
        if (!nodeCount) {
            this.showRecordingHint();
            return;
        }
        this.summaryToolbarInternal.removeToolbarItems();
        const appendChunk = (chunk, title) => {
            const toolbarText = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Toolbar.ToolbarText(chunk);
            toolbarText.setTitle(title ? title : chunk);
            this.summaryToolbarInternal.appendToolbarItem(toolbarText);
            return toolbarText.element;
        };
        if (selectedNodeNumber !== nodeCount) {
            appendChunk(i18nString(UIStrings.sSRequests, { PH1: selectedNodeNumber, PH2: nodeCount }));
            this.summaryToolbarInternal.appendSeparator();
            appendChunk(i18nString(UIStrings.sSTransferred, {
                PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(selectedTransferSize),
                PH2: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(transferSize),
            }), i18nString(UIStrings.sBSBTransferredOverNetwork, { PH1: selectedTransferSize, PH2: transferSize }));
            this.summaryToolbarInternal.appendSeparator();
            appendChunk(i18nString(UIStrings.sSResources, {
                PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(selectedResourceSize),
                PH2: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(resourceSize),
            }), i18nString(UIStrings.sBSBResourcesLoadedByThePage, { PH1: selectedResourceSize, PH2: resourceSize }));
        }
        else {
            appendChunk(i18nString(UIStrings.sRequests, { PH1: nodeCount }));
            this.summaryToolbarInternal.appendSeparator();
            appendChunk(i18nString(UIStrings.sTransferred, { PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(transferSize) }), i18nString(UIStrings.sBTransferredOverNetwork, { PH1: transferSize }));
            this.summaryToolbarInternal.appendSeparator();
            appendChunk(i18nString(UIStrings.sResources, { PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(resourceSize) }), i18nString(UIStrings.sBResourcesLoadedByThePage, { PH1: resourceSize }));
        }
        if (baseTime !== -1 && maxTime !== -1) {
            this.summaryToolbarInternal.appendSeparator();
            appendChunk(i18nString(UIStrings.finishS, { PH1: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.TimeUtilities.secondsToString(maxTime - baseTime) }));
            if (this.mainRequestDOMContentLoadedTime !== -1 && this.mainRequestDOMContentLoadedTime > baseTime) {
                this.summaryToolbarInternal.appendSeparator();
                const domContentLoadedText = i18nString(UIStrings.domcontentloadedS, { PH1: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.TimeUtilities.secondsToString(this.mainRequestDOMContentLoadedTime - baseTime) });
                appendChunk(domContentLoadedText).style.color = `var(${NetworkLogView.getDCLEventColor()})`;
            }
            if (this.mainRequestLoadTime !== -1) {
                this.summaryToolbarInternal.appendSeparator();
                const loadText = i18nString(UIStrings.loadS, { PH1: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.TimeUtilities.secondsToString(this.mainRequestLoadTime - baseTime) });
                appendChunk(loadText).style.color = `var(${NetworkLogView.getLoadEventColor()})`;
            }
        }
    }
    scheduleRefresh() {
        if (this.needsRefresh) {
            return;
        }
        this.needsRefresh = true;
        if (this.isShowing()) {
            void coordinator.write('NetworkLogView.render', this.refresh.bind(this));
        }
    }
    addFilmStripFrames(times) {
        this.columnsInternal.addEventDividers(times, 'network-frame-divider');
    }
    selectFilmStripFrame(time) {
        this.columnsInternal.selectFilmStripFrame(time);
    }
    clearFilmStripFrame() {
        this.columnsInternal.clearFilmStripFrame();
    }
    refreshIfNeeded() {
        if (this.needsRefresh) {
            this.refresh();
        }
    }
    invalidateAllItems(deferUpdate) {
        this.staleRequests = new Set(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().requests().filter(this.isInScope));
        if (deferUpdate) {
            this.scheduleRefresh();
        }
        else {
            this.refresh();
        }
    }
    timeCalculator() {
        return this.timeCalculatorInternal;
    }
    calculator() {
        return this.calculatorInternal;
    }
    setCalculator(x) {
        if (!x || this.calculatorInternal === x) {
            return;
        }
        if (this.calculatorInternal !== x) {
            this.calculatorInternal = x;
            this.columnsInternal.setCalculator(this.calculatorInternal);
        }
        this.calculatorInternal.reset();
        if (this.calculatorInternal.startAtZero) {
            this.columnsInternal.hideEventDividers();
        }
        else {
            this.columnsInternal.showEventDividers();
        }
        this.invalidateAllItems();
    }
    loadEventFired(event) {
        if (!this.recording) {
            return;
        }
        const time = event.data.loadTime;
        if (time) {
            this.mainRequestLoadTime = time;
            this.columnsInternal.addEventDividers([time], 'network-load-divider');
        }
    }
    domContentLoadedEventFired(event) {
        if (!this.recording) {
            return;
        }
        const { data } = event;
        if (data) {
            this.mainRequestDOMContentLoadedTime = data;
            this.columnsInternal.addEventDividers([data], 'network-dcl-divider');
        }
    }
    wasShown() {
        this.refreshIfNeeded();
        this.registerCSSFiles([_networkLogView_css_js__WEBPACK_IMPORTED_MODULE_22__["default"]]);
        this.columnsInternal.wasShown();
    }
    willHide() {
        this.columnsInternal.willHide();
    }
    onResize() {
        this.rowHeightInternal = this.computeRowHeight();
    }
    flatNodesList() {
        const rootNode = this.dataGrid.rootNode();
        return rootNode.flatChildren();
    }
    onDataGridFocus() {
        if (this.dataGrid.element.matches(':focus-visible')) {
            this.element.classList.add('grid-focused');
        }
        this.updateNodeBackground();
    }
    onDataGridBlur() {
        this.element.classList.remove('grid-focused');
        this.updateNodeBackground();
    }
    updateNodeBackground() {
        if (this.dataGrid.selectedNode) {
            this.dataGrid.selectedNode.updateBackgroundColor();
        }
    }
    updateNodeSelectedClass(isSelected) {
        if (isSelected) {
            this.element.classList.remove('no-node-selected');
        }
        else {
            this.element.classList.add('no-node-selected');
        }
    }
    stylesChanged() {
        this.columnsInternal.scheduleRefresh();
    }
    removeNodeAndMaybeAncestors(node) {
        let parent = node.parent;
        if (!parent) {
            return;
        }
        parent.removeChild(node);
        while (parent && !parent.hasChildren() && parent.dataGrid && parent.dataGrid.rootNode() !== parent) {
            const grandparent = parent.parent;
            grandparent.removeChild(parent);
            parent = grandparent;
        }
    }
    refresh() {
        this.needsRefresh = false;
        this.removeAllNodeHighlights();
        this.timeCalculatorInternal.updateBoundariesForEventTime(this.mainRequestLoadTime);
        this.durationCalculator.updateBoundariesForEventTime(this.mainRequestLoadTime);
        this.timeCalculatorInternal.updateBoundariesForEventTime(this.mainRequestDOMContentLoadedTime);
        this.durationCalculator.updateBoundariesForEventTime(this.mainRequestDOMContentLoadedTime);
        const nodesToInsert = new Map();
        const nodesToRefresh = [];
        const staleNodes = new Set();
        // While creating nodes it may add more entries into staleRequests because redirect request nodes update the parent
        // node so we loop until we have no more stale requests.
        while (this.staleRequests.size) {
            const request = this.staleRequests.values().next().value;
            this.staleRequests.delete(request);
            let node = networkRequestToNode.get(request);
            if (!node) {
                node = this.createNodeForRequest(request);
            }
            staleNodes.add(node);
        }
        for (const node of staleNodes) {
            const request = node.request();
            const isFilteredOut = !this.applyFilter(request);
            if (isFilteredOut) {
                if (node === this.hoveredNodeInternal) {
                    this.setHoveredNode(null);
                }
                node.selected = false;
            }
            else {
                nodesToRefresh.push(node);
            }
            this.timeCalculatorInternal.updateBoundaries(request);
            this.durationCalculator.updateBoundaries(request);
            const newParent = this.parentNodeForInsert(node);
            const wasAlreadyFiltered = filteredNetworkRequests.has(node);
            if (wasAlreadyFiltered === isFilteredOut && node.parent === newParent) {
                continue;
            }
            if (isFilteredOut) {
                filteredNetworkRequests.add(node);
            }
            else {
                filteredNetworkRequests.delete(node);
            }
            const removeFromParent = node.parent && (isFilteredOut || node.parent !== newParent);
            if (removeFromParent) {
                this.removeNodeAndMaybeAncestors(node);
            }
            if (!newParent || isFilteredOut) {
                continue;
            }
            if (!newParent.dataGrid && !nodesToInsert.has(newParent)) {
                nodesToInsert.set(newParent, this.dataGrid.rootNode());
                nodesToRefresh.push(newParent);
            }
            nodesToInsert.set(node, newParent);
        }
        for (const node of nodesToInsert.keys()) {
            nodesToInsert.get(node).appendChild(node);
        }
        for (const node of nodesToRefresh) {
            node.refresh();
        }
        this.updateSummaryBar();
        if (nodesToInsert.size) {
            this.columnsInternal.sortByCurrentColumn();
        }
        this.dataGrid.updateInstantly();
        this.didRefreshForTest();
    }
    didRefreshForTest() {
    }
    parentNodeForInsert(node) {
        if (!this.activeGroupLookup) {
            return this.dataGrid.rootNode();
        }
        const groupNode = this.activeGroupLookup.groupNodeForRequest(node.request());
        if (!groupNode) {
            return this.dataGrid.rootNode();
        }
        return groupNode;
    }
    reset() {
        this.dispatchEventToListeners("RequestActivated" /* Events.RequestActivated */, { showPanel: false });
        this.setHoveredNode(null);
        this.columnsInternal.reset();
        this.timeFilter = null;
        this.calculatorInternal.reset();
        this.timeCalculatorInternal.setWindow(null);
        this.linkifierInternal.reset();
        if (this.activeGroupLookup) {
            this.activeGroupLookup.reset();
        }
        this.staleRequests.clear();
        this.resetSuggestionBuilder();
        this.mainRequestLoadTime = -1;
        this.mainRequestDOMContentLoadedTime = -1;
        this.dataGrid.rootNode().removeChildren();
        this.updateSummaryBar();
        this.dataGrid.setStickToBottom(true);
        this.scheduleRefresh();
    }
    // TODO(crbug.com/1477668)
    setTextFilterValue(filterString) {
        this.textFilterUI.setValue(filterString);
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled("network-panel-filter-bar-redesign" /* Root.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN */)) {
            this.networkHideDataURLSetting.set(false);
            this.networkShowBlockedCookiesOnlySetting.set(false);
            this.networkOnlyBlockedRequestsSetting.set(false);
            this.networkOnlyThirdPartySetting.set(false);
            this.networkHideChromeExtensions.set(false);
        }
        else {
            this.dataURLFilterUI?.setChecked(false);
            this.onlyBlockedResponseCookiesFilterUI?.setChecked(false);
            this.onlyBlockedRequestsUI?.setChecked(false);
            this.onlyThirdPartyFilterUI?.setChecked(false);
            this.hideChromeExtensionsUI?.setChecked(false);
        }
        this.resourceCategoryFilterUI.reset();
    }
    createNodeForRequest(request) {
        const node = new _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_20__.NetworkRequestNode(this, request);
        networkRequestToNode.set(request, node);
        filteredNetworkRequests.add(node);
        for (let redirect = request.redirectSource(); redirect; redirect = redirect.redirectSource()) {
            this.refreshRequest(redirect);
        }
        return node;
    }
    isInScope(request) {
        const networkManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager.forRequest(request);
        return !networkManager || _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().isInScope(networkManager);
    }
    onRequestUpdated(event) {
        const { request, preserveLog } = event.data;
        if (this.isInScope(request) || preserveLog) {
            this.refreshRequest(request);
        }
    }
    onRequestRemoved(event) {
        const { request } = event.data;
        this.staleRequests.delete(request);
        const node = networkRequestToNode.get(request);
        if (node) {
            this.removeNodeAndMaybeAncestors(node);
        }
    }
    refreshRequest(request) {
        NetworkLogView.subdomains(request.domain)
            .forEach(this.suggestionBuilder.addItem.bind(this.suggestionBuilder, _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Domain));
        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Method, request.requestMethod);
        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.MimeType, request.mimeType);
        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Scheme, String(request.scheme));
        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.StatusCode, String(request.statusCode));
        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.ResourceType, request.resourceType().name());
        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Url, request.securityOrigin());
        const priority = request.priority();
        if (priority) {
            this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Priority, _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_16__.NetworkPriorities.uiLabelForNetworkPriority(priority));
        }
        if (request.mixedContentType !== "none" /* Protocol.Security.MixedContentType.None */) {
            this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.MixedContent, "all" /* NetworkForward.UIFilter.MixedContentFilterValues.All */);
        }
        if (request.mixedContentType === "optionally-blockable" /* Protocol.Security.MixedContentType.OptionallyBlockable */) {
            this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.MixedContent, "displayed" /* NetworkForward.UIFilter.MixedContentFilterValues.Displayed */);
        }
        if (request.mixedContentType === "blockable" /* Protocol.Security.MixedContentType.Blockable */) {
            const suggestion = request.wasBlocked() ? "blocked" /* NetworkForward.UIFilter.MixedContentFilterValues.Blocked */ :
                "block-overridden" /* NetworkForward.UIFilter.MixedContentFilterValues.BlockOverridden */;
            this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.MixedContent, suggestion);
        }
        const responseHeaders = request.responseHeaders;
        for (const responseHeader of responseHeaders) {
            this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.HasResponseHeader, responseHeader.name);
            if (responseHeader.name === 'Set-Cookie') {
                this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.ResponseHeaderValueSetCookie);
            }
        }
        for (const cookie of request.responseCookies) {
            this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.SetCookieDomain, cookie.domain());
            this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.SetCookieName, cookie.name());
            this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.SetCookieValue, cookie.value());
        }
        for (const cookie of request.allCookiesIncludingBlockedOnes()) {
            this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.CookieDomain, cookie.domain());
            this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.CookieName, cookie.name());
            this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.CookiePath, cookie.path());
            this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.CookieValue, cookie.value());
        }
        this.staleRequests.add(request);
        this.scheduleRefresh();
    }
    rowHeight() {
        return this.rowHeightInternal;
    }
    switchViewMode(gridMode) {
        this.columnsInternal.switchViewMode(gridMode);
    }
    handleContextMenuForRequest(contextMenu, request) {
        contextMenu.appendApplicableItems(request);
        const filtered = this.filterBar.hasActiveFilter();
        const copyMenu = contextMenu.clipboardSection().appendSubMenuItem(i18nString(UIStrings.copy), false, 'copy');
        if (request) {
            copyMenu.defaultSection().appendItem(i18nString(UIStrings.copyURL), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText.bind(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, request.contentURL()), { jslogContext: 'copy-url' });
            copyMenu.footerSection().appendItem(filtered ? i18nString(UIStrings.copyAllListedURLs) : i18nString(UIStrings.copyAllURLs), this.copyAllURLs.bind(this), { jslogContext: 'copy-all-urls' });
            if (request.requestHeadersText()) {
                copyMenu.saveSection().appendItem(i18nString(UIStrings.copyRequestHeaders), NetworkLogView.copyRequestHeaders.bind(null, request), { jslogContext: 'copy-request-headers' });
            }
            if (request.responseHeadersText) {
                copyMenu.saveSection().appendItem(i18nString(UIStrings.copyResponseHeaders), NetworkLogView.copyResponseHeaders.bind(null, request), { jslogContext: 'copy-response-headers' });
            }
            if (request.finished) {
                copyMenu.saveSection().appendItem(i18nString(UIStrings.copyResponse), NetworkLogView.copyResponse.bind(null, request), { jslogContext: 'copy-response' });
            }
            const initiator = request.initiator();
            if (initiator) {
                const stack = initiator.stack;
                if (stack) {
                    // We proactively compute the stacktrace text, as we can't determine whether the stacktrace
                    // has any context solely based on the top frame. Sometimes, the top frame does not have
                    // any callFrames, but its parent frames do.
                    const stackTraceText = computeStackTraceText(stack);
                    if (stackTraceText !== '') {
                        copyMenu.saveSection().appendItem(i18nString(UIStrings.copyStacktrace), () => {
                            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(stackTraceText);
                        }, { jslogContext: 'copy-stacktrace' });
                    }
                }
            }
            const disableIfBlob = request.isBlobRequest();
            if (_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.isWin()) {
                copyMenu.defaultSection().appendItem(i18nString(UIStrings.copyAsCurlCmd), this.copyCurlCommand.bind(this, request, 'win'), { disabled: disableIfBlob, jslogContext: 'copy-as-curl-cmd' });
                copyMenu.defaultSection().appendItem(i18nString(UIStrings.copyAsCurlBash), this.copyCurlCommand.bind(this, request, 'unix'), { disabled: disableIfBlob, jslogContext: 'copy-as-curl-bash' });
            }
            else {
                copyMenu.defaultSection().appendItem(i18nString(UIStrings.copyAsCurl), this.copyCurlCommand.bind(this, request, 'unix'), { disabled: disableIfBlob, jslogContext: 'copy-as-curl' });
            }
            copyMenu.defaultSection().appendItem(i18nString(UIStrings.copyAsPowershell), this.copyPowerShellCommand.bind(this, request), { disabled: disableIfBlob, jslogContext: 'copy-as-powershell' });
            copyMenu.defaultSection().appendItem(i18nString(UIStrings.copyAsFetch), this.copyFetchCall.bind(this, request, 0 /* FetchStyle.Browser */), { disabled: disableIfBlob, jslogContext: 'copy-as-fetch' });
            copyMenu.defaultSection().appendItem(i18nString(UIStrings.copyAsNodejsFetch), this.copyFetchCall.bind(this, request, 1 /* FetchStyle.NodeJs */), { disabled: disableIfBlob, jslogContext: 'copy-as-nodejs-fetch' });
            if (_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.isWin()) {
                copyMenu.footerSection().appendItem(filtered ? i18nString(UIStrings.copyAllListedAsCurlCmd) : i18nString(UIStrings.copyAllAsCurlCmd), this.copyAllCurlCommand.bind(this, 'win'), { jslogContext: 'copy-all-as-curl-cmd' });
                copyMenu.footerSection().appendItem(filtered ? i18nString(UIStrings.copyAllListedAsCurlBash) : i18nString(UIStrings.copyAllAsCurlBash), this.copyAllCurlCommand.bind(this, 'unix'), { jslogContext: 'copy-all-as-curl-bash' });
            }
            else {
                copyMenu.footerSection().appendItem(filtered ? i18nString(UIStrings.copyAllListedAsCurl) : i18nString(UIStrings.copyAllAsCurl), this.copyAllCurlCommand.bind(this, 'unix'), { jslogContext: 'copy-all-as-curl' });
            }
            copyMenu.footerSection().appendItem(filtered ? i18nString(UIStrings.copyAllListedAsPowershell) : i18nString(UIStrings.copyAllAsPowershell), this.copyAllPowerShellCommand.bind(this), { jslogContext: 'copy-all-as-powershell' });
            copyMenu.footerSection().appendItem(filtered ? i18nString(UIStrings.copyAllListedAsFetch) : i18nString(UIStrings.copyAllAsFetch), this.copyAllFetchCall.bind(this, 0 /* FetchStyle.Browser */), { jslogContext: 'copy-all-as-fetch' });
            copyMenu.footerSection().appendItem(filtered ? i18nString(UIStrings.copyAllListedAsNodejsFetch) : i18nString(UIStrings.copyAllAsNodejsFetch), this.copyAllFetchCall.bind(this, 1 /* FetchStyle.NodeJs */), { jslogContext: 'copy-all-as-nodejs-fetch' });
        }
        copyMenu.footerSection().appendItem(filtered ? i18nString(UIStrings.copyAllListedAsHar) : i18nString(UIStrings.copyAllAsHar), this.copyAllAsHAR.bind(this), { jslogContext: 'copy-all-as-har' });
        contextMenu.saveSection().appendItem(i18nString(UIStrings.saveAllAsHarWithContent), this.exportAll.bind(this), { jslogContext: 'save-all-as-har-with-content' });
        contextMenu.overrideSection().appendItem(i18nString(UIStrings.overrideHeaders), this.#handleCreateResponseHeaderOverrideClick.bind(this, request), {
            disabled: _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_9__.NetworkPersistenceManager.NetworkPersistenceManager.isForbiddenNetworkUrl(request.url()),
            jslogContext: 'override-headers',
        });
        contextMenu.editSection().appendItem(i18nString(UIStrings.clearBrowserCache), this.clearBrowserCache.bind(this), { jslogContext: 'clear-browser-cache' });
        contextMenu.editSection().appendItem(i18nString(UIStrings.clearBrowserCookies), this.clearBrowserCookies.bind(this), { jslogContext: 'clear-browser-cookies' });
        if (request) {
            const maxBlockedURLLength = 20;
            const manager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.MultitargetNetworkManager.instance();
            let patterns = manager.blockedPatterns();
            function addBlockedURL(url) {
                patterns.push({ enabled: true, url: url });
                manager.setBlockedPatterns(patterns);
                manager.setBlockingEnabled(true);
                void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ViewManager.ViewManager.instance().showView('network.blocked-urls');
            }
            function removeBlockedURL(url) {
                patterns = patterns.filter(pattern => pattern.url !== url);
                manager.setBlockedPatterns(patterns);
                void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ViewManager.ViewManager.instance().showView('network.blocked-urls');
            }
            const urlWithoutScheme = request.parsedURL.urlWithoutScheme();
            if (urlWithoutScheme && !patterns.find(pattern => pattern.url === urlWithoutScheme)) {
                contextMenu.debugSection().appendItem(i18nString(UIStrings.blockRequestUrl), addBlockedURL.bind(null, urlWithoutScheme), { jslogContext: 'block-request-url' });
            }
            else if (urlWithoutScheme) {
                const croppedURL = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.trimMiddle(urlWithoutScheme, maxBlockedURLLength);
                contextMenu.debugSection().appendItem(i18nString(UIStrings.unblockS, { PH1: croppedURL }), removeBlockedURL.bind(null, urlWithoutScheme), { jslogContext: 'unblock' });
            }
            const domain = request.parsedURL.domain();
            if (domain && !patterns.find(pattern => pattern.url === domain)) {
                contextMenu.debugSection().appendItem(i18nString(UIStrings.blockRequestDomain), addBlockedURL.bind(null, domain), { jslogContext: 'block-request-domain' });
            }
            else if (domain) {
                const croppedDomain = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.trimMiddle(domain, maxBlockedURLLength);
                contextMenu.debugSection().appendItem(i18nString(UIStrings.unblockS, { PH1: croppedDomain }), removeBlockedURL.bind(null, domain), { jslogContext: 'unblock' });
            }
            if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager.canReplayRequest(request)) {
                contextMenu.debugSection().appendItem(i18nString(UIStrings.replayXhr), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager.replayRequest.bind(null, request), { jslogContext: 'replay-xhr' });
            }
        }
    }
    harRequests() {
        const requests = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().requests().filter(request => this.applyFilter(request));
        return requests.filter(NetworkLogView.getHTTPRequestsFilter).filter(request => {
            return request.finished ||
                (request.resourceType() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.WebSocket && request.responseReceivedTime);
        });
    }
    async copyAllAsHAR() {
        const harArchive = { log: await _models_har_har_js__WEBPACK_IMPORTED_MODULE_7__.Log.Log.build(this.harRequests()) };
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(JSON.stringify(harArchive, null, 2));
    }
    copyAllURLs() {
        const requests = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().requests().filter(request => this.applyFilter(request));
        const nonBlobRequests = this.filterOutBlobRequests(requests);
        const urls = nonBlobRequests.map(request => request.url());
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(urls.join('\n'));
    }
    async copyCurlCommand(request, platform) {
        const command = await NetworkLogView.generateCurlCommand(request, platform);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(command);
    }
    async copyAllCurlCommand(platform) {
        const requests = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().requests().filter(request => this.applyFilter(request));
        const commands = await this.generateAllCurlCommand(requests, platform);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(commands);
    }
    async copyFetchCall(request, style) {
        const command = await this.generateFetchCall(request, style);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(command);
    }
    async copyAllFetchCall(style) {
        const requests = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().requests().filter(request => this.applyFilter(request));
        const commands = await this.generateAllFetchCall(requests, style);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(commands);
    }
    async copyPowerShellCommand(request) {
        const command = await this.generatePowerShellCommand(request);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(command);
    }
    async copyAllPowerShellCommand() {
        const requests = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().requests().filter(request => this.applyFilter(request));
        const commands = await this.generateAllPowerShellCommand(requests);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(commands);
    }
    async exportAll() {
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().scopeTarget();
        if (!mainTarget) {
            return;
        }
        const url = mainTarget.inspectedURL();
        const parsedURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString(url);
        const filename = (parsedURL ? parsedURL.host : 'network-log');
        const stream = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.FileUtils.FileOutputStream();
        if (!await stream.open(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.concatenate(filename, '.har'))) {
            return;
        }
        const progressIndicator = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ProgressIndicator.ProgressIndicator();
        this.progressBarContainer.appendChild(progressIndicator.element);
        await _models_har_har_js__WEBPACK_IMPORTED_MODULE_7__.Writer.Writer.write(stream, this.harRequests(), progressIndicator);
        progressIndicator.done();
        void stream.close();
    }
    async #handleCreateResponseHeaderOverrideClick(request) {
        const requestLocation = _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIRequestLocation.UIRequestLocation.responseHeaderMatch(request, { name: '', value: '' });
        const networkPersistanceManager = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_9__.NetworkPersistenceManager.NetworkPersistenceManager.instance();
        if (networkPersistanceManager.project()) {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').set(true);
            await networkPersistanceManager.getOrCreateHeadersUISourceCodeFromUrl(request.url());
            await _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(requestLocation);
        }
        else { // If folder for local overrides has not been provided yet
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.InspectorView.InspectorView.instance().displaySelectOverrideFolderInfobar(async () => {
                await _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_12__.SourcesNavigator.OverridesNavigatorView.instance().setupNewWorkspace();
                await networkPersistanceManager.getOrCreateHeadersUISourceCodeFromUrl(request.url());
                await _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(requestLocation);
            });
        }
    }
    clearBrowserCache() {
        if (confirm(i18nString(UIStrings.areYouSureYouWantToClearBrowser))) {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.MultitargetNetworkManager.instance().clearBrowserCache();
        }
    }
    clearBrowserCookies() {
        if (confirm(i18nString(UIStrings.areYouSureYouWantToClearBrowserCookies))) {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.MultitargetNetworkManager.instance().clearBrowserCookies();
        }
    }
    removeAllHighlights() {
        this.removeAllNodeHighlights();
    }
    applyFilter(request) {
        if (this.timeFilter && !this.timeFilter(request)) {
            return false;
        }
        const categoryName = request.resourceType().category().title();
        if (!this.resourceCategoryFilterUI.accept(categoryName)) {
            return false;
        }
        const [hideDataURL, blockedCookies, blockedRequests, thirdParty, hideExtensionURL] = _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled("network-panel-filter-bar-redesign" /* Root.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN */) ?
            [
                this.networkHideDataURLSetting.get(),
                this.networkShowBlockedCookiesOnlySetting.get(),
                this.networkOnlyBlockedRequestsSetting.get(),
                this.networkOnlyThirdPartySetting.get(),
                this.networkHideChromeExtensions.get(),
            ] :
            [
                this.dataURLFilterUI?.checked(),
                this.onlyBlockedResponseCookiesFilterUI?.checked(),
                this.onlyBlockedRequestsUI?.checked(),
                this.onlyThirdPartyFilterUI?.checked(),
                this.hideChromeExtensionsUI?.checked(),
            ];
        if (hideDataURL && (request.parsedURL.isDataURL() || request.parsedURL.isBlobURL())) {
            return false;
        }
        if (blockedCookies && !request.blockedResponseCookies().length) {
            return false;
        }
        if (blockedRequests && !request.wasBlocked() && !request.corsErrorStatus()) {
            return false;
        }
        if (thirdParty && request.isSameSite()) {
            return false;
        }
        if (hideExtensionURL && request.scheme === 'chrome-extension') {
            return false;
        }
        for (let i = 0; i < this.filters.length; ++i) {
            if (!this.filters[i](request)) {
                return false;
            }
        }
        return true;
    }
    isValidUrl(url) {
        try {
            new URL(url);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    parseFilterQuery(query, invert) {
        // A query string can have multiple filters, some of them regular
        // expressions, some not. Each one of those filters can be negated with a
        // "-" prefix, including the regular expressions. The top-level `invert`
        // checkbox therefore inverts each one of those individual filters.
        const descriptors = this.filterParser.parse(query);
        this.filters = descriptors.map(descriptor => {
            const key = descriptor.key;
            const text = descriptor.text || '';
            const regex = descriptor.regex;
            let filter;
            if (key) {
                const defaultText = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.escapeForRegExp(key + ':' + text);
                filter = this.createSpecialFilter(key, text) ||
                    NetworkLogView.requestPathFilter.bind(null, new RegExp(defaultText, 'i'));
            }
            else if (descriptor.regex) {
                filter = NetworkLogView.requestPathFilter.bind(null, regex);
            }
            else if (this.isValidUrl(text)) {
                filter = NetworkLogView.requestUrlFilter.bind(null, text);
            }
            else {
                filter = NetworkLogView.requestPathFilter.bind(null, new RegExp(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.escapeForRegExp(text), 'i'));
            }
            if ((descriptor.negative && !invert) || (!descriptor.negative && invert)) {
                return NetworkLogView.negativeFilter.bind(null, filter);
            }
            return filter;
        });
    }
    createSpecialFilter(type, value) {
        switch (type) {
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Domain:
                return NetworkLogView.createRequestDomainFilter(value);
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.HasResponseHeader:
                return NetworkLogView.requestResponseHeaderFilter.bind(null, value);
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.ResponseHeaderValueSetCookie:
                return NetworkLogView.requestResponseHeaderSetCookieFilter.bind(null, value);
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Is:
                if (value.toLowerCase() === "running" /* NetworkForward.UIFilter.IsFilterType.Running */) {
                    return NetworkLogView.runningRequestFilter;
                }
                if (value.toLowerCase() === "from-cache" /* NetworkForward.UIFilter.IsFilterType.FromCache */) {
                    return NetworkLogView.fromCacheRequestFilter;
                }
                if (value.toLowerCase() === "service-worker-intercepted" /* NetworkForward.UIFilter.IsFilterType.ServiceWorkerIntercepted */) {
                    return NetworkLogView.interceptedByServiceWorkerFilter;
                }
                if (value.toLowerCase() === "service-worker-initiated" /* NetworkForward.UIFilter.IsFilterType.ServiceWorkerInitiated */) {
                    return NetworkLogView.initiatedByServiceWorkerFilter;
                }
                break;
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.LargerThan:
                return this.createSizeFilter(value.toLowerCase());
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Method:
                return NetworkLogView.requestMethodFilter.bind(null, value);
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.MimeType:
                return NetworkLogView.requestMimeTypeFilter.bind(null, value);
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.MixedContent:
                return NetworkLogView.requestMixedContentFilter.bind(null, value);
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Scheme:
                return NetworkLogView.requestSchemeFilter.bind(null, value);
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.SetCookieDomain:
                return NetworkLogView.requestSetCookieDomainFilter.bind(null, value);
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.SetCookieName:
                return NetworkLogView.requestSetCookieNameFilter.bind(null, value);
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.SetCookieValue:
                return NetworkLogView.requestSetCookieValueFilter.bind(null, value);
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.CookieDomain:
                return NetworkLogView.requestCookieDomainFilter.bind(null, value);
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.CookieName:
                return NetworkLogView.requestCookieNameFilter.bind(null, value);
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.CookiePath:
                return NetworkLogView.requestCookiePathFilter.bind(null, value);
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.CookieValue:
                return NetworkLogView.requestCookieValueFilter.bind(null, value);
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Priority:
                return NetworkLogView.requestPriorityFilter.bind(null, _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_16__.NetworkPriorities.uiLabelToNetworkPriority(value));
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.StatusCode:
                return NetworkLogView.statusCodeFilter.bind(null, value);
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.HasOverrides:
                return NetworkLogView.hasOverridesFilter.bind(null, value);
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.ResourceType:
                return NetworkLogView.resourceTypeFilter.bind(null, value);
            case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Url:
                return NetworkLogView.requestUrlFilter.bind(null, value);
        }
        return null;
    }
    createSizeFilter(value) {
        let multiplier = 1;
        if (value.endsWith('k')) {
            multiplier = 1000;
            value = value.substring(0, value.length - 1);
        }
        else if (value.endsWith('m')) {
            multiplier = 1000 * 1000;
            value = value.substring(0, value.length - 1);
        }
        const quantity = Number(value);
        if (isNaN(quantity)) {
            return null;
        }
        return NetworkLogView.requestSizeLargerThanFilter.bind(null, quantity * multiplier);
    }
    filterRequests() {
        this.removeAllHighlights();
        this.invalidateAllItems();
    }
    reveal(request) {
        this.removeAllNodeHighlights();
        const node = networkRequestToNode.get(request);
        if (!node || !node.dataGrid) {
            return null;
        }
        // Viewport datagrid nodes do not reveal if not in the root node
        // list of flatChildren. For children of grouped frame nodes:
        // reveal and expand parent to ensure child is revealable.
        if (node.parent && node.parent instanceof _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_20__.NetworkGroupNode) {
            node.parent.reveal();
            node.parent.expand();
        }
        node.reveal();
        return node;
    }
    revealAndHighlightRequest(request) {
        const node = this.reveal(request);
        if (node) {
            this.highlightNode(node);
        }
    }
    revealAndHighlightRequestWithId(requestId) {
        const request = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().requestByManagerAndId(requestId.manager, requestId.requestId);
        if (request) {
            this.revealAndHighlightRequest(request);
        }
    }
    selectRequest(request, options) {
        const defaultOptions = { clearFilter: true };
        const { clearFilter } = options || defaultOptions;
        if (clearFilter) {
            this.setTextFilterValue('');
        }
        const node = this.reveal(request);
        if (node) {
            node.select();
        }
    }
    removeAllNodeHighlights() {
        if (this.highlightedNode) {
            this.highlightedNode.element().classList.remove('highlighted-row');
            this.highlightedNode = null;
        }
    }
    highlightNode(node) {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.UIUtils.runCSSAnimationOnce(node.element(), 'highlighted-row');
        this.highlightedNode = node;
    }
    filterOutBlobRequests(requests) {
        return requests.filter(request => !request.isBlobRequest());
    }
    async generateFetchCall(request, style) {
        const ignoredHeaders = new Set([
            // Internal headers
            'method',
            'path',
            'scheme',
            'version',
            // Unsafe headers
            // Keep this list synchronized with src/net/http/http_util.cc
            'accept-charset',
            'accept-encoding',
            'access-control-request-headers',
            'access-control-request-method',
            'connection',
            'content-length',
            'cookie',
            'cookie2',
            'date',
            'dnt',
            'expect',
            'host',
            'keep-alive',
            'origin',
            'referer',
            'te',
            'trailer',
            'transfer-encoding',
            'upgrade',
            'via',
            // TODO(phistuck) - remove this once crbug.com/571722 is fixed.
            'user-agent',
        ]);
        const credentialHeaders = new Set(['cookie', 'authorization']);
        const url = JSON.stringify(request.url());
        const requestHeaders = request.requestHeaders();
        const headerData = requestHeaders.reduce((result, header) => {
            const name = header.name;
            if (!ignoredHeaders.has(name.toLowerCase()) && !name.includes(':')) {
                result.append(name, header.value);
            }
            return result;
        }, new Headers());
        const headers = {};
        for (const headerArray of headerData) {
            headers[headerArray[0]] = headerArray[1];
        }
        const credentials = request.includedRequestCookies().length ||
            requestHeaders.some(({ name }) => credentialHeaders.has(name.toLowerCase())) ?
            'include' :
            'omit';
        const referrerHeader = requestHeaders.find(({ name }) => name.toLowerCase() === 'referer');
        const referrer = referrerHeader ? referrerHeader.value : void 0;
        const referrerPolicy = request.referrerPolicy() || void 0;
        const requestBody = await request.requestFormData();
        const fetchOptions = {
            headers: Object.keys(headers).length ? headers : void 0,
            referrer,
            referrerPolicy,
            body: requestBody,
            method: request.requestMethod,
            mode: 'cors',
        };
        if (style === 1 /* FetchStyle.NodeJs */) {
            const cookieHeader = requestHeaders.find(header => header.name.toLowerCase() === 'cookie');
            const extraHeaders = {};
            // According to https://www.npmjs.com/package/node-fetch#class-request the
            // following properties are not implemented in Node.js.
            delete fetchOptions.mode;
            if (cookieHeader) {
                extraHeaders['cookie'] = cookieHeader.value;
            }
            if (referrer) {
                delete fetchOptions.referrer;
                extraHeaders['Referer'] = referrer;
            }
            if (referrer) {
                delete fetchOptions.referrerPolicy;
                extraHeaders['Referrer-Policy'] = referrerPolicy;
            }
            if (Object.keys(extraHeaders).length) {
                fetchOptions.headers = {
                    ...headers,
                    ...extraHeaders,
                };
            }
        }
        else {
            fetchOptions.credentials = credentials;
        }
        const options = JSON.stringify(fetchOptions, null, 2);
        return `fetch(${url}, ${options});`;
    }
    async generateAllFetchCall(requests, style) {
        const nonBlobRequests = this.filterOutBlobRequests(requests);
        const commands = await Promise.all(nonBlobRequests.map(request => this.generateFetchCall(request, style)));
        return commands.join(' ;\n');
    }
    static async generateCurlCommand(request, platform) {
        let command = [];
        // Most of these headers are derived from the URL and are automatically added by cURL.
        // The |Accept-Encoding| header is ignored to prevent decompression errors. crbug.com/1015321
        const ignoredHeaders = new Set(['accept-encoding', 'host', 'method', 'path', 'scheme', 'version', 'authority', 'protocol']);
        function escapeStringWin(str) {
            /* Only escape the " characters when necessary.
      
               Because cmd.exe parser and MS Crt arguments parsers use some of the
               same escape characters, they can interact with each other in
               horrible ways, the order of operations is critical.
      
               Replace \ with \\ first because it is an escape character for certain
               conditions in both parsers.
      
               Replace all " with \" to ensure the first parser does not remove it.
      
               Then escape all characters we are not sure about with ^ to ensure it
               gets to MS Crt parser safely.
      
               The % character is special because MS Crt parser will try and look for
               ENV variables and fill them in its place. We cannot escape them with %
               and cannot escape them with ^ (because it's cmd.exe's escape not MS Crt
               parser); So we can get cmd.exe parser to escape the character after it,
               if it is followed by a valid beginning character of an ENV variable.
               This ensures we do not try and double escape another ^ if it was placed
               by the previous replace.
      
               Lastly we replace new lines with ^ and TWO new lines because the first
               new line is there to enact the escape command the second is the character
               to escape (in this case new line).
              */
            const encapsChars = /[\r\n]|[^a-zA-Z0-9\s_\-:=+~'\/.',?;()*`&]/.test(str) ? '^"' : '"';
            return encapsChars +
                str.replace(/\\/g, '\\\\')
                    .replace(/"/g, '\\"')
                    .replace(/[^a-zA-Z0-9\s_\-:=+~'\/.',?;()*`&]/g, '^$&')
                    .replace(/%(?=[a-zA-Z0-9_])/g, '%^')
                    .replace(/\r?\n/g, '^\n\n') +
                encapsChars;
        }
        function escapeStringPosix(str) {
            function escapeCharacter(x) {
                const code = x.charCodeAt(0);
                let hexString = code.toString(16);
                // Zero pad to four digits to comply with ANSI-C Quoting:
                // http://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
                while (hexString.length < 4) {
                    hexString = '0' + hexString;
                }
                return '\\u' + hexString;
            }
            if (/[\0-\x1F\x7F-\x9F!]|\'/.test(str)) {
                // Use ANSI-C quoting syntax.
                return '$\'' +
                    str.replace(/\\/g, '\\\\')
                        .replace(/\'/g, '\\\'')
                        .replace(/\n/g, '\\n')
                        .replace(/\r/g, '\\r')
                        .replace(/[\0-\x1F\x7F-\x9F!]/g, escapeCharacter) +
                    '\'';
            }
            // Use single quote syntax.
            return '\'' + str + '\'';
        }
        // cURL command expected to run on the same platform that DevTools run
        // (it may be different from the inspected page platform).
        const escapeString = platform === 'win' ? escapeStringWin : escapeStringPosix;
        command.push(escapeString(request.url()).replace(/[[{}\]]/g, '\\$&'));
        let inferredMethod = 'GET';
        const data = [];
        const formData = await request.requestFormData();
        if (formData) {
            // Note that formData is not necessarily urlencoded because it might for example
            // come from a fetch request made with an explicitly unencoded body.
            data.push('--data-raw ' + escapeString(formData));
            ignoredHeaders.add('content-length');
            inferredMethod = 'POST';
        }
        if (request.requestMethod !== inferredMethod) {
            command.push('-X ' + escapeString(request.requestMethod));
        }
        const requestHeaders = request.requestHeaders();
        for (let i = 0; i < requestHeaders.length; i++) {
            const header = requestHeaders[i];
            const name = header.name.replace(/^:/, ''); // Translate SPDY v3 headers to HTTP headers.
            if (ignoredHeaders.has(name.toLowerCase())) {
                continue;
            }
            if (header.value.trim()) {
                command.push('-H ' + escapeString(name + ': ' + header.value));
            }
            else {
                // A header passed with -H with no value or only whitespace as its
                // value tells curl to not set the header at all. To post an empty
                // header, you have to terminate it with a semicolon.
                command.push('-H ' + escapeString(name + ';'));
            }
        }
        command = command.concat(data);
        if (request.securityState() === "insecure" /* Protocol.Security.SecurityState.Insecure */) {
            command.push('--insecure');
        }
        return 'curl ' + command.join(command.length >= 3 ? (platform === 'win' ? ' ^\n  ' : ' \\\n  ') : ' ');
    }
    async generateAllCurlCommand(requests, platform) {
        const nonBlobRequests = this.filterOutBlobRequests(requests);
        const commands = await Promise.all(nonBlobRequests.map(request => NetworkLogView.generateCurlCommand(request, platform)));
        if (platform === 'win') {
            return commands.join(' &\r\n');
        }
        return commands.join(' ;\n');
    }
    async generatePowerShellCommand(request) {
        const command = [];
        const ignoredHeaders = new Set([
            'host',
            'connection',
            'proxy-connection',
            'content-length',
            'expect',
            'range',
            'content-type',
            'user-agent',
            'cookie',
        ]);
        function escapeString(str) {
            return '"' +
                str.replace(/[`\$"]/g, '`$&').replace(/[^\x20-\x7E]/g, char => '$([char]' + char.charCodeAt(0) + ')') + '"';
        }
        // Generate a WebRequestSession object with the UserAgent and Cookie header values.
        // This is used to pass the user-agent and cookie headers to Invoke-WebRequest because the Invoke-WebRequest
        // command does not allow setting these headers through the -Headers parameter. See docs at:
        // https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/invoke-webrequest?view=powershell-7.1#parameters
        function generatePowerShellSession(request) {
            const requestHeaders = request.requestHeaders();
            const props = [];
            const userAgentHeader = requestHeaders.find(({ name }) => name.toLowerCase() === 'user-agent');
            if (userAgentHeader) {
                props.push(`$session.UserAgent = ${escapeString(userAgentHeader.value)}`);
            }
            for (const includedCookie of request.includedRequestCookies()) {
                const name = escapeString(includedCookie.cookie.name());
                const value = escapeString(includedCookie.cookie.value());
                const domain = escapeString(includedCookie.cookie.domain());
                props.push(`$session.Cookies.Add((New-Object System.Net.Cookie(${name}, ${value}, "/", ${domain})))`);
            }
            if (props.length) {
                return '$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession\n' + props.join('\n') + '\n';
            }
            return null;
        }
        command.push('-Uri ' + escapeString(request.url()));
        if (request.requestMethod !== 'GET') {
            command.push('-Method ' + escapeString(request.requestMethod));
        }
        const session = generatePowerShellSession(request);
        if (session) {
            command.push('-WebSession $session');
        }
        const requestHeaders = request.requestHeaders();
        const headerNameValuePairs = [];
        for (const header of requestHeaders) {
            const name = header.name.replace(/^:/, ''); // Translate h2 headers to HTTP headers.
            if (ignoredHeaders.has(name.toLowerCase())) {
                continue;
            }
            headerNameValuePairs.push(escapeString(name) + '=' + escapeString(header.value));
        }
        if (headerNameValuePairs.length) {
            command.push('-Headers @{\n' + headerNameValuePairs.join('\n  ') + '\n}');
        }
        const contentTypeHeader = requestHeaders.find(({ name }) => name.toLowerCase() === 'content-type');
        if (contentTypeHeader) {
            command.push('-ContentType ' + escapeString(contentTypeHeader.value));
        }
        const formData = await request.requestFormData();
        if (formData) {
            const body = escapeString(formData);
            if (/[^\x20-\x7E]/.test(formData)) {
                command.push('-Body ([System.Text.Encoding]::UTF8.GetBytes(' + body + '))');
            }
            else {
                command.push('-Body ' + body);
            }
        }
        // The -UseBasicParsing parameter prevents Invoke-WebRequest from using the IE engine for parsing. Basic
        // parsing is the default behavior in PowerShell 6.0.0+ and the parameter is included here for backwards
        // compatibility only.
        const prelude = session || '';
        return prelude + 'Invoke-WebRequest -UseBasicParsing ' + command.join(command.length >= 3 ? ' `\n' : ' ');
    }
    async generateAllPowerShellCommand(requests) {
        const nonBlobRequests = this.filterOutBlobRequests(requests);
        const commands = await Promise.all(nonBlobRequests.map(request => this.generatePowerShellCommand(request)));
        return commands.join(';\r\n');
    }
    static getDCLEventColor() {
        return '--sys-color-token-attribute-value';
    }
    static getLoadEventColor() {
        return '--sys-color-token-property-special';
    }
}
function computeStackTraceText(stackTrace) {
    let stackTraceText = '';
    for (const frame of stackTrace.callFrames) {
        const functionName = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.UIUtils.beautifyFunctionName(frame.functionName);
        stackTraceText += `${functionName} @ ${frame.url}:${frame.lineNumber + 1}\n`;
    }
    if (stackTrace.parent) {
        stackTraceText += computeStackTraceText(stackTrace.parent);
    }
    return stackTraceText;
}
const filteredNetworkRequests = new WeakSet();
const networkRequestToNode = new WeakMap();
function isRequestFilteredOut(request) {
    return filteredNetworkRequests.has(request);
}
const HTTPSchemas = {
    'http': true,
    'https': true,
    'ws': true,
    'wss': true,
};
const searchKeys = Object.values(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType);
const overrideFilter = {
    yes: 'yes',
    no: 'no',
    content: 'content',
    headers: 'headers',
};
class DropDownTypesUI extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    filterElement;
    dropDownButton;
    displayedTypes;
    setting;
    items;
    contextMenu;
    selectedTypesCount;
    typesCountAdorner;
    hasChanged = false;
    constructor(items, setting) {
        super();
        this.items = items;
        this.filterElement = document.createElement('div');
        this.filterElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_19__.dropDown('request-types').track({ click: true })}`);
        this.typesCountAdorner = new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_13__.Adorner.Adorner();
        this.selectedTypesCount = document.createElement('span');
        this.typesCountAdorner.data = {
            name: 'countWrapper',
            content: this.selectedTypesCount,
        };
        this.typesCountAdorner.classList.add('active-filters-count');
        this.dropDownButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Toolbar.ToolbarCombobox(i18nString(UIStrings.requestTypesTooltip));
        this.dropDownButton.setAdorner(this.typesCountAdorner);
        this.dropDownButton.setText(i18nString(UIStrings.requestTypes));
        this.filterElement.appendChild(this.dropDownButton.element);
        this.dropDownButton.element.classList.add('dropdown-filterbar');
        this.dropDownButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.showContextMenu.bind(this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ARIAUtils.markAsMenuButton(this.dropDownButton.element);
        this.displayedTypes = new Set();
        this.setting = setting;
        setting.addChangeListener(this.settingChanged.bind(this));
        this.setting.addChangeListener(this.filterChanged.bind(this));
        this.settingChanged();
    }
    discard() {
        this.contextMenu?.discard();
    }
    emitUMA() {
        if (this.hasChanged) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.resourceTypeFilterNumberOfSelectedChanged(this.displayedTypes.size);
            for (const displayedType of this.displayedTypes) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.resourceTypeFilterItemSelected(displayedType);
            }
        }
    }
    showContextMenu(event) {
        const mouseEvent = event.data;
        this.hasChanged = false;
        this.contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ContextMenu.ContextMenu(mouseEvent, {
            useSoftMenu: true,
            keepOpen: true,
            x: this.dropDownButton.element.getBoundingClientRect().left,
            y: this.dropDownButton.element.getBoundingClientRect().top +
                this.dropDownButton.element.offsetHeight,
            onSoftMenuClosed: this.emitUMA.bind(this),
        });
        this.addRequestType(this.contextMenu, DropDownTypesUI.ALL_TYPES, i18nString(UIStrings.allStrings));
        this.contextMenu.defaultSection().appendSeparator();
        for (const item of this.items) {
            this.addRequestType(this.contextMenu, item.name, item.name);
        }
        this.update();
        void this.contextMenu.show();
    }
    addRequestType(contextMenu, name, label) {
        const jslogContext = name.toLowerCase().replace(/\s/g, '-');
        contextMenu.defaultSection().appendCheckboxItem(label, () => {
            this.setting.get()[name] = !this.setting.get()[name];
            this.toggleTypeFilter(name);
        }, { checked: this.setting.get()[name], jslogContext });
    }
    toggleTypeFilter(typeName) {
        if (typeName !== DropDownTypesUI.ALL_TYPES) {
            this.displayedTypes.delete(DropDownTypesUI.ALL_TYPES);
        }
        else {
            this.displayedTypes = new Set();
        }
        if (this.displayedTypes.has(typeName)) {
            this.displayedTypes.delete(typeName);
        }
        else {
            this.displayedTypes.add(typeName);
        }
        if (this.displayedTypes.size === 0) {
            this.displayedTypes.add(DropDownTypesUI.ALL_TYPES);
        }
        // Settings do not support `Sets` so convert it back to the Map-like object.
        const updatedSetting = {};
        for (const type of this.displayedTypes) {
            updatedSetting[type] = true;
        }
        this.setting.set(updatedSetting);
        // For the feature of keeping the dropdown open while choosing its options:
        // this code provides the dinamic changes of the checkboxes' state in this dropdown
        const menuItems = this.contextMenu?.getItems() || [];
        for (const i of menuItems) {
            if (i.label) {
                this.contextMenu?.setChecked(i, this.displayedTypes.has(i.label));
            }
        }
        this.contextMenu?.setChecked(menuItems[0], this.displayedTypes.has('all'));
    }
    filterChanged() {
        this.dispatchEventToListeners("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */);
    }
    settingChanged() {
        this.hasChanged = true;
        this.displayedTypes = new Set();
        for (const s in this.setting.get()) {
            this.displayedTypes.add(s);
        }
        this.update();
    }
    update() {
        if (this.displayedTypes.size === 0 || this.displayedTypes.has(DropDownTypesUI.ALL_TYPES)) {
            this.displayedTypes = new Set();
            this.displayedTypes.add(DropDownTypesUI.ALL_TYPES);
        }
        this.updateSelectedTypesCount();
        this.updateLabel();
        this.updateTooltip();
    }
    updateSelectedTypesCount() {
        if (!this.displayedTypes.has(DropDownTypesUI.ALL_TYPES)) {
            this.selectedTypesCount.textContent = this.displayedTypes.size.toString();
            this.typesCountAdorner.classList.remove('hidden');
        }
        else {
            this.typesCountAdorner.classList.add('hidden');
        }
    }
    updateLabel() {
        if (this.displayedTypes.has(DropDownTypesUI.ALL_TYPES)) {
            this.dropDownButton.setText(i18nString(UIStrings.requestTypes));
            return;
        }
        let newLabel;
        if (this.displayedTypes.size === 1) {
            const type = this.displayedTypes.values().next().value;
            newLabel = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceCategory.categoryByTitle(type)?.shortTitle() || '';
        }
        else {
            // show up to two last selected types
            const twoLastSelected = [...this.displayedTypes].slice(-2).reverse();
            const shortNames = twoLastSelected.map(type => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceCategory.categoryByTitle(type)?.shortTitle() || '');
            const valuesToDisplay = { PH1: shortNames[0], PH2: shortNames[1] };
            newLabel = this.displayedTypes.size === 2 ? i18nString(UIStrings.twoTypesSelected, valuesToDisplay) :
                i18nString(UIStrings.overTwoTypesSelected, valuesToDisplay);
        }
        this.dropDownButton.setText(newLabel);
    }
    updateTooltip() {
        let tooltipText = i18nString(UIStrings.requestTypesTooltip);
        if (!this.displayedTypes.has(DropDownTypesUI.ALL_TYPES)) {
            // reverse the order to match the button label
            const selectedTypes = [...this.displayedTypes].reverse();
            const localized = selectedTypes.map(type => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceCategory.categoryByTitle(type)?.title() || '')
                .join(', ');
            tooltipText = i18nString(UIStrings.showOnly, { PH1: localized });
        }
        this.dropDownButton.setTitle(tooltipText);
    }
    isActive() {
        return !this.displayedTypes.has(DropDownTypesUI.ALL_TYPES);
    }
    element() {
        return this.filterElement;
    }
    reset() {
        this.toggleTypeFilter(DropDownTypesUI.ALL_TYPES);
    }
    accept(typeName) {
        return this.displayedTypes.has(DropDownTypesUI.ALL_TYPES) || this.displayedTypes.has(typeName);
    }
    static ALL_TYPES = 'all';
}
class MoreFiltersDropDownUI extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    filterElement;
    dropDownButton;
    networkHideDataURLSetting;
    networkHideChromeExtensionsSetting;
    networkShowBlockedCookiesOnlySetting;
    networkOnlyBlockedRequestsSetting;
    networkOnlyThirdPartySetting;
    contextMenu;
    activeFiltersCount;
    activeFiltersCountAdorner;
    hasChanged = false;
    constructor() {
        super();
        this.networkHideDataURLSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-hide-data-url', false);
        this.networkHideChromeExtensionsSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-hide-chrome-extensions', false);
        this.networkShowBlockedCookiesOnlySetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-show-blocked-cookies-only-setting', false);
        this.networkOnlyBlockedRequestsSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-only-blocked-requests', false);
        this.networkOnlyThirdPartySetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-only-third-party-setting', false);
        this.filterElement = document.createElement('div');
        this.filterElement.setAttribute('aria-label', 'Show only/hide requests dropdown');
        this.filterElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_19__.dropDown('more-filters').track({ click: true })}`);
        this.activeFiltersCountAdorner = new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_13__.Adorner.Adorner();
        this.activeFiltersCount = document.createElement('span');
        this.activeFiltersCountAdorner.data = {
            name: 'countWrapper',
            content: this.activeFiltersCount,
        };
        this.activeFiltersCountAdorner.classList.add('active-filters-count');
        this.updateActiveFiltersCount();
        this.dropDownButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Toolbar.ToolbarCombobox(i18nString(UIStrings.showOnlyHideRequests));
        this.dropDownButton.setText(i18nString(UIStrings.moreFilters));
        this.dropDownButton.setAdorner(this.activeFiltersCountAdorner);
        this.filterElement.appendChild(this.dropDownButton.element);
        this.dropDownButton.element.classList.add('dropdown-filterbar');
        this.dropDownButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.showMoreFiltersContextMenu.bind(this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ARIAUtils.markAsMenuButton(this.dropDownButton.element);
        this.updateTooltip();
    }
    emitUMA() {
        if (this.hasChanged) {
            const selectedFilters = this.selectedFilters();
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.networkPanelMoreFiltersNumberOfSelectedChanged(selectedFilters.length);
            for (const selectedFilter of selectedFilters) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.networkPanelMoreFiltersItemSelected(selectedFilter);
            }
        }
    }
    #onSettingChanged() {
        this.hasChanged = true;
        this.dispatchEventToListeners("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */);
    }
    showMoreFiltersContextMenu(event) {
        const mouseEvent = event.data;
        this.hasChanged = false;
        this.networkHideDataURLSetting.addChangeListener(this.#onSettingChanged.bind(this));
        this.networkHideChromeExtensionsSetting.addChangeListener(this.#onSettingChanged.bind(this));
        this.networkShowBlockedCookiesOnlySetting.addChangeListener(this.#onSettingChanged.bind(this));
        this.networkOnlyBlockedRequestsSetting.addChangeListener(this.#onSettingChanged.bind(this));
        this.networkOnlyThirdPartySetting.addChangeListener(this.#onSettingChanged.bind(this));
        this.contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ContextMenu.ContextMenu(mouseEvent, {
            useSoftMenu: true,
            keepOpen: true,
            x: this.dropDownButton.element.getBoundingClientRect().left,
            y: this.dropDownButton.element.getBoundingClientRect().top +
                this.dropDownButton.element.offsetHeight,
            onSoftMenuClosed: this.emitUMA.bind(this),
        });
        this.contextMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.hideDataUrls), () => this.networkHideDataURLSetting.set(!this.networkHideDataURLSetting.get()), {
            checked: this.networkHideDataURLSetting.get(),
            tooltip: i18nString(UIStrings.hidesDataAndBlobUrls),
            jslogContext: 'hide-data-urls',
        });
        this.contextMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.chromeExtensions), () => this.networkHideChromeExtensionsSetting.set(!this.networkHideChromeExtensionsSetting.get()), {
            checked: this.networkHideChromeExtensionsSetting.get(),
            tooltip: i18nString(UIStrings.hideChromeExtension),
            jslogContext: 'hide-extension-urls',
        });
        this.contextMenu.defaultSection().appendSeparator();
        this.contextMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.hasBlockedCookies), () => this.networkShowBlockedCookiesOnlySetting.set(!this.networkShowBlockedCookiesOnlySetting.get()), {
            checked: this.networkShowBlockedCookiesOnlySetting.get(),
            tooltip: i18nString(UIStrings.onlyShowRequestsWithBlockedCookies),
            jslogContext: 'only-blocked-response-cookies',
        });
        this.contextMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.blockedRequests), () => this.networkOnlyBlockedRequestsSetting.set(!this.networkOnlyBlockedRequestsSetting.get()), {
            checked: this.networkOnlyBlockedRequestsSetting.get(),
            tooltip: i18nString(UIStrings.onlyShowBlockedRequests),
            jslogContext: 'only-blocked-requests',
        });
        this.contextMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.thirdParty), () => this.networkOnlyThirdPartySetting.set(!this.networkOnlyThirdPartySetting.get()), {
            checked: this.networkOnlyThirdPartySetting.get(),
            tooltip: i18nString(UIStrings.onlyShowThirdPartyRequests),
            jslogContext: 'only-3rd-party-requests',
        });
        void this.contextMenu.show();
    }
    selectedFilters() {
        const filters = [
            ...this.networkHideDataURLSetting.get() ? [i18nString(UIStrings.hideDataUrls)] : [],
            ...this.networkHideChromeExtensionsSetting.get() ? [i18nString(UIStrings.chromeExtensions)] : [],
            ...this.networkShowBlockedCookiesOnlySetting.get() ? [i18nString(UIStrings.hasBlockedCookies)] : [],
            ...this.networkOnlyBlockedRequestsSetting.get() ? [i18nString(UIStrings.blockedRequests)] : [],
            ...this.networkOnlyThirdPartySetting.get() ? [i18nString(UIStrings.thirdParty)] : [],
        ];
        return filters;
    }
    updateActiveFiltersCount() {
        const count = this.selectedFilters().length;
        this.activeFiltersCount.textContent = count.toString();
        count ? this.activeFiltersCountAdorner.classList.remove('hidden') :
            this.activeFiltersCountAdorner.classList.add('hidden');
    }
    updateTooltip() {
        if (this.selectedFilters().length) {
            this.dropDownButton.setTitle(this.selectedFilters().join(', '));
        }
        else {
            this.dropDownButton.setTitle(UIStrings.showOnlyHideRequests);
        }
    }
    discard() {
        if (this.contextMenu) {
            this.contextMenu.discard();
        }
    }
    isActive() {
        return this.selectedFilters().length !== 0;
    }
    element() {
        return this.filterElement;
    }
}
//# sourceMappingURL=NetworkLogView.js.map

/***/ }),

/***/ "./panels/network/NetworkLogViewColumns.js":
/*!*************************************************!*\
  !*** ./panels/network/NetworkLogViewColumns.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkLogViewColumns: () => (/* binding */ NetworkLogViewColumns)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/theme_support/theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NetworkDataGridNode.js */ "./panels/network/NetworkDataGridNode.js");
/* harmony import */ var _NetworkManageCustomHeadersView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NetworkManageCustomHeadersView.js */ "./panels/network/NetworkManageCustomHeadersView.js");
/* harmony import */ var _NetworkWaterfallColumn_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NetworkWaterfallColumn.js */ "./panels/network/NetworkWaterfallColumn.js");
/* harmony import */ var _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RequestInitiatorView.js */ "./panels/network/RequestInitiatorView.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.












const UIStrings = {
    /**
     *@description Data grid name for Network Log data grids
     */
    networkLog: 'Network Log',
    /**
     *@description Inner element text content in Network Log View Columns of the Network panel
     */
    waterfall: 'Waterfall',
    /**
     *@description A context menu item in the Network Log View Columns of the Network panel
     */
    responseHeaders: 'Response Headers',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */
    manageHeaderColumns: 'Manage Header Columns…',
    /**
     *@description Text for the start time of an activity
     */
    startTime: 'Start Time',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */
    responseTime: 'Response Time',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */
    endTime: 'End Time',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */
    totalDuration: 'Total Duration',
    /**
     *@description Text for the latency of a task
     */
    latency: 'Latency',
    /**
     *@description Text for the name of something
     */
    name: 'Name',
    /**
     *@description Text that refers to a file path
     */
    path: 'Path',
    /**
     *@description Text in Timeline UIUtils of the Performance panel
     */
    url: 'Url',
    /**
     *@description Text for one or a group of functions
     */
    method: 'Method',
    /**
     *@description Text for the status of something
     */
    status: 'Status',
    /**
     *@description Generic label for any text
     */
    text: 'Text',
    /**
     *@description Text for security or network protocol
     */
    protocol: 'Protocol',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */
    scheme: 'Scheme',
    /**
     *@description Text for the domain of a website
     */
    domain: 'Domain',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */
    remoteAddress: 'Remote Address',
    /**
     *@description Text that refers to some types
     */
    type: 'Type',
    /**
     *@description Text for the initiator of something
     */
    initiator: 'Initiator',
    /**
     *@description Column header in the Network log view of the Network panel
     */
    hasOverrides: 'Has overrides',
    /**
     *@description Column header in the Network log view of the Network panel
     */
    initiatorAddressSpace: 'Initiator Address Space',
    /**
     *@description Text for web cookies
     */
    cookies: 'Cookies',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */
    setCookies: 'Set Cookies',
    /**
     *@description Text for the size of something
     */
    size: 'Size',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */
    content: 'Content',
    /**
     *@description Noun that refers to a duration in milliseconds.
     */
    time: 'Time',
    /**
     *@description Text to show the priority of an item
     */
    priority: 'Priority',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */
    connectionId: 'Connection ID',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */
    remoteAddressSpace: 'Remote Address Space',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/network/NetworkLogViewColumns.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
class NetworkLogViewColumns {
    networkLogView;
    persistentSettings;
    networkLogLargeRowsSetting;
    eventDividers;
    eventDividersShown;
    gridMode;
    columns;
    waterfallRequestsAreStale;
    waterfallScrollerWidthIsStale;
    popupLinkifier;
    calculatorsMap;
    lastWheelTime;
    dataGridInternal;
    splitWidget;
    waterfallColumn;
    activeScroller;
    dataGridScroller;
    waterfallScroller;
    waterfallScrollerContent;
    waterfallHeaderElement;
    waterfallColumnSortIcon;
    activeWaterfallSortId;
    popoverHelper;
    hasScrollerTouchStarted;
    scrollerTouchStartPos;
    constructor(networkLogView, timeCalculator, durationCalculator, networkLogLargeRowsSetting) {
        this.networkLogView = networkLogView;
        this.persistentSettings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-log-columns', {});
        this.networkLogLargeRowsSetting = networkLogLargeRowsSetting;
        this.networkLogLargeRowsSetting.addChangeListener(this.updateRowsSize, this);
        this.eventDividers = new Map();
        this.eventDividersShown = false;
        this.gridMode = true;
        this.columns = [];
        this.waterfallRequestsAreStale = false;
        this.waterfallScrollerWidthIsStale = true;
        this.popupLinkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.Linkifier.Linkifier();
        this.calculatorsMap = new Map();
        this.calculatorsMap.set("Time" /* CalculatorTypes.Time */, timeCalculator);
        this.calculatorsMap.set("Duration" /* CalculatorTypes.Duration */, durationCalculator);
        this.lastWheelTime = 0;
        this.setupDataGrid();
        this.setupWaterfall();
        _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_6__.ThemeSupport.instance().addEventListener(_ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_6__.ThemeChangeEvent.eventName, () => {
            this.scheduleRefresh();
        });
    }
    static convertToDataGridDescriptor(columnConfig) {
        const title = columnConfig.title instanceof Function ? columnConfig.title() : columnConfig.title;
        return {
            id: columnConfig.id,
            title,
            sortable: columnConfig.sortable,
            align: columnConfig.align,
            nonSelectable: columnConfig.nonSelectable,
            weight: columnConfig.weight,
            allowInSortByEvenWhenHidden: columnConfig.allowInSortByEvenWhenHidden,
        };
    }
    wasShown() {
        this.updateRowsSize();
    }
    willHide() {
        if (this.popoverHelper) {
            this.popoverHelper.hidePopover();
        }
    }
    reset() {
        if (this.popoverHelper) {
            this.popoverHelper.hidePopover();
        }
        this.eventDividers.clear();
    }
    setupDataGrid() {
        const defaultColumns = DEFAULT_COLUMNS;
        const defaultColumnConfig = DEFAULT_COLUMN_CONFIG;
        this.columns = [];
        for (const currentConfigColumn of defaultColumns) {
            const descriptor = Object.assign({}, defaultColumnConfig, currentConfigColumn);
            const columnConfig = descriptor;
            columnConfig.id = columnConfig.id;
            if (columnConfig.subtitle) {
                const title = columnConfig.title instanceof Function ? columnConfig.title() : columnConfig.title;
                const subtitle = columnConfig.subtitle instanceof Function ? columnConfig.subtitle() : columnConfig.subtitle;
                columnConfig.titleDOMFragment = this.makeHeaderFragment(title, subtitle);
            }
            this.columns.push(columnConfig);
        }
        this.loadCustomColumnsAndSettings();
        this.popoverHelper = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.PopoverHelper.PopoverHelper(this.networkLogView.element, this.getPopoverRequest.bind(this), 'network.initiator-stacktrace');
        this.popoverHelper.setHasPadding(true);
        this.popoverHelper.setTimeout(300, 300);
        this.dataGridInternal = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.SortableDataGrid.SortableDataGrid(({
            displayName: i18nString(UIStrings.networkLog),
            columns: this.columns.map(NetworkLogViewColumns.convertToDataGridDescriptor),
            editCallback: undefined,
            deleteCallback: undefined,
            refreshCallback: undefined,
        }));
        this.dataGridInternal.element.addEventListener('mousedown', event => {
            if (!this.dataGridInternal.selectedNode && event.button) {
                event.consume();
            }
        }, true);
        this.dataGridScroller = this.dataGridInternal.scrollContainer;
        this.updateColumns();
        this.dataGridInternal.addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */, this.sortHandler, this);
        this.dataGridInternal.setHeaderContextMenuCallback(this.innerHeaderContextMenu.bind(this));
        this.activeWaterfallSortId = WaterfallSortIds.StartTime;
        this.dataGridInternal.markColumnAsSortedBy(INITIAL_SORT_COLUMN, _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Ascending);
        this.splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.SplitWidget.SplitWidget(true, true, 'network-panel-split-view-waterfall', 200);
        const widget = this.dataGridInternal.asWidget();
        widget.setMinimumSize(150, 0);
        this.splitWidget.setMainWidget(widget);
    }
    setupWaterfall() {
        this.waterfallColumn = new _NetworkWaterfallColumn_js__WEBPACK_IMPORTED_MODULE_10__.NetworkWaterfallColumn(this.networkLogView.calculator());
        this.waterfallColumn.element.addEventListener('contextmenu', handleContextMenu.bind(this));
        this.waterfallColumn.element.addEventListener('wheel', this.onMouseWheel.bind(this, false), { passive: true });
        this.waterfallColumn.element.addEventListener('touchstart', this.onTouchStart.bind(this));
        this.waterfallColumn.element.addEventListener('touchmove', this.onTouchMove.bind(this));
        this.waterfallColumn.element.addEventListener('touchend', this.onTouchEnd.bind(this));
        this.dataGridScroller.addEventListener('wheel', this.onMouseWheel.bind(this, true), true);
        this.dataGridScroller.addEventListener('touchstart', this.onTouchStart.bind(this));
        this.dataGridScroller.addEventListener('touchmove', this.onTouchMove.bind(this));
        this.dataGridScroller.addEventListener('touchend', this.onTouchEnd.bind(this));
        this.waterfallScroller =
            this.waterfallColumn.contentElement.createChild('div', 'network-waterfall-v-scroll');
        this.waterfallScrollerContent =
            this.waterfallScroller.createChild('div', 'network-waterfall-v-scroll-content');
        this.dataGridInternal.addEventListener("PaddingChanged" /* DataGrid.DataGrid.Events.PaddingChanged */, () => {
            this.waterfallScrollerWidthIsStale = true;
            this.syncScrollers();
        });
        this.dataGridInternal.addEventListener("ViewportCalculated" /* DataGrid.ViewportDataGrid.Events.ViewportCalculated */, this.redrawWaterfallColumn.bind(this));
        this.createWaterfallHeader();
        this.waterfallColumn.contentElement.classList.add('network-waterfall-view');
        this.waterfallColumn.setMinimumSize(100, 0);
        this.splitWidget.setSidebarWidget(this.waterfallColumn);
        this.switchViewMode(false);
        function handleContextMenu(ev) {
            const event = ev;
            const node = this.waterfallColumn.getNodeFromPoint(event.offsetX, event.offsetY);
            if (!node) {
                return;
            }
            const request = node.request();
            if (!request) {
                return;
            }
            const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ContextMenu.ContextMenu(event);
            this.networkLogView.handleContextMenuForRequest(contextMenu, request);
            void contextMenu.show();
        }
    }
    onMouseWheel(shouldConsume, ev) {
        if (shouldConsume) {
            ev.consume(true);
        }
        const event = ev;
        const hasRecentWheel = Date.now() - this.lastWheelTime < 80;
        this.activeScroller.scrollBy({ top: event.deltaY, behavior: hasRecentWheel ? 'auto' : 'smooth' });
        this.syncScrollers();
        this.lastWheelTime = Date.now();
    }
    onTouchStart(ev) {
        const event = ev;
        this.hasScrollerTouchStarted = true;
        this.scrollerTouchStartPos = event.changedTouches[0].pageY;
    }
    onTouchMove(ev) {
        if (!this.hasScrollerTouchStarted) {
            return;
        }
        const event = ev;
        const currentPos = event.changedTouches[0].pageY;
        const delta = this.scrollerTouchStartPos - currentPos;
        this.activeScroller.scrollBy({ top: delta, behavior: 'auto' });
        this.syncScrollers();
        this.scrollerTouchStartPos = currentPos;
    }
    onTouchEnd() {
        this.hasScrollerTouchStarted = false;
    }
    syncScrollers() {
        if (!this.waterfallColumn.isShowing()) {
            return;
        }
        this.waterfallScrollerContent.style.height =
            this.dataGridScroller.scrollHeight - this.dataGridInternal.headerHeight() + 'px';
        this.updateScrollerWidthIfNeeded();
        this.dataGridScroller.scrollTop = this.waterfallScroller.scrollTop;
    }
    updateScrollerWidthIfNeeded() {
        if (this.waterfallScrollerWidthIsStale) {
            this.waterfallScrollerWidthIsStale = false;
            this.waterfallColumn.setRightPadding(this.waterfallScroller.offsetWidth - this.waterfallScrollerContent.offsetWidth);
        }
    }
    redrawWaterfallColumn() {
        if (!this.waterfallRequestsAreStale) {
            this.updateScrollerWidthIfNeeded();
            this.waterfallColumn.update(this.activeScroller.scrollTop, this.eventDividersShown ? this.eventDividers : undefined);
            return;
        }
        this.syncScrollers();
        const nodes = this.networkLogView.flatNodesList();
        this.waterfallColumn.update(this.activeScroller.scrollTop, this.eventDividers, nodes);
    }
    createWaterfallHeader() {
        this.waterfallHeaderElement =
            this.waterfallColumn.contentElement.createChild('div', 'network-waterfall-header');
        this.waterfallHeaderElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.tableHeader('waterfall').track({ click: true })}`);
        this.waterfallHeaderElement.addEventListener('click', waterfallHeaderClicked.bind(this));
        this.waterfallHeaderElement.addEventListener('contextmenu', event => {
            const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ContextMenu.ContextMenu(event);
            this.innerHeaderContextMenu(contextMenu);
            void contextMenu.show();
        });
        this.waterfallHeaderElement.createChild('div', 'hover-layer');
        const innerElement = this.waterfallHeaderElement.createChild('div');
        innerElement.textContent = i18nString(UIStrings.waterfall);
        this.waterfallColumnSortIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon();
        this.waterfallColumnSortIcon.className = 'sort-order-icon';
        this.waterfallHeaderElement.createChild('div', 'sort-order-icon-container')
            .appendChild(this.waterfallColumnSortIcon);
        function waterfallHeaderClicked() {
            const sortOrders = _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order;
            const wasSortedByWaterfall = this.dataGridInternal.sortColumnId() === 'waterfall';
            const wasSortedAscending = this.dataGridInternal.isSortOrderAscending();
            const sortOrder = wasSortedByWaterfall && wasSortedAscending ? sortOrders.Descending : sortOrders.Ascending;
            this.dataGridInternal.markColumnAsSortedBy('waterfall', sortOrder);
            this.sortHandler();
        }
    }
    setCalculator(x) {
        this.waterfallColumn.setCalculator(x);
    }
    scheduleRefresh() {
        this.waterfallColumn.scheduleDraw();
    }
    updateRowsSize() {
        const largeRows = Boolean(this.networkLogLargeRowsSetting.get());
        this.dataGridInternal.element.classList.toggle('small', !largeRows);
        this.dataGridInternal.scheduleUpdate();
        this.waterfallScrollerWidthIsStale = true;
        this.waterfallColumn.setRowHeight(largeRows ? 41 : 21);
        this.waterfallScroller.classList.toggle('small', !largeRows);
        this.waterfallHeaderElement.classList.toggle('small', !largeRows);
        // Request an animation frame because under certain conditions
        // (see crbug.com/1019723) this.waterfallScroller.offsetTop does
        // not return the value it's supposed to return as of the applied
        // css classes.
        window.requestAnimationFrame(() => {
            this.waterfallColumn.setHeaderHeight(this.waterfallScroller.offsetTop);
            this.waterfallColumn.scheduleDraw();
        });
    }
    show(element) {
        this.splitWidget.show(element);
    }
    setHidden(value) {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setHidden(this.splitWidget.element, value);
    }
    dataGrid() {
        return this.dataGridInternal;
    }
    sortByCurrentColumn() {
        this.sortHandler();
    }
    sortHandler() {
        const columnId = this.dataGridInternal.sortColumnId();
        this.networkLogView.removeAllNodeHighlights();
        this.waterfallRequestsAreStale = true;
        if (columnId === 'waterfall') {
            if (this.dataGridInternal.sortOrder() === _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Ascending) {
                this.waterfallColumnSortIcon.name = 'triangle-up';
            }
            else {
                this.waterfallColumnSortIcon.name = 'triangle-down';
            }
            this.waterfallColumnSortIcon.hidden = false;
            const sortFunction = _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestPropertyComparator.bind(null, this.activeWaterfallSortId);
            this.dataGridInternal.sortNodes(sortFunction, !this.dataGridInternal.isSortOrderAscending());
            this.dataGridSortedForTest();
            return;
        }
        this.waterfallColumnSortIcon.hidden = true;
        this.waterfallColumnSortIcon.name = null;
        const columnConfig = this.columns.find(columnConfig => columnConfig.id === columnId);
        if (!columnConfig || !columnConfig.sortingFunction) {
            return;
        }
        const sortingFunction = columnConfig.sortingFunction;
        if (!sortingFunction) {
            return;
        }
        this.dataGridInternal.sortNodes(sortingFunction, !this.dataGridInternal.isSortOrderAscending());
        this.dataGridSortedForTest();
    }
    dataGridSortedForTest() {
    }
    updateColumns() {
        if (!this.dataGridInternal) {
            return;
        }
        const visibleColumns = new Set();
        if (this.gridMode) {
            for (const columnConfig of this.columns) {
                if (columnConfig.id === 'waterfall') {
                    this.setWaterfallVisibility(columnConfig.visible);
                }
                else if (columnConfig.visible) {
                    visibleColumns.add(columnConfig.id);
                }
            }
        }
        else {
            // Find the first visible column from the path group
            const visibleColumn = this.columns.find(c => c.hideableGroup === 'path' && c.visible);
            if (visibleColumn) {
                visibleColumns.add(visibleColumn.id);
            }
            else {
                // This should not happen because inside a hideableGroup
                // there should always be at least one column visible
                // This is just in case.
                visibleColumns.add('name');
            }
            this.setWaterfallVisibility(false);
        }
        this.dataGridInternal.setColumnsVisibility(visibleColumns);
    }
    switchViewMode(gridMode) {
        if (this.gridMode === gridMode) {
            return;
        }
        this.gridMode = gridMode;
        this.updateColumns();
        this.updateRowsSize();
    }
    toggleColumnVisibility(columnConfig) {
        this.loadCustomColumnsAndSettings();
        columnConfig.visible = !columnConfig.visible;
        this.saveColumnsSettings();
        this.updateColumns();
        this.updateRowsSize();
    }
    setWaterfallVisibility(visible) {
        if (!this.splitWidget) {
            return;
        }
        this.networkLogView.element.classList.toggle('has-waterfall', visible);
        if (visible) {
            this.splitWidget.showBoth();
            this.activeScroller = this.waterfallScroller;
            this.waterfallScroller.scrollTop = this.dataGridScroller.scrollTop;
            this.dataGridInternal.setScrollContainer(this.waterfallScroller);
        }
        else {
            this.networkLogView.removeAllNodeHighlights();
            this.splitWidget.hideSidebar();
            this.activeScroller = this.dataGridScroller;
            this.dataGridInternal.setScrollContainer(this.dataGridScroller);
        }
    }
    saveColumnsSettings() {
        const saveableSettings = {};
        for (const columnConfig of this.columns) {
            saveableSettings[columnConfig.id] = { visible: columnConfig.visible, title: columnConfig.title };
        }
        this.persistentSettings.set(saveableSettings);
    }
    loadCustomColumnsAndSettings() {
        const savedSettings = this.persistentSettings.get();
        const columnIds = Object.keys(savedSettings);
        for (const columnId of columnIds) {
            const setting = savedSettings[columnId];
            let columnConfig = this.columns.find(columnConfig => columnConfig.id === columnId);
            if (!columnConfig && setting.title) {
                columnConfig = this.addCustomHeader(setting.title, columnId) || undefined;
            }
            if (columnConfig && columnConfig.hideable && typeof setting.visible === 'boolean') {
                columnConfig.visible = Boolean(setting.visible);
            }
            if (columnConfig && typeof setting.title === 'string') {
                columnConfig.title = setting.title;
            }
        }
    }
    makeHeaderFragment(title, subtitle) {
        const fragment = document.createDocumentFragment();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextChild(fragment, title);
        const subtitleDiv = fragment.createChild('div', 'network-header-subtitle');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextChild(subtitleDiv, subtitle);
        return fragment;
    }
    innerHeaderContextMenu(contextMenu) {
        const columnConfigs = this.columns.filter(columnConfig => columnConfig.hideable);
        const nonResponseHeaders = columnConfigs.filter(columnConfig => !columnConfig.isResponseHeader);
        const hideableGroups = new Map();
        const nonResponseHeadersWithoutGroup = [];
        // Sort columns into their groups
        for (const columnConfig of nonResponseHeaders) {
            if (!columnConfig.hideableGroup) {
                nonResponseHeadersWithoutGroup.push(columnConfig);
            }
            else {
                const name = columnConfig.hideableGroup;
                let hideableGroup = hideableGroups.get(name);
                if (!hideableGroup) {
                    hideableGroup = [];
                    hideableGroups.set(name, hideableGroup);
                }
                hideableGroup.push(columnConfig);
            }
        }
        // Add all the groups first
        for (const group of hideableGroups.values()) {
            const visibleColumns = group.filter(columnConfig => columnConfig.visible);
            for (const columnConfig of group) {
                // Make sure that at least one item in every group is enabled
                const disabled = visibleColumns.length === 1 && visibleColumns[0] === columnConfig;
                const title = columnConfig.title instanceof Function ? columnConfig.title() : columnConfig.title;
                contextMenu.headerSection().appendCheckboxItem(title, this.toggleColumnVisibility.bind(this, columnConfig), { checked: columnConfig.visible, disabled, jslogContext: columnConfig.id });
            }
            contextMenu.headerSection().appendSeparator();
        }
        // Add normal columns not belonging to any group
        for (const columnConfig of nonResponseHeadersWithoutGroup) {
            const title = columnConfig.title instanceof Function ? columnConfig.title() : columnConfig.title;
            contextMenu.headerSection().appendCheckboxItem(title, this.toggleColumnVisibility.bind(this, columnConfig), { checked: columnConfig.visible, jslogContext: columnConfig.id });
        }
        const responseSubMenu = contextMenu.footerSection().appendSubMenuItem(i18nString(UIStrings.responseHeaders), false, 'response-headers');
        const responseHeaders = columnConfigs.filter(columnConfig => columnConfig.isResponseHeader);
        for (const columnConfig of responseHeaders) {
            const title = columnConfig.title instanceof Function ? columnConfig.title() : columnConfig.title;
            responseSubMenu.defaultSection().appendCheckboxItem(title, this.toggleColumnVisibility.bind(this, columnConfig), { checked: columnConfig.visible, jslogContext: columnConfig.id });
        }
        responseSubMenu.footerSection().appendItem(i18nString(UIStrings.manageHeaderColumns), this.manageCustomHeaderDialog.bind(this), { jslogContext: 'manage-header-columns' });
        const waterfallSortIds = WaterfallSortIds;
        const waterfallSubMenu = contextMenu.footerSection().appendSubMenuItem(i18nString(UIStrings.waterfall), false, 'waterfall');
        waterfallSubMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.startTime), setWaterfallMode.bind(this, waterfallSortIds.StartTime), { checked: this.activeWaterfallSortId === waterfallSortIds.StartTime, jslogContext: 'start-time' });
        waterfallSubMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.responseTime), setWaterfallMode.bind(this, waterfallSortIds.ResponseTime), { checked: this.activeWaterfallSortId === waterfallSortIds.ResponseTime, jslogContext: 'response-time' });
        waterfallSubMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.endTime), setWaterfallMode.bind(this, waterfallSortIds.EndTime), { checked: this.activeWaterfallSortId === waterfallSortIds.EndTime, jslogContext: 'end-time' });
        waterfallSubMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.totalDuration), setWaterfallMode.bind(this, waterfallSortIds.Duration), { checked: this.activeWaterfallSortId === waterfallSortIds.Duration, jslogContext: 'total-duration' });
        waterfallSubMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.latency), setWaterfallMode.bind(this, waterfallSortIds.Latency), { checked: this.activeWaterfallSortId === waterfallSortIds.Latency, jslogContext: 'latency' });
        function setWaterfallMode(sortId) {
            let calculator = this.calculatorsMap.get("Time" /* CalculatorTypes.Time */);
            const waterfallSortIds = WaterfallSortIds;
            if (sortId === waterfallSortIds.Duration || sortId === waterfallSortIds.Latency) {
                calculator = this.calculatorsMap.get("Duration" /* CalculatorTypes.Duration */);
            }
            this.networkLogView.setCalculator(calculator);
            this.activeWaterfallSortId = sortId;
            this.dataGridInternal.markColumnAsSortedBy('waterfall', _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Ascending);
            this.sortHandler();
        }
    }
    manageCustomHeaderDialog() {
        const customHeaders = [];
        for (const columnConfig of this.columns) {
            const title = columnConfig.title instanceof Function ? columnConfig.title() : columnConfig.title;
            if (columnConfig.isResponseHeader) {
                customHeaders.push({ title, editable: columnConfig.isCustomHeader });
            }
        }
        const manageCustomHeaders = new _NetworkManageCustomHeadersView_js__WEBPACK_IMPORTED_MODULE_9__.NetworkManageCustomHeadersView(customHeaders, headerTitle => Boolean(this.addCustomHeader(headerTitle)), this.changeCustomHeader.bind(this), this.removeCustomHeader.bind(this));
        const dialog = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Dialog.Dialog('manage-custom-headers');
        manageCustomHeaders.show(dialog.contentElement);
        dialog.setSizeBehavior("MeasureContent" /* UI.GlassPane.SizeBehavior.MeasureContent */);
        dialog.show(this.networkLogView.element);
    }
    removeCustomHeader(headerId) {
        headerId = headerId.toLowerCase();
        const index = this.columns.findIndex(columnConfig => columnConfig.id === headerId);
        if (index === -1) {
            return false;
        }
        this.columns.splice(index, 1);
        this.dataGridInternal.removeColumn(headerId);
        this.saveColumnsSettings();
        this.updateColumns();
        return true;
    }
    addCustomHeader(headerTitle, headerId, index) {
        if (!headerId) {
            headerId = headerTitle.toLowerCase();
        }
        if (index === undefined) {
            index = this.columns.length - 1;
        }
        const currentColumnConfig = this.columns.find(columnConfig => columnConfig.id === headerId);
        if (currentColumnConfig) {
            return null;
        }
        const columnConfigBase = Object.assign({}, DEFAULT_COLUMN_CONFIG, {
            id: headerId,
            title: headerTitle,
            isResponseHeader: true,
            isCustomHeader: true,
            visible: true,
            sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderStringComparator.bind(null, headerId),
        });
        // Split out the column config from the typed version, as doing it in a single assignment causes
        // issues with Closure compiler.
        const columnConfig = columnConfigBase;
        this.columns.splice(index, 0, columnConfig);
        if (this.dataGridInternal) {
            this.dataGridInternal.addColumn(NetworkLogViewColumns.convertToDataGridDescriptor(columnConfig), index);
        }
        this.saveColumnsSettings();
        this.updateColumns();
        return columnConfig;
    }
    changeCustomHeader(oldHeaderId, newHeaderTitle, newHeaderId) {
        if (!newHeaderId) {
            newHeaderId = newHeaderTitle.toLowerCase();
        }
        oldHeaderId = oldHeaderId.toLowerCase();
        const oldIndex = this.columns.findIndex(columnConfig => columnConfig.id === oldHeaderId);
        const oldColumnConfig = this.columns[oldIndex];
        const currentColumnConfig = this.columns.find(columnConfig => columnConfig.id === newHeaderId);
        if (!oldColumnConfig || (currentColumnConfig && oldHeaderId !== newHeaderId)) {
            return false;
        }
        this.removeCustomHeader(oldHeaderId);
        this.addCustomHeader(newHeaderTitle, newHeaderId, oldIndex);
        return true;
    }
    getPopoverRequest(event) {
        if (!this.gridMode) {
            return null;
        }
        const hoveredNode = this.networkLogView.hoveredNode();
        if (!hoveredNode || !event.target) {
            return null;
        }
        const anchor = event.target.enclosingNodeOrSelfWithClass('network-script-initiated');
        if (!anchor) {
            return null;
        }
        const request = hoveredNode.request();
        if (!request) {
            return null;
        }
        return {
            box: anchor.boxInWindow(),
            show: async (popover) => {
                this.popupLinkifier.addEventListener("liveLocationUpdated" /* Components.Linkifier.Events.LiveLocationUpdated */, () => {
                    popover.setSizeBehavior("MeasureContent" /* UI.GlassPane.SizeBehavior.MeasureContent */);
                });
                const content = _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_11__.RequestInitiatorView.createStackTracePreview(request, this.popupLinkifier, false);
                if (!content) {
                    return false;
                }
                popover.contentElement.appendChild(content.element);
                return true;
            },
            hide: this.popupLinkifier.reset.bind(this.popupLinkifier),
        };
    }
    addEventDividers(times, className) {
        // TODO(allada) Remove this and pass in the color.
        let color = 'transparent';
        switch (className) {
            case 'network-dcl-divider':
                color = '#0867CB';
                break;
            case 'network-load-divider':
                color = '#B31412';
                break;
            default:
                return;
        }
        const currentTimes = this.eventDividers.get(color) || [];
        this.eventDividers.set(color, currentTimes.concat(times));
        this.networkLogView.scheduleRefresh();
    }
    hideEventDividers() {
        this.eventDividersShown = true;
        this.redrawWaterfallColumn();
    }
    showEventDividers() {
        this.eventDividersShown = false;
        this.redrawWaterfallColumn();
    }
    selectFilmStripFrame(time) {
        this.eventDividers.set(FILM_STRIP_DIVIDER_COLOR, [time]);
        this.redrawWaterfallColumn();
    }
    clearFilmStripFrame() {
        this.eventDividers.delete(FILM_STRIP_DIVIDER_COLOR);
        this.redrawWaterfallColumn();
    }
}
const INITIAL_SORT_COLUMN = 'waterfall';
const DEFAULT_COLUMN_CONFIG = {
    subtitle: null,
    visible: false,
    weight: 6,
    sortable: true,
    hideable: true,
    hideableGroup: null,
    nonSelectable: false,
    isResponseHeader: false,
    isCustomHeader: false,
    allowInSortByEvenWhenHidden: false,
};
const DEFAULT_COLUMNS = [
    {
        id: 'name',
        title: i18nLazyString(UIStrings.name),
        subtitle: i18nLazyString(UIStrings.path),
        visible: true,
        weight: 20,
        hideable: true,
        hideableGroup: 'path',
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.NameComparator,
    },
    {
        id: 'path',
        title: i18nLazyString(UIStrings.path),
        hideable: true,
        hideableGroup: 'path',
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestPropertyComparator.bind(null, 'pathname'),
    },
    {
        id: 'url',
        title: i18nLazyString(UIStrings.url),
        hideable: true,
        hideableGroup: 'path',
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestURLComparator,
    },
    {
        id: 'method',
        title: i18nLazyString(UIStrings.method),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestPropertyComparator.bind(null, 'requestMethod'),
    },
    {
        id: 'status',
        title: i18nLazyString(UIStrings.status),
        visible: true,
        subtitle: i18nLazyString(UIStrings.text),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestPropertyComparator.bind(null, 'statusCode'),
    },
    {
        id: 'protocol',
        title: i18nLazyString(UIStrings.protocol),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestPropertyComparator.bind(null, 'protocol'),
    },
    {
        id: 'scheme',
        title: i18nLazyString(UIStrings.scheme),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestPropertyComparator.bind(null, 'scheme'),
    },
    {
        id: 'domain',
        title: i18nLazyString(UIStrings.domain),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestPropertyComparator.bind(null, 'domain'),
    },
    {
        id: 'remote-address',
        title: i18nLazyString(UIStrings.remoteAddress),
        weight: 10,
        align: "right" /* DataGrid.DataGrid.Align.Right */,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RemoteAddressComparator,
    },
    {
        id: 'remote-address-space',
        title: i18nLazyString(UIStrings.remoteAddressSpace),
        visible: false,
        weight: 10,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RemoteAddressSpaceComparator,
    },
    {
        id: 'type',
        title: i18nLazyString(UIStrings.type),
        visible: true,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.TypeComparator,
    },
    {
        id: 'initiator',
        title: i18nLazyString(UIStrings.initiator),
        visible: true,
        weight: 10,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.InitiatorComparator,
    },
    {
        id: 'initiator-address-space',
        title: i18nLazyString(UIStrings.initiatorAddressSpace),
        visible: false,
        weight: 10,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.InitiatorAddressSpaceComparator,
    },
    {
        id: 'cookies',
        title: i18nLazyString(UIStrings.cookies),
        align: "right" /* DataGrid.DataGrid.Align.Right */,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestCookiesCountComparator,
    },
    {
        id: 'set-cookies',
        title: i18nLazyString(UIStrings.setCookies),
        align: "right" /* DataGrid.DataGrid.Align.Right */,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseCookiesCountComparator,
    },
    {
        id: 'size',
        title: i18nLazyString(UIStrings.size),
        visible: true,
        subtitle: i18nLazyString(UIStrings.content),
        align: "right" /* DataGrid.DataGrid.Align.Right */,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.SizeComparator,
    },
    {
        id: 'time',
        title: i18nLazyString(UIStrings.time),
        visible: true,
        subtitle: i18nLazyString(UIStrings.latency),
        align: "right" /* DataGrid.DataGrid.Align.Right */,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestPropertyComparator.bind(null, 'duration'),
    },
    { id: 'priority', title: i18nLazyString(UIStrings.priority), sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.PriorityComparator },
    {
        id: 'connection-id',
        title: i18nLazyString(UIStrings.connectionId),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestPropertyComparator.bind(null, 'connectionId'),
    },
    {
        id: 'cache-control',
        isResponseHeader: true,
        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString('Cache-Control'),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderStringComparator.bind(null, 'cache-control'),
    },
    {
        id: 'connection',
        isResponseHeader: true,
        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString('Connection'),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderStringComparator.bind(null, 'connection'),
    },
    {
        id: 'content-encoding',
        isResponseHeader: true,
        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString('Content-Encoding'),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderStringComparator.bind(null, 'content-encoding'),
    },
    {
        id: 'content-length',
        isResponseHeader: true,
        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString('Content-Length'),
        align: "right" /* DataGrid.DataGrid.Align.Right */,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderNumberComparator.bind(null, 'content-length'),
    },
    {
        id: 'etag',
        isResponseHeader: true,
        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString('ETag'),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderStringComparator.bind(null, 'etag'),
    },
    {
        id: 'has-overrides',
        title: i18nLazyString(UIStrings.hasOverrides),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderStringComparator.bind(null, 'has-overrides'),
    },
    {
        id: 'keep-alive',
        isResponseHeader: true,
        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString('Keep-Alive'),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderStringComparator.bind(null, 'keep-alive'),
    },
    {
        id: 'last-modified',
        isResponseHeader: true,
        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString('Last-Modified'),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderDateComparator.bind(null, 'last-modified'),
    },
    {
        id: 'server',
        isResponseHeader: true,
        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString('Server'),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderStringComparator.bind(null, 'server'),
    },
    {
        id: 'vary',
        isResponseHeader: true,
        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString('Vary'),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderStringComparator.bind(null, 'vary'),
    },
    // This header is a placeholder to let datagrid know that it can be sorted by this column, but never shown.
    {
        id: 'waterfall',
        title: i18nLazyString(UIStrings.waterfall),
        allowInSortByEvenWhenHidden: true,
    },
];
const FILM_STRIP_DIVIDER_COLOR = '#fccc49';
var WaterfallSortIds;
(function (WaterfallSortIds) {
    WaterfallSortIds["StartTime"] = "startTime";
    WaterfallSortIds["ResponseTime"] = "responseReceivedTime";
    WaterfallSortIds["EndTime"] = "endTime";
    WaterfallSortIds["Duration"] = "duration";
    WaterfallSortIds["Latency"] = "latency";
})(WaterfallSortIds || (WaterfallSortIds = {}));
//# sourceMappingURL=NetworkLogViewColumns.js.map

/***/ }),

/***/ "./panels/network/NetworkManageCustomHeadersView.js":
/*!**********************************************************!*\
  !*** ./panels/network/NetworkManageCustomHeadersView.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkManageCustomHeadersView: () => (/* binding */ NetworkManageCustomHeadersView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _networkManageCustomHeadersView_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./networkManageCustomHeadersView.css.js */ "./panels/network/networkManageCustomHeadersView.css.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const UIStrings = {
    /**
     *@description Text in Network Manage Custom Headers View of the Network panel
     */
    manageHeaderColumns: 'Manage Header Columns',
    /**
     *@description Placeholder text content in Network Manage Custom Headers View of the Network panel
     */
    noCustomHeaders: 'No custom headers',
    /**
     *@description Text of add button in Network Manage Custom Headers View of the Network panel
     */
    addCustomHeader: 'Add custom header…',
    /**
     *@description Text in Network Manage Custom Headers View of the Network panel
     */
    headerName: 'Header Name',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/network/NetworkManageCustomHeadersView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class NetworkManageCustomHeadersView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.VBox {
    list;
    columnConfigs;
    addHeaderColumnCallback;
    changeHeaderColumnCallback;
    removeHeaderColumnCallback;
    editor;
    constructor(columnData, addHeaderColumnCallback, changeHeaderColumnCallback, removeHeaderColumnCallback) {
        super(true);
        this.contentElement.classList.add('custom-headers-wrapper');
        this.contentElement.createChild('div', 'header').textContent = i18nString(UIStrings.manageHeaderColumns);
        this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ListWidget.ListWidget(this);
        this.list.element.classList.add('custom-headers-list');
        const placeholder = document.createElement('div');
        placeholder.classList.add('custom-headers-list-list-empty');
        placeholder.textContent = i18nString(UIStrings.noCustomHeaders);
        this.list.setEmptyPlaceholder(placeholder);
        this.list.show(this.contentElement);
        this.contentElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextButton(i18nString(UIStrings.addCustomHeader), this.addButtonClicked.bind(this), {
            className: 'add-button',
            jslogContext: 'network.add-custom-header',
        }));
        this.columnConfigs = new Map();
        columnData.forEach(columnData => this.columnConfigs.set(columnData.title.toLowerCase(), columnData));
        this.addHeaderColumnCallback = addHeaderColumnCallback;
        this.changeHeaderColumnCallback = changeHeaderColumnCallback;
        this.removeHeaderColumnCallback = removeHeaderColumnCallback;
        this.contentElement.tabIndex = 0;
    }
    wasShown() {
        this.headersUpdated();
        this.list.registerCSSFiles([_networkManageCustomHeadersView_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]]);
        this.registerCSSFiles([_networkManageCustomHeadersView_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]]);
    }
    headersUpdated() {
        this.list.clear();
        this.columnConfigs.forEach(headerData => this.list.appendItem({ header: headerData.title }, headerData.editable));
    }
    addButtonClicked() {
        this.list.addNewItem(this.columnConfigs.size, { header: '' });
    }
    renderItem(item, _editable) {
        const element = document.createElement('div');
        element.classList.add('custom-headers-list-item');
        const header = element.createChild('div', 'custom-header-name');
        header.textContent = item.header;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip.Tooltip.install(header, item.header);
        return element;
    }
    removeItemRequested(item, _index) {
        this.removeHeaderColumnCallback(item.header);
        this.columnConfigs.delete(item.header.toLowerCase());
        this.headersUpdated();
    }
    commitEdit(item, editor, isNew) {
        const headerId = editor.control('header').value.trim();
        let success;
        if (isNew) {
            success = this.addHeaderColumnCallback(headerId);
        }
        else {
            success = this.changeHeaderColumnCallback(item.header, headerId);
        }
        if (success && !isNew) {
            this.columnConfigs.delete(item.header.toLowerCase());
        }
        if (success) {
            this.columnConfigs.set(headerId.toLowerCase(), { title: headerId, editable: true });
        }
        this.headersUpdated();
    }
    beginEdit(item) {
        const editor = this.createEditor();
        editor.control('header').value = item.header;
        return editor;
    }
    createEditor() {
        if (this.editor) {
            return this.editor;
        }
        const editor = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ListWidget.Editor();
        this.editor = editor;
        const content = editor.contentElement();
        const titles = content.createChild('div', 'custom-headers-edit-row');
        titles.createChild('div', 'custom-headers-header').textContent = i18nString(UIStrings.headerName);
        const fields = content.createChild('div', 'custom-headers-edit-row');
        fields.createChild('div', 'custom-headers-header')
            .appendChild(editor.createInput('header', 'text', 'x-custom-header', validateHeader.bind(this)));
        return editor;
        function validateHeader(item, _index, _input) {
            let valid = true;
            const headerId = editor.control('header').value.trim().toLowerCase();
            if (this.columnConfigs.has(headerId) && item.header !== headerId) {
                valid = false;
            }
            return { valid, errorMessage: undefined };
        }
    }
}
//# sourceMappingURL=NetworkManageCustomHeadersView.js.map

/***/ }),

/***/ "./panels/network/NetworkOverview.js":
/*!*******************************************!*\
  !*** ./panels/network/NetworkOverview.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkOverview: () => (/* binding */ NetworkOverview),
/* harmony export */   RequestTimeRangeNameToColor: () => (/* binding */ RequestTimeRangeNameToColor)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */ var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/theme_support/theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
/* harmony import */ var _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NetworkLogView.js */ "./panels/network/NetworkLogView.js");
/* harmony import */ var _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NetworkTimeCalculator.js */ "./panels/network/NetworkTimeCalculator.js");
/* harmony import */ var _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RequestTimingView.js */ "./panels/network/RequestTimingView.js");
// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__.RenderCoordinator.RenderCoordinator.instance();
class NetworkOverview extends _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.TimelineOverviewPane.TimelineOverviewBase {
    selectedFilmStripTime;
    numBands;
    highlightedRequest;
    loadEvents;
    domContentLoadedEvents;
    nextBand;
    bandMap;
    requestsList;
    requestsSet;
    span;
    lastBoundary;
    constructor() {
        super();
        this.selectedFilmStripTime = -1;
        this.element.classList.add('network-overview');
        this.numBands = 1;
        this.highlightedRequest = null;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.Events.Load, this.loadEventFired, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.Events.DOMContentLoaded, this.domContentLoadedEventFired, this, { scoped: true });
        this.reset();
    }
    setHighlightedRequest(request) {
        this.highlightedRequest = request;
        this.scheduleUpdate();
    }
    selectFilmStripFrame(time) {
        this.selectedFilmStripTime = time;
        this.scheduleUpdate();
    }
    clearFilmStripFrame() {
        this.selectedFilmStripTime = -1;
        this.scheduleUpdate();
    }
    loadEventFired(event) {
        const time = event.data.loadTime;
        if (time) {
            this.loadEvents.push(time * 1000);
        }
        this.scheduleUpdate();
    }
    domContentLoadedEventFired(event) {
        const { data } = event;
        if (data) {
            this.domContentLoadedEvents.push(data * 1000);
        }
        this.scheduleUpdate();
    }
    bandId(connectionId) {
        if (!connectionId || connectionId === '0') {
            return -1;
        }
        if (this.bandMap.has(connectionId)) {
            return this.bandMap.get(connectionId);
        }
        const result = this.nextBand++;
        this.bandMap.set(connectionId, result);
        return result;
    }
    updateRequest(request) {
        if (!this.requestsSet.has(request)) {
            this.requestsSet.add(request);
            this.requestsList.push(request);
        }
        this.scheduleUpdate();
    }
    wasShown() {
        this.onResize();
    }
    calculator() {
        return super.calculator();
    }
    onResize() {
        const width = this.element.offsetWidth;
        const height = this.element.offsetHeight;
        this.calculator().setDisplayWidth(width);
        this.resetCanvas();
        const numBands = (((height - PADDING - 1) / BAND_HEIGHT) - 1) | 0;
        this.numBands = (numBands > 0) ? numBands : 1;
        this.scheduleUpdate();
    }
    reset() {
        this.span = 1;
        this.lastBoundary = null;
        this.nextBand = 0;
        this.bandMap = new Map();
        this.requestsList = [];
        this.requestsSet = new Set();
        this.loadEvents = [];
        this.domContentLoadedEvents = [];
        // Clear screen.
        this.resetCanvas();
    }
    scheduleUpdate() {
        if (!this.isShowing()) {
            return;
        }
        void coordinator.write('NetworkOverview.render', this.update.bind(this));
    }
    update() {
        const calculator = this.calculator();
        const newBoundary = new _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__.NetworkTimeBoundary(calculator.minimumBoundary(), calculator.maximumBoundary());
        if (!this.lastBoundary || !newBoundary.equals(this.lastBoundary)) {
            const span = calculator.boundarySpan();
            while (this.span < span) {
                this.span *= 1.25;
            }
            calculator.setBounds(calculator.minimumBoundary(), _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(calculator.minimumBoundary() + this.span));
            this.lastBoundary = new _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__.NetworkTimeBoundary(calculator.minimumBoundary(), calculator.maximumBoundary());
        }
        const context = this.context();
        const linesByType = new Map();
        const paddingTop = PADDING;
        function drawLines(type) {
            const lines = linesByType.get(type);
            if (!lines) {
                return;
            }
            const n = lines.length;
            context.beginPath();
            context.strokeStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().getComputedValue('--color-background-opacity-80');
            context.lineWidth = BORDER_WIDTH;
            context.fillStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().getComputedValue(RequestTimeRangeNameToColor[type]);
            for (let i = 0; i < n;) {
                const y = lines[i++] * BAND_HEIGHT + paddingTop;
                const startTime = lines[i++];
                let endTime = lines[i++];
                if (endTime === Number.MAX_VALUE) {
                    endTime = calculator.maximumBoundary();
                }
                const startX = calculator.computePosition(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(startTime));
                const endX = calculator.computePosition(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(endTime)) + 1;
                context.fillRect(startX, y, Math.max(endX - startX, MIN_BAND_WIDTH), BAND_HEIGHT);
                context.strokeRect(startX, y, Math.max(endX - startX, MIN_BAND_WIDTH), BAND_HEIGHT);
            }
        }
        function addLine(type, y, start, end) {
            let lines = linesByType.get(type);
            if (!lines) {
                lines = [];
                linesByType.set(type, lines);
            }
            lines.push(y, start, end);
        }
        const requests = this.requestsList;
        const n = requests.length;
        for (let i = 0; i < n; ++i) {
            const request = requests[i];
            const band = this.bandId(request.connectionId);
            const y = (band === -1) ? 0 : (band % this.numBands + 1);
            const timeRanges = _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_7__.RequestTimingView.calculateRequestTimeRanges(request, this.calculator().minimumBoundary());
            for (let j = 0; j < timeRanges.length; ++j) {
                const type = timeRanges[j].name;
                if (band !== -1 || type === "total" /* RequestTimeRangeNames.Total */) {
                    addLine(type, y, timeRanges[j].start * 1000, timeRanges[j].end * 1000);
                }
            }
        }
        context.clearRect(0, 0, this.width(), this.height());
        context.save();
        context.scale(window.devicePixelRatio, window.devicePixelRatio);
        context.lineWidth = 2;
        drawLines("total" /* RequestTimeRangeNames.Total */);
        drawLines("blocking" /* RequestTimeRangeNames.Blocking */);
        drawLines("connecting" /* RequestTimeRangeNames.Connecting */);
        drawLines("serviceworker" /* RequestTimeRangeNames.ServiceWorker */);
        drawLines("serviceworker-preparation" /* RequestTimeRangeNames.ServiceWorkerPreparation */);
        drawLines("serviceworker-respondwith" /* RequestTimeRangeNames.ServiceWorkerRespondWith */);
        drawLines("push" /* RequestTimeRangeNames.Push */);
        drawLines("proxy" /* RequestTimeRangeNames.Proxy */);
        drawLines("dns" /* RequestTimeRangeNames.DNS */);
        drawLines("ssl" /* RequestTimeRangeNames.SSL */);
        drawLines("sending" /* RequestTimeRangeNames.Sending */);
        drawLines("waiting" /* RequestTimeRangeNames.Waiting */);
        drawLines("receiving" /* RequestTimeRangeNames.Receiving */);
        if (this.highlightedRequest) {
            const size = 5;
            const borderSize = 2;
            const request = this.highlightedRequest;
            const band = this.bandId(request.connectionId);
            const y = ((band === -1) ? 0 : (band % this.numBands + 1)) * BAND_HEIGHT + paddingTop;
            const timeRanges = _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_7__.RequestTimingView.calculateRequestTimeRanges(request, this.calculator().minimumBoundary());
            context.fillStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().getComputedValue('--sys-color-tonal-container');
            // The network overview works in seconds, but the calcululator deals in
            // milliseconds, hence the multiplication by 1000.
            const start = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(timeRanges[0].start * 1000);
            const end = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(timeRanges[0].end * 1000);
            context.fillRect(calculator.computePosition(start) - borderSize, y - size / 2 - borderSize, calculator.computePosition(end) - calculator.computePosition(start) + 1 + 2 * borderSize, size * borderSize);
            for (let j = 0; j < timeRanges.length; ++j) {
                const type = timeRanges[j].name;
                if (band !== -1 || type === "total" /* RequestTimeRangeNames.Total */) {
                    context.beginPath();
                    context.strokeStyle =
                        _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().getComputedValue(RequestTimeRangeNameToColor[type]);
                    context.lineWidth = size;
                    const start = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(timeRanges[j].start * 1000);
                    const end = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(timeRanges[j].end * 1000);
                    context.moveTo(calculator.computePosition(start) - 0, y);
                    context.lineTo(calculator.computePosition(end) + 1, y);
                    context.stroke();
                }
            }
        }
        const height = this.element.offsetHeight;
        context.lineWidth = 1;
        context.beginPath();
        context.strokeStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().getComputedValue(_NetworkLogView_js__WEBPACK_IMPORTED_MODULE_5__.NetworkLogView.getDCLEventColor());
        for (let i = this.domContentLoadedEvents.length - 1; i >= 0; --i) {
            const position = calculator.computePosition(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(this.domContentLoadedEvents[i]));
            const x = Math.round(position) + 0.5;
            context.moveTo(x, 0);
            context.lineTo(x, height);
        }
        context.stroke();
        context.beginPath();
        context.strokeStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().getComputedValue(_NetworkLogView_js__WEBPACK_IMPORTED_MODULE_5__.NetworkLogView.getLoadEventColor());
        for (let i = this.loadEvents.length - 1; i >= 0; --i) {
            const position = calculator.computePosition(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(this.loadEvents[i]));
            const x = Math.round(position) + 0.5;
            context.moveTo(x, 0);
            context.lineTo(x, height);
        }
        context.stroke();
        if (this.selectedFilmStripTime !== -1) {
            context.lineWidth = 2;
            context.beginPath();
            context.strokeStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().getComputedValue('--network-frame-divider-color');
            const timeInMilliseconds = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(this.selectedFilmStripTime);
            const x = Math.round(calculator.computePosition(timeInMilliseconds));
            context.moveTo(x, 0);
            context.lineTo(x, height);
            context.stroke();
        }
        context.restore();
    }
}
const RequestTimeRangeNameToColor = {
    ["total" /* RequestTimeRangeNames.Total */]: '--network-overview-total',
    ["blocking" /* RequestTimeRangeNames.Blocking */]: '--network-overview-blocking',
    ["connecting" /* RequestTimeRangeNames.Connecting */]: '--network-overview-connecting',
    ["serviceworker" /* RequestTimeRangeNames.ServiceWorker */]: '--network-overview-service-worker',
    ["serviceworker-preparation" /* RequestTimeRangeNames.ServiceWorkerPreparation */]: '--network-overview-service-worker',
    ["serviceworker-respondwith" /* RequestTimeRangeNames.ServiceWorkerRespondWith */]: '--network-overview-service-worker-respond-with',
    ["push" /* RequestTimeRangeNames.Push */]: '--network-overview-push',
    ["proxy" /* RequestTimeRangeNames.Proxy */]: '--override-network-overview-proxy',
    ["dns" /* RequestTimeRangeNames.DNS */]: '--network-overview-dns',
    ["ssl" /* RequestTimeRangeNames.SSL */]: '--network-overview-ssl',
    ["sending" /* RequestTimeRangeNames.Sending */]: '--override-network-overview-sending',
    ["waiting" /* RequestTimeRangeNames.Waiting */]: '--network-overview-waiting',
    ["receiving" /* RequestTimeRangeNames.Receiving */]: '--network-overview-receiving',
    ["queueing" /* RequestTimeRangeNames.Queueing */]: '--network-overview-queueing',
};
const BAND_HEIGHT = 3;
const PADDING = 5;
// Minimum rectangle width for very short requests.
const MIN_BAND_WIDTH = 10;
// Border between bars in network overview panel for accessibility.
const BORDER_WIDTH = 1;
//# sourceMappingURL=NetworkOverview.js.map

/***/ }),

/***/ "./panels/network/NetworkWaterfallColumn.js":
/*!**************************************************!*\
  !*** ./panels/network/NetworkWaterfallColumn.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkWaterfallColumn: () => (/* binding */ NetworkWaterfallColumn)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _networkWaterfallColumn_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./networkWaterfallColumn.css.js */ "./panels/network/networkWaterfallColumn.css.js");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/theme_support/theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
/* harmony import */ var _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NetworkOverview.js */ "./panels/network/NetworkOverview.js");
/* harmony import */ var _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RequestTimingView.js */ "./panels/network/RequestTimingView.js");
/* harmony import */ var _networkTimingTable_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./networkTimingTable.css.js */ "./panels/network/networkTimingTable.css.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









const BAR_SPACING = 1;
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__.RenderCoordinator.RenderCoordinator.instance();
class NetworkWaterfallColumn extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox {
    canvas;
    canvasPosition;
    leftPadding;
    fontSize;
    rightPadding;
    scrollTop;
    headerHeight;
    calculator;
    rawRowHeight;
    rowHeight;
    offsetWidth;
    offsetHeight;
    startTime;
    endTime;
    popoverHelper;
    nodes;
    hoveredNode;
    eventDividers;
    styleForTimeRangeName;
    styleForWaitingResourceType;
    styleForDownloadingResourceType;
    wiskerStyle;
    hoverDetailsStyle;
    pathForStyle;
    textLayers;
    constructor(calculator) {
        // TODO(allada) Make this a shadowDOM when the NetworkWaterfallColumn gets moved into NetworkLogViewColumns.
        super(false);
        this.canvas = this.contentElement.createChild('canvas');
        this.canvas.tabIndex = -1;
        this.setDefaultFocusedElement(this.canvas);
        this.canvasPosition = this.canvas.getBoundingClientRect();
        this.leftPadding = 5;
        this.fontSize = 10;
        this.rightPadding = 0;
        this.scrollTop = 0;
        this.headerHeight = 0;
        this.calculator = calculator;
        // this.rawRowHeight captures model height (41 or 21px),
        // this.rowHeight is computed height of the row in CSS pixels, can be 20.8 for zoomed-in content.
        this.rawRowHeight = 0;
        this.rowHeight = 0;
        this.offsetWidth = 0;
        this.offsetHeight = 0;
        this.startTime = this.calculator.minimumBoundary();
        this.endTime = this.calculator.maximumBoundary();
        this.popoverHelper =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.PopoverHelper.PopoverHelper(this.element, this.getPopoverRequest.bind(this), 'network.timing');
        this.popoverHelper.setHasPadding(true);
        this.popoverHelper.setTimeout(300, 300);
        this.nodes = [];
        this.hoveredNode = null;
        this.eventDividers = new Map();
        this.element.addEventListener('mousemove', this.onMouseMove.bind(this), true);
        this.element.addEventListener('mouseleave', _event => this.setHoveredNode(null, false), true);
        this.element.addEventListener('click', this.onClick.bind(this), true);
        this.styleForTimeRangeName = NetworkWaterfallColumn.buildRequestTimeRangeStyle();
        const resourceStyleTuple = NetworkWaterfallColumn.buildResourceTypeStyle();
        this.styleForWaitingResourceType = resourceStyleTuple[0];
        this.styleForDownloadingResourceType = resourceStyleTuple[1];
        const baseLineColor = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_5__.ThemeSupport.instance().getComputedValue('--sys-color-state-disabled');
        this.wiskerStyle = { borderColor: baseLineColor, lineWidth: 1, fillStyle: undefined };
        this.hoverDetailsStyle = { fillStyle: baseLineColor, lineWidth: 1, borderColor: baseLineColor };
        this.pathForStyle = new Map();
        this.textLayers = [];
    }
    static buildRequestTimeRangeStyle() {
        const styleMap = new Map();
        styleMap.set("connecting" /* RequestTimeRangeNames.Connecting */, { fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor["connecting" /* RequestTimeRangeNames.Connecting */] });
        styleMap.set("ssl" /* RequestTimeRangeNames.SSL */, { fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor["ssl" /* RequestTimeRangeNames.SSL */] });
        styleMap.set("dns" /* RequestTimeRangeNames.DNS */, { fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor["dns" /* RequestTimeRangeNames.DNS */] });
        styleMap.set("proxy" /* RequestTimeRangeNames.Proxy */, { fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor["proxy" /* RequestTimeRangeNames.Proxy */] });
        styleMap.set("blocking" /* RequestTimeRangeNames.Blocking */, { fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor["blocking" /* RequestTimeRangeNames.Blocking */] });
        styleMap.set("push" /* RequestTimeRangeNames.Push */, { fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor["push" /* RequestTimeRangeNames.Push */] });
        styleMap.set("queueing" /* RequestTimeRangeNames.Queueing */, {
            fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor["queueing" /* RequestTimeRangeNames.Queueing */],
            lineWidth: 2,
            borderColor: 'lightgrey',
        });
        // This ensures we always show at least 2 px for a request.
        styleMap.set("receiving" /* RequestTimeRangeNames.Receiving */, {
            fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor["receiving" /* RequestTimeRangeNames.Receiving */],
            lineWidth: 2,
            borderColor: '#03A9F4',
        });
        styleMap.set("waiting" /* RequestTimeRangeNames.Waiting */, { fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor["waiting" /* RequestTimeRangeNames.Waiting */] });
        styleMap.set("receiving-push" /* RequestTimeRangeNames.ReceivingPush */, { fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor["receiving-push" /* RequestTimeRangeNames.ReceivingPush */] });
        styleMap.set("serviceworker" /* RequestTimeRangeNames.ServiceWorker */, { fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor["serviceworker" /* RequestTimeRangeNames.ServiceWorker */] });
        styleMap.set("serviceworker-preparation" /* RequestTimeRangeNames.ServiceWorkerPreparation */, { fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor["serviceworker-preparation" /* RequestTimeRangeNames.ServiceWorkerPreparation */] });
        styleMap.set("serviceworker-respondwith" /* RequestTimeRangeNames.ServiceWorkerRespondWith */, {
            fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor["serviceworker-respondwith" /* RequestTimeRangeNames.ServiceWorkerRespondWith */],
        });
        return styleMap;
    }
    static buildResourceTypeStyle() {
        const baseResourceTypeColors = new Map([
            ['document', 'hsl(215, 100%, 80%)'],
            ['font', 'hsl(8, 100%, 80%)'],
            ['media', 'hsl(90, 50%, 80%)'],
            ['image', 'hsl(90, 50%, 80%)'],
            ['script', 'hsl(31, 100%, 80%)'],
            ['stylesheet', 'hsl(272, 64%, 80%)'],
            ['texttrack', 'hsl(8, 100%, 80%)'],
            ['websocket', 'hsl(0, 0%, 95%)'],
            ['xhr', 'hsl(53, 100%, 80%)'],
            ['fetch', 'hsl(53, 100%, 80%)'],
            ['other', 'hsl(0, 0%, 95%)'],
        ]);
        const waitingStyleMap = new Map();
        const downloadingStyleMap = new Map();
        for (const resourceType of Object.values(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes)) {
            let color = baseResourceTypeColors.get(resourceType.name());
            if (!color) {
                color = baseResourceTypeColors.get('other');
            }
            const borderColor = toBorderColor(color);
            waitingStyleMap.set(
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
            // @ts-expect-error
            resourceType, { fillStyle: toWaitingColor(color), lineWidth: 1, borderColor: borderColor });
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
            // @ts-expect-error
            downloadingStyleMap.set(resourceType, { fillStyle: color, lineWidth: 1, borderColor: borderColor });
        }
        return [waitingStyleMap, downloadingStyleMap];
        function toBorderColor(color) {
            const parsedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(color)?.as("hsl" /* Common.Color.Format.HSL */);
            if (!parsedColor) {
                return '';
            }
            let { s, l } = parsedColor;
            s /= 2;
            l -= Math.min(l, 0.2);
            return new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.HSL(parsedColor.h, s, l, parsedColor.alpha).asString();
        }
        function toWaitingColor(color) {
            const parsedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(color)?.as("hsl" /* Common.Color.Format.HSL */);
            if (!parsedColor) {
                return '';
            }
            let { l } = parsedColor;
            l *= 1.1;
            return new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.HSL(parsedColor.h, parsedColor.s, l, parsedColor.alpha).asString();
        }
    }
    resetPaths() {
        this.pathForStyle.clear();
        this.pathForStyle.set(this.wiskerStyle, new Path2D());
        this.styleForTimeRangeName.forEach(style => this.pathForStyle.set(style, new Path2D()));
        this.styleForWaitingResourceType.forEach(style => this.pathForStyle.set(style, new Path2D()));
        this.styleForDownloadingResourceType.forEach(style => this.pathForStyle.set(style, new Path2D()));
        this.pathForStyle.set(this.hoverDetailsStyle, new Path2D());
    }
    willHide() {
        this.popoverHelper.hidePopover();
    }
    wasShown() {
        this.update();
        this.registerCSSFiles([_networkWaterfallColumn_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]]);
    }
    onMouseMove(event) {
        this.setHoveredNode(this.getNodeFromPoint(event.offsetX, event.offsetY), event.shiftKey);
    }
    onClick(event) {
        const handled = this.setSelectedNode(this.getNodeFromPoint(event.offsetX, event.offsetY));
        if (handled) {
            event.consume(true);
        }
    }
    getPopoverRequest(event) {
        if (!this.hoveredNode) {
            return null;
        }
        const request = this.hoveredNode.request();
        if (!request) {
            return null;
        }
        const useTimingBars = !_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network-color-code-resource-types').get() &&
            !this.calculator.startAtZero;
        let range;
        let start;
        let end;
        if (useTimingBars) {
            range = _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_7__.RequestTimingView.calculateRequestTimeRanges(request, 0)
                .find(data => data.name === "total" /* RequestTimeRangeNames.Total */);
            start = this.timeToPosition(range.start);
            end = this.timeToPosition(range.end);
        }
        else {
            range = this.getSimplifiedBarRange(request, 0);
            start = range.start;
            end = range.end;
        }
        if (end - start < 50) {
            const halfWidth = (end - start) / 2;
            start = start + halfWidth - 25;
            end = end - halfWidth + 25;
        }
        if (event.clientX < this.canvasPosition.left + start || event.clientX > this.canvasPosition.left + end) {
            return null;
        }
        const rowIndex = this.nodes.findIndex(node => node.hovered());
        const barHeight = this.getBarHeight(range.name);
        const y = this.headerHeight + (this.rowHeight * rowIndex - this.scrollTop) + ((this.rowHeight - barHeight) / 2);
        if (event.clientY < this.canvasPosition.top + y || event.clientY > this.canvasPosition.top + y + barHeight) {
            return null;
        }
        const anchorBox = this.element.boxInWindow();
        anchorBox.x += start;
        anchorBox.y += y;
        anchorBox.width = end - start;
        anchorBox.height = barHeight;
        return {
            box: anchorBox,
            show: (popover) => {
                const content = _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_7__.RequestTimingView.createTimingTable(request, this.calculator);
                popover.registerCSSFiles([_networkTimingTable_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]]);
                popover.contentElement.appendChild(content);
                return Promise.resolve(true);
            },
            hide: undefined,
        };
    }
    setHoveredNode(node, highlightInitiatorChain) {
        if (this.hoveredNode) {
            this.hoveredNode.setHovered(false, false);
        }
        this.hoveredNode = node;
        if (this.hoveredNode) {
            this.hoveredNode.setHovered(true, highlightInitiatorChain);
        }
    }
    setSelectedNode(node) {
        if (node && node.dataGrid) {
            node.select();
            node.dataGrid.element.focus();
            return true;
        }
        return false;
    }
    setRowHeight(height) {
        this.rawRowHeight = height;
        this.updateRowHeight();
    }
    updateRowHeight() {
        this.rowHeight = Math.round(this.rawRowHeight * window.devicePixelRatio) / window.devicePixelRatio;
    }
    setHeaderHeight(height) {
        this.headerHeight = height;
    }
    setRightPadding(padding) {
        this.rightPadding = padding;
        this.calculateCanvasSize();
    }
    setCalculator(calculator) {
        this.calculator = calculator;
    }
    getNodeFromPoint(x, y) {
        if (y <= this.headerHeight) {
            return null;
        }
        return this.nodes[Math.floor((this.scrollTop + y - this.headerHeight) / this.rowHeight)];
    }
    scheduleDraw() {
        void coordinator.write('NetworkWaterfallColumn.render', () => this.update());
    }
    update(scrollTop, eventDividers, nodes) {
        if (scrollTop !== undefined && this.scrollTop !== scrollTop) {
            this.popoverHelper.hidePopover();
            this.scrollTop = scrollTop;
        }
        if (nodes) {
            this.nodes = nodes;
            this.calculateCanvasSize();
        }
        if (eventDividers !== undefined) {
            this.eventDividers = eventDividers;
        }
        this.startTime = this.calculator.minimumBoundary();
        this.endTime = this.calculator.maximumBoundary();
        this.resetCanvas();
        this.resetPaths();
        this.textLayers = [];
        this.draw();
    }
    resetCanvas() {
        const ratio = window.devicePixelRatio;
        this.canvas.width = this.offsetWidth * ratio;
        this.canvas.height = this.offsetHeight * ratio;
        this.canvas.style.width = this.offsetWidth + 'px';
        this.canvas.style.height = this.offsetHeight + 'px';
    }
    onResize() {
        super.onResize();
        this.updateRowHeight();
        this.calculateCanvasSize();
        this.scheduleDraw();
    }
    calculateCanvasSize() {
        this.offsetWidth = this.contentElement.offsetWidth - this.rightPadding;
        this.offsetHeight = this.contentElement.offsetHeight;
        this.calculator.setDisplayWidth(this.offsetWidth);
        this.canvasPosition = this.canvas.getBoundingClientRect();
    }
    timeToPosition(time) {
        const availableWidth = this.offsetWidth - this.leftPadding;
        const timeToPixel = availableWidth / (this.endTime - this.startTime);
        return Math.floor(this.leftPadding + (time - this.startTime) * timeToPixel);
    }
    didDrawForTest() {
    }
    draw() {
        const useTimingBars = !_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network-color-code-resource-types').get() &&
            !this.calculator.startAtZero;
        const nodes = this.nodes;
        const context = this.canvas.getContext('2d');
        if (!context) {
            return;
        }
        context.save();
        context.scale(window.devicePixelRatio, window.devicePixelRatio);
        context.translate(0, this.headerHeight);
        context.rect(0, 0, this.offsetWidth, this.offsetHeight);
        context.clip();
        const firstRequestIndex = Math.floor(this.scrollTop / this.rowHeight);
        const lastRequestIndex = Math.min(nodes.length, firstRequestIndex + Math.ceil(this.offsetHeight / this.rowHeight));
        for (let i = firstRequestIndex; i < lastRequestIndex; i++) {
            const rowOffset = this.rowHeight * i;
            const node = nodes[i];
            this.decorateRow(context, node, rowOffset - this.scrollTop);
            let drawNodes = [];
            if (node.hasChildren() && !node.expanded) {
                drawNodes = node.flatChildren();
            }
            drawNodes.push(node);
            for (const drawNode of drawNodes) {
                if (useTimingBars) {
                    this.buildTimingBarLayers(drawNode, rowOffset - this.scrollTop);
                }
                else {
                    this.buildSimplifiedBarLayers(context, drawNode, rowOffset - this.scrollTop);
                }
            }
        }
        this.drawLayers(context, useTimingBars);
        context.save();
        context.fillStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_5__.ThemeSupport.instance().getComputedValue('--sys-color-state-disabled');
        for (const textData of this.textLayers) {
            context.fillText(textData.text, textData.x, textData.y);
        }
        context.restore();
        this.drawEventDividers(context);
        context.restore();
        const freeZoneAtLeft = 75;
        const freeZoneAtRight = 18;
        const dividersData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineGrid.TimelineGrid.calculateGridOffsets(this.calculator);
        _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineGrid.TimelineGrid.drawCanvasGrid(context, dividersData);
        _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineGrid.TimelineGrid.drawCanvasHeaders(context, dividersData, time => this.calculator.formatValue(time, dividersData.precision), this.fontSize, this.headerHeight, freeZoneAtLeft);
        context.save();
        context.scale(window.devicePixelRatio, window.devicePixelRatio);
        context.clearRect(this.offsetWidth - freeZoneAtRight, 0, freeZoneAtRight, this.headerHeight);
        context.restore();
        this.didDrawForTest();
    }
    drawLayers(context, useTimingBars) {
        for (const entry of this.pathForStyle) {
            const style = entry[0];
            const path = entry[1];
            context.save();
            context.beginPath();
            if (style.lineWidth) {
                context.lineWidth = style.lineWidth;
                if (style.borderColor) {
                    context.strokeStyle = style.borderColor;
                }
                context.stroke(path);
            }
            if (style.fillStyle) {
                context.fillStyle =
                    useTimingBars ? _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_5__.ThemeSupport.instance().getComputedValue(style.fillStyle) : style.fillStyle;
                context.fill(path);
            }
            context.restore();
        }
    }
    drawEventDividers(context) {
        context.save();
        context.lineWidth = 1;
        for (const color of this.eventDividers.keys()) {
            context.strokeStyle = color;
            for (const time of this.eventDividers.get(color) || []) {
                context.beginPath();
                const x = this.timeToPosition(time);
                context.moveTo(x, 0);
                context.lineTo(x, this.offsetHeight);
            }
            context.stroke();
        }
        context.restore();
    }
    getBarHeight(type) {
        switch (type) {
            case "connecting" /* RequestTimeRangeNames.Connecting */:
            case "ssl" /* RequestTimeRangeNames.SSL */:
            case "dns" /* RequestTimeRangeNames.DNS */:
            case "proxy" /* RequestTimeRangeNames.Proxy */:
            case "blocking" /* RequestTimeRangeNames.Blocking */:
            case "push" /* RequestTimeRangeNames.Push */:
            case "queueing" /* RequestTimeRangeNames.Queueing */:
                return 7;
            default:
                return 13;
        }
    }
    getSimplifiedBarRange(request, borderOffset) {
        const drawWidth = this.offsetWidth - this.leftPadding;
        const percentages = this.calculator.computeBarGraphPercentages(request);
        return {
            start: this.leftPadding + Math.floor((percentages.start / 100) * drawWidth) + borderOffset,
            mid: this.leftPadding + Math.floor((percentages.middle / 100) * drawWidth) + borderOffset,
            end: this.leftPadding + Math.floor((percentages.end / 100) * drawWidth) + borderOffset,
        };
    }
    buildSimplifiedBarLayers(context, node, y) {
        const request = node.request();
        if (!request) {
            return;
        }
        const borderWidth = 1;
        const borderOffset = borderWidth % 2 === 0 ? 0 : 0.5;
        const ranges = this.getSimplifiedBarRange(request, borderOffset);
        const height = this.getBarHeight();
        y += Math.floor(this.rowHeight / 2 - height / 2 + borderWidth) - borderWidth / 2;
        const waitingStyle = this.styleForWaitingResourceType.get(request.resourceType());
        const waitingPath = this.pathForStyle.get(waitingStyle);
        waitingPath.rect(ranges.start, y, ranges.mid - ranges.start, height - borderWidth);
        const barWidth = Math.max(2, ranges.end - ranges.mid);
        const downloadingStyle = this.styleForDownloadingResourceType.get(request.resourceType());
        const downloadingPath = this.pathForStyle.get(downloadingStyle);
        downloadingPath.rect(ranges.mid, y, barWidth, height - borderWidth);
        let labels = null;
        if (node.hovered()) {
            labels = this.calculator.computeBarGraphLabels(request);
            const barDotLineLength = 10;
            const leftLabelWidth = context.measureText(labels.left).width;
            const rightLabelWidth = context.measureText(labels.right).width;
            const hoverLinePath = this.pathForStyle.get(this.hoverDetailsStyle);
            if (leftLabelWidth < ranges.mid - ranges.start) {
                const midBarX = ranges.start + (ranges.mid - ranges.start - leftLabelWidth) / 2;
                this.textLayers.push({ text: labels.left, x: midBarX, y: y + this.fontSize });
            }
            else if (barDotLineLength + leftLabelWidth + this.leftPadding < ranges.start) {
                this.textLayers.push({ text: labels.left, x: ranges.start - leftLabelWidth - barDotLineLength - 1, y: y + this.fontSize });
                hoverLinePath.moveTo(ranges.start - barDotLineLength, y + Math.floor(height / 2));
                hoverLinePath.arc(ranges.start, y + Math.floor(height / 2), 2, 0, 2 * Math.PI);
                hoverLinePath.moveTo(ranges.start - barDotLineLength, y + Math.floor(height / 2));
                hoverLinePath.lineTo(ranges.start, y + Math.floor(height / 2));
            }
            const endX = ranges.mid + barWidth + borderOffset;
            if (rightLabelWidth < endX - ranges.mid) {
                const midBarX = ranges.mid + (endX - ranges.mid - rightLabelWidth) / 2;
                this.textLayers.push({ text: labels.right, x: midBarX, y: y + this.fontSize });
            }
            else if (endX + barDotLineLength + rightLabelWidth < this.offsetWidth - this.leftPadding) {
                this.textLayers.push({ text: labels.right, x: endX + barDotLineLength + 1, y: y + this.fontSize });
                hoverLinePath.moveTo(endX, y + Math.floor(height / 2));
                hoverLinePath.arc(endX, y + Math.floor(height / 2), 2, 0, 2 * Math.PI);
                hoverLinePath.moveTo(endX, y + Math.floor(height / 2));
                hoverLinePath.lineTo(endX + barDotLineLength, y + Math.floor(height / 2));
            }
        }
        if (!this.calculator.startAtZero) {
            const queueingRange = _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_7__.RequestTimingView.calculateRequestTimeRanges(request, 0)
                .find(data => data.name === "total" /* RequestTimeRangeNames.Total */);
            const leftLabelWidth = labels ? context.measureText(labels.left).width : 0;
            const leftTextPlacedInBar = leftLabelWidth < ranges.mid - ranges.start;
            const wiskerTextPadding = 13;
            const textOffset = (labels && !leftTextPlacedInBar) ? leftLabelWidth + wiskerTextPadding : 0;
            const queueingStart = this.timeToPosition(queueingRange.start);
            if (ranges.start - textOffset > queueingStart) {
                const wiskerPath = this.pathForStyle.get(this.wiskerStyle);
                wiskerPath.moveTo(queueingStart, y + Math.floor(height / 2));
                wiskerPath.lineTo(ranges.start - textOffset, y + Math.floor(height / 2));
                // TODO(allada) This needs to be floored.
                const wiskerHeight = height / 2;
                wiskerPath.moveTo(queueingStart + borderOffset, y + wiskerHeight / 2);
                wiskerPath.lineTo(queueingStart + borderOffset, y + height - wiskerHeight / 2 - 1);
            }
        }
    }
    buildTimingBarLayers(node, y) {
        const request = node.request();
        if (!request) {
            return;
        }
        const ranges = _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_7__.RequestTimingView.calculateRequestTimeRanges(request, 0);
        let index = 0;
        for (const range of ranges) {
            if (range.name === "total" /* RequestTimeRangeNames.Total */ || range.name === "sending" /* RequestTimeRangeNames.Sending */ ||
                range.end - range.start === 0) {
                continue;
            }
            const style = this.styleForTimeRangeName.get(range.name);
            const path = this.pathForStyle.get(style);
            const lineWidth = style.lineWidth || 0;
            const height = this.getBarHeight(range.name);
            const middleBarY = y + Math.floor(this.rowHeight / 2 - height / 2) + lineWidth / 2;
            const start = this.timeToPosition(range.start);
            const end = this.timeToPosition(range.end);
            path.rect(start + (index * BAR_SPACING), middleBarY, end - start, height - lineWidth);
            index++;
        }
    }
    decorateRow(context, node, y) {
        const nodeBgColorId = node.backgroundColor();
        context.save();
        context.beginPath();
        context.fillStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_5__.ThemeSupport.instance().getComputedValue(nodeBgColorId);
        context.rect(0, y, this.offsetWidth, this.rowHeight);
        context.fill();
        context.restore();
    }
}
//# sourceMappingURL=NetworkWaterfallColumn.js.map

/***/ }),

/***/ "./panels/network/RequestInitiatorView.js":
/*!************************************************!*\
  !*** ./panels/network/RequestInitiatorView.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestInitiatorView: () => (/* binding */ RequestInitiatorView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _requestInitiatorView_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./requestInitiatorView.css.js */ "./panels/network/requestInitiatorView.css.js");
/* harmony import */ var _requestInitiatorViewTree_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./requestInitiatorViewTree.css.js */ "./panels/network/requestInitiatorViewTree.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     *@description Text in Request Initiator View of the Network panel
     */
    thisRequestHasNoInitiatorData: 'This request has no initiator data.',
    /**
     *@description Title of a section in Request Initiator view of the Network Panel
     */
    requestCallStack: 'Request call stack',
    /**
     *@description Title of a section in Request Initiator view of the Network Panel
     */
    requestInitiatorChain: 'Request initiator chain',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/network/RequestInitiatorView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class RequestInitiatorView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox {
    linkifier;
    request;
    emptyWidget;
    hasShown;
    constructor(request) {
        super();
        this.element.classList.add('request-initiator-view');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.pane('initiator').track({ resize: true })}`);
        this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.Linkifier.Linkifier();
        this.request = request;
        this.emptyWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.EmptyWidget.EmptyWidget(i18nString(UIStrings.thisRequestHasNoInitiatorData));
        this.emptyWidget.show(this.element);
        this.hasShown = false;
    }
    static createStackTracePreview(request, linkifier, focusableLink) {
        const initiator = request.initiator();
        if (!initiator || !initiator.stack) {
            return null;
        }
        const networkManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.NetworkManager.forRequest(request);
        const target = networkManager ? networkManager.target() : null;
        const stackTrace = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.JSPresentationUtils.buildStackTracePreviewContents(target, linkifier, { stackTrace: initiator.stack, tabStops: focusableLink });
        return stackTrace;
    }
    createTree() {
        const treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutlineInShadow();
        treeOutline.registerCSSFiles([_requestInitiatorViewTree_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]]);
        treeOutline.contentElement.classList.add('request-initiator-view-tree');
        treeOutline.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.tree('initiator-tree')}`);
        return treeOutline;
    }
    buildRequestChainTree(initiatorGraph, title, tree) {
        const root = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(title);
        tree.appendChild(root);
        if (root.titleElement instanceof HTMLElement) {
            root.titleElement.classList.add('request-initiator-view-section-title');
        }
        const initiators = initiatorGraph.initiators;
        let parent = root;
        for (const request of Array.from(initiators).reverse()) {
            const treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(request.url());
            parent.appendChild(treeElement);
            parent.expand();
            parent = treeElement;
        }
        root.expand();
        parent.select();
        const titleElement = parent.titleElement;
        if (titleElement instanceof HTMLElement) {
            titleElement.style.fontWeight = 'bold';
        }
        const initiated = initiatorGraph.initiated;
        this.depthFirstSearchTreeBuilder(initiated, parent, this.request);
        return root;
    }
    depthFirstSearchTreeBuilder(initiated, parentElement, parentRequest) {
        const visited = new Set();
        // this.request should be already in the tree when build initiator part
        visited.add(this.request);
        for (const request of initiated.keys()) {
            if (initiated.get(request) === parentRequest) {
                const treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(request.url());
                parentElement.appendChild(treeElement);
                parentElement.expand();
                // only do dfs when we haven't done one
                if (!visited.has(request)) {
                    visited.add(request);
                    this.depthFirstSearchTreeBuilder(initiated, treeElement, request);
                }
            }
        }
    }
    buildStackTraceSection(content, title, tree) {
        const root = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(title);
        tree.appendChild(root);
        if (root.titleElement instanceof HTMLElement) {
            root.titleElement.classList.add('request-initiator-view-section-title');
        }
        const contentElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(content, false);
        contentElement.selectable = false;
        root.appendChild(contentElement);
        root.expand();
    }
    wasShown() {
        if (this.hasShown) {
            return;
        }
        this.registerCSSFiles([_requestInitiatorView_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]]);
        let initiatorDataPresent = false;
        const containerTree = this.createTree();
        const stackTracePreview = RequestInitiatorView.createStackTracePreview(this.request, this.linkifier, true);
        if (stackTracePreview) {
            initiatorDataPresent = true;
            this.buildStackTraceSection(stackTracePreview.element, i18nString(UIStrings.requestCallStack), containerTree);
        }
        const initiatorGraph = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_2__.NetworkLog.NetworkLog.instance().initiatorGraphForRequest(this.request);
        if (initiatorGraph.initiators.size > 1 || initiatorGraph.initiated.size > 1) {
            initiatorDataPresent = true;
            this.buildRequestChainTree(initiatorGraph, i18nString(UIStrings.requestInitiatorChain), containerTree);
        }
        const firstChild = containerTree.firstChild();
        if (firstChild) {
            firstChild.select(true);
        }
        if (initiatorDataPresent) {
            this.element.appendChild(containerTree.element);
            this.emptyWidget.hideWidget();
        }
        this.hasShown = true;
    }
}
//# sourceMappingURL=RequestInitiatorView.js.map

/***/ }),

/***/ "./panels/network/networkManageCustomHeadersView.css.js":
/*!**************************************************************!*\
  !*** ./panels/network/networkManageCustomHeadersView.css.js ***!
  \**************************************************************/
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
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.custom-headers-list {
  height: 272px;
  width: 250px;
}

.custom-headers-wrapper {
  margin: 10px;
}

.header {
  padding: 0 0 6px;
  font-size: 18px;
  font-weight: normal;
  flex: none;
}

.custom-headers-header {
  padding: 2px;
}

.custom-headers-list-item {
  padding-left: 5px;
}

.editor-container {
  padding: 5px 0 0 5px;
}

.add-button {
  width: 150px;
  margin: auto;
  margin-top: 5px;
}

/*# sourceURL=networkManageCustomHeadersView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/network/networkWaterfallColumn.css.js":
/*!******************************************************!*\
  !*** ./panels/network/networkWaterfallColumn.css.js ***!
  \******************************************************/
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
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.network-waterfall-v-scroll {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  margin-top: 31px;
  z-index: 200;
}

.theme-with-dark-background .network-waterfall-v-scroll {
  /**
  * Waterfall scrollbars are implemented as overflowing elements on top of the
  * scrollable content. The actual content is a viewport without scrollbars.
  * When using a dark theme, we should inform Blink that the content is dark,
  * so that the native scrollbars are colored accordingly.
  */
  background: rgb(0 0 0 / 1%);
}

.network-waterfall-v-scroll.small {
  margin-top: 27px;
}

.network-waterfall-v-scroll-content {
  width: 15px;
  pointer-events: none;
}

/*# sourceURL=networkWaterfallColumn.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/network/requestInitiatorView.css.js":
/*!****************************************************!*\
  !*** ./panels/network/requestInitiatorView.css.js ***!
  \****************************************************/
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
 * Copyright (c) 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.request-initiator-view {
  display: block;
  margin: 6px;
}

/*# sourceURL=requestInitiatorView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/network/requestInitiatorViewTree.css.js":
/*!********************************************************!*\
  !*** ./panels/network/requestInitiatorViewTree.css.js ***!
  \********************************************************/
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
 * Copyright (c) 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.request-initiator-view-tree .fill {
  right: -6px; /* Same as the margin in .request-initiator-view but negative. */
}

.request-initiator-view-section-title {
  font-weight: bold;
  padding: 4px;
}

.request-initiator-view-section-title:focus-visible {
  background-color: var(--sys-color-state-focus-highlight);
}

@media (forced-colors: active) {
  .request-initiator-view-section-title:focus-visible {
    forced-color-adjust: none;
    background-color: Highlight;
    color: HighlightText;
  }
}

/*# sourceURL=requestInitiatorViewTree.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);