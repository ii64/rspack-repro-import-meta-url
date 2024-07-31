"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_AppManifestView_test_ts"],{

/***/ "./src/panels/application/AppManifestView.test.ts":
/*!********************************************************!*\
  !*** ./src/panels/application/AppManifestView.test.ts ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./application.js */ "./src/panels/application/application.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_6__]);
_application_js__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('AppManifestView', () => {
    const FIXTURES_96X96_URL = `${new URL(/* asset import */ __webpack_require__(/*! ./fixtures/96x96.png */ "./src/panels/application/fixtures/96x96.png?2edb"), __webpack_require__.b)}`;
    const FIXTURES_320X320_URL = `${new URL(/* asset import */ __webpack_require__(/*! ./fixtures/320x320.png */ "./src/panels/application/fixtures/320x320.png?bc64"), __webpack_require__.b)}`;
    const FIXTURES_640X320_URL = `${new URL(/* asset import */ __webpack_require__(/*! ./fixtures/640x320.png */ "./src/panels/application/fixtures/640x320.png?ce31"), __webpack_require__.b)}`;
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
            view.addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_6__.AppManifestView.Events.ManifestDetected, resolve, { once: true });
        });
        assert.isTrue(emptyView.isShowing());
        assert.isFalse(reportView.isShowing());
        resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.DOMContentLoaded, 42);
        await new Promise(resolve => {
            view.addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_6__.AppManifestView.Events.ManifestDetected, resolve, { once: true });
        });
        assert.isTrue(emptyView.isShowing());
        assert.isFalse(reportView.isShowing());
        resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.DOMContentLoaded, 42);
        await new Promise(resolve => {
            view.addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_6__.AppManifestView.Events.ManifestDetected, resolve, { once: true });
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
            view.addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_6__.AppManifestView.Events.ManifestDetected, resolve, { once: true });
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
            view.addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_6__.AppManifestView.Events.ManifestRendered, resolve, { once: true });
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/panels/application/fixtures/320x320.png?bc64":
/*!*****************************************************!*\
  !*** ./src/panels/application/fixtures/320x320.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cc5122667a49dfbfbb3.png";

/***/ }),

/***/ "./src/panels/application/fixtures/640x320.png?ce31":
/*!*****************************************************!*\
  !*** ./src/panels/application/fixtures/640x320.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55cffdb1a93d7cb61c9d.png";

/***/ }),

/***/ "./src/panels/application/fixtures/96x96.png?2edb":
/*!***************************************************!*\
  !*** ./src/panels/application/fixtures/96x96.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47a2c840b8950741fd78.png";

/***/ })

}]);