"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_Coverage_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Coverage.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSCoverage: function() { return CSSCoverage; },
  Coverage: function() { return Coverage; },
  JSCoverage: function() { return JSCoverage; }
});
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/**
 * @license
 * Copyright 2017 Google Inc.
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




var _jsCoverage = /*#__PURE__*/ new WeakMap(), _cssCoverage = /*#__PURE__*/ new WeakMap();
/**
 * The Coverage class provides methods to gather information about parts of
 * JavaScript and CSS that were used by the page.
 *
 * @remarks
 * To output coverage in a form consumable by {@link https://github.com/istanbuljs | Istanbul},
 * see {@link https://github.com/istanbuljs/puppeteer-to-istanbul | puppeteer-to-istanbul}.
 *
 * @example
 * An example of using JavaScript and CSS coverage to get percentage of initially
 * executed code:
 *
 * ```ts
 * // Enable both JavaScript and CSS coverage
 * await Promise.all([
 *   page.coverage.startJSCoverage(),
 *   page.coverage.startCSSCoverage(),
 * ]);
 * // Navigate to page
 * await page.goto('https://example.com');
 * // Disable both JavaScript and CSS coverage
 * const [jsCoverage, cssCoverage] = await Promise.all([
 *   page.coverage.stopJSCoverage(),
 *   page.coverage.stopCSSCoverage(),
 * ]);
 * let totalBytes = 0;
 * let usedBytes = 0;
 * const coverage = [...jsCoverage, ...cssCoverage];
 * for (const entry of coverage) {
 *   totalBytes += entry.text.length;
 *   for (const range of entry.ranges) usedBytes += range.end - range.start - 1;
 * }
 * console.log(`Bytes used: ${(usedBytes / totalBytes) * 100}%`);
 * ```
 *
 * @public
 */ var Coverage = /*#__PURE__*/ function() {
    "use strict";
    function Coverage(client) {
        _class_call_check(this, Coverage);
        _class_private_field_init(this, _jsCoverage, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _cssCoverage, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _jsCoverage, new JSCoverage(client));
        _class_private_field_set(this, _cssCoverage, new CSSCoverage(client));
    }
    _create_class(Coverage, [
        {
            /**
     * @internal
     */ key: "updateClient",
            value: function updateClient(client) {
                _class_private_field_get(this, _jsCoverage).updateClient(client);
                _class_private_field_get(this, _cssCoverage).updateClient(client);
            }
        },
        {
            key: "startJSCoverage",
            value: /**
     * @param options - Set of configurable options for coverage defaults to
     * `resetOnNavigation : true, reportAnonymousScripts : false,`
     * `includeRawScriptCoverage : false, useBlockCoverage : true`
     * @returns Promise that resolves when coverage is started.
     *
     * @remarks
     * Anonymous scripts are ones that don't have an associated url. These are
     * scripts that are dynamically created on the page using `eval` or
     * `new Function`. If `reportAnonymousScripts` is set to `true`, anonymous
     * scripts URL will start with `debugger://VM` (unless a magic //# sourceURL
     * comment is present, in which case that will the be URL).
     */ function startJSCoverage() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _jsCoverage).start(options)
                                ];
                            case 1:
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
            key: "stopJSCoverage",
            value: /**
     * Promise that resolves to the array of coverage reports for
     * all scripts.
     *
     * @remarks
     * JavaScript Coverage doesn't include anonymous scripts by default.
     * However, scripts with sourceURLs are reported.
     */ function stopJSCoverage() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _jsCoverage).stop()
                                ];
                            case 1:
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
            key: "startCSSCoverage",
            value: /**
     * @param options - Set of configurable options for coverage, defaults to
     * `resetOnNavigation : true`
     * @returns Promise that resolves when coverage is started.
     */ function startCSSCoverage() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _cssCoverage).start(options)
                                ];
                            case 1:
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
            key: "stopCSSCoverage",
            value: /**
     * Promise that resolves to the array of coverage reports
     * for all stylesheets.
     *
     * @remarks
     * CSS Coverage doesn't include dynamically injected style tags
     * without sourceURLs.
     */ function stopCSSCoverage() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _cssCoverage).stop()
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return Coverage;
}();
var _client = /*#__PURE__*/ new WeakMap(), _enabled = /*#__PURE__*/ new WeakMap(), _scriptURLs = /*#__PURE__*/ new WeakMap(), _scriptSources = /*#__PURE__*/ new WeakMap(), _subscriptions = /*#__PURE__*/ new WeakMap(), _resetOnNavigation = /*#__PURE__*/ new WeakMap(), _reportAnonymousScripts = /*#__PURE__*/ new WeakMap(), _includeRawScriptCoverage = /*#__PURE__*/ new WeakMap(), _onExecutionContextsCleared = /*#__PURE__*/ new WeakSet(), _onScriptParsed = /*#__PURE__*/ new WeakSet();
/**
 * @public
 */ var JSCoverage = /*#__PURE__*/ function() {
    "use strict";
    function JSCoverage(client) {
        _class_call_check(this, JSCoverage);
        _class_private_method_init(this, _onExecutionContextsCleared);
        _class_private_method_init(this, _onScriptParsed);
        _class_private_field_init(this, _client, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _enabled, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _scriptURLs, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _scriptSources, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _subscriptions, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _resetOnNavigation, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _reportAnonymousScripts, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _includeRawScriptCoverage, {
            writable: true,
            value: false
        });
        _class_private_field_set(this, _client, client);
    }
    _create_class(JSCoverage, [
        {
            /**
     * @internal
     */ key: "updateClient",
            value: function updateClient(client) {
                _class_private_field_set(this, _client, client);
            }
        },
        {
            key: "start",
            value: function start() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _options_resetOnNavigation, resetOnNavigation, _options_reportAnonymousScripts, reportAnonymousScripts, _options_includeRawScriptCoverage, includeRawScriptCoverage, _options_useBlockCoverage, useBlockCoverage, clientEmitter;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!_class_private_field_get(_this, _enabled), 'JSCoverage is already enabled');
                                _options_resetOnNavigation = options.resetOnNavigation, resetOnNavigation = _options_resetOnNavigation === void 0 ? true : _options_resetOnNavigation, _options_reportAnonymousScripts = options.reportAnonymousScripts, reportAnonymousScripts = _options_reportAnonymousScripts === void 0 ? false : _options_reportAnonymousScripts, _options_includeRawScriptCoverage = options.includeRawScriptCoverage, includeRawScriptCoverage = _options_includeRawScriptCoverage === void 0 ? false : _options_includeRawScriptCoverage, _options_useBlockCoverage = options.useBlockCoverage, useBlockCoverage = _options_useBlockCoverage === void 0 ? true : _options_useBlockCoverage;
                                _class_private_field_set(_this, _resetOnNavigation, resetOnNavigation);
                                _class_private_field_set(_this, _reportAnonymousScripts, reportAnonymousScripts);
                                _class_private_field_set(_this, _includeRawScriptCoverage, includeRawScriptCoverage);
                                _class_private_field_set(_this, _enabled, true);
                                _class_private_field_get(_this, _scriptURLs).clear();
                                _class_private_field_get(_this, _scriptSources).clear();
                                _class_private_field_set(_this, _subscriptions, new _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.DisposableStack());
                                clientEmitter = _class_private_field_get(_this, _subscriptions).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(_class_private_field_get(_this, _client)));
                                clientEmitter.on('Debugger.scriptParsed', _class_private_method_get(_this, _onScriptParsed, onScriptParsed).bind(_this));
                                clientEmitter.on('Runtime.executionContextsCleared', _class_private_method_get(_this, _onExecutionContextsCleared, onExecutionContextsCleared).bind(_this));
                                return [
                                    4,
                                    Promise.all([
                                        _class_private_field_get(_this, _client).send('Profiler.enable'),
                                        _class_private_field_get(_this, _client).send('Profiler.startPreciseCoverage', {
                                            callCount: _class_private_field_get(_this, _includeRawScriptCoverage),
                                            detailed: useBlockCoverage
                                        }),
                                        _class_private_field_get(_this, _client).send('Debugger.enable'),
                                        _class_private_field_get(_this, _client).send('Debugger.setSkipAllPauses', {
                                            skip: true
                                        })
                                    ])
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "stop",
            value: function stop() {
                var _this = this;
                return _async_to_generator(function() {
                    var _$_class_private_field_get, result, coverage, profileResponse, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry, url, text, flattenRanges, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, func, _flattenRanges, ranges;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(_class_private_field_get(_this, _enabled), 'JSCoverage is not enabled');
                                _class_private_field_set(_this, _enabled, false);
                                return [
                                    4,
                                    Promise.all([
                                        _class_private_field_get(_this, _client).send('Profiler.takePreciseCoverage'),
                                        _class_private_field_get(_this, _client).send('Profiler.stopPreciseCoverage'),
                                        _class_private_field_get(_this, _client).send('Profiler.disable'),
                                        _class_private_field_get(_this, _client).send('Debugger.disable')
                                    ])
                                ];
                            case 1:
                                result = _state.sent();
                                (_$_class_private_field_get = _class_private_field_get(_this, _subscriptions)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.dispose();
                                coverage = [];
                                profileResponse = result[0];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = profileResponse.result[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        entry = _step.value;
                                        url = _class_private_field_get(_this, _scriptURLs).get(entry.scriptId);
                                        if (!url && _class_private_field_get(_this, _reportAnonymousScripts)) {
                                            url = 'debugger://VM' + entry.scriptId;
                                        }
                                        text = _class_private_field_get(_this, _scriptSources).get(entry.scriptId);
                                        if (text === undefined || url === undefined) {
                                            continue;
                                        }
                                        flattenRanges = [];
                                        _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                        try {
                                            for(_iterator1 = entry.functions[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                                func = _step1.value;
                                                ;
                                                (_flattenRanges = flattenRanges).push.apply(_flattenRanges, _to_consumable_array(func.ranges));
                                            }
                                        } catch (err) {
                                            _didIteratorError1 = true;
                                            _iteratorError1 = err;
                                        } finally{
                                            try {
                                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                                    _iterator1.return();
                                                }
                                            } finally{
                                                if (_didIteratorError1) {
                                                    throw _iteratorError1;
                                                }
                                            }
                                        }
                                        ranges = convertToDisjointRanges(flattenRanges);
                                        if (!_class_private_field_get(_this, _includeRawScriptCoverage)) {
                                            coverage.push({
                                                url: url,
                                                ranges: ranges,
                                                text: text
                                            });
                                        } else {
                                            coverage.push({
                                                url: url,
                                                ranges: ranges,
                                                text: text,
                                                rawScriptCoverage: entry
                                            });
                                        }
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
                                    2,
                                    coverage
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return JSCoverage;
}();
function onExecutionContextsCleared() {
    if (!_class_private_field_get(this, _resetOnNavigation)) {
        return;
    }
    _class_private_field_get(this, _scriptURLs).clear();
    _class_private_field_get(this, _scriptSources).clear();
}
function onScriptParsed(event) {
    return _onScriptParsed1.apply(this, arguments);
}
function _onScriptParsed1() {
    _onScriptParsed1 = _async_to_generator(function(event) {
        var response, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Ignore puppeteer-injected scripts
                    if (_common_util_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerURL.isPuppeteerURL(event.url)) {
                        return [
                            2
                        ];
                    }
                    // Ignore other anonymous scripts unless the reportAnonymousScripts option is true.
                    if (!event.url && !_class_private_field_get(this, _reportAnonymousScripts)) {
                        return [
                            2
                        ];
                    }
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
                        _class_private_field_get(this, _client).send('Debugger.getScriptSource', {
                            scriptId: event.scriptId
                        })
                    ];
                case 2:
                    response = _state.sent();
                    _class_private_field_get(this, _scriptURLs).set(event.scriptId, event.url);
                    _class_private_field_get(this, _scriptSources).set(event.scriptId, response.scriptSource);
                    return [
                        3,
                        4
                    ];
                case 3:
                    error = _state.sent();
                    // This might happen if the page has already navigated away.
                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError)(error);
                    return [
                        3,
                        4
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return _onScriptParsed1.apply(this, arguments);
}
var _client1 = /*#__PURE__*/ new WeakMap(), _enabled1 = /*#__PURE__*/ new WeakMap(), _stylesheetURLs = /*#__PURE__*/ new WeakMap(), _stylesheetSources = /*#__PURE__*/ new WeakMap(), _eventListeners = /*#__PURE__*/ new WeakMap(), _resetOnNavigation1 = /*#__PURE__*/ new WeakMap(), _onExecutionContextsCleared1 = /*#__PURE__*/ new WeakSet(), _onStyleSheet = /*#__PURE__*/ new WeakSet();
/**
 * @public
 */ var CSSCoverage = /*#__PURE__*/ function() {
    "use strict";
    function CSSCoverage(client) {
        _class_call_check(this, CSSCoverage);
        _class_private_method_init(this, _onExecutionContextsCleared1);
        _class_private_method_init(this, _onStyleSheet);
        _class_private_field_init(this, _client1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _enabled1, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _stylesheetURLs, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _stylesheetSources, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _eventListeners, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _resetOnNavigation1, {
            writable: true,
            value: false
        });
        _class_private_field_set(this, _client1, client);
    }
    _create_class(CSSCoverage, [
        {
            /**
     * @internal
     */ key: "updateClient",
            value: function updateClient(client) {
                _class_private_field_set(this, _client1, client);
            }
        },
        {
            key: "start",
            value: function start() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _options_resetOnNavigation, resetOnNavigation, clientEmitter;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!_class_private_field_get(_this, _enabled1), 'CSSCoverage is already enabled');
                                _options_resetOnNavigation = options.resetOnNavigation, resetOnNavigation = _options_resetOnNavigation === void 0 ? true : _options_resetOnNavigation;
                                _class_private_field_set(_this, _resetOnNavigation1, resetOnNavigation);
                                _class_private_field_set(_this, _enabled1, true);
                                _class_private_field_get(_this, _stylesheetURLs).clear();
                                _class_private_field_get(_this, _stylesheetSources).clear();
                                _class_private_field_set(_this, _eventListeners, new _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.DisposableStack());
                                clientEmitter = _class_private_field_get(_this, _eventListeners).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(_class_private_field_get(_this, _client1)));
                                clientEmitter.on('CSS.styleSheetAdded', _class_private_method_get(_this, _onStyleSheet, onStyleSheet).bind(_this));
                                clientEmitter.on('Runtime.executionContextsCleared', _class_private_method_get(_this, _onExecutionContextsCleared1, onExecutionContextsCleared1).bind(_this));
                                return [
                                    4,
                                    Promise.all([
                                        _class_private_field_get(_this, _client1).send('DOM.enable'),
                                        _class_private_field_get(_this, _client1).send('CSS.enable'),
                                        _class_private_field_get(_this, _client1).send('CSS.startRuleUsageTracking')
                                    ])
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "stop",
            value: function stop() {
                var _this = this;
                return _async_to_generator(function() {
                    var _$_class_private_field_get, ruleTrackingResponse, styleSheetIdToCoverage, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry, ranges, coverage, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, styleSheetId, url, text, ranges1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(_class_private_field_get(_this, _enabled1), 'CSSCoverage is not enabled');
                                _class_private_field_set(_this, _enabled1, false);
                                return [
                                    4,
                                    _class_private_field_get(_this, _client1).send('CSS.stopRuleUsageTracking')
                                ];
                            case 1:
                                ruleTrackingResponse = _state.sent();
                                return [
                                    4,
                                    Promise.all([
                                        _class_private_field_get(_this, _client1).send('CSS.disable'),
                                        _class_private_field_get(_this, _client1).send('DOM.disable')
                                    ])
                                ];
                            case 2:
                                _state.sent();
                                (_$_class_private_field_get = _class_private_field_get(_this, _eventListeners)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.dispose();
                                // aggregate by styleSheetId
                                styleSheetIdToCoverage = new Map();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = ruleTrackingResponse.ruleUsage[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        entry = _step.value;
                                        ranges = styleSheetIdToCoverage.get(entry.styleSheetId);
                                        if (!ranges) {
                                            ranges = [];
                                            styleSheetIdToCoverage.set(entry.styleSheetId, ranges);
                                        }
                                        ranges.push({
                                            startOffset: entry.startOffset,
                                            endOffset: entry.endOffset,
                                            count: entry.used ? 1 : 0
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
                                coverage = [];
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    for(_iterator1 = _class_private_field_get(_this, _stylesheetURLs).keys()[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        styleSheetId = _step1.value;
                                        url = _class_private_field_get(_this, _stylesheetURLs).get(styleSheetId);
                                        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(typeof url !== 'undefined', "Stylesheet URL is undefined (styleSheetId=".concat(styleSheetId, ")"));
                                        text = _class_private_field_get(_this, _stylesheetSources).get(styleSheetId);
                                        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(typeof text !== 'undefined', "Stylesheet text is undefined (styleSheetId=".concat(styleSheetId, ")"));
                                        ranges1 = convertToDisjointRanges(styleSheetIdToCoverage.get(styleSheetId) || []);
                                        coverage.push({
                                            url: url,
                                            ranges: ranges1,
                                            text: text
                                        });
                                    }
                                } catch (err) {
                                    _didIteratorError1 = true;
                                    _iteratorError1 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                            _iterator1.return();
                                        }
                                    } finally{
                                        if (_didIteratorError1) {
                                            throw _iteratorError1;
                                        }
                                    }
                                }
                                return [
                                    2,
                                    coverage
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return CSSCoverage;
}();
function onExecutionContextsCleared1() {
    if (!_class_private_field_get(this, _resetOnNavigation1)) {
        return;
    }
    _class_private_field_get(this, _stylesheetURLs).clear();
    _class_private_field_get(this, _stylesheetSources).clear();
}
function onStyleSheet(event) {
    return _onStyleSheet1.apply(this, arguments);
}
function _onStyleSheet1() {
    _onStyleSheet1 = _async_to_generator(function(event) {
        var header, response, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    header = event.header;
                    // Ignore anonymous scripts
                    if (!header.sourceURL) {
                        return [
                            2
                        ];
                    }
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
                        _class_private_field_get(this, _client1).send('CSS.getStyleSheetText', {
                            styleSheetId: header.styleSheetId
                        })
                    ];
                case 2:
                    response = _state.sent();
                    _class_private_field_get(this, _stylesheetURLs).set(header.styleSheetId, header.sourceURL);
                    _class_private_field_get(this, _stylesheetSources).set(header.styleSheetId, response.text);
                    return [
                        3,
                        4
                    ];
                case 3:
                    error = _state.sent();
                    // This might happen if the page has already navigated away.
                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError)(error);
                    return [
                        3,
                        4
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return _onStyleSheet1.apply(this, arguments);
}
function convertToDisjointRanges(nestedRanges) {
    var points = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = nestedRanges[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var range = _step.value;
            points.push({
                offset: range.startOffset,
                type: 0,
                range: range
            });
            points.push({
                offset: range.endOffset,
                type: 1,
                range: range
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
    // Sort points to form a valid parenthesis sequence.
    points.sort(function(a, b) {
        // Sort with increasing offsets.
        if (a.offset !== b.offset) {
            return a.offset - b.offset;
        }
        // All "end" points should go before "start" points.
        if (a.type !== b.type) {
            return b.type - a.type;
        }
        var aLength = a.range.endOffset - a.range.startOffset;
        var bLength = b.range.endOffset - b.range.startOffset;
        // For two "start" points, the one with longer range goes first.
        if (a.type === 0) {
            return bLength - aLength;
        }
        // For two "end" points, the one with shorter range goes first.
        return aLength - bLength;
    });
    var hitCountStack = [];
    var results = [];
    var lastOffset = 0;
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        // Run scanning line to intersect all ranges.
        for(var _iterator1 = points[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var point = _step1.value;
            if (hitCountStack.length && lastOffset < point.offset && hitCountStack[hitCountStack.length - 1] > 0) {
                var lastResult = results[results.length - 1];
                if (lastResult && lastResult.end === lastOffset) {
                    lastResult.end = point.offset;
                } else {
                    results.push({
                        start: lastOffset,
                        end: point.offset
                    });
                }
            }
            lastOffset = point.offset;
            if (point.type === 0) {
                hitCountStack.push(point.range.count);
            } else {
                hitCountStack.pop();
            }
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    // Filter out empty ranges.
    return results.filter(function(range) {
        return range.end - range.start > 0;
    });
} //# sourceMappingURL=Coverage.js.map


}),

}]);