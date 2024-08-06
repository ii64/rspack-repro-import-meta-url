"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_CallbackRegistry_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/common/CallbackRegistry.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Callback: function() { return Callback; },
  CallbackRegistry: function() { return CallbackRegistry; },
  createIncrementalIdGenerator: function() { return createIncrementalIdGenerator; }
});
/* harmony import */var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/* harmony import */var _Errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
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




var _callbacks = /*#__PURE__*/ new WeakMap(), _idGenerator = /*#__PURE__*/ new WeakMap();
/**
 * Manages callbacks and their IDs for the protocol request/response communication.
 *
 * @internal
 */ var CallbackRegistry = /*#__PURE__*/ function() {
    "use strict";
    function CallbackRegistry() {
        _class_call_check(this, CallbackRegistry);
        _class_private_field_init(this, _callbacks, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _idGenerator, {
            writable: true,
            value: createIncrementalIdGenerator()
        });
    }
    _create_class(CallbackRegistry, [
        {
            key: "create",
            value: function create(label, timeout, request) {
                var _this = this;
                var callback = new Callback(_class_private_field_get(this, _idGenerator).call(this), label, timeout);
                _class_private_field_get(this, _callbacks).set(callback.id, callback);
                try {
                    request(callback.id);
                } catch (error) {
                    // We still throw sync errors synchronously and clean up the scheduled
                    // callback.
                    callback.promise.catch(_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError).finally(function() {
                        _class_private_field_get(_this, _callbacks).delete(callback.id);
                    });
                    callback.reject(error);
                    throw error;
                }
                // Must only have sync code up until here.
                return callback.promise.finally(function() {
                    _class_private_field_get(_this, _callbacks).delete(callback.id);
                });
            }
        },
        {
            key: "reject",
            value: function reject(id, message, originalMessage) {
                var callback = _class_private_field_get(this, _callbacks).get(id);
                if (!callback) {
                    return;
                }
                this._reject(callback, message, originalMessage);
            }
        },
        {
            key: "_reject",
            value: function _reject(callback, errorMessage, originalMessage) {
                var error;
                var message;
                if (_instanceof(errorMessage, _Errors_js__WEBPACK_IMPORTED_MODULE_2__.ProtocolError)) {
                    error = errorMessage;
                    error.cause = callback.error;
                    message = errorMessage.message;
                } else {
                    error = callback.error;
                    message = errorMessage;
                }
                callback.reject((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_1__.rewriteError)(error, "Protocol error (".concat(callback.label, "): ").concat(message), originalMessage));
            }
        },
        {
            key: "resolve",
            value: function resolve(id, value) {
                var callback = _class_private_field_get(this, _callbacks).get(id);
                if (!callback) {
                    return;
                }
                callback.resolve(value);
            }
        },
        {
            key: "clear",
            value: function clear() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _callbacks).values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var callback = _step.value;
                        // TODO: probably we can accept error messages as params.
                        this._reject(callback, new _Errors_js__WEBPACK_IMPORTED_MODULE_2__.TargetCloseError('Target closed'));
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
                _class_private_field_get(this, _callbacks).clear();
            }
        },
        {
            /**
     * @internal
     */ key: "getPendingProtocolErrors",
            value: function getPendingProtocolErrors() {
                var result = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _callbacks).values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var callback = _step.value;
                        result.push(new Error("".concat(callback.label, " timed out. Trace: ").concat(callback.error.stack)));
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
                return result;
            }
        }
    ]);
    return CallbackRegistry;
}();
var _id = /*#__PURE__*/ new WeakMap(), _error = /*#__PURE__*/ new WeakMap(), _deferred = /*#__PURE__*/ new WeakMap(), _timer = /*#__PURE__*/ new WeakMap(), _label = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var Callback = /*#__PURE__*/ function() {
    "use strict";
    function Callback(id, label, timeout) {
        var _this = this;
        _class_call_check(this, Callback);
        _class_private_field_init(this, _id, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _error, {
            writable: true,
            value: new _Errors_js__WEBPACK_IMPORTED_MODULE_2__.ProtocolError()
        });
        _class_private_field_init(this, _deferred, {
            writable: true,
            value: _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__.Deferred.create()
        });
        _class_private_field_init(this, _timer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _label, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _id, id);
        _class_private_field_set(this, _label, label);
        if (timeout) {
            _class_private_field_set(this, _timer, setTimeout(function() {
                _class_private_field_get(_this, _deferred).reject((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_1__.rewriteError)(_class_private_field_get(_this, _error), "".concat(label, " timed out. Increase the 'protocolTimeout' setting in launch/connect calls for a higher timeout if needed.")));
            }, timeout));
        }
    }
    _create_class(Callback, [
        {
            key: "resolve",
            value: function resolve(value) {
                clearTimeout(_class_private_field_get(this, _timer));
                _class_private_field_get(this, _deferred).resolve(value);
            }
        },
        {
            key: "reject",
            value: function reject(error) {
                clearTimeout(_class_private_field_get(this, _timer));
                _class_private_field_get(this, _deferred).reject(error);
            }
        },
        {
            key: "id",
            get: function get() {
                return _class_private_field_get(this, _id);
            }
        },
        {
            key: "promise",
            get: function get() {
                return _class_private_field_get(this, _deferred).valueOrThrow();
            }
        },
        {
            key: "error",
            get: function get() {
                return _class_private_field_get(this, _error);
            }
        },
        {
            key: "label",
            get: function get() {
                return _class_private_field_get(this, _label);
            }
        }
    ]);
    return Callback;
}();
/**
 * @internal
 */ function createIncrementalIdGenerator() {
    var id = 0;
    return function() {
        return ++id;
    };
} //# sourceMappingURL=CallbackRegistry.js.map


}),

}]);