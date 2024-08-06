"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_AccessibilityTreeUtils_js"],{

/***/ "./panels/elements/AccessibilityTreeUtils.js":
/*!***************************************************!*\
  !*** ./panels/elements/AccessibilityTreeUtils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accessibilityNodeRenderer: () => (/* binding */ accessibilityNodeRenderer),
/* harmony export */   getNodeAndAncestorsFromDOMNode: () => (/* binding */ getNodeAndAncestorsFromDOMNode),
/* harmony export */   getNodeId: () => (/* binding */ getNodeId),
/* harmony export */   getRootNode: () => (/* binding */ getRootNode),
/* harmony export */   sdkNodeToAXTreeNodes: () => (/* binding */ sdkNodeToAXTreeNodes)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/components.js */ "./panels/elements/components/components.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
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
//# sourceMappingURL=AccessibilityTreeUtils.js.map

/***/ })

}]);