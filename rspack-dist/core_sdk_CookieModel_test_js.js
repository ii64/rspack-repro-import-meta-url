"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_CookieModel_test_js"], {
"./core/sdk/CookieModel.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockNetworkLog.js */ "./testing/MockNetworkLog.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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






var MAIN_FRAME_RESOURCE_DOMAIN = 'example.org';
var CHILD_FRAME_RESOURCE_DOMAIN = 'example.net';
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('CookieModel', function() {
    var PROTOCOL_COOKIE = {
        domain: '.example.com',
        name: 'name',
        path: '/test',
        size: 23,
        value: 'value',
        expires: 42,
        httpOnly: false,
        secure: false,
        session: true,
        sameParty: false,
        priority: "Medium" /* Protocol.Network.CookiePriority.Medium */ ,
        sourcePort: 80,
        sourceScheme: "NonSecure" /* Protocol.Network.CookieSourceScheme.NonSecure */ ,
        partitionKey: undefined
    };
    var PROTOCOL_COOKIE_PARTITIONED = {
        domain: '.example.com',
        name: 'name',
        path: '/test',
        size: 23,
        value: 'value',
        expires: 42,
        httpOnly: false,
        secure: false,
        session: true,
        sameParty: false,
        priority: "Medium" /* Protocol.Network.CookiePriority.Medium */ ,
        sourcePort: 80,
        sourceScheme: "NonSecure" /* Protocol.Network.CookieSourceScheme.NonSecure */ ,
        partitionKey: {
            topLevelSite: 'https://example.net',
            hasCrossSiteAncestor: false
        }
    };
    it('can retrieve cookies for domain', /*#__PURE__*/ _async_to_generator(function() {
        var target, mainFrame, resourceUrl, childFrame, model, _i, _iter, domain, cookies;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // CDP Connection mock: for Network.getCookies, respond with a single cookie.
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Network.getCookies', function(param) {
                        var urls = param.urls;
                        return {
                            cookies: [
                                _object_spread_props(_object_spread({}, PROTOCOL_COOKIE_PARTITIONED), {
                                    domain: ".".concat(new URL(urls[0]).host)
                                })
                            ]
                        };
                    });
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    mainFrame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target);
                    resourceUrl = function(domain) {
                        return "https://".concat(domain, "/resource");
                    };
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createResource)(mainFrame, resourceUrl(MAIN_FRAME_RESOURCE_DOMAIN), 'text/html', '');
                    return [
                        4,
                        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.addChildFrame)(target)
                    ];
                case 1:
                    childFrame = _state.sent();
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createResource)(childFrame, resourceUrl(CHILD_FRAME_RESOURCE_DOMAIN), 'text/html', '');
                    model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CookieModel.CookieModel);
                    _i = 0, _iter = [
                        _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN,
                        MAIN_FRAME_RESOURCE_DOMAIN,
                        CHILD_FRAME_RESOURCE_DOMAIN
                    ];
                    _state.label = 2;
                case 2:
                    if (!(_i < _iter.length)) return [
                        3,
                        5
                    ];
                    domain = _iter[_i];
                    return [
                        4,
                        model.getCookiesForDomain("https://".concat(domain))
                    ];
                case 3:
                    cookies = _state.sent();
                    assert.isArray(cookies);
                    assert.lengthOf(cookies, 1);
                    assert.strictEqual(cookies[0].domain(), ".".concat(domain));
                    assert.strictEqual(cookies[0].name(), 'name');
                    assert.strictEqual(cookies[0].path(), '/test');
                    assert.strictEqual(cookies[0].size(), 23);
                    assert.strictEqual(cookies[0].value(), 'value');
                    assert.strictEqual(cookies[0].expires(), 42000);
                    assert.strictEqual(cookies[0].httpOnly(), false);
                    assert.strictEqual(cookies[0].secure(), false);
                    assert.strictEqual(cookies[0].priority(), "Medium" /* Protocol.Network.CookiePriority.Medium */ );
                    assert.strictEqual(cookies[0].sourcePort(), 80);
                    assert.strictEqual(cookies[0].sourceScheme(), "NonSecure" /* Protocol.Network.CookieSourceScheme.NonSecure */ );
                    assert.strictEqual(cookies[0].partitionKey().topLevelSite, 'https://example.net');
                    assert.strictEqual(cookies[0].partitionKey().hasCrossSiteAncestor, false);
                    _state.label = 4;
                case 4:
                    _i++;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        2
                    ];
            }
        });
    }));
    it('can detect cookie list changes', /*#__PURE__*/ _async_to_generator(function() {
        var target, dispatchLoadingFinished, mainFrame, model, eventListener, _, resourceUrl, _1, _2, childFrame, _3;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Network.getCookies', function(param) {
                        var urls = param.urls;
                        return {
                            cookies: [
                                _object_spread_props(_object_spread({}, PROTOCOL_COOKIE), {
                                    domain: ".".concat(new URL(urls[0]).host)
                                })
                            ]
                        };
                    });
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    dispatchLoadingFinished = function() {
                        return target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager).dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.Events.LoadingFinished, (0,_testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_3__.createNetworkRequest)('1'));
                    };
                    mainFrame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target);
                    model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CookieModel.CookieModel);
                    eventListener = sinon.stub();
                    model.addEventListener("CookieListUpdated" /* SDK.CookieModel.Events.CookieListUpdated */ , eventListener);
                    _ = assert.isEmpty;
                    return [
                        4,
                        model.getCookiesForDomain("https://".concat(MAIN_FRAME_RESOURCE_DOMAIN))
                    ];
                case 1:
                    _.apply(assert, [
                        _state.sent()
                    ]);
                    resourceUrl = function(domain) {
                        return "https://".concat(domain, "/main_resource");
                    };
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createResource)(mainFrame, resourceUrl(MAIN_FRAME_RESOURCE_DOMAIN), 'text/html', '');
                    dispatchLoadingFinished();
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_1__.expectCalled)(eventListener)
                    ];
                case 2:
                    _state.sent();
                    _1 = assert.isNotEmpty;
                    return [
                        4,
                        model.getCookiesForDomain("https://".concat(MAIN_FRAME_RESOURCE_DOMAIN))
                    ];
                case 3:
                    _1.apply(assert, [
                        _state.sent()
                    ]);
                    _2 = assert.isEmpty;
                    return [
                        4,
                        model.getCookiesForDomain("https://".concat(CHILD_FRAME_RESOURCE_DOMAIN))
                    ];
                case 4:
                    _2.apply(assert, [
                        _state.sent()
                    ]);
                    eventListener.resetHistory();
                    return [
                        4,
                        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.addChildFrame)(target)
                    ];
                case 5:
                    childFrame = _state.sent();
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createResource)(childFrame, resourceUrl(CHILD_FRAME_RESOURCE_DOMAIN), 'text/html', '');
                    dispatchLoadingFinished();
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_1__.expectCalled)(eventListener)
                    ];
                case 6:
                    _state.sent();
                    _3 = assert.isNotEmpty;
                    return [
                        4,
                        model.getCookiesForDomain("https://".concat(CHILD_FRAME_RESOURCE_DOMAIN))
                    ];
                case 7:
                    _3.apply(assert, [
                        _state.sent()
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can detect cookie value changes', /*#__PURE__*/ _async_to_generator(function() {
        var cookie, target, dispatchLoadingFinished, mainFrame, model, eventListener;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cookie = _object_spread({}, PROTOCOL_COOKIE);
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Network.getCookies', function() {
                        return {
                            cookies: [
                                cookie
                            ]
                        };
                    });
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    dispatchLoadingFinished = function() {
                        return target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager).dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.Events.LoadingFinished, (0,_testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_3__.createNetworkRequest)('1'));
                    };
                    mainFrame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target);
                    model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CookieModel.CookieModel);
                    eventListener = sinon.stub();
                    model.addEventListener("CookieListUpdated" /* SDK.CookieModel.Events.CookieListUpdated */ , eventListener);
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createResource)(mainFrame, "https://".concat(_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN, "/main_resource"), 'text/html', '');
                    dispatchLoadingFinished();
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_1__.expectCalled)(eventListener)
                    ];
                case 1:
                    _state.sent();
                    eventListener.resetHistory();
                    cookie.value = 'new value';
                    dispatchLoadingFinished();
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_1__.expectCalled)(eventListener)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not refetch cookies while listening unless requested', /*#__PURE__*/ _async_to_generator(function() {
        var cookie, target, dispatchLoadingFinished, mainFrame, model, _ref, readCookie, ref, ref1, ref2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cookie = _object_spread({}, PROTOCOL_COOKIE);
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Network.getCookies', function() {
                        return {
                            cookies: [
                                cookie
                            ]
                        };
                    });
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    dispatchLoadingFinished = function() {
                        return target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager).dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.Events.LoadingFinished, (0,_testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_3__.createNetworkRequest)('1'));
                    };
                    mainFrame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target);
                    model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CookieModel.CookieModel);
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createResource)(mainFrame, "https://".concat(_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN, "/main_resource"), 'text/html', '');
                    dispatchLoadingFinished();
                    return [
                        4,
                        model.getCookiesForDomain("https://".concat(_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN))
                    ];
                case 1:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), readCookie = _ref[0];
                    assert.strictEqual(readCookie.value(), 'value');
                    cookie.value = 'new value';
                    model.addEventListener("CookieListUpdated" /* SDK.CookieModel.Events.CookieListUpdated */ , function() {});
                    return [
                        4,
                        model.getCookiesForDomain("https://".concat(_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN))
                    ];
                case 2:
                    ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), readCookie = ref[0], ref;
                    assert.strictEqual(readCookie.value(), 'value');
                    return [
                        4,
                        model.getCookiesForDomain("https://".concat(_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN))
                    ];
                case 3:
                    ref1 = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), readCookie = ref1[0], ref1;
                    assert.strictEqual(readCookie.value(), 'value');
                    return [
                        4,
                        model.getCookiesForDomain("https://".concat(_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN), true)
                    ];
                case 4:
                    ref2 = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), readCookie = ref2[0], ref2;
                    assert.strictEqual(readCookie.value(), 'new value');
                    return [
                        2
                    ];
            }
        });
    }));
    it('clears stored blocked cookies on primary page change', /*#__PURE__*/ _async_to_generator(function() {
        var target, cookieModel, cookie, blockedReason, cookieToBlockedReasons;
        return _ts_generator(this, function(_state) {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
            cookieModel = new _sdk_js__WEBPACK_IMPORTED_MODULE_5__.CookieModel.CookieModel(target);
            cookie = new _sdk_js__WEBPACK_IMPORTED_MODULE_5__.Cookie.Cookie('name', 'value');
            blockedReason = {
                attribute: null,
                uiString: 'Setting this cookie was blocked due to third-party cookie phaseout. Learn more in the Issues tab.'
            };
            cookieModel.addBlockedCookie(cookie, [
                blockedReason
            ]);
            cookieToBlockedReasons = cookieModel.getCookieToBlockedReasonsMap();
            assert.strictEqual(cookieToBlockedReasons.size, 1);
            assert.deepStrictEqual(cookieToBlockedReasons.get(cookie), [
                blockedReason
            ]);
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target));
            assert.strictEqual(cookieModel.getCookieToBlockedReasonsMap().size, 0);
            return [
                2
            ];
        });
    }));
    it('can delete unpartitioned and partitioned cookies', /*#__PURE__*/ _async_to_generator(function() {
        var cookieArray, target, model, cookies, cookies2, cookies3;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cookieArray = [
                        PROTOCOL_COOKIE,
                        PROTOCOL_COOKIE_PARTITIONED
                    ];
                    // CDP Connection mock.
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Network.getCookies', function() {
                        return {
                            cookies: cookieArray
                        };
                    });
                    // CDP Connection mock: simplified implementation for Network.deleteCookies, which deletes the matching cookie from `cookies`.
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Network.deleteCookies', function(cookieToDelete) {
                        cookieArray = cookieArray.filter(function(cookie) {
                            var _cookie_partitionKey, _cookieToDelete_partitionKey, _cookie_partitionKey1, _cookieToDelete_partitionKey1;
                            return !(cookie.name === cookieToDelete.name && cookie.domain === cookieToDelete.domain && cookie.path === cookieToDelete.path && ((_cookie_partitionKey = cookie.partitionKey) === null || _cookie_partitionKey === void 0 ? void 0 : _cookie_partitionKey.topLevelSite) === ((_cookieToDelete_partitionKey = cookieToDelete.partitionKey) === null || _cookieToDelete_partitionKey === void 0 ? void 0 : _cookieToDelete_partitionKey.topLevelSite) && ((_cookie_partitionKey1 = cookie.partitionKey) === null || _cookie_partitionKey1 === void 0 ? void 0 : _cookie_partitionKey1.hasCrossSiteAncestor) === ((_cookieToDelete_partitionKey1 = cookieToDelete.partitionKey) === null || _cookieToDelete_partitionKey1 === void 0 ? void 0 : _cookieToDelete_partitionKey1.hasCrossSiteAncestor));
                        });
                        var response = {
                            getError: function getError() {
                                return undefined;
                            }
                        };
                        return Promise.resolve(response);
                    });
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    model = new _sdk_js__WEBPACK_IMPORTED_MODULE_5__.CookieModel.CookieModel(target);
                    return [
                        4,
                        model.getCookiesForDomain("https://".concat(_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN))
                    ];
                case 1:
                    cookies = _state.sent();
                    assert.isArray(cookies);
                    assert.lengthOf(cookies, 2);
                    return [
                        4,
                        model.deleteCookie(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Cookie.Cookie.fromProtocolCookie(PROTOCOL_COOKIE))
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        model.getCookiesForDomain("https://".concat(_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN))
                    ];
                case 3:
                    cookies2 = _state.sent();
                    assert.isArray(cookies2);
                    assert.lengthOf(cookies2, 1);
                    assert.strictEqual(cookies2[0].domain(), '.example.com');
                    assert.strictEqual(cookies2[0].name(), 'name');
                    assert.strictEqual(cookies2[0].partitionKey().topLevelSite, 'https://example.net');
                    assert.strictEqual(cookies2[0].partitionKey().hasCrossSiteAncestor, false);
                    return [
                        4,
                        model.deleteCookie(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Cookie.Cookie.fromProtocolCookie(PROTOCOL_COOKIE_PARTITIONED))
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        model.getCookiesForDomain("https://".concat(_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN))
                    ];
                case 5:
                    cookies3 = _state.sent();
                    assert.isArray(cookies3);
                    assert.lengthOf(cookies3, 0);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=CookieModel.test.js.map


}),
"./testing/ExpectStubCall.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  expectCall: function() { return expectCall; },
  expectCalled: function() { return expectCalled; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function expectCall(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new Promise(function(resolve) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _options_callCount;
            if (stub.callCount < ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1)) {
                return undefined;
            }
            resolve(args);
            return options.fakeFn ? options.fakeFn.apply(this, args) : undefined;
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options_callCount;
    var remainingCalls = ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, _object_spread_props(_object_spread({}, options), {
        callCount: remainingCalls
    }));
} //# sourceMappingURL=ExpectStubCall.js.map


}),
"./testing/MockNetworkLog.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MockNetworkLog: function() { return MockNetworkLog; },
  createNetworkRequest: function() { return createNetworkRequest; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/logs/logs.js */ "./models/logs/logs.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
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


function createNetworkRequest(requestId) {
    return {
        requestId: function requestId1() {
            return requestId;
        },
        backendRequestId: function backendRequestId() {
            return requestId;
        }
    };
}
var MockNetworkLog = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(MockNetworkLog, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(MockNetworkLog);
    function MockNetworkLog(mockRequests) {
        _class_call_check(this, MockNetworkLog);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "mockRequests", void 0);
        _this.mockRequests = mockRequests;
        return _this;
    }
    _create_class(MockNetworkLog, [
        {
            key: "requestsForId",
            value: function requestsForId(requestId) {
                return this.mockRequests.filter(function(x) {
                    return x.requestId() === requestId;
                });
            }
        },
        {
            key: "addRequest",
            value: function addRequest(mockRequest) {
                this.mockRequests.push(mockRequest);
                this.dispatchEventToListeners(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded, {
                    request: mockRequest
                });
            }
        }
    ]);
    return MockNetworkLog;
} //# sourceMappingURL=MockNetworkLog.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);


}),

}]);