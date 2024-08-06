"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_network_test_runner_network_test_runner_js-ui_components_report_view_repor-e60557"], {
"./legacy_test_runner/network_test_runner/network_test_runner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NetworkTestRunner: function() { return NetworkTestRunner; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_har_har_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/har/har.js */ "./models/har/har.js");
/* harmony import */var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */var _panels_network_network_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/network/network.js */ "./panels/network/network.js");
/* harmony import */var _console_test_runner_console_test_runner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../console_test_runner/console_test_runner.js */ "./legacy_test_runner/console_test_runner/console_test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__);
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var NetworkTestRunner = {};
NetworkTestRunner.waitForRequestResponse = function(request) {
    if (request.responseReceivedTime !== -1) {
        return Promise.resolve(request);
    }
    return _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.waitForEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.Events.RequestUpdated, _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.networkManager, function(updateRequest) {
        return updateRequest === request && request.responseReceivedTime !== -1;
    });
};
NetworkTestRunner.waitForNetworkLogViewNodeForRequest = function(request) {
    var networkLogView = _panels_network_network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkPanel.NetworkPanel.instance().networkLogView;
    var node = networkLogView.nodeForRequest(request);
    if (node) {
        return Promise.resolve(node);
    }
    console.assert(networkLogView.staleRequests.has(request));
    return _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addSnifferPromise(networkLogView, 'didRefreshForTest').then(function() {
        var node = networkLogView.nodeForRequest(request);
        console.assert(node);
        return node;
    });
};
NetworkTestRunner.waitForWebsocketFrameReceived = function(wsRequest, message) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = wsRequest.frames()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var frame = _step.value;
            if (checkFrame(frame)) {
                return Promise.resolve(frame);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.waitForEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkRequest.Events.WebsocketFrameAdded, wsRequest, checkFrame);
    function checkFrame(frame) {
        return frame.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkRequest.WebSocketFrameType.Receive && frame.text === message;
    }
};
NetworkTestRunner.recordNetwork = function() {
    _panels_network_network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkPanel.NetworkPanel.instance().networkLogView.setRecording(true);
};
NetworkTestRunner.networkWaterfallColumn = function() {
    return _panels_network_network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkPanel.NetworkPanel.instance().networkLogView.columns().waterfallColumn;
};
NetworkTestRunner.networkRequests = function() {
    return Array.from(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_2__.NetworkLog.NetworkLog.instance().requests());
};
NetworkTestRunner.dumpNetworkRequests = function() {
    var requests = NetworkTestRunner.networkRequests();
    requests.sort(function(a, b) {
        return a.url().localeCompare(b.url());
    });
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('resources count = ' + requests.length);
    for(i = 0; i < requests.length; i++){
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult(requests[i].url());
    }
};
NetworkTestRunner.dumpNetworkRequestsWithSignedExchangeInfo = function() {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_2__.NetworkLog.NetworkLog.instance().requests()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var request = _step.value;
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult("* ".concat(request.url()));
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult("  failed: ".concat(Boolean(request.failed)));
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult("  statusCode: ".concat(request.statusCode));
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult("  resourceType: ".concat(request.resourceType().name()));
            if (request.signedExchangeInfo()) {
                var _request_signedExchangeInfo, _request_signedExchangeInfo1, _request_signedExchangeInfo2;
                _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('  SignedExchangeInfo');
                var header = (_request_signedExchangeInfo = request.signedExchangeInfo()) === null || _request_signedExchangeInfo === void 0 ? void 0 : _request_signedExchangeInfo.header;
                if (header) {
                    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult("    Request URL: ".concat(header.requestUrl));
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = header.signatures[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var signature = _step1.value;
                            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult("    Certificate URL: ".concat(signature.certUrl));
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                }
                var securityDetails = (_request_signedExchangeInfo1 = request.signedExchangeInfo()) === null || _request_signedExchangeInfo1 === void 0 ? void 0 : _request_signedExchangeInfo1.securityDetails;
                if (securityDetails) {
                    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult("    Certificate Subject: ".concat(securityDetails.subjectName));
                    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult("    Certificate Issuer: ".concat(securityDetails.issuer));
                }
                var errors = (_request_signedExchangeInfo2 = request.signedExchangeInfo()) === null || _request_signedExchangeInfo2 === void 0 ? void 0 : _request_signedExchangeInfo2.errors;
                if (errors) {
                    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                    try {
                        for(var _iterator2 = errors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                            var errorMessage = _step2.value;
                            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult("    Error: ".concat(JSON.stringify(errorMessage)));
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                _iterator2.return();
                            }
                        } finally{
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};
NetworkTestRunner.findRequestsByURLPattern = function(urlPattern) {
    return NetworkTestRunner.networkRequests().filter(function(value) {
        return urlPattern.test(value.url());
    });
};
NetworkTestRunner.makeSimpleXHR = function(method, url, async, callback) {
    NetworkTestRunner.makeXHR(method, url, async, undefined, undefined, [], false, undefined, undefined, callback);
};
NetworkTestRunner.makeSimpleXHRWithPayload = function(method, url, async, payload, callback) {
    NetworkTestRunner.makeXHR(method, url, async, undefined, undefined, [], false, payload, undefined, callback);
};
NetworkTestRunner.makeXHRWithTypedArrayPayload = function(method, url, async, payload, callback) {
    var args = {};
    args.typedArrayPayload = new TextDecoder('utf-8').decode(payload);
    NetworkTestRunner.makeXHRImpl(method, url, async, args, callback);
};
NetworkTestRunner.makeXHR = function(method, url, async, user, password, headers, withCredentials, payload, type, callback) {
    var args = {};
    args.user = user;
    args.password = password;
    args.headers = headers;
    args.withCredentials = withCredentials;
    args.payload = payload;
    args.type = type;
    NetworkTestRunner.makeXHRImpl(method, url, async, args, callback);
};
NetworkTestRunner.makeXHRImpl = function(method, url, async, args, callback) {
    args.method = method;
    args.url = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.url(url);
    args.async = async;
    var jsonArgs = JSON.stringify(args).replace(/\"/g, '\\"');
    function innerCallback(msg) {
        if (msg.messageText.indexOf('XHR loaded') !== -1) {
            if (callback) {
                callback();
            }
        } else {
            _console_test_runner_console_test_runner_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleTestRunner.addConsoleSniffer(innerCallback);
        }
    }
    _console_test_runner_console_test_runner_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleTestRunner.addConsoleSniffer(innerCallback);
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.evaluateInPageAnonymously('makeXHRForJSONArguments("' + jsonArgs + '")');
};
NetworkTestRunner.makeFetch = function(url, requestInitializer, callback) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.callFunctionInPageAsync('makeFetch', [
        url,
        requestInitializer
    ]).then(callback);
};
NetworkTestRunner.makeFetchInWorker = function(url, requestInitializer, callback) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.callFunctionInPageAsync('makeFetchInWorker', [
        url,
        requestInitializer
    ]).then(callback);
};
NetworkTestRunner.clearNetworkCache = function() {
    // This turns cache off and then on, effectively clearning the memory cache.
    return Promise.all([
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.NetworkAgent.clearBrowserCache(),
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.NetworkAgent.setCacheDisabled(true).then(function() {
            return _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.NetworkAgent.setCacheDisabled(false);
        })
    ]);
};
NetworkTestRunner.HARPropertyFormatters = {
    bodySize: 'formatAsTypeName',
    compression: 'formatAsTypeName',
    connection: 'formatAsTypeName',
    headers: 'formatAsTypeName',
    headersSize: 'formatAsTypeName',
    id: 'formatAsTypeName',
    onContentLoad: 'formatAsTypeName',
    onLoad: 'formatAsTypeName',
    receive: 'formatAsTypeName',
    startedDateTime: 'formatAsRecentTime',
    time: 'formatAsTypeName',
    timings: 'formatAsTypeName',
    version: 'formatAsTypeName',
    wait: 'formatAsTypeName',
    _transferSize: 'formatAsTypeName',
    _error: 'skip',
    _initiator: 'formatAsTypeName',
    _priority: 'formatAsTypeName'
};
NetworkTestRunner.HARPropertyFormattersWithSize = JSON.parse(JSON.stringify(NetworkTestRunner.HARPropertyFormatters));
NetworkTestRunner.HARPropertyFormattersWithSize.size = 'formatAsTypeName';
NetworkTestRunner.buildHARLog = _models_har_har_js__WEBPACK_IMPORTED_MODULE_1__.Log.Log.build;
NetworkTestRunner.buildHARLogEntry = _models_har_har_js__WEBPACK_IMPORTED_MODULE_1__.Log.Entry.build;
NetworkTestRunner.writeHARLog = _models_har_har_js__WEBPACK_IMPORTED_MODULE_1__.Writer.Writer.write;
NetworkTestRunner.networkLog = function() {
    return _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_2__.NetworkLog.NetworkLog.instance();
};
NetworkTestRunner.NetworkLogEvents = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_2__.NetworkLog.Events;
_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.deprecatedInitAsync("\n  let lastXHRIndex = 0;\n\n  function xhrLoadedCallback() {\n    console.log('XHR loaded: ' + ++lastXHRIndex);\n  }\n\n  function makeSimpleXHR(method, url, async, callback) {\n    makeSimpleXHRWithPayload(method, url, async, null, callback);\n  }\n\n  function makeSimpleXHRWithPayload(method, url, async, payload, callback) {\n    makeXHR(method, url, async, undefined, undefined, [], false, payload, undefined, callback);\n  }\n\n  function makeXHR(method, url, async, user, password, headers, withCredentials, payload, type, callback) {\n    let xhr = new XMLHttpRequest();\n\n    if (type == undefined)\n      xhr.responseType = '';\n    else\n      xhr.responseType = type;\n\n    xhr.onreadystatechange = function() {\n      if (xhr.readyState === XMLHttpRequest.DONE) {\n        if (typeof callback === 'function')\n          callback();\n      }\n    };\n\n    xhr.open(method, url, async, user, password);\n    xhr.withCredentials = withCredentials;\n\n    for (let i = 0; i < headers.length; ++i)\n      xhr.setRequestHeader(headers[i][0], headers[i][1]);\n\n    try { xhr.send(payload); } catch (e) {}\n  }\n\n  function makeXHRForJSONArguments(jsonArgs) {\n    let args = JSON.parse(jsonArgs);\n    let payload = args.payload;\n\n    if (args.typedArrayPayload)\n      payload = new TextEncoder('utf-8').encode(args.typedArrayPayload);\n\n    makeXHR(\n      args.method,\n      args.url,\n      args.async,\n      args.user,\n      args.password,\n      args.headers || [],\n      args.withCredentials,\n      payload,\n      args.type,\n      xhrLoadedCallback\n    );\n  }\n\n  function makeFetch(url, requestInitializer) {\n    return fetch(url, requestInitializer).then(res => {\n      res.text();\n      return res;\n    }).catch(e => e);\n  }\n\n  function makeFetchInWorker(url, requestInitializer) {\n    return new Promise(resolve => {\n      let worker = new Worker('/devtools/network/resources/fetch-worker.js');\n\n      worker.onmessage = event => {\n        resolve(event.data);\n      };\n\n      worker.postMessage({\n        url: url,\n        init: requestInitializer\n      });\n    });\n  }\n");


}),
"./panels/network/network.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BinaryResourceView: function() { return /* reexport module object */ _BinaryResourceView_js__WEBPACK_IMPORTED_MODULE_0__; },
  BlockedURLsPane: function() { return /* reexport module object */ _BlockedURLsPane_js__WEBPACK_IMPORTED_MODULE_1__; },
  EventSourceMessagesView: function() { return /* reexport module object */ _EventSourceMessagesView_js__WEBPACK_IMPORTED_MODULE_2__; },
  NetworkConfigView: function() { return /* reexport module object */ _NetworkConfigView_js__WEBPACK_IMPORTED_MODULE_3__; },
  NetworkDataGridNode: function() { return /* reexport module object */ _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__; },
  NetworkFrameGrouper: function() { return /* reexport module object */ _NetworkFrameGrouper_js__WEBPACK_IMPORTED_MODULE_9__; },
  NetworkItemView: function() { return /* reexport module object */ _NetworkItemView_js__WEBPACK_IMPORTED_MODULE_5__; },
  NetworkLogView: function() { return /* reexport module object */ _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_7__; },
  NetworkLogViewColumns: function() { return /* reexport module object */ _NetworkLogViewColumns_js__WEBPACK_IMPORTED_MODULE_8__; },
  NetworkManageCustomHeadersView: function() { return /* reexport module object */ _NetworkManageCustomHeadersView_js__WEBPACK_IMPORTED_MODULE_10__; },
  NetworkOverview: function() { return /* reexport module object */ _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_21__; },
  NetworkPanel: function() { return /* reexport module object */ _NetworkPanel_js__WEBPACK_IMPORTED_MODULE_22__; },
  NetworkSearchScope: function() { return /* reexport module object */ _NetworkSearchScope_js__WEBPACK_IMPORTED_MODULE_11__; },
  NetworkTimeCalculator: function() { return /* reexport module object */ _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__; },
  NetworkWaterfallColumn: function() { return /* reexport module object */ _NetworkWaterfallColumn_js__WEBPACK_IMPORTED_MODULE_12__; },
  RequestCookiesView: function() { return /* reexport module object */ _RequestCookiesView_js__WEBPACK_IMPORTED_MODULE_13__; },
  RequestHTMLView: function() { return /* reexport module object */ _RequestHTMLView_js__WEBPACK_IMPORTED_MODULE_14__; },
  RequestInitiatorView: function() { return /* reexport module object */ _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_15__; },
  RequestPayloadView: function() { return /* reexport module object */ _RequestPayloadView_js__WEBPACK_IMPORTED_MODULE_23__; },
  RequestPreviewView: function() { return /* reexport module object */ _RequestPreviewView_js__WEBPACK_IMPORTED_MODULE_17__; },
  RequestResponseView: function() { return /* reexport module object */ _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_16__; },
  RequestTimingView: function() { return /* reexport module object */ _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_18__; },
  ResourceWebSocketFrameView: function() { return /* reexport module object */ _ResourceWebSocketFrameView_js__WEBPACK_IMPORTED_MODULE_19__; },
  SignedExchangeInfoView: function() { return /* reexport module object */ _SignedExchangeInfoView_js__WEBPACK_IMPORTED_MODULE_20__; }
});
/* harmony import */var _BinaryResourceView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BinaryResourceView.js */ "./panels/network/BinaryResourceView.js");
/* harmony import */var _BlockedURLsPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockedURLsPane.js */ "./panels/network/BlockedURLsPane.js");
/* harmony import */var _EventSourceMessagesView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventSourceMessagesView.js */ "./panels/network/EventSourceMessagesView.js");
/* harmony import */var _NetworkConfigView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NetworkConfigView.js */ "./panels/network/NetworkConfigView.js");
/* harmony import */var _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NetworkDataGridNode.js */ "./panels/network/NetworkDataGridNode.js");
/* harmony import */var _NetworkItemView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NetworkItemView.js */ "./panels/network/NetworkItemView.js");
/* harmony import */var _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NetworkTimeCalculator.js */ "./panels/network/NetworkTimeCalculator.js");
/* harmony import */var _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NetworkLogView.js */ "./panels/network/NetworkLogView.js");
/* harmony import */var _NetworkLogViewColumns_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NetworkLogViewColumns.js */ "./panels/network/NetworkLogViewColumns.js");
/* harmony import */var _NetworkFrameGrouper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NetworkFrameGrouper.js */ "./panels/network/NetworkFrameGrouper.js");
/* harmony import */var _NetworkManageCustomHeadersView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NetworkManageCustomHeadersView.js */ "./panels/network/NetworkManageCustomHeadersView.js");
/* harmony import */var _NetworkSearchScope_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NetworkSearchScope.js */ "./panels/network/NetworkSearchScope.js");
/* harmony import */var _NetworkWaterfallColumn_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NetworkWaterfallColumn.js */ "./panels/network/NetworkWaterfallColumn.js");
/* harmony import */var _RequestCookiesView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RequestCookiesView.js */ "./panels/network/RequestCookiesView.js");
/* harmony import */var _RequestHTMLView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RequestHTMLView.js */ "./panels/network/RequestHTMLView.js");
/* harmony import */var _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RequestInitiatorView.js */ "./panels/network/RequestInitiatorView.js");
/* harmony import */var _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./RequestResponseView.js */ "./panels/network/RequestResponseView.js");
/* harmony import */var _RequestPreviewView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./RequestPreviewView.js */ "./panels/network/RequestPreviewView.js");
/* harmony import */var _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./RequestTimingView.js */ "./panels/network/RequestTimingView.js");
/* harmony import */var _ResourceWebSocketFrameView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ResourceWebSocketFrameView.js */ "./panels/network/ResourceWebSocketFrameView.js");
/* harmony import */var _SignedExchangeInfoView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SignedExchangeInfoView.js */ "./panels/network/SignedExchangeInfoView.js");
/* harmony import */var _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./NetworkOverview.js */ "./panels/network/NetworkOverview.js");
/* harmony import */var _NetworkPanel_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./NetworkPanel.js */ "./panels/network/NetworkPanel.js");
/* harmony import */var _RequestPayloadView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./RequestPayloadView.js */ "./panels/network/RequestPayloadView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.















































 //# sourceMappingURL=network.js.map


}),
"./ui/components/report_view/report_view.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ReportView: function() { return /* reexport module object */ _ReportView_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _ReportView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportView.js */ "./ui/components/report_view/ReportView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=report_view.js.map


}),

}]);