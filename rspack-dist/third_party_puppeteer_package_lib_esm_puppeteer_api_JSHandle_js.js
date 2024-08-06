"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_api_JSHandle_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/api/JSHandle.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  JSHandle: function() { return JSHandle; }
});
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/decorators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
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
 * Represents a reference to a JavaScript object. Instances can be created using
 * {@link Page.evaluateHandle}.
 *
 * Handles prevent the referenced JavaScript object from being garbage-collected
 * unless the handle is purposely {@link JSHandle.dispose | disposed}. JSHandles
 * are auto-disposed when their associated frame is navigated away or the parent
 * context gets destroyed.
 *
 * Handles can be used as arguments for any evaluation function such as
 * {@link Page.$eval}, {@link Page.evaluate}, and {@link Page.evaluateHandle}.
 * They are resolved to their referenced object.
 *
 * @example
 *
 * ```ts
 * const windowHandle = await page.evaluateHandle(() => window);
 * ```
 *
 * @public
 */ var JSHandle = function() {
    var _tmp, _asyncDisposeSymbol;
    var _class;
    var _classDecorators = [
        _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.moveable
    ];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getProperty_decorators;
    var _getProperties_decorators;
    var JSHandle = (_tmp = (_getProperty_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)()
    ], _getProperties_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)()
    ], _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol), _asyncDisposeSymbol = _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.asyncDisposeSymbol, _class = /*#__PURE__*/ function() {
        "use strict";
        function _class() {
            _class_call_check(this, _class);
            __runInitializers(this, _instanceExtraInitializers);
        }
        _create_class(_class, [
            {
                key: "evaluate",
                value: /**
         * Evaluates the given function with the current handle as its first argument.
         */ function evaluate(pageFunction) {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var _this_realm;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.withSourcePuppeteerURLIfNone)(_this.evaluate.name, pageFunction);
                                    return [
                                        4,
                                        (_this_realm = _this.realm).evaluate.apply(_this_realm, [
                                            pageFunction,
                                            _this
                                        ].concat(_to_consumable_array(args)))
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
                key: "evaluateHandle",
                value: /**
         * Evaluates the given function with the current handle as its first argument.
         *
         */ function evaluateHandle(pageFunction) {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var _this_realm;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.withSourcePuppeteerURLIfNone)(_this.evaluateHandle.name, pageFunction);
                                    return [
                                        4,
                                        (_this_realm = _this.realm).evaluateHandle.apply(_this_realm, [
                                            pageFunction,
                                            _this
                                        ].concat(_to_consumable_array(args)))
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
                key: "getProperty",
                value: /**
         * @internal
         */ function getProperty(propertyName) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.evaluateHandle(function(object, propertyName) {
                                            return object[propertyName];
                                        }, propertyName)
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
                key: "getProperties",
                value: /**
         * Gets a map of handles representing the properties of the current handle.
         *
         * @example
         *
         * ```ts
         * const listHandle = await page.evaluateHandle(() => document.body.children);
         * const properties = await listHandle.getProperties();
         * const children = [];
         * for (const property of properties.values()) {
         *   const element = property.asElement();
         *   if (element) {
         *     children.push(element);
         *   }
         * }
         * children; // holds elementHandles to all children of document.body
         * ```
         */ function getProperties() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var propertyNames, map, results, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, key, value, env_1, handle;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.evaluate(function(object) {
                                            var enumerableProperties = [];
                                            var descriptors = Object.getOwnPropertyDescriptors(object);
                                            for(var propertyName in descriptors){
                                                var _descriptors_propertyName;
                                                if ((_descriptors_propertyName = descriptors[propertyName]) === null || _descriptors_propertyName === void 0 ? void 0 : _descriptors_propertyName.enumerable) {
                                                    enumerableProperties.push(propertyName);
                                                }
                                            }
                                            return enumerableProperties;
                                        })
                                    ];
                                case 1:
                                    propertyNames = _state.sent();
                                    map = new Map();
                                    return [
                                        4,
                                        Promise.all(propertyNames.map(function(key) {
                                            return _this.getProperty(key);
                                        }))
                                    ];
                                case 2:
                                    results = _state.sent();
                                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    try {
                                        for(_iterator = Object.entries(propertyNames)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                            _step_value = _sliced_to_array(_step.value, 2), key = _step_value[0], value = _step_value[1];
                                            env_1 = {
                                                stack: [],
                                                error: void 0,
                                                hasError: false
                                            };
                                            try {
                                                handle = __addDisposableResource(env_1, results[key], false);
                                                if (handle) {
                                                    map.set(value, handle.move());
                                                }
                                            } catch (e_1) {
                                                env_1.error = e_1;
                                                env_1.hasError = true;
                                            } finally{
                                                __disposeResources(env_1);
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
                                        map
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                /** @internal */ key: _tmp,
                value: function value() {
                    return void this.dispose().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_0__.debugError);
                }
            },
            {
                /** @internal */ key: _asyncDisposeSymbol,
                value: function value() {
                    return this.dispose();
                }
            }
        ]);
        return _class;
    }(), _classThis = _class, function() {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(_class, null, _getProperty_decorators, {
            kind: "method",
            name: "getProperty",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "getProperty" in obj;
                },
                get: function(obj) {
                    return obj.getProperty;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_class, null, _getProperties_decorators, {
            kind: "method",
            name: "getProperties",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "getProperties" in obj;
                },
                get: function(obj) {
                    return obj.getProperties;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = {
            value: _classThis
        }, _classDecorators, {
            kind: "class",
            name: _classThis.name,
            metadata: _metadata
        }, null, _classExtraInitializers);
        JSHandle = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _metadata
        });
        __runInitializers(_classThis, _classExtraInitializers);
    }(), _class);
    return JSHandle = _classThis;
}();
 //# sourceMappingURL=JSHandle.js.map


}),

}]);