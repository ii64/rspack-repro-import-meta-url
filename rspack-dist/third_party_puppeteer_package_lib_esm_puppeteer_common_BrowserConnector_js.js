"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_BrowserConnector_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/BrowserConnector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _connectToCdpBrowser: function() { return _connectToCdpBrowser; }
});
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _Browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Browser.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Browser.js");
/* harmony import */var _Connection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Connection.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Connection.js");
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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



/**
 * Users should never call this directly; it's called when calling
 * `puppeteer.connect` with `protocol: 'cdp'`.
 *
 * @internal
 */ function _connectToCdpBrowser(connectionTransport, url, options) {
    return __connectToCdpBrowser.apply(this, arguments);
} //# sourceMappingURL=BrowserConnector.js.map
function __connectToCdpBrowser() {
    __connectToCdpBrowser = _async_to_generator(function(connectionTransport, url, options) {
        var _options_ignoreHTTPSErrors, ignoreHTTPSErrors, _options_defaultViewport, defaultViewport, targetFilter, isPageTarget, _options_slowMo, slowMo, protocolTimeout, connection, version, product, browserContextIds, browser;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _options_ignoreHTTPSErrors = options.ignoreHTTPSErrors, ignoreHTTPSErrors = _options_ignoreHTTPSErrors === void 0 ? false : _options_ignoreHTTPSErrors, _options_defaultViewport = options.defaultViewport, defaultViewport = _options_defaultViewport === void 0 ? _common_util_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_VIEWPORT : _options_defaultViewport, targetFilter = options.targetFilter, isPageTarget = options._isPageTarget, _options_slowMo = options.slowMo, slowMo = _options_slowMo === void 0 ? 0 : _options_slowMo, protocolTimeout = options.protocolTimeout;
                    connection = new _Connection_js__WEBPACK_IMPORTED_MODULE_2__.Connection(url, connectionTransport, slowMo, protocolTimeout);
                    return [
                        4,
                        connection.send('Browser.getVersion')
                    ];
                case 1:
                    version = _state.sent();
                    product = version.product.toLowerCase().includes('firefox') ? 'firefox' : 'chrome';
                    return [
                        4,
                        connection.send('Target.getBrowserContexts')
                    ];
                case 2:
                    browserContextIds = _state.sent().browserContextIds;
                    return [
                        4,
                        _Browser_js__WEBPACK_IMPORTED_MODULE_1__.CdpBrowser._create(product || 'chrome', connection, browserContextIds, ignoreHTTPSErrors, defaultViewport, undefined, function() {
                            return connection.send('Browser.close').catch(_common_util_js__WEBPACK_IMPORTED_MODULE_0__.debugError);
                        }, targetFilter, isPageTarget)
                    ];
                case 3:
                    browser = _state.sent();
                    return [
                        2,
                        browser
                    ];
            }
        });
    });
    return __connectToCdpBrowser.apply(this, arguments);
}


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/common/BrowserConnector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _connectToBrowser: function() { return _connectToBrowser; }
});
/* harmony import */var _bidi_BrowserConnector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bidi/BrowserConnector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/BrowserConnector.js");
/* harmony import */var _cdp_BrowserConnector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cdp/BrowserConnector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/BrowserConnector.js");
/* harmony import */var _environment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environment.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/environment.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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





