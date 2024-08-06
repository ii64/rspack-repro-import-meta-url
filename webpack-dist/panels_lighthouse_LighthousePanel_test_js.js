"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_lighthouse_LighthousePanel_test_js"],{

/***/ "./panels/lighthouse/LighthousePanel.test.js":
/*!***************************************************!*\
  !*** ./panels/lighthouse/LighthousePanel.test.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('LighthousePanel', () => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    let Lighthouse;
    let target;
    let resourceTreeModelNavigate;
    let protocolService;
    let controller;
    const URL = 'http://example.com';
    const LH_REPORT = {
        lhr: {
            finalDisplayedUrl: URL,
            configSettings: {},
            audits: {},
            categories: { _: { auditRefs: [], id: '' } },
            lighthouseVersion: '',
            userAgent: '',
            fetchTime: 0,
            environment: { benchmarkIndex: 0 },
            i18n: { rendererFormattedStrings: {} },
        },
    };
    beforeEach(async () => {
        Lighthouse = await Promise.all(/*! import() */[__webpack_require__.e("panels_emulation_DeviceModeToolbar_js"), __webpack_require__.e("panels_emulation_MediaQueryInspector_js"), __webpack_require__.e("panels_emulation_DeviceModeView_js"), __webpack_require__.e("panels_emulation_AdvancedApp_js"), __webpack_require__.e("third_party_lighthouse_report_bundle_js"), __webpack_require__.e("panels_lighthouse_LighthouseController_js"), __webpack_require__.e("panels_lighthouse_LighthouseStatusView_js"), __webpack_require__.e("panels_lighthouse_LighthouseStartView_js"), __webpack_require__.e("panels_lighthouse_LighthouseProtocolService_js"), __webpack_require__.e("third_party_lighthouse_report-assets_report-generator_mjs"), __webpack_require__.e("panels_lighthouse_LighthousePanel_js"), __webpack_require__.e("panels_lighthouse_lighthouse_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./lighthouse.js */ "./panels/lighthouse/lighthouse.js"));
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget });
        sinon.stub(target.pageAgent(), 'invoke_getNavigationHistory').resolves({
            currentIndex: 0,
            entries: [{ url: URL }],
            getError: () => null,
        });
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel);
        assert.exists(resourceTreeModel);
        resourceTreeModelNavigate = sinon.stub(resourceTreeModel, 'navigate').resolves();
        sinon.stub(resourceTreeModel, 'addEventListener')
            .callThrough()
            .withArgs(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.Events.Load, sinon.match.any)
            .callsArgWithAsync(1, { resourceTreeModel, loadTime: 0 })
            .returns({});
        protocolService = new Lighthouse.LighthouseProtocolService.ProtocolService();
        sinon.stub(protocolService, 'attach').resolves();
        sinon.stub(protocolService, 'detach').resolves();
        sinon.stub(protocolService, 'collectLighthouseResults').resolves(LH_REPORT);
        controller = new Lighthouse.LighthouseController.LighthouseController(protocolService);
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.stubNoopSettings)();
    });
    // Failing due to StartView not finding settings title.
    it.skip('[crbug.com/326214132] restores the original URL when done', async () => {
        const instance = Lighthouse.LighthousePanel.LighthousePanel.instance({ forceNew: true, protocolService, controller });
        void instance.handleCompleteRun();
        await new Promise(resolve => resourceTreeModelNavigate.withArgs(URL).callsFake(() => {
            resolve();
            return Promise.resolve();
        }));
    });
    // Failing due to StartView not finding settings title.
    it.skip('[crbug.com/326214132] waits for main taget to load before linkifying', async () => {
        const instance = Lighthouse.LighthousePanel.LighthousePanel.instance({ forceNew: true, protocolService, controller });
        void instance.handleCompleteRun();
        await new Promise(resolve => sinon.stub(Lighthouse.LighthouseReportRenderer.LighthouseReportRenderer, 'linkifyNodeDetails')
            .callsFake((_) => {
            resolve();
            return Promise.resolve();
        }));
    });
});
//# sourceMappingURL=LighthousePanel.test.js.map

/***/ })

}]);