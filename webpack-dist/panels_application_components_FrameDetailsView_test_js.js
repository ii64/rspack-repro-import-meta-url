"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_components_FrameDetailsView_test_js"],{

/***/ "./panels/application/components/FrameDetailsView.test.js":
/*!****************************************************************!*\
  !*** ./panels/application/components/FrameDetailsView.test.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/expandable_list/expandable_list.js */ "./ui/components/expandable_list/expandable_list.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components.js */ "./panels/application/components/components.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__.RenderCoordinator.RenderCoordinator.instance();
const makeFrame = (target) => {
    const newFrame = {
        url: 'https://www.example.com/path/page.html',
        securityOrigin: 'https://www.example.com',
        displayName: () => 'TestTitle',
        unreachableUrl: () => '',
        adFrameType: () => "none" /* Protocol.Page.AdFrameType.None */,
        adFrameStatus: () => undefined,
        getAdScriptId: () => '1',
        resourceForURL: () => null,
        isSecureContext: () => true,
        isCrossOriginIsolated: () => true,
        getCrossOriginIsolatedContextType: () => "NotIsolatedFeatureDisabled" /* Protocol.Page.CrossOriginIsolatedContextType.NotIsolatedFeatureDisabled */,
        getSecureContextType: () => "SecureLocalhost" /* Protocol.Page.SecureContextType.SecureLocalhost */,
        getGatedAPIFeatures: () => ["SharedArrayBuffers" /* Protocol.Page.GatedAPIFeatures.SharedArrayBuffers */,
            "SharedArrayBuffersTransferAllowed" /* Protocol.Page.GatedAPIFeatures.SharedArrayBuffersTransferAllowed */],
        getOwnerDOMNodeOrDocument: () => ({
            nodeName: () => 'iframe',
        }),
        resourceTreeModel: () => target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel),
        getCreationStackTraceData: () => ({
            creationStackTrace: {
                callFrames: [{
                        functionName: 'function1',
                        url: 'http://www.example.com/script.js',
                        lineNumber: 15,
                        columnNumber: 10,
                        scriptId: 'someScriptId',
                    }],
            },
            creationStackTraceTarget: null,
        }),
        getOriginTrials: async () => ([
            {
                trialName: 'AppCache',
                status: 'Enabled',
                tokensWithStatus: [{
                        status: 'Success',
                        rawTokenText: 'Text',
                        parsedToken: {
                            trialName: 'AppCache',
                            origin: 'https://foo.com',
                            expiryTime: 1000,
                            usageRestriction: 'None',
                            isThirdParty: false,
                            matchSubDomains: false,
                        },
                    }],
            },
        ]),
        getPermissionsPolicyState: () => null,
        parentFrame: () => null,
    };
    return newFrame;
};
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithMockConnection)('FrameDetailsView', () => {
    it('renders with a title', async () => {
        const frame = makeFrame((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)());
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_9__.FrameDetailsView.FrameDetailsReportView(frame);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.renderElementIntoDOM)(component);
        assert.isNotNull(component.shadowRoot);
        void component.render();
        await coordinator.done({ waitForWork: true });
        const report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementWithinComponent)(component, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.Report);
        const titleElement = report.shadowRoot.querySelector('.report-title');
        assert.strictEqual(titleElement?.textContent, frame.displayName());
    });
    it('renders report keys and values', async () => {
        const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl.instance({ forceNew: true });
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping: new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace),
            targetManager,
        });
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)();
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.DebuggerModel);
        assert.exists(debuggerModel);
        sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.DebuggerModel, 'modelForDebuggerId').resolves(debuggerModel);
        const frame = makeFrame(target);
        frame.adFrameType = () => "root" /* Protocol.Page.AdFrameType.Root */;
        frame.parentFrame = () => ({
            getAdScriptId: () => ({
                scriptId: 'scriptId',
                debuggerId: '42',
            }),
        });
        const networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.NetworkManager);
        assert.exists(networkManager);
        sinon.stub(networkManager, 'getSecurityIsolationStatus').resolves({
            coep: {
                value: "None" /* Protocol.Network.CrossOriginEmbedderPolicyValue.None */,
                reportOnlyValue: "None" /* Protocol.Network.CrossOriginEmbedderPolicyValue.None */,
            },
            coop: {
                value: "SameOrigin" /* Protocol.Network.CrossOriginOpenerPolicyValue.SameOrigin */,
                reportOnlyValue: "SameOrigin" /* Protocol.Network.CrossOriginOpenerPolicyValue.SameOrigin */,
            },
            csp: [{
                    source: "HTTP" /* Protocol.Network.ContentSecurityPolicySource.HTTP */,
                    isEnforced: true,
                    effectiveDirectives: 'base-uri \'self\'; object-src \'none\'; script-src \'strict-dynamic\' \'unsafe-inline\' https: http: \'nonce-GsVjHiIoejpPhMPOHDQZ90yc9eJn1s\' \'unsafe-eval\'; report-uri https://www.example.com/csp',
                }],
        });
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_9__.FrameDetailsView.FrameDetailsReportView(frame);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.renderElementIntoDOM)(component);
        assert.isNotNull(component.shadowRoot);
        await component.render();
        await coordinator.done({ waitForWork: true });
        const keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-key');
        assert.deepEqual(keys, [
            'URL',
            'Origin',
            'Owner Element',
            'Frame Creation Stack Trace',
            'Ad Status',
            'Creator Ad Script',
            'Secure Context',
            'Cross-Origin Isolated',
            'Cross-Origin Embedder Policy (COEP)',
            'Cross-Origin Opener Policy (COOP)',
            'Content-Security-Policy',
            'SharedArrayBuffers',
            'Measure Memory',
        ]);
        const values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-value');
        assert.deepEqual(values, [
            'https://www.example.com/path/page.html',
            'https://www.example.com',
            '<iframe>',
            '',
            '',
            '',
            'Yes\xA0Localhost is always a secure context',
            'Yes',
            'None',
            'SameOrigin',
            'HTTP headerbase-uri: \'self\'object-src: \'none\'script-src: \'strict-dynamic\', \'unsafe-inline\', https:, http:, \'nonce-GsVjHiIoejpPhMPOHDQZ90yc9eJn1s\', \'unsafe-eval\'report-uri: https://www.example.com/csp',
            'available, transferable',
            'available\xA0Learn more',
        ]);
        const stackTrace = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementWithinComponent)(component, 'devtools-resources-stack-trace', _components_js__WEBPACK_IMPORTED_MODULE_9__.StackTrace.StackTrace);
        assert.isNotNull(stackTrace.shadowRoot);
        const expandableList = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementWithinComponent)(stackTrace, 'devtools-expandable-list', _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_6__.ExpandableList.ExpandableList);
        assert.isNotNull(expandableList.shadowRoot);
        const stackTraceRows = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(expandableList, 'devtools-stack-trace-row', _components_js__WEBPACK_IMPORTED_MODULE_9__.StackTrace.StackTraceRow);
        let stackTraceText = [];
        stackTraceRows.forEach(row => {
            assert.isNotNull(row.shadowRoot);
            stackTraceText = stackTraceText.concat((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getCleanTextContentFromElements)(row.shadowRoot, '.stack-trace-row'));
        });
        assert.deepEqual(stackTraceText[0], 'function1\xA0@\xA0www.example.com/script.js:16');
        const adScriptLink = component.shadowRoot.querySelector('devtools-report-value.ad-script-link');
        assert.exists(adScriptLink);
        assert.strictEqual(adScriptLink.textContent, '');
    });
});
//# sourceMappingURL=FrameDetailsView.test.js.map

/***/ })

}]);