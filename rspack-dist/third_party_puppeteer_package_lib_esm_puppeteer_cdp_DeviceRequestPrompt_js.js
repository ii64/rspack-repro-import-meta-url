"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_DeviceRequestPrompt_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/DeviceRequestPrompt.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DeviceRequestPrompt: function() { return DeviceRequestPrompt; },
  DeviceRequestPromptDevice: function() { return DeviceRequestPromptDevice; },
  DeviceRequestPromptManager: function() { return DeviceRequestPromptManager; }
});
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
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


/**
 * Device in a request prompt.
 *
 * @public
 */ var DeviceRequestPromptDevice = function DeviceRequestPromptDevice(id, name) {
    "use strict";
    _class_call_check(this, DeviceRequestPromptDevice);
    /**
     * Device id during a prompt.
     */ _define_property(this, "id", void 0);
    /**
     * Device name as it appears in a prompt.
     */ _define_property(this, "name", void 0);
    this.id = id;
    this.name = name;
};
var _client = /*#__PURE__*/ new WeakMap(), _timeoutSettings = /*#__PURE__*/ new WeakMap(), _id = /*#__PURE__*/ new WeakMap(), _handled = /*#__PURE__*/ new WeakMap(), _updateDevicesHandle = /*#__PURE__*/ new WeakMap(), _waitForDevicePromises = /*#__PURE__*/ new WeakMap(), _updateDevices = /*#__PURE__*/ new WeakSet();
/**
 * Device request prompts let you respond to the page requesting for a device
 * through an API like WebBluetooth.
 *
 * @remarks
 * `DeviceRequestPrompt` instances are returned via the
 * {@link Page.waitForDevicePrompt} method.
 *
 * @example
 *
 * ```ts
 * const [devicePrompt] = Promise.all([
 *   page.waitForDevicePrompt(),
 *   page.click('#connect-bluetooth'),
 * ]);
 * await devicePrompt.select(
 *   await devicePrompt.waitForDevice(({name}) => name.includes('My Device'))
 * );
 * ```
 *
 * @public
 */ var DeviceRequestPrompt = /*#__PURE__*/ function() {
    "use strict";
    function DeviceRequestPrompt(client, timeoutSettings, firstEvent) {
        var _this = this;
        _class_call_check(this, DeviceRequestPrompt);
        _class_private_method_init(this, _updateDevices);
        _class_private_field_init(this, _client, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _timeoutSettings, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _id, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _handled, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _updateDevicesHandle, {
            writable: true,
            value: _class_private_method_get(this, _updateDevices, updateDevices).bind(this)
        });
        _class_private_field_init(this, _waitForDevicePromises, {
            writable: true,
            value: new Set()
        });
        /**
     * Current list of selectable devices.
     */ _define_property(this, "devices", []);
        _class_private_field_set(this, _client, client);
        _class_private_field_set(this, _timeoutSettings, timeoutSettings);
        _class_private_field_set(this, _id, firstEvent.id);
        _class_private_field_get(this, _client).on('DeviceAccess.deviceRequestPrompted', _class_private_field_get(this, _updateDevicesHandle));
        _class_private_field_get(this, _client).on('Target.detachedFromTarget', function() {
            _class_private_field_set(_this, _client, null);
        });
        _class_private_method_get(this, _updateDevices, updateDevices).call(this, firstEvent);
    }
    _create_class(DeviceRequestPrompt, [
        {
            key: "waitForDevice",
            value: /**
     * Resolve to the first device in the prompt matching a filter.
     */ function waitForDevice(filter) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, device, _options_timeout, timeout, deferred, handle;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = _this.devices[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        device = _step.value;
                                        if (filter(device)) {
                                            return [
                                                2,
                                                device
                                            ];
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
                                _options_timeout = options.timeout, timeout = _options_timeout === void 0 ? _class_private_field_get(_this, _timeoutSettings).timeout() : _options_timeout;
                                deferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred.create({
                                    message: "Waiting for `DeviceRequestPromptDevice` failed: ".concat(timeout, "ms exceeded"),
                                    timeout: timeout
                                });
                                handle = {
                                    filter: filter,
                                    promise: deferred
                                };
                                _class_private_field_get(_this, _waitForDevicePromises).add(handle);
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    ,
                                    3,
                                    4
                                ]);
                                return [
                                    4,
                                    deferred.valueOrThrow()
                                ];
                            case 2:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 3:
                                _class_private_field_get(_this, _waitForDevicePromises).delete(handle);
                                return [
                                    7
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "select",
            value: /**
     * Select a device in the prompt's list.
     */ function select(device) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(_class_private_field_get(_this, _client) !== null, 'Cannot select device through detached session!');
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(_this.devices.includes(device), 'Cannot select unknown device!');
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!_class_private_field_get(_this, _handled), 'Cannot select DeviceRequestPrompt which is already handled!');
                                _class_private_field_get(_this, _client).off('DeviceAccess.deviceRequestPrompted', _class_private_field_get(_this, _updateDevicesHandle));
                                _class_private_field_set(_this, _handled, true);
                                return [
                                    4,
                                    _class_private_field_get(_this, _client).send('DeviceAccess.selectPrompt', {
                                        id: _class_private_field_get(_this, _id),
                                        deviceId: device.id
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
            key: "cancel",
            value: /**
     * Cancel the prompt.
     */ function cancel() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(_class_private_field_get(_this, _client) !== null, 'Cannot cancel prompt through detached session!');
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!_class_private_field_get(_this, _handled), 'Cannot cancel DeviceRequestPrompt which is already handled!');
                                _class_private_field_get(_this, _client).off('DeviceAccess.deviceRequestPrompted', _class_private_field_get(_this, _updateDevicesHandle));
                                _class_private_field_set(_this, _handled, true);
                                return [
                                    4,
                                    _class_private_field_get(_this, _client).send('DeviceAccess.cancelPrompt', {
                                        id: _class_private_field_get(_this, _id)
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
        }
    ]);
    return DeviceRequestPrompt;
}();
function updateDevices(event) {
    if (event.id !== _class_private_field_get(this, _id)) {
        return;
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _this, _loop = function() {
            var rawDevice = _step.value;
            if (_this.devices.some(function(device) {
                return device.id === rawDevice.id;
            })) {
                return "continue";
            }
            var newDevice = new DeviceRequestPromptDevice(rawDevice.id, rawDevice.name);
            _this.devices.push(newDevice);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = _class_private_field_get(_this, _waitForDevicePromises)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion = (_step1 = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var waitForDevicePromise = _step1.value;
                    if (waitForDevicePromise.filter(newDevice)) {
                        waitForDevicePromise.promise.resolve(newDevice);
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
        };
        for(var _iterator = event.devices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_this = this, _loop();
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
var _client1 = /*#__PURE__*/ new WeakMap(), _timeoutSettings1 = /*#__PURE__*/ new WeakMap(), _deviceRequestPrompDeferreds = /*#__PURE__*/ new WeakMap(), /**
     * @internal
     */ _onDeviceRequestPrompted = /*#__PURE__*/ new WeakSet();
/**
 * @internal
 */ var DeviceRequestPromptManager = /*#__PURE__*/ function() {
    "use strict";
    function DeviceRequestPromptManager(client, timeoutSettings) {
        var _this = this;
        _class_call_check(this, DeviceRequestPromptManager);
        _class_private_method_init(this, _onDeviceRequestPrompted);
        _class_private_field_init(this, _client1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _timeoutSettings1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _deviceRequestPrompDeferreds, {
            writable: true,
            value: new Set()
        });
        _class_private_field_set(this, _client1, client);
        _class_private_field_set(this, _timeoutSettings1, timeoutSettings);
        _class_private_field_get(this, _client1).on('DeviceAccess.deviceRequestPrompted', function(event) {
            _class_private_method_get(_this, _onDeviceRequestPrompted, onDeviceRequestPrompted).call(_this, event);
        });
        _class_private_field_get(this, _client1).on('Target.detachedFromTarget', function() {
            _class_private_field_set(_this, _client1, null);
        });
    }
    _create_class(DeviceRequestPromptManager, [
        {
            key: "waitForDevicePrompt",
            value: /**
     * Wait for device prompt created by an action like calling WebBluetooth's
     * requestDevice.
     */ function waitForDevicePrompt() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var needsEnable, enablePromise, _options_timeout, timeout, deferred, _ref, result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(_class_private_field_get(_this, _client1) !== null, 'Cannot wait for device prompt through detached session!');
                                needsEnable = _class_private_field_get(_this, _deviceRequestPrompDeferreds).size === 0;
                                if (needsEnable) {
                                    enablePromise = _class_private_field_get(_this, _client1).send('DeviceAccess.enable');
                                }
                                _options_timeout = options.timeout, timeout = _options_timeout === void 0 ? _class_private_field_get(_this, _timeoutSettings1).timeout() : _options_timeout;
                                deferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred.create({
                                    message: "Waiting for `DeviceRequestPrompt` failed: ".concat(timeout, "ms exceeded"),
                                    timeout: timeout
                                });
                                _class_private_field_get(_this, _deviceRequestPrompDeferreds).add(deferred);
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    ,
                                    3,
                                    4
                                ]);
                                return [
                                    4,
                                    Promise.all([
                                        deferred.valueOrThrow(),
                                        enablePromise
                                    ])
                                ];
                            case 2:
                                _ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    1
                                ]), result = _ref[0];
                                return [
                                    2,
                                    result
                                ];
                            case 3:
                                _class_private_field_get(_this, _deviceRequestPrompDeferreds).delete(deferred);
                                return [
                                    7
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return DeviceRequestPromptManager;
} //# sourceMappingURL=DeviceRequestPrompt.js.map
();
function onDeviceRequestPrompted(event) {
    if (!_class_private_field_get(this, _deviceRequestPrompDeferreds).size) {
        return;
    }
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(_class_private_field_get(this, _client1) !== null);
    var devicePrompt = new DeviceRequestPrompt(_class_private_field_get(this, _client1), _class_private_field_get(this, _timeoutSettings1), event);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _class_private_field_get(this, _deviceRequestPrompDeferreds)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var promise = _step.value;
            promise.resolve(devicePrompt);
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
    _class_private_field_get(this, _deviceRequestPrompDeferreds).clear();
}


}),

}]);