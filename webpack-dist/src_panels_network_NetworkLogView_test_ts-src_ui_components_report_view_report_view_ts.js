"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_network_NetworkLogView_test_ts-src_ui_components_report_view_report_view_ts"],{

/***/ "./src/panels/network/NetworkLogView.test.ts":
/*!***************************************************!*\
  !*** ./src/panels/network/NetworkLogView.test.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_har_har_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/har/har.js */ "./src/models/har/har.ts");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./src/models/logs/logs.ts");
/* harmony import */ var _testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/ContextMenuHelpers.js */ "./src/testing/ContextMenuHelpers.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./src/testing/ExpectStubCall.ts");
/* harmony import */ var _testing_FileManagerHelpers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../testing/FileManagerHelpers.js */ "./src/testing/FileManagerHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _network_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./network.js */ "./src/panels/network/network.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

















const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_14__.RenderCoordinator.RenderCoordinator.instance();
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_12__.describeWithMockConnection)('NetworkLogView', () => {
    let target;
    let networkLogView;
    let networkLog;
    beforeEach(() => {
        const dummyStorage = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({});
        for (const settingName of ['network-color-code-resource-types', 'network.group-by-frame']) {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.registerSettingExtension({
                settingName,
                settingType: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN,
                defaultValue: false,
            });
        }
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
            forceNew: true,
            syncedStorage: dummyStorage,
            globalStorage: dummyStorage,
            localStorage: dummyStorage,
        });
        sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_15__.ShortcutRegistry.ShortcutRegistry, 'instance').returns({
            shortcutTitleForAction: () => { },
            shortcutsForAction: () => [],
        });
        networkLog = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.NetworkLog.instance();
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createTarget)({ parentTarget: tabTarget });
    });
    let nextId = 0;
    function createNetworkRequest(url, options) {
        const effectiveTarget = options.target || target;
        const networkManager = effectiveTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NetworkManager);
        assert.exists(networkManager);
        let request;
        const onRequestStarted = (event) => {
            request = event.data.request;
        };
        networkManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Events.RequestStarted, onRequestStarted);
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_12__.dispatchEvent)(effectiveTarget, 'Network.requestWillBeSent', { requestId: `request${++nextId}`, loaderId: 'loaderId', request: { url } });
        networkManager.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Events.RequestStarted, onRequestStarted);
        assert.exists(request);
        request.requestMethod = 'GET';
        if (options.requestHeaders) {
            request.setRequestHeaders(options.requestHeaders);
        }
        if (options.finished) {
            request.finished = true;
        }
        return request;
    }
    function createEnvironment() {
        const filterBar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_15__.FilterBar.FilterBar('network-panel', true);
        networkLogView = createNetworkLogView(filterBar);
        networkLogView.markAsRoot();
        networkLogView.show(document.body);
        const rootNode = networkLogView.columns().dataGrid().rootNode();
        return { rootNode, filterBar, networkLogView };
    }
    it('generates a valid curl command when some headers don\'t have values', async () => {
        const request = createNetworkRequest('http://localhost', {
            requestHeaders: [
                { name: 'header-with-value', value: 'some value' },
                { name: 'no-value-header', value: '' },
            ],
        });
        const actual = await _network_js__WEBPACK_IMPORTED_MODULE_16__.NetworkLogView.NetworkLogView.generateCurlCommand(request, 'unix');
        const expected = 'curl \'http://localhost\' \\\n  -H \'header-with-value: some value\' \\\n  -H \'no-value-header;\'';
        assert.strictEqual(actual, expected);
    });
    // Note this isn't an ideal test as the internal headers are generated rather than explicitly added,
    // are only added on HTTP/2 and HTTP/3, have a preceeding colon like `:authority` but it still tests
    // the stripping function.
    it('generates a valid curl command while stripping internal headers', async () => {
        const request = createNetworkRequest('http://localhost', {
            requestHeaders: [
                { name: 'authority', value: 'www.example.com' },
            ],
        });
        const actual = await _network_js__WEBPACK_IMPORTED_MODULE_16__.NetworkLogView.NetworkLogView.generateCurlCommand(request, 'unix');
        const expected = 'curl \'http://localhost\'';
        assert.strictEqual(actual, expected);
    });
    it('generates a valid curl command when header values contain double quotes', async () => {
        const request = createNetworkRequest('http://localhost', {
            requestHeaders: [{ name: 'cookie', value: 'eva="Sg4="' }],
        });
        assert.strictEqual(await _network_js__WEBPACK_IMPORTED_MODULE_16__.NetworkLogView.NetworkLogView.generateCurlCommand(request, 'unix'), 'curl \'http://localhost\' -H \'cookie: eva=\"Sg4=\"\'');
        assert.strictEqual(await _network_js__WEBPACK_IMPORTED_MODULE_16__.NetworkLogView.NetworkLogView.generateCurlCommand(request, 'win'), 'curl "http://localhost" -H ^"cookie: eva=^\\^"Sg4=^\\^"^"');
    });
    it('generates a valid curl command when header values contain percentages', async () => {
        const request = createNetworkRequest('http://localhost', {
            requestHeaders: [{ name: 'cookie', value: 'eva=%22Sg4%3D%22' }],
        });
        assert.strictEqual(await _network_js__WEBPACK_IMPORTED_MODULE_16__.NetworkLogView.NetworkLogView.generateCurlCommand(request, 'unix'), 'curl \'http://localhost\' -H \'cookie: eva=%22Sg4%3D%22\'');
        assert.strictEqual(await _network_js__WEBPACK_IMPORTED_MODULE_16__.NetworkLogView.NetworkLogView.generateCurlCommand(request, 'win'), 'curl "http://localhost" -H ^"cookie: eva=^%^22Sg4^%^3D^%^22^"');
    });
    function createNetworkLogView(filterBar) {
        if (!filterBar) {
            filterBar = { addFilter: () => { }, filterButton: () => ({ addEventListener: () => { } }), addDivider: () => { } };
        }
        return new _network_js__WEBPACK_IMPORTED_MODULE_16__.NetworkLogView.NetworkLogView(filterBar, document.createElement('div'), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-log-large-rows', false));
    }
    const tests = (inScope) => () => {
        beforeEach(() => {
            networkLogView = createNetworkLogView();
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
        });
        it('adds dividers on main frame load events', async () => {
            const addEventDividers = sinon.spy(networkLogView.columns(), 'addEventDividers');
            networkLogView.setRecording(true);
            const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
            assert.exists(resourceTreeModel);
            resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load, { resourceTreeModel, loadTime: 5 });
            resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.DOMContentLoaded, 6);
            if (inScope) {
                assert.isTrue(addEventDividers.calledTwice);
                assert.isTrue(addEventDividers.getCall(0).calledWith([5], 'network-load-divider'));
                assert.isTrue(addEventDividers.getCall(1).calledWith([6], 'network-dcl-divider'));
            }
            else {
                assert.isFalse(addEventDividers.called);
            }
        });
        it('can export all as HAR', async () => {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
            const harWriterWrite = sinon.stub(_models_har_har_js__WEBPACK_IMPORTED_MODULE_5__.Writer.Writer, 'write').resolves();
            const URL_HOST = 'example.com';
            target.setInspectedURL(`http://${URL_HOST}/foo`);
            const fileManager = (0,_testing_FileManagerHelpers_js__WEBPACK_IMPORTED_MODULE_11__.stubFileManager)();
            const FINISHED_REQUEST_1 = createNetworkRequest('http://example.com/', { finished: true });
            const FINISHED_REQUEST_2 = createNetworkRequest('http://example.com/favicon.ico', { finished: true });
            const UNFINISHED_REQUEST = createNetworkRequest('http://example.com/background.bmp', { finished: false });
            sinon.stub(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.NetworkLog.instance(), 'requests').returns([
                FINISHED_REQUEST_1,
                FINISHED_REQUEST_2,
                UNFINISHED_REQUEST,
            ]);
            await networkLogView.exportAll();
            if (inScope) {
                assert.isTrue(harWriterWrite.calledOnceWith(sinon.match.any, [FINISHED_REQUEST_1, FINISHED_REQUEST_2], sinon.match.any));
                assert.isTrue(fileManager.save.calledOnce);
                assert.isTrue(fileManager.close.calledOnce);
            }
            else {
                assert.isFalse(harWriterWrite.called);
                assert.isFalse(fileManager.save.called);
                assert.isFalse(fileManager.close.called);
            }
        });
        it('can import and filter from HAR', async () => {
            const URL_1 = 'http://example.com/';
            const URL_2 = 'http://example.com/favicon.ico';
            function makeHarEntry(url) {
                return {
                    request: { method: 'GET', url: url, headersSize: -1, bodySize: 0 },
                    response: { status: 0, content: { 'size': 0, 'mimeType': 'x-unknown' }, headersSize: -1, bodySize: -1 },
                    startedDateTime: null,
                    time: null,
                    timings: { blocked: null, dns: -1, ssl: -1, connect: -1, send: 0, wait: 0, receive: 0 },
                };
            }
            const har = {
                log: {
                    version: '1.2',
                    creator: { name: 'WebInspector', version: '537.36' },
                    entries: [makeHarEntry(URL_1), makeHarEntry(URL_2)],
                },
            };
            networkLogView.markAsRoot();
            networkLogView.show(document.body);
            const blob = new Blob([JSON.stringify(har)], { type: 'text/plain' });
            const file = new File([blob], 'log.har');
            await networkLogView.onLoadFromFile(file);
            await coordinator.done({ waitForWork: true });
            const rootNode = networkLogView.columns().dataGrid().rootNode();
            assert.deepEqual(rootNode.children.map(n => n.request()?.url()), [URL_1, URL_2]);
            networkLogView.setTextFilterValue('favicon');
            assert.deepEqual(rootNode.children.map(n => n.request()?.url()), [URL_2]);
            networkLogView.detach();
        });
        it('shows summary toolbar with content', () => {
            target.setInspectedURL('http://example.com/');
            const request = createNetworkRequest('http://example.com/', { finished: true });
            request.endTime = 0.669414;
            request.setIssueTime(0.435136, 0.435136);
            request.setResourceType(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document);
            networkLogView.setRecording(true);
            const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
            assert.exists(resourceTreeModel);
            resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load, { resourceTreeModel, loadTime: 0.686191 });
            resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.DOMContentLoaded, 0.683709);
            networkLogView.markAsRoot();
            networkLogView.show(document.body);
            const toolbar = networkLogView.summaryToolbar();
            const textElements = toolbar.element.shadowRoot?.querySelectorAll('.toolbar-text');
            assert.exists(textElements);
            const textContents = [...textElements].map(item => item.textContent);
            if (inScope) {
                assert.deepEqual(textContents, [
                    '1 requests',
                    '0\u00a0B transferred',
                    '0\u00a0B resources',
                    'Finish: 234\u00a0ms',
                    'DOMContentLoaded: 249\u00a0ms',
                    'Load: 251\u00a0ms',
                ]);
            }
            else {
                assert.strictEqual(textElements.length, 0);
            }
            networkLogView.detach();
        });
    };
    describe('in scope', tests(true));
    describe('out of scope', tests(false));
    const handlesSwitchingScope = (preserveLog) => async () => {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network-log.preserve-log').set(preserveLog);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().setScopeTarget(target);
        const anotherTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createTarget)();
        const networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NetworkManager);
        assert.exists(networkManager);
        const request1 = createNetworkRequest('url1', { target });
        const request2 = createNetworkRequest('url2', { target });
        const request3 = createNetworkRequest('url3', { target: anotherTarget });
        networkLogView = createNetworkLogView();
        networkLogView.markAsRoot();
        networkLogView.show(document.body);
        await coordinator.done();
        const rootNode = networkLogView.columns().dataGrid().rootNode();
        assert.deepEqual(rootNode.children.map(n => n.request()), [request1, request2]);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().setScopeTarget(anotherTarget);
        await coordinator.done();
        assert.deepEqual(rootNode.children.map(n => n.request()), preserveLog ? [request1, request2, request3] : [request3]);
        networkLogView.detach();
    };
    it('replaces requests when switching scope with preserve log off', handlesSwitchingScope(false));
    it('appends requests when switching scope with preserve log on', handlesSwitchingScope(true));
    it('appends requests on prerender activation with preserve log on', async () => {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network-log.preserve-log').set(true);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().setScopeTarget(target);
        const anotherTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createTarget)();
        const networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NetworkManager);
        assert.exists(networkManager);
        const request1 = createNetworkRequest('url1', { target });
        const request2 = createNetworkRequest('url2', { target });
        const request3 = createNetworkRequest('url3', { target: anotherTarget });
        networkLogView = createNetworkLogView();
        networkLogView.markAsRoot();
        networkLogView.show(document.body);
        await coordinator.done();
        const rootNode = networkLogView.columns().dataGrid().rootNode();
        assert.deepEqual(rootNode.children.map(n => n.request()), [request1, request2]);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_13__.activate)(target);
        await coordinator.done();
        assert.deepEqual(rootNode.children.map(n => n.request()), [request1, request2, request3]);
        networkLogView.detach();
    });
    it('hide Chrome extension requests from checkbox', async () => {
        createNetworkRequest('chrome-extension://url1', { target });
        createNetworkRequest('url2', { target });
        let rootNode;
        let filterBar;
        ({ rootNode, filterBar, networkLogView } = createEnvironment());
        const hideExtCheckbox = getCheckbox(filterBar, 'Hide \'chrome-extension://\' URLs');
        assert.deepEqual(rootNode.children.map(n => n.request()?.url()), ['chrome-extension://url1', 'url2']);
        clickCheckbox(hideExtCheckbox);
        assert.deepEqual(rootNode.children.map(n => n.request()?.url()), ['url2']);
        networkLogView.detach();
    });
    it('can hide Chrome extension requests from dropdown', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest(_core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN);
        createNetworkRequest('chrome-extension://url1', { target });
        createNetworkRequest('url2', { target });
        let rootNode;
        let filterBar;
        ({ rootNode, filterBar, networkLogView } = createEnvironment());
        assert.deepEqual(rootNode.children.map(n => n.request()?.url()), ['chrome-extension://url1', 'url2']);
        const dropdown = await openMoreTypesDropdown(filterBar, networkLogView);
        if (!dropdown) {
            return;
        }
        const softMenu = getSoftMenu();
        const hideExtensionURL = getDropdownItem(softMenu, 'Hide extension URLs');
        assert.isFalse(hideExtensionURL.hasAttribute('checked'));
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.dispatchMouseUpEvent)(hideExtensionURL);
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.raf)();
        assert.isTrue(hideExtensionURL.hasAttribute('checked'));
        assert.deepEqual(rootNode.children.map(n => n.request()?.url()), ['url2']);
        dropdown.discard();
        networkLogView.detach();
    });
    it('displays correct count for more filters', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest(_core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN);
        let filterBar;
        ({ filterBar, networkLogView } = createEnvironment());
        const dropdown = await openMoreTypesDropdown(filterBar, networkLogView);
        if (!dropdown) {
            return;
        }
        assert.strictEqual(getMoreFiltersActiveCount(filterBar), '0');
        assert.isTrue(getCountAdorner(filterBar)?.classList.contains('hidden'));
        const softMenu = getSoftMenu();
        await selectMoreFiltersOption(softMenu, 'Hide extension URLs');
        assert.strictEqual(getMoreFiltersActiveCount(filterBar), '1');
        assert.isFalse(getCountAdorner(filterBar)?.classList.contains('hidden'));
        dropdown.discard();
        networkLogView.detach();
    });
    it('can automatically check the `All` option in the `Request Type` when the only type checked becomes unchecked', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest(_core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN);
        const dropdown = setupRequestTypesDropdown();
        const button = dropdown.element().querySelector('.toolbar-button');
        assert.instanceOf(button, HTMLElement);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.dispatchClickEvent)(button, { bubbles: true, composed: true });
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.raf)();
        const optionImg = getRequestTypeDropdownOption('Image');
        const optionImgCheckmark = optionImg?.querySelector('.checkmark') || null;
        const optionAll = getRequestTypeDropdownOption('All');
        const optionAllCheckmark = optionAll?.querySelector('.checkmark') || null;
        assert.instanceOf(optionImg, HTMLElement);
        assert.instanceOf(optionImgCheckmark, HTMLElement);
        assert.instanceOf(optionAll, HTMLElement);
        assert.instanceOf(optionAllCheckmark, HTMLElement);
        assert.isTrue(optionAll.ariaLabel === 'All, checked');
        assert.isTrue(optionImg.ariaLabel === 'Image, unchecked');
        assert.isTrue(window.getComputedStyle(optionAllCheckmark).getPropertyValue('opacity') === '1');
        assert.isTrue(window.getComputedStyle(optionImgCheckmark).getPropertyValue('opacity') === '0');
        await selectRequestTypesOption('Image');
        assert.isTrue(optionAll.ariaLabel === 'All, unchecked');
        assert.isTrue(optionImg.ariaLabel === 'Image, checked');
        assert.isTrue(window.getComputedStyle(optionAllCheckmark).getPropertyValue('opacity') === '0');
        assert.isTrue(window.getComputedStyle(optionImgCheckmark).getPropertyValue('opacity') === '1');
        await selectRequestTypesOption('Image');
        assert.isTrue(optionAll.ariaLabel === 'All, checked');
        assert.isTrue(optionImg.ariaLabel === 'Image, unchecked');
        assert.isTrue(window.getComputedStyle(optionAllCheckmark).getPropertyValue('opacity') === '1');
        assert.isTrue(window.getComputedStyle(optionImgCheckmark).getPropertyValue('opacity') === '0');
        dropdown.discard();
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.raf)();
    });
    it('shows correct selected request types count', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest(_core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN);
        const umaCountSpy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'resourceTypeFilterNumberOfSelectedChanged');
        const umaTypeSpy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'resourceTypeFilterItemSelected');
        const dropdown = setupRequestTypesDropdown();
        const button = dropdown.element().querySelector('.toolbar-button');
        assert.instanceOf(button, HTMLElement);
        let countAdorner = button.querySelector('.active-filters-count');
        assert.isTrue(countAdorner?.classList.contains('hidden'));
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.dispatchClickEvent)(button, { bubbles: true, composed: true });
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.raf)();
        await selectRequestTypesOption('Image');
        countAdorner = button.querySelector('.active-filters-count');
        assert.isFalse(countAdorner?.classList.contains('hidden'));
        assert.strictEqual(countAdorner?.querySelector('[slot="content"]')?.textContent, '1');
        dropdown.discard();
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.raf)();
        assert.isTrue(umaCountSpy.calledOnceWith(1));
        assert.isTrue(umaTypeSpy.calledOnceWith('Image'));
    });
    it('adjusts request types label dynamically', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest(_core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN);
        const dropdown = setupRequestTypesDropdown();
        const button = dropdown.element().querySelector('.toolbar-button');
        assert.instanceOf(button, HTMLElement);
        let toolbarText = button.querySelector('.toolbar-text')?.textContent;
        assert.strictEqual(toolbarText, 'Request types');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.dispatchClickEvent)(button, { bubbles: true, composed: true });
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.raf)();
        await selectRequestTypesOption('Image');
        await selectRequestTypesOption('JavaScript');
        toolbarText = button.querySelector('.toolbar-text')?.textContent;
        assert.strictEqual(toolbarText, 'JS, Img');
        await selectRequestTypesOption('CSS');
        toolbarText = button.querySelector('.toolbar-text')?.textContent;
        assert.strictEqual(toolbarText, 'CSS, JS...');
        dropdown.discard();
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.raf)();
    });
    it('lists selected types in requests types tooltip', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest(_core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN);
        const umaCountSpy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'resourceTypeFilterNumberOfSelectedChanged');
        const umaTypeSpy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'resourceTypeFilterItemSelected');
        const dropdown = setupRequestTypesDropdown();
        const button = dropdown.element().querySelector('.toolbar-button');
        assert.instanceOf(button, HTMLElement);
        let tooltipText = button.title;
        assert.strictEqual(tooltipText, 'Filter requests by type');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.dispatchClickEvent)(button, { bubbles: true, composed: true });
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.raf)();
        await selectRequestTypesOption('Image');
        await selectRequestTypesOption('JavaScript');
        tooltipText = button.title;
        assert.strictEqual(tooltipText, 'Show only JavaScript, Image');
        dropdown.discard();
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.raf)();
        assert.isTrue(umaCountSpy.calledOnceWith(2));
        assert.isTrue(umaTypeSpy.calledTwice);
        assert.isTrue(umaTypeSpy.calledWith('Image'));
        assert.isTrue(umaTypeSpy.calledWith('JavaScript'));
    });
    it('updates tooltip to default when request type deselected', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest(_core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN);
        const dropdown = setupRequestTypesDropdown();
        const button = dropdown.element().querySelector('.toolbar-button');
        assert.instanceOf(button, HTMLElement);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.dispatchClickEvent)(button, { bubbles: true, composed: true });
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.raf)();
        await selectRequestTypesOption('Image');
        let tooltipText = button.title;
        assert.strictEqual(tooltipText, 'Show only Image');
        await selectRequestTypesOption('Image');
        tooltipText = button.title;
        assert.strictEqual(tooltipText, 'Filter requests by type');
        dropdown.discard();
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.raf)();
    });
    it('can filter requests with blocked response cookies from checkbox', async () => {
        const request1 = createNetworkRequest('url1', { target });
        request1.blockedResponseCookies = () => [{
                blockedReasons: [_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Network.SetCookieBlockedReason.SameSiteNoneInsecure],
                cookie: null,
                cookieLine: 'foo=bar; SameSite=None',
            }];
        createNetworkRequest('url2', { target });
        let rootNode;
        let filterBar;
        ({ rootNode, filterBar, networkLogView } = createEnvironment());
        const blockedCookiesCheckbox = getCheckbox(filterBar, 'Show only requests with blocked response cookies');
        clickCheckbox(blockedCookiesCheckbox);
        assert.deepEqual(rootNode.children.map(n => n.request()?.url()), [
            'url1',
        ]);
        networkLogView.detach();
    });
    it('can filter requests with blocked response cookies from dropdown', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest(_core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN);
        const umaCountSpy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'networkPanelMoreFiltersNumberOfSelectedChanged');
        const umaItemSpy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'networkPanelMoreFiltersItemSelected');
        const request1 = createNetworkRequest('url1', { target });
        request1.blockedResponseCookies = () => [{
                blockedReasons: [_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Network.SetCookieBlockedReason.SameSiteNoneInsecure],
                cookie: null,
                cookieLine: 'foo=bar; SameSite=None',
            }];
        createNetworkRequest('url2', { target });
        let rootNode;
        let filterBar;
        ({ rootNode, filterBar, networkLogView } = createEnvironment());
        assert.deepEqual(rootNode.children.map(n => n.request()?.url()), ['url1', 'url2']);
        const dropdown = await openMoreTypesDropdown(filterBar, networkLogView);
        if (!dropdown) {
            return;
        }
        const softMenu = getSoftMenu();
        const blockedResponseCookies = getDropdownItem(softMenu, 'Blocked response cookies');
        assert.isFalse(blockedResponseCookies.hasAttribute('checked'));
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.dispatchMouseUpEvent)(blockedResponseCookies);
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.raf)();
        assert.isTrue(blockedResponseCookies.hasAttribute('checked'));
        assert.deepEqual(rootNode.children.map(n => n.request()?.url()), [
            'url1',
        ]);
        dropdown.discard();
        assert.isTrue(umaCountSpy.calledOnceWith(1));
        assert.isTrue(umaItemSpy.calledOnceWith('Blocked response cookies'));
        networkLogView.detach();
    });
    it('lists selected options in more filters tooltip', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest(_core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN);
        const umaCountSpy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'networkPanelMoreFiltersNumberOfSelectedChanged');
        const umaItemSpy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'networkPanelMoreFiltersItemSelected');
        let filterBar;
        ({ filterBar, networkLogView } = createEnvironment());
        const dropdown = await openMoreTypesDropdown(filterBar, networkLogView);
        assert.exists(dropdown);
        const button = dropdown.element().querySelector('.toolbar-button');
        assert.instanceOf(button, HTMLElement);
        assert.strictEqual(button.title, 'Show only/hide requests');
        const softMenu = getSoftMenu();
        await selectMoreFiltersOption(softMenu, 'Blocked response cookies');
        await selectMoreFiltersOption(softMenu, 'Hide extension URLs');
        assert.strictEqual(button.title, 'Hide extension URLs, Blocked response cookies');
        dropdown.discard();
        assert.isTrue(umaCountSpy.calledOnceWith(2));
        assert.isTrue(umaItemSpy.calledTwice);
        assert.isTrue(umaItemSpy.calledWith('Hide extension URLs'));
        assert.isTrue(umaItemSpy.calledWith('Blocked response cookies'));
        networkLogView.detach();
    });
    it('updates tooltip to default when more filters option deselected', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.enableForTest(_core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN);
        let filterBar;
        ({ filterBar, networkLogView } = createEnvironment());
        const dropdown = await openMoreTypesDropdown(filterBar, networkLogView);
        assert.exists(dropdown);
        const button = dropdown.element().querySelector('.toolbar-button');
        assert.instanceOf(button, HTMLElement);
        assert.strictEqual(button.title, 'Show only/hide requests');
        const softMenu = getSoftMenu();
        await selectMoreFiltersOption(softMenu, 'Blocked response cookies');
        assert.strictEqual(button.title, 'Blocked response cookies');
        await selectMoreFiltersOption(softMenu, 'Blocked response cookies');
        assert.strictEqual(button.title, 'Show only/hide requests');
        dropdown.discard();
        networkLogView.detach();
    });
    it('can remove requests', async () => {
        networkLogView = createNetworkLogView();
        const request = createNetworkRequest('url1', { target });
        networkLogView.markAsRoot();
        networkLogView.show(document.body);
        const rootNode = networkLogView.columns().dataGrid().rootNode();
        assert.strictEqual(rootNode.children.length, 1);
        networkLog.dispatchEventToListeners(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.Events.RequestRemoved, { request });
        assert.strictEqual(rootNode.children.length, 0);
        networkLogView.detach();
    });
    it('correctly shows and hides waterfall column', async () => {
        const columnSettings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-log-columns', {});
        columnSettings.set({
            'waterfall': { visible: false, title: 'waterfall' },
        });
        networkLogView = createNetworkLogView();
        let columns = networkLogView.columns();
        let networkColumnWidget = columns.dataGrid().asWidget().parentWidget();
        assert.instanceOf(networkColumnWidget, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_15__.SplitWidget.SplitWidget);
        assert.strictEqual(networkColumnWidget.showMode(), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_15__.SplitWidget.ShowMode.OnlyMain);
        columnSettings.set({
            'waterfall': { visible: true, title: 'waterfall' },
        });
        networkLogView = createNetworkLogView();
        columns = networkLogView.columns();
        columns.switchViewMode(true);
        networkColumnWidget = columns.dataGrid().asWidget().parentWidget();
        assert.instanceOf(networkColumnWidget, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_15__.SplitWidget.SplitWidget);
        assert.strictEqual(networkColumnWidget.showMode(), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_15__.SplitWidget.ShowMode.Both);
    });
    function createOverrideRequests() {
        const urlNotOverridden = 'url-not-overridden';
        const urlHeaderOverridden = 'url-header-overridden';
        const urlContentOverridden = 'url-content-overridden';
        const urlHeaderAndContentOverridden = 'url-header-und-content-overridden';
        createNetworkRequest(urlNotOverridden, { target });
        const r2 = createNetworkRequest(urlHeaderOverridden, { target });
        const r3 = createNetworkRequest(urlContentOverridden, { target });
        const r4 = createNetworkRequest(urlHeaderAndContentOverridden, { target });
        // set up overrides
        r2.originalResponseHeaders = [{ name: 'content-type', value: 'x' }];
        r2.responseHeaders = [{ name: 'content-type', value: 'overriden' }];
        r3.hasOverriddenContent = true;
        r4.originalResponseHeaders = [{ name: 'age', value: 'x' }];
        r4.responseHeaders = [{ name: 'age', value: 'overriden' }];
        r4.hasOverriddenContent = true;
        return { urlNotOverridden, urlHeaderOverridden, urlContentOverridden, urlHeaderAndContentOverridden };
    }
    it('can apply filter - has-overrides:yes', async () => {
        const { urlHeaderOverridden, urlContentOverridden, urlHeaderAndContentOverridden } = createOverrideRequests();
        const filterBar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_15__.FilterBar.FilterBar('network-panel', true);
        networkLogView = createNetworkLogView(filterBar);
        networkLogView.setTextFilterValue('has-overrides:yes');
        networkLogView.markAsRoot();
        networkLogView.show(document.body);
        const rootNode = networkLogView.columns().dataGrid().rootNode();
        assert.deepEqual(rootNode.children.map(n => n.request()?.url()), [
            urlHeaderOverridden,
            urlContentOverridden,
            urlHeaderAndContentOverridden,
        ]);
        networkLogView.detach();
    });
    it('can apply filter - has-overrides:no', async () => {
        const { urlNotOverridden } = createOverrideRequests();
        const filterBar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_15__.FilterBar.FilterBar('network-panel', true);
        networkLogView = createNetworkLogView(filterBar);
        networkLogView.setTextFilterValue('has-overrides:no');
        networkLogView.markAsRoot();
        networkLogView.show(document.body);
        const rootNode = networkLogView.columns().dataGrid().rootNode();
        assert.deepEqual(rootNode.children.map(n => n.request()?.url()), [
            urlNotOverridden,
        ]);
        networkLogView.detach();
    });
    it('can apply filter - has-overrides:headers', async () => {
        const { urlHeaderOverridden, urlHeaderAndContentOverridden } = createOverrideRequests();
        const filterBar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_15__.FilterBar.FilterBar('network-panel', true);
        networkLogView = createNetworkLogView(filterBar);
        networkLogView.setTextFilterValue('has-overrides:headers');
        networkLogView.markAsRoot();
        networkLogView.show(document.body);
        const rootNode = networkLogView.columns().dataGrid().rootNode();
        assert.deepEqual(rootNode.children.map(n => n.request()?.url()), [
            urlHeaderOverridden,
            urlHeaderAndContentOverridden,
        ]);
        networkLogView.detach();
    });
    it('can apply filter - has-overrides:content', async () => {
        const { urlContentOverridden, urlHeaderAndContentOverridden } = createOverrideRequests();
        const filterBar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_15__.FilterBar.FilterBar('network-panel', true);
        networkLogView = createNetworkLogView(filterBar);
        networkLogView.setTextFilterValue('has-overrides:content');
        networkLogView.markAsRoot();
        networkLogView.show(document.body);
        const rootNode = networkLogView.columns().dataGrid().rootNode();
        assert.deepEqual(rootNode.children.map(n => n.request()?.url()), [
            urlContentOverridden,
            urlHeaderAndContentOverridden,
        ]);
        networkLogView.detach();
    });
    it('can apply filter - has-overrides:tent', async () => {
        const { urlHeaderAndContentOverridden, urlContentOverridden } = createOverrideRequests();
        const filterBar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_15__.FilterBar.FilterBar('network-panel', true);
        networkLogView = createNetworkLogView(filterBar);
        networkLogView.setTextFilterValue('has-overrides:tent'); // partial text
        networkLogView.markAsRoot();
        networkLogView.show(document.body);
        const rootNode = networkLogView.columns().dataGrid().rootNode();
        assert.deepEqual(rootNode.children.map(n => n.request()?.url()), [
            urlContentOverridden,
            urlHeaderAndContentOverridden,
        ]);
        networkLogView.detach();
    });
    it('"Copy all" commands respects filters', async () => {
        createOverrideRequests();
        const filterBar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_15__.FilterBar.FilterBar('network-panel', true);
        networkLogView = createNetworkLogView(filterBar);
        networkLogView.markAsRoot();
        networkLogView.show(document.body);
        const copyText = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'copyText').resolves();
        // Set network filter
        networkLogView.setTextFilterValue('has-overrides:headers');
        // Get DataGrid
        const dataGrid = networkLogView.columns().dataGrid().element;
        assert.isDefined(dataGrid);
        // Select first element
        networkLogView.columns().dataGrid().rootNode().children[0].select();
        // Get context menu, clipboard section
        const contextMenu = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_7__.getContextMenuForElement)(dataGrid);
        const clipboardSection = contextMenu.clipboardSection();
        // Assert that there is only one entry (for 'Copy') in the clipboard section
        assert.deepEqual(['Copy'], (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_7__.getMenuItemLabels)(clipboardSection));
        const copyItem = clipboardSection.items[0];
        // Use the 'Copy' sub-menu, get menu items from the footer section
        const footerSection = copyItem.footerSection();
        const copyAllURLs = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_7__.findMenuItemWithLabel)(footerSection, 'Copy all listed URLs');
        assert.isDefined(copyAllURLs);
        contextMenu.invokeHandler(copyAllURLs.id());
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_10__.expectCalled)(copyText);
        assert.strictEqual(copyText.callCount, 1);
        assert.deepEqual(copyText.lastCall.args, [`url-header-overridden
url-header-und-content-overridden`]);
        copyText.resetHistory();
        const copyAllCurlComnmands = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_7__.findMenuItemWithLabel)(footerSection, _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.isWin() ? 'Copy all listed as cURL (bash)' : 'Copy all listed as cURL');
        assert.isDefined(copyAllCurlComnmands);
        contextMenu.invokeHandler(copyAllCurlComnmands.id());
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_10__.expectCalled)(copyText);
        assert.strictEqual(copyText.callCount, 1);
        assert.deepEqual(copyText.lastCall.args, [`curl 'url-header-overridden' ;
curl 'url-header-und-content-overridden'`]);
        copyText.resetHistory();
        const copyAllFetchCall = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_7__.findMenuItemWithLabel)(footerSection, 'Copy all listed as fetch');
        assert.isDefined(copyAllFetchCall);
        contextMenu.invokeHandler(copyAllFetchCall.id());
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_10__.expectCalled)(copyText);
        assert.strictEqual(copyText.callCount, 1);
        assert.deepEqual(copyText.lastCall.args, [`fetch("url-header-overridden", {
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
}); ;
fetch("url-header-und-content-overridden", {
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
});`]);
        copyText.resetHistory();
        const copyAllPowerShell = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_7__.findMenuItemWithLabel)(footerSection, 'Copy all listed as PowerShell');
        assert.isDefined(copyAllPowerShell);
        contextMenu.invokeHandler(copyAllPowerShell.id());
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_10__.expectCalled)(copyText);
        assert.strictEqual(copyText.callCount, 1);
        assert.deepEqual(copyText.lastCall.args, [`Invoke-WebRequest -UseBasicParsing -Uri "url-header-overridden";\r
Invoke-WebRequest -UseBasicParsing -Uri "url-header-und-content-overridden"`]);
        // Clear network filter
        networkLogView.setTextFilterValue('');
        copyText.resetHistory();
        contextMenu.invokeHandler(copyAllURLs.id());
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_10__.expectCalled)(copyText);
        assert.strictEqual(copyText.callCount, 1);
        assert.deepEqual(copyText.lastCall.args, [`url-not-overridden
url-header-overridden
url-content-overridden
url-header-und-content-overridden`]);
        copyText.resetHistory();
        contextMenu.invokeHandler(copyAllCurlComnmands.id());
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_10__.expectCalled)(copyText);
        assert.strictEqual(copyText.callCount, 1);
        assert.deepEqual(copyText.lastCall.args, [`curl 'url-not-overridden' ;
curl 'url-header-overridden' ;
curl 'url-content-overridden' ;
curl 'url-header-und-content-overridden'`]);
        copyText.resetHistory();
        contextMenu.invokeHandler(copyAllFetchCall.id());
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_10__.expectCalled)(copyText);
        assert.strictEqual(copyText.callCount, 1);
        assert.deepEqual(copyText.lastCall.args, [`fetch("url-not-overridden", {
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
}); ;
fetch("url-header-overridden", {
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
}); ;
fetch("url-content-overridden", {
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
}); ;
fetch("url-header-und-content-overridden", {
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
});`]);
        copyText.resetHistory();
        contextMenu.invokeHandler(copyAllPowerShell.id());
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_10__.expectCalled)(copyText);
        assert.strictEqual(copyText.callCount, 1);
        assert.deepEqual(copyText.lastCall.args, [`Invoke-WebRequest -UseBasicParsing -Uri "url-not-overridden";\r
Invoke-WebRequest -UseBasicParsing -Uri "url-header-overridden";\r
Invoke-WebRequest -UseBasicParsing -Uri "url-content-overridden";\r
Invoke-WebRequest -UseBasicParsing -Uri "url-header-und-content-overridden"`]);
        copyText.resetHistory();
        networkLogView.detach();
    });
    it('skips unknown columns without title in persistence setting', async () => {
        const columnSettings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-log-columns', {});
        columnSettings.set({
            '--this-does-not-exist-for-sure': { visible: false },
        });
        networkLogView = createNetworkLogView();
        const columns = networkLogView.columns().dataGrid().columns;
        assert.notExists(columns['--this-does-not-exist-for-sure']);
    });
    it('treats unknown columns with title in persistence setting as custom header', async () => {
        const columnSettings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-log-columns', {});
        columnSettings.set({
            'custom-header-for-test': { visible: false, title: 'Custom-Header' },
        });
        networkLogView = createNetworkLogView();
        const dataGrid = networkLogView.columns().dataGrid();
        const columns = dataGrid.columns;
        assert.exists(columns['custom-header-for-test']);
        const contextMenuShow = sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_15__.ContextMenu.ContextMenu.prototype, 'show').resolves();
        const header = dataGrid.element.querySelector('thead');
        const event = new MouseEvent('contextmenu');
        sinon.stub(event, 'target').value(header);
        dataGrid.element.dispatchEvent(event);
        assert.isTrue(contextMenuShow.calledOnce);
        const responseHeadersSubMenu = contextMenuShow.thisValues[0].footerSection().items.find((item) => item.buildDescriptor().label === 'Response Headers');
        assert.exists(responseHeadersSubMenu);
        assert.instanceOf(responseHeadersSubMenu, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_15__.ContextMenu.SubMenu);
        const customHeaderItem = responseHeadersSubMenu.defaultSection().items.find((item) => item.buildDescriptor().label === 'Custom-Header');
        assert.exists(customHeaderItem);
    });
});
function clickCheckbox(checkbox) {
    checkbox.checked = true;
    const event = new Event('change');
    checkbox.dispatchEvent(event);
}
function getCheckbox(filterBar, title) {
    const checkbox = filterBar.element.querySelector(`[title="${title}"] span`)?.shadowRoot?.querySelector('input') || null;
    assert.instanceOf(checkbox, HTMLInputElement);
    return checkbox;
}
function getRequestTypeDropdownOption(requestType) {
    const dropDownVbox = document.querySelector('.vbox')?.shadowRoot?.querySelectorAll('.soft-context-menu-item') || [];
    const dropdownOptions = Array.from(dropDownVbox);
    return dropdownOptions.find(el => el.textContent?.includes(requestType)) || null;
}
async function selectRequestTypesOption(option) {
    const item = getRequestTypeDropdownOption(option);
    assert.instanceOf(item, HTMLElement);
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.dispatchMouseUpEvent)(item, { bubbles: true, composed: true });
    await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.raf)();
}
async function openMoreTypesDropdown(filterBar, networkLogView) {
    const button = filterBar.element.querySelector('[aria-label="Show only/hide requests dropdown"]')
        ?.querySelector('.toolbar-button');
    button?.dispatchEvent(new Event('click'));
    await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.raf)();
    const dropdown = networkLogView.getMoreFiltersDropdown();
    return dropdown;
}
function setupRequestTypesDropdown() {
    const filterItems = Object.entries(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceCategories).map(([key, category]) => ({
        name: category.title(),
        label: () => category.shortTitle(),
        title: category.title(),
        jslogContext: key,
    }));
    const setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-resource-type-filters', { all: true });
    const dropdown = new _network_js__WEBPACK_IMPORTED_MODULE_16__.NetworkLogView.DropDownTypesUI(filterItems, setting);
    return dropdown;
}
function getCountAdorner(filterBar) {
    const button = filterBar.element.querySelector('[aria-label="Show only/hide requests dropdown"]')
        ?.querySelector('.toolbar-button');
    return button?.querySelector('.active-filters-count') ?? null;
}
function getMoreFiltersActiveCount(filterBar) {
    const countAdorner = getCountAdorner(filterBar);
    const count = countAdorner?.querySelector('[slot="content"]')?.textContent ?? '';
    return count;
}
function getSoftMenu() {
    const container = document.querySelector('div[data-devtools-glass-pane]');
    const softMenu = container.shadowRoot.querySelector('.soft-context-menu');
    assert.instanceOf(softMenu, HTMLElement);
    return softMenu;
}
function getDropdownItem(softMenu, label) {
    const item = softMenu?.querySelector(`[aria-label^="${label}"]`);
    assert.instanceOf(item, HTMLElement);
    return item;
}
async function selectMoreFiltersOption(softMenu, option) {
    const item = getDropdownItem(softMenu, option);
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.dispatchMouseUpEvent)(item);
    await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_8__.raf)();
}


