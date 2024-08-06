"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_components_BounceTrackingMitigationsView_js"], {
"./panels/application/components/BounceTrackingMitigationsView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BounceTrackingMitigationsView: function() { return BounceTrackingMitigationsView; },
  i18nString: function() { return i18nString; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/chrome_link/chrome_link.js */ "./ui/components/chrome_link/chrome_link.js");
/* harmony import */var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _bounceTrackingMitigationsView_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bounceTrackingMitigationsView.css.js */ "./panels/application/components/bounceTrackingMitigationsView.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
        "devtools-bounce-tracking-mitigations-view"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n      <",
        " .data=",
        "\n      jslog=",
        ">\n        ",
        "\n      </",
        ">\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n        <",
        ">\n          ",
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
        "\n      <",
        ">\n        ",
        "\n      </",
        ">\n        ",
        "\n      <",
        ">\n      </",
        ">\n      <",
        '>\n        <x-link href="https://privacycg.github.io/nav-tracking-mitigations/#bounce-tracking-mitigations" class="link"\n        jslog=',
        ">\n          ",
        "\n        </x-link>\n      </",
        ">\n    "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n          ",
        ""
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n      <",
        "\n        aria-label=",
        "\n        .disabled=",
        "\n        .spinner=",
        "\n        .variant=",
        "\n        @click=",
        "\n        jslog=",
        ">\n        ",
        "\n      </",
        ">\n    "
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        ""
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "\n          ",
        ""
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "\n        <",
        ">\n        ",
        "\n        </",
        ">\n      "
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "\n      <",
        ">\n        <",
        " .data=",
        ">\n        </",
        ">\n      </",
        ">\n    "
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}










