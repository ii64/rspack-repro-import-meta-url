"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_network_components_ResponseHeaderSection_test_js-ui_components_report_view_report_view_js"],{

/***/ "./panels/network/components/ResponseHeaderSection.test.js":
/*!*****************************************************************!*\
  !*** ./panels/network/components/ResponseHeaderSection.test.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../testing/OverridesHelpers.js */ "./testing/OverridesHelpers.js");
/* harmony import */ var _testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../testing/UserMetricsHelpers.js */ "./testing/UserMetricsHelpers.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _forward_forward_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components.js */ "./panels/network/components/components.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__.RenderCoordinator.RenderCoordinator.instance();
async function renderResponseHeaderSection(request) {
    const component = new _components_js__WEBPACK_IMPORTED_MODULE_10__.ResponseHeaderSection.ResponseHeaderSection();
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(component);
    Object.setPrototypeOf(request, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.prototype);
    component.data = {
        request,
        toReveal: { section: "Response" /* NetworkForward.UIRequestLocation.UIHeaderSection.Response */, header: 'highlighted-header' },
    };
    await coordinator.done();
    assert.instanceOf(component, HTMLElement);
    assert.isNotNull(component.shadowRoot);
    return component;
}
async function editHeaderRow(component, index, headerAttribute, newValue) {
    assert.isNotNull(component.shadowRoot);
    const rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
    assert.isTrue(rows.length >= index + 1, 'Trying to edit row with index greater than # of rows.');
    const row = rows[index];
    assert.isNotNull(row.shadowRoot);
    const selector = headerAttribute === "HeaderName" /* HeaderAttribute.HeaderName */ ? '.header-name' : '.header-value';
    const editableComponent = row.shadowRoot.querySelector(`${selector} devtools-editable-span`);
    assert.instanceOf(editableComponent, HTMLElement);
    assert.isNotNull(editableComponent.shadowRoot);
    const editable = editableComponent.shadowRoot.querySelector('.editable');
    assert.instanceOf(editable, HTMLSpanElement);
    editable.focus();
    editable.innerText = newValue;
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.dispatchInputEvent)(editable, { inputType: 'insertText', data: newValue, bubbles: true, composed: true });
    editable.blur();
    await coordinator.done();
}
async function removeHeaderRow(component, index) {
    assert.isNotNull(component.shadowRoot);
    const row = component.shadowRoot.querySelectorAll('devtools-header-section-row')[index];
    assert.instanceOf(row, HTMLElement);
    assert.isNotNull(row.shadowRoot);
    const button = row.shadowRoot.querySelector('.remove-header');
    assert.instanceOf(button, HTMLElement);
    button.click();
    await coordinator.done();
}
async function setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders) {
    const request = {
        sortedResponseHeaders: actualHeaders,
        originalResponseHeaders: originalHeaders,
        setCookieHeaders: [],
        blockedResponseCookies: () => [],
        wasBlocked: () => false,
        url: () => 'https://www.example.com/',
        getAssociatedData: () => null,
        setAssociatedData: () => { },
    };
    return setupHeaderEditingWithRequest(headerOverridesFileContent, request);
}
async function setupHeaderEditingWithRequest(headerOverridesFileContent, request) {
    const networkPersistenceManager = await (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createWorkspaceProject)('file:///path/to/overrides', [
        {
            name: '.headers',
            path: 'www.example.com/',
            content: headerOverridesFileContent,
        },
    ]);
    const project = networkPersistenceManager.project();
    let spy = sinon.spy();
    if (project) {
        const uiSourceCode = project.uiSourceCodeForURL('file:///path/to/overrides/www.example.com/.headers');
        if (uiSourceCode) {
            spy = sinon.spy(uiSourceCode, 'setWorkingCopy');
        }
    }
    const component = await renderResponseHeaderSection(request);
    assert.isNotNull(component.shadowRoot);
    return { component, spy };
}
function checkHeaderSectionRow(row, headerName, headerValue, isOverride, isNameEditable, isValueEditable, isHighlighted = false, isDeleted = false) {
    assert.isNotNull(row.shadowRoot);
    const rowElement = row.shadowRoot.querySelector('.row');
    assert.strictEqual(rowElement?.classList.contains('header-overridden'), isOverride);
    assert.strictEqual(rowElement?.classList.contains('header-highlight'), isHighlighted);
    assert.strictEqual(rowElement?.classList.contains('header-deleted'), isDeleted);
    const nameEditableComponent = row.shadowRoot.querySelector('.header-name devtools-editable-span');
    if (isNameEditable) {
        assert.instanceOf(nameEditableComponent, HTMLElement);
        assert.isNotNull(nameEditableComponent.shadowRoot);
        const nameEditable = nameEditableComponent.shadowRoot.querySelector('.editable');
        assert.instanceOf(nameEditable, HTMLSpanElement);
        const textContent = nameEditable.textContent?.trim() + (row.shadowRoot.querySelector('.header-name')?.textContent || '').trim();
        assert.strictEqual(textContent, headerName);
    }
    else {
        assert.strictEqual(nameEditableComponent, null);
        assert.strictEqual(row.shadowRoot.querySelector('.header-name')?.textContent?.trim(), headerName);
    }
    const valueEditableComponent = row.shadowRoot.querySelector('.header-value devtools-editable-span');
    if (isValueEditable) {
        assert.instanceOf(valueEditableComponent, HTMLElement);
        assert.isNotNull(valueEditableComponent.shadowRoot);
        const valueEditable = valueEditableComponent.shadowRoot.querySelector('.editable');
        assert.instanceOf(valueEditable, HTMLSpanElement);
        assert.strictEqual(valueEditable.textContent?.trim(), headerValue);
    }
    else {
        assert.strictEqual(valueEditableComponent, null);
        assert.strictEqual(row.shadowRoot.querySelector('.header-value')?.textContent?.trim(), headerValue);
    }
}
function isRowFocused(component, rowIndex) {
    assert.isNotNull(component.shadowRoot);
    const rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
    assert.isTrue(rows.length > rowIndex);
    return Boolean(rows[rowIndex].shadowRoot?.activeElement);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.describeWithEnvironment)('ResponseHeaderSection', () => {
    beforeEach(async () => {
        await (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_6__.setUpEnvironment)();
        (0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_7__.resetRecordedMetrics)();
    });
    it('renders detailed reason for blocked requests', async () => {
        const request = {
            sortedResponseHeaders: [
                { name: 'content-length', value: '661' },
            ],
            blockedResponseCookies: () => [],
            wasBlocked: () => true,
            blockedReason: () => "corp-not-same-origin-after-defaulted-to-same-origin-by-coep" /* Protocol.Network.BlockedReason.CorpNotSameOriginAfterDefaultedToSameOriginByCoep */,
            originalResponseHeaders: [],
            setCookieHeaders: [],
            url: () => 'https://www.example.com/',
            getAssociatedData: () => null,
            setAssociatedData: () => { },
        };
        const component = await renderResponseHeaderSection(request);
        assert.isNotNull(component.shadowRoot);
        const row = component.shadowRoot.querySelectorAll('devtools-header-section-row')[1];
        assert.instanceOf(row, HTMLElement);
        assert.isNotNull(row.shadowRoot);
        const regex = /^\s*not-set\s*cross-origin-resource-policy:\s*$/;
        assert.isTrue(regex.test(row.shadowRoot.querySelector('.header-name')?.textContent || ''));
        assert.strictEqual(row.shadowRoot.querySelector('.header-value')?.textContent?.trim(), '');
        assert.strictEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getCleanTextContentFromElements)(row.shadowRoot, '.call-to-action')[0], 'To use this resource from a different origin, the server needs to specify a cross-origin ' +
            'resource policy in the response headers:Cross-Origin-Resource-Policy: same-siteChoose ' +
            'this option if the resource and the document are served from the same site.' +
            'Cross-Origin-Resource-Policy: cross-originOnly choose this option if an arbitrary website ' +
            'including this resource does not impose a security risk.Learn more');
    });
    it('displays info about blocked "Set-Cookie"-headers', async () => {
        const request = {
            sortedResponseHeaders: [{ name: 'Set-Cookie', value: 'secure=only; Secure' }],
            blockedResponseCookies: () => [{
                    blockedReasons: ['SecureOnly', 'OverwriteSecure'],
                    cookieLine: 'secure=only; Secure',
                    cookie: null,
                }],
            wasBlocked: () => false,
            originalResponseHeaders: [],
            setCookieHeaders: [],
            url: () => 'https://www.example.com/',
            getAssociatedData: () => null,
            setAssociatedData: () => { },
        };
        const component = await renderResponseHeaderSection(request);
        assert.isNotNull(component.shadowRoot);
        const row = component.shadowRoot.querySelector('devtools-header-section-row');
        assert.instanceOf(row, HTMLElement);
        assert.isNotNull(row.shadowRoot);
        assert.strictEqual(row.shadowRoot.querySelector('.header-name')?.textContent?.trim(), 'set-cookie:');
        assert.strictEqual(row.shadowRoot.querySelector('.header-value')?.textContent?.trim(), 'secure=only; Secure');
        const icon = row.shadowRoot.querySelector('devtools-icon');
        assert.instanceOf(icon, HTMLElement);
        assert.strictEqual(icon.title, 'This attempt to set a cookie via a Set-Cookie header was blocked because it had the ' +
            '"Secure" attribute but was not received over a secure connection.\nThis attempt to ' +
            'set a cookie via a Set-Cookie header was blocked because it was not sent over a ' +
            'secure connection and would have overwritten a cookie with the Secure attribute.');
    });
    it('marks overridden headers', async () => {
        const request = {
            sortedResponseHeaders: [
                // keep names in alphabetical order
                { name: 'duplicate-both-no-mismatch', value: 'foo' },
                { name: 'duplicate-both-no-mismatch', value: 'bar' },
                { name: 'duplicate-both-with-mismatch', value: 'Chrome' },
                { name: 'duplicate-both-with-mismatch', value: 'DevTools' },
                { name: 'duplicate-different-order', value: 'aaa' },
                { name: 'duplicate-different-order', value: 'bbb' },
                { name: 'duplicate-in-actual-headers', value: 'first' },
                { name: 'duplicate-in-actual-headers', value: 'second' },
                { name: 'duplicate-in-original-headers', value: 'two' },
                { name: 'duplicate-single-line', value: 'first line, second line' },
                { name: 'is-in-original-headers', value: 'not an override' },
                { name: 'not-in-original-headers', value: 'is an override' },
                { name: 'triplicate', value: '1' },
                { name: 'triplicate', value: '2' },
                { name: 'triplicate', value: '2' },
                { name: 'xyz', value: 'contains \tab' },
            ],
            blockedResponseCookies: () => [],
            wasBlocked: () => false,
            originalResponseHeaders: [
                // keep names in alphabetical order
                { name: 'duplicate-both-no-mismatch', value: 'foo' },
                { name: 'duplicate-both-no-mismatch', value: 'bar' },
                { name: 'duplicate-both-with-mismatch', value: 'Chrome' },
                { name: 'duplicate-both-with-mismatch', value: 'Canary' },
                { name: 'duplicate-different-order', value: 'bbb' },
                { name: 'duplicate-different-order', value: 'aaa' },
                { name: 'duplicate-in-actual-headers', value: 'first' },
                { name: 'duplicate-in-original-headers', value: 'one' },
                { name: 'duplicate-in-original-headers', value: 'two' },
                { name: 'duplicate-single-line', value: 'first line' },
                { name: 'duplicate-single-line', value: 'second line' },
                { name: 'is-in-original-headers', value: 'not an override' },
                { name: 'triplicate', value: '1' },
                { name: 'triplicate', value: '1' },
                { name: 'triplicate', value: '2' },
                { name: 'xyz', value: 'contains \tab' },
            ],
            setCookieHeaders: [],
            url: () => 'https://www.example.com/',
            getAssociatedData: () => null,
            setAssociatedData: () => { },
        };
        const component = await renderResponseHeaderSection(request);
        assert.isNotNull(component.shadowRoot);
        const rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
        const checkRow = (shadowRoot, headerName, headerValue, isOverride) => {
            assert.strictEqual(shadowRoot.querySelector('.header-name')?.textContent?.trim(), headerName);
            assert.strictEqual(shadowRoot.querySelector('.header-value')?.textContent?.trim(), headerValue);
            assert.strictEqual(shadowRoot.querySelector('.row')?.classList.contains('header-overridden'), isOverride);
        };
        assert.isNotNull(rows[0].shadowRoot);
        checkRow(rows[0].shadowRoot, 'duplicate-both-no-mismatch:', 'foo', false);
        assert.isNotNull(rows[1].shadowRoot);
        checkRow(rows[1].shadowRoot, 'duplicate-both-no-mismatch:', 'bar', false);
        assert.isNotNull(rows[2].shadowRoot);
        checkRow(rows[2].shadowRoot, 'duplicate-both-with-mismatch:', 'Chrome', true);
        assert.isNotNull(rows[3].shadowRoot);
        checkRow(rows[3].shadowRoot, 'duplicate-both-with-mismatch:', 'DevTools', true);
        assert.isNotNull(rows[4].shadowRoot);
        checkRow(rows[4].shadowRoot, 'duplicate-different-order:', 'aaa', true);
        assert.isNotNull(rows[5].shadowRoot);
        checkRow(rows[5].shadowRoot, 'duplicate-different-order:', 'bbb', true);
        assert.isNotNull(rows[6].shadowRoot);
        checkRow(rows[6].shadowRoot, 'duplicate-in-actual-headers:', 'first', true);
        assert.isNotNull(rows[7].shadowRoot);
        checkRow(rows[7].shadowRoot, 'duplicate-in-actual-headers:', 'second', true);
        assert.isNotNull(rows[8].shadowRoot);
        checkRow(rows[8].shadowRoot, 'duplicate-in-original-headers:', 'two', true);
        assert.isNotNull(rows[9].shadowRoot);
        checkRow(rows[9].shadowRoot, 'duplicate-single-line:', 'first line, second line', false);
        assert.isNotNull(rows[10].shadowRoot);
        checkRow(rows[10].shadowRoot, 'is-in-original-headers:', 'not an override', false);
        assert.isNotNull(rows[11].shadowRoot);
        checkRow(rows[11].shadowRoot, 'not-in-original-headers:', 'is an override', true);
        assert.isNotNull(rows[12].shadowRoot);
        checkRow(rows[12].shadowRoot, 'triplicate:', '1', true);
        assert.isNotNull(rows[13].shadowRoot);
        checkRow(rows[13].shadowRoot, 'triplicate:', '2', true);
        assert.isNotNull(rows[14].shadowRoot);
        checkRow(rows[14].shadowRoot, 'triplicate:', '2', true);
        assert.isNotNull(rows[15].shadowRoot);
        checkRow(rows[15].shadowRoot, 'xyz:', 'contains  ab', false);
    });
    it('correctly sets headers as "editable" when matching ".headers" file exists and setting is turned on', async () => {
        await (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createWorkspaceProject)('file:///path/to/overrides', [
            {
                name: '.headers',
                path: 'www.example.com/',
                content: `[
          {
            "applyTo": "index.html",
            "headers": [{
              "name": "server",
              "value": "overridden server"
            }]
          }
        ]`,
            },
        ]);
        const request = {
            sortedResponseHeaders: [
                { name: 'cache-control', value: 'max-age=600' },
                { name: 'server', value: 'overridden server' },
            ],
            blockedResponseCookies: () => [],
            wasBlocked: () => false,
            originalResponseHeaders: [
                { name: 'cache-control', value: 'max-age=600' },
                { name: 'server', value: 'original server' },
            ],
            setCookieHeaders: [],
            url: () => 'https://www.example.com/',
            getAssociatedData: () => null,
            setAssociatedData: () => { },
        };
        const component = await renderResponseHeaderSection(request);
        assert.isNotNull(component.shadowRoot);
        const rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
        checkHeaderSectionRow(rows[0], 'cache-control:', 'max-age=600', false, false, true);
        checkHeaderSectionRow(rows[1], 'server:', 'overridden server', true, false, true);
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').set(false);
        component.data = { request };
        await coordinator.done();
        checkHeaderSectionRow(rows[0], 'cache-control:', 'max-age=600', false, false, false);
        checkHeaderSectionRow(rows[1], 'server:', 'overridden server', true, false, false);
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').set(true);
    });
    it('does not set headers as "editable" when matching ".headers" file cannot be parsed correctly', async () => {
        await (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createWorkspaceProject)('file:///path/to/overrides', [
            {
                name: '.headers',
                path: 'www.example.com/',
                // 'headers' contains the invalid key 'no-name' and will therefore
                // cause a parsing error.
                content: `[
          {
            "applyTo": "index.html",
            "headers": [{
              "no-name": "server",
              "value": "overridden server"
            }]
          }
        ]`,
            },
        ]);
        const request = {
            sortedResponseHeaders: [
                { name: 'cache-control', value: 'max-age=600' },
                { name: 'server', value: 'overridden server' },
            ],
            blockedResponseCookies: () => [],
            wasBlocked: () => false,
            originalResponseHeaders: [
                { name: 'cache-control', value: 'max-age=600' },
                { name: 'server', value: 'original server' },
            ],
            setCookieHeaders: [],
            url: () => 'https://www.example.com/',
            getAssociatedData: () => null,
            setAssociatedData: () => { },
        };
        // A console error is emitted when '.headers' cannot be parsed correctly.
        // We don't need that noise in the test output.
        sinon.stub(console, 'error');
        const component = await renderResponseHeaderSection(request);
        assert.isNotNull(component.shadowRoot);
        const rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
        assert.isNotNull(rows[0].shadowRoot);
        checkHeaderSectionRow(rows[0], 'cache-control:', 'max-age=600', false, false, false);
        assert.isNotNull(rows[1].shadowRoot);
        checkHeaderSectionRow(rows[1], 'server:', 'overridden server', true, false, false);
    });
    it('can edit original headers', async () => {
        const headerOverridesFileContent = `[
      {
        "applyTo": "index.html",
        "headers": [{
          "name": "server",
          "value": "overridden server"
        }]
      }
    ]`;
        const actualHeaders = [
            { name: 'cache-control', value: 'max-age=600' },
            { name: 'server', value: 'overridden server' },
        ];
        const originalHeaders = [
            { name: 'cache-control', value: 'max-age=600' },
            { name: 'server', value: 'original server' },
        ];
        const { component, spy } = await setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders);
        await editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */, 'max-age=9999');
        const expected = [{
                applyTo: 'index.html',
                headers: [
                    {
                        name: 'server',
                        value: 'overridden server',
                    },
                    {
                        name: 'cache-control',
                        value: 'max-age=9999',
                    },
                ],
            }];
        assert.isTrue(spy.calledOnceWith(JSON.stringify(expected, null, 2)));
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_7__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */, _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideHeaderEdited));
    });
    it('can handle tab-character in header value', async () => {
        const headers = [
            { name: 'foo', value: 'syn\tax' },
        ];
        const { component, spy } = await setupHeaderEditing('[]', headers, headers);
        assert.isNotNull(component.shadowRoot);
        const rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
        assert.strictEqual(rows.length, 1);
        checkHeaderSectionRow(rows[0], 'foo:', 'syn ax', false, false, true);
        await editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */, 'syn ax');
        assert.isTrue(spy.notCalled);
        checkHeaderSectionRow(rows[0], 'foo:', 'syn ax', false, false, true);
        await editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */, 'syntax');
        const expected = [{
                applyTo: 'index.html',
                headers: [
                    {
                        name: 'foo',
                        value: 'syntax',
                    },
                ],
            }];
        assert.isTrue(spy.calledOnceWith(JSON.stringify(expected, null, 2)));
        checkHeaderSectionRow(rows[0], 'foo:', 'syntax', true, false, true);
    });
    it('can edit overridden headers', async () => {
        const headerOverridesFileContent = `[
      {
        "applyTo": "index.html",
        "headers": [{
          "name": "server",
          "value": "overridden server"
        }]
      }
    ]`;
        const actualHeaders = [
            { name: 'cache-control', value: 'max-age=600' },
            { name: 'server', value: 'overridden server' },
        ];
        const originalHeaders = [
            { name: 'cache-control', value: 'max-age=600' },
            { name: 'server', value: 'original server' },
        ];
        const { component, spy } = await setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders);
        await editHeaderRow(component, 1, "HeaderValue" /* HeaderAttribute.HeaderValue */, 'edited value');
        const expected = [{
                applyTo: 'index.html',
                headers: [
                    {
                        name: 'server',
                        value: 'edited value',
                    },
                ],
            }];
        assert.isTrue(spy.calledOnceWith(JSON.stringify(expected, null, 2)));
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_7__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */, _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideHeaderEdited));
    });
    it('can remove header overrides', async () => {
        const headerOverridesFileContent = `[
      {
        "applyTo": "index.html",
        "headers": [
          {
            "name": "highlighted-header",
            "value": "overridden highlighted-header"
          },
          {
            "name": "cache-control",
            "value": "max-age=9999"
          },
          {
            "name": "added",
            "value": "foo"
          }
        ]
      }
    ]`;
        const actualHeaders = [
            { name: 'added', value: 'foo' },
            { name: 'cache-control', value: 'max-age=9999' },
            { name: 'highlighted-header', value: 'overridden highlighted-header' },
        ];
        const originalHeaders = [
            { name: 'cache-control', value: 'max-age=600' },
            { name: 'highlighted-header', value: 'original highlighted-header' },
        ];
        const { component, spy } = await setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders);
        assert.isNotNull(component.shadowRoot);
        let rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
        assert.strictEqual(rows.length, 3);
        checkHeaderSectionRow(rows[0], 'added:', 'foo', true, false, true);
        checkHeaderSectionRow(rows[1], 'cache-control:', 'max-age=9999', true, false, true);
        checkHeaderSectionRow(rows[2], 'highlighted-header:', 'overridden highlighted-header', true, false, true, true);
        await removeHeaderRow(component, 2);
        let expected = [{
                applyTo: 'index.html',
                headers: [
                    {
                        name: 'cache-control',
                        value: 'max-age=9999',
                    },
                    {
                        name: 'added',
                        value: 'foo',
                    },
                ],
            }];
        assert.strictEqual(spy.callCount, 1);
        assert.isTrue(spy.calledOnceWith(JSON.stringify(expected, null, 2)));
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_7__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */, _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideHeaderRemoved));
        rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
        assert.strictEqual(rows.length, 3);
        checkHeaderSectionRow(rows[0], 'added:', 'foo', true, false, true);
        checkHeaderSectionRow(rows[1], 'cache-control:', 'max-age=9999', true, false, true);
        checkHeaderSectionRow(rows[2], 'highlighted-header:', 'overridden highlighted-header', true, false, false, true, true);
        spy.resetHistory();
        await removeHeaderRow(component, 0);
        expected = [{
                applyTo: 'index.html',
                headers: [
                    {
                        name: 'cache-control',
                        value: 'max-age=9999',
                    },
                ],
            }];
        assert.strictEqual(spy.callCount, 1);
        assert.isTrue(spy.calledOnceWith(JSON.stringify(expected, null, 2)));
        rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
        assert.strictEqual(rows.length, 3);
        checkHeaderSectionRow(rows[0], 'added:', 'foo', true, false, false, false, true);
        checkHeaderSectionRow(rows[1], 'cache-control:', 'max-age=9999', true, false, true);
        checkHeaderSectionRow(rows[2], 'highlighted-header:', 'overridden highlighted-header', true, false, false, true, true);
    });
    it('can remove the last header override', async () => {
        const headerOverridesFileContent = `[
      {
        "applyTo": "index.html",
        "headers": [
          {
            "name": "server",
            "value": "overridden server"
          }
        ]
      }
    ]`;
        const actualHeaders = [
            { name: 'server', value: 'overridden server' },
        ];
        const originalHeaders = [
            { name: 'server', value: 'original server' },
        ];
        const { component, spy } = await setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders);
        await removeHeaderRow(component, 0);
        const expected = [];
        assert.strictEqual(spy.callCount, 1);
        assert.isTrue(spy.calledOnceWith(JSON.stringify(expected, null, 2)));
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_7__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */, _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideHeaderRemoved));
    });
    it('can handle non-breaking spaces when removing header overrides', async () => {
        const headerOverridesFileContent = `[
      {
        "applyTo": "index.html",
        "headers": [
          {
            "name": "added",
            "value": "space\xa0between"
          }
        ]
      }
    ]`;
        const actualHeaders = [
            { name: 'added', value: 'space between' },
            { name: 'cache-control', value: 'max-age=600' },
        ];
        const originalHeaders = [
            { name: 'cache-control', value: 'max-age=600' },
        ];
        const { component, spy } = await setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders);
        assert.isNotNull(component.shadowRoot);
        let rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
        assert.strictEqual(rows.length, 2);
        checkHeaderSectionRow(rows[0], 'added:', 'space between', true, false, true);
        checkHeaderSectionRow(rows[1], 'cache-control:', 'max-age=600', false, false, true);
        await removeHeaderRow(component, 0);
        const expected = [];
        assert.strictEqual(spy.callCount, 1);
        assert.isTrue(spy.calledOnceWith(JSON.stringify(expected, null, 2)));
        rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
        assert.strictEqual(rows.length, 2);
        checkHeaderSectionRow(rows[0], 'added:', 'space between', true, false, false, false, true);
        checkHeaderSectionRow(rows[1], 'cache-control:', 'max-age=600', false, false, true);
    });
    it('does not generate header overrides which have "applyTo" but empty "headers" array', async () => {
        const actualHeaders = [
            { name: 'server', value: 'original server' },
        ];
        const { component, spy } = await setupHeaderEditing('[]', actualHeaders, actualHeaders);
        await editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */, 'overridden server');
        const expected = [{
                applyTo: 'index.html',
                headers: [
                    {
                        name: 'server',
                        value: 'overridden server',
                    },
                ],
            }];
        assert.strictEqual(spy.callCount, 1);
        assert.isTrue(spy.calledOnceWith(JSON.stringify(expected, null, 2)));
        spy.resetHistory();
        await editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */, 'original server');
        assert.strictEqual(spy.callCount, 1);
        assert.isTrue(spy.calledOnceWith(JSON.stringify([], null, 2)));
    });
    it('can add headers', async () => {
        const headerOverridesFileContent = `[
      {
        "applyTo": "index.html",
        "headers": [{
          "name": "server",
          "value": "overridden server"
        }]
      }
    ]`;
        const actualHeaders = [{ name: 'server', value: 'overridden server' }];
        const originalHeaders = [{ name: 'server', value: 'original server' }];
        const { component, spy } = await setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders);
        assert.isNotNull(component.shadowRoot);
        const addHeaderButton = component.shadowRoot.querySelector('.add-header-button');
        assert.instanceOf(addHeaderButton, HTMLElement);
        addHeaderButton.click();
        await coordinator.done();
        let expected = [{
                applyTo: 'index.html',
                headers: [
                    {
                        name: 'server',
                        value: 'overridden server',
                    },
                    {
                        name: 'header-name',
                        value: 'header value',
                    },
                ],
            }];
        assert.isTrue(spy.getCall(-1).calledWith(JSON.stringify(expected, null, 2)));
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_7__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */, _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideHeaderAdded));
        await editHeaderRow(component, 1, "HeaderName" /* HeaderAttribute.HeaderName */, 'foo');
        expected = [{
                applyTo: 'index.html',
                headers: [
                    {
                        name: 'server',
                        value: 'overridden server',
                    },
                    {
                        name: 'foo',
                        value: 'header value',
                    },
                ],
            }];
        assert.isTrue(spy.getCall(-1).calledWith(JSON.stringify(expected, null, 2)));
        await editHeaderRow(component, 1, "HeaderValue" /* HeaderAttribute.HeaderValue */, 'bar');
        expected = [{
                applyTo: 'index.html',
                headers: [
                    {
                        name: 'server',
                        value: 'overridden server',
                    },
                    {
                        name: 'foo',
                        value: 'bar',
                    },
                ],
            }];
        assert.isTrue(spy.getCall(-1).calledWith(JSON.stringify(expected, null, 2)));
    });
    it('does not persist invalid header names', async () => {
        const headerOverridesFileContent = `[
      {
        "applyTo": "index.html",
        "headers": [{
          "name": "server",
          "value": "overridden server"
        }]
      }
    ]`;
        const actualHeaders = [{ name: 'server', value: 'overridden server' }];
        const originalHeaders = [{ name: 'server', value: 'original server' }];
        const { component, spy } = await setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders);
        assert.isNotNull(component.shadowRoot);
        const addHeaderButton = component.shadowRoot.querySelector('.add-header-button');
        assert.instanceOf(addHeaderButton, HTMLElement);
        addHeaderButton.click();
        await coordinator.done();
        assert.strictEqual(spy.callCount, 1);
        await editHeaderRow(component, 1, "HeaderName" /* HeaderAttribute.HeaderName */, 'valid');
        assert.strictEqual(spy.callCount, 2);
        await editHeaderRow(component, 1, "HeaderName" /* HeaderAttribute.HeaderName */, 'in:valid');
        assert.strictEqual(spy.callCount, 2);
    });
    it('can remove a newly added header', async () => {
        const actualHeaders = [
            { name: 'server', value: 'original server' },
        ];
        const { component, spy } = await setupHeaderEditing('[]', actualHeaders, actualHeaders);
        assert.isNotNull(component.shadowRoot);
        const addHeaderButton = component.shadowRoot.querySelector('.add-header-button');
        assert.instanceOf(addHeaderButton, HTMLElement);
        addHeaderButton.click();
        await coordinator.done();
        const expected = [{
                applyTo: 'index.html',
                headers: [
                    {
                        name: 'header-name',
                        value: 'header value',
                    },
                ],
            }];
        assert.isTrue(spy.getCall(-1).calledWith(JSON.stringify(expected, null, 2)));
        let rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
        assert.strictEqual(rows.length, 2);
        checkHeaderSectionRow(rows[0], 'server:', 'original server', false, false, true);
        checkHeaderSectionRow(rows[1], 'header-name:', 'header value', true, true, true);
        spy.resetHistory();
        await removeHeaderRow(component, 1);
        assert.strictEqual(spy.callCount, 1);
        assert.isTrue(spy.calledOnceWith(JSON.stringify([], null, 2)));
        rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
        assert.strictEqual(rows.length, 2);
        checkHeaderSectionRow(rows[0], 'server:', 'original server', false, false, true);
        checkHeaderSectionRow(rows[1], 'header-name:', 'header value', true, false, false, false, true);
    });
    it('renders headers as (not) editable depending on overall overrides setting', async () => {
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/index.html', '', null, null, null);
        request.responseHeaders = [{ name: 'server', value: 'overridden server' }];
        request.originalResponseHeaders = [{ name: 'server', value: 'original server' }];
        const { component } = await setupHeaderEditingWithRequest('[]', request);
        assert.isNotNull(component.shadowRoot);
        const addHeaderButton = component.shadowRoot.querySelector('.add-header-button');
        assert.instanceOf(addHeaderButton, HTMLElement);
        addHeaderButton.click();
        await coordinator.done();
        let rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
        assert.strictEqual(rows.length, 2);
        checkHeaderSectionRow(rows[0], 'server:', 'overridden server', true, false, true);
        checkHeaderSectionRow(rows[1], 'header-name:', 'header value', true, true, true);
        component.remove();
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').set(false);
        const component2 = await renderResponseHeaderSection(request);
        assert.isNotNull(component2.shadowRoot);
        rows = component2.shadowRoot.querySelectorAll('devtools-header-section-row');
        assert.strictEqual(rows.length, 2);
        checkHeaderSectionRow(rows[0], 'server:', 'overridden server', true, false, false);
        checkHeaderSectionRow(rows[1], 'header-name:', 'header value', true, false, false);
        component2.remove();
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').set(true);
        const component3 = await renderResponseHeaderSection(request);
        assert.isNotNull(component3.shadowRoot);
        rows = component3.shadowRoot.querySelectorAll('devtools-header-section-row');
        assert.strictEqual(rows.length, 2);
        checkHeaderSectionRow(rows[0], 'server:', 'overridden server', true, false, true);
        checkHeaderSectionRow(rows[1], 'header-name:', 'header value', true, true, true);
    });
    it('can show the "edit header" button', async () => {
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.foo.com/index.html', '', null, null, null);
        request.responseHeaders = [{ name: 'foo', value: 'bar' }];
        request.originalResponseHeaders = [{ name: 'foo', value: 'bar' }];
        const { component } = await setupHeaderEditingWithRequest('[]', request);
        assert.isNotNull(component.shadowRoot);
        const rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
        assert.strictEqual(rows.length, 1);
        assert.isNotNull(rows[0].shadowRoot);
        assert.isNotNull(rows[0].shadowRoot.querySelector('.enable-editing'));
    });
    it('does not show the "edit header" button for requests with a forbidden URL', async () => {
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'chrome://terms/', '', null, null, null);
        request.responseHeaders = [{ name: 'foo', value: 'bar' }];
        request.originalResponseHeaders = [{ name: 'foo', value: 'bar' }];
        const { component } = await setupHeaderEditingWithRequest('[]', request);
        assert.isNotNull(component.shadowRoot);
        const rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
        assert.strictEqual(rows.length, 1);
        assert.isNotNull(rows[0].shadowRoot);
        assert.isNull(rows[0].shadowRoot.querySelector('.enable-editing'));
    });
    it('can edit multiple headers', async () => {
        const headerOverridesFileContent = `[
      {
        "applyTo": "index.html",
        "headers": [{
          "name": "server",
          "value": "overridden server"
        }]
      }
    ]`;
        const actualHeaders = [
            { name: 'cache-control', value: 'max-age=600' },
            { name: 'server', value: 'overridden server' },
        ];
        const originalHeaders = [
            { name: 'cache-control', value: 'max-age=600' },
            { name: 'server', value: 'original server' },
        ];
        const { component, spy } = await setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders);
        await editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */, 'edited cache-control');
        await editHeaderRow(component, 1, "HeaderValue" /* HeaderAttribute.HeaderValue */, 'edited server');
        const expected = [{
                applyTo: 'index.html',
                headers: [
                    {
                        name: 'cache-control',
                        value: 'edited cache-control',
                    },
                    {
                        name: 'server',
                        value: 'edited server',
                    },
                ],
            }];
        assert.isTrue(spy.lastCall.calledWith(JSON.stringify(expected, null, 2)));
    });
    it('can edit multiple headers which have the same name', async () => {
        const headerOverridesFileContent = '[]';
        const actualHeaders = [
            { name: 'link', value: 'first value' },
            { name: 'link', value: 'second value' },
        ];
        const originalHeaders = [
            { name: 'link', value: 'first value' },
            { name: 'link', value: 'second value' },
        ];
        const { component, spy } = await setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders);
        await editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */, 'third value');
        let expected = [{
                applyTo: 'index.html',
                headers: [
                    {
                        name: 'link',
                        value: 'third value',
                    },
                ],
            }];
        assert.isTrue(spy.lastCall.calledWith(JSON.stringify(expected, null, 2)));
        await editHeaderRow(component, 1, "HeaderValue" /* HeaderAttribute.HeaderValue */, 'fourth value');
        expected = [{
                applyTo: 'index.html',
                headers: [
                    {
                        name: 'link',
                        value: 'third value',
                    },
                    {
                        name: 'link',
                        value: 'fourth value',
                    },
                ],
            }];
        assert.isTrue(spy.lastCall.calledWith(JSON.stringify(expected, null, 2)));
    });
    it('can edit multiple headers which have the same name and which are already overridden', async () => {
        const headerOverridesFileContent = `[
      {
        "applyTo": "index.html",
        "headers": [
          {
            "name": "link",
            "value": "third value"
          },
          {
            "name": "link",
            "value": "fourth value"
          }
        ]
      }
    ]`;
        const actualHeaders = [
            { name: 'link', value: 'third value' },
            { name: 'link', value: 'fourth value' },
        ];
        const originalHeaders = [
            { name: 'link', value: 'first value' },
            { name: 'link', value: 'second value' },
        ];
        const { component, spy } = await setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders);
        await editHeaderRow(component, 1, "HeaderValue" /* HeaderAttribute.HeaderValue */, 'fifth value');
        let expected = [{
                applyTo: 'index.html',
                headers: [
                    {
                        name: 'link',
                        value: 'third value',
                    },
                    {
                        name: 'link',
                        value: 'fifth value',
                    },
                ],
            }];
        assert.isTrue(spy.lastCall.calledWith(JSON.stringify(expected, null, 2)));
        await editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */, 'sixth value');
        expected = [{
                applyTo: 'index.html',
                headers: [
                    {
                        name: 'link',
                        value: 'sixth value',
                    },
                    {
                        name: 'link',
                        value: 'fifth value',
                    },
                ],
            }];
        assert.isTrue(spy.lastCall.calledWith(JSON.stringify(expected, null, 2)));
    });
    it('persists edits to header overrides and resurfaces them upon component (re-)creation', async () => {
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/index.html', '', null, null, null);
        request.responseHeaders = [{ name: 'server', value: 'overridden server' }];
        request.originalResponseHeaders = [{ name: 'server', value: 'original server' }];
        const headerOverridesFileContent = `[
      {
        "applyTo": "index.html",
        "headers": [{
          "name": "server",
          "value": "overridden server"
        }]
      }
    ]`;
        const { component, spy } = await setupHeaderEditingWithRequest(headerOverridesFileContent, request);
        assert.isNotNull(component.shadowRoot);
        const addHeaderButton = component.shadowRoot.querySelector('.add-header-button');
        assert.instanceOf(addHeaderButton, HTMLElement);
        addHeaderButton.click();
        await coordinator.done();
        await editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */, 'unit test');
        await editHeaderRow(component, 1, "HeaderName" /* HeaderAttribute.HeaderName */, 'foo');
        await editHeaderRow(component, 1, "HeaderValue" /* HeaderAttribute.HeaderValue */, 'bar');
        const expected = [{
                applyTo: 'index.html',
                headers: [
                    {
                        name: 'server',
                        value: 'unit test',
                    },
                    {
                        name: 'foo',
                        value: 'bar',
                    },
                ],
            }];
        assert.isTrue(spy.getCall(-1).calledWith(JSON.stringify(expected, null, 2)));
        component.remove();
        const component2 = await renderResponseHeaderSection(request);
        assert.isNotNull(component2.shadowRoot);
        const rows = component2.shadowRoot.querySelectorAll('devtools-header-section-row');
        assert.strictEqual(rows.length, 2);
        checkHeaderSectionRow(rows[0], 'server:', 'unit test', true, false, true);
        checkHeaderSectionRow(rows[1], 'foo:', 'bar', true, true, true);
    });
    it('focuses on newly added header rows on initial render', async () => {
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/index.html', '', null, null, null);
        request.responseHeaders = [{ name: 'server', value: 'overridden server' }];
        request.originalResponseHeaders = [{ name: 'server', value: 'original server' }];
        const headerOverridesFileContent = `[
      {
        "applyTo": "index.html",
        "headers": [{
          "name": "server",
          "value": "overridden server"
        }]
      }
    ]`;
        const { component } = await setupHeaderEditingWithRequest(headerOverridesFileContent, request);
        assert.isNotNull(component.shadowRoot);
        const addHeaderButton = component.shadowRoot.querySelector('.add-header-button');
        assert.instanceOf(addHeaderButton, HTMLElement);
        addHeaderButton.click();
        await coordinator.done();
        assert.isFalse(isRowFocused(component, 0));
        assert.isTrue(isRowFocused(component, 1));
        component.remove();
        const component2 = await renderResponseHeaderSection(request);
        assert.isNotNull(component2.shadowRoot);
        assert.isFalse(isRowFocused(component2, 0));
        assert.isFalse(isRowFocused(component2, 1));
    });
    it('can handle removal of ".headers" file', async () => {
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/index.html', '', null, null, null);
        request.responseHeaders = [{ name: 'server', value: 'overridden server' }];
        request.originalResponseHeaders = [{ name: 'server', value: 'original server' }];
        const headerOverridesFileContent = `[
      {
        "applyTo": "index.html",
        "headers": [{
          "name": "server",
          "value": "overridden server"
        }]
      }
    ]`;
        const { component } = await setupHeaderEditingWithRequest(headerOverridesFileContent, request);
        assert.isNotNull(component.shadowRoot);
        let addHeaderButton = component.shadowRoot.querySelector('.add-header-button');
        assert.instanceOf(addHeaderButton, HTMLElement);
        addHeaderButton.click();
        await coordinator.done();
        await editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */, 'unit test');
        sinon.stub(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.WorkspaceImpl.instance(), 'uiSourceCodeForURL').callsFake(() => null);
        component.data = { request };
        await coordinator.done();
        const rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
        assert.strictEqual(rows.length, 1);
        checkHeaderSectionRow(rows[0], 'server:', 'overridden server', true, false, false);
        addHeaderButton = component.shadowRoot.querySelector('.add-header-button');
        assert.isNull(addHeaderButton);
    });
    it('handles rendering and editing \'set-cookie\' headers', async () => {
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/index.html', '', null, null, null);
        request.responseHeaders = [
            { name: 'Cache-Control', value: 'max-age=600' },
            { name: 'Z-Header', value: 'zzz' },
        ];
        request.originalResponseHeaders = [
            { name: 'Set-Cookie', value: 'bar=original' },
            { name: 'Set-Cookie', value: 'foo=original' },
            { name: 'Set-Cookie', value: 'malformed' },
            { name: 'Cache-Control', value: 'max-age=600' },
            { name: 'Z-header', value: 'zzz' },
        ];
        request.setCookieHeaders = [
            { name: 'Set-Cookie', value: 'bar=original' },
            { name: 'Set-Cookie', value: 'foo=overridden' },
            { name: 'Set-Cookie', value: 'user=12345' },
            { name: 'Set-Cookie', value: 'malformed' },
            { name: 'Set-Cookie', value: 'wrong format' },
        ];
        const headerOverridesFileContent = `[
      {
        "applyTo": "index.html",
        "headers": [
          {
            "name": "set-cookie",
            "value": "foo=overridden"
          },
          {
            "name": "set-cookie",
            "value": "user=12345"
          },
          {
            "name": "set-cookie",
            "value": "wrong format"
          }
        ]
      }
    ]`;
        const { component, spy } = await setupHeaderEditingWithRequest(headerOverridesFileContent, request);
        assert.isNotNull(component.shadowRoot);
        const rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
        assert.strictEqual(rows.length, 7);
        assert.isNotNull(rows[0].shadowRoot);
        checkHeaderSectionRow(rows[0], 'cache-control:', 'max-age=600', false, false, true);
        assert.isNotNull(rows[1].shadowRoot);
        checkHeaderSectionRow(rows[1], 'set-cookie:', 'bar=original', false, false, true);
        assert.isNotNull(rows[2].shadowRoot);
        checkHeaderSectionRow(rows[2], 'set-cookie:', 'foo=overridden', true, false, true);
        assert.isNotNull(rows[3].shadowRoot);
        checkHeaderSectionRow(rows[3], 'set-cookie:', 'user=12345', true, false, true);
        assert.isNotNull(rows[4].shadowRoot);
        checkHeaderSectionRow(rows[4], 'set-cookie:', 'malformed', false, false, true);
        assert.isNotNull(rows[5].shadowRoot);
        checkHeaderSectionRow(rows[5], 'set-cookie:', 'wrong format', true, false, true);
        assert.isNotNull(rows[6].shadowRoot);
        checkHeaderSectionRow(rows[6], 'z-header:', 'zzz', false, false, true);
        await editHeaderRow(component, 2, "HeaderValue" /* HeaderAttribute.HeaderValue */, 'foo=edited');
        const expected = [{
                applyTo: 'index.html',
                headers: [
                    {
                        name: 'set-cookie',
                        value: 'user=12345',
                    },
                    {
                        name: 'set-cookie',
                        value: 'wrong format',
                    },
                    {
                        name: 'set-cookie',
                        value: 'foo=edited',
                    },
                ],
            }];
        assert.isTrue(spy.getCall(-1).calledWith(JSON.stringify(expected, null, 2)));
        await editHeaderRow(component, 1, "HeaderValue" /* HeaderAttribute.HeaderValue */, 'bar=edited');
        expected[0].headers.push({ name: 'set-cookie', value: 'bar=edited' });
        assert.isTrue(spy.getCall(-1).calledWith(JSON.stringify(expected, null, 2)));
    });
    it('ignores capitalisation of the `set-cookie` header when marking as overridden', async () => {
        const request = {
            sortedResponseHeaders: [
                { name: 'set-cookie', value: 'user=123' },
            ],
            blockedResponseCookies: () => [],
            wasBlocked: () => false,
            originalResponseHeaders: [
                { name: 'Set-Cookie', value: 'user=123' },
            ],
            setCookieHeaders: [],
            url: () => 'https://www.example.com/',
            getAssociatedData: () => null,
            setAssociatedData: () => { },
        };
        const component = await renderResponseHeaderSection(request);
        assert.isNotNull(component.shadowRoot);
        const rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
        assert.isNotNull(rows[0].shadowRoot);
        assert.strictEqual(rows[0].shadowRoot.querySelector('.header-name')?.textContent?.trim(), 'set-cookie:');
        assert.strictEqual(rows[0].shadowRoot.querySelector('.header-value')?.textContent?.trim(), 'user=123');
        assert.strictEqual(rows[0].shadowRoot.querySelector('.row')?.classList.contains('header-overridden'), false);
    });
    it('does not mark unset headers (which cause the request to be blocked) as overridden', async () => {
        const request = {
            sortedResponseHeaders: [
                { name: 'abc', value: 'def' },
            ],
            blockedResponseCookies: () => [],
            wasBlocked: () => true,
            blockedReason: () => "coep-frame-resource-needs-coep-header" /* Protocol.Network.BlockedReason.CoepFrameResourceNeedsCoepHeader */,
            originalResponseHeaders: [
                { name: 'abc', value: 'def' },
            ],
            setCookieHeaders: [],
            url: () => 'https://www.example.com/',
            getAssociatedData: () => null,
            setAssociatedData: () => { },
        };
        const component = await renderResponseHeaderSection(request);
        assert.isNotNull(component.shadowRoot);
        const rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
        const checkRow = (shadowRoot, headerName, headerValue, isOverride) => {
            assert.deepEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getCleanTextContentFromElements)(shadowRoot, '.header-name'), [headerName]);
            assert.strictEqual(shadowRoot.querySelector('.header-value')?.textContent?.trim(), headerValue);
            assert.strictEqual(shadowRoot.querySelector('.row')?.classList.contains('header-overridden'), isOverride);
        };
        assert.isNotNull(rows[0].shadowRoot);
        checkRow(rows[0].shadowRoot, 'abc:', 'def', false);
        assert.isNotNull(rows[1].shadowRoot);
        checkRow(rows[1].shadowRoot, 'not-setcross-origin-embedder-policy:', '', false);
    });
});
//# sourceMappingURL=ResponseHeaderSection.test.js.map

