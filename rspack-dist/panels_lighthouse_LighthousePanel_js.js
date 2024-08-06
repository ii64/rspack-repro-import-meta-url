"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_lighthouse_LighthousePanel_js"], {
"./panels/lighthouse/LighthousePanel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LighthousePanel: function() { return LighthousePanel; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _LighthouseController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LighthouseController.js */ "./panels/lighthouse/LighthouseController.js");
/* harmony import */var _lighthousePanel_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lighthousePanel.css.js */ "./panels/lighthouse/lighthousePanel.css.js");
/* harmony import */var _LighthouseProtocolService_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LighthouseProtocolService.js */ "./panels/lighthouse/LighthouseProtocolService.js");
/* harmony import */var _LighthouseReportRenderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LighthouseReportRenderer.js */ "./panels/lighthouse/LighthouseReportRenderer.js");
/* harmony import */var _LighthouseReportSelector_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LighthouseReportSelector.js */ "./panels/lighthouse/LighthouseReportSelector.js");
/* harmony import */var _LighthouseStartView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LighthouseStartView.js */ "./panels/lighthouse/LighthouseStartView.js");
/* harmony import */var _LighthouseStatusView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LighthouseStatusView.js */ "./panels/lighthouse/LighthouseStatusView.js");
/* harmony import */var _LighthouseTimespanView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LighthouseTimespanView.js */ "./panels/lighthouse/LighthouseTimespanView.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
     *@description Text that appears when user drag and drop something (for example, a file) in Lighthouse Panel
     */ dropLighthouseJsonHere: 'Drop `Lighthouse` JSON here',
    /**
     *@description Tooltip text that appears when hovering over the largeicon add button in the Lighthouse Panel
     */ performAnAudit: 'Perform an audit…',
    /**
     *@description Text to clear everything
     */ clearAll: 'Clear all',
    /**
     *@description Tooltip text that appears when hovering over the largeicon settings gear in show settings pane setting in start view of the audits panel
     */ lighthouseSettings: '`Lighthouse` settings',
    /**
     *@description Status header in the Lighthouse panel
     */ printing: 'Printing',
    /**
     *@description Status text in the Lighthouse panel
     */ thePrintPopupWindowIsOpenPlease: 'The print popup window is open. Please close it to continue.',
    /**
     *@description Text in Lighthouse Panel
     */ cancelling: 'Cancelling'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/lighthouse/LighthousePanel.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var lighthousePanelInstace;
