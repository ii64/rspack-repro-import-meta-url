"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_logs_NetworkLog_test_js"], {
"./models/logs/NetworkLog.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _logs_logs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logs/logs.js */ "./models/logs/logs.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







function url(input) {
    return input;
}
describe('NetworkLog', function() {
    describe('initiatorInfoForRequest', function() {
        var initiatorInfoForRequest = _logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.NetworkLog.initiatorInfoForRequest;
        it('uses the passed in initiator info if it exists', function() {
            var request = {
                initiator: function initiator() {
                    return null;
                },
                redirectSource: function redirectSource() {
                    return null;
                }
            };
            var existingInfo = {
                info: null,
                chain: null,
                request: undefined
            };
            var info = initiatorInfoForRequest(request, existingInfo);
            assert.deepEqual(info, {
                type: "other" /* SDK.NetworkRequest.InitiatorType.Other */ ,
                url: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.DevToolsPath.EmptyUrlString,
                lineNumber: undefined,
                columnNumber: undefined,
                scriptId: null,
                stack: null,
                initiatorRequest: null
            });
            assert.deepEqual(info, existingInfo.info);
        });
        it('returns "other" if there is no initiator or redirect', function() {
            var request = {
                initiator: function initiator() {
                    return null;
                },
                redirectSource: function redirectSource() {
                    return null;
                }
            };
            var info = initiatorInfoForRequest(request);
            assert.deepEqual(info, {
                type: "other" /* SDK.NetworkRequest.InitiatorType.Other */ ,
                url: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.DevToolsPath.EmptyUrlString,
                lineNumber: undefined,
                columnNumber: undefined,
                scriptId: null,
                stack: null,
                initiatorRequest: null
            });
        });
        it('returns the redirect info if the request has a redirect', function() {
            var request = {
                initiator: function initiator() {
                    return null;
                },
                redirectSource: function redirectSource() {
                    return {
                        url: function url1() {
                            return url('http://localhost:3000/example.js');
                        }
                    };
                }
            };
            var info = initiatorInfoForRequest(request);
            assert.deepEqual(info, {
                type: "redirect" /* SDK.NetworkRequest.InitiatorType.Redirect */ ,
                url: url('http://localhost:3000/example.js'),
                lineNumber: undefined,
                columnNumber: undefined,
                scriptId: null,
                stack: null,
                initiatorRequest: null
            });
        });
        it('returns the initiator info if the initiator is the parser', function() {
            var request = {
                initiator: function initiator() {
                    return {
                        type: "parser" /* Protocol.Network.InitiatorType.Parser */ ,
                        url: url('http://localhost:3000/example.js'),
                        lineNumber: 5,
                        columnNumber: 6
                    };
                },
                redirectSource: function redirectSource() {
                    return null;
                }
            };
            var info = initiatorInfoForRequest(request);
            assert.deepEqual(info, {
                type: "parser" /* SDK.NetworkRequest.InitiatorType.Parser */ ,
                url: url('http://localhost:3000/example.js'),
                lineNumber: 5,
                columnNumber: 6,
                scriptId: null,
                stack: null,
                initiatorRequest: null
            });
        });
        it('returns the initiator info if the initiator is a script with a stack', function() {
            var request = {
                initiator: function initiator() {
                    return {
                        type: "script" /* Protocol.Network.InitiatorType.Script */ ,
                        url: url('http://localhost:3000/example.js'),
                        stack: {
                            callFrames: [
                                {
                                    functionName: 'foo',
                                    url: url('http://localhost:3000/example.js'),
                                    scriptId: 'script-id-1',
                                    lineNumber: 5,
                                    columnNumber: 6
                                }
                            ]
                        }
                    };
                },
                redirectSource: function redirectSource() {
                    return null;
                }
            };
            var info = initiatorInfoForRequest(request);
            assert.deepEqual(info, {
                type: "script" /* SDK.NetworkRequest.InitiatorType.Script */ ,
                url: url('http://localhost:3000/example.js'),
                lineNumber: 5,
                columnNumber: 6,
                scriptId: 'script-id-1',
                stack: {
                    callFrames: [
                        {
                            functionName: 'foo',
                            url: url('http://localhost:3000/example.js'),
                            scriptId: 'script-id-1',
                            lineNumber: 5,
                            columnNumber: 6
                        }
                    ]
                },
                initiatorRequest: null
            });
        });
        it('deals with a nested stack and finds the top frame to use for the script-id', function() {
            var request = {
                initiator: function initiator() {
                    return {
                        type: "script" /* Protocol.Network.InitiatorType.Script */ ,
                        url: url('http://localhost:3000/example.js'),
                        stack: {
                            parent: {
                                callFrames: [
                                    {
                                        functionName: 'foo',
                                        url: url('http://localhost:3000/example.js'),
                                        scriptId: 'script-id-1',
                                        lineNumber: 5,
                                        columnNumber: 6
                                    }
                                ]
                            },
                            callFrames: []
                        }
                    };
                },
                redirectSource: function redirectSource() {
                    return null;
                }
            };
            var info = initiatorInfoForRequest(request);
            assert.deepEqual(info, {
                type: "script" /* SDK.NetworkRequest.InitiatorType.Script */ ,
                url: url('http://localhost:3000/example.js'),
                lineNumber: 5,
                columnNumber: 6,
                scriptId: 'script-id-1',
                stack: null,
                initiatorRequest: null
            });
        });
        it('returns the initiator info if the initiator is a script without a stack', function() {
            var request = {
                initiator: function initiator() {
                    return {
                        type: "script" /* Protocol.Network.InitiatorType.Script */ ,
                        url: url('http://localhost:3000/example.js')
                    };
                },
                redirectSource: function redirectSource() {
                    return null;
                }
            };
            var info = initiatorInfoForRequest(request);
            assert.deepEqual(info, {
                type: "script" /* SDK.NetworkRequest.InitiatorType.Script */ ,
                url: url('http://localhost:3000/example.js'),
                lineNumber: undefined,
                columnNumber: undefined,
                scriptId: null,
                stack: null,
                initiatorRequest: null
            });
        });
        it('returns the info for a Preload request', function() {
            var request = {
                initiator: function initiator() {
                    return {
                        type: "preload" /* Protocol.Network.InitiatorType.Preload */ 
                    };
                },
                redirectSource: function redirectSource() {
                    return null;
                }
            };
            var info = initiatorInfoForRequest(request);
            assert.deepEqual(info, {
                type: "preload" /* SDK.NetworkRequest.InitiatorType.Preload */ ,
                url: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.DevToolsPath.EmptyUrlString,
                lineNumber: undefined,
                columnNumber: undefined,
                scriptId: null,
                stack: null,
                initiatorRequest: null
            });
        });
        it('returns the info for a Preflight request', function() {
            var PREFLIGHT_INITIATOR_REQUEST = {};
            var request = {
                initiator: function initiator() {
                    return {
                        type: "preflight" /* Protocol.Network.InitiatorType.Preflight */ 
                    };
                },
                preflightInitiatorRequest: function preflightInitiatorRequest() {
                    return PREFLIGHT_INITIATOR_REQUEST;
                },
                redirectSource: function redirectSource() {
                    return null;
                }
            };
            var info = initiatorInfoForRequest(request);
            assert.deepEqual(info, {
                type: "preflight" /* SDK.NetworkRequest.InitiatorType.Preflight */ ,
                url: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.DevToolsPath.EmptyUrlString,
                lineNumber: undefined,
                columnNumber: undefined,
                scriptId: null,
                stack: null,
                initiatorRequest: PREFLIGHT_INITIATOR_REQUEST
            });
        });
        it('returns the info for a signed exchange request', function() {
            var request = {
                initiator: function initiator() {
                    return {
                        type: "SignedExchange" /* Protocol.Network.InitiatorType.SignedExchange */ ,
                        url: url('http://localhost:3000/example.js')
                    };
                },
                redirectSource: function redirectSource() {
                    return null;
                }
            };
            var info = initiatorInfoForRequest(request);
            assert.deepEqual(info, {
                type: "signedExchange" /* SDK.NetworkRequest.InitiatorType.SignedExchange */ ,
                url: url('http://localhost:3000/example.js'),
                lineNumber: undefined,
                columnNumber: undefined,
                scriptId: null,
                stack: null,
                initiatorRequest: null
            });
        });
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('NetworkLog', function() {
    it('clears on main frame navigation', function() {
        var networkLog = _logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.NetworkLog.instance();
        var tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({
            type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Tab
        });
        var mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({
            parentTarget: tabTarget
        });
        var mainFrame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFrame)(mainFrameTarget);
        var subframe = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFrame)((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({
            parentTarget: mainFrameTarget
        }));
        var networkLogResetEvents = 0;
        networkLog.addEventListener(_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.Events.Reset, function() {
            return ++networkLogResetEvents;
        });
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.navigate)(subframe);
        assert.strictEqual(networkLogResetEvents, 0);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.navigate)(mainFrame);
        assert.strictEqual(networkLogResetEvents, 1);
    });
    describe('on primary page changed', function() {
        var networkLog;
        var target;
        beforeEach(function() {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network-log.preserve-log').set(false);
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            var networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.NetworkManager);
            assert.exists(networkManager);
            networkLog = _logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.NetworkLog.instance();
            var networkDispatcher = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.NetworkDispatcher(networkManager);
            var requestWillBeSentEvent1 = {
                requestId: 'mockId1',
                request: {
                    url: 'example.com'
                },
                loaderId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.LOADER_ID
            };
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent1);
            var requestWillBeSentEvent2 = {
                requestId: 'mockId2',
                request: {
                    url: 'foo.com'
                },
                loaderId: 'OTHER_LOADER_ID'
            };
            networkDispatcher.requestWillBeSent(requestWillBeSentEvent2);
            assert.strictEqual(networkLog.requests().length, 2);
        });
        it('discards requests with mismatched loaderId on navigation', function() {
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFrame)(target));
            assert.deepEqual(networkLog.requests().map(function(request) {
                return request.requestId();
            }), [
                'mockId1'
            ]);
        });
        it('does not discard requests on prerender activation', function() {
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.activate)(target);
            assert.deepEqual(networkLog.requests().map(function(request) {
                return request.requestId();
            }), [
                'mockId1',
                'mockId2'
            ]);
        });
    });
    it('removes preflight requests with a UnexpectedPrivateNetworkAccess CORS error', function() {
        var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
        var networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.NetworkManager);
        if (!networkManager) {
            throw new Error('No networkManager');
        }
        var networkLog = _logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.NetworkLog.instance();
        var removedRequest = null;
        networkLog.addEventListener(_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.Events.RequestRemoved, function(event) {
            assert.isNull(removedRequest, 'Request was removed multiple times.');
            removedRequest = event.data.request;
        });
        var request = {
            requestId: function() {
                return 'request-id';
            },
            isPreflightRequest: function() {
                return true;
            },
            initiator: function() {
                return null;
            },
            corsErrorStatus: function() {
                return {
                    corsError: "UnexpectedPrivateNetworkAccess" /* Protocol.Network.CorsError.UnexpectedPrivateNetworkAccess */ 
                };
            }
        };
        networkManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.Events.RequestStarted, {
            request: request,
            originalRequest: null
        });
        assert.strictEqual(networkLog.requests().length, 1);
        networkManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.Events.RequestUpdated, request);
        assert.strictEqual(request, removedRequest);
        assert.strictEqual(networkLog.requests().length, 0);
    });
}); //# sourceMappingURL=NetworkLog.test.js.map


}),

}]);