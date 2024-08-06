"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_profiler_HeapSnapshotProxy_js"], {
"./entrypoints/heap_snapshot_worker/heap_snapshot_worker-entrypoint.js?3fd2": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "7bf3ce755b1c8de015b2.js";

}),
"./panels/profiler/HeapSnapshotProxy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HeapSnapshotLoaderProxy: function() { return HeapSnapshotLoaderProxy; },
  HeapSnapshotProviderProxy: function() { return HeapSnapshotProviderProxy; },
  HeapSnapshotProxy: function() { return HeapSnapshotProxy; },
  HeapSnapshotProxyObject: function() { return HeapSnapshotProxyObject; },
  HeapSnapshotWorkerProxy: function() { return HeapSnapshotWorkerProxy; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
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


var UIStrings = {
    /**
     *@description Text in Heap Snapshot Proxy of a profiler tool
     *@example {functionName} PH1
     */ anErrorOccurredWhenACallToMethod: 'An error occurred when a call to method \'\'{PH1}\'\' was requested'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/profiler/HeapSnapshotProxy.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var HeapSnapshotWorkerProxy = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(HeapSnapshotWorkerProxy, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(HeapSnapshotWorkerProxy);
    function HeapSnapshotWorkerProxy(eventHandler) {
        _class_call_check(this, HeapSnapshotWorkerProxy);
        var _this;
        _this = _super.call(this);
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _define_property(_assert_this_initialized(_this), "eventHandler", void 0);
        _define_property(_assert_this_initialized(_this), "nextObjectId", void 0);
        _define_property(_assert_this_initialized(_this), "nextCallId", void 0);
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _define_property(_assert_this_initialized(_this), "callbacks", void 0);
        _define_property(_assert_this_initialized(_this), "previousCallbacks", void 0);
        _define_property(_assert_this_initialized(_this), "worker", void 0);
        _define_property(_assert_this_initialized(_this), "interval", void 0);
        _this.eventHandler = eventHandler;
        _this.nextObjectId = 1;
        _this.nextCallId = 1;
        _this.callbacks = new Map();
        _this.previousCallbacks = new Set();
        _this.worker = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Worker.WorkerWrapper.fromURL(new URL(/* asset import */__webpack_require__(/*! ../../entrypoints/heap_snapshot_worker/heap_snapshot_worker-entrypoint.js */ "./entrypoints/heap_snapshot_worker/heap_snapshot_worker-entrypoint.js?3fd2"), __webpack_require__.b));
        _this.worker.onmessage = _this.messageReceived.bind(_assert_this_initialized(_this));
        return _this;
    }
    _create_class(HeapSnapshotWorkerProxy, [
        {
            key: "createLoader",
            value: function createLoader(profileUid, snapshotReceivedCallback) {
                var objectId = this.nextObjectId++;
                var proxy = new HeapSnapshotLoaderProxy(this, objectId, profileUid, snapshotReceivedCallback);
                this.postMessage({
                    callId: this.nextCallId++,
                    disposition: 'createLoader',
                    objectId: objectId
                });
                return proxy;
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                this.worker.terminate();
                if (this.interval) {
                    clearInterval(this.interval);
                }
            }
        },
        {
            key: "disposeObject",
            value: function disposeObject(objectId) {
                this.postMessage({
                    callId: this.nextCallId++,
                    disposition: 'dispose',
                    objectId: objectId
                });
            }
        },
        {
            key: "evaluateForTest",
            value: function evaluateForTest(script, callback) {
                var callId = this.nextCallId++;
                this.callbacks.set(callId, callback);
                this.postMessage({
                    callId: callId,
                    disposition: 'evaluateForTest',
                    source: script
                });
            }
        },
        {
            key: "callFactoryMethod",
            value: function callFactoryMethod(callback, objectId, methodName, proxyConstructor) {
                var _this = this;
                for(var _len = arguments.length, methodArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
                    methodArguments[_key - 4] = arguments[_key];
                }
                var callId = this.nextCallId++;
                var newObjectId = this.nextObjectId++;
                if (callback) {
                    this.callbacks.set(callId, function(remoteResult) {
                        callback(remoteResult ? new proxyConstructor(_this, newObjectId) : null);
                    });
                    this.postMessage({
                        callId: callId,
                        disposition: 'factory',
                        objectId: objectId,
                        methodName: methodName,
                        methodArguments: methodArguments,
                        newObjectId: newObjectId
                    });
                    return null;
                }
                this.postMessage({
                    callId: callId,
                    disposition: 'factory',
                    objectId: objectId,
                    methodName: methodName,
                    methodArguments: methodArguments,
                    newObjectId: newObjectId
                });
                return new proxyConstructor(this, newObjectId);
            }
        },
        {
            key: "callMethod",
            value: function callMethod(callback, objectId, methodName) {
                for(var _len = arguments.length, methodArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    methodArguments[_key - 3] = arguments[_key];
                }
                var callId = this.nextCallId++;
                if (callback) {
                    this.callbacks.set(callId, callback);
                }
                this.postMessage({
                    callId: callId,
                    disposition: 'method',
                    objectId: objectId,
                    methodName: methodName,
                    methodArguments: methodArguments
                });
            }
        },
        {
            key: "startCheckingForLongRunningCalls",
            value: function startCheckingForLongRunningCalls() {
                if (this.interval) {
                    return;
                }
                this.checkLongRunningCalls();
                this.interval = window.setInterval(this.checkLongRunningCalls.bind(this), 300);
            }
        },
        {
            key: "checkLongRunningCalls",
            value: function checkLongRunningCalls() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.previousCallbacks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var callId = _step.value;
                        if (!this.callbacks.has(callId)) {
                            this.previousCallbacks.delete(callId);
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
                var hasLongRunningCalls = Boolean(this.previousCallbacks.size);
                this.dispatchEventToListeners("Wait" /* HeapSnapshotWorkerProxy.Events.Wait */ , hasLongRunningCalls);
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = this.callbacks.keys()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var callId1 = _step1.value;
                        this.previousCallbacks.add(callId1);
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
        },
        {
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            key: "messageReceived",
            value: function messageReceived(event) {
                var data = event.data;
                if (data.eventName) {
                    if (this.eventHandler) {
                        this.eventHandler(data.eventName, data.data);
                    }
                    return;
                }
                if (data.error) {
                    if (data.errorMethodName) {
                        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error(i18nString(UIStrings.anErrorOccurredWhenACallToMethod, {
                            PH1: data.errorMethodName
                        }));
                    }
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error(data['errorCallStack']);
                    this.callbacks.delete(data.callId);
                    return;
                }
                var callback = this.callbacks.get(data.callId);
                if (!callback) {
                    return;
                }
                this.callbacks.delete(data.callId);
                callback(data.result);
            }
        },
        {
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            key: "postMessage",
            value: function postMessage(message) {
                this.worker.postMessage(message);
            }
        }
    ]);
    return HeapSnapshotWorkerProxy;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
var HeapSnapshotProxyObject = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshotProxyObject(worker, objectId) {
        _class_call_check(this, HeapSnapshotProxyObject);
        _define_property(this, "worker", void 0);
        _define_property(this, "objectId", void 0);
        this.worker = worker;
        this.objectId = objectId;
    }
    _create_class(HeapSnapshotProxyObject, [
        {
            key: "dispose",
            value: function dispose() {
                this.worker.disposeObject(this.objectId);
            }
        },
        {
            key: "disposeWorker",
            value: function disposeWorker() {
                this.worker.dispose();
            }
        },
        {
            key: "callFactoryMethod",
            value: function callFactoryMethod(methodName, proxyConstructor) {
                for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    args[_key - 2] = arguments[_key];
                }
                var _this_worker;
                return (_this_worker = this.worker).callFactoryMethod.apply(_this_worker, [
                    null,
                    String(this.objectId),
                    methodName,
                    proxyConstructor
                ].concat(_to_consumable_array(args)));
            }
        },
        {
            key: "callFactoryMethodPromise",
            value: function callFactoryMethodPromise(methodName, proxyConstructor) {
                var _this = this;
                for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    args[_key - 2] = arguments[_key];
                }
                var _this_worker;
                return new Promise(function(resolve) {
                    return (_this_worker = _this.worker).callFactoryMethod.apply(_this_worker, [
                        resolve,
                        String(_this.objectId),
                        methodName,
                        proxyConstructor
                    ].concat(_to_consumable_array(args)));
                });
            }
        },
        {
            key: "callMethodPromise",
            value: function callMethodPromise(methodName) {
                var _this = this;
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                var _this_worker;
                return new Promise(function(resolve) {
                    return (_this_worker = _this.worker).callMethod.apply(_this_worker, [
                        resolve,
                        String(_this.objectId),
                        methodName
                    ].concat(_to_consumable_array(args)));
                });
            }
        }
    ]);
    return HeapSnapshotProxyObject;
}();
var HeapSnapshotLoaderProxy = /*#__PURE__*/ function(HeapSnapshotProxyObject) {
    "use strict";
    _inherits(HeapSnapshotLoaderProxy, HeapSnapshotProxyObject);
    var _super = _create_super(HeapSnapshotLoaderProxy);
    function HeapSnapshotLoaderProxy(worker, objectId, profileUid, snapshotReceivedCallback) {
        _class_call_check(this, HeapSnapshotLoaderProxy);
        var _this;
        _this = _super.call(this, worker, objectId);
        _define_property(_assert_this_initialized(_this), "profileUid", void 0);
        _define_property(_assert_this_initialized(_this), "snapshotReceivedCallback", void 0);
        _this.profileUid = profileUid;
        _this.snapshotReceivedCallback = snapshotReceivedCallback;
        return _this;
    }
    _create_class(HeapSnapshotLoaderProxy, [
        {
            key: "write",
            value: function write(chunk) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.callMethodPromise('write', chunk)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "close",
            value: function close() {
                var _this = this;
                return _async_to_generator(function() {
                    var snapshotProxy;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.callMethodPromise('close')
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _this.callFactoryMethodPromise('buildSnapshot', HeapSnapshotProxy)
                                ];
                            case 2:
                                snapshotProxy = _state.sent();
                                _this.dispose();
                                // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                                // @ts-expect-error
                                snapshotProxy.setProfileUid(_this.profileUid);
                                return [
                                    4,
                                    snapshotProxy.updateStaticData()
                                ];
                            case 3:
                                _state.sent();
                                _this.snapshotReceivedCallback(snapshotProxy);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return HeapSnapshotLoaderProxy;
}(HeapSnapshotProxyObject);
var HeapSnapshotProxy = /*#__PURE__*/ function(HeapSnapshotProxyObject) {
    "use strict";
    _inherits(HeapSnapshotProxy, HeapSnapshotProxyObject);
    var _super = _create_super(HeapSnapshotProxy);
    function HeapSnapshotProxy(worker, objectId) {
        _class_call_check(this, HeapSnapshotProxy);
        var _this;
        _this = _super.call(this, worker, objectId);
        _define_property(_assert_this_initialized(_this), "staticData", void 0);
        _define_property(_assert_this_initialized(_this), "profileUid", void 0);
        _this.staticData = null;
        return _this;
    }
    _create_class(HeapSnapshotProxy, [
        {
            key: "search",
            value: function search(searchConfig, filter) {
                return this.callMethodPromise('search', searchConfig, filter);
            }
        },
        {
            key: "aggregatesWithFilter",
            value: function aggregatesWithFilter(filter) {
                return this.callMethodPromise('aggregatesWithFilter', filter);
            }
        },
        {
            key: "aggregatesForDiff",
            value: function aggregatesForDiff() {
                return this.callMethodPromise('aggregatesForDiff');
            }
        },
        {
            key: "calculateSnapshotDiff",
            value: function calculateSnapshotDiff(baseSnapshotId, baseSnapshotAggregates) {
                return this.callMethodPromise('calculateSnapshotDiff', baseSnapshotId, baseSnapshotAggregates);
            }
        },
        {
            key: "nodeClassName",
            value: function nodeClassName(snapshotObjectId) {
                return this.callMethodPromise('nodeClassName', snapshotObjectId);
            }
        },
        {
            key: "createEdgesProvider",
            value: function createEdgesProvider(nodeIndex) {
                return this.callFactoryMethod('createEdgesProvider', HeapSnapshotProviderProxy, nodeIndex);
            }
        },
        {
            key: "createRetainingEdgesProvider",
            value: function createRetainingEdgesProvider(nodeIndex) {
                return this.callFactoryMethod('createRetainingEdgesProvider', HeapSnapshotProviderProxy, nodeIndex);
            }
        },
        {
            key: "createAddedNodesProvider",
            value: function createAddedNodesProvider(baseSnapshotId, className) {
                return this.callFactoryMethod('createAddedNodesProvider', HeapSnapshotProviderProxy, baseSnapshotId, className);
            }
        },
        {
            key: "createDeletedNodesProvider",
            value: function createDeletedNodesProvider(nodeIndexes) {
                return this.callFactoryMethod('createDeletedNodesProvider', HeapSnapshotProviderProxy, nodeIndexes);
            }
        },
        {
            key: "createNodesProvider",
            value: function createNodesProvider(filter) {
                return this.callFactoryMethod('createNodesProvider', HeapSnapshotProviderProxy, filter);
            }
        },
        {
            key: "createNodesProviderForClass",
            value: function createNodesProviderForClass(className, nodeFilter) {
                return this.callFactoryMethod('createNodesProviderForClass', HeapSnapshotProviderProxy, className, nodeFilter);
            }
        },
        {
            key: "allocationTracesTops",
            value: function allocationTracesTops() {
                return this.callMethodPromise('allocationTracesTops');
            }
        },
        {
            key: "allocationNodeCallers",
            value: function allocationNodeCallers(nodeId) {
                return this.callMethodPromise('allocationNodeCallers', nodeId);
            }
        },
        {
            key: "allocationStack",
            value: function allocationStack(nodeIndex) {
                return this.callMethodPromise('allocationStack', nodeIndex);
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                throw new Error('Should never be called');
            }
        },
        {
            key: "nodeCount",
            get: function get() {
                if (!this.staticData) {
                    return 0;
                }
                return this.staticData.nodeCount;
            }
        },
        {
            key: "rootNodeIndex",
            get: function get() {
                if (!this.staticData) {
                    return 0;
                }
                return this.staticData.rootNodeIndex;
            }
        },
        {
            key: "updateStaticData",
            value: function updateStaticData() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.callMethodPromise('updateStaticData')
                                ];
                            case 1:
                                _this.staticData = _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getStatistics",
            value: function getStatistics() {
                return this.callMethodPromise('getStatistics');
            }
        },
        {
            key: "getLocation",
            value: function getLocation(nodeIndex) {
                return this.callMethodPromise('getLocation', nodeIndex);
            }
        },
        {
            key: "getSamples",
            value: function getSamples() {
                return this.callMethodPromise('getSamples');
            }
        },
        {
            key: "ignoreNodeInRetainersView",
            value: function ignoreNodeInRetainersView(nodeIndex) {
                return this.callMethodPromise('ignoreNodeInRetainersView', nodeIndex);
            }
        },
        {
            key: "unignoreNodeInRetainersView",
            value: function unignoreNodeInRetainersView(nodeIndex) {
                return this.callMethodPromise('unignoreNodeInRetainersView', nodeIndex);
            }
        },
        {
            key: "unignoreAllNodesInRetainersView",
            value: function unignoreAllNodesInRetainersView() {
                return this.callMethodPromise('unignoreAllNodesInRetainersView');
            }
        },
        {
            key: "areNodesIgnoredInRetainersView",
            value: function areNodesIgnoredInRetainersView() {
                return this.callMethodPromise('areNodesIgnoredInRetainersView');
            }
        },
        {
            key: "totalSize",
            get: function get() {
                if (!this.staticData) {
                    return 0;
                }
                return this.staticData.totalSize;
            }
        },
        {
            key: "uid",
            get: function get() {
                return this.profileUid;
            }
        },
        {
            key: "setProfileUid",
            value: function setProfileUid(profileUid) {
                this.profileUid = profileUid;
            }
        },
        {
            key: "maxJSObjectId",
            value: function maxJSObjectId() {
                if (!this.staticData) {
                    return 0;
                }
                return this.staticData.maxJSObjectId;
            }
        }
    ]);
    return HeapSnapshotProxy;
}(HeapSnapshotProxyObject);
var HeapSnapshotProviderProxy = /*#__PURE__*/ function(HeapSnapshotProxyObject) {
    "use strict";
    _inherits(HeapSnapshotProviderProxy, HeapSnapshotProxyObject);
    var _super = _create_super(HeapSnapshotProviderProxy);
    function HeapSnapshotProviderProxy(worker, objectId) {
        _class_call_check(this, HeapSnapshotProviderProxy);
        return _super.call(this, worker, objectId);
    }
    _create_class(HeapSnapshotProviderProxy, [
        {
            key: "nodePosition",
            value: function nodePosition(snapshotObjectId) {
                return this.callMethodPromise('nodePosition', snapshotObjectId);
            }
        },
        {
            key: "isEmpty",
            value: function isEmpty() {
                return this.callMethodPromise('isEmpty');
            }
        },
        {
            key: "serializeItemsRange",
            value: function serializeItemsRange(startPosition, endPosition) {
                return this.callMethodPromise('serializeItemsRange', startPosition, endPosition);
            }
        },
        {
            key: "sortAndRewind",
            value: function sortAndRewind(comparator) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.callMethodPromise('sortAndRewind', comparator)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return HeapSnapshotProviderProxy;
} //# sourceMappingURL=HeapSnapshotProxy.js.map
(HeapSnapshotProxyObject);


}),

}]);