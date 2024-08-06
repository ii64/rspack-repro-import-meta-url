"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_overlays_OverlaysImpl_test_js"], {
"./panels/timeline/overlays/OverlaysImpl.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../timeline.js */ "./panels/timeline/timeline.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.js */ "./panels/timeline/overlays/components/components.js");
/* harmony import */var _overlays_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./overlays.js */ "./panels/timeline/overlays/overlays.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}









var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__.RenderCoordinator.RenderCoordinator.instance();
/**
 * The Overlays expects to be provided with both the main and network charts
 * and data providers. This function creates all of those and optionally sets
 * the trace data for the providers if it is provided.
 */ function createCharts(traceData) {
    var mainProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_6__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
    var networkProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_6__.TimelineFlameChartNetworkDataProvider.TimelineFlameChartNetworkDataProvider();
    var delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.MockFlameChartDelegate();
    var mainChart = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_5__.FlameChart.FlameChart(mainProvider, delegate);
    var networkChart = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_5__.FlameChart.FlameChart(networkProvider, delegate);
    if (traceData) {
        mainProvider.setModel(traceData);
        networkProvider.setModel(traceData);
        // Force the charts to render. Normally the TimelineFlameChartView would do
        // this, but we aren't creating one for these tests.
        mainChart.update();
        networkChart.update();
    }
    return {
        mainProvider: mainProvider,
        mainChart: mainChart,
        networkProvider: networkProvider,
        networkChart: networkChart
    };
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('Overlays', function() {
    beforeEach(function() {
        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupIgnoreListManagerEnvironment)();
    });
    it('can calculate the x position of an event based on the dimensions and its timestamp', /*#__PURE__*/ _async_to_generator(function() {
        var container, overlays, windowMin, windowMax, event, xPosition;
        return _ts_generator(this, function(_state) {
            container = document.createElement('div');
            overlays = new _overlays_js__WEBPACK_IMPORTED_MODULE_8__.Overlays.Overlays({
                container: container,
                charts: createCharts()
            });
            // Set up the dimensions so it is 100px wide
            overlays.updateChartDimensions('main', {
                widthPixels: 100,
                heightPixels: 50,
                scrollOffsetPixels: 0,
                allGroupsCollapsed: false
            });
            overlays.updateChartDimensions('network', {
                widthPixels: 100,
                heightPixels: 50,
                scrollOffsetPixels: 0,
                allGroupsCollapsed: false
            });
            windowMin = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(0);
            windowMax = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(100);
            // Set the visible window to be 0-100 microseconds
            overlays.updateVisibleWindow(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.traceWindowFromMicroSeconds(windowMin, windowMax));
            // Now set an event to be at 50 microseconds.
            event = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeInstantEvent)('test-event', 50);
            xPosition = overlays.xPixelForEventOnChart(event);
            assert.strictEqual(xPosition, 50);
            return [
                2
            ];
        });
    }));
    it('can calculate the y position of a main chart event', /*#__PURE__*/ _async_to_generator(function() {
        var _charts_mainProvider_eventByIndex, _charts_mainProvider, traceData, charts, container, overlays, event, yPixel;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    charts = createCharts(traceData);
                    container = document.createElement('div');
                    overlays = new _overlays_js__WEBPACK_IMPORTED_MODULE_8__.Overlays.Overlays({
                        container: container,
                        charts: charts
                    });
                    overlays.updateChartDimensions('main', {
                        widthPixels: 1000,
                        heightPixels: 500,
                        scrollOffsetPixels: 0,
                        allGroupsCollapsed: false
                    });
                    overlays.updateChartDimensions('network', {
                        widthPixels: 1000,
                        heightPixels: 200,
                        scrollOffsetPixels: 0,
                        allGroupsCollapsed: false
                    });
                    // Set the visible window to be the entire trace.
                    overlays.updateVisibleWindow(traceData.Meta.traceBounds);
                    // Find an event on the main chart that is not a frame (you cannot add overlays to frames)
                    event = (_charts_mainProvider_eventByIndex = (_charts_mainProvider = charts.mainProvider).eventByIndex) === null || _charts_mainProvider_eventByIndex === void 0 ? void 0 : _charts_mainProvider_eventByIndex.call(_charts_mainProvider, 50);
                    assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
                    assert.isOk(event);
                    yPixel = overlays.yPixelForEventOnChart(event);
                    // The Y offset for the main chart is 233px, but we add 208px on (200px for the
                    // network chart, and 8px for the re-size handle) giving us the expected
                    // 441px.
                    assert.strictEqual(yPixel, 441);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can adjust the y position of a main chart event when the network track is collapsed', /*#__PURE__*/ _async_to_generator(function() {
        var _charts_mainProvider_eventByIndex, _charts_mainProvider, traceData, charts, container, overlays, event, yPixel;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    charts = createCharts(traceData);
                    container = document.createElement('div');
                    overlays = new _overlays_js__WEBPACK_IMPORTED_MODULE_8__.Overlays.Overlays({
                        container: container,
                        charts: charts
                    });
                    overlays.updateChartDimensions('main', {
                        widthPixels: 1000,
                        heightPixels: 500,
                        scrollOffsetPixels: 0,
                        allGroupsCollapsed: false
                    });
                    overlays.updateChartDimensions('network', {
                        widthPixels: 1000,
                        heightPixels: 34,
                        scrollOffsetPixels: 0,
                        // Make the network track collapsed
                        allGroupsCollapsed: true
                    });
                    // Set the visible window to be the entire trace.
                    overlays.updateVisibleWindow(traceData.Meta.traceBounds);
                    // Find an event on the main chart that is not a frame (you cannot add overlays to frames)
                    event = (_charts_mainProvider_eventByIndex = (_charts_mainProvider = charts.mainProvider).eventByIndex) === null || _charts_mainProvider_eventByIndex === void 0 ? void 0 : _charts_mainProvider_eventByIndex.call(_charts_mainProvider, 50);
                    assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
                    assert.isOk(event);
                    yPixel = overlays.yPixelForEventOnChart(event);
                    // The Y offset for the main chart is 233px, but we add 34px on (the height
                    // of the collapsed network chart, with no resizer bar as it is hidden when
                    // the network track is collapsed). This gives us 233+34 = 267.
                    assert.strictEqual(yPixel, 267);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can calculate the y position of a network chart event', /*#__PURE__*/ _async_to_generator(function() {
        var _charts_networkProvider_eventByIndex, _charts_networkProvider, traceData, charts, container, overlays, event, yPixel;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    charts = createCharts(traceData);
                    container = document.createElement('div');
                    overlays = new _overlays_js__WEBPACK_IMPORTED_MODULE_8__.Overlays.Overlays({
                        container: container,
                        charts: charts
                    });
                    overlays.updateChartDimensions('main', {
                        widthPixels: 1000,
                        heightPixels: 500,
                        scrollOffsetPixels: 0,
                        allGroupsCollapsed: false
                    });
                    overlays.updateChartDimensions('network', {
                        widthPixels: 1000,
                        heightPixels: 200,
                        scrollOffsetPixels: 0,
                        allGroupsCollapsed: false
                    });
                    // Set the visible window to be the entire trace.
                    overlays.updateVisibleWindow(traceData.Meta.traceBounds);
                    // Fake the level being visible: because we don't fully render the chart we
                    // need to fake this for this test.
                    sinon.stub(charts.networkChart, 'levelIsVisible').callsFake(function() {
                        return true;
                    });
                    // Find an event on the network chart
                    event = (_charts_networkProvider_eventByIndex = (_charts_networkProvider = charts.networkProvider).eventByIndex) === null || _charts_networkProvider_eventByIndex === void 0 ? void 0 : _charts_networkProvider_eventByIndex.call(_charts_networkProvider, 0);
                    assert.isOk(event);
                    yPixel = overlays.yPixelForEventOnChart(event);
                    // This event is in the first level, but the first level has some offset
                    // above it to allow for the header row and the row with the timestamps on
                    // it, hence why this value is not 0px.
                    assert.strictEqual(yPixel, 34);
                    return [
                        2
                    ];
            }
        });
    }));
    describe('rendering overlays', function() {
        var setupChartWithDimensionsAndAnnotationOverlayListeners = function setupChartWithDimensionsAndAnnotationOverlayListeners(traceData) {
            var charts = createCharts(traceData);
            var container = document.createElement('div');
            var overlays = new _overlays_js__WEBPACK_IMPORTED_MODULE_8__.Overlays.Overlays({
                container: container,
                charts: charts
            });
            var currManager = _timeline_js__WEBPACK_IMPORTED_MODULE_6__.ModificationsManager.ModificationsManager.activeManager();
            // The Annotations Overlays are added through the ModificationsManager listener
            currManager === null || currManager === void 0 ? void 0 : currManager.addEventListener(_timeline_js__WEBPACK_IMPORTED_MODULE_6__.ModificationsManager.AnnotationModifiedEvent.eventName, function(event) {
                var overlay = event.overlay, action = event.action;
                if (action === 'Add') {
                    overlays.add(overlay);
                }
                overlays.update();
            });
            // When an annotation overlay is remomved, this event is dispatched to the Modifications Manager.
            overlays.addEventListener(_overlays_js__WEBPACK_IMPORTED_MODULE_8__.Overlays.AnnotationOverlayActionEvent.eventName, function(event) {
                var overlay = event.overlay, action = event.action;
                if (action === 'Remove') {
                    overlays.remove(overlay);
                }
                overlays.update();
            });
            overlays.updateChartDimensions('main', {
                widthPixels: 1000,
                heightPixels: 500,
                scrollOffsetPixels: 0,
                allGroupsCollapsed: false
            });
            overlays.updateChartDimensions('network', {
                widthPixels: 1000,
                heightPixels: 200,
                scrollOffsetPixels: 0,
                allGroupsCollapsed: false
            });
            // Set the visible window to be the entire trace.
            overlays.updateVisibleWindow(traceData.Meta.traceBounds);
            return {
                overlays: overlays,
                container: container,
                charts: charts
            };
        };
        it('can render an entry selected overlay', /*#__PURE__*/ _async_to_generator(function() {
            var _charts_mainProvider_eventByIndex, _charts_mainProvider, traceData, _setupChartWithDimensionsAndAnnotationOverlayListeners, overlays, container, charts, event, overlayDOM;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _setupChartWithDimensionsAndAnnotationOverlayListeners = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData), overlays = _setupChartWithDimensionsAndAnnotationOverlayListeners.overlays, container = _setupChartWithDimensionsAndAnnotationOverlayListeners.container, charts = _setupChartWithDimensionsAndAnnotationOverlayListeners.charts;
                        event = (_charts_mainProvider_eventByIndex = (_charts_mainProvider = charts.mainProvider).eventByIndex) === null || _charts_mainProvider_eventByIndex === void 0 ? void 0 : _charts_mainProvider_eventByIndex.call(_charts_mainProvider, 50);
                        assert.isOk(event);
                        assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
                        overlays.add({
                            type: 'ENTRY_SELECTED',
                            entry: event
                        });
                        overlays.update();
                        // Ensure that the overlay was created.
                        overlayDOM = container.querySelector('.overlay-type-ENTRY_SELECTED');
                        assert.isOk(overlayDOM);
                        return [
                            2
                        ];
                }
            });
        }));
        it('only ever renders a single selected overlay', /*#__PURE__*/ _async_to_generator(function() {
            var _charts_mainProvider_eventByIndex, _charts_mainProvider, _charts_mainProvider_eventByIndex1, _charts_mainProvider1, traceData, _setupChartWithDimensionsAndAnnotationOverlayListeners, overlays, container, charts, event1, event2, entrySelectedOverlays;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _setupChartWithDimensionsAndAnnotationOverlayListeners = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData), overlays = _setupChartWithDimensionsAndAnnotationOverlayListeners.overlays, container = _setupChartWithDimensionsAndAnnotationOverlayListeners.container, charts = _setupChartWithDimensionsAndAnnotationOverlayListeners.charts;
                        event1 = (_charts_mainProvider_eventByIndex = (_charts_mainProvider = charts.mainProvider).eventByIndex) === null || _charts_mainProvider_eventByIndex === void 0 ? void 0 : _charts_mainProvider_eventByIndex.call(_charts_mainProvider, 50);
                        event2 = (_charts_mainProvider_eventByIndex1 = (_charts_mainProvider1 = charts.mainProvider).eventByIndex) === null || _charts_mainProvider_eventByIndex1 === void 0 ? void 0 : _charts_mainProvider_eventByIndex1.call(_charts_mainProvider1, 51);
                        assert.isOk(event1);
                        assert.isOk(event2);
                        overlays.add({
                            type: 'ENTRY_SELECTED',
                            entry: event1
                        });
                        overlays.update();
                        overlays.add({
                            type: 'ENTRY_SELECTED',
                            entry: event2
                        });
                        overlays.update();
                        // There should only be one of these
                        entrySelectedOverlays = container.querySelectorAll('.overlay-type-ENTRY_SELECTED');
                        assert.lengthOf(entrySelectedOverlays, 1);
                        return [
                            2
                        ];
                }
            });
        }));
        it('can render entry label overlay', /*#__PURE__*/ _async_to_generator(function() {
            var _charts_mainProvider_eventByIndex, _charts_mainProvider, traceData, _setupChartWithDimensionsAndAnnotationOverlayListeners, overlays, container, charts, event, overlayDOM;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _setupChartWithDimensionsAndAnnotationOverlayListeners = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData), overlays = _setupChartWithDimensionsAndAnnotationOverlayListeners.overlays, container = _setupChartWithDimensionsAndAnnotationOverlayListeners.container, charts = _setupChartWithDimensionsAndAnnotationOverlayListeners.charts;
                        event = (_charts_mainProvider_eventByIndex = (_charts_mainProvider = charts.mainProvider).eventByIndex) === null || _charts_mainProvider_eventByIndex === void 0 ? void 0 : _charts_mainProvider_eventByIndex.call(_charts_mainProvider, 50);
                        assert.isOk(event);
                        assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
                        overlays.add({
                            type: 'ENTRY_LABEL',
                            entry: event,
                            label: 'entry label'
                        });
                        overlays.update();
                        // Ensure that the overlay was created.
                        overlayDOM = container.querySelector('.overlay-type-ENTRY_LABEL');
                        assert.isOk(overlayDOM);
                        return [
                            2
                        ];
                }
            });
        }));
        it('only renders one CURSOR_TIMESTAMP_MARKER as it is a singleton', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, _setupChartWithDimensionsAndAnnotationOverlayListeners, overlays, container;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _setupChartWithDimensionsAndAnnotationOverlayListeners = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData), overlays = _setupChartWithDimensionsAndAnnotationOverlayListeners.overlays, container = _setupChartWithDimensionsAndAnnotationOverlayListeners.container;
                        overlays.add({
                            type: 'CURSOR_TIMESTAMP_MARKER',
                            timestamp: traceData.Meta.traceBounds.min
                        });
                        overlays.add({
                            type: 'CURSOR_TIMESTAMP_MARKER',
                            timestamp: traceData.Meta.traceBounds.max
                        });
                        overlays.update();
                        assert.lengthOf(container.children, 1);
                        return [
                            2
                        ];
                }
            });
        }));
        it('can render the label for entry label overlay', /*#__PURE__*/ _async_to_generator(function() {
            var _charts_mainProvider_eventByIndex, _charts_mainProvider, traceData, _setupChartWithDimensionsAndAnnotationOverlayListeners, overlays, container, charts, event, overlayDOM, component, elementsWrapper, label;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _setupChartWithDimensionsAndAnnotationOverlayListeners = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData), overlays = _setupChartWithDimensionsAndAnnotationOverlayListeners.overlays, container = _setupChartWithDimensionsAndAnnotationOverlayListeners.container, charts = _setupChartWithDimensionsAndAnnotationOverlayListeners.charts;
                        event = (_charts_mainProvider_eventByIndex = (_charts_mainProvider = charts.mainProvider).eventByIndex) === null || _charts_mainProvider_eventByIndex === void 0 ? void 0 : _charts_mainProvider_eventByIndex.call(_charts_mainProvider, 50);
                        assert.isOk(event);
                        assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
                        overlays.add({
                            type: 'ENTRY_LABEL',
                            entry: event,
                            label: 'entry label'
                        });
                        overlays.update();
                        overlayDOM = container.querySelector('.overlay-type-ENTRY_LABEL');
                        assert.isOk(overlayDOM);
                        component = overlayDOM === null || overlayDOM === void 0 ? void 0 : overlayDOM.querySelector('devtools-entry-label-overlay');
                        assert.isOk(component === null || component === void 0 ? void 0 : component.shadowRoot);
                        elementsWrapper = component.shadowRoot.querySelector('.label-parts-wrapper');
                        assert.isOk(elementsWrapper);
                        label = elementsWrapper.querySelector('.label-box');
                        assert.strictEqual(label === null || label === void 0 ? void 0 : label.innerText, 'entry label');
                        return [
                            2
                        ];
                }
            });
        }));
        it('Inputting `Enter`into label overlay makes it non-editable', /*#__PURE__*/ _async_to_generator(function() {
            var _charts_mainProvider_eventByIndex, _charts_mainProvider, traceData, _setupChartWithDimensionsAndAnnotationOverlayListeners, overlays, container, charts, event, overlayDOM, component, elementsWrapper, label;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _setupChartWithDimensionsAndAnnotationOverlayListeners = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData), overlays = _setupChartWithDimensionsAndAnnotationOverlayListeners.overlays, container = _setupChartWithDimensionsAndAnnotationOverlayListeners.container, charts = _setupChartWithDimensionsAndAnnotationOverlayListeners.charts;
                        event = (_charts_mainProvider_eventByIndex = (_charts_mainProvider = charts.mainProvider).eventByIndex) === null || _charts_mainProvider_eventByIndex === void 0 ? void 0 : _charts_mainProvider_eventByIndex.call(_charts_mainProvider, 50);
                        assert.isOk(event);
                        assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
                        // Create an entry label overlay
                        overlays.add({
                            type: 'ENTRY_LABEL',
                            entry: event,
                            label: 'label'
                        });
                        overlays.update();
                        // Ensure that the overlay was created.
                        overlayDOM = container.querySelector('.overlay-type-ENTRY_LABEL');
                        assert.isOk(overlayDOM);
                        component = overlayDOM === null || overlayDOM === void 0 ? void 0 : overlayDOM.querySelector('devtools-entry-label-overlay');
                        assert.isOk(component === null || component === void 0 ? void 0 : component.shadowRoot);
                        component.connectedCallback();
                        elementsWrapper = component.shadowRoot.querySelector('.label-parts-wrapper');
                        assert.isOk(elementsWrapper);
                        label = elementsWrapper.querySelector('.label-box');
                        assert.isOk(label);
                        // Double click on the label box to make it editable and focus on it
                        label.dispatchEvent(new FocusEvent('dblclick', {
                            bubbles: true
                        }));
                        // Ensure the label content is editable
                        assert.isTrue(label.isContentEditable);
                        // Press `Enter` to make the lable not editable
                        label.dispatchEvent(new KeyboardEvent('keydown', {
                            key: 'Enter',
                            cancelable: true,
                            bubbles: true
                        }));
                        // Ensure the label content is not editable
                        assert.isFalse(label.isContentEditable);
                        return [
                            2
                        ];
                }
            });
        }));
        it('Removes empty label if it is empty when navigated away from (removed focused from)', /*#__PURE__*/ _async_to_generator(function() {
            var _charts_mainProvider_eventByIndex, _charts_mainProvider, // Create an entry label overlay
            _Timeline_ModificationsManager_ModificationsManager_activeManager, traceData, _setupChartWithDimensionsAndAnnotationOverlayListeners, overlays, container, charts, event, overlayDOM, component, elementsWrapper, label;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _setupChartWithDimensionsAndAnnotationOverlayListeners = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData), overlays = _setupChartWithDimensionsAndAnnotationOverlayListeners.overlays, container = _setupChartWithDimensionsAndAnnotationOverlayListeners.container, charts = _setupChartWithDimensionsAndAnnotationOverlayListeners.charts;
                        event = (_charts_mainProvider_eventByIndex = (_charts_mainProvider = charts.mainProvider).eventByIndex) === null || _charts_mainProvider_eventByIndex === void 0 ? void 0 : _charts_mainProvider_eventByIndex.call(_charts_mainProvider, 50);
                        assert.isOk(event);
                        (_Timeline_ModificationsManager_ModificationsManager_activeManager = _timeline_js__WEBPACK_IMPORTED_MODULE_6__.ModificationsManager.ModificationsManager.activeManager()) === null || _Timeline_ModificationsManager_ModificationsManager_activeManager === void 0 ? void 0 : _Timeline_ModificationsManager_ModificationsManager_activeManager.createAnnotation({
                            type: 'ENTRY_LABEL',
                            entry: event,
                            label: ''
                        });
                        overlays.update();
                        // Ensure that the overlay was created.
                        overlayDOM = container.querySelector('.overlay-type-ENTRY_LABEL');
                        assert.isOk(overlayDOM);
                        component = overlayDOM === null || overlayDOM === void 0 ? void 0 : overlayDOM.querySelector('devtools-entry-label-overlay');
                        assert.isOk(component === null || component === void 0 ? void 0 : component.shadowRoot);
                        component.connectedCallback();
                        elementsWrapper = component.shadowRoot.querySelector('.label-parts-wrapper');
                        assert.isOk(elementsWrapper);
                        label = elementsWrapper.querySelector('.label-box');
                        assert.isOk(label);
                        // Double click on the label box to make it editable and focus on it
                        label.dispatchEvent(new FocusEvent('dblclick', {
                            bubbles: true
                        }));
                        // Ensure that the entry has 1 overlay
                        assert.strictEqual(overlays.overlaysForEntry(event).length, 1);
                        // Change the content to not editable by changing the element blur like when clicking outside of it.
                        // The label is empty since no initial value was passed into it and no characters were entered.
                        label.dispatchEvent(new FocusEvent('blur', {
                            bubbles: true
                        }));
                        // Ensure that the entry overlay has been removed because it was saved empty
                        assert.strictEqual(overlays.overlaysForEntry(event).length, 0);
                        return [
                            2
                        ];
                }
            });
        }));
        it('Update label overlay when the label changes', /*#__PURE__*/ _async_to_generator(function() {
            var _charts_mainProvider_eventByIndex, _charts_mainProvider, // Create an entry label overlay
            _Timeline_ModificationsManager_ModificationsManager_activeManager, traceData, _setupChartWithDimensionsAndAnnotationOverlayListeners, overlays, container, charts, event, overlayDOM, component, updatedOverlay;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _setupChartWithDimensionsAndAnnotationOverlayListeners = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData), overlays = _setupChartWithDimensionsAndAnnotationOverlayListeners.overlays, container = _setupChartWithDimensionsAndAnnotationOverlayListeners.container, charts = _setupChartWithDimensionsAndAnnotationOverlayListeners.charts;
                        event = (_charts_mainProvider_eventByIndex = (_charts_mainProvider = charts.mainProvider).eventByIndex) === null || _charts_mainProvider_eventByIndex === void 0 ? void 0 : _charts_mainProvider_eventByIndex.call(_charts_mainProvider, 50);
                        assert.isOk(event);
                        (_Timeline_ModificationsManager_ModificationsManager_activeManager = _timeline_js__WEBPACK_IMPORTED_MODULE_6__.ModificationsManager.ModificationsManager.activeManager()) === null || _Timeline_ModificationsManager_ModificationsManager_activeManager === void 0 ? void 0 : _Timeline_ModificationsManager_ModificationsManager_activeManager.createAnnotation({
                            type: 'ENTRY_LABEL',
                            entry: event,
                            label: ''
                        });
                        overlays.update();
                        // Ensure that the overlay was created.
                        overlayDOM = container.querySelector('.overlay-type-ENTRY_LABEL');
                        assert.isOk(overlayDOM);
                        component = overlayDOM === null || overlayDOM === void 0 ? void 0 : overlayDOM.querySelector('devtools-entry-label-overlay');
                        assert.isOk(component === null || component === void 0 ? void 0 : component.shadowRoot);
                        component.connectedCallback();
                        component.dispatchEvent(new _components_components_js__WEBPACK_IMPORTED_MODULE_7__.EntryLabelOverlay.EntryLabelChangeEvent('new label'));
                        updatedOverlay = overlays.overlaysForEntry(event)[0];
                        assert.isOk(updatedOverlay);
                        // Make sure the label was updated in the Overlay Object
                        assert.strictEqual(updatedOverlay.label, 'new label');
                        return [
                            2
                        ];
                }
            });
        }));
        it('can render an overlay for a time range', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, _setupChartWithDimensionsAndAnnotationOverlayListeners, overlays, container, overlayDOM;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _setupChartWithDimensionsAndAnnotationOverlayListeners = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData), overlays = _setupChartWithDimensionsAndAnnotationOverlayListeners.overlays, container = _setupChartWithDimensionsAndAnnotationOverlayListeners.container;
                        overlays.add({
                            type: 'TIME_RANGE',
                            label: '',
                            showDuration: true,
                            // Make this overlay the entire span of the trace
                            bounds: traceData.Meta.traceBounds
                        });
                        overlays.update();
                        overlayDOM = container.querySelector('.overlay-type-TIME_RANGE');
                        assert.isOk(overlayDOM);
                        return [
                            2
                        ];
                }
            });
        }));
        it('can update a time range overlay with new bounds', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, _setupChartWithDimensionsAndAnnotationOverlayListeners, overlays, container, rangeOverlay, overlayDOM, firstWidth, newBounds, secondWidth;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _setupChartWithDimensionsAndAnnotationOverlayListeners = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData), overlays = _setupChartWithDimensionsAndAnnotationOverlayListeners.overlays, container = _setupChartWithDimensionsAndAnnotationOverlayListeners.container;
                        rangeOverlay = overlays.add({
                            type: 'TIME_RANGE',
                            label: '',
                            showDuration: true,
                            // Make this overlay the entire span of the trace
                            bounds: traceData.Meta.traceBounds
                        });
                        overlays.update();
                        overlayDOM = container.querySelector('.overlay-type-TIME_RANGE');
                        assert.isOk(overlayDOM);
                        firstWidth = window.parseInt(overlayDOM.style.width);
                        // change the bounds so the new min is +1second of time.
                        newBounds = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.traceWindowFromMicroSeconds(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(rangeOverlay.bounds.min + 1000 * 1000), rangeOverlay.bounds.max);
                        overlays.updateExisting(rangeOverlay, {
                            bounds: newBounds
                        });
                        overlays.update();
                        secondWidth = window.parseInt(overlayDOM.style.width);
                        // The new time range is smaller so the DOM element should have less width
                        assert.isTrue(secondWidth < firstWidth);
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders the overlay for a selected layout shift entry correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _traceData_LayoutShifts_clusters_at, traceData, _setupChartWithDimensionsAndAnnotationOverlayListeners, overlays, container, layoutShiftEvent, boundsRange, boundsMax, overlayDOM;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'cls-single-frame.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _setupChartWithDimensionsAndAnnotationOverlayListeners = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData), overlays = _setupChartWithDimensionsAndAnnotationOverlayListeners.overlays, container = _setupChartWithDimensionsAndAnnotationOverlayListeners.container;
                        layoutShiftEvent = (_traceData_LayoutShifts_clusters_at = traceData.LayoutShifts.clusters.at(0)) === null || _traceData_LayoutShifts_clusters_at === void 0 ? void 0 : _traceData_LayoutShifts_clusters_at.events.at(0);
                        if (!layoutShiftEvent) {
                            throw new Error('layoutShiftEvent was unexpectedly undefined');
                        }
                        overlays.add({
                            type: 'ENTRY_SELECTED',
                            entry: layoutShiftEvent
                        });
                        boundsRange = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(20000);
                        boundsMax = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(layoutShiftEvent.ts + boundsRange);
                        overlays.updateVisibleWindow({
                            min: layoutShiftEvent.ts,
                            max: boundsMax,
                            range: boundsRange
                        });
                        overlays.update();
                        overlayDOM = container.querySelector('.overlay-type-ENTRY_SELECTED');
                        assert.isOk(overlayDOM);
                        assert.strictEqual(window.parseInt(overlayDOM.style.width), 250);
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders the duration and label for a time range overlay', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, _setupChartWithDimensionsAndAnnotationOverlayListeners, overlays, container, overlayDOM, component, label;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _setupChartWithDimensionsAndAnnotationOverlayListeners = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData), overlays = _setupChartWithDimensionsAndAnnotationOverlayListeners.overlays, container = _setupChartWithDimensionsAndAnnotationOverlayListeners.container;
                        overlays.add({
                            type: 'TIME_RANGE',
                            label: '',
                            showDuration: true,
                            // Make this overlay the entire span of the trace
                            bounds: traceData.Meta.traceBounds
                        });
                        overlays.update();
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        overlayDOM = container.querySelector('.overlay-type-TIME_RANGE');
                        component = overlayDOM === null || overlayDOM === void 0 ? void 0 : overlayDOM.querySelector('devtools-time-range-overlay');
                        assert.isOk(component === null || component === void 0 ? void 0 : component.shadowRoot);
                        label = component.shadowRoot.querySelector('.label');
                        assert.isOk(label);
                        assert.strictEqual(label === null || label === void 0 ? void 0 : label.innerText, '1.26\xA0s');
                        return [
                            2
                        ];
                }
            });
        }));
        it('can remove an overlay', /*#__PURE__*/ _async_to_generator(function() {
            var _charts_mainProvider_eventByIndex, _charts_mainProvider, traceData, _setupChartWithDimensionsAndAnnotationOverlayListeners, overlays, container, charts, event, selectedOverlay;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _setupChartWithDimensionsAndAnnotationOverlayListeners = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData), overlays = _setupChartWithDimensionsAndAnnotationOverlayListeners.overlays, container = _setupChartWithDimensionsAndAnnotationOverlayListeners.container, charts = _setupChartWithDimensionsAndAnnotationOverlayListeners.charts;
                        event = (_charts_mainProvider_eventByIndex = (_charts_mainProvider = charts.mainProvider).eventByIndex) === null || _charts_mainProvider_eventByIndex === void 0 ? void 0 : _charts_mainProvider_eventByIndex.call(_charts_mainProvider, 50);
                        assert.isOk(event);
                        assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
                        selectedOverlay = overlays.add({
                            type: 'ENTRY_SELECTED',
                            entry: event
                        });
                        overlays.update();
                        assert.lengthOf(container.children, 1);
                        overlays.remove(selectedOverlay);
                        overlays.update();
                        assert.lengthOf(container.children, 0);
                        return [
                            2
                        ];
                }
            });
        }));
        it('can render an entry selected overlay for a frame', /*#__PURE__*/ _async_to_generator(function() {
            var _charts_mainProvider_eventByIndex, _charts_mainProvider, traceData, _setupChartWithDimensionsAndAnnotationOverlayListeners, overlays, container, charts, timelineFrame, overlayDOM;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _setupChartWithDimensionsAndAnnotationOverlayListeners = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData), overlays = _setupChartWithDimensionsAndAnnotationOverlayListeners.overlays, container = _setupChartWithDimensionsAndAnnotationOverlayListeners.container, charts = _setupChartWithDimensionsAndAnnotationOverlayListeners.charts;
                        timelineFrame = (_charts_mainProvider_eventByIndex = (_charts_mainProvider = charts.mainProvider).eventByIndex) === null || _charts_mainProvider_eventByIndex === void 0 ? void 0 : _charts_mainProvider_eventByIndex.call(_charts_mainProvider, 5);
                        assert.isOk(timelineFrame);
                        assert.instanceOf(timelineFrame, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
                        overlays.add({
                            type: 'ENTRY_SELECTED',
                            entry: timelineFrame
                        });
                        overlays.update();
                        // Ensure that the overlay was created.
                        overlayDOM = container.querySelector('.overlay-type-ENTRY_SELECTED');
                        assert.isOk(overlayDOM);
                        return [
                            2
                        ];
                }
            });
        }));
        it('can return a list of overlays for an entry', /*#__PURE__*/ _async_to_generator(function() {
            var _charts_mainProvider_eventByIndex, _charts_mainProvider, traceData, _setupChartWithDimensionsAndAnnotationOverlayListeners, overlays, charts, event, existingOverlays;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _setupChartWithDimensionsAndAnnotationOverlayListeners = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData), overlays = _setupChartWithDimensionsAndAnnotationOverlayListeners.overlays, charts = _setupChartWithDimensionsAndAnnotationOverlayListeners.charts;
                        event = (_charts_mainProvider_eventByIndex = (_charts_mainProvider = charts.mainProvider).eventByIndex) === null || _charts_mainProvider_eventByIndex === void 0 ? void 0 : _charts_mainProvider_eventByIndex.call(_charts_mainProvider, 50);
                        assert.isOk(event);
                        assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
                        overlays.add({
                            type: 'ENTRY_SELECTED',
                            entry: event
                        });
                        assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
                        existingOverlays = overlays.overlaysForEntry(event);
                        assert.deepEqual(existingOverlays, [
                            {
                                type: 'ENTRY_SELECTED',
                                entry: event
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('can delete overlays and remove them from the DOM', /*#__PURE__*/ _async_to_generator(function() {
            var _charts_mainProvider_eventByIndex, _charts_mainProvider, traceData, _setupChartWithDimensionsAndAnnotationOverlayListeners, container, overlays, charts, event, removedCount;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _setupChartWithDimensionsAndAnnotationOverlayListeners = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData), container = _setupChartWithDimensionsAndAnnotationOverlayListeners.container, overlays = _setupChartWithDimensionsAndAnnotationOverlayListeners.overlays, charts = _setupChartWithDimensionsAndAnnotationOverlayListeners.charts;
                        event = (_charts_mainProvider_eventByIndex = (_charts_mainProvider = charts.mainProvider).eventByIndex) === null || _charts_mainProvider_eventByIndex === void 0 ? void 0 : _charts_mainProvider_eventByIndex.call(_charts_mainProvider, 50);
                        assert.isOk(event);
                        assert.notInstanceOf(event, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame);
                        overlays.add({
                            type: 'ENTRY_SELECTED',
                            entry: event
                        });
                        overlays.update();
                        assert.lengthOf(container.children, 1);
                        removedCount = overlays.removeOverlaysOfType('ENTRY_SELECTED');
                        assert.strictEqual(removedCount, 1);
                        assert.lengthOf(container.children, 0);
                        return [
                            2
                        ];
                }
            });
        }));
        it('the label entry field is editable when created', /*#__PURE__*/ _async_to_generator(function() {
            var _charts_mainProvider_eventByIndex, _charts_mainProvider, // Since ENTRY_LABEL is AnnotationOverlay, create it through ModificationsManager
            _Timeline_ModificationsManager_ModificationsManager_activeManager, traceData, _setupChartWithDimensionsAndAnnotationOverlayListeners, overlays, container, charts, event, overlayDOM, component, elementsWrapper, labelBox;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _setupChartWithDimensionsAndAnnotationOverlayListeners = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData), overlays = _setupChartWithDimensionsAndAnnotationOverlayListeners.overlays, container = _setupChartWithDimensionsAndAnnotationOverlayListeners.container;
                        charts = createCharts(traceData);
                        event = (_charts_mainProvider_eventByIndex = (_charts_mainProvider = charts.mainProvider).eventByIndex) === null || _charts_mainProvider_eventByIndex === void 0 ? void 0 : _charts_mainProvider_eventByIndex.call(_charts_mainProvider, 50);
                        assert.isOk(event);
                        (_Timeline_ModificationsManager_ModificationsManager_activeManager = _timeline_js__WEBPACK_IMPORTED_MODULE_6__.ModificationsManager.ModificationsManager.activeManager()) === null || _Timeline_ModificationsManager_ModificationsManager_activeManager === void 0 ? void 0 : _Timeline_ModificationsManager_ModificationsManager_activeManager.createAnnotation({
                            type: 'ENTRY_LABEL',
                            label: '',
                            entry: event
                        });
                        overlays.update();
                        overlayDOM = container.querySelector('.overlay-type-ENTRY_LABEL');
                        assert.isOk(overlayDOM);
                        component = overlayDOM === null || overlayDOM === void 0 ? void 0 : overlayDOM.querySelector('devtools-entry-label-overlay');
                        assert.isOk(component === null || component === void 0 ? void 0 : component.shadowRoot);
                        elementsWrapper = component.shadowRoot.querySelector('.label-parts-wrapper');
                        labelBox = elementsWrapper === null || elementsWrapper === void 0 ? void 0 : elementsWrapper.querySelector('.label-box');
                        // The label input box should be editable after it is created and before anything else happened
                        assert.isTrue(labelBox.isContentEditable);
                        return [
                            2
                        ];
                }
            });
        }));
        it('the label entry field is in focus after being double clicked on', /*#__PURE__*/ _async_to_generator(function() {
            var _charts_mainProvider_eventByIndex, _charts_mainProvider, // Since ENTRY_LABEL is AnnotationOverlay, create it through ModificationsManager
            _Timeline_ModificationsManager_ModificationsManager_activeManager, traceData, _setupChartWithDimensionsAndAnnotationOverlayListeners, overlays, container, charts, event, overlayDOM, component, elementsWrapper, labelBox;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _setupChartWithDimensionsAndAnnotationOverlayListeners = setupChartWithDimensionsAndAnnotationOverlayListeners(traceData), overlays = _setupChartWithDimensionsAndAnnotationOverlayListeners.overlays, container = _setupChartWithDimensionsAndAnnotationOverlayListeners.container;
                        charts = createCharts(traceData);
                        event = (_charts_mainProvider_eventByIndex = (_charts_mainProvider = charts.mainProvider).eventByIndex) === null || _charts_mainProvider_eventByIndex === void 0 ? void 0 : _charts_mainProvider_eventByIndex.call(_charts_mainProvider, 50);
                        assert.isOk(event);
                        (_Timeline_ModificationsManager_ModificationsManager_activeManager = _timeline_js__WEBPACK_IMPORTED_MODULE_6__.ModificationsManager.ModificationsManager.activeManager()) === null || _Timeline_ModificationsManager_ModificationsManager_activeManager === void 0 ? void 0 : _Timeline_ModificationsManager_ModificationsManager_activeManager.createAnnotation({
                            type: 'ENTRY_LABEL',
                            label: '',
                            entry: event
                        });
                        overlays.update();
                        overlayDOM = container.querySelector('.overlay-type-ENTRY_LABEL');
                        assert.isOk(overlayDOM);
                        component = overlayDOM === null || overlayDOM === void 0 ? void 0 : overlayDOM.querySelector('devtools-entry-label-overlay');
                        assert.isOk(component === null || component === void 0 ? void 0 : component.shadowRoot);
                        elementsWrapper = component.shadowRoot.querySelector('.label-parts-wrapper');
                        assert.isOk(elementsWrapper);
                        labelBox = elementsWrapper.querySelector('.label-box');
                        // The label input box should be editable after it is created and before anything else happened
                        assert.isTrue(labelBox.isContentEditable);
                        // Make the content to editable by changing the element blur like when clicking outside of it.
                        // When that happens, the content should be set to not editable.
                        labelBox.dispatchEvent(new FocusEvent('blur', {
                            bubbles: true
                        }));
                        assert.isFalse(labelBox.isContentEditable);
                        // Double click on the label to make it editable again
                        labelBox.dispatchEvent(new FocusEvent('dblclick', {
                            bubbles: true
                        }));
                        assert.isTrue(labelBox.isContentEditable);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=OverlaysImpl.test.js.map


}),

}]);