"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_components_LinearMemoryNavigator_js"], {
"./panels/linear_memory_inspector/components/LinearMemoryNavigator.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AddressInputChangedEvent: function() { return AddressInputChangedEvent; },
  HistoryNavigationEvent: function() { return HistoryNavigationEvent; },
  LinearMemoryNavigator: function() { return LinearMemoryNavigator; },
  PageNavigationEvent: function() { return PageNavigationEvent; },
  RefreshRequestedEvent: function() { return RefreshRequestedEvent; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _linearMemoryNavigator_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./linearMemoryNavigator.css.js */ "./panels/linear_memory_inspector/components/linearMemoryNavigator.css.js");
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
        "devtools-linear-memory-inspector-navigator"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n      <div class="navigator">\n        <div class="navigator-item">\n          ',
        "\n          ",
        '\n        </div>\n        <div class="navigator-item">\n          ',
        "\n          ",
        "\n          ",
        "\n        </div>\n        ",
        "\n      </div>\n      "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n      <input class=",
        ' data-input="true" .value=',
        "\n        jslog=",
        "\n        title=",
        " @change=",
        " @input=",
        "/>"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '\n      <button class="navigator-button" ?disabled=',
        "\n        jslog=",
        "\n        data-button=",
        " title=",
        "\n        @click=",
        ">\n        <",
        " name=",
        "></",
        ">\n      </button>"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}





