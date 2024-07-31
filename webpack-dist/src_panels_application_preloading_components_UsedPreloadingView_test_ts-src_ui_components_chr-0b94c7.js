"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_preloading_components_UsedPreloadingView_test_ts-src_ui_components_chr-0b94c7"],{

/***/ "./src/panels/application/preloading/components/UsedPreloadingView.test.ts":
/*!*********************************************************************************!*\
  !*** ./src/panels/application/preloading/components/UsedPreloadingView.test.ts ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/DataGridHelpers.js */ "./src/testing/DataGridHelpers.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/components/report_view/report_view.js */ "./src/ui/components/report_view/report_view.ts");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components.js */ "./src/panels/application/preloading/components/components.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_js__WEBPACK_IMPORTED_MODULE_7__]);
_components_js__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
async function renderUsedPreloadingView(data) {
    const component = new _components_js__WEBPACK_IMPORTED_MODULE_7__.UsedPreloadingView.UsedPreloadingView();
    component.data = data;
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.renderElementIntoDOM)(component);
    assert.isNotNull(component.shadowRoot);
    await coordinator.done();
    return component;
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.describeWithEnvironment)('UsedPreloadingView', () => {
    it('renderes prefetch used', async () => {
        const data = {
            pageURL: 'https://example.com/prefetched.html',
            previousAttempts: [
                {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/prefetched.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Success,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                        url: 'https://example.com/prerendered.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Failure,
                    prerenderStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.PrerenderFinalStatus.TriggerDestroyed,
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
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection);
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
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/prefetched.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Ready,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                        url: 'https://example.com/prerendered.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Success,
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
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection);
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
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/prefetched.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Failure,
                    prefetchStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.PrefetchStatus.PrefetchFailedPerPageLimitExceeded,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                        url: 'https://example.com/prerendered.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Failure,
                    prerenderStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.PrerenderFinalStatus.TriggerDestroyed,
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
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection);
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
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/prefetched.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Ready,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                        url: 'https://example.com/prerendered.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Failure,
                    prerenderStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.PrerenderFinalStatus.MojoBinderPolicy,
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
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection);
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
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/prefetched.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Ready,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                        url: 'https://example.com/prerendered.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Failure,
                    prerenderStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.PrerenderFinalStatus.ActivationNavigationParameterMismatch,
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
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection);
        const grid = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementWithinComponent)(component, 'devtools-resources-preloading-mismatched-headers-grid', _components_js__WEBPACK_IMPORTED_MODULE_7__.PreloadingMismatchedHeadersGrid.PreloadingMismatchedHeadersGrid);
        assert.strictEqual(headers.length, 4);
        assert.strictEqual(sections.length, 5);
        assert.include(headers[0]?.textContent, 'Speculative loading status');
        assert.include(sections[0]?.textContent, 'The initiating page attempted to prerender this page\'s URL, but the prerender failed, so a full navigation was performed instead.');
        assert.include(headers[1]?.textContent, 'Failure reason');
        assert.include(sections[1]?.textContent, 'The prerender was not used because during activation time, different navigation parameters (e.g., HTTP headers) were calculated than during the original prerendering navigation request.');
        assert.include(headers[2]?.textContent, 'Mismatched HTTP request headers');
        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertGridContents)(grid, ['Header name', 'Value in initial navigation', 'Value in activation navigation'], [
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
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/downgraded.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Success,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                        url: 'https://example.com/downgraded.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Failure,
                    prerenderStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.PrerenderFinalStatus.MojoBinderPolicy,
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
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection);
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
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection);
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
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/prefetched.html#beta',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Success,
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
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection);
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
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                        url: 'https://example.com/prerendered.html#beta',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Ready,
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
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection);
        assert.strictEqual(headers.length, 4);
        assert.strictEqual(sections.length, 5);
        assert.include(headers[0]?.textContent, 'Speculative loading status');
        assert.strictEqual(sections[0]?.querySelector('.status-badge span')?.textContent?.trim(), 'No speculative loads');
        assert.include(sections[0]?.textContent, 'The initiating page did not attempt to speculatively load this page\'s URL.');
        assert.include(headers[1]?.textContent, 'Current URL');
        assert.include(sections[1]?.textContent, 'https://example.com/prerendered.html#alpha');
        assert.include(headers[2]?.textContent, 'URLs being speculatively loaded by the initiating page');
        const grid = sections[2].querySelector('devtools-resources-mismatched-preloading-grid');
        assert.instanceOf(grid, _components_js__WEBPACK_IMPORTED_MODULE_7__.MismatchedPreloadingGrid.MismatchedPreloadingGrid);
        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertGridContents)(grid, ['URL', 'Action', 'Status'], [
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
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/prefetched.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Ready,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                        url: 'https://example.com/prerendered.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Failure,
                    prerenderStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.PrerenderFinalStatus.TriggerDestroyed,
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
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection);
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
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/prefetch-not-triggered.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.NotTriggered,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/prefetch-running.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Running,
                    prefetchStatus: null,
                    requestId: 'requestId:2',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/prefetch-ready.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Ready,
                    prefetchStatus: null,
                    requestId: 'requestId:3',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/prefetch-failure.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Failure,
                    prefetchStatus: null,
                    requestId: 'requestId:4',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                        url: 'https://example.com/prerender-pending.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Pending,
                    prerenderStatus: null,
                    disallowedMojoInterface: null,
                    mismatchedHeaders: null,
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                    key: {
                        loaderId: 'loaderId:1',
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                        url: 'https://example.com/prerender-ready.html',
                    },
                    status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Ready,
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
        const headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionHeader);
        const sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection);
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/testing/DOMHelpers.ts":
/*!***********************************!*\
  !*** ./src/testing/DOMHelpers.ts ***!
  \***********************************/
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
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
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


