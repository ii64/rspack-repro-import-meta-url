"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_NetworkLogView_test_js-ui_components_report_view_report_view_js"], {
"./panels/network/NetworkLogView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_har_har_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/har/har.js */ "./models/har/har.js");
/* harmony import */var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */var _testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/ContextMenuHelpers.js */ "./testing/ContextMenuHelpers.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */var _testing_FileManagerHelpers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../testing/FileManagerHelpers.js */ "./testing/FileManagerHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _network_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./network.js */ "./panels/network/network.js");
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
















var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_13__.RenderCoordinator.RenderCoordinator.instance();
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_11__.describeWithMockConnection)('NetworkLogView', function() {
    var createNetworkRequest = function createNetworkRequest(url, options) {
        var effectiveTarget = options.target || target;
        var networkManager = effectiveTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NetworkManager);
        assert.exists(networkManager);
        var request;
        var onRequestStarted = function(event) {
            request = event.data.request;
        };
        networkManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Events.RequestStarted, onRequestStarted);
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_11__.dispatchEvent)(effectiveTarget, 'Network.requestWillBeSent', {
            requestId: "request".concat(++nextId),
            loaderId: 'loaderId',
            request: {
                url: url
            }
        });
        networkManager.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Events.RequestStarted, onRequestStarted);
        assert.exists(request);
        request.requestMethod = 'GET';
        if (options.requestHeaders) {
            request.setRequestHeaders(options.requestHeaders);
        }
        if (options.finished) {
            request.finished = true;
        }
        return request;
    };
    var createEnvironment = function createEnvironment() {
        var filterBar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.FilterBar.FilterBar('network-panel', true);
        networkLogView = createNetworkLogView(filterBar);
        networkLogView.markAsRoot();
        networkLogView.show(document.body);
        var rootNode = networkLogView.columns().dataGrid().rootNode();
        return {
            rootNode: rootNode,
            filterBar: filterBar,
            networkLogView: networkLogView
        };
    };
    var createNetworkLogView = function createNetworkLogView(filterBar) {
        if (!filterBar) {
            filterBar = {
                addFilter: function() {},
                filterButton: function() {
                    return {
                        addEventListener: function() {}
                    };
                },
                addDivider: function() {}
            };
        }
        return new _network_js__WEBPACK_IMPORTED_MODULE_15__.NetworkLogView.NetworkLogView(filterBar, document.createElement('div'), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-log-large-rows', false));
    };
    var createOverrideRequests = function createOverrideRequests() {
        var urlNotOverridden = 'url-not-overridden';
        var urlHeaderOverridden = 'url-header-overridden';
        var urlContentOverridden = 'url-content-overridden';
        var urlHeaderAndContentOverridden = 'url-header-und-content-overridden';
        createNetworkRequest(urlNotOverridden, {
            target: target
        });
        var r2 = createNetworkRequest(urlHeaderOverridden, {
            target: target
        });
        var r3 = createNetworkRequest(urlContentOverridden, {
            target: target
        });
        var r4 = createNetworkRequest(urlHeaderAndContentOverridden, {
            target: target
        });
        // set up overrides
        r2.originalResponseHeaders = [
            {
                name: 'content-type',
                value: 'x'
            }
        ];
        r2.responseHeaders = [
            {
                name: 'content-type',
                value: 'overriden'
            }
        ];
        r3.hasOverriddenContent = true;
        r4.originalResponseHeaders = [
            {
                name: 'age',
                value: 'x'
            }
        ];
        r4.responseHeaders = [
            {
                name: 'age',
                value: 'overriden'
            }
        ];
        r4.hasOverriddenContent = true;
        return {
            urlNotOverridden: urlNotOverridden,
            urlHeaderOverridden: urlHeaderOverridden,
            urlContentOverridden: urlContentOverridden,
            urlHeaderAndContentOverridden: urlHeaderAndContentOverridden
        };
    };
    var target;
    var networkLogView;
    var networkLog;
    beforeEach(function() {
        var dummyStorage = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({});
        for(var _i = 0, _iter = [
            'network-color-code-resource-types',
            'network.group-by-frame'
        ]; _i < _iter.length; _i++){
            var settingName = _iter[_i];
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.registerSettingExtension({
                settingName: settingName,
                settingType: "boolean" /* Common.Settings.SettingType.BOOLEAN */ ,
                defaultValue: false
            });
        }
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
            forceNew: true,
            syncedStorage: dummyStorage,
            globalStorage: dummyStorage,
            localStorage: dummyStorage
        });
        sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.ShortcutRegistry.ShortcutRegistry, 'instance').returns({
            shortcutTitleForAction: function() {},
            shortcutsForAction: function() {
                return [];
            }
        });
        networkLog = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_5__.NetworkLog.NetworkLog.instance();
        var tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createTarget)({
            type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Tab
        });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createTarget)({
            parentTarget: tabTarget,
            subtype: 'prerender'
        });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createTarget)({
            parentTarget: tabTarget
        });
    });
    var nextId = 0;
    it('generates a valid curl command when some headers don\'t have values', /*#__PURE__*/ _async_to_generator(function() {
        var request, actual, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = createNetworkRequest('http://localhost', {
                        requestHeaders: [
                            {
                                name: 'header-with-value',
                                value: 'some value'
                            },
                            {
                                name: 'no-value-header',
                                value: ''
                            }
                        ]
                    });
                    return [
                        4,
                        _network_js__WEBPACK_IMPORTED_MODULE_15__.NetworkLogView.NetworkLogView.generateCurlCommand(request, 'unix')
                    ];
                case 1:
                    actual = _state.sent();
                    expected = 'curl \'http://localhost\' \\\n  -H \'header-with-value: some value\' \\\n  -H \'no-value-header;\'';
                    assert.strictEqual(actual, expected);
                    return [
                        2
                    ];
            }
        });
    }));
    // Note this isn't an ideal test as the internal headers are generated rather than explicitly added,
    // are only added on HTTP/2 and HTTP/3, have a preceeding colon like `:authority` but it still tests
    // the stripping function.
    it('generates a valid curl command while stripping internal headers', /*#__PURE__*/ _async_to_generator(function() {
        var request, actual, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = createNetworkRequest('http://localhost', {
                        requestHeaders: [
                            {
                                name: 'authority',
                                value: 'www.example.com'
                            }
                        ]
                    });
                    return [
                        4,
                        _network_js__WEBPACK_IMPORTED_MODULE_15__.NetworkLogView.NetworkLogView.generateCurlCommand(request, 'unix')
                    ];
                case 1:
                    actual = _state.sent();
                    expected = 'curl \'http://localhost\'';
                    assert.strictEqual(actual, expected);
                    return [
                        2
                    ];
            }
        });
    }));
    it('generates a valid curl command when header values contain double quotes', /*#__PURE__*/ _async_to_generator(function() {
        var request, _, _1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = createNetworkRequest('http://localhost', {
                        requestHeaders: [
                            {
                                name: 'cookie',
                                value: 'eva="Sg4="'
                            }
                        ]
                    });
                    _ = assert.strictEqual;
                    return [
                        4,
                        _network_js__WEBPACK_IMPORTED_MODULE_15__.NetworkLogView.NetworkLogView.generateCurlCommand(request, 'unix')
                    ];
                case 1:
                    _.apply(assert, [
                        _state.sent(),
                        'curl \'http://localhost\' -H \'cookie: eva=\"Sg4=\"\''
                    ]);
                    _1 = assert.strictEqual;
                    return [
                        4,
                        _network_js__WEBPACK_IMPORTED_MODULE_15__.NetworkLogView.NetworkLogView.generateCurlCommand(request, 'win')
                    ];
                case 2:
                    _1.apply(assert, [
                        _state.sent(),
                        'curl "http://localhost" -H ^"cookie: eva=^\\^"Sg4=^\\^"^"'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('generates a valid curl command when header values contain percentages', /*#__PURE__*/ _async_to_generator(function() {
        var request, _, _1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = createNetworkRequest('http://localhost', {
                        requestHeaders: [
                            {
                                name: 'cookie',
                                value: 'eva=%22Sg4%3D%22'
                            }
                        ]
                    });
                    _ = assert.strictEqual;
                    return [
                        4,
                        _network_js__WEBPACK_IMPORTED_MODULE_15__.NetworkLogView.NetworkLogView.generateCurlCommand(request, 'unix')
                    ];
                case 1:
                    _.apply(assert, [
                        _state.sent(),
                        'curl \'http://localhost\' -H \'cookie: eva=%22Sg4%3D%22\''
                    ]);
                    _1 = assert.strictEqual;
                    return [
                        4,
                        _network_js__WEBPACK_IMPORTED_MODULE_15__.NetworkLogView.NetworkLogView.generateCurlCommand(request, 'win')
                    ];
                case 2:
                    _1.apply(assert, [
                        _state.sent(),
                        'curl "http://localhost" -H ^"cookie: eva=^%^22Sg4^%^3D^%^22^"'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    var tests = function(inScope) {
        return function() {
            beforeEach(function() {
                networkLogView = createNetworkLogView();
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
            });
            it('adds dividers on main frame load events', /*#__PURE__*/ _async_to_generator(function() {
                var addEventDividers, resourceTreeModel;
                return _ts_generator(this, function(_state) {
                    addEventDividers = sinon.spy(networkLogView.columns(), 'addEventDividers');
                    networkLogView.setRecording(true);
                    resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
                    assert.exists(resourceTreeModel);
                    resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load, {
                        resourceTreeModel: resourceTreeModel,
                        loadTime: 5
                    });
                    resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.DOMContentLoaded, 6);
                    if (inScope) {
                        assert.isTrue(addEventDividers.calledTwice);
                        assert.isTrue(addEventDividers.getCall(0).calledWith([
                            5
                        ], 'network-load-divider'));
                        assert.isTrue(addEventDividers.getCall(1).calledWith([
                            6
                        ], 'network-dcl-divider'));
                    } else {
                        assert.isFalse(addEventDividers.called);
                    }
                    return [
                        2
                    ];
                });
            }));
            it('can export all as HAR', /*#__PURE__*/ _async_to_generator(function() {
                var harWriterWrite, URL_HOST, fileManager, FINISHED_REQUEST_1, FINISHED_REQUEST_2, UNFINISHED_REQUEST;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
                            harWriterWrite = sinon.stub(_models_har_har_js__WEBPACK_IMPORTED_MODULE_4__.Writer.Writer, 'write').resolves();
                            URL_HOST = 'example.com';
                            target.setInspectedURL("http://".concat(URL_HOST, "/foo"));
                            fileManager = (0,_testing_FileManagerHelpers_js__WEBPACK_IMPORTED_MODULE_10__.stubFileManager)();
                            FINISHED_REQUEST_1 = createNetworkRequest('http://example.com/', {
                                finished: true
                            });
                            FINISHED_REQUEST_2 = createNetworkRequest('http://example.com/favicon.ico', {
                                finished: true
                            });
                            UNFINISHED_REQUEST = createNetworkRequest('http://example.com/background.bmp', {
                                finished: false
                            });
                            sinon.stub(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_5__.NetworkLog.NetworkLog.instance(), 'requests').returns([
                                FINISHED_REQUEST_1,
                                FINISHED_REQUEST_2,
                                UNFINISHED_REQUEST
                            ]);
                            return [
                                4,
                                networkLogView.exportAll()
                            ];
                        case 1:
                            _state.sent();
                            if (inScope) {
                                assert.isTrue(harWriterWrite.calledOnceWith(sinon.match.any, [
                                    FINISHED_REQUEST_1,
                                    FINISHED_REQUEST_2
                                ], sinon.match.any));
                                assert.isTrue(fileManager.save.calledOnce);
                                assert.isTrue(fileManager.close.calledOnce);
                            } else {
                                assert.isFalse(harWriterWrite.called);
                                assert.isFalse(fileManager.save.called);
                                assert.isFalse(fileManager.close.called);
                            }
                            return [
                                2
                            ];
                    }
                });
            }));
            it('can import and filter from HAR', /*#__PURE__*/ _async_to_generator(function() {
                var URL_1, URL_2, har, blob, file, rootNode;
                function makeHarEntry(url) {
                    return {
                        request: {
                            method: 'GET',
                            url: url,
                            headersSize: -1,
                            bodySize: 0
                        },
                        response: {
                            status: 0,
                            content: {
                                'size': 0,
                                'mimeType': 'x-unknown'
                            },
                            headersSize: -1,
                            bodySize: -1
                        },
                        startedDateTime: null,
                        time: null,
                        timings: {
                            blocked: null,
                            dns: -1,
                            ssl: -1,
                            connect: -1,
                            send: 0,
                            wait: 0,
                            receive: 0
                        }
                    };
                }
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            URL_1 = 'http://example.com/';
                            URL_2 = 'http://example.com/favicon.ico';
                            har = {
                                log: {
                                    version: '1.2',
                                    creator: {
                                        name: 'WebInspector',
                                        version: '537.36'
                                    },
                                    entries: [
                                        makeHarEntry(URL_1),
                                        makeHarEntry(URL_2)
                                    ]
                                }
                            };
                            networkLogView.markAsRoot();
                            networkLogView.show(document.body);
                            blob = new Blob([
                                JSON.stringify(har)
                            ], {
                                type: 'text/plain'
                            });
                            file = new File([
                                blob
                            ], 'log.har');
                            return [
                                4,
                                networkLogView.onLoadFromFile(file)
                            ];
                        case 1:
                            _state.sent();
                            return [
                                4,
                                coordinator.done({
                                    waitForWork: true
                                })
                            ];
                        case 2:
                            _state.sent();
                            rootNode = networkLogView.columns().dataGrid().rootNode();
                            assert.deepEqual(rootNode.children.map(function(n) {
                                var _n_request;
                                return (_n_request = n.request()) === null || _n_request === void 0 ? void 0 : _n_request.url();
                            }), [
                                URL_1,
                                URL_2
                            ]);
                            networkLogView.setTextFilterValue('favicon');
                            assert.deepEqual(rootNode.children.map(function(n) {
                                var _n_request;
                                return (_n_request = n.request()) === null || _n_request === void 0 ? void 0 : _n_request.url();
                            }), [
                                URL_2
                            ]);
                            networkLogView.detach();
                            return [
                                2
                            ];
                    }
                });
            }));
            it('shows summary toolbar with content', function() {
                var _toolbar_element_shadowRoot;
                target.setInspectedURL('http://example.com/');
                var request = createNetworkRequest('http://example.com/', {
                    finished: true
                });
                request.endTime = 0.669414;
                request.setIssueTime(0.435136, 0.435136);
                request.setResourceType(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document);
                networkLogView.setRecording(true);
                var resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
                assert.exists(resourceTreeModel);
                resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load, {
                    resourceTreeModel: resourceTreeModel,
                    loadTime: 0.686191
                });
                resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.DOMContentLoaded, 0.683709);
                networkLogView.markAsRoot();
                networkLogView.show(document.body);
                var toolbar = networkLogView.summaryToolbar();
                var textElements = (_toolbar_element_shadowRoot = toolbar.element.shadowRoot) === null || _toolbar_element_shadowRoot === void 0 ? void 0 : _toolbar_element_shadowRoot.querySelectorAll('.toolbar-text');
                assert.exists(textElements);
                var textContents = _to_consumable_array(textElements).map(function(item) {
                    return item.textContent;
                });
                if (inScope) {
                    assert.deepEqual(textContents, [
                        '1 requests',
                        '0\u00a0B transferred',
                        '0\u00a0B resources',
                        'Finish: 234\u00a0ms',
                        'DOMContentLoaded: 249\u00a0ms',
                        'Load: 251\u00a0ms'
                    ]);
                } else {
                    assert.strictEqual(textElements.length, 0);
                }
                networkLogView.detach();
            });
        };
    };
    describe('in scope', tests(true));
    describe('out of scope', tests(false));
    var handlesSwitchingScope = function(preserveLog) {
        return /*#__PURE__*/ _async_to_generator(function() {
            var anotherTarget, networkManager, request1, request2, request3, rootNode;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network-log.preserve-log').set(preserveLog);
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().setScopeTarget(target);
                        anotherTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createTarget)();
                        networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NetworkManager);
                        assert.exists(networkManager);
                        request1 = createNetworkRequest('url1', {
                            target: target
                        });
                        request2 = createNetworkRequest('url2', {
                            target: target
                        });
                        request3 = createNetworkRequest('url3', {
                            target: anotherTarget
                        });
                        networkLogView = createNetworkLogView();
                        networkLogView.markAsRoot();
                        networkLogView.show(document.body);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        rootNode = networkLogView.columns().dataGrid().rootNode();
                        assert.deepEqual(rootNode.children.map(function(n) {
                            return n.request();
                        }), [
                            request1,
                            request2
                        ]);
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().setScopeTarget(anotherTarget);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        assert.deepEqual(rootNode.children.map(function(n) {
                            return n.request();
                        }), preserveLog ? [
                            request1,
                            request2,
                            request3
                        ] : [
                            request3
                        ]);
                        networkLogView.detach();
                        return [
                            2
                        ];
                }
            });
        });
    };
    it('replaces requests when switching scope with preserve log off', handlesSwitchingScope(false));
    it('appends requests when switching scope with preserve log on', handlesSwitchingScope(true));
    it('appends requests on prerender activation with preserve log on', /*#__PURE__*/ _async_to_generator(function() {
        var anotherTarget, networkManager, request1, request2, request3, rootNode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network-log.preserve-log').set(true);
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().setScopeTarget(target);
                    anotherTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createTarget)();
                    networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NetworkManager);
                    assert.exists(networkManager);
                    request1 = createNetworkRequest('url1', {
                        target: target
                    });
                    request2 = createNetworkRequest('url2', {
                        target: target
                    });
                    request3 = createNetworkRequest('url3', {
                        target: anotherTarget
                    });
                    networkLogView = createNetworkLogView();
                    networkLogView.markAsRoot();
                    networkLogView.show(document.body);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    rootNode = networkLogView.columns().dataGrid().rootNode();
                    assert.deepEqual(rootNode.children.map(function(n) {
                        return n.request();
                    }), [
                        request1,
                        request2
                    ]);
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_12__.activate)(target);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.deepEqual(rootNode.children.map(function(n) {
                        return n.request();
                    }), [
                        request1,
                        request2,
                        request3
                    ]);
                    networkLogView.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('hide Chrome extension requests from checkbox', /*#__PURE__*/ _async_to_generator(function() {
        var rootNode, filterBar, ref, hideExtCheckbox;
        return _ts_generator(this, function(_state) {
            createNetworkRequest('chrome-extension://url1', {
                target: target
            });
            createNetworkRequest('url2', {
                target: target
            });
            ref = createEnvironment(), rootNode = ref.rootNode, filterBar = ref.filterBar, networkLogView = ref.networkLogView, ref;
            hideExtCheckbox = getCheckbox(filterBar, 'Hide \'chrome-extension://\' URLs');
            assert.deepEqual(rootNode.children.map(function(n) {
                var _n_request;
                return (_n_request = n.request()) === null || _n_request === void 0 ? void 0 : _n_request.url();
            }), [
                'chrome-extension://url1',
                'url2'
            ]);
            clickCheckbox(hideExtCheckbox);
            assert.deepEqual(rootNode.children.map(function(n) {
                var _n_request;
                return (_n_request = n.request()) === null || _n_request === void 0 ? void 0 : _n_request.url();
            }), [
                'url2'
            ]);
            networkLogView.detach();
            return [
                2
            ];
        });
    }));
    it('can hide Chrome extension requests from dropdown', /*#__PURE__*/ _async_to_generator(function() {
        var rootNode, filterBar, ref, dropdown, softMenu, hideExtensionURL;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest("network-panel-filter-bar-redesign" /* Root.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN */ );
                    createNetworkRequest('chrome-extension://url1', {
                        target: target
                    });
                    createNetworkRequest('url2', {
                        target: target
                    });
                    ref = createEnvironment(), rootNode = ref.rootNode, filterBar = ref.filterBar, networkLogView = ref.networkLogView, ref;
                    assert.deepEqual(rootNode.children.map(function(n) {
                        var _n_request;
                        return (_n_request = n.request()) === null || _n_request === void 0 ? void 0 : _n_request.url();
                    }), [
                        'chrome-extension://url1',
                        'url2'
                    ]);
                    return [
                        4,
                        openMoreTypesDropdown(filterBar, networkLogView)
                    ];
                case 1:
                    dropdown = _state.sent();
                    if (!dropdown) {
                        return [
                            2
                        ];
                    }
                    softMenu = getSoftMenu();
                    hideExtensionURL = getDropdownItem(softMenu, 'Hide extension URLs');
                    assert.isFalse(hideExtensionURL.hasAttribute('checked'));
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.dispatchMouseUpEvent)(hideExtensionURL);
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.raf)()
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(hideExtensionURL.hasAttribute('checked'));
                    assert.deepEqual(rootNode.children.map(function(n) {
                        var _n_request;
                        return (_n_request = n.request()) === null || _n_request === void 0 ? void 0 : _n_request.url();
                    }), [
                        'url2'
                    ]);
                    dropdown.discard();
                    networkLogView.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('displays correct count for more filters', /*#__PURE__*/ _async_to_generator(function() {
        var _getCountAdorner, _getCountAdorner1, filterBar, ref, dropdown, softMenu;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest("network-panel-filter-bar-redesign" /* Root.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN */ );
                    ref = createEnvironment(), filterBar = ref.filterBar, networkLogView = ref.networkLogView, ref;
                    return [
                        4,
                        openMoreTypesDropdown(filterBar, networkLogView)
                    ];
                case 1:
                    dropdown = _state.sent();
                    if (!dropdown) {
                        return [
                            2
                        ];
                    }
                    assert.strictEqual(getMoreFiltersActiveCount(filterBar), '0');
                    assert.isTrue((_getCountAdorner = getCountAdorner(filterBar)) === null || _getCountAdorner === void 0 ? void 0 : _getCountAdorner.classList.contains('hidden'));
                    softMenu = getSoftMenu();
                    return [
                        4,
                        selectMoreFiltersOption(softMenu, 'Hide extension URLs')
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(getMoreFiltersActiveCount(filterBar), '1');
                    assert.isFalse((_getCountAdorner1 = getCountAdorner(filterBar)) === null || _getCountAdorner1 === void 0 ? void 0 : _getCountAdorner1.classList.contains('hidden'));
                    dropdown.discard();
                    networkLogView.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can automatically check the `All` option in the `Request Type` when the only type checked becomes unchecked', /*#__PURE__*/ _async_to_generator(function() {
        var dropdown, button, optionImg, optionImgCheckmark, optionAll, optionAllCheckmark;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest("network-panel-filter-bar-redesign" /* Root.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN */ );
                    dropdown = setupRequestTypesDropdown();
                    button = dropdown.element().querySelector('.toolbar-button');
                    assert.instanceOf(button, HTMLElement);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.dispatchClickEvent)(button, {
                        bubbles: true,
                        composed: true
                    });
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.raf)()
                    ];
                case 1:
                    _state.sent();
                    optionImg = getRequestTypeDropdownOption('Image');
                    optionImgCheckmark = (optionImg === null || optionImg === void 0 ? void 0 : optionImg.querySelector('.checkmark')) || null;
                    optionAll = getRequestTypeDropdownOption('All');
                    optionAllCheckmark = (optionAll === null || optionAll === void 0 ? void 0 : optionAll.querySelector('.checkmark')) || null;
                    assert.instanceOf(optionImg, HTMLElement);
                    assert.instanceOf(optionImgCheckmark, HTMLElement);
                    assert.instanceOf(optionAll, HTMLElement);
                    assert.instanceOf(optionAllCheckmark, HTMLElement);
                    assert.isTrue(optionAll.ariaLabel === 'All, checked');
                    assert.isTrue(optionImg.ariaLabel === 'Image, unchecked');
                    assert.isTrue(window.getComputedStyle(optionAllCheckmark).getPropertyValue('opacity') === '1');
                    assert.isTrue(window.getComputedStyle(optionImgCheckmark).getPropertyValue('opacity') === '0');
                    return [
                        4,
                        selectRequestTypesOption('Image')
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(optionAll.ariaLabel === 'All, unchecked');
                    assert.isTrue(optionImg.ariaLabel === 'Image, checked');
                    assert.isTrue(window.getComputedStyle(optionAllCheckmark).getPropertyValue('opacity') === '0');
                    assert.isTrue(window.getComputedStyle(optionImgCheckmark).getPropertyValue('opacity') === '1');
                    return [
                        4,
                        selectRequestTypesOption('Image')
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(optionAll.ariaLabel === 'All, checked');
                    assert.isTrue(optionImg.ariaLabel === 'Image, unchecked');
                    assert.isTrue(window.getComputedStyle(optionAllCheckmark).getPropertyValue('opacity') === '1');
                    assert.isTrue(window.getComputedStyle(optionImgCheckmark).getPropertyValue('opacity') === '0');
                    dropdown.discard();
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.raf)()
                    ];
                case 4:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows correct selected request types count', /*#__PURE__*/ _async_to_generator(function() {
        var _countAdorner_querySelector, umaCountSpy, umaTypeSpy, dropdown, button, countAdorner;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest("network-panel-filter-bar-redesign" /* Root.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN */ );
                    umaCountSpy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'resourceTypeFilterNumberOfSelectedChanged');
                    umaTypeSpy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'resourceTypeFilterItemSelected');
                    dropdown = setupRequestTypesDropdown();
                    button = dropdown.element().querySelector('.toolbar-button');
                    assert.instanceOf(button, HTMLElement);
                    countAdorner = button.querySelector('.active-filters-count');
                    assert.isTrue(countAdorner === null || countAdorner === void 0 ? void 0 : countAdorner.classList.contains('hidden'));
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.dispatchClickEvent)(button, {
                        bubbles: true,
                        composed: true
                    });
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.raf)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        selectRequestTypesOption('Image')
                    ];
                case 2:
                    _state.sent();
                    countAdorner = button.querySelector('.active-filters-count');
                    assert.isFalse(countAdorner === null || countAdorner === void 0 ? void 0 : countAdorner.classList.contains('hidden'));
                    assert.strictEqual(countAdorner === null || countAdorner === void 0 ? void 0 : (_countAdorner_querySelector = countAdorner.querySelector('[slot="content"]')) === null || _countAdorner_querySelector === void 0 ? void 0 : _countAdorner_querySelector.textContent, '1');
                    dropdown.discard();
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.raf)()
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(umaCountSpy.calledOnceWith(1));
                    assert.isTrue(umaTypeSpy.calledOnceWith('Image'));
                    return [
                        2
                    ];
            }
        });
    }));
    it('adjusts request types label dynamically', /*#__PURE__*/ _async_to_generator(function() {
        var _button_querySelector, _button_querySelector1, _button_querySelector2, dropdown, button, toolbarText;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest("network-panel-filter-bar-redesign" /* Root.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN */ );
                    dropdown = setupRequestTypesDropdown();
                    button = dropdown.element().querySelector('.toolbar-button');
                    assert.instanceOf(button, HTMLElement);
                    toolbarText = (_button_querySelector = button.querySelector('.toolbar-text')) === null || _button_querySelector === void 0 ? void 0 : _button_querySelector.textContent;
                    assert.strictEqual(toolbarText, 'Request types');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.dispatchClickEvent)(button, {
                        bubbles: true,
                        composed: true
                    });
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.raf)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        selectRequestTypesOption('Image')
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        selectRequestTypesOption('JavaScript')
                    ];
                case 3:
                    _state.sent();
                    toolbarText = (_button_querySelector1 = button.querySelector('.toolbar-text')) === null || _button_querySelector1 === void 0 ? void 0 : _button_querySelector1.textContent;
                    assert.strictEqual(toolbarText, 'JS, Img');
                    return [
                        4,
                        selectRequestTypesOption('CSS')
                    ];
                case 4:
                    _state.sent();
                    toolbarText = (_button_querySelector2 = button.querySelector('.toolbar-text')) === null || _button_querySelector2 === void 0 ? void 0 : _button_querySelector2.textContent;
                    assert.strictEqual(toolbarText, 'CSS, JS...');
                    dropdown.discard();
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.raf)()
                    ];
                case 5:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('lists selected types in requests types tooltip', /*#__PURE__*/ _async_to_generator(function() {
        var umaCountSpy, umaTypeSpy, dropdown, button, tooltipText;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest("network-panel-filter-bar-redesign" /* Root.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN */ );
                    umaCountSpy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'resourceTypeFilterNumberOfSelectedChanged');
                    umaTypeSpy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'resourceTypeFilterItemSelected');
                    dropdown = setupRequestTypesDropdown();
                    button = dropdown.element().querySelector('.toolbar-button');
                    assert.instanceOf(button, HTMLElement);
                    tooltipText = button.title;
                    assert.strictEqual(tooltipText, 'Filter requests by type');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.dispatchClickEvent)(button, {
                        bubbles: true,
                        composed: true
                    });
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.raf)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        selectRequestTypesOption('Image')
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        selectRequestTypesOption('JavaScript')
                    ];
                case 3:
                    _state.sent();
                    tooltipText = button.title;
                    assert.strictEqual(tooltipText, 'Show only JavaScript, Image');
                    dropdown.discard();
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.raf)()
                    ];
                case 4:
                    _state.sent();
                    assert.isTrue(umaCountSpy.calledOnceWith(2));
                    assert.isTrue(umaTypeSpy.calledTwice);
                    assert.isTrue(umaTypeSpy.calledWith('Image'));
                    assert.isTrue(umaTypeSpy.calledWith('JavaScript'));
                    return [
                        2
                    ];
            }
        });
    }));
    it('updates tooltip to default when request type deselected', /*#__PURE__*/ _async_to_generator(function() {
        var dropdown, button, tooltipText;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest("network-panel-filter-bar-redesign" /* Root.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN */ );
                    dropdown = setupRequestTypesDropdown();
                    button = dropdown.element().querySelector('.toolbar-button');
                    assert.instanceOf(button, HTMLElement);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.dispatchClickEvent)(button, {
                        bubbles: true,
                        composed: true
                    });
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.raf)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        selectRequestTypesOption('Image')
                    ];
                case 2:
                    _state.sent();
                    tooltipText = button.title;
                    assert.strictEqual(tooltipText, 'Show only Image');
                    return [
                        4,
                        selectRequestTypesOption('Image')
                    ];
                case 3:
                    _state.sent();
                    tooltipText = button.title;
                    assert.strictEqual(tooltipText, 'Filter requests by type');
                    dropdown.discard();
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.raf)()
                    ];
                case 4:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can filter requests with blocked response cookies from checkbox', /*#__PURE__*/ _async_to_generator(function() {
        var request1, rootNode, filterBar, ref, blockedCookiesCheckbox;
        return _ts_generator(this, function(_state) {
            request1 = createNetworkRequest('url1', {
                target: target
            });
            request1.blockedResponseCookies = function() {
                return [
                    {
                        blockedReasons: [
                            "SameSiteNoneInsecure" /* Protocol.Network.SetCookieBlockedReason.SameSiteNoneInsecure */ 
                        ],
                        cookie: null,
                        cookieLine: 'foo=bar; SameSite=None'
                    }
                ];
            };
            createNetworkRequest('url2', {
                target: target
            });
            ref = createEnvironment(), rootNode = ref.rootNode, filterBar = ref.filterBar, networkLogView = ref.networkLogView, ref;
            blockedCookiesCheckbox = getCheckbox(filterBar, 'Show only requests with blocked response cookies');
            clickCheckbox(blockedCookiesCheckbox);
            assert.deepEqual(rootNode.children.map(function(n) {
                var _n_request;
                return (_n_request = n.request()) === null || _n_request === void 0 ? void 0 : _n_request.url();
            }), [
                'url1'
            ]);
            networkLogView.detach();
            return [
                2
            ];
        });
    }));
    it('can filter requests with blocked response cookies from dropdown', /*#__PURE__*/ _async_to_generator(function() {
        var umaCountSpy, umaItemSpy, request1, rootNode, filterBar, ref, dropdown, softMenu, blockedResponseCookies;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest("network-panel-filter-bar-redesign" /* Root.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN */ );
                    umaCountSpy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'networkPanelMoreFiltersNumberOfSelectedChanged');
                    umaItemSpy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'networkPanelMoreFiltersItemSelected');
                    request1 = createNetworkRequest('url1', {
                        target: target
                    });
                    request1.blockedResponseCookies = function() {
                        return [
                            {
                                blockedReasons: [
                                    "SameSiteNoneInsecure" /* Protocol.Network.SetCookieBlockedReason.SameSiteNoneInsecure */ 
                                ],
                                cookie: null,
                                cookieLine: 'foo=bar; SameSite=None'
                            }
                        ];
                    };
                    createNetworkRequest('url2', {
                        target: target
                    });
                    ref = createEnvironment(), rootNode = ref.rootNode, filterBar = ref.filterBar, networkLogView = ref.networkLogView, ref;
                    assert.deepEqual(rootNode.children.map(function(n) {
                        var _n_request;
                        return (_n_request = n.request()) === null || _n_request === void 0 ? void 0 : _n_request.url();
                    }), [
                        'url1',
                        'url2'
                    ]);
                    return [
                        4,
                        openMoreTypesDropdown(filterBar, networkLogView)
                    ];
                case 1:
                    dropdown = _state.sent();
                    if (!dropdown) {
                        return [
                            2
                        ];
                    }
                    softMenu = getSoftMenu();
                    blockedResponseCookies = getDropdownItem(softMenu, 'Blocked response cookies');
                    assert.isFalse(blockedResponseCookies.hasAttribute('checked'));
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.dispatchMouseUpEvent)(blockedResponseCookies);
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.raf)()
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(blockedResponseCookies.hasAttribute('checked'));
                    assert.deepEqual(rootNode.children.map(function(n) {
                        var _n_request;
                        return (_n_request = n.request()) === null || _n_request === void 0 ? void 0 : _n_request.url();
                    }), [
                        'url1'
                    ]);
                    dropdown.discard();
                    assert.isTrue(umaCountSpy.calledOnceWith(1));
                    assert.isTrue(umaItemSpy.calledOnceWith('Blocked response cookies'));
                    networkLogView.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('lists selected options in more filters tooltip', /*#__PURE__*/ _async_to_generator(function() {
        var umaCountSpy, umaItemSpy, filterBar, ref, dropdown, button, softMenu;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest("network-panel-filter-bar-redesign" /* Root.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN */ );
                    umaCountSpy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'networkPanelMoreFiltersNumberOfSelectedChanged');
                    umaItemSpy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'networkPanelMoreFiltersItemSelected');
                    ref = createEnvironment(), filterBar = ref.filterBar, networkLogView = ref.networkLogView, ref;
                    return [
                        4,
                        openMoreTypesDropdown(filterBar, networkLogView)
                    ];
                case 1:
                    dropdown = _state.sent();
                    assert.exists(dropdown);
                    button = dropdown.element().querySelector('.toolbar-button');
                    assert.instanceOf(button, HTMLElement);
                    assert.strictEqual(button.title, 'Show only/hide requests');
                    softMenu = getSoftMenu();
                    return [
                        4,
                        selectMoreFiltersOption(softMenu, 'Blocked response cookies')
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        selectMoreFiltersOption(softMenu, 'Hide extension URLs')
                    ];
                case 3:
                    _state.sent();
                    assert.strictEqual(button.title, 'Hide extension URLs, Blocked response cookies');
                    dropdown.discard();
                    assert.isTrue(umaCountSpy.calledOnceWith(2));
                    assert.isTrue(umaItemSpy.calledTwice);
                    assert.isTrue(umaItemSpy.calledWith('Hide extension URLs'));
                    assert.isTrue(umaItemSpy.calledWith('Blocked response cookies'));
                    networkLogView.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('updates tooltip to default when more filters option deselected', /*#__PURE__*/ _async_to_generator(function() {
        var filterBar, ref, dropdown, button, softMenu;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest("network-panel-filter-bar-redesign" /* Root.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN */ );
                    ref = createEnvironment(), filterBar = ref.filterBar, networkLogView = ref.networkLogView, ref;
                    return [
                        4,
                        openMoreTypesDropdown(filterBar, networkLogView)
                    ];
                case 1:
                    dropdown = _state.sent();
                    assert.exists(dropdown);
                    button = dropdown.element().querySelector('.toolbar-button');
                    assert.instanceOf(button, HTMLElement);
                    assert.strictEqual(button.title, 'Show only/hide requests');
                    softMenu = getSoftMenu();
                    return [
                        4,
                        selectMoreFiltersOption(softMenu, 'Blocked response cookies')
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(button.title, 'Blocked response cookies');
                    return [
                        4,
                        selectMoreFiltersOption(softMenu, 'Blocked response cookies')
                    ];
                case 3:
                    _state.sent();
                    assert.strictEqual(button.title, 'Show only/hide requests');
                    dropdown.discard();
                    networkLogView.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can remove requests', /*#__PURE__*/ _async_to_generator(function() {
        var request, rootNode;
        return _ts_generator(this, function(_state) {
            networkLogView = createNetworkLogView();
            request = createNetworkRequest('url1', {
                target: target
            });
            networkLogView.markAsRoot();
            networkLogView.show(document.body);
            rootNode = networkLogView.columns().dataGrid().rootNode();
            assert.strictEqual(rootNode.children.length, 1);
            networkLog.dispatchEventToListeners(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_5__.NetworkLog.Events.RequestRemoved, {
                request: request
            });
            assert.strictEqual(rootNode.children.length, 0);
            networkLogView.detach();
            return [
                2
            ];
        });
    }));
    it('correctly shows and hides waterfall column', /*#__PURE__*/ _async_to_generator(function() {
        var columnSettings, columns, networkColumnWidget;
        return _ts_generator(this, function(_state) {
            columnSettings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-log-columns', {});
            columnSettings.set({
                'waterfall': {
                    visible: false,
                    title: 'waterfall'
                }
            });
            networkLogView = createNetworkLogView();
            columns = networkLogView.columns();
            networkColumnWidget = columns.dataGrid().asWidget().parentWidget();
            assert.instanceOf(networkColumnWidget, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.SplitWidget.SplitWidget);
            assert.strictEqual(networkColumnWidget.showMode(), "OnlyMain" /* UI.SplitWidget.ShowMode.OnlyMain */ );
            columnSettings.set({
                'waterfall': {
                    visible: true,
                    title: 'waterfall'
                }
            });
            networkLogView = createNetworkLogView();
            columns = networkLogView.columns();
            columns.switchViewMode(true);
            networkColumnWidget = columns.dataGrid().asWidget().parentWidget();
            assert.instanceOf(networkColumnWidget, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.SplitWidget.SplitWidget);
            assert.strictEqual(networkColumnWidget.showMode(), "Both" /* UI.SplitWidget.ShowMode.Both */ );
            return [
                2
            ];
        });
    }));
    it('can apply filter - has-overrides:yes', /*#__PURE__*/ _async_to_generator(function() {
        var _createOverrideRequests, urlHeaderOverridden, urlContentOverridden, urlHeaderAndContentOverridden, filterBar, rootNode;
        return _ts_generator(this, function(_state) {
            _createOverrideRequests = createOverrideRequests(), urlHeaderOverridden = _createOverrideRequests.urlHeaderOverridden, urlContentOverridden = _createOverrideRequests.urlContentOverridden, urlHeaderAndContentOverridden = _createOverrideRequests.urlHeaderAndContentOverridden;
            filterBar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.FilterBar.FilterBar('network-panel', true);
            networkLogView = createNetworkLogView(filterBar);
            networkLogView.setTextFilterValue('has-overrides:yes');
            networkLogView.markAsRoot();
            networkLogView.show(document.body);
            rootNode = networkLogView.columns().dataGrid().rootNode();
            assert.deepEqual(rootNode.children.map(function(n) {
                var _n_request;
                return (_n_request = n.request()) === null || _n_request === void 0 ? void 0 : _n_request.url();
            }), [
                urlHeaderOverridden,
                urlContentOverridden,
                urlHeaderAndContentOverridden
            ]);
            networkLogView.detach();
            return [
                2
            ];
        });
    }));
    it('can apply filter - has-overrides:no', /*#__PURE__*/ _async_to_generator(function() {
        var urlNotOverridden, filterBar, rootNode;
        return _ts_generator(this, function(_state) {
            urlNotOverridden = createOverrideRequests().urlNotOverridden;
            filterBar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.FilterBar.FilterBar('network-panel', true);
            networkLogView = createNetworkLogView(filterBar);
            networkLogView.setTextFilterValue('has-overrides:no');
            networkLogView.markAsRoot();
            networkLogView.show(document.body);
            rootNode = networkLogView.columns().dataGrid().rootNode();
            assert.deepEqual(rootNode.children.map(function(n) {
                var _n_request;
                return (_n_request = n.request()) === null || _n_request === void 0 ? void 0 : _n_request.url();
            }), [
                urlNotOverridden
            ]);
            networkLogView.detach();
            return [
                2
            ];
        });
    }));
    it('can apply filter - has-overrides:headers', /*#__PURE__*/ _async_to_generator(function() {
        var _createOverrideRequests, urlHeaderOverridden, urlHeaderAndContentOverridden, filterBar, rootNode;
        return _ts_generator(this, function(_state) {
            _createOverrideRequests = createOverrideRequests(), urlHeaderOverridden = _createOverrideRequests.urlHeaderOverridden, urlHeaderAndContentOverridden = _createOverrideRequests.urlHeaderAndContentOverridden;
            filterBar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.FilterBar.FilterBar('network-panel', true);
            networkLogView = createNetworkLogView(filterBar);
            networkLogView.setTextFilterValue('has-overrides:headers');
            networkLogView.markAsRoot();
            networkLogView.show(document.body);
            rootNode = networkLogView.columns().dataGrid().rootNode();
            assert.deepEqual(rootNode.children.map(function(n) {
                var _n_request;
                return (_n_request = n.request()) === null || _n_request === void 0 ? void 0 : _n_request.url();
            }), [
                urlHeaderOverridden,
                urlHeaderAndContentOverridden
            ]);
            networkLogView.detach();
            return [
                2
            ];
        });
    }));
    it('can apply filter - has-overrides:content', /*#__PURE__*/ _async_to_generator(function() {
        var _createOverrideRequests, urlContentOverridden, urlHeaderAndContentOverridden, filterBar, rootNode;
        return _ts_generator(this, function(_state) {
            _createOverrideRequests = createOverrideRequests(), urlContentOverridden = _createOverrideRequests.urlContentOverridden, urlHeaderAndContentOverridden = _createOverrideRequests.urlHeaderAndContentOverridden;
            filterBar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.FilterBar.FilterBar('network-panel', true);
            networkLogView = createNetworkLogView(filterBar);
            networkLogView.setTextFilterValue('has-overrides:content');
            networkLogView.markAsRoot();
            networkLogView.show(document.body);
            rootNode = networkLogView.columns().dataGrid().rootNode();
            assert.deepEqual(rootNode.children.map(function(n) {
                var _n_request;
                return (_n_request = n.request()) === null || _n_request === void 0 ? void 0 : _n_request.url();
            }), [
                urlContentOverridden,
                urlHeaderAndContentOverridden
            ]);
            networkLogView.detach();
            return [
                2
            ];
        });
    }));
    it('can apply filter - has-overrides:tent', /*#__PURE__*/ _async_to_generator(function() {
        var _createOverrideRequests, urlHeaderAndContentOverridden, urlContentOverridden, filterBar, rootNode;
        return _ts_generator(this, function(_state) {
            _createOverrideRequests = createOverrideRequests(), urlHeaderAndContentOverridden = _createOverrideRequests.urlHeaderAndContentOverridden, urlContentOverridden = _createOverrideRequests.urlContentOverridden;
            filterBar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.FilterBar.FilterBar('network-panel', true);
            networkLogView = createNetworkLogView(filterBar);
            networkLogView.setTextFilterValue('has-overrides:tent'); // partial text
            networkLogView.markAsRoot();
            networkLogView.show(document.body);
            rootNode = networkLogView.columns().dataGrid().rootNode();
            assert.deepEqual(rootNode.children.map(function(n) {
                var _n_request;
                return (_n_request = n.request()) === null || _n_request === void 0 ? void 0 : _n_request.url();
            }), [
                urlContentOverridden,
                urlHeaderAndContentOverridden
            ]);
            networkLogView.detach();
            return [
                2
            ];
        });
    }));
    it('"Copy all" commands respects filters', /*#__PURE__*/ _async_to_generator(function() {
        var filterBar, copyText, dataGrid, contextMenu, clipboardSection, copyItem, footerSection, copyAllURLs, copyAllCurlComnmands, copyAllFetchCall, copyAllPowerShell;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    createOverrideRequests();
                    filterBar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.FilterBar.FilterBar('network-panel', true);
                    networkLogView = createNetworkLogView(filterBar);
                    networkLogView.markAsRoot();
                    networkLogView.show(document.body);
                    copyText = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'copyText').resolves();
                    // Set network filter
                    networkLogView.setTextFilterValue('has-overrides:headers');
                    // Get DataGrid
                    dataGrid = networkLogView.columns().dataGrid().element;
                    assert.isDefined(dataGrid);
                    // Select first element
                    networkLogView.columns().dataGrid().rootNode().children[0].select();
                    // Get context menu, clipboard section
                    contextMenu = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_6__.getContextMenuForElement)(dataGrid);
                    clipboardSection = contextMenu.clipboardSection();
                    // Assert that there is only one entry (for 'Copy') in the clipboard section
                    assert.deepEqual([
                        'Copy'
                    ], (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_6__.getMenuItemLabels)(clipboardSection));
                    copyItem = clipboardSection.items[0];
                    // Use the 'Copy' sub-menu, get menu items from the footer section
                    footerSection = copyItem.footerSection();
                    copyAllURLs = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_6__.findMenuItemWithLabel)(footerSection, 'Copy all listed URLs');
                    assert.isDefined(copyAllURLs);
                    contextMenu.invokeHandler(copyAllURLs.id());
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_9__.expectCalled)(copyText)
                    ];
                case 1:
                    _state.sent();
                    assert.strictEqual(copyText.callCount, 1);
                    assert.deepEqual(copyText.lastCall.args, [
                        "url-header-overridden\nurl-header-und-content-overridden"
                    ]);
                    copyText.resetHistory();
                    copyAllCurlComnmands = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_6__.findMenuItemWithLabel)(footerSection, _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.isWin() ? 'Copy all listed as cURL (bash)' : 'Copy all listed as cURL');
                    assert.isDefined(copyAllCurlComnmands);
                    contextMenu.invokeHandler(copyAllCurlComnmands.id());
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_9__.expectCalled)(copyText)
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(copyText.callCount, 1);
                    assert.deepEqual(copyText.lastCall.args, [
                        "curl 'url-header-overridden' ;\ncurl 'url-header-und-content-overridden'"
                    ]);
                    copyText.resetHistory();
                    copyAllFetchCall = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_6__.findMenuItemWithLabel)(footerSection, 'Copy all listed as fetch');
                    assert.isDefined(copyAllFetchCall);
                    contextMenu.invokeHandler(copyAllFetchCall.id());
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_9__.expectCalled)(copyText)
                    ];
                case 3:
                    _state.sent();
                    assert.strictEqual(copyText.callCount, 1);
                    assert.deepEqual(copyText.lastCall.args, [
                        'fetch("url-header-overridden", {\n  "body": null,\n  "method": "GET",\n  "mode": "cors",\n  "credentials": "omit"\n}); ;\nfetch("url-header-und-content-overridden", {\n  "body": null,\n  "method": "GET",\n  "mode": "cors",\n  "credentials": "omit"\n});'
                    ]);
                    copyText.resetHistory();
                    copyAllPowerShell = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_6__.findMenuItemWithLabel)(footerSection, 'Copy all listed as PowerShell');
                    assert.isDefined(copyAllPowerShell);
                    contextMenu.invokeHandler(copyAllPowerShell.id());
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_9__.expectCalled)(copyText)
                    ];
                case 4:
                    _state.sent();
                    assert.strictEqual(copyText.callCount, 1);
                    assert.deepEqual(copyText.lastCall.args, [
                        'Invoke-WebRequest -UseBasicParsing -Uri "url-header-overridden";\r\nInvoke-WebRequest -UseBasicParsing -Uri "url-header-und-content-overridden"'
                    ]);
                    // Clear network filter
                    networkLogView.setTextFilterValue('');
                    copyText.resetHistory();
                    contextMenu.invokeHandler(copyAllURLs.id());
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_9__.expectCalled)(copyText)
                    ];
                case 5:
                    _state.sent();
                    assert.strictEqual(copyText.callCount, 1);
                    assert.deepEqual(copyText.lastCall.args, [
                        "url-not-overridden\nurl-header-overridden\nurl-content-overridden\nurl-header-und-content-overridden"
                    ]);
                    copyText.resetHistory();
                    contextMenu.invokeHandler(copyAllCurlComnmands.id());
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_9__.expectCalled)(copyText)
                    ];
                case 6:
                    _state.sent();
                    assert.strictEqual(copyText.callCount, 1);
                    assert.deepEqual(copyText.lastCall.args, [
                        "curl 'url-not-overridden' ;\ncurl 'url-header-overridden' ;\ncurl 'url-content-overridden' ;\ncurl 'url-header-und-content-overridden'"
                    ]);
                    copyText.resetHistory();
                    contextMenu.invokeHandler(copyAllFetchCall.id());
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_9__.expectCalled)(copyText)
                    ];
                case 7:
                    _state.sent();
                    assert.strictEqual(copyText.callCount, 1);
                    assert.deepEqual(copyText.lastCall.args, [
                        'fetch("url-not-overridden", {\n  "body": null,\n  "method": "GET",\n  "mode": "cors",\n  "credentials": "omit"\n}); ;\nfetch("url-header-overridden", {\n  "body": null,\n  "method": "GET",\n  "mode": "cors",\n  "credentials": "omit"\n}); ;\nfetch("url-content-overridden", {\n  "body": null,\n  "method": "GET",\n  "mode": "cors",\n  "credentials": "omit"\n}); ;\nfetch("url-header-und-content-overridden", {\n  "body": null,\n  "method": "GET",\n  "mode": "cors",\n  "credentials": "omit"\n});'
                    ]);
                    copyText.resetHistory();
                    contextMenu.invokeHandler(copyAllPowerShell.id());
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_9__.expectCalled)(copyText)
                    ];
                case 8:
                    _state.sent();
                    assert.strictEqual(copyText.callCount, 1);
                    assert.deepEqual(copyText.lastCall.args, [
                        'Invoke-WebRequest -UseBasicParsing -Uri "url-not-overridden";\r\nInvoke-WebRequest -UseBasicParsing -Uri "url-header-overridden";\r\nInvoke-WebRequest -UseBasicParsing -Uri "url-content-overridden";\r\nInvoke-WebRequest -UseBasicParsing -Uri "url-header-und-content-overridden"'
                    ]);
                    copyText.resetHistory();
                    networkLogView.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('skips unknown columns without title in persistence setting', /*#__PURE__*/ _async_to_generator(function() {
        var columnSettings, columns;
        return _ts_generator(this, function(_state) {
            columnSettings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-log-columns', {});
            columnSettings.set({
                '--this-does-not-exist-for-sure': {
                    visible: false
                }
            });
            networkLogView = createNetworkLogView();
            columns = networkLogView.columns().dataGrid().columns;
            assert.notExists(columns['--this-does-not-exist-for-sure']);
            return [
                2
            ];
        });
    }));
    it('treats unknown columns with title in persistence setting as custom header', /*#__PURE__*/ _async_to_generator(function() {
        var columnSettings, dataGrid, columns, contextMenuShow, header, event, responseHeadersSubMenu, customHeaderItem;
        return _ts_generator(this, function(_state) {
            columnSettings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-log-columns', {});
            columnSettings.set({
                'custom-header-for-test': {
                    visible: false,
                    title: 'Custom-Header'
                }
            });
            networkLogView = createNetworkLogView();
            dataGrid = networkLogView.columns().dataGrid();
            columns = dataGrid.columns;
            assert.exists(columns['custom-header-for-test']);
            contextMenuShow = sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.ContextMenu.ContextMenu.prototype, 'show').resolves();
            header = dataGrid.element.querySelector('thead');
            event = new MouseEvent('contextmenu');
            sinon.stub(event, 'target').value(header);
            dataGrid.element.dispatchEvent(event);
            assert.isTrue(contextMenuShow.calledOnce);
            responseHeadersSubMenu = contextMenuShow.thisValues[0].footerSection().items.find(function(item) {
                return item.buildDescriptor().label === 'Response Headers';
            });
            assert.exists(responseHeadersSubMenu);
            assert.instanceOf(responseHeadersSubMenu, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.ContextMenu.SubMenu);
            customHeaderItem = responseHeadersSubMenu.defaultSection().items.find(function(item) {
                return item.buildDescriptor().label === 'Custom-Header';
            });
            assert.exists(customHeaderItem);
            return [
                2
            ];
        });
    }));
});
function clickCheckbox(checkbox) {
    checkbox.checked = true;
    var event = new Event('change');
    checkbox.dispatchEvent(event);
}
function getCheckbox(filterBar, title) {
    var _filterBar_element_querySelector_shadowRoot, _filterBar_element_querySelector;
    var checkbox = ((_filterBar_element_querySelector = filterBar.element.querySelector('[title="'.concat(title, '"] span'))) === null || _filterBar_element_querySelector === void 0 ? void 0 : (_filterBar_element_querySelector_shadowRoot = _filterBar_element_querySelector.shadowRoot) === null || _filterBar_element_querySelector_shadowRoot === void 0 ? void 0 : _filterBar_element_querySelector_shadowRoot.querySelector('input')) || null;
    assert.instanceOf(checkbox, HTMLInputElement);
    return checkbox;
}
function getRequestTypeDropdownOption(requestType) {
    var _document_querySelector_shadowRoot, _document_querySelector;
    var dropDownVbox = ((_document_querySelector = document.querySelector('.vbox')) === null || _document_querySelector === void 0 ? void 0 : (_document_querySelector_shadowRoot = _document_querySelector.shadowRoot) === null || _document_querySelector_shadowRoot === void 0 ? void 0 : _document_querySelector_shadowRoot.querySelectorAll('.soft-context-menu-item')) || [];
    var dropdownOptions = Array.from(dropDownVbox);
    return dropdownOptions.find(function(el) {
        var _el_textContent;
        return (_el_textContent = el.textContent) === null || _el_textContent === void 0 ? void 0 : _el_textContent.includes(requestType);
    }) || null;
}
function selectRequestTypesOption(option) {
    return _selectRequestTypesOption.apply(this, arguments);
}
function _selectRequestTypesOption() {
    _selectRequestTypesOption = _async_to_generator(function(option) {
        var item;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    item = getRequestTypeDropdownOption(option);
                    assert.instanceOf(item, HTMLElement);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.dispatchMouseUpEvent)(item, {
                        bubbles: true,
                        composed: true
                    });
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.raf)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _selectRequestTypesOption.apply(this, arguments);
}
function openMoreTypesDropdown(filterBar, networkLogView) {
    return _openMoreTypesDropdown.apply(this, arguments);
}
function _openMoreTypesDropdown() {
    _openMoreTypesDropdown = _async_to_generator(function(filterBar, networkLogView) {
        var _filterBar_element_querySelector, button, dropdown;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    button = (_filterBar_element_querySelector = filterBar.element.querySelector('[aria-label="Show only/hide requests dropdown"]')) === null || _filterBar_element_querySelector === void 0 ? void 0 : _filterBar_element_querySelector.querySelector('.toolbar-button');
                    button === null || button === void 0 ? void 0 : button.dispatchEvent(new Event('click'));
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.raf)()
                    ];
                case 1:
                    _state.sent();
                    dropdown = networkLogView.getMoreFiltersDropdown();
                    return [
                        2,
                        dropdown
                    ];
            }
        });
    });
    return _openMoreTypesDropdown.apply(this, arguments);
}
function setupRequestTypesDropdown() {
    var filterItems = Object.entries(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceCategories).map(function(param) {
        var _param = _sliced_to_array(param, 2), key = _param[0], category = _param[1];
        return {
            name: category.title(),
            label: function() {
                return category.shortTitle();
            },
            title: category.title(),
            jslogContext: key
        };
    });
    var setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-resource-type-filters', {
        all: true
    });
    var dropdown = new _network_js__WEBPACK_IMPORTED_MODULE_15__.NetworkLogView.DropDownTypesUI(filterItems, setting);
    return dropdown;
}
function getCountAdorner(filterBar) {
    var _filterBar_element_querySelector;
    var button = (_filterBar_element_querySelector = filterBar.element.querySelector('[aria-label="Show only/hide requests dropdown"]')) === null || _filterBar_element_querySelector === void 0 ? void 0 : _filterBar_element_querySelector.querySelector('.toolbar-button');
    var _button_querySelector;
    return (_button_querySelector = button === null || button === void 0 ? void 0 : button.querySelector('.active-filters-count')) !== null && _button_querySelector !== void 0 ? _button_querySelector : null;
}
function getMoreFiltersActiveCount(filterBar) {
    var _countAdorner_querySelector;
    var countAdorner = getCountAdorner(filterBar);
    var _countAdorner_querySelector_textContent;
    var count = (_countAdorner_querySelector_textContent = countAdorner === null || countAdorner === void 0 ? void 0 : (_countAdorner_querySelector = countAdorner.querySelector('[slot="content"]')) === null || _countAdorner_querySelector === void 0 ? void 0 : _countAdorner_querySelector.textContent) !== null && _countAdorner_querySelector_textContent !== void 0 ? _countAdorner_querySelector_textContent : '';
    return count;
}
function getSoftMenu() {
    var container = document.querySelector('div[data-devtools-glass-pane]');
    var softMenu = container.shadowRoot.querySelector('.soft-context-menu');
    assert.instanceOf(softMenu, HTMLElement);
    return softMenu;
}
function getDropdownItem(softMenu, label) {
    var item = softMenu === null || softMenu === void 0 ? void 0 : softMenu.querySelector('[aria-label^="'.concat(label, '"]'));
    assert.instanceOf(item, HTMLElement);
    return item;
}
function selectMoreFiltersOption(softMenu, option) {
    return _selectMoreFiltersOption.apply(this, arguments);
}
function _selectMoreFiltersOption() {
    _selectMoreFiltersOption = _async_to_generator(function(softMenu, option) {
        var item;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    item = getDropdownItem(softMenu, option);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.dispatchMouseUpEvent)(item);
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_7__.raf)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    } //# sourceMappingURL=NetworkLogView.test.js.map
    );
    return _selectMoreFiltersOption.apply(this, arguments);
}


}),
"./panels/network/network.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BinaryResourceView: function() { return /* reexport module object */ _BinaryResourceView_js__WEBPACK_IMPORTED_MODULE_0__; },
  BlockedURLsPane: function() { return /* reexport module object */ _BlockedURLsPane_js__WEBPACK_IMPORTED_MODULE_1__; },
  EventSourceMessagesView: function() { return /* reexport module object */ _EventSourceMessagesView_js__WEBPACK_IMPORTED_MODULE_2__; },
  NetworkConfigView: function() { return /* reexport module object */ _NetworkConfigView_js__WEBPACK_IMPORTED_MODULE_3__; },
  NetworkDataGridNode: function() { return /* reexport module object */ _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__; },
  NetworkFrameGrouper: function() { return /* reexport module object */ _NetworkFrameGrouper_js__WEBPACK_IMPORTED_MODULE_9__; },
  NetworkItemView: function() { return /* reexport module object */ _NetworkItemView_js__WEBPACK_IMPORTED_MODULE_5__; },
  NetworkLogView: function() { return /* reexport module object */ _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_7__; },
  NetworkLogViewColumns: function() { return /* reexport module object */ _NetworkLogViewColumns_js__WEBPACK_IMPORTED_MODULE_8__; },
  NetworkManageCustomHeadersView: function() { return /* reexport module object */ _NetworkManageCustomHeadersView_js__WEBPACK_IMPORTED_MODULE_10__; },
  NetworkOverview: function() { return /* reexport module object */ _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_21__; },
  NetworkPanel: function() { return /* reexport module object */ _NetworkPanel_js__WEBPACK_IMPORTED_MODULE_22__; },
  NetworkSearchScope: function() { return /* reexport module object */ _NetworkSearchScope_js__WEBPACK_IMPORTED_MODULE_11__; },
  NetworkTimeCalculator: function() { return /* reexport module object */ _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__; },
  NetworkWaterfallColumn: function() { return /* reexport module object */ _NetworkWaterfallColumn_js__WEBPACK_IMPORTED_MODULE_12__; },
  RequestCookiesView: function() { return /* reexport module object */ _RequestCookiesView_js__WEBPACK_IMPORTED_MODULE_13__; },
  RequestHTMLView: function() { return /* reexport module object */ _RequestHTMLView_js__WEBPACK_IMPORTED_MODULE_14__; },
  RequestInitiatorView: function() { return /* reexport module object */ _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_15__; },
  RequestPayloadView: function() { return /* reexport module object */ _RequestPayloadView_js__WEBPACK_IMPORTED_MODULE_23__; },
  RequestPreviewView: function() { return /* reexport module object */ _RequestPreviewView_js__WEBPACK_IMPORTED_MODULE_17__; },
  RequestResponseView: function() { return /* reexport module object */ _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_16__; },
  RequestTimingView: function() { return /* reexport module object */ _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_18__; },
  ResourceWebSocketFrameView: function() { return /* reexport module object */ _ResourceWebSocketFrameView_js__WEBPACK_IMPORTED_MODULE_19__; },
  SignedExchangeInfoView: function() { return /* reexport module object */ _SignedExchangeInfoView_js__WEBPACK_IMPORTED_MODULE_20__; }
});
/* harmony import */var _BinaryResourceView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BinaryResourceView.js */ "./panels/network/BinaryResourceView.js");
/* harmony import */var _BlockedURLsPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockedURLsPane.js */ "./panels/network/BlockedURLsPane.js");
/* harmony import */var _EventSourceMessagesView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventSourceMessagesView.js */ "./panels/network/EventSourceMessagesView.js");
/* harmony import */var _NetworkConfigView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NetworkConfigView.js */ "./panels/network/NetworkConfigView.js");
/* harmony import */var _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NetworkDataGridNode.js */ "./panels/network/NetworkDataGridNode.js");
/* harmony import */var _NetworkItemView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NetworkItemView.js */ "./panels/network/NetworkItemView.js");
/* harmony import */var _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NetworkTimeCalculator.js */ "./panels/network/NetworkTimeCalculator.js");
/* harmony import */var _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NetworkLogView.js */ "./panels/network/NetworkLogView.js");
/* harmony import */var _NetworkLogViewColumns_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NetworkLogViewColumns.js */ "./panels/network/NetworkLogViewColumns.js");
/* harmony import */var _NetworkFrameGrouper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NetworkFrameGrouper.js */ "./panels/network/NetworkFrameGrouper.js");
/* harmony import */var _NetworkManageCustomHeadersView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NetworkManageCustomHeadersView.js */ "./panels/network/NetworkManageCustomHeadersView.js");
/* harmony import */var _NetworkSearchScope_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NetworkSearchScope.js */ "./panels/network/NetworkSearchScope.js");
/* harmony import */var _NetworkWaterfallColumn_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NetworkWaterfallColumn.js */ "./panels/network/NetworkWaterfallColumn.js");
/* harmony import */var _RequestCookiesView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RequestCookiesView.js */ "./panels/network/RequestCookiesView.js");
/* harmony import */var _RequestHTMLView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RequestHTMLView.js */ "./panels/network/RequestHTMLView.js");
/* harmony import */var _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RequestInitiatorView.js */ "./panels/network/RequestInitiatorView.js");
/* harmony import */var _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./RequestResponseView.js */ "./panels/network/RequestResponseView.js");
/* harmony import */var _RequestPreviewView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./RequestPreviewView.js */ "./panels/network/RequestPreviewView.js");
/* harmony import */var _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./RequestTimingView.js */ "./panels/network/RequestTimingView.js");
/* harmony import */var _ResourceWebSocketFrameView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ResourceWebSocketFrameView.js */ "./panels/network/ResourceWebSocketFrameView.js");
/* harmony import */var _SignedExchangeInfoView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SignedExchangeInfoView.js */ "./panels/network/SignedExchangeInfoView.js");
/* harmony import */var _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./NetworkOverview.js */ "./panels/network/NetworkOverview.js");
/* harmony import */var _NetworkPanel_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./NetworkPanel.js */ "./panels/network/NetworkPanel.js");
/* harmony import */var _RequestPayloadView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./RequestPayloadView.js */ "./panels/network/RequestPayloadView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.















































 //# sourceMappingURL=network.js.map


}),
"./testing/ContextMenuHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  findMenuItemWithLabel: function() { return findMenuItemWithLabel; },
  getContextMenuForElement: function() { return getContextMenuForElement; },
  getMenuForShiftClick: function() { return getMenuForShiftClick; },
  getMenuForToolbarButton: function() { return getMenuForToolbarButton; },
  getMenuItemLabels: function() { return getMenuItemLabels; }
});
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getMenu(action) {
    var sandbox = sinon.createSandbox();
    var contextMenuShow = sandbox.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ContextMenu.ContextMenu.prototype, 'show').resolves();
    action();
    sandbox.restore();
    return contextMenuShow.thisValues[0];
}
function getMenuForToolbarButton(button) {
    return getMenu(function() {
        button.clicked(new MouseEvent('click', {
            bubbles: true,
            cancelable: true
        }));
    });
}
function findMenuItemWithLabel(section, label) {
    return section.items.find(function(item) {
        return item.buildDescriptor().label === label;
    });
}
function getMenuItemLabels(section) {
    return section.items.map(function(item) {
        return item.buildDescriptor().label;
    });
}
function getContextMenuForElement(element, target) {
    return getMenu(function() {
        var event = new MouseEvent('contextmenu', {
            bubbles: true
        });
        if (target) {
            sinon.stub(event, 'target').value(target);
        }
        element.dispatchEvent(event);
    });
}
function getMenuForShiftClick(element) {
    return getMenu(function() {
        element.dispatchEvent(new MouseEvent('click', {
            shiftKey: true
        }));
    });
} //# sourceMappingURL=ContextMenuHelpers.js.map


}),
"./testing/ExpectStubCall.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  expectCall: function() { return expectCall; },
  expectCalled: function() { return expectCalled; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function expectCall(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new Promise(function(resolve) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _options_callCount;
            if (stub.callCount < ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1)) {
                return undefined;
            }
            resolve(args);
            return options.fakeFn ? options.fakeFn.apply(this, args) : undefined;
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options_callCount;
    var remainingCalls = ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, _object_spread_props(_object_spread({}, options), {
        callCount: remainingCalls
    }));
} //# sourceMappingURL=ExpectStubCall.js.map


}),
"./testing/FileManagerHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  stubFileManager: function() { return stubFileManager; }
});
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./models/workspace/workspace.js");
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

function stubFileManager() {
    var fileManager = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__.FileManager.FileManager.instance();
    sinon.stub(fileManager, 'save').callsFake(function() {
        var _ref = _async_to_generator(function(file, _2, _3) {
            return _ts_generator(this, function(_state) {
                return [
                    2,
                    {
                        fileSystemPath: file
                    }
                ];
            });
        });
        return function(file, _2, _3) {
            return _ref.apply(this, arguments);
        };
    }());
    sinon.stub(fileManager, 'append').callsFake(function(file) {
        fileManager.dispatchEventToListeners("AppendedToURL" /* Workspace.FileManager.Events.AppendedToURL */ , file);
    });
    sinon.stub(fileManager, 'close');
    return fileManager;
} //# sourceMappingURL=FileManagerHelpers.js.map


}),
"./ui/components/report_view/report_view.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ReportView: function() { return /* reexport module object */ _ReportView_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _ReportView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportView.js */ "./ui/components/report_view/ReportView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=report_view.js.map


}),

}]);