var LighthousePanel = /*#__PURE__*/ function(_UI_Panel_Panel) {
    "use strict";
    _inherits(LighthousePanel, _UI_Panel_Panel);
    var _super = _create_super(LighthousePanel);
    function LighthousePanel(controller) {
        _class_call_check(this, LighthousePanel);
        var _this;
        _this = _super.call(this, 'lighthouse');
        _define_property(_assert_this_initialized(_this), "controller", void 0);
        _define_property(_assert_this_initialized(_this), "startView", void 0);
        _define_property(_assert_this_initialized(_this), "statusView", void 0);
        _define_property(_assert_this_initialized(_this), "timespanView", void 0);
        _define_property(_assert_this_initialized(_this), "warningText", void 0);
        _define_property(_assert_this_initialized(_this), "unauditableExplanation", void 0);
        _define_property(_assert_this_initialized(_this), "cachedRenderedReports", void 0);
        _define_property(_assert_this_initialized(_this), "dropTarget", void 0);
        _define_property(_assert_this_initialized(_this), "auditResultsElement", void 0);
        _define_property(_assert_this_initialized(_this), "clearButton", void 0);
        _define_property(_assert_this_initialized(_this), "newButton", void 0);
        _define_property(_assert_this_initialized(_this), "reportSelector", void 0);
        _define_property(_assert_this_initialized(_this), "settingsPane", void 0);
        _define_property(_assert_this_initialized(_this), "rightToolbar", void 0);
        _define_property(_assert_this_initialized(_this), "showSettingsPaneSetting", void 0);
        _this.controller = controller;
        _this.startView = new _LighthouseStartView_js__WEBPACK_IMPORTED_MODULE_9__.StartView(_this.controller, _assert_this_initialized(_this));
        _this.timespanView = new _LighthouseTimespanView_js__WEBPACK_IMPORTED_MODULE_11__.TimespanView(_assert_this_initialized(_this));
        _this.statusView = new _LighthouseStatusView_js__WEBPACK_IMPORTED_MODULE_10__.StatusView(_assert_this_initialized(_this));
        _this.warningText = null;
        _this.unauditableExplanation = null;
        _this.cachedRenderedReports = new Map();
        _this.dropTarget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.DropTarget.DropTarget(_this.contentElement, [
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.DropTarget.Type.File
        ], i18nString(UIStrings.dropLighthouseJsonHere), _this.handleDrop.bind(_assert_this_initialized(_this)));
        _this.controller.addEventListener(_LighthouseController_js__WEBPACK_IMPORTED_MODULE_4__.Events.PageAuditabilityChanged, _this.refreshStartAuditUI.bind(_assert_this_initialized(_this)));
        _this.controller.addEventListener(_LighthouseController_js__WEBPACK_IMPORTED_MODULE_4__.Events.PageWarningsChanged, _this.refreshWarningsUI.bind(_assert_this_initialized(_this)));
        _this.controller.addEventListener(_LighthouseController_js__WEBPACK_IMPORTED_MODULE_4__.Events.AuditProgressChanged, _this.refreshStatusUI.bind(_assert_this_initialized(_this)));
        _this.renderToolbar();
        _this.auditResultsElement = _this.contentElement.createChild('div', 'lighthouse-results-container');
        _this.renderStartView();
        _this.controller.recomputePageAuditability();
        return _this;
    }
    _create_class(LighthousePanel, [
        {
            key: "handleTimespanStart",
            value: function handleTimespanStart() {
                var _this = this;
                return _async_to_generator(function() {
                    var err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                _this.timespanView.show(_this.contentElement);
                                return [
                                    4,
                                    _this.controller.startLighthouse()
                                ];
                            case 1:
                                _state.sent();
                                _this.timespanView.ready();
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                err = _state.sent();
                                _this.handleError(err);
                                return [
                                    3,
                                    3
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "handleTimespanEnd",
            value: function handleTimespanEnd() {
                var _this = this;
                return _async_to_generator(function() {
                    var _ref, lhr, artifacts, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                _this.timespanView.hide();
                                _this.renderStatusView();
                                return [
                                    4,
                                    _this.controller.collectLighthouseResults()
                                ];
                            case 1:
                                _ref = _state.sent(), lhr = _ref.lhr, artifacts = _ref.artifacts;
                                _this.buildReportUI(lhr, artifacts);
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                err = _state.sent();
                                _this.handleError(err);
                                return [
                                    3,
                                    3
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "handleCompleteRun",
            value: function handleCompleteRun() {
                var _this = this;
                return _async_to_generator(function() {
                    var _ref, lhr, artifacts, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    _this.controller.startLighthouse()
                                ];
                            case 1:
                                _state.sent();
                                _this.renderStatusView();
                                return [
                                    4,
                                    _this.controller.collectLighthouseResults()
                                ];
                            case 2:
                                _ref = _state.sent(), lhr = _ref.lhr, artifacts = _ref.artifacts;
                                _this.buildReportUI(lhr, artifacts);
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                err = _state.sent();
                                _this.handleError(err);
                                return [
                                    3,
                                    4
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "handleRunCancel",
            value: function handleRunCancel() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.statusView.updateStatus(i18nString(UIStrings.cancelling));
                                _this.timespanView.hide();
                                return [
                                    4,
                                    _this.controller.cancelLighthouse()
                                ];
                            case 1:
                                _state.sent();
                                _this.renderStartView();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "handleError",
            value: function handleError(err) {
                if (_instanceof(err, Error)) {
                    this.statusView.renderBugReport(err);
                }
            }
        },
        {
            key: "refreshWarningsUI",
            value: function refreshWarningsUI(evt) {
                // PageWarningsChanged fires multiple times during an audit, which we want to ignore.
                if (this.controller.getCurrentRun()) {
                    return;
                }
                this.warningText = evt.data.warning;
                this.startView.setWarningText(evt.data.warning);
            }
        },
        {
            key: "refreshStartAuditUI",
            value: function refreshStartAuditUI(evt) {
                // PageAuditabilityChanged fires multiple times during an audit, which we want to ignore.
                if (this.controller.getCurrentRun()) {
                    return;
                }
                this.startView.refresh();
                this.unauditableExplanation = evt.data.helpText;
                this.startView.setUnauditableExplanation(evt.data.helpText);
                this.startView.setStartButtonEnabled(!evt.data.helpText);
            }
        },
        {
            key: "refreshStatusUI",
            value: function refreshStatusUI(evt) {
                this.statusView.updateStatus(evt.data.message);
            }
        },
        {
            key: "refreshToolbarUI",
            value: function refreshToolbarUI() {
                this.clearButton.setEnabled(this.reportSelector.hasItems());
            }
        },
        {
            key: "clearAll",
            value: function clearAll() {
                this.reportSelector.clearAll();
                this.renderStartView();
                this.refreshToolbarUI();
            }
        },
        {
            key: "renderToolbar",
            value: function renderToolbar() {
                var _this = this;
                var lighthouseToolbarContainer = this.element.createChild('div', 'lighthouse-toolbar-container');
                lighthouseToolbarContainer.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.toolbar()));
                var toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar('', lighthouseToolbarContainer);
                this.newButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarButton(i18nString(UIStrings.performAnAudit), 'plus');
                toolbar.appendToolbarItem(this.newButton);
                this.newButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , this.renderStartView.bind(this));
                toolbar.appendSeparator();
                this.reportSelector = new _LighthouseReportSelector_js__WEBPACK_IMPORTED_MODULE_8__.ReportSelector(function() {
                    return _this.renderStartView();
                });
                toolbar.appendToolbarItem(this.reportSelector.comboBox());
                this.clearButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarButton(i18nString(UIStrings.clearAll), 'clear');
                toolbar.appendToolbarItem(this.clearButton);
                this.clearButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , this.clearAll.bind(this));
                this.settingsPane = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.HBox();
                this.settingsPane.show(this.contentElement);
                this.settingsPane.element.classList.add('lighthouse-settings-pane');
                this.settingsPane.element.appendChild(this.startView.settingsToolbar().element);
                this.showSettingsPaneSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse-show-settings-toolbar', false, "Synced" /* Common.Settings.SettingStorageType.Synced */ );
                this.rightToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar('', lighthouseToolbarContainer);
                this.rightToolbar.appendSeparator();
                this.rightToolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarSettingToggle(this.showSettingsPaneSetting, 'gear', i18nString(UIStrings.lighthouseSettings), 'gear-filled'));
                this.showSettingsPaneSetting.addChangeListener(this.updateSettingsPaneVisibility.bind(this));
                this.updateSettingsPaneVisibility();
                this.refreshToolbarUI();
            }
        },
        {
            key: "updateSettingsPaneVisibility",
            value: function updateSettingsPaneVisibility() {
                this.settingsPane.element.classList.toggle('hidden', !this.showSettingsPaneSetting.get());
            }
        },
        {
            key: "toggleSettingsDisplay",
            value: function toggleSettingsDisplay(show) {
                this.rightToolbar.element.classList.toggle('hidden', !show);
                this.settingsPane.element.classList.toggle('hidden', !show);
                this.updateSettingsPaneVisibility();
            }
        },
        {
            key: "renderStartView",
            value: function renderStartView() {
                this.auditResultsElement.removeChildren();
                this.statusView.hide();
                this.reportSelector.selectNewReport();
                this.contentElement.classList.toggle('in-progress', false);
                this.startView.show(this.contentElement);
                this.toggleSettingsDisplay(true);
                this.startView.setUnauditableExplanation(this.unauditableExplanation);
                this.startView.setStartButtonEnabled(!this.unauditableExplanation);
                if (!this.unauditableExplanation) {
                    this.startView.focusStartButton();
                }
                this.startView.setWarningText(this.warningText);
                this.newButton.setEnabled(false);
                this.refreshToolbarUI();
                this.setDefaultFocusedChild(this.startView);
            }
        },
        {
            key: "renderStatusView",
            value: function renderStatusView() {
                var _this_controller_getCurrentRun;
                var inspectedURL = (_this_controller_getCurrentRun = this.controller.getCurrentRun()) === null || _this_controller_getCurrentRun === void 0 ? void 0 : _this_controller_getCurrentRun.inspectedURL;
                this.contentElement.classList.toggle('in-progress', true);
                this.statusView.setInspectedURL(inspectedURL);
                this.statusView.show(this.contentElement);
            }
        },
        {
            key: "beforePrint",
            value: function beforePrint() {
                this.statusView.show(this.contentElement);
                this.statusView.toggleCancelButton(false);
                this.statusView.renderText(i18nString(UIStrings.printing), i18nString(UIStrings.thePrintPopupWindowIsOpenPlease));
            }
        },
        {
            key: "afterPrint",
            value: function afterPrint() {
                this.statusView.hide();
                this.statusView.toggleCancelButton(true);
            }
        },
        {
            key: "renderReport",
            value: function renderReport(lighthouseResult, artifacts) {
                this.toggleSettingsDisplay(false);
                this.contentElement.classList.toggle('in-progress', false);
                this.startView.hideWidget();
                this.statusView.hide();
                this.auditResultsElement.removeChildren();
                this.newButton.setEnabled(true);
                this.refreshToolbarUI();
                var cachedRenderedReport = this.cachedRenderedReports.get(lighthouseResult);
                if (cachedRenderedReport) {
                    this.auditResultsElement.appendChild(cachedRenderedReport);
                    return;
                }
                var reportContainer = _LighthouseReportRenderer_js__WEBPACK_IMPORTED_MODULE_7__.LighthouseReportRenderer.renderLighthouseReport(lighthouseResult, artifacts, {
                    beforePrint: this.beforePrint.bind(this),
                    afterPrint: this.afterPrint.bind(this)
                });
                this.cachedRenderedReports.set(lighthouseResult, reportContainer);
            }
        },
        {
            key: "buildReportUI",
            value: function buildReportUI(lighthouseResult, artifacts) {
                var _this = this;
                if (lighthouseResult === null) {
                    return;
                }
                var optionElement = new _LighthouseReportSelector_js__WEBPACK_IMPORTED_MODULE_8__.Item(lighthouseResult, function() {
                    return _this.renderReport(lighthouseResult, artifacts);
                }, this.renderStartView.bind(this));
                this.reportSelector.prepend(optionElement);
                this.refreshToolbarUI();
                this.renderReport(lighthouseResult);
                this.newButton.element.focus();
            }
        },
        {
            key: "handleDrop",
            value: function handleDrop(dataTransfer) {
                var _this = this;
                var items = dataTransfer.items;
                if (!items.length) {
                    return;
                }
                var item = items[0];
                if (item.kind === 'file') {
                    var file = items[0].getAsFile();
                    if (!file) {
                        return;
                    }
                    var reader = new FileReader();
                    reader.onload = function() {
                        return _this.loadedFromFile(reader.result);
                    };
                    reader.readAsText(file);
                }
            }
        },
        {
            key: "loadedFromFile",
            value: function loadedFromFile(report) {
                var data = JSON.parse(report);
                if (!data['lighthouseVersion']) {
                    return;
                }
                this.buildReportUI(data);
            }
        },
        {
            key: "elementsToRestoreScrollPositionsFor",
            value: function elementsToRestoreScrollPositionsFor() {
                var els = _get(_get_prototype_of(LighthousePanel.prototype), "elementsToRestoreScrollPositionsFor", this).call(this);
                var lhContainerEl = this.auditResultsElement.querySelector('.lh-container');
                if (lhContainerEl) {
                    els.push(lhContainerEl);
                }
                return els;
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(LighthousePanel.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _lighthousePanel_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
            }
        }
    ], [
        {
            key: "instance",
            value: function instance(opts) {
                if (!lighthousePanelInstace || (opts === null || opts === void 0 ? void 0 : opts.forceNew)) {
                    var _opts_protocolService;
                    var protocolService = (_opts_protocolService = opts === null || opts === void 0 ? void 0 : opts.protocolService) !== null && _opts_protocolService !== void 0 ? _opts_protocolService : new _LighthouseProtocolService_js__WEBPACK_IMPORTED_MODULE_6__.ProtocolService();
                    var _opts_controller;
                    var controller = (_opts_controller = opts === null || opts === void 0 ? void 0 : opts.controller) !== null && _opts_controller !== void 0 ? _opts_controller : new _LighthouseController_js__WEBPACK_IMPORTED_MODULE_4__.LighthouseController(protocolService);
                    lighthousePanelInstace = new LighthousePanel(controller);
                }
                return lighthousePanelInstace;
            }
        },
        {
            key: "getEvents",
            value: function getEvents() {
                return _LighthouseController_js__WEBPACK_IMPORTED_MODULE_4__.Events;
            }
        }
    ]);
    return LighthousePanel;
} //# sourceMappingURL=LighthousePanel.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Panel.Panel);


}),
"./panels/lighthouse/LighthouseReportSelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Item: function() { return Item; },
  ReportSelector: function() { return ReportSelector; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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



var UIStrings = {
    /**
     *@description Title of combo box in audits report selector
     */ reports: 'Reports',
    /**
     *@description New report item label in Lighthouse Report Selector
     */ newReport: '(new report)'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/lighthouse/LighthouseReportSelector.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var ReportSelector = /*#__PURE__*/ function() {
    "use strict";
    function ReportSelector(renderNewLighthouseView) {
        _class_call_check(this, ReportSelector);
        _define_property(this, "renderNewLighthouseView", void 0);
        _define_property(this, "newLighthouseItem", void 0);
        _define_property(this, "comboBoxInternal", void 0);
        _define_property(this, "itemByOptionElement", void 0);
        this.renderNewLighthouseView = renderNewLighthouseView;
        this.newLighthouseItem = document.createElement('option');
        this.comboBoxInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarComboBox(this.handleChange.bind(this), i18nString(UIStrings.reports), 'lighthouse-report');
        this.comboBoxInternal.setMaxWidth(180);
        this.comboBoxInternal.setMinWidth(140);
        this.itemByOptionElement = new Map();
        this.setEmptyState();
    }
    _create_class(ReportSelector, [
        {
            key: "setEmptyState",
            value: function setEmptyState() {
                this.comboBoxInternal.selectElement().removeChildren();
                this.comboBoxInternal.setEnabled(false);
                this.newLighthouseItem = document.createElement('option');
                this.newLighthouseItem.label = i18nString(UIStrings.newReport);
                this.comboBoxInternal.selectElement().appendChild(this.newLighthouseItem);
                this.comboBoxInternal.select(this.newLighthouseItem);
            }
        },
        {
            key: "handleChange",
            value: function handleChange(_event) {
                var item = this.selectedItem();
                if (item) {
                    item.select();
                } else {
                    this.renderNewLighthouseView();
                }
            }
        },
        {
            key: "selectedItem",
            value: function selectedItem() {
                var option = this.comboBoxInternal.selectedOption();
                return this.itemByOptionElement.get(option);
            }
        },
        {
            key: "hasCurrentSelection",
            value: function hasCurrentSelection() {
                return Boolean(this.selectedItem());
            }
        },
        {
            key: "hasItems",
            value: function hasItems() {
                return this.itemByOptionElement.size > 0;
            }
        },
        {
            key: "comboBox",
            value: function comboBox() {
                return this.comboBoxInternal;
            }
        },
        {
            key: "prepend",
            value: function prepend(item) {
                var optionEl = item.optionElement();
                var selectEl = this.comboBoxInternal.selectElement();
                this.itemByOptionElement.set(optionEl, item);
                selectEl.insertBefore(optionEl, selectEl.firstElementChild);
                this.comboBoxInternal.setEnabled(true);
                this.comboBoxInternal.select(optionEl);
                item.select();
            }
        },
        {
            key: "clearAll",
            value: function clearAll() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.comboBoxInternal.options()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var elem = _step.value;
                        var _this_itemByOptionElement_get;
                        if (elem === this.newLighthouseItem) {
                            continue;
                        }
                        (_this_itemByOptionElement_get = this.itemByOptionElement.get(elem)) === null || _this_itemByOptionElement_get === void 0 ? void 0 : _this_itemByOptionElement_get.delete();
                        this.itemByOptionElement.delete(elem);
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
                this.setEmptyState();
            }
        },
        {
            key: "selectNewReport",
            value: function selectNewReport() {
                this.comboBoxInternal.select(this.newLighthouseItem);
            }
        }
    ]);
    return ReportSelector;
}();
var Item = /*#__PURE__*/ function() {
    "use strict";
    function Item(lighthouseResult, renderReport, showLandingCallback) {
        _class_call_check(this, Item);
        _define_property(this, "lighthouseResult", void 0);
        _define_property(this, "renderReport", void 0);
        _define_property(this, "showLandingCallback", void 0);
        _define_property(this, "element", void 0);
        this.lighthouseResult = lighthouseResult;
        this.renderReport = renderReport;
        this.showLandingCallback = showLandingCallback;
        // In Lighthouse 10.0, `finalUrl` is not provided on snapshot or timespan reports.
        // `finalDisplayedUrl` is the new preferred URL to use for cosmetic identification.
        // TODO: Remove the `finalUrl` backport once Lighthouse 10.0 is rolled into DevTools.
        var finalDisplayedUrl = lighthouseResult.finalDisplayedUrl || lighthouseResult.finalUrl || '';
        var url = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(finalDisplayedUrl);
        var timestamp = lighthouseResult.fetchTime;
        this.element = document.createElement('option');
        this.element.label = "".concat(new Date(timestamp).toLocaleTimeString(), " - ").concat(url.domain());
    }
    _create_class(Item, [
        {
            key: "select",
            value: function select() {
                this.renderReport();
            }
        },
        {
            key: "optionElement",
            value: function optionElement() {
                return this.element;
            }
        },
        {
            key: "delete",
            value: function _delete() {
                if (this.element) {
                    this.element.remove();
                }
                this.showLandingCallback();
            }
        }
    ]);
    return Item;
} //# sourceMappingURL=LighthouseReportSelector.js.map
();


}),
"./panels/lighthouse/lighthousePanel.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.toolbar {\n  background-color: var(--sys-color-cdt-base-container);\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n.lh-root {\n  --report-menu-width: 0;\n\n  user-select: text;\n}\n/* for View Trace button */\n\n.lh-audit-group {\n  position: relative;\n}\n\nbutton.view-trace {\n  margin: 10px;\n}\n\n.lighthouse-results-container {\n  position: relative;\n}\n/** \\'window.opener\\' is null for windows opened from DevTools. This breaks\n    the LH viewer app, so disable this feature. */\n\n.lh-tools--viewer {\n  display: none !important; /* stylelint-disable-line declaration-no-important */\n}\n\n.lighthouse-settings-pane {\n  flex: none;\n}\n\n.lighthouse-settings-pane .toolbar {\n  flex: 1 1;\n}\n\n.lighthouse-toolbar-container {\n  display: flex;\n  flex: none;\n}\n\n.lighthouse-toolbar-container > :first-child {\n  flex: 1 1 auto;\n}\n\n.lh-devtools .lh-element-screenshot__overlay {\n  position: absolute;\n}\n\n/*# sourceURL=lighthousePanel.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);