/***/ }),

/***/ "./panels/network/components/WebBundleInfoView.css.js":
/*!************************************************************!*\
  !*** ./panels/network/components/WebBundleInfoView.css.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
:host {
  --icon-padding: 4px;
}

.header {
  display: flex;
  font-weight: bold;
  padding: calc(2 * var(--icon-padding)) var(--icon-padding);
  line-height: 20px;
}

.icon {
  margin: 0 var(--icon-padding);
}

/*# sourceURL=WebBundleInfoView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/network/components/WebBundleInfoView.js":
/*!********************************************************!*\
  !*** ./panels/network/components/WebBundleInfoView.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebBundleInfoView: () => (/* binding */ WebBundleInfoView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../panels/utils/utils.js */ "./panels/utils/utils.js");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _WebBundleInfoView_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WebBundleInfoView.css.js */ "./panels/network/components/WebBundleInfoView.css.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









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
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.literal `devtools-web-bundle-info`;
    #shadow = this.attachShadow({ mode: 'open' });
    #webBundleInfo;
    #webBundleName;
    constructor(request) {
        super();
        const webBundleInfo = request.webBundleInfo();
        if (!webBundleInfo) {
            throw new Error('Trying to render a Web Bundle info without providing data');
        }
        this.#webBundleInfo = webBundleInfo;
        this.#webBundleName = request.parsedURL.lastPathComponent;
        this.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('webbundle').track({ resize: true })}`);
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_WebBundleInfoView_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]];
    }
    async render() {
        const rows = this.#webBundleInfo.resourceUrls?.map(url => {
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
        <span>${this.#webBundleName}</span>
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
      </div>`, this.#shadow, { host: this });
    }
}
customElements.define('devtools-web-bundle-info', WebBundleInfoView);
//# sourceMappingURL=WebBundleInfoView.js.map

