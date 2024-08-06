"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_SaveFileFormatter_test_js"], {
"./panels/timeline/SaveFileFormatter.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline.js */ "./panels/timeline/timeline.js");
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


describe('SaveFileFormatter', function() {
    var assertValidJSON = function assertValidJSON(input) {
        try {
            JSON.parse(input);
        } catch (e) {
            assert.fail('Parsing input as JSON failed');
        }
    };
    describe('arrayOfObjectsJsonGenerator', function() {
        it('generates JSON where each event is on its own line', /*#__PURE__*/ _async_to_generator(function() {
            var eventOne, eventTwo, formatted;
            return _ts_generator(this, function(_state) {
                eventOne = _object_spread_props(_object_spread({}, _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.defaultTraceEvent), {
                    name: 'event_one'
                });
                eventTwo = _object_spread_props(_object_spread({}, _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.defaultTraceEvent), {
                    name: 'event_two'
                });
                formatted = Array.from(_timeline_js__WEBPACK_IMPORTED_MODULE_1__.SaveFileFormatter.arrayOfObjectsJsonGenerator([
                    eventOne,
                    eventTwo
                ])).join('');
                assertValidJSON(formatted);
                assert.strictEqual(formatted, '[\n  {"name":"event_one","tid":0,"pid":0,"ts":0,"cat":"test","ph":"M"},\n  {"name":"event_two","tid":0,"pid":0,"ts":0,"cat":"test","ph":"M"}\n]');
                return [
                    2
                ];
            });
        }));
    });
    describe('traceJsonGenerator', function() {
        it('contains top level keys for the events and for the metadata', /*#__PURE__*/ _async_to_generator(function() {
            var eventOne, eventTwo, events, metadata, formatted;
            return _ts_generator(this, function(_state) {
                eventOne = _object_spread_props(_object_spread({}, _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.defaultTraceEvent), {
                    name: 'event_one'
                });
                eventTwo = _object_spread_props(_object_spread({}, _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.defaultTraceEvent), {
                    name: 'event_two'
                });
                events = [
                    eventOne,
                    eventTwo
                ];
                metadata = {
                    source: 'DevTools',
                    startTime: '1234',
                    networkThrottling: '4',
                    cpuThrottling: 1,
                    hardwareConcurrency: 1,
                    enhancedTraceVersion: 1
                };
                formatted = Array.from(_timeline_js__WEBPACK_IMPORTED_MODULE_1__.SaveFileFormatter.traceJsonGenerator(events, metadata)).join('');
                assertValidJSON(formatted);
                assert.strictEqual(formatted, '{"metadata": {\n  "source": "DevTools",\n  "startTime": "1234",\n  "networkThrottling": "4",\n  "cpuThrottling": 1,\n  "hardwareConcurrency": 1,\n  "enhancedTraceVersion": 1\n},\n"traceEvents": [\n  {"name":"event_one","tid":0,"pid":0,"ts":0,"cat":"test","ph":"M"},\n  {"name":"event_two","tid":0,"pid":0,"ts":0,"cat":"test","ph":"M"}\n]}\n');
                return [
                    2
                ];
            });
        }));
        it('will emit {} for the metadata if none is provided', /*#__PURE__*/ _async_to_generator(function() {
            var eventOne, eventTwo, events, formatted;
            return _ts_generator(this, function(_state) {
                eventOne = _object_spread_props(_object_spread({}, _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.defaultTraceEvent), {
                    name: 'event_one'
                });
                eventTwo = _object_spread_props(_object_spread({}, _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.defaultTraceEvent), {
                    name: 'event_two'
                });
                events = [
                    eventOne,
                    eventTwo
                ];
                formatted = Array.from(_timeline_js__WEBPACK_IMPORTED_MODULE_1__.SaveFileFormatter.traceJsonGenerator(events, null)).join('');
                assertValidJSON(formatted);
                assert.strictEqual(formatted, '{"metadata": {},\n"traceEvents": [\n  {"name":"event_one","tid":0,"pid":0,"ts":0,"cat":"test","ph":"M"},\n  {"name":"event_two","tid":0,"pid":0,"ts":0,"cat":"test","ph":"M"}\n]}\n');
                return [
                    2
                ];
            });
        }));
    });
}); //# sourceMappingURL=SaveFileFormatter.test.js.map


}),

}]);