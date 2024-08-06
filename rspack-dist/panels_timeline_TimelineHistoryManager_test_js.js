"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_TimelineHistoryManager_test_js"], {
"./panels/timeline/TimelineHistoryManager.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline.js */ "./panels/timeline/timeline.js");
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




(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('TimelineHistoryManager', function() {
    var historyManager;
    beforeEach(function() {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.registerNoopActions)([
            'timeline.show-history'
        ]);
        historyManager = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineHistoryManager.TimelineHistoryManager();
    });
    afterEach(function() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ActionRegistry.ActionRegistry.reset();
    });
    it('can select from multiple parsed data objects', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, trace1Data, _ref1, trace2Data, previousRecording, nextRecording;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'slow-interaction-button-click.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), trace1Data = _ref.traceData;
                    historyManager.addRecording({
                        data: {
                            traceParseDataIndex: 1
                        },
                        filmStripForPreview: null,
                        traceParsedData: trace1Data,
                        startTime: null
                    });
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'slow-interaction-keydown.json.gz')
                    ];
                case 2:
                    _ref1 = _state.sent(), trace2Data = _ref1.traceData;
                    historyManager.addRecording({
                        data: {
                            traceParseDataIndex: 2
                        },
                        filmStripForPreview: null,
                        traceParsedData: trace2Data,
                        startTime: null
                    });
                    // Make sure the correct model is returned when
                    // using the history manager to navigate between trace files..
                    previousRecording = historyManager.navigate(1);
                    assert.strictEqual(previousRecording === null || previousRecording === void 0 ? void 0 : previousRecording.traceParseDataIndex, 1);
                    nextRecording = historyManager.navigate(-1);
                    assert.strictEqual(nextRecording === null || nextRecording === void 0 ? void 0 : nextRecording.traceParseDataIndex, 2);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=TimelineHistoryManager.test.js.map


}),

}]);