"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_sdk_PageResourceLoader_test_ts"],{

/***/ "./src/core/sdk/PageResourceLoader.test.ts":
/*!*************************************************!*\
  !*** ./src/core/sdk/PageResourceLoader.test.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _host_host_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _platform_platform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const initiator = {
    target: null,
    frameId: '123',
    initiatorUrl: _platform_platform_js__WEBPACK_IMPORTED_MODULE_4__.DevToolsPath.EmptyUrlString,
};
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('PageResourceLoader', () => {
    const foo1Url = 'foo1';
    const foo2Url = 'foo2';
    const foo3Url = 'foo3';
    const loads = [];
    const load = async (url) => {
        loads.push({ url });
        return {
            success: true,
            content: `${url} - content`,
            errorDescription: { message: '', statusCode: 0, netError: 0, netErrorName: '', urlValid: true },
        };
    };
    beforeEach(() => {
        loads.length = 0;
    });
    it('registers extension loads', async () => {
        const loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({ forceNew: true, loadOverride: load, maxConcurrentLoads: 500 });
        const initiator = {
            extensionId: '123',
            initiatorUrl: 'www.test.com/main.wasm.dwp',
            target: null,
            frameId: null,
        };
        const extensionResource = {
            url: 'main.wasm.dwp',
            success: true,
            initiator,
            size: null,
        };
        loader.resourceLoadedThroughExtension(extensionResource);
        assert.deepEqual(loader.getScopedNumberOfResources(), { loading: 0, resources: 1 });
        assert.deepEqual(loader.getNumberOfResources(), { loading: 0, queued: 0, resources: 1 });
        const resources = Array.from(loader.getResourcesLoaded().values());
        assert.lengthOf(resources, 1);
        assert.isTrue(resources[0].success);
        assert.deepEqual(resources[0].initiator, initiator);
    });
    it('loads resources correctly', async () => {
        const loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({ forceNew: true, loadOverride: load, maxConcurrentLoads: 500 });
        const loading = [
            loader.loadResource(foo1Url, initiator),
            loader.loadResource(foo2Url, initiator),
            loader.loadResource(foo3Url, initiator),
        ];
        assert.deepEqual(loader.getNumberOfResources(), { loading: 3, queued: 0, resources: 3 });
        const results = await Promise.all(loading);
        assert.deepEqual(loads.map(x => x.url), ['foo1', 'foo2', 'foo3']);
        assert.deepEqual(results.map(x => x.content), ['foo1 - content', 'foo2 - content', 'foo3 - content']);
        assert.deepEqual(loader.getNumberOfResources(), { loading: 0, queued: 0, resources: 3 });
        const resources = Array.from(loader.getResourcesLoaded().values());
        assert.isTrue(resources.every(x => x.success));
    });
    it('deals with page reloads correctly', async () => {
        const loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({ forceNew: true, loadOverride: load, maxConcurrentLoads: 1 });
        const loading = [
            loader.loadResource(foo1Url, initiator).catch(e => e.message),
            loader.loadResource(foo2Url, initiator).catch(e => e.message),
            loader.loadResource(foo3Url, initiator).catch(e => e.message),
        ];
        assert.deepEqual(loader.getNumberOfResources(), { loading: 3, queued: 2, resources: 3 });
        loader.onPrimaryPageChanged({
            data: {
                frame: {
                    isOutermostFrame() {
                        return true;
                    },
                    resourceTreeModel() {
                        return {
                            target() {
                                return null;
                            },
                        };
                    },
                },
                type: _sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.PrimaryPageChangeType.Navigation,
            },
        });
        assert.deepEqual(loader.getNumberOfResources(), { loading: 3, queued: 0, resources: 0 });
        const results = await Promise.all(loading);
        assert.deepEqual(loads.map(x => x.url), ['foo1']);
        assert.deepEqual(results[0].content, 'foo1 - content');
        assert.deepEqual(results[1], 'Load canceled due to reload of inspected page');
        assert.deepEqual(results[2], 'Load canceled due to reload of inspected page');
    });
    it('respects the max concurrent loads', async () => {
        const loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({ forceNew: true, loadOverride: load, maxConcurrentLoads: 2 });
        const loading = [
            loader.loadResource(foo1Url, initiator),
            loader.loadResource(foo2Url, initiator),
            loader.loadResource(foo3Url, initiator),
        ];
        assert.deepEqual(loader.getNumberOfResources(), { loading: 3, queued: 1, resources: 3 });
        const results = await Promise.all(loading);
        assert.deepEqual(loads.map(x => x.url), ['foo1', 'foo2', 'foo3']);
        assert.deepEqual(results.map(x => x.content), ['foo1 - content', 'foo2 - content', 'foo3 - content']);
        assert.deepEqual(loader.getNumberOfResources(), { loading: 0, queued: 0, resources: 3 });
        const resources = Array.from(loader.getResourcesLoaded().values());
        assert.isTrue(resources.every(x => x.success));
    });
});
// Loading via host bindings requires the settings infra to be booted.
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('PageResourceLoader', () => {
    it('blocks UNC file paths with the default setting', async () => {
        if (!_host_host_js__WEBPACK_IMPORTED_MODULE_3__.Platform.isWin()) {
            return;
        }
        const loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({ forceNew: true, loadOverride: null, maxConcurrentLoads: 1 });
        const message = await loader
            .loadResource('file:////127.0.0.1/share/source-map.js.map', initiator)
            .catch(e => e.message);
        assert.include(message, 'remote file');
    });
    it('blocks remote file paths with the default setting', async () => {
        const loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({ forceNew: true, loadOverride: null, maxConcurrentLoads: 1 });
        const message = await loader.loadResource('file://host/source-map.js.map', initiator)
            .catch(e => e.message);
        assert.include(message, 'remote file');
    });
    it('blocks UNC file paths with a backslash on Windows with the default setting', async () => {
        if (!_host_host_js__WEBPACK_IMPORTED_MODULE_3__.Platform.isWin()) {
            return;
        }
        const loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({ forceNew: true, loadOverride: null, maxConcurrentLoads: 1 });
        const message = await loader
            .loadResource('file:///\\127.0.0.1/share/source-map.js.map', initiator)
            .catch(e => e.message);
        assert.include(message, 'remote file');
    });
    it('allows remote file paths with the setting enabled', async () => {
        const loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({ forceNew: true, loadOverride: null, maxConcurrentLoads: 1 });
        sinon.stub(_host_host_js__WEBPACK_IMPORTED_MODULE_3__.InspectorFrontendHost.InspectorFrontendHostInstance, 'loadNetworkResource')
            .callsFake((_url, _headers, streamId, callback) => {
            _host_host_js__WEBPACK_IMPORTED_MODULE_3__.ResourceLoader.streamWrite(streamId, 'content of the source map');
            callback({ statusCode: 200 });
        });
        _common_common_js__WEBPACK_IMPORTED_MODULE_2__.Settings.Settings.instance().moduleSetting('network.enable-remote-file-loading').set(true);
        const response = await loader.loadResource('file://host/source-map.js.map', initiator);
        assert.strictEqual(response.content, 'content of the source map');
    });
    it('allows UNC paths on Windows with the setting enabled', async () => {
        if (!_host_host_js__WEBPACK_IMPORTED_MODULE_3__.Platform.isWin()) {
            return;
        }
        const loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({ forceNew: true, loadOverride: null, maxConcurrentLoads: 1 });
        sinon.stub(_host_host_js__WEBPACK_IMPORTED_MODULE_3__.InspectorFrontendHost.InspectorFrontendHostInstance, 'loadNetworkResource')
            .callsFake((_url, _headers, streamId, callback) => {
            _host_host_js__WEBPACK_IMPORTED_MODULE_3__.ResourceLoader.streamWrite(streamId, 'content of the source map');
            callback({ statusCode: 200 });
        });
        _common_common_js__WEBPACK_IMPORTED_MODULE_2__.Settings.Settings.instance().moduleSetting('network.enable-remote-file-loading').set(true);
        const response = await loader.loadResource('file:////127.0.0.1/share/source-map.js.map', initiator);
        assert.strictEqual(response.content, 'content of the source map');
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('PageResourceLoader', () => {
    describe('loadResource', () => {
        const stream = 'STREAM_ID';
        const initiatorUrl = 'htp://example.com';
        const url = `${initiatorUrl}/test.txt`;
        function setupLoadingSourceMapsAsNetworkResource() {
            return new Promise(resolve => {
                let contentToRead = 'foo';
                (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('IO.read', () => {
                    const data = contentToRead;
                    contentToRead = null;
                    return { data };
                });
                (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('IO.close', () => ({}));
                (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('Network.loadNetworkResource', request => {
                    resolve(request);
                    return { resource: { success: true, stream, statusCode: 200 } };
                });
            });
        }
        for (const disableCache of [true, false]) {
            it(`loads with ${disableCache ? 'disabled' : 'enabled'} cache based on the setting`, async () => {
                _common_common_js__WEBPACK_IMPORTED_MODULE_2__.Settings.Settings.instance().moduleSetting('cache-disabled').set(disableCache);
                const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                const initiator = { target, frameId: null, initiatorUrl };
                const loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance();
                const [{ options }, { content }] = await Promise.all([
                    setupLoadingSourceMapsAsNetworkResource(),
                    loader.loadResource(url, initiator),
                ]);
                // Check that we loaded the resources with appropriately enabled caching.
                assert.strictEqual(options.disableCache, disableCache);
                // Sanity check on the content.
                assert.deepEqual(content, 'foo');
            });
        }
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('PageResourceLoader', () => {
    const initiatorUrl = 'htp://example.com';
    const foo1Url = 'foo1';
    const foo2Url = 'foo2';
    const foo3Url = 'foo3';
    it('handles scoped resources', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ id: 'main' });
        const prerenderTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ id: 'prerender' });
        const initiator = { target, frameId: null, initiatorUrl };
        const prerenderInitiator = { target: prerenderTarget, frameId: null, initiatorUrl };
        const load = async () => {
            await new Promise(() => { });
            return {
                success: true,
                content: 'content',
                errorDescription: { message: '', statusCode: 0, netError: 0, netErrorName: '', urlValid: true },
            };
        };
        const loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({ forceNew: true, loadOverride: load, maxConcurrentLoads: 500 });
        void loader.loadResource(foo1Url, initiator);
        void loader.loadResource(foo2Url, initiator);
        void loader.loadResource(foo3Url, prerenderInitiator);
        assert.deepEqual(loader.getNumberOfResources(), { loading: 3, queued: 0, resources: 3 });
        assert.deepEqual(loader.getScopedNumberOfResources(), { loading: 2, resources: 2 });
        let resources = loader.getScopedResourcesLoaded();
        let resourceUrls = [...resources.values()].map(x => x.url);
        assert.deepEqual(resourceUrls, [foo1Url, foo2Url]);
        _sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().setScopeTarget(prerenderTarget);
        assert.deepEqual(loader.getScopedNumberOfResources(), { loading: 1, resources: 1 });
        resources = loader.getScopedResourcesLoaded();
        resourceUrls = [...resources.values()].map(x => x.url);
        assert.deepEqual(resourceUrls, [foo3Url]);
    });
    it('handles prerender activation', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ id: 'main' });
        const prerenderTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ id: 'prerender' });
        const initiator = { target, frameId: null, initiatorUrl };
        const prerenderInitiator = { target: prerenderTarget, frameId: null, initiatorUrl };
        const load = async (url) => {
            return {
                success: true,
                content: `${url} - content`,
                errorDescription: { message: '', statusCode: 0, netError: 0, netErrorName: '', urlValid: true },
            };
        };
        const loader = _sdk_js__WEBPACK_IMPORTED_MODULE_5__.PageResourceLoader.PageResourceLoader.instance({ forceNew: true, loadOverride: load, maxConcurrentLoads: 500 });
        await Promise.all([
            loader.loadResource(foo1Url, initiator),
            loader.loadResource(foo2Url, initiator),
            loader.loadResource(foo3Url, prerenderInitiator),
        ]);
        assert.deepEqual(loader.getNumberOfResources(), { loading: 0, queued: 0, resources: 3 });
        assert.deepEqual(loader.getScopedNumberOfResources(), { loading: 0, resources: 2 });
        let resources = loader.getScopedResourcesLoaded();
        let resourceUrls = [...resources.values()].map(x => x.url);
        assert.deepEqual(resourceUrls, [foo1Url, foo2Url]);
        loader.onPrimaryPageChanged({
            data: {
                frame: {
                    isOutermostFrame() {
                        return true;
                    },
                    resourceTreeModel() {
                        return {
                            target() {
                                return prerenderTarget;
                            },
                        };
                    },
                },
                type: _sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.PrimaryPageChangeType.Activation,
            },
        });
        assert.deepEqual(loader.getNumberOfResources(), { loading: 0, queued: 0, resources: 1 });
        _sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().setScopeTarget(prerenderTarget);
        assert.deepEqual(loader.getScopedNumberOfResources(), { loading: 0, resources: 1 });
        resources = loader.getScopedResourcesLoaded();
        resourceUrls = [...resources.values()].map(x => x.url);
        assert.deepEqual(resourceUrls, [foo3Url]);
    });
});


/***/ })

}]);