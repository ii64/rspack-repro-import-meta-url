"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_preloading_components_UsedPreloadingView_test_js-ui_components_chrome_link-4f3cff"],{

/***/ "./panels/application/preloading/components/UsedPreloadingView.test.js":
/*!*****************************************************************************!*\
  !*** ./panels/application/preloading/components/UsedPreloadingView.test.js ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/DataGridHelpers.js */ "./testing/DataGridHelpers.js");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components.js */ "./panels/application/preloading/components/components.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_js__WEBPACK_IMPORTED_MODULE_6__]);
_components_js__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__.RenderCoordinator.RenderCoordinator.instance();
async function renderUsedPreloadingView(data) {
    const component = new _components_js__WEBPACK_IMPORTED_MODULE_6__.UsedPreloadingView.UsedPreloadingView();
    component.data = data;
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
    assert.isNotNull(component.shadowRoot);
    await coordinator.done();
    return component;
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('UsedPreloadingView', () => {
    it('renderes prefetch used', async () => {
        const data = {
            pageURL: 'https://example.com/prefetched.html',
            previousAttempts: [
                {
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                        url: 'https://example.com/prefetched.html',
                    },
                    status: "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                        url: 'https://example.com/prerendered.html',
                    },
                    status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */,
                    prerenderStatus: "TriggerDestroyed" /* Protocol.Preload.PrerenderFinalStatus.TriggerDestroyed */,
                    disallowedMojoInterface: null,
                    mismatchedHeaders: null,
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            ],
            currentAttempts: [],
        };
        const component = await renderUsedPreloadingView(data);
        assert.isNotNull(component.shadowRoot);
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
        assert.strictEqual(headers.length, 2);
        assert.strictEqual(sections.length, 3);
        assert.include(headers[0]?.textContent, 'Speculative loading status');
        assert.strictEqual(sections[0]?.querySelector('.status-badge span')?.textContent?.trim(), 'Success');
        assert.include(sections[0]?.textContent, 'This page was successfully prefetched.');
        assert.include(headers[1]?.textContent, 'Speculations initiated by this page');
        const badges = sections[1]?.querySelectorAll('.status-badge span') || [];
        assert.strictEqual(badges.length, 1);
        assert.strictEqual(badges[0]?.textContent?.trim(), 'No speculative loads');
        assert.include(sections[2]?.textContent, 'Learn more: Speculative loading on developer.chrome.com');
    });
    it('renderes prerender used', async () => {
        const data = {
            pageURL: 'https://example.com/prerendered.html',
            previousAttempts: [
                {
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                        url: 'https://example.com/prefetched.html',
                    },
                    status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                        url: 'https://example.com/prerendered.html',
                    },
                    status: "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */,
                    prerenderStatus: null,
                    disallowedMojoInterface: null,
                    mismatchedHeaders: null,
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            ],
            currentAttempts: [],
        };
        const component = await renderUsedPreloadingView(data);
        assert.isNotNull(component.shadowRoot);
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
        assert.strictEqual(headers.length, 2);
        assert.strictEqual(sections.length, 3);
        assert.include(headers[0]?.textContent, 'Speculative loading status');
        assert.strictEqual(sections[0]?.querySelector('.status-badge span')?.textContent?.trim(), 'Success');
        assert.include(sections[0]?.textContent, 'This page was successfully prerendered.');
        assert.include(headers[1]?.textContent, 'Speculations initiated by this page');
        const badges = sections[1]?.querySelectorAll('.status-badge span') || [];
        assert.strictEqual(badges.length, 1);
        assert.strictEqual(badges[0]?.textContent?.trim(), 'No speculative loads');
        assert.include(sections[2]?.textContent, 'Learn more: Speculative loading on developer.chrome.com');
    });
    it('renderes prefetch failed', async () => {
        const data = {
            pageURL: 'https://example.com/prefetched.html',
            previousAttempts: [
                {
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                        url: 'https://example.com/prefetched.html',
                    },
                    status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */,
                    prefetchStatus: "PrefetchFailedPerPageLimitExceeded" /* Protocol.Preload.PrefetchStatus.PrefetchFailedPerPageLimitExceeded */,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                        url: 'https://example.com/prerendered.html',
                    },
                    status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */,
                    prerenderStatus: "TriggerDestroyed" /* Protocol.Preload.PrerenderFinalStatus.TriggerDestroyed */,
                    disallowedMojoInterface: null,
                    mismatchedHeaders: null,
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            ],
            currentAttempts: [],
        };
        const component = await renderUsedPreloadingView(data);
        assert.isNotNull(component.shadowRoot);
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
        assert.strictEqual(headers.length, 3);
        assert.strictEqual(sections.length, 4);
        assert.include(headers[0]?.textContent, 'Speculative loading status');
        assert.strictEqual(sections[0]?.querySelector('.status-badge span')?.textContent?.trim(), 'Failure');
        assert.include(sections[0]?.textContent, 'The initiating page attempted to prefetch this page\'s URL, but the prefetch failed, so a full navigation was performed instead.');
        assert.include(headers[1]?.textContent, 'Failure reason');
        assert.include(sections[1]?.textContent, 'The prefetch was not performed because the initiating page already has too many prefetches ongoing.');
        assert.include(headers[2]?.textContent, 'Speculations initiated by this page');
        const badges = sections[2]?.querySelectorAll('.status-badge span') || [];
        assert.strictEqual(badges.length, 1);
        assert.strictEqual(badges[0]?.textContent?.trim(), 'No speculative loads');
        assert.include(sections[3]?.textContent, 'Learn more: Speculative loading on developer.chrome.com');
    });
    it('renderes prerender failed', async () => {
        const data = {
            pageURL: 'https://example.com/prerendered.html',
            previousAttempts: [
                {
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                        url: 'https://example.com/prefetched.html',
                    },
                    status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                        url: 'https://example.com/prerendered.html',
                    },
                    status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */,
                    prerenderStatus: "MojoBinderPolicy" /* Protocol.Preload.PrerenderFinalStatus.MojoBinderPolicy */,
                    disallowedMojoInterface: 'device.mojom.GamepadMonitor',
                    mismatchedHeaders: null,
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            ],
            currentAttempts: [],
        };
        const component = await renderUsedPreloadingView(data);
        assert.isNotNull(component.shadowRoot);
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
        assert.strictEqual(headers.length, 3);
        assert.strictEqual(sections.length, 4);
        assert.include(headers[0]?.textContent, 'Speculative loading status');
        assert.strictEqual(sections[0]?.querySelector('.status-badge span')?.textContent?.trim(), 'Failure');
        assert.include(sections[0]?.textContent, 'The initiating page attempted to prerender this page\'s URL, but the prerender failed, so a full navigation was performed instead.');
        assert.include(headers[1]?.textContent, 'Failure reason');
        assert.include(sections[1]?.textContent, 'The prerendered page used a forbidden JavaScript API that is currently not supported. (Internal Mojo interface: device.mojom.GamepadMonitor)');
        assert.include(headers[2]?.textContent, 'Speculations initiated by this page');
        const badges = sections[2]?.querySelectorAll('.status-badge span') || [];
        assert.strictEqual(badges.length, 1);
        assert.strictEqual(badges[0]?.textContent?.trim(), 'No speculative loads');
        assert.include(sections[3]?.textContent, 'Learn more: Speculative loading on developer.chrome.com');
    });
    it('renderes prerender failed due to header mismatch', async () => {
        const data = {
            pageURL: 'https://example.com/prerendered.html',
            previousAttempts: [
                {
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                        url: 'https://example.com/prefetched.html',
                    },
                    status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                        url: 'https://example.com/prerendered.html',
                    },
                    status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */,
                    prerenderStatus: "ActivationNavigationParameterMismatch" /* Protocol.Preload.PrerenderFinalStatus.ActivationNavigationParameterMismatch */,
                    disallowedMojoInterface: null,
                    mismatchedHeaders: [
                        {
                            headerName: 'sec-ch-ua-platform',
                            initialValue: 'Linux',
                            activationValue: 'Android',
                        },
                        {
                            headerName: 'sec-ch-ua-mobile',
                            initialValue: '?0',
                            activationValue: '?1',
                        },
                    ],
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            ],
            currentAttempts: [],
        };
        const component = await renderUsedPreloadingView(data);
        assert.isNotNull(component.shadowRoot);
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
        const grid = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(component, 'devtools-resources-preloading-mismatched-headers-grid', _components_js__WEBPACK_IMPORTED_MODULE_6__.PreloadingMismatchedHeadersGrid.PreloadingMismatchedHeadersGrid);
        assert.strictEqual(headers.length, 4);
        assert.strictEqual(sections.length, 5);
        assert.include(headers[0]?.textContent, 'Speculative loading status');
        assert.include(sections[0]?.textContent, 'The initiating page attempted to prerender this page\'s URL, but the prerender failed, so a full navigation was performed instead.');
        assert.include(headers[1]?.textContent, 'Failure reason');
        assert.include(sections[1]?.textContent, 'The prerender was not used because during activation time, different navigation parameters (e.g., HTTP headers) were calculated than during the original prerendering navigation request.');
        assert.include(headers[2]?.textContent, 'Mismatched HTTP request headers');
        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(grid, ['Header name', 'Value in initial navigation', 'Value in activation navigation'], [
            ['sec-ch-ua-platform', 'Linux', 'Android'],
            ['sec-ch-ua-mobile', '?0', '?1'],
        ]);
        assert.include(headers[3]?.textContent, 'Speculations initiated by this page');
        const badges = sections[3]?.querySelectorAll('.status-badge span') || [];
        assert.strictEqual(badges.length, 1);
        assert.strictEqual(badges[0]?.textContent?.trim(), 'No speculative loads');
        assert.include(sections[4]?.textContent, 'Learn more: Speculative loading on developer.chrome.com');
    });
    it('renderes prerender -> prefetch downgraded and used', async () => {
        const data = {
            pageURL: 'https://example.com/downgraded.html',
            previousAttempts: [
                {
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                        url: 'https://example.com/downgraded.html',
                    },
                    status: "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                        url: 'https://example.com/downgraded.html',
                    },
                    status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */,
                    prerenderStatus: "MojoBinderPolicy" /* Protocol.Preload.PrerenderFinalStatus.MojoBinderPolicy */,
                    disallowedMojoInterface: 'device.mojom.GamepadMonitor',
                    mismatchedHeaders: null,
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            ],
            currentAttempts: [],
        };
        const component = await renderUsedPreloadingView(data);
        assert.isNotNull(component.shadowRoot);
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
        assert.strictEqual(headers.length, 3);
        assert.strictEqual(sections.length, 4);
        assert.include(headers[0]?.textContent, 'Speculative loading status');
        assert.strictEqual(sections[0]?.querySelector('.status-badge span')?.textContent?.trim(), 'Success');
        assert.include(sections[0]?.textContent, 'The initiating page attempted to prerender this page\'s URL. The prerender failed, but the resulting response body was still used as a prefetch.');
        assert.include(headers[1]?.textContent, 'Failure reason');
        assert.include(sections[1]?.textContent, 'The prerendered page used a forbidden JavaScript API that is currently not supported. (Internal Mojo interface: device.mojom.GamepadMonitor)');
        assert.include(headers[2]?.textContent, 'Speculations initiated by this page');
        const badges = sections[2]?.querySelectorAll('.status-badge span') || [];
        assert.strictEqual(badges.length, 1);
        assert.strictEqual(badges[0]?.textContent?.trim(), 'No speculative loads');
        assert.include(sections[3]?.textContent, 'Learn more: Speculative loading on developer.chrome.com');
    });
    it('renders no preloading attempts used', async () => {
        const data = {
            pageURL: 'https://example.com/no-preloads.html',
            previousAttempts: [],
            currentAttempts: [],
        };
        const component = await renderUsedPreloadingView(data);
        assert.isNotNull(component.shadowRoot);
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
        assert.strictEqual(headers.length, 2);
        assert.strictEqual(sections.length, 3);
        assert.include(headers[0]?.textContent, 'Speculative loading status');
        assert.strictEqual(sections[0]?.querySelector('.status-badge span')?.textContent?.trim(), 'No speculative loads');
        assert.include(sections[0]?.textContent, 'The initiating page did not attempt to speculatively load this page\'s URL.');
        assert.include(headers[1]?.textContent, 'Speculations initiated by this page');
        const badges = sections[1]?.querySelectorAll('.status-badge span') || [];
        assert.strictEqual(badges.length, 1);
        assert.strictEqual(badges[0]?.textContent?.trim(), 'No speculative loads');
        assert.include(sections[2]?.textContent, 'Learn more: Speculative loading on developer.chrome.com');
    });
    it('ignores hash part of URL for prefetch', async () => {
        const data = {
            pageURL: 'https://example.com/prefetched.html#alpha',
            previousAttempts: [
                {
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                        url: 'https://example.com/prefetched.html#beta',
                    },
                    status: "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            ],
            currentAttempts: [],
        };
        const component = await renderUsedPreloadingView(data);
        assert.isNotNull(component.shadowRoot);
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
        assert.strictEqual(headers.length, 2);
        assert.strictEqual(sections.length, 3);
        assert.include(headers[0]?.textContent, 'Speculative loading status');
        assert.strictEqual(sections[0]?.querySelector('.status-badge span')?.textContent?.trim(), 'Success');
        assert.include(sections[0]?.textContent, 'This page was successfully prefetched.');
        assert.include(headers[1]?.textContent, 'Speculations initiated by this page');
        const badges = sections[1]?.querySelectorAll('.status-badge span') || [];
        assert.strictEqual(badges.length, 1);
        assert.strictEqual(badges[0]?.textContent?.trim(), 'No speculative loads');
        assert.include(sections[2]?.textContent, 'Learn more: Speculative loading on developer.chrome.com');
    });
    it('doesn\'t ignore hash part of URL for prerender', async () => {
        // Prerender uses more strict URL matcher and distinguish URLs by fragments.
        const data = {
            pageURL: 'https://example.com/prerendered.html#alpha',
            previousAttempts: [
                {
                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                        url: 'https://example.com/prerendered.html#beta',
                    },
                    status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */,
                    prerenderStatus: null,
                    disallowedMojoInterface: null,
                    mismatchedHeaders: null,
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            ],
            currentAttempts: [],
        };
        const component = await renderUsedPreloadingView(data);
        assert.isNotNull(component.shadowRoot);
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
        assert.strictEqual(headers.length, 4);
        assert.strictEqual(sections.length, 5);
        assert.include(headers[0]?.textContent, 'Speculative loading status');
        assert.strictEqual(sections[0]?.querySelector('.status-badge span')?.textContent?.trim(), 'No speculative loads');
        assert.include(sections[0]?.textContent, 'The initiating page did not attempt to speculatively load this page\'s URL.');
        assert.include(headers[1]?.textContent, 'Current URL');
        assert.include(sections[1]?.textContent, 'https://example.com/prerendered.html#alpha');
        assert.include(headers[2]?.textContent, 'URLs being speculatively loaded by the initiating page');
        const grid = sections[2].querySelector('devtools-resources-mismatched-preloading-grid');
        assert.instanceOf(grid, _components_js__WEBPACK_IMPORTED_MODULE_6__.MismatchedPreloadingGrid.MismatchedPreloadingGrid);
        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(grid, ['URL', 'Action', 'Status'], [
            ['https://example.com/prerendered.html#betalpha', 'Prerender', 'Ready'],
        ]);
        assert.include(headers[3]?.textContent, 'Speculations initiated by this page');
        const badges = sections[3]?.querySelectorAll('.status-badge span') || [];
        assert.strictEqual(badges.length, 1);
        assert.strictEqual(badges[0]?.textContent?.trim(), 'No speculative loads');
        assert.include(sections[4]?.textContent, 'Learn more: Speculative loading on developer.chrome.com');
    });
    it('renders no preloading attempts used with mismatch', async () => {
        const data = {
            pageURL: 'https://example.com/no-preloads.html',
            previousAttempts: [
                {
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                        url: 'https://example.com/prefetched.html',
                    },
                    status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                        url: 'https://example.com/prerendered.html',
                    },
                    status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */,
                    prerenderStatus: "TriggerDestroyed" /* Protocol.Preload.PrerenderFinalStatus.TriggerDestroyed */,
                    disallowedMojoInterface: null,
                    mismatchedHeaders: null,
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            ],
            currentAttempts: [],
        };
        const component = await renderUsedPreloadingView(data);
        assert.isNotNull(component.shadowRoot);
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
        assert.strictEqual(headers.length, 4);
        assert.strictEqual(sections.length, 5);
        assert.include(headers[0]?.textContent, 'Speculative loading status');
        assert.strictEqual(sections[0]?.querySelector('.status-badge span')?.textContent?.trim(), 'No speculative loads');
        assert.include(sections[0]?.textContent, 'The initiating page did not attempt to speculatively load this page\'s URL.');
        assert.include(headers[1]?.textContent, 'Current URL');
        assert.include(sections[1]?.textContent, 'https://example.com/no-preloads.html');
        assert.include(headers[2]?.textContent, 'URLs being speculatively loaded by the initiating page');
        assert.exists(sections[2].querySelector('devtools-resources-mismatched-preloading-grid'));
        assert.include(headers[3]?.textContent, 'Speculations initiated by this page');
        const badges = sections[3]?.querySelectorAll('.status-badge span') || [];
        assert.strictEqual(badges.length, 1);
        assert.strictEqual(badges[0]?.textContent?.trim(), 'No speculative loads');
        assert.include(sections[4]?.textContent, 'Learn more: Speculative loading on developer.chrome.com');
    });
    it('renders preloads initialized by this page', async () => {
        const data = {
            pageURL: 'https://example.com/no-preloads.html',
            previousAttempts: [],
            currentAttempts: [
                {
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                        url: 'https://example.com/prefetch-not-triggered.html',
                    },
                    status: "NotTriggered" /* SDK.PreloadingModel.PreloadingStatus.NotTriggered */,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                        url: 'https://example.com/prefetch-running.html',
                    },
                    status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */,
                    prefetchStatus: null,
                    requestId: 'requestId:2',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                        url: 'https://example.com/prefetch-ready.html',
                    },
                    status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */,
                    prefetchStatus: null,
                    requestId: 'requestId:3',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                        url: 'https://example.com/prefetch-failure.html',
                    },
                    status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */,
                    prefetchStatus: null,
                    requestId: 'requestId:4',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                        url: 'https://example.com/prerender-pending.html',
                    },
                    status: "Pending" /* SDK.PreloadingModel.PreloadingStatus.Pending */,
                    prerenderStatus: null,
                    disallowedMojoInterface: null,
                    mismatchedHeaders: null,
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                        url: 'https://example.com/prerender-ready.html',
                    },
                    status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */,
                    prerenderStatus: null,
                    mismatchedHeaders: null,
                    disallowedMojoInterface: null,
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            ],
        };
        const component = await renderUsedPreloadingView(data);
        assert.isNotNull(component.shadowRoot);
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
        assert.strictEqual(headers.length, 2);
        assert.strictEqual(sections.length, 3);
        assert.include(headers[0]?.textContent, 'Speculative loading status');
        assert.strictEqual(sections[0]?.querySelector('.status-badge span')?.textContent?.trim(), 'No speculative loads');
        assert.include(sections[0]?.textContent, 'The initiating page did not attempt to speculatively load this page\'s URL.');
        assert.include(headers[1]?.textContent, 'Speculations initiated by this page');
        const badges = sections[1]?.querySelectorAll('.status-badge span') || [];
        assert.strictEqual(badges.length, 4);
        assert.strictEqual(badges[0]?.textContent?.trim(), '1 not triggered');
        assert.strictEqual(badges[1]?.textContent?.trim(), '2 in progress');
        assert.strictEqual(badges[2]?.textContent?.trim(), '2 success');
        assert.strictEqual(badges[3]?.textContent?.trim(), '1 failure');
        assert.include(sections[2]?.textContent, 'Learn more: Speculative loading on developer.chrome.com');
    });
});
//# sourceMappingURL=UsedPreloadingView.test.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./testing/DOMHelpers.js":
/*!*******************************!*\
  !*** ./testing/DOMHelpers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertElements: () => (/* binding */ assertElements),
