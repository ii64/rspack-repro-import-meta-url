"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_sdk_NetworkManager_test_ts"],{

/***/ "./src/core/sdk/NetworkManager.test.ts":
/*!*********************************************!*\
  !*** ./src/core/sdk/NetworkManager.test.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/OverridesHelpers.js */ "./src/testing/OverridesHelpers.ts");
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _platform_platform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











const LONG_URL_PART = 'LoremIpsumDolorSitAmetConsecteturAdipiscingElitPhasellusVitaeOrciInAugueCondimentumTinciduntUtEgetDolorQuisqueEfficiturUltricesTinciduntVivamusVelitPurusCommodoQuisErosSitAmetTemporMalesuadaNislNullamTtempusVulputateAugueEgetScelerisqueLacusVestibulumNon/index.html';
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_6__.describeWithMockConnection)('MultitargetNetworkManager', () => {
    describe('Trust Token done event', () => {
        it('is not lost when arriving before the corresponding requestWillBeSent event', () => {
            // 1) Setup a NetworkManager and listen to "RequestStarted" events.
            const networkManager = new _common_common_js__WEBPACK_IMPORTED_MODULE_8__.ObjectWrapper.ObjectWrapper();
            const startedRequests = [];
            networkManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkManager.Events.RequestStarted, event => {
                startedRequests.push(event.data.request);
            });
            const networkDispatcher = new _sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkManager.NetworkDispatcher(networkManager);
            // 2) Fire a trust token event, followed by a requestWillBeSent event.
            const mockEvent = { requestId: 'mockId' };
            networkDispatcher.trustTokenOperationDone(mockEvent);
            networkDispatcher.requestWillBeSent({ requestId: 'mockId', request: { url: 'example.com' } });
            // 3) Check that the resulting NetworkRequest has the Trust Token Event data associated with it.
            assert.strictEqual(startedRequests.length, 1);
            assert.strictEqual(startedRequests[0].trustTokenOperationDoneEvent(), mockEvent);
        });
    });
    it('uses main frame to get certificate', () => {
        _sdk_js__WEBPACK_IMPORTED_MODULE_10__.ChildTargetManager.ChildTargetManager.install();
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_10__.Target.Type.Tab });
        const mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createTarget)({ parentTarget: tabTarget });
        const prerenderTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        const subframeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createTarget)({ parentTarget: mainFrameTarget, subtype: '' });
        const unexpectedCalls = [tabTarget, prerenderTarget, subframeTarget].map(t => sinon.spy(t.networkAgent(), 'invoke_getCertificate'));
        const expectedCall = sinon.spy(mainFrameTarget.networkAgent(), 'invoke_getCertificate');
        void _sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkManager.MultitargetNetworkManager.instance().getCertificate('https://example.com');
        for (const unexpectedCall of unexpectedCalls) {
            assert.isTrue(unexpectedCall.notCalled);
        }
        assert.isTrue(expectedCall.calledOnceWith({ origin: 'https://example.com' }));
    });
});
describe('NetworkDispatcher', () => {
    const requestWillBeSentEvent = { requestId: 'mockId', request: { url: 'example.com' } };
    const loadingFinishedEvent = { requestId: 'mockId', timestamp: 42, encodedDataLength: 42 };
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.describeWithEnvironment)('request', () => {
        let networkDispatcher;
        beforeEach(() => {
            const networkManager = new _common_common_js__WEBPACK_IMPORTED_MODULE_8__.ObjectWrapper.ObjectWrapper();
            networkManager.target = () => ({
                model: () => null,
            });
            networkDispatcher = new _sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkManager.NetworkDispatcher(networkManager);
        });
        it('is preserved after loadingFinished', () => {
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            assert.exists(networkDispatcher.requestForId('mockId'));
        });
        it('clears finished requests on clearRequests()', () => {
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            const unfinishedRequestWillBeSentEvent = { requestId: 'unfinishedRequestId', request: { url: 'example.com' } };
            networkDispatcher.requestWillBeSent(unfinishedRequestWillBeSentEvent);
            networkDispatcher.clearRequests();
            assert.notExists(networkDispatcher.requestForId('mockId'));
            assert.exists(networkDispatcher.requestForId('unfinishedRequestId'));
        });
        it('preserves extra info for unfinished clearRequests()', () => {
            const requestWillBeSentExtraInfoEvent = {
                requestId: 'mockId',
                associatedCookies: [],
                headers: { 'Header-From-Extra-Info': 'foo' },
                connectTiming: { requestTime: 0 },
            };
            networkDispatcher.requestWillBeSentExtraInfo(requestWillBeSentExtraInfoEvent);
            networkDispatcher.clearRequests();
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            assert.exists(networkDispatcher.requestForId('mockId'));
            assert.deepEqual(networkDispatcher.requestForId('mockId')?.requestHeaders(), [{ name: 'Header-From-Extra-Info', value: 'foo' }]);
        });
        it('response headers are overwritten by request interception', () => {
            const responseReceivedExtraInfoEvent = {
                requestId: 'mockId',
                blockedCookies: [],
                headers: {
                    'test-header': 'first',
                },
                resourceIPAddressSpace: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Network.IPAddressSpace.Public,
                statusCode: 200,
            };
            const mockResponseReceivedEventWithHeaders = (headers) => {
                return {
                    requestId: 'mockId',
                    loaderId: 'mockLoaderId',
                    frameId: 'mockFrameId',
                    timestamp: 581734.083213,
                    type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Network.ResourceType.Document,
                    response: {
                        url: 'example.com',
                        status: 200,
                        statusText: '',
                        headers,
                        mimeType: 'text/html',
                        connectionReused: true,
                        connectionId: 12345,
                        encodedDataLength: 100,
                        securityState: 'secure',
                    },
                };
            };
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.responseReceivedExtraInfo(responseReceivedExtraInfoEvent);
            // ResponseReceived does not overwrite response headers.
            networkDispatcher.responseReceived(mockResponseReceivedEventWithHeaders({ 'test-header': 'second' }));
            assert.deepEqual(networkDispatcher.requestForId('mockId')?.responseHeaders, [{ name: 'test-header', value: 'first' }]);
            // ResponseReceived does overwrite response headers if request is marked as intercepted.
            _sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkManager.MultitargetNetworkManager.instance().dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkManager.MultitargetNetworkManager.Events.RequestIntercepted, 'mockId');
            networkDispatcher.responseReceived(mockResponseReceivedEventWithHeaders({ 'test-header': 'third' }));
            assert.deepEqual(networkDispatcher.requestForId('mockId')?.responseHeaders, [{ name: 'test-header', value: 'third' }]);
        });
        it('has populated \'originalHeaders\' after receiving \'responseReceivedExtraInfo\'', () => {
            const responseReceivedExtraInfoEvent = {
                requestId: 'mockId',
                blockedCookies: [],
                headers: {
                    'test-header': 'first',
                    'set-cookie': 'foo=bar\ncolor=green',
                },
                resourceIPAddressSpace: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Network.IPAddressSpace.Public,
                statusCode: 200,
            };
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.responseReceivedExtraInfo(responseReceivedExtraInfoEvent);
            assert.deepEqual(networkDispatcher.requestForId('mockId')?.responseHeaders, [
                { name: 'test-header', value: 'first' },
                { name: 'set-cookie', value: 'foo=bar' },
                { name: 'set-cookie', value: 'color=green' },
            ]);
        });
        it('Correctly set early hints properties on receivedResponse event', () => {
            const responseReceivedEvent = {
                requestId: 'mockId',
                loaderId: 'mockLoaderId',
                frameId: 'mockFrameId',
                timestamp: 581734.083213,
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Network.ResourceType.Document,
                response: {
                    url: 'example.com',
                    status: 200,
                    statusText: '',
                    headers: {
                        'test-header': 'first',
                    },
                    mimeType: 'text/html',
                    connectionReused: true,
                    connectionId: 12345,
                    encodedDataLength: 100,
                    securityState: 'secure',
                    fromEarlyHints: true,
                },
            };
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.responseReceived(responseReceivedEvent);
            assert.deepEqual(networkDispatcher.requestForId('mockId')?.fromEarlyHints(), true);
        });
        it('has populated early hints headers after receiving \'repsonseReceivedEarlyHints\'', () => {
            const earlyHintsEvent = {
                requestId: 'mockId',
                headers: {
                    'link': '</style.css>; as=style;',
                },
            };
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            networkDispatcher.responseReceivedEarlyHints(earlyHintsEvent);
            assert.deepEqual(networkDispatcher.requestForId('mockId')?.earlyHintsHeaders, [
                { name: 'link', value: '</style.css>; as=style;' },
            ]);
        });
    });
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.describeWithEnvironment)('WebBundle requests', () => {
        let networkDispatcher;
        const webBundleMetadataReceivedEvent = { requestId: 'mockId', urls: ['foo'] };
        const webBundleInnerResponseParsedEvent = { bundleRequestId: 'bundleRequestId', innerRequestId: 'mockId' };
        const resourceUrlsFoo = ['foo'];
        beforeEach(() => {
            const networkManager = new _common_common_js__WEBPACK_IMPORTED_MODULE_8__.ObjectWrapper.ObjectWrapper();
            networkDispatcher = new _sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkManager.NetworkDispatcher(networkManager);
        });
        it('have webbundle info when webbundle event happen between browser events', () => {
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.subresourceWebBundleMetadataReceived(webBundleMetadataReceivedEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            assert.deepEqual(networkDispatcher.requestForId('mockId')?.webBundleInfo()?.resourceUrls, resourceUrlsFoo);
        });
        it('have webbundle info when webbundle event happen before browser events', () => {
            networkDispatcher.subresourceWebBundleMetadataReceived(webBundleMetadataReceivedEvent);
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            assert.deepEqual(networkDispatcher.requestForId('mockId')?.webBundleInfo()?.resourceUrls, resourceUrlsFoo);
        });
        it('have webbundle info when webbundle event happen after browser events', () => {
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            networkDispatcher.subresourceWebBundleMetadataReceived(webBundleMetadataReceivedEvent);
            assert.deepEqual(networkDispatcher.requestForId('mockId')?.webBundleInfo()?.resourceUrls, resourceUrlsFoo);
        });
        it('have webbundle info only for the final request but nor redirect', () => {
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.requestWillBeSent({ requestId: 'mockId', request: { url: 'redirect.example.com' }, redirectResponse: { url: 'example.com' } });
            networkDispatcher.subresourceWebBundleMetadataReceived(webBundleMetadataReceivedEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            assert.deepEqual(networkDispatcher.requestForId('mockId')?.webBundleInfo()?.resourceUrls, resourceUrlsFoo);
            assert.exists(networkDispatcher.requestForId('mockId')?.redirectSource());
            assert.notExists(networkDispatcher.requestForId('mockId')?.redirectSource()?.webBundleInfo());
        });
        it('have webbundle info on error', () => {
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            networkDispatcher.subresourceWebBundleMetadataError({ requestId: 'mockId', errorMessage: 'Kaboom!' });
            assert.deepEqual(networkDispatcher.requestForId('mockId')?.webBundleInfo()?.errorMessage, 'Kaboom!');
        });
        it('have webbundle inner request info when webbundle event happen between browser events', () => {
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.subresourceWebBundleInnerResponseParsed(webBundleInnerResponseParsedEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            assert.deepEqual(networkDispatcher.requestForId('mockId')?.webBundleInnerRequestInfo()?.bundleRequestId, 'bundleRequestId');
        });
        it('have webbundle inner request info when webbundle event happen before browser events', () => {
            networkDispatcher.subresourceWebBundleInnerResponseParsed(webBundleInnerResponseParsedEvent);
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            assert.deepEqual(networkDispatcher.requestForId('mockId')?.webBundleInnerRequestInfo()?.bundleRequestId, 'bundleRequestId');
        });
        it('have webbundle inner request info when webbundle event happen after browser events', () => {
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            networkDispatcher.subresourceWebBundleInnerResponseParsed(webBundleInnerResponseParsedEvent);
            assert.deepEqual(networkDispatcher.requestForId('mockId')?.webBundleInnerRequestInfo()?.bundleRequestId, 'bundleRequestId');
        });
        it('have webbundle inner request info on error', () => {
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent);
            networkDispatcher.loadingFinished(loadingFinishedEvent);
            networkDispatcher.subresourceWebBundleInnerResponseError({ innerRequestId: 'mockId', errorMessage: 'Kaboom!' });
            assert.deepEqual(networkDispatcher.requestForId('mockId')?.webBundleInnerRequestInfo()?.errorMessage, 'Kaboom!');
        });
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_6__.describeWithMockConnection)('InterceptedRequest', () => {
    let target;
    let fulfillRequestSpy;
    async function checkRequestOverride(target, request, requestId, responseStatusCode, responseHeaders, responseBody, expectedOverriddenResponse, expectedSetCookieHeaders = []) {
        const multitargetNetworkManager = _sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkManager.MultitargetNetworkManager.instance();
        const fetchAgent = target.fetchAgent();
        const fulfilledRequest = new Promise(resolve => {
            multitargetNetworkManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkManager.MultitargetNetworkManager.Events.RequestFulfilled, resolve);
        });
        const networkRequest = _sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkRequest.NetworkRequest.create(requestId, request.url, request.url, null, null, null);
        networkRequest.originalResponseHeaders = responseHeaders;
        // The response headers passed to 'interceptedRequest' do not contain any
        // 'set-cookie' headers, because they originate from CDP's 'Fetch.requestPaused'
        // which receives its header information via mojo which in turn filters out
        // 'set-cookie' headers.
        const filteredResponseHeaders = responseHeaders.filter(header => header.name !== 'set-cookie');
        const interceptedRequest = new _sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkManager.InterceptedRequest(fetchAgent, request, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Network.ResourceType.Document, requestId, networkRequest, responseStatusCode, filteredResponseHeaders);
        interceptedRequest.responseBody = async () => {
            return new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.ContentData.ContentData(responseBody, false, 'text/html');
        };
        assert.isTrue(fulfillRequestSpy.notCalled);
        await multitargetNetworkManager.requestIntercepted(interceptedRequest);
        await fulfilledRequest;
        assert.isTrue(fulfillRequestSpy.calledOnceWithExactly(expectedOverriddenResponse));
        assert.deepEqual(networkRequest.setCookieHeaders, expectedSetCookieHeaders);
        fulfillRequestSpy.resetHistory();
    }
    async function checkSetCookieOverride(url, headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders) {
        const responseCode = 200;
        const requestId = 'request_id_for_cookies';
        const responseBody = 'interceptedRequest content';
        const networkRequest = {
            method: 'GET',
            url,
        };
        await checkRequestOverride(target, networkRequest, requestId, responseCode, headersFromServer, responseBody, {
            requestId,
            responseCode,
            body: btoa(responseBody),
            responseHeaders: expectedOverriddenHeaders,
        }, expectedPersistedSetCookieHeaders);
    }
    beforeEach(async () => {
        _sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkManager.MultitargetNetworkManager.dispose();
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createTarget)();
        const networkPersistenceManager = await (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createWorkspaceProject)('file:///path/to/overrides', [
            {
                name: '.headers',
                path: 'www.example.com/',
                content: `[
            {
              "applyTo": "index.html",
              "headers": [{
                "name": "index-only",
                "value": "only added to index.html"
              }]
            },
            {
              "applyTo": "*.css",
              "headers": [{
                "name": "css-only",
                "value": "only added to css files"
              }]
            },
            {
              "applyTo": "path/to/*.js",
              "headers": [{
                "name": "another-header",
                "value": "only added to specific path"
              }]
            },
            {
              "applyTo": "withCookie.html",
              "headers": [{
                "name": "set-cookie",
                "value": "userId=12345"
              }]
            },
            {
              "applyTo": "withCookie2.html",
              "headers": [
                {
                  "name": "set-cookie",
                  "value": "userName=DevTools"
                },
                {
                  "name": "set-cookie",
                  "value": "themeColour=dark"
                }
              ]
            },
            {
              "applyTo": "withCookie3.html",
              "headers": [
                {
                  "name": "set-cookie",
                  "value": "userName=DevTools"
                },
                {
                  "name": "set-cookie",
                  "value": "malformed_override"
                }
              ]
            },
            {
              "applyTo": "cookies/*",
              "headers": [
                {
                  "name": "set-cookie",
                  "value": "unique=value"
                },
                {
                  "name": "set-cookie",
                  "value": "override-me=first"
                }
              ]
            },
            {
              "applyTo": "cookies/mergeCookies.html",
              "headers": [
                {
                  "name": "set-cookie",
                  "value": "override-me=second"
                },
                {
                  "name": "set-cookie",
                  "value": "foo=bar"
                }
              ]
            }
          ]`,
            },
            {
                name: '.headers',
                path: '',
                content: `[
            {
              "applyTo": "*",
              "headers": [{
                "name": "age",
                "value": "overridden"
              }]
            }
          ]`,
            },
            { name: 'helloWorld.html', path: 'www.example.com/', content: 'Hello World!' },
            { name: 'utf16.html', path: 'www.example.com/', content: 'Overwritten with non-UTF16 (TODO: fix this!)' },
            { name: 'something.html', path: 'file:/usr/local/foo/content/', content: 'Override for something' },
            {
                name: '.headers',
                path: 'file:/usr/local/example/',
                content: `[
            {
              "applyTo": "*",
              "headers": [{
                "name": "test-file-urls",
                "value": "file url value"
              }]
            }
          ]`,
            },
            { name: 'index.html', path: 'file:/usr/local/example/', content: 'Overridden file content' },
            {
                name: '.headers',
                path: 'www.longurl.com/longurls/',
                content: `[
            {
              "applyTo": "index.html-${_platform_platform_js__WEBPACK_IMPORTED_MODULE_9__.StringUtilities.hashCode('www.longurl.com/' + LONG_URL_PART).toString(16)}.html",
              "headers": [{
                "name": "long-url-header",
                "value": "long url header value"
              }]
            }
          ]`,
            },
            {
                name: `index.html-${_platform_platform_js__WEBPACK_IMPORTED_MODULE_9__.StringUtilities.hashCode('www.longurl.com/' + LONG_URL_PART).toString(16)}.html`,
                path: 'www.longurl.com/longurls/',
                content: 'Overridden long URL file content',
            },
            {
                name: '.headers',
                path: 'file:/longurls/',
                content: `[
            {
              "applyTo": "index.html-${_platform_platform_js__WEBPACK_IMPORTED_MODULE_9__.StringUtilities.hashCode(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.NetworkPersistenceManager.NetworkPersistenceManager
                    .encodeEncodedPathToLocalPathParts('file:')[0] +
                    '/' + LONG_URL_PART)
                    .toString(16)}.html",
              "headers": [{
                "name": "long-file-url-header",
                "value": "long file url header value"
              }]
            }
          ]`,
            },
        ]);
        sinon.stub(target.fetchAgent(), 'invoke_enable');
        fulfillRequestSpy = sinon.spy(target.fetchAgent(), 'invoke_fulfillRequest');
        await networkPersistenceManager.updateInterceptionPatternsForTests();
    });
    it('can override headers-only for a status 200 request', async () => {
        const responseCode = 200;
        const requestId = 'request_id_1';
        const responseBody = 'interceptedRequest content';
        await checkRequestOverride(target, {
            method: 'GET',
            url: 'https://www.example.com/styles.css',
        }, requestId, responseCode, [{ name: 'content-type', value: 'text/html; charset=utf-8' }], responseBody, {
            requestId,
            responseCode,
            body: btoa(responseBody),
            responseHeaders: [
                { name: 'css-only', value: 'only added to css files' },
                { name: 'age', value: 'overridden' },
                { name: 'content-type', value: 'text/html; charset=utf-8' },
            ],
        });
    });
    it('does not intercept OPTIONS requests', async () => {
        const requestId = 'request_id_1';
        const request = {
            method: 'OPTIONS',
            url: 'https://www.example.com/styles.css',
        };
        const fetchAgent = target.fetchAgent();
        const continueRequestSpy = sinon.spy(fetchAgent, 'invoke_continueRequest');
        const networkRequest = _sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkRequest.NetworkRequest.create(requestId, request.url, request.url, null, null, null);
        const interceptedRequest = new _sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkManager.InterceptedRequest(fetchAgent, request, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Network.ResourceType.Document, requestId, networkRequest);
        interceptedRequest.responseBody = async () => {
            return new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.ContentData.ContentData('interceptedRequest content', false, 'text/html');
        };
        assert.isTrue(continueRequestSpy.notCalled);
        await _sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkManager.MultitargetNetworkManager.instance().requestIntercepted(interceptedRequest);
        assert.isTrue(fulfillRequestSpy.notCalled);
        assert.isTrue(continueRequestSpy.calledOnce);
    });
    it('can override headers and content for a status 200 request', async () => {
        const responseCode = 200;
        const requestId = 'request_id_2';
        const responseBody = 'interceptedRequest content';
        await checkRequestOverride(target, {
            method: 'GET',
            url: 'https://www.example.com/helloWorld.html',
        }, requestId, responseCode, [{ name: 'content-type', value: 'text/html; charset=utf-8' }], responseBody, {
            requestId,
            responseCode,
            body: btoa('Hello World!'),
            responseHeaders: [
                { name: 'age', value: 'overridden' },
                { name: 'content-type', value: 'text/html; charset=utf-8' },
            ],
        });
    });
    describe('NetworkPersistenceManager', () => {
        it('decodes the intercepted response body with the right charset', async () => {
            const requestId = 'request_id_utf_16';
            const request = {
                method: 'GET',
                url: 'https://www.example.com/utf16.html',
            };
            const fetchAgent = target.fetchAgent();
            sinon.spy(fetchAgent, 'invoke_continueRequest');
            const networkRequest = _sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkRequest.NetworkRequest.create(requestId, request.url, request.url, null, null, null);
            networkRequest.originalResponseHeaders = [{ name: 'content-type', value: 'text/html; charset-utf-16' }];
            // Create a quick'n dirty network UISourceCode for the request manually. We need to establish a binding to the
            // overridden file system UISourceCode.
            const networkProject = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ContentProviderBasedProject.ContentProviderBasedProject(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance(), 'testing-network', _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.projectTypes.Network, 'Override network project', false);
            _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().addProject(networkProject);
            const uiSourceCode = networkProject.createUISourceCode('https://www.example.com/utf16.html', _common_common_js__WEBPACK_IMPORTED_MODULE_8__.ResourceType.resourceTypes.Document);
            networkProject.addUISourceCode(uiSourceCode);
            const interceptedRequest = new _sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkManager.InterceptedRequest(fetchAgent, request, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Network.ResourceType.Document, requestId, networkRequest, 200, [{ name: 'content-type', value: 'text/html; charset-utf-16' }]);
            interceptedRequest.responseBody = async () => {
                // Very simple HTML doc base64 encoded.
                return new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.ContentData.ContentData('//48ACEARABPAEMAVABZAFAARQAgAGgAdABtAGwAPgAKADwAcAA+AEkA8QB0AOsAcgBuAOIAdABpAPQAbgDgAGwAaQB6AOYAdABpAPgAbgADJjTYBt88AC8AcAA+AAoA', true, 'text/html', 'utf-16');
            };
            await _sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkManager.MultitargetNetworkManager.instance().requestIntercepted(interceptedRequest);
            const content = await _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.NetworkPersistenceManager.NetworkPersistenceManager.instance()
                .originalContentForUISourceCode(uiSourceCode);
            assert.strictEqual(content, '<!DOCTYPE html>\n<p>Iñtërnâtiônàlizætiøn☃𝌆</p>\n');
        });
    });
    it('can override headers-only for a status 300 (redirect) request', async () => {
        const responseCode = 300;
        const requestId = 'request_id_3';
        const responseBody = 'interceptedRequest content';
        await checkRequestOverride(target, {
            method: 'GET',
            url: 'https://www.example.com/path/to/foo.js',
        }, requestId, responseCode, [{ name: 'content-type', value: 'text/html; charset=utf-8' }], responseBody, {
            requestId,
            responseCode,
            body: '',
            responseHeaders: [
                { name: 'another-header', value: 'only added to specific path' },
                { name: 'age', value: 'overridden' },
                { name: 'content-type', value: 'text/html; charset=utf-8' },
            ],
        });
    });
    it('can override headers and content for a status 300 (redirect) request', async () => {
        const responseCode = 300;
        const requestId = 'request_id_4';
        const responseBody = 'interceptedRequest content';
        await checkRequestOverride(target, {
            method: 'GET',
            url: 'https://www.example.com/helloWorld.html',
        }, requestId, responseCode, [{ name: 'content-type', value: 'text/html; charset=utf-8' }], responseBody, {
            requestId,
            responseCode: 200,
            body: btoa('Hello World!'),
            responseHeaders: [
                { name: 'age', value: 'overridden' },
                { name: 'content-type', value: 'text/html; charset=utf-8' },
            ],
        });
    });
    it('can override headers-only for a status 404 (not found) request', async () => {
        const responseCode = 404;
        const requestId = 'request_id_5';
        const responseBody = 'interceptedRequest content';
        await checkRequestOverride(target, {
            method: 'GET',
            url: 'https://www.example.com/doesNotExist.html',
        }, requestId, responseCode, [{ name: 'content-type', value: 'text/html; charset=utf-8' }], responseBody, {
            requestId,
            responseCode,
            body: btoa(responseBody),
            responseHeaders: [
                { name: 'age', value: 'overridden' },
                { name: 'content-type', value: 'text/html; charset=utf-8' },
            ],
        });
    });
    it('can override headers and content for a status 404 (not found) request', async () => {
        const responseCode = 404;
        const requestId = 'request_id_6';
        const responseBody = 'interceptedRequest content';
        await checkRequestOverride(target, {
            method: 'GET',
            url: 'https://www.example.com/helloWorld.html',
        }, requestId, responseCode, [{ name: 'content-type', value: 'text/html; charset=utf-8' }], responseBody, {
            requestId,
            responseCode: 200,
            body: btoa('Hello World!'),
            responseHeaders: [
                { name: 'age', value: 'overridden' },
                { name: 'content-type', value: 'text/html; charset=utf-8' },
            ],
        });
    });
    it('can override headers and content for a request with a \'file:/\'-URL', async () => {
        const responseCode = 200;
        const requestId = 'request_id_8';
        const responseBody = 'interceptedRequest content';
        await checkRequestOverride(target, {
            method: 'GET',
            url: 'file:///usr/local/example/index.html',
        }, requestId, responseCode, [
            { name: 'content-type', value: 'text/html; charset=utf-8' },
            { name: 'age', value: 'original' },
        ], responseBody, {
            requestId,
            responseCode,
            body: btoa('Overridden file content'),
            responseHeaders: [
                { name: 'test-file-urls', value: 'file url value' },
                { name: 'age', value: 'overridden' },
                { name: 'content-type', value: 'text/html; charset=utf-8' },
            ],
        });
    });
    it('can apply global header overrides to a request with a \'file:/\'-URL', async () => {
        const responseCode = 200;
        const requestId = 'request_id_9';
        const responseBody = 'content of something/index.html';
        await checkRequestOverride(target, {
            method: 'GET',
            url: 'file:///usr/local/whatever/index.html',
        }, requestId, responseCode, [
            { name: 'content-type', value: 'text/html; charset=utf-8' },
            { name: 'age', value: 'original' },
        ], responseBody, {
            requestId,
            responseCode,
            body: btoa(responseBody),
            responseHeaders: [
                { name: 'age', value: 'overridden' },
                { name: 'content-type', value: 'text/html; charset=utf-8' },
            ],
        });
    });
    it('can override headers and content for a request with a very long URL', async () => {
        const responseCode = 200;
        const requestId = 'request_id_10';
        const responseBody = 'interceptedRequest content';
        await checkRequestOverride(target, {
            method: 'GET',
            url: `https://www.longurl.com/${LONG_URL_PART}`,
        }, requestId, responseCode, [
            { name: 'content-type', value: 'text/html; charset=utf-8' },
            { name: 'age', value: 'original' },
        ], responseBody, {
            requestId,
            responseCode,
            body: btoa('Overridden long URL file content'),
            responseHeaders: [
                { name: 'long-url-header', value: 'long url header value' },
                { name: 'age', value: 'overridden' },
                { name: 'content-type', value: 'text/html; charset=utf-8' },
            ],
        });
    });
    it('can override headers for a request with a very long \'file:/\'-URL', async () => {
        const responseCode = 200;
        const requestId = 'request_id_11';
        const responseBody = 'interceptedRequest content';
        await checkRequestOverride(target, {
            method: 'GET',
            url: 'file:///' + LONG_URL_PART,
        }, requestId, responseCode, [
            { name: 'content-type', value: 'text/html; charset=utf-8' },
            { name: 'age', value: 'original' },
        ], responseBody, {
            requestId,
            responseCode,
            body: btoa(responseBody),
            responseHeaders: [
                { name: 'long-file-url-header', value: 'long file url header value' },
                { name: 'age', value: 'overridden' },
                { name: 'content-type', value: 'text/html; charset=utf-8' },
            ],
        });
    });
    it('can override \'set-cookie\' headers', async () => {
        const headersFromServer = [{ name: 'content-type', value: 'text/html; charset=utf-8' }];
        const expectedOverriddenHeaders = [
            { name: 'age', value: 'overridden' },
            { name: 'content-type', value: 'text/html; charset=utf-8' },
            { name: 'set-cookie', value: 'userId=12345' },
        ];
        const expectedPersistedSetCookieHeaders = [{ name: 'set-cookie', value: 'userId=12345' }];
        await checkSetCookieOverride('https://www.example.com/withCookie.html', headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders);
    });
    it('marks both requests as overridden when there are 2 requests with the same URL', async () => {
        const responseCode = 200;
        const requestId1 = 'request_id_1';
        const requestId2 = 'request_id_2';
        const body = 'interceptedRequest content';
        const request = {
            method: 'GET',
            url: 'https://www.example.com/styles.css',
        };
        const originalResponseHeaders = [{ name: 'content-type', value: 'text/html; charset=utf-8' }];
        const responseHeaders = [
            { name: 'css-only', value: 'only added to css files' },
            { name: 'age', value: 'overridden' },
            { name: 'content-type', value: 'text/html; charset=utf-8' },
        ];
        const { dispatcher } = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkManager.NetworkManager);
        dispatcher.requestWillBeSent({ requestId: requestId1, request });
        dispatcher.requestWillBeSent({ requestId: requestId2, request });
        await checkRequestOverride(target, request, requestId1, responseCode, originalResponseHeaders, body, {
            requestId: requestId1,
            responseCode,
            body: btoa(body),
            responseHeaders,
        });
        await checkRequestOverride(target, request, requestId2, responseCode, originalResponseHeaders, body, {
            requestId: requestId2,
            responseCode,
            body: btoa(body),
            responseHeaders,
        });
        assert.isTrue(dispatcher.requestForId(requestId1)?.wasIntercepted());
        assert.isTrue(dispatcher.requestForId(requestId2)?.wasIntercepted());
    });
    it('stores \'set-cookie\' headers on the request', async () => {
        const headersFromServer = [{ name: 'set-cookie', value: 'foo=bar' }];
        const expectedOverriddenHeaders = [
            { name: 'age', value: 'overridden' },
        ];
        const expectedPersistedSetCookieHeaders = [{ name: 'set-cookie', value: 'foo=bar' }];
        await checkSetCookieOverride('https://www.example.com/noCookie.html', headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders);
    });
    it('can override \'set-cookie\' headers when there server also sends \'set-cookie\' headers', async () => {
        const headersFromServer = [{ name: 'set-cookie', value: 'foo=bar' }];
        const expectedOverriddenHeaders = [
            { name: 'age', value: 'overridden' },
            { name: 'set-cookie', value: 'userId=12345' },
        ];
        const expectedPersistedSetCookieHeaders = [{ name: 'set-cookie', value: 'foo=bar' }, { name: 'set-cookie', value: 'userId=12345' }];
        await checkSetCookieOverride('https://www.example.com/withCookie.html', headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders);
    });
    it('can overwrite a cookie value from server with a cookie value from overrides', async () => {
        const headersFromServer = [{ name: 'set-cookie', value: 'userId=999' }];
        const expectedOverriddenHeaders = [
            { name: 'age', value: 'overridden' },
            { name: 'set-cookie', value: 'userId=12345' },
        ];
        const expectedPersistedSetCookieHeaders = [{ name: 'set-cookie', value: 'userId=12345' }];
        await checkSetCookieOverride('https://www.example.com/withCookie.html', headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders);
    });
    it('correctly merges cookies from server and from overrides', async () => {
        const headersFromServer = [
            { name: 'set-cookie', value: 'foo=bar' },
            { name: 'set-cookie', value: 'userName=server' },
        ];
        const expectedOverriddenHeaders = [
            { name: 'age', value: 'overridden' },
            { name: 'set-cookie', value: 'userName=DevTools' },
            { name: 'set-cookie', value: 'themeColour=dark' },
        ];
        const expectedPersistedSetCookieHeaders = [
            { name: 'set-cookie', value: 'foo=bar' },
            { name: 'set-cookie', value: 'userName=DevTools' },
            { name: 'set-cookie', value: 'themeColour=dark' },
        ];
        await checkSetCookieOverride('https://www.example.com/withCookie2.html', headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders);
    });
    it('correctly merges malformed cookies from server and from overrides', async () => {
        const headersFromServer = [
            { name: 'set-cookie', value: 'malformed_original' },
            { name: 'set-cookie', value: 'userName=server' },
        ];
        const expectedOverriddenHeaders = [
            { name: 'age', value: 'overridden' },
            { name: 'set-cookie', value: 'userName=DevTools' },
            { name: 'set-cookie', value: 'malformed_override' },
        ];
        const expectedPersistedSetCookieHeaders = [
            { name: 'set-cookie', value: 'malformed_original' },
            { name: 'set-cookie', value: 'userName=DevTools' },
            { name: 'set-cookie', value: 'malformed_override' },
        ];
        await checkSetCookieOverride('https://www.example.com/withCookie3.html', headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders);
    });
    it('correctly merges \'set-cookie\' headers from server with multiple defined overrides', async () => {
        const headersFromServer = [
            { name: 'set-cookie', value: 'userName=server' },
            { name: 'set-cookie', value: 'override-me=zero' },
        ];
        const expectedOverriddenHeaders = [
            { name: 'age', value: 'overridden' },
            { name: 'set-cookie', value: 'unique=value' },
            { name: 'set-cookie', value: 'override-me=second' },
            { name: 'set-cookie', value: 'foo=bar' },
        ];
        const expectedPersistedSetCookieHeaders = [
            { name: 'set-cookie', value: 'userName=server' },
            { name: 'set-cookie', value: 'override-me=second' },
            { name: 'set-cookie', value: 'unique=value' },
            { name: 'set-cookie', value: 'foo=bar' },
        ];
        await checkSetCookieOverride('https://www.example.com/cookies/mergeCookies.html', headersFromServer, expectedOverriddenHeaders, expectedPersistedSetCookieHeaders);
    });
    it('correctly merges \'set-cookie\' headers with duplicates', () => {
        const original = [
            { name: 'set-cookie', value: 'foo=original' },
            { name: 'set-cookie', value: 'bar=original' },
            { name: 'set-cookie', value: 'baz=original' },
            { name: 'set-cookie', value: 'duplicate=duplicate' },
            { name: 'set-cookie', value: 'duplicate=duplicate' },
            { name: 'set-cookie', value: 'duplicate2=duplicate2' },
            { name: 'set-cookie', value: 'duplicate2=duplicate2' },
            { name: 'set-cookie', value: 'duplicate3=duplicate3' },
            { name: 'set-cookie', value: 'duplicate3=duplicate3' },
            { name: 'set-cookie', value: 'malformed' },
            { name: 'set-cookie', value: 'both' },
            { name: 'set-cookie', value: 'double' },
            { name: 'set-cookie', value: 'double' },
            { name: 'set-cookie', value: 'original_duplicate' },
            { name: 'set-cookie', value: 'original_duplicate' },
            { name: 'set-cookie', value: 'override_duplicate' },
        ];
        const overrides = [
            { name: 'set-cookie', value: 'bar=overridden' },
            { name: 'set-cookie', value: 'baz=overridden1' },
            { name: 'set-cookie', value: 'baz=overridden2' },
            { name: 'set-cookie', value: 'duplicate2=overridden' },
            { name: 'set-cookie', value: 'duplicate3=overridden' },
            { name: 'set-cookie', value: 'duplicate3=overridden' },
            { name: 'set-cookie', value: 'malformed_override' },
            { name: 'set-cookie', value: 'both' },
            { name: 'set-cookie', value: 'original_duplicate' },
            { name: 'set-cookie', value: 'override_duplicate' },
            { name: 'set-cookie', value: 'override_duplicate' },
        ];
        const expected = [
            { name: 'set-cookie', value: 'foo=original' },
            { name: 'set-cookie', value: 'bar=overridden' },
            { name: 'set-cookie', value: 'baz=overridden1' },
            { name: 'set-cookie', value: 'baz=overridden2' },
            { name: 'set-cookie', value: 'duplicate=duplicate' },
            { name: 'set-cookie', value: 'duplicate=duplicate' },
            { name: 'set-cookie', value: 'duplicate2=overridden' },
            { name: 'set-cookie', value: 'duplicate3=overridden' },
            { name: 'set-cookie', value: 'duplicate3=overridden' },
            { name: 'set-cookie', value: 'malformed' },
            { name: 'set-cookie', value: 'both' },
            { name: 'set-cookie', value: 'double' },
            { name: 'set-cookie', value: 'double' },
            { name: 'set-cookie', value: 'original_duplicate' },
            { name: 'set-cookie', value: 'override_duplicate' },
            { name: 'set-cookie', value: 'override_duplicate' },
            { name: 'set-cookie', value: 'malformed_override' },
        ];
        assert.deepStrictEqual(_sdk_js__WEBPACK_IMPORTED_MODULE_10__.NetworkManager.InterceptedRequest.mergeSetCookieHeaders(original, overrides), expected);
    });
});


