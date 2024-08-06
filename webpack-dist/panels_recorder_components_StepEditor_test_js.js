"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_components_StepEditor_test_js"],{

/***/ "./panels/recorder/components/StepEditor.test.js":
/*!*******************************************************!*\
  !*** ./panels/recorder/components/StepEditor.test.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */ var _testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../testing/RecorderHelpers.js */ "./panels/recorder/testing/RecorderHelpers.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// eslint-disable-next-line rulesdir/es_modules_import


// eslint-disable-next-line rulesdir/es_modules_import

const { describeWithLocale } = _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__;
function getStepEditedPromise(editor) {
    return (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(editor, 'stepedited')
        .then(({ data }) => data);
}
const triggerMicroTaskQueue = async (n = 1) => {
    while (n > 0) {
        --n;
        await new Promise(resolve => setTimeout(resolve, 0));
    }
};
describeWithLocale('StepEditor', () => {
    async function renderEditor(step) {
        const editor = document.createElement('devtools-recorder-step-editor');
        editor.step = structuredClone(step);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(editor, {});
        await editor.updateComplete;
        return editor;
    }
    function getInputByAttribute(editor, attribute) {
        const input = editor.renderRoot.querySelector(`.attribute[data-attribute="${attribute}"] devtools-suggestion-input`);
        if (!input) {
            throw new Error(`${attribute} devtools-suggestion-input not found`);
        }
        return input;
    }
    function getAllInputValues(editor) {
        const result = [];
        const inputs = editor.renderRoot.querySelectorAll('devtools-suggestion-input');
        for (const input of inputs) {
            result.push(input.value);
        }
        return result;
    }
    async function addOptionalField(editor, attribute) {
        const button = editor.renderRoot.querySelector(`devtools-button.add-row[data-attribute="${attribute}"]`);
        assert.instanceOf(button, HTMLElement);
        button.click();
        await triggerMicroTaskQueue();
        await editor.updateComplete;
    }
    async function deleteOptionalField(editor, attribute) {
        const button = editor.renderRoot.querySelector(`devtools-button.delete-row[data-attribute="${attribute}"]`);
        assert.instanceOf(button, HTMLElement);
        button.click();
        await triggerMicroTaskQueue();
        await editor.updateComplete;
    }
    async function clickFrameLevelButton(editor, className) {
        const button = editor.renderRoot.querySelector(`.attribute[data-attribute="frame"] devtools-button${className}`);
        assert.instanceOf(button, HTMLElement);
        button.click();
        await editor.updateComplete;
    }
    async function clickSelectorLevelButton(editor, path, className) {
        const button = editor.renderRoot.querySelector(`[data-selector-path="${path.join('.')}"] devtools-button${className}`);
        assert.instanceOf(button, HTMLElement);
        button.click();
        await editor.updateComplete;
    }
    /**
     * Extra button to be able to focus on it in tests to see how
     * the step editor reacts when the focus moves outside of it.
     */
    function createFocusOutsideButton() {
        const button = document.createElement('button');
        button.innerText = 'click';
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(button, { allowMultipleChildren: true });
        return {
            focus() {
                button.focus();
            },
        };
    }
    beforeEach(() => {
        _testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_3__.installMocksForRecordingPlayer();
    });
    it('should edit step type', async () => {
        const editor = await renderEditor({
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Click,
            selectors: [['.cls']],
            offsetX: 1,
            offsetY: 1,
        });
        const step = getStepEditedPromise(editor);
        const input = getInputByAttribute(editor, 'type');
        input.focus();
        input.value = 'change';
        await input.updateComplete;
        input.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Enter',
            bubbles: true,
            composed: true,
        }));
        await editor.updateComplete;
        assert.deepStrictEqual(await step, {
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Change,
            selectors: ['.cls'],
            value: 'Value',
        });
        assert.deepStrictEqual(getAllInputValues(editor), [
            'change',
            '.cls',
            'Value',
        ]);
    });
    it('should edit step type via dropdown', async () => {
        const editor = await renderEditor({ type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll });
        const step = getStepEditedPromise(editor);
        const input = getInputByAttribute(editor, 'type');
        input.focus();
        input.value = '';
        await input.updateComplete;
        // Use the drop down.
        input.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'ArrowDown',
            bubbles: true,
            composed: true,
        }));
        input.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Enter',
            bubbles: true,
            composed: true,
        }));
        await editor.updateComplete;
        assert.deepStrictEqual(await step, {
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Click,
            selectors: ['.cls'],
            offsetX: 1,
            offsetY: 1,
        });
        assert.deepStrictEqual(getAllInputValues(editor), [
            'click',
            '.cls',
            '1',
            '1',
        ]);
    });
    it('should edit other attributes', async () => {
        const editor = await renderEditor({
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.CustomStep,
            name: 'test',
            parameters: {},
        });
        const step = getStepEditedPromise(editor);
        const input = getInputByAttribute(editor, 'parameters');
        input.focus();
        input.value = '{"custom":"test"}';
        await input.updateComplete;
        input.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Enter',
            bubbles: true,
            composed: true,
        }));
        await editor.updateComplete;
        assert.deepStrictEqual(await step, {
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.CustomStep,
            name: 'test',
            parameters: { custom: 'test' },
        });
        assert.deepStrictEqual(getAllInputValues(editor), [
            'customStep',
            'test',
            '{"custom":"test"}',
        ]);
    });
    it('should close dropdown on Enter', async () => {
        const editor = await renderEditor({ type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll });
        const input = getInputByAttribute(editor, 'type');
        input.focus();
        input.value = '';
        await input.updateComplete;
        const suggestions = input.renderRoot.querySelector('devtools-suggestion-box');
        if (!suggestions) {
            throw new Error('Failed to find element');
        }
        assert.strictEqual(window.getComputedStyle(suggestions).display, 'block');
        input.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Enter',
            bubbles: true,
            composed: true,
        }));
        assert.strictEqual(window.getComputedStyle(suggestions).display, 'none');
    });
    it('should close dropdown on focus elsewhere', async () => {
        const editor = await renderEditor({ type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll });
        const button = createFocusOutsideButton();
        const input = getInputByAttribute(editor, 'type');
        input.focus();
        input.value = '';
        await input.updateComplete;
        const suggestions = input.renderRoot.querySelector('devtools-suggestion-box');
        if (!suggestions) {
            throw new Error('Failed to find element');
        }
        assert.strictEqual(window.getComputedStyle(suggestions).display, 'block');
        button.focus();
        assert.strictEqual(window.getComputedStyle(suggestions).display, 'none');
    });
    it('should add optional fields', async () => {
        const editor = await renderEditor({ type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll });
        const step = getStepEditedPromise(editor);
        await addOptionalField(editor, 'x');
        assert.deepStrictEqual(await step, {
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
            x: 0,
        });
        assert.deepStrictEqual(getAllInputValues(editor), ['scroll', '0']);
    });
    it('should add the duration field', async () => {
        const editor = await renderEditor({
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Click,
            offsetX: 1,
            offsetY: 1,
            selectors: ['.cls'],
        });
        const step = getStepEditedPromise(editor);
        await addOptionalField(editor, 'duration');
        assert.deepStrictEqual(await step, {
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Click,
            offsetX: 1,
            offsetY: 1,
            selectors: ['.cls'],
            duration: 50,
        });
        assert.deepStrictEqual(getAllInputValues(editor), [
            'click',
            '.cls',
            '1',
            '1',
            '50',
        ]);
    });
    it('should add the parameters field', async () => {
        const editor = await renderEditor({
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.WaitForElement,
            selectors: ['.cls'],
        });
        const step = getStepEditedPromise(editor);
        await addOptionalField(editor, 'properties');
        assert.deepStrictEqual(await step, {
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.WaitForElement,
            selectors: ['.cls'],
            properties: {},
        });
        assert.deepStrictEqual(getAllInputValues(editor), [
            'waitForElement',
            '.cls',
            '{}',
        ]);
    });
    it('should edit timeout fields', async () => {
        const editor = await renderEditor({
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Navigate,
            url: 'https://example.com',
        });
        const step = getStepEditedPromise(editor);
        await addOptionalField(editor, 'timeout');
        assert.deepStrictEqual(await step, {
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Navigate,
            url: 'https://example.com',
            timeout: 5000,
        });
        assert.deepStrictEqual(getAllInputValues(editor), [
            'navigate',
            'https://example.com',
            '5000',
        ]);
    });
    it('should delete optional fields', async () => {
        const editor = await renderEditor({
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
            x: 1,
        });
        const step = getStepEditedPromise(editor);
        await deleteOptionalField(editor, 'x');
        assert.deepStrictEqual(await step, { type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll });
        assert.deepStrictEqual(getAllInputValues(editor), ['scroll']);
    });
    it('should add/remove frames', async () => {
        const editor = await renderEditor({
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
            frame: [0],
        });
        {
            const step = getStepEditedPromise(editor);
            await clickFrameLevelButton(editor, '.add-frame');
            assert.deepStrictEqual(await step, {
                type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
                frame: [0, 0],
            });
            assert.deepStrictEqual(getAllInputValues(editor), ['scroll', '0', '0']);
            assert.isTrue(editor.shadowRoot?.activeElement?.matches('devtools-suggestion-input[data-path="frame.1"]'));
        }
        {
            const step = getStepEditedPromise(editor);
            await clickFrameLevelButton(editor, '.remove-frame');
            assert.deepStrictEqual(await step, {
                type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
                frame: [0],
            });
            assert.deepStrictEqual(getAllInputValues(editor), ['scroll', '0']);
            assert.isTrue(editor.shadowRoot?.activeElement?.matches('devtools-suggestion-input[data-path="frame.0"]'));
        }
    });
    it('should add/remove selector parts', async () => {
        const editor = await renderEditor({
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
            selectors: [['.part1']],
        });
        {
            const step = getStepEditedPromise(editor);
            await clickSelectorLevelButton(editor, [0, 0], '.add-selector-part');
            assert.deepStrictEqual(await step, {
                type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
                selectors: [['.part1', '.cls']],
            });
            assert.deepStrictEqual(getAllInputValues(editor), [
                'scroll',
                '.part1',
                '.cls',
            ]);
            assert.isTrue(editor.shadowRoot?.activeElement?.matches('devtools-suggestion-input[data-path="selectors.0.1"]'));
        }
        {
            const step = getStepEditedPromise(editor);
            await clickSelectorLevelButton(editor, [0, 0], '.remove-selector-part');
            assert.deepStrictEqual(await step, {
                type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
                selectors: ['.cls'],
            });
            assert.deepStrictEqual(getAllInputValues(editor), ['scroll', '.cls']);
            assert.isTrue(editor.shadowRoot?.activeElement?.matches('devtools-suggestion-input[data-path="selectors.0.0"]'));
        }
    });
    it('should add/remove selectors', async () => {
        const editor = await renderEditor({
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
            selectors: [['.part1']],
        });
        {
            const step = getStepEditedPromise(editor);
            await clickSelectorLevelButton(editor, [0], '.add-selector');
            assert.deepStrictEqual(await step, {
                type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
                selectors: ['.part1', '.cls'],
            });
            assert.deepStrictEqual(getAllInputValues(editor), [
                'scroll',
                '.part1',
                '.cls',
            ]);
            assert.isTrue(editor.shadowRoot?.activeElement?.matches('devtools-suggestion-input[data-path="selectors.1.0"]'));
        }
        {
            const step = getStepEditedPromise(editor);
            await clickSelectorLevelButton(editor, [1], '.remove-selector');
            assert.deepStrictEqual(await step, {
                type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
                selectors: ['.part1'],
            });
            assert.deepStrictEqual(getAllInputValues(editor), ['scroll', '.part1']);
            assert.isTrue(editor.shadowRoot?.activeElement?.matches('devtools-suggestion-input[data-path="selectors.0.0"]'));
        }
    });
    it('should become readonly if disabled', async () => {
        const editor = await renderEditor({
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
            selectors: [['.part1']],
        });
        editor.disabled = true;
        await editor.updateComplete;
        for (const input of editor.renderRoot.querySelectorAll('devtools-suggestion-input')) {
            assert.isTrue(input.disabled);
        }
    });
    it('clears text selection when navigating away from devtools-suggestion-input', async () => {
        const editor = await renderEditor({ type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll });
        // Clicking on the type devtools-suggestion-input should select the entire text in the field.
        const input = getInputByAttribute(editor, 'type');
        input.focus();
        input.click();
        assert.strictEqual(window.getSelection()?.toString(), 'scroll');
        // Navigating away should remove the selection.
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(input, {
            key: 'Enter',
            bubbles: true,
            composed: true,
        });
        assert.strictEqual(window.getSelection()?.toString(), '');
    });
    it('should add an attribute after another\'s deletion', async () => {
        const editor = await renderEditor({
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.WaitForElement,
            selectors: [['.cls']],
        });
        await addOptionalField(editor, 'operator');
        await deleteOptionalField(editor, 'operator');
        const step = getStepEditedPromise(editor);
        await addOptionalField(editor, 'count');
        assert.deepStrictEqual(await step, {
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.WaitForElement,
            selectors: ['.cls'],
            count: 1,
        });
        assert.deepStrictEqual(getAllInputValues(editor), [
            'waitForElement',
            '.cls',
            '1',
        ]);
    });
    it('should edit asserted events', async () => {
        const editor = await renderEditor({
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Navigate,
            url: 'www.example.com',
            assertedEvents: [{
                    type: 'navigation',
                    title: 'Test',
                    url: 'www.example.com',
                }],
        });
        const step = getStepEditedPromise(editor);
        const input = getInputByAttribute(editor, 'assertedEvents');
        input.focus();
        input.value = 'None';
        await input.updateComplete;
        input.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Enter',
            bubbles: true,
            composed: true,
        }));
        await editor.updateComplete;
        assert.deepStrictEqual(await step, {
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Navigate,
            url: 'www.example.com',
            assertedEvents: [{
                    type: 'navigation',
                    title: 'None',
                    url: 'www.example.com',
                }],
        });
    });
    it('should add/remove attribute assertion', async () => {
        const editor = await renderEditor({
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.WaitForElement,
            selectors: ['.part1'],
            attributes: {
                a: 'b',
            },
        });
        {
            const step = getStepEditedPromise(editor);
            editor.renderRoot.querySelectorAll('.add-attribute-assertion')[0]?.click();
            assert.deepStrictEqual(await step, {
                type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.WaitForElement,
                selectors: ['.part1'],
                attributes: { a: 'b', attribute: 'value' },
            });
            assert.deepStrictEqual(getAllInputValues(editor), [
                'waitForElement',
                '.part1',
                'a',
                'b',
                'attribute',
                'value',
            ]);
        }
        {
            const step = getStepEditedPromise(editor);
            editor.renderRoot.querySelectorAll('.remove-attribute-assertion')[1]?.click();
            assert.deepStrictEqual(await step, {
                type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.WaitForElement,
                selectors: ['.part1'],
                attributes: { a: 'b' },
            });
            assert.deepStrictEqual(getAllInputValues(editor), [
                'waitForElement',
                '.part1',
                'a',
                'b',
            ]);
        }
    });
    it('should edit attribute assertion', async () => {
        const editor = await renderEditor({
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.WaitForElement,
            selectors: ['.part1'],
            attributes: {
                a: 'b',
            },
        });
        const step = getStepEditedPromise(editor);
        const input = getInputByAttribute(editor, 'attributes');
        input.focus();
        input.value = 'innerText';
        await input.updateComplete;
        input.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Enter',
            bubbles: true,
            composed: true,
        }));
        await editor.updateComplete;
        assert.deepStrictEqual(await step, {
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.WaitForElement,
            selectors: ['.part1'],
            attributes: {
                innerText: 'b',
            },
        });
    });
});
//# sourceMappingURL=StepEditor.test.js.map

