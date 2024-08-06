"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_preloading_components_RuleSetGrid_js"], {
"./panels/application/preloading/components/RuleSetGrid.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RuleSetGrid: function() { return RuleSetGrid; },
  i18nString: function() { return i18nString; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _network_forward_forward_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */var _helper_helper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helper/helper.js */ "./panels/application/preloading/helper/helper.js");
/* harmony import */var _PreloadingString_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PreloadingString.js */ "./panels/application/preloading/components/PreloadingString.js");
/* harmony import */var _ruleSetGrid_css_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ruleSetGrid.css.js */ "./panels/application/preloading/components/ruleSetGrid.css.js");
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
        "devtools-resources-ruleset-grid"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n      <div class="ruleset-container"\n      jslog=',
        ">\n        <",
        " .data=",
        ">\n        </",
        ">\n      </div>\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '\n      <button class="link" role="link"\n        @click=',
        "\n        title=",
        "\n        style=",
        "\n        jslog=",
        "\n      >\n        <",
        "\n          .data=",
        "\n          style=",
        "\n        >\n        </",
        ">\n        ",
        "\n      </button>\n    "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '\n      <button class="link" role="link"\n        @click=',
        "\n        title=",
        "\n        style=",
        "\n      >\n        <",
        "\n         .data=",
        "\n          style=",
        "\n        >\n        </",
        ">\n        ",
        "\n      </button>\n    "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        '\n      <button class="link" role="link"\n        @click=',
        "\n        title=",
        "\n        style=",
        "\n        jslog=",
        ">\n        ",
        "\n      </button>\n    "
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "\n      <span\n        style=",
        "\n      >\n        ",
        "\n      </span>\n    "
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "",
        " ",
        ""
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}













