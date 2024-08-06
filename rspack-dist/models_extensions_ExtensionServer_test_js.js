"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_extensions_ExtensionServer_test_js"], {
"./models/extensions/ExtensionServer.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_ExtensionHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ExtensionHelpers.js */ "./testing/ExtensionHelpers.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../extensions/extensions.js */ "./models/extensions/extensions.js");
/* harmony import */var _logs_logs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../logs/logs.js */ "./models/logs/logs.js");
/* harmony import */var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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











(0,_testing_ExtensionHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithDevtoolsExtension)('Extensions', {}, function(context) {
    it('are initialized after the target is initialized and navigated to a non-privileged URL', /*#__PURE__*/ _async_to_generator(function() {
        var addExtensionStub;
        return _ts_generator(this, function(_state) {
            // This check is a proxy for verifying that the extension has been initialized. Outside of the test the extension
            // API is available as soon as the extension page is loaded, which we don't do in the test.
            assert.isUndefined(context.chrome.devtools);
            addExtensionStub = sinon.stub(_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.instance(), 'addExtension');
            (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)().setInspectedURL('http://example.com');
            assert.isTrue(addExtensionStub.calledOnceWithExactly(context.extensionDescriptor));
            return [
                2
            ];
        });
    }));
    it('are not initialized before the target is initialized and navigated to a non-privileged URL', /*#__PURE__*/ _async_to_generator(function() {
        var addExtensionStub;
        return _ts_generator(this, function(_state) {
            // This check is a proxy for verifying that the extension has been initialized. Outside of the test the extension
            // API is available as soon as the extension page is loaded, which we don't do in the test.
            assert.isUndefined(context.chrome.devtools);
            addExtensionStub = sinon.stub(_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.instance(), 'addExtension');
            (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)().setInspectedURL('chrome://version');
            assert.isTrue(addExtensionStub.notCalled);
            return [
                2
            ];
        });
    }));
    it('defers loading extensions until after navigation from a privileged to a non-privileged host', /*#__PURE__*/ _async_to_generator(function() {
        var addExtensionSpy, target;
        return _ts_generator(this, function(_state) {
            addExtensionSpy = sinon.spy(_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.instance(), 'addExtension');
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Frame
            });
            target.setInspectedURL('chrome://abcdef');
            assert.isTrue(addExtensionSpy.notCalled, 'addExtension not called');
            target.setInspectedURL(allowedUrl);
            assert.isTrue(addExtensionSpy.calledOnce, 'addExtension called once');
            assert.isTrue(addExtensionSpy.returned(true), 'addExtension returned true');
            return [
                2
            ];
        });
    }));
    it('only returns page resources for allowed targets', /*#__PURE__*/ _async_to_generator(function() {
        var urls, targets, resources;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    urls = [
                        'http://example.com',
                        'chrome://version'
                    ];
                    targets = urls.map(function() {
                        var _ref = _async_to_generator(function(url) {
                            var _resourceTreeModel_mainFrame, target, resourceTreeModel;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                                            url: url
                                        });
                                        resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
                                        assert.isNotNull(resourceTreeModel);
                                        return [
                                            4,
                                            resourceTreeModel.once(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.CachedResourcesLoaded)
                                        ];
                                    case 1:
                                        _state.sent();
                                        target.setInspectedURL(url);
                                        (_resourceTreeModel_mainFrame = resourceTreeModel.mainFrame) === null || _resourceTreeModel_mainFrame === void 0 ? void 0 : _resourceTreeModel_mainFrame.addResource(new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Resource.Resource(resourceTreeModel, null, url, url, null, null, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document, 'application/text', null, null));
                                        return [
                                            2,
                                            target
                                        ];
                                }
                            });
                        });
                        return function(url) {
                            return _ref.apply(this, arguments);
                        };
                    }());
                    return [
                        4,
                        Promise.all(targets)
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        new Promise(function(r) {
                            return context.chrome.devtools.inspectedWindow.getResources(r);
                        })
                    ];
                case 2:
                    resources = _state.sent();
                    assert.deepStrictEqual(resources.map(function(r) {
                        return r.url;
                    }), [
                        'https://example.com/',
                        'http://example.com'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
});
(0,_testing_ExtensionHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithDevtoolsExtension)('Extensions', {}, function(context) {
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.expectConsoleLogs)({
        warn: [
            'evaluate: the main frame is not yet available'
        ],
        error: [
            'Extension server error: Object not found: <top>'
        ]
    });
    beforeEach(function() {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)().setInspectedURL('http://example.com');
    });
    it('can register a recorder extension for export', /*#__PURE__*/ _async_to_generator(function() {
        var _context_chrome_devtools, _context_chrome_devtools1, RecorderPlugin, extensionPlugin, manager, plugin, result, stepResult;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    RecorderPlugin = /*#__PURE__*/ function() {
                        "use strict";
                        function RecorderPlugin() {
                            _class_call_check(this, RecorderPlugin);
                        }
                        _create_class(RecorderPlugin, [
                            {
                                key: "stringify",
                                value: function stringify(recording) {
                                    return _async_to_generator(function() {
                                        return _ts_generator(this, function(_state) {
                                            return [
                                                2,
                                                JSON.stringify(recording)
                                            ];
                                        });
                                    })();
                                }
                            },
                            {
                                key: "stringifyStep",
                                value: function stringifyStep(step) {
                                    return _async_to_generator(function() {
                                        return _ts_generator(this, function(_state) {
                                            return [
                                                2,
                                                JSON.stringify(step)
                                            ];
                                        });
                                    })();
                                }
                            }
                        ]);
                        return RecorderPlugin;
                    }();
                    extensionPlugin = new RecorderPlugin();
                    return [
                        4,
                        (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.recorder.registerRecorderExtensionPlugin(extensionPlugin, 'Test', 'text/javascript')
                    ];
                case 1:
                    _state.sent();
                    manager = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.RecorderPluginManager.RecorderPluginManager.instance();
                    assert.strictEqual(manager.plugins().length, 1);
                    plugin = manager.plugins()[0];
                    return [
                        4,
                        plugin.stringify({
                            name: 'test',
                            steps: []
                        })
                    ];
                case 2:
                    result = _state.sent();
                    return [
                        4,
                        plugin.stringifyStep({
                            type: 'scroll'
                        })
                    ];
                case 3:
                    stepResult = _state.sent();
                    assert.strictEqual(manager.plugins().length, 1);
                    assert.strictEqual(manager.plugins()[0].getMediaType(), 'text/javascript');
                    assert.strictEqual(manager.plugins()[0].getName(), 'Test');
                    assert.deepStrictEqual(manager.plugins()[0].getCapabilities(), [
                        'export'
                    ]);
                    assert.deepStrictEqual(result, '{"name":"test","steps":[]}');
                    assert.deepStrictEqual(stepResult, '{"type":"scroll"}');
                    return [
                        4,
                        (_context_chrome_devtools1 = context.chrome.devtools) === null || _context_chrome_devtools1 === void 0 ? void 0 : _context_chrome_devtools1.recorder.unregisterRecorderExtensionPlugin(extensionPlugin)
                    ];
                case 4:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can register a recorder extension for replay', /*#__PURE__*/ _async_to_generator(function() {
        var _context_chrome_devtools, _context_chrome_devtools1, RecorderPlugin, extensionPlugin, manager, plugin;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    RecorderPlugin = /*#__PURE__*/ function() {
                        "use strict";
                        function RecorderPlugin() {
                            _class_call_check(this, RecorderPlugin);
                        }
                        _create_class(RecorderPlugin, [
                            {
                                key: "replay",
                                value: function replay(_recording) {
                                    return;
                                }
                            }
                        ]);
                        return RecorderPlugin;
                    }();
                    extensionPlugin = new RecorderPlugin();
                    return [
                        4,
                        (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.recorder.registerRecorderExtensionPlugin(extensionPlugin, 'Replay')
                    ];
                case 1:
                    _state.sent();
                    manager = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.RecorderPluginManager.RecorderPluginManager.instance();
                    assert.strictEqual(manager.plugins().length, 1);
                    plugin = manager.plugins()[0];
                    return [
                        4,
                        plugin.replay({
                            name: 'test',
                            steps: []
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(manager.plugins().length, 1);
                    assert.deepStrictEqual(manager.plugins()[0].getCapabilities(), [
                        'replay'
                    ]);
                    assert.strictEqual(manager.plugins()[0].getName(), 'Replay');
                    return [
                        4,
                        (_context_chrome_devtools1 = context.chrome.devtools) === null || _context_chrome_devtools1 === void 0 ? void 0 : _context_chrome_devtools1.recorder.unregisterRecorderExtensionPlugin(extensionPlugin)
                    ];
                case 3:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can create and show a panel for Recorder', /*#__PURE__*/ _async_to_generator(function() {
        var _context_chrome_devtools, _context_chrome_devtools1, panel, RecorderPlugin, extensionPlugin, manager, plugin, stub;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        new Promise(function(resolve) {
                            var _context_chrome_devtools;
                            return (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.panels.create('Test', 'test.png', 'test.html', resolve);
                        })
                    ];
                case 1:
                    panel = _state.sent();
                    RecorderPlugin = /*#__PURE__*/ function() {
                        "use strict";
                        function RecorderPlugin() {
                            _class_call_check(this, RecorderPlugin);
                        }
                        _create_class(RecorderPlugin, [
                            {
                                key: "replay",
                                value: function replay(_recording) {
                                    panel === null || panel === void 0 ? void 0 : panel.show();
                                }
                            }
                        ]);
                        return RecorderPlugin;
                    }();
                    extensionPlugin = new RecorderPlugin();
                    return [
                        4,
                        (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.recorder.registerRecorderExtensionPlugin(extensionPlugin, 'Replay')
                    ];
                case 2:
                    _state.sent();
                    manager = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.RecorderPluginManager.RecorderPluginManager.instance();
                    assert.strictEqual(manager.plugins().length, 1);
                    plugin = manager.plugins()[0];
                    stub = sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.InspectorView.InspectorView.instance(), 'showPanel').callsFake(function() {
                        return Promise.resolve();
                    });
                    return [
                        4,
                        plugin.replay({
                            name: 'test',
                            steps: []
                        })
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(stub.called);
                    return [
                        4,
                        (_context_chrome_devtools1 = context.chrome.devtools) === null || _context_chrome_devtools1 === void 0 ? void 0 : _context_chrome_devtools1.recorder.unregisterRecorderExtensionPlugin(extensionPlugin)
                    ];
                case 4:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can create and show a view for Recorder', /*#__PURE__*/ _async_to_generator(function() {
        var _context_chrome_devtools, _context_chrome_devtools1, _context_chrome_devtools2, view, RecorderPlugin, extensionPlugin, manager, plugin, onceShowRequested, viewDescriptor;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.recorder.createView('Test', 'test.html')
                    ];
                case 1:
                    view = _state.sent();
                    RecorderPlugin = /*#__PURE__*/ function() {
                        "use strict";
                        function RecorderPlugin() {
                            _class_call_check(this, RecorderPlugin);
                        }
                        _create_class(RecorderPlugin, [
                            {
                                key: "replay",
                                value: function replay(_recording) {
                                    view === null || view === void 0 ? void 0 : view.show();
                                }
                            }
                        ]);
                        return RecorderPlugin;
                    }();
                    extensionPlugin = new RecorderPlugin();
                    return [
                        4,
                        (_context_chrome_devtools1 = context.chrome.devtools) === null || _context_chrome_devtools1 === void 0 ? void 0 : _context_chrome_devtools1.recorder.registerRecorderExtensionPlugin(extensionPlugin, 'Replay')
                    ];
                case 2:
                    _state.sent();
                    manager = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.RecorderPluginManager.RecorderPluginManager.instance();
                    assert.strictEqual(manager.plugins().length, 1);
                    assert.strictEqual(manager.views().length, 1);
                    plugin = manager.plugins()[0];
                    onceShowRequested = manager.once("showViewRequested" /* Extensions.RecorderPluginManager.Events.ShowViewRequested */ );
                    return [
                        4,
                        plugin.replay({
                            name: 'test',
                            steps: []
                        })
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        onceShowRequested
                    ];
                case 4:
                    viewDescriptor = _state.sent();
                    assert.deepStrictEqual(viewDescriptor.title, 'Test');
                    return [
                        4,
                        (_context_chrome_devtools2 = context.chrome.devtools) === null || _context_chrome_devtools2 === void 0 ? void 0 : _context_chrome_devtools2.recorder.unregisterRecorderExtensionPlugin(extensionPlugin)
                    ];
                case 5:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can not show a view for Recorder without using the replay trigger', /*#__PURE__*/ _async_to_generator(function() {
        var _context_chrome_devtools, _context_chrome_devtools1, _context_chrome_devtools2, view, RecorderPlugin, extensionPlugin, manager, events;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.recorder.createView('Test', 'test.html')
                    ];
                case 1:
                    view = _state.sent();
                    RecorderPlugin = /*#__PURE__*/ function() {
                        "use strict";
                        function RecorderPlugin() {
                            _class_call_check(this, RecorderPlugin);
                        }
                        _create_class(RecorderPlugin, [
                            {
                                key: "replay",
                                value: function replay(_recording) {}
                            },
                            {
                                key: "stringify",
                                value: function stringify(recording) {
                                    return JSON.stringify(recording);
                                }
                            }
                        ]);
                        return RecorderPlugin;
                    }();
                    extensionPlugin = new RecorderPlugin();
                    return [
                        4,
                        (_context_chrome_devtools1 = context.chrome.devtools) === null || _context_chrome_devtools1 === void 0 ? void 0 : _context_chrome_devtools1.recorder.registerRecorderExtensionPlugin(extensionPlugin, 'Replay')
                    ];
                case 2:
                    _state.sent();
                    manager = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.RecorderPluginManager.RecorderPluginManager.instance();
                    assert.strictEqual(manager.plugins().length, 1);
                    assert.strictEqual(manager.views().length, 1);
                    events = [];
                    manager.addEventListener("showViewRequested" /* Extensions.RecorderPluginManager.Events.ShowViewRequested */ , function(event) {
                        events.push(event);
                    });
                    view === null || view === void 0 ? void 0 : view.show();
                    // Sending inspectedWindow.eval should flush the message queue and make sure
                    // that the ShowViewRequested command was not actually dispatched.
                    return [
                        4,
                        new Promise(function(resolve) {
                            var _context_chrome_devtools;
                            return (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.inspectedWindow.eval('1', undefined, resolve);
                        })
                    ];
                case 3:
                    _state.sent();
                    assert.deepStrictEqual(events, []);
                    return [
                        4,
                        (_context_chrome_devtools2 = context.chrome.devtools) === null || _context_chrome_devtools2 === void 0 ? void 0 : _context_chrome_devtools2.recorder.unregisterRecorderExtensionPlugin(extensionPlugin)
                    ];
                case 4:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can dispatch hide and show events', /*#__PURE__*/ _async_to_generator(function() {
        var _context_chrome_devtools, _context_chrome_devtools1, _context_chrome_devtools2, view, onShownCalled, onShown, onHiddenCalled, onHidden, RecorderPlugin, extensionPlugin, manager, plugin, onceShowRequested, viewDescriptor, descriptor;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.recorder.createView('Test', 'test.html')
                    ];
                case 1:
                    view = _state.sent();
                    onShownCalled = sinon.promise();
                    onShown = function() {
                        return onShownCalled.resolve(true);
                    };
                    onHiddenCalled = sinon.promise();
                    onHidden = function() {
                        return onHiddenCalled.resolve(true);
                    };
                    view === null || view === void 0 ? void 0 : view.onHidden.addListener(onHidden);
                    view === null || view === void 0 ? void 0 : view.onShown.addListener(onShown);
                    RecorderPlugin = /*#__PURE__*/ function() {
                        "use strict";
                        function RecorderPlugin() {
                            _class_call_check(this, RecorderPlugin);
                        }
                        _create_class(RecorderPlugin, [
                            {
                                key: "replay",
                                value: function replay(_recording) {
                                    view === null || view === void 0 ? void 0 : view.show();
                                }
                            }
                        ]);
                        return RecorderPlugin;
                    }();
                    extensionPlugin = new RecorderPlugin();
                    return [
                        4,
                        (_context_chrome_devtools1 = context.chrome.devtools) === null || _context_chrome_devtools1 === void 0 ? void 0 : _context_chrome_devtools1.recorder.registerRecorderExtensionPlugin(extensionPlugin, 'Replay')
                    ];
                case 2:
                    _state.sent();
                    manager = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.RecorderPluginManager.RecorderPluginManager.instance();
                    plugin = manager.plugins()[0];
                    onceShowRequested = manager.once("showViewRequested" /* Extensions.RecorderPluginManager.Events.ShowViewRequested */ );
                    return [
                        4,
                        plugin.replay({
                            name: 'test',
                            steps: []
                        })
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        onceShowRequested
                    ];
                case 4:
                    viewDescriptor = _state.sent();
                    assert.deepStrictEqual(viewDescriptor.title, 'Test');
                    descriptor = manager.getViewDescriptor(viewDescriptor.id);
                    descriptor === null || descriptor === void 0 ? void 0 : descriptor.onShown();
                    return [
                        4,
                        onShownCalled
                    ];
                case 5:
                    _state.sent();
                    descriptor === null || descriptor === void 0 ? void 0 : descriptor.onHidden();
                    return [
                        4,
                        onHiddenCalled
                    ];
                case 6:
                    _state.sent();
                    return [
                        4,
                        (_context_chrome_devtools2 = context.chrome.devtools) === null || _context_chrome_devtools2 === void 0 ? void 0 : _context_chrome_devtools2.recorder.unregisterRecorderExtensionPlugin(extensionPlugin)
                    ];
                case 7:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('reload only the main toplevel frame', /*#__PURE__*/ _async_to_generator(function() {
        var target, secondTarget, secondResourceTreeModel, secondReloadStub, resourceTreeModel, reloadStub, reloadPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
                    assert.isNotNull(target);
                    secondTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
                    secondResourceTreeModel = secondTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
                    assert.isNotNull(secondResourceTreeModel);
                    secondReloadStub = sinon.stub(secondResourceTreeModel, 'reloadPage');
                    resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
                    assert.isNotNull(resourceTreeModel);
                    reloadStub = sinon.stub(resourceTreeModel, 'reloadPage');
                    reloadPromise = new Promise(function(resolve) {
                        return reloadStub.callsFake(resolve);
                    });
                    context.chrome.devtools.inspectedWindow.reload();
                    return [
                        4,
                        reloadPromise
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(reloadStub.calledOnce);
                    assert.isTrue(secondReloadStub.notCalled);
                    return [
                        2
                    ];
            }
        });
    }));
    it('correcly installs blocked extensions after navigation', /*#__PURE__*/ _async_to_generator(function() {
        var target, extensionServer, addExtensionSpy;
        return _ts_generator(this, function(_state) {
            target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
            assert.isOk(target);
            target.setInspectedURL('chrome://version');
            extensionServer = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.instance();
            addExtensionSpy = sinon.spy(extensionServer, 'addExtension');
            assert.isUndefined(extensionServer.addExtension({
                startPage: 'about:blank',
                name: 'ext',
                exposeExperimentalAPIs: false
            }));
            target.setInspectedURL('http://example.com');
            assert.deepStrictEqual(addExtensionSpy.returnValues, [
                undefined,
                true
            ]);
            return [
                2
            ];
        });
    }));
    it('correcly reenables extensions after navigation', /*#__PURE__*/ _async_to_generator(function() {
        var target, extensionServer;
        return _ts_generator(this, function(_state) {
            target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
            assert.isOk(target);
            extensionServer = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.instance();
            assert.isTrue(extensionServer.isEnabledForTest);
            target.setInspectedURL('chrome://version');
            assert.isFalse(extensionServer.isEnabledForTest);
            target.setInspectedURL('http://example.com');
            assert.isTrue(extensionServer.isEnabledForTest);
            return [
                2
            ];
        });
    }));
});
var allowedUrl = _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.FRAME_URL;
var blockedUrl = 'http://web.dev';
var hostsPolicy = {
    runtimeAllowedHosts: [
        allowedUrl
    ],
    runtimeBlockedHosts: [
        allowedUrl,
        blockedUrl
    ]
};
function waitForFunction(fn) {
    return new Promise(function(r) {
        var check = function() {
            var result = fn();
            if (result) {
                r(result);
            } else {
                setTimeout(check);
            }
        };
        check();
    });
}
(0,_testing_ExtensionHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithDevtoolsExtension)('Runtime hosts policy', {
    hostsPolicy: hostsPolicy
}, function(context) {
    var _loop = function(_i, _iter) {
        var protocol = _iter[_i];
        it("blocks API calls on blocked protocols: ".concat(protocol), /*#__PURE__*/ _async_to_generator(function() {
            var target, addExtensionStub;
            return _ts_generator(this, function(_state) {
                assert.isUndefined(context.chrome.devtools);
                target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                    type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Frame
                });
                addExtensionStub = sinon.stub(_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.instance(), 'addExtension');
                target.setInspectedURL("".concat(protocol, "://foo"));
                assert.isTrue(addExtensionStub.notCalled);
                assert.isUndefined(context.chrome.devtools);
                return [
                    2
                ];
            });
        }));
    };
    var setUpFrame = function setUpFrame(name, url, parentFrame, executionContextOrigin) {
        return _setUpFrame.apply(this, arguments);
    };
    var createUISourceCode = function createUISourceCode(project, url) {
        return _createUISourceCode.apply(this, arguments);
    };
    var createRequest = function createRequest(networkManager, frameId, requestId, url) {
        var request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create(requestId, url, url, frameId, null, null, undefined);
        var dataProvider = function() {
            return Promise.resolve(new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_9__.ContentData.ContentData('content', false, request.mimeType));
        };
        request.setContentDataProvider(dataProvider);
        networkManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.Events.RequestStarted, {
            request: request,
            originalRequest: null
        });
        request.finished = true;
        networkManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.Events.RequestFinished, request);
    };
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.expectConsoleLogs)({
        error: [
            'Extension server error: Operation failed: Permission denied'
        ]
    });
    for(var _i = 0, _iter = [
        'devtools',
        'chrome',
        'chrome-untrusted',
        'chrome-error',
        'chrome-search'
    ]; _i < _iter.length; _i++)_loop(_i, _iter);
    it('blocks API calls on blocked hosts', /*#__PURE__*/ _async_to_generator(function() {
        var target, addExtensionStub;
        return _ts_generator(this, function(_state) {
            assert.isUndefined(context.chrome.devtools);
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Frame
            });
            addExtensionStub = sinon.spy(_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.instance(), 'addExtension');
            target.setInspectedURL(blockedUrl);
            assert.isTrue(addExtensionStub.alwaysReturned(undefined));
            assert.isUndefined(context.chrome.devtools);
            return [
                2
            ];
        });
    }));
    it('allows API calls on allowlisted hosts', /*#__PURE__*/ _async_to_generator(function() {
        var target, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                        type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Frame
                    });
                    target.setInspectedURL(allowedUrl);
                    return [
                        4,
                        new Promise(function(cb) {
                            var _context_chrome_devtools;
                            return (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.network.getHAR(cb);
                        })
                    ];
                case 1:
                    result = _state.sent();
                    // eslint-disable-next-line rulesdir/compare_arrays_with_assert_deepequal
                    assert.hasAnyKeys(result, [
                        'entries'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('allows API calls on non-blocked hosts', /*#__PURE__*/ _async_to_generator(function() {
        var target, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                        type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Frame
                    });
                    target.setInspectedURL('http://example.com2');
                    return [
                        4,
                        new Promise(function(cb) {
                            var _context_chrome_devtools;
                            return (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.network.getHAR(cb);
                        })
                    ];
                case 1:
                    result = _state.sent();
                    // eslint-disable-next-line rulesdir/compare_arrays_with_assert_deepequal
                    assert.hasAnyKeys(result, [
                        'entries'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('defers loading extensions until after navigation from a blocked to an allowed host', /*#__PURE__*/ _async_to_generator(function() {
        var addExtensionSpy, target;
        return _ts_generator(this, function(_state) {
            addExtensionSpy = sinon.spy(_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.instance(), 'addExtension');
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Frame
            });
            target.setInspectedURL(blockedUrl);
            assert.isTrue(addExtensionSpy.calledOnce, 'addExtension called once');
            assert.deepStrictEqual(addExtensionSpy.returnValues, [
                undefined
            ]);
            target.setInspectedURL(allowedUrl);
            assert.isTrue(addExtensionSpy.calledTwice, 'addExtension called twice');
            assert.deepStrictEqual(addExtensionSpy.returnValues, [
                undefined,
                true
            ]);
            return [
                2
            ];
        });
    }));
    it('does not include blocked hosts in the HAR entries', /*#__PURE__*/ _async_to_generator(function() {
        var target, networkManager, frameId, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance();
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                        type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Frame
                    });
                    target.setInspectedURL('http://example.com2');
                    networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.NetworkManager);
                    assert.exists(networkManager);
                    frameId = 'frame-id';
                    createRequest(networkManager, frameId, 'blocked-url-request-id', blockedUrl);
                    createRequest(networkManager, frameId, 'allowed-url-request-id', allowedUrl);
                    return [
                        4,
                        new Promise(function(cb) {
                            var _context_chrome_devtools;
                            return (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.network.getHAR(cb);
                        })
                    ];
                case 1:
                    result = _state.sent();
                    assert.exists(result.entries.find(function(e) {
                        return e.request.url === allowedUrl;
                    }));
                    assert.notExists(result.entries.find(function(e) {
                        return e.request.url === blockedUrl;
                    }));
                    return [
                        2
                    ];
            }
        });
    }));
    function _setUpFrame() {
        _setUpFrame = _async_to_generator(function(name, url, parentFrame, executionContextOrigin) {
            var _parentFrame_resourceTreeModel, parentTarget, target, frame, _tmp, parentRuntimeModel;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        parentTarget = parentFrame === null || parentFrame === void 0 ? void 0 : (_parentFrame_resourceTreeModel = parentFrame.resourceTreeModel()) === null || _parentFrame_resourceTreeModel === void 0 ? void 0 : _parentFrame_resourceTreeModel.target();
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                            id: "".concat(name, "-target-id"),
                            parentTarget: parentTarget
                        });
                        if (!parentFrame) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.addChildFrame)(target, {
                                url: url
                            })
                        ];
                    case 1:
                        _tmp = _state.sent();
                        return [
                            3,
                            3
                        ];
                    case 2:
                        _tmp = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target, {
                            url: url
                        });
                        _state.label = 3;
                    case 3:
                        frame = _tmp;
                        if (executionContextOrigin) {
                            executionContextOrigin = new URL(executionContextOrigin).origin;
                            parentRuntimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
                            assert.exists(parentRuntimeModel);
                            parentRuntimeModel.executionContextCreated({
                                id: 0,
                                origin: executionContextOrigin,
                                name: executionContextOrigin,
                                uniqueId: executionContextOrigin,
                                auxData: {
                                    frameId: frame.id,
                                    isDefault: true
                                }
                            });
                        }
                        return [
                            2,
                            frame
                        ];
                }
            });
        });
        return _setUpFrame.apply(this, arguments);
    }
    it('blocks evaluation on blocked subframes', /*#__PURE__*/ _async_to_generator(function() {
        var _result_error, parentFrameUrl, childFrameUrl, parentFrame, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.isUndefined(context.chrome.devtools);
                    parentFrameUrl = allowedUrl;
                    childFrameUrl = blockedUrl;
                    return [
                        4,
                        setUpFrame('parent', parentFrameUrl)
                    ];
                case 1:
                    parentFrame = _state.sent();
                    return [
                        4,
                        setUpFrame('child', childFrameUrl, parentFrame)
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        new Promise(function(r) {
                            var _context_chrome_devtools;
                            return (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.inspectedWindow.eval('4', {
                                frameURL: childFrameUrl
                            }, function(result, error) {
                                return r({
                                    result: result,
                                    error: error
                                });
                            });
                        })
                    ];
                case 3:
                    result = _state.sent();
                    assert.deepStrictEqual((_result_error = result.error) === null || _result_error === void 0 ? void 0 : _result_error.details, [
                        'Permission denied'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('doesn\'t block evaluation on blocked sub-executioncontexts with useContentScriptContext', /*#__PURE__*/ _async_to_generator(function() {
        var _childFrame_resourceTreeModel, parentFrameUrl, childFrameUrl, childExeContextOrigin, parentFrame, childFrame, runtimeModel, contentScriptExecutionContext, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.isUndefined(context.chrome.devtools);
                    parentFrameUrl = allowedUrl;
                    childFrameUrl = "".concat(allowedUrl, "/2");
                    childExeContextOrigin = blockedUrl;
                    return [
                        4,
                        setUpFrame('parent', parentFrameUrl, undefined, parentFrameUrl)
                    ];
                case 1:
                    parentFrame = _state.sent();
                    return [
                        4,
                        setUpFrame('child', childFrameUrl, parentFrame, childExeContextOrigin)
                    ];
                case 2:
                    childFrame = _state.sent();
                    // Create a fake content script execution context, i.e., a non-default context with the extension's (== window's)
                    // origin.
                    runtimeModel = (_childFrame_resourceTreeModel = childFrame.resourceTreeModel()) === null || _childFrame_resourceTreeModel === void 0 ? void 0 : _childFrame_resourceTreeModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
                    assert.exists(runtimeModel);
                    runtimeModel.executionContextCreated({
                        id: 1,
                        origin: window.location.origin,
                        name: window.location.origin,
                        uniqueId: window.location.origin,
                        auxData: {
                            frameId: childFrame.id,
                            isDefault: false
                        }
                    });
                    contentScriptExecutionContext = runtimeModel.executionContext(1);
                    assert.exists(contentScriptExecutionContext);
                    sinon.stub(contentScriptExecutionContext, 'evaluate').returns(Promise.resolve({
                        object: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RemoteObject.RemoteObject.fromLocalObject(4)
                    }));
                    return [
                        4,
                        new Promise(function(r) {
                            var _context_chrome_devtools;
                            return (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.inspectedWindow.eval('4', {
                                frameURL: childFrameUrl,
                                useContentScriptContext: true
                            }, function(result, error) {
                                return r({
                                    result: result,
                                    error: error
                                });
                            });
                        })
                    ];
                case 3:
                    result = _state.sent();
                    assert.deepStrictEqual(result.result, 4);
                    return [
                        2
                    ];
            }
        });
    }));
    it('blocks evaluation on blocked sub-executioncontexts with explicit scriptExecutionContextOrigin', /*#__PURE__*/ _async_to_generator(function() {
        var _childFrame_resourceTreeModel, _result_error, parentFrameUrl, childFrameUrl, parentFrame, childFrame, childExeContextOrigin, runtimeModel, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.isUndefined(context.chrome.devtools);
                    parentFrameUrl = allowedUrl;
                    childFrameUrl = "".concat(allowedUrl, "/2");
                    return [
                        4,
                        setUpFrame('parent', parentFrameUrl, undefined, parentFrameUrl)
                    ];
                case 1:
                    parentFrame = _state.sent();
                    return [
                        4,
                        setUpFrame('child', childFrameUrl, parentFrame, parentFrameUrl)
                    ];
                case 2:
                    childFrame = _state.sent();
                    // Create a non-default context with a blocked origin.
                    childExeContextOrigin = blockedUrl;
                    runtimeModel = (_childFrame_resourceTreeModel = childFrame.resourceTreeModel()) === null || _childFrame_resourceTreeModel === void 0 ? void 0 : _childFrame_resourceTreeModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
                    assert.exists(runtimeModel);
                    runtimeModel.executionContextCreated({
                        id: 1,
                        origin: childExeContextOrigin,
                        name: childExeContextOrigin,
                        uniqueId: childExeContextOrigin,
                        auxData: {
                            frameId: childFrame.id,
                            isDefault: false
                        }
                    });
                    return [
                        4,
                        new Promise(function(r) {
                            var _context_chrome_devtools;
                            return (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.inspectedWindow.eval(// The typings don't match the implementation, so we need to cast to any here to make ts happy.
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            '4', {
                                frameURL: childFrameUrl,
                                scriptExecutionContext: childExeContextOrigin
                            }, function(result, error) {
                                return r({
                                    result: result,
                                    error: error
                                });
                            });
                        })
                    ];
                case 3:
                    result = _state.sent();
                    assert.deepStrictEqual((_result_error = result.error) === null || _result_error === void 0 ? void 0 : _result_error.details, [
                        'Permission denied'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('blocks evaluation on blocked sub-executioncontexts', /*#__PURE__*/ _async_to_generator(function() {
        var _result_error, parentFrameUrl, childFrameUrl, childExeContextOrigin, parentFrame, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.isUndefined(context.chrome.devtools);
                    parentFrameUrl = allowedUrl;
                    childFrameUrl = "".concat(allowedUrl, "/2");
                    childExeContextOrigin = blockedUrl;
                    return [
                        4,
                        setUpFrame('parent', parentFrameUrl, undefined, parentFrameUrl)
                    ];
                case 1:
                    parentFrame = _state.sent();
                    return [
                        4,
                        setUpFrame('child', childFrameUrl, parentFrame, childExeContextOrigin)
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        new Promise(function(r) {
                            var _context_chrome_devtools;
                            return (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.inspectedWindow.eval('4', {
                                frameURL: childFrameUrl
                            }, function(result, error) {
                                return r({
                                    result: result,
                                    error: error
                                });
                            });
                        })
                    ];
                case 3:
                    result = _state.sent();
                    assert.deepStrictEqual((_result_error = result.error) === null || _result_error === void 0 ? void 0 : _result_error.details, [
                        'Permission denied'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    function _createUISourceCode() {
        _createUISourceCode = _async_to_generator(function(project, url) {
            var _project_uiSourceCodeForURL, mimeType, dataProvider;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mimeType = 'text/html';
                        dataProvider = function() {
                            return Promise.resolve(new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_9__.ContentData.ContentData('content', /* isBase64 */ false, mimeType));
                        };
                        project.addUISourceCodeWithProvider(new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.UISourceCode.UISourceCode(project, url, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document), new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_9__.StaticContentProvider.StaticContentProvider(url, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document, dataProvider), null, mimeType);
                        return [
                            4,
                            (_project_uiSourceCodeForURL = project.uiSourceCodeForURL(url)) === null || _project_uiSourceCodeForURL === void 0 ? void 0 : _project_uiSourceCodeForURL.requestContentData()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _createUISourceCode.apply(this, arguments);
    }
    it('blocks getting resource contents on blocked urls', /*#__PURE__*/ _async_to_generator(function() {
        var target, project, resources, resourceContents;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                        id: 'target'
                    });
                    target.setInspectedURL(allowedUrl);
                    project = new _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.ContentProviderBasedProject.ContentProviderBasedProject(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.Workspace.WorkspaceImpl.instance(), target.id(), _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.Workspace.projectTypes.Network, '', false);
                    return [
                        4,
                        createUISourceCode(project, blockedUrl)
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        createUISourceCode(project, allowedUrl)
                    ];
                case 2:
                    _state.sent();
                    assert.exists(context.chrome.devtools);
                    return [
                        4,
                        new Promise(function(r) {
                            var _context_chrome_devtools;
                            return (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.inspectedWindow.getResources(r);
                        })
                    ];
                case 3:
                    resources = _state.sent();
                    assert.deepStrictEqual(resources.map(function(r) {
                        return r.url;
                    }), [
                        blockedUrl,
                        allowedUrl
                    ]);
                    return [
                        4,
                        Promise.all(resources.map(function(resource) {
                            return new Promise(function(r) {
                                return resource.getContent(function(content, encoding) {
                                    return r({
                                        url: resource.url,
                                        content: content,
                                        encoding: encoding
                                    });
                                });
                            });
                        }))
                    ];
                case 4:
                    resourceContents = _state.sent();
                    assert.deepStrictEqual(resourceContents, [
                        {
                            url: blockedUrl,
                            content: undefined,
                            encoding: undefined
                        },
                        {
                            url: allowedUrl,
                            content: 'content',
                            encoding: ''
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not include blocked hosts in onRequestFinished event listener', /*#__PURE__*/ _async_to_generator(function() {
        var // onRequestFinished returns a type of Request. However in actual fact, the returned object contains HAR data
        // which result type mismatch due to the Request type not containing the respective fields in HAR.Log.EntryDTO.
        // Therefore, cast through unknown to resolve this.
        // TODO: (crbug.com/1482763) Update Request type to match HAR.Log.EntryDTO
        _context_chrome_devtools, frameId, target, requests, networkManager;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    frameId = 'frame-id';
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                        id: 'target'
                    });
                    target.setInspectedURL(allowedUrl);
                    requests = [];
                    (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.network.onRequestFinished.addListener(function(r) {
                        return requests.push(r);
                    });
                    return [
                        4,
                        waitForFunction(function() {
                            return _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.instance().hasSubscribers("network-request-finished" /* Extensions.ExtensionAPI.PrivateAPI.Events.NetworkRequestFinished */ );
                        })
                    ];
                case 1:
                    _state.sent();
                    networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.NetworkManager);
                    assert.exists(networkManager);
                    createRequest(networkManager, frameId, 'blocked-url-request-id', blockedUrl);
                    createRequest(networkManager, frameId, 'allowed-url-request-id', allowedUrl);
                    return [
                        4,
                        waitForFunction(function() {
                            return requests.length >= 1;
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(requests.length, 1);
                    assert.exists(requests.find(function(e) {
                        return e.request.url === allowedUrl;
                    }));
                    assert.notExists(requests.find(function(e) {
                        return e.request.url === blockedUrl;
                    }));
                    return [
                        2
                    ];
            }
        });
    }));
    it('blocks setting resource contents on blocked urls', /*#__PURE__*/ _async_to_generator(function() {
        var _project_uiSourceCodeForURL, _project_uiSourceCodeForURL1, _project_uiSourceCodeForURL2, _project_uiSourceCodeForURL3, target, project, resources, responses;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                        id: 'target'
                    });
                    target.setInspectedURL(allowedUrl);
                    project = new _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.ContentProviderBasedProject.ContentProviderBasedProject(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.Workspace.WorkspaceImpl.instance(), target.id(), _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.Workspace.projectTypes.Network, '', false);
                    return [
                        4,
                        createUISourceCode(project, blockedUrl)
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        createUISourceCode(project, allowedUrl)
                    ];
                case 2:
                    _state.sent();
                    assert.exists(context.chrome.devtools);
                    return [
                        4,
                        new Promise(function(r) {
                            var _context_chrome_devtools;
                            return (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.inspectedWindow.getResources(r);
                        })
                    ];
                case 3:
                    resources = _state.sent();
                    assert.deepStrictEqual(resources.map(function(r) {
                        return r.url;
                    }), [
                        blockedUrl,
                        allowedUrl
                    ]);
                    assert.deepStrictEqual((_project_uiSourceCodeForURL = project.uiSourceCodeForURL(allowedUrl)) === null || _project_uiSourceCodeForURL === void 0 ? void 0 : _project_uiSourceCodeForURL.content(), 'content');
                    assert.deepStrictEqual((_project_uiSourceCodeForURL1 = project.uiSourceCodeForURL(blockedUrl)) === null || _project_uiSourceCodeForURL1 === void 0 ? void 0 : _project_uiSourceCodeForURL1.content(), 'content');
                    return [
                        4,
                        Promise.all(resources.map(function(resource) {
                            return new Promise(function(r) {
                                return resource.setContent('modified', true, r);
                            });
                        }))
                    ];
                case 4:
                    responses = _state.sent();
                    assert.deepStrictEqual(responses.map(function(response) {
                        return response === null || response === void 0 ? void 0 : response.code;
                    }), [
                        'E_FAILED',
                        'OK'
                    ]);
                    assert.deepStrictEqual(responses.map(function(response) {
                        return response === null || response === void 0 ? void 0 : response.details;
                    }), [
                        [
                            'Permission denied'
                        ],
                        []
                    ]);
                    assert.deepStrictEqual((_project_uiSourceCodeForURL2 = project.uiSourceCodeForURL(allowedUrl)) === null || _project_uiSourceCodeForURL2 === void 0 ? void 0 : _project_uiSourceCodeForURL2.content(), 'modified');
                    assert.deepStrictEqual((_project_uiSourceCodeForURL3 = project.uiSourceCodeForURL(blockedUrl)) === null || _project_uiSourceCodeForURL3 === void 0 ? void 0 : _project_uiSourceCodeForURL3.content(), 'content');
                    return [
                        2
                    ];
            }
        });
    }));
});
describe('ExtensionServer', function() {
    it('can correctly expand resource paths', /*#__PURE__*/ _async_to_generator(function() {
        var extensionOrigin, almostOrigin, expectation;
        return _ts_generator(this, function(_state) {
            // Ideally this would be a chrome-extension://, but that doesn't work with URL in chrome headless.
            extensionOrigin = 'chrome://abcdef';
            almostOrigin = "".concat(extensionOrigin, "/");
            expectation = "".concat(extensionOrigin, "/foo");
            assert.strictEqual(undefined, _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.expandResourcePath(extensionOrigin, 'http://example.com/foo'));
            assert.strictEqual(expectation, _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.expandResourcePath(extensionOrigin, expectation));
            assert.strictEqual(expectation, _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.expandResourcePath(extensionOrigin, '/foo'));
            assert.strictEqual(expectation, _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.expandResourcePath(extensionOrigin, 'foo'));
            assert.strictEqual(undefined, _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.expandResourcePath(almostOrigin, 'http://example.com/foo'));
            assert.strictEqual(expectation, _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.expandResourcePath(almostOrigin, expectation));
            assert.strictEqual(expectation, _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.expandResourcePath(almostOrigin, '/foo'));
            assert.strictEqual(expectation, _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.expandResourcePath(almostOrigin, 'foo'));
            return [
                2
            ];
        });
    }));
    it('cannot inspect chrome webstore URLs', function() {
        var blockedUrls = [
            'http://chrome.google.com/webstore',
            'https://chrome.google.com./webstore',
            'http://chrome.google.com/webstore',
            'https://chrome.google.com./webstore',
            'http://chrome.google.com/webstore/foo',
            'https://chrome.google.com./webstore/foo',
            'http://chrome.google.com/webstore/foo',
            'https://chrome.google.com./webstore/foo',
            'http://chromewebstore.google.com/',
            'https://chromewebstore.google.com./',
            'http://chromewebstore.google.com/',
            'https://chromewebstore.google.com./',
            'http://chromewebstore.google.com/foo',
            'https://chromewebstore.google.com./foo',
            'http://chromewebstore.google.com/foo',
            'https://chromewebstore.google.com./foo'
        ];
        var allowedUrls = [
            'http://chrome.google.com/webstor',
            'https://chrome.google.com./webstor',
            'http://chrome.google.com/webstor',
            'https://chrome.google.com./webstor',
            'http://chrome.google.com/',
            'https://chrome.google.com./',
            'http://chrome.google.com/',
            'https://chrome.google.com./',
            'http://google.com/webstore',
            'https://google.com./webstore',
            'http://google.com/webstore',
            'https://google.com./webstore',
            'http://chromewebstor.google.com/',
            'https://chromewebstor.google.com./',
            'http://chromewebstor.google.com/',
            'https://chromewebstor.google.com./'
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = blockedUrls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var url = _step.value;
                assert.isFalse(_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.canInspectURL(url), url);
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
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = allowedUrls[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var url1 = _step1.value;
                assert.isTrue(_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.canInspectURL(url1), url1);
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
    });
});
function assertIsStatus(value) {
    if (value && (typeof value === "undefined" ? "undefined" : _type_of(value)) === 'object' && 'code' in value) {
        assert.isTrue(value.code === 'OK' || Boolean(value.isError), "Value ".concat(value, " is not a status code"));
    } else {
        assert.fail("Value ".concat(value, " is not a status code"));
    }
}
(0,_testing_ExtensionHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithDevtoolsExtension)('Wasm extension API', {}, function(context) {
    var captureError = function captureError(expectedMessage) {
        var original = console.error;
        return sinon.stub(console, 'error').callsFake(function(message) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                args[_key - 1] = arguments[_key];
            }
            if (expectedMessage !== message) {
                original.apply(void 0, [
                    message
                ].concat(_to_consumable_array(args)));
            }
        });
    };
    var stopId;
    beforeEach(function() {
        var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        target.setInspectedURL('http://example.com');
        var targetManager = target.targetManager();
        var resourceMapping = new _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceMapping.ResourceMapping(targetManager, _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.Workspace.WorkspaceImpl.instance());
        _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
        var callFrame = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame);
        callFrame.debuggerModel = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel(target);
        sinon.stub(callFrame, 'id').get(function() {
            return '0';
        });
        sinon.stub(callFrame.debuggerModel.agent, 'invoke_evaluateOnCallFrame').returns(Promise.resolve({
            result: {
                type: "undefined" /* Protocol.Runtime.RemoteObjectType.Undefined */ 
            },
            getError: function() {
                return undefined;
            }
        }));
        stopId = _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().pluginManager.stopIdForCallFrame(callFrame);
    });
    it('getWasmGlobal does not block on invalid indices', /*#__PURE__*/ _async_to_generator(function() {
        var _context_chrome_devtools, log, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    log = captureError('Extension server error: Invalid argument global: No global with index 0');
                    return [
                        4,
                        (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.languageServices.getWasmGlobal(0, stopId)
                    ];
                case 1:
                    result = _state.sent();
                    assertIsStatus(result);
                    assert.isTrue(log.calledOnce);
                    assert.strictEqual(result.code, 'E_BADARG');
                    assert.strictEqual(result.details[0], 'global');
                    return [
                        2
                    ];
            }
        });
    }));
    it('getWasmLocal does not block on invalid indices', /*#__PURE__*/ _async_to_generator(function() {
        var _context_chrome_devtools, log, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    log = captureError('Extension server error: Invalid argument local: No local with index 0');
                    return [
                        4,
                        (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.languageServices.getWasmLocal(0, stopId)
                    ];
                case 1:
                    result = _state.sent();
                    assertIsStatus(result);
                    assert.isTrue(log.calledOnce);
                    assert.strictEqual(result.code, 'E_BADARG');
                    assert.strictEqual(result.details[0], 'local');
                    return [
                        2
                    ];
            }
        });
    }));
    it('getWasmOp does not block on invalid indices', /*#__PURE__*/ _async_to_generator(function() {
        var _context_chrome_devtools, log, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    log = captureError('Extension server error: Invalid argument op: No operand with index 0');
                    return [
                        4,
                        (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.languageServices.getWasmOp(0, stopId)
                    ];
                case 1:
                    result = _state.sent();
                    assertIsStatus(result);
                    assert.isTrue(log.calledOnce);
                    assert.strictEqual(result.code, 'E_BADARG');
                    assert.strictEqual(result.details[0], 'op');
                    return [
                        2
                    ];
            }
        });
    }));
});
(0,_testing_ExtensionHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithDevtoolsExtension)('Language Extension API', {}, function(context) {
    it('reports loaded resources', /*#__PURE__*/ _async_to_generator(function() {
        var _context_chrome_devtools, target, pageResourceLoader, spy, resource, extensionId, expectedInitiator, expectedResource;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
                    target.setInspectedURL('http://example.com');
                    pageResourceLoader = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.PageResourceLoader.PageResourceLoader.instance({
                        forceNew: true,
                        loadOverride: null,
                        maxConcurrentLoads: 1
                    });
                    spy = sinon.spy(pageResourceLoader, 'resourceLoadedThroughExtension');
                    return [
                        4,
                        (_context_chrome_devtools = context.chrome.devtools) === null || _context_chrome_devtools === void 0 ? void 0 : _context_chrome_devtools.languageServices.reportResourceLoad('test.dwo', {
                            success: true,
                            size: 10
                        })
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(spy.calledOnce);
                    assert.strictEqual(pageResourceLoader.getNumberOfResources().resources, 1);
                    resource = spy.args[0][0];
                    extensionId = (0,_testing_ExtensionHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getExtensionOrigin)();
                    expectedInitiator = {
                        target: null,
                        frameId: null,
                        initiatorUrl: extensionId,
                        extensionId: extensionId
                    };
                    expectedResource = {
                        url: 'test.dwo',
                        initiator: expectedInitiator,
                        success: true,
                        size: 10,
                        errorMessage: undefined
                    };
                    assert.deepEqual(resource, expectedResource);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=ExtensionServer.test.js.map


}),
"./testing/ExtensionHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  describeWithDevtoolsExtension: function() { return describeWithDevtoolsExtension; },
  getExtensionOrigin: function() { return getExtensionOrigin; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/extensions/extensions.js */ "./models/extensions/extensions.js");
/* harmony import */var _EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MockConnection.js */ "./testing/MockConnection.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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




function getExtensionOrigin() {
    return window.location.origin;
}
function describeWithDevtoolsExtension(title, extension, fn) {
    var extensionDescriptor = _object_spread({
        startPage: "".concat(getExtensionOrigin(), "/blank.html"),
        name: 'TestExtension',
        exposeExperimentalAPIs: true,
        allowFileAccess: false
    }, extension);
    var context = {
        extensionDescriptor: extensionDescriptor,
        chrome: {}
    };
    function setup() {
        var server = _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.ExtensionServer.ExtensionServer.instance({
            forceNew: true
        });
        sinon.stub(server, 'addExtensionFrame');
        sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance, 'setInjectedScriptForOrigin').callsFake(function(origin, _script) {
            if (origin === getExtensionOrigin()) {
                var chrome = {};
                window.chrome = chrome;
                self.injectedExtensionAPI(extensionDescriptor, 'main', 'dark', [], function() {}, 1, window);
                context.chrome = chrome;
            }
        });
        server.addExtension(extensionDescriptor);
    }
    function cleanup() {
        var chrome = {};
        window.chrome = chrome;
        context.chrome = chrome;
    }
    return (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)("with-extension-".concat(title), function() {
        beforeEach(cleanup);
        beforeEach(setup);
        afterEach(cleanup);
        (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)(title, function() {
            (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupActionRegistry)();
            fn.call(this, context);
        });
    });
}
describeWithDevtoolsExtension.only = function(title, extension, fn) {
    // eslint-disable-next-line mocha/no-exclusive-tests
    return describe.only('.only', function() {
        return describeWithDevtoolsExtension(title, extension, fn);
    });
}; //# sourceMappingURL=ExtensionHelpers.js.map


}),

}]);