"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_linear_memory_inspector_components_LinearMemoryNavigator_test_ts"],{

/***/ "./src/panels/linear_memory_inspector/components/LinearMemoryNavigator.test.ts":
/*!*************************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/LinearMemoryNavigator.test.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NAVIGATOR_ADDRESS_SELECTOR: () => (/* binding */ NAVIGATOR_ADDRESS_SELECTOR),
/* harmony export */   NAVIGATOR_HISTORY_BUTTON_SELECTOR: () => (/* binding */ NAVIGATOR_HISTORY_BUTTON_SELECTOR),
/* harmony export */   NAVIGATOR_PAGE_BUTTON_SELECTOR: () => (/* binding */ NAVIGATOR_PAGE_BUTTON_SELECTOR),
/* harmony export */   NAVIGATOR_REFRESH_BUTTON_SELECTOR: () => (/* binding */ NAVIGATOR_REFRESH_BUTTON_SELECTOR)
/* harmony export */ });
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.js */ "./src/panels/linear_memory_inspector/components/components.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const NAVIGATOR_ADDRESS_SELECTOR = '[data-input]';
const NAVIGATOR_PAGE_BUTTON_SELECTOR = '[data-button=pagenavigation]';
const NAVIGATOR_HISTORY_BUTTON_SELECTOR = '[data-button=historynavigation]';
const NAVIGATOR_REFRESH_BUTTON_SELECTOR = '[data-button=refreshrequested]';
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('LinearMemoryNavigator', () => {
    let component;
    beforeEach(renderNavigator);
    function renderNavigator() {
        component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.LinearMemoryNavigator();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        component.data = {
            address: '20',
            valid: true,
            mode: _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.Mode.Submitted,
            error: undefined,
            canGoBackInHistory: true,
            canGoForwardInHistory: true,
        };
    }
    async function assertNavigationEvents(eventType) {
        const shadowRoot = component.shadowRoot;
        assert.isNotNull(shadowRoot);
        const pageNavigationButtons = shadowRoot.querySelectorAll(`[data-button=${eventType}]`);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.assertElements)(pageNavigationButtons, HTMLButtonElement);
        assert.lengthOf(pageNavigationButtons, 2);
        const navigation = [];
        for (const button of pageNavigationButtons) {
            const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, eventType);
            button.click();
            const event = await eventPromise;
            navigation.push(event.data);
        }
        assert.deepEqual(navigation, [
            _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.Navigation.Backward,
            _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.Navigation.Forward,
        ]);
    }
    it('renders navigator address', () => {
        const shadowRoot = component.shadowRoot;
        assert.isNotNull(shadowRoot);
        const input = shadowRoot.querySelector(NAVIGATOR_ADDRESS_SELECTOR);
        assert.instanceOf(input, HTMLInputElement);
        assert.strictEqual(input.value, '20');
    });
    it('re-renders address on address change', () => {
        component.data = {
            address: '16',
            valid: true,
            mode: _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.Mode.Submitted,
            error: undefined,
            canGoBackInHistory: false,
            canGoForwardInHistory: false,
        };
        const shadowRoot = component.shadowRoot;
        assert.isNotNull(shadowRoot);
        const input = shadowRoot.querySelector(NAVIGATOR_ADDRESS_SELECTOR);
        assert.instanceOf(input, HTMLInputElement);
        assert.strictEqual(input.value, '16');
    });
    it('sends event when clicking on refresh', async () => {
        const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'refreshrequested');
        const shadowRoot = component.shadowRoot;
        assert.isNotNull(shadowRoot);
        const refreshButton = shadowRoot.querySelector(NAVIGATOR_REFRESH_BUTTON_SELECTOR);
        assert.instanceOf(refreshButton, HTMLButtonElement);
        refreshButton.click();
        assert.isNotNull(await eventPromise);
    });
    it('sends events when clicking previous and next page', async () => {
        await assertNavigationEvents('historynavigation');
    });
    it('sends events when clicking undo and redo', async () => {
        await assertNavigationEvents('pagenavigation');
    });
    it('disables the previous and next page buttons if specified as not navigatable', () => {
        component.data = {
            address: '0',
            valid: true,
            mode: _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.Mode.Submitted,
            error: undefined,
            canGoBackInHistory: false,
            canGoForwardInHistory: false,
        };
        const buttons = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, NAVIGATOR_HISTORY_BUTTON_SELECTOR, HTMLButtonElement);
        assert.lengthOf(buttons, 2);
        const historyBack = buttons[0];
        const historyForward = buttons[1];
        assert.isTrue(historyBack.disabled);
        assert.isTrue(historyForward.disabled);
    });
    it('shows tooltip on hovering over address', () => {
        const input = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, NAVIGATOR_ADDRESS_SELECTOR, HTMLInputElement);
        assert.strictEqual(input.title, 'Enter address');
    });
    it('shows tooltip with error and selects all text on submitting invalid address input', () => {
        const error = 'Address is invalid';
        const invalidAddress = '60';
        component.data = {
            address: invalidAddress,
            valid: false,
            mode: _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.Mode.InvalidSubmit,
            error,
            canGoBackInHistory: false,
            canGoForwardInHistory: false,
        };
        const input = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, NAVIGATOR_ADDRESS_SELECTOR, HTMLInputElement);
        assert.strictEqual(input.title, error);
        assert.isNotNull(input.selectionStart);
        assert.isNotNull(input.selectionEnd);
        if (input.selectionEnd !== null && input.selectionStart !== null) {
            const selectionLength = input.selectionEnd - input.selectionStart;
            assert.strictEqual(selectionLength, invalidAddress.length);
        }
    });
    it('shows tooltip with invalid address on hovering over address', () => {
        const error = 'Address is invalid';
        component.data = {
            address: '60',
            valid: false,
            mode: _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.Mode.Edit,
            error,
            canGoBackInHistory: false,
            canGoForwardInHistory: false,
        };
        const input = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, NAVIGATOR_ADDRESS_SELECTOR, HTMLInputElement);
        assert.strictEqual(input.title, error);
    });
    it('shows tooltip on page navigation buttons', () => {
        const buttons = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, NAVIGATOR_PAGE_BUTTON_SELECTOR, HTMLButtonElement);
        assert.lengthOf(buttons, 2);
        const pageBack = buttons[0];
        const pageForward = buttons[1];
        assert.strictEqual(pageBack.title, 'Previous page');
        assert.strictEqual(pageForward.title, 'Next page');
    });
    it('shows tooltip on history navigation buttons', () => {
        const buttons = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, NAVIGATOR_HISTORY_BUTTON_SELECTOR, HTMLButtonElement);
        assert.lengthOf(buttons, 2);
        const historyBack = buttons[0];
        const historyForward = buttons[1];
        assert.strictEqual(historyBack.title, 'Go back in address history');
        assert.strictEqual(historyForward.title, 'Go forward in address history');
    });
    it('shows tooltip on refresh button', () => {
        const refreshButton = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, NAVIGATOR_REFRESH_BUTTON_SELECTOR, HTMLButtonElement);
        assert.strictEqual(refreshButton.title, 'Refresh');
    });
});


