"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_layers_LayerTreeModel_js"], {
"./panels/layers/LayerTreeModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AgentLayer: function() { return AgentLayer; },
  AgentLayerTree: function() { return AgentLayerTree; },
  Events: function() { return Events; },
  LayerTreeModel: function() { return LayerTreeModel; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/*
 * Copyright (C) 2013 Google Inc. All rights reserved.
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
 */ function _assert_this_initialized(self) {
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



var LayerTreeModel = /*#__PURE__*/ function(_SDK_SDKModel_SDKModel) {
    "use strict";
    _inherits(LayerTreeModel, _SDK_SDKModel_SDKModel);
    var _super = _create_super(LayerTreeModel);
    function LayerTreeModel(target) {
        _class_call_check(this, LayerTreeModel);
        var _this;
        _this = _super.call(this, target);
        _define_property(_assert_this_initialized(_this), "layerTreeAgent", void 0);
        _define_property(_assert_this_initialized(_this), "paintProfilerModel", void 0);
        _define_property(_assert_this_initialized(_this), "layerTreeInternal", void 0);
        _define_property(_assert_this_initialized(_this), "throttler", void 0);
        _define_property(_assert_this_initialized(_this), "enabled", void 0);
        _define_property(_assert_this_initialized(_this), "lastPaintRectByLayerId", void 0);
        _this.layerTreeAgent = target.layerTreeAgent();
        target.registerLayerTreeDispatcher(new LayerTreeDispatcher(_assert_this_initialized(_this)));
        _this.paintProfilerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.PaintProfiler.PaintProfilerModel);
        var resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
        if (resourceTreeModel) {
            resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.PrimaryPageChanged, _this.onPrimaryPageChanged, _assert_this_initialized(_this));
        }
        _this.layerTreeInternal = null;
        _this.throttler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(20);
        return _this;
    }
    _create_class(LayerTreeModel, [
        {
            key: "disable",
            value: function disable() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.enabled) {
                                    return [
                                        2
                                    ];
                                }
                                _this.enabled = false;
                                return [
                                    4,
                                    _this.layerTreeAgent.invoke_disable()
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
            key: "enable",
            value: function enable() {
                if (this.enabled) {
                    return;
                }
                this.enabled = true;
                void this.forceEnable();
            }
        },
        {
            key: "forceEnable",
            value: function forceEnable() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.lastPaintRectByLayerId = new Map();
                                if (!_this.layerTreeInternal) {
                                    _this.layerTreeInternal = new AgentLayerTree(_this);
                                }
                                return [
                                    4,
                                    _this.layerTreeAgent.invoke_enable()
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
            key: "layerTree",
            value: function layerTree() {
                return this.layerTreeInternal;
            }
        },
        {
            key: "layerTreeChanged",
            value: function layerTreeChanged(layers) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        if (!_this.enabled) {
                            return [
                                2
                            ];
                        }
                        void _this.throttler.schedule(_this.innerSetLayers.bind(_this, layers));
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "innerSetLayers",
            value: function innerSetLayers(layers) {
                var _this = this;
                return _async_to_generator(function() {
                    var layerTree, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, layerId, lastPaintRect, layer;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                layerTree = _this.layerTreeInternal;
                                return [
                                    4,
                                    layerTree.setLayers(layers)
                                ];
                            case 1:
                                _state.sent();
                                if (!_this.lastPaintRectByLayerId) {
                                    _this.lastPaintRectByLayerId = new Map();
                                }
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = _this.lastPaintRectByLayerId.keys()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        layerId = _step.value;
                                        lastPaintRect = _this.lastPaintRectByLayerId.get(layerId);
                                        layer = layerTree.layerById(layerId);
                                        if (layer) {
                                            layer.setLastPaintRect(lastPaintRect);
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
                                _this.lastPaintRectByLayerId = new Map();
                                _this.dispatchEventToListeners(Events.LayerTreeChanged);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "layerPainted",
            value: function layerPainted(layerId, clipRect) {
                if (!this.enabled) {
                    return;
                }
                var layerTree = this.layerTreeInternal;
                var layer = layerTree.layerById(layerId);
                if (!layer) {
                    if (!this.lastPaintRectByLayerId) {
                        this.lastPaintRectByLayerId = new Map();
                    }
                    this.lastPaintRectByLayerId.set(layerId, clipRect);
                    return;
                }
                layer.didPaint(clipRect);
                this.dispatchEventToListeners(Events.LayerPainted, layer);
            }
        },
        {
            key: "onPrimaryPageChanged",
            value: function onPrimaryPageChanged() {
                this.layerTreeInternal = null;
                if (this.enabled) {
                    void this.forceEnable();
                }
            }
        }
    ]);
    return LayerTreeModel;
}(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel);
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel.register(LayerTreeModel, {
    capabilities: 2 /* SDK.Target.Capability.DOM */ ,
    autostart: false
});
var Events;
(function(Events) {
    Events["LayerTreeChanged"] = "LayerTreeChanged";
    Events["LayerPainted"] = "LayerPainted";
})(Events || (Events = {}));
var AgentLayerTree = /*#__PURE__*/ function(_SDK_LayerTreeBase_LayerTreeBase) {
    "use strict";
    _inherits(AgentLayerTree, _SDK_LayerTreeBase_LayerTreeBase);
    var _super = _create_super(AgentLayerTree);
    function AgentLayerTree(layerTreeModel) {
        _class_call_check(this, AgentLayerTree);
        var _this;
        _this = _super.call(this, layerTreeModel.target());
        _define_property(_assert_this_initialized(_this), "layerTreeModel", void 0);
        _this.layerTreeModel = layerTreeModel;
        return _this;
    }
    _create_class(AgentLayerTree, [
        {
            key: "setLayers",
            value: function setLayers(payload) {
                var _this = this;
                return _async_to_generator(function() {
                    var idsToResolve, i, backendNodeId;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!payload) {
                                    _this.innerSetLayers(payload);
                                    return [
                                        2
                                    ];
                                }
                                idsToResolve = new Set();
                                for(i = 0; i < payload.length; ++i){
                                    backendNodeId = payload[i].backendNodeId;
                                    if (!backendNodeId || _this.backendNodeIdToNode().has(backendNodeId)) {
                                        continue;
                                    }
                                    idsToResolve.add(backendNodeId);
                                }
                                return [
                                    4,
                                    _this.resolveBackendNodeIds(idsToResolve)
                                ];
                            case 1:
                                _state.sent();
                                _this.innerSetLayers(payload);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "innerSetLayers",
            value: function innerSetLayers(layers) {
                this.setRoot(null);
                this.setContentRoot(null);
                // Payload will be null when not in the composited mode.
                if (!layers) {
                    return;
                }
                var root;
                var oldLayersById = this.layersById;
                this.layersById = new Map();
                for(var i = 0; i < layers.length; ++i){
                    var layerId = layers[i].layerId;
                    var layer = oldLayersById.get(layerId);
                    if (layer) {
                        layer.reset(layers[i]);
                    } else {
                        layer = new AgentLayer(this.layerTreeModel, layers[i]);
                    }
                    this.layersById.set(layerId, layer);
                    var backendNodeId = layers[i].backendNodeId;
                    if (backendNodeId) {
                        layer.setNode(this.backendNodeIdToNode().get(backendNodeId) || null);
                    }
                    if (!this.contentRoot() && layer.drawsContent()) {
                        this.setContentRoot(layer);
                    }
                    var parentId = layer.parentId();
                    if (parentId) {
                        var parent = this.layersById.get(parentId);
                        if (!parent) {
                            throw new Error("Missing parent ".concat(parentId, " for layer ").concat(layerId));
                        }
                        parent.addChild(layer);
                    } else {
                        if (root) {
                            console.assert(false, 'Multiple root layers');
                        }
                        root = layer;
                    }
                }
                if (root) {
                    this.setRoot(root);
                    root.calculateQuad(new WebKitCSSMatrix());
                }
            }
        }
    ]);
    return AgentLayerTree;
}(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.LayerTreeBase.LayerTreeBase);
var AgentLayer = /*#__PURE__*/ function() {
    "use strict";
    function AgentLayer(layerTreeModel, layerPayload) {
        _class_call_check(this, AgentLayer);
        _define_property(this, "scrollRectsInternal", void 0);
        _define_property(this, "quadInternal", void 0);
        _define_property(this, "childrenInternal", void 0);
        _define_property(this, "image", void 0);
        _define_property(this, "parentInternal", void 0);
        _define_property(this, "layerPayload", void 0);
        _define_property(this, "layerTreeModel", void 0);
        _define_property(this, "nodeInternal", void 0);
        _define_property(this, "lastPaintRectInternal", void 0);
        _define_property(this, "paintCountInternal", void 0);
        _define_property(this, "stickyPositionConstraintInternal", void 0);
        this.layerTreeModel = layerTreeModel;
        this.reset(layerPayload);
    }
    _create_class(AgentLayer, [
        {
            key: "id",
            value: function id() {
                return this.layerPayload.layerId;
            }
        },
        {
            key: "parentId",
            value: function parentId() {
                return this.layerPayload.parentLayerId || null;
            }
        },
        {
            key: "parent",
            value: function parent() {
                return this.parentInternal;
            }
        },
        {
            key: "isRoot",
            value: function isRoot() {
                return !this.parentId();
            }
        },
        {
            key: "children",
            value: function children() {
                return this.childrenInternal;
            }
        },
        {
            key: "addChild",
            value: function addChild(childParam) {
                var child = childParam;
                if (child.parentInternal) {
                    console.assert(false, 'Child already has a parent');
                }
                this.childrenInternal.push(child);
                child.parentInternal = this;
            }
        },
        {
            key: "setNode",
            value: function setNode(node) {
                this.nodeInternal = node;
            }
        },
        {
            key: "node",
            value: function node() {
                return this.nodeInternal || null;
            }
        },
        {
            key: "nodeForSelfOrAncestor",
            value: function nodeForSelfOrAncestor() {
                var layer = this;
                for(; layer; layer = layer.parentInternal){
                    if (layer.nodeInternal) {
                        return layer.nodeInternal;
                    }
                }
                return null;
            }
        },
        {
            key: "offsetX",
            value: function offsetX() {
                return this.layerPayload.offsetX;
            }
        },
        {
            key: "offsetY",
            value: function offsetY() {
                return this.layerPayload.offsetY;
            }
        },
        {
            key: "width",
            value: function width() {
                return this.layerPayload.width;
            }
        },
        {
            key: "height",
            value: function height() {
                return this.layerPayload.height;
            }
        },
        {
            key: "transform",
            value: function transform() {
                return this.layerPayload.transform || null;
            }
        },
        {
            key: "quad",
            value: function quad() {
                return this.quadInternal;
            }
        },
        {
            key: "anchorPoint",
            value: function anchorPoint() {
                return [
                    this.layerPayload.anchorX || 0,
                    this.layerPayload.anchorY || 0,
                    this.layerPayload.anchorZ || 0
                ];
            }
        },
        {
            key: "invisible",
            value: function invisible() {
                return this.layerPayload.invisible || false;
            }
        },
        {
            key: "paintCount",
            value: function paintCount() {
                return this.paintCountInternal || this.layerPayload.paintCount;
            }
        },
        {
            key: "lastPaintRect",
            value: function lastPaintRect() {
                return this.lastPaintRectInternal || null;
            }
        },
        {
            key: "setLastPaintRect",
            value: function setLastPaintRect(lastPaintRect) {
                this.lastPaintRectInternal = lastPaintRect;
            }
        },
        {
            key: "scrollRects",
            value: function scrollRects() {
                return this.scrollRectsInternal;
            }
        },
        {
            key: "stickyPositionConstraint",
            value: function stickyPositionConstraint() {
                return this.stickyPositionConstraintInternal || null;
            }
        },
        {
            key: "requestCompositingReasons",
            value: function requestCompositingReasons() {
                var _this = this;
                return _async_to_generator(function() {
                    var reasons;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.layerTreeModel.layerTreeAgent.invoke_compositingReasons({
                                        layerId: _this.id()
                                    })
                                ];
                            case 1:
                                reasons = _state.sent();
                                return [
                                    2,
                                    reasons.compositingReasons || []
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "requestCompositingReasonIds",
            value: function requestCompositingReasonIds() {
                var _this = this;
                return _async_to_generator(function() {
                    var reasons;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.layerTreeModel.layerTreeAgent.invoke_compositingReasons({
                                        layerId: _this.id()
                                    })
                                ];
                            case 1:
                                reasons = _state.sent();
                                return [
                                    2,
                                    reasons.compositingReasonIds || []
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "drawsContent",
            value: function drawsContent() {
                return this.layerPayload.drawsContent;
            }
        },
        {
            key: "gpuMemoryUsage",
            value: function gpuMemoryUsage() {
                var bytesPerPixel = 4;
                return this.drawsContent() ? this.width() * this.height() * bytesPerPixel : 0;
            }
        },
        {
            key: "snapshots",
            value: function snapshots() {
                var _this = this;
                var promise = this.layerTreeModel.paintProfilerModel.makeSnapshot(this.id()).then(function(snapshot) {
                    if (!snapshot) {
                        return null;
                    }
                    return {
                        rect: {
                            x: 0,
                            y: 0,
                            width: _this.width(),
                            height: _this.height()
                        },
                        snapshot: snapshot
                    };
                });
                return [
                    promise
                ];
            }
        },
        {
            key: "didPaint",
            value: function didPaint(rect) {
                this.lastPaintRectInternal = rect;
                this.paintCountInternal = this.paintCount() + 1;
                this.image = null;
            }
        },
        {
            key: "reset",
            value: function reset(layerPayload) {
                this.nodeInternal = null;
                this.childrenInternal = [];
                this.parentInternal = null;
                this.paintCountInternal = 0;
                this.layerPayload = layerPayload;
                this.image = null;
                this.scrollRectsInternal = this.layerPayload.scrollRects || [];
                this.stickyPositionConstraintInternal = this.layerPayload.stickyPositionConstraint ? new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.LayerTreeBase.StickyPositionConstraint(this.layerTreeModel.layerTree(), this.layerPayload.stickyPositionConstraint) : null;
            }
        },
        {
            key: "matrixFromArray",
            value: function matrixFromArray(a) {
                function toFixed9(x) {
                    return x.toFixed(9);
                }
                return new WebKitCSSMatrix('matrix3d(' + a.map(toFixed9).join(',') + ')');
            }
        },
        {
            key: "calculateTransformToViewport",
            value: function calculateTransformToViewport(parentTransform) {
                var offsetMatrix = new WebKitCSSMatrix().translate(this.layerPayload.offsetX, this.layerPayload.offsetY);
                var matrix = offsetMatrix;
                if (this.layerPayload.transform) {
                    var transformMatrix = this.matrixFromArray(this.layerPayload.transform);
                    var anchorVector = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.Vector(this.layerPayload.width * this.anchorPoint()[0], this.layerPayload.height * this.anchorPoint()[1], this.anchorPoint()[2]);
                    var anchorPoint = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.multiplyVectorByMatrixAndNormalize(anchorVector, matrix);
                    var anchorMatrix = new WebKitCSSMatrix().translate(-anchorPoint.x, -anchorPoint.y, -anchorPoint.z);
                    matrix = anchorMatrix.inverse().multiply(transformMatrix.multiply(anchorMatrix.multiply(matrix)));
                }
                matrix = parentTransform.multiply(matrix);
                return matrix;
            }
        },
        {
            key: "createVertexArrayForRect",
            value: function createVertexArrayForRect(width, height) {
                return [
                    0,
                    0,
                    0,
                    width,
                    0,
                    0,
                    width,
                    height,
                    0,
                    0,
                    height,
                    0
                ];
            }
        },
        {
            key: "calculateQuad",
            value: function calculateQuad(parentTransform) {
                var matrix = this.calculateTransformToViewport(parentTransform);
                this.quadInternal = [];
                var vertices = this.createVertexArrayForRect(this.layerPayload.width, this.layerPayload.height);
                for(var i = 0; i < 4; ++i){
                    var point = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.multiplyVectorByMatrixAndNormalize(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.Vector(vertices[i * 3], vertices[i * 3 + 1], vertices[i * 3 + 2]), matrix);
                    this.quadInternal.push(point.x, point.y);
                }
                function calculateQuadForLayer(layer) {
                    layer.calculateQuad(matrix);
                }
                this.childrenInternal.forEach(calculateQuadForLayer);
            }
        }
    ]);
    return AgentLayer;
}();
var LayerTreeDispatcher = /*#__PURE__*/ function() {
    "use strict";
    function LayerTreeDispatcher(layerTreeModel) {
        _class_call_check(this, LayerTreeDispatcher);
        _define_property(this, "layerTreeModel", void 0);
        this.layerTreeModel = layerTreeModel;
    }
    _create_class(LayerTreeDispatcher, [
        {
            key: "layerTreeDidChange",
            value: function layerTreeDidChange(param) {
                var layers = param.layers;
                void this.layerTreeModel.layerTreeChanged(layers || null);
            }
        },
        {
            key: "layerPainted",
            value: function layerPainted(param) {
                var layerId = param.layerId, clip = param.clip;
                this.layerTreeModel.layerPainted(layerId, clip);
            }
        }
    ]);
    return LayerTreeDispatcher;
} //# sourceMappingURL=LayerTreeModel.js.map
();


}),

}]);