/* harmony export */   assertNodeTextContent: () => (/* binding */ assertNodeTextContent),
/* harmony export */   dispatchClickEvent: () => (/* binding */ dispatchClickEvent),
/* harmony export */   dispatchCopyEvent: () => (/* binding */ dispatchCopyEvent),
/* harmony export */   dispatchFocusEvent: () => (/* binding */ dispatchFocusEvent),
/* harmony export */   dispatchFocusOutEvent: () => (/* binding */ dispatchFocusOutEvent),
/* harmony export */   dispatchInputEvent: () => (/* binding */ dispatchInputEvent),
/* harmony export */   dispatchKeyDownEvent: () => (/* binding */ dispatchKeyDownEvent),
/* harmony export */   dispatchMouseLeaveEvent: () => (/* binding */ dispatchMouseLeaveEvent),
/* harmony export */   dispatchMouseMoveEvent: () => (/* binding */ dispatchMouseMoveEvent),
/* harmony export */   dispatchMouseOutEvent: () => (/* binding */ dispatchMouseOutEvent),
/* harmony export */   dispatchMouseOverEvent: () => (/* binding */ dispatchMouseOverEvent),
/* harmony export */   dispatchMouseUpEvent: () => (/* binding */ dispatchMouseUpEvent),
/* harmony export */   dispatchPasteEvent: () => (/* binding */ dispatchPasteEvent),
/* harmony export */   doubleRaf: () => (/* binding */ doubleRaf),
/* harmony export */   getCleanTextContentFromElements: () => (/* binding */ getCleanTextContentFromElements),
/* harmony export */   getElementWithinComponent: () => (/* binding */ getElementWithinComponent),
/* harmony export */   getElementsWithinComponent: () => (/* binding */ getElementsWithinComponent),
/* harmony export */   getEventPromise: () => (/* binding */ getEventPromise),
/* harmony export */   querySelectorErrorOnMissing: () => (/* binding */ querySelectorErrorOnMissing),
/* harmony export */   raf: () => (/* binding */ raf),
/* harmony export */   renderElementIntoDOM: () => (/* binding */ renderElementIntoDOM),
/* harmony export */   resetTestDOM: () => (/* binding */ resetTestDOM),
/* harmony export */   stripLitHtmlCommentNodes: () => (/* binding */ stripLitHtmlCommentNodes),
/* harmony export */   waitForScrollLeft: () => (/* binding */ waitForScrollLeft)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const TEST_CONTAINER_ID = '__devtools-test-container-id';
/**
 * Renders a given element into the DOM. By default it will error if it finds an element already rendered but this can be controlled via the options.
 **/
