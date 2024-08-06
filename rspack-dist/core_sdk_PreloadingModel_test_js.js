"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_PreloadingModel_test_js"], {
"./core/sdk/PreloadingModel.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
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




(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('PreloadingModel', function() {
    it('adds and deletes rule sets and preloeading attempts', /*#__PURE__*/ _async_to_generator(function() {
        var target, model, loaderId;
        return _ts_generator(this, function(_state) {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
            model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingModel);
            assert.exists(model);
            assert.deepEqual(model.getAllRuleSets(), []);
            loaderId = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(target).loaderId;
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.ruleSetUpdated', {
                ruleSet: {
                    id: 'ruleSetId:1',
                    loaderId: loaderId,
                    sourceText: '\n{\n  "prefetch":[\n    {\n      "source": "list",\n      "urls": ["/subresource.js"]\n    }\n  ]\n}\n'
                }
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.preloadingAttemptSourcesUpdated', {
                loaderId: loaderId,
                preloadingAttemptSources: [
                    {
                        key: {
                            loaderId: loaderId,
                            action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                            url: 'https://example.com/subresource.js'
                        },
                        ruleSetIds: [
                            'ruleSetId:1'
                        ],
                        nodeIds: [
                            1
                        ]
                    }
                ]
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.prefetchStatusUpdated', {
                key: {
                    loaderId: loaderId,
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                    url: 'https://example.com/subresource.js'
                },
                status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ ,
                requestId: 'requestId:1'
            });
            assert.deepEqual(model.getAllRuleSets(), [
                {
                    id: 'ruleSetId:1',
                    value: {
                        id: 'ruleSetId:1',
                        loaderId: loaderId,
                        sourceText: '\n{\n  "prefetch":[\n    {\n      "source": "list",\n      "urls": ["/subresource.js"]\n    }\n  ]\n}\n'
                    }
                }
            ]);
            assert.deepEqual(model.getPreloadingAttempts(null), [
                {
                    id: "".concat(loaderId, ":Prefetch:https://example.com/subresource.js:undefined"),
                    value: {
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                        key: {
                            loaderId: loaderId,
                            action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                            url: 'https://example.com/subresource.js'
                        },
                        status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ ,
                        prefetchStatus: null,
                        requestId: 'requestId:1',
                        ruleSetIds: [
                            'ruleSetId:1'
                        ],
                        nodeIds: [
                            1
                        ]
                    }
                }
            ]);
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.ruleSetUpdated', {
                ruleSet: {
                    id: 'ruleSetId:2',
                    loaderId: loaderId,
                    sourceText: '\n{\n  "prerender":[\n    {\n      "source": "list",\n      "urls": ["/page.html"]\n    }\n  ]\n}\n'
                }
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.preloadingAttemptSourcesUpdated', {
                loaderId: loaderId,
                preloadingAttemptSources: [
                    {
                        key: {
                            loaderId: loaderId,
                            action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                            url: 'https://example.com/subresource.js'
                        },
                        ruleSetIds: [
                            'ruleSetId:1'
                        ],
                        nodeIds: [
                            1
                        ]
                    },
                    {
                        key: {
                            loaderId: loaderId,
                            action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                            url: 'https://example.com/page.html'
                        },
                        ruleSetIds: [
                            'ruleSetId:2'
                        ],
                        nodeIds: [
                            2
                        ]
                    }
                ]
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.prerenderStatusUpdated', {
                key: {
                    loaderId: loaderId,
                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                    url: 'https://example.com/page.html'
                },
                status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ 
            });
            assert.deepEqual(model.getAllRuleSets(), [
                {
                    id: 'ruleSetId:1',
                    value: {
                        id: 'ruleSetId:1',
                        loaderId: loaderId,
                        sourceText: '\n{\n  "prefetch":[\n    {\n      "source": "list",\n      "urls": ["/subresource.js"]\n    }\n  ]\n}\n'
                    }
                },
                {
                    id: 'ruleSetId:2',
                    value: {
                        id: 'ruleSetId:2',
                        loaderId: loaderId,
                        sourceText: '\n{\n  "prerender":[\n    {\n      "source": "list",\n      "urls": ["/page.html"]\n    }\n  ]\n}\n'
                    }
                }
            ]);
            assert.deepEqual(model.getPreloadingAttempts(null), [
                {
                    id: "".concat(loaderId, ":Prefetch:https://example.com/subresource.js:undefined"),
                    value: {
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                        key: {
                            loaderId: loaderId,
                            action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                            url: 'https://example.com/subresource.js'
                        },
                        status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ ,
                        prefetchStatus: null,
                        requestId: 'requestId:1',
                        ruleSetIds: [
                            'ruleSetId:1'
                        ],
                        nodeIds: [
                            1
                        ]
                    }
                },
                {
                    id: "".concat(loaderId, ":Prerender:https://example.com/page.html:undefined"),
                    value: {
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                        key: {
                            loaderId: loaderId,
                            action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                            url: 'https://example.com/page.html'
                        },
                        status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ ,
                        prerenderStatus: null,
                        disallowedMojoInterface: null,
                        mismatchedHeaders: null,
                        ruleSetIds: [
                            'ruleSetId:2'
                        ],
                        nodeIds: [
                            2
                        ]
                    }
                }
            ]);
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.ruleSetRemoved', {
                id: 'ruleSetId:1'
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.preloadingAttemptSourcesUpdated', {
                loaderId: loaderId,
                preloadingAttemptSources: [
                    {
                        key: {
                            loaderId: loaderId,
                            action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                            url: 'https://example.com/page.html'
                        },
                        ruleSetIds: [
                            'ruleSetId:2'
                        ],
                        nodeIds: [
                            2
                        ]
                    }
                ]
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.prefetchStatusUpdated', {
                key: {
                    loaderId: loaderId,
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                    url: 'https://example.com/subresource.js'
                },
                status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ ,
                requestId: 'requestId:1'
            });
            assert.deepEqual(model.getAllRuleSets(), [
                {
                    id: 'ruleSetId:2',
                    value: {
                        id: 'ruleSetId:2',
                        loaderId: loaderId,
                        sourceText: '\n{\n  "prerender":[\n    {\n      "source": "list",\n      "urls": ["/page.html"]\n    }\n  ]\n}\n'
                    }
                }
            ]);
            assert.deepEqual(model.getPreloadingAttempts(null), [
                {
                    id: "".concat(loaderId, ":Prefetch:https://example.com/subresource.js:undefined"),
                    value: {
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                        key: {
                            loaderId: loaderId,
                            action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                            url: 'https://example.com/subresource.js'
                        },
                        status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ ,
                        prefetchStatus: null,
                        requestId: 'requestId:1',
                        // Note that current implementation doesn't show associated
                        // rule sets when preloading is cancelled by rule sets
                        // deletion. One can treat this case special, i.e. associated
                        // rule sets decreasing one to zero, and show the last rule
                        // set.
                        //
                        // TODO(https://crbug.com/1410709): Consider the above case.
                        ruleSetIds: [],
                        nodeIds: []
                    }
                },
                {
                    id: "".concat(loaderId, ":Prerender:https://example.com/page.html:undefined"),
                    value: {
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                        key: {
                            loaderId: loaderId,
                            action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                            url: 'https://example.com/page.html'
                        },
                        status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ ,
                        prerenderStatus: null,
                        disallowedMojoInterface: null,
                        mismatchedHeaders: null,
                        ruleSetIds: [
                            'ruleSetId:2'
                        ],
                        nodeIds: [
                            2
                        ]
                    }
                }
            ]);
            return [
                2
            ];
        });
    }));
    it('registers preloeading attempt with status NotTriggered', /*#__PURE__*/ _async_to_generator(function() {
        var target, model, loaderId;
        return _ts_generator(this, function(_state) {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
            model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingModel);
            assert.exists(model);
            assert.deepEqual(model.getAllRuleSets(), []);
            loaderId = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(target).loaderId;
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.ruleSetUpdated', {
                ruleSet: {
                    id: 'ruleSetId:1',
                    loaderId: loaderId,
                    sourceText: '\n{\n  "prefetch":[\n    {\n      "source": "list",\n      "urls": ["/subresource.js"]\n    }\n  ]\n}\n'
                }
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.preloadingAttemptSourcesUpdated', {
                loaderId: loaderId,
                preloadingAttemptSources: [
                    {
                        key: {
                            loaderId: loaderId,
                            action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                            url: 'https://example.com/subresource.js'
                        },
                        ruleSetIds: [
                            'ruleSetId:1'
                        ],
                        nodeIds: [
                            1
                        ]
                    }
                ]
            });
            assert.deepEqual(model.getPreloadingAttempts(null), [
                {
                    id: "".concat(loaderId, ":Prefetch:https://example.com/subresource.js:undefined"),
                    value: {
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                        key: {
                            loaderId: loaderId,
                            action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                            url: 'https://example.com/subresource.js'
                        },
                        status: "NotTriggered" /* SDK.PreloadingModel.PreloadingStatus.NotTriggered */ ,
                        prefetchStatus: null,
                        // Invalid request id
                        requestId: '',
                        ruleSetIds: [
                            'ruleSetId:1'
                        ],
                        nodeIds: [
                            1
                        ]
                    }
                }
            ]);
            return [
                2
            ];
        });
    }));
    it('clears rule sets and preloading attempts for previous pages', /*#__PURE__*/ _async_to_generator(function() {
        var target, model, loaderId;
        return _ts_generator(this, function(_state) {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
            model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingModel);
            assert.exists(model);
            assert.deepEqual(model.getAllRuleSets(), []);
            assert.deepEqual(model.getPreloadingAttempts(null), []);
            loaderId = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(target).loaderId;
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.ruleSetUpdated', {
                ruleSet: {
                    id: 'ruleSetId:1',
                    loaderId: loaderId,
                    sourceText: '\n{\n  "prefetch": [\n    {\n      "source": "list",\n      "urls": ["/subresource1.js"]\n    }\n  ]\n}\n'
                }
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.preloadingAttemptSourcesUpdated', {
                loaderId: loaderId,
                preloadingAttemptSources: [
                    {
                        key: {
                            loaderId: loaderId,
                            action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                            url: 'https://example.com/subresource1.js'
                        },
                        ruleSetIds: [
                            'ruleSetId:1'
                        ],
                        nodeIds: [
                            1
                        ]
                    }
                ]
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.prefetchStatusUpdated', {
                key: {
                    loaderId: loaderId,
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                    url: 'https://example.com/subresource1.js'
                },
                status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ 
            });
            loaderId = 'loaderId:2';
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(target), {
                loaderId: loaderId
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.ruleSetUpdated', {
                ruleSet: {
                    id: 'ruleSetId:2',
                    loaderId: loaderId,
                    sourceText: '\n{\n  "prefetch": [\n    {\n      "source": "list",\n      "urls": ["/subresource2.js"]\n    }\n  ]\n}\n'
                }
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.preloadingAttemptSourcesUpdated', {
                loaderId: loaderId,
                preloadingAttemptSources: [
                    {
                        key: {
                            loaderId: loaderId,
                            action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                            url: 'https://example.com/subresource2.js'
                        },
                        ruleSetIds: [
                            'ruleSetId:2'
                        ],
                        nodeIds: [
                            2
                        ]
                    }
                ]
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.prefetchStatusUpdated', {
                key: {
                    loaderId: loaderId,
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                    url: 'https://example.com/subresource2.js'
                },
                status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ ,
                requestId: 'requestId:1'
            });
            assert.deepEqual(model.getAllRuleSets(), [
                {
                    id: 'ruleSetId:2',
                    value: {
                        id: 'ruleSetId:2',
                        loaderId: loaderId,
                        sourceText: '\n{\n  "prefetch": [\n    {\n      "source": "list",\n      "urls": ["/subresource2.js"]\n    }\n  ]\n}\n'
                    }
                }
            ]);
            assert.deepEqual(model.getPreloadingAttempts(null), [
                {
                    id: "".concat(loaderId, ":Prefetch:https://example.com/subresource2.js:undefined"),
                    value: {
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                        key: {
                            loaderId: loaderId,
                            action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                            url: 'https://example.com/subresource2.js'
                        },
                        status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ ,
                        prefetchStatus: null,
                        requestId: 'requestId:1',
                        ruleSetIds: [
                            'ruleSetId:2'
                        ],
                        nodeIds: [
                            2
                        ]
                    }
                }
            ]);
            return [
                2
            ];
        });
    }));
    it('filters preloading attempts by rule set id', /*#__PURE__*/ _async_to_generator(function() {
        var target, model, loaderId;
        return _ts_generator(this, function(_state) {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
            model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingModel);
            assert.exists(model);
            assert.deepEqual(model.getAllRuleSets(), []);
            assert.deepEqual(model.getPreloadingAttempts(null), []);
            loaderId = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(target).loaderId;
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.ruleSetUpdated', {
                ruleSet: {
                    id: 'ruleSetId:1',
                    loaderId: loaderId,
                    sourceText: '\n{\n  "prefetch": [\n    {\n      "source": "list",\n      "urls": ["/subresource12.js"]\n    }\n  ]\n}\n'
                }
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.ruleSetUpdated', {
                ruleSet: {
                    id: 'ruleSetId:2',
                    loaderId: loaderId,
                    sourceText: '\n{\n  "prefetch": [\n    {\n      "source": "list",\n      "urls": ["/subresource12.js", "/subresource2.js"]\n    }\n  ]\n}\n'
                }
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.preloadingAttemptSourcesUpdated', {
                loaderId: loaderId,
                preloadingAttemptSources: [
                    {
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                        key: {
                            loaderId: loaderId,
                            action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                            url: 'https://example.com/subresource12.js'
                        },
                        ruleSetIds: [
                            'ruleSetId:1',
                            'ruleSetId:2'
                        ],
                        nodeIds: [
                            1,
                            2
                        ]
                    },
                    {
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                        key: {
                            loaderId: loaderId,
                            action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                            url: 'https://example.com/subresource2.js'
                        },
                        ruleSetIds: [
                            'ruleSetId:2'
                        ],
                        nodeIds: [
                            2
                        ]
                    }
                ]
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.prefetchStatusUpdated', {
                key: {
                    loaderId: loaderId,
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                    url: 'https://example.com/subresource12.js'
                },
                status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ ,
                requestId: 'requestId:1'
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(target, 'Preload.prefetchStatusUpdated', {
                key: {
                    loaderId: loaderId,
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                    url: 'https://example.com/subresource2.js'
                },
                status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ ,
                requestId: 'requestId:2'
            });
            assert.deepEqual(model.getPreloadingAttempts(null), [
                {
                    id: "".concat(loaderId, ":Prefetch:https://example.com/subresource12.js:undefined"),
                    value: {
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                        key: {
                            loaderId: loaderId,
                            action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                            url: 'https://example.com/subresource12.js'
                        },
                        status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ ,
                        prefetchStatus: null,
                        requestId: 'requestId:1',
                        ruleSetIds: [
                            'ruleSetId:1',
                            'ruleSetId:2'
                        ],
                        nodeIds: [
                            1,
                            2
                        ]
                    }
                },
                {
                    id: "".concat(loaderId, ":Prefetch:https://example.com/subresource2.js:undefined"),
                    value: {
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                        key: {
                            loaderId: loaderId,
                            action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                            url: 'https://example.com/subresource2.js'
                        },
                        status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ ,
                        prefetchStatus: null,
                        requestId: 'requestId:2',
                        ruleSetIds: [
                            'ruleSetId:2'
                        ],
                        nodeIds: [
                            2
                        ]
                    }
                }
            ]);
            assert.deepEqual(model.getPreloadingAttempts('ruleSetId:1'), [
                {
                    id: "".concat(loaderId, ":Prefetch:https://example.com/subresource12.js:undefined"),
                    value: {
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                        key: {
                            loaderId: loaderId,
                            action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                            url: 'https://example.com/subresource12.js'
                        },
                        status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ ,
                        prefetchStatus: null,
                        requestId: 'requestId:1',
                        ruleSetIds: [
                            'ruleSetId:1',
                            'ruleSetId:2'
                        ],
                        nodeIds: [
                            1,
                            2
                        ]
                    }
                }
            ]);
            assert.deepEqual(model.getPreloadingAttempts('ruleSetId:2'), [
                {
                    id: "".concat(loaderId, ":Prefetch:https://example.com/subresource12.js:undefined"),
                    value: {
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                        key: {
                            loaderId: loaderId,
                            action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                            url: 'https://example.com/subresource12.js'
                        },
                        status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ ,
                        prefetchStatus: null,
                        requestId: 'requestId:1',
                        ruleSetIds: [
                            'ruleSetId:1',
                            'ruleSetId:2'
                        ],
                        nodeIds: [
                            1,
                            2
                        ]
                    }
                },
                {
                    id: "".concat(loaderId, ":Prefetch:https://example.com/subresource2.js:undefined"),
                    value: {
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                        key: {
                            loaderId: loaderId,
                            action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                            url: 'https://example.com/subresource2.js'
                        },
                        status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ ,
                        prefetchStatus: null,
                        requestId: 'requestId:2',
                        ruleSetIds: [
                            'ruleSetId:2'
                        ],
                        nodeIds: [
                            2
                        ]
                    }
                }
            ]);
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=PreloadingModel.test.js.map


}),

}]);