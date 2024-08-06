"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_components_HeadersView_test_js"],{

/***/ "./panels/sources/components/HeadersView.test.js":
/*!*******************************************************!*\
  !*** ./panels/sources/components/HeadersView.test.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/ContextMenuHelpers.js */ "./testing/ContextMenuHelpers.js");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */ var _testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../testing/UserMetricsHelpers.js */ "./testing/UserMetricsHelpers.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components.js */ "./panels/sources/components/components.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__.RenderCoordinator.RenderCoordinator.instance();
describe('HeadersView', () => {
    const commitWorkingCopySpy = sinon.spy();
    before(async () => {
        await (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.initializeGlobalVars)();
    });
    after(async () => {
        await (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.deinitializeGlobalVars)();
    });
    beforeEach(() => {
        commitWorkingCopySpy.resetHistory();
        (0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_6__.resetRecordedMetrics)();
    });
    async function renderEditor() {
        const editor = new _components_js__WEBPACK_IMPORTED_MODULE_8__.HeadersView.HeadersViewComponent();
        editor.data = {
            headerOverrides: [
                {
                    applyTo: '*',
                    headers: [
                        {
                            name: 'server',
                            value: 'DevTools Unit Test Server',
                        },
                        {
                            name: 'access-control-allow-origin',
                            value: '*',
                        },
                    ],
                },
                {
                    applyTo: '*.jpg',
                    headers: [
                        {
                            name: 'jpg-header',
                            value: 'only for jpg files',
                        },
                    ],
                },
            ],
            parsingError: false,
            uiSourceCode: {
                name: () => '.headers',
                setWorkingCopy: () => { },
                commitWorkingCopy: commitWorkingCopySpy,
            },
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.renderElementIntoDOM)(editor);
        assert.isNotNull(editor.shadowRoot);
        await coordinator.done();
        return editor;
    }
    async function renderEditorWithinWrapper() {
        const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance();
        const headers = `[
      {
        "applyTo": "*",
        "headers": [
          {
            "name": "server",
            "value": "DevTools Unit Test Server"
          },
          {
            "name": "access-control-allow-origin",
            "value": "*"
          }
        ]
      },
      {
        "applyTo": "*.jpg",
        "headers": [{
          "name": "jpg-header",
          "value": "only for jpg files"
        }]
      }
    ]`;
        const { uiSourceCode, project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createFileSystemUISourceCode)({
            url: 'file:///path/to/overrides/example.html',
            mimeType: 'text/html',
            content: headers,
        });
        uiSourceCode.commitWorkingCopy = commitWorkingCopySpy;
        project.canSetFileContent = () => true;
        const editorWrapper = new _components_js__WEBPACK_IMPORTED_MODULE_8__.HeadersView.HeadersView(uiSourceCode);
        await uiSourceCode.requestContentData();
        await coordinator.done();
        const editor = editorWrapper.getComponent();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.renderElementIntoDOM)(editor);
        assert.isNotNull(editor.shadowRoot);
        await coordinator.done();
        workspace.removeProject(project);
        return editor;
    }
    async function changeEditable(editable, value) {
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchFocusEvent)(editable, { bubbles: true });
        editable.innerText = value;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchInputEvent)(editable, { inputType: 'insertText', data: value, bubbles: true, composed: true });
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchFocusOutEvent)(editable, { bubbles: true });
        await coordinator.done();
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_6__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.HeaderOverrideHeadersFileEdited));
    }
    async function pressButton(shadowRoot, rowIndex, selector) {
        const rowElements = shadowRoot.querySelectorAll('.row');
        const button = rowElements[rowIndex].querySelector(selector);
        assert.instanceOf(button, HTMLElement);
        button.click();
        await coordinator.done();
    }
    function getRowContent(shadowRoot) {
        const rows = Array.from(shadowRoot.querySelectorAll('.row'));
        return rows.map(row => {
            return Array.from(row.querySelectorAll('div, .editable'))
                .map(element => element.innerText)
                .join('');
        });
    }
    function getSingleRowContent(shadowRoot, rowIndex) {
        const rows = Array.from(shadowRoot.querySelectorAll('.row'));
        assert.isTrue(rows.length > rowIndex);
        return Array.from(rows[rowIndex].querySelectorAll('div, .editable'))
            .map(element => element.innerText)
            .join('');
    }
    function isWholeElementContentSelected(element) {
        const textContent = element.textContent;
        if (!textContent || textContent.length < 1 || !element.hasSelection()) {
            return false;
        }
        const selection = element.getComponentSelection();
        if (!selection || selection.rangeCount < 1) {
            return false;
        }
        if (selection.anchorNode !== selection.focusNode) {
            return false;
        }
        const range = selection.getRangeAt(0);
        return (range.endOffset - range.startOffset === textContent.length);
    }
    it('shows an error message when parsingError is true', async () => {
        const editor = new _components_js__WEBPACK_IMPORTED_MODULE_8__.HeadersView.HeadersViewComponent();
        editor.data = {
            headerOverrides: [],
            parsingError: true,
            uiSourceCode: {
                name: () => '.headers',
            },
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.renderElementIntoDOM)(editor);
        assert.isNotNull(editor.shadowRoot);
        await coordinator.done();
        const errorHeader = editor.shadowRoot.querySelector('.error-header');
        assert.strictEqual(errorHeader?.textContent, 'Error when parsing \'.headers\'.');
    });
    it('displays data and allows editing', async () => {
        const editor = await renderEditor();
        assert.isNotNull(editor.shadowRoot);
        let rows = getRowContent(editor.shadowRoot);
        assert.deepEqual(rows, [
            'Apply to:*',
            'server:DevTools Unit Test Server',
            'access-control-allow-origin:*',
            'Apply to:*.jpg',
            'jpg-header:only for jpg files',
        ]);
        const addRuleButton = editor.shadowRoot.querySelector('.add-block');
        assert.instanceOf(addRuleButton, HTMLElement);
        assert.strictEqual(addRuleButton.textContent?.trim(), 'Add override rule');
        const learnMoreLink = editor.shadowRoot.querySelector('.learn-more-row x-link');
        assert.instanceOf(learnMoreLink, HTMLElement);
        assert.strictEqual(learnMoreLink.title, 'https://goo.gle/devtools-override');
        const editables = editor.shadowRoot.querySelectorAll('.editable');
        await changeEditable(editables[0], 'index.html');
        await changeEditable(editables[1], 'content-type');
        await changeEditable(editables[4], 'example.com');
        await changeEditable(editables[7], 'is image');
        rows = getRowContent(editor.shadowRoot);
        assert.deepEqual(rows, [
            'Apply to:index.html',
            'content-type:DevTools Unit Test Server',
            'access-control-allow-origin:example.com',
            'Apply to:*.jpg',
            'jpg-header:is image',
        ]);
        assert.strictEqual(commitWorkingCopySpy.callCount, 4);
    });
    it('resets edited value to previous state on Escape key', async () => {
        const editor = await renderEditor();
        assert.isNotNull(editor.shadowRoot);
        assert.deepEqual(getSingleRowContent(editor.shadowRoot, 1), 'server:DevTools Unit Test Server');
        const editables = editor.shadowRoot.querySelectorAll('.editable');
        assert.strictEqual(editables.length, 8);
        const headerValue = editables[2];
        headerValue.focus();
        headerValue.innerText = 'discard_me';
        assert.deepEqual(getSingleRowContent(editor.shadowRoot, 1), 'server:discard_me');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchKeyDownEvent)(headerValue, {
            key: 'Escape',
            bubbles: true,
        });
        await coordinator.done();
        assert.deepEqual(getSingleRowContent(editor.shadowRoot, 1), 'server:DevTools Unit Test Server');
        const headerName = editables[1];
        headerName.focus();
        headerName.innerText = 'discard_me_2';
        assert.deepEqual(getSingleRowContent(editor.shadowRoot, 1), 'discard_me_2:DevTools Unit Test Server');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchKeyDownEvent)(headerName, {
            key: 'Escape',
            bubbles: true,
        });
        await coordinator.done();
        assert.deepEqual(getSingleRowContent(editor.shadowRoot, 1), 'server:DevTools Unit Test Server');
    });
    it('selects the whole content when clicking on an editable field', async () => {
        const editor = await renderEditor();
        assert.isNotNull(editor.shadowRoot);
        const editables = editor.shadowRoot.querySelectorAll('.editable');
        let element = editables[0];
        element.focus();
        assert.isTrue(isWholeElementContentSelected(element));
        element = editables[1];
        element.focus();
        assert.isTrue(isWholeElementContentSelected(element));
        element = editables[2];
        element.focus();
        assert.isTrue(isWholeElementContentSelected(element));
    });
    it('un-selects the content when an editable field loses focus', async () => {
        const editor = await renderEditor();
        assert.isNotNull(editor.shadowRoot);
        const editables = editor.shadowRoot.querySelectorAll('.editable');
        const element = editables[0];
        element.focus();
        assert.isTrue(isWholeElementContentSelected(element));
        element.blur();
        assert.isFalse(element.hasSelection());
    });
    it('handles pressing \'Enter\' key by removing focus and moving it to the next field if possible', async () => {
        const editor = await renderEditor();
        assert.isNotNull(editor.shadowRoot);
        const editables = editor.shadowRoot.querySelectorAll('.editable');
        assert.strictEqual(editables.length, 8);
        const lastHeaderName = editables[6];
        const lastHeaderValue = editables[7];
        assert.isFalse(lastHeaderName.hasSelection());
        assert.isFalse(lastHeaderValue.hasSelection());
        lastHeaderName.focus();
        assert.isTrue(isWholeElementContentSelected(lastHeaderName));
        assert.isFalse(lastHeaderValue.hasSelection());
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchKeyDownEvent)(lastHeaderName, { key: 'Enter', bubbles: true });
        assert.isFalse(lastHeaderName.hasSelection());
        assert.isTrue(isWholeElementContentSelected(lastHeaderValue));
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchKeyDownEvent)(lastHeaderValue, { key: 'Enter', bubbles: true });
        for (const editable of editables) {
            assert.isFalse(editable.hasSelection());
        }
    });
    it('sets empty \'ApplyTo\' to \'*\'', async () => {
        const editor = await renderEditor();
        assert.isNotNull(editor.shadowRoot);
        const editables = editor.shadowRoot.querySelectorAll('.editable');
        assert.strictEqual(editables.length, 8);
        const applyTo = editables[5];
        assert.strictEqual(applyTo.innerHTML, '*.jpg');
        applyTo.innerText = '';
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchInputEvent)(applyTo, { inputType: 'deleteContentBackward', data: null, bubbles: true });
        assert.strictEqual(applyTo.innerHTML, '');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchFocusOutEvent)(applyTo, { bubbles: true });
        assert.strictEqual(applyTo.innerHTML, '*');
        assert.strictEqual(commitWorkingCopySpy.callCount, 1);
    });
    it('removes the entire header when the header name is deleted', async () => {
        const editor = await renderEditorWithinWrapper();
        assert.isNotNull(editor.shadowRoot);
        let rows = getRowContent(editor.shadowRoot);
        assert.deepEqual(rows, [
            'Apply to:*',
            'server:DevTools Unit Test Server',
            'access-control-allow-origin:*',
            'Apply to:*.jpg',
            'jpg-header:only for jpg files',
        ]);
        const editables = editor.shadowRoot.querySelectorAll('.editable');
        assert.strictEqual(editables.length, 8);
        const headerName = editables[1];
        assert.strictEqual(headerName.innerHTML, 'server');
        headerName.innerText = '';
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchInputEvent)(headerName, { inputType: 'deleteContentBackward', data: null, bubbles: true });
        assert.strictEqual(headerName.innerHTML, '');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchFocusOutEvent)(headerName, { bubbles: true });
        await coordinator.done();
        rows = getRowContent(editor.shadowRoot);
        assert.deepEqual(rows, [
            'Apply to:*',
            'access-control-allow-origin:*',
            'Apply to:*.jpg',
            'jpg-header:only for jpg files',
        ]);
        assert.strictEqual(commitWorkingCopySpy.callCount, 1);
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_6__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.HeaderOverrideHeadersFileEdited));
    });
    it('allows adding headers', async () => {
        const editor = await renderEditorWithinWrapper();
        await coordinator.done();
        assert.isNotNull(editor.shadowRoot);
        let rows = getRowContent(editor.shadowRoot);
        assert.deepEqual(rows, [
            'Apply to:*',
            'server:DevTools Unit Test Server',
            'access-control-allow-origin:*',
            'Apply to:*.jpg',
            'jpg-header:only for jpg files',
        ]);
        await pressButton(editor.shadowRoot, 1, '.add-header');
        rows = getRowContent(editor.shadowRoot);
        assert.deepEqual(rows, [
            'Apply to:*',
            'server:DevTools Unit Test Server',
            'header-name-1:header value',
            'access-control-allow-origin:*',
            'Apply to:*.jpg',
            'jpg-header:only for jpg files',
        ]);
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_6__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.HeaderOverrideHeadersFileEdited));
        const editables = editor.shadowRoot.querySelectorAll('.editable');
        await changeEditable(editables[3], 'cache-control');
        await changeEditable(editables[4], 'max-age=1000');
        rows = getRowContent(editor.shadowRoot);
        assert.deepEqual(rows, [
            'Apply to:*',
            'server:DevTools Unit Test Server',
            'cache-control:max-age=1000',
            'access-control-allow-origin:*',
            'Apply to:*.jpg',
            'jpg-header:only for jpg files',
        ]);
    });
    it('allows adding "ApplyTo"-blocks', async () => {
        const editor = await renderEditorWithinWrapper();
        await coordinator.done();
        assert.isNotNull(editor.shadowRoot);
        let rows = getRowContent(editor.shadowRoot);
        assert.deepEqual(rows, [
            'Apply to:*',
            'server:DevTools Unit Test Server',
            'access-control-allow-origin:*',
            'Apply to:*.jpg',
            'jpg-header:only for jpg files',
        ]);
        const button = editor.shadowRoot.querySelector('.add-block');
        assert.instanceOf(button, HTMLElement);
        button.click();
        await coordinator.done();
        rows = getRowContent(editor.shadowRoot);
        assert.deepEqual(rows, [
            'Apply to:*',
            'server:DevTools Unit Test Server',
            'access-control-allow-origin:*',
            'Apply to:*.jpg',
            'jpg-header:only for jpg files',
            'Apply to:*',
            'header-name-1:header value',
        ]);
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_6__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.HeaderOverrideHeadersFileEdited));
        const editables = editor.shadowRoot.querySelectorAll('.editable');
        await changeEditable(editables[8], 'articles/*');
        await changeEditable(editables[9], 'cache-control');
        await changeEditable(editables[10], 'max-age=1000');
        rows = getRowContent(editor.shadowRoot);
        assert.deepEqual(rows, [
            'Apply to:*',
            'server:DevTools Unit Test Server',
            'access-control-allow-origin:*',
            'Apply to:*.jpg',
            'jpg-header:only for jpg files',
            'Apply to:articles/*',
            'cache-control:max-age=1000',
        ]);
    });
    it('allows removing headers', async () => {
        const editor = await renderEditorWithinWrapper();
        await coordinator.done();
        assert.isNotNull(editor.shadowRoot);
        let rows = getRowContent(editor.shadowRoot);
        assert.deepEqual(rows, [
            'Apply to:*',
            'server:DevTools Unit Test Server',
            'access-control-allow-origin:*',
            'Apply to:*.jpg',
            'jpg-header:only for jpg files',
        ]);
        await pressButton(editor.shadowRoot, 1, '.remove-header');
        rows = getRowContent(editor.shadowRoot);
        assert.deepEqual(rows, [
            'Apply to:*',
            'access-control-allow-origin:*',
            'Apply to:*.jpg',
            'jpg-header:only for jpg files',
        ]);
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_6__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.HeaderOverrideHeadersFileEdited));
        let hiddenDeleteElements = await editor.shadowRoot.querySelectorAll('.row.padded > .remove-header[hidden]');
        assert.isTrue(hiddenDeleteElements.length === 0, 'remove-header button is visible');
        await pressButton(editor.shadowRoot, 1, '.remove-header');
        rows = getRowContent(editor.shadowRoot);
        assert.deepEqual(rows, [
            'Apply to:*',
            'header-name-1:header value',
            'Apply to:*.jpg',
            'jpg-header:only for jpg files',
        ]);
        hiddenDeleteElements = await editor.shadowRoot.querySelectorAll('.row.padded > .remove-header[hidden]');
        assert.isTrue(hiddenDeleteElements.length === 1, 'remove-header button is hidden');
    });
    it('allows removing "ApplyTo"-blocks', async () => {
        const editor = await renderEditorWithinWrapper();
        await coordinator.done();
        assert.isNotNull(editor.shadowRoot);
        let rows = getRowContent(editor.shadowRoot);
        assert.deepEqual(rows, [
            'Apply to:*',
            'server:DevTools Unit Test Server',
            'access-control-allow-origin:*',
            'Apply to:*.jpg',
            'jpg-header:only for jpg files',
        ]);
        await pressButton(editor.shadowRoot, 0, '.remove-block');
        rows = getRowContent(editor.shadowRoot);
        assert.deepEqual(rows, [
            'Apply to:*.jpg',
            'jpg-header:only for jpg files',
        ]);
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_6__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.HeaderOverrideHeadersFileEdited));
    });
    it('removes formatting for pasted content', async () => {
        const editor = await renderEditor();
        assert.isNotNull(editor.shadowRoot);
        const editables = editor.shadowRoot.querySelectorAll('.editable');
        assert.strictEqual(editables.length, 8);
        assert.deepEqual(getSingleRowContent(editor.shadowRoot, 2), 'access-control-allow-origin:*');
        const headerValue = editables[4];
        headerValue.focus();
        const dt = new DataTransfer();
        dt.setData('text/plain', 'foo\nbar');
        dt.setData('text/html', 'This is <b>bold</b>');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchPasteEvent)(headerValue, { clipboardData: dt, bubbles: true });
        await coordinator.done();
        assert.deepEqual(getSingleRowContent(editor.shadowRoot, 2), 'access-control-allow-origin:foo bar');
        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_6__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.HeaderOverrideHeadersFileEdited));
    });
    it('shows context menu', async () => {
        const editor = await renderEditor();
        assert.isNotNull(editor.shadowRoot);
        const contextMenu = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getContextMenuForElement)(editor);
        assert.exists(contextMenu);
    });
});
//# sourceMappingURL=HeadersView.test.js.map

