"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_trace_helpers_SamplesIntegrator_test_ts"],{

/***/ "./src/models/trace/helpers/SamplesIntegrator.test.ts":
/*!************************************************************!*\
  !*** ./src/models/trace/helpers/SamplesIntegrator.test.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/cpu_profile/cpu_profile.js */ "./src/models/cpu_profile/cpu_profile.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceHelpers.js */ "./src/testing/TraceHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trace.js */ "./src/models/trace/trace.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('SamplesIntegrator', function () {
    const scriptId = 'Peperoni';
    const url = '';
    const lineNumber = -1;
    const columnNumber = -1;
    const pid = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(0);
    const tid = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(0);
    // Profile contains the following samples:
    // |a||a||a||a|
    //       |b||b|
    const basicCDPProfile = {
        startTime: 0,
        endTime: 3000,
        nodes: [
            {
                id: 1,
                hitCount: 0,
                callFrame: { functionName: '(root)', scriptId, url, lineNumber, columnNumber },
                children: [2, 3],
            },
            { id: 2, callFrame: { functionName: 'a', scriptId, url, lineNumber, columnNumber }, children: [3] },
            { id: 3, callFrame: { functionName: 'b', scriptId, url, lineNumber, columnNumber } },
        ],
        samples: [2, 2, 3, 3],
        timeDeltas: new Array(4).fill(100),
    };
    const parsedBasicProfile = new _models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_0__.CPUProfileDataModel.CPUProfileDataModel(basicCDPProfile);
    const PROFILE_ID = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProfileID('fake-profile-id');
    describe('callsFromProfileSamples', () => {
        it('generates empty profile calls from a profile with samples', () => {
            const integrator = new _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.SamplesIntegrator.SamplesIntegrator(parsedBasicProfile, PROFILE_ID, pid, tid);
            const calls = integrator.callsFromProfileSamples();
            assert.strictEqual(calls.length, basicCDPProfile.samples?.length);
            let currentTimestamp = 0;
            assert.deepEqual(calls.map(c => c.callFrame.functionName), ['a', 'a', 'b', 'b']);
            for (let i = 0; i < calls.length; i++) {
                const call = calls[i];
                currentTimestamp += basicCDPProfile.timeDeltas?.[i] || 0;
                assert.strictEqual(call.dur, 0);
                assert.strictEqual(call.dur, 0);
                assert.strictEqual(call.ts, currentTimestamp);
                // Ensure each ProfileCall has been "linked" to the Profile and the
                // sample.
                assert.strictEqual(call.profileId, PROFILE_ID);
                assert.strictEqual(call.sampleIndex, i);
                assert.isDefined(call.nodeId);
            }
        });
        it('generates JSSamples from samples under debug mode', () => {
            const config = {
                ..._trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.Configuration.defaults(),
            };
            config.debugMode = true;
            assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.Configuration.defaults().debugMode, false, 'Default config should not be mutable');
            const integrator = new _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.SamplesIntegrator.SamplesIntegrator(parsedBasicProfile, PROFILE_ID, pid, tid, config);
            integrator.callsFromProfileSamples();
            const jsSampleEvents = integrator.jsSampleEvents;
            assert.strictEqual(jsSampleEvents[0].ts, 100);
            assert.strictEqual(jsSampleEvents[1].ts, 200);
            assert.strictEqual(jsSampleEvents[2].ts, 300);
            assert.strictEqual(jsSampleEvents[3].ts, 400);
            assert.strictEqual(jsSampleEvents[0].dur, 0);
            assert.strictEqual(jsSampleEvents[1].dur, 0);
            assert.strictEqual(jsSampleEvents[2].dur, 0);
            assert.strictEqual(jsSampleEvents[3].dur, 0);
            assert.deepStrictEqual(jsSampleEvents[0].args.data.stackTrace.map(f => f.functionName), ['a']);
            assert.deepStrictEqual(jsSampleEvents[1].args.data.stackTrace.map(f => f.functionName), ['a']);
            assert.deepStrictEqual(jsSampleEvents[2].args.data.stackTrace.map(f => f.functionName), ['a', 'b']);
            assert.deepStrictEqual(jsSampleEvents[3].args.data.stackTrace.map(f => f.functionName), ['a', 'b']);
        });
    });
    describe('buildProfileCalls', () => {
        it('generates profile calls using trace events and JS samples from a trace file', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'recursive-blocking-js.json.gz');
            const samplesData = traceData.Samples;
            assert.strictEqual(samplesData.profilesInProcess.size, 1);
            const [[pid, profileByThread]] = samplesData.profilesInProcess.entries();
            const [[tid, cpuProfileData]] = profileByThread.entries();
            const parsedProfile = cpuProfileData.parsedProfile;
            const samplesIntegrator = new _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.SamplesIntegrator.SamplesIntegrator(parsedProfile, PROFILE_ID, pid, tid);
            const traceEvents = traceData.Renderer.allTraceEntries.filter(event => event.pid === pid && event.tid === tid);
            if (!traceEvents) {
                throw new Error('Trace events were unexpectedly not found.');
            }
            const constructedCalls = samplesIntegrator.buildProfileCalls(traceEvents);
            assert.strictEqual(constructedCalls.length, 5131);
        });
        it('creates JS profile calls with a top-level V8 invocation', () => {
            // After integrating with trace events, the flame chart
            // should look like:
            // |----Trace Event----|
            //           |----a----|
            //                 |-b-|
            const integrator = new _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.SamplesIntegrator.SamplesIntegrator(parsedBasicProfile, PROFILE_ID, pid, tid);
            const callEvent = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.KnownEventName.FunctionCall, 0, 500);
            const traceEvents = [callEvent];
            const constructedCalls = integrator.buildProfileCalls(traceEvents);
            assert.strictEqual(constructedCalls.length, 2);
            assert.strictEqual(constructedCalls[0].callFrame.functionName, 'a');
            assert.strictEqual(constructedCalls[0].ts, 100);
            assert.strictEqual(constructedCalls[0].dur, 400);
            assert.strictEqual(constructedCalls[1].callFrame.functionName, 'b');
            assert.strictEqual(constructedCalls[1].ts, 300);
            assert.strictEqual(constructedCalls[1].dur, 200);
        });
        it('creates JS frame events without a top-level V8 invocation', () => {
            const integrator = new _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.SamplesIntegrator.SamplesIntegrator(parsedBasicProfile, PROFILE_ID, pid, tid);
            const traceEvents = [];
            const constructedCalls = integrator.buildProfileCalls(traceEvents);
            assert.strictEqual(constructedCalls.length, 2);
            assert.strictEqual(constructedCalls[0].callFrame.functionName, 'a');
            assert.strictEqual(constructedCalls[0].ts, 100);
            assert.strictEqual(constructedCalls[0].dur, 300);
            assert.strictEqual(constructedCalls[1].callFrame.functionName, 'b');
            assert.strictEqual(constructedCalls[1].ts, 300);
            assert.strictEqual(constructedCalls[1].dur, 100);
        });
        it('creates JS frame events for mixed with/without top-level events', () => {
            // Profile contains the following samples:
            // |a|a|b|b|
            const cdpProfile = {
                startTime: 0,
                endTime: 3000,
                nodes: [
                    {
                        id: 1,
                        hitCount: 0,
                        callFrame: { functionName: '(root)', scriptId, url, lineNumber, columnNumber },
                        children: [2, 3],
                    },
                    { id: 2, callFrame: { functionName: 'a', scriptId, url, lineNumber, columnNumber } },
                    { id: 3, callFrame: { functionName: 'b', scriptId, url, lineNumber, columnNumber } },
                ],
                samples: [2, 2, 3, 3],
                timeDeltas: new Array(4).fill(100),
            };
            // After integrating with trace events, the flame chart
            // should look like:
            //  |----a----| |--Trace Event--|
            //              |-------b-------|
            const parsedProfile = new _models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_0__.CPUProfileDataModel.CPUProfileDataModel(cdpProfile);
            const integrator = new _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.SamplesIntegrator.SamplesIntegrator(parsedProfile, PROFILE_ID, pid, tid);
            const callEvent = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.KnownEventName.FunctionCall, 250, 250);
            const traceEvents = [callEvent];
            const constructedCalls = integrator.buildProfileCalls(traceEvents);
            assert.strictEqual(constructedCalls.length, 2);
            assert.strictEqual(constructedCalls[0].callFrame.functionName, 'a');
            assert.strictEqual(constructedCalls[0].ts, 100);
            assert.strictEqual(constructedCalls[0].dur, 150);
            assert.strictEqual(constructedCalls[1].callFrame.functionName, 'b');
            assert.strictEqual(constructedCalls[1].ts, 300);
            assert.strictEqual(constructedCalls[1].dur, 200);
        });
        // EvaluateScript and FunctionCall are two obvious "invocation events", but there are others (and sometimes none)
        // We must ensure we get reasonable JSFrames even when the invocation events are unexpected.
        it('creates JS frame events with v8.run trace event as parent', () => {
            // Profile contains the following samples:
            // |a|a|b|b|
            const cdpProfile = {
                startTime: 0,
                endTime: 3000,
                nodes: [
                    {
                        id: 1,
                        hitCount: 0,
                        callFrame: { functionName: '(root)', scriptId, url, lineNumber, columnNumber },
                        children: [2, 3],
                    },
                    { id: 2, callFrame: { functionName: 'a', scriptId, url, lineNumber, columnNumber } },
                    { id: 3, callFrame: { functionName: 'b', scriptId, url, lineNumber, columnNumber } },
                ],
                samples: [2, 2, 3, 3],
                timeDeltas: new Array(4).fill(100),
            };
            // After integrating with trace events, the flame chart
            // should look like:
            //   |----------------EvaluateScript-----------------|
            //       |-----------------v8.run--------------------|
            //        |--V8.ParseFuntion--||---a---||-----b------|
            const parsedProfile = new _models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_0__.CPUProfileDataModel.CPUProfileDataModel(cdpProfile);
            const integrator = new _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.SamplesIntegrator.SamplesIntegrator(parsedProfile, PROFILE_ID, pid, tid);
            const evaluateScript = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.KnownEventName.EvaluateScript, 0, 500);
            const v8Run = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('v8.run', 10, 490);
            const parseFunction = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('V8.ParseFunction', 12, 1);
            const traceEvents = [evaluateScript, v8Run, parseFunction];
            const constructedCalls = integrator.buildProfileCalls(traceEvents);
            assert.strictEqual(constructedCalls.length, 2);
            assert.strictEqual(constructedCalls[0].callFrame.functionName, 'a');
            assert.strictEqual(constructedCalls[0].ts, 100);
            assert.strictEqual(constructedCalls[0].dur, 200);
            assert.strictEqual(constructedCalls[1].callFrame.functionName, 'b');
            assert.strictEqual(constructedCalls[1].ts, 300);
            assert.strictEqual(constructedCalls[1].dur, 200);
        });
        it('restarts the call frame stack when a new top level event is encountered', () => {
            // Profile contains the following samples:
            // |a||a||a||a|
            //       |b||b|
            const cdpProfile = {
                startTime: 0,
                endTime: 3000,
                nodes: [
                    {
                        id: 1,
                        hitCount: 0,
                        callFrame: { functionName: '(root)', scriptId, url, lineNumber, columnNumber },
                        children: [2, 3],
                    },
                    { id: 2, callFrame: { functionName: 'a', scriptId, url, lineNumber, columnNumber }, children: [3] },
                    { id: 3, callFrame: { functionName: 'b', scriptId, url, lineNumber, columnNumber } },
                ],
                samples: [2, 2, 3, 3],
                timeDeltas: new Array(4).fill(20),
            };
            // After integrating with trace events, the flame chart
            // should look like:
            //   |-------------------------RunTask------------------------|
            //   |----------------------EvaluateScript--------------------|
            //              |--------a-------||------RunMicroTasks------|
            //                                |-----------a------------|
            //                                |-----------b------------|
            const runTask = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.KnownEventName.RunTask, 0, 100);
            const evaluateScript = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.KnownEventName.EvaluateScript, 0, 100);
            const runMicroTasks = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.KnownEventName.RunMicrotasks, 50, 100);
            const traceEvents = [runTask, evaluateScript, runMicroTasks];
            const parsedProfile = new _models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_0__.CPUProfileDataModel.CPUProfileDataModel(cdpProfile);
            const integrator = new _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.SamplesIntegrator.SamplesIntegrator(parsedProfile, PROFILE_ID, pid, tid);
            const constructedCalls = integrator.buildProfileCalls(traceEvents);
            assert.strictEqual(constructedCalls.length, 3);
            const framesForFunctionA = constructedCalls.filter(c => c.callFrame.functionName === 'a');
            assert.strictEqual(framesForFunctionA.length, 2);
            const expectedATimestamp = 20;
            assert.strictEqual(framesForFunctionA[0].ts, 20);
            // First frame for function A should be finished when the
            // RunMicrotasks event started.
            assert.strictEqual(framesForFunctionA[0].dur, runMicroTasks.ts - expectedATimestamp);
            const expectedBTimestamp = 60;
            assert.strictEqual(framesForFunctionA[1].ts, expectedBTimestamp);
            assert.strictEqual(framesForFunctionA[1].dur, runMicroTasks.ts + (runMicroTasks.dur || 0) - expectedBTimestamp);
        });
        it('skips samples from (program), (idle), (root) and (garbage collector) nodes', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'recursive-blocking-js.json.gz');
            const samplesData = traceData.Samples;
            assert.strictEqual(samplesData.profilesInProcess.size, 1);
            const [[pid, profileByThread]] = samplesData.profilesInProcess.entries();
            const [[tid, cpuProfileData]] = profileByThread.entries();
            const parsedProfile = cpuProfileData.parsedProfile;
            const samplesIntegrator = new _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.SamplesIntegrator.SamplesIntegrator(parsedProfile, PROFILE_ID, pid, tid);
            const traceEvents = traceData.Renderer.allTraceEntries.filter(event => event.pid === pid && event.tid === tid);
            if (!traceEvents) {
                throw new Error('Trace events were unexpectedly not found.');
            }
            const rootNode = parsedProfile.root;
            const programNode = parsedProfile.programNode;
            const idleNode = parsedProfile.idleNode;
            const gcNode = parsedProfile.gcNode;
            if (programNode === undefined || idleNode === undefined || gcNode === undefined) {
                throw new Error('Could not find program, idle or gc node');
            }
            const constructedCalls = samplesIntegrator.buildProfileCalls(traceEvents);
            const filteredNodes = constructedCalls.filter(c => c.nodeId === rootNode.id || c.nodeId === idleNode.id || c.nodeId === programNode.id ||
                c.nodeId === gcNode.id);
            assert.strictEqual(filteredNodes.length, 0);
        });
    });
});


/***/ })

}]);