/***/ }),

/***/ "./src/panels/network/network.ts":
/*!***************************************!*\
  !*** ./src/panels/network/network.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BinaryResourceView: () => (/* reexport module object */ _BinaryResourceView_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   BlockedURLsPane: () => (/* reexport module object */ _BlockedURLsPane_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   EventSourceMessagesView: () => (/* reexport module object */ _EventSourceMessagesView_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   NetworkConfigView: () => (/* reexport module object */ _NetworkConfigView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   NetworkDataGridNode: () => (/* reexport module object */ _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   NetworkFrameGrouper: () => (/* reexport module object */ _NetworkFrameGrouper_js__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   NetworkItemView: () => (/* reexport module object */ _NetworkItemView_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   NetworkLogView: () => (/* reexport module object */ _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   NetworkLogViewColumns: () => (/* reexport module object */ _NetworkLogViewColumns_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   NetworkManageCustomHeadersView: () => (/* reexport module object */ _NetworkManageCustomHeadersView_js__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   NetworkOverview: () => (/* reexport module object */ _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_21__),
/* harmony export */   NetworkPanel: () => (/* reexport module object */ _NetworkPanel_js__WEBPACK_IMPORTED_MODULE_22__),
/* harmony export */   NetworkSearchScope: () => (/* reexport module object */ _NetworkSearchScope_js__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   NetworkTimeCalculator: () => (/* reexport module object */ _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   NetworkWaterfallColumn: () => (/* reexport module object */ _NetworkWaterfallColumn_js__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   RequestCookiesView: () => (/* reexport module object */ _RequestCookiesView_js__WEBPACK_IMPORTED_MODULE_13__),
/* harmony export */   RequestHTMLView: () => (/* reexport module object */ _RequestHTMLView_js__WEBPACK_IMPORTED_MODULE_14__),
/* harmony export */   RequestInitiatorView: () => (/* reexport module object */ _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_15__),
/* harmony export */   RequestPayloadView: () => (/* reexport module object */ _RequestPayloadView_js__WEBPACK_IMPORTED_MODULE_23__),
/* harmony export */   RequestPreviewView: () => (/* reexport module object */ _RequestPreviewView_js__WEBPACK_IMPORTED_MODULE_17__),
/* harmony export */   RequestResponseView: () => (/* reexport module object */ _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_16__),
/* harmony export */   RequestTimingView: () => (/* reexport module object */ _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_18__),
/* harmony export */   ResourceWebSocketFrameView: () => (/* reexport module object */ _ResourceWebSocketFrameView_js__WEBPACK_IMPORTED_MODULE_19__),
/* harmony export */   SignedExchangeInfoView: () => (/* reexport module object */ _SignedExchangeInfoView_js__WEBPACK_IMPORTED_MODULE_20__)
/* harmony export */ });
/* harmony import */ var _BinaryResourceView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BinaryResourceView.js */ "./src/panels/network/BinaryResourceView.ts");
/* harmony import */ var _BlockedURLsPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockedURLsPane.js */ "./src/panels/network/BlockedURLsPane.ts");
/* harmony import */ var _EventSourceMessagesView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventSourceMessagesView.js */ "./src/panels/network/EventSourceMessagesView.ts");
/* harmony import */ var _NetworkConfigView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NetworkConfigView.js */ "./src/panels/network/NetworkConfigView.ts");
/* harmony import */ var _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NetworkDataGridNode.js */ "./src/panels/network/NetworkDataGridNode.ts");
/* harmony import */ var _NetworkItemView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NetworkItemView.js */ "./src/panels/network/NetworkItemView.ts");
/* harmony import */ var _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NetworkTimeCalculator.js */ "./src/panels/network/NetworkTimeCalculator.ts");
/* harmony import */ var _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NetworkLogView.js */ "./src/panels/network/NetworkLogView.ts");
/* harmony import */ var _NetworkLogViewColumns_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NetworkLogViewColumns.js */ "./src/panels/network/NetworkLogViewColumns.ts");
/* harmony import */ var _NetworkFrameGrouper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NetworkFrameGrouper.js */ "./src/panels/network/NetworkFrameGrouper.ts");
/* harmony import */ var _NetworkManageCustomHeadersView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NetworkManageCustomHeadersView.js */ "./src/panels/network/NetworkManageCustomHeadersView.ts");
/* harmony import */ var _NetworkSearchScope_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NetworkSearchScope.js */ "./src/panels/network/NetworkSearchScope.ts");
/* harmony import */ var _NetworkWaterfallColumn_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NetworkWaterfallColumn.js */ "./src/panels/network/NetworkWaterfallColumn.ts");
/* harmony import */ var _RequestCookiesView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RequestCookiesView.js */ "./src/panels/network/RequestCookiesView.ts");
/* harmony import */ var _RequestHTMLView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RequestHTMLView.js */ "./src/panels/network/RequestHTMLView.ts");
/* harmony import */ var _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RequestInitiatorView.js */ "./src/panels/network/RequestInitiatorView.ts");
/* harmony import */ var _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./RequestResponseView.js */ "./src/panels/network/RequestResponseView.ts");
/* harmony import */ var _RequestPreviewView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./RequestPreviewView.js */ "./src/panels/network/RequestPreviewView.ts");
/* harmony import */ var _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./RequestTimingView.js */ "./src/panels/network/RequestTimingView.ts");
/* harmony import */ var _ResourceWebSocketFrameView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ResourceWebSocketFrameView.js */ "./src/panels/network/ResourceWebSocketFrameView.ts");
/* harmony import */ var _SignedExchangeInfoView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SignedExchangeInfoView.js */ "./src/panels/network/SignedExchangeInfoView.ts");
/* harmony import */ var _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./NetworkOverview.js */ "./src/panels/network/NetworkOverview.ts");
/* harmony import */ var _NetworkPanel_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./NetworkPanel.js */ "./src/panels/network/NetworkPanel.ts");
/* harmony import */ var _RequestPayloadView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./RequestPayloadView.js */ "./src/panels/network/RequestPayloadView.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


















































