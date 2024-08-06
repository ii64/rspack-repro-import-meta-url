"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_extensions_ExtensionServer_test_js"],{

/***/ "./models/extensions/ExtensionServer.test.js":
/*!***************************************************!*\
  !*** ./models/extensions/ExtensionServer.test.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_ExtensionHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ExtensionHelpers.js */ "./testing/ExtensionHelpers.js");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../extensions/extensions.js */ "./models/extensions/extensions.js");
/* harmony import */ var _logs_logs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../logs/logs.js */ "./models/logs/logs.js");
/* harmony import */ var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











(0,_testing_ExtensionHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithDevtoolsExtension)('Extensions', {}, context => {
    it('are initialized after the target is initialized and navigated to a non-privileged URL', async () => {
        // This check is a proxy for verifying that the extension has been initialized. Outside of the test the extension
        // API is available as soon as the extension page is loaded, which we don't do in the test.
        assert.isUndefined(context.chrome.devtools);
        const addExtensionStub = sinon.stub(_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.instance(), 'addExtension');
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)().setInspectedURL('http://example.com');
        assert.isTrue(addExtensionStub.calledOnceWithExactly(context.extensionDescriptor));
    });
    it('are not initialized before the target is initialized and navigated to a non-privileged URL', async () => {
        // This check is a proxy for verifying that the extension has been initialized. Outside of the test the extension
        // API is available as soon as the extension page is loaded, which we don't do in the test.
        assert.isUndefined(context.chrome.devtools);
        const addExtensionStub = sinon.stub(_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.instance(), 'addExtension');
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)().setInspectedURL('chrome://version');
        assert.isTrue(addExtensionStub.notCalled);
    });
    it('defers loading extensions until after navigation from a privileged to a non-privileged host', async () => {
        const addExtensionSpy = sinon.spy(_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.instance(), 'addExtension');
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Frame });
        target.setInspectedURL('chrome://abcdef');
        assert.isTrue(addExtensionSpy.notCalled, 'addExtension not called');
        target.setInspectedURL(allowedUrl);
        assert.isTrue(addExtensionSpy.calledOnce, 'addExtension called once');
        assert.isTrue(addExtensionSpy.returned(true), 'addExtension returned true');
    });
    it('only returns page resources for allowed targets', async () => {
        const urls = ['http://example.com', 'chrome://version'];
        const targets = urls.map(async (url) => {
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ url });
            const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
            assert.isNotNull(resourceTreeModel);
            await resourceTreeModel.once(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.CachedResourcesLoaded);
            target.setInspectedURL(url);
            resourceTreeModel.mainFrame?.addResource(new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Resource.Resource(resourceTreeModel, null, url, url, null, null, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document, 'application/text', null, null));
            return target;
        });
        await Promise.all(targets);
        const resources = await new Promise(r => context.chrome.devtools.inspectedWindow.getResources(r));
        assert.deepStrictEqual(resources.map(r => r.url), ['https://example.com/', 'http://example.com']);
    });
});
(0,_testing_ExtensionHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithDevtoolsExtension)('Extensions', {}, context => {
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.expectConsoleLogs)({
        warn: ['evaluate: the main frame is not yet available'],
        error: ['Extension server error: Object not found: <top>'],
    });
    beforeEach(() => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)().setInspectedURL('http://example.com');
    });
    it('can register a recorder extension for export', async () => {
        class RecorderPlugin {
            async stringify(recording) {
                return JSON.stringify(recording);
            }
            async stringifyStep(step) {
                return JSON.stringify(step);
            }
        }
        const extensionPlugin = new RecorderPlugin();
        await context.chrome.devtools?.recorder.registerRecorderExtensionPlugin(extensionPlugin, 'Test', 'text/javascript');
        const manager = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.RecorderPluginManager.RecorderPluginManager.instance();
        assert.strictEqual(manager.plugins().length, 1);
        const plugin = manager.plugins()[0];
        const result = await plugin.stringify({
            name: 'test',
            steps: [],
        });
        const stepResult = await plugin.stringifyStep({
            type: 'scroll',
        });
        assert.strictEqual(manager.plugins().length, 1);
        assert.strictEqual(manager.plugins()[0].getMediaType(), 'text/javascript');
        assert.strictEqual(manager.plugins()[0].getName(), 'Test');
        assert.deepStrictEqual(manager.plugins()[0].getCapabilities(), ['export']);
        assert.deepStrictEqual(result, '{"name":"test","steps":[]}');
        assert.deepStrictEqual(stepResult, '{"type":"scroll"}');
        await context.chrome.devtools?.recorder.unregisterRecorderExtensionPlugin(extensionPlugin);
    });
    it('can register a recorder extension for replay', async () => {
        class RecorderPlugin {
            replay(_recording) {
                return;
            }
        }
        const extensionPlugin = new RecorderPlugin();
        await context.chrome.devtools?.recorder.registerRecorderExtensionPlugin(extensionPlugin, 'Replay');
        const manager = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.RecorderPluginManager.RecorderPluginManager.instance();
        assert.strictEqual(manager.plugins().length, 1);
        const plugin = manager.plugins()[0];
        await plugin.replay({
            name: 'test',
            steps: [],
        });
        assert.strictEqual(manager.plugins().length, 1);
        assert.deepStrictEqual(manager.plugins()[0].getCapabilities(), ['replay']);
        assert.strictEqual(manager.plugins()[0].getName(), 'Replay');
        await context.chrome.devtools?.recorder.unregisterRecorderExtensionPlugin(extensionPlugin);
    });
    it('can create and show a panel for Recorder', async () => {
        const panel = await new Promise(resolve => context.chrome.devtools?.panels.create('Test', 'test.png', 'test.html', resolve));
        class RecorderPlugin {
            replay(_recording) {
                panel?.show();
            }
        }
        const extensionPlugin = new RecorderPlugin();
        await context.chrome.devtools?.recorder.registerRecorderExtensionPlugin(extensionPlugin, 'Replay');
        const manager = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.RecorderPluginManager.RecorderPluginManager.instance();
        assert.strictEqual(manager.plugins().length, 1);
        const plugin = manager.plugins()[0];
        const stub = sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.InspectorView.InspectorView.instance(), 'showPanel').callsFake(() => Promise.resolve());
        await plugin.replay({
            name: 'test',
            steps: [],
        });
        assert.isTrue(stub.called);
        await context.chrome.devtools?.recorder.unregisterRecorderExtensionPlugin(extensionPlugin);
    });
    it('can create and show a view for Recorder', async () => {
        const view = await context.chrome.devtools?.recorder.createView('Test', 'test.html');
        class RecorderPlugin {
            replay(_recording) {
                view?.show();
            }
        }
        const extensionPlugin = new RecorderPlugin();
        await context.chrome.devtools?.recorder.registerRecorderExtensionPlugin(extensionPlugin, 'Replay');
        const manager = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.RecorderPluginManager.RecorderPluginManager.instance();
        assert.strictEqual(manager.plugins().length, 1);
        assert.strictEqual(manager.views().length, 1);
        const plugin = manager.plugins()[0];
        const onceShowRequested = manager.once("showViewRequested" /* Extensions.RecorderPluginManager.Events.ShowViewRequested */);
        await plugin.replay({
            name: 'test',
            steps: [],
        });
        const viewDescriptor = await onceShowRequested;
        assert.deepStrictEqual(viewDescriptor.title, 'Test');
        await context.chrome.devtools?.recorder.unregisterRecorderExtensionPlugin(extensionPlugin);
    });
    it('can not show a view for Recorder without using the replay trigger', async () => {
        const view = await context.chrome.devtools?.recorder.createView('Test', 'test.html');
        class RecorderPlugin {
            replay(_recording) {
            }
            stringify(recording) {
                return JSON.stringify(recording);
            }
        }
        const extensionPlugin = new RecorderPlugin();
        await context.chrome.devtools?.recorder.registerRecorderExtensionPlugin(extensionPlugin, 'Replay');
        const manager = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.RecorderPluginManager.RecorderPluginManager.instance();
        assert.strictEqual(manager.plugins().length, 1);
        assert.strictEqual(manager.views().length, 1);
        const events = [];
        manager.addEventListener("showViewRequested" /* Extensions.RecorderPluginManager.Events.ShowViewRequested */, event => {
            events.push(event);
        });
        view?.show();
        // Sending inspectedWindow.eval should flush the message queue and make sure
        // that the ShowViewRequested command was not actually dispatched.
        await new Promise(resolve => context.chrome.devtools?.inspectedWindow.eval('1', undefined, resolve));
        assert.deepStrictEqual(events, []);
        await context.chrome.devtools?.recorder.unregisterRecorderExtensionPlugin(extensionPlugin);
    });
    it('can dispatch hide and show events', async () => {
        const view = await context.chrome.devtools?.recorder.createView('Test', 'test.html');
        const onShownCalled = sinon.promise();
        const onShown = () => onShownCalled.resolve(true);
        const onHiddenCalled = sinon.promise();
        const onHidden = () => onHiddenCalled.resolve(true);
        view?.onHidden.addListener(onHidden);
        view?.onShown.addListener(onShown);
        class RecorderPlugin {
            replay(_recording) {
                view?.show();
            }
        }
        const extensionPlugin = new RecorderPlugin();
        await context.chrome.devtools?.recorder.registerRecorderExtensionPlugin(extensionPlugin, 'Replay');
        const manager = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.RecorderPluginManager.RecorderPluginManager.instance();
        const plugin = manager.plugins()[0];
        const onceShowRequested = manager.once("showViewRequested" /* Extensions.RecorderPluginManager.Events.ShowViewRequested */);
        await plugin.replay({
            name: 'test',
            steps: [],
        });
        const viewDescriptor = await onceShowRequested;
        assert.deepStrictEqual(viewDescriptor.title, 'Test');
        const descriptor = manager.getViewDescriptor(viewDescriptor.id);
        descriptor?.onShown();
        await onShownCalled;
        descriptor?.onHidden();
        await onHiddenCalled;
        await context.chrome.devtools?.recorder.unregisterRecorderExtensionPlugin(extensionPlugin);
    });
    it('reload only the main toplevel frame', async () => {
        const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
        assert.isNotNull(target);
        const secondTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        const secondResourceTreeModel = secondTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
        assert.isNotNull(secondResourceTreeModel);
        const secondReloadStub = sinon.stub(secondResourceTreeModel, 'reloadPage');
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
        assert.isNotNull(resourceTreeModel);
        const reloadStub = sinon.stub(resourceTreeModel, 'reloadPage');
        const reloadPromise = new Promise(resolve => reloadStub.callsFake(resolve));
        context.chrome.devtools.inspectedWindow.reload();
        await reloadPromise;
        assert.isTrue(reloadStub.calledOnce);
        assert.isTrue(secondReloadStub.notCalled);
    });
    it('correcly installs blocked extensions after navigation', async () => {
        const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
        assert.isOk(target);
        target.setInspectedURL('chrome://version');
        const extensionServer = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.instance();
        const addExtensionSpy = sinon.spy(extensionServer, 'addExtension');
        assert.isUndefined(extensionServer.addExtension({
            startPage: 'about:blank',
            name: 'ext',
            exposeExperimentalAPIs: false,
        }));
        target.setInspectedURL('http://example.com');
        assert.deepStrictEqual(addExtensionSpy.returnValues, [undefined, true]);
    });
    it('correcly reenables extensions after navigation', async () => {
        const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
        assert.isOk(target);
        const extensionServer = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.instance();
        assert.isTrue(extensionServer.isEnabledForTest);
        target.setInspectedURL('chrome://version');
        assert.isFalse(extensionServer.isEnabledForTest);
        target.setInspectedURL('http://example.com');
        assert.isTrue(extensionServer.isEnabledForTest);
    });
});
const allowedUrl = _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.FRAME_URL;
const blockedUrl = 'http://web.dev';
const hostsPolicy = {
    runtimeAllowedHosts: [allowedUrl],
    runtimeBlockedHosts: [allowedUrl, blockedUrl],
};
function waitForFunction(fn) {
    return new Promise(r => {
        const check = () => {
            const result = fn();
            if (result) {
                r(result);
            }
            else {
                setTimeout(check);
            }
        };
        check();
    });
}
(0,_testing_ExtensionHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithDevtoolsExtension)('Runtime hosts policy', { hostsPolicy }, context => {
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.expectConsoleLogs)({ error: ['Extension server error: Operation failed: Permission denied'] });
    for (const protocol of ['devtools', 'chrome', 'chrome-untrusted', 'chrome-error', 'chrome-search']) {
        it(`blocks API calls on blocked protocols: ${protocol}`, async () => {
            assert.isUndefined(context.chrome.devtools);
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Frame });
            const addExtensionStub = sinon.stub(_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.instance(), 'addExtension');
            target.setInspectedURL(`${protocol}://foo`);
            assert.isTrue(addExtensionStub.notCalled);
            assert.isUndefined(context.chrome.devtools);
        });
    }
    it('blocks API calls on blocked hosts', async () => {
        assert.isUndefined(context.chrome.devtools);
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Frame });
        const addExtensionStub = sinon.spy(_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.instance(), 'addExtension');
        target.setInspectedURL(blockedUrl);
        assert.isTrue(addExtensionStub.alwaysReturned(undefined));
        assert.isUndefined(context.chrome.devtools);
    });
    it('allows API calls on allowlisted hosts', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Frame });
        target.setInspectedURL(allowedUrl);
        {
            const result = await new Promise(cb => context.chrome.devtools?.network.getHAR(cb));
            // eslint-disable-next-line rulesdir/compare_arrays_with_assert_deepequal
            assert.hasAnyKeys(result, ['entries']);
        }
    });
    it('allows API calls on non-blocked hosts', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Frame });
        target.setInspectedURL('http://example.com2');
        {
            const result = await new Promise(cb => context.chrome.devtools?.network.getHAR(cb));
            // eslint-disable-next-line rulesdir/compare_arrays_with_assert_deepequal
            assert.hasAnyKeys(result, ['entries']);
        }
    });
    it('defers loading extensions until after navigation from a blocked to an allowed host', async () => {
        const addExtensionSpy = sinon.spy(_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.instance(), 'addExtension');
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Frame });
        target.setInspectedURL(blockedUrl);
        assert.isTrue(addExtensionSpy.calledOnce, 'addExtension called once');
        assert.deepStrictEqual(addExtensionSpy.returnValues, [undefined]);
        target.setInspectedURL(allowedUrl);
        assert.isTrue(addExtensionSpy.calledTwice, 'addExtension called twice');
        assert.deepStrictEqual(addExtensionSpy.returnValues, [undefined, true]);
    });
    it('does not include blocked hosts in the HAR entries', async () => {
        _logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance();
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Frame });
        target.setInspectedURL('http://example.com2');
        const networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.NetworkManager);
        assert.exists(networkManager);
        const frameId = 'frame-id';
        createRequest(networkManager, frameId, 'blocked-url-request-id', blockedUrl);
        createRequest(networkManager, frameId, 'allowed-url-request-id', allowedUrl);
        {
            const result = await new Promise(cb => context.chrome.devtools?.network.getHAR(cb));
            assert.exists(result.entries.find(e => e.request.url === allowedUrl));
            assert.notExists(result.entries.find(e => e.request.url === blockedUrl));
        }
    });
    async function setUpFrame(name, url, parentFrame, executionContextOrigin) {
        const parentTarget = parentFrame?.resourceTreeModel()?.target();
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ id: `${name}-target-id`, parentTarget });
        const frame = parentFrame ? await (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.addChildFrame)(target, { url }) : (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target, { url });
        if (executionContextOrigin) {
            executionContextOrigin = new URL(executionContextOrigin).origin;
            const parentRuntimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            assert.exists(parentRuntimeModel);
            parentRuntimeModel.executionContextCreated({
                id: 0,
                origin: executionContextOrigin,
                name: executionContextOrigin,
                uniqueId: executionContextOrigin,
                auxData: { frameId: frame.id, isDefault: true },
            });
        }
        return frame;
    }
    it('blocks evaluation on blocked subframes', async () => {
        assert.isUndefined(context.chrome.devtools);
        const parentFrameUrl = allowedUrl;
        const childFrameUrl = blockedUrl;
        const parentFrame = await setUpFrame('parent', parentFrameUrl);
        await setUpFrame('child', childFrameUrl, parentFrame);
        const result = await new Promise(r => context.chrome.devtools?.inspectedWindow.eval('4', { frameURL: childFrameUrl }, (result, error) => r({ result, error })));
        assert.deepStrictEqual(result.error?.details, ['Permission denied']);
    });
    it('doesn\'t block evaluation on blocked sub-executioncontexts with useContentScriptContext', async () => {
        assert.isUndefined(context.chrome.devtools);
        const parentFrameUrl = allowedUrl;
        const childFrameUrl = `${allowedUrl}/2`;
        const childExeContextOrigin = blockedUrl;
        const parentFrame = await setUpFrame('parent', parentFrameUrl, undefined, parentFrameUrl);
        const childFrame = await setUpFrame('child', childFrameUrl, parentFrame, childExeContextOrigin);
        // Create a fake content script execution context, i.e., a non-default context with the extension's (== window's)
        // origin.
        const runtimeModel = childFrame.resourceTreeModel()?.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
        assert.exists(runtimeModel);
        runtimeModel.executionContextCreated({
            id: 1,
            origin: window.location.origin,
            name: window.location.origin,
            uniqueId: window.location.origin,
            auxData: { frameId: childFrame.id, isDefault: false },
        });
        const contentScriptExecutionContext = runtimeModel.executionContext(1);
        assert.exists(contentScriptExecutionContext);
        sinon.stub(contentScriptExecutionContext, 'evaluate').returns(Promise.resolve({
            object: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RemoteObject.RemoteObject.fromLocalObject(4),
        }));
        const result = await new Promise(r => context.chrome.devtools?.inspectedWindow.eval('4', { frameURL: childFrameUrl, useContentScriptContext: true }, (result, error) => r({ result, error })));
        assert.deepStrictEqual(result.result, 4);
    });
    it('blocks evaluation on blocked sub-executioncontexts with explicit scriptExecutionContextOrigin', async () => {
        assert.isUndefined(context.chrome.devtools);
        const parentFrameUrl = allowedUrl;
        const childFrameUrl = `${allowedUrl}/2`;
        const parentFrame = await setUpFrame('parent', parentFrameUrl, undefined, parentFrameUrl);
        const childFrame = await setUpFrame('child', childFrameUrl, parentFrame, parentFrameUrl);
        // Create a non-default context with a blocked origin.
        const childExeContextOrigin = blockedUrl;
        const runtimeModel = childFrame.resourceTreeModel()?.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
        assert.exists(runtimeModel);
        runtimeModel.executionContextCreated({
            id: 1,
            origin: childExeContextOrigin,
            name: childExeContextOrigin,
            uniqueId: childExeContextOrigin,
            auxData: { frameId: childFrame.id, isDefault: false },
        });
        const result = await new Promise(r => context.chrome.devtools?.inspectedWindow.eval(
        // The typings don't match the implementation, so we need to cast to any here to make ts happy.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        '4', { frameURL: childFrameUrl, scriptExecutionContext: childExeContextOrigin }, (result, error) => r({ result, error })));
        assert.deepStrictEqual(result.error?.details, ['Permission denied']);
    });
    it('blocks evaluation on blocked sub-executioncontexts', async () => {
        assert.isUndefined(context.chrome.devtools);
        const parentFrameUrl = allowedUrl;
        const childFrameUrl = `${allowedUrl}/2`;
        const childExeContextOrigin = blockedUrl;
        const parentFrame = await setUpFrame('parent', parentFrameUrl, undefined, parentFrameUrl);
        await setUpFrame('child', childFrameUrl, parentFrame, childExeContextOrigin);
        const result = await new Promise(r => context.chrome.devtools?.inspectedWindow.eval('4', { frameURL: childFrameUrl }, (result, error) => r({ result, error })));
        assert.deepStrictEqual(result.error?.details, ['Permission denied']);
    });
    async function createUISourceCode(project, url) {
        const mimeType = 'text/html';
        const dataProvider = () => Promise.resolve(new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_9__.ContentData.ContentData('content', /* isBase64 */ false, mimeType));
        project.addUISourceCodeWithProvider(new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.UISourceCode.UISourceCode(project, url, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document), new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_9__.StaticContentProvider.StaticContentProvider(url, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document, dataProvider), null, mimeType);
        await project.uiSourceCodeForURL(url)?.requestContentData();
    }
    it('blocks getting resource contents on blocked urls', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ id: 'target' });
        target.setInspectedURL(allowedUrl);
        const project = new _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.ContentProviderBasedProject.ContentProviderBasedProject(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.Workspace.WorkspaceImpl.instance(), target.id(), _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.Workspace.projectTypes.Network, '', false /* isServiceProject */);
        await createUISourceCode(project, blockedUrl);
        await createUISourceCode(project, allowedUrl);
        assert.exists(context.chrome.devtools);
        const resources = await new Promise(r => context.chrome.devtools?.inspectedWindow.getResources(r));
        assert.deepStrictEqual(resources.map(r => r.url), [blockedUrl, allowedUrl]);
        const resourceContents = await Promise.all(resources.map(resource => new Promise(r => resource.getContent((content, encoding) => r({ url: resource.url, content, encoding })))));
        assert.deepStrictEqual(resourceContents, [
            { url: blockedUrl, content: undefined, encoding: undefined },
            { url: allowedUrl, content: 'content', encoding: '' },
        ]);
    });
    function createRequest(networkManager, frameId, requestId, url) {
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create(requestId, url, url, frameId, null, null, undefined);
        const dataProvider = () => Promise.resolve(new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_9__.ContentData.ContentData('content', false, request.mimeType));
        request.setContentDataProvider(dataProvider);
        networkManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.Events.RequestStarted, { request, originalRequest: null });
        request.finished = true;
        networkManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.Events.RequestFinished, request);
    }
    it('does not include blocked hosts in onRequestFinished event listener', async () => {
        const frameId = 'frame-id';
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ id: 'target' });
        target.setInspectedURL(allowedUrl);
        const requests = [];
        // onRequestFinished returns a type of Request. However in actual fact, the returned object contains HAR data
        // which result type mismatch due to the Request type not containing the respective fields in HAR.Log.EntryDTO.
        // Therefore, cast through unknown to resolve this.
        // TODO: (crbug.com/1482763) Update Request type to match HAR.Log.EntryDTO
        context.chrome.devtools?.network.onRequestFinished.addListener(r => requests.push(r));
        await waitForFunction(() => _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.instance().hasSubscribers("network-request-finished" /* Extensions.ExtensionAPI.PrivateAPI.Events.NetworkRequestFinished */));
        const networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.NetworkManager);
        assert.exists(networkManager);
        createRequest(networkManager, frameId, 'blocked-url-request-id', blockedUrl);
        createRequest(networkManager, frameId, 'allowed-url-request-id', allowedUrl);
        await waitForFunction(() => requests.length >= 1);
        assert.strictEqual(requests.length, 1);
        assert.exists(requests.find(e => e.request.url === allowedUrl));
        assert.notExists(requests.find(e => e.request.url === blockedUrl));
    });
    it('blocks setting resource contents on blocked urls', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ id: 'target' });
        target.setInspectedURL(allowedUrl);
        const project = new _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.ContentProviderBasedProject.ContentProviderBasedProject(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.Workspace.WorkspaceImpl.instance(), target.id(), _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.Workspace.projectTypes.Network, '', false /* isServiceProject */);
        await createUISourceCode(project, blockedUrl);
        await createUISourceCode(project, allowedUrl);
        assert.exists(context.chrome.devtools);
        const resources = await new Promise(r => context.chrome.devtools?.inspectedWindow.getResources(r));
        assert.deepStrictEqual(resources.map(r => r.url), [blockedUrl, allowedUrl]);
        assert.deepStrictEqual(project.uiSourceCodeForURL(allowedUrl)?.content(), 'content');
        assert.deepStrictEqual(project.uiSourceCodeForURL(blockedUrl)?.content(), 'content');
        const responses = await Promise.all(resources.map(resource => new Promise(r => resource.setContent('modified', true, r))));
        assert.deepStrictEqual(responses.map(response => response?.code), ['E_FAILED', 'OK']);
        assert.deepStrictEqual(responses.map(response => response?.details), [['Permission denied'], []]);
        assert.deepStrictEqual(project.uiSourceCodeForURL(allowedUrl)?.content(), 'modified');
        assert.deepStrictEqual(project.uiSourceCodeForURL(blockedUrl)?.content(), 'content');
    });
});
describe('ExtensionServer', () => {
    it('can correctly expand resource paths', async () => {
        // Ideally this would be a chrome-extension://, but that doesn't work with URL in chrome headless.
        const extensionOrigin = 'chrome://abcdef';
        const almostOrigin = `${extensionOrigin}/`;
        const expectation = `${extensionOrigin}/foo`;
        assert.strictEqual(undefined, _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.expandResourcePath(extensionOrigin, 'http://example.com/foo'));
        assert.strictEqual(expectation, _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.expandResourcePath(extensionOrigin, expectation));
        assert.strictEqual(expectation, _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.expandResourcePath(extensionOrigin, '/foo'));
        assert.strictEqual(expectation, _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.expandResourcePath(extensionOrigin, 'foo'));
        assert.strictEqual(undefined, _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.expandResourcePath(almostOrigin, 'http://example.com/foo'));
        assert.strictEqual(expectation, _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.expandResourcePath(almostOrigin, expectation));
        assert.strictEqual(expectation, _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.expandResourcePath(almostOrigin, '/foo'));
        assert.strictEqual(expectation, _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.expandResourcePath(almostOrigin, 'foo'));
    });
    it('cannot inspect chrome webstore URLs', () => {
        const blockedUrls = [
            'http://chrome.google.com/webstore',
            'https://chrome.google.com./webstore',
            'http://chrome.google.com/webstore',
            'https://chrome.google.com./webstore',
            'http://chrome.google.com/webstore/foo',
            'https://chrome.google.com./webstore/foo',
            'http://chrome.google.com/webstore/foo',
            'https://chrome.google.com./webstore/foo',
            'http://chromewebstore.google.com/',
            'https://chromewebstore.google.com./',
            'http://chromewebstore.google.com/',
            'https://chromewebstore.google.com./',
            'http://chromewebstore.google.com/foo',
            'https://chromewebstore.google.com./foo',
            'http://chromewebstore.google.com/foo',
            'https://chromewebstore.google.com./foo',
        ];
        const allowedUrls = [
            'http://chrome.google.com/webstor',
            'https://chrome.google.com./webstor',
            'http://chrome.google.com/webstor',
            'https://chrome.google.com./webstor',
            'http://chrome.google.com/',
            'https://chrome.google.com./',
            'http://chrome.google.com/',
            'https://chrome.google.com./',
            'http://google.com/webstore',
            'https://google.com./webstore',
            'http://google.com/webstore',
            'https://google.com./webstore',
            'http://chromewebstor.google.com/',
            'https://chromewebstor.google.com./',
            'http://chromewebstor.google.com/',
            'https://chromewebstor.google.com./',
        ];
        for (const url of blockedUrls) {
            assert.isFalse(_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.canInspectURL(url), url);
        }
        for (const url of allowedUrls) {
            assert.isTrue(_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_7__.ExtensionServer.ExtensionServer.canInspectURL(url), url);
        }
    });
});
function assertIsStatus(value) {
    if (value && typeof value === 'object' && 'code' in value) {
        assert.isTrue(value.code === 'OK' || Boolean(value.isError), `Value ${value} is not a status code`);
    }
    else {
        assert.fail(`Value ${value} is not a status code`);
    }
}
(0,_testing_ExtensionHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithDevtoolsExtension)('Wasm extension API', {}, context => {
    let stopId;
    beforeEach(() => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        target.setInspectedURL('http://example.com');
        const targetManager = target.targetManager();
        const resourceMapping = new _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceMapping.ResourceMapping(targetManager, _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.Workspace.WorkspaceImpl.instance());
        _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({ forceNew: true, resourceMapping, targetManager });
        const callFrame = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame);
        callFrame.debuggerModel = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel(target);
        sinon.stub(callFrame, 'id').get(() => '0');
        sinon.stub(callFrame.debuggerModel.agent, 'invoke_evaluateOnCallFrame')
            .returns(Promise.resolve({ result: { type: "undefined" /* Protocol.Runtime.RemoteObjectType.Undefined */ }, getError: () => undefined }));
        stopId = _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().pluginManager.stopIdForCallFrame(callFrame);
    });
    function captureError(expectedMessage) {
        const original = console.error;
        return sinon.stub(console, 'error').callsFake((message, ...args) => {
            if (expectedMessage !== message) {
                original(message, ...args);
            }
        });
    }
    it('getWasmGlobal does not block on invalid indices', async () => {
        const log = captureError('Extension server error: Invalid argument global: No global with index 0');
        const result = await context.chrome.devtools?.languageServices.getWasmGlobal(0, stopId);
        assertIsStatus(result);
        assert.isTrue(log.calledOnce);
        assert.strictEqual(result.code, 'E_BADARG');
        assert.strictEqual(result.details[0], 'global');
    });
    it('getWasmLocal does not block on invalid indices', async () => {
        const log = captureError('Extension server error: Invalid argument local: No local with index 0');
        const result = await context.chrome.devtools?.languageServices.getWasmLocal(0, stopId);
        assertIsStatus(result);
        assert.isTrue(log.calledOnce);
        assert.strictEqual(result.code, 'E_BADARG');
        assert.strictEqual(result.details[0], 'local');
    });
    it('getWasmOp does not block on invalid indices', async () => {
        const log = captureError('Extension server error: Invalid argument op: No operand with index 0');
        const result = await context.chrome.devtools?.languageServices.getWasmOp(0, stopId);
        assertIsStatus(result);
        assert.isTrue(log.calledOnce);
        assert.strictEqual(result.code, 'E_BADARG');
        assert.strictEqual(result.details[0], 'op');
    });
});
(0,_testing_ExtensionHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithDevtoolsExtension)('Language Extension API', {}, context => {
    it('reports loaded resources', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        target.setInspectedURL('http://example.com');
        const pageResourceLoader = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.PageResourceLoader.PageResourceLoader.instance({ forceNew: true, loadOverride: null, maxConcurrentLoads: 1 });
        const spy = sinon.spy(pageResourceLoader, 'resourceLoadedThroughExtension');
        await context.chrome.devtools?.languageServices.reportResourceLoad('test.dwo', { success: true, size: 10 });
        assert.isTrue(spy.calledOnce);
        assert.strictEqual(pageResourceLoader.getNumberOfResources().resources, 1);
        const resource = spy.args[0][0];
        const extensionId = (0,_testing_ExtensionHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getExtensionOrigin)();
        const expectedInitiator = { target: null, frameId: null, initiatorUrl: extensionId, extensionId };
        const expectedResource = {
            url: 'test.dwo',
            initiator: expectedInitiator,
            success: true,
            size: 10,
            errorMessage: undefined,
        };
        assert.deepEqual(resource, expectedResource);
    });
});
//# sourceMappingURL=ExtensionServer.test.js.map

