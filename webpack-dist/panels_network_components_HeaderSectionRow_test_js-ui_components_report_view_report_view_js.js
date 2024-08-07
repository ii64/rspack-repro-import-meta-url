"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_network_components_HeaderSectionRow_test_js-ui_components_report_view_report_view_js"],{

/***/ "./panels/network/components/HeaderSectionRow.test.js":
/*!************************************************************!*\
  !*** ./panels/network/components/HeaderSectionRow.test.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components.js */ "./panels/network/components/components.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__.RenderCoordinator.RenderCoordinator.instance();
async function renderHeaderSectionRow(header) {
    const component = new _components_js__WEBPACK_IMPORTED_MODULE_5__.HeaderSectionRow.HeaderSectionRow();
    const scrollIntoViewSpy = sinon.spy(component, 'scrollIntoView');
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
    assert.isTrue(scrollIntoViewSpy.notCalled);
    component.data = { header };
    await coordinator.done();
    assert.isNotNull(component.shadowRoot);
    let nameEditable = null;
    const nameEditableComponent = component.shadowRoot.querySelector('.header-name devtools-editable-span');
    if (nameEditableComponent) {
        assert.instanceOf(nameEditableComponent, HTMLElement);
        assert.isNotNull(nameEditableComponent.shadowRoot);
        nameEditable = nameEditableComponent.shadowRoot.querySelector('.editable');
        assert.instanceOf(nameEditable, HTMLSpanElement);
    }
    let valueEditable = null;
    const valueEditableComponent = component.shadowRoot.querySelector('.header-value devtools-editable-span');
    if (valueEditableComponent) {
        assert.instanceOf(valueEditableComponent, HTMLElement);
        assert.isNotNull(valueEditableComponent.shadowRoot);
        valueEditable = valueEditableComponent.shadowRoot.querySelector('.editable');
        assert.instanceOf(valueEditable, HTMLSpanElement);
    }
    return { component, nameEditable, valueEditable, scrollIntoViewSpy };
}
const hasReloadPrompt = (shadowRoot) => {
    return Boolean(shadowRoot.querySelector('devtools-icon[title="Refresh the page/request for these changes to take effect"]'));
};
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('HeaderSectionRow', () => {
    it('emits UMA event when a header value is being copied', async () => {
        const headerData = {
            name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name'),
            value: 'someHeaderValue',
            valueEditable: 0 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Disabled */,
        };
        const { component, scrollIntoViewSpy } = await renderHeaderSectionRow(headerData);
        assert.isNotNull(component.shadowRoot);
        assert.isTrue(scrollIntoViewSpy.notCalled);
        const spy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics, 'actionTaken');
        const headerValue = component.shadowRoot.querySelector('.header-value');
        assert.instanceOf(headerValue, HTMLElement);
        assert.isTrue(spy.notCalled);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchCopyEvent)(headerValue);
        assert.isTrue(spy.calledWith(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.NetworkPanelCopyValue));
    });
    it('renders detailed reason for blocked requests', async () => {
        const headerData = {
            name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('cross-origin-resource-policy'),
            value: null,
            valueEditable: 0 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Disabled */,
            headerNotSet: true,
            blockedDetails: {
                explanation: () => 'To use this resource from a different origin, the server needs to specify a cross-origin resource policy in the response headers:',
                examples: [
                    {
                        codeSnippet: 'Cross-Origin-Resource-Policy: same-site',
                        comment: () => 'Choose this option if the resource and the document are served from the same site.',
                    },
                    {
                        codeSnippet: 'Cross-Origin-Resource-Policy: cross-origin',
                        comment: () => 'Only choose this option if an arbitrary website including this resource does not impose a security risk.',
                    },
                ],
                link: { url: 'https://web.dev/coop-coep/' },
            },
        };
        const { component } = await renderHeaderSectionRow(headerData);
        assert.isNotNull(component.shadowRoot);
        const headerName = component.shadowRoot.querySelector('.header-name');
        assert.instanceOf(headerName, HTMLDivElement);
        const regex = /^\s*not-set\s*cross-origin-resource-policy:\s*$/;
        assert.isTrue(regex.test(headerName.textContent || ''));
        const headerValue = component.shadowRoot.querySelector('.header-value');
        assert.instanceOf(headerValue, HTMLDivElement);
        assert.strictEqual(headerValue.textContent?.trim(), '');
        assert.strictEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(component.shadowRoot, '.call-to-action')[0], 'To use this resource from a different origin, the server needs to specify a cross-origin ' +
            'resource policy in the response headers:Cross-Origin-Resource-Policy: same-siteChoose ' +
            'this option if the resource and the document are served from the same site.' +
            'Cross-Origin-Resource-Policy: cross-originOnly choose this option if an arbitrary website ' +
            'including this resource does not impose a security risk.Learn more');
    });
    it('displays decoded "x-client-data"-header', async () => {
        const headerData = {
            name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('x-client-data'),
            value: 'CJa2yQEIpLbJAQiTocsB',
            valueEditable: 0 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Disabled */,
        };
        const { component } = await renderHeaderSectionRow(headerData);
        assert.isNotNull(component.shadowRoot);
        const headerName = component.shadowRoot.querySelector('.header-name');
        assert.instanceOf(headerName, HTMLDivElement);
        assert.strictEqual(headerName.textContent?.trim(), 'x-client-data:');
        const headerValue = component.shadowRoot.querySelector('.header-value');
        assert.instanceOf(headerValue, HTMLDivElement);
        assert.isTrue(headerValue.classList.contains('flex-columns'));
        assert.isTrue(((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(component.shadowRoot, '.header-value')[0]).startsWith('CJa2yQEIpLbJAQiTocsB'));
        assert.strictEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(component.shadowRoot, '.header-value code')[0], 'message ClientVariations {// Active Google-visible variation IDs on this client. These are reported for analysis, but do not directly affect any server-side behavior.repeated int32 variation_id = [3300118, 3300132, 3330195];\n}');
    });
    it('displays info about blocked "Set-Cookie"-headers', async () => {
        const headerData = {
            name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('set-cookie'),
            value: 'secure=only; Secure',
            valueEditable: 0 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Disabled */,
            setCookieBlockedReasons: ["SecureOnly" /* Protocol.Network.SetCookieBlockedReason.SecureOnly */, "OverwriteSecure" /* Protocol.Network.SetCookieBlockedReason.OverwriteSecure */],
        };
        const { component } = await renderHeaderSectionRow(headerData);
        assert.isNotNull(component.shadowRoot);
        const headerName = component.shadowRoot.querySelector('.header-name');
        assert.instanceOf(headerName, HTMLDivElement);
        assert.strictEqual(headerName.textContent?.trim(), 'set-cookie:');
        const headerValue = component.shadowRoot.querySelector('.header-value');
        assert.instanceOf(headerValue, HTMLDivElement);
        assert.strictEqual(headerValue.textContent?.trim(), 'secure=only; Secure');
        const icon = component.shadowRoot.querySelector('devtools-icon');
        assert.instanceOf(icon, HTMLElement);
        assert.strictEqual(icon.title, 'This attempt to set a cookie via a Set-Cookie header was blocked because it had the ' +
            '"Secure" attribute but was not received over a secure connection.\nThis attempt to ' +
            'set a cookie via a Set-Cookie header was blocked because it was not sent over a ' +
            'secure connection and would have overwritten a cookie with the Secure attribute.');
    });
    it('can be highlighted', async () => {
        const headerData = {
            name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name'),
            value: 'someHeaderValue',
            valueEditable: 0 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Disabled */,
            highlight: true,
        };
        const { component, scrollIntoViewSpy } = await renderHeaderSectionRow(headerData);
        assert.isNotNull(component.shadowRoot);
        const headerRowElement = component.shadowRoot.querySelector('.row.header-highlight');
        assert.instanceOf(headerRowElement, HTMLDivElement);
        assert.isTrue(scrollIntoViewSpy.calledOnce);
    });
    it('allows editing header name and header value', async () => {
        const originalHeaderName = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name');
        const originalHeaderValue = 'someHeaderValue';
        const headerData = {
            name: originalHeaderName,
            value: originalHeaderValue,
            nameEditable: true,
            valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */,
        };
        const editedHeaderName = 'new-header-name';
        const editedHeaderValue = 'new value for header';
        const { component, nameEditable, valueEditable } = await renderHeaderSectionRow(headerData);
        assert.isNotNull(component.shadowRoot);
        let headerValueFromEvent = '';
        let headerNameFromEvent = '';
        let headerEditedEventCount = 0;
        component.addEventListener('headeredited', event => {
            headerEditedEventCount++;
            headerValueFromEvent = event.headerValue;
            headerNameFromEvent = event.headerName;
        });
        assert.instanceOf(nameEditable, HTMLSpanElement);
        assert.isTrue(hasReloadPrompt(component.shadowRoot));
        nameEditable.focus();
        nameEditable.innerText = editedHeaderName;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchInputEvent)(nameEditable, { inputType: 'insertText', data: editedHeaderName, bubbles: true, composed: true });
        nameEditable.blur();
        await coordinator.done();
        assert.strictEqual(headerEditedEventCount, 1);
        assert.strictEqual(headerNameFromEvent, editedHeaderName);
        assert.strictEqual(headerValueFromEvent, originalHeaderValue);
        assert.isTrue(hasReloadPrompt(component.shadowRoot));
        assert.instanceOf(valueEditable, HTMLSpanElement);
        valueEditable.focus();
        valueEditable.innerText = editedHeaderValue;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchInputEvent)(valueEditable, { inputType: 'insertText', data: editedHeaderValue, bubbles: true, composed: true });
        valueEditable.blur();
        await coordinator.done();
        assert.strictEqual(headerEditedEventCount, 2);
        assert.strictEqual(headerNameFromEvent, editedHeaderName);
        assert.strictEqual(headerValueFromEvent, editedHeaderValue);
        assert.isTrue(hasReloadPrompt(component.shadowRoot));
        nameEditable.focus();
        nameEditable.innerText = originalHeaderName;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchInputEvent)(nameEditable, { inputType: 'insertText', data: originalHeaderName, bubbles: true, composed: true });
        nameEditable.blur();
        await coordinator.done();
        assert.strictEqual(headerEditedEventCount, 3);
        assert.strictEqual(headerNameFromEvent, originalHeaderName);
        assert.strictEqual(headerValueFromEvent, editedHeaderValue);
        assert.isTrue(hasReloadPrompt(component.shadowRoot));
        valueEditable.focus();
        valueEditable.innerText = originalHeaderValue;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchInputEvent)(valueEditable, { inputType: 'insertText', data: originalHeaderValue, bubbles: true, composed: true });
        valueEditable.blur();
        await coordinator.done();
        assert.strictEqual(headerEditedEventCount, 4);
        assert.strictEqual(headerNameFromEvent, originalHeaderName);
        assert.strictEqual(headerValueFromEvent, originalHeaderValue);
        assert.isTrue(hasReloadPrompt(component.shadowRoot));
    });
    it('does not allow setting an emtpy header name', async () => {
        const headerName = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name');
        const headerData = {
            name: headerName,
            value: 'someHeaderValue',
            nameEditable: true,
            valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */,
        };
        const { component, nameEditable } = await renderHeaderSectionRow(headerData);
        assert.isNotNull(component.shadowRoot);
        let headerEditedEventCount = 0;
        component.addEventListener('headeredited', () => {
            headerEditedEventCount++;
        });
        assert.instanceOf(nameEditable, HTMLElement);
        nameEditable.focus();
        nameEditable.innerText = '';
        nameEditable.blur();
        assert.strictEqual(headerEditedEventCount, 0);
        assert.strictEqual(nameEditable.innerText, 'Some-Header-Name');
    });
    it('resets edited value on escape key', async () => {
        const originalHeaderValue = 'special chars: \'\"\\.,;!?@_-+/=<>()[]{}|*&^%$#§±`~';
        const headerData = {
            name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name'),
            value: originalHeaderValue,
            originalValue: originalHeaderValue,
            valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */,
        };
        const { component, valueEditable } = await renderHeaderSectionRow(headerData);
        assert.isNotNull(component.shadowRoot);
        let eventCount = 0;
        component.addEventListener('headeredited', () => {
            eventCount++;
        });
        assert.instanceOf(valueEditable, HTMLElement);
        assert.strictEqual(valueEditable.innerText, originalHeaderValue);
        valueEditable.focus();
        valueEditable.innerText = 'new value for header';
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(valueEditable, { key: 'Escape', bubbles: true, composed: true });
        assert.strictEqual(eventCount, 0);
        assert.strictEqual(valueEditable.innerText, originalHeaderValue);
        const row = component.shadowRoot.querySelector('.row');
        assert.isFalse(row?.classList.contains('header-overridden'));
    });
    it('confirms edited value and exits editing mode on "Enter"-key', async () => {
        const headerData = {
            name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name'),
            value: 'someHeaderValue',
            valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */,
        };
        const editedHeaderValue = 'new value for header';
        const { component, valueEditable } = await renderHeaderSectionRow(headerData);
        assert.isNotNull(component.shadowRoot);
        let headerValueFromEvent = '';
        let eventCount = 0;
        component.addEventListener('headeredited', event => {
            headerValueFromEvent = event.headerValue;
            eventCount++;
        });
        assert.instanceOf(valueEditable, HTMLElement);
        valueEditable.focus();
        valueEditable.innerText = editedHeaderValue;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(valueEditable, { key: 'Enter', bubbles: true });
        assert.strictEqual(headerValueFromEvent, editedHeaderValue);
        assert.strictEqual(eventCount, 1);
    });
    it('adds and removes `header-overridden` class correctly', async () => {
        const headerData = {
            name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name'),
            value: 'someHeaderValue',
            originalValue: 'someHeaderValue',
            valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */,
            highlight: true,
        };
        const { component, valueEditable } = await renderHeaderSectionRow(headerData);
        assert.isNotNull(component.shadowRoot);
        assert.instanceOf(valueEditable, HTMLElement);
        const row = component.shadowRoot.querySelector('.row');
        assert.isFalse(row?.classList.contains('header-overridden'));
        assert.isTrue(row?.classList.contains('header-highlight'));
        assert.isFalse(hasReloadPrompt(component.shadowRoot));
        valueEditable.focus();
        valueEditable.innerText = 'a';
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchInputEvent)(valueEditable, { inputType: 'insertText', data: 'a', bubbles: true, composed: true });
        await coordinator.done();
        assert.isTrue(row?.classList.contains('header-overridden'));
        assert.isFalse(row?.classList.contains('header-highlight'));
        assert.isTrue(hasReloadPrompt(component.shadowRoot));
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(valueEditable, { key: 'Escape', bubbles: true, composed: true });
        await coordinator.done();
        assert.isFalse(component.shadowRoot.querySelector('.row')?.classList.contains('header-overridden'));
    });
    it('adds and removes `header-overridden` class correctly when editing unset headers', async () => {
        const headerData = {
            name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name'),
            value: null,
            originalValue: null,
            valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */,
        };
        const { component, valueEditable } = await renderHeaderSectionRow(headerData);
        assert.isNotNull(component.shadowRoot);
        assert.instanceOf(valueEditable, HTMLElement);
        const row = component.shadowRoot.querySelector('.row');
        assert.isFalse(row?.classList.contains('header-overridden'));
        valueEditable.focus();
        valueEditable.innerText = 'a';
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchInputEvent)(valueEditable, { inputType: 'insertText', data: 'a', bubbles: true, composed: true });
        await coordinator.done();
        assert.isTrue(row?.classList.contains('header-overridden'));
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(valueEditable, { key: 'Escape', bubbles: true, composed: true });
        await coordinator.done();
        assert.isFalse(component.shadowRoot.querySelector('.row')?.classList.contains('header-overridden'));
    });
    it('shows error-icon when header name contains disallowed characters', async () => {
        const headerData = {
            name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name'),
            value: 'someHeaderValue',
            originalValue: 'someHeaderValue',
            nameEditable: true,
            valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */,
        };
        const { component, nameEditable } = await renderHeaderSectionRow(headerData);
        assert.isNotNull(component.shadowRoot);
        assert.instanceOf(nameEditable, HTMLElement);
        const row = component.shadowRoot.querySelector('.row');
        assert.instanceOf(row, HTMLDivElement);
        assert.strictEqual(row.querySelector('devtools-icon.disallowed-characters'), null);
        assert.isTrue(hasReloadPrompt(component.shadowRoot));
        nameEditable.focus();
        nameEditable.innerText = '*';
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchInputEvent)(nameEditable, { inputType: 'insertText', data: '*', bubbles: true, composed: true });
        await coordinator.done();
        assert.instanceOf(row.querySelector('devtools-icon.disallowed-characters'), HTMLElement);
        assert.isTrue(hasReloadPrompt(component.shadowRoot));
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(nameEditable, { key: 'Escape', bubbles: true, composed: true });
        await coordinator.done();
        assert.strictEqual(row.querySelector('devtools-icon.disallowed-characters'), null);
        assert.isTrue(hasReloadPrompt(component.shadowRoot));
    });
    it('split header name and value on pasted content', async () => {
        const originalHeaderName = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name');
        const originalHeaderValue = 'someHeaderValue';
        const headerData = {
            name: originalHeaderName,
            value: originalHeaderValue,
            nameEditable: true,
            valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */,
        };
        const editedHeaderName = 'permissions-Policy: unload=(https://xyz.com)';
        const { component, nameEditable, valueEditable } = await renderHeaderSectionRow(headerData);
        assert.isNotNull(component.shadowRoot);
        assert.instanceOf(nameEditable, HTMLElement);
        assert.instanceOf(valueEditable, HTMLElement);
        let headerValueFromEvent = '';
        let headerNameFromEvent = '';
        let headerEditedEventCount = 0;
        component.addEventListener('headeredited', event => {
            headerValueFromEvent = event.headerValue;
            headerNameFromEvent = event.headerName;
            headerEditedEventCount++;
        });
        const dt = new DataTransfer();
        dt.setData('text/plain', editedHeaderName);
        // update name on blur
        nameEditable.focus();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchPasteEvent)(nameEditable, { clipboardData: dt, bubbles: true, composed: true });
        nameEditable.blur();
        await coordinator.done();
        assert.strictEqual(headerEditedEventCount, 1);
        assert.strictEqual(headerNameFromEvent, 'permissions-policy');
        assert.strictEqual(headerValueFromEvent, 'someHeaderValue');
        // update value on blur
        valueEditable.blur();
        await coordinator.done();
        assert.strictEqual(headerEditedEventCount, 2);
        assert.strictEqual(headerNameFromEvent, 'permissions-policy');
        assert.strictEqual(headerValueFromEvent, 'unload=(https://xyz.com)');
        // final value on UI
        const nameEl = component.shadowRoot.querySelector('.header-name devtools-editable-span');
        const valueEl = component.shadowRoot.querySelector('.header-value devtools-editable-span');
        assert.strictEqual(nameEl.value, 'Permissions-Policy');
        assert.strictEqual(valueEl.value, 'unload=(https://xyz.com)');
    });
    it('set and revert pasted header name on escape', async () => {
        const originalHeaderName = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name');
        const originalHeaderValue = 'someHeaderValue';
        const headerData = {
            name: originalHeaderName,
            value: originalHeaderValue,
            nameEditable: true,
            valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */,
        };
        const editedHeaderName = ':abc';
        const { component, nameEditable, valueEditable } = await renderHeaderSectionRow(headerData);
        assert.isNotNull(component.shadowRoot);
        assert.instanceOf(nameEditable, HTMLElement);
        assert.instanceOf(valueEditable, HTMLElement);
        let headerEditedEventCount = 0;
        component.addEventListener('headeredited', () => {
            headerEditedEventCount++;
        });
        const dt = new DataTransfer();
        dt.setData('text/plain', editedHeaderName);
        nameEditable.focus();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchPasteEvent)(nameEditable, { clipboardData: dt, bubbles: true, composed: true });
        const nameEl = component.shadowRoot.querySelector('.header-name devtools-editable-span');
        const valueEl = component.shadowRoot.querySelector('.header-value devtools-editable-span');
        await coordinator.done();
        assert.strictEqual(nameEl.value, ':Abc');
        assert.strictEqual(valueEl.value, originalHeaderValue);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(nameEditable, { key: 'Escape', bubbles: true, composed: true });
        await coordinator.done();
        assert.strictEqual(headerEditedEventCount, 0);
        assert.strictEqual(nameEl.value, 'Some-Header-Name');
    });
    it('revert pasted header name and value on escape', async () => {
        const originalHeaderName = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name');
        const originalHeaderValue = 'someHeaderValue';
        const headerData = {
            name: originalHeaderName,
            value: originalHeaderValue,
            nameEditable: true,
            valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */,
        };
        const editedHeaderName = 'permissions-Policy: unload=(https://xyz.com)';
        const { component, nameEditable, valueEditable } = await renderHeaderSectionRow(headerData);
        assert.isNotNull(component.shadowRoot);
        assert.instanceOf(nameEditable, HTMLElement);
        assert.instanceOf(valueEditable, HTMLElement);
        let headerEditedEventCount = 0;
        component.addEventListener('headeredited', () => {
            headerEditedEventCount++;
        });
        const dt = new DataTransfer();
        dt.setData('text/plain', editedHeaderName);
        nameEditable.focus();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchPasteEvent)(nameEditable, { clipboardData: dt, bubbles: true, composed: true });
        const nameEl = component.shadowRoot.querySelector('.header-name devtools-editable-span');
        const valueEl = component.shadowRoot.querySelector('.header-value devtools-editable-span');
        await coordinator.done();
        assert.strictEqual(nameEl.value, 'Permissions-Policy');
        assert.strictEqual(valueEl.value, 'unload=(https://xyz.com)');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(valueEditable, { key: 'Escape', bubbles: true, composed: true });
        await coordinator.done();
        assert.strictEqual(headerEditedEventCount, 0);
        assert.strictEqual(nameEl.value, 'Some-Header-Name');
        assert.strictEqual(valueEl.value, 'someHeaderValue');
    });
    it('recoginzes only alphanumeric characters, dashes, and underscores as valid in header names', () => {
        assert.strictEqual(_components_js__WEBPACK_IMPORTED_MODULE_5__.HeaderSectionRow.isValidHeaderName('AlphaNumeric123'), true);
        assert.strictEqual(_components_js__WEBPACK_IMPORTED_MODULE_5__.HeaderSectionRow.isValidHeaderName('Alpha Numeric'), false);
        assert.strictEqual(_components_js__WEBPACK_IMPORTED_MODULE_5__.HeaderSectionRow.isValidHeaderName('AlphaNumeric123!'), false);
        assert.strictEqual(_components_js__WEBPACK_IMPORTED_MODULE_5__.HeaderSectionRow.isValidHeaderName('With-dashes_and_underscores'), true);
        assert.strictEqual(_components_js__WEBPACK_IMPORTED_MODULE_5__.HeaderSectionRow.isValidHeaderName('no*'), false);
    });
    it('allows removing a header override', async () => {
        const headerName = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name');
        const headerValue = 'someHeaderValue';
        const headerData = {
            name: headerName,
            value: headerValue,
            valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */,
        };
        const { component } = await renderHeaderSectionRow(headerData);
        assert.isNotNull(component.shadowRoot);
        let headerValueFromEvent = '';
        let headerNameFromEvent = '';
        let headerRemovedEventCount = 0;
        component.addEventListener('headerremoved', event => {
            headerRemovedEventCount++;
            headerValueFromEvent = event.headerValue;
            headerNameFromEvent = event.headerName;
        });
        const removeHeaderButton = component.shadowRoot.querySelector('.remove-header');
        removeHeaderButton.click();
        assert.strictEqual(headerRemovedEventCount, 1);
        assert.strictEqual(headerNameFromEvent, headerName);
        assert.strictEqual(headerValueFromEvent, headerValue);
    });
    it('removes leading/trailing whitespace when editing header names/values', async () => {
        const originalHeaderName = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name');
        const originalHeaderValue = 'someHeaderValue';
        const headerData = {
            name: originalHeaderName,
            value: originalHeaderValue,
            nameEditable: true,
            valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */,
        };
        const editedHeaderName = ' new-header-name ';
        const editedHeaderValue = ' new value for header ';
        const { component, nameEditable, valueEditable } = await renderHeaderSectionRow(headerData);
        assert.isNotNull(component.shadowRoot);
        let headerValueFromEvent = '';
        let headerNameFromEvent = '';
        let headerEditedEventCount = 0;
        component.addEventListener('headeredited', event => {
            headerEditedEventCount++;
            headerValueFromEvent = event.headerValue;
            headerNameFromEvent = event.headerName;
        });
        assert.instanceOf(nameEditable, HTMLElement);
        nameEditable.focus();
        nameEditable.innerText = editedHeaderName;
        nameEditable.blur();
        assert.strictEqual(headerEditedEventCount, 1);
        assert.strictEqual(headerNameFromEvent, editedHeaderName.trim());
        assert.strictEqual(headerValueFromEvent, originalHeaderValue);
        assert.instanceOf(valueEditable, HTMLElement);
        valueEditable.focus();
        valueEditable.innerText = editedHeaderValue;
        valueEditable.blur();
        assert.strictEqual(headerEditedEventCount, 2);
        assert.strictEqual(headerNameFromEvent, editedHeaderName.trim());
        assert.strictEqual(headerValueFromEvent, editedHeaderValue.trim());
    });
});
//# sourceMappingURL=HeaderSectionRow.test.js.map

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