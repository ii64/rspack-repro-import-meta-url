"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_DOMLinkifier_test_js"],{

/***/ "./panels/elements/DOMLinkifier.test.js":
/*!**********************************************!*\
  !*** ./panels/elements/DOMLinkifier.test.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.js */ "./panels/elements/elements.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('DOMLinkifier', () => {
    describe('linking view transition pseudo nodes', () => {
        let viewTransitionNode;
        beforeEach(() => {
            viewTransitionNode = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode, {
                nodeType: Node.ELEMENT_NODE,
                pseudoType: "view-transition-group" /* Protocol.DOM.PseudoType.ViewTransitionGroup */,
                localName: '::view-transition-group',
                nodeName: '::view-transition-group',
                pseudoIdentifier: 'root',
                shadowRootType: null,
                nodeNameInCorrectCase: '::view-transition-group',
            });
            viewTransitionNode.isViewTransitionPseudoNode.returns(true);
        });
        it('includes pseudo identifier in the label', () => {
            const domLinkifier = _elements_js__WEBPACK_IMPORTED_MODULE_1__.DOMLinkifier.Linkifier.instance({ forceNew: true });
            const el = domLinkifier.linkify(viewTransitionNode);
            const pseudoLabel = el.shadowRoot?.querySelector('.node-label-pseudo')?.textContent;
            assert.strictEqual(pseudoLabel, '::view-transition-group(root)');
        });
        it('does not include ancestor name for a view transition pseudo', () => {
            const domLinkifier = _elements_js__WEBPACK_IMPORTED_MODULE_1__.DOMLinkifier.Linkifier.instance({ forceNew: true });
            const el = domLinkifier.linkify(viewTransitionNode);
            const nodeLabel = el.shadowRoot?.querySelector('.node-label-name');
            assert.isNull(nodeLabel);
        });
    });
    it('can linkify DOM node with text content correctly', () => {
        const domLinkifier = _elements_js__WEBPACK_IMPORTED_MODULE_1__.DOMLinkifier.Linkifier.instance({ forceNew: true });
        const node = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode, {
            nodeType: Node.ELEMENT_NODE,
        });
        const el = domLinkifier.linkify(node, {
            textContent: 'sample content',
        });
        assert.strictEqual(el.shadowRoot?.querySelector('button')?.textContent, 'sample content');
    });
});
//# sourceMappingURL=DOMLinkifier.test.js.map

/***/ })

}]);