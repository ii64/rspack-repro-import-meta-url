"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_elements_ts"],{

/***/ "./src/panels/elements/ElementStatePaneWidget.ts":
/*!*******************************************************!*\
  !*** ./src/panels/elements/ElementStatePaneWidget.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonProvider: () => (/* binding */ ButtonProvider),
/* harmony export */   ElementStatePaneWidget: () => (/* binding */ ElementStatePaneWidget)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ElementsPanel.js */ "./src/panels/elements/ElementsPanel.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './elementStatePaneWidget.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









const UIStrings = {
    /**
     * @description Title of a section in the Element State Pane Widget of the Elements panel. The
     * controls in this section allow users to force a particular state on the selected element, e.g. a
     * focused state via :focus or a hover state via :hover.
     */
    forceElementState: 'Force element state',
    /**
     * @description Tooltip text in Element State Pane Widget of the Elements panel. For a button that
     * opens a tool that toggles the various states of the selected element on/off.
     */
    toggleElementState: 'Toggle Element State',
    /**
     * @description The name of a checkbox setting in the Element & Page State Pane Widget of the Elements panel.. This setting
     * emulates/pretends that the webpage is focused.
     */
    emulateFocusedPage: 'Emulate a focused page',
    /**
     * @description Explanation text for the 'Emulate a focused page' setting in the Rendering tool.
     */
    emulatesAFocusedPage: 'Keep page focused. Commonly used for debugging disappearing elements.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/elements/ElementStatePaneWidget.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class ElementStatePaneWidget extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.Widget {
    constructor() {
        super(true);
        Object.defineProperty(this, "inputs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "inputStates", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cssModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.contentElement.className = 'styles-element-state-pane';
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('element-states')}`);
        const inputs = [];
        this.inputs = inputs;
        this.inputStates = new WeakMap();
        const createSectionHeader = (title) => {
            const sectionHeaderContainer = document.createElement('div');
            sectionHeaderContainer.classList.add('section-header');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextChild(sectionHeaderContainer.createChild('span'), title);
            return sectionHeaderContainer;
        };
        const clickListener = (event) => {
            const node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
            if (!node || !(event.target instanceof HTMLInputElement)) {
                return;
            }
            const state = this.inputStates.get(event.target);
            if (!state) {
                return;
            }
            node.domModel().cssModel().forcePseudoState(node, state, event.target.checked);
        };
        const createElementStateCheckbox = (state) => {
            const td = document.createElement('td');
            const label = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.CheckboxLabel.create(':' + state, undefined, undefined, undefined, true);
            const input = label.checkboxElement;
            this.inputStates.set(input, state);
            input.addEventListener('click', clickListener, false);
            input.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toggle().track({ click: true }).context(state)}`);
            inputs.push(input);
            td.appendChild(label);
            return td;
        };
        const createEmulateFocusedPageCheckbox = () => {
            const div = document.createElement('div');
            div.classList.add('page-state-checkbox');
            const label = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.emulateFocusedPage), undefined, undefined, undefined, true);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.SettingsUI.bindCheckbox(label.checkboxElement, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulate-page-focus'), {
                enable: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ToggleEmulateFocusedPageFromStylesPaneOn,
                disable: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ToggleEmulateFocusedPageFromStylesPaneOff,
            });
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(label.textElement, i18nString(UIStrings.emulatesAFocusedPage));
            const link = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.XLink.XLink.create('https://goo.gle/devtools-emulate-focused-page', undefined, undefined, undefined, 'learn-more');
            link.textContent = '';
            link.style.setProperty('display', 'inline-flex');
            const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon();
            icon.data = { iconName: 'help', color: 'var(--icon-default)', width: '16px', height: '16px' };
            link.prepend(icon);
            div.appendChild(label);
            div.appendChild(link);
            return div;
        };
        this.contentElement.className = 'styles-element-state-pane';
        // Populate page states
        const keepPageFocusedCheckbox = createEmulateFocusedPageCheckbox();
        this.contentElement.appendChild(keepPageFocusedCheckbox);
        // Populate element states
        this.contentElement.appendChild(createSectionHeader(i18nString(UIStrings.forceElementState)));
        const table = document.createElement('table');
        table.classList.add('source-code');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.markAsPresentation(table);
        let tr = table.createChild('tr');
        tr.appendChild(createElementStateCheckbox('active'));
        tr.appendChild(createElementStateCheckbox('hover'));
        tr = table.createChild('tr');
        tr.appendChild(createElementStateCheckbox('focus'));
        tr.appendChild(createElementStateCheckbox('visited'));
        tr = table.createChild('tr');
        tr.appendChild(createElementStateCheckbox('focus-within'));
        tr.appendChild(createElementStateCheckbox('focus-visible'));
        tr = table.createChild('tr');
        tr.appendChild(createElementStateCheckbox('target'));
        this.contentElement.appendChild(table);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode, this.update, this);
    }
    updateModel(cssModel) {
        if (this.cssModel === cssModel) {
            return;
        }
        if (this.cssModel) {
            this.cssModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.PseudoStateForced, this.update, this);
        }
        this.cssModel = cssModel;
        if (this.cssModel) {
            this.cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.PseudoStateForced, this.update, this);
        }
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './elementStatePaneWidget.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.update();
    }
    update() {
        let node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
        if (node) {
            node = node.enclosingElementOrSelf();
        }
        this.updateModel(node ? node.domModel().cssModel() : null);
        if (node) {
            const nodePseudoState = node.domModel().cssModel().pseudoState(node);
            for (const input of this.inputs) {
                input.disabled = Boolean(node.pseudoType());
                const state = this.inputStates.get(input);
                input.checked = nodePseudoState && state !== undefined ? nodePseudoState.indexOf(state) >= 0 : false;
            }
        }
        else {
            for (const input of this.inputs) {
                input.disabled = true;
                input.checked = false;
            }
        }
        ButtonProvider.instance().item().setChecked(this.inputs.some(input => input.checked));
    }
}
let buttonProviderInstance;
class ButtonProvider {
    constructor() {
        Object.defineProperty(this, "button", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.button = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarToggle(i18nString(UIStrings.toggleElementState), 'hover');
        this.button.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton.Events.Click, this.clicked, this);
        this.button.element.classList.add('element-state');
        this.button.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toggleSubpane('element-states').track({ click: true })}`);
        this.button.element.style.setProperty('--dot-toggle-top', '12px');
        this.button.element.style.setProperty('--dot-toggle-left', '18px');
        this.view = new ElementStatePaneWidget();
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!buttonProviderInstance || forceNew) {
            buttonProviderInstance = new ButtonProvider();
        }
        return buttonProviderInstance;
    }
    clicked() {
        _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_7__.ElementsPanel.instance().showToolbarPane(!this.view.isShowing() ? this.view : null, this.button);
    }
    item() {
        return this.button;
    }
}


/***/ }),

/***/ "./src/panels/elements/InspectElementModeController.ts":
/*!*************************************************************!*\
  !*** ./src/panels/elements/InspectElementModeController.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InspectElementModeController: () => (/* binding */ InspectElementModeController),
/* harmony export */   ToggleSearchActionDelegate: () => (/* binding */ ToggleSearchActionDelegate)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ElementsPanel.js */ "./src/panels/elements/ElementsPanel.ts");
/*
 * Copyright (C) 2013 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */







let inspectElementModeController;
class InspectElementModeController {
    constructor() {
        Object.defineProperty(this, "toggleSearchAction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "mode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "showDetailedInspectTooltipSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.toggleSearchAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ActionRegistry.ActionRegistry.instance().getAction('elements.toggle-element-search');
        this.mode = _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Overlay.InspectMode.None;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.Events.SuspendStateChanged, this.suspendStateChanged, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.Events.ExitedInspectMode, () => this.setMode(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Overlay.InspectMode.None), undefined, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel.setInspectNodeHandler(this.inspectNode.bind(this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel, this, { scoped: true });
        this.showDetailedInspectTooltipSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-detailed-inspect-tooltip');
        this.showDetailedInspectTooltipSetting.addChangeListener(this.showDetailedInspectTooltipChanged.bind(this));
        document.addEventListener('keydown', event => {
            if (event.keyCode !== _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.KeyboardShortcut.Keys.Esc.code) {
                return;
            }
            if (!this.isInInspectElementMode()) {
                return;
            }
            this.setMode(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Overlay.InspectMode.None);
            event.consume(true);
            void _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.logKeyDown(null, event, 'cancel-inspect-mode');
        }, true);
    }
    static instance({ forceNew } = { forceNew: false }) {
        if (!inspectElementModeController || forceNew) {
            inspectElementModeController = new InspectElementModeController();
        }
        return inspectElementModeController;
    }
    modelAdded(overlayModel) {
        // When DevTools are opening in the inspect element mode, the first target comes in
        // much later than the InspectorFrontendAPI.enterInspectElementMode event.
        if (this.mode === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Overlay.InspectMode.None) {
            return;
        }
        void overlayModel.setInspectMode(this.mode, this.showDetailedInspectTooltipSetting.get());
    }
    modelRemoved(_overlayModel) {
    }
    isInInspectElementMode() {
        return this.mode !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Overlay.InspectMode.None;
    }
    toggleInspectMode() {
        let mode;
        if (this.isInInspectElementMode()) {
            mode = _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Overlay.InspectMode.None;
        }
        else {
            mode = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-ua-shadow-dom').get() ?
                _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Overlay.InspectMode.SearchForUAShadowDOM :
                _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Overlay.InspectMode.SearchForNode;
        }
        this.setMode(mode);
    }
    captureScreenshotMode() {
        this.setMode(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Overlay.InspectMode.CaptureAreaScreenshot);
    }
    setMode(mode) {
        if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().allTargetsSuspended()) {
            return;
        }
        this.mode = mode;
        for (const overlayModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel, { scoped: true })) {
            void overlayModel.setInspectMode(mode, this.showDetailedInspectTooltipSetting.get());
        }
        this.toggleSearchAction.setToggled(this.isInInspectElementMode());
    }
    suspendStateChanged() {
        if (!_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().allTargetsSuspended()) {
            return;
        }
        this.mode = _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Overlay.InspectMode.None;
        this.toggleSearchAction.setToggled(false);
    }
    inspectNode(node) {
        void _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_6__.ElementsPanel.instance().revealAndSelectNode(node, true, true);
    }
    showDetailedInspectTooltipChanged() {
        this.setMode(this.mode);
    }
}
class ToggleSearchActionDelegate {
    handleAction(_context, actionId) {
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.queryParam('isSharedWorker')) {
            return false;
        }
        inspectElementModeController = InspectElementModeController.instance();
        if (!inspectElementModeController) {
            return false;
        }
        if (actionId === 'elements.toggle-element-search') {
            inspectElementModeController.toggleInspectMode();
        }
        else if (actionId === 'elements.capture-area-screenshot') {
            inspectElementModeController.captureScreenshotMode();
        }
        return true;
    }
}


/***/ }),

/***/ "./src/panels/elements/NodeStackTraceWidget.ts":
/*!*****************************************************!*\
  !*** ./src/panels/elements/NodeStackTraceWidget.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaxLengthForLinks: () => (/* binding */ MaxLengthForLinks),
/* harmony export */   NodeStackTraceWidget: () => (/* binding */ NodeStackTraceWidget)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './nodeStackTraceWidget.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Message displayed when no JavaScript stack trace is available for the DOM node in the Stack Trace widget of the Elements panel
     */
    noStackTraceAvailable: 'No stack trace available',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/NodeStackTraceWidget.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class NodeStackTraceWidget extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ThrottledWidget.ThrottledWidget {
    constructor() {
        super(true /* isWebComponent */);
        Object.defineProperty(this, "noStackTraceElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "creationStackTraceElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "linkifier", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.noStackTraceElement = this.contentElement.createChild('div', 'gray-info-message');
        this.noStackTraceElement.textContent = i18nString(UIStrings.noStackTraceAvailable);
        this.creationStackTraceElement = this.contentElement.createChild('div', 'stack-trace');
        this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.Linkifier.Linkifier(MaxLengthForLinks);
    }
    wasShown() {
        super.wasShown();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode, this.update, this);
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './nodeStackTraceWidget.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.update();
    }
    willHide() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().removeFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode, this.update, this);
    }
    async doUpdate() {
        const node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode);
        if (!node) {
            this.noStackTraceElement.classList.remove('hidden');
            this.creationStackTraceElement.classList.add('hidden');
            return;
        }
        const creationStackTrace = await node.creationStackTrace();
        if (creationStackTrace) {
            this.noStackTraceElement.classList.add('hidden');
            this.creationStackTraceElement.classList.remove('hidden');
            const stackTracePreview = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.JSPresentationUtils.buildStackTracePreviewContents(node.domModel().target(), this.linkifier, { stackTrace: creationStackTrace, tabStops: undefined });
            this.creationStackTraceElement.removeChildren();
            this.creationStackTraceElement.appendChild(stackTracePreview.element);
        }
        else {
            this.noStackTraceElement.classList.remove('hidden');
            this.creationStackTraceElement.classList.add('hidden');
        }
    }
}
const MaxLengthForLinks = 40;


/***/ }),

/***/ "./src/panels/elements/PropertiesWidget.ts":
/*!*************************************************!*\
  !*** ./src/panels/elements/PropertiesWidget.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertiesWidget: () => (/* binding */ PropertiesWidget)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./src/ui/legacy/components/object_ui/object_ui.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './propertiesWidget.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2007 Apple Inc.  All rights reserved.
 * Copyright (C) 2014 Google Inc. All rights reserved.
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
 */









const OBJECT_GROUP_NAME = 'properties-sidebar-pane';
const UIStrings = {
    /**
     * @description Text on the checkbox in the Properties tab of the Elements panel, which controls whether
     * all properties of the currently selected DOM element are shown, or only meaningful properties (i.e.
     * excluding properties whose values aren't set for example).
     */
    showAll: 'Show all',
    /**
     * @description Tooltip on the checkbox in the Properties tab of the Elements panel, which controls whether
     * all properties of the currently selected DOM element are shown, or only meaningful properties (i.e.
     * excluding properties whose values aren't set for example).
     */
    showAllTooltip: 'When unchecked, only properties whose values are neither null nor undefined will be shown',
    /**
     * @description Text shown to the user when a filter is applied in the Properties tab of the Elements panel, but
     * no properties matched the filter and thus no results were returned.
     */
    noMatchingProperty: 'No matching property',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/elements/PropertiesWidget.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class PropertiesWidget extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ThrottledWidget.ThrottledWidget {
    constructor(throttlingTimeout) {
        super(true /* isWebComponent */, throttlingTimeout);
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "showAllPropertiesSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "filterRegex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "noMatchesElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "treeOutline", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "expandController", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lastRequestedNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.showAllPropertiesSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('show-all-properties', false);
        this.showAllPropertiesSetting.addChangeListener(this.filterList.bind(this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.Events.AttrModified, this.onNodeChange, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.Events.AttrRemoved, this.onNodeChange, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.Events.CharacterDataModified, this.onNodeChange, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.Events.ChildNodeCountUpdated, this.onNodeChange, this, { scoped: true });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMNode, this.setNode, this);
        this.node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMNode);
        const hbox = this.contentElement.createChild('div', 'hbox properties-widget-toolbar');
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('styles-pane-toolbar', hbox);
        const filterInput = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarFilter(undefined, 1, 1, undefined, undefined, false);
        filterInput.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarInput.Event.TextChanged, this.onFilterChanged, this);
        toolbar.appendToolbarItem(filterInput);
        toolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarSettingCheckbox(this.showAllPropertiesSetting, i18nString(UIStrings.showAllTooltip), i18nString(UIStrings.showAll)));
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('element-properties').track({ resize: true })}`);
        this.noMatchesElement = this.contentElement.createChild('div', 'gray-info-message hidden');
        this.noMatchesElement.textContent = i18nString(UIStrings.noMatchingProperty);
        this.treeOutline = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeOutline({ readOnly: true });
        this.treeOutline.setShowSelectionOnKeyboardFocus(/* show */ true, /* preventTabOrder */ false);
        this.expandController =
            new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeExpandController(this.treeOutline);
        this.contentElement.appendChild(this.treeOutline.element);
        this.treeOutline.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.Events.ElementExpanded, () => {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.DOMPropertiesExpanded);
        });
        this.update();
    }
    onFilterChanged(event) {
        this.filterRegex = event.data ? new RegExp(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.escapeForRegExp(event.data), 'i') : null;
        this.filterList();
    }
    filterList() {
        let noMatches = true;
        for (const element of this.treeOutline.rootElement().children()) {
            const { property } = element;
            const hidden = !property?.match({
                includeNullOrUndefinedValues: this.showAllPropertiesSetting.get(),
                regex: this.filterRegex,
            });
            if (!hidden) {
                noMatches = false;
            }
            element.hidden = hidden;
        }
        this.noMatchesElement.classList.toggle('hidden', !noMatches);
    }
    setNode(event) {
        this.node = event.data;
        this.update();
    }
    async doUpdate() {
        if (this.lastRequestedNode) {
            this.lastRequestedNode.domModel().runtimeModel().releaseObjectGroup(OBJECT_GROUP_NAME);
            delete this.lastRequestedNode;
        }
        if (!this.node) {
            this.treeOutline.removeChildren();
            return;
        }
        this.lastRequestedNode = this.node;
        const object = await this.node.resolveToObject(OBJECT_GROUP_NAME);
        if (!object) {
            return;
        }
        const treeElement = this.treeOutline.rootElement();
        let { properties } = await _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RemoteObject.RemoteObject.loadFromObjectPerProto(object, true /* generatePreview */);
        treeElement.removeChildren();
        if (properties === null) {
            properties = [];
        }
        _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__.ObjectPropertiesSection.ObjectPropertyTreeElement.populateWithProperties(treeElement, properties, null, true /* skipProto */, true /* skipGettersAndSetters */, object);
        this.filterList();
    }
    onNodeChange(event) {
        if (!this.node) {
            return;
        }
        const data = event.data;
        const node = (data instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMNode ? data : data.node);
        if (this.node !== node) {
            return;
        }
        this.update();
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './propertiesWidget.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}


/***/ }),

