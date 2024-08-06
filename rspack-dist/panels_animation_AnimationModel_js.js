"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_animation_AnimationModel_js"], {
"./panels/animation/AnimationModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnimationDispatcher: function() { return AnimationDispatcher; },
  AnimationEffect: function() { return AnimationEffect; },
  AnimationGroup: function() { return AnimationGroup; },
  AnimationImpl: function() { return AnimationImpl; },
  AnimationModel: function() { return AnimationModel; },
  Events: function() { return Events; },
  KeyframeStyle: function() { return KeyframeStyle; },
  KeyframesRule: function() { return KeyframesRule; },
  ScreenshotCapture: function() { return ScreenshotCapture; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _AnimationDOMNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimationDOMNode.js */ "./panels/animation/AnimationDOMNode.js");
// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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



function shouldGroupAnimations(firstAnimation, anim) {
    var firstAnimationTimeline = firstAnimation.viewOrScrollTimeline();
    var animationTimeline = anim.viewOrScrollTimeline();
    if (firstAnimationTimeline) {
        // This is a SDA group so check whether the animation's
        // scroll container and scroll axis is the same with the first animation.
        return Boolean(animationTimeline && firstAnimationTimeline.sourceNodeId === animationTimeline.sourceNodeId && firstAnimationTimeline.axis === animationTimeline.axis);
    }
    // This is a non-SDA group so check whether the coming animation
    // is a time based one too and if so, compare their start times.
    return !animationTimeline && firstAnimation.startTime() === anim.startTime();
}
var _animationsById = /*#__PURE__*/ new WeakMap(), _pendingAnimations = /*#__PURE__*/ new WeakMap(), _screenshotCapture = /*#__PURE__*/ new WeakMap(), _enabled = /*#__PURE__*/ new WeakMap(), _flushPendingAnimations = /*#__PURE__*/ new WeakMap();
var AnimationModel = /*#__PURE__*/ function(_SDK_SDKModel_SDKModel) {
    "use strict";
    _inherits(AnimationModel, _SDK_SDKModel_SDKModel);
    var _super = _create_super(AnimationModel);
    function AnimationModel(target) {
        _class_call_check(this, AnimationModel);
        var _this;
        _this = _super.call(this, target);
        _define_property(_assert_this_initialized(_this), "runtimeModel", void 0);
        _define_property(_assert_this_initialized(_this), "agent", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _animationsById, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "animationGroups", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _pendingAnimations, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "playbackRate", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _screenshotCapture, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _enabled, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _flushPendingAnimations, {
            writable: true,
            value: void 0
        });
        _this.runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
        _this.agent = target.animationAgent();
        target.registerAnimationDispatcher(new AnimationDispatcher(_assert_this_initialized(_this)));
        _class_private_field_set(_assert_this_initialized(_this), _animationsById, new Map());
        _this.animationGroups = new Map();
        _class_private_field_set(_assert_this_initialized(_this), _pendingAnimations, new Set());
        _this.playbackRate = 1;
        var resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
        resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.PrimaryPageChanged, _this.reset, _assert_this_initialized(_this));
        var screenCaptureModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCaptureModel.ScreenCaptureModel);
        if (screenCaptureModel) {
            _class_private_field_set(_assert_this_initialized(_this), _screenshotCapture, new ScreenshotCapture(_assert_this_initialized(_this), screenCaptureModel));
        }
        _class_private_field_set(_assert_this_initialized(_this), _flushPendingAnimations, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Debouncer.debounce(function() {
            while(_class_private_field_get(_this, _pendingAnimations).size){
                _this.matchExistingGroups(_this.createGroupFromPendingAnimations());
            }
        }, 100));
        return _this;
    }
    _create_class(AnimationModel, [
        {
            key: "reset",
            value: function reset() {
                _class_private_field_get(this, _animationsById).clear();
                this.animationGroups.clear();
                _class_private_field_get(this, _pendingAnimations).clear();
                this.dispatchEventToListeners(Events.ModelReset);
            }
        },
        {
            key: "devicePixelRatio",
            value: function devicePixelRatio() {
                var _this = this;
                return _async_to_generator(function() {
                    var evaluateResult, _evaluateResult_result_value;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.target().runtimeAgent().invoke_evaluate({
                                        expression: 'window.devicePixelRatio'
                                    })
                                ];
                            case 1:
                                evaluateResult = _state.sent();
                                if ((evaluateResult === null || evaluateResult === void 0 ? void 0 : evaluateResult.result.type) === 'number') {
                                    ;
                                    return [
                                        2,
                                        (_evaluateResult_result_value = evaluateResult === null || evaluateResult === void 0 ? void 0 : evaluateResult.result.value) !== null && _evaluateResult_result_value !== void 0 ? _evaluateResult_result_value : 1
                                    ];
                                }
                                return [
                                    2,
                                    1
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "animationCanceled",
            value: function animationCanceled(id) {
                _class_private_field_get(this, _pendingAnimations).delete(id);
            }
        },
        {
            key: "animationUpdated",
            value: function animationUpdated(payload) {
                var _this = this;
                return _async_to_generator(function() {
                    var foundAnimationGroup, foundAnimation, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, animationGroup;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = _this.animationGroups.values()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        animationGroup = _step.value;
                                        foundAnimation = animationGroup.animations().find(function(animation) {
                                            return animation.id() === payload.id;
                                        });
                                        if (foundAnimation) {
                                            foundAnimationGroup = animationGroup;
                                            break;
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
                                if (!foundAnimation || !foundAnimationGroup) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    foundAnimation.setPayload(payload)
                                ];
                            case 1:
                                _state.sent();
                                _this.dispatchEventToListeners(Events.AnimationGroupUpdated, foundAnimationGroup);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "animationStarted",
            value: function animationStarted(payload) {
                var _this = this;
                return _async_to_generator(function() {
                    var animation, keyframesRule;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // We are not interested in animations without effect or target.
                                if (!payload.source || !payload.source.backendNodeId) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    AnimationImpl.parsePayload(_this, payload)
                                ];
                            case 1:
                                animation = _state.sent();
                                // Ignore Web Animations custom effects & groups.
                                keyframesRule = animation.source().keyframesRule();
                                if (animation.type() === 'WebAnimation' && keyframesRule && keyframesRule.keyframes().length === 0) {
                                    _class_private_field_get(_this, _pendingAnimations).delete(animation.id());
                                } else {
                                    _class_private_field_get(_this, _animationsById).set(animation.id(), animation);
                                    _class_private_field_get(_this, _pendingAnimations).add(animation.id());
                                }
                                _class_private_field_get(_this, _flushPendingAnimations).call(_this);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "matchExistingGroups",
            value: function matchExistingGroups(incomingGroup) {
                var matchedGroup = null;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.animationGroups.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var group = _step.value;
                        if (group.matches(incomingGroup)) {
                            matchedGroup = group;
                            group.rebaseTo(incomingGroup);
                            break;
                        }
                        if (group.shouldInclude(incomingGroup)) {
                            matchedGroup = group;
                            group.appendAnimations(incomingGroup.animations());
                            break;
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
                if (!matchedGroup) {
                    this.animationGroups.set(incomingGroup.id(), incomingGroup);
                    if (_class_private_field_get(this, _screenshotCapture)) {
                        _class_private_field_get(this, _screenshotCapture).captureScreenshots(incomingGroup.finiteDuration(), incomingGroup.screenshotsInternal);
                    }
                    this.dispatchEventToListeners(Events.AnimationGroupStarted, incomingGroup);
                } else {
                    this.dispatchEventToListeners(Events.AnimationGroupUpdated, matchedGroup);
                }
                return Boolean(matchedGroup);
            }
        },
        {
            key: "createGroupFromPendingAnimations",
            value: function createGroupFromPendingAnimations() {
                console.assert(_class_private_field_get(this, _pendingAnimations).size > 0);
                var firstAnimationId = _class_private_field_get(this, _pendingAnimations).values().next().value;
                _class_private_field_get(this, _pendingAnimations).delete(firstAnimationId);
                var firstAnimation = _class_private_field_get(this, _animationsById).get(firstAnimationId);
                if (!firstAnimation) {
                    throw new Error('Unable to locate first animation');
                }
                var groupedAnimations = [
                    firstAnimation
                ];
                var remainingAnimations = new Set();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _pendingAnimations)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var id = _step.value;
                        var anim = _class_private_field_get(this, _animationsById).get(id);
                        if (shouldGroupAnimations(firstAnimation, anim)) {
                            groupedAnimations.push(anim);
                        } else {
                            remainingAnimations.add(id);
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
                _class_private_field_set(this, _pendingAnimations, remainingAnimations);
                // Show the first starting animation at the top of the animations of the animation group.
                groupedAnimations.sort(function(anim1, anim2) {
                    return anim1.startTime() - anim2.startTime();
                });
                return new AnimationGroup(this, firstAnimationId, groupedAnimations);
            }
        },
        {
            key: "setPlaybackRate",
            value: function setPlaybackRate(playbackRate) {
                this.playbackRate = playbackRate;
                void this.agent.invoke_setPlaybackRate({
                    playbackRate: playbackRate
                });
            }
        },
        {
            key: "releaseAnimations",
            value: function releaseAnimations(animations) {
                void this.agent.invoke_releaseAnimations({
                    animations: animations
                });
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
                                _this.reset();
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
                                if (!_class_private_field_get(_this, _enabled)) {
                                    return [
                                        2
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
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_class_private_field_get(_this, _enabled)) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _this.agent.invoke_enable()
                                ];
                            case 1:
                                _state.sent();
                                _class_private_field_set(_this, _enabled, true);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return AnimationModel;
}(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel);
var Events;
(function(Events) {
    Events["AnimationGroupStarted"] = "AnimationGroupStarted";
    Events["AnimationGroupUpdated"] = "AnimationGroupUpdated";
    Events["ModelReset"] = "ModelReset";
})(Events || (Events = {}));
var _animationModel = /*#__PURE__*/ new WeakMap(), _payloadInternal = /*#__PURE__*/ new WeakMap(), _sourceInternal = /*#__PURE__*/ new WeakMap(), _playStateInternal = /*#__PURE__*/ new WeakMap();
var AnimationImpl = /*#__PURE__*/ function() {
    "use strict";
    function AnimationImpl(animationModel) {
        _class_call_check(this, AnimationImpl);
        _class_private_field_init(this, _animationModel, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _payloadInternal, {
            writable: true,
            value: void 0 // Assertion is safe because only way to create `AnimationImpl` is to use `parsePayload` which calls `setPayload` and sets the value.
        });
        _class_private_field_init(this, _sourceInternal, {
            writable: true,
            value: void 0 // Assertion is safe because only way to create `AnimationImpl` is to use `parsePayload` which calls `setPayload` and sets the value.
        });
        _class_private_field_init(this, _playStateInternal, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _animationModel, animationModel);
    }
    _create_class(AnimationImpl, [
        {
            key: "setPayload",
            value: function setPayload(payload) {
                var _this = this;
                return _async_to_generator(function() {
                    var devicePixelRatio;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!payload.viewOrScrollTimeline) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this, _animationModel).devicePixelRatio()
                                ];
                            case 1:
                                devicePixelRatio = _state.sent();
                                if (payload.viewOrScrollTimeline.startOffset) {
                                    payload.viewOrScrollTimeline.startOffset /= devicePixelRatio;
                                }
                                if (payload.viewOrScrollTimeline.endOffset) {
                                    payload.viewOrScrollTimeline.endOffset /= devicePixelRatio;
                                }
                                _state.label = 2;
                            case 2:
                                _class_private_field_set(_this, _payloadInternal, payload);
                                if (_class_private_field_get(_this, _sourceInternal) && payload.source) {
                                    _class_private_field_get(_this, _sourceInternal).setPayload(payload.source);
                                } else if (!_class_private_field_get(_this, _sourceInternal) && payload.source) {
                                    _class_private_field_set(_this, _sourceInternal, new AnimationEffect(_class_private_field_get(_this, _animationModel), payload.source));
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
            // `startTime` and `duration` is represented as the
            // percentage of the view timeline range that starts at `startOffset`px
            // from the scroll container and ends at `endOffset`px of the scroll container.
            // This takes a percentage of the timeline range and returns the absolute
            // pixels values as a scroll offset of the scroll container.
            key: "percentageToPixels",
            value: function percentageToPixels(percentage, viewOrScrollTimeline) {
                var startOffset = viewOrScrollTimeline.startOffset, endOffset = viewOrScrollTimeline.endOffset;
                if (startOffset === undefined || endOffset === undefined) {
                    // We don't expect this situation to occur since after an animation is started
                    // we expect the scroll offsets to be resolved and provided correctly. If `startOffset`
                    // or `endOffset` is not provided in a viewOrScrollTimeline; we can assume that there is a bug here
                    // so it's fine to throw an error.
                    throw new Error('startOffset or endOffset does not exist in viewOrScrollTimeline');
                }
                return (endOffset - startOffset) * (percentage / 100);
            }
        },
        {
            key: "viewOrScrollTimeline",
            value: function viewOrScrollTimeline() {
                return _class_private_field_get(this, _payloadInternal).viewOrScrollTimeline;
            }
        },
        {
            key: "id",
            value: function id() {
                return _class_private_field_get(this, _payloadInternal).id;
            }
        },
        {
            key: "name",
            value: function name() {
                return _class_private_field_get(this, _payloadInternal).name;
            }
        },
        {
            key: "paused",
            value: function paused() {
                return _class_private_field_get(this, _payloadInternal).pausedState;
            }
        },
        {
            key: "playState",
            value: function playState() {
                return _class_private_field_get(this, _playStateInternal) || _class_private_field_get(this, _payloadInternal).playState;
            }
        },
        {
            key: "setPlayState",
            value: function setPlayState(playState) {
                _class_private_field_set(this, _playStateInternal, playState);
            }
        },
        {
            key: "playbackRate",
            value: function playbackRate() {
                return _class_private_field_get(this, _payloadInternal).playbackRate;
            }
        },
        {
            // For scroll driven animations, it returns the pixel offset in the scroll container
            // For time animations, it returns milliseconds.
            key: "startTime",
            value: function startTime() {
                var viewOrScrollTimeline = this.viewOrScrollTimeline();
                if (viewOrScrollTimeline) {
                    var _this_viewOrScrollTimeline;
                    var _this_viewOrScrollTimeline_startOffset;
                    return this.percentageToPixels(this.playbackRate() > 0 ? _class_private_field_get(this, _payloadInternal).startTime : 100 - _class_private_field_get(this, _payloadInternal).startTime, viewOrScrollTimeline) + ((_this_viewOrScrollTimeline_startOffset = (_this_viewOrScrollTimeline = this.viewOrScrollTimeline()) === null || _this_viewOrScrollTimeline === void 0 ? void 0 : _this_viewOrScrollTimeline.startOffset) !== null && _this_viewOrScrollTimeline_startOffset !== void 0 ? _this_viewOrScrollTimeline_startOffset : 0);
                }
                return _class_private_field_get(this, _payloadInternal).startTime;
            }
        },
        {
            // For scroll driven animations, it returns the duration in pixels (i.e. after how many pixels of scroll the animation is going to end)
            // For time animations, it returns milliseconds.
            key: "iterationDuration",
            value: function iterationDuration() {
                var viewOrScrollTimeline = this.viewOrScrollTimeline();
                if (viewOrScrollTimeline) {
                    return this.percentageToPixels(this.source().duration(), viewOrScrollTimeline);
                }
                return this.source().duration();
            }
        },
        {
            // For scroll driven animations, it returns the duration in pixels (i.e. after how many pixels of scroll the animation is going to end)
            // For time animations, it returns milliseconds.
            key: "endTime",
            value: function endTime() {
                if (!this.source().iterations) {
                    return Infinity;
                }
                if (this.viewOrScrollTimeline()) {
                    return this.startTime() + this.iterationDuration() * this.source().iterations();
                }
                return this.startTime() + this.source().delay() + this.source().duration() * this.source().iterations() + this.source().endDelay();
            }
        },
        {
            // For scroll driven animations, it returns the duration in pixels (i.e. after how many pixels of scroll the animation is going to end)
            // For time animations, it returns milliseconds.
            key: "finiteDuration",
            value: function finiteDuration() {
                var iterations = Math.min(this.source().iterations(), 3);
                if (this.viewOrScrollTimeline()) {
                    return this.iterationDuration() * iterations;
                }
                return this.source().delay() + this.source().duration() * iterations;
            }
        },
        {
            // For scroll driven animations, it returns the duration in pixels (i.e. after how many pixels of scroll the animation is going to end)
            // For time animations, it returns milliseconds.
            key: "currentTime",
            value: function currentTime() {
                var viewOrScrollTimeline = this.viewOrScrollTimeline();
                if (viewOrScrollTimeline) {
                    return this.percentageToPixels(_class_private_field_get(this, _payloadInternal).currentTime, viewOrScrollTimeline);
                }
                return _class_private_field_get(this, _payloadInternal).currentTime;
            }
        },
        {
            key: "source",
            value: function source() {
                return _class_private_field_get(this, _sourceInternal);
            }
        },
        {
            key: "type",
            value: function type() {
                return _class_private_field_get(this, _payloadInternal).type;
            }
        },
        {
            key: "overlaps",
            value: function overlaps(animation) {
                // Infinite animations
                if (!this.source().iterations() || !animation.source().iterations()) {
                    return true;
                }
                var firstAnimation = this.startTime() < animation.startTime() ? this : animation;
                var secondAnimation = firstAnimation === this ? animation : this;
                return firstAnimation.endTime() >= secondAnimation.startTime();
            }
        },
        {
            // Utility method for returning `delay` for time based animations
            // and `startTime` in pixels for scroll driven animations. It is used to
            // find the exact starting time of the first keyframe for both cases.
            key: "delayOrStartTime",
            value: function delayOrStartTime() {
                if (this.viewOrScrollTimeline()) {
                    return this.startTime();
                }
                return this.source().delay();
            }
        },
        {
            key: "setTiming",
            value: function setTiming(duration, delay) {
                var _this = this;
                void _class_private_field_get(this, _sourceInternal).node().then(function(node) {
                    if (!node) {
                        throw new Error('Unable to find node');
                    }
                    _this.updateNodeStyle(duration, delay, node);
                });
                _class_private_field_get(this, _sourceInternal).durationInternal = duration;
                _class_private_field_get(this, _sourceInternal).delayInternal = delay;
                void _class_private_field_get(this, _animationModel).agent.invoke_setTiming({
                    animationId: this.id(),
                    duration: duration,
                    delay: delay
                });
            }
        },
        {
            key: "updateNodeStyle",
            value: function updateNodeStyle(duration, delay, node) {
                var animationPrefix;
                if (this.type() === "CSSTransition" /* Protocol.Animation.AnimationType.CSSTransition */ ) {
                    animationPrefix = 'transition-';
                } else if (this.type() === "CSSAnimation" /* Protocol.Animation.AnimationType.CSSAnimation */ ) {
                    animationPrefix = 'animation-';
                } else {
                    return;
                }
                if (!node.id) {
                    throw new Error('Node has no id');
                }
                var cssModel = node.domModel().cssModel();
                cssModel.setEffectivePropertyValueForNode(node.id, animationPrefix + 'duration', duration + 'ms');
                cssModel.setEffectivePropertyValueForNode(node.id, animationPrefix + 'delay', delay + 'ms');
            }
        },
        {
            key: "remoteObjectPromise",
            value: function remoteObjectPromise() {
                var _this = this;
                return _async_to_generator(function() {
                    var payload;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _animationModel).agent.invoke_resolveAnimation({
                                        animationId: _this.id()
                                    })
                                ];
                            case 1:
                                payload = _state.sent();
                                if (!payload) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                return [
                                    2,
                                    _class_private_field_get(_this, _animationModel).runtimeModel.createRemoteObject(payload.remoteObject)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "cssId",
            value: function cssId() {
                return _class_private_field_get(this, _payloadInternal).cssId || '';
            }
        }
    ], [
        {
            key: "parsePayload",
            value: function parsePayload(animationModel, payload) {
                return _async_to_generator(function() {
                    var animation;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                animation = new AnimationImpl(animationModel);
                                return [
                                    4,
                                    animation.setPayload(payload)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    animation
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return AnimationImpl;
}();
var _animationModel1 = /*#__PURE__*/ new WeakMap(), _payload = /*#__PURE__*/ new WeakMap(), _keyframesRuleInternal = /*#__PURE__*/ new WeakMap(), _deferredNodeInternal = /*#__PURE__*/ new WeakMap();
var AnimationEffect = /*#__PURE__*/ function() {
    "use strict";
    function AnimationEffect(animationModel, payload) {
        _class_call_check(this, AnimationEffect);
        _class_private_field_init(this, _animationModel1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _payload, {
            writable: true,
            value: void 0 // Assertion is safe because `setPayload` call in `constructor` sets the value.
        });
        _define_property(this, "delayInternal", void 0 // Assertion is safe because `setPayload` call in `constructor` sets the value.
        );
        _define_property(this, "durationInternal", void 0 // Assertion is safe because `setPayload` call in `constructor` sets the value.
        );
        _class_private_field_init(this, _keyframesRuleInternal, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _deferredNodeInternal, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _animationModel1, animationModel);
        this.setPayload(payload);
    }
    _create_class(AnimationEffect, [
        {
            key: "setPayload",
            value: function setPayload(payload) {
                _class_private_field_set(this, _payload, payload);
                if (!_class_private_field_get(this, _keyframesRuleInternal) && payload.keyframesRule) {
                    _class_private_field_set(this, _keyframesRuleInternal, new KeyframesRule(payload.keyframesRule));
                } else if (_class_private_field_get(this, _keyframesRuleInternal) && payload.keyframesRule) {
                    _class_private_field_get(this, _keyframesRuleInternal).setPayload(payload.keyframesRule);
                }
                this.delayInternal = payload.delay;
                this.durationInternal = payload.duration;
            }
        },
        {
            key: "delay",
            value: function delay() {
                return this.delayInternal;
            }
        },
        {
            key: "endDelay",
            value: function endDelay() {
                return _class_private_field_get(this, _payload).endDelay;
            }
        },
        {
            key: "iterations",
            value: function iterations() {
                // Animations with zero duration, zero delays and infinite iterations can't be shown.
                if (!this.delay() && !this.endDelay() && !this.duration()) {
                    return 0;
                }
                return _class_private_field_get(this, _payload).iterations || Infinity;
            }
        },
        {
            key: "duration",
            value: function duration() {
                return this.durationInternal;
            }
        },
        {
            key: "direction",
            value: function direction() {
                return _class_private_field_get(this, _payload).direction;
            }
        },
        {
            key: "fill",
            value: function fill() {
                return _class_private_field_get(this, _payload).fill;
            }
        },
        {
            key: "node",
            value: function node() {
                if (!_class_private_field_get(this, _deferredNodeInternal)) {
                    _class_private_field_set(this, _deferredNodeInternal, new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DeferredDOMNode(_class_private_field_get(this, _animationModel1).target(), this.backendNodeId()));
                }
                return _class_private_field_get(this, _deferredNodeInternal).resolvePromise();
            }
        },
        {
            key: "deferredNode",
            value: function deferredNode() {
                return new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DeferredDOMNode(_class_private_field_get(this, _animationModel1).target(), this.backendNodeId());
            }
        },
        {
            key: "backendNodeId",
            value: function backendNodeId() {
                return _class_private_field_get(this, _payload).backendNodeId;
            }
        },
        {
            key: "keyframesRule",
            value: function keyframesRule() {
                return _class_private_field_get(this, _keyframesRuleInternal) || null;
            }
        },
        {
            key: "easing",
            value: function easing() {
                return _class_private_field_get(this, _payload).easing;
            }
        }
    ]);
    return AnimationEffect;
}();
var _payload1 = /*#__PURE__*/ new WeakMap(), _keyframesInternal = /*#__PURE__*/ new WeakMap();
var KeyframesRule = /*#__PURE__*/ function() {
    "use strict";
    function KeyframesRule(payload) {
        _class_call_check(this, KeyframesRule);
        _class_private_field_init(this, _payload1, {
            writable: true,
            value: void 0 // Assertion is safe because `setPayload` call in `constructor` sets the value.;
        });
        _class_private_field_init(this, _keyframesInternal, {
            writable: true,
            value: void 0 // Assertion is safe because `setPayload` call in `constructor` sets the value.;
        });
        this.setPayload(payload);
    }
    _create_class(KeyframesRule, [
        {
            key: "setPayload",
            value: function setPayload(payload) {
                var _this = this;
                _class_private_field_set(this, _payload1, payload);
                if (!_class_private_field_get(this, _keyframesInternal)) {
                    _class_private_field_set(this, _keyframesInternal, _class_private_field_get(this, _payload1).keyframes.map(function(keyframeStyle) {
                        return new KeyframeStyle(keyframeStyle);
                    }));
                } else {
                    _class_private_field_get(this, _payload1).keyframes.forEach(function(keyframeStyle, index) {
                        var _class_private_field_get_index;
                        (_class_private_field_get_index = _class_private_field_get(_this, _keyframesInternal)[index]) === null || _class_private_field_get_index === void 0 ? void 0 : _class_private_field_get_index.setPayload(keyframeStyle);
                    });
                }
            }
        },
        {
            key: "name",
            value: function name() {
                return _class_private_field_get(this, _payload1).name;
            }
        },
        {
            key: "keyframes",
            value: function keyframes() {
                return _class_private_field_get(this, _keyframesInternal);
            }
        }
    ]);
    return KeyframesRule;
}();
var _payload2 = /*#__PURE__*/ new WeakMap(), _offsetInternal = /*#__PURE__*/ new WeakMap();
var KeyframeStyle = /*#__PURE__*/ function() {
    "use strict";
    function KeyframeStyle(payload) {
        _class_call_check(this, KeyframeStyle);
        _class_private_field_init(this, _payload2, {
            writable: true,
            value: void 0 // Assertion is safe because `setPayload` call in `constructor` sets the value.
        });
        _class_private_field_init(this, _offsetInternal, {
            writable: true,
            value: void 0 // Assertion is safe because `setPayload` call in `constructor` sets the value.
        });
        this.setPayload(payload);
    }
    _create_class(KeyframeStyle, [
        {
            key: "setPayload",
            value: function setPayload(payload) {
                _class_private_field_set(this, _payload2, payload);
                _class_private_field_set(this, _offsetInternal, payload.offset);
            }
        },
        {
            key: "offset",
            value: function offset() {
                return _class_private_field_get(this, _offsetInternal);
            }
        },
        {
            key: "setOffset",
            value: function setOffset(offset) {
                _class_private_field_set(this, _offsetInternal, offset * 100 + '%');
            }
        },
        {
            key: "offsetAsNumber",
            value: function offsetAsNumber() {
                return parseFloat(_class_private_field_get(this, _offsetInternal)) / 100;
            }
        },
        {
            key: "easing",
            value: function easing() {
                return _class_private_field_get(this, _payload2).easing;
            }
        }
    ]);
    return KeyframeStyle;
}();
var _animationModel2 = /*#__PURE__*/ new WeakMap(), _idInternal = /*#__PURE__*/ new WeakMap(), _scrollNodeInternal = /*#__PURE__*/ new WeakMap(), _animationsInternal = /*#__PURE__*/ new WeakMap(), _pausedInternal = /*#__PURE__*/ new WeakMap(), _screenshotImages = /*#__PURE__*/ new WeakMap();
var AnimationGroup = /*#__PURE__*/ function() {
    "use strict";
    function AnimationGroup(animationModel, id, animations) {
        _class_call_check(this, AnimationGroup);
        _class_private_field_init(this, _animationModel2, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _idInternal, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _scrollNodeInternal, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _animationsInternal, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _pausedInternal, {
            writable: true,
            value: void 0
        });
        _define_property(this, "screenshotsInternal", void 0);
        _class_private_field_init(this, _screenshotImages, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _animationModel2, animationModel);
        _class_private_field_set(this, _idInternal, id);
        _class_private_field_set(this, _animationsInternal, animations);
        _class_private_field_set(this, _pausedInternal, false);
        this.screenshotsInternal = [];
        _class_private_field_set(this, _screenshotImages, []);
    }
    _create_class(AnimationGroup, [
        {
            key: "isScrollDriven",
            value: function isScrollDriven() {
                var _class_private_field_get_;
                return Boolean((_class_private_field_get_ = _class_private_field_get(this, _animationsInternal)[0]) === null || _class_private_field_get_ === void 0 ? void 0 : _class_private_field_get_.viewOrScrollTimeline());
            }
        },
        {
            key: "id",
            value: function id() {
                return _class_private_field_get(this, _idInternal);
            }
        },
        {
            key: "animations",
            value: function animations() {
                return _class_private_field_get(this, _animationsInternal);
            }
        },
        {
            key: "release",
            value: function release() {
                _class_private_field_get(this, _animationModel2).animationGroups.delete(this.id());
                _class_private_field_get(this, _animationModel2).releaseAnimations(this.animationIds());
            }
        },
        {
            key: "animationIds",
            value: function animationIds() {
                function extractId(animation) {
                    return animation.id();
                }
                return _class_private_field_get(this, _animationsInternal).map(extractId);
            }
        },
        {
            key: "startTime",
            value: function startTime() {
                return _class_private_field_get(this, _animationsInternal)[0].startTime();
            }
        },
        {
            // For scroll driven animations, it returns the duration in pixels (i.e. after how many pixels of scroll the animation is going to end)
            // For time animations, it returns milliseconds.
            key: "groupDuration",
            value: function groupDuration() {
                var duration = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _animationsInternal)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var anim = _step.value;
                        duration = Math.max(duration, anim.delayOrStartTime() + anim.iterationDuration());
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
                return duration;
            }
        },
        {
            // For scroll driven animations, it returns the duration in pixels (i.e. after how many pixels of scroll the animation is going to end)
            // For time animations, it returns milliseconds.
            key: "finiteDuration",
            value: function finiteDuration() {
                var maxDuration = 0;
                for(var i = 0; i < _class_private_field_get(this, _animationsInternal).length; ++i){
                    maxDuration = Math.max(maxDuration, _class_private_field_get(this, _animationsInternal)[i].finiteDuration());
                }
                return maxDuration;
            }
        },
        {
            key: "scrollOrientation",
            value: function scrollOrientation() {
                var _class_private_field_get_;
                var timeline = (_class_private_field_get_ = _class_private_field_get(this, _animationsInternal)[0]) === null || _class_private_field_get_ === void 0 ? void 0 : _class_private_field_get_.viewOrScrollTimeline();
                if (!timeline) {
                    return null;
                }
                return timeline.axis;
            }
        },
        {
            key: "scrollNode",
            value: function scrollNode() {
                var _this = this;
                return _async_to_generator(function() {
                    var _class_private_field_get__viewOrScrollTimeline, _class_private_field_get_, sourceNodeId, deferredScrollNode, scrollNode;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_class_private_field_get(_this, _scrollNodeInternal)) {
                                    return [
                                        2,
                                        _class_private_field_get(_this, _scrollNodeInternal)
                                    ];
                                }
                                if (!_this.isScrollDriven()) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                sourceNodeId = (_class_private_field_get_ = _class_private_field_get(_this, _animationsInternal)[0]) === null || _class_private_field_get_ === void 0 ? void 0 : (_class_private_field_get__viewOrScrollTimeline = _class_private_field_get_.viewOrScrollTimeline()) === null || _class_private_field_get__viewOrScrollTimeline === void 0 ? void 0 : _class_private_field_get__viewOrScrollTimeline.sourceNodeId;
                                if (!sourceNodeId) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                deferredScrollNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DeferredDOMNode(_class_private_field_get(_this, _animationModel2).target(), sourceNodeId);
                                return [
                                    4,
                                    deferredScrollNode.resolvePromise()
                                ];
                            case 1:
                                scrollNode = _state.sent();
                                if (!scrollNode) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                _class_private_field_set(_this, _scrollNodeInternal, new _AnimationDOMNode_js__WEBPACK_IMPORTED_MODULE_2__.AnimationDOMNode(scrollNode));
                                return [
                                    2,
                                    _class_private_field_get(_this, _scrollNodeInternal)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "seekTo",
            value: function seekTo(currentTime) {
                void _class_private_field_get(this, _animationModel2).agent.invoke_seekAnimations({
                    animations: this.animationIds(),
                    currentTime: currentTime
                });
            }
        },
        {
            key: "paused",
            value: function paused() {
                return _class_private_field_get(this, _pausedInternal);
            }
        },
        {
            key: "togglePause",
            value: function togglePause(paused) {
                if (paused === _class_private_field_get(this, _pausedInternal)) {
                    return;
                }
                _class_private_field_set(this, _pausedInternal, paused);
                void _class_private_field_get(this, _animationModel2).agent.invoke_setPaused({
                    animations: this.animationIds(),
                    paused: paused
                });
            }
        },
        {
            key: "currentTimePromise",
            value: function currentTimePromise() {
                var longestAnim = null;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _animationsInternal)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var anim = _step.value;
                        if (!longestAnim || anim.endTime() > longestAnim.endTime()) {
                            longestAnim = anim;
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
                if (!longestAnim) {
                    throw new Error('No longest animation found');
                }
                return _class_private_field_get(this, _animationModel2).agent.invoke_getCurrentTime({
                    id: longestAnim.id()
                }).then(function(param) {
                    var currentTime = param.currentTime;
                    return currentTime || 0;
                });
            }
        },
        {
            key: "matches",
            value: function matches(group) {
                function extractId(anim) {
                    var _anim_viewOrScrollTimeline, _anim_viewOrScrollTimeline1;
                    var _anim_viewOrScrollTimeline_sourceNodeId, _anim_viewOrScrollTimeline_axis;
                    var timelineId = ((_anim_viewOrScrollTimeline_sourceNodeId = (_anim_viewOrScrollTimeline = anim.viewOrScrollTimeline()) === null || _anim_viewOrScrollTimeline === void 0 ? void 0 : _anim_viewOrScrollTimeline.sourceNodeId) !== null && _anim_viewOrScrollTimeline_sourceNodeId !== void 0 ? _anim_viewOrScrollTimeline_sourceNodeId : '') + ((_anim_viewOrScrollTimeline_axis = (_anim_viewOrScrollTimeline1 = anim.viewOrScrollTimeline()) === null || _anim_viewOrScrollTimeline1 === void 0 ? void 0 : _anim_viewOrScrollTimeline1.axis) !== null && _anim_viewOrScrollTimeline_axis !== void 0 ? _anim_viewOrScrollTimeline_axis : '');
                    var regularId = anim.type() === "WebAnimation" /* Protocol.Animation.AnimationType.WebAnimation */  ? anim.type() + anim.id() : anim.cssId();
                    return regularId + timelineId;
                }
                if (_class_private_field_get(this, _animationsInternal).length !== _class_private_field_get(group, _animationsInternal).length) {
                    return false;
                }
                var left = _class_private_field_get(this, _animationsInternal).map(extractId).sort();
                var right = _class_private_field_get(group, _animationsInternal).map(extractId).sort();
                for(var i = 0; i < left.length; i++){
                    if (left[i] !== right[i]) {
                        return false;
                    }
                }
                return true;
            }
        },
        {
            key: "shouldInclude",
            value: function shouldInclude(group) {
                // We want to include the animations coming from the incoming group
                // inside this group if they were to be grouped if the events came at the same time.
                var _$_class_private_field_get = _sliced_to_array(_class_private_field_get(group, _animationsInternal), 1), firstIncomingAnimation = _$_class_private_field_get[0];
                var _$_class_private_field_get1 = _sliced_to_array(_class_private_field_get(this, _animationsInternal), 1), firstAnimation = _$_class_private_field_get1[0];
                return shouldGroupAnimations(firstAnimation, firstIncomingAnimation);
            }
        },
        {
            key: "appendAnimations",
            value: function appendAnimations(animations) {
                var _$_class_private_field_get;
                (_$_class_private_field_get = _class_private_field_get(this, _animationsInternal)).push.apply(_$_class_private_field_get, _to_consumable_array(animations));
            }
        },
        {
            key: "rebaseTo",
            value: function rebaseTo(group) {
                _class_private_field_get(this, _animationModel2).releaseAnimations(this.animationIds());
                _class_private_field_set(this, _animationsInternal, _class_private_field_get(group, _animationsInternal));
                _class_private_field_set(this, _scrollNodeInternal, undefined);
            }
        },
        {
            key: "screenshots",
            value: function screenshots() {
                for(var i = 0; i < this.screenshotsInternal.length; ++i){
                    var image = new Image();
                    image.src = 'data:image/jpeg;base64,' + this.screenshotsInternal[i];
                    _class_private_field_get(this, _screenshotImages).push(image);
                }
                this.screenshotsInternal = [];
                return _class_private_field_get(this, _screenshotImages);
            }
        }
    ]);
    return AnimationGroup;
}();
var _animationModel3 = /*#__PURE__*/ new WeakMap();
var AnimationDispatcher = /*#__PURE__*/ function() {
    "use strict";
    function AnimationDispatcher(animationModel) {
        _class_call_check(this, AnimationDispatcher);
        _class_private_field_init(this, _animationModel3, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _animationModel3, animationModel);
    }
    _create_class(AnimationDispatcher, [
        {
            key: "animationCreated",
            value: function animationCreated(_event) {
            // Previously this event was used to batch the animations into groups
            // and we were waiting for animationStarted events to be sent for
            // all the created animations and until then we weren't creating any
            // groups. This was allowing us to not miss any animations that were
            // going to be in the same group. However, now we're not using this event
            // to do batching and instead:
            // * We debounce the flush calls so that if the animationStarted events
            // for the same animation group come in different times; we create one
            // group for them.
            // * Even though an animation group is created and rendered for some animations
            // that have the same startTime (or same timeline & scroll axis for SDAs), now
            // whenever an `animationStarted` event comes we check whether there is a group
            // we can add the related animation. If so, we add it and emit `animationGroupUpdated`
            // event. So that, all the animations that were supposed to be in the same group
            // will be in the same group.
            }
        },
        {
            key: "animationCanceled",
            value: function animationCanceled(param) {
                var id = param.id;
                _class_private_field_get(this, _animationModel3).animationCanceled(id);
            }
        },
        {
            key: "animationStarted",
            value: function animationStarted(param) {
                var animation = param.animation;
                void _class_private_field_get(this, _animationModel3).animationStarted(animation);
            }
        },
        {
            key: "animationUpdated",
            value: function animationUpdated(param) {
                var animation = param.animation;
                void _class_private_field_get(this, _animationModel3).animationUpdated(animation);
            }
        }
    ]);
    return AnimationDispatcher;
}();
var _requests = /*#__PURE__*/ new WeakMap(), _screenCaptureModel = /*#__PURE__*/ new WeakMap(), _animationModel4 = /*#__PURE__*/ new WeakMap(), _stopTimer = /*#__PURE__*/ new WeakMap(), _endTime = /*#__PURE__*/ new WeakMap(), _capturing = /*#__PURE__*/ new WeakMap();
var ScreenshotCapture = /*#__PURE__*/ function() {
    "use strict";
    function ScreenshotCapture(animationModel, screenCaptureModel) {
        _class_call_check(this, ScreenshotCapture);
        _class_private_field_init(this, _requests, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _screenCaptureModel, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _animationModel4, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _stopTimer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _endTime, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _capturing, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _requests, []);
        _class_private_field_set(this, _screenCaptureModel, screenCaptureModel);
        _class_private_field_set(this, _animationModel4, animationModel);
        _class_private_field_get(this, _animationModel4).addEventListener(Events.ModelReset, this.stopScreencast, this);
    }
    _create_class(ScreenshotCapture, [
        {
            key: "captureScreenshots",
            value: function captureScreenshots(duration, screenshots) {
                var screencastDuration = Math.min(duration / _class_private_field_get(this, _animationModel4).playbackRate, 3000);
                var endTime = screencastDuration + window.performance.now();
                _class_private_field_get(this, _requests).push({
                    endTime: endTime,
                    screenshots: screenshots
                });
                if (!_class_private_field_get(this, _endTime) || endTime > _class_private_field_get(this, _endTime)) {
                    clearTimeout(_class_private_field_get(this, _stopTimer));
                    _class_private_field_set(this, _stopTimer, window.setTimeout(this.stopScreencast.bind(this), screencastDuration));
                    _class_private_field_set(this, _endTime, endTime);
                }
                if (_class_private_field_get(this, _capturing)) {
                    return;
                }
                _class_private_field_set(this, _capturing, true);
                _class_private_field_get(this, _screenCaptureModel).startScreencast("jpeg" /* Protocol.Page.StartScreencastRequestFormat.Jpeg */ , 80, undefined, 300, 2, this.screencastFrame.bind(this), function(_visible) {});
            }
        },
        {
            key: "screencastFrame",
            value: function screencastFrame(base64Data, _metadata) {
                function isAnimating(request) {
                    return request.endTime >= now;
                }
                if (!_class_private_field_get(this, _capturing)) {
                    return;
                }
                var now = window.performance.now();
                _class_private_field_set(this, _requests, _class_private_field_get(this, _requests).filter(isAnimating));
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _requests)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var request = _step.value;
                        request.screenshots.push(base64Data);
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
        },
        {
            key: "stopScreencast",
            value: function stopScreencast() {
                if (!_class_private_field_get(this, _capturing)) {
                    return;
                }
                _class_private_field_set(this, _stopTimer, undefined);
                _class_private_field_set(this, _endTime, undefined);
                _class_private_field_set(this, _requests, []);
                _class_private_field_set(this, _capturing, false);
                _class_private_field_get(this, _screenCaptureModel).stopScreencast();
            }
        }
    ]);
    return ScreenshotCapture;
}();
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel.register(AnimationModel, {
    capabilities: 2 /* SDK.Target.Capability.DOM */ ,
    autostart: false
}); //# sourceMappingURL=AnimationModel.js.map


}),

}]);