"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_components_TimelineSection_js"], {
"./panels/recorder/components/TimelineSection.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TimelineSection: function() { return TimelineSection; }
});
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _timelineSection_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timelineSection.css.js */ "./panels/recorder/components/timelineSection.css.js");
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
        "devtools-timeline-section"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n      <div class=",
        '>\n        <div class="overlay"></div>\n        <div class="icon"><slot name="icon"></slot></div>\n        <svg width="24" height="100%" class="bar">\n          <rect class="line" x="7" y="0" width="2" height="100%" />\n        </svg>\n        <slot></slot>\n      </div>\n    '
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}


var _isEndOfGroup = /*#__PURE__*/ new WeakMap(), _isStartOfGroup = /*#__PURE__*/ new WeakMap(), _isFirstSection = /*#__PURE__*/ new WeakMap(), _isLastSection = /*#__PURE__*/ new WeakMap(), _isSelected = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet();
var TimelineSection = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(TimelineSection, HTMLElement1);
    var _super = _create_super(TimelineSection);
    function TimelineSection() {
        _class_call_check(this, TimelineSection);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _isEndOfGroup, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _isStartOfGroup, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _isFirstSection, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _isLastSection, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _isSelected, {
            writable: true,
            value: false
        });
        var shadowRoot = _this.attachShadow({
            mode: 'open'
        });
        shadowRoot.adoptedStyleSheets = [
            _timelineSection_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]
        ];
        return _this;
    }
    _create_class(TimelineSection, [
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _isFirstSection, data.isFirstSection);
                _class_private_field_set(this, _isLastSection, data.isLastSection);
                _class_private_field_set(this, _isEndOfGroup, data.isEndOfGroup);
                _class_private_field_set(this, _isStartOfGroup, data.isStartOfGroup);
                _class_private_field_set(this, _isSelected, data.isSelected);
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_method_get(this, _render, render).call(this);
            }
        }
    ]);
    return TimelineSection;
}(_wrap_native_super(HTMLElement));
_define_property(TimelineSection, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal(_templateObject()));
function render() {
    var classes = {
        'timeline-section': true,
        'is-end-of-group': _class_private_field_get(this, _isEndOfGroup),
        'is-start-of-group': _class_private_field_get(this, _isStartOfGroup),
        'is-first-section': _class_private_field_get(this, _isFirstSection),
        'is-last-section': _class_private_field_get(this, _isLastSection),
        'is-selected': _class_private_field_get(this, _isSelected)
    };
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject1(), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap(classes)), this.shadowRoot, {
        host: this
    });
// clang-format on
}
customElements.define('devtools-timeline-section', TimelineSection); //# sourceMappingURL=TimelineSection.js.map


}),
"./panels/recorder/components/timelineSection.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: inherit;\n}\n\n.timeline-section {\n  position: relative;\n  padding: 16px 0 16px 40px;\n  margin-left: 8px;\n\n  --override-color-recording-successful-text: #36a854;\n  --override-color-recording-successful-background: #e6f4ea;\n}\n\n.overlay {\n  position: absolute;\n  width: 100vw;\n  height: 100%;\n  /* Offset of 32px for spacing and 80px for screenshot */\n  left: calc(-32px - 80px);\n  top: 0;\n  z-index: -1;\n  pointer-events: none;\n}\n\n/* stylelint-disable-next-line at-rule-no-unknown */\n@container (max-width: 400px) {\n  .overlay {\n    /* Offset of 32px for spacing */\n    left: -32px;\n  }\n}\n\n:hover .overlay {\n  background: var(--sys-color-state-hover-on-subtle);\n}\n\n.is-selected .overlay {\n  background: var(--sys-color-tonal-container);\n}\n\n:host-context(.is-stopped) .overlay {\n  background: var(--sys-color-state-ripple-primary);\n  outline: 1px solid var(--sys-color-state-focus-ring);\n  z-index: 4;\n}\n\n.is-start-of-group {\n  padding-top: 28px;\n}\n\n.is-end-of-group {\n  padding-bottom: 24px;\n}\n\n.icon {\n  position: absolute;\n  left: 4px;\n  transform: translateX(-50%);\n  z-index: 2;\n}\n\n.bar {\n  position: absolute;\n  left: 4px;\n  display: block;\n  transform: translateX(-50%);\n  top: 18px;\n  height: calc(100% + 8px);\n  z-index: 1; /* We want this to be below of \\'.overlay\\' for stopped case */\n}\n\n.bar .background {\n  fill: var(--sys-color-state-hover-on-subtle);\n}\n\n.bar .line {\n  fill: var(--sys-color-primary);\n}\n\n.is-first-section .bar {\n  top: 32px;\n  height: calc(100% - 8px);\n  display: none;\n}\n\n.is-first-section:not(.is-last-section) .bar {\n  display: block;\n}\n\n.is-last-section .bar .line {\n  display: none;\n}\n\n.is-last-section .bar .background {\n  display: none;\n}\n\n:host-context(.is-error) .bar .line {\n  fill: var(--sys-color-error);\n}\n\n:host-context(.is-error) .bar .background {\n  fill: var(--sys-color-error-container);\n}\n\n:host-context(.was-successful) .bar .background {\n  animation: flash-background 2s;\n}\n\n:host-context(.was-successful) .bar .line {\n  animation: flash-line 2s;\n}\n\n@keyframes flash-background {\n  25% {\n    fill: var(--override-color-recording-successful-background);\n  }\n\n  75% {\n    fill: var(--override-color-recording-successful-background);\n  }\n}\n\n@keyframes flash-line {\n  25% {\n    fill: var(--override-color-recording-successful-text);\n  }\n\n  75% {\n    fill: var(--override-color-recording-successful-text);\n  }\n}\n\n/*# sourceURL=timelineSection.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);