var UIStrings = {
    /**
     * @description Title text in bounce tracking mitigations view of the Application panel.
     */ bounceTrackingMitigationsTitle: 'Bounce tracking mitigations',
    /**
     * @description Label for the button to force bounce tracking mitigations to run.
     */ forceRun: 'Force run',
    /**
     * @description Label for the disabled button while bounce tracking mitigations are running
     */ runningMitigations: 'Running',
    /**
     * @description Heading of table which displays sites whose state was deleted by bounce tracking mitigations.
     */ stateDeletedFor: 'State was deleted for the following sites:',
    /**
     * @description Text shown once the deletion command has been sent to the browser process.
     */ checkingPotentialTrackers: 'Checking for potential bounce tracking sites.',
    /**
     * @description Link text about explanation of Bounce Tracking Mitigations.
     */ learnMore: 'Learn more: Bounce Tracking Mitigations',
    /**
     * @description Text shown when bounce tracking mitigations have been forced to run and
     * identified no potential bounce tracking sites to delete state for. This may also
     * indicate that bounce tracking mitigations are disabled or third-party cookies aren't being blocked.
     */ noPotentialBounceTrackersIdentified: 'State was not cleared for any potential bounce tracking sites. Either none were identified or third-party cookies are not blocked.',
    /**
     * @description Text shown when bounce tracking mitigations bounce tracking mitigations are disabled. Has a link.
     * @example {Bounce Tracking Mitigations Feature Flag} PH1
     */ featureDisabled: 'Bounce tracking mitigations are disabled. To enable them, set the flag at {PH1} to "Enabled With Deletion".',
    /**
     * @description Text for link to Bounce Tracking Mitigations feature flag entry in the chrome://flags page.
     */ featureFlag: 'Bounce Tracking Mitigations Feature Flag'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/components/BounceTrackingMitigationsView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var _LegacyWrapper_LegacyWrapper_WrappableComponent, _shadow = /*#__PURE__*/ new WeakMap(), _trackingSites = /*#__PURE__*/ new WeakMap(), _screenStatus = /*#__PURE__*/ new WeakMap(), _checkedFeature = /*#__PURE__*/ new WeakMap(), _seenButtonClick = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet(), _renderMainFrameInformation = /*#__PURE__*/ new WeakSet(), _renderForceRunButton = /*#__PURE__*/ new WeakSet(), _renderDeletedSitesOrNoSitesMessage = /*#__PURE__*/ new WeakSet(), _runMitigations = /*#__PURE__*/ new WeakSet(), _renderMitigationsResult = /*#__PURE__*/ new WeakSet(), _buildRowsFromDeletedSites = /*#__PURE__*/ new WeakSet(), _checkFeatureState = /*#__PURE__*/ new WeakSet();
var BounceTrackingMitigationsView = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(BounceTrackingMitigationsView, _superClass);
    var _super = _create_super(BounceTrackingMitigationsView);
    function BounceTrackingMitigationsView() {
        _class_call_check(this, BounceTrackingMitigationsView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _renderMainFrameInformation);
        _class_private_method_init(_assert_this_initialized(_this), _renderForceRunButton);
        _class_private_method_init(_assert_this_initialized(_this), _renderDeletedSitesOrNoSitesMessage);
        _class_private_method_init(_assert_this_initialized(_this), _runMitigations);
        _class_private_method_init(_assert_this_initialized(_this), _renderMitigationsResult);
        _class_private_method_init(_assert_this_initialized(_this), _buildRowsFromDeletedSites);
        _class_private_method_init(_assert_this_initialized(_this), _checkFeatureState);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _trackingSites, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _screenStatus, {
            writable: true,
            value: "Result" /* ScreenStatusType.Result */ 
        });
        _class_private_field_init(_assert_this_initialized(_this), _checkedFeature, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _seenButtonClick, {
            writable: true,
            value: false
        });
        return _this;
    }
    _create_class(BounceTrackingMitigationsView, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _bounceTrackingMitigationsView_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]
                ];
                void _class_private_method_get(this, _render, render).call(this);
            }
        }
    ]);
    return BounceTrackingMitigationsView;
}(_LegacyWrapper_LegacyWrapper_WrappableComponent = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__.LegacyWrapper.WrappableComponent);
_define_property(BounceTrackingMitigationsView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.literal(_templateObject()));
function render() {
    return _render1.apply(this, arguments);
}
function _render1() {
    _render1 = _async_to_generator(function() {
        var _, _1, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // clang-format off
                    _ = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render;
                    _1 = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html;
                    _tmp = [
                        _templateObject1(),
                        _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.Report.litTagName,
                        {
                            reportTitle: i18nString(UIStrings.bounceTrackingMitigationsTitle)
                        },
                        _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.pane('bounce-tracking-mitigations')
                    ];
                    return [
                        4,
                        _class_private_method_get(this, _renderMainFrameInformation, renderMainFrameInformation).call(this)
                    ];
                case 1:
                    _.apply(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__, [
                        _1.apply(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__, _tmp.concat([
                            _state.sent(),
                            _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.Report.litTagName
                        ])),
                        _class_private_field_get(this, _shadow),
                        {
                            host: this
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    // clang-format on
    });
    return _render1.apply(this, arguments);
}
function renderMainFrameInformation() {
    return _renderMainFrameInformation1.apply(this, arguments);
}
function _renderMainFrameInformation1() {
    _renderMainFrameInformation1 = _async_to_generator(function() {
        var mitigationsFlagLink;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!!_class_private_field_get(this, _checkedFeature)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        _class_private_method_get(this, _checkFeatureState, checkFeatureState).call(this)
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    if (_class_private_field_get(this, _screenStatus) === "Disabled" /* ScreenStatusType.Disabled */ ) {
                        mitigationsFlagLink = new _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_3__.ChromeLink.ChromeLink();
                        mitigationsFlagLink.href = 'chrome://flags/#bounce-tracking-mitigations';
                        mitigationsFlagLink.textContent = i18nString(UIStrings.featureFlag);
                        // clang-format off
                        return [
                            2,
                            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject2(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getFormatLocalizedString(str_, UIStrings.featureDisabled, {
                                PH1: mitigationsFlagLink
                            }), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName)
                        ];
                    // clang-format on
                    }
                    // clang-format off
                    return [
                        2,
                        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject3(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName, _class_private_method_get(this, _renderForceRunButton, renderForceRunButton).call(this), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName, _class_private_method_get(this, _renderDeletedSitesOrNoSitesMessage, renderDeletedSitesOrNoSitesMessage).call(this), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionDivider.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionDivider.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.link('learn-more').track({
                            click: true
                        }), i18nString(UIStrings.learnMore), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName)
                    ];
            }
        });
    // clang-format on
    });
    return _renderMainFrameInformation1.apply(this, arguments);
}
function renderForceRunButton() {
    var isMitigationRunning = _class_private_field_get(this, _screenStatus) === "Running" /* ScreenStatusType.Running */ ;
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject5(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, i18nString(UIStrings.forceRun), isMitigationRunning, isMitigationRunning, "primary" /* Buttons.Button.Variant.PRIMARY */ , _class_private_method_get(this, _runMitigations, runMitigations), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('force-run').track({
        click: true
    }), isMitigationRunning ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject4(), i18nString(UIStrings.runningMitigations)) : "\n          ".concat(i18nString(UIStrings.forceRun), "\n        "), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName);
