"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_source_frame_SourceFrame_test_js"],{

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

/***/ "./ui/legacy/components/source_frame/SourceFrame.test.js":
/*!***************************************************************!*\
  !*** ./ui/legacy/components/source_frame/SourceFrame.test.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _source_frame_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('SourceFrame', () => {
    let setting;
    beforeEach(() => {
        setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('disable-self-xss-warning', false, "Synced" /* Common.Settings.SettingStorageType.Synced */);
        setting.set(false);
    });
    async function createSourceFrame(content) {
        const deferredContentStub = { content: '', isEncoded: true };
        const sourceFrame = new _source_frame_js__WEBPACK_IMPORTED_MODULE_6__.SourceFrame.SourceFrameImpl(async () => deferredContentStub);
        await sourceFrame.setContent(content);
        return sourceFrame;
    }
    async function pasteIntoSourceFrame() {
        const sourceFrame = await createSourceFrame('Example');
        const codeMirror = sourceFrame.element.querySelector('devtools-text-editor')?.shadowRoot?.querySelector('.cm-content') || null;
        assert.instanceOf(codeMirror, HTMLDivElement);
        const dataTransfer = new DataTransfer();
        dataTransfer.setData('text/plain', 'foo');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchPasteEvent)(codeMirror, { clipboardData: dataTransfer, bubbles: true });
        await new Promise(resolve => setTimeout(resolve, 0));
        return { codeMirror, dataTransfer };
    }
    it('finds string by simple regex', async () => {
        const sourceFrame = await createSourceFrame('Example');
        sourceFrame.performSearch(new _legacy_js__WEBPACK_IMPORTED_MODULE_5__.SearchableView.SearchConfig('xa', /* caseSensitive */ false, /* isRegex */ true), true);
        sourceFrame.jumpToSearchResult(0);
        assert.strictEqual(sourceFrame.textEditor.state.selection.main.from, 1);
        assert.strictEqual(sourceFrame.textEditor.state.selection.main.to, 3);
    });
    it('does not match always-empty match regex', async () => {
        const sourceFrame = await createSourceFrame('Example');
        sourceFrame.performSearch(new _legacy_js__WEBPACK_IMPORTED_MODULE_5__.SearchableView.SearchConfig('Z*', /* caseSensitive */ false, /* isRegex */ true), true);
        // Check that the search did not find anything.
        // We do this in a roundabout way: select the whole document, then try to select
        // the search result and finally verify that the whole document selection
        // has not changed.
        const dummySelection = sourceFrame.textEditor.createSelection({ lineNumber: 0, columnNumber: 0 }, { lineNumber: 0, columnNumber: 7 });
        sourceFrame.textEditor.dispatch({ selection: dummySelection });
        sourceFrame.jumpToSearchResult(1);
        assert.strictEqual(sourceFrame.textEditor.state.selection.main.from, 0);
        assert.strictEqual(sourceFrame.textEditor.state.selection.main.to, 7);
    });
    it('skips empty matches and finds non-empty match by regex', async () => {
        const sourceFrame = await createSourceFrame('Example');
        sourceFrame.performSearch(new _legacy_js__WEBPACK_IMPORTED_MODULE_5__.SearchableView.SearchConfig('a?', /* caseSensitive */ false, /* isRegex */ true), true);
        sourceFrame.jumpToSearchResult(0);
        assert.strictEqual(sourceFrame.textEditor.state.selection.main.from, 2);
        assert.strictEqual(sourceFrame.textEditor.state.selection.main.to, 3);
    });
    it('shows self-XSS warning which the user can disable', async () => {
        const { codeMirror, dataTransfer } = await pasteIntoSourceFrame();
        const dialogShadowRoot = document.body.querySelector('[data-devtools-glass-pane]')
            ?.shadowRoot?.querySelector('.widget')
            ?.shadowRoot ||
            null;
        assert.isNotNull(dialogShadowRoot);
        const title = dialogShadowRoot.querySelector('.title');
        assert.instanceOf(title, HTMLDivElement);
        assert.strictEqual(title.textContent, 'Do you trust this code?');
        const input = dialogShadowRoot.querySelector('input');
        assert.instanceOf(input, HTMLInputElement);
        input.value = 'allow pasting';
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchInputEvent)(input, { inputType: 'insertText', data: 'allow pasting', bubbles: true, composed: true });
        const allowButton = dialogShadowRoot.querySelector('.button')?.children[1];
        assert.deepEqual(allowButton?.textContent, 'Allow');
        assert.instanceOf(allowButton, _components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button);
        allowButton.click();
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.isTrue(setting.get());
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchPasteEvent)(codeMirror, { clipboardData: dataTransfer, bubbles: true });
        await new Promise(resolve => setTimeout(resolve, 0));
        const dialogContainer = document.body.querySelector('[data-devtools-glass-pane]');
        assert.isNull(dialogContainer);
    });
    it('does not show self-XSS warning when disabled via command line', async () => {
        const stub = sinon.stub(_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime, 'queryParam');
        stub.withArgs('disableSelfXssWarnings').returns('true');
        await pasteIntoSourceFrame();
        const dialogContainer = document.body.querySelector('[data-devtools-glass-pane]');
        assert.isNull(dialogContainer);
        stub.restore();
    });
});
//# sourceMappingURL=SourceFrame.test.js.map

/***/ })

}]);