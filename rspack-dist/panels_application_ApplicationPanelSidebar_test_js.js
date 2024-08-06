"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_ApplicationPanelSidebar_test_js"], {
"./panels/application/ApplicationPanelSidebar.test.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _application_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_7__]);
_application_js__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2022 The Chromium Authors. All rights reserved.
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
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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








var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
var _sidebar = /*#__PURE__*/ new WeakMap(), _originsAdded = /*#__PURE__*/ new WeakMap(), _treeElementAdded = /*#__PURE__*/ new WeakSet();
var SharedStorageTreeElementListener = /*#__PURE__*/ function() {
    "use strict";
    function SharedStorageTreeElementListener(sidebar) {
        _class_call_check(this, SharedStorageTreeElementListener);
        _class_private_method_init(this, _treeElementAdded);
        _class_private_field_init(this, _sidebar, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _originsAdded, {
            writable: true,
            value: new Array()
        });
        _class_private_field_set(this, _sidebar, sidebar);
        _class_private_field_get(this, _sidebar).sharedStorageTreeElementDispatcher.addEventListener("SharedStorageTreeElementAdded" /* Application.ApplicationPanelSidebar.SharedStorageTreeElementDispatcher.Events.SharedStorageTreeElementAdded */ , _class_private_method_get(this, _treeElementAdded, treeElementAdded), this);
    }
    _create_class(SharedStorageTreeElementListener, [
        {
            key: "dispose",
            value: function dispose() {
                _class_private_field_get(this, _sidebar).sharedStorageTreeElementDispatcher.removeEventListener("SharedStorageTreeElementAdded" /* Application.ApplicationPanelSidebar.SharedStorageTreeElementDispatcher.Events.SharedStorageTreeElementAdded */ , _class_private_method_get(this, _treeElementAdded, treeElementAdded), this);
            }
        },
        {
            key: "waitForElementsAdded",
            value: function waitForElementsAdded(expectedCount) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!(_class_private_field_get(_this, _originsAdded).length < expectedCount)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this, _sidebar).sharedStorageTreeElementDispatcher.once("SharedStorageTreeElementAdded" /* Application.ApplicationPanelSidebar.SharedStorageTreeElementDispatcher.Events.SharedStorageTreeElementAdded */ )
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    3,
                                    0
                                ];
                            case 2:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return SharedStorageTreeElementListener;
}();
function treeElementAdded(event) {
    _class_private_field_get(this, _originsAdded).push(event.data.origin);
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('ApplicationPanelSidebar', function() {
    var getExpectedCall = function getExpectedCall(expectedCall) {
        return _getExpectedCall.apply(this, arguments);
    };
    var target;
    var TEST_ORIGIN_A = 'http://www.example.com/';
    var TEST_ORIGIN_B = 'http://www.example.org/';
    var TEST_ORIGIN_C = 'http://www.example.net/';
    var ID = 'AA';
    var EVENTS = [
        {
            accessTime: 0,
            type: "documentAppend" /* Protocol.Storage.SharedStorageAccessType.DocumentAppend */ ,
            mainFrameId: ID,
            ownerOrigin: TEST_ORIGIN_A,
            params: {
                key: 'key0',
                value: 'value0'
            }
        },
        {
            accessTime: 10,
            type: "workletGet" /* Protocol.Storage.SharedStorageAccessType.WorkletGet */ ,
            mainFrameId: ID,
            ownerOrigin: TEST_ORIGIN_A,
            params: {
                key: 'key0'
            }
        },
        {
            accessTime: 15,
            type: "workletLength" /* Protocol.Storage.SharedStorageAccessType.WorkletLength */ ,
            mainFrameId: ID,
            ownerOrigin: TEST_ORIGIN_A,
            params: {}
        },
        {
            accessTime: 20,
            type: "documentClear" /* Protocol.Storage.SharedStorageAccessType.DocumentClear */ ,
            mainFrameId: ID,
            ownerOrigin: TEST_ORIGIN_C,
            params: {}
        },
        {
            accessTime: 100,
            type: "workletSet" /* Protocol.Storage.SharedStorageAccessType.WorkletSet */ ,
            mainFrameId: ID,
            ownerOrigin: TEST_ORIGIN_C,
            params: {
                key: 'key0',
                value: 'value1',
                ignoreIfPresent: true
            }
        },
        {
            accessTime: 150,
            type: "workletRemainingBudget" /* Protocol.Storage.SharedStorageAccessType.WorkletRemainingBudget */ ,
            mainFrameId: ID,
            ownerOrigin: TEST_ORIGIN_C,
            params: {}
        }
    ];
    beforeEach(function() {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stubNoopSettings)();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ChildTargetManager.ChildTargetManager.install();
        var tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
            type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Tab
        });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
            parentTarget: tabTarget,
            subtype: 'prerender'
        });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
            parentTarget: tabTarget
        });
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register("preloading-status-panel" /* Root.Runtime.ExperimentName.PRELOADING_STATUS_PANEL */ , '', false);
        sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.ViewManager.instance(), 'showView').resolves(); // Silence console error
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Storage.getSharedStorageEntries', function() {
            return {};
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Storage.setSharedStorageTracking', function() {
            return {};
        });
    });
    // Flaking on multiple bots on CQ.
    it.skip('[crbug.com/1472237] shows cookies for all frames', /*#__PURE__*/ _async_to_generator(function() {
        var sidebar, resourceTreeModel;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.instance({
                        forceNew: true
                    });
                    return [
                        4,
                        _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.showAndGetSidebar()
                    ];
                case 1:
                    sidebar = _state.sent();
                    resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
                    assert.exists(resourceTreeModel);
                    sinon.stub(resourceTreeModel, 'frames').returns([
                        {
                            url: 'http://www.example.com/',
                            unreachableUrl: function() {
                                return null;
                            },
                            resourceTreeModel: function() {
                                return resourceTreeModel;
                            }
                        },
                        {
                            url: 'http://www.example.com/admin/',
                            unreachableUrl: function() {
                                return null;
                            },
                            resourceTreeModel: function() {
                                return resourceTreeModel;
                            }
                        },
                        {
                            url: 'http://www.example.org/',
                            unreachableUrl: function() {
                                return null;
                            },
                            resourceTreeModel: function() {
                                return resourceTreeModel;
                            }
                        }
                    ]);
                    resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.CachedResourcesLoaded, resourceTreeModel);
                    assert.strictEqual(sidebar.cookieListTreeElement.childCount(), 2);
                    assert.deepStrictEqual(sidebar.cookieListTreeElement.children().map(function(e) {
                        return e.title;
                    }), [
                        'http://www.example.com',
                        'http://www.example.org'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    // Flaking on windows + subsequence test failing
    it.skip('[crbug.com/1472651] shows shared storages and events for origins using shared storage', /*#__PURE__*/ _async_to_generator(function() {
        var securityOriginManager, sharedStorageModel, setTrackingSpy, sidebar, listener, addedPromise, resourceTreeModel, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    securityOriginManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.SecurityOriginManager);
                    assert.exists(securityOriginManager);
                    sinon.stub(securityOriginManager, 'securityOrigins').returns([
                        TEST_ORIGIN_A,
                        TEST_ORIGIN_B,
                        TEST_ORIGIN_C
                    ]);
                    sharedStorageModel = target.model(_application_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageModel.SharedStorageModel);
                    assert.exists(sharedStorageModel);
                    setTrackingSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageTracking').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.instance({
                        forceNew: true
                    });
                    return [
                        4,
                        _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.showAndGetSidebar()
                    ];
                case 1:
                    sidebar = _state.sent();
                    listener = new SharedStorageTreeElementListener(sidebar);
                    addedPromise = listener.waitForElementsAdded(3);
                    resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
                    assert.exists(resourceTreeModel);
                    resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.CachedResourcesLoaded, resourceTreeModel);
                    return [
                        4,
                        addedPromise
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(setTrackingSpy.calledOnceWithExactly({
                        enable: true
                    }));
                    assert.strictEqual(sidebar.sharedStorageListTreeElement.childCount(), 3);
                    assert.deepStrictEqual(sidebar.sharedStorageListTreeElement.children().map(function(e) {
                        return e.title;
                    }), [
                        TEST_ORIGIN_A,
                        TEST_ORIGIN_B,
                        TEST_ORIGIN_C
                    ]);
                    sidebar.sharedStorageListTreeElement.view.setDefaultIdForTesting(ID);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = EVENTS[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            sharedStorageModel.dispatchEventToListeners("SharedStorageAccess" /* Application.SharedStorageModel.Events.SharedStorageAccess */ , event);
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
                    assert.deepEqual(sidebar.sharedStorageListTreeElement.view.getEventsForTesting(), EVENTS);
                    return [
                        2
                    ];
            }
        });
    }));
    function _getExpectedCall() {
        _getExpectedCall = _async_to_generator(function(expectedCall) {
            var sidebar, components, object;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.instance({
                            forceNew: true
                        });
                        return [
                            4,
                            _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.showAndGetSidebar()
                        ];
                    case 1:
                        sidebar = _state.sent();
                        components = expectedCall.split('.');
                        assert.strictEqual(components.length, 2);
                        // @ts-ignore
                        object = sidebar[components[0]];
                        assert.exists(object);
                        return [
                            2,
                            sinon.spy(object, components[1])
                        ];
                }
            });
        });
        return _getExpectedCall.apply(this, arguments);
    }
    var MOCK_EVENT_ITEM = {
        addEventListener: function() {},
        securityOrigin: 'https://example.com',
        databaseId: new _application_js__WEBPACK_IMPORTED_MODULE_7__.IndexedDBModel.DatabaseId({
            storageKey: ''
        }, '')
    };
    var testUiUpdate = function(event, modelClass, expectedCallString, inScope) {
        return /*#__PURE__*/ _async_to_generator(function() {
            var _model, expectedCall, model, data;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
                        return [
                            4,
                            getExpectedCall(expectedCallString)
                        ];
                    case 1:
                        expectedCall = _state.sent();
                        model = target.model(modelClass);
                        return [
                            4,
                            coordinator.done({
                                waitForWork: true
                            })
                        ];
                    case 2:
                        _state.sent();
                        assert.exists(model);
                        data = [
                            _object_spread_props(_object_spread({}, MOCK_EVENT_ITEM), {
                                model: model
                            })
                        ];
                        (_model = model).dispatchEventToListeners.apply(_model, [
                            event
                        ].concat(_to_consumable_array(data)));
                        return [
                            4,
                            new Promise(function(resolve) {
                                return setTimeout(resolve, 0);
                            })
                        ];
                    case 3:
                        _state.sent();
                        assert.strictEqual(expectedCall.called, inScope);
                        return [
                            2
                        ];
                }
            });
        });
    };
    it('adds interest group event on in scope event', testUiUpdate("InterestGroupAccess" /* Application.InterestGroupStorageModel.Events.InterestGroupAccess */ , _application_js__WEBPACK_IMPORTED_MODULE_7__.InterestGroupStorageModel.InterestGroupStorageModel, 'interestGroupTreeElement.addEvent', true));
    // Failing on the toolbar button CL together with some AnimationTimeline tests
    it.skip('[crbug.com/354673294] does not add interest group event on out of scope event', testUiUpdate("InterestGroupAccess" /* Application.InterestGroupStorageModel.Events.InterestGroupAccess */ , _application_js__WEBPACK_IMPORTED_MODULE_7__.InterestGroupStorageModel.InterestGroupStorageModel, 'interestGroupTreeElement.addEvent', false));
    it('adds DOM storage on in scope event', testUiUpdate("DOMStorageAdded" /* Application.DOMStorageModel.Events.DOMStorageAdded */ , _application_js__WEBPACK_IMPORTED_MODULE_7__.DOMStorageModel.DOMStorageModel, 'sessionStorageListTreeElement.appendChild', true));
    // Failing on the toolbar button CL together with some AnimationTimeline tests
    it.skip('[crbug.com/354673294] does not add DOM storage on out of scope event', testUiUpdate("DOMStorageAdded" /* Application.DOMStorageModel.Events.DOMStorageAdded */ , _application_js__WEBPACK_IMPORTED_MODULE_7__.DOMStorageModel.DOMStorageModel, 'sessionStorageListTreeElement.appendChild', false));
    it('adds indexed DB on in scope event', testUiUpdate(_application_js__WEBPACK_IMPORTED_MODULE_7__.IndexedDBModel.Events.DatabaseAdded, _application_js__WEBPACK_IMPORTED_MODULE_7__.IndexedDBModel.IndexedDBModel, 'indexedDBListTreeElement.appendChild', true));
    // Failing on the toolbar button CL together with some AnimationTimeline tests
    it.skip('[crbug.com/354673294] does not add indexed DB on out of scope event', testUiUpdate(_application_js__WEBPACK_IMPORTED_MODULE_7__.IndexedDBModel.Events.DatabaseAdded, _application_js__WEBPACK_IMPORTED_MODULE_7__.IndexedDBModel.IndexedDBModel, 'indexedDBListTreeElement.appendChild', false));
    it('adds shared storage on in scope event', testUiUpdate("SharedStorageAdded" /* Application.SharedStorageModel.Events.SharedStorageAdded */ , _application_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageModel.SharedStorageModel, 'sharedStorageListTreeElement.appendChild', true));
    // Failing on the toolbar button CL together with some AnimationTimeline tests
    it.skip('[crbug.com/354673294] does not add shared storage on out of scope event', testUiUpdate("SharedStorageAdded" /* Application.SharedStorageModel.Events.SharedStorageAdded */ , _application_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageModel.SharedStorageModel, 'sharedStorageListTreeElement.appendChild', false));
    var MOCK_GETTER_ITEM = _object_spread({}, MOCK_EVENT_ITEM, MOCK_EVENT_ITEM.databaseId);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var testUiUpdateOnScopeChange = function(modelClass, getter, expectedCallString) {
        return /*#__PURE__*/ _async_to_generator(function() {
            var expectedCall, model;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(null);
                        return [
                            4,
                            getExpectedCall(expectedCallString)
                        ];
                    case 1:
                        expectedCall = _state.sent();
                        model = target.model(modelClass);
                        assert.exists(model);
                        sinon.stub(model, getter).returns([
                            MOCK_GETTER_ITEM
                        ]);
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(target);
                        return [
                            4,
                            new Promise(function(resolve) {
                                return setTimeout(resolve, 0);
                            })
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(expectedCall.called, true);
                        return [
                            2
                        ];
                }
            });
        });
    };
    it('adds DOM storage element after scope change', testUiUpdateOnScopeChange(_application_js__WEBPACK_IMPORTED_MODULE_7__.DOMStorageModel.DOMStorageModel, 'storages', 'sessionStorageListTreeElement.appendChild'));
    it('adds shared storage after scope change', testUiUpdateOnScopeChange(_application_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageModel.SharedStorageModel, 'storages', 'sharedStorageListTreeElement.appendChild'));
    it('adds indexed db after scope change', testUiUpdateOnScopeChange(_application_js__WEBPACK_IMPORTED_MODULE_7__.IndexedDBModel.IndexedDBModel, 'databases', 'indexedDBListTreeElement.appendChild'));
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('IDBDatabaseTreeElement', function() {
    beforeEach(function() {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stubNoopSettings)();
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register("preloading-status-panel" /* Root.Runtime.ExperimentName.PRELOADING_STATUS_PANEL */ , '', false);
    });
    it('only becomes selectable after database is updated', function() {
        var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        var model = target.model(_application_js__WEBPACK_IMPORTED_MODULE_7__.IndexedDBModel.IndexedDBModel);
        assert.exists(model);
        var panel = _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.instance({
            forceNew: true
        });
        var databaseId = new _application_js__WEBPACK_IMPORTED_MODULE_7__.IndexedDBModel.DatabaseId({
            storageKey: ''
        }, '');
        var treeElement = new _application_js__WEBPACK_IMPORTED_MODULE_7__.ApplicationPanelSidebar.IDBDatabaseTreeElement(panel, model, databaseId);
        assert.isFalse(treeElement.selectable);
        treeElement.update(new _application_js__WEBPACK_IMPORTED_MODULE_7__.IndexedDBModel.Database(databaseId, 1), false);
        assert.isTrue(treeElement.selectable);
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('ResourcesSection', function() {
    var tests = function(inScope) {
        return function() {
            var target;
            beforeEach(function() {
                (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stubNoopSettings)();
                _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register("preloading-status-panel" /* Root.Runtime.ExperimentName.PRELOADING_STATUS_PANEL */ , '', false);
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager.instance({
                    forceNew: true
                });
                target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
            });
            it('adds tree elements for a frame and resource', function() {
                var _treeElement_firstChild, _treeElement_firstChild1;
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
                var panel = _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.instance({
                    forceNew: true
                });
                var treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement();
                new _application_js__WEBPACK_IMPORTED_MODULE_7__.ApplicationPanelSidebar.ResourcesSection(panel, treeElement);
                var model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
                assert.exists(model);
                assert.strictEqual(treeElement.childCount(), 0);
                var frame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target);
                var url = 'http://example.com';
                var _treeElement_firstChild_childCount;
                assert.strictEqual((_treeElement_firstChild_childCount = (_treeElement_firstChild = treeElement.firstChild()) === null || _treeElement_firstChild === void 0 ? void 0 : _treeElement_firstChild.childCount()) !== null && _treeElement_firstChild_childCount !== void 0 ? _treeElement_firstChild_childCount : 0, 0);
                (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createResource)(frame, url, 'text/html', '');
                var _treeElement_firstChild_childCount1;
                assert.strictEqual((_treeElement_firstChild_childCount1 = (_treeElement_firstChild1 = treeElement.firstChild()) === null || _treeElement_firstChild1 === void 0 ? void 0 : _treeElement_firstChild1.childCount()) !== null && _treeElement_firstChild_childCount1 !== void 0 ? _treeElement_firstChild_childCount1 : 0, inScope ? 1 : 0);
            });
            it('picks up existing frames and resource', function() {
                var _treeElement_firstChild, _treeElement_firstChild1;
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(null);
                var panel = _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.instance({
                    forceNew: true
                });
                var treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement();
                new _application_js__WEBPACK_IMPORTED_MODULE_7__.ApplicationPanelSidebar.ResourcesSection(panel, treeElement);
                var url = 'http://example.com';
                (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createResource)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target), url, 'text/html', '');
                var _treeElement_firstChild_childCount;
                assert.strictEqual((_treeElement_firstChild_childCount = (_treeElement_firstChild = treeElement.firstChild()) === null || _treeElement_firstChild === void 0 ? void 0 : _treeElement_firstChild.childCount()) !== null && _treeElement_firstChild_childCount !== void 0 ? _treeElement_firstChild_childCount : 0, 0);
                assert.strictEqual(treeElement.childCount(), 0);
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
                assert.strictEqual(treeElement.childCount(), inScope ? 1 : 0);
                var _treeElement_firstChild_childCount1;
                assert.strictEqual((_treeElement_firstChild_childCount1 = (_treeElement_firstChild1 = treeElement.firstChild()) === null || _treeElement_firstChild1 === void 0 ? void 0 : _treeElement_firstChild1.childCount()) !== null && _treeElement_firstChild_childCount1 !== void 0 ? _treeElement_firstChild_childCount1 : 0, inScope ? 1 : 0);
            });
        };
    };
    describe('in scope', tests(true));
    describe('out of scope', tests(false));
}); //# sourceMappingURL=ApplicationPanelSidebar.test.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./panels/application/application.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AppManifestView: function() { return /* reexport module object */ _AppManifestView_js__WEBPACK_IMPORTED_MODULE_1__; },
  ApplicationPanelSidebar: function() { return /* reexport module object */ _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__; },
  BackgroundServiceModel: function() { return /* reexport module object */ _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_2__; },
  BackgroundServiceView: function() { return /* reexport module object */ _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_3__; },
  BounceTrackingMitigationsTreeElement: function() { return /* reexport module object */ _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_4__; },
  CookieItemsView: function() { return /* reexport module object */ _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_5__; },
  DOMStorageItemsView: function() { return /* reexport module object */ _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_6__; },
  DOMStorageModel: function() { return /* reexport module object */ _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_7__; },
  IndexedDBModel: function() { return /* reexport module object */ _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_8__; },
  IndexedDBViews: function() { return /* reexport module object */ _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_9__; },
  InterestGroupStorageModel: function() { return /* reexport module object */ _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_10__; },
  InterestGroupStorageView: function() { return /* reexport module object */ _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_11__; },
  InterestGroupTreeElement: function() { return /* reexport module object */ _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_12__; },
  OpenedWindowDetailsView: function() { return /* reexport module object */ _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_13__; },
  PreloadingTreeElement: function() { return /* reexport module object */ _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__; },
  PreloadingView: function() { return /* reexport module object */ _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__; },
  ReportingApiReportsView: function() { return /* reexport module object */ _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_16__; },
  ReportingApiView: function() { return /* reexport module object */ _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_17__; },
  ResourcesPanel: function() { return /* reexport module object */ _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__; },
  ServiceWorkerCacheViews: function() { return /* reexport module object */ _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_19__; },
  ServiceWorkerUpdateCycleView: function() { return /* reexport module object */ _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_21__; },
  ServiceWorkersView: function() { return /* reexport module object */ _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_20__; },
  SharedStorageEventsView: function() { return /* reexport module object */ _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_22__; },
  SharedStorageItemsView: function() { return /* reexport module object */ _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_23__; },
  SharedStorageListTreeElement: function() { return /* reexport module object */ _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_24__; },
  SharedStorageModel: function() { return /* reexport module object */ _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_25__; },
  SharedStorageTreeElement: function() { return /* reexport module object */ _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_26__; },
  StorageBucketsTreeElement: function() { return /* reexport module object */ _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__; },
  StorageItemsView: function() { return /* reexport module object */ _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_28__; },
  StorageView: function() { return /* reexport module object */ _StorageView_js__WEBPACK_IMPORTED_MODULE_29__; },
  TrustTokensTreeElement: function() { return /* reexport module object */ _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_30__; }
});
/* harmony import */var _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationPanelSidebar.js */ "./panels/application/ApplicationPanelSidebar.js");
/* harmony import */var _AppManifestView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppManifestView.js */ "./panels/application/AppManifestView.js");
/* harmony import */var _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackgroundServiceModel.js */ "./panels/application/BackgroundServiceModel.js");
/* harmony import */var _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackgroundServiceView.js */ "./panels/application/BackgroundServiceView.js");
/* harmony import */var _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BounceTrackingMitigationsTreeElement.js */ "./panels/application/BounceTrackingMitigationsTreeElement.js");
/* harmony import */var _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CookieItemsView.js */ "./panels/application/CookieItemsView.js");
/* harmony import */var _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOMStorageItemsView.js */ "./panels/application/DOMStorageItemsView.js");
/* harmony import */var _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DOMStorageModel.js */ "./panels/application/DOMStorageModel.js");
/* harmony import */var _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IndexedDBModel.js */ "./panels/application/IndexedDBModel.js");
/* harmony import */var _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IndexedDBViews.js */ "./panels/application/IndexedDBViews.js");
/* harmony import */var _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InterestGroupStorageModel.js */ "./panels/application/InterestGroupStorageModel.js");
/* harmony import */var _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./InterestGroupStorageView.js */ "./panels/application/InterestGroupStorageView.js");
/* harmony import */var _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InterestGroupTreeElement.js */ "./panels/application/InterestGroupTreeElement.js");
/* harmony import */var _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OpenedWindowDetailsView.js */ "./panels/application/OpenedWindowDetailsView.js");
/* harmony import */var _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./preloading/PreloadingView.js */ "./panels/application/preloading/PreloadingView.js");
/* harmony import */var _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PreloadingTreeElement.js */ "./panels/application/PreloadingTreeElement.js");
/* harmony import */var _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ReportingApiReportsView.js */ "./panels/application/ReportingApiReportsView.js");
/* harmony import */var _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ReportingApiView.js */ "./panels/application/ReportingApiView.js");
/* harmony import */var _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ResourcesPanel.js */ "./panels/application/ResourcesPanel.js");
/* harmony import */var _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ServiceWorkerCacheViews.js */ "./panels/application/ServiceWorkerCacheViews.js");
/* harmony import */var _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ServiceWorkersView.js */ "./panels/application/ServiceWorkersView.js");
/* harmony import */var _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ServiceWorkerUpdateCycleView.js */ "./panels/application/ServiceWorkerUpdateCycleView.js");
/* harmony import */var _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SharedStorageEventsView.js */ "./panels/application/SharedStorageEventsView.js");
/* harmony import */var _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SharedStorageItemsView.js */ "./panels/application/SharedStorageItemsView.js");
/* harmony import */var _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SharedStorageListTreeElement.js */ "./panels/application/SharedStorageListTreeElement.js");
/* harmony import */var _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./SharedStorageModel.js */ "./panels/application/SharedStorageModel.js");
/* harmony import */var _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./SharedStorageTreeElement.js */ "./panels/application/SharedStorageTreeElement.js");
/* harmony import */var _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./StorageBucketsTreeElement.js */ "./panels/application/StorageBucketsTreeElement.js");
/* harmony import */var _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./StorageItemsView.js */ "./panels/application/StorageItemsView.js");
/* harmony import */var _StorageView_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./StorageView.js */ "./panels/application/StorageView.js");
/* harmony import */var _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./TrustTokensTreeElement.js */ "./panels/application/TrustTokensTreeElement.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__, _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__]);
([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__, _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.































 //# sourceMappingURL=application.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),

}]);