/***/ }),

/***/ "./panels/network/components/components.js":
/*!*************************************************!*\
  !*** ./panels/network/components/components.js ***!
  \*************************************************/
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
/* harmony import */ var _EditableSpan_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableSpan.js */ "./panels/network/components/EditableSpan.js");
/* harmony import */ var _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderSectionRow.js */ "./panels/network/components/HeaderSectionRow.js");
/* harmony import */ var _RequestHeaderSection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RequestHeaderSection.js */ "./panels/network/components/RequestHeaderSection.js");
/* harmony import */ var _RequestHeadersView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RequestHeadersView.js */ "./panels/network/components/RequestHeadersView.js");
/* harmony import */ var _RequestTrustTokensView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RequestTrustTokensView.js */ "./panels/network/components/RequestTrustTokensView.js");
/* harmony import */ var _ResponseHeaderSection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ResponseHeaderSection.js */ "./panels/network/components/ResponseHeaderSection.js");
/* harmony import */ var _WebBundleInfoView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebBundleInfoView.js */ "./panels/network/components/WebBundleInfoView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./testing/DOMHelpers.js":
/*!*******************************!*\
  !*** ./testing/DOMHelpers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertElements: () => (/* binding */ assertElements),
/* harmony export */   assertNodeTextContent: () => (/* binding */ assertNodeTextContent),
/* harmony export */   dispatchClickEvent: () => (/* binding */ dispatchClickEvent),
/* harmony export */   dispatchCopyEvent: () => (/* binding */ dispatchCopyEvent),
/* harmony export */   dispatchFocusEvent: () => (/* binding */ dispatchFocusEvent),
/* harmony export */   dispatchFocusOutEvent: () => (/* binding */ dispatchFocusOutEvent),
/* harmony export */   dispatchInputEvent: () => (/* binding */ dispatchInputEvent),
/* harmony export */   dispatchKeyDownEvent: () => (/* binding */ dispatchKeyDownEvent),
/* harmony export */   dispatchMouseLeaveEvent: () => (/* binding */ dispatchMouseLeaveEvent),
/* harmony export */   dispatchMouseMoveEvent: () => (/* binding */ dispatchMouseMoveEvent),
/* harmony export */   dispatchMouseOutEvent: () => (/* binding */ dispatchMouseOutEvent),
/* harmony export */   dispatchMouseOverEvent: () => (/* binding */ dispatchMouseOverEvent),
/* harmony export */   dispatchMouseUpEvent: () => (/* binding */ dispatchMouseUpEvent),
/* harmony export */   dispatchPasteEvent: () => (/* binding */ dispatchPasteEvent),
/* harmony export */   doubleRaf: () => (/* binding */ doubleRaf),
/* harmony export */   getCleanTextContentFromElements: () => (/* binding */ getCleanTextContentFromElements),
/* harmony export */   getElementWithinComponent: () => (/* binding */ getElementWithinComponent),
/* harmony export */   getElementsWithinComponent: () => (/* binding */ getElementsWithinComponent),
/* harmony export */   getEventPromise: () => (/* binding */ getEventPromise),
/* harmony export */   querySelectorErrorOnMissing: () => (/* binding */ querySelectorErrorOnMissing),
/* harmony export */   raf: () => (/* binding */ raf),
/* harmony export */   renderElementIntoDOM: () => (/* binding */ renderElementIntoDOM),
/* harmony export */   resetTestDOM: () => (/* binding */ resetTestDOM),
/* harmony export */   stripLitHtmlCommentNodes: () => (/* binding */ stripLitHtmlCommentNodes),
/* harmony export */   waitForScrollLeft: () => (/* binding */ waitForScrollLeft)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const TEST_CONTAINER_ID = '__devtools-test-container-id';
/**
 * Renders a given element into the DOM. By default it will error if it finds an element already rendered but this can be controlled via the options.
 **/
