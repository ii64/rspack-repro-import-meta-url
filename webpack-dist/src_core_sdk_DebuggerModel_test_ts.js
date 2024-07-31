"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_sdk_DebuggerModel_test_ts"],{

/***/ "./src/core/sdk/DebuggerModel.test.ts":
/*!********************************************!*\
  !*** ./src/core/sdk/DebuggerModel.test.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/MockScopeChain.js */ "./src/testing/MockScopeChain.ts");
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const SCRIPT_ID_ONE = '1';
const SCRIPT_ID_TWO = '2';
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('DebuggerModel', () => {
    describe('breakpoint activation', () => {
        beforeEach(() => {
            // Dummy handlers for unblocking target suspension.
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Debugger.setAsyncCallStackDepth', () => ({}));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Debugger.disable', () => ({}));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('DOM.disable', () => ({}));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('CSS.disable', () => ({}));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Overlay.disable', () => ({}));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Overlay.setShowGridOverlays', () => ({}));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Overlay.setShowFlexOverlays', () => ({}));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Overlay.setShowScrollSnapOverlays', () => ({}));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Overlay.setShowContainerQueryOverlays', () => ({}));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Overlay.setShowIsolatedElements', () => ({}));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Overlay.setShowViewportSizeOnResize', () => ({}));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Target.setAutoAttach', () => ({}));
            // Dummy handlers for unblocking target resumption.
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Debugger.enable', () => ({}));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Debugger.setPauseOnExceptions', () => ({}));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('DOM.enable', () => ({}));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Overlay.enable', () => ({}));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('CSS.enable', () => ({}));
        });
        it('deactivates breakpoints on construction with inactive breakpoints', async () => {
            let breakpointsDeactivated = false;
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Debugger.setBreakpointsActive', request => {
                if (request.active === false) {
                    breakpointsDeactivated = true;
                }
                return {};
            });
            _common_common_js__WEBPACK_IMPORTED_MODULE_6__.Settings.Settings.instance().moduleSetting('breakpoints-active').set(false);
            (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            assert.isTrue(breakpointsDeactivated);
        });
        it('deactivates breakpoints for suspended target', async () => {
            let breakpointsDeactivated = false;
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Debugger.setBreakpointsActive', request => {
                if (request.active === false) {
                    breakpointsDeactivated = true;
                }
                return {};
            });
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            await target.suspend();
            // Deactivate breakpoints while suspended.
            _common_common_js__WEBPACK_IMPORTED_MODULE_6__.Settings.Settings.instance().moduleSetting('breakpoints-active').set(false);
            // Verify that the backend received the message.
            assert.isTrue(breakpointsDeactivated);
            // Resume and verify that the setBreakpointsActive(false) is called again when the target resumes.
            // This is only needed for older backends (before crbug.com/1357046 is fixed).
            breakpointsDeactivated = false;
            await target.resume();
            assert.isTrue(breakpointsDeactivated);
        });
        it('activates breakpoints for suspended target', async () => {
            let breakpointsDeactivated = false;
            let breakpointsActivated = false;
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Debugger.setBreakpointsActive', request => {
                if (request.active) {
                    breakpointsActivated = true;
                }
                else {
                    breakpointsDeactivated = true;
                }
                return {};
            });
            // Deactivate breakpoints befroe the target is created.
            _common_common_js__WEBPACK_IMPORTED_MODULE_6__.Settings.Settings.instance().moduleSetting('breakpoints-active').set(false);
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            assert.isTrue(breakpointsDeactivated);
            await target.suspend();
            // Activate breakpoints while suspended.
            _common_common_js__WEBPACK_IMPORTED_MODULE_6__.Settings.Settings.instance().moduleSetting('breakpoints-active').set(true);
            // Verify that the backend received the message.
            assert.isTrue(breakpointsActivated);
        });
    });
    describe('createRawLocationFromURL', () => {
        it('yields correct location in the presence of multiple scripts with the same URL', async () => {
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            const debuggerModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerModel.DebuggerModel);
            const url = 'http://localhost/index.html';
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(target, 'Debugger.scriptParsed', {
                scriptId: SCRIPT_ID_ONE,
                url,
                startLine: 0,
                startColumn: 0,
                endLine: 1,
                endColumn: 10,
                executionContextId: 1,
                hash: '',
                isLiveEdit: false,
                sourceMapURL: undefined,
                hasSourceURL: false,
                length: 10,
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(target, 'Debugger.scriptParsed', {
                scriptId: SCRIPT_ID_TWO,
                url,
                startLine: 20,
                startColumn: 0,
                endLine: 21,
                endColumn: 10,
                executionContextId: 1,
                hash: '',
                isLiveEdit: false,
                sourceMapURL: undefined,
                hasSourceURL: false,
                length: 10,
            });
            assert.strictEqual(debuggerModel?.createRawLocationByURL(url, 0)?.scriptId, SCRIPT_ID_ONE);
            assert.strictEqual(debuggerModel?.createRawLocationByURL(url, 20, 1)?.scriptId, SCRIPT_ID_TWO);
            assert.strictEqual(debuggerModel?.createRawLocationByURL(url, 5, 5), null);
        });
    });
    const breakpointId1 = 'fs.js:1';
    const breakpointId2 = 'unsupported';
    describe('setBreakpointByURL', () => {
        it('correctly sets only a single breakpoint in Node.js internal scripts', async () => {
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Debugger.setBreakpointByUrl', ({ url }) => {
                if (url === 'fs.js') {
                    return {
                        breakpointId: breakpointId1,
                        locations: [],
                        getError() {
                            return undefined;
                        },
                    };
                }
                return {
                    breakpointId: breakpointId2,
                    locations: [],
                    getError() {
                        return undefined;
                    },
                };
            });
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            target.markAsNodeJSForTest();
            const model = new _sdk_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerModel.DebuggerModel(target);
            const { breakpointId } = await model.setBreakpointByURL('fs.js', 1);
            assert.strictEqual(breakpointId, breakpointId1);
        });
    });
    describe('scriptsForSourceURL', () => {
        it('returns the latest script at the front of the result for scripts with the same URL', () => {
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            const url = 'http://localhost/index.html';
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(target, 'Debugger.scriptParsed', {
                scriptId: SCRIPT_ID_ONE,
                url,
                startLine: 0,
                startColumn: 0,
                endLine: 1,
                endColumn: 10,
                executionContextId: 1,
                hash: '',
                isLiveEdit: false,
                sourceMapURL: undefined,
                hasSourceURL: false,
                length: 10,
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(target, 'Debugger.scriptParsed', {
                scriptId: SCRIPT_ID_TWO,
                url,
                startLine: 20,
                startColumn: 0,
                endLine: 21,
                endColumn: 10,
                executionContextId: 1,
                hash: '',
                isLiveEdit: false,
                sourceMapURL: undefined,
                hasSourceURL: false,
                length: 10,
            });
            const debuggerModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerModel.DebuggerModel);
            const scripts = debuggerModel?.scriptsForSourceURL(url) || [];
            assert.strictEqual(scripts[0].scriptId, SCRIPT_ID_TWO);
            assert.strictEqual(scripts[1].scriptId, SCRIPT_ID_ONE);
        });
    });
    describe('Scope', () => {
        it('Scope.typeName covers every enum value', async () => {
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            const debuggerModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerModel.DebuggerModel);
            const scriptUrl = 'https://script-host/script.js';
            const script = new _sdk_js__WEBPACK_IMPORTED_MODULE_7__.Script.Script(debuggerModel, SCRIPT_ID_ONE, scriptUrl, 0, 0, 0, 0, 0, '', false, false, undefined, false, 0, null, null, null, null, null, null);
            const scopeTypes = [
                _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Debugger.ScopeType.Global,
                _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Debugger.ScopeType.Local,
                _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Debugger.ScopeType.With,
                _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Debugger.ScopeType.Closure,
                _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Debugger.ScopeType.Catch,
                _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Debugger.ScopeType.Block,
                _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Debugger.ScopeType.Script,
                _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Debugger.ScopeType.Eval,
                _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Debugger.ScopeType.Module,
                _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Debugger.ScopeType.WasmExpressionStack,
            ];
            for (const scopeType of scopeTypes) {
                const payload = {
                    callFrameId: '0',
                    functionName: 'test',
                    functionLocation: undefined,
                    location: {
                        scriptId: SCRIPT_ID_ONE,
                        lineNumber: 0,
                        columnNumber: 0,
                    },
                    url: 'test-url',
                    scopeChain: [{
                            type: scopeType,
                            object: { type: 'object' },
                        }],
                    this: { type: 'object' },
                    returnValue: undefined,
                    canBeRestarted: false,
                };
                const callFrame = new _sdk_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerModel.CallFrame(debuggerModel, script, payload, 0);
                const scope = new _sdk_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerModel.Scope(callFrame, 0);
                assert.notEqual('', scope.typeName());
            }
        });
    });
    describe('pause', () => {
        let target;
        let backend;
        let debuggerWorkspaceBinding;
        beforeEach(() => {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ id: 'main', name: 'main', type: _sdk_js__WEBPACK_IMPORTED_MODULE_7__.Target.Type.Frame });
            const targetManager = target.targetManager();
            const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl.instance();
            const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
            debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({ forceNew: false, resourceMapping, targetManager });
            backend = new _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_5__.MockProtocolBackend();
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.IgnoreListManager.IgnoreListManager.instance({ forceNew: false, debuggerWorkspaceBinding });
        });
        it('with empty call frame list will invoke plain step-into', async () => {
            const stepIntoRequestPromise = new Promise(resolve => {
                (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Debugger.stepInto', () => {
                    resolve();
                    return {};
                });
            });
            backend.dispatchDebuggerPauseWithNoCallFrames(target, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Debugger.PausedEventReason.Other);
            await stepIntoRequestPromise;
        });
    });
});
describe('DebuggerModel', () => {
    describe('sortAndMergeRanges', () => {
        function createRange(scriptId, startLine, startColumn, endLine, endColumn) {
            return {
                scriptId,
                start: { lineNumber: startLine, columnNumber: startColumn },
                end: { lineNumber: endLine, columnNumber: endColumn },
            };
        }
        function sortAndMerge(locationRange) {
            return _sdk_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerModel.sortAndMergeRanges(locationRange.concat());
        }
        function assertIsMaximallyMerged(locationRange) {
            for (let i = 1; i < locationRange.length; ++i) {
                const prev = locationRange[i - 1];
                const curr = locationRange[i];
                assert.isTrue(prev.scriptId <= curr.scriptId);
                if (prev.scriptId === curr.scriptId) {
                    assert.isTrue(prev.end.lineNumber <= curr.start.lineNumber);
                    if (prev.end.lineNumber === curr.start.lineNumber) {
                        assert.isTrue(prev.end.columnNumber <= curr.start.columnNumber);
                    }
                }
            }
        }
        it('can be reduced if equal', () => {
            const testRange = createRange(SCRIPT_ID_ONE, 0, 3, 3, 3);
            const locationRangesToBeReduced = [
                testRange,
                testRange,
            ];
            const reduced = sortAndMerge(locationRangesToBeReduced);
            assert.deepEqual(reduced, [testRange]);
            assertIsMaximallyMerged(reduced);
        });
        it('can be reduced if overlapping (multiple ranges)', () => {
            const locationRangesToBeReduced = [
                createRange(SCRIPT_ID_ONE, 0, 5, 5, 3),
                createRange(SCRIPT_ID_ONE, 0, 3, 3, 3),
                createRange(SCRIPT_ID_ONE, 5, 3, 10, 10),
                createRange(SCRIPT_ID_TWO, 5, 4, 10, 10),
            ];
            const locationRangesExpected = [
                createRange(SCRIPT_ID_ONE, 0, 3, 10, 10),
                locationRangesToBeReduced[3],
            ];
            const reduced = sortAndMerge(locationRangesToBeReduced);
            assert.deepEqual(reduced, locationRangesExpected);
            assertIsMaximallyMerged(reduced);
        });
        it('can be reduced if overlapping (same start, different end)', () => {
            const locationRangesToBeReduced = [
                createRange(SCRIPT_ID_ONE, 0, 5, 5, 3),
                createRange(SCRIPT_ID_ONE, 0, 5, 3, 3),
            ];
            const locationRangesExpected = [
                createRange(SCRIPT_ID_ONE, 0, 5, 5, 3),
            ];
            const reduced = sortAndMerge(locationRangesToBeReduced);
            assert.deepEqual(reduced, locationRangesExpected);
            assertIsMaximallyMerged(reduced);
        });
        it('can be reduced if overlapping (different start, same end)', () => {
            const locationRangesToBeReduced = [
                createRange(SCRIPT_ID_ONE, 0, 3, 5, 3),
                createRange(SCRIPT_ID_ONE, 0, 5, 5, 3),
            ];
            const locationRangesExpected = [
                createRange(SCRIPT_ID_ONE, 0, 3, 5, 3),
            ];
            const reduced = sortAndMerge(locationRangesToBeReduced);
            assert.deepEqual(reduced, locationRangesExpected);
            assertIsMaximallyMerged(reduced);
        });
        it('can be reduced if overlapping (start == other.end)', () => {
            const locationRangesToBeReduced = [
                createRange(SCRIPT_ID_ONE, 0, 3, 5, 3),
                createRange(SCRIPT_ID_ONE, 5, 3, 10, 3),
            ];
            const locationRangesExpected = [
                createRange(SCRIPT_ID_ONE, 0, 3, 10, 3),
            ];
            const reduced = sortAndMerge(locationRangesToBeReduced);
            assert.deepEqual(reduced, locationRangesExpected);
            assertIsMaximallyMerged(reduced);
        });
    });
});


/***/ })

}]);