/***/ }),

/***/ "./src/testing/ContextMenuHelpers.ts":
/*!*******************************************!*\
  !*** ./src/testing/ContextMenuHelpers.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findMenuItemWithLabel: () => (/* binding */ findMenuItemWithLabel),
/* harmony export */   getContextMenuForElement: () => (/* binding */ getContextMenuForElement),
/* harmony export */   getMenuForShiftClick: () => (/* binding */ getMenuForShiftClick),
/* harmony export */   getMenuForToolbarButton: () => (/* binding */ getMenuForToolbarButton),
/* harmony export */   getMenuItemLabels: () => (/* binding */ getMenuItemLabels)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getMenu(action) {
    const sandbox = sinon.createSandbox();
    const contextMenuShow = sandbox.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ContextMenu.ContextMenu.prototype, 'show').resolves();
    action();
    sandbox.restore();
    return contextMenuShow.thisValues[0];
}
function getMenuForToolbarButton(button) {
    return getMenu(() => {
        button.clicked(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));
    });
}
function findMenuItemWithLabel(section, label) {
    return section.items.find((item) => item.buildDescriptor().label === label);
}
function getMenuItemLabels(section) {
    return section.items.map((item) => item.buildDescriptor().label);
}
function getContextMenuForElement(element, target) {
    return getMenu(() => {
        const event = new MouseEvent('contextmenu', { bubbles: true });
        if (target) {
            sinon.stub(event, 'target').value(target);
        }
        element.dispatchEvent(event);
    });
}
function getMenuForShiftClick(element) {
    return getMenu(() => {
        element.dispatchEvent(new MouseEvent('click', { shiftKey: true }));
    });
}


