"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_util_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/common/Debug.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  debug: function() { return debug; },
  getCapturedLogs: function() { return getCapturedLogs; },
  importDebug: function() { return importDebug; },
  setLogCapture: function() { return setLogCapture; }
});
/* harmony import */var _environment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environment.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/environment.js");
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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

/**
 * @internal
 */ var debugModule = null;
/**
 * @internal
 */ function importDebug() {
    return _importDebug.apply(this, arguments);
}
function _importDebug() {
    _importDebug = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!!debugModule) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'debug'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
                    ];
                case 1:
                    debugModule = _state.sent().default;
                    _state.label = 2;
                case 2:
                    return [
                        2,
                        debugModule
                    ];
            }
        });
    });
    return _importDebug.apply(this, arguments);
}
/**
 * A debug function that can be used in any environment.
 *
 * @remarks
 * If used in Node, it falls back to the
 * {@link https://www.npmjs.com/package/debug | debug module}. In the browser it
 * uses `console.log`.
 *
 * In Node, use the `DEBUG` environment variable to control logging:
 *
 * ```
 * DEBUG=* // logs all channels
 * DEBUG=foo // logs the `foo` channel
 * DEBUG=foo* // logs any channels starting with `foo`
 * ```
 *
 * In the browser, set `window.__PUPPETEER_DEBUG` to a string:
 *
 * ```
 * window.__PUPPETEER_DEBUG='*'; // logs all channels
 * window.__PUPPETEER_DEBUG='foo'; // logs the `foo` channel
 * window.__PUPPETEER_DEBUG='foo*'; // logs any channels starting with `foo`
 * ```
 *
 * @example
 *
 * ```
 * const log = debug('Page');
 *
 * log('new page created')
 * // logs "Page: new page created"
 * ```
 *
 * @param prefix - this will be prefixed to each log.
 * @returns a function that can be called to log to that debug channel.
 *
 * @internal
 */ var debug = function(prefix) {
    if (_environment_js__WEBPACK_IMPORTED_MODULE_0__.isNode) {
        return /*#__PURE__*/ _async_to_generator(function() {
            var _len, logArgs, _key;
            var _arguments = arguments;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        for(_len = _arguments.length, logArgs = new Array(_len), _key = 0; _key < _len; _key++){
                            logArgs[_key] = _arguments[_key];
                        }
                        if (captureLogs) {
                            capturedLogs.push(prefix + logArgs);
                        }
                        return [
                            4,
                            importDebug()
                        ];
                    case 1:
                        _state.sent()(prefix)(logArgs);
                        return [
                            2
                        ];
                }
            });
        });
    }
    return function() {
        for(var _len = arguments.length, logArgs = new Array(_len), _key = 0; _key < _len; _key++){
            logArgs[_key] = arguments[_key];
        }
        var // eslint-disable-next-line no-console
        _console;
        var debugLevel = globalThis.__PUPPETEER_DEBUG;
        if (!debugLevel) {
            return;
        }
        var everythingShouldBeLogged = debugLevel === '*';
        var prefixMatchesDebugLevel = everythingShouldBeLogged || /**
             * If the debug level is `foo*`, that means we match any prefix that
             * starts with `foo`. If the level is `foo`, we match only the prefix
             * `foo`.
             */ (debugLevel.endsWith('*') ? prefix.startsWith(debugLevel) : prefix === debugLevel);
        if (!prefixMatchesDebugLevel) {
            return;
        }
        (_console = console).log.apply(_console, [
            "".concat(prefix, ":")
        ].concat(_to_consumable_array(logArgs)));
    };
};
/**
 * @internal
 */ var capturedLogs = [];
/**
 * @internal
 */ var captureLogs = false;
