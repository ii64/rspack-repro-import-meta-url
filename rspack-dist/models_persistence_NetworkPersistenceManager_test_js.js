"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_persistence_NetworkPersistenceManager_test_js"], {
"./models/persistence/NetworkPersistenceManager.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/OverridesHelpers.js */ "./testing/OverridesHelpers.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */var _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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










var setUpEnvironmentWithUISourceCode = function(url, resourceType, project) {
    var _setUpEnvironment = (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.setUpEnvironment)(), workspace = _setUpEnvironment.workspace, networkPersistenceManager = _setUpEnvironment.networkPersistenceManager;
    if (!project) {
        project = {
            id: function() {
                return url;
            },
            type: function() {
                return _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.Workspace.projectTypes.Network;
            }
        };
    }
    var uiSourceCode = new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.UISourceCode.UISourceCode(project, url, resourceType);
    project.uiSourceCodes = function() {
        return [
            uiSourceCode
        ];
    };
    workspace.addProject(project);
    return {
        workspace: workspace,
        project: project,
        uiSourceCode: uiSourceCode,
        networkPersistenceManager: networkPersistenceManager
    };
};
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('NetworkPersistenceManager', function() {
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        var target;
        return _ts_generator(this, function(_state) {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.MultitargetNetworkManager.dispose();
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            sinon.stub(target.fetchAgent(), 'invoke_enable');
            return [
                2
            ];
        });
    }));
    it('can create an overridden file with Local Overrides enabled', /*#__PURE__*/ _async_to_generator(function() {
        var url, resourceType, uiSourceCode, networkPersistenceManager, saveSpy, actual;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    url = 'http://www.example.com/list-fetch.json';
                    resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document;
                    uiSourceCode = setUpEnvironmentWithUISourceCode(url, resourceType).uiSourceCode;
                    return [
                        4,
                        (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createWorkspaceProject)('file:///path/to/overrides', [])
                    ];
                case 1:
                    networkPersistenceManager = _state.sent();
                    saveSpy = sinon.spy(networkPersistenceManager, 'saveUISourceCodeForOverrides');
                    return [
                        4,
                        networkPersistenceManager.setupAndStartLocalOverrides(uiSourceCode)
                    ];
                case 2:
                    actual = _state.sent();
                    saveSpy.restore();
                    assert.isTrue(saveSpy.calledOnce, 'should override content once');
                    assert.isTrue(actual, 'should complete override successfully');
                    return [
                        2
                    ];
            }
        });
    }));
    it('can create an overridden file with Local Overrides folder set up but disabled', /*#__PURE__*/ _async_to_generator(function() {
        var url, resourceType, uiSourceCode, networkPersistenceManager, saveSpy, actual;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').set(false);
                    url = 'http://www.example.com/list-xhr.json';
                    resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document;
                    uiSourceCode = setUpEnvironmentWithUISourceCode(url, resourceType).uiSourceCode;
                    return [
                        4,
                        (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createWorkspaceProject)('file:///path/to/overrides', [])
                    ];
                case 1:
                    networkPersistenceManager = _state.sent();
                    saveSpy = sinon.spy(networkPersistenceManager, 'saveUISourceCodeForOverrides');
                    return [
                        4,
                        networkPersistenceManager.setupAndStartLocalOverrides(uiSourceCode)
                    ];
                case 2:
                    actual = _state.sent();
                    saveSpy.restore();
                    assert.isTrue(saveSpy.calledOnce, 'should override content once');
                    assert.isTrue(actual, 'should complete override successfully');
                    return [
                        2
                    ];
            }
        });
    }));
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('NetworkPersistenceManager', function() {
    it('does not create interception patterns for forbidden URLs', /*#__PURE__*/ _async_to_generator(function() {
        var target, networkPersistenceManager, stub, patterns, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.MultitargetNetworkManager.dispose();
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
                    return [
                        4,
                        (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createWorkspaceProject)('file:///path/to/overrides', [
                            {
                                name: 'helloWorld.html',
                                path: 'www.example.com/',
                                content: 'Hello World!'
                            },
                            {
                                name: 'forbidden.html',
                                path: 'chromewebstore.google.com/',
                                content: 'Chrome Web Store'
                            },
                            {
                                name: 'flags',
                                path: 'chrome:/',
                                content: 'Chrome Flags'
                            },
                            {
                                name: 'index.html',
                                path: 'chrome.google.com/',
                                content: 'Chrome'
                            },
                            {
                                name: 'allowed.html',
                                path: 'www.google.com/',
                                content: 'Google Search'
                            }
                        ])
                    ];
                case 1:
                    networkPersistenceManager = _state.sent();
                    stub = sinon.stub(target.fetchAgent(), 'invoke_enable');
                    return [
                        4,
                        networkPersistenceManager.updateInterceptionPatternsForTests()
                    ];
                case 2:
                    _state.sent();
                    patterns = stub.lastCall.args[0].patterns;
                    expected = [
                        {
                            urlPattern: 'http?://www.example.com/helloWorld.html',
                            requestStage: "Response" /* Protocol.Fetch.RequestStage.Response */ 
                        },
                        {
                            urlPattern: 'http?://www.google.com/allowed.html',
                            requestStage: "Response" /* Protocol.Fetch.RequestStage.Response */ 
                        }
                    ];
                    assert.deepStrictEqual(patterns, expected);
                    return [
                        2
                    ];
            }
        });
    }));
    it('recognizes forbidden network URLs', function() {
        assert.isTrue(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.NetworkPersistenceManager.isForbiddenNetworkUrl('chrome://version'));
        assert.isTrue(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.NetworkPersistenceManager.isForbiddenNetworkUrl('https://chromewebstore.google.com/index.html'));
        assert.isTrue(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.NetworkPersistenceManager.isForbiddenNetworkUrl('https://chrome.google.com/script.js'));
        assert.isFalse(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.NetworkPersistenceManager.isForbiddenNetworkUrl('https://www.example.com/script.js'));
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('NetworkPersistenceManager', function() {
    var networkPersistenceManager;
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        var target;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.MultitargetNetworkManager.dispose();
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_6__.setMockResourceTree)(false);
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
                    return [
                        4,
                        (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createWorkspaceProject)('file:///path/to/overrides', [
                            {
                                name: '.headers',
                                path: 'www.example.com/',
                                content: '[\n            {\n              "applyTo": "index.html",\n              "headers": [{\n                "name": "index-only",\n                "value": "only added to index.html"\n              }]\n            },\n            {\n              "applyTo": "*.css",\n              "headers": [{\n                "name": "css-only",\n                "value": "only added to css files"\n              }]\n            },\n            {\n              "applyTo": "path/to/*.js",\n              "headers": [{\n                "name": "another-header",\n                "value": "only added to specific path"\n              }]\n            },\n            {\n              "applyTo": "repeated.html",\n              "headers": [\n                {\n                  "name": "repeated",\n                  "value": "first override"\n                },\n                {\n                  "name": "repeated",\n                  "value": "second override"\n                }\n              ]\n            }\n          ]'
                            },
                            {
                                name: '.headers',
                                path: '',
                                content: '[\n            {\n              "applyTo": "*",\n              "headers": [{\n                "name": "age",\n                "value": "overridden"\n              }]\n            }\n          ]'
                            },
                            {
                                name: 'helloWorld.html',
                                path: 'www.example.com/',
                                content: 'Hello World!'
                            }
                        ])
                    ];
                case 1:
                    networkPersistenceManager = _state.sent();
                    sinon.stub(target.fetchAgent(), 'invoke_enable');
                    return [
                        4,
                        networkPersistenceManager.updateInterceptionPatternsForTests()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('merges request headers with override without overlap', /*#__PURE__*/ _async_to_generator(function() {
        var interceptedRequest, expected, actual;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    interceptedRequest = {
                        request: {
                            url: 'https://www.example.com/'
                        },
                        responseHeaders: [
                            {
                                name: 'server',
                                value: 'DevTools mock server'
                            }
                        ]
                    };
                    expected = [
                        {
                            name: 'age',
                            value: 'overridden'
                        },
                        {
                            name: 'index-only',
                            value: 'only added to index.html'
                        },
                        {
                            name: 'server',
                            value: 'DevTools mock server'
                        }
                    ];
                    return [
                        4,
                        networkPersistenceManager.handleHeaderInterception(interceptedRequest)
                    ];
                case 1:
                    actual = _state.sent();
                    assert.deepEqual(actual.sort(function(a, b) {
                        return a.name.localeCompare(b.name);
                    }), expected);
                    return [
                        2
                    ];
            }
        });
    }));
    it('merges request headers with override with overlap', /*#__PURE__*/ _async_to_generator(function() {
        var interceptedRequest, expected, actual;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    interceptedRequest = {
                        request: {
                            url: 'https://www.example.com/index.html'
                        },
                        responseHeaders: [
                            {
                                name: 'server',
                                value: 'DevTools mock server'
                            },
                            {
                                name: 'age',
                                value: '1'
                            }
                        ]
                    };
                    expected = [
                        {
                            name: 'age',
                            value: 'overridden'
                        },
                        {
                            name: 'index-only',
                            value: 'only added to index.html'
                        },
                        {
                            name: 'server',
                            value: 'DevTools mock server'
                        }
                    ];
                    return [
                        4,
                        networkPersistenceManager.handleHeaderInterception(interceptedRequest)
                    ];
                case 1:
                    actual = _state.sent();
                    assert.deepEqual(actual.sort(function(a, b) {
                        return a.name.localeCompare(b.name);
                    }), expected);
                    return [
                        2
                    ];
            }
        });
    }));
    it('merges request headers with override with file type wildcard', /*#__PURE__*/ _async_to_generator(function() {
        var interceptedRequest, expected, actual;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    interceptedRequest = {
                        request: {
                            url: 'https://www.example.com/styles.css'
                        },
                        responseHeaders: [
                            {
                                name: 'server',
                                value: 'DevTools mock server'
                            },
                            {
                                name: 'age',
                                value: '1'
                            }
                        ]
                    };
                    expected = [
                        {
                            name: 'age',
                            value: 'overridden'
                        },
                        {
                            name: 'css-only',
                            value: 'only added to css files'
                        },
                        {
                            name: 'server',
                            value: 'DevTools mock server'
                        }
                    ];
                    return [
                        4,
                        networkPersistenceManager.handleHeaderInterception(interceptedRequest)
                    ];
                case 1:
                    actual = _state.sent();
                    assert.deepEqual(actual.sort(function(a, b) {
                        return a.name.localeCompare(b.name);
                    }), expected);
                    return [
                        2
                    ];
            }
        });
    }));
    it('merges request headers with override with specific path', /*#__PURE__*/ _async_to_generator(function() {
        var interceptedRequest, expected, actual;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    interceptedRequest = {
                        request: {
                            url: 'https://www.example.com/path/to/script.js'
                        },
                        responseHeaders: [
                            {
                                name: 'server',
                                value: 'DevTools mock server'
                            },
                            {
                                name: 'age',
                                value: '1'
                            }
                        ]
                    };
                    expected = [
                        {
                            name: 'age',
                            value: 'overridden'
                        },
                        {
                            name: 'another-header',
                            value: 'only added to specific path'
                        },
                        {
                            name: 'server',
                            value: 'DevTools mock server'
                        }
                    ];
                    return [
                        4,
                        networkPersistenceManager.handleHeaderInterception(interceptedRequest)
                    ];
                case 1:
                    actual = _state.sent();
                    assert.deepEqual(actual.sort(function(a, b) {
                        return a.name.localeCompare(b.name);
                    }), expected);
                    return [
                        2
                    ];
            }
        });
    }));
    it('merges request headers only when domain matches', /*#__PURE__*/ _async_to_generator(function() {
        var interceptedRequest, expected, actual;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    interceptedRequest = {
                        request: {
                            url: 'https://www.web.dev/index.html'
                        },
                        responseHeaders: [
                            {
                                name: 'server',
                                value: 'DevTools mock server'
                            }
                        ]
                    };
                    expected = [
                        {
                            name: 'age',
                            value: 'overridden'
                        },
                        {
                            name: 'server',
                            value: 'DevTools mock server'
                        }
                    ];
                    return [
                        4,
                        networkPersistenceManager.handleHeaderInterception(interceptedRequest)
                    ];
                case 1:
                    actual = _state.sent();
                    assert.deepEqual(actual.sort(function(a, b) {
                        return a.name.localeCompare(b.name);
                    }), expected);
                    return [
                        2
                    ];
            }
        });
    }));
    it('merges headers while leaving muliple headers with the same name unchanged', /*#__PURE__*/ _async_to_generator(function() {
        var interceptedRequest, expected, actual;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    interceptedRequest = {
                        request: {
                            url: 'https://www.example.com/index.html'
                        },
                        responseHeaders: [
                            {
                                name: 'repeated',
                                value: 'first'
                            },
                            {
                                name: 'repeated',
                                value: 'second'
                            },
                            {
                                name: 'repeated',
                                value: 'third'
                            }
                        ]
                    };
                    expected = [
                        {
                            name: 'age',
                            value: 'overridden'
                        },
                        {
                            name: 'index-only',
                            value: 'only added to index.html'
                        },
                        {
                            name: 'repeated',
                            value: 'first'
                        },
                        {
                            name: 'repeated',
                            value: 'second'
                        },
                        {
                            name: 'repeated',
                            value: 'third'
                        }
                    ];
                    return [
                        4,
                        networkPersistenceManager.handleHeaderInterception(interceptedRequest)
                    ];
                case 1:
                    actual = _state.sent();
                    assert.deepEqual(actual.sort(function(a, b) {
                        return a.name.localeCompare(b.name);
                    }), expected);
                    return [
                        2
                    ];
            }
        });
    }));
    it('merges headers and can override muliple headers with the same name', /*#__PURE__*/ _async_to_generator(function() {
        var interceptedRequest, expected, actual;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    interceptedRequest = {
                        request: {
                            url: 'https://www.example.com/repeated.html'
                        },
                        responseHeaders: [
                            {
                                name: 'repeated',
                                value: 'first'
                            },
                            {
                                name: 'repeated',
                                value: 'second'
                            },
                            {
                                name: 'repeated',
                                value: 'third'
                            }
                        ]
                    };
                    expected = [
                        {
                            name: 'age',
                            value: 'overridden'
                        },
                        {
                            name: 'repeated',
                            value: 'first override'
                        },
                        {
                            name: 'repeated',
                            value: 'second override'
                        }
                    ];
                    return [
                        4,
                        networkPersistenceManager.handleHeaderInterception(interceptedRequest)
                    ];
                case 1:
                    actual = _state.sent();
                    assert.deepEqual(actual.sort(function(a, b) {
                        return a.name.localeCompare(b.name);
                    }), expected);
                    return [
                        2
                    ];
            }
        });
    }));
    it('translates URLs into raw and encoded paths', /*#__PURE__*/ _async_to_generator(function() {
        var toTest;
        return _ts_generator(this, function(_state) {
            toTest = [
                // Simple tests.
                {
                    url: 'www.example.com/',
                    raw: 'www.example.com/index.html',
                    encoded: 'www.example.com/index.html'
                },
                {
                    url: 'www.example.com/simple',
                    raw: 'www.example.com/simple',
                    encoded: 'www.example.com/simple'
                },
                {
                    url: 'www.example.com/hello/foo/bar',
                    raw: 'www.example.com/hello/foo/bar',
                    encoded: 'www.example.com/hello/foo/bar'
                },
                {
                    url: 'www.example.com/.',
                    raw: 'www.example.com/.',
                    encoded: 'www.example.com/'
                },
                {
                    url: 'localhost:8090/endswith.',
                    raw: 'localhost:8090/endswith.',
                    encoded: 'localhost:8090/endswith.'
                },
                // Query parameters.
                {
                    url: 'example.com/fo?o/bar',
                    raw: 'example.com/fo?o%2Fbar',
                    encoded: 'example.com/fo%3Fo%252Fbar'
                },
                {
                    url: 'example.com/foo?/bar',
                    raw: 'example.com/foo?%2Fbar',
                    encoded: 'example.com/foo%3F%252Fbar'
                },
                {
                    url: 'example.com/foo/?bar',
                    raw: 'example.com/foo/?bar',
                    encoded: 'example.com/foo/%3Fbar'
                },
                {
                    url: 'example.com/?foo/bar/3',
                    raw: 'example.com/?foo%2Fbar%2F3',
                    encoded: 'example.com/%3Ffoo%252Fbar%252F3'
                },
                {
                    url: 'example.com/foo/bar/?3hello/bar',
                    raw: 'example.com/foo/bar/?3hello%2Fbar',
                    encoded: 'example.com/foo/bar/%3F3hello%252Fbar'
                },
                {
                    url: 'https://www.example.com/?foo=bar',
                    raw: 'www.example.com/?foo=bar',
                    encoded: 'www.example.com/%3Ffoo=bar'
                },
                {
                    url: 'http://www.example.com/?foo=bar/',
                    raw: 'www.example.com/?foo=bar%2F',
                    encoded: 'www.example.com/%3Ffoo=bar%252F'
                },
                {
                    url: 'http://www.example.com/?foo=bar?',
                    raw: 'www.example.com/?foo=bar?',
                    encoded: 'www.example.com/%3Ffoo=bar%3F'
                },
                // Hash parameters.
                {
                    url: 'example.com/?foo/bar/3#hello/bar',
                    raw: 'example.com/?foo%2Fbar%2F3',
                    encoded: 'example.com/%3Ffoo%252Fbar%252F3'
                },
                {
                    url: 'example.com/#foo/bar/3hello/bar',
                    raw: 'example.com/index.html',
                    encoded: 'example.com/index.html'
                },
                {
                    url: 'example.com/foo/bar/#?3hello/bar',
                    raw: 'example.com/foo/bar/index.html',
                    encoded: 'example.com/foo/bar/index.html'
                },
                {
                    url: 'example.com/foo.js#',
                    raw: 'example.com/foo.js',
                    encoded: 'example.com/foo.js'
                },
                {
                    url: 'http://www.web.dev/path/page.html#anchor',
                    raw: 'www.web.dev/path/page.html',
                    encoded: 'www.web.dev/path/page.html'
                },
                {
                    url: 'http://www.example.com/file&$*?.html',
                    raw: 'www.example.com/file&$%2A?.html',
                    encoded: 'www.example.com/file&$%252A%3F.html'
                },
                {
                    url: 'localhost:8090/',
                    raw: 'localhost:8090/index.html',
                    encoded: 'localhost:8090/index.html'
                },
                {
                    url: 'localhost:8090/lpt1',
                    raw: 'localhost:8090/lpt1',
                    encoded: 'localhost:8090/lpt1'
                },
                {
                    url: 'example.com/foo .js',
                    raw: 'example.com/foo%20.js',
                    encoded: 'example.com/foo%2520.js'
                },
                {
                    url: 'example.com///foo.js',
                    raw: 'example.com/foo.js',
                    encoded: 'example.com/foo.js'
                },
                {
                    url: 'example.com///',
                    raw: 'example.com/index.html',
                    encoded: 'example.com/index.html'
                },
                // Very long file names.
                {
                    url: 'example.com' + '/THIS/PATH/IS_MORE_THAN/200/Chars'.repeat(8),
                    raw: 'example.com/longurls/Chars-141a715a',
                    encoded: 'example.com/longurls/Chars-141a715a'
                },
                {
                    url: ('example.com' + '/THIS/PATH/IS_LESS_THAN/200/Chars'.repeat(5)).slice(0, -1),
                    raw: 'example.com/THIS/PATH/IS_LESS_THAN/200/Chars/THIS/PATH/IS_LESS_THAN/200/Chars/THIS/PATH/IS_LESS_THAN/200/Chars/THIS/PATH/IS_LESS_THAN/200/Chars/THIS/PATH/IS_LESS_THAN/200/Char',
                    encoded: 'example.com/THIS/PATH/IS_LESS_THAN/200/Chars/THIS/PATH/IS_LESS_THAN/200/Chars/THIS/PATH/IS_LESS_THAN/200/Chars/THIS/PATH/IS_LESS_THAN/200/Chars/THIS/PATH/IS_LESS_THAN/200/Char'
                }
            ];
            if (_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.isWin()) {
                toTest = [
                    {
                        url: 'https://www.example.com/?foo=bar',
                        raw: 'www.example.com/%3Ffoo=bar',
                        encoded: 'www.example.com/%253Ffoo=bar'
                    },
                    {
                        url: 'http://www.web.dev/path/page.html#anchor',
                        raw: 'www.web.dev/path/page.html',
                        encoded: 'www.web.dev/path/page.html'
                    },
                    {
                        url: 'http://www.example.com/?foo=bar/',
                        raw: 'www.example.com/%3Ffoo=bar%2F',
                        encoded: 'www.example.com/%253Ffoo=bar%252F'
                    },
                    {
                        url: 'http://www.example.com/?foo=bar?',
                        raw: 'www.example.com/%3Ffoo=bar%3F',
                        encoded: 'www.example.com/%253Ffoo=bar%253F'
                    },
                    {
                        url: 'http://www.example.com/file&$*?.html',
                        raw: 'www.example.com/file&$%2A%3F.html',
                        encoded: 'www.example.com/file&$%252A%253F.html'
                    },
                    {
                        url: 'localhost:8090/',
                        raw: 'localhost%3A8090/index.html',
                        encoded: 'localhost%253A8090/index.html'
                    },
                    // Windows cannot end with . (period) and space.
                    {
                        url: 'example.com/foo.js.',
                        raw: 'example.com/foo.js%2E',
                        encoded: 'example.com/foo.js%252E'
                    },
                    {
                        url: 'localhost:8090/endswith.',
                        raw: 'localhost%3A8090/endswith%2E',
                        encoded: 'localhost%253A8090/endswith%252E'
                    },
                    {
                        url: 'example.com/foo.js ',
                        raw: 'example.com/foo.js%20',
                        encoded: 'example.com/foo.js%2520'
                    },
                    // Reserved filenames on Windows.
                    {
                        url: 'example.com/CON',
                        raw: 'example.com/%43%4F%4E',
                        encoded: 'example.com/%2543%254F%254E'
                    },
                    {
                        url: 'example.com/cOn',
                        raw: 'example.com/%63%4F%6E',
                        encoded: 'example.com/%2563%254F%256E'
                    },
                    {
                        url: 'example.com/cOn/hello',
                        raw: 'example.com/%63%4F%6E/hello',
                        encoded: 'example.com/%2563%254F%256E/hello'
                    },
                    {
                        url: 'example.com/PRN',
                        raw: 'example.com/%50%52%4E',
                        encoded: 'example.com/%2550%2552%254E'
                    },
                    {
                        url: 'example.com/AUX',
                        raw: 'example.com/%41%55%58',
                        encoded: 'example.com/%2541%2555%2558'
                    },
                    {
                        url: 'example.com/NUL',
                        raw: 'example.com/%4E%55%4C',
                        encoded: 'example.com/%254E%2555%254C'
                    },
                    {
                        url: 'example.com/COM1',
                        raw: 'example.com/%43%4F%4D%31',
                        encoded: 'example.com/%2543%254F%254D%2531'
                    },
                    {
                        url: 'example.com/COM2',
                        raw: 'example.com/%43%4F%4D%32',
                        encoded: 'example.com/%2543%254F%254D%2532'
                    },
                    {
                        url: 'example.com/COM3',
                        raw: 'example.com/%43%4F%4D%33',
                        encoded: 'example.com/%2543%254F%254D%2533'
                    },
                    {
                        url: 'example.com/COM4',
                        raw: 'example.com/%43%4F%4D%34',
                        encoded: 'example.com/%2543%254F%254D%2534'
                    },
                    {
                        url: 'example.com/COM5',
                        raw: 'example.com/%43%4F%4D%35',
                        encoded: 'example.com/%2543%254F%254D%2535'
                    },
                    {
                        url: 'example.com/COM6',
                        raw: 'example.com/%43%4F%4D%36',
                        encoded: 'example.com/%2543%254F%254D%2536'
                    },
                    {
                        url: 'example.com/COM7',
                        raw: 'example.com/%43%4F%4D%37',
                        encoded: 'example.com/%2543%254F%254D%2537'
                    },
                    {
                        url: 'example.com/COM8',
                        raw: 'example.com/%43%4F%4D%38',
                        encoded: 'example.com/%2543%254F%254D%2538'
                    },
                    {
                        url: 'example.com/COM9',
                        raw: 'example.com/%43%4F%4D%39',
                        encoded: 'example.com/%2543%254F%254D%2539'
                    },
                    {
                        url: 'localhost:8090/lpt1',
                        raw: 'localhost%3A8090/%6C%70%74%31',
                        encoded: 'localhost%253A8090/%256C%2570%2574%2531'
                    },
                    {
                        url: 'example.com/LPT1',
                        raw: 'example.com/%4C%50%54%31',
                        encoded: 'example.com/%254C%2550%2554%2531'
                    },
                    {
                        url: 'example.com/LPT2',
                        raw: 'example.com/%4C%50%54%32',
                        encoded: 'example.com/%254C%2550%2554%2532'
                    },
                    {
                        url: 'example.com/LPT3',
                        raw: 'example.com/%4C%50%54%33',
                        encoded: 'example.com/%254C%2550%2554%2533'
                    },
                    {
                        url: 'example.com/LPT4',
                        raw: 'example.com/%4C%50%54%34',
                        encoded: 'example.com/%254C%2550%2554%2534'
                    },
                    {
                        url: 'example.com/LPT5',
                        raw: 'example.com/%4C%50%54%35',
                        encoded: 'example.com/%254C%2550%2554%2535'
                    },
                    {
                        url: 'example.com/LPT6',
                        raw: 'example.com/%4C%50%54%36',
                        encoded: 'example.com/%254C%2550%2554%2536'
                    },
                    {
                        url: 'example.com/LPT7',
                        raw: 'example.com/%4C%50%54%37',
                        encoded: 'example.com/%254C%2550%2554%2537'
                    },
                    {
                        url: 'example.com/LPT8',
                        raw: 'example.com/%4C%50%54%38',
                        encoded: 'example.com/%254C%2550%2554%2538'
                    },
                    {
                        url: 'example.com/LPT9',
                        raw: 'example.com/%4C%50%54%39',
                        encoded: 'example.com/%254C%2550%2554%2539'
                    }
                ];
            }
            toTest.forEach(function(testStrings) {
                assert.deepEqual(networkPersistenceManager.rawPathFromUrl(testStrings.url), testStrings.raw);
                assert.deepEqual(networkPersistenceManager.encodedPathFromUrl(testStrings.url), testStrings.encoded);
            });
            return [
                2
            ];
        });
    }));
    it('is aware of which \'.headers\' files are currently active', function(done) {
        var workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.Workspace.WorkspaceImpl.instance();
        var project = {
            type: function() {
                return _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.Workspace.projectTypes.Network;
            }
        };
        var networkUISourceCode = {
            url: function() {
                return 'https://www.example.com/hello/world/index.html';
            },
            project: function() {
                return project;
            },
            contentType: function() {
                return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document;
            }
        };
        project.uiSourceCodes = function() {
            return [
                networkUISourceCode
            ];
        };
        var eventURLs = [];
        networkPersistenceManager.addEventListener("RequestsForHeaderOverridesFileChanged" /* Persistence.NetworkPersistenceManager.Events.RequestsForHeaderOverridesFileChanged */ , function(event) {
            eventURLs.push(event.data.url());
        });
        workspace.dispatchEventToListeners(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.Workspace.Events.UISourceCodeAdded, networkUISourceCode);
        assert.isTrue(networkPersistenceManager.hasMatchingNetworkUISourceCodeForHeaderOverridesFile({
            url: function() {
                return 'file:///path/to/overrides/www.example.com/.headers';
            },
            project: function() {
                return networkPersistenceManager.project();
            }
        }));
        assert.isTrue(networkPersistenceManager.hasMatchingNetworkUISourceCodeForHeaderOverridesFile({
            url: function() {
                return 'file:///path/to/overrides/.headers';
            },
            project: function() {
                return networkPersistenceManager.project();
            }
        }));
        assert.isFalse(networkPersistenceManager.hasMatchingNetworkUISourceCodeForHeaderOverridesFile({
            url: function() {
                return 'file:///path/to/overrides/www.foo.com/.headers';
            },
            project: function() {
                return networkPersistenceManager.project();
            }
        }));
        workspace.dispatchEventToListeners(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.Workspace.Events.ProjectRemoved, project);
        setTimeout(function() {
            assert.deepStrictEqual(eventURLs, [
                'file:///path/to/overrides/.headers',
                'file:///path/to/overrides/www.example.com/.headers'
            ]);
            assert.isFalse(networkPersistenceManager.hasMatchingNetworkUISourceCodeForHeaderOverridesFile({
                url: function() {
                    return 'file:///path/to/overrides/www.example.com/.headers';
                },
                project: function() {
                    return networkPersistenceManager.project();
                }
            }));
            assert.isFalse(networkPersistenceManager.hasMatchingNetworkUISourceCodeForHeaderOverridesFile({
                url: function() {
                    return 'file:///path/to/overrides/.headers';
                },
                project: function() {
                    return networkPersistenceManager.project();
                }
            }));
            assert.isFalse(networkPersistenceManager.hasMatchingNetworkUISourceCodeForHeaderOverridesFile({
                url: function() {
                    return 'file:///path/to/overrides/www.foo.com/.headers';
                },
                project: function() {
                    return networkPersistenceManager.project();
                }
            }));
            done();
        }, 0);
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('NetworkPersistenceManager', function() {
    beforeEach(function() {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.MultitargetNetworkManager.dispose();
    });
    it('updates active state when target detach and attach', /*#__PURE__*/ _async_to_generator(function() {
        var networkPersistenceManager, project, targetManager, target;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    networkPersistenceManager = (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.setUpEnvironment)().networkPersistenceManager;
                    project = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createFileSystemUISourceCode)({
                        url: 'file:///tmp',
                        mimeType: 'text/plain'
                    }).project;
                    return [
                        4,
                        networkPersistenceManager.setProject(project)
                    ];
                case 1:
                    _state.sent();
                    targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
                    assert.isNull(targetManager.rootTarget());
                    assert.isFalse(networkPersistenceManager.active());
                    return [
                        4,
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)()
                    ];
                case 2:
                    target = _state.sent();
                    assert.isTrue(networkPersistenceManager.active());
                    targetManager.removeTarget(target);
                    target.dispose('test');
                    assert.isFalse(networkPersistenceManager.active());
                    return [
                        2
                    ];
            }
        });
    }));
});
describe('NetworkPersistenceManager', function() {
    before(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.initializeGlobalVars)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    after(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.deinitializeGlobalVars)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('escapes patterns to be used in RegExes', function() {
        assert.strictEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.escapeRegex('www.example.com/'), 'www\\.example\\.com/');
        assert.strictEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.escapeRegex('www.example.com/index.html'), 'www\\.example\\.com/index\\.html');
        assert.strictEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.escapeRegex('www.example.com/*'), 'www\\.example\\.com/.*');
        assert.strictEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.escapeRegex('www.example.com/*.js'), 'www\\.example\\.com/.*\\.js');
        assert.strictEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.escapeRegex('www.example.com/file([{with-special$_^chars}])'), 'www\\.example\\.com/file\\(\\[\\{with\\-special\\$_\\^chars\\}\\]\\)');
        assert.strictEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.escapeRegex('www.example.com/page.html?foo=bar'), 'www\\.example\\.com/page\\.html\\?foo=bar');
        assert.strictEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.escapeRegex('www.example.com/*?foo=bar'), 'www\\.example\\.com/.*\\?foo=bar');
    });
    it('detects when the tail of a path matches with a default index file', function() {
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('index.html'), {
            head: '',
            tail: 'index.html'
        });
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('index.htm'), {
            head: '',
            tail: 'index.htm'
        });
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('index.php'), {
            head: '',
            tail: 'index.php'
        });
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('index.ht'), {
            head: 'index.ht'
        });
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('*.html'), {
            head: '',
            tail: '*.html'
        });
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('*.htm'), {
            head: '',
            tail: '*.htm'
        });
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('path/*.html'), {
            head: 'path/',
            tail: '*.html'
        });
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('foo*.html'), {
            head: 'foo*.html'
        });
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('a*'), {
            head: 'a*'
        });
        assert.deepEqual(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.NetworkPersistenceManager.extractDirectoryIndex('a/*'), {
            head: 'a/*'
        });
    });
    it('merges headers which do not overlap', function() {
        var networkPersistenceManager = (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.setUpEnvironment)().networkPersistenceManager;
        var baseHeaders = [
            {
                name: 'age',
                value: '0'
            }
        ];
        var overrideHeaders = [
            {
                'name': 'accept-ranges',
                'value': 'bytes'
            }
        ];
        var merged = [
            {
                name: 'accept-ranges',
                value: 'bytes'
            },
            {
                name: 'age',
                value: '0'
            }
        ];
        assert.deepEqual(networkPersistenceManager.mergeHeaders(baseHeaders, overrideHeaders), merged);
    });
    it('merges headers which overlap', function() {
        var networkPersistenceManager = (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.setUpEnvironment)().networkPersistenceManager;
        var baseHeaders = [
            {
                name: 'age',
                value: '0'
            }
        ];
        var overrideHeaders = [
            {
                name: 'accept-ranges',
                value: 'bytes'
            },
            {
                name: 'age',
                value: '1'
            }
        ];
        var merged = [
            {
                name: 'accept-ranges',
                value: 'bytes'
            },
            {
                name: 'age',
                value: '1'
            }
        ];
        assert.deepEqual(networkPersistenceManager.mergeHeaders(baseHeaders, overrideHeaders), merged);
    });
    it('generates header patterns', /*#__PURE__*/ _async_to_generator(function() {
        var networkPersistenceManager, headers, uiSourceCode, expectedPatterns, _ref, headerPatterns, path, overridesWithRegex, expectedMapping, actualMapping;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    networkPersistenceManager = (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.setUpEnvironment)().networkPersistenceManager;
                    headers = '[\n      {\n        "applyTo": "*",\n        "headers": [{\n          "name": "age",\n          "value": "0"\n        }]\n      },\n      {\n        "applyTo": "page.html",\n        "headers": [{\n          "name": "age",\n          "value": "1"\n        }]\n      },\n      {\n        "applyTo": "index.html",\n        "headers": [{\n          "name": "age",\n          "value": "2"\n        }]\n      },\n      {\n        "applyTo": "nested/path/*.js",\n        "headers": [{\n          "name": "age",\n          "value": "3"\n        }]\n      },\n      {\n        "applyTo": "*/path/*.js",\n        "headers": [{\n          "name": "age",\n          "value": "4"\n        }]\n      }\n    ]';
                    uiSourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createFileSystemUISourceCode)({
                        url: 'file:///path/to/overrides/www.example.com/.headers',
                        content: headers,
                        mimeType: 'text/plain',
                        fileSystemPath: 'file:///path/to/overrides'
                    }).uiSourceCode;
                    expectedPatterns = [
                        'http?://www.example.com/*',
                        'http?://www.example.com/page.html',
                        'http?://www.example.com/index.html',
                        'http?://www.example.com/',
                        'http?://www.example.com/nested/path/*.js',
                        'http?://www.example.com/*/path/*.js'
                    ];
                    return [
                        4,
                        networkPersistenceManager.generateHeaderPatterns(uiSourceCode)
                    ];
                case 1:
                    _ref = _state.sent(), headerPatterns = _ref.headerPatterns, path = _ref.path, overridesWithRegex = _ref.overridesWithRegex;
                    assert.deepEqual(Array.from(headerPatterns).sort(), expectedPatterns.sort());
                    expectedMapping = [
                        {
                            applyTo: /^www\.example\.com\/.*$/.toString(),
                            headers: [
                                {
                                    name: 'age',
                                    value: '0'
                                }
                            ]
                        },
                        {
                            applyTo: /^www\.example\.com\/page\.html$/.toString(),
                            headers: [
                                {
                                    name: 'age',
                                    value: '1'
                                }
                            ]
                        },
                        {
                            applyTo: /^www\.example\.com\/(index\.html)?$/.toString(),
                            headers: [
                                {
                                    name: 'age',
                                    value: '2'
                                }
                            ]
                        },
                        {
                            applyTo: /^www\.example\.com\/nested\/path\/.*\.js$/.toString(),
                            headers: [
                                {
                                    name: 'age',
                                    value: '3'
                                }
                            ]
                        },
                        {
                            applyTo: /^www\.example\.com\/.*\/path\/.*\.js$/.toString(),
                            headers: [
                                {
                                    name: 'age',
                                    value: '4'
                                }
                            ]
                        }
                    ];
                    assert.strictEqual(path, 'www.example.com/');
                    actualMapping = overridesWithRegex.map(function(override) {
                        return {
                            applyTo: override.applyToRegex.toString(),
                            headers: override.headers
                        };
                    });
                    assert.deepEqual(actualMapping, expectedMapping);
                    return [
                        2
                    ];
            }
        });
    }));
    it('generates header patterns for global header overrides', /*#__PURE__*/ _async_to_generator(function() {
        var networkPersistenceManager, headers, uiSourceCode, headerPatterns;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    networkPersistenceManager = (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.setUpEnvironment)().networkPersistenceManager;
                    headers = '[\n      {\n        "applyTo": "*",\n        "headers": [{\n          "name": "age",\n          "value": "0"\n        }]\n      }\n    ]';
                    uiSourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createFileSystemUISourceCode)({
                        url: 'file:///path/to/overrides/.headers',
                        content: headers,
                        mimeType: 'text/plain',
                        fileSystemPath: 'file:///path/to/overrides'
                    }).uiSourceCode;
                    return [
                        4,
                        networkPersistenceManager.generateHeaderPatterns(uiSourceCode)
                    ];
                case 1:
                    headerPatterns = _state.sent().headerPatterns;
                    assert.deepEqual(Array.from(headerPatterns), [
                        'http?://*',
                        'file:///*'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('generates header patterns for long URLs', /*#__PURE__*/ _async_to_generator(function() {
        var networkPersistenceManager, headers, uiSourceCode, _ref, headerPatterns, path, overridesWithRegex, expectedMapping, actualMapping;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    networkPersistenceManager = (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.setUpEnvironment)().networkPersistenceManager;
                    headers = '[\n      {\n        "applyTo": "index.html-5b9f4873.html",\n        "headers": [{\n          "name": "foo",\n          "value": "bar"\n        }]\n      }\n    ]';
                    uiSourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createFileSystemUISourceCode)({
                        url: 'file:///path/to/overrides/www.longurls.com/longurls/.headers',
                        content: headers,
                        mimeType: 'text/plain',
                        fileSystemPath: 'file:///path/to/overrides'
                    }).uiSourceCode;
                    return [
                        4,
                        networkPersistenceManager.generateHeaderPatterns(uiSourceCode)
                    ];
                case 1:
                    _ref = _state.sent(), headerPatterns = _ref.headerPatterns, path = _ref.path, overridesWithRegex = _ref.overridesWithRegex;
                    assert.deepEqual(Array.from(headerPatterns), [
                        'http?://www.longurls.com/*'
                    ]);
                    assert.strictEqual(path, 'www.longurls.com/longurls/');
                    expectedMapping = [
                        {
                            applyTo: /^www\.longurls\.com\/longurls\/index\.html\-5b9f4873\.html$/.toString(),
                            headers: [
                                {
                                    name: 'foo',
                                    value: 'bar'
                                }
                            ]
                        }
                    ];
                    actualMapping = overridesWithRegex.map(function(override) {
                        return {
                            applyTo: override.applyToRegex.toString(),
                            headers: override.headers
                        };
                    });
                    assert.deepEqual(actualMapping, expectedMapping);
                    return [
                        2
                    ];
            }
        });
    }));
    it('updates interception patterns upon edit of .headers file', /*#__PURE__*/ _async_to_generator(function() {
        var networkPersistenceManager, headers, uiSourceCode, spy;
        return _ts_generator(this, function(_state) {
            networkPersistenceManager = (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.setUpEnvironment)().networkPersistenceManager;
            headers = '[\n      {\n        "applyTo": "index.html",\n        "headers": [{\n          "name": "foo",\n          "value": "bar"\n        }]\n      }\n    ]';
            uiSourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createFileSystemUISourceCode)({
                url: 'file:///path/to/overrides/www.example.com/.headers',
                content: headers,
                mimeType: 'text/plain',
                fileSystemPath: 'file:///path/to/overrides'
            }).uiSourceCode;
            spy = sinon.spy(networkPersistenceManager, 'updateInterceptionPatterns');
            assert.isTrue(spy.notCalled);
            uiSourceCode.setWorkingCopy('[\n      {\n        "applyTo": "index.html",\n        "headers": [{\n          "name": "foo2",\n          "value": "bar2"\n        }]\n      }\n    ]');
            uiSourceCode.commitWorkingCopy();
            assert.isTrue(spy.calledOnce);
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=NetworkPersistenceManager.test.js.map


}),

}]);