/***/ }),

/***/ "./src/testing/DataGridHelpers.ts":
/*!****************************************!*\
  !*** ./src/testing/DataGridHelpers.ts ***!
  \****************************************/
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
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
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


/***/ }),

/***/ "./src/ui/components/chrome_link/ChromeLink.ts":
/*!*****************************************************!*\
  !*** ./src/ui/components/chrome_link/ChromeLink.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeLink: () => (/* binding */ ChromeLink)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './chromeLink.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2022 The Chromium Authors. All rights reserved.
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
var _ChromeLink_instances, _ChromeLink_shadow, _ChromeLink_boundRender, _ChromeLink_href, _ChromeLink_handleClick, _ChromeLink_render;








// Use this component to render links to 'chrome://...'-URLs
// (for which regular <x-link>s do not work).
class ChromeLink extends HTMLElement {
    constructor() {
        super(...arguments);
        _ChromeLink_instances.add(this);
        _ChromeLink_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ChromeLink_boundRender.set(this, __classPrivateFieldGet(this, _ChromeLink_instances, "m", _ChromeLink_render).bind(this));
        _ChromeLink_href.set(this, '');
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ChromeLink_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './chromeLink.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _ChromeLink_boundRender, "f"));
    }
    set href(href) {
        if (!_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.schemeIs(href, 'chrome:')) {
            throw new Error('ChromeLink href needs to start with \'chrome://\'');
        }
        __classPrivateFieldSet(this, _ChromeLink_href, href, "f");
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _ChromeLink_boundRender, "f"));
    }
}
_ChromeLink_shadow = new WeakMap(), _ChromeLink_boundRender = new WeakMap(), _ChromeLink_href = new WeakMap(), _ChromeLink_instances = new WeakSet(), _ChromeLink_handleClick = function _ChromeLink_handleClick(event) {
    const rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().rootTarget();
    if (rootTarget === null) {
        return;
    }
    const url = __classPrivateFieldGet(this, _ChromeLink_href, "f");
    void rootTarget.targetAgent().invoke_createTarget({ url }).then(result => {
        if (result.getError()) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(url);
        }
    });
    event.consume(true);
}, _ChromeLink_render = function _ChromeLink_render() {
    const urlForContext = new URL(__classPrivateFieldGet(this, _ChromeLink_href, "f"));
    urlForContext.search = '';
    const jslogContext = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(urlForContext.toString());
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(
    /* x-link doesn't work with custom click/keydown handlers */
    /* eslint-disable rulesdir/ban_a_tags_in_lit_html */
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        <a href=${__classPrivateFieldGet(this, _ChromeLink_href, "f")} class="link" target="_blank"
          jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.link().track({ click: true }).context(jslogContext)}
          @click=${__classPrivateFieldGet(this, _ChromeLink_instances, "m", _ChromeLink_handleClick)}><slot></slot></a>
      `, __classPrivateFieldGet(this, _ChromeLink_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ChromeLink, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-chrome-link`
});
customElements.define('devtools-chrome-link', ChromeLink);


/***/ }),

/***/ "./src/ui/components/chrome_link/chrome_link.ts":
/*!******************************************************!*\
  !*** ./src/ui/components/chrome_link/chrome_link.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeLink: () => (/* reexport module object */ _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChromeLink.js */ "./src/ui/components/chrome_link/ChromeLink.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ }),