/***/ }),

/***/ "./src/testing/OverridesHelpers.ts":
/*!*****************************************!*\
  !*** ./src/testing/OverridesHelpers.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWorkspaceProject: () => (/* binding */ createWorkspaceProject),
/* harmony export */   setUpEnvironment: () => (/* binding */ setUpEnvironment)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/breakpoints/breakpoints.js */ "./src/models/breakpoints/breakpoints.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





function setUpEnvironment() {
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
    const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
    const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
    const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({ forceNew: true, resourceMapping, targetManager });
    const breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__.BreakpointManager.BreakpointManager.instance({ forceNew: true, targetManager, workspace, debuggerWorkspaceBinding });
    _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.Persistence.PersistenceImpl.instance({ forceNew: true, workspace, breakpointManager });
    const networkPersistenceManager = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.NetworkPersistenceManager.NetworkPersistenceManager.instance({ forceNew: true, workspace });
    return { networkPersistenceManager, workspace, debuggerWorkspaceBinding };
}
async function createWorkspaceProject(baseUrl, files) {
    const { networkPersistenceManager } = setUpEnvironment();
    const fileSystem = {
        fileSystemPath: () => baseUrl,
        fileSystemBaseURL: baseUrl + '/',
        type: () => _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.projectTypes.FileSystem,
        fileSystemInternal: {
            supportsAutomapping: () => false,
        },
    };
    const uiSourceCodes = new Map();
    const mockProject = {
        uiSourceCodes: () => Array.from(uiSourceCodes.values()),
        id: () => baseUrl,
        fileSystemPath: () => baseUrl,
        uiSourceCodeForURL: (url) => {
            return uiSourceCodes.get(url) || null;
        },
        type: () => _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.projectTypes.FileSystem,
        initialGitFolders: () => [],
        fileSystemInternal: {
            type: () => 'filesystem',
        },
        fileSystemBaseURL: baseUrl + '/',
        createFile: () => { },
    };
    await networkPersistenceManager.setProject(mockProject);
    for (const file of files) {
        const url = file.path.concat(file.name);
        const fileUrl = networkPersistenceManager.fileUrlFromNetworkUrl(url, true);
        uiSourceCodes.set(fileUrl, {
            requestContent: () => Promise.resolve({ content: file.content }),
            url: () => fileUrl,
            project: () => {
                return { ...fileSystem, requestFileBlob: () => new Blob([file.content]) };
            },
            name: () => file.name,
            setWorkingCopy: () => { },
            commitWorkingCopy: () => { },
        });
    }
    await networkPersistenceManager.setProject(mockProject);
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
    workspace.addProject(mockProject);
    return networkPersistenceManager;
}


/***/ })

}]);