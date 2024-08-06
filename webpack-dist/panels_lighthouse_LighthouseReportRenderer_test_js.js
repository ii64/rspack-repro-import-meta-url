"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_lighthouse_LighthouseReportRenderer_test_js"],{

/***/ "./panels/lighthouse/LighthouseReportRenderer.test.js":
/*!************************************************************!*\
  !*** ./panels/lighthouse/LighthouseReportRenderer.test.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('LighthouseReportRenderer', () => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    let Lighthouse;
    let target;
    let sourceElement;
    let linkElement;
    const PATH = 'TEST_PATH';
    const NODE_ID = 42;
    const NODE = { id: NODE_ID };
    const SNIPPET = 'SNIPPET';
    const LH_NODE_HTML = (path, snippet) => `<div class="lh-node" data-path="${path}" data-snippet="${snippet}"></div>`;
    beforeEach(async () => {
        Lighthouse = await Promise.all(/*! import() */[__webpack_require__.e("panels_emulation_DeviceModeToolbar_js"), __webpack_require__.e("panels_emulation_MediaQueryInspector_js"), __webpack_require__.e("panels_emulation_DeviceModeView_js"), __webpack_require__.e("panels_emulation_AdvancedApp_js"), __webpack_require__.e("third_party_lighthouse_report_bundle_js"), __webpack_require__.e("panels_lighthouse_LighthouseController_js"), __webpack_require__.e("panels_lighthouse_LighthouseStatusView_js"), __webpack_require__.e("panels_lighthouse_LighthouseStartView_js"), __webpack_require__.e("panels_lighthouse_LighthouseProtocolService_js"), __webpack_require__.e("third_party_lighthouse_report-assets_report-generator_mjs"), __webpack_require__.e("panels_lighthouse_LighthousePanel_js"), __webpack_require__.e("panels_lighthouse_lighthouse_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./lighthouse.js */ "./panels/lighthouse/lighthouse.js"));
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ parentTarget: tabTarget });
        linkElement = document.createElement('div');
        linkElement.textContent = 'link';
        sourceElement = document.createElement('div');
    });
    it('resolves node and calls linkifier', async () => {
        sourceElement.innerHTML = LH_NODE_HTML(PATH, SNIPPET);
        const domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
        assert.exists(domModel);
        sinon.stub(domModel, 'pushNodeByPathToFrontend').withArgs(PATH).returns(Promise.resolve(NODE_ID));
        sinon.stub(domModel, 'nodeForId').withArgs(NODE_ID).returns(NODE);
        sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier, 'linkify')
            .withArgs(NODE, { tooltip: SNIPPET, preventKeyboardFocus: undefined })
            .returns(Promise.resolve(linkElement));
        await Lighthouse.LighthouseReportRenderer.LighthouseReportRenderer.linkifyNodeDetails(sourceElement);
        assert.include([...sourceElement.firstChild?.childNodes || []], linkElement);
    });
    it('handles multiple nodes', async () => {
        const domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
        assert.exists(domModel);
        const pushNodeByPathToFrontend = sinon.stub(domModel, 'pushNodeByPathToFrontend');
        const nodeForId = sinon.stub(domModel, 'nodeForId');
        const linkify = sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier, 'linkify');
        const NUM_NODES = 3;
        for (let i = 1; i <= NUM_NODES; ++i) {
            sourceElement.innerHTML += LH_NODE_HTML(PATH + i, SNIPPET + i);
            const nodeId = i;
            const node = { id: nodeId };
            pushNodeByPathToFrontend.withArgs(PATH + i).returns(Promise.resolve(nodeId));
            nodeForId.withArgs(nodeId).returns(node);
            linkify.withArgs(node, { tooltip: SNIPPET + i, preventKeyboardFocus: undefined })
                .returns(Promise.resolve(document.createTextNode(`link${i}`)));
        }
        await Lighthouse.LighthouseReportRenderer.LighthouseReportRenderer.linkifyNodeDetails(sourceElement);
        assert.strictEqual(sourceElement.childNodes.length, NUM_NODES);
        assert.deepStrictEqual([...sourceElement.childNodes].map(n => n.textContent), ['link1', 'link2', 'link3']);
    });
    it('resets tooltip', async () => {
        sourceElement.innerHTML = LH_NODE_HTML(PATH, SNIPPET);
        const domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
        assert.exists(domModel);
        sinon.stub(domModel, 'pushNodeByPathToFrontend').returns(Promise.resolve(NODE_ID));
        sinon.stub(domModel, 'nodeForId').returns(NODE);
        sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier, 'linkify').returns(Promise.resolve(linkElement));
        const installTooltip = sinon.spy(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip, 'install');
        await Lighthouse.LighthouseReportRenderer.LighthouseReportRenderer.linkifyNodeDetails(sourceElement);
        assert.isTrue(installTooltip.calledOnceWith(sourceElement.firstChild, ''));
    });
    it('only keeps link and screenshot', async () => {
        sourceElement.innerHTML = LH_NODE_HTML(PATH, SNIPPET);
        assert.exists(sourceElement.firstElementChild);
        sourceElement.firstElementChild.innerHTML = 'foo<div class="lh-element-screenshot"></div>bar';
        const domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
        assert.exists(domModel);
        sinon.stub(domModel, 'pushNodeByPathToFrontend').returns(Promise.resolve(NODE_ID));
        sinon.stub(domModel, 'nodeForId').returns(NODE);
        sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier, 'linkify').returns(Promise.resolve(linkElement));
        await Lighthouse.LighthouseReportRenderer.LighthouseReportRenderer.linkifyNodeDetails(sourceElement);
        assert.strictEqual(sourceElement.firstElementChild.innerHTML, '<div class="lh-element-screenshot"></div><div>link</div>');
    });
    it('skips malformed nodes', async () => {
        const originalHtml = [
            LH_NODE_HTML('', SNIPPET),
            LH_NODE_HTML('UNKNOWN_PATH', SNIPPET),
            LH_NODE_HTML('PATH_WIHTOUT_NODE', SNIPPET),
        ].join('');
        const domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
        assert.exists(domModel);
        sinon.stub(domModel, 'pushNodeByPathToFrontend').withArgs('PATH_WIHTOUT_NODE').returns(Promise.resolve(NODE_ID));
        sourceElement.innerHTML = originalHtml;
        await Lighthouse.LighthouseReportRenderer.LighthouseReportRenderer.linkifyNodeDetails(sourceElement);
        assert.strictEqual(sourceElement.innerHTML, originalHtml);
    });
});
//# sourceMappingURL=LighthouseReportRenderer.test.js.map

/***/ })

}]);