"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_SharedStorageItemsView_test_js"], {
"./panels/application/SharedStorageItemsView.test.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _application_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_5__]);
_application_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2022 The Chromium Authors. All rights reserved.
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






var View = _application_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageItemsView;
var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__.RenderCoordinator.RenderCoordinator.instance();
var _dispatcher = /*#__PURE__*/ new WeakMap(), _cleared = /*#__PURE__*/ new WeakMap(), _filteredCleared = /*#__PURE__*/ new WeakMap(), _refreshed = /*#__PURE__*/ new WeakMap(), _deletedKeys = /*#__PURE__*/ new WeakMap(), _editedEvents = /*#__PURE__*/ new WeakMap(), _itemsCleared = /*#__PURE__*/ new WeakSet(), _filteredItemsCleared = /*#__PURE__*/ new WeakSet(), _itemsRefreshed = /*#__PURE__*/ new WeakSet(), _itemDeleted = /*#__PURE__*/ new WeakSet(), _itemEdited = /*#__PURE__*/ new WeakSet();
var SharedStorageItemsListener = /*#__PURE__*/ function() {
    "use strict";
    function SharedStorageItemsListener(dispatcher) {
        _class_call_check(this, SharedStorageItemsListener);
        _class_private_method_init(this, _itemsCleared);
        _class_private_method_init(this, _filteredItemsCleared);
        _class_private_method_init(this, _itemsRefreshed);
        _class_private_method_init(this, _itemDeleted);
        _class_private_method_init(this, _itemEdited);
        _class_private_field_init(this, _dispatcher, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _cleared, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _filteredCleared, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _refreshed, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _deletedKeys, {
            writable: true,
            value: []
        });
        _class_private_field_init(this, _editedEvents, {
            writable: true,
            value: []
        });
        _class_private_field_set(this, _dispatcher, dispatcher);
        _class_private_field_get(this, _dispatcher).addEventListener("ItemsCleared" /* View.SharedStorageItemsDispatcher.Events.ItemsCleared */ , _class_private_method_get(this, _itemsCleared, itemsCleared), this);
        _class_private_field_get(this, _dispatcher).addEventListener("FilteredItemsCleared" /* View.SharedStorageItemsDispatcher.Events.FilteredItemsCleared */ , _class_private_method_get(this, _filteredItemsCleared, filteredItemsCleared), this);
        _class_private_field_get(this, _dispatcher).addEventListener("ItemsRefreshed" /* View.SharedStorageItemsDispatcher.Events.ItemsRefreshed */ , _class_private_method_get(this, _itemsRefreshed, itemsRefreshed), this);
        _class_private_field_get(this, _dispatcher).addEventListener("ItemDeleted" /* View.SharedStorageItemsDispatcher.Events.ItemDeleted */ , _class_private_method_get(this, _itemDeleted, itemDeleted), this);
        _class_private_field_get(this, _dispatcher).addEventListener("ItemEdited" /* View.SharedStorageItemsDispatcher.Events.ItemEdited */ , _class_private_method_get(this, _itemEdited, itemEdited), this);
    }
    _create_class(SharedStorageItemsListener, [
        {
            key: "dispose",
            value: function dispose() {
                _class_private_field_get(this, _dispatcher).removeEventListener("ItemsCleared" /* View.SharedStorageItemsDispatcher.Events.ItemsCleared */ , _class_private_method_get(this, _itemsCleared, itemsCleared), this);
                _class_private_field_get(this, _dispatcher).removeEventListener("FilteredItemsCleared" /* View.SharedStorageItemsDispatcher.Events.FilteredItemsCleared */ , _class_private_method_get(this, _filteredItemsCleared, filteredItemsCleared), this);
                _class_private_field_get(this, _dispatcher).removeEventListener("ItemsRefreshed" /* View.SharedStorageItemsDispatcher.Events.ItemsRefreshed */ , _class_private_method_get(this, _itemsRefreshed, itemsRefreshed), this);
                _class_private_field_get(this, _dispatcher).removeEventListener("ItemDeleted" /* View.SharedStorageItemsDispatcher.Events.ItemDeleted */ , _class_private_method_get(this, _itemDeleted, itemDeleted), this);
                _class_private_field_get(this, _dispatcher).removeEventListener("ItemEdited" /* View.SharedStorageItemsDispatcher.Events.ItemEdited */ , _class_private_method_get(this, _itemEdited, itemEdited), this);
            }
        },
        {
            key: "deletedKeys",
            get: function get() {
                return _class_private_field_get(this, _deletedKeys);
            }
        },
        {
            key: "editedEvents",
            get: function get() {
                return _class_private_field_get(this, _editedEvents);
            }
        },
        {
            key: "resetRefreshed",
            value: function resetRefreshed() {
                _class_private_field_set(this, _refreshed, false);
            }
        },
        {
            key: "waitForItemsCleared",
            value: function waitForItemsCleared() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!!_class_private_field_get(_this, _cleared)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this, _dispatcher).once("ItemsCleared" /* View.SharedStorageItemsDispatcher.Events.ItemsCleared */ )
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                _class_private_field_set(_this, _cleared, true);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "waitForFilteredItemsCleared",
            value: function waitForFilteredItemsCleared() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!!_class_private_field_get(_this, _filteredCleared)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this, _dispatcher).once("FilteredItemsCleared" /* View.SharedStorageItemsDispatcher.Events.FilteredItemsCleared */ )
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                _class_private_field_set(_this, _filteredCleared, true);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "waitForItemsRefreshed",
            value: function waitForItemsRefreshed() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!!_class_private_field_get(_this, _refreshed)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this, _dispatcher).once("ItemsRefreshed" /* View.SharedStorageItemsDispatcher.Events.ItemsRefreshed */ )
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                _class_private_field_set(_this, _refreshed, true);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "waitForItemsDeletedTotal",
            value: function waitForItemsDeletedTotal(total) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!(_class_private_field_get(_this, _deletedKeys).length < total)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this, _dispatcher).once("ItemDeleted" /* View.SharedStorageItemsDispatcher.Events.ItemDeleted */ )
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
        },
        {
            key: "waitForItemsEditedTotal",
            value: function waitForItemsEditedTotal(total) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!(_class_private_field_get(_this, _editedEvents).length < total)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this, _dispatcher).once("ItemEdited" /* View.SharedStorageItemsDispatcher.Events.ItemEdited */ )
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
    return SharedStorageItemsListener;
}();
function itemsCleared() {
    _class_private_field_set(this, _cleared, true);
}
function filteredItemsCleared() {
    _class_private_field_set(this, _filteredCleared, true);
}
function itemsRefreshed() {
    _class_private_field_set(this, _refreshed, true);
}
function itemDeleted(event) {
    _class_private_field_get(this, _deletedKeys).push(event.data.key);
}
function itemEdited(event) {
    _class_private_field_get(this, _editedEvents).push(event.data);
}
function selectNodeByKey(dataGrid, key) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = dataGrid.rootNode().children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var node = _step.value;
            var _node_data;
            if ((node === null || node === void 0 ? void 0 : (_node_data = node.data) === null || _node_data === void 0 ? void 0 : _node_data.key) === key) {
                node.select();
                return node;
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
    return null;
}
function getCellElementFromNodeAndColumnId(dataGrid, node, columnId) {
    var _node_element;
    var column = dataGrid.columns[columnId];
    var cellIndex = dataGrid.visibleColumnsArray.indexOf(column);
    return ((_node_element = node.element()) === null || _node_element === void 0 ? void 0 : _node_element.children[cellIndex]) || null;
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('SharedStorageItemsView', function() {
    var target;
    var sharedStorageModel;
    var sharedStorage;
    var TEST_ORIGIN = 'http://a.test';
    var METADATA = {
        creationTime: 100,
        length: 3,
        remainingBudget: 2.5,
        bytesUsed: 30
    };
    var METADATA_NO_ENTRIES = {
        creationTime: 100,
        length: 0,
        remainingBudget: 2.5,
        bytesUsed: 0
    };
    var METADATA_2_ENTRIES = {
        creationTime: 100,
        length: 2,
        remainingBudget: 2.5,
        bytesUsed: 20
    };
    var METADATA_4_ENTRIES = {
        creationTime: 100,
        length: 4,
        remainingBudget: 2.5,
        bytesUsed: 38
    };
    var ENTRIES = [
        {
            key: 'key1',
            value: 'a'
        },
        {
            key: 'key2',
            value: 'b'
        },
        {
            key: 'key3',
            value: 'c'
        }
    ];
    var ENTRIES_1 = [
        {
            key: 'key2',
            value: 'b'
        }
    ];
    var ENTRIES_2 = [
        {
            key: 'key1',
            value: 'a'
        },
        {
            key: 'key3',
            value: 'c'
        }
    ];
    var ENTRIES_KEY_EDITED_1 = [
        {
            key: 'key1',
            value: 'a'
        },
        {
            key: 'key0',
            value: 'b'
        },
        {
            key: 'key3',
            value: 'c'
        }
    ];
    var ENTRIES_KEY_EDITED_2 = [
        {
            key: 'key1',
            value: 'b'
        },
        {
            key: 'key3',
            value: 'c'
        }
    ];
    var ENTRIES_VALUE_EDITED = [
        {
            key: 'key1',
            value: 'a'
        },
        {
            key: 'key2',
            value: 'd'
        },
        {
            key: 'key3',
            value: 'c'
        }
    ];
    var ENTRIES_NEW_KEY = [
        {
            key: 'key1',
            value: 'a'
        },
        {
            key: 'key2',
            value: 'b'
        },
        {
            key: 'key3',
            value: 'c'
        },
        {
            key: 'key4',
            value: ''
        }
    ];
    beforeEach(function() {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        sharedStorageModel = target.model(_application_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageModel.SharedStorageModel);
        assert.exists(sharedStorageModel);
        sharedStorage = new _application_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageModel.SharedStorageForOrigin(sharedStorageModel, TEST_ORIGIN);
        assert.strictEqual(sharedStorage.securityOrigin, TEST_ORIGIN);
    });
    it('displays metadata and entries', /*#__PURE__*/ _async_to_generator(function() {
        var _view_innerSplitWidget_sidebarWidget, view, itemsListener, refreshedPromise, metadataView, keys, values;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.exists(sharedStorageModel);
                    sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata').withArgs({
                        ownerOrigin: TEST_ORIGIN
                    }).resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries').withArgs({
                        ownerOrigin: TEST_ORIGIN
                    }).resolves({
                        entries: ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        View.SharedStorageItemsView.createView(sharedStorage)
                    ];
                case 1:
                    view = _state.sent();
                    itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
                    refreshedPromise = itemsListener.waitForItemsRefreshed();
                    view.markAsRoot();
                    view.show(document.body);
                    return [
                        4,
                        refreshedPromise
                    ];
                case 2:
                    _state.sent();
                    assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
                    metadataView = (_view_innerSplitWidget_sidebarWidget = view.innerSplitWidget.sidebarWidget()) === null || _view_innerSplitWidget_sidebarWidget === void 0 ? void 0 : _view_innerSplitWidget_sidebarWidget.contentElement.firstChild;
                    assert.exists(metadataView);
                    assert.isNotNull(metadataView.shadowRoot);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(metadataView.shadowRoot, 'devtools-report-key');
                    assert.deepEqual(keys, [
                        'Origin',
                        'Creation Time',
                        'Number of Entries',
                        'Number of Bytes Used',
                        'Entropy Budget for Fenced Frames'
                    ]);
                    values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(metadataView.shadowRoot, 'devtools-report-value');
                    assert.deepEqual(values, [
                        TEST_ORIGIN,
                        new Date(100 * 1e3).toLocaleString(),
                        '3',
                        '30',
                        '2.5'
                    ]);
                    view.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('displays metadata with placeholder message if origin is not using API', /*#__PURE__*/ _async_to_generator(function() {
        var _view_innerSplitWidget_sidebarWidget, view, itemsListener, refreshedPromise, metadataView, keys, values;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.exists(sharedStorageModel);
                    sinon.stub(sharedStorage, 'getMetadata').resolves(null);
                    sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries').withArgs({
                        ownerOrigin: TEST_ORIGIN
                    }).resolves({
                        entries: [],
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        View.SharedStorageItemsView.createView(sharedStorage)
                    ];
                case 1:
                    view = _state.sent();
                    itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
                    refreshedPromise = itemsListener.waitForItemsRefreshed();
                    view.markAsRoot();
                    view.show(document.body);
                    return [
                        4,
                        refreshedPromise
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(view.getEntriesForTesting().length, 0);
                    metadataView = (_view_innerSplitWidget_sidebarWidget = view.innerSplitWidget.sidebarWidget()) === null || _view_innerSplitWidget_sidebarWidget === void 0 ? void 0 : _view_innerSplitWidget_sidebarWidget.contentElement.firstChild;
                    assert.exists(metadataView);
                    assert.isNotNull(metadataView.shadowRoot);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(metadataView.shadowRoot, 'devtools-report-key');
                    assert.deepEqual(keys, [
                        'Origin',
                        'Creation Time',
                        'Number of Entries',
                        'Number of Bytes Used',
                        'Entropy Budget for Fenced Frames'
                    ]);
                    values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(metadataView.shadowRoot, 'devtools-report-value');
                    assert.deepEqual(values, [
                        TEST_ORIGIN,
                        'Not yet created',
                        '0',
                        '0',
                        '0'
                    ]);
                    view.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('has placeholder sidebar when there are no entries', /*#__PURE__*/ _async_to_generator(function() {
        var view, itemsListener, refreshedPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.exists(sharedStorageModel);
                    sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata').withArgs({
                        ownerOrigin: TEST_ORIGIN
                    }).resolves({
                        metadata: METADATA_NO_ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries').withArgs({
                        ownerOrigin: TEST_ORIGIN
                    }).resolves({
                        entries: [],
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        View.SharedStorageItemsView.createView(sharedStorage)
                    ];
                case 1:
                    view = _state.sent();
                    itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
                    refreshedPromise = itemsListener.waitForItemsRefreshed();
                    view.markAsRoot();
                    view.show(document.body);
                    return [
                        4,
                        refreshedPromise
                    ];
                case 2:
                    _state.sent();
                    assert.notInstanceOf(view.outerSplitWidget.sidebarWidget(), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SearchableView.SearchableView);
                    assert.exists(view.contentElement.querySelector('.placeholder'));
                    view.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('updates sidebarWidget upon receiving SelectedNode Event', /*#__PURE__*/ _async_to_generator(function() {
        var view, itemsListener, refreshedPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.exists(sharedStorageModel);
                    sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata').withArgs({
                        ownerOrigin: TEST_ORIGIN
                    }).resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries').withArgs({
                        ownerOrigin: TEST_ORIGIN
                    }).resolves({
                        entries: ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        View.SharedStorageItemsView.createView(sharedStorage)
                    ];
                case 1:
                    view = _state.sent();
                    itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
                    refreshedPromise = itemsListener.waitForItemsRefreshed();
                    view.markAsRoot();
                    view.show(document.body);
                    return [
                        4,
                        refreshedPromise
                    ];
                case 2:
                    _state.sent();
                    // Select the second row.
                    assert.exists(selectNodeByKey(view.dataGrid, 'key2'));
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 3:
                    _state.sent();
                    assert.instanceOf(view.outerSplitWidget.sidebarWidget(), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SearchableView.SearchableView);
                    view.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('refreshes when "Refresh" is clicked', /*#__PURE__*/ _async_to_generator(function() {
        var getMetadataSpy, getEntriesSpy, view, itemsListener, refreshedPromise1, refreshedPromise2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.exists(sharedStorageModel);
                    getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata').resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries').resolves({
                        entries: ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        View.SharedStorageItemsView.createView(sharedStorage)
                    ];
                case 1:
                    view = _state.sent();
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
                    refreshedPromise1 = itemsListener.waitForItemsRefreshed();
                    // Showing will cause `getMetadata()` and `getEntries()` to be called.
                    view.markAsRoot();
                    view.show(document.body);
                    return [
                        4,
                        refreshedPromise1
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledTwice);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getEntriesSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
                    // Clicking "Refresh" will cause `getMetadata()` and `getEntries()` to be called.
                    itemsListener.resetRefreshed();
                    refreshedPromise2 = itemsListener.waitForItemsRefreshed();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(view.refreshButton.element);
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        refreshedPromise2
                    ];
                case 5:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledThrice);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getEntriesSpy.calledTwice);
                    assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
                    view.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('clears entries when "Delete All" is clicked', /*#__PURE__*/ _async_to_generator(function() {
        var getMetadataSpy, getEntriesSpy, clearSpy, view, itemsListener, refreshedPromise, clearedPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.exists(sharedStorageModel);
                    getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata');
                    getMetadataSpy.onCall(0).resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getMetadataSpy.onCall(1).resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getMetadataSpy.onCall(2).resolves({
                        metadata: METADATA_NO_ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries');
                    getEntriesSpy.onCall(0).resolves({
                        entries: ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getEntriesSpy.onCall(1).resolves({
                        entries: [],
                        getError: function() {
                            return undefined;
                        }
                    });
                    clearSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_clearSharedStorageEntries').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        View.SharedStorageItemsView.createView(sharedStorage)
                    ];
                case 1:
                    view = _state.sent();
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
                    refreshedPromise = itemsListener.waitForItemsRefreshed();
                    // Showing will cause `getMetadata()` and `getEntries()` to be called.
                    view.markAsRoot();
                    view.show(document.body);
                    return [
                        4,
                        refreshedPromise
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledTwice);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getEntriesSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
                    // Clicking "Delete All" will cause `clear()`, `getMetadata()`, and `getEntries()` to be called.
                    clearedPromise = itemsListener.waitForItemsCleared();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(view.deleteAllButton.element);
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        clearedPromise
                    ];
                case 5:
                    _state.sent();
                    assert.isTrue(clearSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getMetadataSpy.calledThrice);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getEntriesSpy.calledTwice);
                    assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.deepEqual(view.getEntriesForTesting(), []);
                    view.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('clears filtered entries when "Delete All" is clicked with a filter set', /*#__PURE__*/ _async_to_generator(function() {
        var getMetadataSpy, getEntriesSpy, deleteEntrySpy, view, itemsListener, refreshedPromise1, refreshedPromise2, clearedPromise, refreshedPromise3;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.exists(sharedStorageModel);
                    getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata');
                    getMetadataSpy.onCall(0).resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getMetadataSpy.onCall(1).resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getMetadataSpy.onCall(2).resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getMetadataSpy.onCall(3).resolves({
                        metadata: METADATA_2_ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getMetadataSpy.onCall(4).resolves({
                        metadata: METADATA_2_ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries');
                    getEntriesSpy.onCall(0).resolves({
                        entries: ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getEntriesSpy.onCall(1).resolves({
                        entries: ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getEntriesSpy.onCall(2).resolves({
                        entries: ENTRIES_2,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getEntriesSpy.onCall(3).resolves({
                        entries: ENTRIES_2,
                        getError: function() {
                            return undefined;
                        }
                    });
                    deleteEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_deleteSharedStorageEntry').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        View.SharedStorageItemsView.createView(sharedStorage)
                    ];
                case 1:
                    view = _state.sent();
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
                    refreshedPromise1 = itemsListener.waitForItemsRefreshed();
                    // Showing will cause `getMetadata()` and `getEntries()` to be called.
                    view.markAsRoot();
                    view.show(document.body);
                    return [
                        4,
                        refreshedPromise1
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledTwice);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getEntriesSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
                    // Adding a filter to the text box will cause `getMetadata()`, and `getEntries()` to be called.
                    itemsListener.resetRefreshed();
                    refreshedPromise2 = itemsListener.waitForItemsRefreshed();
                    view.filterItem.dispatchEventToListeners("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */ , 'b');
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        refreshedPromise2
                    ];
                case 5:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledThrice);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getEntriesSpy.calledTwice);
                    assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    // Only the filtered entries are displayed.
                    assert.deepEqual(view.getEntriesForTesting(), ENTRIES_1);
                    // Clicking "Delete All" will cause `deleteEntry()`, `getMetadata()`, and `getEntries()` to be called.
                    clearedPromise = itemsListener.waitForFilteredItemsCleared();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(view.deleteAllButton.element);
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 6:
                    _state.sent();
                    return [
                        4,
                        clearedPromise
                    ];
                case 7:
                    _state.sent();
                    assert.isTrue(deleteEntrySpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN,
                        key: 'key2'
                    }));
                    assert.strictEqual(getMetadataSpy.callCount, 4);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getEntriesSpy.calledThrice);
                    assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    // The filtered entries are cleared.
                    assert.deepEqual(view.getEntriesForTesting(), []);
                    // Changing the filter in the text box will cause `getMetadata()`, and `getEntries()` to be called.
                    itemsListener.resetRefreshed();
                    refreshedPromise3 = itemsListener.waitForItemsRefreshed();
                    view.filterItem.dispatchEventToListeners("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */ , '');
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 8:
                    _state.sent();
                    return [
                        4,
                        refreshedPromise3
                    ];
                case 9:
                    _state.sent();
                    assert.strictEqual(getMetadataSpy.callCount, 5);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.strictEqual(getEntriesSpy.callCount, 4);
                    assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.deepEqual(view.getEntriesForTesting(), ENTRIES_2);
                    view.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('deletes selected entry when "Delete Selected" is clicked', /*#__PURE__*/ _async_to_generator(function() {
        var getMetadataSpy, getEntriesSpy, deleteEntrySpy, view, itemsListener, refreshedPromise, deletedPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.exists(sharedStorageModel);
                    getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata');
                    getMetadataSpy.onCall(0).resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getMetadataSpy.onCall(1).resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getMetadataSpy.onCall(2).resolves({
                        metadata: METADATA_2_ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries');
                    getEntriesSpy.onCall(0).resolves({
                        entries: ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getEntriesSpy.onCall(1).resolves({
                        entries: [],
                        getError: function() {
                            return undefined;
                        }
                    });
                    deleteEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_deleteSharedStorageEntry').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        View.SharedStorageItemsView.createView(sharedStorage)
                    ];
                case 1:
                    view = _state.sent();
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
                    refreshedPromise = itemsListener.waitForItemsRefreshed();
                    // Showing will cause `getMetadata()` and `getEntries()` to be called.
                    view.markAsRoot();
                    view.show(document.body);
                    return [
                        4,
                        refreshedPromise
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledTwice);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getEntriesSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
                    // Select the second row.
                    assert.exists(selectNodeByKey(view.dataGrid, 'key2'));
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 4:
                    _state.sent();
                    // Clicking "Delete Selected" will cause `deleteEntry()`, `getMetadata()`, and `getEntries()` to be called.
                    deletedPromise = itemsListener.waitForItemsDeletedTotal(1);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(view.deleteSelectedButton.element);
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 5:
                    _state.sent();
                    return [
                        4,
                        deletedPromise
                    ];
                case 6:
                    _state.sent();
                    assert.isTrue(deleteEntrySpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN,
                        key: 'key2'
                    }));
                    assert.isTrue(getMetadataSpy.calledThrice);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getEntriesSpy.calledTwice);
                    assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.deepEqual(view.getEntriesForTesting(), []);
                    assert.deepEqual(itemsListener.deletedKeys, [
                        'key2'
                    ]);
                    view.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('edits key of selected entry to a non-preexisting key', /*#__PURE__*/ _async_to_generator(function() {
        var getMetadataSpy, getEntriesSpy, deleteEntrySpy, setEntrySpy, view, itemsListener, refreshedPromise, node, selectedNode, cellElement, editedPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.exists(sharedStorageModel);
                    getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata');
                    getMetadataSpy.onCall(0).resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getMetadataSpy.onCall(1).resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getMetadataSpy.onCall(2).resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries');
                    getEntriesSpy.onCall(0).resolves({
                        entries: ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getEntriesSpy.onCall(1).resolves({
                        entries: ENTRIES_KEY_EDITED_1,
                        getError: function() {
                            return undefined;
                        }
                    });
                    deleteEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_deleteSharedStorageEntry').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    setEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageEntry').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        View.SharedStorageItemsView.createView(sharedStorage)
                    ];
                case 1:
                    view = _state.sent();
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
                    refreshedPromise = itemsListener.waitForItemsRefreshed();
                    // Showing will cause `getMetadata()` and `getEntries()` to be called.
                    view.markAsRoot();
                    view.show(document.body);
                    return [
                        4,
                        refreshedPromise
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledTwice);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getEntriesSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
                    // Select the second row.
                    node = selectNodeByKey(view.dataGrid, 'key2');
                    assert.exists(node);
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 4:
                    _state.sent();
                    selectedNode = node;
                    view.dataGrid.startEditingNextEditableColumnOfDataGridNode(selectedNode, 'key', true);
                    cellElement = getCellElementFromNodeAndColumnId(view.dataGrid, selectedNode, 'key');
                    assert.exists(cellElement);
                    //  Editing a key will cause `deleteEntry()`, `setEntry()`, `getMetadata()`, and `getEntries()` to be called.
                    editedPromise = itemsListener.waitForItemsEditedTotal(1);
                    cellElement.textContent = 'key0';
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(cellElement, {
                        key: 'Enter'
                    });
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 5:
                    _state.sent();
                    return [
                        4,
                        editedPromise
                    ];
                case 6:
                    _state.sent();
                    assert.isTrue(deleteEntrySpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN,
                        key: 'key2'
                    }));
                    assert.isTrue(setEntrySpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN,
                        key: 'key0',
                        value: 'b',
                        ignoreIfPresent: false
                    }));
                    assert.isTrue(getMetadataSpy.calledThrice);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getEntriesSpy.calledTwice);
                    assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.deepEqual(view.getEntriesForTesting(), ENTRIES_KEY_EDITED_1);
                    assert.deepEqual(itemsListener.editedEvents, [
                        {
                            columnIdentifier: 'key',
                            oldText: 'key2',
                            newText: 'key0'
                        }
                    ]);
                    view.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('edits key of selected entry to a preexisting key', /*#__PURE__*/ _async_to_generator(function() {
        var getMetadataSpy, getEntriesSpy, deleteEntrySpy, setEntrySpy, view, itemsListener, refreshedPromise, node, selectedNode, cellElement, editedPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.exists(sharedStorageModel);
                    getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata');
                    getMetadataSpy.onCall(0).resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getMetadataSpy.onCall(1).resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getMetadataSpy.onCall(2).resolves({
                        metadata: METADATA_2_ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries');
                    getEntriesSpy.onCall(0).resolves({
                        entries: ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getEntriesSpy.onCall(1).resolves({
                        entries: ENTRIES_KEY_EDITED_2,
                        getError: function() {
                            return undefined;
                        }
                    });
                    deleteEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_deleteSharedStorageEntry').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    setEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageEntry').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        View.SharedStorageItemsView.createView(sharedStorage)
                    ];
                case 1:
                    view = _state.sent();
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
                    refreshedPromise = itemsListener.waitForItemsRefreshed();
                    // Showing will cause `getMetadata()` and `getEntries()` to be called.
                    view.markAsRoot();
                    view.show(document.body);
                    return [
                        4,
                        refreshedPromise
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledTwice);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getEntriesSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
                    // Select the second row.
                    node = selectNodeByKey(view.dataGrid, 'key2');
                    assert.exists(node);
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 4:
                    _state.sent();
                    selectedNode = node;
                    view.dataGrid.startEditingNextEditableColumnOfDataGridNode(selectedNode, 'key', true);
                    cellElement = getCellElementFromNodeAndColumnId(view.dataGrid, selectedNode, 'key');
                    assert.exists(cellElement);
                    // Editing a key will cause `deleteEntry()`, `setEntry()`, `getMetadata()`, and `getEntries()` to be called.
                    editedPromise = itemsListener.waitForItemsEditedTotal(1);
                    cellElement.textContent = 'key1';
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(cellElement, {
                        key: 'Enter'
                    });
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 5:
                    _state.sent();
                    return [
                        4,
                        editedPromise
                    ];
                case 6:
                    _state.sent();
                    assert.isTrue(deleteEntrySpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN,
                        key: 'key2'
                    }));
                    assert.isTrue(setEntrySpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN,
                        key: 'key1',
                        value: 'b',
                        ignoreIfPresent: false
                    }));
                    assert.isTrue(getMetadataSpy.calledThrice);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getEntriesSpy.calledTwice);
                    assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.deepEqual(view.getEntriesForTesting(), ENTRIES_KEY_EDITED_2);
                    assert.deepEqual(itemsListener.editedEvents, [
                        {
                            columnIdentifier: 'key',
                            oldText: 'key2',
                            newText: 'key1'
                        }
                    ]);
                    // Verify that the preview loads.
                    assert.instanceOf(view.outerSplitWidget.sidebarWidget(), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SearchableView.SearchableView);
                    view.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('edits value of selected entry to a new value', /*#__PURE__*/ _async_to_generator(function() {
        var getMetadataSpy, getEntriesSpy, deleteEntrySpy, setEntrySpy, view, itemsListener, refreshedPromise, node, selectedNode, cellElement, editedPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.exists(sharedStorageModel);
                    getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata');
                    getMetadataSpy.onCall(0).resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getMetadataSpy.onCall(1).resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getMetadataSpy.onCall(2).resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries');
                    getEntriesSpy.onCall(0).resolves({
                        entries: ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getEntriesSpy.onCall(1).resolves({
                        entries: ENTRIES_VALUE_EDITED,
                        getError: function() {
                            return undefined;
                        }
                    });
                    deleteEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_deleteSharedStorageEntry').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    setEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageEntry').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        View.SharedStorageItemsView.createView(sharedStorage)
                    ];
                case 1:
                    view = _state.sent();
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
                    refreshedPromise = itemsListener.waitForItemsRefreshed();
                    // Showing will cause `getMetadata()` and `getEntries()` to be called.
                    view.markAsRoot();
                    view.show(document.body);
                    return [
                        4,
                        refreshedPromise
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledTwice);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getEntriesSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
                    // Select the second row.
                    node = selectNodeByKey(view.dataGrid, 'key2');
                    assert.exists(node);
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 4:
                    _state.sent();
                    selectedNode = node;
                    view.dataGrid.startEditingNextEditableColumnOfDataGridNode(selectedNode, 'value', true);
                    cellElement = getCellElementFromNodeAndColumnId(view.dataGrid, selectedNode, 'value');
                    assert.exists(cellElement);
                    // Editing a value will cause `setEntry()`, `getMetadata()`, and `getEntries()` to be called.
                    editedPromise = itemsListener.waitForItemsEditedTotal(1);
                    cellElement.textContent = 'd';
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(cellElement, {
                        key: 'Enter'
                    });
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 5:
                    _state.sent();
                    return [
                        4,
                        editedPromise
                    ];
                case 6:
                    _state.sent();
                    assert.isTrue(deleteEntrySpy.notCalled);
                    assert.isTrue(setEntrySpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN,
                        key: 'key2',
                        value: 'd',
                        ignoreIfPresent: false
                    }));
                    assert.isTrue(getMetadataSpy.calledThrice);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getEntriesSpy.calledTwice);
                    assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.deepEqual(view.getEntriesForTesting(), ENTRIES_VALUE_EDITED);
                    assert.deepEqual(itemsListener.editedEvents, [
                        {
                            columnIdentifier: 'value',
                            oldText: 'b',
                            newText: 'd'
                        }
                    ]);
                    // Verify that the preview loads.
                    assert.instanceOf(view.outerSplitWidget.sidebarWidget(), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SearchableView.SearchableView);
                    view.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('adds an entry when the key cell of the empty data row is edited', /*#__PURE__*/ _async_to_generator(function() {
        var getMetadataSpy, getEntriesSpy, deleteEntrySpy, setEntrySpy, view, itemsListener, refreshedPromise, node, selectedNode, cellElement, editedPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.exists(sharedStorageModel);
                    getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata');
                    getMetadataSpy.onCall(0).resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getMetadataSpy.onCall(1).resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getMetadataSpy.onCall(2).resolves({
                        metadata: METADATA_4_ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries');
                    getEntriesSpy.onCall(0).resolves({
                        entries: ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getEntriesSpy.onCall(1).resolves({
                        entries: ENTRIES_NEW_KEY,
                        getError: function() {
                            return undefined;
                        }
                    });
                    deleteEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_deleteSharedStorageEntry').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    setEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageEntry').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        View.SharedStorageItemsView.createView(sharedStorage)
                    ];
                case 1:
                    view = _state.sent();
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
                    refreshedPromise = itemsListener.waitForItemsRefreshed();
                    // Showing will cause `getMetadata()` and `getEntries()` to be called.
                    view.markAsRoot();
                    view.show(document.body);
                    return [
                        4,
                        refreshedPromise
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledTwice);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getEntriesSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
                    // Select the empty (null) row.
                    node = selectNodeByKey(view.dataGrid, null);
                    assert.exists(node);
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 4:
                    _state.sent();
                    selectedNode = node;
                    view.dataGrid.startEditingNextEditableColumnOfDataGridNode(selectedNode, 'key', true);
                    cellElement = getCellElementFromNodeAndColumnId(view.dataGrid, selectedNode, 'key');
                    assert.exists(cellElement);
                    // Editing a key will cause `deleteEntry()`, `setEntry()`, `getMetadata()`, and `getEntries()` to be called.
                    editedPromise = itemsListener.waitForItemsEditedTotal(1);
                    cellElement.textContent = 'key4';
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(cellElement, {
                        key: 'Enter'
                    });
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 5:
                    _state.sent();
                    return [
                        4,
                        editedPromise
                    ];
                case 6:
                    _state.sent();
                    assert.isTrue(deleteEntrySpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN,
                        key: ''
                    }));
                    assert.isTrue(setEntrySpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN,
                        key: 'key4',
                        value: '',
                        ignoreIfPresent: false
                    }));
                    assert.isTrue(getMetadataSpy.calledThrice);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getEntriesSpy.calledTwice);
                    assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.deepEqual(view.getEntriesForTesting(), ENTRIES_NEW_KEY);
                    assert.deepEqual(itemsListener.editedEvents, [
                        {
                            columnIdentifier: 'key',
                            oldText: '',
                            newText: 'key4'
                        }
                    ]);
                    // Verify that the preview loads.
                    assert.instanceOf(view.outerSplitWidget.sidebarWidget(), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SearchableView.SearchableView);
                    view.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('attempting to edit key of selected entry to an empty key cancels the edit', /*#__PURE__*/ _async_to_generator(function() {
        var getMetadataSpy, getEntriesSpy, deleteEntrySpy, setEntrySpy, view, itemsListener, refreshedPromise1, node, selectedNode, cellElement, refreshedPromise2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.exists(sharedStorageModel);
                    getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata').resolves({
                        metadata: METADATA,
                        getError: function() {
                            return undefined;
                        }
                    });
                    getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries').resolves({
                        entries: ENTRIES,
                        getError: function() {
                            return undefined;
                        }
                    });
                    deleteEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_deleteSharedStorageEntry').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    setEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageEntry').resolves({
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        View.SharedStorageItemsView.createView(sharedStorage)
                    ];
                case 1:
                    view = _state.sent();
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
                    refreshedPromise1 = itemsListener.waitForItemsRefreshed();
                    // Showing will cause `getMetadata()` and `getEntries()` to be called.
                    view.markAsRoot();
                    view.show(document.body);
                    return [
                        4,
                        refreshedPromise1
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(getMetadataSpy.calledTwice);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getEntriesSpy.calledOnceWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
                    // Select the second row.
                    node = selectNodeByKey(view.dataGrid, 'key2');
                    assert.exists(node);
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 4:
                    _state.sent();
                    selectedNode = node;
                    view.dataGrid.startEditingNextEditableColumnOfDataGridNode(selectedNode, 'key', true);
                    cellElement = getCellElementFromNodeAndColumnId(view.dataGrid, selectedNode, 'key');
                    assert.exists(cellElement);
                    // Editing a key with the edit canceled will cause `getMetadata()` and `getEntries()` to be called.
                    itemsListener.resetRefreshed();
                    refreshedPromise2 = itemsListener.waitForItemsRefreshed();
                    cellElement.textContent = '';
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(cellElement, {
                        key: 'Enter'
                    });
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 5:
                    _state.sent();
                    return [
                        4,
                        refreshedPromise2
                    ];
                case 6:
                    _state.sent();
                    assert.isTrue(deleteEntrySpy.notCalled);
                    assert.isTrue(setEntrySpy.notCalled);
                    assert.isTrue(getMetadataSpy.calledThrice);
                    assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.isTrue(getEntriesSpy.calledTwice);
                    assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({
                        ownerOrigin: TEST_ORIGIN
                    }));
                    assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
                    // Verify that the preview loads.
                    assert.instanceOf(view.outerSplitWidget.sidebarWidget(), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SearchableView.SearchableView);
                    view.detach();
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=SharedStorageItemsView.test.js.map

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