/***/ "./src/ui/components/report_view/ReportView.ts":
/*!*****************************************************!*\
  !*** ./src/ui/components/report_view/ReportView.ts ***!
  \*****************************************************/
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
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './report.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportKey.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionDivider.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionHeader.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Report_instances, _Report_shadow, _Report_reportTitle, _Report_render, _ReportSection_instances, _ReportSection_shadow, _ReportSection_render, _ReportSectionHeader_instances, _ReportSectionHeader_shadow, _ReportSectionHeader_render, _ReportSectionDivider_instances, _ReportSectionDivider_shadow, _ReportSectionDivider_render, _ReportKey_instances, _ReportKey_shadow, _ReportKey_render, _ReportValue_instances, _ReportValue_shadow, _ReportValue_render;







class Report extends HTMLElement {
    constructor() {
        super(...arguments);
        _Report_instances.add(this);
        _Report_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _Report_reportTitle.set(this, '');
    }
    set data({ reportTitle }) {
        __classPrivateFieldSet(this, _Report_reportTitle, reportTitle, "f");
        __classPrivateFieldGet(this, _Report_instances, "m", _Report_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _Report_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './report.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _Report_instances, "m", _Report_render).call(this);
    }
}
_Report_shadow = new WeakMap(), _Report_reportTitle = new WeakMap(), _Report_instances = new WeakSet(), _Report_render = function _Report_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="content">
        ${__classPrivateFieldGet(this, _Report_reportTitle, "f") ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `<div class="report-title">${__classPrivateFieldGet(this, _Report_reportTitle, "f")}</div>` : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing}
        <slot></slot>
      </div>
    `, __classPrivateFieldGet(this, _Report_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(Report, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report`
});
class ReportSection extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportSection_instances.add(this);
        _ReportSection_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportSection_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportSection_instances, "m", _ReportSection_render).call(this);
    }
}
_ReportSection_shadow = new WeakMap(), _ReportSection_instances = new WeakSet(), _ReportSection_render = function _ReportSection_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section">
        <slot></slot>
      </div>
    `, __classPrivateFieldGet(this, _ReportSection_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportSection, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section`
});
class ReportSectionHeader extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportSectionHeader_instances.add(this);
        _ReportSectionHeader_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportSectionHeader_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionHeader.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportSectionHeader_instances, "m", _ReportSectionHeader_render).call(this);
    }
}
_ReportSectionHeader_shadow = new WeakMap(), _ReportSectionHeader_instances = new WeakSet(), _ReportSectionHeader_render = function _ReportSectionHeader_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-header">
        <slot></slot>
      </div>
    `, __classPrivateFieldGet(this, _ReportSectionHeader_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportSectionHeader, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section-header`
});
class ReportSectionDivider extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportSectionDivider_instances.add(this);
        _ReportSectionDivider_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportSectionDivider_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionDivider.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportSectionDivider_instances, "m", _ReportSectionDivider_render).call(this);
    }
}
_ReportSectionDivider_shadow = new WeakMap(), _ReportSectionDivider_instances = new WeakSet(), _ReportSectionDivider_render = function _ReportSectionDivider_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-divider">
      </div>
    `, __classPrivateFieldGet(this, _ReportSectionDivider_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportSectionDivider, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-divider`
});
class ReportKey extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportKey_instances.add(this);
        _ReportKey_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportKey_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportKey.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportKey_instances, "m", _ReportKey_render).call(this);
    }
}
_ReportKey_shadow = new WeakMap(), _ReportKey_instances = new WeakSet(), _ReportKey_render = function _ReportKey_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="key"><slot></slot></div>
    `, __classPrivateFieldGet(this, _ReportKey_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportKey, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-key`
});
class ReportValue extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportValue_instances.add(this);
        _ReportValue_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportValue_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportValue_instances, "m", _ReportValue_render).call(this);
    }
}
_ReportValue_shadow = new WeakMap(), _ReportValue_instances = new WeakSet(), _ReportValue_render = function _ReportValue_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="value"><slot></slot></div>
    `, __classPrivateFieldGet(this, _ReportValue_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportValue, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-value`
});
customElements.define('devtools-report', Report);
customElements.define('devtools-report-section', ReportSection);
customElements.define('devtools-report-section-header', ReportSectionHeader);
customElements.define('devtools-report-key', ReportKey);
customElements.define('devtools-report-value', ReportValue);
customElements.define('devtools-report-divider', ReportSectionDivider);


/***/ }),

/***/ "./src/ui/components/report_view/report_view.ts":
/*!******************************************************!*\
  !*** ./src/ui/components/report_view/report_view.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportView: () => (/* reexport module object */ _ReportView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ReportView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportView.js */ "./src/ui/components/report_view/ReportView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);