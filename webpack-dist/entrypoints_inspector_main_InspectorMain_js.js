"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_inspector_main_InspectorMain_js"],{

/***/ "./entrypoints/inspector_main/InspectorMain.js":
/*!*****************************************************!*\
  !*** ./entrypoints/inspector_main/InspectorMain.js ***!
  \*****************************************************/
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
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _panels_mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../panels/mobile_throttling/mobile_throttling.js */ "./panels/mobile_throttling/mobile_throttling.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _nodeIcon_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nodeIcon.css.js */ "./entrypoints/inspector_main/nodeIcon.css.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









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
    #element;
    #button;
    constructor() {
        const element = document.createElement('div');
        const shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createShadowRootWithCoreStyles(element, { cssFile: [_nodeIcon_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]], delegatesFocus: undefined });
        this.#element = shadowRoot.createChild('div', 'node-icon');
        element.addEventListener('click', () => _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openNodeFrontend(), false);
        this.#button = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarItem(element);
        this.#button.setTitle(i18nString(UIStrings.openDedicatedTools));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addEventListener("AvailableTargetsChanged" /* SDK.TargetManager.Events.AvailableTargetsChanged */, event => this.#update(event.data));
        this.#button.setVisible(false);
        this.#update([]);
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!nodeIndicatorInstance || forceNew) {
            nodeIndicatorInstance = new NodeIndicator();
        }
        return nodeIndicatorInstance;
    }
    #update(targetInfos) {
        const hasNode = Boolean(targetInfos.find(target => target.type === 'node' && !target.attached));
        this.#element.classList.toggle('inactive', !hasNode);
        if (hasNode) {
            this.#button.setVisible(true);
        }
    }
    item() {
        return this.#button;
    }
}
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
    #autoAttachSetting;
    #adBlockEnabledSetting;
    #emulatePageFocusSetting;
    constructor() {
        this.#autoAttachSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('auto-attach-to-created-pages');
        this.#autoAttachSetting.addChangeListener(this.#updateAutoAttach, this);
        this.#updateAutoAttach();
        this.#adBlockEnabledSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network.ad-blocking-enabled');
        this.#adBlockEnabledSetting.addChangeListener(this.#update, this);
        this.#emulatePageFocusSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulate-page-focus');
        this.#emulatePageFocusSetting.addChangeListener(this.#update, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().observeTargets(this);
    }
    #updateTarget(target) {
        if (target.type() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame || target.parentTarget()?.type() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame) {
            return;
        }
        void target.pageAgent().invoke_setAdBlockingEnabled({ enabled: this.#adBlockEnabledSetting.get() });
        void target.emulationAgent().invoke_setFocusEmulationEnabled({ enabled: this.#emulatePageFocusSetting.get() });
    }
    #updateAutoAttach() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.setOpenNewWindowForPopups(this.#autoAttachSetting.get());
    }
    #update() {
        for (const target of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().targets()) {
            this.#updateTarget(target);
        }
    }
    targetAdded(target) {
        this.#updateTarget(target);
    }
    targetRemoved(_target) {
    }
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ChildTargetManager.ChildTargetManager.install();
//# sourceMappingURL=InspectorMain.js.map

/***/ }),

/***/ "./entrypoints/inspector_main/nodeIcon.css.js":
/*!****************************************************!*\
  !*** ./entrypoints/inspector_main/nodeIcon.css.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.node-icon {
  width: 28px;
  height: 26px;
  background-image: var(--image-file-nodeIcon);
  background-size: 17px 17px;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 80%;
  cursor: auto;
}

.node-icon:hover {
  opacity: 100%;
}

.node-icon.inactive {
  filter: grayscale(100%);
}

/*# sourceURL=nodeIcon.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);