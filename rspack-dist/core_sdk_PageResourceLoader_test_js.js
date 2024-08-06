"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_PageResourceLoader_test_js"], {
"./core/sdk/PageResourceLoader.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _common_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common.js */ "./core/common/common.js");
/* harmony import */var _host_host_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../host/host.js */ "./core/host/host.js");
/* harmony import */var _platform_platform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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






var initiator = {
    target: null,
    frameId: '123',
    initiatorUrl: _platform_platform_js__WEBPACK_IMPORTED_MODULE_4__.DevToolsPath.EmptyUrlString
};
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('PageResourceLoader', function() {
    var foo1Url = 'foo1';
    var foo2Url = 'foo2';
    var foo3Url = 'foo3';
    var loads = [];
    var load = function() {
        var _ref = _async_to_generator(function(url) {
            return _ts_generator(this, function(_state) {
                loads.push({
                    url: url
                });
                return [
                    2,
                    {
                        success: true,
                        content: "".concat(url, " - content"),
                        errorDescription: {
                            message: '',
                            statusCode: 0,
                            netError: 0,
                            netErrorName: '',
                            urlValid: true
                        }
                    }
                ];
            });
        });
        return function load(url) {
            return _ref.apply(this, arguments);
        };
    }();
    beforeEach(function() {
        loads.length = 0;
    });
    it('registers extension loads', /*#__PURE__*/ _async_to_generator(function() {
        var loader, initiator, extensionResource, resources;
        return _ts_generator(this, function(_state) {
            loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({
                forceNew: true,
                loadOverride: load,
                maxConcurrentLoads: 500
            });
            initiator = {
                extensionId: '123',
                initiatorUrl: 'www.test.com/main.wasm.dwp',
                target: null,
                frameId: null
            };
            extensionResource = {
                url: 'main.wasm.dwp',
                success: true,
                initiator: initiator,
                size: null
            };
            loader.resourceLoadedThroughExtension(extensionResource);
            assert.deepEqual(loader.getScopedNumberOfResources(), {
                loading: 0,
                resources: 1
            });
            assert.deepEqual(loader.getNumberOfResources(), {
                loading: 0,
                queued: 0,
                resources: 1
            });
            resources = Array.from(loader.getResourcesLoaded().values());
            assert.lengthOf(resources, 1);
            assert.isTrue(resources[0].success);
            assert.deepEqual(resources[0].initiator, initiator);
            return [
                2
            ];
        });
    }));
    it('loads resources correctly', /*#__PURE__*/ _async_to_generator(function() {
        var loader, loading, results, resources;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({
                        forceNew: true,
                        loadOverride: load,
                        maxConcurrentLoads: 500
                    });
                    loading = [
                        loader.loadResource(foo1Url, initiator),
                        loader.loadResource(foo2Url, initiator),
                        loader.loadResource(foo3Url, initiator)
                    ];
                    assert.deepEqual(loader.getNumberOfResources(), {
                        loading: 3,
                        queued: 0,
                        resources: 3
                    });
                    return [
                        4,
                        Promise.all(loading)
                    ];
                case 1:
                    results = _state.sent();
                    assert.deepEqual(loads.map(function(x) {
                        return x.url;
                    }), [
                        'foo1',
                        'foo2',
                        'foo3'
                    ]);
                    assert.deepEqual(results.map(function(x) {
                        return x.content;
                    }), [
                        'foo1 - content',
                        'foo2 - content',
                        'foo3 - content'
                    ]);
                    assert.deepEqual(loader.getNumberOfResources(), {
                        loading: 0,
                        queued: 0,
                        resources: 3
                    });
                    resources = Array.from(loader.getResourcesLoaded().values());
                    assert.isTrue(resources.every(function(x) {
                        return x.success;
                    }));
                    return [
                        2
                    ];
            }
        });
    }));
    it('deals with page reloads correctly', /*#__PURE__*/ _async_to_generator(function() {
        var loader, loading, results;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({
                        forceNew: true,
                        loadOverride: load,
                        maxConcurrentLoads: 1
                    });
                    loading = [
                        loader.loadResource(foo1Url, initiator).catch(function(e) {
                            return e.message;
                        }),
                        loader.loadResource(foo2Url, initiator).catch(function(e) {
                            return e.message;
                        }),
                        loader.loadResource(foo3Url, initiator).catch(function(e) {
                            return e.message;
                        })
                    ];
                    assert.deepEqual(loader.getNumberOfResources(), {
                        loading: 3,
                        queued: 2,
                        resources: 3
                    });
                    loader.onPrimaryPageChanged({
                        data: {
                            frame: {
                                isOutermostFrame: function isOutermostFrame() {
                                    return true;
                                },
                                resourceTreeModel: function resourceTreeModel() {
                                    return {
                                        target: function target() {
                                            return null;
                                        }
                                    };
                                }
                            },
                            type: "Navigation" /* SDK.ResourceTreeModel.PrimaryPageChangeType.Navigation */ 
                        }
                    });
                    assert.deepEqual(loader.getNumberOfResources(), {
                        loading: 3,
                        queued: 0,
                        resources: 0
                    });
                    return [
                        4,
                        Promise.all(loading)
                    ];
                case 1:
                    results = _state.sent();
                    assert.deepEqual(loads.map(function(x) {
                        return x.url;
                    }), [
                        'foo1'
                    ]);
                    assert.deepEqual(results[0].content, 'foo1 - content');
                    assert.deepEqual(results[1], 'Load canceled due to reload of inspected page');
                    assert.deepEqual(results[2], 'Load canceled due to reload of inspected page');
                    return [
                        2
                    ];
            }
        });
    }));
    it('respects the max concurrent loads', /*#__PURE__*/ _async_to_generator(function() {
        var loader, loading, results, resources;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({
                        forceNew: true,
                        loadOverride: load,
                        maxConcurrentLoads: 2
                    });
                    loading = [
                        loader.loadResource(foo1Url, initiator),
                        loader.loadResource(foo2Url, initiator),
                        loader.loadResource(foo3Url, initiator)
                    ];
                    assert.deepEqual(loader.getNumberOfResources(), {
                        loading: 3,
                        queued: 1,
                        resources: 3
                    });
                    return [
                        4,
                        Promise.all(loading)
                    ];
                case 1:
                    results = _state.sent();
                    assert.deepEqual(loads.map(function(x) {
                        return x.url;
                    }), [
                        'foo1',
                        'foo2',
                        'foo3'
                    ]);
                    assert.deepEqual(results.map(function(x) {
                        return x.content;
                    }), [
                        'foo1 - content',
                        'foo2 - content',
                        'foo3 - content'
                    ]);
                    assert.deepEqual(loader.getNumberOfResources(), {
                        loading: 0,
                        queued: 0,
                        resources: 3
                    });
                    resources = Array.from(loader.getResourcesLoaded().values());
                    assert.isTrue(resources.every(function(x) {
                        return x.success;
                    }));
                    return [
                        2
                    ];
            }
        });
    }));
});
// Loading via host bindings requires the settings infra to be booted.
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('PageResourceLoader', function() {
    it('blocks UNC file paths with the default setting', /*#__PURE__*/ _async_to_generator(function() {
        var loader, message;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!_host_host_js__WEBPACK_IMPORTED_MODULE_3__.Platform.isWin()) {
                        return [
                            2
                        ];
                    }
                    loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({
                        forceNew: true,
                        loadOverride: null,
                        maxConcurrentLoads: 1
                    });
                    return [
                        4,
                        loader.loadResource('file:////127.0.0.1/share/source-map.js.map', initiator).catch(function(e) {
                            return e.message;
                        })
                    ];
                case 1:
                    message = _state.sent();
                    assert.include(message, 'remote file');
                    return [
                        2
                    ];
            }
        });
    }));
    it('blocks remote file paths with the default setting', /*#__PURE__*/ _async_to_generator(function() {
        var loader, message;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({
                        forceNew: true,
                        loadOverride: null,
                        maxConcurrentLoads: 1
                    });
                    return [
                        4,
                        loader.loadResource('file://host/source-map.js.map', initiator).catch(function(e) {
                            return e.message;
                        })
                    ];
                case 1:
                    message = _state.sent();
                    assert.include(message, 'remote file');
                    return [
                        2
                    ];
            }
        });
    }));
    it('blocks UNC file paths with a backslash on Windows with the default setting', /*#__PURE__*/ _async_to_generator(function() {
        var loader, message;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!_host_host_js__WEBPACK_IMPORTED_MODULE_3__.Platform.isWin()) {
                        return [
                            2
                        ];
                    }
                    loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({
                        forceNew: true,
                        loadOverride: null,
                        maxConcurrentLoads: 1
                    });
                    return [
                        4,
                        loader.loadResource('file:///\\127.0.0.1/share/source-map.js.map', initiator).catch(function(e) {
                            return e.message;
                        })
                    ];
                case 1:
                    message = _state.sent();
                    assert.include(message, 'remote file');
                    return [
                        2
                    ];
            }
        });
    }));
    it('allows remote file paths with the setting enabled', /*#__PURE__*/ _async_to_generator(function() {
        var loader, response;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({
                        forceNew: true,
                        loadOverride: null,
                        maxConcurrentLoads: 1
                    });
                    sinon.stub(_host_host_js__WEBPACK_IMPORTED_MODULE_3__.InspectorFrontendHost.InspectorFrontendHostInstance, 'loadNetworkResource').callsFake(function(_url, _headers, streamId, callback) {
                        _host_host_js__WEBPACK_IMPORTED_MODULE_3__.ResourceLoader.streamWrite(streamId, 'content of the source map');
                        callback({
                            statusCode: 200
                        });
                    });
                    _common_common_js__WEBPACK_IMPORTED_MODULE_2__.Settings.Settings.instance().moduleSetting('network.enable-remote-file-loading').set(true);
                    return [
                        4,
                        loader.loadResource('file://host/source-map.js.map', initiator)
                    ];
                case 1:
                    response = _state.sent();
                    assert.strictEqual(response.content, 'content of the source map');
                    return [
                        2
                    ];
            }
        });
    }));
    it('allows UNC paths on Windows with the setting enabled', /*#__PURE__*/ _async_to_generator(function() {
        var loader, response;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!_host_host_js__WEBPACK_IMPORTED_MODULE_3__.Platform.isWin()) {
                        return [
                            2
                        ];
                    }
                    loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({
                        forceNew: true,
                        loadOverride: null,
                        maxConcurrentLoads: 1
                    });
                    sinon.stub(_host_host_js__WEBPACK_IMPORTED_MODULE_3__.InspectorFrontendHost.InspectorFrontendHostInstance, 'loadNetworkResource').callsFake(function(_url, _headers, streamId, callback) {
                        _host_host_js__WEBPACK_IMPORTED_MODULE_3__.ResourceLoader.streamWrite(streamId, 'content of the source map');
                        callback({
                            statusCode: 200
                        });
                    });
                    _common_common_js__WEBPACK_IMPORTED_MODULE_2__.Settings.Settings.instance().moduleSetting('network.enable-remote-file-loading').set(true);
                    return [
                        4,
                        loader.loadResource('file:////127.0.0.1/share/source-map.js.map', initiator)
                    ];
                case 1:
                    response = _state.sent();
                    assert.strictEqual(response.content, 'content of the source map');
                    return [
                        2
                    ];
            }
        });
    }));
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('PageResourceLoader', function() {
    describe('loadResource', function() {
        var _loop = function(_i, _iter) {
            var disableCache = _iter[_i];
            it("loads with ".concat(disableCache ? 'disabled' : 'enabled', " cache based on the setting"), /*#__PURE__*/ _async_to_generator(function() {
                var target, initiator, loader, _ref, options, content;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _common_common_js__WEBPACK_IMPORTED_MODULE_2__.Settings.Settings.instance().moduleSetting('cache-disabled').set(disableCache);
                            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                            initiator = {
                                target: target,
                                frameId: null,
                                initiatorUrl: initiatorUrl
                            };
                            loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance();
                            return [
                                4,
                                Promise.all([
                                    setupLoadingSourceMapsAsNetworkResource(),
                                    loader.loadResource(url, initiator)
                                ])
                            ];
                        case 1:
                            _ref = _sliced_to_array.apply(void 0, [
                                _state.sent(),
                                2
                            ]), options = _ref[0].options, content = _ref[1].content;
                            // Check that we loaded the resources with appropriately enabled caching.
                            assert.strictEqual(options.disableCache, disableCache);
                            // Sanity check on the content.
                            assert.deepEqual(content, 'foo');
                            return [
                                2
                            ];
                    }
                });
            }));
        };
        var setupLoadingSourceMapsAsNetworkResource = function setupLoadingSourceMapsAsNetworkResource() {
            return new Promise(function(resolve) {
                var contentToRead = 'foo';
                (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('IO.read', function() {
                    var data = contentToRead;
                    contentToRead = null;
                    return {
                        data: data
                    };
                });
                (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('IO.close', function() {
                    return {};
                });
                (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('Network.loadNetworkResource', function(request) {
                    resolve(request);
                    return {
                        resource: {
                            success: true,
                            stream: stream,
                            statusCode: 200
                        }
                    };
                });
            });
        };
        var stream = 'STREAM_ID';
        var initiatorUrl = 'htp://example.com';
        var url = "".concat(initiatorUrl, "/test.txt");
        for(var _i = 0, _iter = [
            true,
            false
        ]; _i < _iter.length; _i++)_loop(_i, _iter);
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('PageResourceLoader', function() {
    var initiatorUrl = 'htp://example.com';
    var foo1Url = 'foo1';
    var foo2Url = 'foo2';
    var foo3Url = 'foo3';
    it('handles scoped resources', /*#__PURE__*/ _async_to_generator(function() {
        var target, prerenderTarget, initiator, prerenderInitiator, load, loader, resources, resourceUrls;
        return _ts_generator(this, function(_state) {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                id: 'main'
            });
            prerenderTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                id: 'prerender'
            });
            initiator = {
                target: target,
                frameId: null,
                initiatorUrl: initiatorUrl
            };
            prerenderInitiator = {
                target: prerenderTarget,
                frameId: null,
                initiatorUrl: initiatorUrl
            };
            load = function() {
                var _ref = _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    new Promise(function() {})
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    {
                                        success: true,
                                        content: 'content',
                                        errorDescription: {
                                            message: '',
                                            statusCode: 0,
                                            netError: 0,
                                            netErrorName: '',
                                            urlValid: true
                                        }
                                    }
                                ];
                        }
                    });
                });
                return function load() {
                    return _ref.apply(this, arguments);
                };
            }();
            loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({
                forceNew: true,
                loadOverride: load,
                maxConcurrentLoads: 500
            });
            void loader.loadResource(foo1Url, initiator);
            void loader.loadResource(foo2Url, initiator);
            void loader.loadResource(foo3Url, prerenderInitiator);
            assert.deepEqual(loader.getNumberOfResources(), {
                loading: 3,
                queued: 0,
                resources: 3
            });
            assert.deepEqual(loader.getScopedNumberOfResources(), {
                loading: 2,
                resources: 2
            });
            resources = loader.getScopedResourcesLoaded();
            resourceUrls = _to_consumable_array(resources.values()).map(function(x) {
                return x.url;
            });
            assert.deepEqual(resourceUrls, [
                foo1Url,
                foo2Url
            ]);
            _sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().setScopeTarget(prerenderTarget);
            assert.deepEqual(loader.getScopedNumberOfResources(), {
                loading: 1,
                resources: 1
            });
            resources = loader.getScopedResourcesLoaded();
            resourceUrls = _to_consumable_array(resources.values()).map(function(x) {
                return x.url;
            });
            assert.deepEqual(resourceUrls, [
                foo3Url
            ]);
            return [
                2
            ];
        });
    }));
    it('handles prerender activation', /*#__PURE__*/ _async_to_generator(function() {
        var target, prerenderTarget, initiator, prerenderInitiator, load, loader, resources, resourceUrls;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                        id: 'main'
                    });
                    prerenderTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                        id: 'prerender'
                    });
                    initiator = {
                        target: target,
                        frameId: null,
                        initiatorUrl: initiatorUrl
                    };
                    prerenderInitiator = {
                        target: prerenderTarget,
                        frameId: null,
                        initiatorUrl: initiatorUrl
                    };
                    load = function() {
                        var _ref = _async_to_generator(function(url) {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2,
                                    {
                                        success: true,
                                        content: "".concat(url, " - content"),
                                        errorDescription: {
                                            message: '',
                                            statusCode: 0,
                                            netError: 0,
                                            netErrorName: '',
                                            urlValid: true
                                        }
                                    }
                                ];
                            });
                        });
                        return function load(url) {
                            return _ref.apply(this, arguments);
                        };
                    }();
                    loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({
                        forceNew: true,
                        loadOverride: load,
                        maxConcurrentLoads: 500
                    });
                    return [
                        4,
                        Promise.all([
                            loader.loadResource(foo1Url, initiator),
                            loader.loadResource(foo2Url, initiator),
                            loader.loadResource(foo3Url, prerenderInitiator)
                        ])
                    ];
                case 1:
                    _state.sent();
                    assert.deepEqual(loader.getNumberOfResources(), {
                        loading: 0,
                        queued: 0,
                        resources: 3
                    });
                    assert.deepEqual(loader.getScopedNumberOfResources(), {
                        loading: 0,
                        resources: 2
                    });
                    resources = loader.getScopedResourcesLoaded();
                    resourceUrls = _to_consumable_array(resources.values()).map(function(x) {
                        return x.url;
                    });
                    assert.deepEqual(resourceUrls, [
                        foo1Url,
                        foo2Url
                    ]);
                    loader.onPrimaryPageChanged({
                        data: {
                            frame: {
                                isOutermostFrame: function isOutermostFrame() {
                                    return true;
                                },
                                resourceTreeModel: function resourceTreeModel() {
                                    return {
                                        target: function target() {
                                            return prerenderTarget;
                                        }
                                    };
                                }
                            },
                            type: "Activation" /* SDK.ResourceTreeModel.PrimaryPageChangeType.Activation */ 
                        }
                    });
                    assert.deepEqual(loader.getNumberOfResources(), {
                        loading: 0,
                        queued: 0,
                        resources: 1
                    });
                    _sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().setScopeTarget(prerenderTarget);
                    assert.deepEqual(loader.getScopedNumberOfResources(), {
                        loading: 0,
                        resources: 1
                    });
                    resources = loader.getScopedResourcesLoaded();
                    resourceUrls = _to_consumable_array(resources.values()).map(function(x) {
                        return x.url;
                    });
                    assert.deepEqual(resourceUrls, [
                        foo3Url
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=PageResourceLoader.test.js.map


}),

}]);