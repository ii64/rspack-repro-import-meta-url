"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_accessibility_AccessibilitySidebarView_ts"],{

/***/ "./src/panels/accessibility/AccessibilitySidebarView.ts":
/*!**************************************************************!*\
  !*** ./src/panels/accessibility/AccessibilitySidebarView.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessibilitySidebarView: () => (/* binding */ AccessibilitySidebarView)
/* harmony export */ });
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _AccessibilityNodeView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccessibilityNodeView.js */ "./src/panels/accessibility/AccessibilityNodeView.ts");
/* harmony import */ var _ARIAAttributesView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ARIAAttributesView.js */ "./src/panels/accessibility/ARIAAttributesView.ts");
/* harmony import */ var _AXBreadcrumbsPane_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AXBreadcrumbsPane.js */ "./src/panels/accessibility/AXBreadcrumbsPane.ts");
/* harmony import */ var _SourceOrderView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SourceOrderView.js */ "./src/panels/accessibility/SourceOrderView.ts");
// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







let accessibilitySidebarViewInstance;
class AccessibilitySidebarView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ThrottledWidget.ThrottledWidget {
    constructor(throttlingTimeout) {
        super(false /* isWebComponent */, throttlingTimeout);
        Object.defineProperty(this, "nodeInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "axNodeInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "skipNextPullNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sidebarPaneStack", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "breadcrumbsSubPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "ariaSubPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "axNodeSubPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sourceOrderSubPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.nodeInternal = null;
        this.axNodeInternal = null;
        this.skipNextPullNode = false;
        this.sidebarPaneStack = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ViewManager.ViewManager.instance().createStackLocation();
        this.breadcrumbsSubPane = new _AXBreadcrumbsPane_js__WEBPACK_IMPORTED_MODULE_5__.AXBreadcrumbsPane(this);
        void this.sidebarPaneStack.showView(this.breadcrumbsSubPane);
        this.ariaSubPane = new _ARIAAttributesView_js__WEBPACK_IMPORTED_MODULE_4__.ARIAAttributesPane();
        void this.sidebarPaneStack.showView(this.ariaSubPane);
        this.axNodeSubPane = new _AccessibilityNodeView_js__WEBPACK_IMPORTED_MODULE_3__.AXNodeSubPane();
        void this.sidebarPaneStack.showView(this.axNodeSubPane);
        this.sourceOrderSubPane = new _SourceOrderView_js__WEBPACK_IMPORTED_MODULE_6__.SourceOrderPane();
        void this.sidebarPaneStack.showView(this.sourceOrderSubPane);
        this.sidebarPaneStack.widget().show(this.element);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode, this.pullNode, this);
        this.pullNode();
    }
    static instance(opts) {
        if (!accessibilitySidebarViewInstance || opts?.forceNew) {
            accessibilitySidebarViewInstance = new AccessibilitySidebarView(opts?.throttlingTimeout);
        }
        return accessibilitySidebarViewInstance;
    }
    node() {
        return this.nodeInternal;
    }
    axNode() {
        return this.axNodeInternal;
    }
    setNode(node, fromAXTree) {
        this.skipNextPullNode = Boolean(fromAXTree);
        this.nodeInternal = node;
        this.update();
    }
    accessibilityNodeCallback(axNode) {
        if (!axNode) {
            return;
        }
        this.axNodeInternal = axNode;
        if (axNode.isDOMNode()) {
            void this.sidebarPaneStack.showView(this.ariaSubPane, this.axNodeSubPane);
        }
        else {
            this.sidebarPaneStack.removeView(this.ariaSubPane);
        }
        if (this.axNodeSubPane) {
            this.axNodeSubPane.setAXNode(axNode);
        }
        if (this.breadcrumbsSubPane) {
            this.breadcrumbsSubPane.setAXNode(axNode);
        }
    }
    async doUpdate() {
        const node = this.node();
        this.axNodeSubPane.setNode(node);
        this.ariaSubPane.setNode(node);
        if (this.breadcrumbsSubPane) {
            this.breadcrumbsSubPane.setNode(node);
        }
        void this.sourceOrderSubPane.setNodeAsync(node);
        if (!node) {
            return;
        }
        const accessibilityModel = node.domModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.AccessibilityModel.AccessibilityModel);
        if (!accessibilityModel) {
            return;
        }
        if (!_core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.isEnabled('full-accessibility-tree')) {
            accessibilityModel.clear();
        }
        await accessibilityModel.requestPartialAXTree(node);
        this.accessibilityNodeCallback(accessibilityModel.axNodeForDOMNode(node));
    }
    wasShown() {
        super.wasShown();
        // Pull down the latest date for this node.
        void this.doUpdate();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.AttrModified, this.onNodeChange, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.AttrRemoved, this.onNodeChange, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.CharacterDataModified, this.onNodeChange, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.ChildNodeCountUpdated, this.onNodeChange, this, { scoped: true });
    }
    willHide() {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().removeModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.AttrModified, this.onNodeChange, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().removeModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.AttrRemoved, this.onNodeChange, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().removeModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.CharacterDataModified, this.onNodeChange, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().removeModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.ChildNodeCountUpdated, this.onNodeChange, this);
    }
    pullNode() {
        if (this.skipNextPullNode) {
            this.skipNextPullNode = false;
            return;
        }
        this.setNode(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode));
    }
    onNodeChange(event) {
        if (!this.node()) {
            return;
        }
        const data = event.data;
        const node = (data instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode ? data : data.node);
        if (this.node() !== node) {
            return;
        }
        this.update();
    }
}