/***/ }),

/***/ "./panels/sources/components/components.js":
/*!*************************************************!*\
  !*** ./panels/sources/components/components.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakpointsView: () => (/* reexport module object */ _BreakpointsView_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   BreakpointsViewUtils: () => (/* reexport module object */ _BreakpointsViewUtils_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   HeadersView: () => (/* reexport module object */ _HeadersView_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _BreakpointsView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BreakpointsView.js */ "./panels/sources/components/BreakpointsView.js");
/* harmony import */ var _BreakpointsViewUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreakpointsViewUtils.js */ "./panels/sources/components/BreakpointsViewUtils.js");
/* harmony import */ var _HeadersView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeadersView.js */ "./panels/sources/components/HeadersView.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./testing/ContextMenuHelpers.js":
/*!***************************************!*\
  !*** ./testing/ContextMenuHelpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findMenuItemWithLabel: () => (/* binding */ findMenuItemWithLabel),
/* harmony export */   getContextMenuForElement: () => (/* binding */ getContextMenuForElement),
/* harmony export */   getMenuForShiftClick: () => (/* binding */ getMenuForShiftClick),
/* harmony export */   getMenuForToolbarButton: () => (/* binding */ getMenuForToolbarButton),
/* harmony export */   getMenuItemLabels: () => (/* binding */ getMenuItemLabels)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
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
//# sourceMappingURL=ContextMenuHelpers.js.map

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

