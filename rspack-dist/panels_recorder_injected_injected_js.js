"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_injected_injected_js"], {
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
"./panels/recorder/injected/injected.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _RecordingClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecordingClient.js */ "./panels/recorder/injected/RecordingClient.js");
/* harmony import */var _SelectorPicker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectorPicker.js */ "./panels/recorder/injected/SelectorPicker.js");
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


var _recordingClient = /*#__PURE__*/ new WeakMap(), _selectorPicker = /*#__PURE__*/ new WeakMap();
var DevToolsRecorder = /*#__PURE__*/ function() {
    "use strict";
    function DevToolsRecorder() {
        _class_call_check(this, DevToolsRecorder);
        _class_private_field_init(this, _recordingClient, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _selectorPicker, {
            writable: true,
            value: void 0
        });
    }
    _create_class(DevToolsRecorder, [
        {
            key: "startRecording",
            value: function startRecording(bindings, options) {
                if (_class_private_field_get(this, _recordingClient)) {
                    throw new Error('Recording client already started.');
                }
                if (_class_private_field_get(this, _selectorPicker)) {
                    throw new Error('Selector picker is active.');
                }
                _class_private_field_set(this, _recordingClient, new _RecordingClient_js__WEBPACK_IMPORTED_MODULE_0__.RecordingClient(bindings, options));
                _class_private_field_get(this, _recordingClient).start();
            }
        },
        {
            key: "stopRecording",
            value: function stopRecording() {
                if (!_class_private_field_get(this, _recordingClient)) {
                    throw new Error('Recording client was not started.');
                }
                _class_private_field_get(this, _recordingClient).stop();
                _class_private_field_set(this, _recordingClient, undefined);
            }
        },
        {
            key: "recordingClientForTesting",
            get: function get() {
                if (!_class_private_field_get(this, _recordingClient)) {
                    throw new Error('Recording client was not started.');
                }
                return _class_private_field_get(this, _recordingClient);
            }
        },
        {
            key: "startSelectorPicker",
            value: function startSelectorPicker(bindings, customAttribute, debug) {
                if (_class_private_field_get(this, _selectorPicker)) {
                    throw new Error('Selector picker already started.');
                }
                if (_class_private_field_get(this, _recordingClient)) {
                    _class_private_field_get(this, _recordingClient).stop();
                }
                _class_private_field_set(this, _selectorPicker, new _SelectorPicker_js__WEBPACK_IMPORTED_MODULE_1__.SelectorPicker(bindings, customAttribute, debug));
                _class_private_field_get(this, _selectorPicker).start();
            }
        },
        {
            key: "stopSelectorPicker",
            value: function stopSelectorPicker() {
                if (!_class_private_field_get(this, _selectorPicker)) {
                    throw new Error('Selector picker was not started.');
                }
                _class_private_field_get(this, _selectorPicker).stop();
                _class_private_field_set(this, _selectorPicker, undefined);
                if (_class_private_field_get(this, _recordingClient)) {
                    _class_private_field_get(this, _recordingClient).start();
                }
            }
        }
    ]);
    return DevToolsRecorder;
}();
if (!window.DevToolsRecorder) {
    window.DevToolsRecorder = new DevToolsRecorder();
} //# sourceMappingURL=injected.js.map


}),

}]);