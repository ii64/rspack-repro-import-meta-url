"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_inspector_main_InspectorMain_ts"],{

/***/ "./src/entrypoints/inspector_main/InspectorMain.ts":
/*!*********************************************************!*\
  !*** ./src/entrypoints/inspector_main/InspectorMain.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackendSettingsSync: () => (/* binding */ BackendSettingsSync),
/* harmony export */   FocusDebuggeeActionDelegate: () => (/* binding */ FocusDebuggeeActionDelegate),
/* harmony export */   InspectorMainImpl: () => (/* binding */ InspectorMainImpl),
/* harmony export */   NodeIndicator: () => (/* binding */ NodeIndicator),
/* harmony export */   ReloadActionDelegate: () => (/* binding */ ReloadActionDelegate),
/* harmony export */   SourcesPanelIndicator: () => (/* binding */ SourcesPanelIndicator)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _panels_mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../panels/mobile_throttling/mobile_throttling.js */ "./src/panels/mobile_throttling/mobile_throttling.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './nodeIcon.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NodeIndicator_instances, _NodeIndicator_element, _NodeIndicator_button, _NodeIndicator_update, _BackendSettingsSync_instances, _BackendSettingsSync_autoAttachSetting, _BackendSettingsSync_adBlockEnabledSetting, _BackendSettingsSync_emulatePageFocusSetting, _BackendSettingsSync_updateTarget, _BackendSettingsSync_updateAutoAttach, _BackendSettingsSync_update;









