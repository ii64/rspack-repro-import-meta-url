"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_network_components_RequestHeadersView_test_ts-src_ui_components_report_view_report-64299b"],{

/***/ "./src/panels/network/components/RequestHeadersView.test.ts":
/*!******************************************************************!*\
  !*** ./src/panels/network/components/RequestHeadersView.test.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../testing/OverridesHelpers.js */ "./src/testing/OverridesHelpers.ts");
/* harmony import */ var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../testing/UISourceCodeHelpers.js */ "./src/testing/UISourceCodeHelpers.ts");
/* harmony import */ var _testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../testing/UserMetricsHelpers.js */ "./src/testing/UserMetricsHelpers.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _forward_forward_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../forward/forward.js */ "./src/panels/network/forward/forward.ts");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components.js */ "./src/panels/network/components/components.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.














const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_11__.RenderCoordinator.RenderCoordinator.instance();
const defaultRequest = {
    statusCode: 200,
    statusText: 'OK',
    requestMethod: 'GET',
    url: () => 'https://www.example.com/index.html',
    cachedInMemory: () => true,
    remoteAddress: () => '199.36.158.100:443',
    referrerPolicy: () => _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.RequestReferrerPolicy.StrictOriginWhenCrossOrigin,
    sortedResponseHeaders: [
        { name: 'age', value: '0' },
        { name: 'cache-control', value: 'max-age=600' },
        { name: 'content-encoding', value: 'gzip' },
        { name: 'content-length', value: '661' },
    ],
    requestHeadersText: () => '',
    requestHeaders: () => [{ name: ':method', value: 'GET' }, { name: 'accept-encoding', value: 'gzip, deflate, br' },
        { name: 'cache-control', value: 'no-cache' }],
    responseHeadersText: `HTTP/1.1 200 OK
  age: 0
  cache-control: max-age=600
  content-encoding: gzip
  content-length: 661
  `,
    wasBlocked: () => false,
    blockedResponseCookies: () => [],
    originalResponseHeaders: [],
    setCookieHeaders: [],
    getAssociatedData: () => null,
    setAssociatedData: () => { },
    earlyHintsHeaders: [
        { name: 'link', value: '<src="/script.js" as="script">' },
    ],
};
async function renderHeadersComponent(request) {
    Object.setPrototypeOf(request, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.prototype);
    const component = new _components_js__WEBPACK_IMPORTED_MODULE_13__.RequestHeadersView.RequestHeadersView(request);
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(component);
    component.wasShown();
    await coordinator.done({ waitForWork: true });
    return component;
}
const getTextFromRow = (row) => {
    assert.isNotNull(row.shadowRoot);
    const headerNameElement = row.shadowRoot.querySelector('.header-name');
    const headerName = headerNameElement?.textContent?.trim() || '';
    const headerValueElement = row.shadowRoot.querySelector('.header-value');
    const headerValue = headerValueElement?.textContent?.trim() || '';
    return [headerName, headerValue];
};
const getRowsFromCategory = (category) => {
    const slot = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getElementWithinComponent)(category, 'slot', HTMLSlotElement);
    const section = slot.assignedElements()[0];
    assert.instanceOf(section, HTMLElement);
    assert.isNotNull(section.shadowRoot);
    const rows = section.shadowRoot.querySelectorAll('devtools-header-section-row');
    return Array.from(rows);
};
const getRowsTextFromCategory = (category) => {
    return getRowsFromCategory(category).map(row => getTextFromRow(row));
};
const getRowHighlightStatus = (container) => {
    const rows = getRowsFromCategory(container);
    return rows.map(row => {
        const element = row.shadowRoot?.querySelector('.row');
        return element?.classList.contains('header-highlight') || false;
    });
};
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.describeWithMockConnection)('RequestHeadersView', () => {
    let component = null;
    beforeEach(() => {
        (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_8__.setUpEnvironment)();
        (0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_10__.resetRecordedMetrics)();
    });
    afterEach(async () => {
        component?.remove();
        await (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.deinitializeGlobalVars)();
    });
    it('renders the General section', async () => {
        component = await renderHeadersComponent(defaultRequest);
        assert.isNotNull(component.shadowRoot);
        const generalCategory = component.shadowRoot.querySelector('[aria-label="General"]');
        assert.instanceOf(generalCategory, HTMLElement);
        const names = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getCleanTextContentFromElements)(generalCategory, '.header-name');
        assert.deepEqual(names, [
            'Request URL:',
            'Request Method:',
            'Status Code:',
            'Remote Address:',
            'Referrer Policy:',
        ]);
        const values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getCleanTextContentFromElements)(generalCategory, '.header-value');
        assert.deepEqual(values, [
            'https://www.example.com/index.html',
            'GET',
            '200 OK (from memory cache)',
            '199.36.158.100:443',
            'strict-origin-when-cross-origin',
        ]);
    });
    it('status text of a request from cache memory corresponds to the status code', async () => {
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com', '', null, null, null);
        request.statusCode = 200;
        request.setFromMemoryCache();
        component = await renderHeadersComponent(request);
        assert.isNotNull(component.shadowRoot);
        const statusCodeSection = component.shadowRoot.querySelector('.status-with-comment');
        assert.strictEqual('200 OK (from memory cache)', statusCodeSection?.textContent);
    });
    it('renders request and response headers', async () => {
        component = await renderHeadersComponent(defaultRequest);
        assert.isNotNull(component.shadowRoot);
        const responseHeadersCategory = component.shadowRoot.querySelector('[aria-label="Response Headers"]');
        assert.instanceOf(responseHeadersCategory, HTMLElement);
        assert.deepStrictEqual(getRowsTextFromCategory(responseHeadersCategory), [['age:', '0'], ['cache-control:', 'max-age=600'], ['content-encoding:', 'gzip'], ['content-length:', '661']]);
        const requestHeadersCategory = component.shadowRoot.querySelector('[aria-label="Request Headers"]');
        assert.instanceOf(requestHeadersCategory, HTMLElement);
        assert.deepStrictEqual(getRowsTextFromCategory(requestHeadersCategory), [[':method:', 'GET'], ['accept-encoding:', 'gzip, deflate, br'], ['cache-control:', 'no-cache']]);
    });
    it('renders early hints headers', async () => {
        component = await renderHeadersComponent(defaultRequest);
        assert.isNotNull(component.shadowRoot);
        const earlyHintsCategory = component.shadowRoot.querySelector('[aria-label="Early Hints Headers"]');
        assert.instanceOf(earlyHintsCategory, HTMLElement);
        assert.deepStrictEqual(getRowsTextFromCategory(earlyHintsCategory), [['link:', '<src="/script.js" as="script">']]);
    });
    it('emits UMA event when a header value is being copied', async () => {
        component = await renderHeadersComponent(defaultRequest);
        assert.isNotNull(component.shadowRoot);
        const generalCategory = component.shadowRoot.querySelector('[aria-label="General"]');
        assert.instanceOf(generalCategory, HTMLElement);
        const spy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'actionTaken');
        const headerValue = generalCategory.querySelector('.header-value');
        assert.instanceOf(headerValue, HTMLElement);
        assert.isTrue(spy.notCalled);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchCopyEvent)(headerValue);
        assert.isTrue(spy.calledWith(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.NetworkPanelCopyValue));
    });
    it('can switch between source and parsed view', async () => {
        component = await renderHeadersComponent(defaultRequest);
        assert.isNotNull(component.shadowRoot);
        const responseHeadersCategory = component.shadowRoot.querySelector('[aria-label="Response Headers"]');
        assert.instanceOf(responseHeadersCategory, HTMLElement);
        // Switch to viewing source view
        responseHeadersCategory.dispatchEvent(new _components_js__WEBPACK_IMPORTED_MODULE_13__.RequestHeadersView.ToggleRawHeadersEvent());
        await coordinator.done();
        const rawHeadersDiv = responseHeadersCategory.querySelector('.raw-headers');
        assert.instanceOf(rawHeadersDiv, HTMLDivElement);
        const rawTextContent = rawHeadersDiv.textContent?.replace(/ {2,}/g, '');
        assert.strictEqual(rawTextContent, 'HTTP/1.1 200 OK\nage: 0\ncache-control: max-age=600\ncontent-encoding: gzip\ncontent-length: 661');
        // Switch to viewing parsed view
        responseHeadersCategory.dispatchEvent(new _components_js__WEBPACK_IMPORTED_MODULE_13__.RequestHeadersView.ToggleRawHeadersEvent());
        await coordinator.done();
        assert.deepStrictEqual(getRowsTextFromCategory(responseHeadersCategory), [['age:', '0'], ['cache-control:', 'max-age=600'], ['content-encoding:', 'gzip'], ['content-length:', '661']]);
    });
    it('cuts off long raw headers and shows full content on button click', async () => {
        const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
        component = await renderHeadersComponent({
            ...defaultRequest,
            responseHeadersText: loremIpsum.repeat(10),
        });
        assert.isNotNull(component.shadowRoot);
        const responseHeadersCategory = component.shadowRoot.querySelector('[aria-label="Response Headers"]');
        assert.instanceOf(responseHeadersCategory, HTMLElement);
        // Switch to viewing source view
        responseHeadersCategory.dispatchEvent(new _components_js__WEBPACK_IMPORTED_MODULE_13__.RequestHeadersView.ToggleRawHeadersEvent());
        await coordinator.done();
        const rawHeadersDiv = responseHeadersCategory.querySelector('.raw-headers');
        assert.instanceOf(rawHeadersDiv, HTMLDivElement);
        const shortenedRawTextContent = rawHeadersDiv.textContent?.replace(/ {2,}/g, '');
        assert.strictEqual(shortenedRawTextContent?.length, 2896);
        const showMoreButton = responseHeadersCategory.querySelector('devtools-button');
        assert.instanceOf(showMoreButton, HTMLElement);
        assert.strictEqual(showMoreButton.textContent, 'Show more');
        showMoreButton.click();
        await coordinator.done();
        const noMoreShowMoreButton = responseHeadersCategory.querySelector('devtools-button');
        assert.isNull(noMoreShowMoreButton);
        const fullRawTextContent = rawHeadersDiv.textContent?.replace(/ {2,}/g, '');
        assert.strictEqual(fullRawTextContent?.length, 4450);
    });
    it('re-renders on request headers update', async () => {
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/foo.html', '', null, null, null);
        request.responseHeaders = [{ name: 'originalName', value: 'originalValue' }];
        component = await renderHeadersComponent(request);
        assert.isNotNull(component.shadowRoot);
        const responseHeadersCategory = component.shadowRoot.querySelector('[aria-label="Response Headers"]');
        assert.instanceOf(responseHeadersCategory, HTMLElement);
        const spy = sinon.spy(component, 'render');
        assert.isTrue(spy.notCalled);
        assert.deepStrictEqual(getRowsTextFromCategory(responseHeadersCategory), [['originalname:', 'originalValue']]);
        request.responseHeaders = [{ name: 'updatedName', value: 'updatedValue' }];
        assert.isTrue(spy.calledOnce);
        await coordinator.done();
        assert.deepStrictEqual(getRowsTextFromCategory(responseHeadersCategory), [['updatedname:', 'updatedValue']]);
    });
    it('can highlight individual response headers', async () => {
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/foo.html', '', null, null, null);
        request.responseHeaders = [
            { name: 'foo', value: 'bar' },
            { name: 'highlightMe', value: 'some value' },
            { name: 'DevTools', value: 'rock' },
        ];
        component = await renderHeadersComponent(request);
        assert.isNotNull(component.shadowRoot);
        const responseHeadersCategory = component.shadowRoot.querySelector('[aria-label="Response Headers"]');
        assert.instanceOf(responseHeadersCategory, HTMLElement);
        assert.deepStrictEqual(getRowsTextFromCategory(responseHeadersCategory), [['devtools:', 'rock'], ['foo:', 'bar'], ['highlightme:', 'some value']]);
        assert.deepStrictEqual(getRowHighlightStatus(responseHeadersCategory), [false, false, false]);
        component.revealHeader(_forward_forward_js__WEBPACK_IMPORTED_MODULE_12__.UIRequestLocation.UIHeaderSection.Response, 'HiGhLiGhTmE');
        await coordinator.done();
        assert.deepStrictEqual(getRowHighlightStatus(responseHeadersCategory), [false, false, true]);
    });
    it('can highlight individual request headers', async () => {
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/foo.html', '', null, null, null);
        request.setRequestHeaders([
            { name: 'foo', value: 'bar' },
            { name: 'highlightMe', value: 'some value' },
            { name: 'DevTools', value: 'rock' },
        ]);
        component = await renderHeadersComponent(request);
        assert.isNotNull(component.shadowRoot);
        const requestHeadersCategory = component.shadowRoot.querySelector('[aria-label="Request Headers"]');
        assert.instanceOf(requestHeadersCategory, HTMLElement);
        assert.deepStrictEqual(getRowsTextFromCategory(requestHeadersCategory), [['devtools:', 'rock'], ['foo:', 'bar'], ['highlightme:', 'some value']]);
        assert.deepStrictEqual(getRowHighlightStatus(requestHeadersCategory), [false, false, false]);
        component.revealHeader(_forward_forward_js__WEBPACK_IMPORTED_MODULE_12__.UIRequestLocation.UIHeaderSection.Request, 'HiGhLiGhTmE');
        await coordinator.done();
        assert.deepStrictEqual(getRowHighlightStatus(requestHeadersCategory), [false, false, true]);
    });
    it('renders a link to \'.headers\'', async () => {
        const { project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createFileSystemUISourceCode)({
            url: 'file:///path/to/overrides/www.example.com/.headers',
            mimeType: 'text/plain',
            fileSystemPath: 'file:///path/to/overrides',
        });
        await _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.NetworkPersistenceManager.NetworkPersistenceManager.instance().setProject(project);
        component = await renderHeadersComponent(defaultRequest);
        assert.isNotNull(component.shadowRoot);
        const responseHeadersCategory = component.shadowRoot.querySelector('[aria-label="Response Headers"]');
        assert.instanceOf(responseHeadersCategory, HTMLElement);
        assert.isNotNull(responseHeadersCategory.shadowRoot);
        const linkElements = responseHeadersCategory.shadowRoot.querySelectorAll('x-link');
        assert.strictEqual(linkElements.length, 2);
        assert.instanceOf(linkElements[0], HTMLElement);
        assert.strictEqual(linkElements[0].title, 'https://goo.gle/devtools-override');
        assert.instanceOf(linkElements[1], HTMLElement);
        assert.strictEqual(linkElements[1].textContent?.trim(), _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.NetworkPersistenceManager.HEADERS_FILENAME);
    });
    it('does not render a link to \'.headers\' if a matching \'.headers\' does not exist', async () => {
        const { project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createFileSystemUISourceCode)({
            url: 'file:///path/to/overrides/www.mismatch.com/.headers',
            mimeType: 'text/plain',
            fileSystemPath: 'file:///path/to/overrides',
        });
        await _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.NetworkPersistenceManager.NetworkPersistenceManager.instance().setProject(project);
        component = await renderHeadersComponent(defaultRequest);
        assert.isNotNull(component.shadowRoot);
        const responseHeadersCategory = component.shadowRoot.querySelector('[aria-label="Response Headers"]');
        assert.instanceOf(responseHeadersCategory, HTMLElement);
        assert.isNotNull(responseHeadersCategory.shadowRoot);
        const linkElement = responseHeadersCategory.shadowRoot.querySelector('x-link');
        assert.isNull(linkElement);
    });
    it('allows enabling header overrides via buttons located next to each header', async () => {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').set(false);
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/', '', null, null, null);
        request.responseHeaders = [
            { name: 'foo', value: 'bar' },
        ];
        await (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createWorkspaceProject)('file:///path/to/overrides', [
            {
                name: '.headers',
                path: 'www.example.com/',
                content: '[]',
            },
        ]);
        component = await renderHeadersComponent(request);
        assert.isNotNull(component.shadowRoot);
        const responseHeaderSection = component.shadowRoot.querySelector('devtools-response-header-section');
        assert.instanceOf(responseHeaderSection, HTMLElement);
        assert.isNotNull(responseHeaderSection.shadowRoot);
        const headerRow = responseHeaderSection.shadowRoot.querySelector('devtools-header-section-row');
        assert.instanceOf(headerRow, HTMLElement);
        assert.isNotNull(headerRow.shadowRoot);
        const checkRow = (shadowRoot, headerName, headerValue, isEditable) => {
            assert.strictEqual(shadowRoot.querySelector('.header-name')?.textContent?.trim(), headerName);
            const valueEditableComponent = shadowRoot.querySelector('.header-value devtools-editable-span');
            if (isEditable) {
                assert.instanceOf(valueEditableComponent, HTMLElement);
                assert.isNotNull(valueEditableComponent.shadowRoot);
                const valueEditable = valueEditableComponent.shadowRoot.querySelector('.editable');
                assert.instanceOf(valueEditable, HTMLSpanElement);
                assert.strictEqual(valueEditable.textContent?.trim(), headerValue);
            }
            else {
                assert.strictEqual(shadowRoot.querySelector('.header-value')?.textContent?.trim(), headerValue);
                assert.strictEqual(valueEditableComponent, null);
            }
        };
        checkRow(headerRow.shadowRoot, 'foo:', 'bar', false);
        const pencilButton = headerRow.shadowRoot.querySelector('.enable-editing');
        assert.instanceOf(pencilButton, HTMLElement);
        pencilButton.click();
        await coordinator.done();
        checkRow(headerRow.shadowRoot, 'foo:', 'bar', true);
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_10__.recordedMetricsContain)(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken, _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideEnableEditingClicked));
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_10__.recordedMetricsContain)(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken, _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.PersistenceNetworkOverridesEnabled));
    });
    it('records metrics when a new \'.headers\' file is created', async () => {
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/', '', null, null, null);
        request.responseHeaders = [
            { name: 'foo', value: 'bar' },
        ];
        await (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createWorkspaceProject)('file:///path/to/overrides', []);
        component = await renderHeadersComponent(request);
        assert.isNotNull(component.shadowRoot);
        const responseHeaderSection = component.shadowRoot.querySelector('devtools-response-header-section');
        assert.instanceOf(responseHeaderSection, HTMLElement);
        assert.isNotNull(responseHeaderSection.shadowRoot);
        const headerRow = responseHeaderSection.shadowRoot.querySelector('devtools-header-section-row');
        assert.instanceOf(headerRow, HTMLElement);
        assert.isNotNull(headerRow.shadowRoot);
        const pencilButton = headerRow.shadowRoot.querySelector('.enable-editing');
        assert.instanceOf(pencilButton, HTMLElement);
        assert.isFalse((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_10__.recordedMetricsContain)(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken, _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideFileCreated));
        pencilButton.click();
        await coordinator.done();
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_10__.recordedMetricsContain)(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken, _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideFileCreated));
    });
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.describeWithEnvironment)('RequestHeadersView\'s Category', () => {
    it('can be opened and closed with right/left arrow keys', async () => {
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_13__.RequestHeadersView.Category();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(component);
        component.data = {
            name: 'general',
            title: 'General',
            loggingContext: 'details-general',
        };
        assert.isNotNull(component.shadowRoot);
        await coordinator.done();
        const details = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getElementWithinComponent)(component, 'details', HTMLDetailsElement);
        const summary = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getElementWithinComponent)(component, 'summary', HTMLElement);
        assert.isTrue(details.hasAttribute('open'));
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(summary, { key: 'ArrowLeft' });
        assert.isFalse(details.hasAttribute('open'));
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(summary, { key: 'ArrowDown' });
        assert.isFalse(details.hasAttribute('open'));
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(summary, { key: 'ArrowLeft' });
        assert.isFalse(details.hasAttribute('open'));
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(summary, { key: 'ArrowRight' });
        assert.isTrue(details.hasAttribute('open'));
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(summary, { key: 'ArrowUp' });
        assert.isTrue(details.hasAttribute('open'));
    });
    it('dispatches an event when its checkbox is toggled', async () => {
        let eventCounter = 0;
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_13__.RequestHeadersView.Category();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(component);
        component.data = {
            name: 'responseHeaders',
            title: 'Response Headers',
            headerCount: 3,
            checked: false,
            loggingContext: 'details-response-headers',
        };
        assert.isNotNull(component.shadowRoot);
        await coordinator.done();
        component.addEventListener(_components_js__WEBPACK_IMPORTED_MODULE_13__.RequestHeadersView.ToggleRawHeadersEvent.eventName, () => {
            eventCounter += 1;
        });
        const checkbox = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getElementWithinComponent)(component, 'input', HTMLInputElement);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(checkbox);
        assert.strictEqual(eventCounter, 1);
    });
});


