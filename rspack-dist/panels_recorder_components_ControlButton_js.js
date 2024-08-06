"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_components_ControlButton_js"], {
"./panels/recorder/components/ControlButton.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ControlButton: function() { return ControlButton; }
});
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _controlButton_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controlButton.css.js */ "./panels/recorder/components/controlButton.css.js");
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
        "\n            <button\n                @click=",
        "\n                .disabled=",
        '\n                class="control"\n            >\n                <div class="icon ',
        '"></div>\n                <div class="label">',
        "</div>\n            </button>\n        "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var _handleClickEvent, _ControlButton;
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if ((typeof Reflect === "undefined" ? "undefined" : _type_of(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html, Decorators = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Decorators, LitElement = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.LitElement;
var customElement = Decorators.customElement, property = Decorators.property;
var ControlButton = (_handleClickEvent = /*#__PURE__*/ new WeakMap(), _ControlButton = /*#__PURE__*/ function(LitElement) {
    "use strict";
    _inherits(ControlButton, LitElement);
    var _super = _create_super(ControlButton);
    function ControlButton() {
        _class_call_check(this, ControlButton);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _handleClickEvent, {
            writable: true,
            value: function(event) {
                if (_this.disabled) {
                    event.stopPropagation();
                    event.preventDefault();
                }
            }
        });
        _this.label = '';
        _this.shape = 'square';
        _this.disabled = false;
        return _this;
    }
    _create_class(ControlButton, [
        {
            key: "render",
            value: function render() {
                return html(_templateObject(), _class_private_field_get(this, _handleClickEvent), this.disabled, this.shape, this.label);
            }
        }
    ]);
    return ControlButton;
}(LitElement), _define_property(_ControlButton, "styles", [
    _controlButton_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]
]), _ControlButton);
__decorate([
    property()
], ControlButton.prototype, "label", void 0);
__decorate([
    property()
], ControlButton.prototype, "shape", void 0);
__decorate([
    property()
], ControlButton.prototype, "disabled", void 0);
ControlButton = __decorate([
    customElement('devtools-control-button')
], ControlButton);
 //# sourceMappingURL=ControlButton.js.map


}),
"./panels/recorder/components/controlButton.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: inherit;\n}\n\n.control {\n  background: none;\n  border: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.control[disabled] {\n  filter: grayscale(100%);\n  cursor: auto;\n}\n\n.icon {\n  display: flex;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--sys-color-error-bright);\n  margin-bottom: 8px;\n  position: relative;\n  transition: background 200ms;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n}\n\n.icon::before {\n  --override-white: #fff;\n\n  box-sizing: border-box;\n  content: "";\n  display: block;\n  width: 14px;\n  height: 14px;\n  border: 1px solid var(--override-white);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--override-white);\n}\n\n.icon.square::before {\n  border-radius: 0;\n}\n\n.icon.circle::before {\n  border-radius: 50%;\n}\n\n.icon:hover {\n  background: color-mix(in sRGB, var(--sys-color-error-bright), var(--sys-color-state-hover-on-prominent) 10%);\n}\n\n.icon:active {\n  background: color-mix(in sRGB, var(--sys-color-error-bright), var(--sys-color-state-ripple-neutral-on-prominent) 16%);\n}\n\n.control[disabled] .icon:hover {\n  background: var(--sys-color-error);\n}\n\n.label {\n  font-size: 12px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: 0.02em;\n  color: var(--sys-color-on-surface);\n}\n\n/*# sourceURL=controlButton.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);