/***/ "./testing/UISourceCodeHelpers.js":
/*!****************************************!*\
  !*** ./testing/UISourceCodeHelpers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContentProviderUISourceCode: () => (/* binding */ createContentProviderUISourceCode),
/* harmony export */   createContentProviderUISourceCodes: () => (/* binding */ createContentProviderUISourceCodes),
/* harmony export */   createFakeScriptMapping: () => (/* binding */ createFakeScriptMapping),
/* harmony export */   createFileSystemUISourceCode: () => (/* binding */ createFileSystemUISourceCode),
/* harmony export */   setupMockedUISourceCode: () => (/* binding */ setupMockedUISourceCode)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






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
    #mimeType;
    #autoMapping;
    constructor(path, type, mimeType, autoMapping) {
        super(path, type);
        this.#mimeType = mimeType;
        this.#autoMapping = autoMapping;
    }
    supportsAutomapping() {
        return this.#autoMapping;
    }
    mimeFromPath(_path) {
        return this.#mimeType;
    }
}
class TestFileSystem extends _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.FileSystemWorkspaceBinding.FileSystem {
    #content;
    #metadata;
    constructor(options) {
        super(options.fileSystemWorkspaceBinding, options.platformFileSystem, options.workspace);
        this.#content = options.content;
        this.#metadata = options.metadata;
    }
    requestFileContent(_uiSourceCode) {
        return Promise.resolve(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.ContentData.ContentData(this.#content, /* isBase64 */ false, 'text/plain'));
    }
    requestMetadata(_uiSourceCode) {
        return Promise.resolve(this.#metadata);
    }
}
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
//# sourceMappingURL=UISourceCodeHelpers.js.map

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

/***/ })

}]);