"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_elements_js"],{

/***/ "./panels/elements/InspectElementModeController.js":
/*!*********************************************************!*\
  !*** ./panels/elements/InspectElementModeController.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InspectElementModeController: () => (/* binding */ InspectElementModeController),
/* harmony export */   ToggleSearchActionDelegate: () => (/* binding */ ToggleSearchActionDelegate)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElementsPanel.js */ "./panels/elements/ElementsPanel.js");
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
    toggleSearchAction;
    mode;
    showDetailedInspectTooltipSetting;
    constructor() {
        this.toggleSearchAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ActionRegistry.ActionRegistry.instance().getAction('elements.toggle-element-search');
        this.mode = "none" /* Protocol.Overlay.InspectMode.None */;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addEventListener("SuspendStateChanged" /* SDK.TargetManager.Events.SuspendStateChanged */, this.suspendStateChanged, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel, "InspectModeExited" /* SDK.OverlayModel.Events.ExitedInspectMode */, () => this.setMode("none" /* Protocol.Overlay.InspectMode.None */), undefined, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel.setInspectNodeHandler(this.inspectNode.bind(this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel, this, { scoped: true });
        this.showDetailedInspectTooltipSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-detailed-inspect-tooltip');
        this.showDetailedInspectTooltipSetting.addChangeListener(this.showDetailedInspectTooltipChanged.bind(this));
        document.addEventListener('keydown', event => {
            if (event.keyCode !== _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardShortcut.Keys.Esc.code) {
                return;
            }
            if (!this.isInInspectElementMode()) {
                return;
            }
            this.setMode("none" /* Protocol.Overlay.InspectMode.None */);
            event.consume(true);
            void _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.logKeyDown(null, event, 'cancel-inspect-mode');
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
        if (this.mode === "none" /* Protocol.Overlay.InspectMode.None */) {
            return;
        }
        void overlayModel.setInspectMode(this.mode, this.showDetailedInspectTooltipSetting.get());
    }
    modelRemoved(_overlayModel) {
    }
    isInInspectElementMode() {
        return this.mode !== "none" /* Protocol.Overlay.InspectMode.None */;
    }
    toggleInspectMode() {
        let mode;
        if (this.isInInspectElementMode()) {
            mode = "none" /* Protocol.Overlay.InspectMode.None */;
        }
        else {
            mode = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-ua-shadow-dom').get() ?
                "searchForUAShadowDOM" /* Protocol.Overlay.InspectMode.SearchForUAShadowDOM */ :
                "searchForNode" /* Protocol.Overlay.InspectMode.SearchForNode */;
        }
        this.setMode(mode);
    }
    captureScreenshotMode() {
        this.setMode("captureAreaScreenshot" /* Protocol.Overlay.InspectMode.CaptureAreaScreenshot */);
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
        this.mode = "none" /* Protocol.Overlay.InspectMode.None */;
        this.toggleSearchAction.setToggled(false);
    }
    inspectNode(node) {
        void _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_5__.ElementsPanel.instance().revealAndSelectNode(node, true, true);
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
//# sourceMappingURL=InspectElementModeController.js.map

/***/ }),

/***/ "./panels/elements/NodeStackTraceWidget.js":
/*!*************************************************!*\
  !*** ./panels/elements/NodeStackTraceWidget.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaxLengthForLinks: () => (/* binding */ MaxLengthForLinks),
/* harmony export */   NodeStackTraceWidget: () => (/* binding */ NodeStackTraceWidget)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _nodeStackTraceWidget_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nodeStackTraceWidget.css.js */ "./panels/elements/nodeStackTraceWidget.css.js");
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
    noStackTraceElement;
    creationStackTraceElement;
    linkifier;
    constructor() {
        super(true /* isWebComponent */);
        this.noStackTraceElement = this.contentElement.createChild('div', 'gray-info-message');
        this.noStackTraceElement.textContent = i18nString(UIStrings.noStackTraceAvailable);
        this.creationStackTraceElement = this.contentElement.createChild('div', 'stack-trace');
        this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.Linkifier.Linkifier(MaxLengthForLinks);
    }
    wasShown() {
        super.wasShown();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode, this.update, this);
        this.registerCSSFiles([_nodeStackTraceWidget_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]]);
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
//# sourceMappingURL=NodeStackTraceWidget.js.map

/***/ }),

/***/ "./panels/elements/PropertiesWidget.js":
/*!*********************************************!*\
  !*** ./panels/elements/PropertiesWidget.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertiesWidget: () => (/* binding */ PropertiesWidget)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./ui/legacy/components/object_ui/object_ui.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _propertiesWidget_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./propertiesWidget.css.js */ "./panels/elements/propertiesWidget.css.js");
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
    node;
    showAllPropertiesSetting;
    filterRegex = null;
    noMatchesElement;
    treeOutline;
    expandController;
    lastRequestedNode;
    constructor(throttlingTimeout) {
        super(true /* isWebComponent */, throttlingTimeout);
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
        filterInput.addEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */, this.onFilterChanged, this);
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
        this.registerCSSFiles([_propertiesWidget_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]]);
    }
}
//# sourceMappingURL=PropertiesWidget.js.map

/***/ }),

