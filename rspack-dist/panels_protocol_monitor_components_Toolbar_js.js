"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_protocol_monitor_components_Toolbar_js"], {
"./panels/protocol_monitor/components/Toolbar.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CopyCommandEvent: function() { return CopyCommandEvent; },
  SendCommandEvent: function() { return SendCommandEvent; },
  Toolbar: function() { return Toolbar; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _toolbar_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar.css.js */ "./panels/protocol_monitor/components/toolbar.css.js");
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
        '\n        <div class="toolbar">\n          <',
        "\n          title=",
        "\n          .size=",
        "\n          .iconUrl=",
        "\n          .variant=",
        "\n          @click=",
        "\n          jslog=",
        "\n        ></",
        ">\n        <",
        "\n          .size=",
        "\n          title=",
        "\n          .iconUrl=",
        "\n          .variant=",
        "\n          @click=",
        "\n          jslog=",
        "\n        ></",
        ">\n      </div>\n    "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var _handleCopy, _handleSend, _Toolbar;
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if ((typeof Reflect === "undefined" ? "undefined" : _type_of(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






var html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html, Decorators = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.Decorators, LitElement = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.LitElement;
var customElement = Decorators.customElement;
var UIStrings = {
    /**
     * @description The title of a the button that sends a CDP command.
     */ sendCommandCtrlEnter: 'Send command - Ctrl+Enter',
    /**
     * @description The title of a the button that sends a CDP command.
     */ sendCommandCmdEnter: 'Send command - ⌘+Enter',
    /**
     * @description he title of a the button that copies a CDP command.
     */ copyCommand: 'Copy command'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/protocol_monitor/components/Toolbar.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var copyIconUrl = new URL(/* asset import */__webpack_require__(/*! ../../../Images/copy.svg */ "./Images/copy.svg?86e0"), __webpack_require__.b).toString();
var sendIconUrl = new URL(/* asset import */__webpack_require__(/*! ../../../Images/send.svg */ "./Images/send.svg?379b"), __webpack_require__.b).toString();
var CopyCommandEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(CopyCommandEvent, Event1);
    var _super = _create_super(CopyCommandEvent);
    function CopyCommandEvent() {
        _class_call_check(this, CopyCommandEvent);
        return _super.call(this, CopyCommandEvent.eventName, {
            bubbles: true,
            composed: true
        });
    }
    return CopyCommandEvent;
}(_wrap_native_super(Event));
_define_property(CopyCommandEvent, "eventName", 'copycommand');
var SendCommandEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(SendCommandEvent, Event1);
    var _super = _create_super(SendCommandEvent);
    function SendCommandEvent() {
        _class_call_check(this, SendCommandEvent);
        return _super.call(this, SendCommandEvent.eventName, {
            bubbles: true,
            composed: true
        });
    }
    return SendCommandEvent;
}(_wrap_native_super(Event));
_define_property(SendCommandEvent, "eventName", 'commandsent');
var Toolbar = (_handleCopy = /*#__PURE__*/ new WeakMap(), _handleSend = /*#__PURE__*/ new WeakMap(), _Toolbar = /*#__PURE__*/ function(LitElement) {
    "use strict";
    _inherits(Toolbar, LitElement);
    var _super = _create_super(Toolbar);
    function Toolbar() {
        _class_call_check(this, Toolbar);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_field_init(_assert_this_initialized(_this), _handleCopy, {
            writable: true,
            value: function() {
                _this.dispatchEvent(new CopyCommandEvent());
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleSend, {
            writable: true,
            value: function() {
                _this.dispatchEvent(new SendCommandEvent());
            }
        });
        return _this;
    }
    _create_class(Toolbar, [
        {
            key: "render",
            value: function render() {
                // clang-format off
                return html(_templateObject(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, i18nString(UIStrings.copyCommand), "SMALL" /* Buttons.Button.Size.SMALL */ , copyIconUrl, "toolbar" /* Buttons.Button.Variant.TOOLBAR */ , _class_private_field_get(this, _handleCopy), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.action('protocol-monitor.copy-command').track({
                    click: true
                }), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, "SMALL" /* Buttons.Button.Size.SMALL */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.Platform.isMac() ? i18nString(UIStrings.sendCommandCmdEnter) : i18nString(UIStrings.sendCommandCtrlEnter), sendIconUrl, "primary_toolbar" /* Buttons.Button.Variant.PRIMARY_TOOLBAR */ , _class_private_field_get(this, _handleSend), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.action('protocol-monitor.send-command').track({
                    click: true
                }), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName);
            // clang-format on
            }
        }
    ]);
    return Toolbar;
}(LitElement), _define_property(_Toolbar, "styles", [
    _toolbar_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
]), _Toolbar);
Toolbar = __decorate([
    customElement('devtools-pm-toolbar')
], Toolbar);
 //# sourceMappingURL=Toolbar.js.map


}),
"./panels/protocol_monitor/components/toolbar.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-size: inherit;\n}\n\n:host {\n  display: block;\n}\n\n.toolbar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  padding-left: 5px;\n  padding-right: 10px;\n  padding-top: 1px;\n  height: 27px;\n  background-color: var(--sys-color-cdt-base-container);\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  border-top: 1px solid var(--sys-color-divider);\n}\n\n.toolbar devtools-button {\n  width: 20px;\n  height: 20px;\n}\n\n/*# sourceURL=toolbar.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);