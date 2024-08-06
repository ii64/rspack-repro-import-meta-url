"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_css_overview_components_CSSOverviewStartView_js"], {
"./panels/css_overview/components/CSSOverviewStartView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSOverviewStartView: function() { return CSSOverviewStartView; },
  OverviewStartRequestedEvent: function() { return OverviewStartRequestedEvent; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/panel_feedback/panel_feedback.js */ "./ui/components/panel_feedback/panel_feedback.js");
/* harmony import */var _ui_components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/panel_introduction_steps/panel_introduction_steps.js */ "./ui/components/panel_introduction_steps/panel_introduction_steps.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _cssOverviewStartView_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cssOverviewStartView.css.js */ "./panels/css_overview/components/cssOverviewStartView.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
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
        "devtools-css-overview-start-view"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n      <div class="css-overview-start-view">\n        <',
        '>\n          <span slot="title">',
        '</span>\n          <span slot="step-1">',
        '</span>\n          <span slot="step-2">',
        '</span>\n          <span slot="step-3">',
        "</span>\n        </",
        '>\n        <div class="start-capture-wrapper">\n          <',
        '\n            class="start-capture"\n            .variant=',
        "\n            .jslogContext=",
        "\n            @click=",
        ">\n            ",
        "\n          </",
        ">\n        </div>\n        <",
        " .data=",
        ">\n        </",
        ">\n        <",
        " .data=",
        ">\n        </",
        ">\n      </div>\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}






var UIStrings = {
    /**
     *@description Label for the capture button in the CSS overview panel
     */ captureOverview: 'Capture overview',
    /**
     *@description Header for the summary of CSS overview
     */ identifyCSSImprovements: 'Identify potential CSS improvements',
    /**
     *@description First point of the summarized features of CSS overview
     */ capturePageCSSOverview: 'Capture an overview of your page’s CSS',
    /**
     *@description Second point of the summarized features of CSS overview
     */ identifyCSSImprovementsWithExampleIssues: 'Identify potential CSS improvements (e.g. low contrast issues, unused declarations, color or font mismatches)',
    /**
     *@description Third point of the summarized features of CSS overview
     */ locateAffectedElements: 'Locate the affected elements in the Elements panel',
    /**
     *@description Title of the link to the quick start video and documentation to CSS overview panel
     */ quickStartWithCSSOverview: 'Quick start: get started with the new CSS overview panel'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/css_overview/components/CSSOverviewStartView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html;
var FEEDBACK_LINK = 'https://g.co/devtools/css-overview-feedback';
var DOC_LINK = 'https://developer.chrome.com/docs/devtools/css-overview';
var OverviewStartRequestedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(OverviewStartRequestedEvent, Event1);
    var _super = _create_super(OverviewStartRequestedEvent);
    function OverviewStartRequestedEvent() {
        _class_call_check(this, OverviewStartRequestedEvent);
        return _super.call(this, OverviewStartRequestedEvent.eventName);
    }
    return OverviewStartRequestedEvent;
}(_wrap_native_super(Event));
_define_property(OverviewStartRequestedEvent, "eventName", 'overviewstartrequested');
var _shadow = /*#__PURE__*/ new WeakMap(), _onStartCaptureClick = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet();
var CSSOverviewStartView = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(CSSOverviewStartView, HTMLElement1);
    var _super = _create_super(CSSOverviewStartView);
    function CSSOverviewStartView() {
        _class_call_check(this, CSSOverviewStartView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _onStartCaptureClick);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        return _this;
    }
    _create_class(CSSOverviewStartView, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _cssOverviewStartView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ];
                _class_private_method_get(this, _render, render1).call(this);
            }
        },
        {
            key: "show",
            value: function show() {
                this.classList.remove('hidden');
            }
        },
        {
            key: "hide",
            value: function hide() {
                this.classList.add('hidden');
            }
        }
    ]);
    return CSSOverviewStartView;
}(_wrap_native_super(HTMLElement));
_define_property(CSSOverviewStartView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal(_templateObject()));
function onStartCaptureClick() {
    this.dispatchEvent(new OverviewStartRequestedEvent());
}
function render1() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html(_templateObject1(), _ui_components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_3__.PanelIntroductionSteps.PanelIntroductionSteps.litTagName, i18nString(UIStrings.identifyCSSImprovements), i18nString(UIStrings.capturePageCSSOverview), i18nString(UIStrings.identifyCSSImprovementsWithExampleIssues), i18nString(UIStrings.locateAffectedElements), _ui_components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_3__.PanelIntroductionSteps.PanelIntroductionSteps.litTagName, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName, "primary" /* Buttons.Button.Variant.PRIMARY */ , 'css-overview.capture-overview', _class_private_method_get(this, _onStartCaptureClick, onStartCaptureClick), i18nString(UIStrings.captureOverview), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName, _ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_2__.PanelFeedback.PanelFeedback.litTagName, {
        feedbackUrl: FEEDBACK_LINK,
        quickStartUrl: DOC_LINK,
        quickStartLinkText: i18nString(UIStrings.quickStartWithCSSOverview)
    }, _ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_2__.PanelFeedback.PanelFeedback.litTagName, _ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_2__.FeedbackButton.FeedbackButton.litTagName, {
        feedbackUrl: FEEDBACK_LINK
    }, _ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_2__.FeedbackButton.FeedbackButton.litTagName), _class_private_field_get(this, _shadow), {
        host: this
    });
    // clang-format on
    var startButton = _class_private_field_get(this, _shadow).querySelector('.start-capture');
    if (startButton) {
        startButton.focus();
    }
}
customElements.define('devtools-css-overview-start-view', CSSOverviewStartView); //# sourceMappingURL=CSSOverviewStartView.js.map


}),
"./panels/css_overview/components/cssOverviewStartView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/**\n * Copyright 2019 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\nh1 {\n  font-weight: normal;\n}\n\n.css-overview-start-view {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--sys-color-cdt-base-container);\n  overflow: auto;\n}\n\n.start-capture-wrapper {\n  width: fit-content;\n}\n\n.preview-feature {\n  padding: 12px 16px;\n  border: 1px solid var(--sys-color-neutral-outline);\n  color: var(--sys-color-on-surface);\n  font-size: 13px;\n  line-height: 20px;\n  border-radius: 12px;\n  margin: 42px 0;\n  letter-spacing: 0.01em;\n}\n\n.preview-header {\n  color: var(--sys-color-primary);\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  margin: 9px 0 14px;\n}\n\n.preview-icon {\n  vertical-align: middle;\n}\n\n.feedback-prompt {\n  margin-bottom: 24px;\n}\n\n.feedback-prompt .devtools-link {\n  color: -webkit-link;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.resources {\n  display: flex;\n  flex-direction: row;\n}\n\n.thumbnail-wrapper {\n  width: 144px;\n  height: 92px;\n  margin-right: 20px;\n}\n\n.video-doc-header {\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.04em;\n  color: var(--sys-color-on-surface);\n  margin-bottom: 2px;\n}\n\ndevtools-feedback-button {\n  align-self: flex-end;\n}\n\n.resources .devtools-link {\n  font-size: 14px;\n  line-height: 22px;\n  letter-spacing: 0.04em;\n  text-decoration-line: underline;\n  color: var(--sys-color-primary);\n}\n\n/*# sourceURL=cssOverviewStartView.css */\n");
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