"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_components_LiveMetricsView_test_js"], {
"./panels/timeline/components/LiveMetricsView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_crux_manager_crux_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/crux-manager/crux-manager.js */ "./models/crux-manager/crux-manager.js");
/* harmony import */var _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/emulation/emulation.js */ "./models/emulation/emulation.js");
/* harmony import */var _models_live_metrics_live_metrics_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/live-metrics/live-metrics.js */ "./models/live-metrics/live-metrics.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components.js */ "./panels/timeline/components/components.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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











var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__.RenderCoordinator.RenderCoordinator.instance();
function getLocalMetricValue(view, metric) {
    var card = view.shadowRoot.querySelector("#".concat(metric, " devtools-metric-card"));
    return card.querySelector('[slot="local-value"] .metric-value');
}
function getFieldMetricValue(view, metric) {
    var card = view.shadowRoot.querySelector("#".concat(metric, " devtools-metric-card"));
    return card.querySelector('[slot="field-value"] .metric-value');
}
function getFieldHistogramPercents(view, metric) {
    var card = view.shadowRoot.querySelector("#".concat(metric, " devtools-metric-card"));
    var histogram = card.querySelector('.field-data-histogram');
    var percents = Array.from(histogram.querySelectorAll('.histogram-percent'));
    return percents.map(function(p) {
        return p.textContent || '';
    });
}
function getThrottlingRecommendation(view) {
    return view.shadowRoot.querySelector('.throttling-recommendation');
}
function getInteractions(view) {
    var _view_shadowRoot;
    var interactionsListEl = (_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelector('.interactions-list');
    return Array.from(interactionsListEl.querySelectorAll('.interaction'));
}
function selectDeviceOption(view, deviceOption) {
    var deviceScopeSelector = view.shadowRoot.querySelector('#device-scope-select devtools-select-menu');
    var deviceScopeOptions = Array.from(deviceScopeSelector.querySelectorAll('#device-scope-select devtools-menu-item'));
    deviceScopeSelector.click();
    deviceScopeOptions.find(function(o) {
        return o.value === deviceOption;
    }).click();
}
function selectPageScope(view, pageScope) {
    var pageScopeSelector = view.shadowRoot.querySelector('#page-scope-select devtools-select-menu');
    pageScopeSelector.click();
    var pageScopeOptions = Array.from(pageScopeSelector.querySelectorAll('#page-scope-select devtools-menu-item'));
    var originOption = pageScopeOptions.find(function(o) {
        return o.value === pageScope;
    });
    originOption.click();
}
function createMockFieldData() {
    return {
        record: {
            key: {
                // Only one of these keys will be set for a given result in reality
                // Setting both here to make testing easier.
                url: 'https://example.com/',
                origin: 'https://example.com'
            },
            metrics: {
                'largest_contentful_paint': {
                    histogram: [
                        {
                            start: 0,
                            end: 2500,
                            density: 0.5
                        },
                        {
                            start: 2500,
                            end: 4000,
                            density: 0.3
                        },
                        {
                            start: 4000,
                            density: 0.2
                        }
                    ],
                    percentiles: {
                        p75: 1000
                    }
                },
                'cumulative_layout_shift': {
                    histogram: [
                        {
                            start: 0,
                            end: 0.1
                        },
                        {
                            start: 0.1,
                            end: 0.25,
                            density: 0.2
                        },
                        {
                            start: 0.25,
                            density: 0.8
                        }
                    ],
                    percentiles: {
                        p75: 0.25
                    }
                },
                'round_trip_time': {
                    percentiles: {
                        p75: 150
                    }
                }
            },
            collectionPeriod: {
                firstDate: {
                    year: 2024,
                    month: 1,
                    day: 1
                },
                lastDate: {
                    year: 2024,
                    month: 1,
                    day: 29
                }
            }
        }
    };
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.describeWithMockConnection)('LiveMetricsView', function() {
    var mockHandleAction = sinon.stub();
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        var dummyStorage, actionRegistryInstance;
        return _ts_generator(this, function(_state) {
            mockHandleAction.reset();
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ActionRegistration.registerActionExtension({
                actionId: 'timeline.toggle-recording',
                category: "PERFORMANCE" /* UI.ActionRegistration.ActionCategory.PERFORMANCE */ ,
                loadActionDelegate: /*#__PURE__*/ _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            {
                                handleAction: mockHandleAction
                            }
                        ];
                    });
                })
            });
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ActionRegistration.registerActionExtension({
                actionId: 'timeline.record-reload',
                category: "PERFORMANCE" /* UI.ActionRegistration.ActionCategory.PERFORMANCE */ ,
                loadActionDelegate: /*#__PURE__*/ _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            {
                                handleAction: mockHandleAction
                            }
                        ];
                    });
                })
            });
            dummyStorage = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({});
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.registerSettingExtension({
                category: "MOBILE" /* Common.Settings.SettingCategory.MOBILE */ ,
                settingName: 'emulation.show-device-outline',
                settingType: "boolean" /* Common.Settings.SettingType.BOOLEAN */ ,
                defaultValue: false
            });
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
                forceNew: true,
                syncedStorage: dummyStorage,
                globalStorage: dummyStorage,
                localStorage: dummyStorage
            });
            actionRegistryInstance = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ActionRegistry.ActionRegistry.instance({
                forceNew: true
            });
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ShortcutRegistry.ShortcutRegistry.instance({
                forceNew: true,
                actionRegistry: actionRegistryInstance
            });
            _models_live_metrics_live_metrics_js__WEBPACK_IMPORTED_MODULE_4__.LiveMetrics.instance({
                forceNew: true
            });
            _models_crux_manager_crux_manager_js__WEBPACK_IMPORTED_MODULE_2__.CrUXManager.instance({
                forceNew: true
            });
            _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_3__.DeviceModeModel.DeviceModeModel.instance({
                forceNew: true
            });
            return [
                2
            ];
        });
    }));
    afterEach(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ActionRegistry.ActionRegistry.reset();
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ShortcutRegistry.ShortcutRegistry.removeInstance();
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ActionRegistration.maybeRemoveActionExtension('timeline.toggle-recording');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ActionRegistration.maybeRemoveActionExtension('timeline.record-reload');
            return [
                2
            ];
        });
    }));
    it('should show LCP value', /*#__PURE__*/ _async_to_generator(function() {
        var view, metricValueEl;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                    _models_live_metrics_live_metrics_js__WEBPACK_IMPORTED_MODULE_4__.LiveMetrics.instance().dispatchEventToListeners("status" /* LiveMetrics.Events.Status */ , {
                        lcp: {
                            value: 100
                        },
                        interactions: []
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    metricValueEl = getLocalMetricValue(view, 'lcp');
                    assert.strictEqual(metricValueEl.className, 'metric-value good');
                    assert.strictEqual(metricValueEl.innerText, '100 ms');
                    return [
                        2
                    ];
            }
        });
    }));
    it('should show CLS value', /*#__PURE__*/ _async_to_generator(function() {
        var view, metricValueEl;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                    _models_live_metrics_live_metrics_js__WEBPACK_IMPORTED_MODULE_4__.LiveMetrics.instance().dispatchEventToListeners("status" /* LiveMetrics.Events.Status */ , {
                        cls: {
                            value: 0.14294789234
                        },
                        interactions: []
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    metricValueEl = getLocalMetricValue(view, 'cls');
                    assert.strictEqual(metricValueEl.className, 'metric-value needs-improvement');
                    assert.strictEqual(metricValueEl.innerText, '0.14');
                    return [
                        2
                    ];
            }
        });
    }));
    it('should show INP value', /*#__PURE__*/ _async_to_generator(function() {
        var view, metricValueEl;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                    _models_live_metrics_live_metrics_js__WEBPACK_IMPORTED_MODULE_4__.LiveMetrics.instance().dispatchEventToListeners("status" /* LiveMetrics.Events.Status */ , {
                        inp: {
                            value: 2000
                        },
                        interactions: []
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    metricValueEl = getLocalMetricValue(view, 'inp');
                    assert.strictEqual(metricValueEl.className, 'metric-value poor');
                    assert.strictEqual(metricValueEl.innerText, '2.00 s');
                    return [
                        2
                    ];
            }
        });
    }));
    it('should show empty metric', /*#__PURE__*/ _async_to_generator(function() {
        var view, metricValueEl;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    metricValueEl = getLocalMetricValue(view, 'inp');
                    assert.strictEqual(metricValueEl.className.trim(), 'metric-value waiting');
                    assert.strictEqual(metricValueEl.innerText, '-');
                    return [
                        2
                    ];
            }
        });
    }));
    it('should show interactions', /*#__PURE__*/ _async_to_generator(function() {
        var view, interactionsEls, typeEl1, durationEl1, typeEl2, durationEl2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                    _models_live_metrics_live_metrics_js__WEBPACK_IMPORTED_MODULE_4__.LiveMetrics.instance().dispatchEventToListeners("status" /* LiveMetrics.Events.Status */ , {
                        interactions: [
                            {
                                duration: 500,
                                interactionType: 'pointer'
                            },
                            {
                                duration: 30,
                                interactionType: 'keyboard'
                            }
                        ]
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    interactionsEls = getInteractions(view);
                    assert.lengthOf(interactionsEls, 2);
                    typeEl1 = interactionsEls[0].querySelector('.interaction-type');
                    assert.strictEqual(typeEl1.textContent, 'pointer');
                    durationEl1 = interactionsEls[0].querySelector('.interaction-duration .metric-value');
                    assert.strictEqual(durationEl1.textContent, '500 ms');
                    assert.strictEqual(durationEl1.className, 'metric-value needs-improvement');
                    typeEl2 = interactionsEls[1].querySelector('.interaction-type');
                    assert.strictEqual(typeEl2.textContent, 'keyboard');
                    durationEl2 = interactionsEls[1].querySelector('.interaction-duration .metric-value');
                    assert.strictEqual(durationEl2.textContent, '30 ms');
                    assert.strictEqual(durationEl2.className, 'metric-value good');
                    return [
                        2
                    ];
            }
        });
    }));
    it('record action button should work', /*#__PURE__*/ _async_to_generator(function() {
        var _view_shadowRoot, view, recordButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    recordButton = (_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelector('#record devtools-button');
                    recordButton.click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(mockHandleAction.firstCall.args[1], 'timeline.toggle-recording');
                    return [
                        2
                    ];
            }
        });
    }));
    it('record page load button should work', /*#__PURE__*/ _async_to_generator(function() {
        var _view_shadowRoot, view, recordButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    recordButton = (_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelector('#record-page-load devtools-button');
                    recordButton.click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(mockHandleAction.firstCall.args[1], 'timeline.record-reload');
                    return [
                        2
                    ];
            }
        });
    }));
    describe('field data', function() {
        var target;
        var mockFieldData;
        beforeEach(/*#__PURE__*/ _async_to_generator(function() {
            var tabTarget;
            return _ts_generator(this, function(_state) {
                tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)({
                    type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Tab
                });
                target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)({
                    parentTarget: tabTarget
                });
                mockFieldData = {
                    'origin-ALL': null,
                    'origin-DESKTOP': null,
                    'origin-PHONE': null,
                    'origin-TABLET': null,
                    'url-ALL': null,
                    'url-DESKTOP': null,
                    'url-PHONE': null,
                    'url-TABLET': null
                };
                sinon.stub(_models_crux_manager_crux_manager_js__WEBPACK_IMPORTED_MODULE_2__.CrUXManager.instance(), 'getFieldDataForCurrentPage').callsFake(/*#__PURE__*/ _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            mockFieldData
                        ];
                    });
                }));
                _models_crux_manager_crux_manager_js__WEBPACK_IMPORTED_MODULE_2__.CrUXManager.instance().getConfigSetting().set({
                    enabled: true,
                    override: ''
                });
                return [
                    2
                ];
            });
        }));
        it('should not show when crux is disabled', /*#__PURE__*/ _async_to_generator(function() {
            var view, lcpPercents, clsPercents, inpPercents, lcpFieldEl, clsFieldEl, inpFieldEl, throttlingRec;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _models_crux_manager_crux_manager_js__WEBPACK_IMPORTED_MODULE_2__.CrUXManager.instance().getConfigSetting().set({
                            enabled: false,
                            override: ''
                        });
                        mockFieldData['url-ALL'] = createMockFieldData();
                        view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        lcpPercents = getFieldHistogramPercents(view, 'lcp');
                        assert.deepStrictEqual(lcpPercents, [
                            '-',
                            '-',
                            '-'
                        ]);
                        clsPercents = getFieldHistogramPercents(view, 'cls');
                        assert.deepStrictEqual(clsPercents, [
                            '-',
                            '-',
                            '-'
                        ]);
                        inpPercents = getFieldHistogramPercents(view, 'inp');
                        assert.deepStrictEqual(inpPercents, [
                            '-',
                            '-',
                            '-'
                        ]);
                        lcpFieldEl = getFieldMetricValue(view, 'lcp');
                        assert.strictEqual(lcpFieldEl.textContent, '-');
                        clsFieldEl = getFieldMetricValue(view, 'cls');
                        assert.strictEqual(clsFieldEl.textContent, '-');
                        inpFieldEl = getFieldMetricValue(view, 'inp');
                        assert.strictEqual(inpFieldEl.textContent, '-');
                        throttlingRec = getThrottlingRecommendation(view);
                        assert.isNull(throttlingRec);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should show when crux is enabled', /*#__PURE__*/ _async_to_generator(function() {
            var _target_model, view, lcpPercents, clsPercents, inpPercents, lcpFieldEl, clsFieldEl, inpFieldEl, throttlingRec;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        mockFieldData['url-ALL'] = createMockFieldData();
                        (_target_model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel)) === null || _target_model === void 0 ? void 0 : _target_model.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameNavigated, {
                            url: 'https://example.com',
                            isPrimaryFrame: function() {
                                return true;
                            }
                        });
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        lcpPercents = getFieldHistogramPercents(view, 'lcp');
                        assert.deepStrictEqual(lcpPercents, [
                            '50%',
                            '30%',
                            '20%'
                        ]);
                        clsPercents = getFieldHistogramPercents(view, 'cls');
                        assert.deepStrictEqual(clsPercents, [
                            '0%',
                            '20%',
                            '80%'
                        ]);
                        inpPercents = getFieldHistogramPercents(view, 'inp');
                        assert.deepStrictEqual(inpPercents, [
                            '-',
                            '-',
                            '-'
                        ]);
                        lcpFieldEl = getFieldMetricValue(view, 'lcp');
                        assert.strictEqual(lcpFieldEl.textContent, '1.00 s');
                        clsFieldEl = getFieldMetricValue(view, 'cls');
                        assert.strictEqual(clsFieldEl.textContent, '0.25');
                        inpFieldEl = getFieldMetricValue(view, 'inp');
                        assert.strictEqual(inpFieldEl.textContent, '-');
                        throttlingRec = getThrottlingRecommendation(view);
                        assert.match(throttlingRec.innerText, /Slow 4G/);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should make initial request on render when crux is enabled', /*#__PURE__*/ _async_to_generator(function() {
            var view, lcpFieldEl;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockFieldData['url-ALL'] = createMockFieldData();
                        view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        lcpFieldEl = getFieldMetricValue(view, 'lcp');
                        assert.strictEqual(lcpFieldEl.textContent, '1.00 s');
                        return [
                            2
                        ];
                }
            });
        }));
        it('should be removed once crux is disabled', /*#__PURE__*/ _async_to_generator(function() {
            var view, lcpFieldEl1, lcpFieldEl2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockFieldData['url-ALL'] = createMockFieldData();
                        view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        lcpFieldEl1 = getFieldMetricValue(view, 'lcp');
                        assert.strictEqual(lcpFieldEl1.textContent, '1.00 s');
                        _models_crux_manager_crux_manager_js__WEBPACK_IMPORTED_MODULE_2__.CrUXManager.instance().getConfigSetting().set({
                            enabled: false,
                            override: ''
                        });
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        lcpFieldEl2 = getFieldMetricValue(view, 'lcp');
                        assert.strictEqual(lcpFieldEl2.textContent, '-');
                        return [
                            2
                        ];
                }
            });
        }));
        it('should take from selected page scope', /*#__PURE__*/ _async_to_generator(function() {
            var view, lcpFieldEl1, lcpFieldEl2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockFieldData['url-ALL'] = createMockFieldData();
                        mockFieldData['origin-ALL'] = createMockFieldData();
                        mockFieldData['origin-ALL'].record.metrics.largest_contentful_paint.percentiles.p75 = 2000;
                        view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        lcpFieldEl1 = getFieldMetricValue(view, 'lcp');
                        assert.strictEqual(lcpFieldEl1.textContent, '1.00 s');
                        selectPageScope(view, 'origin');
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        lcpFieldEl2 = getFieldMetricValue(view, 'lcp');
                        assert.strictEqual(lcpFieldEl2.textContent, '2.00 s');
                        return [
                            2
                        ];
                }
            });
        }));
        it('should take from selected device scope', /*#__PURE__*/ _async_to_generator(function() {
            var view, lcpFieldEl1, lcpFieldEl2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockFieldData['url-ALL'] = createMockFieldData();
                        mockFieldData['url-PHONE'] = createMockFieldData();
                        mockFieldData['url-PHONE'].record.metrics.largest_contentful_paint.percentiles.p75 = 2000;
                        view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        selectDeviceOption(view, 'ALL');
                        lcpFieldEl1 = getFieldMetricValue(view, 'lcp');
                        assert.strictEqual(lcpFieldEl1.textContent, '1.00 s');
                        selectDeviceOption(view, 'PHONE');
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        lcpFieldEl2 = getFieldMetricValue(view, 'lcp');
                        assert.strictEqual(lcpFieldEl2.textContent, '2.00 s');
                        return [
                            2
                        ];
                }
            });
        }));
        it('auto device option should chose based on emulation', /*#__PURE__*/ _async_to_generator(function() {
            var view, lcpFieldEl1, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, device, lcpFieldEl2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockFieldData['url-DESKTOP'] = createMockFieldData();
                        mockFieldData['url-PHONE'] = createMockFieldData();
                        mockFieldData['url-PHONE'].record.metrics.largest_contentful_paint.percentiles.p75 = 2000;
                        view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        selectDeviceOption(view, 'AUTO');
                        lcpFieldEl1 = getFieldMetricValue(view, 'lcp');
                        assert.strictEqual(lcpFieldEl1.textContent, '1.00 s');
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_3__.EmulatedDevices.EmulatedDevicesList.instance().standard()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                device = _step.value;
                                if (device.title === 'Moto G Power') {
                                    _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_3__.DeviceModeModel.DeviceModeModel.instance().emulate(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_3__.DeviceModeModel.Type.Device, device, device.modes[0], 1);
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        lcpFieldEl2 = getFieldMetricValue(view, 'lcp');
                        assert.strictEqual(lcpFieldEl2.textContent, '2.00 s');
                        return [
                            2
                        ];
                }
            });
        }));
        it('auto device option should fall back to all devices', /*#__PURE__*/ _async_to_generator(function() {
            var view, lcpFieldEl1, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, device, lcpFieldEl2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockFieldData['url-DESKTOP'] = createMockFieldData();
                        mockFieldData['url-ALL'] = createMockFieldData();
                        mockFieldData['url-ALL'].record.metrics.largest_contentful_paint.percentiles.p75 = 2000;
                        view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        selectDeviceOption(view, 'AUTO');
                        lcpFieldEl1 = getFieldMetricValue(view, 'lcp');
                        assert.strictEqual(lcpFieldEl1.textContent, '1.00 s');
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_3__.EmulatedDevices.EmulatedDevicesList.instance().standard()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                device = _step.value;
                                if (device.title === 'Moto G Power') {
                                    _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_3__.DeviceModeModel.DeviceModeModel.instance().emulate(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_3__.DeviceModeModel.Type.Device, device, device.modes[0], 1);
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        lcpFieldEl2 = getFieldMetricValue(view, 'lcp');
                        assert.strictEqual(lcpFieldEl2.textContent, '2.00 s');
                        return [
                            2
                        ];
                }
            });
        }));
        describe('throttling recommendation', function() {
            it('should show for closest target RTT', /*#__PURE__*/ _async_to_generator(function() {
                var view, throttlingRec;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            mockFieldData['url-ALL'] = createMockFieldData();
                            // 165ms is the adjusted latency of "Fast 4G" but 165ms is actually closer to the target RTT
                            // of "Slow 4G" than the target RTT of "Fast 4G".
                            // So we should expect the recommended preset to be "Slow 4G".
                            mockFieldData['url-ALL'].record.metrics.round_trip_time.percentiles.p75 = 165;
                            view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 1:
                            _state.sent();
                            throttlingRec = getThrottlingRecommendation(view);
                            assert.match(throttlingRec.innerText, /Slow 4G/);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('should hide if no RTT data', /*#__PURE__*/ _async_to_generator(function() {
                var view, throttlingRec;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            mockFieldData['url-ALL'] = createMockFieldData();
                            mockFieldData['url-ALL'].record.metrics.round_trip_time = undefined;
                            view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 1:
                            _state.sent();
                            throttlingRec = getThrottlingRecommendation(view);
                            assert.isNull(throttlingRec);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('should suggest no throttling for very low latency', /*#__PURE__*/ _async_to_generator(function() {
                var view, throttlingRec;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            mockFieldData['url-ALL'] = createMockFieldData();
                            // In theory this is closest to the "offline" preset latency of 0,
                            // but that preset should be ignored.
                            mockFieldData['url-ALL'].record.metrics.round_trip_time.percentiles.p75 = 1;
                            view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 1:
                            _state.sent();
                            throttlingRec = getThrottlingRecommendation(view);
                            assert.match(throttlingRec.innerText, /Try disabling/);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('should ignore presets that are generally too far off', /*#__PURE__*/ _async_to_generator(function() {
                var view, throttlingRec;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            mockFieldData['url-ALL'] = createMockFieldData();
                            // This is closest to the "3G" preset compared to other presets, but it's
                            // still too far away in general.
                            mockFieldData['url-ALL'].record.metrics.round_trip_time.percentiles.p75 = 10000;
                            view = new _components_js__WEBPACK_IMPORTED_MODULE_10__.LiveMetricsView.LiveMetricsView();
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(view);
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 1:
                            _state.sent();
                            throttlingRec = getThrottlingRecommendation(view);
                            assert.isNull(throttlingRec);
                            return [
                                2
                            ];
                    }
                });
            }));
        });
    });
}); //# sourceMappingURL=LiveMetricsView.test.js.map


}),

}]);