/***/ }),

/***/ "./src/panels/linear_memory_inspector/components/LinearMemoryViewerUtils.ts":
/*!**********************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/LinearMemoryViewerUtils.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ }),

/***/ "./src/panels/linear_memory_inspector/components/components.ts":
/*!*********************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/components.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinearMemoryHighlightChipList: () => (/* reexport module object */ _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   LinearMemoryInspector: () => (/* reexport module object */ _LinearMemoryInspector_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   LinearMemoryInspectorUtils: () => (/* reexport module object */ _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   LinearMemoryNavigator: () => (/* reexport module object */ _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   LinearMemoryValueInterpreter: () => (/* reexport module object */ _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   LinearMemoryViewer: () => (/* reexport module object */ _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   LinearMemoryViewerUtils: () => (/* reexport module object */ _LinearMemoryViewerUtils_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   ValueInterpreterDisplay: () => (/* reexport module object */ _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   ValueInterpreterDisplayUtils: () => (/* reexport module object */ _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   ValueInterpreterSettings: () => (/* reexport module object */ _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_9__)
/* harmony export */ });
/* harmony import */ var _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinearMemoryHighlightChipList.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.ts");
/* harmony import */ var _LinearMemoryInspector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinearMemoryInspector.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryInspector.ts");
/* harmony import */ var _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinearMemoryInspectorUtils.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.ts");
/* harmony import */ var _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinearMemoryNavigator.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryNavigator.ts");
/* harmony import */ var _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinearMemoryValueInterpreter.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.ts");
/* harmony import */ var _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinearMemoryViewer.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryViewer.ts");
/* harmony import */ var _LinearMemoryViewerUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LinearMemoryViewerUtils.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryViewerUtils.ts");
/* harmony import */ var _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ValueInterpreterDisplay.js */ "./src/panels/linear_memory_inspector/components/ValueInterpreterDisplay.ts");
/* harmony import */ var _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ValueInterpreterDisplayUtils.js */ "./src/panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.ts");
/* harmony import */ var _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ValueInterpreterSettings.js */ "./src/panels/linear_memory_inspector/components/ValueInterpreterSettings.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.













/***/ }),

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


/***/ })

}]);