const renderElementIntoDOM = (element, renderOptions = {}) => {
    const container = document.getElementById(TEST_CONTAINER_ID);
    if (!container) {
        throw new Error(`renderElementIntoDOM expects to find ${TEST_CONTAINER_ID}`);
    }
    const allowMultipleChildren = Boolean(renderOptions.allowMultipleChildren);
    if (container.childNodes.length !== 0 && !allowMultipleChildren) {
        throw new Error(`renderElementIntoDOM expects the container to be empty ${container.innerHTML}`);
    }
    container.appendChild(element);
    return element;
};
function removeChildren(node) {
    while (true) {
        const { firstChild } = node;
        if (firstChild === null) {
            break;
        }
        const widget = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Widget.Widget.get(firstChild);
        if (widget) {
            // Child is a widget, so we have to use the Widget system to remove it from the DOM.
            widget.detach();
            continue;
        }
        // For regular children, recursively remove their children, since some of them
        // might be widgets, and only afterwards remove the child from the current node.
        removeChildren(firstChild);
        node.removeChild(firstChild);
    }
}
/**
 * Completely cleans out the test DOM to ensure it's empty for the next test run.
 * This is run automatically between tests - you should not be manually calling this yourself.
 **/
const resetTestDOM = () => {
    const previousContainer = document.getElementById(TEST_CONTAINER_ID);
    if (previousContainer) {
        removeChildren(previousContainer);
        previousContainer.remove();
    }
    const newContainer = document.createElement('div');
    newContainer.id = TEST_CONTAINER_ID;
    document.body.appendChild(newContainer);
};
/**
 * Asserts that all emenents of `nodeList` are at least of type `T`.
 */
