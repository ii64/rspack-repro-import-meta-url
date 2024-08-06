"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_SourceMapManager_test_js"], {
"./core/sdk/SourceMapManager.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/SourceMapHelpers.js */ "./testing/SourceMapHelpers.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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




var content = JSON.stringify({
    'version': 3,
    'file': '/script.js',
    'mappings': '',
    'sources': [
        '/original-script.js'
    ]
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('SourceMapManager', function() {
    it('uses url for a worker\'s source maps from frame', /*#__PURE__*/ _async_to_generator(function() {
        var frameUrl, scriptUrl, sourceUrl, sourceMapUrl, mainTarget, workerTarget, debuggerModel, sourceMapManager, script, sourceMap;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    (0,_testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupPageResourceLoaderForSourceMap)(content);
                    frameUrl = 'https://frame-host/index.html';
                    scriptUrl = 'https://script-host/script.js';
                    sourceUrl = 'script.js';
                    sourceMapUrl = 'script.js.map';
                    mainTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                        id: 'main',
                        name: 'main',
                        type: _sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Frame
                    });
                    mainTarget.setInspectedURL(frameUrl);
                    workerTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                        id: 'worker',
                        name: 'worker',
                        type: _sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Worker,
                        parentTarget: mainTarget
                    });
                    debuggerModel = workerTarget.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerModel.DebuggerModel);
                    assert.isNotNull(debuggerModel);
                    sourceMapManager = debuggerModel.sourceMapManager();
                    script = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.Script.Script(debuggerModel, '1', scriptUrl, 0, 0, 0, 0, 0, '', false, false, sourceMapUrl, false, 0, null, null, null, null, null, null);
                    sourceMapManager.attachSourceMap(script, sourceUrl, sourceMapUrl);
                    return [
                        4,
                        sourceMapManager.sourceMapForClientPromise(script)
                    ];
                case 1:
                    sourceMap = _state.sent();
                    // Check that the URLs are resolved relative to the frame.
                    assert.strictEqual(sourceMap === null || sourceMap === void 0 ? void 0 : sourceMap.url(), 'https://frame-host/script.js.map');
                    assert.deepEqual(sourceMap === null || sourceMap === void 0 ? void 0 : sourceMap.sourceURLs(), [
                        'https://frame-host/original-script.js'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can handle source maps in a data URL frame', /*#__PURE__*/ _async_to_generator(function() {
        var sourceUrl, sourceMapUrl, frameSource, frameUrl, scriptUrl, mainTarget, debuggerModel, sourceMapManager, script, sourceMap;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    (0,_testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupPageResourceLoaderForSourceMap)(content);
                    sourceUrl = 'script.js';
                    sourceMapUrl = "data:test/html;base64,".concat(btoa(content));
                    frameSource = '<script>0\n//# sourceURL=' + sourceUrl + '\n//# sourceMappingURL=' + sourceMapUrl + '</script>';
                    frameUrl = "data:test/html;base64,".concat(btoa(frameSource));
                    scriptUrl = 'https://script-host/script.js';
                    mainTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                        id: 'main',
                        name: 'main',
                        type: _sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Frame
                    });
                    mainTarget.setInspectedURL(frameUrl);
                    debuggerModel = mainTarget.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerModel.DebuggerModel);
                    assert.isNotNull(debuggerModel);
                    sourceMapManager = debuggerModel.sourceMapManager();
                    script = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.Script.Script(debuggerModel, '1', scriptUrl, 0, 0, 0, 0, 0, '', false, false, sourceMapUrl, false, 0, null, null, null, null, null, null);
                    sourceMapManager.attachSourceMap(script, sourceUrl, sourceMapUrl);
                    return [
                        4,
                        sourceMapManager.sourceMapForClientPromise(script)
                    ];
                case 1:
                    sourceMap = _state.sent();
                    assert.deepEqual(sourceMap === null || sourceMap === void 0 ? void 0 : sourceMap.sourceURLs(), [
                        '/original-script.js'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
});
describe('SourceMapManager', function() {
    var sourceURL = 'http://localhost/foo.js';
    var sourceMappingURL = "".concat(sourceURL, ".map");
    beforeEach(function() {
        _sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance({
            forceNew: true
        });
        _sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance({
            forceNew: true,
            loadOverride: null,
            maxConcurrentLoads: 1
        });
    });
    afterEach(function() {
        _sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.removeInstance();
        _sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.removeInstance();
    });
    var createTarget = function() {
        var target = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Target);
        target.type.returns(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Frame);
        return target;
    };
    var MockClient = /*#__PURE__*/ function() {
        "use strict";
        function MockClient(target) {
            _class_call_check(this, MockClient);
            _define_property(this, "target", void 0);
            this.target = target;
        }
        _create_class(MockClient, [
            {
                key: "createPageResourceLoadInitiator",
                value: function createPageResourceLoadInitiator() {
                    return {
                        target: this.target,
                        frameId: null,
                        initiatorUrl: null
                    };
                }
            }
        ]);
        return MockClient;
    }();
    describe('attachSourceMap', function() {
        it('catches attempts to attach twice for the same client', /*#__PURE__*/ _async_to_generator(function() {
            var target, sourceMapManager, client;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        target = createTarget();
                        sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
                        client = new MockClient(target);
                        sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').resolves({
                            content: content
                        });
                        sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
                        assert.throws(function() {
                            return sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
                        });
                        return [
                            4,
                            sourceMapManager.sourceMapForClientPromise(client)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('triggers the correct lifecycle events when loading succeeds', /*#__PURE__*/ _async_to_generator(function() {
            var target, sourceMapManager, client, sourceMapWillAttach, sourceMapAttached, sourceMap;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        target = createTarget();
                        sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
                        client = new MockClient(target);
                        sourceMapWillAttach = sinon.spy();
                        sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapWillAttach, sourceMapWillAttach);
                        sourceMapAttached = sinon.spy();
                        sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapAttached, sourceMapAttached);
                        sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').resolves({
                            content: content
                        });
                        sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
                        assert.strictEqual(sourceMapWillAttach.callCount, 1, 'SourceMapWillAttach events');
                        assert.isTrue(sourceMapWillAttach.calledWith(sinon.match.hasNested('data.client', client)));
                        return [
                            4,
                            sourceMapManager.sourceMapForClientPromise(client)
                        ];
                    case 1:
                        sourceMap = _state.sent();
                        assert.strictEqual(sourceMapAttached.callCount, 1, 'SourceMapAttached events');
                        assert.isTrue(sourceMapAttached.calledWith(sinon.match.hasNested('data.client', client)));
                        assert.isTrue(sourceMapAttached.calledWith(sinon.match.hasNested('data.sourceMap', sourceMap)));
                        assert.isTrue(sourceMapAttached.calledAfter(sourceMapWillAttach));
                        return [
                            2
                        ];
                }
            });
        }));
        it('triggers the correct lifecycle events when loading fails', /*#__PURE__*/ _async_to_generator(function() {
            var target, sourceMapManager, client, sourceMapWillAttach, sourceMapFailedToAttach;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        target = createTarget();
                        sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
                        client = new MockClient(target);
                        sourceMapWillAttach = sinon.spy();
                        sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapWillAttach, sourceMapWillAttach);
                        sourceMapFailedToAttach = sinon.spy();
                        sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapFailedToAttach, sourceMapFailedToAttach);
                        sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').rejects('Error');
                        sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
                        assert.strictEqual(sourceMapWillAttach.callCount, 1, 'SourceMapWillAttach events');
                        assert.isTrue(sourceMapWillAttach.calledWith(sinon.match.hasNested('data.client', client)));
                        return [
                            4,
                            sourceMapManager.sourceMapForClientPromise(client)
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(sourceMapFailedToAttach.callCount, 1, 'SourceMapFailedToAttach events');
                        assert.isTrue(sourceMapFailedToAttach.calledWith(sinon.match.hasNested('data.client', client)));
                        assert.isTrue(sourceMapFailedToAttach.calledAfter(sourceMapWillAttach));
                        return [
                            2
                        ];
                }
            });
        }));
        it('correctly handles the case where sourcemap reattaches immediately', /*#__PURE__*/ _async_to_generator(function() {
            var target, sourceMapManager, client, sourceMapAttached, sourceMapFailedToAttach;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        target = createTarget();
                        sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
                        client = new MockClient(target);
                        sourceMapAttached = sinon.spy();
                        sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapAttached, sourceMapAttached);
                        sourceMapFailedToAttach = sinon.spy();
                        sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapFailedToAttach, sourceMapFailedToAttach);
                        sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').resolves({
                            content: content
                        });
                        sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
                        sourceMapManager.detachSourceMap(client);
                        assert.isTrue(sourceMapFailedToAttach.calledWith(sinon.match.hasNested('data.client', client)));
                        sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
                        return [
                            4,
                            sourceMapManager.sourceMapForClientPromise(client)
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(sourceMapAttached.callCount, 1, 'SourceMapAttached events');
                        assert.isTrue(sourceMapAttached.calledWith(sinon.match.hasNested('data.client', client)));
                        assert.isTrue(sourceMapAttached.calledAfter(sourceMapFailedToAttach));
                        return [
                            2
                        ];
                }
            });
        }));
        it('correctly handles separate clients with same sourceURL and sourceMappingURL', /*#__PURE__*/ _async_to_generator(function() {
            var target, sourceMapManager, client1, client2, _ref, sourceMap1, sourceMap2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        target = createTarget();
                        sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
                        client1 = new MockClient(target);
                        client2 = new MockClient(target);
                        sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').resolves({
                            content: content
                        });
                        sourceMapManager.attachSourceMap(client1, sourceURL, sourceMappingURL);
                        sourceMapManager.attachSourceMap(client2, sourceURL, sourceMappingURL);
                        return [
                            4,
                            Promise.all([
                                sourceMapManager.sourceMapForClientPromise(client1),
                                sourceMapManager.sourceMapForClientPromise(client2)
                            ])
                        ];
                    case 1:
                        _ref = _sliced_to_array.apply(void 0, [
                            _state.sent(),
                            2
                        ]), sourceMap1 = _ref[0], sourceMap2 = _ref[1];
                        assert.notStrictEqual(sourceMap1, sourceMap2);
                        return [
                            2
                        ];
                }
            });
        }));
        it('defers loading sourcemaps while disabled', /*#__PURE__*/ _async_to_generator(function() {
            var target, sourceMapManager, client, loadResource, _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        target = createTarget();
                        sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
                        sourceMapManager.setEnabled(false);
                        client = new MockClient(target);
                        loadResource = sinon.spy(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource');
                        sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
                        assert.strictEqual(loadResource.callCount, 0, 'loadResource calls');
                        assert.isUndefined(sourceMapManager.sourceMapForClient(client));
                        _ = assert.isUndefined;
                        return [
                            4,
                            sourceMapManager.sourceMapForClientPromise(client)
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent()
                        ]);
                        sourceMapManager.setEnabled(true);
                        assert.strictEqual(loadResource.callCount, 1, 'loadResource calls');
                        return [
                            4,
                            sourceMapManager.sourceMapForClientPromise(client)
                        ];
                    case 2:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('does not attempt to load when attach is cancelled', /*#__PURE__*/ _async_to_generator(function() {
            var target, sourceMapManager, client, sourceMapFailedToAttach, loadResource;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        target = createTarget();
                        sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
                        client = new MockClient(target);
                        sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapWillAttach, function(param) {
                            var client = param.data.client;
                            return sourceMapManager.cancelAttachSourceMap(client);
                        });
                        sourceMapFailedToAttach = sinon.spy();
                        sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapFailedToAttach, sourceMapFailedToAttach);
                        loadResource = sinon.spy(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource');
                        sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
                        assert.strictEqual(loadResource.callCount, 0, 'loadResource calls');
                        return [
                            4,
                            sourceMapManager.sourceMapForClientPromise(client)
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(sourceMapFailedToAttach.callCount, 1, 'SourceMapFailedToAttach events');
                        assert.isTrue(sourceMapFailedToAttach.calledWith(sinon.match.hasNested('data.client', client)));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('detachSourceMap', function() {
        it('silently ignores unknown clients', function() {
            var target = createTarget();
            var sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
            var client = new MockClient(target);
            sourceMapManager.detachSourceMap(client);
        });
        it('triggers the correct lifecycle events', /*#__PURE__*/ _async_to_generator(function() {
            var target, sourceMapManager, client, sourceMapDetached, sourceMap;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        target = createTarget();
                        sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
                        client = new MockClient(target);
                        sourceMapDetached = sinon.spy();
                        sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapDetached, sourceMapDetached);
                        sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').resolves({
                            content: content
                        });
                        sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
                        return [
                            4,
                            sourceMapManager.sourceMapForClientPromise(client)
                        ];
                    case 1:
                        sourceMap = _state.sent();
                        sourceMapManager.detachSourceMap(client);
                        assert.strictEqual(sourceMapDetached.callCount, 1, 'SourceMapDetached events');
                        assert.isTrue(sourceMapDetached.calledWith(sinon.match.hasNested('data.client', client)));
                        assert.isTrue(sourceMapDetached.calledWith(sinon.match.hasNested('data.sourceMap', sourceMap)));
                        return [
                            2
                        ];
                }
            });
        }));
        it('triggers the correct lifecycle events when disabled', /*#__PURE__*/ _async_to_generator(function() {
            var target, sourceMapManager, client, sourceMapFailedToAttach, sourceMapDetached;
            return _ts_generator(this, function(_state) {
                target = createTarget();
                sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
                client = new MockClient(target);
                sourceMapManager.setEnabled(false);
                sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
                sourceMapFailedToAttach = sinon.spy();
                sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapFailedToAttach, sourceMapFailedToAttach);
                sourceMapDetached = sinon.spy();
                sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapDetached, sourceMapDetached);
                sourceMapManager.detachSourceMap(client);
                assert.strictEqual(sourceMapFailedToAttach.callCount, 0, 'SourceMapFailedToAttach events');
                assert.strictEqual(sourceMapDetached.callCount, 0, 'SourceMapDetached events');
                return [
                    2
                ];
            });
        }));
    });
    describe('setEnabled', function() {
        it('triggers the correct lifecycle events when disabling while attaching', function() {
            var target = createTarget();
            var sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
            var client = new MockClient(target);
            sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').returns(new Promise(function() {}));
            sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
            var sourceMapFailedToAttach = sinon.spy();
            sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapFailedToAttach, sourceMapFailedToAttach);
            sourceMapManager.setEnabled(false);
            assert.strictEqual(sourceMapFailedToAttach.callCount, 1, 'SourceMapFailedToAttach events');
            assert.isTrue(sourceMapFailedToAttach.calledWith(sinon.match.hasNested('data.client', client)));
        });
        it('triggers the correct lifecycle events when disabling once attached', /*#__PURE__*/ _async_to_generator(function() {
            var target, sourceMapManager, client, sourceMap, sourceMapDetached;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        target = createTarget();
                        sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
                        client = new MockClient(target);
                        sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').resolves({
                            content: content
                        });
                        sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
                        return [
                            4,
                            sourceMapManager.sourceMapForClientPromise(client)
                        ];
                    case 1:
                        sourceMap = _state.sent();
                        sourceMapDetached = sinon.spy();
                        sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapDetached, sourceMapDetached);
                        sourceMapManager.setEnabled(false);
                        assert.strictEqual(sourceMapDetached.callCount, 1, 'SourceMapDetached events');
                        assert.isTrue(sourceMapDetached.calledWith(sinon.match.hasNested('data.client', client)));
                        assert.isTrue(sourceMapDetached.calledWith(sinon.match.hasNested('data.sourceMap', sourceMap)));
                        return [
                            2
                        ];
                }
            });
        }));
        it('triggers the correct lifecycle events when re-enabling', /*#__PURE__*/ _async_to_generator(function() {
            var target, sourceMapManager, client, sourceMapDetached, sourceMapWillAttach, sourceMapFailedToAttach, sourceMapAttached, sourceMap;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        target = createTarget();
                        sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
                        client = new MockClient(target);
                        sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').resolves({
                            content: content
                        });
                        sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
                        return [
                            4,
                            sourceMapManager.sourceMapForClientPromise(client)
                        ];
                    case 1:
                        _state.sent();
                        sourceMapManager.setEnabled(false);
                        sourceMapDetached = sinon.spy();
                        sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapDetached, sourceMapDetached);
                        sourceMapWillAttach = sinon.spy();
                        sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapWillAttach, sourceMapWillAttach);
                        sourceMapFailedToAttach = sinon.spy();
                        sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapFailedToAttach, sourceMapFailedToAttach);
                        sourceMapAttached = sinon.spy();
                        sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapAttached, sourceMapAttached);
                        sourceMapManager.setEnabled(true);
                        return [
                            4,
                            sourceMapManager.sourceMapForClientPromise(client)
                        ];
                    case 2:
                        sourceMap = _state.sent();
                        assert.strictEqual(sourceMapDetached.callCount, 0, 'SourceMapDetached events');
                        assert.strictEqual(sourceMapFailedToAttach.callCount, 0, 'SourceMapFailedToAttach events');
                        assert.strictEqual(sourceMapWillAttach.callCount, 1, 'SourceMapWillAttach events');
                        assert.isTrue(sourceMapWillAttach.calledWith(sinon.match.hasNested('data.client', client)));
                        assert.isTrue(sourceMapAttached.calledAfter(sourceMapWillAttach));
                        assert.strictEqual(sourceMapAttached.callCount, 1, 'SourceMapAttached events');
                        assert.isTrue(sourceMapAttached.calledWith(sinon.match.hasNested('data.client', client)));
                        assert.isTrue(sourceMapAttached.calledWith(sinon.match.hasNested('data.sourceMap', sourceMap)));
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=SourceMapManager.test.js.map


}),

}]);