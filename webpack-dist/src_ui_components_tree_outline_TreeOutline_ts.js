"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_tree_outline_TreeOutline_ts"],{

/***/ "./src/ui/components/tree_outline/TreeOutline.ts":
/*!*******************************************************!*\
  !*** ./src/ui/components/tree_outline/TreeOutline.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterOption: () => (/* binding */ FilterOption),
/* harmony export */   ItemMouseOutEvent: () => (/* binding */ ItemMouseOutEvent),
/* harmony export */   ItemMouseOverEvent: () => (/* binding */ ItemMouseOverEvent),
/* harmony export */   ItemSelectedEvent: () => (/* binding */ ItemSelectedEvent),
/* harmony export */   TreeOutline: () => (/* binding */ TreeOutline),
/* harmony export */   defaultRenderer: () => (/* binding */ defaultRenderer)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../code_highlighter/code_highlighter.js */ "./src/ui/components/code_highlighter/code_highlighter.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './treeOutline.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TreeOutlineUtils.js */ "./src/ui/components/tree_outline/TreeOutlineUtils.ts");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
var _TreeOutline_instances, _TreeOutline_shadow, _TreeOutline_treeData, _TreeOutline_nodeExpandedMap, _TreeOutline_domNodeToTreeNodeMap, _TreeOutline_hasRenderedAtLeastOnce, _TreeOutline_nodeIdPendingFocus, _TreeOutline_selectedTreeNode, _TreeOutline_defaultRenderer, _TreeOutline_nodeFilter, _TreeOutline_compact, _TreeOutline_scheduledRender, _TreeOutline_enqueuedRender, _TreeOutline_setNodeKeyNoWrapCSSVariable, _TreeOutline_setTopLevelNodeBorderColorCSSVariable, _TreeOutline_recursivelyCollapseTreeNodeChildren, _TreeOutline_flattenSubtree, _TreeOutline_fetchNodeChildren, _TreeOutline_setNodeExpandedState, _TreeOutline_nodeIsExpanded, _TreeOutline_expandAndRecurse, _TreeOutline_onArrowClick, _TreeOutline_onNodeClick, _TreeOutline_focusTreeNode, _TreeOutline_processHomeAndEndKeysNavigation, _TreeOutline_processArrowKeyNavigation, _TreeOutline_processEnterOrSpaceNavigation, _TreeOutline_onTreeKeyDown, _TreeOutline_focusPendingNode, _TreeOutline_isSelectedNode, _TreeOutline_renderNode, _TreeOutline_render;








const coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
function defaultRenderer(node) {
    return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `${node.treeNodeData}`;
}
class ItemSelectedEvent extends Event {
    constructor(node) {
        super(ItemSelectedEvent.eventName, { bubbles: true, composed: true });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = { node };
    }
}
Object.defineProperty(ItemSelectedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'itemselected'
});
class ItemMouseOverEvent extends Event {
    constructor(node) {
        super(ItemMouseOverEvent.eventName, { bubbles: true, composed: true });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = { node };
    }
}
Object.defineProperty(ItemMouseOverEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'itemmouseover'
});
class ItemMouseOutEvent extends Event {
    constructor(node) {
        super(ItemMouseOutEvent.eventName, { bubbles: true, composed: true });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = { node };
    }
}
Object.defineProperty(ItemMouseOutEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'itemmouseout'
});
/**
 *
 * The tree can be filtered by providing a custom filter function.
 * The filter is applied on every node when constructing the tree
 * and proceeds as follows:
 * - If the filter return SHOW for a node, the node is included in the tree.
 * - If the filter returns FLATTEN, the node is ignored but its subtree is included.
 */
