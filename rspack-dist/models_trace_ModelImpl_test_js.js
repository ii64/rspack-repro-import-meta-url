"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_ModelImpl_test_js"], {
"./models/trace/ModelImpl.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trace/trace.js */ "./models/trace/trace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('TraceModel', function() {
    it('dispatches an end event when the trace is done', /*#__PURE__*/ _async_to_generator(function() {
        var model, events;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    model = _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.TraceModel.Model.createWithAllHandlers();
                    events = [];
                    model.addEventListener(_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.TraceModel.ModelUpdateEvent.eventName, function(evt) {
                        var updateEvent = evt;
                        events.push(updateEvent.data.type);
                    });
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'basic.json.gz').then(function(events) {
                            return model.parse(events);
                        })
                    ];
                case 1:
                    _state.sent();
                    // This trace is small, so there are no PROGRESS_UPDATE events, just a COMPLETE
                    // A larger trace would have 1+ PROGRESS_UPDATE events as well.
                    assert.deepStrictEqual(events, [
                        'COMPLETE'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('supports parsing a generic trace that has no browser specific details', /*#__PURE__*/ _async_to_generator(function() {
        var model, file1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    model = _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.TraceModel.Model.createWithAllHandlers();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'generic-about-tracing.json.gz')
                    ];
                case 1:
                    file1 = _state.sent();
                    return [
                        4,
                        model.parse(file1)
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(model.size(), 1);
                    return [
                        2
                    ];
            }
        });
    }));
    it('supports being given a set of handlers to run and will run just those and the Meta handler', /*#__PURE__*/ _async_to_generator(function() {
        var model, file1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    model = new _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.TraceModel.Model({
                        Animations: _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Animations
                    });
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'animation.json.gz')
                    ];
                case 1:
                    file1 = _state.sent();
                    return [
                        4,
                        model.parse(file1)
                    ];
                case 2:
                    _state.sent();
                    assert.deepEqual(Object.keys(model.traceParsedData(0) || {}), [
                        'Meta',
                        'Animations'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('supports parsing multiple traces', /*#__PURE__*/ _async_to_generator(function() {
        var model, file1, file2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    model = _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.TraceModel.Model.createWithAllHandlers();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'basic.json.gz')
                    ];
                case 1:
                    file1 = _state.sent();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'slow-interaction-keydown.json.gz')
                    ];
                case 2:
                    file2 = _state.sent();
                    return [
                        4,
                        model.parse(file1)
                    ];
                case 3:
                    _state.sent();
                    assert.strictEqual(model.lastTraceIndex(), 0);
                    model.resetProcessor();
                    return [
                        4,
                        model.parse(file2)
                    ];
                case 4:
                    _state.sent();
                    assert.strictEqual(model.lastTraceIndex(), 1);
                    model.resetProcessor();
                    assert.strictEqual(model.size(), 2);
                    assert.isNotNull(model.traceParsedData(0));
                    assert.isNotNull(model.traceInsights(0));
                    assert.isNotNull(model.traceParsedData(1));
                    assert.isNotNull(model.traceInsights(1));
                    return [
                        2
                    ];
            }
        });
    }));
    it('supports deleting traces', /*#__PURE__*/ _async_to_generator(function() {
        var model, file1, file2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    model = _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.TraceModel.Model.createWithAllHandlers();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'basic.json.gz')
                    ];
                case 1:
                    file1 = _state.sent();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'slow-interaction-keydown.json.gz')
                    ];
                case 2:
                    file2 = _state.sent();
                    return [
                        4,
                        model.parse(file1)
                    ];
                case 3:
                    _state.sent();
                    model.resetProcessor();
                    return [
                        4,
                        model.parse(file2)
                    ];
                case 4:
                    _state.sent();
                    model.resetProcessor();
                    // Test only one trace is deleted.
                    assert.strictEqual(model.size(), 2);
                    model.deleteTraceByIndex(0);
                    assert.strictEqual(model.size(), 1);
                    assert.isNotNull(model.traceParsedData(0));
                    assert.isNotNull(model.traceInsights(0));
                    model.deleteTraceByIndex(0);
                    assert.strictEqual(model.size(), 0);
                    assert.isNull(model.traceParsedData(0));
                    assert.isNull(model.traceInsights(0));
                    return [
                        2
                    ];
            }
        });
    }));
    it('names traces using their origin and defaults to "Trace n" when no origin is found', /*#__PURE__*/ _async_to_generator(function() {
        var model, traceFiles, _tmp, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, traceFile, err, expectedResults;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    model = _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.TraceModel.Model.createWithAllHandlers();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'threejs-gpu.json.gz')
                    ];
                case 1:
                    _tmp = [
                        _state.sent()
                    ];
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'web-dev.json.gz')
                    ];
                case 2:
                    _tmp = _tmp.concat([
                        _state.sent()
                    ]);
                    // Process the previous trace again to test the trace sequencing
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'web-dev.json.gz')
                    ];
                case 3:
                    _tmp = _tmp.concat([
                        _state.sent()
                    ]);
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'multiple-navigations.json.gz')
                    ];
                case 4:
                    _tmp = _tmp.concat([
                        _state.sent()
                    ]);
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'basic.json.gz')
                    ];
                case 5:
                    traceFiles = _tmp.concat([
                        _state.sent()
                    ]);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 6;
                case 6:
                    _state.trys.push([
                        6,
                        11,
                        12,
                        13
                    ]);
                    _iterator = traceFiles[Symbol.iterator]();
                    _state.label = 7;
                case 7:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        10
                    ];
                    traceFile = _step.value;
                    return [
                        4,
                        model.parse(traceFile)
                    ];
                case 8:
                    _state.sent();
                    model.resetProcessor();
                    _state.label = 9;
                case 9:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        7
                    ];
                case 10:
                    return [
                        3,
                        13
                    ];
                case 11:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        13
                    ];
                case 12:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 13:
                    expectedResults = [
                        'threejs.org (1)',
                        'web.dev (1)',
                        'web.dev (2)',
                        'google.com (1)',
                        'Trace 5'
                    ];
                    assert.deepEqual(model.getRecordingsAvailable(), expectedResults);
                    return [
                        2
                    ];
            }
        });
    }));
    it('supports overriding modifications in metadata', /*#__PURE__*/ _async_to_generator(function() {
        var _model_metadata, _model_metadata1, model, file1, initialBreadcrumb, entriesModifications, annotations, modifications;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    model = _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.TraceModel.Model.createWithAllHandlers();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'basic.json.gz')
                    ];
                case 1:
                    file1 = _state.sent();
                    return [
                        4,
                        model.parse(file1)
                    ];
                case 2:
                    _state.sent();
                    // Make sure there are no modifications before any are added
                    assert.isUndefined((_model_metadata = model.metadata(0)) === null || _model_metadata === void 0 ? void 0 : _model_metadata.modifications);
                    initialBreadcrumb = {
                        window: {
                            max: 0,
                            min: 10,
                            range: 10
                        },
                        child: null
                    };
                    entriesModifications = {
                        hiddenEntries: [
                            'r-1',
                            'r-2',
                            'r-3'
                        ],
                        expandableEntries: [
                            'r-4'
                        ]
                    };
                    annotations = {
                        entryLabels: [
                            {
                                entry: 'r-4',
                                label: 'entry label'
                            }
                        ]
                    };
                    modifications = {
                        entriesModifications: entriesModifications,
                        initialBreadcrumb: initialBreadcrumb,
                        annotations: annotations
                    };
                    model.overrideModifications(0, modifications);
                    // Make sure metadata contains overwritten modifications
                    assert.strictEqual((_model_metadata1 = model.metadata(0)) === null || _model_metadata1 === void 0 ? void 0 : _model_metadata1.modifications, modifications);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=ModelImpl.test.js.map


}),

}]);