/**
 * @internal
 */ function setLogCapture(value) {
    capturedLogs = [];
    captureLogs = value;
}
/**
 * @internal
 */ function getCapturedLogs() {
    return capturedLogs;
} //# sourceMappingURL=Debug.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/common/PDFOptions.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  paperFormats: function() { return paperFormats; }
});
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @internal
 */ var paperFormats = {
    letter: {
        width: 8.5,
        height: 11
    },
    legal: {
        width: 8.5,
        height: 14
    },
    tabloid: {
        width: 11,
        height: 17
    },
    ledger: {
        width: 17,
        height: 11
    },
    a0: {
        width: 33.1,
        height: 46.8
    },
    a1: {
        width: 23.4,
        height: 33.1
    },
    a2: {
        width: 16.54,
        height: 23.4
    },
    a3: {
        width: 11.7,
        height: 16.54
    },
    a4: {
        width: 8.27,
        height: 11.7
    },
    a5: {
        width: 5.83,
        height: 8.27
    },
    a6: {
        width: 4.13,
        height: 5.83
    }
}; //# sourceMappingURL=PDFOptions.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DEFAULT_VIEWPORT: function() { return DEFAULT_VIEWPORT; },
  NETWORK_IDLE_TIME: function() { return NETWORK_IDLE_TIME; },
  PuppeteerURL: function() { return PuppeteerURL; },
  SOURCE_URL_REGEX: function() { return SOURCE_URL_REGEX; },
  UTILITY_WORLD_NAME: function() { return UTILITY_WORLD_NAME; },
  debugError: function() { return debugError; },
  evaluationString: function() { return evaluationString; },
  filterAsync: function() { return filterAsync; },
  fromAbortSignal: function() { return fromAbortSignal; },
  fromEmitterEvent: function() { return fromEmitterEvent; },
  getReadableAsBuffer: function() { return getReadableAsBuffer; },
  getReadableFromProtocolStream: function() { return getReadableFromProtocolStream; },
  getSourcePuppeteerURLIfAvailable: function() { return getSourcePuppeteerURLIfAvailable; },
  getSourceUrlComment: function() { return getSourceUrlComment; },
  importFSPromises: function() { return importFSPromises; },
  isDate: function() { return isDate; },
  isNumber: function() { return isNumber; },
  isPlainObject: function() { return isPlainObject; },
  isRegExp: function() { return isRegExp; },
  isString: function() { return isString; },
  parsePDFOptions: function() { return parsePDFOptions; },
  timeout: function() { return timeout; },
  unitToPixels: function() { return unitToPixels; },
  validateDialogType: function() { return validateDialogType; },
  withSourcePuppeteerURLIfNone: function() { return withSourcePuppeteerURLIfNone; }
});
/* harmony import */var _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/rxjs/rxjs.js */ "./third_party/puppeteer/package/lib/esm/third_party/rxjs/rxjs.js");
/* harmony import */var _generated_version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generated/version.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/generated/version.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _Debug_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Debug.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Debug.js");
/* harmony import */var _Errors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _PDFOptions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PDFOptions.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/PDFOptions.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _array_like_to_array(arr, len) {
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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






/**
 * @internal
 */ var debugError = (0,_Debug_js__WEBPACK_IMPORTED_MODULE_3__.debug)('puppeteer:error');
/**
 * @internal
 */ var DEFAULT_VIEWPORT = Object.freeze({
    width: 800,
    height: 600
});
/**
 * @internal
 */ var SOURCE_URL = Symbol('Source URL for Puppeteer evaluation scripts');
var _functionName = /*#__PURE__*/ new WeakMap(), _siteString = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var PuppeteerURL = /*#__PURE__*/ function() {
    "use strict";
    function PuppeteerURL() {
        _class_call_check(this, PuppeteerURL);
        _class_private_field_init(this, _functionName, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _siteString, {
            writable: true,
            value: void 0
        });
    }
    _create_class(PuppeteerURL, [
        {
            key: "functionName",
            get: function get() {
                return _class_private_field_get(this, _functionName);
            }
        },
        {
            key: "siteString",
            get: function get() {
                return _class_private_field_get(this, _siteString);
            }
        },
        {
            key: "toString",
            value: function toString() {
                return "pptr:".concat([
                    _class_private_field_get(this, _functionName),
                    encodeURIComponent(_class_private_field_get(this, _siteString))
                ].join(';'));
            }
        }
    ], [
        {
            key: "fromCallSite",
            value: function fromCallSite(functionName, site) {
                var url = new PuppeteerURL();
                _class_private_field_set(url, _functionName, functionName);
                _class_private_field_set(url, _siteString, site.toString());
                return url;
            }
        }
    ]);
    return PuppeteerURL;
}();
_define_property(PuppeteerURL, "INTERNAL_URL", 'pptr:internal');
_define_property(PuppeteerURL, "parse", function(url) {
    url = url.slice('pptr:'.length);
    var _url_split = _sliced_to_array(url.split(';'), 2), tmp = _url_split[0], functionName = tmp === void 0 ? '' : tmp, tmp1 = _url_split[1], siteString = tmp1 === void 0 ? '' : tmp1;
    var puppeteerUrl = new PuppeteerURL();
    _class_private_field_set(puppeteerUrl, _functionName, functionName);
    _class_private_field_set(puppeteerUrl, _siteString, decodeURIComponent(siteString));
    return puppeteerUrl;
});
_define_property(PuppeteerURL, "isPuppeteerURL", function(url) {
    return url.startsWith('pptr:');
});
/**
 * @internal
 */ var withSourcePuppeteerURLIfNone = function(functionName, object) {
    if (Object.prototype.hasOwnProperty.call(object, SOURCE_URL)) {
        return object;
    }
    var original = Error.prepareStackTrace;
    Error.prepareStackTrace = function(_, stack) {
        // First element is the function.
        // Second element is the caller of this function.
        // Third element is the caller of the caller of this function
        // which is precisely what we want.
        return stack[2];
    };
    var site = new Error().stack;
    Error.prepareStackTrace = original;
    return Object.assign(object, _define_property({}, SOURCE_URL, PuppeteerURL.fromCallSite(functionName, site)));
};
/**
 * @internal
 */ var getSourcePuppeteerURLIfAvailable = function(object) {
    if (Object.prototype.hasOwnProperty.call(object, SOURCE_URL)) {
        return object[SOURCE_URL];
    }
    return undefined;
};
/**
 * @internal
 */ var isString = function(obj) {
    return typeof obj === 'string' || _instanceof(obj, String);
};
/**
 * @internal
 */ var isNumber = function(obj) {
    return typeof obj === 'number' || _instanceof(obj, Number);
};
/**
 * @internal
 */ var isPlainObject = function(obj) {
    return (typeof obj === "undefined" ? "undefined" : _type_of(obj)) === 'object' && (obj === null || obj === void 0 ? void 0 : obj.constructor) === Object;
};
/**
 * @internal
 */ var isRegExp = function(obj) {
    return (typeof obj === "undefined" ? "undefined" : _type_of(obj)) === 'object' && (obj === null || obj === void 0 ? void 0 : obj.constructor) === RegExp;
};
/**
 * @internal
 */ var isDate = function(obj) {
    return (typeof obj === "undefined" ? "undefined" : _type_of(obj)) === 'object' && (obj === null || obj === void 0 ? void 0 : obj.constructor) === Date;
};
/**
 * @internal
 */ function evaluationString(fun) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if (isString(fun)) {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(args.length === 0, 'Cannot evaluate a string with arguments');
        return fun;
    }
    function serializeArgument(arg) {
        if (Object.is(arg, undefined)) {
            return 'undefined';
        }
        return JSON.stringify(arg);
    }
    return "(".concat(fun, ")(").concat(args.map(serializeArgument).join(','), ")");
}
/**
 * @internal
 */ var fs = null;