function assertElements(nodeList, elementClass) {
    nodeList.forEach(e => assert.instanceOf(e, elementClass));
}
function getElementWithinComponent(component, selector, elementClass) {
    assert.isNotNull(component.shadowRoot);
    const element = component.shadowRoot.querySelector(selector);
    assert.instanceOf(element, elementClass);
    return element;
}
function getElementsWithinComponent(component, selector, elementClass) {
    assert.isNotNull(component.shadowRoot);
    const elements = component.shadowRoot.querySelectorAll(selector);
    assertElements(elements, elementClass);
    return elements;
}
/* Waits for the given element to have a scrollLeft property of at least desiredScrollLeft */
function waitForScrollLeft(element, desiredScrollLeft) {
    let lastScrollLeft = -1;
    let scrollLeftTimeout = null;
    const timeBetweenPolls = 50;
    return new Promise(resolve => {
        const pollForScrollLeft = () => {
            const newScrollLeft = element.scrollLeft;
            // If we get the same scroll value twice in a row, and it's at least what
            // we want, we're done!
            if (lastScrollLeft === newScrollLeft && newScrollLeft >= desiredScrollLeft) {
                if (scrollLeftTimeout) {
                    window.clearTimeout(scrollLeftTimeout);
                }
                resolve();
                return;
            }
            lastScrollLeft = newScrollLeft;
            scrollLeftTimeout = window.setTimeout(pollForScrollLeft, timeBetweenPolls);
        };
        window.setTimeout(pollForScrollLeft, timeBetweenPolls);
    });
}
/**
 * Dispatches a mouse click event.
 */