var getWebSocketTransportClass = function() {
    var _ref = _async_to_generator(function() {
        var _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__.isNode) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        __webpack_require__.e(/*! import() */ "third_party_puppeteer_package_lib_esm_puppeteer_node_NodeWebSocketTransport_js-_e9081").then(__webpack_require__.bind(__webpack_require__, /*! ../node/NodeWebSocketTransport.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/node/NodeWebSocketTransport.js"))
                    ];
                case 1:
                    _tmp = _state.sent().NodeWebSocketTransport;
                    return [
                        3,
                        4
                    ];
                case 2:
                    return [
                        4,
                        __webpack_require__.e(/*! import() */ "third_party_puppeteer_package_lib_esm_puppeteer_common_BrowserWebSocketTransport_js").then(__webpack_require__.bind(__webpack_require__, /*! ../common/BrowserWebSocketTransport.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/BrowserWebSocketTransport.js"))
                    ];
                case 3:
                    _tmp = _state.sent().BrowserWebSocketTransport;
                    _state.label = 4;
                case 4:
                    return [
                        2,
                        _tmp
                    ];
            }
        });
    });
    return function getWebSocketTransportClass() {
        return _ref.apply(this, arguments);
    };
}();
/**
 * Users should never call this directly; it's called when calling
 * `puppeteer.connect`. This method attaches Puppeteer to an existing browser instance.
 *
 * @internal
 */ function _connectToBrowser(options) {
    return __connectToBrowser.apply(this, arguments);
}
function __connectToBrowser() {
    __connectToBrowser = _async_to_generator(function(options) {
        var _ref, connectionTransport, endpointUrl, bidiBrowser, cdpBrowser;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        getConnectionTransport(options)
                    ];
                case 1:
                    _ref = _state.sent(), connectionTransport = _ref.connectionTransport, endpointUrl = _ref.endpointUrl;
                    if (!(options.protocol === 'webDriverBiDi')) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        (0,_bidi_BrowserConnector_js__WEBPACK_IMPORTED_MODULE_0__._connectToBiDiBrowser)(connectionTransport, endpointUrl, options)
                    ];
                case 2:
                    bidiBrowser = _state.sent();
                    return [
                        2,
                        bidiBrowser
                    ];
                case 3:
                    return [
                        4,
                        (0,_cdp_BrowserConnector_js__WEBPACK_IMPORTED_MODULE_1__._connectToCdpBrowser)(connectionTransport, endpointUrl, options)
                    ];
                case 4:
                    cdpBrowser = _state.sent();
                    return [
                        2,
                        cdpBrowser
                    ];
                case 5:
                    return [
                        2
                    ];
            }
        });
    });
    return __connectToBrowser.apply(this, arguments);
}
function getConnectionTransport(options) {
    return _getConnectionTransport.apply(this, arguments);
}
function _getConnectionTransport() {
    _getConnectionTransport = /**
 * Establishes a websocket connection by given options and returns both transport and
 * endpoint url the transport is connected to.
 */ _async_to_generator(function(options) {
        var browserWSEndpoint, browserURL, transport, _options_headers, headers, WebSocketClass, connectionTransport, connectionURL, WebSocketClass1, connectionTransport1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    browserWSEndpoint = options.browserWSEndpoint, browserURL = options.browserURL, transport = options.transport, _options_headers = options.headers, headers = _options_headers === void 0 ? {} : _options_headers;
                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(Number(!!browserWSEndpoint) + Number(!!browserURL) + Number(!!transport) === 1, 'Exactly one of browserWSEndpoint, browserURL or transport must be passed to puppeteer.connect');
                    if (!transport) return [
                        3,
                        1
                    ];
                    return [
                        2,
                        {
                            connectionTransport: transport,
                            endpointUrl: ''
                        }
                    ];
                case 1:
                    if (!browserWSEndpoint) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        getWebSocketTransportClass()
                    ];
                case 2:
                    WebSocketClass = _state.sent();
                    return [
                        4,
                        WebSocketClass.create(browserWSEndpoint, headers)
                    ];
                case 3:
                    connectionTransport = _state.sent();
                    return [
                        2,
                        {
                            connectionTransport: connectionTransport,
                            endpointUrl: browserWSEndpoint
                        }
                    ];
                case 4:
                    if (!browserURL) return [
                        3,
                        8
                    ];
                    return [
                        4,
                        getWSEndpoint(browserURL)
                    ];
                case 5:
                    connectionURL = _state.sent();
                    return [
                        4,
                        getWebSocketTransportClass()
                    ];
                case 6:
                    WebSocketClass1 = _state.sent();
                    return [
                        4,
                        WebSocketClass1.create(connectionURL)
                    ];
                case 7:
                    connectionTransport1 = _state.sent();
                    return [
                        2,
                        {
                            connectionTransport: connectionTransport1,
                            endpointUrl: connectionURL
                        }
                    ];
                case 8:
                    throw new Error('Invalid connection options');
            }
        });
    });
    return _getConnectionTransport.apply(this, arguments);
}
function getWSEndpoint(browserURL) {
    return _getWSEndpoint.apply(this, arguments);
}
function _getWSEndpoint() {
    _getWSEndpoint = _async_to_generator(function(browserURL) {
        var endpointURL, result, data, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    endpointURL = new URL('/json/version', browserURL);
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        4,
                        ,
                        5
                    ]);
                    return [
                        4,
                        globalThis.fetch(endpointURL.toString(), {
                            method: 'GET'
                        })
                    ];
                case 2:
                    result = _state.sent();
                    if (!result.ok) {
                        throw new Error("HTTP ".concat(result.statusText));
                    }
                    return [
                        4,
                        result.json()
                    ];
                case 3:
                    data = _state.sent();
                    return [
                        2,
                        data.webSocketDebuggerUrl
                    ];
                case 4:
                    error = _state.sent();
                    if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_4__.isErrorLike)(error)) {
                        error.message = "Failed to fetch browser webSocket URL from ".concat(endpointURL, ": ") + error.message;
                    }
                    throw error;
                case 5:
                    return [
                        2
                    ];
            }
        });
    } //# sourceMappingURL=BrowserConnector.js.map
    );
    return _getWSEndpoint.apply(this, arguments);
}


}),

}]);