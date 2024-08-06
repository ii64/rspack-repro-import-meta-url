"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_AppManifestView_test_js"],{

/***/ "./panels/application/AppManifestView.test.js":
/*!****************************************************!*\
  !*** ./panels/application/AppManifestView.test.js ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_6__]);
_application_js__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('AppManifestView', () => {
    const FIXTURES_96X96_URL = `${new URL(/* asset import */ __webpack_require__(/*! ./fixtures/96x96.png */ "./panels/application/fixtures/96x96.png?04ab"), __webpack_require__.b)}`;
    const FIXTURES_320X320_URL = `${new URL(/* asset import */ __webpack_require__(/*! ./fixtures/320x320.png */ "./panels/application/fixtures/320x320.png?4fae"), __webpack_require__.b)}`;
    const FIXTURES_640X320_URL = `${new URL(/* asset import */ __webpack_require__(/*! ./fixtures/640x320.png */ "./panels/application/fixtures/640x320.png?d792"), __webpack_require__.b)}`;
    let target;
    let emptyView;
    let reportView;
    let throttler;
    let view;
    beforeEach(() => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.stubNoopSettings)();
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: tabTarget });
        emptyView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.EmptyWidget.EmptyWidget('');
        reportView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportView('');
        throttler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(0);
    });
    afterEach(() => {
        view.detach();
    });
    it('shows report view once manifest available', async () => {
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
        assert.exists(resourceTreeModel);
        const URL = 'http://example.com';
        const fetchAppManifest = sinon.stub(resourceTreeModel, 'fetchAppManifest');
        fetchAppManifest.onCall(0).resolves({ url: URL, data: null, errors: [] });
        fetchAppManifest.onCall(1).resolves({ url: URL, data: '{}', errors: [] });
        fetchAppManifest.onCall(2).resolves({ url: URL, data: '{"short_name": "example.com"}', errors: [] });
        sinon.stub(resourceTreeModel, 'getInstallabilityErrors').resolves([]);
        sinon.stub(resourceTreeModel, 'getAppId').resolves({});
        view = new _application_js__WEBPACK_IMPORTED_MODULE_6__.AppManifestView.AppManifestView(emptyView, reportView, throttler);
        view.markAsRoot();
        view.show(document.body);
        await new Promise(resolve => {
            view.addEventListener("ManifestDetected" /* Application.AppManifestView.Events.ManifestDetected */, resolve, { once: true });
        });
        assert.isTrue(emptyView.isShowing());
        assert.isFalse(reportView.isShowing());
        resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.DOMContentLoaded, 42);
        await new Promise(resolve => {
            view.addEventListener("ManifestDetected" /* Application.AppManifestView.Events.ManifestDetected */, resolve, { once: true });
        });
        assert.isTrue(emptyView.isShowing());
        assert.isFalse(reportView.isShowing());
        resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.DOMContentLoaded, 42);
        await new Promise(resolve => {
            view.addEventListener("ManifestDetected" /* Application.AppManifestView.Events.ManifestDetected */, resolve, { once: true });
        });
        assert.isFalse(emptyView.isShowing());
        assert.isTrue(reportView.isShowing());
    });
    it('shows pwa wco if available', async () => {
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
        assert.exists(resourceTreeModel);
        const URL = 'https://www.example.com';
        const fetchAppManifest = sinon.stub(resourceTreeModel, 'fetchAppManifest');
        fetchAppManifest.resolves({ url: URL, data: '{"display_override": ["window-controls-overlay"]}', errors: [] });
        sinon.stub(resourceTreeModel, 'getInstallabilityErrors').resolves([]);
        sinon.stub(resourceTreeModel, 'getAppId').resolves({});
        view = new _application_js__WEBPACK_IMPORTED_MODULE_6__.AppManifestView.AppManifestView(emptyView, reportView, throttler);
        view.markAsRoot();
        view.show(document.body);
        resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.DOMContentLoaded, 42);
        await new Promise(resolve => {
            view.addEventListener("ManifestDetected" /* Application.AppManifestView.Events.ManifestDetected */, resolve, { once: true });
        });
        const manifestSections = view.getStaticSections();
        const values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(manifestSections[4].getFieldElement(), '.wco');
        assert.deepEqual(values, ['window-controls-overlay']);
    });
    it('can parse ‘sizes’-field', async () => {
        view = new _application_js__WEBPACK_IMPORTED_MODULE_6__.AppManifestView.AppManifestView(emptyView, reportView, throttler);
        const parsed = view.parseSizes('512x512', 'Icon', 'https://web.dev/image.html', []);
        const expected = [{
                width: 512,
                height: 512,
                formatted: '512×512px',
            }];
        assert.deepStrictEqual(parsed, expected);
    });
    it('can handle missing ‘sizes’-field', async () => {
        view = new _application_js__WEBPACK_IMPORTED_MODULE_6__.AppManifestView.AppManifestView(emptyView, reportView, throttler);
        const parsed = view.parseSizes(undefined, 'Icon', 'https://web.dev/image.html', []);
        assert.deepStrictEqual(parsed, []);
    });
    async function renderWithWarnings(manifest) {
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
        assert.exists(resourceTreeModel);
        const URL = window.location.origin;
        const fetchAppManifest = sinon.stub(resourceTreeModel, 'fetchAppManifest');
        fetchAppManifest.resolves({ url: URL, data: manifest, errors: [] });
        sinon.stub(resourceTreeModel, 'getInstallabilityErrors').resolves([]);
        sinon.stub(resourceTreeModel, 'getAppId').resolves({});
        view = new _application_js__WEBPACK_IMPORTED_MODULE_6__.AppManifestView.AppManifestView(emptyView, reportView, throttler);
        view.markAsRoot();
        view.show(document.body);
        await new Promise(resolve => {
            view.addEventListener("ManifestRendered" /* Application.AppManifestView.Events.ManifestRendered */, resolve, { once: true });
        });
        const warningSection = reportView.element.shadowRoot?.querySelector('.report-section');
        assert.exists(warningSection);
        const warnings = warningSection.querySelectorAll('.report-row');
        assert.exists(warnings);
        return Array.from(warnings).map(warning => warning.textContent || '');
    }
    it('displays warnings for too many shortcuts and not enough screenshots', async () => {
        const actual = await renderWithWarnings(`{
        "shortcuts" : [
          {
            "name": "Today's agenda",
            "url": "/today",
            "description": "List of events planned for today",
            "icons": [{ "src": "${FIXTURES_96X96_URL}", "sizes": "96x96" }]
          },
          {
            "name": "New event",
            "url": "/create/event",
            "icons": [{ "src": "${FIXTURES_96X96_URL}", "sizes": "96x96" }]
          },
          {
            "name": "New reminder",
            "url": "/create/reminder",
            "icons": [{ "src": "${FIXTURES_96X96_URL}", "sizes": "96x96" }]
          },
          {
            "name": "Delete event",
            "url": "/delete/reminder",
            "icons": [{ "src": "${FIXTURES_96X96_URL}", "sizes": "96x96" }]
          },
          {
            "name": "Delete reminder",
            "url": "/delete/reminder",
            "icons": [{ "src": "${FIXTURES_96X96_URL}", "sizes": "96x96" }]
          }
        ]
      }`);
        const expected = [
            'The maximum number of shortcuts is platform dependent. Some shortcuts may be not available.',
            'Richer PWA Install UI won’t be available on desktop. Please add at least one screenshot with the form_factor set to wide.',
            'Richer PWA Install UI won’t be available on mobile. Please add at least one screenshot for which form_factor is not set or set to a value other than wide.',
            'Most operating systems require square icons. Please include at least one square icon in the array.',
        ];
        assert.deepStrictEqual(actual, expected);
    });
    it('displays warnings for too many mobile screenshots', async () => {
        const actual = await renderWithWarnings(`{
        "screenshots": [
          {
            "src": "${FIXTURES_320X320_URL}",
            "type": "image/png",
            "sizes": "320x320"
          },
          {
            "src": "${FIXTURES_320X320_URL}",
            "type": "image/png",
            "sizes": "320x320"
          },
          {
            "src": "${FIXTURES_320X320_URL}",
            "type": "image/png",
            "sizes": "320x320"
          },
          {
            "src": "${FIXTURES_320X320_URL}",
            "type": "image/png",
            "sizes": "320x320"
          },
          {
            "src": "${FIXTURES_320X320_URL}",
            "type": "image/png",
            "sizes": "320x320"
          },
          {
            "src": "${FIXTURES_320X320_URL}",
            "type": "image/png",
            "sizes": "320x320"
          }
        ]
      }`);
        const expected = [
            'Richer PWA Install UI won’t be available on desktop. Please add at least one screenshot with the form_factor set to wide.',
            'No more than 5 screenshots will be displayed on mobile. The rest will be ignored.',
            'Most operating systems require square icons. Please include at least one square icon in the array.',
        ];
        assert.deepStrictEqual(actual, expected);
    });
    it('displays warnings for too many desktop screenshots and wrong aspect ratio', async () => {
        const actual = await renderWithWarnings(`{
        "screenshots": [
          {
            "src": "${FIXTURES_320X320_URL}",
            "type": "image/png",
            "sizes": "320x320",
            "form_factor": "wide"
          },
          {
            "src": "${FIXTURES_640X320_URL}",
            "type": "image/png",
            "sizes": "640x320",
            "form_factor": "wide"
          },
          {
            "src": "${FIXTURES_320X320_URL}",
            "type": "image/png",
            "sizes": "320x320",
            "form_factor": "wide"
          },
          {
            "src": "${FIXTURES_320X320_URL}",
            "type": "image/png",
            "sizes": "320x320",
            "form_factor": "wide"
          },
          {
            "src": "${FIXTURES_320X320_URL}",
            "type": "image/png",
            "sizes": "320x320",
            "form_factor": "wide"
          },
          {
            "src": "${FIXTURES_320X320_URL}",
            "type": "image/png",
            "sizes": "320x320",
            "form_factor": "wide"
          },
          {
            "src": "${FIXTURES_320X320_URL}",
            "type": "image/png",
            "sizes": "320x320",
            "form_factor": "wide"
          },
          {
            "src": "${FIXTURES_320X320_URL}",
            "type": "image/png",
            "sizes": "320x320",
            "form_factor": "wide"
          },
          {
            "src": "${FIXTURES_320X320_URL}",
            "type": "image/png",
            "sizes": "320x320",
            "form_factor": "wide"
          }
        ]
      }`);
        const expected = [
            'All screenshots with the same form_factor must have the same aspect ratio as the first screenshot with that form_factor. Some screenshots will be ignored.',
            'Richer PWA Install UI won’t be available on mobile. Please add at least one screenshot for which form_factor is not set or set to a value other than wide.',
            'No more than 8 screenshots will be displayed on desktop. The rest will be ignored.',
            'Most operating systems require square icons. Please include at least one square icon in the array.',
        ];
        assert.deepStrictEqual(actual, expected);
    });
    it('displays "form-factor", "platform" and "label" properties for screenshots', async () => {
        await renderWithWarnings(`{
        "screenshots": [
          {
            "src": "${FIXTURES_320X320_URL}",
            "type": "image/png",
            "sizes": "320x320",
            "form_factor": "wide",
            "label": "Dummy Screenshot",
            "platform": "windows"
          }
        ]
      }`);
        const screenshotSection = reportView.element.shadowRoot?.querySelectorAll('.report-section')[7] || null;
        assert.instanceOf(screenshotSection, HTMLDivElement);
        assert.deepStrictEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(screenshotSection, '.report-field-name').slice(0, 3), ['Form factor', 'Label', 'Platform']);
        assert.deepStrictEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(screenshotSection, '.report-field-value').slice(0, 3), ['wide', 'Dummy Screenshot', 'windows']);
    });
});
//# sourceMappingURL=AppManifestView.test.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./panels/application/application.js":
/*!*******************************************!*\
  !*** ./panels/application/application.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppManifestView: () => (/* reexport module object */ _AppManifestView_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   ApplicationPanelSidebar: () => (/* reexport module object */ _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   BackgroundServiceModel: () => (/* reexport module object */ _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   BackgroundServiceView: () => (/* reexport module object */ _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   BounceTrackingMitigationsTreeElement: () => (/* reexport module object */ _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   CookieItemsView: () => (/* reexport module object */ _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   DOMStorageItemsView: () => (/* reexport module object */ _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   DOMStorageModel: () => (/* reexport module object */ _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   IndexedDBModel: () => (/* reexport module object */ _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   IndexedDBViews: () => (/* reexport module object */ _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   InterestGroupStorageModel: () => (/* reexport module object */ _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   InterestGroupStorageView: () => (/* reexport module object */ _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   InterestGroupTreeElement: () => (/* reexport module object */ _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   OpenedWindowDetailsView: () => (/* reexport module object */ _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_13__),
/* harmony export */   PreloadingTreeElement: () => (/* reexport module object */ _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__),
/* harmony export */   PreloadingView: () => (/* reexport module object */ _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__),
/* harmony export */   ReportingApiReportsView: () => (/* reexport module object */ _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_16__),
/* harmony export */   ReportingApiView: () => (/* reexport module object */ _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_17__),
/* harmony export */   ResourcesPanel: () => (/* reexport module object */ _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__),
/* harmony export */   ServiceWorkerCacheViews: () => (/* reexport module object */ _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_19__),
/* harmony export */   ServiceWorkerUpdateCycleView: () => (/* reexport module object */ _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_21__),
/* harmony export */   ServiceWorkersView: () => (/* reexport module object */ _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_20__),
/* harmony export */   SharedStorageEventsView: () => (/* reexport module object */ _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_22__),
/* harmony export */   SharedStorageItemsView: () => (/* reexport module object */ _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_23__),
/* harmony export */   SharedStorageListTreeElement: () => (/* reexport module object */ _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_24__),
/* harmony export */   SharedStorageModel: () => (/* reexport module object */ _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_25__),
/* harmony export */   SharedStorageTreeElement: () => (/* reexport module object */ _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_26__),
/* harmony export */   StorageBucketsTreeElement: () => (/* reexport module object */ _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__),
/* harmony export */   StorageItemsView: () => (/* reexport module object */ _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_28__),
/* harmony export */   StorageView: () => (/* reexport module object */ _StorageView_js__WEBPACK_IMPORTED_MODULE_29__),
/* harmony export */   TrustTokensTreeElement: () => (/* reexport module object */ _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_30__)
/* harmony export */ });
/* harmony import */ var _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationPanelSidebar.js */ "./panels/application/ApplicationPanelSidebar.js");
/* harmony import */ var _AppManifestView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppManifestView.js */ "./panels/application/AppManifestView.js");
/* harmony import */ var _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackgroundServiceModel.js */ "./panels/application/BackgroundServiceModel.js");
/* harmony import */ var _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackgroundServiceView.js */ "./panels/application/BackgroundServiceView.js");
/* harmony import */ var _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BounceTrackingMitigationsTreeElement.js */ "./panels/application/BounceTrackingMitigationsTreeElement.js");
/* harmony import */ var _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CookieItemsView.js */ "./panels/application/CookieItemsView.js");
/* harmony import */ var _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOMStorageItemsView.js */ "./panels/application/DOMStorageItemsView.js");
/* harmony import */ var _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DOMStorageModel.js */ "./panels/application/DOMStorageModel.js");
/* harmony import */ var _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IndexedDBModel.js */ "./panels/application/IndexedDBModel.js");
/* harmony import */ var _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IndexedDBViews.js */ "./panels/application/IndexedDBViews.js");
/* harmony import */ var _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InterestGroupStorageModel.js */ "./panels/application/InterestGroupStorageModel.js");
/* harmony import */ var _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./InterestGroupStorageView.js */ "./panels/application/InterestGroupStorageView.js");
/* harmony import */ var _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InterestGroupTreeElement.js */ "./panels/application/InterestGroupTreeElement.js");
/* harmony import */ var _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OpenedWindowDetailsView.js */ "./panels/application/OpenedWindowDetailsView.js");
/* harmony import */ var _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./preloading/PreloadingView.js */ "./panels/application/preloading/PreloadingView.js");
/* harmony import */ var _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PreloadingTreeElement.js */ "./panels/application/PreloadingTreeElement.js");
/* harmony import */ var _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ReportingApiReportsView.js */ "./panels/application/ReportingApiReportsView.js");
/* harmony import */ var _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ReportingApiView.js */ "./panels/application/ReportingApiView.js");
/* harmony import */ var _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ResourcesPanel.js */ "./panels/application/ResourcesPanel.js");
/* harmony import */ var _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ServiceWorkerCacheViews.js */ "./panels/application/ServiceWorkerCacheViews.js");
/* harmony import */ var _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ServiceWorkersView.js */ "./panels/application/ServiceWorkersView.js");
/* harmony import */ var _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ServiceWorkerUpdateCycleView.js */ "./panels/application/ServiceWorkerUpdateCycleView.js");
/* harmony import */ var _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SharedStorageEventsView.js */ "./panels/application/SharedStorageEventsView.js");
/* harmony import */ var _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SharedStorageItemsView.js */ "./panels/application/SharedStorageItemsView.js");
/* harmony import */ var _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SharedStorageListTreeElement.js */ "./panels/application/SharedStorageListTreeElement.js");
/* harmony import */ var _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./SharedStorageModel.js */ "./panels/application/SharedStorageModel.js");
/* harmony import */ var _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./SharedStorageTreeElement.js */ "./panels/application/SharedStorageTreeElement.js");
/* harmony import */ var _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./StorageBucketsTreeElement.js */ "./panels/application/StorageBucketsTreeElement.js");
/* harmony import */ var _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./StorageItemsView.js */ "./panels/application/StorageItemsView.js");
/* harmony import */ var _StorageView_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./StorageView.js */ "./panels/application/StorageView.js");
/* harmony import */ var _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./TrustTokensTreeElement.js */ "./panels/application/TrustTokensTreeElement.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__, _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__]);
([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__, _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
































//# sourceMappingURL=application.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./panels/application/fixtures/320x320.png?4fae":
/*!*************************************************!*\
  !*** ./panels/application/fixtures/320x320.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cc5122667a49dfbfbb3.png";

/***/ }),

/***/ "./panels/application/fixtures/640x320.png?d792":
/*!*************************************************!*\
  !*** ./panels/application/fixtures/640x320.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55cffdb1a93d7cb61c9d.png";

/***/ }),

/***/ "./panels/application/fixtures/96x96.png?04ab":
/*!***********************************************!*\
  !*** ./panels/application/fixtures/96x96.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47a2c840b8950741fd78.png";

/***/ })

}]);