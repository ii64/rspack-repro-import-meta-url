"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_freestyler_FreestylerEvaluateAction_test_ts"],{

/***/ "./src/panels/freestyler/FreestylerEvaluateAction.test.ts":
/*!****************************************************************!*\
  !*** ./src/panels/freestyler/FreestylerEvaluateAction.test.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_RealConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/RealConnection.js */ "./src/testing/RealConnection.ts");
/* harmony import */ var _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FreestylerEvaluateAction.js */ "./src/panels/freestyler/FreestylerEvaluateAction.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




describe('FreestylerEvaluateAction', () => {
    describe('error handling', () => {
        function executeWithResult(mockResult) {
            const executionContextStub = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext);
            executionContextStub.evaluate.resolves(mockResult);
            return _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerEvaluateAction.execute('', executionContextStub, { throwOnSideEffect: false });
        }
        function mockRemoteObject(overrides = {}) {
            return sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject, {
                ...(overrides.className ? { className: overrides.className } : null),
                ...(overrides.subtype ? { subtype: overrides.subtype } : null),
                ...(overrides.type ? { type: overrides.type } : null),
                ...(overrides.value ? { value: overrides.value } : null),
                ...(overrides.preview ? { preview: overrides.preview } : null),
            });
        }
        function mockExceptionDetails({ description }) {
            return {
                exceptionId: 3,
                text: 'SyntaxError',
                lineNumber: 3,
                columnNumber: 3,
                exception: { type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.RemoteObjectType.String, description },
            };
        }
        beforeEach(() => {
            sinon.restore();
        });
        it('should throw an ExecutionError when the page returned with an error message', async () => {
            try {
                await executeWithResult({ error: 'errorMessage' });
            }
            catch (err) {
                assert.instanceOf(err, _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_3__.ExecutionError);
                assert.strictEqual(err.message, 'errorMessage');
            }
        });
        it('should throw an ExecutionError with the description of the exception if response included exception details', async () => {
            try {
                await executeWithResult({
                    object: mockRemoteObject(),
                    exceptionDetails: mockExceptionDetails({ description: 'Error description' }),
                });
            }
            catch (err) {
                assert.instanceOf(err, _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_3__.ExecutionError);
                assert.strictEqual(err.message, 'Error description');
            }
        });
        it('should throw a SideEffectError when the resulted exception starts with possible side effect error', async () => {
            try {
                await executeWithResult({
                    object: mockRemoteObject(),
                    exceptionDetails: mockExceptionDetails({ description: 'EvalError: Possible side-effect in debug-evaluate' }),
                });
            }
            catch (err) {
                assert.instanceOf(err, _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_3__.SideEffectError);
                assert.strictEqual(err.message, 'EvalError: Possible side-effect in debug-evaluate');
            }
        });
    });
    (0,_testing_RealConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithRealConnection)('serialization', () => {
        async function executionContextForTest() {
            const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
            const target = targetManager.rootTarget();
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.RuntimeModel);
            return (0,_testing_RealConnection_js__WEBPACK_IMPORTED_MODULE_2__.getExecutionContext)(runtimeModel);
        }
        async function executeForTest(code) {
            return _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerEvaluateAction.execute(code, await executionContextForTest(), { throwOnSideEffect: false });
        }
        it('should serialize primitive values correctly', async () => {
            assert.strictEqual(await executeForTest('"string"'), '\'string\'');
            assert.strictEqual(await executeForTest('999n'), '999n');
            assert.strictEqual(await executeForTest('true'), 'true');
            assert.strictEqual(await executeForTest('undefined'), 'undefined');
            assert.strictEqual(await executeForTest('42'), '42');
            assert.strictEqual(await executeForTest('Symbol("sym")'), 'Symbol(sym)');
        });
        describe('HTMLElement', () => {
            it('should work with plain nodes', async () => {
                const serializedElement = await executeForTest(`{
          const el = document.createElement('div');

          el;
        }`);
                assert.strictEqual(serializedElement, '"<div></div>"');
            });
            it('should serialize node with classes', async () => {
                const serializedElement = await executeForTest(`{
          const el = document.createElement('div');
          el.classList.add('section');
          el.classList.add('section-main');

          el;
        }`);
                assert.strictEqual(serializedElement, '"<div class=\\"section section-main\\"></div>"');
            });
            it('should serialize node with id', async () => {
                const serializedElement = await executeForTest(`{
          const el = document.createElement('div');
          el.id = 'promotion-section';

          el;
        }`);
                assert.strictEqual(serializedElement, '"<div id=\\"promotion-section\\"></div>"');
            });
            it('should serialize node with class and id', async () => {
                const serializedElement = await executeForTest(`{
          const el = document.createElement('div');
          el.id = 'promotion-section';
          el.classList.add('section');

          el;
        }`);
                assert.strictEqual(serializedElement, '"<div id=\\"promotion-section\\" class=\\"section\\"></div>"');
            });
            it('should serialize node with children', async () => {
                const serializedElement = await executeForTest(`{
          const el = document.createElement('div');
          const p = document.createElement('p');
          el.appendChild(p);

          el;
        }`);
                assert.strictEqual(serializedElement, '"<div>...</div>"');
            });
        });
        it('should serialize arrays correctly', async () => {
            assert.strictEqual(await executeForTest('[]'), '[]');
            assert.strictEqual(await executeForTest('[1]'), '[1]');
            assert.strictEqual(await executeForTest('[1, 2]'), '[1,2]');
            assert.strictEqual(await executeForTest('[{key: 1}]'), '[{"key":1}]');
        });
        it('should serialize objects correctly', async () => {
            assert.strictEqual(await executeForTest('{const object = {key: "str"}; object}'), '{"key":"str"}');
            assert.strictEqual(await executeForTest('{const object = {key: "str", secondKey: "str2"}; object}'), '{"key":"str","secondKey":"str2"}');
            assert.strictEqual(await executeForTest('{const object = {key: 1}; object}'), '{"key":1}');
        });
        it('should not continue serializing cycles', async () => {
            assert.strictEqual(await executeForTest(`{
        const obj = { a: 1 };
        obj.itself = obj;
        obj
      }`), '{"a":1,"itself":"(cycle)"}');
        });
        it('should not include number keys for CSSStyleDeclaration', async () => {
            const result = await executeForTest('getComputedStyle(document.body)');
            const parsedResult = JSON.parse(result);
            assert.isUndefined(parsedResult[0]);
        });
    });
});


