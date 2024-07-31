"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_ElementsPanel_ts"],{

/***/ "./src/models/workspace_diff/workspace_diff.ts":
/*!*****************************************************!*\
  !*** ./src/models/workspace_diff/workspace_diff.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkspaceDiff: () => (/* reexport module object */ _WorkspaceDiff_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _WorkspaceDiff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkspaceDiff.js */ "./src/models/workspace_diff/WorkspaceDiff.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ }),

/***/ "./src/panels/elements/AccessibilityTreeUtils.ts":
/*!*******************************************************!*\
  !*** ./src/panels/elements/AccessibilityTreeUtils.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accessibilityNodeRenderer: () => (/* binding */ accessibilityNodeRenderer),
/* harmony export */   getNodeAndAncestorsFromDOMNode: () => (/* binding */ getNodeAndAncestorsFromDOMNode),
/* harmony export */   getNodeId: () => (/* binding */ getNodeId),
/* harmony export */   getRootNode: () => (/* binding */ getRootNode),
/* harmony export */   sdkNodeToAXTreeNodes: () => (/* binding */ sdkNodeToAXTreeNodes)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/elements/components/components.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



function isLeafNode(node) {
    return node.numChildren() === 0 && node.role()?.value !== 'Iframe';
}
function getModel(frameId) {
    const frame = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.FrameManager.FrameManager.instance().getFrame(frameId);
    const model = frame?.resourceTreeModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.AccessibilityModel.AccessibilityModel);
    if (!model) {
        throw Error('Could not instantiate model for frameId');
    }
    return model;
}
async function getRootNode(frameId) {
    const model = getModel(frameId);
    const root = await model.requestRootNode(frameId);
    if (!root) {
        throw Error('No accessibility root for frame');
    }
    return root;
}
function getFrameIdForNodeOrDocument(node) {
    let frameId;
    if (node instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMDocument) {
        frameId = node.body?.frameId();
    }
    else {
        frameId = node.frameId();
    }
    if (!frameId) {
        throw Error('No frameId for DOM node');
    }
    return frameId;
}
async function getNodeAndAncestorsFromDOMNode(domNode) {
    let frameId = getFrameIdForNodeOrDocument(domNode);
    const model = getModel(frameId);
    const result = await model.requestAndLoadSubTreeToNode(domNode);
    if (!result) {
        throw Error('Could not retrieve accessibility node for inspected DOM node');
    }
    const outermostFrameId = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.FrameManager.FrameManager.instance().getOutermostFrame()?.id;
    if (!outermostFrameId) {
        return result;
    }
    while (frameId !== outermostFrameId) {
        const node = await _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.FrameManager.FrameManager.instance().getFrame(frameId)?.getOwnerDOMNodeOrDocument();
        if (!node) {
            break;
        }
        frameId = getFrameIdForNodeOrDocument(node);
        const model = getModel(frameId);
        const ancestors = await model.requestAndLoadSubTreeToNode(node);
        result.push(...ancestors || []);
    }
    return result;
}
async function getChildren(node) {
    if (node.role()?.value === 'Iframe') {
        const domNode = await node.deferredDOMNode()?.resolvePromise();
        if (!domNode) {
            throw new Error('Could not find corresponding DOMNode');
        }
        const frameId = domNode.frameOwnerFrameId();
        if (!frameId) {
            throw Error('No owner frameId on iframe node');
        }
        const localRoot = await getRootNode(frameId);
        return [localRoot];
    }
    return node.accessibilityModel().requestAXChildren(node.id(), node.getFrameId() || undefined);
}
async function sdkNodeToAXTreeNodes(sdkNode) {
    const treeNodeData = sdkNode;
    if (isLeafNode(sdkNode)) {
        return [{
                treeNodeData,
                id: getNodeId(sdkNode),
            }];
    }
    return [{
            treeNodeData,
            children: async () => {
                const childNodes = await getChildren(sdkNode);
                const childTreeNodes = await Promise.all(childNodes.map(childNode => sdkNodeToAXTreeNodes(childNode)));
                return childTreeNodes.flat(1);
            },
            id: getNodeId(sdkNode),
        }];
}
function accessibilityNodeRenderer(node) {
    const tag = _components_components_js__WEBPACK_IMPORTED_MODULE_1__.AccessibilityTreeNode.AccessibilityTreeNode.litTagName;
    const sdkNode = node.treeNodeData;
    const name = sdkNode.name()?.value || '';
    const role = sdkNode.role()?.value || '';
    const properties = sdkNode.properties() || [];
    const ignored = sdkNode.ignored();
    const id = getNodeId(sdkNode);
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `<${tag} .data=${{ name, role, ignored, properties, id }}></${tag}>`;
}
function getNodeId(node) {
    return node.getFrameId() + '#' + node.id();
}


/***/ }),

/***/ "./src/panels/elements/AccessibilityTreeView.ts":
/*!******************************************************!*\
  !*** ./src/panels/elements/AccessibilityTreeView.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessibilityTreeView: () => (/* binding */ AccessibilityTreeView)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/tree_outline/tree_outline.js */ "./src/ui/components/tree_outline/tree_outline.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _AccessibilityTreeUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AccessibilityTreeUtils.js */ "./src/panels/elements/AccessibilityTreeUtils.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './accessibilityTreeView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ElementsPanel.js */ "./src/panels/elements/ElementsPanel.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







class AccessibilityTreeView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox {
    constructor(toggleButton, accessibilityTreeComponent) {
        super();
        Object.defineProperty(this, "accessibilityTreeComponent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toggleButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "inspectedDOMNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "root", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        // toggleButton is bound to a click handler on ElementsPanel to switch between the DOM tree
        // and accessibility tree views.
        this.toggleButton = toggleButton;
        this.accessibilityTreeComponent = accessibilityTreeComponent;
        const container = this.contentElement.createChild('div');
        container.classList.add('accessibility-tree-view-container');
        container.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.tree('full-accessibility')}`);
        container.appendChild(this.toggleButton);
        container.appendChild(this.accessibilityTreeComponent);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.AccessibilityModel.AccessibilityModel, this, { scoped: true });
        // The DOM tree and accessibility are kept in sync as much as possible, so
        // on node selection, update the currently inspected node and reveal in the
        // DOM tree.
        this.accessibilityTreeComponent.addEventListener('itemselected', (event) => {
            const evt = event;
            const axNode = evt.data.node.treeNodeData;
            if (!axNode.isDOMNode()) {
                return;
            }
            const deferredNode = axNode.deferredDOMNode();
            if (deferredNode) {
                deferredNode.resolve(domNode => {
                    if (domNode) {
                        this.inspectedDOMNode = domNode;
                        void _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_6__.ElementsPanel.instance().revealAndSelectNode(domNode, true, false);
                    }
                });
            }
        });
        this.accessibilityTreeComponent.addEventListener('itemmouseover', (event) => {
            const evt = event;
            evt.data.node.treeNodeData.highlightDOMNode();
        });
        this.accessibilityTreeComponent.addEventListener('itemmouseout', () => {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        });
    }
    async wasShown() {
        await this.refreshAccessibilityTree();
        if (this.inspectedDOMNode) {
            await this.loadSubTreeIntoAccessibilityModel(this.inspectedDOMNode);
        }
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './accessibilityTreeView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
    async refreshAccessibilityTree() {
        if (!this.root) {
            const frameId = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.FrameManager.FrameManager.instance().getOutermostFrame()?.id;
            if (!frameId) {
                throw Error('No top frame');
            }
            this.root = await _AccessibilityTreeUtils_js__WEBPACK_IMPORTED_MODULE_4__.getRootNode(frameId);
            if (!this.root) {
                throw Error('No root');
            }
        }
        await this.renderTree();
        await this.accessibilityTreeComponent.expandRecursively(1);
    }
    async renderTree() {
        if (!this.root) {
            return;
        }
        const treeData = await _AccessibilityTreeUtils_js__WEBPACK_IMPORTED_MODULE_4__.sdkNodeToAXTreeNodes(this.root);
        this.accessibilityTreeComponent.data = {
            defaultRenderer: _AccessibilityTreeUtils_js__WEBPACK_IMPORTED_MODULE_4__.accessibilityNodeRenderer,
            tree: treeData,
            filter: node => {
                return node.ignored() || (node.role()?.value === 'generic' && !node.name()?.value) ?
                    _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_1__.TreeOutline.FilterOption.FLATTEN :
                    _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_1__.TreeOutline.FilterOption.SHOW;
            },
        };
    }
    // Given a selected DOM node, asks the model to load the missing subtree from the root to the
    // selected node and then re-renders the tree.
    async loadSubTreeIntoAccessibilityModel(selectedNode) {
        const ancestors = await _AccessibilityTreeUtils_js__WEBPACK_IMPORTED_MODULE_4__.getNodeAndAncestorsFromDOMNode(selectedNode);
        const inspectedAXNode = ancestors.find(node => node.backendDOMNodeId() === selectedNode.backendNodeId());
        if (!inspectedAXNode) {
            return;
        }
        await this.accessibilityTreeComponent.expandNodeIds(ancestors.map(node => node.getFrameId() + '#' + node.id()));
        await this.accessibilityTreeComponent.focusNodeId(_AccessibilityTreeUtils_js__WEBPACK_IMPORTED_MODULE_4__.getNodeId(inspectedAXNode));
    }
    // A node was revealed through the elements picker.
    async revealAndSelectNode(inspectedNode) {
        if (inspectedNode === this.inspectedDOMNode) {
            return;
        }
        this.inspectedDOMNode = inspectedNode;
        // We only want to load nodes into the model when the AccessibilityTree is visible.
        if (this.isShowing()) {
            await this.loadSubTreeIntoAccessibilityModel(inspectedNode);
        }
    }
    // Selected node in the DOM tree has changed.
    async selectedNodeChanged(inspectedNode) {
        if (this.isShowing() || (inspectedNode === this.inspectedDOMNode)) {
            return;
        }
        if (inspectedNode.ownerDocument && (inspectedNode.nodeName() === 'HTML' || inspectedNode.nodeName() === 'BODY')) {
            this.inspectedDOMNode = inspectedNode.ownerDocument;
        }
        else {
            this.inspectedDOMNode = inspectedNode;
        }
    }
    treeUpdated({ data }) {
        if (!data.root) {
            void this.renderTree();
            return;
        }
        const outermostFrameId = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.FrameManager.FrameManager.instance().getOutermostFrame()?.id;
        if (data.root?.getFrameId() !== outermostFrameId) {
            void this.renderTree();
            return;
        }
        this.root = data.root;
        void this.accessibilityTreeComponent.collapseAllNodes();
        void this.refreshAccessibilityTree();
    }
    modelAdded(model) {
        model.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.AccessibilityModel.Events.TreeUpdated, this.treeUpdated, this);
    }
    modelRemoved(model) {
        model.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.AccessibilityModel.Events.TreeUpdated, this.treeUpdated, this);
    }
}


/***/ }),

/***/ "./src/panels/elements/ComputedStyleWidget.ts":
/*!****************************************************!*\
  !*** ./src/panels/elements/ComputedStyleWidget.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputedStyleWidget: () => (/* binding */ ComputedStyleWidget)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/tree_outline/tree_outline.js */ "./src/ui/components/tree_outline/tree_outline.ts");
/* harmony import */ var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/inline_editor/inline_editor.js */ "./src/ui/legacy/components/inline_editor/inline_editor.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/elements/components/components.ts");
/* harmony import */ var _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ComputedStyleModel.js */ "./src/panels/elements/ComputedStyleModel.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './computedStyleSidebarPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ImagePreviewPopover_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ImagePreviewPopover.js */ "./src/panels/elements/ImagePreviewPopover.ts");
/* harmony import */ var _PlatformFontsWidget_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PlatformFontsWidget.js */ "./src/panels/elements/PlatformFontsWidget.ts");
/* harmony import */ var _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./PropertyMatchers.js */ "./src/panels/elements/PropertyMatchers.ts");
/* harmony import */ var _PropertyNameCategories_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PropertyNameCategories.js */ "./src/panels/elements/PropertyNameCategories.ts");
/* harmony import */ var _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PropertyRenderer.js */ "./src/panels/elements/PropertyRenderer.ts");
/* harmony import */ var _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./StylePropertiesSection.js */ "./src/panels/elements/StylePropertiesSection.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ComputedStyleWidget_computedStylesTree, _ComputedStyleWidget_treeData;
/*
 * Copyright (C) 2007 Apple Inc.  All rights reserved.
 * Copyright (C) 2009 Joseph Pecoraro
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


















const UIStrings = {
    /**
     * @description Text for a checkbox setting that controls whether the user-supplied filter text
     * excludes all CSS propreties which are filtered out, or just greys them out. In Computed Style
     * Widget of the Elements panel
     */
    showAll: 'Show all',
    /**
     * @description Text for a checkbox setting that controls whether similar CSS properties should be
     * grouped together or not. In Computed Style Widget of the Elements panel.
     */
    group: 'Group',
    /** [
     * @description Text shown to the user when a filter is applied to the computed CSS properties, but
     * no properties matched the filter and thus no results were returned.
     */
    noMatchingProperty: 'No matching property',
    /**
     * @description Context menu item in Elements panel to navigate to the source code location of the
     * CSS selector that was clicked on.
     */
    navigateToSelectorSource: 'Navigate to selector source',
    /**
     * @description Context menu item in Elements panel to navigate to the corresponding CSS style rule
     * for this computed property.
     */
    navigateToStyle: 'Navigate to style',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/elements/ComputedStyleWidget.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
/**
 * Rendering a property's name and value is expensive, and each time we do it
 * it generates a new HTML element. If we call this directly from our Lit
 * components, we will generate a brand new DOM element on each single render.
 * This is very expensive and unneccessary - for the majority of re-renders a
 * property's name and value does not change. So we cache the rest of rendering
 * the name and value in a map, where the key used is a combination of the
 * property's name and value. This ensures that we only re-generate this element
 * if the node itself changes.
 * The resulting Element nodes are inserted into the ComputedStyleProperty
 * component via <slot>s, ensuring that Lit doesn't directly render/re-render
 * the element.
 */
const propertyContentsCache = new Map();
function renderPropertyContents(node, propertyName, propertyValue) {
    const cacheKey = propertyName + ':' + propertyValue;
    const valueFromCache = propertyContentsCache.get(cacheKey);
    if (valueFromCache) {
        return valueFromCache;
    }
    const name = _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_16__.Renderer.renderNameElement(propertyName);
    name.slot = 'name';
    const value = _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_16__.Renderer.renderValueElement(propertyName, propertyValue, [new ColorRenderer(), new _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_16__.URLRenderer(null, node), new _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_16__.StringRenderer()]);
    value.slot = 'value';
    propertyContentsCache.set(cacheKey, { name, value });
    return { name, value };
}
/**
 * Note: this function is called for each tree node on each render, so we need
 * to ensure nothing expensive runs here, or if it does it is safely cached.
 **/
const createPropertyElement = (node, propertyName, propertyValue, traceable, inherited, activeProperty, onContextMenu) => {
    const { name, value } = renderPropertyContents(node, propertyName, propertyValue);
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `<${_components_components_js__WEBPACK_IMPORTED_MODULE_9__.ComputedStyleProperty.ComputedStyleProperty.litTagName}
        .traceable=${traceable}
        .inherited=${inherited}
        @oncontextmenu=${onContextMenu}
        @onnavigatetosource=${(event) => {
        if (activeProperty) {
            navigateToSource(activeProperty, event);
        }
    }}>
          ${name}
          ${value}
      </${_components_components_js__WEBPACK_IMPORTED_MODULE_9__.ComputedStyleProperty.ComputedStyleProperty.litTagName}>`;
    // clang-format on
};
const createTraceElement = (node, property, isPropertyOverloaded, matchedStyles, linkifier) => {
    const trace = new _components_components_js__WEBPACK_IMPORTED_MODULE_9__.ComputedStyleTrace.ComputedStyleTrace();
    const valueElement = _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_16__.Renderer.renderValueElement(property.name, property.value, [new ColorRenderer(), new _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_16__.URLRenderer(null, node), new _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_16__.StringRenderer()]);
    valueElement.slot = 'trace-value';
    trace.appendChild(valueElement);
    const rule = property.ownerStyle.parentRule;
    let ruleOriginNode;
    if (rule) {
        ruleOriginNode = _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_17__.StylePropertiesSection.createRuleOriginNode(matchedStyles, linkifier, rule);
    }
    trace.data = {
        selector: rule ? rule.selectorText() : 'element.style',
        active: !isPropertyOverloaded,
        onNavigateToSource: navigateToSource.bind(null, property),
        ruleOriginNode,
    };
    return trace;
};
class ColorRenderer {
    render(match, context) {
        const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(match.text);
        if (!color) {
            return [document.createTextNode(match.text)];
        }
        const swatch = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__.ColorSwatch.ColorSwatch();
        swatch.setReadonly(true);
        swatch.renderColor(color);
        const valueElement = document.createElement('span');
        valueElement.textContent = match.text;
        swatch.append(valueElement);
        swatch.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__.ColorSwatch.ColorChangedEvent.eventName, (event) => {
            const { data: { color } } = event;
            valueElement.textContent = color.getAuthoredText() ?? color.asString();
        });
        context.addControl('color', swatch);
        return [swatch];
    }
    matcher() {
        return new _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_14__.ColorMatcher();
    }
}
const navigateToSource = (cssProperty, event) => {
    if (!event) {
        return;
    }
    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(cssProperty);
    event.consume(true);
};
const propertySorter = (propA, propB) => {
    if (propA.startsWith('--') !== propB.startsWith('--')) {
        return propA.startsWith('--') ? 1 : -1;
    }
    if (propA.startsWith('-webkit') !== propB.startsWith('-webkit')) {
        return propA.startsWith('-webkit') ? 1 : -1;
    }
    const canonicalA = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSMetadata.cssMetadata().canonicalPropertyName(propA);
    const canonicalB = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSMetadata.cssMetadata().canonicalPropertyName(propB);
    return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.compare(canonicalA, canonicalB);
};
class ComputedStyleWidget extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ThrottledWidget.ThrottledWidget {
    constructor() {
        super(true);
        Object.defineProperty(this, "computedStyleModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "showInheritedComputedStylePropertiesSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "groupComputedStylesSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "input", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "filterRegex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "noMatchesElement", {
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
        Object.defineProperty(this, "imagePreviewPopover", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _ComputedStyleWidget_computedStylesTree.set(this, new _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutline());
        _ComputedStyleWidget_treeData.set(this, void 0);
        this.contentElement.classList.add('styles-sidebar-computed-style-widget');
        this.computedStyleModel = new _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_10__.ComputedStyleModel();
        this.computedStyleModel.addEventListener(_ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_10__.Events.ComputedStyleChanged, this.update, this);
        this.showInheritedComputedStylePropertiesSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('show-inherited-computed-style-properties', false);
        this.showInheritedComputedStylePropertiesSetting.addChangeListener(this.update.bind(this));
        this.groupComputedStylesSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('group-computed-styles', false);
        this.groupComputedStylesSetting.addChangeListener(() => {
            this.update();
        });
        const hbox = this.contentElement.createChild('div', 'hbox styles-sidebar-pane-toolbar');
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar('styles-pane-toolbar', hbox);
        const filterInput = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarFilter(undefined, 1, 1, undefined, undefined, false);
        filterInput.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarInput.Event.TextChanged, this.onFilterChanged, this);
        toolbar.appendToolbarItem(filterInput);
        this.input = filterInput;
        this.filterRegex = null;
        toolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarSettingCheckbox(this.showInheritedComputedStylePropertiesSetting, undefined, i18nString(UIStrings.showAll)));
        toolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarSettingCheckbox(this.groupComputedStylesSetting, undefined, i18nString(UIStrings.group)));
        this.noMatchesElement = this.contentElement.createChild('div', 'gray-info-message');
        this.noMatchesElement.textContent = i18nString(UIStrings.noMatchingProperty);
        this.contentElement.appendChild(__classPrivateFieldGet(this, _ComputedStyleWidget_computedStylesTree, "f"));
        this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.Linkifier.Linkifier(maxLinkLength);
        this.imagePreviewPopover = new _ImagePreviewPopover_js__WEBPACK_IMPORTED_MODULE_12__.ImagePreviewPopover(this.contentElement, event => {
            const link = event.composedPath()[0];
            if (link instanceof Element) {
                return link;
            }
            return null;
        }, () => this.computedStyleModel.node());
        const fontsWidget = new _PlatformFontsWidget_js__WEBPACK_IMPORTED_MODULE_13__.PlatformFontsWidget(this.computedStyleModel);
        fontsWidget.show(this.contentElement);
    }
    onResize() {
        const isNarrow = this.contentElement.offsetWidth < 260;
        __classPrivateFieldGet(this, _ComputedStyleWidget_computedStylesTree, "f").classList.toggle('computed-narrow', isNarrow);
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './computedStyleSidebarPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
    async doUpdate() {
        const [nodeStyles, matchedStyles] = await Promise.all([this.computedStyleModel.fetchComputedStyle(), this.fetchMatchedCascade()]);
        if (!nodeStyles || !matchedStyles) {
            this.noMatchesElement.classList.remove('hidden');
            return;
        }
        const shouldGroupComputedStyles = this.groupComputedStylesSetting.get();
        if (shouldGroupComputedStyles) {
            await this.rebuildGroupedList(nodeStyles, matchedStyles);
        }
        else {
            await this.rebuildAlphabeticalList(nodeStyles, matchedStyles);
        }
    }
    async fetchMatchedCascade() {
        const node = this.computedStyleModel.node();
        if (!node || !this.computedStyleModel.cssModel()) {
            return null;
        }
        const cssModel = this.computedStyleModel.cssModel();
        if (!cssModel) {
            return null;
        }
        return cssModel.cachedMatchedCascadeForNode(node).then(validateStyles.bind(this));
        function validateStyles(matchedStyles) {
            return matchedStyles && matchedStyles.node() === this.computedStyleModel.node() ? matchedStyles : null;
        }
    }
    async rebuildAlphabeticalList(nodeStyle, matchedStyles) {
        this.imagePreviewPopover.hide();
        this.linkifier.reset();
        const cssModel = this.computedStyleModel.cssModel();
        if (!cssModel) {
            return;
        }
        const uniqueProperties = [...nodeStyle.computedStyle.keys()];
        uniqueProperties.sort(propertySorter);
        const node = nodeStyle.node;
        const propertyTraces = this.computePropertyTraces(matchedStyles);
        const nonInheritedProperties = this.computeNonInheritedProperties(matchedStyles);
        const showInherited = this.showInheritedComputedStylePropertiesSetting.get();
        const tree = [];
        for (const propertyName of uniqueProperties) {
            const propertyValue = nodeStyle.computedStyle.get(propertyName) || '';
            const canonicalName = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSMetadata.cssMetadata().canonicalPropertyName(propertyName);
            const isInherited = !nonInheritedProperties.has(canonicalName);
            if (!showInherited && isInherited && !alwaysShownComputedProperties.has(propertyName)) {
                continue;
            }
            if (!showInherited && propertyName.startsWith('--')) {
                continue;
            }
            if (propertyName !== canonicalName && propertyValue === nodeStyle.computedStyle.get(canonicalName)) {
                continue;
            }
            tree.push(this.buildTreeNode(propertyTraces, propertyName, propertyValue, isInherited));
        }
        const defaultRenderer = this.createTreeNodeRenderer(propertyTraces, node, matchedStyles);
        __classPrivateFieldSet(this, _ComputedStyleWidget_treeData, {
            tree,
            compact: true,
            defaultRenderer,
        }, "f");
        this.filterAlphabeticalList();
    }
    async rebuildGroupedList(nodeStyle, matchedStyles) {
        this.imagePreviewPopover.hide();
        this.linkifier.reset();
        const cssModel = this.computedStyleModel.cssModel();
        if (!nodeStyle || !matchedStyles || !cssModel) {
            this.noMatchesElement.classList.remove('hidden');
            return;
        }
        const node = nodeStyle.node;
        const propertyTraces = this.computePropertyTraces(matchedStyles);
        const nonInheritedProperties = this.computeNonInheritedProperties(matchedStyles);
        const showInherited = this.showInheritedComputedStylePropertiesSetting.get();
        const propertiesByCategory = new Map();
        const tree = [];
        for (const [propertyName, propertyValue] of nodeStyle.computedStyle) {
            const canonicalName = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSMetadata.cssMetadata().canonicalPropertyName(propertyName);
            const isInherited = !nonInheritedProperties.has(canonicalName);
            if (!showInherited && isInherited && !alwaysShownComputedProperties.has(propertyName)) {
                continue;
            }
            if (!showInherited && propertyName.startsWith('--')) {
                continue;
            }
            if (propertyName !== canonicalName && propertyValue === nodeStyle.computedStyle.get(canonicalName)) {
                continue;
            }
            const categories = (0,_PropertyNameCategories_js__WEBPACK_IMPORTED_MODULE_15__.categorizePropertyName)(propertyName);
            for (const category of categories) {
                if (!propertiesByCategory.has(category)) {
                    propertiesByCategory.set(category, []);
                }
                propertiesByCategory.get(category)?.push(propertyName);
            }
        }
        __classPrivateFieldGet(this, _ComputedStyleWidget_computedStylesTree, "f").removeChildren();
        for (const category of _PropertyNameCategories_js__WEBPACK_IMPORTED_MODULE_15__.DefaultCategoryOrder) {
            const properties = propertiesByCategory.get(category);
            if (properties && properties.length > 0) {
                const propertyNodes = [];
                for (const propertyName of properties) {
                    const propertyValue = nodeStyle.computedStyle.get(propertyName) || '';
                    const canonicalName = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSMetadata.cssMetadata().canonicalPropertyName(propertyName);
                    const isInherited = !nonInheritedProperties.has(canonicalName);
                    propertyNodes.push(this.buildTreeNode(propertyTraces, propertyName, propertyValue, isInherited));
                }
                tree.push({ id: category, treeNodeData: { tag: 'category', name: category }, children: async () => propertyNodes });
            }
        }
        const defaultRenderer = this.createTreeNodeRenderer(propertyTraces, node, matchedStyles);
        __classPrivateFieldSet(this, _ComputedStyleWidget_treeData, {
            tree,
            compact: true,
            defaultRenderer,
        }, "f");
        return this.filterGroupLists();
    }
    buildTraceNode(property) {
        const rule = property.ownerStyle.parentRule;
        return {
            treeNodeData: {
                tag: 'traceElement',
                property,
                rule,
            },
            id: (rule?.origin || '') + ': ' + property.ownerStyle.styleSheetId + (property.range || property.name),
        };
    }
    createTreeNodeRenderer(propertyTraces, domNode, matchedStyles) {
        return node => {
            const data = node.treeNodeData;
            if (data.tag === 'property') {
                const trace = propertyTraces.get(data.propertyName);
                const activeProperty = trace?.find(property => matchedStyles.propertyState(property) === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSMatchedStyles.PropertyState.Active);
                const propertyElement = createPropertyElement(domNode, data.propertyName, data.propertyValue, propertyTraces.has(data.propertyName), data.inherited, activeProperty, event => {
                    if (activeProperty) {
                        this.handleContextMenuEvent(matchedStyles, activeProperty, event);
                    }
                });
                return propertyElement;
            }
            if (data.tag === 'traceElement') {
                const isPropertyOverloaded = matchedStyles.propertyState(data.property) === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSMatchedStyles.PropertyState.Overloaded;
                const traceElement = createTraceElement(domNode, data.property, isPropertyOverloaded, matchedStyles, this.linkifier);
                traceElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this, matchedStyles, data.property));
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `${traceElement}`;
            }
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `<span style="cursor: text; color: var(--sys-color-token-subtle);">${data.name}</span>`;
        };
    }
    buildTreeNode(propertyTraces, propertyName, propertyValue, isInherited) {
        const treeNodeData = {
            tag: 'property',
            propertyName,
            propertyValue,
            inherited: isInherited,
        };
        const trace = propertyTraces.get(propertyName);
        if (!trace) {
            return {
                treeNodeData,
                jslogContext: propertyName,
                id: propertyName,
            };
        }
        return {
            treeNodeData,
            jslogContext: propertyName,
            id: propertyName,
            children: async () => trace.map(this.buildTraceNode),
        };
    }
    handleContextMenuEvent(matchedStyles, property, event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ContextMenu.ContextMenu(event);
        const rule = property.ownerStyle.parentRule;
        if (rule) {
            const header = rule.styleSheetId ? matchedStyles.cssModel().styleSheetHeaderForId(rule.styleSheetId) : null;
            if (header && !header.isAnonymousInlineStyleSheet()) {
                contextMenu.defaultSection().appendItem(i18nString(UIStrings.navigateToSelectorSource), () => {
                    _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_17__.StylePropertiesSection.tryNavigateToRuleLocation(matchedStyles, rule);
                }, { jslogContext: 'navigate-to-selector-source' });
            }
        }
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.navigateToStyle), () => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(property), { jslogContext: 'navigate-to-style' });
        void contextMenu.show();
    }
    computePropertyTraces(matchedStyles) {
        const result = new Map();
        for (const style of matchedStyles.nodeStyles()) {
            const allProperties = style.allProperties();
            for (const property of allProperties) {
                if (!property.activeInStyle() || !matchedStyles.propertyState(property)) {
                    continue;
                }
                if (!result.has(property.name)) {
                    result.set(property.name, []);
                }
                // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration
                // @ts-expect-error
                result.get(property.name).push(property);
            }
        }
        return result;
    }
    computeNonInheritedProperties(matchedStyles) {
        const result = new Set();
        for (const style of matchedStyles.nodeStyles()) {
            for (const property of style.allProperties()) {
                if (!matchedStyles.propertyState(property)) {
                    continue;
                }
                result.add(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSMetadata.cssMetadata().canonicalPropertyName(property.name));
            }
        }
        return result;
    }
    onFilterChanged(event) {
        void this.filterComputedStyles(event.data ? new RegExp(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.escapeForRegExp(event.data), 'i') : null);
    }
    async filterComputedStyles(regex) {
        this.filterRegex = regex;
        if (this.groupComputedStylesSetting.get()) {
            return this.filterGroupLists();
        }
        return this.filterAlphabeticalList();
    }
    nodeFilter(node) {
        const regex = this.filterRegex;
        const data = node.treeNodeData;
        if (data.tag === 'property') {
            const matched = !regex || regex.test(data.propertyName) || regex.test(data.propertyValue);
            return matched;
        }
        return true;
    }
    filterAlphabeticalList() {
        if (!__classPrivateFieldGet(this, _ComputedStyleWidget_treeData, "f")) {
            return;
        }
        const tree = __classPrivateFieldGet(this, _ComputedStyleWidget_treeData, "f").tree.filter(this.nodeFilter.bind(this));
        __classPrivateFieldGet(this, _ComputedStyleWidget_computedStylesTree, "f").data = {
            tree,
            defaultRenderer: __classPrivateFieldGet(this, _ComputedStyleWidget_treeData, "f").defaultRenderer,
            compact: __classPrivateFieldGet(this, _ComputedStyleWidget_treeData, "f").compact,
        };
        this.noMatchesElement.classList.toggle('hidden', Boolean(tree.length));
    }
    async filterGroupLists() {
        if (!__classPrivateFieldGet(this, _ComputedStyleWidget_treeData, "f")) {
            return;
        }
        const tree = [];
        for (const group of __classPrivateFieldGet(this, _ComputedStyleWidget_treeData, "f").tree) {
            const data = group.treeNodeData;
            if (data.tag !== 'category' || !group.children) {
                continue;
            }
            const properties = await group.children();
            const filteredChildren = properties.filter(this.nodeFilter.bind(this));
            if (filteredChildren.length) {
                tree.push({ id: data.name, treeNodeData: { tag: 'category', name: data.name }, children: async () => filteredChildren });
            }
        }
        __classPrivateFieldGet(this, _ComputedStyleWidget_computedStylesTree, "f").data = {
            tree,
            defaultRenderer: __classPrivateFieldGet(this, _ComputedStyleWidget_treeData, "f").defaultRenderer,
            compact: __classPrivateFieldGet(this, _ComputedStyleWidget_treeData, "f").compact,
        };
        await __classPrivateFieldGet(this, _ComputedStyleWidget_computedStylesTree, "f").expandRecursively(0);
        this.noMatchesElement.classList.toggle('hidden', Boolean(tree.length));
    }
}
_ComputedStyleWidget_computedStylesTree = new WeakMap(), _ComputedStyleWidget_treeData = new WeakMap();
const maxLinkLength = 30;
const alwaysShownComputedProperties = new Set(['display', 'height', 'width']);


/***/ }),

/***/ "./src/panels/elements/DOMLinkifier.ts":
/*!*********************************************!*\
  !*** ./src/panels/elements/DOMLinkifier.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Linkifier: () => (/* binding */ Linkifier),
/* harmony export */   decorateNodeLabel: () => (/* binding */ decorateNodeLabel),
/* harmony export */   linkifyDeferredNodeReference: () => (/* binding */ linkifyDeferredNodeReference),
/* harmony export */   linkifyNodeReference: () => (/* binding */ linkifyNodeReference)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './domLinkifier.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     * @description Text displayed when trying to create a link to a node in the UI, but the node
     * location could not be found so we display this placeholder instead. Node refers to a DOM node.
     * This should be translated if appropriate.
     */
    node: '<node>',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/elements/DOMLinkifier.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const decorateNodeLabel = function (node, parentElement, options) {
    const originalNode = node;
    const isPseudo = node.nodeType() === Node.ELEMENT_NODE && node.pseudoType();
    if (isPseudo && node.parentNode) {
        node = node.parentNode;
    }
    // Special case rendering the node links for view transition pseudo elements.
    // We don't include the ancestor name in the node link because
    // they always have the same ancestor. See crbug.com/340633630.
    if (node.isViewTransitionPseudoNode()) {
        const pseudoElement = parentElement.createChild('span', 'extra node-label-pseudo');
        const viewTransitionPseudoText = `::${originalNode.pseudoType()}(${originalNode.pseudoIdentifier()})`;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(pseudoElement, viewTransitionPseudoText);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(parentElement, options.tooltip || viewTransitionPseudoText);
        return;
    }
    const nameElement = parentElement.createChild('span', 'node-label-name');
    if (options.textContent) {
        nameElement.textContent = options.textContent;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(parentElement, options.tooltip || options.textContent);
        return;
    }
    let title = node.nodeNameInCorrectCase();
    nameElement.textContent = title;
    const idAttribute = node.getAttribute('id');
    if (idAttribute) {
        const idElement = parentElement.createChild('span', 'node-label-id');
        const part = '#' + idAttribute;
        title += part;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(idElement, part);
        // Mark the name as extra, since the ID is more important.
        nameElement.classList.add('extra');
    }
    const classAttribute = node.getAttribute('class');
    if (classAttribute) {
        const classes = classAttribute.split(/\s+/);
        if (classes.length) {
            const foundClasses = new Set();
            const classesElement = parentElement.createChild('span', 'extra node-label-class');
            for (let i = 0; i < classes.length; ++i) {
                const className = classes[i];
                if (className && !foundClasses.has(className)) {
                    const part = '.' + className;
                    title += part;
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(classesElement, part);
                    foundClasses.add(className);
                }
            }
        }
    }
    if (isPseudo) {
        const pseudoIdentifier = originalNode.pseudoIdentifier();
        const pseudoElement = parentElement.createChild('span', 'extra node-label-pseudo');
        let pseudoText = '::' + originalNode.pseudoType();
        if (pseudoIdentifier) {
            pseudoText += `(${pseudoIdentifier})`;
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(pseudoElement, pseudoText);
        title += pseudoText;
    }
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(parentElement, options.tooltip || title);
};
const linkifyNodeReference = function (node, options = {
    tooltip: undefined,
    preventKeyboardFocus: undefined,
    textContent: undefined,
    isDynamicLink: false,
}) {
    if (!node) {
        return document.createTextNode(i18nString(UIStrings.node));
    }
    const root = document.createElement('span');
    root.classList.add('monospace');
    const shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createShadowRootWithCoreStyles(root, { cssFile: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './domLinkifier.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], delegatesFocus: undefined });
    const link = shadowRoot.createChild('button', 'node-link text-button link-style');
    link.classList.toggle('dynamic-link', options.isDynamicLink);
    link.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.link('node').track({ click: true, keydown: 'Enter' })}`);
    decorateNodeLabel(node, link, options);
    link.addEventListener('click', () => {
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(node, false);
        return false;
    }, false);
    link.addEventListener('mouseover', node.highlight.bind(node, undefined), false);
    link.addEventListener('mouseleave', () => _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel.hideDOMNodeHighlight(), false);
    if (options.preventKeyboardFocus) {
        link.tabIndex = -1;
    }
    return root;
};
const linkifyDeferredNodeReference = function (deferredNode, options = {
    tooltip: undefined,
    preventKeyboardFocus: undefined,
}) {
    const root = document.createElement('div');
    const shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createShadowRootWithCoreStyles(root, { cssFile: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './domLinkifier.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], delegatesFocus: undefined });
    const link = shadowRoot.createChild('button', 'node-link text-button link-style');
    link.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.link('node').track({ click: true })}`);
    link.createChild('slot');
    link.addEventListener('click', deferredNode.resolve.bind(deferredNode, onDeferredNodeResolved), false);
    link.addEventListener('mousedown', e => e.consume(), false);
    if (options.preventKeyboardFocus) {
        link.tabIndex = -1;
    }
    function onDeferredNodeResolved(node) {
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(node);
    }
    return root;
};
let linkifierInstance;
class Linkifier {
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!linkifierInstance || forceNew) {
            linkifierInstance = new Linkifier();
        }
        return linkifierInstance;
    }
    linkify(object, options) {
        if (object instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode) {
            return linkifyNodeReference(object, options);
        }
        if (object instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DeferredDOMNode) {
            return linkifyDeferredNodeReference(object, options);
        }
        throw new Error('Can\'t linkify non-node');
    }
}


/***/ }),

/***/ "./src/panels/elements/DOMPath.ts":
/*!****************************************!*\
  !*** ./src/panels/elements/DOMPath.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Step: () => (/* binding */ Step),
/* harmony export */   canGetJSPath: () => (/* binding */ canGetJSPath),
/* harmony export */   cssPath: () => (/* binding */ cssPath),
/* harmony export */   fullQualifiedSelector: () => (/* binding */ fullQualifiedSelector),
/* harmony export */   jsPath: () => (/* binding */ jsPath),
/* harmony export */   xPath: () => (/* binding */ xPath)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const fullQualifiedSelector = function (node, justSelector) {
    if (node.nodeType() !== Node.ELEMENT_NODE) {
        return node.localName() || node.nodeName().toLowerCase();
    }
    return cssPath(node, justSelector);
};
const cssPath = function (node, optimized) {
    if (node.nodeType() !== Node.ELEMENT_NODE) {
        return '';
    }
    const steps = [];
    let contextNode = node;
    while (contextNode) {
        const step = cssPathStep(contextNode, Boolean(optimized), contextNode === node);
        if (!step) {
            break;
        } // Error - bail out early.
        steps.push(step);
        if (step.optimized) {
            break;
        }
        contextNode = contextNode.parentNode;
    }
    steps.reverse();
    return steps.join(' > ');
};
const canGetJSPath = function (node) {
    let wp = node;
    while (wp) {
        const shadowRoot = wp.ancestorShadowRoot();
        if (shadowRoot && shadowRoot.shadowRootType() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode.ShadowRootTypes.Open) {
            return false;
        }
        wp = wp.ancestorShadowHost();
    }
    return true;
};
const jsPath = function (node, optimized) {
    if (node.nodeType() !== Node.ELEMENT_NODE) {
        return '';
    }
    const path = [];
    let wp = node;
    while (wp) {
        path.push(cssPath(wp, optimized));
        wp = wp.ancestorShadowHost();
    }
    path.reverse();
    let result = '';
    for (let i = 0; i < path.length; ++i) {
        const string = JSON.stringify(path[i]);
        if (i) {
            result += `.shadowRoot.querySelector(${string})`;
        }
        else {
            result += `document.querySelector(${string})`;
        }
    }
    return result;
};
const cssPathStep = function (node, optimized, isTargetNode) {
    if (node.nodeType() !== Node.ELEMENT_NODE) {
        return null;
    }
    const id = node.getAttribute('id');
    if (optimized) {
        if (id) {
            return new Step(idSelector(id), true);
        }
        const nodeNameLower = node.nodeName().toLowerCase();
        if (nodeNameLower === 'body' || nodeNameLower === 'head' || nodeNameLower === 'html') {
            return new Step(node.nodeNameInCorrectCase(), true);
        }
    }
    const nodeName = node.nodeNameInCorrectCase();
    if (id) {
        return new Step(nodeName + idSelector(id), true);
    }
    const parent = node.parentNode;
    if (!parent || parent.nodeType() === Node.DOCUMENT_NODE) {
        return new Step(nodeName, true);
    }
    function prefixedElementClassNames(node) {
        const classAttribute = node.getAttribute('class');
        if (!classAttribute) {
            return [];
        }
        return classAttribute.split(/\s+/g).filter(Boolean).map(function (name) {
            // The prefix is required to store "__proto__" in a object-based map.
            return '$' + name;
        });
    }
    function idSelector(id) {
        return '#' + CSS.escape(id);
    }
    const prefixedOwnClassNamesArray = prefixedElementClassNames(node);
    let needsClassNames = false;
    let needsNthChild = false;
    let ownIndex = -1;
    let elementIndex = -1;
    const siblings = parent.children();
    for (let i = 0; siblings && (ownIndex === -1 || !needsNthChild) && i < siblings.length; ++i) {
        const sibling = siblings[i];
        if (sibling.nodeType() !== Node.ELEMENT_NODE) {
            continue;
        }
        elementIndex += 1;
        if (sibling === node) {
            ownIndex = elementIndex;
            continue;
        }
        if (needsNthChild) {
            continue;
        }
        if (sibling.nodeNameInCorrectCase() !== nodeName) {
            continue;
        }
        needsClassNames = true;
        const ownClassNames = new Set(prefixedOwnClassNamesArray);
        if (!ownClassNames.size) {
            needsNthChild = true;
            continue;
        }
        const siblingClassNamesArray = prefixedElementClassNames(sibling);
        for (let j = 0; j < siblingClassNamesArray.length; ++j) {
            const siblingClass = siblingClassNamesArray[j];
            if (!ownClassNames.has(siblingClass)) {
                continue;
            }
            ownClassNames.delete(siblingClass);
            if (!ownClassNames.size) {
                needsNthChild = true;
                break;
            }
        }
    }
    let result = nodeName;
    if (isTargetNode && nodeName.toLowerCase() === 'input' && node.getAttribute('type') && !node.getAttribute('id') &&
        !node.getAttribute('class')) {
        result += '[type=' + CSS.escape((node.getAttribute('type')) || '') + ']';
    }
    if (needsNthChild) {
        result += ':nth-child(' + (ownIndex + 1) + ')';
    }
    else if (needsClassNames) {
        for (const prefixedName of prefixedOwnClassNamesArray) {
            result += '.' + CSS.escape(prefixedName.slice(1));
        }
    }
    return new Step(result, false);
};
const xPath = function (node, optimized) {
    if (node.nodeType() === Node.DOCUMENT_NODE) {
        return '/';
    }
    const steps = [];
    let contextNode = node;
    while (contextNode) {
        const step = xPathValue(contextNode, optimized);
        if (!step) {
            break;
        } // Error - bail out early.
        steps.push(step);
        if (step.optimized) {
            break;
        }
        contextNode = contextNode.parentNode;
    }
    steps.reverse();
    return (steps.length && steps[0].optimized ? '' : '/') + steps.join('/');
};
const xPathValue = function (node, optimized) {
    let ownValue;
    const ownIndex = xPathIndex(node);
    if (ownIndex === -1) {
        return null;
    } // Error.
    switch (node.nodeType()) {
        case Node.ELEMENT_NODE:
            if (optimized && node.getAttribute('id')) {
                return new Step('//*[@id="' + node.getAttribute('id') + '"]', true);
            }
            ownValue = node.localName();
            break;
        case Node.ATTRIBUTE_NODE:
            ownValue = '@' + node.nodeName();
            break;
        case Node.TEXT_NODE:
        case Node.CDATA_SECTION_NODE:
            ownValue = 'text()';
            break;
        case Node.PROCESSING_INSTRUCTION_NODE:
            ownValue = 'processing-instruction()';
            break;
        case Node.COMMENT_NODE:
            ownValue = 'comment()';
            break;
        case Node.DOCUMENT_NODE:
            ownValue = '';
            break;
        default:
            ownValue = '';
            break;
    }
    if (ownIndex > 0) {
        ownValue += '[' + ownIndex + ']';
    }
    return new Step(ownValue, node.nodeType() === Node.DOCUMENT_NODE);
};
const xPathIndex = function (node) {
    /**
     * Returns -1 in case of error, 0 if no siblings matching the same expression,
     * <XPath index among the same expression-matching sibling nodes> otherwise.
     */
    function areNodesSimilar(left, right) {
        if (left === right) {
            return true;
        }
        if (left.nodeType() === Node.ELEMENT_NODE && right.nodeType() === Node.ELEMENT_NODE) {
            return left.localName() === right.localName();
        }
        if (left.nodeType() === right.nodeType()) {
            return true;
        }
        // XPath treats CDATA as text nodes.
        const leftType = left.nodeType() === Node.CDATA_SECTION_NODE ? Node.TEXT_NODE : left.nodeType();
        const rightType = right.nodeType() === Node.CDATA_SECTION_NODE ? Node.TEXT_NODE : right.nodeType();
        return leftType === rightType;
    }
    const siblings = node.parentNode ? node.parentNode.children() : null;
    if (!siblings) {
        return 0;
    } // Root node - no siblings.
    let hasSameNamedElements;
    for (let i = 0; i < siblings.length; ++i) {
        if (areNodesSimilar(node, siblings[i]) && siblings[i] !== node) {
            hasSameNamedElements = true;
            break;
        }
    }
    if (!hasSameNamedElements) {
        return 0;
    }
    let ownIndex = 1; // XPath indices start with 1.
    for (let i = 0; i < siblings.length; ++i) {
        if (areNodesSimilar(node, siblings[i])) {
            if (siblings[i] === node) {
                return ownIndex;
            }
            ++ownIndex;
        }
    }
    return -1; // An error occurred: |node| not found in parent's children.
};
class Step {
    constructor(value, optimized) {
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "optimized", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.value = value;
        this.optimized = optimized || false;
    }
    toString() {
        return this.value;
    }
}


/***/ }),

/***/ "./src/panels/elements/ElementsPanel.ts":
/*!**********************************************!*\
  !*** ./src/panels/elements/ElementsPanel.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSPropertyRevealer: () => (/* binding */ CSSPropertyRevealer),
/* harmony export */   ContextMenuProvider: () => (/* binding */ ContextMenuProvider),
/* harmony export */   DOMNodeRevealer: () => (/* binding */ DOMNodeRevealer),
/* harmony export */   ElementsActionDelegate: () => (/* binding */ ElementsActionDelegate),
/* harmony export */   ElementsPanel: () => (/* binding */ ElementsPanel),
/* harmony export */   PseudoStateMarkerDecorator: () => (/* binding */ PseudoStateMarkerDecorator),
/* harmony export */   SidebarPaneTabId: () => (/* binding */ SidebarPaneTabId)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/extensions/extensions.js */ "./src/models/extensions/extensions.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/tree_outline/tree_outline.js */ "./src/ui/components/tree_outline/tree_outline.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _AccessibilityTreeView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AccessibilityTreeView.js */ "./src/panels/elements/AccessibilityTreeView.ts");
/* harmony import */ var _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ColorSwatchPopoverIcon.js */ "./src/panels/elements/ColorSwatchPopoverIcon.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/elements/components/components.ts");
/* harmony import */ var _ComputedStyleWidget_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ComputedStyleWidget.js */ "./src/panels/elements/ComputedStyleWidget.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './elementsPanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ElementsTreeElementHighlighter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ElementsTreeElementHighlighter.js */ "./src/panels/elements/ElementsTreeElementHighlighter.ts");
/* harmony import */ var _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ElementsTreeOutline.js */ "./src/panels/elements/ElementsTreeOutline.ts");
/* harmony import */ var _MetricsSidebarPane_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./MetricsSidebarPane.js */ "./src/panels/elements/MetricsSidebarPane.ts");
/* harmony import */ var _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./StylesSidebarPane.js */ "./src/panels/elements/StylesSidebarPane.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2007, 2008 Apple Inc.  All rights reserved.
 * Copyright (C) 2008 Matt Lilek <webkit@mattlilek.com>
 * Copyright (C) 2009 Joseph Pecoraro
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




















const UIStrings = {
    /**
     * @description Placeholder text for the search box the Elements Panel. Selector refers to CSS
     * selectors.
     */
    findByStringSelectorOrXpath: 'Find by string, selector, or `XPath`',
    /**
     * @description Button text for a button that takes the user to the Accessibility Tree View from the
     * DOM tree view, in the Elements panel.
     */
    switchToAccessibilityTreeView: 'Switch to Accessibility Tree view',
    /**
     * @description Button text for a button that takes the user to the DOM tree view from the
     * Accessibility Tree View, in the Elements panel.
     */
    switchToDomTreeView: 'Switch to DOM Tree view',
    /**
     * @description Tooltip for the the Computed Styles sidebar toggle in the Styles pane. Command to
     * open/show the sidebar.
     */
    showComputedStylesSidebar: 'Show Computed Styles sidebar',
    /**
     * @description Tooltip for the the Computed Styles sidebar toggle in the Styles pane. Command to
     * close/hide the sidebar.
     */
    hideComputedStylesSidebar: 'Hide Computed Styles sidebar',
    /**
     * @description Screen reader announcement when the computed styles sidebar is shown in the Elements panel.
     */
    computedStylesShown: 'Computed Styles sidebar shown',
    /**
     * @description Screen reader announcement when the computed styles sidebar is hidden in the Elements panel.
     */
    computedStylesHidden: 'Computed Styles sidebar hidden',
    /**
     * @description Title of a pane in the Elements panel that shows computed styles for the selected
     * HTML element. Computed styles are the final, actual styles of the element, including all
     * implicit and specified styles.
     */
    computed: 'Computed',
    /**
     * @description Title of a pane in the Elements panel that shows the CSS styles for the selected
     * HTML element.
     */
    styles: 'Styles',
    /**
     * @description A context menu item to reveal a node in the DOM tree of the Elements Panel
     */
    revealInElementsPanel: 'Reveal in Elements panel',
    /**
     * @description Warning/error text displayed when a node cannot be found in the current page.
     */
    nodeCannotBeFoundInTheCurrent: 'Node cannot be found in the current page.',
    /**
     * @description Console warning when a user tries to reveal a non-node type Remote Object. A remote
     * object is a JavaScript object that is not stored in DevTools, that DevTools has a connection to.
     * It should correspond to a local node.
     */
    theRemoteObjectCouldNotBe: 'The remote object could not be resolved to a valid node.',
    /**
     * @description Console warning when the user tries to reveal a deferred DOM Node that resolves as
     * null. A deferred DOM node is a node we know about but have not yet fetched from the backend (we
     * defer the work until later).
     */
    theDeferredDomNodeCouldNotBe: 'The deferred `DOM` Node could not be resolved to a valid node.',
    /**
     * @description Text in Elements Panel of the Elements panel. Shows the current CSS Pseudo-classes
     * applicable to the selected HTML element.
     * @example {::after, ::before} PH1
     */
    elementStateS: 'Element state: {PH1}',
    /**
     * @description Accessible name for side panel toolbar.
     */
    sidePanelToolbar: 'Side panel toolbar',
    /**
     * @description Accessible name for side panel contents.
     */
    sidePanelContent: 'Side panel content',
    /**
     * @description Accessible name for the DOM tree explorer view.
     */
    domTreeExplorer: 'DOM tree explorer',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/elements/ElementsPanel.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
/**
 * These strings need to match the `SidebarPaneCodes` in UserMetrics.ts. DevTools
 * collects usage metrics for the different sidebar tabs.
 */
var SidebarPaneTabId;
(function (SidebarPaneTabId) {
    SidebarPaneTabId["Computed"] = "computed";
    SidebarPaneTabId["Styles"] = "styles";
})(SidebarPaneTabId || (SidebarPaneTabId = {}));
const createAccessibilityTreeToggleButton = (isActive) => {
    const button = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_7__.Button.Button();
    const title = isActive ? i18nString(UIStrings.switchToDomTreeView) : i18nString(UIStrings.switchToAccessibilityTreeView);
    button.data = {
        active: isActive,
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_7__.Button.Variant.TOOLBAR,
        iconUrl: new URL(/* asset import */ __webpack_require__(/*! ../../Images/person.svg */ "./src/Images/person.svg?9c1e"), __webpack_require__.b).toString(),
        title,
    };
    button.tabIndex = 0;
    button.classList.add('axtree-button');
    if (isActive) {
        button.classList.add('active');
    }
    return button;
};
let elementsPanelInstance;
class ElementsPanel extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Panel.Panel {
    constructor() {
        super('elements');
        Object.defineProperty(this, "splitWidget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchableViewInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "mainContainer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "domTreeContainer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "splitMode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "accessibilityTreeView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "breadcrumbs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "stylesWidget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "computedStyleWidget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metricsWidget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "treeOutlines", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Set()
        });
        Object.defineProperty(this, "searchResults", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "currentSearchResultIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pendingNodeReveal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "adornerManager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "adornerSettingsPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "adornersByName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "accessibilityTreeButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "domTreeButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectedNodeOnReset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hasNonDefaultSelectedNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchConfig", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "omitDefaultSelection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "notFirstInspectElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sidebarPaneView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "stylesViewToReveal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nodeInsertedTaskRunner", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                queue: Promise.resolve(),
                run(task) {
                    this.queue = this.queue.then(task);
                },
            }
        });
        Object.defineProperty(this, "cssStyleTrackerByCSSModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.SplitWidget.SplitWidget(true, true, 'elements-panel-split-view-state', 325, 325);
        this.splitWidget.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.SplitWidget.Events.SidebarSizeChanged, this.updateTreeOutlineVisibleWidth.bind(this));
        this.splitWidget.show(this.element);
        this.searchableViewInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.SearchableView.SearchableView(this, null);
        this.searchableViewInternal.setMinimalSearchQuerySize(0);
        this.searchableViewInternal.setMinimumSize(25, 28);
        this.searchableViewInternal.setPlaceholder(i18nString(UIStrings.findByStringSelectorOrXpath));
        const stackElement = this.searchableViewInternal.element;
        this.mainContainer = document.createElement('div');
        this.domTreeContainer = document.createElement('div');
        const crumbsContainer = document.createElement('div');
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled('full-accessibility-tree')) {
            this.initializeFullAccessibilityTreeView();
        }
        this.mainContainer.appendChild(this.domTreeContainer);
        stackElement.appendChild(this.mainContainer);
        stackElement.appendChild(crumbsContainer);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.markAsMain(this.domTreeContainer);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setLabel(this.domTreeContainer, i18nString(UIStrings.domTreeExplorer));
        this.splitWidget.setMainWidget(this.searchableViewInternal);
        this.splitMode = null;
        this.mainContainer.id = 'main-content';
        this.domTreeContainer.id = 'elements-content';
        this.domTreeContainer.tabIndex = -1;
        // FIXME: crbug.com/425984
        if (_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('dom-word-wrap').get()) {
            this.domTreeContainer.classList.add('elements-wrap');
        }
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
            .moduleSetting('dom-word-wrap')
            .addChangeListener(this.domWordWrapSettingChanged.bind(this));
        crumbsContainer.id = 'elements-crumbs';
        if (this.domTreeButton) {
            this.accessibilityTreeView =
                new _AccessibilityTreeView_js__WEBPACK_IMPORTED_MODULE_11__.AccessibilityTreeView(this.domTreeButton, new _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_8__.TreeOutline.TreeOutline());
        }
        this.breadcrumbs = new _components_components_js__WEBPACK_IMPORTED_MODULE_13__.ElementsBreadcrumbs.ElementsBreadcrumbs();
        this.breadcrumbs.addEventListener('breadcrumbsnodeselected', event => {
            this.crumbNodeSelected(event);
        });
        crumbsContainer.appendChild(this.breadcrumbs);
        this.stylesWidget = _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_19__.StylesSidebarPane.instance();
        this.computedStyleWidget = new _ComputedStyleWidget_js__WEBPACK_IMPORTED_MODULE_14__.ComputedStyleWidget();
        this.metricsWidget = new _MetricsSidebarPane_js__WEBPACK_IMPORTED_MODULE_18__.MetricsSidebarPane();
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
            .moduleSetting('sidebar-position')
            .addChangeListener(this.updateSidebarPosition.bind(this));
        this.updateSidebarPosition();
        this.cssStyleTrackerByCSSModel = new Map();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.DOMModel, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.Events.NameChanged, event => this.targetNameChanged(event.data));
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
            .moduleSetting('show-ua-shadow-dom')
            .addChangeListener(this.showUAShadowDOMChanged.bind(this));
        _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__.ExtensionServer.ExtensionServer.instance().addEventListener(_models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__.ExtensionServer.Events.SidebarPaneAdded, this.extensionSidebarPaneAdded, this);
        this.currentSearchResultIndex = -1; // -1 represents the initial invalid state
        this.pendingNodeReveal = false;
        this.adornerManager = new _components_components_js__WEBPACK_IMPORTED_MODULE_13__.AdornerManager.AdornerManager(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('adorner-settings'));
        this.adornerSettingsPane = null;
        this.adornersByName = new Map();
    }
    initializeFullAccessibilityTreeView() {
        this.accessibilityTreeButton = createAccessibilityTreeToggleButton(false);
        this.accessibilityTreeButton.addEventListener('click', this.showAccessibilityTree.bind(this));
        this.domTreeButton = createAccessibilityTreeToggleButton(true);
        this.domTreeButton.addEventListener('click', this.showDOMTree.bind(this));
        this.mainContainer.appendChild(this.accessibilityTreeButton);
    }
    showAccessibilityTree() {
        if (this.accessibilityTreeView) {
            this.splitWidget.setMainWidget(this.accessibilityTreeView);
        }
    }
    showDOMTree() {
        this.splitWidget.setMainWidget(this.searchableViewInternal);
        const selectedNode = this.selectedDOMNode();
        if (!selectedNode) {
            return;
        }
        const treeElement = this.treeElementForNode(selectedNode);
        if (!treeElement) {
            return;
        }
        treeElement.select();
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!elementsPanelInstance || forceNew) {
            elementsPanelInstance = new ElementsPanel();
        }
        return elementsPanelInstance;
    }
    revealProperty(cssProperty) {
        if (!this.sidebarPaneView || !this.stylesViewToReveal) {
            return Promise.resolve();
        }
        return this.sidebarPaneView.showView(this.stylesViewToReveal).then(() => {
            this.stylesWidget.revealProperty(cssProperty);
        });
    }
    resolveLocation(_locationName) {
        return this.sidebarPaneView || null;
    }
    showToolbarPane(widget, toggle) {
        // TODO(luoe): remove this function once its providers have an alternative way to reveal their views.
        this.stylesWidget.showToolbarPane(widget, toggle);
    }
    modelAdded(domModel) {
        const parentModel = domModel.parentModel();
        let treeOutline = parentModel ? _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_17__.ElementsTreeOutline.forDOMModel(parentModel) : null;
        if (!treeOutline) {
            treeOutline = new _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_17__.ElementsTreeOutline(true, true);
            treeOutline.setWordWrap(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('dom-word-wrap').get());
            treeOutline.addEventListener(_ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_17__.ElementsTreeOutline.Events.SelectedNodeChanged, this.selectedNodeChanged, this);
            treeOutline.addEventListener(_ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_17__.ElementsTreeOutline.Events.ElementsTreeUpdated, this.updateBreadcrumbIfNeeded, this);
            new _ElementsTreeElementHighlighter_js__WEBPACK_IMPORTED_MODULE_16__.ElementsTreeElementHighlighter(treeOutline, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100));
            this.treeOutlines.add(treeOutline);
        }
        treeOutline.wireToDOMModel(domModel);
        this.setupStyleTracking(domModel.cssModel());
        // Perform attach if necessary.
        if (this.isShowing()) {
            this.wasShown();
        }
        if (this.domTreeContainer.hasFocus()) {
            treeOutline.focus();
        }
        domModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.Events.DocumentUpdated, this.documentUpdatedEvent, this);
        domModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.Events.NodeInserted, this.handleNodeInserted, this);
    }
    handleNodeInserted(event) {
        // Queue the task for the case when all the view transitions are added
        // around the same time. Otherwise there is a race condition on
        // accessing `cssText` of inspector stylesheet causing some rules
        // to be not added.
        this.nodeInsertedTaskRunner.run(async () => {
            const node = event.data;
            if (!node.isViewTransitionPseudoNode()) {
                return;
            }
            const cssModel = node.domModel().cssModel();
            const styleSheetHeader = await cssModel.requestViaInspectorStylesheet(node);
            if (!styleSheetHeader) {
                return;
            }
            const cssText = await cssModel.getStyleSheetText(styleSheetHeader.id);
            // Do not add a rule for the view transition pseudo if there already is a rule for it.
            if (cssText?.includes(`${node.simpleSelector()} {`)) {
                return;
            }
            await cssModel.setStyleSheetText(styleSheetHeader.id, `${cssText}\n${node.simpleSelector()} {}`, false);
        });
    }
    modelRemoved(domModel) {
        domModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.Events.DocumentUpdated, this.documentUpdatedEvent, this);
        domModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.Events.NodeInserted, this.handleNodeInserted, this);
        const treeOutline = _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_17__.ElementsTreeOutline.forDOMModel(domModel);
        if (!treeOutline) {
            return;
        }
        treeOutline.unwireFromDOMModel(domModel);
        if (domModel.parentModel()) {
            return;
        }
        this.treeOutlines.delete(treeOutline);
        treeOutline.element.remove();
        this.removeStyleTracking(domModel.cssModel());
    }
    targetNameChanged(target) {
        const domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.DOMModel);
        if (!domModel) {
            return;
        }
        const treeOutline = _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_17__.ElementsTreeOutline.forDOMModel(domModel);
        if (!treeOutline) {
            return;
        }
    }
    updateTreeOutlineVisibleWidth() {
        if (!this.treeOutlines.size) {
            return;
        }
        let width = this.splitWidget.element.offsetWidth;
        if (this.splitWidget.isVertical()) {
            width -= this.splitWidget.sidebarSize();
        }
        for (const treeOutline of this.treeOutlines) {
            treeOutline.setVisibleWidth(width);
        }
    }
    focus() {
        if (this.treeOutlines.size) {
            this.treeOutlines.values().next().value.focus();
        }
        else {
            this.domTreeContainer.focus();
        }
    }
    searchableView() {
        return this.searchableViewInternal;
    }
    wasShown() {
        super.wasShown();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Context.Context.instance().setFlavor(ElementsPanel, this);
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './elementsPanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        for (const treeOutline of this.treeOutlines) {
            // Attach heavy component lazily
            if (treeOutline.element.parentElement !== this.domTreeContainer) {
                this.domTreeContainer.appendChild(treeOutline.element);
            }
        }
        const domModels = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.DOMModel, { scoped: true });
        for (const domModel of domModels) {
            if (domModel.parentModel()) {
                continue;
            }
            const treeOutline = _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_17__.ElementsTreeOutline.forDOMModel(domModel);
            if (!treeOutline) {
                continue;
            }
            treeOutline.setVisible(true);
            if (!treeOutline.rootDOMNode) {
                if (domModel.existingDocument()) {
                    treeOutline.rootDOMNode = domModel.existingDocument();
                    this.documentUpdated(domModel);
                }
                else {
                    void domModel.requestDocument();
                }
            }
        }
    }
    willHide() {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        for (const treeOutline of this.treeOutlines) {
            treeOutline.setVisible(false);
            // Detach heavy component on hide
            this.domTreeContainer.removeChild(treeOutline.element);
        }
        super.willHide();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Context.Context.instance().setFlavor(ElementsPanel, null);
    }
    onResize() {
        this.element.window().requestAnimationFrame(this.updateSidebarPosition.bind(this)); // Do not force layout.
        this.updateTreeOutlineVisibleWidth();
    }
    selectedNodeChanged(event) {
        let selectedNode = event.data.node;
        // If the selectedNode is a pseudoNode, we want to ensure that it has a valid parentNode
        if (selectedNode && (selectedNode.pseudoType() && !selectedNode.parentNode)) {
            selectedNode = null;
        }
        const { focus } = event.data;
        for (const treeOutline of this.treeOutlines) {
            if (!selectedNode || _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_17__.ElementsTreeOutline.forDOMModel(selectedNode.domModel()) !== treeOutline) {
                treeOutline.selectDOMNode(null);
            }
        }
        if (selectedNode) {
            const activeNode = _components_components_js__WEBPACK_IMPORTED_MODULE_13__.Helper.legacyNodeToElementsComponentsNode(selectedNode);
            const crumbs = [activeNode];
            for (let current = selectedNode.parentNode; current; current = current.parentNode) {
                crumbs.push(_components_components_js__WEBPACK_IMPORTED_MODULE_13__.Helper.legacyNodeToElementsComponentsNode(current));
            }
            this.breadcrumbs.data = {
                crumbs,
                selectedNode: _components_components_js__WEBPACK_IMPORTED_MODULE_13__.Helper.legacyNodeToElementsComponentsNode(selectedNode),
            };
            if (this.accessibilityTreeView) {
                void this.accessibilityTreeView.selectedNodeChanged(selectedNode);
            }
        }
        else {
            this.breadcrumbs.data = { crumbs: [], selectedNode: null };
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.DOMNode, selectedNode);
        if (!selectedNode) {
            return;
        }
        void selectedNode.setAsInspectedNode();
        if (focus) {
            this.selectedNodeOnReset = selectedNode;
            this.hasNonDefaultSelectedNode = true;
        }
        const executionContexts = selectedNode.domModel().runtimeModel().executionContexts();
        const nodeFrameId = selectedNode.frameId();
        for (const context of executionContexts) {
            if (context.frameId === nodeFrameId) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.RuntimeModel.ExecutionContext, context);
                break;
            }
        }
    }
    documentUpdatedEvent(event) {
        const domModel = event.data;
        this.documentUpdated(domModel);
        this.removeStyleTracking(domModel.cssModel());
        this.setupStyleTracking(domModel.cssModel());
    }
    documentUpdated(domModel) {
        this.searchableViewInternal.cancelSearch();
        if (!domModel.existingDocument()) {
            if (this.isShowing()) {
                void domModel.requestDocument();
            }
            return;
        }
        this.hasNonDefaultSelectedNode = false;
        if (this.omitDefaultSelection) {
            return;
        }
        const savedSelectedNodeOnReset = this.selectedNodeOnReset;
        void restoreNode.call(this, domModel, this.selectedNodeOnReset || null);
        async function restoreNode(domModel, staleNode) {
            const nodePath = staleNode ? staleNode.path() : null;
            const restoredNodeId = nodePath ? await domModel.pushNodeByPathToFrontend(nodePath) : null;
            if (savedSelectedNodeOnReset !== this.selectedNodeOnReset) {
                return;
            }
            let node = restoredNodeId ? domModel.nodeForId(restoredNodeId) : null;
            if (!node) {
                const inspectedDocument = domModel.existingDocument();
                node = inspectedDocument ? inspectedDocument.body || inspectedDocument.documentElement : null;
            }
            // If `node` is null here, the document hasn't been transmitted from the backend yet
            // and isn't in a valid state to have a default-selected node. Another document update
            // should be forthcoming. In the meantime, don't set the default-selected node or notify
            // the test that it's ready, because it isn't.
            if (node) {
                this.setDefaultSelectedNode(node);
                this.lastSelectedNodeSelectedForTest();
            }
        }
    }
    lastSelectedNodeSelectedForTest() {
    }
    setDefaultSelectedNode(node) {
        if (!node || this.hasNonDefaultSelectedNode || this.pendingNodeReveal) {
            return;
        }
        const treeOutline = _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_17__.ElementsTreeOutline.forDOMModel(node.domModel());
        if (!treeOutline) {
            return;
        }
        this.selectDOMNode(node);
        if (treeOutline.selectedTreeElement) {
            treeOutline.selectedTreeElement.expand();
        }
    }
    onSearchClosed() {
        const selectedNode = this.selectedDOMNode();
        if (!selectedNode) {
            return;
        }
        const treeElement = this.treeElementForNode(selectedNode);
        if (!treeElement) {
            return;
        }
        treeElement.select();
    }
    onSearchCanceled() {
        this.searchConfig = undefined;
        this.hideSearchHighlights();
        this.searchableViewInternal.updateSearchMatchesCount(0);
        this.currentSearchResultIndex = -1;
        delete this.searchResults;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.DOMModel.cancelSearch();
    }
    performSearch(searchConfig, shouldJump, jumpBackwards) {
        const query = searchConfig.query;
        const whitespaceTrimmedQuery = query.trim();
        if (!whitespaceTrimmedQuery.length) {
            return;
        }
        if (!this.searchConfig || this.searchConfig.query !== query) {
            this.onSearchCanceled();
        }
        else {
            this.hideSearchHighlights();
        }
        this.searchConfig = searchConfig;
        const showUAShadowDOM = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-ua-shadow-dom').get();
        const domModels = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.DOMModel, { scoped: true });
        const promises = domModels.map(domModel => domModel.performSearch(whitespaceTrimmedQuery, showUAShadowDOM));
        void Promise.all(promises).then(resultCounts => {
            this.searchResults = [];
            for (let i = 0; i < resultCounts.length; ++i) {
                const resultCount = resultCounts[i];
                for (let j = 0; j < resultCount; ++j) {
                    this.searchResults.push({ domModel: domModels[i], index: j, node: undefined });
                }
            }
            this.searchableViewInternal.updateSearchMatchesCount(this.searchResults.length);
            if (!this.searchResults.length) {
                return;
            }
            if (this.currentSearchResultIndex >= this.searchResults.length) {
                this.currentSearchResultIndex = -1;
            }
            let index = this.currentSearchResultIndex;
            if (shouldJump) {
                if (this.currentSearchResultIndex === -1) {
                    index = jumpBackwards ? -1 : 0;
                }
                else {
                    index = jumpBackwards ? index - 1 : index + 1;
                }
                this.jumpToSearchResult(index);
            }
        });
    }
    domWordWrapSettingChanged(event) {
        this.domTreeContainer.classList.toggle('elements-wrap', event.data);
        for (const treeOutline of this.treeOutlines) {
            treeOutline.setWordWrap(event.data);
        }
    }
    switchToAndFocus(node) {
        // Reset search restore.
        this.searchableViewInternal.cancelSearch();
        void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ViewManager.ViewManager.instance().showView('elements').then(() => this.selectDOMNode(node, true));
    }
    jumpToSearchResult(index) {
        if (!this.searchResults) {
            return;
        }
        this.currentSearchResultIndex = (index + this.searchResults.length) % this.searchResults.length;
        this.highlightCurrentSearchResult();
    }
    jumpToNextSearchResult() {
        if (!this.searchResults || !this.searchConfig) {
            return;
        }
        this.performSearch(this.searchConfig, true);
    }
    jumpToPreviousSearchResult() {
        if (!this.searchResults || !this.searchConfig) {
            return;
        }
        this.performSearch(this.searchConfig, true, true);
    }
    supportsCaseSensitiveSearch() {
        return false;
    }
    supportsRegexSearch() {
        return false;
    }
    highlightCurrentSearchResult() {
        const index = this.currentSearchResultIndex;
        const searchResults = this.searchResults;
        if (!searchResults) {
            return;
        }
        const searchResult = searchResults[index];
        this.searchableViewInternal.updateCurrentMatchIndex(index);
        if (searchResult.node === null) {
            return;
        }
        if (typeof searchResult.node === 'undefined') {
            // No data for slot, request it.
            void searchResult.domModel.searchResult(searchResult.index).then(node => {
                searchResult.node = node;
                // If any of these properties are undefined or reset to an invalid value,
                // this means the search/highlight request is outdated.
                const highlightRequestValid = this.searchConfig && this.searchResults && (this.currentSearchResultIndex !== -1);
                if (highlightRequestValid) {
                    this.highlightCurrentSearchResult();
                }
            });
            return;
        }
        const treeElement = this.treeElementForNode(searchResult.node);
        void searchResult.node.scrollIntoView();
        if (treeElement) {
            this.searchConfig && treeElement.highlightSearchResults(this.searchConfig.query);
            treeElement.reveal();
            const matches = treeElement.listItemElement.getElementsByClassName(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.UIUtils.highlightedSearchResultClassName);
            if (matches.length) {
                matches[0].scrollIntoViewIfNeeded(false);
            }
            treeElement.select(/* omitFocus */ true);
        }
    }
    hideSearchHighlights() {
        if (!this.searchResults || !this.searchResults.length || this.currentSearchResultIndex === -1) {
            return;
        }
        const searchResult = this.searchResults[this.currentSearchResultIndex];
        if (!searchResult.node) {
            return;
        }
        const treeElement = this.treeElementForNode(searchResult.node);
        if (treeElement) {
            treeElement.hideSearchHighlights();
        }
    }
    selectedDOMNode() {
        for (const treeOutline of this.treeOutlines) {
            if (treeOutline.selectedDOMNode()) {
                return treeOutline.selectedDOMNode();
            }
        }
        return null;
    }
    selectDOMNode(node, focus) {
        for (const treeOutline of this.treeOutlines) {
            const outline = _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_17__.ElementsTreeOutline.forDOMModel(node.domModel());
            if (outline === treeOutline) {
                treeOutline.selectDOMNode(node, focus);
            }
            else {
                treeOutline.selectDOMNode(null);
            }
        }
    }
    selectAndShowSidebarTab(tabId) {
        if (!this.sidebarPaneView) {
            return;
        }
        this.sidebarPaneView.tabbedPane().selectTab(tabId);
        if (!this.isShowing()) {
            void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ViewManager.ViewManager.instance().showView('elements');
        }
    }
    updateBreadcrumbIfNeeded(event) {
        const nodes = event.data;
        /* If we don't have a selected node then we can tell the breadcrumbs that & bail. */
        const selectedNode = this.selectedDOMNode();
        if (!selectedNode) {
            this.breadcrumbs.data = {
                crumbs: [],
                selectedNode: null,
            };
            return;
        }
        /* This function gets called whenever the tree outline is updated
         * and contains any nodes that have changed.
         * What we need to do is construct the new set of breadcrumb nodes, combining the Nodes
         * that we had before with the new nodes, and pass them into the breadcrumbs component.
         */
        // Get the current set of active crumbs
        const activeNode = _components_components_js__WEBPACK_IMPORTED_MODULE_13__.Helper.legacyNodeToElementsComponentsNode(selectedNode);
        const existingCrumbs = [activeNode];
        for (let current = selectedNode.parentNode; current; current = current.parentNode) {
            existingCrumbs.push(_components_components_js__WEBPACK_IMPORTED_MODULE_13__.Helper.legacyNodeToElementsComponentsNode(current));
        }
        /* Get the change nodes from the event & convert them to breadcrumb nodes */
        const newNodes = nodes.map(_components_components_js__WEBPACK_IMPORTED_MODULE_13__.Helper.legacyNodeToElementsComponentsNode);
        const nodesThatHaveChangedMap = new Map();
        newNodes.forEach(crumb => nodesThatHaveChangedMap.set(crumb.id, crumb));
        /* Loop over our existing crumbs, and if any have an ID that matches an ID from the new nodes
         * that we have, use the new node, rather than the one we had, because it's changed.
         */
        const newSetOfCrumbs = existingCrumbs.map(crumb => {
            const replacement = nodesThatHaveChangedMap.get(crumb.id);
            return replacement || crumb;
        });
        this.breadcrumbs.data = {
            crumbs: newSetOfCrumbs,
            selectedNode: activeNode,
        };
    }
    crumbNodeSelected(event) {
        this.selectDOMNode(event.legacyDomNode, true);
    }
    treeOutlineForNode(node) {
        if (!node) {
            return null;
        }
        return _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_17__.ElementsTreeOutline.forDOMModel(node.domModel());
    }
    treeElementForNode(node) {
        const treeOutline = this.treeOutlineForNode(node);
        if (!treeOutline) {
            return null;
        }
        return treeOutline.findTreeElement(node);
    }
    leaveUserAgentShadowDOM(node) {
        let userAgentShadowRoot;
        while ((userAgentShadowRoot = node.ancestorUserAgentShadowRoot()) && userAgentShadowRoot.parentNode) {
            node = userAgentShadowRoot.parentNode;
        }
        return node;
    }
    async revealAndSelectNode(nodeToReveal, focus, omitHighlight) {
        this.omitDefaultSelection = true;
        const node = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-ua-shadow-dom').get() ?
            nodeToReveal :
            this.leaveUserAgentShadowDOM(nodeToReveal);
        if (!omitHighlight) {
            node.highlightForTwoSeconds();
        }
        if (this.accessibilityTreeView) {
            void this.accessibilityTreeView.revealAndSelectNode(nodeToReveal);
        }
        await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ViewManager.ViewManager.instance().showView('elements', false, !focus);
        this.selectDOMNode(node, focus);
        delete this.omitDefaultSelection;
        if (!this.notFirstInspectElement) {
            ElementsPanel.firstInspectElementNodeNameForTest = node.nodeName();
            ElementsPanel.firstInspectElementCompletedForTest();
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.inspectElementCompleted();
        }
        this.notFirstInspectElement = true;
    }
    showUAShadowDOMChanged() {
        for (const treeOutline of this.treeOutlines) {
            treeOutline.update();
        }
    }
    setupTextSelectionHack(stylePaneWrapperElement) {
        // We "extend" the sidebar area when dragging, in order to keep smooth text
        // selection. It should be replaced by 'user-select: contain' in the future.
        const uninstallHackBound = uninstallHack.bind(this);
        // Fallback to cover unforeseen cases where text selection has ended.
        const uninstallHackOnMousemove = (event) => {
            if (event.buttons === 0) {
                uninstallHack.call(this);
            }
        };
        stylePaneWrapperElement.addEventListener('mousedown', (event) => {
            if (event.button !== 0) {
                return;
            }
            this.splitWidget.element.classList.add('disable-resizer-for-elements-hack');
            stylePaneWrapperElement.style.setProperty('height', `${stylePaneWrapperElement.offsetHeight}px`);
            const largeLength = 1000000;
            stylePaneWrapperElement.style.setProperty('left', `${-1 * largeLength}px`);
            stylePaneWrapperElement.style.setProperty('padding-left', `${largeLength}px`);
            stylePaneWrapperElement.style.setProperty('width', `calc(100% + ${largeLength}px)`);
            stylePaneWrapperElement.style.setProperty('position', 'fixed');
            stylePaneWrapperElement.window().addEventListener('blur', uninstallHackBound);
            stylePaneWrapperElement.window().addEventListener('contextmenu', uninstallHackBound, true);
            stylePaneWrapperElement.window().addEventListener('dragstart', uninstallHackBound, true);
            stylePaneWrapperElement.window().addEventListener('mousemove', uninstallHackOnMousemove, true);
            stylePaneWrapperElement.window().addEventListener('mouseup', uninstallHackBound, true);
            stylePaneWrapperElement.window().addEventListener('visibilitychange', uninstallHackBound);
        }, true);
        function uninstallHack() {
            this.splitWidget.element.classList.remove('disable-resizer-for-elements-hack');
            stylePaneWrapperElement.style.removeProperty('left');
            stylePaneWrapperElement.style.removeProperty('padding-left');
            stylePaneWrapperElement.style.removeProperty('width');
            stylePaneWrapperElement.style.removeProperty('position');
            stylePaneWrapperElement.window().removeEventListener('blur', uninstallHackBound);
            stylePaneWrapperElement.window().removeEventListener('contextmenu', uninstallHackBound, true);
            stylePaneWrapperElement.window().removeEventListener('dragstart', uninstallHackBound, true);
            stylePaneWrapperElement.window().removeEventListener('mousemove', uninstallHackOnMousemove, true);
            stylePaneWrapperElement.window().removeEventListener('mouseup', uninstallHackBound, true);
            stylePaneWrapperElement.window().removeEventListener('visibilitychange', uninstallHackBound);
        }
    }
    initializeSidebarPanes(splitMode) {
        this.splitWidget.setVertical(splitMode === SplitMode.Vertical);
        this.showToolbarPane(null /* widget */, null /* toggle */);
        const matchedStylePanesWrapper = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Widget.VBox();
        matchedStylePanesWrapper.element.classList.add('style-panes-wrapper');
        matchedStylePanesWrapper.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.pane('styles').track({ resize: true })}`);
        this.stylesWidget.show(matchedStylePanesWrapper.element);
        this.setupTextSelectionHack(matchedStylePanesWrapper.element);
        const computedStylePanesWrapper = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Widget.VBox();
        computedStylePanesWrapper.element.classList.add('style-panes-wrapper');
        computedStylePanesWrapper.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.pane('computed').track({ resize: true })}`);
        this.computedStyleWidget.show(computedStylePanesWrapper.element);
        const stylesSplitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.SplitWidget.SplitWidget(true /* isVertical */, true /* secondIsSidebar */, 'elements.styles.sidebar.width', 100);
        stylesSplitWidget.setMainWidget(matchedStylePanesWrapper);
        stylesSplitWidget.hideSidebar();
        stylesSplitWidget.enableShowModeSaving();
        stylesSplitWidget.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.SplitWidget.Events.ShowModeChanged, () => {
            showMetricsWidgetInStylesPane();
        });
        this.stylesWidget.addEventListener(_StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_19__.Events.InitialUpdateCompleted, () => {
            this.stylesWidget.appendToolbarItem(stylesSplitWidget.createShowHideSidebarButton(i18nString(UIStrings.showComputedStylesSidebar), i18nString(UIStrings.hideComputedStylesSidebar), i18nString(UIStrings.computedStylesShown), i18nString(UIStrings.computedStylesHidden), 'computed-styles'));
        });
        const showMetricsWidgetInComputedPane = () => {
            this.metricsWidget.show(computedStylePanesWrapper.element, this.computedStyleWidget.element);
            this.metricsWidget.toggleVisibility(true /* visible */);
            this.stylesWidget.removeEventListener(_StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_19__.Events.StylesUpdateCompleted, toggleMetricsWidget);
        };
        const showMetricsWidgetInStylesPane = () => {
            const showMergedComputedPane = stylesSplitWidget.showMode() === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.SplitWidget.ShowMode.Both;
            if (showMergedComputedPane) {
                showMetricsWidgetInComputedPane();
            }
            else {
                this.metricsWidget.show(matchedStylePanesWrapper.element);
                if (!this.stylesWidget.hasMatchedStyles) {
                    this.metricsWidget.toggleVisibility(false /* invisible */);
                }
                this.stylesWidget.addEventListener(_StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_19__.Events.StylesUpdateCompleted, toggleMetricsWidget);
            }
        };
        const toggleMetricsWidget = (event) => {
            this.metricsWidget.toggleVisibility(event.data.hasMatchedStyles);
        };
        const tabSelected = (event) => {
            const { tabId } = event.data;
            if (tabId === SidebarPaneTabId.Computed) {
                computedStylePanesWrapper.show(computedView.element);
                showMetricsWidgetInComputedPane();
            }
            else if (tabId === SidebarPaneTabId.Styles) {
                stylesSplitWidget.setSidebarWidget(computedStylePanesWrapper);
                showMetricsWidgetInStylesPane();
            }
        };
        this.sidebarPaneView = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ViewManager.ViewManager.instance().createTabbedLocation(() => _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ViewManager.ViewManager.instance().showView('elements'), 'styles-pane-sidebar', true, true);
        const tabbedPane = this.sidebarPaneView.tabbedPane();
        tabbedPane.headerElement().setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.toolbar('sidebar').track({ keydown: 'ArrowUp|ArrowLeft|ArrowDown|ArrowRight|Enter|Space' })}`);
        if (this.splitMode !== SplitMode.Vertical) {
            this.splitWidget.installResizer(tabbedPane.headerElement());
        }
        const headerElement = tabbedPane.headerElement();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.markAsNavigation(headerElement);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setLabel(headerElement, i18nString(UIStrings.sidePanelToolbar));
        const contentElement = tabbedPane.tabbedPaneContentElement();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.markAsComplementary(contentElement);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setLabel(contentElement, i18nString(UIStrings.sidePanelContent));
        const stylesView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.View.SimpleView(i18nString(UIStrings.styles), /* isWebComponent */ undefined, SidebarPaneTabId.Styles);
        this.sidebarPaneView.appendView(stylesView);
        stylesView.element.classList.add('flex-auto');
        stylesSplitWidget.show(stylesView.element);
        const computedView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.View.SimpleView(i18nString(UIStrings.computed), /* isWebComponent */ undefined, SidebarPaneTabId.Computed);
        computedView.element.classList.add('composite', 'fill');
        tabbedPane.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TabbedPane.Events.TabSelected, tabSelected, this);
        this.sidebarPaneView.appendView(computedView);
        this.stylesViewToReveal = stylesView;
        this.sidebarPaneView.appendApplicableItems('elements-sidebar');
        const extensionSidebarPanes = _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__.ExtensionServer.ExtensionServer.instance().sidebarPanes();
        for (let i = 0; i < extensionSidebarPanes.length; ++i) {
            this.addExtensionSidebarPane(extensionSidebarPanes[i]);
        }
        this.splitWidget.setSidebarWidget(this.sidebarPaneView.tabbedPane());
    }
    updateSidebarPosition() {
        if (this.sidebarPaneView && this.sidebarPaneView.tabbedPane().shouldHideOnDetach()) {
            return;
        } // We can't reparent extension iframes.
        const position = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('sidebar-position').get();
        let splitMode = SplitMode.Horizontal;
        if (position === 'right' ||
            (position === 'auto' && _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.InspectorView.InspectorView.instance().element.offsetWidth > 680)) {
            splitMode = SplitMode.Vertical;
        }
        if (!this.sidebarPaneView) {
            this.initializeSidebarPanes(splitMode);
            return;
        }
        if (splitMode === this.splitMode) {
            return;
        }
        this.splitMode = splitMode;
        const tabbedPane = this.sidebarPaneView.tabbedPane();
        this.splitWidget.uninstallResizer(tabbedPane.headerElement());
        this.splitWidget.setVertical(this.splitMode === SplitMode.Vertical);
        this.showToolbarPane(null /* widget */, null /* toggle */);
        if (this.splitMode !== SplitMode.Vertical) {
            this.splitWidget.installResizer(tabbedPane.headerElement());
        }
    }
    extensionSidebarPaneAdded(event) {
        this.addExtensionSidebarPane(event.data);
    }
    addExtensionSidebarPane(pane) {
        if (this.sidebarPaneView && pane.panelName() === this.name) {
            this.sidebarPaneView.appendView(pane);
        }
    }
    getComputedStyleWidget() {
        return this.computedStyleWidget;
    }
    setupStyleTracking(cssModel) {
        const cssPropertyTracker = cssModel.createCSSPropertyTracker(TrackedCSSProperties);
        cssPropertyTracker.start();
        this.cssStyleTrackerByCSSModel.set(cssModel, cssPropertyTracker);
        cssPropertyTracker.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSModel.CSSPropertyTrackerEvents.TrackedCSSPropertiesUpdated, this.trackedCSSPropertiesUpdated, this);
    }
    removeStyleTracking(cssModel) {
        const cssPropertyTracker = this.cssStyleTrackerByCSSModel.get(cssModel);
        if (!cssPropertyTracker) {
            return;
        }
        cssPropertyTracker.stop();
        this.cssStyleTrackerByCSSModel.delete(cssModel);
        cssPropertyTracker.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSModel.CSSPropertyTrackerEvents.TrackedCSSPropertiesUpdated, this.trackedCSSPropertiesUpdated, this);
    }
    trackedCSSPropertiesUpdated({ data: domNodes }) {
        for (const domNode of domNodes) {
            if (!domNode) {
                continue;
            }
            const treeElement = this.treeElementForNode(domNode);
            if (treeElement) {
                void treeElement.updateStyleAdorners();
            }
            void _components_components_js__WEBPACK_IMPORTED_MODULE_13__.LayoutPane.LayoutPane.instance().render();
        }
    }
    showAdornerSettingsPane() {
        // Delay the initialization of the pane to the first showing
        // since usually this pane won't be used.
        if (!this.adornerSettingsPane) {
            this.adornerSettingsPane = new _components_components_js__WEBPACK_IMPORTED_MODULE_13__.AdornerSettingsPane.AdornerSettingsPane();
            this.adornerSettingsPane.addEventListener('adornersettingupdated', (event) => {
                const { adornerName, isEnabledNow, newSettings } = event.data;
                const adornersToUpdate = this.adornersByName.get(adornerName);
                if (adornersToUpdate) {
                    for (const adorner of adornersToUpdate) {
                        isEnabledNow ? adorner.show() : adorner.hide();
                    }
                }
                this.adornerManager.updateSettings(newSettings);
            });
            this.searchableViewInternal.element.prepend(this.adornerSettingsPane);
        }
        const adornerSettings = this.adornerManager.getSettings();
        this.adornerSettingsPane.data = {
            settings: adornerSettings,
        };
        this.adornerSettingsPane.show();
    }
    isAdornerEnabled(adornerText) {
        return this.adornerManager.isAdornerEnabled(adornerText);
    }
    registerAdorner(adorner) {
        let adornerSet = this.adornersByName.get(adorner.name);
        if (!adornerSet) {
            adornerSet = new Set();
            this.adornersByName.set(adorner.name, adornerSet);
        }
        adornerSet.add(adorner);
        if (!this.isAdornerEnabled(adorner.name)) {
            adorner.hide();
        }
    }
    deregisterAdorner(adorner) {
        const adornerSet = this.adornersByName.get(adorner.name);
        if (!adornerSet) {
            return;
        }
        adornerSet.delete(adorner);
    }
}
Object.defineProperty(ElementsPanel, "firstInspectElementCompletedForTest", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: function () { }
});
Object.defineProperty(ElementsPanel, "firstInspectElementNodeNameForTest", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: ''
});
// @ts-ignore exported for Tests.js
globalThis.Elements = globalThis.Elements || {};
// @ts-ignore exported for Tests.js
globalThis.Elements.ElementsPanel = ElementsPanel;
var SplitMode;
(function (SplitMode) {
    SplitMode["Vertical"] = "Vertical";
    SplitMode["Horizontal"] = "Horizontal";
})(SplitMode || (SplitMode = {}));
const TrackedCSSProperties = [
    {
        name: 'display',
        value: 'grid',
    },
    {
        name: 'display',
        value: 'inline-grid',
    },
    {
        name: 'display',
        value: 'flex',
    },
    {
        name: 'display',
        value: 'inline-flex',
    },
    {
        name: 'container-type',
        value: 'inline-size',
    },
    {
        name: 'container-type',
        value: 'block-size',
    },
    {
        name: 'container-type',
        value: 'size',
    },
];
class ContextMenuProvider {
    appendApplicableItems(event, contextMenu, object) {
        if (object instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.RemoteObject.RemoteObject && !object.isNode()) {
            return;
        }
        if (ElementsPanel.instance().element.isAncestor(event.target)) {
            return;
        }
        contextMenu.revealSection().appendItem(i18nString(UIStrings.revealInElementsPanel), () => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(object), { jslogContext: 'elements.reveal-node' });
    }
}
class DOMNodeRevealer {
    reveal(node, omitFocus) {
        const panel = ElementsPanel.instance();
        panel.pendingNodeReveal = true;
        return (new Promise(revealPromise)).catch((reason) => {
            let message;
            if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.UserVisibleError.isUserVisibleError(reason)) {
                message = reason.message;
            }
            else {
                message = i18nString(UIStrings.nodeCannotBeFoundInTheCurrent);
            }
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().warn(message);
            // Blink tests expect an exception to be raised and unhandled here to detect that the node
            // was actually not successfully viewed.
            throw reason;
        });
        function revealPromise(resolve, reject) {
            if (node instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.DOMNode) {
                onNodeResolved(node);
            }
            else if (node instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.DeferredDOMNode) {
                node.resolve(checkDeferredDOMNodeThenReveal);
            }
            else {
                const domModel = node.runtimeModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.DOMModel);
                if (domModel) {
                    void domModel.pushObjectAsNodeToFrontend(node).then(checkRemoteObjectThenReveal);
                }
                else {
                    const msg = i18nString(UIStrings.nodeCannotBeFoundInTheCurrent);
                    reject(new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.UserVisibleError.UserVisibleError(msg));
                }
            }
            function onNodeResolved(resolvedNode) {
                panel.pendingNodeReveal = false;
                // A detached node could still have a parent and ownerDocument
                // properties, which means stepping up through the hierarchy to ensure
                // that the root node is the document itself. Any break implies
                // detachment.
                let currentNode = resolvedNode;
                while (currentNode.parentNode) {
                    currentNode = currentNode.parentNode;
                }
                const isDetached = !(currentNode instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.DOMDocument);
                const isDocument = node instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.DOMDocument;
                if (!isDocument && isDetached) {
                    const msg = i18nString(UIStrings.nodeCannotBeFoundInTheCurrent);
                    reject(new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.UserVisibleError.UserVisibleError(msg));
                    return;
                }
                if (resolvedNode) {
                    void panel.revealAndSelectNode(resolvedNode, !omitFocus).then(resolve);
                    return;
                }
                const msg = i18nString(UIStrings.nodeCannotBeFoundInTheCurrent);
                reject(new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.UserVisibleError.UserVisibleError(msg));
            }
            function checkRemoteObjectThenReveal(resolvedNode) {
                if (!resolvedNode) {
                    const msg = i18nString(UIStrings.theRemoteObjectCouldNotBe);
                    reject(new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.UserVisibleError.UserVisibleError(msg));
                    return;
                }
                onNodeResolved(resolvedNode);
            }
            function checkDeferredDOMNodeThenReveal(resolvedNode) {
                if (!resolvedNode) {
                    const msg = i18nString(UIStrings.theDeferredDomNodeCouldNotBe);
                    reject(new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.UserVisibleError.UserVisibleError(msg));
                    return;
                }
                onNodeResolved(resolvedNode);
            }
        }
    }
}
class CSSPropertyRevealer {
    reveal(property) {
        const panel = ElementsPanel.instance();
        return panel.revealProperty(property);
    }
}
class ElementsActionDelegate {
    handleAction(context, actionId) {
        const node = context.flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.DOMNode);
        if (!node) {
            return true;
        }
        const treeOutline = _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_17__.ElementsTreeOutline.forDOMModel(node.domModel());
        if (!treeOutline) {
            return true;
        }
        switch (actionId) {
            case 'elements.hide-element':
                void treeOutline.toggleHideElement(node);
                return true;
            case 'elements.edit-as-html':
                treeOutline.toggleEditAsHTML(node);
                return true;
            case 'elements.duplicate-element':
                treeOutline.duplicateNode(node);
                return true;
            case 'elements.copy-styles':
                void treeOutline.findTreeElement(node)?.copyStyles();
                return true;
            case 'elements.undo':
                void _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.DOMModelUndoStack.instance().undo();
                ElementsPanel.instance().stylesWidget.forceUpdate();
                return true;
            case 'elements.redo':
                void _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.DOMModelUndoStack.instance().redo();
                ElementsPanel.instance().stylesWidget.forceUpdate();
                return true;
            case 'elements.show-styles':
                ElementsPanel.instance().selectAndShowSidebarTab(SidebarPaneTabId.Styles);
                return true;
            case 'elements.show-computed':
                ElementsPanel.instance().selectAndShowSidebarTab(SidebarPaneTabId.Computed);
                return true;
            case 'elements.toggle-eye-dropper': {
                const colorSwatchPopoverIcon = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Context.Context.instance().flavor(_ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_12__.ColorSwatchPopoverIcon);
                if (!colorSwatchPopoverIcon) {
                    return false;
                }
                void colorSwatchPopoverIcon.toggleEyeDropper();
            }
        }
        return false;
    }
}
let pseudoStateMarkerDecoratorInstance;
class PseudoStateMarkerDecorator {
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!pseudoStateMarkerDecoratorInstance || forceNew) {
            pseudoStateMarkerDecoratorInstance = new PseudoStateMarkerDecorator();
        }
        return pseudoStateMarkerDecoratorInstance;
    }
    decorate(node) {
        const pseudoState = node.domModel().cssModel().pseudoState(node);
        if (!pseudoState) {
            return null;
        }
        return {
            color: '--sys-color-orange-bright',
            title: i18nString(UIStrings.elementStateS, { PH1: ':' + pseudoState.join(', :') }),
        };
    }
}


/***/ }),

/***/ "./src/panels/elements/ElementsTreeElement.ts":
/*!****************************************************!*\
  !*** ./src/panels/elements/ElementsTreeElement.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditTagBlocklist: () => (/* binding */ EditTagBlocklist),
/* harmony export */   ElementsTreeElement: () => (/* binding */ ElementsTreeElement),
/* harmony export */   ForbiddenClosingTagElements: () => (/* binding */ ForbiddenClosingTagElements),
/* harmony export */   InitialChildrenLimit: () => (/* binding */ InitialChildrenLimit),
/* harmony export */   adornerComparator: () => (/* binding */ adornerComparator)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/adorners/adorners.js */ "./src/ui/components/adorners/adorners.ts");
/* harmony import */ var _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/components/code_highlighter/code_highlighter.js */ "./src/ui/components/code_highlighter/code_highlighter.ts");
/* harmony import */ var _ui_components_highlighting_highlighting_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/components/highlighting/highlighting.js */ "./src/ui/components/highlighting/highlighting.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/components/text_editor/text_editor.js */ "./src/ui/components/text_editor/text_editor.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../emulation/emulation.js */ "./src/panels/emulation/emulation.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/elements/components/components.ts");
/* harmony import */ var _DOMPath_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./DOMPath.js */ "./src/panels/elements/DOMPath.ts");
/* harmony import */ var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ElementsPanel.js */ "./src/panels/elements/ElementsPanel.ts");
/* harmony import */ var _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ElementsTreeOutline.js */ "./src/panels/elements/ElementsTreeOutline.ts");
/* harmony import */ var _ImagePreviewPopover_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ImagePreviewPopover.js */ "./src/panels/elements/ImagePreviewPopover.ts");
/* harmony import */ var _MarkerDecorator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./MarkerDecorator.js */ "./src/panels/elements/MarkerDecorator.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ElementsTreeElement_instances, _ElementsTreeElement_elementIssues, _ElementsTreeElement_nodeElementToIssue, _ElementsTreeElement_highlights, _ElementsTreeElement_applyIssueStyleAndTooltip, _ElementsTreeElement_highlightViolatingAttr, _ElementsTreeElement_highlightTagAsViolating;
/*
 * Copyright (C) 2007, 2008 Apple Inc.  All rights reserved.
 * Copyright (C) 2008 Matt Lilek <webkit@mattlilek.com>
 * Copyright (C) 2009 Joseph Pecoraro
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























const UIStrings = {
    /**
     *@description Title for Ad adorner. This iframe is marked as advertisement frame.
     */
    thisFrameWasIdentifiedAsAnAd: 'This frame was identified as an ad frame',
    /**
     *@description A context menu item in the Elements panel. Force is used as a verb, indicating intention to make the state change.
     */
    forceState: 'Force state',
    /**
     *@description Hint element title in Elements Tree Element of the Elements panel
     *@example {0} PH1
     */
    useSInTheConsoleToReferToThis: 'Use {PH1} in the console to refer to this element.',
    /**
     *@description A context menu item in the Elements Tree Element of the Elements panel
     */
    addAttribute: 'Add attribute',
    /**
     *@description Text to modify the attribute of an item
     */
    editAttribute: 'Edit attribute',
    /**
     *@description Text to focus on something
     */
    focus: 'Focus',
    /**
     *@description Text to scroll the displayed content into view
     */
    scrollIntoView: 'Scroll into view',
    /**
     *@description A context menu item in the Elements Tree Element of the Elements panel
     */
    editText: 'Edit text',
    /**
     *@description A context menu item in the Elements Tree Element of the Elements panel
     */
    editAsHtml: 'Edit as HTML',
    /**
     *@description Text to cut an element, cut should be used as a verb
     */
    cut: 'Cut',
    /**
     *@description Text for copying, copy should be used as a verb
     */
    copy: 'Copy',
    /**
     *@description Text to paste an element, paste should be used as a verb
     */
    paste: 'Paste',
    /**
     *@description Text in Elements Tree Element of the Elements panel, copy should be used as a verb
     */
    copyOuterhtml: 'Copy outerHTML',
    /**
     *@description Text in Elements Tree Element of the Elements panel, copy should be used as a verb
     */
    copySelector: 'Copy `selector`',
    /**
     *@description Text in Elements Tree Element of the Elements panel
     */
    copyJsPath: 'Copy JS path',
    /**
     *@description Text in Elements Tree Element of the Elements panel, copy should be used as a verb
     */
    copyStyles: 'Copy styles',
    /**
     *@description Text in Elements Tree Element of the Elements panel, copy should be used as a verb
     */
    copyXpath: 'Copy XPath',
    /**
     *@description Text in Elements Tree Element of the Elements panel, copy should be used as a verb
     */
    copyFullXpath: 'Copy full XPath',
    /**
     *@description Text in Elements Tree Element of the Elements panel, copy should be used as a verb
     */
    copyElement: 'Copy element',
    /**
     *@description A context menu item in the Elements Tree Element of the Elements panel
     */
    duplicateElement: 'Duplicate element',
    /**
     *@description Text to hide an element
     */
    hideElement: 'Hide element',
    /**
     *@description A context menu item in the Elements Tree Element of the Elements panel
     */
    deleteElement: 'Delete element',
    /**
     *@description Text to expand something recursively
     */
    expandRecursively: 'Expand recursively',
    /**
     *@description Text to collapse children of a parent group
     */
    collapseChildren: 'Collapse children',
    /**
     *@description Title of an action in the emulation tool to capture node screenshot
     */
    captureNodeScreenshot: 'Capture node screenshot',
    /**
     *@description Title of a context menu item. When clicked DevTools goes to the Application panel and shows this specific iframe's details
     */
    showFrameDetails: 'Show `iframe` details',
    /**
     *@description Text in Elements Tree Element of the Elements panel
     */
    valueIsTooLargeToEdit: '<value is too large to edit>',
    /**
     *@description Element text content in Elements Tree Element of the Elements panel
     */
    children: 'Children:',
    /**
     *@description ARIA label for Elements Tree adorners
     */
    enableGridMode: 'Enable grid mode',
    /**
     *@description ARIA label for Elements Tree adorners
     */
    disableGridMode: 'Disable grid mode',
    /**
     *@description Label of the adorner for flex elements in the Elements panel
     */
    enableFlexMode: 'Enable flex mode',
    /**
     *@description Label of the adorner for flex elements in the Elements panel
     */
    disableFlexMode: 'Disable flex mode',
    /**
     *@description Label of an adorner in the Elements panel. When clicked, it enables
     * the overlay showing CSS scroll snapping for the current element.
     */
    enableScrollSnap: 'Enable scroll-snap overlay',
    /**
     *@description Label of an adorner in the Elements panel. When clicked, it disables
     * the overlay showing CSS scroll snapping for the current element.
     */
    disableScrollSnap: 'Disable scroll-snap overlay',
    /**
     *@description Label of an adorner in the Elements panel. When clicked, it redirects
     * to the Media Panel.
     */
    openMediaPanel: 'Jump to Media panel',
    /**
     *@description Text of a tooltip to redirect to another element in the Elements panel
     */
    showPopoverTarget: 'Show popover target',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/elements/ElementsTreeElement.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var TagType;
(function (TagType) {
    TagType["OPENING"] = "OPENING_TAG";
    TagType["CLOSING"] = "CLOSING_TAG";
})(TagType || (TagType = {}));
function isOpeningTag(context) {
    return context.tagType === TagType.OPENING;
}
class ElementsTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.TreeOutline.TreeElement {
    constructor(node, isClosingTag) {
        // The title will be updated in onattach.
        super();
        _ElementsTreeElement_instances.add(this);
        Object.defineProperty(this, "nodeInternal", {
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
        Object.defineProperty(this, "gutterContainer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "decorationsElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchQuery", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "expandedChildrenLimitInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "decorationsThrottler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "inClipboard", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hoveredInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "editing", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "htmlEditElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "expandAllButtonElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectionElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hintElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "contentElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _ElementsTreeElement_elementIssues.set(this, new Map());
        _ElementsTreeElement_nodeElementToIssue.set(this, new Map());
        _ElementsTreeElement_highlights.set(this, []);
        Object.defineProperty(this, "tagTypeContext", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.nodeInternal = node;
        this.treeOutline = null;
        this.listItemElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.treeItem().parent('elementsTreeOutline').track({
            keydown: 'ArrowUp|ArrowDown|ArrowLeft|ArrowRight|Backspace|Delete|Enter|Space|Home|End',
            drag: true,
            click: true,
        })}`);
        this.contentElement = this.listItemElement.createChild('div');
        this.gutterContainer = this.contentElement.createChild('div', 'gutter-container');
        this.gutterContainer.addEventListener('click', this.showContextMenu.bind(this));
        const gutterMenuIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_11__.Icon.Icon();
        gutterMenuIcon.data = {
            color: 'var(--icon-default)',
            iconName: 'dots-horizontal',
            height: '16px',
            width: '16px',
        };
        this.gutterContainer.append(gutterMenuIcon);
        this.decorationsElement = this.gutterContainer.createChild('div', 'hidden');
        this.searchQuery = null;
        this.expandedChildrenLimitInternal = InitialChildrenLimit;
        this.decorationsThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
        this.inClipboard = false;
        this.hoveredInternal = false;
        this.editing = null;
        if (isClosingTag) {
            this.tagTypeContext = { tagType: TagType.CLOSING };
        }
        else {
            this.tagTypeContext = {
                tagType: TagType.OPENING,
                adornerContainer: this.contentElement.createChild('div', 'adorner-container hidden'),
                adorners: [],
                styleAdorners: [],
                adornersThrottler: new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100),
                canAddAttributes: this.nodeInternal.nodeType() === Node.ELEMENT_NODE,
            };
            void this.updateStyleAdorners();
            if (node.isAdFrameNode()) {
                const config = _components_components_js__WEBPACK_IMPORTED_MODULE_17__.AdornerManager.getRegisteredAdorner(_components_components_js__WEBPACK_IMPORTED_MODULE_17__.AdornerManager.RegisteredAdorners.AD);
                const adorner = this.adorn(config);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.Tooltip.Tooltip.install(adorner, i18nString(UIStrings.thisFrameWasIdentifiedAsAnAd));
            }
        }
        this.expandAllButtonElement = null;
    }
    static animateOnDOMUpdate(treeElement) {
        const tagName = treeElement.listItemElement.querySelector('.webkit-html-tag-name');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.runCSSAnimationOnce(tagName || treeElement.listItemElement, 'dom-update-highlight');
    }
    static visibleShadowRoots(node) {
        let roots = node.shadowRoots();
        if (roots.length && !_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-ua-shadow-dom').get()) {
            roots = roots.filter(filter);
        }
        function filter(root) {
            return root.shadowRootType() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMNode.ShadowRootTypes.UserAgent;
        }
        return roots;
    }
    static canShowInlineText(node) {
        if (node.contentDocument() || node.templateContent() || ElementsTreeElement.visibleShadowRoots(node).length ||
            node.hasPseudoElements()) {
            return false;
        }
        if (node.nodeType() !== Node.ELEMENT_NODE) {
            return false;
        }
        if (!node.firstChild || node.firstChild !== node.lastChild || node.firstChild.nodeType() !== Node.TEXT_NODE) {
            return false;
        }
        const textChild = node.firstChild;
        const maxInlineTextChildLength = 80;
        if (textChild.nodeValue().length < maxInlineTextChildLength) {
            return true;
        }
        return false;
    }
    static populateForcedPseudoStateItems(contextMenu, node) {
        const pseudoClasses = ['active', 'hover', 'focus', 'visited', 'focus-within', 'focus-visible'];
        const forcedPseudoState = node.domModel().cssModel().pseudoState(node);
        const stateMenu = contextMenu.debugSection().appendSubMenuItem(i18nString(UIStrings.forceState), false, 'force-state');
        for (const pseudoClass of pseudoClasses) {
            const pseudoClassForced = forcedPseudoState ? forcedPseudoState.indexOf(pseudoClass) >= 0 : false;
            stateMenu.defaultSection().appendCheckboxItem(':' + pseudoClass, setPseudoStateCallback.bind(null, pseudoClass, !pseudoClassForced), { checked: pseudoClassForced, jslogContext: pseudoClass });
        }
        function setPseudoStateCallback(pseudoState, enabled) {
            node.domModel().cssModel().forcePseudoState(node, pseudoState, enabled);
        }
    }
    isClosingTag() {
        return !isOpeningTag(this.tagTypeContext);
    }
    node() {
        return this.nodeInternal;
    }
    isEditing() {
        return Boolean(this.editing);
    }
    highlightSearchResults(searchQuery) {
        this.searchQuery = searchQuery;
        if (!this.editing) {
            this.highlightSearchResultsInternal();
        }
    }
    hideSearchHighlights() {
        _ui_components_highlighting_highlighting_js__WEBPACK_IMPORTED_MODULE_10__.HighlightManager.HighlightManager.instance().removeHighlights(__classPrivateFieldGet(this, _ElementsTreeElement_highlights, "f"));
        __classPrivateFieldSet(this, _ElementsTreeElement_highlights, [], "f");
    }
    setInClipboard(inClipboard) {
        if (this.inClipboard === inClipboard) {
            return;
        }
        this.inClipboard = inClipboard;
        this.listItemElement.classList.toggle('in-clipboard', inClipboard);
    }
    get hovered() {
        return this.hoveredInternal;
    }
    set hovered(isHovered) {
        if (this.hoveredInternal === isHovered) {
            return;
        }
        this.hoveredInternal = isHovered;
        if (this.listItemElement) {
            if (isHovered) {
                this.createSelection();
                this.listItemElement.classList.add('hovered');
            }
            else {
                this.listItemElement.classList.remove('hovered');
            }
        }
    }
    addIssue(newIssue) {
        if (__classPrivateFieldGet(this, _ElementsTreeElement_elementIssues, "f").has(newIssue.primaryKey())) {
            return;
        }
        __classPrivateFieldGet(this, _ElementsTreeElement_elementIssues, "f").set(newIssue.primaryKey(), newIssue);
        __classPrivateFieldGet(this, _ElementsTreeElement_instances, "m", _ElementsTreeElement_applyIssueStyleAndTooltip).call(this, newIssue);
    }
    get issuesByNodeElement() {
        return __classPrivateFieldGet(this, _ElementsTreeElement_nodeElementToIssue, "f");
    }
    expandedChildrenLimit() {
        return this.expandedChildrenLimitInternal;
    }
    setExpandedChildrenLimit(expandedChildrenLimit) {
        this.expandedChildrenLimitInternal = expandedChildrenLimit;
    }
    createSlotLink(nodeShortcut) {
        if (!isOpeningTag(this.tagTypeContext)) {
            return;
        }
        if (nodeShortcut) {
            const config = _components_components_js__WEBPACK_IMPORTED_MODULE_17__.AdornerManager.getRegisteredAdorner(_components_components_js__WEBPACK_IMPORTED_MODULE_17__.AdornerManager.RegisteredAdorners.SLOT);
            this.tagTypeContext.slot = this.adornSlot(config, this.tagTypeContext);
            const deferredNode = nodeShortcut.deferredNode;
            this.tagTypeContext.slot.addEventListener('click', () => {
                deferredNode.resolve(node => {
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(node);
                });
            });
            this.tagTypeContext.slot.addEventListener('mousedown', e => e.consume(), false);
        }
    }
    createSelection() {
        const contentElement = this.contentElement;
        if (!contentElement) {
            return;
        }
        if (!this.selectionElement) {
            this.selectionElement = document.createElement('div');
            this.selectionElement.className = 'selection fill';
            this.selectionElement.style.setProperty('margin-left', (-this.computeLeftIndent()) + 'px');
            contentElement.prepend(this.selectionElement);
        }
    }
    createHint() {
        if (this.contentElement && !this.hintElement) {
            this.hintElement = this.contentElement.createChild('span', 'selected-hint');
            const selectedElementCommand = '$0';
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.Tooltip.Tooltip.install(this.hintElement, i18nString(UIStrings.useSInTheConsoleToReferToThis, { PH1: selectedElementCommand }));
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.ARIAUtils.markAsHidden(this.hintElement);
        }
    }
    onbind() {
        if (this.treeOutline && !this.isClosingTag()) {
            this.treeOutline.treeElementByNode.set(this.nodeInternal, this);
        }
    }
    onunbind() {
        if (this.editing) {
            this.editing.cancel();
        }
        if (this.treeOutline && this.treeOutline.treeElementByNode.get(this.nodeInternal) === this) {
            this.treeOutline.treeElementByNode.delete(this.nodeInternal);
        }
    }
    onattach() {
        if (this.hoveredInternal) {
            this.createSelection();
            this.listItemElement.classList.add('hovered');
        }
        this.updateTitle();
        this.listItemElement.draggable = true;
    }
    async onpopulate() {
        if (this.treeOutline) {
            return this.treeOutline.populateTreeElement(this);
        }
    }
    async expandRecursively() {
        await this.nodeInternal.getSubtree(-1, true);
        await super.expandRecursively(Number.MAX_VALUE);
    }
    onexpand() {
        if (this.isClosingTag()) {
            return;
        }
        this.updateTitle();
    }
    oncollapse() {
        if (this.isClosingTag()) {
            return;
        }
        this.updateTitle();
    }
    select(omitFocus, selectedByUser) {
        if (this.editing) {
            return false;
        }
        return super.select(omitFocus, selectedByUser);
    }
    onselect(selectedByUser) {
        if (!this.treeOutline) {
            return false;
        }
        this.treeOutline.suppressRevealAndSelect = true;
        this.treeOutline.selectDOMNode(this.nodeInternal, selectedByUser);
        if (selectedByUser) {
            this.nodeInternal.highlight();
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ChangeInspectedNodeInElementsPanel);
        }
        this.createSelection();
        this.createHint();
        this.treeOutline.suppressRevealAndSelect = false;
        return true;
    }
    ondelete() {
        if (!this.treeOutline) {
            return false;
        }
        const startTagTreeElement = this.treeOutline.findTreeElement(this.nodeInternal);
        startTagTreeElement ? startTagTreeElement.remove() : this.remove();
        return true;
    }
    onenter() {
        // On Enter or Return start editing the first attribute
        // or create a new attribute on the selected element.
        if (this.editing) {
            return false;
        }
        this.startEditing();
        // prevent a newline from being immediately inserted
        return true;
    }
    selectOnMouseDown(event) {
        super.selectOnMouseDown(event);
        if (this.editing) {
            return;
        }
        // Prevent selecting the nearest word on double click.
        if (event.detail >= 2) {
            event.preventDefault();
        }
    }
    ondblclick(event) {
        if (this.editing || this.isClosingTag()) {
            return false;
        }
        if (this.startEditingTarget(event.target)) {
            return false;
        }
        if (this.isExpandable() && !this.expanded) {
            this.expand();
        }
        return false;
    }
    hasEditableNode() {
        return !this.nodeInternal.isShadowRoot() && !this.nodeInternal.ancestorUserAgentShadowRoot();
    }
    insertInLastAttributePosition(tag, node) {
        if (tag.getElementsByClassName('webkit-html-attribute').length > 0) {
            tag.insertBefore(node, tag.lastChild);
        }
        else if (tag.textContent !== null) {
            const matchResult = tag.textContent.match(/^<(.*?)>$/);
            if (!matchResult) {
                return;
            }
            const nodeName = matchResult[1];
            tag.textContent = '';
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(tag, '<' + nodeName);
            tag.appendChild(node);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(tag, '>');
        }
    }
    startEditingTarget(eventTarget) {
        if (!this.treeOutline || this.treeOutline.selectedDOMNode() !== this.nodeInternal) {
            return false;
        }
        if (this.nodeInternal.nodeType() !== Node.ELEMENT_NODE && this.nodeInternal.nodeType() !== Node.TEXT_NODE) {
            return false;
        }
        const textNode = eventTarget.enclosingNodeOrSelfWithClass('webkit-html-text-node');
        if (textNode) {
            return this.startEditingTextNode(textNode);
        }
        const attribute = eventTarget.enclosingNodeOrSelfWithClass('webkit-html-attribute');
        if (attribute) {
            return this.startEditingAttribute(attribute, eventTarget);
        }
        const tagName = eventTarget.enclosingNodeOrSelfWithClass('webkit-html-tag-name');
        if (tagName) {
            return this.startEditingTagName(tagName);
        }
        const newAttribute = eventTarget.enclosingNodeOrSelfWithClass('add-attribute');
        if (newAttribute) {
            return this.addNewAttribute();
        }
        return false;
    }
    showContextMenu(event) {
        this.treeOutline && this.treeOutline.showContextMenu(this, event);
    }
    populateTagContextMenu(contextMenu, event) {
        // Add attribute-related actions.
        const treeElement = this.isClosingTag() && this.treeOutline ? this.treeOutline.findTreeElement(this.nodeInternal) : this;
        if (!treeElement) {
            return;
        }
        contextMenu.editSection().appendItem(i18nString(UIStrings.addAttribute), treeElement.addNewAttribute.bind(treeElement), { jslogContext: 'add-attribute' });
        const target = event.target;
        const attribute = target.enclosingNodeOrSelfWithClass('webkit-html-attribute');
        const newAttribute = target.enclosingNodeOrSelfWithClass('add-attribute');
        if (attribute && !newAttribute) {
            contextMenu.editSection().appendItem(i18nString(UIStrings.editAttribute), this.startEditingAttribute.bind(this, attribute, target), { jslogContext: 'edit-attribute' });
        }
        this.populateNodeContextMenu(contextMenu);
        ElementsTreeElement.populateForcedPseudoStateItems(contextMenu, treeElement.node());
        this.populateScrollIntoView(contextMenu);
        contextMenu.viewSection().appendItem(i18nString(UIStrings.focus), async () => {
            await this.nodeInternal.focus();
        }, { jslogContext: 'focus' });
    }
    populatePseudoElementContextMenu(contextMenu) {
        if (this.childCount() !== 0) {
            this.populateExpandRecursively(contextMenu);
        }
        this.populateScrollIntoView(contextMenu);
    }
    populateExpandRecursively(contextMenu) {
        contextMenu.viewSection().appendItem(i18nString(UIStrings.expandRecursively), this.expandRecursively.bind(this), { jslogContext: 'expand-recursively' });
    }
    populateScrollIntoView(contextMenu) {
        contextMenu.viewSection().appendItem(i18nString(UIStrings.scrollIntoView), () => this.nodeInternal.scrollIntoView(), { jslogContext: 'scroll-into-view' });
    }
    populateTextContextMenu(contextMenu, textNode) {
        if (!this.editing) {
            contextMenu.editSection().appendItem(i18nString(UIStrings.editText), this.startEditingTextNode.bind(this, textNode), { jslogContext: 'edit-text' });
        }
        this.populateNodeContextMenu(contextMenu);
    }
    populateNodeContextMenu(contextMenu) {
        // Add free-form node-related actions.
        const isEditable = this.hasEditableNode();
        // clang-format off
        if (isEditable && !this.editing) {
            contextMenu.editSection().appendItem(i18nString(UIStrings.editAsHtml), this.editAsHTML.bind(this), { jslogContext: 'elements.edit-as-html' });
        }
        // clang-format on
        const isShadowRoot = this.nodeInternal.isShadowRoot();
        const createShortcut = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.KeyboardShortcut.KeyboardShortcut.shortcutToString.bind(null);
        const modifier = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.KeyboardShortcut.Modifiers.CtrlOrMeta;
        const treeOutline = this.treeOutline;
        if (!treeOutline) {
            return;
        }
        let menuItem;
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.ActionRegistry.ActionRegistry.instance().hasAction('freestyler.element-panel-context')) {
            contextMenu.headerSection().appendAction('freestyler.element-panel-context');
        }
        menuItem = contextMenu.clipboardSection().appendItem(i18nString(UIStrings.cut), treeOutline.performCopyOrCut.bind(treeOutline, true, this.nodeInternal), { disabled: !this.hasEditableNode(), jslogContext: 'cut' });
        menuItem.setShortcut(createShortcut('X', modifier));
        // Place it here so that all "Copy"-ing items stick together.
        const copyMenu = contextMenu.clipboardSection().appendSubMenuItem(i18nString(UIStrings.copy), false, 'copy');
        const section = copyMenu.section();
        if (!isShadowRoot) {
            menuItem = section.appendItem(i18nString(UIStrings.copyOuterhtml), treeOutline.performCopyOrCut.bind(treeOutline, false, this.nodeInternal), { jslogContext: 'copy-outer-html' });
            menuItem.setShortcut(createShortcut('V', modifier));
        }
        if (this.nodeInternal.nodeType() === Node.ELEMENT_NODE) {
            section.appendItem(i18nString(UIStrings.copySelector), this.copyCSSPath.bind(this), { jslogContext: 'copy-selector' });
            section.appendItem(i18nString(UIStrings.copyJsPath), this.copyJSPath.bind(this), { disabled: !(0,_DOMPath_js__WEBPACK_IMPORTED_MODULE_18__.canGetJSPath)(this.nodeInternal), jslogContext: 'copy-js-path' });
            section.appendItem(i18nString(UIStrings.copyStyles), this.copyStyles.bind(this), { jslogContext: 'elements.copy-styles' });
        }
        if (!isShadowRoot) {
            section.appendItem(i18nString(UIStrings.copyXpath), this.copyXPath.bind(this), { jslogContext: 'copy-xpath' });
            section.appendItem(i18nString(UIStrings.copyFullXpath), this.copyFullXPath.bind(this), { jslogContext: 'copy-full-xpath' });
        }
        if (!isShadowRoot) {
            menuItem = copyMenu.clipboardSection().appendItem(i18nString(UIStrings.copyElement), treeOutline.performCopyOrCut.bind(treeOutline, false, this.nodeInternal), { jslogContext: 'copy-element' });
            menuItem.setShortcut(createShortcut('C', modifier));
            // Duplicate element, disabled on root element and ShadowDOM.
            const isRootElement = !this.nodeInternal.parentNode || this.nodeInternal.parentNode.nodeName() === '#document';
            menuItem = contextMenu.editSection().appendItem(i18nString(UIStrings.duplicateElement), treeOutline.duplicateNode.bind(treeOutline, this.nodeInternal), {
                disabled: (this.nodeInternal.isInShadowTree() || isRootElement),
                jslogContext: 'elements.duplicate-element',
            });
        }
        menuItem = contextMenu.clipboardSection().appendItem(i18nString(UIStrings.paste), treeOutline.pasteNode.bind(treeOutline, this.nodeInternal), { disabled: !treeOutline.canPaste(this.nodeInternal), jslogContext: 'paste' });
        menuItem.setShortcut(createShortcut('V', modifier));
        menuItem = contextMenu.debugSection().appendCheckboxItem(i18nString(UIStrings.hideElement), treeOutline.toggleHideElement.bind(treeOutline, this.nodeInternal), { checked: treeOutline.isToggledToHidden(this.nodeInternal), jslogContext: 'elements.hide-element' });
        menuItem.setShortcut(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.ShortcutRegistry.ShortcutRegistry.instance().shortcutTitleForAction('elements.hide-element') || '');
        if (isEditable) {
            contextMenu.editSection().appendItem(i18nString(UIStrings.deleteElement), this.remove.bind(this), { jslogContext: 'delete-element' });
        }
        this.populateExpandRecursively(contextMenu);
        contextMenu.viewSection().appendItem(i18nString(UIStrings.collapseChildren), this.collapseChildren.bind(this), { jslogContext: 'collapse-children' });
        const deviceModeWrapperAction = new _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_16__.DeviceModeWrapper.ActionDelegate();
        contextMenu.viewSection().appendItem(i18nString(UIStrings.captureNodeScreenshot), deviceModeWrapperAction.handleAction.bind(null, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.Context.Context.instance(), 'emulation.capture-node-screenshot'), { jslogContext: 'emulation.capture-node-screenshot' });
        if (this.nodeInternal.frameOwnerFrameId()) {
            contextMenu.viewSection().appendItem(i18nString(UIStrings.showFrameDetails), () => {
                const frameOwnerFrameId = this.nodeInternal.frameOwnerFrameId();
                if (frameOwnerFrameId) {
                    const frame = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.FrameManager.FrameManager.instance().getFrame(frameOwnerFrameId);
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(frame);
                }
            }, { jslogContext: 'show-frame-details' });
        }
    }
    startEditing() {
        if (!this.treeOutline || this.treeOutline.selectedDOMNode() !== this.nodeInternal) {
            return;
        }
        const listItem = this.listItemElement;
        if (isOpeningTag(this.tagTypeContext) && this.tagTypeContext.canAddAttributes) {
            const attribute = listItem.getElementsByClassName('webkit-html-attribute')[0];
            if (attribute) {
                return this.startEditingAttribute(attribute, attribute.getElementsByClassName('webkit-html-attribute-value')[0]);
            }
            return this.addNewAttribute();
        }
        if (this.nodeInternal.nodeType() === Node.TEXT_NODE) {
            const textNode = listItem.getElementsByClassName('webkit-html-text-node')[0];
            if (textNode) {
                return this.startEditingTextNode(textNode);
            }
        }
        return;
    }
    addNewAttribute() {
        // Cannot just convert the textual html into an element without
        // a parent node. Use a temporary span container for the HTML.
        const container = document.createElement('span');
        const attr = this.buildAttributeDOM(container, ' ', '', null);
        attr.style.marginLeft = '2px'; // overrides the .editing margin rule
        attr.style.marginRight = '2px'; // overrides the .editing margin rule
        attr.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.value('new-attribute').track({ change: true, resize: true })}`);
        const tag = this.listItemElement.getElementsByClassName('webkit-html-tag')[0];
        this.insertInLastAttributePosition(tag, attr);
        attr.scrollIntoViewIfNeeded(true);
        return this.startEditingAttribute(attr, attr);
    }
    triggerEditAttribute(attributeName) {
        const attributeElements = this.listItemElement.getElementsByClassName('webkit-html-attribute-name');
        for (let i = 0, len = attributeElements.length; i < len; ++i) {
            if (attributeElements[i].textContent === attributeName) {
                for (let elem = attributeElements[i].nextSibling; elem; elem = elem.nextSibling) {
                    if (elem.nodeType !== Node.ELEMENT_NODE) {
                        continue;
                    }
                    if (elem.classList.contains('webkit-html-attribute-value')) {
                        return this.startEditingAttribute(elem.parentElement, elem);
                    }
                }
            }
        }
        return;
    }
    startEditingAttribute(attribute, elementForSelection) {
        console.assert(this.listItemElement.isAncestor(attribute));
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.isBeingEdited(attribute)) {
            return true;
        }
        const attributeNameElement = attribute.getElementsByClassName('webkit-html-attribute-name')[0];
        if (!attributeNameElement) {
            return false;
        }
        const attributeName = attributeNameElement.textContent;
        const attributeValueElement = attribute.getElementsByClassName('webkit-html-attribute-value')[0];
        // Make sure elementForSelection is not a child of attributeValueElement.
        elementForSelection =
            attributeValueElement.isAncestor(elementForSelection) ? attributeValueElement : elementForSelection;
        function removeZeroWidthSpaceRecursive(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                node.nodeValue = node.nodeValue ? node.nodeValue.replace(/\u200B/g, '') : '';
                return;
            }
            if (node.nodeType !== Node.ELEMENT_NODE) {
                return;
            }
            for (let child = node.firstChild; child; child = child.nextSibling) {
                removeZeroWidthSpaceRecursive(child);
            }
        }
        const attributeValue = attributeName && attributeValueElement ?
            this.nodeInternal.getAttribute(attributeName)?.replaceAll('"', '&quot;') :
            undefined;
        if (attributeValue !== undefined) {
            attributeValueElement.setTextContentTruncatedIfNeeded(attributeValue, i18nString(UIStrings.valueIsTooLargeToEdit));
        }
        // Remove zero-width spaces that were added by nodeTitleInfo.
        removeZeroWidthSpaceRecursive(attribute);
        const config = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.InplaceEditor.Config(this.attributeEditingCommitted.bind(this), this.editingCancelled.bind(this), attributeName || undefined);
        function postKeyDownFinishHandler(event) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.handleElementValueModifications(event, attribute);
            return '';
        }
        if (!_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString(attributeValueElement.textContent || '')) {
            config.setPostKeydownFinishHandler(postKeyDownFinishHandler);
        }
        this.updateEditorHandles(attribute, config);
        const componentSelection = this.listItemElement.getComponentSelection();
        componentSelection && componentSelection.selectAllChildren(elementForSelection);
        return true;
    }
    startEditingTextNode(textNodeElement) {
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.isBeingEdited(textNodeElement)) {
            return true;
        }
        let textNode = this.nodeInternal;
        // We only show text nodes inline in elements if the element only
        // has a single child, and that child is a text node.
        if (textNode.nodeType() === Node.ELEMENT_NODE && textNode.firstChild) {
            textNode = textNode.firstChild;
        }
        const container = textNodeElement.enclosingNodeOrSelfWithClass('webkit-html-text-node');
        if (container) {
            container.textContent = textNode.nodeValue();
        } // Strip the CSS or JS highlighting if present.
        const config = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.InplaceEditor.Config(this.textNodeEditingCommitted.bind(this, textNode), this.editingCancelled.bind(this));
        this.updateEditorHandles(textNodeElement, config);
        const componentSelection = this.listItemElement.getComponentSelection();
        componentSelection && componentSelection.selectAllChildren(textNodeElement);
        return true;
    }
    startEditingTagName(tagNameElement) {
        if (!tagNameElement) {
            tagNameElement = this.listItemElement.getElementsByClassName('webkit-html-tag-name')[0];
            if (!tagNameElement) {
                return false;
            }
        }
        const tagName = tagNameElement.textContent;
        if (tagName !== null && EditTagBlocklist.has(tagName.toLowerCase())) {
            return false;
        }
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.isBeingEdited(tagNameElement)) {
            return true;
        }
        const closingTagElement = this.distinctClosingTagElement();
        function keyupListener() {
            if (closingTagElement && tagNameElement) {
                closingTagElement.textContent = '</' + tagNameElement.textContent + '>';
            }
        }
        const keydownListener = (event) => {
            if (event.key !== ' ') {
                return;
            }
            this.editing && this.editing.commit();
            event.consume(true);
        };
        function editingCommitted(element, newTagName, oldText, tagName, moveDirection) {
            if (!tagNameElement) {
                return;
            }
            tagNameElement.removeEventListener('keyup', keyupListener, false);
            tagNameElement.removeEventListener('keydown', keydownListener, false);
            this.tagNameEditingCommitted(element, newTagName, oldText, tagName, moveDirection);
        }
        function editingCancelled(element, tagName) {
            if (!tagNameElement) {
                return;
            }
            tagNameElement.removeEventListener('keyup', keyupListener, false);
            tagNameElement.removeEventListener('keydown', keydownListener, false);
            this.editingCancelled(element, tagName);
        }
        tagNameElement.addEventListener('keyup', keyupListener, false);
        tagNameElement.addEventListener('keydown', keydownListener, false);
        const config = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.InplaceEditor.Config(editingCommitted.bind(this), editingCancelled.bind(this), tagName);
        this.updateEditorHandles(tagNameElement, config);
        const componentSelection = this.listItemElement.getComponentSelection();
        componentSelection && componentSelection.selectAllChildren(tagNameElement);
        return true;
    }
    updateEditorHandles(element, config) {
        const editorHandles = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.InplaceEditor.InplaceEditor.startEditing(element, config);
        if (!editorHandles) {
            this.editing = null;
        }
        else {
            this.editing = {
                commit: editorHandles.commit,
                cancel: editorHandles.cancel,
                editor: undefined,
                resize: () => { },
            };
        }
    }
    async startEditingAsHTML(commitCallback, disposeCallback, maybeInitialValue) {
        if (maybeInitialValue === null) {
            return;
        }
        if (this.editing) {
            return;
        }
        const initialValue = this.convertWhitespaceToEntities(maybeInitialValue).text;
        this.htmlEditElement = document.createElement('div');
        this.htmlEditElement.className = 'source-code elements-tree-editor';
        // Hide header items.
        let child = this.listItemElement.firstChild;
        while (child) {
            child.style.display = 'none';
            child = child.nextSibling;
        }
        // Hide children item.
        if (this.childrenListElement) {
            this.childrenListElement.style.display = 'none';
        }
        // Append editor.
        this.listItemElement.append(this.htmlEditElement);
        this.htmlEditElement.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                event.consume(true);
            }
        });
        const editor = new _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_12__.TextEditor.TextEditor(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorState.create({
            doc: initialValue,
            extensions: [
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.keymap.of([
                    {
                        key: 'Mod-Enter',
                        run: () => {
                            this.editing?.commit();
                            return true;
                        },
                    },
                    {
                        key: 'Escape',
                        run: () => {
                            this.editing?.cancel();
                            return true;
                        },
                    },
                ]),
                _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_12__.Config.baseConfiguration(initialValue),
                _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_12__.Config.closeBrackets.instance(),
                _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_12__.Config.autocompletion.instance(),
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.html.html({ autoCloseTags: false, selfClosingTags: true }),
                _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_12__.Config.domWordWrap.instance(),
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorView.theme({
                    '&.cm-editor': { maxHeight: '300px' },
                    '.cm-scroller': { overflowY: 'auto' },
                }),
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorView.domEventHandlers({
                    focusout: event => {
                        // The relatedTarget is null when no element gains focus, e.g. switching windows.
                        const relatedTarget = event.relatedTarget;
                        if (relatedTarget && !relatedTarget.isSelfOrDescendant(editor)) {
                            this.editing && this.editing.commit();
                        }
                    },
                }),
            ],
        }));
        this.editing = { commit: commit.bind(this), cancel: dispose.bind(this), editor, resize: resize.bind(this) };
        resize.call(this);
        this.htmlEditElement.appendChild(editor);
        editor.editor.focus();
        this.treeOutline && this.treeOutline.setMultilineEditing(this.editing);
        function resize() {
            if (this.treeOutline && this.htmlEditElement) {
                this.htmlEditElement.style.width = this.treeOutline.visibleWidth() - this.computeLeftIndent() - 30 + 'px';
            }
        }
        function commit() {
            if (this.editing && this.editing.editor) {
                commitCallback(initialValue, this.editing.editor.state.doc.toString());
            }
            dispose.call(this);
        }
        function dispose() {
            if (!this.editing || !this.editing.editor) {
                return;
            }
            this.editing = null;
            // Remove editor.
            if (this.htmlEditElement) {
                this.listItemElement.removeChild(this.htmlEditElement);
            }
            this.htmlEditElement = undefined;
            // Unhide children item.
            if (this.childrenListElement) {
                this.childrenListElement.style.removeProperty('display');
            }
            // Unhide header items.
            let child = this.listItemElement.firstChild;
            while (child) {
                child.style.removeProperty('display');
                child = child.nextSibling;
            }
            if (this.treeOutline) {
                this.treeOutline.setMultilineEditing(null);
                this.treeOutline.focus();
            }
            disposeCallback();
        }
    }
    attributeEditingCommitted(element, newText, oldText, attributeName, moveDirection) {
        this.editing = null;
        const treeOutline = this.treeOutline;
        function moveToNextAttributeIfNeeded(error) {
            if (error) {
                this.editingCancelled(element, attributeName);
            }
            if (!moveDirection) {
                return;
            }
            if (treeOutline) {
                treeOutline.runPendingUpdates();
                treeOutline.focus();
            }
            // Search for the attribute's position, and then decide where to move to.
            const attributes = this.nodeInternal.attributes();
            for (let i = 0; i < attributes.length; ++i) {
                if (attributes[i].name !== attributeName) {
                    continue;
                }
                if (moveDirection === 'backward') {
                    if (i === 0) {
                        this.startEditingTagName();
                    }
                    else {
                        this.triggerEditAttribute(attributes[i - 1].name);
                    }
                }
                else {
                    if (i === attributes.length - 1) {
                        this.addNewAttribute();
                    }
                    else {
                        this.triggerEditAttribute(attributes[i + 1].name);
                    }
                }
                return;
            }
            // Moving From the "New Attribute" position.
            if (moveDirection === 'backward') {
                if (newText === ' ') {
                    // Moving from "New Attribute" that was not edited
                    if (attributes.length > 0) {
                        this.triggerEditAttribute(attributes[attributes.length - 1].name);
                    }
                }
                else {
                    // Moving from "New Attribute" that holds new value
                    if (attributes.length > 1) {
                        this.triggerEditAttribute(attributes[attributes.length - 2].name);
                    }
                }
            }
            else if (moveDirection === 'forward') {
                if (!_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.isWhitespace(newText)) {
                    this.addNewAttribute();
                }
                else {
                    this.startEditingTagName();
                }
            }
        }
        if ((attributeName.trim() || newText.trim()) && oldText !== newText) {
            this.nodeInternal.setAttribute(attributeName, newText, moveToNextAttributeIfNeeded.bind(this));
            return;
        }
        this.updateTitle();
        moveToNextAttributeIfNeeded.call(this);
    }
    tagNameEditingCommitted(element, newText, oldText, tagName, moveDirection) {
        this.editing = null;
        const self = this;
        function cancel() {
            const closingTagElement = self.distinctClosingTagElement();
            if (closingTagElement) {
                closingTagElement.textContent = '</' + tagName + '>';
            }
            self.editingCancelled(element, tagName);
            moveToNextAttributeIfNeeded.call(self);
        }
        function moveToNextAttributeIfNeeded() {
            if (moveDirection !== 'forward') {
                this.addNewAttribute();
                return;
            }
            const attributes = this.nodeInternal.attributes();
            if (attributes.length > 0) {
                this.triggerEditAttribute(attributes[0].name);
            }
            else {
                this.addNewAttribute();
            }
        }
        newText = newText.trim();
        if (newText === oldText) {
            cancel();
            return;
        }
        const treeOutline = this.treeOutline;
        const wasExpanded = this.expanded;
        this.nodeInternal.setNodeName(newText, (error, newNode) => {
            if (error || !newNode) {
                cancel();
                return;
            }
            if (!treeOutline) {
                return;
            }
            const newTreeItem = treeOutline.selectNodeAfterEdit(wasExpanded, error, newNode);
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration
            // @ts-expect-error
            moveToNextAttributeIfNeeded.call(newTreeItem);
        });
    }
    textNodeEditingCommitted(textNode, element, newText) {
        this.editing = null;
        function callback() {
            this.updateTitle();
        }
        textNode.setNodeValue(newText, callback.bind(this));
    }
    editingCancelled(_element, _tagName) {
        this.editing = null;
        // Need to restore attributes structure.
        this.updateTitle();
    }
    distinctClosingTagElement() {
        // FIXME: Improve the Tree Element / Outline Abstraction to prevent crawling the DOM
        // For an expanded element, it will be the last element with class "close"
        // in the child element list.
        if (this.expanded) {
            const closers = this.childrenListElement.querySelectorAll('.close');
            return closers[closers.length - 1];
        }
        // Remaining cases are single line non-expanded elements with a closing
        // tag, or HTML elements without a closing tag (such as <br>). Return
        // null in the case where there isn't a closing tag.
        const tags = this.listItemElement.getElementsByClassName('webkit-html-tag');
        return tags.length === 1 ? null : tags[tags.length - 1];
    }
    updateTitle(updateRecord) {
        // If we are editing, return early to prevent canceling the edit.
        // After editing is committed updateTitle will be called.
        if (this.editing) {
            return;
        }
        const nodeInfo = this.nodeTitleInfo(updateRecord || null);
        if (this.nodeInternal.nodeType() === Node.DOCUMENT_FRAGMENT_NODE && this.nodeInternal.isInShadowTree() &&
            this.nodeInternal.shadowRootType()) {
            this.childrenListElement.classList.add('shadow-root');
            let depth = 4;
            for (let node = this.nodeInternal; depth && node; node = node.parentNode) {
                if (node.nodeType() === Node.DOCUMENT_FRAGMENT_NODE) {
                    depth--;
                }
            }
            if (!depth) {
                this.childrenListElement.classList.add('shadow-root-deep');
            }
            else {
                this.childrenListElement.classList.add('shadow-root-depth-' + depth);
            }
        }
        this.contentElement.removeChildren();
        const highlightElement = this.contentElement.createChild('span', 'highlight');
        highlightElement.append(nodeInfo);
        // fixme: make it clear that `this.title = x` is a setter with significant side effects
        this.title = this.contentElement;
        this.updateDecorations();
        this.contentElement.prepend(this.gutterContainer);
        if (isOpeningTag(this.tagTypeContext)) {
            this.contentElement.append(this.tagTypeContext.adornerContainer);
            if (this.tagTypeContext.slot) {
                this.contentElement.append(this.tagTypeContext.slot);
            }
        }
        delete this.selectionElement;
        delete this.hintElement;
        if (this.selected) {
            this.createSelection();
            this.createHint();
        }
        // If there is an issue with this node, make sure to update it.
        for (const issue of __classPrivateFieldGet(this, _ElementsTreeElement_elementIssues, "f").values()) {
            __classPrivateFieldGet(this, _ElementsTreeElement_instances, "m", _ElementsTreeElement_applyIssueStyleAndTooltip).call(this, issue);
        }
        this.highlightSearchResultsInternal();
    }
    computeLeftIndent() {
        let treeElement = this.parent;
        let depth = 0;
        while (treeElement !== null) {
            depth++;
            treeElement = treeElement.parent;
        }
        /** Keep it in sync with elementsTreeOutline.css **/
        return 12 * (depth - 2) + (this.isExpandable() && this.isCollapsible() ? 1 : 12);
    }
    updateDecorations() {
        const indent = this.computeLeftIndent();
        this.gutterContainer.style.left = (-indent) + 'px';
        this.listItemElement.style.setProperty('--indent', indent + 'px');
        if (this.isClosingTag()) {
            return;
        }
        if (this.nodeInternal.nodeType() !== Node.ELEMENT_NODE) {
            return;
        }
        void this.decorationsThrottler.schedule(this.updateDecorationsInternal.bind(this));
    }
    updateDecorationsInternal() {
        if (!this.treeOutline) {
            return Promise.resolve();
        }
        const node = this.nodeInternal;
        if (!this.treeOutline.decoratorExtensions) {
            this.treeOutline.decoratorExtensions = (0,_MarkerDecorator_js__WEBPACK_IMPORTED_MODULE_22__.getRegisteredDecorators)();
        }
        const markerToExtension = new Map();
        for (const decoratorExtension of this.treeOutline.decoratorExtensions) {
            markerToExtension.set(decoratorExtension.marker, decoratorExtension);
        }
        const promises = [];
        const decorations = [];
        const descendantDecorations = [];
        node.traverseMarkers(visitor);
        function visitor(n, marker) {
            const extension = markerToExtension.get(marker);
            if (!extension) {
                return;
            }
            promises.push(Promise.resolve(extension.decorator()).then(collectDecoration.bind(null, n)));
        }
        function collectDecoration(n, decorator) {
            const decoration = decorator.decorate(n);
            if (!decoration) {
                return;
            }
            (n === node ? decorations : descendantDecorations).push(decoration);
        }
        return Promise.all(promises).then(updateDecorationsUI.bind(this));
        function updateDecorationsUI() {
            this.decorationsElement.removeChildren();
            this.decorationsElement.classList.add('hidden');
            this.gutterContainer.classList.toggle('has-decorations', Boolean(decorations.length || descendantDecorations.length));
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.ARIAUtils.setLabel(this.decorationsElement, '');
            if (!decorations.length && !descendantDecorations.length) {
                return;
            }
            const colors = new Set();
            const titles = document.createElement('div');
            for (const decoration of decorations) {
                const titleElement = titles.createChild('div');
                titleElement.textContent = decoration.title;
                colors.add(decoration.color);
            }
            if (this.expanded && !decorations.length) {
                return;
            }
            const descendantColors = new Set();
            if (descendantDecorations.length) {
                let element = titles.createChild('div');
                element.textContent = i18nString(UIStrings.children);
                for (const decoration of descendantDecorations) {
                    element = titles.createChild('div');
                    element.style.marginLeft = '15px';
                    element.textContent = decoration.title;
                    descendantColors.add(decoration.color);
                }
            }
            let offset = 0;
            processColors.call(this, colors, 'elements-gutter-decoration');
            if (!this.expanded) {
                processColors.call(this, descendantColors, 'elements-gutter-decoration elements-has-decorated-children');
            }
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.Tooltip.Tooltip.install(this.decorationsElement, titles.textContent);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.ARIAUtils.setLabel(this.decorationsElement, titles.textContent || '');
            function processColors(colors, className) {
                for (const color of colors) {
                    const child = this.decorationsElement.createChild('div', className);
                    this.decorationsElement.classList.remove('hidden');
                    child.style.backgroundColor = color;
                    child.style.borderColor = color;
                    if (offset) {
                        child.style.marginLeft = offset + 'px';
                    }
                    offset += 3;
                }
            }
        }
    }
    buildAttributeDOM(parentElement, name, value, updateRecord, forceValue, node) {
        const closingPunctuationRegex = /[\/;:\)\]\}]/g;
        let highlightIndex = 0;
        let highlightCount = 0;
        let additionalHighlightOffset = 0;
        function setValueWithEntities(element, value) {
            const result = this.convertWhitespaceToEntities(value);
            highlightCount = result.entityRanges.length;
            value = result.text.replace(closingPunctuationRegex, (match, replaceOffset) => {
                while (highlightIndex < highlightCount && result.entityRanges[highlightIndex].offset < replaceOffset) {
                    result.entityRanges[highlightIndex].offset += additionalHighlightOffset;
                    ++highlightIndex;
                }
                additionalHighlightOffset += 1;
                return match + '\u200B';
            });
            while (highlightIndex < highlightCount) {
                result.entityRanges[highlightIndex].offset += additionalHighlightOffset;
                ++highlightIndex;
            }
            element.setTextContentTruncatedIfNeeded(value);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.highlightRangesWithStyleClass(element, result.entityRanges, 'webkit-html-entity-value');
        }
        const hasText = (forceValue || value.length > 0);
        const attrSpanElement = parentElement.createChild('span', 'webkit-html-attribute');
        attrSpanElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.value(name === 'style' ? 'style-attribute' : 'attribute').track({
            change: true,
            dblclick: true,
        })}`);
        const attrNameElement = attrSpanElement.createChild('span', 'webkit-html-attribute-name');
        attrNameElement.textContent = name;
        if (hasText) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(attrSpanElement, '=\u200B"');
        }
        const attrValueElement = attrSpanElement.createChild('span', 'webkit-html-attribute-value');
        if (updateRecord && updateRecord.isAttributeModified(name)) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.runCSSAnimationOnce(hasText ? attrValueElement : attrNameElement, 'dom-update-highlight');
        }
        function linkifyValue(value) {
            const rewrittenHref = node ? node.resolveURL(value) : null;
            if (rewrittenHref === null) {
                const span = document.createElement('span');
                setValueWithEntities.call(this, span, value);
                return span;
            }
            value = value.replace(closingPunctuationRegex, '$&\u200B');
            if (value.startsWith('data:')) {
                value = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.trimMiddle(value, 60);
            }
            const link = node && node.nodeName().toLowerCase() === 'a' ?
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.XLink.XLink.create(rewrittenHref, value, '', true /* preventClick */, 'image-url') :
                _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_13__.Linkifier.Linkifier.linkifyURL(rewrittenHref, {
                    text: value,
                    preventClick: true,
                    showColumnNumber: false,
                    inlineFrameIndex: 0,
                });
            return _ImagePreviewPopover_js__WEBPACK_IMPORTED_MODULE_21__.ImagePreviewPopover.setImageUrl(link, rewrittenHref);
        }
        const nodeName = node ? node.nodeName().toLowerCase() : '';
        // If the href/src attribute has a value, attempt to link it.
        // There's no point trying to link it if the value is empty (e.g. <a href=''>).
        if (nodeName && (name === 'src' || name === 'href') && value) {
            attrValueElement.appendChild(linkifyValue.call(this, value));
        }
        else if ((nodeName === 'img' || nodeName === 'source') && name === 'srcset') {
            attrValueElement.appendChild(linkifySrcset.call(this, value));
        }
        else if (nodeName === 'image' && (name === 'xlink:href' || name === 'href')) {
            attrValueElement.appendChild(linkifySrcset.call(this, value));
        }
        else {
            setValueWithEntities.call(this, attrValueElement, value);
        }
        if (name === 'popovertarget') {
            const linkedPart = value ? attrValueElement : attrNameElement;
            void this.linkifyElementByRelation(linkedPart, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.DOM.GetElementByRelationRequestRelation.PopoverTarget, i18nString(UIStrings.showPopoverTarget));
        }
        if (hasText) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(attrSpanElement, '"');
        }
        function linkifySrcset(value) {
            // Splitting normally on commas or spaces will break on valid srcsets "foo 1x,bar 2x" and "data:,foo 1x".
            // 1) Let the index of the next space be `indexOfSpace`.
            // 2a) If the character at `indexOfSpace - 1` is a comma, collect the preceding characters up to
            //     `indexOfSpace - 1` as a URL and repeat step 1).
            // 2b) Else, collect the preceding characters as a URL.
            // 3) Collect the characters from `indexOfSpace` up to the next comma as the size descriptor and repeat step 1).
            // https://html.spec.whatwg.org/C/#parse-a-srcset-attribute
            const fragment = document.createDocumentFragment();
            let i = 0;
            while (value.length) {
                if (i++ > 0) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(fragment, ' ');
                }
                value = value.trim();
                // The url and descriptor may end with a separating comma.
                let url = '';
                let descriptor = '';
                const indexOfSpace = value.search(/\s/);
                if (indexOfSpace === -1) {
                    url = value;
                }
                else if (indexOfSpace > 0 && value[indexOfSpace - 1] === ',') {
                    url = value.substring(0, indexOfSpace);
                }
                else {
                    url = value.substring(0, indexOfSpace);
                    const indexOfComma = value.indexOf(',', indexOfSpace);
                    if (indexOfComma !== -1) {
                        descriptor = value.substring(indexOfSpace, indexOfComma + 1);
                    }
                    else {
                        descriptor = value.substring(indexOfSpace);
                    }
                }
                if (url) {
                    // Up to one trailing comma should be removed from `url`.
                    if (url.endsWith(',')) {
                        fragment.appendChild(linkifyValue.call(this, url.substring(0, url.length - 1)));
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(fragment, ',');
                    }
                    else {
                        fragment.appendChild(linkifyValue.call(this, url));
                    }
                }
                if (descriptor) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(fragment, descriptor);
                }
                value = value.substring(url.length + descriptor.length);
            }
            return fragment;
        }
        return attrSpanElement;
    }
    async linkifyElementByRelation(linkContainer, relation, tooltip) {
        const relatedElementId = await this.nodeInternal.domModel().getElementByRelation(this.nodeInternal.id, relation);
        const relatedElement = this.nodeInternal.domModel().nodeForId(relatedElementId);
        if (!relatedElement) {
            return;
        }
        const link = await _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(relatedElement, {
            preventKeyboardFocus: true,
            tooltip,
            textContent: linkContainer.textContent || undefined,
            isDynamicLink: true,
        });
        linkContainer.removeChildren();
        linkContainer.append(link);
    }
    buildPseudoElementDOM(parentElement, pseudoElementName) {
        const pseudoElement = parentElement.createChild('span', 'webkit-html-pseudo-element');
        pseudoElement.textContent = '::' + pseudoElementName;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(parentElement, '\u200B');
    }
    buildTagDOM(parentElement, tagName, isClosingTag, isDistinctTreeElement, updateRecord) {
        const node = this.nodeInternal;
        const classes = ['webkit-html-tag'];
        if (isClosingTag && isDistinctTreeElement) {
            classes.push('close');
        }
        const tagElement = parentElement.createChild('span', classes.join(' '));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(tagElement, '<');
        const tagNameElement = tagElement.createChild('span', isClosingTag ? 'webkit-html-close-tag-name' : 'webkit-html-tag-name');
        if (!isClosingTag) {
            tagNameElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.value('tag-name').track({ change: true, dblclick: true })}`);
        }
        tagNameElement.textContent = (isClosingTag ? '/' : '') + tagName;
        if (!isClosingTag) {
            if (node.hasAttributes()) {
                const attributes = node.attributes();
                for (let i = 0; i < attributes.length; ++i) {
                    const attr = attributes[i];
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(tagElement, ' ');
                    this.buildAttributeDOM(tagElement, attr.name, attr.value, updateRecord, false, node);
                }
            }
            if (updateRecord) {
                let hasUpdates = updateRecord.hasRemovedAttributes() || updateRecord.hasRemovedChildren();
                hasUpdates = hasUpdates || (!this.expanded && updateRecord.hasChangedChildren());
                if (hasUpdates) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.runCSSAnimationOnce(tagNameElement, 'dom-update-highlight');
                }
            }
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(tagElement, '>');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(parentElement, '\u200B');
        if (tagElement.textContent) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.ARIAUtils.setLabel(tagElement, tagElement.textContent);
        }
    }
    convertWhitespaceToEntities(text) {
        let result = '';
        let lastIndexAfterEntity = 0;
        const entityRanges = [];
        const charToEntity = _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_20__.MappedCharToEntity;
        for (let i = 0, size = text.length; i < size; ++i) {
            const char = text.charAt(i);
            if (charToEntity.has(char)) {
                result += text.substring(lastIndexAfterEntity, i);
                const entityValue = '&' + charToEntity.get(char) + ';';
                entityRanges.push(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_6__.TextRange.SourceRange(result.length, entityValue.length));
                result += entityValue;
                lastIndexAfterEntity = i + 1;
            }
        }
        if (result) {
            result += text.substring(lastIndexAfterEntity);
        }
        return { text: result || text, entityRanges: entityRanges };
    }
    nodeTitleInfo(updateRecord) {
        const node = this.nodeInternal;
        const titleDOM = document.createDocumentFragment();
        const updateSearchHighlight = () => {
            this.highlightSearchResultsInternal();
        };
        switch (node.nodeType()) {
            case Node.ATTRIBUTE_NODE:
                this.buildAttributeDOM(titleDOM, node.name, node.value, updateRecord, true);
                break;
            case Node.ELEMENT_NODE: {
                let pseudoElementName = node.pseudoType();
                if (pseudoElementName) {
                    const pseudoIdentifier = node.pseudoIdentifier();
                    if (pseudoIdentifier) {
                        pseudoElementName += `(${pseudoIdentifier})`;
                    }
                    this.buildPseudoElementDOM(titleDOM, pseudoElementName);
                    break;
                }
                const tagName = node.nodeNameInCorrectCase();
                if (this.isClosingTag()) {
                    this.buildTagDOM(titleDOM, tagName, true, true, updateRecord);
                    break;
                }
                this.buildTagDOM(titleDOM, tagName, false, false, updateRecord);
                if (this.isExpandable()) {
                    if (!this.expanded) {
                        const expandButton = new _components_components_js__WEBPACK_IMPORTED_MODULE_17__.ElementsTreeExpandButton.ElementsTreeExpandButton();
                        expandButton.data = {
                            clickHandler: () => this.expand(),
                        };
                        titleDOM.appendChild(expandButton);
                        // This hidden span with … is for blink layout tests.
                        // The method dumpElementsTree(front_end/legacy_test_runner/elements_test_runner/ElementsTestRunner.js)
                        // dumps … to identify expandable element.
                        const hidden = document.createElement('span');
                        hidden.textContent = '…';
                        hidden.style.fontSize = '0';
                        titleDOM.appendChild(hidden);
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(titleDOM, '\u200B');
                        this.buildTagDOM(titleDOM, tagName, true, false, updateRecord);
                    }
                    break;
                }
                if (ElementsTreeElement.canShowInlineText(node)) {
                    const textNodeElement = titleDOM.createChild('span', 'webkit-html-text-node');
                    textNodeElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.value('text-node').track({ change: true, dblclick: true })}`);
                    const firstChild = node.firstChild;
                    if (!firstChild) {
                        throw new Error('ElementsTreeElement._nodeTitleInfo expects node.firstChild to be defined.');
                    }
                    const result = this.convertWhitespaceToEntities(firstChild.nodeValue());
                    textNodeElement.textContent = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.collapseWhitespace(result.text);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.highlightRangesWithStyleClass(textNodeElement, result.entityRanges, 'webkit-html-entity-value');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(titleDOM, '\u200B');
                    this.buildTagDOM(titleDOM, tagName, true, false, updateRecord);
                    if (updateRecord && updateRecord.hasChangedChildren()) {
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.runCSSAnimationOnce(textNodeElement, 'dom-update-highlight');
                    }
                    if (updateRecord && updateRecord.isCharDataModified()) {
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.runCSSAnimationOnce(textNodeElement, 'dom-update-highlight');
                    }
                    break;
                }
                if (this.treeOutline && this.treeOutline.isXMLMimeType || !ForbiddenClosingTagElements.has(tagName)) {
                    this.buildTagDOM(titleDOM, tagName, true, false, updateRecord);
                }
                break;
            }
            case Node.TEXT_NODE:
                if (node.parentNode && node.parentNode.nodeName().toLowerCase() === 'script') {
                    const newNode = titleDOM.createChild('span', 'webkit-html-text-node webkit-html-js-node');
                    newNode.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.value('script-text-node').track({ change: true, dblclick: true })}`);
                    const text = node.nodeValue();
                    newNode.textContent = text.replace(/^[\n\r]+|\s+$/g, '');
                    void _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_9__.CodeHighlighter.highlightNode(newNode, 'text/javascript').then(updateSearchHighlight);
                }
                else if (node.parentNode && node.parentNode.nodeName().toLowerCase() === 'style') {
                    const newNode = titleDOM.createChild('span', 'webkit-html-text-node webkit-html-css-node');
                    newNode.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.value('css-text-node').track({ change: true, dblclick: true })}`);
                    const text = node.nodeValue();
                    newNode.textContent = text.replace(/^[\n\r]+|\s+$/g, '');
                    void _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_9__.CodeHighlighter.highlightNode(newNode, 'text/css').then(updateSearchHighlight);
                }
                else {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(titleDOM, '"');
                    const textNodeElement = titleDOM.createChild('span', 'webkit-html-text-node');
                    textNodeElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.value('text-node').track({ change: true, dblclick: true })}`);
                    const result = this.convertWhitespaceToEntities(node.nodeValue());
                    textNodeElement.textContent = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.collapseWhitespace(result.text);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.highlightRangesWithStyleClass(textNodeElement, result.entityRanges, 'webkit-html-entity-value');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(titleDOM, '"');
                    if (updateRecord && updateRecord.isCharDataModified()) {
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.runCSSAnimationOnce(textNodeElement, 'dom-update-highlight');
                    }
                }
                break;
            case Node.COMMENT_NODE: {
                const commentElement = titleDOM.createChild('span', 'webkit-html-comment');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(commentElement, '<!--' + node.nodeValue() + '-->');
                break;
            }
            case Node.DOCUMENT_TYPE_NODE: {
                const docTypeElement = titleDOM.createChild('span', 'webkit-html-doctype');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(docTypeElement, '<!DOCTYPE ' + node.nodeName());
                if (node.publicId) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(docTypeElement, ' PUBLIC "' + node.publicId + '"');
                    if (node.systemId) {
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(docTypeElement, ' "' + node.systemId + '"');
                    }
                }
                else if (node.systemId) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(docTypeElement, ' SYSTEM "' + node.systemId + '"');
                }
                if (node.internalSubset) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(docTypeElement, ' [' + node.internalSubset + ']');
                }
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(docTypeElement, '>');
                break;
            }
            case Node.CDATA_SECTION_NODE: {
                const cdataElement = titleDOM.createChild('span', 'webkit-html-text-node');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(cdataElement, '<![CDATA[' + node.nodeValue() + ']]>');
                break;
            }
            case Node.DOCUMENT_NODE: {
                const documentElement = titleDOM.createChild('span');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(documentElement, '#document (');
                const text = node.documentURL;
                documentElement.appendChild(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_13__.Linkifier.Linkifier.linkifyURL(text, {
                    text,
                    preventClick: true,
                    showColumnNumber: false,
                    inlineFrameIndex: 0,
                }));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(documentElement, ')');
                break;
            }
            case Node.DOCUMENT_FRAGMENT_NODE: {
                const fragmentElement = titleDOM.createChild('span', 'webkit-html-fragment');
                fragmentElement.textContent = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.collapseWhitespace(node.nodeNameInCorrectCase());
                break;
            }
            default: {
                const nameWithSpaceCollapsed = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.collapseWhitespace(node.nodeNameInCorrectCase());
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.UIUtils.createTextChild(titleDOM, nameWithSpaceCollapsed);
            }
        }
        return titleDOM;
    }
    remove() {
        if (this.nodeInternal.pseudoType()) {
            return;
        }
        const parentElement = this.parent;
        if (!parentElement) {
            return;
        }
        if (!this.nodeInternal.parentNode || this.nodeInternal.parentNode.nodeType() === Node.DOCUMENT_NODE) {
            return;
        }
        void this.nodeInternal.removeNode();
    }
    toggleEditAsHTML(callback, startEditing) {
        if (this.editing && this.htmlEditElement) {
            this.editing.commit();
            return;
        }
        if (startEditing === false) {
            return;
        }
        function selectNode(error) {
            if (callback) {
                callback(!error);
            }
        }
        function commitChange(initialValue, value) {
            if (initialValue !== value) {
                node.setOuterHTML(value, selectNode);
            }
        }
        function disposeCallback() {
            if (callback) {
                callback(false);
            }
        }
        const node = this.nodeInternal;
        void node.getOuterHTML().then(this.startEditingAsHTML.bind(this, commitChange, disposeCallback));
    }
    copyCSSPath() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText((0,_DOMPath_js__WEBPACK_IMPORTED_MODULE_18__.cssPath)(this.nodeInternal, true));
    }
    copyJSPath() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText((0,_DOMPath_js__WEBPACK_IMPORTED_MODULE_18__.jsPath)(this.nodeInternal, true));
    }
    copyXPath() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText((0,_DOMPath_js__WEBPACK_IMPORTED_MODULE_18__.xPath)(this.nodeInternal, true));
    }
    copyFullXPath() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText((0,_DOMPath_js__WEBPACK_IMPORTED_MODULE_18__.xPath)(this.nodeInternal, false));
    }
    async copyStyles() {
        const node = this.nodeInternal;
        const cssModel = node.domModel().cssModel();
        const cascade = await cssModel.cachedMatchedCascadeForNode(node);
        if (!cascade) {
            return;
        }
        const indent = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').get();
        const lines = [];
        for (const style of cascade.nodeStyles().reverse()) {
            for (const property of style.leadingProperties()) {
                if (!property.parsedOk || property.disabled || !property.activeInStyle() || property.implicit) {
                    continue;
                }
                if (cascade.isInherited(style) && !_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSMetadata.cssMetadata().isPropertyInherited(property.name)) {
                    continue;
                }
                if (style.parentRule && style.parentRule.isUserAgent()) {
                    continue;
                }
                if (cascade.propertyState(property) !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSMatchedStyles.PropertyState.Active) {
                    continue;
                }
                lines.push(`${indent}${property.name}: ${property.value};`);
            }
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(lines.join('\n'));
    }
    highlightSearchResultsInternal() {
        this.hideSearchHighlights();
        if (!this.searchQuery) {
            return;
        }
        const text = this.listItemElement.textContent || '';
        const regexObject = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.createPlainTextSearchRegex(this.searchQuery, 'gi');
        const matchRanges = [];
        let match = regexObject.exec(text);
        while (match) {
            matchRanges.push(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_6__.TextRange.SourceRange(match.index, match[0].length));
            match = regexObject.exec(text);
        }
        // Fall back for XPath, etc. matches.
        if (!matchRanges.length) {
            matchRanges.push(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_6__.TextRange.SourceRange(0, text.length));
        }
        __classPrivateFieldSet(this, _ElementsTreeElement_highlights, _ui_components_highlighting_highlighting_js__WEBPACK_IMPORTED_MODULE_10__.HighlightManager.HighlightManager.instance().highlightOrderedTextRanges(this.listItemElement, matchRanges), "f");
    }
    editAsHTML() {
        const promise = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(this.node());
        void promise.then(() => {
            const action = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.ActionRegistry.ActionRegistry.instance().getAction('elements.edit-as-html');
            return action.execute();
        });
    }
    // TODO: add unit tests for adorner-related methods after component and TypeScript works are done
    adorn({ name }, content) {
        let adornerContent = content;
        if (!adornerContent) {
            adornerContent = document.createElement('span');
            adornerContent.textContent = name;
        }
        const adorner = new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_8__.Adorner.Adorner();
        adorner.data = {
            name,
            content: adornerContent,
            jslogContext: name,
        };
        if (isOpeningTag(this.tagTypeContext)) {
            this.tagTypeContext.adorners.push(adorner);
            _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_19__.ElementsPanel.instance().registerAdorner(adorner);
            this.updateAdorners(this.tagTypeContext);
        }
        return adorner;
    }
    adornSlot({ name }, context) {
        const linkIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_11__.Icon.Icon();
        linkIcon.name = 'select-element';
        const slotText = document.createElement('span');
        slotText.textContent = name;
        const adornerContent = document.createElement('span');
        adornerContent.append(linkIcon);
        adornerContent.append(slotText);
        adornerContent.classList.add('adorner-with-icon');
        const adorner = new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_8__.Adorner.Adorner();
        adorner.data = {
            name,
            content: adornerContent,
            jslogContext: 'slot',
        };
        context.adorners.push(adorner);
        _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_19__.ElementsPanel.instance().registerAdorner(adorner);
        this.updateAdorners(context);
        return adorner;
    }
    adornMedia({ name }) {
        const adornerContent = document.createElement('span');
        adornerContent.textContent = name;
        adornerContent.classList.add('adorner-with-icon');
        const linkIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_11__.Icon.Icon();
        linkIcon.name = 'select-element';
        adornerContent.append(linkIcon);
        const adorner = new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_8__.Adorner.Adorner();
        adorner.data = {
            name,
            content: adornerContent,
            jslogContext: 'media',
        };
        if (isOpeningTag(this.tagTypeContext)) {
            this.tagTypeContext.adorners.push(adorner);
            _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_19__.ElementsPanel.instance().registerAdorner(adorner);
            this.updateAdorners(this.tagTypeContext);
        }
        return adorner;
    }
    removeAdorner(adornerToRemove, context) {
        const adorners = context.adorners;
        _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_19__.ElementsPanel.instance().deregisterAdorner(adornerToRemove);
        adornerToRemove.remove();
        for (let i = 0; i < adorners.length; ++i) {
            if (adorners[i] === adornerToRemove) {
                adorners.splice(i, 1);
                this.updateAdorners(context);
                return;
            }
        }
    }
    removeAllAdorners() {
        if (isOpeningTag(this.tagTypeContext)) {
            for (const adorner of this.tagTypeContext.adorners) {
                _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_19__.ElementsPanel.instance().deregisterAdorner(adorner);
                adorner.remove();
            }
            this.tagTypeContext.adorners = [];
            this.updateAdorners(this.tagTypeContext);
        }
    }
    updateAdorners(context) {
        void context.adornersThrottler.schedule(this.updateAdornersInternal.bind(null, context));
    }
    updateAdornersInternal(context) {
        const adornerContainer = context.adornerContainer;
        if (!adornerContainer) {
            return Promise.resolve();
        }
        const adorners = context.adorners;
        if (adorners.length === 0) {
            adornerContainer.classList.add('hidden');
            return Promise.resolve();
        }
        adorners.sort(adornerComparator);
        adornerContainer.removeChildren();
        for (const adorner of adorners) {
            adornerContainer.appendChild(adorner);
        }
        adornerContainer.classList.remove('hidden');
        return Promise.resolve();
    }
    async updateStyleAdorners() {
        if (!isOpeningTag(this.tagTypeContext)) {
            return;
        }
        const node = this.node();
        const nodeId = node.id;
        if (node.nodeType() === Node.COMMENT_NODE || node.nodeType() === Node.DOCUMENT_FRAGMENT_NODE ||
            node.nodeType() === Node.TEXT_NODE || nodeId === undefined) {
            return;
        }
        const styles = await node.domModel().cssModel().getComputedStyle(nodeId);
        for (const styleAdorner of this.tagTypeContext.styleAdorners) {
            this.removeAdorner(styleAdorner, this.tagTypeContext);
        }
        this.tagTypeContext.styleAdorners = [];
        if (!styles) {
            return;
        }
        const display = styles.get('display');
        const isGrid = display === 'grid' || display === 'inline-grid';
        const isFlex = display === 'flex' || display === 'inline-flex';
        const isSubgrid = (isGrid &&
            (styles.get('grid-template-columns')?.startsWith('subgrid') ||
                styles.get('grid-template-rows')?.startsWith('subgrid'))) ??
            false;
        const containerType = styles.get('container-type');
        const contain = styles.get('contain');
        const isContainer = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSContainerQuery.getQueryAxis(`${containerType} ${contain}`) !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSContainerQuery.QueryAxis.None;
        if (isGrid) {
            this.pushGridAdorner(this.tagTypeContext, isSubgrid);
        }
        if (isFlex) {
            this.pushFlexAdorner(this.tagTypeContext);
        }
        if (styles.get('scroll-snap-type') && styles.get('scroll-snap-type') !== 'none') {
            this.pushScrollSnapAdorner(this.tagTypeContext);
        }
        if (isContainer) {
            this.pushContainerAdorner(this.tagTypeContext);
        }
        if (node.isMediaNode()) {
            this.pushMediaAdorner(this.tagTypeContext);
        }
    }
    pushGridAdorner(context, isSubgrid) {
        const node = this.node();
        const nodeId = node.id;
        if (!nodeId) {
            return;
        }
        const config = _components_components_js__WEBPACK_IMPORTED_MODULE_17__.AdornerManager.getRegisteredAdorner(isSubgrid ? _components_components_js__WEBPACK_IMPORTED_MODULE_17__.AdornerManager.RegisteredAdorners.SUBGRID :
            _components_components_js__WEBPACK_IMPORTED_MODULE_17__.AdornerManager.RegisteredAdorners.GRID);
        const adorner = this.adorn(config);
        adorner.classList.add('grid');
        const onClick = (() => {
            if (adorner.isActive()) {
                node.domModel().overlayModel().highlightGridInPersistentOverlay(nodeId);
            }
            else {
                node.domModel().overlayModel().hideGridInPersistentOverlay(nodeId);
            }
        });
        adorner.addInteraction(onClick, {
            isToggle: true,
            shouldPropagateOnKeydown: false,
            ariaLabelDefault: i18nString(UIStrings.enableGridMode),
            ariaLabelActive: i18nString(UIStrings.disableGridMode),
        });
        node.domModel().overlayModel().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.OverlayModel.Events.PersistentGridOverlayStateChanged, event => {
            const { nodeId: eventNodeId, enabled } = event.data;
            if (eventNodeId !== nodeId) {
                return;
            }
            adorner.toggle(enabled);
        });
        context.styleAdorners.push(adorner);
        if (node.domModel().overlayModel().isHighlightedGridInPersistentOverlay(nodeId)) {
            adorner.toggle(true);
        }
    }
    pushScrollSnapAdorner(context) {
        const node = this.node();
        const nodeId = node.id;
        if (!nodeId) {
            return;
        }
        const config = _components_components_js__WEBPACK_IMPORTED_MODULE_17__.AdornerManager.getRegisteredAdorner(_components_components_js__WEBPACK_IMPORTED_MODULE_17__.AdornerManager.RegisteredAdorners.SCROLL_SNAP);
        const adorner = this.adorn(config);
        adorner.classList.add('scroll-snap');
        const onClick = (() => {
            const model = node.domModel().overlayModel();
            if (adorner.isActive()) {
                model.highlightScrollSnapInPersistentOverlay(nodeId);
            }
            else {
                model.hideScrollSnapInPersistentOverlay(nodeId);
            }
        });
        adorner.addInteraction(onClick, {
            isToggle: true,
            shouldPropagateOnKeydown: false,
            ariaLabelDefault: i18nString(UIStrings.enableScrollSnap),
            ariaLabelActive: i18nString(UIStrings.disableScrollSnap),
        });
        node.domModel().overlayModel().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.OverlayModel.Events.PersistentScrollSnapOverlayStateChanged, event => {
            const { nodeId: eventNodeId, enabled } = event.data;
            if (eventNodeId !== nodeId) {
                return;
            }
            adorner.toggle(enabled);
        });
        context.styleAdorners.push(adorner);
        if (node.domModel().overlayModel().isHighlightedScrollSnapInPersistentOverlay(nodeId)) {
            adorner.toggle(true);
        }
    }
    pushFlexAdorner(context) {
        const node = this.node();
        const nodeId = node.id;
        if (!nodeId) {
            return;
        }
        const config = _components_components_js__WEBPACK_IMPORTED_MODULE_17__.AdornerManager.getRegisteredAdorner(_components_components_js__WEBPACK_IMPORTED_MODULE_17__.AdornerManager.RegisteredAdorners.FLEX);
        const adorner = this.adorn(config);
        adorner.classList.add('flex');
        const onClick = (() => {
            const model = node.domModel().overlayModel();
            if (adorner.isActive()) {
                model.highlightFlexContainerInPersistentOverlay(nodeId);
            }
            else {
                model.hideFlexContainerInPersistentOverlay(nodeId);
            }
        });
        adorner.addInteraction(onClick, {
            isToggle: true,
            shouldPropagateOnKeydown: false,
            ariaLabelDefault: i18nString(UIStrings.enableFlexMode),
            ariaLabelActive: i18nString(UIStrings.disableFlexMode),
        });
        node.domModel().overlayModel().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.OverlayModel.Events.PersistentFlexContainerOverlayStateChanged, event => {
            const { nodeId: eventNodeId, enabled } = event.data;
            if (eventNodeId !== nodeId) {
                return;
            }
            adorner.toggle(enabled);
        });
        context.styleAdorners.push(adorner);
        if (node.domModel().overlayModel().isHighlightedFlexContainerInPersistentOverlay(nodeId)) {
            adorner.toggle(true);
        }
    }
    pushContainerAdorner(context) {
        const node = this.node();
        const nodeId = node.id;
        if (!nodeId) {
            return;
        }
        const config = _components_components_js__WEBPACK_IMPORTED_MODULE_17__.AdornerManager.getRegisteredAdorner(_components_components_js__WEBPACK_IMPORTED_MODULE_17__.AdornerManager.RegisteredAdorners.CONTAINER);
        const adorner = this.adorn(config);
        adorner.classList.add('container');
        const onClick = (() => {
            const model = node.domModel().overlayModel();
            if (adorner.isActive()) {
                model.highlightContainerQueryInPersistentOverlay(nodeId);
            }
            else {
                model.hideContainerQueryInPersistentOverlay(nodeId);
            }
        });
        adorner.addInteraction(onClick, {
            isToggle: true,
            shouldPropagateOnKeydown: false,
            ariaLabelDefault: i18nString(UIStrings.enableScrollSnap),
            ariaLabelActive: i18nString(UIStrings.disableScrollSnap),
        });
        node.domModel().overlayModel().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.OverlayModel.Events.PersistentContainerQueryOverlayStateChanged, event => {
            const { nodeId: eventNodeId, enabled } = event.data;
            if (eventNodeId !== nodeId) {
                return;
            }
            adorner.toggle(enabled);
        });
        context.styleAdorners.push(adorner);
        if (node.domModel().overlayModel().isHighlightedContainerQueryInPersistentOverlay(nodeId)) {
            adorner.toggle(true);
        }
    }
    pushMediaAdorner(context) {
        const node = this.node();
        const nodeId = node.id;
        if (!nodeId) {
            return;
        }
        const config = _components_components_js__WEBPACK_IMPORTED_MODULE_17__.AdornerManager.getRegisteredAdorner(_components_components_js__WEBPACK_IMPORTED_MODULE_17__.AdornerManager.RegisteredAdorners.MEDIA);
        const adorner = this.adornMedia(config);
        adorner.classList.add('media');
        const onClick = (() => {
            void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.ViewManager.ViewManager.instance().showView('medias');
        });
        adorner.addInteraction(onClick, {
            isToggle: false,
            shouldPropagateOnKeydown: false,
            ariaLabelDefault: i18nString(UIStrings.openMediaPanel),
            ariaLabelActive: i18nString(UIStrings.openMediaPanel),
        });
        context.styleAdorners.push(adorner);
    }
}
_ElementsTreeElement_elementIssues = new WeakMap(), _ElementsTreeElement_nodeElementToIssue = new WeakMap(), _ElementsTreeElement_highlights = new WeakMap(), _ElementsTreeElement_instances = new WeakSet(), _ElementsTreeElement_applyIssueStyleAndTooltip = function _ElementsTreeElement_applyIssueStyleAndTooltip(issue) {
    const issueDetails = issue.details();
    if (issueDetails.violatingNodeAttribute) {
        __classPrivateFieldGet(this, _ElementsTreeElement_instances, "m", _ElementsTreeElement_highlightViolatingAttr).call(this, issueDetails.violatingNodeAttribute, issue);
    }
    else {
        __classPrivateFieldGet(this, _ElementsTreeElement_instances, "m", _ElementsTreeElement_highlightTagAsViolating).call(this, issue);
    }
}, _ElementsTreeElement_highlightViolatingAttr = function _ElementsTreeElement_highlightViolatingAttr(name, issue) {
    const tag = this.listItemElement.getElementsByClassName('webkit-html-tag')[0];
    const attributes = tag.getElementsByClassName('webkit-html-attribute');
    for (const attribute of attributes) {
        if (attribute.getElementsByClassName('webkit-html-attribute-name')[0].textContent === name) {
            const attributeElement = attribute.getElementsByClassName('webkit-html-attribute-name')[0];
            attributeElement.classList.add('violating-element');
            __classPrivateFieldGet(this, _ElementsTreeElement_nodeElementToIssue, "f").set(attributeElement, issue);
        }
    }
}, _ElementsTreeElement_highlightTagAsViolating = function _ElementsTreeElement_highlightTagAsViolating(issue) {
    const tagElement = this.listItemElement.getElementsByClassName('webkit-html-tag-name')[0];
    tagElement.classList.add('violating-element');
    __classPrivateFieldGet(this, _ElementsTreeElement_nodeElementToIssue, "f").set(tagElement, issue);
};
const InitialChildrenLimit = 500;
// A union of HTML4 and HTML5-Draft elements that explicitly
// or implicitly (for HTML5) forbid the closing tag.
const ForbiddenClosingTagElements = new Set([
    'area', 'base', 'basefont', 'br', 'canvas', 'col', 'command', 'embed', 'frame', 'hr',
    'img', 'input', 'keygen', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr',
]);
// These tags we do not allow editing their tag name.
const EditTagBlocklist = new Set(['html', 'head', 'body']);
function adornerComparator(adornerA, adornerB) {
    const compareCategories = _components_components_js__WEBPACK_IMPORTED_MODULE_17__.AdornerManager.compareAdornerNamesByCategory(adornerB.name, adornerB.name);
    if (compareCategories === 0) {
        return adornerA.name.localeCompare(adornerB.name);
    }
    return compareCategories;
}
// As a privacy measure we are logging elements tree outline as a flat list where every tree item is a
// child of a tree outline.
function loggingParentProvider(e) {
    const treeElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.TreeOutline.TreeElement.getTreeElementBylistItemNode(e);
    return treeElement?.treeOutline?.contentElement;
}
_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.registerParentProvider('elementsTreeOutline', loggingParentProvider);


/***/ }),

/***/ "./src/panels/elements/ElementsTreeElementHighlighter.ts":
/*!***************************************************************!*\
  !*** ./src/panels/elements/ElementsTreeElementHighlighter.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementsTreeElementHighlighter: () => (/* binding */ ElementsTreeElementHighlighter)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ElementsTreeElement.js */ "./src/panels/elements/ElementsTreeElement.ts");
/* harmony import */ var _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ElementsTreeOutline.js */ "./src/panels/elements/ElementsTreeOutline.ts");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





class ElementsTreeElementHighlighter {
    constructor(treeOutline, throttler) {
        Object.defineProperty(this, "throttler", {
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
        Object.defineProperty(this, "currentHighlightedElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "alreadyExpandedParentElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pendingHighlightNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isModifyingTreeOutline", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.throttler = throttler;
        this.treeOutline = treeOutline;
        this.treeOutline.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.Events.ElementExpanded, this.clearState, this);
        this.treeOutline.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.Events.ElementCollapsed, this.clearState, this);
        this.treeOutline.addEventListener(_ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_4__.ElementsTreeOutline.Events.SelectedNodeChanged, this.clearState, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.OverlayModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.Events.HighlightNodeRequested, this.highlightNode, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.OverlayModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.Events.InspectModeWillBeToggled, this.clearState, this, { scoped: true });
        this.currentHighlightedElement = null;
        this.alreadyExpandedParentElement = null;
        this.pendingHighlightNode = null;
        this.isModifyingTreeOutline = false;
    }
    highlightNode(event) {
        if (!_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('highlight-node-on-hover-in-overlay').get()) {
            return;
        }
        const domNode = event.data;
        void this.throttler.schedule(async () => {
            this.highlightNodeInternal(this.pendingHighlightNode);
            this.pendingHighlightNode = null;
        });
        this.pendingHighlightNode =
            this.treeOutline === _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_4__.ElementsTreeOutline.forDOMModel(domNode.domModel()) ? domNode : null;
    }
    highlightNodeInternal(node) {
        this.isModifyingTreeOutline = true;
        let treeElement = null;
        if (this.currentHighlightedElement) {
            let currentTreeElement = this.currentHighlightedElement;
            while (currentTreeElement && currentTreeElement !== this.alreadyExpandedParentElement) {
                if (currentTreeElement.expanded) {
                    currentTreeElement.collapse();
                }
                const parent = currentTreeElement.parent;
                currentTreeElement = parent instanceof _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_3__.ElementsTreeElement ? parent : null;
            }
        }
        this.currentHighlightedElement = null;
        this.alreadyExpandedParentElement = null;
        if (node) {
            let deepestExpandedParent = node;
            const treeElementByNode = this.treeOutline.treeElementByNode;
            const treeIsNotExpanded = (deepestExpandedParent) => {
                const element = treeElementByNode.get(deepestExpandedParent);
                return element ? !element.expanded : true;
            };
            while (deepestExpandedParent && treeIsNotExpanded(deepestExpandedParent)) {
                deepestExpandedParent = deepestExpandedParent.parentNode;
            }
            this.alreadyExpandedParentElement =
                deepestExpandedParent ? treeElementByNode.get(deepestExpandedParent) : this.treeOutline.rootElement();
            treeElement = this.treeOutline.createTreeElementFor(node);
        }
        this.currentHighlightedElement = treeElement;
        this.treeOutline.setHoverEffect(treeElement);
        if (treeElement) {
            treeElement.reveal(true);
        }
        this.isModifyingTreeOutline = false;
    }
    clearState() {
        if (this.isModifyingTreeOutline) {
            return;
        }
        this.currentHighlightedElement = null;
        this.alreadyExpandedParentElement = null;
        this.pendingHighlightNode = null;
    }
}


/***/ }),

/***/ "./src/panels/elements/ElementsTreeOutline.ts":
/*!****************************************************!*\
  !*** ./src/panels/elements/ElementsTreeOutline.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementsTreeOutline: () => (/* binding */ ElementsTreeOutline),
/* harmony export */   MappedCharToEntity: () => (/* binding */ MappedCharToEntity),
/* harmony export */   Renderer: () => (/* binding */ Renderer),
/* harmony export */   ShortcutTreeElement: () => (/* binding */ ShortcutTreeElement),
/* harmony export */   UpdateRecord: () => (/* binding */ UpdateRecord)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/adorners/adorners.js */ "./src/ui/components/adorners/adorners.ts");
/* harmony import */ var _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/components/code_highlighter/code_highlighter.js */ "./src/ui/components/code_highlighter/code_highlighter.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/components/issue_counter/issue_counter.js */ "./src/ui/components/issue_counter/issue_counter.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/elements/components/components.ts");
/* harmony import */ var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ElementsPanel.js */ "./src/panels/elements/ElementsPanel.ts");
/* harmony import */ var _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ElementsTreeElement.js */ "./src/panels/elements/ElementsTreeElement.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './elementsTreeOutline.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ImagePreviewPopover_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ImagePreviewPopover.js */ "./src/panels/elements/ImagePreviewPopover.ts");
/* harmony import */ var _TopLayerContainer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./TopLayerContainer.js */ "./src/panels/elements/TopLayerContainer.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
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
var _ElementsTreeOutline_instances, _ElementsTreeOutline_genericIssues, _ElementsTreeOutline_topLayerContainerByParent, _ElementsTreeOutline_issuesManager, _ElementsTreeOutline_popupHelper, _ElementsTreeOutline_nodeElementToIssue, _ElementsTreeOutline_issueCodeToTooltipTitle, _ElementsTreeOutline_onIssueEventReceived, _ElementsTreeOutline_onIssueAdded, _ElementsTreeOutline_addAllElementIssues, _ElementsTreeOutline_addTreeElementIssue;
/*
 * Copyright (C) 2007, 2008 Apple Inc.  All rights reserved.
 * Copyright (C) 2008 Matt Lilek <webkit@mattlilek.com>
 * Copyright (C) 2009 Joseph Pecoraro
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


















const UIStrings = {
    /**
     *@description ARIA accessible name in Elements Tree Outline of the Elements panel
     */
    pageDom: 'Page DOM',
    /**
     *@description A context menu item to store a value as a global variable the Elements Panel
     */
    storeAsGlobalVariable: 'Store as global variable',
    /**
     *@description Tree element expand all button element button text content in Elements Tree Outline of the Elements panel
     *@example {3} PH1
     */
    showAllNodesDMore: 'Show all nodes ({PH1} more)',
    /**
     *@description Link text content in Elements Tree Outline of the Elements panel
     */
    reveal: 'reveal',
    /**
     * @description A context menu item to open the badge settings pane
     */
    adornerSettings: 'Badge settings\u2026',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/elements/ElementsTreeOutline.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const elementsTreeOutlineByDOMModel = new WeakMap();
const populatedTreeElements = new Set();
class ElementsTreeOutline extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeOutline) {
    constructor(omitRootDOMNode, selectEnabled, hideGutter) {
        super();
        _ElementsTreeOutline_instances.add(this);
        Object.defineProperty(this, "treeElementByNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shadowRoot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "elementInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "includeRootDOMNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectEnabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "rootDOMNodeInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectedDOMNodeInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "visible", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "imagePreviewPopover", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "updateRecords", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "treeElementsBeingUpdated", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "decoratorExtensions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "showHTMLCommentsSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "multilineEditing", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "visibleWidthInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "clipboardNodeData", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isXMLMimeTypeInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "suppressRevealAndSelect", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "previousHoveredElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "treeElementBeingDragged", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dragOverTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "updateModifiedNodesTimeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _ElementsTreeOutline_genericIssues.set(this, []);
        _ElementsTreeOutline_topLayerContainerByParent.set(this, new Map());
        _ElementsTreeOutline_issuesManager.set(this, void 0);
        _ElementsTreeOutline_popupHelper.set(this, void 0);
        _ElementsTreeOutline_nodeElementToIssue.set(this, new Map());
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.isEnabled(_core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ExperimentName.HIGHLIGHT_ERRORS_ELEMENTS_PANEL)) {
            __classPrivateFieldSet(this, _ElementsTreeOutline_issuesManager, _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.IssuesManager.IssuesManager.instance(), "f");
            __classPrivateFieldGet(this, _ElementsTreeOutline_issuesManager, "f").addEventListener(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.IssuesManager.Events.IssueAdded, __classPrivateFieldGet(this, _ElementsTreeOutline_instances, "m", _ElementsTreeOutline_onIssueEventReceived), this);
            for (const issue of __classPrivateFieldGet(this, _ElementsTreeOutline_issuesManager, "f").issues()) {
                if (issue instanceof _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.GenericIssue.GenericIssue) {
                    __classPrivateFieldGet(this, _ElementsTreeOutline_instances, "m", _ElementsTreeOutline_onIssueAdded).call(this, issue);
                }
            }
        }
        this.treeElementByNode = new WeakMap();
        const shadowContainer = document.createElement('div');
        this.shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.createShadowRootWithCoreStyles(shadowContainer, { cssFile: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './elementsTreeOutline.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_7__.Style["default"]], delegatesFocus: undefined });
        const outlineDisclosureElement = this.shadowRoot.createChild('div', 'elements-disclosure');
        this.elementInternal = this.element;
        this.elementInternal.classList.add('elements-tree-outline', 'source-code');
        if (hideGutter) {
            this.elementInternal.classList.add('elements-hide-gutter');
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(this.elementInternal, i18nString(UIStrings.pageDom));
        this.elementInternal.addEventListener('focusout', this.onfocusout.bind(this), false);
        this.elementInternal.addEventListener('mousedown', this.onmousedown.bind(this), false);
        this.elementInternal.addEventListener('mousemove', this.onmousemove.bind(this), false);
        this.elementInternal.addEventListener('mouseleave', this.onmouseleave.bind(this), false);
        this.elementInternal.addEventListener('dragstart', this.ondragstart.bind(this), false);
        this.elementInternal.addEventListener('dragover', this.ondragover.bind(this), false);
        this.elementInternal.addEventListener('dragleave', this.ondragleave.bind(this), false);
        this.elementInternal.addEventListener('drop', this.ondrop.bind(this), false);
        this.elementInternal.addEventListener('dragend', this.ondragend.bind(this), false);
        this.elementInternal.addEventListener('contextmenu', this.contextMenuEventFired.bind(this), false);
        this.elementInternal.addEventListener('clipboard-beforecopy', this.onBeforeCopy.bind(this), false);
        this.elementInternal.addEventListener('clipboard-copy', this.onCopyOrCut.bind(this, false), false);
        this.elementInternal.addEventListener('clipboard-cut', this.onCopyOrCut.bind(this, true), false);
        this.elementInternal.addEventListener('clipboard-paste', this.onPaste.bind(this), false);
        this.elementInternal.addEventListener('keydown', this.onKeyDown.bind(this), false);
        outlineDisclosureElement.appendChild(this.elementInternal);
        this.element = shadowContainer;
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.tree('elements')}`);
        this.includeRootDOMNode = !omitRootDOMNode;
        this.selectEnabled = selectEnabled;
        this.rootDOMNodeInternal = null;
        this.selectedDOMNodeInternal = null;
        this.visible = false;
        this.imagePreviewPopover = new _ImagePreviewPopover_js__WEBPACK_IMPORTED_MODULE_16__.ImagePreviewPopover(this.contentElement, event => {
            let link = event.target;
            while (link && !_ImagePreviewPopover_js__WEBPACK_IMPORTED_MODULE_16__.ImagePreviewPopover.getImageURL(link)) {
                link = link.parentElementOrShadowHost();
            }
            return link;
        }, link => {
            const listItem = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.enclosingNodeOrSelfWithNodeName(link, 'li');
            if (!listItem) {
                return null;
            }
            const treeElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeElement.getTreeElementBylistItemNode(listItem);
            if (!treeElement) {
                return null;
            }
            return treeElement.node();
        });
        this.updateRecords = new Map();
        this.treeElementsBeingUpdated = new Set();
        this.decoratorExtensions = null;
        this.showHTMLCommentsSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-html-comments');
        this.showHTMLCommentsSetting.addChangeListener(this.onShowHTMLCommentsChange.bind(this));
        this.setUseLightSelectionColor(true);
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.isEnabled(_core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ExperimentName.HIGHLIGHT_ERRORS_ELEMENTS_PANEL)) {
            __classPrivateFieldSet(this, _ElementsTreeOutline_popupHelper, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.PopoverHelper.PopoverHelper(this.elementInternal, event => {
                const hoveredNode = event.composedPath()[0];
                if (!hoveredNode || !hoveredNode.matches('.violating-element')) {
                    return null;
                }
                const issue = __classPrivateFieldGet(this, _ElementsTreeOutline_nodeElementToIssue, "f").get(hoveredNode);
                if (!issue) {
                    return null;
                }
                const issueDetails = issue.details();
                const tooltipTitle = __classPrivateFieldGet(this, _ElementsTreeOutline_instances, "m", _ElementsTreeOutline_issueCodeToTooltipTitle).call(this, issueDetails.errorType);
                const issueKindIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon();
                issueKindIcon.data = _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_9__.IssueCounter.getIssueKindIconData(issue.getKind());
                issueKindIcon.style.cursor = 'pointer';
                const viewIssueElement = document.createElement('a');
                viewIssueElement.href = '#';
                viewIssueElement.textContent = 'View issue:';
                const issueTitle = document.createElement('span');
                issueTitle.textContent = tooltipTitle;
                const element = document.createElement('div');
                element.appendChild(issueKindIcon);
                element.appendChild(viewIssueElement);
                element.appendChild(issueTitle);
                element.style.display = 'flex';
                element.style.alignItems = 'center';
                element.style.gap = '5px';
                return {
                    box: hoveredNode.boxInWindow(),
                    show: async (popover) => {
                        popover.setIgnoreLeftMargin(true);
                        const openIssueEvent = () => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(issue);
                        viewIssueElement.addEventListener('click', () => openIssueEvent());
                        issueKindIcon.addEventListener('click', () => openIssueEvent());
                        popover.contentElement.appendChild(element);
                        return true;
                    },
                };
            }, 'elements.issue'), "f");
            __classPrivateFieldGet(this, _ElementsTreeOutline_popupHelper, "f").setTimeout(300);
            __classPrivateFieldGet(this, _ElementsTreeOutline_popupHelper, "f").setHasPadding(true);
        }
    }
    static forDOMModel(domModel) {
        return elementsTreeOutlineByDOMModel.get(domModel) || null;
    }
    onShowHTMLCommentsChange() {
        const selectedNode = this.selectedDOMNode();
        if (selectedNode && selectedNode.nodeType() === Node.COMMENT_NODE && !this.showHTMLCommentsSetting.get()) {
            this.selectDOMNode(selectedNode.parentNode);
        }
        this.update();
    }
    setWordWrap(wrap) {
        this.elementInternal.classList.toggle('elements-tree-nowrap', !wrap);
    }
    setMultilineEditing(multilineEditing) {
        this.multilineEditing = multilineEditing;
    }
    visibleWidth() {
        return this.visibleWidthInternal || 0;
    }
    setVisibleWidth(width) {
        this.visibleWidthInternal = width;
        if (this.multilineEditing) {
            this.multilineEditing.resize();
        }
    }
    setClipboardData(data) {
        if (this.clipboardNodeData) {
            const treeElement = this.findTreeElement(this.clipboardNodeData.node);
            if (treeElement) {
                treeElement.setInClipboard(false);
            }
            delete this.clipboardNodeData;
        }
        if (data) {
            const treeElement = this.findTreeElement(data.node);
            if (treeElement) {
                treeElement.setInClipboard(true);
            }
            this.clipboardNodeData = data;
        }
    }
    resetClipboardIfNeeded(removedNode) {
        if (this.clipboardNodeData && this.clipboardNodeData.node === removedNode) {
            this.setClipboardData(null);
        }
    }
    onBeforeCopy(event) {
        event.handled = true;
    }
    onCopyOrCut(isCut, event) {
        this.setClipboardData(null);
        // @ts-ignore this bound in the main entry point
        const originalEvent = event['original'];
        if (!originalEvent || !originalEvent.target) {
            return;
        }
        // Don't prevent the normal copy if the user has a selection.
        if (originalEvent.target instanceof Node && originalEvent.target.hasSelection()) {
            return;
        }
        // Do not interfere with text editing.
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.isEditing()) {
            return;
        }
        const targetNode = this.selectedDOMNode();
        if (!targetNode) {
            return;
        }
        if (!originalEvent.clipboardData) {
            return;
        }
        originalEvent.clipboardData.clearData();
        event.handled = true;
        this.performCopyOrCut(isCut, targetNode);
    }
    performCopyOrCut(isCut, node) {
        if (!node) {
            return;
        }
        if (isCut && (node.isShadowRoot() || node.ancestorUserAgentShadowRoot())) {
            return;
        }
        void node.copyNode();
        this.setClipboardData({ node: node, isCut: isCut });
    }
    canPaste(targetNode) {
        if (targetNode.isShadowRoot() || targetNode.ancestorUserAgentShadowRoot()) {
            return false;
        }
        if (!this.clipboardNodeData) {
            return false;
        }
        const node = this.clipboardNodeData.node;
        if (this.clipboardNodeData.isCut && (node === targetNode || node.isAncestor(targetNode))) {
            return false;
        }
        if (targetNode.domModel() !== node.domModel()) {
            return false;
        }
        return true;
    }
    pasteNode(targetNode) {
        if (this.canPaste(targetNode)) {
            this.performPaste(targetNode);
        }
    }
    duplicateNode(targetNode) {
        this.performDuplicate(targetNode);
    }
    onPaste(event) {
        // Do not interfere with text editing.
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.isEditing()) {
            return;
        }
        const targetNode = this.selectedDOMNode();
        if (!targetNode || !this.canPaste(targetNode)) {
            return;
        }
        event.handled = true;
        this.performPaste(targetNode);
    }
    performPaste(targetNode) {
        if (!this.clipboardNodeData) {
            return;
        }
        if (this.clipboardNodeData.isCut) {
            this.clipboardNodeData.node.moveTo(targetNode, null, expandCallback.bind(this));
            this.setClipboardData(null);
        }
        else {
            this.clipboardNodeData.node.copyTo(targetNode, null, expandCallback.bind(this));
        }
        function expandCallback(error, pastedNode) {
            if (error || !pastedNode) {
                return;
            }
            this.selectDOMNode(pastedNode);
        }
    }
    performDuplicate(targetNode) {
        if (targetNode.isInShadowTree()) {
            return;
        }
        const parentNode = targetNode.parentNode ? targetNode.parentNode : targetNode;
        if (parentNode.nodeName() === '#document') {
            return;
        }
        targetNode.copyTo(parentNode, targetNode.nextSibling);
    }
    setVisible(visible) {
        if (visible === this.visible) {
            return;
        }
        this.visible = visible;
        if (!this.visible) {
            this.imagePreviewPopover.hide();
            if (this.multilineEditing) {
                this.multilineEditing.cancel();
            }
            return;
        }
        this.runPendingUpdates();
        if (this.selectedDOMNodeInternal) {
            this.revealAndSelectNode(this.selectedDOMNodeInternal, false);
        }
    }
    get rootDOMNode() {
        return this.rootDOMNodeInternal;
    }
    set rootDOMNode(x) {
        if (this.rootDOMNodeInternal === x) {
            return;
        }
        this.rootDOMNodeInternal = x;
        this.isXMLMimeTypeInternal = x && x.isXMLNode();
        this.update();
    }
    get isXMLMimeType() {
        return Boolean(this.isXMLMimeTypeInternal);
    }
    selectedDOMNode() {
        return this.selectedDOMNodeInternal;
    }
    selectDOMNode(node, focus) {
        if (this.selectedDOMNodeInternal === node) {
            this.revealAndSelectNode(node, !focus);
            return;
        }
        this.selectedDOMNodeInternal = node;
        this.revealAndSelectNode(node, !focus);
        // The revealAndSelectNode() method might find a different element if there is inlined text,
        // and the select() call would change the selectedDOMNode and reenter this setter. So to
        // avoid calling selectedNodeChanged() twice, first check if selectedDOMNodeInternal is the same
        // node as the one passed in.
        if (this.selectedDOMNodeInternal === node) {
            this.selectedNodeChanged(Boolean(focus));
        }
    }
    editing() {
        const node = this.selectedDOMNode();
        if (!node) {
            return false;
        }
        const treeElement = this.findTreeElement(node);
        if (!treeElement) {
            return false;
        }
        return treeElement.isEditing() || false;
    }
    update() {
        const selectedNode = this.selectedDOMNode();
        this.removeChildren();
        if (!this.rootDOMNode) {
            return;
        }
        if (this.includeRootDOMNode) {
            const treeElement = this.createElementTreeElement(this.rootDOMNode);
            this.appendChild(treeElement);
        }
        else {
            // FIXME: this could use findTreeElement to reuse a tree element if it already exists
            const children = this.visibleChildren(this.rootDOMNode);
            for (const child of children) {
                const treeElement = this.createElementTreeElement(child);
                this.appendChild(treeElement);
            }
        }
        if (this.rootDOMNode instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMDocument) {
            void this.createTopLayerContainer(this.rootElement(), this.rootDOMNode);
        }
        if (selectedNode) {
            this.revealAndSelectNode(selectedNode, true);
        }
    }
    selectedNodeChanged(focus) {
        this.dispatchEventToListeners(ElementsTreeOutline.Events.SelectedNodeChanged, { node: this.selectedDOMNodeInternal, focus: focus });
    }
    fireElementsTreeUpdated(nodes) {
        this.dispatchEventToListeners(ElementsTreeOutline.Events.ElementsTreeUpdated, nodes);
    }
    findTreeElement(node) {
        let treeElement = this.lookUpTreeElement(node);
        if (!treeElement && node.nodeType() === Node.TEXT_NODE) {
            // The text node might have been inlined if it was short, so try to find the parent element.
            treeElement = this.lookUpTreeElement(node.parentNode);
        }
        return treeElement;
    }
    lookUpTreeElement(node) {
        if (!node) {
            return null;
        }
        const cachedElement = this.treeElementByNode.get(node);
        if (cachedElement) {
            return cachedElement;
        }
        // Walk up the parent pointers from the desired node
        const ancestors = [];
        let currentNode;
        for (currentNode = node.parentNode; currentNode; currentNode = currentNode.parentNode) {
            ancestors.push(currentNode);
            if (this.treeElementByNode.has(currentNode)) { // stop climbing as soon as we hit
                break;
            }
        }
        if (!currentNode) {
            return null;
        }
        // Walk down to populate each ancestor's children, to fill in the tree and the cache.
        for (let i = ancestors.length - 1; i >= 0; --i) {
            const child = ancestors[i - 1] || node;
            const treeElement = this.treeElementByNode.get(ancestors[i]);
            if (treeElement) {
                void treeElement.onpopulate(); // fill the cache with the children of treeElement
                if (child.index && child.index >= treeElement.expandedChildrenLimit()) {
                    this.setExpandedChildrenLimit(treeElement, child.index + 1);
                }
            }
        }
        return this.treeElementByNode.get(node) || null;
    }
    createTreeElementFor(node) {
        let treeElement = this.findTreeElement(node);
        if (treeElement) {
            return treeElement;
        }
        if (!node.parentNode) {
            return null;
        }
        treeElement = this.createTreeElementFor(node.parentNode);
        return treeElement ? this.showChild(treeElement, node) : null;
    }
    revealAndSelectNode(node, omitFocus) {
        if (this.suppressRevealAndSelect) {
            return;
        }
        if (!this.includeRootDOMNode && node === this.rootDOMNode && this.rootDOMNode) {
            node = this.rootDOMNode.firstChild;
        }
        if (!node) {
            return;
        }
        const treeElement = this.createTreeElementFor(node);
        if (!treeElement) {
            return;
        }
        treeElement.revealAndSelect(omitFocus);
    }
    treeElementFromEventInternal(event) {
        const scrollContainer = this.element.parentElement;
        if (!scrollContainer) {
            return null;
        }
        const x = event.pageX;
        const y = event.pageY;
        // Our list items have 1-pixel cracks between them vertically. We avoid
        // the cracks by checking slightly above and slightly below the mouse
        // and seeing if we hit the same element each time.
        const elementUnderMouse = this.treeElementFromPoint(x, y);
        const elementAboveMouse = this.treeElementFromPoint(x, y - 2);
        let element;
        if (elementUnderMouse === elementAboveMouse) {
            element = elementUnderMouse;
        }
        else {
            element = this.treeElementFromPoint(x, y + 2);
        }
        return element;
    }
    onfocusout(_event) {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
    }
    onmousedown(event) {
        const element = this.treeElementFromEventInternal(event);
        if (element) {
            element.select();
        }
    }
    setHoverEffect(treeElement) {
        if (this.previousHoveredElement === treeElement) {
            return;
        }
        if (this.previousHoveredElement instanceof _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_14__.ElementsTreeElement) {
            this.previousHoveredElement.hovered = false;
            delete this.previousHoveredElement;
        }
        if (treeElement instanceof _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_14__.ElementsTreeElement) {
            treeElement.hovered = true;
            this.previousHoveredElement = treeElement;
        }
    }
    onmousemove(event) {
        const element = this.treeElementFromEventInternal(event);
        if (element && this.previousHoveredElement === element) {
            return;
        }
        this.setHoverEffect(element);
        this.highlightTreeElement(element, !_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.KeyboardShortcut.KeyboardShortcut.eventHasEitherCtrlOrMeta(event));
    }
    highlightTreeElement(element, showInfo) {
        if (element instanceof _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_14__.ElementsTreeElement) {
            element.node().domModel().overlayModel().highlightInOverlay({ node: element.node(), selectorList: undefined }, 'all', showInfo);
            return;
        }
        if (element instanceof ShortcutTreeElement) {
            element.domModel().overlayModel().highlightInOverlay({ deferredNode: element.deferredNode(), selectorList: undefined }, 'all', showInfo);
        }
    }
    onmouseleave(_event) {
        this.setHoverEffect(null);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
    }
    ondragstart(event) {
        const node = event.target;
        if (!node || node.hasSelection()) {
            return false;
        }
        if (node.nodeName === 'A') {
            return false;
        }
        const treeElement = this.validDragSourceOrTarget(this.treeElementFromEventInternal(event));
        if (!treeElement) {
            return false;
        }
        if (treeElement.node().nodeName() === 'BODY' || treeElement.node().nodeName() === 'HEAD') {
            return false;
        }
        if (!event.dataTransfer || !treeElement.listItemElement.textContent) {
            return;
        }
        event.dataTransfer.setData('text/plain', treeElement.listItemElement.textContent.replace(/\u200b/g, ''));
        event.dataTransfer.effectAllowed = 'copyMove';
        this.treeElementBeingDragged = treeElement;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        return true;
    }
    ondragover(event) {
        if (!this.treeElementBeingDragged) {
            return false;
        }
        const treeElement = this.validDragSourceOrTarget(this.treeElementFromEventInternal(event));
        if (!treeElement) {
            return false;
        }
        let node = treeElement.node();
        while (node) {
            if (node === this.treeElementBeingDragged.nodeInternal) {
                return false;
            }
            node = node.parentNode;
        }
        treeElement.listItemElement.classList.add('elements-drag-over');
        this.dragOverTreeElement = treeElement;
        event.preventDefault();
        if (event.dataTransfer) {
            event.dataTransfer.dropEffect = 'move';
        }
        return false;
    }
    ondragleave(event) {
        this.clearDragOverTreeElementMarker();
        event.preventDefault();
        return false;
    }
    validDragSourceOrTarget(treeElement) {
        if (!treeElement) {
            return null;
        }
        if (!(treeElement instanceof _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_14__.ElementsTreeElement)) {
            return null;
        }
        const elementsTreeElement = treeElement;
        const node = elementsTreeElement.node();
        if (!node.parentNode || node.parentNode.nodeType() !== Node.ELEMENT_NODE) {
            return null;
        }
        return elementsTreeElement;
    }
    ondrop(event) {
        event.preventDefault();
        const treeElement = this.treeElementFromEventInternal(event);
        if (treeElement instanceof _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_14__.ElementsTreeElement) {
            this.doMove(treeElement);
        }
    }
    doMove(treeElement) {
        if (!this.treeElementBeingDragged) {
            return;
        }
        let parentNode;
        let anchorNode;
        if (treeElement.isClosingTag()) {
            // Drop onto closing tag -> insert as last child.
            parentNode = treeElement.node();
            anchorNode = null;
        }
        else {
            const dragTargetNode = treeElement.node();
            parentNode = dragTargetNode.parentNode;
            anchorNode = dragTargetNode;
        }
        if (!parentNode) {
            return;
        }
        const wasExpanded = this.treeElementBeingDragged.expanded;
        this.treeElementBeingDragged.nodeInternal.moveTo(parentNode, anchorNode, this.selectNodeAfterEdit.bind(this, wasExpanded));
        delete this.treeElementBeingDragged;
    }
    ondragend(event) {
        event.preventDefault();
        this.clearDragOverTreeElementMarker();
        delete this.treeElementBeingDragged;
    }
    clearDragOverTreeElementMarker() {
        if (this.dragOverTreeElement) {
            this.dragOverTreeElement.listItemElement.classList.remove('elements-drag-over');
            delete this.dragOverTreeElement;
        }
    }
    contextMenuEventFired(event) {
        const treeElement = this.treeElementFromEventInternal(event);
        if (treeElement instanceof _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_14__.ElementsTreeElement) {
            this.showContextMenu(treeElement, event);
        }
    }
    showContextMenu(treeElement, event) {
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.isEditing()) {
            return;
        }
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ContextMenu.ContextMenu(event);
        const isPseudoElement = Boolean(treeElement.node().pseudoType());
        const isTag = treeElement.node().nodeType() === Node.ELEMENT_NODE && !isPseudoElement;
        const node = event.target;
        if (!node) {
            return;
        }
        let textNode = node.enclosingNodeOrSelfWithClass('webkit-html-text-node');
        if (textNode && textNode.classList.contains('bogus')) {
            textNode = null;
        }
        const commentNode = node.enclosingNodeOrSelfWithClass('webkit-html-comment');
        contextMenu.saveSection().appendItem(i18nString(UIStrings.storeAsGlobalVariable), this.saveNodeToTempVariable.bind(this, treeElement.node()), { jslogContext: 'store-as-global-variable' });
        if (textNode) {
            treeElement.populateTextContextMenu(contextMenu, textNode);
        }
        else if (isTag) {
            treeElement.populateTagContextMenu(contextMenu, event);
        }
        else if (commentNode) {
            treeElement.populateNodeContextMenu(contextMenu);
        }
        else if (isPseudoElement) {
            treeElement.populatePseudoElementContextMenu(contextMenu);
        }
        contextMenu.viewSection().appendItem(i18nString(UIStrings.adornerSettings), () => {
            _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_13__.ElementsPanel.instance().showAdornerSettingsPane();
        }, { jslogContext: 'show-adorner-settings' });
        contextMenu.appendApplicableItems(treeElement.node());
        void contextMenu.show();
    }
    async saveNodeToTempVariable(node) {
        const remoteObjectForConsole = await node.resolveToObject();
        const consoleModel = remoteObjectForConsole?.runtimeModel().target()?.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.ConsoleModel);
        await consoleModel?.saveToTempVariable(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeModel.ExecutionContext), remoteObjectForConsole);
    }
    runPendingUpdates() {
        this.updateModifiedNodes();
    }
    onKeyDown(event) {
        const keyboardEvent = event;
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.isEditing()) {
            return;
        }
        const node = this.selectedDOMNode();
        if (!node) {
            return;
        }
        const treeElement = this.treeElementByNode.get(node);
        if (!treeElement) {
            return;
        }
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(keyboardEvent) && node.parentNode) {
            if (keyboardEvent.key === 'ArrowUp' && node.previousSibling) {
                node.moveTo(node.parentNode, node.previousSibling, this.selectNodeAfterEdit.bind(this, treeElement.expanded));
                keyboardEvent.consume(true);
                return;
            }
            if (keyboardEvent.key === 'ArrowDown' && node.nextSibling) {
                node.moveTo(node.parentNode, node.nextSibling.nextSibling, this.selectNodeAfterEdit.bind(this, treeElement.expanded));
                keyboardEvent.consume(true);
                return;
            }
        }
    }
    toggleEditAsHTML(node, startEditing, callback) {
        const treeElement = this.treeElementByNode.get(node);
        if (!treeElement || !treeElement.hasEditableNode()) {
            return;
        }
        if (node.pseudoType()) {
            return;
        }
        const parentNode = node.parentNode;
        const index = node.index;
        const wasExpanded = treeElement.expanded;
        treeElement.toggleEditAsHTML(editingFinished.bind(this), startEditing);
        function editingFinished(success) {
            if (callback) {
                callback();
            }
            if (!success) {
                return;
            }
            // Select it and expand if necessary. We force tree update so that it processes dom events and is up to date.
            this.runPendingUpdates();
            if (!index) {
                return;
            }
            const children = parentNode && parentNode.children();
            const newNode = children ? children[index] || parentNode : parentNode;
            if (!newNode) {
                return;
            }
            this.selectDOMNode(newNode, true);
            if (wasExpanded) {
                const newTreeItem = this.findTreeElement(newNode);
                if (newTreeItem) {
                    newTreeItem.expand();
                }
            }
        }
    }
    selectNodeAfterEdit(wasExpanded, error, newNode) {
        if (error) {
            return null;
        }
        // Select it and expand if necessary. We force tree update so that it processes dom events and is up to date.
        this.runPendingUpdates();
        if (!newNode) {
            return null;
        }
        this.selectDOMNode(newNode, true);
        const newTreeItem = this.findTreeElement(newNode);
        if (wasExpanded) {
            if (newTreeItem) {
                newTreeItem.expand();
            }
        }
        return newTreeItem;
    }
    /**
     * Runs a script on the node's remote object that toggles a class name on
     * the node and injects a stylesheet into the head of the node's document
     * containing a rule to set "visibility: hidden" on the class and all it's
     * ancestors.
     */
    async toggleHideElement(node) {
        const pseudoType = node.pseudoType();
        const effectiveNode = pseudoType ? node.parentNode : node;
        if (!effectiveNode) {
            return;
        }
        const hidden = node.marker('hidden-marker');
        const object = await effectiveNode.resolveToObject('');
        if (!object) {
            return;
        }
        await object.callFunction(toggleClassAndInjectStyleRule, [{ value: pseudoType }, { value: !hidden }]);
        object.release();
        node.setMarker('hidden-marker', hidden ? null : true);
        function toggleClassAndInjectStyleRule(pseudoType, hidden) {
            const classNamePrefix = '__web-inspector-hide';
            const classNameSuffix = '-shortcut__';
            const styleTagId = '__web-inspector-hide-shortcut-style__';
            const selectors = [];
            selectors.push('.__web-inspector-hide-shortcut__');
            selectors.push('.__web-inspector-hide-shortcut__ *');
            selectors.push('.__web-inspector-hidebefore-shortcut__::before');
            selectors.push('.__web-inspector-hideafter-shortcut__::after');
            const selector = selectors.join(', ');
            const ruleBody = '    visibility: hidden !important;';
            const rule = '\n' + selector + '\n{\n' + ruleBody + '\n}\n';
            const className = classNamePrefix + (pseudoType || '') + classNameSuffix;
            this.classList.toggle(className, hidden);
            let localRoot = this;
            while (localRoot.parentNode) {
                localRoot = localRoot.parentNode;
            }
            if (localRoot.nodeType === Node.DOCUMENT_NODE) {
                localRoot = document.head;
            }
            let style = localRoot.querySelector('style#' + styleTagId);
            if (style) {
                return;
            }
            style = document.createElement('style');
            style.id = styleTagId;
            style.textContent = rule;
            localRoot.appendChild(style);
        }
    }
    isToggledToHidden(node) {
        return Boolean(node.marker('hidden-marker'));
    }
    reset() {
        this.rootDOMNode = null;
        this.selectDOMNode(null, false);
        this.imagePreviewPopover.hide();
        delete this.clipboardNodeData;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        this.updateRecords.clear();
    }
    wireToDOMModel(domModel) {
        elementsTreeOutlineByDOMModel.set(domModel, this);
        domModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.MarkersChanged, this.markersChanged, this);
        domModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.NodeInserted, this.nodeInserted, this);
        domModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.NodeRemoved, this.nodeRemoved, this);
        domModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.AttrModified, this.attributeModified, this);
        domModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.AttrRemoved, this.attributeRemoved, this);
        domModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.CharacterDataModified, this.characterDataModified, this);
        domModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.DocumentUpdated, this.documentUpdated, this);
        domModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.ChildNodeCountUpdated, this.childNodeCountUpdated, this);
        domModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.DistributedNodesChanged, this.distributedNodesChanged, this);
        domModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.TopLayerElementsChanged, this.topLayerElementsChanged, this);
    }
    unwireFromDOMModel(domModel) {
        domModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.MarkersChanged, this.markersChanged, this);
        domModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.NodeInserted, this.nodeInserted, this);
        domModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.NodeRemoved, this.nodeRemoved, this);
        domModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.AttrModified, this.attributeModified, this);
        domModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.AttrRemoved, this.attributeRemoved, this);
        domModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.CharacterDataModified, this.characterDataModified, this);
        domModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.DocumentUpdated, this.documentUpdated, this);
        domModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.ChildNodeCountUpdated, this.childNodeCountUpdated, this);
        domModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.DistributedNodesChanged, this.distributedNodesChanged, this);
        domModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.TopLayerElementsChanged, this.topLayerElementsChanged, this);
        elementsTreeOutlineByDOMModel.delete(domModel);
    }
    addUpdateRecord(node) {
        let record = this.updateRecords.get(node);
        if (!record) {
            record = new UpdateRecord();
            this.updateRecords.set(node, record);
        }
        return record;
    }
    updateRecordForHighlight(node) {
        if (!this.visible) {
            return null;
        }
        return this.updateRecords.get(node) || null;
    }
    documentUpdated(event) {
        const domModel = event.data;
        this.reset();
        if (domModel.existingDocument()) {
            this.rootDOMNode = domModel.existingDocument();
            if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.isEnabled(_core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ExperimentName.HIGHLIGHT_ERRORS_ELEMENTS_PANEL)) {
                __classPrivateFieldGet(this, _ElementsTreeOutline_instances, "m", _ElementsTreeOutline_addAllElementIssues).call(this);
            }
        }
    }
    attributeModified(event) {
        const { node } = event.data;
        this.addUpdateRecord(node).attributeModified(event.data.name);
        this.updateModifiedNodesSoon();
    }
    attributeRemoved(event) {
        const { node } = event.data;
        this.addUpdateRecord(node).attributeRemoved(event.data.name);
        this.updateModifiedNodesSoon();
    }
    characterDataModified(event) {
        const node = event.data;
        this.addUpdateRecord(node).charDataModified();
        // Text could be large and force us to render itself as the child in the tree outline.
        if (node.parentNode && node.parentNode.firstChild === node.parentNode.lastChild) {
            this.addUpdateRecord(node.parentNode).childrenModified();
        }
        this.updateModifiedNodesSoon();
    }
    nodeInserted(event) {
        const node = event.data;
        this.addUpdateRecord(node.parentNode).nodeInserted(node);
        this.updateModifiedNodesSoon();
    }
    nodeRemoved(event) {
        const { node, parent } = event.data;
        this.resetClipboardIfNeeded(node);
        this.addUpdateRecord(parent).nodeRemoved(node);
        this.updateModifiedNodesSoon();
    }
    childNodeCountUpdated(event) {
        const node = event.data;
        this.addUpdateRecord(node).childrenModified();
        this.updateModifiedNodesSoon();
    }
    distributedNodesChanged(event) {
        const node = event.data;
        this.addUpdateRecord(node).childrenModified();
        this.updateModifiedNodesSoon();
    }
    updateModifiedNodesSoon() {
        if (!this.updateRecords.size) {
            return;
        }
        if (this.updateModifiedNodesTimeout) {
            return;
        }
        this.updateModifiedNodesTimeout = window.setTimeout(this.updateModifiedNodes.bind(this), 50);
    }
    updateModifiedNodes() {
        if (this.updateModifiedNodesTimeout) {
            clearTimeout(this.updateModifiedNodesTimeout);
            delete this.updateModifiedNodesTimeout;
        }
        const updatedNodes = [...this.updateRecords.keys()];
        const hidePanelWhileUpdating = updatedNodes.length > 10;
        let treeOutlineContainerElement;
        let originalScrollTop;
        if (hidePanelWhileUpdating) {
            treeOutlineContainerElement = this.element.parentNode;
            originalScrollTop = treeOutlineContainerElement ? treeOutlineContainerElement.scrollTop : 0;
            this.elementInternal.classList.add('hidden');
        }
        const rootNodeUpdateRecords = this.rootDOMNodeInternal && this.updateRecords.get(this.rootDOMNodeInternal);
        if (rootNodeUpdateRecords && rootNodeUpdateRecords.hasChangedChildren()) {
            // Document's children have changed, perform total update.
            this.update();
        }
        else {
            for (const [node, record] of this.updateRecords) {
                if (record.hasChangedChildren()) {
                    this.updateModifiedParentNode(node);
                }
                else {
                    this.updateModifiedNode(node);
                }
            }
        }
        if (hidePanelWhileUpdating) {
            this.elementInternal.classList.remove('hidden');
            if (treeOutlineContainerElement && originalScrollTop) {
                treeOutlineContainerElement.scrollTop = originalScrollTop;
            }
        }
        this.updateRecords.clear();
        this.fireElementsTreeUpdated(updatedNodes);
    }
    updateModifiedNode(node) {
        const treeElement = this.findTreeElement(node);
        if (treeElement) {
            treeElement.updateTitle(this.updateRecordForHighlight(node));
        }
    }
    updateModifiedParentNode(node) {
        const parentTreeElement = this.findTreeElement(node);
        if (parentTreeElement) {
            parentTreeElement.setExpandable(this.hasVisibleChildren(node));
            parentTreeElement.updateTitle(this.updateRecordForHighlight(node));
            if (populatedTreeElements.has(parentTreeElement)) {
                this.updateChildren(parentTreeElement);
            }
        }
    }
    populateTreeElement(treeElement) {
        if (treeElement.childCount() || !treeElement.isExpandable()) {
            return Promise.resolve();
        }
        return new Promise(resolve => {
            treeElement.node().getChildNodes(() => {
                populatedTreeElements.add(treeElement);
                this.updateModifiedParentNode(treeElement.node());
                resolve();
            });
        });
    }
    async createTopLayerContainer(parent, document) {
        if (!parent.treeOutline || !(parent.treeOutline instanceof ElementsTreeOutline)) {
            return;
        }
        const container = new _TopLayerContainer_js__WEBPACK_IMPORTED_MODULE_17__.TopLayerContainer(parent.treeOutline, document);
        await container.throttledUpdateTopLayerElements();
        if (container.currentTopLayerDOMNodes.size > 0) {
            parent.appendChild(container);
        }
        __classPrivateFieldGet(this, _ElementsTreeOutline_topLayerContainerByParent, "f").set(parent, container);
    }
    createElementTreeElement(node, isClosingTag) {
        const treeElement = new _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_14__.ElementsTreeElement(node, isClosingTag);
        treeElement.setExpandable(!isClosingTag && this.hasVisibleChildren(node));
        if (node.nodeType() === Node.ELEMENT_NODE && node.parentNode && node.parentNode.nodeType() === Node.DOCUMENT_NODE &&
            !node.parentNode.parentNode) {
            treeElement.setCollapsible(false);
        }
        if (node.hasAssignedSlot()) {
            treeElement.createSlotLink(node.assignedSlot);
        }
        treeElement.selectable = Boolean(this.selectEnabled);
        return treeElement;
    }
    showChild(treeElement, child) {
        if (treeElement.isClosingTag()) {
            return null;
        }
        const index = this.visibleChildren(treeElement.node()).indexOf(child);
        if (index === -1) {
            return null;
        }
        if (index >= treeElement.expandedChildrenLimit()) {
            this.setExpandedChildrenLimit(treeElement, index + 1);
        }
        return treeElement.childAt(index);
    }
    visibleChildren(node) {
        let visibleChildren = _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_14__.ElementsTreeElement.visibleShadowRoots(node);
        const contentDocument = node.contentDocument();
        if (contentDocument) {
            visibleChildren.push(contentDocument);
        }
        const templateContent = node.templateContent();
        if (templateContent) {
            visibleChildren.push(templateContent);
        }
        visibleChildren.push(...node.viewTransitionPseudoElements());
        const markerPseudoElement = node.markerPseudoElement();
        if (markerPseudoElement) {
            visibleChildren.push(markerPseudoElement);
        }
        const beforePseudoElement = node.beforePseudoElement();
        if (beforePseudoElement) {
            visibleChildren.push(beforePseudoElement);
        }
        if (node.childNodeCount()) {
            // Children may be stale when the outline is not wired to receive DOMModel updates.
            let children = node.children() || [];
            if (!this.showHTMLCommentsSetting.get()) {
                children = children.filter(n => n.nodeType() !== Node.COMMENT_NODE);
            }
            visibleChildren = visibleChildren.concat(children);
        }
        const afterPseudoElement = node.afterPseudoElement();
        if (afterPseudoElement) {
            visibleChildren.push(afterPseudoElement);
        }
        const backdropPseudoElement = node.backdropPseudoElement();
        if (backdropPseudoElement) {
            visibleChildren.push(backdropPseudoElement);
        }
        return visibleChildren;
    }
    hasVisibleChildren(node) {
        if (node.isIframe()) {
            return true;
        }
        if (node.contentDocument()) {
            return true;
        }
        if (node.templateContent()) {
            return true;
        }
        if (_ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_14__.ElementsTreeElement.visibleShadowRoots(node).length) {
            return true;
        }
        if (node.hasPseudoElements()) {
            return true;
        }
        if (node.isInsertionPoint()) {
            return true;
        }
        return Boolean(node.childNodeCount()) && !_ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_14__.ElementsTreeElement.canShowInlineText(node);
    }
    createExpandAllButtonTreeElement(treeElement) {
        const button = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.createTextButton('', handleLoadAllChildren.bind(this));
        button.value = '';
        const expandAllButtonElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeElement(button);
        expandAllButtonElement.selectable = false;
        expandAllButtonElement.button = button;
        return expandAllButtonElement;
        function handleLoadAllChildren(event) {
            const visibleChildCount = this.visibleChildren(treeElement.node()).length;
            this.setExpandedChildrenLimit(treeElement, Math.max(visibleChildCount, treeElement.expandedChildrenLimit() + _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_14__.InitialChildrenLimit));
            event.consume();
        }
    }
    setExpandedChildrenLimit(treeElement, expandedChildrenLimit) {
        if (treeElement.expandedChildrenLimit() === expandedChildrenLimit) {
            return;
        }
        treeElement.setExpandedChildrenLimit(expandedChildrenLimit);
        if (treeElement.treeOutline && !this.treeElementsBeingUpdated.has(treeElement)) {
            this.updateModifiedParentNode(treeElement.node());
        }
    }
    updateChildren(treeElement) {
        if (!treeElement.isExpandable()) {
            if (!treeElement.treeOutline) {
                return;
            }
            const selectedTreeElement = treeElement.treeOutline.selectedTreeElement;
            if (selectedTreeElement && selectedTreeElement.hasAncestor(treeElement)) {
                treeElement.select(true);
            }
            treeElement.removeChildren();
            return;
        }
        console.assert(!treeElement.isClosingTag());
        this.innerUpdateChildren(treeElement);
    }
    insertChildElement(treeElement, child, index, isClosingTag) {
        const newElement = this.createElementTreeElement(child, isClosingTag);
        treeElement.insertChild(newElement, index);
        if (child instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMDocument) {
            void this.createTopLayerContainer(newElement, child);
        }
        return newElement;
    }
    moveChild(treeElement, child, targetIndex) {
        if (treeElement.indexOfChild(child) === targetIndex) {
            return;
        }
        const wasSelected = child.selected;
        if (child.parent) {
            child.parent.removeChild(child);
        }
        treeElement.insertChild(child, targetIndex);
        if (wasSelected) {
            child.select();
        }
    }
    innerUpdateChildren(treeElement) {
        if (this.treeElementsBeingUpdated.has(treeElement)) {
            return;
        }
        this.treeElementsBeingUpdated.add(treeElement);
        const node = treeElement.node();
        const visibleChildren = this.visibleChildren(node);
        const visibleChildrenSet = new Set(visibleChildren);
        // Remove any tree elements that no longer have this node as their parent and save
        // all existing elements that could be reused. This also removes closing tag element.
        const existingTreeElements = new Map();
        for (let i = treeElement.childCount() - 1; i >= 0; --i) {
            const existingTreeElement = treeElement.childAt(i);
            if (!(existingTreeElement instanceof _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_14__.ElementsTreeElement)) {
                // Remove expand all button and shadow host toolbar.
                treeElement.removeChildAtIndex(i);
                continue;
            }
            const elementsTreeElement = existingTreeElement;
            const existingNode = elementsTreeElement.node();
            if (visibleChildrenSet.has(existingNode)) {
                existingTreeElements.set(existingNode, existingTreeElement);
                continue;
            }
            treeElement.removeChildAtIndex(i);
        }
        for (let i = 0; i < visibleChildren.length && i < treeElement.expandedChildrenLimit(); ++i) {
            const child = visibleChildren[i];
            const existingTreeElement = existingTreeElements.get(child) || this.findTreeElement(child);
            if (existingTreeElement && existingTreeElement !== treeElement) {
                // If an existing element was found, just move it.
                this.moveChild(treeElement, existingTreeElement, i);
            }
            else {
                // No existing element found, insert a new element.
                const newElement = this.insertChildElement(treeElement, child, i);
                if (this.updateRecordForHighlight(node) && treeElement.expanded) {
                    _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_14__.ElementsTreeElement.animateOnDOMUpdate(newElement);
                }
                // If a node was inserted in the middle of existing list dynamically we might need to increase the limit.
                if (treeElement.childCount() > treeElement.expandedChildrenLimit()) {
                    this.setExpandedChildrenLimit(treeElement, treeElement.expandedChildrenLimit() + 1);
                }
            }
        }
        // Update expand all button.
        const expandedChildCount = treeElement.childCount();
        if (visibleChildren.length > expandedChildCount) {
            const targetButtonIndex = expandedChildCount;
            if (!treeElement.expandAllButtonElement) {
                treeElement.expandAllButtonElement = this.createExpandAllButtonTreeElement(treeElement);
            }
            treeElement.insertChild(treeElement.expandAllButtonElement, targetButtonIndex);
            treeElement.expandAllButtonElement.title =
                i18nString(UIStrings.showAllNodesDMore, { PH1: visibleChildren.length - expandedChildCount });
        }
        else if (treeElement.expandAllButtonElement) {
            treeElement.expandAllButtonElement = null;
        }
        // Insert shortcuts to distributed children.
        if (node.isInsertionPoint()) {
            for (const distributedNode of node.distributedNodes()) {
                treeElement.appendChild(new ShortcutTreeElement(distributedNode));
            }
        }
        // Insert close tag.
        if (node.nodeType() === Node.ELEMENT_NODE && !node.pseudoType() && treeElement.isExpandable()) {
            this.insertChildElement(treeElement, node, treeElement.childCount(), true);
        }
        this.treeElementsBeingUpdated.delete(treeElement);
    }
    markersChanged(event) {
        const node = event.data;
        const treeElement = this.treeElementByNode.get(node);
        if (treeElement) {
            treeElement.updateDecorations();
        }
    }
    async topLayerElementsChanged() {
        for (const [parent, container] of __classPrivateFieldGet(this, _ElementsTreeOutline_topLayerContainerByParent, "f")) {
            await container.throttledUpdateTopLayerElements();
            if (container.currentTopLayerDOMNodes.size > 0 && container.parent !== parent) {
                parent.appendChild(container);
            }
            container.hidden = container.currentTopLayerDOMNodes.size === 0;
        }
    }
}
_ElementsTreeOutline_genericIssues = new WeakMap(), _ElementsTreeOutline_topLayerContainerByParent = new WeakMap(), _ElementsTreeOutline_issuesManager = new WeakMap(), _ElementsTreeOutline_popupHelper = new WeakMap(), _ElementsTreeOutline_nodeElementToIssue = new WeakMap(), _ElementsTreeOutline_instances = new WeakSet(), _ElementsTreeOutline_issueCodeToTooltipTitle = function _ElementsTreeOutline_issueCodeToTooltipTitle(errorType) {
    switch (errorType) {
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Audits.GenericIssueErrorType.FormLabelForNameError:
            return 'Incorrect use of <label for=FORM_ELEMENT>';
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Audits.GenericIssueErrorType.FormDuplicateIdForInputError:
            return 'Duplicate form field id in the same form';
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Audits.GenericIssueErrorType.FormInputWithNoLabelError:
            return 'Form field without valid aria-labelledby attribute or associated label';
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Audits.GenericIssueErrorType.FormAutocompleteAttributeEmptyError:
            return 'Incorrect use of autocomplete attribute';
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Audits.GenericIssueErrorType.FormEmptyIdAndNameAttributesForInputError:
            return 'A form field element should have an id or name attribute';
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Audits.GenericIssueErrorType.FormAriaLabelledByToNonExistingId:
            return 'An aria-labelledby attribute doesn\'t match any element id';
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Audits.GenericIssueErrorType.FormInputAssignedAutocompleteValueToIdOrNameAttributeError:
            return 'An element doesn\'t have an autocomplete attribute';
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Audits.GenericIssueErrorType.FormLabelHasNeitherForNorNestedInput:
            return 'No label associated with a form field';
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Audits.GenericIssueErrorType.FormLabelForMatchesNonExistingIdError:
            return 'Incorrect use of <label for=FORM_ELEMENT>';
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Audits.GenericIssueErrorType.FormInputHasWrongButWellIntendedAutocompleteValueError:
            return 'Non-standard autocomplete attribute value';
        default:
            return '';
    }
}, _ElementsTreeOutline_onIssueEventReceived = async function _ElementsTreeOutline_onIssueEventReceived(event) {
    if (event.data.issue instanceof _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.GenericIssue.GenericIssue) {
        __classPrivateFieldGet(this, _ElementsTreeOutline_instances, "m", _ElementsTreeOutline_onIssueAdded).call(this, event.data.issue);
        await __classPrivateFieldGet(this, _ElementsTreeOutline_instances, "m", _ElementsTreeOutline_addTreeElementIssue).call(this, event.data.issue);
    }
}, _ElementsTreeOutline_onIssueAdded = function _ElementsTreeOutline_onIssueAdded(issue) {
    __classPrivateFieldGet(this, _ElementsTreeOutline_genericIssues, "f").push(issue);
}, _ElementsTreeOutline_addAllElementIssues = function _ElementsTreeOutline_addAllElementIssues() {
    for (const issue of __classPrivateFieldGet(this, _ElementsTreeOutline_genericIssues, "f")) {
        void __classPrivateFieldGet(this, _ElementsTreeOutline_instances, "m", _ElementsTreeOutline_addTreeElementIssue).call(this, issue);
    }
}, _ElementsTreeOutline_addTreeElementIssue = async function _ElementsTreeOutline_addTreeElementIssue(issue) {
    const issueDetails = issue.details();
    const tooltipTitle = __classPrivateFieldGet(this, _ElementsTreeOutline_instances, "m", _ElementsTreeOutline_issueCodeToTooltipTitle).call(this, issueDetails.errorType);
    if (!tooltipTitle) {
        return;
    }
    if (!this.rootDOMNode || !issueDetails.violatingNodeId) {
        return;
    }
    const deferredDOMNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DeferredDOMNode(this.rootDOMNode.domModel().target(), issueDetails.violatingNodeId);
    const node = await deferredDOMNode.resolvePromise();
    if (!node) {
        return;
    }
    const treeElement = this.findTreeElement(node);
    if (treeElement) {
        treeElement.addIssue(issue);
        const treeElementNodeElementsToIssue = treeElement.issuesByNodeElement;
        // This element could be the treeElement tags name or an attribute.
        for (const [element, issue] of treeElementNodeElementsToIssue) {
            __classPrivateFieldGet(this, _ElementsTreeOutline_nodeElementToIssue, "f").set(element, issue);
        }
    }
};
Object.defineProperty(ElementsTreeOutline, "treeOutlineSymbol", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: Symbol('treeOutline')
});
(function (ElementsTreeOutline) {
    let Events;
    (function (Events) {
        Events["SelectedNodeChanged"] = "SelectedNodeChanged";
        Events["ElementsTreeUpdated"] = "ElementsTreeUpdated";
    })(Events = ElementsTreeOutline.Events || (ElementsTreeOutline.Events = {}));
})(ElementsTreeOutline || (ElementsTreeOutline = {}));
// clang-format off
const MappedCharToEntity = new Map([
    ['\xA0', 'nbsp'],
    ['\xAD', 'shy'],
    ['\u2002', 'ensp'],
    ['\u2003', 'emsp'],
    ['\u2009', 'thinsp'],
    ['\u200A', 'hairsp'],
    ['\u200B', 'ZeroWidthSpace'],
    ['\u200C', 'zwnj'],
    ['\u200D', 'zwj'],
    ['\u200E', 'lrm'],
    ['\u200F', 'rlm'],
    ['\u202A', '#x202A'],
    ['\u202B', '#x202B'],
    ['\u202C', '#x202C'],
    ['\u202D', '#x202D'],
    ['\u202E', '#x202E'],
    ['\u2060', 'NoBreak'],
    ['\uFEFF', '#xFEFF'],
]);
// clang-format on
class UpdateRecord {
    constructor() {
        Object.defineProperty(this, "modifiedAttributes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "removedAttributes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hasChangedChildrenInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hasRemovedChildrenInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "charDataModifiedInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    attributeModified(attrName) {
        if (this.removedAttributes && this.removedAttributes.has(attrName)) {
            this.removedAttributes.delete(attrName);
        }
        if (!this.modifiedAttributes) {
            this.modifiedAttributes = new Set();
        }
        this.modifiedAttributes.add(attrName);
    }
    attributeRemoved(attrName) {
        if (this.modifiedAttributes && this.modifiedAttributes.has(attrName)) {
            this.modifiedAttributes.delete(attrName);
        }
        if (!this.removedAttributes) {
            this.removedAttributes = new Set();
        }
        this.removedAttributes.add(attrName);
    }
    nodeInserted(_node) {
        this.hasChangedChildrenInternal = true;
    }
    nodeRemoved(_node) {
        this.hasChangedChildrenInternal = true;
        this.hasRemovedChildrenInternal = true;
    }
    charDataModified() {
        this.charDataModifiedInternal = true;
    }
    childrenModified() {
        this.hasChangedChildrenInternal = true;
    }
    isAttributeModified(attributeName) {
        return this.modifiedAttributes !== null && this.modifiedAttributes !== undefined &&
            this.modifiedAttributes.has(attributeName);
    }
    hasRemovedAttributes() {
        return this.removedAttributes !== null && this.removedAttributes !== undefined &&
            Boolean(this.removedAttributes.size);
    }
    isCharDataModified() {
        return Boolean(this.charDataModifiedInternal);
    }
    hasChangedChildren() {
        return Boolean(this.hasChangedChildrenInternal);
    }
    hasRemovedChildren() {
        return Boolean(this.hasRemovedChildrenInternal);
    }
}
let rendererInstance;
class Renderer {
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!rendererInstance || forceNew) {
            rendererInstance = new Renderer();
        }
        return rendererInstance;
    }
    async render(object) {
        let node = null;
        if (object instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode) {
            node = object;
        }
        else if (object instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DeferredDOMNode) {
            node = await object.resolvePromise();
        }
        if (!node) {
            // Can't render not-a-node, or couldn't resolve deferred node.
            return null;
        }
        const treeOutline = new ElementsTreeOutline(
        /* omitRootDOMNode: */ false, /* selectEnabled: */ true, /* hideGutter: */ true);
        treeOutline.rootDOMNode = node;
        const firstChild = treeOutline.firstChild();
        if (firstChild && !firstChild.isExpandable()) {
            treeOutline.element.classList.add('single-node');
        }
        treeOutline.setVisible(true);
        // @ts-ignore used in console_test_runner
        treeOutline.element.treeElementForTest = firstChild;
        treeOutline.setShowSelectionOnKeyboardFocus(/* show: */ true, /* preventTabOrder: */ true);
        return { node: treeOutline.element, tree: treeOutline };
    }
}
class ShortcutTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeElement {
    constructor(nodeShortcut) {
        super('');
        Object.defineProperty(this, "nodeShortcut", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hoveredInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.listItemElement.createChild('div', 'selection fill');
        const title = this.listItemElement.createChild('span', 'elements-tree-shortcut-title');
        let text = nodeShortcut.nodeName.toLowerCase();
        if (nodeShortcut.nodeType === Node.ELEMENT_NODE) {
            text = '<' + text + '>';
        }
        title.textContent = '\u21AA ' + text;
        this.nodeShortcut = nodeShortcut;
        this.addRevealAdorner();
    }
    addRevealAdorner() {
        const adorner = new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_6__.Adorner.Adorner();
        adorner.classList.add('adorner-reveal');
        const config = _components_components_js__WEBPACK_IMPORTED_MODULE_12__.AdornerManager.getRegisteredAdorner(_components_components_js__WEBPACK_IMPORTED_MODULE_12__.AdornerManager.RegisteredAdorners.REVEAL);
        const name = config.name;
        const adornerContent = document.createElement('span');
        const linkIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon();
        linkIcon.name = 'select-element';
        const slotText = document.createElement('span');
        slotText.textContent = name;
        adornerContent.append(linkIcon);
        adornerContent.append(slotText);
        adornerContent.classList.add('adorner-with-icon');
        adorner.data = {
            name,
            content: adornerContent,
            jslogContext: 'reveal',
        };
        this.listItemElement.appendChild(adorner);
        const onClick = (() => {
            this.nodeShortcut.deferredNode.resolve(node => {
                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(node);
            });
        });
        adorner.addInteraction(onClick, {
            isToggle: false,
            shouldPropagateOnKeydown: false,
            ariaLabelDefault: i18nString(UIStrings.reveal),
            ariaLabelActive: i18nString(UIStrings.reveal),
        });
        adorner.addEventListener('mousedown', e => e.consume(), false);
        _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_13__.ElementsPanel.instance().registerAdorner(adorner);
    }
    get hovered() {
        return Boolean(this.hoveredInternal);
    }
    set hovered(x) {
        if (this.hoveredInternal === x) {
            return;
        }
        this.hoveredInternal = x;
        this.listItemElement.classList.toggle('hovered', x);
    }
    deferredNode() {
        return this.nodeShortcut.deferredNode;
    }
    domModel() {
        return this.nodeShortcut.deferredNode.domModel();
    }
    setLeftIndentOverlay() {
        // We use parent's `--indent` value and add 24px to account for an extra level of indent.
        let indent = 24;
        if (this.parent && this.parent instanceof _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_14__.ElementsTreeElement) {
            const parentIndent = parseFloat(this.parent.listItemElement.style.getPropertyValue('--indent')) || 0;
            indent += parentIndent;
        }
        this.listItemElement.style.setProperty('--indent', indent + 'px');
    }
    onattach() {
        this.setLeftIndentOverlay();
    }
    onselect(selectedByUser) {
        if (!selectedByUser) {
            return true;
        }
        this.nodeShortcut.deferredNode.highlight();
        this.nodeShortcut.deferredNode.resolve(resolved.bind(this));
        function resolved(node) {
            if (node && this.treeOutline instanceof ElementsTreeOutline) {
                this.treeOutline.selectedDOMNodeInternal = node;
                this.treeOutline.selectedNodeChanged(false);
            }
        }
        return true;
    }
}


/***/ }),

/***/ "./src/panels/elements/ImagePreviewPopover.ts":
/*!****************************************************!*\
  !*** ./src/panels/elements/ImagePreviewPopover.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImagePreviewPopover: () => (/* binding */ ImagePreviewPopover)
/* harmony export */ });
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * ImagePreviewPopover sets listeners on the container element to display
 * an image preview if needed. The image URL comes from the event (mouseover) target
 * in a propery identified by HrefSymbol. To enable preview for any child element
 * set the property HrefSymbol.
 */
class ImagePreviewPopover {
    constructor(container, getLinkElement, getDOMNode) {
        Object.defineProperty(this, "getLinkElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "getDOMNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "popover", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.getLinkElement = getLinkElement;
        this.getDOMNode = getDOMNode;
        this.popover =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.PopoverHelper.PopoverHelper(container, this.handleRequest.bind(this), 'elements.image-preview');
        this.popover.setHasPadding(true);
        this.popover.setTimeout(0, 100);
    }
    handleRequest(event) {
        const link = this.getLinkElement(event);
        if (!link) {
            return null;
        }
        const href = elementToURLMap.get(link);
        if (!href) {
            return null;
        }
        return {
            box: link.boxInWindow(),
            hide: undefined,
            show: async (popover) => {
                const node = this.getDOMNode(link);
                if (!node) {
                    return false;
                }
                const precomputedFeatures = await _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.ImagePreview.ImagePreview.loadDimensionsForNode(node);
                const preview = await _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.ImagePreview.ImagePreview.build(node.domModel().target(), href, true, { imageAltText: undefined, precomputedFeatures });
                if (preview) {
                    popover.contentElement.appendChild(preview);
                }
                return Boolean(preview);
            },
        };
    }
    hide() {
        this.popover.hidePopover();
    }
    static setImageUrl(element, url) {
        elementToURLMap.set(element, url);
        return element;
    }
    static getImageURL(element) {
        return elementToURLMap.get(element);
    }
}
const elementToURLMap = new WeakMap();


/***/ }),

/***/ "./src/panels/elements/LayersWidget.ts":
/*!*********************************************!*\
  !*** ./src/panels/elements/LayersWidget.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonProvider: () => (/* binding */ ButtonProvider),
/* harmony export */   LayersWidget: () => (/* binding */ LayersWidget)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/tree_outline/tree_outline.js */ "./src/ui/components/tree_outline/tree_outline.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElementsPanel.js */ "./src/panels/elements/ElementsPanel.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './layersWidget.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     * @description Title of a section in the Element State Pane Widget of the Elements panel.
     * The widget shows the layers present in the context of the currently selected node.
     * */
    cssLayersTitle: 'CSS layers',
    /**
     * @description Tooltip text in Element State Pane Widget of the Elements panel.
     * For a button that opens a tool that shows the layers present in the current document.
     */
    toggleCSSLayers: 'Toggle CSS Layers view',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/LayersWidget.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
let layersWidgetInstance;
class LayersWidget extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.Widget {
    constructor() {
        super(true);
        Object.defineProperty(this, "cssModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "layerTreeComponent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeOutline()
        });
        this.contentElement.className = 'styles-layers-pane';
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('css-layers')}`);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(this.contentElement.createChild('div'), i18nString(UIStrings.cssLayersTitle));
        this.contentElement.appendChild(this.layerTreeComponent);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode, this.update, this);
    }
    updateModel(cssModel) {
        if (this.cssModel === cssModel) {
            return;
        }
        if (this.cssModel) {
            this.cssModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.StyleSheetChanged, this.update, this);
        }
        this.cssModel = cssModel;
        if (this.cssModel) {
            this.cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.StyleSheetChanged, this.update, this);
        }
    }
    async wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './layersWidget.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        return this.update();
    }
    async update() {
        if (!this.isShowing()) {
            return;
        }
        let node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode);
        if (node) {
            node = node.enclosingElementOrSelf();
        }
        if (!node) {
            // do something meaningful?
            return;
        }
        this.updateModel(node.domModel().cssModel());
        if (!this.cssModel) {
            return;
        }
        const makeTreeNode = (parentId) => (layer) => {
            const subLayers = layer.subLayers;
            const name = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel.readableLayerName(layer.name);
            const treeNodeData = layer.order + ': ' + name;
            const id = parentId ? parentId + '.' + name : name;
            if (!subLayers) {
                return { treeNodeData, id };
            }
            return {
                treeNodeData,
                id,
                children: () => Promise.resolve(subLayers.sort((layer1, layer2) => layer1.order - layer2.order).map(makeTreeNode(id))),
            };
        };
        const rootLayer = await this.cssModel.getRootLayer(node.id);
        this.layerTreeComponent.data = {
            defaultRenderer: _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.defaultRenderer,
            tree: [makeTreeNode('')(rootLayer)],
        };
        // We only expand the first 5 user-defined layers to not make the
        // view too overwhelming.
        await this.layerTreeComponent.expandRecursively(5);
    }
    async revealLayer(layerName) {
        if (!this.isShowing()) {
            _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_5__.ElementsPanel.instance().showToolbarPane(this, ButtonProvider.instance().item());
        }
        await this.update();
        return this.layerTreeComponent.expandToAndSelectTreeNodeId('implicit outer layer.' + layerName);
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!layersWidgetInstance || forceNew) {
            layersWidgetInstance = new LayersWidget();
        }
        return layersWidgetInstance;
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
        this.button = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarToggle(i18nString(UIStrings.toggleCSSLayers), 'layers', 'layers-filled');
        this.button.setVisible(false);
        this.button.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarButton.Events.Click, this.clicked, this);
        this.button.element.classList.add('monospace');
        this.button.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.toggleSubpane('css-layers').track({ click: true })}`);
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!buttonProviderInstance || forceNew) {
            buttonProviderInstance = new ButtonProvider();
        }
        return buttonProviderInstance;
    }
    clicked() {
        const view = LayersWidget.instance();
        _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_5__.ElementsPanel.instance().showToolbarPane(!view.isShowing() ? view : null, this.button);
    }
    item() {
        return this.button;
    }
}


/***/ }),

/***/ "./src/panels/elements/MarkerDecorator.ts":
/*!************************************************!*\
  !*** ./src/panels/elements/MarkerDecorator.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericDecorator: () => (/* binding */ GenericDecorator),
/* harmony export */   getRegisteredDecorators: () => (/* binding */ getRegisteredDecorators)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementsPanel.js */ "./src/panels/elements/ElementsPanel.ts");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const UIStrings = {
    /**
     *@description Title of the Marker Decorator of Elements
     */
    domBreakpoint: 'DOM Breakpoint',
    /**
     *@description Title of the Marker Decorator of Elements
     */
    elementIsHidden: 'Element is hidden',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/MarkerDecorator.ts', UIStrings);
const i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
class GenericDecorator {
    constructor(extension) {
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "color", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (!extension.title || !extension.color) {
            throw new Error(`Generic decorator requires a color and a title: ${extension.marker}`);
        }
        this.title = extension.title();
        this.color = extension.color;
    }
    decorate(_node) {
        return { title: this.title, color: this.color };
    }
}
const domBreakpointData = {
    marker: 'breakpoint-marker',
    title: i18nLazyString(UIStrings.domBreakpoint),
    color: 'var(--sys-color-primary-bright)',
};
const elementIsHiddenData = {
    marker: 'hidden-marker',
    title: i18nLazyString(UIStrings.elementIsHidden),
    color: 'var(--sys-color-neutral-bright)',
};
function getRegisteredDecorators() {
    return [
        {
            ...domBreakpointData,
            decorator: () => new GenericDecorator(domBreakpointData),
        },
        {
            ...elementIsHiddenData,
            decorator: () => new GenericDecorator(elementIsHiddenData),
        },
        {
            decorator: _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_1__.PseudoStateMarkerDecorator.instance,
            marker: 'pseudo-state-marker',
            title: undefined,
            color: undefined,
        },
    ];
}


/***/ }),

/***/ "./src/panels/elements/PlatformFontsWidget.ts":
/*!****************************************************!*\
  !*** ./src/panels/elements/PlatformFontsWidget.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlatformFontsWidget: () => (/* binding */ PlatformFontsWidget)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './platformFontsWidget.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ComputedStyleModel.js */ "./src/panels/elements/ComputedStyleModel.ts");
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




const UIStrings = {
    /**
     *@description Section title text content in Platform Fonts Widget of the Elements panel
     */
    renderedFonts: 'Rendered Fonts',
    /**
     *@description Font property title text content in Platform Fonts Widget of the Elements panel
     */
    familyName: 'Family name',
    /**
     *@description Font property title text content in Platform Fonts Widget of the Elements panel
     */
    postScriptName: 'PostScript name',
    /**
     *@description Font property title text content in Platform Fonts Widget of the Elements panel
     */
    fontOrigin: 'Font origin',
    /**
     *@description Text in Platform Fonts Widget of the Elements panel
     */
    networkResource: 'Network resource',
    /**
     *@description Text in Platform Fonts Widget of the Elements panel
     */
    localFile: 'Local file',
    /**
     *@description Text in Platform Fonts Widget of the Elements panel. Indicates a number of glyphs (characters) .
     */
    dGlyphs: '{n, plural, =1 {(# glyph)} other {(# glyphs)}}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/PlatformFontsWidget.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class PlatformFontsWidget extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ThrottledWidget.ThrottledWidget {
    constructor(sharedModel) {
        super(true);
        Object.defineProperty(this, "sharedModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sectionTitle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "fontStatsSection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.sharedModel = sharedModel;
        this.sharedModel.addEventListener(_ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_3__.Events.ComputedStyleChanged, this.update, this);
        this.sectionTitle = document.createElement('div');
        this.sectionTitle.classList.add('title');
        this.contentElement.classList.add('platform-fonts');
        this.contentElement.appendChild(this.sectionTitle);
        this.sectionTitle.textContent = i18nString(UIStrings.renderedFonts);
        this.fontStatsSection = this.contentElement.createChild('div', 'stats-section');
    }
    doUpdate() {
        const cssModel = this.sharedModel.cssModel();
        const node = this.sharedModel.node();
        if (!node || !cssModel) {
            return Promise.resolve();
        }
        return cssModel.getPlatformFonts(node.id).then(this.refreshUI.bind(this, node));
    }
    refreshUI(node, platformFonts) {
        if (this.sharedModel.node() !== node) {
            return;
        }
        this.fontStatsSection.removeChildren();
        const isEmptySection = !platformFonts || !platformFonts.length;
        this.sectionTitle.classList.toggle('hidden', isEmptySection);
        if (isEmptySection || !platformFonts) {
            return;
        }
        platformFonts.sort(function (a, b) {
            return b.glyphCount - a.glyphCount;
        });
        for (const platformFont of platformFonts) {
            const fontStatElement = this.fontStatsSection.createChild('div', 'font-stats-item');
            const familyNameElement = fontStatElement.createChild('div');
            familyNameElement.textContent = `${UIStrings.familyName}: ${platformFont.familyName}`;
            const postScriptNameElement = fontStatElement.createChild('div');
            postScriptNameElement.textContent = `${UIStrings.postScriptName}: ${platformFont.postScriptName}`;
            const fontOriginElement = fontStatElement.createChild('div');
            const fontOrigin = platformFont.isCustomFont ? i18nString(UIStrings.networkResource) : i18nString(UIStrings.localFile);
            fontOriginElement.textContent = `${UIStrings.fontOrigin}: ${fontOrigin}`;
            const fontUsageElement = fontOriginElement.createChild('span', 'font-usage');
            const usage = platformFont.glyphCount;
            fontUsageElement.textContent = i18nString(UIStrings.dGlyphs, { n: usage });
        }
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './platformFontsWidget.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}


/***/ }),

/***/ "./src/panels/elements/PropertyNameCategories.ts":
/*!*******************************************************!*\
  !*** ./src/panels/elements/PropertyNameCategories.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Category: () => (/* binding */ Category),
/* harmony export */   DefaultCategoryOrder: () => (/* binding */ DefaultCategoryOrder),
/* harmony export */   categorizePropertyName: () => (/* binding */ categorizePropertyName)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var Category;
(function (Category) {
    Category["Layout"] = "Layout";
    Category["Text"] = "Text";
    Category["Appearance"] = "Appearance";
    Category["Animation"] = "Animation";
    Category["Grid"] = "Grid";
    Category["Flex"] = "Flex";
    Category["Table"] = "Table";
    Category["CSSVariables"] = "CSS Variables";
    Category["GeneratedContent"] = "Generated Content";
    Category["Other"] = "Other";
})(Category || (Category = {}));
const DefaultCategoryOrder = [
    Category.Layout,
    Category.Text,
    Category.Appearance,
    Category.Animation,
    Category.CSSVariables,
    Category.Grid,
    Category.Flex,
    Category.Table,
    Category.GeneratedContent,
    Category.Other,
];
// These categories are manually updated for now. In the future
// we can try to find a way to automatically categorize them
// or find an authoritative source for the categorization:
// https://crbug.com/1117405
const CategorizedProperties = new Map([
    [
        Category.Layout,
        [
            'display', 'margin', 'padding', 'height', 'width', 'position',
            'top', 'right', 'bottom', 'left', 'z-index', 'float',
            'clear', 'overflow', 'resize', 'clip', 'visibility', 'box-sizing',
            'align-content', 'align-items', 'align-self', 'flex', 'flex-basis', 'flex-direction',
            'flex-flow', 'flex-grow', 'flex-shrink', 'flex-wrap', 'justify-content', 'order',
            'inline-size', 'block-size', 'min-inline-size', 'min-block-size', 'max-inline-size', 'max-block-size',
            'min-width', 'max-width', 'min-height', 'max-height',
        ],
    ],
    [
        Category.Text,
        [
            'font',
            'font-family',
            'font-size',
            'font-size-adjust',
            'font-stretch',
            'font-style',
            'font-variant',
            'font-weight',
            'font-smoothing',
            'direction',
            'tab-size',
            'text-align',
            'text-align-last',
            'text-decoration',
            'text-decoration-color',
            'text-decoration-line',
            'text-decoration-style',
            'text-indent',
            'text-justify',
            'text-overflow',
            'text-shadow',
            'text-transform',
            'text-size-adjust',
            'line-height',
            'vertical-align',
            'letter-spacing',
            'word-spacing',
            'white-space',
            'word-break',
            'word-wrap',
        ],
    ],
    [
        Category.Appearance,
        [
            'color',
            'outline',
            'outline-color',
            'outline-offset',
            'outline-style',
            'Outline-width',
            'border',
            'border-image',
            'background',
            'cursor',
            'box-shadow',
            '≈',
            'tap-highlight-color',
        ],
    ],
    [
        Category.Animation,
        [
            'animation',
            'animation-delay',
            'animation-direction',
            'animation-duration',
            'animation-fill-mode',
            'animation-iteration-count',
            'animation-name',
            'animation-play-state',
            'animation-timing-function',
            'transition',
            'transition-delay',
            'transition-duration',
            'transition-property',
            'transition-timing-function',
        ],
    ],
    [
        Category.Grid,
        [
            'grid',
            'grid-column',
            'grid-row',
            'order',
            'place-items',
            'place-content',
            'place-self',
        ],
    ],
    [
        Category.Flex,
        [
            'flex',
            'order',
            'place-items',
            'place-content',
            'place-self',
        ],
    ],
    [
        Category.Table,
        [
            'border-collapse',
            'border-spacing',
            'caption-side',
            'empty-cells',
            'table-layout',
        ],
    ],
    [
        Category.GeneratedContent,
        [
            'content',
            'quotes',
            'counter-reset',
            'counter-increment',
        ],
    ],
]);
const CategoriesByPropertyName = new Map();
for (const [category, styleNames] of CategorizedProperties) {
    for (const styleName of styleNames) {
        if (!CategoriesByPropertyName.has(styleName)) {
            CategoriesByPropertyName.set(styleName, []);
        }
        const categories = CategoriesByPropertyName.get(styleName);
        categories.push(category);
    }
}
const matchCategoriesByPropertyName = (propertyName) => {
    if (CategoriesByPropertyName.has(propertyName)) {
        return CategoriesByPropertyName.get(propertyName);
    }
    if (propertyName.startsWith('--')) {
        return [Category.CSSVariables];
    }
    return [];
};
/**
 * Categorize a given property name to one or more categories.
 *
 * It matches against the static CategoriesByPropertyName first. It then
 * matches against several dynamic rules. It then tries to use the canonical
 * name's shorthands for matching. If nothing matches, it returns the "Other"
 * category.
 */
const categorizePropertyName = (propertyName) => {
    const cssMetadata = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSMetadata.cssMetadata();
    const canonicalName = cssMetadata.canonicalPropertyName(propertyName);
    const categories = matchCategoriesByPropertyName(canonicalName);
    if (categories.length > 0) {
        return categories;
    }
    const shorthands = cssMetadata.getShorthands(canonicalName);
    if (shorthands) {
        for (const shorthand of shorthands) {
            const shorthandCategories = matchCategoriesByPropertyName(shorthand);
            if (shorthandCategories.length > 0) {
                return shorthandCategories;
            }
        }
    }
    return [Category.Other];
};


/***/ }),

/***/ "./src/panels/elements/PropertyRenderer.ts":
/*!*************************************************!*\
  !*** ./src/panels/elements/PropertyRenderer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Renderer: () => (/* binding */ Renderer),
/* harmony export */   RenderingContext: () => (/* binding */ RenderingContext),
/* harmony export */   StringRenderer: () => (/* binding */ StringRenderer),
/* harmony export */   URLRenderer: () => (/* binding */ URLRenderer)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _ImagePreviewPopover_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImagePreviewPopover.js */ "./src/panels/elements/ImagePreviewPopover.ts");
/* harmony import */ var _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PropertyMatchers.js */ "./src/panels/elements/PropertyMatchers.ts");
/* harmony import */ var _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StylesSidebarPane.js */ "./src/panels/elements/StylesSidebarPane.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
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
var _Renderer_matchedResult, _Renderer_output, _Renderer_context;









const UIStrings = {
    /**
     *@description Text that is announced by the screen reader when the user focuses on an input field for entering the name of a CSS property in the Styles panel
     *@example {margin} PH1
     */
    cssPropertyName: '`CSS` property name: {PH1}',
    /**
     *@description Text that is announced by the screen reader when the user focuses on an input field for entering the value of a CSS property in the Styles panel
     *@example {10px} PH1
     */
    cssPropertyValue: '`CSS` property value: {PH1}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/elements/PropertyRenderer.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
function mergeWithSpacing(nodes, merge) {
    const result = [...nodes];
    if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSPropertyParser.requiresSpace(nodes, merge)) {
        result.push(document.createTextNode(' '));
    }
    result.push(...merge);
    return result;
}
class RenderingContext {
    constructor(ast, renderers, matchedResult, cssControls, options = { readonly: false }) {
        Object.defineProperty(this, "ast", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ast
        });
        Object.defineProperty(this, "renderers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: renderers
        });
        Object.defineProperty(this, "matchedResult", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: matchedResult
        });
        Object.defineProperty(this, "cssControls", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: cssControls
        });
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: options
        });
    }
    addControl(cssType, control) {
        if (this.cssControls) {
            const controls = this.cssControls.get(cssType);
            if (!controls) {
                this.cssControls.set(cssType, [control]);
            }
            else {
                controls.push(control);
            }
        }
    }
}
class Renderer extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSPropertyParser.TreeWalker {
    constructor(ast, renderers, matchedResult, cssControls, options) {
        super(ast);
        _Renderer_matchedResult.set(this, void 0);
        _Renderer_output.set(this, []);
        _Renderer_context.set(this, void 0);
        __classPrivateFieldSet(this, _Renderer_matchedResult, matchedResult, "f");
        __classPrivateFieldSet(this, _Renderer_context, new RenderingContext(this.ast, renderers, __classPrivateFieldGet(this, _Renderer_matchedResult, "f"), cssControls, options), "f");
    }
    static render(nodeOrNodes, context) {
        if (!Array.isArray(nodeOrNodes)) {
            return this.render([nodeOrNodes], context);
        }
        const cssControls = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSPropertyParser.CSSControlMap();
        const renderers = nodeOrNodes.map(node => this.walkExcludingSuccessors(context.ast.subtree(node), context.renderers, context.matchedResult, cssControls, context.options));
        const nodes = renderers.map(node => __classPrivateFieldGet(node, _Renderer_output, "f")).reduce(mergeWithSpacing);
        return { nodes, cssControls };
    }
    static renderInto(nodeOrNodes, context, parent) {
        const { nodes, cssControls } = this.render(nodeOrNodes, context);
        if (parent.lastChild && _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSPropertyParser.requiresSpace([parent.lastChild], nodes)) {
            parent.appendChild(document.createTextNode(' '));
        }
        nodes.map(n => parent.appendChild(n));
        return { nodes, cssControls };
    }
    renderedMatchForTest(_nodes, _match) {
    }
    enter({ node }) {
        const match = __classPrivateFieldGet(this, _Renderer_matchedResult, "f").getMatch(node);
        const renderer = match &&
            __classPrivateFieldGet(this, _Renderer_context, "f").renderers.get(match.constructor);
        if (renderer || match instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSPropertyParser.TextMatch) {
            const output = renderer ? renderer.render(match, __classPrivateFieldGet(this, _Renderer_context, "f")) : match.render();
            this.renderedMatchForTest(output, match);
            __classPrivateFieldSet(this, _Renderer_output, mergeWithSpacing(__classPrivateFieldGet(this, _Renderer_output, "f"), output), "f");
            return false;
        }
        return true;
    }
    static renderNameElement(name) {
        const nameElement = document.createElement('span');
        nameElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.key().track({
            change: true,
            keydown: 'ArrowLeft|ArrowUp|PageUp|Home|PageDown|ArrowRight|ArrowDown|End|Space|Tab|Enter|Escape',
        })}`);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setLabel(nameElement, i18nString(UIStrings.cssPropertyName, { PH1: name }));
        nameElement.className = 'webkit-css-property';
        nameElement.textContent = name;
        nameElement.normalize();
        return nameElement;
    }
    // This function renders a property value as HTML, customizing the presentation with a set of given AST matchers. This
    // comprises the following steps:
    // 1. Build an AST of the property.
    // 2. Apply tree matchers during bottom up traversal.
    // 3. Render the value from left to right into HTML, deferring rendering of matched subtrees to the matchers
    //
    // More general, longer matches take precedence over shorter, more specific matches. Whitespaces are normalized, for
    // unmatched text and around rendered matching results.
    static renderValueElement(propertyName, propertyValue, renderers) {
        const valueElement = document.createElement('span');
        valueElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.value().track({
            change: true,
            keydown: 'ArrowLeft|ArrowUp|PageUp|Home|PageDown|ArrowRight|ArrowDown|End|Space|Tab|Enter|Escape',
        })}`);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setLabel(valueElement, i18nString(UIStrings.cssPropertyValue, { PH1: propertyValue }));
        valueElement.className = 'value';
        const ast = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSPropertyParser.tokenizeDeclaration(propertyName, propertyValue);
        if (!ast) {
            valueElement.appendChild(document.createTextNode(propertyValue));
            return valueElement;
        }
        const matchers = [];
        const rendererMap = new Map();
        for (const renderer of renderers) {
            const matcher = renderer.matcher();
            matchers.push(matcher);
            rendererMap.set(matcher.matchType, renderer);
        }
        const matchedResult = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, matchers);
        ast.trailingNodes.forEach(n => matchedResult.matchText(n));
        const context = new RenderingContext(ast, rendererMap, matchedResult);
        Renderer.render([ast.tree, ...ast.trailingNodes], context).nodes.forEach(node => valueElement.appendChild(node));
        valueElement.normalize();
        return valueElement;
    }
}
_Renderer_matchedResult = new WeakMap(), _Renderer_output = new WeakMap(), _Renderer_context = new WeakMap();
class URLRenderer {
    constructor(rule, node) {
        Object.defineProperty(this, "rule", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: rule
        });
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: node
        });
    }
    render(match) {
        const url = (0,_StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_8__.unescapeCssString)(match.url);
        const container = document.createDocumentFragment();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextChild(container, 'url(');
        let hrefUrl = null;
        if (this.rule && this.rule.resourceURL()) {
            hrefUrl = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.completeURL(this.rule.resourceURL(), url);
        }
        else if (this.node) {
            hrefUrl = this.node.resolveURL(url);
        }
        const link = _ImagePreviewPopover_js__WEBPACK_IMPORTED_MODULE_6__.ImagePreviewPopover.setImageUrl(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.Linkifier.Linkifier.linkifyURL(hrefUrl || url, {
            text: url,
            preventClick: false,
            // crbug.com/1027168
            // We rely on CSS text-overflow: ellipsis to hide long URLs in the Style panel,
            // so that we don't have to keep two versions (original vs. trimmed) of URL
            // at the same time, which complicates both StylesSidebarPane and StylePropertyTreeElement.
            bypassURLTrimming: true,
            showColumnNumber: false,
            inlineFrameIndex: 0,
        }), hrefUrl || url);
        container.appendChild(link);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextChild(container, ')');
        return [container];
    }
    matcher() {
        return new _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_7__.URLMatcher();
    }
}
class StringRenderer {
    render(match) {
        const element = document.createElement('span');
        element.innerText = match.text;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(element, (0,_StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_8__.unescapeCssString)(match.text));
        return [element];
    }
    matcher() {
        return new _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_7__.StringMatcher();
    }
}


/***/ }),

/***/ "./src/panels/elements/StyleEditorWidget.ts":
/*!**************************************************!*\
  !*** ./src/panels/elements/StyleEditorWidget.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyleEditorWidget: () => (/* binding */ StyleEditorWidget)
/* harmony export */ });
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StylePropertyTreeElement.js */ "./src/panels/elements/StylePropertyTreeElement.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
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
var _StyleEditorWidget_triggerKey;



let instance = null;
/**
 * Thin UI.Widget wrapper around style editors to allow using it as a popover.
 */
class StyleEditorWidget extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.VBox {
    constructor() {
        super(true);
        Object.defineProperty(this, "editor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "section", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "editorContainer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _StyleEditorWidget_triggerKey.set(this, void 0);
        this.contentElement.tabIndex = 0;
        this.setDefaultFocusedElement(this.contentElement);
        this.editorContainer = document.createElement('div');
        this.contentElement.appendChild(this.editorContainer);
        this.onPropertySelected = this.onPropertySelected.bind(this);
        this.onPropertyDeselected = this.onPropertyDeselected.bind(this);
    }
    getSection() {
        return this.section;
    }
    async onPropertySelected(event) {
        if (!this.section) {
            return;
        }
        const target = ensureTreeElementForProperty(this.section, event.data.name);
        target.property.value = event.data.value;
        target.updateTitle();
        await target.applyStyleText(target.renderedPropertyText(), false);
        await this.render();
    }
    async onPropertyDeselected(event) {
        if (!this.section) {
            return;
        }
        const target = ensureTreeElementForProperty(this.section, event.data.name);
        await target.applyStyleText('', false);
        await this.render();
    }
    bindContext(pane, section) {
        this.pane = pane;
        this.section = section;
        this.editor?.addEventListener('propertyselected', this.onPropertySelected);
        this.editor?.addEventListener('propertydeselected', this.onPropertyDeselected);
    }
    setTriggerKey(value) {
        __classPrivateFieldSet(this, _StyleEditorWidget_triggerKey, value, "f");
    }
    getTriggerKey() {
        return __classPrivateFieldGet(this, _StyleEditorWidget_triggerKey, "f");
    }
    unbindContext() {
        this.pane = undefined;
        this.section = undefined;
        this.editor?.removeEventListener('propertyselected', this.onPropertySelected);
        this.editor?.removeEventListener('propertydeselected', this.onPropertyDeselected);
    }
    async render() {
        if (!this.editor) {
            return;
        }
        this.editor.data = {
            authoredProperties: this.section ? getAuthoredStyles(this.section, this.editor.getEditableProperties()) :
                new Map(),
            computedProperties: this.pane ? await fetchComputedStyles(this.pane) : new Map(),
        };
    }
    static instance() {
        if (!instance) {
            instance = new StyleEditorWidget();
        }
        return instance;
    }
    setEditor(editorClass) {
        if (!(this.editor instanceof editorClass)) {
            this.contentElement.removeChildren();
            this.editor = new editorClass();
            this.contentElement.appendChild(this.editor);
        }
    }
    static createTriggerButton(pane, section, editorClass, buttonTitle, triggerKey) {
        const triggerButton = createButton(buttonTitle);
        triggerButton.onclick = async (event) => {
            event.stopPropagation();
            const popoverHelper = pane.swatchPopoverHelper();
            const widget = StyleEditorWidget.instance();
            widget.setEditor(editorClass);
            widget.bindContext(pane, section);
            widget.setTriggerKey(triggerKey);
            await widget.render();
            const scrollerElement = triggerButton.enclosingNodeOrSelfWithClass('style-panes-wrapper');
            const onScroll = () => {
                popoverHelper.hide(true);
            };
            popoverHelper.show(widget, triggerButton, () => {
                widget.unbindContext();
                if (scrollerElement) {
                    scrollerElement.removeEventListener('scroll', onScroll);
                }
            });
            if (scrollerElement) {
                scrollerElement.addEventListener('scroll', onScroll);
            }
        };
        return triggerButton;
    }
}
_StyleEditorWidget_triggerKey = new WeakMap();
function createButton(buttonTitle) {
    const button = document.createElement('button');
    button.classList.add('styles-pane-button');
    button.tabIndex = 0;
    button.title = buttonTitle;
    button.onmouseup = event => {
        // Stop propagation to prevent the property editor from being activated.
        event.stopPropagation();
    };
    const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon();
    icon.data = { iconName: 'flex-wrap', color: 'var(--sys-color-token-subtle)', width: '16px', height: '16px' };
    button.appendChild(icon);
    return button;
}
function ensureTreeElementForProperty(section, propertyName) {
    const target = section.propertiesTreeOutline.rootElement().children().find(child => child instanceof _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_2__.StylePropertyTreeElement && child.property.name === propertyName);
    if (target) {
        return target;
    }
    const newTarget = section.addNewBlankProperty();
    newTarget.property.name = propertyName;
    return newTarget;
}
async function fetchComputedStyles(pane) {
    const computedStyleModel = pane.computedStyleModel();
    const style = await computedStyleModel.fetchComputedStyle();
    return style ? style.computedStyle : new Map();
}
function getAuthoredStyles(section, editableProperties) {
    const authoredProperties = new Map();
    const editablePropertiesSet = new Set(editableProperties.map(prop => prop.propertyName));
    for (const prop of section.style().leadingProperties()) {
        if (editablePropertiesSet.has(prop.name)) {
            authoredProperties.set(prop.name, prop.value);
        }
    }
    return authoredProperties;
}


/***/ }),

/***/ "./src/panels/elements/StylePropertiesSection.ts":
/*!*******************************************************!*\
  !*** ./src/panels/elements/StylePropertiesSection.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlankStylePropertiesSection: () => (/* binding */ BlankStylePropertiesSection),
/* harmony export */   FontPaletteValuesRuleSection: () => (/* binding */ FontPaletteValuesRuleSection),
/* harmony export */   HighlightPseudoStylePropertiesSection: () => (/* binding */ HighlightPseudoStylePropertiesSection),
/* harmony export */   KeyframePropertiesSection: () => (/* binding */ KeyframePropertiesSection),
/* harmony export */   PositionTryRuleSection: () => (/* binding */ PositionTryRuleSection),
/* harmony export */   RegisteredPropertiesSection: () => (/* binding */ RegisteredPropertiesSection),
/* harmony export */   StylePropertiesSection: () => (/* binding */ StylePropertiesSection)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ColorSwatchPopoverIcon.js */ "./src/panels/elements/ColorSwatchPopoverIcon.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/elements/components/components.ts");
/* harmony import */ var _DOMLinkifier_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DOMLinkifier.js */ "./src/panels/elements/DOMLinkifier.ts");
/* harmony import */ var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ElementsPanel.js */ "./src/panels/elements/ElementsPanel.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './stylePropertiesTreeOutline.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./StylePropertyTreeElement.js */ "./src/panels/elements/StylePropertyTreeElement.ts");
/* harmony import */ var _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./StylesSidebarPane.js */ "./src/panels/elements/StylesSidebarPane.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
var _a, _StylePropertiesSection_styleRuleElement, _StylePropertiesSection_ancestorRuleListElement, _StylePropertiesSection_ancestorClosingBracesElement, _StylePropertiesSection_nodeElementToSpecificity, _StylePropertiesSection_customHeaderText;
/*
 * Copyright (C) 2007 Apple Inc.  All rights reserved.
 * Copyright (C) 2009 Joseph Pecoraro
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



















const UIStrings = {
    /**
     *@description Tooltip text that appears when hovering over the largeicon add button in the Styles Sidebar Pane of the Elements panel
     */
    insertStyleRuleBelow: 'Insert style rule below',
    /**
     *@description Text in Styles Sidebar Pane of the Elements panel
     */
    constructedStylesheet: 'constructed stylesheet',
    /**
     *@description Text in Styles Sidebar Pane of the Elements panel
     */
    userAgentStylesheet: 'user agent stylesheet',
    /**
     *@description Text in Styles Sidebar Pane of the Elements panel
     */
    injectedStylesheet: 'injected stylesheet',
    /**
     *@description Text in Styles Sidebar Pane of the Elements panel
     */
    viaInspector: 'via inspector',
    /**
     *@description Text in Styles Sidebar Pane of the Elements panel
     */
    styleAttribute: '`style` attribute',
    /**
     *@description Text in Styles Sidebar Pane of the Elements panel
     *@example {html} PH1
     */
    sattributesStyle: '{PH1}[Attributes Style]',
    /**
     *@description Show all button text content in Styles Sidebar Pane of the Elements panel
     *@example {3} PH1
     */
    showAllPropertiesSMore: 'Show all properties ({PH1} more)',
    /**
     *@description Text in Elements Tree Element of the Elements panel, copy should be used as a verb
     */
    copySelector: 'Copy `selector`',
    /**
     *@description A context menu item in Styles panel to copy CSS rule
     */
    copyRule: 'Copy rule',
    /**
     *@description A context menu item in Styles panel to copy all CSS declarations
     */
    copyAllDeclarations: 'Copy all declarations',
    /**
     *@description  A context menu item in Styles panel to copy all the CSS changes
     */
    copyAllCSSChanges: 'Copy all CSS changes',
    /**
     *@description Text that is announced by the screen reader when the user focuses on an input field for editing the name of a CSS selector in the Styles panel
     */
    cssSelector: '`CSS` selector',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/elements/StylePropertiesSection.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
const STYLE_TAG = '<style>';
const DEFAULT_MAX_PROPERTIES = 50;
class StylePropertiesSection {
    constructor(parentPane, matchedStyles, style, sectionIdx, computedStyles, parentsComputedStyles, customHeaderText) {
        Object.defineProperty(this, "parentPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "styleInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "matchedStyles", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "computedStyles", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "parentsComputedStyles", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "editable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hoverTimer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "willCauseCancelEditing", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "forceShowAll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "originalPropertiesCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "element", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _StylePropertiesSection_styleRuleElement.set(this, void 0);
        Object.defineProperty(this, "titleElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "propertiesTreeOutline", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "showAllButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectorElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "newStyleRuleToolbar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "fontEditorToolbar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "fontEditorSectionManager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "fontEditorButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectedSinceMouseDown", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "elementToSelectorIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "navigable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectorRefElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hoverableSelectorsMode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isHiddenInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nestingLevel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        _StylePropertiesSection_ancestorRuleListElement.set(this, void 0);
        _StylePropertiesSection_ancestorClosingBracesElement.set(this, void 0);
        // Used to identify buttons that trigger a flexbox or grid editor.
        Object.defineProperty(this, "nextEditorTriggerButtonIdx", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 1
        });
        Object.defineProperty(this, "sectionIdx", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        _StylePropertiesSection_customHeaderText.set(this, void 0);
        __classPrivateFieldSet(this, _StylePropertiesSection_customHeaderText, customHeaderText, "f");
        this.parentPane = parentPane;
        this.sectionIdx = sectionIdx;
        this.styleInternal = style;
        this.matchedStyles = matchedStyles;
        this.computedStyles = computedStyles;
        this.parentsComputedStyles = parentsComputedStyles;
        this.editable = Boolean(style.styleSheetId && style.range);
        this.hoverTimer = null;
        this.willCauseCancelEditing = false;
        this.forceShowAll = false;
        this.originalPropertiesCount = style.leadingProperties().length;
        const rule = style.parentRule;
        const headerText = this.headerText();
        this.element = document.createElement('div');
        this.element.classList.add('styles-section');
        this.element.classList.add('matched-styles');
        this.element.classList.add('monospace');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('style-properties').track({
            keydown: 'ArrowUp|ArrowDown|ArrowLeft|ArrowRight|Enter|Space',
        })}`);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(this.element, `${headerText}, css selector`);
        this.element.tabIndex = -1;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.markAsListitem(this.element);
        this.element.addEventListener('keydown', this.onKeyDown.bind(this), false);
        parentPane.sectionByElement.set(this.element, this);
        __classPrivateFieldSet(this, _StylePropertiesSection_styleRuleElement, this.element.createChild('div', 'style-rule'), "f");
        __classPrivateFieldSet(this, _StylePropertiesSection_ancestorRuleListElement, document.createElement('div'), "f");
        __classPrivateFieldGet(this, _StylePropertiesSection_ancestorRuleListElement, "f").classList.add('ancestor-rule-list');
        this.element.prepend(__classPrivateFieldGet(this, _StylePropertiesSection_ancestorRuleListElement, "f"));
        __classPrivateFieldSet(this, _StylePropertiesSection_ancestorClosingBracesElement, document.createElement('div'), "f");
        __classPrivateFieldGet(this, _StylePropertiesSection_ancestorClosingBracesElement, "f").classList.add('ancestor-closing-braces');
        this.element.append(__classPrivateFieldGet(this, _StylePropertiesSection_ancestorClosingBracesElement, "f"));
        this.updateAncestorRuleList();
        this.titleElement =
            __classPrivateFieldGet(this, _StylePropertiesSection_styleRuleElement, "f").createChild('div', 'styles-section-title ' + (rule ? 'styles-selector' : ''));
        this.propertiesTreeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeOutlineInShadow();
        this.propertiesTreeOutline.setFocusable(false);
        this.propertiesTreeOutline.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './stylePropertiesTreeOutline.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.propertiesTreeOutline.element.classList.add('style-properties', 'matched-styles', 'monospace');
        __classPrivateFieldGet(this, _StylePropertiesSection_styleRuleElement, "f").appendChild(this.propertiesTreeOutline.element);
        this.showAllButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.createTextButton('', this.showAllItems.bind(this), {
            className: 'styles-show-all',
            jslogContext: 'elements.show-all-style-properties',
        });
        __classPrivateFieldGet(this, _StylePropertiesSection_styleRuleElement, "f").appendChild(this.showAllButton);
        const indent = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').get();
        const selectorContainer = document.createElement('div');
        selectorContainer.createChild('span', 'styles-clipboard-only').textContent = indent.repeat(this.nestingLevel);
        selectorContainer.classList.add('selector-container');
        this.selectorElement = document.createElement('span');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(this.selectorElement, i18nString(UIStrings.cssSelector));
        this.selectorElement.classList.add('selector');
        this.selectorElement.textContent = headerText;
        selectorContainer.appendChild(this.selectorElement);
        this.selectorElement.addEventListener('mouseenter', this.onMouseEnterSelector.bind(this), false);
        this.selectorElement.addEventListener('mouseleave', this.onMouseOutSelector.bind(this), false);
        // We only add braces for style rules with selectors and non-style rules, which create their own sections.
        if (headerText.length > 0 || !(rule instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSRule.CSSStyleRule)) {
            const openBrace = selectorContainer.createChild('span', 'sidebar-pane-open-brace');
            openBrace.textContent = headerText.length > 0 ? ' {' : '{'; // We don't add spacing when there is no selector.
            const closeBrace = __classPrivateFieldGet(this, _StylePropertiesSection_styleRuleElement, "f").createChild('div', 'sidebar-pane-closing-brace');
            closeBrace.createChild('span', 'styles-clipboard-only').textContent = indent.repeat(this.nestingLevel);
            closeBrace.createChild('span').textContent = '}';
        }
        else {
            this.titleElement.classList.add('hidden');
        }
        if (rule) {
            const newRuleButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarButton(i18nString(UIStrings.insertStyleRuleBelow), 'plus', undefined, 'elements.new-style-rule');
            newRuleButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarButton.Events.Click, this.onNewRuleClick, this);
            newRuleButton.setSize(_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Size.SMALL);
            newRuleButton.element.tabIndex = -1;
            if (!this.newStyleRuleToolbar) {
                this.newStyleRuleToolbar =
                    new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.Toolbar('sidebar-pane-section-toolbar new-rule-toolbar', this.element);
            }
            this.newStyleRuleToolbar.appendToolbarItem(newRuleButton);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.markAsHidden(this.newStyleRuleToolbar.element);
        }
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled('font-editor') && this.editable) {
            this.fontEditorToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.Toolbar('sidebar-pane-section-toolbar', __classPrivateFieldGet(this, _StylePropertiesSection_styleRuleElement, "f"));
            this.fontEditorSectionManager = new _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_12__.FontEditorSectionManager(this.parentPane.swatchPopoverHelper(), this);
            this.fontEditorButton =
                new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarButton('Font Editor', 'custom-typography', undefined, 'font-editor');
            this.fontEditorButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarButton.Events.Click, () => {
                this.onFontEditorButtonClicked();
            }, this);
            this.fontEditorButton.element.addEventListener('keydown', event => {
                if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.isEnterOrSpaceKey(event)) {
                    event.consume(true);
                    this.onFontEditorButtonClicked();
                }
            }, false);
            this.fontEditorToolbar.appendToolbarItem(this.fontEditorButton);
            if (this.styleInternal.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSStyleDeclaration.Type.Inline) {
                if (this.newStyleRuleToolbar) {
                    this.newStyleRuleToolbar.element.classList.add('shifted-toolbar');
                }
            }
            else {
                this.fontEditorToolbar.element.classList.add('font-toolbar-hidden');
            }
        }
        this.selectorElement.addEventListener('click', this.handleSelectorClick.bind(this), false);
        this.selectorElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.cssRuleHeader('selector').track({ click: true, change: true })}`);
        this.element.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), false);
        this.element.addEventListener('mousedown', this.handleEmptySpaceMouseDown.bind(this), false);
        this.element.addEventListener('click', this.handleEmptySpaceClick.bind(this), false);
        this.element.addEventListener('mousemove', this.onMouseMove.bind(this), false);
        this.element.addEventListener('mouseleave', this.onMouseLeave.bind(this), false);
        this.selectedSinceMouseDown = false;
        this.elementToSelectorIndex = new WeakMap();
        if (rule) {
            // Prevent editing the user agent and user rules.
            if (rule.isUserAgent() || rule.isInjected()) {
                this.editable = false;
            }
            else {
                // Check this is a real CSSRule, not a bogus object coming from BlankStylePropertiesSection.
                if (rule.styleSheetId) {
                    const header = rule.cssModel().styleSheetHeaderForId(rule.styleSheetId);
                    this.navigable = header && !header.isAnonymousInlineStyleSheet();
                }
            }
        }
        this.selectorRefElement = document.createElement('div');
        this.selectorRefElement.classList.add('styles-section-subtitle');
        this.element.prepend(this.selectorRefElement);
        this.updateRuleOrigin();
        this.titleElement.appendChild(selectorContainer);
        if (this.navigable) {
            this.element.classList.add('navigable');
        }
        if (!this.editable) {
            this.element.classList.add('read-only');
            this.propertiesTreeOutline.element.classList.add('read-only');
        }
        this.hoverableSelectorsMode = false;
        this.isHiddenInternal = false;
        this.markSelectorMatches();
        this.onpopulate();
    }
    setComputedStyles(computedStyles) {
        this.computedStyles = computedStyles;
    }
    setParentsComputedStyles(parentsComputedStyles) {
        this.parentsComputedStyles = parentsComputedStyles;
    }
    updateAuthoringHint() {
        let child = this.propertiesTreeOutline.firstChild();
        while (child) {
            if (child instanceof _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_17__.StylePropertyTreeElement) {
                child.setComputedStyles(this.computedStyles);
                child.setParentsComputedStyles(this.parentsComputedStyles);
                child.updateAuthoringHint();
            }
            child = child.nextSibling;
        }
    }
    setSectionIdx(sectionIdx) {
        this.sectionIdx = sectionIdx;
        this.onpopulate();
    }
    getSectionIdx() {
        return this.sectionIdx;
    }
    registerFontProperty(treeElement) {
        if (this.fontEditorSectionManager) {
            this.fontEditorSectionManager.registerFontProperty(treeElement);
        }
        if (this.fontEditorToolbar) {
            this.fontEditorToolbar.element.classList.remove('font-toolbar-hidden');
            if (this.newStyleRuleToolbar) {
                this.newStyleRuleToolbar.element.classList.add('shifted-toolbar');
            }
        }
    }
    resetToolbars() {
        if (this.parentPane.swatchPopoverHelper().isShowing() ||
            this.styleInternal.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSStyleDeclaration.Type.Inline) {
            return;
        }
        if (this.fontEditorToolbar) {
            this.fontEditorToolbar.element.classList.add('font-toolbar-hidden');
        }
        if (this.newStyleRuleToolbar) {
            this.newStyleRuleToolbar.element.classList.remove('shifted-toolbar');
        }
    }
    static createRuleOriginNode(matchedStyles, linkifier, rule) {
        if (!rule) {
            return document.createTextNode('');
        }
        const ruleLocation = _a.getRuleLocationFromCSSRule(rule);
        const header = rule.styleSheetId ? matchedStyles.cssModel().styleSheetHeaderForId(rule.styleSheetId) : null;
        function linkifyRuleLocation() {
            if (!rule) {
                return null;
            }
            if (ruleLocation && rule.styleSheetId && header &&
                (!header.isAnonymousInlineStyleSheet() ||
                    matchedStyles.cssModel().sourceMapManager().sourceMapForClient(header))) {
                return _a.linkifyRuleLocation(matchedStyles.cssModel(), linkifier, rule.styleSheetId, ruleLocation);
            }
            return null;
        }
        function linkifyNode(label) {
            if (header?.ownerNode) {
                const link = (0,_DOMLinkifier_js__WEBPACK_IMPORTED_MODULE_14__.linkifyDeferredNodeReference)(header.ownerNode, {
                    preventKeyboardFocus: false,
                    tooltip: undefined,
                });
                link.textContent = label;
                return link;
            }
            return null;
        }
        if (header?.isMutable && !header.isViaInspector()) {
            const location = header.isConstructedByNew() && !header.sourceMapURL ? null : linkifyRuleLocation();
            if (location) {
                return location;
            }
            const label = header.isConstructedByNew() ? i18nString(UIStrings.constructedStylesheet) : STYLE_TAG;
            const node = linkifyNode(label);
            if (node) {
                return node;
            }
            return document.createTextNode(label);
        }
        const location = linkifyRuleLocation();
        if (location) {
            return location;
        }
        if (rule.isUserAgent()) {
            return document.createTextNode(i18nString(UIStrings.userAgentStylesheet));
        }
        if (rule.isInjected()) {
            return document.createTextNode(i18nString(UIStrings.injectedStylesheet));
        }
        if (rule.isViaInspector()) {
            return document.createTextNode(i18nString(UIStrings.viaInspector));
        }
        const node = linkifyNode(STYLE_TAG);
        if (node) {
            return node;
        }
        return document.createTextNode('');
    }
    createRuleOriginNode(matchedStyles, linkifier, rule) {
        return _a.createRuleOriginNode(matchedStyles, linkifier, rule);
    }
    static getRuleLocationFromCSSRule(rule) {
        let ruleLocation;
        if (rule instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSRule.CSSStyleRule) {
            ruleLocation = rule.style.range;
        }
        else if (rule instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSRule.CSSKeyframeRule) {
            ruleLocation = rule.key().range;
        }
        return ruleLocation;
    }
    static tryNavigateToRuleLocation(matchedStyles, rule) {
        if (!rule) {
            return;
        }
        const ruleLocation = this.getRuleLocationFromCSSRule(rule);
        const header = rule.styleSheetId ? matchedStyles.cssModel().styleSheetHeaderForId(rule.styleSheetId) : null;
        if (ruleLocation && rule.styleSheetId && header && !header.isAnonymousInlineStyleSheet()) {
            const matchingSelectorLocation = this.getCSSSelectorLocation(matchedStyles.cssModel(), rule.styleSheetId, ruleLocation);
            this.revealSelectorSource(matchingSelectorLocation, true);
        }
    }
    static linkifyRuleLocation(cssModel, linkifier, styleSheetId, ruleLocation) {
        const matchingSelectorLocation = this.getCSSSelectorLocation(cssModel, styleSheetId, ruleLocation);
        return linkifier.linkifyCSSLocation(matchingSelectorLocation);
    }
    static getCSSSelectorLocation(cssModel, styleSheetId, ruleLocation) {
        const styleSheetHeader = cssModel.styleSheetHeaderForId(styleSheetId);
        const lineNumber = styleSheetHeader.lineNumberInSource(ruleLocation.startLine);
        const columnNumber = styleSheetHeader.columnNumberInSource(ruleLocation.startLine, ruleLocation.startColumn);
        return new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSModel.CSSLocation(styleSheetHeader, lineNumber, columnNumber);
    }
    getFocused() {
        return this.propertiesTreeOutline.shadowRoot.activeElement || null;
    }
    focusNext(element) {
        // Clear remembered focused item (if any).
        const focused = this.getFocused();
        if (focused) {
            focused.tabIndex = -1;
        }
        // Focus the next item and remember it (if in our subtree).
        element.focus();
        if (this.propertiesTreeOutline.shadowRoot.contains(element)) {
            element.tabIndex = 0;
        }
    }
    ruleNavigation(keyboardEvent) {
        if (keyboardEvent.altKey || keyboardEvent.ctrlKey || keyboardEvent.metaKey || keyboardEvent.shiftKey) {
            return;
        }
        const focused = this.getFocused();
        let focusNext = null;
        const focusable = Array.from(this.propertiesTreeOutline.shadowRoot.querySelectorAll('[tabindex]'));
        if (focusable.length === 0) {
            return;
        }
        const focusedIndex = focused ? focusable.indexOf(focused) : -1;
        if (keyboardEvent.key === 'ArrowLeft') {
            focusNext = focusable[focusedIndex - 1] || this.element;
        }
        else if (keyboardEvent.key === 'ArrowRight') {
            focusNext = focusable[focusedIndex + 1] || this.element;
        }
        else if (keyboardEvent.key === 'ArrowUp' || keyboardEvent.key === 'ArrowDown') {
            this.focusNext(this.element);
            return;
        }
        if (focusNext) {
            this.focusNext(focusNext);
            keyboardEvent.consume(true);
        }
    }
    onKeyDown(event) {
        const keyboardEvent = event;
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.isEditing() || !this.editable || keyboardEvent.altKey || keyboardEvent.ctrlKey ||
            keyboardEvent.metaKey) {
            return;
        }
        switch (keyboardEvent.key) {
            case 'Enter':
            case ' ':
                this.startEditingAtFirstPosition();
                keyboardEvent.consume(true);
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'ArrowUp':
            case 'ArrowDown':
                this.ruleNavigation(keyboardEvent);
                break;
            default:
                // Filter out non-printable key strokes.
                if (keyboardEvent.key.length === 1) {
                    this.addNewBlankProperty(0).startEditingName();
                }
                break;
        }
    }
    setSectionHovered(isHovered) {
        this.element.classList.toggle('styles-panel-hovered', isHovered);
        this.propertiesTreeOutline.element.classList.toggle('styles-panel-hovered', isHovered);
        if (this.hoverableSelectorsMode !== isHovered) {
            this.hoverableSelectorsMode = isHovered;
            this.markSelectorMatches();
        }
    }
    onMouseLeave(_event) {
        this.setSectionHovered(false);
        this.parentPane.setActiveProperty(null);
    }
    onMouseMove(event) {
        const hasCtrlOrMeta = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event);
        this.setSectionHovered(hasCtrlOrMeta);
        const treeElement = this.propertiesTreeOutline.treeElementFromEvent(event);
        if (treeElement instanceof _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_17__.StylePropertyTreeElement) {
            this.parentPane.setActiveProperty(treeElement);
        }
        else {
            this.parentPane.setActiveProperty(null);
        }
        const selection = this.element.getComponentSelection();
        if (!this.selectedSinceMouseDown && selection && selection.toString()) {
            this.selectedSinceMouseDown = true;
        }
    }
    onFontEditorButtonClicked() {
        if (this.fontEditorSectionManager && this.fontEditorButton) {
            void this.fontEditorSectionManager.showPopover(this.fontEditorButton.element, this.parentPane);
        }
    }
    style() {
        return this.styleInternal;
    }
    headerText() {
        if (__classPrivateFieldGet(this, _StylePropertiesSection_customHeaderText, "f")) {
            return __classPrivateFieldGet(this, _StylePropertiesSection_customHeaderText, "f");
        }
        const node = this.matchedStyles.nodeForStyle(this.styleInternal);
        if (this.styleInternal.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSStyleDeclaration.Type.Inline) {
            return this.matchedStyles.isInherited(this.styleInternal) ? i18nString(UIStrings.styleAttribute) :
                'element.style';
        }
        if (node && this.styleInternal.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSStyleDeclaration.Type.Attributes) {
            return i18nString(UIStrings.sattributesStyle, { PH1: node.nodeNameInCorrectCase() });
        }
        if (this.styleInternal.parentRule instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSRule.CSSStyleRule) {
            return this.styleInternal.parentRule.selectorText();
        }
        return '';
    }
    onMouseOutSelector() {
        if (this.hoverTimer) {
            clearTimeout(this.hoverTimer);
        }
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
    }
    onMouseEnterSelector() {
        if (this.hoverTimer) {
            clearTimeout(this.hoverTimer);
        }
        this.hoverTimer = window.setTimeout(this.highlight.bind(this), 300);
    }
    highlight(mode = 'all') {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        const node = this.parentPane.node();
        if (!node) {
            return;
        }
        const selectorList = this.styleInternal.parentRule && this.styleInternal.parentRule instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSRule.CSSStyleRule ?
            this.styleInternal.parentRule.selectorText() :
            undefined;
        node.domModel().overlayModel().highlightInOverlay({ node, selectorList }, mode);
    }
    firstSibling() {
        const parent = this.element.parentElement;
        if (!parent) {
            return null;
        }
        let childElement = parent.firstChild;
        while (childElement) {
            const childSection = this.parentPane.sectionByElement.get(childElement);
            if (childSection) {
                return childSection;
            }
            childElement = childElement.nextSibling;
        }
        return null;
    }
    findCurrentOrNextVisible(willIterateForward, originalSection) {
        if (!this.isHidden()) {
            return this;
        }
        if (this === originalSection) {
            return null;
        }
        if (!originalSection) {
            originalSection = this;
        }
        let visibleSibling = null;
        const nextSibling = willIterateForward ? this.nextSibling() : this.previousSibling();
        if (nextSibling) {
            visibleSibling = nextSibling.findCurrentOrNextVisible(willIterateForward, originalSection);
        }
        else {
            const loopSibling = willIterateForward ? this.firstSibling() : this.lastSibling();
            if (loopSibling) {
                visibleSibling = loopSibling.findCurrentOrNextVisible(willIterateForward, originalSection);
            }
        }
        return visibleSibling;
    }
    lastSibling() {
        const parent = this.element.parentElement;
        if (!parent) {
            return null;
        }
        let childElement = parent.lastChild;
        while (childElement) {
            const childSection = this.parentPane.sectionByElement.get(childElement);
            if (childSection) {
                return childSection;
            }
            childElement = childElement.previousSibling;
        }
        return null;
    }
    nextSibling() {
        let curElement = this.element;
        do {
            curElement = curElement.nextSibling;
        } while (curElement && !this.parentPane.sectionByElement.has(curElement));
        if (curElement) {
            return this.parentPane.sectionByElement.get(curElement);
        }
        return;
    }
    previousSibling() {
        let curElement = this.element;
        do {
            curElement = curElement.previousSibling;
        } while (curElement && !this.parentPane.sectionByElement.has(curElement));
        if (curElement) {
            return this.parentPane.sectionByElement.get(curElement);
        }
        return;
    }
    onNewRuleClick(event) {
        event.data.consume();
        const rule = this.styleInternal.parentRule;
        if (!rule || !rule.style.range || rule.styleSheetId === undefined) {
            return;
        }
        const range = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_8__.TextRange.TextRange.createFromLocation(rule.style.range.endLine, rule.style.range.endColumn + 1);
        this.parentPane.addBlankSection(this, rule.styleSheetId, range);
    }
    styleSheetEdited(edit) {
        const rule = this.styleInternal.parentRule;
        if (rule) {
            rule.rebase(edit);
        }
        else {
            this.styleInternal.rebase(edit);
        }
        this.updateAncestorRuleList();
        this.updateRuleOrigin();
    }
    createAncestorRules(rule) {
        let mediaIndex = 0;
        let containerIndex = 0;
        let scopeIndex = 0;
        let supportsIndex = 0;
        let nestingIndex = 0;
        this.nestingLevel = 0;
        const indent = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').get();
        for (const ruleType of rule.ruleTypes) {
            let ancestorRuleElement;
            switch (ruleType) {
                case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.CSS.CSSRuleType.MediaRule:
                    ancestorRuleElement = this.createMediaElement(rule.media[mediaIndex++]);
                    break;
                case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.CSS.CSSRuleType.ContainerRule:
                    ancestorRuleElement = this.createContainerQueryElement(rule.containerQueries[containerIndex++]);
                    break;
                case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.CSS.CSSRuleType.ScopeRule:
                    ancestorRuleElement = this.createScopeElement(rule.scopes[scopeIndex++]);
                    break;
                case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.CSS.CSSRuleType.SupportsRule:
                    ancestorRuleElement = this.createSupportsElement(rule.supports[supportsIndex++]);
                    break;
                case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.CSS.CSSRuleType.StyleRule:
                    ancestorRuleElement = this.createNestingElement(rule.nestingSelectors?.[nestingIndex++]);
                    break;
            }
            if (ancestorRuleElement) {
                __classPrivateFieldGet(this, _StylePropertiesSection_ancestorRuleListElement, "f").prepend(ancestorRuleElement);
                const closingBrace = document.createElement('div');
                closingBrace.createChild('span', 'styles-clipboard-only').textContent = indent.repeat(this.nestingLevel);
                closingBrace.style.paddingLeft = `${this.nestingLevel}ch`;
                closingBrace.append('}');
                __classPrivateFieldGet(this, _StylePropertiesSection_ancestorClosingBracesElement, "f").prepend(closingBrace);
                this.nestingLevel++;
            }
        }
        if (this.headerText().length === 0) {
            // We reduce one level since no selector means one less pair of braces are added for declarations.
            this.nestingLevel--;
        }
        let curNestingLevel = 0;
        for (const element of __classPrivateFieldGet(this, _StylePropertiesSection_ancestorRuleListElement, "f").children) {
            const indentElement = document.createElement('span');
            indentElement.classList.add('styles-clipboard-only');
            indentElement.setAttribute('slot', 'indent');
            indentElement.textContent = indent.repeat(curNestingLevel);
            element.prepend(indentElement);
            element.style.paddingLeft = `${curNestingLevel}ch`;
            curNestingLevel++;
        }
    }
    createMediaElement(media) {
        // Don't display trivial non-print media types.
        const isMedia = !media.text || !media.text.includes('(') && media.text !== 'print';
        if (isMedia) {
            return;
        }
        let queryPrefix = '';
        let queryText = '';
        let onQueryTextClick;
        switch (media.source) {
            case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMedia.Source.LINKED_SHEET:
            case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMedia.Source.INLINE_SHEET: {
                queryText = `media="${media.text}"`;
                break;
            }
            case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMedia.Source.MEDIA_RULE: {
                queryPrefix = '@media';
                queryText = media.text;
                if (media.styleSheetId) {
                    onQueryTextClick = this.handleQueryRuleClick.bind(this, media);
                }
                break;
            }
            case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMedia.Source.IMPORT_RULE: {
                queryText = `@import ${media.text}`;
                break;
            }
        }
        const mediaQueryElement = new _components_components_js__WEBPACK_IMPORTED_MODULE_13__.CSSQuery.CSSQuery();
        mediaQueryElement.data = {
            queryPrefix,
            queryText,
            onQueryTextClick,
            jslogContext: 'media-query',
        };
        return mediaQueryElement;
    }
    createContainerQueryElement(containerQuery) {
        if (!containerQuery.text) {
            return;
        }
        let onQueryTextClick;
        if (containerQuery.styleSheetId) {
            onQueryTextClick = this.handleQueryRuleClick.bind(this, containerQuery);
        }
        const containerQueryElement = new _components_components_js__WEBPACK_IMPORTED_MODULE_13__.CSSQuery.CSSQuery();
        containerQueryElement.data = {
            queryPrefix: '@container',
            queryName: containerQuery.name,
            queryText: containerQuery.text,
            onQueryTextClick,
            jslogContext: 'container-query',
        };
        if (!/^style\(.*\)/.test(containerQuery.text)) {
            // We only add container element for non-style queries.
            void this.addContainerForContainerQuery(containerQuery);
        }
        return containerQueryElement;
    }
    createScopeElement(scope) {
        let onQueryTextClick;
        if (scope.styleSheetId) {
            onQueryTextClick = this.handleQueryRuleClick.bind(this, scope);
        }
        const scopeElement = new _components_components_js__WEBPACK_IMPORTED_MODULE_13__.CSSQuery.CSSQuery();
        scopeElement.data = {
            queryPrefix: '@scope',
            queryText: scope.text,
            onQueryTextClick,
            jslogContext: 'scope',
        };
        return scopeElement;
    }
    createSupportsElement(supports) {
        if (!supports.text) {
            return;
        }
        let onQueryTextClick;
        if (supports.styleSheetId) {
            onQueryTextClick = this.handleQueryRuleClick.bind(this, supports);
        }
        const supportsElement = new _components_components_js__WEBPACK_IMPORTED_MODULE_13__.CSSQuery.CSSQuery();
        supportsElement.data = {
            queryPrefix: '@supports',
            queryText: supports.text,
            onQueryTextClick,
            jslogContext: 'supports',
        };
        return supportsElement;
    }
    createNestingElement(nestingSelector) {
        if (!nestingSelector) {
            return;
        }
        const nestingElement = document.createElement('div');
        nestingElement.textContent = `${nestingSelector} {`;
        return nestingElement;
    }
    async addContainerForContainerQuery(containerQuery) {
        const container = await containerQuery.getContainerForNode(this.matchedStyles.node().id);
        if (!container) {
            return;
        }
        const containerElement = new _components_components_js__WEBPACK_IMPORTED_MODULE_13__.QueryContainer.QueryContainer();
        containerElement.data = {
            container: _components_components_js__WEBPACK_IMPORTED_MODULE_13__.Helper.legacyNodeToElementsComponentsNode(container.containerNode),
            queryName: containerQuery.name,
            onContainerLinkClick: event => {
                event.preventDefault();
                void _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_15__.ElementsPanel.instance().revealAndSelectNode(container.containerNode, true, true);
                void container.containerNode.scrollIntoView();
            },
        };
        containerElement.addEventListener('queriedsizerequested', async () => {
            const details = await container.getContainerSizeDetails();
            if (details) {
                containerElement.updateContainerQueriedSizeDetails(details);
            }
        });
        __classPrivateFieldGet(this, _StylePropertiesSection_ancestorRuleListElement, "f").prepend(containerElement);
    }
    updateAncestorRuleList() {
        __classPrivateFieldGet(this, _StylePropertiesSection_ancestorRuleListElement, "f").removeChildren();
        __classPrivateFieldGet(this, _StylePropertiesSection_ancestorClosingBracesElement, "f").removeChildren();
        if (this.styleInternal.parentRule && this.styleInternal.parentRule instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSRule.CSSStyleRule) {
            this.createAncestorRules(this.styleInternal.parentRule);
        }
        __classPrivateFieldGet(this, _StylePropertiesSection_styleRuleElement, "f").style.paddingLeft = `${this.nestingLevel}ch`;
    }
    isPropertyInherited(propertyName) {
        if (this.matchedStyles.isInherited(this.styleInternal)) {
            // While rendering inherited stylesheet, reverse meaning of this property.
            // Render truly inherited properties with black, i.e. return them as non-inherited.
            return !_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMetadata.cssMetadata().isPropertyInherited(propertyName);
        }
        return false;
    }
    nextEditableSibling() {
        let curSection = this;
        do {
            curSection = curSection.nextSibling();
        } while (curSection && !curSection.editable);
        if (!curSection) {
            curSection = this.firstSibling();
            while (curSection && !curSection.editable) {
                curSection = curSection.nextSibling();
            }
        }
        return (curSection && curSection.editable) ? curSection : null;
    }
    previousEditableSibling() {
        let curSection = this;
        do {
            curSection = curSection.previousSibling();
        } while (curSection && !curSection.editable);
        if (!curSection) {
            curSection = this.lastSibling();
            while (curSection && !curSection.editable) {
                curSection = curSection.previousSibling();
            }
        }
        return (curSection && curSection.editable) ? curSection : null;
    }
    refreshUpdate(editedTreeElement) {
        this.parentPane.refreshUpdate(this, editedTreeElement);
    }
    updateVarFunctions(editedTreeElement) {
        let child = this.propertiesTreeOutline.firstChild();
        while (child) {
            if (child !== editedTreeElement && child instanceof _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_17__.StylePropertyTreeElement) {
                child.updateTitleIfComputedValueChanged();
            }
            child = child.traverseNextTreeElement(false /* skipUnrevealed */, null /* stayWithin */, true /* dontPopulate */);
        }
    }
    update(full) {
        const headerText = this.headerText();
        this.selectorElement.textContent = headerText;
        this.titleElement.classList.toggle('hidden', headerText.length === 0);
        this.markSelectorMatches();
        if (full) {
            this.onpopulate();
        }
        else {
            let child = this.propertiesTreeOutline.firstChild();
            while (child && child instanceof _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_17__.StylePropertyTreeElement) {
                child.setOverloaded(this.isPropertyOverloaded(child.property));
                child =
                    child.traverseNextTreeElement(false /* skipUnrevealed */, null /* stayWithin */, true /* dontPopulate */);
            }
        }
    }
    showAllItems(event) {
        if (event) {
            event.consume();
        }
        if (this.forceShowAll) {
            return;
        }
        this.forceShowAll = true;
        this.onpopulate();
    }
    onpopulate() {
        this.parentPane.setActiveProperty(null);
        this.nextEditorTriggerButtonIdx = 1;
        this.propertiesTreeOutline.removeChildren();
        const style = this.styleInternal;
        let count = 0;
        const properties = style.leadingProperties();
        const maxProperties = DEFAULT_MAX_PROPERTIES + properties.length - this.originalPropertiesCount;
        for (const property of properties) {
            if (!this.forceShowAll && count >= maxProperties) {
                break;
            }
            count++;
            const isShorthand = property.getLonghandProperties().length > 0;
            const inherited = this.isPropertyInherited(property.name);
            const overloaded = this.isPropertyOverloaded(property);
            if (style.parentRule && style.parentRule.isUserAgent() && inherited) {
                continue;
            }
            const item = new _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_17__.StylePropertyTreeElement({
                stylesPane: this.parentPane,
                section: this,
                matchedStyles: this.matchedStyles,
                property,
                isShorthand,
                inherited,
                overloaded,
                newProperty: false,
            });
            item.setComputedStyles(this.computedStyles);
            item.setParentsComputedStyles(this.parentsComputedStyles);
            this.propertiesTreeOutline.appendChild(item);
        }
        if (count < properties.length) {
            this.showAllButton.classList.remove('hidden');
            this.showAllButton.textContent = i18nString(UIStrings.showAllPropertiesSMore, { PH1: properties.length - count });
        }
        else {
            this.showAllButton.classList.add('hidden');
        }
    }
    isPropertyOverloaded(property) {
        return this.matchedStyles.propertyState(property) === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMatchedStyles.PropertyState.Overloaded;
    }
    updateFilter() {
        let hasMatchingChild = false;
        this.showAllItems();
        for (const child of this.propertiesTreeOutline.rootElement().children()) {
            if (child instanceof _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_17__.StylePropertyTreeElement) {
                const childHasMatches = child.updateFilter();
                hasMatchingChild = hasMatchingChild || childHasMatches;
            }
        }
        const regex = this.parentPane.filterRegex();
        const hideRule = !hasMatchingChild && regex !== null && !regex.test(this.element.deepTextContent());
        this.isHiddenInternal = hideRule;
        this.element.classList.toggle('hidden', hideRule);
        if (!hideRule && this.styleInternal.parentRule) {
            this.markSelectorHighlights();
        }
        return !hideRule;
    }
    isHidden() {
        return this.isHiddenInternal;
    }
    markSelectorMatches() {
        const rule = this.styleInternal.parentRule;
        if (!rule || !(rule instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSRule.CSSStyleRule)) {
            return;
        }
        const matchingSelectorIndexes = this.matchedStyles.getMatchingSelectors(rule);
        const matchingSelectors = new Array(rule.selectors.length).fill(false);
        for (const matchingIndex of matchingSelectorIndexes) {
            matchingSelectors[matchingIndex] = true;
        }
        if (this.parentPane.isEditingStyle) {
            return;
        }
        const fragment = _a.renderSelectors(rule.selectors, matchingSelectors, this.elementToSelectorIndex);
        this.selectorElement.removeChildren();
        this.selectorElement.appendChild(fragment);
        this.markSelectorHighlights();
    }
    static getSpecificityStoredForNodeElement(element) {
        return __classPrivateFieldGet(_a, _a, "f", _StylePropertiesSection_nodeElementToSpecificity).get(element);
    }
    static renderSelectors(selectors, matchingSelectors, elementToSelectorIndex) {
        const fragment = document.createDocumentFragment();
        for (const [i, selector] of selectors.entries()) {
            if (i) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.createTextChild(fragment, ', ');
            }
            const selectorElement = document.createElement('span');
            selectorElement.classList.add('simple-selector');
            selectorElement.classList.toggle('selector-matches', matchingSelectors[i]);
            if (selector.specificity) {
                __classPrivateFieldGet(_a, _a, "f", _StylePropertiesSection_nodeElementToSpecificity).set(selectorElement, selector.specificity);
            }
            elementToSelectorIndex.set(selectorElement, i);
            selectorElement.textContent = selectors[i].text;
            fragment.append(selectorElement);
        }
        return fragment;
    }
    markSelectorHighlights() {
        const selectors = this.selectorElement.getElementsByClassName('simple-selector');
        const regex = this.parentPane.filterRegex();
        for (let i = 0; i < selectors.length; ++i) {
            const selectorMatchesFilter = regex !== null && regex.test(selectors[i].textContent || '');
            selectors[i].classList.toggle('filter-match', selectorMatchesFilter);
        }
    }
    addNewBlankProperty(index = this.propertiesTreeOutline.rootElement().childCount()) {
        const property = this.styleInternal.newBlankProperty(index);
        const item = new _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_17__.StylePropertyTreeElement({
            stylesPane: this.parentPane,
            section: this,
            matchedStyles: this.matchedStyles,
            property,
            isShorthand: false,
            inherited: false,
            overloaded: false,
            newProperty: true,
        });
        this.propertiesTreeOutline.insertChild(item, property.index);
        return item;
    }
    handleEmptySpaceMouseDown() {
        this.willCauseCancelEditing = this.parentPane.isEditingStyle;
        this.selectedSinceMouseDown = false;
    }
    handleEmptySpaceClick(event) {
        // `this.willCauseCancelEditing` is a hacky way to understand whether we should
        // create a new property or not on empty space click.
        // For empty space clicks, the order of events are:
        // when there isn't an edit operation going on:
        //     * empty space mousedown -> empty space click
        // when there is an edit operation going on:
        //     * empty space mousedown -> text prompt blur -> empty space click
        // text prompt blur sets the `isEditingStyle` to be `false` in parent pane.
        // If we check `isEditingStyle` inside empty space click handler, it will
        // always say `false` and will always cause a new blank property to be added.
        // Because of this, we're checking and saving whether there is an ongoing
        // edit operation inside empty space mousedown handler.
        if (!this.editable || this.element.hasSelection() || this.willCauseCancelEditing || this.selectedSinceMouseDown) {
            return;
        }
        const target = event.target;
        if (target.classList.contains('header') || this.element.classList.contains('read-only') ||
            target.enclosingNodeOrSelfWithClass('ancestor-rule-list')) {
            event.consume();
            return;
        }
        const deepTarget = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.deepElementFromEvent(event);
        const treeElement = deepTarget && _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeElement.getTreeElementBylistItemNode(deepTarget);
        if (treeElement && treeElement instanceof _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_17__.StylePropertyTreeElement) {
            this.addNewBlankProperty(treeElement.property.index + 1).startEditingName();
        }
        else if (target.classList.contains('selector-container') || target.classList.contains('styles-section-subtitle')) {
            this.addNewBlankProperty(0).startEditingName();
        }
        else {
            this.addNewBlankProperty().startEditingName();
        }
        event.consume(true);
    }
    handleQueryRuleClick(query, event) {
        const element = event.currentTarget;
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.isBeingEdited(element)) {
            return;
        }
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event) && this.navigable) {
            const location = query.rawLocation();
            if (!location) {
                event.consume(true);
                return;
            }
            const uiLocation = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_7__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().rawLocationToUILocation(location);
            if (uiLocation) {
                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiLocation);
            }
            event.consume(true);
            return;
        }
        if (!this.editable) {
            return;
        }
        const config = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.InplaceEditor.Config(this.editingMediaCommitted.bind(this, query), this.editingMediaCancelled.bind(this, element), undefined, this.editingMediaBlurHandler.bind(this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.InplaceEditor.InplaceEditor.startEditing(element, config);
        const selection = element.getComponentSelection();
        if (selection) {
            selection.selectAllChildren(element);
        }
        this.parentPane.setEditingStyle(true);
        const parentMediaElement = element.enclosingNodeOrSelfWithClass('query');
        parentMediaElement.classList.add('editing-query');
        event.consume(true);
    }
    editingMediaFinished(element) {
        this.parentPane.setEditingStyle(false);
        const parentMediaElement = element.enclosingNodeOrSelfWithClass('query');
        parentMediaElement.classList.remove('editing-query');
    }
    editingMediaCancelled(element) {
        this.editingMediaFinished(element);
        // Mark the selectors in group if necessary.
        // This is overridden by BlankStylePropertiesSection.
        this.markSelectorMatches();
        const selection = element.getComponentSelection();
        if (selection) {
            selection.collapse(element, 0);
        }
    }
    editingMediaBlurHandler() {
        return true;
    }
    async editingMediaCommitted(query, element, newContent, _oldContent, _context, _moveDirection) {
        this.parentPane.setEditingStyle(false);
        this.editingMediaFinished(element);
        if (newContent) {
            newContent = newContent.trim();
        }
        // This gets deleted in finishOperation(), which is called both on success and failure.
        this.parentPane.setUserOperation(true);
        const cssModel = this.parentPane.cssModel();
        if (cssModel && query.styleSheetId) {
            const range = query.range;
            let success = false;
            if (query instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSContainerQuery.CSSContainerQuery) {
                success = await cssModel.setContainerQueryText(query.styleSheetId, range, newContent);
            }
            else if (query instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSSupports.CSSSupports) {
                success = await cssModel.setSupportsText(query.styleSheetId, range, newContent);
            }
            else if (query instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSScope.CSSScope) {
                success = await cssModel.setScopeText(query.styleSheetId, range, newContent);
            }
            else {
                success = await cssModel.setMediaText(query.styleSheetId, range, newContent);
            }
            if (success) {
                this.matchedStyles.resetActiveProperties();
                this.parentPane.refreshUpdate(this);
            }
            this.parentPane.setUserOperation(false);
            this.editingMediaTextCommittedForTest();
        }
    }
    editingMediaTextCommittedForTest() {
    }
    handleSelectorClick(event) {
        const target = event.target;
        if (!target) {
            return;
        }
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event) && this.navigable &&
            target.classList.contains('simple-selector')) {
            const selectorIndex = this.elementToSelectorIndex.get(target);
            if (selectorIndex) {
                this.navigateToSelectorSource(selectorIndex, true);
            }
            event.consume(true);
            return;
        }
        if (this.element.hasSelection()) {
            return;
        }
        this.startEditingAtFirstPosition();
        event.consume(true);
    }
    handleContextMenuEvent(event) {
        const target = event.target;
        if (!target) {
            return;
        }
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ContextMenu.ContextMenu(event);
        contextMenu.clipboardSection().appendItem(i18nString(UIStrings.copySelector), () => {
            const selectorText = this.headerText();
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(selectorText);
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.styleTextCopied(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.StyleTextCopied.SelectorViaContextMenu);
        }, { jslogContext: 'copy-selector' });
        contextMenu.clipboardSection().appendItem(i18nString(UIStrings.copyRule), () => {
            const ruleText = _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_18__.StylesSidebarPane.formatLeadingProperties(this).ruleText;
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(ruleText);
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.styleTextCopied(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.StyleTextCopied.RuleViaContextMenu);
        }, { jslogContext: 'copy-rule' });
        contextMenu.clipboardSection().appendItem(i18nString(UIStrings.copyAllDeclarations), () => {
            const allDeclarationText = _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_18__.StylesSidebarPane.formatLeadingProperties(this).allDeclarationText;
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(allDeclarationText);
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.styleTextCopied(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.StyleTextCopied.AllDeclarationsViaContextMenu);
        }, { jslogContext: 'copy-all-declarations' });
        // TODO(changhaohan): conditionally add this item only when there are changes to copy
        contextMenu.clipboardSection().appendItem(i18nString(UIStrings.copyAllCSSChanges), async () => {
            const allChanges = await this.parentPane.getFormattedChanges();
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(allChanges);
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.styleTextCopied(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.StyleTextCopied.AllChangesViaStylesPane);
        }, { jslogContext: 'copy-all-css-changes' });
        void contextMenu.show();
    }
    navigateToSelectorSource(index, focus) {
        const cssModel = this.parentPane.cssModel();
        if (!cssModel) {
            return;
        }
        const rule = this.styleInternal.parentRule;
        if (!rule || rule.styleSheetId === undefined) {
            return;
        }
        const header = cssModel.styleSheetHeaderForId(rule.styleSheetId);
        if (!header) {
            return;
        }
        const rawLocation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSModel.CSSLocation(header, rule.lineNumberInSource(index), rule.columnNumberInSource(index));
        _a.revealSelectorSource(rawLocation, focus);
    }
    static revealSelectorSource(rawLocation, focus) {
        const uiLocation = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_7__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().rawLocationToUILocation(rawLocation);
        if (uiLocation) {
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiLocation, !focus);
        }
    }
    startEditingAtFirstPosition() {
        if (!this.editable) {
            return;
        }
        if (!this.styleInternal.parentRule) {
            this.moveEditorFromSelector('forward');
            return;
        }
        this.startEditingSelector();
    }
    startEditingSelector() {
        const element = this.selectorElement;
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.isBeingEdited(element)) {
            return;
        }
        element.scrollIntoViewIfNeeded(false);
        // Reset selector marks in group, and normalize whitespace.
        const textContent = element.textContent;
        if (textContent !== null) {
            element.textContent = textContent.replace(/\s+/g, ' ').trim();
        }
        const config = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.InplaceEditor.Config(this.editingSelectorCommitted.bind(this), this.editingSelectorCancelled.bind(this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.InplaceEditor.InplaceEditor.startEditing(this.selectorElement, config);
        const selection = element.getComponentSelection();
        if (selection) {
            selection.selectAllChildren(element);
        }
        this.parentPane.setEditingStyle(true);
        if (element.classList.contains('simple-selector')) {
            this.navigateToSelectorSource(0, false);
        }
    }
    moveEditorFromSelector(moveDirection) {
        this.markSelectorMatches();
        if (!moveDirection) {
            return;
        }
        if (moveDirection === 'forward') {
            const firstChild = this.propertiesTreeOutline.firstChild();
            let currentChild = firstChild;
            while (currentChild && currentChild.inherited()) {
                const sibling = currentChild.nextSibling;
                currentChild = sibling instanceof _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_17__.StylePropertyTreeElement ? sibling : null;
            }
            if (!currentChild) {
                this.addNewBlankProperty().startEditingName();
            }
            else {
                currentChild.startEditingName();
            }
        }
        else {
            const previousSection = this.previousEditableSibling();
            if (!previousSection) {
                return;
            }
            previousSection.addNewBlankProperty().startEditingName();
        }
    }
    editingSelectorCommitted(element, newContent, oldContent, context, moveDirection) {
        this.editingSelectorEnded();
        if (newContent) {
            newContent = newContent.trim();
        }
        if (newContent === oldContent) {
            // Revert to a trimmed version of the selector if need be.
            this.selectorElement.textContent = newContent;
            this.moveEditorFromSelector(moveDirection);
            return;
        }
        const rule = this.styleInternal.parentRule;
        if (!rule) {
            return;
        }
        function headerTextCommitted() {
            this.parentPane.setUserOperation(false);
            this.moveEditorFromSelector(moveDirection);
            this.editingSelectorCommittedForTest();
        }
        // This gets deleted in finishOperationAndMoveEditor(), which is called both on success and failure.
        this.parentPane.setUserOperation(true);
        void this.setHeaderText(rule, newContent).then(headerTextCommitted.bind(this));
    }
    setHeaderText(rule, newContent) {
        function onSelectorsUpdated(rule, success) {
            if (!success) {
                return Promise.resolve();
            }
            return this.matchedStyles.recomputeMatchingSelectors(rule).then(updateSourceRanges.bind(this, rule));
        }
        function updateSourceRanges(rule) {
            const doesAffectSelectedNode = this.matchedStyles.getMatchingSelectors(rule).length > 0;
            this.propertiesTreeOutline.element.classList.toggle('no-affect', !doesAffectSelectedNode);
            this.matchedStyles.resetActiveProperties();
            this.parentPane.refreshUpdate(this);
        }
        if (!(rule instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSRule.CSSStyleRule)) {
            return Promise.resolve();
        }
        const oldSelectorRange = rule.selectorRange();
        if (!oldSelectorRange) {
            return Promise.resolve();
        }
        __classPrivateFieldSet(this, _StylePropertiesSection_customHeaderText, undefined, "f");
        return rule.setSelectorText(newContent).then(onSelectorsUpdated.bind(this, rule, Boolean(oldSelectorRange)));
    }
    editingSelectorCommittedForTest() {
    }
    updateRuleOrigin() {
        this.selectorRefElement.removeChildren();
        this.selectorRefElement.appendChild(this.createRuleOriginNode(this.matchedStyles, this.parentPane.linkifier, this.styleInternal.parentRule));
    }
    editingSelectorEnded() {
        this.parentPane.setEditingStyle(false);
    }
    editingSelectorCancelled() {
        this.editingSelectorEnded();
        // Mark the selectors in group if necessary.
        // This is overridden by BlankStylePropertiesSection.
        this.markSelectorMatches();
    }
    /**
     * A property at or near an index and suitable for subsequent editing.
     * Either the last property, if index out-of-upper-bound,
     * or property at index, if such a property exists,
     * or otherwise, null.
     */
    closestPropertyForEditing(propertyIndex) {
        const rootElement = this.propertiesTreeOutline.rootElement();
        if (propertyIndex >= rootElement.childCount()) {
            return rootElement.lastChild();
        }
        return rootElement.childAt(propertyIndex);
    }
}
_a = StylePropertiesSection, _StylePropertiesSection_styleRuleElement = new WeakMap(), _StylePropertiesSection_ancestorRuleListElement = new WeakMap(), _StylePropertiesSection_ancestorClosingBracesElement = new WeakMap(), _StylePropertiesSection_customHeaderText = new WeakMap();
// Used to keep track of Specificity Information
_StylePropertiesSection_nodeElementToSpecificity = { value: new WeakMap() };
class BlankStylePropertiesSection extends StylePropertiesSection {
    constructor(stylesPane, matchedStyles, defaultSelectorText, styleSheetId, ruleLocation, insertAfterStyle, sectionIdx) {
        const cssModel = stylesPane.cssModel();
        const rule = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSRule.CSSStyleRule.createDummyRule(cssModel, defaultSelectorText);
        super(stylesPane, matchedStyles, rule.style, sectionIdx, null, null);
        Object.defineProperty(this, "normal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ruleLocation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "styleSheetId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.normal = false;
        this.ruleLocation = ruleLocation;
        this.styleSheetId = styleSheetId;
        this.selectorRefElement.removeChildren();
        this.selectorRefElement.appendChild(StylePropertiesSection.linkifyRuleLocation(cssModel, this.parentPane.linkifier, styleSheetId, this.actualRuleLocation()));
        if (insertAfterStyle && insertAfterStyle.parentRule &&
            insertAfterStyle.parentRule instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSRule.CSSStyleRule) {
            this.createAncestorRules(insertAfterStyle.parentRule);
        }
        this.element.classList.add('blank-section');
    }
    actualRuleLocation() {
        const prefix = this.rulePrefix();
        const lines = prefix.split('\n');
        const lastLine = lines[lines.length - 1];
        const editRange = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_8__.TextRange.TextRange(0, 0, lines.length - 1, lastLine ? lastLine.length : 0);
        return this.ruleLocation.rebaseAfterTextEdit(_models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_8__.TextRange.TextRange.createFromLocation(0, 0), editRange);
    }
    rulePrefix() {
        return this.ruleLocation.startLine === 0 && this.ruleLocation.startColumn === 0 ? '' : '\n\n';
    }
    get isBlank() {
        return !this.normal;
    }
    editingSelectorCommitted(element, newContent, oldContent, context, moveDirection) {
        if (!this.isBlank) {
            super.editingSelectorCommitted(element, newContent, oldContent, context, moveDirection);
            return;
        }
        function onRuleAdded(newRule) {
            if (!newRule) {
                this.editingSelectorCancelled();
                this.editingSelectorCommittedForTest();
                return Promise.resolve();
            }
            return this.matchedStyles.addNewRule(newRule, this.matchedStyles.node())
                .then(onAddedToCascade.bind(this, newRule));
        }
        function onAddedToCascade(newRule) {
            const doesSelectorAffectSelectedNode = this.matchedStyles.getMatchingSelectors(newRule).length > 0;
            this.makeNormal(newRule);
            if (!doesSelectorAffectSelectedNode) {
                this.propertiesTreeOutline.element.classList.add('no-affect');
            }
            this.updateRuleOrigin();
            this.parentPane.setUserOperation(false);
            this.editingSelectorEnded();
            if (this.element.parentElement) // Might have been detached already.
             {
                this.moveEditorFromSelector(moveDirection);
            }
            this.markSelectorMatches();
            this.editingSelectorCommittedForTest();
        }
        if (newContent) {
            newContent = newContent.trim();
        }
        this.parentPane.setUserOperation(true);
        const cssModel = this.parentPane.cssModel();
        const ruleText = this.rulePrefix() + newContent + ' {}';
        if (cssModel) {
            void cssModel.addRule(this.styleSheetId, ruleText, this.ruleLocation).then(onRuleAdded.bind(this));
        }
    }
    editingSelectorCancelled() {
        this.parentPane.setUserOperation(false);
        if (!this.isBlank) {
            super.editingSelectorCancelled();
            return;
        }
        this.editingSelectorEnded();
        this.parentPane.removeSection(this);
    }
    makeNormal(newRule) {
        this.element.classList.remove('blank-section');
        this.styleInternal = newRule.style;
        // FIXME: replace this instance by a normal StylePropertiesSection.
        this.normal = true;
    }
}
class RegisteredPropertiesSection extends StylePropertiesSection {
    constructor(stylesPane, matchedStyles, style, sectionIdx, propertyName, expandedByDefault) {
        super(stylesPane, matchedStyles, style, sectionIdx, null, null, propertyName);
        if (!expandedByDefault) {
            this.element.classList.add('hidden');
        }
        this.selectorElement.className = 'property-registration-key';
    }
    async setHeaderText(rule, newContent) {
        if (!(rule instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSRule.CSSPropertyRule)) {
            return;
        }
        const oldRange = rule.propertyName().range;
        if (!oldRange) {
            return;
        }
        if (await rule.setPropertyName(newContent)) {
            this.parentPane.forceUpdate();
        }
    }
    createRuleOriginNode(matchedStyles, linkifier, rule) {
        if (rule) {
            return super.createRuleOriginNode(matchedStyles, linkifier, rule);
        }
        return document.createTextNode('CSS.registerProperty');
    }
}
class FontPaletteValuesRuleSection extends StylePropertiesSection {
    constructor(stylesPane, matchedStyles, style, sectionIdx) {
        super(stylesPane, matchedStyles, style, sectionIdx, null, null);
        this.selectorElement.className = 'font-palette-values-key';
    }
}
class PositionTryRuleSection extends StylePropertiesSection {
    constructor(stylesPane, matchedStyles, style, sectionIdx, active) {
        super(stylesPane, matchedStyles, style, sectionIdx, null, null);
        this.selectorElement.className = 'position-try-values-key';
        this.propertiesTreeOutline.element.classList.toggle('no-affect', !active);
    }
}
class KeyframePropertiesSection extends StylePropertiesSection {
    constructor(stylesPane, matchedStyles, style, sectionIdx) {
        super(stylesPane, matchedStyles, style, sectionIdx, null, null);
        this.selectorElement.className = 'keyframe-key';
    }
    headerText() {
        if (this.styleInternal.parentRule instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSRule.CSSKeyframeRule) {
            return this.styleInternal.parentRule.key().text;
        }
        return '';
    }
    setHeaderText(rule, newContent) {
        function updateSourceRanges(success) {
            if (!success) {
                return;
            }
            this.parentPane.refreshUpdate(this);
        }
        if (!(rule instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSRule.CSSKeyframeRule)) {
            return Promise.resolve();
        }
        const oldRange = rule.key().range;
        if (!oldRange) {
            return Promise.resolve();
        }
        return rule.setKeyText(newContent).then(updateSourceRanges.bind(this));
    }
    isPropertyInherited(_propertyName) {
        return false;
    }
    isPropertyOverloaded(_property) {
        return false;
    }
    markSelectorHighlights() {
    }
    markSelectorMatches() {
        if (this.styleInternal.parentRule instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSRule.CSSKeyframeRule) {
            this.selectorElement.textContent = this.styleInternal.parentRule.key().text;
        }
    }
    highlight() {
    }
}
class HighlightPseudoStylePropertiesSection extends StylePropertiesSection {
    isPropertyInherited(_propertyName) {
        // For highlight pseudos, all valid properties are treated as inherited.
        // Note that the meaning is reversed in this context; the result of
        // returning false here is that properties of inherited pseudos will never
        // be shown in the darker style of non-inherited properties.
        return false;
    }
}


/***/ }),

/***/ "./src/panels/elements/StylePropertyHighlighter.ts":
/*!*********************************************************!*\
  !*** ./src/panels/elements/StylePropertyHighlighter.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StylePropertyHighlighter: () => (/* binding */ StylePropertyHighlighter)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/panels/utils/utils.ts");
/* harmony import */ var _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StylePropertyTreeElement.js */ "./src/panels/elements/StylePropertyTreeElement.ts");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class StylePropertyHighlighter {
    constructor(ssp) {
        Object.defineProperty(this, "styleSidebarPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.styleSidebarPane = ssp;
    }
    /**
     * Expand all shorthands, find the given property, scroll to it and highlight it.
     */
    highlightProperty(cssProperty) {
        // Expand all shorthands.
        for (const section of this.styleSidebarPane.allSections()) {
            for (let treeElement = section.propertiesTreeOutline.firstChild(); treeElement; treeElement = treeElement.nextSibling) {
                void treeElement.onpopulate();
            }
        }
        const section = this.styleSidebarPane.allSections().find(section => section.style().leadingProperties().includes(cssProperty));
        if (!section) {
            return;
        }
        section.showAllItems();
        const treeElement = this.findTreeElementFromSection(treeElement => treeElement.property === cssProperty, section);
        if (treeElement) {
            treeElement.parent && treeElement.parent.expand();
            this.scrollAndHighlightTreeElement(treeElement);
            section.element.focus();
        }
    }
    findAndHighlightSectionBlock(sectionBlockName) {
        const block = this.styleSidebarPane.getSectionBlockByName(sectionBlockName);
        if (!block || block.sections.length === 0) {
            return;
        }
        const [section] = block.sections;
        section.showAllItems();
        _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.PanelUtils.highlightElement(block.titleElement());
    }
    findAndHighlightSection(sectionName, blockName) {
        const block = this.styleSidebarPane.getSectionBlockByName(blockName);
        const section = block?.sections.find(section => section.headerText() === sectionName);
        if (!section || !block) {
            return;
        }
        block.expand(true);
        section.showAllItems();
        _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.PanelUtils.highlightElement(section.element);
    }
    /**
     * Find the first non-overridden property that matches the provided name, scroll to it and highlight it.
     */
    findAndHighlightPropertyName(propertyName, sectionName, blockName) {
        const block = blockName ? this.styleSidebarPane.getSectionBlockByName(blockName) : undefined;
        const sections = block?.sections ?? this.styleSidebarPane.allSections();
        if (!sections) {
            return false;
        }
        for (const section of sections) {
            if (sectionName && section.headerText() !== sectionName) {
                continue;
            }
            if (!section.style().hasActiveProperty(propertyName)) {
                continue;
            }
            block?.expand(true);
            section.showAllItems();
            const treeElement = this.findTreeElementFromSection(treeElement => treeElement.property.name === propertyName && !treeElement.overloaded(), section);
            if (treeElement) {
                this.scrollAndHighlightTreeElement(treeElement);
                section.element.focus();
                return true;
            }
        }
        return false;
    }
    /**
     * Traverse the styles pane tree, execute the provided callback for every tree element found, and
     * return the first tree element and corresponding section for which the callback returns a truthy value.
     */
    findTreeElementAndSection(compareCb) {
        for (const section of this.styleSidebarPane.allSections()) {
            const treeElement = this.findTreeElementFromSection(compareCb, section);
            if (treeElement) {
                return { treeElement, section };
            }
        }
        return { treeElement: null, section: null };
    }
    findTreeElementFromSection(compareCb, section) {
        let treeElement = section.propertiesTreeOutline.firstChild();
        while (treeElement && (treeElement instanceof _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_1__.StylePropertyTreeElement)) {
            if (compareCb(treeElement)) {
                return treeElement;
            }
            treeElement = treeElement.traverseNextTreeElement(false, null, true);
        }
        return null;
    }
    scrollAndHighlightTreeElement(treeElement) {
        _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.PanelUtils.highlightElement(treeElement.listItemElement);
    }
}


/***/ }),

/***/ "./src/panels/elements/StylePropertyTreeElement.ts":
/*!*********************************************************!*\
  !*** ./src/panels/elements/StylePropertyTreeElement.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnchorFunctionRenderer: () => (/* binding */ AnchorFunctionRenderer),
/* harmony export */   AngleRenderer: () => (/* binding */ AngleRenderer),
/* harmony export */   BezierRenderer: () => (/* binding */ BezierRenderer),
/* harmony export */   ColorMixRenderer: () => (/* binding */ ColorMixRenderer),
/* harmony export */   ColorRenderer: () => (/* binding */ ColorRenderer),
/* harmony export */   FontRenderer: () => (/* binding */ FontRenderer),
/* harmony export */   GridTemplateRenderer: () => (/* binding */ GridTemplateRenderer),
/* harmony export */   LengthRenderer: () => (/* binding */ LengthRenderer),
/* harmony export */   LightDarkColorRenderer: () => (/* binding */ LightDarkColorRenderer),
/* harmony export */   LinearGradientRenderer: () => (/* binding */ LinearGradientRenderer),
/* harmony export */   LinkableNameRenderer: () => (/* binding */ LinkableNameRenderer),
/* harmony export */   PositionAnchorRenderer: () => (/* binding */ PositionAnchorRenderer),
/* harmony export */   ShadowModel: () => (/* binding */ ShadowModel),
/* harmony export */   ShadowPropertyType: () => (/* binding */ ShadowPropertyType),
/* harmony export */   ShadowRenderer: () => (/* binding */ ShadowRenderer),
/* harmony export */   StylePropertyTreeElement: () => (/* binding */ StylePropertyTreeElement),
/* harmony export */   VariableRenderer: () => (/* binding */ VariableRenderer),
/* harmony export */   activeHints: () => (/* binding */ activeHints)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/components/color_picker/color_picker.js */ "./src/ui/legacy/components/color_picker/color_picker.ts");
/* harmony import */ var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/components/inline_editor/inline_editor.js */ "./src/ui/legacy/components/inline_editor/inline_editor.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ColorSwatchPopoverIcon.js */ "./src/panels/elements/ColorSwatchPopoverIcon.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/elements/components/components.ts");
/* harmony import */ var _CSSRuleValidator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CSSRuleValidator.js */ "./src/panels/elements/CSSRuleValidator.ts");
/* harmony import */ var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ElementsPanel.js */ "./src/panels/elements/ElementsPanel.ts");
/* harmony import */ var _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./PropertyMatchers.js */ "./src/panels/elements/PropertyMatchers.ts");
/* harmony import */ var _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./PropertyRenderer.js */ "./src/panels/elements/PropertyRenderer.ts");
/* harmony import */ var _StyleEditorWidget_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./StyleEditorWidget.js */ "./src/panels/elements/StyleEditorWidget.ts");
/* harmony import */ var _StylePropertyUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./StylePropertyUtils.js */ "./src/panels/elements/StylePropertyUtils.ts");
/* harmony import */ var _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./StylesSidebarPane.js */ "./src/panels/elements/StylesSidebarPane.ts");
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
var _VariableRenderer_instances, _VariableRenderer_treeElement, _VariableRenderer_style, _VariableRenderer_pane_get, _VariableRenderer_matchedStyles_get, _VariableRenderer_handleVarDefinitionActivate, _ColorRenderer_instances, _ColorRenderer_getValueChild, _ColorRenderer_addColorContrastInfo, _LightDarkColorRenderer_instances, _LightDarkColorRenderer_treeElement, _LightDarkColorRenderer_activeColor, _ColorMixRenderer_pane, _AngleRenderer_treeElement, _LinkableNameRenderer_instances, _LinkableNameRenderer_treeElement, _LinkableNameRenderer_getLinkData, _BezierRenderer_treeElement, _ShadowModel_instances, _ShadowModel_properties, _ShadowModel_shadowType, _ShadowModel_context, _ShadowModel_length, _ShadowModel_needsExpansion, _ShadowModel_expandPropertyIfNeeded, _ShadowModel_expandOrGetProperty, _ShadowModel_setLength, _ShadowRenderer_treeElement, _LengthRenderer_treeElement, _AnchorFunctionRenderer_instances, _AnchorFunctionRenderer_treeElement, _AnchorFunctionRenderer_decorateAnchor, _PositionAnchorRenderer_treeElement, _StylePropertyTreeElement_instances, _a, _StylePropertyTreeElement_parentSection, _StylePropertyTreeElement_propertyTextFromSource, _StylePropertyTreeElement_getRegisteredPropertyDetails, _StylePropertyTreeElement_computeCSSExpression, _StylePropertyTreeElement_startEditing, _StylePropertyTreeElement_selectionLeftOffset;






















const ASTUtils = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSPropertyParser.ASTUtils;
const FlexboxEditor = _components_components_js__WEBPACK_IMPORTED_MODULE_14__.StylePropertyEditor.FlexboxEditor;
const GridEditor = _components_components_js__WEBPACK_IMPORTED_MODULE_14__.StylePropertyEditor.GridEditor;
const activeHints = new WeakMap();
const UIStrings = {
    /**
     *@description Text in Color Swatch Popover Icon of the Elements panel
     */
    shiftClickToChangeColorFormat: 'Shift + Click to change color format.',
    /**
     *@description Swatch icon element title in Color Swatch Popover Icon of the Elements panel
     *@example {Shift + Click to change color format.} PH1
     */
    openColorPickerS: 'Open color picker. {PH1}',
    /**
     *@description Context menu item for style property in edit mode
     */
    togglePropertyAndContinueEditing: 'Toggle property and continue editing',
    /**
     *@description Context menu item for style property in edit mode
     */
    revealInSourcesPanel: 'Reveal in Sources panel',
    /**
     *@description A context menu item in Styles panel to copy CSS declaration
     */
    copyDeclaration: 'Copy declaration',
    /**
     *@description A context menu item in Styles panel to copy CSS property
     */
    copyProperty: 'Copy property',
    /**
     *@description A context menu item in the Watch Expressions Sidebar Pane of the Sources panel and Network pane request.
     */
    copyValue: 'Copy value',
    /**
     *@description A context menu item in Styles panel to copy CSS rule
     */
    copyRule: 'Copy rule',
    /**
     *@description A context menu item in Styles panel to copy all CSS declarations
     */
    copyAllDeclarations: 'Copy all declarations',
    /**
     *@description  A context menu item in Styles panel to copy all the CSS changes
     */
    copyAllCSSChanges: 'Copy all CSS changes',
    /**
     *@description A context menu item in Styles panel to view the computed CSS property value.
     */
    viewComputedValue: 'View computed value',
    /**
     * @description Title of the button that opens the flexbox editor in the Styles panel.
     */
    flexboxEditorButton: 'Open `flexbox` editor',
    /**
     * @description Title of the button that opens the CSS Grid editor in the Styles panel.
     */
    gridEditorButton: 'Open `grid` editor',
    /**
     *@description A context menu item in Styles panel to copy CSS declaration as JavaScript property.
     */
    copyCssDeclarationAsJs: 'Copy declaration as JS',
    /**
     *@description A context menu item in Styles panel to copy all declarations of CSS rule as JavaScript properties.
     */
    copyAllCssDeclarationsAsJs: 'Copy all declarations as JS',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/elements/StylePropertyTreeElement.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
const parentMap = new WeakMap();
class VariableRenderer {
    constructor(treeElement, style) {
        _VariableRenderer_instances.add(this);
        _VariableRenderer_treeElement.set(this, void 0);
        _VariableRenderer_style.set(this, void 0);
        __classPrivateFieldSet(this, _VariableRenderer_treeElement, treeElement, "f");
        __classPrivateFieldSet(this, _VariableRenderer_style, style, "f");
    }
    matcher() {
        return new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSPropertyParser.VariableMatcher(this.computedText.bind(this));
    }
    resolveVariable(match) {
        return __classPrivateFieldGet(this, _VariableRenderer_instances, "a", _VariableRenderer_matchedStyles_get).computeCSSVariable(__classPrivateFieldGet(this, _VariableRenderer_style, "f"), match.name);
    }
    fallbackValue(match) {
        if (match.fallback.length === 0 ||
            match.matching.hasUnresolvedVarsRange(match.fallback[0], match.fallback[match.fallback.length - 1])) {
            return null;
        }
        return match.matching.getComputedTextRange(match.fallback[0], match.fallback[match.fallback.length - 1]);
    }
    // clang-format off
    computedText(match) {
        return this.resolveVariable(match)?.value ?? this.fallbackValue(match);
    }
    // clang-format on
    render(match, context) {
        const renderedFallback = match.fallback.length > 0 ? _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.Renderer.render(match.fallback, context) : undefined;
        const { declaration, value: variableValue } = this.resolveVariable(match) ?? {};
        const fromFallback = !variableValue;
        const computedValue = variableValue ?? this.fallbackValue(match);
        const varSwatch = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.LinkSwatch.CSSVarSwatch();
        varSwatch.data = {
            computedValue,
            variableName: match.name,
            fromFallback,
            fallbackText: match.fallback.map(n => context.ast.text(n)).join(' '),
            onLinkActivate: name => __classPrivateFieldGet(this, _VariableRenderer_instances, "m", _VariableRenderer_handleVarDefinitionActivate).call(this, declaration ?? name),
        };
        if (renderedFallback?.nodes.length) {
            // When slotting someting into the fallback slot, also emit text children so that .textContent produces the
            // correct var value.
            varSwatch.appendChild(document.createTextNode(`var(${match.name}`));
            const span = varSwatch.appendChild(document.createElement('span'));
            span.appendChild(document.createTextNode(', '));
            span.slot = 'fallback';
            renderedFallback.nodes.forEach(n => span.appendChild(n));
            varSwatch.appendChild(document.createTextNode(')'));
        }
        else {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.UIUtils.createTextChild(varSwatch, match.text);
        }
        if (varSwatch.link) {
            __classPrivateFieldGet(this, _VariableRenderer_instances, "a", _VariableRenderer_pane_get).addPopover(varSwatch.link, {
                contents: () => __classPrivateFieldGet(this, _VariableRenderer_treeElement, "f").getVariablePopoverContents(match.name, variableValue ?? null),
                jslogContext: 'elements.css-var',
            });
        }
        const color = computedValue && _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(computedValue);
        if (!color) {
            return [varSwatch];
        }
        const colorSwatch = new ColorRenderer(__classPrivateFieldGet(this, _VariableRenderer_treeElement, "f")).renderColorSwatch(color, varSwatch);
        context.addControl('color', colorSwatch);
        if (fromFallback) {
            renderedFallback?.cssControls.get('color')?.forEach(innerSwatch => innerSwatch.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.ColorSwatch.ColorChangedEvent.eventName, ev => {
                colorSwatch.setColor(ev.data.color);
            }));
        }
        return [colorSwatch];
    }
}
_VariableRenderer_treeElement = new WeakMap(), _VariableRenderer_style = new WeakMap(), _VariableRenderer_instances = new WeakSet(), _VariableRenderer_pane_get = function _VariableRenderer_pane_get() {
    return __classPrivateFieldGet(this, _VariableRenderer_treeElement, "f").parentPane();
}, _VariableRenderer_matchedStyles_get = function _VariableRenderer_matchedStyles_get() {
    return __classPrivateFieldGet(this, _VariableRenderer_treeElement, "f").matchedStyles();
}, _VariableRenderer_handleVarDefinitionActivate = function _VariableRenderer_handleVarDefinitionActivate(variable) {
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.CustomPropertyLinkClicked);
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.swatchActivated(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.SwatchType.VarLink);
    if (variable instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSProperty.CSSProperty) {
        __classPrivateFieldGet(this, _VariableRenderer_instances, "a", _VariableRenderer_pane_get).revealProperty(variable);
    }
    else if (variable instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMatchedStyles.CSSRegisteredProperty) {
        __classPrivateFieldGet(this, _VariableRenderer_instances, "a", _VariableRenderer_pane_get).jumpToProperty('initial-value', variable.propertyName(), _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_21__.REGISTERED_PROPERTY_SECTION_NAME);
    }
    else {
        __classPrivateFieldGet(this, _VariableRenderer_instances, "a", _VariableRenderer_pane_get).jumpToProperty(variable) ||
            __classPrivateFieldGet(this, _VariableRenderer_instances, "a", _VariableRenderer_pane_get).jumpToProperty('initial-value', variable, _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_21__.REGISTERED_PROPERTY_SECTION_NAME);
    }
};
class LinearGradientRenderer {
    matcher() {
        return new _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.LinearGradientMatcher();
    }
    render(match, context) {
        const children = ASTUtils.children(match.node);
        const { nodes, cssControls } = _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.Renderer.render(children, context);
        const angles = cssControls.get('angle');
        const angle = angles?.length === 1 ? angles[0] : null;
        if (angle instanceof _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.CSSAngle.CSSAngle) {
            angle.updateProperty(context.matchedResult.getComputedText(match.node));
            const args = ASTUtils.callArgs(match.node);
            const angleNode = args[0]?.find(node => context.matchedResult.getMatch(node) instanceof _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.AngleMatch);
            const angleMatch = angleNode && context.matchedResult.getMatch(angleNode);
            if (angleMatch) {
                angle.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.InlineEditorUtils.ValueChangedEvent.eventName, ev => {
                    angle.updateProperty(context.matchedResult.getComputedText(match.node, new Map([[angleMatch, ev.data.value]])));
                });
            }
        }
        return nodes;
    }
}
class ColorRenderer {
    constructor(treeElement) {
        _ColorRenderer_instances.add(this);
        Object.defineProperty(this, "treeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: treeElement
        });
    }
    matcher() {
        return new _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.ColorMatcher();
    }
    render(match, context) {
        const { valueChild, cssControls } = __classPrivateFieldGet(this, _ColorRenderer_instances, "m", _ColorRenderer_getValueChild).call(this, match, context);
        let colorText = context.matchedResult.getComputedText(match.node);
        // Evaluate relative color values
        if (match.node.name === 'CallExpression' && colorText.match(/^[^)]*\(\W*from\W+/) &&
            !context.matchedResult.hasUnresolvedVars(match.node) && CSS.supports('color', colorText)) {
            const fakeSpan = document.body.appendChild(document.createElement('span'));
            fakeSpan.style.backgroundColor = colorText;
            colorText = window.getComputedStyle(fakeSpan).backgroundColor?.toString() || colorText;
            fakeSpan.remove();
        }
        // Now try render a color swatch if the result is parsable.
        const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(colorText);
        if (!color) {
            return [document.createTextNode(colorText)];
        }
        const swatch = this.renderColorSwatch(color, valueChild);
        context.addControl('color', swatch);
        // For hsl/hwb colors, hook up the angle swatch for the hue.
        if (cssControls && match.node.name === 'CallExpression' &&
            context.ast.text(match.node.getChild('Callee')).match(/^(hsla?|hwba?)/)) {
            const [angle] = cssControls.get('angle') ?? [];
            if (angle instanceof _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.CSSAngle.CSSAngle) {
                angle.updateProperty(swatch.getColor()?.asString() ?? '');
                angle.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.InlineEditorUtils.ValueChangedEvent.eventName, ev => {
                    const hue = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parseHueNumeric(ev.data.value);
                    const color = swatch.getColor();
                    if (!hue || !color) {
                        return;
                    }
                    if (color.is(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HSL) || color.is(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HSLA)) {
                        swatch.setColor(new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.HSL(hue, color.s, color.l, color.alpha));
                    }
                    else if (color.is(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HWB) || color.is(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HWBA)) {
                        swatch.setColor(new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.HWB(hue, color.w, color.b, color.alpha));
                    }
                    angle.updateProperty(swatch.getColor()?.asString() ?? '');
                });
            }
        }
        return [swatch];
    }
    renderColorSwatch(color, valueChild) {
        const editable = this.treeElement.editable();
        const shiftClickMessage = i18nString(UIStrings.shiftClickToChangeColorFormat);
        const tooltip = editable ? i18nString(UIStrings.openColorPickerS, { PH1: shiftClickMessage }) : '';
        const swatch = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.ColorSwatch.ColorSwatch(tooltip);
        swatch.setReadonly(!editable);
        if (color) {
            swatch.renderColor(color);
        }
        if (!valueChild) {
            valueChild = swatch.createChild('span');
            if (color) {
                valueChild.textContent = color.getAuthoredText() ?? color.asString();
            }
        }
        swatch.appendChild(valueChild);
        const onColorChanged = () => {
            void this.treeElement.applyStyleText(this.treeElement.renderedPropertyText(), false);
        };
        swatch.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.ColorSwatch.ClickEvent.eventName, () => {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.swatchActivated(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.SwatchType.Color);
        });
        swatch.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.ColorSwatch.ColorChangedEvent.eventName, onColorChanged);
        if (editable) {
            const swatchIcon = new _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_13__.ColorSwatchPopoverIcon(this.treeElement, this.treeElement.parentPane().swatchPopoverHelper(), swatch);
            swatchIcon.addEventListener(_ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_13__.ColorSwatchPopoverIconEvents.ColorChanged, ev => {
                const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(ev.data);
                if (color) {
                    swatch.setColorText(color);
                }
            });
            void __classPrivateFieldGet(this, _ColorRenderer_instances, "m", _ColorRenderer_addColorContrastInfo).call(this, swatchIcon);
        }
        return swatch;
    }
}
_ColorRenderer_instances = new WeakSet(), _ColorRenderer_getValueChild = function _ColorRenderer_getValueChild(match, context) {
    const valueChild = document.createElement('span');
    if (match.node.name === 'ColorLiteral' ||
        (match.node.name === 'ValueName' && _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Nicknames.has(match.text))) {
        valueChild.appendChild(document.createTextNode(match.text));
        return { valueChild };
    }
    const { cssControls } = _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.Renderer.renderInto(ASTUtils.children(match.node), context, valueChild);
    return { valueChild, cssControls };
}, _ColorRenderer_addColorContrastInfo = async function _ColorRenderer_addColorContrastInfo(swatchIcon) {
    const cssModel = this.treeElement.parentPane().cssModel();
    const node = this.treeElement.node();
    if (this.treeElement.property.name !== 'color' || !cssModel || !node || typeof node.id === 'undefined') {
        return;
    }
    const contrastInfo = new _ui_legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_9__.ContrastInfo.ContrastInfo(await cssModel.getBackgroundColors(node.id));
    swatchIcon.setContrastInfo(contrastInfo);
};
class LightDarkColorRenderer {
    constructor(treeElement) {
        _LightDarkColorRenderer_instances.add(this);
        _LightDarkColorRenderer_treeElement.set(this, void 0);
        __classPrivateFieldSet(this, _LightDarkColorRenderer_treeElement, treeElement, "f");
    }
    matcher() {
        return new _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.LightDarkColorMatcher();
    }
    render(match, context) {
        const content = document.createElement('span');
        content.appendChild(document.createTextNode('light-dark('));
        const light = content.appendChild(document.createElement('span'));
        content.appendChild(document.createTextNode(', '));
        const dark = content.appendChild(document.createElement('span'));
        content.appendChild(document.createTextNode(')'));
        const { cssControls: lightControls } = _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.Renderer.renderInto(match.light, context, light);
        const { cssControls: darkControls } = _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.Renderer.renderInto(match.dark, context, dark);
        if (context.matchedResult.hasUnresolvedVars(match.node)) {
            return [content];
        }
        const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(context.matchedResult.getComputedTextRange(match.light[0], match.light[match.light.length - 1]));
        if (!color) {
            return [content];
        }
        // Pass an undefined color here to insert a placeholder swatch that will be filled in from the async
        // applyColorScheme below.
        const colorSwatch = new ColorRenderer(__classPrivateFieldGet(this, _LightDarkColorRenderer_treeElement, "f")).renderColorSwatch(undefined, content);
        context.addControl('color', colorSwatch);
        void this.applyColorScheme(match, context, colorSwatch, light, dark, lightControls, darkControls);
        return [colorSwatch];
    }
    async applyColorScheme(match, context, colorSwatch, light, dark, lightControls, darkControls) {
        const activeColor = await __classPrivateFieldGet(this, _LightDarkColorRenderer_instances, "m", _LightDarkColorRenderer_activeColor).call(this, match);
        if (!activeColor) {
            return;
        }
        const activeColorSwatches = (activeColor === match.light ? lightControls : darkControls).get('color');
        activeColorSwatches?.forEach(swatch => swatch.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.ColorSwatch.ColorChangedEvent.eventName, ev => colorSwatch.setColor(ev.data.color)));
        const inactiveColor = (activeColor === match.light) ? dark : light;
        const colorText = context.matchedResult.getComputedTextRange(activeColor[0], activeColor[activeColor.length - 1]);
        const color = colorText && _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(colorText);
        inactiveColor.style.textDecoration = 'line-through';
        if (color) {
            colorSwatch.renderColor(color);
        }
    }
}
_LightDarkColorRenderer_treeElement = new WeakMap(), _LightDarkColorRenderer_instances = new WeakSet(), _LightDarkColorRenderer_activeColor = 
// Returns the syntax node group corresponding the active color scheme:
// If the element has color-scheme set to light or dark, return the respective group.
// If the element has color-scheme set to both light and dark, we check the prefers-color-scheme media query.
async function _LightDarkColorRenderer_activeColor(match) {
    const activeColorSchemes = __classPrivateFieldGet(this, _LightDarkColorRenderer_treeElement, "f").getComputedStyle('color-scheme')?.split(' ') ?? [];
    const hasLight = activeColorSchemes.includes(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSModel.ColorScheme.Light);
    const hasDark = activeColorSchemes.includes(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSModel.ColorScheme.Dark);
    if (!hasDark && !hasLight) {
        return match.light;
    }
    if (!hasLight) {
        return match.dark;
    }
    if (!hasDark) {
        return match.light;
    }
    switch (await __classPrivateFieldGet(this, _LightDarkColorRenderer_treeElement, "f").parentPane().cssModel()?.colorScheme()) {
        case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSModel.ColorScheme.Dark:
            return match.dark;
        case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSModel.ColorScheme.Light:
            return match.light;
        default:
            return undefined;
    }
};
class ColorMixRenderer {
    constructor(pane) {
        _ColorMixRenderer_pane.set(this, void 0);
        __classPrivateFieldSet(this, _ColorMixRenderer_pane, pane, "f");
    }
    render(match, context) {
        const hookUpColorArg = (node, onChange) => {
            if (node instanceof _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.ColorMixSwatch.ColorMixSwatch ||
                node instanceof _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.ColorSwatch.ColorSwatch) {
                if (node instanceof _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.ColorSwatch.ColorSwatch) {
                    node.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.ColorSwatch.ColorChangedEvent.eventName, ev => onChange(ev.data.color.getAuthoredText() ?? ev.data.color.asString()));
                }
                else {
                    node.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.ColorMixSwatch.Events.ColorChanged, ev => onChange(ev.data.text));
                }
                const color = node.getText();
                if (color) {
                    onChange(color);
                    return true;
                }
            }
            return false;
        };
        const contentChild = document.createElement('span');
        contentChild.appendChild(document.createTextNode('color-mix('));
        _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.Renderer.renderInto(match.space, context, contentChild);
        contentChild.appendChild(document.createTextNode(', '));
        const color1 = _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.Renderer.renderInto(match.color1, context, contentChild).cssControls.get('color') ?? [];
        contentChild.appendChild(document.createTextNode(', '));
        const color2 = _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.Renderer.renderInto(match.color2, context, contentChild).cssControls.get('color') ?? [];
        contentChild.appendChild(document.createTextNode(')'));
        if (context.matchedResult.hasUnresolvedVars(match.node) || color1.length !== 1 || color2.length !== 1) {
            return [contentChild];
        }
        const swatch = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.ColorMixSwatch.ColorMixSwatch();
        if (!hookUpColorArg(color1[0], text => swatch.setFirstColor(text)) ||
            !hookUpColorArg(color2[0], text => swatch.setSecondColor(text))) {
            return [contentChild];
        }
        const space = match.space.map(space => context.matchedResult.getComputedText(space)).join(' ');
        const color1Text = match.color1.map(color => context.matchedResult.getComputedText(color)).join(' ');
        const color2Text = match.color2.map(color => context.matchedResult.getComputedText(color)).join(' ');
        swatch.appendChild(contentChild);
        swatch.setColorMixText(`color-mix(${space}, ${color1Text}, ${color2Text})`);
        swatch.setRegisterPopoverCallback(swatch => {
            if (swatch.icon) {
                __classPrivateFieldGet(this, _ColorMixRenderer_pane, "f").addPopover(swatch.icon, {
                    contents: () => {
                        const color = swatch.mixedColor();
                        if (!color) {
                            return undefined;
                        }
                        const span = document.createElement('span');
                        span.style.padding = '11px 7px';
                        const rgb = color.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HEX);
                        const text = rgb.isGamutClipped() ? color.asString() : rgb.asString();
                        if (!text) {
                            return undefined;
                        }
                        span.appendChild(document.createTextNode(text));
                        return span;
                    },
                    jslogContext: 'elements.css-color-mix',
                });
            }
        });
        context.addControl('color', swatch);
        return [swatch];
    }
    matcher() {
        return new _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.ColorMixMatcher();
    }
}
_ColorMixRenderer_pane = new WeakMap();
class AngleRenderer {
    constructor(treeElement) {
        _AngleRenderer_treeElement.set(this, void 0);
        __classPrivateFieldSet(this, _AngleRenderer_treeElement, treeElement, "f");
    }
    render(match, context) {
        const angleText = match.text;
        if (!__classPrivateFieldGet(this, _AngleRenderer_treeElement, "f").editable()) {
            return [document.createTextNode(angleText)];
        }
        const cssAngle = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.CSSAngle.CSSAngle();
        cssAngle.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.showStyleEditor().track({ click: true }).context('css-angle')}`);
        const valueElement = document.createElement('span');
        valueElement.textContent = angleText;
        cssAngle.data = {
            angleText,
            containingPane: __classPrivateFieldGet(this, _AngleRenderer_treeElement, "f").parentPane().element.enclosingNodeOrSelfWithClass('style-panes-wrapper'),
        };
        cssAngle.append(valueElement);
        cssAngle.addEventListener('popovertoggled', ({ data }) => {
            const section = __classPrivateFieldGet(this, _AngleRenderer_treeElement, "f").section();
            if (!section) {
                return;
            }
            if (data.open) {
                __classPrivateFieldGet(this, _AngleRenderer_treeElement, "f").parentPane().hideAllPopovers();
                __classPrivateFieldGet(this, _AngleRenderer_treeElement, "f").parentPane().activeCSSAngle = cssAngle;
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.swatchActivated(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.SwatchType.Angle);
            }
            section.element.classList.toggle('has-open-popover', data.open);
            __classPrivateFieldGet(this, _AngleRenderer_treeElement, "f").parentPane().setEditingStyle(data.open);
            // Commit the value as a major change after the angle popover is closed.
            if (!data.open) {
                void __classPrivateFieldGet(this, _AngleRenderer_treeElement, "f").applyStyleText(__classPrivateFieldGet(this, _AngleRenderer_treeElement, "f").renderedPropertyText(), true);
            }
        });
        cssAngle.addEventListener('valuechanged', async ({ data }) => {
            valueElement.textContent = data.value;
            await __classPrivateFieldGet(this, _AngleRenderer_treeElement, "f").applyStyleText(__classPrivateFieldGet(this, _AngleRenderer_treeElement, "f").renderedPropertyText(), false);
        });
        cssAngle.addEventListener('unitchanged', ({ data }) => {
            valueElement.textContent = data.value;
        });
        context.addControl('angle', cssAngle);
        return [cssAngle];
    }
    matcher() {
        return new _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.AngleMatcher();
    }
}
_AngleRenderer_treeElement = new WeakMap();
class LinkableNameRenderer {
    constructor(treeElement) {
        _LinkableNameRenderer_instances.add(this);
        _LinkableNameRenderer_treeElement.set(this, void 0);
        __classPrivateFieldSet(this, _LinkableNameRenderer_treeElement, treeElement, "f");
    }
    render(match) {
        const swatch = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.LinkSwatch.LinkSwatch();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.UIUtils.createTextChild(swatch, match.text);
        const { metric, jslogContext, ruleBlock, isDefined } = __classPrivateFieldGet(this, _LinkableNameRenderer_instances, "m", _LinkableNameRenderer_getLinkData).call(this, match);
        swatch.data = {
            text: match.text,
            isDefined,
            onLinkActivate: () => {
                metric && _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.swatchActivated(metric);
                __classPrivateFieldGet(this, _LinkableNameRenderer_treeElement, "f").parentPane().jumpToSectionBlock(`${ruleBlock} ${match.text}`);
            },
            jslogContext,
        };
        return [swatch];
    }
    matcher() {
        return new _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.LinkableNameMatcher();
    }
}
_LinkableNameRenderer_treeElement = new WeakMap(), _LinkableNameRenderer_instances = new WeakSet(), _LinkableNameRenderer_getLinkData = function _LinkableNameRenderer_getLinkData(match) {
    switch (match.properyName) {
        case _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.LinkableNameProperties.Animation:
        case _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.LinkableNameProperties.AnimationName:
            return {
                jslogContext: 'css-animation-name',
                metric: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.SwatchType.AnimationNameLink,
                ruleBlock: '@keyframes',
                isDefined: Boolean(__classPrivateFieldGet(this, _LinkableNameRenderer_treeElement, "f").matchedStyles().keyframes().find(kf => kf.name().text === match.text)),
            };
        case _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.LinkableNameProperties.FontPalette:
            return {
                jslogContext: 'css-font-palette',
                metric: null,
                ruleBlock: '@font-palette-values',
                isDefined: __classPrivateFieldGet(this, _LinkableNameRenderer_treeElement, "f").matchedStyles().fontPaletteValuesRule()?.name().text === match.text,
            };
        case _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.LinkableNameProperties.PositionTry:
        case _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.LinkableNameProperties.PositionTryOptions:
            return {
                jslogContext: 'css-position-try',
                metric: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.SwatchType.PositionTryLink,
                ruleBlock: '@position-try',
                isDefined: Boolean(__classPrivateFieldGet(this, _LinkableNameRenderer_treeElement, "f").matchedStyles().positionTryRules().find(pt => pt.name().text === match.text)),
            };
    }
};
class BezierRenderer {
    constructor(treeElement) {
        _BezierRenderer_treeElement.set(this, void 0);
        __classPrivateFieldSet(this, _BezierRenderer_treeElement, treeElement, "f");
    }
    render(match) {
        return [this.renderSwatch(match)];
    }
    renderSwatch(match) {
        if (!__classPrivateFieldGet(this, _BezierRenderer_treeElement, "f").editable()) {
            return document.createTextNode(match.text);
        }
        const swatchPopoverHelper = __classPrivateFieldGet(this, _BezierRenderer_treeElement, "f").parentPane().swatchPopoverHelper();
        const swatch = _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.Swatches.BezierSwatch.create();
        swatch.iconElement().addEventListener('click', () => {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.swatchActivated(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.SwatchType.AnimationTiming);
        });
        swatch.setBezierText(match.text);
        new _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_13__.BezierPopoverIcon({ treeElement: __classPrivateFieldGet(this, _BezierRenderer_treeElement, "f"), swatchPopoverHelper, swatch });
        return swatch;
    }
    matcher() {
        return new _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.BezierMatcher();
    }
}
_BezierRenderer_treeElement = new WeakMap();
var ShadowPropertyType;
(function (ShadowPropertyType) {
    ShadowPropertyType["X"] = "x";
    ShadowPropertyType["Y"] = "y";
    ShadowPropertyType["Spread"] = "spread";
    ShadowPropertyType["Blur"] = "blur";
    ShadowPropertyType["Inset"] = "inset";
    ShadowPropertyType["Color"] = "color";
})(ShadowPropertyType || (ShadowPropertyType = {}));
// The shadow model is an abstraction over the various shadow properties on the one hand and the order they were defined
// in on the other, so that modifications through the shadow editor can retain the property order in the authored text.
// The model also looks through var()s by keeping a mapping between individual properties and any var()s they are coming
// from, replacing the var() functions as needed with concrete values when edited.
class ShadowModel {
    constructor(shadowType, properties, context) {
        _ShadowModel_instances.add(this);
        _ShadowModel_properties.set(this, void 0);
        _ShadowModel_shadowType.set(this, void 0);
        _ShadowModel_context.set(this, void 0);
        __classPrivateFieldSet(this, _ShadowModel_shadowType, shadowType, "f");
        __classPrivateFieldSet(this, _ShadowModel_properties, properties, "f");
        __classPrivateFieldSet(this, _ShadowModel_context, context, "f");
    }
    isBoxShadow() {
        return __classPrivateFieldGet(this, _ShadowModel_shadowType, "f") === _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.ShadowType.BoxShadow;
    }
    inset() {
        return Boolean(__classPrivateFieldGet(this, _ShadowModel_properties, "f").find(property => property.propertyType === ShadowPropertyType.Inset));
    }
    offsetX() {
        return __classPrivateFieldGet(this, _ShadowModel_instances, "m", _ShadowModel_length).call(this, ShadowPropertyType.X);
    }
    offsetY() {
        return __classPrivateFieldGet(this, _ShadowModel_instances, "m", _ShadowModel_length).call(this, ShadowPropertyType.Y);
    }
    blurRadius() {
        return __classPrivateFieldGet(this, _ShadowModel_instances, "m", _ShadowModel_length).call(this, ShadowPropertyType.Blur);
    }
    spreadRadius() {
        return __classPrivateFieldGet(this, _ShadowModel_instances, "m", _ShadowModel_length).call(this, ShadowPropertyType.Spread);
    }
    setInset(inset) {
        if (!this.isBoxShadow()) {
            return;
        }
        const { property, index } = __classPrivateFieldGet(this, _ShadowModel_instances, "m", _ShadowModel_expandOrGetProperty).call(this, ShadowPropertyType.Inset);
        if (property) {
            // For `inset`, remove the entry if value is false, otherwise don't touch it.
            if (!inset) {
                __classPrivateFieldGet(this, _ShadowModel_properties, "f").splice(index, 1);
            }
        }
        else {
            __classPrivateFieldGet(this, _ShadowModel_properties, "f").unshift({ value: 'inset', source: null, expansionContext: null, propertyType: ShadowPropertyType.Inset });
        }
    }
    setOffsetX(value) {
        __classPrivateFieldGet(this, _ShadowModel_instances, "m", _ShadowModel_setLength).call(this, value, ShadowPropertyType.X);
    }
    setOffsetY(value) {
        __classPrivateFieldGet(this, _ShadowModel_instances, "m", _ShadowModel_setLength).call(this, value, ShadowPropertyType.Y);
    }
    setBlurRadius(value) {
        __classPrivateFieldGet(this, _ShadowModel_instances, "m", _ShadowModel_setLength).call(this, value, ShadowPropertyType.Blur);
    }
    setSpreadRadius(value) {
        if (this.isBoxShadow()) {
            __classPrivateFieldGet(this, _ShadowModel_instances, "m", _ShadowModel_setLength).call(this, value, ShadowPropertyType.Spread);
        }
    }
    renderContents(parent) {
        parent.removeChildren();
        const span = parent.createChild('span');
        let previousSource = null;
        for (const property of __classPrivateFieldGet(this, _ShadowModel_properties, "f")) {
            if (!property.source || property.source !== previousSource) {
                if (property !== __classPrivateFieldGet(this, _ShadowModel_properties, "f")[0]) {
                    span.append(' ');
                }
                // If `source` is present on the property that means it came from a var() and we'll use that to render.
                if (property.source) {
                    span.append(..._PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.Renderer.render(property.source, __classPrivateFieldGet(this, _ShadowModel_context, "f")).nodes);
                }
                else if (typeof property.value === 'string') {
                    span.append(property.value);
                }
                else {
                    span.append(..._PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.Renderer.render(property.value, property.expansionContext ?? __classPrivateFieldGet(this, _ShadowModel_context, "f")).nodes);
                }
            }
            previousSource = property.source;
        }
    }
}
_ShadowModel_properties = new WeakMap(), _ShadowModel_shadowType = new WeakMap(), _ShadowModel_context = new WeakMap(), _ShadowModel_instances = new WeakSet(), _ShadowModel_length = function _ShadowModel_length(lengthType) {
    return __classPrivateFieldGet(this, _ShadowModel_properties, "f").find((property) => property.propertyType === lengthType)
        ?.length ??
        _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.CSSShadowEditor.CSSLength.zero();
}, _ShadowModel_needsExpansion = function _ShadowModel_needsExpansion(property) {
    return Boolean(property.expansionContext && property.source);
}, _ShadowModel_expandPropertyIfNeeded = function _ShadowModel_expandPropertyIfNeeded(property) {
    if (__classPrivateFieldGet(this, _ShadowModel_instances, "m", _ShadowModel_needsExpansion).call(this, property)) {
        // Rendering prefers `source` if present. It's sufficient to clear it in order to switch rendering to render the
        // individual properties directly.
        const source = property.source;
        __classPrivateFieldGet(this, _ShadowModel_properties, "f").filter(property => property.source === source).forEach(property => {
            property.source = null;
        });
    }
}, _ShadowModel_expandOrGetProperty = function _ShadowModel_expandOrGetProperty(propertyType) {
    const index = __classPrivateFieldGet(this, _ShadowModel_properties, "f").findIndex(property => property.propertyType === propertyType);
    const property = index >= 0 ? __classPrivateFieldGet(this, _ShadowModel_properties, "f")[index] : undefined;
    property && __classPrivateFieldGet(this, _ShadowModel_instances, "m", _ShadowModel_expandPropertyIfNeeded).call(this, property);
    return { property, index };
}, _ShadowModel_setLength = function _ShadowModel_setLength(value, propertyType) {
    const { property } = __classPrivateFieldGet(this, _ShadowModel_instances, "m", _ShadowModel_expandOrGetProperty).call(this, propertyType);
    if (property) {
        property.value = value.asCSSText();
        property.length = value;
        property.source = null;
    }
    else {
        // Lengths are ordered X, Y, Blur, Spread, with the latter two being optional. When inserting an optional property
        // we need to insert it after Y or after Blur, depending on what's being inserted and which properties are
        // present.
        const insertionIdx = 1 +
            __classPrivateFieldGet(this, _ShadowModel_properties, "f").findLastIndex(property => property.propertyType === ShadowPropertyType.Y ||
                (propertyType === ShadowPropertyType.Spread && property.propertyType === ShadowPropertyType.Blur));
        if (insertionIdx > 0 && insertionIdx < __classPrivateFieldGet(this, _ShadowModel_properties, "f").length &&
            __classPrivateFieldGet(this, _ShadowModel_instances, "m", _ShadowModel_needsExpansion).call(this, __classPrivateFieldGet(this, _ShadowModel_properties, "f")[insertionIdx]) &&
            __classPrivateFieldGet(this, _ShadowModel_properties, "f")[insertionIdx - 1].source === __classPrivateFieldGet(this, _ShadowModel_properties, "f")[insertionIdx].source) {
            // This prevents the edge case where insertion after the last length would break up a group of values that
            // require expansion.
            __classPrivateFieldGet(this, _ShadowModel_instances, "m", _ShadowModel_expandPropertyIfNeeded).call(this, __classPrivateFieldGet(this, _ShadowModel_properties, "f")[insertionIdx]);
        }
        __classPrivateFieldGet(this, _ShadowModel_properties, "f").splice(insertionIdx, 0, { value: value.asCSSText(), length: value, source: null, expansionContext: null, propertyType });
    }
};
class ShadowRenderer {
    constructor(treeElement) {
        _ShadowRenderer_treeElement.set(this, void 0);
        __classPrivateFieldSet(this, _ShadowRenderer_treeElement, treeElement, "f");
    }
    shadowModel(shadow, shadowType, context) {
        const properties = [];
        const missingLengths = [ShadowPropertyType.Spread, ShadowPropertyType.Blur, ShadowPropertyType.Y, ShadowPropertyType.X];
        let stillAcceptsLengths = true;
        // We're parsing the individual shadow properties into an array here retaining the ordering. This also looks through
        // var() functions by re-parsing the variable values on the fly. For properties coming from a var() we're keeping
        // track of their origin to allow for adhoc expansion when one of those properties is edited.
        const queue = shadow.map(value => ({ value, source: value, match: context.matchedResult.getMatch(value), expansionContext: null }));
        for (let item = queue.shift(); item; item = queue.shift()) {
            const { value, source, match, expansionContext } = item;
            const text = (expansionContext ?? context).ast.text(value);
            if (value.name === 'NumberLiteral') {
                if (!stillAcceptsLengths) {
                    return null;
                }
                const propertyType = missingLengths.pop();
                if (propertyType === undefined ||
                    (propertyType === ShadowPropertyType.Spread && shadowType === _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.ShadowType.TextShadow)) {
                    return null;
                }
                const length = _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.CSSShadowEditor.CSSLength.parse(text);
                if (!length) {
                    return null;
                }
                properties.push({ value, source, length, propertyType, expansionContext });
            }
            else if (match instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSPropertyParser.VariableMatch) {
                // This doesn't come from any computed text, so we can rely on context here
                const computedValue = context.matchedResult.getComputedText(value);
                const computedValueAst = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSPropertyParser.tokenizeDeclaration('--property', computedValue);
                if (!computedValueAst) {
                    return null;
                }
                const matches = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSPropertyParser.BottomUpTreeMatching.walkExcludingSuccessors(computedValueAst, [new _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.ColorMatcher()]);
                if (matches.hasUnresolvedVars(matches.ast.tree)) {
                    return null;
                }
                queue.unshift(...ASTUtils.siblings(ASTUtils.declValue(matches.ast.tree))
                    .map(matchedNode => ({
                    value: matchedNode,
                    source: value,
                    match: matches.getMatch(matchedNode),
                    expansionContext: new _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.RenderingContext(computedValueAst, context.renderers, matches),
                })));
            }
            else {
                // The length properties must come in one block, so if there were any lengths before, followed by a non-length
                // property, we will not allow any future lengths.
                stillAcceptsLengths = missingLengths.length === 4;
                if (value.name === 'ValueName' && text.toLowerCase() === 'inset') {
                    if (shadowType === _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.ShadowType.TextShadow ||
                        properties.find(({ propertyType }) => propertyType === ShadowPropertyType.Inset)) {
                        return null;
                    }
                    properties.push({ value, source, propertyType: ShadowPropertyType.Inset, expansionContext });
                }
                else if (match instanceof _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.ColorMatch || match instanceof _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.ColorMixMatch) {
                    if (properties.find(({ propertyType }) => propertyType === ShadowPropertyType.Color)) {
                        return null;
                    }
                    properties.push({ value, source, propertyType: ShadowPropertyType.Color, expansionContext });
                }
                else if (value.name !== 'Comment' && value.name !== 'Important') {
                    return null;
                }
            }
        }
        if (missingLengths.length > 2) {
            // X and Y are mandatory
            return null;
        }
        return new ShadowModel(shadowType, properties, context);
    }
    render(match, context) {
        const shadows = ASTUtils.split(ASTUtils.siblings(ASTUtils.declValue(match.node)));
        const result = [];
        for (const shadow of shadows) {
            const model = this.shadowModel(shadow, match.shadowType, context);
            const isImportant = shadow.find(node => node.name === 'Important');
            if (shadow !== shadows[0]) {
                result.push(document.createTextNode(', '));
            }
            if (!model) {
                const { nodes } = _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.Renderer.render(shadow, context);
                result.push(...nodes);
                continue;
            }
            const swatch = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.Swatches.CSSShadowSwatch(model);
            swatch.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.showStyleEditor('css-shadow').track({ click: true })}`);
            swatch.iconElement().addEventListener('click', () => {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.swatchActivated(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.SwatchType.Shadow);
            });
            model.renderContents(swatch);
            const popoverHelper = new _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_13__.ShadowSwatchPopoverHelper(__classPrivateFieldGet(this, _ShadowRenderer_treeElement, "f"), __classPrivateFieldGet(this, _ShadowRenderer_treeElement, "f").parentPane().swatchPopoverHelper(), swatch);
            popoverHelper.addEventListener(_ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_13__.ShadowEvents.ShadowChanged, () => {
                model.renderContents(swatch);
                void __classPrivateFieldGet(this, _ShadowRenderer_treeElement, "f").applyStyleText(__classPrivateFieldGet(this, _ShadowRenderer_treeElement, "f").renderedPropertyText(), false);
            });
            result.push(swatch);
            if (isImportant) {
                result.push(...[document.createTextNode(' '), ..._PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.Renderer.render(isImportant, context).nodes]);
            }
        }
        return result;
    }
    matcher() {
        return new _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.ShadowMatcher();
    }
}
_ShadowRenderer_treeElement = new WeakMap();
class FontRenderer {
    constructor(treeElement) {
        Object.defineProperty(this, "treeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: treeElement
        });
    }
    render(match) {
        this.treeElement.section().registerFontProperty(this.treeElement);
        return [document.createTextNode(match.text)];
    }
    matcher() {
        return new _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.FontMatcher();
    }
}
class GridTemplateRenderer {
    render(match, context) {
        if (match.lines.length <= 1) {
            return _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.Renderer.render(ASTUtils.siblings(ASTUtils.declValue(match.node)), context).nodes;
        }
        const indent = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').get();
        const container = document.createDocumentFragment();
        for (const line of match.lines) {
            const value = _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.Renderer.render(line, context);
            const lineBreak = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Fragment.html `<br /><span class='styles-clipboard-only'>${indent.repeat(2)}</span>`;
            container.append(lineBreak, ...value.nodes);
        }
        return [container];
    }
    matcher() {
        return new _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.GridTemplateMatcher();
    }
}
class LengthRenderer {
    constructor(treeElement) {
        _LengthRenderer_treeElement.set(this, void 0);
        __classPrivateFieldSet(this, _LengthRenderer_treeElement, treeElement, "f");
    }
    render(match, _context) {
        const lengthText = match.text;
        if (!__classPrivateFieldGet(this, _LengthRenderer_treeElement, "f").editable()) {
            return [document.createTextNode(lengthText)];
        }
        const cssLength = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.CSSLength.CSSLength();
        const valueElement = document.createElement('span');
        valueElement.textContent = lengthText;
        cssLength.data = {
            lengthText,
            overloaded: __classPrivateFieldGet(this, _LengthRenderer_treeElement, "f").overloaded(),
        };
        cssLength.append(valueElement);
        const onValueChanged = (event) => {
            const { data } = event;
            valueElement.textContent = data.value;
            __classPrivateFieldGet(this, _LengthRenderer_treeElement, "f").parentPane().setEditingStyle(true);
            void __classPrivateFieldGet(this, _LengthRenderer_treeElement, "f").applyStyleText(__classPrivateFieldGet(this, _LengthRenderer_treeElement, "f").renderedPropertyText(), false);
        };
        const onDraggingFinished = () => {
            __classPrivateFieldGet(this, _LengthRenderer_treeElement, "f").parentPane().setEditingStyle(false);
        };
        cssLength.addEventListener('valuechanged', onValueChanged);
        cssLength.addEventListener('draggingfinished', onDraggingFinished);
        return [cssLength];
    }
    matcher() {
        return new _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.LengthMatcher();
    }
}
_LengthRenderer_treeElement = new WeakMap();
async function decorateAnchorForAnchorLink(container, treeElement, options) {
    const anchorNode = await treeElement.node()?.getAnchorBySpecifier(options.identifier) ?? undefined;
    const link = new _components_components_js__WEBPACK_IMPORTED_MODULE_14__.AnchorFunctionLinkSwatch.AnchorFunctionLinkSwatch({
        identifier: options.identifier,
        anchorNode: anchorNode,
        needsSpace: options.needsSpace,
        onLinkActivate: () => {
            if (!anchorNode) {
                return;
            }
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(anchorNode, false);
        },
        onMouseEnter: () => {
            anchorNode?.highlight();
        },
        onMouseLeave: () => {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        },
    });
    container.removeChildren();
    container.appendChild(link);
}
class AnchorFunctionRenderer {
    constructor(treeElement) {
        _AnchorFunctionRenderer_instances.add(this);
        _AnchorFunctionRenderer_treeElement.set(this, void 0);
        __classPrivateFieldSet(this, _AnchorFunctionRenderer_treeElement, treeElement, "f");
    }
    anchorDecoratedForTest() {
    }
    render(match, context) {
        const content = document.createElement('span');
        content.appendChild(document.createTextNode(`${match.functionName}(`));
        const firstArgText = match.matching.ast.text(match.args[0]);
        const hasDashedIdentifier = firstArgText.startsWith('--');
        const linkContainer = document.createElement('span');
        if (hasDashedIdentifier) {
            linkContainer.textContent = `${firstArgText} `;
        }
        content.appendChild(linkContainer);
        const remainingArgsContainer = content.appendChild(document.createElement('span'));
        if (hasDashedIdentifier) {
            _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.Renderer.renderInto(match.args.slice(1), context, remainingArgsContainer);
        }
        else {
            _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.Renderer.renderInto(match.args, context, remainingArgsContainer);
        }
        void __classPrivateFieldGet(this, _AnchorFunctionRenderer_instances, "m", _AnchorFunctionRenderer_decorateAnchor).call(this, linkContainer, hasDashedIdentifier ? firstArgText : undefined);
        content.appendChild(document.createTextNode(')'));
        return [content];
    }
    matcher() {
        return new _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.AnchorFunctionMatcher();
    }
}
_AnchorFunctionRenderer_treeElement = new WeakMap(), _AnchorFunctionRenderer_instances = new WeakSet(), _AnchorFunctionRenderer_decorateAnchor = async function _AnchorFunctionRenderer_decorateAnchor(container, identifier) {
    await decorateAnchorForAnchorLink(container, __classPrivateFieldGet(this, _AnchorFunctionRenderer_treeElement, "f"), {
        identifier,
        needsSpace: true,
    });
    this.anchorDecoratedForTest();
};
class PositionAnchorRenderer {
    constructor(treeElement) {
        _PositionAnchorRenderer_treeElement.set(this, void 0);
        __classPrivateFieldSet(this, _PositionAnchorRenderer_treeElement, treeElement, "f");
    }
    anchorDecoratedForTest() {
    }
    render(match) {
        const content = document.createElement('span');
        content.appendChild(document.createTextNode(match.text));
        void decorateAnchorForAnchorLink(content, __classPrivateFieldGet(this, _PositionAnchorRenderer_treeElement, "f"), {
            identifier: match.text,
            needsSpace: false,
        }).then(() => this.anchorDecoratedForTest());
        return [content];
    }
    matcher() {
        return new _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_17__.PositionAnchorMatcher();
    }
}
_PositionAnchorRenderer_treeElement = new WeakMap();
class StylePropertyTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.TreeOutline.TreeElement {
    constructor({ stylesPane, section, matchedStyles, property, isShorthand, inherited, overloaded, newProperty }) {
        // Pass an empty title, the title gets made later in onattach.
        const jslogContext = property.name.startsWith('--') ? 'custom-property' : property.name;
        super('', isShorthand, jslogContext);
        _StylePropertyTreeElement_instances.add(this);
        Object.defineProperty(this, "style", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "matchedStylesInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "property", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "inheritedInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "overloadedInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "parentPaneInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _StylePropertyTreeElement_parentSection.set(this, void 0);
        Object.defineProperty(this, "isShorthand", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "applyStyleThrottler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "newProperty", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "expandedDueToFilter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "valueElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nameElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "expandElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "originalPropertyText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hasBeenEditedIncrementally", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "prompt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lastComputedValue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "computedStyles", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "parentsComputedStyles", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "contextForTest", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _StylePropertyTreeElement_propertyTextFromSource.set(this, void 0);
        this.style = property.ownerStyle;
        this.matchedStylesInternal = matchedStyles;
        this.property = property;
        this.inheritedInternal = inherited;
        this.overloadedInternal = overloaded;
        this.selectable = false;
        this.parentPaneInternal = stylesPane;
        __classPrivateFieldSet(this, _StylePropertyTreeElement_parentSection, section, "f");
        this.isShorthand = isShorthand;
        this.applyStyleThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(0);
        this.newProperty = newProperty;
        if (this.newProperty) {
            this.listItemElement.textContent = '';
        }
        this.expandedDueToFilter = false;
        this.valueElement = null;
        this.nameElement = null;
        this.expandElement = null;
        this.originalPropertyText = '';
        this.hasBeenEditedIncrementally = false;
        this.prompt = null;
        this.lastComputedValue = null;
        __classPrivateFieldSet(this, _StylePropertyTreeElement_propertyTextFromSource, property.propertyText || '', "f");
    }
    matchedStyles() {
        return this.matchedStylesInternal;
    }
    editable() {
        const isLonghandInsideShorthand = this.parent instanceof _a && this.parent.isShorthand;
        const hasSourceData = Boolean(this.style.styleSheetId && this.style.range);
        return !isLonghandInsideShorthand && hasSourceData;
    }
    inherited() {
        return this.inheritedInternal;
    }
    overloaded() {
        return this.overloadedInternal;
    }
    setOverloaded(x) {
        if (x === this.overloadedInternal) {
            return;
        }
        this.overloadedInternal = x;
        this.updateState();
    }
    setComputedStyles(computedStyles) {
        this.computedStyles = computedStyles;
    }
    getComputedStyle(property) {
        return this.computedStyles?.get(property) ?? null;
    }
    setParentsComputedStyles(parentsComputedStyles) {
        this.parentsComputedStyles = parentsComputedStyles;
    }
    get name() {
        return this.property.name;
    }
    get value() {
        return this.property.value;
    }
    updateFilter() {
        const regex = this.parentPaneInternal.filterRegex();
        const matches = regex !== null && (regex.test(this.property.name) || regex.test(this.property.value));
        this.listItemElement.classList.toggle('filter-match', matches);
        void this.onpopulate();
        let hasMatchingChildren = false;
        for (let i = 0; i < this.childCount(); ++i) {
            const child = this.childAt(i);
            if (!child || (child && !child.updateFilter())) {
                continue;
            }
            hasMatchingChildren = true;
        }
        if (!regex) {
            if (this.expandedDueToFilter) {
                this.collapse();
            }
            this.expandedDueToFilter = false;
        }
        else if (hasMatchingChildren && !this.expanded) {
            this.expand();
            this.expandedDueToFilter = true;
        }
        else if (!hasMatchingChildren && this.expanded && this.expandedDueToFilter) {
            this.collapse();
            this.expandedDueToFilter = false;
        }
        return matches;
    }
    renderedPropertyText() {
        if (!this.nameElement || !this.valueElement) {
            return '';
        }
        return this.nameElement.textContent + ': ' + this.valueElement.textContent;
    }
    updateState() {
        if (!this.listItemElement) {
            return;
        }
        if (this.style.isPropertyImplicit(this.name)) {
            this.listItemElement.classList.add('implicit');
        }
        else {
            this.listItemElement.classList.remove('implicit');
        }
        const hasIgnorableError = !this.property.parsedOk && _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_21__.StylesSidebarPane.ignoreErrorsForProperty(this.property);
        if (hasIgnorableError) {
            this.listItemElement.classList.add('has-ignorable-error');
        }
        else {
            this.listItemElement.classList.remove('has-ignorable-error');
        }
        if (this.inherited()) {
            this.listItemElement.classList.add('inherited');
        }
        else {
            this.listItemElement.classList.remove('inherited');
        }
        if (this.overloaded()) {
            this.listItemElement.classList.add('overloaded');
        }
        else {
            this.listItemElement.classList.remove('overloaded');
        }
        if (this.property.disabled) {
            this.listItemElement.classList.add('disabled');
        }
        else {
            this.listItemElement.classList.remove('disabled');
        }
        this.listItemElement.classList.toggle('changed', this.isPropertyChanged(this.property));
    }
    node() {
        return this.parentPaneInternal.node();
    }
    parentPane() {
        return this.parentPaneInternal;
    }
    section() {
        return __classPrivateFieldGet(this, _StylePropertyTreeElement_parentSection, "f");
    }
    updatePane() {
        __classPrivateFieldGet(this, _StylePropertyTreeElement_parentSection, "f").refreshUpdate(this);
    }
    async toggleDisabled(disabled) {
        const oldStyleRange = this.style.range;
        if (!oldStyleRange) {
            return;
        }
        this.parentPaneInternal.setUserOperation(true);
        const success = await this.property.setDisabled(disabled);
        this.parentPaneInternal.setUserOperation(false);
        if (!success) {
            return;
        }
        this.matchedStylesInternal.resetActiveProperties();
        this.updatePane();
        this.styleTextAppliedForTest();
    }
    isPropertyChanged(property) {
        if (!_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled(_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.ExperimentName.STYLES_PANE_CSS_CHANGES)) {
            return false;
        }
        // Check local cache first, then check against diffs from the workspace.
        return __classPrivateFieldGet(this, _StylePropertyTreeElement_propertyTextFromSource, "f") !== property.propertyText || this.parentPane().isPropertyChanged(property);
    }
    async onpopulate() {
        // Only populate once and if this property is a shorthand.
        if (this.childCount() || !this.isShorthand) {
            return;
        }
        const longhandProperties = this.property.getLonghandProperties();
        const leadingProperties = this.style.leadingProperties();
        for (const property of longhandProperties) {
            const name = property.name;
            let inherited = false;
            let overloaded = false;
            inherited = __classPrivateFieldGet(this, _StylePropertyTreeElement_parentSection, "f").isPropertyInherited(name);
            overloaded = this.matchedStylesInternal.propertyState(property) === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMatchedStyles.PropertyState.Overloaded;
            const leadingProperty = leadingProperties.find(property => property.name === name && property.activeInStyle());
            if (leadingProperty) {
                overloaded = true;
            }
            const item = new _a({
                stylesPane: this.parentPaneInternal,
                section: __classPrivateFieldGet(this, _StylePropertyTreeElement_parentSection, "f"),
                matchedStyles: this.matchedStylesInternal,
                property,
                isShorthand: false,
                inherited,
                overloaded,
                newProperty: false,
            });
            item.setComputedStyles(this.computedStyles);
            item.setParentsComputedStyles(this.parentsComputedStyles);
            this.appendChild(item);
        }
    }
    onattach() {
        this.updateTitle();
        this.listItemElement.addEventListener('mousedown', event => {
            if (event.button === 0) {
                parentMap.set(this.parentPaneInternal, this);
            }
        }, false);
        this.listItemElement.addEventListener('mouseup', this.mouseUp.bind(this));
        this.listItemElement.addEventListener('click', event => {
            if (!event.target) {
                return;
            }
            const node = event.target;
            if (!node.hasSelection() && event.target !== this.listItemElement) {
                event.consume(true);
            }
        });
        // Copy context menu.
        this.listItemElement.addEventListener('contextmenu', this.handleCopyContextMenuEvent.bind(this));
    }
    onexpand() {
        this.updateExpandElement();
    }
    oncollapse() {
        this.updateExpandElement();
    }
    updateExpandElement() {
        if (!this.expandElement) {
            return;
        }
        if (this.expanded) {
            this.expandElement.name = 'triangle-down';
        }
        else {
            this.expandElement.name = 'triangle-right';
        }
    }
    getVariablePopoverContents(variableName, computedValue) {
        return new _components_components_js__WEBPACK_IMPORTED_MODULE_14__.CSSVariableValueView.CSSVariableValueView({
            variableName,
            value: computedValue ?? undefined,
            details: __classPrivateFieldGet(this, _StylePropertyTreeElement_instances, "m", _StylePropertyTreeElement_getRegisteredPropertyDetails).call(this, variableName),
        });
    }
    updateTitleIfComputedValueChanged() {
        const computedValue = __classPrivateFieldGet(this, _StylePropertyTreeElement_instances, "m", _StylePropertyTreeElement_computeCSSExpression).call(this, this.property.ownerStyle, this.property.value);
        if (computedValue === this.lastComputedValue) {
            return;
        }
        this.lastComputedValue = computedValue;
        this.innerUpdateTitle();
    }
    updateTitle() {
        this.lastComputedValue = __classPrivateFieldGet(this, _StylePropertyTreeElement_instances, "m", _StylePropertyTreeElement_computeCSSExpression).call(this, this.property.ownerStyle, this.property.value);
        this.innerUpdateTitle();
    }
    innerUpdateTitle() {
        this.updateState();
        if (this.isExpandable()) {
            this.expandElement = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.create('triangle-right', 'expand-icon');
            this.expandElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.expand().track({ click: true })}`);
        }
        const renderers = this.property.parsedOk ?
            [
                new VariableRenderer(this, this.style),
                new ColorRenderer(this),
                new ColorMixRenderer(this.parentPaneInternal),
                new _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.URLRenderer(this.style.parentRule, this.node()),
                new AngleRenderer(this),
                new LinkableNameRenderer(this),
                new BezierRenderer(this),
                new _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.StringRenderer(),
                new ShadowRenderer(this),
                new FontRenderer(this),
                new LightDarkColorRenderer(this),
                new GridTemplateRenderer(),
                new LinearGradientRenderer(),
                new AnchorFunctionRenderer(this),
                new PositionAnchorRenderer(this),
            ] :
            [];
        if (!_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled('css-type-component-length-deprecate') && this.property.parsedOk) {
            renderers.push(new LengthRenderer(this));
        }
        this.listItemElement.removeChildren();
        this.valueElement = _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.Renderer.renderValueElement(this.name, this.value, renderers);
        this.nameElement = _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_18__.Renderer.renderNameElement(this.name);
        if (this.property.name.startsWith('--') && this.nameElement) {
            this.parentPaneInternal.addPopover(this.nameElement, {
                contents: () => this.getVariablePopoverContents(this.property.name, this.matchedStylesInternal.computeCSSVariable(this.style, this.property.name)?.value ?? null),
                jslogContext: 'elements.css-var',
            });
        }
        if (!this.treeOutline) {
            return;
        }
        const indent = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').get();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.UIUtils.createTextChild(this.listItemElement.createChild('span', 'styles-clipboard-only'), indent.repeat(this.section().nestingLevel + 1) + (this.property.disabled ? '/* ' : ''));
        if (this.nameElement) {
            this.listItemElement.appendChild(this.nameElement);
        }
        if (this.valueElement) {
            const lineBreakValue = this.valueElement.firstElementChild && this.valueElement.firstElementChild.tagName === 'BR';
            const separator = lineBreakValue ? ':' : ': ';
            this.listItemElement.createChild('span', 'styles-name-value-separator').textContent = separator;
            if (this.expandElement) {
                this.listItemElement.appendChild(this.expandElement);
            }
            this.listItemElement.appendChild(this.valueElement);
            const semicolon = this.listItemElement.createChild('span', 'styles-semicolon');
            semicolon.textContent = ';';
            semicolon.onmouseup = this.mouseUp.bind(this);
            if (this.property.disabled) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.UIUtils.createTextChild(this.listItemElement.createChild('span', 'styles-clipboard-only'), ' */');
            }
        }
        if (this.valueElement && __classPrivateFieldGet(this, _StylePropertyTreeElement_parentSection, "f").editable && this.property.name === 'display') {
            const propertyValue = this.property.trimmedValueWithoutImportant();
            const isFlex = propertyValue === 'flex' || propertyValue === 'inline-flex';
            const isGrid = propertyValue === 'grid' || propertyValue === 'inline-grid';
            if (isFlex || isGrid) {
                const key = `${__classPrivateFieldGet(this, _StylePropertyTreeElement_parentSection, "f").getSectionIdx()}_${__classPrivateFieldGet(this, _StylePropertyTreeElement_parentSection, "f").nextEditorTriggerButtonIdx}`;
                const button = _StyleEditorWidget_js__WEBPACK_IMPORTED_MODULE_19__.StyleEditorWidget.createTriggerButton(this.parentPaneInternal, __classPrivateFieldGet(this, _StylePropertyTreeElement_parentSection, "f"), isFlex ? FlexboxEditor : GridEditor, isFlex ? i18nString(UIStrings.flexboxEditorButton) : i18nString(UIStrings.gridEditorButton), key);
                button.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.showStyleEditor().track({ click: true }).context(isFlex ? 'flex' : 'grid')}`);
                __classPrivateFieldGet(this, _StylePropertyTreeElement_parentSection, "f").nextEditorTriggerButtonIdx++;
                button.addEventListener('click', () => {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.swatchActivated(isFlex ? _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.SwatchType.Flex : _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.SwatchType.Grid);
                });
                this.listItemElement.appendChild(button);
                const helper = this.parentPaneInternal.swatchPopoverHelper();
                if (helper.isShowing(_StyleEditorWidget_js__WEBPACK_IMPORTED_MODULE_19__.StyleEditorWidget.instance()) && _StyleEditorWidget_js__WEBPACK_IMPORTED_MODULE_19__.StyleEditorWidget.instance().getTriggerKey() === key) {
                    helper.setAnchorElement(button);
                }
            }
        }
        if (this.property.parsedOk) {
            this.updateAuthoringHint();
        }
        else {
            // Avoid having longhands under an invalid shorthand.
            this.listItemElement.classList.add('not-parsed-ok');
            const registrationDetails = __classPrivateFieldGet(this, _StylePropertyTreeElement_instances, "m", _StylePropertyTreeElement_getRegisteredPropertyDetails).call(this, this.property.name);
            const tooltip = registrationDetails ?
                new _components_components_js__WEBPACK_IMPORTED_MODULE_14__.CSSVariableValueView.CSSVariableParserError(registrationDetails) :
                null;
            // Add a separate exclamation mark IMG element with a tooltip.
            this.listItemElement.insertBefore(this.parentPaneInternal.createExclamationMark(this.property, tooltip), this.listItemElement.firstChild);
            // When the property is valid but the property value is invalid,
            // add line-through only to the property value.
            const invalidPropertyValue = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMetadata.cssMetadata().isCSSPropertyName(this.property.name);
            if (invalidPropertyValue) {
                this.listItemElement.classList.add('invalid-property-value');
            }
        }
        if (!this.property.activeInStyle()) {
            this.listItemElement.classList.add('inactive');
        }
        this.updateFilter();
        if (this.property.parsedOk && this.parent && this.parent.root) {
            const enabledCheckboxElement = document.createElement('input');
            enabledCheckboxElement.classList.add('enabled-button', 'small');
            enabledCheckboxElement.type = 'checkbox';
            enabledCheckboxElement.checked = !this.property.disabled;
            enabledCheckboxElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.toggle().track({ click: true })}`);
            enabledCheckboxElement.addEventListener('mousedown', event => event.consume(), false);
            enabledCheckboxElement.addEventListener('click', event => {
                void this.toggleDisabled(!this.property.disabled);
                event.consume();
            }, false);
            if (this.nameElement && this.valueElement) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ARIAUtils.setLabel(enabledCheckboxElement, `${this.nameElement.textContent} ${this.valueElement.textContent}`);
            }
            const copyIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.create('copy', 'copy');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Tooltip.Tooltip.install(copyIcon, i18nString(UIStrings.copyDeclaration));
            copyIcon.addEventListener('click', () => {
                const propertyText = `${this.property.name}: ${this.property.value};`;
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(propertyText);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.styleTextCopied(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.StyleTextCopied.DeclarationViaChangedLine);
            });
            this.listItemElement.append(copyIcon);
            this.listItemElement.insertBefore(enabledCheckboxElement, this.listItemElement.firstChild);
        }
    }
    updateAuthoringHint() {
        this.listItemElement.classList.remove('inactive-property');
        const existingElement = this.listItemElement.querySelector('.hint');
        if (existingElement) {
            activeHints.delete(existingElement);
            existingElement?.closest('.hint-wrapper')?.remove();
        }
        const propertyName = this.property.name;
        if (!_CSSRuleValidator_js__WEBPACK_IMPORTED_MODULE_15__.cssRuleValidatorsMap.has(propertyName)) {
            return;
        }
        // Different rules apply to SVG nodes altogether. We currently don't have SVG-specific hints.
        if (this.node()?.isSVGNode()) {
            return;
        }
        const cssModel = this.parentPaneInternal.cssModel();
        const fontFaces = cssModel?.fontFaces() || [];
        const localName = this.node()?.localName();
        for (const validator of _CSSRuleValidator_js__WEBPACK_IMPORTED_MODULE_15__.cssRuleValidatorsMap.get(propertyName) || []) {
            const hint = validator.getHint(propertyName, this.computedStyles || undefined, this.parentsComputedStyles || undefined, localName?.toLowerCase(), fontFaces);
            if (hint) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.cssHintShown(validator.getMetricType());
                const wrapper = document.createElement('span');
                wrapper.classList.add('hint-wrapper');
                const hintIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon();
                hintIcon.data = { iconName: 'info', color: 'var(--icon-default)', width: '14px', height: '14px' };
                hintIcon.classList.add('hint');
                wrapper.append(hintIcon);
                activeHints.set(hintIcon, hint);
                this.listItemElement.append(wrapper);
                this.listItemElement.classList.add('inactive-property');
                break;
            }
        }
    }
    mouseUp(event) {
        const activeTreeElement = parentMap.get(this.parentPaneInternal);
        parentMap.delete(this.parentPaneInternal);
        if (!activeTreeElement) {
            return;
        }
        if (this.listItemElement.hasSelection()) {
            return;
        }
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.UIUtils.isBeingEdited(event.target)) {
            return;
        }
        if (event.composedPath()[0] instanceof HTMLButtonElement) {
            return;
        }
        event.consume(true);
        if (event.target === this.listItemElement) {
            return;
        }
        let selectedElement = event.target;
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event) && __classPrivateFieldGet(this, _StylePropertyTreeElement_parentSection, "f").navigable) {
            this.navigateToSource(selectedElement);
            return;
        }
        if (this.expandElement && selectedElement === this.expandElement) {
            return;
        }
        if (!__classPrivateFieldGet(this, _StylePropertyTreeElement_parentSection, "f").editable) {
            return;
        }
        selectedElement = selectedElement.enclosingNodeOrSelfWithClass('webkit-css-property') ||
            selectedElement.enclosingNodeOrSelfWithClass('value') ||
            selectedElement.enclosingNodeOrSelfWithClass('styles-semicolon');
        if (!selectedElement || selectedElement === this.nameElement) {
            _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.logClick(this.nameElement, event);
            this.startEditingName();
        }
        else {
            _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.logClick(this.valueElement, event);
            this.startEditingValue();
        }
    }
    handleContextMenuEvent(context, event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ContextMenu.ContextMenu(event);
        if (this.property.parsedOk && this.parent && this.parent.root) {
            const sectionIndex = this.parentPaneInternal.focusedSectionIndex();
            contextMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.togglePropertyAndContinueEditing), async () => {
                if (this.treeOutline) {
                    const propertyIndex = this.treeOutline.rootElement().indexOfChild(this);
                    // order matters here: this.editingCancelled may invalidate this.treeOutline.
                    this.editingCancelled(null, context);
                    await this.toggleDisabled(!this.property.disabled);
                    event.consume();
                    this.parentPaneInternal.continueEditingElement(sectionIndex, propertyIndex);
                }
            }, { checked: !this.property.disabled, jslogContext: 'toggle-property-and-continue-editing' });
        }
        const revealCallback = this.navigateToSource.bind(this);
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.revealInSourcesPanel), revealCallback, { jslogContext: 'reveal-in-sources-panel' });
        void contextMenu.show();
    }
    handleCopyContextMenuEvent(event) {
        const target = event.target;
        if (!target) {
            return;
        }
        const contextMenu = this.createCopyContextMenu(event);
        void contextMenu.show();
    }
    createCopyContextMenu(event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ContextMenu.ContextMenu(event);
        contextMenu.headerSection().appendItem(i18nString(UIStrings.copyDeclaration), () => {
            const propertyText = `${this.property.name}: ${this.property.value};`;
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(propertyText);
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.styleTextCopied(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.StyleTextCopied.DeclarationViaContextMenu);
        }, { jslogContext: 'copy-declaration' });
        contextMenu.headerSection().appendItem(i18nString(UIStrings.copyProperty), () => {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(this.property.name);
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.styleTextCopied(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.StyleTextCopied.PropertyViaContextMenu);
        }, { jslogContext: 'copy-property' });
        contextMenu.headerSection().appendItem(i18nString(UIStrings.copyValue), () => {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(this.property.value);
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.styleTextCopied(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.StyleTextCopied.ValueViaContextMenu);
        }, { jslogContext: 'copy-value' });
        contextMenu.headerSection().appendItem(i18nString(UIStrings.copyRule), () => {
            const ruleText = _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_21__.StylesSidebarPane.formatLeadingProperties(__classPrivateFieldGet(this, _StylePropertyTreeElement_parentSection, "f")).ruleText;
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(ruleText);
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.styleTextCopied(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.StyleTextCopied.RuleViaContextMenu);
        }, { jslogContext: 'copy-rule' });
        contextMenu.headerSection().appendItem(i18nString(UIStrings.copyCssDeclarationAsJs), this.copyCssDeclarationAsJs.bind(this), { jslogContext: 'copy-css-declaration-as-js' });
        contextMenu.clipboardSection().appendItem(i18nString(UIStrings.copyAllDeclarations), () => {
            const allDeclarationText = _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_21__.StylesSidebarPane.formatLeadingProperties(__classPrivateFieldGet(this, _StylePropertyTreeElement_parentSection, "f")).allDeclarationText;
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(allDeclarationText);
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.styleTextCopied(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.StyleTextCopied.AllDeclarationsViaContextMenu);
        }, { jslogContext: 'copy-all-declarations' });
        contextMenu.clipboardSection().appendItem(i18nString(UIStrings.copyAllCssDeclarationsAsJs), this.copyAllCssDeclarationAsJs.bind(this), { jslogContext: 'copy-all-css-declarations-as-js' });
        // TODO(changhaohan): conditionally add this item only when there are changes to copy
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.copyAllCSSChanges), async () => {
            const allChanges = await this.parentPane().getFormattedChanges();
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(allChanges);
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.styleTextCopied(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.StyleTextCopied.AllChangesViaStylesPane);
        }, { jslogContext: 'copy-all-css-changes' });
        contextMenu.footerSection().appendItem(i18nString(UIStrings.viewComputedValue), () => {
            void this.viewComputedValue();
        }, { jslogContext: 'view-computed-value' });
        return contextMenu;
    }
    async viewComputedValue() {
        const computedStyleWidget = _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_16__.ElementsPanel.instance().getComputedStyleWidget();
        if (!computedStyleWidget.isShowing()) {
            await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ViewManager.ViewManager.instance().showView('Computed');
        }
        let propertyNamePattern = '';
        if (this.isShorthand) {
            propertyNamePattern = '^' + this.property.name + '-';
        }
        else {
            propertyNamePattern = '^' + this.property.name + '$';
        }
        const regex = new RegExp(propertyNamePattern, 'i');
        await computedStyleWidget.filterComputedStyles(regex);
        computedStyleWidget.input.setValue(this.property.name);
        computedStyleWidget.input.element.focus();
    }
    copyCssDeclarationAsJs() {
        const cssDeclarationValue = (0,_StylePropertyUtils_js__WEBPACK_IMPORTED_MODULE_20__.getCssDeclarationAsJavascriptProperty)(this.property);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(cssDeclarationValue);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.styleTextCopied(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.StyleTextCopied.DeclarationAsJSViaContextMenu);
    }
    copyAllCssDeclarationAsJs() {
        const leadingProperties = __classPrivateFieldGet(this, _StylePropertyTreeElement_parentSection, "f").style().leadingProperties();
        const cssDeclarationsAsJsProperties = leadingProperties.filter(property => !property.disabled).map(_StylePropertyUtils_js__WEBPACK_IMPORTED_MODULE_20__.getCssDeclarationAsJavascriptProperty);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(cssDeclarationsAsJsProperties.join(',\n'));
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.styleTextCopied(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.StyleTextCopied.AllDeclarationsAsJSViaContextMenu);
    }
    navigateToSource(element, omitFocus) {
        if (!__classPrivateFieldGet(this, _StylePropertyTreeElement_parentSection, "f").navigable) {
            return;
        }
        const propertyNameClicked = element === this.nameElement;
        const uiLocation = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().propertyUILocation(this.property, propertyNameClicked);
        if (uiLocation) {
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiLocation, omitFocus);
        }
    }
    startEditingValue() {
        const context = {
            expanded: this.expanded,
            hasChildren: this.isExpandable(),
            isEditingName: false,
            originalProperty: this.property,
            previousContent: this.value,
        };
        // Grid definitions are often multiline. Instead of showing the authored text reformat it a little bit nicer.
        if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMetadata.cssMetadata().isGridAreaDefiningProperty(this.name)) {
            const splitResult = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_7__.TextUtils.Utils.splitStringByRegexes(this.value, [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMetadata.GridAreaRowRegex]);
            context.previousContent = splitResult.map(result => result.value.trim()).join('\n');
        }
        __classPrivateFieldGet(this, _StylePropertyTreeElement_instances, "m", _StylePropertyTreeElement_startEditing).call(this, context);
    }
    startEditingName() {
        const context = {
            expanded: this.expanded,
            hasChildren: this.isExpandable(),
            isEditingName: true,
            originalProperty: this.property,
            previousContent: this.name.split('\n').map(l => l.trim()).join('\n'),
        };
        __classPrivateFieldGet(this, _StylePropertyTreeElement_instances, "m", _StylePropertyTreeElement_startEditing).call(this, context);
    }
    editingNameValueKeyDown(context, event) {
        if (event.handled) {
            return;
        }
        const keyboardEvent = event;
        const target = keyboardEvent.target;
        let result;
        if ((keyboardEvent.key === 'Enter' && !keyboardEvent.shiftKey) ||
            (context.isEditingName && keyboardEvent.key === ' ')) {
            result = 'forward';
        }
        else if (keyboardEvent.keyCode === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.KeyboardShortcut.Keys.Esc.code ||
            keyboardEvent.key === _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.ESCAPE_KEY) {
            result = 'cancel';
        }
        else if (!context.isEditingName && this.newProperty &&
            keyboardEvent.keyCode === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.KeyboardShortcut.Keys.Backspace.code) {
            // For a new property, when Backspace is pressed at the beginning of new property value, move back to the property name.
            const selection = target.getComponentSelection();
            if (selection && selection.isCollapsed && !selection.focusOffset) {
                event.preventDefault();
                result = 'backward';
            }
        }
        else if (keyboardEvent.key === 'Tab') {
            result = keyboardEvent.shiftKey ? 'backward' : 'forward';
            event.preventDefault();
        }
        if (result) {
            switch (result) {
                case 'cancel':
                    this.editingCancelled(null, context);
                    break;
                case 'forward':
                case 'backward':
                    void this.editingCommitted(target.textContent || '', context, result);
                    break;
            }
            event.consume();
            return;
        }
    }
    editingNameValueKeyPress(context, event) {
        function shouldCommitValueSemicolon(text, cursorPosition) {
            // FIXME: should this account for semicolons inside comments?
            let openQuote = '';
            for (let i = 0; i < cursorPosition; ++i) {
                const ch = text[i];
                if (ch === '\\' && openQuote !== '') {
                    ++i;
                } // skip next character inside string
                else if (!openQuote && (ch === '"' || ch === '\'')) {
                    openQuote = ch;
                }
                else if (openQuote === ch) {
                    openQuote = '';
                }
            }
            return !openQuote;
        }
        const keyboardEvent = event;
        const target = keyboardEvent.target;
        const keyChar = String.fromCharCode(keyboardEvent.charCode);
        const selectionLeftOffset = __classPrivateFieldGet(this, _StylePropertyTreeElement_instances, "m", _StylePropertyTreeElement_selectionLeftOffset).call(this, target);
        const isFieldInputTerminated = (context.isEditingName ? keyChar === ':' :
            keyChar === ';' && selectionLeftOffset !== null &&
                shouldCommitValueSemicolon(target.textContent || '', selectionLeftOffset));
        if (isFieldInputTerminated) {
            // Enter or colon (for name)/semicolon outside of string (for value).
            event.consume(true);
            void this.editingCommitted(target.textContent || '', context, 'forward');
            return;
        }
    }
    async applyFreeFlowStyleTextEdit(context) {
        if (!this.prompt || !this.parentPaneInternal.node()) {
            return;
        }
        const enteredText = this.prompt.text();
        if (context.isEditingName && enteredText.includes(':')) {
            void this.editingCommitted(enteredText, context, 'forward');
            return;
        }
        const valueText = this.prompt.textWithCurrentSuggestion();
        if (valueText.includes(';')) {
            return;
        }
        // Prevent destructive side-effects during live-edit. crbug.com/433889
        const parentNode = this.parentPaneInternal.node();
        if (parentNode) {
            const isPseudo = Boolean(parentNode.pseudoType());
            if (isPseudo) {
                if (this.name.toLowerCase() === 'content') {
                    return;
                }
                const lowerValueText = valueText.trim().toLowerCase();
                if (lowerValueText.startsWith('content:') || lowerValueText === 'display: none') {
                    return;
                }
            }
        }
        if (context.isEditingName) {
            if (valueText.includes(':')) {
                await this.applyStyleText(valueText, false);
            }
            else if (this.hasBeenEditedIncrementally) {
                await this.applyOriginalStyle(context);
            }
        }
        else {
            if (this.nameElement) {
                await this.applyStyleText(`${this.nameElement.textContent}: ${valueText}`, false);
            }
        }
    }
    kickFreeFlowStyleEditForTest() {
        const context = this.contextForTest;
        return this.applyFreeFlowStyleTextEdit(context);
    }
    editingEnded(context) {
        this.setExpandable(context.hasChildren);
        if (context.expanded) {
            this.expand();
        }
        const editedElement = context.isEditingName ? this.nameElement : this.valueElement;
        // The proxyElement has been deleted, no need to remove listener.
        if (editedElement && editedElement.parentElement) {
            editedElement.parentElement.classList.remove('child-editing');
        }
        this.parentPaneInternal.setEditingStyle(false);
    }
    editingCancelled(element, context) {
        this.removePrompt();
        if (this.hasBeenEditedIncrementally) {
            void this.applyOriginalStyle(context);
        }
        else if (this.newProperty && this.treeOutline) {
            this.treeOutline.removeChild(this);
        }
        this.updateTitle();
        // This should happen last, as it clears the info necessary to restore the property value after [Page]Up/Down changes.
        this.editingEnded(context);
    }
    async applyOriginalStyle(context) {
        await this.applyStyleText(this.originalPropertyText, false, context.originalProperty);
    }
    findSibling(moveDirection) {
        let target = this;
        do {
            const sibling = moveDirection === 'forward' ? target.nextSibling : target.previousSibling;
            target = sibling instanceof _a ? sibling : null;
        } while (target && target.inherited());
        return target;
    }
    async editingCommitted(userInput, context, moveDirection) {
        this.removePrompt();
        this.editingEnded(context);
        const isEditingName = context.isEditingName;
        // If the underlying property has been ripped out, always assume that the value having been entered was
        // a name-value pair and attempt to process it via the SDK.
        if (!this.nameElement || !this.valueElement) {
            return;
        }
        const nameElementValue = this.nameElement.textContent || '';
        const nameValueEntered = (isEditingName && nameElementValue.includes(':')) || !this.property;
        // Determine where to move to before making changes
        let createNewProperty = false;
        let moveToSelector = false;
        const isDataPasted = typeof context.originalName !== 'undefined';
        const isDirtyViaPaste = isDataPasted &&
            (this.nameElement.textContent !== context.originalName ||
                this.valueElement.textContent !== context.originalValue);
        const isPropertySplitPaste = isDataPasted && isEditingName && this.valueElement.textContent !== context.originalValue;
        let moveTo = this;
        const moveToOther = (isEditingName !== (moveDirection === 'forward'));
        const abandonNewProperty = this.newProperty && !userInput && (moveToOther || isEditingName);
        if (moveDirection === 'forward' && (!isEditingName || isPropertySplitPaste) ||
            moveDirection === 'backward' && isEditingName) {
            moveTo = moveTo.findSibling(moveDirection);
            if (!moveTo) {
                if (moveDirection === 'forward' && (!this.newProperty || userInput)) {
                    createNewProperty = true;
                }
                else if (moveDirection === 'backward') {
                    moveToSelector = true;
                }
            }
        }
        // Make the Changes and trigger the moveToNextCallback after updating.
        let moveToIndex = -1;
        if (moveTo !== null && this.treeOutline) {
            moveToIndex = this.treeOutline.rootElement().indexOfChild(moveTo);
        }
        const blankInput = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.isWhitespace(userInput);
        const shouldCommitNewProperty = this.newProperty &&
            (isPropertySplitPaste || moveToOther || (!moveDirection && !isEditingName) || (isEditingName && blankInput) ||
                nameValueEntered);
        if (((userInput !== context.previousContent || isDirtyViaPaste) && !this.newProperty) || shouldCommitNewProperty) {
            let propertyText;
            if (nameValueEntered) {
                propertyText = this.nameElement.textContent;
            }
            else if (blankInput ||
                (this.newProperty && _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.isWhitespace(this.valueElement.textContent || ''))) {
                propertyText = '';
            }
            else {
                if (isEditingName) {
                    propertyText = userInput + ': ' + this.property.value;
                }
                else {
                    propertyText = this.property.name + ': ' + userInput;
                }
            }
            await this.applyStyleText(propertyText || '', true);
            moveToNextCallback.call(this, this.newProperty, !blankInput, __classPrivateFieldGet(this, _StylePropertyTreeElement_parentSection, "f"));
        }
        else {
            if (isEditingName) {
                this.property.name = userInput;
            }
            else {
                this.property.value = userInput;
            }
            if (!isDataPasted && !this.newProperty) {
                this.updateTitle();
            }
            moveToNextCallback.call(this, this.newProperty, false, __classPrivateFieldGet(this, _StylePropertyTreeElement_parentSection, "f"));
        }
        /**
         * The Callback to start editing the next/previous property/selector.
         */
        function moveToNextCallback(alreadyNew, valueChanged, section) {
            if (!moveDirection) {
                this.parentPaneInternal.resetFocus();
                return;
            }
            // User just tabbed through without changes.
            if (moveTo && moveTo.parent) {
                if (isEditingName) {
                    moveTo.startEditingValue();
                }
                else {
                    moveTo.startEditingName();
                }
                return;
            }
            // User has made a change then tabbed, wiping all the original treeElements.
            // Recalculate the new treeElement for the same property we were going to edit next.
            if (moveTo && !moveTo.parent) {
                const rootElement = section.propertiesTreeOutline.rootElement();
                if (moveDirection === 'forward' && blankInput && !isEditingName) {
                    --moveToIndex;
                }
                if (moveToIndex >= rootElement.childCount() && !this.newProperty) {
                    createNewProperty = true;
                }
                else {
                    const treeElement = (moveToIndex >= 0 ? rootElement.childAt(moveToIndex) : null);
                    if (treeElement) {
                        if (alreadyNew && blankInput) {
                            if (moveDirection === 'forward') {
                                treeElement.startEditingName();
                            }
                            else {
                                treeElement.startEditingValue();
                            }
                        }
                        else if (!isEditingName || isPropertySplitPaste) {
                            treeElement.startEditingName();
                        }
                        else {
                            treeElement.startEditingValue();
                        }
                        return;
                    }
                    if (!alreadyNew) {
                        moveToSelector = true;
                    }
                }
            }
            // Create a new attribute in this section (or move to next editable selector if possible).
            if (createNewProperty) {
                if (alreadyNew && !valueChanged && (isEditingName !== (moveDirection === 'backward'))) {
                    return;
                }
                section.addNewBlankProperty().startEditingName();
                return;
            }
            if (abandonNewProperty) {
                moveTo = this.findSibling(moveDirection);
                const sectionToEdit = (moveTo || moveDirection === 'backward') ? section : section.nextEditableSibling();
                if (sectionToEdit) {
                    if (sectionToEdit.style().parentRule) {
                        sectionToEdit.startEditingSelector();
                    }
                    else {
                        sectionToEdit.moveEditorFromSelector(moveDirection);
                    }
                }
                return;
            }
            if (moveToSelector) {
                if (section.style().parentRule) {
                    section.startEditingSelector();
                }
                else {
                    section.moveEditorFromSelector(moveDirection);
                }
            }
        }
    }
    removePrompt() {
        // BUG 53242. This cannot go into editingEnded(), as it should always happen first for any editing outcome.
        if (this.prompt) {
            this.prompt.detach();
            this.prompt = null;
        }
    }
    styleTextAppliedForTest() {
    }
    applyStyleText(styleText, majorChange, property) {
        return this.applyStyleThrottler.schedule(this.innerApplyStyleText.bind(this, styleText, majorChange, property));
    }
    async innerApplyStyleText(styleText, majorChange, property) {
        // this.property might have been nulled at the end of the last innerApplyStyleText
        if (!this.treeOutline || !this.property) {
            return;
        }
        const oldStyleRange = this.style.range;
        if (!oldStyleRange) {
            return;
        }
        const hasBeenEditedIncrementally = this.hasBeenEditedIncrementally;
        styleText = styleText.replace(/[\xA0\t]/g, ' ').trim(); // Replace &nbsp; with whitespace.
        if (!styleText.length && majorChange && this.newProperty && !hasBeenEditedIncrementally) {
            // The user deleted everything and never applied a new property value via Up/Down scrolling/live editing, so remove the tree element and update.
            this.parent && this.parent.removeChild(this);
            return;
        }
        const currentNode = this.parentPaneInternal.node();
        this.parentPaneInternal.setUserOperation(true);
        styleText += _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.findUnclosedCssQuote(styleText);
        styleText += ')'.repeat(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.countUnmatchedLeftParentheses(styleText));
        // Append a ";" if the new text does not end in ";".
        // FIXME: this does not handle trailing comments.
        if (styleText.length && !/;\s*$/.test(styleText)) {
            styleText += ';';
        }
        const overwriteProperty = !this.newProperty || hasBeenEditedIncrementally;
        let success = await this.property.setText(styleText, majorChange, overwriteProperty);
        // Revert to the original text if applying the new text failed
        if (hasBeenEditedIncrementally && majorChange && !success) {
            majorChange = false;
            success = await this.property.setText(this.originalPropertyText, majorChange, overwriteProperty);
        }
        this.parentPaneInternal.setUserOperation(false);
        // TODO: using this.property.index to access its containing StyleDeclaration's property will result in
        // off-by-1 errors when the containing StyleDeclaration's respective property has already been deleted.
        // These referencing logic needs to be updated to be more robust.
        const updatedProperty = property || this.style.propertyAt(this.property.index);
        const isPropertyWithinBounds = this.property.index < this.style.allProperties().length;
        if (!success || (!updatedProperty && isPropertyWithinBounds)) {
            if (majorChange) {
                // It did not apply, cancel editing.
                if (this.newProperty) {
                    this.treeOutline.removeChild(this);
                }
                else {
                    this.updateTitle();
                }
            }
            this.styleTextAppliedForTest();
            return;
        }
        if (updatedProperty) {
            this.listItemElement.classList.toggle('changed', this.isPropertyChanged(updatedProperty));
            this.parentPane().updateChangeStatus();
        }
        this.matchedStylesInternal.resetActiveProperties();
        this.hasBeenEditedIncrementally = true;
        // null check for updatedProperty before setting this.property as the code never expects this.property to be undefined or null.
        // This occurs when deleting the last index of a StylePropertiesSection as this.style._allProperties array gets updated
        // before we index it when setting the value for updatedProperty
        const deleteProperty = majorChange && !styleText.length;
        if (deleteProperty) {
            __classPrivateFieldGet(this, _StylePropertyTreeElement_parentSection, "f").resetToolbars();
        }
        else if (!deleteProperty && updatedProperty) {
            this.property = updatedProperty;
        }
        if (currentNode === this.node()) {
            this.updatePane();
        }
        this.styleTextAppliedForTest();
    }
    ondblclick() {
        return true; // handled
    }
    isEventWithinDisclosureTriangle(event) {
        return event.target === this.expandElement;
    }
}
_a = StylePropertyTreeElement, _StylePropertyTreeElement_parentSection = new WeakMap(), _StylePropertyTreeElement_propertyTextFromSource = new WeakMap(), _StylePropertyTreeElement_instances = new WeakSet(), _StylePropertyTreeElement_getRegisteredPropertyDetails = function _StylePropertyTreeElement_getRegisteredPropertyDetails(variableName) {
    const registration = this.matchedStyles().getRegisteredProperty(variableName);
    const goToDefinition = () => this.parentPaneInternal.jumpToSection(variableName, _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_21__.REGISTERED_PROPERTY_SECTION_NAME);
    return registration ? { registration, goToDefinition } : undefined;
}, _StylePropertyTreeElement_computeCSSExpression = function _StylePropertyTreeElement_computeCSSExpression(style, text) {
    const ast = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSPropertyParser.tokenizeDeclaration('--unused', text);
    if (!ast) {
        return null;
    }
    const matching = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, [new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSPropertyParser.VariableMatcher((match) => {
            const variableValue = this.matchedStylesInternal.computeCSSVariable(style, match.name)?.value;
            if (variableValue !== undefined) {
                return variableValue;
            }
            if (match.fallback.length === 0 ||
                match.matching.hasUnresolvedVarsRange(match.fallback[0], match.fallback[match.fallback.length - 1])) {
                return null;
            }
            return match.matching.getComputedTextRange(match.fallback[0], match.fallback[match.fallback.length - 1]);
        })]);
    const decl = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSPropertyParser.ASTUtils.siblings(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSPropertyParser.ASTUtils.declValue(matching.ast.tree));
    return matching.getComputedTextRange(decl[0], decl[decl.length - 1]);
}, _StylePropertyTreeElement_startEditing = function _StylePropertyTreeElement_startEditing(context) {
    this.contextForTest = context;
    // FIXME: we don't allow editing of longhand properties under a shorthand right now.
    if (this.parent instanceof _a && this.parent.isShorthand) {
        return;
    }
    const selectedElement = context.isEditingName ? this.nameElement : this.valueElement;
    if (!selectedElement) {
        return;
    }
    if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.UIUtils.isBeingEdited(selectedElement)) {
        return;
    }
    // Lie about our children to prevent expanding on double click and to collapse shorthands.
    this.setExpandable(false);
    selectedElement.parentElement?.classList.add('child-editing');
    selectedElement.textContent = context.previousContent; // remove color swatch and the like
    function pasteHandler(context, event) {
        const clipboardEvent = event;
        const clipboardData = clipboardEvent.clipboardData;
        if (!clipboardData) {
            return;
        }
        const data = clipboardData.getData('Text');
        if (!data) {
            return;
        }
        const colonIdx = data.indexOf(':');
        if (colonIdx < 0) {
            return;
        }
        const name = data.substring(0, colonIdx).trim();
        const value = data.substring(colonIdx + 1).trim();
        event.preventDefault();
        if (typeof context.originalName === 'undefined') {
            if (this.nameElement) {
                context.originalName = this.nameElement.textContent || '';
            }
            if (this.valueElement) {
                context.originalValue = this.valueElement.textContent || '';
            }
        }
        this.property.name = name;
        this.property.value = value;
        if (this.nameElement) {
            this.nameElement.textContent = name;
            this.nameElement.normalize();
        }
        if (this.valueElement) {
            this.valueElement.textContent = value;
            this.valueElement.normalize();
        }
        const target = event.target;
        void this.editingCommitted(target.textContent || '', context, 'forward');
    }
    function blurListener(context, event) {
        const target = event.target;
        let text = target.textContent;
        if (!context.isEditingName) {
            text = this.value || text;
        }
        void this.editingCommitted(text || '', context, '');
    }
    this.originalPropertyText = this.property.propertyText || '';
    this.parentPaneInternal.setEditingStyle(true, this);
    selectedElement.parentElement?.scrollIntoViewIfNeeded(false);
    this.prompt = new _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_21__.CSSPropertyPrompt(this, context.isEditingName);
    this.prompt.setAutocompletionTimeout(0);
    this.prompt.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.TextPrompt.Events.TextChanged, () => {
        void this.applyFreeFlowStyleTextEdit(context);
    });
    const invalidString = this.property.getInvalidStringForInvalidProperty();
    if (invalidString) {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ARIAUtils.alert(invalidString);
    }
    const proxyElement = this.prompt.attachAndStartEditing(selectedElement, blurListener.bind(this, context));
    this.navigateToSource(selectedElement, true);
    proxyElement.addEventListener('keydown', this.editingNameValueKeyDown.bind(this, context), false);
    proxyElement.addEventListener('keypress', this.editingNameValueKeyPress.bind(this, context), false);
    if (context.isEditingName) {
        proxyElement.addEventListener('paste', pasteHandler.bind(this, context), false);
        proxyElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this, context), false);
    }
    selectedElement.getComponentSelection()?.selectAllChildren(selectedElement);
}, _StylePropertyTreeElement_selectionLeftOffset = function _StylePropertyTreeElement_selectionLeftOffset(element) {
    const selection = element.getComponentSelection();
    if (!selection?.containsNode(element, true)) {
        return null;
    }
    let leftOffset = selection.anchorOffset;
    let node = selection.anchorNode;
    while (node !== element) {
        while (node?.previousSibling) {
            node = node.previousSibling;
            leftOffset += node.textContent?.length ?? 0;
        }
        node = node?.parentNodeOrShadowHost() ?? null;
    }
    return leftOffset;
};


/***/ }),

/***/ "./src/panels/elements/StylePropertyUtils.ts":
/*!***************************************************!*\
  !*** ./src/panels/elements/StylePropertyUtils.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCssDeclarationAsJavascriptProperty: () => (/* binding */ getCssDeclarationAsJavascriptProperty)
/* harmony export */ });
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getCssDeclarationAsJavascriptProperty(declaration) {
    const { name, value } = declaration;
    const declarationNameAsJs = name.startsWith('--') ? `'${name}'` : name.replace(/-([a-z])/gi, (_str, group) => group.toUpperCase());
    const declarationAsJs = `'${value.replaceAll('\'', '\\\'')}'`;
    return `${declarationNameAsJs}: ${declarationAsJs}`;
}


/***/ }),

/***/ "./src/panels/elements/StylesSidebarPane.ts":
/*!**************************************************!*\
  !*** ./src/panels/elements/StylesSidebarPane.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   ButtonProvider: () => (/* binding */ ButtonProvider),
/* harmony export */   CSSPropertyPrompt: () => (/* binding */ CSSPropertyPrompt),
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   IdleCallbackManager: () => (/* binding */ IdleCallbackManager),
/* harmony export */   REGISTERED_PROPERTY_SECTION_NAME: () => (/* binding */ REGISTERED_PROPERTY_SECTION_NAME),
/* harmony export */   SectionBlock: () => (/* binding */ SectionBlock),
/* harmony export */   StylesSidebarPane: () => (/* binding */ StylesSidebarPane),
/* harmony export */   escapeUrlAsCssComment: () => (/* binding */ escapeUrlAsCssComment),
/* harmony export */   quoteFamilyName: () => (/* binding */ quoteFamilyName),
/* harmony export */   unescapeCssString: () => (/* binding */ unescapeCssString)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _models_workspace_diff_workspace_diff_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/workspace_diff/workspace_diff.js */ "./src/models/workspace_diff/workspace_diff.ts");
/* harmony import */ var _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../panels/utils/utils.js */ "./src/panels/utils/utils.ts");
/* harmony import */ var _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/components/diff_view/diff_view.js */ "./src/ui/components/diff_view/diff_view.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/legacy/components/inline_editor/inline_editor.js */ "./src/ui/legacy/components/inline_editor/inline_editor.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/elements/components/components.ts");
/* harmony import */ var _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ComputedStyleModel.js */ "./src/panels/elements/ComputedStyleModel.ts");
/* harmony import */ var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ElementsPanel.js */ "./src/panels/elements/ElementsPanel.ts");
/* harmony import */ var _ElementsSidebarPane_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ElementsSidebarPane.js */ "./src/panels/elements/ElementsSidebarPane.ts");
/* harmony import */ var _ImagePreviewPopover_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ImagePreviewPopover.js */ "./src/panels/elements/ImagePreviewPopover.ts");
/* harmony import */ var _LayersWidget_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./LayersWidget.js */ "./src/panels/elements/LayersWidget.ts");
/* harmony import */ var _StyleEditorWidget_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./StyleEditorWidget.js */ "./src/panels/elements/StyleEditorWidget.ts");
/* harmony import */ var _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./StylePropertiesSection.js */ "./src/panels/elements/StylePropertiesSection.ts");
/* harmony import */ var _StylePropertyHighlighter_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./StylePropertyHighlighter.js */ "./src/panels/elements/StylePropertyHighlighter.ts");
/* harmony import */ var _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./StylePropertyTreeElement.js */ "./src/panels/elements/StylePropertyTreeElement.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './stylesSidebarPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _WebCustomData_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./WebCustomData.js */ "./src/panels/elements/WebCustomData.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _StylesSidebarPane_instances, _StylesSidebarPane_webCustomData, _StylesSidebarPane_hintPopoverHelper, _StylesSidebarPane_genericPopoverHelper, _StylesSidebarPane_elementPopoverHooks, _StylesSidebarPane_urlToChangeTracker, _StylesSidebarPane_copyChangesButton, _StylesSidebarPane_updateAbortController, _StylesSidebarPane_updateComputedStylesAbortController, _StylesSidebarPane_innerDoUpdate, _SectionBlock_expanded, _SectionBlock_icon;
/*
 * Copyright (C) 2007 Apple Inc.  All rights reserved.
 * Copyright (C) 2009 Joseph Pecoraro
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































const UIStrings = {
    /**
     *@description No matches element text content in Styles Sidebar Pane of the Elements panel
     */
    noMatchingSelectorOrStyle: 'No matching selector or style',
    /**
    /**
     *@description Text to announce the result of the filter input in the Styles Sidebar Pane of the Elements panel
     */
    visibleSelectors: '{n, plural, =1 {# visible selector listed below} other {# visible selectors listed below}}',
    /**
     *@description Text in Styles Sidebar Pane of the Elements panel
     */
    invalidPropertyValue: 'Invalid property value',
    /**
     *@description Text in Styles Sidebar Pane of the Elements panel
     */
    unknownPropertyName: 'Unknown property name',
    /**
     *@description Separator element text content in Styles Sidebar Pane of the Elements panel
     *@example {scrollbar-corner} PH1
     */
    pseudoSElement: 'Pseudo ::{PH1} element',
    /**
     *@description Text of a DOM element in Styles Sidebar Pane of the Elements panel
     */
    inheritedFroms: 'Inherited from ',
    /**
     *@description Text of an inherited psuedo element in Styles Sidebar Pane of the Elements panel
     *@example {highlight} PH1
     */
    inheritedFromSPseudoOf: 'Inherited from ::{PH1} pseudo of ',
    /**
     *@description Title of  in styles sidebar pane of the elements panel
     *@example {Ctrl} PH1
     *@example {Alt} PH2
     */
    incrementdecrementWithMousewheelOne: 'Increment/decrement with mousewheel or up/down keys. {PH1}: R ±1, Shift: G ±1, {PH2}: B ±1',
    /**
     *@description Title of  in styles sidebar pane of the elements panel
     *@example {Ctrl} PH1
     *@example {Alt} PH2
     */
    incrementdecrementWithMousewheelHundred: 'Increment/decrement with mousewheel or up/down keys. {PH1}: ±100, Shift: ±10, {PH2}: ±0.1',
    /**
     *@description Announcement string for invalid properties.
     *@example {Invalid property value} PH1
     *@example {font-size} PH2
     *@example {invalidValue} PH3
     */
    invalidString: '{PH1}, property name: {PH2}, property value: {PH3}',
    /**
     *@description Tooltip text that appears when hovering over the rendering button in the Styles Sidebar Pane of the Elements panel
     */
    toggleRenderingEmulations: 'Toggle common rendering emulations',
    /**
     *@description Rendering emulation option for toggling the automatic dark mode
     */
    automaticDarkMode: 'Automatic dark mode',
    /**
     *@description Tooltip text that appears when hovering over the css changes button in the Styles Sidebar Pane of the Elements panel
     */
    copyAllCSSChanges: 'Copy CSS changes',
    /**
     *@description Tooltip text that appears after clicking on the copy CSS changes button
     */
    copiedToClipboard: 'Copied to clipboard',
    /**
     *@description Text displayed on layer separators in the styles sidebar pane.
     */
    layer: 'Layer',
    /**
     *@description Tooltip text for the link in the sidebar pane layer separators that reveals the layer in the layer tree view.
     */
    clickToRevealLayer: 'Click to reveal layer in layer tree',
    /**
     *@description Text displayed in tooltip that shows specificity information.
     *@example {(0,0,1)} PH1
     */
    specificity: 'Specificity: {PH1}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/elements/StylesSidebarPane.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
// Number of ms elapsed with no keypresses to determine is the input is finished, to announce results
const FILTER_IDLE_PERIOD = 500;
// Minimum number of @property rules for the @property section block to be folded initially
const MIN_FOLDED_SECTIONS_COUNT = 5;
// Title of the registered properties section
const REGISTERED_PROPERTY_SECTION_NAME = '@property';
// Highlightable properties are those that can be hovered in the sidebar to trigger a specific
// highlighting mode on the current element.
const HIGHLIGHTABLE_PROPERTIES = [
    { mode: 'padding', properties: ['padding'] },
    { mode: 'border', properties: ['border'] },
    { mode: 'margin', properties: ['margin'] },
    { mode: 'gap', properties: ['gap', 'grid-gap'] },
    { mode: 'column-gap', properties: ['column-gap', 'grid-column-gap'] },
    { mode: 'row-gap', properties: ['row-gap', 'grid-row-gap'] },
    { mode: 'grid-template-columns', properties: ['grid-template-columns'] },
    { mode: 'grid-template-rows', properties: ['grid-template-rows'] },
    { mode: 'grid-template-areas', properties: ['grid-areas'] },
    { mode: 'justify-content', properties: ['justify-content'] },
    { mode: 'align-content', properties: ['align-content'] },
    { mode: 'align-items', properties: ['align-items'] },
    { mode: 'flexibility', properties: ['flex', 'flex-basis', 'flex-grow', 'flex-shrink'] },
];
let stylesSidebarPaneInstance;
class StylesSidebarPane extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ElementsSidebarPane_js__WEBPACK_IMPORTED_MODULE_21__.ElementsSidebarPane) {
    static instance(opts) {
        if (!stylesSidebarPaneInstance || opts?.forceNew) {
            stylesSidebarPaneInstance = new StylesSidebarPane();
        }
        return stylesSidebarPaneInstance;
    }
    constructor() {
        super(true /* delegatesFocus */);
        _StylesSidebarPane_instances.add(this);
        Object.defineProperty(this, "currentToolbarPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "animatedToolbarPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pendingWidget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pendingWidgetToggle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toolbar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toolbarPaneElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lastFilterChange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "visibleSections", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "noMatchesElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sectionsContainer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sectionByElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "swatchPopoverHelperInternal", {
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
        Object.defineProperty(this, "decorator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lastRevealedProperty", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "userOperation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isEditingStyle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "filterRegexInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isActivePropertyHighlighted", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "initialUpdateCompleted", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hasMatchedStyles", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sectionBlocks", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "idleCallbackManager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "needsForceUpdate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "resizeThrottler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "scrollerElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "boundOnScroll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "imagePreviewPopover", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _StylesSidebarPane_webCustomData.set(this, void 0);
        _StylesSidebarPane_hintPopoverHelper.set(this, void 0);
        _StylesSidebarPane_genericPopoverHelper.set(this, void 0);
        _StylesSidebarPane_elementPopoverHooks.set(this, new WeakMap());
        Object.defineProperty(this, "activeCSSAngle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _StylesSidebarPane_urlToChangeTracker.set(this, new Map());
        _StylesSidebarPane_copyChangesButton.set(this, void 0);
        _StylesSidebarPane_updateAbortController.set(this, void 0);
        _StylesSidebarPane_updateComputedStylesAbortController.set(this, void 0);
        this.setMinimumSize(96, 26);
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './stylesSidebarPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').addChangeListener(this.update.bind(this));
        this.currentToolbarPane = null;
        this.animatedToolbarPane = null;
        this.pendingWidget = null;
        this.pendingWidgetToggle = null;
        this.toolbar = null;
        this.lastFilterChange = null;
        this.visibleSections = null;
        this.toolbarPaneElement = this.createStylesSidebarToolbar();
        this.computedStyleModelInternal = new _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_19__.ComputedStyleModel();
        this.noMatchesElement = this.contentElement.createChild('div', 'gray-info-message hidden');
        this.noMatchesElement.textContent = i18nString(UIStrings.noMatchingSelectorOrStyle);
        this.sectionsContainer = this.contentElement.createChild('div');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.ARIAUtils.markAsList(this.sectionsContainer);
        this.sectionsContainer.addEventListener('keydown', this.sectionsContainerKeyDown.bind(this), false);
        this.sectionsContainer.addEventListener('focusin', this.sectionsContainerFocusChanged.bind(this), false);
        this.sectionsContainer.addEventListener('focusout', this.sectionsContainerFocusChanged.bind(this), false);
        this.sectionByElement = new WeakMap();
        this.swatchPopoverHelperInternal = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_14__.SwatchPopoverHelper.SwatchPopoverHelper();
        this.swatchPopoverHelperInternal.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_14__.SwatchPopoverHelper.Events.WillShowPopover, this.hideAllPopovers, this);
        this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_15__.Linkifier.Linkifier(MAX_LINK_LENGTH, /* useLinkDecorator */ true);
        this.decorator = new _StylePropertyHighlighter_js__WEBPACK_IMPORTED_MODULE_26__.StylePropertyHighlighter(this);
        this.lastRevealedProperty = null;
        this.userOperation = false;
        this.isEditingStyle = false;
        this.filterRegexInternal = null;
        this.isActivePropertyHighlighted = false;
        this.initialUpdateCompleted = false;
        this.hasMatchedStyles = false;
        this.contentElement.classList.add('styles-pane');
        this.sectionBlocks = [];
        this.idleCallbackManager = null;
        this.needsForceUpdate = false;
        stylesSidebarPaneInstance = this;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.DOMNode, this.forceUpdate, this);
        this.contentElement.addEventListener('copy', this.clipboardCopy.bind(this));
        this.resizeThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
        this.boundOnScroll = this.onScroll.bind(this);
        this.imagePreviewPopover = new _ImagePreviewPopover_js__WEBPACK_IMPORTED_MODULE_22__.ImagePreviewPopover(this.contentElement, event => {
            const link = event.composedPath()[0];
            if (link instanceof Element) {
                return link;
            }
            return null;
        }, () => this.node());
        this.activeCSSAngle = null;
        const showDocumentationSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-css-property-documentation-on-hover');
        showDocumentationSetting.addChangeListener(event => {
            const metricType = Boolean(event.data) ? _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.CSSPropertyDocumentation.ToggledOn :
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.CSSPropertyDocumentation.ToggledOff;
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.cssPropertyDocumentation(metricType);
        });
        __classPrivateFieldSet(this, _StylesSidebarPane_hintPopoverHelper, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.PopoverHelper.PopoverHelper(this.contentElement, event => {
            const hoveredNode = event.composedPath()[0];
            // This is a workaround to fix hint popover not showing after icon update.
            // Previously our `.hint` element was an icon itself and `composedPath()[0]` was referring to it.
            // However, our `Icon` component now is an element with shadow root and `event.composedPath()[0]`
            // refers to the markup inside shadow root. Though we want a reference to the `.hint` element itself.
            // So we trace back and reach to the possible `.hint` element from inside the shadow root.
            const possibleHintNodeFromHintIcon = event.composedPath()[2];
            if (!hoveredNode || !(hoveredNode instanceof Element)) {
                return null;
            }
            if (possibleHintNodeFromHintIcon instanceof Element && possibleHintNodeFromHintIcon.matches('.hint')) {
                const hint = _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_27__.activeHints.get(possibleHintNodeFromHintIcon);
                if (hint) {
                    __classPrivateFieldGet(this, _StylesSidebarPane_hintPopoverHelper, "f").jslogContext = 'elements.css-hint';
                    return {
                        box: hoveredNode.boxInWindow(),
                        show: async (popover) => {
                            const popupElement = new _components_components_js__WEBPACK_IMPORTED_MODULE_18__.CSSHintDetailsView.CSSHintDetailsView(hint);
                            popover.contentElement.appendChild(popupElement);
                            return true;
                        },
                    };
                }
            }
            if (showDocumentationSetting.get() && hoveredNode.matches('.webkit-css-property')) {
                if (!__classPrivateFieldGet(this, _StylesSidebarPane_webCustomData, "f")) {
                    __classPrivateFieldSet(this, _StylesSidebarPane_webCustomData, _WebCustomData_js__WEBPACK_IMPORTED_MODULE_29__.WebCustomData.create(), "f");
                }
                const cssPropertyName = hoveredNode.textContent;
                const cssProperty = cssPropertyName && __classPrivateFieldGet(this, _StylesSidebarPane_webCustomData, "f").findCssProperty(cssPropertyName);
                if (cssProperty) {
                    __classPrivateFieldGet(this, _StylesSidebarPane_hintPopoverHelper, "f").jslogContext = 'elements.css-property-doc';
                    return {
                        box: hoveredNode.boxInWindow(),
                        show: async (popover) => {
                            const popupElement = new _components_components_js__WEBPACK_IMPORTED_MODULE_18__.CSSPropertyDocsView.CSSPropertyDocsView(cssProperty);
                            popover.contentElement.appendChild(popupElement);
                            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.cssPropertyDocumentation(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.CSSPropertyDocumentation.Shown);
                            return true;
                        },
                    };
                }
            }
            if (hoveredNode.matches('.simple-selector')) {
                const specificity = _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_25__.StylePropertiesSection.getSpecificityStoredForNodeElement(hoveredNode);
                __classPrivateFieldGet(this, _StylesSidebarPane_hintPopoverHelper, "f").jslogContext = 'elements.css-selector-specificity';
                return {
                    box: hoveredNode.boxInWindow(),
                    show: async (popover) => {
                        popover.setIgnoreLeftMargin(true);
                        const element = document.createElement('span');
                        element.textContent = i18nString(UIStrings.specificity, { PH1: specificity ? `(${specificity.a},${specificity.b},${specificity.c})` : '(?,?,?)' });
                        popover.contentElement.appendChild(element);
                        return true;
                    },
                };
            }
            return null;
        }), "f");
        __classPrivateFieldGet(this, _StylesSidebarPane_hintPopoverHelper, "f").setDisableOnClick(true);
        __classPrivateFieldGet(this, _StylesSidebarPane_hintPopoverHelper, "f").setTimeout(300);
        __classPrivateFieldGet(this, _StylesSidebarPane_hintPopoverHelper, "f").setHasPadding(true);
        __classPrivateFieldSet(this, _StylesSidebarPane_genericPopoverHelper, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.PopoverHelper.PopoverHelper(this.contentElement, event => {
            for (let e = event.composedPath().length - 1; e >= 0; --e) {
                const element = event.composedPath()[e];
                const hook = __classPrivateFieldGet(this, _StylesSidebarPane_elementPopoverHooks, "f").get(element);
                const contents = hook ? hook.contents() : undefined;
                if (contents) {
                    return {
                        box: element.boxInWindow(),
                        show: async (popover) => {
                            popover.setJsLog(`${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__.popover(`${hook?.jslogContext ?? 'elements.generic-sidebar-popover'}`)
                                .parent('popoverParent')}`);
                            popover.contentElement.classList.add('borderless-popover');
                            popover.contentElement.appendChild(contents);
                            return true;
                        },
                    };
                }
            }
            return null;
        }, 'elements.generic-sidebar-popover'), "f");
        __classPrivateFieldGet(this, _StylesSidebarPane_genericPopoverHelper, "f").setDisableOnClick(true);
        __classPrivateFieldGet(this, _StylesSidebarPane_genericPopoverHelper, "f").setTimeout(500, 200);
    }
    addPopover(element, popover) {
        __classPrivateFieldGet(this, _StylesSidebarPane_elementPopoverHooks, "f").set(element, popover);
    }
    onScroll(_event) {
        this.hideAllPopovers();
    }
    swatchPopoverHelper() {
        return this.swatchPopoverHelperInternal;
    }
    setUserOperation(userOperation) {
        this.userOperation = userOperation;
    }
    createExclamationMark(property, title) {
        const exclamationElement = document.createElement('span');
        exclamationElement.classList.add('exclamation-mark');
        const invalidMessage = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMetadata.cssMetadata().isCSSPropertyName(property.name) ?
            i18nString(UIStrings.invalidPropertyValue) :
            i18nString(UIStrings.unknownPropertyName);
        if (title === null) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Tooltip.Tooltip.install(exclamationElement, invalidMessage);
        }
        else {
            this.addPopover(exclamationElement, { contents: () => title });
        }
        const invalidString = i18nString(UIStrings.invalidString, { PH1: invalidMessage, PH2: property.name, PH3: property.value });
        // Storing the invalidString for future screen reader support when editing the property
        property.setDisplayedStringForInvalidProperty(invalidString);
        return exclamationElement;
    }
    static ignoreErrorsForProperty(property) {
        function hasUnknownVendorPrefix(string) {
            return !string.startsWith('-webkit-') && /^[-_][\w\d]+-\w/.test(string);
        }
        const name = property.name.toLowerCase();
        // IE hack.
        if (name.charAt(0) === '_') {
            return true;
        }
        // IE has a different format for this.
        if (name === 'filter') {
            return true;
        }
        // Common IE-specific property prefix.
        if (name.startsWith('scrollbar-')) {
            return true;
        }
        if (hasUnknownVendorPrefix(name)) {
            return true;
        }
        const value = property.value.toLowerCase();
        // IE hack.
        if (value.endsWith('\\9')) {
            return true;
        }
        if (hasUnknownVendorPrefix(value)) {
            return true;
        }
        return false;
    }
    static formatLeadingProperties(section) {
        const selectorText = section.headerText();
        const indent = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').get();
        const style = section.style();
        const lines = [];
        // Invalid property should also be copied.
        // For example: *display: inline.
        for (const property of style.leadingProperties()) {
            if (property.disabled) {
                lines.push(`${indent}/* ${property.name}: ${property.value}; */`);
            }
            else {
                lines.push(`${indent}${property.name}: ${property.value};`);
            }
        }
        const allDeclarationText = lines.join('\n');
        const ruleText = `${selectorText} {\n${allDeclarationText}\n}`;
        return {
            allDeclarationText,
            ruleText,
        };
    }
    revealProperty(cssProperty) {
        this.decorator.highlightProperty(cssProperty);
        this.lastRevealedProperty = cssProperty;
        this.update();
    }
    jumpToProperty(propertyName, sectionName, blockName) {
        return this.decorator.findAndHighlightPropertyName(propertyName, sectionName, blockName);
    }
    jumpToSection(sectionName, blockName) {
        this.decorator.findAndHighlightSection(sectionName, blockName);
    }
    jumpToSectionBlock(section) {
        this.decorator.findAndHighlightSectionBlock(section);
    }
    forceUpdate() {
        this.needsForceUpdate = true;
        this.swatchPopoverHelperInternal.hide();
        __classPrivateFieldGet(this, _StylesSidebarPane_updateAbortController, "f")?.abort();
        this.resetCache();
        this.update();
    }
    sectionsContainerKeyDown(event) {
        const activeElement = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DOMUtilities.deepActiveElement(this.sectionsContainer.ownerDocument);
        if (!activeElement) {
            return;
        }
        const section = this.sectionByElement.get(activeElement);
        if (!section) {
            return;
        }
        let sectionToFocus = null;
        let willIterateForward = false;
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowLeft': {
                sectionToFocus = section.previousSibling() || section.lastSibling();
                willIterateForward = false;
                break;
            }
            case 'ArrowDown':
            case 'ArrowRight': {
                sectionToFocus = section.nextSibling() || section.firstSibling();
                willIterateForward = true;
                break;
            }
            case 'Home': {
                sectionToFocus = section.firstSibling();
                willIterateForward = true;
                break;
            }
            case 'End': {
                sectionToFocus = section.lastSibling();
                willIterateForward = false;
                break;
            }
        }
        if (sectionToFocus && this.filterRegexInternal) {
            sectionToFocus = sectionToFocus.findCurrentOrNextVisible(/* willIterateForward= */ willIterateForward);
        }
        if (sectionToFocus) {
            sectionToFocus.element.focus();
            event.consume(true);
        }
    }
    sectionsContainerFocusChanged() {
        this.resetFocus();
    }
    resetFocus() {
        // When a styles section is focused, shift+tab should leave the section.
        // Leaving tabIndex = 0 on the first element would cause it to be focused instead.
        if (!this.noMatchesElement.classList.contains('hidden')) {
            return;
        }
        if (this.sectionBlocks[0] && this.sectionBlocks[0].sections[0]) {
            const firstVisibleSection = this.sectionBlocks[0].sections[0].findCurrentOrNextVisible(/* willIterateForward= */ true);
            if (firstVisibleSection) {
                firstVisibleSection.element.tabIndex = this.sectionsContainer.hasFocus() ? -1 : 0;
            }
        }
    }
    onAddButtonLongClick(event) {
        const cssModel = this.cssModel();
        if (!cssModel) {
            return;
        }
        const headers = cssModel.styleSheetHeaders().filter(styleSheetResourceHeader);
        const contextMenuDescriptors = [];
        for (let i = 0; i < headers.length; ++i) {
            const header = headers[i];
            const handler = this.createNewRuleInStyleSheet.bind(this, header);
            contextMenuDescriptors.push({ text: _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_7__.ResourceUtils.displayNameForURL(header.resourceURL()), handler });
        }
        contextMenuDescriptors.sort(compareDescriptors);
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.ContextMenu.ContextMenu(event);
        for (let i = 0; i < contextMenuDescriptors.length; ++i) {
            const descriptor = contextMenuDescriptors[i];
            contextMenu.defaultSection().appendItem(descriptor.text, descriptor.handler, { jslogContext: 'style-sheet-header' });
        }
        contextMenu.footerSection().appendItem('inspector-stylesheet', this.createNewRuleInViaInspectorStyleSheet.bind(this), { jslogContext: 'inspector-stylesheet' });
        void contextMenu.show();
        function compareDescriptors(descriptor1, descriptor2) {
            return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.naturalOrderComparator(descriptor1.text, descriptor2.text);
        }
        function styleSheetResourceHeader(header) {
            return !header.isViaInspector() && !header.isInline && Boolean(header.resourceURL());
        }
    }
    onFilterChanged(event) {
        const regex = event.data ? new RegExp(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.escapeForRegExp(event.data), 'i') : null;
        this.lastFilterChange = Date.now();
        this.filterRegexInternal = regex;
        this.updateFilter();
        this.resetFocus();
        setTimeout(() => {
            if (this.lastFilterChange) {
                const stillTyping = Date.now() - this.lastFilterChange < FILTER_IDLE_PERIOD;
                if (!stillTyping) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.ARIAUtils.alert(this.visibleSections ? i18nString(UIStrings.visibleSelectors, { n: this.visibleSections }) :
                        i18nString(UIStrings.noMatchingSelectorOrStyle));
                }
            }
        }, FILTER_IDLE_PERIOD);
    }
    refreshUpdate(editedSection, editedTreeElement) {
        if (editedTreeElement) {
            for (const section of this.allSections()) {
                if (section instanceof _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_25__.BlankStylePropertiesSection && section.isBlank) {
                    continue;
                }
                section.updateVarFunctions(editedTreeElement);
            }
        }
        if (this.isEditingStyle) {
            return;
        }
        const node = this.node();
        if (!node) {
            return;
        }
        for (const section of this.allSections()) {
            if (section instanceof _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_25__.BlankStylePropertiesSection && section.isBlank) {
                continue;
            }
            section.update(section === editedSection);
        }
        if (this.filterRegexInternal) {
            this.updateFilter();
        }
        this.swatchPopoverHelper().reposition();
        this.nodeStylesUpdatedForTest(node, false);
    }
    async doUpdate() {
        __classPrivateFieldGet(this, _StylesSidebarPane_updateAbortController, "f")?.abort();
        __classPrivateFieldSet(this, _StylesSidebarPane_updateAbortController, new AbortController(), "f");
        await __classPrivateFieldGet(this, _StylesSidebarPane_instances, "m", _StylesSidebarPane_innerDoUpdate).call(this, __classPrivateFieldGet(this, _StylesSidebarPane_updateAbortController, "f").signal);
        // Hide all popovers when scrolling.
        // Styles and Computed panels both have popover (e.g. imagePreviewPopover),
        // so we need to bind both scroll events.
        const scrollerElementLists = this?.contentElement?.enclosingNodeOrSelfWithClass('style-panes-wrapper')
            ?.parentElement?.querySelectorAll('.style-panes-wrapper');
        if (scrollerElementLists.length > 0) {
            for (const element of scrollerElementLists) {
                this.scrollerElement = element;
                this.scrollerElement.addEventListener('scroll', this.boundOnScroll, false);
            }
        }
    }
    async fetchComputedStylesFor(nodeId) {
        const node = this.node();
        if (node === null || nodeId === undefined) {
            return null;
        }
        return await node.domModel().cssModel().getComputedStyle(nodeId);
    }
    onResize() {
        void this.resizeThrottler.schedule(this.innerResize.bind(this));
    }
    innerResize() {
        const width = this.contentElement.getBoundingClientRect().width + 'px';
        this.allSections().forEach(section => {
            section.propertiesTreeOutline.element.style.width = width;
        });
        this.hideAllPopovers();
        return Promise.resolve();
    }
    resetCache() {
        const cssModel = this.cssModel();
        if (cssModel) {
            cssModel.discardCachedMatchedCascade();
        }
    }
    fetchMatchedCascade() {
        const node = this.node();
        if (!node || !this.cssModel()) {
            return Promise.resolve(null);
        }
        const cssModel = this.cssModel();
        if (!cssModel) {
            return Promise.resolve(null);
        }
        return cssModel.cachedMatchedCascadeForNode(node).then(validateStyles.bind(this));
        function validateStyles(matchedStyles) {
            return matchedStyles && matchedStyles.node() === this.node() ? matchedStyles : null;
        }
    }
    setEditingStyle(editing, _treeElement) {
        if (this.isEditingStyle === editing) {
            return;
        }
        this.contentElement.classList.toggle('is-editing-style', editing);
        this.isEditingStyle = editing;
        this.setActiveProperty(null);
    }
    setActiveProperty(treeElement) {
        if (this.isActivePropertyHighlighted) {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        }
        this.isActivePropertyHighlighted = false;
        if (!this.node()) {
            return;
        }
        if (!treeElement || treeElement.overloaded() || treeElement.inherited()) {
            return;
        }
        const rule = treeElement.property.ownerStyle.parentRule;
        const selectorList = (rule instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSRule.CSSStyleRule) ? rule.selectorText() : undefined;
        for (const { properties, mode } of HIGHLIGHTABLE_PROPERTIES) {
            if (!properties.includes(treeElement.name)) {
                continue;
            }
            const node = this.node();
            if (!node) {
                continue;
            }
            node.domModel().overlayModel().highlightInOverlay({ node: this.node(), selectorList }, mode);
            this.isActivePropertyHighlighted = true;
            break;
        }
    }
    onCSSModelChanged(event) {
        const edit = event?.data && 'edit' in event.data ? event.data.edit : null;
        if (edit) {
            for (const section of this.allSections()) {
                section.styleSheetEdited(edit);
            }
            void this.refreshComputedStyles();
            return;
        }
        if (this.userOperation || this.isEditingStyle) {
            void this.refreshComputedStyles();
            return;
        }
        this.resetCache();
        this.update();
    }
    async refreshComputedStyles() {
        __classPrivateFieldGet(this, _StylesSidebarPane_updateComputedStylesAbortController, "f")?.abort();
        __classPrivateFieldSet(this, _StylesSidebarPane_updateAbortController, new AbortController(), "f");
        const signal = __classPrivateFieldGet(this, _StylesSidebarPane_updateAbortController, "f").signal;
        const matchedStyles = await this.fetchMatchedCascade();
        const nodeId = this.node()?.id;
        const parentNodeId = matchedStyles?.getParentLayoutNodeId();
        const [computedStyles, parentsComputedStyles] = await Promise.all([this.fetchComputedStylesFor(nodeId), this.fetchComputedStylesFor(parentNodeId)]);
        if (signal.aborted) {
            return;
        }
        for (const section of this.allSections()) {
            section.setComputedStyles(computedStyles);
            section.setParentsComputedStyles(parentsComputedStyles);
            section.updateAuthoringHint();
        }
    }
    focusedSectionIndex() {
        let index = 0;
        for (const block of this.sectionBlocks) {
            for (const section of block.sections) {
                if (section.element.hasFocus()) {
                    return index;
                }
                index++;
            }
        }
        return -1;
    }
    continueEditingElement(sectionIndex, propertyIndex) {
        const section = this.allSections()[sectionIndex];
        if (section) {
            const element = section.closestPropertyForEditing(propertyIndex);
            if (!element) {
                section.element.focus();
                return;
            }
            element.startEditingName();
        }
    }
    async innerRebuildUpdate(signal, matchedStyles, computedStyles, parentsComputedStyles) {
        // ElementsSidebarPane's throttler schedules this method. Usually,
        // rebuild is suppressed while editing (see onCSSModelChanged()), but we need a
        // 'force' flag since the currently running throttler process cannot be canceled.
        if (this.needsForceUpdate) {
            this.needsForceUpdate = false;
        }
        else if (this.isEditingStyle || this.userOperation) {
            return;
        }
        const focusedIndex = this.focusedSectionIndex();
        this.linkifier.reset();
        const prevSections = this.sectionBlocks.map(block => block.sections).flat();
        this.sectionBlocks = [];
        const node = this.node();
        this.hasMatchedStyles = matchedStyles !== null && node !== null;
        if (!this.hasMatchedStyles) {
            this.sectionsContainer.removeChildren();
            this.noMatchesElement.classList.remove('hidden');
            return;
        }
        const blocks = await this.rebuildSectionsForMatchedStyleRules(matchedStyles, computedStyles, parentsComputedStyles);
        if (signal.aborted) {
            return;
        }
        this.sectionBlocks = blocks;
        // Style sections maybe re-created when flexbox editor is activated.
        // With the following code we re-bind the flexbox editor to the new
        // section with the same index as the previous section had.
        const newSections = this.sectionBlocks.map(block => block.sections).flat();
        const styleEditorWidget = _StyleEditorWidget_js__WEBPACK_IMPORTED_MODULE_24__.StyleEditorWidget.instance();
        const boundSection = styleEditorWidget.getSection();
        if (boundSection) {
            styleEditorWidget.unbindContext();
            for (const [index, prevSection] of prevSections.entries()) {
                if (boundSection === prevSection && index < newSections.length) {
                    styleEditorWidget.bindContext(this, newSections[index]);
                }
            }
        }
        this.sectionsContainer.removeChildren();
        const fragment = document.createDocumentFragment();
        let index = 0;
        let elementToFocus = null;
        for (const block of this.sectionBlocks) {
            const titleElement = block.titleElement();
            if (titleElement) {
                fragment.appendChild(titleElement);
            }
            for (const section of block.sections) {
                fragment.appendChild(section.element);
                if (index === focusedIndex) {
                    elementToFocus = section.element;
                }
                index++;
            }
        }
        this.sectionsContainer.appendChild(fragment);
        if (elementToFocus) {
            elementToFocus.focus();
        }
        if (focusedIndex >= index) {
            this.sectionBlocks[0].sections[0].element.focus();
        }
        this.sectionsContainerFocusChanged();
        if (this.filterRegexInternal) {
            this.updateFilter();
        }
        else {
            this.noMatchesElement.classList.toggle('hidden', this.sectionBlocks.length > 0);
        }
        if (this.lastRevealedProperty) {
            this.decorator.highlightProperty(this.lastRevealedProperty);
            this.lastRevealedProperty = null;
        }
        this.swatchPopoverHelper().reposition();
        // Record the elements tool load time after the sidepane has loaded.
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelLoaded('elements', 'DevTools.Launch.Elements');
        this.dispatchEventToListeners(Events.StylesUpdateCompleted, { hasMatchedStyles: false });
    }
    nodeStylesUpdatedForTest(_node, _rebuild) {
        // For sniffing in tests.
    }
    rebuildSectionsForMatchedStyleRulesForTest(matchedStyles, computedStyles, parentsComputedStyles) {
        return this.rebuildSectionsForMatchedStyleRules(matchedStyles, computedStyles, parentsComputedStyles);
    }
    async rebuildSectionsForMatchedStyleRules(matchedStyles, computedStyles, parentsComputedStyles) {
        if (this.idleCallbackManager) {
            this.idleCallbackManager.discard();
        }
        this.idleCallbackManager = new IdleCallbackManager();
        const blocks = [new SectionBlock(null)];
        let sectionIdx = 0;
        let lastParentNode = null;
        let lastLayers = null;
        let sawLayers = false;
        const addLayerSeparator = (style) => {
            const parentRule = style.parentRule;
            if (parentRule instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSRule.CSSStyleRule) {
                const layers = parentRule.layers;
                if ((layers.length || lastLayers) && lastLayers !== layers) {
                    const block = SectionBlock.createLayerBlock(parentRule);
                    blocks.push(block);
                    sawLayers = true;
                    lastLayers = layers;
                }
            }
        };
        // We disable the layer widget initially. If we see a layer in
        // the matched styles we reenable the button.
        _LayersWidget_js__WEBPACK_IMPORTED_MODULE_23__.ButtonProvider.instance().item().setVisible(false);
        const refreshedURLs = new Set();
        for (const style of matchedStyles.nodeStyles()) {
            if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled(_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.ExperimentName.STYLES_PANE_CSS_CHANGES) && style.parentRule) {
                const url = style.parentRule.resourceURL();
                if (url && !refreshedURLs.has(url)) {
                    await this.trackURLForChanges(url);
                    refreshedURLs.add(url);
                }
            }
            const parentNode = matchedStyles.isInherited(style) ? matchedStyles.nodeForStyle(style) : null;
            if (parentNode && parentNode !== lastParentNode) {
                lastParentNode = parentNode;
                const block = await SectionBlock.createInheritedNodeBlock(lastParentNode);
                blocks.push(block);
            }
            addLayerSeparator(style);
            const lastBlock = blocks[blocks.length - 1];
            if (lastBlock) {
                this.idleCallbackManager.schedule(() => {
                    const section = new _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_25__.StylePropertiesSection(this, matchedStyles, style, sectionIdx, computedStyles, parentsComputedStyles);
                    sectionIdx++;
                    lastBlock.sections.push(section);
                });
            }
        }
        const customHighlightPseudoRulesets = Array.from(matchedStyles.customHighlightPseudoNames()).map(highlightName => {
            return {
                'highlightName': highlightName,
                'pseudoType': _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.DOM.PseudoType.Highlight,
                'pseudoStyles': matchedStyles.customHighlightPseudoStyles(highlightName),
            };
        });
        const otherPseudoRulesets = [...matchedStyles.pseudoTypes()].map(pseudoType => {
            return { 'highlightName': null, 'pseudoType': pseudoType, 'pseudoStyles': matchedStyles.pseudoStyles(pseudoType) };
        });
        const pseudoRulesets = customHighlightPseudoRulesets.concat(otherPseudoRulesets).sort((a, b) => {
            // We want to show the ::before pseudos first, followed by the remaining pseudos
            // in alphabetical order.
            if (a.pseudoType === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.DOM.PseudoType.Before && b.pseudoType !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.DOM.PseudoType.Before) {
                return -1;
            }
            if (a.pseudoType !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.DOM.PseudoType.Before && b.pseudoType === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.DOM.PseudoType.Before) {
                return 1;
            }
            if (a.pseudoType < b.pseudoType) {
                return -1;
            }
            if (a.pseudoType > b.pseudoType) {
                return 1;
            }
            return 0;
        });
        for (const pseudo of pseudoRulesets) {
            lastParentNode = null;
            for (let i = 0; i < pseudo.pseudoStyles.length; ++i) {
                const style = pseudo.pseudoStyles[i];
                const parentNode = matchedStyles.isInherited(style) ? matchedStyles.nodeForStyle(style) : null;
                // Start a new SectionBlock if this is the first rule for this pseudo type, or if this
                // rule is inherited from a different parent than the previous rule.
                if (i === 0 || parentNode !== lastParentNode) {
                    lastLayers = null;
                    if (parentNode) {
                        const block = await SectionBlock.createInheritedPseudoTypeBlock(pseudo.pseudoType, pseudo.highlightName, parentNode);
                        blocks.push(block);
                    }
                    else {
                        const block = SectionBlock.createPseudoTypeBlock(pseudo.pseudoType, pseudo.highlightName);
                        blocks.push(block);
                    }
                }
                lastParentNode = parentNode;
                addLayerSeparator(style);
                const lastBlock = blocks[blocks.length - 1];
                this.idleCallbackManager.schedule(() => {
                    const section = new _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_25__.HighlightPseudoStylePropertiesSection(this, matchedStyles, style, sectionIdx, computedStyles, parentsComputedStyles);
                    sectionIdx++;
                    lastBlock.sections.push(section);
                });
            }
        }
        for (const keyframesRule of matchedStyles.keyframes()) {
            const block = SectionBlock.createKeyframesBlock(keyframesRule.name().text);
            for (const keyframe of keyframesRule.keyframes()) {
                this.idleCallbackManager.schedule(() => {
                    block.sections.push(new _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_25__.KeyframePropertiesSection(this, matchedStyles, keyframe.style, sectionIdx));
                    sectionIdx++;
                });
            }
            blocks.push(block);
        }
        const fontPaletteValuesRule = matchedStyles.fontPaletteValuesRule();
        if (fontPaletteValuesRule) {
            const block = SectionBlock.createFontPaletteValuesRuleBlock(fontPaletteValuesRule.name().text);
            this.idleCallbackManager.schedule(() => {
                block.sections.push(new _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_25__.FontPaletteValuesRuleSection(this, matchedStyles, fontPaletteValuesRule.style, sectionIdx));
                sectionIdx++;
            });
            blocks.push(block);
        }
        for (const positionTryRule of matchedStyles.positionTryRules()) {
            const block = SectionBlock.createPositionTryBlock(positionTryRule.name().text);
            this.idleCallbackManager.schedule(() => {
                block.sections.push(new _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_25__.PositionTryRuleSection(this, matchedStyles, positionTryRule.style, sectionIdx, positionTryRule.active()));
                sectionIdx++;
            });
            blocks.push(block);
        }
        if (matchedStyles.registeredProperties().length > 0) {
            const expandedByDefault = matchedStyles.registeredProperties().length <= MIN_FOLDED_SECTIONS_COUNT;
            const block = SectionBlock.createRegisteredPropertiesBlock(expandedByDefault);
            for (const propertyRule of matchedStyles.registeredProperties()) {
                this.idleCallbackManager.schedule(() => {
                    block.sections.push(new _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_25__.RegisteredPropertiesSection(this, matchedStyles, propertyRule.style(), sectionIdx, propertyRule.propertyName(), expandedByDefault));
                    sectionIdx++;
                });
            }
            blocks.push(block);
        }
        // If we have seen a layer in matched styles we enable
        // the layer widget button.
        if (sawLayers) {
            _LayersWidget_js__WEBPACK_IMPORTED_MODULE_23__.ButtonProvider.instance().item().setVisible(true);
        }
        else if (_LayersWidget_js__WEBPACK_IMPORTED_MODULE_23__.LayersWidget.instance().isShowing()) {
            // Since the button for toggling the layers view is now hidden
            // we ensure that the layers view is not currently toggled.
            _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_20__.ElementsPanel.instance().showToolbarPane(null, _LayersWidget_js__WEBPACK_IMPORTED_MODULE_23__.ButtonProvider.instance().item());
        }
        await this.idleCallbackManager.awaitDone();
        return blocks;
    }
    async createNewRuleInViaInspectorStyleSheet() {
        const cssModel = this.cssModel();
        const node = this.node();
        if (!cssModel || !node) {
            return;
        }
        this.setUserOperation(true);
        const styleSheetHeader = await cssModel.requestViaInspectorStylesheet(node);
        this.setUserOperation(false);
        await this.createNewRuleInStyleSheet(styleSheetHeader);
    }
    async createNewRuleInStyleSheet(styleSheetHeader) {
        if (!styleSheetHeader) {
            return;
        }
        const text = (await styleSheetHeader.requestContent()).content || '';
        const lines = text.split('\n');
        const range = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_8__.TextRange.TextRange.createFromLocation(lines.length - 1, lines[lines.length - 1].length);
        if (this.sectionBlocks && this.sectionBlocks.length > 0) {
            this.addBlankSection(this.sectionBlocks[0].sections[0], styleSheetHeader.id, range);
        }
    }
    addBlankSection(insertAfterSection, styleSheetId, ruleLocation) {
        const node = this.node();
        const blankSection = new _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_25__.BlankStylePropertiesSection(this, insertAfterSection.matchedStyles, node ? node.simpleSelector() : '', styleSheetId, ruleLocation, insertAfterSection.style(), 0);
        this.sectionsContainer.insertBefore(blankSection.element, insertAfterSection.element.nextSibling);
        for (const block of this.sectionBlocks) {
            const index = block.sections.indexOf(insertAfterSection);
            if (index === -1) {
                continue;
            }
            block.sections.splice(index + 1, 0, blankSection);
            blankSection.startEditingSelector();
        }
        let sectionIdx = 0;
        for (const block of this.sectionBlocks) {
            for (const section of block.sections) {
                section.setSectionIdx(sectionIdx);
                sectionIdx++;
            }
        }
    }
    removeSection(section) {
        for (const block of this.sectionBlocks) {
            const index = block.sections.indexOf(section);
            if (index === -1) {
                continue;
            }
            block.sections.splice(index, 1);
            section.element.remove();
        }
    }
    filterRegex() {
        return this.filterRegexInternal;
    }
    updateFilter() {
        let hasAnyVisibleBlock = false;
        let visibleSections = 0;
        for (const block of this.sectionBlocks) {
            visibleSections += block.updateFilter();
            hasAnyVisibleBlock = Boolean(visibleSections) || hasAnyVisibleBlock;
        }
        this.noMatchesElement.classList.toggle('hidden', Boolean(hasAnyVisibleBlock));
        this.visibleSections = visibleSections;
    }
    wasShown() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Context.Context.instance().setFlavor(StylesSidebarPane, this);
        super.wasShown();
    }
    willHide() {
        this.hideAllPopovers();
        super.willHide();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Context.Context.instance().setFlavor(StylesSidebarPane, null);
    }
    hideAllPopovers() {
        this.swatchPopoverHelperInternal.hide();
        this.imagePreviewPopover.hide();
        if (this.activeCSSAngle) {
            this.activeCSSAngle.minify();
            this.activeCSSAngle = null;
        }
        __classPrivateFieldGet(this, _StylesSidebarPane_hintPopoverHelper, "f")?.hidePopover();
        __classPrivateFieldGet(this, _StylesSidebarPane_genericPopoverHelper, "f")?.hidePopover();
    }
    getSectionBlockByName(name) {
        return this.sectionBlocks.find(block => block.titleElement()?.textContent === name);
    }
    allSections() {
        let sections = [];
        for (const block of this.sectionBlocks) {
            sections = sections.concat(block.sections);
        }
        return sections;
    }
    async trackURLForChanges(url) {
        const currentTracker = __classPrivateFieldGet(this, _StylesSidebarPane_urlToChangeTracker, "f").get(url);
        if (currentTracker) {
            _models_workspace_diff_workspace_diff_js__WEBPACK_IMPORTED_MODULE_10__.WorkspaceDiff.workspaceDiff().unsubscribeFromDiffChange(currentTracker.uiSourceCode, currentTracker.diffChangeCallback);
        }
        // We get a refreshed uiSourceCode each time because the underlying instance may be recreated.
        const uiSourceCode = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.Workspace.WorkspaceImpl.instance().uiSourceCodeForURL(url);
        if (!uiSourceCode) {
            return;
        }
        const diffChangeCallback = this.refreshChangedLines.bind(this, uiSourceCode);
        _models_workspace_diff_workspace_diff_js__WEBPACK_IMPORTED_MODULE_10__.WorkspaceDiff.workspaceDiff().subscribeToDiffChange(uiSourceCode, diffChangeCallback);
        const newTracker = {
            uiSourceCode,
            changedLines: new Set(),
            diffChangeCallback,
        };
        __classPrivateFieldGet(this, _StylesSidebarPane_urlToChangeTracker, "f").set(url, newTracker);
        await this.refreshChangedLines(newTracker.uiSourceCode);
    }
    isPropertyChanged(property) {
        const url = property.ownerStyle.parentRule?.resourceURL();
        if (!url) {
            return false;
        }
        const changeTracker = __classPrivateFieldGet(this, _StylesSidebarPane_urlToChangeTracker, "f").get(url);
        if (!changeTracker) {
            return false;
        }
        const { changedLines, formattedCurrentMapping } = changeTracker;
        const uiLocation = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_7__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().propertyUILocation(property, true);
        if (!uiLocation) {
            return false;
        }
        if (!formattedCurrentMapping) {
            // UILocation's lineNumber starts at 0, but changedLines start at 1.
            return changedLines.has(uiLocation.lineNumber + 1);
        }
        const formattedLineNumber = formattedCurrentMapping.originalToFormatted(uiLocation.lineNumber, uiLocation.columnNumber)[0];
        return changedLines.has(formattedLineNumber + 1);
    }
    updateChangeStatus() {
        if (!__classPrivateFieldGet(this, _StylesSidebarPane_copyChangesButton, "f")) {
            return;
        }
        let hasChangedStyles = false;
        for (const changeTracker of __classPrivateFieldGet(this, _StylesSidebarPane_urlToChangeTracker, "f").values()) {
            if (changeTracker.changedLines.size > 0) {
                hasChangedStyles = true;
                break;
            }
        }
        __classPrivateFieldGet(this, _StylesSidebarPane_copyChangesButton, "f").element.classList.toggle('hidden', !hasChangedStyles);
    }
    async refreshChangedLines(uiSourceCode) {
        const changeTracker = __classPrivateFieldGet(this, _StylesSidebarPane_urlToChangeTracker, "f").get(uiSourceCode.url());
        if (!changeTracker) {
            return;
        }
        const diffResponse = await _models_workspace_diff_workspace_diff_js__WEBPACK_IMPORTED_MODULE_10__.WorkspaceDiff.workspaceDiff().requestDiff(uiSourceCode, { shouldFormatDiff: true });
        const changedLines = new Set();
        changeTracker.changedLines = changedLines;
        if (!diffResponse) {
            return;
        }
        const { diff, formattedCurrentMapping } = diffResponse;
        const { rows } = _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_12__.DiffView.buildDiffRows(diff);
        for (const row of rows) {
            if (row.type === _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_12__.DiffView.RowType.Addition) {
                changedLines.add(row.currentLineNumber);
            }
        }
        changeTracker.formattedCurrentMapping = formattedCurrentMapping;
    }
    async getFormattedChanges() {
        let allChanges = '';
        for (const [url, { uiSourceCode }] of __classPrivateFieldGet(this, _StylesSidebarPane_urlToChangeTracker, "f")) {
            const diffResponse = await _models_workspace_diff_workspace_diff_js__WEBPACK_IMPORTED_MODULE_10__.WorkspaceDiff.workspaceDiff().requestDiff(uiSourceCode, { shouldFormatDiff: true });
            // Diff array with real diff will contain at least 2 lines.
            if (!diffResponse || diffResponse?.diff.length < 2) {
                continue;
            }
            const changes = await _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.PanelUtils.formatCSSChangesFromDiff(diffResponse.diff);
            if (changes.length > 0) {
                allChanges += `/* ${escapeUrlAsCssComment(url)} */\n\n${changes}\n\n`;
            }
        }
        return allChanges;
    }
    clipboardCopy(_event) {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.StyleRuleCopied);
    }
    createStylesSidebarToolbar() {
        const container = this.contentElement.createChild('div', 'styles-sidebar-pane-toolbar-container');
        const hbox = container.createChild('div', 'hbox styles-sidebar-pane-toolbar');
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Toolbar.Toolbar('styles-pane-toolbar', hbox);
        const filterInput = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Toolbar.ToolbarFilter(undefined, 1, 1, undefined, undefined, false);
        filterInput.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Toolbar.ToolbarInput.Event.TextChanged, this.onFilterChanged, this);
        toolbar.appendToolbarItem(filterInput);
        void toolbar.appendItemsAtLocation('styles-sidebarpane-toolbar');
        this.toolbar = toolbar;
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.ActionRegistry.ActionRegistry.instance().hasAction('freestyler.style-tab-context')) {
            toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Toolbar.Toolbar.createActionButtonForId('freestyler.style-tab-context'));
        }
        const toolbarPaneContainer = container.createChild('div', 'styles-sidebar-toolbar-pane-container');
        const toolbarPaneContent = toolbarPaneContainer.createChild('div', 'styles-sidebar-toolbar-pane');
        return toolbarPaneContent;
    }
    showToolbarPane(widget, toggle) {
        if (this.pendingWidgetToggle) {
            this.pendingWidgetToggle.setToggled(false);
        }
        this.pendingWidgetToggle = toggle;
        if (this.animatedToolbarPane) {
            this.pendingWidget = widget;
        }
        else {
            this.startToolbarPaneAnimation(widget);
        }
        if (widget && toggle) {
            toggle.setToggled(true);
        }
    }
    appendToolbarItem(item) {
        if (this.toolbar) {
            this.toolbar.appendToolbarItem(item);
        }
    }
    startToolbarPaneAnimation(widget) {
        if (widget === this.currentToolbarPane) {
            return;
        }
        if (widget && this.currentToolbarPane) {
            this.currentToolbarPane.detach();
            widget.show(this.toolbarPaneElement);
            this.currentToolbarPane = widget;
            this.currentToolbarPane.focus();
            return;
        }
        this.animatedToolbarPane = widget;
        if (this.currentToolbarPane) {
            this.toolbarPaneElement.style.animationName = 'styles-element-state-pane-slideout';
        }
        else if (widget) {
            this.toolbarPaneElement.style.animationName = 'styles-element-state-pane-slidein';
        }
        if (widget) {
            widget.show(this.toolbarPaneElement);
        }
        const listener = onAnimationEnd.bind(this);
        this.toolbarPaneElement.addEventListener('animationend', listener, false);
        function onAnimationEnd() {
            this.toolbarPaneElement.style.removeProperty('animation-name');
            this.toolbarPaneElement.removeEventListener('animationend', listener, false);
            if (this.currentToolbarPane) {
                this.currentToolbarPane.detach();
            }
            this.currentToolbarPane = this.animatedToolbarPane;
            if (this.currentToolbarPane) {
                this.currentToolbarPane.focus();
            }
            this.animatedToolbarPane = null;
            if (this.pendingWidget) {
                this.startToolbarPaneAnimation(this.pendingWidget);
                this.pendingWidget = null;
            }
        }
    }
    createRenderingShortcuts() {
        const prefersColorSchemeSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulated-css-media-feature-prefers-color-scheme');
        const autoDarkModeSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulate-auto-dark-mode');
        const decorateStatus = (condition, title) => `${condition ? '✓ ' : ''}${title}`;
        const button = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Toolbar.ToolbarToggle(i18nString(UIStrings.toggleRenderingEmulations), 'brush', 'brush-filled', undefined, false);
        button.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__.dropDown('rendering-emulations').track({ click: true })}`);
        button.element.addEventListener('click', event => {
            const boundingRect = button.element.getBoundingClientRect();
            const menu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.ContextMenu.ContextMenu(event, {
                x: boundingRect.left,
                y: boundingRect.bottom,
            });
            const preferredColorScheme = prefersColorSchemeSetting.get();
            const isLightColorScheme = preferredColorScheme === 'light';
            const isDarkColorScheme = preferredColorScheme === 'dark';
            const isAutoDarkEnabled = autoDarkModeSetting.get();
            const lightColorSchemeOption = decorateStatus(isLightColorScheme, 'prefers-color-scheme: light');
            const darkColorSchemeOption = decorateStatus(isDarkColorScheme, 'prefers-color-scheme: dark');
            const autoDarkModeOption = decorateStatus(isAutoDarkEnabled, i18nString(UIStrings.automaticDarkMode));
            menu.defaultSection().appendItem(lightColorSchemeOption, () => {
                autoDarkModeSetting.set(false);
                prefersColorSchemeSetting.set(isLightColorScheme ? '' : 'light');
                button.setToggled(Boolean(prefersColorSchemeSetting.get()));
            }, { jslogContext: 'prefer-light-color-scheme' });
            menu.defaultSection().appendItem(darkColorSchemeOption, () => {
                autoDarkModeSetting.set(false);
                prefersColorSchemeSetting.set(isDarkColorScheme ? '' : 'dark');
                button.setToggled(Boolean(prefersColorSchemeSetting.get()));
            }, { jslogContext: 'prefer-dark-color-scheme' });
            menu.defaultSection().appendItem(autoDarkModeOption, () => {
                autoDarkModeSetting.set(!isAutoDarkEnabled);
                button.setToggled(Boolean(prefersColorSchemeSetting.get()));
            }, { jslogContext: 'emulate-auto-dark-mode' });
            void menu.show();
            event.stopPropagation();
        }, { capture: true });
        return button;
    }
    createCopyAllChangesButton() {
        const copyAllChangesButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Toolbar.ToolbarButton(i18nString(UIStrings.copyAllCSSChanges), 'copy');
        // TODO(1296947): implement a dedicated component to share between all copy buttons
        copyAllChangesButton.element.setAttribute('data-content', i18nString(UIStrings.copiedToClipboard));
        let timeout;
        copyAllChangesButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Toolbar.ToolbarButton.Events.Click, async () => {
            const allChanges = await this.getFormattedChanges();
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(allChanges);
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.styleTextCopied(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.StyleTextCopied.AllChangesViaStylesPane);
            if (timeout) {
                clearTimeout(timeout);
                timeout = undefined;
            }
            copyAllChangesButton.element.classList.add('copied-to-clipboard');
            timeout = window.setTimeout(() => {
                copyAllChangesButton.element.classList.remove('copied-to-clipboard');
                timeout = undefined;
            }, 2000);
        });
        return copyAllChangesButton;
    }
}
_StylesSidebarPane_webCustomData = new WeakMap(), _StylesSidebarPane_hintPopoverHelper = new WeakMap(), _StylesSidebarPane_genericPopoverHelper = new WeakMap(), _StylesSidebarPane_elementPopoverHooks = new WeakMap(), _StylesSidebarPane_urlToChangeTracker = new WeakMap(), _StylesSidebarPane_copyChangesButton = new WeakMap(), _StylesSidebarPane_updateAbortController = new WeakMap(), _StylesSidebarPane_updateComputedStylesAbortController = new WeakMap(), _StylesSidebarPane_instances = new WeakSet(), _StylesSidebarPane_innerDoUpdate = async function _StylesSidebarPane_innerDoUpdate(signal) {
    if (!this.initialUpdateCompleted) {
        window.setTimeout(() => {
            if (signal.aborted) {
                return;
            }
            if (!this.initialUpdateCompleted) {
                // the spinner will get automatically removed when innerRebuildUpdate is called
                this.sectionsContainer.createChild('span', 'spinner');
            }
        }, 200 /* only spin for loading time > 200ms to avoid unpleasant render flashes */);
    }
    const matchedStyles = await this.fetchMatchedCascade();
    if (signal.aborted) {
        return;
    }
    const nodeId = this.node()?.id;
    const parentNodeId = matchedStyles?.getParentLayoutNodeId();
    const [computedStyles, parentsComputedStyles] = await Promise.all([this.fetchComputedStylesFor(nodeId), this.fetchComputedStylesFor(parentNodeId)]);
    if (signal.aborted) {
        return;
    }
    await this.innerRebuildUpdate(signal, matchedStyles, computedStyles, parentsComputedStyles);
    if (signal.aborted) {
        return;
    }
    if (!this.initialUpdateCompleted) {
        this.initialUpdateCompleted = true;
        this.appendToolbarItem(this.createRenderingShortcuts());
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled(_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.ExperimentName.STYLES_PANE_CSS_CHANGES)) {
            __classPrivateFieldSet(this, _StylesSidebarPane_copyChangesButton, this.createCopyAllChangesButton(), "f");
            this.appendToolbarItem(__classPrivateFieldGet(this, _StylesSidebarPane_copyChangesButton, "f"));
            __classPrivateFieldGet(this, _StylesSidebarPane_copyChangesButton, "f").element.classList.add('hidden');
        }
        this.dispatchEventToListeners(Events.InitialUpdateCompleted);
    }
    this.nodeStylesUpdatedForTest(this.node(), true);
    this.dispatchEventToListeners(Events.StylesUpdateCompleted, { hasMatchedStyles: this.hasMatchedStyles });
};
var Events;
(function (Events) {
    Events["InitialUpdateCompleted"] = "InitialUpdateCompleted";
    Events["StylesUpdateCompleted"] = "StylesUpdateCompleted";
})(Events || (Events = {}));
const MAX_LINK_LENGTH = 23;
class SectionBlock {
    constructor(titleElement, expandable, expandedByDefault) {
        Object.defineProperty(this, "titleElementInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sections", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _SectionBlock_expanded.set(this, false);
        _SectionBlock_icon.set(this, void 0);
        this.titleElementInternal = titleElement;
        this.sections = [];
        __classPrivateFieldSet(this, _SectionBlock_expanded, expandedByDefault ?? false, "f");
        if (expandable && titleElement instanceof HTMLElement) {
            __classPrivateFieldSet(this, _SectionBlock_icon, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_13__.Icon.create(__classPrivateFieldGet(this, _SectionBlock_expanded, "f") ? 'triangle-down' : 'triangle-right', 'section-block-expand-icon'), "f");
            titleElement.classList.toggle('empty-section', !__classPrivateFieldGet(this, _SectionBlock_expanded, "f"));
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.ARIAUtils.setExpanded(titleElement, __classPrivateFieldGet(this, _SectionBlock_expanded, "f"));
            titleElement.appendChild(__classPrivateFieldGet(this, _SectionBlock_icon, "f"));
            // Intercept focus to avoid highlight on click.
            titleElement.tabIndex = -1;
            titleElement.addEventListener('click', () => this.expand(!__classPrivateFieldGet(this, _SectionBlock_expanded, "f")), false);
        }
    }
    expand(expand) {
        if (!this.titleElementInternal || !__classPrivateFieldGet(this, _SectionBlock_icon, "f")) {
            return;
        }
        this.titleElementInternal.classList.toggle('empty-section', !expand);
        __classPrivateFieldGet(this, _SectionBlock_icon, "f").name = expand ? 'triangle-down' : 'triangle-right';
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.ARIAUtils.setExpanded(this.titleElementInternal, expand);
        __classPrivateFieldSet(this, _SectionBlock_expanded, expand, "f");
        this.sections.forEach(section => section.element.classList.toggle('hidden', !expand));
    }
    static createPseudoTypeBlock(pseudoType, pseudoArgument) {
        const separatorElement = document.createElement('div');
        separatorElement.className = 'sidebar-separator';
        separatorElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__.sectionHeader('pseudotype')}`);
        const pseudoArgumentString = pseudoArgument ? `(${pseudoArgument})` : '';
        const pseudoTypeString = `${pseudoType}${pseudoArgumentString}`;
        separatorElement.textContent = i18nString(UIStrings.pseudoSElement, { PH1: pseudoTypeString });
        return new SectionBlock(separatorElement);
    }
    static async createInheritedPseudoTypeBlock(pseudoType, pseudoArgument, node) {
        const separatorElement = document.createElement('div');
        separatorElement.className = 'sidebar-separator';
        separatorElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__.sectionHeader('inherited-pseudotype')}`);
        const pseudoArgumentString = pseudoArgument ? `(${pseudoArgument})` : '';
        const pseudoTypeString = `${pseudoType}${pseudoArgumentString}`;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.UIUtils.createTextChild(separatorElement, i18nString(UIStrings.inheritedFromSPseudoOf, { PH1: pseudoTypeString }));
        const link = await _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(node, {
            preventKeyboardFocus: true,
            tooltip: undefined,
        });
        separatorElement.appendChild(link);
        return new SectionBlock(separatorElement);
    }
    static createRegisteredPropertiesBlock(expandedByDefault) {
        const separatorElement = document.createElement('div');
        const block = new SectionBlock(separatorElement, true, expandedByDefault);
        separatorElement.className = 'sidebar-separator';
        separatorElement.appendChild(document.createTextNode(REGISTERED_PROPERTY_SECTION_NAME));
        return block;
    }
    static createKeyframesBlock(keyframesName) {
        const separatorElement = document.createElement('div');
        separatorElement.className = 'sidebar-separator';
        separatorElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__.sectionHeader('keyframes')}`);
        separatorElement.textContent = `@keyframes ${keyframesName}`;
        return new SectionBlock(separatorElement);
    }
    static createFontPaletteValuesRuleBlock(name) {
        const separatorElement = document.createElement('div');
        separatorElement.className = 'sidebar-separator';
        separatorElement.textContent = `@font-palette-values ${name}`;
        return new SectionBlock(separatorElement);
    }
    static createPositionTryBlock(positionTryName) {
        const separatorElement = document.createElement('div');
        separatorElement.className = 'sidebar-separator';
        separatorElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__.sectionHeader('position-try')}`);
        separatorElement.textContent = `@position-try ${positionTryName}`;
        return new SectionBlock(separatorElement);
    }
    static async createInheritedNodeBlock(node) {
        const separatorElement = document.createElement('div');
        separatorElement.className = 'sidebar-separator';
        separatorElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__.sectionHeader('inherited')}`);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.UIUtils.createTextChild(separatorElement, i18nString(UIStrings.inheritedFroms));
        const link = await _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(node, {
            preventKeyboardFocus: true,
            tooltip: undefined,
        });
        separatorElement.appendChild(link);
        return new SectionBlock(separatorElement);
    }
    static createLayerBlock(rule) {
        const separatorElement = document.createElement('div');
        separatorElement.className = 'sidebar-separator layer-separator';
        separatorElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__.sectionHeader('layer')}`);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.UIUtils.createTextChild(separatorElement.createChild('div'), i18nString(UIStrings.layer));
        const layers = rule.layers;
        if (!layers.length && rule.origin === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.CSS.StyleSheetOrigin.UserAgent) {
            const name = rule.origin === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.CSS.StyleSheetOrigin.UserAgent ? '\xa0user\xa0agent\xa0stylesheet' :
                '\xa0implicit\xa0outer\xa0layer';
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.UIUtils.createTextChild(separatorElement.createChild('div'), name);
            return new SectionBlock(separatorElement);
        }
        const layerLink = separatorElement.createChild('button');
        layerLink.className = 'link';
        layerLink.title = i18nString(UIStrings.clickToRevealLayer);
        const name = layers.map(layer => _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSModel.CSSModel.readableLayerName(layer.text)).join('.');
        layerLink.textContent = name;
        layerLink.onclick = () => _LayersWidget_js__WEBPACK_IMPORTED_MODULE_23__.LayersWidget.instance().revealLayer(name);
        return new SectionBlock(separatorElement);
    }
    updateFilter() {
        let hasAnyVisibleSection = false;
        let numVisibleSections = 0;
        for (const section of this.sections) {
            numVisibleSections += section.updateFilter() ? 1 : 0;
            hasAnyVisibleSection = section.updateFilter() || hasAnyVisibleSection;
        }
        if (this.titleElementInternal) {
            this.titleElementInternal.classList.toggle('hidden', !hasAnyVisibleSection);
        }
        return numVisibleSections;
    }
    titleElement() {
        return this.titleElementInternal;
    }
}
_SectionBlock_expanded = new WeakMap(), _SectionBlock_icon = new WeakMap();
class IdleCallbackManager {
    constructor() {
        Object.defineProperty(this, "discarded", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "promises", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "queue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.discarded = false;
        this.promises = [];
        this.queue = [];
    }
    discard() {
        this.discarded = true;
    }
    schedule(fn) {
        if (this.discarded) {
            return;
        }
        const promise = new Promise((resolve, reject) => {
            this.queue.push({ fn, resolve, reject });
        });
        this.promises.push(promise);
        this.scheduleIdleCallback(/* timeout=*/ 100);
    }
    scheduleIdleCallback(timeout) {
        window.requestIdleCallback(() => {
            const next = this.queue.shift();
            (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.assertNotNullOrUndefined)(next);
            try {
                if (!this.discarded) {
                    next.fn();
                }
                next.resolve();
            }
            catch (err) {
                next.reject(err);
            }
        }, { timeout });
    }
    awaitDone() {
        return Promise.all(this.promises);
    }
}
function quoteFamilyName(familyName) {
    return `'${familyName.replaceAll('\'', '\\\'')}'`;
}
class CSSPropertyPrompt extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.TextPrompt.TextPrompt {
    constructor(treeElement, isEditingName) {
        // Use the same callback both for applyItemCallback and acceptItemCallback.
        super();
        Object.defineProperty(this, "isColorAware", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cssCompletions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectedNodeComputedStyles", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "parentNodeComputedStyles", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "treeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isEditingName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cssVariables", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.initialize(this.buildPropertyCompletions.bind(this), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.UIUtils.StyleValueDelimiters);
        const cssMetadata = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMetadata.cssMetadata();
        this.isColorAware = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMetadata.cssMetadata().isColorAwareProperty(treeElement.property.name);
        this.cssCompletions = [];
        const node = treeElement.node();
        if (isEditingName) {
            this.cssCompletions = cssMetadata.allProperties();
            if (node && !node.isSVGNode()) {
                this.cssCompletions = this.cssCompletions.filter(property => !cssMetadata.isSVGProperty(property));
            }
        }
        else {
            this.cssCompletions = cssMetadata.getPropertyValues(treeElement.property.name);
            if (node && cssMetadata.isFontFamilyProperty(treeElement.property.name)) {
                const fontFamilies = node.domModel().cssModel().fontFaces().map(font => quoteFamilyName(font.getFontFamily()));
                this.cssCompletions.unshift(...fontFamilies);
            }
        }
        /**
         * Computed styles cache populated for flexbox features.
         */
        this.selectedNodeComputedStyles = null;
        /**
         * Computed styles cache populated for flexbox features.
         */
        this.parentNodeComputedStyles = null;
        this.treeElement = treeElement;
        this.isEditingName = isEditingName;
        this.cssVariables = treeElement.matchedStyles().availableCSSVariables(treeElement.property.ownerStyle);
        if (this.cssVariables.length < 1000) {
            this.cssVariables.sort(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.naturalOrderComparator);
        }
        else {
            this.cssVariables.sort();
        }
        if (!isEditingName) {
            this.disableDefaultSuggestionForEmptyInput();
            // If a CSS value is being edited that has a numeric or hex substring, hint that precision modifier shortcuts are available.
            if (treeElement && treeElement.valueElement) {
                const cssValueText = treeElement.valueElement.textContent;
                const cmdOrCtrl = _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.isMac() ? 'Cmd' : 'Ctrl';
                const optionOrAlt = _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.isMac() ? 'Option' : 'Alt';
                if (cssValueText !== null) {
                    if (cssValueText.match(/#[\da-f]{3,6}$/i)) {
                        this.setTitle(i18nString(UIStrings.incrementdecrementWithMousewheelOne, { PH1: cmdOrCtrl, PH2: optionOrAlt }));
                    }
                    else if (cssValueText.match(/\d+/)) {
                        this.setTitle(i18nString(UIStrings.incrementdecrementWithMousewheelHundred, { PH1: cmdOrCtrl, PH2: optionOrAlt }));
                    }
                }
            }
        }
    }
    onKeyDown(event) {
        const keyboardEvent = event;
        switch (keyboardEvent.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case 'PageUp':
            case 'PageDown':
                if (!this.isSuggestBoxVisible() && this.handleNameOrValueUpDown(keyboardEvent)) {
                    keyboardEvent.preventDefault();
                    return;
                }
                break;
            case 'Enter':
                if (keyboardEvent.shiftKey) {
                    return;
                }
                // Accept any available autocompletions and advance to the next field.
                this.tabKeyPressed();
                keyboardEvent.preventDefault();
                return;
            case ' ':
                if (this.isEditingName) {
                    // Since property names cannot contain a space
                    // we accept available autocompletions for property name when the user presses space.
                    this.tabKeyPressed();
                    keyboardEvent.preventDefault();
                    return;
                }
        }
        super.onKeyDown(keyboardEvent);
    }
    onMouseWheel(event) {
        if (this.handleNameOrValueUpDown(event)) {
            event.consume(true);
            return;
        }
        super.onMouseWheel(event);
    }
    tabKeyPressed() {
        this.acceptAutoComplete();
        // Always tab to the next field.
        return false;
    }
    handleNameOrValueUpDown(event) {
        function finishHandler(_originalValue, _replacementString) {
            // Synthesize property text disregarding any comments, custom whitespace etc.
            if (this.treeElement.nameElement && this.treeElement.valueElement) {
                void this.treeElement.applyStyleText(this.treeElement.nameElement.textContent + ': ' + this.treeElement.valueElement.textContent, false);
            }
        }
        function customNumberHandler(prefix, number, suffix) {
            if (number !== 0 && !suffix.length &&
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMetadata.cssMetadata().isLengthProperty(this.treeElement.property.name) &&
                !this.treeElement.property.value.toLowerCase().startsWith('calc(')) {
                suffix = 'px';
            }
            return prefix + number + suffix;
        }
        // Handle numeric value increment/decrement only at this point.
        if (!this.isEditingName && this.treeElement.valueElement &&
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.UIUtils.handleElementValueModifications(event, this.treeElement.valueElement, finishHandler.bind(this), this.isValueSuggestion.bind(this), customNumberHandler.bind(this))) {
            return true;
        }
        return false;
    }
    isValueSuggestion(word) {
        if (!word) {
            return false;
        }
        word = word.toLowerCase();
        return this.cssCompletions.indexOf(word) !== -1 || word.startsWith('--');
    }
    async buildPropertyCompletions(expression, query, force) {
        const lowerQuery = query.toLowerCase();
        const editingVariable = !this.isEditingName && expression.trim().endsWith('var(');
        if (!query && !force && !editingVariable && (this.isEditingName || expression)) {
            return Promise.resolve([]);
        }
        const prefixResults = [];
        const anywhereResults = [];
        if (!editingVariable) {
            this.cssCompletions.forEach(completion => filterCompletions.call(this, completion, false /* variable */));
            // When and only when editing property names, we also include aliases for autocomplete.
            if (this.isEditingName) {
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMetadata.cssMetadata().aliasesFor().forEach((canonicalProperty, alias) => {
                    const index = alias.toLowerCase().indexOf(lowerQuery);
                    if (index !== 0) {
                        return;
                    }
                    const aliasResult = {
                        text: alias,
                        priority: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMetadata.cssMetadata().propertyUsageWeight(alias),
                        isCSSVariableColor: false,
                    };
                    const canonicalPropertyResult = {
                        text: canonicalProperty,
                        priority: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMetadata.cssMetadata().propertyUsageWeight(canonicalProperty),
                        subtitle: `= ${alias}`, // This explains why this canonicalProperty is prompted.
                        isCSSVariableColor: false,
                    };
                    // We add aliasResult *before* the canonicalProperty one because we want to prompt
                    // the alias one first, since it corresponds to what the user has typed.
                    prefixResults.push(aliasResult, canonicalPropertyResult);
                });
            }
        }
        const node = this.treeElement.node();
        if (this.isEditingName && node) {
            const nameValuePresets = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMetadata.cssMetadata().nameValuePresets(node.isSVGNode());
            nameValuePresets.forEach(preset => filterCompletions.call(this, preset, false /* variable */, true /* nameValue */));
        }
        if (this.isEditingName || editingVariable) {
            this.cssVariables.forEach(variable => filterCompletions.call(this, variable, true /* variable */));
        }
        const results = prefixResults.concat(anywhereResults);
        if (!this.isEditingName && !results.length && query.length > 1 && '!important'.startsWith(lowerQuery)) {
            results.push({
                text: '!important',
                title: undefined,
                subtitle: undefined,
                priority: undefined,
                isSecondary: undefined,
                subtitleRenderer: undefined,
                selectionRange: undefined,
                hideGhostText: undefined,
                iconElement: undefined,
            });
        }
        const userEnteredText = query.replace('-', '');
        if (userEnteredText && (userEnteredText === userEnteredText.toUpperCase())) {
            for (let i = 0; i < results.length; ++i) {
                if (!results[i].text.startsWith('--')) {
                    results[i].text = results[i].text.toUpperCase();
                }
            }
        }
        for (const result of results) {
            if (editingVariable) {
                result.title = result.text;
                result.text += ')';
                continue;
            }
            const valuePreset = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMetadata.cssMetadata().getValuePreset(this.treeElement.name, result.text);
            if (!this.isEditingName && valuePreset) {
                result.title = result.text;
                result.text = valuePreset.text;
                result.selectionRange = { startColumn: valuePreset.startColumn, endColumn: valuePreset.endColumn };
            }
        }
        const ensureComputedStyles = async () => {
            if (!node || this.selectedNodeComputedStyles) {
                return;
            }
            this.selectedNodeComputedStyles = await node.domModel().cssModel().getComputedStyle(node.id);
            const parentNode = node.parentNode;
            if (parentNode) {
                this.parentNodeComputedStyles = await parentNode.domModel().cssModel().getComputedStyle(parentNode.id);
            }
        };
        for (const result of results) {
            await ensureComputedStyles();
            // Using parent node's computed styles does not work in all cases. For example:
            //
            // <div id="container" style="display: flex;">
            //  <div id="useless" style="display: contents;">
            //    <div id="item">item</div>
            //  </div>
            // </div>
            // TODO(crbug/1139945): Find a better way to get the flex container styles.
            const iconInfo = _components_components_js__WEBPACK_IMPORTED_MODULE_18__.CSSPropertyIconResolver.findIcon(this.isEditingName ? result.text : `${this.treeElement.property.name}: ${result.text}`, this.selectedNodeComputedStyles, this.parentNodeComputedStyles);
            if (!iconInfo) {
                continue;
            }
            const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_13__.Icon.Icon();
            const width = '12.5px';
            const height = '12.5px';
            icon.data = {
                iconName: iconInfo.iconName,
                width,
                height,
                color: 'var(--icon-default)',
            };
            icon.style.transform = `rotate(${iconInfo.rotate}deg) scale(${iconInfo.scaleX * 1.1}, ${iconInfo.scaleY * 1.1})`;
            icon.style.maxHeight = height;
            icon.style.maxWidth = width;
            result.iconElement = icon;
        }
        if (this.isColorAware && !this.isEditingName) {
            results.sort((a, b) => {
                if (a.isCSSVariableColor && b.isCSSVariableColor) {
                    return 0;
                }
                return a.isCSSVariableColor ? -1 : 1;
            });
        }
        return Promise.resolve(results);
        function filterCompletions(completion, variable, nameValue) {
            const index = completion.toLowerCase().indexOf(lowerQuery);
            const result = {
                text: completion,
                title: undefined,
                subtitle: undefined,
                priority: undefined,
                isSecondary: undefined,
                subtitleRenderer: undefined,
                selectionRange: undefined,
                hideGhostText: undefined,
                iconElement: undefined,
                isCSSVariableColor: false,
            };
            if (variable) {
                const computedValue = this.treeElement.matchedStyles().computeCSSVariable(this.treeElement.property.ownerStyle, completion);
                if (computedValue) {
                    const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(computedValue.value);
                    if (color) {
                        result.subtitleRenderer = colorSwatchRenderer.bind(null, color);
                        result.isCSSVariableColor = true;
                    }
                    else {
                        result.subtitleRenderer = computedValueSubtitleRenderer.bind(null, computedValue.value);
                    }
                }
            }
            if (nameValue) {
                result.hideGhostText = true;
            }
            if (index === 0) {
                result.priority = this.isEditingName ? _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CSSMetadata.cssMetadata().propertyUsageWeight(completion) : 1;
                prefixResults.push(result);
            }
            else if (index > -1) {
                anywhereResults.push(result);
            }
        }
        function colorSwatchRenderer(color) {
            const swatch = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_14__.ColorSwatch.ColorSwatch();
            swatch.renderColor(color);
            swatch.style.pointerEvents = 'none';
            return swatch;
        }
        function computedValueSubtitleRenderer(computedValue) {
            const subtitleElement = document.createElement('span');
            subtitleElement.className = 'suggestion-subtitle';
            subtitleElement.textContent = `${computedValue}`;
            subtitleElement.style.maxWidth = '100px';
            subtitleElement.title = `${computedValue}`;
            return subtitleElement;
        }
    }
}
function unescapeCssString(input) {
    // https://drafts.csswg.org/css-syntax/#consume-escaped-code-point
    const reCssEscapeSequence = /(?<!\\)\\(?:([a-fA-F0-9]{1,6})|(.))[\n\t\x20]?/gs;
    return input.replace(reCssEscapeSequence, (_, $1, $2) => {
        if ($2) { // Handle the single-character escape sequence.
            return $2;
        }
        // Otherwise, handle the code point escape sequence.
        const codePoint = parseInt($1, 16);
        const isSurrogate = 0xD800 <= codePoint && codePoint <= 0xDFFF;
        if (isSurrogate || codePoint === 0x0000 || codePoint > 0x10FFFF) {
            return '\uFFFD';
        }
        return String.fromCodePoint(codePoint);
    });
}
function escapeUrlAsCssComment(urlText) {
    const url = new URL(urlText);
    if (url.search) {
        return `${url.origin}${url.pathname}${url.search.replaceAll('*/', '*%2F')}${url.hash}`;
    }
    return url.toString();
}
class ActionDelegate {
    handleAction(_context, actionId) {
        switch (actionId) {
            case 'elements.new-style-rule': {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.NewStyleRuleAdded);
                void StylesSidebarPane.instance().createNewRuleInViaInspectorStyleSheet();
                return true;
            }
        }
        return false;
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
        this.button = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Toolbar.Toolbar.createActionButtonForId('elements.new-style-rule');
        this.button.setLongClickable(true);
        new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.UIUtils.LongClickController(this.button.element, this.longClicked.bind(this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.DOMNode, onNodeChanged.bind(this));
        onNodeChanged.call(this);
        function onNodeChanged() {
            let node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DOMModel.DOMNode);
            node = node ? node.enclosingElementOrSelf() : null;
            this.button.setEnabled(Boolean(node));
        }
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!buttonProviderInstance || forceNew) {
            buttonProviderInstance = new ButtonProvider();
        }
        return buttonProviderInstance;
    }
    longClicked(event) {
        StylesSidebarPane.instance().onAddButtonLongClick(event);
    }
    item() {
        return this.button;
    }
}


/***/ }),

/***/ "./src/panels/elements/TopLayerContainer.ts":
/*!**************************************************!*\
  !*** ./src/panels/elements/TopLayerContainer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopLayerContainer: () => (/* binding */ TopLayerContainer)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/elements/components/components.ts");
/* harmony import */ var _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ElementsTreeOutline.js */ "./src/panels/elements/ElementsTreeOutline.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     *@description Link text content in Elements Tree Outline of the Elements panel. When clicked, it "reveals" the true location of an element.
     */
    reveal: 'reveal',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/elements/TopLayerContainer.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class TopLayerContainer extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement {
    constructor(tree, document) {
        super('#top-layer');
        Object.defineProperty(this, "tree", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "document", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "currentTopLayerDOMNodes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Set()
        });
        Object.defineProperty(this, "topLayerUpdateThrottler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.tree = tree;
        this.document = document;
        this.topLayerUpdateThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(1);
    }
    async throttledUpdateTopLayerElements() {
        await this.topLayerUpdateThrottler.schedule(() => this.updateTopLayerElements());
    }
    async updateTopLayerElements() {
        this.removeChildren();
        this.removeCurrentTopLayerElementsAdorners();
        this.currentTopLayerDOMNodes = new Set();
        const domModel = this.document.domModel();
        const newTopLayerElementsIDs = await domModel.getTopLayerElements();
        if (!newTopLayerElementsIDs || newTopLayerElementsIDs.length === 0) {
            return;
        }
        let topLayerElementIndex = 0;
        for (let i = 0; i < newTopLayerElementsIDs.length; i++) {
            const topLayerDOMNode = domModel.idToDOMNode.get(newTopLayerElementsIDs[i]);
            if (!topLayerDOMNode || topLayerDOMNode.ownerDocument !== this.document) {
                continue;
            }
            if (topLayerDOMNode.nodeName() !== '::backdrop') {
                const topLayerElementShortcut = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNodeShortcut(domModel.target(), topLayerDOMNode.backendNodeId(), 0, topLayerDOMNode.nodeName());
                const topLayerElementRepresentation = new _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_6__.ShortcutTreeElement(topLayerElementShortcut);
                this.appendChild(topLayerElementRepresentation);
                this.currentTopLayerDOMNodes.add(topLayerDOMNode);
                // Add the element's backdrop if previous top layer element is a backdrop.
                const previousTopLayerDOMNode = (i > 0) ? domModel.idToDOMNode.get(newTopLayerElementsIDs[i - 1]) : undefined;
                if (previousTopLayerDOMNode && previousTopLayerDOMNode.nodeName() === '::backdrop') {
                    const backdropElementShortcut = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNodeShortcut(domModel.target(), previousTopLayerDOMNode.backendNodeId(), 0, previousTopLayerDOMNode.nodeName());
                    const backdropElementRepresentation = new _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_6__.ShortcutTreeElement(backdropElementShortcut);
                    topLayerElementRepresentation.appendChild(backdropElementRepresentation);
                }
                // TODO(changhaohan): store not-yet-inserted DOMNodes and adorn them when inserted.
                const topLayerTreeElement = this.tree.treeElementByNode.get(topLayerDOMNode);
                if (topLayerTreeElement) {
                    this.addTopLayerAdorner(topLayerTreeElement, topLayerElementRepresentation, ++topLayerElementIndex);
                }
            }
        }
    }
    removeCurrentTopLayerElementsAdorners() {
        for (const node of this.currentTopLayerDOMNodes) {
            const topLayerTreeElement = this.tree.treeElementByNode.get(node);
            // TODO(changhaohan): remove only top layer adorner.
            topLayerTreeElement?.removeAllAdorners();
        }
    }
    addTopLayerAdorner(element, topLayerElementRepresentation, topLayerElementIndex) {
        const config = _components_components_js__WEBPACK_IMPORTED_MODULE_5__.AdornerManager.getRegisteredAdorner(_components_components_js__WEBPACK_IMPORTED_MODULE_5__.AdornerManager.RegisteredAdorners.TOP_LAYER);
        const adornerContent = document.createElement('span');
        adornerContent.classList.add('adorner-with-icon');
        const linkIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon();
        linkIcon.name = 'select-element';
        const adornerText = document.createElement('span');
        adornerText.textContent = `top-layer (${topLayerElementIndex})`;
        adornerContent.append(linkIcon);
        adornerContent.append(adornerText);
        const adorner = element?.adorn(config, adornerContent);
        if (adorner) {
            const onClick = (() => {
                topLayerElementRepresentation.revealAndSelect();
            });
            adorner.addInteraction(onClick, {
                isToggle: false,
                shouldPropagateOnKeydown: false,
                ariaLabelDefault: i18nString(UIStrings.reveal),
                ariaLabelActive: i18nString(UIStrings.reveal),
            });
            adorner.addEventListener('mousedown', e => e.consume(), false);
        }
    }
}


/***/ }),

/***/ "./src/panels/elements/WebCustomData.ts":
/*!**********************************************!*\
  !*** ./src/panels/elements/WebCustomData.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebCustomData: () => (/* binding */ WebCustomData)
/* harmony export */ });
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _WebCustomData_data;

/**
 * Lazily loads the vscode.web-custom-data/browser.css-data.json and allows
 * lookup by property name.
 *
 * The class intentionally doesn't return any promise to the loaded data.
 * Otherwise clients would need to Promise.race against a timeout to handle
 * the case where the data is not yet available.
 */
class WebCustomData {
    constructor(remoteBase) {
        _WebCustomData_data.set(this, new Map());
        /** The test actually needs to wait for the result */
        Object.defineProperty(this, "fetchPromiseForTest", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (!remoteBase) {
            this.fetchPromiseForTest = Promise.resolve();
            return;
        }
        this.fetchPromiseForTest = fetch(`${remoteBase}third_party/vscode.web-custom-data/browsers.css-data.json`)
            .then(response => response.json())
            .then((json) => {
            for (const property of json.properties) {
                __classPrivateFieldGet(this, _WebCustomData_data, "f").set(property.name, property);
            }
        })
            .catch();
    }
    /**
     * Creates a fresh `WebCustomData` instance using the standard
     * DevTools remote base.
     * Throws if no valid remoteBase was found.
     */
    static create() {
        const remoteBase = _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.getRemoteBase();
        // Silently skip loading of the CSS data if remoteBase is not set properly.
        return new WebCustomData(remoteBase?.base ?? '');
    }
    /**
     * Returns the documentation for the CSS property `name` or `undefined` if
     * no such property is documented. Also returns `undefined` if data hasn't
     * finished loading or failed to load.
     */
    findCssProperty(name) {
        return __classPrivateFieldGet(this, _WebCustomData_data, "f").get(name);
    }
}
_WebCustomData_data = new WeakMap();


/***/ }),

/***/ "./src/panels/emulation/emulation.ts":
/*!*******************************************!*\
  !*** ./src/panels/emulation/emulation.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedApp: () => (/* reexport module object */ _AdvancedApp_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   DeviceModeToolbar: () => (/* reexport module object */ _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   DeviceModeView: () => (/* reexport module object */ _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   DeviceModeWrapper: () => (/* reexport module object */ _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   InspectedPagePlaceholder: () => (/* reexport module object */ _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   MediaQueryInspector: () => (/* reexport module object */ _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _AdvancedApp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedApp.js */ "./src/panels/emulation/AdvancedApp.ts");
/* harmony import */ var _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InspectedPagePlaceholder.js */ "./src/panels/emulation/InspectedPagePlaceholder.ts");
/* harmony import */ var _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaQueryInspector.js */ "./src/panels/emulation/MediaQueryInspector.ts");
/* harmony import */ var _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeviceModeToolbar.js */ "./src/panels/emulation/DeviceModeToolbar.ts");
/* harmony import */ var _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeviceModeView.js */ "./src/panels/emulation/DeviceModeView.ts");
/* harmony import */ var _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeviceModeWrapper.js */ "./src/panels/emulation/DeviceModeWrapper.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.















/***/ }),

/***/ "./src/panels/utils/utils.ts":
/*!***********************************!*\
  !*** ./src/panels/utils/utils.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelUtils: () => (/* binding */ PanelUtils)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/formatter/formatter.js */ "./src/models/formatter/formatter.ts");
/* harmony import */ var _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/diff_view/diff_view.js */ "./src/ui/components/diff_view/diff_view.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



// These utilities are packaged in a class to allow unittests to stub or spy the implementation.
class PanelUtils {
    static iconDataForResourceType(resourceType) {
        if (resourceType.isDocument()) {
            return { iconName: 'file-document', color: 'var(--icon-file-document)' };
        }
        if (resourceType.isImage()) {
            return { iconName: 'file-image', color: 'var(--icon-file-image)' };
        }
        if (resourceType.isFont()) {
            return { iconName: 'file-font', color: 'var(--icon-file-font)' };
        }
        if (resourceType.isScript()) {
            return { iconName: 'file-script', color: 'var(--icon-file-script)' };
        }
        if (resourceType.isStyleSheet()) {
            return { iconName: 'file-stylesheet', color: 'var(--icon-file-styles)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Manifest.name()) {
            return { iconName: 'file-manifest', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Wasm.name()) {
            return { iconName: 'file-wasm', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.WebSocket.name()) {
            return { iconName: 'file-websocket', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Media.name()) {
            return { iconName: 'file-media', color: 'var(--icon-file-media)' };
        }
        if (resourceType.isWebbundle()) {
            return { iconName: 'bundle', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Fetch.name() ||
            resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.XHR.name()) {
            return { iconName: 'file-fetch-xhr', color: 'var(--icon-default)' };
        }
        return { iconName: 'file-generic', color: 'var(--icon-default)' };
    }
    static async formatCSSChangesFromDiff(diff) {
        const indent = '  ';
        const { originalLines, currentLines, rows } = _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__.DiffView.buildDiffRows(diff);
        const originalRuleMaps = await buildStyleRuleMaps(originalLines.join('\n'));
        const currentRuleMaps = await buildStyleRuleMaps(currentLines.join('\n'));
        let changes = '';
        let recordedOriginalSelector, recordedCurrentSelector;
        let hasOpenDeclarationBlock = false;
        for (const { currentLineNumber, originalLineNumber, type } of rows) {
            if (type !== _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__.DiffView.RowType.Deletion && type !== _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__.DiffView.RowType.Addition) {
                continue;
            }
            const isDeletion = type === _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__.DiffView.RowType.Deletion;
            const lines = isDeletion ? originalLines : currentLines;
            // Diff line arrays starts at 0, but line numbers start at 1.
            const lineIndex = isDeletion ? originalLineNumber - 1 : currentLineNumber - 1;
            const line = lines[lineIndex].trim();
            const { declarationIDToStyleRule, styleRuleIDToStyleRule } = isDeletion ? originalRuleMaps : currentRuleMaps;
            let styleRule;
            let prefix = '';
            if (declarationIDToStyleRule.has(lineIndex)) {
                styleRule = declarationIDToStyleRule.get(lineIndex);
                const selector = styleRule.selector;
                // Use the equality of selector strings as a best-effort check for the equality of style rules.
                if (selector !== recordedOriginalSelector && selector !== recordedCurrentSelector) {
                    prefix += `${selector} {\n`;
                }
                prefix += indent;
                hasOpenDeclarationBlock = true;
            }
            else {
                if (hasOpenDeclarationBlock) {
                    prefix = '}\n\n';
                    hasOpenDeclarationBlock = false;
                }
                if (styleRuleIDToStyleRule.has(lineIndex)) {
                    styleRule = styleRuleIDToStyleRule.get(lineIndex);
                }
            }
            const processedLine = isDeletion ? `/* ${line} */` : line;
            changes += prefix + processedLine + '\n';
            if (isDeletion) {
                recordedOriginalSelector = styleRule?.selector;
            }
            else {
                recordedCurrentSelector = styleRule?.selector;
            }
        }
        if (changes.length > 0) {
            changes += '}';
        }
        return changes;
    }
    static highlightElement(element) {
        element.scrollIntoViewIfNeeded();
        element.animate([
            { offset: 0, backgroundColor: 'rgba(255, 255, 0, 0.2)' },
            { offset: 0.1, backgroundColor: 'rgba(255, 255, 0, 0.7)' },
            { offset: 1, backgroundColor: 'transparent' },
        ], { duration: 2000, easing: 'cubic-bezier(0, 0, 0.2, 1)' });
    }
}
async function buildStyleRuleMaps(content) {
    const rules = await new Promise(res => {
        const rules = [];
        _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.FormatterWorkerPool.formatterWorkerPool().parseCSS(content, (isLastChunk, currentRules) => {
            rules.push(...currentRules);
            if (isLastChunk) {
                res(rules);
            }
        });
    });
    // We use line numbers as unique IDs for rules and declarations
    const declarationIDToStyleRule = new Map();
    const styleRuleIDToStyleRule = new Map();
    for (const rule of rules) {
        if ('styleRange' in rule) {
            const selector = rule.selectorText.split('\n').pop()?.trim();
            if (!selector) {
                continue;
            }
            const styleRule = { rule, selector };
            styleRuleIDToStyleRule.set(rule.styleRange.startLine, styleRule);
            for (const property of rule.properties) {
                declarationIDToStyleRule.set(property.range.startLine, styleRule);
            }
        }
    }
    return { declarationIDToStyleRule, styleRuleIDToStyleRule };
}


/***/ }),

/***/ "./src/ui/components/diff_view/diff_view.ts":
/*!**************************************************!*\
  !*** ./src/ui/components/diff_view/diff_view.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiffView: () => (/* reexport module object */ _DiffView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _DiffView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiffView.js */ "./src/ui/components/diff_view/DiffView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ }),

/***/ "./src/ui/components/highlighting/HighlightManager.ts":
/*!************************************************************!*\
  !*** ./src/ui/components/highlighting/HighlightManager.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HIGHLIGHT_REGISTRY: () => (/* binding */ HIGHLIGHT_REGISTRY),
/* harmony export */   HighlightManager: () => (/* binding */ HighlightManager),
/* harmony export */   RangeWalker: () => (/* binding */ RangeWalker)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './highlighting.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _RangeWalker_instances, _RangeWalker_offset, _RangeWalker_treeWalker, _RangeWalker_eof, _RangeWalker_next, _RangeWalker_goToPosition, _HighlightManager_highlights;

class RangeWalker {
    constructor(root) {
        _RangeWalker_instances.add(this);
        Object.defineProperty(this, "root", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: root
        });
        _RangeWalker_offset.set(this, 0);
        _RangeWalker_treeWalker.set(this, void 0);
        _RangeWalker_eof.set(this, void 0);
        __classPrivateFieldSet(this, _RangeWalker_treeWalker, document.createTreeWalker(root, NodeFilter.SHOW_TEXT), "f");
        __classPrivateFieldSet(this, _RangeWalker_eof, !__classPrivateFieldGet(this, _RangeWalker_treeWalker, "f").firstChild(), "f");
    }
    nextRange(start, length) {
        if (length <= 0 || __classPrivateFieldGet(this, _RangeWalker_eof, "f")) {
            return null;
        }
        const startNode = __classPrivateFieldGet(this, _RangeWalker_instances, "m", _RangeWalker_goToPosition).call(this, start);
        if (!startNode) {
            return null;
        }
        const offsetInStartNode = start - __classPrivateFieldGet(this, _RangeWalker_offset, "f");
        const endNode = __classPrivateFieldGet(this, _RangeWalker_instances, "m", _RangeWalker_goToPosition).call(this, start + length);
        if (!endNode) {
            return null;
        }
        const offsetInEndNode = start + length - __classPrivateFieldGet(this, _RangeWalker_offset, "f");
        const range = new Range();
        range.setStart(startNode, offsetInStartNode);
        range.setEnd(endNode, offsetInEndNode);
        return range;
    }
}
_RangeWalker_offset = new WeakMap(), _RangeWalker_treeWalker = new WeakMap(), _RangeWalker_eof = new WeakMap(), _RangeWalker_instances = new WeakSet(), _RangeWalker_next = function _RangeWalker_next() {
    __classPrivateFieldSet(this, _RangeWalker_offset, __classPrivateFieldGet(this, _RangeWalker_offset, "f") + (__classPrivateFieldGet(this, _RangeWalker_treeWalker, "f").currentNode.textContent?.length ?? 0), "f");
    __classPrivateFieldSet(this, _RangeWalker_eof, !__classPrivateFieldGet(this, _RangeWalker_treeWalker, "f").nextNode(), "f");
    return !__classPrivateFieldGet(this, _RangeWalker_eof, "f");
}, _RangeWalker_goToPosition = function _RangeWalker_goToPosition(offset) {
    if (offset < __classPrivateFieldGet(this, _RangeWalker_offset, "f") || __classPrivateFieldGet(this, _RangeWalker_eof, "f")) {
        return null;
    }
    // `>` here implies that, except for the first range, start offsets are left-leaning, i.e., when the offset falls
    // between two text nodes, the preceding one is returned. This doesn't matter for Range semantics, but isn't
    // intuitive wrt. the usual understanding of intervals. Making start offsets right-leaning but end offsets
    // left-leaning would incur an unwarranted amount of complexity.
    while (offset > __classPrivateFieldGet(this, _RangeWalker_offset, "f") + (__classPrivateFieldGet(this, _RangeWalker_treeWalker, "f").currentNode.textContent?.length ?? 0)) {
        if (!__classPrivateFieldGet(this, _RangeWalker_instances, "m", _RangeWalker_next).call(this)) {
            return null;
        }
    }
    return __classPrivateFieldGet(this, _RangeWalker_treeWalker, "f").currentNode;
};
const HIGHLIGHT_REGISTRY = 'search-highlight';
let highlightManagerInstance;
class HighlightManager {
    constructor() {
        _HighlightManager_highlights.set(this, new Highlight());
        document.adoptedStyleSheets.push(Object(function webpackMissingModule() { var e = new Error("Cannot find module './highlighting.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        CSS.highlights.set(HIGHLIGHT_REGISTRY, __classPrivateFieldGet(this, _HighlightManager_highlights, "f"));
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!highlightManagerInstance || forceNew) {
            highlightManagerInstance = new HighlightManager();
        }
        return highlightManagerInstance;
    }
    addHighlights(ranges) {
        ranges.forEach(this.addHighlight.bind(this));
    }
    removeHighlights(ranges) {
        ranges.forEach(this.removeHighlight.bind(this));
    }
    addHighlight(range) {
        __classPrivateFieldGet(this, _HighlightManager_highlights, "f").add(range);
    }
    removeHighlight(range) {
        __classPrivateFieldGet(this, _HighlightManager_highlights, "f").delete(range);
    }
    highlightOrderedTextRanges(root, sourceRanges) {
        const rangeWalker = new RangeWalker(root);
        const ranges = sourceRanges.map(range => rangeWalker.nextRange(range.offset, range.length))
            .filter((r) => r !== null && !r.collapsed);
        this.addHighlights(ranges);
        return ranges;
    }
}
_HighlightManager_highlights = new WeakMap();


/***/ }),

/***/ "./src/ui/components/highlighting/highlighting.ts":
/*!********************************************************!*\
  !*** ./src/ui/components/highlighting/highlighting.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HighlightManager: () => (/* reexport module object */ _HighlightManager_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _HighlightManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HighlightManager.js */ "./src/ui/components/highlighting/HighlightManager.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ }),

/***/ "./src/ui/components/tree_outline/tree_outline.ts":
/*!********************************************************!*\
  !*** ./src/ui/components/tree_outline/tree_outline.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TreeOutline: () => (/* reexport module object */ _TreeOutline_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   TreeOutlineUtils: () => (/* reexport module object */ _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _TreeOutline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeOutline.js */ "./src/ui/components/tree_outline/TreeOutline.ts");
/* harmony import */ var _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeOutlineUtils.js */ "./src/ui/components/tree_outline/TreeOutlineUtils.ts");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/***/ })

}]);