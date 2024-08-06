"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_EntriesFilter_test_js"], {
"./panels/timeline/EntriesFilter.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline.js */ "./panels/timeline/timeline.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Copyright 2023222 The Chromium Author2s. All rights reserved.
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






function findFirstEntry(allEntries, predicate) {
    var entry = allEntries.find(function(entry) {
        return predicate(entry);
    });
    if (!entry) {
        throw new Error('Could not find expected entry.');
    }
    return entry;
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.describeWithEnvironment)('EntriesFilter', function() {
    it('parses a stack and returns an empty list of invisible entries', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, stack;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'basic-stack.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    stack = new _timeline_js__WEBPACK_IMPORTED_MODULE_1__.EntriesFilter.EntriesFilter(traceData.Renderer.entryToNode);
                    assert.deepEqual([], stack === null || stack === void 0 ? void 0 : stack.invisibleEntries());
                    return [
                        2
                    ];
            }
        });
    }));
    it('supports the user merging an entry into its parent', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, mainThread, entryTwo, stack;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'basic-stack.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainThread)(traceData.Renderer);
                    /** This stack looks roughly like so (with some events omitted):
         * ======== basicStackOne ============
         * =========== basicTwo ==============
         * =========== basicThree ============
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *                  ==== fibonacci ===
         *
         * In this test we want to test the user merging basicTwo into its parent, so the resulting trace should look like so:
         * ======== basicStackOne ============
         * =========== basicThree ============ << No more basicTwo, it has been merged.
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *                  ==== fibonacci ===
         *
         **/ entryTwo = findFirstEntry(mainThread.entries, function(entry) {
                        // Processing this trace ends up with two distinct stacks for basicTwo()
                        // So we find the first one so we can focus this test on just one stack.
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'basicTwo' && entry.dur === 827;
                    });
                    stack = new _timeline_js__WEBPACK_IMPORTED_MODULE_1__.EntriesFilter.EntriesFilter(traceData.Renderer.entryToNode);
                    if (!stack) {
                        throw new Error('EntriesFilter does not exist');
                    }
                    stack.applyFilterAction({
                        type: "MERGE_FUNCTION" /* PerfUI.FlameChart.FilterAction.MERGE_FUNCTION */ ,
                        entry: entryTwo
                    });
                    assert.isTrue(stack.invisibleEntries().includes(entryTwo), 'entryTwo is invisble');
                    // Only one entry - the one for the `basicTwo` function - should have been hidden.
                    assert.strictEqual(stack.invisibleEntries().length, 1);
                    return [
                        2
                    ];
            }
        });
    }));
    it('adds the parent of the merged entry into the expandableEntries array', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, mainThread, entryTwo, stack, basicStackOne;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'basic-stack.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainThread)(traceData.Renderer);
                    /** This stack looks roughly like so (with some events omitted):
         * ======== basicStackOne ============
         * =========== basicTwo ==============
         * =========== basicThree ============
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *
         * In this test we want to test that the parent of the merged entry is added to the expandableEntries array,
         * so that later an array decoration is added to it and the merged entry could be shown again if the array is clicked.
         * the user merging basicTwo into its parent, so the resulting trace should look like so:
         * ======== basicStackOne ============ << As parent of basicTwo, it belongs to the expandableEntries array
         * =========== basicThree ============ << No more basicTwo, it has been merged.
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *
         **/ entryTwo = findFirstEntry(mainThread.entries, function(entry) {
                        // Processing this trace ends up with two distinct stacks for basicTwo()
                        // So we find the first one so we can focus this test on just one stack.
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'basicTwo' && entry.dur === 827;
                    });
                    stack = new _timeline_js__WEBPACK_IMPORTED_MODULE_1__.EntriesFilter.EntriesFilter(traceData.Renderer.entryToNode);
                    if (!stack) {
                        throw new Error('EntriesFilter does not exist');
                    }
                    stack.applyFilterAction({
                        type: "MERGE_FUNCTION" /* PerfUI.FlameChart.FilterAction.MERGE_FUNCTION */ ,
                        entry: entryTwo
                    });
                    assert.isTrue(stack.invisibleEntries().includes(entryTwo), 'entryTwo is invisble');
                    // Get the parent of basicTwo, which is basicStackOne.
                    basicStackOne = findFirstEntry(mainThread.entries, function(entry) {
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'basicStackOne' && entry.dur === 827;
                    });
                    // Get the parent of basicTwo marked as expandable.
                    assert.isTrue(stack.isEntryExpandable(basicStackOne));
                    return [
                        2
                    ];
            }
        });
    }));
    it('adds the collapsed entry into the expandableEntries array', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, mainThread, entryTwo, stack;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'basic-stack.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainThread)(traceData.Renderer);
                    /** This stack looks roughly like so (with some events omitted):
         * ======== basicStackOne ============
         * =========== basicTwo ==============
         * =========== basicThree ============
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *
         * In this test we want to test that the collapsed entry is added to the expandableEntries array,
         * so that later an arrow decoration is added to it and the collapsed entries could be shown again if the arraw is clicked.
         *
         * The user collapses basicTwo, so the resulting trace should look like so:
         * ======== basicStackOne ============
         * =========== basicTwo ============ << All entries under basicTwo merged collapsed and it belongs to the expandableEntries array
         *
         **/ entryTwo = findFirstEntry(mainThread.entries, function(entry) {
                        // Processing this trace ends up with two distinct stacks for basicTwo()
                        // So we find the first one so we can focus this test on just one stack.
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'basicTwo' && entry.dur === 827;
                    });
                    stack = new _timeline_js__WEBPACK_IMPORTED_MODULE_1__.EntriesFilter.EntriesFilter(traceData.Renderer.entryToNode);
                    if (!stack) {
                        throw new Error('EntriesFilter does not exist');
                    }
                    stack.applyFilterAction({
                        type: "COLLAPSE_FUNCTION" /* PerfUI.FlameChart.FilterAction.COLLAPSE_FUNCTION */ ,
                        entry: entryTwo
                    });
                    // basicTwo is marked as expandable.
                    assert.isTrue(stack.isEntryExpandable(entryTwo));
                    return [
                        2
                    ];
            }
        });
    }));
    it('adds the next visible parent of the merged entry into the expandableEntries array if the direct parent is hidden', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, mainThread, firstFooCallEntry, firstFooCallEndTime, fooCalls, stack, allFooExceptFirstInStackAreHidden, foo2Calls;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'two-functions-recursion.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainThread)(traceData.Renderer);
                    /** This stack looks roughly like so (with some events omitted):
         * ======== onclick ============
         * =========== foo =============
         *               ==== foo2 =====
         *               ===== foo =====
         *               ==== foo2 =====
         *               ===== foo =====
         *               ==== foo2 =====
         *               ===== foo =====
         *
         * In this test we want to test that the next visible parent of the merged entry is added to the
         * expandableEntries array even if the direct one is hidden by some other action,
         * so that later an array decoration is added to it and the merged entry could be shown again if the array is clicked.
         *
         * collapse all repeating calls of foo after the first one:
         * ======== onclick ============
         * =========== foo =============                  << all foo except first removed
         *               ===== foo2 ====
         *               ==== foo2 =====                  << direct parent is not visible anymore
         *               ==== foo2 =====
         *
         * merge second foo2 and add the next visible parent to the expandableEntries array:
         * ======== onclick ============
         * =========== foo =============
         *               ===== foo2 ====                  << added to expandableEntries as the next visible parent of the merged entry
         *               ==== foo2 =====
         *
         **/ firstFooCallEntry = findFirstEntry(mainThread.entries, function(entry) {
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'foo' && entry.dur === 233;
                    });
                    firstFooCallEndTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.eventTimingsMicroSeconds(firstFooCallEntry).endTime;
                    fooCalls = mainThread.entries.filter(function(entry) {
                        var isFooCall = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'foo';
                        if (!isFooCall) {
                            return false;
                        }
                        var endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.eventTimingsMicroSeconds(entry).endTime;
                        return endTime <= firstFooCallEndTime;
                    });
                    stack = new _timeline_js__WEBPACK_IMPORTED_MODULE_1__.EntriesFilter.EntriesFilter(traceData.Renderer.entryToNode);
                    if (!stack) {
                        throw new Error('EntriesFilter does not exist');
                    }
                    // Collapse all foo calls after the first one.
                    stack.applyFilterAction({
                        type: "COLLAPSE_REPEATING_DESCENDANTS" /* PerfUI.FlameChart.FilterAction.COLLAPSE_REPEATING_DESCENDANTS */ ,
                        entry: firstFooCallEntry
                    });
                    // First foo call is marked as expandable since its' children are hidden.
                    assert.isTrue(stack.isEntryExpandable(firstFooCallEntry));
                    // Make sure all foo calls after first are hidden.
                    allFooExceptFirstInStackAreHidden = fooCalls.every(function(fooCall, i) {
                        if (i === 0) {
                            // First foo should not be invisible.
                            return !stack.invisibleEntries().includes(fooCall);
                        }
                        return stack.invisibleEntries().includes(fooCall);
                    });
                    assert.isTrue(allFooExceptFirstInStackAreHidden, 'First foo is invisible or some following foo calls are still visible');
                    foo2Calls = mainThread.entries.filter(function(entry) {
                        var isFoo2Call = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'foo2';
                        if (!isFoo2Call) {
                            return false;
                        }
                        var endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.eventTimingsMicroSeconds(entry).endTime;
                        return endTime <= firstFooCallEndTime;
                    });
                    // Merge second foo2 entry.
                    stack.applyFilterAction({
                        type: "MERGE_FUNCTION" /* PerfUI.FlameChart.FilterAction.MERGE_FUNCTION */ ,
                        entry: foo2Calls[1]
                    });
                    // First foo2 entry should be in the expandableEntries array.
                    assert.isTrue(stack.isEntryExpandable(foo2Calls[0]));
                    return [
                        2
                    ];
            }
        });
    }));
    it('supports collapsing an entry', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, mainThread, basicTwoCallEntry, fibonacciCalls, stack, allFibonacciInStackAreHidden;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'basic-stack.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainThread)(traceData.Renderer);
                    /** This stack looks roughly like so (with some events omitted):
         * ======== basicStackOne ============
         * =========== basicTwo ==============
         * =========== basicThree ============
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *                  ==== fibonacci ===
         *
         * In this test we want to test the user collapsing basicTwo, which should have the effect of keeping basicTwo visible, but removing all of its children:
         * ======== basicStackOne ============
         * =========== basicTwo ==============
         *                                    << all children removed
         **/ basicTwoCallEntry = findFirstEntry(mainThread.entries, function(entry) {
                        // Processing this trace ends up with two distinct stacks for basicTwo()
                        // So we find the first one so we can focus this test on just one stack.
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'basicTwo' && entry.dur === 827;
                    });
                    // Gather the fib() calls under the first basicTwo stack, by finding all
                    // the calls whose end time is less than or equal to the end time of the
                    // `basicTwo` function.
                    fibonacciCalls = mainThread.entries.filter(function(entry) {
                        var isFibCall = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'fibonacci';
                        if (!isFibCall) {
                            return false;
                        }
                        var endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.eventTimingsMicroSeconds(entry).endTime;
                        var basicTwoCallEndTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.eventTimingsMicroSeconds(basicTwoCallEntry).endTime;
                        return endTime <= basicTwoCallEndTime;
                    });
                    stack = new _timeline_js__WEBPACK_IMPORTED_MODULE_1__.EntriesFilter.EntriesFilter(traceData.Renderer.entryToNode);
                    if (!stack) {
                        throw new Error('EntriesFilter does not exist');
                    }
                    stack.applyFilterAction({
                        type: "COLLAPSE_FUNCTION" /* PerfUI.FlameChart.FilterAction.COLLAPSE_FUNCTION */ ,
                        entry: basicTwoCallEntry
                    });
                    // We collapsed at the `basicTwo` entry - so it should not be included in the invisible list itself.
                    assert.isFalse(stack.invisibleEntries().includes(basicTwoCallEntry), 'entryTwo is not visible');
                    // But all fib() calls below it in the stack should now be invisible.
                    allFibonacciInStackAreHidden = fibonacciCalls.every(function(fibCall) {
                        return stack.invisibleEntries().includes(fibCall);
                    });
                    assert.isTrue(allFibonacciInStackAreHidden, 'Some fibonacci calls are still visible');
                    return [
                        2
                    ];
            }
        });
    }));
    it('supports collapsing all repeating entries among descendants', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, mainThread, firstFooCallEntry, firstFooCallEndTime, fooCalls, foo2Calls, stack, allFooExceptFirstInStackAreHidden, allFoo2InStackAreVisible;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'two-functions-recursion.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainThread)(traceData.Renderer);
                    /** This stack looks roughly like so (with some events omitted):
         * ======== onclick ============
         * =========== foo =============
         *               ==== foo2 =====
         *               ===== foo =====
         *               ==== foo2 =====
         *               ===== foo =====
         *               ==== foo2 =====
         *               ===== foo =====
         *
         * In this test we want to test the user collapsing all descendant foo calls of the first first one,
         * which should have the effect of keeping the first foo visible, but removing all of its other calls:
         * ======== onclick ============
         * =========== foo =============
         *               ===== foo2 ====                  << all foo except first removed
         *               ==== foo2 =====
         *               ==== foo2 =====
         **/ firstFooCallEntry = findFirstEntry(mainThread.entries, function(entry) {
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'foo' && entry.dur === 233;
                    });
                    // Gather the foo() and foo2() calls under and including the first foo entry, by finding all
                    // the calls whose end time is less than or equal to the end time of the first `foo` function.
                    firstFooCallEndTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.eventTimingsMicroSeconds(firstFooCallEntry).endTime;
                    fooCalls = mainThread.entries.filter(function(entry) {
                        var isFooCall = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'foo';
                        if (!isFooCall) {
                            return false;
                        }
                        var endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.eventTimingsMicroSeconds(entry).endTime;
                        return endTime <= firstFooCallEndTime;
                    });
                    foo2Calls = mainThread.entries.filter(function(entry) {
                        var isFoo2Call = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'foo2';
                        if (!isFoo2Call) {
                            return false;
                        }
                        var endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.eventTimingsMicroSeconds(entry).endTime;
                        return endTime <= firstFooCallEndTime;
                    });
                    stack = new _timeline_js__WEBPACK_IMPORTED_MODULE_1__.EntriesFilter.EntriesFilter(traceData.Renderer.entryToNode);
                    if (!stack) {
                        throw new Error('EntriesFilter does not exist');
                    }
                    stack.applyFilterAction({
                        type: "COLLAPSE_REPEATING_DESCENDANTS" /* PerfUI.FlameChart.FilterAction.COLLAPSE_REPEATING_DESCENDANTS */ ,
                        entry: firstFooCallEntry
                    });
                    // We collapsed identical descendants after the first `foo` entry - so it should not be included in the invisible list itself,
                    // but all foo() calls below it in the stack should now be invisible.
                    allFooExceptFirstInStackAreHidden = fooCalls.every(function(fooCall, i) {
                        if (i === 0) {
                            // First foo should not be invisible.
                            return !stack.invisibleEntries().includes(fooCall);
                        }
                        return stack.invisibleEntries().includes(fooCall);
                    });
                    assert.isTrue(allFooExceptFirstInStackAreHidden, 'First foo is invisible or some following foo calls are still visible');
                    // All of the foo2 calls that were inbetween foo calls should still be visible.
                    allFoo2InStackAreVisible = foo2Calls.every(function(fooCall) {
                        return !stack.invisibleEntries().includes(fooCall);
                    });
                    assert.isTrue(allFoo2InStackAreVisible, 'Some foo2 calls are invisible');
                    return [
                        2
                    ];
            }
        });
    }));
    it('supports undo all filter actions by applying context menu undo action', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, mainThread, stack, basicTwoCallEntry, fibonacciCalls, allFibExceptFirstInStackAreHidden, basicStackOne, basicThree;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'basic-stack.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainThread)(traceData.Renderer);
                    /** This stack looks roughly like so (with some events omitted):
         * ======== basicStackOne ============
         * =========== basicTwo ==============
         * =========== basicThree ============
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *                  ==== fibonacci ===
         *
         * In this test we want to test the user undoing all actions with 'undo all actions' after applying merge, collapse repeating descendants and collapse function.
         *
         * First, collapse all repeating descendants of the first fibonacci call:
         * ======== basicStackOne ============
         * =========== basicTwo ==============
         * =========== basicThree ============
         *              ======== fibonacci ===                  << repeating children removed
         *
         * Then, merge basicStackOne:
         * =========== basicTwo ==============
         * =========== basicThree ============
         *              ======== fibonacci ===
         *
         * Finally, collapse basicTwo():
         * =========== basicTwo ==============
         *
         * Applying 'undo all actions' should bring the stack to the original state.
         **/ stack = new _timeline_js__WEBPACK_IMPORTED_MODULE_1__.EntriesFilter.EntriesFilter(traceData.Renderer.entryToNode);
                    if (!stack) {
                        throw new Error('EntriesFilter does not exist');
                    }
                    basicTwoCallEntry = findFirstEntry(mainThread.entries, function(entry) {
                        // Processing this trace ends up with two distinct stacks for basicTwo()
                        // So we find the first one so we can focus this test on just one stack.
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'basicTwo' && entry.dur === 827;
                    });
                    fibonacciCalls = mainThread.entries.filter(function(entry) {
                        var isFibCall = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'fibonacci';
                        if (!isFibCall) {
                            return false;
                        }
                        var endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.eventTimingsMicroSeconds(entry).endTime;
                        var basicTwoCallEndTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.eventTimingsMicroSeconds(basicTwoCallEntry).endTime;
                        return endTime <= basicTwoCallEndTime;
                    });
                    // Collapse all repeating descendants of the first fibonacci call:
                    stack.applyFilterAction({
                        type: "COLLAPSE_REPEATING_DESCENDANTS" /* PerfUI.FlameChart.FilterAction.COLLAPSE_REPEATING_DESCENDANTS */ ,
                        entry: fibonacciCalls[0]
                    });
                    // We collapsed identical descendants after the first `foo` entry - so it should not be included in the invisible list itself,
                    // but all foo() calls below it in the stack should now be invisible.
                    allFibExceptFirstInStackAreHidden = fibonacciCalls.every(function(fibCall, i) {
                        if (i === 0) {
                            // First foo should not be invisible.
                            return !stack.invisibleEntries().includes(fibCall);
                        }
                        return stack.invisibleEntries().includes(fibCall);
                    });
                    assert.isTrue(allFibExceptFirstInStackAreHidden, 'First fib is invisible or some following fib calls are still visible');
                    // Merge basicStackOne:
                    basicStackOne = findFirstEntry(mainThread.entries, function(entry) {
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'basicStackOne' && entry.dur === 827;
                    });
                    stack.applyFilterAction({
                        type: "MERGE_FUNCTION" /* PerfUI.FlameChart.FilterAction.MERGE_FUNCTION */ ,
                        entry: basicStackOne
                    });
                    assert.isTrue(stack.invisibleEntries().includes(basicStackOne), 'entrybasicStackOneTwo is visble');
                    // Collapse basicTwo():
                    stack.applyFilterAction({
                        type: "COLLAPSE_FUNCTION" /* PerfUI.FlameChart.FilterAction.COLLAPSE_FUNCTION */ ,
                        entry: basicTwoCallEntry
                    });
                    // basicThree and first fibnacci should now be hidden:
                    basicThree = findFirstEntry(mainThread.entries, function(entry) {
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'basicThree' && entry.dur === 827;
                    });
                    assert.isTrue(stack.invisibleEntries().includes(basicThree), 'basicThree is visble');
                    assert.isTrue(stack.invisibleEntries().includes(fibonacciCalls[0]), 'first fibonacci is visble');
                    // Apply UNDO_ALL_ACTIONS to bring back all of the hidden entries:
                    // UNDO_ALL_ACTIONS can be called on any visible entry
                    stack.applyFilterAction({
                        type: "UNDO_ALL_ACTIONS" /* PerfUI.FlameChart.FilterAction.UNDO_ALL_ACTIONS */ ,
                        entry: basicTwoCallEntry
                    });
                    // If the length of invisibleEntries list is 0, all of the entries added earlier were removed and are now visible.
                    assert.strictEqual(stack.invisibleEntries().length, 0);
                    return [
                        2
                    ];
            }
        });
    }));
    it('supports resetting children of the closest expandable parent when a hidden entry is provided', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, mainThread, stack, basicTwoCallEntry, firstFibCallEntry;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'basic-stack.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainThread)(traceData.Renderer);
                    /** This stack looks roughly like so (with some events omitted):
         * ======== basicStackOne ============
         * =========== basicTwo ==============
         * =========== basicThree ============
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *              ======== fibonacci ===
         *                  ==== fibonacci ===
         *
         * In this test we want to test the user selecting an entry that is hidden via a link.
         * If this happens, we should reveal this entry to resetting children of the closest expandable parent.
         *
         * First, collapse all children of the basicTwo:
         * ======== basicStackOne ============
         * =========== basicTwo ==============                  << children collapsed
         * =========== basicThree ============
         *              ======== fibonacci ===                  << repeating children removed
         *
         * Then, reveal the first fibonacci entry that is hidden:
         * ======== basicStackOne ============
         * =========== basicTwo ==============
         * =========== basicThree ============
         *              ======== fibonacci ===                  << reveal this hidden entry
         *              ======== fibonacci ===
         *
         * This should result in all basicTwo children being removed from the invisible array and stack being in the initial state.
         **/ stack = new _timeline_js__WEBPACK_IMPORTED_MODULE_1__.EntriesFilter.EntriesFilter(traceData.Renderer.entryToNode);
                    if (!stack) {
                        throw new Error('EntriesFilter does not exist');
                    }
                    basicTwoCallEntry = findFirstEntry(mainThread.entries, function(entry) {
                        // Processing this trace ends up with two distinct stacks for basicTwo()
                        // So we find the first one so we can focus this test on just one stack.
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'basicTwo' && entry.dur === 827;
                    });
                    // Make sure no entries are hidden
                    assert.strictEqual(stack.invisibleEntries().length, 0);
                    // Collapse all children of basicTwo call:
                    stack.applyFilterAction({
                        type: "COLLAPSE_FUNCTION" /* PerfUI.FlameChart.FilterAction.COLLAPSE_FUNCTION */ ,
                        entry: basicTwoCallEntry
                    });
                    // Make sure all 37 of basicTwo descdendants are hidden
                    assert.strictEqual(stack.invisibleEntries().length, 37);
                    // Get the first fibonacci call that is one of the hidden children and make sure it is hidden
                    firstFibCallEntry = findFirstEntry(mainThread.entries, function(entry) {
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'fibonacci';
                    });
                    assert.isTrue(stack.invisibleEntries().includes(firstFibCallEntry));
                    // Reveal the first fibonacci call and make sure that the all of the entries are now visible because the closest
                    // expandable parent to the fib call is basicTwo and, therefore, we need to reset its children.
                    stack.revealEntry(firstFibCallEntry);
                    assert.strictEqual(stack.invisibleEntries().length, 0);
                    return [
                        2
                    ];
            }
        });
    }));
    it('supports resetting all hidden children of a selected entry', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, mainThread, firstFooCallEntry, firstFooCallEndTime, fooCalls, foo2Calls, stack, allFooExceptFirstInStackAreHidden, allFoo2InStackAreVisible, allFooExceptSecondInStackAreVisible;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'two-functions-recursion.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainThread)(traceData.Renderer);
                    /** This stack looks roughly like so (with some events omitted):
         * ======== onclick ============
         * =========== foo =============
         *               ==== foo2 =====
         *               ===== foo =====
         *               ==== foo2 =====
         *               ===== foo =====
         *               ==== foo2 =====
         *               ===== foo =====
         *
         * In this test we want to test the user collapsing all descendant foo calls of the first first one,
         * which should have the effect of keeping the first foo visible, but removing all of its other calls:
         * ======== onclick ============
         * =========== foo =============
         *               ===== foo2 ====                  << all foo except first removed
         *               ==== foo2 =====
         *               ==== foo2 =====
         *
         * Then, reset children on the second visible foo2.
         * ======== onclick ============
         * =========== foo =============
         *               ===== foo2 ====                  << foo() after this entry still hidden
         *               ==== foo2 =====                  << all children from this node are visible
         *               ===== foo =====
         *               ==== foo2 =====
         *               ===== foo =====
         *
         * This results in a stack where all children of an entry children were reset on (second foo2)
         * are visible, but the entries hidden above the entry children were reset on stay hidden.
         **/ firstFooCallEntry = findFirstEntry(mainThread.entries, function(entry) {
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'foo' && entry.dur === 233;
                    });
                    // Gather the foo() and foo2() calls under and including the first foo entry, by finding all
                    // the calls whose end time is less than or equal to the end time of the first `foo` function.
                    firstFooCallEndTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.eventTimingsMicroSeconds(firstFooCallEntry).endTime;
                    fooCalls = mainThread.entries.filter(function(entry) {
                        var isFooCall = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'foo';
                        if (!isFooCall) {
                            return false;
                        }
                        var endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.eventTimingsMicroSeconds(entry).endTime;
                        return endTime <= firstFooCallEndTime;
                    });
                    foo2Calls = mainThread.entries.filter(function(entry) {
                        var isFoo2Call = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'foo2';
                        if (!isFoo2Call) {
                            return false;
                        }
                        var endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.eventTimingsMicroSeconds(entry).endTime;
                        return endTime <= firstFooCallEndTime;
                    });
                    stack = new _timeline_js__WEBPACK_IMPORTED_MODULE_1__.EntriesFilter.EntriesFilter(traceData.Renderer.entryToNode);
                    if (!stack) {
                        throw new Error('EntriesFilter does not exist');
                    }
                    stack.applyFilterAction({
                        type: "COLLAPSE_REPEATING_DESCENDANTS" /* PerfUI.FlameChart.FilterAction.COLLAPSE_REPEATING_DESCENDANTS */ ,
                        entry: firstFooCallEntry
                    });
                    // We collapsed identical descendants after the first `foo` entry - so it should not be included in the invisible list itself,
                    // but all foo() calls below it in the stack should now be invisible.
                    allFooExceptFirstInStackAreHidden = fooCalls.every(function(fooCall, i) {
                        if (i === 0) {
                            // First foo should not be invisible.
                            return !stack.invisibleEntries().includes(fooCall);
                        }
                        return stack.invisibleEntries().includes(fooCall);
                    });
                    assert.isTrue(allFooExceptFirstInStackAreHidden, 'First foo is invisible or some following foo calls are still visible');
                    // All of the foo2 calls that were inbetween foo calls should still be visible.
                    allFoo2InStackAreVisible = foo2Calls.every(function(fooCall) {
                        return !stack.invisibleEntries().includes(fooCall);
                    });
                    assert.isTrue(allFoo2InStackAreVisible, 'Some foo2 calls are invisible');
                    // Reset all children after second foo2 call
                    assert.strictEqual(foo2Calls.length, 3);
                    stack.applyFilterAction({
                        type: "RESET_CHILDREN" /* PerfUI.FlameChart.FilterAction.RESET_CHILDREN */ ,
                        entry: foo2Calls[1]
                    });
                    // All foo and foo2 calls except the second foo cll should now be visible
                    allFoo2InStackAreVisible = foo2Calls.every(function(fooCall) {
                        return !stack.invisibleEntries().includes(fooCall);
                    });
                    assert.isTrue(allFoo2InStackAreVisible, 'Some foo2 calls are invisible');
                    allFooExceptSecondInStackAreVisible = fooCalls.every(function(fooCall, i) {
                        if (i === 1) {
                            // Second foo should be invisible.
                            return stack.invisibleEntries().includes(fooCall);
                        }
                        return !stack.invisibleEntries().includes(fooCall);
                    });
                    assert.isTrue(allFooExceptSecondInStackAreVisible, 'Some foo calls except the second one are invisible or the second one is visible');
                    return [
                        2
                    ];
            }
        });
    }));
    it('correctly returns the amount of hidden children of a node', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, mainThread, firstFooCallEntry, stack;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'two-functions-recursion.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainThread)(traceData.Renderer);
                    /** This stack looks roughly like so (with some erlier events omitted):
         * ======== onclick ============
         * =========== foo =============
         *               ==== foo2 =====
         *               ===== foo =====
         *               ==== foo2 =====
         *               ===== foo =====
         *               ==== foo2 =====
         *               ===== foo =====
         *
         * In this test we want to test if the amount of hidden children returned is correct:
         * If we collapse repeating children on the first foo call, the 3 child foo calls should be removed.
         * Therefore, the amount of hidden children should be equal to 3.
         * ======== onclick ============
         * =========== foo =============                  << all foo except first hidden
         *               ===== foo2 ====
         *               ==== foo2 =====
         *               ==== foo2 =====
         **/ firstFooCallEntry = findFirstEntry(mainThread.entries, function(entry) {
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'foo' && entry.dur === 233;
                    });
                    stack = new _timeline_js__WEBPACK_IMPORTED_MODULE_1__.EntriesFilter.EntriesFilter(traceData.Renderer.entryToNode);
                    if (!stack) {
                        throw new Error('EntriesFilter does not exist');
                    }
                    // Before applying any action on a node, there should be no entries hidden under it
                    assert.strictEqual(stack.findHiddenDescendantsAmount(firstFooCallEntry), 0);
                    stack.applyFilterAction({
                        type: "COLLAPSE_REPEATING_DESCENDANTS" /* PerfUI.FlameChart.FilterAction.COLLAPSE_REPEATING_DESCENDANTS */ ,
                        entry: firstFooCallEntry
                    });
                    // There should be 3 foo() entries hidden under the first foo call entry
                    assert.strictEqual(stack.findHiddenDescendantsAmount(firstFooCallEntry), 3);
                    return [
                        2
                    ];
            }
        });
    }));
    it('correctly assigns a visible parent to expandable entries if the direct parent is not visible', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, mainThread, anonymousEntryWithInvisibleParent, stack, taskEntry;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'basic-stack.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainThread)(traceData.Renderer);
                    /** This stack looks roughly like so (with some events omitted):
         * ======== Task ===============
         * ======== (anonymous) ========                  << entry with an invisible in the timeline direct parent. We need to make sure that we correctly add Task to the expandable entries
         * ======== RegisterFrameID ====
         * ======== postMessage ========
         **/ anonymousEntryWithInvisibleParent = findFirstEntry(mainThread.entries, function(entry) {
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.nodeId === 42;
                    });
                    stack = new _timeline_js__WEBPACK_IMPORTED_MODULE_1__.EntriesFilter.EntriesFilter(traceData.Renderer.entryToNode);
                    if (!stack) {
                        throw new Error('EntriesFilter does not exist');
                    }
                    taskEntry = findFirstEntry(mainThread.entries, function(entry) {
                        return entry.name === 'RunTask' && entry.dur === 978 && entry.ts === 164397762991;
                    });
                    // Make sure the expandable entries are empty at first
                    assert.strictEqual(stack.expandableEntries().length, 0);
                    // Hide the anonymous function
                    stack.applyFilterAction({
                        type: "MERGE_FUNCTION" /* PerfUI.FlameChart.FilterAction.MERGE_FUNCTION */ ,
                        entry: anonymousEntryWithInvisibleParent
                    });
                    // Make sure Task entry is added to expandable entries
                    assert.strictEqual(stack.expandableEntries().length, 1);
                    assert.isTrue(stack.expandableEntries().includes(taskEntry));
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=EntriesFilter.test.js.map


}),

}]);