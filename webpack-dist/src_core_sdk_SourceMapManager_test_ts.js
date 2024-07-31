"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_sdk_SourceMapManager_test_ts"],{

/***/ "./src/core/sdk/SourceMapManager.test.ts":
/*!***********************************************!*\
  !*** ./src/core/sdk/SourceMapManager.test.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/SourceMapHelpers.js */ "./src/testing/SourceMapHelpers.ts");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const content = JSON.stringify({
    'version': 3,
    'file': '/script.js',
    'mappings': '',
    'sources': [
        '/original-script.js',
    ],
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('SourceMapManager', () => {
    it('uses url for a worker\'s source maps from frame', async () => {
        (0,_testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupPageResourceLoaderForSourceMap)(content);
        const frameUrl = 'https://frame-host/index.html';
        const scriptUrl = 'https://script-host/script.js';
        const sourceUrl = 'script.js';
        const sourceMapUrl = 'script.js.map';
        const mainTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ id: 'main', name: 'main', type: _sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Frame });
        mainTarget.setInspectedURL(frameUrl);
        const workerTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
            id: 'worker',
            name: 'worker',
            type: _sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Worker,
            parentTarget: mainTarget,
        });
        const debuggerModel = workerTarget.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerModel.DebuggerModel);
        assert.isNotNull(debuggerModel);
        const sourceMapManager = debuggerModel.sourceMapManager();
        const script = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.Script.Script(debuggerModel, '1', scriptUrl, 0, 0, 0, 0, 0, '', false, false, sourceMapUrl, false, 0, null, null, null, null, null, null);
        sourceMapManager.attachSourceMap(script, sourceUrl, sourceMapUrl);
        const sourceMap = await sourceMapManager.sourceMapForClientPromise(script);
        // Check that the URLs are resolved relative to the frame.
        assert.strictEqual(sourceMap?.url(), 'https://frame-host/script.js.map');
        assert.deepEqual(sourceMap?.sourceURLs(), ['https://frame-host/original-script.js']);
    });
    it('can handle source maps in a data URL frame', async () => {
        (0,_testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupPageResourceLoaderForSourceMap)(content);
        const sourceUrl = 'script.js';
        const sourceMapUrl = `data:test/html;base64,${btoa(content)}`;
        const frameSource = '<script>0\n//# sourceURL=' + sourceUrl + '\n//# sourceMappingURL=' + sourceMapUrl + '</script>';
        const frameUrl = `data:test/html;base64,${btoa(frameSource)}`;
        const scriptUrl = 'https://script-host/script.js';
        const mainTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ id: 'main', name: 'main', type: _sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Frame });
        mainTarget.setInspectedURL(frameUrl);
        const debuggerModel = mainTarget.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerModel.DebuggerModel);
        assert.isNotNull(debuggerModel);
        const sourceMapManager = debuggerModel.sourceMapManager();
        const script = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.Script.Script(debuggerModel, '1', scriptUrl, 0, 0, 0, 0, 0, '', false, false, sourceMapUrl, false, 0, null, null, null, null, null, null);
        sourceMapManager.attachSourceMap(script, sourceUrl, sourceMapUrl);
        const sourceMap = await sourceMapManager.sourceMapForClientPromise(script);
        assert.deepEqual(sourceMap?.sourceURLs(), ['/original-script.js']);
    });
});
describe('SourceMapManager', () => {
    const sourceURL = 'http://localhost/foo.js';
    const sourceMappingURL = `${sourceURL}.map`;
    beforeEach(() => {
        _sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance({ forceNew: true });
        _sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance({ forceNew: true, loadOverride: null, maxConcurrentLoads: 1 });
    });
    afterEach(() => {
        _sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.removeInstance();
        _sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.removeInstance();
    });
    const createTarget = () => {
        const target = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Target);
        target.type.returns(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Frame);
        return target;
    };
    class MockClient {
        constructor(target) {
            Object.defineProperty(this, "target", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: target
            });
        }
        createPageResourceLoadInitiator() {
            return { target: this.target, frameId: null, initiatorUrl: null };
        }
    }
    describe('attachSourceMap', () => {
        it('catches attempts to attach twice for the same client', async () => {
            const target = createTarget();
            const sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
            const client = new MockClient(target);
            sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').resolves({ content });
            sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
            assert.throws(() => sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL));
            await sourceMapManager.sourceMapForClientPromise(client);
        });
        it('triggers the correct lifecycle events when loading succeeds', async () => {
            const target = createTarget();
            const sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
            const client = new MockClient(target);
            const sourceMapWillAttach = sinon.spy();
            sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapWillAttach, sourceMapWillAttach);
            const sourceMapAttached = sinon.spy();
            sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapAttached, sourceMapAttached);
            sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').resolves({ content });
            sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
            assert.strictEqual(sourceMapWillAttach.callCount, 1, 'SourceMapWillAttach events');
            assert.isTrue(sourceMapWillAttach.calledWith(sinon.match.hasNested('data.client', client)));
            const sourceMap = await sourceMapManager.sourceMapForClientPromise(client);
            assert.strictEqual(sourceMapAttached.callCount, 1, 'SourceMapAttached events');
            assert.isTrue(sourceMapAttached.calledWith(sinon.match.hasNested('data.client', client)));
            assert.isTrue(sourceMapAttached.calledWith(sinon.match.hasNested('data.sourceMap', sourceMap)));
            assert.isTrue(sourceMapAttached.calledAfter(sourceMapWillAttach));
        });
        it('triggers the correct lifecycle events when loading fails', async () => {
            const target = createTarget();
            const sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
            const client = new MockClient(target);
            const sourceMapWillAttach = sinon.spy();
            sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapWillAttach, sourceMapWillAttach);
            const sourceMapFailedToAttach = sinon.spy();
            sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapFailedToAttach, sourceMapFailedToAttach);
            sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').rejects('Error');
            sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
            assert.strictEqual(sourceMapWillAttach.callCount, 1, 'SourceMapWillAttach events');
            assert.isTrue(sourceMapWillAttach.calledWith(sinon.match.hasNested('data.client', client)));
            await sourceMapManager.sourceMapForClientPromise(client);
            assert.strictEqual(sourceMapFailedToAttach.callCount, 1, 'SourceMapFailedToAttach events');
            assert.isTrue(sourceMapFailedToAttach.calledWith(sinon.match.hasNested('data.client', client)));
            assert.isTrue(sourceMapFailedToAttach.calledAfter(sourceMapWillAttach));
        });
        it('correctly handles the case where sourcemap reattaches immediately', async () => {
            const target = createTarget();
            const sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
            const client = new MockClient(target);
            const sourceMapAttached = sinon.spy();
            sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapAttached, sourceMapAttached);
            const sourceMapFailedToAttach = sinon.spy();
            sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapFailedToAttach, sourceMapFailedToAttach);
            sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').resolves({ content });
            sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
            sourceMapManager.detachSourceMap(client);
            assert.isTrue(sourceMapFailedToAttach.calledWith(sinon.match.hasNested('data.client', client)));
            sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
            await sourceMapManager.sourceMapForClientPromise(client);
            assert.strictEqual(sourceMapAttached.callCount, 1, 'SourceMapAttached events');
            assert.isTrue(sourceMapAttached.calledWith(sinon.match.hasNested('data.client', client)));
            assert.isTrue(sourceMapAttached.calledAfter(sourceMapFailedToAttach));
        });
        it('correctly handles separate clients with same sourceURL and sourceMappingURL', async () => {
            const target = createTarget();
            const sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
            const client1 = new MockClient(target);
            const client2 = new MockClient(target);
            sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').resolves({ content });
            sourceMapManager.attachSourceMap(client1, sourceURL, sourceMappingURL);
            sourceMapManager.attachSourceMap(client2, sourceURL, sourceMappingURL);
            const [sourceMap1, sourceMap2] = await Promise.all([
                sourceMapManager.sourceMapForClientPromise(client1),
                sourceMapManager.sourceMapForClientPromise(client2),
            ]);
            assert.notStrictEqual(sourceMap1, sourceMap2);
        });
        it('defers loading sourcemaps while disabled', async () => {
            const target = createTarget();
            const sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
            sourceMapManager.setEnabled(false);
            const client = new MockClient(target);
            const loadResource = sinon.spy(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource');
            sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
            assert.strictEqual(loadResource.callCount, 0, 'loadResource calls');
            assert.isUndefined(sourceMapManager.sourceMapForClient(client));
            assert.isUndefined(await sourceMapManager.sourceMapForClientPromise(client));
            sourceMapManager.setEnabled(true);
            assert.strictEqual(loadResource.callCount, 1, 'loadResource calls');
            await sourceMapManager.sourceMapForClientPromise(client);
        });
        it('does not attempt to load when attach is cancelled', async () => {
            const target = createTarget();
            const sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
            const client = new MockClient(target);
            sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapWillAttach, ({ data: { client } }) => sourceMapManager.cancelAttachSourceMap(client));
            const sourceMapFailedToAttach = sinon.spy();
            sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapFailedToAttach, sourceMapFailedToAttach);
            const loadResource = sinon.spy(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource');
            sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
            assert.strictEqual(loadResource.callCount, 0, 'loadResource calls');
            await sourceMapManager.sourceMapForClientPromise(client);
            assert.strictEqual(sourceMapFailedToAttach.callCount, 1, 'SourceMapFailedToAttach events');
            assert.isTrue(sourceMapFailedToAttach.calledWith(sinon.match.hasNested('data.client', client)));
        });
    });
    describe('detachSourceMap', () => {
        it('silently ignores unknown clients', () => {
            const target = createTarget();
            const sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
            const client = new MockClient(target);
            sourceMapManager.detachSourceMap(client);
        });
        it('triggers the correct lifecycle events', async () => {
            const target = createTarget();
            const sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
            const client = new MockClient(target);
            const sourceMapDetached = sinon.spy();
            sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapDetached, sourceMapDetached);
            sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').resolves({ content });
            sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
            const sourceMap = await sourceMapManager.sourceMapForClientPromise(client);
            sourceMapManager.detachSourceMap(client);
            assert.strictEqual(sourceMapDetached.callCount, 1, 'SourceMapDetached events');
            assert.isTrue(sourceMapDetached.calledWith(sinon.match.hasNested('data.client', client)));
            assert.isTrue(sourceMapDetached.calledWith(sinon.match.hasNested('data.sourceMap', sourceMap)));
        });
        it('triggers the correct lifecycle events when disabled', async () => {
            const target = createTarget();
            const sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
            const client = new MockClient(target);
            sourceMapManager.setEnabled(false);
            sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
            const sourceMapFailedToAttach = sinon.spy();
            sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapFailedToAttach, sourceMapFailedToAttach);
            const sourceMapDetached = sinon.spy();
            sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapDetached, sourceMapDetached);
            sourceMapManager.detachSourceMap(client);
            assert.strictEqual(sourceMapFailedToAttach.callCount, 0, 'SourceMapFailedToAttach events');
            assert.strictEqual(sourceMapDetached.callCount, 0, 'SourceMapDetached events');
        });
    });
    describe('setEnabled', () => {
        it('triggers the correct lifecycle events when disabling while attaching', () => {
            const target = createTarget();
            const sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
            const client = new MockClient(target);
            sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').returns(new Promise(() => { }));
            sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
            const sourceMapFailedToAttach = sinon.spy();
            sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapFailedToAttach, sourceMapFailedToAttach);
            sourceMapManager.setEnabled(false);
            assert.strictEqual(sourceMapFailedToAttach.callCount, 1, 'SourceMapFailedToAttach events');
            assert.isTrue(sourceMapFailedToAttach.calledWith(sinon.match.hasNested('data.client', client)));
        });
        it('triggers the correct lifecycle events when disabling once attached', async () => {
            const target = createTarget();
            const sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
            const client = new MockClient(target);
            sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').resolves({ content });
            sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
            const sourceMap = await sourceMapManager.sourceMapForClientPromise(client);
            const sourceMapDetached = sinon.spy();
            sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapDetached, sourceMapDetached);
            sourceMapManager.setEnabled(false);
            assert.strictEqual(sourceMapDetached.callCount, 1, 'SourceMapDetached events');
            assert.isTrue(sourceMapDetached.calledWith(sinon.match.hasNested('data.client', client)));
            assert.isTrue(sourceMapDetached.calledWith(sinon.match.hasNested('data.sourceMap', sourceMap)));
        });
        it('triggers the correct lifecycle events when re-enabling', async () => {
            const target = createTarget();
            const sourceMapManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.SourceMapManager(target);
            const client = new MockClient(target);
            sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').resolves({ content });
            sourceMapManager.attachSourceMap(client, sourceURL, sourceMappingURL);
            await sourceMapManager.sourceMapForClientPromise(client);
            sourceMapManager.setEnabled(false);
            const sourceMapDetached = sinon.spy();
            sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapDetached, sourceMapDetached);
            const sourceMapWillAttach = sinon.spy();
            sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapWillAttach, sourceMapWillAttach);
            const sourceMapFailedToAttach = sinon.spy();
            sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapFailedToAttach, sourceMapFailedToAttach);
            const sourceMapAttached = sinon.spy();
            sourceMapManager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapManager.Events.SourceMapAttached, sourceMapAttached);
            sourceMapManager.setEnabled(true);
            const sourceMap = await sourceMapManager.sourceMapForClientPromise(client);
            assert.strictEqual(sourceMapDetached.callCount, 0, 'SourceMapDetached events');
            assert.strictEqual(sourceMapFailedToAttach.callCount, 0, 'SourceMapFailedToAttach events');
            assert.strictEqual(sourceMapWillAttach.callCount, 1, 'SourceMapWillAttach events');
            assert.isTrue(sourceMapWillAttach.calledWith(sinon.match.hasNested('data.client', client)));
            assert.isTrue(sourceMapAttached.calledAfter(sourceMapWillAttach));
            assert.strictEqual(sourceMapAttached.callCount, 1, 'SourceMapAttached events');
            assert.isTrue(sourceMapAttached.calledWith(sinon.match.hasNested('data.client', client)));
            assert.isTrue(sourceMapAttached.calledWith(sinon.match.hasNested('data.sourceMap', sourceMap)));
        });
    });
});


