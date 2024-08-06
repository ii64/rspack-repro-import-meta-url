"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_freestyler_components_ProvideFeedback_js"], {
"./panels/freestyler/components/ProvideFeedback.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ProvideFeedback: function() { return ProvideFeedback; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _provideFeedback_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./provideFeedback.css.js */ "./panels/freestyler/components/provideFeedback.css.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
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
        "devtools-provide-feedback"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n      <",
        "\n        .data=",
        "\n        @click=",
        "\n      ></",
        ">\n      <",
        "\n        .data=",
        "\n        @click=",
        "\n      ></",
        '>\n      <div class="vertical-separator"></div>\n      <',
        "\n        .data=",
        "\n        @click=",
        "\n      ></",
        ">\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '\n      <form class="feedback" @submit=',
        '>\n        <div class="feedback-header">\n          <h4 class="feedback-title">',
        "</h4>\n          <",
        "\n            aria-label=",
        "\n            @click=",
        "\n            .data=",
        "\n          ></",
        '>\n        </div>\n        <input\n          type="text"\n          class="devtools-text-input feedback-input"\n          placeholder=',
        '\n        >\n        <span class="feedback-disclaimer">',
        "</span>\n        <",
        "\n        aria-label=",
        "\n        .data=",
        "\n        >",
        "</",
        ">\n      </div>\n    "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '\n        <div class="rate-buttons">\n          ',
        "\n          ",
        "\n        </div>"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}