var FilterOption;
(function (FilterOption) {
    FilterOption["SHOW"] = "SHOW";
    FilterOption["FLATTEN"] = "FLATTEN";
})(FilterOption || (FilterOption = {}));
class TreeOutline extends HTMLElement {
    constructor() {
        super(...arguments);
        _TreeOutline_instances.add(this);
        _TreeOutline_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _TreeOutline_treeData.set(this, []);
        _TreeOutline_nodeExpandedMap.set(this, new Map());
        _TreeOutline_domNodeToTreeNodeMap.set(this, new WeakMap());
        _TreeOutline_hasRenderedAtLeastOnce.set(this, false);
        /**
         * If we have expanded to a certain node, we want to focus it once we've
         * rendered. But we render lazily and wrapped in LitHtml.until, so we can't
         * know for sure when that node will be rendered. This variable tracks the
         * node that we want focused but may not yet have been rendered.
         */
        _TreeOutline_nodeIdPendingFocus.set(this, null);
        _TreeOutline_selectedTreeNode.set(this, null);
        _TreeOutline_defaultRenderer.set(this, (node, _state) => {
            if (typeof node.treeNodeData !== 'string') {
                console.warn(`The default TreeOutline renderer simply stringifies its given value. You passed in ${JSON.stringify(node.treeNodeData, null, 2)}. Consider providing a different defaultRenderer that can handle nodes of this type.`);
            }
            return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `${String(node.treeNodeData)}`;
        });
        _TreeOutline_nodeFilter.set(this, void 0);
        _TreeOutline_compact.set(this, false);
        /**
         * scheduledRender = render() has been called and scheduled a render.
         */
        _TreeOutline_scheduledRender.set(this, false);
        /**
         * enqueuedRender = render() was called mid-way through an existing render.
         */
        _TreeOutline_enqueuedRender.set(this, false);
    }
    static get observedAttributes() {
        return ['nowrap', 'toplevelbordercolor'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'nowrap': {
                __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_setNodeKeyNoWrapCSSVariable).call(this, newValue);
                break;
            }
            case 'toplevelbordercolor': {
                __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_setTopLevelNodeBorderColorCSSVariable).call(this, newValue);
                break;
            }
        }
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_setTopLevelNodeBorderColorCSSVariable).call(this, this.getAttribute('toplevelbordercolor'));
        __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_setNodeKeyNoWrapCSSVariable).call(this, this.getAttribute('nowrap'));
        __classPrivateFieldGet(this, _TreeOutline_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './treeOutline.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_3__.Style["default"]];
    }
    get data() {
        return {
            tree: __classPrivateFieldGet(this, _TreeOutline_treeData, "f"),
            defaultRenderer: __classPrivateFieldGet(this, _TreeOutline_defaultRenderer, "f"),
        };
    }
    set data(data) {
        __classPrivateFieldSet(this, _TreeOutline_defaultRenderer, data.defaultRenderer, "f");
        __classPrivateFieldSet(this, _TreeOutline_treeData, data.tree, "f");
        __classPrivateFieldSet(this, _TreeOutline_nodeFilter, data.filter, "f");
        __classPrivateFieldSet(this, _TreeOutline_compact, data.compact || false, "f");
        if (!__classPrivateFieldGet(this, _TreeOutline_hasRenderedAtLeastOnce, "f")) {
            __classPrivateFieldSet(this, _TreeOutline_selectedTreeNode, __classPrivateFieldGet(this, _TreeOutline_treeData, "f")[0], "f");
        }
        void __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_render).call(this);
    }
    /**
     * Recursively expands the tree from the root nodes, to a max depth. The max
     * depth is 0 indexed - so a maxDepth of 2 (default) will expand 3 levels: 0,
     * 1 and 2.
     */
    async expandRecursively(maxDepth = 2) {
        await Promise.all(__classPrivateFieldGet(this, _TreeOutline_treeData, "f").map(rootNode => __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_expandAndRecurse).call(this, rootNode, 0, maxDepth)));
        await __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_render).call(this);
    }
    /**
     * Collapses all nodes in the tree.
     */
    async collapseAllNodes() {
        __classPrivateFieldGet(this, _TreeOutline_nodeExpandedMap, "f").clear();
        await __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_render).call(this);
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
        const pathToTreeNode = await (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.getPathToTreeNode)(__classPrivateFieldGet(this, _TreeOutline_treeData, "f"), targetTreeNodeId);
        if (pathToTreeNode === null) {
            throw new Error(`Could not find node with id ${targetTreeNodeId} in the tree.`);
        }
        pathToTreeNode.forEach((node, index) => {
            // We don't expand the very last node, which was the target node.
            if (index < pathToTreeNode.length - 1) {
                __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_setNodeExpandedState).call(this, node, true);
            }
        });
        // Mark the node as pending focus so when it is rendered into the DOM we can focus it
        __classPrivateFieldSet(this, _TreeOutline_nodeIdPendingFocus, targetTreeNodeId, "f");
        await __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_render).call(this);
    }
    /**
     * Takes a list of TreeNode IDs and expands the corresponding nodes.
     */
    expandNodeIds(nodeIds) {
        nodeIds.forEach(id => __classPrivateFieldGet(this, _TreeOutline_nodeExpandedMap, "f").set(id, true));
        return __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_render).call(this);
    }
    /**
     * Takes a TreeNode ID and focuses the corresponding node.
     */
    focusNodeId(nodeId) {
        __classPrivateFieldSet(this, _TreeOutline_nodeIdPendingFocus, nodeId, "f");
        return __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_render).call(this);
    }
    async collapseChildrenOfNode(domNode) {
        const treeNode = __classPrivateFieldGet(this, _TreeOutline_domNodeToTreeNodeMap, "f").get(domNode);
        if (!treeNode) {
            return;
        }
        await __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_recursivelyCollapseTreeNodeChildren).call(this, treeNode);
        await __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_render).call(this);
    }
}
_TreeOutline_shadow = new WeakMap(), _TreeOutline_treeData = new WeakMap(), _TreeOutline_nodeExpandedMap = new WeakMap(), _TreeOutline_domNodeToTreeNodeMap = new WeakMap(), _TreeOutline_hasRenderedAtLeastOnce = new WeakMap(), _TreeOutline_nodeIdPendingFocus = new WeakMap(), _TreeOutline_selectedTreeNode = new WeakMap(), _TreeOutline_defaultRenderer = new WeakMap(), _TreeOutline_nodeFilter = new WeakMap(), _TreeOutline_compact = new WeakMap(), _TreeOutline_scheduledRender = new WeakMap(), _TreeOutline_enqueuedRender = new WeakMap(), _TreeOutline_instances = new WeakSet(), _TreeOutline_setNodeKeyNoWrapCSSVariable = function _TreeOutline_setNodeKeyNoWrapCSSVariable(attributeValue) {
    this.style.setProperty('--override-key-whitespace-wrapping', attributeValue !== null ? 'nowrap' : 'initial');
}, _TreeOutline_setTopLevelNodeBorderColorCSSVariable = function _TreeOutline_setTopLevelNodeBorderColorCSSVariable(attributeValue) {
    this.style.setProperty('--override-top-node-border', attributeValue ? `1px solid ${attributeValue}` : '');
}, _TreeOutline_recursivelyCollapseTreeNodeChildren = async function _TreeOutline_recursivelyCollapseTreeNodeChildren(treeNode) {
    if (!(0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(treeNode) || !__classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_nodeIsExpanded).call(this, treeNode)) {
        return;
    }
    const children = await __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_fetchNodeChildren).call(this, treeNode);
    const childRecursions = Promise.all(children.map(child => __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_recursivelyCollapseTreeNodeChildren).call(this, child)));
    await childRecursions;
    __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_setNodeExpandedState).call(this, treeNode, false);
}, _TreeOutline_flattenSubtree = async function _TreeOutline_flattenSubtree(node, filter) {
    const children = await (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.getNodeChildren)(node);
    const filteredChildren = [];
    for (const child of children) {
        const filtering = filter(child.treeNodeData);
        // We always include the selected node in the tree, regardless of its filtering status.
        const toBeSelected = __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_isSelectedNode).call(this, child) || child.id === __classPrivateFieldGet(this, _TreeOutline_nodeIdPendingFocus, "f");
        // If a node is already expanded we should not flatten it away.
        const expanded = __classPrivateFieldGet(this, _TreeOutline_nodeExpandedMap, "f").get(child.id);
        if (filtering === FilterOption.SHOW || toBeSelected || expanded) {
            filteredChildren.push(child);
        }
        else if (filtering === FilterOption.FLATTEN && (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(child)) {
            const grandChildren = await __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_flattenSubtree).call(this, child, filter);
            filteredChildren.push(...grandChildren);
        }
    }
    return filteredChildren;
}, _TreeOutline_fetchNodeChildren = async function _TreeOutline_fetchNodeChildren(node) {
    const children = await (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.getNodeChildren)(node);
    const filter = __classPrivateFieldGet(this, _TreeOutline_nodeFilter, "f");
    if (!filter) {
        return children;
    }
    const filteredDescendants = await __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_flattenSubtree).call(this, node, filter);
    return filteredDescendants.length ? filteredDescendants : children;
}, _TreeOutline_setNodeExpandedState = function _TreeOutline_setNodeExpandedState(node, newExpandedState) {
    __classPrivateFieldGet(this, _TreeOutline_nodeExpandedMap, "f").set(node.id, newExpandedState);
}, _TreeOutline_nodeIsExpanded = function _TreeOutline_nodeIsExpanded(node) {
    return __classPrivateFieldGet(this, _TreeOutline_nodeExpandedMap, "f").get(node.id) || false;
}, _TreeOutline_expandAndRecurse = async function _TreeOutline_expandAndRecurse(node, currentDepth, maxDepth) {
    if (!(0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node)) {
        return;
    }
    __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_setNodeExpandedState).call(this, node, true);
    if (currentDepth === maxDepth || !(0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node)) {
        return;
    }
    const children = await __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_fetchNodeChildren).call(this, node);
    await Promise.all(children.map(child => __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_expandAndRecurse).call(this, child, currentDepth + 1, maxDepth)));
}, _TreeOutline_onArrowClick = function _TreeOutline_onArrowClick(node) {
    return (event) => {
        event.stopPropagation();
        if ((0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node)) {
            __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_setNodeExpandedState).call(this, node, !__classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_nodeIsExpanded).call(this, node));
            void __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_render).call(this);
        }
    };
}, _TreeOutline_onNodeClick = function _TreeOutline_onNodeClick(event) {
    // Avoid it bubbling up to parent tree elements, else clicking a node deep in the tree will toggle it + all its ancestor's visibility.
    event.stopPropagation();
    const nodeClickExpandsOrContracts = this.getAttribute('clickabletitle') !== null;
    const domNode = event.currentTarget;
    const node = __classPrivateFieldGet(this, _TreeOutline_domNodeToTreeNodeMap, "f").get(domNode);
    if (nodeClickExpandsOrContracts && node && (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node)) {
        __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_setNodeExpandedState).call(this, node, !__classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_nodeIsExpanded).call(this, node));
    }
    void __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_focusTreeNode).call(this, domNode);
}, _TreeOutline_focusTreeNode = async function _TreeOutline_focusTreeNode(domNode) {
    const treeNode = __classPrivateFieldGet(this, _TreeOutline_domNodeToTreeNodeMap, "f").get(domNode);
    if (!treeNode) {
        return;
    }
    __classPrivateFieldSet(this, _TreeOutline_selectedTreeNode, treeNode, "f");
    await __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_render).call(this);
    this.dispatchEvent(new ItemSelectedEvent(treeNode));
    void coordinator.write('DOMNode focus', () => {
        domNode.focus();
    });
}, _TreeOutline_processHomeAndEndKeysNavigation = function _TreeOutline_processHomeAndEndKeysNavigation(key) {
    if (key === 'Home') {
        const firstRootNode = __classPrivateFieldGet(this, _TreeOutline_shadow, "f").querySelector('ul[role="tree"] > li[role="treeitem"]');
        if (firstRootNode) {
            void __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_focusTreeNode).call(this, firstRootNode);
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
        const allTreeItems = __classPrivateFieldGet(this, _TreeOutline_shadow, "f").querySelectorAll('li[role="treeitem"]');
        const lastTreeItem = allTreeItems[allTreeItems.length - 1];
        if (lastTreeItem) {
            void __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_focusTreeNode).call(this, lastTreeItem);
        }
    }
}, _TreeOutline_processArrowKeyNavigation = async function _TreeOutline_processArrowKeyNavigation(key, currentDOMNode) {
    const currentTreeNode = __classPrivateFieldGet(this, _TreeOutline_domNodeToTreeNodeMap, "f").get(currentDOMNode);
    if (!currentTreeNode) {
        return;
    }
    const domNode = (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.findNextNodeForTreeOutlineKeyboardNavigation)({
        currentDOMNode,
        currentTreeNode,
        direction: key,
        setNodeExpandedState: (node, expanded) => __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_setNodeExpandedState).call(this, node, expanded),
    });
    await __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_focusTreeNode).call(this, domNode);
}, _TreeOutline_processEnterOrSpaceNavigation = function _TreeOutline_processEnterOrSpaceNavigation(currentDOMNode) {
    const currentTreeNode = __classPrivateFieldGet(this, _TreeOutline_domNodeToTreeNodeMap, "f").get(currentDOMNode);
    if (!currentTreeNode) {
        return;
    }
    if ((0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(currentTreeNode)) {
        const currentExpandedState = __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_nodeIsExpanded).call(this, currentTreeNode);
        __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_setNodeExpandedState).call(this, currentTreeNode, !currentExpandedState);
        void __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_render).call(this);
    }
}, _TreeOutline_onTreeKeyDown = async function _TreeOutline_onTreeKeyDown(event) {
    if (!(event.target instanceof HTMLLIElement)) {
        throw new Error('event.target was not an <li> element');
    }
    if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault();
        __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_processHomeAndEndKeysNavigation).call(this, event.key);
    }
    else if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.keyIsArrowKey(event.key)) {
        event.preventDefault();
        await __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_processArrowKeyNavigation).call(this, event.key, event.target);
    }
    else if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_processEnterOrSpaceNavigation).call(this, event.target);
    }
}, _TreeOutline_focusPendingNode = function _TreeOutline_focusPendingNode(domNode) {
    __classPrivateFieldSet(this, _TreeOutline_nodeIdPendingFocus, null, "f");
    void __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_focusTreeNode).call(this, domNode);
}, _TreeOutline_isSelectedNode = function _TreeOutline_isSelectedNode(node) {
    if (__classPrivateFieldGet(this, _TreeOutline_selectedTreeNode, "f")) {
        return node.id === __classPrivateFieldGet(this, _TreeOutline_selectedTreeNode, "f").id;
    }
    return false;
}, _TreeOutline_renderNode = function _TreeOutline_renderNode(node, { depth, setSize, positionInSet }) {
    let childrenToRender;
    const nodeIsExpanded = __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_nodeIsExpanded).call(this, node);
    if (!(0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node) || !nodeIsExpanded) {
        childrenToRender = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    else {
        const childNodes = __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_fetchNodeChildren).call(this, node).then(children => {
            return children.map((childNode, index) => {
                return __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_renderNode).call(this, childNode, { depth: depth + 1, setSize: children.length, positionInSet: index });
            });
        });
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        childrenToRender = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `<ul role="group">${_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.until(childNodes)}</ul>`;
        // clang-format on
    }
    const nodeIsFocusable = __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_isSelectedNode).call(this, node);
    const tabIndex = nodeIsFocusable ? 0 : -1;
    const listItemClasses = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.classMap({
        expanded: (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node) && nodeIsExpanded,
        parent: (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node),
        selected: __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_isSelectedNode).call(this, node),
        'is-top-level': depth === 0,
        compact: __classPrivateFieldGet(this, _TreeOutline_compact, "f"),
    });
    const ariaExpandedAttribute = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.ifDefined((0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node) ? String(nodeIsExpanded) : undefined);
    let renderedNodeKey;
    if (node.renderer) {
        renderedNodeKey = node.renderer(node, { isExpanded: nodeIsExpanded });
    }
    else {
        renderedNodeKey = __classPrivateFieldGet(this, _TreeOutline_defaultRenderer, "f").call(this, node, { isExpanded: nodeIsExpanded });
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
        @click=${__classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_onNodeClick)}
        track-dom-node-to-tree-node=${(0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.trackDOMNodeToTreeNode)(__classPrivateFieldGet(this, _TreeOutline_domNodeToTreeNodeMap, "f"), node)}
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
        if (__classPrivateFieldGet(this, _TreeOutline_nodeIdPendingFocus, "f") && node.id === __classPrivateFieldGet(this, _TreeOutline_nodeIdPendingFocus, "f")) {
            __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_focusPendingNode).call(this, domNode);
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
          <span class="arrow-icon" @click=${__classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_onArrowClick).call(this, node)} jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.expand().track({ click: true })}>
          </span>
          <span class="tree-node-key" data-node-key=${node.treeNodeData}>${renderedNodeKey}</span>
        </span>
        ${childrenToRender}
      </li>
    `;
    // clang-format on
}, _TreeOutline_render = async function _TreeOutline_render() {
    if (__classPrivateFieldGet(this, _TreeOutline_scheduledRender, "f")) {
        // If we are already rendering, don't render again immediately, but
        // enqueue it to be run after we're done on our current render.
        __classPrivateFieldSet(this, _TreeOutline_enqueuedRender, true, "f");
        return;
    }
    __classPrivateFieldSet(this, _TreeOutline_scheduledRender, true, "f");
    await coordinator.write('TreeOutline render', () => {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
      <div class="wrapping-container">
        <ul role="tree" @keydown=${__classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_onTreeKeyDown)}>
          ${__classPrivateFieldGet(this, _TreeOutline_treeData, "f").map((topLevelNode, index) => {
            return __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_renderNode).call(this, topLevelNode, {
                depth: 0,
                setSize: __classPrivateFieldGet(this, _TreeOutline_treeData, "f").length,
                positionInSet: index,
            });
        })}
        </ul>
      </div>
      `, __classPrivateFieldGet(this, _TreeOutline_shadow, "f"), {
            host: this,
        });
    });
    // clang-format on
    __classPrivateFieldSet(this, _TreeOutline_hasRenderedAtLeastOnce, true, "f");
    __classPrivateFieldSet(this, _TreeOutline_scheduledRender, false, "f");
    // If render() was called when we were already mid-render, let's re-render
    // to ensure we're not rendering any stale UI.
    if (__classPrivateFieldGet(this, _TreeOutline_enqueuedRender, "f")) {
        __classPrivateFieldSet(this, _TreeOutline_enqueuedRender, false, "f");
        return __classPrivateFieldGet(this, _TreeOutline_instances, "m", _TreeOutline_render).call(this);
    }
};
Object.defineProperty(TreeOutline, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-tree-outline`
});
customElements.define('devtools-tree-outline', TreeOutline);


/***/ })

}]);