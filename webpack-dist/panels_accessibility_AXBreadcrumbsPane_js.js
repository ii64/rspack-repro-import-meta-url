"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_accessibility_AXBreadcrumbsPane_js"],{

/***/ "./panels/accessibility/AXBreadcrumbsPane.js":
/*!***************************************************!*\
  !*** ./panels/accessibility/AXBreadcrumbsPane.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AXBreadcrumb: () => (/* binding */ AXBreadcrumb),
/* harmony export */   AXBreadcrumbsPane: () => (/* binding */ AXBreadcrumbsPane),
/* harmony export */   RoleStyles: () => (/* binding */ RoleStyles)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/panel_feedback/panel_feedback.js */ "./ui/components/panel_feedback/panel_feedback.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AccessibilitySubPane.js */ "./panels/accessibility/AccessibilitySubPane.js");
/* harmony import */ var _axBreadcrumbs_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./axBreadcrumbs.css.js */ "./panels/accessibility/axBreadcrumbs.css.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










const UIStrings = {
    /**
     *@description Text in AXBreadcrumbs Pane of the Accessibility panel
     */
    accessibilityTree: 'Accessibility Tree',
    /**
     *@description Text to scroll the displayed content into view
     */
    scrollIntoView: 'Scroll into view',
    /**
     *@description Ignored node element text content in AXBreadcrumbs Pane of the Accessibility panel
     */
    ignored: 'Ignored',
    /**
     *@description Name for experimental tree toggle.
     */
    fullTreeExperimentName: 'Enable full-page accessibility tree',
    /**
     *@description Description text for experimental tree toggle.
     */
    fullTreeExperimentDescription: 'The accessibility tree moved to the top right corner of the DOM tree.',
    /**
     *@description Message saying that DevTools must be restarted before the experiment is enabled.
     */
    reloadRequired: 'Reload required before the change takes effect.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/accessibility/AXBreadcrumbsPane.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class AXBreadcrumbsPane extends _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_8__.AccessibilitySubPane {
    axSidebarView;
    preselectedBreadcrumb;
    inspectedNodeBreadcrumb;
    collapsingBreadcrumbId;
    hoveredBreadcrumb;
    rootElement;
    #legacyTreeDisabled = false;
    constructor(axSidebarView) {
        super(i18nString(UIStrings.accessibilityTree));
        this.element.classList.add('ax-subpane');
        this.element.tabIndex = -1;
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('accessibility-tree')}`);
        this.axSidebarView = axSidebarView;
        this.preselectedBreadcrumb = null;
        this.inspectedNodeBreadcrumb = null;
        this.collapsingBreadcrumbId = -1;
        this.rootElement = this.element.createChild('div', 'ax-breadcrumbs');
        this.hoveredBreadcrumb = null;
        const previewToggle = new _ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_5__.PreviewToggle.PreviewToggle();
        previewToggle.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toggle('full-accessibility-tree')}`);
        const name = i18nString(UIStrings.fullTreeExperimentName);
        const experiment = "full-accessibility-tree" /* Root.Runtime.ExperimentName.FULL_ACCESSIBILITY_TREE */;
        const onChangeCallback = checked => {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.experimentChanged(experiment, checked);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.InspectorView.InspectorView.instance().displayReloadRequiredWarning(i18nString(UIStrings.reloadRequired));
        };
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.isEnabled(experiment)) {
            this.#legacyTreeDisabled = true;
            const feedbackURL = 'https://g.co/devtools/a11y-tree-feedback';
            previewToggle.data = {
                name,
                helperText: i18nString(UIStrings.fullTreeExperimentDescription),
                feedbackURL,
                experiment,
                onChangeCallback,
            };
            this.element.appendChild(previewToggle);
            return;
        }
        previewToggle.data = { name, helperText: null, feedbackURL: null, experiment, onChangeCallback };
        this.element.prepend(previewToggle);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsTree(this.rootElement);
        this.rootElement.addEventListener('keydown', this.onKeyDown.bind(this), true);
        this.rootElement.addEventListener('mousemove', this.onMouseMove.bind(this), false);
        this.rootElement.addEventListener('mouseleave', this.onMouseLeave.bind(this), false);
        this.rootElement.addEventListener('click', this.onClick.bind(this), false);
        this.rootElement.addEventListener('contextmenu', this.contextMenuEventFired.bind(this), false);
        this.rootElement.addEventListener('focusout', this.onFocusOut.bind(this), false);
    }
    focus() {
        if (this.inspectedNodeBreadcrumb) {
            this.inspectedNodeBreadcrumb.nodeElement().focus();
        }
        else {
            this.element.focus();
        }
    }
    setAXNode(axNode) {
        if (this.#legacyTreeDisabled) {
            return;
        }
        const hadFocus = this.element.hasFocus();
        super.setAXNode(axNode);
        this.rootElement.removeChildren();
        if (!axNode) {
            return;
        }
        const ancestorChain = [];
        let ancestor = axNode;
        while (ancestor) {
            ancestorChain.push(ancestor);
            ancestor = ancestor.parentNode();
        }
        ancestorChain.reverse();
        let depth = 0;
        let parent = null;
        this.inspectedNodeBreadcrumb = null;
        for (ancestor of ancestorChain) {
            if (ancestor !== axNode && ancestor.ignored() && ancestor.parentNode()) {
                continue;
            }
            const breadcrumb = new AXBreadcrumb(ancestor, depth, (ancestor === axNode));
            if (parent) {
                parent.appendChild(breadcrumb);
            }
            else {
                this.rootElement.appendChild(breadcrumb.element());
            }
            parent = breadcrumb;
            depth++;
            this.inspectedNodeBreadcrumb = breadcrumb;
        }
        if (this.inspectedNodeBreadcrumb) {
            this.inspectedNodeBreadcrumb.setPreselected(true, hadFocus);
        }
        this.setPreselectedBreadcrumb(this.inspectedNodeBreadcrumb);
        function append(parentBreadcrumb, axNode, localDepth) {
            if (axNode.ignored()) {
                axNode.children().map(child => append(parentBreadcrumb, child, localDepth));
                return;
            }
            const childBreadcrumb = new AXBreadcrumb(axNode, localDepth, false);
            parentBreadcrumb.appendChild(childBreadcrumb);
            // In most cases there will be no children here, but there are some special cases.
            for (const child of axNode.children()) {
                append(childBreadcrumb, child, localDepth + 1);
            }
        }
        if (this.inspectedNodeBreadcrumb && !axNode.ignored()) {
            for (const child of axNode.children()) {
                append(this.inspectedNodeBreadcrumb, child, depth);
                if (child.backendDOMNodeId() === this.collapsingBreadcrumbId) {
                    this.setPreselectedBreadcrumb(this.inspectedNodeBreadcrumb.lastChild());
                }
            }
        }
        this.collapsingBreadcrumbId = -1;
    }
    willHide() {
        this.setPreselectedBreadcrumb(null);
    }
    onKeyDown(event) {
        const preselectedBreadcrumb = this.preselectedBreadcrumb;
        if (!preselectedBreadcrumb) {
            return;
        }
        const keyboardEvent = event;
        if (!keyboardEvent.composedPath().some(element => element === preselectedBreadcrumb.element())) {
            return;
        }
        if (keyboardEvent.shiftKey || keyboardEvent.metaKey || keyboardEvent.ctrlKey) {
            return;
        }
        let handled = false;
        if (keyboardEvent.key === 'ArrowUp' && !keyboardEvent.altKey) {
            handled = this.preselectPrevious();
        }
        else if ((keyboardEvent.key === 'ArrowDown') && !keyboardEvent.altKey) {
            handled = this.preselectNext();
        }
        else if (keyboardEvent.key === 'ArrowLeft' && !keyboardEvent.altKey) {
            if (preselectedBreadcrumb.hasExpandedChildren()) {
                this.collapseBreadcrumb(preselectedBreadcrumb);
            }
            else {
                handled = this.preselectParent();
            }
        }
        else if ((keyboardEvent.key === 'Enter' ||
            (keyboardEvent.key === 'ArrowRight' && !keyboardEvent.altKey &&
                preselectedBreadcrumb.axNode().hasOnlyUnloadedChildren()))) {
            handled = this.inspectDOMNode(preselectedBreadcrumb.axNode());
        }
        if (handled) {
            keyboardEvent.consume(true);
        }
    }
    preselectPrevious() {
        if (!this.preselectedBreadcrumb) {
            return false;
        }
        const previousBreadcrumb = this.preselectedBreadcrumb.previousBreadcrumb();
        if (!previousBreadcrumb) {
            return false;
        }
        this.setPreselectedBreadcrumb(previousBreadcrumb);
        return true;
    }
    preselectNext() {
        if (!this.preselectedBreadcrumb) {
            return false;
        }
        const nextBreadcrumb = this.preselectedBreadcrumb.nextBreadcrumb();
        if (!nextBreadcrumb) {
            return false;
        }
        this.setPreselectedBreadcrumb(nextBreadcrumb);
        return true;
    }
    preselectParent() {
        if (!this.preselectedBreadcrumb) {
            return false;
        }
        const parentBreadcrumb = this.preselectedBreadcrumb.parentBreadcrumb();
        if (!parentBreadcrumb) {
            return false;
        }
        this.setPreselectedBreadcrumb(parentBreadcrumb);
        return true;
    }
    setPreselectedBreadcrumb(breadcrumb) {
        if (breadcrumb === this.preselectedBreadcrumb) {
            return;
        }
        const hadFocus = this.element.hasFocus();
        if (this.preselectedBreadcrumb) {
            this.preselectedBreadcrumb.setPreselected(false, hadFocus);
        }
        if (breadcrumb) {
            this.preselectedBreadcrumb = breadcrumb;
        }
        else {
            this.preselectedBreadcrumb = this.inspectedNodeBreadcrumb;
        }
        if (this.preselectedBreadcrumb) {
            this.preselectedBreadcrumb.setPreselected(true, hadFocus);
        }
        if (!breadcrumb && hadFocus) {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        }
    }
    collapseBreadcrumb(breadcrumb) {
        if (!breadcrumb.parentBreadcrumb()) {
            return;
        }
        const backendNodeId = breadcrumb.axNode().backendDOMNodeId();
        if (backendNodeId !== null) {
            this.collapsingBreadcrumbId = backendNodeId;
        }
        const parentBreadcrumb = breadcrumb.parentBreadcrumb();
        if (parentBreadcrumb) {
            this.inspectDOMNode(parentBreadcrumb.axNode());
        }
    }
    onMouseLeave(_event) {
        this.setHoveredBreadcrumb(null);
    }
    onMouseMove(event) {
        const target = event.target;
        if (!target) {
            return;
        }
        const breadcrumbElement = target.enclosingNodeOrSelfWithClass('ax-breadcrumb');
        if (!breadcrumbElement) {
            this.setHoveredBreadcrumb(null);
            return;
        }
        const breadcrumb = elementsToAXBreadcrumb.get(breadcrumbElement);
        if (!breadcrumb || !breadcrumb.isDOMNode()) {
            return;
        }
        this.setHoveredBreadcrumb(breadcrumb);
    }
    onFocusOut(event) {
        if (!this.preselectedBreadcrumb || event.target !== this.preselectedBreadcrumb.nodeElement()) {
            return;
        }
        this.setPreselectedBreadcrumb(null);
    }
    onClick(event) {
        const target = event.target;
        if (!target) {
            return;
        }
        const breadcrumbElement = target.enclosingNodeOrSelfWithClass('ax-breadcrumb');
        if (!breadcrumbElement) {
            this.setHoveredBreadcrumb(null);
            return;
        }
        const breadcrumb = elementsToAXBreadcrumb.get(breadcrumbElement);
        if (!breadcrumb) {
            return;
        }
        if (breadcrumb.inspected()) {
            // This will collapse and preselect/focus the breadcrumb.
            this.collapseBreadcrumb(breadcrumb);
            breadcrumb.nodeElement().focus();
            void _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.logClick(breadcrumb.expandLoggable, event);
            return;
        }
        if (!breadcrumb.isDOMNode()) {
            return;
        }
        this.inspectDOMNode(breadcrumb.axNode());
        void _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.logClick(breadcrumb.expandLoggable, event);
    }
    setHoveredBreadcrumb(breadcrumb) {
        if (breadcrumb === this.hoveredBreadcrumb) {
            return;
        }
        if (this.hoveredBreadcrumb) {
            this.hoveredBreadcrumb.setHovered(false);
        }
        const node = this.node();
        if (breadcrumb) {
            breadcrumb.setHovered(true);
        }
        else if (node && node.id) {
            // Highlight and scroll into view the currently inspected node.
            node.domModel().overlayModel().nodeHighlightRequested({ nodeId: node.id });
        }
        this.hoveredBreadcrumb = breadcrumb;
    }
    inspectDOMNode(axNode) {
        if (!axNode.isDOMNode()) {
            return false;
        }
        const deferredNode = axNode.deferredDOMNode();
        if (deferredNode) {
            deferredNode.resolve(domNode => {
                this.axSidebarView.setNode(domNode, true /* fromAXTree */);
                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(domNode, true /* omitFocus */);
            });
        }
        return true;
    }
    contextMenuEventFired(event) {
        const target = event.target;
        if (!target) {
            return;
        }
        const breadcrumbElement = target.enclosingNodeOrSelfWithClass('ax-breadcrumb');
        if (!breadcrumbElement) {
            return;
        }
        const breadcrumb = elementsToAXBreadcrumb.get(breadcrumbElement);
        if (!breadcrumb) {
            return;
        }
        const axNode = breadcrumb.axNode();
        if (!axNode.isDOMNode() || !axNode.deferredDOMNode()) {
            return;
        }
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ContextMenu.ContextMenu(event);
        contextMenu.viewSection().appendItem(i18nString(UIStrings.scrollIntoView), () => {
            const deferredNode = axNode.deferredDOMNode();
            if (!deferredNode) {
                return;
            }
            void deferredNode.resolvePromise().then(domNode => {
                if (!domNode) {
                    return;
                }
                void domNode.scrollIntoView();
            });
        }, { jslogContext: 'scroll-into-view' });
        const deferredNode = axNode.deferredDOMNode();
        if (deferredNode) {
            contextMenu.appendApplicableItems(deferredNode);
        }
        void contextMenu.show();
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_axBreadcrumbs_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]]);
    }
}
const elementsToAXBreadcrumb = new WeakMap();
class AXBreadcrumb {
    axNodeInternal;
    elementInternal;
    nodeElementInternal;
    nodeWrapper;
    selectionElement;
    childrenGroupElement;
    children;
    hovered;
    preselectedInternal;
    parent;
    inspectedInternal;
    expandLoggable = {};
    constructor(axNode, depth, inspected) {
        this.axNodeInternal = axNode;
        this.elementInternal = document.createElement('div');
        this.elementInternal.classList.add('ax-breadcrumb');
        this.elementInternal.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.treeItem().track({ click: true, keydown: 'ArrowUp|ArrowDown|ArrowLeft|ArrowRight|Enter' })}`);
        elementsToAXBreadcrumb.set(this.elementInternal, this);
        this.nodeElementInternal = document.createElement('div');
        this.nodeElementInternal.classList.add('ax-node');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsTreeitem(this.nodeElementInternal);
        this.nodeElementInternal.tabIndex = -1;
        this.elementInternal.appendChild(this.nodeElementInternal);
        this.nodeWrapper = document.createElement('div');
        this.nodeWrapper.classList.add('wrapper');
        this.nodeElementInternal.appendChild(this.nodeWrapper);
        this.selectionElement = document.createElement('div');
        this.selectionElement.classList.add('selection');
        this.selectionElement.classList.add('fill');
        this.nodeElementInternal.appendChild(this.selectionElement);
        this.childrenGroupElement = document.createElement('div');
        this.childrenGroupElement.classList.add('children');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsGroup(this.childrenGroupElement);
        this.elementInternal.appendChild(this.childrenGroupElement);
        this.children = [];
        this.hovered = false;
        this.preselectedInternal = false;
        this.parent = null;
        this.inspectedInternal = inspected;
        this.nodeElementInternal.classList.toggle('inspected', inspected);
        this.nodeElementInternal.style.paddingLeft = (16 * depth + 4) + 'px';
        if (this.axNodeInternal.ignored()) {
            this.appendIgnoredNodeElement();
        }
        else {
            this.appendRoleElement(this.axNodeInternal.role());
            const axNodeName = this.axNodeInternal.name();
            if (axNodeName && axNodeName.value) {
                this.nodeWrapper.createChild('span', 'separator').textContent = '\xA0';
                this.appendNameElement(axNodeName.value);
            }
        }
        if (!this.axNodeInternal.ignored() && this.axNodeInternal.hasOnlyUnloadedChildren()) {
            this.nodeElementInternal.classList.add('children-unloaded');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setExpanded(this.nodeElementInternal, false);
            _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.registerLoggable(this.expandLoggable, `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.expand()}`, this.elementInternal);
        }
        if (!this.axNodeInternal.isDOMNode()) {
            this.nodeElementInternal.classList.add('no-dom-node');
        }
    }
    element() {
        return this.elementInternal;
    }
    nodeElement() {
        return this.nodeElementInternal;
    }
    appendChild(breadcrumb) {
        this.children.push(breadcrumb);
        breadcrumb.setParent(this);
        this.nodeElementInternal.classList.add('parent');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setExpanded(this.nodeElementInternal, true);
        this.childrenGroupElement.appendChild(breadcrumb.element());
        _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.registerLoggable(this.expandLoggable, `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.expand()}`, this.elementInternal);
    }
    hasExpandedChildren() {
        return this.children.length;
    }
    setParent(breadcrumb) {
        this.parent = breadcrumb;
    }
    preselected() {
        return this.preselectedInternal;
    }
    setPreselected(preselected, selectedByUser) {
        if (this.preselectedInternal === preselected) {
            return;
        }
        this.preselectedInternal = preselected;
        this.nodeElementInternal.classList.toggle('preselected', preselected);
        if (preselected) {
            this.nodeElementInternal.tabIndex = 0;
        }
        else {
            this.nodeElementInternal.tabIndex = -1;
        }
        if (this.preselectedInternal) {
            if (selectedByUser) {
                this.nodeElementInternal.focus();
            }
            if (!this.inspectedInternal) {
                this.axNodeInternal.highlightDOMNode();
            }
            else {
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
            }
        }
    }
    setHovered(hovered) {
        if (this.hovered === hovered) {
            return;
        }
        this.hovered = hovered;
        this.nodeElementInternal.classList.toggle('hovered', hovered);
        if (this.hovered) {
            this.nodeElementInternal.classList.toggle('hovered', true);
            this.axNodeInternal.highlightDOMNode();
        }
    }
    axNode() {
        return this.axNodeInternal;
    }
    inspected() {
        return this.inspectedInternal;
    }
    isDOMNode() {
        return this.axNodeInternal.isDOMNode();
    }
    nextBreadcrumb() {
        if (this.children.length) {
            return this.children[0];
        }
        const nextSibling = this.element().nextSibling;
        if (nextSibling) {
            return elementsToAXBreadcrumb.get(nextSibling) || null;
        }
        return null;
    }
    previousBreadcrumb() {
        const previousSibling = this.element().previousSibling;
        if (previousSibling) {
            return elementsToAXBreadcrumb.get(previousSibling) || null;
        }
        return this.parent;
    }
    parentBreadcrumb() {
        return this.parent;
    }
    lastChild() {
        return this.children[this.children.length - 1];
    }
    appendNameElement(name) {
        const nameElement = document.createElement('span');
        nameElement.textContent = '"' + name + '"';
        nameElement.classList.add('ax-readable-string');
        this.nodeWrapper.appendChild(nameElement);
    }
    appendRoleElement(role) {
        if (!role) {
            return;
        }
        const roleElement = document.createElement('span');
        roleElement.classList.add('monospace');
        roleElement.classList.add(RoleStyles[role.type]);
        roleElement.setTextContentTruncatedIfNeeded(role.value || '');
        this.nodeWrapper.appendChild(roleElement);
    }
    appendIgnoredNodeElement() {
        const ignoredNodeElement = document.createElement('span');
        ignoredNodeElement.classList.add('monospace');
        ignoredNodeElement.textContent = i18nString(UIStrings.ignored);
        ignoredNodeElement.classList.add('ax-breadcrumbs-ignored-node');
        this.nodeWrapper.appendChild(ignoredNodeElement);
    }
}
const RoleStyles = {
    internalRole: 'ax-internal-role',
    role: 'ax-role',
};
//# sourceMappingURL=AXBreadcrumbsPane.js.map

/***/ }),

/***/ "./panels/accessibility/axBreadcrumbs.css.js":
/*!***************************************************!*\
  !*** ./panels/accessibility/axBreadcrumbs.css.js ***!
  \***************************************************/
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

.ax-breadcrumbs-ignored-node {
  font-style: italic;
  opacity: 70%;
}

.ax-breadcrumbs {
  padding-top: 1px;
  margin: 0;
  position: relative;
}

.ax-breadcrumbs .ax-node {
  align-items: center;
  margin-top: 1px;
  min-height: 16px;
  overflow-x: hidden;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ax-breadcrumbs .ax-node span {
  flex-shrink: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ax-breadcrumbs .ax-node .wrapper {
  padding-left: 12px;
  overflow-x: hidden;
}

.ax-breadcrumbs .ax-node::before {
  mask-image: var(--image-file-chevron-right);
  mask-repeat: no-repeat;
  background-color: var(--icon-default);
  transform: scale(0.7);
  content: "";
  text-shadow: none;
  margin-left: -4px;
  margin-top: -2px;
  height: 16px;
  width: 16px;
  position: absolute;
  display: inline-block;
}

.ax-breadcrumbs .ax-node:not(.parent):not(.children-unloaded)::before {
  background-color: transparent;
}

.ax-breadcrumbs .ax-node.parent::before {
  mask-image: var(--image-file-chevron-down);
}

.ax-breadcrumbs .ax-node.no-dom-node {
  opacity: 70%;
}

.ax-breadcrumbs .ax-node.children-unloaded::before {
  mask-position: 0 1px;
  width: 13px;
  opacity: 40%;
}

.ax-breadcrumbs .ax-node .selection {
  display: none;
  z-index: -1;
}

.ax-breadcrumbs .ax-node.inspected .selection {
  display: block;
  background-color: var(--sys-color-neutral-container);
}

.ax-breadcrumbs .ax-node.inspected:focus .selection {
  background-color: var(--sys-color-tonal-container);
}

.ax-breadcrumbs .ax-node.parent.inspected:focus::before {
  background-color: var(--sys-color-on-tonal-container);
}

.ax-breadcrumbs .ax-node.inspected:focus {
  background-color: var(--sys-color-tonal-container);
  color: var(--sys-color-on-tonal-container);
}

.ax-breadcrumbs .ax-node:not(.inspected):hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.ax-breadcrumbs .ax-node:not(.inspected):focus {
  background-color: var(--sys-color-state-focus-highlight);
}

.ax-breadcrumbs .ax-node.inspected:focus * {
  color: inherit;
}

.ax-breadcrumbs .ax-node.preselected:not(.inspected) .selection,
.ax-breadcrumbs .ax-node.hovered:not(.inspected) .selection {
  display: block;
  left: 2px;
  right: 2px;
  background-color: var(--sys-color-state-hover-on-subtle);
  border-radius: 5px;
}

.ax-breadcrumbs .ax-node.preselected:not(.inspected):focus .selection {
  border: 1px solid var(--sys-color-primary);
}

@media (forced-colors: active) {
  .ax-value-source-unused,
  .ax-breadcrumbs .ax-node.children-unloaded::before {
    opacity: 100%;
  }

  .ax-breadcrumbs .ax-node.parent::before,
  .ax-breadcrumbs .ax-node.children-unloaded::before {
    forced-color-adjust: none;
    background-color: ButtonText;
  }

  .ax-breadcrumbs .ax-node.parent.inspected::before,
  .ax-breadcrumbs .ax-node.parent.inspected:focus::before {
    background-color: HighlightText;
  }

  .ax-breadcrumbs .ax-node.inspected .selection {
    forced-color-adjust: none;
    background: Highlight !important; /* stylelint-disable-line declaration-no-important */
  }

  .ax-breadcrumbs .ax-node.inspected .wrapper {
    forced-color-adjust: none;
    color: HighlightText;
  }

  .ax-breadcrumbs .ax-node.preselected:not(.inspected) .selection,
  .ax-breadcrumbs .ax-node.hovered:not(.inspected) .selection,
  .ax-breadcrumbs .ax-node.hovered:not(.inspected) .wrapper,
  .ax-breadcrumbs .ax-node:focus-visible:not(.inspected) .wrapper {
    forced-color-adjust: none;
    background-color: Highlight;
    color: HighlightText;
    border-radius: 0;
  }

  .ax-breadcrumbs .ax-node.parent.hovered:not(.inspected)::before,
  .ax-breadcrumbs .ax-node.parent:focus-visible:not(.inspected)::before,
  .ax-breadcrumbs .ax-node.children-unloaded:focus-visible:not(.inspected)::before,
  .ax-breadcrumbs .ax-node.hovered:not(.inspected).children-unloaded::before {
    background-color: HighlightText;
  }
}

/*# sourceURL=axBreadcrumbs.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);