var UIStrings = {
    /**
     *@description Tooltip text that appears when hovering over a valid memory address (e.g. 0x0) in the address line in the Linear memory inspector.
     */ enterAddress: 'Enter address',
    /**
     *@description Tooltip text that appears when hovering over the button to go back in history in the Linear Memory Navigator
     */ goBackInAddressHistory: 'Go back in address history',
    /**
     *@description Tooltip text that appears when hovering over the button to go forward in history in the Linear Memory Navigator
     */ goForwardInAddressHistory: 'Go forward in address history',
    /**
     *@description Tooltip text that appears when hovering over the page back icon in the Linear Memory Navigator
     */ previousPage: 'Previous page',
    /**
     *@description Tooltip text that appears when hovering over the next page icon in the Linear Memory Navigator
     */ nextPage: 'Next page',
    /**
     *@description Text to refresh the page
     */ refresh: 'Refresh'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/linear_memory_inspector/components/LinearMemoryNavigator.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html;
var AddressInputChangedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(AddressInputChangedEvent, Event1);
    var _super = _create_super(AddressInputChangedEvent);
    function AddressInputChangedEvent(address, mode) {
        _class_call_check(this, AddressInputChangedEvent);
        var _this;
        _this = _super.call(this, AddressInputChangedEvent.eventName);
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = {
            address: address,
            mode: mode
        };
        return _this;
    }
    return AddressInputChangedEvent;
}(_wrap_native_super(Event));
_define_property(AddressInputChangedEvent, "eventName", 'addressinputchanged');
var PageNavigationEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(PageNavigationEvent, Event1);
    var _super = _create_super(PageNavigationEvent);
    function PageNavigationEvent(navigation) {
        _class_call_check(this, PageNavigationEvent);
        var _this;
        _this = _super.call(this, PageNavigationEvent.eventName, {});
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = navigation;
        return _this;
    }
    return PageNavigationEvent;
}(_wrap_native_super(Event));
_define_property(PageNavigationEvent, "eventName", 'pagenavigation');
var HistoryNavigationEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(HistoryNavigationEvent, Event1);
    var _super = _create_super(HistoryNavigationEvent);
    function HistoryNavigationEvent(navigation) {
        _class_call_check(this, HistoryNavigationEvent);
        var _this;
        _this = _super.call(this, HistoryNavigationEvent.eventName, {});
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = navigation;
        return _this;
    }
    return HistoryNavigationEvent;
}(_wrap_native_super(Event));
_define_property(HistoryNavigationEvent, "eventName", 'historynavigation');
var RefreshRequestedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(RefreshRequestedEvent, Event1);
    var _super = _create_super(RefreshRequestedEvent);
    function RefreshRequestedEvent() {
        _class_call_check(this, RefreshRequestedEvent);
        return _super.call(this, RefreshRequestedEvent.eventName, {});
    }
    return RefreshRequestedEvent;
}(_wrap_native_super(Event));
_define_property(RefreshRequestedEvent, "eventName", 'refreshrequested');
var _shadow = /*#__PURE__*/ new WeakMap(), _address = /*#__PURE__*/ new WeakMap(), _error = /*#__PURE__*/ new WeakMap(), _valid = /*#__PURE__*/ new WeakMap(), _canGoBackInHistory = /*#__PURE__*/ new WeakMap(), _canGoForwardInHistory = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet(), _createAddressInput = /*#__PURE__*/ new WeakSet(), _onAddressChange = /*#__PURE__*/ new WeakSet(), _createButton = /*#__PURE__*/ new WeakSet();
var LinearMemoryNavigator = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(LinearMemoryNavigator, HTMLElement1);
    var _super = _create_super(LinearMemoryNavigator);
    function LinearMemoryNavigator() {
        _class_call_check(this, LinearMemoryNavigator);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _createAddressInput);
        _class_private_method_init(_assert_this_initialized(_this), _onAddressChange);
        _class_private_method_init(_assert_this_initialized(_this), _createButton);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _address, {
            writable: true,
            value: '0'
        });
        _class_private_field_init(_assert_this_initialized(_this), _error, {
            writable: true,
            value: undefined
        });
        _class_private_field_init(_assert_this_initialized(_this), _valid, {
            writable: true,
            value: true
        });
        _class_private_field_init(_assert_this_initialized(_this), _canGoBackInHistory, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _canGoForwardInHistory, {
            writable: true,
            value: false
        });
        return _this;
    }
    _create_class(LinearMemoryNavigator, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _linearMemoryNavigator_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]
                ];
            }
        },
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _address, data.address);
                _class_private_field_set(this, _error, data.error);
                _class_private_field_set(this, _valid, data.valid);
                _class_private_field_set(this, _canGoBackInHistory, data.canGoBackInHistory);
                _class_private_field_set(this, _canGoForwardInHistory, data.canGoForwardInHistory);
                _class_private_method_get(this, _render, render1).call(this);
                var addressInput = _class_private_field_get(this, _shadow).querySelector('.address-input');
                if (addressInput) {
                    if (data.mode === "Submitted" /* Mode.Submitted */ ) {
                        addressInput.blur();
                    } else if (data.mode === "InvalidSubmit" /* Mode.InvalidSubmit */ ) {
                        addressInput.select();
                    }
                }
            }
        }
    ]);
    return LinearMemoryNavigator;
}(_wrap_native_super(HTMLElement));
_define_property(LinearMemoryNavigator, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal(_templateObject()));
function render1() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    var result = html(_templateObject1(), _class_private_method_get(this, _createButton, createButton).call(this, {
        icon: 'undo',
        title: i18nString(UIStrings.goBackInAddressHistory),
        event: new HistoryNavigationEvent("Backward" /* Navigation.Backward */ ),
        enabled: _class_private_field_get(this, _canGoBackInHistory),
        jslogContext: 'linear-memory-inspector.history-back'
    }), _class_private_method_get(this, _createButton, createButton).call(this, {
        icon: 'redo',
        title: i18nString(UIStrings.goForwardInAddressHistory),
        event: new HistoryNavigationEvent("Forward" /* Navigation.Forward */ ),
        enabled: _class_private_field_get(this, _canGoForwardInHistory),
        jslogContext: 'linear-memory-inspector.history-forward'
    }), _class_private_method_get(this, _createButton, createButton).call(this, {
        icon: 'chevron-left',
        title: i18nString(UIStrings.previousPage),
        event: new PageNavigationEvent("Backward" /* Navigation.Backward */ ),
        enabled: true,
        jslogContext: 'linear-memory-inspector.previous-page'
    }), _class_private_method_get(this, _createAddressInput, createAddressInput).call(this), _class_private_method_get(this, _createButton, createButton).call(this, {
        icon: 'chevron-right',
        title: i18nString(UIStrings.nextPage),
        event: new PageNavigationEvent("Forward" /* Navigation.Forward */ ),
        enabled: true,
        jslogContext: 'linear-memory-inspector.next-page'
    }), _class_private_method_get(this, _createButton, createButton).call(this, {
        icon: 'refresh',
        title: i18nString(UIStrings.refresh),
        event: new RefreshRequestedEvent(),
        enabled: true,
        jslogContext: 'linear-memory-inspector.refresh'
    }));
    render(result, _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
function createAddressInput() {
    var classMap = {
        'address-input': true,
        invalid: !_class_private_field_get(this, _valid)
    };
    return html(_templateObject2(), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.Directives.classMap(classMap), _class_private_field_get(this, _address), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.textField('linear-memory-inspector.address').track({
        change: true
    }), _class_private_field_get(this, _valid) ? i18nString(UIStrings.enterAddress) : _class_private_field_get(this, _error), _class_private_method_get(this, _onAddressChange, onAddressChange).bind(this, "Submitted" /* Mode.Submitted */ ), _class_private_method_get(this, _onAddressChange, onAddressChange).bind(this, "Edit" /* Mode.Edit */ ));
}
function onAddressChange(mode, event) {
    var addressInput = event.target;
    this.dispatchEvent(new AddressInputChangedEvent(addressInput.value, mode));
}
function createButton(data) {
    return html(_templateObject3(), !data.enabled, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action().track({
        click: true,
        keydown: 'Enter'
    }).context(data.jslogContext), data.event.type, data.title, this.dispatchEvent.bind(this, data.event), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName, data.icon, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName);
}
customElements.define('devtools-linear-memory-inspector-navigator', LinearMemoryNavigator); //# sourceMappingURL=LinearMemoryNavigator.js.map


}),
"./panels/linear_memory_inspector/components/linearMemoryNavigator.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.navigator {\n  min-height: 24px;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  overflow: hidden;\n  align-items: center;\n  background-color: var(--sys-color-cdt-base-container);\n  color: var(--sys-color-on-surface);\n}\n\n.navigator-item {\n  display: flex;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.address-input {\n  text-align: center;\n  outline: none;\n  color: var(--sys-color-on-surface);\n  border: 1px solid var(--sys-color-neutral-outline);\n  background: transparent;\n}\n\n.address-input.invalid {\n  color: var(--sys-color-error);\n}\n\n.navigator-button {\n  display: flex;\n  width: 20px;\n  height: 20px;\n  background: transparent;\n  overflow: hidden;\n  border: none;\n  padding: 0;\n  outline: none;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.navigator-button:disabled devtools-icon {\n  opacity: 50%;\n}\n\n.navigator-button:enabled:hover devtools-icon {\n  color: var(--icon-default-hover);\n}\n\n.navigator-button:enabled:focus devtools-icon {\n  color: var(--icon-default-hover);\n}\n\n/*# sourceURL=linearMemoryNavigator.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);