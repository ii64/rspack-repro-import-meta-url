"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_track_appenders_AppenderUtils_test_js"], {
"./panels/timeline/track_appenders/AppenderUtils.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timeline.js */ "./panels/timeline/timeline.js");
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




(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('AppenderUtils', function() {
    var defaultGroupStyle = {
        padding: 4,
        height: 17,
        collapsible: true,
        // This color is same as --sys-color-on-surface in themeColors.css
        color: 'rgb(31 31 31 / 100%)',
        // This color is same as --sys-color-cdt-base-container in themeColors.css
        backgroundColor: 'rgb(253 252 251 / 100%)',
        nestingLevel: 0,
        shareHeaderLine: true
    };
    describe('buildGroupStyle', function() {
        it('builds default GroupStyle correctly', function() {
            var builtGroupStyle = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.buildGroupStyle();
            assert.deepEqual(builtGroupStyle, defaultGroupStyle);
        });
        it('builds GroupStyle with customized fields correctly', function() {
            var gpuGroupStyle = _object_spread({}, defaultGroupStyle);
            gpuGroupStyle.shareHeaderLine = false;
            var builtGroupStyle = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.buildGroupStyle({
                shareHeaderLine: false
            });
            assert.deepEqual(builtGroupStyle, gpuGroupStyle);
        });
    });
    describe('buildTrackHeader', function() {
        var legends = [
            {
                color: 'yellow',
                category: 'test'
            }
        ];
        var trackHeader = {
            startLevel: 0,
            name: 'Header Name',
            style: defaultGroupStyle,
            selectable: true,
            expanded: true,
            showStackContextMenu: true,
            legends: legends,
            jslogContext: 'animations'
        };
        it('builds a track header correctly', function() {
            var builtHeader = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.buildTrackHeader("animations" /* Timeline.CompatibilityTracksAppender.VisualLoggingTrackName.ANIMATIONS */ , /* startLevel= */ 0, 'Header Name', _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.buildGroupStyle(), /* selectable= */ true, /* expanded= */ true, /* showStackContextMenu= */ true, legends);
            assert.deepEqual(builtHeader, trackHeader);
        });
    });
    describe('getFormattedTime', function() {
        it('returns the time info for a entry with no duration correctly', /*#__PURE__*/ _async_to_generator(function() {
            var formattedTime;
            return _ts_generator(this, function(_state) {
                formattedTime = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getFormattedTime(_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.defaultTraceEvent.dur);
                assert.strictEqual(formattedTime, '');
                return [
                    2
                ];
            });
        }));
        it('returns the time info for given total time correctly', /*#__PURE__*/ _async_to_generator(function() {
            var totalTime, formattedTime;
            return _ts_generator(this, function(_state) {
                totalTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000);
                formattedTime = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getFormattedTime(totalTime);
                // The i18n encodes spaces using the u00A0 unicode character.
                assert.strictEqual(formattedTime, '10.00\u00A0ms');
                return [
                    2
                ];
            });
        }));
        it('returns the time info for given total time and self time correctly', /*#__PURE__*/ _async_to_generator(function() {
            var totalTime, selfTime, formattedTime;
            return _ts_generator(this, function(_state) {
                totalTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000);
                selfTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(1000);
                formattedTime = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getFormattedTime(totalTime, selfTime);
                // The i18n encodes spaces using the u00A0 unicode character.
                assert.strictEqual(formattedTime, '10.00\u00A0ms (self 1.00\u00A0ms)');
                return [
                    2
                ];
            });
        }));
        it('returns the time info for same total time and self time correctly', /*#__PURE__*/ _async_to_generator(function() {
            var totalTime, selfTime, formattedTime;
            return _ts_generator(this, function(_state) {
                totalTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000);
                selfTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000);
                formattedTime = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getFormattedTime(totalTime, selfTime);
                // The i18n encodes spaces using the u00A0 unicode character.
                assert.strictEqual(formattedTime, '10.00\u00A0ms');
                return [
                    2
                ];
            });
        }));
    });
    describe('getEventLevel', function() {
        it('returns the level for async events correctly', /*#__PURE__*/ _async_to_generator(function() {
            var lastTimestampByLevel, eventOne, eventTwo, eventThree, level;
            return _ts_generator(this, function(_state) {
                lastTimestampByLevel = [];
                eventOne = _object_spread_props(_object_spread({}, _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.defaultTraceEvent), {
                    ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(0),
                    dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10)
                });
                eventTwo = _object_spread_props(_object_spread({}, _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.defaultTraceEvent), {
                    ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(5),
                    dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10)
                });
                eventThree = _object_spread_props(_object_spread({}, _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.defaultTraceEvent), {
                    ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(20),
                    dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10)
                });
                level = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getEventLevel(eventOne, lastTimestampByLevel);
                // For first event, the track is empty, so it always returns 0.
                assert.strictEqual(level, 0);
                level = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getEventLevel(eventTwo, lastTimestampByLevel);
                // For eventTwo, its start time is smaller than eventOne's end time, so it should be appended to level 1.
                assert.strictEqual(level, 1);
                level = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getEventLevel(eventThree, lastTimestampByLevel);
                // For eventThree, it doesn't overlap with eventOne, so it can fit in level 0.
                assert.strictEqual(level, 0);
                return [
                    2
                ];
            });
        }));
        it('returns the level for sync events correctly', /*#__PURE__*/ _async_to_generator(function() {
            var lastTimestampByLevel, eventOne, eventTwo, eventThree, eventFour, level;
            return _ts_generator(this, function(_state) {
                lastTimestampByLevel = [];
                eventOne = _object_spread_props(_object_spread({}, _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.defaultTraceEvent), {
                    ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(0),
                    dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(30)
                });
                eventTwo = _object_spread_props(_object_spread({}, _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.defaultTraceEvent), {
                    ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(5),
                    dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10)
                });
                eventThree = _object_spread_props(_object_spread({}, _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.defaultTraceEvent), {
                    ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10),
                    dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(2)
                });
                eventFour = _object_spread_props(_object_spread({}, _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.defaultTraceEvent), {
                    ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(20),
                    dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10)
                });
                level = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getEventLevel(eventOne, lastTimestampByLevel);
                // For first event, the track is empty, so it always returns 0.
                assert.strictEqual(level, 0);
                level = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getEventLevel(eventTwo, lastTimestampByLevel);
                // For eventTwo, its time is a subset of the eventOne, so it will be append as eventOne's child.
                assert.strictEqual(level, 1);
                level = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getEventLevel(eventThree, lastTimestampByLevel);
                // For eventTwo, its time is a subset of the eventTwo, so it will be append as eventTwo's child.
                assert.strictEqual(level, 2);
                level = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.AppenderUtils.getEventLevel(eventFour, lastTimestampByLevel);
                // For eventFour, its time is a subset of eventOne but not eventTwo, so it will be append as eventTwo's child.
                assert.strictEqual(level, 1);
                return [
                    2
                ];
            });
        }));
    });
}); //# sourceMappingURL=AppenderUtils.test.js.map


}),

}]);