"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_NetworkItemView_test_js-ui_components_report_view_report_view_js"], {
"./panels/network/NetworkItemView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/OverridesHelpers.js */ "./testing/OverridesHelpers.js");
/* harmony import */var _forward_forward_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */var _network_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./network.js */ "./panels/network/network.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}







function renderNetworkItemView(request) {
    if (!request) {
        request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/foo.html', '', null, null, null);
    }
    var networkItemView = new _network_js__WEBPACK_IMPORTED_MODULE_6__.NetworkItemView.NetworkItemView(request, {});
    var div = document.createElement('div');
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
    networkItemView.markAsRoot();
    networkItemView.show(div);
    return networkItemView;
}
function getIconDataInTab(tabs, tabId) {
    var _tabs_find;
    var icon = (_tabs_find = tabs.find(function(tab) {
        return tab.id === tabId;
    })) === null || _tabs_find === void 0 ? void 0 : _tabs_find['icon'];
    var iconData = icon === null || icon === void 0 ? void 0 : icon.data;
    return iconData;
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('NetworkItemView', function() {
    beforeEach(function() {
        (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_4__.setUpEnvironment)();
    });
    afterEach(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.deinitializeGlobalVars)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('reveals header in RequestHeadersView', /*#__PURE__*/ _async_to_generator(function() {
        var networkItemView, headersViewComponent, headersViewComponentSpy;
        return _ts_generator(this, function(_state) {
            networkItemView = renderNetworkItemView();
            headersViewComponent = networkItemView.getHeadersViewComponent();
            headersViewComponentSpy = sinon.spy(headersViewComponent, 'revealHeader');
            assert.isTrue(headersViewComponentSpy.notCalled);
            networkItemView.revealHeader("Response" /* NetworkForward.UIRequestLocation.UIHeaderSection.Response */ , 'headerName');
            assert.isTrue(headersViewComponentSpy.calledWith("Response" /* NetworkForward.UIRequestLocation.UIHeaderSection.Response */ , 'headerName'));
            networkItemView.detach();
            return [
                2
            ];
        });
    }));
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('NetworkItemView', function() {
    var request;
    var OVERRIDEN_ICON_NAME = 'small-status-dot';
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com', '', null, null, null);
            request.statusCode = 200;
            return [
                2
            ];
        });
    }));
    it('shows indicator for overriden headers and responses', function() {
        request.setWasIntercepted(true);
        request.hasOverriddenContent = true;
        request.responseHeaders = [
            {
                name: 'foo',
                value: 'overridden'
            }
        ];
        request.originalResponseHeaders = [
            {
                name: 'foo',
                value: 'original'
            }
        ];
        var networkItemView = renderNetworkItemView(request);
        var headersIcon = getIconDataInTab(networkItemView['tabs'], 'headers-component');
        var responseIcon = getIconDataInTab(networkItemView['tabs'], 'response');
        networkItemView.detach();
        assert.strictEqual(headersIcon.iconName, OVERRIDEN_ICON_NAME);
        assert.strictEqual(responseIcon.iconName, OVERRIDEN_ICON_NAME);
    });
    it('shows indicator for overriden headers', function() {
        request.setWasIntercepted(true);
        request.responseHeaders = [
            {
                name: 'foo',
                value: 'overridden'
            }
        ];
        request.originalResponseHeaders = [
            {
                name: 'foo',
                value: 'original'
            }
        ];
        var networkItemView = renderNetworkItemView(request);
        var headersIcon = getIconDataInTab(networkItemView['tabs'], 'headers-component');
        var responseIcon = getIconDataInTab(networkItemView['tabs'], 'response');
        networkItemView.detach();
        assert.strictEqual(headersIcon.iconName, OVERRIDEN_ICON_NAME);
        assert.isUndefined(responseIcon);
    });
    it('shows indicator for overriden content', function() {
        request.setWasIntercepted(true);
        request.hasOverriddenContent = true;
        var networkItemView = renderNetworkItemView(request);
        var headersIcon = getIconDataInTab(networkItemView['tabs'], 'headers-component');
        var responseIcon = getIconDataInTab(networkItemView['tabs'], 'response');
        networkItemView.detach();
        assert.isUndefined(headersIcon);
        assert.strictEqual(responseIcon.iconName, OVERRIDEN_ICON_NAME);
    });
    it('does not show indicator for unoverriden request', function() {
        var networkItemView = renderNetworkItemView(request);
        var headersIcon = getIconDataInTab(networkItemView['tabs'], 'headers-component');
        var responseIcon = getIconDataInTab(networkItemView['tabs'], 'response');
        networkItemView.detach();
        assert.isUndefined(headersIcon);
        assert.isUndefined(responseIcon);
    });
    it('shows the Response and EventSource tab for text/event-stream requests', function() {
        request.mimeType = 'text/event-stream';
        var networkItemView = renderNetworkItemView(request);
        assert.isTrue(networkItemView.hasTab("eventSource" /* NetworkForward.UIRequestLocation.UIRequestTabs.EventSource */ ));
        assert.isTrue(networkItemView.hasTab("response" /* NetworkForward.UIRequestLocation.UIRequestTabs.Response */ ));
        networkItemView.detach();
    });
}); //# sourceMappingURL=NetworkItemView.test.js.map


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