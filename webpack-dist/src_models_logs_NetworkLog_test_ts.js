"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_logs_NetworkLog_test_ts"],{

/***/ "./src/models/logs/NetworkLog.test.ts":
/*!********************************************!*\
  !*** ./src/models/logs/NetworkLog.test.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
/* harmony import */ var _logs_logs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../logs/logs.js */ "./src/models/logs/logs.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








function url(input) {
    return input;
}
describe('NetworkLog', () => {
    describe('initiatorInfoForRequest', () => {
        const { initiatorInfoForRequest } = _logs_logs_js__WEBPACK_IMPORTED_MODULE_7__.NetworkLog.NetworkLog;
        it('uses the passed in initiator info if it exists', () => {
            const request = {
                initiator() {
                    return null;
                },
                redirectSource() {
                    return null;
                },
            };
            const existingInfo = {
                info: null,
                chain: null,
                request: undefined,
            };
            const info = initiatorInfoForRequest(request, existingInfo);
            assert.deepEqual(info, {
                type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.InitiatorType.Other,
                url: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.DevToolsPath.EmptyUrlString,
                lineNumber: undefined,
                columnNumber: undefined,
                scriptId: null,
                stack: null,
                initiatorRequest: null,
            });
            assert.deepEqual(info, existingInfo.info);
        });
        it('returns "other" if there is no initiator or redirect', () => {
            const request = {
                initiator() {
                    return null;
                },
                redirectSource() {
                    return null;
                },
            };
            const info = initiatorInfoForRequest(request);
            assert.deepEqual(info, {
                type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.InitiatorType.Other,
                url: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.DevToolsPath.EmptyUrlString,
                lineNumber: undefined,
                columnNumber: undefined,
                scriptId: null,
                stack: null,
                initiatorRequest: null,
            });
        });
        it('returns the redirect info if the request has a redirect', () => {
            const request = {
                initiator() {
                    return null;
                },
                redirectSource() {
                    return {
                        url() {
                            return url('http://localhost:3000/example.js');
                        },
                    };
                },
            };
            const info = initiatorInfoForRequest(request);
            assert.deepEqual(info, {
                type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.InitiatorType.Redirect,
                url: url('http://localhost:3000/example.js'),
                lineNumber: undefined,
                columnNumber: undefined,
                scriptId: null,
                stack: null,
                initiatorRequest: null,
            });
        });
        it('returns the initiator info if the initiator is the parser', () => {
            const request = {
                initiator() {
                    return {
                        type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.InitiatorType.Parser,
                        url: url('http://localhost:3000/example.js'),
                        lineNumber: 5,
                        columnNumber: 6,
                    };
                },
                redirectSource() {
                    return null;
                },
            };
            const info = initiatorInfoForRequest(request);
            assert.deepEqual(info, {
                type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.InitiatorType.Parser,
                url: url('http://localhost:3000/example.js'),
                lineNumber: 5,
                columnNumber: 6,
                scriptId: null,
                stack: null,
                initiatorRequest: null,
            });
        });
        it('returns the initiator info if the initiator is a script with a stack', () => {
            const request = {
                initiator() {
                    return {
                        type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.InitiatorType.Script,
                        url: url('http://localhost:3000/example.js'),
                        stack: {
                            callFrames: [{
                                    functionName: 'foo',
                                    url: url('http://localhost:3000/example.js'),
                                    scriptId: 'script-id-1',
                                    lineNumber: 5,
                                    columnNumber: 6,
                                }],
                        },
                    };
                },
                redirectSource() {
                    return null;
                },
            };
            const info = initiatorInfoForRequest(request);
            assert.deepEqual(info, {
                type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.InitiatorType.Script,
                url: url('http://localhost:3000/example.js'),
                lineNumber: 5,
                columnNumber: 6,
                scriptId: 'script-id-1',
                stack: {
                    callFrames: [{
                            functionName: 'foo',
                            url: url('http://localhost:3000/example.js'),
                            scriptId: 'script-id-1',
                            lineNumber: 5,
                            columnNumber: 6,
                        }],
                },
                initiatorRequest: null,
            });
        });
        it('deals with a nested stack and finds the top frame to use for the script-id', () => {
            const request = {
                initiator() {
                    return {
                        type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.InitiatorType.Script,
                        url: url('http://localhost:3000/example.js'),
                        stack: {
                            parent: {
                                callFrames: [{
                                        functionName: 'foo',
                                        url: url('http://localhost:3000/example.js'),
                                        scriptId: 'script-id-1',
                                        lineNumber: 5,
                                        columnNumber: 6,
                                    }],
                            },
                            callFrames: [],
                        },
                    };
                },
                redirectSource() {
                    return null;
                },
            };
            const info = initiatorInfoForRequest(request);
            assert.deepEqual(info, {
                type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.InitiatorType.Script,
                url: url('http://localhost:3000/example.js'),
                lineNumber: 5,
                columnNumber: 6,
                scriptId: 'script-id-1',
                stack: null,
                initiatorRequest: null,
            });
        });
        it('returns the initiator info if the initiator is a script without a stack', () => {
            const request = {
                initiator() {
                    return {
                        type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.InitiatorType.Script,
                        url: url('http://localhost:3000/example.js'),
                    };
                },
                redirectSource() {
                    return null;
                },
            };
            const info = initiatorInfoForRequest(request);
            assert.deepEqual(info, {
                type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.InitiatorType.Script,
                url: url('http://localhost:3000/example.js'),
                lineNumber: undefined,
                columnNumber: undefined,
                scriptId: null,
                stack: null,
                initiatorRequest: null,
            });
        });
        it('returns the info for a Preload request', () => {
            const request = {
                initiator() {
                    return {
                        type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.InitiatorType.Preload,
                    };
                },
                redirectSource() {
                    return null;
                },
            };
            const info = initiatorInfoForRequest(request);
            assert.deepEqual(info, {
                type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.InitiatorType.Preload,
                url: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.DevToolsPath.EmptyUrlString,
                lineNumber: undefined,
                columnNumber: undefined,
                scriptId: null,
                stack: null,
                initiatorRequest: null,
            });
        });
        it('returns the info for a Preflight request', () => {
            const PREFLIGHT_INITIATOR_REQUEST = {};
            const request = {
                initiator() {
                    return {
                        type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.InitiatorType.Preflight,
                    };
                },
                preflightInitiatorRequest() {
                    return PREFLIGHT_INITIATOR_REQUEST;
                },
                redirectSource() {
                    return null;
                },
            };
            const info = initiatorInfoForRequest(request);
            assert.deepEqual(info, {
                type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.InitiatorType.Preflight,
                url: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.DevToolsPath.EmptyUrlString,
                lineNumber: undefined,
                columnNumber: undefined,
                scriptId: null,
                stack: null,
                initiatorRequest: PREFLIGHT_INITIATOR_REQUEST,
            });
        });
        it('returns the info for a signed exchange request', () => {
            const request = {
                initiator() {
                    return {
                        type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.InitiatorType.SignedExchange,
                        url: url('http://localhost:3000/example.js'),
                    };
                },
                redirectSource() {
                    return null;
                },
            };
            const info = initiatorInfoForRequest(request);
            assert.deepEqual(info, {
                type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.InitiatorType.SignedExchange,
                url: url('http://localhost:3000/example.js'),
                lineNumber: undefined,
                columnNumber: undefined,
                scriptId: null,
                stack: null,
                initiatorRequest: null,
            });
        });
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithMockConnection)('NetworkLog', () => {
    it('clears on main frame navigation', () => {
        const networkLog = _logs_logs_js__WEBPACK_IMPORTED_MODULE_7__.NetworkLog.NetworkLog.instance();
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Tab });
        const mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)({ parentTarget: tabTarget });
        const mainFrame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_6__.getMainFrame)(mainFrameTarget);
        const subframe = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_6__.getMainFrame)((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)({ parentTarget: mainFrameTarget }));
        let networkLogResetEvents = 0;
        networkLog.addEventListener(_logs_logs_js__WEBPACK_IMPORTED_MODULE_7__.NetworkLog.Events.Reset, () => ++networkLogResetEvents);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_6__.navigate)(subframe);
        assert.strictEqual(networkLogResetEvents, 0);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_6__.navigate)(mainFrame);
        assert.strictEqual(networkLogResetEvents, 1);
    });
    describe('on primary page changed', () => {
        let networkLog;
        let target;
        beforeEach(() => {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network-log.preserve-log').set(false);
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)();
            const networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.NetworkManager);
            assert.exists(networkManager);
            networkLog = _logs_logs_js__WEBPACK_IMPORTED_MODULE_7__.NetworkLog.NetworkLog.instance();
            const networkDispatcher = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.NetworkDispatcher(networkManager);
            const requestWillBeSentEvent1 = { requestId: 'mockId1', request: { url: 'example.com' }, loaderId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_6__.LOADER_ID };
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent1);
            const requestWillBeSentEvent2 = { requestId: 'mockId2', request: { url: 'foo.com' }, loaderId: 'OTHER_LOADER_ID' };
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent2);
            assert.strictEqual(networkLog.requests().length, 2);
        });
        it('discards requests with mismatched loaderId on navigation', () => {
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_6__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_6__.getMainFrame)(target));
            assert.deepEqual(networkLog.requests().map(request => request.requestId()), ['mockId1']);
        });
        it('does not discard requests on prerender activation', () => {
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_6__.activate)(target);
            assert.deepEqual(networkLog.requests().map(request => request.requestId()), ['mockId1', 'mockId2']);
        });
    });
    it('removes preflight requests with a UnexpectedPrivateNetworkAccess CORS error', () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)();
        const networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.NetworkManager);
        if (!networkManager) {
            throw new Error('No networkManager');
        }
        const networkLog = _logs_logs_js__WEBPACK_IMPORTED_MODULE_7__.NetworkLog.NetworkLog.instance();
        let removedRequest = null;
        networkLog.addEventListener(_logs_logs_js__WEBPACK_IMPORTED_MODULE_7__.NetworkLog.Events.RequestRemoved, event => {
            assert.isNull(removedRequest, 'Request was removed multiple times.');
            removedRequest = event.data.request;
        });
        const request = {
            requestId: () => 'request-id',
            isPreflightRequest: () => true,
            initiator: () => null,
            corsErrorStatus: () => ({ corsError: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.UnexpectedPrivateNetworkAccess }),
        };
        networkManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.Events.RequestStarted, { request, originalRequest: null });
        assert.strictEqual(networkLog.requests().length, 1);
        networkManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.Events.RequestUpdated, request);
        assert.strictEqual(request, removedRequest);
        assert.strictEqual(networkLog.requests().length, 0);
    });
});


/***/ })

}]);