/***/ "./panels/elements/elements.js":
/*!*************************************!*\
  !*** ./panels/elements/elements.js ***!
  \*************************************/
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
/* harmony import */ var _InspectElementModeController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InspectElementModeController.js */ "./panels/elements/InspectElementModeController.js");
/* harmony import */ var _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorSwatchPopoverIcon.js */ "./panels/elements/ColorSwatchPopoverIcon.js");
/* harmony import */ var _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputedStyleModel.js */ "./panels/elements/ComputedStyleModel.js");
/* harmony import */ var _DOMLinkifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMLinkifier.js */ "./panels/elements/DOMLinkifier.js");
/* harmony import */ var _DOMPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMPath.js */ "./panels/elements/DOMPath.js");
/* harmony import */ var _ElementsSidebarPane_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElementsSidebarPane.js */ "./panels/elements/ElementsSidebarPane.js");
/* harmony import */ var _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ElementsTreeElement.js */ "./panels/elements/ElementsTreeElement.js");
/* harmony import */ var _TopLayerContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopLayerContainer.js */ "./panels/elements/TopLayerContainer.js");
/* harmony import */ var _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ElementsTreeOutline.js */ "./panels/elements/ElementsTreeOutline.js");
/* harmony import */ var _EventListenersWidget_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EventListenersWidget.js */ "./panels/elements/EventListenersWidget.js");
/* harmony import */ var _MarkerDecorator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MarkerDecorator.js */ "./panels/elements/MarkerDecorator.js");
/* harmony import */ var _MetricsSidebarPane_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MetricsSidebarPane.js */ "./panels/elements/MetricsSidebarPane.js");
/* harmony import */ var _PlatformFontsWidget_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PlatformFontsWidget.js */ "./panels/elements/PlatformFontsWidget.js");
/* harmony import */ var _PropertiesWidget_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PropertiesWidget.js */ "./panels/elements/PropertiesWidget.js");
/* harmony import */ var _NodeStackTraceWidget_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./NodeStackTraceWidget.js */ "./panels/elements/NodeStackTraceWidget.js");
/* harmony import */ var _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./StylePropertiesSection.js */ "./panels/elements/StylePropertiesSection.js");
/* harmony import */ var _StylePropertyHighlighter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./StylePropertyHighlighter.js */ "./panels/elements/StylePropertyHighlighter.js");
/* harmony import */ var _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./StylesSidebarPane.js */ "./panels/elements/StylesSidebarPane.js");
/* harmony import */ var _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./StylePropertyTreeElement.js */ "./panels/elements/StylePropertyTreeElement.js");
/* harmony import */ var _ComputedStyleWidget_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ComputedStyleWidget.js */ "./panels/elements/ComputedStyleWidget.js");
/* harmony import */ var _CSSRuleValidator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./CSSRuleValidator.js */ "./panels/elements/CSSRuleValidator.js");
/* harmony import */ var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ElementsPanel.js */ "./panels/elements/ElementsPanel.js");
/* harmony import */ var _ClassesPaneWidget_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ClassesPaneWidget.js */ "./panels/elements/ClassesPaneWidget.js");
/* harmony import */ var _ElementStatePaneWidget_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ElementStatePaneWidget.js */ "./panels/elements/ElementStatePaneWidget.js");
/* harmony import */ var _ElementsTreeElementHighlighter_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ElementsTreeElementHighlighter.js */ "./panels/elements/ElementsTreeElementHighlighter.js");
/* harmony import */ var _AccessibilityTreeUtils_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./AccessibilityTreeUtils.js */ "./panels/elements/AccessibilityTreeUtils.js");
/* harmony import */ var _AccessibilityTreeView_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./AccessibilityTreeView.js */ "./panels/elements/AccessibilityTreeView.js");
/* harmony import */ var _LayersWidget_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./LayersWidget.js */ "./panels/elements/LayersWidget.js");
/* harmony import */ var _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./PropertyMatchers.js */ "./panels/elements/PropertyMatchers.js");
/* harmony import */ var _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./PropertyRenderer.js */ "./panels/elements/PropertyRenderer.js");
/* harmony import */ var _StyleEditorWidget_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./StyleEditorWidget.js */ "./panels/elements/StyleEditorWidget.js");
/* harmony import */ var _StylePropertyUtils_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./StylePropertyUtils.js */ "./panels/elements/StylePropertyUtils.js");
/* harmony import */ var _WebCustomData_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./WebCustomData.js */ "./panels/elements/WebCustomData.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





























































//# sourceMappingURL=elements.js.map

/***/ }),

/***/ "./panels/elements/nodeStackTraceWidget.css.js":
/*!*****************************************************!*\
  !*** ./panels/elements/nodeStackTraceWidget.css.js ***!
  \*****************************************************/
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
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.stack-trace {
  font-size: 11px !important; /* stylelint-disable-line declaration-no-important */
  font-family: Menlo, monospace;
}

/*# sourceURL=nodeStackTraceWidget.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/elements/propertiesWidget.css.js":
/*!*************************************************!*\
  !*** ./panels/elements/propertiesWidget.css.js ***!
  \*************************************************/
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
 * Copyright (c) 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.properties-widget-section {
  padding: 2px 0 2px 5px;
  flex: none;
}

.properties-widget-toolbar {
  border-bottom: 1px solid var(--sys-color-divider);
  flex-shrink: 0;
}

.styles-pane-toolbar {
  width: 100%;
}

/*# sourceURL=propertiesWidget.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);