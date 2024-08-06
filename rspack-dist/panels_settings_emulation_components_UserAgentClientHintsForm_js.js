"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_settings_emulation_components_UserAgentClientHintsForm_js"], {
"./panels/settings/emulation/components/UserAgentClientHintsForm.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ClientHintsChangeEvent: function() { return ClientHintsChangeEvent; },
  ClientHintsSubmitEvent: function() { return ClientHintsSubmitEvent; },
  UserAgentClientHintsForm: function() { return UserAgentClientHintsForm; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils.js */ "./panels/settings/emulation/utils/utils.js");
/* harmony import */var _userAgentClientHintsForm_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userAgentClientHintsForm.css.js */ "./panels/settings/emulation/components/userAgentClientHintsForm.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
        "devtools-user-agent-client-hints-form"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n      <label class="full-row label input-field-label-container">\n        ',
        '\n        <input\n          class="input-field"\n          type="text"\n          @input=',
        "\n          .value=",
        "\n          placeholder=",
        "\n          jslog=",
        "\n          />\n      </label>\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '\n      <span class="full-row label">',
        '</span>\n      <div class="full-row brand-row" aria-label=',
        ' role="group">\n        <input\n          class="input-field half-row"\n          type="text"\n          @input=',
        "\n          .value=",
        "\n          placeholder=",
        "\n          aria-label=",
        "\n          jslog=",
        '\n        />\n        <input\n          class="input-field half-row"\n          type="text"\n          @input=',
        "\n          .value=",
        "\n          placeholder=",
        "\n          aria-label=",
        "\n          jslog=",
        "\n        />\n      </div>\n    "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '\n      <label class="mobile-checkbox-container">\n        <input type="checkbox" @input=',
        " .checked=",
        "\n          jslog=",
        "\n        />\n        ",
        "\n      </label>\n    "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        ""
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        '\n      <span class="full-row label">',
        '</span>\n      <div class="full-row brand-row" aria-label=',
        ' role="group">\n        <input\n          class="input-field ',
        '"\n          type="text"\n          @input=',
        "\n          .value=",
        "\n          placeholder=",
        "\n          jslog=",
        "\n        />\n        ",
        "\n      </div>\n    "
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        '\n        <div class="full-row brand-row" aria-label=',
        ' role="group">\n          <input\n            class="input-field ua-brand-name-input"\n            type="text"\n            @input=',
        "\n            .value=",
        '\n            id="ua-brand-',
        '-input"\n            placeholder=',
        "\n            aria-label=",
        "\n            jslog=",
        '\n          />\n          <input\n            class="input-field"\n            type="text"\n            @input=',
        "\n            .value=",
        "\n            placeholder=",
        "\n            aria-label=",
        "\n            jslog=",
        "\n          />\n          <",
        "\n            .data=",
        "\n            title=",
        '\n            class="delete-icon"\n            tabindex="0"\n            role="button"\n            @click=',
        "\n            @keypress=",
        "\n            aria-label=",
        "\n          >\n          </",
        ">\n        </div>\n      "
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        '\n      <span class="full-row label">',
        "</span>\n      ",
        '\n      <div\n        class="add-container full-row"\n        role="button"\n        tabindex="0"\n        id="add-brand-button"\n        aria-label=',
        "\n        @click=",
        "\n        @keypress=",
        "\n      >\n        <",
        '\n          aria-hidden="true"\n          .data=',
        "\n        >\n        </",
        ">\n        ",
        "\n      </div>\n    "
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        '\n        <div\n          class="full-row brand-row"\n          aria-label=',
        "\n          jslog=",
        '\n          role="group">\n          <input\n            class="input-field fvl-brand-name-input"\n            type="text"\n            @input=',
        "\n            .value=",
        '\n            id="fvl-brand-',
        '-input"\n            placeholder=',
        "\n            aria-label=",
        "\n            jslog=",
        '\n          />\n          <input\n            class="input-field"\n            type="text"\n            @input=',
        "\n            .value=",
        "\n            placeholder=",
        "\n            aria-label=",
        "\n            jslog=",
        "\n          />\n          <",
        "\n            .data=",
        "\n            title=",
        '\n            class="delete-icon"\n            tabindex="0"\n            role="button"\n            @click=',
        "\n            @keypress=",
        "\n            aria-label=",
        "\n          >\n          </",
        ">\n        </div>\n      "
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        '\n      <span class="full-row label">',
        "</span>\n      ",
        '\n      <div\n        class="add-container full-row"\n        role="button"\n        tabindex="0"\n        id="add-fvl-brand-button"\n        aria-label=',
        "\n        @click=",
        "\n        @keypress=",
        "\n      >\n        <",
        '\n          aria-hidden="true"\n          .data=',
        "\n        >\n        </",
        ">\n        ",
        "\n      </div>\n    "
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        "\n      <",
        "\n        .variant=",
        "\n        .type=",
        "\n      >\n        ",
        "\n      </",
        ">\n    "
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = _tagged_template_literal([
        '\n      <section class="root">\n        <div\n          class="tree-title"\n          role="button"\n          @click=',
        '\n          tabindex="0"\n          @keydown=',
        "\n          aria-expanded=",
        '\n          aria-controls="form-container"\n          @disabled=',
        "\n          aria-disabled=",
        "\n          aria-label=",
        "\n          jslog=",
        "\n        >\n          <",
        "\n            class=",
        "\n            .data=",
        "\n          ></",
        ">\n          ",
        "\n          <",
        "\n            .data=",
        "\n            title=",
        "\n            class='info-icon',\n          ></",
        '>\n          <x-link\n           tabindex="0"\n           href="https://web.dev/user-agent-client-hints/"\n           target="_blank"\n           class="link"\n           @keypress=',
        "\n           aria-label=",
        "\n           jslog=",
        "\n          >\n            ",
        '\n          </x-link>\n        </div>\n        <form\n          id="form-container"\n          class="form-container ',
        '"\n          @submit=',
        "\n        >\n          ",
        "\n          ",
        "\n          ",
        "\n          ",
        "\n          ",
        "\n          ",
        "\n          ",
        '\n        </form>\n        <div aria-live="polite" aria-label=',
        "></div>\n      </section>\n    "
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}









var UIStrings = {
    /**
     * @description Title for user agent client hints form
     */ title: 'User agent client hints',
    /**
     * @description Heading for user agent section.
     * Brands here relate to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     */ useragent: 'User agent (Sec-CH-UA)',
    /**
     * @description Heading for full-version-list section.
     */ fullVersionList: 'Full version list (Sec-CH-UA-Full-Version-List)',
    /**
     * @description ARIA label for a form with properties for a single brand in a brand list. The form includes a brand name input field, a version
     * input field and a delete icon. Brand refer to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     */ brandProperties: 'User agent properties',
    /**
     * @description Input field placeholder for brands browser name.
     * Brands here relate to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     */ brandName: 'Brand',
    /**
     * @description Aria label for brands browser name input field.
     * Brands here relate to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     * @example {index} PH1
     */ brandNameAriaLabel: 'Brand {PH1}',
    /**
     * @description Input field placeholder for significant brand version.
     * Brands here relate to different browser brands/vendors like Google Chrome (v89), Microsoft Edge (v92) etc.
     */ significantBrandVersionPlaceholder: 'Significant version (e.g. 87)',
    /**
     * @description Input field placeholder for brand version.
     * Brands here relate to different browser brands/vendors like Google Chrome (v89), Microsoft Edge (v92) etc.
     */ brandVersionPlaceholder: 'Version (e.g. 87.0.4280.88)',
    /**
     * @description Aria label for brands browser version input field.
     * Brands here relate to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     * @example {index} PH1
     */ brandVersionAriaLabel: 'Version {PH1}',
    /**
     * @description Button title for adding another brand in brands section to client hints.
     * Brands here relate to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     */ addBrand: 'Add Brand',
    /**
     * @description Tooltip and aria label for delete icon for deleting browser brand from brands user agent section.
     * Brands here relate to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     */ brandUserAgentDelete: 'Delete brand from user agent section',
    /**
     * @description Tooltip and aria label for delete icon for deleting user agent from brands full version list.
     * Brands here relate to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     */ brandFullVersionListDelete: 'Delete brand from full version list',
    /**
     * @description Label for full browser version input field.
     */ fullBrowserVersion: 'Full browser version (Sec-CH-UA-Full-Browser-Version)',
    /**
     * @description Placeholder for full browser version input field.
     */ fullBrowserVersionPlaceholder: 'Full browser version (e.g. 87.0.4280.88)',
    /**
     * @description Label for platform heading section, platform relates to OS like Android, Windows etc.
     */ platformLabel: 'Platform (Sec-CH-UA-Platform / Sec-CH-UA-Platform-Version)',
    /**
     * @description Platform row, including platform name and platform version input field.
     */ platformProperties: 'Platform properties',
    /**
     * @description Version for platform input field, platform relates to OS like Android, Windows etc.
     */ platformVersion: 'Platform version',
    /**
     * @description Placeholder for platform name input field, platform relates to OS like Android, Windows etc.
     */ platformPlaceholder: 'Platform (e.g. Android)',
    /**
     * @description Label for architecture (Eg: x86, x64, arm) input field.
     */ architecture: 'Architecture (Sec-CH-UA-Arch)',
    /**
     * @description Placeholder for architecture (Eg: x86, x64, arm) input field.
     */ architecturePlaceholder: 'Architecture (e.g. x86)',
    /**
     * @description Device model row, including device model input field and mobile checkbox
     */ deviceProperties: 'Device properties',
    /**
     * @description Label for Device Model input field.
     */ deviceModel: 'Device model (Sec-CH-UA-Model)',
    /**
     * @description Label for Mobile phone checkbox.
     */ mobileCheckboxLabel: 'Mobile',
    /**
     * @description Label for button to submit client hints form in DevTools.
     */ update: 'Update',
    /**
     *@description Field Error message in the Device settings pane that shows that the entered value has characters that can't be represented in the corresponding User Agent Client Hints
     */ notRepresentable: 'Not representable as structured headers string.',
    /**
     * @description Hover text for info icon which explains user agent client hints.
     */ userAgentClientHintsInfo: 'User agent client hints are an alternative to the user agent string that identify the browser and the device in a more structured way with better privacy accounting.',
    /**
     * @description Success message when brand row is successfully added in client hints form.
     * Brands here relate to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     */ addedBrand: 'Added brand row',
    /**
     * @description Success message when brand row is successfully deleted in client hints form.
     * Brands here relate to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     */ deletedBrand: 'Deleted brand row',
    /**
     *@description Text that is usually a hyperlink to more documentation
     */ learnMore: 'Learn more'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/settings/emulation/components/UserAgentClientHintsForm.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var ClientHintsChangeEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(ClientHintsChangeEvent, Event1);
    var _super = _create_super(ClientHintsChangeEvent);
    function ClientHintsChangeEvent() {
        _class_call_check(this, ClientHintsChangeEvent);
        return _super.call(this, ClientHintsChangeEvent.eventName);
    }
    return ClientHintsChangeEvent;
}(_wrap_native_super(Event));
_define_property(ClientHintsChangeEvent, "eventName", 'clienthintschange');
var ClientHintsSubmitEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(ClientHintsSubmitEvent, Event1);
    var _super = _create_super(ClientHintsSubmitEvent);
    function ClientHintsSubmitEvent(value) {
        _class_call_check(this, ClientHintsSubmitEvent);
        var _this;
        _this = _super.call(this, ClientHintsSubmitEvent.eventName);
        _define_property(_assert_this_initialized(_this), "detail", void 0);
        _this.detail = {
            value: value
        };
        return _this;
    }
    return ClientHintsSubmitEvent;
}(_wrap_native_super(Event));
_define_property(ClientHintsSubmitEvent, "eventName", 'clienthintssubmit');
var DEFAULT_METADATA = {
    brands: [
        {
            brand: '',
            version: ''
        }
    ],
    fullVersionList: [
        {
            brand: '',
            version: ''
        }
    ],
    fullVersion: '',
    platform: '',
    platformVersion: '',
    architecture: '',
    model: '',
    mobile: false
};
var _shadow = /*#__PURE__*/ new WeakMap(), _isFormOpened = /*#__PURE__*/ new WeakMap(), _isFormDisabled = /*#__PURE__*/ new WeakMap(), _metaData = /*#__PURE__*/ new WeakMap(), _showMobileCheckbox = /*#__PURE__*/ new WeakMap(), _showSubmitButton = /*#__PURE__*/ new WeakMap(), _useragentModifiedAriaMessage = /*#__PURE__*/ new WeakMap(), _handleTreeExpand = /*#__PURE__*/ new WeakMap(), _handleTreeClick = /*#__PURE__*/ new WeakMap(), _handleUseragentInputChange = /*#__PURE__*/ new WeakMap(), _handleFullVersionListInputChange = /*#__PURE__*/ new WeakMap(), _handleUseragentDelete = /*#__PURE__*/ new WeakMap(), _handleFullVersionListDelete = /*#__PURE__*/ new WeakMap(), _handleAddUseragentBrandClick = /*#__PURE__*/ new WeakMap(), _handleAddUseragentBrandKeyPress = /*#__PURE__*/ new WeakMap(), _handleAddFullVersionListBrandClick = /*#__PURE__*/ new WeakMap(), _handleAddFullVersionListBrandKeyPress = /*#__PURE__*/ new WeakMap(), _handleInputChange = /*#__PURE__*/ new WeakMap(), _handleLinkPress = /*#__PURE__*/ new WeakMap(), _handleSubmit = /*#__PURE__*/ new WeakMap(), _renderInputWithLabel = /*#__PURE__*/ new WeakSet(), _renderPlatformSection = /*#__PURE__*/ new WeakSet(), _renderDeviceModelSection = /*#__PURE__*/ new WeakSet(), _renderUseragent = /*#__PURE__*/ new WeakSet(), _renderFullVersionList = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet();
/**
 * Component for user agent client hints form, it is used in device settings panel
 * and network conditions panel. It is customizable through showMobileCheckbox and showSubmitButton.
 */ // eslint-disable-next-line rulesdir/custom_element_definitions_location
var UserAgentClientHintsForm = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(UserAgentClientHintsForm, HTMLElement1);
    var _super = _create_super(UserAgentClientHintsForm);
    function UserAgentClientHintsForm() {
        _class_call_check(this, UserAgentClientHintsForm);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _renderInputWithLabel);
        _class_private_method_init(_assert_this_initialized(_this), _renderPlatformSection);
        _class_private_method_init(_assert_this_initialized(_this), _renderDeviceModelSection);
        _class_private_method_init(_assert_this_initialized(_this), _renderUseragent);
        _class_private_method_init(_assert_this_initialized(_this), _renderFullVersionList);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _isFormOpened, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _isFormDisabled, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _metaData, {
            writable: true,
            value: DEFAULT_METADATA
        });
        _class_private_field_init(_assert_this_initialized(_this), _showMobileCheckbox, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _showSubmitButton, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _useragentModifiedAriaMessage, {
            writable: true,
            value: ''
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleTreeExpand, {
            writable: true,
            value: function(event) {
                if (event.code === 'Space' || event.code === 'Enter' || event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
                    event.stopPropagation();
                    _class_private_field_get(_this, _handleTreeClick).call(_assert_this_initialized(_this), event.code);
                }
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleTreeClick, {
            writable: true,
            value: function(key) {
                if (_class_private_field_get(_assert_this_initialized(_this), _isFormDisabled)) {
                    return;
                }
                if (key === 'ArrowLeft' && !_class_private_field_get(_assert_this_initialized(_this), _isFormOpened) || key === 'ArrowRight' && _class_private_field_get(_assert_this_initialized(_this), _isFormOpened)) {
                    return;
                }
                _class_private_field_set(_assert_this_initialized(_this), _isFormOpened, !_class_private_field_get(_assert_this_initialized(_this), _isFormOpened));
                _class_private_method_get(_this, _render, render).call(_assert_this_initialized(_this));
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleUseragentInputChange, {
            writable: true,
            value: function(value, index, brandInputType) {
                var _class_private_field_get_brands;
                var updatedUseragent = (_class_private_field_get_brands = _class_private_field_get(_this, _metaData).brands) === null || _class_private_field_get_brands === void 0 ? void 0 : _class_private_field_get_brands.map(function(browserBrand, brandIndex) {
                    if (brandIndex === index) {
                        var brand = browserBrand.brand, version = browserBrand.version;
                        if (brandInputType === 'brandName') {
                            return {
                                brand: value,
                                version: version
                            };
                        }
                        return {
                            brand: brand,
                            version: value
                        };
                    }
                    return browserBrand;
                });
                _class_private_field_set(_assert_this_initialized(_this), _metaData, _object_spread_props(_object_spread({}, _class_private_field_get(_assert_this_initialized(_this), _metaData)), {
                    brands: updatedUseragent
                }));
                _this.dispatchEvent(new ClientHintsChangeEvent());
                _class_private_method_get(_this, _render, render).call(_assert_this_initialized(_this));
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleFullVersionListInputChange, {
            writable: true,
            value: function(value, index, brandInputType) {
                var _class_private_field_get_fullVersionList;
                var fullVersionList = (_class_private_field_get_fullVersionList = _class_private_field_get(_this, _metaData).fullVersionList) === null || _class_private_field_get_fullVersionList === void 0 ? void 0 : _class_private_field_get_fullVersionList.map(function(browserBrand, brandIndex) {
                    if (brandIndex === index) {
                        var brand = browserBrand.brand, version = browserBrand.version;
                        if (brandInputType === 'brandName') {
                            return {
                                brand: value,
                                version: version
                            };
                        }
                        return {
                            brand: brand,
                            version: value
                        };
                    }
                    return browserBrand;
                });
                _class_private_field_set(_assert_this_initialized(_this), _metaData, _object_spread_props(_object_spread({}, _class_private_field_get(_assert_this_initialized(_this), _metaData)), {
                    fullVersionList: fullVersionList
                }));
                _this.dispatchEvent(new ClientHintsChangeEvent());
                _class_private_method_get(_this, _render, render).call(_assert_this_initialized(_this));
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleUseragentDelete, {
            writable: true,
            value: function(index) {
                var _this_shadowRoot;
                var _$_class_private_field_get = _class_private_field_get(_assert_this_initialized(_this), _metaData), _class_private_field_get_brands = _$_class_private_field_get.brands, brands = _class_private_field_get_brands === void 0 ? [] : _class_private_field_get_brands;
                brands.splice(index, 1);
                _class_private_field_set(_assert_this_initialized(_this), _metaData, _object_spread_props(_object_spread({}, _class_private_field_get(_assert_this_initialized(_this), _metaData)), {
                    brands: brands
                }));
                _this.dispatchEvent(new ClientHintsChangeEvent());
                _class_private_field_set(_assert_this_initialized(_this), _useragentModifiedAriaMessage, i18nString(UIStrings.deletedBrand));
                _class_private_method_get(_this, _render, render).call(_assert_this_initialized(_this));
                // after deleting a brand row, focus on next Brand input if available,
                // otherwise focus on the "Add Brand" button
                var nextFocusElement = (_this_shadowRoot = _this.shadowRoot) === null || _this_shadowRoot === void 0 ? void 0 : _this_shadowRoot.getElementById("ua-brand-".concat(index + 1, "-input"));
                if (!nextFocusElement) {
                    var _this_shadowRoot1;
                    nextFocusElement = (_this_shadowRoot1 = _this.shadowRoot) === null || _this_shadowRoot1 === void 0 ? void 0 : _this_shadowRoot1.getElementById('add-brand-button');
                }
                nextFocusElement === null || nextFocusElement === void 0 ? void 0 : nextFocusElement.focus();
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleFullVersionListDelete, {
            writable: true,
            value: function(index) {
                var _this_shadowRoot;
                var _$_class_private_field_get = _class_private_field_get(_assert_this_initialized(_this), _metaData), _class_private_field_get_fullVersionList = _$_class_private_field_get.fullVersionList, fullVersionList = _class_private_field_get_fullVersionList === void 0 ? [] : _class_private_field_get_fullVersionList;
                fullVersionList.splice(index, 1);
                _class_private_field_set(_assert_this_initialized(_this), _metaData, _object_spread_props(_object_spread({}, _class_private_field_get(_assert_this_initialized(_this), _metaData)), {
                    fullVersionList: fullVersionList
                }));
                _this.dispatchEvent(new ClientHintsChangeEvent());
                _class_private_field_set(_assert_this_initialized(_this), _useragentModifiedAriaMessage, i18nString(UIStrings.deletedBrand));
                _class_private_method_get(_this, _render, render).call(_assert_this_initialized(_this));
                // after deleting a brand row, focus on next Brand input if available,
                // otherwise focus on the "Add Brand" button
                var nextFocusElement = (_this_shadowRoot = _this.shadowRoot) === null || _this_shadowRoot === void 0 ? void 0 : _this_shadowRoot.getElementById("fvl-brand-".concat(index + 1, "-input"));
                if (!nextFocusElement) {
                    var _this_shadowRoot1;
                    nextFocusElement = (_this_shadowRoot1 = _this.shadowRoot) === null || _this_shadowRoot1 === void 0 ? void 0 : _this_shadowRoot1.getElementById('add-fvl-brand-button');
                }
                nextFocusElement === null || nextFocusElement === void 0 ? void 0 : nextFocusElement.focus();
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleAddUseragentBrandClick, {
            writable: true,
            value: function() {
                var _this_shadowRoot;
                var brands = _class_private_field_get(_assert_this_initialized(_this), _metaData).brands;
                _class_private_field_set(_assert_this_initialized(_this), _metaData, _object_spread_props(_object_spread({}, _class_private_field_get(_assert_this_initialized(_this), _metaData)), {
                    brands: _to_consumable_array(Array.isArray(brands) ? brands : []).concat([
                        {
                            brand: '',
                            version: ''
                        }
                    ])
                }));
                _this.dispatchEvent(new ClientHintsChangeEvent());
                _class_private_field_set(_assert_this_initialized(_this), _useragentModifiedAriaMessage, i18nString(UIStrings.addedBrand));
                _class_private_method_get(_this, _render, render).call(_assert_this_initialized(_this));
                var brandInputElements = (_this_shadowRoot = _this.shadowRoot) === null || _this_shadowRoot === void 0 ? void 0 : _this_shadowRoot.querySelectorAll('.ua-brand-name-input');
                if (brandInputElements) {
                    var lastBrandInputElement = Array.from(brandInputElements).pop();
                    if (lastBrandInputElement) {
                        lastBrandInputElement.focus();
                    }
                }
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleAddUseragentBrandKeyPress, {
            writable: true,
            value: function(event) {
                if (event.code === 'Space' || event.code === 'Enter') {
                    event.preventDefault();
                    _class_private_field_get(_this, _handleAddUseragentBrandClick).call(_assert_this_initialized(_this));
                }
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleAddFullVersionListBrandClick, {
            writable: true,
            value: function() {
                var _this_shadowRoot;
                var fullVersionList = _class_private_field_get(_assert_this_initialized(_this), _metaData).fullVersionList;
                _class_private_field_set(_assert_this_initialized(_this), _metaData, _object_spread_props(_object_spread({}, _class_private_field_get(_assert_this_initialized(_this), _metaData)), {
                    fullVersionList: _to_consumable_array(Array.isArray(fullVersionList) ? fullVersionList : []).concat([
                        {
                            brand: '',
                            version: ''
                        }
                    ])
                }));
                _this.dispatchEvent(new ClientHintsChangeEvent());
                _class_private_field_set(_assert_this_initialized(_this), _useragentModifiedAriaMessage, i18nString(UIStrings.addedBrand));
                _class_private_method_get(_this, _render, render).call(_assert_this_initialized(_this));
                var brandInputElements = (_this_shadowRoot = _this.shadowRoot) === null || _this_shadowRoot === void 0 ? void 0 : _this_shadowRoot.querySelectorAll('.fvl-brand-name-input');
                if (brandInputElements) {
                    var lastBrandInputElement = Array.from(brandInputElements).pop();
                    if (lastBrandInputElement) {
                        lastBrandInputElement.focus();
                    }
                }
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleAddFullVersionListBrandKeyPress, {
            writable: true,
            value: function(event) {
                if (event.code === 'Space' || event.code === 'Enter') {
                    event.preventDefault();
                    _class_private_field_get(_this, _handleAddFullVersionListBrandClick).call(_assert_this_initialized(_this));
                }
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleInputChange, {
            writable: true,
            value: function(stateKey, value) {
                if (stateKey in _class_private_field_get(_assert_this_initialized(_this), _metaData)) {
                    _class_private_field_set(_assert_this_initialized(_this), _metaData, _object_spread_props(_object_spread({}, _class_private_field_get(_assert_this_initialized(_this), _metaData)), _define_property({}, stateKey, value)));
                    _class_private_method_get(_this, _render, render).call(_assert_this_initialized(_this));
                }
                _this.dispatchEvent(new ClientHintsChangeEvent());
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleLinkPress, {
            writable: true,
            value: function(event) {
                if (event.code === 'Space' || event.code === 'Enter') {
                    event.preventDefault();
                    event.target.click();
                }
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleSubmit, {
            writable: true,
            value: function(event) {
                event.preventDefault();
                if (_class_private_field_get(_assert_this_initialized(_this), _showSubmitButton)) {
                    _this.dispatchEvent(new ClientHintsSubmitEvent(_class_private_field_get(_assert_this_initialized(_this), _metaData)));
                    _class_private_method_get(_this, _render, render).call(_assert_this_initialized(_this));
                }
            }
        });
        _define_property(_assert_this_initialized(_this), "validate", function() {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = Object.entries(_class_private_field_get(_assert_this_initialized(_this), _metaData))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _step_value = _sliced_to_array(_step.value, 2), metaDataKey = _step_value[0], metaDataValue = _step_value[1];
                    if (metaDataKey === 'brands' || metaDataKey === 'fullVersionList') {
                        var _class_private_field_get_brands;
                        // for sturctured fields, check each individual brand/version
                        var isBrandValid = (_class_private_field_get_brands = _class_private_field_get(_this, _metaData).brands) === null || _class_private_field_get_brands === void 0 ? void 0 : _class_private_field_get_brands.every(function(param) {
                            var brand = param.brand, version = param.version;
                            var brandNameResult = _utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.UserAgentMetadata.validateAsStructuredHeadersString(brand, i18nString(UIStrings.notRepresentable));
                            var brandVersionResult = _utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.UserAgentMetadata.validateAsStructuredHeadersString(version, i18nString(UIStrings.notRepresentable));
                            return brandNameResult.valid && brandVersionResult.valid;
                        });
                        if (!isBrandValid) {
                            return {
                                valid: false,
                                errorMessage: i18nString(UIStrings.notRepresentable)
                            };
                        }
                    } else {
                        // otherwise, validate the value as a string
                        var metaDataError = _utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.UserAgentMetadata.validateAsStructuredHeadersString(metaDataValue, i18nString(UIStrings.notRepresentable));
                        if (!metaDataError.valid) {
                            return metaDataError;
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return {
                valid: true
            };
        });
        return _this;
    }
    _create_class(UserAgentClientHintsForm, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_4__.checkboxStyles,
                    _userAgentClientHintsForm_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]
                ];
            }
        },
        {
            key: "value",
            get: function get() {
                return {
                    metaData: _class_private_field_get(this, _metaData)
                };
            },
            set: function set(data) {
                var _data_metaData = data.metaData, metaData = _data_metaData === void 0 ? DEFAULT_METADATA : _data_metaData, _data_showMobileCheckbox = data.showMobileCheckbox, showMobileCheckbox = _data_showMobileCheckbox === void 0 ? false : _data_showMobileCheckbox, _data_showSubmitButton = data.showSubmitButton, showSubmitButton = _data_showSubmitButton === void 0 ? false : _data_showSubmitButton;
                _class_private_field_set(this, _metaData, _object_spread({}, _class_private_field_get(this, _metaData), metaData));
                _class_private_field_set(this, _showMobileCheckbox, showMobileCheckbox);
                _class_private_field_set(this, _showSubmitButton, showSubmitButton);
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "disabled",
            get: function get() {
                return _class_private_field_get(this, _isFormDisabled);
            },
            set: function set(disableForm) {
                _class_private_field_set(this, _isFormDisabled, disableForm);
                _class_private_field_set(this, _isFormOpened, false);
                _class_private_method_get(this, _render, render).call(this);
            }
        }
    ]);
    return UserAgentClientHintsForm;
}(_wrap_native_super(HTMLElement));
_define_property(UserAgentClientHintsForm, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.literal(_templateObject()));
function renderInputWithLabel(label, placeholder, value, stateKey) {
    var _this = this;
    var handleInputChange = function(event) {
        var _$value = event.target.value;
        _class_private_field_get(_this, _handleInputChange).call(_this, stateKey, _$value);
    };
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject1(), label, handleInputChange, value, placeholder, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField().track({
        change: true
    }).context(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(stateKey)));
}
function renderPlatformSection() {
    var _this = this;
    var _$_class_private_field_get = _class_private_field_get(this, _metaData), platform = _$_class_private_field_get.platform, platformVersion = _$_class_private_field_get.platformVersion;
    var handlePlatformNameChange = function(event) {
        var value = event.target.value;
        _class_private_field_get(_this, _handleInputChange).call(_this, 'platform', value);
    };
    var handlePlatformVersionChange = function(event) {
        var value = event.target.value;
        _class_private_field_get(_this, _handleInputChange).call(_this, 'platformVersion', value);
    };
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject2(), i18nString(UIStrings.platformLabel), i18nString(UIStrings.platformProperties), handlePlatformNameChange, platform, i18nString(UIStrings.platformPlaceholder), i18nString(UIStrings.platformLabel), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField('platform').track({
        change: true
    }), handlePlatformVersionChange, platformVersion, i18nString(UIStrings.platformVersion), i18nString(UIStrings.platformVersion), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField('platform-version').track({
        change: true
    }));
}
function renderDeviceModelSection() {
    var _this = this;
    var _$_class_private_field_get = _class_private_field_get(this, _metaData), model = _$_class_private_field_get.model, mobile = _$_class_private_field_get.mobile;
    var handleDeviceModelChange = function(event) {
        var value = event.target.value;
        _class_private_field_get(_this, _handleInputChange).call(_this, 'model', value);
    };
    var handleMobileChange = function(event) {
        var value = event.target.checked;
        _class_private_field_get(_this, _handleInputChange).call(_this, 'mobile', value);
    };
    var mobileCheckboxInput = _class_private_field_get(this, _showMobileCheckbox) ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject3(), handleMobileChange, mobile, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toggle('mobile').track({
        click: true
    }), i18nString(UIStrings.mobileCheckboxLabel)) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject4());
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject5(), i18nString(UIStrings.deviceModel), i18nString(UIStrings.deviceProperties), _class_private_field_get(this, _showMobileCheckbox) ? 'device-model-input' : 'full-row', handleDeviceModelChange, model, i18nString(UIStrings.deviceModel), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField('model').track({
        change: true
    }), mobileCheckboxInput);
}
function renderUseragent() {
    var _this = this;
    var _$_class_private_field_get = _class_private_field_get(this, _metaData), _class_private_field_get_brands = _$_class_private_field_get.brands, brands = _class_private_field_get_brands === void 0 ? [
        {
            brand: '',
            version: ''
        }
    ] : _class_private_field_get_brands;
    var brandElements = brands.map(function(brandRow, index) {
        var brand = brandRow.brand, version = brandRow.version;
        var handleDeleteClick = function() {
            _class_private_field_get(_this, _handleUseragentDelete).call(_this, index);
        };
        var handleKeyPress = function(event) {
            if (event.code === 'Space' || event.code === 'Enter') {
                event.preventDefault();
                handleDeleteClick();
            }
        };
        var handleBrandChange = function(event) {
            var value = event.target.value;
            _class_private_field_get(_this, _handleUseragentInputChange).call(_this, value, index, 'brandName');
        };
        var handleVersionChange = function(event) {
            var value = event.target.value;
            _class_private_field_get(_this, _handleUseragentInputChange).call(_this, value, index, 'brandVersion');
        };
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject6(), i18nString(UIStrings.brandProperties), handleBrandChange, brand, index + 1, i18nString(UIStrings.brandName), i18nString(UIStrings.brandNameAriaLabel, {
            PH1: index + 1
        }), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField('brand-name').track({
            change: true
        }), handleVersionChange, version, i18nString(UIStrings.significantBrandVersionPlaceholder), i18nString(UIStrings.brandVersionAriaLabel, {
            PH1: index + 1
        }), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField('brand-version').track({
            change: true
        }), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, {
            color: 'var(--icon-default)',
            iconName: 'bin',
            width: '16px',
            height: '16px'
        }, i18nString(UIStrings.brandUserAgentDelete), handleDeleteClick, handleKeyPress, i18nString(UIStrings.brandUserAgentDelete), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName);
    });
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject7(), i18nString(UIStrings.useragent), brandElements, i18nString(UIStrings.addBrand), _class_private_field_get(this, _handleAddUseragentBrandClick), _class_private_field_get(this, _handleAddUseragentBrandKeyPress), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, {
        color: 'var(--icon-default)',
        iconName: 'plus',
        width: '16px'
    }, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, i18nString(UIStrings.addBrand));
}
function renderFullVersionList() {
    var _this = this;
    var _$_class_private_field_get = _class_private_field_get(this, _metaData), _class_private_field_get_fullVersionList = _$_class_private_field_get.fullVersionList, fullVersionList = _class_private_field_get_fullVersionList === void 0 ? [
        {
            brand: '',
            version: ''
        }
    ] : _class_private_field_get_fullVersionList;
    var elements = fullVersionList.map(function(brandRow, index) {
        var brand = brandRow.brand, version = brandRow.version;
        var handleDeleteClick = function() {
            _class_private_field_get(_this, _handleFullVersionListDelete).call(_this, index);
        };
        var handleKeyPress = function(event) {
            if (event.code === 'Space' || event.code === 'Enter') {
                event.preventDefault();
                handleDeleteClick();
            }
        };
        var handleBrandChange = function(event) {
            var value = event.target.value;
            _class_private_field_get(_this, _handleFullVersionListInputChange).call(_this, value, index, 'brandName');
        };
        var handleVersionChange = function(event) {
            var value = event.target.value;
            _class_private_field_get(_this, _handleFullVersionListInputChange).call(_this, value, index, 'brandVersion');
        };
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject8(), i18nString(UIStrings.brandProperties), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.section('full-version'), handleBrandChange, brand, index + 1, i18nString(UIStrings.brandName), i18nString(UIStrings.brandNameAriaLabel, {
            PH1: index + 1
        }), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField('brand-name').track({
            change: true
        }), handleVersionChange, version, i18nString(UIStrings.brandVersionPlaceholder), i18nString(UIStrings.brandVersionAriaLabel, {
            PH1: index + 1
        }), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField('brand-version').track({
            change: true
        }), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, {
            color: 'var(--icon-default)',
            iconName: 'bin',
            width: '16px',
            height: '16px'
        }, i18nString(UIStrings.brandFullVersionListDelete), handleDeleteClick, handleKeyPress, i18nString(UIStrings.brandFullVersionListDelete), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName);
    });
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject9(), i18nString(UIStrings.fullVersionList), elements, i18nString(UIStrings.addBrand), _class_private_field_get(this, _handleAddFullVersionListBrandClick), _class_private_field_get(this, _handleAddFullVersionListBrandKeyPress), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, {
        color: 'var(--icon-default)',
        iconName: 'plus',
        width: '16px'
    }, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, i18nString(UIStrings.addBrand));
}
function render() {
    var _$_class_private_field_get = _class_private_field_get(this, _metaData), fullVersion = _$_class_private_field_get.fullVersion, architecture = _$_class_private_field_get.architecture;
    var useragentSection = _class_private_method_get(this, _renderUseragent, renderUseragent).call(this);
    var fullVersionListSection = _class_private_method_get(this, _renderFullVersionList, renderFullVersionList).call(this);
    var fullBrowserInput = _class_private_method_get(this, _renderInputWithLabel, renderInputWithLabel).call(this, i18nString(UIStrings.fullBrowserVersion), i18nString(UIStrings.fullBrowserVersionPlaceholder), fullVersion || '', 'fullVersion');
    var platformSection = _class_private_method_get(this, _renderPlatformSection, renderPlatformSection).call(this);
    var architectureInput = _class_private_method_get(this, _renderInputWithLabel, renderInputWithLabel).call(this, i18nString(UIStrings.architecture), i18nString(UIStrings.architecturePlaceholder), architecture, 'architecture');
    var deviceModelSection = _class_private_method_get(this, _renderDeviceModelSection, renderDeviceModelSection).call(this);
    // clang-format off
    var submitButton = _class_private_field_get(this, _showSubmitButton) ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject10(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, "outlined" /* Buttons.Button.Variant.OUTLINED */ , 'submit', i18nString(UIStrings.update), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.nothing;
    // clang-format on
    // clang-format off
    var output = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject11(), _class_private_field_get(this, _handleTreeClick), _class_private_field_get(this, _handleTreeExpand), _class_private_field_get(this, _isFormOpened), _class_private_field_get(this, _isFormDisabled), _class_private_field_get(this, _isFormDisabled), i18nString(UIStrings.title), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toggleSubpane().track({
        click: true
    }), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, _class_private_field_get(this, _isFormOpened) ? 'rotate-icon' : '', {
        color: 'var(--icon-default)',
        iconName: 'triangle-right',
        width: '14px'
    }, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, i18nString(UIStrings.title), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, {
        color: 'var(--icon-default)',
        iconName: 'info',
        width: '16px'
    }, i18nString(UIStrings.userAgentClientHintsInfo), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, _class_private_field_get(this, _handleLinkPress), i18nString(UIStrings.userAgentClientHintsInfo), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.link('learn-more').track({
        click: true
    }), i18nString(UIStrings.learnMore), _class_private_field_get(this, _isFormOpened) ? '' : 'hide-container', _class_private_field_get(this, _handleSubmit), useragentSection, fullVersionListSection, fullBrowserInput, platformSection, architectureInput, deviceModelSection, submitButton, _class_private_field_get(this, _useragentModifiedAriaMessage));
    // clang-format on
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.render(output, _class_private_field_get(this, _shadow), {
        host: this
    });
}
customElements.define('devtools-user-agent-client-hints-form', UserAgentClientHintsForm); //# sourceMappingURL=UserAgentClientHintsForm.js.map


}),
"./panels/settings/emulation/components/userAgentClientHintsForm.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.root {\n  color: var(--sys-color-on-surface);\n  width: 100%;\n}\n\n.tree-title {\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n}\n\n.rotate-icon {\n  transform: rotate(90deg);\n}\n\n.form-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr auto;\n  align-items: center;\n  column-gap: 10px;\n  row-gap: 8px;\n  padding: 0 10px;\n}\n\n.full-row {\n  grid-column: 1 / 5;\n}\n\n.half-row {\n  grid-column: span 2;\n}\n\n.mobile-checkbox-container {\n  display: flex;\n}\n\n.device-model-input {\n  grid-column: 1 / 4;\n}\n\n.input-field {\n  color: var(--sys-color-on-surface);\n  padding: 3px 6px;\n  border-radius: 2px;\n  border: 1px solid var(--sys-color-neutral-outline);\n  background-color: var(--sys-color-cdt-base-container);\n  font-size: inherit;\n  height: 18px;\n}\n\n.input-field:focus {\n  border: 1px solid var(--sys-color-state-focus-ring);\n  outline-width: 0;\n}\n\n.add-container {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.add-icon {\n  margin-right: 5px;\n}\n\n.brand-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: space-between;\n}\n\n.brand-row > input {\n  width: 100%;\n}\n\n.info-icon {\n  margin-left: 5px;\n  margin-right: 1px;\n}\n\n.link,\n.devtools-link {\n  color: var(--sys-color-primary);\n  text-decoration: underline;\n  cursor: pointer;\n  outline-offset: 2px;\n  font-weight: 400;\n}\n\ndevtools-icon + .link {\n  margin-inline-start: 2px;\n}\n\n.hide-container {\n  display: none;\n}\n\n.input-field-label-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n@media (forced-colors: active) {\n  .input-field {\n    border: 1px solid;\n  }\n\n  .tree-title[aria-disabled="true"] {\n    color: GrayText;\n  }\n}\n\n/*# sourceURL=userAgentClientHintsForm.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/settings/emulation/utils/UserAgentMetadata.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  parseBrandsList: function() { return parseBrandsList; },
  serializeBrandsList: function() { return serializeBrandsList; },
  validateAsStructuredHeadersString: function() { return validateAsStructuredHeadersString; }
});
/* harmony import */var _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StructuredHeaders.js */ "./panels/settings/emulation/utils/StructuredHeaders.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Helper functions for working with UserAgentMetadata protocol objects, in
// particular their plain string representation.

/* Returned string is for error, either parseErrorString or structErrorString.
 */ function parseBrandsList(stringForm, parseErrorString, structErrorString) {
    var brandList = [];
    var parseResult = (0,_StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.parseList)(stringForm);
    if (parseResult.kind === 0 /* ResultKind.ERROR */ ) {
        return parseErrorString;
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = parseResult.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var listItem = _step.value;
            if (listItem.kind !== 4 /* ResultKind.ITEM */ ) {
                return structErrorString;
            }
            var bareItem = listItem.value;
            if (bareItem.kind !== 7 /* ResultKind.STRING */ ) {
                return structErrorString;
            }
            if (listItem.parameters.items.length !== 1) {
                return structErrorString;
            }
            var param = listItem.parameters.items[0];
            if (param.name.value !== 'v') {
                return structErrorString;
            }
            var paramValue = param.value;
            if (paramValue.kind !== 7 /* ResultKind.STRING */ ) {
                return structErrorString;
            }
            brandList.push({
                brand: bareItem.value,
                version: paramValue.value
            });
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return brandList;
}
function serializeBrandsList(brands) {
    var shList = {
        kind: 11 /* ResultKind.LIST */ ,
        items: []
    };
    var vParamName = {
        kind: 1 /* ResultKind.PARAM_NAME */ ,
        value: 'v'
    };
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = brands[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var brand = _step.value;
            var nameString = {
                kind: 7 /* ResultKind.STRING */ ,
                value: brand.brand
            };
            var verString = {
                kind: 7 /* ResultKind.STRING */ ,
                value: brand.version
            };
            var verParams = {
                kind: 3 /* ResultKind.PARAMETERS */ ,
                items: [
                    {
                        kind: 2 /* ResultKind.PARAMETER */ ,
                        name: vParamName,
                        value: verString
                    }
                ]
            };
            var shItem = {
                kind: 4 /* ResultKind.ITEM */ ,
                value: nameString,
                parameters: verParams
            };
            shList.items.push(shItem);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var serializeResult = (0,_StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.serializeList)(shList);
    return serializeResult.kind === 0 /* ResultKind.ERROR */  ? '' : serializeResult.value;
}
/*
 * This checks whether the value provided is representable as a structured headers string,
 * which is the validity requirement for the fields in UserAgentMetadata that are not the brand list
 * or mobile bool.
 *
 * errorMessage will be passed through on failure.
 */ function validateAsStructuredHeadersString(value, errorString) {
    var parsedResult = (0,_StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.serializeItem)({
        kind: 4 /* ResultKind.ITEM */ ,
        value: {
            kind: 7 /* ResultKind.STRING */ ,
            value: value
        },
        parameters: {
            kind: 3 /* ResultKind.PARAMETERS */ ,
            items: []
        }
    });
    if (parsedResult.kind === 0 /* ResultKind.ERROR */ ) {
        return {
            valid: false,
            errorMessage: errorString
        };
    }
    return {
        valid: true,
        errorMessage: undefined
    };
} //# sourceMappingURL=UserAgentMetadata.js.map


}),
"./panels/settings/emulation/utils/utils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  StructuredHeaders: function() { return /* reexport module object */ _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__; },
  UserAgentMetadata: function() { return /* reexport module object */ _UserAgentMetadata_js__WEBPACK_IMPORTED_MODULE_1__; }
});
/* harmony import */var _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StructuredHeaders.js */ "./panels/settings/emulation/utils/StructuredHeaders.js");
/* harmony import */var _UserAgentMetadata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAgentMetadata.js */ "./panels/settings/emulation/utils/UserAgentMetadata.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


 //# sourceMappingURL=utils.js.map


}),

}]);