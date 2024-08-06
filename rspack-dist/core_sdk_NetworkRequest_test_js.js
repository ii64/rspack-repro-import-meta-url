"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_NetworkRequest_test_js"], {
"./core/sdk/NetworkRequest.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _testing_Cookies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/Cookies.js */ "./testing/Cookies.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _platform_platform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
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






describe('NetworkRequest', function() {
    it('can parse statusText from the first line of responseReceivedExtraInfo\'s headersText', function() {
        assert.strictEqual(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkRequest.NetworkRequest.parseStatusTextFromResponseHeadersText('HTTP/1.1 304 not modified'), 'not modified');
        assert.strictEqual(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkRequest.NetworkRequest.parseStatusTextFromResponseHeadersText('HTTP/1.1 200 OK'), 'OK');
        assert.strictEqual(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkRequest.NetworkRequest.parseStatusTextFromResponseHeadersText('HTTP/1.1 200 OK\r\n\r\nfoo: bar\r\n'), 'OK');
    });
    it('parses response cookies from headers', function() {
        var request = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkRequest.NetworkRequest.createWithoutBackendRequest('requestId', 'url', 'documentURL', null);
        request.addExtraResponseInfo({
            blockedResponseCookies: [],
            responseHeaders: [
                {
                    name: 'Set-Cookie',
                    value: 'foo=bar'
                },
                {
                    name: 'Set-Cookie',
                    value: 'baz=qux'
                }
            ],
            resourceIPAddressSpace: 'Public'
        });
        assert.strictEqual(request.responseCookies.length, 2);
        (0,_testing_Cookies_js__WEBPACK_IMPORTED_MODULE_1__.expectCookie)(request.responseCookies[0], {
            name: 'foo',
            value: 'bar',
            size: 8
        });
        (0,_testing_Cookies_js__WEBPACK_IMPORTED_MODULE_1__.expectCookie)(request.responseCookies[1], {
            name: 'baz',
            value: 'qux',
            size: 7
        });
    });
    it('infers status text from status code if none given', function() {
        var fakeRequest = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkRequest.NetworkRequest.createWithoutBackendRequest('fakeRequestId', 'url1', 'documentURL', null);
        fakeRequest.statusCode = 200;
        assert.strictEqual(fakeRequest.statusText, '');
        assert.strictEqual(fakeRequest.getInferredStatusText(), 'OK');
    });
    it('does not infer status text from unknown status code', function() {
        var fakeRequest = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkRequest.NetworkRequest.createWithoutBackendRequest('fakeRequestId', 'url1', 'documentURL', null);
        fakeRequest.statusCode = 999;
        assert.strictEqual(fakeRequest.statusText, '');
        assert.strictEqual(fakeRequest.getInferredStatusText(), '');
    });
    it('infers status text only when no status text given', function() {
        var fakeRequest = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkRequest.NetworkRequest.createWithoutBackendRequest('fakeRequestId', 'url1', 'documentURL', null);
        fakeRequest.statusCode = 200;
        fakeRequest.statusText = 'Prefer me';
        assert.strictEqual(fakeRequest.statusText, 'Prefer me');
        assert.strictEqual(fakeRequest.getInferredStatusText(), 'Prefer me');
    });
    it('includes partition key in response cookies', function() {
        var request = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkRequest.NetworkRequest.createWithoutBackendRequest('requestId', 'url', 'documentURL', null);
        request.addExtraResponseInfo({
            blockedResponseCookies: [],
            responseHeaders: [
                {
                    name: 'Set-Cookie',
                    value: 'foo=bar'
                },
                {
                    name: 'Set-Cookie',
                    value: 'baz=qux; Secure;Partitioned'
                }
            ],
            resourceIPAddressSpace: 'Public',
            cookiePartitionKey: {
                topLevelSite: 'partitionKey',
                hasCrossSiteAncestor: false
            }
        });
        assert.strictEqual(request.responseCookies.length, 2);
        (0,_testing_Cookies_js__WEBPACK_IMPORTED_MODULE_1__.expectCookie)(request.responseCookies[0], {
            name: 'foo',
            value: 'bar',
            size: 8
        });
        (0,_testing_Cookies_js__WEBPACK_IMPORTED_MODULE_1__.expectCookie)(request.responseCookies[1], {
            name: 'baz',
            value: 'qux',
            secure: true,
            partitionKey: {
                topLevelSite: 'partitionKey',
                hasCrossSiteAncestor: false
            },
            size: 27
        });
    });
    it('determines whether the response headers have been overridden', function() {
        var request = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkRequest.NetworkRequest.createWithoutBackendRequest('requestId', 'url', 'documentURL', null);
        request.responseHeaders = [
            {
                name: 'foo',
                value: 'bar'
            }
        ];
        request.originalResponseHeaders = [
            {
                name: 'foo',
                value: 'baz'
            }
        ];
        assert.isTrue(request.hasOverriddenHeaders());
        request.originalResponseHeaders = [];
        assert.isFalse(request.hasOverriddenHeaders());
        request.originalResponseHeaders = [
            {
                name: 'Foo',
                value: 'bar'
            }
        ];
        assert.isFalse(request.hasOverriddenHeaders());
        request.originalResponseHeaders = [
            {
                name: 'Foo',
                value: 'Bar'
            }
        ];
        assert.isTrue(request.hasOverriddenHeaders());
        request.responseHeaders = [
            {
                name: 'one',
                value: 'first'
            },
            {
                name: 'two',
                value: 'second'
            }
        ];
        request.originalResponseHeaders = [
            {
                name: 'ONE',
                value: 'first'
            },
            {
                name: 'Two',
                value: 'second'
            }
        ];
        assert.isFalse(request.hasOverriddenHeaders());
        request.originalResponseHeaders = [
            {
                name: 'one',
                value: 'first'
            }
        ];
        assert.isTrue(request.hasOverriddenHeaders());
        request.originalResponseHeaders = [
            {
                name: 'two',
                value: 'second'
            },
            {
                name: 'one',
                value: 'first'
            }
        ];
        assert.isFalse(request.hasOverriddenHeaders());
        request.originalResponseHeaders = [
            {
                name: 'one',
                value: 'second'
            },
            {
                name: 'two',
                value: 'first'
            }
        ];
        assert.isTrue(request.hasOverriddenHeaders());
        request.originalResponseHeaders = [
            {
                name: 'one',
                value: 'first'
            },
            {
                name: 'two',
                value: 'second'
            },
            {
                name: 'two',
                value: 'second'
            }
        ];
        assert.isTrue(request.hasOverriddenHeaders());
    });
    it('considers duplicate headers which only differ in the order of their values as overridden', function() {
        var request = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkRequest.NetworkRequest.createWithoutBackendRequest('requestId', 'url', 'documentURL', null);
        request.responseHeaders = [
            {
                name: 'duplicate',
                value: 'first'
            },
            {
                name: 'duplicate',
                value: 'second'
            }
        ];
        request.originalResponseHeaders = [
            {
                name: 'duplicate',
                value: 'second'
            },
            {
                name: 'duplicate',
                value: 'first'
            }
        ];
        assert.isTrue(request.hasOverriddenHeaders());
    });
    it('can handle the case of duplicate cookies with only 1 of them being blocked', /*#__PURE__*/ _async_to_generator(function() {
        var request;
        return _ts_generator(this, function(_state) {
            request = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkRequest.NetworkRequest.create('requestId', 'url', 'documentURL', null, null, null);
            request.addExtraResponseInfo({
                responseHeaders: [
                    {
                        name: 'Set-Cookie',
                        value: 'foo=duplicate; Path=/\nfoo=duplicate; Path=/'
                    }
                ],
                blockedResponseCookies: [
                    {
                        blockedReasons: [
                            "SameSiteNoneInsecure" /* Protocol.Network.SetCookieBlockedReason.SameSiteNoneInsecure */ 
                        ],
                        cookie: null,
                        cookieLine: 'foo=duplicate; Path=/'
                    }
                ],
                resourceIPAddressSpace: "Public" /* Protocol.Network.IPAddressSpace.Public */ ,
                statusCode: undefined,
                cookiePartitionKey: undefined,
                cookiePartitionKeyOpaque: undefined,
                exemptedResponseCookies: undefined
            });
            assert.deepEqual(request.responseCookies.map(function(cookie) {
                return cookie.getCookieLine();
            }), [
                'foo=duplicate; Path=/',
                'foo=duplicate; Path=/'
            ]);
            assert.deepEqual(request.blockedResponseCookies(), [
                {
                    blockedReasons: [
                        "SameSiteNoneInsecure" /* Protocol.Network.SetCookieBlockedReason.SameSiteNoneInsecure */ 
                    ],
                    cookie: null,
                    cookieLine: 'foo=duplicate; Path=/'
                }
            ]);
            assert.deepEqual(request.nonBlockedResponseCookies().map(function(cookie) {
                return cookie.getCookieLine();
            }), [
                'foo=duplicate; Path=/'
            ]);
            return [
                2
            ];
        });
    }));
    it('can handle the case of exempted cookies', /*#__PURE__*/ _async_to_generator(function() {
        var request, cookie;
        return _ts_generator(this, function(_state) {
            request = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkRequest.NetworkRequest.create('requestId', 'url', 'documentURL', null, null, null);
            cookie = new _sdk_js__WEBPACK_IMPORTED_MODULE_5__.Cookie.Cookie('name', 'value');
            cookie.addAttribute("same-site" /* SDK.Cookie.Attribute.SameSite */ , 'None');
            cookie.addAttribute("secure" /* SDK.Cookie.Attribute.Secure */ , true);
            cookie.setCookieLine('name=value; Path=/; SameSite=None; Secure;');
            request.addExtraResponseInfo({
                responseHeaders: [
                    {
                        name: 'Set-Cookie',
                        value: cookie.getCookieLine()
                    }
                ],
                blockedResponseCookies: [],
                resourceIPAddressSpace: "Public" /* Protocol.Network.IPAddressSpace.Public */ ,
                statusCode: undefined,
                cookiePartitionKey: undefined,
                cookiePartitionKeyOpaque: undefined,
                exemptedResponseCookies: [
                    {
                        cookie: cookie,
                        cookieLine: cookie.getCookieLine(),
                        exemptionReason: "TPCDHeuristics" /* Protocol.Network.CookieExemptionReason.TPCDHeuristics */ 
                    }
                ]
            });
            assert.deepEqual(request.responseCookies.map(function(cookie) {
                return cookie.getCookieLine();
            }), [
                'name=value; Path=/; SameSite=None; Secure;'
            ]);
            assert.deepEqual(request.nonBlockedResponseCookies().map(function(cookie) {
                return cookie.getCookieLine();
            }), [
                'name=value; Path=/; SameSite=None; Secure;'
            ]);
            assert.deepEqual(request.exemptedResponseCookies().map(function(cookie) {
                return cookie.cookie.getCookieLine();
            }), [
                'name=value; Path=/; SameSite=None; Secure;'
            ]);
            assert.deepEqual(request.exemptedResponseCookies().map(function(cookie) {
                return cookie.exemptionReason;
            }), [
                "TPCDHeuristics" /* Protocol.Network.CookieExemptionReason.TPCDHeuristics */ 
            ]);
            request.addExtraRequestInfo({
                blockedRequestCookies: [],
                requestHeaders: [],
                includedRequestCookies: [
                    {
                        exemptionReason: "EnterprisePolicy" /* Protocol.Network.CookieExemptionReason.EnterprisePolicy */ ,
                        cookie: cookie
                    }
                ],
                connectTiming: {
                    requestTime: 0
                }
            });
            assert.deepEqual(request.includedRequestCookies().map(function(included) {
                return included.cookie.getCookieLine();
            }), [
                'name=value; Path=/; SameSite=None; Secure;'
            ]);
            assert.deepEqual(request.includedRequestCookies().map(function(included) {
                return included.exemptionReason;
            }), [
                "EnterprisePolicy" /* Protocol.Network.CookieExemptionReason.EnterprisePolicy */ 
            ]);
            return [
                2
            ];
        });
    }));
    it('preserves order of headers in case of duplicates', function() {
        var request = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkRequest.NetworkRequest.createWithoutBackendRequest('requestId', 'url', 'documentURL', null);
        var responseHeaders = [
            {
                name: '1ab',
                value: 'middle'
            },
            {
                name: '1aB',
                value: 'last'
            }
        ];
        request.addExtraResponseInfo({
            blockedResponseCookies: [],
            responseHeaders: responseHeaders,
            resourceIPAddressSpace: 'Public'
        });
        assert.deepEqual(request.sortedResponseHeaders, responseHeaders);
    });
    it('treats multiple headers with the same name the same as single header with comma-separated values', function() {
        var request = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkRequest.NetworkRequest.createWithoutBackendRequest('requestId', 'url', 'documentURL', null);
        request.responseHeaders = [
            {
                name: 'duplicate',
                value: 'first, second'
            }
        ];
        request.originalResponseHeaders = [
            {
                name: 'duplicate',
                value: 'first'
            },
            {
                name: 'duplicate',
                value: 'second'
            }
        ];
        assert.isFalse(request.hasOverriddenHeaders());
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('NetworkRequest', function() {
    var networkManagerForRequestStub;
    var cookie;
    var addBlockedCookieSpy;
    var target;
    beforeEach(function() {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        var networkManager = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager);
        assert.exists(networkManager);
        networkManagerForRequestStub = sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager, 'forRequest').returns(networkManager);
        cookie = new _sdk_js__WEBPACK_IMPORTED_MODULE_5__.Cookie.Cookie('name', 'value');
        addBlockedCookieSpy = sinon.spy(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CookieModel.CookieModel.prototype, 'addBlockedCookie');
    });
    afterEach(function() {
        networkManagerForRequestStub.restore();
    });
    it('adds blocked response cookies to - and removes exempted cookies from cookieModel', /*#__PURE__*/ _async_to_generator(function() {
        var removeBlockedCookieSpy, cookieModel, url, request, _, _1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    removeBlockedCookieSpy = sinon.spy(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CookieModel.CookieModel.prototype, 'removeBlockedCookie');
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Network.getCookies', function() {
                        return {
                            cookies: []
                        };
                    });
                    cookieModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CookieModel.CookieModel);
                    assert.exists(cookieModel);
                    url = 'url';
                    request = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkRequest.NetworkRequest.create('requestId', url, 'documentURL', null, null, null);
                    request.addExtraResponseInfo({
                        responseHeaders: [
                            {
                                name: 'Set-Cookie',
                                value: 'name=value; Path=/'
                            }
                        ],
                        blockedResponseCookies: [
                            {
                                blockedReasons: [
                                    "ThirdPartyPhaseout" /* Protocol.Network.SetCookieBlockedReason.ThirdPartyPhaseout */ 
                                ],
                                cookie: cookie,
                                cookieLine: 'name=value; Path=/'
                            }
                        ],
                        resourceIPAddressSpace: "Public" /* Protocol.Network.IPAddressSpace.Public */ ,
                        statusCode: undefined,
                        cookiePartitionKey: undefined,
                        cookiePartitionKeyOpaque: undefined,
                        exemptedResponseCookies: undefined
                    });
                    assert.isTrue(addBlockedCookieSpy.calledOnceWith(cookie, [
                        {
                            attribute: null,
                            uiString: 'Setting this cookie was blocked due to third-party cookie phaseout. Learn more in the Issues tab.'
                        }
                    ]));
                    _ = assert.deepStrictEqual;
                    return [
                        4,
                        cookieModel.getCookiesForDomain('')
                    ];
                case 1:
                    _.apply(assert, [
                        _state.sent(),
                        [
                            cookie
                        ]
                    ]);
                    request.addExtraResponseInfo({
                        responseHeaders: [
                            {
                                name: 'Set-Cookie',
                                value: 'name=value; Path=/'
                            }
                        ],
                        blockedResponseCookies: [],
                        resourceIPAddressSpace: "Public" /* Protocol.Network.IPAddressSpace.Public */ ,
                        statusCode: undefined,
                        cookiePartitionKey: undefined,
                        cookiePartitionKeyOpaque: undefined,
                        exemptedResponseCookies: [
                            {
                                cookie: cookie,
                                cookieLine: cookie.getCookieLine(),
                                exemptionReason: "TPCDHeuristics" /* Protocol.Network.CookieExemptionReason.TPCDHeuristics */ 
                            }
                        ]
                    });
                    assert.isTrue(removeBlockedCookieSpy.calledOnceWith(cookie));
                    _1 = assert.isEmpty;
                    return [
                        4,
                        cookieModel.getCookiesForDomain('')
                    ];
                case 2:
                    _1.apply(assert, [
                        _state.sent()
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('ServerSentEvents', function() {
    var target;
    var networkManager;
    beforeEach(function() {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        networkManager = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager);
    });
    it('sends EventSourceMessageAdded events for EventSource text/event-stream', function() {
        networkManager.dispatcher.requestWillBeSent({
            requestId: '1',
            request: {
                url: 'https://example.com/sse'
            },
            type: 'EventSource'
        });
        networkManager.dispatcher.responseReceived({
            requestId: '1',
            response: {
                url: 'https://example.com/sse',
                mimeType: 'text/event-stream'
            }
        });
        var networkEvents = [];
        networkManager.requestForId('1').addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkRequest.Events.EventSourceMessageAdded, function(param) {
            var data = param.data;
            return networkEvents.push(data);
        });
        networkManager.dispatcher.eventSourceMessageReceived({
            requestId: '1',
            timestamp: 21,
            data: 'foo',
            eventId: 'fooId',
            eventName: 'fooName'
        });
        networkManager.dispatcher.eventSourceMessageReceived({
            requestId: '1',
            timestamp: 42,
            data: 'bar',
            eventId: 'barId',
            eventName: 'barName'
        });
        assert.lengthOf(networkEvents, 2);
        assert.deepStrictEqual(networkEvents[0], {
            data: 'foo',
            eventId: 'fooId',
            eventName: 'fooName',
            time: 21
        });
        assert.deepStrictEqual(networkEvents[1], {
            data: 'bar',
            eventId: 'barId',
            eventName: 'barName',
            time: 42
        });
    });
    it('sends EventSourceMessageAdded events for raw text/event-stream', /*#__PURE__*/ _async_to_generator(function() {
        var networkEvents, _Platform_PromiseUtilities_promiseWithResolvers, twoEventsReceivedPromise, resolve, message, time, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, c;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Network.streamResourceContent', function() {
                        return {
                            getError: function getError() {
                                return undefined;
                            },
                            bufferedData: ''
                        };
                    });
                    networkManager.dispatcher.requestWillBeSent({
                        requestId: '1',
                        request: {
                            url: 'https://example.com/sse'
                        },
                        type: 'Fetch'
                    });
                    networkManager.dispatcher.responseReceived({
                        requestId: '1',
                        response: {
                            url: 'https://example.com/sse',
                            mimeType: 'text/event-stream'
                        }
                    });
                    networkEvents = [];
                    _Platform_PromiseUtilities_promiseWithResolvers = _platform_platform_js__WEBPACK_IMPORTED_MODULE_4__.PromiseUtilities.promiseWithResolvers(), twoEventsReceivedPromise = _Platform_PromiseUtilities_promiseWithResolvers.promise, resolve = _Platform_PromiseUtilities_promiseWithResolvers.resolve;
                    networkManager.requestForId('1').addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkRequest.Events.EventSourceMessageAdded, function(param) {
                        var data = param.data;
                        networkEvents.push(data);
                        if (networkEvents.length === 2) {
                            resolve();
                        }
                    });
                    message = "\nid: fooId\nevent: fooName\ndata: foo\n\nid: barId\nevent: barName\ndata: bar\n\n";
                    // Send `message` piecemeal via dataReceived events.
                    time = 0;
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = message[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            c = _step.value;
                            networkManager.dispatcher.dataReceived({
                                requestId: '1',
                                dataLength: 1,
                                encodedDataLength: 1,
                                timestamp: time++,
                                data: window.btoa(c)
                            });
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
                    return [
                        4,
                        twoEventsReceivedPromise
                    ];
                case 1:
                    _state.sent();
                    // Omit time from expectation as the dataReceived loop is racing against the text decoder.
                    assert.lengthOf(networkEvents, 2);
                    assert.deepInclude(networkEvents[0], {
                        data: 'foo',
                        eventId: 'fooId',
                        eventName: 'fooName'
                    });
                    assert.deepInclude(networkEvents[1], {
                        data: 'bar',
                        eventId: 'barId',
                        eventName: 'barName'
                    });
                    return [
                        2
                    ];
            }
        });
    }));
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('requestStreamingContent', function() {
    var target;
    var networkManager;
    beforeEach(function() {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        networkManager = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager);
    });
    it('retrieves the full response body for finished requests', function() {
        networkManager.dispatcher.requestWillBeSent({
            requestId: '1',
            request: {
                url: 'https://example.com/index.html'
            },
            type: 'Document'
        });
        networkManager.dispatcher.responseReceived({
            requestId: '1',
            response: {
                url: 'https://example.com/index.html',
                mimeType: 'text/html'
            }
        });
        networkManager.dispatcher.loadingFinished({
            requestId: '1'
        });
        var responseBodySpy = sinon.spy(target.networkAgent(), 'invoke_getResponseBody');
        void networkManager.requestForId('1').requestStreamingContent();
        assert.isTrue(responseBodySpy.calledOnce);
    });
    it('streams the full response body for in-flight requests', function() {
        networkManager.dispatcher.requestWillBeSent({
            requestId: '1',
            request: {
                url: 'https://example.com/index.html'
            },
            type: 'Document'
        });
        networkManager.dispatcher.responseReceived({
            requestId: '1',
            response: {
                url: 'https://example.com/index.html',
                mimeType: 'text/html'
            }
        });
        var responseBodySpy = sinon.spy(target.networkAgent(), 'invoke_streamResourceContent');
        void networkManager.requestForId('1').requestStreamingContent();
        assert.isTrue(responseBodySpy.calledOnce);
    });
    it('sends ChunkAdded events when new data is received', /*#__PURE__*/ _async_to_generator(function() {
        var maybeStreamingContent, streamingContent, eventPromise, chunk;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    networkManager.dispatcher.requestWillBeSent({
                        requestId: '1',
                        request: {
                            url: 'https://example.com/index.html'
                        },
                        type: 'Document'
                    });
                    networkManager.dispatcher.responseReceived({
                        requestId: '1',
                        response: {
                            url: 'https://example.com/index.html',
                            mimeType: 'text/html'
                        }
                    });
                    sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager, 'streamResponseBody').returns(Promise.resolve(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.ContentData.ContentData('Zm9v', true, 'text/html')));
                    return [
                        4,
                        networkManager.requestForId('1').requestStreamingContent()
                    ];
                case 1:
                    maybeStreamingContent = _state.sent();
                    assert.isFalse(_models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.StreamingContentData.isError(maybeStreamingContent));
                    streamingContent = maybeStreamingContent;
                    eventPromise = streamingContent.once("ChunkAdded" /* TextUtils.StreamingContentData.Events.ChunkAdded */ );
                    networkManager.dispatcher.dataReceived({
                        requestId: '1',
                        data: 'YmFy',
                        dataLength: 4,
                        encodedDataLength: 4,
                        timestamp: 42
                    });
                    return [
                        4,
                        eventPromise
                    ];
                case 2:
                    chunk = _state.sent().chunk;
                    assert.strictEqual(chunk, 'YmFy');
                    assert.strictEqual(streamingContent.content().text, 'foobar');
                    return [
                        2
                    ];
            }
        });
    }));
    it('waits for "responseReceived" event to construct the StreamingContentData', /*#__PURE__*/ _async_to_generator(function() {
        var streamingContentDataPromise, maybeStreamingContent, streamingContent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    networkManager.dispatcher.requestWillBeSent({
                        requestId: '1',
                        request: {
                            url: 'https://example.com/index.html'
                        },
                        type: 'Document'
                    });
                    sinon.stub(target.networkAgent(), 'invoke_streamResourceContent').returns(Promise.resolve({
                        bufferedData: '',
                        getError: function() {
                            return undefined;
                        }
                    }));
                    streamingContentDataPromise = networkManager.requestForId('1').requestStreamingContent();
                    // Trigger the "responseReceived" on the next event loop tick.
                    setTimeout(function() {
                        networkManager.dispatcher.responseReceived({
                            requestId: '1',
                            response: {
                                url: 'https://example.com/index.html',
                                mimeType: 'text/html'
                            }
                        });
                    }, 0);
                    return [
                        4,
                        streamingContentDataPromise
                    ];
                case 1:
                    maybeStreamingContent = _state.sent();
                    assert.isFalse(_models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.StreamingContentData.isError(maybeStreamingContent));
                    streamingContent = maybeStreamingContent;
                    assert.strictEqual(streamingContent.mimeType, 'text/html');
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=NetworkRequest.test.js.map


}),
"./testing/Cookies.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  expectCookie: function() { return expectCookie; }
});
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
var cookieExpectationDefaults = {
    name: 'name',
    value: 'value',
    httpOnly: false,
    sameSite: undefined,
    secure: false,
    session: true,
    path: undefined,
    domain: undefined,
    expires: null,
    size: undefined,
    priority: "Medium" /* Protocol.Network.CookiePriority.Medium */ ,
    partitionKey: null,
    partitionKeyOpaque: false
};
var requestDate = new Date('Mon Oct 18 2010 17:00:00 GMT+0000');
function expectCookie(cookie, cookieExpectation) {
    var expectation = _object_spread({}, cookieExpectationDefaults, cookieExpectation);
    assert.strictEqual(cookie.name(), expectation.name, 'name');
    assert.strictEqual(cookie.value(), expectation.value, 'value');
    assert.strictEqual(cookie.httpOnly(), expectation.httpOnly, 'httpOnly');
    assert.strictEqual(cookie.sameSite(), expectation.sameSite, 'sameSite');
    assert.strictEqual(cookie.secure(), expectation.secure, 'secure');
    assert.strictEqual(cookie.session(), expectation.session, 'session');
    assert.strictEqual(cookie.path(), expectation.path, 'path');
    assert.strictEqual(cookie.domain(), expectation.domain, 'domain');
    var date = cookie.expiresDate(requestDate);
    if (typeof expectation.expires === 'string') {
        assert.isNotNull(date);
        assert.strictEqual(date.toISOString(), expectation.expires, 'expires');
    } else if (typeof expectation.expires === 'number') {
        assert.isNotNull(date);
        assert.strictEqual(date.getTime(), expectation.expires, 'expires');
    } else {
        assert.strictEqual(date, expectation.expires, 'expires');
    }
    assert.strictEqual(cookie.size(), expectation.size, 'size');
    assert.strictEqual(cookie.priority(), expectation.priority, 'priority');
    assert.strictEqual(cookie.partitioned(), Boolean(expectation.partitionKey), 'partitioned');
    if (cookie.partitioned()) {
        var _expectation_partitionKey, _expectation_partitionKey1;
        assert.strictEqual(cookie.hasCrossSiteAncestor(), (_expectation_partitionKey = expectation.partitionKey) === null || _expectation_partitionKey === void 0 ? void 0 : _expectation_partitionKey.hasCrossSiteAncestor, 'hasCrossSiteAncestor');
        assert.strictEqual(cookie.topLevelSite(), (_expectation_partitionKey1 = expectation.partitionKey) === null || _expectation_partitionKey1 === void 0 ? void 0 : _expectation_partitionKey1.topLevelSite, 'topLevelSite');
    }
    assert.strictEqual(cookie.partitionKeyOpaque(), expectation.partitionKeyOpaque, 'partitionKeyOpaque');
} //# sourceMappingURL=Cookies.js.map


}),

}]);