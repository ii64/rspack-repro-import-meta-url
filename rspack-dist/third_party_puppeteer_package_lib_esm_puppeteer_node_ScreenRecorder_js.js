"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_node_ScreenRecorder_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/node/ScreenRecorder.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScreenRecorder: function() { return ScreenRecorder; }
});
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'child_process'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'stream'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'debug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../third_party/rxjs/rxjs.js */ "./third_party/puppeteer/package/lib/esm/third_party/rxjs/rxjs.js");
/* harmony import */var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_decorators_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/decorators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
var __runInitializers = undefined && undefined.__runInitializers || function(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = undefined && undefined.__esDecorate || function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || (typeof result === "undefined" ? "undefined" : _type_of(result)) !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = undefined && undefined.__setFunctionName || function(f, name, prefix) {
    if ((typeof name === "undefined" ? "undefined" : _type_of(name)) === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
};








var CRF_VALUE = 30;
var DEFAULT_FPS = 30;
var debugFfmpeg = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'debug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('puppeteer:ffmpeg');
/**
 * @public
 */ var ScreenRecorder = function() {
    var getFormatArgs = function getFormatArgs(format) {
        switch(format){
            case 'webm':
                return [
                    // Sets the codec to use.
                    [
                        '-c:v',
                        'vp9'
                    ],
                    // Sets the format
                    [
                        '-f',
                        'webm'
                    ],
                    // Sets the quality. Lower the better.
                    [
                        '-crf',
                        "".concat(CRF_VALUE)
                    ],
                    // Sets the quality and how efficient the compression will be.
                    [
                        '-deadline',
                        'realtime',
                        '-cpu-used',
                        '8'
                    ]
                ].flat();
            case 'gif':
                return [
                    // Sets the frame rate and uses a custom palette generated from the
                    // input.
                    [
                        '-vf',
                        'fps=5,split[s0][s1];[s0]palettegen=stats_mode=diff[p];[s1][p]paletteuse'
                    ],
                    // Sets the format
                    [
                        '-f',
                        'gif'
                    ]
                ].flat();
        }
    };
    var get_writeFrame = function get_writeFrame() {
        return _private_writeFrame_descriptor.value;
    };
    var _tmp;
    var _page, _process, _controller, _lastFrame, _getFormatArgs, _writeFrame, _ScreenRecorder;
    var _classSuper = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'stream'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    var _instanceExtraInitializers = [];
    var _private_writeFrame_decorators;
    var _private_writeFrame_descriptor;
    var _stop_decorators;
    return _page = /*#__PURE__*/ new WeakMap(), _process = /*#__PURE__*/ new WeakMap(), _controller = /*#__PURE__*/ new WeakMap(), _lastFrame = /*#__PURE__*/ new WeakMap(), _getFormatArgs = /*#__PURE__*/ new WeakSet(), _writeFrame = /*#__PURE__*/ new WeakMap(), _tmp = (_private_writeFrame_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_4__.guarded)()
    ], _stop_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_4__.guarded)()
    ], _util_disposable_js__WEBPACK_IMPORTED_MODULE_5__.asyncDisposeSymbol), _ScreenRecorder = /*#__PURE__*/ function(_classSuper) {
        "use strict";
        _inherits(ScreenRecorder, _classSuper);
        var _super = _create_super(ScreenRecorder);
        function ScreenRecorder(page, width, height) {
            var _ref = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, speed = _ref.speed, scale = _ref.scale, crop = _ref.crop, format = _ref.format, path = _ref.path;
            _class_call_check(this, ScreenRecorder);
            var _this;
            _this = _super.call(this, {
                allowHalfOpen: false
            });
            _class_private_method_init(_assert_this_initialized(_this), _getFormatArgs);
            _class_private_field_init(_assert_this_initialized(_this), _writeFrame, {
                get: get_writeFrame,
                set: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _page, {
                writable: true,
                value: __runInitializers(_assert_this_initialized(_this), _instanceExtraInitializers)
            });
            _class_private_field_init(_assert_this_initialized(_this), _process, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _controller, {
                writable: true,
                value: new AbortController()
            });
            _class_private_field_init(_assert_this_initialized(_this), _lastFrame, {
                writable: true,
                value: void 0
            });
            path !== null && path !== void 0 ? path : path = 'ffmpeg';
            // Tests if `ffmpeg` exists.
            var error = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'child_process'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(path).error;
            if (error) {
                throw error;
            }
            _class_private_field_set(_assert_this_initialized(_this), _process, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'child_process'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(path, // See https://trac.ffmpeg.org/wiki/Encode/VP9 for more information on flags.
            [
                [
                    '-loglevel',
                    'error'
                ],
                // Reduces general buffering.
                [
                    '-avioflags',
                    'direct'
                ],
                // Reduces initial buffering while analyzing input fps and other stats.
                [
                    '-fpsprobesize',
                    '0',
                    '-probesize',
                    '32',
                    '-analyzeduration',
                    '0',
                    '-fflags',
                    'nobuffer'
                ],
                // Forces input to be read from standard input, and forces png input
                // image format.
                [
                    '-f',
                    'image2pipe',
                    '-c:v',
                    'png',
                    '-i',
                    'pipe:0'
                ],
                // Overwrite output and no audio.
                [
                    '-y',
                    '-an'
                ],
                // This drastically reduces stalling when cpu is overbooked. By default
                // VP9 tries to use all available threads?
                [
                    '-threads',
                    '1'
                ],
                // Specifies the frame rate we are giving ffmpeg.
                [
                    '-framerate',
                    "".concat(DEFAULT_FPS)
                ],
                // Specifies the encoding and format we are using.
                _class_private_method_get(_this, _getFormatArgs, getFormatArgs).call(_this, format !== null && format !== void 0 ? format : 'webm'),
                // Disable bitrate.
                [
                    '-b:v',
                    '0'
                ],
                // Filters to ensure the images are piped correctly.
                [
                    '-vf',
                    "".concat(speed ? "setpts=".concat(1 / speed, "*PTS,") : '', "crop='min(").concat(width, ",iw):min(").concat(height, ",ih):0:0',pad=").concat(width, ":").concat(height, ":0:0").concat(crop ? ",crop=".concat(crop.width, ":").concat(crop.height, ":").concat(crop.x, ":").concat(crop.y) : '').concat(scale ? ",scale=iw*".concat(scale, ":-1") : '')
                ],
                'pipe:1'
            ].flat(), {
                stdio: [
                    'pipe',
                    'pipe',
                    'pipe'
                ]
            }));
            _class_private_field_get(_this, _process).stdout.pipe(_assert_this_initialized(_this));
            _class_private_field_get(_this, _process).stderr.on('data', function(data) {
                debugFfmpeg(data.toString('utf8'));
            });
            _class_private_field_set(_assert_this_initialized(_this), _page, page);
            var client = _class_private_field_get(_this, _page).mainFrame().client;
            client.once(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_2__.CDPSessionEvent.Disconnected, function() {
                void _this.stop().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
            });
            _class_private_field_set(_assert_this_initialized(_this), _lastFrame, (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.lastValueFrom)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.fromEmitterEvent)(client, 'Page.screencastFrame').pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.tap)(function(event) {
                void client.send('Page.screencastFrameAck', {
                    sessionId: event.sessionId
                });
            }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.filter)(function(event) {
                return event.metadata.timestamp !== undefined;
            }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.map)(function(event) {
                return {
                    buffer: Buffer.from(event.data, 'base64'),
                    timestamp: event.metadata.timestamp
                };
            }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.bufferCount)(2, 1), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.concatMap)(function(param) {
                var _param = _sliced_to_array(param, 2), _param_ = _param[0], previousTimestamp = _param_.timestamp, buffer = _param_.buffer, timestamp = _param[1].timestamp;
                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.from)(Array(Math.round(DEFAULT_FPS * Math.max(timestamp - previousTimestamp, 0))).fill(buffer));
            }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.map)(function(buffer) {
                void _class_private_field_get(_this, _writeFrame).call(_assert_this_initialized(_this), buffer);
                return [
                    buffer,
                    performance.now()
                ];
            }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.takeUntil)((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(_class_private_field_get(_this, _controller).signal, 'abort'))), {
                defaultValue: [
                    Buffer.from([]),
                    performance.now()
                ]
            }));
            return _this;
        }
        _create_class(ScreenRecorder, [
            {
                key: "stop",
                value: /**
         * Stops the recorder.
         *
         * @public
         */ function stop() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var _ref, buffer, timestamp;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (_class_private_field_get(_this, _controller).signal.aborted) {
                                        return [
                                            2
                                        ];
                                    }
                                    // Stopping the screencast will flush the frames.
                                    return [
                                        4,
                                        _class_private_field_get(_this, _page)._stopScreencast().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError)
                                    ];
                                case 1:
                                    _state.sent();
                                    _class_private_field_get(_this, _controller).abort();
                                    return [
                                        4,
                                        _class_private_field_get(_this, _lastFrame)
                                    ];
                                case 2:
                                    _ref = _sliced_to_array.apply(void 0, [
                                        _state.sent(),
                                        2
                                    ]), buffer = _ref[0], timestamp = _ref[1];
                                    return [
                                        4,
                                        Promise.all(Array(Math.max(1, Math.round(DEFAULT_FPS * (performance.now() - timestamp) / 1000))).fill(buffer).map(_class_private_field_get(_this, _writeFrame).bind(_this)))
                                    ];
                                case 3:
                                    _state.sent();
                                    // Close stdin to notify FFmpeg we are done.
                                    _class_private_field_get(_this, _process).stdin.end();
                                    return [
                                        4,
                                        new Promise(function(resolve) {
                                            _class_private_field_get(_this, _process).once('close', resolve);
                                        })
                                    ];
                                case 4:
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
                key: _tmp,
                value: /**
         * @internal
         */ function value() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.stop()
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
            }
        ]);
        return ScreenRecorder;
    }(_classSuper), function() {
        var _classSuper_Symbol_metadata;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_classSuper_Symbol_metadata = _classSuper[Symbol.metadata]) !== null && _classSuper_Symbol_metadata !== void 0 ? _classSuper_Symbol_metadata : null) : void 0;
        __esDecorate(_ScreenRecorder, _private_writeFrame_descriptor = {
            value: __setFunctionName(function() {
                var _ref = _async_to_generator(function(buffer) {
                    var _this, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                return [
                                    4,
                                    new Promise(function(resolve) {
                                        _class_private_field_get(_this, _process).stdin.write(buffer, resolve);
                                    })
                                ];
                            case 1:
                                error = _state.sent();
                                if (error) {
                                    console.log("ffmpeg failed to write: ".concat(error.message, "."));
                                }
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(buffer) {
                    return _ref.apply(this, arguments);
                };
            }(), "#writeFrame")
        }, _private_writeFrame_decorators, {
            kind: "method",
            name: "#writeFrame",
            static: false,
            private: true,
            access: {
                has: function(obj) {
                    return _writeFrame.has(obj);
                },
                get: function(obj) {
                    return _class_private_field_get(obj, _writeFrame);
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ScreenRecorder, null, _stop_decorators, {
            kind: "method",
            name: "stop",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "stop" in obj;
                },
                get: function(obj) {
                    return obj.stop;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        if (_metadata) Object.defineProperty(_ScreenRecorder, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _metadata
        });
    }(), _ScreenRecorder;
}();
 //# sourceMappingURL=ScreenRecorder.js.map


}),

}]);