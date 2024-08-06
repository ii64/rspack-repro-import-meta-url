"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_injected_SelectorPicker_js"], {
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
"./panels/recorder/injected/SelectorPicker.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SelectorPicker: function() { return SelectorPicker; }
});
/* harmony import */var _Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger.js */ "./panels/recorder/injected/Logger.js");
/* harmony import */var _SelectorComputer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectorComputer.js */ "./panels/recorder/injected/SelectorComputer.js");
/* harmony import */var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "./panels/recorder/injected/util.js");
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



var _logger = /*#__PURE__*/ new WeakMap(), _computer = /*#__PURE__*/ new WeakMap(), _handleClickEvent = /*#__PURE__*/ new WeakMap();
var SelectorPicker = function SelectorPicker(bindings) {
    "use strict";
    var _this = this;
    var customAttribute = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', debug = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    _class_call_check(this, SelectorPicker);
    _class_private_field_init(this, _logger, {
        writable: true,
        value: void 0
    });
    _class_private_field_init(this, _computer, {
        writable: true,
        value: void 0
    });
    _class_private_field_init(this, _handleClickEvent, {
        writable: true,
        value: function(event) {
            (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.haultImmediateEvent)(event);
            var target = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.getClickableTargetFromEvent)(event);
            window.captureSelectors(JSON.stringify(_object_spread({
                selectors: _class_private_field_get(_this, _computer).getSelectors(target)
            }, (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.getMouseEventOffsets)(event, target))));
        }
    });
    _define_property(this, "start", function() {
        _class_private_field_get(_this, _logger).log('Setting up selector listeners');
        window.addEventListener('click', _class_private_field_get(_this, _handleClickEvent), true);
        window.addEventListener('mousedown', _util_js__WEBPACK_IMPORTED_MODULE_2__.haultImmediateEvent, true);
        window.addEventListener('mouseup', _util_js__WEBPACK_IMPORTED_MODULE_2__.haultImmediateEvent, true);
    });
    _define_property(this, "stop", function() {
        _class_private_field_get(_this, _logger).log('Tearing down selector listeners');
        window.removeEventListener('click', _class_private_field_get(_this, _handleClickEvent), true);
        window.removeEventListener('mousedown', _util_js__WEBPACK_IMPORTED_MODULE_2__.haultImmediateEvent, true);
        window.removeEventListener('mouseup', _util_js__WEBPACK_IMPORTED_MODULE_2__.haultImmediateEvent, true);
    });
    _class_private_field_set(this, _logger, new _Logger_js__WEBPACK_IMPORTED_MODULE_0__.Logger(debug ? 'debug' : 'silent'));
    _class_private_field_get(this, _logger).log('Creating a SelectorPicker');
    _class_private_field_set(this, _computer, new _SelectorComputer_js__WEBPACK_IMPORTED_MODULE_1__.SelectorComputer(bindings, _class_private_field_get(this, _logger), customAttribute));
};
 //# sourceMappingURL=SelectorPicker.js.map


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