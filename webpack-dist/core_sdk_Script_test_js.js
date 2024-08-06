"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_Script_test_js"],{

/***/ "./core/sdk/Script.test.js":
/*!*********************************!*\
  !*** ./core/sdk/Script.test.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('Script', () => {
    describe('originalContentProvider', () => {
        it('doesn\'t strip //# sourceURL annotations', async () => {
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
            const debuggerModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerModel.DebuggerModel);
            const url = 'webpack:///src/foo.js';
            const scriptId = '1';
            const scriptSource = `
console.log("foo");
//# sourceURL=${url}
`;
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Debugger.scriptParsed', {
                scriptId,
                url,
                startLine: 2,
                startColumn: 14,
                endLine: 5,
                endColumn: 0,
                executionContextId: 1,
                hash: '',
                hasSourceURL: true,
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Debugger.getScriptSource', () => {
                return {
                    scriptSource,
                    getError() {
                        return undefined;
                    },
                };
            });
            const script = debuggerModel.scriptForId(scriptId);
            const content = await script.originalContentProvider().requestContentData();
            assert.instanceOf(content, _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.ContentData.ContentData);
            assert.strictEqual(content.text, scriptSource);
        });
    });
    describe('editSource', () => {
        function setupEditTest(scriptId, scriptSource = '') {
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
            const model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerModel.DebuggerModel);
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Debugger.scriptParsed', {
                scriptId,
                url: 'https://example.com/test.js',
                startLine: 0,
                startColumn: 0,
                endLine: 2,
                endColumn: 0,
                executionContextId: 1,
                hash: '',
                hasSourceURL: false,
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Debugger.getScriptSource', () => {
                return {
                    scriptSource,
                    getError: () => undefined,
                };
            });
            const script = model.scriptForId(scriptId);
            return { script, target, model };
        }
        it('does not invoke the backend when new content and old content match', async () => {
            const { script } = setupEditTest('1', 'console.log("foo")');
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Debugger.setScriptSource', () => {
                throw new Error('Debugger.setScriptSource must not be called');
            });
            const { status } = await script.editSource('console.log("foo")');
            assert.strictEqual(status, "Ok" /* Protocol.Debugger.SetScriptSourceResponseStatus.Ok */);
        });
        it('updates the source content when the live edit succeeds', async () => {
            const { script } = setupEditTest('1', 'console.log("foo")');
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Debugger.setScriptSource', () => {
                return {
                    status: "Ok" /* Protocol.Debugger.SetScriptSourceResponseStatus.Ok */,
                };
            });
            const newContent = 'console.log("bar")';
            const { status } = await script.editSource(newContent);
            assert.strictEqual(status, "Ok" /* Protocol.Debugger.SetScriptSourceResponseStatus.Ok */);
            const contentData = await script.requestContentData();
            assert.instanceOf(contentData, _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.ContentData.ContentData);
            assert.strictEqual(contentData.text, newContent);
        });
        it('does not update the source content when the live edit fails', async () => {
            const scriptContent = 'console.log("foo")';
            const { script } = setupEditTest('1', scriptContent);
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Debugger.setScriptSource', () => {
                return {
                    status: "CompileError" /* Protocol.Debugger.SetScriptSourceResponseStatus.CompileError */,
                };
            });
            const { status } = await script.editSource('console.log("bar")');
            assert.strictEqual(status, "CompileError" /* Protocol.Debugger.SetScriptSourceResponseStatus.CompileError */);
            const contentData = await script.requestContentData();
            assert.instanceOf(contentData, _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.ContentData.ContentData);
            assert.strictEqual(contentData.text, scriptContent);
        });
        it('throws an error for protocol failures', done => {
            const { script, target } = setupEditTest('1', 'console.log("foo")');
            sinon.stub(target.debuggerAgent(), 'invoke_setScriptSource').returns(Promise.resolve({
                status: undefined, // Make TS happy.
                getError: () => 'setScriptSource failed for some reason',
            }));
            script.editSource('console.log("bar")')
                .then(() => {
                assert.fail('expected "editSource" to throw an exception!');
            })
                .catch(() => done());
        });
        it('fires an event on the DebuggerModel after returning from the backend', async () => {
            const { script, model } = setupEditTest('1', 'console.log("foo")');
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Debugger.setScriptSource', () => {
                return {
                    status: "Ok" /* Protocol.Debugger.SetScriptSourceResponseStatus.Ok */,
                };
            });
            const newContent = 'console.log("bar")';
            const eventPromise = model.once(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerModel.Events.ScriptSourceWasEdited);
            void script.editSource(newContent);
            const { script: eventScript, status } = await eventPromise;
            assert.strictEqual(eventScript, script);
            assert.strictEqual(status, "Ok" /* Protocol.Debugger.SetScriptSourceResponseStatus.Ok */);
        });
    });
});
//# sourceMappingURL=Script.test.js.map

/***/ })

}]);