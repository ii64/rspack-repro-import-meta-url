"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_ElementsPanel_test_js"],{

/***/ "./panels/elements/ElementsPanel.test.js":
/*!***********************************************!*\
  !*** ./panels/elements/ElementsPanel.test.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements.js */ "./panels/elements/elements.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('ElementsPanel', () => {
    let target;
    beforeEach(() => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stubNoopSettings)();
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register('apca', '');
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('DOM.requestChildNodes', () => ({}));
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('DOM.getDocument', () => ({
            root: {
                nodeId: 1,
                backendNodeId: 2,
                nodeType: Node.DOCUMENT_NODE,
                nodeName: '#document',
                childNodeCount: 1,
                children: [{
                        nodeId: 4,
                        parentId: 1,
                        backendNodeId: 5,
                        nodeType: Node.ELEMENT_NODE,
                        nodeName: 'HTML',
                        childNodeCount: 1,
                        children: [{
                                nodeId: 6,
                                parentId: 4,
                                backendNodeId: 7,
                                nodeType: Node.ELEMENT_NODE,
                                nodeName: 'BODY',
                                childNodeCount: 1,
                            }],
                    }],
            },
        }));
    });
    const createsTreeOutlines = (inScope) => () => {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
        _elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsPanel.ElementsPanel.instance({ forceNew: true });
        const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
        assert.exists(model);
        assert.strictEqual(Boolean(_elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsTreeOutline.ElementsTreeOutline.forDOMModel(model)), inScope);
        const subtraget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ parentTarget: target });
        const submodel = subtraget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
        assert.exists(submodel);
        assert.strictEqual(Boolean(_elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsTreeOutline.ElementsTreeOutline.forDOMModel(model)), inScope);
        subtraget.dispose('');
        assert.isNull(_elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsTreeOutline.ElementsTreeOutline.forDOMModel(submodel));
    };
    it('creates tree outlines for in scope models', createsTreeOutlines(true));
    it('does not create tree outlines for out of scope models', createsTreeOutlines(false));
    it('expands the tree even when target added later', async () => {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(null);
        const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
        assert.exists(model);
        await model.requestDocument();
        const panel = _elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsPanel.ElementsPanel.instance({ forceNew: true });
        panel.markAsRoot();
        panel.show(document.body);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(target);
        const treeOutline = _elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsTreeOutline.ElementsTreeOutline.forDOMModel(model);
        assert.exists(treeOutline);
        const selectedNode = treeOutline.selectedDOMNode();
        assert.exists(selectedNode);
        const selectedTreeElement = treeOutline.findTreeElement(selectedNode);
        assert.exists(selectedTreeElement);
        assert.isTrue(selectedTreeElement.expanded);
        panel.detach();
    });
    it('searches in in scope models', () => {
        const anotherTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(target);
        const inScopeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
        assert.exists(inScopeModel);
        const inScopeSearch = sinon.spy(inScopeModel, 'performSearch');
        const outOfScopeModel = anotherTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
        assert.exists(outOfScopeModel);
        const outOfScopeSearch = sinon.spy(outOfScopeModel, 'performSearch');
        const panel = _elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsPanel.ElementsPanel.instance({ forceNew: true });
        panel.performSearch({ query: 'foo' }, false);
        assert.isTrue(inScopeSearch.called);
        assert.isFalse(outOfScopeSearch.called);
    });
});
//# sourceMappingURL=ElementsPanel.test.js.map

/***/ })

}]);