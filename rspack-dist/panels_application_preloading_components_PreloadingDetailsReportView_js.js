"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_preloading_components_PreloadingDetailsReportView_js"], {
"./panels/application/preloading/components/PreloadingDetailsReportView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PreloadingDetailsReportView: function() { return PreloadingDetailsReportView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */var _ui_components_request_link_icon_request_link_icon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../ui/components/request_link_icon/request_link_icon.js */ "./ui/components/request_link_icon/request_link_icon.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _helper_helper_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helper/helper.js */ "./panels/application/preloading/helper/helper.js");
/* harmony import */var _preloadingDetailsReportView_css_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./preloadingDetailsReportView.css.js */ "./panels/application/preloading/components/preloadingDetailsReportView.css.js");
/* harmony import */var _PreloadingString_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PreloadingString.js */ "./panels/application/preloading/components/PreloadingString.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
        "devtools-resources-preloading-details-report-view"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n          <div class="preloading-noselected">\n            <div>\n              <p>',
        "</p>\n            </div>\n          </div>\n        "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n        <",
        " .data=",
        "\n        jslog=",
        ">\n          <",
        ">",
        "</",
        ">\n\n          ",
        "\n          ",
        "\n\n          <",
        ">",
        "</",
        ">\n          <",
        ">\n            ",
        "\n          </",
        ">\n\n          ",
        "\n          ",
        "\n\n          ",
        "\n        </",
        ">\n      "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n          <",
        "\n            .data=",
        "\n          >\n          </",
        ">\n      "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        '\n          <div class="text-ellipsis" title=',
        ">",
        "</div>\n      "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n        <",
        ">",
        "</",
        ">\n        <",
        ">\n          ",
        "\n        </",
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
        "\n            @click=",
        "\n            .title=",
        "\n            .size=",
        "\n            .variant=",
        "\n            .disabled=",
        "\n            jslog=",
        "\n          >\n            ",
        "\n          </",
        ">\n      "
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "\n        <",
        ">",
        "</",
        ">\n        <",
        '>\n          <div class="text-ellipsis" title="">\n            ',
        "\n            ",
        "\n          </div>\n        </",
        ">\n    "
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "\n        <",
        ">",
        "</",
        ">\n        <",
        ">\n          ",
        "\n        </",
        ">\n    "
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "\n        <",
        ">",
        "</",
        ">\n        <",
        ">\n          ",
        "\n        </",
        ">\n    "
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        "\n      <",
        ">",
        "</",
        ">\n      <",
        '>\n        <div class="text-ellipsis" title="">\n          <button class="link" role="link"\n            @click=',
        "\n            title=",
        "\n            style=",
        "\n            jslog=",
        "\n          >\n            ",
        "\n          </button>\n        </div>\n      </",
        ">\n    "
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}

