function dispatchClickEvent(element, options = {}) {
    const clickEvent = new MouseEvent('click', options);
    element.dispatchEvent(clickEvent);
}
function dispatchMouseUpEvent(element, options = {}) {
    const clickEvent = new MouseEvent('mouseup', options);
    element.dispatchEvent(clickEvent);
}
function dispatchFocusEvent(element, options = {}) {
    const focusEvent = new FocusEvent('focus', options);
    element.dispatchEvent(focusEvent);
}
function dispatchFocusOutEvent(element, options = {}) {
    const focusEvent = new FocusEvent('focusout', options);
    element.dispatchEvent(focusEvent);
}
/**
 * Dispatches a keydown event. Errors if the event was not dispatched successfully.
 */
function dispatchKeyDownEvent(element, options = {}) {
    const clickEvent = new KeyboardEvent('keydown', options);
    const success = element.dispatchEvent(clickEvent);
    if (!success) {
        assert.fail('Failed to trigger keydown event successfully.');
    }
}
function dispatchInputEvent(element, options = {}) {
    const inputEvent = new InputEvent('input', options);
    element.dispatchEvent(inputEvent);
}
/**
 * Dispatches a mouse over event.
 */
function dispatchMouseOverEvent(element, options = {}) {
    const moveEvent = new MouseEvent('mouseover', options);
    element.dispatchEvent(moveEvent);
}
/**
 * Dispatches a mouse out event.
 */
function dispatchMouseOutEvent(element, options = {}) {
    const moveEvent = new MouseEvent('mouseout', options);
    element.dispatchEvent(moveEvent);
}
/**
 * Dispatches a mouse move event.
 */
function dispatchMouseMoveEvent(element, options = {}) {
    const moveEvent = new MouseEvent('mousemove', options);
    element.dispatchEvent(moveEvent);
}
/**
 * Dispatches a mouse leave event.
 */
function dispatchMouseLeaveEvent(element, options = {}) {
    const leaveEvent = new MouseEvent('mouseleave', options);
    element.dispatchEvent(leaveEvent);
}
/**
 * Dispatches a clipboard copy event.
 */
