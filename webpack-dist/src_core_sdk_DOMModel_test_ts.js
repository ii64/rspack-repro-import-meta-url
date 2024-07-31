"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_sdk_DOMModel_test_ts"],{

/***/ "./src/core/sdk/DOMModel.test.ts":
/*!***************************************!*\
  !*** ./src/core/sdk/DOMModel.test.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('DOMModel', () => {
    it('updates the document on an documentUpdate event if there already is a previous document', async () => {
        const parentTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ parentTarget });
        const domModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMModel);
        assert.exists(domModel);
        assert.exists(domModel.agent);
        domModel.setDocumentForTest({ nodeId: 0 });
        const spy = sinon.spy(domModel.agent, 'invoke_getDocument');
        assert.isTrue(spy.notCalled);
        assert.isNotNull(domModel.existingDocument());
        domModel.documentUpdated();
        assert.isTrue(spy.calledOnce);
    });
    it('does not request document if there is not a previous document', async () => {
        const parentTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ parentTarget });
        const domModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMModel);
        assert.exists(domModel);
        assert.exists(domModel.agent);
        domModel.setDocumentForTest(null);
        const spy = sinon.spy(domModel.agent, 'invoke_getDocument');
        assert.isTrue(spy.notCalled);
        assert.isNull(domModel.existingDocument());
        domModel.documentUpdated();
        assert.isTrue(spy.notCalled);
    });
    describe('DOMNode', () => {
        describe('simpleSelector', () => {
            let target;
            let model;
            beforeEach(() => {
                target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                const modelBeforeAssertion = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMModel);
                assert.exists(modelBeforeAssertion);
                model = modelBeforeAssertion;
            });
            afterEach(() => {
                target.dispose('NO_REASON');
            });
            it('should return localName when it\'s not an input, it does not have an idea and does not contain any classes', () => {
                const domNode = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode.create(model, null, false, {
                    nodeId: 1,
                    backendNodeId: 2,
                    nodeType: Node.ELEMENT_NODE,
                    nodeName: 'div',
                    localName: 'div',
                    nodeValue: '',
                });
                assert.strictEqual(domNode.simpleSelector(), 'div');
            });
            it('should return localName with input type if it is an input and does not contain any idea or classes', () => {
                const domNode = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode.create(model, null, false, {
                    nodeId: 1,
                    backendNodeId: 2,
                    nodeType: Node.ELEMENT_NODE,
                    nodeName: 'input',
                    attributes: [
                        'type',
                        'text',
                    ],
                    localName: 'input',
                    nodeValue: '',
                });
                assert.strictEqual(domNode.simpleSelector(), 'input[type="text"]');
            });
            it('should return localName with id if it has an id', () => {
                const domNode = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode.create(model, null, false, {
                    nodeId: 1,
                    backendNodeId: 2,
                    nodeType: Node.ELEMENT_NODE,
                    nodeName: 'input',
                    attributes: [
                        'type',
                        'text',
                        'id',
                        'input-with-id',
                    ],
                    localName: 'input',
                    nodeValue: '',
                });
                assert.strictEqual(domNode.simpleSelector(), 'input#input-with-id');
            });
            it('should return localName with classes appended for an input', () => {
                const domNode = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode.create(model, null, false, {
                    nodeId: 1,
                    backendNodeId: 2,
                    nodeType: Node.ELEMENT_NODE,
                    nodeName: 'input',
                    attributes: [
                        'type',
                        'text',
                        'class',
                        'first-class second-class',
                    ],
                    localName: 'input',
                    nodeValue: '',
                });
                assert.strictEqual(domNode.simpleSelector(), 'input.first-class.second-class');
            });
            it('should return localName with classes appended for a div without mentioning div', () => {
                const domNode = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode.create(model, null, false, {
                    nodeId: 1,
                    backendNodeId: 2,
                    nodeType: Node.ELEMENT_NODE,
                    nodeName: 'div',
                    attributes: [
                        'type',
                        'text',
                        'class',
                        'first-class second-class',
                    ],
                    localName: 'div',
                    nodeValue: '',
                });
                assert.strictEqual(domNode.simpleSelector(), '.first-class.second-class');
            });
            it('should return localName for a pseudo class without pseudo identifier', () => {
                const domNode = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode.create(model, null, false, {
                    nodeId: 1,
                    backendNodeId: 2,
                    nodeType: Node.ELEMENT_NODE,
                    nodeName: '::before',
                    localName: '::before',
                    nodeValue: '',
                });
                assert.strictEqual(domNode.simpleSelector(), '::before');
            });
            it('should return localName for a pseudo class with a pseudo identifier', () => {
                const domNode = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode.create(model, null, false, {
                    nodeId: 1,
                    backendNodeId: 2,
                    nodeType: Node.ELEMENT_NODE,
                    pseudoIdentifier: 'root',
                    nodeName: '::view-transition-new',
                    localName: '::view-transition-new',
                    nodeValue: '',
                });
                assert.strictEqual(domNode.simpleSelector(), '::view-transition-new(root)');
            });
        });
    });
});


/***/ })

}]);