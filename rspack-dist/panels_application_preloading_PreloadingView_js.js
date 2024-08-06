"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_preloading_PreloadingView_js"], {
"./panels/application/preloading/PreloadingView.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PreloadingAttemptView: function() { return PreloadingAttemptView; },
  PreloadingRuleSetView: function() { return PreloadingRuleSetView; },
  PreloadingSummaryView: function() { return PreloadingSummaryView; },
  PreloadingWarningsView: function() { return PreloadingWarningsView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _ui_components_split_view_split_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/split_view/split_view.js */ "./ui/components/split_view/split_view.js");
/* harmony import */var _ui_legacy_emptyWidget_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/legacy/emptyWidget.css.js */ "./ui/legacy/emptyWidget.css.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/preloading/components/components.js");
/* harmony import */var _preloadingView_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./preloadingView.css.js */ "./panels/application/preloading/preloadingView.css.js");
/* harmony import */var _preloadingViewDropDown_css_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./preloadingViewDropDown.css.js */ "./panels/application/preloading/preloadingViewDropDown.css.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_components_js__WEBPACK_IMPORTED_MODULE_9__]);
_components_components_js__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
        "\n        <",
        " .horizontal=",
        ' style="--min-sidebar-size: 0px">\n          <div slot="main" class="overflow-auto" style="height: 100%">\n            ',
        '\n          </div>\n          <div slot="sidebar" class="overflow-auto" style="height: 100%"\n          jslog=',
        ">\n            ",
        "\n          </div>\n        </",
        ">"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n        <",
        " .horizontal=",
        ' style="--min-sidebar-size: 0px">\n          <div slot="main" class="overflow-auto" style="height: 100%">\n            ',
        '\n          </div>\n          <div slot="sidebar" class="overflow-auto" style="height: 100%">\n            ',
        "\n          </div>\n        </",
        ">"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}






// eslint-disable-next-line rulesdir/es_modules_import