function dispatchCopyEvent(element, options = {}) {
    const copyEvent = new ClipboardEvent('copy', options);
    element.dispatchEvent(copyEvent);
}
/**
 * Dispatches a clipboard paste event.
 */
function dispatchPasteEvent(element, options = {}) {
    const pasteEvent = new ClipboardEvent('paste', options);
    element.dispatchEvent(pasteEvent);
}
/**
 * Listens to an event of an element and returns a Promise that resolves to the
 * specified event type.
 */
function getEventPromise(element, eventName) {
    return new Promise(resolve => {
        element.addEventListener(eventName, (event) => {
            resolve(event);
        }, { once: true });
    });
}
async function doubleRaf() {
    return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
}
async function raf() {
    return new Promise(resolve => requestAnimationFrame(resolve));
}
/**
 * It's useful to use innerHTML in the tests to have full confidence in the
 * renderer output, but LitHtml uses comment nodes to split dynamic from
 * static parts of a template, and we don't want our tests full of noise
 * from those.
 */
function stripLitHtmlCommentNodes(text) {
    /**
     * LitHtml comments take the form of:
     * <!--?lit$1234?--> or:
     * <!--?-->
     * And this regex matches both.
     */
    return text.replaceAll(/<!--\?(lit\$[0-9]+\$)?-->/g, '');
}
/**
 * Returns an array of textContents.
 * Multiple consecutive newLine and space characters are removed.
 */
function getCleanTextContentFromElements(el, selector) {
    const elements = Array.from(el.querySelectorAll(selector));
    return elements.map(element => {
        return element.textContent ? element.textContent.trim().replace(/[ \n]{2,}/g, '') : '';
    });
}
function assertNodeTextContent(component, expectedContent) {
    assert.isNotNull(component.shadowRoot);
    const content = Array.from(component.shadowRoot.querySelectorAll('span')).map(span => span.textContent).join('');
    assert.strictEqual(content, expectedContent);
}
function querySelectorErrorOnMissing(parent, selector) {
    const elem = parent.querySelector(selector);
    if (!elem) {
        throw new Error(`Expected element with selector ${selector} not found.`);
    }
    return elem;
}
//# sourceMappingURL=DOMHelpers.js.map

/***/ }),

/***/ "./testing/DataGridHelpers.js":
/*!************************************!*\
  !*** ./testing/DataGridHelpers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertCurrentFocusedCellIs: () => (/* binding */ assertCurrentFocusedCellIs),