/***/ }),

/***/ "./src/testing/SourceMapHelpers.ts":
/*!*****************************************!*\
  !*** ./src/testing/SourceMapHelpers.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadBasicSourceMapExample: () => (/* binding */ loadBasicSourceMapExample),
/* harmony export */   setupPageResourceLoaderForSourceMap: () => (/* binding */ setupPageResourceLoaderForSourceMap)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MockConnection.js */ "./src/testing/MockConnection.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




function setupPageResourceLoaderForSourceMap(sourceMapContent) {
    const loadSourceMap = async (_url) => {
        return {
            success: true,
            content: sourceMapContent,
            errorDescription: { message: '', statusCode: 0, netError: 0, netErrorName: '', urlValid: true },
        };
    };
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PageResourceLoader.PageResourceLoader.instance({ forceNew: true, loadOverride: loadSourceMap, maxConcurrentLoads: 1 });
}
async function loadBasicSourceMapExample(target) {
    const SCRIPT_ID = '25';
    const SCRIPT_URL = 'file://main.js';
    // Generated with:
    // `terser main.js --mangle --toplevel  --output gen.js  --source-map url='gen.js.map'` v5.15.0
    const SCRIPT_SOURCE = 'function n(){o("hi");console.log("done")}function o(n){const o=performance.now();while(performance.now()-o<n);}n();o(200);\n//# sourceMappingURL=gen.js.map';
    const SOURCE_MAP = {
        version: 3,
        names: ['sayHi', 'someFunction', 'console', 'log', 'breakDuration', 'started', 'performance', 'now'],
        sources: ['main.js'],
        mappings: 'AAAA,SAASA,IACLC,EAAW,MACXC,QAAQC,IAAI,OAChB,CAEA,SAASF,EAAWG,GAChB,MAAMC,EAAUC,YAAYC,MAC5B,MAAQD,YAAYC,MAAQF,EAAWD,GAC3C,CAEAJ,IACAC,EAAW',
    };
    const SOURCE_MAP_URL = 'file://gen.js.map';
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl.instance();
    const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
    const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
    const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
        forceNew: true,
        resourceMapping,
        targetManager,
    });
    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.IgnoreListManager.IgnoreListManager.instance({
        forceNew: true,
        debuggerWorkspaceBinding,
    });
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PageResourceLoader.PageResourceLoader.instance({
        forceNew: true,
        loadOverride: async (_) => ({
            success: true,
            content: JSON.stringify(SOURCE_MAP),
            errorDescription: { message: '', statusCode: 0, netError: 0, netErrorName: '', urlValid: true },
        }),
        maxConcurrentLoads: 1,
    });
    const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.DebuggerModel);
    let sourceMapAttachedCallback = () => { };
    const sourceMapAttachedPromise = new Promise(res => {
        sourceMapAttachedCallback = res;
    });
    if (!debuggerModel) {
        throw new Error('DebuggerModel was unexpectedly not found');
    }
    debuggerModel.sourceMapManager().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SourceMapManager.Events.SourceMapAttached, sourceMapAttachedCallback);
    (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Debugger.getScriptSource', getScriptSourceHandler);
    // Load the script and source map into the frontend.
    (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(target, 'Debugger.scriptParsed', {
        scriptId: SCRIPT_ID,
        url: SCRIPT_URL,
        startLine: 0,
        startColumn: 0,
        endLine: (SCRIPT_SOURCE.match(/^/gm)?.length ?? 1) - 1,
        endColumn: SCRIPT_SOURCE.length - SCRIPT_SOURCE.lastIndexOf('\n') - 1,
        executionContextId: 1,
        hash: '',
        hasSourceURL: false,
        sourceMapURL: SOURCE_MAP_URL,
    });
    function getScriptSourceHandler(_) {
        return { scriptSource: SCRIPT_SOURCE };
    }
    await sourceMapAttachedPromise;
    const script = debuggerModel.scriptForId(String(SCRIPT_ID));
    if (!script) {
        throw new Error('Script could not be registered');
    }
    const sourceMap = script.sourceMap();
    if (!sourceMap) {
        throw new Error('Source map could not be registered');
    }
    return { sourceMap, script };
}


/***/ })

}]);