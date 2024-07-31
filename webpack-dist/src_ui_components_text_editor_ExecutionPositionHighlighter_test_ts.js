"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_text_editor_ExecutionPositionHighlighter_test_ts"],{

/***/ "./src/testing/DOMHelpers.ts":
/*!***********************************!*\
  !*** ./src/testing/DOMHelpers.ts ***!
  \***********************************/
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
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
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


/***/ }),

/***/ "./src/ui/components/text_editor/ExecutionPositionHighlighter.test.ts":
/*!****************************************************************************!*\
  !*** ./src/ui/components/text_editor/ExecutionPositionHighlighter.test.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _text_editor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text_editor.js */ "./src/ui/components/text_editor/text_editor.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



function syntaxParserDone(view) {
    return new Promise(resolve => {
        (function check() {
            if (!_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.syntaxParserRunning(view)) {
                resolve();
            }
            else {
                window.requestIdleCallback(check);
            }
        })();
    });
}
describe('TextEditor', () => {
    describe('ExecutionPositionHighlighter', () => {
        const { positionHighlighter, setHighlightedPosition, clearHighlightedPosition } = _text_editor_js__WEBPACK_IMPORTED_MODULE_2__.ExecutionPositionHighlighter;
        function createEditorView({ doc, extensions }) {
            if (extensions === undefined) {
                extensions = [];
            }
            extensions = [extensions, positionHighlighter('cm-executionLine', 'cm-executionToken')];
            const state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.EditorState.create({ doc, extensions });
            const parent = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(document.createElement('main'));
            return new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.EditorView({ state, parent });
        }
        describe('positionHighlighter', () => {
            it('defaults to no position highlighting with no syntax extensions', () => {
                const doc = 'This is some text';
                const view = createEditorView({ doc });
                assert.isFalse(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.syntaxParserRunning(view));
                assert.lengthOf(view.dom.querySelectorAll('.cm-executionLine'), 0);
                assert.lengthOf(view.dom.querySelectorAll('.cm-executionToken'), 0);
            });
            it('defaults to no position highlighting with JavaScript syntax', async () => {
                const doc = 'console.log("Hello World!")';
                const extensions = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.javascript.javascript();
                const view = createEditorView({ doc, extensions });
                await syntaxParserDone(view);
                assert.lengthOf(view.dom.querySelectorAll('.cm-executionLine'), 0);
                assert.lengthOf(view.dom.querySelectorAll('.cm-executionToken'), 0);
            });
        });
        describe('setHighlightedPosition', () => {
            it('highlights line but not token with no syntax extensions', () => {
                const doc = 'Hello world!';
                const view = createEditorView({ doc });
                assert.isFalse(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.syntaxParserRunning(view));
                view.dispatch({ effects: setHighlightedPosition.of(doc.indexOf('world')) });
                assert.lengthOf(view.dom.querySelectorAll('.cm-executionLine'), 1);
                assert.strictEqual(view.dom.querySelector('.cm-executionLine').textContent, doc);
                assert.lengthOf(view.dom.querySelectorAll('.cm-executionToken'), 0);
            });
            it('highlights line and token with JavaScript syntax', async () => {
                const doc = 'console.log("Hello World!")';
                const extensions = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.javascript.javascript();
                const view = createEditorView({ doc, extensions });
                await syntaxParserDone(view);
                view.dispatch({ effects: setHighlightedPosition.of(doc.indexOf('log')) });
                assert.lengthOf(view.dom.querySelectorAll('.cm-executionLine'), 1);
                assert.strictEqual(view.dom.querySelector('.cm-executionLine').textContent, doc);
                assert.lengthOf(view.dom.querySelectorAll('.cm-executionToken'), 1);
                assert.strictEqual(view.dom.querySelector('.cm-executionToken').textContent, 'log');
            });
            it('highlights line immediately with JavaScript syntax', () => {
                const doc = 'console.log("Hello World!");\n'.repeat(1000) + 'foo();';
                const extensions = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.javascript.javascript();
                const view = createEditorView({ doc, extensions });
                const position = doc.lastIndexOf('foo');
                view.dispatch({
                    effects: [
                        _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.EditorView.scrollIntoView(position),
                        setHighlightedPosition.of(position),
                    ],
                });
                assert.isTrue(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.syntaxParserRunning(view));
                assert.lengthOf(view.dom.querySelectorAll('.cm-executionLine'), 1);
                assert.strictEqual(view.dom.querySelector('.cm-executionLine').textContent, doc.slice(position));
            });
            it('highlights token once incremental parser catches up with JavaScript syntax', async () => {
                const doc = 'console.log("Hello World!");\n'.repeat(1000) + 'foo();';
                const extensions = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.javascript.javascript();
                const view = createEditorView({ doc, extensions });
                const position = doc.lastIndexOf('foo');
                view.dispatch({
                    effects: [
                        _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.EditorView.scrollIntoView(position),
                        setHighlightedPosition.of(position),
                    ],
                });
                await syntaxParserDone(view);
                assert.lengthOf(view.dom.querySelectorAll('.cm-executionToken'), 1);
                assert.strictEqual(view.dom.querySelector('.cm-executionToken').textContent, 'foo');
            });
        });
        describe('clearHighlightedPosition', () => {
            it('clears any highlighting with JavaScript syntax', async () => {
                const doc = 'console.log("Hello World!")';
                const extensions = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.javascript.javascript();
                const view = createEditorView({ doc, extensions });
                await syntaxParserDone(view);
                view.dispatch({ effects: setHighlightedPosition.of(doc.indexOf('log')) });
                assert.lengthOf(view.dom.querySelectorAll('.cm-executionLine'), 1);
                assert.lengthOf(view.dom.querySelectorAll('.cm-executionToken'), 1);
                view.dispatch({ effects: clearHighlightedPosition.of() });
                assert.lengthOf(view.dom.querySelectorAll('.cm-executionLine'), 0);
                assert.lengthOf(view.dom.querySelectorAll('.cm-executionToken'), 0);
            });
        });
    });
});


/***/ })

}]);