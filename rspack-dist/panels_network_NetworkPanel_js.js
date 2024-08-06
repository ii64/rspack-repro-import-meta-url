"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_NetworkPanel_js"], {
"./panels/network/NetworkPanel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return ActionDelegate; },
  FilmStripRecorder: function() { return FilmStripRecorder; },
  NetworkLogWithFilterRevealer: function() { return NetworkLogWithFilterRevealer; },
  NetworkPanel: function() { return NetworkPanel; },
  RequestIdRevealer: function() { return RequestIdRevealer; },
  RequestLocationRevealer: function() { return RequestLocationRevealer; },
  RequestRevealer: function() { return RequestRevealer; },
  SearchNetworkView: function() { return SearchNetworkView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../mobile_throttling/mobile_throttling.js */ "./panels/mobile_throttling/mobile_throttling.js");
/* harmony import */var _search_search_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../search/search.js */ "./panels/search/search.js");
/* harmony import */var _timeline_utils_utils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../timeline/utils/utils.js */ "./panels/timeline/utils/utils.js");
/* harmony import */var _NetworkItemView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./NetworkItemView.js */ "./panels/network/NetworkItemView.js");
/* harmony import */var _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./NetworkLogView.js */ "./panels/network/NetworkLogView.js");
/* harmony import */var _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./NetworkOverview.js */ "./panels/network/NetworkOverview.js");
/* harmony import */var _networkPanel_css_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./networkPanel.css.js */ "./panels/network/networkPanel.css.js");
/* harmony import */var _NetworkSearchScope_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./NetworkSearchScope.js */ "./panels/network/NetworkSearchScope.js");
/* harmony import */var _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./NetworkTimeCalculator.js */ "./panels/network/NetworkTimeCalculator.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2007, 2008 Apple Inc.  All rights reserved.
 * Copyright (C) 2008, 2009 Anthony Ricaud <rik@webkit.org>
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _array_like_to_array(arr, len) {
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
     *@description Text to close something
     */ close: 'Close',
    /**
     *@description Title of a search bar or tool
     */ search: 'Search',
    /**
     *@description Tooltip text that appears on the setting to preserve log when hovering over the item
     */ doNotClearLogOnPageReload: 'Do not clear log on page reload / navigation',
    /**
     *@description Text to preserve the log after refreshing
     */ preserveLog: 'Preserve log',
    /**
     *@description Text to disable cache while DevTools is open
     */ disableCacheWhileDevtoolsIsOpen: 'Disable cache (while DevTools is open)',
    /**
     *@description Text in Network Config View of the Network panel
     */ disableCache: 'Disable cache',
    /**
     *@description Tooltip text that appears when hovering over the largeicon settings gear in show settings pane setting in network panel of the network panel
     */ networkSettings: 'Network settings',
    /**
     *@description Tooltip for expanding network request row setting
     */ showMoreInformationInRequestRows: 'Show more information in request rows',
    /**
     *@description Text in Network Panel of the Network panel
     */ useLargeRequestRows: 'Big request rows',
    /**
     *@description Tooltip text for network request overview setting
     */ showOverviewOfNetworkRequests: 'Show overview of network requests',
    /**
     *@description Text in Network Panel of the Network panel
     */ showOverview: 'Overview',
    /**
     *@description Tooltip for group by frame network setting
     */ groupRequestsByTopLevelRequest: 'Group requests by top level request frame',
    /**
     *@description Text in Network Panel of the Network panel
     */ groupByFrame: 'Group by frame',
    /**
     *@description Tooltip for capture screenshot network setting
     */ captureScreenshotsWhenLoadingA: 'Capture screenshots when loading a page',
    /**
     *@description Text to take screenshots
     */ captureScreenshots: 'Screenshots',
    /**
     * @description Tooltip text that appears when hovering over the largeicon load button in the
     * Network Panel. This action prompts the user to select a HAR file to upload to DevTools.
     */ importHarFile: 'Import `HAR` file...',
    /**
     * @description Tooltip text that appears when hovering over the largeicon download button in the
     * Network Panel. HAR is a file format (HTTP Archive) and should not be translated. This action
     * triggers the download of a HAR file.
     */ exportHar: 'Export `HAR`...',
    /**
     *@description Text for throttling the network
     */ throttling: 'Throttling',
    /**
     *@description Text in Network Panel of the Network panel
     *@example {Ctrl + R} PH1
     */ hitSToReloadAndCaptureFilmstrip: 'Hit {PH1} to reload and capture filmstrip.',
    /**
     *@description A context menu item in the Network Panel of the Network panel
     */ revealInNetworkPanel: 'Reveal in Network panel',
    /**
     *@description Text in Network Panel of the Network panel
     */ recordingFrames: 'Recording frames...',
    /**
     *@description Text in Network Panel of the Network panel
     */ fetchingFrames: 'Fetching frames...',
    /**
     * @description Text of a button in the Network panel's toolbar that open Network Conditions panel in the drawer.
     */ moreNetworkConditions: 'More network conditions…'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/network/NetworkPanel.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var networkPanelInstance;
var NetworkPanel = /*#__PURE__*/ function(_UI_Panel_Panel) {
    "use strict";
    _inherits(NetworkPanel, _UI_Panel_Panel);
    var _super = _create_super(NetworkPanel);
    function NetworkPanel(displayScreenshotDelay) {
        _class_call_check(this, NetworkPanel);
        var _this;
        _this = _super.call(this, 'network');
        _define_property(_assert_this_initialized(_this), "networkLogShowOverviewSetting", void 0);
        _define_property(_assert_this_initialized(_this), "networkLogLargeRowsSetting", void 0);
        _define_property(_assert_this_initialized(_this), "networkRecordFilmStripSetting", void 0);
        _define_property(_assert_this_initialized(_this), "toggleRecordAction", void 0);
        _define_property(_assert_this_initialized(_this), "pendingStopTimer", void 0);
        _define_property(_assert_this_initialized(_this), "networkItemView", void 0);
        _define_property(_assert_this_initialized(_this), "filmStripView", void 0);
        _define_property(_assert_this_initialized(_this), "filmStripRecorder", void 0);
        _define_property(_assert_this_initialized(_this), "currentRequest", void 0);
        _define_property(_assert_this_initialized(_this), "panelToolbar", void 0);
        _define_property(_assert_this_initialized(_this), "rightToolbar", void 0);
        _define_property(_assert_this_initialized(_this), "filterBar", void 0);
        _define_property(_assert_this_initialized(_this), "settingsPane", void 0);
        _define_property(_assert_this_initialized(_this), "showSettingsPaneSetting", void 0);
        _define_property(_assert_this_initialized(_this), "filmStripPlaceholderElement", void 0);
        _define_property(_assert_this_initialized(_this), "overviewPane", void 0);
        _define_property(_assert_this_initialized(_this), "networkOverview", void 0);
        _define_property(_assert_this_initialized(_this), "overviewPlaceholderElement", void 0);
        _define_property(_assert_this_initialized(_this), "calculator", void 0);
        _define_property(_assert_this_initialized(_this), "splitWidget", void 0);
        _define_property(_assert_this_initialized(_this), "sidebarLocation", void 0);
        _define_property(_assert_this_initialized(_this), "progressBarContainer", void 0);
        _define_property(_assert_this_initialized(_this), "networkLogView", void 0);
        _define_property(_assert_this_initialized(_this), "fileSelectorElement", void 0);
        _define_property(_assert_this_initialized(_this), "detailsWidget", void 0);
        _define_property(_assert_this_initialized(_this), "closeButtonElement", void 0);
        _define_property(_assert_this_initialized(_this), "preserveLogSetting", void 0);
        _define_property(_assert_this_initialized(_this), "recordLogSetting", void 0);
        _define_property(_assert_this_initialized(_this), "throttlingSelect", void 0);
        _define_property(_assert_this_initialized(_this), "displayScreenshotDelay", void 0);
        _this.displayScreenshotDelay = displayScreenshotDelay;
        _this.networkLogShowOverviewSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-log-show-overview', true);
        _this.networkLogLargeRowsSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-log-large-rows', false);
        _this.networkRecordFilmStripSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-record-film-strip-setting', false);
        _this.toggleRecordAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ActionRegistry.ActionRegistry.instance().getAction('network.toggle-recording');
        _this.networkItemView = null;
        _this.filmStripView = null;
        _this.filmStripRecorder = null;
        _this.currentRequest = null;
        var panel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.VBox();
        var networkToolbarContainer = panel.contentElement.createChild('div', 'network-toolbar-container');
        _this.panelToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.Toolbar('', networkToolbarContainer);
        _this.panelToolbar.makeWrappable(true);
        _this.panelToolbar.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.toolbar('network-main')));
        _this.rightToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.Toolbar('', networkToolbarContainer);
        _this.filterBar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.FilterBar.FilterBar('network-panel', true);
        _this.filterBar.show(panel.contentElement);
        _this.filterBar.addEventListener("Changed" /* UI.FilterBar.FilterBarEvents.Changed */ , _this.handleFilterChanged.bind(_assert_this_initialized(_this)));
        _this.settingsPane = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.HBox();
        _this.settingsPane.element.classList.add('network-settings-pane');
        _this.settingsPane.show(panel.contentElement);
        _this.showSettingsPaneSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-show-settings-toolbar', false);
        _this.showSettingsPaneSetting.addChangeListener(_this.updateSettingsPaneVisibility.bind(_assert_this_initialized(_this)));
        _this.updateSettingsPaneVisibility();
        _this.filmStripPlaceholderElement = panel.contentElement.createChild('div', 'network-film-strip-placeholder');
        // Create top overview component.
        _this.overviewPane = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_9__.TimelineOverviewPane.TimelineOverviewPane('network');
        _this.overviewPane.addEventListener("OverviewPaneWindowChanged" /* PerfUI.TimelineOverviewPane.Events.OverviewPaneWindowChanged */ , _this.onWindowChanged.bind(_assert_this_initialized(_this)));
        _this.overviewPane.element.id = 'network-overview-panel';
        _this.networkOverview = new _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_17__.NetworkOverview();
        _this.overviewPane.setOverviewControls([
            _this.networkOverview
        ]);
        _this.overviewPlaceholderElement = panel.contentElement.createChild('div');
        _this.calculator = new _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_20__.NetworkTransferTimeCalculator();
        _this.splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.SplitWidget.SplitWidget(true, false, 'network-panel-split-view-state');
        _this.splitWidget.hideMain();
        _this.splitWidget.show(panel.contentElement);
        panel.setDefaultFocusedChild(_this.filterBar);
        var initialSidebarWidth = 225;
        var splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.SplitWidget.SplitWidget(true, false, 'network-panel-sidebar-state', initialSidebarWidth);
        splitWidget.hideSidebar();
        splitWidget.enableShowModeSaving();
        splitWidget.show(_this.element);
        _this.sidebarLocation = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().createTabbedLocation(/*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().showView('network');
                splitWidget.showBoth();
                return [
                    2
                ];
            });
        }), 'network-sidebar', true);
        var tabbedPane = _this.sidebarLocation.tabbedPane();
        tabbedPane.setMinimumSize(100, 25);
        tabbedPane.element.classList.add('network-tabbed-pane');
        tabbedPane.element.addEventListener('keydown', function(event) {
            if (event.key !== _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.ESCAPE_KEY) {
                return;
            }
            splitWidget.hideSidebar();
            event.consume();
            void _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.logKeyDown(event.currentTarget, event, 'hide-sidebar');
        });
        var closeSidebar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarButton(i18nString(UIStrings.close), 'cross');
        closeSidebar.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
            return splitWidget.hideSidebar();
        });
        closeSidebar.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.close().track({
            click: true
        })));
        tabbedPane.rightToolbar().appendToolbarItem(closeSidebar);
        splitWidget.setSidebarWidget(tabbedPane);
        splitWidget.setMainWidget(panel);
        splitWidget.setDefaultFocusedChild(panel);
        _this.setDefaultFocusedChild(splitWidget);
        _this.progressBarContainer = document.createElement('div');
        _this.networkLogView = new _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_16__.NetworkLogView(_this.filterBar, _this.progressBarContainer, _this.networkLogLargeRowsSetting);
        _this.splitWidget.setSidebarWidget(_this.networkLogView);
        _this.fileSelectorElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.createFileSelectorElement(_this.networkLogView.onLoadFromFile.bind(_this.networkLogView));
        panel.element.appendChild(_this.fileSelectorElement);
        _this.detailsWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.VBox();
        _this.detailsWidget.element.classList.add('network-details-view');
        _this.splitWidget.setMainWidget(_this.detailsWidget);
        _this.closeButtonElement = document.createElement('div', {
            is: 'dt-close-button'
        });
        _this.closeButtonElement.addEventListener('click', /*#__PURE__*/ _async_to_generator(function() {
            var action;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        action = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ActionRegistry.ActionRegistry.instance().getAction('network.hide-request-details');
                        return [
                            4,
                            action.execute()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }), false);
        _this.closeButtonElement.style.margin = '0 5px';
        _this.networkLogShowOverviewSetting.addChangeListener(_this.toggleShowOverview, _assert_this_initialized(_this));
        _this.networkLogLargeRowsSetting.addChangeListener(_this.toggleLargerRequests, _assert_this_initialized(_this));
        _this.networkRecordFilmStripSetting.addChangeListener(_this.toggleRecordFilmStrip, _assert_this_initialized(_this));
        _this.preserveLogSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network-log.preserve-log');
        _this.recordLogSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network-log.record-log');
        _this.recordLogSetting.addChangeListener(function(param) {
            var data = param.data;
            return _this.toggleRecord(data);
        });
        _this.throttlingSelect = _this.createThrottlingConditionsSelect();
        _this.setupToolbarButtons(splitWidget);
        _this.toggleRecord(_this.recordLogSetting.get());
        _this.toggleShowOverview();
        _this.toggleLargerRequests();
        _this.toggleRecordFilmStrip();
        _this.updateUI();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.Events.WillReloadPage, _this.willReloadPage, _assert_this_initialized(_this), {
            scoped: true
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.Events.Load, _this.load, _assert_this_initialized(_this), {
            scoped: true
        });
        _this.networkLogView.addEventListener("RequestSelected" /* Events.RequestSelected */ , _this.onRequestSelected, _assert_this_initialized(_this));
        _this.networkLogView.addEventListener("RequestActivated" /* Events.RequestActivated */ , _this.onRequestActivated, _assert_this_initialized(_this));
        _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.NetworkLog.instance().addEventListener(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.Events.RequestAdded, _this.onUpdateRequest, _assert_this_initialized(_this));
        _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.NetworkLog.instance().addEventListener(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.Events.RequestUpdated, _this.onUpdateRequest, _assert_this_initialized(_this));
        _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.NetworkLog.instance().addEventListener(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.Events.Reset, _this.onNetworkLogReset, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(NetworkPanel, [
        {
            key: "throttlingSelectForTest",
            value: function throttlingSelectForTest() {
                return this.throttlingSelect;
            }
        },
        {
            key: "onWindowChanged",
            value: function onWindowChanged(event) {
                var startTime = Math.max(this.calculator.minimumBoundary(), event.data.startTime / 1000);
                var endTime = Math.min(this.calculator.maximumBoundary(), event.data.endTime / 1000);
                if (startTime === this.calculator.minimumBoundary() && endTime === this.calculator.maximumBoundary()) {
                    // Reset the filters for NetworkLogView when the window is reset
                    // to its boundaries. This clears the filters and allows the users
                    // to see the incoming requests after they have updated the curtains
                    // to be in the edges. (ex: by double clicking on the overview grid)
                    this.networkLogView.setWindow(0, 0);
                } else {
                    this.networkLogView.setWindow(startTime, endTime);
                }
            }
        },
        {
            key: "searchToggleClick",
            value: function searchToggleClick() {
                return _async_to_generator(function() {
                    var action;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                action = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ActionRegistry.ActionRegistry.instance().getAction('network.search');
                                return [
                                    4,
                                    action.execute()
                                ];
                            case 1:
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
            key: "setupToolbarButtons",
            value: function setupToolbarButtons(splitWidget) {
                var _this = this;
                var searchToggle = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarToggle(i18nString(UIStrings.search), 'search', undefined, 'search');
                function updateSidebarToggle() {
                    var isSidebarShowing = splitWidget.showMode() !== "OnlyMain" /* UI.SplitWidget.ShowMode.OnlyMain */ ;
                    searchToggle.setToggled(isSidebarShowing);
                    if (!isSidebarShowing) {
                        searchToggle.element.focus();
                    }
                }
                this.panelToolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.Toolbar.createActionButton(this.toggleRecordAction));
                this.panelToolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.Toolbar.createActionButtonForId('network.clear'));
                this.panelToolbar.appendSeparator();
                this.panelToolbar.appendToolbarItem(this.filterBar.filterButton());
                updateSidebarToggle();
                splitWidget.addEventListener("ShowModeChanged" /* UI.SplitWidget.Events.ShowModeChanged */ , updateSidebarToggle);
                searchToggle.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
                    void _this.searchToggleClick();
                });
                this.panelToolbar.appendToolbarItem(searchToggle);
                this.panelToolbar.appendSeparator();
                this.panelToolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarSettingCheckbox(this.preserveLogSetting, i18nString(UIStrings.doNotClearLogOnPageReload), i18nString(UIStrings.preserveLog)));
                this.panelToolbar.appendSeparator();
                var disableCacheCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarSettingCheckbox(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('cache-disabled'), i18nString(UIStrings.disableCacheWhileDevtoolsIsOpen), i18nString(UIStrings.disableCache));
                this.panelToolbar.appendToolbarItem(disableCacheCheckbox);
                this.panelToolbar.appendToolbarItem(this.throttlingSelect);
                var networkConditionsButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarButton(i18nString(UIStrings.moreNetworkConditions), 'network-settings', undefined, 'network-conditions');
                networkConditionsButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
                    void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().showView('network.config');
                }, this);
                this.panelToolbar.appendToolbarItem(networkConditionsButton);
                this.rightToolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarItem(this.progressBarContainer));
                this.rightToolbar.appendSeparator();
                this.rightToolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarSettingToggle(this.showSettingsPaneSetting, 'gear', i18nString(UIStrings.networkSettings), 'gear-filled', 'network-settings'));
                var settingsToolbarLeft = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.Toolbar('', this.settingsPane.element);
                settingsToolbarLeft.makeVertical();
                settingsToolbarLeft.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarSettingCheckbox(this.networkLogLargeRowsSetting, i18nString(UIStrings.showMoreInformationInRequestRows), i18nString(UIStrings.useLargeRequestRows)));
                settingsToolbarLeft.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarSettingCheckbox(this.networkLogShowOverviewSetting, i18nString(UIStrings.showOverviewOfNetworkRequests), i18nString(UIStrings.showOverview)));
                var settingsToolbarRight = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.Toolbar('', this.settingsPane.element);
                settingsToolbarRight.makeVertical();
                settingsToolbarRight.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarSettingCheckbox(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network.group-by-frame'), i18nString(UIStrings.groupRequestsByTopLevelRequest), i18nString(UIStrings.groupByFrame)));
                settingsToolbarRight.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarSettingCheckbox(this.networkRecordFilmStripSetting, i18nString(UIStrings.captureScreenshotsWhenLoadingA), i18nString(UIStrings.captureScreenshots)));
                this.panelToolbar.appendSeparator();
                var importHarButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarButton(i18nString(UIStrings.importHarFile), 'import', undefined, 'import-har');
                importHarButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
                    return _this.fileSelectorElement.click();
                }, this);
                this.panelToolbar.appendToolbarItem(importHarButton);
                var exportHarButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarButton(i18nString(UIStrings.exportHar), 'download', undefined, 'export-har');
                exportHarButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function(_event) {
                    void _this.networkLogView.exportAll();
                }, this);
                this.panelToolbar.appendToolbarItem(exportHarButton);
            }
        },
        {
            key: "updateSettingsPaneVisibility",
            value: function updateSettingsPaneVisibility() {
                this.settingsPane.element.classList.toggle('hidden', !this.showSettingsPaneSetting.get());
            }
        },
        {
            key: "createThrottlingConditionsSelect",
            value: function createThrottlingConditionsSelect() {
                var toolbarItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarComboBox(null, i18nString(UIStrings.throttling));
                toolbarItem.setMaxWidth(160);
                _mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_12__.ThrottlingManager.throttlingManager().decorateSelectWithNetworkThrottling(toolbarItem.selectElement());
                return toolbarItem;
            }
        },
        {
            key: "toggleRecord",
            value: function toggleRecord(toggled) {
                this.toggleRecordAction.setToggled(toggled);
                if (this.recordLogSetting.get() !== toggled) {
                    this.recordLogSetting.set(toggled);
                }
                this.networkLogView.setRecording(toggled);
                if (!toggled && this.filmStripRecorder) {
                    this.filmStripRecorder.stopRecording(this.filmStripAvailable.bind(this));
                }
            }
        },
        {
            key: "filmStripAvailable",
            value: function filmStripAvailable(filmStrip) {
                if (this.filmStripView) {
                    this.filmStripView.setModel(filmStrip);
                }
                var timestamps = filmStrip.frames.map(function(frame) {
                    // The network view works in seconds.
                    return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__.Helpers.Timing.microSecondsToSeconds(frame.screenshotEvent.ts);
                });
                this.networkLogView.addFilmStripFrames(timestamps);
            }
        },
        {
            key: "onNetworkLogReset",
            value: function onNetworkLogReset(event) {
                var clearIfPreserved = event.data.clearIfPreserved;
                if (!this.preserveLogSetting.get() || clearIfPreserved) {
                    this.calculator.reset();
                    this.overviewPane.reset();
                }
                if (this.filmStripView) {
                    this.resetFilmStripView();
                }
            }
        },
        {
            key: "willReloadPage",
            value: function willReloadPage() {
                if (this.pendingStopTimer) {
                    clearTimeout(this.pendingStopTimer);
                    delete this.pendingStopTimer;
                }
                if (this.isShowing() && this.filmStripRecorder) {
                    this.filmStripRecorder.startRecording();
                }
            }
        },
        {
            key: "load",
            value: function load() {
                if (this.filmStripRecorder && this.filmStripRecorder.isRecording()) {
                    if (this.pendingStopTimer) {
                        window.clearTimeout(this.pendingStopTimer);
                    }
                    this.pendingStopTimer = window.setTimeout(this.stopFilmStripRecording.bind(this), this.displayScreenshotDelay);
                }
            }
        },
        {
            key: "stopFilmStripRecording",
            value: function stopFilmStripRecording() {
                if (this.filmStripRecorder) {
                    this.filmStripRecorder.stopRecording(this.filmStripAvailable.bind(this));
                }
                delete this.pendingStopTimer;
            }
        },
        {
            key: "toggleLargerRequests",
            value: function toggleLargerRequests() {
                this.updateUI();
            }
        },
        {
            key: "toggleShowOverview",
            value: function toggleShowOverview() {
                var toggled = this.networkLogShowOverviewSetting.get();
                if (toggled) {
                    this.overviewPane.show(this.overviewPlaceholderElement);
                } else {
                    this.overviewPane.detach();
                }
                this.doResize();
            }
        },
        {
            key: "toggleRecordFilmStrip",
            value: function toggleRecordFilmStrip() {
                var toggled = this.networkRecordFilmStripSetting.get();
                if (toggled && !this.filmStripRecorder) {
                    this.filmStripView = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_9__.FilmStripView.FilmStripView();
                    this.filmStripView.element.classList.add('network-film-strip');
                    this.filmStripView.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('film-strip')));
                    this.filmStripRecorder = new FilmStripRecorder(this.networkLogView.timeCalculator(), this.filmStripView);
                    this.filmStripView.show(this.filmStripPlaceholderElement);
                    this.filmStripView.addEventListener("FrameSelected" /* PerfUI.FilmStripView.Events.FrameSelected */ , this.onFilmFrameSelected, this);
                    this.filmStripView.addEventListener("FrameEnter" /* PerfUI.FilmStripView.Events.FrameEnter */ , this.onFilmFrameEnter, this);
                    this.filmStripView.addEventListener("FrameExit" /* PerfUI.FilmStripView.Events.FrameExit */ , this.onFilmFrameExit, this);
                    this.resetFilmStripView();
                }
                if (!toggled && this.filmStripRecorder) {
                    if (this.filmStripView) {
                        this.filmStripView.detach();
                    }
                    this.filmStripView = null;
                    this.filmStripRecorder = null;
                }
            }
        },
        {
            key: "resetFilmStripView",
            value: function resetFilmStripView() {
                var reloadShortcut = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ShortcutRegistry.ShortcutRegistry.instance().shortcutsForAction('inspector-main.reload')[0];
                if (this.filmStripView) {
                    this.filmStripView.reset();
                    if (reloadShortcut) {
                        this.filmStripView.setStatusText(i18nString(UIStrings.hitSToReloadAndCaptureFilmstrip, {
                            PH1: reloadShortcut.title()
                        }));
                    }
                }
            }
        },
        {
            key: "elementsToRestoreScrollPositionsFor",
            value: function elementsToRestoreScrollPositionsFor() {
                return this.networkLogView.elementsToRestoreScrollPositionsFor();
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().setFlavor(NetworkPanel, this);
                this.registerCSSFiles([
                    _networkPanel_css_js__WEBPACK_IMPORTED_MODULE_18__["default"]
                ]);
                // Record the network tool load time after the panel has loaded.
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelLoaded('network', 'DevTools.Launch.Network');
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().setFlavor(NetworkPanel, null);
            }
        },
        {
            key: "revealAndHighlightRequest",
            value: function revealAndHighlightRequest(request) {
                this.hideRequestPanel();
                if (request) {
                    this.networkLogView.revealAndHighlightRequest(request);
                }
            }
        },
        {
            key: "revealAndHighlightRequestWithId",
            value: function revealAndHighlightRequestWithId(request) {
                this.hideRequestPanel();
                if (request) {
                    this.networkLogView.revealAndHighlightRequestWithId(request);
                }
            }
        },
        {
            key: "selectAndActivateRequest",
            value: function selectAndActivateRequest(request, shownTab, options) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().showView('network')
                                ];
                            case 1:
                                _state.sent();
                                _this.networkLogView.selectRequest(request, options);
                                _this.showRequestPanel(shownTab);
                                _this.networkLogView.revealAndHighlightRequest(request);
                                return [
                                    2,
                                    _this.networkItemView
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "handleFilterChanged",
            value: function handleFilterChanged() {
                this.hideRequestPanel();
            }
        },
        {
            key: "onRowSizeChanged",
            value: function onRowSizeChanged() {
                this.updateUI();
            }
        },
        {
            key: "onRequestSelected",
            value: function onRequestSelected(event) {
                var request = event.data;
                this.currentRequest = request;
                this.networkOverview.setHighlightedRequest(request);
                this.updateNetworkItemView();
            }
        },
        {
            key: "onRequestActivated",
            value: function onRequestActivated(event) {
                var _event_data = event.data, showPanel = _event_data.showPanel, tab = _event_data.tab, takeFocus = _event_data.takeFocus;
                if (showPanel) {
                    this.showRequestPanel(tab, takeFocus);
                } else {
                    this.hideRequestPanel();
                }
            }
        },
        {
            key: "showRequestPanel",
            value: function showRequestPanel(shownTab, takeFocus) {
                if (this.splitWidget.showMode() === "Both" /* UI.SplitWidget.ShowMode.Both */  && !shownTab && !takeFocus) {
                    // If panel is already shown, and we are not forcing a specific tab, return.
                    return;
                }
                this.clearNetworkItemView();
                if (this.currentRequest) {
                    var networkItemView = this.createNetworkItemView(shownTab);
                    if (networkItemView && takeFocus) {
                        networkItemView.focus();
                    }
                }
                this.updateUI();
            }
        },
        {
            key: "hideRequestPanel",
            value: function hideRequestPanel() {
                this.clearNetworkItemView();
                this.splitWidget.hideMain();
                this.updateUI();
            }
        },
        {
            key: "updateNetworkItemView",
            value: function updateNetworkItemView() {
                if (this.splitWidget.showMode() === "Both" /* UI.SplitWidget.ShowMode.Both */ ) {
                    this.clearNetworkItemView();
                    this.createNetworkItemView();
                    this.updateUI();
                }
            }
        },
        {
            key: "clearNetworkItemView",
            value: function clearNetworkItemView() {
                if (this.networkItemView) {
                    this.networkItemView.detach();
                    this.networkItemView = null;
                }
            }
        },
        {
            key: "createNetworkItemView",
            value: function createNetworkItemView(initialTab) {
                if (!this.currentRequest) {
                    return;
                }
                this.networkItemView = new _NetworkItemView_js__WEBPACK_IMPORTED_MODULE_15__.NetworkItemView(this.currentRequest, this.networkLogView.timeCalculator(), initialTab);
                this.networkItemView.leftToolbar().appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarItem(this.closeButtonElement));
                this.networkItemView.show(this.detailsWidget.element);
                this.splitWidget.showBoth();
                return this.networkItemView;
            }
        },
        {
            key: "updateUI",
            value: function updateUI() {
                if (this.detailsWidget) {
                    this.detailsWidget.element.classList.toggle('network-details-view-tall-header', this.networkLogLargeRowsSetting.get());
                }
                if (this.networkLogView) {
                    this.networkLogView.switchViewMode(!this.splitWidget.isResizable());
                }
            }
        },
        {
            key: "appendApplicableItems",
            value: function appendApplicableItems(event, contextMenu, target) {
                var _this = this;
                var appendRevealItem = function(request) {
                    contextMenu.revealSection().appendItem(i18nString(UIStrings.revealInNetworkPanel), function() {
                        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().showView('network').then(_this.networkLogView.resetFilter.bind(_this.networkLogView)).then(_this.revealAndHighlightRequest.bind(_this, request));
                    }, {
                        jslogContext: 'reveal-in-network'
                    });
                };
                if (event.target.isSelfOrDescendant(this.element)) {
                    return;
                }
                if (_instanceof(target, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Resource.Resource)) {
                    if (target.request) {
                        appendRevealItem(target.request);
                    }
                    return;
                }
                if (_instanceof(target, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.UISourceCode.UISourceCode)) {
                    var resource = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.ResourceUtils.resourceForURL(target.url());
                    if (resource && resource.request) {
                        appendRevealItem(resource.request);
                    }
                    return;
                }
                if (_instanceof(target, _timeline_utils_utils_js__WEBPACK_IMPORTED_MODULE_14__.NetworkRequest.TimelineNetworkRequest)) {
                    if (target.request) {
                        appendRevealItem(target.request);
                    }
                    return;
                }
                if (this.networkItemView && this.networkItemView.isShowing() && this.networkItemView.request() === target) {
                    return;
                }
                appendRevealItem(target);
            }
        },
        {
            key: "onFilmFrameSelected",
            value: function onFilmFrameSelected(event) {
                var timestamp = event.data;
                this.overviewPane.setWindowTimes(0, timestamp);
            }
        },
        {
            key: "onFilmFrameEnter",
            value: function onFilmFrameEnter(event) {
                var timestamp = event.data;
                this.networkOverview.selectFilmStripFrame(timestamp);
                this.networkLogView.selectFilmStripFrame(timestamp / 1000);
            }
        },
        {
            key: "onFilmFrameExit",
            value: function onFilmFrameExit() {
                this.networkOverview.clearFilmStripFrame();
                this.networkLogView.clearFilmStripFrame();
            }
        },
        {
            key: "onUpdateRequest",
            value: function onUpdateRequest(event) {
                var request = event.data.request;
                this.calculator.updateBoundaries(request);
                // FIXME: Unify all time units across the frontend!
                this.overviewPane.setBounds(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__.Types.Timing.MilliSeconds(this.calculator.minimumBoundary() * 1000), _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__.Types.Timing.MilliSeconds(this.calculator.maximumBoundary() * 1000));
                this.networkOverview.updateRequest(request);
            }
        },
        {
            key: "resolveLocation",
            value: function resolveLocation(locationName) {
                if (locationName === 'network-sidebar') {
                    return this.sidebarLocation;
                }
                return null;
            }
        }
    ], [
        {
            key: "instance",
            value: function instance(opts) {
                if (!networkPanelInstance || (opts === null || opts === void 0 ? void 0 : opts.forceNew)) {
                    var _opts_displayScreenshotDelay;
                    networkPanelInstance = new NetworkPanel((_opts_displayScreenshotDelay = opts === null || opts === void 0 ? void 0 : opts.displayScreenshotDelay) !== null && _opts_displayScreenshotDelay !== void 0 ? _opts_displayScreenshotDelay : 1000);
                }
                return networkPanelInstance;
            }
        },
        {
            key: "revealAndFilter",
            value: function revealAndFilter(filters) {
                var panel = NetworkPanel.instance();
                var filterString = '';
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = filters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var filter = _step.value;
                        if (filter.filterType) {
                            filterString += "".concat(filter.filterType, ":").concat(filter.filterValue, " ");
                        } else {
                            filterString += "".concat(filter.filterValue, " ");
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
                panel.networkLogView.setTextFilterValue(filterString);
                return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().showView('network');
            }
        },
        {
            key: "selectAndShowRequest",
            value: function selectAndShowRequest(request, tab, options) {
                return _async_to_generator(function() {
                    var panel;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                panel = NetworkPanel.instance();
                                return [
                                    4,
                                    panel.selectAndActivateRequest(request, tab, options)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return NetworkPanel;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Panel.Panel);
var RequestRevealer = /*#__PURE__*/ function() {
    "use strict";
    function RequestRevealer() {
        _class_call_check(this, RequestRevealer);
    }
    _create_class(RequestRevealer, [
        {
            key: "reveal",
            value: function reveal(request) {
                var panel = NetworkPanel.instance();
                return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().showView('network').then(panel.revealAndHighlightRequest.bind(panel, request));
            }
        }
    ]);
    return RequestRevealer;
}();
var RequestIdRevealer = /*#__PURE__*/ function() {
    "use strict";
    function RequestIdRevealer() {
        _class_call_check(this, RequestIdRevealer);
    }
    _create_class(RequestIdRevealer, [
        {
            key: "reveal",
            value: function reveal(requestId) {
                var panel = NetworkPanel.instance();
                return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().showView('network').then(panel.revealAndHighlightRequestWithId.bind(panel, requestId));
            }
        }
    ]);
    return RequestIdRevealer;
}();
var NetworkLogWithFilterRevealer = /*#__PURE__*/ function() {
    "use strict";
    function NetworkLogWithFilterRevealer() {
        _class_call_check(this, NetworkLogWithFilterRevealer);
    }
    _create_class(NetworkLogWithFilterRevealer, [
        {
            key: "reveal",
            value: function reveal(request) {
                if ('filters' in request) {
                    return NetworkPanel.revealAndFilter(request.filters);
                }
                return NetworkPanel.revealAndFilter(request.filter ? [
                    {
                        filterType: null,
                        filterValue: request.filter
                    }
                ] : []);
            }
        }
    ]);
    return NetworkLogWithFilterRevealer;
}();
var // Used to fetch screenshots of the page load and show them in the panel.
_traceEngine = /*#__PURE__*/ new WeakMap(), _collectedTraceEvents = /*#__PURE__*/ new WeakMap();
var FilmStripRecorder = /*#__PURE__*/ function() {
    "use strict";
    function FilmStripRecorder(timeCalculator, filmStripView) {
        _class_call_check(this, FilmStripRecorder);
        _define_property(this, "tracingManager", void 0);
        _define_property(this, "resourceTreeModel", void 0);
        _define_property(this, "timeCalculator", void 0);
        _define_property(this, "filmStripView", void 0);
        _define_property(this, "callback", void 0);
        _class_private_field_init(this, _traceEngine, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _collectedTraceEvents, {
            writable: true,
            value: []
        });
        _class_private_field_set(this, _traceEngine, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__.TraceModel.Model.createWithSubsetOfHandlers({
            Screenshots: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__.Handlers.ModelHandlers.Screenshots
        }));
        this.tracingManager = null;
        this.resourceTreeModel = null;
        this.timeCalculator = timeCalculator;
        this.filmStripView = filmStripView;
        this.callback = null;
    }
    _create_class(FilmStripRecorder, [
        {
            key: "traceEventsCollected",
            value: function traceEventsCollected(events) {
                var _$_class_private_field_get;
                (_$_class_private_field_get = _class_private_field_get(this, _collectedTraceEvents)).push.apply(_$_class_private_field_get, _to_consumable_array(events));
            }
        },
        {
            key: "tracingComplete",
            value: function tracingComplete() {
                var _this = this;
                return _async_to_generator(function() {
                    var data, zeroTimeInSeconds, filmStrip;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.tracingManager) {
                                    return [
                                        2
                                    ];
                                }
                                _this.tracingManager = null;
                                return [
                                    4,
                                    _class_private_field_get(_this, _traceEngine).parse(_class_private_field_get(_this, _collectedTraceEvents))
                                ];
                            case 1:
                                _state.sent();
                                data = _class_private_field_get(_this, _traceEngine).traceParsedData(_class_private_field_get(_this, _traceEngine).size() - 1);
                                if (!data) {
                                    return [
                                        2
                                    ];
                                }
                                zeroTimeInSeconds = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__.Types.Timing.Seconds(_this.timeCalculator.minimumBoundary());
                                filmStrip = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__.Extras.FilmStrip.fromTraceData(data, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__.Helpers.Timing.secondsToMicroseconds(zeroTimeInSeconds));
                                if (_this.callback) {
                                    _this.callback(filmStrip);
                                }
                                _this.callback = null;
                                // Now we have created the film strip and stored the data, we need to reset
                                // the trace processor so that it is ready to record again if the user
                                // refreshes the page.
                                _class_private_field_get(_this, _traceEngine).resetProcessor();
                                if (_this.resourceTreeModel) {
                                    _this.resourceTreeModel.resumeReload();
                                }
                                _this.resourceTreeModel = null;
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "tracingBufferUsage",
            value: function tracingBufferUsage() {}
        },
        {
            key: "eventsRetrievalProgress",
            value: function eventsRetrievalProgress(_progress) {}
        },
        {
            key: "startRecording",
            value: function startRecording() {
                var _SDK_TargetManager_TargetManager_instance_scopeTarget;
                _class_private_field_set(this, _collectedTraceEvents, []);
                this.filmStripView.reset();
                this.filmStripView.setStatusText(i18nString(UIStrings.recordingFrames));
                var tracingManager = (_SDK_TargetManager_TargetManager_instance_scopeTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().scopeTarget()) === null || _SDK_TargetManager_TargetManager_instance_scopeTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_scopeTarget.model(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__.TracingManager.TracingManager);
                if (this.tracingManager || !tracingManager) {
                    return;
                }
                this.tracingManager = tracingManager;
                this.resourceTreeModel = this.tracingManager.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel);
                void this.tracingManager.start(this, '-*,disabled-by-default-devtools.screenshot', '');
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.FilmStripStartedRecording);
            }
        },
        {
            key: "isRecording",
            value: function isRecording() {
                return Boolean(this.tracingManager);
            }
        },
        {
            key: "stopRecording",
            value: function stopRecording(callback) {
                if (!this.tracingManager) {
                    return;
                }
                this.tracingManager.stop();
                if (this.resourceTreeModel) {
                    this.resourceTreeModel.suspendReload();
                }
                this.callback = callback;
                this.filmStripView.setStatusText(i18nString(UIStrings.fetchingFrames));
            }
        }
    ]);
    return FilmStripRecorder;
}();
var ActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ActionDelegate() {
        _class_call_check(this, ActionDelegate);
    }
    _create_class(ActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(context, actionId) {
                var panel = context.flavor(NetworkPanel);
                if (panel === null) {
                    return false;
                }
                switch(actionId){
                    case 'network.toggle-recording':
                        {
                            panel.toggleRecord(!panel.recordLogSetting.get());
                            return true;
                        }
                    case 'network.hide-request-details':
                        {
                            if (!panel.networkItemView) {
                                return false;
                            }
                            panel.hideRequestPanel();
                            panel.networkLogView.resetFocus();
                            return true;
                        }
                    case 'network.search':
                        {
                            var selection = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.InspectorView.InspectorView.instance().element.window().getSelection();
                            if (!selection) {
                                return false;
                            }
                            var queryCandidate = '';
                            if (selection.rangeCount) {
                                queryCandidate = selection.toString().replace(/\r?\n.*/, '');
                            }
                            void SearchNetworkView.openSearch(queryCandidate);
                            return true;
                        }
                    case 'network.clear':
                        {
                            _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.NetworkLog.instance().reset(true);
                            return true;
                        }
                }
                return false;
            }
        }
    ]);
    return ActionDelegate;
}();
var RequestLocationRevealer = /*#__PURE__*/ function() {
    "use strict";
    function RequestLocationRevealer() {
        _class_call_check(this, RequestLocationRevealer);
    }
    _create_class(RequestLocationRevealer, [
        {
            key: "reveal",
            value: function reveal(location) {
                return _async_to_generator(function() {
                    var view, _location_searchMatch, lineNumber, columnNumber, matchLength, revealPosition, _location_header_header;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    NetworkPanel.instance().selectAndActivateRequest(location.request, location.tab, location.filterOptions)
                                ];
                            case 1:
                                view = _state.sent();
                                if (!view) {
                                    return [
                                        2
                                    ];
                                }
                                if (!location.searchMatch) return [
                                    3,
                                    3
                                ];
                                _location_searchMatch = location.searchMatch, lineNumber = _location_searchMatch.lineNumber, columnNumber = _location_searchMatch.columnNumber, matchLength = _location_searchMatch.matchLength;
                                revealPosition = {
                                    from: {
                                        lineNumber: lineNumber,
                                        columnNumber: columnNumber
                                    },
                                    to: {
                                        lineNumber: lineNumber,
                                        columnNumber: columnNumber + matchLength
                                    }
                                };
                                return [
                                    4,
                                    view.revealResponseBody(revealPosition)
                                ];
                            case 2:
                                _state.sent();
                                _state.label = 3;
                            case 3:
                                if (location.header) {
                                    ;
                                    view.revealHeader(location.header.section, (_location_header_header = location.header.header) === null || _location_header_header === void 0 ? void 0 : _location_header_header.name);
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return RequestLocationRevealer;
}();
var searchNetworkViewInstance;
var SearchNetworkView = /*#__PURE__*/ function(_Search_SearchView_SearchView) {
    "use strict";
    _inherits(SearchNetworkView, _Search_SearchView_SearchView);
    var _super = _create_super(SearchNetworkView);
    function SearchNetworkView() {
        _class_call_check(this, SearchNetworkView);
        return _super.call(this, 'network', new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(/* timeoutMs */ 200));
    }
    _create_class(SearchNetworkView, [
        {
            key: "createScope",
            value: function createScope() {
                return new _NetworkSearchScope_js__WEBPACK_IMPORTED_MODULE_19__.NetworkSearchScope(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.NetworkLog.instance());
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
                if (!searchNetworkViewInstance || forceNew) {
                    searchNetworkViewInstance = new SearchNetworkView();
                }
                return searchNetworkViewInstance;
            }
        },
        {
            key: "openSearch",
            value: function openSearch(query, searchImmediately) {
                return _async_to_generator(function() {
                    var searchView;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().showView('network.search-network-tab')
                                ];
                            case 1:
                                _state.sent();
                                searchView = SearchNetworkView.instance();
                                searchView.toggle(query, Boolean(searchImmediately));
                                return [
                                    2,
                                    searchView
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return SearchNetworkView;
} //# sourceMappingURL=NetworkPanel.js.map
(_search_search_js__WEBPACK_IMPORTED_MODULE_13__.SearchView.SearchView);


}),
"./panels/network/networkPanel.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (C) 2006, 2007, 2008 Apple Inc.  All rights reserved.\n * Copyright (C) 2009 Anthony Ricaud <rik@webkit.org>\n *\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions\n * are met:\n *\n * 1.  Redistributions of source code must retain the above copyright\n *     notice, this list of conditions and the following disclaimer.\n * 2.  Redistributions in binary form must reproduce the above copyright\n *     notice, this list of conditions and the following disclaimer in the\n *     documentation and/or other materials provided with the distribution.\n * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of\n *     its contributors may be used to endorse or promote products derived\n *     from this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY\n * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED\n * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\n * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY\n * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES\n * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;\n * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND\n * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF\n * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n:root {\n  --network-overview-total: var(--sys-color-surface-variant);\n  --network-overview-blocking: var(--sys-color-neutral-bright);\n  --network-overview-connecting: var(--ref-palette-yellow60);\n  --network-overview-service-worker: var(--sys-color-orange-bright);\n  --network-overview-service-worker-respond-with: var(--sys-color-cyan-bright);\n  --network-overview-push: var(--ref-palette-blue60);\n  --override-network-overview-proxy: var(--ref-palette-neutral60);\n  --network-overview-dns: var(--sys-color-cyan);\n  --network-overview-ssl: var(--ref-palette-purple70);\n  --override-network-overview-sending: var(--ref-palette-cyan60);\n  --network-overview-waiting: var(--ref-palette-green70);\n  --network-overview-receiving: var(--ref-palette-blue60);\n  --network-overview-queueing: var(--ref-palette-neutral100);\n  --network-grid-navigation-color: var(--ref-palette-blue90);\n  --network-grid-initiator-path-color: var(--ref-palette-green90);\n  --network-grid-initiated-path-color: var(--ref-palette-error80);\n  --network-grid-focus-selected-color-has-error: var(--sys-color-error-container);\n  --network-grid-from-frame-color: var(--ref-palette-cyan95);\n  --network-grid-is-product-color: var(--ref-palette-yellow95);\n  --network-frame-divider-color: var(--ref-palette-yellow60);\n}\n\n.theme-with-dark-background {\n  --network-grid-initiator-path-color: var(--ref-palette-green40);\n  --network-grid-initiated-path-color: var(--ref-palette-error20);\n  --network-grid-from-frame-color: var(--ref-palette-neutral50);\n  --network-grid-is-product-color: var(--ref-palette-neutral70);\n}\n\n.network-details-view {\n  background: var(--app-color-toolbar-background);\n}\n\n.network-details-view-tall-header {\n  border-top: 4px solid var(--app-color-toolbar-background);\n}\n\n.network-item-view {\n  display: flex;\n  background: var(--sys-color-cdt-base-container);\n}\n\n.network-item-preview-toolbar {\n  border-top: 1px solid var(--sys-color-divider);\n  background-color: var(--sys-color-surface1);\n}\n\n.resource-timing-view {\n  display: block;\n  margin: 6px;\n  color: var(--sys-color-on-surface);\n  overflow: auto;\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n.resource-timing-table {\n  width: 100% !important; /* stylelint-disable-line declaration-no-important */\n}\n\n#network-overview-panel {\n  flex: none;\n  position: relative;\n}\n\n#network-overview-container {\n  overflow: hidden;\n  flex: auto;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n#network-overview-container canvas {\n  width: 100%;\n  height: 100%;\n}\n\n.resources-dividers-label-bar {\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n#network-overview-grid .resources-dividers-label-bar {\n  pointer-events: auto;\n}\n\n.network .network-overview {\n  flex: 0 0 60px;\n}\n\n.network-overview .resources-dividers-label-bar .resources-divider {\n  background-color: transparent;\n}\n\n.network-overview .resources-dividers {\n  z-index: 250;\n}\n\n.request-view.html iframe {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.network-film-strip {\n  border-bottom: solid 1px var(--sys-color-divider);\n  flex: none !important; /* stylelint-disable-line declaration-no-important */\n}\n\n.network-film-strip-placeholder {\n  flex-shrink: 0;\n}\n\n.network-tabbed-pane {\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n.network-settings-pane {\n  flex: none;\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n.network-settings-pane .toolbar {\n  flex: 1 1;\n}\n\n.network-toolbar-container {\n  display: flex;\n  flex: none;\n}\n\n.network-toolbar-container > :first-child {\n  flex: 1 1 auto;\n}\n\n.panel.network .toolbar {\n  background-color: var(--sys-color-cdt-base-container);\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n@media (forced-colors: active) {\n  .panel.network .toolbar {\n    background-color: canvas;\n  }\n}\n\ndevtools-request-headers {\n  min-width: 360px;\n}\n\n/*# sourceURL=networkPanel.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);