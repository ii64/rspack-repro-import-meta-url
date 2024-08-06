"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_NetworkManager_test_js"], {
"./core/sdk/NetworkManager.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/OverridesHelpers.js */ "./testing/OverridesHelpers.js");
/* harmony import */var _common_common_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/common.js */ "./core/common/common.js");
/* harmony import */var _platform_platform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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










var LONG_URL_PART = 'LoremIpsumDolorSitAmetConsecteturAdipiscingElitPhasellusVitaeOrciInAugueCondimentumTinciduntUtEgetDolorQuisqueEfficiturUltricesTinciduntVivamusVelitPurusCommodoQuisErosSitAmetTemporMalesuadaNislNullamTtempusVulputateAugueEgetScelerisqueLacusVestibulumNon/index.html';
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithMockConnection)('MultitargetNetworkManager', function() {
    describe('Trust Token done event', function() {
        it('is not lost when arriving before the corresponding requestWillBeSent event', function() {
            // 1) Setup a NetworkManager and listen to "RequestStarted" events.
            var networkManager = new _common_common_js__WEBPACK_IMPORTED_MODULE_7__.ObjectWrapper.ObjectWrapper();
            var startedRequests = [];
            networkManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_9__.NetworkManager.Events.RequestStarted, function(event) {
                startedRequests.push(event.data.request);
            });
            var networkDispatcher = new _sdk_js__WEBPACK_IMPORTED_MODULE_9__.NetworkManager.NetworkDispatcher(networkManager);
            // 2) Fire a trust token event, followed by a requestWillBeSent event.
            var mockEvent = {
                requestId: 'mockId'
            };
            networkDispatcher.trustTokenOperationDone(mockEvent);
            networkDispatcher.requestWillBeSent({
                requestId: 'mockId',
                request: {
                    url: 'example.com'
                }
            });
            // 3) Check that the resulting NetworkRequest has the Trust Token Event data associated with it.
            assert.strictEqual(startedRequests.length, 1);
            assert.strictEqual(startedRequests[0].trustTokenOperationDoneEvent(), mockEvent);
        });
    });
    it('uses main frame to get certificate', function() {
        _sdk_js__WEBPACK_IMPORTED_MODULE_9__.ChildTargetManager.ChildTargetManager.install();
        var tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)({
            type: _sdk_js__WEBPACK_IMPORTED_MODULE_9__.Target.Type.Tab
        });
        var mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)({
            parentTarget: tabTarget
        });
        var prerenderTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)({
            parentTarget: tabTarget,
            subtype: 'prerender'
        });
        var subframeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)({
            parentTarget: mainFrameTarget,
            subtype: ''
        });
        var unexpectedCalls = [
            tabTarget,
            prerenderTarget,
            subframeTarget
        ].map(function(t) {
            return sinon.spy(t.networkAgent(), 'invoke_getCertificate');
        });
        var expectedCall = sinon.spy(mainFrameTarget.networkAgent(), 'invoke_getCertificate');
        void _sdk_js__WEBPACK_IMPORTED_MODULE_9__.NetworkManager.MultitargetNetworkManager.instance().getCertificate('https://example.com');
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = unexpectedCalls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var unexpectedCall = _step.value;
                assert.isTrue(unexpectedCall.notCalled);
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
        assert.isTrue(expectedCall.calledOnceWith({
            origin: 'https://example.com'
        }));
    });
});
describe('NetworkDispatcher', function() {
    var requestWillBeSentEvent = {
        requestId: 'mockId',
        request: {
            url: 'example.com'
        }
    };
    var loadingFinishedEvent = {
        requestId: 'mockId',
        timestamp: 42,
        encodedDataLength: 42
    };
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.describeWithEnvironment)('request', function() {
        var networkDispatcher;
        beforeEach(function() {
            var networkManager = new _common_common_js__WEBPACK_IMPORTED_MODULE_7__.ObjectWrapper.ObjectWrapper();
            networkManager.target = function() {
                return {
                    model: function() {
                        return null;
                    }
                };
            };
            networkDispatcher = new _sdk_js__WEBPACK_IMPORTED_MODULE_9__.NetworkManager.NetworkDispatcher(networkManager);
        });
        it('is preserved after loadingFinished', function() {
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            assert.exists(networkDispatcher.requestForId('mockId'));
        });
        it('clears finished requests on clearRequests()', function() {
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            var unfinishedRequestWillBeSentEvent = {
                requestId: 'unfinishedRequestId',
                request: {
                    url: 'example.com'
                }
            };
            networkDispatcher.requestWillBeSent(unfinishedRequestWillBeSentEvent);
            networkDispatcher.clearRequests();
            assert.notExists(networkDispatcher.requestForId('mockId'));
            assert.exists(networkDispatcher.requestForId('unfinishedRequestId'));
        });
        it('preserves extra info for unfinished clearRequests()', function() {
            var _networkDispatcher_requestForId;
            var requestWillBeSentExtraInfoEvent = {
                requestId: 'mockId',
                associatedCookies: [],
                headers: {
                    'Header-From-Extra-Info': 'foo'
                },
                connectTiming: {
                    requestTime: 0
                }
            };
            networkDispatcher.requestWillBeSentExtraInfo(requestWillBeSentExtraInfoEvent);
            networkDispatcher.clearRequests();
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            assert.exists(networkDispatcher.requestForId('mockId'));
            assert.deepEqual((_networkDispatcher_requestForId = networkDispatcher.requestForId('mockId')) === null || _networkDispatcher_requestForId === void 0 ? void 0 : _networkDispatcher_requestForId.requestHeaders(), [
                {
                    name: 'Header-From-Extra-Info',
                    value: 'foo'
                }
            ]);
        });
        it('response headers are overwritten by request interception', function() {
            var _networkDispatcher_requestForId, _networkDispatcher_requestForId1;
            var responseReceivedExtraInfoEvent = {
                requestId: 'mockId',
                blockedCookies: [],
                headers: {
                    'test-header': 'first'
                },
                resourceIPAddressSpace: "Public" /* Protocol.Network.IPAddressSpace.Public */ ,
                statusCode: 200
            };
            var mockResponseReceivedEventWithHeaders = function(headers) {
                return {
                    requestId: 'mockId',
                    loaderId: 'mockLoaderId',
                    frameId: 'mockFrameId',
                    timestamp: 581734.083213,
                    type: "Document" /* Protocol.Network.ResourceType.Document */ ,
                    response: {
                        url: 'example.com',
                        status: 200,
                        statusText: '',
                        headers: headers,
                        mimeType: 'text/html',
                        connectionReused: true,
                        connectionId: 12345,
                        encodedDataLength: 100,
                        securityState: 'secure'
                    }
                };
            };
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.responseReceivedExtraInfo(responseReceivedExtraInfoEvent);
            // ResponseReceived does not overwrite response headers.
            networkDispatcher.responseReceived(mockResponseReceivedEventWithHeaders({
                'test-header': 'second'
            }));
            assert.deepEqual((_networkDispatcher_requestForId = networkDispatcher.requestForId('mockId')) === null || _networkDispatcher_requestForId === void 0 ? void 0 : _networkDispatcher_requestForId.responseHeaders, [
                {
                    name: 'test-header',
                    value: 'first'
                }
            ]);
            // ResponseReceived does overwrite response headers if request is marked as intercepted.
            _sdk_js__WEBPACK_IMPORTED_MODULE_9__.NetworkManager.MultitargetNetworkManager.instance().dispatchEventToListeners("RequestIntercepted" /* SDK.NetworkManager.MultitargetNetworkManager.Events.RequestIntercepted */ , 'mockId');
            networkDispatcher.responseReceived(mockResponseReceivedEventWithHeaders({
                'test-header': 'third'
            }));
            assert.deepEqual((_networkDispatcher_requestForId1 = networkDispatcher.requestForId('mockId')) === null || _networkDispatcher_requestForId1 === void 0 ? void 0 : _networkDispatcher_requestForId1.responseHeaders, [
                {
                    name: 'test-header',
                    value: 'third'
                }
            ]);
        });
        it('has populated \'originalHeaders\' after receiving \'responseReceivedExtraInfo\'', function() {
            var _networkDispatcher_requestForId;
            var responseReceivedExtraInfoEvent = {
                requestId: 'mockId',
                blockedCookies: [],
                headers: {
                    'test-header': 'first',
                    'set-cookie': 'foo=bar\ncolor=green'
                },
                resourceIPAddressSpace: "Public" /* Protocol.Network.IPAddressSpace.Public */ ,
                statusCode: 200
            };
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.responseReceivedExtraInfo(responseReceivedExtraInfoEvent);
            assert.deepEqual((_networkDispatcher_requestForId = networkDispatcher.requestForId('mockId')) === null || _networkDispatcher_requestForId === void 0 ? void 0 : _networkDispatcher_requestForId.responseHeaders, [
                {
                    name: 'test-header',
                    value: 'first'
                },
                {
                    name: 'set-cookie',
                    value: 'foo=bar'
                },
                {
                    name: 'set-cookie',
                    value: 'color=green'
                }
            ]);
        });
        it('Correctly set early hints properties on receivedResponse event', function() {
            var _networkDispatcher_requestForId;
            var responseReceivedEvent = {
                requestId: 'mockId',
                loaderId: 'mockLoaderId',
                frameId: 'mockFrameId',
                timestamp: 581734.083213,
                type: "Document" /* Protocol.Network.ResourceType.Document */ ,
                response: {
                    url: 'example.com',
                    status: 200,
                    statusText: '',
                    headers: {
                        'test-header': 'first'
                    },
                    mimeType: 'text/html',
                    connectionReused: true,
                    connectionId: 12345,
                    encodedDataLength: 100,
                    securityState: 'secure',
                    fromEarlyHints: true
                }
            };
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.responseReceived(responseReceivedEvent);
            assert.deepEqual((_networkDispatcher_requestForId = networkDispatcher.requestForId('mockId')) === null || _networkDispatcher_requestForId === void 0 ? void 0 : _networkDispatcher_requestForId.fromEarlyHints(), true);
        });
        it('has populated early hints headers after receiving \'repsonseReceivedEarlyHints\'', function() {
            var _networkDispatcher_requestForId;
            var earlyHintsEvent = {
                requestId: 'mockId',
                headers: {
                    'link': '</style.css>; as=style;'
                }
            };
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            networkDispatcher.responseReceivedEarlyHints(earlyHintsEvent);
            assert.deepEqual((_networkDispatcher_requestForId = networkDispatcher.requestForId('mockId')) === null || _networkDispatcher_requestForId === void 0 ? void 0 : _networkDispatcher_requestForId.earlyHintsHeaders, [
                {
                    name: 'link',
                    value: '</style.css>; as=style;'
                }
            ]);
        });
    });
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.describeWithEnvironment)('WebBundle requests', function() {
        var networkDispatcher;
        var webBundleMetadataReceivedEvent = {
            requestId: 'mockId',
            urls: [
                'foo'
            ]
        };
        var webBundleInnerResponseParsedEvent = {
            bundleRequestId: 'bundleRequestId',
            innerRequestId: 'mockId'
        };
        var resourceUrlsFoo = [
            'foo'
        ];
        beforeEach(function() {
            var networkManager = new _common_common_js__WEBPACK_IMPORTED_MODULE_7__.ObjectWrapper.ObjectWrapper();
            networkDispatcher = new _sdk_js__WEBPACK_IMPORTED_MODULE_9__.NetworkManager.NetworkDispatcher(networkManager);
        });
        it('have webbundle info when webbundle event happen between browser events', function() {
            var _networkDispatcher_requestForId_webBundleInfo, _networkDispatcher_requestForId;
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.subresourceWebBundleMetadataReceived(webBundleMetadataReceivedEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            assert.deepEqual((_networkDispatcher_requestForId = networkDispatcher.requestForId('mockId')) === null || _networkDispatcher_requestForId === void 0 ? void 0 : (_networkDispatcher_requestForId_webBundleInfo = _networkDispatcher_requestForId.webBundleInfo()) === null || _networkDispatcher_requestForId_webBundleInfo === void 0 ? void 0 : _networkDispatcher_requestForId_webBundleInfo.resourceUrls, resourceUrlsFoo);
        });
        it('have webbundle info when webbundle event happen before browser events', function() {
            var _networkDispatcher_requestForId_webBundleInfo, _networkDispatcher_requestForId;
            networkDispatcher.subresourceWebBundleMetadataReceived(webBundleMetadataReceivedEvent);
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            assert.deepEqual((_networkDispatcher_requestForId = networkDispatcher.requestForId('mockId')) === null || _networkDispatcher_requestForId === void 0 ? void 0 : (_networkDispatcher_requestForId_webBundleInfo = _networkDispatcher_requestForId.webBundleInfo()) === null || _networkDispatcher_requestForId_webBundleInfo === void 0 ? void 0 : _networkDispatcher_requestForId_webBundleInfo.resourceUrls, resourceUrlsFoo);
        });
        it('have webbundle info when webbundle event happen after browser events', function() {
            var _networkDispatcher_requestForId_webBundleInfo, _networkDispatcher_requestForId;
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            networkDispatcher.subresourceWebBundleMetadataReceived(webBundleMetadataReceivedEvent);
            assert.deepEqual((_networkDispatcher_requestForId = networkDispatcher.requestForId('mockId')) === null || _networkDispatcher_requestForId === void 0 ? void 0 : (_networkDispatcher_requestForId_webBundleInfo = _networkDispatcher_requestForId.webBundleInfo()) === null || _networkDispatcher_requestForId_webBundleInfo === void 0 ? void 0 : _networkDispatcher_requestForId_webBundleInfo.resourceUrls, resourceUrlsFoo);
        });
        it('have webbundle info only for the final request but nor redirect', function() {
            var _networkDispatcher_requestForId_webBundleInfo, _networkDispatcher_requestForId, _networkDispatcher_requestForId1, _networkDispatcher_requestForId_redirectSource, _networkDispatcher_requestForId2;
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.requestWillBeSent({
                requestId: 'mockId',
                request: {
                    url: 'redirect.example.com'
                },
                redirectResponse: {
                    url: 'example.com'
                }
            });
            networkDispatcher.subresourceWebBundleMetadataReceived(webBundleMetadataReceivedEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            assert.deepEqual((_networkDispatcher_requestForId = networkDispatcher.requestForId('mockId')) === null || _networkDispatcher_requestForId === void 0 ? void 0 : (_networkDispatcher_requestForId_webBundleInfo = _networkDispatcher_requestForId.webBundleInfo()) === null || _networkDispatcher_requestForId_webBundleInfo === void 0 ? void 0 : _networkDispatcher_requestForId_webBundleInfo.resourceUrls, resourceUrlsFoo);
            assert.exists((_networkDispatcher_requestForId1 = networkDispatcher.requestForId('mockId')) === null || _networkDispatcher_requestForId1 === void 0 ? void 0 : _networkDispatcher_requestForId1.redirectSource());
            assert.notExists((_networkDispatcher_requestForId2 = networkDispatcher.requestForId('mockId')) === null || _networkDispatcher_requestForId2 === void 0 ? void 0 : (_networkDispatcher_requestForId_redirectSource = _networkDispatcher_requestForId2.redirectSource()) === null || _networkDispatcher_requestForId_redirectSource === void 0 ? void 0 : _networkDispatcher_requestForId_redirectSource.webBundleInfo());
        });
        it('have webbundle info on error', function() {
            var _networkDispatcher_requestForId_webBundleInfo, _networkDispatcher_requestForId;
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            networkDispatcher.subresourceWebBundleMetadataError({
                requestId: 'mockId',
                errorMessage: 'Kaboom!'
            });
            assert.deepEqual((_networkDispatcher_requestForId = networkDispatcher.requestForId('mockId')) === null || _networkDispatcher_requestForId === void 0 ? void 0 : (_networkDispatcher_requestForId_webBundleInfo = _networkDispatcher_requestForId.webBundleInfo()) === null || _networkDispatcher_requestForId_webBundleInfo === void 0 ? void 0 : _networkDispatcher_requestForId_webBundleInfo.errorMessage, 'Kaboom!');
        });
        it('have webbundle inner request info when webbundle event happen between browser events', function() {
            var _networkDispatcher_requestForId_webBundleInnerRequestInfo, _networkDispatcher_requestForId;
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.subresourceWebBundleInnerResponseParsed(webBundleInnerResponseParsedEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            assert.deepEqual((_networkDispatcher_requestForId = networkDispatcher.requestForId('mockId')) === null || _networkDispatcher_requestForId === void 0 ? void 0 : (_networkDispatcher_requestForId_webBundleInnerRequestInfo = _networkDispatcher_requestForId.webBundleInnerRequestInfo()) === null || _networkDispatcher_requestForId_webBundleInnerRequestInfo === void 0 ? void 0 : _networkDispatcher_requestForId_webBundleInnerRequestInfo.bundleRequestId, 'bundleRequestId');
        });
        it('have webbundle inner request info when webbundle event happen before browser events', function() {
            var _networkDispatcher_requestForId_webBundleInnerRequestInfo, _networkDispatcher_requestForId;
            networkDispatcher.subresourceWebBundleInnerResponseParsed(webBundleInnerResponseParsedEvent);
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            assert.deepEqual((_networkDispatcher_requestForId = networkDispatcher.requestForId('mockId')) === null || _networkDispatcher_requestForId === void 0 ? void 0 : (_networkDispatcher_requestForId_webBundleInnerRequestInfo = _networkDispatcher_requestForId.webBundleInnerRequestInfo()) === null || _networkDispatcher_requestForId_webBundleInnerRequestInfo === void 0 ? void 0 : _networkDispatcher_requestForId_webBundleInnerRequestInfo.bundleRequestId, 'bundleRequestId');
        });
        it('have webbundle inner request info when webbundle event happen after browser events', function() {
            var _networkDispatcher_requestForId_webBundleInnerRequestInfo, _networkDispatcher_requestForId;
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            networkDispatcher.subresourceWebBundleInnerResponseParsed(webBundleInnerResponseParsedEvent);
            assert.deepEqual((_networkDispatcher_requestForId = networkDispatcher.requestForId('mockId')) === null || _networkDispatcher_requestForId === void 0 ? void 0 : (_networkDispatcher_requestForId_webBundleInnerRequestInfo = _networkDispatcher_requestForId.webBundleInnerRequestInfo()) === null || _networkDispatcher_requestForId_webBundleInnerRequestInfo === void 0 ? void 0 : _networkDispatcher_requestForId_webBundleInnerRequestInfo.bundleRequestId, 'bundleRequestId');
        });
        it('have webbundle inner request info on error', function() {
            var _networkDispatcher_requestForId_webBundleInnerRequestInfo, _networkDispatcher_requestForId;
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            networkDispatcher.subresourceWebBundleInnerResponseError({
                innerRequestId: 'mockId',
                errorMessage: 'Kaboom!'
            });
            assert.deepEqual((_networkDispatcher_requestForId = networkDispatcher.requestForId('mockId')) === null || _networkDispatcher_requestForId === void 0 ? void 0 : (_networkDispatcher_requestForId_webBundleInnerRequestInfo = _networkDispatcher_requestForId.webBundleInnerRequestInfo()) === null || _networkDispatcher_requestForId_webBundleInnerRequestInfo === void 0 ? void 0 : _networkDispatcher_requestForId_webBundleInnerRequestInfo.errorMessage, 'Kaboom!');
        });
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithMockConnection)('InterceptedRequest', function() {
    var checkRequestOverride = function checkRequestOverride(target, request, requestId, responseStatusCode, responseHeaders, responseBody, expectedOverriddenResponse) {
        return _checkRequestOverride.apply(this, arguments);
    };
    var checkSetCookieOverride = function checkSetCookieOverride(url, headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders) {
        return _checkSetCookieOverride.apply(this, arguments);
    };
    var target;
    var fulfillRequestSpy;
    function _checkRequestOverride() {
        _checkRequestOverride = _async_to_generator(function(target, request, requestId, responseStatusCode, responseHeaders, responseBody, expectedOverriddenResponse) {
            var expectedSetCookieHeaders, multitargetNetworkManager, fetchAgent, fulfilledRequest, networkRequest, filteredResponseHeaders, interceptedRequest;
            var _arguments = arguments;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        expectedSetCookieHeaders = _arguments.length > 7 && _arguments[7] !== void 0 ? _arguments[7] : [];
                        multitargetNetworkManager = _sdk_js__WEBPACK_IMPORTED_MODULE_9__.NetworkManager.MultitargetNetworkManager.instance();
                        fetchAgent = target.fetchAgent();
                        fulfilledRequest = new Promise(function(resolve) {
                            multitargetNetworkManager.addEventListener("RequestFulfilled" /* SDK.NetworkManager.MultitargetNetworkManager.Events.RequestFulfilled */ , resolve);
                        });
                        networkRequest = _sdk_js__WEBPACK_IMPORTED_MODULE_9__.NetworkRequest.NetworkRequest.create(requestId, request.url, request.url, null, null, null);
                        networkRequest.originalResponseHeaders = responseHeaders;
                        // The response headers passed to 'interceptedRequest' do not contain any
                        // 'set-cookie' headers, because they originate from CDP's 'Fetch.requestPaused'
                        // which receives its header information via mojo which in turn filters out
                        // 'set-cookie' headers.
                        filteredResponseHeaders = responseHeaders.filter(function(header) {
                            return header.name !== 'set-cookie';
                        });
                        interceptedRequest = new _sdk_js__WEBPACK_IMPORTED_MODULE_9__.NetworkManager.InterceptedRequest(fetchAgent, request, "Document" /* Protocol.Network.ResourceType.Document */ , requestId, networkRequest, responseStatusCode, filteredResponseHeaders);
                        interceptedRequest.responseBody = /*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2,
                                    new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.ContentData.ContentData(responseBody, false, 'text/html')
                                ];
                            });
                        });
                        assert.isTrue(fulfillRequestSpy.notCalled);
                        return [
                            4,
                            multitargetNetworkManager.requestIntercepted(interceptedRequest)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            fulfilledRequest
                        ];
                    case 2:
                        _state.sent();
                        assert.isTrue(fulfillRequestSpy.calledOnceWithExactly(expectedOverriddenResponse));
                        assert.deepEqual(networkRequest.setCookieHeaders, expectedSetCookieHeaders);
                        fulfillRequestSpy.resetHistory();
                        return [
                            2
                        ];
                }
            });
        });
        return _checkRequestOverride.apply(this, arguments);
    }
    function _checkSetCookieOverride() {
        _checkSetCookieOverride = _async_to_generator(function(url, headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders) {
            var responseCode, requestId, responseBody, networkRequest;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        responseCode = 200;
                        requestId = 'request_id_for_cookies';
                        responseBody = 'interceptedRequest content';
                        networkRequest = {
                            method: 'GET',
                            url: url
                        };
                        return [
                            4,
                            checkRequestOverride(target, networkRequest, requestId, responseCode, headersFromServer, responseBody, {
                                requestId: requestId,
                                responseCode: responseCode,
                                body: btoa(responseBody),
                                responseHeaders: expectedOverriddenHeaders
                            }, expectedPersistedSetCookieHeaders)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _checkSetCookieOverride.apply(this, arguments);
    }
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        var networkPersistenceManager;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _sdk_js__WEBPACK_IMPORTED_MODULE_9__.NetworkManager.MultitargetNetworkManager.dispose();
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)();
                    return [
                        4,
                        (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createWorkspaceProject)('file:///path/to/overrides', [
                            {
                                name: '.headers',
                                path: 'www.example.com/',
                                content: '[\n            {\n              "applyTo": "index.html",\n              "headers": [{\n                "name": "index-only",\n                "value": "only added to index.html"\n              }]\n            },\n            {\n              "applyTo": "*.css",\n              "headers": [{\n                "name": "css-only",\n                "value": "only added to css files"\n              }]\n            },\n            {\n              "applyTo": "path/to/*.js",\n              "headers": [{\n                "name": "another-header",\n                "value": "only added to specific path"\n              }]\n            },\n            {\n              "applyTo": "withCookie.html",\n              "headers": [{\n                "name": "set-cookie",\n                "value": "userId=12345"\n              }]\n            },\n            {\n              "applyTo": "withCookie2.html",\n              "headers": [\n                {\n                  "name": "set-cookie",\n                  "value": "userName=DevTools"\n                },\n                {\n                  "name": "set-cookie",\n                  "value": "themeColour=dark"\n                }\n              ]\n            },\n            {\n              "applyTo": "withCookie3.html",\n              "headers": [\n                {\n                  "name": "set-cookie",\n                  "value": "userName=DevTools"\n                },\n                {\n                  "name": "set-cookie",\n                  "value": "malformed_override"\n                }\n              ]\n            },\n            {\n              "applyTo": "cookies/*",\n              "headers": [\n                {\n                  "name": "set-cookie",\n                  "value": "unique=value"\n                },\n                {\n                  "name": "set-cookie",\n                  "value": "override-me=first"\n                }\n              ]\n            },\n            {\n              "applyTo": "cookies/mergeCookies.html",\n              "headers": [\n                {\n                  "name": "set-cookie",\n                  "value": "override-me=second"\n                },\n                {\n                  "name": "set-cookie",\n                  "value": "foo=bar"\n                }\n              ]\n            }\n          ]'
                            },
                            {
                                name: '.headers',
                                path: '',
                                content: '[\n            {\n              "applyTo": "*",\n              "headers": [{\n                "name": "age",\n                "value": "overridden"\n              }]\n            }\n          ]'
                            },
                            {
                                name: 'helloWorld.html',
                                path: 'www.example.com/',
                                content: 'Hello World!'
                            },
                            {
                                name: 'utf16.html',
                                path: 'www.example.com/',
                                content: 'Overwritten with non-UTF16 (TODO: fix this!)'
                            },
                            {
                                name: 'something.html',
                                path: 'file:/usr/local/foo/content/',
                                content: 'Override for something'
                            },
                            {
                                name: '.headers',
                                path: 'file:/usr/local/example/',
                                content: '[\n            {\n              "applyTo": "*",\n              "headers": [{\n                "name": "test-file-urls",\n                "value": "file url value"\n              }]\n            }\n          ]'
                            },
                            {
                                name: 'index.html',
                                path: 'file:/usr/local/example/',
                                content: 'Overridden file content'
                            },
                            {
                                name: '.headers',
                                path: 'www.longurl.com/longurls/',
                                content: '[\n            {\n              "applyTo": "index.html-'.concat(_platform_platform_js__WEBPACK_IMPORTED_MODULE_8__.StringUtilities.hashCode('www.longurl.com/' + LONG_URL_PART).toString(16), '.html",\n              "headers": [{\n                "name": "long-url-header",\n                "value": "long url header value"\n              }]\n            }\n          ]')
                            },
                            {
                                name: "index.html-".concat(_platform_platform_js__WEBPACK_IMPORTED_MODULE_8__.StringUtilities.hashCode('www.longurl.com/' + LONG_URL_PART).toString(16), ".html"),
                                path: 'www.longurl.com/longurls/',
                                content: 'Overridden long URL file content'
                            },
                            {
                                name: '.headers',
                                path: 'file:/longurls/',
                                content: '[\n            {\n              "applyTo": "index.html-'.concat(_platform_platform_js__WEBPACK_IMPORTED_MODULE_8__.StringUtilities.hashCode(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_1__.NetworkPersistenceManager.NetworkPersistenceManager.encodeEncodedPathToLocalPathParts('file:')[0] + '/' + LONG_URL_PART).toString(16), '.html",\n              "headers": [{\n                "name": "long-file-url-header",\n                "value": "long file url header value"\n              }]\n            }\n          ]')
                            }
                        ])
                    ];
                case 1:
                    networkPersistenceManager = _state.sent();
                    sinon.stub(target.fetchAgent(), 'invoke_enable');
                    fulfillRequestSpy = sinon.spy(target.fetchAgent(), 'invoke_fulfillRequest');
                    return [
                        4,
                        networkPersistenceManager.updateInterceptionPatternsForTests()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can override headers-only for a status 200 request', /*#__PURE__*/ _async_to_generator(function() {
        var responseCode, requestId, responseBody;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    responseCode = 200;
                    requestId = 'request_id_1';
                    responseBody = 'interceptedRequest content';
                    return [
                        4,
                        checkRequestOverride(target, {
                            method: 'GET',
                            url: 'https://www.example.com/styles.css'
                        }, requestId, responseCode, [
                            {
                                name: 'content-type',
                                value: 'text/html; charset=utf-8'
                            }
                        ], responseBody, {
                            requestId: requestId,
                            responseCode: responseCode,
                            body: btoa(responseBody),
                            responseHeaders: [
                                {
                                    name: 'css-only',
                                    value: 'only added to css files'
                                },
                                {
                                    name: 'age',
                                    value: 'overridden'
                                },
                                {
                                    name: 'content-type',
                                    value: 'text/html; charset=utf-8'
                                }
                            ]
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not intercept OPTIONS requests', /*#__PURE__*/ _async_to_generator(function() {
        var requestId, request, fetchAgent, continueRequestSpy, networkRequest, interceptedRequest;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    requestId = 'request_id_1';
                    request = {
                        method: 'OPTIONS',
                        url: 'https://www.example.com/styles.css'
                    };
                    fetchAgent = target.fetchAgent();
                    continueRequestSpy = sinon.spy(fetchAgent, 'invoke_continueRequest');
                    networkRequest = _sdk_js__WEBPACK_IMPORTED_MODULE_9__.NetworkRequest.NetworkRequest.create(requestId, request.url, request.url, null, null, null);
                    interceptedRequest = new _sdk_js__WEBPACK_IMPORTED_MODULE_9__.NetworkManager.InterceptedRequest(fetchAgent, request, "Document" /* Protocol.Network.ResourceType.Document */ , requestId, networkRequest);
                    interceptedRequest.responseBody = /*#__PURE__*/ _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            return [
                                2,
                                new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.ContentData.ContentData('interceptedRequest content', false, 'text/html')
                            ];
                        });
                    });
                    assert.isTrue(continueRequestSpy.notCalled);
                    return [
                        4,
                        _sdk_js__WEBPACK_IMPORTED_MODULE_9__.NetworkManager.MultitargetNetworkManager.instance().requestIntercepted(interceptedRequest)
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(fulfillRequestSpy.notCalled);
                    assert.isTrue(continueRequestSpy.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can override headers and content for a status 200 request', /*#__PURE__*/ _async_to_generator(function() {
        var responseCode, requestId, responseBody;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    responseCode = 200;
                    requestId = 'request_id_2';
                    responseBody = 'interceptedRequest content';
                    return [
                        4,
                        checkRequestOverride(target, {
                            method: 'GET',
                            url: 'https://www.example.com/helloWorld.html'
                        }, requestId, responseCode, [
                            {
                                name: 'content-type',
                                value: 'text/html; charset=utf-8'
                            }
                        ], responseBody, {
                            requestId: requestId,
                            responseCode: responseCode,
                            body: btoa('Hello World!'),
                            responseHeaders: [
                                {
                                    name: 'age',
                                    value: 'overridden'
                                },
                                {
                                    name: 'content-type',
                                    value: 'text/html; charset=utf-8'
                                }
                            ]
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    describe('NetworkPersistenceManager', function() {
        it('decodes the intercepted response body with the right charset', /*#__PURE__*/ _async_to_generator(function() {
            var requestId, request, fetchAgent, networkRequest, networkProject, uiSourceCode, interceptedRequest, content;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        requestId = 'request_id_utf_16';
                        request = {
                            method: 'GET',
                            url: 'https://www.example.com/utf16.html'
                        };
                        fetchAgent = target.fetchAgent();
                        sinon.spy(fetchAgent, 'invoke_continueRequest');
                        networkRequest = _sdk_js__WEBPACK_IMPORTED_MODULE_9__.NetworkRequest.NetworkRequest.create(requestId, request.url, request.url, null, null, null);
                        networkRequest.originalResponseHeaders = [
                            {
                                name: 'content-type',
                                value: 'text/html; charset-utf-16'
                            }
                        ];
                        // Create a quick'n dirty network UISourceCode for the request manually. We need to establish a binding to the
                        // overridden file system UISourceCode.
                        networkProject = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.WorkspaceImpl.instance(), 'testing-network', _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.projectTypes.Network, 'Override network project', false);
                        _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.WorkspaceImpl.instance().addProject(networkProject);
                        uiSourceCode = networkProject.createUISourceCode('https://www.example.com/utf16.html', _common_common_js__WEBPACK_IMPORTED_MODULE_7__.ResourceType.resourceTypes.Document);
                        networkProject.addUISourceCode(uiSourceCode);
                        interceptedRequest = new _sdk_js__WEBPACK_IMPORTED_MODULE_9__.NetworkManager.InterceptedRequest(fetchAgent, request, "Document" /* Protocol.Network.ResourceType.Document */ , requestId, networkRequest, 200, [
                            {
                                name: 'content-type',
                                value: 'text/html; charset-utf-16'
                            }
                        ]);
                        interceptedRequest.responseBody = /*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                // Very simple HTML doc base64 encoded.
                                return [
                                    2,
                                    new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.ContentData.ContentData('//48ACEARABPAEMAVABZAFAARQAgAGgAdABtAGwAPgAKADwAcAA+AEkA8QB0AOsAcgBuAOIAdABpAPQAbgDgAGwAaQB6AOYAdABpAPgAbgADJjTYBt88AC8AcAA+AAoA', true, 'text/html', 'utf-16')
                                ];
                            });
                        });
                        return [
                            4,
                            _sdk_js__WEBPACK_IMPORTED_MODULE_9__.NetworkManager.MultitargetNetworkManager.instance().requestIntercepted(interceptedRequest)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_1__.NetworkPersistenceManager.NetworkPersistenceManager.instance().originalContentForUISourceCode(uiSourceCode)
                        ];
                    case 2:
                        content = _state.sent();
                        assert.strictEqual(content, '<!DOCTYPE html>\n<p>Iñtërnâtiônàlizætiøn☃𝌆</p>\n');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('can override headers-only for a status 300 (redirect) request', /*#__PURE__*/ _async_to_generator(function() {
        var responseCode, requestId, responseBody;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    responseCode = 300;
                    requestId = 'request_id_3';
                    responseBody = 'interceptedRequest content';
                    return [
                        4,
                        checkRequestOverride(target, {
                            method: 'GET',
                            url: 'https://www.example.com/path/to/foo.js'
                        }, requestId, responseCode, [
                            {
                                name: 'content-type',
                                value: 'text/html; charset=utf-8'
                            }
                        ], responseBody, {
                            requestId: requestId,
                            responseCode: responseCode,
                            body: '',
                            responseHeaders: [
                                {
                                    name: 'another-header',
                                    value: 'only added to specific path'
                                },
                                {
                                    name: 'age',
                                    value: 'overridden'
                                },
                                {
                                    name: 'content-type',
                                    value: 'text/html; charset=utf-8'
                                }
                            ]
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can override headers and content for a status 300 (redirect) request', /*#__PURE__*/ _async_to_generator(function() {
        var responseCode, requestId, responseBody;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    responseCode = 300;
                    requestId = 'request_id_4';
                    responseBody = 'interceptedRequest content';
                    return [
                        4,
                        checkRequestOverride(target, {
                            method: 'GET',
                            url: 'https://www.example.com/helloWorld.html'
                        }, requestId, responseCode, [
                            {
                                name: 'content-type',
                                value: 'text/html; charset=utf-8'
                            }
                        ], responseBody, {
                            requestId: requestId,
                            responseCode: 200,
                            body: btoa('Hello World!'),
                            responseHeaders: [
                                {
                                    name: 'age',
                                    value: 'overridden'
                                },
                                {
                                    name: 'content-type',
                                    value: 'text/html; charset=utf-8'
                                }
                            ]
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can override headers-only for a status 404 (not found) request', /*#__PURE__*/ _async_to_generator(function() {
        var responseCode, requestId, responseBody;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    responseCode = 404;
                    requestId = 'request_id_5';
                    responseBody = 'interceptedRequest content';
                    return [
                        4,
                        checkRequestOverride(target, {
                            method: 'GET',
                            url: 'https://www.example.com/doesNotExist.html'
                        }, requestId, responseCode, [
                            {
                                name: 'content-type',
                                value: 'text/html; charset=utf-8'
                            }
                        ], responseBody, {
                            requestId: requestId,
                            responseCode: responseCode,
                            body: btoa(responseBody),
                            responseHeaders: [
                                {
                                    name: 'age',
                                    value: 'overridden'
                                },
                                {
                                    name: 'content-type',
                                    value: 'text/html; charset=utf-8'
                                }
                            ]
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can override headers and content for a status 404 (not found) request', /*#__PURE__*/ _async_to_generator(function() {
        var responseCode, requestId, responseBody;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    responseCode = 404;
                    requestId = 'request_id_6';
                    responseBody = 'interceptedRequest content';
                    return [
                        4,
                        checkRequestOverride(target, {
                            method: 'GET',
                            url: 'https://www.example.com/helloWorld.html'
                        }, requestId, responseCode, [
                            {
                                name: 'content-type',
                                value: 'text/html; charset=utf-8'
                            }
                        ], responseBody, {
                            requestId: requestId,
                            responseCode: 200,
                            body: btoa('Hello World!'),
                            responseHeaders: [
                                {
                                    name: 'age',
                                    value: 'overridden'
                                },
                                {
                                    name: 'content-type',
                                    value: 'text/html; charset=utf-8'
                                }
                            ]
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can override headers and content for a request with a \'file:/\'-URL', /*#__PURE__*/ _async_to_generator(function() {
        var responseCode, requestId, responseBody;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    responseCode = 200;
                    requestId = 'request_id_8';
                    responseBody = 'interceptedRequest content';
                    return [
                        4,
                        checkRequestOverride(target, {
                            method: 'GET',
                            url: 'file:///usr/local/example/index.html'
                        }, requestId, responseCode, [
                            {
                                name: 'content-type',
                                value: 'text/html; charset=utf-8'
                            },
                            {
                                name: 'age',
                                value: 'original'
                            }
                        ], responseBody, {
                            requestId: requestId,
                            responseCode: responseCode,
                            body: btoa('Overridden file content'),
                            responseHeaders: [
                                {
                                    name: 'test-file-urls',
                                    value: 'file url value'
                                },
                                {
                                    name: 'age',
                                    value: 'overridden'
                                },
                                {
                                    name: 'content-type',
                                    value: 'text/html; charset=utf-8'
                                }
                            ]
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can apply global header overrides to a request with a \'file:/\'-URL', /*#__PURE__*/ _async_to_generator(function() {
        var responseCode, requestId, responseBody;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    responseCode = 200;
                    requestId = 'request_id_9';
                    responseBody = 'content of something/index.html';
                    return [
                        4,
                        checkRequestOverride(target, {
                            method: 'GET',
                            url: 'file:///usr/local/whatever/index.html'
                        }, requestId, responseCode, [
                            {
                                name: 'content-type',
                                value: 'text/html; charset=utf-8'
                            },
                            {
                                name: 'age',
                                value: 'original'
                            }
                        ], responseBody, {
                            requestId: requestId,
                            responseCode: responseCode,
                            body: btoa(responseBody),
                            responseHeaders: [
                                {
                                    name: 'age',
                                    value: 'overridden'
                                },
                                {
                                    name: 'content-type',
                                    value: 'text/html; charset=utf-8'
                                }
                            ]
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can override headers and content for a request with a very long URL', /*#__PURE__*/ _async_to_generator(function() {
        var responseCode, requestId, responseBody;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    responseCode = 200;
                    requestId = 'request_id_10';
                    responseBody = 'interceptedRequest content';
                    return [
                        4,
                        checkRequestOverride(target, {
                            method: 'GET',
                            url: "https://www.longurl.com/".concat(LONG_URL_PART)
                        }, requestId, responseCode, [
                            {
                                name: 'content-type',
                                value: 'text/html; charset=utf-8'
                            },
                            {
                                name: 'age',
                                value: 'original'
                            }
                        ], responseBody, {
                            requestId: requestId,
                            responseCode: responseCode,
                            body: btoa('Overridden long URL file content'),
                            responseHeaders: [
                                {
                                    name: 'long-url-header',
                                    value: 'long url header value'
                                },
                                {
                                    name: 'age',
                                    value: 'overridden'
                                },
                                {
                                    name: 'content-type',
                                    value: 'text/html; charset=utf-8'
                                }
                            ]
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can override headers for a request with a very long \'file:/\'-URL', /*#__PURE__*/ _async_to_generator(function() {
        var responseCode, requestId, responseBody;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    responseCode = 200;
                    requestId = 'request_id_11';
                    responseBody = 'interceptedRequest content';
                    return [
                        4,
                        checkRequestOverride(target, {
                            method: 'GET',
                            url: 'file:///' + LONG_URL_PART
                        }, requestId, responseCode, [
                            {
                                name: 'content-type',
                                value: 'text/html; charset=utf-8'
                            },
                            {
                                name: 'age',
                                value: 'original'
                            }
                        ], responseBody, {
                            requestId: requestId,
                            responseCode: responseCode,
                            body: btoa(responseBody),
                            responseHeaders: [
                                {
                                    name: 'long-file-url-header',
                                    value: 'long file url header value'
                                },
                                {
                                    name: 'age',
                                    value: 'overridden'
                                },
                                {
                                    name: 'content-type',
                                    value: 'text/html; charset=utf-8'
                                }
                            ]
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can override \'set-cookie\' headers', /*#__PURE__*/ _async_to_generator(function() {
        var headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headersFromServer = [
                        {
                            name: 'content-type',
                            value: 'text/html; charset=utf-8'
                        }
                    ];
                    expectedOverriddenHeaders = [
                        {
                            name: 'age',
                            value: 'overridden'
                        },
                        {
                            name: 'content-type',
                            value: 'text/html; charset=utf-8'
                        },
                        {
                            name: 'set-cookie',
                            value: 'userId=12345'
                        }
                    ];
                    expectedPersistedSetCookieHeaders = [
                        {
                            name: 'set-cookie',
                            value: 'userId=12345'
                        }
                    ];
                    return [
                        4,
                        checkSetCookieOverride('https://www.example.com/withCookie.html', headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('marks both requests as overridden when there are 2 requests with the same URL', /*#__PURE__*/ _async_to_generator(function() {
        var _dispatcher_requestForId, _dispatcher_requestForId1, responseCode, requestId1, requestId2, body, request, originalResponseHeaders, responseHeaders, dispatcher;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    responseCode = 200;
                    requestId1 = 'request_id_1';
                    requestId2 = 'request_id_2';
                    body = 'interceptedRequest content';
                    request = {
                        method: 'GET',
                        url: 'https://www.example.com/styles.css'
                    };
                    originalResponseHeaders = [
                        {
                            name: 'content-type',
                            value: 'text/html; charset=utf-8'
                        }
                    ];
                    responseHeaders = [
                        {
                            name: 'css-only',
                            value: 'only added to css files'
                        },
                        {
                            name: 'age',
                            value: 'overridden'
                        },
                        {
                            name: 'content-type',
                            value: 'text/html; charset=utf-8'
                        }
                    ];
                    dispatcher = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_9__.NetworkManager.NetworkManager).dispatcher;
                    dispatcher.requestWillBeSent({
                        requestId: requestId1,
                        request: request
                    });
                    dispatcher.requestWillBeSent({
                        requestId: requestId2,
                        request: request
                    });
                    return [
                        4,
                        checkRequestOverride(target, request, requestId1, responseCode, originalResponseHeaders, body, {
                            requestId: requestId1,
                            responseCode: responseCode,
                            body: btoa(body),
                            responseHeaders: responseHeaders
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        checkRequestOverride(target, request, requestId2, responseCode, originalResponseHeaders, body, {
                            requestId: requestId2,
                            responseCode: responseCode,
                            body: btoa(body),
                            responseHeaders: responseHeaders
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue((_dispatcher_requestForId = dispatcher.requestForId(requestId1)) === null || _dispatcher_requestForId === void 0 ? void 0 : _dispatcher_requestForId.wasIntercepted());
                    assert.isTrue((_dispatcher_requestForId1 = dispatcher.requestForId(requestId2)) === null || _dispatcher_requestForId1 === void 0 ? void 0 : _dispatcher_requestForId1.wasIntercepted());
                    return [
                        2
                    ];
            }
        });
    }));
    it('stores \'set-cookie\' headers on the request', /*#__PURE__*/ _async_to_generator(function() {
        var headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headersFromServer = [
                        {
                            name: 'set-cookie',
                            value: 'foo=bar'
                        }
                    ];
                    expectedOverriddenHeaders = [
                        {
                            name: 'age',
                            value: 'overridden'
                        }
                    ];
                    expectedPersistedSetCookieHeaders = [
                        {
                            name: 'set-cookie',
                            value: 'foo=bar'
                        }
                    ];
                    return [
                        4,
                        checkSetCookieOverride('https://www.example.com/noCookie.html', headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can override \'set-cookie\' headers when there server also sends \'set-cookie\' headers', /*#__PURE__*/ _async_to_generator(function() {
        var headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headersFromServer = [
                        {
                            name: 'set-cookie',
                            value: 'foo=bar'
                        }
                    ];
                    expectedOverriddenHeaders = [
                        {
                            name: 'age',
                            value: 'overridden'
                        },
                        {
                            name: 'set-cookie',
                            value: 'userId=12345'
                        }
                    ];
                    expectedPersistedSetCookieHeaders = [
                        {
                            name: 'set-cookie',
                            value: 'foo=bar'
                        },
                        {
                            name: 'set-cookie',
                            value: 'userId=12345'
                        }
                    ];
                    return [
                        4,
                        checkSetCookieOverride('https://www.example.com/withCookie.html', headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can overwrite a cookie value from server with a cookie value from overrides', /*#__PURE__*/ _async_to_generator(function() {
        var headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headersFromServer = [
                        {
                            name: 'set-cookie',
                            value: 'userId=999'
                        }
                    ];
                    expectedOverriddenHeaders = [
                        {
                            name: 'age',
                            value: 'overridden'
                        },
                        {
                            name: 'set-cookie',
                            value: 'userId=12345'
                        }
                    ];
                    expectedPersistedSetCookieHeaders = [
                        {
                            name: 'set-cookie',
                            value: 'userId=12345'
                        }
                    ];
                    return [
                        4,
                        checkSetCookieOverride('https://www.example.com/withCookie.html', headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('correctly merges cookies from server and from overrides', /*#__PURE__*/ _async_to_generator(function() {
        var headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headersFromServer = [
                        {
                            name: 'set-cookie',
                            value: 'foo=bar'
                        },
                        {
                            name: 'set-cookie',
                            value: 'userName=server'
                        }
                    ];
                    expectedOverriddenHeaders = [
                        {
                            name: 'age',
                            value: 'overridden'
                        },
                        {
                            name: 'set-cookie',
                            value: 'userName=DevTools'
                        },
                        {
                            name: 'set-cookie',
                            value: 'themeColour=dark'
                        }
                    ];
                    expectedPersistedSetCookieHeaders = [
                        {
                            name: 'set-cookie',
                            value: 'foo=bar'
                        },
                        {
                            name: 'set-cookie',
                            value: 'userName=DevTools'
                        },
                        {
                            name: 'set-cookie',
                            value: 'themeColour=dark'
                        }
                    ];
                    return [
                        4,
                        checkSetCookieOverride('https://www.example.com/withCookie2.html', headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('correctly merges malformed cookies from server and from overrides', /*#__PURE__*/ _async_to_generator(function() {
        var headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headersFromServer = [
                        {
                            name: 'set-cookie',
                            value: 'malformed_original'
                        },
                        {
                            name: 'set-cookie',
                            value: 'userName=server'
                        }
                    ];
                    expectedOverriddenHeaders = [
                        {
                            name: 'age',
                            value: 'overridden'
                        },
                        {
                            name: 'set-cookie',
                            value: 'userName=DevTools'
                        },
                        {
                            name: 'set-cookie',
                            value: 'malformed_override'
                        }
                    ];
                    expectedPersistedSetCookieHeaders = [
                        {
                            name: 'set-cookie',
                            value: 'malformed_original'
                        },
                        {
                            name: 'set-cookie',
                            value: 'userName=DevTools'
                        },
                        {
                            name: 'set-cookie',
                            value: 'malformed_override'
                        }
                    ];
                    return [
                        4,
                        checkSetCookieOverride('https://www.example.com/withCookie3.html', headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('correctly merges \'set-cookie\' headers from server with multiple defined overrides', /*#__PURE__*/ _async_to_generator(function() {
        var headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headersFromServer = [
                        {
                            name: 'set-cookie',
                            value: 'userName=server'
                        },
                        {
                            name: 'set-cookie',
                            value: 'override-me=zero'
                        }
                    ];
                    expectedOverriddenHeaders = [
                        {
                            name: 'age',
                            value: 'overridden'
                        },
                        {
                            name: 'set-cookie',
                            value: 'unique=value'
                        },
                        {
                            name: 'set-cookie',
                            value: 'override-me=second'
                        },
                        {
                            name: 'set-cookie',
                            value: 'foo=bar'
                        }
                    ];
                    expectedPersistedSetCookieHeaders = [
                        {
                            name: 'set-cookie',
                            value: 'userName=server'
                        },
                        {
                            name: 'set-cookie',
                            value: 'override-me=second'
                        },
                        {
                            name: 'set-cookie',
                            value: 'unique=value'
                        },
                        {
                            name: 'set-cookie',
                            value: 'foo=bar'
                        }
                    ];
                    return [
                        4,
                        checkSetCookieOverride('https://www.example.com/cookies/mergeCookies.html', headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('correctly merges \'set-cookie\' headers with duplicates', function() {
        var original = [
            {
                name: 'set-cookie',
                value: 'foo=original'
            },
            {
                name: 'set-cookie',
                value: 'bar=original'
            },
            {
                name: 'set-cookie',
                value: 'baz=original'
            },
            {
                name: 'set-cookie',
                value: 'duplicate=duplicate'
            },
            {
                name: 'set-cookie',
                value: 'duplicate=duplicate'
            },
            {
                name: 'set-cookie',
                value: 'duplicate2=duplicate2'
            },
            {
                name: 'set-cookie',
                value: 'duplicate2=duplicate2'
            },
            {
                name: 'set-cookie',
                value: 'duplicate3=duplicate3'
            },
            {
                name: 'set-cookie',
                value: 'duplicate3=duplicate3'
            },
            {
                name: 'set-cookie',
                value: 'malformed'
            },
            {
                name: 'set-cookie',
                value: 'both'
            },
            {
                name: 'set-cookie',
                value: 'double'
            },
            {
                name: 'set-cookie',
                value: 'double'
            },
            {
                name: 'set-cookie',
                value: 'original_duplicate'
            },
            {
                name: 'set-cookie',
                value: 'original_duplicate'
            },
            {
                name: 'set-cookie',
                value: 'override_duplicate'
            }
        ];
        var overrides = [
            {
                name: 'set-cookie',
                value: 'bar=overridden'
            },
            {
                name: 'set-cookie',
                value: 'baz=overridden1'
            },
            {
                name: 'set-cookie',
                value: 'baz=overridden2'
            },
            {
                name: 'set-cookie',
                value: 'duplicate2=overridden'
            },
            {
                name: 'set-cookie',
                value: 'duplicate3=overridden'
            },
            {
                name: 'set-cookie',
                value: 'duplicate3=overridden'
            },
            {
                name: 'set-cookie',
                value: 'malformed_override'
            },
            {
                name: 'set-cookie',
                value: 'both'
            },
            {
                name: 'set-cookie',
                value: 'original_duplicate'
            },
            {
                name: 'set-cookie',
                value: 'override_duplicate'
            },
            {
                name: 'set-cookie',
                value: 'override_duplicate'
            }
        ];
        var expected = [
            {
                name: 'set-cookie',
                value: 'foo=original'
            },
            {
                name: 'set-cookie',
                value: 'bar=overridden'
            },
            {
                name: 'set-cookie',
                value: 'baz=overridden1'
            },
            {
                name: 'set-cookie',
                value: 'baz=overridden2'
            },
            {
                name: 'set-cookie',
                value: 'duplicate=duplicate'
            },
            {
                name: 'set-cookie',
                value: 'duplicate=duplicate'
            },
            {
                name: 'set-cookie',
                value: 'duplicate2=overridden'
            },
            {
                name: 'set-cookie',
                value: 'duplicate3=overridden'
            },
            {
                name: 'set-cookie',
                value: 'duplicate3=overridden'
            },
            {
                name: 'set-cookie',
                value: 'malformed'
            },
            {
                name: 'set-cookie',
                value: 'both'
            },
            {
                name: 'set-cookie',
                value: 'double'
            },
            {
                name: 'set-cookie',
                value: 'double'
            },
            {
                name: 'set-cookie',
                value: 'original_duplicate'
            },
            {
                name: 'set-cookie',
                value: 'override_duplicate'
            },
            {
                name: 'set-cookie',
                value: 'override_duplicate'
            },
            {
                name: 'set-cookie',
                value: 'malformed_override'
            }
        ];
        assert.deepStrictEqual(_sdk_js__WEBPACK_IMPORTED_MODULE_9__.NetworkManager.InterceptedRequest.mergeSetCookieHeaders(original, overrides), expected);
    });
}); //# sourceMappingURL=NetworkManager.test.js.map


}),

}]);