/***/ }),

/***/ "./src/panels/freestyler/FreestylerEvaluateAction.ts":
/*!***********************************************************!*\
  !*** ./src/panels/freestyler/FreestylerEvaluateAction.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExecutionError: () => (/* binding */ ExecutionError),
/* harmony export */   FreestylerEvaluateAction: () => (/* binding */ FreestylerEvaluateAction),
/* harmony export */   SideEffectError: () => (/* binding */ SideEffectError)
/* harmony export */ });
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class ExecutionError extends Error {
}
class SideEffectError extends Error {
}
/* istanbul ignore next */
function stringifyObjectOnThePage() {
    const seenBefore = new WeakMap();
    return JSON.stringify(this, function replacer(key, value) {
        if (typeof value === 'object' && value !== null) {
            if (seenBefore.has(value)) {
                return '(cycle)';
            }
            seenBefore.set(value, true);
        }
        if (value instanceof HTMLElement) {
            const idAttribute = value.id ? ` id="${value.id}"` : '';
            const classAttribute = value.classList.value ? ` class="${value.classList.value}"` : '';
            return `<${value.nodeName.toLowerCase()}${idAttribute}${classAttribute}>${value.hasChildNodes() ? '...' : ''}</${value.nodeName.toLowerCase()}>`;
        }
        if (this instanceof CSSStyleDeclaration) {
            // Do not add number keys to the output.
            if (!isNaN(Number(key))) {
                return undefined;
            }
        }
        return value;
    });
}
async function stringifyRemoteObject(object) {
    switch (object.type) {
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.RemoteObjectType.String:
            return `'${object.value}'`;
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.RemoteObjectType.Bigint:
            return `${object.value}n`;
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.RemoteObjectType.Boolean:
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.RemoteObjectType.Number:
            return `${object.value}`;
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.RemoteObjectType.Undefined:
            return 'undefined';
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.RemoteObjectType.Symbol:
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.RemoteObjectType.Function:
            return `${object.description}`;
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.RemoteObjectType.Object: {
            const res = await object.callFunction(stringifyObjectOnThePage);
            if (!res.object || res.object.type !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.RemoteObjectType.String) {
                throw new Error('Could not stringify the object' + object);
            }
            return res.object.value;
        }
        default:
            throw new Error('Unknown type to stringify ' + object.type);
    }
}
class FreestylerEvaluateAction {
    static async execute(code, executionContext, { throwOnSideEffect }) {
        const response = await executionContext.evaluate({
            expression: code,
            replMode: true,
            includeCommandLineAPI: true,
            returnByValue: false,
            silent: false,
            generatePreview: true,
            allowUnsafeEvalBlockedByCSP: false,
            throwOnSideEffect,
        }, 
        /* userGesture */ false, /* awaitPromise */ true);
        if (!response) {
            throw new Error('Response is not found');
        }
        if ('error' in response) {
            throw new ExecutionError(response.error);
        }
        if (response.exceptionDetails) {
            const exceptionDescription = response.exceptionDetails.exception?.description;
            if (exceptionDescription?.startsWith('EvalError: Possible side-effect in debug-evaluate')) {
                throw new SideEffectError(exceptionDescription);
            }
            throw new ExecutionError(exceptionDescription || 'JS exception');
        }
        return stringifyRemoteObject(response.object);
    }
}