const UIStrings = {
    /**
     * @description Text that refers to the main target. The main target is the primary webpage that
     * DevTools is connected to. This text is used in various places in the UI as a label/name to inform
     * the user which target/webpage they are currently connected to, as DevTools may connect to multiple
     * targets at the same time in some scenarios.
     */
    main: 'Main',
    /**
     * @description Text that refers to the tab target. The tab target is the Chrome tab that
     * DevTools is connected to. This text is used in various places in the UI as a label/name to inform
     * the user which target they are currently connected to, as DevTools may connect to multiple
     * targets at the same time in some scenarios.
     */
    tab: 'Tab',
    /**
     * @description A warning shown to the user when JavaScript is disabled on the webpage that
     * DevTools is connected to.
     */
    javascriptIsDisabled: 'JavaScript is disabled',
    /**
     * @description A message that prompts the user to open devtools for a specific environment (Node.js)
     */
    openDedicatedTools: 'Open dedicated DevTools for `Node.js`',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('entrypoints/inspector_main/InspectorMain.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
let inspectorMainImplInstance;
class InspectorMainImpl {
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!inspectorMainImplInstance || forceNew) {
            inspectorMainImplInstance = new InspectorMainImpl();
        }
        return inspectorMainImplInstance;
    }
    async run() {
        let firstCall = true;
        await _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Connections.initMainConnection(async () => {
            const type = _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.Runtime.queryParam('v8only') ?
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Node :
                (_core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.Runtime.queryParam('targetType') === 'tab' ? _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Tab : _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame);
            // TODO(crbug.com/1348385): support waiting for debugger with tab target.
            const waitForDebuggerInPage = type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame && _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.Runtime.queryParam('panel') === 'sources';
            const name = type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame ? i18nString(UIStrings.main) : i18nString(UIStrings.tab);
            const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().createTarget('main', name, type, null, undefined, waitForDebuggerInPage);
            const waitForPrimaryPageTarget = () => {
                return new Promise(resolve => {
                    const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance();
                    targetManager.observeTargets({
                        targetAdded: (target) => {
                            if (target === targetManager.primaryPageTarget()) {
                                target.setName(i18nString(UIStrings.main));
                                resolve(target);
                            }
                        },
                        targetRemoved: (_) => { },
                    });
                });
            };
            await waitForPrimaryPageTarget();
            // Only resume target during the first connection,
            // subsequent connections are due to connection hand-over,
            // there is no need to pause in debugger.
            if (!firstCall) {
                return;
            }
            firstCall = false;
            if (waitForDebuggerInPage) {
                const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerModel);
                if (debuggerModel) {
                    if (!debuggerModel.isReadyToPause()) {
                        await debuggerModel.once(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.Events.DebuggerIsReadyToPause);
                    }
                    debuggerModel.pause();
                }
            }
            if (type !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Tab) {
                void target.runtimeAgent().invoke_runIfWaitingForDebugger();
            }
        }, _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.TargetDetachedDialog.TargetDetachedDialog.webSocketConnectionLost);
        new SourcesPanelIndicator();
        new BackendSettingsSync();
        new _panels_mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_5__.NetworkPanelIndicator.NetworkPanelIndicator();
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.ReloadInspectedPage, ({ data: hard }) => {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel.reloadAllPages(hard);
        });
    }
}
_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Runnable.registerEarlyInitializationRunnable(InspectorMainImpl.instance);
class ReloadActionDelegate {
    handleAction(_context, actionId) {
        switch (actionId) {
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
class FocusDebuggeeActionDelegate {
    handleAction(_context, _actionId) {
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!mainTarget) {
            return false;
        }
        void mainTarget.pageAgent().invoke_bringToFront();
        return true;
    }
}
let nodeIndicatorInstance;
class NodeIndicator {
    constructor() {
        _NodeIndicator_instances.add(this);
        _NodeIndicator_element.set(this, void 0);
        _NodeIndicator_button.set(this, void 0);
        const element = document.createElement('div');
        const shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createShadowRootWithCoreStyles(element, { cssFile: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './nodeIcon.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], delegatesFocus: undefined });
        __classPrivateFieldSet(this, _NodeIndicator_element, shadowRoot.createChild('div', 'node-icon'), "f");
        element.addEventListener('click', () => _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openNodeFrontend(), false);
        __classPrivateFieldSet(this, _NodeIndicator_button, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarItem(element), "f");
        __classPrivateFieldGet(this, _NodeIndicator_button, "f").setTitle(i18nString(UIStrings.openDedicatedTools));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.Events.AvailableTargetsChanged, event => __classPrivateFieldGet(this, _NodeIndicator_instances, "m", _NodeIndicator_update).call(this, event.data));
        __classPrivateFieldGet(this, _NodeIndicator_button, "f").setVisible(false);
        __classPrivateFieldGet(this, _NodeIndicator_instances, "m", _NodeIndicator_update).call(this, []);
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!nodeIndicatorInstance || forceNew) {
            nodeIndicatorInstance = new NodeIndicator();
        }
        return nodeIndicatorInstance;
    }
    item() {
        return __classPrivateFieldGet(this, _NodeIndicator_button, "f");
    }
}
_NodeIndicator_element = new WeakMap(), _NodeIndicator_button = new WeakMap(), _NodeIndicator_instances = new WeakSet(), _NodeIndicator_update = function _NodeIndicator_update(targetInfos) {
    const hasNode = Boolean(targetInfos.find(target => target.type === 'node' && !target.attached));
    __classPrivateFieldGet(this, _NodeIndicator_element, "f").classList.toggle('inactive', !hasNode);
    if (hasNode) {
        __classPrivateFieldGet(this, _NodeIndicator_button, "f").setVisible(true);
    }
};
class SourcesPanelIndicator {
    constructor() {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
            .moduleSetting('java-script-disabled')
            .addChangeListener(javaScriptDisabledChanged);
        javaScriptDisabledChanged();
        function javaScriptDisabledChanged() {
            const warnings = [];
            if (_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('java-script-disabled').get()) {
                warnings.push(i18nString(UIStrings.javascriptIsDisabled));
            }
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.InspectorView.InspectorView.instance().setPanelWarnings('sources', warnings);
        }
    }
}
class BackendSettingsSync {
    constructor() {
        _BackendSettingsSync_instances.add(this);
        _BackendSettingsSync_autoAttachSetting.set(this, void 0);
        _BackendSettingsSync_adBlockEnabledSetting.set(this, void 0);
        _BackendSettingsSync_emulatePageFocusSetting.set(this, void 0);
        __classPrivateFieldSet(this, _BackendSettingsSync_autoAttachSetting, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('auto-attach-to-created-pages'), "f");
        __classPrivateFieldGet(this, _BackendSettingsSync_autoAttachSetting, "f").addChangeListener(__classPrivateFieldGet(this, _BackendSettingsSync_instances, "m", _BackendSettingsSync_updateAutoAttach), this);
        __classPrivateFieldGet(this, _BackendSettingsSync_instances, "m", _BackendSettingsSync_updateAutoAttach).call(this);
        __classPrivateFieldSet(this, _BackendSettingsSync_adBlockEnabledSetting, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network.ad-blocking-enabled'), "f");
        __classPrivateFieldGet(this, _BackendSettingsSync_adBlockEnabledSetting, "f").addChangeListener(__classPrivateFieldGet(this, _BackendSettingsSync_instances, "m", _BackendSettingsSync_update), this);
        __classPrivateFieldSet(this, _BackendSettingsSync_emulatePageFocusSetting, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulate-page-focus'), "f");
        __classPrivateFieldGet(this, _BackendSettingsSync_emulatePageFocusSetting, "f").addChangeListener(__classPrivateFieldGet(this, _BackendSettingsSync_instances, "m", _BackendSettingsSync_update), this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().observeTargets(this);
    }
    targetAdded(target) {
        __classPrivateFieldGet(this, _BackendSettingsSync_instances, "m", _BackendSettingsSync_updateTarget).call(this, target);
    }
    targetRemoved(_target) {
    }
}
_BackendSettingsSync_autoAttachSetting = new WeakMap(), _BackendSettingsSync_adBlockEnabledSetting = new WeakMap(), _BackendSettingsSync_emulatePageFocusSetting = new WeakMap(), _BackendSettingsSync_instances = new WeakSet(), _BackendSettingsSync_updateTarget = function _BackendSettingsSync_updateTarget(target) {
    if (target.type() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame || target.parentTarget()?.type() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame) {
        return;
    }
    void target.pageAgent().invoke_setAdBlockingEnabled({ enabled: __classPrivateFieldGet(this, _BackendSettingsSync_adBlockEnabledSetting, "f").get() });
    void target.emulationAgent().invoke_setFocusEmulationEnabled({ enabled: __classPrivateFieldGet(this, _BackendSettingsSync_emulatePageFocusSetting, "f").get() });
}, _BackendSettingsSync_updateAutoAttach = function _BackendSettingsSync_updateAutoAttach() {
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.setOpenNewWindowForPopups(__classPrivateFieldGet(this, _BackendSettingsSync_autoAttachSetting, "f").get());
}, _BackendSettingsSync_update = function _BackendSettingsSync_update() {
    for (const target of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().targets()) {
        __classPrivateFieldGet(this, _BackendSettingsSync_instances, "m", _BackendSettingsSync_updateTarget).call(this, target);
    }
};
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ChildTargetManager.ChildTargetManager.install();


/***/ })

}]);