var UIStrings = {
    /**
     *@description Text in PreloadingDetailsReportView of the Application panel
     */ selectAnElementForMoreDetails: 'Select an element for more details',
    /**
     *@description Text in details
     */ detailsDetailedInformation: 'Detailed information',
    /**
     *@description Text in details
     */ detailsAction: 'Action',
    /**
     *@description Text in details
     */ detailsStatus: 'Status',
    /**
     *@description Text in details
     */ detailsFailureReason: 'Failure reason',
    /**
     *@description Header of rule set
     */ detailsRuleSet: 'Rule set',
    /**
     *@description Description: status
     */ detailedStatusNotTriggered: 'Speculative load attempt is not yet triggered.',
    /**
     *@description Description: status
     */ detailedStatusPending: 'Speculative load attempt is eligible but pending.',
    /**
     *@description Description: status
     */ detailedStatusRunning: 'Speculative load is running.',
    /**
     *@description Description: status
     */ detailedStatusReady: 'Speculative load finished and the result is ready for the next navigation.',
    /**
     *@description Description: status
     */ detailedStatusSuccess: 'Speculative load finished and used for a navigation.',
    /**
     *@description Description: status
     */ detailedStatusFailure: 'Speculative load failed.',
    /**
     *@description button: Contents of button to inspect prerendered page
     */ buttonInspect: 'Inspect',
    /**
     *@description button: Title of button to inspect prerendered page
     */ buttonClickToInspect: 'Click to inspect prerendered page',
    /**
     *@description button: Title of button to reveal rule set
     */ buttonClickToRevealRuleSet: 'Click to reveal rule set'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/preloading/components/PreloadingDetailsReportView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var PreloadingUIUtils = /*#__PURE__*/ function() {
    "use strict";
    function PreloadingUIUtils() {
        _class_call_check(this, PreloadingUIUtils);
    }
    _create_class(PreloadingUIUtils, null, [
        {
            key: "detailedStatus",
            value: function detailedStatus(param) {
                var status = param.status;
                // See content/public/browser/preloading.h PreloadingAttemptOutcome.
                switch(status){
                    case "NotTriggered" /* SDK.PreloadingModel.PreloadingStatus.NotTriggered */ :
                        return i18nString(UIStrings.detailedStatusNotTriggered);
                    case "Pending" /* SDK.PreloadingModel.PreloadingStatus.Pending */ :
                        return i18nString(UIStrings.detailedStatusPending);
                    case "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ :
                        return i18nString(UIStrings.detailedStatusRunning);
                    case "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */ :
                        return i18nString(UIStrings.detailedStatusReady);
                    case "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */ :
                        return i18nString(UIStrings.detailedStatusSuccess);
                    case "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ :
                        return i18nString(UIStrings.detailedStatusFailure);
                    // NotSupported is used to handle unreachable case. For example,
                    // there is no code path for
                    // PreloadingTriggeringOutcome::kTriggeredButPending in prefetch,
                    // which is mapped to NotSupported. So, we regard it as an
                    // internal error.
                    case "NotSupported" /* SDK.PreloadingModel.PreloadingStatus.NotSupported */ :
                        return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Internal error');
                }
            }
        }
    ]);
    return PreloadingUIUtils;
}();
var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__.RenderCoordinator.RenderCoordinator.instance();
var _LegacyWrapper_LegacyWrapper_WrappableComponent, _shadow = /*#__PURE__*/ new WeakMap(), _data = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet(), _url = /*#__PURE__*/ new WeakSet(), _action = /*#__PURE__*/ new WeakSet(), _maybePrefetchFailureReason = /*#__PURE__*/ new WeakSet(), _maybePrerenderFailureReason = /*#__PURE__*/ new WeakSet(), _renderRuleSet = /*#__PURE__*/ new WeakSet();
var PreloadingDetailsReportView = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(PreloadingDetailsReportView, _superClass);
    var _super = _create_super(PreloadingDetailsReportView);
    function PreloadingDetailsReportView() {
        _class_call_check(this, PreloadingDetailsReportView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _url);
        _class_private_method_init(_assert_this_initialized(_this), _action);
        _class_private_method_init(_assert_this_initialized(_this), _maybePrefetchFailureReason);
        _class_private_method_init(_assert_this_initialized(_this), _maybePrerenderFailureReason);
        _class_private_method_init(_assert_this_initialized(_this), _renderRuleSet);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _data, {
            writable: true,
            value: null
        });
        return _this;
    }
    _create_class(PreloadingDetailsReportView, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _preloadingDetailsReportView_css_js__WEBPACK_IMPORTED_MODULE_14__["default"]
                ];
            }
        },
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _data, data);
                void _class_private_method_get(this, _render, render).call(this);
            }
        }
    ]);
    return PreloadingDetailsReportView;
}(_LegacyWrapper_LegacyWrapper_WrappableComponent = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__.LegacyWrapper.WrappableComponent);
_define_property(PreloadingDetailsReportView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.literal(_templateObject()));
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
                        coordinator.write('PreloadingDetailsReportView render', function() {
                            if (_class_private_field_get(_this, _data) === null) {
                                // Disabled until https://crbug.com/1079231 is fixed.
                                // clang-format off
                                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html(_templateObject1(), i18nString(UIStrings.selectAnElementForMoreDetails)), _class_private_field_get(_this, _shadow), {
                                    host: _this
                                });
                                // clang-format on
                                return;
                            }
                            var detailedStatus = PreloadingUIUtils.detailedStatus(_class_private_field_get(_this, _data).preloadingAttempt);
                            var pageURL = _class_private_field_get(_this, _data).pageURL;
                            // Disabled until https://crbug.com/1079231 is fixed.
                            // clang-format off
                            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html(_templateObject2(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.Report.litTagName, {
                                reportTitle: 'Speculative Loading Attempt'
                            }, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.section('preloading-details'), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionHeader.litTagName, i18nString(UIStrings.detailsDetailedInformation), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionHeader.litTagName, _class_private_method_get(_this, _url, url).call(_this), _class_private_method_get(_this, _action, action).call(_this), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName, i18nString(UIStrings.detailsStatus), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName, detailedStatus, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName, _class_private_method_get(_this, _maybePrefetchFailureReason, maybePrefetchFailureReason).call(_this), _class_private_method_get(_this, _maybePrerenderFailureReason, maybePrerenderFailureReason).call(_this), _class_private_field_get(_this, _data).ruleSets.map(function(ruleSet) {
                                return _class_private_method_get(_this, _renderRuleSet, renderRuleSet).call(_this, ruleSet, pageURL);
                            }), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.Report.litTagName), _class_private_field_get(_this, _shadow), {
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
function url() {
    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(_class_private_field_get(this, _data));
    var attempt = _class_private_field_get(this, _data).preloadingAttempt;
    var value;
    if (attempt.action === "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */  && attempt.requestId !== undefined) {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        value = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html(_templateObject3(), _ui_components_request_link_icon_request_link_icon_js__WEBPACK_IMPORTED_MODULE_9__.RequestLinkIcon.RequestLinkIcon.litTagName, {
            affectedRequest: {
                requestId: attempt.requestId,
                url: attempt.key.url
            },
            requestResolver: _class_private_field_get(this, _data).requestResolver || new _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__.RequestResolver.RequestResolver(),
            displayURL: true,
            urlToDisplay: attempt.key.url
        }, _ui_components_request_link_icon_request_link_icon_js__WEBPACK_IMPORTED_MODULE_9__.RequestLinkIcon.RequestLinkIcon.litTagName);
    } else {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        value = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html(_templateObject4(), attempt.key.url, attempt.key.url);
    // clang-format on
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html(_templateObject5(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('URL'), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName, value, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName);
// clang-format on
}
function action() {
    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(_class_private_field_get(this, _data));
    var attempt = _class_private_field_get(this, _data).preloadingAttempt;
    var action = _PreloadingString_js__WEBPACK_IMPORTED_MODULE_15__.capitalizedAction(_class_private_field_get(this, _data).preloadingAttempt.action);
    var maybeInspectButton = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.nothing;
    (function() {
        if (attempt.action !== "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ) {
            return;
        }
        var target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (target === null) {
            return;
        }
        var prerenderTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().targets().find(function(child) {
            var _child_targetInfo;
            return ((_child_targetInfo = child.targetInfo()) === null || _child_targetInfo === void 0 ? void 0 : _child_targetInfo.subtype) === 'prerender' && child.inspectedURL() === attempt.key.url;
        });
        var disabled = prerenderTarget === undefined;
        var inspect = function() {
            if (prerenderTarget === undefined) {
                return;
            }
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Target, prerenderTarget);
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        maybeInspectButton = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html(_templateObject6(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, inspect, i18nString(UIStrings.buttonClickToInspect), "SMALL" /* Buttons.Button.Size.SMALL */ , "outlined" /* Buttons.Button.Variant.OUTLINED */ , disabled, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.action('inspect-prerendered-page').track({
            click: true
        }), i18nString(UIStrings.buttonInspect), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName);
    // clang-format on
    })();
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html(_templateObject7(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName, i18nString(UIStrings.detailsAction), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName, action, maybeInspectButton, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName);
// clang-format on
}
function maybePrefetchFailureReason() {
    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(_class_private_field_get(this, _data));
    var attempt = _class_private_field_get(this, _data).preloadingAttempt;
    if (attempt.action !== "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.nothing;
    }
    var failureDescription = (0,_PreloadingString_js__WEBPACK_IMPORTED_MODULE_15__.prefetchFailureReason)(attempt);
    if (failureDescription === null) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html(_templateObject8(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName, i18nString(UIStrings.detailsFailureReason), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName, failureDescription, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName);
}
function maybePrerenderFailureReason() {
    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(_class_private_field_get(this, _data));
    var attempt = _class_private_field_get(this, _data).preloadingAttempt;
    if (attempt.action !== "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.nothing;
    }
    var failureReason = (0,_PreloadingString_js__WEBPACK_IMPORTED_MODULE_15__.prerenderFailureReason)(attempt);
    if (failureReason === null) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html(_templateObject9(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName, i18nString(UIStrings.detailsFailureReason), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName, failureReason, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName);
}
function renderRuleSet(ruleSet, pageURL) {
    var revealRuleSetView = function() {
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(new _helper_helper_js__WEBPACK_IMPORTED_MODULE_13__.PreloadingForward.RuleSetView(ruleSet.id));
    };
    var location = (0,_PreloadingString_js__WEBPACK_IMPORTED_MODULE_15__.ruleSetLocationShort)(ruleSet, pageURL);
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html(_templateObject10(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName, i18nString(UIStrings.detailsRuleSet), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName, revealRuleSetView, i18nString(UIStrings.buttonClickToRevealRuleSet), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.Directives.styleMap({
        color: 'var(--sys-color-primary)',
        'text-decoration': 'underline'
    }), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.action('reveal-rule-set').track({
        click: true
    }), location, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportValue.litTagName);
// clang-format on
}
customElements.define('devtools-resources-preloading-details-report-view', PreloadingDetailsReportView); //# sourceMappingURL=PreloadingDetailsReportView.js.map


}),
"./panels/application/preloading/components/preloadingDetailsReportView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2022 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\nbutton.link {\n  color: var(--sys-color-primary);\n  text-decoration: underline;\n  padding: 0;\n  border: none;\n  background: none;\n  font-family: inherit;\n  font-size: inherit;\n  height: 16px;\n}\n\nbutton.link devtools-icon {\n  vertical-align: sub;\n}\n\n.link {\n  color: var(--sys-color-primary);\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n/*# sourceURL=preloadingDetailsReportView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);