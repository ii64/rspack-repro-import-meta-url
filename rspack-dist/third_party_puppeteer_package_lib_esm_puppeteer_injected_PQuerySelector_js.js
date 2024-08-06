"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_injected_PQuerySelector_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/injected/CustomQuerySelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  customQuerySelectors: function() { return customQuerySelectors; }
});
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * This class mimics the injected {@link CustomQuerySelectorRegistry}.
 */ function _check_private_redeclaration(obj, privateCollection) {
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
var _selectors = /*#__PURE__*/ new WeakMap();
var CustomQuerySelectorRegistry = /*#__PURE__*/ function() {
    "use strict";
    function CustomQuerySelectorRegistry() {
        _class_call_check(this, CustomQuerySelectorRegistry);
        _class_private_field_init(this, _selectors, {
            writable: true,
            value: new Map()
        });
    }
    _create_class(CustomQuerySelectorRegistry, [
        {
            key: "register",
            value: function register(name, handler) {
                if (!handler.queryOne && handler.queryAll) {
                    var querySelectorAll = handler.queryAll;
                    handler.queryOne = function(node, selector) {
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = querySelectorAll(node, selector)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var result = _step.value;
                                return result;
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
                        return null;
                    };
                } else if (handler.queryOne && !handler.queryAll) {
                    var querySelector = handler.queryOne;
                    handler.queryAll = function(node, selector) {
                        var result = querySelector(node, selector);
                        return result ? [
                            result
                        ] : [];
                    };
                } else if (!handler.queryOne || !handler.queryAll) {
                    throw new Error('At least one query method must be defined.');
                }
                _class_private_field_get(this, _selectors).set(name, {
                    querySelector: handler.queryOne,
                    querySelectorAll: handler.queryAll
                });
            }
        },
        {
            key: "unregister",
            value: function unregister(name) {
                _class_private_field_get(this, _selectors).delete(name);
            }
        },
        {
            key: "get",
            value: function get(name) {
                return _class_private_field_get(this, _selectors).get(name);
            }
        },
        {
            key: "clear",
            value: function clear() {
                _class_private_field_get(this, _selectors).clear();
            }
        }
    ]);
    return CustomQuerySelectorRegistry;
}();
var customQuerySelectors = new CustomQuerySelectorRegistry(); //# sourceMappingURL=CustomQuerySelector.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/injected/PQuerySelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  pQuerySelector: function() { return pQuerySelector; },
  pQuerySelectorAll: function() { return pQuerySelectorAll; }
});
/* harmony import */var _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/AsyncIterableUtil.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js");
/* harmony import */var _ARIAQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ARIAQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/ARIAQuerySelector.js");
/* harmony import */var _CustomQuerySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/CustomQuerySelector.js");
/* harmony import */var _TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/TextQuerySelector.js");
/* harmony import */var _util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/util.js");
/* harmony import */var _XPathQuerySelector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./XPathQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/XPathQuerySelector.js");
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
function _async_generator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) {
                back = back.next = request;
            } else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg) {
        try {
            var result = gen[key](arg);
            var value = result.value;
            var wrappedAwait = value instanceof _await_value;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) {
            resume(front.key, front.arg);
        } else {
            back = null;
        }
    }
    this._invoke = send;
    if (typeof gen.return !== "function") {
        this.return = undefined;
    }
}
if (typeof Symbol === "function" && Symbol.asyncIterator) {
    _async_generator.prototype[Symbol.asyncIterator] = function() {
        return this;
    };
}
_async_generator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
_async_generator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
_async_generator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};
function _async_generator_delegate(inner, awaitWrap) {
    var iter = {}, waiting = false;
    function pump(key, value) {
        waiting = true;
        value = new Promise(function(resolve) {
            resolve(inner[key](value));
        });
        return {
            done: false,
            value: awaitWrap(value)
        };
    }
    if (typeof Symbol === "function" && Symbol.iterator) {
        iter[Symbol.iterator] = function() {
            return this;
        };
    }
    iter.next = function(value) {
        if (waiting) {
            waiting = false;
            return value;
        }
        return pump("next", value);
    };
    if (typeof inner.throw === "function") {
        iter.throw = function(value) {
            if (waiting) {
                waiting = false;
                throw value;
            }
            return pump("throw", value);
        };
    }
    if (typeof inner.return === "function") {
        iter.return = function(value) {
            return pump("return", value);
        };
    }
    return iter;
}
function _async_iterator(iterable) {
    var method, async, sync, retry = 2;
    for("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;){
        if (async && null != (method = iterable[async])) return method.call(iterable);
        if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable));
        async = "@@asyncIterator", sync = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(s) {
    function AsyncFromSyncIteratorContinuation(r) {
        if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
        var done = r.done;
        return Promise.resolve(r.value).then(function(value) {
            return {
                value: value,
                done: done
            };
        });
    }
    return AsyncFromSyncIterator = function(s) {
        this.s = s, this.n = s.next;
    }, AsyncFromSyncIterator.prototype = {
        s: null,
        n: null,
        next: function() {
            return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
        },
        return: function(value) {
            var ret = this.s.return;
            return void 0 === ret ? Promise.resolve({
                value: value,
                done: !0
            }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));
        },
        throw: function(value) {
            var thr = this.s.return;
            return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));
        }
    }, new AsyncFromSyncIterator(s);
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
function _await_async_generator(value) {
    return new _await_value(value);
}
function _await_value(value) {
    this.wrapped = value;
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
function _to_array(arr) {
    return _array_with_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_rest();
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
function _wrap_async_generator(fn) {
    return function() {
        return new _async_generator(fn.apply(this, arguments));
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
function _ts_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}






var IDENT_TOKEN_START = RegExp("[-\\w\\P{ASCII}*]");
var isQueryableNode = function(node) {
    return 'querySelectorAll' in node;
};
var _complexSelector = /*#__PURE__*/ new WeakMap(), _compoundSelector = /*#__PURE__*/ new WeakMap(), _selector = /*#__PURE__*/ new WeakMap(), _next = /*#__PURE__*/ new WeakSet();
var PQueryEngine = /*#__PURE__*/ function() {
    "use strict";
    function PQueryEngine(element, complexSelector) {
        _class_call_check(this, PQueryEngine);
        _class_private_method_init(this, _next);
        _class_private_field_init(this, _complexSelector, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _compoundSelector, {
            writable: true,
            value: []
        });
        _class_private_field_init(this, _selector, {
            writable: true,
            value: undefined
        });
        _define_property(this, "elements", void 0);
        this.elements = [
            element
        ];
        _class_private_field_set(this, _complexSelector, complexSelector);
        _class_private_method_get(this, _next, next).call(this);
    }
    _create_class(PQueryEngine, [
        {
            key: "run",
            value: function run() {
                var _this = this;
                return _async_to_generator(function() {
                    var _loop;
                    return _ts_generator(this, function(_state) {
                        _loop = function() {
                            var selector = _class_private_field_get(_this, _selector);
                            if (typeof selector === 'string') {
                                // The regular expression tests if the selector is a type/universal
                                // selector. Any other case means we want to apply the selector onto
                                // the element itself (e.g. `element.class`, `element>div`,
                                // `element:hover`, etc.).
                                if (selector[0] && IDENT_TOKEN_START.test(selector[0])) {
                                    _this.elements = _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_0__.AsyncIterableUtil.flatMap(_this.elements, function() {
                                        var _ref = _wrap_async_generator(function(element) {
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        if (!isQueryableNode(element)) return [
                                                            3,
                                                            2
                                                        ];
                                                        return [
                                                            5,
                                                            _ts_values(_async_generator_delegate(_async_iterator(element.querySelectorAll(selector)), _await_async_generator))
                                                        ];
                                                    case 1:
                                                        _state.sent();
                                                        _state.label = 2;
                                                    case 2:
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        });
                                        return function(element) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }());
                                } else {
                                    _this.elements = _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_0__.AsyncIterableUtil.flatMap(_this.elements, function() {
                                        var _ref = _wrap_async_generator(function(element) {
                                            var index, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, child;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        if (!!element.parentElement) return [
                                                            3,
                                                            2
                                                        ];
                                                        if (!isQueryableNode(element)) {
                                                            return [
                                                                2
                                                            ];
                                                        }
                                                        return [
                                                            5,
                                                            _ts_values(_async_generator_delegate(_async_iterator(element.querySelectorAll(selector)), _await_async_generator))
                                                        ];
                                                    case 1:
                                                        _state.sent();
                                                        return [
                                                            2
                                                        ];
                                                    case 2:
                                                        index = 0;
                                                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                                        try {
                                                            for(_iterator = element.parentElement.children[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                                                child = _step.value;
                                                                ++index;
                                                                if (child === element) {
                                                                    break;
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
                                                            5,
                                                            _ts_values(_async_generator_delegate(_async_iterator(element.parentElement.querySelectorAll(":scope>:nth-child(".concat(index, ")").concat(selector))), _await_async_generator))
                                                        ];
                                                    case 3:
                                                        _state.sent();
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        });
                                        return function(element) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }());
                                }
                            } else {
                                _this.elements = _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_0__.AsyncIterableUtil.flatMap(_this.elements, function() {
                                    var _ref = _wrap_async_generator(function(element) {
                                        var _, querySelector;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    _ = selector.name;
                                                    switch(_){
                                                        case 'text':
                                                            return [
                                                                3,
                                                                1
                                                            ];
                                                        case 'xpath':
                                                            return [
                                                                3,
                                                                3
                                                            ];
                                                        case 'aria':
                                                            return [
                                                                3,
                                                                5
                                                            ];
                                                    }
                                                    return [
                                                        3,
                                                        7
                                                    ];
                                                case 1:
                                                    return [
                                                        5,
                                                        _ts_values(_async_generator_delegate(_async_iterator((0,_TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_3__.textQuerySelectorAll)(element, selector.value)), _await_async_generator))
                                                    ];
                                                case 2:
                                                    _state.sent();
                                                    return [
                                                        3,
                                                        9
                                                    ];
                                                case 3:
                                                    return [
                                                        5,
                                                        _ts_values(_async_generator_delegate(_async_iterator((0,_XPathQuerySelector_js__WEBPACK_IMPORTED_MODULE_5__.xpathQuerySelectorAll)(element, selector.value)), _await_async_generator))
                                                    ];
                                                case 4:
                                                    _state.sent();
                                                    return [
                                                        3,
                                                        9
                                                    ];
                                                case 5:
                                                    return [
                                                        5,
                                                        _ts_values(_async_generator_delegate(_async_iterator((0,_ARIAQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.ariaQuerySelectorAll)(element, selector.value)), _await_async_generator))
                                                    ];
                                                case 6:
                                                    _state.sent();
                                                    return [
                                                        3,
                                                        9
                                                    ];
                                                case 7:
                                                    querySelector = _CustomQuerySelector_js__WEBPACK_IMPORTED_MODULE_2__.customQuerySelectors.get(selector.name);
                                                    if (!querySelector) {
                                                        throw new Error("Unknown selector type: ".concat(selector.name));
                                                    }
                                                    return [
                                                        5,
                                                        _ts_values(_async_generator_delegate(_async_iterator(querySelector.querySelectorAll(element, selector.value)), _await_async_generator))
                                                    ];
                                                case 8:
                                                    _state.sent();
                                                    _state.label = 9;
                                                case 9:
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    });
                                    return function(element) {
                                        return _ref.apply(this, arguments);
                                    };
                                }());
                            }
                        };
                        if (typeof _class_private_field_get(_this, _selector) === 'string') {
                            switch(_class_private_field_get(_this, _selector).trimStart()){
                                case ':scope':
                                    // `:scope` has some special behavior depending on the node. It always
                                    // represents the current node within a compound selector, but by
                                    // itself, it depends on the node. For example, Document is
                                    // represented by `<html>`, but any HTMLElement is not represented by
                                    // itself (i.e. `null`). This can be troublesome if our combinators
                                    // are used right after so we treat this selector specially.
                                    _class_private_method_get(_this, _next, next).call(_this);
                                    break;
                            }
                        }
                        for(; _class_private_field_get(_this, _selector) !== undefined; _class_private_method_get(_this, _next, next).call(_this))_loop();
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ]);
    return PQueryEngine;
}();
function next() {
    if (_class_private_field_get(this, _compoundSelector).length !== 0) {
        _class_private_field_set(this, _selector, _class_private_field_get(this, _compoundSelector).shift());
        return;
    }
    if (_class_private_field_get(this, _complexSelector).length === 0) {
        _class_private_field_set(this, _selector, undefined);
        return;
    }
    var selector = _class_private_field_get(this, _complexSelector).shift();
    switch(selector){
        case ">>>>" /* PCombinator.Child */ :
            {
                this.elements = _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_0__.AsyncIterableUtil.flatMap(this.elements, _util_js__WEBPACK_IMPORTED_MODULE_4__.pierce);
                _class_private_method_get(this, _next, next).call(this);
                break;
            }
        case ">>>" /* PCombinator.Descendent */ :
            {
                this.elements = _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_0__.AsyncIterableUtil.flatMap(this.elements, _util_js__WEBPACK_IMPORTED_MODULE_4__.pierceAll);
                _class_private_method_get(this, _next, next).call(this);
                break;
            }
        default:
            _class_private_field_set(this, _compoundSelector, selector);
            _class_private_method_get(this, _next, next).call(this);
            break;
    }
}
var _cache = /*#__PURE__*/ new WeakMap();
var DepthCalculator = /*#__PURE__*/ function() {
    "use strict";
    function DepthCalculator() {
        _class_call_check(this, DepthCalculator);
        _class_private_field_init(this, _cache, {
            writable: true,
            value: new WeakMap()
        });
    }
    _create_class(DepthCalculator, [
        {
            key: "calculate",
            value: function calculate(node) {
                var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
                if (node === null) {
                    return depth;
                }
                if (_instanceof(node, ShadowRoot)) {
                    node = node.host;
                }
                var cachedDepth = _class_private_field_get(this, _cache).get(node);
                if (cachedDepth) {
                    return _to_consumable_array(cachedDepth).concat(_to_consumable_array(depth));
                }
                var index = 0;
                for(var prevSibling = node.previousSibling; prevSibling; prevSibling = prevSibling.previousSibling){
                    ++index;
                }
                var value = this.calculate(node.parentNode, [
                    index
                ]);
                _class_private_field_get(this, _cache).set(node, value);
                return _to_consumable_array(value).concat(_to_consumable_array(depth));
            }
        }
    ]);
    return DepthCalculator;
}();
var compareDepths = function(a, b) {
    if (a.length + b.length === 0) {
        return 0;
    }
    var _a = _to_array(a), tmp = _a[0], i = tmp === void 0 ? -1 : tmp, otherA = _a.slice(1);
    var _b = _to_array(b), tmp1 = _b[0], j = tmp1 === void 0 ? -1 : tmp1, otherB = _b.slice(1);
    if (i === j) {
        return compareDepths(otherA, otherB);
    }
    return i < j ? -1 : 1;
};
var domSort = function() {
    var _ref = _wrap_async_generator(function(elements) {
        var results, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, element, err, calculator;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    results = new Set();
                    _iteratorAbruptCompletion = false, _didIteratorError = false;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        12
                    ]);
                    _iterator = _async_iterator(elements);
                    _state.label = 2;
                case 2:
                    return [
                        4,
                        _await_async_generator(_iterator.next())
                    ];
                case 3:
                    if (!(_iteratorAbruptCompletion = !(_step = _state.sent()).done)) return [
                        3,
                        5
                    ];
                    _value = _step.value;
                    element = _value;
                    results.add(element);
                    _state.label = 4;
                case 4:
                    _iteratorAbruptCompletion = false;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        12
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        12
                    ];
                case 7:
                    _state.trys.push([
                        7,
                        ,
                        10,
                        11
                    ]);
                    if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                        3,
                        9
                    ];
                    return [
                        4,
                        _await_async_generator(_iterator.return())
                    ];
                case 8:
                    _state.sent();
                    _state.label = 9;
                case 9:
                    return [
                        3,
                        11
                    ];
                case 10:
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                    return [
                        7
                    ];
                case 11:
                    return [
                        7
                    ];
                case 12:
                    calculator = new DepthCalculator();
                    return [
                        5,
                        _ts_values(_async_generator_delegate(_async_iterator(_to_consumable_array(results.values()).map(function(result) {
                            return [
                                result,
                                calculator.calculate(result)
                            ];
                        }).sort(function(param, param1) {
                            var _param = _sliced_to_array(param, 2), a = _param[1], _param1 = _sliced_to_array(param1, 2), b = _param1[1];
                            return compareDepths(a, b);
                        }).map(function(param) {
                            var _param = _sliced_to_array(param, 1), result = _param[0];
                            return result;
                        })), _await_async_generator))
                    ];
                case 13:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function domSort(elements) {
        return _ref.apply(this, arguments);
    };
}();
/**
 * Queries the given node for all nodes matching the given text selector.
 *
 * @internal
 */ var pQuerySelectorAll = function pQuerySelectorAll(root, selector) {
    var selectors = JSON.parse(selector);
    // If there are any empty elements, then this implies the selector has
    // contiguous combinators (e.g. `>>> >>>>`) or starts/ends with one which we
    // treat as illegal, similar to existing behavior.
    if (selectors.some(function(parts) {
        var i = 0;
        return parts.some(function(parts) {
            if (typeof parts === 'string') {
                ++i;
            } else {
                i = 0;
            }
            return i > 1;
        });
    })) {
        throw new Error('Multiple deep combinators found in sequence.');
    }
    return domSort(_util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_0__.AsyncIterableUtil.flatMap(selectors, function(selectorParts) {
        var query = new PQueryEngine(root, selectorParts);
        void query.run();
        return query.elements;
    }));
};
/**
 * Queries the given node for all nodes matching the given text selector.
 *
 * @internal
 */ var pQuerySelector = function() {
    var _ref = _async_to_generator(function(root, selector) {
        var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, element, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _iteratorAbruptCompletion = false, _didIteratorError = false;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        12
                    ]);
                    _iterator = _async_iterator(pQuerySelectorAll(root, selector));
                    _state.label = 2;
                case 2:
                    return [
                        4,
                        _iterator.next()
                    ];
                case 3:
                    if (!(_iteratorAbruptCompletion = !(_step = _state.sent()).done)) return [
                        3,
                        5
                    ];
                    _value = _step.value;
                    element = _value;
                    return [
                        2,
                        element
                    ];
                case 4:
                    _iteratorAbruptCompletion = false;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        12
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        12
                    ];
                case 7:
                    _state.trys.push([
                        7,
                        ,
                        10,
                        11
                    ]);
                    if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                        3,
                        9
                    ];
                    return [
                        4,
                        _iterator.return()
                    ];
                case 8:
                    _state.sent();
                    _state.label = 9;
                case 9:
                    return [
                        3,
                        11
                    ];
                case 10:
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                    return [
                        7
                    ];
                case 11:
                    return [
                        7
                    ];
                case 12:
                    return [
                        2,
                        null
                    ];
            }
        });
    });
    return function pQuerySelector(root, selector) {
        return _ref.apply(this, arguments);
    };
}(); //# sourceMappingURL=PQuerySelector.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/injected/XPathQuerySelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  xpathQuerySelectorAll: function() { return xpathQuerySelectorAll; }
});
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @internal
 */ function _ts_generator(thisArg, body) {
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
var xpathQuerySelectorAll = function xpathQuerySelectorAll(root, selector) {
    var maxResults, doc, iterator, items, item, i;
    var _arguments = arguments;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                maxResults = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : -1;
                doc = root.ownerDocument || document;
                iterator = doc.evaluate(selector, root, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
                items = [];
                // Read all results upfront to avoid
                // https://stackoverflow.com/questions/48235278/xpath-error-the-document-has-mutated-since-the-result-was-returned.
                while(item = iterator.iterateNext()){
                    items.push(item);
                    if (maxResults && items.length === maxResults) {
                        break;
                    }
                }
                i = 0;
                _state.label = 1;
            case 1:
                if (!(i < items.length)) return [
                    3,
                    4
                ];
                item = items[i];
                return [
                    4,
                    item
                ];
            case 2:
                _state.sent();
                delete items[i];
                _state.label = 3;
            case 3:
                i++;
                return [
                    3,
                    1
                ];
            case 4:
                return [
                    2
                ];
        }
    });
}; //# sourceMappingURL=XPathQuerySelector.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/injected/util.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  checkVisibility: function() { return checkVisibility; },
  pierce: function() { return pierce; },
  pierceAll: function() { return pierceAll; }
});
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
var HIDDEN_VISIBILITY_VALUES = [
    'hidden',
    'collapse'
];
/**
 * @internal
 */ var checkVisibility = function(node, visible) {
    if (!node) {
        return visible === false;
    }
    if (visible === undefined) {
        return node;
    }
    var element = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
    var style = window.getComputedStyle(element);
    var isVisible = style && !HIDDEN_VISIBILITY_VALUES.includes(style.visibility) && !isBoundingBoxEmpty(element);
    return visible === isVisible ? node : false;
};
function isBoundingBoxEmpty(element) {
    var rect = element.getBoundingClientRect();
    return rect.width === 0 || rect.height === 0;
}
var hasShadowRoot = function(node) {
    return 'shadowRoot' in node && _instanceof(node.shadowRoot, ShadowRoot);
};
/**
 * @internal
 */ function pierce(root) {
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                if (!hasShadowRoot(root)) return [
                    3,
                    2
                ];
                return [
                    4,
                    root.shadowRoot
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
                    root
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
}
/**
 * @internal
 */ function pierceAll(root) {
    var walkers, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, walker, node, err;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                root = pierce(root).next().value;
                return [
                    4,
                    root
                ];
            case 1:
                _state.sent();
                walkers = [
                    document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT)
                ];
                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                _state.label = 2;
            case 2:
                _state.trys.push([
                    2,
                    8,
                    9,
                    10
                ]);
                _iterator = walkers[Symbol.iterator]();
                _state.label = 3;
            case 3:
                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                    3,
                    7
                ];
                walker = _step.value;
                node = void 0;
                _state.label = 4;
            case 4:
                if (!(node = walker.nextNode())) return [
                    3,
                    6
                ];
                if (!node.shadowRoot) {
                    return [
                        3,
                        4
                    ];
                }
                return [
                    4,
                    node.shadowRoot
                ];
            case 5:
                _state.sent();
                walkers.push(document.createTreeWalker(node.shadowRoot, NodeFilter.SHOW_ELEMENT));
                return [
                    3,
                    4
                ];
            case 6:
                _iteratorNormalCompletion = true;
                return [
                    3,
                    3
                ];
            case 7:
                return [
                    3,
                    10
                ];
            case 8:
                err = _state.sent();
                _didIteratorError = true;
                _iteratorError = err;
                return [
                    3,
                    10
                ];
            case 9:
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
                return [
                    7
                ];
            case 10:
                return [
                    2
                ];
        }
    });
} //# sourceMappingURL=util.js.map


}),

}]);