var UIStrings = {
    /**
     *@description DropDown title for filtering preloading attempts by rule set
     */ filterFilterByRuleSet: 'Filter by rule set',
    /**
     *@description DropDown text for filtering preloading attempts by rule set: No filter
     */ filterAllPreloads: 'All speculative loads',
    /**
     *@description Text in grid: Rule set is valid
     */ validityValid: 'Valid',
    /**
     *@description Text in grid: Rule set must be a valid JSON object
     */ validityInvalid: 'Invalid',
    /**
     *@description Text in grid: Rule set contains invalid rules and they are ignored
     */ validitySomeRulesInvalid: 'Some rules invalid',
    /**
     *@description Text in grid and details: Preloading attempt is not yet triggered.
     */ statusNotTriggered: 'Not triggered',
    /**
     *@description Text in grid and details: Preloading attempt is eligible but pending.
     */ statusPending: 'Pending',
    /**
     *@description Text in grid and details: Preloading is running.
     */ statusRunning: 'Running',
    /**
     *@description Text in grid and details: Preloading finished and the result is ready for the next navigation.
     */ statusReady: 'Ready',
    /**
     *@description Text in grid and details: Ready, then used.
     */ statusSuccess: 'Success',
    /**
     *@description Text in grid and details: Preloading failed.
     */ statusFailure: 'Failure'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/preloading/PreloadingView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
// Used for selector, indicating no filter is specified.
var AllRuleSetRootId = Symbol('AllRuleSetRootId');
var PreloadingUIUtils = /*#__PURE__*/ function() {
    "use strict";
    function PreloadingUIUtils() {
        _class_call_check(this, PreloadingUIUtils);
    }
    _create_class(PreloadingUIUtils, null, [
        {
            key: "status",
            value: function status(status) {
                // See content/public/browser/preloading.h PreloadingAttemptOutcome.
                switch(status){
                    case "NotTriggered" /* SDK.PreloadingModel.PreloadingStatus.NotTriggered */ :
                        return i18nString(UIStrings.statusNotTriggered);
                    case "Pending" /* SDK.PreloadingModel.PreloadingStatus.Pending */ :
                        return i18nString(UIStrings.statusPending);
                    case "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ :
                        return i18nString(UIStrings.statusRunning);
                    case "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */ :
                        return i18nString(UIStrings.statusReady);
                    case "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */ :
                        return i18nString(UIStrings.statusSuccess);
                    case "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ :
                        return i18nString(UIStrings.statusFailure);
                    // NotSupported is used to handle unreachable case. For example,
                    // there is no code path for
                    // PreloadingTriggeringOutcome::kTriggeredButPending in prefetch,
                    // which is mapped to NotSupported. So, we regard it as an
                    // internal error.
                    case "NotSupported" /* SDK.PreloadingModel.PreloadingStatus.NotSupported */ :
                        return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Internal error');
                }
            }
        },
        {
            key: "preloadsStatusSummary",
            value: function preloadsStatusSummary(countsByStatus) {
                var _this = this;
                var LIST = [
                    "NotTriggered" /* SDK.PreloadingModel.PreloadingStatus.NotTriggered */ ,
                    "Pending" /* SDK.PreloadingModel.PreloadingStatus.Pending */ ,
                    "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ ,
                    "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */ ,
                    "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */ ,
                    "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ 
                ];
                return LIST.filter(function(status) {
                    return ((countsByStatus === null || countsByStatus === void 0 ? void 0 : countsByStatus.get(status)) || 0) > 0;
                }).map(function(status) {
                    return ((countsByStatus === null || countsByStatus === void 0 ? void 0 : countsByStatus.get(status)) || 0) + ' ' + _this.status(status);
                }).join(', ').toLocaleLowerCase();
            }
        },
        {
            key: "validity",
            value: // Summary of error of rule set shown in grid.
            function validity(param) {
                var errorType = param.errorType;
                switch(errorType){
                    case undefined:
                        return i18nString(UIStrings.validityValid);
                    case "SourceIsNotJsonObject" /* Protocol.Preload.RuleSetErrorType.SourceIsNotJsonObject */ :
                        return i18nString(UIStrings.validityInvalid);
                    case "InvalidRulesSkipped" /* Protocol.Preload.RuleSetErrorType.InvalidRulesSkipped */ :
                        return i18nString(UIStrings.validitySomeRulesInvalid);
                }
            }
        },
        {
            key: "location",
            value: // Where a rule set came from, shown in grid.
            function location(ruleSet) {
                if (ruleSet.backendNodeId !== undefined) {
                    return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('<script>');
                }
                if (ruleSet.url !== undefined) {
                    return ruleSet.url;
                }
                throw Error('unreachable');
            }
        },
        {
            key: "processLocalId",
            value: function processLocalId(id) {
                // RuleSetId is form of '<processId>.<processLocalId>'
                var index = id.indexOf('.');
                return index === -1 ? id : id.slice(index + 1);
            }
        },
        {
            key: "ruleSetLocationShort",
            value: // TODO(https://crbug.com/1410709): Move
            // front_end/panels/application/preloading/components/PreloadingString.ts
            // to
            // front_end/panels/application/preloading/helper/PreloadingString.ts
            // and use PreloadingString.ruleSetLocationShort.
            function ruleSetLocationShort(ruleSet, pageURL) {
                var url = ruleSet.url === undefined ? pageURL : ruleSet.url;
                return _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.ResourceUtils.displayNameForURL(url);
            }
        }
    ]);
    return PreloadingUIUtils;
}();
function pageURL() {
    var _SDK_TargetManager_TargetManager_instance_scopeTarget;
    return ((_SDK_TargetManager_TargetManager_instance_scopeTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().scopeTarget()) === null || _SDK_TargetManager_TargetManager_instance_scopeTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_scopeTarget.inspectedURL()) || '';
}
var PreloadingRuleSetView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(PreloadingRuleSetView, _UI_Widget_VBox);
    var _super = _create_super(PreloadingRuleSetView);
    function PreloadingRuleSetView(model) {
        _class_call_check(this, PreloadingRuleSetView);
        var _this;
        _this = _super.call(this, /* isWebComponent */ true, /* delegatesFocus */ false);
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "focusedRuleSetId", null);
        _define_property(_assert_this_initialized(_this), "focusedPreloadingAttemptId", null);
        _define_property(_assert_this_initialized(_this), "warningsContainer", void 0);
        _define_property(_assert_this_initialized(_this), "warningsView", new PreloadingWarningsView());
        _define_property(_assert_this_initialized(_this), "hsplit", void 0);
        _define_property(_assert_this_initialized(_this), "ruleSetGrid", new _components_components_js__WEBPACK_IMPORTED_MODULE_9__.RuleSetGrid.RuleSetGrid());
        _define_property(_assert_this_initialized(_this), "ruleSetDetails", new _components_components_js__WEBPACK_IMPORTED_MODULE_9__.RuleSetDetailsView.RuleSetDetailsView());
        _this.model = model;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addScopeChangeListener(_this.onScopeChange.bind(_assert_this_initialized(_this)));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel, "ModelUpdated" /* SDK.PreloadingModel.Events.ModelUpdated */ , _this.render, _assert_this_initialized(_this), {
            scoped: true
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel, "WarningsUpdated" /* SDK.PreloadingModel.Events.WarningsUpdated */ , _this.warningsView.onWarningsUpdated, _this.warningsView, {
            scoped: true
        });
        // this (VBox)
        //   +- warningsContainer
        //        +- PreloadingWarningsView
        //   +- hsplit
        //        +- leftContainer
        //             +- RuleSetGrid
        //        +- rightContainer
        //             +- RuleSetDetailsView
        //
        // - If an row of RuleSetGrid selected, RuleSetDetailsView shows details of it.
        // - If not, RuleSetDetailsView hides.
        _this.warningsContainer = document.createElement('div');
        _this.warningsContainer.classList.add('flex-none');
        _this.contentElement.insertBefore(_this.warningsContainer, _this.contentElement.firstChild);
        _this.warningsView.show(_this.warningsContainer);
        _this.ruleSetGrid.addEventListener('cellfocused', _this.onRuleSetsGridCellFocused.bind(_assert_this_initialized(_this)));
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject(), _ui_components_split_view_split_view_js__WEBPACK_IMPORTED_MODULE_4__.SplitView.SplitView.litTagName, true, _this.ruleSetGrid, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.section('rule-set-details'), _this.ruleSetDetails, _ui_components_split_view_split_view_js__WEBPACK_IMPORTED_MODULE_4__.SplitView.SplitView.litTagName), _this.contentElement, {
            host: _assert_this_initialized(_this)
        });
        _this.hsplit = _this.contentElement.querySelector('devtools-split-view');
        return _this;
    }
    _create_class(PreloadingRuleSetView, [
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(PreloadingRuleSetView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _ui_legacy_emptyWidget_css_js__WEBPACK_IMPORTED_MODULE_5__["default"],
                    _preloadingView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
                ]);
                this.warningsView.wasShown();
                this.render();
            }
        },
        {
            key: "onScopeChange",
            value: function onScopeChange() {
                var _SDK_TargetManager_TargetManager_instance_scopeTarget;
                var model = (_SDK_TargetManager_TargetManager_instance_scopeTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().scopeTarget()) === null || _SDK_TargetManager_TargetManager_instance_scopeTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_scopeTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel);
                (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(model);
                this.model = model;
                this.render();
            }
        },
        {
            key: "revealRuleSet",
            value: function revealRuleSet(revealInfo) {
                this.focusedRuleSetId = revealInfo.ruleSetId;
                this.render();
            }
        },
        {
            key: "updateRuleSetDetails",
            value: function updateRuleSetDetails() {
                var id = this.focusedRuleSetId;
                var ruleSet = id === null ? null : this.model.getRuleSetById(id);
                this.ruleSetDetails.data = ruleSet;
                if (ruleSet === null) {
                    this.hsplit.style.setProperty('--current-main-area-size', '100%');
                } else {
                    this.hsplit.style.setProperty('--current-main-area-size', '60%');
                }
            }
        },
        {
            key: "render",
            value: function render() {
                // Update rule sets grid
                var countsByRuleSetId = this.model.getPreloadCountsByRuleSetId();
                var ruleSetRows = this.model.getAllRuleSets().map(function(param) {
                    var id = param.id, value = param.value;
                    var countsByStatus = countsByRuleSetId.get(id) || new Map();
                    return {
                        ruleSet: value,
                        preloadsStatusSummary: PreloadingUIUtils.preloadsStatusSummary(countsByStatus)
                    };
                });
                this.ruleSetGrid.update({
                    rows: ruleSetRows,
                    pageURL: pageURL()
                });
                this.updateRuleSetDetails();
            }
        },
        {
            key: "onRuleSetsGridCellFocused",
            value: function onRuleSetsGridCellFocused(event) {
                var _focusedEvent_data_row_cells_find;
                var focusedEvent = event;
                this.focusedRuleSetId = (_focusedEvent_data_row_cells_find = focusedEvent.data.row.cells.find(function(cell) {
                    return cell.columnId === 'id';
                })) === null || _focusedEvent_data_row_cells_find === void 0 ? void 0 : _focusedEvent_data_row_cells_find.value;
                this.render();
            }
        },
        {
            key: "getInfobarContainerForTest",
            value: function getInfobarContainerForTest() {
                return this.warningsView.contentElement;
            }
        },
        {
            key: "getRuleSetGridForTest",
            value: function getRuleSetGridForTest() {
                return this.ruleSetGrid;
            }
        },
        {
            key: "getRuleSetDetailsForTest",
            value: function getRuleSetDetailsForTest() {
                return this.ruleSetDetails;
            }
        }
    ]);
    return PreloadingRuleSetView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox);