/***/ "./src/panels/elements/elements.ts":
/*!*****************************************!*\
  !*** ./src/panels/elements/elements.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessibilityTreeUtils: () => (/* reexport module object */ _AccessibilityTreeUtils_js__WEBPACK_IMPORTED_MODULE_25__),
/* harmony export */   AccessibilityTreeView: () => (/* reexport module object */ _AccessibilityTreeView_js__WEBPACK_IMPORTED_MODULE_26__),
/* harmony export */   CSSRuleValidator: () => (/* reexport module object */ _CSSRuleValidator_js__WEBPACK_IMPORTED_MODULE_20__),
/* harmony export */   ClassesPaneWidget: () => (/* reexport module object */ _ClassesPaneWidget_js__WEBPACK_IMPORTED_MODULE_22__),
/* harmony export */   ColorSwatchPopoverIcon: () => (/* reexport module object */ _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   ComputedStyleModel: () => (/* reexport module object */ _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   ComputedStyleWidget: () => (/* reexport module object */ _ComputedStyleWidget_js__WEBPACK_IMPORTED_MODULE_19__),
/* harmony export */   DOMLinkifier: () => (/* reexport module object */ _DOMLinkifier_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   DOMPath: () => (/* reexport module object */ _DOMPath_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   ElementStatePaneWidget: () => (/* reexport module object */ _ElementStatePaneWidget_js__WEBPACK_IMPORTED_MODULE_23__),
/* harmony export */   ElementsPanel: () => (/* reexport module object */ _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_21__),
/* harmony export */   ElementsSidebarPane: () => (/* reexport module object */ _ElementsSidebarPane_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   ElementsTreeElement: () => (/* reexport module object */ _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   ElementsTreeElementHighlighter: () => (/* reexport module object */ _ElementsTreeElementHighlighter_js__WEBPACK_IMPORTED_MODULE_24__),
/* harmony export */   ElementsTreeOutline: () => (/* reexport module object */ _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   EventListenersWidget: () => (/* reexport module object */ _EventListenersWidget_js__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   InspectElementModeController: () => (/* reexport module object */ _InspectElementModeController_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   LayersWidget: () => (/* reexport module object */ _LayersWidget_js__WEBPACK_IMPORTED_MODULE_27__),
/* harmony export */   MarkerDecorator: () => (/* reexport module object */ _MarkerDecorator_js__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   MetricsSidebarPane: () => (/* reexport module object */ _MetricsSidebarPane_js__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   NodeStackTraceWidget: () => (/* reexport module object */ _NodeStackTraceWidget_js__WEBPACK_IMPORTED_MODULE_14__),
/* harmony export */   PlatformFontsWidget: () => (/* reexport module object */ _PlatformFontsWidget_js__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   PropertiesWidget: () => (/* reexport module object */ _PropertiesWidget_js__WEBPACK_IMPORTED_MODULE_13__),
/* harmony export */   PropertyMatchers: () => (/* reexport module object */ _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_28__),
/* harmony export */   PropertyRenderer: () => (/* reexport module object */ _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_29__),
/* harmony export */   StyleEditorWidget: () => (/* reexport module object */ _StyleEditorWidget_js__WEBPACK_IMPORTED_MODULE_30__),
/* harmony export */   StylePropertiesSection: () => (/* reexport module object */ _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_15__),
/* harmony export */   StylePropertyHighlighter: () => (/* reexport module object */ _StylePropertyHighlighter_js__WEBPACK_IMPORTED_MODULE_16__),
/* harmony export */   StylePropertyTreeElement: () => (/* reexport module object */ _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_18__),
/* harmony export */   StylePropertyUtils: () => (/* reexport module object */ _StylePropertyUtils_js__WEBPACK_IMPORTED_MODULE_31__),
/* harmony export */   StylesSidebarPane: () => (/* reexport module object */ _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_17__),
/* harmony export */   TopLayerContainer: () => (/* reexport module object */ _TopLayerContainer_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   WebCustomData: () => (/* reexport module object */ _WebCustomData_js__WEBPACK_IMPORTED_MODULE_32__)
/* harmony export */ });
/* harmony import */ var _InspectElementModeController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InspectElementModeController.js */ "./src/panels/elements/InspectElementModeController.ts");
/* harmony import */ var _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorSwatchPopoverIcon.js */ "./src/panels/elements/ColorSwatchPopoverIcon.ts");
/* harmony import */ var _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputedStyleModel.js */ "./src/panels/elements/ComputedStyleModel.ts");
/* harmony import */ var _DOMLinkifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMLinkifier.js */ "./src/panels/elements/DOMLinkifier.ts");
/* harmony import */ var _DOMPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMPath.js */ "./src/panels/elements/DOMPath.ts");
/* harmony import */ var _ElementsSidebarPane_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElementsSidebarPane.js */ "./src/panels/elements/ElementsSidebarPane.ts");
/* harmony import */ var _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ElementsTreeElement.js */ "./src/panels/elements/ElementsTreeElement.ts");
/* harmony import */ var _TopLayerContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopLayerContainer.js */ "./src/panels/elements/TopLayerContainer.ts");
/* harmony import */ var _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ElementsTreeOutline.js */ "./src/panels/elements/ElementsTreeOutline.ts");
/* harmony import */ var _EventListenersWidget_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EventListenersWidget.js */ "./src/panels/elements/EventListenersWidget.ts");
/* harmony import */ var _MarkerDecorator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MarkerDecorator.js */ "./src/panels/elements/MarkerDecorator.ts");
/* harmony import */ var _MetricsSidebarPane_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MetricsSidebarPane.js */ "./src/panels/elements/MetricsSidebarPane.ts");
/* harmony import */ var _PlatformFontsWidget_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PlatformFontsWidget.js */ "./src/panels/elements/PlatformFontsWidget.ts");
/* harmony import */ var _PropertiesWidget_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PropertiesWidget.js */ "./src/panels/elements/PropertiesWidget.ts");
/* harmony import */ var _NodeStackTraceWidget_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./NodeStackTraceWidget.js */ "./src/panels/elements/NodeStackTraceWidget.ts");
/* harmony import */ var _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./StylePropertiesSection.js */ "./src/panels/elements/StylePropertiesSection.ts");
/* harmony import */ var _StylePropertyHighlighter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./StylePropertyHighlighter.js */ "./src/panels/elements/StylePropertyHighlighter.ts");
/* harmony import */ var _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./StylesSidebarPane.js */ "./src/panels/elements/StylesSidebarPane.ts");
/* harmony import */ var _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./StylePropertyTreeElement.js */ "./src/panels/elements/StylePropertyTreeElement.ts");
/* harmony import */ var _ComputedStyleWidget_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ComputedStyleWidget.js */ "./src/panels/elements/ComputedStyleWidget.ts");
/* harmony import */ var _CSSRuleValidator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./CSSRuleValidator.js */ "./src/panels/elements/CSSRuleValidator.ts");
/* harmony import */ var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ElementsPanel.js */ "./src/panels/elements/ElementsPanel.ts");
/* harmony import */ var _ClassesPaneWidget_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ClassesPaneWidget.js */ "./src/panels/elements/ClassesPaneWidget.ts");
/* harmony import */ var _ElementStatePaneWidget_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ElementStatePaneWidget.js */ "./src/panels/elements/ElementStatePaneWidget.ts");
/* harmony import */ var _ElementsTreeElementHighlighter_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ElementsTreeElementHighlighter.js */ "./src/panels/elements/ElementsTreeElementHighlighter.ts");
/* harmony import */ var _AccessibilityTreeUtils_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./AccessibilityTreeUtils.js */ "./src/panels/elements/AccessibilityTreeUtils.ts");
/* harmony import */ var _AccessibilityTreeView_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./AccessibilityTreeView.js */ "./src/panels/elements/AccessibilityTreeView.ts");
/* harmony import */ var _LayersWidget_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./LayersWidget.js */ "./src/panels/elements/LayersWidget.ts");
/* harmony import */ var _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./PropertyMatchers.js */ "./src/panels/elements/PropertyMatchers.ts");
/* harmony import */ var _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./PropertyRenderer.js */ "./src/panels/elements/PropertyRenderer.ts");
/* harmony import */ var _StyleEditorWidget_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./StyleEditorWidget.js */ "./src/panels/elements/StyleEditorWidget.ts");
/* harmony import */ var _StylePropertyUtils_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./StylePropertyUtils.js */ "./src/panels/elements/StylePropertyUtils.ts");
/* harmony import */ var _WebCustomData_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./WebCustomData.js */ "./src/panels/elements/WebCustomData.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.































































/***/ })

}]);