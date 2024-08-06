"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_components_PermissionsPolicySection_js"], {
"./panels/application/components/PermissionsPolicySection.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PermissionsPolicySection: function() { return PermissionsPolicySection; },
  renderIconLink: function() { return renderIconLink; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _permissionsPolicySection_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./permissionsPolicySection.css.js */ "./panels/application/components/permissionsPolicySection.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  <",
        "\n    .iconName=",
        "\n    title=",
        "\n    .variant=",
        "\n    .size=",
        "\n    @click=",
        "\n    jslog=",
        "></",
        ">\n  "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "devtools-resources-permissions-policy-section"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n      <",
        ">",
        "</",
        ">\n      <",
        ">\n        ",
        "\n      </",
        ">\n    "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n        <",
        ">",
        "</",
        ">\n        <",
        ">\n          ",
        "\n          <",
        "\n          .variant=",
        "\n          @click=",
        "\n          jslog=",
        ">",
        "\n        </",
        ">\n        </",
        ">\n      "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        '\n        <div class="permissions-row">\n          <div>\n            <',
        ' class="allowed-icon"\n              .data=',
        ">\n            </",
        '>\n          </div>\n          <div class="feature-name text-ellipsis">\n            ',
        '\n          </div>\n          <div class="block-reason">',
        "</div>\n          <div>\n            ",
        "\n            ",
        "\n          </div>\n        </div>\n      "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n      <",
        ">",
        "</",
        ">\n      <",
        ' class="policies-list">\n        ',
        '\n        <div class="permissions-row">\n        <',
        "\n          .variant=",
        "\n          @click=",
        "\n          jslog=",
        ">",
        "\n        </",
        ">\n        </div>\n      </",
        ">\n    "
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "\n          <",
        ">",
        "</",
        ">\n          ",
        "\n          ",
        "\n          <",
        "></",
        ">\n        "
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}











var UIStrings = {
    /**
     *@description Label for a button. When clicked more details (for the content this button refers to) will be shown.
     */ showDetails: 'Show details',
    /**
     *@description Label for a button. When clicked some details (for the content this button refers to) will be hidden.
     */ hideDetails: 'Hide details',
    /**
     *@description Label for a list of features which are allowed according to the current Permissions policy
     *(a mechanism that allows developers to enable/disable browser features and APIs (e.g. camera, geolocation, autoplay))
     */ allowedFeatures: 'Allowed Features',
    /**
     *@description Label for a list of features which are disabled according to the current Permissions policy
     *(a mechanism that allows developers to enable/disable browser features and APIs (e.g. camera, geolocation, autoplay))
     */ disabledFeatures: 'Disabled Features',
    /**
     *@description Tooltip text for a link to a specific request's headers in the Network panel.
     */ clickToShowHeader: 'Click to reveal the request whose "`Permissions-Policy`" HTTP header disables this feature.',
    /**
     *@description Tooltip text for a link to a specific iframe in the Elements panel (Iframes can be nested, the link goes
     *  to the outer-most iframe which blocks a certain feature).
     */ clickToShowIframe: 'Click to reveal the top-most iframe which does not allow this feature in the elements panel.',
    /**
     *@description Text describing that a specific feature is blocked by not being included in the iframe's "allow" attribute.
     */ disabledByIframe: 'missing in iframe "`allow`" attribute',
    /**
     *@description Text describing that a specific feature is blocked by a Permissions Policy specified in a request header.
     */ disabledByHeader: 'disabled by "`Permissions-Policy`" header',
    /**
     *@description Text describing that a specific feature is blocked by virtue of being inside a fenced frame tree.
     */ disabledByFencedFrame: 'disabled inside a `fencedframe`'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/components/PermissionsPolicySection.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__.RenderCoordinator.RenderCoordinator.instance();
function renderIconLink(iconName, title, clickHandler, jsLogContext) {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName, iconName, title, "icon" /* Buttons.Button.Variant.ICON */ , "SMALL" /* Buttons.Button.Size.SMALL */ , clickHandler, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.action().track({
        click: true
    }).context(jsLogContext), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName);
// clang-format on
}
var _shadow = /*#__PURE__*/ new WeakMap(), _permissionsPolicySectionData = /*#__PURE__*/ new WeakMap(), _toggleShowPermissionsDisallowedDetails = /*#__PURE__*/ new WeakSet(), _renderAllowed = /*#__PURE__*/ new WeakSet(), _renderDisallowed = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet();
var PermissionsPolicySection = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(PermissionsPolicySection, HTMLElement1);
    var _super = _create_super(PermissionsPolicySection);
    function PermissionsPolicySection() {
        _class_call_check(this, PermissionsPolicySection);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _toggleShowPermissionsDisallowedDetails);
        _class_private_method_init(_assert_this_initialized(_this), _renderAllowed);
        _class_private_method_init(_assert_this_initialized(_this), _renderDisallowed);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _permissionsPolicySectionData, {
            writable: true,
            value: {
                policies: [],
                showDetails: false
            }
        });
        return _this;
    }
    _create_class(PermissionsPolicySection, [
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _permissionsPolicySectionData, data);
                void _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _permissionsPolicySection_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
                ];
            }
        }
    ]);
    return PermissionsPolicySection;
}(_wrap_native_super(HTMLElement));
_define_property(PermissionsPolicySection, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.literal(_templateObject1()));
function toggleShowPermissionsDisallowedDetails() {
    _class_private_field_get(this, _permissionsPolicySectionData).showDetails = !_class_private_field_get(this, _permissionsPolicySectionData).showDetails;
    void _class_private_method_get(this, _render, render).call(this);
}
function renderAllowed() {
    var allowed = _class_private_field_get(this, _permissionsPolicySectionData).policies.filter(function(p) {
        return p.allowed;
    }).map(function(p) {
        return p.feature;
    }).sort();
    if (!allowed.length) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject2(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportKey.litTagName, i18nString(UIStrings.allowedFeatures), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportValue.litTagName, allowed.join(', '), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportValue.litTagName);
}
function renderDisallowed() {
    return _renderDisallowed1.apply(this, arguments);
}
function _renderDisallowed1() {
    _renderDisallowed1 = _async_to_generator(function() {
        var _this, disallowed, frameManager, featureRows;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _this = this;
                    disallowed = _class_private_field_get(this, _permissionsPolicySectionData).policies.filter(function(p) {
                        return !p.allowed;
                    }).sort(function(a, b) {
                        return a.feature.localeCompare(b.feature);
                    });
                    if (!disallowed.length) {
                        return [
                            2,
                            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing
                        ];
                    }
                    if (!_class_private_field_get(this, _permissionsPolicySectionData).showDetails) {
                        return [
                            2,
                            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject3(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportKey.litTagName, i18nString(UIStrings.disabledFeatures), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportValue.litTagName, disallowed.map(function(p) {
                                return p.feature;
                            }).join(', '), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName, "outlined" /* Buttons.Button.Variant.OUTLINED */ , function() {
                                return _class_private_method_get(_this, _toggleShowPermissionsDisallowedDetails, toggleShowPermissionsDisallowedDetails).call(_this);
                            }, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.action('show-disabled-features-details').track({
                                click: true
                            }), i18nString(UIStrings.showDetails), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportValue.litTagName)
                        ];
                    }
                    frameManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.FrameManager.FrameManager.instance();
                    return [
                        4,
                        Promise.all(disallowed.map(function() {
                            var _ref = _async_to_generator(function(policy) {
                                var _policy_locator, frame, blockReason, linkTargetDOMNode, resource, linkTargetRequest, blockReasonText, revealHeader;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            frame = policy.locator ? frameManager.getFrame(policy.locator.frameId) : null;
                                            blockReason = (_policy_locator = policy.locator) === null || _policy_locator === void 0 ? void 0 : _policy_locator.blockReason;
                                            return [
                                                4,
                                                blockReason === "IframeAttribute" /* Protocol.Page.PermissionsPolicyBlockReason.IframeAttribute */  && frame && frame.getOwnerDOMNodeOrDocument()
                                            ];
                                        case 1:
                                            linkTargetDOMNode = _state.sent();
                                            resource = frame && frame.resourceForURL(frame.url);
                                            linkTargetRequest = blockReason === "Header" /* Protocol.Page.PermissionsPolicyBlockReason.Header */  && resource && resource.request;
                                            blockReasonText = function() {
                                                switch(blockReason){
                                                    case "IframeAttribute" /* Protocol.Page.PermissionsPolicyBlockReason.IframeAttribute */ :
                                                        return i18nString(UIStrings.disabledByIframe);
                                                    case "Header" /* Protocol.Page.PermissionsPolicyBlockReason.Header */ :
                                                        return i18nString(UIStrings.disabledByHeader);
                                                    case "InFencedFrameTree" /* Protocol.Page.PermissionsPolicyBlockReason.InFencedFrameTree */ :
                                                        return i18nString(UIStrings.disabledByFencedFrame);
                                                    default:
                                                        return '';
                                                }
                                            }();
                                            revealHeader = function() {
                                                var _ref = _async_to_generator(function() {
                                                    var headerName, requestLocation;
                                                    return _ts_generator(this, function(_state) {
                                                        switch(_state.label){
                                                            case 0:
                                                                if (!linkTargetRequest) {
                                                                    return [
                                                                        2
                                                                    ];
                                                                }
                                                                headerName = linkTargetRequest.responseHeaderValue('permissions-policy') ? 'permissions-policy' : 'feature-policy';
                                                                requestLocation = _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIRequestLocation.UIRequestLocation.responseHeaderMatch(linkTargetRequest, {
                                                                    name: headerName,
                                                                    value: ''
                                                                });
                                                                return [
                                                                    4,
                                                                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(requestLocation)
                                                                ];
                                                            case 1:
                                                                _state.sent();
                                                                return [
                                                                    2
                                                                ];
                                                        }
                                                    });
                                                });
                                                return function revealHeader() {
                                                    return _ref.apply(this, arguments);
                                                };
                                            }();
                                            // Disabled until https://crbug.com/1079231 is fixed.
                                            // clang-format off
                                            return [
                                                2,
                                                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject4(), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName, {
                                                    color: 'var(--icon-error)',
                                                    iconName: 'cross-circle',
                                                    width: '20px',
                                                    height: '20px'
                                                }, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName, policy.feature, blockReasonText, linkTargetDOMNode ? renderIconLink('code-circle', i18nString(UIStrings.clickToShowIframe), function() {
                                                    return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(linkTargetDOMNode);
                                                }, 'reveal-in-elements') : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing, linkTargetRequest ? renderIconLink('arrow-up-down-circle', i18nString(UIStrings.clickToShowHeader), revealHeader, 'reveal-in-network') : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing)
                                            ];
                                    }
                                });
                            // clang-format on
                            });
                            return function(policy) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 1:
                    featureRows = _state.sent();
                    return [
                        2,
                        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject5(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportKey.litTagName, i18nString(UIStrings.disabledFeatures), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportValue.litTagName, featureRows, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName, "outlined" /* Buttons.Button.Variant.OUTLINED */ , function() {
                            return _class_private_method_get(_this, _toggleShowPermissionsDisallowedDetails, toggleShowPermissionsDisallowedDetails).call(_this);
                        }, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.action('hide-disabled-features-details').track({
                            click: true
                        }), i18nString(UIStrings.hideDetails), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportValue.litTagName)
                    ];
            }
        });
    });
    return _renderDisallowed1.apply(this, arguments);
}
function render() {
    return _render1.apply(this, arguments);
}
function _render1() {
    _render1 = _async_to_generator(function() {
        var _this;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _this = this;
                    return [
                        4,
                        coordinator.write('PermissionsPolicySection render', function() {
                            // Disabled until https://crbug.com/1079231 is fixed.
                            // clang-format off
                            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject6(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Permissions Policy'), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName, _class_private_method_get(_this, _renderAllowed, renderAllowed).call(_this), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.Directives.until(_class_private_method_get(_this, _renderDisallowed, renderDisallowed).call(_this), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionDivider.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionDivider.litTagName), _class_private_field_get(_this, _shadow), {
                                host: _this
                            });
                        // clang-format on
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _render1.apply(this, arguments);
}
customElements.define('devtools-resources-permissions-policy-section', PermissionsPolicySection); //# sourceMappingURL=PermissionsPolicySection.js.map


}),
"./panels/application/components/permissionsPolicySection.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  display: contents;\n}\n\n.text-ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.link,\n.devtools-link {\n  color: var(--sys-color-primary);\n  text-decoration: underline;\n  cursor: pointer;\n  outline-offset: 2px;\n}\n\nbutton.link {\n  border: none;\n  background: none;\n  font-family: inherit;\n  font-size: inherit;\n}\n\n.policies-list {\n  padding-top: 3px;\n}\n\n.permissions-row {\n  display: flex;\n  line-height: 22px;\n}\n\n.permissions-row div {\n  padding-right: 5px;\n}\n\n.feature-name {\n  width: 135px;\n}\n\n.allowed-icon {\n  vertical-align: sub;\n}\n\n.block-reason {\n  width: 215px;\n}\n\n/*# sourceURL=permissionsPolicySection.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);