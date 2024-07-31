"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_testing_test_post_setup_ts"],{

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


/***/ }),

/***/ "./src/testing/test_post_setup.ts":
/*!****************************************!*\
  !*** ./src/testing/test_post_setup.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RealConnection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RealConnection.js */ "./src/testing/RealConnection.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(0,_RealConnection_js__WEBPACK_IMPORTED_MODULE_0__.flushRealConnectionSuits)();


/***/ })

}]);