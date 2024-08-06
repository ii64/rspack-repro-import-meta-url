"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_web_audio_WebAudioModel_js"], {
"./panels/web_audio/WebAudioModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WebAudioModel: function() { return WebAudioModel; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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

var WebAudioModel = /*#__PURE__*/ function(_SDK_SDKModel_SDKModel) {
    "use strict";
    _inherits(WebAudioModel, _SDK_SDKModel_SDKModel);
    var _super = _create_super(WebAudioModel);
    function WebAudioModel(target) {
        _class_call_check(this, WebAudioModel);
        var _this;
        _this = _super.call(this, target);
        _define_property(_assert_this_initialized(_this), "enabled", void 0);
        _define_property(_assert_this_initialized(_this), "agent", void 0);
        _this.enabled = false;
        _this.agent = target.webAudioAgent();
        target.registerWebAudioDispatcher(_assert_this_initialized(_this));
        // TODO(crbug.com/963510): Some OfflineAudioContexts are not uninitialized
        // properly because LifeCycleObserver::ContextDestroyed() is not fired for
        // unknown reasons. This creates inconsistency in AudioGraphTracer
        // and AudioContextSelector in DevTools.
        //
        // To resolve this inconsistency, we flush the leftover from the previous
        // frame when the current page is loaded. This call can be omitted when the
        // bug is fixed.
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.Events.FrameNavigated, _this.flushContexts, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(WebAudioModel, [
        {
            key: "flushContexts",
            value: function flushContexts() {
                this.dispatchEventToListeners("ModelReset" /* Events.ModelReset */ );
            }
        },
        {
            key: "suspendModel",
            value: function suspendModel() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.dispatchEventToListeners("ModelSuspend" /* Events.ModelSuspend */ );
                                return [
                                    4,
                                    _this.agent.invoke_disable()
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
            key: "resumeModel",
            value: function resumeModel() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.enabled) {
                                    return [
                                        2,
                                        Promise.resolve()
                                    ];
                                }
                                return [
                                    4,
                                    _this.agent.invoke_enable()
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
            key: "ensureEnabled",
            value: function ensureEnabled() {
                if (this.enabled) {
                    return;
                }
                void this.agent.invoke_enable();
                this.enabled = true;
            }
        },
        {
            key: "contextCreated",
            value: function contextCreated(param) {
                var context = param.context;
                this.dispatchEventToListeners("ContextCreated" /* Events.ContextCreated */ , context);
            }
        },
        {
            key: "contextWillBeDestroyed",
            value: function contextWillBeDestroyed(param) {
                var contextId = param.contextId;
                this.dispatchEventToListeners("ContextDestroyed" /* Events.ContextDestroyed */ , contextId);
            }
        },
        {
            key: "contextChanged",
            value: function contextChanged(param) {
                var context = param.context;
                this.dispatchEventToListeners("ContextChanged" /* Events.ContextChanged */ , context);
            }
        },
        {
            key: "audioListenerCreated",
            value: function audioListenerCreated(param) {
                var listener = param.listener;
                this.dispatchEventToListeners("AudioListenerCreated" /* Events.AudioListenerCreated */ , listener);
            }
        },
        {
            key: "audioListenerWillBeDestroyed",
            value: function audioListenerWillBeDestroyed(param) {
                var listenerId = param.listenerId, contextId = param.contextId;
                this.dispatchEventToListeners("AudioListenerWillBeDestroyed" /* Events.AudioListenerWillBeDestroyed */ , {
                    listenerId: listenerId,
                    contextId: contextId
                });
            }
        },
        {
            key: "audioNodeCreated",
            value: function audioNodeCreated(param) {
                var node = param.node;
                this.dispatchEventToListeners("AudioNodeCreated" /* Events.AudioNodeCreated */ , node);
            }
        },
        {
            key: "audioNodeWillBeDestroyed",
            value: function audioNodeWillBeDestroyed(param) {
                var contextId = param.contextId, nodeId = param.nodeId;
                this.dispatchEventToListeners("AudioNodeWillBeDestroyed" /* Events.AudioNodeWillBeDestroyed */ , {
                    contextId: contextId,
                    nodeId: nodeId
                });
            }
        },
        {
            key: "audioParamCreated",
            value: function audioParamCreated(param) {
                var _$param = param.param;
                this.dispatchEventToListeners("AudioParamCreated" /* Events.AudioParamCreated */ , _$param);
            }
        },
        {
            key: "audioParamWillBeDestroyed",
            value: function audioParamWillBeDestroyed(param) {
                var contextId = param.contextId, nodeId = param.nodeId, paramId = param.paramId;
                this.dispatchEventToListeners("AudioParamWillBeDestroyed" /* Events.AudioParamWillBeDestroyed */ , {
                    contextId: contextId,
                    nodeId: nodeId,
                    paramId: paramId
                });
            }
        },
        {
            key: "nodesConnected",
            value: function nodesConnected(param) {
                var contextId = param.contextId, sourceId = param.sourceId, destinationId = param.destinationId, sourceOutputIndex = param.sourceOutputIndex, destinationInputIndex = param.destinationInputIndex;
                this.dispatchEventToListeners("NodesConnected" /* Events.NodesConnected */ , {
                    contextId: contextId,
                    sourceId: sourceId,
                    destinationId: destinationId,
                    sourceOutputIndex: sourceOutputIndex,
                    destinationInputIndex: destinationInputIndex
                });
            }
        },
        {
            key: "nodesDisconnected",
            value: function nodesDisconnected(param) {
                var contextId = param.contextId, sourceId = param.sourceId, destinationId = param.destinationId, sourceOutputIndex = param.sourceOutputIndex, destinationInputIndex = param.destinationInputIndex;
                this.dispatchEventToListeners("NodesDisconnected" /* Events.NodesDisconnected */ , {
                    contextId: contextId,
                    sourceId: sourceId,
                    destinationId: destinationId,
                    sourceOutputIndex: sourceOutputIndex,
                    destinationInputIndex: destinationInputIndex
                });
            }
        },
        {
            key: "nodeParamConnected",
            value: function nodeParamConnected(param) {
                var contextId = param.contextId, sourceId = param.sourceId, destinationId = param.destinationId, sourceOutputIndex = param.sourceOutputIndex;
                this.dispatchEventToListeners("NodeParamConnected" /* Events.NodeParamConnected */ , {
                    contextId: contextId,
                    sourceId: sourceId,
                    destinationId: destinationId,
                    sourceOutputIndex: sourceOutputIndex
                });
            }
        },
        {
            key: "nodeParamDisconnected",
            value: function nodeParamDisconnected(param) {
                var contextId = param.contextId, sourceId = param.sourceId, destinationId = param.destinationId, sourceOutputIndex = param.sourceOutputIndex;
                this.dispatchEventToListeners("NodeParamDisconnected" /* Events.NodeParamDisconnected */ , {
                    contextId: contextId,
                    sourceId: sourceId,
                    destinationId: destinationId,
                    sourceOutputIndex: sourceOutputIndex
                });
            }
        },
        {
            key: "requestRealtimeData",
            value: function requestRealtimeData(contextId) {
                var _this = this;
                return _async_to_generator(function() {
                    var realtimeResponse;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.agent.invoke_getRealtimeData({
                                        contextId: contextId
                                    })
                                ];
                            case 1:
                                realtimeResponse = _state.sent();
                                return [
                                    2,
                                    realtimeResponse.realtimeData
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return WebAudioModel;
}(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel);
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel.register(WebAudioModel, {
    capabilities: 2 /* SDK.Target.Capability.DOM */ ,
    autostart: false
}); //# sourceMappingURL=WebAudioModel.js.map


}),

}]);