/***/ }),

/***/ "./panels/recorder/testing/RecorderHelpers.js":
/*!****************************************************!*\
  !*** ./panels/recorder/testing/RecorderHelpers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCustomStep: () => (/* binding */ createCustomStep),
/* harmony export */   installMocksForRecordingPlayer: () => (/* binding */ installMocksForRecordingPlayer),
/* harmony export */   installMocksForTargetManager: () => (/* binding */ installMocksForTargetManager)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const createCustomStep = () => ({
    type: _models_models_js__WEBPACK_IMPORTED_MODULE_1__.Schema.StepType.CustomStep,
    name: 'dummy step',
    parameters: {},
});
const installMocksForRecordingPlayer = () => {
    const mock = {
        page: {
            _client: () => ({
                send: sinon.stub().resolves(),
            }),
            frames: () => [{
                    client: { send: sinon.stub().resolves() },
                }],
            evaluate: () => '',
            url() {
                return '';
            },
            bringToFront() {
                return Promise.resolve();
            },
        },
        browser: {
            pages: () => [mock.page],
            disconnect: () => sinon.stub().resolves(),
        },
    };
    sinon.stub(_models_models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.RecordingPlayer, 'connectPuppeteer').resolves(mock);
};
const installMocksForTargetManager = () => {
    const stub = {
        suspendAllTargets: sinon.stub().resolves(),
        resumeAllTargets: sinon.stub().resolves(),
        primaryPageTarget: sinon.stub().returns({
            targetAgent: sinon.stub().returns({}),
        }),
    };
    sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager, 'instance')
        .callsFake(() => stub);
};
//# sourceMappingURL=RecorderHelpers.js.map

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

/***/ })

}]);