const renderElementIntoDOM = (element, renderOptions = {}) => {
    const container = document.getElementById(TEST_CONTAINER_ID);
    if (!container) {
        throw new Error(`renderElementIntoDOM expects to find ${TEST_CONTAINER_ID}`);
    }
    const allowMultipleChildren = Boolean(renderOptions.allowMultipleChildren);
    if (container.childNodes.length !== 0 && !allowMultipleChildren) {
        throw new Error(`renderElementIntoDOM expects the container to be empty ${container.innerHTML}`);
    }
    container.appendChild(element);
    return element;
};
function removeChildren(node) {
    while (true) {
        const { firstChild } = node;
        if (firstChild === null) {
            break;
        }
        const widget = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Widget.Widget.get(firstChild);
        if (widget) {
            // Child is a widget, so we have to use the Widget system to remove it from the DOM.
            widget.detach();
            continue;
        }
        // For regular children, recursively remove their children, since some of them
        // might be widgets, and only afterwards remove the child from the current node.
        removeChildren(firstChild);
        node.removeChild(firstChild);
    }
}
/**
 * Completely cleans out the test DOM to ensure it's empty for the next test run.
 * This is run automatically between tests - you should not be manually calling this yourself.
 **/
const resetTestDOM = () => {
    const previousContainer = document.getElementById(TEST_CONTAINER_ID);
    if (previousContainer) {
        removeChildren(previousContainer);
        previousContainer.remove();
    }
    const newContainer = document.createElement('div');
    newContainer.id = TEST_CONTAINER_ID;
    document.body.appendChild(newContainer);
};
/**
 * Asserts that all emenents of `nodeList` are at least of type `T`.
 */
