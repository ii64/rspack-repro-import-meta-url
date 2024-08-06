"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_crux-manager_CrUXManager_test_js"], {
"./models/crux-manager/CrUXManager.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _crux_manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crux-manager.js */ "./models/crux-manager/crux-manager.js");
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





function mockResponse() {
    return {
        record: {
            key: {},
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
                            end: 0.1,
                            density: 0.1
                        },
                        {
                            start: 0.1,
                            end: 0.25,
                            density: 0.1
                        },
                        {
                            start: 0.25,
                            density: 0.8
                        }
                    ],
                    percentiles: {
                        p75: 0.25
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
function triggerMicroTaskQueue() {
    return _triggerMicroTaskQueue.apply(this, arguments);
}
function _triggerMicroTaskQueue() {
    _triggerMicroTaskQueue = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _triggerMicroTaskQueue.apply(this, arguments);
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('CrUXManager', function() {
    var cruxManager;
    var target;
    var resourceTreeModel;
    var mockFetch;
    var mockConsoleError;
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        var tabTarget;
        return _ts_generator(this, function(_state) {
            tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Tab
            });
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                parentTarget: tabTarget
            });
            resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
            cruxManager = _crux_manager_js__WEBPACK_IMPORTED_MODULE_4__.CrUXManager.instance({
                forceNew: true
            });
            mockFetch = sinon.stub(window, 'fetch');
            mockConsoleError = sinon.stub(console, 'error');
            return [
                2
            ];
        });
    }));
    afterEach(function() {
        mockFetch.restore();
        mockConsoleError.restore();
        cruxManager.getConfigSetting().set({
            enabled: false,
            override: ''
        });
    });
    describe('getFieldDataForPage', function() {
        it('should request data for all scopes', /*#__PURE__*/ _async_to_generator(function() {
            var pageResult, fetchBodies;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockFetch.callsFake(/*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2,
                                    new Response(JSON.stringify(mockResponse()), {
                                        status: 200
                                    })
                                ];
                            });
                        }));
                        return [
                            4,
                            cruxManager.getFieldDataForPage('https://example.com')
                        ];
                    case 1:
                        pageResult = _state.sent();
                        fetchBodies = mockFetch.getCalls().map(function(call) {
                            return call.args[1].body;
                        }).sort().map(function(body) {
                            return JSON.parse(body);
                        });
                        assert.deepStrictEqual(pageResult, {
                            'origin-ALL': mockResponse(),
                            'origin-DESKTOP': mockResponse(),
                            'origin-PHONE': mockResponse(),
                            'origin-TABLET': null,
                            'url-ALL': mockResponse(),
                            'url-DESKTOP': mockResponse(),
                            'url-PHONE': mockResponse(),
                            'url-TABLET': null
                        });
                        assert.deepStrictEqual(fetchBodies, [
                            {
                                formFactor: 'DESKTOP',
                                metrics: [
                                    'largest_contentful_paint',
                                    'cumulative_layout_shift',
                                    'interaction_to_next_paint',
                                    'round_trip_time'
                                ],
                                origin: 'https://example.com'
                            },
                            {
                                formFactor: 'PHONE',
                                metrics: [
                                    'largest_contentful_paint',
                                    'cumulative_layout_shift',
                                    'interaction_to_next_paint',
                                    'round_trip_time'
                                ],
                                origin: 'https://example.com'
                            },
                            {
                                metrics: [
                                    'largest_contentful_paint',
                                    'cumulative_layout_shift',
                                    'interaction_to_next_paint',
                                    'round_trip_time'
                                ],
                                origin: 'https://example.com'
                            },
                            {
                                formFactor: 'DESKTOP',
                                metrics: [
                                    'largest_contentful_paint',
                                    'cumulative_layout_shift',
                                    'interaction_to_next_paint',
                                    'round_trip_time'
                                ],
                                url: 'https://example.com/'
                            },
                            {
                                formFactor: 'PHONE',
                                metrics: [
                                    'largest_contentful_paint',
                                    'cumulative_layout_shift',
                                    'interaction_to_next_paint',
                                    'round_trip_time'
                                ],
                                url: 'https://example.com/'
                            },
                            {
                                metrics: [
                                    'largest_contentful_paint',
                                    'cumulative_layout_shift',
                                    'interaction_to_next_paint',
                                    'round_trip_time'
                                ],
                                url: 'https://example.com/'
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should return null for all scopes if no data is found', /*#__PURE__*/ _async_to_generator(function() {
            var pageResult;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockFetch.callsFake(/*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2,
                                    new Response('{"error": {"status": "NOT_FOUND"}}', {
                                        status: 404
                                    })
                                ];
                            });
                        }));
                        return [
                            4,
                            cruxManager.getFieldDataForPage('https://example.com')
                        ];
                    case 1:
                        pageResult = _state.sent();
                        assert.deepStrictEqual(pageResult, {
                            'origin-ALL': null,
                            'origin-DESKTOP': null,
                            'origin-PHONE': null,
                            'origin-TABLET': null,
                            'url-ALL': null,
                            'url-DESKTOP': null,
                            'url-PHONE': null,
                            'url-TABLET': null
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('should cache responses', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockFetch.callsFake(/*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2,
                                    new Response(JSON.stringify(mockResponse()), {
                                        status: 200
                                    })
                                ];
                            });
                        }));
                        return [
                            4,
                            cruxManager.getFieldDataForPage('https://example.com')
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(mockFetch.callCount, 6);
                        return [
                            4,
                            cruxManager.getFieldDataForPage('https://example.com')
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(mockFetch.callCount, 6);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should cache "NOT_FOUND" responses', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockFetch.callsFake(/*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2,
                                    new Response('{"error": {"status": "NOT_FOUND"}}', {
                                        status: 404
                                    })
                                ];
                            });
                        }));
                        return [
                            4,
                            cruxManager.getFieldDataForPage('https://example.com')
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(mockFetch.callCount, 6);
                        return [
                            4,
                            cruxManager.getFieldDataForPage('https://example.com')
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(mockFetch.callCount, 6);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should not cache error responses', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockFetch.callsFake(/*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2,
                                    new Response('', {
                                        status: 500
                                    })
                                ];
                            });
                        }));
                        return [
                            4,
                            cruxManager.getFieldDataForPage('https://example.com')
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(mockFetch.callCount, 6);
                        assert.strictEqual(mockConsoleError.callCount, 6);
                        return [
                            4,
                            cruxManager.getFieldDataForPage('https://example.com')
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(mockFetch.callCount, 12);
                        assert.strictEqual(mockConsoleError.callCount, 12);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should ignore hash and search params for caching', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockFetch.callsFake(/*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2,
                                    new Response(JSON.stringify(mockResponse()), {
                                        status: 200
                                    })
                                ];
                            });
                        }));
                        return [
                            4,
                            cruxManager.getFieldDataForPage('https://example.com#hash')
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(mockFetch.callCount, 6);
                        return [
                            4,
                            cruxManager.getFieldDataForPage('https://example.com?search')
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(mockFetch.callCount, 6);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('getFieldDataForCurrentPage', function() {
        var getFieldDataMock;
        beforeEach(function() {
            getFieldDataMock = sinon.stub(cruxManager, 'getFieldDataForPage');
        });
        afterEach(function() {
            getFieldDataMock.restore();
        });
        it('should use main document URL if available', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameNavigated, {
                            url: 'https://example.com/main/',
                            isPrimaryFrame: function() {
                                return true;
                            }
                        });
                        resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameNavigated, {
                            url: 'https://example.com/frame/',
                            isPrimaryFrame: function() {
                                return false;
                            }
                        });
                        return [
                            4,
                            cruxManager.getFieldDataForCurrentPage()
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(getFieldDataMock.callCount, 1);
                        assert.strictEqual(getFieldDataMock.firstCall.args[0], 'https://example.com/main/');
                        return [
                            2
                        ];
                }
            });
        }));
        it('should use URL override if set', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        target.setInspectedURL('https://example.com/inspected');
                        cruxManager.getConfigSetting().set({
                            enabled: false,
                            override: 'https://example.com/override'
                        });
                        return [
                            4,
                            cruxManager.getFieldDataForCurrentPage()
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(getFieldDataMock.callCount, 1);
                        assert.strictEqual(getFieldDataMock.firstCall.args[0], 'https://example.com/override');
                        return [
                            2
                        ];
                }
            });
        }));
        it('should use inspected URL if main document is unavailable', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        target.setInspectedURL('https://example.com/inspected');
                        return [
                            4,
                            cruxManager.getFieldDataForCurrentPage()
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(getFieldDataMock.callCount, 1);
                        assert.strictEqual(getFieldDataMock.firstCall.args[0], 'https://example.com/inspected');
                        return [
                            2
                        ];
                }
            });
        }));
        it('should wait for inspected URL if main document and inspected URL are unavailable', /*#__PURE__*/ _async_to_generator(function() {
            var finishPromise;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        target.setInspectedURL(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString);
                        finishPromise = cruxManager.getFieldDataForCurrentPage();
                        return [
                            4,
                            triggerMicroTaskQueue()
                        ];
                    case 1:
                        _state.sent();
                        target.setInspectedURL('https://example.com/awaitInspected');
                        return [
                            4,
                            finishPromise
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(getFieldDataMock.callCount, 1);
                        assert.strictEqual(getFieldDataMock.firstCall.args[0], 'https://example.com/awaitInspected');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('automatic refresh', function() {
        var getFieldDataMock;
        var eventBodies = [];
        beforeEach(function() {
            eventBodies = [];
            cruxManager.addEventListener("field-data-changed" /* CrUXManager.Events.FieldDataChanged */ , function(event) {
                eventBodies.push(event.data);
            });
            getFieldDataMock = sinon.stub(cruxManager, 'getFieldDataForCurrentPage');
            getFieldDataMock.resolves({
                'origin-ALL': null,
                'origin-DESKTOP': null,
                'origin-PHONE': null,
                'origin-TABLET': null,
                'url-ALL': null,
                'url-DESKTOP': null,
                'url-PHONE': null,
                'url-TABLET': null
            });
        });
        afterEach(function() {
            getFieldDataMock.restore();
        });
        it('should update when enabled setting changes', /*#__PURE__*/ _async_to_generator(function() {
            var setting;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        setting = cruxManager.getConfigSetting();
                        setting.set({
                            enabled: true,
                            override: ''
                        });
                        return [
                            4,
                            triggerMicroTaskQueue()
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(getFieldDataMock.callCount, 1);
                        assert.lengthOf(eventBodies, 2);
                        assert.isUndefined(eventBodies[0]);
                        assert.isObject(eventBodies[1]);
                        setting.set({
                            enabled: false,
                            override: ''
                        });
                        return [
                            4,
                            triggerMicroTaskQueue()
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(getFieldDataMock.callCount, 1);
                        assert.lengthOf(eventBodies, 3);
                        assert.isUndefined(eventBodies[0]);
                        assert.isObject(eventBodies[1]);
                        assert.isUndefined(eventBodies[2]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should trigger on frame navigation if enabled', /*#__PURE__*/ _async_to_generator(function() {
            var setting;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        setting = cruxManager.getConfigSetting();
                        setting.set({
                            enabled: true,
                            override: ''
                        });
                        return [
                            4,
                            triggerMicroTaskQueue()
                        ];
                    case 1:
                        _state.sent();
                        resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameNavigated, {
                            url: 'https://example.com/main/',
                            isPrimaryFrame: function() {
                                return true;
                            }
                        });
                        return [
                            4,
                            triggerMicroTaskQueue()
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(getFieldDataMock.callCount, 2);
                        assert.lengthOf(eventBodies, 4);
                        assert.isUndefined(eventBodies[0]);
                        assert.isObject(eventBodies[1]);
                        assert.isUndefined(eventBodies[2]);
                        assert.isObject(eventBodies[3]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should trigger when URL override set', /*#__PURE__*/ _async_to_generator(function() {
            var setting;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        setting = cruxManager.getConfigSetting();
                        setting.set({
                            enabled: true,
                            override: ''
                        });
                        return [
                            4,
                            triggerMicroTaskQueue()
                        ];
                    case 1:
                        _state.sent();
                        setting.set({
                            enabled: true,
                            override: 'https://example.com/override'
                        });
                        return [
                            4,
                            triggerMicroTaskQueue()
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(getFieldDataMock.callCount, 2);
                        assert.lengthOf(eventBodies, 4);
                        assert.isUndefined(eventBodies[0]);
                        assert.isObject(eventBodies[1]);
                        assert.isUndefined(eventBodies[2]);
                        assert.isObject(eventBodies[3]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should not trigger on frame navigation if disabled', /*#__PURE__*/ _async_to_generator(function() {
            var setting;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        setting = cruxManager.getConfigSetting();
                        setting.set({
                            enabled: false,
                            override: ''
                        });
                        resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameNavigated, {
                            url: 'https://example.com/main/',
                            isPrimaryFrame: function() {
                                return true;
                            }
                        });
                        return [
                            4,
                            triggerMicroTaskQueue()
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(getFieldDataMock.callCount, 0);
                        assert.lengthOf(eventBodies, 2);
                        assert.isUndefined(eventBodies[0]);
                        assert.isUndefined(eventBodies[1]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=CrUXManager.test.js.map


}),

}]);