/***/ }),

/***/ "./testing/ExtensionHelpers.js":
/*!*************************************!*\
  !*** ./testing/ExtensionHelpers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   describeWithDevtoolsExtension: () => (/* binding */ describeWithDevtoolsExtension),
/* harmony export */   getExtensionOrigin: () => (/* binding */ getExtensionOrigin)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/extensions/extensions.js */ "./models/extensions/extensions.js");
/* harmony import */ var _EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MockConnection.js */ "./testing/MockConnection.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




function getExtensionOrigin() {
    return window.location.origin;
}
function describeWithDevtoolsExtension(title, extension, fn) {
    const extensionDescriptor = {
        startPage: `${getExtensionOrigin()}/blank.html`,
        name: 'TestExtension',
        exposeExperimentalAPIs: true,
        allowFileAccess: false,
        ...extension,
    };
    const context = {
        extensionDescriptor,
        chrome: {},
    };
    function setup() {
        const server = _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.ExtensionServer.ExtensionServer.instance({ forceNew: true });
        sinon.stub(server, 'addExtensionFrame');
        sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance, 'setInjectedScriptForOrigin')
            .callsFake((origin, _script) => {
            if (origin === getExtensionOrigin()) {
                const chrome = {};
                window.chrome = chrome;
                self.injectedExtensionAPI(extensionDescriptor, 'main', 'dark', [], () => { }, 1, window);
                context.chrome = chrome;
            }
        });
        server.addExtension(extensionDescriptor);
    }
    function cleanup() {
        const chrome = {};
        window.chrome = chrome;
        context.chrome = chrome;
    }
    return (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)(`with-extension-${title}`, function () {
        beforeEach(cleanup);
        beforeEach(setup);
        afterEach(cleanup);
        (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)(title, function () {
            (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupActionRegistry)();
            fn.call(this, context);
        });
    });
}
describeWithDevtoolsExtension.only = function (title, extension, fn) {
    // eslint-disable-next-line mocha/no-exclusive-tests
    return describe.only('.only', function () {
        return describeWithDevtoolsExtension(title, extension, fn);
    });
};
//# sourceMappingURL=ExtensionHelpers.js.map

/***/ })

}]);