var PreloadingAttemptView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(PreloadingAttemptView, _UI_Widget_VBox);
    var _super = _create_super(PreloadingAttemptView);
    function PreloadingAttemptView(model) {
        _class_call_check(this, PreloadingAttemptView);
        var _this;
        _this = _super.call(this, /* isWebComponent */ true, /* delegatesFocus */ false);
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "focusedPreloadingAttemptId", null);
        _define_property(_assert_this_initialized(_this), "warningsContainer", void 0);
        _define_property(_assert_this_initialized(_this), "warningsView", new PreloadingWarningsView());
        _define_property(_assert_this_initialized(_this), "preloadingGrid", new _components_components_js__WEBPACK_IMPORTED_MODULE_9__.PreloadingGrid.PreloadingGrid());
        _define_property(_assert_this_initialized(_this), "preloadingDetails", new _components_components_js__WEBPACK_IMPORTED_MODULE_9__.PreloadingDetailsReportView.PreloadingDetailsReportView());
        _define_property(_assert_this_initialized(_this), "ruleSetSelector", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.pane('preloading-speculations')));
        _this.model = model;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addScopeChangeListener(_this.onScopeChange.bind(_assert_this_initialized(_this)));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel, "ModelUpdated" /* SDK.PreloadingModel.Events.ModelUpdated */ , _this.render, _assert_this_initialized(_this), {
            scoped: true
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel, "WarningsUpdated" /* SDK.PreloadingModel.Events.WarningsUpdated */ , _this.warningsView.onWarningsUpdated, _this.warningsView, {
            scoped: true
        });
        // this (VBox)
        //   +- warningsContainer
        //        +- PreloadingWarningsView
        //   +- VBox
        //        +- toolbar (filtering)
        //        +- hsplit
        //             +- leftContainer
        //                  +- PreloadingGrid
        //             +- rightContainer
        //                  +- PreloadingDetailsReportView
        //
        // - If an row of PreloadingGrid selected, PreloadingDetailsReportView shows details of it.
        // - If not, PreloadingDetailsReportView shows some messages.
        _this.warningsContainer = document.createElement('div');
        _this.warningsContainer.classList.add('flex-none');
        _this.contentElement.insertBefore(_this.warningsContainer, _this.contentElement.firstChild);
        _this.warningsView.show(_this.warningsContainer);
        var vbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox();
        var toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('preloading-toolbar', vbox.contentElement);
        toolbar.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.toolbar()));
        _this.ruleSetSelector = new PreloadingRuleSetSelector(function() {
            return _this.render();
        });
        toolbar.appendToolbarItem(_this.ruleSetSelector.item());
        _this.preloadingGrid.addEventListener('cellfocused', _this.onPreloadingGridCellFocused.bind(_assert_this_initialized(_this)));
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject1(), _ui_components_split_view_split_view_js__WEBPACK_IMPORTED_MODULE_4__.SplitView.SplitView.litTagName, true, _this.preloadingGrid, _this.preloadingDetails, _ui_components_split_view_split_view_js__WEBPACK_IMPORTED_MODULE_4__.SplitView.SplitView.litTagName), vbox.contentElement, {
            host: _assert_this_initialized(_this)
        });
        vbox.show(_this.contentElement);
        return _this;
    }
    _create_class(PreloadingAttemptView, [
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(PreloadingAttemptView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _ui_legacy_emptyWidget_css_js__WEBPACK_IMPORTED_MODULE_5__["default"],
                    _preloadingView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
                ]);
                this.warningsView.wasShown();
                this.render();
            }
        },
        {
            key: "onScopeChange",
            value: function onScopeChange() {
                var _SDK_TargetManager_TargetManager_instance_scopeTarget;
                var model = (_SDK_TargetManager_TargetManager_instance_scopeTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().scopeTarget()) === null || _SDK_TargetManager_TargetManager_instance_scopeTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_scopeTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel);
                (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(model);
                this.model = model;
                this.render();
            }
        },
        {
            key: "setFilter",
            value: function setFilter(filter) {
                var id = filter.ruleSetId;
                if (id !== null && this.model.getRuleSetById(id) === undefined) {
                    id = null;
                }
                this.ruleSetSelector.select(id);
            }
        },
        {
            key: "updatePreloadingDetails",
            value: function updatePreloadingDetails() {
                var _this = this;
                var id = this.focusedPreloadingAttemptId;
                var preloadingAttempt = id === null ? null : this.model.getPreloadingAttemptById(id);
                if (preloadingAttempt === null) {
                    this.preloadingDetails.data = null;
                } else {
                    var ruleSets = preloadingAttempt.ruleSetIds.map(function(id) {
                        return _this.model.getRuleSetById(id);
                    }).filter(function(x) {
                        return x !== null;
                    });
                    this.preloadingDetails.data = {
                        preloadingAttempt: preloadingAttempt,
                        ruleSets: ruleSets,
                        pageURL: pageURL()
                    };
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                // Update preloaidng grid
                var filteringRuleSetId = this.ruleSetSelector.getSelected();
                var rows = this.model.getPreloadingAttempts(filteringRuleSetId).map(function(param) {
                    var id = param.id, value = param.value;
                    var attempt = value;
                    var ruleSets = attempt.ruleSetIds.flatMap(function(id) {
                        var ruleSet = _this.model.getRuleSetById(id);
                        return ruleSet === null ? [] : [
                            ruleSet
                        ];
                    });
                    return {
                        id: id,
                        attempt: attempt,
                        ruleSets: ruleSets
                    };
                });
                this.preloadingGrid.update({
                    rows: rows,
                    pageURL: pageURL()
                });
                this.updatePreloadingDetails();
            }
        },
        {
            key: "onPreloadingGridCellFocused",
            value: function onPreloadingGridCellFocused(event) {
                var _focusedEvent_data_row_cells_find;
                var focusedEvent = event;
                this.focusedPreloadingAttemptId = (_focusedEvent_data_row_cells_find = focusedEvent.data.row.cells.find(function(cell) {
                    return cell.columnId === 'id';
                })) === null || _focusedEvent_data_row_cells_find === void 0 ? void 0 : _focusedEvent_data_row_cells_find.value;
                this.render();
            }
        },
        {
            key: "getRuleSetSelectorToolbarItemForTest",
            value: function getRuleSetSelectorToolbarItemForTest() {
                return this.ruleSetSelector.item();
            }
        },
        {
            key: "getPreloadingGridForTest",
            value: function getPreloadingGridForTest() {
                return this.preloadingGrid;
            }
        },
        {
            key: "getPreloadingDetailsForTest",
            value: function getPreloadingDetailsForTest() {
                return this.preloadingDetails;
            }
        },
        {
            key: "selectRuleSetOnFilterForTest",
            value: function selectRuleSetOnFilterForTest(id) {
                this.ruleSetSelector.select(id);
            }
        }
    ]);
    return PreloadingAttemptView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox);