/***/ }),

/***/ "./src/panels/accessibility/SourceOrderView.ts":
/*!*****************************************************!*\
  !*** ./src/panels/accessibility/SourceOrderView.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceOrderPane: () => (/* binding */ SourceOrderPane)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AccessibilitySubPane.js */ "./src/panels/accessibility/AccessibilitySubPane.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     * @description Name of a tool which allows the developer to view the contents of the page in the
     * 'source order' (the order in which the HTML elements show up in the source code). In the
     * Accessibility panel.
     */
    sourceOrderViewer: 'Source Order Viewer',
    /**
     *@description Text in Source Order Viewer of the Accessibility panel shown when the selected node has no child elements
     */
    noSourceOrderInformation: 'No source order information available',
    /**
     *@description Text in Source Order Viewer of the Accessibility panel shown when the selected node has many child elements
     */
    thereMayBeADelayInDisplaying: 'There may be a delay in displaying source order for elements with many children',
    /**
     * @description Checkbox label in Source Order Viewer of the Accessibility panel. Source order
     * means the order in which the HTML elements show up in the source code.
     */
    showSourceOrder: 'Show source order',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/accessibility/SourceOrderView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const MAX_CHILD_ELEMENTS_THRESHOLD = 300;
class SourceOrderPane extends _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_4__.AccessibilitySubPane {
    constructor() {
        super(i18nString(UIStrings.sourceOrderViewer));
        Object.defineProperty(this, "noNodeInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "warning", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "checked", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "checkboxLabel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "checkboxElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "overlayModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.section('source-order-viewer')}`);
        this.noNodeInfo = this.createInfo(i18nString(UIStrings.noSourceOrderInformation));
        this.warning = this.createInfo(i18nString(UIStrings.thereMayBeADelayInDisplaying));
        this.warning.id = 'source-order-warning';
        this.checked = false;
        this.checkboxLabel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.CheckboxLabel.create(
        /* title */ i18nString(UIStrings.showSourceOrder), /* checked */ false);
        this.checkboxElement = this.checkboxLabel.checkboxElement;
        this.checkboxLabel.classList.add('source-order-checkbox');
        this.checkboxLabel.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.toggle().track({ click: true })}`);
        this.checkboxElement.addEventListener('click', this.checkboxClicked.bind(this), false);
        this.element.appendChild(this.checkboxLabel);
        this.nodeInternal = null;
        this.overlayModel = null;
    }
    async setNodeAsync(node) {
        if (!this.checkboxLabel.classList.contains('hidden')) {
            this.checked = this.checkboxElement.checked;
        }
        this.checkboxElement.checked = false;
        this.checkboxClicked();
        super.setNode(node);
        if (!this.nodeInternal) {
            this.overlayModel = null;
            return;
        }
        let foundSourceOrder = false;
        const childCount = this.nodeInternal.childNodeCount();
        if (childCount > 0) {
            if (!this.nodeInternal.children()) {
                await this.nodeInternal.getSubtree(1, false);
            }
            const children = this.nodeInternal.children();
            foundSourceOrder = children.some(child => child.nodeType() === Node.ELEMENT_NODE);
        }
        this.noNodeInfo.classList.toggle('hidden', foundSourceOrder);
        this.warning.classList.toggle('hidden', childCount < MAX_CHILD_ELEMENTS_THRESHOLD);
        this.checkboxLabel.classList.toggle('hidden', !foundSourceOrder);
        if (foundSourceOrder) {
            this.overlayModel = this.nodeInternal.domModel().overlayModel();
            this.checkboxElement.checked = this.checked;
            this.checkboxClicked();
        }
        else {
            this.overlayModel = null;
        }
    }
    checkboxClicked() {
        if (!this.nodeInternal || !this.overlayModel) {
            return;
        }
        if (this.checkboxElement.checked) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.SourceOrderViewActivated);
            this.overlayModel.highlightSourceOrderInOverlay(this.nodeInternal);
        }
        else {
            this.overlayModel.hideSourceOrderInOverlay();
        }
    }
}


/***/ })

}]);