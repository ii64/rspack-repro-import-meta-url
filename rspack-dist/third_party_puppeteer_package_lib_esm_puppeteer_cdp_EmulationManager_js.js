"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_EmulationManager_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CDPSession: function() { return CDPSession; },
  CDPSessionEvent: function() { return CDPSessionEvent; }
});
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
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

/**
 * Events that the CDPSession class emits.
 *
 * @public
 */ // eslint-disable-next-line @typescript-eslint/no-namespace
var CDPSessionEvent;
(function(CDPSessionEvent) {
    /** @internal */ CDPSessionEvent.Disconnected = Symbol('CDPSession.Disconnected');
    /** @internal */ CDPSessionEvent.Swapped = Symbol('CDPSession.Swapped');
    /**
     * Emitted when the session is ready to be configured during the auto-attach
     * process. Right after the event is handled, the session will be resumed.
     *
     * @internal
     */ CDPSessionEvent.Ready = Symbol('CDPSession.Ready');
    CDPSessionEvent.SessionAttached = 'sessionattached';
    CDPSessionEvent.SessionDetached = 'sessiondetached';
})(CDPSessionEvent || (CDPSessionEvent = {}));
/**
 * The `CDPSession` instances are used to talk raw Chrome Devtools Protocol.
 *
 * @remarks
 *
 * Protocol methods can be called with {@link CDPSession.send} method and protocol
 * events can be subscribed to with `CDPSession.on` method.
 *
 * Useful links: {@link https://chromedevtools.github.io/devtools-protocol/ | DevTools Protocol Viewer}
 * and {@link https://github.com/aslushnikov/getting-started-with-cdp/blob/HEAD/README.md | Getting Started with DevTools Protocol}.
 *
 * @example
 *
 * ```ts
 * const client = await page.createCDPSession();
 * await client.send('Animation.enable');
 * client.on('Animation.animationCreated', () =>
 *   console.log('Animation created!')
 * );
 * const response = await client.send('Animation.getPlaybackRate');
 * console.log('playback rate is ' + response.playbackRate);
 * await client.send('Animation.setPlaybackRate', {
 *   playbackRate: response.playbackRate / 2,
 * });
 * ```
 *
 * @public
 */ var CDPSession = /*#__PURE__*/ function(EventEmitter) {
    "use strict";
    _inherits(CDPSession, EventEmitter);
    var _super = _create_super(CDPSession);
    function CDPSession() {
        _class_call_check(this, CDPSession);
        return _super.call(this);
    }
    _create_class(CDPSession, [
        {
            /**
     * Parent session in terms of CDP's auto-attach mechanism.
     *
     * @internal
     */ key: "parentSession",
            value: function parentSession() {
                return undefined;
            }
        }
    ]);
    return CDPSession;
} //# sourceMappingURL=CDPSession.js.map
(_common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter);


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/EmulationManager.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EmulatedState: function() { return EmulatedState; },
  EmulationManager: function() { return EmulationManager; }
});
/* harmony import */var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/decorators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
function _array_like_to_array(arr, len) {
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





var _state = /*#__PURE__*/ new WeakMap(), _clientProvider = /*#__PURE__*/ new WeakMap(), _updater = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var EmulatedState = /*#__PURE__*/ function() {
    "use strict";
    function EmulatedState(initialState, clientProvider, updater) {
        _class_call_check(this, EmulatedState);
        _class_private_field_init(this, _state, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _clientProvider, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _updater, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _state, initialState);
        _class_private_field_set(this, _clientProvider, clientProvider);
        _class_private_field_set(this, _updater, updater);
        _class_private_field_get(this, _clientProvider).registerState(this);
    }
    _create_class(EmulatedState, [
        {
            key: "setState",
            value: function setState(state) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state1) {
                        switch(_state1.label){
                            case 0:
                                _class_private_field_set(_this, _state, state);
                                return [
                                    4,
                                    _this.sync()
                                ];
                            case 1:
                                _state1.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "state",
            get: function get() {
                return _class_private_field_get(this, _state);
            }
        },
        {
            key: "sync",
            value: function sync() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state1) {
                        switch(_state1.label){
                            case 0:
                                return [
                                    4,
                                    Promise.all(_class_private_field_get(_this, _clientProvider).clients().map(function(client) {
                                        return _class_private_field_get(_this, _updater).call(_this, client, _class_private_field_get(_this, _state));
                                    }))
                                ];
                            case 1:
                                _state1.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return EmulatedState;
}();
/**
 * @internal
 */ var EmulationManager = function() {
    var get_applyViewport = function get_applyViewport() {
        return _private_applyViewport_descriptor.value;
    };
    var get_emulateIdleState = function get_emulateIdleState() {
        return _private_emulateIdleState_descriptor.value;
    };
    var get_emulateTimezone = function get_emulateTimezone() {
        return _private_emulateTimezone_descriptor.value;
    };
    var get_emulateVisionDeficiency = function get_emulateVisionDeficiency() {
        return _private_emulateVisionDeficiency_descriptor.value;
    };
    var get_emulateCpuThrottling = function get_emulateCpuThrottling() {
        return _private_emulateCpuThrottling_descriptor.value;
    };
    var get_emulateMediaFeatures = function get_emulateMediaFeatures() {
        return _private_emulateMediaFeatures_descriptor.value;
    };
    var get_emulateMediaType = function get_emulateMediaType() {
        return _private_emulateMediaType_descriptor.value;
    };
    var get_setGeolocation = function get_setGeolocation() {
        return _private_setGeolocation_descriptor.value;
    };
    var get_setDefaultBackgroundColor = function get_setDefaultBackgroundColor() {
        return _private_setDefaultBackgroundColor_descriptor.value;
    };
    var get_setJavaScriptEnabled = function get_setJavaScriptEnabled() {
        return _private_setJavaScriptEnabled_descriptor.value;
    };
    var _client, _emulatingMobile, _hasTouch, _states, _viewportState, _idleOverridesState, _timezoneState, _visionDeficiencyState, _cpuThrottlingState, _mediaFeaturesState, _mediaTypeState, _geoLocationState, _defaultBackgroundColorState, _javascriptEnabledState, _secondaryClients, _applyViewport, _emulateIdleState, _emulateTimezone, _emulateVisionDeficiency, _emulateCpuThrottling, _emulateMediaFeatures, _emulateMediaType, _setGeolocation, _setDefaultBackgroundColor, _setJavaScriptEnabled, _EmulationManager;
    var _instanceExtraInitializers = [];
    var _private_applyViewport_decorators;
    var _private_applyViewport_descriptor;
    var _private_emulateIdleState_decorators;
    var _private_emulateIdleState_descriptor;
    var _private_emulateTimezone_decorators;
    var _private_emulateTimezone_descriptor;
    var _private_emulateVisionDeficiency_decorators;
    var _private_emulateVisionDeficiency_descriptor;
    var _private_emulateCpuThrottling_decorators;
    var _private_emulateCpuThrottling_descriptor;
    var _private_emulateMediaFeatures_decorators;
    var _private_emulateMediaFeatures_descriptor;
    var _private_emulateMediaType_decorators;
    var _private_emulateMediaType_descriptor;
    var _private_setGeolocation_decorators;
    var _private_setGeolocation_descriptor;
    var _private_setDefaultBackgroundColor_decorators;
    var _private_setDefaultBackgroundColor_descriptor;
    var _private_setJavaScriptEnabled_decorators;
    var _private_setJavaScriptEnabled_descriptor;
    return _client = /*#__PURE__*/ new WeakMap(), _emulatingMobile = /*#__PURE__*/ new WeakMap(), _hasTouch = /*#__PURE__*/ new WeakMap(), _states = /*#__PURE__*/ new WeakMap(), _viewportState = /*#__PURE__*/ new WeakMap(), _idleOverridesState = /*#__PURE__*/ new WeakMap(), _timezoneState = /*#__PURE__*/ new WeakMap(), _visionDeficiencyState = /*#__PURE__*/ new WeakMap(), _cpuThrottlingState = /*#__PURE__*/ new WeakMap(), _mediaFeaturesState = /*#__PURE__*/ new WeakMap(), _mediaTypeState = /*#__PURE__*/ new WeakMap(), _geoLocationState = /*#__PURE__*/ new WeakMap(), _defaultBackgroundColorState = /*#__PURE__*/ new WeakMap(), _javascriptEnabledState = /*#__PURE__*/ new WeakMap(), _secondaryClients = /*#__PURE__*/ new WeakMap(), _applyViewport = /*#__PURE__*/ new WeakMap(), _emulateIdleState = /*#__PURE__*/ new WeakMap(), _emulateTimezone = /*#__PURE__*/ new WeakMap(), _emulateVisionDeficiency = /*#__PURE__*/ new WeakMap(), _emulateCpuThrottling = /*#__PURE__*/ new WeakMap(), _emulateMediaFeatures = /*#__PURE__*/ new WeakMap(), _emulateMediaType = /*#__PURE__*/ new WeakMap(), _setGeolocation = /*#__PURE__*/ new WeakMap(), _setDefaultBackgroundColor = /*#__PURE__*/ new WeakMap(), _setJavaScriptEnabled = /*#__PURE__*/ new WeakMap(), _EmulationManager = /*#__PURE__*/ function() {
        "use strict";
        function EmulationManager(client) {
            _class_call_check(this, EmulationManager);
            _class_private_field_init(this, _applyViewport, {
                get: get_applyViewport,
                set: void 0
            });
            _class_private_field_init(this, _emulateIdleState, {
                get: get_emulateIdleState,
                set: void 0
            });
            _class_private_field_init(this, _emulateTimezone, {
                get: get_emulateTimezone,
                set: void 0
            });
            _class_private_field_init(this, _emulateVisionDeficiency, {
                get: get_emulateVisionDeficiency,
                set: void 0
            });
            _class_private_field_init(this, _emulateCpuThrottling, {
                get: get_emulateCpuThrottling,
                set: void 0
            });
            _class_private_field_init(this, _emulateMediaFeatures, {
                get: get_emulateMediaFeatures,
                set: void 0
            });
            _class_private_field_init(this, _emulateMediaType, {
                get: get_emulateMediaType,
                set: void 0
            });
            _class_private_field_init(this, _setGeolocation, {
                get: get_setGeolocation,
                set: void 0
            });
            _class_private_field_init(this, _setDefaultBackgroundColor, {
                get: get_setDefaultBackgroundColor,
                set: void 0
            });
            _class_private_field_init(this, _setJavaScriptEnabled, {
                get: get_setJavaScriptEnabled,
                set: void 0
            });
            _class_private_field_init(this, _client, {
                writable: true,
                value: __runInitializers(this, _instanceExtraInitializers)
            });
            _class_private_field_init(this, _emulatingMobile, {
                writable: true,
                value: false
            });
            _class_private_field_init(this, _hasTouch, {
                writable: true,
                value: false
            });
            _class_private_field_init(this, _states, {
                writable: true,
                value: []
            });
            _class_private_field_init(this, _viewportState, {
                writable: true,
                value: new EmulatedState({
                    active: false
                }, this, _class_private_field_get(this, _applyViewport))
            });
            _class_private_field_init(this, _idleOverridesState, {
                writable: true,
                value: new EmulatedState({
                    active: false
                }, this, _class_private_field_get(this, _emulateIdleState))
            });
            _class_private_field_init(this, _timezoneState, {
                writable: true,
                value: new EmulatedState({
                    active: false
                }, this, _class_private_field_get(this, _emulateTimezone))
            });
            _class_private_field_init(this, _visionDeficiencyState, {
                writable: true,
                value: new EmulatedState({
                    active: false
                }, this, _class_private_field_get(this, _emulateVisionDeficiency))
            });
            _class_private_field_init(this, _cpuThrottlingState, {
                writable: true,
                value: new EmulatedState({
                    active: false
                }, this, _class_private_field_get(this, _emulateCpuThrottling))
            });
            _class_private_field_init(this, _mediaFeaturesState, {
                writable: true,
                value: new EmulatedState({
                    active: false
                }, this, _class_private_field_get(this, _emulateMediaFeatures))
            });
            _class_private_field_init(this, _mediaTypeState, {
                writable: true,
                value: new EmulatedState({
                    active: false
                }, this, _class_private_field_get(this, _emulateMediaType))
            });
            _class_private_field_init(this, _geoLocationState, {
                writable: true,
                value: new EmulatedState({
                    active: false
                }, this, _class_private_field_get(this, _setGeolocation))
            });
            _class_private_field_init(this, _defaultBackgroundColorState, {
                writable: true,
                value: new EmulatedState({
                    active: false
                }, this, _class_private_field_get(this, _setDefaultBackgroundColor))
            });
            _class_private_field_init(this, _javascriptEnabledState, {
                writable: true,
                value: new EmulatedState({
                    javaScriptEnabled: true,
                    active: false
                }, this, _class_private_field_get(this, _setJavaScriptEnabled))
            });
            _class_private_field_init(this, _secondaryClients, {
                writable: true,
                value: new Set()
            });
            _class_private_field_set(this, _client, client);
        }
        _create_class(EmulationManager, [
            {
                key: "updateClient",
                value: function updateClient(client) {
                    _class_private_field_set(this, _client, client);
                    _class_private_field_get(this, _secondaryClients).delete(client);
                }
            },
            {
                key: "registerState",
                value: function registerState(state) {
                    _class_private_field_get(this, _states).push(state);
                }
            },
            {
                key: "clients",
                value: function clients() {
                    return [
                        _class_private_field_get(this, _client)
                    ].concat(_to_consumable_array(Array.from(_class_private_field_get(this, _secondaryClients))));
                }
            },
            {
                key: "registerSpeculativeSession",
                value: function registerSpeculativeSession(client) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            _class_private_field_get(_this, _secondaryClients).add(client);
                            client.once(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected, function() {
                                _class_private_field_get(_this, _secondaryClients).delete(client);
                            });
                            // We don't await here because we want to register all state changes before
                            // the target is unpaused.
                            void Promise.all(_class_private_field_get(_this, _states).map(function(s) {
                                return s.sync().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError);
                            }));
                            return [
                                2
                            ];
                        });
                    })();
                }
            },
            {
                key: "javascriptEnabled",
                get: function get() {
                    return _class_private_field_get(this, _javascriptEnabledState).state.javaScriptEnabled;
                }
            },
            {
                key: "emulateViewport",
                value: function emulateViewport(viewport) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var currentState, mobile, hasTouch, reloadNeeded;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    currentState = _class_private_field_get(_this, _viewportState).state;
                                    if (!viewport && !currentState.active) {
                                        return [
                                            2,
                                            false
                                        ];
                                    }
                                    return [
                                        4,
                                        _class_private_field_get(_this, _viewportState).setState(viewport ? {
                                            viewport: viewport,
                                            active: true
                                        } : {
                                            active: false
                                        })
                                    ];
                                case 1:
                                    _state.sent();
                                    mobile = (viewport === null || viewport === void 0 ? void 0 : viewport.isMobile) || false;
                                    hasTouch = (viewport === null || viewport === void 0 ? void 0 : viewport.hasTouch) || false;
                                    reloadNeeded = _class_private_field_get(_this, _emulatingMobile) !== mobile || _class_private_field_get(_this, _hasTouch) !== hasTouch;
                                    _class_private_field_set(_this, _emulatingMobile, mobile);
                                    _class_private_field_set(_this, _hasTouch, hasTouch);
                                    return [
                                        2,
                                        reloadNeeded
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "emulateIdleState",
                value: function emulateIdleState(overrides) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _idleOverridesState).setState({
                                            active: true,
                                            overrides: overrides
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
                key: "emulateTimezone",
                value: function emulateTimezone(timezoneId) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _timezoneState).setState({
                                            timezoneId: timezoneId,
                                            active: true
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
                key: "emulateVisionDeficiency",
                value: function emulateVisionDeficiency(type) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var visionDeficiencies;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    visionDeficiencies = new Set([
                                        'none',
                                        'achromatopsia',
                                        'blurredVision',
                                        'deuteranopia',
                                        'protanopia',
                                        'tritanopia'
                                    ]);
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!type || visionDeficiencies.has(type), "Unsupported vision deficiency: ".concat(type));
                                    return [
                                        4,
                                        _class_private_field_get(_this, _visionDeficiencyState).setState({
                                            active: true,
                                            visionDeficiency: type
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
                key: "emulateCPUThrottling",
                value: function emulateCPUThrottling(factor) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(factor === null || factor >= 1, 'Throttling rate should be greater or equal to 1');
                                    return [
                                        4,
                                        _class_private_field_get(_this, _cpuThrottlingState).setState({
                                            active: true,
                                            factor: factor !== null && factor !== void 0 ? factor : undefined
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
                key: "emulateMediaFeatures",
                value: function emulateMediaFeatures(features) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, mediaFeature, name;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (Array.isArray(features)) {
                                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                        try {
                                            for(_iterator = features[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                                mediaFeature = _step.value;
                                                name = mediaFeature.name;
                                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(/^(?:prefers-(?:color-scheme|reduced-motion)|color-gamut)$/.test(name), 'Unsupported media feature: ' + name);
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
                                    }
                                    return [
                                        4,
                                        _class_private_field_get(_this, _mediaFeaturesState).setState({
                                            active: true,
                                            mediaFeatures: features
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
                key: "emulateMediaType",
                value: function emulateMediaType(type) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(type === 'screen' || type === 'print' || (type !== null && type !== void 0 ? type : undefined) === undefined, 'Unsupported media type: ' + type);
                                    return [
                                        4,
                                        _class_private_field_get(_this, _mediaTypeState).setState({
                                            type: type,
                                            active: true
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
                key: "setGeolocation",
                value: function setGeolocation(options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var longitude, latitude, _options_accuracy, accuracy;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    longitude = options.longitude, latitude = options.latitude, _options_accuracy = options.accuracy, accuracy = _options_accuracy === void 0 ? 0 : _options_accuracy;
                                    if (longitude < -180 || longitude > 180) {
                                        throw new Error('Invalid longitude "'.concat(longitude, '": precondition -180 <= LONGITUDE <= 180 failed.'));
                                    }
                                    if (latitude < -90 || latitude > 90) {
                                        throw new Error('Invalid latitude "'.concat(latitude, '": precondition -90 <= LATITUDE <= 90 failed.'));
                                    }
                                    if (accuracy < 0) {
                                        throw new Error('Invalid accuracy "'.concat(accuracy, '": precondition 0 <= ACCURACY failed.'));
                                    }
                                    return [
                                        4,
                                        _class_private_field_get(_this, _geoLocationState).setState({
                                            active: true,
                                            geoLocation: {
                                                longitude: longitude,
                                                latitude: latitude,
                                                accuracy: accuracy
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
                key: "resetDefaultBackgroundColor",
                value: /**
         * Resets default white background
         */ function resetDefaultBackgroundColor() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _defaultBackgroundColorState).setState({
                                            active: true,
                                            color: undefined
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
                key: "setTransparentBackgroundColor",
                value: /**
         * Hides default white background
         */ function setTransparentBackgroundColor() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _defaultBackgroundColorState).setState({
                                            active: true,
                                            color: {
                                                r: 0,
                                                g: 0,
                                                b: 0,
                                                a: 0
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
                key: "setJavaScriptEnabled",
                value: function setJavaScriptEnabled(enabled) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _javascriptEnabledState).setState({
                                            active: true,
                                            javaScriptEnabled: enabled
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
            }
        ]);
        return EmulationManager;
    }(), function() {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _private_applyViewport_decorators = [
            _util_decorators_js__WEBPACK_IMPORTED_MODULE_3__.invokeAtMostOnceForArguments
        ];
        _private_emulateIdleState_decorators = [
            _util_decorators_js__WEBPACK_IMPORTED_MODULE_3__.invokeAtMostOnceForArguments
        ];
        _private_emulateTimezone_decorators = [
            _util_decorators_js__WEBPACK_IMPORTED_MODULE_3__.invokeAtMostOnceForArguments
        ];
        _private_emulateVisionDeficiency_decorators = [
            _util_decorators_js__WEBPACK_IMPORTED_MODULE_3__.invokeAtMostOnceForArguments
        ];
        _private_emulateCpuThrottling_decorators = [
            _util_decorators_js__WEBPACK_IMPORTED_MODULE_3__.invokeAtMostOnceForArguments
        ];
        _private_emulateMediaFeatures_decorators = [
            _util_decorators_js__WEBPACK_IMPORTED_MODULE_3__.invokeAtMostOnceForArguments
        ];
        _private_emulateMediaType_decorators = [
            _util_decorators_js__WEBPACK_IMPORTED_MODULE_3__.invokeAtMostOnceForArguments
        ];
        _private_setGeolocation_decorators = [
            _util_decorators_js__WEBPACK_IMPORTED_MODULE_3__.invokeAtMostOnceForArguments
        ];
        _private_setDefaultBackgroundColor_decorators = [
            _util_decorators_js__WEBPACK_IMPORTED_MODULE_3__.invokeAtMostOnceForArguments
        ];
        _private_setJavaScriptEnabled_decorators = [
            _util_decorators_js__WEBPACK_IMPORTED_MODULE_3__.invokeAtMostOnceForArguments
        ];
        __esDecorate(_EmulationManager, _private_applyViewport_descriptor = {
            value: __setFunctionName(function() {
                var _ref = _async_to_generator(function(client, viewportState) {
                    var viewport, mobile, width, height, _viewport_deviceScaleFactor, deviceScaleFactor, screenOrientation, hasTouch;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!!viewportState.viewport) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    Promise.all([
                                        client.send('Emulation.clearDeviceMetricsOverride'),
                                        client.send('Emulation.setTouchEmulationEnabled', {
                                            enabled: false
                                        })
                                    ]).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                            case 2:
                                viewport = viewportState.viewport;
                                mobile = viewport.isMobile || false;
                                width = viewport.width;
                                height = viewport.height;
                                deviceScaleFactor = (_viewport_deviceScaleFactor = viewport.deviceScaleFactor) !== null && _viewport_deviceScaleFactor !== void 0 ? _viewport_deviceScaleFactor : 1;
                                screenOrientation = viewport.isLandscape ? {
                                    angle: 90,
                                    type: 'landscapePrimary'
                                } : {
                                    angle: 0,
                                    type: 'portraitPrimary'
                                };
                                hasTouch = viewport.hasTouch || false;
                                return [
                                    4,
                                    Promise.all([
                                        client.send('Emulation.setDeviceMetricsOverride', {
                                            mobile: mobile,
                                            width: width,
                                            height: height,
                                            deviceScaleFactor: deviceScaleFactor,
                                            screenOrientation: screenOrientation
                                        }).catch(function(err) {
                                            if (err.message.includes('Target does not support metrics override')) {
                                                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError)(err);
                                                return;
                                            }
                                            throw err;
                                        }),
                                        client.send('Emulation.setTouchEmulationEnabled', {
                                            enabled: hasTouch
                                        })
                                    ])
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(client, viewportState) {
                    return _ref.apply(this, arguments);
                };
            }(), "#applyViewport")
        }, _private_applyViewport_decorators, {
            kind: "method",
            name: "#applyViewport",
            static: false,
            private: true,
            access: {
                has: function(obj) {
                    return _applyViewport.has(obj);
                },
                get: function(obj) {
                    return _class_private_field_get(obj, _applyViewport);
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_EmulationManager, _private_emulateIdleState_descriptor = {
            value: __setFunctionName(function() {
                var _ref = _async_to_generator(function(client, idleStateState) {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!idleStateState.active) {
                                    return [
                                        2
                                    ];
                                }
                                if (!idleStateState.overrides) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    client.send('Emulation.setIdleOverride', {
                                        isUserActive: idleStateState.overrides.isUserActive,
                                        isScreenUnlocked: idleStateState.overrides.isScreenUnlocked
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 2:
                                return [
                                    4,
                                    client.send('Emulation.clearIdleOverride')
                                ];
                            case 3:
                                _state.sent();
                                _state.label = 4;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(client, idleStateState) {
                    return _ref.apply(this, arguments);
                };
            }(), "#emulateIdleState")
        }, _private_emulateIdleState_decorators, {
            kind: "method",
            name: "#emulateIdleState",
            static: false,
            private: true,
            access: {
                has: function(obj) {
                    return _emulateIdleState.has(obj);
                },
                get: function(obj) {
                    return _class_private_field_get(obj, _emulateIdleState);
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_EmulationManager, _private_emulateTimezone_descriptor = {
            value: __setFunctionName(function() {
                var _ref = _async_to_generator(function(client, timezoneState) {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!timezoneState.active) {
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
                                    client.send('Emulation.setTimezoneOverride', {
                                        timezoneId: timezoneState.timezoneId || ''
                                    })
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                error = _state.sent();
                                if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_4__.isErrorLike)(error) && error.message.includes('Invalid timezone')) {
                                    throw new Error("Invalid timezone ID: ".concat(timezoneState.timezoneId));
                                }
                                throw error;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(client, timezoneState) {
                    return _ref.apply(this, arguments);
                };
            }(), "#emulateTimezone")
        }, _private_emulateTimezone_decorators, {
            kind: "method",
            name: "#emulateTimezone",
            static: false,
            private: true,
            access: {
                has: function(obj) {
                    return _emulateTimezone.has(obj);
                },
                get: function(obj) {
                    return _class_private_field_get(obj, _emulateTimezone);
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_EmulationManager, _private_emulateVisionDeficiency_descriptor = {
            value: __setFunctionName(function() {
                var _ref = _async_to_generator(function(client, visionDeficiency) {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!visionDeficiency.active) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    client.send('Emulation.setEmulatedVisionDeficiency', {
                                        type: visionDeficiency.visionDeficiency || 'none'
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
                return function(client, visionDeficiency) {
                    return _ref.apply(this, arguments);
                };
            }(), "#emulateVisionDeficiency")
        }, _private_emulateVisionDeficiency_decorators, {
            kind: "method",
            name: "#emulateVisionDeficiency",
            static: false,
            private: true,
            access: {
                has: function(obj) {
                    return _emulateVisionDeficiency.has(obj);
                },
                get: function(obj) {
                    return _class_private_field_get(obj, _emulateVisionDeficiency);
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_EmulationManager, _private_emulateCpuThrottling_descriptor = {
            value: __setFunctionName(function() {
                var _ref = _async_to_generator(function(client, state) {
                    var _state_factor;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!state.active) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    client.send('Emulation.setCPUThrottlingRate', {
                                        rate: (_state_factor = state.factor) !== null && _state_factor !== void 0 ? _state_factor : 1
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
                return function(client, state) {
                    return _ref.apply(this, arguments);
                };
            }(), "#emulateCpuThrottling")
        }, _private_emulateCpuThrottling_decorators, {
            kind: "method",
            name: "#emulateCpuThrottling",
            static: false,
            private: true,
            access: {
                has: function(obj) {
                    return _emulateCpuThrottling.has(obj);
                },
                get: function(obj) {
                    return _class_private_field_get(obj, _emulateCpuThrottling);
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_EmulationManager, _private_emulateMediaFeatures_descriptor = {
            value: __setFunctionName(function() {
                var _ref = _async_to_generator(function(client, state) {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!state.active) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    client.send('Emulation.setEmulatedMedia', {
                                        features: state.mediaFeatures
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
                return function(client, state) {
                    return _ref.apply(this, arguments);
                };
            }(), "#emulateMediaFeatures")
        }, _private_emulateMediaFeatures_decorators, {
            kind: "method",
            name: "#emulateMediaFeatures",
            static: false,
            private: true,
            access: {
                has: function(obj) {
                    return _emulateMediaFeatures.has(obj);
                },
                get: function(obj) {
                    return _class_private_field_get(obj, _emulateMediaFeatures);
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_EmulationManager, _private_emulateMediaType_descriptor = {
            value: __setFunctionName(function() {
                var _ref = _async_to_generator(function(client, state) {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!state.active) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    client.send('Emulation.setEmulatedMedia', {
                                        media: state.type || ''
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
                return function(client, state) {
                    return _ref.apply(this, arguments);
                };
            }(), "#emulateMediaType")
        }, _private_emulateMediaType_decorators, {
            kind: "method",
            name: "#emulateMediaType",
            static: false,
            private: true,
            access: {
                has: function(obj) {
                    return _emulateMediaType.has(obj);
                },
                get: function(obj) {
                    return _class_private_field_get(obj, _emulateMediaType);
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_EmulationManager, _private_setGeolocation_descriptor = {
            value: __setFunctionName(function() {
                var _ref = _async_to_generator(function(client, state) {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!state.active) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    client.send('Emulation.setGeolocationOverride', state.geoLocation ? {
                                        longitude: state.geoLocation.longitude,
                                        latitude: state.geoLocation.latitude,
                                        accuracy: state.geoLocation.accuracy
                                    } : undefined)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(client, state) {
                    return _ref.apply(this, arguments);
                };
            }(), "#setGeolocation")
        }, _private_setGeolocation_decorators, {
            kind: "method",
            name: "#setGeolocation",
            static: false,
            private: true,
            access: {
                has: function(obj) {
                    return _setGeolocation.has(obj);
                },
                get: function(obj) {
                    return _class_private_field_get(obj, _setGeolocation);
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_EmulationManager, _private_setDefaultBackgroundColor_descriptor = {
            value: __setFunctionName(function() {
                var _ref = _async_to_generator(function(client, state) {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!state.active) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    client.send('Emulation.setDefaultBackgroundColorOverride', {
                                        color: state.color
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
                return function(client, state) {
                    return _ref.apply(this, arguments);
                };
            }(), "#setDefaultBackgroundColor")
        }, _private_setDefaultBackgroundColor_decorators, {
            kind: "method",
            name: "#setDefaultBackgroundColor",
            static: false,
            private: true,
            access: {
                has: function(obj) {
                    return _setDefaultBackgroundColor.has(obj);
                },
                get: function(obj) {
                    return _class_private_field_get(obj, _setDefaultBackgroundColor);
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_EmulationManager, _private_setJavaScriptEnabled_descriptor = {
            value: __setFunctionName(function() {
                var _ref = _async_to_generator(function(client, state) {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!state.active) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    client.send('Emulation.setScriptExecutionDisabled', {
                                        value: !state.javaScriptEnabled
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
                return function(client, state) {
                    return _ref.apply(this, arguments);
                };
            }(), "#setJavaScriptEnabled")
        }, _private_setJavaScriptEnabled_decorators, {
            kind: "method",
            name: "#setJavaScriptEnabled",
            static: false,
            private: true,
            access: {
                has: function(obj) {
                    return _setJavaScriptEnabled.has(obj);
                },
                get: function(obj) {
                    return _class_private_field_get(obj, _setJavaScriptEnabled);
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        if (_metadata) Object.defineProperty(_EmulationManager, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _metadata
        });
    }(), _EmulationManager;
}();
 //# sourceMappingURL=EmulationManager.js.map


}),

}]);