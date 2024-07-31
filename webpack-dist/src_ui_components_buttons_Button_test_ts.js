"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_buttons_Button_test_ts"],{

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

/***/ "./src/ui/components/buttons/Button.test.ts":
/*!**************************************************!*\
  !*** ./src/ui/components/buttons/Button.test.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons.js */ "./src/ui/components/buttons/buttons.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__.RenderCoordinator.RenderCoordinator.instance();
describe('Button', () => {
    const iconUrl = new URL(/* asset import */ __webpack_require__(/*! ../../../Images/file-image.svg */ "./src/Images/file-image.svg?9d21"), __webpack_require__.b).toString();
    async function renderButton(data = {
        variant: _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.PRIMARY,
    }, text = 'Button') {
        const button = new _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button();
        button.data = data;
        // Toolbar and round buttons do not take text, and error if you try to set any.
        if (data.variant !== _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.TOOLBAR && data.variant !== _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.ICON) {
            button.innerText = text;
        }
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(button);
        await coordinator.done();
        return button;
    }
    async function testClick(data = {
        variant: _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.PRIMARY,
        disabled: false,
    }, expectedClickCount = 1) {
        const button = await renderButton(data);
        let clicks = 0;
        button.onclick = () => clicks++;
        const innerButton = button.shadowRoot?.querySelector('button');
        assert.instanceOf(innerButton, HTMLButtonElement);
        innerButton.click();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(innerButton, {
            key: 'Enter',
        });
        assert.strictEqual(clicks, expectedClickCount);
    }
    it('primary button can be clicked', async () => {
        await testClick({
            variant: _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.PRIMARY,
        });
    });
    it('disabled primary button cannot be clicked', async () => {
        await testClick({
            variant: _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.PRIMARY,
            disabled: true,
        }, 0);
    });
    it('secondary button can be clicked', async () => {
        await testClick({
            variant: _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.OUTLINED,
        });
    });
    it('disabled secondary button cannot be clicked', async () => {
        await testClick({
            variant: _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.OUTLINED,
            disabled: true,
        }, 0);
    });
    it('toolbar button can be clicked', async () => {
        await testClick({
            variant: _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.TOOLBAR,
            iconUrl,
        });
    });
    it('disabled toolbar button cannot be clicked', async () => {
        await testClick({
            variant: _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.TOOLBAR,
            iconUrl,
            disabled: true,
        }, 0);
    });
    it('gets the no additional classes set for the inner button if only text is provided', async () => {
        const button = await renderButton();
        const innerButton = button.shadowRoot?.querySelector('button');
        assert.isTrue(!innerButton.classList.contains('text-with-icon'));
        assert.isTrue(!innerButton.classList.contains('only-icon'));
    });
    it('gets title set', async () => {
        const button = await renderButton({
            variant: _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.PRIMARY,
            title: 'Custom',
        });
        const innerButton = button.shadowRoot?.querySelector('button');
        assert.strictEqual(innerButton.title, 'Custom');
        button.title = 'Custom2';
        await coordinator.done();
        assert.strictEqual(innerButton.title, 'Custom2');
    });
    it('gets the text-with-icon class set for the inner button if text and icon is provided', async () => {
        const button = await renderButton({
            variant: _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.PRIMARY,
            iconUrl,
        }, 'text');
        const innerButton = button.shadowRoot?.querySelector('button');
        assert.isTrue(innerButton.classList.contains('text-with-icon'));
        assert.isTrue(!innerButton.classList.contains('only-icon'));
    });
    it('gets the only-icon class set for the inner button if only icon is provided', async () => {
        const button = await renderButton({
            variant: _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.PRIMARY,
            iconUrl,
        }, '');
        const innerButton = button.shadowRoot?.querySelector('button');
        assert.isTrue(!innerButton.classList.contains('text-with-icon'));
        assert.isTrue(innerButton.classList.contains('only-icon'));
    });
    it('gets the `small` class set for the inner button if size === SMALL', async () => {
        const button = await renderButton({
            variant: _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.PRIMARY,
            size: _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Size.SMALL,
        }, '');
        const innerButton = button.shadowRoot?.querySelector('button');
        assert.isTrue(innerButton.classList.contains('small'));
    });
    it('does not get the `small` class set for the inner button if size === MEDIUM', async () => {
        const button = await renderButton({
            variant: _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.PRIMARY,
            iconUrl,
        }, '');
        const innerButton = button.shadowRoot?.querySelector('button');
        assert.isFalse(innerButton.classList.contains('small'));
    });
    describe('in forms', () => {
        async function renderForm(data = {
            variant: _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.PRIMARY,
        }) {
            const form = document.createElement('form');
            const input = document.createElement('input');
            const button = new _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button();
            const reference = {
                submitCount: 0,
                form,
                button,
                input,
            };
            form.onsubmit = (event) => {
                event.preventDefault();
                reference.submitCount++;
            };
            button.data = data;
            button.innerText = 'button';
            form.append(input);
            form.append(button);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(form);
            await coordinator.done();
            return reference;
        }
        it('submits a form with button[type=submit]', async () => {
            const state = await renderForm({
                variant: _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.PRIMARY,
                type: 'submit',
            });
            state.button.click();
            assert.strictEqual(state.submitCount, 1);
        });
        it('does not submit a form with button[type=button]', async () => {
            const state = await renderForm({
                variant: _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.PRIMARY,
                type: 'button',
            });
            state.button.click();
            assert.strictEqual(state.submitCount, 0);
        });
        it('resets a form with button[type=reset]', async () => {
            const state = await renderForm({
                variant: _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.PRIMARY,
                type: 'reset',
            });
            state.input.value = 'test';
            state.button.click();
            assert.strictEqual(state.input.value, '');
        });
    });
});


/***/ })

}]);