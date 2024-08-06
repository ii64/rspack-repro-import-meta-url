"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_handlers_InvalidationsHandler_test_js"], {
"./models/trace/handlers/InvalidationsHandler.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
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


function invalidationDataForTestAssertion(invalidation) {
    return {
        nodeId: invalidation.args.data.nodeId,
        nodeName: invalidation.args.data.nodeName,
        reason: invalidation.args.data.reason,
        stackTrace: invalidation.args.data.stackTrace
    };
}
describe('InvalidationsHandler', function() {
    beforeEach(function() {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Invalidations.reset();
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Invalidations.initialize();
    });
    it('finds the right invalidators for a layout where attributes have been changed', /*#__PURE__*/ _async_to_generator(function() {
        var _data_invalidationsForEvent_get, events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, updateLayoutTreeEvent, _data_invalidationsForEvent_get_map, invalidations;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'style-invalidation-change-attribute.json.gz')
                    ];
                case 1:
                    events = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Invalidations.handleEvent(event);
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
                    return [
                        4,
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Invalidations.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Invalidations.data();
                    // Find the Layout event that we want to test - we are testing
                    // the layout that happens after button click that happened in
                    // the trace.
                    updateLayoutTreeEvent = events.find(function(event) {
                        var _event_args_beginData_stackTrace, _event_args_beginData;
                        return _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventUpdateLayoutTree(event) && ((_event_args_beginData = event.args.beginData) === null || _event_args_beginData === void 0 ? void 0 : (_event_args_beginData_stackTrace = _event_args_beginData.stackTrace) === null || _event_args_beginData_stackTrace === void 0 ? void 0 : _event_args_beginData_stackTrace[0].functionName) === 'testFuncs.changeAttributeAndDisplay';
                    });
                    if (!updateLayoutTreeEvent) {
                        throw new Error('Could not find UpdateLayoutTree event.');
                    }
                    invalidations = (_data_invalidationsForEvent_get_map = (_data_invalidationsForEvent_get = data.invalidationsForEvent.get(updateLayoutTreeEvent)) === null || _data_invalidationsForEvent_get === void 0 ? void 0 : _data_invalidationsForEvent_get.map(invalidationDataForTestAssertion)) !== null && _data_invalidationsForEvent_get_map !== void 0 ? _data_invalidationsForEvent_get_map : [];
                    assert.deepEqual(invalidations, [
                        {
                            nodeId: 107,
                            nodeName: 'BUTTON id=\'changeAttributeAndDisplay\'',
                            reason: 'PseudoClass',
                            stackTrace: undefined
                        },
                        {
                            nodeId: 110,
                            nodeName: 'DIV id=\'testElementFour\'',
                            reason: undefined,
                            stackTrace: [
                                {
                                    columnNumber: 46,
                                    functionName: 'testFuncs.changeAttributeAndDisplay',
                                    lineNumber: 45,
                                    scriptId: '86',
                                    url: 'https://chromedevtools.github.io/performance-stories/style-invalidations/app.js'
                                }
                            ]
                        },
                        {
                            nodeId: 110,
                            nodeName: 'DIV id=\'testElementFour\'',
                            reason: 'StyleInvalidator',
                            stackTrace: [
                                {
                                    columnNumber: 46,
                                    functionName: 'testFuncs.changeAttributeAndDisplay',
                                    lineNumber: 45,
                                    scriptId: '86',
                                    url: 'https://chromedevtools.github.io/performance-stories/style-invalidations/app.js'
                                }
                            ]
                        },
                        {
                            nodeId: 110,
                            nodeName: 'DIV id=\'testElementFour\'',
                            reason: 'Attribute',
                            stackTrace: [
                                {
                                    columnNumber: 46,
                                    functionName: 'testFuncs.changeAttributeAndDisplay',
                                    lineNumber: 45,
                                    scriptId: '86',
                                    url: 'https://chromedevtools.github.io/performance-stories/style-invalidations/app.js'
                                }
                            ]
                        },
                        {
                            nodeId: 111,
                            nodeName: 'DIV id=\'testElementFive\'',
                            reason: undefined,
                            stackTrace: [
                                {
                                    columnNumber: 46,
                                    functionName: 'testFuncs.changeAttributeAndDisplay',
                                    lineNumber: 46,
                                    scriptId: '86',
                                    url: 'https://chromedevtools.github.io/performance-stories/style-invalidations/app.js'
                                }
                            ]
                        },
                        {
                            nodeId: 111,
                            nodeName: 'DIV id=\'testElementFive\'',
                            reason: 'StyleInvalidator',
                            stackTrace: [
                                {
                                    columnNumber: 46,
                                    functionName: 'testFuncs.changeAttributeAndDisplay',
                                    lineNumber: 46,
                                    scriptId: '86',
                                    url: 'https://chromedevtools.github.io/performance-stories/style-invalidations/app.js'
                                }
                            ]
                        },
                        {
                            nodeId: 111,
                            nodeName: 'DIV id=\'testElementFive\'',
                            reason: 'Attribute',
                            stackTrace: [
                                {
                                    columnNumber: 46,
                                    functionName: 'testFuncs.changeAttributeAndDisplay',
                                    lineNumber: 46,
                                    scriptId: '86',
                                    url: 'https://chromedevtools.github.io/performance-stories/style-invalidations/app.js'
                                }
                            ]
                        },
                        {
                            nodeId: 110,
                            nodeName: 'DIV id=\'testElementFour\'',
                            reason: 'Element has pending invalidation list',
                            stackTrace: undefined
                        },
                        {
                            nodeId: 111,
                            nodeName: 'DIV id=\'testElementFive\'',
                            reason: 'Element has pending invalidation list',
                            stackTrace: undefined
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=InvalidationsHandler.test.js.map


}),

}]);