var PreloadingSummaryView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(PreloadingSummaryView, _UI_Widget_VBox);
    var _super = _create_super(PreloadingSummaryView);
    function PreloadingSummaryView(model) {
        _class_call_check(this, PreloadingSummaryView);
        var _this;
        _this = _super.call(this, /* isWebComponent */ true, /* delegatesFocus */ false);
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "warningsContainer", void 0);
        _define_property(_assert_this_initialized(_this), "warningsView", new PreloadingWarningsView());
        _define_property(_assert_this_initialized(_this), "usedPreloading", new _components_components_js__WEBPACK_IMPORTED_MODULE_9__.UsedPreloadingView.UsedPreloadingView());
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.pane('speculative-loads')));
        _this.model = model;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addScopeChangeListener(_this.onScopeChange.bind(_assert_this_initialized(_this)));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel, "ModelUpdated" /* SDK.PreloadingModel.Events.ModelUpdated */ , _this.render, _assert_this_initialized(_this), {
            scoped: true
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel, "WarningsUpdated" /* SDK.PreloadingModel.Events.WarningsUpdated */ , _this.warningsView.onWarningsUpdated, _this.warningsView, {
            scoped: true
        });
        _this.warningsContainer = document.createElement('div');
        _this.warningsContainer.classList.add('flex-none');
        _this.contentElement.insertBefore(_this.warningsContainer, _this.contentElement.firstChild);
        _this.warningsView.show(_this.warningsContainer);
        var usedPreloadingContainer = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox();
        usedPreloadingContainer.contentElement.appendChild(_this.usedPreloading);
        usedPreloadingContainer.show(_this.contentElement);
        return _this;
    }
    _create_class(PreloadingSummaryView, [
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(PreloadingSummaryView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _ui_legacy_emptyWidget_css_js__WEBPACK_IMPORTED_MODULE_5__["default"],
                    _preloadingView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
                ]);
                this.warningsView.wasShown();
                this.render();
            }
        },
        {
            key: "onScopeChange",
            value: function onScopeChange() {
                var _SDK_TargetManager_TargetManager_instance_scopeTarget;
                var model = (_SDK_TargetManager_TargetManager_instance_scopeTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().scopeTarget()) === null || _SDK_TargetManager_TargetManager_instance_scopeTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_scopeTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel);
                (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(model);
                this.model = model;
                this.render();
            }
        },
        {
            key: "render",
            value: function render() {
                var _SDK_TargetManager_TargetManager_instance_scopeTarget;
                this.usedPreloading.data = {
                    pageURL: ((_SDK_TargetManager_TargetManager_instance_scopeTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().scopeTarget()) === null || _SDK_TargetManager_TargetManager_instance_scopeTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_scopeTarget.inspectedURL()) || '',
                    previousAttempts: this.model.getPreloadingAttemptsOfPreviousPage().map(function(param) {
                        var value = param.value;
                        return value;
                    }),
                    currentAttempts: this.model.getPreloadingAttempts(null).map(function(param) {
                        var value = param.value;
                        return value;
                    })
                };
            }
        },
        {
            key: "getUsedPreloadingForTest",
            value: function getUsedPreloadingForTest() {
                return this.usedPreloading;
            }
        }
    ]);
    return PreloadingSummaryView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox);
