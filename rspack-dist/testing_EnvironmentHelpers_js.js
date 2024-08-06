"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_EnvironmentHelpers_js"], {
"./testing/EnvironmentHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createFakeSetting: function() { return createFakeSetting; },
  createTarget: function() { return createTarget; },
  deinitializeGlobalLocaleVars: function() { return deinitializeGlobalLocaleVars; },
  deinitializeGlobalVars: function() { return deinitializeGlobalVars; },
  describeWithEnvironment: function() { return describeWithEnvironment; },
  describeWithLocale: function() { return describeWithLocale; },
  enableFeatureForTest: function() { return enableFeatureForTest; },
  expectConsoleLogs: function() { return expectConsoleLogs; },
  getGetHostConfigStub: function() { return getGetHostConfigStub; },
  initializeGlobalLocaleVars: function() { return initializeGlobalLocaleVars; },
  initializeGlobalVars: function() { return initializeGlobalVars; },
  registerNoopActions: function() { return registerNoopActions; },
  setupActionRegistry: function() { return setupActionRegistry; },
  stubNoopSettings: function() { return stubNoopSettings; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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










// Don't import UI at this stage because it will fail without
// the environment. Instead we do the import at the end of the
// initialization phase.
// eslint-disable-next-line @typescript-eslint/naming-convention
var UI;
var uniqueTargetId = 0;
function createTarget() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, id = _ref.id, name = _ref.name, _ref_type = _ref.type, type = _ref_type === void 0 ? _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame : _ref_type, parentTarget = _ref.parentTarget, subtype = _ref.subtype, _ref_url = _ref.url, url = _ref_url === void 0 ? 'http://example.com' : _ref_url;
    if (!id) {
        if (!uniqueTargetId++) {
            id = 'test';
        } else {
            id = 'test' + uniqueTargetId;
        }
    }
    var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance();
    return targetManager.createTarget(id, name !== null && name !== void 0 ? name : id, type, parentTarget ? parentTarget : null, /* sessionId=*/ parentTarget ? id : undefined, /* suspended=*/ false, /* connection=*/ undefined, {
        targetId: id,
        url: url,
        subtype: subtype
    });
}
function createSettingValue(category, settingName, defaultValue) {
    var settingType = arguments.length > 3 && arguments[3] !== void 0 /* Common.Settings.SettingType.BOOLEAN */  ? arguments[3] : "boolean";
    return {
        category: category,
        settingName: settingName,
        defaultValue: defaultValue,
        settingType: settingType
    };
}
function stubNoopSettings() {
    sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings, 'instance').returns({
        createSetting: function() {
            return {
                get: function() {
                    return [];
                },
                set: function() {},
                addChangeListener: function() {},
                removeChangeListener: function() {},
                setDisabled: function() {},
                setTitle: function() {},
                title: function() {},
                asRegExp: function() {},
                type: function() {
                    return "boolean" /* Common.Settings.SettingType.BOOLEAN */ ;
                },
                getAsArray: function() {
                    return [];
                }
            };
        },
        moduleSetting: function() {
            return {
                get: function() {
                    return [];
                },
                set: function() {},
                addChangeListener: function() {},
                removeChangeListener: function() {},
                setDisabled: function() {},
                setTitle: function() {},
                title: function() {},
                asRegExp: function() {},
                type: function() {
                    return "boolean" /* Common.Settings.SettingType.BOOLEAN */ ;
                },
                getAsArray: function() {
                    return [];
                }
            };
        },
        createLocalSetting: function() {
            return {
                get: function() {
                    return [];
                },
                set: function() {},
                addChangeListener: function() {},
                removeChangeListener: function() {},
                setDisabled: function() {},
                setTitle: function() {},
                title: function() {},
                asRegExp: function() {},
                type: function() {
                    return "boolean" /* Common.Settings.SettingType.BOOLEAN */ ;
                },
                getAsArray: function() {
                    return [];
                }
            };
        },
        getHostConfig: function() {}
    });
}
function registerNoopActions(actionIds) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = actionIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var actionId = _step.value;
            UI.ActionRegistration.maybeRemoveActionExtension(actionId);
            UI.ActionRegistration.registerActionExtension({
                actionId: actionId,
                category: "" /* UI.ActionRegistration.ActionCategory.NONE */ ,
                title: function() {
                    return 'mock';
                }
            });
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
    var actionRegistryInstance = UI.ActionRegistry.ActionRegistry.instance({
        forceNew: true
    });
    UI.ShortcutRegistry.ShortcutRegistry.instance({
        forceNew: true,
        actionRegistry: actionRegistryInstance
    });
}
var REGISTERED_EXPERIMENTS = [
    "capture-node-creation-stacks" /* Root.Runtime.ExperimentName.CAPTURE_NODE_CREATION_STACKS */ ,
    "protocol-monitor" /* Root.Runtime.ExperimentName.PROTOCOL_MONITOR */ ,
    'timeline-show-all-events',
    'timeline-v8-runtime-call-stats',
    'timeline-invalidation-tracking',
    "instrumentation-breakpoints" /* Root.Runtime.ExperimentName.INSTRUMENTATION_BREAKPOINTS */ ,
    'css-type-component-length-deprecate',
    "styles-pane-css-changes" /* Root.Runtime.ExperimentName.STYLES_PANE_CSS_CHANGES */ ,
    "header-overrides" /* Root.Runtime.ExperimentName.HEADER_OVERRIDES */ ,
    "highlight-errors-elements-panel" /* Root.Runtime.ExperimentName.HIGHLIGHT_ERRORS_ELEMENTS_PANEL */ ,
    "use-source-map-scopes" /* Root.Runtime.ExperimentName.USE_SOURCE_MAP_SCOPES */ ,
    'font-editor',
    "network-panel-filter-bar-redesign" /* Root.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN */ ,
    "sources-frame-indentation-markers-temporarily-disable" /* Root.Runtime.ExperimentName.INDENTATION_MARKERS_TEMP_DISABLE */ ,
    "autofill-view" /* Root.Runtime.ExperimentName.AUTOFILL_VIEW */ ,
    "perf-panel-annotations" /* Root.Runtime.ExperimentName.TIMELINE_ANNOTATIONS_OVERLAYS */ ,
    "timeline-rpp-sidebar" /* Root.Runtime.ExperimentName.TIMELINE_SIDEBAR */ ,
    "timeline-debug-mode" /* Root.Runtime.ExperimentName.TIMELINE_DEBUG_MODE */ ,
    "timeline-observations" /* Root.Runtime.ExperimentName.TIMELINE_OBSERVATIONS */ ,
    "full-accessibility-tree" /* Root.Runtime.ExperimentName.FULL_ACCESSIBILITY_TREE */ ,
    "timeline-show-postmessage-events" /* Root.Runtime.ExperimentName.TIMELINE_SHOW_POST_MESSAGE_EVENTS */ ,
    "timeline-enhanced-traces" /* Root.Runtime.ExperimentName.TIMELINE_ENHANCED_TRACES */ 
];
function initializeGlobalVars() {
    return _initializeGlobalVars.apply(this, arguments);
}
function _initializeGlobalVars() {
    _initializeGlobalVars = _async_to_generator(function() {
        var _ref, _ref_reset, reset, settings, storage, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, experimentName;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _ref = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : {}, _ref_reset = _ref.reset, reset = _ref_reset === void 0 ? true : _ref_reset;
                    return [
                        4,
                        initializeGlobalLocaleVars()
                    ];
                case 1:
                    _state.sent();
                    // Create the appropriate settings needed to boot.
                    settings = [
                        createSettingValue("ADORNER" /* Common.Settings.SettingCategory.ADORNER */ , 'adorner-settings', [], "array" /* Common.Settings.SettingType.ARRAY */ ),
                        createSettingValue("APPEARANCE" /* Common.Settings.SettingCategory.APPEARANCE */ , 'disable-paused-state-overlay', false),
                        createSettingValue("APPEARANCE" /* Common.Settings.SettingCategory.APPEARANCE */ , 'sidebar-position', 'auto', "enum" /* Common.Settings.SettingType.ENUM */ ),
                        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */ , 'custom-formatters', false),
                        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */ , 'pause-on-exception-enabled', false),
                        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */ , 'pause-on-caught-exception', false),
                        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */ , 'pause-on-uncaught-exception', false),
                        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */ , 'disable-async-stack-traces', false),
                        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */ , 'breakpoints-active', true),
                        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */ , 'java-script-disabled', false),
                        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */ , 'skip-content-scripts', true),
                        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */ , 'automatically-ignore-list-known-third-party-scripts', true),
                        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */ , 'enable-ignore-listing', true),
                        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */ , 'skip-stack-frames-pattern', '/node_modules/|/bower_components/', "regex" /* Common.Settings.SettingType.REGEX */ ),
                        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */ , 'navigator-group-by-folder', true),
                        createSettingValue("ELEMENTS" /* Common.Settings.SettingCategory.ELEMENTS */ , 'show-detailed-inspect-tooltip', true),
                        createSettingValue("ELEMENTS" /* Common.Settings.SettingCategory.ELEMENTS */ , 'show-html-comments', true),
                        createSettingValue("ELEMENTS" /* Common.Settings.SettingCategory.ELEMENTS */ , 'show-ua-shadow-dom', false),
                        createSettingValue("NETWORK" /* Common.Settings.SettingCategory.NETWORK */ , 'cache-disabled', false),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'avif-format-disabled', false),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'emulated-css-media', '', "enum" /* Common.Settings.SettingType.ENUM */ ),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'emulated-css-media-feature-prefers-color-scheme', '', "enum" /* Common.Settings.SettingType.ENUM */ ),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'emulated-css-media-feature-forced-colors', '', "enum" /* Common.Settings.SettingType.ENUM */ ),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'emulated-css-media-feature-prefers-reduced-motion', '', "enum" /* Common.Settings.SettingType.ENUM */ ),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'emulated-css-media-feature-prefers-contrast', '', "enum" /* Common.Settings.SettingType.ENUM */ ),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'emulated-css-media-feature-prefers-reduced-data', '', "enum" /* Common.Settings.SettingType.ENUM */ ),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'emulated-css-media-feature-prefers-reduced-transparency', '', "enum" /* Common.Settings.SettingType.ENUM */ ),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'emulated-css-media-feature-color-gamut', '', "enum" /* Common.Settings.SettingType.ENUM */ ),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'emulated-vision-deficiency', '', "enum" /* Common.Settings.SettingType.ENUM */ ),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'emulate-auto-dark-mode', '', "enum" /* Common.Settings.SettingType.ENUM */ ),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'local-fonts-disabled', false),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'show-paint-rects', false),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'show-layout-shift-regions', false),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'show-ad-highlights', false),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'show-debug-borders', false),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'show-fps-counter', false),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'show-scroll-bottleneck-rects', false),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'show-web-vitals', false),
                        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */ , 'webp-format-disabled', false),
                        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */ , 'allow-scroll-past-eof', true),
                        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */ , 'css-source-maps-enabled', true),
                        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */ , 'inline-variable-values', true),
                        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */ , 'auto-pretty-print-minified', true),
                        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */ , 'js-source-maps-enabled', true),
                        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */ , 'show-whitespaces-in-editor', 'none'),
                        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */ , 'text-editor-autocompletion', true),
                        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */ , 'text-editor-auto-detect-indent', false),
                        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */ , 'text-editor-bracket-closing', true),
                        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */ , 'text-editor-bracket-matching', true),
                        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */ , 'text-editor-code-folding', true),
                        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */ , 'text-editor-indent', '    '),
                        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */ , 'text-editor-tab-moves-focus', false),
                        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */ , 'dom-word-wrap', true),
                        createSettingValue("EMULATION" /* Common.Settings.SettingCategory.EMULATION */ , 'emulation.touch', '', "enum" /* Common.Settings.SettingType.ENUM */ ),
                        createSettingValue("EMULATION" /* Common.Settings.SettingCategory.EMULATION */ , 'emulation.idle-detection', '', "enum" /* Common.Settings.SettingType.ENUM */ ),
                        createSettingValue("GRID" /* Common.Settings.SettingCategory.GRID */ , 'show-grid-line-labels', 'none', "enum" /* Common.Settings.SettingType.ENUM */ ),
                        createSettingValue("GRID" /* Common.Settings.SettingCategory.GRID */ , 'extend-grid-lines', true),
                        createSettingValue("GRID" /* Common.Settings.SettingCategory.GRID */ , 'show-grid-areas', true),
                        createSettingValue("GRID" /* Common.Settings.SettingCategory.GRID */ , 'show-grid-track-sizes', true),
                        createSettingValue("" /* Common.Settings.SettingCategory.NONE */ , 'active-keybind-set', '', "enum" /* Common.Settings.SettingType.ENUM */ ),
                        createSettingValue("" /* Common.Settings.SettingCategory.NONE */ , 'user-shortcuts', [], "array" /* Common.Settings.SettingType.ARRAY */ ),
                        createSettingValue("APPEARANCE" /* Common.Settings.SettingCategory.APPEARANCE */ , 'help.show-release-note', true, "boolean" /* Common.Settings.SettingType.BOOLEAN */ ),
                        createSettingValue("NETWORK" /* Common.Settings.SettingCategory.NETWORK */ , 'request-blocking-enabled', false),
                        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */ , 'monitoring-xhr-enabled', false),
                        createSettingValue("" /* Common.Settings.SettingCategory.NONE */ , 'custom-network-conditions', [], "array" /* Common.Settings.SettingType.ARRAY */ ),
                        createSettingValue("APPEARANCE" /* Common.Settings.SettingCategory.APPEARANCE */ , 'ui-theme', 'systemPreferred', "enum" /* Common.Settings.SettingType.ENUM */ ),
                        createSettingValue("APPEARANCE" /* Common.Settings.SettingCategory.APPEARANCE */ , 'language', 'en-US', "enum" /* Common.Settings.SettingType.ENUM */ ),
                        createSettingValue("PERSISTENCE" /* Common.Settings.SettingCategory.PERSISTENCE */ , 'persistence-network-overrides-enabled', true, "boolean" /* Common.Settings.SettingType.BOOLEAN */ ),
                        createSettingValue("NETWORK" /* Common.Settings.SettingCategory.NETWORK */ , 'network-log.preserve-log', true, "boolean" /* Common.Settings.SettingType.BOOLEAN */ ),
                        createSettingValue("NETWORK" /* Common.Settings.SettingCategory.NETWORK */ , 'network-log.record-log', true, "boolean" /* Common.Settings.SettingType.BOOLEAN */ ),
                        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */ , 'network.enable-remote-file-loading', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */ ),
                        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */ , 'hide-network-messages', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */ ),
                        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */ , 'selected-context-filter-enabled', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */ ),
                        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */ , 'console-group-similar', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */ ),
                        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */ , 'console-shows-cors-errors', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */ ),
                        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */ , 'console-timestamps-enabled', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */ ),
                        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */ , 'console-insights-enabled', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */ ),
                        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */ , 'console-insights-onboarding-finished', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */ ),
                        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */ , 'console-history-autocomplete', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */ ),
                        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */ , 'console-autocomplete-on-enter', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */ ),
                        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */ , 'preserve-console-log', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */ ),
                        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */ , 'console-eager-eval', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */ ),
                        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */ , 'console-user-activation-eval', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */ ),
                        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */ , 'console-trace-expand', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */ ),
                        createSettingValue("PERFORMANCE" /* Common.Settings.SettingCategory.PERFORMANCE */ , 'flamechart-mouse-wheel-action', false, "enum" /* Common.Settings.SettingType.ENUM */ ),
                        createSettingValue("ELEMENTS" /* Common.Settings.SettingCategory.ELEMENTS */ , 'show-css-property-documentation-on-hover', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */ ),
                        createSettingValue("" /* Common.Settings.SettingCategory.NONE */ , 'freestyler-dogfood-consent-onboarding-finished', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */ )
                    ];
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.registerSettingsForTest(settings, reset);
                    // Instantiate the storage.
                    storage = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({}, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.NOOP_STORAGE, 'test');
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
                        forceNew: reset,
                        syncedStorage: storage,
                        globalStorage: storage,
                        localStorage: storage
                    });
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.clearForTest();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = REGISTERED_EXPERIMENTS[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            experimentName = _step.value;
                            _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.register(experimentName, '');
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
                    return [
                        4,
                        Promise.resolve(/*! import() */ ).then(__webpack_require__.bind(__webpack_require__, /*! ../ui/legacy/legacy.js */ "./ui/legacy/legacy.js"))
                    ];
                case 2:
                    // Dynamically import UI after the rest of the environment is set up, otherwise it will fail.
                    UI = _state.sent();
                    UI.ZoomManager.ZoomManager.instance({
                        forceNew: true,
                        win: window,
                        frontendHost: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance
                    });
                    // Initialize theme support and context menus.
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('uiTheme', 'systemPreferred');
                    UI.UIUtils.initializeUIUtils(document);
                    return [
                        2
                    ];
            }
        });
    });
    return _initializeGlobalVars.apply(this, arguments);
}
function deinitializeGlobalVars() {
    return _deinitializeGlobalVars.apply(this, arguments);
}
function _deinitializeGlobalVars() {
    _deinitializeGlobalVars = _async_to_generator(function() {
        var globalObject, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, target;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Remove the global SDK.
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    globalObject = globalThis;
                    delete globalObject.SDK;
                    delete globalObject.ls;
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().targets()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            target = _step.value;
                            target.dispose('deinitializeGlobalVars');
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
                    // Remove instances.
                    return [
                        4,
                        deinitializeGlobalLocaleVars()
                    ];
                case 1:
                    _state.sent();
                    _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_7__.NetworkLog.NetworkLog.removeInstance();
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.removeInstance();
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.Runtime.removeInstance();
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.removeInstance();
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.RevealerRegistry.removeInstance();
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.removeInstance();
                    _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.Workspace.WorkspaceImpl.removeInstance();
                    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.IgnoreListManager.IgnoreListManager.removeInstance();
                    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.removeInstance();
                    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.CSSWorkspaceBinding.CSSWorkspaceBinding.removeInstance();
                    _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssuesManager.removeInstance();
                    _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.IsolatedFileSystemManager.IsolatedFileSystemManager.removeInstance();
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.resetSettings();
                    // Protect against the dynamic import not having happened.
                    if (UI) {
                        UI.ZoomManager.ZoomManager.removeInstance();
                        UI.ViewManager.ViewManager.removeInstance();
                        UI.ViewManager.resetViewRegistration();
                        UI.Context.Context.removeInstance();
                        UI.InspectorView.InspectorView.removeInstance();
                        UI.ActionRegistry.ActionRegistry.reset();
                    }
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.clearForTest();
                    return [
                        2
                    ];
            }
        });
    });
    return _deinitializeGlobalVars.apply(this, arguments);
}
function describeWithEnvironment(title, fn) {
    var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        reset: true
    };
    return describe(title, function() {
        before(/*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            initializeGlobalVars(opts)
                        ];
                    case 1:
                        return [
                            2,
                            _state.sent()
                        ];
                }
            });
        }));
        fn.call(this);
        after(/*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            deinitializeGlobalVars()
                        ];
                    case 1:
                        return [
                            2,
                            _state.sent()
                        ];
                }
            });
        }));
    });
}
describeWithEnvironment.only = function(title, fn) {
    var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        reset: true
    };
    // eslint-disable-next-line mocha/no-exclusive-tests
    return describe.only(title, function() {
        before(/*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            initializeGlobalVars(opts)
                        ];
                    case 1:
                        return [
                            2,
                            _state.sent()
                        ];
                }
            });
        }));
        fn.call(this);
        after(/*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            deinitializeGlobalVars()
                        ];
                    case 1:
                        return [
                            2,
                            _state.sent()
                        ];
                }
            });
        }));
    });
};
function initializeGlobalLocaleVars() {
    return _initializeGlobalLocaleVars.apply(this, arguments);
}
function _initializeGlobalLocaleVars() {
    _initializeGlobalLocaleVars = _async_to_generator(function() {
        var error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Expose the locale.
                    _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.DevToolsLocale.DevToolsLocale.instance({
                        create: true,
                        data: {
                            navigatorLanguage: 'en-US',
                            settingLanguage: 'en-US',
                            lookupClosestDevToolsLocale: function() {
                                return 'en-US';
                            }
                        }
                    });
                    if (_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.hasLocaleDataForTest('en-US')) {
                        return [
                            2
                        ];
                    }
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.fetchAndRegisterLocaleData('en-US')
                    ];
                case 2:
                    _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    error = _state.sent();
                    // eslint-disable-next-line no-console
                    console.warn('EnvironmentHelper: Loading en-US locale failed', error.message);
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
    });
    return _initializeGlobalLocaleVars.apply(this, arguments);
}
function deinitializeGlobalLocaleVars() {
    _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.DevToolsLocale.DevToolsLocale.removeInstance();
}
function describeWithLocale(title, fn) {
    return describe(title, function() {
        before(/*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            initializeGlobalLocaleVars()
                        ];
                    case 1:
                        return [
                            2,
                            _state.sent()
                        ];
                }
            });
        }));
        fn.call(this);
        after(deinitializeGlobalLocaleVars);
    });
}
describeWithLocale.only = function(title, fn) {
    // eslint-disable-next-line mocha/no-exclusive-tests
    return describe.only(title, function() {
        before(/*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            initializeGlobalLocaleVars()
                        ];
                    case 1:
                        return [
                            2,
                            _state.sent()
                        ];
                }
            });
        }));
        fn.call(this);
        after(deinitializeGlobalLocaleVars);
    });
};
describeWithLocale.skip = function(title, fn) {
    // eslint-disable-next-line rulesdir/check_test_definitions
    return describe.skip(title, function() {
        fn.call(this);
    });
};
function createFakeSetting(name, defaultValue) {
    var storage = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({}, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.NOOP_STORAGE, 'test');
    return new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Setting(name, defaultValue, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper(), storage);
}
function enableFeatureForTest(feature) {
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.enableForTest(feature);
}
function setupActionRegistry() {
    before(function() {
        var actionRegistry = UI.ActionRegistry.ActionRegistry.instance();
        UI.ShortcutRegistry.ShortcutRegistry.instance({
            forceNew: true,
            actionRegistry: actionRegistry
        });
    });
    after(function() {
        if (UI) {
            UI.ShortcutRegistry.ShortcutRegistry.removeInstance();
            UI.ActionRegistry.ActionRegistry.removeInstance();
        }
    });
}
function expectConsoleLogs(expectedLogs) {
    var error = console.error, warn = console.warn, log = console.log;
    before(function() {
        if (expectedLogs.log) {
            // eslint-disable-next-line no-console
            console.log = function() {
                for(var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++){
                    data[_key] = arguments[_key];
                }
                var _expectedLogs_log;
                if (!((_expectedLogs_log = expectedLogs.log) === null || _expectedLogs_log === void 0 ? void 0 : _expectedLogs_log.includes(data.join(' ')))) {
                    log.apply(void 0, _to_consumable_array(data));
                }
            };
        }
        if (expectedLogs.warn) {
            console.warn = function() {
                for(var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++){
                    data[_key] = arguments[_key];
                }
                var _expectedLogs_warn;
                if (!((_expectedLogs_warn = expectedLogs.warn) === null || _expectedLogs_warn === void 0 ? void 0 : _expectedLogs_warn.includes(data.join(' ')))) {
                    warn.apply(void 0, _to_consumable_array(data));
                }
            };
        }
        if (expectedLogs.error) {
            console.error = function() {
                for(var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++){
                    data[_key] = arguments[_key];
                }
                var _expectedLogs_error;
                if (!((_expectedLogs_error = expectedLogs.error) === null || _expectedLogs_error === void 0 ? void 0 : _expectedLogs_error.includes(data.join(' ')))) {
                    error.apply(void 0, _to_consumable_array(data));
                }
            };
        }
    });
    after(function() {
        if (expectedLogs.log) {
            // eslint-disable-next-line no-console
            console.log = log;
        }
        if (expectedLogs.warn) {
            console.warn = warn;
        }
        if (expectedLogs.error) {
            console.error = error;
        }
    });
}
function getGetHostConfigStub(config) {
    var settings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance();
    return sinon.stub(settings, 'getHostConfig').returns({
        devToolsConsoleInsights: _object_spread({
            enabled: false,
            aidaModelId: '',
            aidaTemperature: 0.2
        }, config.devToolsConsoleInsights),
        devToolsFreestylerDogfood: _object_spread({
            aidaModelId: '',
            aidaTemperature: 0,
            enabled: false
        }, config.devToolsFreestylerDogfood),
        devToolsVeLogging: {
            enabled: true,
            testing: false
        }
    });
} //# sourceMappingURL=EnvironmentHelpers.js.map


}),

}]);