function assertElements(nodeList, elementClass) {
    nodeList.forEach(e => assert.instanceOf(e, elementClass));
}
function getElementWithinComponent(component, selector, elementClass) {
    assert.isNotNull(component.shadowRoot);
    const element = component.shadowRoot.querySelector(selector);
    assert.instanceOf(element, elementClass);
    return element;
}
function getElementsWithinComponent(component, selector, elementClass) {
    assert.isNotNull(component.shadowRoot);
    const elements = component.shadowRoot.querySelectorAll(selector);
    assertElements(elements, elementClass);
    return elements;
}
/* Waits for the given element to have a scrollLeft property of at least desiredScrollLeft */
function waitForScrollLeft(element, desiredScrollLeft) {
    let lastScrollLeft = -1;
    let scrollLeftTimeout = null;
    const timeBetweenPolls = 50;
    return new Promise(resolve => {
        const pollForScrollLeft = () => {
            const newScrollLeft = element.scrollLeft;
            // If we get the same scroll value twice in a row, and it's at least what
            // we want, we're done!
            if (lastScrollLeft === newScrollLeft && newScrollLeft >= desiredScrollLeft) {
                if (scrollLeftTimeout) {
                    window.clearTimeout(scrollLeftTimeout);
                }
                resolve();
                return;
            }
            lastScrollLeft = newScrollLeft;
            scrollLeftTimeout = window.setTimeout(pollForScrollLeft, timeBetweenPolls);
        };
        window.setTimeout(pollForScrollLeft, timeBetweenPolls);
    });
}
/**
 * Dispatches a mouse click event.
 */
