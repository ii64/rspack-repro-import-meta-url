"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_console_counters_WarningErrorCounter_js"], {
"./panels/console_counters/WarningErrorCounter.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WarningErrorCounter: function() { return WarningErrorCounter; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/issue_counter/issue_counter.js */ "./ui/components/issue_counter/issue_counter.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
     *@description The console error count in the Warning Error Counter shown in the main toolbar (top-left in DevTools). The error count refers to the number of errors currently present in the JavaScript console.
     */ sErrors: '{n, plural, =1 {# error} other {# errors}}',
    /**
     *@description The console warning count in the Warning Error Counter shown in the main toolbar (top-left in DevTools). The warning count refers to the number of warnings currently present in the JavaScript console.
     */ sWarnings: '{n, plural, =1 {# warning} other {# warnings}}',
    /**
     *@description Tooltip shown for a main toolbar button that opens the Console panel
     *@example {2 errors, 1 warning} PH1
     */ openConsoleToViewS: 'Open Console to view {PH1}',
    /**
     *@description Title for the issues count in the Issues Error Counter shown in the main toolbar (top-left in DevTools). The issues count refers to the number of issues in the issues tab.
     */ openIssuesToView: '{n, plural, =1 {Open Issues to view # issue:} other {Open Issues to view # issues:}}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/console_counters/WarningErrorCounter.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var warningErrorCounterInstance;
var WarningErrorCounter = /*#__PURE__*/ function() {
    "use strict";
    function WarningErrorCounter() {
        _class_call_check(this, WarningErrorCounter);
        _define_property(this, "toolbarItem", void 0);
        _define_property(this, "consoleCounter", void 0);
        _define_property(this, "issueCounter", void 0);
        _define_property(this, "throttler", void 0);
        _define_property(this, "updatingForTest", void 0);
        WarningErrorCounter.instanceForTest = this;
        var countersWrapper = document.createElement('div');
        this.toolbarItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarItemWithCompactLayout(countersWrapper);
        this.toolbarItem.setVisible(false);
        this.toolbarItem.addEventListener("CompactLayoutUpdated" /* UI.Toolbar.ToolbarItemWithCompactLayoutEvents.CompactLayoutUpdated */ , this.onSetCompactLayout, this);
        this.consoleCounter = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.IconButton.IconButton();
        this.consoleCounter.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.counter('console').track({
            click: true
        })));
        countersWrapper.appendChild(this.consoleCounter);
        this.consoleCounter.data = {
            clickHandler: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().show.bind(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance()),
            groups: [
                {
                    iconName: 'cross-circle-filled',
                    iconColor: 'var(--icon-error)',
                    iconHeight: '14px',
                    iconWidth: '14px'
                },
                {
                    iconName: 'warning-filled',
                    iconColor: 'var(--icon-warning)',
                    iconHeight: '14px',
                    iconWidth: '14px'
                }
            ]
        };
        var issuesManager = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.IssuesManager.IssuesManager.instance();
        this.issueCounter = new _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_6__.IssueCounter.IssueCounter();
        this.issueCounter.classList.add('main-toolbar');
        this.issueCounter.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.counter('issue').track({
            click: true
        })));
        countersWrapper.appendChild(this.issueCounter);
        this.issueCounter.data = {
            clickHandler: function() {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelOpenedFrom(2 /* Host.UserMetrics.IssueOpener.StatusBarIssuesCounter */ );
                void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ViewManager.ViewManager.instance().showView('issues-pane');
            },
            issuesManager: issuesManager,
            displayMode: "OnlyMostImportant" /* IssueCounter.IssueCounter.DisplayMode.OnlyMostImportant */ 
        };
        this.throttler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.ConsoleModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.Events.ConsoleCleared, this.update, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.ConsoleModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.Events.MessageAdded, this.update, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.ConsoleModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.Events.MessageUpdated, this.update, this);
        issuesManager.addEventListener("IssuesCountUpdated" /* IssuesManager.IssuesManager.Events.IssuesCountUpdated */ , this.update, this);
        this.update();
    }
    _create_class(WarningErrorCounter, [
        {
            key: "onSetCompactLayout",
            value: function onSetCompactLayout(event) {
                this.setCompactLayout(event.data);
            }
        },
        {
            key: "setCompactLayout",
            value: function setCompactLayout(enable) {
                this.consoleCounter.data = _object_spread_props(_object_spread({}, this.consoleCounter.data), {
                    compact: enable
                });
                this.issueCounter.data = _object_spread_props(_object_spread({}, this.issueCounter.data), {
                    compact: enable
                });
            }
        },
        {
            key: "updatedForTest",
            value: function updatedForTest() {
            // Sniffed in tests.
            }
        },
        {
            key: "update",
            value: function update() {
                this.updatingForTest = true;
                void this.throttler.schedule(this.updateThrottled.bind(this));
            }
        },
        {
            key: "titlesForTesting",
            get: function get() {
                var _this_consoleCounter_shadowRoot;
                var button = (_this_consoleCounter_shadowRoot = this.consoleCounter.shadowRoot) === null || _this_consoleCounter_shadowRoot === void 0 ? void 0 : _this_consoleCounter_shadowRoot.querySelector('button');
                return button ? button.getAttribute('aria-label') : null;
            }
        },
        {
            key: "updateThrottled",
            value: function updateThrottled() {
                var _this = this;
                return _async_to_generator(function() {
                    var errors, warnings, issuesManager, issues, countToText, errorCountTitle, warningCountTitle, newConsoleTexts, consoleSummary, consoleTitle, previousData, issueEnumeration, issuesTitleLead, issuesTitle;
                    return _ts_generator(this, function(_state) {
                        errors = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.ConsoleModel.allErrors();
                        warnings = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.ConsoleModel.allWarnings();
                        issuesManager = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.IssuesManager.IssuesManager.instance();
                        issues = issuesManager.numberOfIssues();
                        countToText = function(c) {
                            return c === 0 ? undefined : "".concat(c);
                        };
                        /* Update consoleCounter items. */ errorCountTitle = i18nString(UIStrings.sErrors, {
                            n: errors
                        });
                        warningCountTitle = i18nString(UIStrings.sWarnings, {
                            n: warnings
                        });
                        newConsoleTexts = [
                            countToText(errors),
                            countToText(warnings)
                        ];
                        consoleSummary = '';
                        if (errors && warnings) {
                            consoleSummary = "".concat(errorCountTitle, ", ").concat(warningCountTitle);
                        } else if (errors) {
                            consoleSummary = errorCountTitle;
                        } else if (warnings) {
                            consoleSummary = warningCountTitle;
                        }
                        consoleTitle = i18nString(UIStrings.openConsoleToViewS, {
                            PH1: consoleSummary
                        });
                        previousData = _this.consoleCounter.data;
                        _this.consoleCounter.data = _object_spread_props(_object_spread({}, previousData), {
                            groups: previousData.groups.map(function(g, i) {
                                return _object_spread_props(_object_spread({}, g), {
                                    text: newConsoleTexts[i]
                                });
                            }),
                            accessibleName: consoleTitle
                        });
                        // TODO(chromium:1167711): Let the component handle the title and ARIA label.
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(_this.consoleCounter, consoleTitle);
                        _this.consoleCounter.classList.toggle('hidden', !(errors || warnings));
                        /* Update issuesCounter items. */ issueEnumeration = _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_6__.IssueCounter.getIssueCountsEnumeration(issuesManager);
                        issuesTitleLead = i18nString(UIStrings.openIssuesToView, {
                            n: issues
                        });
                        issuesTitle = "".concat(issuesTitleLead, " ").concat(issueEnumeration);
                        // TODO(chromium:1167711): Let the component handle the title and ARIA label.
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(_this.issueCounter, issuesTitle);
                        _this.issueCounter.data = _object_spread_props(_object_spread({}, _this.issueCounter.data), {
                            accessibleName: issuesTitle
                        });
                        _this.issueCounter.classList.toggle('hidden', !issues);
                        _this.toolbarItem.setVisible(Boolean(errors || warnings || issues));
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.InspectorView.InspectorView.instance().toolbarItemResized();
                        _this.updatingForTest = false;
                        _this.updatedForTest();
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "item",
            value: function item() {
                return this.toolbarItem;
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null
                };
                var forceNew = opts.forceNew;
                if (!warningErrorCounterInstance || forceNew) {
                    warningErrorCounterInstance = new WarningErrorCounter();
                }
                return warningErrorCounterInstance;
            }
        }
    ]);
    return WarningErrorCounter;
} //# sourceMappingURL=WarningErrorCounter.js.map
();
_define_property(WarningErrorCounter, "instanceForTest", null);


}),

}]);