"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_TracingManager_test_js"], {
"./models/trace/TracingManager.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _trace_trace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trace/trace.js */ "./models/trace/trace.js");
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




var FakeClient = /*#__PURE__*/ function() {
    "use strict";
    function FakeClient() {
        _class_call_check(this, FakeClient);
    }
    _create_class(FakeClient, [
        {
            key: "traceEventsCollected",
            value: function traceEventsCollected(_events) {}
        },
        {
            key: "tracingComplete",
            value: function tracingComplete() {}
        },
        {
            key: "tracingBufferUsage",
            value: function tracingBufferUsage(_usage) {}
        },
        {
            key: "eventsRetrievalProgress",
            value: function eventsRetrievalProgress(_progress) {}
        }
    ]);
    return FakeClient;
}();
var fakeEvents = [
    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeInstantEvent)('test-event-1', 1),
    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeInstantEvent)('test-event-2', 2)
];
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('TracingManager', function() {
    beforeEach(function() {
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('Tracing.start', function() {
            return {};
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('Tracing.end', function() {
            return {};
        });
    });
    it('sends bufferUsage to the client', /*#__PURE__*/ _async_to_generator(function() {
        var target, manager, client, bufferUsageSpy;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    manager = new _trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.TracingManager.TracingManager(target);
                    client = new FakeClient();
                    bufferUsageSpy = sinon.spy(client, 'tracingBufferUsage');
                    return [
                        4,
                        manager.start(client, 'devtools-timeline', 'options')
                    ];
                case 1:
                    _state.sent();
                    manager.bufferUsage(10);
                    assert.isTrue(bufferUsageSpy.calledWith(10));
                    return [
                        2
                    ];
            }
        });
    }));
    it('sends events to the client when they are collected and updates the client with progress', /*#__PURE__*/ _async_to_generator(function() {
        var target, manager, client, eventsRetrievalProgressSpy, eventsCollectedSpy;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    manager = new _trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.TracingManager.TracingManager(target);
                    client = new FakeClient();
                    eventsRetrievalProgressSpy = sinon.spy(client, 'eventsRetrievalProgress');
                    eventsCollectedSpy = sinon.spy(client, 'traceEventsCollected');
                    return [
                        4,
                        manager.start(client, 'devtools-timeline', 'options')
                    ];
                case 1:
                    _state.sent();
                    // Set the event buffer size to 20
                    manager.bufferUsage(0, 20);
                    manager.eventsCollected(fakeEvents);
                    assert.isTrue(eventsCollectedSpy.calledWith(fakeEvents));
                    assert.isTrue(eventsRetrievalProgressSpy.calledWith(2 / 20 /* 2 events, and the buffer size is 20 */ ));
                    return [
                        2
                    ];
            }
        });
    }));
    it('updates the buffer size if we saw more events than the last buffer size', /*#__PURE__*/ _async_to_generator(function() {
        var target, manager, client, eventsRetrievalProgressSpy, eventsCollectedSpy;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    manager = new _trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.TracingManager.TracingManager(target);
                    client = new FakeClient();
                    eventsRetrievalProgressSpy = sinon.spy(client, 'eventsRetrievalProgress');
                    eventsCollectedSpy = sinon.spy(client, 'traceEventsCollected');
                    return [
                        4,
                        manager.start(client, 'devtools-timeline', 'options')
                    ];
                case 1:
                    _state.sent();
                    // Set the event buffer size to 1
                    manager.bufferUsage(0, 1);
                    manager.eventsCollected(fakeEvents);
                    assert.isTrue(eventsCollectedSpy.calledWith(fakeEvents));
                    assert.isTrue(eventsRetrievalProgressSpy.calledWith(2 / 2 /* 2 events, and the buffer size is now updated to 2 */ ));
                    return [
                        2
                    ];
            }
        });
    }));
    it('notifies the client when tracing is complete', /*#__PURE__*/ _async_to_generator(function() {
        var target, manager, client, tracingCompleteSpy;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    manager = new _trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.TracingManager.TracingManager(target);
                    client = new FakeClient();
                    tracingCompleteSpy = sinon.spy(client, 'tracingComplete');
                    return [
                        4,
                        manager.start(client, 'devtools-timeline', 'options')
                    ];
                case 1:
                    _state.sent();
                    manager.bufferUsage(0, 10);
                    manager.eventsCollected(fakeEvents);
                    manager.tracingComplete();
                    assert.isTrue(tracingCompleteSpy.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('errors if tracing is started twice', /*#__PURE__*/ _async_to_generator(function() {
        var target, manager, client, didThrow, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    manager = new _trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.TracingManager.TracingManager(target);
                    client = new FakeClient();
                    return [
                        4,
                        manager.start(client, 'devtools-timeline', 'options')
                    ];
                case 1:
                    _state.sent();
                    // The assert.throws() helper does not work with async/await, hence the manual try catch
                    didThrow = false;
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        4,
                        ,
                        5
                    ]);
                    return [
                        4,
                        manager.start(client, 'devtools-timeline', 'options')
                    ];
                case 3:
                    _state.sent();
                    return [
                        3,
                        5
                    ];
                case 4:
                    error = _state.sent();
                    didThrow = true;
                    assert.strictEqual(error.message, 'Tracing is already started');
                    return [
                        3,
                        5
                    ];
                case 5:
                    assert.isTrue(didThrow, 'Test did not throw an error as expected.');
                    return [
                        2
                    ];
            }
        });
    }));
    it('errors if you try to stop when tracing is not active', /*#__PURE__*/ _async_to_generator(function() {
        var target, manager;
        return _ts_generator(this, function(_state) {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
            manager = new _trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.TracingManager.TracingManager(target);
            assert.throws(function() {
                manager.stop();
            }, /Tracing is not started/);
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=TracingManager.test.js.map


}),

}]);