function dispatchClickEvent(element, options = {}) {
    const clickEvent = new MouseEvent('click', options);
    element.dispatchEvent(clickEvent);
}
function dispatchMouseUpEvent(element, options = {}) {
    const clickEvent = new MouseEvent('mouseup', options);
    element.dispatchEvent(clickEvent);
}
function dispatchFocusEvent(element, options = {}) {
    const focusEvent = new FocusEvent('focus', options);
    element.dispatchEvent(focusEvent);
}
function dispatchFocusOutEvent(element, options = {}) {
    const focusEvent = new FocusEvent('focusout', options);
    element.dispatchEvent(focusEvent);
}
/**
 * Dispatches a keydown event. Errors if the event was not dispatched successfully.
 */
function dispatchKeyDownEvent(element, options = {}) {
    const clickEvent = new KeyboardEvent('keydown', options);
    const success = element.dispatchEvent(clickEvent);
    if (!success) {
        assert.fail('Failed to trigger keydown event successfully.');
    }
}
function dispatchInputEvent(element, options = {}) {
    const inputEvent = new InputEvent('input', options);
    element.dispatchEvent(inputEvent);
}
/**
 * Dispatches a mouse over event.
 */
function dispatchMouseOverEvent(element, options = {}) {
    const moveEvent = new MouseEvent('mouseover', options);
    element.dispatchEvent(moveEvent);
}
/**
 * Dispatches a mouse out event.
 */