/***/ }),

/***/ "./src/testing/ExpectStubCall.ts":
/*!***************************************!*\
  !*** ./src/testing/ExpectStubCall.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expectCall: () => (/* binding */ expectCall),
/* harmony export */   expectCalled: () => (/* binding */ expectCalled)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCall(stub, options = {}) {
    return new Promise(resolve => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function (...args) {
            if (stub.callCount < (options.callCount ?? 1)) {
                return undefined;
            }
            resolve(args);
            return (options.fakeFn ? options.fakeFn.apply(this, args) : undefined);
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub, options = {}) {
    const remainingCalls = (options.callCount ?? 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, { ...options, callCount: remainingCalls });
}


/***/ }),

/***/ "./src/testing/FileManagerHelpers.ts":
/*!*******************************************!*\
  !*** ./src/testing/FileManagerHelpers.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stubFileManager: () => (/* binding */ stubFileManager)
/* harmony export */ });
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function stubFileManager() {
    const fileManager = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__.FileManager.FileManager.instance();
    sinon.stub(fileManager, 'save').callsFake(async (file, _2, _3) => ({ fileSystemPath: file }));
    sinon.stub(fileManager, 'append').callsFake(file => {
        fileManager.dispatchEventToListeners(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__.FileManager.Events.AppendedToURL, file);
    });
    sinon.stub(fileManager, 'close');
    return fileManager;
}


