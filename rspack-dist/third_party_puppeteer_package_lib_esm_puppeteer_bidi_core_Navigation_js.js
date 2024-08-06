"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_core_Navigation_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Navigation.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Navigation: function() { return Navigation; }
});
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/decorators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/**
 * @license
 * Copyright 2024 Google Inc.
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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



/**
 * @internal
 */ var Navigation = function() {
    var initialize = function initialize() {
        var _loop = function(_i1, _iter1) {
            var _iter__i = _sliced_to_array(_iter1[_i1], 2), eventName = _iter__i[0], event = _iter__i[1];
            sessionEmitter.on(eventName, function(info) {
                if (info.context !== _class_private_field_get(_this, _browsingContext).id || // Note we don't check if `navigation` is null since `null` means the
                // fragment navigated.
                !_class_private_method_get(_this, _matches, matches).call(_this, info.navigation)) {
                    return;
                }
                _this.emit(event, {
                    url: info.url,
                    timestamp: new Date(info.timestamp)
                });
                _this.dispose();
            });
        };
        var _this = this;
        var browsingContextEmitter = _class_private_field_get(this, _disposables).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(_class_private_field_get(this, _browsingContext)));
        browsingContextEmitter.once('closed', function() {
            _this.emit('failed', {
                url: _class_private_field_get(_this, _browsingContext).url,
                timestamp: new Date()
            });
            _this.dispose();
        });
        browsingContextEmitter.on('request', function(param) {
            var request = param.request;
            if (request.navigation === undefined || // If a request with a navigation ID comes in, then the navigation ID is
            // for this navigation.
            !_class_private_method_get(_this, _matches, matches).call(_this, request.navigation)) {
                return;
            }
            _class_private_field_set(_this, _request, request);
            _this.emit('request', request);
            var requestEmitter = _class_private_field_get(_this, _disposables).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(_class_private_field_get(_this, _request)));
            requestEmitter.on('redirect', function(request) {
                _class_private_field_set(_this, _request, request);
            });
        });
        var sessionEmitter = _class_private_field_get(this, _disposables).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(_class_private_field_get(this, _session)));
        sessionEmitter.on('browsingContext.navigationStarted', function(info) {
            if (info.context !== _class_private_field_get(_this, _browsingContext).id || _class_private_field_get(_this, _navigation) !== undefined) {
                return;
            }
            _class_private_field_set(_this, _navigation, _Navigation.from(_class_private_field_get(_this, _browsingContext)));
        });
        for(var _i = 0, _iter = [
            'browsingContext.domContentLoaded',
            'browsingContext.load'
        ]; _i < _iter.length; _i++){
            var eventName = _iter[_i];
            sessionEmitter.on(eventName, function(info) {
                if (info.context !== _class_private_field_get(_this, _browsingContext).id || info.navigation === null || !_class_private_method_get(_this, _matches, matches).call(_this, info.navigation)) {
                    return;
                }
                _this.dispose();
            });
        }
        for(var _i1 = 0, _iter1 = [
            [
                'browsingContext.fragmentNavigated',
                'fragment'
            ],
            [
                'browsingContext.navigationFailed',
                'failed'
            ],
            [
                'browsingContext.navigationAborted',
                'aborted'
            ]
        ]; _i1 < _iter1.length; _i1++)_loop(_i1, _iter1);
    };
    var matches = function matches(navigation) {
        if (_class_private_field_get(this, _navigation) !== undefined && !_class_private_field_get(this, _navigation).disposed) {
            return false;
        }
        if (_class_private_field_get(this, _id) === undefined) {
            _class_private_field_set(this, _id, navigation);
            return true;
        }
        return _class_private_field_get(this, _id) === navigation;
    };
    var get_session = function get_session() {
        return _class_private_field_get(this, _browsingContext).userContext.browser.session;
    };
    var _tmp;
    var _request, _navigation, _browsingContext, _disposables, _id, _initialize, _matches, _session, _Navigation;
    var _a;
    var _classSuper = _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;
    var _instanceExtraInitializers = [];
    var _dispose_decorators;
    return _request = /*#__PURE__*/ new WeakMap(), _navigation = /*#__PURE__*/ new WeakMap(), _browsingContext = /*#__PURE__*/ new WeakMap(), _disposables = /*#__PURE__*/ new WeakMap(), _id = /*#__PURE__*/ new WeakMap(), _initialize = /*#__PURE__*/ new WeakSet(), _matches = /*#__PURE__*/ new WeakSet(), _session = /*#__PURE__*/ new WeakMap(), _tmp = (_dispose_decorators = [
        _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.inertIfDisposed
    ], _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol), _Navigation = /*#__PURE__*/ function(_classSuper) {
        "use strict";
        _inherits(Navigation, _classSuper);
        var _super = _create_super(Navigation);
        function Navigation(context) {
            _class_call_check(this, Navigation);
            var _this;
            _this = _super.call(this);
            _class_private_method_init(_assert_this_initialized(_this), _initialize);
            _class_private_method_init(_assert_this_initialized(_this), _matches);
            _class_private_field_init(_assert_this_initialized(_this), _session, {
                get: get_session,
                set: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _request, {
                writable: true,
                value: __runInitializers(_assert_this_initialized(_this), _instanceExtraInitializers)
            });
            _class_private_field_init(_assert_this_initialized(_this), _navigation, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _browsingContext, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _disposables, {
                writable: true,
                value: new _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.DisposableStack()
            });
            _class_private_field_init(_assert_this_initialized(_this), _id, {
                writable: true,
                value: void 0
            });
            _class_private_field_set(_assert_this_initialized(_this), _browsingContext, context);
            return _this;
        }
        _create_class(Navigation, [
            {
                key: "disposed",
                get: function get() {
                    return _class_private_field_get(this, _disposables).disposed;
                }
            },
            {
                key: "request",
                get: function get() {
                    return _class_private_field_get(this, _request);
                }
            },
            {
                key: "navigation",
                get: function get() {
                    return _class_private_field_get(this, _navigation);
                }
            },
            {
                key: "dispose",
                value: function dispose() {
                    this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
                }
            },
            {
                key: _tmp,
                value: function value() {
                    _class_private_field_get(this, _disposables).dispose();
                    _get(_get_prototype_of(Navigation.prototype), _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol, this).call(this);
                }
            }
        ], [
            {
                key: "from",
                value: function from(context) {
                    var navigation = new Navigation(context);
                    _class_private_method_get(navigation, _initialize, initialize).call(navigation);
                    return navigation;
                }
            }
        ]);
        return Navigation;
    }(_classSuper), function() {
        var _classSuper_Symbol_metadata;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_classSuper_Symbol_metadata = _classSuper[Symbol.metadata]) !== null && _classSuper_Symbol_metadata !== void 0 ? _classSuper_Symbol_metadata : null) : void 0;
        __esDecorate(_Navigation, null, _dispose_decorators, {
            kind: "method",
            name: "dispose",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "dispose" in obj;
                },
                get: function(obj) {
                    return obj.dispose;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        if (_metadata) Object.defineProperty(_Navigation, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _metadata
        });
    }(), _Navigation;
}();
 //# sourceMappingURL=Navigation.js.map


}),

}]);