// clang-format on
}
function renderDeletedSitesOrNoSitesMessage() {
    if (!_class_private_field_get(this, _seenButtonClick)) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject6());
    }
    if (_class_private_field_get(this, _trackingSites).length === 0) {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject8(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName, _class_private_field_get(this, _screenStatus) === "Running" /* ScreenStatusType.Running */  ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject7(), i18nString(UIStrings.checkingPotentialTrackers)) : "\n          ".concat(i18nString(UIStrings.noPotentialBounceTrackersIdentified), "\n        "), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName);
    // clang-format on
    }
    var gridData = {
        columns: [
            {
                id: 'sites',
                title: i18nString(UIStrings.stateDeletedFor),
                widthWeighting: 10,
                hideable: false,
                visible: true,
                sortable: true
            }
        ],
        rows: _class_private_method_get(this, _buildRowsFromDeletedSites, buildRowsFromDeletedSites).call(this),
        initialSort: {
            columnId: 'sites',
            direction: "ASC" /* DataGrid.DataGridUtils.SortDirection.ASC */ 
        }
    };
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject9(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName, _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController.litTagName, gridData, _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName);
// clang-format on
}
function runMitigations() {
    return _runMitigations1.apply(this, arguments);
}
function _runMitigations1() {
    _runMitigations1 = _async_to_generator(function() {
        var _this, mainTarget, response;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _this = this;
                    mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
                    if (!mainTarget) {
                        return [
                            2
                        ];
                    }
                    _class_private_field_set(this, _seenButtonClick, true);
                    _class_private_field_set(this, _screenStatus, "Running" /* ScreenStatusType.Running */ );
                    void _class_private_method_get(this, _render, render).call(this);
                    return [
                        4,
                        mainTarget.storageAgent().invoke_runBounceTrackingMitigations()
                    ];
                case 1:
                    response = _state.sent();
                    _class_private_field_set(this, _trackingSites, []);
                    response.deletedSites.forEach(function(element) {
                        _class_private_field_get(_this, _trackingSites).push(element);
                    });
                    _class_private_method_get(this, _renderMitigationsResult, renderMitigationsResult).call(this);
                    return [
                        2
                    ];
            }
        });
    });
    return _runMitigations1.apply(this, arguments);
}
function renderMitigationsResult() {
    _class_private_field_set(this, _screenStatus, "Result" /* ScreenStatusType.Result */ );
    void _class_private_method_get(this, _render, render).call(this);
}
function buildRowsFromDeletedSites() {
    var trackingSites = _class_private_field_get(this, _trackingSites);
    return trackingSites.map(function(site) {
        return {
            cells: [
                {
                    columnId: 'sites',
                    value: site
                }
            ]
        };
    });
}
function checkFeatureState() {
    return _checkFeatureState1.apply(this, arguments);
}
function _checkFeatureState1() {
    _checkFeatureState1 = _async_to_generator(function() {
        var mainTarget;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _class_private_field_set(this, _checkedFeature, true);
                    mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
                    if (!mainTarget) {
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        mainTarget.systemInfo().invoke_getFeatureState({
                            featureState: 'DIPS'
                        })
                    ];
                case 1:
                    if (!_state.sent().featureEnabled) {
                        _class_private_field_set(this, _screenStatus, "Disabled" /* ScreenStatusType.Disabled */ );
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return _checkFeatureState1.apply(this, arguments);
}
customElements.define('devtools-bounce-tracking-mitigations-view', BounceTrackingMitigationsView); //# sourceMappingURL=BounceTrackingMitigationsView.js.map


}),
"./panels/application/components/bounceTrackingMitigationsView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\ndevtools-data-grid-controller {\n  border: 1px solid var(--sys-color-divider);\n  margin-top: 0;\n}\n\n.link,\n.devtools-link {\n  color: var(--sys-color-primary);\n  text-decoration: underline;\n  cursor: pointer;\n  outline-offset: 2px;\n}\n\n@media (forced-colors: active) {\n  .link,\n  .devtools-link {\n    color: linktext;\n    text-decoration-color: linktext;\n  }\n}\n\n/*# sourceURL=bounceTrackingMitigationsView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);