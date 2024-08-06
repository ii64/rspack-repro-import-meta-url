"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_animation_AnimationUI_js"], {
"./panels/animation/AnimationGroupPreviewUI.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnimationGroupPreviewUI: function() { return AnimationGroupPreviewUI; }
});
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _AnimationUI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimationUI.js */ "./panels/animation/AnimationUI.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
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




var _model = /*#__PURE__*/ new WeakMap(), _removeButtonInternal = /*#__PURE__*/ new WeakMap(), _replayOverlayElement = /*#__PURE__*/ new WeakMap(), _svg = /*#__PURE__*/ new WeakMap(), _viewBoxHeight = /*#__PURE__*/ new WeakMap();
var AnimationGroupPreviewUI = /*#__PURE__*/ function() {
    "use strict";
    function AnimationGroupPreviewUI(model) {
        var _this = this;
        _class_call_check(this, AnimationGroupPreviewUI);
        _class_private_field_init(this, _model, {
            writable: true,
            value: void 0
        });
        _define_property(this, "element", void 0);
        _class_private_field_init(this, _removeButtonInternal, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _replayOverlayElement, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _svg, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _viewBoxHeight, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _model, model);
        this.element = document.createElement('button');
        this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.item("animations.buffer-preview".concat(model.isScrollDriven() ? '-sda' : '')).track({
            click: true
        })));
        this.element.classList.add('animation-buffer-preview');
        this.element.addEventListener('animationend', function() {
            _this.element.classList.add('no-animation');
        });
        this.element.createChild('div', 'animation-paused fill');
        if (model.isScrollDriven()) {
            this.element.appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.create('mouse', 'preview-icon'));
        } else {
            this.element.appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.create('watch', 'preview-icon'));
        }
        _class_private_field_set(this, _removeButtonInternal, this.element.createChild('button', 'animation-remove-button'));
        _class_private_field_get(this, _removeButtonInternal).setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.action('animations.remove-preview').track({
            click: true
        })));
        _class_private_field_get(this, _removeButtonInternal).appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.create('cross'));
        _class_private_field_set(this, _replayOverlayElement, this.element.createChild('div', 'animation-buffer-preview-animation'));
        _class_private_field_set(this, _svg, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(this.element, 'svg'));
        _class_private_field_get(this, _svg).setAttribute('width', '100%');
        _class_private_field_get(this, _svg).setAttribute('preserveAspectRatio', 'none');
        _class_private_field_get(this, _svg).setAttribute('height', '100%');
        _class_private_field_set(this, _viewBoxHeight, 32);
        _class_private_field_get(this, _svg).setAttribute('viewBox', '0 0 100 ' + _class_private_field_get(this, _viewBoxHeight));
        _class_private_field_get(this, _svg).setAttribute('shape-rendering', 'crispEdges');
        this.render();
    }
    _create_class(AnimationGroupPreviewUI, [
        {
            key: "removeButton",
            value: function removeButton() {
                return _class_private_field_get(this, _removeButtonInternal);
            }
        },
        {
            key: "replay",
            value: function replay() {
                _class_private_field_get(this, _replayOverlayElement).animate([
                    {
                        offset: 0,
                        width: '0%',
                        opacity: 1
                    },
                    {
                        offset: 0.9,
                        width: '100%',
                        opacity: 1
                    },
                    {
                        offset: 1,
                        width: '100%',
                        opacity: 0
                    }
                ], {
                    duration: 200,
                    easing: 'cubic-bezier(0, 0, 0.2, 1)'
                });
            }
        },
        {
            key: "render",
            value: function render() {
                _class_private_field_get(this, _svg).removeChildren();
                var maxToShow = 10;
                var numberOfAnimations = Math.min(_class_private_field_get(this, _model).animations().length, maxToShow);
                var timeToPixelRatio = 100 / Math.max(_class_private_field_get(this, _model).groupDuration(), 750);
                for(var i = 0; i < numberOfAnimations; i++){
                    var animation = _class_private_field_get(this, _model).animations()[i];
                    var line = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(_class_private_field_get(this, _svg), 'line');
                    var startPoint = animation.delayOrStartTime();
                    var endPoint = startPoint + animation.iterationDuration();
                    line.setAttribute('x1', String(startPoint * timeToPixelRatio));
                    line.setAttribute('x2', String(endPoint * timeToPixelRatio));
                    var y = String(Math.floor(_class_private_field_get(this, _viewBoxHeight) / Math.max(6, numberOfAnimations) * i + 1));
                    line.setAttribute('y1', y);
                    line.setAttribute('y2', y);
                    line.style.stroke = _AnimationUI_js__WEBPACK_IMPORTED_MODULE_3__.AnimationUI.colorForAnimation(_class_private_field_get(this, _model).animations()[i]);
                }
            }
        }
    ]);
    return AnimationGroupPreviewUI;
} //# sourceMappingURL=AnimationGroupPreviewUI.js.map
();


}),
"./panels/animation/AnimationTimeline.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnimationTimeline: function() { return AnimationTimeline; },
  GlobalPlaybackRates: function() { return GlobalPlaybackRates; },
  NodeUI: function() { return NodeUI; },
  StepTimingFunction: function() { return StepTimingFunction; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _AnimationGroupPreviewUI_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AnimationGroupPreviewUI.js */ "./panels/animation/AnimationGroupPreviewUI.js");
/* harmony import */var _AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AnimationModel.js */ "./panels/animation/AnimationModel.js");
/* harmony import */var _AnimationScreenshotPopover_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AnimationScreenshotPopover.js */ "./panels/animation/AnimationScreenshotPopover.js");
/* harmony import */var _animationTimeline_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./animationTimeline.css.js */ "./panels/animation/animationTimeline.css.js");
/* harmony import */var _AnimationUI_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AnimationUI.js */ "./panels/animation/AnimationUI.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
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












