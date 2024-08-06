"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_FrameManager_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/CdpPreloadScript.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CdpPreloadScript: function() { return CdpPreloadScript; }
});
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @internal
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
var /**
     * This is the ID of the preload script returned by
     * Page.addScriptToEvaluateOnNewDocument in the main frame.
     *
     * Sub-frames would get a different CDP ID because
     * addScriptToEvaluateOnNewDocument is called for each subframe. But
     * users only see this ID and subframe IDs are internal to Puppeteer.
     */ _id = /*#__PURE__*/ new WeakMap(), _source = /*#__PURE__*/ new WeakMap(), _frameToId = /*#__PURE__*/ new WeakMap();
var CdpPreloadScript = /*#__PURE__*/ function() {
    "use strict";
    function CdpPreloadScript(mainFrame, id, source) {
        _class_call_check(this, CdpPreloadScript);
        _class_private_field_init(this, _id, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _source, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _frameToId, {
            writable: true,
            value: new WeakMap()
        });
        _class_private_field_set(this, _id, id);
        _class_private_field_set(this, _source, source);
        _class_private_field_get(this, _frameToId).set(mainFrame, id);
    }
    _create_class(CdpPreloadScript, [
        {
            key: "id",
            get: function get() {
                return _class_private_field_get(this, _id);
            }
        },
        {
            key: "source",
            get: function get() {
                return _class_private_field_get(this, _source);
            }
        },
        {
            key: "getIdForFrame",
            value: function getIdForFrame(frame) {
                return _class_private_field_get(this, _frameToId).get(frame);
            }
        },
        {
            key: "setIdForFrame",
            value: function setIdForFrame(frame, identifier) {
                _class_private_field_get(this, _frameToId).set(frame, identifier);
            }
        }
    ]);
    return CdpPreloadScript;
} //# sourceMappingURL=CdpPreloadScript.js.map
();


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManager.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FrameManager: function() { return FrameManager; }
});
/* harmony import */var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */var _api_Frame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Frame.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Frame.js");
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/* harmony import */var _CdpPreloadScript_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CdpPreloadScript.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/CdpPreloadScript.js");
/* harmony import */var _CDPSession_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/CDPSession.js");
/* harmony import */var _Connection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Connection.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Connection.js");
/* harmony import */var _DeviceRequestPrompt_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DeviceRequestPrompt.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/DeviceRequestPrompt.js");
/* harmony import */var _ExecutionContext_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ExecutionContext.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ExecutionContext.js");
/* harmony import */var _Frame_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Frame.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Frame.js");
/* harmony import */var _FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FrameManagerEvents.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManagerEvents.js");
/* harmony import */var _FrameTree_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FrameTree.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameTree.js");
/* harmony import */var _IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./IsolatedWorlds.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/IsolatedWorlds.js");
/* harmony import */var _NetworkManager_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./NetworkManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/NetworkManager.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
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


















var TIME_FOR_WAITING_FOR_SWAP = 100; // ms.
var _page = /*#__PURE__*/ new WeakMap(), _networkManager = /*#__PURE__*/ new WeakMap(), _timeoutSettings = /*#__PURE__*/ new WeakMap(), _isolatedWorlds = /*#__PURE__*/ new WeakMap(), _client = /*#__PURE__*/ new WeakMap(), _scriptsToEvaluateOnNewDocument = /*#__PURE__*/ new WeakMap(), _bindings = /*#__PURE__*/ new WeakMap(), /**
     * Set of frame IDs stored to indicate if a frame has received a
     * frameNavigated event so that frame tree responses could be ignored as the
     * frameNavigated event usually contains the latest information.
     */ _frameNavigatedReceived = /*#__PURE__*/ new WeakMap(), _deviceRequestPromptManagerMap = /*#__PURE__*/ new WeakMap(), _frameTreeHandled = /*#__PURE__*/ new WeakMap(), _onClientDisconnect = /*#__PURE__*/ new WeakSet(), _onLifecycleEvent = /*#__PURE__*/ new WeakSet(), _onFrameStartedLoading = /*#__PURE__*/ new WeakSet(), _onFrameStoppedLoading = /*#__PURE__*/ new WeakSet(), _handleFrameTree = /*#__PURE__*/ new WeakSet(), _onFrameAttached = /*#__PURE__*/ new WeakSet(), _onFrameNavigated = /*#__PURE__*/ new WeakSet(), _createIsolatedWorld = /*#__PURE__*/ new WeakSet(), _onFrameNavigatedWithinDocument = /*#__PURE__*/ new WeakSet(), _onFrameDetached = /*#__PURE__*/ new WeakSet(), _onExecutionContextCreated = /*#__PURE__*/ new WeakSet(), _removeFramesRecursively = /*#__PURE__*/ new WeakSet();
