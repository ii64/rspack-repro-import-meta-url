"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_components_ExtensionView_js"], {
"./panels/recorder/components/ExtensionView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ClosedEvent: function() { return ClosedEvent; },
  ExtensionView: function() { return ExtensionView; }
});
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../extensions/extensions.js */ "./panels/recorder/extensions/extensions.js");
/* harmony import */var _extensionView_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extensionView.css.js */ "./panels/recorder/components/extensionView.css.js");
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
        "devtools-recorder-extension-view"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n        <div class="extension-view">\n          <header>\n            <div class="title">\n              <',
        '\n                class="icon"\n                title=',
        '\n                name="extension">\n              </',
        ">\n              ",
        "\n            </div>\n            <",
        "\n              title=",
        "\n              jslog=",
        "\n              .data=",
        "\n              @click=",
        "\n            ></",
        ">\n          </header>\n          <main>\n            ",
        "\n          <main>\n      </div>\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}








var UIStrings = {
    /**
     * @description The button label that closes the panel that shows the extension content inside the Recorder panel.
     */ closeView: 'Close',
    /**
     * @description The label that indicates that the content shown is provided by a browser extension.
     */ extension: 'Content provided by a browser extension'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/recorder/components/ExtensionView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var ClosedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(ClosedEvent, Event1);
    var _super = _create_super(ClosedEvent);
    function ClosedEvent() {
        _class_call_check(this, ClosedEvent);
        return _super.call(this, ClosedEvent.eventName, {
            bubbles: true,
            composed: true
        });
    }
    return ClosedEvent;
}(_wrap_native_super(Event));
_define_property(ClosedEvent, "eventName", 'recorderextensionviewclosed');
var _shadow = /*#__PURE__*/ new WeakMap(), _descriptor = /*#__PURE__*/ new WeakMap(), _closeView = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet();
var ExtensionView = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ExtensionView, HTMLElement1);
    var _super = _create_super(ExtensionView);
    function ExtensionView() {
        _class_call_check(this, ExtensionView);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _closeView);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _descriptor, {
            writable: true,
            value: void 0
        });
        _this.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.section('extension-view')));
        return _this;
    }
    _create_class(ExtensionView, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _extensionView_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ];
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {
                if (!_class_private_field_get(this, _descriptor)) {
                    return;
                }
                _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__.ExtensionManager.ExtensionManager.instance().getView(_class_private_field_get(this, _descriptor).id).hide();
            }
        },
        {
            key: "descriptor",
            set: function set(descriptor) {
                _class_private_field_set(this, _descriptor, descriptor);
                _class_private_method_get(this, _render, render).call(this);
                _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__.ExtensionManager.ExtensionManager.instance().getView(descriptor.id).show();
            }
        }
    ]);
    return ExtensionView;
}(_wrap_native_super(HTMLElement));
_define_property(ExtensionView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal(_templateObject()));
function closeView() {
    this.dispatchEvent(new ClosedEvent());
}
function render() {
    if (!_class_private_field_get(this, _descriptor)) {
        return;
    }
    var iframe = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__.ExtensionManager.ExtensionManager.instance().getView(_class_private_field_get(this, _descriptor).id).frame();
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject1(), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, i18nString(UIStrings.extension), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, _class_private_field_get(this, _descriptor).title, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, i18nString(UIStrings.closeView), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.close().track({
        click: true
    }), {
        variant: "icon" /* Buttons.Button.Variant.ICON */ ,
        size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
        iconName: 'cross'
    }, _class_private_method_get(this, _closeView, closeView), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, iframe), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
customElements.define('devtools-recorder-extension-view', ExtensionView); //# sourceMappingURL=ExtensionView.js.map


}),
"./panels/recorder/components/extensionView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  box-sizing: border-box;\n  font-size: inherit;\n}\n\n.extension-view {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmain {\n  flex: 1;\n}\n\niframe {\n  border: none;\n  height: 100%;\n  width: 100%;\n}\n\nheader {\n  display: flex;\n  padding: 3px 8px;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\nheader > div {\n  align-self: center;\n}\n\n.icon {\n  display: block;\n  width: 16px;\n  height: 16px;\n  color: var(--sys-color-secondary);\n}\n\n.title {\n  display: flex;\n  flex-direction: row;\n  gap: 6px;\n  color: var(--sys-color-secondary);\n  align-items: center;\n  font-weight: 500;\n}\n\n/*# sourceURL=extensionView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/recorder/extensions/extensions.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ExtensionManager: function() { return /* reexport module object */ _ExtensionManager_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _ExtensionManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExtensionManager.js */ "./panels/recorder/extensions/ExtensionManager.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=extensions.js.map


}),

}]);