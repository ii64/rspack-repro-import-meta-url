"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_persistence_PersistenceAction_test_js"], {
"./models/persistence/PersistenceAction.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _persistence_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./persistence.js */ "./models/persistence/persistence.js");
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










(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithLocale)('ContextMenuProvider', function() {
    beforeEach(function() {
        // Rather then setting up a whole Workspace/BreakpointManager/TargetManager/... chain. Let's stub out the NetworkPersistenceManager.
        sinon.stub(_persistence_js__WEBPACK_IMPORTED_MODULE_9__.NetworkPersistenceManager.NetworkPersistenceManager, 'instance').returns(sinon.createStubInstance(_persistence_js__WEBPACK_IMPORTED_MODULE_9__.NetworkPersistenceManager.NetworkPersistenceManager));
        sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'isHostedMode').returns(false);
        sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'showContextMenuAtPoint');
        sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'close');
    });
    it('passes along the "isEncoded" flag to the FileManager for "Save as"', /*#__PURE__*/ _async_to_generator(function() {
        var event, contextMenu, menuProvider, contentProvider, saveItem, saveStub, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    event = new Event('contextmenu');
                    sinon.stub(event, 'target').value(document);
                    contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ContextMenu.ContextMenu(event);
                    menuProvider = new _persistence_js__WEBPACK_IMPORTED_MODULE_9__.PersistenceActions.ContextMenuProvider();
                    contentProvider = {
                        contentURL: function() {
                            return 'https://example.com/sample.webp';
                        },
                        contentType: function() {
                            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document;
                        },
                        requestContent: function() {
                            return Promise.resolve({
                                isEncoded: true,
                                content: 'AGFzbQEAAAA='
                            });
                        },
                        requestContentData: function() {
                            return Promise.resolve(new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_7__.ContentData.ContentData('AGFzbQEAAAA=', true, 'image/webp'));
                        },
                        searchInContent: function() {
                            return assert.fail('Not implemented');
                        }
                    };
                    menuProvider.appendApplicableItems(event, contextMenu, contentProvider);
                    return [
                        4,
                        contextMenu.show()
                    ];
                case 1:
                    _state.sent();
                    saveItem = contextMenu.saveSection().items[0];
                    assert.exists(saveItem);
                    saveStub = sinon.stub(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.FileManager.FileManager.instance(), 'save');
                    contextMenu.invokeHandler(saveItem.id());
                    _ = assert.deepEqual;
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_4__.expectCall)(saveStub)
                    ];
                case 2:
                    _.apply(assert, [
                        _state.sent(),
                        [
                            'https://example.com/sample.webp',
                            'AGFzbQEAAAA=',
                            true,
                            true
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can "Save as" WASM modules', /*#__PURE__*/ _async_to_generator(function() {
        var event, contextMenu, menuProvider, uiSourceCode, stubProject, stubWorkspaceBinding, stubWasmScript, saveItem, saveStub, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    event = new Event('contextmenu');
                    sinon.stub(event, 'target').value(document);
                    contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ContextMenu.ContextMenu(event);
                    menuProvider = new _persistence_js__WEBPACK_IMPORTED_MODULE_9__.PersistenceActions.ContextMenuProvider();
                    uiSourceCode = sinon.createStubInstance(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.UISourceCode.UISourceCode, {
                        contentURL: 'https://example.com/sample.wasm',
                        contentType: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script
                    });
                    stubProject = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.ContentProviderBasedProject.ContentProviderBasedProject, {
                        type: _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.Debugger
                    });
                    uiSourceCode.project.returns(stubProject);
                    stubWorkspaceBinding = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding);
                    sinon.stub(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding, 'instance').returns(stubWorkspaceBinding);
                    stubWasmScript = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Script.Script, {
                        getWasmBytecode: Promise.resolve(new Uint8Array([
                            1,
                            2,
                            3,
                            4
                        ])),
                        isWasm: true
                    });
                    stubWorkspaceBinding.scriptsForUISourceCode.returns([
                        stubWasmScript
                    ]);
                    menuProvider.appendApplicableItems(event, contextMenu, uiSourceCode);
                    return [
                        4,
                        contextMenu.show()
                    ];
                case 1:
                    _state.sent();
                    saveItem = contextMenu.saveSection().items[0];
                    saveStub = sinon.stub(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.FileManager.FileManager.instance(), 'save');
                    contextMenu.invokeHandler(saveItem.id());
                    _ = assert.deepEqual;
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_4__.expectCall)(saveStub)
                    ];
                case 2:
                    _.apply(assert, [
                        _state.sent(),
                        [
                            'https://example.com/sample.wasm',
                            'AQIDBA==',
                            true,
                            true
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=PersistenceAction.test.js.map


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

}]);