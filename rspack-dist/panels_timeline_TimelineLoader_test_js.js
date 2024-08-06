"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_TimelineLoader_test_js"], {
"./panels/timeline/fixtures/traces/node-fibonacci-website.cpuprofile.gz?cd46": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "99dc9b579fcf1b175e81.gz";

}),
"./panels/timeline/fixtures/traces/web-dev.json.gz?d035": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "965f25425589c4e290f6.gz";

}),
"./panels/timeline/TimelineLoader.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline.js */ "./panels/timeline/timeline.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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



function loadWebDevTraceAsFile() {
    return _loadWebDevTraceAsFile.apply(this, arguments);
}
function _loadWebDevTraceAsFile() {
    _loadWebDevTraceAsFile = _async_to_generator(function() {
        var file, response, asBlob, asFile;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    file = new URL(/* asset import */__webpack_require__(/*! ./fixtures/traces/web-dev.json.gz */ "./panels/timeline/fixtures/traces/web-dev.json.gz?d035"), __webpack_require__.b);
                    return [
                        4,
                        fetch(file)
                    ];
                case 1:
                    response = _state.sent();
                    return [
                        4,
                        response.blob()
                    ];
                case 2:
                    asBlob = _state.sent();
                    asFile = new File([
                        asBlob
                    ], 'web-dev.json.gz', {
                        type: 'application/gzip'
                    });
                    return [
                        2,
                        asFile
                    ];
            }
        });
    });
    return _loadWebDevTraceAsFile.apply(this, arguments);
}
function loadBasicCpuProfileAsFile() {
    return _loadBasicCpuProfileAsFile.apply(this, arguments);
}
function _loadBasicCpuProfileAsFile() {
    _loadBasicCpuProfileAsFile = _async_to_generator(function() {
        var file, response, asBlob, asFile;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    file = new URL(/* asset import */__webpack_require__(/*! ./fixtures/traces/node-fibonacci-website.cpuprofile.gz */ "./panels/timeline/fixtures/traces/node-fibonacci-website.cpuprofile.gz?cd46"), __webpack_require__.b);
                    return [
                        4,
                        fetch(file)
                    ];
                case 1:
                    response = _state.sent();
                    return [
                        4,
                        response.blob()
                    ];
                case 2:
                    asBlob = _state.sent();
                    asFile = new File([
                        asBlob
                    ], 'node-fibonacci-website.cpuprofile.gz', {
                        type: 'application/gzip'
                    });
                    return [
                        2,
                        asFile
                    ];
            }
        });
    });
    return _loadBasicCpuProfileAsFile.apply(this, arguments);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('TimelineLoader', function() {
    var loadingStartedSpy = sinon.spy();
    var loadingProgressSpy = sinon.spy();
    var processingStartedSpy = sinon.spy();
    var loadingCompleteSpy = sinon.spy();
    var recordingProgressSpy = sinon.spy();
    var loadingCompleteForTestSpy = sinon.spy();
    var client = {
        loadingStarted: function loadingStarted() {
            return _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    loadingStartedSpy();
                    return [
                        2
                    ];
                });
            })();
        },
        loadingProgress: function loadingProgress(progress) {
            return _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    loadingProgressSpy(progress);
                    return [
                        2
                    ];
                });
            })();
        },
        processingStarted: function processingStarted() {
            return _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    processingStartedSpy();
                    return [
                        2
                    ];
                });
            })();
        },
        loadingComplete: function loadingComplete(collectedEvents, exclusiveFilter, isCpuProfile) {
            return _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    loadingCompleteSpy(collectedEvents, exclusiveFilter, isCpuProfile);
                    return [
                        2
                    ];
                });
            })();
        },
        recordingProgress: function recordingProgress(usage) {
            recordingProgressSpy(usage);
        },
        loadingCompleteForTest: function loadingCompleteForTest() {
            loadingCompleteForTestSpy();
        }
    };
    beforeEach(function() {
        loadingStartedSpy.resetHistory();
        loadingProgressSpy.resetHistory();
        processingStartedSpy.resetHistory();
        loadingCompleteSpy.resetHistory();
        recordingProgressSpy.resetHistory();
        loadingCompleteForTestSpy.resetHistory();
    });
    it('can load a saved trace file', /*#__PURE__*/ _async_to_generator(function() {
        var file, loader, _loadingCompleteSpy_args_, collectedEvents, exclusiveFilter, isCpuProfile;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        loadWebDevTraceAsFile()
                    ];
                case 1:
                    file = _state.sent();
                    return [
                        4,
                        _timeline_js__WEBPACK_IMPORTED_MODULE_2__.TimelineLoader.TimelineLoader.loadFromFile(file, client)
                    ];
                case 2:
                    loader = _state.sent();
                    return [
                        4,
                        loader.traceFinalizedForTest()
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(loadingStartedSpy.calledOnce);
                    // Exact number is deterministic so we can assert, but the fact it was 29
                    // calls doesn't really matter. We just want to check it got called "a
                    // bunch of times".
                    assert.strictEqual(loadingProgressSpy.callCount, 29);
                    assert.isTrue(processingStartedSpy.calledOnce);
                    assert.isTrue(loadingCompleteSpy.calledOnce);
                    // Get the arguments of the first (and only) call to the loadingComplete
                    // function. TS doesn't know what the types are (they are [any, any] by
                    // default), so we tell it that they align with the types of the
                    // loadingComplete parameters.
                    _loadingCompleteSpy_args_ = _sliced_to_array(loadingCompleteSpy.args[0], 3), collectedEvents = _loadingCompleteSpy_args_[0], exclusiveFilter = _loadingCompleteSpy_args_[1], isCpuProfile = _loadingCompleteSpy_args_[2];
                    assert.isNull(exclusiveFilter); // We are not filtering out any events for this trace.
                    // Ensure that we loaded something that looks about right!
                    assert.lengthOf(collectedEvents, 8252);
                    assert.isFalse(isCpuProfile);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can load a saved CPUProfile file', /*#__PURE__*/ _async_to_generator(function() {
        var file, loader, _loadingCompleteSpy_args_, collectedEvents, isCpuProfile;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        loadBasicCpuProfileAsFile()
                    ];
                case 1:
                    file = _state.sent();
                    return [
                        4,
                        _timeline_js__WEBPACK_IMPORTED_MODULE_2__.TimelineLoader.TimelineLoader.loadFromFile(file, client)
                    ];
                case 2:
                    loader = _state.sent();
                    return [
                        4,
                        loader.traceFinalizedForTest()
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(loadingStartedSpy.calledOnce);
                    // For the CPU Profile we are testing, loadingProgress will be called three times, because the
                    // file is not that big.
                    assert.strictEqual(loadingProgressSpy.callCount, 3);
                    assert.isTrue(processingStartedSpy.calledOnce);
                    assert.isTrue(loadingCompleteSpy.calledOnce);
                    // Get the arguments of the first (and only) call to the loadingComplete
                    // function. TS doesn't know what the types are (they are [any, any] by
                    // default), so we tell it that they align with the types of the
                    // loadingComplete parameters.
                    _loadingCompleteSpy_args_ = _sliced_to_array(loadingCompleteSpy.args[0], 3), collectedEvents = _loadingCompleteSpy_args_[0], isCpuProfile = _loadingCompleteSpy_args_[2];
                    // We create fake trace event for CPU profile, includes one for
                    // TracingStartedInPage, one for metadata, one for root, and one for CPU
                    // profile
                    assert.lengthOf(collectedEvents, 4);
                    assert.isTrue(isCpuProfile);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can load recorded trace events correctly', /*#__PURE__*/ _async_to_generator(function() {
        var testTraceEvents, loader, _loadingCompleteSpy_args_, collectedEvents, exclusiveFilter, isCpuProfile;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    testTraceEvents = [
                        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeInstantEvent)('test-event-1', 1),
                        (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeInstantEvent)('test-event-2', 2)
                    ];
                    loader = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.TimelineLoader.TimelineLoader.loadFromEvents(testTraceEvents, client);
                    return [
                        4,
                        loader.traceFinalizedForTest()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(loadingStartedSpy.calledOnce);
                    // For the trace events we are testing, loadingProgress will be called only once, because the
                    // fake trace events array is very short.
                    assert.isTrue(loadingProgressSpy.calledOnce);
                    assert.isTrue(processingStartedSpy.calledOnce);
                    assert.isTrue(loadingCompleteSpy.calledOnce);
                    // Get the arguments of the first (and only) call to the loadingComplete
                    // function. TS doesn't know what the types are (they are [any, any] by
                    // default), so we tell it that they align with the types of the
                    // loadingComplete parameters.
                    _loadingCompleteSpy_args_ = _sliced_to_array(loadingCompleteSpy.args[0], 3), collectedEvents = _loadingCompleteSpy_args_[0], exclusiveFilter = _loadingCompleteSpy_args_[1], isCpuProfile = _loadingCompleteSpy_args_[2];
                    assert.isNull(exclusiveFilter);
                    // Ensure that we loaded something that looks about right!
                    assert.lengthOf(collectedEvents, testTraceEvents.length);
                    assert.isFalse(isCpuProfile);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can load recorded CPUProfile correctly', /*#__PURE__*/ _async_to_generator(function() {
        var testProfile, loader, _loadingCompleteSpy_args_, collectedEvents, isCpuProfile;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    testProfile = {
                        nodes: [],
                        startTime: 0,
                        endTime: 0
                    };
                    loader = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.TimelineLoader.TimelineLoader.loadFromCpuProfile(testProfile, client);
                    return [
                        4,
                        loader.traceFinalizedForTest()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(loadingStartedSpy.calledOnce);
                    // For the CPU Profile we are testing, loadingProgress will be called only once, because the
                    // fake Profile is basically empty.
                    assert.strictEqual(loadingProgressSpy.callCount, 1);
                    assert.isTrue(processingStartedSpy.calledOnce);
                    assert.isTrue(loadingCompleteSpy.calledOnce);
                    // Get the arguments of the first (and only) call to the loadingComplete
                    // function. TS doesn't know what the types are (they are [any, any] by
                    // default), so we tell it that they align with the types of the
                    // loadingComplete parameters.
                    _loadingCompleteSpy_args_ = _sliced_to_array(loadingCompleteSpy.args[0], 3), collectedEvents = _loadingCompleteSpy_args_[0], isCpuProfile = _loadingCompleteSpy_args_[2];
                    // We create fake trace event for CPU profile, includes one for TracingStartedInPage,
                    // one for metadata, one for root, and one for CPU profile
                    assert.lengthOf(collectedEvents, 4);
                    assert.isTrue(isCpuProfile);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=TimelineLoader.test.js.map


}),

}]);