/* harmony export */   assertGridContents: () => (/* binding */ assertGridContents),
/* harmony export */   assertSelectedRowIs: () => (/* binding */ assertSelectedRowIs),
/* harmony export */   emulateUserFocusingCellAt: () => (/* binding */ emulateUserFocusingCellAt),
/* harmony export */   emulateUserKeyboardNavigation: () => (/* binding */ emulateUserKeyboardNavigation),
/* harmony export */   focusCurrentlyFocusableCell: () => (/* binding */ focusCurrentlyFocusableCell),
/* harmony export */   getAllRows: () => (/* binding */ getAllRows),
/* harmony export */   getBodyRowByAriaIndex: () => (/* binding */ getBodyRowByAriaIndex),
/* harmony export */   getCellByIndexes: () => (/* binding */ getCellByIndexes),
/* harmony export */   getDataGrid: () => (/* binding */ getDataGrid),
/* harmony export */   getFocusableCell: () => (/* binding */ getFocusableCell),
/* harmony export */   getHeaderCellForColumnId: () => (/* binding */ getHeaderCellForColumnId),
/* harmony export */   getHeaderCells: () => (/* binding */ getHeaderCells),
/* harmony export */   getValuesForColumn: () => (/* binding */ getValuesForColumn),
/* harmony export */   getValuesOfAllBodyRows: () => (/* binding */ getValuesOfAllBodyRows),
/* harmony export */   getValuesOfBodyRowByAriaIndex: () => (/* binding */ getValuesOfBodyRowByAriaIndex)
/* harmony export */ });
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMHelpers.js */ "./testing/DOMHelpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__.RenderCoordinator.RenderCoordinator.instance();
const getFocusableCell = (shadowRoot) => {
    // We only expect one here, but we qSA so we can assert on only one.
    // Can't use td as it may be a th if the user has focused a column header.
    const tabIndexCells = shadowRoot.querySelectorAll('table [tabindex="0"]');
    assert.lengthOf(tabIndexCells, 1);
    assert.instanceOf(tabIndexCells[0], HTMLTableCellElement);
    return tabIndexCells[0];
};
const getCellByIndexes = (shadowRoot, indexes) => {
    const cell = shadowRoot.querySelector(`[data-row-index="${indexes.row}"][data-col-index="${indexes.column}"]`);
    assert.instanceOf(cell, HTMLTableCellElement);
    return cell;
};
const getHeaderCells = (shadowRoot, options = {
    onlyVisible: false,
}) => {
    const cells = shadowRoot.querySelectorAll('[data-grid-header-cell]');
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(cells, HTMLTableCellElement);
    return Array.from(cells).filter(cell => {
        if (!options.onlyVisible) {
            return true;
        }
        return cell.classList.contains('hidden') === false;
    });
};
const getValuesOfBodyRowByAriaIndex = (shadowRoot, ariaIndex, options = {
    onlyVisible: false,
}) => {
    const row = getBodyRowByAriaIndex(shadowRoot, ariaIndex);
    const cells = row.querySelectorAll('[data-grid-value-cell-for-column]');
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(cells, HTMLTableCellElement);
    return Array.from(cells)
        .filter(cell => {
        return !options.onlyVisible || cell.classList.contains('hidden') === false;
    })
        .map(cell => {
        return cell.innerText;
    });
};
const getAllRows = (shadowRoot) => {
    const rows = shadowRoot.querySelectorAll('[aria-rowindex]');
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(rows, HTMLTableRowElement);
    return Array.from(rows);
};
const assertCurrentFocusedCellIs = (shadowRoot, { column, row }) => {
    const cell = getFocusableCell(shadowRoot);
    // Convert to strings as attributes are always strings.
    assert.strictEqual(cell.getAttribute('data-row-index'), String(row), 'The row index was not as expected.');
    assert.strictEqual(cell.getAttribute('data-col-index'), String(column), 'The column index was not as expected.');
};
const assertSelectedRowIs = (shadowRoot, row) => {
    const selectedRow = shadowRoot.querySelector('tr.selected');
    assert.instanceOf(selectedRow, HTMLTableRowElement);
    assert.strictEqual(selectedRow.getAttribute('aria-rowindex'), String(row), 'The row index was not as expected.');
};
const getDataGrid = (gridComponent) => {
    const controller = (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(gridComponent, 'devtools-data-grid-controller', _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__.DataGridController.DataGridController);
    return (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(controller, 'devtools-data-grid', _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__.DataGrid.DataGrid);
};
const assertGridContents = (gridComponent, headerExpected, rowsExpected) => {
    const grid = getDataGrid(gridComponent);
    assert.isNotNull(grid.shadowRoot);
    const headerActual = getHeaderCells(grid.shadowRoot).map(({ textContent }) => textContent.trim());
    assert.deepEqual(headerActual, headerExpected);
    const rowsActual = getValuesOfAllBodyRows(grid.shadowRoot).map(row => row.map(cell => cell.trim()));
    assert.deepEqual(rowsActual, rowsExpected);
    return grid;
};
const focusCurrentlyFocusableCell = (shadowRoot) => {
    const cell = getFocusableCell(shadowRoot);
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchFocusEvent)(cell);
};
const emulateUserKeyboardNavigation = (shadowRoot, key) => {
    const table = shadowRoot.querySelector('table');
    assert.instanceOf(table, HTMLTableElement);
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(table, { key });
};
const emulateUserFocusingCellAt = async (shadowRoot, position) => {
    const cellToFocus = getCellByIndexes(shadowRoot, position);
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchFocusEvent)(cellToFocus);
    await coordinator.done();
    assertCurrentFocusedCellIs(shadowRoot, position);
};
const getValuesOfAllBodyRows = (shadowRoot, options = {
    onlyVisible: false,
}) => {
    const rows = getAllRows(shadowRoot);
    return rows
        .map(row => {
        // now decide if the row should be included or not
        const rowIsHidden = row.classList.contains('hidden');
        const rowIndex = window.parseInt(row.getAttribute('aria-rowindex') || '-1', 10);
        return {
            rowValues: getValuesOfBodyRowByAriaIndex(shadowRoot, rowIndex, options),
            hidden: options.onlyVisible && rowIsHidden,
        };
    })
        .filter(row => row.hidden === false)
        .map(r => r.rowValues);
};
const getBodyRowByAriaIndex = (shadowRoot, rowIndex) => {
    const row = shadowRoot.querySelector(`[aria-rowindex="${rowIndex}"]`);
    assert.instanceOf(row, HTMLTableRowElement);
    return row;
};
const getHeaderCellForColumnId = (shadowRoot, columnId) => {
    const cell = shadowRoot.querySelector(`[data-grid-header-cell="${columnId}`);
    assert.instanceOf(cell, HTMLTableCellElement);
    return cell;
};
const getValuesForColumn = (shadowRoot, columnId) => {
    const cells = shadowRoot.querySelectorAll(`[data-grid-value-cell-for-column=${columnId}]`);
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(cells, HTMLTableCellElement);
    return Array.from(cells, cell => cell.innerText);
};
//# sourceMappingURL=DataGridHelpers.js.map

/***/ }),

/***/ "./ui/components/chrome_link/ChromeLink.js":
/*!*************************************************!*\
  !*** ./ui/components/chrome_link/ChromeLink.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeLink: () => (/* binding */ ChromeLink)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _chromeLink_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chromeLink.css.js */ "./ui/components/chrome_link/chromeLink.css.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








// Use this component to render links to 'chrome://...'-URLs
// (for which regular <x-link>s do not work).
class ChromeLink extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-chrome-link`;
    #shadow = this.attachShadow({ mode: 'open' });
    #boundRender = this.#render.bind(this);
    #href = '';
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_chromeLink_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]];
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, this.#boundRender);
    }
    set href(href) {
        if (!_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.schemeIs(href, 'chrome:')) {
            throw new Error('ChromeLink href needs to start with \'chrome://\'');
        }
        this.#href = href;
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, this.#boundRender);
    }
    // Navigating to a chrome:// link via a normal anchor doesn't work, so we "navigate"
    // there using CDP.
    #handleClick(event) {
        const rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().rootTarget();
        if (rootTarget === null) {
            return;
        }
        const url = this.#href;
        void rootTarget.targetAgent().invoke_createTarget({ url }).then(result => {
            if (result.getError()) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(url);
            }
        });
        event.consume(true);
    }
    #render() {
        const urlForContext = new URL(this.#href);
        urlForContext.search = '';
        const jslogContext = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(urlForContext.toString());
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(
        /* x-link doesn't work with custom click/keydown handlers */
        /* eslint-disable rulesdir/ban_a_tags_in_lit_html */
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        <a href=${this.#href} class="link" target="_blank"
          jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.link().track({ click: true }).context(jslogContext)}
          @click=${this.#handleClick}><slot></slot></a>
      `, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-chrome-link', ChromeLink);
//# sourceMappingURL=ChromeLink.js.map

/***/ }),

