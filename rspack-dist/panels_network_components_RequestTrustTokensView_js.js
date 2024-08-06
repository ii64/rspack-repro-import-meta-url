"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_components_RequestTrustTokensView_js"], {
"./panels/network/components/RequestTrustTokensView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n.code {\n  font-family: var(--monospace-font-family);\n  font-size: var(--monospace-font-size);\n}\n\n.issuers-list {\n  display: flex;\n  flex-direction: column;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.status-icon {\n  margin: 0 0.3em 2px 0;\n  vertical-align: middle;\n}\n\n/*# sourceURL=RequestTrustTokensView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/network/components/RequestTrustTokensView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RequestTrustTokensView: function() { return RequestTrustTokensView; },
  statusConsideredSuccess: function() { return statusConsideredSuccess; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _RequestTrustTokensView_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RequestTrustTokensView.css.js */ "./panels/network/components/RequestTrustTokensView.css.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
        "<",
        ">\n        ",
        "\n        ",
        "\n      </",
        ">\n    "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "devtools-trust-token-report"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n      <",
        " jslog=",
        ">",
        "</",
        ">\n      ",
        "\n      ",
        "\n      ",
        "\n      ",
        "\n      <",
        "></",
        ">\n    "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "<li>",
        "</li>"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n      <",
        ">",
        "</",
        ">\n      <",
        '>\n        <ul class="issuers-list">\n          ',
        "\n        </ul>\n      </",
        ">\n    "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n      ",
        "\n      ",
        ""
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "\n      <",
        ">",
        "</",
        ">\n      <",
        ">",
        "</",
        ">\n      <",
        ">\n        <span>\n          <",
        ' class="status-icon"\n            .data=',
        ">\n          </",
        ">\n          <strong>",
        "</strong>\n          ",
        "\n        </span>\n      </",
        ">\n      ",
        "\n      <",
        "></",
        ">\n      "
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "\n    <",
        ">",
        "</",
        ">\n    <",
        ">",
        "</",
        ">\n  "
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "\n    <",
        ">",
        "</",
        ">\n    <",
        ' class="code">',
        "</",
        ">\n  "
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}








var UIStrings = {
    /**
     *@description Section heading in the Trust Token tab
     */ parameters: 'Parameters',
    /**
     *@description Text that refers to some types
     */ type: 'Type',
    /**
     *@description Label for a Trust Token parameter
     */ refreshPolicy: 'Refresh policy',
    /**
     *@description Label for a list if origins in the Trust Token tab
     */ issuers: 'Issuers',
    /**
     *@description Label for a report field in the Network panel
     */ topLevelOrigin: 'Top level origin',
    /**
     *@description Text for the issuer of an item
     */ issuer: 'Issuer',
    /**
     *@description Heading of a report section in the Network panel
     */ result: 'Result',
    /**
     *@description Text for the status of something
     */ status: 'Status',
    /**
     *@description Label for a field in the Network panel
     */ numberOfIssuedTokens: 'Number of issued tokens',
    /**
     * @description Text for the success status in the Network panel. Refers to the outcome of a network
     * request which will either be 'Success' or 'Failure'.
     */ success: 'Success',
    /**
     *@description Text in the network panel for an error status
     */ failure: 'Failure',
    /**
     *@description Detailed text for a success status in the Network panel
     */ theOperationsResultWasServedFrom: 'The operations result was served from cache.',
    /**
     *@description Detailed text for a success status in the Network panel
     */ theOperationWasFulfilledLocally: 'The operation was fulfilled locally, no request was sent.',
    /**
     *@description Text for an error status in the Network panel
     */ theKeysForThisPSTIssuerAreUnavailable: 'The keys for this PST issuer are unavailable. The issuer may need to be registered via the Chrome registration process.',
    /**
     *@description Text for an error status in the Network panel
     */ aClientprovidedArgumentWas: 'A client-provided argument was malformed or otherwise invalid.',
    /**
     *@description Text for an error status in the Network panel
     */ eitherNoInputsForThisOperation: 'Either no inputs for this operation are available or the output exceeds the operations quota.',
    /**
     *@description Text for an error status in the Network panel
     */ theServersResponseWasMalformedOr: 'The servers response was malformed or otherwise invalid.',
    /**
     *@description Text for an error status in the Network panel
     */ theOperationFailedForAnUnknown: 'The operation failed for an unknown reason.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/network/components/RequestTrustTokensView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var _LegacyWrapper_LegacyWrapper_WrappableComponent, _shadow = /*#__PURE__*/ new WeakMap(), _request = /*#__PURE__*/ new WeakMap(), _renderParameterSection = /*#__PURE__*/ new WeakSet(), _renderRefreshPolicy = /*#__PURE__*/ new WeakSet(), _renderIssuers = /*#__PURE__*/ new WeakSet(), // The issuer and top level origin are technically parameters but reported in the
// result structure due to the timing when they are calculated in the backend.
// Nonetheless, we show them as part of the parameter section.
_renderIssuerAndTopLevelOriginFromResult = /*#__PURE__*/ new WeakSet(), _renderResultSection = /*#__PURE__*/ new WeakSet(), _renderIssuedTokenCount = /*#__PURE__*/ new WeakSet();
var RequestTrustTokensView = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(RequestTrustTokensView, _superClass);
    var _super = _create_super(RequestTrustTokensView);
    function RequestTrustTokensView(request) {
        _class_call_check(this, RequestTrustTokensView);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _renderParameterSection);
        _class_private_method_init(_assert_this_initialized(_this), _renderRefreshPolicy);
        _class_private_method_init(_assert_this_initialized(_this), _renderIssuers);
        _class_private_method_init(_assert_this_initialized(_this), _renderIssuerAndTopLevelOriginFromResult);
        _class_private_method_init(_assert_this_initialized(_this), _renderResultSection);
        _class_private_method_init(_assert_this_initialized(_this), _renderIssuedTokenCount);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _request, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _request, request);
        return _this;
    }
    _create_class(RequestTrustTokensView, [
        {
            key: "wasShown",
            value: function wasShown() {
                _class_private_field_get(this, _request).addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.Events.TrustTokenResultAdded, this.render, this);
                void this.render();
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                _class_private_field_get(this, _request).removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.Events.TrustTokenResultAdded, this.render, this);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _RequestTrustTokensView_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ];
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        if (!_class_private_field_get(_this, _request)) {
                            throw new Error('Trying to render a Trust Token report without providing data');
                        }
                        // Disabled until https://crbug.com/1079231 is fixed.
                        // clang-format off
                        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.Report.litTagName, _class_private_method_get(_this, _renderParameterSection, renderParameterSection).call(_this), _class_private_method_get(_this, _renderResultSection, renderResultSection).call(_this), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.Report.litTagName), _class_private_field_get(_this, _shadow), {
                            host: _this
                        });
                        return [
                            2
                        ];
                    });
                // clang-format on
                })();
            }
        }
    ]);
    return RequestTrustTokensView;
}(_LegacyWrapper_LegacyWrapper_WrappableComponent = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__.LegacyWrapper.WrappableComponent);
_define_property(RequestTrustTokensView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.literal(_templateObject1()));
function renderParameterSection() {
    var trustTokenParams = _class_private_field_get(this, _request).trustTokenParams();
    if (!trustTokenParams) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject2(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportSectionHeader.litTagName, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('trust-tokens').track({
        resize: true
    }), i18nString(UIStrings.parameters), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportSectionHeader.litTagName, renderRowWithCodeValue(i18nString(UIStrings.type), trustTokenParams.operation.toString()), _class_private_method_get(this, _renderRefreshPolicy, renderRefreshPolicy).call(this, trustTokenParams), _class_private_method_get(this, _renderIssuers, renderIssuers).call(this, trustTokenParams), _class_private_method_get(this, _renderIssuerAndTopLevelOriginFromResult, renderIssuerAndTopLevelOriginFromResult).call(this), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportSectionDivider.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportSectionDivider.litTagName);
}
function renderRefreshPolicy(params) {
    if (params.operation !== "Redemption" /* Protocol.Network.TrustTokenOperationType.Redemption */ ) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.nothing;
    }
    return renderRowWithCodeValue(i18nString(UIStrings.refreshPolicy), params.refreshPolicy.toString());
}
function renderIssuers(params) {
    if (!params.issuers || params.issuers.length === 0) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject4(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportKey.litTagName, i18nString(UIStrings.issuers), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportValue.litTagName, params.issuers.map(function(issuer) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject3(), issuer);
    }), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportValue.litTagName);
}
function renderIssuerAndTopLevelOriginFromResult() {
    var trustTokenResult = _class_private_field_get(this, _request).trustTokenOperationDoneEvent();
    if (!trustTokenResult) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject5(), renderSimpleRowIfValuePresent(i18nString(UIStrings.topLevelOrigin), trustTokenResult.topLevelOrigin), renderSimpleRowIfValuePresent(i18nString(UIStrings.issuer), trustTokenResult.issuerOrigin));
}
function renderResultSection() {
    var trustTokenResult = _class_private_field_get(this, _request).trustTokenOperationDoneEvent();
    if (!trustTokenResult) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject6(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportSectionHeader.litTagName, i18nString(UIStrings.result), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportSectionHeader.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportKey.litTagName, i18nString(UIStrings.status), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportValue.litTagName, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName, getIconForStatusCode(trustTokenResult.status), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName, getSimplifiedStatusTextForStatusCode(trustTokenResult.status), getDetailedTextForStatusCode(trustTokenResult.status), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportValue.litTagName, _class_private_method_get(this, _renderIssuedTokenCount, renderIssuedTokenCount).call(this, trustTokenResult), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportSectionDivider.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportSectionDivider.litTagName);
}
function renderIssuedTokenCount(result) {
    if (result.type !== "Issuance" /* Protocol.Network.TrustTokenOperationType.Issuance */ ) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.nothing;
    }
    return renderSimpleRowIfValuePresent(i18nString(UIStrings.numberOfIssuedTokens), result.issuedTokenCount);
}
var SUCCESS_ICON_DATA = {
    color: 'var(--icon-checkmark-green)',
    iconName: 'check-circle',
    width: '16px',
    height: '16px'
};
var FAILURE_ICON_DATA = {
    color: 'var(--icon-error)',
    iconName: 'cross-circle-filled',
    width: '16px',
    height: '16px'
};
function statusConsideredSuccess(status) {
    return status === "Ok" /* Protocol.Network.TrustTokenOperationDoneEventStatus.Ok */  || status === "AlreadyExists" /* Protocol.Network.TrustTokenOperationDoneEventStatus.AlreadyExists */  || status === "FulfilledLocally" /* Protocol.Network.TrustTokenOperationDoneEventStatus.FulfilledLocally */ ;
}
function getIconForStatusCode(status) {
    return statusConsideredSuccess(status) ? SUCCESS_ICON_DATA : FAILURE_ICON_DATA;
}
function getSimplifiedStatusTextForStatusCode(status) {
    return statusConsideredSuccess(status) ? i18nString(UIStrings.success) : i18nString(UIStrings.failure);
}
function getDetailedTextForStatusCode(status) {
    switch(status){
        case "Ok" /* Protocol.Network.TrustTokenOperationDoneEventStatus.Ok */ :
            return null;
        case "AlreadyExists" /* Protocol.Network.TrustTokenOperationDoneEventStatus.AlreadyExists */ :
            return i18nString(UIStrings.theOperationsResultWasServedFrom);
        case "FulfilledLocally" /* Protocol.Network.TrustTokenOperationDoneEventStatus.FulfilledLocally */ :
            return i18nString(UIStrings.theOperationWasFulfilledLocally);
        case "InvalidArgument" /* Protocol.Network.TrustTokenOperationDoneEventStatus.InvalidArgument */ :
            return i18nString(UIStrings.aClientprovidedArgumentWas);
        case "ResourceExhausted" /* Protocol.Network.TrustTokenOperationDoneEventStatus.ResourceExhausted */ :
            return i18nString(UIStrings.eitherNoInputsForThisOperation);
        case "BadResponse" /* Protocol.Network.TrustTokenOperationDoneEventStatus.BadResponse */ :
            return i18nString(UIStrings.theServersResponseWasMalformedOr);
        case "MissingIssuerKeys" /* Protocol.Network.TrustTokenOperationDoneEventStatus.MissingIssuerKeys */ :
            return i18nString(UIStrings.theKeysForThisPSTIssuerAreUnavailable);
        case "FailedPrecondition" /* Protocol.Network.TrustTokenOperationDoneEventStatus.FailedPrecondition */ :
        case "ResourceLimited" /* Protocol.Network.TrustTokenOperationDoneEventStatus.ResourceLimited */ :
        case "InternalError" /* Protocol.Network.TrustTokenOperationDoneEventStatus.InternalError */ :
        case "Unauthorized" /* Protocol.Network.TrustTokenOperationDoneEventStatus.Unauthorized */ :
        case "UnknownError" /* Protocol.Network.TrustTokenOperationDoneEventStatus.UnknownError */ :
            return i18nString(UIStrings.theOperationFailedForAnUnknown);
    }
}
function renderSimpleRowIfValuePresent(key, value) {
    if (value === undefined) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject7(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportKey.litTagName, key, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportValue.litTagName, value, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportValue.litTagName);
}
function renderRowWithCodeValue(key, value) {
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject8(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportKey.litTagName, key, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportValue.litTagName, value, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportValue.litTagName);
}
customElements.define('devtools-trust-token-report', RequestTrustTokensView); //# sourceMappingURL=RequestTrustTokensView.js.map


}),

}]);