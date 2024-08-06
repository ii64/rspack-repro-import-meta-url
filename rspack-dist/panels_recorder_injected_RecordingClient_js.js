"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_injected_RecordingClient_js"], {
"./panels/recorder/injected/Logger.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Logger: function() { return Logger; }
});
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
var noop = function() {
    return void 0;
};
var _log = /*#__PURE__*/ new WeakMap(), _time = /*#__PURE__*/ new WeakMap(), _timeEnd = /*#__PURE__*/ new WeakMap();
var Logger = /*#__PURE__*/ function() {
    "use strict";
    function Logger(level) {
        _class_call_check(this, Logger);
        _class_private_field_init(this, _log, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _time, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _timeEnd, {
            writable: true,
            value: void 0
        });
        switch(level){
            case 'silent':
                _class_private_field_set(this, _log, noop);
                _class_private_field_set(this, _time, noop);
                _class_private_field_set(this, _timeEnd, noop);
                break;
            default:
                // eslint-disable-next-line no-console
                _class_private_field_set(this, _log, console.log);
                _class_private_field_set(this, _time, console.time);
                _class_private_field_set(this, _timeEnd, console.timeEnd);
                break;
        }
    }
    _create_class(Logger, [
        {
            key: "log",
            value: function log() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _$_class_private_field_get;
                (_$_class_private_field_get = _class_private_field_get(this, _log)).call.apply(_$_class_private_field_get, [
                    this
                ].concat(_to_consumable_array(args)));
            }
        },
        {
            key: "timed",
            value: function timed(label, action) {
                _class_private_field_get(this, _time).call(this, label);
                var value = action();
                _class_private_field_get(this, _timeEnd).call(this, label);
                return value;
            }
        }
    ]);
    return Logger;
} //# sourceMappingURL=Logger.js.map
();


}),
"./panels/recorder/injected/RecordingClient.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RecordingClient: function() { return RecordingClient; }
});
/* harmony import */var _Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger.js */ "./panels/recorder/injected/Logger.js");
/* harmony import */var _SelectorComputer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectorComputer.js */ "./panels/recorder/injected/SelectorComputer.js");
/* harmony import */var _selectors_CSSSelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors/CSSSelector.js */ "./panels/recorder/injected/selectors/CSSSelector.js");
/* harmony import */var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ "./panels/recorder/injected/util.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}




/**
 * Determines whether an element is ignorable as an input.
 *
 * This is only called on input-like elements (elements that emit the `input`
 * event).
 *
 * With every `if` statement, please write a comment above explaining your
 * reasoning for ignoring the event.
 */ var isIgnorableInputElement = function(element) {
    if (_instanceof(element, HTMLInputElement)) {
        switch(element.type){
            // Checkboxes are always changed as a consequence of another type of action
            // such as the keyboard or mouse. As such, we can safely ignore these
            // elements.
            case 'checkbox':
                return true;
            // Radios are always changed as a consequence of another type of action
            // such as the keyboard or mouse. As such, we can safely ignore these
            // elements.
            case 'radio':
                return true;
        }
    }
    return false;
};
var getShortcutLength = function(shortcut) {
    return Object.values(shortcut).filter(function(key) {
        return Boolean(key);
    }).length.toString();
};
var _computer = /*#__PURE__*/ new WeakMap(), _isTrustedEvent = /*#__PURE__*/ new WeakMap(), _stopShortcuts = /*#__PURE__*/ new WeakMap(), _logger = /*#__PURE__*/ new WeakMap(), _wasStopShortcutPress = /*#__PURE__*/ new WeakMap(), _initialInputTarget = /*#__PURE__*/ new WeakMap(), /**
     * Sets the current input target and computes the selector.
     *
     * This needs to be called before any input-related events (keydown, keyup,
     * input, change, etc) occur so the precise selector is known. Since we
     * capture on the `Window`, it suffices to call this on the first event in any
     * given input sequence. This will always be either `keydown`, `beforeinput`,
     * or `input`.
     */ _setInitialInputTarget = /*#__PURE__*/ new WeakMap(), _onKeyDown = /*#__PURE__*/ new WeakMap(), _onBeforeInput = /*#__PURE__*/ new WeakMap(), _onInput = /*#__PURE__*/ new WeakMap(), _onKeyUp = /*#__PURE__*/ new WeakMap(), _initialPointerTarget = /*#__PURE__*/ new WeakMap(), _setInitialPointerTarget = /*#__PURE__*/ new WeakMap(), _pointerDownTimestamp = /*#__PURE__*/ new WeakMap(), _onPointerDown = /*#__PURE__*/ new WeakMap(), _onClick = /*#__PURE__*/ new WeakMap(), _onBeforeUnload = /*#__PURE__*/ new WeakMap(), _addStep = /*#__PURE__*/ new WeakMap();
