"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_components_ProtocolHandlersView_js"], {
"./panels/application/components/ProtocolHandlersView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ProtocolHandlersView: function() { return ProtocolHandlersView; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */var _ui_legacy_inspectorCommon_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/legacy/inspectorCommon.css.js */ "./ui/legacy/inspectorCommon.css.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _protocolHandlersView_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./protocolHandlersView.css.js */ "./panels/application/components/protocolHandlersView.css.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
        "devtools-protocol-handlers-view"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n    <div class="protocol-handlers-row status">\n            <',
        ' class="inline-icon"\n                                                name=',
        ">\n            </",
        ">\n            ",
        "\n    </div>\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "<option value=",
        " jslog=",
        ">",
        "://</option>"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '\n       <div class="protocol-handlers-row">\n        <select class="chrome-select protocol-select" @change=',
        " aria-label=",
        ">\n           ",
        "\n        </select>\n        <input .value=",
        ' class="devtools-text-input" type="text" @change=',
        " aria-label=",
        "\n        placeholder=",
        "/>\n        <",
        " .variant=",
        " @click=",
        ">\n            ",
        "\n        </",
        ">\n        </div>\n      "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n      ",
        '\n      <div class="protocol-handlers-row">\n          ',
        "\n      </div>\n      ",
        "\n    "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}






// inspectorCommonStyles is imported for the chrome-select class that is used for the dropdown
// eslint-disable-next-line rulesdir/es_modules_import





var PROTOCOL_DOCUMENT_URL = 'https://web.dev/url-protocol-handler/';
var UIStrings = {
    /**
     *@description Status message for when protocol handlers are detected in the manifest
     *@example {protocolhandler/manifest.json} PH1
     */ protocolDetected: 'Found valid protocol handler registration in the {PH1}. With the app installed, test the registered protocols.',
    /**
     *@description Status message for when protocol handlers are not detected in the manifest
     *@example {protocolhandler/manifest.json} PH1
     */ protocolNotDetected: 'Define protocol handlers in the {PH1} to register your app as a handler for custom protocols when your app is installed.',
    /**
     *@description Text wrapping a link pointing to more information on handling protocol handlers
     *@example {https://example.com/} PH1
     */ needHelpReadOur: 'Need help? Read {PH1}.',
    /**
     *@description Link text for more information on URL protocol handler registrations for PWAs
     */ protocolHandlerRegistrations: 'URL protocol handler registration for PWAs',
    /**
     *@description In text hyperlink to the PWA manifest
     */ manifest: 'manifest',
    /**
     *@description Text for test protocol button
     */ testProtocol: 'Test protocol',
    /**
     * @description Aria text for screen reader to announce they can select a protocol handler in the dropdown
     */ dropdownLabel: 'Select protocol handler',
    /**
     * @description Aria text for screen reader to announce they can enter query parameters or endpoints into the textbox
     */ textboxLabel: 'Query parameter or endpoint for protocol handler',
    /**
     * @description Placeholder for textbox input field, rest of the URL of protocol to test.
     */ textboxPlaceholder: 'Enter URL'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/components/ProtocolHandlersView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var _shadow = /*#__PURE__*/ new WeakMap(), _protocolHandlers = /*#__PURE__*/ new WeakMap(), _manifestLink = /*#__PURE__*/ new WeakMap(), _selectedProtocolState = /*#__PURE__*/ new WeakMap(), _queryInputState = /*#__PURE__*/ new WeakMap(), _update = /*#__PURE__*/ new WeakSet(), _renderStatusMessage = /*#__PURE__*/ new WeakSet(), _renderProtocolTest = /*#__PURE__*/ new WeakSet(), _handleProtocolSelect = /*#__PURE__*/ new WeakMap(), _handleQueryInputChange = /*#__PURE__*/ new WeakMap(), _handleTestProtocolClick = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet();
var ProtocolHandlersView = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ProtocolHandlersView, HTMLElement1);
    var _super = _create_super(ProtocolHandlersView);
    function ProtocolHandlersView() {
        _class_call_check(this, ProtocolHandlersView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _update);
        _class_private_method_init(_assert_this_initialized(_this), _renderStatusMessage);
        _class_private_method_init(_assert_this_initialized(_this), _renderProtocolTest);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _protocolHandlers, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _manifestLink, {
            writable: true,
            value: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.DevToolsPath.EmptyUrlString
        });
        _class_private_field_init(_assert_this_initialized(_this), _selectedProtocolState, {
            writable: true,
            value: ''
        });
        _class_private_field_init(_assert_this_initialized(_this), _queryInputState, {
            writable: true,
            value: ''
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleProtocolSelect, {
            writable: true,
            value: function(evt) {
                _class_private_field_set(_assert_this_initialized(_this), _selectedProtocolState, evt.target.value);
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleQueryInputChange, {
            writable: true,
            value: function(evt) {
                _class_private_field_set(_assert_this_initialized(_this), _queryInputState, evt.target.value);
                _class_private_method_get(_this, _render, render).call(_assert_this_initialized(_this));
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleTestProtocolClick, {
            writable: true,
            value: function() {
                var protocolURL = "".concat(_class_private_field_get(_this, _selectedProtocolState), "://").concat(_class_private_field_get(_assert_this_initialized(_this), _queryInputState));
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(protocolURL);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.CaptureTestProtocolClicked);
            }
        });
        return _this;
    }
    _create_class(ProtocolHandlersView, [
        {
            key: "data",
            set: function set(data) {
                var isNewManifest = _class_private_field_get(this, _manifestLink) !== data.manifestLink;
                _class_private_field_set(this, _protocolHandlers, data.protocolHandlers);
                _class_private_field_set(this, _manifestLink, data.manifestLink);
                if (isNewManifest) {
                    _class_private_method_get(this, _update, update).call(this);
                }
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _protocolHandlersView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"],
                    _ui_legacy_inspectorCommon_css_js__WEBPACK_IMPORTED_MODULE_6__["default"],
                    _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_5__.textInputStyles
                ];
            }
        }
    ]);
    return ProtocolHandlersView;
}(_wrap_native_super(HTMLElement));
_define_property(ProtocolHandlersView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.literal(_templateObject()));
function update() {
    var _class_private_field_get_;
    _class_private_field_set(this, _queryInputState, '');
    var _class_private_field_get__protocol;
    _class_private_field_set(this, _selectedProtocolState, (_class_private_field_get__protocol = (_class_private_field_get_ = _class_private_field_get(this, _protocolHandlers)[0]) === null || _class_private_field_get_ === void 0 ? void 0 : _class_private_field_get_.protocol) !== null && _class_private_field_get__protocol !== void 0 ? _class_private_field_get__protocol : '');
    _class_private_method_get(this, _render, render).call(this);
}
function renderStatusMessage() {
    var manifestInTextLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.XLink.XLink.create(_class_private_field_get(this, _manifestLink), i18nString(UIStrings.manifest), undefined, undefined, 'manifest');
    var statusString = _class_private_field_get(this, _protocolHandlers).length > 0 ? UIStrings.protocolDetected : UIStrings.protocolNotDetected;
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject1(), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName, _class_private_field_get(this, _protocolHandlers).length > 0 ? 'check-circle' : 'info', _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, statusString, {
        PH1: manifestInTextLink
    }));
