"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_overlays_OverlaysImpl_test_ts"],{

/***/ "./src/panels/timeline/overlays/OverlaysImpl.test.ts":
/*!***********************************************************!*\
  !*** ./src/panels/timeline/overlays/OverlaysImpl.test.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceHelpers.js */ "./src/testing/TraceHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/legacy/components/perf_ui/perf_ui.js */ "./src/ui/legacy/components/perf_ui/perf_ui.ts");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../timeline.js */ "./src/panels/timeline/timeline.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/timeline/overlays/components/components.ts");
/* harmony import */ var _overlays_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./overlays.js */ "./src/panels/timeline/overlays/overlays.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__.RenderCoordinator.RenderCoordinator.instance();
/**
 * The Overlays expects to be provided with both the main and network charts
 * and data providers. This function creates all of those and optionally sets
 * the trace data for the providers if it is provided.
 */
function createCharts(traceData) {
    const mainProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_6__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
    const networkProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_6__.TimelineFlameChartNetworkDataProvider.TimelineFlameChartNetworkDataProvider();
    const delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.MockFlameChartDelegate();
    const mainChart = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_5__.FlameChart.FlameChart(mainProvider, delegate);
    const networkChart = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_5__.FlameChart.FlameChart(networkProvider, delegate);
    if (traceData) {
        mainProvider.setModel(traceData);
        networkProvider.setModel(traceData);
        // Force the charts to render. Normally the TimelineFlameChartView would do
        // this, but we aren't creating one for these tests.
        mainChart.update();
        networkChart.update();
    }
    return {
        mainProvider,
        mainChart,
        networkProvider,
        networkChart,
    };
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('Overlays', () => {
    beforeEach(() => {
        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupIgnoreListManagerEnvironment)();
    });
    it('can calculate the x position of an event based on the dimensions and its timestamp', async () => {
        const container = document.createElement('div');
        const overlays = new _overlays_js__WEBPACK_IMPORTED_MODULE_8__.Overlays.Overlays({
            container,
            charts: createCharts(),
        });
        // Set up the dimensions so it is 100px wide
        overlays.updateChartDimensions('main', {
            widthPixels: 100,
            heightPixels: 50,
            scrollOffsetPixels: 0,
            allGroupsCollapsed: false,
        });
        overlays.updateChartDimensions('network', {
            widthPixels: 100,
            heightPixels: 50,
            scrollOffsetPixels: 0,
            allGroupsCollapsed: false,
        });
        const windowMin = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(0);
        const windowMax = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(100);
        // Set the visible window to be 0-100 microseconds
        overlays.updateVisibleWindow(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.traceWindowFromMicroSeconds(windowMin, windowMax));
        // Now set an event to be at 50 microseconds.
        const event = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeInstantEvent)('test-event', 50);
        const xPosition = overlays.xPixelForEventOnChart(event);
        assert.strictEqual(xPosition, 50);
    });
    it('can calculate the y position of a main chart event', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
        const charts = createCharts(traceData);
        const container = document.createElement('div');
        const overlays = new _overlays_js__WEBPACK_IMPORTED_MODULE_8__.Overlays.Overlays({
            container,
            charts,
        });
        overlays.updateChartDimensions('main', {
            widthPixels: 1000,
            heightPixels: 500,
            scrollOffsetPixels: 0,
            allGroupsCollapsed: false,
        });
        overlays.updateChartDimensions('network', {
            widthPixels: 1000,
            heightPixels: 200,
            scrollOffsetPixels: 0,
            allGroupsCollapsed: false,
        });
        // Set the visible window to be the entire trace.
        overlays.updateVisibleWindow(traceData.Meta.traceBounds);
        // Find an event on the main chart that is not a frame (you cannot add overlays to frames)
        const event = charts.mainProvider.eventByIndex?.(50);
        assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
        assert.isOk(event);
        const yPixel = overlays.yPixelForEventOnChart(event);
        // The Y offset for the main chart is 233px, but we add 208px on (200px for the
        // network chart, and 8px for the re-size handle) giving us the expected
        // 441px.
        assert.strictEqual(yPixel, 441);
    });
    it('can adjust the y position of a main chart event when the network track is collapsed', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
        const charts = createCharts(traceData);
        const container = document.createElement('div');
        const overlays = new _overlays_js__WEBPACK_IMPORTED_MODULE_8__.Overlays.Overlays({
            container,
            charts,
        });
        overlays.updateChartDimensions('main', {
            widthPixels: 1000,
            heightPixels: 500,
            scrollOffsetPixels: 0,
            allGroupsCollapsed: false,
        });
        overlays.updateChartDimensions('network', {
            widthPixels: 1000,
            heightPixels: 34,
            scrollOffsetPixels: 0,
            // Make the network track collapsed
            allGroupsCollapsed: true,
        });
        // Set the visible window to be the entire trace.
        overlays.updateVisibleWindow(traceData.Meta.traceBounds);
        // Find an event on the main chart that is not a frame (you cannot add overlays to frames)
        const event = charts.mainProvider.eventByIndex?.(50);
        assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
        assert.isOk(event);
        const yPixel = overlays.yPixelForEventOnChart(event);
        // The Y offset for the main chart is 233px, but we add 34px on (the height
        // of the collapsed network chart, with no resizer bar as it is hidden when
        // the network track is collapsed). This gives us 233+34 = 267.
        assert.strictEqual(yPixel, 267);
    });
    it('can calculate the y position of a network chart event', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
        const charts = createCharts(traceData);
        const container = document.createElement('div');
        const overlays = new _overlays_js__WEBPACK_IMPORTED_MODULE_8__.Overlays.Overlays({
            container,
            charts,
        });
        overlays.updateChartDimensions('main', {
            widthPixels: 1000,
            heightPixels: 500,
            scrollOffsetPixels: 0,
            allGroupsCollapsed: false,
        });
        overlays.updateChartDimensions('network', {
            widthPixels: 1000,
            heightPixels: 200,
            scrollOffsetPixels: 0,
            allGroupsCollapsed: false,
        });
        // Set the visible window to be the entire trace.
        overlays.updateVisibleWindow(traceData.Meta.traceBounds);
        // Fake the level being visible: because we don't fully render the chart we
        // need to fake this for this test.
        sinon.stub(charts.networkChart, 'levelIsVisible').callsFake(() => true);
        // Find an event on the network chart
        const event = charts.networkProvider.eventByIndex?.(0);
        assert.isOk(event);
        const yPixel = overlays.yPixelForEventOnChart(event);
        // This event is in the first level, but the first level has some offset
        // above it to allow for the header row and the row with the timestamps on
        // it, hence why this value is not 0px.
        assert.strictEqual(yPixel, 34);
    });
    describe('rendering overlays', () => {
        function setupChartWithDimensionsAndAnnotationOverlayListeners(traceData) {
            const charts = createCharts(traceData);
            const container = document.createElement('div');
            const overlays = new _overlays_js__WEBPACK_IMPORTED_MODULE_8__.Overlays.Overlays({
                container,
                charts,
            });
            const currManager = _timeline_js__WEBPACK_IMPORTED_MODULE_6__.ModificationsManager.ModificationsManager.activeManager();
            // The Annotations Overlays are added through the ModificationsManager listener
            currManager?.addEventListener(_timeline_js__WEBPACK_IMPORTED_MODULE_6__.ModificationsManager.AnnotationModifiedEvent.eventName, event => {
                const { overlay, action } = event;
                if (action === 'Add') {
                    overlays.add(overlay);
                }
                overlays.update();
            });
            // When an annotation overlay is remomved, this event is dispatched to the Modifications Manager.
            overlays.addEventListener(_overlays_js__WEBPACK_IMPORTED_MODULE_8__.Overlays.AnnotationOverlayActionEvent.eventName, event => {
                const { overlay, action } = event;
                if (action === 'Remove') {
                    overlays.remove(overlay);
                }
                overlays.update();
            });
            overlays.updateChartDimensions('main', {
                widthPixels: 1000,
                heightPixels: 500,
                scrollOffsetPixels: 0,
                allGroupsCollapsed: false,
            });
            overlays.updateChartDimensions('network', {
                widthPixels: 1000,
                heightPixels: 200,
                scrollOffsetPixels: 0,
                allGroupsCollapsed: false,
            });
            // Set the visible window to be the entire trace.
            overlays.updateVisibleWindow(traceData.Meta.traceBounds);
            return { overlays, container, charts };
        }
        it('can render an entry selected overlay', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const { overlays, container, charts } = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData);
            const event = charts.mainProvider.eventByIndex?.(50);
            assert.isOk(event);
            assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
            overlays.add({
                type: 'ENTRY_SELECTED',
                entry: event,
            });
            overlays.update();
            // Ensure that the overlay was created.
            const overlayDOM = container.querySelector('.overlay-type-ENTRY_SELECTED');
            assert.isOk(overlayDOM);
        });
        it('only ever renders a single selected overlay', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const { overlays, container, charts } = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData);
            const event1 = charts.mainProvider.eventByIndex?.(50);
            const event2 = charts.mainProvider.eventByIndex?.(51);
            assert.isOk(event1);
            assert.isOk(event2);
            overlays.add({
                type: 'ENTRY_SELECTED',
                entry: event1,
            });
            overlays.update();
            overlays.add({
                type: 'ENTRY_SELECTED',
                entry: event2,
            });
            overlays.update();
            // There should only be one of these
            const entrySelectedOverlays = container.querySelectorAll('.overlay-type-ENTRY_SELECTED');
            assert.lengthOf(entrySelectedOverlays, 1);
        });
        it('can render entry label overlay', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const { overlays, container, charts } = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData);
            const event = charts.mainProvider.eventByIndex?.(50);
            assert.isOk(event);
            assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
            overlays.add({
                type: 'ENTRY_LABEL',
                entry: event,
                label: 'entry label',
            });
            overlays.update();
            // Ensure that the overlay was created.
            const overlayDOM = container.querySelector('.overlay-type-ENTRY_LABEL');
            assert.isOk(overlayDOM);
        });
        it('only renders one CURSOR_TIMESTAMP_MARKER as it is a singleton', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const { overlays, container } = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData);
            overlays.add({
                type: 'CURSOR_TIMESTAMP_MARKER',
                timestamp: traceData.Meta.traceBounds.min,
            });
            overlays.add({
                type: 'CURSOR_TIMESTAMP_MARKER',
                timestamp: traceData.Meta.traceBounds.max,
            });
            overlays.update();
            assert.lengthOf(container.children, 1);
        });
        it('can render the label for entry label overlay', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const { overlays, container, charts } = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData);
            const event = charts.mainProvider.eventByIndex?.(50);
            assert.isOk(event);
            assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
            overlays.add({
                type: 'ENTRY_LABEL',
                entry: event,
                label: 'entry label',
            });
            overlays.update();
            const overlayDOM = container.querySelector('.overlay-type-ENTRY_LABEL');
            assert.isOk(overlayDOM);
            const component = overlayDOM?.querySelector('devtools-entry-label-overlay');
            assert.isOk(component?.shadowRoot);
            const elementsWrapper = component.shadowRoot.querySelector('.label-parts-wrapper');
            assert.isOk(elementsWrapper);
            const label = elementsWrapper.querySelector('.label-box');
            assert.strictEqual(label?.innerText, 'entry label');
        });
        it('Inputting `Enter`into label overlay makes it non-editable', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const { overlays, container, charts } = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData);
            const event = charts.mainProvider.eventByIndex?.(50);
            assert.isOk(event);
            assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
            // Create an entry label overlay
            overlays.add({
                type: 'ENTRY_LABEL',
                entry: event,
                label: 'label',
            });
            overlays.update();
            // Ensure that the overlay was created.
            const overlayDOM = container.querySelector('.overlay-type-ENTRY_LABEL');
            assert.isOk(overlayDOM);
            const component = overlayDOM?.querySelector('devtools-entry-label-overlay');
            assert.isOk(component?.shadowRoot);
            component.connectedCallback();
            const elementsWrapper = component.shadowRoot.querySelector('.label-parts-wrapper');
            assert.isOk(elementsWrapper);
            const label = elementsWrapper.querySelector('.label-box');
            assert.isOk(label);
            // Double click on the label box to make it editable and focus on it
            label.dispatchEvent(new FocusEvent('dblclick', { bubbles: true }));
            // Ensure the label content is editable
            assert.isTrue(label.isContentEditable);
            // Press `Enter` to make the lable not editable
            label.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', cancelable: true, bubbles: true }));
            // Ensure the label content is not editable
            assert.isFalse(label.isContentEditable);
        });
        it('Removes empty label if it is empty when navigated away from (removed focused from)', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const { overlays, container, charts } = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData);
            const event = charts.mainProvider.eventByIndex?.(50);
            assert.isOk(event);
            // Create an entry label overlay
            _timeline_js__WEBPACK_IMPORTED_MODULE_6__.ModificationsManager.ModificationsManager.activeManager()?.createAnnotation({
                type: 'ENTRY_LABEL',
                entry: event,
                label: '',
            });
            overlays.update();
            // Ensure that the overlay was created.
            const overlayDOM = container.querySelector('.overlay-type-ENTRY_LABEL');
            assert.isOk(overlayDOM);
            const component = overlayDOM?.querySelector('devtools-entry-label-overlay');
            assert.isOk(component?.shadowRoot);
            component.connectedCallback();
            const elementsWrapper = component.shadowRoot.querySelector('.label-parts-wrapper');
            assert.isOk(elementsWrapper);
            const label = elementsWrapper.querySelector('.label-box');
            assert.isOk(label);
            // Double click on the label box to make it editable and focus on it
            label.dispatchEvent(new FocusEvent('dblclick', { bubbles: true }));
            // Ensure that the entry has 1 overlay
            assert.strictEqual(overlays.overlaysForEntry(event).length, 1);
            // Change the content to not editable by changing the element blur like when clicking outside of it.
            // The label is empty since no initial value was passed into it and no characters were entered.
            label.dispatchEvent(new FocusEvent('blur', { bubbles: true }));
            // Ensure that the entry overlay has been removed because it was saved empty
            assert.strictEqual(overlays.overlaysForEntry(event).length, 0);
        });
        it('Update label overlay when the label changes', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const { overlays, container, charts } = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData);
            const event = charts.mainProvider.eventByIndex?.(50);
            assert.isOk(event);
            // Create an entry label overlay
            _timeline_js__WEBPACK_IMPORTED_MODULE_6__.ModificationsManager.ModificationsManager.activeManager()?.createAnnotation({
                type: 'ENTRY_LABEL',
                entry: event,
                label: '',
            });
            overlays.update();
            // Ensure that the overlay was created.
            const overlayDOM = container.querySelector('.overlay-type-ENTRY_LABEL');
            assert.isOk(overlayDOM);
            const component = overlayDOM?.querySelector('devtools-entry-label-overlay');
            assert.isOk(component?.shadowRoot);
            component.connectedCallback();
            component.dispatchEvent(new _components_components_js__WEBPACK_IMPORTED_MODULE_7__.EntryLabelOverlay.EntryLabelChangeEvent('new label'));
            const updatedOverlay = overlays.overlaysForEntry(event)[0];
            assert.isOk(updatedOverlay);
            // Make sure the label was updated in the Overlay Object
            assert.strictEqual(updatedOverlay.label, 'new label');
        });
        it('can render an overlay for a time range', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const { overlays, container } = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData);
            overlays.add({
                type: 'TIME_RANGE',
                label: '',
                showDuration: true,
                // Make this overlay the entire span of the trace
                bounds: traceData.Meta.traceBounds,
            });
            overlays.update();
            const overlayDOM = container.querySelector('.overlay-type-TIME_RANGE');
            assert.isOk(overlayDOM);
        });
        it('can update a time range overlay with new bounds', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const { overlays, container } = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData);
            const rangeOverlay = overlays.add({
                type: 'TIME_RANGE',
                label: '',
                showDuration: true,
                // Make this overlay the entire span of the trace
                bounds: traceData.Meta.traceBounds,
            });
            overlays.update();
            const overlayDOM = container.querySelector('.overlay-type-TIME_RANGE');
            assert.isOk(overlayDOM);
            const firstWidth = window.parseInt(overlayDOM.style.width);
            // change the bounds so the new min is +1second of time.
            const newBounds = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.traceWindowFromMicroSeconds(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(rangeOverlay.bounds.min + (1000 * 1000)), rangeOverlay.bounds.max);
            overlays.updateExisting(rangeOverlay, { bounds: newBounds });
            overlays.update();
            const secondWidth = window.parseInt(overlayDOM.style.width);
            // The new time range is smaller so the DOM element should have less width
            assert.isTrue(secondWidth < firstWidth);
        });
        it('renders the overlay for a selected layout shift entry correctly', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'cls-single-frame.json.gz');
            const { overlays, container } = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData);
            const layoutShiftEvent = traceData.LayoutShifts.clusters.at(0)?.events.at(0);
            if (!layoutShiftEvent) {
                throw new Error('layoutShiftEvent was unexpectedly undefined');
            }
            overlays.add({
                type: 'ENTRY_SELECTED',
                entry: layoutShiftEvent,
            });
            const boundsRange = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(20000);
            const boundsMax = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(layoutShiftEvent.ts + boundsRange);
            overlays.updateVisibleWindow({ min: layoutShiftEvent.ts, max: boundsMax, range: boundsRange });
            overlays.update();
            const overlayDOM = container.querySelector('.overlay-type-ENTRY_SELECTED');
            assert.isOk(overlayDOM);
            assert.strictEqual(window.parseInt(overlayDOM.style.width), 250);
        });
        it('renders the duration and label for a time range overlay', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const { overlays, container } = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData);
            overlays.add({
                type: 'TIME_RANGE',
                label: '',
                showDuration: true,
                // Make this overlay the entire span of the trace
                bounds: traceData.Meta.traceBounds,
            });
            overlays.update();
            await coordinator.done();
            const overlayDOM = container.querySelector('.overlay-type-TIME_RANGE');
            const component = overlayDOM?.querySelector('devtools-time-range-overlay');
            assert.isOk(component?.shadowRoot);
            const label = component.shadowRoot.querySelector('.label');
            assert.isOk(label);
            assert.strictEqual(label?.innerText, '1.26\xA0s');
        });
        it('can remove an overlay', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const { overlays, container, charts } = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData);
            const event = charts.mainProvider.eventByIndex?.(50);
            assert.isOk(event);
            assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
            const selectedOverlay = overlays.add({
                type: 'ENTRY_SELECTED',
                entry: event,
            });
            overlays.update();
            assert.lengthOf(container.children, 1);
            overlays.remove(selectedOverlay);
            overlays.update();
            assert.lengthOf(container.children, 0);
        });
        it('can render an entry selected overlay for a frame', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz');
            const { overlays, container, charts } = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData);
            const timelineFrame = charts.mainProvider.eventByIndex?.(5);
            assert.isOk(timelineFrame);
            assert.instanceOf(timelineFrame, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
            overlays.add({
                type: 'ENTRY_SELECTED',
                entry: timelineFrame,
            });
            overlays.update();
            // Ensure that the overlay was created.
            const overlayDOM = container.querySelector('.overlay-type-ENTRY_SELECTED');
            assert.isOk(overlayDOM);
        });
        it('can return a list of overlays for an entry', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const { overlays, charts } = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData);
            const event = charts.mainProvider.eventByIndex?.(50);
            assert.isOk(event);
            assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
            overlays.add({
                type: 'ENTRY_SELECTED',
                entry: event,
            });
            assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
            const existingOverlays = overlays.overlaysForEntry(event);
            assert.deepEqual(existingOverlays, [{
                    type: 'ENTRY_SELECTED',
                    entry: event,
                }]);
        });
        it('can delete overlays and remove them from the DOM', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const { container, overlays, charts } = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData);
            const event = charts.mainProvider.eventByIndex?.(50);
            assert.isOk(event);
            assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
            overlays.add({
                type: 'ENTRY_SELECTED',
                entry: event,
            });
            overlays.update();
            assert.lengthOf(container.children, 1);
            const removedCount = overlays.removeOverlaysOfType('ENTRY_SELECTED');
            assert.strictEqual(removedCount, 1);
            assert.lengthOf(container.children, 0);
        });
        it('the label entry field is editable when created', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const { overlays, container } = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData);
            const charts = createCharts(traceData);
            const event = charts.mainProvider.eventByIndex?.(50);
            assert.isOk(event);
            // Since ENTRY_LABEL is AnnotationOverlay, create it through ModificationsManager
            _timeline_js__WEBPACK_IMPORTED_MODULE_6__.ModificationsManager.ModificationsManager.activeManager()?.createAnnotation({
                type: 'ENTRY_LABEL',
                label: '',
                entry: event,
            });
            overlays.update();
            const overlayDOM = container.querySelector('.overlay-type-ENTRY_LABEL');
            assert.isOk(overlayDOM);
            const component = overlayDOM?.querySelector('devtools-entry-label-overlay');
            assert.isOk(component?.shadowRoot);
            const elementsWrapper = component.shadowRoot.querySelector('.label-parts-wrapper');
            const labelBox = elementsWrapper?.querySelector('.label-box');
            // The label input box should be editable after it is created and before anything else happened
            assert.isTrue(labelBox.isContentEditable);
        });
        it('the label entry field is in focus after being double clicked on', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const { overlays, container } = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData);
            const charts = createCharts(traceData);
            const event = charts.mainProvider.eventByIndex?.(50);
            assert.isOk(event);
            // Since ENTRY_LABEL is AnnotationOverlay, create it through ModificationsManager
            _timeline_js__WEBPACK_IMPORTED_MODULE_6__.ModificationsManager.ModificationsManager.activeManager()?.createAnnotation({
                type: 'ENTRY_LABEL',
                label: '',
                entry: event,
            });
            overlays.update();
            const overlayDOM = container.querySelector('.overlay-type-ENTRY_LABEL');
            assert.isOk(overlayDOM);
            const component = overlayDOM?.querySelector('devtools-entry-label-overlay');
            assert.isOk(component?.shadowRoot);
            const elementsWrapper = component.shadowRoot.querySelector('.label-parts-wrapper');
            assert.isOk(elementsWrapper);
            const labelBox = elementsWrapper.querySelector('.label-box');
            // The label input box should be editable after it is created and before anything else happened
            assert.isTrue(labelBox.isContentEditable);
            // Make the content to editable by changing the element blur like when clicking outside of it.
            // When that happens, the content should be set to not editable.
            labelBox.dispatchEvent(new FocusEvent('blur', { bubbles: true }));
            assert.isFalse(labelBox.isContentEditable);
            // Double click on the label to make it editable again
            labelBox.dispatchEvent(new FocusEvent('dblclick', { bubbles: true }));
            assert.isTrue(labelBox.isContentEditable);
        });
    });
});


/***/ })

}]);