/***/ }),

/***/ "./src/testing/RealConnection.ts":
/*!***************************************!*\
  !*** ./src/testing/RealConnection.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   describeWithRealConnection: () => (/* binding */ describeWithRealConnection),
/* harmony export */   flushRealConnectionSuits: () => (/* binding */ flushRealConnectionSuits),
/* harmony export */   getExecutionContext: () => (/* binding */ getExecutionContext)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/protocol_client/protocol_client.js */ "./src/core/protocol_client/protocol_client.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _entrypoints_main_main_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entrypoints/main/main.js */ "./src/entrypoints/main/main.ts");
/* harmony import */ var _EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







let initialized = false;
function describeBody(fn) {
    before('describeWithRealConnection', async function () {
        if (initialized) {
            return;
        }
        await (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.deinitializeGlobalVars)();
        await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../entrypoints/shell/shell.js */ "./src/entrypoints/shell/shell.ts"));
        await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../panels/elements/elements-meta.js */ "./src/panels/elements/elements-meta.ts"));
        await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../panels/sensors/sensors-meta.js */ "./src/panels/sensors/sensors-meta.ts"));
        await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../entrypoints/inspector_main/inspector_main-meta.js */ "./src/entrypoints/inspector_main/inspector_main-meta.ts"));
        let response = await fetch('/json/list', { method: 'PUT' });
        const targetList = await response.json();
        // There can be more than one target here. When debugging tests, the "main" test suite run and the debug test suite
        // run happen in different contexts and don't share `initialized`, but the do share the same chrome instance and
        // thus target list.
        const mainTarget = targetList.find((t) => t.title === 'Karma');
        if (!mainTarget) {
            console.error('A target could not be found. This can happen if you are accidentally running multiple instances of Karma at once. Make sure you don\'t have any debug sessions active when trying to run the unittests.');
            throw new Error('Main test target not found');
        }
        const originalTargetId = mainTarget.id;
        response = await fetch('/json/new', { method: 'PUT' });
        const target = await response.json();
        await fetch('/json/activate/' + originalTargetId, { method: 'PUT' });
        /* This value comes from the `client.targetDir` setting in `karma.conf.js` */
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { remoteDebuggingPort } = (globalThis.__karma__).config;
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.Runtime.setQueryParamForTesting('ws', `localhost:${remoteDebuggingPort}/devtools/page/${target.id}`);
        const main = new _entrypoints_main_main_js__WEBPACK_IMPORTED_MODULE_5__.MainImpl.MainImpl();
        await main.readyForTest();
        initialized = true;
    });
    beforeEach('describeWithRealConnection', () => {
        resetHostBindingStubState();
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().clearAll();
    });
    fn();
    afterEach('describeWithRealConnection', async () => {
        const runAfterPendingDispatches = _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_2__.InspectorBackend.test.deprecatedRunAfterPendingDispatches;
        if (!runAfterPendingDispatches) {
            throw new Error('Missing deprecatedRunAfterPendingDispatches');
        }
        await new Promise(resolve => runAfterPendingDispatches(resolve));
    });
}
const realConnectionSuites = [];
function describeWithRealConnection(title, fn) {
    realConnectionSuites.push({ title, fn, only: false });
}
// eslint-disable-next-line mocha/no-exclusive-tests
describeWithRealConnection.only = function (title, fn) {
    realConnectionSuites.push({ title, fn, only: true });
};
function flushRealConnectionSuits() {
    for (const { title, fn, only } of realConnectionSuites) {
        if (only) {
            // eslint-disable-next-line mocha/no-exclusive-tests
            describe.only(title, function () {
                describeBody(fn.bind(this));
            });
        }
        else {
            describe(title, function () {
                describeBody(fn.bind(this));
            });
        }
    }
}
async function getExecutionContext(runtimeModel) {
    let executionContexts = runtimeModel.executionContexts();
    if (!executionContexts.length) {
        await new Promise(resolve => {
            const listener = () => {
                runtimeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.Events.ExecutionContextCreated, listener);
                executionContexts = runtimeModel.executionContexts();
                resolve();
            };
            runtimeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.Events.ExecutionContextCreated, listener);
        });
    }
    if (!executionContexts.length) {
        throw new Error('Cannot get executionContext');
    }
    return executionContexts[0];
}
function resetHostBindingStubState() {
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.recordedCountHistograms.splice(0);
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.recordedEnumeratedHistograms.splice(0);
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.recordedPerformanceHistograms.splice(0);
}


/***/ })

}]);