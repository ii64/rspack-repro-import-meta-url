"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_components_StartView_js"], {
"./panels/recorder/components/StartView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CreateRecordingEvent: function() { return CreateRecordingEvent; },
  FEEDBACK_URL: function() { return FEEDBACK_URL; },
  StartView: function() { return StartView; }
});
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */var _ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/panel_feedback/panel_feedback.js */ "./ui/components/panel_feedback/panel_feedback.js");
/* harmony import */var _ui_components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/panel_introduction_steps/panel_introduction_steps.js */ "./ui/components/panel_introduction_steps/panel_introduction_steps.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _startView_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./startView.css.js */ "./panels/recorder/components/startView.css.js");
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
        '\n        <div class="wrapper">\n          <',
        '>\n            <span slot="title">',
        '</span>\n            <span slot="step-1">',
        '</span>\n            <span slot="step-2">',
        '</span>\n            <span slot="step-3">',
        "</span>\n          </",
        '>\n          <div class="fit-content">\n            <',
        " .variant=",
        " @click=",
        "\n              .jslogContext=",
        ">\n              ",
        "\n            </",
        ">\n          </div>\n          <",
        " .data=",
        ">\n          </",
        '>\n          <div class="align-right">\n            <',
        " .data=",
        ">\n            </",
        ">\n          </div>\n        </div>\n      "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "devtools-start-view"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}









var UIStrings = {
    /**
     * @description The header of the start page in the Recorder panel.
     */ header: 'Measure performance across an entire user journey',
    /**
     * @description The Recorder start page contains a list of steps that the user can do. This is the text of the first step.
     */ step1: 'Record a common user journey on your website or app',
    /**
     * @description The Recorder start page contains a list of steps that the user can do. This is the text of the second step.
     */ step2: 'Replay the recording to check if the flow is working',
    /**
     * @description The Recorder start page contains a list of steps that the user can do. This is the text of the third step.
     */ step3: 'Generate a detailed performance trace or export a Puppeteer script for testing',
    /**
     * @description The title of the button that leads to the page for creating a new recording.
     */ createRecording: 'Create a new recording',
    /**
     * @description The link title in the Preview feature box leading to an article documenting the recorder feature.
     */ quickStart: 'Quick start: learn the new Recorder panel in DevTools'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/recorder/components/StartView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var FEEDBACK_URL = 'https://goo.gle/recorder-feedback';
var DOC_URL = 'https://developer.chrome.com/docs/devtools/recorder';
var CreateRecordingEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(CreateRecordingEvent, Event1);
    var _super = _create_super(CreateRecordingEvent);
    function CreateRecordingEvent() {
        _class_call_check(this, CreateRecordingEvent);
        return _super.call(this, CreateRecordingEvent.eventName);
    }
    return CreateRecordingEvent;
}(_wrap_native_super(Event));
_define_property(CreateRecordingEvent, "eventName", 'createrecording');
var _shadow = /*#__PURE__*/ new WeakMap(), _onClick = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakMap();
var StartView = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(StartView, HTMLElement1);
    var _super = _create_super(StartView);
    function StartView() {
        _class_call_check(this, StartView);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _onClick);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _render, {
            writable: true,
            value: function() {
                // clang-format off
                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html(_templateObject(), _ui_components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_5__.PanelIntroductionSteps.PanelIntroductionSteps.litTagName, i18nString(UIStrings.header), i18nString(UIStrings.step1), i18nString(UIStrings.step2), i18nString(UIStrings.step3), _ui_components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_5__.PanelIntroductionSteps.PanelIntroductionSteps.litTagName, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, "primary" /* Buttons.Button.Variant.PRIMARY */ , _class_private_method_get(_assert_this_initialized(_this), _onClick, onClick), "chrome-recorder.create-recording" /* Actions.RecorderActions.CreateRecording */ , i18nString(UIStrings.createRecording), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, _ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_4__.PanelFeedback.PanelFeedback.litTagName, {
                    feedbackUrl: FEEDBACK_URL,
                    quickStartUrl: DOC_URL,
                    quickStartLinkText: i18nString(UIStrings.quickStart)
                }, _ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_4__.PanelFeedback.PanelFeedback.litTagName, _ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_4__.FeedbackButton.FeedbackButton.litTagName, {
                    feedbackUrl: FEEDBACK_URL
                }, _ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_4__.FeedbackButton.FeedbackButton.litTagName), _class_private_field_get(_assert_this_initialized(_this), _shadow), {
                    host: _assert_this_initialized(_this)
                });
            // clang-format on
            }
        });
        _this.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('start-view')));
        return _this;
    }
    _create_class(StartView, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _startView_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]
                ];
                void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _render));
            }
        }
    ]);
    return StartView;
}(_wrap_native_super(HTMLElement));
_define_property(StartView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.literal(_templateObject1()));
function onClick() {
    this.dispatchEvent(new CreateRecordingEvent());
}
customElements.define('devtools-start-view', StartView); //# sourceMappingURL=StartView.js.map


}),
"./panels/recorder/components/startView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-weight: normal;\n  font-size: inherit;\n}\n\n:host {\n  flex: 1;\n  display: block;\n  overflow: auto;\n}\n\n.wrapper {\n  padding: 24px;\n  background-color: var(--sys-color-cdt-base-container);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.fit-content {\n  width: fit-content;\n}\n\n.align-right {\n  width: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n/*# sourceURL=startView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./ui/components/panel_introduction_steps/panel_introduction_steps.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PanelIntroductionSteps: function() { return /* reexport module object */ _PanelIntroductionSteps_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _PanelIntroductionSteps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PanelIntroductionSteps.js */ "./ui/components/panel_introduction_steps/PanelIntroductionSteps.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=panel_introduction_steps.js.map



}),

}]);