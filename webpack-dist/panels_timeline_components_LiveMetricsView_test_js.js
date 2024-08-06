"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_timeline_components_LiveMetricsView_test_js"],{

/***/ "./panels/timeline/components/LiveMetricsView.test.js":
/*!************************************************************!*\
  !*** ./panels/timeline/components/LiveMetricsView.test.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_crux_manager_crux_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/crux-manager/crux-manager.js */ "./models/crux-manager/crux-manager.js");
/* harmony import */ var _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/emulation/emulation.js */ "./models/emulation/emulation.js");
/* harmony import */ var _models_live_metrics_live_metrics_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/live-metrics/live-metrics.js */ "./models/live-metrics/live-metrics.js");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components.js */ "./panels/timeline/components/components.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__.RenderCoordinator.RenderCoordinator.instance();
function getLocalMetricValue(view, metric) {
    const card = view.shadowRoot.querySelector(`#${metric} devtools-metric-card`);
    return card.querySelector('[slot="local-value"] .metric-value');
}
function getFieldMetricValue(view, metric) {
    const card = view.shadowRoot.querySelector(`#${metric} devtools-metric-card`);
    return card.querySelector('[slot="field-value"] .metric-value');
}
function getFieldHistogramPercents(view, metric) {
    const card = view.shadowRoot.querySelector(`#${metric} devtools-metric-card`);
    const histogram = card.querySelector('.field-data-histogram');
    const percents = Array.from(histogram.querySelectorAll('.histogram-percent'));
    return percents.map(p => p.textContent || '');
}
function getThrottlingRecommendation(view) {
    return view.shadowRoot.querySelector('.throttling-recommendation');
}
function getInteractions(view) {
    const interactionsListEl = view.shadowRoot?.querySelector('.interactions-list');
    return Array.from(interactionsListEl.querySelectorAll('.interaction'));
}
function selectDeviceOption(view, deviceOption) {
    const deviceScopeSelector = view.shadowRoot.querySelector('#device-scope-select devtools-select-menu');
    const deviceScopeOptions = Array.from(deviceScopeSelector.querySelectorAll('#device-scope-select devtools-menu-item'));
    deviceScopeSelector.click();
    deviceScopeOptions.find(o => o.value === deviceOption).click();
}
function selectPageScope(view, pageScope) {
    const pageScopeSelector = view.shadowRoot.querySelector('#page-scope-select devtools-select-menu');
    pageScopeSelector.click();
    const pageScopeOptions = Array.from(pageScopeSelector.querySelectorAll('#page-scope-select devtools-menu-item'));
    const originOption = pageScopeOptions.find(o => o.value === pageScope);
    originOption.click();
}
function createMockFieldData() {
    return {
        record: {
            key: {
                // Only one of these keys will be set for a given result in reality
                // Setting both here to make testing easier.
                url: 'https://example.com/',
                origin: 'https://example.com',
            },
            metrics: {
                'largest_contentful_paint': {
                    histogram: [
                        { start: 0, end: 2500, density: 0.5 },
                        { start: 2500, end: 4000, density: 0.3 },
                        { start: 4000, density: 0.2 },
                    ],
                    percentiles: { p75: 1000 },
                },
                'cumulative_layout_shift': {
                    histogram: [
                        { start: 0, end: 0.1 },
                        { start: 0.1, end: 0.25, density: 0.2 },
                        { start: 0.25, density: 0.8 },
                    ],
                    percentiles: { p75: 0.25 },
                },
                'round_trip_time': {
                    percentiles: { p75: 150 },
                },
            },
            collectionPeriod: {
                firstDate: { year: 2024, month: 1, day: 1 },
                lastDate: { year: 2024, month: 1, day: 29 },
            },
        },
    };
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.describeWithMockConnection)('LiveMetricsView', () => {
    const mockHandleAction = sinon.stub();
    beforeEach(async () => {
        mockHandleAction.reset();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ActionRegistration.registerActionExtension({
            actionId: 'timeline.toggle-recording',
            category: "PERFORMANCE" /* UI.ActionRegistration.ActionCategory.PERFORMANCE */,
            loadActionDelegate: async () => ({ handleAction: mockHandleAction }),
        });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ActionRegistration.registerActionExtension({
            actionId: 'timeline.record-reload',
            category: "PERFORMANCE" /* UI.ActionRegistration.ActionCategory.PERFORMANCE */,
            loadActionDelegate: async () => ({ handleAction: mockHandleAction }),
        });
        const dummyStorage = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({});
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.registerSettingExtension({
            category: "MOBILE" /* Common.Settings.SettingCategory.MOBILE */,
            settingName: 'emulation.show-device-outline',
            settingType: "boolean" /* Common.Settings.SettingType.BOOLEAN */,
            defaultValue: false,
        });
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
            forceNew: true,
            syncedStorage: dummyStorage,
            globalStorage: dummyStorage,
            localStorage: dummyStorage,
        });
        const actionRegistryInstance = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ActionRegistry.ActionRegistry.instance({ forceNew: true });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ShortcutRegistry.ShortcutRegistry.instance({ forceNew: true, actionRegistry: actionRegistryInstance });
        _models_live_metrics_live_metrics_js__WEBPACK_IMPORTED_MODULE_4__.LiveMetrics.instance({ forceNew: true });
        _models_crux_manager_crux_manager_js__WEBPACK_IMPORTED_MODULE_2__.CrUXManager.instance({ forceNew: true });
        _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_3__.DeviceModeModel.DeviceModeModel.instance({ forceNew: true });
    });
    afterEach(async () => {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ActionRegistry.ActionRegistry.reset();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ShortcutRegistry.ShortcutRegistry.removeInstance();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ActionRegistration.maybeRemoveActionExtension('timeline.toggle-recording');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ActionRegistration.maybeRemoveActionExtension('timeline.record-reload');
    });
    it('should show LCP value', async () => {
        const view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
        _models_live_metrics_live_metrics_js__WEBPACK_IMPORTED_MODULE_4__.LiveMetrics.instance().dispatchEventToListeners("status" /* LiveMetrics.Events.Status */, {
            lcp: { value: 100 },
            interactions: [],
        });
        await coordinator.done();
        const metricValueEl = getLocalMetricValue(view, 'lcp');
        assert.strictEqual(metricValueEl.className, 'metric-value good');
        assert.strictEqual(metricValueEl.innerText, '100 ms');
    });
    it('should show CLS value', async () => {
        const view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
        _models_live_metrics_live_metrics_js__WEBPACK_IMPORTED_MODULE_4__.LiveMetrics.instance().dispatchEventToListeners("status" /* LiveMetrics.Events.Status */, {
            cls: { value: 0.14294789234 },
            interactions: [],
        });
        await coordinator.done();
        const metricValueEl = getLocalMetricValue(view, 'cls');
        assert.strictEqual(metricValueEl.className, 'metric-value needs-improvement');
        assert.strictEqual(metricValueEl.innerText, '0.14');
    });
    it('should show INP value', async () => {
        const view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
        _models_live_metrics_live_metrics_js__WEBPACK_IMPORTED_MODULE_4__.LiveMetrics.instance().dispatchEventToListeners("status" /* LiveMetrics.Events.Status */, { inp: { value: 2000 }, interactions: [] });
        await coordinator.done();
        const metricValueEl = getLocalMetricValue(view, 'inp');
        assert.strictEqual(metricValueEl.className, 'metric-value poor');
        assert.strictEqual(metricValueEl.innerText, '2.00 s');
    });
    it('should show empty metric', async () => {
        const view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
        await coordinator.done();
        const metricValueEl = getLocalMetricValue(view, 'inp');
        assert.strictEqual(metricValueEl.className.trim(), 'metric-value waiting');
        assert.strictEqual(metricValueEl.innerText, '-');
    });
    it('should show interactions', async () => {
        const view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
        _models_live_metrics_live_metrics_js__WEBPACK_IMPORTED_MODULE_4__.LiveMetrics.instance().dispatchEventToListeners("status" /* LiveMetrics.Events.Status */, {
            interactions: [
                { duration: 500, interactionType: 'pointer' },
                { duration: 30, interactionType: 'keyboard' },
            ],
        });
        await coordinator.done();
        const interactionsEls = getInteractions(view);
        assert.lengthOf(interactionsEls, 2);
        const typeEl1 = interactionsEls[0].querySelector('.interaction-type');
        assert.strictEqual(typeEl1.textContent, 'pointer');
        const durationEl1 = interactionsEls[0].querySelector('.interaction-duration .metric-value');
        assert.strictEqual(durationEl1.textContent, '500 ms');
        assert.strictEqual(durationEl1.className, 'metric-value needs-improvement');
        const typeEl2 = interactionsEls[1].querySelector('.interaction-type');
        assert.strictEqual(typeEl2.textContent, 'keyboard');
        const durationEl2 = interactionsEls[1].querySelector('.interaction-duration .metric-value');
        assert.strictEqual(durationEl2.textContent, '30 ms');
        assert.strictEqual(durationEl2.className, 'metric-value good');
    });
    it('record action button should work', async () => {
        const view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
        await coordinator.done();
        const recordButton = view.shadowRoot?.querySelector('#record devtools-button');
        recordButton.click();
        await coordinator.done();
        assert.strictEqual(mockHandleAction.firstCall.args[1], 'timeline.toggle-recording');
    });
    it('record page load button should work', async () => {
        const view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
        await coordinator.done();
        const recordButton = view.shadowRoot?.querySelector('#record-page-load devtools-button');
        recordButton.click();
        await coordinator.done();
        assert.strictEqual(mockHandleAction.firstCall.args[1], 'timeline.record-reload');
    });
    describe('field data', () => {
        let target;
        let mockFieldData;
        beforeEach(async () => {
            const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Tab });
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)({ parentTarget: tabTarget });
            mockFieldData = {
                'origin-ALL': null,
                'origin-DESKTOP': null,
                'origin-PHONE': null,
                'origin-TABLET': null,
                'url-ALL': null,
                'url-DESKTOP': null,
                'url-PHONE': null,
                'url-TABLET': null,
            };
            sinon.stub(_models_crux_manager_crux_manager_js__WEBPACK_IMPORTED_MODULE_2__.CrUXManager.instance(), 'getFieldDataForCurrentPage').callsFake(async () => mockFieldData);
            _models_crux_manager_crux_manager_js__WEBPACK_IMPORTED_MODULE_2__.CrUXManager.instance().getConfigSetting().set({ enabled: true, override: '' });
        });
        it('should not show when crux is disabled', async () => {
            _models_crux_manager_crux_manager_js__WEBPACK_IMPORTED_MODULE_2__.CrUXManager.instance().getConfigSetting().set({ enabled: false, override: '' });
            mockFieldData['url-ALL'] = createMockFieldData();
            const view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
            await coordinator.done();
            const lcpPercents = getFieldHistogramPercents(view, 'lcp');
            assert.deepStrictEqual(lcpPercents, ['-', '-', '-']);
            const clsPercents = getFieldHistogramPercents(view, 'cls');
            assert.deepStrictEqual(clsPercents, ['-', '-', '-']);
            const inpPercents = getFieldHistogramPercents(view, 'inp');
            assert.deepStrictEqual(inpPercents, ['-', '-', '-']);
            const lcpFieldEl = getFieldMetricValue(view, 'lcp');
            assert.strictEqual(lcpFieldEl.textContent, '-');
            const clsFieldEl = getFieldMetricValue(view, 'cls');
            assert.strictEqual(clsFieldEl.textContent, '-');
            const inpFieldEl = getFieldMetricValue(view, 'inp');
            assert.strictEqual(inpFieldEl.textContent, '-');
            const throttlingRec = getThrottlingRecommendation(view);
            assert.isNull(throttlingRec);
        });
        it('should show when crux is enabled', async () => {
            const view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
            await coordinator.done();
            mockFieldData['url-ALL'] = createMockFieldData();
            target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel)
                ?.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameNavigated, {
                url: 'https://example.com',
                isPrimaryFrame: () => true,
            });
            await coordinator.done();
            const lcpPercents = getFieldHistogramPercents(view, 'lcp');
            assert.deepStrictEqual(lcpPercents, ['50%', '30%', '20%']);
            const clsPercents = getFieldHistogramPercents(view, 'cls');
            assert.deepStrictEqual(clsPercents, ['0%', '20%', '80%']);
            const inpPercents = getFieldHistogramPercents(view, 'inp');
            assert.deepStrictEqual(inpPercents, ['-', '-', '-']);
            const lcpFieldEl = getFieldMetricValue(view, 'lcp');
            assert.strictEqual(lcpFieldEl.textContent, '1.00 s');
            const clsFieldEl = getFieldMetricValue(view, 'cls');
            assert.strictEqual(clsFieldEl.textContent, '0.25');
            const inpFieldEl = getFieldMetricValue(view, 'inp');
            assert.strictEqual(inpFieldEl.textContent, '-');
            const throttlingRec = getThrottlingRecommendation(view);
            assert.match(throttlingRec.innerText, /Slow 4G/);
        });
        it('should make initial request on render when crux is enabled', async () => {
            mockFieldData['url-ALL'] = createMockFieldData();
            const view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
            await coordinator.done();
            const lcpFieldEl = getFieldMetricValue(view, 'lcp');
            assert.strictEqual(lcpFieldEl.textContent, '1.00 s');
        });
        it('should be removed once crux is disabled', async () => {
            mockFieldData['url-ALL'] = createMockFieldData();
            const view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
            await coordinator.done();
            const lcpFieldEl1 = getFieldMetricValue(view, 'lcp');
            assert.strictEqual(lcpFieldEl1.textContent, '1.00 s');
            _models_crux_manager_crux_manager_js__WEBPACK_IMPORTED_MODULE_2__.CrUXManager.instance().getConfigSetting().set({ enabled: false, override: '' });
            await coordinator.done();
            const lcpFieldEl2 = getFieldMetricValue(view, 'lcp');
            assert.strictEqual(lcpFieldEl2.textContent, '-');
        });
        it('should take from selected page scope', async () => {
            mockFieldData['url-ALL'] = createMockFieldData();
            mockFieldData['origin-ALL'] = createMockFieldData();
            mockFieldData['origin-ALL'].record.metrics.largest_contentful_paint.percentiles.p75 = 2000;
            const view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
            await coordinator.done();
            const lcpFieldEl1 = getFieldMetricValue(view, 'lcp');
            assert.strictEqual(lcpFieldEl1.textContent, '1.00 s');
            selectPageScope(view, 'origin');
            await coordinator.done();
            const lcpFieldEl2 = getFieldMetricValue(view, 'lcp');
            assert.strictEqual(lcpFieldEl2.textContent, '2.00 s');
        });
        it('should take from selected device scope', async () => {
            mockFieldData['url-ALL'] = createMockFieldData();
            mockFieldData['url-PHONE'] = createMockFieldData();
            mockFieldData['url-PHONE'].record.metrics.largest_contentful_paint.percentiles.p75 = 2000;
            const view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
            await coordinator.done();
            selectDeviceOption(view, 'ALL');
            const lcpFieldEl1 = getFieldMetricValue(view, 'lcp');
            assert.strictEqual(lcpFieldEl1.textContent, '1.00 s');
            selectDeviceOption(view, 'PHONE');
            await coordinator.done();
            const lcpFieldEl2 = getFieldMetricValue(view, 'lcp');
            assert.strictEqual(lcpFieldEl2.textContent, '2.00 s');
        });
        it('auto device option should chose based on emulation', async () => {
            mockFieldData['url-DESKTOP'] = createMockFieldData();
            mockFieldData['url-PHONE'] = createMockFieldData();
            mockFieldData['url-PHONE'].record.metrics.largest_contentful_paint.percentiles.p75 = 2000;
            const view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
            await coordinator.done();
            selectDeviceOption(view, 'AUTO');
            const lcpFieldEl1 = getFieldMetricValue(view, 'lcp');
            assert.strictEqual(lcpFieldEl1.textContent, '1.00 s');
            for (const device of _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_3__.EmulatedDevices.EmulatedDevicesList.instance().standard()) {
                if (device.title === 'Moto G Power') {
                    _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_3__.DeviceModeModel.DeviceModeModel.instance().emulate(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_3__.DeviceModeModel.Type.Device, device, device.modes[0], 1);
                }
            }
            await coordinator.done();
            const lcpFieldEl2 = getFieldMetricValue(view, 'lcp');
            assert.strictEqual(lcpFieldEl2.textContent, '2.00 s');
        });
        it('auto device option should fall back to all devices', async () => {
            mockFieldData['url-DESKTOP'] = createMockFieldData();
            mockFieldData['url-ALL'] = createMockFieldData();
            mockFieldData['url-ALL'].record.metrics.largest_contentful_paint.percentiles.p75 = 2000;
            const view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
            await coordinator.done();
            selectDeviceOption(view, 'AUTO');
            const lcpFieldEl1 = getFieldMetricValue(view, 'lcp');
            assert.strictEqual(lcpFieldEl1.textContent, '1.00 s');
            for (const device of _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_3__.EmulatedDevices.EmulatedDevicesList.instance().standard()) {
                if (device.title === 'Moto G Power') {
                    _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_3__.DeviceModeModel.DeviceModeModel.instance().emulate(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_3__.DeviceModeModel.Type.Device, device, device.modes[0], 1);
                }
            }
            await coordinator.done();
            const lcpFieldEl2 = getFieldMetricValue(view, 'lcp');
            assert.strictEqual(lcpFieldEl2.textContent, '2.00 s');
        });
        describe('throttling recommendation', () => {
            it('should show for closest target RTT', async () => {
                mockFieldData['url-ALL'] = createMockFieldData();
                // 165ms is the adjusted latency of "Fast 4G" but 165ms is actually closer to the target RTT
                // of "Slow 4G" than the target RTT of "Fast 4G".
                // So we should expect the recommended preset to be "Slow 4G".
                mockFieldData['url-ALL'].record.metrics.round_trip_time.percentiles.p75 = 165;
                const view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                await coordinator.done();
                const throttlingRec = getThrottlingRecommendation(view);
                assert.match(throttlingRec.innerText, /Slow 4G/);
            });
            it('should hide if no RTT data', async () => {
                mockFieldData['url-ALL'] = createMockFieldData();
                mockFieldData['url-ALL'].record.metrics.round_trip_time = undefined;
                const view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                await coordinator.done();
                const throttlingRec = getThrottlingRecommendation(view);
                assert.isNull(throttlingRec);
            });
            it('should suggest no throttling for very low latency', async () => {
                mockFieldData['url-ALL'] = createMockFieldData();
                // In theory this is closest to the "offline" preset latency of 0,
                // but that preset should be ignored.
                mockFieldData['url-ALL'].record.metrics.round_trip_time.percentiles.p75 = 1;
                const view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                await coordinator.done();
                const throttlingRec = getThrottlingRecommendation(view);
                assert.match(throttlingRec.innerText, /Try disabling/);
            });
            it('should ignore presets that are generally too far off', async () => {
                mockFieldData['url-ALL'] = createMockFieldData();
                // This is closest to the "3G" preset compared to other presets, but it's
                // still too far away in general.
                mockFieldData['url-ALL'].record.metrics.round_trip_time.percentiles.p75 = 10_000;
                const view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                await coordinator.done();
                const throttlingRec = getThrottlingRecommendation(view);
                assert.isNull(throttlingRec);
            });
        });
    });
});
//# sourceMappingURL=LiveMetricsView.test.js.map

/***/ })

}]);