/**
 * @internal
 */ function importFSPromises() {
    return _importFSPromises.apply(this, arguments);
}
function _importFSPromises() {
    _importFSPromises = _async_to_generator(function() {
        var error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!!fs) return [
                        3,
                        4
                    ];
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'fs/promises'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
                    ];
                case 2:
                    fs = _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    error = _state.sent();
                    if (_instanceof(error, TypeError)) {
                        throw new Error('Cannot write to a path outside of a Node-like environment.');
                    }
                    throw error;
                case 4:
                    return [
                        2,
                        fs
                    ];
            }
        });
    });
    return _importFSPromises.apply(this, arguments);
}
/**
 * @internal
 */ function getReadableAsBuffer(readable, path) {
    return _getReadableAsBuffer.apply(this, arguments);
}
function _getReadableAsBuffer() {
    _getReadableAsBuffer = _async_to_generator(function(readable, path) {
        var buffers, reader, fs, fileHandle, _ref, done, value, _ref1, done1, value1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    buffers = [];
                    reader = readable.getReader();
                    if (!path) return [
                        3,
                        11
                    ];
                    return [
                        4,
                        importFSPromises()
                    ];
                case 1:
                    fs = _state.sent();
                    return [
                        4,
                        fs.open(path, 'w+')
                    ];
                case 2:
                    fileHandle = _state.sent();
                    _state.label = 3;
                case 3:
                    _state.trys.push([
                        3,
                        ,
                        8,
                        10
                    ]);
                    _state.label = 4;
                case 4:
                    if (!true) {}
                    return [
                        4,
                        reader.read()
                    ];
                case 5:
                    _ref = _state.sent(), done = _ref.done, value = _ref.value;
                    if (done) {
                        return [
                            3,
                            7
                        ];
                    }
                    buffers.push(value);
                    return [
                        4,
                        fileHandle.writeFile(value)
                    ];
                case 6:
                    _state.sent();
                    return [
                        3,
                        4
                    ];
                case 7:
                    return [
                        3,
                        10
                    ];
                case 8:
                    return [
                        4,
                        fileHandle.close()
                    ];
                case 9:
                    _state.sent();
                    return [
                        7
                    ];
                case 10:
                    return [
                        3,
                        13
                    ];
                case 11:
                    if (!true) {}
                    return [
                        4,
                        reader.read()
                    ];
                case 12:
                    _ref1 = _state.sent(), done1 = _ref1.done, value1 = _ref1.value;
                    if (done1) {
                        return [
                            3,
                            13
                        ];
                    }
                    buffers.push(value1);
                    return [
                        3,
                        11
                    ];
                case 13:
                    try {
                        return [
                            2,
                            Buffer.concat(buffers)
                        ];
                    } catch (error) {
                        debugError(error);
                        return [
                            2,
                            null
                        ];
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return _getReadableAsBuffer.apply(this, arguments);
}
/**
 * @internal
 */ /**
 * @internal
 */ function getReadableFromProtocolStream(client, handle) {
    return _getReadableFromProtocolStream.apply(this, arguments);
}
function _getReadableFromProtocolStream() {
    _getReadableFromProtocolStream = _async_to_generator(function(client, handle) {
        return _ts_generator(this, function(_state) {
            return [
                2,
                new ReadableStream({
                    pull: function pull(controller) {
                        return _async_to_generator(function() {
                            var _ref, data, base64Encoded, eof;
                            function getUnit8Array(data, isBase64) {
                                if (isBase64) {
                                    return Uint8Array.from(atob(data), function(m) {
                                        return m.codePointAt(0);
                                    });
                                }
                                var encoder = new TextEncoder();
                                return encoder.encode(data);
                            }
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        return [
                                            4,
                                            client.send('IO.read', {
                                                handle: handle
                                            })
                                        ];
                                    case 1:
                                        _ref = _state.sent(), data = _ref.data, base64Encoded = _ref.base64Encoded, eof = _ref.eof;
                                        controller.enqueue(getUnit8Array(data, base64Encoded !== null && base64Encoded !== void 0 ? base64Encoded : false));
                                        if (!eof) return [
                                            3,
                                            3
                                        ];
                                        return [
                                            4,
                                            client.send('IO.close', {
                                                handle: handle
                                            })
                                        ];
                                    case 2:
                                        _state.sent();
                                        controller.close();
                                        _state.label = 3;
                                    case 3:
                                        return [
                                            2
                                        ];
                                }
                            });
                        })();
                    }
                })
            ];
        });
    });
    return _getReadableFromProtocolStream.apply(this, arguments);
}
/**
 * @internal
 */ function validateDialogType(type) {
    var dialogType = null;
    var validDialogTypes = new Set([
        'alert',
        'confirm',
        'prompt',
        'beforeunload'
    ]);
    if (validDialogTypes.has(type)) {
        dialogType = type;
    }
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(dialogType, "Unknown javascript dialog type: ".concat(type));
    return dialogType;
}
/**
 * @internal
 */ function timeout(ms, cause) {
    return ms === 0 ? _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.NEVER : (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.timer)(ms).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(function() {
        throw new _Errors_js__WEBPACK_IMPORTED_MODULE_4__.TimeoutError("Timed out after waiting ".concat(ms, "ms"), {
            cause: cause
        });
    }));
}
/**
 * @internal
 */ var UTILITY_WORLD_NAME = '__puppeteer_utility_world__' + _generated_version_js__WEBPACK_IMPORTED_MODULE_1__.packageVersion;
