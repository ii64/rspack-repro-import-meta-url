"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_components_ReplaySection_js"], {
"./panels/recorder/components/ReplaySection.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ReplaySection: function() { return ReplaySection; },
  StartReplayEvent: function() { return StartReplayEvent; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _SelectButton_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectButton.js */ "./panels/recorder/components/SelectButton.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
function _templateObject() {
    var data = _tagged_template_literal([
        "devtools-replay-section"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n    <",
        "\n      @selectmenuselected=",
        "\n      @selectbuttonclick=",
        "\n      .variant=",
        "\n      .showItemDivider=",
        "\n      .disabled=",
        "\n      .action=",
        "\n      .value=",
        "\n      .buttonLabel=",
        "\n      .groups=",
        "\n      jslog=",
        ">\n    </",
        ">"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}






var UIStrings = {
    /**
     * @description Replay button label
     */ Replay: 'Replay',
    /**
     * @description Button label for the normal speed replay option
     */ ReplayNormalButtonLabel: 'Normal speed',
    /**
     * @description Item label for the normal speed replay option
     */ ReplayNormalItemLabel: 'Normal (Default)',
    /**
     * @description Button label for the slow speed replay option
     */ ReplaySlowButtonLabel: 'Slow speed',
    /**
     * @description Item label for the slow speed replay option
     */ ReplaySlowItemLabel: 'Slow',
    /**
     * @description Button label for the very slow speed replay option
     */ ReplayVerySlowButtonLabel: 'Very slow speed',
    /**
     * @description Item label for the very slow speed replay option
     */ ReplayVerySlowItemLabel: 'Very slow',
    /**
     * @description Button label for the extremely slow speed replay option
     */ ReplayExtremelySlowButtonLabel: 'Extremely slow speed',
    /**
     * @description Item label for the slow speed replay option
     */ ReplayExtremelySlowItemLabel: 'Extremely slow',
    /**
     * @description Label for a group of items in the replay menu that indicate various replay speeds (e.g., Normal, Fast, Slow).
     */ speedGroup: 'Speed',
    /**
     * @description Label for a group of items in the replay menu that indicate various extensions that can be used for replay.
     */ extensionGroup: 'Extensions'
};
var items = [
    {
        value: "normal" /* PlayRecordingSpeed.Normal */ ,
        buttonIconName: 'play',
        buttonLabel: function() {
            return i18nString(UIStrings.ReplayNormalButtonLabel);
        },
        label: function() {
            return i18nString(UIStrings.ReplayNormalItemLabel);
        }
    },
    {
        value: "slow" /* PlayRecordingSpeed.Slow */ ,
        buttonIconName: 'play',
        buttonLabel: function() {
            return i18nString(UIStrings.ReplaySlowButtonLabel);
        },
        label: function() {
            return i18nString(UIStrings.ReplaySlowItemLabel);
        }
    },
    {
        value: "very_slow" /* PlayRecordingSpeed.VerySlow */ ,
        buttonIconName: 'play',
        buttonLabel: function() {
            return i18nString(UIStrings.ReplayVerySlowButtonLabel);
        },
        label: function() {
            return i18nString(UIStrings.ReplayVerySlowItemLabel);
        }
    },
    {
        value: "extremely_slow" /* PlayRecordingSpeed.ExtremelySlow */ ,
        buttonIconName: 'play',
        buttonLabel: function() {
            return i18nString(UIStrings.ReplayExtremelySlowButtonLabel);
        },
        label: function() {
            return i18nString(UIStrings.ReplayExtremelySlowItemLabel);
        }
    }
];
var _obj;
var replaySpeedToMetricSpeedMap = (_obj = {}, _define_property(_obj, "normal" /* PlayRecordingSpeed.Normal */ , 1 /* Host.UserMetrics.RecordingReplaySpeed.Normal */ ), _define_property(_obj, "slow" /* PlayRecordingSpeed.Slow */ , 2 /* Host.UserMetrics.RecordingReplaySpeed.Slow */ ), _define_property(_obj, "very_slow" /* PlayRecordingSpeed.VerySlow */ , 3 /* Host.UserMetrics.RecordingReplaySpeed.VerySlow */ ), _define_property(_obj, "extremely_slow" /* PlayRecordingSpeed.ExtremelySlow */ , 4 /* Host.UserMetrics.RecordingReplaySpeed.ExtremelySlow */ ), _obj);
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/recorder/components/ReplaySection.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var StartReplayEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(StartReplayEvent, Event1);
    var _super = _create_super(StartReplayEvent);
    function StartReplayEvent(speed, extension) {
        _class_call_check(this, StartReplayEvent);
        var _this;
        _this = _super.call(this, StartReplayEvent.eventName, {
            bubbles: true,
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "speed", void 0);
        _define_property(_assert_this_initialized(_this), "extension", void 0);
        _this.speed = speed;
        _this.extension = extension;
        return _this;
    }
    return StartReplayEvent;
}(_wrap_native_super(Event));
_define_property(StartReplayEvent, "eventName", 'startreplay');
var REPLAY_EXTENSION_PREFIX = 'extension';
var _shadow = /*#__PURE__*/ new WeakMap(), _boundRender = /*#__PURE__*/ new WeakMap(), _props = /*#__PURE__*/ new WeakMap(), _settings = /*#__PURE__*/ new WeakMap(), _replayExtensions = /*#__PURE__*/ new WeakMap(), _handleSelectMenuSelected = /*#__PURE__*/ new WeakSet(), _handleSelectButtonClick = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet();
var ReplaySection = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ReplaySection, HTMLElement1);
    var _super = _create_super(ReplaySection);
    function ReplaySection() {
        _class_call_check(this, ReplaySection);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _handleSelectMenuSelected);
        _class_private_method_init(_assert_this_initialized(_this), _handleSelectButtonClick);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _boundRender, {
            writable: true,
            value: _class_private_method_get(_this, _render, render).bind(_assert_this_initialized(_this))
        });
        _class_private_field_init(_assert_this_initialized(_this), _props, {
            writable: true,
            value: {
                disabled: false
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _settings, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _replayExtensions, {
            writable: true,
            value: []
        });
        return _this;
    }
    _create_class(ReplaySection, [
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _settings, data.settings);
                _class_private_field_set(this, _replayExtensions, data.replayExtensions);
            }
        },
        {
            key: "disabled",
            get: function get() {
                return _class_private_field_get(this, _props).disabled;
            },
            set: function set(disabled) {
                _class_private_field_get(this, _props).disabled = disabled;
                void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _boundRender));
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _boundRender));
            }
        }
    ]);
    return ReplaySection;
}(_wrap_native_super(HTMLElement));
_define_property(ReplaySection, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal(_templateObject()));
function handleSelectMenuSelected(event) {
    var speed = event.value;
    if (_class_private_field_get(this, _settings) && event.value) {
        _class_private_field_get(this, _settings).speed = speed;
        _class_private_field_get(this, _settings).replayExtension = '';
    }
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingReplaySpeed(replaySpeedToMetricSpeedMap[speed]);
    void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _boundRender));
}
function handleSelectButtonClick(event) {
    event.stopPropagation();
    if (event.value && event.value.startsWith(REPLAY_EXTENSION_PREFIX)) {
        if (_class_private_field_get(this, _settings)) {
            _class_private_field_get(this, _settings).replayExtension = event.value;
        }
        var extensionIdx = Number(event.value.substring(REPLAY_EXTENSION_PREFIX.length));
        this.dispatchEvent(new StartReplayEvent("normal" /* PlayRecordingSpeed.Normal */ , _class_private_field_get(this, _replayExtensions)[extensionIdx]));
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _boundRender));
        return;
    }
    this.dispatchEvent(new StartReplayEvent(_class_private_field_get(this, _settings) ? _class_private_field_get(this, _settings).speed : "normal" /* PlayRecordingSpeed.Normal */ ));
    void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _boundRender));
}
function render() {
    var _$_class_private_field_get, _$_class_private_field_get1;
    var groups = [
        {
            name: i18nString(UIStrings.speedGroup),
            items: items
        }
    ];
    if (_class_private_field_get(this, _replayExtensions).length) {
        groups.push({
            name: i18nString(UIStrings.extensionGroup),
            items: _class_private_field_get(this, _replayExtensions).map(function(extension, idx) {
                return {
                    value: REPLAY_EXTENSION_PREFIX + idx,
                    buttonIconName: 'play',
                    buttonLabel: function() {
                        return extension.getName();
                    },
                    label: function() {
                        return extension.getName();
                    }
                };
            })
        });
    }
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject1(), _SelectButton_js__WEBPACK_IMPORTED_MODULE_5__.SelectButton.litTagName, _class_private_method_get(this, _handleSelectMenuSelected, handleSelectMenuSelected), _class_private_method_get(this, _handleSelectButtonClick, handleSelectButtonClick), "primary" /* SelectButtonVariant.PRIMARY */ , false, _class_private_field_get(this, _props).disabled, "chrome-recorder.replay-recording" /* Actions.RecorderActions.ReplayRecording */ , ((_$_class_private_field_get = _class_private_field_get(this, _settings)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.replayExtension) || ((_$_class_private_field_get1 = _class_private_field_get(this, _settings)) === null || _$_class_private_field_get1 === void 0 ? void 0 : _$_class_private_field_get1.speed), i18nString(UIStrings.Replay), groups, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.action("chrome-recorder.replay-recording" /* Actions.RecorderActions.ReplayRecording */ ).track({
        click: true
    }), _SelectButton_js__WEBPACK_IMPORTED_MODULE_5__.SelectButton.litTagName), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
customElements.define('devtools-replay-section', ReplaySection); //# sourceMappingURL=ReplaySection.js.map


}),

}]);