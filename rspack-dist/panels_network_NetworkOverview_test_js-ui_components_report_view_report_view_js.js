"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_NetworkOverview_test_js-ui_components_report_view_report_view_js"], {
"./panels/network/NetworkOverview.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _network_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./network.js */ "./panels/network/network.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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





var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__.RenderCoordinator.RenderCoordinator.instance();
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('NetworkOverview', function() {
    var target;
    var networkOverview;
    beforeEach(function() {
        networkOverview = new _network_js__WEBPACK_IMPORTED_MODULE_4__.NetworkOverview.NetworkOverview();
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
    });
    var updatesOnEvent = function(event, inScope) {
        return /*#__PURE__*/ _async_to_generator(function() {
            var _resourceTreeModel, calculator, resourceTreeModel;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
                        calculator = {
                            computePosition: sinon.stub(),
                            setDisplayWidth: sinon.stub(),
                            positionToTime: sinon.stub(),
                            setBounds: sinon.stub(),
                            setNavStartTimes: sinon.stub(),
                            reset: sinon.stub(),
                            formatValue: sinon.stub(),
                            maximumBoundary: sinon.stub(),
                            minimumBoundary: sinon.stub(),
                            zeroTime: sinon.stub(),
                            boundarySpan: sinon.stub()
                        };
                        networkOverview.setCalculator(calculator);
                        networkOverview.markAsRoot();
                        networkOverview.show(document.body);
                        resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel);
                        assert.exists(resourceTreeModel);
                        assert.isFalse(calculator.computePosition.called);
                        (_resourceTreeModel = resourceTreeModel).dispatchEventToListeners.apply(_resourceTreeModel, [
                            event,
                            {
                                loadTime: 42
                            }
                        ]);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(calculator.computePosition.called, inScope);
                        networkOverview.detach();
                        return [
                            2
                        ];
                }
            });
        });
    };
    it('updates on in scope load event', updatesOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.Events.Load, true));
    it('does not update on out of scope load event', updatesOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.Events.Load, false));
    it('updates on in scope DOM content load event', updatesOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.Events.DOMContentLoaded, true));
    it('does not update on out of scope DOM content load event', updatesOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.Events.DOMContentLoaded, false));
}); //# sourceMappingURL=NetworkOverview.test.js.map


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