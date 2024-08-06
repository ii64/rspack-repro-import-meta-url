"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_tree_outline_TreeOutline_js"],{

/***/ "./ui/components/tree_outline/TreeOutline.js":
/*!***************************************************!*\
  !*** ./ui/components/tree_outline/TreeOutline.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemMouseOutEvent: () => (/* binding */ ItemMouseOutEvent),
/* harmony export */   ItemMouseOverEvent: () => (/* binding */ ItemMouseOverEvent),
/* harmony export */   ItemSelectedEvent: () => (/* binding */ ItemSelectedEvent),
/* harmony export */   TreeOutline: () => (/* binding */ TreeOutline),
/* harmony export */   defaultRenderer: () => (/* binding */ defaultRenderer)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../code_highlighter/code_highlighter.js */ "./ui/components/code_highlighter/code_highlighter.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _treeOutline_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./treeOutline.css.js */ "./ui/components/tree_outline/treeOutline.css.js");
/* harmony import */ var _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TreeOutlineUtils.js */ "./ui/components/tree_outline/TreeOutlineUtils.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
function defaultRenderer(node) {
    return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `${node.treeNodeData}`;
}
class ItemSelectedEvent extends Event {
    static eventName = 'itemselected';
    data;
    constructor(node) {
        super(ItemSelectedEvent.eventName, { bubbles: true, composed: true });
        this.data = { node };
    }
}
class ItemMouseOverEvent extends Event {
    static eventName = 'itemmouseover';
    data;
    constructor(node) {
        super(ItemMouseOverEvent.eventName, { bubbles: true, composed: true });
        this.data = { node };
    }
}
class ItemMouseOutEvent extends Event {
    static eventName = 'itemmouseout';
    data;
    constructor(node) {
        super(ItemMouseOutEvent.eventName, { bubbles: true, composed: true });
        this.data = { node };
    }
}
class TreeOutline extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-tree-outline`;
    #shadow = this.attachShadow({ mode: 'open' });
    #treeData = [];
    #nodeExpandedMap = new Map();
    #domNodeToTreeNodeMap = new WeakMap();
    #hasRenderedAtLeastOnce = false;
    /**
     * If we have expanded to a certain node, we want to focus it once we've
     * rendered. But we render lazily and wrapped in LitHtml.until, so we can't
     * know for sure when that node will be rendered. This variable tracks the
     * node that we want focused but may not yet have been rendered.
     */
    #nodeIdPendingFocus = null;
    #selectedTreeNode = null;
    #defaultRenderer = (node, _state) => {
        if (typeof node.treeNodeData !== 'string') {
            console.warn(`The default TreeOutline renderer simply stringifies its given value. You passed in ${JSON.stringify(node.treeNodeData, null, 2)}. Consider providing a different defaultRenderer that can handle nodes of this type.`);
        }
        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `${String(node.treeNodeData)}`;
    };
    #nodeFilter;
    #compact = false;
    /**
     * scheduledRender = render() has been called and scheduled a render.
     */
    #scheduledRender = false;
    /**
     * enqueuedRender = render() was called mid-way through an existing render.
     */
    #enqueuedRender = false;
    static get observedAttributes() {
        return ['nowrap', 'toplevelbordercolor'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'nowrap': {
                this.#setNodeKeyNoWrapCSSVariable(newValue);
                break;
            }
            case 'toplevelbordercolor': {
                this.#setTopLevelNodeBorderColorCSSVariable(newValue);
                break;
            }
        }
    }
    connectedCallback() {
        this.#setTopLevelNodeBorderColorCSSVariable(this.getAttribute('toplevelbordercolor'));
        this.#setNodeKeyNoWrapCSSVariable(this.getAttribute('nowrap'));
        this.#shadow.adoptedStyleSheets = [_treeOutline_css_js__WEBPACK_IMPORTED_MODULE_6__["default"], _code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_3__.Style["default"]];
    }
    get data() {
        return {
            tree: this.#treeData,
            defaultRenderer: this.#defaultRenderer,
        };
    }
    set data(data) {
        this.#defaultRenderer = data.defaultRenderer;
        this.#treeData = data.tree;
        this.#nodeFilter = data.filter;
        this.#compact = data.compact || false;
        if (!this.#hasRenderedAtLeastOnce) {
            this.#selectedTreeNode = this.#treeData[0];
        }
        void this.#render();
    }
    /**
     * Recursively expands the tree from the root nodes, to a max depth. The max
     * depth is 0 indexed - so a maxDepth of 2 (default) will expand 3 levels: 0,
     * 1 and 2.
     */
    async expandRecursively(maxDepth = 2) {
        await Promise.all(this.#treeData.map(rootNode => this.#expandAndRecurse(rootNode, 0, maxDepth)));
        await this.#render();
    }
    /**
     * Collapses all nodes in the tree.
     */
    async collapseAllNodes() {
        this.#nodeExpandedMap.clear();
        await this.#render();
    }
    /**
     * Takes a TreeNode, expands the outline to reveal it, and focuses it.
     */
    async expandToAndSelectTreeNode(targetTreeNode) {
        return this.expandToAndSelectTreeNodeId(targetTreeNode.id);
    }
    /**
     * Takes a TreeNode ID, expands the outline to reveal it, and focuses it.
     */
    async expandToAndSelectTreeNodeId(targetTreeNodeId) {
        const pathToTreeNode = await (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.getPathToTreeNode)(this.#treeData, targetTreeNodeId);
        if (pathToTreeNode === null) {
            throw new Error(`Could not find node with id ${targetTreeNodeId} in the tree.`);
        }
        pathToTreeNode.forEach((node, index) => {
            // We don't expand the very last node, which was the target node.
            if (index < pathToTreeNode.length - 1) {
                this.#setNodeExpandedState(node, true);
            }
        });
        // Mark the node as pending focus so when it is rendered into the DOM we can focus it
        this.#nodeIdPendingFocus = targetTreeNodeId;
        await this.#render();
    }
    /**
     * Takes a list of TreeNode IDs and expands the corresponding nodes.
     */
    expandNodeIds(nodeIds) {
        nodeIds.forEach(id => this.#nodeExpandedMap.set(id, true));
        return this.#render();
    }
    /**
     * Takes a TreeNode ID and focuses the corresponding node.
     */
    focusNodeId(nodeId) {
        this.#nodeIdPendingFocus = nodeId;
        return this.#render();
    }
    async collapseChildrenOfNode(domNode) {
        const treeNode = this.#domNodeToTreeNodeMap.get(domNode);
        if (!treeNode) {
            return;
        }
        await this.#recursivelyCollapseTreeNodeChildren(treeNode);
        await this.#render();
    }
    #setNodeKeyNoWrapCSSVariable(attributeValue) {
        this.style.setProperty('--override-key-whitespace-wrapping', attributeValue !== null ? 'nowrap' : 'initial');
    }
    #setTopLevelNodeBorderColorCSSVariable(attributeValue) {
        this.style.setProperty('--override-top-node-border', attributeValue ? `1px solid ${attributeValue}` : '');
    }
    async #recursivelyCollapseTreeNodeChildren(treeNode) {
        if (!(0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(treeNode) || !this.#nodeIsExpanded(treeNode)) {
            return;
        }
        const children = await this.#fetchNodeChildren(treeNode);
        const childRecursions = Promise.all(children.map(child => this.#recursivelyCollapseTreeNodeChildren(child)));
        await childRecursions;
        this.#setNodeExpandedState(treeNode, false);
    }
    async #flattenSubtree(node, filter) {
        const children = await (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.getNodeChildren)(node);
        const filteredChildren = [];
        for (const child of children) {
            const filtering = filter(child.treeNodeData);
            // We always include the selected node in the tree, regardless of its filtering status.
            const toBeSelected = this.#isSelectedNode(child) || child.id === this.#nodeIdPendingFocus;
            // If a node is already expanded we should not flatten it away.
            const expanded = this.#nodeExpandedMap.get(child.id);
            if (filtering === "SHOW" /* FilterOption.SHOW */ || toBeSelected || expanded) {
                filteredChildren.push(child);
            }
            else if (filtering === "FLATTEN" /* FilterOption.FLATTEN */ && (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(child)) {
                const grandChildren = await this.#flattenSubtree(child, filter);
                filteredChildren.push(...grandChildren);
            }
        }
        return filteredChildren;
    }
    async #fetchNodeChildren(node) {
        const children = await (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.getNodeChildren)(node);
        const filter = this.#nodeFilter;
        if (!filter) {
            return children;
        }
        const filteredDescendants = await this.#flattenSubtree(node, filter);
        return filteredDescendants.length ? filteredDescendants : children;
    }
    #setNodeExpandedState(node, newExpandedState) {
        this.#nodeExpandedMap.set(node.id, newExpandedState);
    }
    #nodeIsExpanded(node) {
        return this.#nodeExpandedMap.get(node.id) || false;
    }
    async #expandAndRecurse(node, currentDepth, maxDepth) {
        if (!(0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node)) {
            return;
        }
        this.#setNodeExpandedState(node, true);
        if (currentDepth === maxDepth || !(0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node)) {
            return;
        }
        const children = await this.#fetchNodeChildren(node);
        await Promise.all(children.map(child => this.#expandAndRecurse(child, currentDepth + 1, maxDepth)));
    }
    #onArrowClick(node) {
        return (event) => {
            event.stopPropagation();
            if ((0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node)) {
                this.#setNodeExpandedState(node, !this.#nodeIsExpanded(node));
                void this.#render();
            }
        };
    }
    #onNodeClick(event) {
        // Avoid it bubbling up to parent tree elements, else clicking a node deep in the tree will toggle it + all its ancestor's visibility.
        event.stopPropagation();
        const nodeClickExpandsOrContracts = this.getAttribute('clickabletitle') !== null;
        const domNode = event.currentTarget;
        const node = this.#domNodeToTreeNodeMap.get(domNode);
        if (nodeClickExpandsOrContracts && node && (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node)) {
            this.#setNodeExpandedState(node, !this.#nodeIsExpanded(node));
        }
        void this.#focusTreeNode(domNode);
    }
    async #focusTreeNode(domNode) {
        const treeNode = this.#domNodeToTreeNodeMap.get(domNode);
        if (!treeNode) {
            return;
        }
        this.#selectedTreeNode = treeNode;
        await this.#render();
        this.dispatchEvent(new ItemSelectedEvent(treeNode));
        void coordinator.write('DOMNode focus', () => {
            domNode.focus();
        });
    }
    #processHomeAndEndKeysNavigation(key) {
        if (key === 'Home') {
            const firstRootNode = this.#shadow.querySelector('ul[role="tree"] > li[role="treeitem"]');
            if (firstRootNode) {
                void this.#focusTreeNode(firstRootNode);
            }
        }
        else if (key === 'End') {
            /**
             * The End key takes the user to the last visible node in the tree - you
             * can think of this as the one that's rendered closest to the bottom of
             * the page.
             *
             * We could walk our tree and compute this - but it will also be the last
             * li[role="treeitem"] in the DOM because we only render visible nodes.
             * Therefore we can select all the nodes and pick the last one.
             */
            const allTreeItems = this.#shadow.querySelectorAll('li[role="treeitem"]');
            const lastTreeItem = allTreeItems[allTreeItems.length - 1];
            if (lastTreeItem) {
                void this.#focusTreeNode(lastTreeItem);
            }
        }
    }
    async #processArrowKeyNavigation(key, currentDOMNode) {
        const currentTreeNode = this.#domNodeToTreeNodeMap.get(currentDOMNode);
        if (!currentTreeNode) {
            return;
        }
        const domNode = (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.findNextNodeForTreeOutlineKeyboardNavigation)({
            currentDOMNode,
            currentTreeNode,
            direction: key,
            setNodeExpandedState: (node, expanded) => this.#setNodeExpandedState(node, expanded),
        });
        await this.#focusTreeNode(domNode);
    }
    #processEnterOrSpaceNavigation(currentDOMNode) {
        const currentTreeNode = this.#domNodeToTreeNodeMap.get(currentDOMNode);
        if (!currentTreeNode) {
            return;
        }
        if ((0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(currentTreeNode)) {
            const currentExpandedState = this.#nodeIsExpanded(currentTreeNode);
            this.#setNodeExpandedState(currentTreeNode, !currentExpandedState);
            void this.#render();
        }
    }
    async #onTreeKeyDown(event) {
        if (!(event.target instanceof HTMLLIElement)) {
            throw new Error('event.target was not an <li> element');
        }
        if (event.key === 'Home' || event.key === 'End') {
            event.preventDefault();
            this.#processHomeAndEndKeysNavigation(event.key);
        }
        else if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.keyIsArrowKey(event.key)) {
            event.preventDefault();
            await this.#processArrowKeyNavigation(event.key, event.target);
        }
        else if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.#processEnterOrSpaceNavigation(event.target);
        }
    }
    #focusPendingNode(domNode) {
        this.#nodeIdPendingFocus = null;
        void this.#focusTreeNode(domNode);
    }
    #isSelectedNode(node) {
        if (this.#selectedTreeNode) {
            return node.id === this.#selectedTreeNode.id;
        }
        return false;
    }
    #renderNode(node, { depth, setSize, positionInSet }) {
        let childrenToRender;
        const nodeIsExpanded = this.#nodeIsExpanded(node);
        if (!(0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node) || !nodeIsExpanded) {
            childrenToRender = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.nothing;
        }
        else {
            const childNodes = this.#fetchNodeChildren(node).then(children => {
                return children.map((childNode, index) => {
                    return this.#renderNode(childNode, { depth: depth + 1, setSize: children.length, positionInSet: index });
                });
            });
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            childrenToRender = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `<ul role="group">${_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.until(childNodes)}</ul>`;
            // clang-format on
        }
        const nodeIsFocusable = this.#isSelectedNode(node);
        const tabIndex = nodeIsFocusable ? 0 : -1;
        const listItemClasses = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.classMap({
            expanded: (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node) && nodeIsExpanded,
            parent: (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node),
            selected: this.#isSelectedNode(node),
            'is-top-level': depth === 0,
            compact: this.#compact,
        });
        const ariaExpandedAttribute = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.ifDefined((0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node) ? String(nodeIsExpanded) : undefined);
        let renderedNodeKey;
        if (node.renderer) {
            renderedNodeKey = node.renderer(node, { isExpanded: nodeIsExpanded });
        }
        else {
            renderedNodeKey = this.#defaultRenderer(node, { isExpanded: nodeIsExpanded });
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
      <li role="treeitem"
        tabindex=${tabIndex}
        aria-setsize=${setSize}
        aria-expanded=${ariaExpandedAttribute}
        aria-level=${depth + 1}
        aria-posinset=${positionInSet + 1}
        class=${listItemClasses}
        jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.treeItem(node.jslogContext).track({ click: true, keydown: 'ArrowUp|ArrowDown|ArrowLeft|ArrowRight|Enter|Space|Home|End' })}
        @click=${this.#onNodeClick}
        track-dom-node-to-tree-node=${(0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.trackDOMNodeToTreeNode)(this.#domNodeToTreeNodeMap, node)}
        on-render=${_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_4__.Directives.nodeRenderedCallback(domNode => {
            /**
             * Because TreeNodes are lazily rendered, you can call
             * `outline.expandToAndSelect(NodeX)`, but `NodeX` will be rendered at some
             * later point, once it's been fully resolved, within a LitHtml.until
             * directive. That means we don't have a direct hook into when it's
             * rendered, which we need because we want to focus the element, so we use this directive to receive a callback when the node is rendered.
             */
            if (!(domNode instanceof HTMLLIElement)) {
                return;
            }
            if (this.#nodeIdPendingFocus && node.id === this.#nodeIdPendingFocus) {
                this.#focusPendingNode(domNode);
            }
        })}
      >
        <span class="arrow-and-key-wrapper"
          @mouseover=${() => {
            this.dispatchEvent(new ItemMouseOverEvent(node));
        }}
          @mouseout=${() => {
            this.dispatchEvent(new ItemMouseOutEvent(node));
        }}
        >
          <span class="arrow-icon" @click=${this.#onArrowClick(node)} jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.expand().track({ click: true })}>
          </span>
          <span class="tree-node-key" data-node-key=${node.treeNodeData}>${renderedNodeKey}</span>
        </span>
        ${childrenToRender}
      </li>
    `;
        // clang-format on
    }
    async #render() {
        if (this.#scheduledRender) {
            // If we are already rendering, don't render again immediately, but
            // enqueue it to be run after we're done on our current render.
            this.#enqueuedRender = true;
            return;
        }
        this.#scheduledRender = true;
        await coordinator.write('TreeOutline render', () => {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
      <div class="wrapping-container">
        <ul role="tree" @keydown=${this.#onTreeKeyDown}>
          ${this.#treeData.map((topLevelNode, index) => {
                return this.#renderNode(topLevelNode, {
                    depth: 0,
                    setSize: this.#treeData.length,
                    positionInSet: index,
                });
            })}
        </ul>
      </div>
      `, this.#shadow, {
                host: this,
            });
        });
        // clang-format on
        this.#hasRenderedAtLeastOnce = true;
        this.#scheduledRender = false;
        // If render() was called when we were already mid-render, let's re-render
        // to ensure we're not rendering any stale UI.
        if (this.#enqueuedRender) {
            this.#enqueuedRender = false;
            return this.#render();
        }
    }
}
customElements.define('devtools-tree-outline', TreeOutline);
//# sourceMappingURL=TreeOutline.js.map

/***/ }),

/***/ "./ui/components/tree_outline/treeOutline.css.js":
/*!*******************************************************!*\
  !*** ./ui/components/tree_outline/treeOutline.css.js ***!
  \*******************************************************/
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  --list-group-padding: 16px;
}

li {
  border: 2px solid transparent;
  list-style: none;
  text-overflow: ellipsis;
  min-height: 12px;
}

.compact {
  border: 0;
}

.tree-item:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.tree-node-key {
  white-space: var(--override-key-whitespace-wrapping);
  /* Override the default |min-width: auto| to avoid overflows of flex items */
  min-width: 0;
  flex-grow: 1;
}

.arrow-icon {
  display: block;
  user-select: none;
  mask-image: var(--image-file-triangle-right);
  background-color: var(--icon-default);
  content: "";
  text-shadow: none;
  height: 14px;
  width: 14px;
  overflow: hidden;
  flex: none;
  transition: transform 200ms;
}

ul {
  margin: 0;
  padding: 0;
}

ul[role="group"] {
  padding-left: var(--list-group-padding);
}

li:not(.parent) > .arrow-and-key-wrapper > .arrow-icon {
  mask-size: 0;
}

li.parent.expanded > .arrow-and-key-wrapper > .arrow-icon {
  transform: rotate(90deg);
}

li.is-top-level {
  border-top: var(--override-top-node-border);
}

li.is-top-level:last-child {
  border-bottom: var(--override-top-node-border);
}

:host([animated]) li:not(.is-top-level) {
  animation-name: slideIn;
  animation-duration: 150ms;
  animation-timing-function: cubic-bezier(0, 0, 0.3, 1);
  animation-fill-mode: forwards;
}

@keyframes slideIn {
  from {
    transform: translateY(-5px);
    opacity: 0%;
  }

  to {
    transform: none;
    opacity: 100%;
  }
}

.arrow-and-key-wrapper {
  display: flex;
  align-content: center;
  align-items: center;

  & ::selection {
    background-color: var(--sys-color-state-focus-select);
  }
}

[role="treeitem"]:focus {
  outline: 0;
}

ul[role="tree"]:focus-within [role="treeitem"].selected > .arrow-and-key-wrapper {
  /* stylelint-disable-next-line color-named */
  background-color: var(--sys-color-tonal-container);
}

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.inline-icon {
  vertical-align: sub;
}

@media (forced-colors: active) {
  .arrow-icon {
    background-color: ButtonText;
  }

  ul[role="tree"]:focus-within [role="treeitem"].selected {
    outline: solid 1px ButtonText;
  }
}

/*# sourceURL=treeOutline.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);