"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_BrowserConnector_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/BrowserConnector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _connectToBiDiBrowser: function() { return _connectToBiDiBrowser; }
});
/* harmony import */var _cdp_Connection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cdp/Connection.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Connection.js");
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
 * Users should never call this directly; it's called when calling `puppeteer.connect`
 * with `protocol: 'webDriverBiDi'`. This method attaches Puppeteer to an existing browser
 * instance. First it tries to connect to the browser using pure BiDi. If the protocol is
 * not supported, connects to the browser using BiDi over CDP.
 *
 * @internal
 */ function _connectToBiDiBrowser(connectionTransport, url, options) {
    return __connectToBiDiBrowser.apply(this, arguments);
}
function __connectToBiDiBrowser() {
    __connectToBiDiBrowser = _async_to_generator(function(connectionTransport, url, options) {
        var _options_ignoreHTTPSErrors, ignoreHTTPSErrors, _options_defaultViewport, defaultViewport, _ref, bidiConnection, cdpConnection, closeCallback, BiDi, bidiBrowser;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _options_ignoreHTTPSErrors = options.ignoreHTTPSErrors, ignoreHTTPSErrors = _options_ignoreHTTPSErrors === void 0 ? false : _options_ignoreHTTPSErrors, _options_defaultViewport = options.defaultViewport, defaultViewport = _options_defaultViewport === void 0 ? _common_util_js__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_VIEWPORT : _options_defaultViewport;
                    return [
                        4,
                        getBiDiConnection(connectionTransport, url, options)
                    ];
                case 1:
                    _ref = _state.sent(), bidiConnection = _ref.bidiConnection, cdpConnection = _ref.cdpConnection, closeCallback = _ref.closeCallback;
                    return [
                        4,
                        import(/* webpackIgnore: true */ './bidi.js')
                    ];
                case 2:
                    BiDi = _state.sent();
                    return [
                        4,
                        BiDi.BidiBrowser.create({
                            connection: bidiConnection,
                            cdpConnection: cdpConnection,
                            closeCallback: closeCallback,
                            process: undefined,
                            defaultViewport: defaultViewport,
                            ignoreHTTPSErrors: ignoreHTTPSErrors
                        })
                    ];
                case 3:
                    bidiBrowser = _state.sent();
                    return [
                        2,
                        bidiBrowser
                    ];
            }
        });
    });
    return __connectToBiDiBrowser.apply(this, arguments);
}
function getBiDiConnection(connectionTransport, url, options) {
    return _getBiDiConnection.apply(this, arguments);
}
function _getBiDiConnection() {
    _getBiDiConnection = /**
 * Returns a BiDiConnection established to the endpoint specified by the options and a
 * callback closing the browser. Callback depends on whether the connection is pure BiDi
 * or BiDi over CDP.
 * The method tries to connect to the browser using pure BiDi protocol, and falls back
 * to BiDi over CDP.
 */ _async_to_generator(function(connectionTransport, url, options) {
        var BiDi, _options_ignoreHTTPSErrors, ignoreHTTPSErrors, _options_slowMo, slowMo, protocolTimeout, pureBidiConnection, result, e, cdpConnection, version, bidiOverCdpConnection;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        import(/* webpackIgnore: true */ './bidi.js')
                    ];
                case 1:
                    BiDi = _state.sent();
                    _options_ignoreHTTPSErrors = options.ignoreHTTPSErrors, ignoreHTTPSErrors = _options_ignoreHTTPSErrors === void 0 ? false : _options_ignoreHTTPSErrors, _options_slowMo = options.slowMo, slowMo = _options_slowMo === void 0 ? 0 : _options_slowMo, protocolTimeout = options.protocolTimeout;
                    // Try pure BiDi first.
                    pureBidiConnection = new BiDi.BidiConnection(url, connectionTransport, slowMo, protocolTimeout);
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        4,
                        ,
                        5
                    ]);
                    return [
                        4,
                        pureBidiConnection.send('session.status', {})
                    ];
                case 3:
                    result = _state.sent();
                    if ('type' in result && result.type === 'success') {
                        // The `browserWSEndpoint` points to an endpoint supporting pure WebDriver BiDi.
                        return [
                            2,
                            {
                                bidiConnection: pureBidiConnection,
                                closeCallback: /*#__PURE__*/ _async_to_generator(function() {
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                return [
                                                    4,
                                                    pureBidiConnection.send('browser.close', {}).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)
                                                ];
                                            case 1:
                                                _state.sent();
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                })
                            }
                        ];
                    }
                    return [
                        3,
                        5
                    ];
                case 4:
                    e = _state.sent();
                    if (!_instanceof(e, _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.ProtocolError)) {
                        // Unexpected exception not related to BiDi / CDP. Rethrow.
                        throw e;
                    }
                    return [
                        3,
                        5
                    ];
                case 5:
                    // Unbind the connection to avoid memory leaks.
                    pureBidiConnection.unbind();
                    // Fall back to CDP over BiDi reusing the WS connection.
                    cdpConnection = new _cdp_Connection_js__WEBPACK_IMPORTED_MODULE_0__.Connection(url, connectionTransport, slowMo, protocolTimeout);
                    return [
                        4,
                        cdpConnection.send('Browser.getVersion')
                    ];
                case 6:
                    version = _state.sent();
                    if (version.product.toLowerCase().includes('firefox')) {
                        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation('Firefox is not supported in BiDi over CDP mode.');
                    }
                    return [
                        4,
                        BiDi.connectBidiOverCdp(cdpConnection, {
                            acceptInsecureCerts: ignoreHTTPSErrors
                        })
                    ];
                case 7:
                    bidiOverCdpConnection = _state.sent();
                    return [
                        2,
                        {
                            cdpConnection: cdpConnection,
                            bidiConnection: bidiOverCdpConnection,
                            closeCallback: /*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            // In case of BiDi over CDP, we need to close browser via CDP.
                                            return [
                                                4,
                                                cdpConnection.send('Browser.close').catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            })
                        }
                    ];
            }
        });
    } //# sourceMappingURL=BrowserConnector.js.map
    );
    return _getBiDiConnection.apply(this, arguments);
}


}),

}]);