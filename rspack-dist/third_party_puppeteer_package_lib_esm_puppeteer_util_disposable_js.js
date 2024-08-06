"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_util_disposable_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AsyncDisposableStack: function() { return AsyncDisposableStack; },
  DisposableStack: function() { return DisposableStack; },
  asyncDisposeSymbol: function() { return asyncDisposeSymbol; },
  disposeSymbol: function() { return disposeSymbol; }
});
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
var _Symbol, _Symbol1;
var _dispose;
(_dispose = (_Symbol = Symbol).dispose) !== null && _dispose !== void 0 ? _dispose : _Symbol.dispose = Symbol('dispose');
var _asyncDispose;
(_asyncDispose = (_Symbol1 = Symbol).asyncDispose) !== null && _asyncDispose !== void 0 ? _asyncDispose : _Symbol1.asyncDispose = Symbol('asyncDispose');
/**
 * @internal
 */ var disposeSymbol = Symbol.dispose;
/**
 * @internal
 */ var asyncDisposeSymbol = Symbol.asyncDispose;
var _disposed = /*#__PURE__*/ new WeakMap(), _stack = /*#__PURE__*/ new WeakMap();
var _disposeSymbol = disposeSymbol, _Symbol_toStringTag = Symbol.toStringTag;
/**
 * @internal
 */ var DisposableStack = /*#__PURE__*/ function() {
    "use strict";
    function DisposableStack() {
        _class_call_check(this, DisposableStack);
        _class_private_field_init(this, _disposed, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _stack, {
            writable: true,
            value: []
        });
        _define_property(this, _disposeSymbol, this.dispose);
        _define_property(this, _Symbol_toStringTag, 'DisposableStack');
    }
    _create_class(DisposableStack, [
        {
            key: "disposed",
            get: /**
     * Returns a value indicating whether this stack has been disposed.
     */ function get() {
                return _class_private_field_get(this, _disposed);
            }
        },
        {
            /**
     * Disposes each resource in the stack in the reverse order that they were added.
     */ key: "dispose",
            value: function dispose() {
                if (_class_private_field_get(this, _disposed)) {
                    return;
                }
                _class_private_field_set(this, _disposed, true);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _stack).reverse()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var resource = _step.value;
                        resource[disposeSymbol]();
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
        },
        {
            /**
     * Adds a disposable resource to the stack, returning the resource.
     *
     * @param value - The resource to add. `null` and `undefined` will not be added,
     * but will be returned.
     * @returns The provided `value`.
     */ key: "use",
            value: function use(value) {
                if (value) {
                    _class_private_field_get(this, _stack).push(value);
                }
                return value;
            }
        },
        {
            /**
     * Adds a value and associated disposal callback as a resource to the stack.
     *
     * @param value - The value to add.
     * @param onDispose - The callback to use in place of a `[disposeSymbol]()`
     * method. Will be invoked with `value` as the first parameter.
     * @returns The provided `value`.
     */ key: "adopt",
            value: function adopt(value, onDispose) {
                _class_private_field_get(this, _stack).push(_define_property({}, disposeSymbol, function() {
                    onDispose(value);
                }));
                return value;
            }
        },
        {
            /**
     * Adds a callback to be invoked when the stack is disposed.
     */ key: "defer",
            value: function defer(onDispose) {
                _class_private_field_get(this, _stack).push(_define_property({}, disposeSymbol, function() {
                    onDispose();
                }));
            }
        },
        {
            /**
     * Move all resources out of this stack and into a new `DisposableStack`, and
     * marks this stack as disposed.
     *
     * @example
     *
     * ```ts
     * class C {
     *   #res1: Disposable;
     *   #res2: Disposable;
     *   #disposables: DisposableStack;
     *   constructor() {
     *     // stack will be disposed when exiting constructor for any reason
     *     using stack = new DisposableStack();
     *
     *     // get first resource
     *     this.#res1 = stack.use(getResource1());
     *
     *     // get second resource. If this fails, both `stack` and `#res1` will be disposed.
     *     this.#res2 = stack.use(getResource2());
     *
     *     // all operations succeeded, move resources out of `stack` so that
     *     // they aren't disposed when constructor exits
     *     this.#disposables = stack.move();
     *   }
     *
     *   [disposeSymbol]() {
     *     this.#disposables.dispose();
     *   }
     * }
     * ```
     */ key: "move",
            value: function move() {
                if (_class_private_field_get(this, _disposed)) {
                    throw new ReferenceError('a disposed stack can not use anything new'); // step 3
                }
                var stack = new DisposableStack(); // step 4-5
                _class_private_field_set(stack, _stack, _class_private_field_get(this, _stack));
                _class_private_field_set(this, _disposed, true);
                return stack;
            }
        }
    ]);
    return DisposableStack;
}();
var _disposed1 = /*#__PURE__*/ new WeakMap(), _stack1 = /*#__PURE__*/ new WeakMap();
var _asyncDisposeSymbol = asyncDisposeSymbol, _Symbol_toStringTag1 = Symbol.toStringTag;
/**
 * @internal
 */ var AsyncDisposableStack = /*#__PURE__*/ function() {
    "use strict";
    function AsyncDisposableStack() {
        _class_call_check(this, AsyncDisposableStack);
        _class_private_field_init(this, _disposed1, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _stack1, {
            writable: true,
            value: []
        });
        _define_property(this, _asyncDisposeSymbol, this.dispose);
        _define_property(this, _Symbol_toStringTag1, 'AsyncDisposableStack');
    }
    _create_class(AsyncDisposableStack, [
        {
            key: "disposed",
            get: /**
     * Returns a value indicating whether this stack has been disposed.
     */ function get() {
                return _class_private_field_get(this, _disposed1);
            }
        },
        {
            key: "dispose",
            value: /**
     * Disposes each resource in the stack in the reverse order that they were added.
     */ function dispose() {
                var _this = this;
                return _async_to_generator(function() {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, resource, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_class_private_field_get(_this, _disposed1)) {
                                    return [
                                        2
                                    ];
                                }
                                _class_private_field_set(_this, _disposed1, true);
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    8
                                ]);
                                _iterator = _class_private_field_get(_this, _stack1).reverse()[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    5
                                ];
                                resource = _step.value;
                                return [
                                    4,
                                    resource[asyncDisposeSymbol]()
                                ];
                            case 3:
                                _state.sent();
                                _state.label = 4;
                            case 4:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 5:
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    8
                                ];
                            case 7:
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
                            case 8:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            /**
     * Adds a disposable resource to the stack, returning the resource.
     *
     * @param value - The resource to add. `null` and `undefined` will not be added,
     * but will be returned.
     * @returns The provided `value`.
     */ key: "use",
            value: function use(value) {
                if (value) {
                    _class_private_field_get(this, _stack1).push(value);
                }
                return value;
            }
        },
        {
            /**
     * Adds a value and associated disposal callback as a resource to the stack.
     *
     * @param value - The value to add.
     * @param onDispose - The callback to use in place of a `[disposeSymbol]()`
     * method. Will be invoked with `value` as the first parameter.
     * @returns The provided `value`.
     */ key: "adopt",
            value: function adopt(value, onDispose) {
                _class_private_field_get(this, _stack1).push(_define_property({}, asyncDisposeSymbol, function() {
                    return onDispose(value);
                }));
                return value;
            }
        },
        {
            /**
     * Adds a callback to be invoked when the stack is disposed.
     */ key: "defer",
            value: function defer(onDispose) {
                _class_private_field_get(this, _stack1).push(_define_property({}, asyncDisposeSymbol, function() {
                    return onDispose();
                }));
            }
        },
        {
            /**
     * Move all resources out of this stack and into a new `DisposableStack`, and
     * marks this stack as disposed.
     *
     * @example
     *
     * ```ts
     * class C {
     *   #res1: Disposable;
     *   #res2: Disposable;
     *   #disposables: DisposableStack;
     *   constructor() {
     *     // stack will be disposed when exiting constructor for any reason
     *     using stack = new DisposableStack();
     *
     *     // get first resource
     *     this.#res1 = stack.use(getResource1());
     *
     *     // get second resource. If this fails, both `stack` and `#res1` will be disposed.
     *     this.#res2 = stack.use(getResource2());
     *
     *     // all operations succeeded, move resources out of `stack` so that
     *     // they aren't disposed when constructor exits
     *     this.#disposables = stack.move();
     *   }
     *
     *   [disposeSymbol]() {
     *     this.#disposables.dispose();
     *   }
     * }
     * ```
     */ key: "move",
            value: function move() {
                if (_class_private_field_get(this, _disposed1)) {
                    throw new ReferenceError('a disposed stack can not use anything new'); // step 3
                }
                var stack = new AsyncDisposableStack(); // step 4-5
                _class_private_field_set(stack, _stack1, _class_private_field_get(this, _stack1));
                _class_private_field_set(this, _disposed1, true);
                return stack;
            }
        }
    ]);
    return AsyncDisposableStack;
} //# sourceMappingURL=disposable.js.map
();


}),

}]);