var UIStrings = {
    /**
     *@description Timeline hint text content in Animation Timeline of the Animation Inspector
     */ selectAnEffectAboveToInspectAnd: 'Select an effect above to inspect and modify.',
    /**
     *@description Text to clear everything
     */ clearAll: 'Clear all',
    /**
     *@description Tooltip text that appears when hovering over largeicon pause button in Animation Timeline of the Animation Inspector
     */ pauseAll: 'Pause all',
    /**
     *@description Title of the playback rate button listbox
     */ playbackRates: 'Playback rates',
    /**
     *@description Text in Animation Timeline of the Animation Inspector
     *@example {50} PH1
     */ playbackRatePlaceholder: '{PH1}%',
    /**
     *@description Text of an item that pause the running task
     */ pause: 'Pause',
    /**
     *@description Button title in Animation Timeline of the Animation Inspector
     *@example {50%} PH1
     */ setSpeedToS: 'Set speed to {PH1}',
    /**
     *@description Title of Animation Previews listbox
     */ animationPreviews: 'Animation previews',
    /**
     *@description Empty buffer hint text content in Animation Timeline of the Animation Inspector
     */ waitingForAnimations: 'Waiting for animations...',
    /**
     *@description Tooltip text that appears when hovering over largeicon replay animation button in Animation Timeline of the Animation Inspector
     */ replayTimeline: 'Replay timeline',
    /**
     *@description Text in Animation Timeline of the Animation Inspector
     */ resumeAll: 'Resume all',
    /**
     *@description Title of control button in animation timeline of the animation inspector
     */ playTimeline: 'Play timeline',
    /**
     *@description Title of control button in animation timeline of the animation inspector
     */ pauseTimeline: 'Pause timeline',
    /**
     *@description Title of a specific Animation Preview
     *@example {1} PH1
     */ animationPreviewS: 'Animation Preview {PH1}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/animation/AnimationTimeline.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var nodeUIsByNode = new WeakMap();
var playbackRates = new WeakMap();
var MIN_TIMELINE_CONTROLS_WIDTH = 120;
var DEFAULT_TIMELINE_CONTROLS_WIDTH = 150;
var MAX_TIMELINE_CONTROLS_WIDTH = 720;
var animationTimelineInstance;
var _gridWrapper = /*#__PURE__*/ new WeakMap(), _grid = /*#__PURE__*/ new WeakMap(), _playbackRate = /*#__PURE__*/ new WeakMap(), _allPaused = /*#__PURE__*/ new WeakMap(), _screenshotPopovers = /*#__PURE__*/ new WeakMap(), _animationsContainer = /*#__PURE__*/ new WeakMap(), _playbackRateButtons = /*#__PURE__*/ new WeakMap(), _previewContainer = /*#__PURE__*/ new WeakMap(), _timelineScrubber = /*#__PURE__*/ new WeakMap(), _currentTime = /*#__PURE__*/ new WeakMap(), _clearButton = /*#__PURE__*/ new WeakMap(), _selectedGroup = /*#__PURE__*/ new WeakMap(), _renderQueue = /*#__PURE__*/ new WeakMap(), _defaultDuration = /*#__PURE__*/ new WeakMap(), _durationInternal = /*#__PURE__*/ new WeakMap(), _timelineControlsWidth = /*#__PURE__*/ new WeakMap(), _nodesMap = /*#__PURE__*/ new WeakMap(), _uiAnimations = /*#__PURE__*/ new WeakMap(), _groupBuffer = /*#__PURE__*/ new WeakMap(), _previewMap = /*#__PURE__*/ new WeakMap(), _animationsMap = /*#__PURE__*/ new WeakMap(), _timelineScrubberLine = /*#__PURE__*/ new WeakMap(), _pauseButton = /*#__PURE__*/ new WeakMap(), _controlButton = /*#__PURE__*/ new WeakMap(), _controlState = /*#__PURE__*/ new WeakMap(), _redrawing = /*#__PURE__*/ new WeakMap(), _cachedTimelineWidth = /*#__PURE__*/ new WeakMap(), _scrubberPlayer = /*#__PURE__*/ new WeakMap(), _gridOffsetLeft = /*#__PURE__*/ new WeakMap(), _originalScrubberTime = /*#__PURE__*/ new WeakMap(), _animationGroupPausedBeforeScrub = /*#__PURE__*/ new WeakMap(), _originalMousePosition = /*#__PURE__*/ new WeakMap(), _timelineControlsResizer = /*#__PURE__*/ new WeakMap(), _gridHeader = /*#__PURE__*/ new WeakMap(), _scrollListenerId = /*#__PURE__*/ new WeakMap(), _collectedGroups = /*#__PURE__*/ new WeakMap(), _createPreviewForCollectedGroupsThrottler = /*#__PURE__*/ new WeakMap(), _animationGroupUpdatedThrottler = /*#__PURE__*/ new WeakMap(), // We're only adding event listeners to the animation model when the panel is first shown.
_initialized = /*#__PURE__*/ new WeakMap(), _setupTimelineControlsResizer = /*#__PURE__*/ new WeakSet(), _scrubberCurrentTime = /*#__PURE__*/ new WeakSet();
var AnimationTimeline = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(AnimationTimeline, _UI_Widget_VBox);
    var _super = _create_super(AnimationTimeline);
    function AnimationTimeline() {
        _class_call_check(this, AnimationTimeline);
        var _this;
        _this = _super.call(this, true);
        _class_private_method_init(_assert_this_initialized(_this), _setupTimelineControlsResizer);
        _class_private_method_init(_assert_this_initialized(_this), _scrubberCurrentTime);
        _class_private_field_init(_assert_this_initialized(_this), _gridWrapper, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _grid, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _playbackRate, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _allPaused, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _screenshotPopovers, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _animationsContainer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _playbackRateButtons, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _previewContainer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _timelineScrubber, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _currentTime, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _clearButton, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _selectedGroup, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _renderQueue, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _defaultDuration, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _durationInternal, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _timelineControlsWidth, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _nodesMap, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _uiAnimations, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _groupBuffer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _previewMap, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _animationsMap, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _timelineScrubberLine, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _pauseButton, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _controlButton, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _controlState, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _redrawing, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _cachedTimelineWidth, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _scrubberPlayer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _gridOffsetLeft, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _originalScrubberTime, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _animationGroupPausedBeforeScrub, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _originalMousePosition, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _timelineControlsResizer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _gridHeader, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _scrollListenerId, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _collectedGroups, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _createPreviewForCollectedGroupsThrottler, {
            writable: true,
            value: new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(10)
        });
        _class_private_field_init(_assert_this_initialized(_this), _animationGroupUpdatedThrottler, {
            writable: true,
            value: new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(10)
        });
        _class_private_field_init(_assert_this_initialized(_this), _initialized, {
            writable: true,
            value: false
        });
        _this.element.classList.add('animations-timeline');
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.panel('animations').track({
            resize: true
        })));
        _class_private_field_set(_assert_this_initialized(_this), _timelineControlsResizer, _this.contentElement.createChild('div', 'timeline-controls-resizer'));
        _class_private_field_set(_assert_this_initialized(_this), _gridWrapper, _this.contentElement.createChild('div', 'grid-overflow-wrapper'));
        _class_private_field_set(_assert_this_initialized(_this), _grid, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(_class_private_field_get(_assert_this_initialized(_this), _gridWrapper), 'svg', 'animation-timeline-grid'));
        _class_private_field_set(_assert_this_initialized(_this), _playbackRate, 1);
        _class_private_field_set(_assert_this_initialized(_this), _allPaused, false);
        _class_private_field_set(_assert_this_initialized(_this), _animationGroupPausedBeforeScrub, false);
        _this.createHeader();
        _class_private_field_set(_assert_this_initialized(_this), _animationsContainer, _this.contentElement.createChild('div', 'animation-timeline-rows'));
        _class_private_field_get(_this, _animationsContainer).setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.section('animations')));
        var timelineHint = _this.contentElement.createChild('div', 'animation-timeline-rows-hint');
        timelineHint.textContent = i18nString(UIStrings.selectAnEffectAboveToInspectAnd);
        /** @const */ _class_private_field_set(_assert_this_initialized(_this), _defaultDuration, 100);
        _class_private_field_set(_assert_this_initialized(_this), _durationInternal, _class_private_field_get(_assert_this_initialized(_this), _defaultDuration));
        _class_private_field_set(_assert_this_initialized(_this), _nodesMap, new Map());
        _class_private_field_set(_assert_this_initialized(_this), _uiAnimations, []);
        _class_private_field_set(_assert_this_initialized(_this), _groupBuffer, []);
        _class_private_field_set(_assert_this_initialized(_this), _collectedGroups, []);
        _class_private_field_set(_assert_this_initialized(_this), _previewMap, new Map());
        _class_private_field_set(_assert_this_initialized(_this), _animationsMap, new Map());
        _class_private_field_set(_assert_this_initialized(_this), _timelineControlsWidth, DEFAULT_TIMELINE_CONTROLS_WIDTH);
        _this.element.style.setProperty('--timeline-controls-width', "".concat(_class_private_field_get(_assert_this_initialized(_this), _timelineControlsWidth), "px"));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.Events.NodeRemoved, function(ev) {
            return _this.markNodeAsRemoved(ev.data.node);
        }, _assert_this_initialized(_this), {
            scoped: true
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().observeModels(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__.AnimationModel, _assert_this_initialized(_this), {
            scoped: true
        });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMNode, _this.nodeChanged, _assert_this_initialized(_this));
        _class_private_method_get(_this, _setupTimelineControlsResizer, setupTimelineControlsResizer).call(_assert_this_initialized(_this));
        return _this;
    }
    _create_class(AnimationTimeline, [
        {
            key: "previewMap",
            get: function get() {
                return _class_private_field_get(this, _previewMap);
            }
        },
        {
            key: "uiAnimations",
            get: function get() {
                return _class_private_field_get(this, _uiAnimations);
            }
        },
        {
            key: "groupBuffer",
            get: function get() {
                return _class_private_field_get(this, _groupBuffer);
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                if (_class_private_field_get(this, _initialized)) {
                    return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().models(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__.AnimationModel, {
                        scoped: true
                    })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var animationModel = _step.value;
                        this.addEventListeners(animationModel);
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
                this.registerCSSFiles([
                    _animationTimeline_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
                ]);
                _class_private_field_set(this, _initialized, true);
            }
        },
        {
            key: "modelAdded",
            value: function modelAdded(animationModel) {
                if (this.isShowing()) {
                    this.addEventListeners(animationModel);
                }
            }
        },
        {
            key: "modelRemoved",
            value: function modelRemoved(animationModel) {
                this.removeEventListeners(animationModel);
            }
        },
        {
            key: "addEventListeners",
            value: function addEventListeners(animationModel) {
                void animationModel.ensureEnabled();
                animationModel.addEventListener(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AnimationGroupStarted, this.animationGroupStarted, this);
                animationModel.addEventListener(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AnimationGroupUpdated, this.animationGroupUpdated, this);
                animationModel.addEventListener(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.ModelReset, this.reset, this);
            }
        },
        {
            key: "removeEventListeners",
            value: function removeEventListeners(animationModel) {
                animationModel.removeEventListener(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AnimationGroupStarted, this.animationGroupStarted, this);
                animationModel.removeEventListener(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AnimationGroupUpdated, this.animationGroupUpdated, this);
                animationModel.removeEventListener(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.ModelReset, this.reset, this);
            }
        },
        {
            key: "nodeChanged",
            value: function nodeChanged() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _nodesMap).values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var nodeUI = _step.value;
                        nodeUI.nodeChanged();
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
            key: "createScrubber",
            value: function createScrubber() {
                _class_private_field_set(this, _timelineScrubber, document.createElement('div'));
                _class_private_field_get(this, _timelineScrubber).classList.add('animation-scrubber');
                _class_private_field_get(this, _timelineScrubber).classList.add('hidden');
                _class_private_field_set(this, _timelineScrubberLine, _class_private_field_get(this, _timelineScrubber).createChild('div', 'animation-scrubber-line'));
                _class_private_field_get(this, _timelineScrubberLine).createChild('div', 'animation-scrubber-head');
                _class_private_field_get(this, _timelineScrubber).createChild('div', 'animation-time-overlay');
                return _class_private_field_get(this, _timelineScrubber);
            }
        },
        {
            key: "createHeader",
            value: function createHeader() {
                var _this = this;
                var toolbarContainer = this.contentElement.createChild('div', 'animation-timeline-toolbar-container');
                toolbarContainer.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toolbar()));
                var topToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('animation-timeline-toolbar', toolbarContainer);
                _class_private_field_set(this, _clearButton, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStrings.clearAll), 'clear', undefined, 'animations.clear'));
                _class_private_field_get(this, _clearButton).addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationGroupsCleared);
                    _this.reset();
                });
                topToolbar.appendToolbarItem(_class_private_field_get(this, _clearButton));
                topToolbar.appendSeparator();
                _class_private_field_set(this, _pauseButton, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarToggle(i18nString(UIStrings.pauseAll), 'pause', 'resume', 'animations.pause-resume-all'));
                _class_private_field_get(this, _pauseButton).addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
                    _this.togglePauseAll();
                });
                topToolbar.appendToolbarItem(_class_private_field_get(this, _pauseButton));
                var playbackRateControl = toolbarContainer.createChild('div', 'animation-playback-rate-control');
                playbackRateControl.addEventListener('keydown', this.handlePlaybackRateControlKeyDown.bind(this));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.markAsListBox(playbackRateControl);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(playbackRateControl, i18nString(UIStrings.playbackRates));
                _class_private_field_set(this, _playbackRateButtons, []);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = GlobalPlaybackRates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var playbackRate = _step.value;
                        var button = playbackRateControl.createChild('button', 'animation-playback-rate-button');
                        button.textContent = playbackRate ? i18nString(UIStrings.playbackRatePlaceholder, {
                            PH1: playbackRate * 100
                        }) : i18nString(UIStrings.pause);
                        button.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action().context("animations.playback-rate-".concat(playbackRate * 100)).track({
                            click: true,
                            keydown: 'ArrowUp|ArrowDown|ArrowLeft|ArrowRight'
                        })));
                        playbackRates.set(button, playbackRate);
                        button.addEventListener('click', this.setPlaybackRate.bind(this, playbackRate));
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.markAsOption(button);
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(button, i18nString(UIStrings.setSpeedToS, {
                            PH1: button.textContent
                        }));
                        button.tabIndex = -1;
                        _class_private_field_get(this, _playbackRateButtons).push(button);
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
                this.updatePlaybackControls();
                _class_private_field_set(this, _previewContainer, this.contentElement.createChild('div', 'animation-timeline-buffer'));
                _class_private_field_get(this, _previewContainer).setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.section('film-strip')));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.markAsListBox(_class_private_field_get(this, _previewContainer));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(_class_private_field_get(this, _previewContainer), i18nString(UIStrings.animationPreviews));
                var emptyBufferHint = this.contentElement.createChild('div', 'animation-timeline-buffer-hint');
                emptyBufferHint.textContent = i18nString(UIStrings.waitingForAnimations);
                var container = this.contentElement.createChild('div', 'animation-timeline-header');
                var controls = container.createChild('div', 'animation-controls');
                _class_private_field_set(this, _currentTime, controls.createChild('div', 'animation-timeline-current-time monospace'));
                var toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('animation-controls-toolbar', controls);
                _class_private_field_set(this, _controlButton, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStrings.replayTimeline), 'replay', undefined, 'animations.play-replay-pause-animation-group'));
                _class_private_field_get(this, _controlButton).element.classList.add('toolbar-state-on');
                _class_private_field_set(this, _controlState, "replay-outline" /* ControlState.Replay */ );
                _class_private_field_get(this, _controlButton).addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , this.controlButtonToggle.bind(this));
                toolbar.appendToolbarItem(_class_private_field_get(this, _controlButton));
                _class_private_field_set(this, _gridHeader, container.createChild('div', 'animation-grid-header'));
                _class_private_field_get(this, _gridHeader).setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.timeline('animations.grid-header').track({
                    drag: true,
                    click: true
                })));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.installDragHandle(_class_private_field_get(this, _gridHeader), this.scrubberDragStart.bind(this), this.scrubberDragMove.bind(this), this.scrubberDragEnd.bind(this), null);
                _class_private_field_get(this, _gridWrapper).appendChild(this.createScrubber());
                this.clearCurrentTimeText();
                return container;
            }
        },
        {
            key: "handlePlaybackRateControlKeyDown",
            value: function handlePlaybackRateControlKeyDown(event) {
                var keyboardEvent = event;
                switch(keyboardEvent.key){
                    case 'ArrowLeft':
                    case 'ArrowUp':
                        this.focusNextPlaybackRateButton(event.target, /* focusPrevious */ true);
                        break;
                    case 'ArrowRight':
                    case 'ArrowDown':
                        this.focusNextPlaybackRateButton(event.target);
                        break;
                }
            }
        },
        {
            key: "focusNextPlaybackRateButton",
            value: function focusNextPlaybackRateButton(target, focusPrevious) {
                var button = target;
                var currentIndex = _class_private_field_get(this, _playbackRateButtons).indexOf(button);
                var nextIndex = focusPrevious ? currentIndex - 1 : currentIndex + 1;
                if (nextIndex < 0 || nextIndex >= _class_private_field_get(this, _playbackRateButtons).length) {
                    return;
                }
                var nextButton = _class_private_field_get(this, _playbackRateButtons)[nextIndex];
                nextButton.tabIndex = 0;
                nextButton.focus();
                if (target) {
                    target.tabIndex = -1;
                }
            }
        },
        {
            key: "togglePauseAll",
            value: function togglePauseAll() {
                _class_private_field_set(this, _allPaused, !_class_private_field_get(this, _allPaused));
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_class_private_field_get(this, _allPaused) ? _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationsPaused : _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationsResumed);
                if (_class_private_field_get(this, _pauseButton)) {
                    _class_private_field_get(this, _pauseButton).setToggled(_class_private_field_get(this, _allPaused));
                }
                this.setPlaybackRate(_class_private_field_get(this, _playbackRate));
                if (_class_private_field_get(this, _pauseButton)) {
                    _class_private_field_get(this, _pauseButton).setTitle(_class_private_field_get(this, _allPaused) ? i18nString(UIStrings.resumeAll) : i18nString(UIStrings.pauseAll));
                }
            }
        },
        {
            key: "setPlaybackRate",
            value: function setPlaybackRate(playbackRate) {
                if (playbackRate !== _class_private_field_get(this, _playbackRate)) {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.animationPlaybackRateChanged(playbackRate === 0.1 ? 2 /* Host.UserMetrics.AnimationsPlaybackRate.Percent10 */  : playbackRate === 0.25 ? 1 /* Host.UserMetrics.AnimationsPlaybackRate.Percent25 */  : playbackRate === 1 ? 0 /* Host.UserMetrics.AnimationsPlaybackRate.Percent100 */  : 3 /* Host.UserMetrics.AnimationsPlaybackRate.Other */ );
                }
                _class_private_field_set(this, _playbackRate, playbackRate);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().models(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__.AnimationModel, {
                        scoped: true
                    })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var animationModel = _step.value;
                        animationModel.setPlaybackRate(_class_private_field_get(this, _allPaused) ? 0 : _class_private_field_get(this, _playbackRate));
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
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationsPlaybackRateChanged);
                if (_class_private_field_get(this, _scrubberPlayer)) {
                    _class_private_field_get(this, _scrubberPlayer).playbackRate = this.effectivePlaybackRate();
                }
                this.updatePlaybackControls();
            }
        },
        {
            key: "updatePlaybackControls",
            value: function updatePlaybackControls() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _playbackRateButtons)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var button = _step.value;
                        var selected = _class_private_field_get(this, _playbackRate) === playbackRates.get(button);
                        button.classList.toggle('selected', selected);
                        button.tabIndex = selected ? 0 : -1;
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
            key: "controlButtonToggle",
            value: function controlButtonToggle() {
                if (_class_private_field_get(this, _controlState) === "play-outline" /* ControlState.Play */ ) {
                    this.togglePause(false);
                } else if (_class_private_field_get(this, _controlState) === "replay-outline" /* ControlState.Replay */ ) {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationGroupReplayed);
                    this.replay();
                } else {
                    this.togglePause(true);
                }
            }
        },
        {
            key: "updateControlButton",
            value: function updateControlButton() {
                var _$_class_private_field_get;
                if (!_class_private_field_get(this, _controlButton)) {
                    return;
                }
                _class_private_field_get(this, _controlButton).setEnabled(Boolean(_class_private_field_get(this, _selectedGroup)) && this.hasAnimationGroupActiveNodes() && !((_$_class_private_field_get = _class_private_field_get(this, _selectedGroup)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.isScrollDriven()));
                if (_class_private_field_get(this, _selectedGroup) && _class_private_field_get(this, _selectedGroup).paused()) {
                    _class_private_field_set(this, _controlState, "play-outline" /* ControlState.Play */ );
                    _class_private_field_get(this, _controlButton).element.classList.toggle('toolbar-state-on', true);
                    _class_private_field_get(this, _controlButton).setTitle(i18nString(UIStrings.playTimeline));
                    _class_private_field_get(this, _controlButton).setGlyph('play');
                } else if (!_class_private_field_get(this, _scrubberPlayer) || !_class_private_field_get(this, _scrubberPlayer).currentTime || typeof _class_private_field_get(this, _scrubberPlayer).currentTime !== 'number' || _class_private_field_get(this, _scrubberPlayer).currentTime >= this.duration()) {
                    _class_private_field_set(this, _controlState, "replay-outline" /* ControlState.Replay */ );
                    _class_private_field_get(this, _controlButton).element.classList.toggle('toolbar-state-on', true);
                    _class_private_field_get(this, _controlButton).setTitle(i18nString(UIStrings.replayTimeline));
                    _class_private_field_get(this, _controlButton).setGlyph('replay');
                } else {
                    _class_private_field_set(this, _controlState, "pause-outline" /* ControlState.Pause */ );
                    _class_private_field_get(this, _controlButton).element.classList.toggle('toolbar-state-on', false);
                    _class_private_field_get(this, _controlButton).setTitle(i18nString(UIStrings.pauseTimeline));
                    _class_private_field_get(this, _controlButton).setGlyph('pause');
                }
            }
        },
        {
            key: "effectivePlaybackRate",
            value: function effectivePlaybackRate() {
                return _class_private_field_get(this, _allPaused) || _class_private_field_get(this, _selectedGroup) && _class_private_field_get(this, _selectedGroup).paused() ? 0 : _class_private_field_get(this, _playbackRate);
            }
        },
        {
            key: "togglePause",
            value: function togglePause(pause) {
                if (_class_private_field_get(this, _selectedGroup)) {
                    _class_private_field_get(this, _selectedGroup).togglePause(pause);
                    var preview = _class_private_field_get(this, _previewMap).get(_class_private_field_get(this, _selectedGroup));
                    if (preview) {
                        preview.element.classList.toggle('paused', pause);
                    }
                }
                if (_class_private_field_get(this, _scrubberPlayer)) {
                    _class_private_field_get(this, _scrubberPlayer).playbackRate = this.effectivePlaybackRate();
                }
                this.updateControlButton();
            }
        },
        {
            key: "replay",
            value: function replay() {
                if (!_class_private_field_get(this, _selectedGroup) || !this.hasAnimationGroupActiveNodes() || _class_private_field_get(this, _selectedGroup).isScrollDriven()) {
                    return;
                }
                _class_private_field_get(this, _selectedGroup).seekTo(0);
                this.animateTime(0);
                this.updateControlButton();
            }
        },
        {
            key: "duration",
            value: function duration() {
                return _class_private_field_get(this, _durationInternal);
            }
        },
        {
            key: "setDuration",
            value: function setDuration(duration) {
                _class_private_field_set(this, _durationInternal, duration);
                this.scheduleRedraw();
            }
        },
        {
            key: "clearTimeline",
            value: function clearTimeline() {
                var _this = this;
                if (_class_private_field_get(this, _selectedGroup) && _class_private_field_get(this, _scrollListenerId)) {
                    void _class_private_field_get(this, _selectedGroup).scrollNode().then(function(node) {
                        void (node === null || node === void 0 ? void 0 : node.removeScrollEventListener(_class_private_field_get(_this, _scrollListenerId)));
                        _class_private_field_set(_this, _scrollListenerId, undefined);
                    });
                }
                _class_private_field_set(this, _uiAnimations, []);
                _class_private_field_get(this, _nodesMap).clear();
                _class_private_field_get(this, _animationsMap).clear();
                _class_private_field_get(this, _animationsContainer).removeChildren();
                _class_private_field_set(this, _durationInternal, _class_private_field_get(this, _defaultDuration));
                _class_private_field_get(this, _timelineScrubber).classList.add('hidden');
                _class_private_field_get(this, _gridHeader).classList.remove('scrubber-enabled');
                _class_private_field_set(this, _selectedGroup, null);
                if (_class_private_field_get(this, _scrubberPlayer)) {
                    _class_private_field_get(this, _scrubberPlayer).cancel();
                }
                _class_private_field_set(this, _scrubberPlayer, undefined);
                this.clearCurrentTimeText();
                this.updateControlButton();
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.clearTimeline();
                this.setPlaybackRate(_class_private_field_get(this, _playbackRate));
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _groupBuffer)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var group = _step.value;
                        group.release();
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
                _class_private_field_set(this, _groupBuffer, []);
                this.clearPreviews();
                this.renderGrid();
            }
        },
        {
            key: "animationGroupStarted",
            value: function animationGroupStarted(param) {
                var data = param.data;
                this.addAnimationGroup(data);
            }
        },
        {
            key: "scheduledRedrawAfterAnimationGroupUpdatedForTest",
            value: function scheduledRedrawAfterAnimationGroupUpdatedForTest() {}
        },
        {
            key: "animationGroupUpdated",
            value: function animationGroupUpdated(param) {
                var group = param.data;
                var _this = this;
                void _class_private_field_get(this, _animationGroupUpdatedThrottler).schedule(/*#__PURE__*/ _async_to_generator(function() {
                    var preview, animationNode, scrollRange, _tmp, scrollOffset, _tmp1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                preview = _class_private_field_get(_this, _previewMap).get(group);
                                if (preview) {
                                    preview.replay();
                                }
                                if (_class_private_field_get(_this, _selectedGroup) !== group) {
                                    return [
                                        2
                                    ];
                                }
                                if (!group.isScrollDriven()) return [
                                    3,
                                    11
                                ];
                                return [
                                    4,
                                    group.scrollNode()
                                ];
                            case 1:
                                animationNode = _state.sent();
                                if (!animationNode) return [
                                    3,
                                    10
                                ];
                                if (!(group.scrollOrientation() === "vertical" /* Protocol.DOM.ScrollOrientation.Vertical */ )) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    animationNode.verticalScrollRange()
                                ];
                            case 2:
                                _tmp = _state.sent();
                                return [
                                    3,
                                    5
                                ];
                            case 3:
                                return [
                                    4,
                                    animationNode.horizontalScrollRange()
                                ];
                            case 4:
                                _tmp = _state.sent();
                                _state.label = 5;
                            case 5:
                                scrollRange = _tmp;
                                if (!(group.scrollOrientation() === "vertical" /* Protocol.DOM.ScrollOrientation.Vertical */ )) return [
                                    3,
                                    7
                                ];
                                return [
                                    4,
                                    animationNode.scrollTop()
                                ];
                            case 6:
                                _tmp1 = _state.sent();
                                return [
                                    3,
                                    9
                                ];
                            case 7:
                                return [
                                    4,
                                    animationNode.scrollLeft()
                                ];
                            case 8:
                                _tmp1 = _state.sent();
                                _state.label = 9;
                            case 9:
                                scrollOffset = _tmp1;
                                if (scrollRange !== null) {
                                    _this.setDuration(scrollRange);
                                }
                                if (scrollOffset !== null) {
                                    _this.setCurrentTimeText(scrollOffset);
                                    _this.setTimelineScrubberPosition(scrollOffset);
                                }
                                _state.label = 10;
                            case 10:
                                return [
                                    3,
                                    12
                                ];
                            case 11:
                                _this.setDuration(group.finiteDuration());
                                _state.label = 12;
                            case 12:
                                _this.updateControlButton();
                                _this.scheduleRedraw();
                                _this.scheduledRedrawAfterAnimationGroupUpdatedForTest();
                                return [
                                    2
                                ];
                        }
                    });
                }));
            }
        },
        {
            key: "clearPreviews",
            value: function clearPreviews() {
                _class_private_field_get(this, _previewMap).clear();
                _class_private_field_get(this, _screenshotPopovers).forEach(function(popover) {
                    popover.detach();
                });
                _class_private_field_get(this, _previewContainer).removeChildren();
                _class_private_field_set(this, _screenshotPopovers, []);
            }
        },
        {
            key: "createPreview",
            value: function createPreview(group) {
                var _this = this;
                var preview = new _AnimationGroupPreviewUI_js__WEBPACK_IMPORTED_MODULE_7__.AnimationGroupPreviewUI(group);
                var previewUiContainer = document.createElement('div');
                previewUiContainer.classList.add('preview-ui-container');
                previewUiContainer.appendChild(preview.element);
                var screenshotsContainer = document.createElement('div');
                screenshotsContainer.classList.add('screenshots-container', 'no-screenshots');
                screenshotsContainer.createChild('span', 'screenshot-arrow');
                // After the view is shown on hover, position it if it is out of bounds.
                screenshotsContainer.addEventListener('animationend', function() {
                    var _screenshotsContainer_getBoundingClientRect = screenshotsContainer.getBoundingClientRect(), right = _screenshotsContainer_getBoundingClientRect.right, left = _screenshotsContainer_getBoundingClientRect.left, width = _screenshotsContainer_getBoundingClientRect.width;
                    // Render to the left if it is not getting out of bounds when rendered on the left.
                    if (right > window.innerWidth && left - width >= 0) {
                        screenshotsContainer.classList.add('to-the-left');
                    }
                });
                previewUiContainer.appendChild(screenshotsContainer);
                _class_private_field_get(this, _groupBuffer).push(group);
                _class_private_field_get(this, _previewMap).set(group, preview);
                _class_private_field_get(this, _previewContainer).appendChild(previewUiContainer);
                preview.removeButton().addEventListener('click', this.removeAnimationGroup.bind(this, group));
                preview.element.addEventListener('click', this.selectAnimationGroup.bind(this, group));
                preview.element.addEventListener('keydown', this.handleAnimationGroupKeyDown.bind(this, group));
                preview.element.addEventListener('mouseover', function() {
                    var screenshots = group.screenshots();
                    if (!screenshots.length) {
                        return;
                    }
                    screenshotsContainer.classList.remove('no-screenshots');
                    var createAndShowScreenshotPopover = function() {
                        var screenshotPopover = new _AnimationScreenshotPopover_js__WEBPACK_IMPORTED_MODULE_9__.AnimationScreenshotPopover(screenshots);
                        // This is needed for clearing out the widgets
                        _class_private_field_get(_this, _screenshotPopovers).push(screenshotPopover);
                        screenshotPopover.show(screenshotsContainer);
                    };
                    if (!screenshots[0].complete) {
                        screenshots[0].onload = createAndShowScreenshotPopover;
                    } else {
                        createAndShowScreenshotPopover();
                    }
                }, {
                    once: true
                });
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(preview.element, i18nString(UIStrings.animationPreviewS, {
                    PH1: _class_private_field_get(this, _groupBuffer).indexOf(group) + 1
                }));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.markAsOption(preview.element);
                if (_class_private_field_get(this, _previewMap).size === 1) {
                    var preview1 = _class_private_field_get(this, _previewMap).get(_class_private_field_get(this, _groupBuffer)[0]);
                    if (preview1) {
                        preview1.element.tabIndex = 0;
                    }
                }
            }
        },
        {
            key: "previewsCreatedForTest",
            value: function previewsCreatedForTest() {}
        },
        {
            key: "createPreviewForCollectedGroups",
            value: function createPreviewForCollectedGroups() {
                _class_private_field_get(this, _collectedGroups).sort(function(a, b) {
                    // Scroll driven animations are rendered first.
                    if (a.isScrollDriven() && !b.isScrollDriven()) {
                        return -1;
                    }
                    if (!a.isScrollDriven() && b.isScrollDriven()) {
                        return 1;
                    }
                    // Then compare the start times for the same type of animations.
                    if (a.startTime() !== b.startTime()) {
                        return a.startTime() - b.startTime();
                    }
                    // If the start times are the same, the one with the more animations take precedence.
                    return a.animations.length - b.animations.length;
                });
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _collectedGroups)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var group = _step.value;
                        this.createPreview(group);
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
                _class_private_field_set(this, _collectedGroups, []);
                this.previewsCreatedForTest();
            }
        },
        {
            key: "addAnimationGroup",
            value: function addAnimationGroup(group) {
                var _this = this;
                var previewGroup = _class_private_field_get(this, _previewMap).get(group);
                if (previewGroup) {
                    if (_class_private_field_get(this, _selectedGroup) === group) {
                        this.syncScrubber();
                    } else {
                        previewGroup.replay();
                    }
                    return;
                }
                _class_private_field_get(this, _groupBuffer).sort(function(left, right) {
                    return left.startTime() - right.startTime();
                });
                // Discard oldest groups from buffer if necessary
                var groupsToDiscard = [];
                var bufferSize = this.width() / 50;
                while(_class_private_field_get(this, _groupBuffer).length > bufferSize){
                    var toDiscard = _class_private_field_get(this, _groupBuffer).splice(_class_private_field_get(this, _groupBuffer)[0] === _class_private_field_get(this, _selectedGroup) ? 1 : 0, 1);
                    groupsToDiscard.push(toDiscard[0]);
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = groupsToDiscard[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var g = _step.value;
                        var discardGroup = _class_private_field_get(this, _previewMap).get(g);
                        if (!discardGroup) {
                            continue;
                        }
                        discardGroup.element.remove();
                        _class_private_field_get(this, _previewMap).delete(g);
                        g.release();
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
                // Batch creating preview for arrivals happening closely together to ensure
                // stable UI sorting in the preview container.
                _class_private_field_get(this, _collectedGroups).push(group);
                void _class_private_field_get(this, _createPreviewForCollectedGroupsThrottler).schedule(function() {
                    return Promise.resolve(_this.createPreviewForCollectedGroups());
                });
            }
        },
        {
            key: "handleAnimationGroupKeyDown",
            value: function handleAnimationGroupKeyDown(group, event) {
                switch(event.key){
                    case 'Backspace':
                    case 'Delete':
                        this.removeAnimationGroup(group, event);
                        break;
                    case 'ArrowLeft':
                    case 'ArrowUp':
                        this.focusNextGroup(group, /* target */ event.target, /* focusPrevious */ true);
                        break;
                    case 'ArrowRight':
                    case 'ArrowDown':
                        this.focusNextGroup(group, /* target */ event.target);
                }
            }
        },
        {
            key: "focusNextGroup",
            value: function focusNextGroup(group, target, focusPrevious) {
                var currentGroupIndex = _class_private_field_get(this, _groupBuffer).indexOf(group);
                var nextIndex = focusPrevious ? currentGroupIndex - 1 : currentGroupIndex + 1;
                if (nextIndex < 0 || nextIndex >= _class_private_field_get(this, _groupBuffer).length) {
                    return;
                }
                var preview = _class_private_field_get(this, _previewMap).get(_class_private_field_get(this, _groupBuffer)[nextIndex]);
                if (preview) {
                    preview.element.tabIndex = 0;
                    preview.element.focus();
                }
                if (target) {
                    target.tabIndex = -1;
                }
            }
        },
        {
            key: "removeAnimationGroup",
            value: function removeAnimationGroup(group, event) {
                var currentGroupIndex = _class_private_field_get(this, _groupBuffer).indexOf(group);
                _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.ArrayUtilities.removeElement(_class_private_field_get(this, _groupBuffer), group);
                var previewGroup = _class_private_field_get(this, _previewMap).get(group);
                if (previewGroup) {
                    previewGroup.element.remove();
                }
                _class_private_field_get(this, _previewMap).delete(group);
                group.release();
                event.consume(true);
                if (_class_private_field_get(this, _selectedGroup) === group) {
                    this.clearTimeline();
                    this.renderGrid();
                }
                var groupLength = _class_private_field_get(this, _groupBuffer).length;
                if (groupLength === 0) {
                    _class_private_field_get(this, _clearButton).element.focus();
                    return;
                }
                var nextGroup = currentGroupIndex >= _class_private_field_get(this, _groupBuffer).length ? _class_private_field_get(this, _previewMap).get(_class_private_field_get(this, _groupBuffer)[_class_private_field_get(this, _groupBuffer).length - 1]) : _class_private_field_get(this, _previewMap).get(_class_private_field_get(this, _groupBuffer)[currentGroupIndex]);
                if (nextGroup) {
                    nextGroup.element.tabIndex = 0;
                    nextGroup.element.focus();
                }
            }
        },
        {
            key: "clearCurrentTimeText",
            value: function clearCurrentTimeText() {
                _class_private_field_get(this, _currentTime).textContent = '';
            }
        },
        {
            key: "setCurrentTimeText",
            value: function setCurrentTimeText(time) {
                var _$_class_private_field_get;
                if (!_class_private_field_get(this, _selectedGroup)) {
                    return;
                }
                _class_private_field_get(this, _currentTime).textContent = ((_$_class_private_field_get = _class_private_field_get(this, _selectedGroup)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.isScrollDriven()) ? "".concat(time.toFixed(0), "px") : _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.TimeUtilities.millisToString(time);
            }
        },
        {
            key: "selectAnimationGroup",
            value: function selectAnimationGroup(group) {
                var _this = this;
                return _async_to_generator(function() {
                    var animationNode, scrollRange, _tmp, scrollOffset, _tmp1, _tmp2;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_class_private_field_get(_this, _selectedGroup) === group) {
                                    _this.togglePause(false);
                                    _this.replay();
                                    return [
                                        2
                                    ];
                                }
                                _this.clearTimeline();
                                _class_private_field_set(_this, _selectedGroup, group);
                                _class_private_field_get(_this, _previewMap).forEach(function(previewUI, group) {
                                    previewUI.element.classList.toggle('selected', _class_private_field_get(_this, _selectedGroup) === group);
                                });
                                if (!group.isScrollDriven()) return [
                                    3,
                                    11
                                ];
                                return [
                                    4,
                                    group.scrollNode()
                                ];
                            case 1:
                                animationNode = _state.sent();
                                if (!animationNode) {
                                    throw new Error('Scroll container is not found for the scroll driven animation');
                                }
                                if (!(group.scrollOrientation() === "vertical" /* Protocol.DOM.ScrollOrientation.Vertical */ )) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    animationNode.verticalScrollRange()
                                ];
                            case 2:
                                _tmp = _state.sent();
                                return [
                                    3,
                                    5
                                ];
                            case 3:
                                return [
                                    4,
                                    animationNode.horizontalScrollRange()
                                ];
                            case 4:
                                _tmp = _state.sent();
                                _state.label = 5;
                            case 5:
                                scrollRange = _tmp;
                                if (!(group.scrollOrientation() === "vertical" /* Protocol.DOM.ScrollOrientation.Vertical */ )) return [
                                    3,
                                    7
                                ];
                                return [
                                    4,
                                    animationNode.scrollTop()
                                ];
                            case 6:
                                _tmp1 = _state.sent();
                                return [
                                    3,
                                    9
                                ];
                            case 7:
                                return [
                                    4,
                                    animationNode.scrollLeft()
                                ];
                            case 8:
                                _tmp1 = _state.sent();
                                _state.label = 9;
                            case 9:
                                scrollOffset = _tmp1;
                                if (typeof scrollRange !== 'number' || typeof scrollOffset !== 'number') {
                                    throw new Error('Scroll range or scroll offset is not resolved for the scroll driven animation');
                                }
                                _tmp2 = [
                                    _this,
                                    _scrollListenerId
                                ];
                                return [
                                    4,
                                    animationNode.addScrollEventListener(function(param) {
                                        var scrollTop = param.scrollTop, scrollLeft = param.scrollLeft;
                                        var offset = group.scrollOrientation() === "vertical" /* Protocol.DOM.ScrollOrientation.Vertical */  ? scrollTop : scrollLeft;
                                        _this.setCurrentTimeText(offset);
                                        _this.setTimelineScrubberPosition(offset);
                                    })
                                ];
                            case 10:
                                _class_private_field_set.apply(void 0, _tmp2.concat([
                                    _state.sent()
                                ]));
                                _this.setDuration(scrollRange);
                                _this.setCurrentTimeText(scrollOffset);
                                _this.setTimelineScrubberPosition(scrollOffset);
                                _class_private_field_get(_this, _playbackRateButtons).forEach(function(button) {
                                    button.setAttribute('disabled', 'true');
                                });
                                if (_class_private_field_get(_this, _pauseButton)) {
                                    _class_private_field_get(_this, _pauseButton).setEnabled(false);
                                }
                                return [
                                    3,
                                    12
                                ];
                            case 11:
                                _this.setDuration(Math.max(500, group.finiteDuration() + 100));
                                _class_private_field_get(_this, _playbackRateButtons).forEach(function(button) {
                                    button.removeAttribute('disabled');
                                });
                                if (_class_private_field_get(_this, _pauseButton)) {
                                    _class_private_field_get(_this, _pauseButton).setEnabled(true);
                                }
                                _state.label = 12;
                            case 12:
                                // Wait for all animations to be added and nodes to be resolved
                                // until we schedule a redraw.
                                return [
                                    4,
                                    Promise.all(group.animations().map(function(anim) {
                                        return _this.addAnimation(anim);
                                    }))
                                ];
                            case 13:
                                _state.sent();
                                _this.scheduleRedraw();
                                _this.togglePause(false);
                                _this.replay();
                                if (_this.hasAnimationGroupActiveNodes()) {
                                    _class_private_field_get(_this, _timelineScrubber).classList.remove('hidden');
                                    _class_private_field_get(_this, _gridHeader).classList.add('scrubber-enabled');
                                }
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationGroupSelected);
                                if (_class_private_field_get(_this, _selectedGroup).isScrollDriven()) {
                                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ScrollDrivenAnimationGroupSelected);
                                }
                                _this.animationGroupSelectedForTest();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "animationGroupSelectedForTest",
            value: function animationGroupSelectedForTest() {}
        },
        {
            key: "addAnimation",
            value: function addAnimation(animation) {
                var _this = this;
                return _async_to_generator(function() {
                    var nodeUI, nodeRow, uiAnimation, node;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                nodeUI = _class_private_field_get(_this, _nodesMap).get(animation.source().backendNodeId());
                                if (!nodeUI) {
                                    nodeUI = new NodeUI(animation.source());
                                    _class_private_field_get(_this, _animationsContainer).appendChild(nodeUI.element);
                                    _class_private_field_get(_this, _nodesMap).set(animation.source().backendNodeId(), nodeUI);
                                }
                                nodeRow = nodeUI.createNewRow();
                                uiAnimation = new _AnimationUI_js__WEBPACK_IMPORTED_MODULE_11__.AnimationUI(animation, _this, nodeRow);
                                return [
                                    4,
                                    animation.source().deferredNode().resolvePromise()
                                ];
                            case 1:
                                node = _state.sent();
                                uiAnimation.setNode(node);
                                if (node && nodeUI) {
                                    nodeUI.nodeResolved(node);
                                    nodeUIsByNode.set(node, nodeUI);
                                }
                                _class_private_field_get(_this, _uiAnimations).push(uiAnimation);
                                _class_private_field_get(_this, _animationsMap).set(animation.id(), animation);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "markNodeAsRemoved",
            value: function markNodeAsRemoved(node) {
                var _this = this;
                var _nodeUIsByNode_get, // Mark nodeUIs of children as node removed.
                _node_children;
                (_nodeUIsByNode_get = nodeUIsByNode.get(node)) === null || _nodeUIsByNode_get === void 0 ? void 0 : _nodeUIsByNode_get.nodeRemoved();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    // Mark nodeUIs of pseudo elements of the node as removed for instance, for view transitions.
                    for(var _iterator = node.pseudoElements().values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var pseudoElements = _step.value;
                        pseudoElements.forEach(function(pseudoElement) {
                            return _this.markNodeAsRemoved(pseudoElement);
                        });
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
                (_node_children = node.children()) === null || _node_children === void 0 ? void 0 : _node_children.forEach(function(child) {
                    _this.markNodeAsRemoved(child);
                });
                // If the user already has a selected animation group and
                // some of the nodes are removed, we check whether all the nodes
                // are removed for the currently selected animation. If that's the case
                // we remove the scrubber and update control button to be disabled.
                if (!this.hasAnimationGroupActiveNodes()) {
                    var _$_class_private_field_get;
                    _class_private_field_get(this, _gridHeader).classList.remove('scrubber-enabled');
                    _class_private_field_get(this, _timelineScrubber).classList.add('hidden');
                    (_$_class_private_field_get = _class_private_field_get(this, _scrubberPlayer)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.cancel();
                    _class_private_field_set(this, _scrubberPlayer, undefined);
                    this.clearCurrentTimeText();
                    this.updateControlButton();
                }
            }
        },
        {
            key: "hasAnimationGroupActiveNodes",
            value: function hasAnimationGroupActiveNodes() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _nodesMap).values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var nodeUI = _step.value;
                        if (nodeUI.hasActiveNode()) {
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
        },
        {
            key: "renderGrid",
            value: function renderGrid() {
                var _$_class_private_field_get;
                var isScrollDriven = (_$_class_private_field_get = _class_private_field_get(this, _selectedGroup)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.isScrollDriven();
                // For scroll driven animations, show divider lines for each 10% progres.
                // For time based animations, show divider lines for each 250ms progress.
                var gridSize = isScrollDriven ? this.duration() / 10 : 250;
                _class_private_field_get(this, _grid).removeChildren();
                var lastDraw = undefined;
                for(var time = 0; time < this.duration(); time += gridSize){
                    var line = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(_class_private_field_get(this, _grid), 'rect', 'animation-timeline-grid-line');
                    line.setAttribute('x', (time * this.pixelTimeRatio() + 10).toString());
                    line.setAttribute('y', '23');
                    line.setAttribute('height', '100%');
                    line.setAttribute('width', '1');
                }
                for(var time1 = 0; time1 < this.duration(); time1 += gridSize){
                    var gridWidth = time1 * this.pixelTimeRatio();
                    if (lastDraw === undefined || gridWidth - lastDraw > 50) {
                        lastDraw = gridWidth;
                        var label = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(_class_private_field_get(this, _grid), 'text', 'animation-timeline-grid-label');
                        label.textContent = isScrollDriven ? "".concat(time1.toFixed(0), "px") : _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.TimeUtilities.millisToString(time1);
                        label.setAttribute('x', (gridWidth + 10).toString());
                        label.setAttribute('y', '16');
                    }
                }
            }
        },
        {
            key: "scheduleRedraw",
            value: function scheduleRedraw() {
                this.renderGrid();
                _class_private_field_set(this, _renderQueue, []);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _uiAnimations)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var ui = _step.value;
                        _class_private_field_get(this, _renderQueue).push(ui);
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
                if (_class_private_field_get(this, _redrawing)) {
                    return;
                }
                _class_private_field_set(this, _redrawing, true);
                _class_private_field_get(this, _animationsContainer).window().requestAnimationFrame(this.render.bind(this));
            }
        },
        {
            key: "render",
            value: function render(timestamp) {
                while(_class_private_field_get(this, _renderQueue).length && (!timestamp || window.performance.now() - timestamp < 50)){
                    var animationUI = _class_private_field_get(this, _renderQueue).shift();
                    if (animationUI) {
                        animationUI.redraw();
                    }
                }
                if (_class_private_field_get(this, _renderQueue).length) {
                    _class_private_field_get(this, _animationsContainer).window().requestAnimationFrame(this.render.bind(this));
                } else {
                    _class_private_field_set(this, _redrawing, undefined);
                }
            }
        },
        {
            key: "onResize",
            value: function onResize() {
                _class_private_field_set(this, _cachedTimelineWidth, Math.max(0, _class_private_field_get(this, _animationsContainer).offsetWidth - _class_private_field_get(this, _timelineControlsWidth)) || 0);
                this.scheduleRedraw();
                if (_class_private_field_get(this, _scrubberPlayer)) {
                    this.syncScrubber();
                }
                _class_private_field_set(this, _gridOffsetLeft, undefined);
            }
        },
        {
            key: "width",
            value: function width() {
                return _class_private_field_get(this, _cachedTimelineWidth) || 0;
            }
        },
        {
            key: "syncScrubber",
            value: function syncScrubber() {
                if (!_class_private_field_get(this, _selectedGroup) || !this.hasAnimationGroupActiveNodes()) {
                    return;
                }
                void _class_private_field_get(this, _selectedGroup).currentTimePromise().then(this.animateTime.bind(this)).then(this.updateControlButton.bind(this));
            }
        },
        {
            key: "animateTime",
            value: function animateTime(currentTime) {
                var _$_class_private_field_get;
                // Scroll driven animations are bound to the scroll position of the scroll container
                // thus we don't animate the scrubber based on time for scroll driven animations.
                if ((_$_class_private_field_get = _class_private_field_get(this, _selectedGroup)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.isScrollDriven()) {
                    return;
                }
                if (_class_private_field_get(this, _scrubberPlayer)) {
                    _class_private_field_get(this, _scrubberPlayer).cancel();
                }
                _class_private_field_set(this, _scrubberPlayer, _class_private_field_get(this, _timelineScrubber).animate([
                    {
                        transform: 'translateX(0px)'
                    },
                    {
                        transform: 'translateX(' + this.width() + 'px)'
                    }
                ], {
                    duration: this.duration(),
                    fill: 'forwards'
                }));
                _class_private_field_get(this, _scrubberPlayer).playbackRate = this.effectivePlaybackRate();
                _class_private_field_get(this, _scrubberPlayer).onfinish = this.updateControlButton.bind(this);
                _class_private_field_get(this, _scrubberPlayer).currentTime = currentTime;
                this.element.window().requestAnimationFrame(this.updateScrubber.bind(this));
            }
        },
        {
            key: "pixelTimeRatio",
            value: function pixelTimeRatio() {
                return this.width() / this.duration() || 0;
            }
        },
        {
            key: "updateScrubber",
            value: function updateScrubber(_timestamp) {
                if (!_class_private_field_get(this, _scrubberPlayer)) {
                    return;
                }
                this.setCurrentTimeText(_class_private_method_get(this, _scrubberCurrentTime, scrubberCurrentTime).call(this));
                if (_class_private_field_get(this, _scrubberPlayer).playState.toString() === 'pending' || _class_private_field_get(this, _scrubberPlayer).playState === 'running') {
                    this.element.window().requestAnimationFrame(this.updateScrubber.bind(this));
                } else if (_class_private_field_get(this, _scrubberPlayer).playState === 'finished') {
                    this.clearCurrentTimeText();
                }
            }
        },
        {
            key: "scrubberDragStart",
            value: function scrubberDragStart(event) {
                if (!_class_private_field_get(this, _selectedGroup) || !this.hasAnimationGroupActiveNodes()) {
                    return false;
                }
                // Seek to current mouse position.
                if (!_class_private_field_get(this, _gridOffsetLeft)) {
                    _class_private_field_set(this, _gridOffsetLeft, _class_private_field_get(this, _grid).getBoundingClientRect().left + 10);
                }
                var x = event.x;
                var seekTime = Math.max(0, x - _class_private_field_get(this, _gridOffsetLeft)) / this.pixelTimeRatio();
                // Interface with scrubber drag.
                _class_private_field_set(this, _originalScrubberTime, seekTime);
                _class_private_field_set(this, _originalMousePosition, x);
                this.setCurrentTimeText(seekTime);
                if (_class_private_field_get(this, _selectedGroup).isScrollDriven()) {
                    this.setTimelineScrubberPosition(seekTime);
                    void this.updateScrollOffsetOnPage(seekTime);
                } else {
                    var _$_class_private_field_get;
                    var currentTime = (_$_class_private_field_get = _class_private_field_get(this, _scrubberPlayer)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.currentTime;
                    _class_private_field_set(this, _animationGroupPausedBeforeScrub, _class_private_field_get(this, _selectedGroup).paused() || typeof currentTime === 'number' && currentTime >= this.duration());
                    _class_private_field_get(this, _selectedGroup).seekTo(seekTime);
                    this.togglePause(true);
                    this.animateTime(seekTime);
                }
                return true;
            }
        },
        {
            key: "updateScrollOffsetOnPage",
            value: function updateScrollOffsetOnPage(offset) {
                var _this = this;
                return _async_to_generator(function() {
                    var _$_class_private_field_get, _$_class_private_field_get1, node;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    (_$_class_private_field_get = _class_private_field_get(_this, _selectedGroup)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.scrollNode()
                                ];
                            case 1:
                                node = _state.sent();
                                if (!node) {
                                    return [
                                        2
                                    ];
                                }
                                if (((_$_class_private_field_get1 = _class_private_field_get(_this, _selectedGroup)) === null || _$_class_private_field_get1 === void 0 ? void 0 : _$_class_private_field_get1.scrollOrientation()) === "vertical" /* Protocol.DOM.ScrollOrientation.Vertical */ ) {
                                    return [
                                        2,
                                        node.setScrollTop(offset)
                                    ];
                                }
                                return [
                                    2,
                                    node.setScrollLeft(offset)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "setTimelineScrubberPosition",
            value: function setTimelineScrubberPosition(time) {
                _class_private_field_get(this, _timelineScrubber).style.transform = "translateX(".concat(time * this.pixelTimeRatio(), "px)");
            }
        },
        {
            key: "scrubberDragMove",
            value: function scrubberDragMove(event) {
                var x = event.x;
                var delta = x - (_class_private_field_get(this, _originalMousePosition) || 0);
                var currentTime = Math.max(0, Math.min((_class_private_field_get(this, _originalScrubberTime) || 0) + delta / this.pixelTimeRatio(), this.duration()));
                if (_class_private_field_get(this, _scrubberPlayer)) {
                    _class_private_field_get(this, _scrubberPlayer).currentTime = currentTime;
                } else {
                    this.setTimelineScrubberPosition(currentTime);
                    void this.updateScrollOffsetOnPage(currentTime);
                }
                this.setCurrentTimeText(currentTime);
                if (_class_private_field_get(this, _selectedGroup) && !_class_private_field_get(this, _selectedGroup).isScrollDriven()) {
                    _class_private_field_get(this, _selectedGroup).seekTo(currentTime);
                }
            }
        },
        {
            key: "scrubberDragEnd",
            value: function scrubberDragEnd(_event) {
                var _$_class_private_field_get;
                if (_class_private_field_get(this, _scrubberPlayer)) {
                    var currentTime = Math.max(0, _class_private_method_get(this, _scrubberCurrentTime, scrubberCurrentTime).call(this));
                    _class_private_field_get(this, _scrubberPlayer).play();
                    _class_private_field_get(this, _scrubberPlayer).currentTime = currentTime;
                }
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationGroupScrubbed);
                if ((_$_class_private_field_get = _class_private_field_get(this, _selectedGroup)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.isScrollDriven()) {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ScrollDrivenAnimationGroupScrubbed);
                }
                _class_private_field_get(this, _currentTime).window().requestAnimationFrame(this.updateScrubber.bind(this));
                if (!_class_private_field_get(this, _animationGroupPausedBeforeScrub)) {
                    this.togglePause(false);
                }
            }
        }
    ], [
        {
            key: "instance",
            value: function instance(opts) {
                if (!animationTimelineInstance || (opts === null || opts === void 0 ? void 0 : opts.forceNew)) {
                    animationTimelineInstance = new AnimationTimeline();
                }
                return animationTimelineInstance;
            }
        }
    ]);
    return AnimationTimeline;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox);
function setupTimelineControlsResizer() {
    var _this = this;
    var resizeOriginX = undefined;
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.installDragHandle(_class_private_field_get(this, _timelineControlsResizer), function(ev) {
        resizeOriginX = ev.clientX;
        return true;
    }, function(ev) {
        if (resizeOriginX === undefined) {
            return;
        }
        var newWidth = _class_private_field_get(_this, _timelineControlsWidth) + ev.clientX - resizeOriginX;
        _class_private_field_set(_this, _timelineControlsWidth, Math.min(Math.max(newWidth, MIN_TIMELINE_CONTROLS_WIDTH), MAX_TIMELINE_CONTROLS_WIDTH));
        resizeOriginX = ev.clientX;
        _this.element.style.setProperty('--timeline-controls-width', _class_private_field_get(_this, _timelineControlsWidth) + 'px');
        _this.onResize();
    }, function() {
        resizeOriginX = undefined;
    }, 'ew-resize');
}
function scrubberCurrentTime() {
    var _$_class_private_field_get;
    return typeof ((_$_class_private_field_get = _class_private_field_get(this, _scrubberPlayer)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.currentTime) === 'number' ? _class_private_field_get(this, _scrubberPlayer).currentTime : 0;
}
var GlobalPlaybackRates = [
    1,
    0.25,
    0.1
];
var _description = /*#__PURE__*/ new WeakMap(), _timelineElement = /*#__PURE__*/ new WeakMap(), _overlayElement = /*#__PURE__*/ new WeakMap(), _node = /*#__PURE__*/ new WeakMap();
var NodeUI = /*#__PURE__*/ function() {
    "use strict";
    function NodeUI(_animationEffect) {
        _class_call_check(this, NodeUI);
        _define_property(this, "element", void 0);
        _class_private_field_init(this, _description, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _timelineElement, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _overlayElement, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _node, {
            writable: true,
            value: void 0
        });
        this.element = document.createElement('div');
        this.element.classList.add('animation-node-row');
        _class_private_field_set(this, _description, this.element.createChild('div', 'animation-node-description'));
        _class_private_field_get(this, _description).setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.tableCell('description').track({
            resize: true
        })));
        _class_private_field_set(this, _timelineElement, this.element.createChild('div', 'animation-node-timeline'));
        _class_private_field_get(this, _timelineElement).setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.tableCell('timeline').track({
            resize: true
        })));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.markAsApplication(_class_private_field_get(this, _timelineElement));
    }
    _create_class(NodeUI, [
        {
            key: "nodeResolved",
            value: function nodeResolved(node) {
                var _this = this;
                if (!node) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextChild(_class_private_field_get(this, _description), '<node>');
                    return;
                }
                _class_private_field_set(this, _node, node);
                this.nodeChanged();
                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(node).then(function(link) {
                    link.addEventListener('click', function() {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimatedNodeDescriptionClicked);
                    });
                    _class_private_field_get(_this, _description).appendChild(link);
                });
                if (!node.ownerDocument) {
                    this.nodeRemoved();
                }
            }
        },
        {
            key: "createNewRow",
            value: function createNewRow() {
                return _class_private_field_get(this, _timelineElement).createChild('div', 'animation-timeline-row');
            }
        },
        {
            key: "nodeRemoved",
            value: function nodeRemoved() {
                this.element.classList.add('animation-node-removed');
                if (!_class_private_field_get(this, _overlayElement)) {
                    _class_private_field_set(this, _overlayElement, document.createElement('div'));
                    _class_private_field_get(this, _overlayElement).classList.add('animation-node-removed-overlay');
                    _class_private_field_get(this, _description).appendChild(_class_private_field_get(this, _overlayElement));
                }
                _class_private_field_set(this, _node, null);
            }
        },
        {
            key: "hasActiveNode",
            value: function hasActiveNode() {
                return Boolean(_class_private_field_get(this, _node));
            }
        },
        {
            key: "nodeChanged",
            value: function nodeChanged() {
                var animationNodeSelected = false;
                if (_class_private_field_get(this, _node)) {
                    animationNodeSelected = _class_private_field_get(this, _node) === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMNode);
                }
                this.element.classList.toggle('animation-node-selected', animationNodeSelected);
            }
        }
    ]);
    return NodeUI;
}();
var StepTimingFunction = /*#__PURE__*/ function() {
    "use strict";
    function StepTimingFunction(steps, stepAtPosition) {
        _class_call_check(this, StepTimingFunction);
        _define_property(this, "steps", void 0);
        _define_property(this, "stepAtPosition", void 0);
        this.steps = steps;
        this.stepAtPosition = stepAtPosition;
    }
    _create_class(StepTimingFunction, null, [
        {
            key: "parse",
            value: function parse(text) {
                var match = text.match(/^steps\((\d+), (start|middle)\)$/);
                if (match) {
                    return new StepTimingFunction(parseInt(match[1], 10), match[2]);
                }
                match = text.match(/^steps\((\d+)\)$/);
                if (match) {
                    return new StepTimingFunction(parseInt(match[1], 10), 'end');
                }
                return null;
            }
        }
    ]);
    return StepTimingFunction;
} //# sourceMappingURL=AnimationTimeline.js.map
();


}),
"./panels/animation/AnimationUI.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnimationUI: function() { return AnimationUI; },
  Colors: function() { return Colors; },
  Options: function() { return Options; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/inline_editor/inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _AnimationTimeline_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AnimationTimeline.js */ "./panels/animation/AnimationTimeline.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
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








var UIStrings = {
    /**
     *@description Title of the first and last points of an animation
     */ animationEndpointSlider: 'Animation Endpoint slider',
    /**
     *@description Title of an Animation Keyframe point
     */ animationKeyframeSlider: 'Animation Keyframe slider',
    /**
     *@description Title of an animation keyframe group
     *@example {anilogo} PH1
     */ sSlider: '{PH1} slider'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/animation/AnimationUI.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var _animationInternal = /*#__PURE__*/ new WeakMap(), _timeline = /*#__PURE__*/ new WeakMap(), _keyframes = /*#__PURE__*/ new WeakMap(), _nameElement = /*#__PURE__*/ new WeakMap(), _svg = /*#__PURE__*/ new WeakMap(), _activeIntervalGroup = /*#__PURE__*/ new WeakMap(), _cachedElements = /*#__PURE__*/ new WeakMap(), _movementInMs = /*#__PURE__*/ new WeakMap(), _keyboardMovementRateMs = /*#__PURE__*/ new WeakMap(), _color = /*#__PURE__*/ new WeakMap(), _node = /*#__PURE__*/ new WeakMap(), _delayLine = /*#__PURE__*/ new WeakMap(), _endDelayLine = /*#__PURE__*/ new WeakMap(), _tailGroup = /*#__PURE__*/ new WeakMap(), _mouseEventType = /*#__PURE__*/ new WeakMap(), _keyframeMoved = /*#__PURE__*/ new WeakMap(), _downMouseX = /*#__PURE__*/ new WeakMap();
var AnimationUI = /*#__PURE__*/ function() {
    "use strict";
    function AnimationUI(animation, timeline, parentElement) {
        _class_call_check(this, AnimationUI);
        _class_private_field_init(this, _animationInternal, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _timeline, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _keyframes, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _nameElement, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _svg, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _activeIntervalGroup, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _cachedElements, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _movementInMs, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _keyboardMovementRateMs, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _color, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _node, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _delayLine, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _endDelayLine, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _tailGroup, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _mouseEventType, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _keyframeMoved, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _downMouseX, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _animationInternal, animation);
        _class_private_field_set(this, _timeline, timeline);
        var keyframesRule = _class_private_field_get(this, _animationInternal).source().keyframesRule();
        if (keyframesRule) {
            _class_private_field_set(this, _keyframes, keyframesRule.keyframes());
            if (animation.viewOrScrollTimeline() && animation.playbackRate() < 0) {
                _class_private_field_get(this, _keyframes).reverse();
            }
        }
        _class_private_field_set(this, _nameElement, parentElement.createChild('div', 'animation-name'));
        _class_private_field_get(this, _nameElement).textContent = _class_private_field_get(this, _animationInternal).name();
        _class_private_field_set(this, _svg, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'svg', 'animation-ui'));
        _class_private_field_get(this, _svg).setAttribute('height', Options.AnimationSVGHeight.toString());
        _class_private_field_get(this, _svg).style.marginLeft = '-' + Options.AnimationMargin + 'px';
        _class_private_field_get(this, _svg).addEventListener('contextmenu', this.onContextMenu.bind(this));
        _class_private_field_set(this, _activeIntervalGroup, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(_class_private_field_get(this, _svg), 'g'));
        _class_private_field_get(this, _activeIntervalGroup).setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.animationClip().track({
            drag: true
        })));
        if (!_class_private_field_get(this, _animationInternal).viewOrScrollTimeline()) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.installDragHandle(_class_private_field_get(this, _activeIntervalGroup), this.mouseDown.bind(this, "AnimationDrag" /* Events.AnimationDrag */ , null), this.mouseMove.bind(this), this.mouseUp.bind(this), '-webkit-grabbing', '-webkit-grab');
            AnimationUI.installDragHandleKeyboard(_class_private_field_get(this, _activeIntervalGroup), this.keydownMove.bind(this, "AnimationDrag" /* Events.AnimationDrag */ , null));
        }
        _class_private_field_set(this, _cachedElements, []);
        _class_private_field_set(this, _movementInMs, 0);
        _class_private_field_set(this, _keyboardMovementRateMs, 50);
        _class_private_field_set(this, _color, AnimationUI.colorForAnimation(_class_private_field_get(this, _animationInternal)));
    }
    _create_class(AnimationUI, [
        {
            key: "animation",
            value: function animation() {
                return _class_private_field_get(this, _animationInternal);
            }
        },
        {
            key: "nameElement",
            get: function get() {
                return _class_private_field_get(this, _nameElement);
            }
        },
        {
            key: "svg",
            get: function get() {
                return _class_private_field_get(this, _svg);
            }
        },
        {
            key: "setNode",
            value: function setNode(node) {
                _class_private_field_set(this, _node, node);
            }
        },
        {
            key: "createLine",
            value: function createLine(parentElement, className) {
                var line = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'line', className);
                line.setAttribute('x1', Options.AnimationMargin.toString());
                line.setAttribute('y1', Options.AnimationHeight.toString());
                line.setAttribute('y2', Options.AnimationHeight.toString());
                line.style.stroke = _class_private_field_get(this, _color);
                return line;
            }
        },
        {
            key: "drawAnimationLine",
            value: function drawAnimationLine(iteration, parentElement) {
                var cache = _class_private_field_get(this, _cachedElements)[iteration];
                if (!cache.animationLine) {
                    cache.animationLine = this.createLine(parentElement, 'animation-line');
                }
                if (!cache.animationLine) {
                    return;
                }
                cache.animationLine.setAttribute('x2', (this.duration() * _class_private_field_get(this, _timeline).pixelTimeRatio() + Options.AnimationMargin).toFixed(2));
            }
        },
        {
            key: "drawDelayLine",
            value: function drawDelayLine(parentElement) {
                if (!_class_private_field_get(this, _delayLine) || !_class_private_field_get(this, _endDelayLine)) {
                    _class_private_field_set(this, _delayLine, this.createLine(parentElement, 'animation-delay-line'));
                    _class_private_field_set(this, _endDelayLine, this.createLine(parentElement, 'animation-delay-line'));
                }
                var fill = _class_private_field_get(this, _animationInternal).source().fill();
                _class_private_field_get(this, _delayLine).classList.toggle('animation-fill', fill === 'backwards' || fill === 'both');
                var margin = Options.AnimationMargin;
                _class_private_field_get(this, _delayLine).setAttribute('x1', margin.toString());
                _class_private_field_get(this, _delayLine).setAttribute('x2', (this.delayOrStartTime() * _class_private_field_get(this, _timeline).pixelTimeRatio() + margin).toFixed(2));
                var forwardsFill = fill === 'forwards' || fill === 'both';
                _class_private_field_get(this, _endDelayLine).classList.toggle('animation-fill', forwardsFill);
                var leftMargin = Math.min(_class_private_field_get(this, _timeline).width(), (this.delayOrStartTime() + this.duration() * _class_private_field_get(this, _animationInternal).source().iterations()) * _class_private_field_get(this, _timeline).pixelTimeRatio());
                _class_private_field_get(this, _endDelayLine).style.transform = 'translateX(' + leftMargin.toFixed(2) + 'px)';
                _class_private_field_get(this, _endDelayLine).setAttribute('x1', margin.toString());
                _class_private_field_get(this, _endDelayLine).setAttribute('x2', forwardsFill ? (_class_private_field_get(this, _timeline).width() - leftMargin + margin).toFixed(2) : (_class_private_field_get(this, _animationInternal).source().endDelay() * _class_private_field_get(this, _timeline).pixelTimeRatio() + margin).toFixed(2));
            }
        },
        {
            key: "drawPoint",
            value: function drawPoint(iteration, parentElement, x, keyframeIndex, attachEvents) {
                if (_class_private_field_get(this, _cachedElements)[iteration].keyframePoints[keyframeIndex]) {
                    _class_private_field_get(this, _cachedElements)[iteration].keyframePoints[keyframeIndex].setAttribute('cx', x.toFixed(2));
                    return;
                }
                var circle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'circle', keyframeIndex <= 0 ? 'animation-endpoint' : 'animation-keyframe-point');
                circle.setAttribute('cx', x.toFixed(2));
                circle.setAttribute('cy', Options.AnimationHeight.toString());
                circle.style.stroke = _class_private_field_get(this, _color);
                circle.setAttribute('r', (Options.AnimationMargin / 2).toString());
                circle.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.controlPoint('animations.keyframe').track({
                    drag: true
                })));
                circle.tabIndex = 0;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(circle, keyframeIndex <= 0 ? i18nString(UIStrings.animationEndpointSlider) : i18nString(UIStrings.animationKeyframeSlider));
                if (keyframeIndex <= 0) {
                    circle.style.fill = _class_private_field_get(this, _color);
                }
                _class_private_field_get(this, _cachedElements)[iteration].keyframePoints[keyframeIndex] = circle;
                if (!attachEvents) {
                    return;
                }
                var eventType;
                if (keyframeIndex === 0) {
                    eventType = "StartEndpointMove" /* Events.StartEndpointMove */ ;
                } else if (keyframeIndex === -1) {
                    eventType = "FinishEndpointMove" /* Events.FinishEndpointMove */ ;
                } else {
                    eventType = "KeyframeMove" /* Events.KeyframeMove */ ;
                }
                if (!this.animation().viewOrScrollTimeline()) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.installDragHandle(circle, this.mouseDown.bind(this, eventType, keyframeIndex), this.mouseMove.bind(this), this.mouseUp.bind(this), 'ew-resize');
                    AnimationUI.installDragHandleKeyboard(circle, this.keydownMove.bind(this, eventType, keyframeIndex));
                }
            }
        },
        {
            key: "renderKeyframe",
            value: function renderKeyframe(iteration, keyframeIndex, parentElement, leftDistance, width, easing) {
                function createStepLine(parentElement, x, strokeColor) {
                    var line = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'line');
                    line.setAttribute('x1', x.toString());
                    line.setAttribute('x2', x.toString());
                    line.setAttribute('y1', Options.AnimationMargin.toString());
                    line.setAttribute('y2', Options.AnimationHeight.toString());
                    line.style.stroke = strokeColor;
                }
                var bezier = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Geometry.CubicBezier.parse(easing);
                var cache = _class_private_field_get(this, _cachedElements)[iteration].keyframeRender;
                if (!cache[keyframeIndex]) {
                    var svg = bezier ? _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'path', 'animation-keyframe') : _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'g', 'animation-keyframe-step');
                    cache[keyframeIndex] = svg;
                }
                var group = cache[keyframeIndex];
                group.tabIndex = 0;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(group, i18nString(UIStrings.sSlider, {
                    PH1: _class_private_field_get(this, _animationInternal).name()
                }));
                group.style.transform = 'translateX(' + leftDistance.toFixed(2) + 'px)';
                if (easing === 'linear') {
                    group.style.fill = _class_private_field_get(this, _color);
                    var height = _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.BezierUI.Height;
                    group.setAttribute('d', [
                        'M',
                        0,
                        height,
                        'L',
                        0,
                        5,
                        'L',
                        width.toFixed(2),
                        5,
                        'L',
                        width.toFixed(2),
                        height,
                        'Z'
                    ].join(' '));
                } else if (bezier) {
                    group.style.fill = _class_private_field_get(this, _color);
                    _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.BezierUI.BezierUI.drawVelocityChart(bezier, group, width);
                } else {
                    var stepFunction = _AnimationTimeline_js__WEBPACK_IMPORTED_MODULE_7__.StepTimingFunction.parse(easing);
                    group.removeChildren();
                    var offsetMap = {
                        'start': 0,
                        'middle': 0.5,
                        'end': 1
                    };
                    if (stepFunction) {
                        var offsetWeight = offsetMap[stepFunction.stepAtPosition];
                        for(var i = 0; i < stepFunction.steps; i++){
                            createStepLine(group, (i + offsetWeight) * width / stepFunction.steps, _class_private_field_get(this, _color));
                        }
                    }
                }
            }
        },
        {
            key: "redraw",
            value: function redraw() {
                var maxWidth = _class_private_field_get(this, _timeline).width() - Options.AnimationMargin;
                _class_private_field_get(this, _svg).setAttribute('width', (maxWidth + 2 * Options.AnimationMargin).toFixed(2));
                _class_private_field_get(this, _activeIntervalGroup).style.transform = 'translateX(' + (this.delayOrStartTime() * _class_private_field_get(this, _timeline).pixelTimeRatio()).toFixed(2) + 'px)';
                _class_private_field_get(this, _nameElement).style.transform = 'translateX(' + (Math.max(this.delayOrStartTime(), 0) * _class_private_field_get(this, _timeline).pixelTimeRatio() + Options.AnimationMargin).toFixed(2) + 'px)';
                _class_private_field_get(this, _nameElement).style.width = (this.duration() * _class_private_field_get(this, _timeline).pixelTimeRatio()).toFixed(2) + 'px';
                this.drawDelayLine(_class_private_field_get(this, _svg));
                if (_class_private_field_get(this, _animationInternal).type() === 'CSSTransition') {
                    this.renderTransition();
                    return;
                }
                this.renderIteration(_class_private_field_get(this, _activeIntervalGroup), 0);
                if (!_class_private_field_get(this, _tailGroup)) {
                    _class_private_field_set(this, _tailGroup, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(_class_private_field_get(this, _activeIntervalGroup), 'g', 'animation-tail-iterations'));
                }
                var iterationWidth = this.duration() * _class_private_field_get(this, _timeline).pixelTimeRatio();
                var iteration;
                // Some iterations are getting rendered in an invisible area if the delay is negative.
                var invisibleAreaWidth = this.delayOrStartTime() < 0 ? -this.delayOrStartTime() * _class_private_field_get(this, _timeline).pixelTimeRatio() : 0;
                for(iteration = 1; iteration < _class_private_field_get(this, _animationInternal).source().iterations() && iterationWidth * (iteration - 1) < invisibleAreaWidth + _class_private_field_get(this, _timeline).width() && (iterationWidth > 0 || _class_private_field_get(this, _animationInternal).source().iterations() !== Infinity); iteration++){
                    this.renderIteration(_class_private_field_get(this, _tailGroup), iteration);
                }
                while(iteration < _class_private_field_get(this, _cachedElements).length){
                    var poppedElement = _class_private_field_get(this, _cachedElements).pop();
                    if (poppedElement && poppedElement.group) {
                        poppedElement.group.remove();
                    }
                }
            }
        },
        {
            key: "renderTransition",
            value: function renderTransition() {
                var activeIntervalGroup = _class_private_field_get(this, _activeIntervalGroup);
                if (!_class_private_field_get(this, _cachedElements)[0]) {
                    _class_private_field_get(this, _cachedElements)[0] = {
                        animationLine: null,
                        keyframePoints: {},
                        keyframeRender: {},
                        group: null
                    };
                }
                this.drawAnimationLine(0, activeIntervalGroup);
                this.renderKeyframe(0, 0, activeIntervalGroup, Options.AnimationMargin, this.duration() * _class_private_field_get(this, _timeline).pixelTimeRatio(), _class_private_field_get(this, _animationInternal).source().easing());
                this.drawPoint(0, activeIntervalGroup, Options.AnimationMargin, 0, true);
                this.drawPoint(0, activeIntervalGroup, this.duration() * _class_private_field_get(this, _timeline).pixelTimeRatio() + Options.AnimationMargin, -1, true);
            }
        },
        {
            key: "renderIteration",
            value: function renderIteration(parentElement, iteration) {
                if (!_class_private_field_get(this, _cachedElements)[iteration]) {
                    _class_private_field_get(this, _cachedElements)[iteration] = {
                        animationLine: null,
                        keyframePoints: {},
                        keyframeRender: {},
                        group: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'g')
                    };
                }
                var group = _class_private_field_get(this, _cachedElements)[iteration].group;
                if (!group) {
                    return;
                }
                group.style.transform = 'translateX(' + (iteration * this.duration() * _class_private_field_get(this, _timeline).pixelTimeRatio()).toFixed(2) + 'px)';
                this.drawAnimationLine(iteration, group);
                if (_class_private_field_get(this, _keyframes) && _class_private_field_get(this, _keyframes).length > 1) {
                    for(var i = 0; i < _class_private_field_get(this, _keyframes).length - 1; i++){
                        var leftDistance = this.offset(i) * this.duration() * _class_private_field_get(this, _timeline).pixelTimeRatio() + Options.AnimationMargin;
                        var width = this.duration() * (this.offset(i + 1) - this.offset(i)) * _class_private_field_get(this, _timeline).pixelTimeRatio();
                        this.renderKeyframe(iteration, i, group, leftDistance, width, _class_private_field_get(this, _keyframes)[i].easing());
                        if (i || !i && iteration === 0) {
                            this.drawPoint(iteration, group, leftDistance, i, iteration === 0);
                        }
                    }
                }
                this.drawPoint(iteration, group, this.duration() * _class_private_field_get(this, _timeline).pixelTimeRatio() + Options.AnimationMargin, -1, iteration === 0);
            }
        },
        {
            key: "delayOrStartTime",
            value: function delayOrStartTime() {
                var delay = _class_private_field_get(this, _animationInternal).delayOrStartTime();
                if (_class_private_field_get(this, _mouseEventType) === "AnimationDrag" /* Events.AnimationDrag */  || _class_private_field_get(this, _mouseEventType) === "StartEndpointMove" /* Events.StartEndpointMove */ ) {
                    delay += _class_private_field_get(this, _movementInMs);
                }
                return delay;
            }
        },
        {
            key: "duration",
            value: function duration() {
                var duration = _class_private_field_get(this, _animationInternal).iterationDuration();
                if (_class_private_field_get(this, _mouseEventType) === "FinishEndpointMove" /* Events.FinishEndpointMove */ ) {
                    duration += _class_private_field_get(this, _movementInMs);
                } else if (_class_private_field_get(this, _mouseEventType) === "StartEndpointMove" /* Events.StartEndpointMove */ ) {
                    duration -= _class_private_field_get(this, _movementInMs);
                }
                return Math.max(0, duration);
            }
        },
        {
            key: "offset",
            value: function offset(i) {
                if (!_class_private_field_get(this, _keyframes)) {
                    throw new Error('Unable to calculate offset; keyframes do not exist');
                }
                var offset = _class_private_field_get(this, _keyframes)[i].offsetAsNumber();
                if (_class_private_field_get(this, _mouseEventType) === "KeyframeMove" /* Events.KeyframeMove */  && i === _class_private_field_get(this, _keyframeMoved)) {
                    console.assert(i > 0 && i < _class_private_field_get(this, _keyframes).length - 1, 'First and last keyframe cannot be moved');
                    offset += _class_private_field_get(this, _movementInMs) / _class_private_field_get(this, _animationInternal).iterationDuration();
                    offset = Math.max(offset, _class_private_field_get(this, _keyframes)[i - 1].offsetAsNumber());
                    offset = Math.min(offset, _class_private_field_get(this, _keyframes)[i + 1].offsetAsNumber());
                }
                return offset;
            }
        },
        {
            key: "mouseDown",
            value: function mouseDown(mouseEventType, keyframeIndex, event) {
                var mouseEvent = event;
                if (mouseEvent.buttons === 2) {
                    return false;
                }
                if (_class_private_field_get(this, _svg).enclosingNodeOrSelfWithClass('animation-node-removed')) {
                    return false;
                }
                _class_private_field_set(this, _mouseEventType, mouseEventType);
                _class_private_field_set(this, _keyframeMoved, keyframeIndex);
                _class_private_field_set(this, _downMouseX, mouseEvent.clientX);
                event.consume(true);
                var viewManagerInstance = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ViewManager.ViewManager.instance();
                var animationLocation = viewManagerInstance.locationNameForViewId('animations');
                var elementsLocation = viewManagerInstance.locationNameForViewId('elements');
                // Prevents revealing the node if the animations and elements view share the same view location.
                // If they share the same view location, the animations view will change to the elements view when editing an animation
                if (_class_private_field_get(this, _node) && animationLocation !== elementsLocation) {
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(_class_private_field_get(this, _node));
                }
                return true;
            }
        },
        {
            key: "mouseMove",
            value: function mouseMove(event) {
                var mouseEvent = event;
                this.setMovementAndRedraw((mouseEvent.clientX - (_class_private_field_get(this, _downMouseX) || 0)) / _class_private_field_get(this, _timeline).pixelTimeRatio());
            }
        },
        {
            key: "setMovementAndRedraw",
            value: function setMovementAndRedraw(movement) {
                _class_private_field_set(this, _movementInMs, movement);
                if (this.delayOrStartTime() + this.duration() > _class_private_field_get(this, _timeline).duration() * 0.8) {
                    _class_private_field_get(this, _timeline).setDuration(_class_private_field_get(this, _timeline).duration() * 1.2);
                }
                this.redraw();
            }
        },
        {
            key: "mouseUp",
            value: function mouseUp(event) {
                var mouseEvent = event;
                _class_private_field_set(this, _movementInMs, (mouseEvent.clientX - (_class_private_field_get(this, _downMouseX) || 0)) / _class_private_field_get(this, _timeline).pixelTimeRatio());
                // Commit changes
                if (_class_private_field_get(this, _mouseEventType) === "KeyframeMove" /* Events.KeyframeMove */ ) {
                    if (_class_private_field_get(this, _keyframes) && _class_private_field_get(this, _keyframeMoved) !== null && typeof _class_private_field_get(this, _keyframeMoved) !== 'undefined') {
                        _class_private_field_get(this, _keyframes)[_class_private_field_get(this, _keyframeMoved)].setOffset(this.offset(_class_private_field_get(this, _keyframeMoved)));
                    }
                } else {
                    _class_private_field_get(this, _animationInternal).setTiming(this.duration(), this.delayOrStartTime());
                }
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.animationPointDragged(_class_private_field_get(this, _mouseEventType) === "AnimationDrag" /* Events.AnimationDrag */  ? 0 /* Host.UserMetrics.AnimationPointDragType.AnimationDrag */  : _class_private_field_get(this, _mouseEventType) === "KeyframeMove" /* Events.KeyframeMove */  ? 1 /* Host.UserMetrics.AnimationPointDragType.KeyframeMove */  : _class_private_field_get(this, _mouseEventType) === "StartEndpointMove" /* Events.StartEndpointMove */  ? 2 /* Host.UserMetrics.AnimationPointDragType.StartEndpointMove */  : _class_private_field_get(this, _mouseEventType) === "FinishEndpointMove" /* Events.FinishEndpointMove */  ? 3 /* Host.UserMetrics.AnimationPointDragType.FinishEndpointMove */  : 4 /* Host.UserMetrics.AnimationPointDragType.Other */ );
                _class_private_field_set(this, _movementInMs, 0);
                this.redraw();
                _class_private_field_set(this, _mouseEventType, undefined);
                _class_private_field_set(this, _downMouseX, undefined);
                _class_private_field_set(this, _keyframeMoved, undefined);
            }
        },
        {
            key: "keydownMove",
            value: function keydownMove(mouseEventType, keyframeIndex, event) {
                var keyboardEvent = event;
                _class_private_field_set(this, _mouseEventType, mouseEventType);
                _class_private_field_set(this, _keyframeMoved, keyframeIndex);
                switch(keyboardEvent.key){
                    case 'ArrowLeft':
                    case 'ArrowUp':
                        _class_private_field_set(this, _movementInMs, -_class_private_field_get(this, _keyboardMovementRateMs));
                        break;
                    case 'ArrowRight':
                    case 'ArrowDown':
                        _class_private_field_set(this, _movementInMs, _class_private_field_get(this, _keyboardMovementRateMs));
                        break;
                    default:
                        return;
                }
                if (_class_private_field_get(this, _mouseEventType) === "KeyframeMove" /* Events.KeyframeMove */ ) {
                    if (_class_private_field_get(this, _keyframes) && _class_private_field_get(this, _keyframeMoved) !== null) {
                        _class_private_field_get(this, _keyframes)[_class_private_field_get(this, _keyframeMoved)].setOffset(this.offset(_class_private_field_get(this, _keyframeMoved)));
                    }
                } else {
                    _class_private_field_get(this, _animationInternal).setTiming(this.duration(), this.delayOrStartTime());
                }
                this.setMovementAndRedraw(0);
                _class_private_field_set(this, _mouseEventType, undefined);
                _class_private_field_set(this, _keyframeMoved, undefined);
                event.consume(true);
            }
        },
        {
            key: "onContextMenu",
            value: function onContextMenu(event) {
                function showContextMenu(remoteObject) {
                    if (!remoteObject) {
                        return;
                    }
                    var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ContextMenu.ContextMenu(event);
                    contextMenu.appendApplicableItems(remoteObject);
                    void contextMenu.show();
                }
                void _class_private_field_get(this, _animationInternal).remoteObjectPromise().then(showContextMenu);
                event.consume(true);
            }
        }
    ], [
        {
            key: "colorForAnimation",
            value: function colorForAnimation(animation) {
                var names = Array.from(Colors.keys());
                var hashCode = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.hashCode(animation.name() || animation.id());
                var cappedHashCode = hashCode % names.length;
                var colorName = names[cappedHashCode];
                var color = Colors.get(colorName);
                if (!color) {
                    throw new Error('Unable to locate color');
                }
                return color.asString("rgb" /* Common.Color.Format.RGB */ ) || '';
            }
        },
        {
            key: "installDragHandleKeyboard",
            value: function installDragHandleKeyboard(element, elementDrag) {
                element.addEventListener('keydown', elementDrag, false);
            }
        }
    ]);
    return AnimationUI;
}();
var Options = {
    AnimationHeight: 26,
    AnimationSVGHeight: 50,
    AnimationMargin: 7,
    EndpointsClickRegionSize: 10,
    GridCanvasHeight: 40
};
var Colors = new Map([
    [
        'Purple',
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#9C27B0')
    ],
    [
        'Light Blue',
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#03A9F4')
    ],
    [
        'Deep Orange',
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#FF5722')
    ],
    [
        'Blue',
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#5677FC')
    ],
    [
        'Lime',
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#CDDC39')
    ],
    [
        'Blue Grey',
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#607D8B')
    ],
    [
        'Pink',
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#E91E63')
    ],
    [
        'Green',
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#0F9D58')
    ],
    [
        'Brown',
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#795548')
    ],
    [
        'Cyan',
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#00BCD4')
    ]
]); //# sourceMappingURL=AnimationUI.js.map


}),

}]);