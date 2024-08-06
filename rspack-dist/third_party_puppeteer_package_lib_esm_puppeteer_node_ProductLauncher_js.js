"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_node_ProductLauncher_js"], {
"../node_modules/.pnpm/ws@8.18.0/node_modules/ws/browser.js": (function (module) {

module.exports = function() {
    throw new Error('ws does not work in the browser. Browser clients must use the native ' + 'WebSocket object');
};


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/node/NodeWebSocketTransport.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NodeWebSocketTransport: function() { return NodeWebSocketTransport; }
});
/* harmony import */var ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ws */ "../node_modules/.pnpm/ws@8.18.0/node_modules/ws/browser.js");
/* harmony import */var ws__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ws__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var _generated_version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generated/version.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/generated/version.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
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


var _ws = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var NodeWebSocketTransport = /*#__PURE__*/ function() {
    "use strict";
    function NodeWebSocketTransport(ws) {
        var _this = this;
        _class_call_check(this, NodeWebSocketTransport);
        _class_private_field_init(this, _ws, {
            writable: true,
            value: void 0
        });
        _define_property(this, "onmessage", void 0);
        _define_property(this, "onclose", void 0);
        _class_private_field_set(this, _ws, ws);
        _class_private_field_get(this, _ws).addEventListener('message', function(event) {
            if (_this.onmessage) {
                _this.onmessage.call(null, event.data);
            }
        });
        _class_private_field_get(this, _ws).addEventListener('close', function() {
            if (_this.onclose) {
                _this.onclose.call(null);
            }
        });
        // Silently ignore all errors - we don't know what to do with them.
        _class_private_field_get(this, _ws).addEventListener('error', function() {});
    }
    _create_class(NodeWebSocketTransport, [
        {
            key: "send",
            value: function send(message) {
                _class_private_field_get(this, _ws).send(message);
            }
        },
        {
            key: "close",
            value: function close() {
                _class_private_field_get(this, _ws).close();
            }
        }
    ], [
        {
            key: "create",
            value: function create(url, headers) {
                return new Promise(function(resolve, reject) {
                    var ws = new (ws__WEBPACK_IMPORTED_MODULE_0___default())(url, [], {
                        followRedirects: true,
                        perMessageDeflate: false,
                        // @ts-expect-error https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketaddress-protocols-options
                        allowSynchronousEvents: false,
                        maxPayload: 256 * 1024 * 1024,
                        headers: _object_spread({
                            'User-Agent': "Puppeteer ".concat(_generated_version_js__WEBPACK_IMPORTED_MODULE_1__.packageVersion)
                        }, headers)
                    });
                    ws.addEventListener('open', function() {
                        return resolve(new NodeWebSocketTransport(ws));
                    });
                    ws.addEventListener('error', reject);
                });
            }
        }
    ]);
    return NodeWebSocketTransport;
} //# sourceMappingURL=NodeWebSocketTransport.js.map
();


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/node/PipeTransport.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PipeTransport: function() { return PipeTransport; }
});
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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