/***/ }),

/***/ "./src/panels/network/components/WebBundleInfoView.ts":
/*!************************************************************!*\
  !*** ./src/panels/network/components/WebBundleInfoView.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebBundleInfoView: () => (/* binding */ WebBundleInfoView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../panels/utils/utils.js */ "./src/panels/utils/utils.ts");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './WebBundleInfoView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2018 The Chromium Authors. All rights reserved.
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
var _WebBundleInfoView_shadow, _WebBundleInfoView_webBundleInfo, _WebBundleInfoView_webBundleName;









const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__;
const UIStrings = {
    /**
     *@description Header for the column that contains URL of the resource in a web bundle.
     */
    bundledResource: 'Bundled resource',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/network/components/WebBundleInfoView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class WebBundleInfoView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__.LegacyWrapper.WrappableComponent {
    constructor(request) {
        super();
        _WebBundleInfoView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _WebBundleInfoView_webBundleInfo.set(this, void 0);
        _WebBundleInfoView_webBundleName.set(this, void 0);
        const webBundleInfo = request.webBundleInfo();
        if (!webBundleInfo) {
            throw new Error('Trying to render a Web Bundle info without providing data');
        }
        __classPrivateFieldSet(this, _WebBundleInfoView_webBundleInfo, webBundleInfo, "f");
        __classPrivateFieldSet(this, _WebBundleInfoView_webBundleName, request.parsedURL.lastPathComponent, "f");
        this.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('webbundle').track({ resize: true })}`);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _WebBundleInfoView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './WebBundleInfoView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    async render() {
        const rows = __classPrivateFieldGet(this, _WebBundleInfoView_webBundleInfo, "f").resourceUrls?.map(url => {
            const mimeType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.mimeFromURL(url) || null;
            const resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeTypeOverride(mimeType) ||
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(mimeType);
            const iconData = _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.PanelUtils.iconDataForResourceType(resourceType);
            return {
                cells: [
                    {
                        columnId: 'url',
                        value: null,
                        renderer() {
                            return html `
                <div style="display: flex;">
                  <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName} class="icon"
                    .data=${{ ...iconData, width: '20px' }}>
                  </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName}>
                  <span>${url}</span>
                </div>`;
                        },
                    },
                ],
            };
        });
        render(html `
      <div class="header">
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName} class="icon"
          .data=${{ color: 'var(--icon-default)', iconName: 'bundle', width: '20px' }}>
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName}>
        <span>${__classPrivateFieldGet(this, _WebBundleInfoView_webBundleName, "f")}</span>
        <x-link href="https://web.dev/web-bundles/#explaining-web-bundles"
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.link('webbundle-explainer').track({
            click: true,
        })}>
          <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName} class="icon"
            .data=${{ color: 'var(--icon-default)', iconName: 'help', width: '16px' }}>
          </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName}>
        </x-link>
      </div>
      <div>
        <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.DataGrid.litTagName}
          .data=${{
            columns: [
                {
                    id: 'url',
                    title: i18nString(UIStrings.bundledResource),
                    widthWeighting: 1,
                    visible: true,
                    hideable: false,
                },
            ],
            rows: rows,
            activeSort: null,
        }}>
        </${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.DataGrid.litTagName}>
      </div>`, __classPrivateFieldGet(this, _WebBundleInfoView_shadow, "f"), { host: this });
    }
}
_WebBundleInfoView_shadow = new WeakMap(), _WebBundleInfoView_webBundleInfo = new WeakMap(), _WebBundleInfoView_webBundleName = new WeakMap();
Object.defineProperty(WebBundleInfoView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.literal `devtools-web-bundle-info`
});
customElements.define('devtools-web-bundle-info', WebBundleInfoView);


/***/ }),

/***/ "./src/panels/network/components/components.ts":
/*!*****************************************************!*\
  !*** ./src/panels/network/components/components.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditableSpan: () => (/* reexport module object */ _EditableSpan_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   HeaderSectionRow: () => (/* reexport module object */ _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   RequestHeaderSection: () => (/* reexport module object */ _RequestHeaderSection_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   RequestHeadersView: () => (/* reexport module object */ _RequestHeadersView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   RequestTrustTokensView: () => (/* reexport module object */ _RequestTrustTokensView_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   ResponseHeaderSection: () => (/* reexport module object */ _ResponseHeaderSection_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   WebBundleInfoView: () => (/* reexport module object */ _WebBundleInfoView_js__WEBPACK_IMPORTED_MODULE_6__)
/* harmony export */ });
/* harmony import */ var _EditableSpan_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableSpan.js */ "./src/panels/network/components/EditableSpan.ts");
/* harmony import */ var _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderSectionRow.js */ "./src/panels/network/components/HeaderSectionRow.ts");
/* harmony import */ var _RequestHeaderSection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RequestHeaderSection.js */ "./src/panels/network/components/RequestHeaderSection.ts");
/* harmony import */ var _RequestHeadersView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RequestHeadersView.js */ "./src/panels/network/components/RequestHeadersView.ts");
/* harmony import */ var _RequestTrustTokensView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RequestTrustTokensView.js */ "./src/panels/network/components/RequestTrustTokensView.ts");
/* harmony import */ var _ResponseHeaderSection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ResponseHeaderSection.js */ "./src/panels/network/components/ResponseHeaderSection.ts");
/* harmony import */ var _WebBundleInfoView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebBundleInfoView.js */ "./src/panels/network/components/WebBundleInfoView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










/***/ }),

/***/ "./src/testing/OverridesHelpers.ts":
/*!*****************************************!*\
  !*** ./src/testing/OverridesHelpers.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWorkspaceProject: () => (/* binding */ createWorkspaceProject),
/* harmony export */   setUpEnvironment: () => (/* binding */ setUpEnvironment)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/breakpoints/breakpoints.js */ "./src/models/breakpoints/breakpoints.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





function setUpEnvironment() {
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
    const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
    const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
    const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({ forceNew: true, resourceMapping, targetManager });
    const breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__.BreakpointManager.BreakpointManager.instance({ forceNew: true, targetManager, workspace, debuggerWorkspaceBinding });
    _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.Persistence.PersistenceImpl.instance({ forceNew: true, workspace, breakpointManager });
    const networkPersistenceManager = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.NetworkPersistenceManager.NetworkPersistenceManager.instance({ forceNew: true, workspace });
    return { networkPersistenceManager, workspace, debuggerWorkspaceBinding };
}
async function createWorkspaceProject(baseUrl, files) {
    const { networkPersistenceManager } = setUpEnvironment();
    const fileSystem = {
        fileSystemPath: () => baseUrl,
        fileSystemBaseURL: baseUrl + '/',
        type: () => _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.projectTypes.FileSystem,
        fileSystemInternal: {
            supportsAutomapping: () => false,
        },
    };
    const uiSourceCodes = new Map();
    const mockProject = {
        uiSourceCodes: () => Array.from(uiSourceCodes.values()),
        id: () => baseUrl,
        fileSystemPath: () => baseUrl,
        uiSourceCodeForURL: (url) => {
            return uiSourceCodes.get(url) || null;
        },
        type: () => _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.projectTypes.FileSystem,
        initialGitFolders: () => [],
        fileSystemInternal: {
            type: () => 'filesystem',
        },
        fileSystemBaseURL: baseUrl + '/',
        createFile: () => { },
    };
    await networkPersistenceManager.setProject(mockProject);
    for (const file of files) {
        const url = file.path.concat(file.name);
        const fileUrl = networkPersistenceManager.fileUrlFromNetworkUrl(url, true);
        uiSourceCodes.set(fileUrl, {
            requestContent: () => Promise.resolve({ content: file.content }),
            url: () => fileUrl,
            project: () => {
                return { ...fileSystem, requestFileBlob: () => new Blob([file.content]) };
            },
            name: () => file.name,
            setWorkingCopy: () => { },
            commitWorkingCopy: () => { },
        });
    }
    await networkPersistenceManager.setProject(mockProject);
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
    workspace.addProject(mockProject);
    return networkPersistenceManager;
}


/***/ }),

/***/ "./src/testing/UISourceCodeHelpers.ts":
/*!********************************************!*\
  !*** ./src/testing/UISourceCodeHelpers.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContentProviderUISourceCode: () => (/* binding */ createContentProviderUISourceCode),
/* harmony export */   createContentProviderUISourceCodes: () => (/* binding */ createContentProviderUISourceCodes),
/* harmony export */   createFakeScriptMapping: () => (/* binding */ createFakeScriptMapping),
/* harmony export */   createFileSystemUISourceCode: () => (/* binding */ createFileSystemUISourceCode),
/* harmony export */   setupMockedUISourceCode: () => (/* binding */ setupMockedUISourceCode)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
var _TestPlatformFileSystem_mimeType, _TestPlatformFileSystem_autoMapping, _TestFileSystem_content, _TestFileSystem_metadata;






function createContentProviderUISourceCodes(options) {
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
    const projectType = options.projectType || _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.Formatter;
    assert.notEqual(projectType, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.FileSystem, 'For creating file system UISourceCodes use \'createFileSystemUISourceCode\' helper.');
    const project = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ContentProviderBasedProject.ContentProviderBasedProject(workspace, options.projectId || 'PROJECT_ID', projectType, 'Test project', false /* isServiceProject*/);
    if (options.target) {
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.NetworkProject.NetworkProject.setTargetForProject(project, options.target);
    }
    const uiSourceCodes = [];
    for (const item of options.items) {
        const resourceType = item.resourceType || _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(item.mimeType);
        const uiSourceCode = project.createUISourceCode(item.url, resourceType);
        const contentProvider = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.StaticContentProvider.StaticContentProvider.fromString(item.url, resourceType, item.content || '');
        const metadata = item.metadata || new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UISourceCodeMetadata(null, null);
        project.addUISourceCodeWithProvider(uiSourceCode, contentProvider, metadata, item.mimeType);
        uiSourceCodes.push(uiSourceCode);
    }
    return { project, uiSourceCodes };
}
function createContentProviderUISourceCode(options) {
    const { url, content, mimeType, metadata, projectType, projectId, target } = options;
    const { project, uiSourceCodes } = createContentProviderUISourceCodes({ items: [{ url, content, mimeType, metadata }], projectType, projectId, target });
    return { project, uiSourceCode: uiSourceCodes[0] };
}
class TestPlatformFileSystem extends _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.PlatformFileSystem.PlatformFileSystem {
    constructor(path, type, mimeType, autoMapping) {
        super(path, type);
        _TestPlatformFileSystem_mimeType.set(this, void 0);
        _TestPlatformFileSystem_autoMapping.set(this, void 0);
        __classPrivateFieldSet(this, _TestPlatformFileSystem_mimeType, mimeType, "f");
        __classPrivateFieldSet(this, _TestPlatformFileSystem_autoMapping, autoMapping, "f");
    }
    supportsAutomapping() {
        return __classPrivateFieldGet(this, _TestPlatformFileSystem_autoMapping, "f");
    }
    mimeFromPath(_path) {
        return __classPrivateFieldGet(this, _TestPlatformFileSystem_mimeType, "f");
    }
}
_TestPlatformFileSystem_mimeType = new WeakMap(), _TestPlatformFileSystem_autoMapping = new WeakMap();
class TestFileSystem extends _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.FileSystemWorkspaceBinding.FileSystem {
    constructor(options) {
        super(options.fileSystemWorkspaceBinding, options.platformFileSystem, options.workspace);
        _TestFileSystem_content.set(this, void 0);
        _TestFileSystem_metadata.set(this, void 0);
        __classPrivateFieldSet(this, _TestFileSystem_content, options.content, "f");
        __classPrivateFieldSet(this, _TestFileSystem_metadata, options.metadata, "f");
    }
    requestFileContent(_uiSourceCode) {
        return Promise.resolve(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.ContentData.ContentData(__classPrivateFieldGet(this, _TestFileSystem_content, "f"), /* isBase64 */ false, 'text/plain'));
    }
    requestMetadata(_uiSourceCode) {
        return Promise.resolve(__classPrivateFieldGet(this, _TestFileSystem_metadata, "f"));
    }
}
_TestFileSystem_content = new WeakMap(), _TestFileSystem_metadata = new WeakMap();
function createFileSystemUISourceCode(options) {
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
    const isolatedFileSystemManager = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.IsolatedFileSystemManager.IsolatedFileSystemManager.instance();
    const fileSystemWorkspaceBinding = new _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding(isolatedFileSystemManager, workspace);
    const fileSystemPath = (options.fileSystemPath || '');
    const type = options.type || '';
    const content = options.content || '';
    const platformFileSystem = new TestPlatformFileSystem(fileSystemPath, type, options.mimeType, Boolean(options.autoMapping));
    const metadata = options.metadata || new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UISourceCodeMetadata(null, null);
    const project = new TestFileSystem({ fileSystemWorkspaceBinding, platformFileSystem, workspace, content, metadata });
    const uiSourceCode = project.createUISourceCode(options.url, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(options.mimeType));
    project.addUISourceCode(uiSourceCode);
    return { uiSourceCode, project };
}
function setupMockedUISourceCode(url = 'https://example.com/') {
    const projectStub = sinon.createStubInstance(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ContentProviderBasedProject.ContentProviderBasedProject);
    const urlStringTagExample = url;
    const contentTypeStub = sinon.createStubInstance(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType);
    const uiSourceCode = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UISourceCode(projectStub, urlStringTagExample, contentTypeStub);
    return { sut: uiSourceCode, projectStub: projectStub, contentTypeStub: contentTypeStub };
}
function createFakeScriptMapping(debuggerModel, uiSourceCode, uiLineNumber, scriptId) {
    const sdkLocation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Location(debuggerModel, scriptId, 13);
    const uiLocation = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UILocation(uiSourceCode, uiLineNumber);
    const mapping = {
        rawLocationToUILocation: (_) => uiLocation,
        uiLocationToRawLocations: (_uiSourceCode, _lineNumber, _columnNumber) => [sdkLocation],
        uiLocationRangeToRawLocationRanges: (_uiSourceCode, _textRange) => {
            throw new Error('Not implemented');
        },
    };
    return mapping;
}


/***/ }),

/***/ "./src/testing/UserMetricsHelpers.ts":
/*!*******************************************!*\
  !*** ./src/testing/UserMetricsHelpers.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   recordedMetricsContain: () => (/* binding */ recordedMetricsContain),
/* harmony export */   resetRecordedMetrics: () => (/* binding */ resetRecordedMetrics)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/host/host.js */ "./src/core/host/host.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @returns True, iff a metric event with the provided name and code was recorded. False otherwise.
 */
function recordedMetricsContain(actionName, actionCode) {
    return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.recordedEnumeratedHistograms.some(event => event.actionName === actionName && event.actionCode === actionCode);
}
function resetRecordedMetrics() {
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.recordedEnumeratedHistograms = [];
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