"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_survey_link_SurveyLink_js"], {
"./ui/components/survey_link/SurveyLink.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SurveyLink: function() { return SurveyLink; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _surveyLink_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./surveyLink.css.js */ "./ui/components/survey_link/surveyLink.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
        "devtools-survey-link"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n      <button class="link ',
        '" tabindex=',
        " .disabled=",
        " aria-disabled=",
        " @click=",
        ">\n        <",
        ' class="link-icon" .data=',
        "></",
        "><!--\n      -->",
        "\n      </button>\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}





var UIStrings = {
    /**
     *@description Text shown when the link to open a survey is clicked but the survey has not yet appeared
     */ openingSurvey: 'Opening survey …',
    /**
     *@description Text displayed instead of the survey link after the survey link is clicked, if the survey was shown successfully
     */ thankYouForYourFeedback: 'Thank you for your feedback',
    /**
     *@description Text displayed instead of the survey link after the survey link is clicked, if the survey was not shown successfully
     */ anErrorOccurredWithTheSurvey: 'An error occurred with the survey'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('ui/components/survey_link/SurveyLink.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var _shadow = /*#__PURE__*/ new WeakMap(), _trigger = /*#__PURE__*/ new WeakMap(), _promptText = /*#__PURE__*/ new WeakMap(), _canShowSurvey = /*#__PURE__*/ new WeakMap(), _showSurvey = /*#__PURE__*/ new WeakMap(), _state = /*#__PURE__*/ new WeakMap(), _checkSurvey = /*#__PURE__*/ new WeakSet(), _sendSurvey = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet();
// A link to a survey. The link is rendered aysnchronously because we need to first check if
// canShowSurvey succeeds.
var SurveyLink = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(SurveyLink, HTMLElement1);
    var _super = _create_super(SurveyLink);
    function SurveyLink() {
        _class_call_check(this, SurveyLink);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _checkSurvey);
        _class_private_method_init(_assert_this_initialized(_this), _sendSurvey);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _trigger, {
            writable: true,
            value: ''
        });
        _class_private_field_init(_assert_this_initialized(_this), _promptText, {
            writable: true,
            value: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.UIString.LocalizedEmptyString
        });
        _class_private_field_init(_assert_this_initialized(_this), _canShowSurvey, {
            writable: true,
            value: function() {}
        });
        _class_private_field_init(_assert_this_initialized(_this), _showSurvey, {
            writable: true,
            value: function() {}
        });
        _class_private_field_init(_assert_this_initialized(_this), _state, {
            writable: true,
            value: "Checking" /* State.Checking */ 
        });
        return _this;
    }
    _create_class(SurveyLink, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _surveyLink_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]
                ];
            }
        },
        {
            key: "data",
            set: // Re-setting data will cause the state to go back to 'Checking' which hides the link.
            function set(data) {
                _class_private_field_set(this, _trigger, data.trigger);
                _class_private_field_set(this, _promptText, data.promptText);
                _class_private_field_set(this, _canShowSurvey, data.canShowSurvey);
                _class_private_field_set(this, _showSurvey, data.showSurvey);
                _class_private_method_get(this, _checkSurvey, checkSurvey).call(this);
            }
        }
    ]);
    return SurveyLink;
}(_wrap_native_super(HTMLElement));
_define_property(SurveyLink, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal(_templateObject()));
function checkSurvey() {
    var _this = this;
    _class_private_field_set(this, _state, "Checking" /* State.Checking */ );
    _class_private_field_get(this, _canShowSurvey).call(this, _class_private_field_get(this, _trigger), function(param) {
        var canShowSurvey = param.canShowSurvey;
        if (!canShowSurvey) {
            _class_private_field_set(_this, _state, "DontShowLink" /* State.DontShowLink */ );
        } else {
            _class_private_field_set(_this, _state, "ShowLink" /* State.ShowLink */ );
        }
        _class_private_method_get(_this, _render, render).call(_this);
    });
}
function sendSurvey() {
    var _this = this;
    _class_private_field_set(this, _state, "Sending" /* State.Sending */ );
    _class_private_method_get(this, _render, render).call(this);
    _class_private_field_get(this, _showSurvey).call(this, _class_private_field_get(this, _trigger), function(param) {
        var surveyShown = param.surveyShown;
        if (!surveyShown) {
            _class_private_field_set(_this, _state, "Failed" /* State.Failed */ );
        } else {
            _class_private_field_set(_this, _state, "SurveyShown" /* State.SurveyShown */ );
        }
        _class_private_method_get(_this, _render, render).call(_this);
    });
}
function render() {
    if (_class_private_field_get(this, _state) === "Checking" /* State.Checking */  || _class_private_field_get(this, _state) === "DontShowLink" /* State.DontShowLink */ ) {
        return;
    }
    var linkText = _class_private_field_get(this, _promptText);
    if (_class_private_field_get(this, _state) === "Sending" /* State.Sending */ ) {
        linkText = i18nString(UIStrings.openingSurvey);
    } else if (_class_private_field_get(this, _state) === "SurveyShown" /* State.SurveyShown */ ) {
        linkText = i18nString(UIStrings.thankYouForYourFeedback);
    } else if (_class_private_field_get(this, _state) === "Failed" /* State.Failed */ ) {
        linkText = i18nString(UIStrings.anErrorOccurredWithTheSurvey);
    }
    var linkState = '';
    if (_class_private_field_get(this, _state) === "Sending" /* State.Sending */ ) {
        linkState = 'pending-link';
    } else if (_class_private_field_get(this, _state) === "Failed" /* State.Failed */  || _class_private_field_get(this, _state) === "SurveyShown" /* State.SurveyShown */ ) {
        linkState = 'disabled-link';
    }
    var ariaDisabled = _class_private_field_get(this, _state) !== "ShowLink" /* State.ShowLink */ ;
    // clang-format off
    // eslint-disable-next-line rulesdir/ban_style_tags_in_lit_html
    var output = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html(_templateObject1(), linkState, ariaDisabled ? '-1' : '0', ariaDisabled, ariaDisabled, _class_private_method_get(this, _sendSurvey, sendSurvey), _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, {
        iconName: 'review',
        color: 'var(--sys-color-primary)',
        width: 'var(--issue-link-icon-size, 16px)',
        height: 'var(--issue-link-icon-size, 16px)'
    }, _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, linkText);
    // clang-format on
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(output, _class_private_field_get(this, _shadow), {
        host: this
    });
}
customElements.define('devtools-survey-link', SurveyLink); //# sourceMappingURL=SurveyLink.js.map


}),
"./ui/components/survey_link/surveyLink.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.link-icon {\n  vertical-align: sub;\n  margin-right: 0.5ch;\n}\n\n.link {\n  padding: var(--issue-link-padding, 4px 0 0 0);\n  text-decoration: var(--issue-link-text-decoration, underline);\n  cursor: pointer;\n  font-size: var(--issue-link-font-size, 14px);\n  color: var(--sys-color-primary);\n  outline-offset: 2px;\n  border: none;\n  background: none;\n  font-family: inherit;\n}\n\n.link:focus:not(:focus-visible) {\n  outline: none;\n}\n\n.pending-link {\n  opacity: 75%;\n  pointer-events: none;\n  cursor: default;\n  text-decoration: none;\n}\n\n.disabled-link {\n  pointer-events: none;\n  cursor: default;\n  text-decoration: none;\n}\n\n/*# sourceURL=surveyLink.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);