function dispatchMouseOutEvent(element, options = {}) {
    const moveEvent = new MouseEvent('mouseout', options);
    element.dispatchEvent(moveEvent);
}
/**
 * Dispatches a mouse move event.
 */
function dispatchMouseMoveEvent(element, options = {}) {
    const moveEvent = new MouseEvent('mousemove', options);
    element.dispatchEvent(moveEvent);
}
/**
 * Dispatches a mouse leave event.
 */
function dispatchMouseLeaveEvent(element, options = {}) {
    const leaveEvent = new MouseEvent('mouseleave', options);
    element.dispatchEvent(leaveEvent);
}
/**
 * Dispatches a clipboard copy event.
 */
function dispatchCopyEvent(element, options = {}) {
    const copyEvent = new ClipboardEvent('copy', options);
    element.dispatchEvent(copyEvent);
}
/**
 * Dispatches a clipboard paste event.
 */
function dispatchPasteEvent(element, options = {}) {
    const pasteEvent = new ClipboardEvent('paste', options);
    element.dispatchEvent(pasteEvent);
}
/**
 * Listens to an event of an element and returns a Promise that resolves to the
 * specified event type.
 */
function getEventPromise(element, eventName) {
    return new Promise(resolve => {
        element.addEventListener(eventName, (event) => {
            resolve(event);
        }, { once: true });
    });
}
async function doubleRaf() {
    return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
}
async function raf() {
    return new Promise(resolve => requestAnimationFrame(resolve));
}
/**
 * It's useful to use innerHTML in the tests to have full confidence in the
 * renderer output, but LitHtml uses comment nodes to split dynamic from
 * static parts of a template, and we don't want our tests full of noise
 * from those.
 */
