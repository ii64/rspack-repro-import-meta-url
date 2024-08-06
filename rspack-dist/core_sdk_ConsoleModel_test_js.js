"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_ConsoleModel_test_js"], {
"./core/sdk/ConsoleModel.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _common_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/common.js */ "./core/common/common.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('ConsoleMessage', function() {
    var newMessage = function newMessage(param) {
        var _param_source = param.source, source = _param_source === void 0 ? _common_common_js__WEBPACK_IMPORTED_MODULE_3__.Console.FrontendMessageSource.ConsoleAPI : _param_source, _param_message = param.message, message = _param_message === void 0 ? 'Message' : _param_message, url = param.url, scriptId = param.scriptId, executionContextId = param.executionContextId, stackTrace = param.stackTrace;
        return new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleModel.ConsoleMessage(null, source, null, message, {
            url: url,
            executionContextId: executionContextId,
            scriptId: scriptId,
            stackTrace: stackTrace
        });
    };
    var scriptId1 = '1';
    var scriptId2 = '2';
    it('compares using message', function() {
        var a = newMessage({});
        var b = newMessage({});
        var c = newMessage({
            message: 'DifferentMessage'
        });
        assert.isTrue(a.isEqual(b));
        assert.isFalse(b.isEqual(c));
        assert.isFalse(c.isEqual(a));
        assert.isTrue(c.isEqual(c));
    });
    it('compares using source', function() {
        var a = newMessage({});
        var b = newMessage({});
        var c = newMessage({
            source: _common_common_js__WEBPACK_IMPORTED_MODULE_3__.Console.FrontendMessageSource.CSS
        });
        assert.isTrue(a.isEqual(b));
        assert.isFalse(b.isEqual(c));
        assert.isFalse(c.isEqual(a));
    });
    it('compares using url', function() {
        var a = newMessage({});
        var b = newMessage({
            url: 'http://a.b/c'
        });
        var c = newMessage({
            url: 'http://a.b/c'
        });
        var d = newMessage({
            url: 'http://a.b/d'
        });
        assert.isFalse(a.isEqual(b));
        assert.isTrue(b.isEqual(c));
        assert.isFalse(c.isEqual(d));
        assert.isFalse(d.isEqual(a));
    });
    it('compares using execution context and script id', function() {
        var a = newMessage({});
        var b = newMessage({
            executionContextId: 5,
            scriptId: scriptId1
        });
        var c = newMessage({
            executionContextId: 5,
            scriptId: scriptId1
        });
        var d = newMessage({
            executionContextId: 6,
            scriptId: scriptId1
        });
        var e = newMessage({
            executionContextId: 5,
            scriptId: scriptId2
        });
        assert.isFalse(a.isEqual(b));
        assert.isFalse(b.isEqual(a));
        assert.isTrue(b.isEqual(c));
        assert.isFalse(c.isEqual(d));
        assert.isFalse(c.isEqual(e));
    });
    it('compares using script ids in stack traces', function() {
        var functionName = 'foo';
        var url = 'http://localhost/foo.js';
        var lineNumber = 1;
        var columnNumber = 1;
        var a = newMessage({
            stackTrace: {
                callFrames: [
                    {
                        functionName: functionName,
                        scriptId: scriptId1,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    }
                ]
            }
        });
        var b = newMessage({
            stackTrace: {
                callFrames: [
                    {
                        functionName: functionName,
                        scriptId: scriptId2,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    }
                ]
            }
        });
        assert.isFalse(a.isEqual(b));
    });
    it('logs a message on main frame navigation', /*#__PURE__*/ _async_to_generator(function() {
        var consoleLog, tabTarget, mainFrameTarget, subframeTarget;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _common_common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.Settings.instance().moduleSetting('preserve-console-log').set(true);
                    consoleLog = sinon.spy(_common_common_js__WEBPACK_IMPORTED_MODULE_3__.Console.Console.instance(), 'log');
                    tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                        type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Tab
                    });
                    mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                        type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame,
                        parentTarget: tabTarget
                    });
                    subframeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                        type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame,
                        parentTarget: mainFrameTarget
                    });
                    return [
                        4,
                        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getInitializedResourceTreeModel)(subframeTarget)
                    ];
                case 1:
                    _state.sent();
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(subframeTarget));
                    assert.isTrue(consoleLog.notCalled);
                    return [
                        4,
                        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getInitializedResourceTreeModel)(mainFrameTarget)
                    ];
                case 2:
                    _state.sent();
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(mainFrameTarget));
                    assert.isTrue(consoleLog.calledOnce);
                    assert.isTrue(consoleLog.calledOnceWith("Navigated to ".concat(_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.FRAME_URL)));
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs a message on main frame navigation via bfcache', /*#__PURE__*/ _async_to_generator(function() {
        var consoleLog, tabTarget, mainFrameTarget, subframeTarget;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _common_common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.Settings.instance().moduleSetting('preserve-console-log').set(true);
                    consoleLog = sinon.spy(_common_common_js__WEBPACK_IMPORTED_MODULE_3__.Console.Console.instance(), 'log');
                    tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                        type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Tab
                    });
                    mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                        type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame,
                        parentTarget: tabTarget
                    });
                    subframeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                        type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame,
                        parentTarget: mainFrameTarget
                    });
                    return [
                        4,
                        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getInitializedResourceTreeModel)(subframeTarget)
                    ];
                case 1:
                    _state.sent();
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(subframeTarget), {}, "BackForwardCacheRestore" /* Protocol.Page.NavigationType.BackForwardCacheRestore */ );
                    assert.isTrue(consoleLog.notCalled);
                    return [
                        4,
                        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getInitializedResourceTreeModel)(mainFrameTarget)
                    ];
                case 2:
                    _state.sent();
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(mainFrameTarget), {}, "BackForwardCacheRestore" /* Protocol.Page.NavigationType.BackForwardCacheRestore */ );
                    assert.isTrue(consoleLog.calledOnce);
                    assert.isTrue(consoleLog.calledOnceWith("Navigation to ".concat(_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.FRAME_URL, " was restored from back/forward cache (see https://web.dev/bfcache/)")));
                    return [
                        2
                    ];
            }
        });
    }));
    it('discards duplicate console messages with identical timestamps', /*#__PURE__*/ _async_to_generator(function() {
        var target, runtimeModel, resourceTreeModel, consoleModel, addMessage, consoleAPICall;
        return _ts_generator(this, function(_state) {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame
            });
            runtimeModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.RuntimeModel);
            assert.exists(runtimeModel);
            resourceTreeModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel);
            assert.exists(resourceTreeModel);
            consoleModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleModel.ConsoleModel);
            assert.exists(consoleModel);
            addMessage = sinon.spy(consoleModel, 'addMessage');
            resourceTreeModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.Events.CachedResourcesLoaded, resourceTreeModel);
            consoleAPICall = {
                type: "log" /* Protocol.Runtime.ConsoleAPICalledEventType.Log */ ,
                args: [
                    {
                        type: "string" /* Protocol.Runtime.RemoteObjectType.String */ ,
                        value: 'log me'
                    }
                ],
                executionContextId: 1,
                timestamp: 123456.789
            };
            runtimeModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.Events.ConsoleAPICalled, consoleAPICall);
            assert.isTrue(addMessage.calledOnce);
            assert.isTrue(addMessage.calledOnceWith(sinon.match({
                messageText: 'log me'
            })));
            runtimeModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.Events.ConsoleAPICalled, consoleAPICall);
            assert.isTrue(addMessage.calledOnce);
            runtimeModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.Events.ConsoleAPICalled, _object_spread_props(_object_spread({}, consoleAPICall), {
                timestamp: 123457.000
            }));
            assert.isTrue(addMessage.calledTwice);
            assert.isTrue(addMessage.secondCall.calledWith(sinon.match({
                messageText: 'log me'
            })));
            return [
                2
            ];
        });
    }));
    it('clears when main frame global object cleared', /*#__PURE__*/ _async_to_generator(function() {
        var _tabTarget_model, _mainFrameTarget_model, _subframeTarget_model, tabTarget, mainFrameTarget, subframeTarget, clearGlobalObjectOnTarget, consoleClearEventsTabTarget, consoleClearEventsMainFrameTarget, consoleClearEventsSubframeTarget;
        return _ts_generator(this, function(_state) {
            _common_common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.Settings.instance().moduleSetting('preserve-console-log').set(false);
            tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Tab
            });
            mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame,
                parentTarget: tabTarget
            });
            subframeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame,
                parentTarget: mainFrameTarget
            });
            clearGlobalObjectOnTarget = function(target) {
                var resourceTreeModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel);
                assert.exists(resourceTreeModel);
                resourceTreeModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.Events.CachedResourcesLoaded, resourceTreeModel);
                var debuggerModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerModel);
                assert.exists(debuggerModel);
                debuggerModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.Events.GlobalObjectCleared, debuggerModel);
            };
            consoleClearEventsTabTarget = 0;
            consoleClearEventsMainFrameTarget = 0;
            consoleClearEventsSubframeTarget = 0;
            (_tabTarget_model = tabTarget.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleModel.ConsoleModel)) === null || _tabTarget_model === void 0 ? void 0 : _tabTarget_model.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleModel.Events.ConsoleCleared, function() {
                return ++consoleClearEventsTabTarget;
            });
            (_mainFrameTarget_model = mainFrameTarget.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleModel.ConsoleModel)) === null || _mainFrameTarget_model === void 0 ? void 0 : _mainFrameTarget_model.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleModel.Events.ConsoleCleared, function() {
                return ++consoleClearEventsMainFrameTarget;
            });
            (_subframeTarget_model = subframeTarget.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleModel.ConsoleModel)) === null || _subframeTarget_model === void 0 ? void 0 : _subframeTarget_model.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleModel.Events.ConsoleCleared, function() {
                return ++consoleClearEventsSubframeTarget;
            });
            clearGlobalObjectOnTarget(subframeTarget);
            assert.strictEqual(consoleClearEventsTabTarget, 0);
            assert.strictEqual(consoleClearEventsMainFrameTarget, 0);
            assert.strictEqual(consoleClearEventsSubframeTarget, 0);
            clearGlobalObjectOnTarget(mainFrameTarget);
            assert.strictEqual(consoleClearEventsTabTarget, 0);
            assert.strictEqual(consoleClearEventsMainFrameTarget, 1);
            assert.strictEqual(consoleClearEventsSubframeTarget, 0);
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=ConsoleModel.test.js.map


}),

}]);