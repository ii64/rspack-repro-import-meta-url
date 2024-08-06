"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_RequestTimingView_js"], {
"./panels/network/RequestTimingView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ConnectionSetupRangeNames: function() { return ConnectionSetupRangeNames; },
  RequestTimingView: function() { return RequestTimingView; },
  ServiceWorkerRangeNames: function() { return ServiceWorkerRangeNames; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./ui/legacy/components/object_ui/object_ui.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _networkTimingTable_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./networkTimingTable.css.js */ "./panels/network/networkTimingTable.css.js");
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
 */ function _assert_this_initialized(self1) {
    if (self1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self1;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self1, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self1);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}









var UIStrings = {
    /**
     *@description Text used to label the time taken to receive an HTTP/2 Push message.
     */ receivingPush: 'Receiving `Push`',
    /**
     *@description Text in Request Timing View of the Network panel
     */ queueing: 'Queueing',
    /**
     *@description Text in Request Timing View of the Network panel
     */ stalled: 'Stalled',
    /**
     *@description Text in Request Timing View of the Network panel
     */ initialConnection: 'Initial connection',
    /**
     *@description Text in Request Timing View of the Network panel
     */ dnsLookup: 'DNS Lookup',
    /**
     *@description Text in Request Timing View of the Network panel
     */ proxyNegotiation: 'Proxy negotiation',
    /**
     *@description Text used to label the time taken to read an HTTP/2 Push message.
     */ readingPush: 'Reading `Push`',
    /**
     *@description Text in Request Timing View of the Network panel
     */ contentDownload: 'Content Download',
    /**
     *@description Text in Request Timing View of the Network panel
     */ requestSent: 'Request sent',
    /**
     *@description Text in Request Timing View of the Network panel
     */ requestToServiceworker: 'Request to `ServiceWorker`',
    /**
     *@description Text in Request Timing View of the Network panel
     */ startup: 'Startup',
    /**
     *@description Text in Request Timing View of the Network panel
     */ respondwith: 'respondWith',
    /**
     *@description Text in Request Timing View of the Network panel
     */ ssl: 'SSL',
    /**
     *@description Text for sum
     */ total: 'Total',
    /**
     *@description Text in Request Timing View of the Network panel
     */ waitingTtfb: 'Waiting for server response',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */ label: 'Label',
    /**
     *@description Inner element text content in Network Log View Columns of the Network panel
     */ waterfall: 'Waterfall',
    /**
     *@description Text for the duration of something
     */ duration: 'Duration',
    /**
     *@description Text of a DOM element in Request Timing View of the Network panel
     *@example {120.39ms} PH1
     */ queuedAtS: 'Queued at {PH1}',
    /**
     *@description Text of a DOM element in Request Timing View of the Network panel
     *@example {120.39ms} PH1
     */ startedAtS: 'Started at {PH1}',
    /**
     *@description Text in Request Timing View of the Network panel
     */ serverPush: 'Server Push',
    /**
     *@description Text of a DOM element in Request Timing View of the Network panel
     */ resourceScheduling: 'Resource Scheduling',
    /**
     *@description Text in Request Timing View of the Network panel
     */ connectionStart: 'Connection Start',
    /**
     *@description Text in Request Timing View of the Network panel
     */ requestresponse: 'Request/Response',
    /**
     *@description Text of a DOM element in Request Timing View of the Network panel
     */ cautionRequestIsNotFinishedYet: 'CAUTION: request is not finished yet!',
    /**
     *@description Text in Request Timing View of the Network panel
     */ explanation: 'Explanation',
    /**
     *@description Text of a DOM element in Request Timing View of the Network panel
     */ serverTiming: 'Server Timing',
    /**
     *@description Text of a DOM element in Request Timing View of the Network panel
     */ time: 'TIME',
    /**
     *@description Label for the Server Timing API
     */ theServerTimingApi: 'the Server Timing API',
    /**
     *@description Text to inform about the ServerTiming API, which can be used to report timing information to DevTools about the substeps that the server performed to answer the requests. Timing information is, e.g., the duration of the substep.
     *@example {https://web.dev/custom-metrics/#server-timing-api} PH1
     */ duringDevelopmentYouCanUseSToAdd: 'During development, you can use {PH1} to add insights into the server-side timing of this request.',
    /**
     *@description Header for last column of network timing tab.
     */ durationC: 'DURATION',
    /**
     *@description Description for treeitem in ServiceWorker Fetch Details
     */ originalRequest: 'Original Request',
    /**
     *@description Description for treeitem in ServiceWorker Fetch Details
     */ responseReceived: 'Response Received',
    /**
     *@description Text for an unspecified service worker response source
     */ unknown: 'Unknown',
    /**
     *@description Displays how a particular response was fetched
     *@example {Network fetch} PH1
     */ sourceOfResponseS: 'Source of response: {PH1}',
    /**
     *@description Name of storage cache from which a response was fetched
     *@example {v1} PH1
     */ cacheStorageCacheNameS: 'Cache storage cache name: {PH1}',
    /**
     *@description Text for unknown cache storage name
     */ cacheStorageCacheNameUnknown: 'Cache storage cache name: Unknown',
    /**
     *@description Time at which a response was retrieved
     *@example {Fri Apr 10 2020 17:20:27 GMT-0700 (Pacific Daylight Time)} PH1
     */ retrievalTimeS: 'Retrieval Time: {PH1}',
    /**
     *@description Text used to show that serviceworker fetch response source is ServiceWorker Cache Storage
     */ serviceworkerCacheStorage: '`ServiceWorker` cache storage',
    /**
     *@description Text used to show that serviceworker fetch response source is HTTP cache
     */ fromHttpCache: 'From HTTP cache',
    /**
     *@description Text used to show that data was retrieved via a Network fetch
     */ networkFetch: 'Network fetch',
    /**
     *@description Text used to show that data was retrieved using ServiceWorker fallback code
     */ fallbackCode: 'Fallback code'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/network/RequestTimingView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var RequestTimingView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(RequestTimingView, _UI_Widget_VBox);
    var _super = _create_super(RequestTimingView);
    function RequestTimingView(request, calculator) {
        _class_call_check(this, RequestTimingView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "request", void 0);
        _define_property(_assert_this_initialized(_this), "calculator", void 0);
        _define_property(_assert_this_initialized(_this), "lastMinimumBoundary", void 0);
        _define_property(_assert_this_initialized(_this), "tableElement", void 0);
        _this.element.classList.add('resource-timing-view');
        _this.request = request;
        _this.calculator = calculator;
        _this.lastMinimumBoundary = -1;
        return _this;
    }
    _create_class(RequestTimingView, [
        {
            key: "constructFetchDetailsView",
            value: function constructFetchDetailsView() {
                if (!this.tableElement) {
                    return;
                }
                var document1 = this.tableElement.ownerDocument;
                var fetchDetailsElement = document1.querySelector('.network-fetch-timing-bar-details');
                if (!fetchDetailsElement) {
                    return;
                }
                fetchDetailsElement.classList.add('network-fetch-timing-bar-details-collapsed');
                self.onInvokeElement(this.tableElement, this.onToggleFetchDetails.bind(this, fetchDetailsElement));
                var detailsView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeOutlineInShadow();
                fetchDetailsElement.appendChild(detailsView.element);
                var origRequest = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__.NetworkLog.NetworkLog.instance().originalRequestForURL(this.request.url());
                if (origRequest) {
                    var requestObject = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.RemoteObject.RemoteObject.fromLocalObject(origRequest);
                    var requestTreeElement = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__.ObjectPropertiesSection.RootElement(requestObject);
                    requestTreeElement.title = i18nString(UIStrings.originalRequest);
                    detailsView.appendChild(requestTreeElement);
                }
                var response = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__.NetworkLog.NetworkLog.instance().originalResponseForURL(this.request.url());
                if (response) {
                    var responseObject = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.RemoteObject.RemoteObject.fromLocalObject(response);
                    var responseTreeElement = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__.ObjectPropertiesSection.RootElement(responseObject);
                    responseTreeElement.title = i18nString(UIStrings.responseReceived);
                    detailsView.appendChild(responseTreeElement);
                }
                var serviceWorkerResponseSource = document1.createElement('div');
                serviceWorkerResponseSource.classList.add('network-fetch-details-treeitem');
                var swResponseSourceString = i18nString(UIStrings.unknown);
                var swResponseSource = this.request.serviceWorkerResponseSource();
                if (swResponseSource) {
                    swResponseSourceString = this.getLocalizedResponseSourceForCode(swResponseSource);
                }
                serviceWorkerResponseSource.textContent = i18nString(UIStrings.sourceOfResponseS, {
                    PH1: swResponseSourceString
                });
                var responseSourceTreeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement(serviceWorkerResponseSource);
                detailsView.appendChild(responseSourceTreeElement);
                var cacheNameElement = document1.createElement('div');
                cacheNameElement.classList.add('network-fetch-details-treeitem');
                var responseCacheStorageName = this.request.getResponseCacheStorageCacheName();
                if (responseCacheStorageName) {
                    cacheNameElement.textContent = i18nString(UIStrings.cacheStorageCacheNameS, {
                        PH1: responseCacheStorageName
                    });
                } else {
                    cacheNameElement.textContent = i18nString(UIStrings.cacheStorageCacheNameUnknown);
                }
                var cacheNameTreeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement(cacheNameElement);
                detailsView.appendChild(cacheNameTreeElement);
                var retrievalTime = this.request.getResponseRetrievalTime();
                if (retrievalTime) {
                    var responseTimeElement = document1.createElement('div');
                    responseTimeElement.classList.add('network-fetch-details-treeitem');
                    responseTimeElement.textContent = i18nString(UIStrings.retrievalTimeS, {
                        PH1: retrievalTime.toString()
                    });
                    var responseTimeTreeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement(responseTimeElement);
                    detailsView.appendChild(responseTimeTreeElement);
                }
            }
        },
        {
            key: "getLocalizedResponseSourceForCode",
            value: function getLocalizedResponseSourceForCode(swResponseSource) {
                switch(swResponseSource){
                    case "cache-storage" /* Protocol.Network.ServiceWorkerResponseSource.CacheStorage */ :
                        return i18nString(UIStrings.serviceworkerCacheStorage);
                    case "http-cache" /* Protocol.Network.ServiceWorkerResponseSource.HttpCache */ :
                        return i18nString(UIStrings.fromHttpCache);
                    case "network" /* Protocol.Network.ServiceWorkerResponseSource.Network */ :
                        return i18nString(UIStrings.networkFetch);
                    default:
                        return i18nString(UIStrings.fallbackCode);
                }
            }
        },
        {
            key: "onToggleFetchDetails",
            value: function onToggleFetchDetails(fetchDetailsElement, event) {
                if (!event.target) {
                    return;
                }
                var target = event.target;
                if (target.classList.contains('network-fetch-timing-bar-clickable')) {
                    if (fetchDetailsElement.classList.contains('network-fetch-timing-bar-details-collapsed')) {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.NetworkPanelServiceWorkerRespondWith);
                    }
                    var expanded = target.getAttribute('aria-checked') === 'true';
                    target.setAttribute('aria-checked', String(!expanded));
                    fetchDetailsElement.classList.toggle('network-fetch-timing-bar-details-collapsed');
                    fetchDetailsElement.classList.toggle('network-fetch-timing-bar-details-expanded');
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                this.request.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.TimingChanged, this.refresh, this);
                this.request.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.FinishedLoading, this.refresh, this);
                this.calculator.addEventListener("BoundariesChanged" /* Events.BoundariesChanged */ , this.boundaryChanged, this);
                this.registerCSSFiles([
                    _networkTimingTable_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]
                ]);
                this.refresh();
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                this.request.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.TimingChanged, this.refresh, this);
                this.request.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.FinishedLoading, this.refresh, this);
                this.calculator.removeEventListener("BoundariesChanged" /* Events.BoundariesChanged */ , this.boundaryChanged, this);
            }
        },
        {
            key: "refresh",
            value: function refresh() {
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
        },
        {
            key: "boundaryChanged",
            value: function boundaryChanged() {
                var minimumBoundary = this.calculator.minimumBoundary();
                if (minimumBoundary !== this.lastMinimumBoundary) {
                    this.lastMinimumBoundary = minimumBoundary;
                    this.refresh();
                }
            }
        }
    ], [
        {
            key: "timeRangeTitle",
            value: function timeRangeTitle(name) {
                switch(name){
                    case "push" /* RequestTimeRangeNames.Push */ :
                        return i18nString(UIStrings.receivingPush);
                    case "queueing" /* RequestTimeRangeNames.Queueing */ :
                        return i18nString(UIStrings.queueing);
                    case "blocking" /* RequestTimeRangeNames.Blocking */ :
                        return i18nString(UIStrings.stalled);
                    case "connecting" /* RequestTimeRangeNames.Connecting */ :
                        return i18nString(UIStrings.initialConnection);
                    case "dns" /* RequestTimeRangeNames.DNS */ :
                        return i18nString(UIStrings.dnsLookup);
                    case "proxy" /* RequestTimeRangeNames.Proxy */ :
                        return i18nString(UIStrings.proxyNegotiation);
                    case "receiving-push" /* RequestTimeRangeNames.ReceivingPush */ :
                        return i18nString(UIStrings.readingPush);
                    case "receiving" /* RequestTimeRangeNames.Receiving */ :
                        return i18nString(UIStrings.contentDownload);
                    case "sending" /* RequestTimeRangeNames.Sending */ :
                        return i18nString(UIStrings.requestSent);
                    case "serviceworker" /* RequestTimeRangeNames.ServiceWorker */ :
                        return i18nString(UIStrings.requestToServiceworker);
                    case "serviceworker-preparation" /* RequestTimeRangeNames.ServiceWorkerPreparation */ :
                        return i18nString(UIStrings.startup);
                    case "serviceworker-respondwith" /* RequestTimeRangeNames.ServiceWorkerRespondWith */ :
                        return i18nString(UIStrings.respondwith);
                    case "ssl" /* RequestTimeRangeNames.SSL */ :
                        return i18nString(UIStrings.ssl);
                    case "total" /* RequestTimeRangeNames.Total */ :
                        return i18nString(UIStrings.total);
                    case "waiting" /* RequestTimeRangeNames.Waiting */ :
                        return i18nString(UIStrings.waitingTtfb);
                    default:
                        return name;
                }
            }
        },
        {
            key: "calculateRequestTimeRanges",
            value: function calculateRequestTimeRanges(request, navigationStart) {
                var result = [];
                function addRange(name, start, end) {
                    if (start < Number.MAX_VALUE && start <= end) {
                        result.push({
                            name: name,
                            start: start,
                            end: end
                        });
                    }
                }
                function firstPositive(numbers) {
                    for(var i = 0; i < numbers.length; ++i){
                        if (numbers[i] > 0) {
                            return numbers[i];
                        }
                    }
                    return undefined;
                }
                function addOffsetRange(name, start, end) {
                    if (start >= 0 && end >= 0) {
                        addRange(name, startTime + start / 1000, startTime + end / 1000);
                    }
                }
                // In some situations, argument `start` may come before `startTime` (`timing.requestStart`). This is especially true
                // in cases such as SW static routing API where fields like `workerRouterEvaluationStart` or `workerCacheLookupStart`
                // is set before setting `timing.requestStart`. If the `start` and `end` is known to be a valid value (i.e. not default
                // invalid value -1 or undefined), we allow adding the range.
                function addMaybeNegativeOffsetRange(name, start, end) {
                    addRange(name, startTime + start / 1000, startTime + end / 1000);
                }
                var timing = request.timing;
                if (!timing) {
                    var start = request.issueTime() !== -1 ? request.issueTime() : request.startTime !== -1 ? request.startTime : 0;
                    var hasDifferentIssueAndStartTime = request.issueTime() !== -1 && request.startTime !== -1 && request.issueTime() !== request.startTime;
                    var middle = request.responseReceivedTime === -1 ? hasDifferentIssueAndStartTime ? request.startTime : Number.MAX_VALUE : request.responseReceivedTime;
                    var end = request.endTime === -1 ? Number.MAX_VALUE : request.endTime;
                    addRange("total" /* RequestTimeRangeNames.Total */ , start, end);
                    addRange("blocking" /* RequestTimeRangeNames.Blocking */ , start, middle);
                    var state = request.responseReceivedTime === -1 ? "connecting" /* RequestTimeRangeNames.Connecting */  : "receiving" /* RequestTimeRangeNames.Receiving */ ;
                    addRange(state, middle, end);
                    return result;
                }
                var issueTime = request.issueTime();
                var startTime = timing.requestTime;
                var endTime = firstPositive([
                    request.endTime,
                    request.responseReceivedTime
                ]) || startTime;
                addRange("total" /* RequestTimeRangeNames.Total */ , issueTime < startTime ? issueTime : startTime, endTime);
                if (timing.pushStart) {
                    var pushEnd = timing.pushEnd || endTime;
                    // Only show the part of push that happened after the navigation/reload.
                    // Pushes that happened on the same connection before we started main request will not be shown.
                    if (pushEnd > navigationStart) {
                        addRange("push" /* RequestTimeRangeNames.Push */ , Math.max(timing.pushStart, navigationStart), pushEnd);
                    }
                }
                if (issueTime < startTime) {
                    addRange("queueing" /* RequestTimeRangeNames.Queueing */ , issueTime, startTime);
                }
                var responseReceived = (request.responseReceivedTime - startTime) * 1000;
                if (request.fetchedViaServiceWorker) {
                    addOffsetRange("blocking" /* RequestTimeRangeNames.Blocking */ , 0, timing.workerStart);
                    addOffsetRange("serviceworker-preparation" /* RequestTimeRangeNames.ServiceWorkerPreparation */ , timing.workerStart, timing.workerReady);
                    addOffsetRange("serviceworker-respondwith" /* RequestTimeRangeNames.ServiceWorkerRespondWith */ , timing.workerFetchStart, timing.workerRespondWithSettled);
                    addOffsetRange("serviceworker" /* RequestTimeRangeNames.ServiceWorker */ , timing.workerReady, timing.sendEnd);
                    addOffsetRange("waiting" /* RequestTimeRangeNames.Waiting */ , timing.sendEnd, responseReceived);
                } else if (!timing.pushStart) {
                    var blockingEnd = firstPositive([
                        timing.dnsStart,
                        timing.connectStart,
                        timing.sendStart,
                        responseReceived
                    ]) || 0;
                    addOffsetRange("blocking" /* RequestTimeRangeNames.Blocking */ , 0, blockingEnd);
                    addOffsetRange("proxy" /* RequestTimeRangeNames.Proxy */ , timing.proxyStart, timing.proxyEnd);
                    addOffsetRange("dns" /* RequestTimeRangeNames.DNS */ , timing.dnsStart, timing.dnsEnd);
                    addOffsetRange("connecting" /* RequestTimeRangeNames.Connecting */ , timing.connectStart, timing.connectEnd);
                    addOffsetRange("ssl" /* RequestTimeRangeNames.SSL */ , timing.sslStart, timing.sslEnd);
                    addOffsetRange("sending" /* RequestTimeRangeNames.Sending */ , timing.sendStart, timing.sendEnd);
                    addOffsetRange("waiting" /* RequestTimeRangeNames.Waiting */ , Math.max(timing.sendEnd, timing.connectEnd, timing.dnsEnd, timing.proxyEnd, blockingEnd), responseReceived);
                }
                var serviceWorkerRouterInfo = request.serviceWorkerRouterInfo;
                if (serviceWorkerRouterInfo) {
                    if (timing.workerRouterEvaluationStart) {
                        // Depending on the source,the next timestamp will be different. Determine the timestamp by checking
                        // the matched and actual source.
                        var routerEvaluationEnd = timing.sendStart;
                        if ((serviceWorkerRouterInfo === null || serviceWorkerRouterInfo === void 0 ? void 0 : serviceWorkerRouterInfo.matchedSourceType) === "cache" /* Protocol.Network.ServiceWorkerRouterSource.Cache */  && timing.workerCacheLookupStart) {
                            routerEvaluationEnd = timing.workerCacheLookupStart;
                        } else if ((serviceWorkerRouterInfo === null || serviceWorkerRouterInfo === void 0 ? void 0 : serviceWorkerRouterInfo.actualSourceType) === "fetch-event" /* Protocol.Network.ServiceWorkerRouterSource.FetchEvent */ ) {
                            routerEvaluationEnd = timing.workerStart;
                        }
                        addMaybeNegativeOffsetRange("serviceworker-routerevaluation" /* RequestTimeRangeNames.ServiceWorkerRouterEvaluation */ , timing.workerRouterEvaluationStart, routerEvaluationEnd);
                    }
                    if (timing.workerCacheLookupStart) {
                        var cacheLookupEnd = timing.sendStart;
                        if ((serviceWorkerRouterInfo === null || serviceWorkerRouterInfo === void 0 ? void 0 : serviceWorkerRouterInfo.actualSourceType) === "cache" /* Protocol.Network.ServiceWorkerRouterSource.Cache */ ) {
                            cacheLookupEnd = timing.receiveHeadersStart;
                        }
                        addMaybeNegativeOffsetRange("serviceworker-cachelookup" /* RequestTimeRangeNames.ServiceWorkerCacheLookup */ , timing.workerCacheLookupStart, cacheLookupEnd);
                    }
                }
                if (request.endTime !== -1) {
                    addRange(timing.pushStart ? "receiving-push" /* RequestTimeRangeNames.ReceivingPush */  : "receiving" /* RequestTimeRangeNames.Receiving */ , request.responseReceivedTime, endTime);
                }
                return result;
            }
        },
        {
            key: "createTimingTable",
            value: function createTimingTable(request, calculator) {
                var tableElement = document.createElement('table');
                tableElement.classList.add('network-timing-table');
                tableElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('timing').track({
                    resize: true
                })));
                var colgroup = tableElement.createChild('colgroup');
                colgroup.createChild('col', 'labels');
                colgroup.createChild('col', 'bars');
                colgroup.createChild('col', 'duration');
                var timeRanges = RequestTimingView.calculateRequestTimeRanges(request, calculator.minimumBoundary());
                var startTime = timeRanges.map(function(r) {
                    return r.start;
                }).reduce(function(a, b) {
                    return Math.min(a, b);
                });
                var endTime = timeRanges.map(function(r) {
                    return r.end;
                }).reduce(function(a, b) {
                    return Math.max(a, b);
                });
                var scale = 100 / (endTime - startTime);
                var connectionHeader;
                var serviceworkerHeader;
                var dataHeader;
                var queueingHeader;
                var totalDuration = 0;
                var startTimeHeader = tableElement.createChild('thead', 'network-timing-start');
                var tableHeaderRow = startTimeHeader.createChild('tr');
                var activityHeaderCell = tableHeaderRow.createChild('th');
                activityHeaderCell.createChild('span', 'network-timing-hidden-header').textContent = i18nString(UIStrings.label);
                activityHeaderCell.scope = 'col';
                var waterfallHeaderCell = tableHeaderRow.createChild('th');
                waterfallHeaderCell.createChild('span', 'network-timing-hidden-header').textContent = i18nString(UIStrings.waterfall);
                waterfallHeaderCell.scope = 'col';
                var durationHeaderCell = tableHeaderRow.createChild('th');
                durationHeaderCell.createChild('span', 'network-timing-hidden-header').textContent = i18nString(UIStrings.duration);
                durationHeaderCell.scope = 'col';
                var queuedCell = startTimeHeader.createChild('tr').createChild('td');
                var startedCell = startTimeHeader.createChild('tr').createChild('td');
                queuedCell.colSpan = startedCell.colSpan = 3;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(queuedCell, i18nString(UIStrings.queuedAtS, {
                    PH1: calculator.formatValue(request.issueTime(), 2)
                }));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(startedCell, i18nString(UIStrings.startedAtS, {
                    PH1: calculator.formatValue(request.startTime, 2)
                }));
                var right;
                for(var i = 0; i < timeRanges.length; ++i){
                    var range = timeRanges[i];
                    var rangeName = range.name;
                    if (rangeName === "total" /* RequestTimeRangeNames.Total */ ) {
                        totalDuration = range.end - range.start;
                        continue;
                    }
                    if (rangeName === "push" /* RequestTimeRangeNames.Push */ ) {
                        createHeader(i18nString(UIStrings.serverPush));
                    } else if (rangeName === "queueing" /* RequestTimeRangeNames.Queueing */ ) {
                        if (!queueingHeader) {
                            queueingHeader = createHeader(i18nString(UIStrings.resourceScheduling));
                        }
                    } else if (ConnectionSetupRangeNames.has(rangeName)) {
                        if (!connectionHeader) {
                            connectionHeader = createHeader(i18nString(UIStrings.connectionStart));
                        }
                    } else if (ServiceWorkerRangeNames.has(rangeName)) {
                        if (!serviceworkerHeader) {
                            serviceworkerHeader = createHeader('Service Worker');
                        }
                    } else {
                        if (!dataHeader) {
                            dataHeader = createHeader(i18nString(UIStrings.requestresponse));
                        }
                    }
                    var left = scale * (range.start - startTime);
                    right = scale * (endTime - range.end);
                    var duration = range.end - range.start;
                    var tr = tableElement.createChild('tr');
                    var timingBarTitleElement = tr.createChild('td');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(timingBarTitleElement, RequestTimingView.timeRangeTitle(rangeName));
                    var row = tr.createChild('td').createChild('div', 'network-timing-row');
                    var bar = row.createChild('span', 'network-timing-bar ' + rangeName);
                    bar.style.left = left + '%';
                    bar.style.right = right + '%';
                    bar.textContent = '\u200B'; // Important for 0-time items to have 0 width.
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(row, i18nString(UIStrings.startedAtS, {
                        PH1: calculator.formatValue(range.start, 2)
                    }));
                    var label = tr.createChild('td').createChild('div', 'network-timing-bar-title');
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
                    var cell = tableElement.createChild('tr').createChild('td', 'caution');
                    cell.colSpan = 3;
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(cell, i18nString(UIStrings.cautionRequestIsNotFinishedYet));
                }
                var footer = tableElement.createChild('tr', 'network-timing-footer');
                var note = footer.createChild('td');
                note.colSpan = 1;
                var explanationLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.XLink.XLink.create('https://developer.chrome.com/docs/devtools/network/reference/#timing-explanation', i18nString(UIStrings.explanation), undefined, undefined, 'explanation');
                note.appendChild(explanationLink);
                footer.createChild('td');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(footer.createChild('td'), _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.TimeUtilities.secondsToString(totalDuration, true));
                var serverTimings = request.serverTimings;
                var lastTimingRightEdge = right === undefined ? 100 : right;
                var breakElement = tableElement.createChild('tr', 'network-timing-table-header').createChild('td');
                breakElement.colSpan = 3;
                breakElement.createChild('hr', 'break');
                var serverHeader = tableElement.createChild('tr', 'network-timing-table-header');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(serverHeader.createChild('td'), i18nString(UIStrings.serverTiming));
                serverHeader.createChild('td');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(serverHeader.createChild('td'), i18nString(UIStrings.time));
                if (!serverTimings) {
                    var informationRow = tableElement.createChild('tr');
                    var information = informationRow.createChild('td');
                    information.colSpan = 3;
                    var link = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.XLink.XLink.create('https://web.dev/custom-metrics/#server-timing-api', i18nString(UIStrings.theServerTimingApi), undefined, undefined, 'server-timing-api');
                    information.appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.duringDevelopmentYouCanUseSToAdd, {
                        PH1: link
                    }));
                    return tableElement;
                }
                serverTimings.filter(function(item) {
                    return item.metric.toLowerCase() !== 'total';
                }).forEach(function(item) {
                    return addTiming(item, lastTimingRightEdge);
                });
                serverTimings.filter(function(item) {
                    return item.metric.toLowerCase() === 'total';
                }).forEach(function(item) {
                    return addTiming(item, lastTimingRightEdge);
                });
                return tableElement;
                function addTiming(serverTiming, right) {
                    var colorGenerator = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Generator({
                        min: 0,
                        max: 360,
                        count: 36
                    }, {
                        min: 50,
                        max: 80,
                        count: undefined
                    }, 80);
                    var isTotal = serverTiming.metric.toLowerCase() === 'total';
                    var tr = tableElement.createChild('tr', isTotal ? 'network-timing-footer' : 'server-timing-row');
                    var metric = tr.createChild('td', 'network-timing-metric');
                    var description = serverTiming.description || serverTiming.metric;
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(metric, description);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(metric, description);
                    var row = tr.createChild('td').createChild('div', 'network-timing-row');
                    if (serverTiming.value === null) {
                        return;
                    }
                    var left = scale * (endTime - startTime - serverTiming.value / 1000);
                    if (left >= 0) {
                        var bar = row.createChild('span', 'network-timing-bar server-timing');
                        bar.style.left = left + '%';
                        bar.style.right = right + '%';
                        bar.textContent = '\u200B'; // Important for 0-time items to have 0 width.
                        if (!isTotal) {
                            bar.style.backgroundColor = colorGenerator.colorForID(serverTiming.metric);
                        }
                    }
                    var label = tr.createChild('td').createChild('div', 'network-timing-bar-title');
                    label.textContent = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.TimeUtilities.millisToString(serverTiming.value, true);
                }
                function createHeader(title) {
                    var dataHeader = tableElement.createChild('tr', 'network-timing-table-header');
                    var headerCell = dataHeader.createChild('td');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(headerCell, title);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsHeading(headerCell, 2);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(dataHeader.createChild('td'), '');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(dataHeader.createChild('td'), i18nString(UIStrings.durationC));
                    return dataHeader;
                }
            }
        }
    ]);
    return RequestTimingView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox);
