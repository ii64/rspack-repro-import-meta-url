"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_Binding_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Binding.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Binding: function() { return Binding; }
});
/* harmony import */var _api_JSHandle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/JSHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/JSHandle.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
var __addDisposableResource = undefined && undefined.__addDisposableResource || function(env, value, async) {
    if (value !== null && value !== void 0) {
        if ((typeof value === "undefined" ? "undefined" : _type_of(value)) !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
};
var __disposeResources = undefined && undefined.__disposeResources || function(SuppressedError1) {
    return function(env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError1(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while(env.stack.length){
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async) return Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } catch (e) {
                    fail(e);
                }
            }
            if (env.hasError) throw env.error;
        }
        return next();
    };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ 



var _name = /*#__PURE__*/ new WeakMap(), _fn = /*#__PURE__*/ new WeakMap(), _initSource = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var Binding = /*#__PURE__*/ function() {
    "use strict";
    function Binding(name, fn, initSource) {
        _class_call_check(this, Binding);
        _class_private_field_init(this, _name, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _fn, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _initSource, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _name, name);
        _class_private_field_set(this, _fn, fn);
        _class_private_field_set(this, _initSource, initSource);
    }
    _create_class(Binding, [
        {
            key: "name",
            get: function get() {
                return _class_private_field_get(this, _name);
            }
        },
        {
            key: "initSource",
            get: function get() {
                return _class_private_field_get(this, _initSource);
            }
        },
        {
            key: "run",
            value: /**
     * @param context - Context to run the binding in; the context should have
     * the binding added to it beforehand.
     * @param id - ID of the call. This should come from the CDP
     * `onBindingCalled` response.
     * @param args - Plain arguments from CDP.
     */ function run(context, id, args, isTrivial) {
                var _this = this;
                return _async_to_generator(function() {
                    var stack, _$_class_private_field_get, env_1, handles, _tmp, properties, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, index, handle, e_1, _, _tmp1, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, arg, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                stack = new _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.DisposableStack();
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    10,
                                    ,
                                    15
                                ]);
                                if (!!isTrivial) return [
                                    3,
                                    7
                                ];
                                env_1 = {
                                    stack: [],
                                    error: void 0,
                                    hasError: false
                                };
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    5,
                                    6,
                                    7
                                ]);
                                _tmp = [
                                    env_1
                                ];
                                return [
                                    4,
                                    context.evaluateHandle(function(name, seq) {
                                        // @ts-expect-error Code is evaluated in a different context.
                                        return globalThis[name].args.get(seq);
                                    }, _class_private_field_get(_this, _name), id)
                                ];
                            case 3:
                                handles = __addDisposableResource.apply(void 0, _tmp.concat([
                                    _state.sent(),
                                    false
                                ]));
                                return [
                                    4,
                                    handles.getProperties()
                                ];
                            case 4:
                                properties = _state.sent();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = properties[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        _step_value = _sliced_to_array(_step.value, 2), index = _step_value[0], handle = _step_value[1];
                                        // This is not straight-forward since some arguments can stringify, but
                                        // aren't plain objects so add subtypes when the use-case arises.
                                        if (index in args) {
                                            switch(handle.remoteObject().subtype){
                                                case 'node':
                                                    args[+index] = handle;
                                                    break;
                                                default:
                                                    stack.use(handle);
                                            }
                                        } else {
                                            stack.use(handle);
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
                                    3,
                                    7
                                ];
                            case 5:
                                e_1 = _state.sent();
                                env_1.error = e_1;
                                env_1.hasError = true;
                                return [
                                    3,
                                    7
                                ];
                            case 6:
                                __disposeResources(env_1);
                                return [
                                    7
                                ];
                            case 7:
                                _ = context.evaluate;
                                _tmp1 = [
                                    function(name, seq, result) {
                                        // @ts-expect-error Code is evaluated in a different context.
                                        var callbacks = globalThis[name].callbacks;
                                        callbacks.get(seq).resolve(result);
                                        callbacks.delete(seq);
                                    },
                                    _class_private_field_get(_this, _name),
                                    id
                                ];
                                return [
                                    4,
                                    (_$_class_private_field_get = _class_private_field_get(_this, _fn)).call.apply(_$_class_private_field_get, [
                                        _this
                                    ].concat(_to_consumable_array(args)))
                                ];
                            case 8:
                                return [
                                    4,
                                    _.apply(context, _tmp1.concat([
                                        _state.sent()
                                    ]))
                                ];
                            case 9:
                                _state.sent();
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    for(_iterator1 = args[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        arg = _step1.value;
                                        if (_instanceof(arg, _api_JSHandle_js__WEBPACK_IMPORTED_MODULE_0__.JSHandle)) {
                                            stack.use(arg);
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
                                return [
                                    3,
                                    15
                                ];
                            case 10:
                                error = _state.sent();
                                if (!(0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_3__.isErrorLike)(error)) return [
                                    3,
                                    12
                                ];
                                return [
                                    4,
                                    context.evaluate(function(name, seq, message, stack) {
                                        var _$error = new Error(message);
                                        _$error.stack = stack;
                                        // @ts-expect-error Code is evaluated in a different context.
                                        var callbacks = globalThis[name].callbacks;
                                        callbacks.get(seq).reject(_$error);
                                        callbacks.delete(seq);
                                    }, _class_private_field_get(_this, _name), id, error.message, error.stack).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError)
                                ];
                            case 11:
                                _state.sent();
                                return [
                                    3,
                                    14
                                ];
                            case 12:
                                return [
                                    4,
                                    context.evaluate(function(name, seq, error) {
                                        // @ts-expect-error Code is evaluated in a different context.
                                        var callbacks = globalThis[name].callbacks;
                                        callbacks.get(seq).reject(error);
                                        callbacks.delete(seq);
                                    }, _class_private_field_get(_this, _name), id, error).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError)
                                ];
                            case 13:
                                _state.sent();
                                _state.label = 14;
                            case 14:
                                return [
                                    3,
                                    15
                                ];
                            case 15:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return Binding;
} //# sourceMappingURL=Binding.js.map
();


}),

}]);