// clang-format on
}
function renderProtocolTest() {
    if (_class_private_field_get(this, _protocolHandlers).length === 0) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing;
    }
    var protocolOptions = _class_private_field_get(this, _protocolHandlers).filter(function(p) {
        return p.protocol;
    }).map(function(p) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject2(), p.protocol, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.item(p.protocol).track({
            click: true
        }), p.protocol);
    });
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject3(), _class_private_field_get(this, _handleProtocolSelect), i18nString(UIStrings.dropdownLabel), protocolOptions, _class_private_field_get(this, _queryInputState), _class_private_field_get(this, _handleQueryInputChange), i18nString(UIStrings.textboxLabel), i18nString(UIStrings.textboxPlaceholder), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button.litTagName, "primary" /* Buttons.Button.Variant.PRIMARY */ , _class_private_field_get(this, _handleTestProtocolClick), i18nString(UIStrings.testProtocol), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button.litTagName);
}
function render() {
    var protocolDocLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.XLink.XLink.create(PROTOCOL_DOCUMENT_URL, i18nString(UIStrings.protocolHandlerRegistrations), undefined, undefined, 'learn-more');
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject4(), _class_private_method_get(this, _renderStatusMessage, renderStatusMessage).call(this), _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.needHelpReadOur, {
        PH1: protocolDocLink
    }), _class_private_method_get(this, _renderProtocolTest, renderProtocolTest).call(this)), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
customElements.define('devtools-protocol-handlers-view', ProtocolHandlersView); //# sourceMappingURL=ProtocolHandlersView.js.map


}),
"./panels/application/components/protocolHandlersView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (c) 2022 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.devtools-link {\n  color: var(--sys-color-primary);\n  text-decoration: underline;\n  cursor: pointer;\n  outline-offset: 2px;\n}\n\n.devtools-link:focus-visible {\n  outline-width: unset;\n}\n\ninput.devtools-text-input[type="text"] {\n  padding: 3px 6px;\n  margin-left: 4px;\n  margin-right: 4px;\n  width: 250px;\n  height: 25px;\n}\n\ninput.devtools-text-input[type="text"]::placeholder {\n  color: var(--sys-color-token-subtle);\n}\n\n.protocol-handlers-row {\n  margin: 10px 0 2px 18px;\n}\n\n.inline-icon {\n  margin-inline: 4px;\n  width: 16px;\n  height: 16px;\n\n  &[name="check-circle"] {\n    color: var(--icon-checkmark-green);\n  }\n}\n\n@media (forced-colors: active) {\n  .devtools-link:not(.devtools-link-prevent-click) {\n    color: linktext;\n  }\n\n  .devtools-link:focus-visible {\n    background: Highlight;\n    color: HighlightText;\n  }\n}\n\n/*# sourceURL=protocolHandlersView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);