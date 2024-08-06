"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_coverage_CoverageView_js"], {
"./panels/coverage/CoverageView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return ActionDelegate; },
  CoverageView: function() { return CoverageView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CoverageDecorationManager.js */ "./panels/coverage/CoverageDecorationManager.js");
/* harmony import */var _CoverageListView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CoverageListView.js */ "./panels/coverage/CoverageListView.js");
/* harmony import */var _CoverageModel_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CoverageModel.js */ "./panels/coverage/CoverageModel.js");
/* harmony import */var _coverageView_css_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./coverageView.css.js */ "./panels/coverage/coverageView.css.js");
// Copyright (c) 2016 The Chromium Authors. All rights reserved.
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













var UIStrings = {
    /**
     *@description Tooltip in Coverage List View of the Coverage tab for selecting JavaScript coverage mode
     */ chooseCoverageGranularityPer: 'Choose coverage granularity: Per function has low overhead, per block has significant overhead.',
    /**
     *@description Text in Coverage List View of the Coverage tab
     */ perFunction: 'Per function',
    /**
     *@description Text in Coverage List View of the Coverage tab
     */ perBlock: 'Per block',
    /**
     *@description Text in Coverage View of the Coverage tab
     */ filterByUrl: 'Filter by URL',
    /**
     *@description Label for the type filter in the Converage Panel
     */ filterCoverageByType: 'Filter coverage by type',
    /**
     *@description Text for everything
     */ all: 'All',
    /**
     *@description Text that appears on a button for the css resource type filter.
     */ css: 'CSS',
    /**
     *@description Text in Timeline Tree View of the Performance panel
     */ javascript: 'JavaScript',
    /**
     *@description Tooltip text that appears on the setting when hovering over it in Coverage View of the Coverage tab
     */ includeExtensionContentScripts: 'Include extension content scripts',
    /**
     *@description Title for a type of source files
     */ contentScripts: 'Content scripts',
    /**
     *@description Message in Coverage View of the Coverage tab
     *@example {record button icon} PH1
     */ clickTheReloadButtonSToReloadAnd: 'Click the reload button {PH1} to reload and start capturing coverage.',
    /**
     *@description Message in Coverage View of the Coverage tab
     *@example {record button icon} PH1
     */ clickTheRecordButtonSToStart: 'Click the record button {PH1} to start capturing coverage.',
    /**
     *@description Message in the Coverage View explaining that DevTools could not capture coverage.
     */ bfcacheNoCapture: 'Could not capture coverage info because the page was served from the back/forward cache.',
    /**
     *@description  Message in the Coverage View explaining that DevTools could not capture coverage.
     */ activationNoCapture: 'Could not capture coverage info because the page was prerendered in the background.',
    /**
     *@description  Message in the Coverage View prompting the user to reload the page.
     *@example {reload button icon} PH1
     */ reloadPrompt: 'Click the reload button {PH1} to reload and get coverage.',
    /**
     *@description Footer message in Coverage View of the Coverage tab
     *@example {300k used, 600k unused} PH1
     *@example {500k used, 800k unused} PH2
     */ filteredSTotalS: 'Filtered: {PH1}  Total: {PH2}',
    /**
     *@description Footer message in Coverage View of the Coverage tab
     *@example {1.5 MB} PH1
     *@example {2.1 MB} PH2
     *@example {71%} PH3
     *@example {29%} PH4
     */ sOfSSUsedSoFarSUnused: '{PH1} of {PH2} ({PH3}%) used so far, {PH4} unused.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/coverage/CoverageView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var coverageViewInstance;
var _UI_Widget_VBox;
var CoverageView = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(CoverageView, _superClass);
    var _super = _create_super(CoverageView);
    function CoverageView() {
        _class_call_check(this, CoverageView);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "decorationManager", void 0);
        _define_property(_assert_this_initialized(_this), "coverageTypeComboBox", void 0);
        _define_property(_assert_this_initialized(_this), "coverageTypeComboBoxSetting", void 0);
        _define_property(_assert_this_initialized(_this), "toggleRecordAction", void 0);
        _define_property(_assert_this_initialized(_this), "toggleRecordButton", void 0);
        _define_property(_assert_this_initialized(_this), "inlineReloadButton", void 0);
        _define_property(_assert_this_initialized(_this), "startWithReloadButton", void 0);
        _define_property(_assert_this_initialized(_this), "clearAction", void 0);
        _define_property(_assert_this_initialized(_this), "exportAction", void 0);
        _define_property(_assert_this_initialized(_this), "textFilterRegExp", void 0);
        _define_property(_assert_this_initialized(_this), "filterInput", void 0);
        _define_property(_assert_this_initialized(_this), "typeFilterValue", void 0);
        _define_property(_assert_this_initialized(_this), "filterByTypeComboBox", void 0);
        _define_property(_assert_this_initialized(_this), "showContentScriptsSetting", void 0);
        _define_property(_assert_this_initialized(_this), "contentScriptsCheckbox", void 0);
        _define_property(_assert_this_initialized(_this), "coverageResultsElement", void 0);
        _define_property(_assert_this_initialized(_this), "landingPage", void 0);
        _define_property(_assert_this_initialized(_this), "bfcacheReloadPromptPage", void 0);
        _define_property(_assert_this_initialized(_this), "activationReloadPromptPage", void 0);
        _define_property(_assert_this_initialized(_this), "listView", void 0);
        _define_property(_assert_this_initialized(_this), "statusToolbarElement", void 0);
        _define_property(_assert_this_initialized(_this), "statusMessageElement", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.panel('coverage').track({
            resize: true
        })));
        _this.model = null;
        _this.decorationManager = null;
        var toolbarContainer = _this.contentElement.createChild('div', 'coverage-toolbar-container');
        toolbarContainer.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.toolbar()));
        var toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar('coverage-toolbar', toolbarContainer);
        toolbar.makeWrappable(true);
        _this.coverageTypeComboBox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarComboBox(_this.onCoverageTypeComboBoxSelectionChanged.bind(_assert_this_initialized(_this)), i18nString(UIStrings.chooseCoverageGranularityPer), undefined, 'coverage-type');
        var coverageTypes = [
            {
                label: i18nString(UIStrings.perFunction),
                value: 2 /* CoverageType.JavaScript */  | 4 /* CoverageType.JavaScriptPerFunction */ 
            },
            {
                label: i18nString(UIStrings.perBlock),
                value: 2 /* CoverageType.JavaScript */ 
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = coverageTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var type = _step.value;
                _this.coverageTypeComboBox.addOption(_this.coverageTypeComboBox.createOption(type.label, "".concat(type.value)));
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
        _this.coverageTypeComboBoxSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('coverage-view-coverage-type', 0);
        _this.coverageTypeComboBox.setSelectedIndex(_this.coverageTypeComboBoxSetting.get());
        _this.coverageTypeComboBox.setEnabled(true);
        toolbar.appendToolbarItem(_this.coverageTypeComboBox);
        _this.toggleRecordAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ActionRegistry.ActionRegistry.instance().getAction('coverage.toggle-recording');
        _this.toggleRecordButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar.createActionButton(_this.toggleRecordAction);
        toolbar.appendToolbarItem(_this.toggleRecordButton);
        var mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().primaryPageTarget();
        var mainTargetSupportsRecordOnReload = mainTarget && mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel);
        _this.inlineReloadButton = null;
        if (mainTargetSupportsRecordOnReload) {
            _this.startWithReloadButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar.createActionButtonForId('coverage.start-with-reload');
            toolbar.appendToolbarItem(_this.startWithReloadButton);
            _this.toggleRecordButton.setEnabled(false);
            _this.toggleRecordButton.setVisible(false);
        }
        _this.clearAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ActionRegistry.ActionRegistry.instance().getAction('coverage.clear');
        _this.clearAction.setEnabled(false);
        toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar.createActionButton(_this.clearAction));
        toolbar.appendSeparator();
        _this.exportAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ActionRegistry.ActionRegistry.instance().getAction('coverage.export');
        _this.exportAction.setEnabled(false);
        toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar.createActionButton(_this.exportAction));
        _this.textFilterRegExp = null;
        toolbar.appendSeparator();
        _this.filterInput = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarFilter(i18nString(UIStrings.filterByUrl), 0.4, 1);
        _this.filterInput.setEnabled(false);
        _this.filterInput.addEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */ , _this.onFilterChanged, _assert_this_initialized(_this));
        toolbar.appendToolbarItem(_this.filterInput);
        toolbar.appendSeparator();
        _this.typeFilterValue = null;
        _this.filterByTypeComboBox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarComboBox(_this.onFilterByTypeChanged.bind(_assert_this_initialized(_this)), i18nString(UIStrings.filterCoverageByType), undefined, 'coverage-by-type');
        var options = [
            {
                label: i18nString(UIStrings.all),
                value: ''
            },
            {
                label: i18nString(UIStrings.css),
                value: 1 /* CoverageType.CSS */ 
            },
            {
                label: i18nString(UIStrings.javascript),
                value: 2 /* CoverageType.JavaScript */  | 4 /* CoverageType.JavaScriptPerFunction */ 
            }
        ];
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = options[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var option = _step1.value;
                _this.filterByTypeComboBox.addOption(_this.filterByTypeComboBox.createOption(option.label, "".concat(option.value)));
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
        _this.filterByTypeComboBox.setSelectedIndex(0);
        _this.filterByTypeComboBox.setEnabled(false);
        toolbar.appendToolbarItem(_this.filterByTypeComboBox);
        toolbar.appendSeparator();
        _this.showContentScriptsSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('show-content-scripts', false);
        _this.showContentScriptsSetting.addChangeListener(_this.onFilterChanged, _assert_this_initialized(_this));
        _this.contentScriptsCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarSettingCheckbox(_this.showContentScriptsSetting, i18nString(UIStrings.includeExtensionContentScripts), i18nString(UIStrings.contentScripts));
        _this.contentScriptsCheckbox.setEnabled(false);
        toolbar.appendToolbarItem(_this.contentScriptsCheckbox);
        _this.coverageResultsElement = _this.contentElement.createChild('div', 'coverage-results');
        _this.landingPage = _this.buildLandingPage();
        _this.bfcacheReloadPromptPage = _this.buildReloadPromptPage(i18nString(UIStrings.bfcacheNoCapture), 'bfcache-page');
        _this.activationReloadPromptPage = _this.buildReloadPromptPage(i18nString(UIStrings.activationNoCapture), 'prerender-page');
        _this.listView = new _CoverageListView_js__WEBPACK_IMPORTED_MODULE_10__.CoverageListView(_this.isVisible.bind(_assert_this_initialized(_this), false));
        _this.statusToolbarElement = _this.contentElement.createChild('div', 'coverage-toolbar-summary');
        _this.statusMessageElement = _this.statusToolbarElement.createChild('div', 'coverage-message');
        _this.landingPage.show(_this.coverageResultsElement);
        return _this;
    }
    _create_class(CoverageView, [
        {
            key: "buildLandingPage",
            value: function buildLandingPage() {
                var widget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox();
                var message;
                if (this.startWithReloadButton) {
                    this.inlineReloadButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createInlineButton(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar.createActionButtonForId('coverage.start-with-reload'));
                    message = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.clickTheReloadButtonSToReloadAnd, {
                        PH1: this.inlineReloadButton
                    });
                } else {
                    var recordButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createInlineButton(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar.createActionButton(this.toggleRecordAction));
                    message = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.clickTheRecordButtonSToStart, {
                        PH1: recordButton
                    });
                }
                message.classList.add('message');
                widget.contentElement.appendChild(message);
                widget.element.classList.add('landing-page');
                return widget;
            }
        },
        {
            key: "buildReloadPromptPage",
            value: function buildReloadPromptPage(message, className) {
                var widget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox();
                var reasonDiv = document.createElement('div');
                reasonDiv.classList.add('message');
                reasonDiv.textContent = message;
                widget.contentElement.appendChild(reasonDiv);
                this.inlineReloadButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createInlineButton(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar.createActionButtonForId('inspector-main.reload'));
                var messageElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.reloadPrompt, {
                    PH1: this.inlineReloadButton
                });
                messageElement.classList.add('message');
                widget.contentElement.appendChild(messageElement);
                widget.element.classList.add(className);
                return widget;
            }
        },
        {
            key: "clear",
            value: function clear() {
                if (this.model) {
                    this.model.reset();
                }
                this.reset();
            }
        },
        {
            key: "reset",
            value: function reset() {
                if (this.decorationManager) {
                    this.decorationManager.dispose();
                    this.decorationManager = null;
                }
                this.listView.reset();
                this.listView.detach();
                this.landingPage.show(this.coverageResultsElement);
                this.statusMessageElement.textContent = '';
                this.filterInput.setEnabled(false);
                this.filterByTypeComboBox.setEnabled(false);
                this.contentScriptsCheckbox.setEnabled(false);
                this.exportAction.setEnabled(false);
            }
        },
        {
            key: "toggleRecording",
            value: function toggleRecording() {
                var enable = !this.toggleRecordAction.toggled();
                if (enable) {
                    void this.startRecording({
                        reload: false,
                        jsCoveragePerBlock: this.isBlockCoverageSelected()
                    });
                } else {
                    void this.stopRecording();
                }
            }
        },
        {
            key: "isBlockCoverageSelected",
            value: function isBlockCoverageSelected() {
                var option = this.coverageTypeComboBox.selectedOption();
                var coverageType = Number(option ? option.value : Number.NaN);
                // Check that Coverage.CoverageType.JavaScriptPerFunction is not present.
                return coverageType === 2 /* CoverageType.JavaScript */ ;
            }
        },
        {
            key: "selectCoverageType",
            value: function selectCoverageType(jsCoveragePerBlock) {
                var selectedIndex = jsCoveragePerBlock ? 1 : 0;
                this.coverageTypeComboBox.setSelectedIndex(selectedIndex);
            }
        },
        {
            key: "onCoverageTypeComboBoxSelectionChanged",
            value: function onCoverageTypeComboBoxSelectionChanged() {
                this.coverageTypeComboBoxSetting.set(this.coverageTypeComboBox.selectedIndex());
            }
        },
        {
            key: "ensureRecordingStarted",
            value: function ensureRecordingStarted() {
                var _this = this;
                return _async_to_generator(function() {
                    var enabled;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                enabled = _this.toggleRecordAction.toggled();
                                if (!enabled) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.stopRecording()
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    _this.startRecording({
                                        reload: false,
                                        jsCoveragePerBlock: false
                                    })
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "startRecording",
            value: function startRecording(options) {
                var _this = this;
                return _async_to_generator(function() {
                    var hadFocus, reloadButtonFocused, mainTarget, _$_object_spread, reload, jsCoveragePerBlock, success, resourceTreeModel;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.startWithReloadButton && _this.startWithReloadButton.element.hasFocus() || _this.inlineReloadButton && _this.inlineReloadButton.hasFocus()) {
                                    reloadButtonFocused = true;
                                } else if (_this.hasFocus()) {
                                    hadFocus = true;
                                }
                                _this.reset();
                                mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().primaryPageTarget();
                                if (!mainTarget) {
                                    return [
                                        2
                                    ];
                                }
                                _$_object_spread = _object_spread({
                                    reload: false,
                                    jsCoveragePerBlock: false
                                }, options), reload = _$_object_spread.reload, jsCoveragePerBlock = _$_object_spread.jsCoveragePerBlock;
                                if (!_this.model || reload) {
                                    _this.model = mainTarget.model(_CoverageModel_js__WEBPACK_IMPORTED_MODULE_11__.CoverageModel);
                                }
                                if (!_this.model) {
                                    return [
                                        2
                                    ];
                                }
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.CoverageStarted);
                                if (jsCoveragePerBlock) {
                                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.CoverageStartedPerBlock);
                                }
                                return [
                                    4,
                                    _this.model.start(Boolean(jsCoveragePerBlock))
                                ];
                            case 1:
                                success = _state.sent();
                                if (!success) {
                                    return [
                                        2
                                    ];
                                }
                                _this.selectCoverageType(Boolean(jsCoveragePerBlock));
                                _this.model.addEventListener(_CoverageModel_js__WEBPACK_IMPORTED_MODULE_11__.Events.CoverageUpdated, _this.onCoverageDataReceived, _this);
                                _this.model.addEventListener(_CoverageModel_js__WEBPACK_IMPORTED_MODULE_11__.Events.SourceMapResolved, _this.updateListView, _this);
                                resourceTreeModel = mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel);
                                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.Events.PrimaryPageChanged, _this.onPrimaryPageChanged, _this);
                                _this.decorationManager = new _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_9__.CoverageDecorationManager(_this.model, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance(), _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance(), _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance());
                                _this.toggleRecordAction.setToggled(true);
                                _this.clearAction.setEnabled(false);
                                if (_this.startWithReloadButton) {
                                    _this.startWithReloadButton.setEnabled(false);
                                    _this.startWithReloadButton.setVisible(false);
                                    _this.toggleRecordButton.setEnabled(true);
                                    _this.toggleRecordButton.setVisible(true);
                                    if (reloadButtonFocused) {
                                        _this.toggleRecordButton.focus();
                                    }
                                }
                                _this.coverageTypeComboBox.setEnabled(false);
                                _this.filterInput.setEnabled(true);
                                _this.filterByTypeComboBox.setEnabled(true);
                                _this.contentScriptsCheckbox.setEnabled(true);
                                if (_this.landingPage.isShowing()) {
                                    _this.landingPage.detach();
                                }
                                _this.listView.show(_this.coverageResultsElement);
                                if (hadFocus && !reloadButtonFocused) {
                                    _this.listView.focus();
                                }
                                if (reload && resourceTreeModel) {
                                    resourceTreeModel.reloadPage();
                                } else {
                                    void _this.model.startPolling();
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "onCoverageDataReceived",
            value: function onCoverageDataReceived(event) {
                var data = event.data;
                this.updateViews(data);
            }
        },
        {
            key: "updateListView",
            value: function updateListView() {
                this.listView.update(this.model && this.model.entries() || []);
            }
        },
        {
            key: "stopRecording",
            value: function stopRecording() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().removeModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.Events.PrimaryPageChanged, _this.onPrimaryPageChanged, _this);
                                if (_this.hasFocus()) {
                                    _this.listView.focus();
                                }
                                if (!_this.model) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.model.stop()
                                ];
                            case 1:
                                _state.sent();
                                _this.model.removeEventListener(_CoverageModel_js__WEBPACK_IMPORTED_MODULE_11__.Events.CoverageUpdated, _this.onCoverageDataReceived, _this);
                                _state.label = 2;
                            case 2:
                                _this.toggleRecordAction.setToggled(false);
                                _this.coverageTypeComboBox.setEnabled(true);
                                if (_this.startWithReloadButton) {
                                    _this.startWithReloadButton.setEnabled(true);
                                    _this.startWithReloadButton.setVisible(true);
                                    _this.toggleRecordButton.setEnabled(false);
                                    _this.toggleRecordButton.setVisible(false);
                                }
                                _this.clearAction.setEnabled(true);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "processBacklog",
            value: function processBacklog() {
                this.model && void this.model.processJSBacklog();
            }
        },
        {
            key: "onPrimaryPageChanged",
            value: function onPrimaryPageChanged(event) {
                var _this = this;
                return _async_to_generator(function() {
                    var frame, coverageModel, success;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                frame = event.data.frame;
                                coverageModel = frame.resourceTreeModel().target().model(_CoverageModel_js__WEBPACK_IMPORTED_MODULE_11__.CoverageModel);
                                if (!coverageModel) {
                                    return [
                                        2
                                    ];
                                }
                                if (!(_this.model !== coverageModel)) return [
                                    3,
                                    4
                                ];
                                if (!_this.model) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.model.stop()
                                ];
                            case 1:
                                _state.sent();
                                _this.model.removeEventListener(_CoverageModel_js__WEBPACK_IMPORTED_MODULE_11__.Events.CoverageUpdated, _this.onCoverageDataReceived, _this);
                                _state.label = 2;
                            case 2:
                                _this.model = coverageModel;
                                return [
                                    4,
                                    _this.model.start(_this.isBlockCoverageSelected())
                                ];
                            case 3:
                                success = _state.sent();
                                if (!success) {
                                    return [
                                        2
                                    ];
                                }
                                _this.model.addEventListener(_CoverageModel_js__WEBPACK_IMPORTED_MODULE_11__.Events.CoverageUpdated, _this.onCoverageDataReceived, _this);
                                _this.decorationManager = new _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_9__.CoverageDecorationManager(_this.model, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance(), _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance(), _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance());
                                _state.label = 4;
                            case 4:
                                if (_this.bfcacheReloadPromptPage.isShowing()) {
                                    _this.bfcacheReloadPromptPage.detach();
                                    _this.listView.show(_this.coverageResultsElement);
                                }
                                if (_this.activationReloadPromptPage.isShowing()) {
                                    _this.activationReloadPromptPage.detach();
                                    _this.listView.show(_this.coverageResultsElement);
                                }
                                if (frame.backForwardCacheDetails.restoredFromCache) {
                                    _this.listView.detach();
                                    _this.bfcacheReloadPromptPage.show(_this.coverageResultsElement);
                                }
                                if (event.data.type === "Activation" /* SDK.ResourceTreeModel.PrimaryPageChangeType.Activation */ ) {
                                    _this.listView.detach();
                                    _this.activationReloadPromptPage.show(_this.coverageResultsElement);
                                }
                                _this.model.reset();
                                _this.decorationManager && _this.decorationManager.reset();
                                _this.listView.reset();
                                void _this.model.startPolling();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateViews",
            value: function updateViews(updatedEntries) {
                this.updateStats();
                this.listView.update(this.model && this.model.entries() || []);
                this.exportAction.setEnabled(this.model !== null && this.model.entries().length > 0);
                this.decorationManager && this.decorationManager.update(updatedEntries);
            }
        },
        {
            key: "updateStats",
            value: function updateStats() {
                var all = {
                    total: 0,
                    unused: 0
                };
                var filtered = {
                    total: 0,
                    unused: 0
                };
                var filterApplied = this.textFilterRegExp !== null;
                if (this.model) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.model.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var info = _step.value;
                            all.total += info.size();
                            all.unused += info.unusedSize();
                            if (this.isVisible(false, info)) {
                                var _this_textFilterRegExp;
                                if ((_this_textFilterRegExp = this.textFilterRegExp) === null || _this_textFilterRegExp === void 0 ? void 0 : _this_textFilterRegExp.test(info.url())) {
                                    filtered.total += info.size();
                                    filtered.unused += info.unusedSize();
                                } else {
                                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                    try {
                                        // If it doesn't match the filter, calculate the stats from visible children if there are any
                                        for(var _iterator1 = info.sourcesURLCoverageInfo.values()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                            var childInfo = _step1.value;
                                            if (this.isVisible(false, childInfo)) {
                                                filtered.total += childInfo.size();
                                                filtered.unused += childInfo.unusedSize();
                                            }
                                        }
                                    } catch (err) {
                                        _didIteratorError1 = true;
                                        _iteratorError1 = err;
                                    } finally{
                                        try {
                                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                                _iterator1.return();
                                            }
                                        } finally{
                                            if (_didIteratorError1) {
                                                throw _iteratorError1;
                                            }
                                        }
                                    }
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
                }
                this.statusMessageElement.textContent = filterApplied ? i18nString(UIStrings.filteredSTotalS, {
                    PH1: formatStat(filtered),
                    PH2: formatStat(all)
                }) : formatStat(all);
                function formatStat(param) {
                    var total = param.total, unused = param.unused;
                    var used = total - unused;
                    var percentUsed = total ? Math.round(100 * used / total) : 0;
                    return i18nString(UIStrings.sOfSSUsedSoFarSUnused, {
                        PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(used),
                        PH2: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(total),
                        PH3: percentUsed,
                        PH4: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(unused)
                    });
                }
            }
        },
        {
            key: "onFilterChanged",
            value: function onFilterChanged() {
                if (!this.listView) {
                    return;
                }
                var text = this.filterInput.value();
                this.textFilterRegExp = text ? _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.createPlainTextSearchRegex(text, 'i') : null;
                this.listView.updateFilterAndHighlight(this.textFilterRegExp);
                this.updateStats();
            }
        },
        {
            key: "onFilterByTypeChanged",
            value: function onFilterByTypeChanged() {
                if (!this.listView) {
                    return;
                }
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.CoverageReportFiltered);
                var option = this.filterByTypeComboBox.selectedOption();
                var type = option && option.value;
                this.typeFilterValue = parseInt(type || '', 10) || null;
                this.listView.updateFilterAndHighlight(this.textFilterRegExp);
                this.updateStats();
            }
        },
        {
            key: "isVisible",
            value: function isVisible(ignoreTextFilter, coverageInfo) {
                var url = coverageInfo.url();
                if (url.startsWith(CoverageView.EXTENSION_BINDINGS_URL_PREFIX)) {
                    return false;
                }
                if (coverageInfo.isContentScript() && !this.showContentScriptsSetting.get()) {
                    return false;
                }
                if (this.typeFilterValue && !(coverageInfo.type() & this.typeFilterValue)) {
                    return false;
                }
                // If it's a parent, check if any children are visible
                if (coverageInfo.sourcesURLCoverageInfo.size > 0) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = coverageInfo.sourcesURLCoverageInfo.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var sourceURLCoverageInfo = _step.value;
                            if (this.isVisible(ignoreTextFilter, sourceURLCoverageInfo)) {
                                return true;
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
                }
                return ignoreTextFilter || !this.textFilterRegExp || this.textFilterRegExp.test(url);
            }
        },
        {
            key: "exportReport",
            value: function exportReport() {
                var _this = this;
                return _async_to_generator(function() {
                    var fos, fileName, accepted, _tmp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                fos = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.FileUtils.FileOutputStream();
                                fileName = "Coverage-".concat(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DateUtilities.toISO8601Compact(new Date()), ".json");
                                return [
                                    4,
                                    fos.open(fileName)
                                ];
                            case 1:
                                accepted = _state.sent();
                                if (!accepted) {
                                    return [
                                        2
                                    ];
                                }
                                _tmp = _this.model;
                                if (!_tmp) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _this.model.exportReport(fos)
                                ];
                            case 2:
                                _tmp = _state.sent();
                                _state.label = 3;
                            case 3:
                                _tmp;
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "selectCoverageItemByUrl",
            value: function selectCoverageItemByUrl(url) {
                this.listView.selectByUrl(url);
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Context.Context.instance().setFlavor(CoverageView, this);
                _get(_get_prototype_of(CoverageView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _coverageView_css_js__WEBPACK_IMPORTED_MODULE_12__["default"]
                ]);
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                _get(_get_prototype_of(CoverageView.prototype), "willHide", this).call(this);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Context.Context.instance().setFlavor(CoverageView, null);
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                if (!coverageViewInstance) {
                    coverageViewInstance = new CoverageView();
                }
                return coverageViewInstance;
            }
        },
        {
            key: "removeInstance",
            value: function removeInstance() {
                coverageViewInstance = undefined;
            }
        }
    ]);
    return CoverageView;
}(_UI_Widget_VBox = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox);
_define_property(CoverageView, "EXTENSION_BINDINGS_URL_PREFIX", 'extensions::');
var ActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ActionDelegate() {
        _class_call_check(this, ActionDelegate);
    }
    _create_class(ActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(_context, actionId) {
                var _this = this;
                var coverageViewId = 'coverage';
                void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ViewManager.ViewManager.instance().showView(coverageViewId, /** userGesture= */ false, /** omitFocus= */ true).then(function() {
                    var view = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ViewManager.ViewManager.instance().view(coverageViewId);
                    return view && view.widget();
                }).then(function(widget) {
                    return _this.innerHandleAction(widget, actionId);
                });
                return true;
            }
        },
        {
            key: "innerHandleAction",
            value: function innerHandleAction(coverageView, actionId) {
                switch(actionId){
                    case 'coverage.toggle-recording':
                        coverageView.toggleRecording();
                        break;
                    case 'coverage.start-with-reload':
                        void coverageView.startRecording({
                            reload: true,
                            jsCoveragePerBlock: coverageView.isBlockCoverageSelected()
                        });
                        break;
                    case 'coverage.clear':
                        coverageView.clear();
                        break;
                    case 'coverage.export':
                        void coverageView.exportReport();
                        break;
                    default:
                        console.assert(false, "Unknown action: ".concat(actionId));
                }
            }
        }
    ]);
    return ActionDelegate;
} //# sourceMappingURL=CoverageView.js.map
();


}),
"./panels/coverage/coverageView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  overflow: hidden;\n}\n\n.coverage-toolbar-container {\n  display: flex;\n  border-bottom: 1px solid var(--sys-color-divider);\n  flex: 0 0 auto;\n}\n\n.coverage-toolbar {\n  display: inline-block;\n  width: 100%;\n}\n\n.coverage-toolbar-summary {\n  background-color: var(--sys-color-cdt-base-container);\n  border-top: 1px solid var(--sys-color-divider);\n  padding-left: 5px;\n  flex: 0 0 19px;\n  display: flex;\n  padding-right: 5px;\n}\n\n.coverage-toolbar-summary .coverage-message {\n  padding-top: 2px;\n  padding-left: 1ex;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.coverage-results {\n  overflow-y: auto;\n  display: flex;\n  flex: auto;\n}\n\n.landing-page,\n.bfcache-page,\n.prerender-page {\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n}\n\n.landing-page .message,\n.bfcache-page .message,\n.prerender-page .message {\n  white-space: pre-line;\n  text-align: center;\n}\n\n/*# sourceURL=coverageView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);