"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_sdk_PreloadingModel_test_ts"],{

/***/ "./src/core/sdk/PreloadingModel.test.ts":
/*!**********************************************!*\
  !*** ./src/core/sdk/PreloadingModel.test.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('PreloadingModel', () => {
    it('adds and deletes rule sets and preloeading attempts', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingModel);
        assert.exists(model);
        assert.deepEqual(model.getAllRuleSets(), []);
        const loaderId = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target).loaderId;
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.ruleSetUpdated', {
            ruleSet: {
                id: 'ruleSetId:1',
                loaderId,
                sourceText: `
{
  "prefetch":[
    {
      "source": "list",
      "urls": ["/subresource.js"]
    }
  ]
}
`,
            },
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.preloadingAttemptSourcesUpdated', {
            loaderId,
            preloadingAttemptSources: [
                {
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/subresource.js',
                    },
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            ],
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.prefetchStatusUpdated', {
            key: {
                loaderId,
                action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                url: 'https://example.com/subresource.js',
            },
            status: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingStatus.Running,
            requestId: 'requestId:1',
        });
        assert.deepEqual(model.getAllRuleSets(), [
            {
                id: 'ruleSetId:1',
                value: {
                    id: 'ruleSetId:1',
                    loaderId,
                    sourceText: `
{
  "prefetch":[
    {
      "source": "list",
      "urls": ["/subresource.js"]
    }
  ]
}
`,
                },
            },
        ]);
        assert.deepEqual(model.getPreloadingAttempts(null), [
            {
                id: `${loaderId}:Prefetch:https://example.com/subresource.js:undefined`,
                value: {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/subresource.js',
                    },
                    status: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingStatus.Running,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            },
        ]);
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.ruleSetUpdated', {
            ruleSet: {
                id: 'ruleSetId:2',
                loaderId,
                sourceText: `
{
  "prerender":[
    {
      "source": "list",
      "urls": ["/page.html"]
    }
  ]
}
`,
            },
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.preloadingAttemptSourcesUpdated', {
            loaderId,
            preloadingAttemptSources: [
                {
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/subresource.js',
                    },
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prerender,
                        url: 'https://example.com/page.html',
                    },
                    ruleSetIds: ['ruleSetId:2'],
                    nodeIds: [2],
                },
            ],
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.prerenderStatusUpdated', {
            key: {
                loaderId,
                action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prerender,
                url: 'https://example.com/page.html',
            },
            status: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingStatus.Running,
        });
        assert.deepEqual(model.getAllRuleSets(), [
            {
                id: 'ruleSetId:1',
                value: {
                    id: 'ruleSetId:1',
                    loaderId,
                    sourceText: `
{
  "prefetch":[
    {
      "source": "list",
      "urls": ["/subresource.js"]
    }
  ]
}
`,
                },
            },
            {
                id: 'ruleSetId:2',
                value: {
                    id: 'ruleSetId:2',
                    loaderId,
                    sourceText: `
{
  "prerender":[
    {
      "source": "list",
      "urls": ["/page.html"]
    }
  ]
}
`,
                },
            },
        ]);
        assert.deepEqual(model.getPreloadingAttempts(null), [
            {
                id: `${loaderId}:Prefetch:https://example.com/subresource.js:undefined`,
                value: {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/subresource.js',
                    },
                    status: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingStatus.Running,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            },
            {
                id: `${loaderId}:Prerender:https://example.com/page.html:undefined`,
                value: {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prerender,
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prerender,
                        url: 'https://example.com/page.html',
                    },
                    status: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingStatus.Running,
                    prerenderStatus: null,
                    disallowedMojoInterface: null,
                    mismatchedHeaders: null,
                    ruleSetIds: ['ruleSetId:2'],
                    nodeIds: [2],
                },
            },
        ]);
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.ruleSetRemoved', {
            id: 'ruleSetId:1',
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.preloadingAttemptSourcesUpdated', {
            loaderId,
            preloadingAttemptSources: [
                {
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prerender,
                        url: 'https://example.com/page.html',
                    },
                    ruleSetIds: ['ruleSetId:2'],
                    nodeIds: [2],
                },
            ],
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.prefetchStatusUpdated', {
            key: {
                loaderId,
                action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                url: 'https://example.com/subresource.js',
            },
            status: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingStatus.Failure,
            requestId: 'requestId:1',
        });
        assert.deepEqual(model.getAllRuleSets(), [
            {
                id: 'ruleSetId:2',
                value: {
                    id: 'ruleSetId:2',
                    loaderId,
                    sourceText: `
{
  "prerender":[
    {
      "source": "list",
      "urls": ["/page.html"]
    }
  ]
}
`,
                },
            },
        ]);
        assert.deepEqual(model.getPreloadingAttempts(null), [
            {
                id: `${loaderId}:Prefetch:https://example.com/subresource.js:undefined`,
                value: {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/subresource.js',
                    },
                    status: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingStatus.Failure,
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
                    nodeIds: [],
                },
            },
            {
                id: `${loaderId}:Prerender:https://example.com/page.html:undefined`,
                value: {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prerender,
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prerender,
                        url: 'https://example.com/page.html',
                    },
                    status: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingStatus.Running,
                    prerenderStatus: null,
                    disallowedMojoInterface: null,
                    mismatchedHeaders: null,
                    ruleSetIds: ['ruleSetId:2'],
                    nodeIds: [2],
                },
            },
        ]);
    });
    it('registers preloeading attempt with status NotTriggered', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingModel);
        assert.exists(model);
        assert.deepEqual(model.getAllRuleSets(), []);
        const loaderId = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target).loaderId;
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.ruleSetUpdated', {
            ruleSet: {
                id: 'ruleSetId:1',
                loaderId,
                sourceText: `
{
  "prefetch":[
    {
      "source": "list",
      "urls": ["/subresource.js"]
    }
  ]
}
`,
            },
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.preloadingAttemptSourcesUpdated', {
            loaderId,
            preloadingAttemptSources: [
                {
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/subresource.js',
                    },
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            ],
        });
        assert.deepEqual(model.getPreloadingAttempts(null), [
            {
                id: `${loaderId}:Prefetch:https://example.com/subresource.js:undefined`,
                value: {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/subresource.js',
                    },
                    status: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingStatus.NotTriggered,
                    prefetchStatus: null,
                    // Invalid request id
                    requestId: '',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            },
        ]);
    });
    it('clears rule sets and preloading attempts for previous pages', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingModel);
        assert.exists(model);
        assert.deepEqual(model.getAllRuleSets(), []);
        assert.deepEqual(model.getPreloadingAttempts(null), []);
        let loaderId = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target).loaderId;
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.ruleSetUpdated', {
            ruleSet: {
                id: 'ruleSetId:1',
                loaderId,
                sourceText: `
{
  "prefetch": [
    {
      "source": "list",
      "urls": ["/subresource1.js"]
    }
  ]
}
`,
            },
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.preloadingAttemptSourcesUpdated', {
            loaderId,
            preloadingAttemptSources: [
                {
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/subresource1.js',
                    },
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            ],
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.prefetchStatusUpdated', {
            key: {
                loaderId,
                action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                url: 'https://example.com/subresource1.js',
            },
            status: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingStatus.Running,
        });
        loaderId = 'loaderId:2';
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target), { loaderId });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.ruleSetUpdated', {
            ruleSet: {
                id: 'ruleSetId:2',
                loaderId,
                sourceText: `
{
  "prefetch": [
    {
      "source": "list",
      "urls": ["/subresource2.js"]
    }
  ]
}
`,
            },
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.preloadingAttemptSourcesUpdated', {
            loaderId,
            preloadingAttemptSources: [
                {
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/subresource2.js',
                    },
                    ruleSetIds: ['ruleSetId:2'],
                    nodeIds: [2],
                },
            ],
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.prefetchStatusUpdated', {
            key: {
                loaderId,
                action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                url: 'https://example.com/subresource2.js',
            },
            status: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingStatus.Running,
            requestId: 'requestId:1',
        });
        assert.deepEqual(model.getAllRuleSets(), [
            {
                id: 'ruleSetId:2',
                value: {
                    id: 'ruleSetId:2',
                    loaderId,
                    sourceText: `
{
  "prefetch": [
    {
      "source": "list",
      "urls": ["/subresource2.js"]
    }
  ]
}
`,
                },
            },
        ]);
        assert.deepEqual(model.getPreloadingAttempts(null), [
            {
                id: `${loaderId}:Prefetch:https://example.com/subresource2.js:undefined`,
                value: {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/subresource2.js',
                    },
                    status: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingStatus.Running,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:2'],
                    nodeIds: [2],
                },
            },
        ]);
    });
    it('filters preloading attempts by rule set id', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingModel);
        assert.exists(model);
        assert.deepEqual(model.getAllRuleSets(), []);
        assert.deepEqual(model.getPreloadingAttempts(null), []);
        const loaderId = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target).loaderId;
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.ruleSetUpdated', {
            ruleSet: {
                id: 'ruleSetId:1',
                loaderId,
                sourceText: `
{
  "prefetch": [
    {
      "source": "list",
      "urls": ["/subresource12.js"]
    }
  ]
}
`,
            },
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.ruleSetUpdated', {
            ruleSet: {
                id: 'ruleSetId:2',
                loaderId,
                sourceText: `
{
  "prefetch": [
    {
      "source": "list",
      "urls": ["/subresource12.js", "/subresource2.js"]
    }
  ]
}
`,
            },
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.preloadingAttemptSourcesUpdated', {
            loaderId,
            preloadingAttemptSources: [
                {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/subresource12.js',
                    },
                    ruleSetIds: ['ruleSetId:1', 'ruleSetId:2'],
                    nodeIds: [1, 2],
                },
                {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/subresource2.js',
                    },
                    ruleSetIds: ['ruleSetId:2'],
                    nodeIds: [2],
                },
            ],
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.prefetchStatusUpdated', {
            key: {
                loaderId,
                action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                url: 'https://example.com/subresource12.js',
            },
            status: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingStatus.Running,
            requestId: 'requestId:1',
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Preload.prefetchStatusUpdated', {
            key: {
                loaderId,
                action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                url: 'https://example.com/subresource2.js',
            },
            status: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingStatus.Running,
            requestId: 'requestId:2',
        });
        assert.deepEqual(model.getPreloadingAttempts(null), [
            {
                id: `${loaderId}:Prefetch:https://example.com/subresource12.js:undefined`,
                value: {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/subresource12.js',
                    },
                    status: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingStatus.Running,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1', 'ruleSetId:2'],
                    nodeIds: [1, 2],
                },
            },
            {
                id: `${loaderId}:Prefetch:https://example.com/subresource2.js:undefined`,
                value: {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/subresource2.js',
                    },
                    status: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingStatus.Running,
                    prefetchStatus: null,
                    requestId: 'requestId:2',
                    ruleSetIds: ['ruleSetId:2'],
                    nodeIds: [2],
                },
            },
        ]);
        assert.deepEqual(model.getPreloadingAttempts('ruleSetId:1'), [
            {
                id: `${loaderId}:Prefetch:https://example.com/subresource12.js:undefined`,
                value: {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/subresource12.js',
                    },
                    status: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingStatus.Running,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1', 'ruleSetId:2'],
                    nodeIds: [1, 2],
                },
            },
        ]);
        assert.deepEqual(model.getPreloadingAttempts('ruleSetId:2'), [
            {
                id: `${loaderId}:Prefetch:https://example.com/subresource12.js:undefined`,
                value: {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/subresource12.js',
                    },
                    status: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingStatus.Running,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1', 'ruleSetId:2'],
                    nodeIds: [1, 2],
                },
            },
            {
                id: `${loaderId}:Prefetch:https://example.com/subresource2.js:undefined`,
                value: {
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                    key: {
                        loaderId,
                        action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Preload.SpeculationAction.Prefetch,
                        url: 'https://example.com/subresource2.js',
                    },
                    status: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.PreloadingModel.PreloadingStatus.Running,
                    prefetchStatus: null,
                    requestId: 'requestId:2',
                    ruleSetIds: ['ruleSetId:2'],
                    nodeIds: [2],
                },
            },
        ]);
    });
});


/***/ })

}]);