var RecordingClient = function RecordingClient(bindings) {
    "use strict";
    var _this = this;
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : RecordingClient.defaultSetupOptions;
    _class_call_check(this, RecordingClient);
    _class_private_field_init(this, _computer, {
        writable: true,
        value: void 0
    });
    _class_private_field_init(this, _isTrustedEvent, {
        writable: true,
        value: function(event) {
            return event.isTrusted;
        }
    });
    _class_private_field_init(this, _stopShortcuts, {
        writable: true,
        value: []
    });
    _class_private_field_init(this, _logger, {
        writable: true,
        value: void 0
    });
    _define_property(this, "start", function() {
        _class_private_field_get(_this, _logger).log('Setting up recording listeners');
        window.addEventListener('keydown', _class_private_field_get(_this, _onKeyDown), true);
        window.addEventListener('beforeinput', _class_private_field_get(_this, _onBeforeInput), true);
        window.addEventListener('input', _class_private_field_get(_this, _onInput), true);
        window.addEventListener('keyup', _class_private_field_get(_this, _onKeyUp), true);
        window.addEventListener('pointerdown', _class_private_field_get(_this, _onPointerDown), true);
        window.addEventListener('click', _class_private_field_get(_this, _onClick), true);
        window.addEventListener('auxclick', _class_private_field_get(_this, _onClick), true);
        window.addEventListener('beforeunload', _class_private_field_get(_this, _onBeforeUnload), true);
    });
    _define_property(this, "stop", function() {
        _class_private_field_get(_this, _logger).log('Tearing down client listeners');
        window.removeEventListener('keydown', _class_private_field_get(_this, _onKeyDown), true);
        window.removeEventListener('beforeinput', _class_private_field_get(_this, _onBeforeInput), true);
        window.removeEventListener('input', _class_private_field_get(_this, _onInput), true);
        window.removeEventListener('keyup', _class_private_field_get(_this, _onKeyUp), true);
        window.removeEventListener('pointerdown', _class_private_field_get(_this, _onPointerDown), true);
        window.removeEventListener('click', _class_private_field_get(_this, _onClick), true);
        window.removeEventListener('auxclick', _class_private_field_get(_this, _onClick), true);
        window.removeEventListener('beforeunload', _class_private_field_get(_this, _onBeforeUnload), true);
    });
    _define_property(this, "getSelectors", function(node) {
        return _class_private_field_get(_this, _computer).getSelectors(node);
    });
    _define_property(this, "getCSSSelector", function(node) {
        return _class_private_field_get(_this, _computer).getCSSSelector(node);
    });
    _define_property(this, "getTextSelector", function(node) {
        return _class_private_field_get(_this, _computer).getTextSelector(node);
    });
    _define_property(this, "queryCSSSelectorAllForTesting", function(selector) {
        return (0,_selectors_CSSSelector_js__WEBPACK_IMPORTED_MODULE_2__.queryCSSSelectorAll)(selector);
    });
    _class_private_field_init(this, _wasStopShortcutPress, {
        writable: true,
        value: function(event) {
            var _$_class_private_field_get;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = ((_$_class_private_field_get = _class_private_field_get(_this, _stopShortcuts)) !== null && _$_class_private_field_get !== void 0 ? _$_class_private_field_get : [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var shortcut = _step.value;
                    if (event.shiftKey === shortcut.shift && event.ctrlKey === shortcut.ctrl && event.metaKey === shortcut.meta && event.keyCode === shortcut.keyCode) {
                        _this.stop();
                        (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.haultImmediateEvent)(event);
                        window.stopShortcut(getShortcutLength(shortcut));
                        return true;
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
            return false;
        }
    });
    _class_private_field_init(this, _initialInputTarget, {
        writable: true,
        value: {
            element: document.documentElement,
            selectors: []
        }
    });
    _class_private_field_init(this, _setInitialInputTarget, {
        writable: true,
        value: function(event) {
            var element = event.composedPath()[0];
            (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.assert)(_instanceof(element, Element));
            if (_class_private_field_get(_this, _initialInputTarget).element === element) {
                return;
            }
            _class_private_field_set(_this, _initialInputTarget, {
                element: element,
                selectors: _this.getSelectors(element)
            });
        }
    });
    _class_private_field_init(this, _onKeyDown, {
        writable: true,
        value: function(event) {
            if (!_class_private_field_get(_this, _isTrustedEvent).call(_this, event)) {
                return;
            }
            if (_class_private_field_get(_this, _wasStopShortcutPress).call(_this, event)) {
                return;
            }
            _class_private_field_get(_this, _setInitialInputTarget).call(_this, event);
            _class_private_field_get(_this, _addStep).call(_this, {
                type: 'keyDown',
                key: event.key
            });
        }
    });
    _class_private_field_init(this, _onBeforeInput, {
        writable: true,
        value: function(event) {
            if (!_class_private_field_get(_this, _isTrustedEvent).call(_this, event)) {
                return;
            }
            _class_private_field_get(_this, _setInitialInputTarget).call(_this, event);
        }
    });
    _class_private_field_init(this, _onInput, {
        writable: true,
        value: function(event) {
            if (!_class_private_field_get(_this, _isTrustedEvent).call(_this, event)) {
                return;
            }
            _class_private_field_get(_this, _setInitialInputTarget).call(_this, event);
            if (isIgnorableInputElement(_class_private_field_get(_this, _initialInputTarget).element)) {
                return;
            }
            var _$_class_private_field_get = _class_private_field_get(_this, _initialInputTarget), element = _$_class_private_field_get.element, selectors = _$_class_private_field_get.selectors;
            _class_private_field_get(_this, _addStep).call(_this, {
                type: 'change',
                selectors: selectors,
                value: 'value' in element ? element.value : element.textContent
            });
        }
    });
    _class_private_field_init(this, _onKeyUp, {
        writable: true,
        value: function(event) {
            if (!_class_private_field_get(_this, _isTrustedEvent).call(_this, event)) {
                return;
            }
            _class_private_field_get(_this, _addStep).call(_this, {
                type: 'keyUp',
                key: event.key
            });
        }
    });
    _class_private_field_init(this, _initialPointerTarget, {
        writable: true,
        value: {
            element: document.documentElement,
            selectors: []
        }
    });
    _class_private_field_init(this, _setInitialPointerTarget, {
        writable: true,
        value: function(event) {
            var element = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.getClickableTargetFromEvent)(event);
            if (_class_private_field_get(_this, _initialPointerTarget).element === element) {
                return;
            }
            _class_private_field_set(_this, _initialPointerTarget, {
                element: element,
                selectors: _class_private_field_get(_this, _computer).getSelectors(element)
            });
        }
    });
    _class_private_field_init(this, _pointerDownTimestamp, {
        writable: true,
        value: 0
    });
    _class_private_field_init(this, _onPointerDown, {
        writable: true,
        value: function(event) {
            if (!_class_private_field_get(_this, _isTrustedEvent).call(_this, event)) {
                return;
            }
            _class_private_field_set(_this, _pointerDownTimestamp, event.timeStamp);
            _class_private_field_get(_this, _setInitialPointerTarget).call(_this, event);
        }
    });
    _class_private_field_init(this, _onClick, {
        writable: true,
        value: function(event) {
            if (!_class_private_field_get(_this, _isTrustedEvent).call(_this, event)) {
                return;
            }
            _class_private_field_get(_this, _setInitialPointerTarget).call(_this, event);
            var attributes = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.createClickAttributes)(event, _class_private_field_get(_this, _initialPointerTarget).element);
            if (!attributes) {
                return;
            }
            var duration = event.timeStamp - _class_private_field_get(_this, _pointerDownTimestamp);
            _class_private_field_get(_this, _addStep).call(_this, _object_spread({
                type: event.detail === 2 ? 'doubleClick' : 'click',
                selectors: _class_private_field_get(_this, _initialPointerTarget).selectors,
                duration: duration > 350 ? duration : undefined
            }, attributes));
        }
    });
    _class_private_field_init(this, _onBeforeUnload, {
        writable: true,
        value: function(event) {
            _class_private_field_get(_this, _logger).log('Unloading...');
            if (!_class_private_field_get(_this, _isTrustedEvent).call(_this, event)) {
                return;
            }
            _class_private_field_get(_this, _addStep).call(_this, {
                type: 'beforeUnload'
            });
        }
    });
    _class_private_field_init(this, _addStep, {
        writable: true,
        value: function(step) {
            var payload = JSON.stringify(step);
            _class_private_field_get(_this, _logger).log("Adding step: ".concat(payload));
            window.addStep(payload);
        }
    });
    _class_private_field_set(this, _logger, new _Logger_js__WEBPACK_IMPORTED_MODULE_0__.Logger(options.debug ? 'debug' : 'silent'));
    _class_private_field_get(this, _logger).log('creating a RecordingClient');
    _class_private_field_set(this, _computer, new _SelectorComputer_js__WEBPACK_IMPORTED_MODULE_1__.SelectorComputer(bindings, _class_private_field_get(this, _logger), options.selectorAttribute, options.selectorTypesToRecord));
    if (options.allowUntrustedEvents) {
        _class_private_field_set(this, _isTrustedEvent, function() {
            return true;
        });
    }
    var _options_stopShortcuts;
    _class_private_field_set(this, _stopShortcuts, (_options_stopShortcuts = options.stopShortcuts) !== null && _options_stopShortcuts !== void 0 ? _options_stopShortcuts : []);
};
_define_property(RecordingClient, "defaultSetupOptions", Object.freeze({
    debug: false,
    allowUntrustedEvents: false,
    selectorTypesToRecord: [
        'aria',
        'css',
        'text',
        'xpath',
        'pierce'
    ]
}));
 //# sourceMappingURL=RecordingClient.js.map


}),
"./panels/recorder/injected/util.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assert: function() { return assert; },
  createClickAttributes: function() { return createClickAttributes; },
  getClickableTargetFromEvent: function() { return getClickableTargetFromEvent; },
  getMouseEventOffsets: function() { return getMouseEventOffsets; },
  haultImmediateEvent: function() { return haultImmediateEvent; }
});
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function assert(condition) {
    if (!condition) {
        throw new Error('Assertion failed!');
    }
}
var haultImmediateEvent = function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
};
var getMouseEventOffsets = function(event, target) {
    var rect = target.getBoundingClientRect();
    return {
        offsetX: event.clientX - rect.x,
        offsetY: event.clientY - rect.y
    };
};
/**
 * @returns the element that emitted the event.
 */ var getClickableTargetFromEvent = function(event) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = event.composedPath()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var element = _step.value;
            if (!_instanceof(element, Element)) {
                continue;
            }
            // If an element has no width or height, we skip this target.
            var rect = element.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) {
                continue;
            }
            return element;
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
    throw new Error("No target is found in event of type ".concat(event.type));
};
var createClickAttributes = function(event, target) {
    var deviceType;
    if (_instanceof(event, PointerEvent)) {
        switch(event.pointerType){
            case 'mouse':
                break;
            case 'pen':
            case 'touch':
                deviceType = event.pointerType;
                break;
            default:
                // Unsupported device type.
                return;
        }
    }
    var _getMouseEventOffsets = getMouseEventOffsets(event, target), offsetX = _getMouseEventOffsets.offsetX, offsetY = _getMouseEventOffsets.offsetY;
    if (offsetX < 0 || offsetY < 0) {
        // Event comes from outside the viewport. Can happen as a result of a
        // simulated click (through a keyboard event e.g.).
        return;
    }
    return {
        button: [
            'auxiliary',
            'secondary',
            'back',
            'forward'
        ][event.button - 1],
        deviceType: deviceType,
        offsetX: offsetX,
        offsetY: offsetY
    };
}; //# sourceMappingURL=util.js.map


}),

}]);