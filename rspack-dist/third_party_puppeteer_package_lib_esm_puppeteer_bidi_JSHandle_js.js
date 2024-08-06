"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_JSHandle_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Deserializer.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BidiDeserializer: function() { return BidiDeserializer; }
});
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
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
function _class_static_private_method_get(receiver, classConstructor, method) {
    _class_check_private_static_access(receiver, classConstructor);
    return method;
}
function _class_check_private_static_access(receiver, classConstructor) {
    if (receiver !== classConstructor) {
        throw new TypeError("Private static access of wrong provenance");
    }
}

/**
 * @internal
 */ var BidiDeserializer = /*#__PURE__*/ function() {
    "use strict";
    function BidiDeserializer() {
        _class_call_check(this, BidiDeserializer);
    }
    _create_class(BidiDeserializer, null, [
        {
            key: "deserialize",
            value: function deserialize(result) {
                var _this = this;
                if (!result) {
                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.debugError)('Service did not produce a result.');
                    return undefined;
                }
                switch(result.type){
                    case 'array':
                        var _result_value;
                        return (_result_value = result.value) === null || _result_value === void 0 ? void 0 : _result_value.map(function(value) {
                            return _this.deserialize(value);
                        });
                    case 'set':
                        var _result_value1;
                        return (_result_value1 = result.value) === null || _result_value1 === void 0 ? void 0 : _result_value1.reduce(function(acc, value) {
                            return acc.add(_this.deserialize(value));
                        }, new Set());
                    case 'object':
                        var _result_value2;
                        return (_result_value2 = result.value) === null || _result_value2 === void 0 ? void 0 : _result_value2.reduce(function(acc, tuple) {
                            var _class_static_private_method_get_call = _class_static_private_method_get(_this, BidiDeserializer, deserializeTuple).call(BidiDeserializer, tuple), key = _class_static_private_method_get_call.key, value = _class_static_private_method_get_call.value;
                            acc[key] = value;
                            return acc;
                        }, {});
                    case 'map':
                        var _result_value3;
                        return (_result_value3 = result.value) === null || _result_value3 === void 0 ? void 0 : _result_value3.reduce(function(acc, tuple) {
                            var _class_static_private_method_get_call = _class_static_private_method_get(_this, BidiDeserializer, deserializeTuple).call(BidiDeserializer, tuple), key = _class_static_private_method_get_call.key, value = _class_static_private_method_get_call.value;
                            return acc.set(key, value);
                        }, new Map());
                    case 'promise':
                        return {};
                    case 'regexp':
                        return new RegExp(result.value.pattern, result.value.flags);
                    case 'date':
                        return new Date(result.value);
                    case 'undefined':
                        return undefined;
                    case 'null':
                        return null;
                    case 'number':
                        return _class_static_private_method_get(this, BidiDeserializer, deserializeNumber).call(BidiDeserializer, result.value);
                    case 'bigint':
                        return BigInt(result.value);
                    case 'boolean':
                        return Boolean(result.value);
                    case 'string':
                        return result.value;
                }
                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.debugError)("Deserialization of type ".concat(result.type, " not supported."));
                return undefined;
            }
        }
    ]);
    return BidiDeserializer;
} //# sourceMappingURL=Deserializer.js.map
();
function deserializeNumber(value) {
    switch(value){
        case '-0':
            return -0;
        case 'NaN':
            return NaN;
        case 'Infinity':
            return Infinity;
        case '-Infinity':
            return -Infinity;
        default:
            return value;
    }
}
function deserializeTuple(param) {
    var _param = _sliced_to_array(param, 2), serializedKey = _param[0], serializedValue = _param[1];
    var key = typeof serializedKey === 'string' ? serializedKey : this.deserialize(serializedKey);
    var value = this.deserialize(serializedValue);
    return {
        key: key,
        value: value
    };
}


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/JSHandle.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BidiJSHandle: function() { return BidiJSHandle; }
});
/* harmony import */var _api_JSHandle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/JSHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/JSHandle.js");
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _Deserializer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Deserializer.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Deserializer.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _assert_this_initialized(self) {
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



var _remoteValue = /*#__PURE__*/ new WeakMap(), _disposed = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var BidiJSHandle = /*#__PURE__*/ function(JSHandle) {
    "use strict";
    _inherits(BidiJSHandle, JSHandle);
    var _super = _create_super(BidiJSHandle);
    function BidiJSHandle(value, realm) {
        _class_call_check(this, BidiJSHandle);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _remoteValue, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "realm", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _disposed, {
            writable: true,
            value: false
        });
        _class_private_field_set(_assert_this_initialized(_this), _remoteValue, value);
        _this.realm = realm;
        return _this;
    }
    _create_class(BidiJSHandle, [
        {
            key: "disposed",
            get: function get() {
                return _class_private_field_get(this, _disposed);
            }
        },
        {
            key: "jsonValue",
            value: function jsonValue() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.evaluate(function(value) {
                                        return value;
                                    })
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
            key: "asElement",
            value: function asElement() {
                return null;
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_class_private_field_get(_this, _disposed)) {
                                    return [
                                        2
                                    ];
                                }
                                _class_private_field_set(_this, _disposed, true);
                                return [
                                    4,
                                    _this.realm.destroyHandles([
                                        _this
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
            key: "isPrimitiveValue",
            get: function get() {
                switch(_class_private_field_get(this, _remoteValue).type){
                    case 'string':
                    case 'number':
                    case 'bigint':
                    case 'boolean':
                    case 'undefined':
                    case 'null':
                        return true;
                    default:
                        return false;
                }
            }
        },
        {
            key: "toString",
            value: function toString() {
                if (this.isPrimitiveValue) {
                    return 'JSHandle:' + _Deserializer_js__WEBPACK_IMPORTED_MODULE_2__.BidiDeserializer.deserialize(_class_private_field_get(this, _remoteValue));
                }
                return 'JSHandle@' + _class_private_field_get(this, _remoteValue).type;
            }
        },
        {
            key: "id",
            get: function get() {
                return 'handle' in _class_private_field_get(this, _remoteValue) ? _class_private_field_get(this, _remoteValue).handle : undefined;
            }
        },
        {
            key: "remoteValue",
            value: function remoteValue() {
                return _class_private_field_get(this, _remoteValue);
            }
        },
        {
            key: "remoteObject",
            value: function remoteObject() {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation('Not available in WebDriver BiDi');
            }
        }
    ], [
        {
            key: "from",
            value: function from(value, realm) {
                return new BidiJSHandle(value, realm);
            }
        }
    ]);
    return BidiJSHandle;
} //# sourceMappingURL=JSHandle.js.map
(_api_JSHandle_js__WEBPACK_IMPORTED_MODULE_0__.JSHandle);


}),

}]);