var PreloadingRuleSetSelector = /*#__PURE__*/ function() {
    "use strict";
    function PreloadingRuleSetSelector(onSelectionChanged) {
        _class_call_check(this, PreloadingRuleSetSelector);
        var _SDK_TargetManager_TargetManager_instance_scopeTarget;
        _define_property(this, "model", void 0);
        _define_property(this, "onSelectionChanged", function() {});
        _define_property(this, "toolbarItem", void 0);
        _define_property(this, "listModel", void 0);
        _define_property(this, "dropDown", void 0);
        var model = (_SDK_TargetManager_TargetManager_instance_scopeTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().scopeTarget()) === null || _SDK_TargetManager_TargetManager_instance_scopeTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_scopeTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel);
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(model);
        this.model = model;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addScopeChangeListener(this.onScopeChange.bind(this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel, "ModelUpdated" /* SDK.PreloadingModel.Events.ModelUpdated */ , this.onModelUpdated, this, {
            scoped: true
        });
        this.listModel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ListModel.ListModel();
        this.dropDown = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.SoftDropDown.SoftDropDown(this.listModel, this);
        this.dropDown.setRowHeight(36);
        this.dropDown.setPlaceholderText(i18nString(UIStrings.filterAllPreloads));
        this.toolbarItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarItem(this.dropDown.element);
        this.toolbarItem.setTitle(i18nString(UIStrings.filterFilterByRuleSet));
        this.toolbarItem.element.classList.add('toolbar-has-dropdown');
        this.toolbarItem.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('filter-by-rule-set').track({
            click: true
        })));
        // Initializes `listModel` and `dropDown` using data of the model.
        this.onModelUpdated();
        // Prevents emitting onSelectionChanged on the first call of `this.onModelUpdated()` for initialization.
        this.onSelectionChanged = onSelectionChanged;
    }
    _create_class(PreloadingRuleSetSelector, [
        {
            key: "onScopeChange",
            value: function onScopeChange() {
                var _SDK_TargetManager_TargetManager_instance_scopeTarget;
                var model = (_SDK_TargetManager_TargetManager_instance_scopeTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().scopeTarget()) === null || _SDK_TargetManager_TargetManager_instance_scopeTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_scopeTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel);
                (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(model);
                this.model = model;
                this.onModelUpdated();
            }
        },
        {
            key: "onModelUpdated",
            value: function onModelUpdated() {
                var ids = this.model.getAllRuleSets().map(function(param) {
                    var id = param.id;
                    return id;
                });
                var items = [
                    AllRuleSetRootId
                ].concat(_to_consumable_array(ids));
                var selected = this.dropDown.getSelectedItem();
                this.listModel.replaceAll(items);
                if (selected === null) {
                    this.dropDown.selectItem(AllRuleSetRootId);
                } else {
                    this.dropDown.selectItem(selected);
                }
                this.updateWidth(items);
            }
        },
        {
            // Updates the width for the DropDown element.
            key: "updateWidth",
            value: function updateWidth(items) {
                var _this = this;
                var _Math;
                // Width set by `UI.SoftDropDown`.
                var DEFAULT_WIDTH = 315;
                var urlLengths = items.map(function(x) {
                    return _this.titleFor(x).length;
                });
                var maxLength = (_Math = Math).max.apply(_Math, _to_consumable_array(urlLengths));
                var width = Math.min(maxLength * 6 + 16, DEFAULT_WIDTH);
                this.dropDown.setWidth(width);
            }
        },
        {
            // AllRuleSetRootId is used within the selector to indicate the root item. When interacting with PreloadingModel,
            // it should be translated to null.
            key: "translateItemIdToRuleSetId",
            value: function translateItemIdToRuleSetId(id) {
                if (id === AllRuleSetRootId) {
                    return null;
                }
                return id;
            }
        },
        {
            key: "getSelected",
            value: function getSelected() {
                var selectItem = this.dropDown.getSelectedItem();
                if (selectItem === null) {
                    return null;
                }
                return this.translateItemIdToRuleSetId(selectItem);
            }
        },
        {
            key: "select",
            value: function select(id) {
                this.dropDown.selectItem(id);
            }
        },
        {
            // Method for UI.Toolbar.Provider
            key: "item",
            value: function item() {
                return this.toolbarItem;
            }
        },
        {
            // Method for UI.SoftDropDown.Delegate<Protocol.Preload.RuleSetId|typeof AllRuleSetRootId>
            key: "titleFor",
            value: function titleFor(id) {
                var convertedId = this.translateItemIdToRuleSetId(id);
                if (convertedId === null) {
                    return i18nString(UIStrings.filterAllPreloads);
                }
                var ruleSet = this.model.getRuleSetById(convertedId);
                if (ruleSet === null) {
                    return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Internal error');
                }
                return PreloadingUIUtils.ruleSetLocationShort(ruleSet, pageURL());
            }
        },
        {
            key: "subtitleFor",
            value: function subtitleFor(id) {
                var convertedId = this.translateItemIdToRuleSetId(id);
                var countsByStatus = this.model.getPreloadCountsByRuleSetId().get(convertedId) || new Map();
                return PreloadingUIUtils.preloadsStatusSummary(countsByStatus);
            }
        },
        {
            // Method for UI.SoftDropDown.Delegate<Protocol.Preload.RuleSetId|typeof AllRuleSetRootId>
            key: "createElementForItem",
            value: function createElementForItem(id) {
                var element = document.createElement('div');
                var shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createShadowRootWithCoreStyles(element, {
                    cssFile: [
                        _preloadingViewDropDown_css_js__WEBPACK_IMPORTED_MODULE_11__["default"]
                    ],
                    delegatesFocus: undefined
                });
                var title = shadowRoot.createChild('div', 'title');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(title, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.trimEndWithMaxLength(this.titleFor(id), 100));
                var subTitle = shadowRoot.createChild('div', 'subtitle');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(subTitle, this.subtitleFor(id));
                return element;
            }
        },
        {
            // Method for UI.SoftDropDown.Delegate<Protocol.Preload.RuleSetId|typeof AllRuleSetRootId>
            key: "isItemSelectable",
            value: function isItemSelectable(_id) {
                return true;
            }
        },
        {
            // Method for UI.SoftDropDown.Delegate<Protocol.Preload.RuleSetId|typeof AllRuleSetRootId>
            key: "itemSelected",
            value: function itemSelected(_id) {
                this.onSelectionChanged();
            }
        },
        {
            // Method for UI.SoftDropDown.Delegate<Protocol.Preload.RuleSetId|typeof AllRuleSetRootId>
            key: "highlightedItemChanged",
            value: function highlightedItemChanged(_from, _to, _fromElement, _toElement) {}
        }
    ]);
    return PreloadingRuleSetSelector;
}();
var PreloadingWarningsView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(PreloadingWarningsView, _UI_Widget_VBox);
    var _super = _create_super(PreloadingWarningsView);
    function PreloadingWarningsView() {
        _class_call_check(this, PreloadingWarningsView);
        var _this;
        _this = _super.call(this, /* isWebComponent */ false, /* delegatesFocus */ false);
        _define_property(_assert_this_initialized(_this), "infobar", new _components_components_js__WEBPACK_IMPORTED_MODULE_9__.PreloadingDisabledInfobar.PreloadingDisabledInfobar());
        return _this;
    }
    _create_class(PreloadingWarningsView, [
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(PreloadingWarningsView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _ui_legacy_emptyWidget_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
                this.contentElement.append(this.infobar);
            }
        },
        {
            key: "onWarningsUpdated",
            value: function onWarningsUpdated(args) {
                this.infobar.data = args.data;
            }
        }
    ]);
    return PreloadingWarningsView;
} //# sourceMappingURL=PreloadingView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./panels/application/preloading/components/components.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MismatchedPreloadingGrid: function() { return /* reexport module object */ _MismatchedPreloadingGrid_js__WEBPACK_IMPORTED_MODULE_0__; },
  PreloadingDetailsReportView: function() { return /* reexport module object */ _PreloadingDetailsReportView_js__WEBPACK_IMPORTED_MODULE_1__; },
  PreloadingDisabledInfobar: function() { return /* reexport module object */ _PreloadingDisabledInfobar_js__WEBPACK_IMPORTED_MODULE_2__; },
  PreloadingGrid: function() { return /* reexport module object */ _PreloadingGrid_js__WEBPACK_IMPORTED_MODULE_3__; },
  PreloadingMismatchedHeadersGrid: function() { return /* reexport module object */ _PreloadingMismatchedHeadersGrid_js__WEBPACK_IMPORTED_MODULE_4__; },
  RuleSetDetailsView: function() { return /* reexport module object */ _RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__; },
  RuleSetGrid: function() { return /* reexport module object */ _RuleSetGrid_js__WEBPACK_IMPORTED_MODULE_6__; },
  UsedPreloadingView: function() { return /* reexport module object */ _UsedPreloadingView_js__WEBPACK_IMPORTED_MODULE_7__; }
});
/* harmony import */var _MismatchedPreloadingGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MismatchedPreloadingGrid.js */ "./panels/application/preloading/components/MismatchedPreloadingGrid.js");
/* harmony import */var _PreloadingDetailsReportView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreloadingDetailsReportView.js */ "./panels/application/preloading/components/PreloadingDetailsReportView.js");
/* harmony import */var _PreloadingDisabledInfobar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreloadingDisabledInfobar.js */ "./panels/application/preloading/components/PreloadingDisabledInfobar.js");
/* harmony import */var _PreloadingGrid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PreloadingGrid.js */ "./panels/application/preloading/components/PreloadingGrid.js");
/* harmony import */var _PreloadingMismatchedHeadersGrid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreloadingMismatchedHeadersGrid.js */ "./panels/application/preloading/components/PreloadingMismatchedHeadersGrid.js");
/* harmony import */var _RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RuleSetDetailsView.js */ "./panels/application/preloading/components/RuleSetDetailsView.js");
/* harmony import */var _RuleSetGrid_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RuleSetGrid.js */ "./panels/application/preloading/components/RuleSetGrid.js");
/* harmony import */var _UsedPreloadingView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UsedPreloadingView.js */ "./panels/application/preloading/components/UsedPreloadingView.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__]);
_RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








 //# sourceMappingURL=components.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./panels/application/preloading/preloadingView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2022 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.preloading-toolbar {\n  background-color: var(--sys-color-cdt-base-container);\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n/*# sourceURL=preloading/preloadingView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/application/preloading/preloadingViewDropDown.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2024 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  padding: 2px 1px 2px 2px;\n}\n\n.title {\n  padding-left: 8px;\n}\n\n.subtitle {\n  padding-left: 8px;\n}\n\n/*# sourceURL=preloading/preloadingViewDropDown.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./ui/components/split_view/split_view.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SplitView: function() { return /* reexport module object */ _SplitView_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _SplitView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SplitView.js */ "./ui/components/split_view/SplitView.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=split_view.js.map


}),
"./ui/legacy/emptyWidget.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.empty-bold-text {\n  display: block;\n  font-size: 1.5em;\n  margin: 0.83em 0;\n  font-weight: bold;\n}\n\n.empty-view {\n  color: var(--sys-color-token-subtle);\n  padding: 30px;\n  text-align: center;\n  min-width: 70px;\n}\n\n.empty-view-scroller {\n  justify-content: center;\n  overflow: auto;\n}\n\n.empty-view p {\n  white-space: initial;\n  line-height: 18px;\n  max-width: 300px;\n  flex-shrink: 0;\n}\n\n/*# sourceURL=emptyWidget.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);