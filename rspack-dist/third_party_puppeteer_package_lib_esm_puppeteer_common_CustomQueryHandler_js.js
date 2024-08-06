"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_CustomQueryHandler_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/common/CustomQueryHandler.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CustomQueryHandlerRegistry: function() { return CustomQueryHandlerRegistry; },
  clearCustomQueryHandlers: function() { return clearCustomQueryHandlers; },
  customQueryHandlerNames: function() { return customQueryHandlerNames; },
  customQueryHandlers: function() { return customQueryHandlers; },
  registerCustomQueryHandler: function() { return registerCustomQueryHandler; },
  unregisterCustomQueryHandler: function() { return unregisterCustomQueryHandler; }
});
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_Function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Function.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js");
/* harmony import */var _QueryHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryHandler.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/QueryHandler.js");
/* harmony import */var _ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScriptInjector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/ScriptInjector.js");
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




var _handlers = /*#__PURE__*/ new WeakMap();
/**
 * The registry of {@link CustomQueryHandler | custom query handlers}.
 *
 * @example
 *
 * ```ts
 * Puppeteer.customQueryHandlers.register('lit', { … });
 * const aHandle = await page.$('lit/…');
 * ```
 *
 * @internal
 */ var CustomQueryHandlerRegistry = /*#__PURE__*/ function() {
    "use strict";
    function CustomQueryHandlerRegistry() {
        _class_call_check(this, CustomQueryHandlerRegistry);
        _class_private_field_init(this, _handlers, {
            writable: true,
            value: new Map()
        });
    }
    _create_class(CustomQueryHandlerRegistry, [
        {
            key: "get",
            value: function get(name) {
                var handler = _class_private_field_get(this, _handlers).get(name);
                return handler ? handler[1] : undefined;
            }
        },
        {
            /**
     * Registers a {@link CustomQueryHandler | custom query handler}.
     *
     * @remarks
     * After registration, the handler can be used everywhere where a selector is
     * expected by prepending the selection string with `<name>/`. The name is
     * only allowed to consist of lower- and upper case latin letters.
     *
     * @example
     *
     * ```ts
     * Puppeteer.customQueryHandlers.register('lit', { … });
     * const aHandle = await page.$('lit/…');
     * ```
     *
     * @param name - Name to register under.
     * @param queryHandler - {@link CustomQueryHandler | Custom query handler} to
     * register.
     */ key: "register",
            value: function register(name, handler) {
                var _class;
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!_class_private_field_get(this, _handlers).has(name), "Cannot register over existing handler: ".concat(name));
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(/^[a-zA-Z]+$/.test(name), "Custom query handler names may only contain [a-zA-Z]");
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(handler.queryAll || handler.queryOne, "At least one query method must be implemented.");
                var Handler = (_class = /*#__PURE__*/ function(QueryHandler) {
                    _inherits(_class, QueryHandler);
                    var _super = _create_super(_class);
                    function _class() {
                        _class_call_check(this, _class);
                        return _super.apply(this, arguments);
                    }
                    return _class;
                }(_QueryHandler_js__WEBPACK_IMPORTED_MODULE_2__.QueryHandler), _define_property(_class, "querySelectorAll", (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_1__.interpolateFunction)(function(node, selector, PuppeteerUtil) {
                    return PuppeteerUtil.customQuerySelectors.get(PLACEHOLDER('name')).querySelectorAll(node, selector);
                }, {
                    name: JSON.stringify(name)
                })), _define_property(_class, "querySelector", (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_1__.interpolateFunction)(function(node, selector, PuppeteerUtil) {
                    return PuppeteerUtil.customQuerySelectors.get(PLACEHOLDER('name')).querySelector(node, selector);
                }, {
                    name: JSON.stringify(name)
                })), _class);
                var registerScript = (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_1__.interpolateFunction)(function(PuppeteerUtil) {
                    PuppeteerUtil.customQuerySelectors.register(PLACEHOLDER('name'), {
                        queryAll: PLACEHOLDER('queryAll'),
                        queryOne: PLACEHOLDER('queryOne')
                    });
                }, {
                    name: JSON.stringify(name),
                    queryAll: handler.queryAll ? (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_1__.stringifyFunction)(handler.queryAll) : String(undefined),
                    queryOne: handler.queryOne ? (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_1__.stringifyFunction)(handler.queryOne) : String(undefined)
                }).toString();
                _class_private_field_get(this, _handlers).set(name, [
                    registerScript,
                    Handler
                ]);
                _ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__.scriptInjector.append(registerScript);
            }
        },
        {
            /**
     * Unregisters the {@link CustomQueryHandler | custom query handler} for the
     * given name.
     *
     * @throws `Error` if there is no handler under the given name.
     */ key: "unregister",
            value: function unregister(name) {
                var handler = _class_private_field_get(this, _handlers).get(name);
                if (!handler) {
                    throw new Error("Cannot unregister unknown handler: ".concat(name));
                }
                _ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__.scriptInjector.pop(handler[0]);
                _class_private_field_get(this, _handlers).delete(name);
            }
        },
        {
            /**
     * Gets the names of all {@link CustomQueryHandler | custom query handlers}.
     */ key: "names",
            value: function names() {
                return _to_consumable_array(_class_private_field_get(this, _handlers).keys());
            }
        },
        {
            /**
     * Unregisters all custom query handlers.
     */ key: "clear",
            value: function clear() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _handlers)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 1), registerScript = _step_value[0];
                        _ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__.scriptInjector.pop(registerScript);
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
                _class_private_field_get(this, _handlers).clear();
            }
        }
    ]);
    return CustomQueryHandlerRegistry;
}();
/**
 * @internal
 */ var customQueryHandlers = new CustomQueryHandlerRegistry();
/**
 * @deprecated Import {@link Puppeteer} and use the static method
 * {@link Puppeteer.registerCustomQueryHandler}
 *
 * @public
 */ function registerCustomQueryHandler(name, handler) {
    customQueryHandlers.register(name, handler);
}
/**
 * @deprecated Import {@link Puppeteer} and use the static method
 * {@link Puppeteer.unregisterCustomQueryHandler}
 *
 * @public
 */ function unregisterCustomQueryHandler(name) {
    customQueryHandlers.unregister(name);
}
/**
 * @deprecated Import {@link Puppeteer} and use the static method
 * {@link Puppeteer.customQueryHandlerNames}
 *
 * @public
 */ function customQueryHandlerNames() {
    return customQueryHandlers.names();
}
/**
 * @deprecated Import {@link Puppeteer} and use the static method
 * {@link Puppeteer.clearCustomQueryHandlers}
 *
 * @public
 */ function clearCustomQueryHandlers() {
    customQueryHandlers.clear();
} //# sourceMappingURL=CustomQueryHandler.js.map


}),

}]);