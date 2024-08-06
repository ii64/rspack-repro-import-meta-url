"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_EventEmitter_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EventEmitter: function() { return EventEmitter; }
});
/* harmony import */var _third_party_mitt_mitt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/mitt/mitt.js */ "./third_party/puppeteer/package/lib/esm/third_party/mitt/mitt.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/**
 * @license
 * Copyright 2022 Google Inc.
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
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}


var _emitter = /*#__PURE__*/ new WeakMap(), _handlers = /*#__PURE__*/ new WeakMap();
var _disposeSymbol = _util_disposable_js__WEBPACK_IMPORTED_MODULE_1__.disposeSymbol;
/**
 * The EventEmitter class that many Puppeteer classes extend.
 *
 * @remarks
 *
 * This allows you to listen to events that Puppeteer classes fire and act
 * accordingly. Therefore you'll mostly use {@link EventEmitter.on | on} and
 * {@link EventEmitter.off | off} to bind
 * and unbind to event listeners.
 *
 * @public
 */ var EventEmitter = /*#__PURE__*/ function() {
    "use strict";
    function EventEmitter() {
        var emitter = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0,_third_party_mitt_mitt_js__WEBPACK_IMPORTED_MODULE_0__["default"])(new Map());
        _class_call_check(this, EventEmitter);
        _class_private_field_init(this, _emitter, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _handlers, {
            writable: true,
            value: new Map()
        });
        _class_private_field_set(this, _emitter, emitter);
    }
    _create_class(EventEmitter, [
        {
            /**
     * Bind an event listener to fire when an event occurs.
     * @param type - the event type you'd like to listen to. Can be a string or symbol.
     * @param handler - the function to be called when the event occurs.
     * @returns `this` to enable you to chain method calls.
     */ key: "on",
            value: function on(type, handler) {
                var handlers = _class_private_field_get(this, _handlers).get(type);
                if (handlers === undefined) {
                    _class_private_field_get(this, _handlers).set(type, [
                        handler
                    ]);
                } else {
                    handlers.push(handler);
                }
                _class_private_field_get(this, _emitter).on(type, handler);
                return this;
            }
        },
        {
            /**
     * Remove an event listener from firing.
     * @param type - the event type you'd like to stop listening to.
     * @param handler - the function that should be removed.
     * @returns `this` to enable you to chain method calls.
     */ key: "off",
            value: function off(type, handler) {
                var _class_private_field_get_get;
                var handlers = (_class_private_field_get_get = _class_private_field_get(this, _handlers).get(type)) !== null && _class_private_field_get_get !== void 0 ? _class_private_field_get_get : [];
                if (handler === undefined) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = handlers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var _$handler = _step.value;
                            _class_private_field_get(this, _emitter).off(type, _$handler);
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
                    _class_private_field_get(this, _handlers).delete(type);
                    return this;
                }
                var index = handlers.lastIndexOf(handler);
                if (index > -1) {
                    var _$_class_private_field_get;
                    (_$_class_private_field_get = _class_private_field_get(this, _emitter)).off.apply(_$_class_private_field_get, [
                        type
                    ].concat(_to_consumable_array(handlers.splice(index, 1))));
                }
                return this;
            }
        },
        {
            /**
     * Emit an event and call any associated listeners.
     *
     * @param type - the event you'd like to emit
     * @param eventData - any data you'd like to emit with the event
     * @returns `true` if there are any listeners, `false` if there are not.
     */ key: "emit",
            value: function emit(type, event) {
                _class_private_field_get(this, _emitter).emit(type, event);
                return this.listenerCount(type) > 0;
            }
        },
        {
            /**
     * Like `on` but the listener will only be fired once and then it will be removed.
     * @param type - the event you'd like to listen to
     * @param handler - the handler function to run when the event occurs
     * @returns `this` to enable you to chain method calls.
     */ key: "once",
            value: function once(type, handler) {
                var _this = this;
                var onceHandler = function(eventData) {
                    handler(eventData);
                    _this.off(type, onceHandler);
                };
                return this.on(type, onceHandler);
            }
        },
        {
            /**
     * Gets the number of listeners for a given event.
     *
     * @param type - the event to get the listener count for
     * @returns the number of listeners bound to the given event
     */ key: "listenerCount",
            value: function listenerCount(type) {
                var _class_private_field_get_get;
                return ((_class_private_field_get_get = _class_private_field_get(this, _handlers).get(type)) === null || _class_private_field_get_get === void 0 ? void 0 : _class_private_field_get_get.length) || 0;
            }
        },
        {
            /**
     * Removes all listeners. If given an event argument, it will remove only
     * listeners for that event.
     *
     * @param type - the event to remove listeners for.
     * @returns `this` to enable you to chain method calls.
     */ key: "removeAllListeners",
            value: function removeAllListeners(type) {
                if (type !== undefined) {
                    return this.off(type);
                }
                this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_1__.disposeSymbol]();
                return this;
            }
        },
        {
            /**
     * @internal
     */ key: _disposeSymbol,
            value: function value() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _handlers)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), type = _step_value[0], handlers = _step_value[1];
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = handlers[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var handler = _step1.value;
                                _class_private_field_get(this, _emitter).off(type, handler);
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
    return EventEmitter;
} //# sourceMappingURL=EventEmitter.js.map
();


}),
"./third_party/puppeteer/package/lib/esm/third_party/mitt/mitt.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return mitt_default; }
});
/**
MIT License

Copyright (c) 2021 Jason Miller

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/ // ../../node_modules/mitt/dist/mitt.mjs
function mitt_default(n) {
    return {
        all: n = n || /* @__PURE__ */ new Map(),
        on: function on(t, e) {
            var i = n.get(t);
            i ? i.push(e) : n.set(t, [
                e
            ]);
        },
        off: function off(t, e) {
            var i = n.get(t);
            i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
        },
        emit: function emit(t, e) {
            var i = n.get(t);
            i && i.slice().map(function(n2) {
                n2(e);
            }), (i = n.get("*")) && i.slice().map(function(n2) {
                n2(t, e);
            });
        }
    };
}



}),

}]);