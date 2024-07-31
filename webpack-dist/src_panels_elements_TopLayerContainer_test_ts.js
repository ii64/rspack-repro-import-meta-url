"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_TopLayerContainer_test_ts"],{

/***/ "./src/panels/elements/TopLayerContainer.test.ts":
/*!*******************************************************!*\
  !*** ./src/panels/elements/TopLayerContainer.test.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/adorners/adorners.js */ "./src/ui/components/adorners/adorners.ts");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements.js */ "./src/panels/elements/elements.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const stubTopLayerDOMNode = (nodeName, backendNodeId, ownerDocument) => {
    return {
        nodeName: () => nodeName,
        backendNodeId: () => backendNodeId,
        ownerDocument,
    };
};
const stubElementsTreeElement = () => {
    return {
        adorn: (_unused) => new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_2__.Adorner.Adorner(),
    };
};
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('TopLayerContainer', () => {
    it('should update top layer elements correctly', async () => {
        const stubDocument = {};
        const topLayerDOMNode1 = stubTopLayerDOMNode('dialog', 1, stubDocument);
        const topLayerDOMNode2 = stubTopLayerDOMNode('div', 2, stubDocument);
        const domModel = {
            target: () => (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)(),
            getTopLayerElements: async () => Promise.resolve([1, 2]),
            idToDOMNode: new Map([
                [1, topLayerDOMNode1],
                [2, topLayerDOMNode2],
            ]),
        };
        stubDocument.domModel = () => domModel;
        const topLayerTreeNode1 = stubElementsTreeElement();
        const topLayerTreeNode2 = stubElementsTreeElement();
        const tree = {
            treeElementByNode: new WeakMap([
                [topLayerDOMNode1, topLayerTreeNode1],
                [topLayerDOMNode2, topLayerTreeNode2],
            ]),
        };
        const topLayerContainer = new _elements_js__WEBPACK_IMPORTED_MODULE_3__.TopLayerContainer.TopLayerContainer(tree, stubDocument);
        await topLayerContainer.updateTopLayerElements();
        assert.strictEqual(topLayerContainer.currentTopLayerDOMNodes.size, 2);
    });
});


/***/ })

}]);