function stripLitHtmlCommentNodes(text) {
    /**
     * LitHtml comments take the form of:
     * <!--?lit$1234?--> or:
     * <!--?-->
     * And this regex matches both.
     */
    return text.replaceAll(/<!--\?(lit\$[0-9]+\$)?-->/g, '');
}
/**
 * Returns an array of textContents.
 * Multiple consecutive newLine and space characters are removed.
 */
function getCleanTextContentFromElements(el, selector) {
    const elements = Array.from(el.querySelectorAll(selector));
    return elements.map(element => {
        return element.textContent ? element.textContent.trim().replace(/[ \n]{2,}/g, '') : '';
    });
}
function assertNodeTextContent(component, expectedContent) {
    assert.isNotNull(component.shadowRoot);
    const content = Array.from(component.shadowRoot.querySelectorAll('span')).map(span => span.textContent).join('');
    assert.strictEqual(content, expectedContent);
}
function querySelectorErrorOnMissing(parent, selector) {
    const elem = parent.querySelector(selector);
    if (!elem) {
        throw new Error(`Expected element with selector ${selector} not found.`);
    }
    return elem;
}
//# sourceMappingURL=DOMHelpers.js.map

/***/ }),

/***/ "./testing/OverridesHelpers.js":
/*!*************************************!*\
  !*** ./testing/OverridesHelpers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWorkspaceProject: () => (/* binding */ createWorkspaceProject),
/* harmony export */   setUpEnvironment: () => (/* binding */ setUpEnvironment)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/breakpoints/breakpoints.js */ "./models/breakpoints/breakpoints.js");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./models/workspace/workspace.js");
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
//# sourceMappingURL=OverridesHelpers.js.map

/***/ }),

/***/ "./testing/UserMetricsHelpers.js":
/*!***************************************!*\
  !*** ./testing/UserMetricsHelpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   recordedMetricsContain: () => (/* binding */ recordedMetricsContain),
/* harmony export */   resetRecordedMetrics: () => (/* binding */ resetRecordedMetrics)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/host/host.js */ "./core/host/host.js");
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
//# sourceMappingURL=UserMetricsHelpers.js.map

/***/ }),

/***/ "./ui/components/report_view/ReportView.js":
/*!*************************************************!*\
  !*** ./ui/components/report_view/ReportView.js ***!
  \*************************************************/
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
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _report_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.css.js */ "./ui/components/report_view/report.css.js");
/* harmony import */ var _reportKey_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reportKey.css.js */ "./ui/components/report_view/reportKey.css.js");
/* harmony import */ var _reportSection_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportSection.css.js */ "./ui/components/report_view/reportSection.css.js");
/* harmony import */ var _reportSectionDivider_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportSectionDivider.css.js */ "./ui/components/report_view/reportSectionDivider.css.js");
/* harmony import */ var _reportSectionHeader_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reportSectionHeader.css.js */ "./ui/components/report_view/reportSectionHeader.css.js");
/* harmony import */ var _reportValue_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportValue.css.js */ "./ui/components/report_view/reportValue.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







class Report extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report`;
    #shadow = this.attachShadow({ mode: 'open' });
    #reportTitle = '';
    set data({ reportTitle }) {
        this.#reportTitle = reportTitle;
        this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_report_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="content">
        ${this.#reportTitle ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `<div class="report-title">${this.#reportTitle}</div>` : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing}
        <slot></slot>
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportSection extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportSection_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section">
        <slot></slot>
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportSectionHeader extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section-header`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportSectionHeader_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-header">
        <slot></slot>
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportSectionDivider extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-divider`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportSectionDivider_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-divider">
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportKey extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-key`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportKey_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="key"><slot></slot></div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportValue extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-value`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportValue_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="value"><slot></slot></div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-report', Report);
customElements.define('devtools-report-section', ReportSection);
customElements.define('devtools-report-section-header', ReportSectionHeader);
customElements.define('devtools-report-key', ReportKey);
customElements.define('devtools-report-value', ReportValue);
customElements.define('devtools-report-divider', ReportSectionDivider);
//# sourceMappingURL=ReportView.js.map

/***/ }),

/***/ "./ui/components/report_view/report.css.js":
/*!*************************************************!*\
  !*** ./ui/components/report_view/report.css.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  display: block;
}

.content {
  background-color: var(--sys-color-cdt-base-container);
  display: grid;
  grid-template-columns: min-content 1fr;
  user-select: text;
}

.report-title {
  padding: 12px 24px;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid var(--sys-color-divider);
  color: var(--sys-color-on-surface);
  background-color: var(--sys-color-cdt-base-container);
  grid-column-start: span 2;
}

/*# sourceURL=report.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportKey.css.js":
/*!****************************************************!*\
  !*** ./ui/components/report_view/reportKey.css.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  line-height: 28px;
  margin: 0 0 8px;
}

.key {
  color: var(--sys-color-on-surface-subtle);
  padding: 0 6px;
  text-align: right;
  white-space: pre;
  user-select: none;
}

/*# sourceURL=reportKey.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportSection.css.js":
/*!********************************************************!*\
  !*** ./ui/components/report_view/reportSection.css.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  grid-column-start: span 2;
  min-width: min-content;
}

.section {
  padding: 12px;
  margin-left: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: auto;
  overflow-wrap: break-word;
  overflow: hidden;
}

/*# sourceURL=reportSection.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportSectionDivider.css.js":
/*!***************************************************************!*\
  !*** ./ui/components/report_view/reportSectionDivider.css.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  grid-column-start: span 2;
}

.section-divider {
  border-bottom: 1px solid var(--sys-color-divider);
}

/*# sourceURL=reportSectionDivider.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportSectionHeader.css.js":
/*!**************************************************************!*\
  !*** ./ui/components/report_view/reportSectionHeader.css.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  grid-column-start: span 2;
}

.section-header {
  padding: 12px;
  margin-left: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: bold;
  color: var(--sys-color-on-surface);
  user-select: none;
}

/*# sourceURL=reportSectionHeader.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportValue.css.js":
/*!******************************************************!*\
  !*** ./ui/components/report_view/reportValue.css.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  line-height: 28px;
  margin: 0 0 8px;
  min-width: 150px;
}

.value {
  color: var(--sys-color-on-surface);
  margin-inline-start: 0;
  padding: 0 6px;
  overflow-wrap: break-word;
}

/*# sourceURL=reportValue.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/report_view.js":
/*!**************************************************!*\
  !*** ./ui/components/report_view/report_view.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportView: () => (/* reexport module object */ _ReportView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ReportView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportView.js */ "./ui/components/report_view/ReportView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=report_view.js.map

/***/ })

}]);