var _pipeWrite = /*#__PURE__*/ new WeakMap(), _subscriptions = /*#__PURE__*/ new WeakMap(), _isClosed = /*#__PURE__*/ new WeakMap(), _pendingMessage = /*#__PURE__*/ new WeakMap(), _dispatch = /*#__PURE__*/ new WeakSet();
/**
 * @internal
 */ var PipeTransport = /*#__PURE__*/ function() {
    "use strict";
    function PipeTransport(pipeWrite, pipeRead) {
        var _this = this;
        _class_call_check(this, PipeTransport);
        _class_private_method_init(this, _dispatch);
        _class_private_field_init(this, _pipeWrite, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _subscriptions, {
            writable: true,
            value: new _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.DisposableStack()
        });
        _class_private_field_init(this, _isClosed, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _pendingMessage, {
            writable: true,
            value: ''
        });
        _define_property(this, "onclose", void 0);
        _define_property(this, "onmessage", void 0);
        _class_private_field_set(this, _pipeWrite, pipeWrite);
        var pipeReadEmitter = _class_private_field_get(this, _subscriptions).use(// NodeJS event emitters don't support `*` so we need to typecast
        // As long as we don't use it we should be OK.
        new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(pipeRead));
        pipeReadEmitter.on('data', function(buffer) {
            return _class_private_method_get(_this, _dispatch, dispatch).call(_this, buffer);
        });
        pipeReadEmitter.on('close', function() {
            if (_this.onclose) {
                _this.onclose.call(null);
            }
        });
        pipeReadEmitter.on('error', _common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError);
        var pipeWriteEmitter = _class_private_field_get(this, _subscriptions).use(// NodeJS event emitters don't support `*` so we need to typecast
        // As long as we don't use it we should be OK.
        new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(pipeRead));
        pipeWriteEmitter.on('error', _common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError);
    }
    _create_class(PipeTransport, [
        {
            key: "send",
            value: function send(message) {
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!_class_private_field_get(this, _isClosed), '`PipeTransport` is closed.');
                _class_private_field_get(this, _pipeWrite).write(message);
                _class_private_field_get(this, _pipeWrite).write('\0');
            }
        },
        {
            key: "close",
            value: function close() {
                _class_private_field_set(this, _isClosed, true);
                _class_private_field_get(this, _subscriptions).dispose();
            }
        }
    ]);
    return PipeTransport;
} //# sourceMappingURL=PipeTransport.js.map
();
function dispatch(buffer) {
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!_class_private_field_get(this, _isClosed), '`PipeTransport` is closed.');
    var end = buffer.indexOf('\0');
    if (end === -1) {
        _class_private_field_set(this, _pendingMessage, _class_private_field_get(this, _pendingMessage) + buffer.toString());
        return;
    }
    var message = _class_private_field_get(this, _pendingMessage) + buffer.toString(undefined, 0, end);
    if (this.onmessage) {
        this.onmessage.call(null, message);
    }
    var start = end + 1;
    end = buffer.indexOf('\0', start);
    while(end !== -1){
        if (this.onmessage) {
            this.onmessage.call(null, buffer.toString(undefined, start, end));
        }
        start = end + 1;
        end = buffer.indexOf('\0', start);
    }
    _class_private_field_set(this, _pendingMessage, buffer.toString(undefined, start));
}


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/node/ProductLauncher.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ProductLauncher: function() { return ProductLauncher; }
});
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'os'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../third_party/rxjs/rxjs.js */ "./third_party/puppeteer/package/lib/esm/third_party/rxjs/rxjs.js");
/* harmony import */var _cdp_Browser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cdp/Browser.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Browser.js");
/* harmony import */var _cdp_Connection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cdp/Connection.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Connection.js");
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _NodeWebSocketTransport_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NodeWebSocketTransport.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/node/NodeWebSocketTransport.js");
/* harmony import */var _PipeTransport_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PipeTransport.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/node/PipeTransport.js");
/**
 * @license
 * Copyright 2017 Google Inc.
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
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
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











var _product = /*#__PURE__*/ new WeakMap();
/**
 * Describes a launcher - a class that is able to create and launch a browser instance.
 *
 * @public
 */ var ProductLauncher = /*#__PURE__*/ function() {
    "use strict";
    function ProductLauncher(puppeteer, product) {
        _class_call_check(this, ProductLauncher);
        _class_private_field_init(this, _product, {
            writable: true,
            value: void 0
        });
        /**
     * @internal
     */ _define_property(this, "puppeteer", void 0);
        /**
     * @internal
     */ _define_property(this, "actualBrowserRevision", void 0);
        this.puppeteer = puppeteer;
        _class_private_field_set(this, _product, product);
    }
    _create_class(ProductLauncher, [
        {
            key: "product",
            get: function get() {
                return _class_private_field_get(this, _product);
            }
        },
        {
            key: "launch",
            value: function launch1() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _options_dumpio, dumpio, _options_env, env, _options_handleSIGINT, handleSIGINT, _options_handleSIGTERM, handleSIGTERM, _options_handleSIGHUP, handleSIGHUP, _options_ignoreHTTPSErrors, ignoreHTTPSErrors, _options_defaultViewport, defaultViewport, _options_slowMo, slowMo, _options_timeout, timeout, _options_waitForInitialPage, waitForInitialPage, protocolTimeout, protocol, launchArgs, usePipe, onProcessExit, browserProcess, browser, cdpConnection, closing, browserCloseCallback, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _options_dumpio = options.dumpio, dumpio = _options_dumpio === void 0 ? false : _options_dumpio, _options_env = options.env, env = _options_env === void 0 ? process.env : _options_env, _options_handleSIGINT = options.handleSIGINT, handleSIGINT = _options_handleSIGINT === void 0 ? true : _options_handleSIGINT, _options_handleSIGTERM = options.handleSIGTERM, handleSIGTERM = _options_handleSIGTERM === void 0 ? true : _options_handleSIGTERM, _options_handleSIGHUP = options.handleSIGHUP, handleSIGHUP = _options_handleSIGHUP === void 0 ? true : _options_handleSIGHUP, _options_ignoreHTTPSErrors = options.ignoreHTTPSErrors, ignoreHTTPSErrors = _options_ignoreHTTPSErrors === void 0 ? false : _options_ignoreHTTPSErrors, _options_defaultViewport = options.defaultViewport, defaultViewport = _options_defaultViewport === void 0 ? _common_util_js__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_VIEWPORT : _options_defaultViewport, _options_slowMo = options.slowMo, slowMo = _options_slowMo === void 0 ? 0 : _options_slowMo, _options_timeout = options.timeout, timeout = _options_timeout === void 0 ? 30000 : _options_timeout, _options_waitForInitialPage = options.waitForInitialPage, waitForInitialPage = _options_waitForInitialPage === void 0 ? true : _options_waitForInitialPage, protocolTimeout = options.protocolTimeout, protocol = options.protocol;
                                return [
                                    4,
                                    _this.computeLaunchArguments(options)
                                ];
                            case 1:
                                launchArgs = _state.sent();
                                if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(launchArgs.executablePath)) {
                                    throw new Error("Browser was not found at the configured executablePath (".concat(launchArgs.executablePath, ")"));
                                }
                                usePipe = launchArgs.args.includes('--remote-debugging-pipe');
                                onProcessExit = function() {
                                    var _ref = _async_to_generator(function() {
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        _this.cleanUserDataDir(launchArgs.userDataDir, {
                                                            isTemp: launchArgs.isTempUserDataDir
                                                        })
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    });
                                    return function onProcessExit() {
                                        return _ref.apply(this, arguments);
                                    };
                                }();
                                if (_class_private_field_get(_this, _product) === 'firefox' && protocol !== 'webDriverBiDi' && _this.puppeteer.configuration.logLevel === 'warn') {
                                    console.warn("Chrome DevTools Protocol (CDP) support for Firefox is deprecated in Puppeteer " + "and it will be eventually removed. " + "Use WebDriver BiDi instead (see https://pptr.dev/webdriver-bidi#get-started).");
                                }
                                browserProcess = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
                                    executablePath: launchArgs.executablePath,
                                    args: launchArgs.args,
                                    handleSIGHUP: handleSIGHUP,
                                    handleSIGTERM: handleSIGTERM,
                                    handleSIGINT: handleSIGINT,
                                    dumpio: dumpio,
                                    env: env,
                                    pipe: usePipe,
                                    onExit: onProcessExit
                                });
                                closing = false;
                                browserCloseCallback = function() {
                                    var _ref = _async_to_generator(function() {
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    if (closing) {
                                                        return [
                                                            2
                                                        ];
                                                    }
                                                    closing = true;
                                                    return [
                                                        4,
                                                        _this.closeBrowser(browserProcess, cdpConnection)
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    });
                                    return function browserCloseCallback() {
                                        return _ref.apply(this, arguments);
                                    };
                                }();
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    13,
                                    ,
                                    14
                                ]);
                                if (!(_class_private_field_get(_this, _product) === 'firefox' && protocol === 'webDriverBiDi')) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    _this.createBiDiBrowser(browserProcess, browserCloseCallback, {
                                        timeout: timeout,
                                        protocolTimeout: protocolTimeout,
                                        slowMo: slowMo,
                                        defaultViewport: defaultViewport,
                                        ignoreHTTPSErrors: ignoreHTTPSErrors
                                    })
                                ];
                            case 3:
                                browser = _state.sent();
                                return [
                                    3,
                                    12
                                ];
                            case 4:
                                if (!usePipe) return [
                                    3,
                                    6
                                ];
                                return [
                                    4,
                                    _this.createCdpPipeConnection(browserProcess, {
                                        timeout: timeout,
                                        protocolTimeout: protocolTimeout,
                                        slowMo: slowMo
                                    })
                                ];
                            case 5:
                                cdpConnection = _state.sent();
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                return [
                                    4,
                                    _this.createCdpSocketConnection(browserProcess, {
                                        timeout: timeout,
                                        protocolTimeout: protocolTimeout,
                                        slowMo: slowMo
                                    })
                                ];
                            case 7:
                                cdpConnection = _state.sent();
                                _state.label = 8;
                            case 8:
                                if (!(protocol === 'webDriverBiDi')) return [
                                    3,
                                    10
                                ];
                                return [
                                    4,
                                    _this.createBiDiOverCdpBrowser(browserProcess, cdpConnection, browserCloseCallback, {
                                        defaultViewport: defaultViewport,
                                        ignoreHTTPSErrors: ignoreHTTPSErrors
                                    })
                                ];
                            case 9:
                                browser = _state.sent();
                                return [
                                    3,
                                    12
                                ];
                            case 10:
                                return [
                                    4,
                                    _cdp_Browser_js__WEBPACK_IMPORTED_MODULE_2__.CdpBrowser._create(_this.product, cdpConnection, [], ignoreHTTPSErrors, defaultViewport, browserProcess.nodeProcess, browserCloseCallback, options.targetFilter)
                                ];
                            case 11:
                                browser = _state.sent();
                                _state.label = 12;
                            case 12:
                                return [
                                    3,
                                    14
                                ];
                            case 13:
                                error = _state.sent();
                                void browserCloseCallback();
                                if (_instanceof(error, Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) {
                                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_4__.TimeoutError(error.message);
                                }
                                throw error;
                            case 14:
                                if (!waitForInitialPage) return [
                                    3,
                                    16
                                ];
                                return [
                                    4,
                                    _this.waitForPageTarget(browser, timeout)
                                ];
                            case 15:
                                _state.sent();
                                _state.label = 16;
                            case 16:
                                return [
                                    2,
                                    browser
                                ];
                        }
                    });
                })();
            }
        },
        {
            /**
     * Set only for Firefox, after the launcher resolves the `latest` revision to
     * the actual revision.
     * @internal
     */ key: "getActualBrowserRevision",
            value: function getActualBrowserRevision() {
                return this.actualBrowserRevision;
            }
        },
        {
            key: "closeBrowser",
            value: /**
     * @internal
     */ function closeBrowser(browserProcess, cdpConnection) {
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!cdpConnection) return [
                                    3,
                                    7
                                ];
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    4,
                                    ,
                                    6
                                ]);
                                return [
                                    4,
                                    cdpConnection.closeBrowser()
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    4,
                                    browserProcess.hasClosed()
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    3,
                                    6
                                ];
                            case 4:
                                error = _state.sent();
                                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.debugError)(error);
                                return [
                                    4,
                                    browserProcess.close()
                                ];
                            case 5:
                                _state.sent();
                                return [
                                    3,
                                    6
                                ];
                            case 6:
                                return [
                                    3,
                                    9
                                ];
                            case 7:
                                // Wait for a possible graceful shutdown.
                                return [
                                    4,
                                    (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.race)((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.from)(browserProcess.hasClosed()), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.timer)(5000).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.map)(function() {
                                        return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.from)(browserProcess.close());
                                    }))))
                                ];
                            case 8:
                                _state.sent();
                                _state.label = 9;
                            case 9:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "waitForPageTarget",
            value: /**
     * @internal
     */ function waitForPageTarget(browser, timeout) {
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    browser.waitForTarget(function(t) {
                                        return t.type() === 'page';
                                    }, {
                                        timeout: timeout
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 2:
                                error = _state.sent();
                                return [
                                    4,
                                    browser.close()
                                ];
                            case 3:
                                _state.sent();
                                throw error;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "createCdpSocketConnection",
            value: /**
     * @internal
     */ function createCdpSocketConnection(browserProcess, opts) {
                return _async_to_generator(function() {
                    var browserWSEndpoint, transport;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    browserProcess.waitForLineOutput(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), opts.timeout)
                                ];
                            case 1:
                                browserWSEndpoint = _state.sent();
                                return [
                                    4,
                                    _NodeWebSocketTransport_js__WEBPACK_IMPORTED_MODULE_6__.NodeWebSocketTransport.create(browserWSEndpoint)
                                ];
                            case 2:
                                transport = _state.sent();
                                return [
                                    2,
                                    new _cdp_Connection_js__WEBPACK_IMPORTED_MODULE_3__.Connection(browserWSEndpoint, transport, opts.slowMo, opts.protocolTimeout)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "createCdpPipeConnection",
            value: /**
     * @internal
     */ function createCdpPipeConnection(browserProcess, opts) {
                return _async_to_generator(function() {
                    var _browserProcess_nodeProcess_stdio, pipeWrite, pipeRead, transport;
                    return _ts_generator(this, function(_state) {
                        // stdio was assigned during start(), and the 'pipe' option there adds the
                        // 4th and 5th items to stdio array
                        _browserProcess_nodeProcess_stdio = browserProcess.nodeProcess.stdio, pipeWrite = _browserProcess_nodeProcess_stdio[3], pipeRead = _browserProcess_nodeProcess_stdio[4];
                        transport = new _PipeTransport_js__WEBPACK_IMPORTED_MODULE_7__.PipeTransport(pipeWrite, pipeRead);
                        return [
                            2,
                            new _cdp_Connection_js__WEBPACK_IMPORTED_MODULE_3__.Connection('', transport, opts.slowMo, opts.protocolTimeout)
                        ];
                    });
                })();
            }
        },
        {
            key: "createBiDiOverCdpBrowser",
            value: /**
     * @internal
     */ function createBiDiOverCdpBrowser(browserProcess, connection, closeCallback, opts) {
                return _async_to_generator(function() {
                    var BiDi, _opts_ignoreHTTPSErrors, bidiConnection;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    import(/* webpackIgnore: true */ '../bidi/bidi.js')
                                ];
                            case 1:
                                BiDi = _state.sent();
                                return [
                                    4,
                                    BiDi.connectBidiOverCdp(connection, {
                                        acceptInsecureCerts: (_opts_ignoreHTTPSErrors = opts.ignoreHTTPSErrors) !== null && _opts_ignoreHTTPSErrors !== void 0 ? _opts_ignoreHTTPSErrors : false
                                    })
                                ];
                            case 2:
                                bidiConnection = _state.sent();
                                return [
                                    4,
                                    BiDi.BidiBrowser.create({
                                        connection: bidiConnection,
                                        cdpConnection: connection,
                                        closeCallback: closeCallback,
                                        process: browserProcess.nodeProcess,
                                        defaultViewport: opts.defaultViewport,
                                        ignoreHTTPSErrors: opts.ignoreHTTPSErrors
                                    })
                                ];
                            case 3:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "createBiDiBrowser",
            value: /**
     * @internal
     */ function createBiDiBrowser(browserProcess, closeCallback, opts) {
                return _async_to_generator(function() {
                    var browserWSEndpoint, transport, BiDi, bidiConnection;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    browserProcess.waitForLineOutput(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), opts.timeout)
                                ];
                            case 1:
                                browserWSEndpoint = _state.sent() + '/session';
                                return [
                                    4,
                                    _NodeWebSocketTransport_js__WEBPACK_IMPORTED_MODULE_6__.NodeWebSocketTransport.create(browserWSEndpoint)
                                ];
                            case 2:
                                transport = _state.sent();
                                return [
                                    4,
                                    import(/* webpackIgnore: true */ '../bidi/bidi.js')
                                ];
                            case 3:
                                BiDi = _state.sent();
                                bidiConnection = new BiDi.BidiConnection(browserWSEndpoint, transport, opts.slowMo, opts.protocolTimeout);
                                return [
                                    4,
                                    BiDi.BidiBrowser.create({
                                        connection: bidiConnection,
                                        closeCallback: closeCallback,
                                        process: browserProcess.nodeProcess,
                                        defaultViewport: opts.defaultViewport,
                                        ignoreHTTPSErrors: opts.ignoreHTTPSErrors
                                    })
                                ];
                            case 4:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            /**
     * @internal
     */ key: "getProfilePath",
            value: function getProfilePath() {
                var _this_puppeteer_configuration_temporaryDirectory;
                return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((_this_puppeteer_configuration_temporaryDirectory = this.puppeteer.configuration.temporaryDirectory) !== null && _this_puppeteer_configuration_temporaryDirectory !== void 0 ? _this_puppeteer_configuration_temporaryDirectory : Object(function webpackMissingModule() { var e = new Error("Cannot find module 'os'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), "puppeteer_dev_".concat(this.product, "_profile-"));
            }
        },
        {
            /**
     * @internal
     */ key: "resolveExecutablePath",
            value: function resolveExecutablePath(headless) {
                var executablePath = this.puppeteer.configuration.executablePath;
                if (executablePath) {
                    if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(executablePath)) {
                        throw new Error("Tried to find the browser at the configured path (".concat(executablePath, "), but no executable was found."));
                    }
                    return executablePath;
                }
                function productToBrowser(product, headless) {
                    switch(product){
                        case 'chrome':
                            if (headless === 'shell') {
                                return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
                            }
                            return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
                        case 'firefox':
                            return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
                    }
                    return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
                }
                executablePath = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
                    cacheDir: this.puppeteer.defaultDownloadPath,
                    browser: productToBrowser(this.product, headless),
                    buildId: this.puppeteer.browserRevision
                });
                if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(executablePath)) {
                    if (this.puppeteer.configuration.browserRevision) {
                        throw new Error("Tried to find the browser at the configured path (".concat(executablePath, ") for revision ").concat(this.puppeteer.browserRevision, ", but no executable was found."));
                    }
                    switch(this.product){
                        case 'chrome':
                            throw new Error("Could not find Chrome (ver. ".concat(this.puppeteer.browserRevision, "). This can occur if either\n") + ' 1. you did not perform an installation before running the script (e.g. `npx puppeteer browsers install chrome`) or\n' + " 2. your cache path is incorrectly configured (which is: ".concat(this.puppeteer.configuration.cacheDirectory, ").\n") + 'For (2), check out our guide on configuring puppeteer at https://pptr.dev/guides/configuration.');
                        case 'firefox':
                            throw new Error("Could not find Firefox (rev. ".concat(this.puppeteer.browserRevision, "). This can occur if either\n") + ' 1. you did not perform an installation for Firefox before running the script (e.g. `npx puppeteer browsers install firefox`) or\n' + " 2. your cache path is incorrectly configured (which is: ".concat(this.puppeteer.configuration.cacheDirectory, ").\n") + 'For (2), check out our guide on configuring puppeteer at https://pptr.dev/guides/configuration.');
                    }
                }
                return executablePath;
            }
        }
    ]);
    return ProductLauncher;
} //# sourceMappingURL=ProductLauncher.js.map
();


}),

}]);