/**
 * A frame manager manages the frames for a given {@link Page | page}.
 *
 * @internal
 */ var FrameManager = /*#__PURE__*/ function(EventEmitter) {
    "use strict";
    _inherits(FrameManager, EventEmitter);
    var _super = _create_super(FrameManager);
    function FrameManager(client, page, timeoutSettings) {
        _class_call_check(this, FrameManager);
        var _this;
        _this = _super.call(this);
        /**
     * Called when the frame's client is disconnected. We don't know if the
     * disconnect means that the frame is removed or if it will be replaced by a
     * new frame. Therefore, we wait for a swap event.
     */ _class_private_method_init(_assert_this_initialized(_this), _onClientDisconnect);
        _class_private_method_init(_assert_this_initialized(_this), _onLifecycleEvent);
        _class_private_method_init(_assert_this_initialized(_this), _onFrameStartedLoading);
        _class_private_method_init(_assert_this_initialized(_this), _onFrameStoppedLoading);
        _class_private_method_init(_assert_this_initialized(_this), _handleFrameTree);
        _class_private_method_init(_assert_this_initialized(_this), _onFrameAttached);
        _class_private_method_init(_assert_this_initialized(_this), _onFrameNavigated);
        _class_private_method_init(_assert_this_initialized(_this), _createIsolatedWorld);
        _class_private_method_init(_assert_this_initialized(_this), _onFrameNavigatedWithinDocument);
        _class_private_method_init(_assert_this_initialized(_this), _onFrameDetached);
        _class_private_method_init(_assert_this_initialized(_this), _onExecutionContextCreated);
        _class_private_method_init(_assert_this_initialized(_this), _removeFramesRecursively);
        _class_private_field_init(_assert_this_initialized(_this), _page, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _networkManager, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _timeoutSettings, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _isolatedWorlds, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _client, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _scriptsToEvaluateOnNewDocument, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _bindings, {
            writable: true,
            value: new Set()
        });
        _define_property(_assert_this_initialized(_this), "_frameTree", new _FrameTree_js__WEBPACK_IMPORTED_MODULE_15__.FrameTree());
        _class_private_field_init(_assert_this_initialized(_this), _frameNavigatedReceived, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _deviceRequestPromptManagerMap, {
            writable: true,
            value: new WeakMap()
        });
        _class_private_field_init(_assert_this_initialized(_this), _frameTreeHandled, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _client, client);
        _class_private_field_set(_assert_this_initialized(_this), _page, page);
        _class_private_field_set(_assert_this_initialized(_this), _networkManager, new _NetworkManager_js__WEBPACK_IMPORTED_MODULE_17__.NetworkManager(_assert_this_initialized(_this)));
        _class_private_field_set(_assert_this_initialized(_this), _timeoutSettings, timeoutSettings);
        _this.setupEventListeners(_class_private_field_get(_assert_this_initialized(_this), _client));
        client.once(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected, function() {
            _class_private_method_get(_this, _onClientDisconnect, onClientDisconnect).call(_this).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
        });
        return _this;
    }
    _create_class(FrameManager, [
        {
            key: "timeoutSettings",
            get: function get() {
                return _class_private_field_get(this, _timeoutSettings);
            }
        },
        {
            key: "networkManager",
            get: function get() {
                return _class_private_field_get(this, _networkManager);
            }
        },
        {
            key: "client",
            get: function get() {
                return _class_private_field_get(this, _client);
            }
        },
        {
            key: "swapFrameTree",
            value: /**
     * When the main frame is replaced by another main frame,
     * we maintain the main frame object identity while updating
     * its frame tree and ID.
     */ function swapFrameTree(client) {
                var _this = this;
                return _async_to_generator(function() {
                    var frame;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _class_private_field_set(_this, _client, client);
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_4__.assert)(_instanceof(_class_private_field_get(_this, _client), _CDPSession_js__WEBPACK_IMPORTED_MODULE_9__.CdpCDPSession), 'CDPSession is not an instance of CDPSessionImpl.');
                                frame = _this._frameTree.getMainFrame();
                                if (frame) {
                                    _class_private_field_get(_this, _frameNavigatedReceived).add(_class_private_field_get(_this, _client)._target()._targetId);
                                    _this._frameTree.removeFrame(frame);
                                    frame.updateId(_class_private_field_get(_this, _client)._target()._targetId);
                                    _this._frameTree.addFrame(frame);
                                    frame.updateClient(client);
                                }
                                _this.setupEventListeners(client);
                                client.once(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected, function() {
                                    _class_private_method_get(_this, _onClientDisconnect, onClientDisconnect).call(_this).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
                                });
                                return [
                                    4,
                                    _this.initialize(client, frame)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _class_private_field_get(_this, _networkManager).addClient(client)
                                ];
                            case 2:
                                _state.sent();
                                if (frame) {
                                    frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameSwappedByActivation, undefined);
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "registerSpeculativeSession",
            value: function registerSpeculativeSession(client) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _networkManager).addClient(client)
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
            key: "setupEventListeners",
            value: function setupEventListeners(session) {
                var _this = this;
                session.on('Page.frameAttached', function() {
                    var _ref = _async_to_generator(function(event) {
                        var _$_class_private_field_get;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        (_$_class_private_field_get = _class_private_field_get(_this, _frameTreeHandled)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.valueOrThrow()
                                    ];
                                case 1:
                                    _state.sent();
                                    _class_private_method_get(_this, _onFrameAttached, onFrameAttached).call(_this, session, event.frameId, event.parentFrameId);
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return function(event) {
                        return _ref.apply(this, arguments);
                    };
                }());
                var _this1 = this;
                session.on('Page.frameNavigated', function() {
                    var _ref = _async_to_generator(function(event) {
                        var _$_class_private_field_get;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _class_private_field_get(_this1, _frameNavigatedReceived).add(event.frame.id);
                                    return [
                                        4,
                                        (_$_class_private_field_get = _class_private_field_get(_this1, _frameTreeHandled)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.valueOrThrow()
                                    ];
                                case 1:
                                    _state.sent();
                                    void _class_private_method_get(_this1, _onFrameNavigated, onFrameNavigated).call(_this1, event.frame, event.type);
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return function(event) {
                        return _ref.apply(this, arguments);
                    };
                }());
                var _this2 = this;
                session.on('Page.navigatedWithinDocument', function() {
                    var _ref = _async_to_generator(function(event) {
                        var _$_class_private_field_get;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        (_$_class_private_field_get = _class_private_field_get(_this2, _frameTreeHandled)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.valueOrThrow()
                                    ];
                                case 1:
                                    _state.sent();
                                    _class_private_method_get(_this2, _onFrameNavigatedWithinDocument, onFrameNavigatedWithinDocument).call(_this2, event.frameId, event.url);
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return function(event) {
                        return _ref.apply(this, arguments);
                    };
                }());
                var _this3 = this;
                session.on('Page.frameDetached', function() {
                    var _ref = _async_to_generator(function(event) {
                        var _$_class_private_field_get;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        (_$_class_private_field_get = _class_private_field_get(_this3, _frameTreeHandled)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.valueOrThrow()
                                    ];
                                case 1:
                                    _state.sent();
                                    _class_private_method_get(_this3, _onFrameDetached, onFrameDetached).call(_this3, event.frameId, event.reason);
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return function(event) {
                        return _ref.apply(this, arguments);
                    };
                }());
                var _this4 = this;
                session.on('Page.frameStartedLoading', function() {
                    var _ref = _async_to_generator(function(event) {
                        var _$_class_private_field_get;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        (_$_class_private_field_get = _class_private_field_get(_this4, _frameTreeHandled)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.valueOrThrow()
                                    ];
                                case 1:
                                    _state.sent();
                                    _class_private_method_get(_this4, _onFrameStartedLoading, onFrameStartedLoading).call(_this4, event.frameId);
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return function(event) {
                        return _ref.apply(this, arguments);
                    };
                }());
                var _this5 = this;
                session.on('Page.frameStoppedLoading', function() {
                    var _ref = _async_to_generator(function(event) {
                        var _$_class_private_field_get;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        (_$_class_private_field_get = _class_private_field_get(_this5, _frameTreeHandled)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.valueOrThrow()
                                    ];
                                case 1:
                                    _state.sent();
                                    _class_private_method_get(_this5, _onFrameStoppedLoading, onFrameStoppedLoading).call(_this5, event.frameId);
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return function(event) {
                        return _ref.apply(this, arguments);
                    };
                }());
                var _this6 = this;
                session.on('Runtime.executionContextCreated', function() {
                    var _ref = _async_to_generator(function(event) {
                        var _$_class_private_field_get;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        (_$_class_private_field_get = _class_private_field_get(_this6, _frameTreeHandled)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.valueOrThrow()
                                    ];
                                case 1:
                                    _state.sent();
                                    _class_private_method_get(_this6, _onExecutionContextCreated, onExecutionContextCreated).call(_this6, event.context, session);
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return function(event) {
                        return _ref.apply(this, arguments);
                    };
                }());
                var _this7 = this;
                session.on('Page.lifecycleEvent', function() {
                    var _ref = _async_to_generator(function(event) {
                        var _$_class_private_field_get;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        (_$_class_private_field_get = _class_private_field_get(_this7, _frameTreeHandled)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.valueOrThrow()
                                    ];
                                case 1:
                                    _state.sent();
                                    _class_private_method_get(_this7, _onLifecycleEvent, onLifecycleEvent).call(_this7, event);
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return function(event) {
                        return _ref.apply(this, arguments);
                    };
                }());
            }
        },
        {
            key: "initialize",
            value: function initialize(client, frame) {
                var _this = this;
                return _async_to_generator(function() {
                    var _$_class_private_field_get, error, _$_class_private_field_get1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                (_$_class_private_field_get = _class_private_field_get(_this, _frameTreeHandled)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.resolve();
                                _class_private_field_set(_this, _frameTreeHandled, _util_Deferred_js__WEBPACK_IMPORTED_MODULE_5__.Deferred.create());
                                // We need to schedule all these commands while the target is paused,
                                // therefore, it needs to happen synchroniously. At the same time we
                                // should not start processing execution context and frame events before
                                // we received the initial information about the frame tree.
                                return [
                                    4,
                                    Promise.all([
                                        _class_private_field_get(_this, _networkManager).addClient(client),
                                        client.send('Page.enable'),
                                        client.send('Page.getFrameTree').then(function(param) {
                                            var frameTree = param.frameTree;
                                            var _$_class_private_field_get;
                                            _class_private_method_get(_this, _handleFrameTree, handleFrameTree).call(_this, client, frameTree);
                                            (_$_class_private_field_get = _class_private_field_get(_this, _frameTreeHandled)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.resolve();
                                        }),
                                        client.send('Page.setLifecycleEventsEnabled', {
                                            enabled: true
                                        }),
                                        client.send('Runtime.enable').then(function() {
                                            return _class_private_method_get(_this, _createIsolatedWorld, createIsolatedWorld).call(_this, client, _common_util_js__WEBPACK_IMPORTED_MODULE_3__.UTILITY_WORLD_NAME);
                                        })
                                    ].concat(_to_consumable_array((frame ? Array.from(_class_private_field_get(_this, _scriptsToEvaluateOnNewDocument).values()) : []).map(function(script) {
                                        return frame === null || frame === void 0 ? void 0 : frame.addPreloadScript(script);
                                    })), _to_consumable_array((frame ? Array.from(_class_private_field_get(_this, _bindings).values()) : []).map(function(binding) {
                                        return frame === null || frame === void 0 ? void 0 : frame.addExposedFunctionBinding(binding);
                                    }))))
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                error = _state.sent();
                                (_$_class_private_field_get1 = _class_private_field_get(_this, _frameTreeHandled)) === null || _$_class_private_field_get1 === void 0 ? void 0 : _$_class_private_field_get1.resolve();
                                // The target might have been closed before the initialization finished.
                                if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_7__.isErrorLike)(error) && (0,_Connection_js__WEBPACK_IMPORTED_MODULE_10__.isTargetClosedError)(error)) {
                                    return [
                                        2
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "page",
            value: function page() {
                return _class_private_field_get(this, _page);
            }
        },
        {
            key: "mainFrame",
            value: function mainFrame() {
                var mainFrame = this._frameTree.getMainFrame();
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_4__.assert)(mainFrame, 'Requesting main frame too early!');
                return mainFrame;
            }
        },
        {
            key: "frames",
            value: function frames() {
                return Array.from(this._frameTree.frames());
            }
        },
        {
            key: "frame",
            value: function frame(frameId) {
                return this._frameTree.getById(frameId) || null;
            }
        },
        {
            key: "addExposedFunctionBinding",
            value: function addExposedFunctionBinding(binding) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _class_private_field_get(_this, _bindings).add(binding);
                                return [
                                    4,
                                    Promise.all(_this.frames().map(function() {
                                        var _ref = _async_to_generator(function(frame) {
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            frame.addExposedFunctionBinding(binding)
                                                        ];
                                                    case 1:
                                                        return [
                                                            2,
                                                            _state.sent()
                                                        ];
                                                }
                                            });
                                        });
                                        return function(frame) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }()))
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
            key: "removeExposedFunctionBinding",
            value: function removeExposedFunctionBinding(binding) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _class_private_field_get(_this, _bindings).delete(binding);
                                return [
                                    4,
                                    Promise.all(_this.frames().map(function() {
                                        var _ref = _async_to_generator(function(frame) {
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            frame.removeExposedFunctionBinding(binding)
                                                        ];
                                                    case 1:
                                                        return [
                                                            2,
                                                            _state.sent()
                                                        ];
                                                }
                                            });
                                        });
                                        return function(frame) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }()))
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
            key: "evaluateOnNewDocument",
            value: function evaluateOnNewDocument(source) {
                var _this = this;
                return _async_to_generator(function() {
                    var identifier, preloadScript;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.mainFrame()._client().send('Page.addScriptToEvaluateOnNewDocument', {
                                        source: source
                                    })
                                ];
                            case 1:
                                identifier = _state.sent().identifier;
                                preloadScript = new _CdpPreloadScript_js__WEBPACK_IMPORTED_MODULE_8__.CdpPreloadScript(_this.mainFrame(), identifier, source);
                                _class_private_field_get(_this, _scriptsToEvaluateOnNewDocument).set(identifier, preloadScript);
                                return [
                                    4,
                                    Promise.all(_this.frames().map(function() {
                                        var _ref = _async_to_generator(function(frame) {
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            frame.addPreloadScript(preloadScript)
                                                        ];
                                                    case 1:
                                                        return [
                                                            2,
                                                            _state.sent()
                                                        ];
                                                }
                                            });
                                        });
                                        return function(frame) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }()))
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2,
                                    {
                                        identifier: identifier
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "removeScriptToEvaluateOnNewDocument",
            value: function removeScriptToEvaluateOnNewDocument(identifier) {
                var _this = this;
                return _async_to_generator(function() {
                    var preloadScript;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                preloadScript = _class_private_field_get(_this, _scriptsToEvaluateOnNewDocument).get(identifier);
                                if (!preloadScript) {
                                    throw new Error("Script to evaluate on new document with id ".concat(identifier, " not found"));
                                }
                                _class_private_field_get(_this, _scriptsToEvaluateOnNewDocument).delete(identifier);
                                return [
                                    4,
                                    Promise.all(_this.frames().map(function(frame) {
                                        var _$identifier = preloadScript.getIdForFrame(frame);
                                        if (!_$identifier) {
                                            return;
                                        }
                                        return frame._client().send('Page.removeScriptToEvaluateOnNewDocument', {
                                            identifier: _$identifier
                                        }).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
                                    }))
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
            key: "onAttachedToTarget",
            value: function onAttachedToTarget(target) {
                if (target._getTargetInfo().type !== 'iframe') {
                    return;
                }
                var frame = this.frame(target._getTargetInfo().targetId);
                if (frame) {
                    frame.updateClient(target._session());
                }
                this.setupEventListeners(target._session());
                void this.initialize(target._session(), frame);
            }
        },
        {
            key: "_deviceRequestPromptManager",
            value: function _deviceRequestPromptManager(client) {
                var manager = _class_private_field_get(this, _deviceRequestPromptManagerMap).get(client);
                if (manager === undefined) {
                    manager = new _DeviceRequestPrompt_js__WEBPACK_IMPORTED_MODULE_11__.DeviceRequestPromptManager(client, _class_private_field_get(this, _timeoutSettings));
                    _class_private_field_get(this, _deviceRequestPromptManagerMap).set(client, manager);
                }
                return manager;
            }
        }
    ]);
    return FrameManager;
} //# sourceMappingURL=FrameManager.js.map
(_common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__.EventEmitter);
function onClientDisconnect() {
    return _onClientDisconnect1.apply(this, arguments);
}
function _onClientDisconnect1() {
    _onClientDisconnect1 = _async_to_generator(function() {
        var mainFrame, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, child, swapped, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    mainFrame = this._frameTree.getMainFrame();
                    if (!mainFrame) {
                        return [
                            2
                        ];
                    }
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = mainFrame.childFrames()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            child = _step.value;
                            _class_private_method_get(this, _removeFramesRecursively, removeFramesRecursively).call(this, child);
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
                    swapped = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_5__.Deferred.create({
                        timeout: TIME_FOR_WAITING_FOR_SWAP,
                        message: 'Frame was not swapped'
                    });
                    mainFrame.once(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameSwappedByActivation, function() {
                        swapped.resolve();
                    });
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        swapped.valueOrThrow()
                    ];
                case 2:
                    _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    err = _state.sent();
                    _class_private_method_get(this, _removeFramesRecursively, removeFramesRecursively).call(this, mainFrame);
                    return [
                        3,
                        4
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return _onClientDisconnect1.apply(this, arguments);
}
function onLifecycleEvent(event) {
    var frame = this.frame(event.frameId);
    if (!frame) {
        return;
    }
    frame._onLifecycleEvent(event.loaderId, event.name);
    this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.LifecycleEvent, frame);
    frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.LifecycleEvent, undefined);
}
function onFrameStartedLoading(frameId) {
    var frame = this.frame(frameId);
    if (!frame) {
        return;
    }
    frame._onLoadingStarted();
}
function onFrameStoppedLoading(frameId) {
    var frame = this.frame(frameId);
    if (!frame) {
        return;
    }
    frame._onLoadingStopped();
    this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.LifecycleEvent, frame);
    frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.LifecycleEvent, undefined);
}
function handleFrameTree(session, frameTree) {
    if (frameTree.frame.parentId) {
        _class_private_method_get(this, _onFrameAttached, onFrameAttached).call(this, session, frameTree.frame.id, frameTree.frame.parentId);
    }
    if (!_class_private_field_get(this, _frameNavigatedReceived).has(frameTree.frame.id)) {
        void _class_private_method_get(this, _onFrameNavigated, onFrameNavigated).call(this, frameTree.frame, 'Navigation');
    } else {
        _class_private_field_get(this, _frameNavigatedReceived).delete(frameTree.frame.id);
    }
    if (!frameTree.childFrames) {
        return;
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = frameTree.childFrames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var child = _step.value;
            _class_private_method_get(this, _handleFrameTree, handleFrameTree).call(this, session, child);
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
function onFrameAttached(session, frameId, parentFrameId) {
    var frame = this.frame(frameId);
    if (frame) {
        if (session && frame.isOOPFrame()) {
            // If an OOP iframes becomes a normal iframe again
            // it is first attached to the parent page before
            // the target is removed.
            frame.updateClient(session);
        }
        return;
    }
    frame = new _Frame_js__WEBPACK_IMPORTED_MODULE_13__.CdpFrame(this, frameId, parentFrameId, session);
    this._frameTree.addFrame(frame);
    this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.FrameAttached, frame);
}
function onFrameNavigated(framePayload, navigationType) {
    return _onFrameNavigated1.apply(this, arguments);
}
function _onFrameNavigated1() {
    _onFrameNavigated1 = _async_to_generator(function(framePayload, navigationType) {
        var frameId, isMainFrame, frame, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, child;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    frameId = framePayload.id;
                    isMainFrame = !framePayload.parentId;
                    frame = this._frameTree.getById(frameId);
                    // Detach all child frames first.
                    if (frame) {
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = frame.childFrames()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                child = _step.value;
                                _class_private_method_get(this, _removeFramesRecursively, removeFramesRecursively).call(this, child);
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
                    // Update or create main frame.
                    if (isMainFrame) {
                        if (frame) {
                            // Update frame id to retain frame identity on cross-process navigation.
                            this._frameTree.removeFrame(frame);
                            frame._id = frameId;
                        } else {
                            // Initial main frame navigation.
                            frame = new _Frame_js__WEBPACK_IMPORTED_MODULE_13__.CdpFrame(this, frameId, undefined, _class_private_field_get(this, _client));
                        }
                        this._frameTree.addFrame(frame);
                    }
                    return [
                        4,
                        this._frameTree.waitForFrame(frameId)
                    ];
                case 1:
                    frame = _state.sent();
                    frame._navigated(framePayload);
                    this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.FrameNavigated, frame);
                    frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameNavigated, navigationType);
                    return [
                        2
                    ];
            }
        });
    });
    return _onFrameNavigated1.apply(this, arguments);
}
function createIsolatedWorld(session, name) {
    return _createIsolatedWorld1.apply(this, arguments);
}
function _createIsolatedWorld1() {
    _createIsolatedWorld1 = _async_to_generator(function(session, name) {
        var key;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    key = "".concat(session.id(), ":").concat(name);
                    if (_class_private_field_get(this, _isolatedWorlds).has(key)) {
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        session.send('Page.addScriptToEvaluateOnNewDocument', {
                            source: "//# sourceURL=".concat(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.PuppeteerURL.INTERNAL_URL),
                            worldName: name
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        Promise.all(this.frames().filter(function(frame) {
                            return frame.client === session;
                        }).map(function(frame) {
                            // Frames might be removed before we send this, so we don't want to
                            // throw an error.
                            return session.send('Page.createIsolatedWorld', {
                                frameId: frame._id,
                                worldName: name,
                                grantUniveralAccess: true
                            }).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
                        }))
                    ];
                case 2:
                    _state.sent();
                    _class_private_field_get(this, _isolatedWorlds).add(key);
                    return [
                        2
                    ];
            }
        });
    });
    return _createIsolatedWorld1.apply(this, arguments);
}
function onFrameNavigatedWithinDocument(frameId, url) {
    var frame = this.frame(frameId);
    if (!frame) {
        return;
    }
    frame._navigatedWithinDocument(url);
    this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.FrameNavigatedWithinDocument, frame);
    frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameNavigatedWithinDocument, undefined);
    this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.FrameNavigated, frame);
    frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameNavigated, 'Navigation');
}
function onFrameDetached(frameId, reason) {
    var frame = this.frame(frameId);
    if (!frame) {
        return;
    }
    switch(reason){
        case 'remove':
            // Only remove the frame if the reason for the detached event is
            // an actual removement of the frame.
            // For frames that become OOP iframes, the reason would be 'swap'.
            _class_private_method_get(this, _removeFramesRecursively, removeFramesRecursively).call(this, frame);
            break;
        case 'swap':
            this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.FrameSwapped, frame);
            frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameSwapped, undefined);
            break;
    }
}
function onExecutionContextCreated(contextPayload, session) {
    var auxData = contextPayload.auxData;
    var frameId = auxData && auxData.frameId;
    var frame = typeof frameId === 'string' ? this.frame(frameId) : undefined;
    var world;
    if (frame) {
        // Only care about execution contexts created for the current session.
        if (frame.client !== session) {
            return;
        }
        if (contextPayload.auxData && contextPayload.auxData['isDefault']) {
            world = frame.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_16__.MAIN_WORLD];
        } else if (contextPayload.name === _common_util_js__WEBPACK_IMPORTED_MODULE_3__.UTILITY_WORLD_NAME) {
            // In case of multiple sessions to the same target, there's a race between
            // connections so we might end up creating multiple isolated worlds.
            // We can use either.
            world = frame.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_16__.PUPPETEER_WORLD];
        }
    }
    // If there is no world, the context is not meant to be handled by us.
    if (!world) {
        return;
    }
    var context = new _ExecutionContext_js__WEBPACK_IMPORTED_MODULE_12__.ExecutionContext((frame === null || frame === void 0 ? void 0 : frame.client) || _class_private_field_get(this, _client), contextPayload, world);
    world.setContext(context);
}
function removeFramesRecursively(frame) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = frame.childFrames()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var child = _step.value;
            _class_private_method_get(this, _removeFramesRecursively, removeFramesRecursively).call(this, child);
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
    frame[_util_disposable_js__WEBPACK_IMPORTED_MODULE_6__.disposeSymbol]();
    this._frameTree.removeFrame(frame);
    this.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_14__.FrameManagerEvent.FrameDetached, frame);
    frame.emit(_api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.FrameEvent.FrameDetached, frame);
}


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameTree.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FrameTree: function() { return FrameTree; }
});
/* harmony import */var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/**
 * @license
 * Copyright 2022 Google Inc.
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

var _frames = /*#__PURE__*/ new WeakMap(), // frameID -> parentFrameID
_parentIds = /*#__PURE__*/ new WeakMap(), // frameID -> childFrameIDs
_childIds = /*#__PURE__*/ new WeakMap(), _mainFrame = /*#__PURE__*/ new WeakMap(), _isMainFrameStale = /*#__PURE__*/ new WeakMap(), _waitRequests = /*#__PURE__*/ new WeakMap();
/**
 * Keeps track of the page frame tree and it's is managed by
 * {@link FrameManager}. FrameTree uses frame IDs to reference frame and it
 * means that referenced frames might not be in the tree anymore. Thus, the tree
 * structure is eventually consistent.
 * @internal
 */ var FrameTree = /*#__PURE__*/ function() {
    "use strict";
    function FrameTree() {
        _class_call_check(this, FrameTree);
        _class_private_field_init(this, _frames, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _parentIds, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _childIds, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _mainFrame, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _isMainFrameStale, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _waitRequests, {
            writable: true,
            value: new Map()
        });
    }
    _create_class(FrameTree, [
        {
            key: "getMainFrame",
            value: function getMainFrame() {
                return _class_private_field_get(this, _mainFrame);
            }
        },
        {
            key: "getById",
            value: function getById(frameId) {
                return _class_private_field_get(this, _frames).get(frameId);
            }
        },
        {
            /**
     * Returns a promise that is resolved once the frame with
     * the given ID is added to the tree.
     */ key: "waitForFrame",
            value: function waitForFrame(frameId) {
                var frame = this.getById(frameId);
                if (frame) {
                    return Promise.resolve(frame);
                }
                var deferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__.Deferred.create();
                var callbacks = _class_private_field_get(this, _waitRequests).get(frameId) || new Set();
                callbacks.add(deferred);
                return deferred.valueOrThrow();
            }
        },
        {
            key: "frames",
            value: function frames() {
                return Array.from(_class_private_field_get(this, _frames).values());
            }
        },
        {
            key: "addFrame",
            value: function addFrame(frame) {
                var _class_private_field_get_get;
                _class_private_field_get(this, _frames).set(frame._id, frame);
                if (frame._parentId) {
                    _class_private_field_get(this, _parentIds).set(frame._id, frame._parentId);
                    if (!_class_private_field_get(this, _childIds).has(frame._parentId)) {
                        _class_private_field_get(this, _childIds).set(frame._parentId, new Set());
                    }
                    _class_private_field_get(this, _childIds).get(frame._parentId).add(frame._id);
                } else if (!_class_private_field_get(this, _mainFrame) || _class_private_field_get(this, _isMainFrameStale)) {
                    _class_private_field_set(this, _mainFrame, frame);
                    _class_private_field_set(this, _isMainFrameStale, false);
                }
                (_class_private_field_get_get = _class_private_field_get(this, _waitRequests).get(frame._id)) === null || _class_private_field_get_get === void 0 ? void 0 : _class_private_field_get_get.forEach(function(request) {
                    return request.resolve(frame);
                });
            }
        },
        {
            key: "removeFrame",
            value: function removeFrame(frame) {
                _class_private_field_get(this, _frames).delete(frame._id);
                _class_private_field_get(this, _parentIds).delete(frame._id);
                if (frame._parentId) {
                    var _class_private_field_get_get;
                    (_class_private_field_get_get = _class_private_field_get(this, _childIds).get(frame._parentId)) === null || _class_private_field_get_get === void 0 ? void 0 : _class_private_field_get_get.delete(frame._id);
                } else {
                    _class_private_field_set(this, _isMainFrameStale, true);
                }
            }
        },
        {
            key: "childFrames",
            value: function childFrames(frameId) {
                var _this = this;
                var childIds = _class_private_field_get(this, _childIds).get(frameId);
                if (!childIds) {
                    return [];
                }
                return Array.from(childIds).map(function(id) {
                    return _this.getById(id);
                }).filter(function(frame) {
                    return frame !== undefined;
                });
            }
        },
        {
            key: "parentFrame",
            value: function parentFrame(frameId) {
                var parentId = _class_private_field_get(this, _parentIds).get(frameId);
                return parentId ? this.getById(parentId) : undefined;
            }
        }
    ]);
    return FrameTree;
} //# sourceMappingURL=FrameTree.js.map
();


}),

}]);