"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_network_RequestTimingView_js"],{

/***/ "./panels/network/RequestTimingView.js":
/*!*********************************************!*\
  !*** ./panels/network/RequestTimingView.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionSetupRangeNames: () => (/* binding */ ConnectionSetupRangeNames),
/* harmony export */   RequestTimingView: () => (/* binding */ RequestTimingView),
/* harmony export */   ServiceWorkerRangeNames: () => (/* binding */ ServiceWorkerRangeNames)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */ var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./ui/legacy/components/object_ui/object_ui.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _networkTimingTable_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./networkTimingTable.css.js */ "./panels/network/networkTimingTable.css.js");
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
     *@description Text used to label the time taken to receive an HTTP/2 Push message.
     */
    receivingPush: 'Receiving `Push`',
    /**
     *@description Text in Request Timing View of the Network panel
     */
    queueing: 'Queueing',
    /**
     *@description Text in Request Timing View of the Network panel
     */
    stalled: 'Stalled',
    /**
     *@description Text in Request Timing View of the Network panel
     */
    initialConnection: 'Initial connection',
    /**
     *@description Text in Request Timing View of the Network panel
     */
    dnsLookup: 'DNS Lookup',
    /**
     *@description Text in Request Timing View of the Network panel
     */
    proxyNegotiation: 'Proxy negotiation',
    /**
     *@description Text used to label the time taken to read an HTTP/2 Push message.
     */
    readingPush: 'Reading `Push`',
    /**
     *@description Text in Request Timing View of the Network panel
     */
    contentDownload: 'Content Download',
    /**
     *@description Text in Request Timing View of the Network panel
     */
    requestSent: 'Request sent',
    /**
     *@description Text in Request Timing View of the Network panel
     */
    requestToServiceworker: 'Request to `ServiceWorker`',
    /**
     *@description Text in Request Timing View of the Network panel
     */
    startup: 'Startup',
    /**
     *@description Text in Request Timing View of the Network panel
     */
    respondwith: 'respondWith',
    /**
     *@description Text in Request Timing View of the Network panel
     */
    ssl: 'SSL',
    /**
     *@description Text for sum
     */
    total: 'Total',
    /**
     *@description Text in Request Timing View of the Network panel
     */
    waitingTtfb: 'Waiting for server response',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */
    label: 'Label',
    /**
     *@description Inner element text content in Network Log View Columns of the Network panel
     */
    waterfall: 'Waterfall',
    /**
     *@description Text for the duration of something
     */
    duration: 'Duration',
    /**
     *@description Text of a DOM element in Request Timing View of the Network panel
     *@example {120.39ms} PH1
     */
    queuedAtS: 'Queued at {PH1}',
    /**
     *@description Text of a DOM element in Request Timing View of the Network panel
     *@example {120.39ms} PH1
     */
    startedAtS: 'Started at {PH1}',
    /**
     *@description Text in Request Timing View of the Network panel
     */
    serverPush: 'Server Push',
    /**
     *@description Text of a DOM element in Request Timing View of the Network panel
     */
    resourceScheduling: 'Resource Scheduling',
    /**
     *@description Text in Request Timing View of the Network panel
     */
    connectionStart: 'Connection Start',
    /**
     *@description Text in Request Timing View of the Network panel
     */
    requestresponse: 'Request/Response',
    /**
     *@description Text of a DOM element in Request Timing View of the Network panel
     */
    cautionRequestIsNotFinishedYet: 'CAUTION: request is not finished yet!',
    /**
     *@description Text in Request Timing View of the Network panel
     */
    explanation: 'Explanation',
    /**
     *@description Text of a DOM element in Request Timing View of the Network panel
     */
    serverTiming: 'Server Timing',
    /**
     *@description Text of a DOM element in Request Timing View of the Network panel
     */
    time: 'TIME',
    /**
     *@description Label for the Server Timing API
     */
    theServerTimingApi: 'the Server Timing API',
    /**
     *@description Text to inform about the ServerTiming API, which can be used to report timing information to DevTools about the substeps that the server performed to answer the requests. Timing information is, e.g., the duration of the substep.
     *@example {https://web.dev/custom-metrics/#server-timing-api} PH1
     */
    duringDevelopmentYouCanUseSToAdd: 'During development, you can use {PH1} to add insights into the server-side timing of this request.',
    /**
     *@description Header for last column of network timing tab.
     */
    durationC: 'DURATION',
    /**
     *@description Description for treeitem in ServiceWorker Fetch Details
     */
    originalRequest: 'Original Request',
    /**
     *@description Description for treeitem in ServiceWorker Fetch Details
     */
    responseReceived: 'Response Received',
    /**
     *@description Text for an unspecified service worker response source
     */
    unknown: 'Unknown',
    /**
     *@description Displays how a particular response was fetched
     *@example {Network fetch} PH1
     */
    sourceOfResponseS: 'Source of response: {PH1}',
    /**
     *@description Name of storage cache from which a response was fetched
     *@example {v1} PH1
     */
    cacheStorageCacheNameS: 'Cache storage cache name: {PH1}',
    /**
     *@description Text for unknown cache storage name
     */
    cacheStorageCacheNameUnknown: 'Cache storage cache name: Unknown',
    /**
     *@description Time at which a response was retrieved
     *@example {Fri Apr 10 2020 17:20:27 GMT-0700 (Pacific Daylight Time)} PH1
     */
    retrievalTimeS: 'Retrieval Time: {PH1}',
    /**
     *@description Text used to show that serviceworker fetch response source is ServiceWorker Cache Storage
     */
    serviceworkerCacheStorage: '`ServiceWorker` cache storage',
    /**
     *@description Text used to show that serviceworker fetch response source is HTTP cache
     */
    fromHttpCache: 'From HTTP cache',
    /**
     *@description Text used to show that data was retrieved via a Network fetch
     */
    networkFetch: 'Network fetch',
    /**
     *@description Text used to show that data was retrieved using ServiceWorker fallback code
     */
    fallbackCode: 'Fallback code',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/network/RequestTimingView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class RequestTimingView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox {
    request;
    calculator;
    lastMinimumBoundary;
    tableElement;
    constructor(request, calculator) {
        super();
        this.element.classList.add('resource-timing-view');
        this.request = request;
        this.calculator = calculator;
        this.lastMinimumBoundary = -1;
    }
    static timeRangeTitle(name) {
        switch (name) {
            case "push" /* RequestTimeRangeNames.Push */:
                return i18nString(UIStrings.receivingPush);
            case "queueing" /* RequestTimeRangeNames.Queueing */:
                return i18nString(UIStrings.queueing);
            case "blocking" /* RequestTimeRangeNames.Blocking */:
                return i18nString(UIStrings.stalled);
            case "connecting" /* RequestTimeRangeNames.Connecting */:
                return i18nString(UIStrings.initialConnection);
            case "dns" /* RequestTimeRangeNames.DNS */:
                return i18nString(UIStrings.dnsLookup);
            case "proxy" /* RequestTimeRangeNames.Proxy */:
                return i18nString(UIStrings.proxyNegotiation);
            case "receiving-push" /* RequestTimeRangeNames.ReceivingPush */:
                return i18nString(UIStrings.readingPush);
            case "receiving" /* RequestTimeRangeNames.Receiving */:
                return i18nString(UIStrings.contentDownload);
            case "sending" /* RequestTimeRangeNames.Sending */:
                return i18nString(UIStrings.requestSent);
            case "serviceworker" /* RequestTimeRangeNames.ServiceWorker */:
                return i18nString(UIStrings.requestToServiceworker);
            case "serviceworker-preparation" /* RequestTimeRangeNames.ServiceWorkerPreparation */:
                return i18nString(UIStrings.startup);
            case "serviceworker-respondwith" /* RequestTimeRangeNames.ServiceWorkerRespondWith */:
                return i18nString(UIStrings.respondwith);
            case "ssl" /* RequestTimeRangeNames.SSL */:
                return i18nString(UIStrings.ssl);
            case "total" /* RequestTimeRangeNames.Total */:
                return i18nString(UIStrings.total);
            case "waiting" /* RequestTimeRangeNames.Waiting */:
                return i18nString(UIStrings.waitingTtfb);
            default:
                return name;
        }
    }
    static calculateRequestTimeRanges(request, navigationStart) {
        const result = [];
        function addRange(name, start, end) {
            if (start < Number.MAX_VALUE && start <= end) {
                result.push({ name: name, start: start, end: end });
            }
        }
        function firstPositive(numbers) {
            for (let i = 0; i < numbers.length; ++i) {
                if (numbers[i] > 0) {
                    return numbers[i];
                }
            }
            return undefined;
        }
        function addOffsetRange(name, start, end) {
            if (start >= 0 && end >= 0) {
                addRange(name, startTime + (start / 1000), startTime + (end / 1000));
            }
        }
        // In some situations, argument `start` may come before `startTime` (`timing.requestStart`). This is especially true
        // in cases such as SW static routing API where fields like `workerRouterEvaluationStart` or `workerCacheLookupStart`
        // is set before setting `timing.requestStart`. If the `start` and `end` is known to be a valid value (i.e. not default
        // invalid value -1 or undefined), we allow adding the range.
        function addMaybeNegativeOffsetRange(name, start, end) {
            addRange(name, startTime + (start / 1000), startTime + (end / 1000));
        }
        const timing = request.timing;
        if (!timing) {
            const start = request.issueTime() !== -1 ? request.issueTime() : request.startTime !== -1 ? request.startTime : 0;
            const hasDifferentIssueAndStartTime = request.issueTime() !== -1 && request.startTime !== -1 && request.issueTime() !== request.startTime;
            const middle = (request.responseReceivedTime === -1) ?
                (hasDifferentIssueAndStartTime ? request.startTime : Number.MAX_VALUE) :
                request.responseReceivedTime;
            const end = (request.endTime === -1) ? Number.MAX_VALUE : request.endTime;
            addRange("total" /* RequestTimeRangeNames.Total */, start, end);
            addRange("blocking" /* RequestTimeRangeNames.Blocking */, start, middle);
            const state = request.responseReceivedTime === -1 ? "connecting" /* RequestTimeRangeNames.Connecting */ : "receiving" /* RequestTimeRangeNames.Receiving */;
            addRange(state, middle, end);
            return result;
        }
        const issueTime = request.issueTime();
        const startTime = timing.requestTime;
        const endTime = firstPositive([request.endTime, request.responseReceivedTime]) || startTime;
        addRange("total" /* RequestTimeRangeNames.Total */, issueTime < startTime ? issueTime : startTime, endTime);
        if (timing.pushStart) {
            const pushEnd = timing.pushEnd || endTime;
            // Only show the part of push that happened after the navigation/reload.
            // Pushes that happened on the same connection before we started main request will not be shown.
            if (pushEnd > navigationStart) {
                addRange("push" /* RequestTimeRangeNames.Push */, Math.max(timing.pushStart, navigationStart), pushEnd);
            }
        }
        if (issueTime < startTime) {
            addRange("queueing" /* RequestTimeRangeNames.Queueing */, issueTime, startTime);
        }
        const responseReceived = (request.responseReceivedTime - startTime) * 1000;
        if (request.fetchedViaServiceWorker) {
            addOffsetRange("blocking" /* RequestTimeRangeNames.Blocking */, 0, timing.workerStart);
            addOffsetRange("serviceworker-preparation" /* RequestTimeRangeNames.ServiceWorkerPreparation */, timing.workerStart, timing.workerReady);
            addOffsetRange("serviceworker-respondwith" /* RequestTimeRangeNames.ServiceWorkerRespondWith */, timing.workerFetchStart, timing.workerRespondWithSettled);
            addOffsetRange("serviceworker" /* RequestTimeRangeNames.ServiceWorker */, timing.workerReady, timing.sendEnd);
            addOffsetRange("waiting" /* RequestTimeRangeNames.Waiting */, timing.sendEnd, responseReceived);
        }
        else if (!timing.pushStart) {
            const blockingEnd = firstPositive([timing.dnsStart, timing.connectStart, timing.sendStart, responseReceived]) || 0;
            addOffsetRange("blocking" /* RequestTimeRangeNames.Blocking */, 0, blockingEnd);
            addOffsetRange("proxy" /* RequestTimeRangeNames.Proxy */, timing.proxyStart, timing.proxyEnd);
            addOffsetRange("dns" /* RequestTimeRangeNames.DNS */, timing.dnsStart, timing.dnsEnd);
            addOffsetRange("connecting" /* RequestTimeRangeNames.Connecting */, timing.connectStart, timing.connectEnd);
            addOffsetRange("ssl" /* RequestTimeRangeNames.SSL */, timing.sslStart, timing.sslEnd);
            addOffsetRange("sending" /* RequestTimeRangeNames.Sending */, timing.sendStart, timing.sendEnd);
            addOffsetRange("waiting" /* RequestTimeRangeNames.Waiting */, Math.max(timing.sendEnd, timing.connectEnd, timing.dnsEnd, timing.proxyEnd, blockingEnd), responseReceived);
        }
        const { serviceWorkerRouterInfo } = request;
        if (serviceWorkerRouterInfo) {
            if (timing.workerRouterEvaluationStart) {
                // Depending on the source,the next timestamp will be different. Determine the timestamp by checking
                // the matched and actual source.
                let routerEvaluationEnd = timing.sendStart;
                if (serviceWorkerRouterInfo?.matchedSourceType === "cache" /* Protocol.Network.ServiceWorkerRouterSource.Cache */ &&
                    timing.workerCacheLookupStart) {
                    routerEvaluationEnd = timing.workerCacheLookupStart;
                }
                else if (serviceWorkerRouterInfo?.actualSourceType === "fetch-event" /* Protocol.Network.ServiceWorkerRouterSource.FetchEvent */) {
                    routerEvaluationEnd = timing.workerStart;
                }
                addMaybeNegativeOffsetRange("serviceworker-routerevaluation" /* RequestTimeRangeNames.ServiceWorkerRouterEvaluation */, timing.workerRouterEvaluationStart, routerEvaluationEnd);
            }
            if (timing.workerCacheLookupStart) {
                let cacheLookupEnd = timing.sendStart;
                if (serviceWorkerRouterInfo?.actualSourceType === "cache" /* Protocol.Network.ServiceWorkerRouterSource.Cache */) {
                    cacheLookupEnd = timing.receiveHeadersStart;
                }
                addMaybeNegativeOffsetRange("serviceworker-cachelookup" /* RequestTimeRangeNames.ServiceWorkerCacheLookup */, timing.workerCacheLookupStart, cacheLookupEnd);
            }
        }
        if (request.endTime !== -1) {
            addRange(timing.pushStart ? "receiving-push" /* RequestTimeRangeNames.ReceivingPush */ : "receiving" /* RequestTimeRangeNames.Receiving */, request.responseReceivedTime, endTime);
        }
        return result;
    }
    static createTimingTable(request, calculator) {
        const tableElement = document.createElement('table');
        tableElement.classList.add('network-timing-table');
        tableElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('timing').track({ resize: true })}`);
        const colgroup = tableElement.createChild('colgroup');
        colgroup.createChild('col', 'labels');
        colgroup.createChild('col', 'bars');
        colgroup.createChild('col', 'duration');
        const timeRanges = RequestTimingView.calculateRequestTimeRanges(request, calculator.minimumBoundary());
        const startTime = timeRanges.map(r => r.start).reduce((a, b) => Math.min(a, b));
        const endTime = timeRanges.map(r => r.end).reduce((a, b) => Math.max(a, b));
        const scale = 100 / (endTime - startTime);
        let connectionHeader;
        let serviceworkerHeader;
        let dataHeader;
        let queueingHeader;
        let totalDuration = 0;
        const startTimeHeader = tableElement.createChild('thead', 'network-timing-start');
        const tableHeaderRow = startTimeHeader.createChild('tr');
        const activityHeaderCell = tableHeaderRow.createChild('th');
        activityHeaderCell.createChild('span', 'network-timing-hidden-header').textContent = i18nString(UIStrings.label);
        activityHeaderCell.scope = 'col';
        const waterfallHeaderCell = tableHeaderRow.createChild('th');
        waterfallHeaderCell.createChild('span', 'network-timing-hidden-header').textContent =
            i18nString(UIStrings.waterfall);
        waterfallHeaderCell.scope = 'col';
        const durationHeaderCell = tableHeaderRow.createChild('th');
        durationHeaderCell.createChild('span', 'network-timing-hidden-header').textContent = i18nString(UIStrings.duration);
        durationHeaderCell.scope = 'col';
        const queuedCell = startTimeHeader.createChild('tr').createChild('td');
        const startedCell = startTimeHeader.createChild('tr').createChild('td');
        queuedCell.colSpan = startedCell.colSpan = 3;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(queuedCell, i18nString(UIStrings.queuedAtS, { PH1: calculator.formatValue(request.issueTime(), 2) }));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(startedCell, i18nString(UIStrings.startedAtS, { PH1: calculator.formatValue(request.startTime, 2) }));
        let right;
        for (let i = 0; i < timeRanges.length; ++i) {
            const range = timeRanges[i];
            const rangeName = range.name;
            if (rangeName === "total" /* RequestTimeRangeNames.Total */) {
                totalDuration = range.end - range.start;
                continue;
            }
            if (rangeName === "push" /* RequestTimeRangeNames.Push */) {
                createHeader(i18nString(UIStrings.serverPush));
            }
            else if (rangeName === "queueing" /* RequestTimeRangeNames.Queueing */) {
                if (!queueingHeader) {
                    queueingHeader = createHeader(i18nString(UIStrings.resourceScheduling));
                }
            }
            else if (ConnectionSetupRangeNames.has(rangeName)) {
                if (!connectionHeader) {
                    connectionHeader = createHeader(i18nString(UIStrings.connectionStart));
                }
            }
            else if (ServiceWorkerRangeNames.has(rangeName)) {
                if (!serviceworkerHeader) {
                    serviceworkerHeader = createHeader('Service Worker');
                }
            }
            else {
                if (!dataHeader) {
                    dataHeader = createHeader(i18nString(UIStrings.requestresponse));
                }
            }
            const left = (scale * (range.start - startTime));
            right = (scale * (endTime - range.end));
            const duration = range.end - range.start;
            const tr = tableElement.createChild('tr');
            const timingBarTitleElement = tr.createChild('td');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(timingBarTitleElement, RequestTimingView.timeRangeTitle(rangeName));
            const row = tr.createChild('td').createChild('div', 'network-timing-row');
            const bar = row.createChild('span', 'network-timing-bar ' + rangeName);
            bar.style.left = left + '%';
            bar.style.right = right + '%';
            bar.textContent = '\u200B'; // Important for 0-time items to have 0 width.
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(row, i18nString(UIStrings.startedAtS, { PH1: calculator.formatValue(range.start, 2) }));
            const label = tr.createChild('td').createChild('div', 'network-timing-bar-title');
            label.textContent = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.TimeUtilities.secondsToString(duration, true);
            if (range.name === 'serviceworker-respondwith') {
                timingBarTitleElement.classList.add('network-fetch-timing-bar-clickable');
                tableElement.createChild('tr', 'network-fetch-timing-bar-details');
                timingBarTitleElement.setAttribute('tabindex', '0');
                timingBarTitleElement.setAttribute('role', 'switch');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setChecked(timingBarTitleElement, false);
            }
        }
        if (!request.finished && !request.preserved) {
            const cell = tableElement.createChild('tr').createChild('td', 'caution');
            cell.colSpan = 3;
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(cell, i18nString(UIStrings.cautionRequestIsNotFinishedYet));
        }
        const footer = tableElement.createChild('tr', 'network-timing-footer');
        const note = footer.createChild('td');
        note.colSpan = 1;
        const explanationLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.XLink.XLink.create('https://developer.chrome.com/docs/devtools/network/reference/#timing-explanation', i18nString(UIStrings.explanation), undefined, undefined, 'explanation');
        note.appendChild(explanationLink);
        footer.createChild('td');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(footer.createChild('td'), _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.TimeUtilities.secondsToString(totalDuration, true));
        const serverTimings = request.serverTimings;
        const lastTimingRightEdge = right === undefined ? 100 : right;
        const breakElement = tableElement.createChild('tr', 'network-timing-table-header').createChild('td');
        breakElement.colSpan = 3;
        breakElement.createChild('hr', 'break');
        const serverHeader = tableElement.createChild('tr', 'network-timing-table-header');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(serverHeader.createChild('td'), i18nString(UIStrings.serverTiming));
        serverHeader.createChild('td');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(serverHeader.createChild('td'), i18nString(UIStrings.time));
        if (!serverTimings) {
            const informationRow = tableElement.createChild('tr');
            const information = informationRow.createChild('td');
            information.colSpan = 3;
            const link = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.XLink.XLink.create('https://web.dev/custom-metrics/#server-timing-api', i18nString(UIStrings.theServerTimingApi), undefined, undefined, 'server-timing-api');
            information.appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.duringDevelopmentYouCanUseSToAdd, { PH1: link }));
            return tableElement;
        }
        serverTimings.filter(item => item.metric.toLowerCase() !== 'total')
            .forEach(item => addTiming(item, lastTimingRightEdge));
        serverTimings.filter(item => item.metric.toLowerCase() === 'total')
            .forEach(item => addTiming(item, lastTimingRightEdge));
        return tableElement;
        function addTiming(serverTiming, right) {
            const colorGenerator = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Generator({ min: 0, max: 360, count: 36 }, { min: 50, max: 80, count: undefined }, 80);
            const isTotal = serverTiming.metric.toLowerCase() === 'total';
            const tr = tableElement.createChild('tr', isTotal ? 'network-timing-footer' : 'server-timing-row');
            const metric = tr.createChild('td', 'network-timing-metric');
            const description = serverTiming.description || serverTiming.metric;
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(metric, description);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(metric, description);
            const row = tr.createChild('td').createChild('div', 'network-timing-row');
            if (serverTiming.value === null) {
                return;
            }
            const left = scale * (endTime - startTime - (serverTiming.value / 1000));
            if (left >= 0) { // don't chart values too big or too small
                const bar = row.createChild('span', 'network-timing-bar server-timing');
                bar.style.left = left + '%';
                bar.style.right = right + '%';
                bar.textContent = '\u200B'; // Important for 0-time items to have 0 width.
                if (!isTotal) {
                    bar.style.backgroundColor = colorGenerator.colorForID(serverTiming.metric);
                }
            }
            const label = tr.createChild('td').createChild('div', 'network-timing-bar-title');
            label.textContent = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.TimeUtilities.millisToString(serverTiming.value, true);
        }
        function createHeader(title) {
            const dataHeader = tableElement.createChild('tr', 'network-timing-table-header');
            const headerCell = dataHeader.createChild('td');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(headerCell, title);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsHeading(headerCell, 2);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(dataHeader.createChild('td'), '');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(dataHeader.createChild('td'), i18nString(UIStrings.durationC));
            return dataHeader;
        }
    }
    constructFetchDetailsView() {
        if (!this.tableElement) {
            return;
        }
        const document = this.tableElement.ownerDocument;
        const fetchDetailsElement = document.querySelector('.network-fetch-timing-bar-details');
        if (!fetchDetailsElement) {
            return;
        }
        fetchDetailsElement.classList.add('network-fetch-timing-bar-details-collapsed');
        self.onInvokeElement(this.tableElement, this.onToggleFetchDetails.bind(this, fetchDetailsElement));
        const detailsView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeOutlineInShadow();
        fetchDetailsElement.appendChild(detailsView.element);
        const origRequest = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__.NetworkLog.NetworkLog.instance().originalRequestForURL(this.request.url());
        if (origRequest) {
            const requestObject = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.RemoteObject.RemoteObject.fromLocalObject(origRequest);
            const requestTreeElement = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__.ObjectPropertiesSection.RootElement(requestObject);
            requestTreeElement.title = i18nString(UIStrings.originalRequest);
            detailsView.appendChild(requestTreeElement);
        }
        const response = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__.NetworkLog.NetworkLog.instance().originalResponseForURL(this.request.url());
        if (response) {
            const responseObject = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.RemoteObject.RemoteObject.fromLocalObject(response);
            const responseTreeElement = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__.ObjectPropertiesSection.RootElement(responseObject);
            responseTreeElement.title = i18nString(UIStrings.responseReceived);
            detailsView.appendChild(responseTreeElement);
        }
        const serviceWorkerResponseSource = document.createElement('div');
        serviceWorkerResponseSource.classList.add('network-fetch-details-treeitem');
        let swResponseSourceString = i18nString(UIStrings.unknown);
        const swResponseSource = this.request.serviceWorkerResponseSource();
        if (swResponseSource) {
            swResponseSourceString = this.getLocalizedResponseSourceForCode(swResponseSource);
        }
        serviceWorkerResponseSource.textContent = i18nString(UIStrings.sourceOfResponseS, { PH1: swResponseSourceString });
        const responseSourceTreeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement(serviceWorkerResponseSource);
        detailsView.appendChild(responseSourceTreeElement);
        const cacheNameElement = document.createElement('div');
        cacheNameElement.classList.add('network-fetch-details-treeitem');
        const responseCacheStorageName = this.request.getResponseCacheStorageCacheName();
        if (responseCacheStorageName) {
            cacheNameElement.textContent = i18nString(UIStrings.cacheStorageCacheNameS, { PH1: responseCacheStorageName });
        }
        else {
            cacheNameElement.textContent = i18nString(UIStrings.cacheStorageCacheNameUnknown);
        }
        const cacheNameTreeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement(cacheNameElement);
        detailsView.appendChild(cacheNameTreeElement);
        const retrievalTime = this.request.getResponseRetrievalTime();
        if (retrievalTime) {
            const responseTimeElement = document.createElement('div');
            responseTimeElement.classList.add('network-fetch-details-treeitem');
            responseTimeElement.textContent = i18nString(UIStrings.retrievalTimeS, { PH1: retrievalTime.toString() });
            const responseTimeTreeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement(responseTimeElement);
            detailsView.appendChild(responseTimeTreeElement);
        }
    }
    getLocalizedResponseSourceForCode(swResponseSource) {
        switch (swResponseSource) {
            case "cache-storage" /* Protocol.Network.ServiceWorkerResponseSource.CacheStorage */:
                return i18nString(UIStrings.serviceworkerCacheStorage);
            case "http-cache" /* Protocol.Network.ServiceWorkerResponseSource.HttpCache */:
                return i18nString(UIStrings.fromHttpCache);
            case "network" /* Protocol.Network.ServiceWorkerResponseSource.Network */:
                return i18nString(UIStrings.networkFetch);
            default:
                return i18nString(UIStrings.fallbackCode);
        }
    }
    onToggleFetchDetails(fetchDetailsElement, event) {
        if (!event.target) {
            return;
        }
        const target = event.target;
        if (target.classList.contains('network-fetch-timing-bar-clickable')) {
            if (fetchDetailsElement.classList.contains('network-fetch-timing-bar-details-collapsed')) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.NetworkPanelServiceWorkerRespondWith);
            }
            const expanded = target.getAttribute('aria-checked') === 'true';
            target.setAttribute('aria-checked', String(!expanded));
            fetchDetailsElement.classList.toggle('network-fetch-timing-bar-details-collapsed');
            fetchDetailsElement.classList.toggle('network-fetch-timing-bar-details-expanded');
        }
    }
    wasShown() {
        this.request.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.TimingChanged, this.refresh, this);
        this.request.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.FinishedLoading, this.refresh, this);
        this.calculator.addEventListener("BoundariesChanged" /* Events.BoundariesChanged */, this.boundaryChanged, this);
        this.registerCSSFiles([_networkTimingTable_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]]);
        this.refresh();
    }
    willHide() {
        this.request.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.TimingChanged, this.refresh, this);
        this.request.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.FinishedLoading, this.refresh, this);
        this.calculator.removeEventListener("BoundariesChanged" /* Events.BoundariesChanged */, this.boundaryChanged, this);
    }
    refresh() {
        if (this.tableElement) {
            this.tableElement.remove();
        }
        this.tableElement = RequestTimingView.createTimingTable(this.request, this.calculator);
        this.tableElement.classList.add('resource-timing-table');
        this.element.appendChild(this.tableElement);
        if (this.request.fetchedViaServiceWorker) {
            this.constructFetchDetailsView();
        }
    }
    boundaryChanged() {
        const minimumBoundary = this.calculator.minimumBoundary();
        if (minimumBoundary !== this.lastMinimumBoundary) {
            this.lastMinimumBoundary = minimumBoundary;
            this.refresh();
        }
    }
}
const ServiceWorkerRangeNames = new Set([
    "serviceworker" /* RequestTimeRangeNames.ServiceWorker */,
    "serviceworker-preparation" /* RequestTimeRangeNames.ServiceWorkerPreparation */,
    "serviceworker-respondwith" /* RequestTimeRangeNames.ServiceWorkerRespondWith */,
    "serviceworker-routerevaluation" /* RequestTimeRangeNames.ServiceWorkerRouterEvaluation */,
    "serviceworker-cachelookup" /* RequestTimeRangeNames.ServiceWorkerCacheLookup */,
]);
const ConnectionSetupRangeNames = new Set([
    "queueing" /* RequestTimeRangeNames.Queueing */,
    "blocking" /* RequestTimeRangeNames.Blocking */,
    "connecting" /* RequestTimeRangeNames.Connecting */,
    "dns" /* RequestTimeRangeNames.DNS */,
    "proxy" /* RequestTimeRangeNames.Proxy */,
    "ssl" /* RequestTimeRangeNames.SSL */,
]);
//# sourceMappingURL=RequestTimingView.js.map

/***/ }),

/***/ "./panels/network/networkTimingTable.css.js":
/*!**************************************************!*\
  !*** ./panels/network/networkTimingTable.css.js ***!
  \**************************************************/
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
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.network-timing-table {
  width: 380px;
  border-spacing: 0;
  padding-left: 10px;
  padding-right: 10px;
  line-height: initial;
  table-layout: fixed;
}

.network-timing-start {
  border-top: 5px solid transparent;
}

.network-timing-start th span.network-timing-hidden-header {
  height: 1px;
  width: 1px;
  position: absolute;
  overflow: hidden;
}

.network-timing-table-header td,
.network-timing-footer td {
  border-top: 10px solid transparent;
}

.network-timing-table-header td {
  color: var(--sys-color-token-subtle);
}

.network-timing-table td {
  padding: 4px 0;
}

.network-timing-table-header td:last-child {
  text-align: right;
}

.network-timing-footer td:last-child {
  font-weight: bold;
  text-align: right;
}

table.network-timing-table > tr:not(.network-timing-table-header):not(.network-timing-footer) > td:first-child {
  padding-left: 12px;
}

.network-timing-table col.labels {
  width: 156px;
}

.network-timing-table col.duration {
  width: 80px;
}

.network-timing-table td.caution {
  font-weight: bold;
  color: var(--issue-color-yellow);
  padding: 2px 0;
}

.network-timing-table hr.break {
  background-color: var(--sys-color-divider);
  border: none;
  height: 1px;
}

.network-timing-row {
  position: relative;
  height: 15px;
}

.network-timing-bar {
  position: absolute;
  min-width: 1px;
  top: 0;
  bottom: 0;
}

.network-timing-bar-title {
  color: var(--sys-color-on-surface);
  white-space: nowrap;
  text-align: right;
}

.network-timing-bar.queueing,
.network-timing-bar.total {
  border: 1px solid var(--sys-color-token-subtle);
}

.network-timing-bar.blocking,
.-theme-preserve {
  background-color: var(--network-overview-blocking); /* stylelint-disable-line plugin/use_theme_colors */
}

.network-timing-bar.proxy,
.-theme-preserve {
  background-color: var(--override-network-overview-proxy);
}

.network-timing-bar.dns,
.-theme-preserve {
  background-color: var(--sys-color-cyan);
}

.network-timing-bar.connecting,
.network-timing-bar.serviceworker,
.network-timing-bar.serviceworker-preparation,
.network-timing-bar.serviceworker-routerevaluation,
.network-timing-bar.serviceworker-cachelookup,
.-theme-preserve {
  background-color: var(--network-overview-service-worker); /* stylelint-disable-line plugin/use_theme_colors */
}

.network-timing-bar.ssl,
.-theme-preserve {
  background-color: var(--network-overview-ssl); /* stylelint-disable-line plugin/use_theme_colors */
}

.network-timing-bar.serviceworker-respondwith,
.-theme-preserve {
  background-color: var(--network-overview-service-worker-respond-with); /* stylelint-disable-line plugin/use_theme_colors */
}

.network-fetch-timing-bar-clickable::before {
  user-select: none;
  mask-image: var(--image-file-triangle-right);
  float: left;
  width: 14px;
  height: 14px;
  margin-right: 2px;
  content: "";
  position: relative;
  background-color: var(--icon-default);
  transition: transform 200ms;
}

.network-fetch-timing-bar-clickable {
  position: relative;
  left: -12px;
}

.network-fetch-timing-bar-clickable:focus-visible {
  background-color: var(--sys-color-state-focus-highlight);
}

.network-fetch-timing-bar-clickable[aria-checked="true"]::before {
  transform: rotate(90deg);
}

.network-fetch-timing-bar-details-collapsed {
  display: none;
}

.network-fetch-timing-bar-details-expanded {
  display: block;
}

.network-fetch-timing-bar-details {
  padding-left: 11px;
  width: fit-content;
}

.network-fetch-details-treeitem {
  width: max-content;
}

.network-timing-bar.sending,
.-theme-preserve {
  background-color: var(--override-network-overview-sending);
}

.network-timing-bar.waiting,
.-theme-preserve {
  background-color: var(--network-overview-waiting); /* stylelint-disable-line plugin/use_theme_colors */
}

.network-timing-bar.receiving,
.network-timing-bar.receiving-push,
.-theme-preserve {
  background-color: var(--network-overview-receiving); /* stylelint-disable-line plugin/use_theme_colors */
}

.network-timing-bar.push,
.-theme-preserve {
  background-color: var(--network-overview-push); /* stylelint-disable-line plugin/use_theme_colors */
}

.server-timing-row:nth-child(even) {
  background: var(--sys-color-surface1);
}

.network-timing-bar.server-timing,
.-theme-preserve {
  background-color: var(--sys-color-neutral-container);
}

.network-timing-table td.network-timing-metric {
  white-space: nowrap;
  max-width: 150px;
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.network-timing-bar.proxy,
.network-timing-bar.dns,
.network-timing-bar.ssl,
.network-timing-bar.connecting,
.network-timing-bar.blocking {
  height: 10px;
  margin: auto;
}

@media (forced-colors: active) {
  .network-timing-bar.blocking,
  .network-timing-bar.proxy,
  .network-timing-bar.dns,
  .network-timing-bar.connecting,
  .network-timing-bar.serviceworker,
  .network-timing-bar.serviceworker-preparation,
  .network-timing-bar.ssl,
  .network-timing-bar.sending,
  .network-timing-bar.waiting,
  .network-timing-bar.receiving,
  .network-timing-bar.receiving-push,
  .network-timing-bar.push,
  .network-timing-bar.server-timing,
  .-theme-preserve {
    forced-color-adjust: none;
  }

  .network-timing-table-header td,
  .network-timing-footer td {
    forced-color-adjust: none;
    color: ButtonText;
  }
}

/*# sourceURL=networkTimingTable.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);