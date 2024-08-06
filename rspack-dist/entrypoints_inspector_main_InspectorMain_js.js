"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_inspector_main_InspectorMain_js"], {
"./entrypoints/inspector_main/InspectorMain.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BackendSettingsSync: function() { return BackendSettingsSync; },
  FocusDebuggeeActionDelegate: function() { return FocusDebuggeeActionDelegate; },
  InspectorMainImpl: function() { return InspectorMainImpl; },
  NodeIndicator: function() { return NodeIndicator; },
  ReloadActionDelegate: function() { return ReloadActionDelegate; },
  SourcesPanelIndicator: function() { return SourcesPanelIndicator; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _panels_mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../panels/mobile_throttling/mobile_throttling.js */ "./panels/mobile_throttling/mobile_throttling.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _nodeIcon_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nodeIcon.css.js */ "./entrypoints/inspector_main/nodeIcon.css.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
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
     * @description Text that refers to the main target. The main target is the primary webpage that
     * DevTools is connected to. This text is used in various places in the UI as a label/name to inform
     * the user which target/webpage they are currently connected to, as DevTools may connect to multiple
     * targets at the same time in some scenarios.
     */ main: 'Main',
    /**
     * @description Text that refers to the tab target. The tab target is the Chrome tab that
     * DevTools is connected to. This text is used in various places in the UI as a label/name to inform
     * the user which target they are currently connected to, as DevTools may connect to multiple
     * targets at the same time in some scenarios.
     */ tab: 'Tab',
    /**
     * @description A warning shown to the user when JavaScript is disabled on the webpage that
     * DevTools is connected to.
     */ javascriptIsDisabled: 'JavaScript is disabled',
    /**
     * @description A message that prompts the user to open devtools for a specific environment (Node.js)
     */ openDedicatedTools: 'Open dedicated DevTools for `Node.js`'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('entrypoints/inspector_main/InspectorMain.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var inspectorMainImplInstance;
var InspectorMainImpl = /*#__PURE__*/ function() {
    "use strict";
    function InspectorMainImpl() {
        _class_call_check(this, InspectorMainImpl);
    }
    _create_class(InspectorMainImpl, [
        {
            key: "run",
            value: function run() {
                return _async_to_generator(function() {
                    var firstCall;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                firstCall = true;
                                return [
                                    4,
                                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Connections.initMainConnection(/*#__PURE__*/ _async_to_generator(function() {
                                        var type, waitForDebuggerInPage, name, target, waitForPrimaryPageTarget, debuggerModel;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    type = _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.Runtime.queryParam('v8only') ? _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Node : _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.Runtime.queryParam('targetType') === 'tab' ? _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Tab : _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame;
                                                    // TODO(crbug.com/1348385): support waiting for debugger with tab target.
                                                    waitForDebuggerInPage = type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame && _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.Runtime.queryParam('panel') === 'sources';
                                                    name = type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame ? i18nString(UIStrings.main) : i18nString(UIStrings.tab);
                                                    target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().createTarget('main', name, type, null, undefined, waitForDebuggerInPage);
                                                    waitForPrimaryPageTarget = function() {
                                                        return new Promise(function(resolve) {
                                                            var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance();
                                                            targetManager.observeTargets({
                                                                targetAdded: function(target) {
                                                                    if (target === targetManager.primaryPageTarget()) {
                                                                        target.setName(i18nString(UIStrings.main));
                                                                        resolve(target);
                                                                    }
                                                                },
                                                                targetRemoved: function(_) {}
                                                            });
                                                        });
                                                    };
                                                    return [
                                                        4,
                                                        waitForPrimaryPageTarget()
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    // Only resume target during the first connection,
                                                    // subsequent connections are due to connection hand-over,
                                                    // there is no need to pause in debugger.
                                                    if (!firstCall) {
                                                        return [
                                                            2
                                                        ];
                                                    }
                                                    firstCall = false;
                                                    if (!waitForDebuggerInPage) return [
                                                        3,
                                                        4
                                                    ];
                                                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerModel);
                                                    if (!debuggerModel) return [
                                                        3,
                                                        4
                                                    ];
                                                    if (!!debuggerModel.isReadyToPause()) return [
                                                        3,
                                                        3
                                                    ];
                                                    return [
                                                        4,
                                                        debuggerModel.once(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.Events.DebuggerIsReadyToPause)
                                                    ];
                                                case 2:
                                                    _state.sent();
                                                    _state.label = 3;
                                                case 3:
                                                    debuggerModel.pause();
                                                    _state.label = 4;
                                                case 4:
                                                    if (type !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Tab) {
                                                        void target.runtimeAgent().invoke_runIfWaitingForDebugger();
                                                    }
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    }), _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.TargetDetachedDialog.TargetDetachedDialog.webSocketConnectionLost)
                                ];
                            case 1:
                                _state.sent();
                                new SourcesPanelIndicator();
                                new BackendSettingsSync();
                                new _panels_mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_5__.NetworkPanelIndicator.NetworkPanelIndicator();
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.ReloadInspectedPage, function(param) {
                                    var hard = param.data;
                                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel.reloadAllPages(hard);
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
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
                if (!inspectorMainImplInstance || forceNew) {
                    inspectorMainImplInstance = new InspectorMainImpl();
                }
                return inspectorMainImplInstance;
            }
        }
    ]);
    return InspectorMainImpl;
}();
_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Runnable.registerEarlyInitializationRunnable(InspectorMainImpl.instance);
var ReloadActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ReloadActionDelegate() {
        _class_call_check(this, ReloadActionDelegate);
    }
    _create_class(ReloadActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(_context, actionId) {
                switch(actionId){
                    case 'inspector-main.reload':
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel.reloadAllPages(false);
                        return true;
                    case 'inspector-main.hard-reload':
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel.reloadAllPages(true);
                        return true;
                }
                return false;
            }
        }
    ]);
    return ReloadActionDelegate;
}();
var FocusDebuggeeActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function FocusDebuggeeActionDelegate() {
        _class_call_check(this, FocusDebuggeeActionDelegate);
    }
    _create_class(FocusDebuggeeActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(_context, _actionId) {
                var mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().primaryPageTarget();
                if (!mainTarget) {
                    return false;
                }
                void mainTarget.pageAgent().invoke_bringToFront();
                return true;
            }
        }
    ]);
    return FocusDebuggeeActionDelegate;
}();
var nodeIndicatorInstance;
var _element = /*#__PURE__*/ new WeakMap(), _button = /*#__PURE__*/ new WeakMap(), _update = /*#__PURE__*/ new WeakSet();
var NodeIndicator = /*#__PURE__*/ function() {
    "use strict";
    function NodeIndicator() {
        var _this = this;
        _class_call_check(this, NodeIndicator);
        _class_private_method_init(this, _update);
        _class_private_field_init(this, _element, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _button, {
            writable: true,
            value: void 0
        });
        var element = document.createElement('div');
        var shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createShadowRootWithCoreStyles(element, {
            cssFile: [
                _nodeIcon_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]
            ],
            delegatesFocus: undefined
        });
        _class_private_field_set(this, _element, shadowRoot.createChild('div', 'node-icon'));
        element.addEventListener('click', function() {
            return _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openNodeFrontend();
        }, false);
        _class_private_field_set(this, _button, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarItem(element));
        _class_private_field_get(this, _button).setTitle(i18nString(UIStrings.openDedicatedTools));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addEventListener("AvailableTargetsChanged" /* SDK.TargetManager.Events.AvailableTargetsChanged */ , function(event) {
            return _class_private_method_get(_this, _update, update).call(_this, event.data);
        });
        _class_private_field_get(this, _button).setVisible(false);
        _class_private_method_get(this, _update, update).call(this, []);
    }
    _create_class(NodeIndicator, [
        {
            key: "item",
            value: function item() {
                return _class_private_field_get(this, _button);
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
                if (!nodeIndicatorInstance || forceNew) {
                    nodeIndicatorInstance = new NodeIndicator();
                }
                return nodeIndicatorInstance;
            }
        }
    ]);
    return NodeIndicator;
}();
function update(targetInfos) {
    var hasNode = Boolean(targetInfos.find(function(target) {
        return target.type === 'node' && !target.attached;
    }));
    _class_private_field_get(this, _element).classList.toggle('inactive', !hasNode);
    if (hasNode) {
        _class_private_field_get(this, _button).setVisible(true);
    }
}
var SourcesPanelIndicator = function SourcesPanelIndicator() {
    "use strict";
    _class_call_check(this, SourcesPanelIndicator);
    var javaScriptDisabledChanged = function javaScriptDisabledChanged() {
        var warnings = [];
        if (_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('java-script-disabled').get()) {
            warnings.push(i18nString(UIStrings.javascriptIsDisabled));
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.InspectorView.InspectorView.instance().setPanelWarnings('sources', warnings);
    };
    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('java-script-disabled').addChangeListener(javaScriptDisabledChanged);
    javaScriptDisabledChanged();
};
var _autoAttachSetting = /*#__PURE__*/ new WeakMap(), _adBlockEnabledSetting = /*#__PURE__*/ new WeakMap(), _emulatePageFocusSetting = /*#__PURE__*/ new WeakMap(), _updateTarget = /*#__PURE__*/ new WeakSet(), _updateAutoAttach = /*#__PURE__*/ new WeakSet(), _update1 = /*#__PURE__*/ new WeakSet();
var BackendSettingsSync = /*#__PURE__*/ function() {
    "use strict";
    function BackendSettingsSync() {
        _class_call_check(this, BackendSettingsSync);
        _class_private_method_init(this, _updateTarget);
        _class_private_method_init(this, _updateAutoAttach);
        _class_private_method_init(this, _update1);
        _class_private_field_init(this, _autoAttachSetting, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _adBlockEnabledSetting, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _emulatePageFocusSetting, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _autoAttachSetting, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('auto-attach-to-created-pages'));
        _class_private_field_get(this, _autoAttachSetting).addChangeListener(_class_private_method_get(this, _updateAutoAttach, updateAutoAttach), this);
        _class_private_method_get(this, _updateAutoAttach, updateAutoAttach).call(this);
        _class_private_field_set(this, _adBlockEnabledSetting, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network.ad-blocking-enabled'));
        _class_private_field_get(this, _adBlockEnabledSetting).addChangeListener(_class_private_method_get(this, _update1, update1), this);
        _class_private_field_set(this, _emulatePageFocusSetting, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulate-page-focus'));
        _class_private_field_get(this, _emulatePageFocusSetting).addChangeListener(_class_private_method_get(this, _update1, update1), this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().observeTargets(this);
    }
    _create_class(BackendSettingsSync, [
        {
            key: "targetAdded",
            value: function targetAdded(target) {
                _class_private_method_get(this, _updateTarget, updateTarget).call(this, target);
            }
        },
        {
            key: "targetRemoved",
            value: function targetRemoved(_target) {}
        }
    ]);
    return BackendSettingsSync;
}();
function updateTarget(target) {
    var _target_parentTarget;
    if (target.type() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame || ((_target_parentTarget = target.parentTarget()) === null || _target_parentTarget === void 0 ? void 0 : _target_parentTarget.type()) === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame) {
        return;
    }
    void target.pageAgent().invoke_setAdBlockingEnabled({
        enabled: _class_private_field_get(this, _adBlockEnabledSetting).get()
    });
    void target.emulationAgent().invoke_setFocusEmulationEnabled({
        enabled: _class_private_field_get(this, _emulatePageFocusSetting).get()
    });
}
function updateAutoAttach() {
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.setOpenNewWindowForPopups(_class_private_field_get(this, _autoAttachSetting).get());
}
function update1() {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().targets()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var target = _step.value;
            _class_private_method_get(this, _updateTarget, updateTarget).call(this, target);
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
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ChildTargetManager.ChildTargetManager.install(); //# sourceMappingURL=InspectorMain.js.map


}),
"./entrypoints/inspector_main/nodeIcon.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.node-icon {\n  width: 28px;\n  height: 26px;\n  background-image: var(--image-file-nodeIcon);\n  background-size: 17px 17px;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 80%;\n  cursor: auto;\n}\n\n.node-icon:hover {\n  opacity: 100%;\n}\n\n.node-icon.inactive {\n  filter: grayscale(100%);\n}\n\n/*# sourceURL=nodeIcon.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);