var UIStrings = {
    /**
     *@description Column header: Short URL of rule set.
     */ ruleSet: 'Rule set',
    /**
     *@description Column header: Show how many preloads are associated if valid, error counts if invalid.
     */ status: 'Status',
    /**
     *@description button: Title of button to reveal the corresponding request of rule set in Elements panel
     */ buttonClickToRevealInElementsPanel: 'Click to reveal in Elements panel',
    /**
     *@description button: Title of button to reveal the corresponding request of rule set in Network panel
     */ buttonClickToRevealInNetworkPanel: 'Click to reveal in Network panel',
    /**
     *@description Value of status, specifying rule set contains how many errors.
     */ errors: '{errorCount, plural, =1 {# error} other {# errors}}',
    /**
     *@description button: Title of button to reveal preloading attempts with filter by selected rule set
     */ buttonRevealPreloadsAssociatedWithRuleSet: 'Reveal speculative loads associated with this rule set'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/preloading/components/RuleSetGrid.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var _LegacyWrapper_LegacyWrapper_WrappableComponent, _shadow = /*#__PURE__*/ new WeakMap(), _data = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet(), _buildReportRows = /*#__PURE__*/ new WeakSet();
// Grid component to show SpeculationRules rule sets.
var RuleSetGrid = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(RuleSetGrid, _superClass);
    var _super = _create_super(RuleSetGrid);
    function RuleSetGrid() {
        _class_call_check(this, RuleSetGrid);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _buildReportRows);
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
    _create_class(RuleSetGrid, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _ruleSetGrid_css_js__WEBPACK_IMPORTED_MODULE_12__["default"]
                ];
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "update",
            value: function update(data) {
                _class_private_field_set(this, _data, data);
                _class_private_method_get(this, _render, render).call(this);
            }
        }
    ]);
    return RuleSetGrid;
}(_LegacyWrapper_LegacyWrapper_WrappableComponent = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__.LegacyWrapper.WrappableComponent);
_define_property(RuleSetGrid, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.literal(_templateObject()));
function render() {
    if (_class_private_field_get(this, _data) === null) {
        return;
    }
    var reportsGridData = {
        columns: [
            {
                id: 'rule-set',
                title: i18nString(UIStrings.ruleSet),
                widthWeighting: 20,
                hideable: false,
                visible: true,
                sortable: true
            },
            {
                id: 'status',
                title: i18nString(UIStrings.status),
                widthWeighting: 80,
                hideable: false,
                visible: true,
                sortable: true
            }
        ],
        rows: _class_private_method_get(this, _buildReportRows, buildReportRows).call(this),
        striped: true
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject1(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.pane('preloading-rules'), _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController.litTagName, reportsGridData, _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController.litTagName), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
function buildReportRows() {
    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(_class_private_field_get(this, _data));
    var pageURL = _class_private_field_get(this, _data).pageURL;
    return _class_private_field_get(this, _data).rows.map(function(row) {
        return {
            cells: [
                {
                    columnId: 'id',
                    value: row.ruleSet.id
                },
                {
                    columnId: 'rule-set',
                    value: '',
                    renderer: function() {
                        return ruleSetRenderer(row.ruleSet, pageURL);
                    }
                },
                {
                    columnId: 'status',
                    value: row.preloadsStatusSummary,
                    renderer: function(preloadsStatusSummary) {
                        return statusRenderer(preloadsStatusSummary, row.ruleSet);
                    }
                }
            ]
        };
    });
}
customElements.define('devtools-resources-ruleset-grid', RuleSetGrid);
function ruleSetRenderer(ruleSet, pageURL) {
    function ruleSetRendererInnerDocument(ruleSet, location) {
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(ruleSet.backendNodeId);
        var revealSpeculationRulesInElements = function() {
            var _ref = _async_to_generator(function() {
                var target;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(ruleSet.backendNodeId);
                            target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().scopeTarget();
                            if (target === null) {
                                return [
                                    2
                                ];
                            }
                            return [
                                4,
                                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DeferredDOMNode(target, ruleSet.backendNodeId))
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            });
            return function revealSpeculationRulesInElements() {
                return _ref.apply(this, arguments);
            };
        }();
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject2(), revealSpeculationRulesInElements, i18nString(UIStrings.buttonClickToRevealInElementsPanel), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.styleMap({
            border: 'none',
            background: 'none',
            color: 'var(--icon-link)',
            cursor: 'pointer',
            'text-decoration': 'underline',
            'padding-inline-start': '0',
            'padding-inline-end': '0'
        }), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('reveal-in-elements').track({
            click: true
        }), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName, {
            iconName: 'code-circle',
            color: 'var(--icon-link)',
            width: '16px',
            height: '16px'
        }, _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.styleMap({
            'vertical-align': 'sub'
        }), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName, location);
    // clang-format on
    }
    function ruleSetRendererOutOfDocument(ruleSet, location) {
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(ruleSet.url);
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(ruleSet.requestId);
        var revealSpeculationRulesInNetwork = function() {
            var _ref = _async_to_generator(function() {
                var _SDK_TargetManager_TargetManager_instance_scopeTarget_model, _SDK_TargetManager_TargetManager_instance_scopeTarget, request, requestLocation;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(ruleSet.requestId);
                            request = ((_SDK_TargetManager_TargetManager_instance_scopeTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().scopeTarget()) === null || _SDK_TargetManager_TargetManager_instance_scopeTarget === void 0 ? void 0 : (_SDK_TargetManager_TargetManager_instance_scopeTarget_model = _SDK_TargetManager_TargetManager_instance_scopeTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NetworkManager)) === null || _SDK_TargetManager_TargetManager_instance_scopeTarget_model === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_scopeTarget_model.requestForId(ruleSet.requestId)) || null;
                            if (request === null) {
                                return [
                                    2
                                ];
                            }
                            requestLocation = _network_forward_forward_js__WEBPACK_IMPORTED_MODULE_9__.UIRequestLocation.UIRequestLocation.tab(request, "preview" /* NetworkForward.UIRequestLocation.UIRequestTabs.Preview */ , {
                                clearFilter: false
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
            return function revealSpeculationRulesInNetwork() {
                return _ref.apply(this, arguments);
            };
        }();
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject3(), revealSpeculationRulesInNetwork, i18nString(UIStrings.buttonClickToRevealInNetworkPanel), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.styleMap({
            border: 'none',
            background: 'none',
            color: 'var(--icon-link)',
            cursor: 'pointer',
            'text-decoration': 'underline',
            'padding-inline-start': '0',
            'padding-inline-end': '0'
        }), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName, {
            iconName: 'arrow-up-down-circle',
            color: 'var(--icon-link)',
            width: '16px',
            height: '16px'
        }, _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.styleMap({
            'vertical-align': 'sub'
        }), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName, location);
    // clang-format on
    }
    var location = _PreloadingString_js__WEBPACK_IMPORTED_MODULE_11__.ruleSetLocationShort(ruleSet, pageURL);
    if (ruleSet.backendNodeId !== undefined) {
        return ruleSetRendererInnerDocument(ruleSet, location);
    }
    if (ruleSet.url !== undefined && ruleSet.requestId) {
        return ruleSetRendererOutOfDocument(ruleSet, location);
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject4(), location);
}
function statusRenderer(preloadsStatusSummary, ruleSet) {
    function counts(preloadsStatusSummary, ruleSet) {
        var revealAttemptViewWithFilter = function() {
            var _ref = _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(new _helper_helper_js__WEBPACK_IMPORTED_MODULE_10__.PreloadingForward.AttemptViewWithFilter(ruleSet.id))
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            });
            return function revealAttemptViewWithFilter() {
                return _ref.apply(this, arguments);
            };
        }();
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject5(), revealAttemptViewWithFilter, i18nString(UIStrings.buttonRevealPreloadsAssociatedWithRuleSet), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.styleMap({
            color: 'var(--sys-color-primary)',
            'text-decoration': 'underline',
            cursor: 'pointer',
            border: 'none',
            background: 'none',
            'padding-inline-start': '0',
            'padding-inline-end': '0'
        }), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('reveal-preloads').track({
            click: true
        }), preloadsStatusSummary);
    // clang-format on
    }
    function errors() {
        var nErrors = i18nString(UIStrings.errors, {
            errorCount: 1
        });
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject6(), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.styleMap({
            color: 'var(--sys-color-error)'
        }), nErrors);
    }
    switch(ruleSet.errorType){
        case undefined:
            return counts(preloadsStatusSummary, ruleSet);
        case "SourceIsNotJsonObject" /* Protocol.Preload.RuleSetErrorType.SourceIsNotJsonObject */ :
            return errors();
        case "InvalidRulesSkipped" /* Protocol.Preload.RuleSetErrorType.InvalidRulesSkipped */ :
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject7(), errors(), counts(preloadsStatusSummary, ruleSet));
    }
} //# sourceMappingURL=RuleSetGrid.js.map


}),
"./panels/application/preloading/components/ruleSetGrid.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  overflow: auto;\n  height: 100%;\n}\n\n.ruleset-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\ndevtools-data-grid-controller {\n  border: 1px solid var(--sys-color-divider);\n}\n\n.inline-icon {\n  vertical-align: text-bottom;\n}\n\n/*# sourceURL=ruleSetGrid.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);