/***/ "./ui/components/chrome_link/chromeLink.css.js":
/*!*****************************************************!*\
  !*** ./ui/components/chrome_link/chromeLink.css.js ***!
  \*****************************************************/
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
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

/*# sourceURL=chromeLink.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/chrome_link/chrome_link.js":
/*!**************************************************!*\
  !*** ./ui/components/chrome_link/chrome_link.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeLink: () => (/* reexport module object */ _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChromeLink.js */ "./ui/components/chrome_link/ChromeLink.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=chrome_link.js.map

/***/ }),

/***/ "./ui/components/report_view/ReportView.js":
/*!*************************************************!*\
  !*** ./ui/components/report_view/ReportView.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Report: () => (/* binding */ Report),
/* harmony export */   ReportKey: () => (/* binding */ ReportKey),
/* harmony export */   ReportSection: () => (/* binding */ ReportSection),
/* harmony export */   ReportSectionDivider: () => (/* binding */ ReportSectionDivider),
/* harmony export */   ReportSectionHeader: () => (/* binding */ ReportSectionHeader),
/* harmony export */   ReportValue: () => (/* binding */ ReportValue)
/* harmony export */ });
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _report_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.css.js */ "./ui/components/report_view/report.css.js");
/* harmony import */ var _reportKey_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reportKey.css.js */ "./ui/components/report_view/reportKey.css.js");
/* harmony import */ var _reportSection_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportSection.css.js */ "./ui/components/report_view/reportSection.css.js");
/* harmony import */ var _reportSectionDivider_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportSectionDivider.css.js */ "./ui/components/report_view/reportSectionDivider.css.js");
/* harmony import */ var _reportSectionHeader_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reportSectionHeader.css.js */ "./ui/components/report_view/reportSectionHeader.css.js");
/* harmony import */ var _reportValue_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportValue.css.js */ "./ui/components/report_view/reportValue.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







class Report extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report`;
    #shadow = this.attachShadow({ mode: 'open' });
    #reportTitle = '';
    set data({ reportTitle }) {
        this.#reportTitle = reportTitle;
        this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_report_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="content">
        ${this.#reportTitle ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `<div class="report-title">${this.#reportTitle}</div>` : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing}
        <slot></slot>
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportSection extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportSection_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section">
        <slot></slot>
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportSectionHeader extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section-header`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportSectionHeader_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-header">
        <slot></slot>
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportSectionDivider extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-divider`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportSectionDivider_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-divider">
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportKey extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-key`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportKey_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="key"><slot></slot></div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportValue extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-value`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportValue_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="value"><slot></slot></div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-report', Report);
customElements.define('devtools-report-section', ReportSection);
customElements.define('devtools-report-section-header', ReportSectionHeader);
customElements.define('devtools-report-key', ReportKey);
customElements.define('devtools-report-value', ReportValue);
customElements.define('devtools-report-divider', ReportSectionDivider);
//# sourceMappingURL=ReportView.js.map

/***/ }),

/***/ "./ui/components/report_view/report.css.js":
/*!*************************************************!*\
  !*** ./ui/components/report_view/report.css.js ***!
  \*************************************************/
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
  display: block;
}

.content {
  background-color: var(--sys-color-cdt-base-container);
  display: grid;
  grid-template-columns: min-content 1fr;
  user-select: text;
}

.report-title {
  padding: 12px 24px;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid var(--sys-color-divider);
  color: var(--sys-color-on-surface);
  background-color: var(--sys-color-cdt-base-container);
  grid-column-start: span 2;
}

/*# sourceURL=report.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportKey.css.js":
/*!****************************************************!*\
  !*** ./ui/components/report_view/reportKey.css.js ***!
  \****************************************************/
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
  line-height: 28px;
  margin: 0 0 8px;
}

.key {
  color: var(--sys-color-on-surface-subtle);
  padding: 0 6px;
  text-align: right;
  white-space: pre;
  user-select: none;
}

/*# sourceURL=reportKey.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportSection.css.js":
/*!********************************************************!*\
  !*** ./ui/components/report_view/reportSection.css.js ***!
  \********************************************************/
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
  grid-column-start: span 2;
  min-width: min-content;
}

.section {
  padding: 12px;
  margin-left: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: auto;
  overflow-wrap: break-word;
  overflow: hidden;
}

/*# sourceURL=reportSection.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportSectionDivider.css.js":
/*!***************************************************************!*\
  !*** ./ui/components/report_view/reportSectionDivider.css.js ***!
  \***************************************************************/
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
  grid-column-start: span 2;
}

.section-divider {
  border-bottom: 1px solid var(--sys-color-divider);
}

/*# sourceURL=reportSectionDivider.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportSectionHeader.css.js":
/*!**************************************************************!*\
  !*** ./ui/components/report_view/reportSectionHeader.css.js ***!
  \**************************************************************/
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
  grid-column-start: span 2;
}

.section-header {
  padding: 12px;
  margin-left: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: bold;
  color: var(--sys-color-on-surface);
  user-select: none;
}

/*# sourceURL=reportSectionHeader.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportValue.css.js":
/*!******************************************************!*\
  !*** ./ui/components/report_view/reportValue.css.js ***!
  \******************************************************/
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
  line-height: 28px;
  margin: 0 0 8px;
  min-width: 150px;
}

.value {
  color: var(--sys-color-on-surface);
  margin-inline-start: 0;
  padding: 0 6px;
  overflow-wrap: break-word;
}

/*# sourceURL=reportValue.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/report_view.js":
/*!**************************************************!*\
  !*** ./ui/components/report_view/report_view.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportView: () => (/* reexport module object */ _ReportView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ReportView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportView.js */ "./ui/components/report_view/ReportView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=report_view.js.map

/***/ })

}]);