/**
 * @internal
 */ var SOURCE_URL_REGEX = /^[\040\t]*\/\/[@#] sourceURL=\s*(\S*?)\s*$/m;
/**
 * @internal
 */ function getSourceUrlComment(url) {
    return "//# sourceURL=".concat(url);
}
/**
 * @internal
 */ var NETWORK_IDLE_TIME = 500;
/**
 * @internal
 */ function parsePDFOptions() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, lengthUnit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'in';
    var _options_margin, _options_margin1, _options_margin2, _options_margin3;
    var defaults = {
        scale: 1,
        displayHeaderFooter: false,
        headerTemplate: '',
        footerTemplate: '',
        printBackground: false,
        landscape: false,
        pageRanges: '',
        preferCSSPageSize: false,
        omitBackground: false,
        outline: false,
        tagged: true,
        waitForFonts: true
    };
    var width = 8.5;
    var height = 11;
    if (options.format) {
        var format = _PDFOptions_js__WEBPACK_IMPORTED_MODULE_5__.paperFormats[options.format.toLowerCase()];
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(format, 'Unknown paper format: ' + options.format);
        width = format.width;
        height = format.height;
    } else {
        var _convertPrintParameterToInches;
        width = (_convertPrintParameterToInches = convertPrintParameterToInches(options.width, lengthUnit)) !== null && _convertPrintParameterToInches !== void 0 ? _convertPrintParameterToInches : width;
        var _convertPrintParameterToInches1;
        height = (_convertPrintParameterToInches1 = convertPrintParameterToInches(options.height, lengthUnit)) !== null && _convertPrintParameterToInches1 !== void 0 ? _convertPrintParameterToInches1 : height;
    }
    var margin = {
        top: convertPrintParameterToInches((_options_margin = options.margin) === null || _options_margin === void 0 ? void 0 : _options_margin.top, lengthUnit) || 0,
        left: convertPrintParameterToInches((_options_margin1 = options.margin) === null || _options_margin1 === void 0 ? void 0 : _options_margin1.left, lengthUnit) || 0,
        bottom: convertPrintParameterToInches((_options_margin2 = options.margin) === null || _options_margin2 === void 0 ? void 0 : _options_margin2.bottom, lengthUnit) || 0,
        right: convertPrintParameterToInches((_options_margin3 = options.margin) === null || _options_margin3 === void 0 ? void 0 : _options_margin3.right, lengthUnit) || 0
    };
    // Quirk https://bugs.chromium.org/p/chromium/issues/detail?id=840455#c44
    if (options.outline) {
        options.tagged = true;
    }
    return _object_spread_props(_object_spread({}, defaults, options), {
        width: width,
        height: height,
        margin: margin
    });
}
/**
 * @internal
 */ var unitToPixels = {
    px: 1,
    in: 96,
    cm: 37.8,
    mm: 3.78
};
function convertPrintParameterToInches(parameter) {
    var lengthUnit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'in';
    if (typeof parameter === 'undefined') {
        return undefined;
    }
    var pixels;
    if (isNumber(parameter)) {
        // Treat numbers as pixel values to be aligned with phantom's paperSize.
        pixels = parameter;
    } else if (isString(parameter)) {
        var text = parameter;
        var unit = text.substring(text.length - 2).toLowerCase();
        var valueText = '';
        if (unit in unitToPixels) {
            valueText = text.substring(0, text.length - 2);
        } else {
            // In case of unknown unit try to parse the whole parameter as number of pixels.
            // This is consistent with phantom's paperSize behavior.
            unit = 'px';
            valueText = text;
        }
        var value = Number(valueText);
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!isNaN(value), 'Failed to parse parameter value: ' + text);
        pixels = value * unitToPixels[unit];
    } else {
        throw new Error('page.pdf() Cannot handle parameter type: ' + (typeof parameter === "undefined" ? "undefined" : _type_of(parameter)));
    }
    return pixels / unitToPixels[lengthUnit];
}
/**
 * @internal
 */ function fromEmitterEvent(emitter, eventName) {
    return new _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.Observable(function(subscriber) {
        var listener = function(event) {
            subscriber.next(event);
        };
        emitter.on(eventName, listener);
        return function() {
            emitter.off(eventName, listener);
        };
    });
}
/**
 * @internal
 */ function fromAbortSignal(signal, cause) {
    return signal ? (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(signal, 'abort').pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(function() {
        if (_instanceof(signal.reason, Error)) {
            signal.reason.cause = cause;
            throw signal.reason;
        }
        throw new Error(signal.reason, {
            cause: cause
        });
    })) : _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.NEVER;
}
/**
 * @internal
 */ function filterAsync(predicate) {
    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(function(value) {
        return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(Promise.resolve(predicate(value))).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.filter)(function(isMatch) {
            return isMatch;
        }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(function() {
            return value;
        }));
    });
} //# sourceMappingURL=util.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/environment.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isNode: function() { return isNode; }
});
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @internal
 */ var isNode = !!(typeof process !== 'undefined' && process.version); //# sourceMappingURL=environment.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/generated/version.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  packageVersion: function() { return packageVersion; }
});
/**
 * @internal
 */ var packageVersion = '22.14.0'; //# sourceMappingURL=version.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assert: function() { return assert; }
});
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * Asserts that the given value is truthy.
 * @param value - some conditional statement
 * @param message - the error message to throw if the value is not truthy.
 *
 * @internal
 */ var assert = function(value, message) {
    if (!value) {
        throw new Error(message);
    }
}; //# sourceMappingURL=assert.js.map


}),

}]);