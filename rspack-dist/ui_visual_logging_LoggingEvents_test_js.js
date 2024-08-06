"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_visual_logging_LoggingEvents_test_js"], {
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
"./testing/VisualLoggingHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getVeId: function() { return getVeId; }
});
/* harmony import */var _ui_visual_logging_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/visual_logging/visual_logging-testing.js */ "./ui/visual_logging/visual_logging-testing.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getVeId(loggable) {
    if (typeof loggable === 'string') {
        loggable = document.querySelector(loggable);
    }
    return _ui_visual_logging_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingState.getLoggingState(loggable).veid;
} //# sourceMappingURL=VisualLoggingHelpers.js.map


}),
"./ui/visual_logging/LoggingEvents.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */var _testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/VisualLoggingHelpers.js */ "./testing/VisualLoggingHelpers.js");
/* harmony import */var _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visual_logging-testing.js */ "./ui/visual_logging/visual_logging-testing.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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





describe('LoggingEvents', function() {
    var assertThrottled = function assertThrottled(stub) {
        return _assertThrottled.apply(this, arguments);
    };
    var parent;
    var element;
    var veid;
    var throttler;
    beforeEach(function() {
        parent = document.createElement('div');
        element = document.createElement('div');
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingState.getOrCreateLoggingState(parent, {
            ve: 1
        });
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingState.getOrCreateLoggingState(element, {
            ve: 1,
            context: '42'
        }, parent);
        veid = (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getVeId)(element);
        throttler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(1000000);
    });
    function _assertThrottled() {
        _assertThrottled = _async_to_generator(function(stub) {
            var _throttler_process;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            new Promise(function(resolve) {
                                return setTimeout(resolve, 0);
                            })
                        ];
                    case 1:
                        _state.sent();
                        assert.isFalse(stub.called);
                        return [
                            4,
                            (_throttler_process = throttler.process) === null || _throttler_process === void 0 ? void 0 : _throttler_process.call(throttler)
                        ];
                    case 2:
                        _state.sent();
                        assert.isTrue(stub.calledOnce);
                        return [
                            2
                        ];
                }
            });
        });
        return _assertThrottled.apply(this, arguments);
    }
    it('calls UI binding to log an impression', /*#__PURE__*/ _async_to_generator(function() {
        var recordImpression;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    recordImpression = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordImpression');
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logImpressions([
                            element,
                            parent
                        ])
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(recordImpression.calledOnce);
                    assert.sameDeepMembers(recordImpression.firstCall.firstArg.impressions, [
                        {
                            id: veid,
                            type: 1,
                            context: 42,
                            parent: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getVeId)(parent),
                            height: 0,
                            width: 0
                        },
                        {
                            id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getVeId)(parent),
                            type: 1,
                            height: 0,
                            width: 0
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('calls UI binding to log a click', /*#__PURE__*/ _async_to_generator(function() {
        var recordClick, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
                    // @ts-ignore
                    event = new MouseEvent('click', {
                        button: 0,
                        sourceCapabilities: new InputDeviceCapabilities()
                    });
                    _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logClick(throttler)(element, event);
                    return [
                        4,
                        assertThrottled(recordClick)
                    ];
                case 1:
                    _state.sent();
                    assert.deepStrictEqual(recordClick.firstCall.firstArg, {
                        veid: veid,
                        mouseButton: 0,
                        doubleClick: false
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not set mouse button for synthetic clicks', /*#__PURE__*/ _async_to_generator(function() {
        var recordClick, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
                    event = new MouseEvent('click', {
                        button: 0
                    });
                    _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logClick(throttler)(element, event);
                    return [
                        4,
                        assertThrottled(recordClick)
                    ];
                case 1:
                    _state.sent();
                    assert.deepStrictEqual(recordClick.firstCall.firstArg, {
                        veid: veid,
                        doubleClick: false
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('calls UI binding to log a double click', /*#__PURE__*/ _async_to_generator(function() {
        var recordClick, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
                    event = new MouseEvent('dblclick', {
                        button: 1
                    });
                    _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logClick(throttler)(element, event, {
                        doubleClick: true
                    });
                    return [
                        4,
                        assertThrottled(recordClick)
                    ];
                case 1:
                    _state.sent();
                    assert.deepStrictEqual(recordClick.firstCall.firstArg, {
                        veid: veid,
                        doubleClick: true
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('calls UI binding to log a change', /*#__PURE__*/ _async_to_generator(function() {
        var recordChange;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    recordChange = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordChange');
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logChange(element)
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(recordChange.calledOnce);
                    assert.deepStrictEqual(recordChange.firstCall.firstArg, {
                        veid: veid
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('calls UI binding to log a change of specific type', /*#__PURE__*/ _async_to_generator(function() {
        var recordChange;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    recordChange = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordChange');
                    _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingState.getLoggingState(element).lastInputEventType = 'instertText';
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logChange(element)
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(recordChange.calledOnce);
                    assert.deepStrictEqual(recordChange.firstCall.firstArg, {
                        veid: veid,
                        context: 296063892
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('calls UI binding to log a keydown with any code', /*#__PURE__*/ _async_to_generator(function() {
        var recordKeyDown, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    recordKeyDown = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordKeyDown');
                    event = new KeyboardEvent('keydown');
                    void _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logKeyDown(throttler)(element, event);
                    return [
                        4,
                        assertThrottled(recordKeyDown)
                    ];
                case 1:
                    _state.sent();
                    assert.deepStrictEqual(recordKeyDown.firstCall.firstArg, {
                        veid: veid
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('calls UI binding to log a keydown with a matching code', /*#__PURE__*/ _async_to_generator(function() {
        var recordKeyDown, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    recordKeyDown = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordKeyDown');
                    event = new KeyboardEvent('keydown', {
                        code: 'Enter',
                        key: 'Enter'
                    });
                    _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingState.getLoggingState(element).config.track = {
                        keydown: 'Enter|Escape'
                    };
                    void _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logKeyDown(throttler)(element, event);
                    return [
                        4,
                        assertThrottled(recordKeyDown)
                    ];
                case 1:
                    _state.sent();
                    assert.deepStrictEqual(recordKeyDown.firstCall.firstArg, {
                        veid: veid,
                        context: 513111094
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('calls UI binding to log a keydown with a matching key', /*#__PURE__*/ _async_to_generator(function() {
        var recordKeyDown, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    recordKeyDown = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordKeyDown');
                    event = new KeyboardEvent('keydown', {
                        code: 'Period',
                        key: '>'
                    });
                    _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingState.getLoggingState(element).config.track = {
                        keydown: '>'
                    };
                    void _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logKeyDown(throttler)(element, event);
                    return [
                        4,
                        assertThrottled(recordKeyDown)
                    ];
                case 1:
                    _state.sent();
                    assert.deepStrictEqual(recordKeyDown.firstCall.firstArg, {
                        veid: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getVeId)(element),
                        context: -1098575095
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('calls UI binding to log a keydown with an provided context', /*#__PURE__*/ _async_to_generator(function() {
        var recordKeyDown, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    recordKeyDown = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordKeyDown');
                    event = new KeyboardEvent('keydown', {
                        code: 'Enter'
                    });
                    void _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logKeyDown(throttler)(element, event, '21');
                    return [
                        4,
                        assertThrottled(recordKeyDown)
                    ];
                case 1:
                    _state.sent();
                    assert.deepStrictEqual(recordKeyDown.firstCall.firstArg, {
                        veid: veid,
                        context: 21
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('throttles subsequent keydowns', /*#__PURE__*/ _async_to_generator(function() {
        var recordKeyDown, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    recordKeyDown = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordKeyDown');
                    event = new KeyboardEvent('keydown', {
                        code: 'Enter'
                    });
                    void _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logKeyDown(throttler)(element, event);
                    void _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logKeyDown(throttler)(element, event);
                    return [
                        4,
                        assertThrottled(recordKeyDown)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not drop keydowns with a specific context', /*#__PURE__*/ _async_to_generator(function() {
        var _throttler_process, recordKeyDown, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    recordKeyDown = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordKeyDown');
                    event = new KeyboardEvent('keydown', {
                        code: 'Enter'
                    });
                    sinon.stub(event, 'currentTarget').value(element);
                    void _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logKeyDown(throttler)(element, event, '1');
                    void _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logKeyDown(throttler)(element, event, '2');
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(recordKeyDown.calledOnce);
                    return [
                        4,
                        (_throttler_process = throttler.process) === null || _throttler_process === void 0 ? void 0 : _throttler_process.call(throttler)
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(recordKeyDown.calledTwice);
                    assert.deepStrictEqual(recordKeyDown.firstCall.firstArg, {
                        veid: veid,
                        context: 1
                    });
                    assert.deepStrictEqual(recordKeyDown.secondCall.firstArg, {
                        veid: veid,
                        context: 2
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('throttles subsequent keydowns with the same context', /*#__PURE__*/ _async_to_generator(function() {
        var recordKeyDown, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    recordKeyDown = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordKeyDown');
                    event = new KeyboardEvent('keydown', {
                        code: 'Enter'
                    });
                    sinon.stub(event, 'currentTarget').value(element);
                    void _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logKeyDown(throttler)(element, event, '1');
                    void _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logKeyDown(throttler)(element, event, '1');
                    return [
                        4,
                        assertThrottled(recordKeyDown)
                    ];
                case 1:
                    _state.sent();
                    assert.deepStrictEqual(recordKeyDown.firstCall.firstArg, {
                        veid: veid,
                        context: 1
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not call UI binding to log a keydown with a non-matching code', /*#__PURE__*/ _async_to_generator(function() {
        var recordKeyDown, event;
        return _ts_generator(this, function(_state) {
            recordKeyDown = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordKeyDown');
            event = new KeyboardEvent('keydown', {
                code: 'KeyQ'
            });
            _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingState.getLoggingState(element).config.track = {
                keydown: 'Enter|Escape'
            };
            void _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logKeyDown(throttler)(element, event);
            assert.isFalse(recordKeyDown.called);
            return [
                2
            ];
        });
    }));
    it('calls UI binding to log a hover event', /*#__PURE__*/ _async_to_generator(function() {
        var recordHover, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    recordHover = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordHover');
                    event = new MouseEvent('click', {
                        button: 1
                    });
                    sinon.stub(event, 'currentTarget').value(element);
                    void _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logHover(new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(0))(event);
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_2__.expectCalled)(recordHover)
                    ];
                case 1:
                    _state.sent();
                    assert.deepStrictEqual(recordHover.firstCall.firstArg, {
                        veid: veid
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('calls UI binding to log a drag event', /*#__PURE__*/ _async_to_generator(function() {
        var recordDrag, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    recordDrag = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordDrag');
                    event = new MouseEvent('click', {
                        button: 1
                    });
                    sinon.stub(event, 'currentTarget').value(element);
                    void _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logDrag(throttler)(event);
                    return [
                        4,
                        throttler.schedule(/*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2
                                ];
                            });
                        }), "AsSoonAsPossible" /* Common.Throttler.Scheduling.AsSoonAsPossible */ )
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        assertThrottled(recordDrag)
                    ];
                case 2:
                    _state.sent();
                    assert.deepStrictEqual(recordDrag.firstCall.firstArg, {
                        veid: veid
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('calls UI binding to log a resize event', /*#__PURE__*/ _async_to_generator(function() {
        var recordResize;
        return _ts_generator(this, function(_state) {
            recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
            _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logResize(element, new DOMRect(0, 0, 100, 50));
            assert.deepStrictEqual(recordResize.firstCall.firstArg, {
                veid: veid,
                width: 100,
                height: 50
            });
            return [
                2
            ];
        });
    }));
    it('throttles calls UI binding to log a resize event', /*#__PURE__*/ _async_to_generator(function() {
        var recordResize;
        return _ts_generator(this, function(_state) {
            recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
            _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_4__.LoggingEvents.logResize(element, new DOMRect(0, 0, 100, 50));
            assert.deepStrictEqual(recordResize.firstCall.firstArg, {
                veid: veid,
                width: 100,
                height: 50
            });
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=LoggingEvents.test.js.map


}),
"./ui/visual_logging/visual_logging-testing.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Debugging: function() { return /* reexport module object */ _Debugging_js__WEBPACK_IMPORTED_MODULE_0__; },
  DomState: function() { return /* reexport module object */ _DomState_js__WEBPACK_IMPORTED_MODULE_1__; },
  LoggingConfig: function() { return /* reexport module object */ _LoggingConfig_js__WEBPACK_IMPORTED_MODULE_2__; },
  LoggingDriver: function() { return /* reexport module object */ _LoggingDriver_js__WEBPACK_IMPORTED_MODULE_3__; },
  LoggingEvents: function() { return /* reexport module object */ _LoggingEvents_js__WEBPACK_IMPORTED_MODULE_4__; },
  LoggingState: function() { return /* reexport module object */ _LoggingState_js__WEBPACK_IMPORTED_MODULE_5__; },
  NonDomState: function() { return /* reexport module object */ _NonDomState_js__WEBPACK_IMPORTED_MODULE_6__; }
});
/* harmony import */var _Debugging_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Debugging.js */ "./ui/visual_logging/Debugging.js");
/* harmony import */var _DomState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomState.js */ "./ui/visual_logging/DomState.js");
/* harmony import */var _LoggingConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoggingConfig.js */ "./ui/visual_logging/LoggingConfig.js");
/* harmony import */var _LoggingDriver_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoggingDriver.js */ "./ui/visual_logging/LoggingDriver.js");
/* harmony import */var _LoggingEvents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoggingEvents.js */ "./ui/visual_logging/LoggingEvents.js");
/* harmony import */var _LoggingState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoggingState.js */ "./ui/visual_logging/LoggingState.js");
/* harmony import */var _NonDomState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NonDomState.js */ "./ui/visual_logging/NonDomState.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







 //# sourceMappingURL=visual_logging-testing.js.map


}),

}]);