/*
  * TODO(nvitkov): b/346933425
  * Temporary string that should not be translated
  * as they may change often during development.
  */ var UIStringsTemp = {
    /**
     * @description The title of the button that allows submitting positive
     * feedback about the response for freestyler.
     */ thumbsUp: 'Thumbs up',
    /**
     * @description The title of the button that allows submitting negative
     * feedback about the response for freestyler.
     */ thumbsDown: 'Thumbs down',
    /**
     * @description The placeholder text for the feedback input.
     */ provideFeedbackPlaceholder: 'Provide additional feedback',
    /**
     * @description The disclaimer text that tells the user what will be shared
     * and what will be stored.
     */ disclaimer: 'Feedback submitted will also include your conversation.',
    /**
     * @description The button text for the action of submitting feedback.
     */ submit: 'Submit',
    /**
     * @description The header of the feedback form asking.
     */ whyThisRating: 'Why did you choose this rating? (optional)',
    /**
     * @description The button text for the action that hides the feedback form.
     */ close: 'Close',
    /**
     * @description The title of the button that opens a page to report a legal
     * issue with the Freestyler message.
     */ report: 'Report legal issue'
};
// const str_ = i18n.i18n.registerUIStrings('panels/freestyler/components/AiRatings.ts', UIStrings);
// const i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);
/* eslint-disable  rulesdir/l10n_i18nString_call_only_with_uistrings */ var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString;
var REPORT_URL = 'https://support.google.com/legal/troubleshooter/1114905?hl=en#ts=1115658%2C13380504';
var _shadow = /*#__PURE__*/ new WeakMap(), _props = /*#__PURE__*/ new WeakMap(), _isShowingFeedbackForm = /*#__PURE__*/ new WeakMap(), _currentRating = /*#__PURE__*/ new WeakMap(), _handleRateClick = /*#__PURE__*/ new WeakSet(), _handleClose = /*#__PURE__*/ new WeakMap(), _handleSubmit = /*#__PURE__*/ new WeakMap(), _handleReportClick = /*#__PURE__*/ new WeakMap(), _renderButtons = /*#__PURE__*/ new WeakSet(), _renderFeedbackForm = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet();
var ProvideFeedback = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ProvideFeedback, HTMLElement1);
    var _super = _create_super(ProvideFeedback);
    function ProvideFeedback(props) {
        _class_call_check(this, ProvideFeedback);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _handleRateClick);
        _class_private_method_init(_assert_this_initialized(_this), _renderButtons);
        _class_private_method_init(_assert_this_initialized(_this), _renderFeedbackForm);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _props, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _isShowingFeedbackForm, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _currentRating, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleClose, {
            writable: true,
            value: function() {
                _class_private_field_set(_assert_this_initialized(_this), _isShowingFeedbackForm, false);
                _class_private_method_get(_this, _render, render).call(_assert_this_initialized(_this));
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleSubmit, {
            writable: true,
            value: function(ev) {
                ev.preventDefault();
                var input = _class_private_field_get(_this, _shadow).querySelector('.feedback-input');
                if (!_class_private_field_get(_assert_this_initialized(_this), _currentRating) || !input || !input.value) {
                    return;
                }
                _class_private_field_get(_this, _props).onFeedbackSubmit(_class_private_field_get(_assert_this_initialized(_this), _currentRating), input.value);
                _class_private_field_set(_assert_this_initialized(_this), _isShowingFeedbackForm, false);
                _class_private_method_get(_this, _render, render).call(_assert_this_initialized(_this));
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleReportClick, {
            writable: true,
            value: function() {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(REPORT_URL);
            }
        });
        _class_private_field_set(_assert_this_initialized(_this), _props, props);
        return _this;
    }
    _create_class(ProvideFeedback, [
        {
            key: "props",
            set: function set(props) {
                _class_private_field_set(this, _props, props);
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _provideFeedback_css_js__WEBPACK_IMPORTED_MODULE_5__["default"],
                    _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_3__.textInputStyles
                ];
                _class_private_method_get(this, _render, render).call(this);
            }
        }
    ]);
    return ProvideFeedback;
}(_wrap_native_super(HTMLElement));
_define_property(ProvideFeedback, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal(_templateObject()));
function handleRateClick(rating) {
    if (_class_private_field_get(this, _currentRating) === rating) {
        return;
    }
    _class_private_field_set(this, _currentRating, rating);
    _class_private_field_set(this, _isShowingFeedbackForm, _class_private_field_get(this, _props).canShowFeedbackForm);
    _class_private_field_get(this, _props).onFeedbackSubmit(_class_private_field_get(this, _currentRating));
    _class_private_method_get(this, _render, render).call(this);
}
function renderButtons() {
    var _this = this;
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject1(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, {
        variant: "icon" /* Buttons.Button.Variant.ICON */ ,
        size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
        iconName: 'thumb-up',
        active: _class_private_field_get(this, _currentRating) === "POSITIVE" /* Host.AidaClient.Rating.POSITIVE */ ,
        title: i18nString(UIStringsTemp.thumbsUp),
        jslogContext: 'thumbs-up'
    }, function() {
        return _class_private_method_get(_this, _handleRateClick, handleRateClick).call(_this, "POSITIVE" /* Host.AidaClient.Rating.POSITIVE */ );
    }, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, {
        variant: "icon" /* Buttons.Button.Variant.ICON */ ,
        size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
        iconName: 'thumb-down',
        active: _class_private_field_get(this, _currentRating) === "NEGATIVE" /* Host.AidaClient.Rating.NEGATIVE */ ,
        title: i18nString(UIStringsTemp.thumbsDown),
        jslogContext: 'thumbs-down'
    }, function() {
        return _class_private_method_get(_this, _handleRateClick, handleRateClick).call(_this, "NEGATIVE" /* Host.AidaClient.Rating.NEGATIVE */ );
    }, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, {
        variant: "icon" /* Buttons.Button.Variant.ICON */ ,
        size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
        title: i18nString(UIStringsTemp.report),
        iconName: 'report',
        jslogContext: 'report'
    }, _class_private_field_get(this, _handleReportClick), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName);
// clang-format on
}
function renderFeedbackForm() {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject2(), _class_private_field_get(this, _handleSubmit), i18nString(UIStringsTemp.whyThisRating), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, i18nString(UIStringsTemp.close), _class_private_field_get(this, _handleClose), {
        variant: "icon" /* Buttons.Button.Variant.ICON */ ,
        iconName: 'cross',
        size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
        title: i18nString(UIStringsTemp.close),
        jslogContext: 'close'
    }, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, i18nString(UIStringsTemp.provideFeedbackPlaceholder), i18nString(UIStringsTemp.disclaimer), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, i18nString(UIStringsTemp.submit), {
        type: 'submit',
        variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
        size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
        title: i18nString(UIStringsTemp.submit),
        jslogContext: 'send'
    }, i18nString(UIStringsTemp.submit), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName);
// clang-format on
}
function render() {
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject3(), _class_private_method_get(this, _renderButtons, renderButtons).call(this), _class_private_field_get(this, _isShowingFeedbackForm) ? _class_private_method_get(this, _renderFeedbackForm, renderFeedbackForm).call(this) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.nothing), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
customElements.define('devtools-provide-feedback', ProvideFeedback); //# sourceMappingURL=ProvideFeedback.js.map


}),
"./panels/freestyler/components/provideFeedback.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2024 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  box-sizing: border-box;\n}\n\n.feedback {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sys-size-4);\n  margin-top: var(--sys-size-4);\n}\n\n.feedback-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.feedback-title {\n  margin: 0;\n}\n\n.feedback-disclaimer {\n  padding: 0 var(--sys-size-4);\n}\n\n.vertical-separator {\n  height: 20px;\n  width: 1px;\n  vertical-align: top;\n  margin: 0 var(--sys-size-2);\n  background: var(--color-background-inverted);\n  opacity: 10%;\n  display: inline-block;\n}\n\n/*# sourceURL=./components/provideFeedback.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);