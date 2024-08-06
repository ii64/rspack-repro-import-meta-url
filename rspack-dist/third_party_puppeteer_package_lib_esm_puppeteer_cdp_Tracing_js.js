"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_Tracing_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Tracing.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Tracing: function() { return Tracing; }
});
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
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




var _client = /*#__PURE__*/ new WeakMap(), _recording = /*#__PURE__*/ new WeakMap(), _path = /*#__PURE__*/ new WeakMap();
/**
 * The Tracing class exposes the tracing audit interface.
 * @remarks
 * You can use `tracing.start` and `tracing.stop` to create a trace file
 * which can be opened in Chrome DevTools or {@link https://chromedevtools.github.io/timeline-viewer/ | timeline viewer}.
 *
 * @example
 *
 * ```ts
 * await page.tracing.start({path: 'trace.json'});
 * await page.goto('https://www.google.com');
 * await page.tracing.stop();
 * ```
 *
 * @public
 */ var Tracing = /*#__PURE__*/ function() {
    "use strict";
    function Tracing(client) {
        _class_call_check(this, Tracing);
        _class_private_field_init(this, _client, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _recording, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _path, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _client, client);
    }
    _create_class(Tracing, [
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
            value: /**
     * Starts a trace for the current page.
     * @remarks
     * Only one trace can be active at a time per browser.
     *
     * @param options - Optional `TracingOptions`.
     */ function start() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var defaultCategories, path, _options_screenshots, screenshots, _options_categories, categories, excludedCategories, includedCategories;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(!_class_private_field_get(_this, _recording), 'Cannot start recording trace while already recording trace.');
                                defaultCategories = [
                                    '-*',
                                    'devtools.timeline',
                                    'v8.execute',
                                    'disabled-by-default-devtools.timeline',
                                    'disabled-by-default-devtools.timeline.frame',
                                    'toplevel',
                                    'blink.console',
                                    'blink.user_timing',
                                    'latencyInfo',
                                    'disabled-by-default-devtools.timeline.stack',
                                    'disabled-by-default-v8.cpu_profiler'
                                ];
                                path = options.path, _options_screenshots = options.screenshots, screenshots = _options_screenshots === void 0 ? false : _options_screenshots, _options_categories = options.categories, categories = _options_categories === void 0 ? defaultCategories : _options_categories;
                                if (screenshots) {
                                    categories.push('disabled-by-default-devtools.screenshot');
                                }
                                excludedCategories = categories.filter(function(cat) {
                                    return cat.startsWith('-');
                                }).map(function(cat) {
                                    return cat.slice(1);
                                });
                                includedCategories = categories.filter(function(cat) {
                                    return !cat.startsWith('-');
                                });
                                _class_private_field_set(_this, _path, path);
                                _class_private_field_set(_this, _recording, true);
                                return [
                                    4,
                                    _class_private_field_get(_this, _client).send('Tracing.start', {
                                        transferMode: 'ReturnAsStream',
                                        traceConfig: {
                                            excludedCategories: excludedCategories,
                                            includedCategories: includedCategories
                                        }
                                    })
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
            value: /**
     * Stops a trace started with the `start` method.
     * @returns Promise which resolves to buffer with trace data.
     */ function stop() {
                var _this = this;
                return _async_to_generator(function() {
                    var contentDeferred;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                contentDeferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred.create();
                                _class_private_field_get(_this, _client).once('Tracing.tracingComplete', function() {
                                    var _ref = _async_to_generator(function(event) {
                                        var readable, buffer, error;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    _state.trys.push([
                                                        0,
                                                        3,
                                                        ,
                                                        4
                                                    ]);
                                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(event.stream, 'Missing "stream"');
                                                    return [
                                                        4,
                                                        (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.getReadableFromProtocolStream)(_class_private_field_get(_this, _client), event.stream)
                                                    ];
                                                case 1:
                                                    readable = _state.sent();
                                                    return [
                                                        4,
                                                        (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.getReadableAsBuffer)(readable, _class_private_field_get(_this, _path))
                                                    ];
                                                case 2:
                                                    buffer = _state.sent();
                                                    contentDeferred.resolve(buffer !== null && buffer !== void 0 ? buffer : undefined);
                                                    return [
                                                        3,
                                                        4
                                                    ];
                                                case 3:
                                                    error = _state.sent();
                                                    if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_3__.isErrorLike)(error)) {
                                                        contentDeferred.reject(error);
                                                    } else {
                                                        contentDeferred.reject(new Error("Unknown error: ".concat(error)));
                                                    }
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
                                    return function(event) {
                                        return _ref.apply(this, arguments);
                                    };
                                }());
                                return [
                                    4,
                                    _class_private_field_get(_this, _client).send('Tracing.end')
                                ];
                            case 1:
                                _state.sent();
                                _class_private_field_set(_this, _recording, false);
                                return [
                                    4,
                                    contentDeferred.valueOrThrow()
                                ];
                            case 2:
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
    return Tracing;
} //# sourceMappingURL=Tracing.js.map
();


}),

}]);