var ServiceWorkerRangeNames = new Set([
    "serviceworker" /* RequestTimeRangeNames.ServiceWorker */ ,
    "serviceworker-preparation" /* RequestTimeRangeNames.ServiceWorkerPreparation */ ,
    "serviceworker-respondwith" /* RequestTimeRangeNames.ServiceWorkerRespondWith */ ,
    "serviceworker-routerevaluation" /* RequestTimeRangeNames.ServiceWorkerRouterEvaluation */ ,
    "serviceworker-cachelookup" /* RequestTimeRangeNames.ServiceWorkerCacheLookup */ 
]);
var ConnectionSetupRangeNames = new Set([
    "queueing" /* RequestTimeRangeNames.Queueing */ ,
    "blocking" /* RequestTimeRangeNames.Blocking */ ,
    "connecting" /* RequestTimeRangeNames.Connecting */ ,
    "dns" /* RequestTimeRangeNames.DNS */ ,
    "proxy" /* RequestTimeRangeNames.Proxy */ ,
    "ssl" /* RequestTimeRangeNames.SSL */ 
]); //# sourceMappingURL=RequestTimingView.js.map


}),
"./panels/network/networkTimingTable.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.network-timing-table {\n  width: 380px;\n  border-spacing: 0;\n  padding-left: 10px;\n  padding-right: 10px;\n  line-height: initial;\n  table-layout: fixed;\n}\n\n.network-timing-start {\n  border-top: 5px solid transparent;\n}\n\n.network-timing-start th span.network-timing-hidden-header {\n  height: 1px;\n  width: 1px;\n  position: absolute;\n  overflow: hidden;\n}\n\n.network-timing-table-header td,\n.network-timing-footer td {\n  border-top: 10px solid transparent;\n}\n\n.network-timing-table-header td {\n  color: var(--sys-color-token-subtle);\n}\n\n.network-timing-table td {\n  padding: 4px 0;\n}\n\n.network-timing-table-header td:last-child {\n  text-align: right;\n}\n\n.network-timing-footer td:last-child {\n  font-weight: bold;\n  text-align: right;\n}\n\ntable.network-timing-table > tr:not(.network-timing-table-header):not(.network-timing-footer) > td:first-child {\n  padding-left: 12px;\n}\n\n.network-timing-table col.labels {\n  width: 156px;\n}\n\n.network-timing-table col.duration {\n  width: 80px;\n}\n\n.network-timing-table td.caution {\n  font-weight: bold;\n  color: var(--issue-color-yellow);\n  padding: 2px 0;\n}\n\n.network-timing-table hr.break {\n  background-color: var(--sys-color-divider);\n  border: none;\n  height: 1px;\n}\n\n.network-timing-row {\n  position: relative;\n  height: 15px;\n}\n\n.network-timing-bar {\n  position: absolute;\n  min-width: 1px;\n  top: 0;\n  bottom: 0;\n}\n\n.network-timing-bar-title {\n  color: var(--sys-color-on-surface);\n  white-space: nowrap;\n  text-align: right;\n}\n\n.network-timing-bar.queueing,\n.network-timing-bar.total {\n  border: 1px solid var(--sys-color-token-subtle);\n}\n\n.network-timing-bar.blocking,\n.-theme-preserve {\n  background-color: var(--network-overview-blocking); /* stylelint-disable-line plugin/use_theme_colors */\n}\n\n.network-timing-bar.proxy,\n.-theme-preserve {\n  background-color: var(--override-network-overview-proxy);\n}\n\n.network-timing-bar.dns,\n.-theme-preserve {\n  background-color: var(--sys-color-cyan);\n}\n\n.network-timing-bar.connecting,\n.network-timing-bar.serviceworker,\n.network-timing-bar.serviceworker-preparation,\n.network-timing-bar.serviceworker-routerevaluation,\n.network-timing-bar.serviceworker-cachelookup,\n.-theme-preserve {\n  background-color: var(--network-overview-service-worker); /* stylelint-disable-line plugin/use_theme_colors */\n}\n\n.network-timing-bar.ssl,\n.-theme-preserve {\n  background-color: var(--network-overview-ssl); /* stylelint-disable-line plugin/use_theme_colors */\n}\n\n.network-timing-bar.serviceworker-respondwith,\n.-theme-preserve {\n  background-color: var(--network-overview-service-worker-respond-with); /* stylelint-disable-line plugin/use_theme_colors */\n}\n\n.network-fetch-timing-bar-clickable::before {\n  user-select: none;\n  mask-image: var(--image-file-triangle-right);\n  float: left;\n  width: 14px;\n  height: 14px;\n  margin-right: 2px;\n  content: "";\n  position: relative;\n  background-color: var(--icon-default);\n  transition: transform 200ms;\n}\n\n.network-fetch-timing-bar-clickable {\n  position: relative;\n  left: -12px;\n}\n\n.network-fetch-timing-bar-clickable:focus-visible {\n  background-color: var(--sys-color-state-focus-highlight);\n}\n\n.network-fetch-timing-bar-clickable[aria-checked="true"]::before {\n  transform: rotate(90deg);\n}\n\n.network-fetch-timing-bar-details-collapsed {\n  display: none;\n}\n\n.network-fetch-timing-bar-details-expanded {\n  display: block;\n}\n\n.network-fetch-timing-bar-details {\n  padding-left: 11px;\n  width: fit-content;\n}\n\n.network-fetch-details-treeitem {\n  width: max-content;\n}\n\n.network-timing-bar.sending,\n.-theme-preserve {\n  background-color: var(--override-network-overview-sending);\n}\n\n.network-timing-bar.waiting,\n.-theme-preserve {\n  background-color: var(--network-overview-waiting); /* stylelint-disable-line plugin/use_theme_colors */\n}\n\n.network-timing-bar.receiving,\n.network-timing-bar.receiving-push,\n.-theme-preserve {\n  background-color: var(--network-overview-receiving); /* stylelint-disable-line plugin/use_theme_colors */\n}\n\n.network-timing-bar.push,\n.-theme-preserve {\n  background-color: var(--network-overview-push); /* stylelint-disable-line plugin/use_theme_colors */\n}\n\n.server-timing-row:nth-child(even) {\n  background: var(--sys-color-surface1);\n}\n\n.network-timing-bar.server-timing,\n.-theme-preserve {\n  background-color: var(--sys-color-neutral-container);\n}\n\n.network-timing-table td.network-timing-metric {\n  white-space: nowrap;\n  max-width: 150px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n.network-timing-bar.proxy,\n.network-timing-bar.dns,\n.network-timing-bar.ssl,\n.network-timing-bar.connecting,\n.network-timing-bar.blocking {\n  height: 10px;\n  margin: auto;\n}\n\n@media (forced-colors: active) {\n  .network-timing-bar.blocking,\n  .network-timing-bar.proxy,\n  .network-timing-bar.dns,\n  .network-timing-bar.connecting,\n  .network-timing-bar.serviceworker,\n  .network-timing-bar.serviceworker-preparation,\n  .network-timing-bar.ssl,\n  .network-timing-bar.sending,\n  .network-timing-bar.waiting,\n  .network-timing-bar.receiving,\n  .network-timing-bar.receiving-push,\n  .network-timing-bar.push,\n  .network-timing-bar.server-timing,\n  .-theme-preserve {\n    forced-color-adjust: none;\n  }\n\n  .network-timing-table-header td,\n  .network-timing-footer td {\n    forced-color-adjust: none;\n    color: ButtonText;\n  }\n}\n\n/*# sourceURL=networkTimingTable.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);