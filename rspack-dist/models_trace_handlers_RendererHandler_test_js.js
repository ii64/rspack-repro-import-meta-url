"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_handlers_RendererHandler_test_js"], {
"./models/trace/handlers/RendererHandler.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../panels/timeline/timeline.js */ "./panels/timeline/timeline.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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





var MAIN_FRAME_PID = 2154214;
var SUB_FRAME_PID = 2236065;
var SUB_FRAME_PID_2 = 2236084;
var SUB_FRAME_PID_3 = 2236123;
function handleEventsFromTraceFile(context, file) {
    return _handleEventsFromTraceFile.apply(this, arguments);
}
function _handleEventsFromTraceFile() {
    _handleEventsFromTraceFile = _async_to_generator(function(context, file) {
        var traceData;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(context, file)
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    return [
                        2,
                        traceData
                    ];
            }
        });
    });
    return _handleEventsFromTraceFile.apply(this, arguments);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('RendererHandler', function() {
    var _this = this;
    var _this1 = this;
    it('finds all the renderers in a real world profile', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, renderers, pids, origins, isOnMainFrame;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        handleEventsFromTraceFile(_this1, 'multiple-navigations-with-iframes.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), renderers = _ref.Renderer;
                    assert.strictEqual(renderers.processes.size, 4);
                    pids = _to_consumable_array(renderers.processes).map(function(param) {
                        var _param = _sliced_to_array(param, 1), pid = _param[0];
                        return pid;
                    });
                    assert.deepStrictEqual(pids, [
                        MAIN_FRAME_PID,
                        SUB_FRAME_PID,
                        SUB_FRAME_PID_2,
                        SUB_FRAME_PID_3
                    ], 'Process IDs do not match expectations');
                    origins = _to_consumable_array(renderers.processes).map(function(param) {
                        var _param = _sliced_to_array(param, 2), process = _param[1];
                        return process.url ? new URL(process.url).origin : null;
                    });
                    assert.deepEqual(origins, [
                        'http://localhost:5000',
                        'https://www.example.com',
                        'https://www.example.com',
                        'https://www.example.com'
                    ], 'Process origins do not meet expectations');
                    // Assert on whether it has correctly detected a given process to be on the
                    // main frame or in a subframe.
                    isOnMainFrame = _to_consumable_array(renderers.processes).map(function(param) {
                        var _param = _sliced_to_array(param, 2), process = _param[1];
                        return process.isOnMainFrame;
                    });
                    assert.deepStrictEqual(isOnMainFrame, [
                        true,
                        false,
                        false,
                        false
                    ], 'Processes are incorrectly assigned as being on the main frame');
                    return [
                        2
                    ];
            }
        });
    }));
    var _this2 = this;
    it('finds all the main frame threads in a real world profile', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, renderers, frame, names;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        handleEventsFromTraceFile(_this2, 'multiple-navigations-with-iframes.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), renderers = _ref.Renderer;
                    frame = renderers.processes.get(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(MAIN_FRAME_PID));
                    names = _to_consumable_array(frame.threads).map(function(param) {
                        var _param = _sliced_to_array(param, 2), thread = _param[1];
                        return thread.name;
                    }).sort();
                    assert.deepEqual(names, [
                        'Chrome_ChildIOThread',
                        'Compositor',
                        'CompositorTileWorker1',
                        'CompositorTileWorker2',
                        'CompositorTileWorker3',
                        'CompositorTileWorker4',
                        'CrRendererMain',
                        'ThreadPoolForegroundWorker',
                        'ThreadPoolForegroundWorker',
                        'ThreadPoolForegroundWorker',
                        'ThreadPoolForegroundWorker',
                        'ThreadPoolForegroundWorker',
                        'ThreadPoolForegroundWorker',
                        'ThreadPoolForegroundWorker',
                        'ThreadPoolForegroundWorker',
                        'ThreadPoolServiceThread'
                    ], 'Main frame thread names do not meet expectations before navigation');
                    return [
                        2
                    ];
            }
        });
    }));
    var _this3 = this;
    it('finds all the sub frame threads in a real world profile', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, renderers, frame, names;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        handleEventsFromTraceFile(_this3, 'multiple-navigations-with-iframes.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), renderers = _ref.Renderer;
                    frame = renderers.processes.get(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(SUB_FRAME_PID));
                    names = _to_consumable_array(frame.threads).map(function(param) {
                        var _param = _sliced_to_array(param, 2), thread = _param[1];
                        return thread.name;
                    }).sort();
                    assert.deepEqual(names, [
                        'Chrome_ChildIOThread',
                        'Compositor',
                        'CrRendererMain',
                        'ThreadPoolServiceThread'
                    ], 'Main frame thread names do not meet expectations after navigation');
                    return [
                        2
                    ];
            }
        });
    }));
    var _this4 = this;
    it('finds all the roots on the main frame\'s main thread in a real world profile', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, renderers, frame, thread, tree;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        handleEventsFromTraceFile(_this4, 'multiple-navigations-with-iframes.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), renderers = _ref.Renderer;
                    frame = renderers.processes.get(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(MAIN_FRAME_PID));
                    thread = _to_consumable_array(frame.threads.values()).find(function(thread) {
                        return thread.name === 'CrRendererMain';
                    });
                    if (!thread) {
                        assert(false, 'Main thread was not found');
                        return [
                            2
                        ];
                    }
                    tree = thread.tree;
                    if (!tree) {
                        assert(false, 'Main thread has no tree of events');
                        return [
                            2
                        ];
                    }
                    assert.deepEqual(_to_consumable_array(tree.roots).map(function(root) {
                        return root.id;
                    }), [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        16,
                        18,
                        29,
                        38,
                        49,
                        58,
                        77,
                        183,
                        184,
                        185,
                        186,
                        188,
                        189,
                        190,
                        199,
                        200,
                        201,
                        202,
                        211,
                        212,
                        213,
                        214,
                        229,
                        230,
                        232,
                        237,
                        239,
                        240,
                        242,
                        251,
                        252,
                        261,
                        264,
                        265,
                        266,
                        267,
                        268,
                        279,
                        282,
                        284,
                        285,
                        286,
                        287,
                        288,
                        289,
                        290,
                        293,
                        294,
                        295,
                        296,
                        297,
                        298,
                        299,
                        300,
                        301,
                        302,
                        303,
                        304,
                        305,
                        306,
                        328,
                        329,
                        330,
                        331,
                        332,
                        333,
                        334,
                        335,
                        336,
                        337,
                        338,
                        339,
                        340,
                        341,
                        342,
                        343,
                        344,
                        345,
                        354,
                        355,
                        356,
                        359,
                        389,
                        408,
                        409,
                        410,
                        411,
                        412,
                        413,
                        414,
                        415,
                        416,
                        417,
                        418,
                        419,
                        420,
                        421,
                        422,
                        423,
                        424,
                        425,
                        426,
                        427,
                        428,
                        429,
                        430,
                        431,
                        432,
                        433,
                        441,
                        442,
                        443,
                        444,
                        445,
                        446,
                        447,
                        448,
                        455,
                        456,
                        457,
                        458,
                        459,
                        460,
                        461,
                        462,
                        463,
                        464,
                        465,
                        466,
                        467,
                        468,
                        469,
                        479,
                        480,
                        481,
                        482,
                        483,
                        484,
                        485,
                        492,
                        493,
                        494,
                        495,
                        496,
                        498,
                        506,
                        507,
                        508,
                        509,
                        510,
                        511,
                        516,
                        517,
                        518,
                        519,
                        520,
                        521,
                        522,
                        523,
                        524,
                        525,
                        526,
                        538,
                        540,
                        541,
                        552,
                        555,
                        556,
                        565,
                        566,
                        575,
                        576,
                        585,
                        586,
                        595,
                        596,
                        605,
                        606,
                        615,
                        616,
                        625,
                        626,
                        635,
                        636,
                        645,
                        646,
                        657,
                        660,
                        661,
                        662,
                        663,
                        674,
                        677,
                        678,
                        679,
                        680,
                        689,
                        690,
                        691,
                        692,
                        701,
                        702,
                        711,
                        712,
                        721,
                        722,
                        733,
                        734,
                        737,
                        738,
                        739,
                        740,
                        749,
                        750,
                        751,
                        760,
                        761,
                        762,
                        771,
                        772,
                        773,
                        782,
                        783,
                        784,
                        793,
                        794,
                        795,
                        796,
                        797,
                        808,
                        809,
                        810,
                        811,
                        835,
                        843,
                        844,
                        845,
                        846,
                        848,
                        861,
                        869,
                        870,
                        871,
                        872,
                        873,
                        874,
                        875,
                        876,
                        877,
                        878,
                        881,
                        882,
                        883,
                        884,
                        885,
                        886,
                        887,
                        888,
                        889,
                        890,
                        904,
                        905,
                        906,
                        907,
                        908,
                        909,
                        910,
                        911,
                        912,
                        913,
                        914,
                        915,
                        916,
                        917,
                        918,
                        919,
                        920,
                        921,
                        922,
                        931,
                        932,
                        933,
                        936,
                        966,
                        967,
                        983,
                        984,
                        985,
                        986,
                        987,
                        988,
                        989,
                        990,
                        991,
                        992,
                        993,
                        994,
                        995,
                        996,
                        997,
                        998,
                        999,
                        1000,
                        1001,
                        1002,
                        1003,
                        1004,
                        1005,
                        1006,
                        1007,
                        1008,
                        1009,
                        1010,
                        1011,
                        1012,
                        1020,
                        1021,
                        1022,
                        1023,
                        1024,
                        1031,
                        1032,
                        1033,
                        1034,
                        1035,
                        1036,
                        1037,
                        1038,
                        1048,
                        1049,
                        1050,
                        1051,
                        1052,
                        1053,
                        1054,
                        1055,
                        1056,
                        1057,
                        1064,
                        1065,
                        1066,
                        1068,
                        1069,
                        1077,
                        1078,
                        1079,
                        1080,
                        1081,
                        1082,
                        1083,
                        1084,
                        1085,
                        1086,
                        1087,
                        1088,
                        1089,
                        1090,
                        1091,
                        1092,
                        1102,
                        1104,
                        1105,
                        1106,
                        1107,
                        1116,
                        1117,
                        1118,
                        1127,
                        1128,
                        1129,
                        1138,
                        1139,
                        1140,
                        1141,
                        1150,
                        1151,
                        1152,
                        1153,
                        1154,
                        1165,
                        1166,
                        1167,
                        1176,
                        1177,
                        1178,
                        1189,
                        1192,
                        1193,
                        1194,
                        1203,
                        1204,
                        1205,
                        1206,
                        1215,
                        1216,
                        1225,
                        1226,
                        1235,
                        1236,
                        1237,
                        1246,
                        1247,
                        1256,
                        1257,
                        1266,
                        1267,
                        1276,
                        1277,
                        1286,
                        1287,
                        1298,
                        1301,
                        1302,
                        1303,
                        1304,
                        1313,
                        1314,
                        1315,
                        1324,
                        1325,
                        1326,
                        1335,
                        1336,
                        1337,
                        1348,
                        1351,
                        1352,
                        1353,
                        1362,
                        1364,
                        1365,
                        1366,
                        1367,
                        1368,
                        1369,
                        1370,
                        1371,
                        1378
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    var _this5 = this;
    it('finds all the roots on the sub frame\'s main thread in a real world profile', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, renderers, frame, thread, tree;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        handleEventsFromTraceFile(_this5, 'multiple-navigations-with-iframes.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), renderers = _ref.Renderer;
                    frame = renderers.processes.get(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(SUB_FRAME_PID));
                    thread = _to_consumable_array(frame.threads.values()).find(function(thread) {
                        return thread.name === 'CrRendererMain';
                    });
                    if (!thread) {
                        assert(false, 'Main thread was not found');
                        return [
                            2
                        ];
                    }
                    tree = thread.tree;
                    if (!tree) {
                        assert(false, 'Main thread has no tree of events');
                        return [
                            2
                        ];
                    }
                    assert.deepEqual(_to_consumable_array(tree.roots).map(function(root) {
                        return root.id;
                    }), [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    var _this6 = this;
    it('builds a hierarchy for the main frame\'s main thread in a real world profile', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, renderers, frame, thread, tree, isRoot, isInstant, isLong, isIncluded;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        handleEventsFromTraceFile(_this6, 'multiple-navigations-with-iframes.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), renderers = _ref.Renderer;
                    frame = renderers.processes.get(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(MAIN_FRAME_PID));
                    thread = _to_consumable_array(frame.threads.values()).find(function(thread) {
                        return thread.name === 'CrRendererMain';
                    });
                    if (!thread) {
                        assert(false, 'Main thread was not found');
                        return [
                            2
                        ];
                    }
                    tree = thread.tree;
                    if (!tree) {
                        assert(false, 'Main thread has no tree of events');
                        return [
                            2
                        ];
                    }
                    isRoot = function(node) {
                        return node.depth === 0;
                    };
                    isInstant = function(event) {
                        return _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.isTraceEventInstant(event);
                    };
                    isLong = function(event) {
                        return _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.isTraceEventComplete(event) && event.dur > 1000;
                    };
                    isIncluded = function(node, event) {
                        return (!isRoot(node) || isInstant(event) || isLong(event)) && Boolean(_panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_0__.EventUICategory.getEventStyle(event.name));
                    };
                    assert.strictEqual((0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.prettyPrint)(tree, isIncluded), "\n............\n-RunTask [2.21ms]\n.\n  -MajorGC [2.148ms]\n...........................................................\n-RunTask [15.436ms]\n  -FrameStartedLoading [0ms]\n  -EventDispatch (pagehide) [0.018ms]\n  -EventDispatch (visibilitychange) [0.01ms]\n  -EventDispatch (webkitvisibilitychange) [0.006ms]\n.\n  -EventDispatch (unload) [0.006ms]\n.\n  -ResourceSendRequest [0ms]\n  -ResourceReceiveResponse [0ms]\n...\n  -ProfileCall (anonymous) [0.205ms]\n    -ProfileCall (anonymous) [0.205ms]\n.......................\n-RunTask [3.402ms]\n  -ParseHTML [2.593ms]\n....\n    -ParseHTML [0.064ms]\n...\n    -EventDispatch (readystatechange) [0.008ms]\n.\n    -EventDispatch (DOMContentLoaded) [0.004ms]\n.\n    -MarkDOMContent [0ms]\n.\n    -EventDispatch (readystatechange) [0.01ms]\n    -EventDispatch (beforeunload) [0.013ms]\n    -FrameStartedLoading [0ms]\n.\n  -ParseHTML [0.01ms]\n..\n  -EventDispatch (readystatechange) [0.008ms]\n.\n  -EventDispatch (DOMContentLoaded) [0.035ms]\n.\n  -UpdateLayoutTree [0.373ms]\n    -InvalidateLayout [0ms]\n  -MarkDOMContent [0ms]\n-RunTask [2.675ms]\n  -BeginMainThreadFrame [0ms]\n  -Layout [0.854ms]\n    -InvalidateLayout [0ms]\n    -Layout [0.302ms]\n      -UpdateLayoutTree [0.149ms]\n.\n  -UpdateLayerTree [0.338ms]\n  -Paint [0.203ms]\n..\n  -firstPaint [0ms]\n  -firstContentfulPaint [0ms]\n.....\n  -largestContentfulPaint::Candidate [0ms]\n.................................\n-RunTask [1.605ms]\n  -EventDispatch (pagehide) [0.014ms]\n  -EventDispatch (visibilitychange) [0.038ms]\n  -EventDispatch (webkitvisibilitychange) [0.009ms]\n  -EventDispatch (unload) [0.004ms]\n.\n  -ScheduleStyleRecalculation [0ms]\n..............\n-RunTask [1.231ms]\n  -BeginMainThreadFrame [0ms]\n  -UpdateLayoutTree [0.093ms]\n.\n  -UpdateLayerTree [0.186ms]\n  -Paint [0.063ms]\n  -Paint [0.084ms]\n  -UpdateLayer [0.022ms]\n  -UpdateLayer [0.006ms]\n  -CompositeLayers [0.311ms]\n............\n-RunTask [1.663ms]\n.\n  -EventDispatch (readystatechange) [0.009ms]\n.\n  -EventDispatch (load) [0.014ms]\n.\n  -MarkLoad [0ms]\n  -EventDispatch (pageshow) [0.007ms]\n.......................................................................................\n-RunTask [1.42ms]\n.\n  -UpdateLayerTree [0.023ms]\n  -HitTest [0.057ms]\n  -EventDispatch (mousemove) [0.018ms]\n.\n  -UpdateLayerTree [0.028ms]\n  -HitTest [0.022ms]\n.\n  -UpdateLayerTree [0.01ms]\n  -HitTest [0.002ms]\n  -ScheduleStyleRecalculation [0ms]\n  -EventDispatch (mousedown) [0.018ms]\n  -UpdateLayoutTree [0.146ms]\n.\n  -UpdateLayerTree [0.031ms]\n  -HitTest [0.016ms]\n  -ScheduleStyleRecalculation [0ms]\n  -UpdateLayoutTree [0.031ms]\n  -EventDispatch (focus) [0.014ms]\n  -EventDispatch (focusin) [0.005ms]\n  -EventDispatch (DOMFocusIn) [0.005ms]\n.\n  -UpdateLayerTree [0.029ms]\n.....\n-RunTask [1.034ms]\n.\n  -UpdateLayerTree [0.021ms]\n  -HitTest [0.038ms]\n  -ScheduleStyleRecalculation [0ms]\n  -EventDispatch (mouseup) [0.016ms]\n  -EventDispatch (click) [0.44ms]\n    -EventDispatch (beforeunload) [0.009ms]\n    -FrameStartedLoading [0ms]\n.\n  -UpdateLayoutTree [0.137ms]\n.\n  -UpdateLayerTree [0.03ms]\n....................\n-RunTask [8.203ms]\n  -EventDispatch (pagehide) [0.016ms]\n  -EventDispatch (visibilitychange) [0.006ms]\n  -EventDispatch (webkitvisibilitychange) [0.004ms]\n  -EventDispatch (unload) [0.008ms]\n..\n  -ResourceSendRequest [0ms]\n  -ResourceSendRequest [0ms]\n  -ResourceReceiveResponse [0ms]\n..........................\n-RunTask [2.996ms]\n  -ParseHTML [2.368ms]\n....\n    -ParseHTML [0.074ms]\n...\n    -EventDispatch (readystatechange) [0.01ms]\n.\n    -EventDispatch (DOMContentLoaded) [0.005ms]\n.\n    -MarkDOMContent [0ms]\n.\n    -EventDispatch (readystatechange) [0.008ms]\n    -EventDispatch (beforeunload) [0.009ms]\n    -FrameStartedLoading [0ms]\n.\n  -ParseHTML [0.009ms]\n..\n  -EventDispatch (readystatechange) [0.007ms]\n.\n  -EventDispatch (DOMContentLoaded) [0.005ms]\n.\n  -UpdateLayoutTree [0.301ms]\n    -InvalidateLayout [0ms]\n  -MarkDOMContent [0ms]\n.\n-RunTask [1.897ms]\n  -BeginMainThreadFrame [0ms]\n  -Layout [0.44ms]\n    -InvalidateLayout [0ms]\n.\n  -UpdateLayerTree [0.247ms]\n  -Paint [0.289ms]\n..\n  -firstPaint [0ms]\n  -firstContentfulPaint [0ms]\n..\n  -largestContentfulPaint::Candidate [0ms]\n....................................\n-RunTask [1.304ms]\n  -EventDispatch (pagehide) [0.016ms]\n  -EventDispatch (visibilitychange) [0.009ms]\n  -EventDispatch (webkitvisibilitychange) [0.004ms]\n  -EventDispatch (unload) [0.015ms]\n.\n  -ScheduleStyleRecalculation [0ms]\n......................................................................................................................");
                    return [
                        2
                    ];
            }
        });
    }));
    var _this7 = this;
    it('builds a hierarchy for the sub frame\'s main thread in a real world profile', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, renderers, frame, thread, tree, isIncluded;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        handleEventsFromTraceFile(_this7, 'multiple-navigations-with-iframes.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), renderers = _ref.Renderer;
                    frame = renderers.processes.get(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(SUB_FRAME_PID));
                    thread = _to_consumable_array(frame.threads.values()).find(function(thread) {
                        return thread.name === 'CrRendererMain';
                    });
                    if (!thread) {
                        assert(false, 'Main thread was not found');
                        return [
                            2
                        ];
                    }
                    tree = thread.tree;
                    if (!tree) {
                        assert(false, 'Main thread has no tree of events');
                        return [
                            2
                        ];
                    }
                    isIncluded = function(_node, event) {
                        return Boolean(_panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_0__.EventUICategory.getEventStyle(event.name));
                    };
                    assert.strictEqual((0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.prettyPrint)(tree, isIncluded), "\n-RunTask [0.13ms]\n-RunTask [0.005ms]\n-RunTask [0.009ms]\n-RunTask [0.065ms]\n-RunTask [0.084ms]\n-RunTask [0.041ms]\n-RunTask [0.057ms]\n-RunTask [0.021ms]\n-RunTask [0.009ms]\n-RunTask [0.065ms]\n-RunTask [0.078ms]\n-RunTask [0.043ms]\n-RunTask [0.077ms]\n  -ScheduleStyleRecalculation [0ms]\n-RunTask [0.415ms]\n-RunTask [0ms]\n-EventDispatch (pagehide) [0.012ms]\n-EventDispatch (visibilitychange) [0.007ms]\n-EventDispatch (webkitvisibilitychange) [0.016ms]\n-EventDispatch (unload) [0.007ms]\n.");
                    return [
                        2
                    ];
            }
        });
    }));
    var _this8 = this;
    it('has some correct known roots for the main frame\'s main thread in a real world profile', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, renderers, frame, thread, tree, event0, event1, eventLast;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        handleEventsFromTraceFile(_this8, 'multiple-navigations-with-iframes.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), renderers = _ref.Renderer;
                    frame = renderers.processes.get(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(MAIN_FRAME_PID));
                    thread = _to_consumable_array(frame.threads.values()).find(function(thread) {
                        return thread.name === 'CrRendererMain';
                    });
                    if (!thread) {
                        assert(false, 'Main thread was not found');
                        return [
                            2
                        ];
                    }
                    tree = thread.tree;
                    if (!tree) {
                        assert(false, 'Main thread has no tree of events');
                        return [
                            2
                        ];
                    }
                    event0 = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getRootAt)(thread, 1).entry;
                    assert.deepEqual(event0, {
                        'args': {},
                        'cat': 'disabled-by-default-devtools.timeline',
                        'dur': 132,
                        'name': 'RunTask',
                        'ph': 'X',
                        'pid': 2154214,
                        'tdur': 131,
                        'tid': 1,
                        'ts': 643492822363,
                        'tts': 291450,
                        'selfTime': 132
                    });
                    event1 = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getRootAt)(thread, 2).entry;
                    assert.deepEqual(event1, {
                        'args': {},
                        'cat': 'disabled-by-default-devtools.timeline',
                        'dur': 4,
                        'name': 'RunTask',
                        'ph': 'X',
                        'pid': 2154214,
                        'tdur': 4,
                        'tid': 1,
                        'ts': 643492822500,
                        'tts': 291586,
                        'selfTime': 4
                    });
                    eventLast = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getRootAt)(thread, tree.roots.size - 1).entry;
                    assert.deepEqual(eventLast, {
                        'args': {},
                        'cat': 'disabled-by-default-devtools.timeline',
                        'dur': 67,
                        'name': 'RunTask',
                        'ph': 'X',
                        'pid': 2154214,
                        'tdur': 67,
                        'tid': 1,
                        'ts': 643499551460,
                        'tts': 949032,
                        'selfTime': 35
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    var _this9 = this;
    it('has some correct known roots for the sub frame\'s main thread in a real world profile', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, renderers, frame, thread, tree, event0, event1, event2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        handleEventsFromTraceFile(_this9, 'multiple-navigations-with-iframes.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), renderers = _ref.Renderer;
                    frame = renderers.processes.get(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(SUB_FRAME_PID));
                    thread = _to_consumable_array(frame.threads.values()).find(function(thread) {
                        return thread.name === 'CrRendererMain';
                    });
                    if (!thread) {
                        assert(false, 'Main thread was not found');
                        return [
                            2
                        ];
                    }
                    tree = thread.tree;
                    if (!tree) {
                        assert(false, 'Main thread has no tree of events');
                        return [
                            2
                        ];
                    }
                    event0 = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getRootAt)(thread, 0).entry;
                    assert.deepEqual(event0, {
                        'args': {},
                        'cat': 'disabled-by-default-devtools.timeline',
                        'dur': 130,
                        'name': 'RunTask',
                        'ph': 'X',
                        'pid': 2236065,
                        'tdur': 129,
                        'tid': 1,
                        'ts': 643492822099,
                        'tts': 62157,
                        'selfTime': 130
                    });
                    event1 = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getRootAt)(thread, 1).entry;
                    assert.deepEqual(event1, {
                        'args': {},
                        'cat': 'disabled-by-default-devtools.timeline',
                        'dur': 5,
                        'name': 'RunTask',
                        'ph': 'X',
                        'pid': 2236065,
                        'tdur': 5,
                        'tid': 1,
                        'ts': 643492822234,
                        'tts': 62291,
                        'selfTime': 5
                    });
                    event2 = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getRootAt)(thread, 2).entry;
                    assert.deepEqual(event2, {
                        'args': {},
                        'cat': 'disabled-by-default-devtools.timeline',
                        'dur': 9,
                        'name': 'RunTask',
                        'ph': 'X',
                        'pid': 2236065,
                        'tdur': 9,
                        'tid': 1,
                        'ts': 643492822242,
                        'tts': 62299,
                        'selfTime': 9
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('can correctly sort a simple list of complete events', /*#__PURE__*/ _async_to_generator(function() {
        var data;
        return _ts_generator(this, function(_state) {
            data = [
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('d0', 2, 1),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('b0', 1, 1),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('a0', 0, 1),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('a1', 0, 0.5),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('a2', 0.5, 0.5),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('c0', 1.5, 0.5),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('a4', 0.99, 0.01),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('b1', 1, 0.01),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('a3', 0.5, 0.25)
            ];
            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.Trace.sortTraceEventsInPlace(data);
            assert.deepEqual(data.map(function(e) {
                return {
                    name: e.name,
                    ts: e.ts,
                    dur: e.dur
                };
            }), [
                {
                    'name': 'a0',
                    'ts': 0,
                    'dur': 1
                },
                {
                    'name': 'a1',
                    'ts': 0,
                    'dur': 0.5
                },
                {
                    'name': 'a2',
                    'ts': 0.5,
                    'dur': 0.5
                },
                {
                    'name': 'a3',
                    'ts': 0.5,
                    'dur': 0.25
                },
                {
                    'name': 'a4',
                    'ts': 0.99,
                    'dur': 0.01
                },
                {
                    'name': 'b0',
                    'ts': 1,
                    'dur': 1
                },
                {
                    'name': 'b1',
                    'ts': 1,
                    'dur': 0.01
                },
                {
                    'name': 'c0',
                    'ts': 1.5,
                    'dur': 0.5
                },
                {
                    'name': 'd0',
                    'ts': 2,
                    'dur': 1
                }
            ]);
            return [
                2
            ];
        });
    }));
    it('can correctly sort a simple list of complete events interspersed with instant events', /*#__PURE__*/ _async_to_generator(function() {
        var data;
        return _ts_generator(this, function(_state) {
            data = [
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('d0', 2, 1),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeInstantEvent)('i0', 0),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('b0', 1, 1),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeInstantEvent)('i1', 0.01),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('a0', 0, 1),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeInstantEvent)('i2', 0.5),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('a1', 0, 0.5),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeInstantEvent)('i3', 0.99),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('a2', 0.5, 0.5),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeInstantEvent)('i4', 1),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('c0', 1.5, 0.5),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeInstantEvent)('i5', 1.75),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('a4', 0.99, 0.01),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeInstantEvent)('i6', 1.99),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('b1', 1, 0.01),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeInstantEvent)('i7', 2),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('a3', 0.5, 0.25),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeInstantEvent)('i8', 2.01)
            ];
            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.Trace.sortTraceEventsInPlace(data);
            assert.deepEqual(data.map(function(e) {
                return {
                    name: e.name,
                    ts: e.ts,
                    dur: e.dur
                };
            }), [
                {
                    'name': 'a0',
                    'ts': 0,
                    'dur': 1
                },
                {
                    'name': 'a1',
                    'ts': 0,
                    'dur': 0.5
                },
                {
                    'name': 'i0',
                    'ts': 0,
                    'dur': undefined
                },
                {
                    'name': 'i1',
                    'ts': 0.01,
                    'dur': undefined
                },
                {
                    'name': 'a2',
                    'ts': 0.5,
                    'dur': 0.5
                },
                {
                    'name': 'a3',
                    'ts': 0.5,
                    'dur': 0.25
                },
                {
                    'name': 'i2',
                    'ts': 0.5,
                    'dur': undefined
                },
                {
                    'name': 'a4',
                    'ts': 0.99,
                    'dur': 0.01
                },
                {
                    'name': 'i3',
                    'ts': 0.99,
                    'dur': undefined
                },
                {
                    'name': 'b0',
                    'ts': 1,
                    'dur': 1
                },
                {
                    'name': 'b1',
                    'ts': 1,
                    'dur': 0.01
                },
                {
                    'name': 'i4',
                    'ts': 1,
                    'dur': undefined
                },
                {
                    'name': 'c0',
                    'ts': 1.5,
                    'dur': 0.5
                },
                {
                    'name': 'i5',
                    'ts': 1.75,
                    'dur': undefined
                },
                {
                    'name': 'i6',
                    'ts': 1.99,
                    'dur': undefined
                },
                {
                    'name': 'd0',
                    'ts': 2,
                    'dur': 1
                },
                {
                    'name': 'i7',
                    'ts': 2,
                    'dur': undefined
                },
                {
                    'name': 'i8',
                    'ts': 2.01,
                    'dur': undefined
                }
            ]);
            return [
                2
            ];
        });
    }));
    it('can process multiple processes', /*#__PURE__*/ _async_to_generator(function() {
        var data1, data2, processes, firstThread, secondThread, firstRoots, secondRoots;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    /**
         * |------------- Task A -------------||-- Task E --|
         *  |-- Task B --||-- Task D --|
         *   |- Task C -|
         */ data1 = [
                        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('A', 0, 10),
                        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('B', 1, 3),
                        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('D', 5, 3),
                        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('C', 2, 1),
                        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('E', 11, 3)
                    ];
                    /**
         * |-- Task F --||------------- Task G -------------|
         *               |-- Task H --||-- Task J --|
         *                 |- Task I -|
         */ data2 = [
                        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('F', 0, 3),
                        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('G', 3, 10),
                        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('H', 3, 3),
                        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('J', 6, 3),
                        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('I', 5, 1)
                    ];
                    processes = new Map([
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(0),
                            {
                                url: 'http://a.com',
                                isOnMainFrame: true,
                                threads: new Map([
                                    [
                                        _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(1),
                                        {
                                            name: 'Foo',
                                            entries: data1
                                        }
                                    ]
                                ])
                            }
                        ],
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(2),
                            {
                                url: 'http://b.com',
                                isOnMainFrame: false,
                                threads: new Map([
                                    [
                                        _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(3),
                                        {
                                            name: 'Bar',
                                            entries: data2
                                        }
                                    ]
                                ])
                            }
                        ]
                    ]);
                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Samples.initialize();
                    return [
                        4,
                        _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Samples.finalize()
                    ];
                case 1:
                    _state.sent();
                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Renderer.buildHierarchy(processes, {
                        filter: {
                            has: function() {
                                return true;
                            }
                        }
                    });
                    firstThread = _to_consumable_array(_to_consumable_array(processes.values())[0].threads.values())[0];
                    secondThread = _to_consumable_array(_to_consumable_array(processes.values())[1].threads.values())[0];
                    if (!firstThread.tree || !secondThread.tree) {
                        assert(false, 'Trees not found');
                        return [
                            2
                        ];
                    }
                    assert.strictEqual(firstThread.tree.maxDepth, 3, 'Got the correct tree max depth for the first thread');
                    assert.strictEqual(secondThread.tree.maxDepth, 3, 'Got the correct tree max depth for the second thread');
                    firstRoots = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getEventsIn)(firstThread.tree.roots.values());
                    assert.deepEqual(firstRoots.map(function(e) {
                        return e ? {
                            name: e.name,
                            ts: e.ts,
                            dur: e.dur
                        } : null;
                    }), [
                        {
                            'name': 'A',
                            'ts': 0,
                            'dur': 10
                        },
                        {
                            'name': 'E',
                            'ts': 11,
                            'dur': 3
                        }
                    ]);
                    secondRoots = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getEventsIn)(secondThread.tree.roots.values());
                    assert.deepEqual(secondRoots.map(function(e) {
                        return e ? {
                            name: e.name,
                            ts: e.ts,
                            dur: e.dur
                        } : null;
                    }), [
                        {
                            'name': 'F',
                            'ts': 0,
                            'dur': 3
                        },
                        {
                            'name': 'G',
                            'ts': 3,
                            'dur': 10
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    var _this10 = this;
    it('can assign origins to processes', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, metadata, processes;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        handleEventsFromTraceFile(_this10, 'multiple-navigations-with-iframes.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), metadata = _ref.Meta;
                    processes = new Map();
                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Renderer.assignOrigin(processes, metadata.rendererProcessesByFrame);
                    assert.deepEqual(_to_consumable_array(processes).map(function(param) {
                        var _param = _sliced_to_array(param, 2), pid = _param[0], p = _param[1];
                        return [
                            pid,
                            p.url ? new URL(p.url).origin : null
                        ];
                    }), [
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(MAIN_FRAME_PID),
                            'http://localhost:5000'
                        ],
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(SUB_FRAME_PID),
                            'https://www.example.com'
                        ],
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(SUB_FRAME_PID_2),
                            'https://www.example.com'
                        ],
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(SUB_FRAME_PID_3),
                            'https://www.example.com'
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    var _this11 = this;
    it('can assign main frame flags to processes', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, metadata, processes;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        handleEventsFromTraceFile(_this11, 'multiple-navigations-with-iframes.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), metadata = _ref.Meta;
                    processes = new Map();
                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Renderer.assignIsMainFrame(processes, metadata.mainFrameId, metadata.rendererProcessesByFrame);
                    assert.deepEqual(_to_consumable_array(processes).map(function(param) {
                        var _param = _sliced_to_array(param, 2), pid = _param[0], p = _param[1];
                        return [
                            pid,
                            p.isOnMainFrame
                        ];
                    }), [
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(MAIN_FRAME_PID),
                            true
                        ],
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(SUB_FRAME_PID),
                            false
                        ],
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(SUB_FRAME_PID_2),
                            false
                        ],
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(SUB_FRAME_PID_3),
                            false
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    var _this12 = this;
    it('can assign thread names to threads in processes', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, metadata, mainFrameId, rendererProcessesByFrame, threadsInProcess, processes;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        handleEventsFromTraceFile(_this12, 'multiple-navigations-with-iframes.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), metadata = _ref.Meta;
                    mainFrameId = metadata.mainFrameId, rendererProcessesByFrame = metadata.rendererProcessesByFrame, threadsInProcess = metadata.threadsInProcess;
                    processes = new Map();
                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Renderer.assignMeta(processes, mainFrameId, rendererProcessesByFrame, threadsInProcess);
                    assert.deepEqual(_to_consumable_array(processes).map(function(param) {
                        var _param = _sliced_to_array(param, 2), pid = _param[0], p = _param[1];
                        return [
                            pid,
                            _to_consumable_array(p.threads).map(function(param) {
                                var _param = _sliced_to_array(param, 2), tid = _param[0], t = _param[1];
                                return [
                                    tid,
                                    t.name
                                ];
                            })
                        ];
                    }), [
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(MAIN_FRAME_PID),
                            [
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(1),
                                    'CrRendererMain'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(7),
                                    'Compositor'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(2),
                                    'ThreadPoolServiceThread'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(4),
                                    'Chrome_ChildIOThread'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(24),
                                    'ThreadPoolForegroundWorker'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(27),
                                    'ThreadPoolForegroundWorker'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(17),
                                    'ThreadPoolForegroundWorker'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(29),
                                    'ThreadPoolForegroundWorker'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(25),
                                    'ThreadPoolForegroundWorker'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(28),
                                    'ThreadPoolForegroundWorker'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(30),
                                    'ThreadPoolForegroundWorker'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(26),
                                    'ThreadPoolForegroundWorker'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(11),
                                    'CompositorTileWorker3'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(12),
                                    'CompositorTileWorker4'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(10),
                                    'CompositorTileWorker2'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(9),
                                    'CompositorTileWorker1'
                                ]
                            ]
                        ],
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(SUB_FRAME_PID),
                            [
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(2),
                                    'ThreadPoolServiceThread'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(1),
                                    'CrRendererMain'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(7),
                                    'Compositor'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(4),
                                    'Chrome_ChildIOThread'
                                ]
                            ]
                        ],
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(SUB_FRAME_PID_2),
                            [
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(1),
                                    'CrRendererMain'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(4),
                                    'Chrome_ChildIOThread'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(8),
                                    'Compositor'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(2),
                                    'ThreadPoolServiceThread'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(10),
                                    'CompositorTileWorker1'
                                ]
                            ]
                        ],
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(SUB_FRAME_PID_3),
                            [
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(1),
                                    'CrRendererMain'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(2),
                                    'ThreadPoolServiceThread'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(4),
                                    'Chrome_ChildIOThread'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(7),
                                    'Compositor'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(10),
                                    'CompositorTileWorker2'
                                ],
                                [
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(3),
                                    'ThreadPoolForegroundWorker'
                                ]
                            ]
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    var _this13 = this;
    it('populates the map of trace events to tree nodes', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, renderers;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        handleEventsFromTraceFile(_this13, 'multiple-navigations-with-iframes.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), renderers = _ref.Renderer;
                    assert.strictEqual(renderers.entryToNode.size, 3591);
                    return [
                        2
                    ];
            }
        });
    }));
    describe('Synthetic complete events', function() {
        var handleEvents = function handleEvents(traceEvents) {
            return _handleEvents.apply(this, arguments);
        };
        function _handleEvents() {
            _handleEvents = _async_to_generator(function(traceEvents) {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Renderer.reset();
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Meta.reset();
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Samples.reset();
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Meta.initialize();
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Samples.initialize();
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Renderer.initialize();
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    event = _step.value;
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Meta.handleEvent(event);
                                    _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Renderer.handleEvent(event);
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
                                _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Meta.finalize()
                            ];
                        case 1:
                            _state.sent();
                            return [
                                4,
                                _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Samples.finalize()
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Renderer.finalize()
                            ];
                        case 3:
                            _state.sent();
                            return [
                                2,
                                _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Renderer.data()
                            ];
                    }
                });
            });
            return _handleEvents.apply(this, arguments);
        }
        var defaultTraceEvents;
        var pid = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(28274);
        var tid = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(775);
        beforeEach(/*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.rawEvents(this, 'basic.json.gz')
                        ];
                    case 1:
                        defaultTraceEvents = _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        afterEach(function() {
            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Renderer.reset();
            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Meta.reset();
            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Handlers.ModelHandlers.Samples.reset();
        });
        it('builds a hierarchy using begin and end trace events', /*#__PURE__*/ _async_to_generator(function() {
            var _thread_tree, _thread_tree1, _thread_tree2, traceEvents, data, _data_processes_values, process, _process_threads_values, thread, allNodes;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // |------------- RunTask -------------||-- RunTask --|
                        //  |-- RunMicrotasks --||-- Layout --|
                        //   |- FunctionCall -|
                        traceEvents = _to_consumable_array(defaultTraceEvents).concat([
                            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeBeginEvent)('RunTask', 0, '*', pid, tid),
                            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeBeginEvent)('RunMicrotasks', 1, '*', pid, tid),
                            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeBeginEvent)('FunctionCall', 2, '*', pid, tid),
                            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeEndEvent)('FunctionCall', 3, '*', pid, tid),
                            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeEndEvent)('RunMicrotasks', 4, '*', pid, tid),
                            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeBeginEvent)('Layout', 5, '*', pid, tid),
                            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeEndEvent)('Layout', 8, '*', pid, tid),
                            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeEndEvent)('RunTask', 10, '*', pid, tid),
                            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeBeginEvent)('RunTask', 11, '*', pid, tid),
                            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeEndEvent)('RunTask', 14, '*', pid, tid)
                        ]);
                        return [
                            4,
                            handleEvents(traceEvents)
                        ];
                    case 1:
                        data = _state.sent();
                        assert.strictEqual(data.allTraceEntries.length, 7);
                        assert.strictEqual(data.processes.size, 1);
                        _data_processes_values = _sliced_to_array(data.processes.values(), 1), process = _data_processes_values[0];
                        assert.strictEqual(process.threads.size, 1);
                        _process_threads_values = _sliced_to_array(process.threads.values(), 1), thread = _process_threads_values[0];
                        assert.strictEqual((_thread_tree = thread.tree) === null || _thread_tree === void 0 ? void 0 : _thread_tree.roots.size, 2);
                        if (!((_thread_tree1 = thread.tree) === null || _thread_tree1 === void 0 ? void 0 : _thread_tree1.roots)) {
                            // This shouldn't happen, since the tree.roots.size is 2, but add this if check to pass ts check.
                            return [
                                2
                            ];
                        }
                        allNodes = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getAllNodes)((_thread_tree2 = thread.tree) === null || _thread_tree2 === void 0 ? void 0 : _thread_tree2.roots);
                        assert.strictEqual(allNodes.length, 5);
                        if (!thread.tree) {
                            return [
                                2
                            ];
                        }
                        assert.strictEqual((0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.prettyPrint)(thread.tree), "\n-RunTask [0.01ms]\n  -RunMicrotasks [0.003ms]\n    -FunctionCall [0.001ms]\n  -Layout [0.003ms]\n-RunTask [0.003ms]");
                        return [
                            2
                        ];
                }
            });
        }));
        it('builds a hierarchy using complete, begin and end trace events', /*#__PURE__*/ _async_to_generator(function() {
            var _thread_tree, _thread_tree1, _thread_tree2, traceEvents, data, _data_processes_values, process, _process_threads_values, thread, allNodes;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // |------------- RunTask -------------|
                        //  |-- RunMicrotasks --||-- Layout --|
                        //   |- FunctionCall -|
                        traceEvents = _to_consumable_array(defaultTraceEvents).concat([
                            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeBeginEvent)('RunTask', 0, '*', pid, tid),
                            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeBeginEvent)('RunMicrotasks', 1, '*', pid, tid),
                            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('FunctionCall', 2, 1, '*', pid, tid),
                            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeEndEvent)('RunMicrotasks', 4, '*', pid, tid),
                            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeBeginEvent)('Layout', 5, '*', pid, tid),
                            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeEndEvent)('Layout', 8, '*', pid, tid),
                            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeEndEvent)('RunTask', 10, '*', pid, tid)
                        ]);
                        return [
                            4,
                            handleEvents(traceEvents)
                        ];
                    case 1:
                        data = _state.sent();
                        assert.strictEqual(data.allTraceEntries.length, 6);
                        assert.strictEqual(data.processes.size, 1);
                        _data_processes_values = _sliced_to_array(data.processes.values(), 1), process = _data_processes_values[0];
                        assert.strictEqual(process.threads.size, 1);
                        _process_threads_values = _sliced_to_array(process.threads.values(), 1), thread = _process_threads_values[0];
                        assert.strictEqual((_thread_tree = thread.tree) === null || _thread_tree === void 0 ? void 0 : _thread_tree.roots.size, 1);
                        if (!((_thread_tree1 = thread.tree) === null || _thread_tree1 === void 0 ? void 0 : _thread_tree1.roots)) {
                            // This shouldn't happen, since the tree.roots.size is 1, but add this if check to pass ts check.
                            return [
                                2
                            ];
                        }
                        allNodes = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getAllNodes)((_thread_tree2 = thread.tree) === null || _thread_tree2 === void 0 ? void 0 : _thread_tree2.roots);
                        assert.strictEqual(allNodes.length, 4);
                        if (!thread.tree) {
                            return [
                                2
                            ];
                        }
                        assert.strictEqual((0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.prettyPrint)(thread.tree), "\n-RunTask [0.01ms]\n  -RunMicrotasks [0.003ms]\n    -FunctionCall [0.001ms]\n  -Layout [0.003ms]");
                        return [
                            2
                        ];
                }
            });
        }));
        it('keeps a FunctionCall that has the end event missing', /*#__PURE__*/ _async_to_generator(function() {
            var traceEvents, data, _data_processes_values, process, _process_threads_values, thread;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        traceEvents = _to_consumable_array(defaultTraceEvents).concat([
                            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeBeginEvent)('RunMicrotasks', 1, '*', pid, tid),
                            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeBeginEvent)('FunctionCall', 2, '*', pid, tid)
                        ]);
                        return [
                            4,
                            handleEvents(traceEvents)
                        ];
                    case 1:
                        data = _state.sent();
                        assert.strictEqual(data.processes.size, 1);
                        _data_processes_values = _sliced_to_array(data.processes.values(), 1), process = _data_processes_values[0];
                        assert.strictEqual(process.threads.size, 1);
                        _process_threads_values = _sliced_to_array(process.threads.values(), 1), thread = _process_threads_values[0];
                        if (!thread.tree) {
                            throw new Error('thread should have a tree');
                        }
                        // Ensure that the FunctionCall event has been kept despite not having an END event.
                        assert.deepEqual(thread.entries.map(function(e) {
                            return e.name;
                        }), [
                            'RunMicrotasks',
                            'FunctionCall'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('building hierarchies trace events and profile calls', function() {
        var _this1 = _this;
        it('build a hierarchy using data from real world trace file', /*#__PURE__*/ _async_to_generator(function() {
            var _Renderer_processes_get, Renderer, threadId, firstProcessId, thread, onlyLongTasksPredicate;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            handleEventsFromTraceFile(_this1, 'recursive-counting-js.json.gz')
                        ];
                    case 1:
                        Renderer = _state.sent().Renderer;
                        threadId = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(259);
                        firstProcessId = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(23239);
                        thread = (_Renderer_processes_get = Renderer.processes.get(firstProcessId)) === null || _Renderer_processes_get === void 0 ? void 0 : _Renderer_processes_get.threads.get(threadId);
                        if (!thread || !thread.tree) {
                            throw new Error('Tree not found');
                        }
                        onlyLongTasksPredicate = function(_node, event) {
                            return Boolean(event.dur && event.dur > 1000) && Boolean(_panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_0__.EventUICategory.getEventStyle(event.name));
                        };
                        assert.strictEqual((0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.prettyPrint)(thread.tree, onlyLongTasksPredicate), "\n.............\n-RunTask [17.269ms]\n.............................\n-RunTask [1065.663ms]\n  -ParseHTML [1065.609ms]\n.........\n-RunTask [1.12ms]\n  -ParseHTML [1.082ms]\n.........................................................\n-RunTask [1058.811ms]\n  -TimerFire [1058.77ms]\n    -FunctionCall [1058.693ms]\n.\n      -ProfileCall (anonymous) [1058.589ms]\n        -ProfileCall (foo) [1058.589ms]\n          -ProfileCall (foo) [1058.589ms]\n            -ProfileCall (foo) [1058.589ms]\n              -ProfileCall (foo) [1058.589ms]\n..\n                -ProfileCall (count) [1058.453ms]\n........\n-RunTask [1057.455ms]\n  -TimerFire [1057.391ms]\n    -FunctionCall [1057.27ms]\n.\n      -ProfileCall (anonymous) [1056.579ms]\n        -ProfileCall (foo) [1056.579ms]\n          -ProfileCall (foo) [1056.579ms]\n            -ProfileCall (foo) [1056.579ms]\n              -ProfileCall (foo) [1056.579ms]\n                -ProfileCall (count) [1056.538ms]\n........");
                        return [
                            2
                        ];
                }
            });
        }));
    });
    var _this14 = this;
    it('identifies and returns rasterizer threads', /*#__PURE__*/ _async_to_generator(function() {
        var Renderer;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        handleEventsFromTraceFile(_this14, 'web-dev.json.gz')
                    ];
                case 1:
                    Renderer = _state.sent().Renderer;
                    assert.deepEqual(Array.from(Renderer.compositorTileWorkers.entries()), [
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(68481),
                            [
                                _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(81675)
                            ]
                        ],
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(73704),
                            [
                                _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(23299),
                                _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(22275),
                                _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(41475),
                                _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(40451),
                                _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(22531)
                            ]
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    var _this15 = this;
    it('keeps the processes associated with AuctionWorklets and assigns them URLs', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, Renderer, AuctionWorklets, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, pid, _process_url, process;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        handleEventsFromTraceFile(_this15, 'fenced-frame-fledge.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), Renderer = _ref.Renderer, AuctionWorklets = _ref.AuctionWorklets;
                    assert.strictEqual(AuctionWorklets.worklets.size, 3);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = AuctionWorklets.worklets[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            _step_value = _sliced_to_array(_step.value, 1), pid = _step_value[0];
                            ;
                            process = Renderer.processes.get(pid);
                            assert.exists(process);
                            // Ensure that the URL was set properly based on the AuctionWorklets metadata event.
                            assert.isTrue(process === null || process === void 0 ? void 0 : (_process_url = process.url) === null || _process_url === void 0 ? void 0 : _process_url.includes('fledge-demo.glitch.me'));
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
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=RendererHandler.test.js.map


}),

}]);