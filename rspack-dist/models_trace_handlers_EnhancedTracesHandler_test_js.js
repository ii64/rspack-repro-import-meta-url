"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_handlers_EnhancedTracesHandler_test_js"], {
"./models/trace/handlers/EnhancedTracesHandler.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
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


describe('EnhancedTracesHandler', function() {
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.EnhancedTraces.reset();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'enhanced-traces.json.gz')
                    ];
                case 1:
                    events = _state.sent();
                    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.EnhancedTraces.initialize();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.EnhancedTraces.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.EnhancedTraces.finalize()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    afterEach(function() {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.EnhancedTraces.reset();
    });
    it('captures targets from target rundown events', /*#__PURE__*/ _async_to_generator(function() {
        var data;
        return _ts_generator(this, function(_state) {
            data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.EnhancedTraces.data();
            assert.deepEqual(data.targets, [
                {
                    targetId: '21D58E83A5C17916277166140F6A464B',
                    type: 'page',
                    isolate: '12345',
                    pid: 8050,
                    url: 'http://localhost:8080/index.html'
                },
                {
                    targetId: '3E1717BE677B75D0536E292E00D6A34A',
                    type: 'page',
                    isolate: '6789',
                    pid: 8051,
                    url: 'http://localhost:8080/index.html'
                }
            ]);
            return [
                2
            ];
        });
    }));
    it('captures execution context info', /*#__PURE__*/ _async_to_generator(function() {
        var data;
        return _ts_generator(this, function(_state) {
            data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.EnhancedTraces.data();
            assert.deepEqual(data.executionContexts, [
                {
                    id: 1,
                    origin: 'http://localhost:8080',
                    v8Context: 'example context 1',
                    auxData: {
                        frameId: '21D58E83A5C17916277166140F6A464B',
                        isDefault: true,
                        type: 'type'
                    },
                    isolate: '12345'
                },
                {
                    id: 2,
                    origin: 'http://localhost:8080',
                    v8Context: 'example context 2',
                    auxData: {
                        frameId: '21D58E83A5C17916277166140F6A464B',
                        isDefault: true,
                        type: 'type'
                    },
                    isolate: '12345'
                },
                {
                    id: 1,
                    origin: 'http://localhost:8080',
                    v8Context: 'example context 3',
                    auxData: {
                        frameId: '3E1717BE677B75D0536E292E00D6A34A',
                        isDefault: true,
                        type: 'type'
                    },
                    isolate: '6789'
                }
            ]);
            return [
                2
            ];
        });
    }));
    it('captures script info and source text', /*#__PURE__*/ _async_to_generator(function() {
        var data;
        return _ts_generator(this, function(_state) {
            data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.EnhancedTraces.data();
            assert.deepEqual(data.scripts, [
                {
                    scriptId: 1,
                    isolate: '12345',
                    executionContextId: 1,
                    startLine: 0,
                    startColumn: 0,
                    endLine: 1,
                    endColumn: 10,
                    hash: '',
                    isModule: false,
                    url: 'http://localhost:8080/index.html',
                    hasSourceUrl: false,
                    sourceMapUrl: 'http://localhost:8080/source',
                    length: 13,
                    sourceText: 'source text 1',
                    auxData: {
                        frameId: '21D58E83A5C17916277166140F6A464B',
                        isDefault: true,
                        type: 'type'
                    }
                },
                {
                    scriptId: 2,
                    isolate: '12345',
                    executionContextId: 2,
                    startLine: 0,
                    startColumn: 0,
                    endLine: 1,
                    endColumn: 10,
                    hash: '',
                    isModule: false,
                    url: 'http://localhost:8080/index.html',
                    hasSourceUrl: false,
                    sourceMapUrl: undefined,
                    length: 13,
                    sourceText: 'source text 2',
                    auxData: {
                        frameId: '21D58E83A5C17916277166140F6A464B',
                        isDefault: true,
                        type: 'type'
                    }
                },
                {
                    scriptId: 1,
                    isolate: '6789',
                    executionContextId: 1,
                    startLine: 0,
                    startColumn: 0,
                    endLine: 1,
                    endColumn: 10,
                    hash: '',
                    isModule: false,
                    url: 'http://localhost:8080/index.html',
                    hasSourceUrl: false,
                    sourceMapUrl: undefined,
                    length: 13,
                    sourceText: 'source text 3',
                    auxData: {
                        frameId: '3E1717BE677B75D0536E292E00D6A34A',
                        isDefault: true,
                        type: 'type'
                    }
                }
            ]);
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=EnhancedTracesHandler.test.js.map


}),

}]);