"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_extras_FilmStrip_test_js"], {
"./models/trace/extras/FilmStrip.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
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



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('FilmStrip', function() {
    it('identifies the frames from a trace', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, filmStrip;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    filmStrip = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.fromTraceData(traceData);
                    assert.lengthOf(filmStrip.frames, 5);
                    return [
                        2
                    ];
            }
        });
    }));
    it('caches the film strip based on the trace data and the zero time', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, filmStrip1, filmStrip2, filmStrip3, filmStrip4;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    filmStrip1 = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.fromTraceData(traceData);
                    filmStrip2 = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.fromTraceData(traceData);
                    // It is from cache so you get back the exact same object.
                    assert.strictEqual(filmStrip1, filmStrip2);
                    filmStrip3 = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.fromTraceData(traceData, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(0));
                    filmStrip4 = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.fromTraceData(traceData, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(5));
                    // Not equal as the calls had different start times.
                    assert.notStrictEqual(filmStrip3, filmStrip4);
                    return [
                        2
                    ];
            }
        });
    }));
    it('exposes the snapshot string for each frame', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, filmStrip;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    filmStrip = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.fromTraceData(traceData);
                    assert.isTrue(filmStrip.frames.every(function(frame) {
                        return typeof frame.screenshotEvent.args.dataUri === 'string' && frame.screenshotEvent.args.dataUri.length > 0;
                    }));
                    return [
                        2
                    ];
            }
        });
    }));
    it('can use a custom zero time to filter out screenshots', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, filmStrip, newCustomZeroTime, newFilmStrip;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    filmStrip = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.fromTraceData(traceData);
                    // Set a custom zero time after the first screenshot and ensure that we now only have four events.
                    newCustomZeroTime = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(filmStrip.frames[0].screenshotEvent.ts + 1000);
                    newFilmStrip = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.fromTraceData(traceData, newCustomZeroTime);
                    // Check that the new film strip is all the frames other than the first, now we have set a custom time.
                    assert.deepEqual(newFilmStrip.frames.map(function(f) {
                        return f.screenshotEvent.args.dataUri;
                    }), [
                        filmStrip.frames[1].screenshotEvent.args.dataUri,
                        filmStrip.frames[2].screenshotEvent.args.dataUri,
                        filmStrip.frames[3].screenshotEvent.args.dataUri,
                        filmStrip.frames[4].screenshotEvent.args.dataUri
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can return the frame closest to a given timestamp', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, filmStrip, frameTimestamps, timestampNearestFirstFrame, timestampNearestThirdFrame, timestampBeforeAnyFrames;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    filmStrip = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.fromTraceData(traceData);
                    frameTimestamps = filmStrip.frames.map(function(frame) {
                        return frame.screenshotEvent.ts;
                    });
                    assert.deepEqual(frameTimestamps, [
                        1020034823345,
                        1020034961883,
                        1020035045298,
                        1020035061981,
                        1020035112030
                    ]);
                    timestampNearestFirstFrame = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(frameTimestamps[0] + 10);
                    assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.frameClosestToTimestamp(filmStrip, timestampNearestFirstFrame), filmStrip.frames.at(0));
                    timestampNearestThirdFrame = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(frameTimestamps[2] + 10);
                    assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.frameClosestToTimestamp(filmStrip, timestampNearestThirdFrame), filmStrip.frames.at(2));
                    timestampBeforeAnyFrames = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(frameTimestamps[0] - 100);
                    assert.isNull(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.frameClosestToTimestamp(filmStrip, timestampBeforeAnyFrames));
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=FilmStrip.test.js.map


}),

}]);