/***/ }),

/***/ "./src/ui/components/report_view/ReportView.ts":
/*!*****************************************************!*\
  !*** ./src/ui/components/report_view/ReportView.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Report: () => (/* binding */ Report),
/* harmony export */   ReportKey: () => (/* binding */ ReportKey),
/* harmony export */   ReportSection: () => (/* binding */ ReportSection),
/* harmony export */   ReportSectionDivider: () => (/* binding */ ReportSectionDivider),
/* harmony export */   ReportSectionHeader: () => (/* binding */ ReportSectionHeader),
/* harmony export */   ReportValue: () => (/* binding */ ReportValue)
/* harmony export */ });
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './report.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportKey.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionDivider.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionHeader.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Report_instances, _Report_shadow, _Report_reportTitle, _Report_render, _ReportSection_instances, _ReportSection_shadow, _ReportSection_render, _ReportSectionHeader_instances, _ReportSectionHeader_shadow, _ReportSectionHeader_render, _ReportSectionDivider_instances, _ReportSectionDivider_shadow, _ReportSectionDivider_render, _ReportKey_instances, _ReportKey_shadow, _ReportKey_render, _ReportValue_instances, _ReportValue_shadow, _ReportValue_render;







class Report extends HTMLElement {
    constructor() {
        super(...arguments);
        _Report_instances.add(this);
        _Report_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _Report_reportTitle.set(this, '');
    }
    set data({ reportTitle }) {
        __classPrivateFieldSet(this, _Report_reportTitle, reportTitle, "f");
        __classPrivateFieldGet(this, _Report_instances, "m", _Report_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _Report_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './report.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _Report_instances, "m", _Report_render).call(this);
    }
}
_Report_shadow = new WeakMap(), _Report_reportTitle = new WeakMap(), _Report_instances = new WeakSet(), _Report_render = function _Report_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="content">
        ${__classPrivateFieldGet(this, _Report_reportTitle, "f") ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `<div class="report-title">${__classPrivateFieldGet(this, _Report_reportTitle, "f")}</div>` : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing}
        <slot></slot>
      </div>
    `, __classPrivateFieldGet(this, _Report_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(Report, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report`
});
class ReportSection extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportSection_instances.add(this);
        _ReportSection_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportSection_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportSection_instances, "m", _ReportSection_render).call(this);
    }
}
_ReportSection_shadow = new WeakMap(), _ReportSection_instances = new WeakSet(), _ReportSection_render = function _ReportSection_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section">
        <slot></slot>
      </div>
    `, __classPrivateFieldGet(this, _ReportSection_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportSection, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section`
});
class ReportSectionHeader extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportSectionHeader_instances.add(this);
        _ReportSectionHeader_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportSectionHeader_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionHeader.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportSectionHeader_instances, "m", _ReportSectionHeader_render).call(this);
    }
}
_ReportSectionHeader_shadow = new WeakMap(), _ReportSectionHeader_instances = new WeakSet(), _ReportSectionHeader_render = function _ReportSectionHeader_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-header">
        <slot></slot>
      </div>
    `, __classPrivateFieldGet(this, _ReportSectionHeader_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportSectionHeader, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section-header`
});
class ReportSectionDivider extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportSectionDivider_instances.add(this);
        _ReportSectionDivider_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportSectionDivider_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionDivider.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportSectionDivider_instances, "m", _ReportSectionDivider_render).call(this);
    }
}
_ReportSectionDivider_shadow = new WeakMap(), _ReportSectionDivider_instances = new WeakSet(), _ReportSectionDivider_render = function _ReportSectionDivider_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-divider">
      </div>
    `, __classPrivateFieldGet(this, _ReportSectionDivider_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportSectionDivider, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-divider`
});
class ReportKey extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportKey_instances.add(this);
        _ReportKey_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportKey_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportKey.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportKey_instances, "m", _ReportKey_render).call(this);
    }
}
_ReportKey_shadow = new WeakMap(), _ReportKey_instances = new WeakSet(), _ReportKey_render = function _ReportKey_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="key"><slot></slot></div>
    `, __classPrivateFieldGet(this, _ReportKey_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportKey, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-key`
});
class ReportValue extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportValue_instances.add(this);
        _ReportValue_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportValue_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportValue_instances, "m", _ReportValue_render).call(this);
    }
}
_ReportValue_shadow = new WeakMap(), _ReportValue_instances = new WeakSet(), _ReportValue_render = function _ReportValue_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="value"><slot></slot></div>
    `, __classPrivateFieldGet(this, _ReportValue_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportValue, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-value`
});
customElements.define('devtools-report', Report);
customElements.define('devtools-report-section', ReportSection);
customElements.define('devtools-report-section-header', ReportSectionHeader);
customElements.define('devtools-report-key', ReportKey);
customElements.define('devtools-report-value', ReportValue);
customElements.define('devtools-report-divider', ReportSectionDivider);


/***/ }),

/***/ "./src/ui/components/report_view/report_view.ts":
/*!******************************************************!*\
  !*** ./src/ui/components/report_view/report_view.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportView: () => (/* reexport module object */ _ReportView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ReportView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportView.js */ "./src/ui/components/report_view/ReportView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);